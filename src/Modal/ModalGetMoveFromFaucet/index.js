import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import {
    distributorRedeem,
    getDistributorCdkeyList,
} from '../../utils/upNet';
import {
    copyFn,
    sliceStr,
    convertBalance,
    renderTime,
    formatUtcTime,
    getCurrentChainTokenInfoById,
    getCurrentChainInfoByTokenId,
} from "../../utils/common";
import { useMemo } from "react";
import "./index.css"
import moment from "moment";

const ModalGetMoveFromFaucet = ({
    useVerticalMode,
    closeFn = () => {},
    userInfo,
    tokenBalanceRef,
    updateTokenBalance = () => {},
}) => {
    const { wallets } = useWallets();
    const [updateIconRotate, setUpdateIconRotate] = useState(false);
    const [updateLock, setUpdateLock] = useState(false);

    const walletAddr = useMemo(() => {
        if (!wallets?.length) return ""
        return wallets.find((wallet) => (wallet.walletClientType === 'privy'))?.address
    }, [wallets])

    const chainTokenInfo = useMemo(() => {
        let chaintokenId = 3073200;
        let res = {
            ...getCurrentChainTokenInfoById(chaintokenId),
            chainInfo: {
                ...getCurrentChainInfoByTokenId(chaintokenId),
            }
        }
        return res;
    }, []);

    const getCurrentCoinValue = () => {
        if (tokenBalanceRef.current){
            let value = tokenBalanceRef.current[chainTokenInfo?.ID];
            if (value > 0){
                if (value < 0.0001){
                    return "<0.0001";
                }
                else{
                    return Number(Number(value).toFixed(4));
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }

    return (
        <div className={`ModalGetMoveFromFaucet flex_center_start_col fontCommon`}>
            <div className={`fs20 fb`}>
                {`Get MOVE from the Faucet`}
            </div>
            <div className={`flex_center_center mt18`}>
                <CustomIcon imgName="UI_Picture-Currency_MOVE" className="mr10" width={30} height={30}/>
                <div className={`fs14 fb`}>
                    {`${getCurrentCoinValue()} MOVE`}
                </div>
                <CustomIcon imgName="UI_Picture_Icon_Refresh" rotating={updateIconRotate} className="ml6" width={22} height={22} onClick={() => {
                    if (!updateLock){
                        setUpdateLock(true);
                        setUpdateIconRotate(true);
                        updateTokenBalance(chainTokenInfo);
                        setTimeout(() => {
                            setUpdateIconRotate(false);
                        }, 500);
                        setTimeout(() => {
                            setUpdateLock(false);
                        }, 2000);
                    }
                }}/>
            </div>
            <div className={`flex_center_start mt20 fs14 fb w100p`}>
                {`Step 1:`}
            </div>
            <div className={`flex_center_start fs12 w100p`}>
                {`Copy your account address below.`}
            </div>
            <div className={`flex_center_between mt2 w100p`}>
                <div className='flex_center_start' onClick={() => {
                    copyFn(walletAddr);
                }}>
                    <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5 op4" width={16} height={16}></CustomIcon>
                    <div className='fs12 color-999 fontCommon'>{sliceStr(walletAddr, 6)}</div>
                </div>
                <div className={`ModalGetMoveFromFaucet_btn flex_center_center`} onClick={() => {
                    copyFn(walletAddr);
                }}>
                    {`Copy`}
                </div>
            </div>
            <div className={`flex_center_start mt10 fs14 fb w100p`}>
                {`Step 2:`}
            </div>
            <div className={`flex_center_between fs12 w100p`}>
                <div className={`flex_center_start fs12`}>
                    {`Visit the Movement faucet.`}
                </div>
                <div className={`ModalGetMoveFromFaucet_btn flex_center_center`} onClick={() => {
                    window.open("https://faucet.movementlabs.xyz/");
                }}>
                    {`Go`}
                </div>
            </div>
            <div className={`flex_center_start mt10 fs14 fb w100p`}>
                {`Step 3:`}
            </div>
            <div className={`flex_center_start mt3 fs12 w100p`} style={{lineHeight: 1.2}}>
                {`Paste your address and click GET MOVE.`}
            </div>
            <img src={`/img/UI_Picture_GetMOVE_Step3_02.png`} className={`ModalGetMoveFromFaucet_tipImg mt24`} width={245} height={82}></img>
        </div>
    )
}
export default memo(ModalGetMoveFromFaucet);
