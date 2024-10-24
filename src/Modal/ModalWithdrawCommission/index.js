import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    distributorRedeem,
    getDistributorTxLog,
    queryWithdraw,
    createWithdraw,
    rejectWithdraw,
    claimWithdraw,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
    renderTime,
    formatUtcTime,
    getMonthString,
    pageSize,
} from "../../utils/common";
import { useMemo } from "react";
import Countdown from "../../utils/countdown";
import ModalWithdrawHistory from "../ModalWithdrawHistory";
import "./index.css"
import moment from "moment";

const contactUrl = "resellers@upnetwork.xyz";

const ModalWithdrawCommission = ({
    userInfo,
    withdrawableVolume,
    closeFn = () => {},
    useVerticalMode,
}) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [withdrawState, setWithdrawState] = useState(5); //0:free, 1:review, 2:to be submitted, 3:reject, 4:submitting, 5:loading, 6:success, 7:failed
    const [showWithdrawHistory, setShowWithdrawHistory] = useState(false);
    const [lastWithdrawData, setLastWithdrawData] = useState(null);
    const [createWithdrawLock, setCreateWithdrawLock] = useState(false);
    const [claimWithdrawLock, setClaimWithdrawLock] = useState(false);
    const [updateCount, setUpdateCount] = useState(0);
    const [claimUpdateCount, setClaimUpdateCount] = useState(0);
    const [reviewTime, setReviewTime] = useState(24*60*60);
    const [minWithdrawAmount, setMinWithdrawAmount] = useState(80);

    const {
        uid,
    } = useMemo(() => {
        return userInfo || {};
    }, [userInfo])

    const handleWalletAddressChange = (e) => {
        setWalletAddress(e.target.value);
    };

    const handleWithdrawAmountChange = (e) => {
        let num = Math.floor(Number(e.target.value));
        setWithdrawAmount(num);
    };

    const convertTime = (time) => {
        let timeDate = new Date(Number(time) * 1000);
        let year = timeDate.getUTCFullYear();
        let month = timeDate.getUTCMonth() + 1;
        let day = timeDate.getUTCDate();
        let hour = timeDate.getUTCHours();
        let minute = timeDate.getUTCMinutes();
        let second = timeDate.getUTCSeconds();
        let monthStr = getMonthString(month);
        return `${monthStr} ${day},${year}, ${hour.toString()?.padStart(2, '0')}:${minute.toString()?.padStart(2, '0')}:${second.toString()?.padStart(2, '0')} UTC`;
    }

    const getLastCommission = (callback = () => {}) => {
        queryWithdraw(0, pageSize).then(res => {
            if (res?.list?.length > 0){
                let tempLastWithdrawData = res?.list[0];
                let state = Number(tempLastWithdrawData.state);
                if (state === 1){
                    //交易成功
                    setLastWithdrawData(tempLastWithdrawData);
                    let isConfirm = localStorage.getItem(`upnetwork_reseller_withdraw_confirm_${tempLastWithdrawData?.withdrawId}`);
                    if (isConfirm){
                        setWithdrawState(0);
                    }
                    else{
                        setWithdrawState(6);
                    }
                }
                else if (state === 2){
                    //已被拒绝
                    setLastWithdrawData(tempLastWithdrawData);
                    let isConfirm = localStorage.getItem(`upnetwork_reseller_withdraw_confirm_${tempLastWithdrawData?.withdrawId}`);
                    if (isConfirm){
                        setWithdrawState(0);
                    }
                    else{
                        setWithdrawState(3);
                    }
                }
                else if (state === 3){
                    //审核中
                    setWithdrawState(1);
                    setLastWithdrawData(tempLastWithdrawData);
                }
                else if (state === 4){
                    //失败
                    setLastWithdrawData(tempLastWithdrawData);
                    let isConfirm = localStorage.getItem(`upnetwork_reseller_withdraw_confirm_${tempLastWithdrawData?.withdrawId}`);
                    if (isConfirm){
                        setWithdrawState(0);
                    }
                    else{
                        setWithdrawState(7);
                    }
                }
                else if (state === 5){
                    //可领取
                    setWithdrawState(2);
                    setLastWithdrawData(tempLastWithdrawData);
                }
                else if (state === 6){
                    //领取中
                    setWithdrawState(4);
                    setLastWithdrawData(tempLastWithdrawData);
                }
            }
            else {
                setWithdrawState(0);
            }
            if (res?.reviewTime > 0){
                setReviewTime(Number(res?.reviewTime));
            }
            if (res?.minWithdrawAmount){
                setMinWithdrawAmount(Number(res?.minWithdrawAmount));
            }
            if (callback){
                callback();
            }
        }).catch(e => {
            console.error("[queryWithdraw error]", e);
            setWithdrawState(0);
            if (callback){
                callback();
            }
        })
    }

    const startWithdraw = () => {
        if (withdrawAmount < minWithdrawAmount){
            message.error({ content: 'Minimum amount not met' });
            return;
        }
        if (withdrawAmount > withdrawableVolume){
            message.error({ content: 'Insufficient Balance' });
            return;
        }
        const regex = /^0x[0-9a-fA-F]{40}$/;
        if (!regex.test(walletAddress)) {
            message.error({ content: 'Invalid wallet' });
            return;
        }
        if (createWithdrawLock){
            return;
        }
        setCreateWithdrawLock(true);
        createWithdraw(withdrawAmount, walletAddress).then(res => {
            if (res?.code == 0){
                getLastCommission(() => {
                    setCreateWithdrawLock(false);
                });
            }
            else{
                setCreateWithdrawLock(false);
                message.error({ content: res?.code })
            }
        }).catch(e => {
            console.error("[createWithdraw error]", e);
            setCreateWithdrawLock(false);
        })
    }

    const startClaimWithdraw = () => {
        if (lastWithdrawData){
            if (claimWithdrawLock){
                return;
            }
            setClaimWithdrawLock(true);
            claimWithdraw(lastWithdrawData?.withdrawId).then(res => {
                if (res?.code == 0){
                    setClaimUpdateCount(0);
                    getLastCommission(() => {
                        setClaimWithdrawLock(false);
                    });
                }
                else{
                    setClaimWithdrawLock(false);
                    message.error({ content: res?.code })
                }
            }).catch(e => {
                console.error("[claimWithdraw error]", e);
                setClaimWithdrawLock(false);
            })
        }
        else{
            console.log("[claimWithdraw] cannot find withdraw data");
        }
    }

    useEffect(() => {
        getLastCommission();
    }, []);

    useEffect(() => {
        let tempClaimUpdateCount = claimUpdateCount + 1;
        if (tempClaimUpdateCount >= 10 && withdrawState === 4){
            tempClaimUpdateCount = 0;
            getLastCommission();
        }
        setClaimUpdateCount(tempClaimUpdateCount);

        setTimeout(() => {
            setUpdateCount(updateCount + 1);
        }, 1000);
    }, [updateCount])

    return (
        <div className={`ModalWithdrawCommission flex_center_start_col fontCommon`}>
            <div className="w100p fs20 fb tlc" style={{marginTop: '55px'}}>
                {`Withdraw commission`}
            </div>
            <div className="w100p flex_center_center" style={{marginTop: '16px'}}>
                <div className="fs12 color-999">
                    {`Available Balance`}
                </div>
                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml8 mr8" width={20} height={20}/>
                <div className="fs12 fb">
                    {`${convertBalance(withdrawableVolume || 0)}`}
                </div>
                <CustomIcon imgName={`UI_Picture_Icon_History_01`} className="ml8" width={20} height={20} onClick={() => {
                    setShowWithdrawHistory(true);
                }}/>
            </div>
            {
                withdrawState === 0 ?
                    <>
                        <div className="w100p fs12 color-999" style={{paddingLeft: '40px', marginTop: '11px'}}>
                            {`ERC-20`}
                        </div>
                        <Input
                            value={walletAddress}
                            className={`withdrawCommissionAddressInput fontCommon`}
                            placeholder='Enter Wallet Address'
                            onChange={handleWalletAddressChange}
                        ></Input>
                        <div className="w100p fs12 color-999" style={{paddingLeft: '40px', marginTop: '24px'}}>
                            {`Minimum amount ${minWithdrawAmount}`}
                        </div>
                        <Input
                            value={withdrawAmount}
                            className={`withdrawCommissionAddressInput fontCommon`}
                            placeholder='Amount'
                            onChange={handleWithdrawAmountChange}
                            type={'number'}
                        ></Input>
                        <div className={`comfirmbtn withdrawCommissionBtn flex_center_center fontCommon`} onClick={() => {
                            startWithdraw();
                        }}>
                            {`Confirm`}
                        </div> 
                        <div className="fs12 color-999" style={{margin: '24px 0px'}}>
                            {`Withdrawals require a 24-hour review period after initiation`}
                        </div>
                    </> :
                withdrawState === 1 ?
                    <>
                        <div className="withdrawCommissionReviewRoot flex_center_start_col">
                            <div className="w100p flex_center_center">
                                <div className="fs14">
                                    {`Request withdrawal`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml5 mr5" width={20} height={20}/>
                                <div className="fs14 fb">
                                    {convertBalance(lastWithdrawData?.usdtAmount || 0)}
                                </div>
                            </div>
                            <div className="w100p mt10 tlc fs12 color-999" style={{height: '20px'}}>
                                {`at ${convertTime(lastWithdrawData?.commitTime)}`}
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '14px'}}>
                                <div className="fs12 color-999">
                                    {`To`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                    if (lastWithdrawData?.beneficiary){
                                        copyFn(lastWithdrawData?.beneficiary);
                                    }
                                }}/>
                                <div className="fs12 color-999 forceWordBreak">
                                    {`${lastWithdrawData?.beneficiary || ''}`}
                                </div>
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '26px'}}>
                                <div className="fs12 mr6">
                                    {`Approval Countdown:`}
                                </div>
                                <div className="fs20 fb">
                                    <Countdown refresh={() => {
                                        getLastCommission();
                                    }}
                                        workEndTimestamp={(Number(lastWithdrawData?.commitTime) || 0) + reviewTime}/>
                                </div>
                            </div>
                        </div>
                    </> :
                withdrawState === 2 || withdrawState ===  4 || withdrawState === 6 || withdrawState === 7 ?
                    <>
                        <div className="withdrawCommissionClaimRoot flex_center_start_col">
                            <div className="w100p flex_center_center">
                                <div className="fs14">
                                    {`Request withdrawal`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml5 mr5" width={20} height={20}/>
                                <div className="fs14 fb">
                                    {convertBalance(lastWithdrawData?.usdtAmount || 0)}
                                </div>
                            </div>
                            <div className="w100p mt10 tlc fs12 color-999" style={{height: '20px'}}>
                                {`at ${convertTime(lastWithdrawData?.commitTime)}`}
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '14px'}}>
                                <div className="fs12 color-999">
                                    {`To`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                    if (lastWithdrawData?.beneficiary){
                                        copyFn(lastWithdrawData?.beneficiary);
                                    }
                                }}/>
                                <div className="fs12 color-999 forceWordBreak">
                                    {`${lastWithdrawData?.beneficiary || ''}`}
                                </div>
                            </div>
                            {
                                withdrawState === 2 ?
                                    <div className="w100p tlc fs14 fb color-yellow" style={{marginTop: '18px'}}>
                                        {`Approval granted. Please claim your reward`}
                                    </div> :
                                withdrawState === 4 ?
                                    <div className="w100p tlc fs14 fb color-yellow" style={{marginTop: '18px'}}>
                                        {`Processing request. Please wait...`}
                                    </div> :
                                withdrawState === 6 ?
                                    <div className="w100p tlc fs14 fb flex_center_center" style={{marginTop: '18px'}}>
                                        {`TXN`}
                                        <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                            if (lastWithdrawData?.txHash){
                                                copyFn(lastWithdrawData?.txHash);
                                            }
                                        }}/>
                                        <div className="forceWordBreak tls fs14 fb">
                                            {`${lastWithdrawData?.txHash || ''}`}
                                        </div>
                                    </div> :
                                withdrawState === 7 ?
                                    <div className="w100p tlc fs14 fb color-yellow" style={{marginTop: '18px'}}>
                                        {`Cliam failed. Please try again later`}
                                    </div> :
                                    <></>
                            }
                        </div>
                        {
                            withdrawState === 2 ?
                                <div className={`comfirmbtn withdrawCommissionClaimBtn flex_center_center fontCommon`} onClick={() => {
                                    startClaimWithdraw();
                                }}>
                                    {`Claim`}
                                </div> :
                            withdrawState === 4 ?
                                <div className={`comfirmbtn withdrawCommissionClaimBtn flex_center_center fontCommon`}>
                                    {`Processing`}
                                </div> :
                            withdrawState === 6 ?
                                <div className={`comfirmbtn withdrawCommissionClaimBtn flex_center_center fontCommon`} onClick={() => {
                                    if (lastWithdrawData){
                                        localStorage.setItem(`upnetwork_reseller_withdraw_confirm_${lastWithdrawData?.withdrawId}`, true);
                                    }
                                    setWithdrawState(0);
                                }}>
                                    {`Success`}
                                </div> :
                            withdrawState === 7 ?
                                <div className={`comfirmbtn withdrawCommissionClaimBtn flex_center_center fontCommon`} onClick={() => {
                                    if (lastWithdrawData){
                                        localStorage.setItem(`upnetwork_reseller_withdraw_confirm_${lastWithdrawData?.withdrawId}`, true);
                                    }
                                    setWithdrawState(0);
                                }}>
                                    {`Failed`}
                                </div> :
                                <></>
                        }
                    </> :
                withdrawState === 3 ?
                    <>
                        <div className="withdrawCommissionRejectRoot flex_center_start_col">
                            <div className="w100p flex_center_center">
                                <div className="fs14">
                                    {`Request withdrawal`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml5 mr5" width={20} height={20}/>
                                <div className="fs14 fb">
                                    {convertBalance(lastWithdrawData?.usdtAmount || 0)}
                                </div>
                            </div>
                            <div className="w100p mt10 tlc fs12 color-999" style={{height: '20px'}}>
                                {`at ${convertTime(lastWithdrawData?.commitTime)}`}
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '14px'}}>
                                <div className="fs12 color-999">
                                    {`To`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                    if (lastWithdrawData?.beneficiary){
                                        copyFn(lastWithdrawData?.beneficiary);
                                    }
                                }}/>
                                <div className="fs12 color-999 forceWordBreak">
                                    {`${lastWithdrawData?.beneficiary || ''}`}
                                </div>
                            </div>
                            <div className="w100p tlc fs14 fb color-yellow" style={{marginTop: '18px', height: '20px'}}>
                                {`Your request has been rejected`}
                            </div>
                            <div className="w100p tlc fs14 fb color-yellow" style={{height: '20px'}}>
                                <a className="color-yellow"  style={{textDecoration: 'underline'}} href={`mailto:${contactUrl}`}>Please contact the support team.</a>
                            </div>
                        </div>
                        <div className={`withdrawCommissionRejectConfirmBtn flex_center_center fontCommon`} onClick={() => {
                            if (lastWithdrawData){
                                localStorage.setItem(`upnetwork_reseller_withdraw_confirm_${lastWithdrawData?.withdrawId}`, true);
                            }
                            setWithdrawState(0);
                        }}>
                            {`Confirm`}
                        </div> 
                    </> :
                    <>
                        <CustomIcon rotating={true} imgName={`UI_Picture_Loading_02`} className="mtb20" width={40} height={40}></CustomIcon>
                    </>
            }
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showWithdrawHistory}
                destroyOnClose={true}
                onOk={() => setShowWithdrawHistory(false)}
                onCancel={() => setShowWithdrawHistory(false)}
            >
                <ModalWithdrawHistory
                    userInfo={userInfo}
                    useVerticalMode={useVerticalMode}
                    closeFn={() => {
                        setShowWithdrawHistory(false);
                    }}></ModalWithdrawHistory>
            </Modal>
        </div>
    )
}
export default memo(ModalWithdrawCommission);
