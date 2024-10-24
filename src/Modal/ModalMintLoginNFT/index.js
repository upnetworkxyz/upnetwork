import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import {
    distributorRedeem,
    getDistributorCdkeyList,
    getMintLoginNFTSignature,
} from '../../utils/upNet';
import {
    mintLoginNFT,
} from '../../utils/upNetWeb3';
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

const ModalMintLoginNFT = ({
    useVerticalMode,
    closeFn = () => {},
    userInfo,
    getMoreFn = () => {},
    tokenBalanceRef,
    updateTokenBalance = () => {},
}) => {
    const { wallets } = useWallets();
    const [mintLock, setMintLock] = useState(false);
    const [mintFailed, setMintFailed] = useState(false);
    const [mintSubmitted, setMintSubmitted] = useState(false);
    const [updateIconRotate, setUpdateIconRotate] = useState(false);
    const [updateLock, setUpdateLock] = useState(false);
    const basicMovementAmount = 0.1;

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

    const mintFn = () => {
        if (mintLock || !chainTokenInfo){
            return;
        }
        setMintLock(true);
        getMintLoginNFTSignature().then(res => {
            if (res){
                mintLoginNFT({
                    wallets: wallets, 
                    chainId: chainTokenInfo?.chainId, 
                    callId: Number(res?.uid), 
                    validUntil: Number(res?.validUntil),
                    //validUntil: 1726171607, 
                    signature: res?.signature,
                    //signature: '0vBV0+HPSRsh610FTTp/iX5Tw/CXjs7Ybwust1JMHJJsYICPC0FKWT8w7jcEbOu8AuoSpKLcD6cug25RaY7+fhs=',
                }).then(res => {
                    setMintSubmitted(true);
                    setMintLock(false);
                }).catch(e => {
                    console.log("[mintLoginNFT error]", e);
                    setMintFailed(true);
                    setMintLock(false);
                    setTimeout(() => {
                        closeFn();
                    }, 180000);
                })
            }
            else{
                console.log("[getMintLoginNFTSignature is null]");
                setMintLock(false);
            }
        }).catch(e => {
            console.log("[getMintLoginNFTSignature error]", e);
            setMintLock(false);
        })
    }

    const walletAddr = useMemo(() => {
        if (!wallets?.length) return ""
        return wallets.find((wallet) => (wallet.walletClientType === 'privy'))?.address
    }, [wallets])

    const nftWebpUrl_low = '/img/UPIDNFT_540_15.webp';

    return (
        <div className={`ModalMintLoginNFT flex_center_start_col fontCommon`}>
            <div className={`fs20 fb`}>
                {`Mint Your UpID NFT`}
            </div>
            <div className={`mintLoginNFTRoot flex_center_start_col`}>
                <img src={`${nftWebpUrl_low}`} className='' width={160} height={160}>
                </img>
                <div className={`fs12`}>
                    {`An NFT will be minted to your account.`}
                </div>
                <div className={`fs12`}>
                    {`Check it out on the Movement testnet!`}
                </div>
                <div className='flex_center_start mt10' onClick={() => {
                    copyFn(walletAddr);
                }}>
                    <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5 op4" width={16} height={16}></CustomIcon>
                    <div className='fs12 color-999 fontCommon'>{sliceStr(walletAddr, 6)}</div>
                </div>
                <div className={`flex_center_center mt11`}>
                    <CustomIcon imgName="UI_Picture-Currency_MOVE" className="mr10" width={30} height={30}/>
                    <div className={`fs14 fb`}>
                        {`${getCurrentCoinValue()} MOVE`}
                    </div>
                    <CustomIcon imgName="UI_Picture_Icon_Info" className="ml6" width={22} height={22} onClick={() => {
                        getMoreFn();
                    }}/>
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
            </div>
            {
                mintSubmitted ? 
                    <div className={`mintLoginNFTBtn flex_center_center`} onClick={() => {
                        closeFn();
                    }}>
                        {`Submitted`}
                    </div> :
                mintFailed ?
                    <div className={`mintLoginNFTBtn flex_center_center`} onClick={() => {
                        closeFn();
                    }}>
                        {`Failed`}
                    </div> :
                getCurrentCoinValue() < basicMovementAmount ?
                    <div className={`mintLoginGetMoreBtn flex_center_center`} onClick={() => {
                        getMoreFn();
                    }}>
                        {`Get MOVE`}
                    </div> :
                mintLock ?
                    <div className={`mintLoginNFTBtn flex_center_center`}>
                        {`Processing`}
                    </div> :
                    <div className={`mintLoginNFTBtn flex_center_center`} onClick={() => {
                        mintFn();
                    }}>
                        {`Mint`}
                    </div>
            }
        </div>
    )
}
export default memo(ModalMintLoginNFT);
