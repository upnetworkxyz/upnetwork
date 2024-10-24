import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import {
    distributorRedeem,
    getDistributorTxLog,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
    isMobile,
} from "../../utils/common";
import ModalHistoryTransaction from "../ModalHistoryTransaction";
import ModalActivationCode from "../ModalActivationCode";
import ModalWithdrawCommission from "../ModalWithdrawCommission";
import DistributorCommissionTiers from "../../utils/json/DistributorCommissionTiers.json";
import ModalHistoryCommission from "../ModalHistoryCommission";
import { useMemo } from "react";
import "./index.css"

const contactUrl = "resellers@upnetwork.xyz";

const ModalDistribute = ({
    closeFn = () => {},
    distributor,
    userInfo,
    useVerticalMode,
}) => {
    const ModalDistributeTierListRef = useRef(null);
    const [showEthTips, setShowEthTips] = useState(false);
    const [showTronTips, setShowTronTips] = useState(false);
    const [showExternalTips, setShowExternalTips] = useState(false);
    const [showTotalSalesTips, setShowTotalSalesTips] = useState(false);
    const [showAvailableBalanceTips, setShowAvailableBalanceTips] = useState(false);
    const [showHistoryTransaction, setShowHistoryTransaction] = useState(false);
    const [showActivationCode, setShowActivationCode] = useState(false);
    const [showWithdrawCommission, setShowWithdrawCommission] = useState(false);
    const [showHistroyCommission, setShowHistroyCommission] = useState(false);


    const {
        currPeriodSaleAmount,
        lastPeriodSaleAmount,
        profitVolume,
        withdrawVolume,
        lastPeriodReportAmount,
        currPeriodReportAmount,
    } = useMemo(()=>{
        return distributor || {}
    },[distributor])

    const showDistributorTierList = useMemo(() => {
        let res = [];
        let recentSale = Number(lastPeriodSaleAmount || 0) +  Number(currPeriodSaleAmount || 0);
        let startPos = Math.max(DistributorCommissionTiers?.length - 3, 0);

        const filteredTiers = DistributorCommissionTiers?.filter(tier => tier.id !== 0) || [];

        if (filteredTiers?.length > 0){
            if (recentSale <= filteredTiers[0].maxSales){
                startPos = 0;
            }
            for (let i = 0; i < filteredTiers?.length && i < startPos + 3; i++){
                if (startPos > i){
                    let isStartPos = (i + 1 < filteredTiers?.length && recentSale >= filteredTiers[i + 1].minSales && recentSale <= filteredTiers[i + 1].maxSales);
                    if (isStartPos){
                        startPos = i;
                        res.push(filteredTiers[i]);
                    }
                }
                else{
                    res.push(filteredTiers[i]);
                }
            }
        }
        return res;
    }, [DistributorCommissionTiers, lastPeriodSaleAmount, currPeriodSaleAmount])

    useEffect(() => {
        if (distributor){
            let scrollY = 0;
            let recentSale = Number(distributor?.lastPeriodSaleAmount || 0) + Number(distributor?.currPeriodSaleAmount || 0) + Number(distributor?.lastPeriodReportAmount || 0) + Number(distributor?.currPeriodReportAmount || 0);
            if (DistributorCommissionTiers?.length > 0){
                for (let i = 0; i < DistributorCommissionTiers?.length - 2; i++){
                    if (recentSale >= DistributorCommissionTiers[i]?.minSales && recentSale <= DistributorCommissionTiers[i]?.maxSales){
                        break;
                    }
                    if (i > 0){
                        scrollY += 32;
                    }
                }
            }
            ModalDistributeTierListRef.current.scrollTo(0, scrollY);
        }
    }, []);

    const goTransactionHistory = () => {
        getDistributorTxLog(0).then(res => {
            if (res?.txLog?.length > 0){
                setShowHistoryTransaction(true);
            }
            else{
                setShowHistoryTransaction(true);
                message.error({ content: 'no message'})
            }
        }).catch(e => {
            console.error("[getTxLogError]", e);
        })
    }

    const showWalletAddress = (address) => {
        if (useVerticalMode && address?.length > 12){
            return `${address.slice(0,6)}...${address.slice(address.length - 6)}`;
        }
        else{
            return address;
        }
    }

    const totalSales = useMemo(() => {
        const ethereumBalance = distributor?.balance?.ethereum || 0;
        const tronBalance = distributor?.balance?.tron || 0;
        const cumulativeEthereumBalance = distributor?.cumulativeBalance?.ethereum || 0;
        const cumulativeTronBalance = distributor?.cumulativeBalance?.tron || 0;
    
        return ethereumBalance + tronBalance + cumulativeEthereumBalance + cumulativeTronBalance;
    }, [distributor]);    

    return (
        <div className={`ModalDistribute flex_center_start_col fontCommon`}>
            <div className={`${useVerticalMode?`ModalDistributeTop_v`:`ModalDistributeTop`} flex_center_between`}>
                <div className={`flex_center_start_col`} style={{width: `${useVerticalMode?140:158}px`}}>
                    <div className={`${useVerticalMode?`fs10`:`fs12`} color-999`}>
                        {`Available Balance`}
                    </div>
                    <div className="flex_center_start mt5">
                        <CustomIcon imgName={`UI_Picture_USDT_01`} className="" width={useVerticalMode?20:24} height={useVerticalMode?20:24}/>
                        <div 
                            className={`${useVerticalMode?`fs20`:`fs30`} ml8 mr8 fb`}
                            onMouseEnter={() => {
                                if (!showAvailableBalanceTips){
                                    setShowAvailableBalanceTips(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (showAvailableBalanceTips){
                                    setShowAvailableBalanceTips(false);
                                }
                            }}>
                            {
                                showAvailableBalanceTips &&
                                <div className="headBigValueTips">
                                    <span className="fs12 nowrap fontCommon">
                                        {Number(profitVolume).toFixed(2)}
                                    </span>
                                </div>
                            }
                            {`${convertBalance((Number(profitVolume) || 0) - (Number(withdrawVolume) || 0))}`}
                        </div>
                        <CustomIcon imgName={`UI_Picture_Icon_Withdraw_01`} className="" width={useVerticalMode?20:24} height={useVerticalMode?20:24} onClick={() => {
                            setShowWithdrawCommission(true);
                            //message.info('Coming Soon');
                        }}/>
                    </div>
                </div>
                <div className={`flex_center_start_col`} style={{width: `${useVerticalMode?140:158}px`}}>
                    <div className={`${useVerticalMode?`fs10`:`fs12`} color-999`}>
                        {`Total Sales`}
                    </div>
                    <div className="flex_center_start mt5">
                        <CustomIcon imgName={`UI_Picture_USDT_01`} className="" width={useVerticalMode?20:24} height={useVerticalMode?20:24}/>
                        
                        <div 
                            className={`${useVerticalMode?`fs20`:`fs30`} ml8 mr8 fb`}
                            onMouseEnter={() => {
                                if (!showTotalSalesTips){
                                    setShowTotalSalesTips(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (showTotalSalesTips){
                                    setShowTotalSalesTips(false);
                                }
                            }}>
                            {
                                showTotalSalesTips &&
                                <div className="headBigValueTips">
                                    <span className="fs12 nowrap fontCommon">
                                        {Number(totalSales).toFixed(2)}
                                    </span>
                                </div>
                            }
                            {`${convertBalance(totalSales || 0)}`}
                        </div>
                        
                        <CustomIcon imgName={`UI_Picture_Icon_History_01`} className="" width={useVerticalMode?20:24} height={useVerticalMode?20:24} onClick={() => {
                            setShowHistroyCommission(true);
                            //message.info('Coming Soon');
                        }}/>
                    </div>
                </div>
            </div>
            <div className={`${useVerticalMode?`ModalDistributeTopValueRoot_v`:`ModalDistributeTopValueRoot`} flex_center_between`}>
                <div className={`flex_center_start`}>
                    <div className={`${useVerticalMode?`fs10`:`fs12`} color-999 mr5`}>
                        {`Last Month's Sales:`}
                    </div>
                    <div className={`${useVerticalMode?`fs10`:`fs12`}`}>
                        {Number(lastPeriodSaleAmount || 0)}
                    </div>
                </div>
                <div className={`flex_center_start`}>
                    <div className={`${useVerticalMode?`fs10`:`fs12`} color-999 mr5`}>
                        {`This Month's Sales:`}
                    </div>
                    <div className={`${useVerticalMode?`fs10`:`fs12`}`}>
                        {Number(currPeriodSaleAmount || 0)}
                    </div>
                </div>
            </div>
            <div className={`${useVerticalMode?`distributeTierListRoot_v`:`distributeTierListRoot`} posRelative`}>
                <div className={`${useVerticalMode?`ModalDistributeTierListHead_v`:`ModalDistributeTierListHead`} flex_center_start`}>
                    <div className={`${useVerticalMode?`ModalDistributeTierPart_v fs10`:`ModalDistributeTierPart fs12`} color-999`}>
                        {`Tier`}
                    </div>
                    <div className={`${useVerticalMode?`ModalDistributeLastSalePart_v fs10`:`ModalDistributeLastSalePart fs12`} color-999`} style={{lineHeight: 1}}>
                        {`Sales (This & Last Month)`}
                    </div>
                    <div className={`${useVerticalMode?`ModalDistributePricePart_v fs10`:`ModalDistributePricePart fs12`} color-999`}>
                        {`Reseller Price`}
                    </div>
                    <div className={`${useVerticalMode?`ModalDistributeCommissionPart_v fs10`:`ModalDistributeCommissionPart fs12`} color-999`}>
                        {`Commission`}
                    </div>
                </div>
                <div ref={ModalDistributeTierListRef} className={`${useVerticalMode?`ModalDistributeTierList_v`:`ModalDistributeTierList`} posRelative`}>
                    {
                        DistributorCommissionTiers?.length > 0 &&
                        DistributorCommissionTiers
                            .map((item, index) =>{
                            const {
                                id,
                                minSales,
                                maxSales,
                                purchasePrice
                            } = item || {};
                            let recentSale = Number(lastPeriodSaleAmount || 0) + Number(currPeriodSaleAmount || 0) + Number(lastPeriodReportAmount || 0) + Number(currPeriodReportAmount || 0);
                            const isCurrentTier = recentSale >= minSales && recentSale <= maxSales;
                            const isLastTier = index === DistributorCommissionTiers?.length - 1;
                            return (
                                <div key={index} className={`${useVerticalMode?`ModalDistributeTierListLine_v`:`ModalDistributeTierListLine`} ${isCurrentTier?'currentTierLine':''} flex_center_start`}>
                                    <div className={`${useVerticalMode?`ModalDistributeTierPart_v fs10`:`ModalDistributeTierPart fs12`}`}>
                                        {`Tier ${id}${isCurrentTier?' (Current)':''}`}
                                    </div>
                                    <div className={`${useVerticalMode?`ModalDistributeLastSalePart_v fs10`:`ModalDistributeLastSalePart fs12`} flex_center_center`}>
                                        <div className={`${useVerticalMode?`fs10`:`fs12`} posRelative`}>
                                            {isLastTier? `${minSales}+ Units` : `${minSales}-${maxSales} Units`}
                                            {
                                                (isCurrentTier && (Number(lastPeriodReportAmount || 0) + Number(currPeriodReportAmount || 0) > 0)) &&
                                                <CustomIcon imgName={`UI_Picture_Icon_Info`} className="ModalDistributeTierListExternalIcon" width={16} height={16}
                                                    onMouseEnter={() => {
                                                        if (!showExternalTips){
                                                            setShowExternalTips(true);
                                                        }
                                                    }}
                                                    onMouseLeave={() => {
                                                        if (showExternalTips){
                                                            setShowExternalTips(false);
                                                        }
                                                    }}
                                                    onClick={() => {
                                                        if (isMobile()){
                                                            setShowExternalTips(!showExternalTips);
                                                        }
                                                    }}/>
                                            }
                                        </div>
                                    </div>
                                    <div className={`${useVerticalMode?`ModalDistributePricePart_v fs10`:`ModalDistributePricePart fs12`}`}>
                                        {isLastTier? `--` : `$ ${purchasePrice}`}
                                    </div>
                                    <div className={`${useVerticalMode?`ModalDistributeCommissionPart_v fs10`:`ModalDistributeCommissionPart fs12`} flex_center_end`}>
                                        {
                                            isLastTier ? 
                                            <a className={`ModalDistributeCommissionPart2 ${useVerticalMode?`fs10`:`fs12`}`} href={`mailto:${contactUrl}`}>contact us</a>:
                                            <div>
                                                {`$ ${999 - purchasePrice} / Unit`}
                                            </div>
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`posRelative`}>
                {
                    showExternalTips &&
                    <div className={`ModalDistributeTierListExternalTips flex_center_center`}>
                        {`Sold ${(Number(lastPeriodReportAmount) || 0) + (Number(currPeriodReportAmount) || 0)} units from external sources this & last month`}
                    </div>
                }
            </div>
            {
                distributor?.wallet?.ethereum?.length > 0 &&
                <div className={`w100p flex_center_start_col ${useVerticalMode?`distributorWalletLine_v`:`distributorWalletLine`}`}>
                    <div className="w100p flex_center_start">
                        <div className="fs14 fontCommon">
                            {`ERC20-USDT`}
                        </div>
                        <div 
                            className="distributorWalletLineValue ml10"
                            onMouseEnter={() => {
                                if (!showEthTips){
                                    setShowEthTips(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (showEthTips){
                                    setShowEthTips(false);
                                }
                            }}>
                            <div className="distributorIconRoot">
                                <CustomIcon imgName={`UI_Picture_Ethereum_01`} className="distributorIcon1" width={16} height={16}></CustomIcon>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="distributorIcon2" width={16} height={16}></CustomIcon>
                            </div>
                            <div className="fs14 fontCommon">
                                {`${convertBalance(distributor?.balance?.ethereum || 0)} / ${convertBalance(distributor?.cumulativeBalance?.ethereum || 0)}`}
                            </div>
                            {
                                showEthTips &&
                                <div className="distributorWalletLineValueTips">
                                    <span className="fs12 nowrap fontCommon">
                                        {`Current Balance / Total Sales Revenue`}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w100p flex_center_start" style={{marginTop: '4px'}}>
                        <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={24} height={24} onClick={() => {
                            copyFn(distributor?.wallet?.ethereum);
                        }}></CustomIcon>
                        <div className="fs14 color-999 forceWordBreak fontCommon" style={{marginLeft: '7px'}}>
                            {showWalletAddress(distributor?.wallet?.ethereum)}
                        </div>
                    </div>
                </div>
            }
            {
                distributor?.wallet?.tron?.length > 0 &&
                <div className={`w100p flex_center_start_col ${useVerticalMode?`distributorWalletLine_v`:`distributorWalletLine`}`}>
                    <div className="w100p flex_center_start">
                        <div className="fs14 fontCommon">
                            {`TRC20-USDT`}
                        </div>
                        <div 
                            className="distributorWalletLineValue ml10"
                            onMouseEnter={() => {
                                if (!showTronTips){
                                    setShowTronTips(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (showTronTips){
                                    setShowTronTips(false);
                                }
                            }}>
                            <div className="distributorIconRoot">
                                <CustomIcon imgName={`UI_Picture_TRON_01`} className="distributorIcon1" width={16} height={16}></CustomIcon>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="distributorIcon2" width={16} height={16}></CustomIcon>
                            </div>
                            <div className="fs14 fontCommon">
                                {`${convertBalance(distributor?.balance?.tron || 0)} / ${convertBalance(distributor?.cumulativeBalance?.tron || 0)}`}
                            </div>
                            
                            {
                                showTronTips &&
                                <div className="distributorWalletLineValueTips">
                                    <span className="fs12 nowrap fontCommon">
                                        {`Current Balance / Total Sales Revenue`}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w100p flex_center_start" style={{marginTop: '4px'}}>
                        <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={24} height={24} onClick={() => {
                            copyFn(distributor?.wallet?.tron);
                        }}></CustomIcon>
                        <div className="fs14 color-999 forceWordBreak fontCommon" style={{marginLeft: '7px'}}>
                            {showWalletAddress(distributor?.wallet?.tron)}
                        </div>
                    </div>
                </div>
            }
            {/* <div className="w100p flex_center_start_col distributorWalletLine">
                <div className="w100p flex_center_start">
                    <div className="fs14 fontCommon" style={{marginRight: '10px'}}>
                        {`Seller Service`} 
                    </div>
                    <li class=""><a href="mailto:resellers@upnetwork.xyz">resellers@upnetwork.xyz</a></li>              
                </div>
            </div> */}
            
            <div className="w100p flex_center_center" style={{marginTop: `${useVerticalMode?35:27}px`}}>
                <div className={`flex_center_center ${useVerticalMode?`modalDistributeCommonBtn_v`:`modalDistributeCommonBtn`}`} style={{marginRight: `${useVerticalMode?16:60}px`}} onClick={() => { 
                    setShowActivationCode(true);
                }}>
                    <div className={`${useVerticalMode?`fs12`:`fs14`} pointer fb`} >Activation Codes</div>
                </div>
                <div className={`flex_center_center ${useVerticalMode?`modalDistributeCommonBtn_v`:`modalDistributeCommonBtn`}`} onClick={() => { 
                    goTransactionHistory();
                }}>
                    <div className={`${useVerticalMode?`fs12`:`fs14`} pointer fb`} >Transaction History</div>
                </div>
            </div>
            
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showHistoryTransaction}
                destroyOnClose={true}
                onOk={() => setShowHistoryTransaction(false)}
                onCancel={() => setShowHistoryTransaction(false)}
            >
                <ModalHistoryTransaction
                    useVerticalMode={useVerticalMode}
                    closeFn={() => {
                        setShowHistoryTransaction(false);
                    }}></ModalHistoryTransaction>
            </Modal>
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showActivationCode}
                destroyOnClose={true}
                onOk={() => setShowActivationCode(false)}
                onCancel={() => setShowActivationCode(false)}
            >
                <ModalActivationCode
                    useVerticalMode={useVerticalMode}
                    closeFn={() => {
                        setShowActivationCode(false);
                    }}></ModalActivationCode>
            </Modal>
            <Modal
                width='367px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showWithdrawCommission}
                destroyOnClose={true}
                onOk={() => setShowWithdrawCommission(false)}
                onCancel={() => setShowWithdrawCommission(false)}
            >
                <ModalWithdrawCommission
                    userInfo={userInfo}
                    withdrawableVolume={(Number(profitVolume) || 0) - (Number(withdrawVolume) || 0)}
                    closeFn={() => {
                        setShowWithdrawCommission(false);
                    }}
                    useVerticalMode={useVerticalMode}></ModalWithdrawCommission>
            </Modal>
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showHistroyCommission}
                destroyOnClose={true}
                onOk={() => setShowHistroyCommission(false)}
                onCancel={() => setShowHistroyCommission(false)}
            >
                <ModalHistoryCommission
                    useVerticalMode={useVerticalMode}
                    closeFn={() => {
                        setShowHistroyCommission(false);
                    }}></ModalHistoryCommission>
            </Modal>
        </div>
    )
}
export default memo(ModalDistribute);
