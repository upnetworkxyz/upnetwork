import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import DistributorCommissionTiers from "../../utils/json/DistributorCommissionTiers.json";
import {
    distributorRedeem,
    getDistributorTxLog,
    distributorSaleMonth,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
    renderTime,
    formatUtcTime,
    getNowUtcTimestamp,
    getMonthString,
} from "../../utils/common";
import { useMemo } from "react";
import "./index.css"
import moment from "moment";

const ModalHistoryCommission = ({
    useVerticalMode,
    closeFn = () => {},
}) => {
    //const [nextPage, setNextPage] = useState(1);
    const [historyList, setHistoryList] = useState([]);
    const [basicPurchasePrice, setBasicPurchasePrice] = useState(999);

    const getConfigBySales = (sales) => {
        let res = null;
        if (DistributorCommissionTiers?.length > 0){
            for (let i = 0; i < DistributorCommissionTiers?.length; i++){
                if (sales >= DistributorCommissionTiers[i].minSales && sales <= DistributorCommissionTiers[i].maxSales){
                    res = DistributorCommissionTiers[i];
                    break;
                }
            }
        }
        return res;
    }

    const getList= (page = 1) => {
        let nowUtc = getNowUtcTimestamp();
        distributorSaleMonth(1, nowUtc).then(res => {
            if (res?.list?.length > 0){
                setHistoryList(res?.list);
            }
            if (res?.phonePrice){
                setBasicPurchasePrice(Number(res?.phonePrice));
            }
        }).catch(e => {
            console.error("[distributorSaleMonth error]", e);
        })
    }

    const getMoreList = () => {
        getList();
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <>
            {
                <div className={`ModalHistoryCommission flex_center_start_col fontCommon`}>
                    <div className="w100p fs20 fb tlc" style={{marginTop: '38px'}}>
                        {`History Commisions`}
                    </div>
                    <div className={`${useVerticalMode?'historyCommissionListRoot_v':'flex_center_start_col'}`}>
                        <div className={`${useVerticalMode?'historyCommissionLine_v':'historyCommissionLine'}`}>
                            <div className="timePart color-999">
                                {`Month`}
                            </div>
                            <div className="volumePart color-999">
                                {`Sales Volume`}
                            </div>
                            <div className="tierPart color-999">
                                {`Tier`}
                            </div>
                            <div className="pricePart color-999">
                                {`Reseller Price`}
                            </div>
                            <div className="earningsPart color-999">
                                {`Earnings`}
                            </div>
                        </div>
                        <div className={`${useVerticalMode?'historyCommissionList_v':'historyCommissionList'} flex_center_start_col`} id={`${useVerticalMode?'historyCommissionList_v':'historyCommissionList'}`}>
                            {
                                historyList?.length > 0 &&
                                    <InfiniteScroll
                                        dataLength={historyList?.length || 0}
                                        next={getMoreList}
                                        hasMore={false}
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
                                        scrollableTarget={`${useVerticalMode?'historyCommissionList_v':'historyCommissionList'}`}
                                    >
                                        {
                                            historyList.map((item, index) => {
                                                const {
                                                    periodTime,
                                                    periodName,
                                                    saleVolume,
                                                    cdKeyAmount,
                                                    lastPeriodCdKeyAmount,
                                                    lastPeriodReportAmount,
                                                    currPeriodReportAmount,
                                                } = item || {};
                                                let recentSale = Number(cdKeyAmount || 0) + Number(lastPeriodCdKeyAmount || 0);
                                                let recentTotalSale = Number(cdKeyAmount || 0) + Number(lastPeriodCdKeyAmount || 0) + Number(lastPeriodReportAmount || 0) + Number(currPeriodReportAmount || 0);
                                                let cfg = getConfigBySales(recentTotalSale);
                                                let earnings = -1;
                                                if (cfg){
                                                    earnings = recentSale * (basicPurchasePrice - cfg.purchasePrice);
                                                }
                                                let timeDate = new Date(Number(periodTime) * 1000);
                                                let year = timeDate.getUTCFullYear();
                                                let month = timeDate.getUTCMonth() + 1;
                                                let monthStr = getMonthString(month);
                                                return (
                                                    <div key={index} className="historyCommissionListLine flex_center_start">
                                                        <div className="timePart fs12 color-999">
                                                            {`${year} ${monthStr}`}
                                                        </div>
                                                        <div className="volumePart fs12 color-999">
                                                            {`${cdKeyAmount}`}
                                                        </div>
                                                        <div className="tierPart fs12 color-999">
                                                            {`${cfg?`Tier ${cfg.id}`:'--'}`}
                                                        </div>
                                                        <div className="pricePart fs12">
                                                            {`${cfg?`$ ${cfg.purchasePrice}`:'--'}`}
                                                        </div>
                                                        <div className="earningsPart fs12">
                                                            {`${cfg?`$ ${Number(earnings).toLocaleString("en-US")}`:'--'}`}
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
export default memo(ModalHistoryCommission);
