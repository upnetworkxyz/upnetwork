import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    distributorRedeem,
    getDistributorTxLog,
    queryWithdraw,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
    renderTime,
    formatUtcTime,
    sliceString,
    pageSize,
} from "../../utils/common";
import { useMemo } from "react";
import "./index.css"
import moment from "moment";

const ModalWithdrawHistory = ({
    userInfo,
    useVerticalMode,
    closeFn = () => {},
}) => {
    const [nextOffset, setNextOffset] = useState(0);
    const [historyList, setHistoryList] = useState([]);

    const {
        uid,
    } = useMemo(() => {
        return userInfo || {};
    }, [userInfo])

    const getList= (offset = 0) => {
        queryWithdraw(offset, pageSize).then(res => {
            if (res){
                let tempList = [];
                if (offset !== 0){
                    tempList = [...historyList];
                }
                if (res?.list?.length > 0){
                    for (let i = 0; i < res?.list?.length; i++){
                        tempList.push(res?.list[i]);
                    }
                }
                setHistoryList(tempList);
                if (res?.hasNext){
                    setNextOffset(res?.nextOffset);
                }
                else{
                    setNextOffset(-1);
                }
            }
        }).catch(e => {
            console.error("[queryWithdraw error]", e);
        })
    }

    const getMoreList = () => {
        getList(nextOffset);
    }

    useEffect(() => {
        getList(0);
    }, []);

    return (
        <>
            {
                <div className={`ModalWithdrawHistory flex_center_start_col fontCommon`}>
                    <div className="w100p fs20 fb tlc" style={{marginTop: '38px'}}>
                        {`Withdraw History`}
                    </div>
                    <div className={`${useVerticalMode ? `withdrawHistoryListRoot_v` : `flex_center_start_col`}`}>
                        <div className={`${useVerticalMode ? `withdrawHistoryLine_v` : `withdrawHistoryLine`}`}>
                            <div className="statusPart color-999">
                                {`Status`}
                            </div>
                            <div className="amountPart color-999">
                                {`Amount`}
                            </div>
                            <div className="reviewPart color-999">
                                {`Review Date`}
                            </div>
                            <div className="completePart color-999">
                                {`Complete Date`}
                            </div>
                            <div className="toAddressPart color-999">
                                {`To`}
                            </div>
                            <div className="txnPart color-999">
                                {`TXN`}
                            </div>
                        </div>
                        <div className={`${useVerticalMode ? `withdrawHistoryList_v` : `withdrawHistoryList`} flex_center_start_col`} id={`${useVerticalMode?`withdrawHistoryList_v`:`withdrawHistoryList`}`}>
                            {
                                historyList?.length > 0 &&
                                    <InfiniteScroll
                                        dataLength={historyList?.length || 0}
                                        next={getMoreList}
                                        hasMore={nextOffset !== -1}
                                        loader={<div
                                            style={{
                                                textAlign: "center",
                                                width: "100%",
                                            }}
                                        ><Spin /></div>}
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: `flex-start`,
                                            width: '100%',
                                            overflow: 'hidden'
                                        }}
                                        scrollableTarget={`${useVerticalMode?`withdrawHistoryList_v`:`withdrawHistoryList`}`}
                                    >
                                        {
                                            historyList.map((item, index) => {
                                                const {
                                                    state,
                                                    beneficiary,
                                                    commitTime,
                                                    confirmTime,
                                                    rejectTime,
                                                    txHash,
                                                    usdtAmount,
                                                    userId,
                                                    withdrawId,
                                                } = item || {};
                                                let stateIcon = '';
                                                let stateNum = Number(state);
                                                if (stateNum === 3){
                                                    stateIcon = 'UI_Picture_Icon_Reviewing';
                                                }
                                                else if (stateNum === 5 || stateNum === 6){
                                                    stateIcon = 'UI_Picture_Icon_Withdrawing';
                                                }
                                                else if (stateNum === 1){
                                                    stateIcon = 'UI_Picture_Icon_Succeed_01';
                                                }
                                                else if (stateNum === 2 || stateNum === 4){
                                                    stateIcon = 'UI_Picture_Icon_Rejected';
                                                }
                                                let finishTime = Number(confirmTime) || Number(rejectTime) || 0;
                                                return (
                                                    <div key={index} className="withdrawHistoryListLine flex_center_start">
                                                        <div className="statusPart flex_center_center">
                                                            <CustomIcon imgName={`${stateIcon}`} className="op4" width={20} height={20} />
                                                        </div>
                                                        <div className="amountPart flex_center_start">
                                                            <CustomIcon imgName={`UI_Picture_USDT_01`} className="mr5" width={20} height={20} />
                                                            <div className="fs12">
                                                                {convertBalance(Number(usdtAmount) || 0)}
                                                            </div>
                                                        </div>
                                                        <div className="reviewPart fs12 color-999">
                                                            {`${formatUtcTime(commitTime)} UTC`}
                                                        </div>
                                                        <div className="completePart fs12 color-999">
                                                            {finishTime > 0 ? `${formatUtcTime(finishTime)} UTC` : `--`}
                                                        </div>
                                                        <div className="toAddressPart flex_center_center fs12" onClick={() => {
                                                            copyFn(beneficiary);
                                                        }}>
                                                            <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="mr2 op4" width={20} height={20} />
                                                            <div className="fs12 color-999">
                                                                {sliceString(beneficiary, 4, 4)}
                                                            </div>
                                                        </div>
                                                        <div className="txnPart fs12 flex_center_center">
                                                            <CustomIcon imgName={`UI_Picture_Icon_Share_01`} className="op4" width={20} height={20} onClick={() => {
                                                                let url = `https://etherscan.io/tx/${txHash}`;
                                                                window.open(url);
                                                            }} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </InfiniteScroll>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default memo(ModalWithdrawHistory);
