import { message } from "antd";
import {
    EthRPC,
    BaseRPC,
    BaseSepoliaRPC,
} from "./env";
import {PrivyProvider, addRpcUrlOverrideToChain } from '@privy-io/react-auth';
import {baseSepolia, base, mainnet } from 'viem/chains';
import { movementTestnet } from "./movementTestnet.ts";
import { getGasConfig } from "./gas";
import { ethers } from 'ethers';
import ChainToken from "./json/ChainToken.json";
import ChainInfo from "./json/ChainInfo.json";
import moment from "moment";
import { erc20Abi } from "viem";
const invitePre = "@"
const sliceStr = (str, num, ignoreTail) => {
    // str = displayFilter(str)
    if (str) {
        if (ignoreTail) {
            return str.slice(0, num) + '…'
        }
        return str.slice(0, num) + '…' + str.slice(-num)
    }
    return ''
}

const ethChain = (EthRPC && EthRPC.length > 5) ? addRpcUrlOverrideToChain(mainnet, EthRPC) : mainnet;
const baseChain = (BaseRPC && BaseRPC.length > 5) ? addRpcUrlOverrideToChain(base, BaseRPC) : base;
const baseSepoliaChain = (BaseSepoliaRPC && BaseSepoliaRPC.length > 5) ? addRpcUrlOverrideToChain(baseSepolia, BaseSepoliaRPC) : baseSepolia;
const movementTestnetChain = movementTestnet;

const GetSupportedChainList = () =>{
    return [ethChain, baseChain, movementTestnetChain, baseSepoliaChain];
}

const pageSize = 20;

const copyFn = (text)=> {
    let copyInput = document.createElement("input");
    document.body.appendChild(copyInput);
    copyInput.setAttribute("value", text);
    copyInput.select();
    document.execCommand("Copy");
    copyInput.remove();
    message.destroy();
    message.success({content: 'copied!'})
}

const renderTime = (time, timeStyle) => {
    if (!time || isNaN(Number(time))) return "";
    const localStr = new Date(Number(time));
    const localMoment = moment(localStr);
    const localFormat = timeStyle
        ? localMoment.format(timeStyle)
        : localMoment.format("MM-DD HH:mm");
    return localFormat;
}

const formatUtcTime = (time) => {
    let timeDate = new Date(Number(time) * 1000);
    let year = timeDate.getUTCFullYear() % 100;
    let month = timeDate.getUTCMonth() + 1;
    let day = timeDate.getUTCDate();
    let hour = timeDate.getUTCHours();
    let minute = timeDate.getUTCMinutes();
    return `${day?.toString()?.padStart(2, '0')}-${month?.toString()?.padStart(2, '0')}-${year?.toString()?.padStart(2, '0')} ${hour?.toString()?.padStart(2, '0')}:${minute?.toString()?.padStart(2, '0')}`;
}

const getMonthString = (month) => {
    if (month === 1){
        return 'January';
    }
    else if (month === 2){
        return 'February';
    }
    else if (month === 3){
        return 'March';
    }
    else if (month === 4){
        return 'April';
    }
    else if (month === 5){
        return 'May';
    }
    else if (month === 6){
        return 'June';
    }
    else if (month === 7){
        return 'July';
    }
    else if (month === 8){
        return 'August';
    }
    else if (month === 9){
        return 'September';
    }
    else if (month === 10){
        return 'October';
    }
    else if (month === 11){
        return 'November';
    }
    else if (month === 12){
        return 'December';
    }
    else{
        return '';
    }
}

const getNowUtcTimestamp = () => {
    let d1 = new Date();
    let d2 = new Date( d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds() );
    return Math.floor(d2.getTime()/ 1000);
}

function getUrlParams(key) {
    let href = window.location.href;
    let urlStr = href.substring(href.indexOf('?') + 1);
    if (!urlStr) {
        return ''
    }
    let obj = {};
    let paramsArr = urlStr.split('&')
    for (let i = 0, len = paramsArr.length; i < len; i++) {
        let str = paramsArr[i];
        let key = str.substring(0, str.indexOf("="));
        let value = str.substring(str.indexOf("=") + 1);
        obj[key] = value;
    }
    return obj[key] || ''
}

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
};

const sliceString = (str, startLen = 5, endLen = 4) => {
    let res = str;
    if (res?.length > startLen + endLen){
        res = `${res.slice(0,startLen)}...${res.slice(res.length - endLen)}`;
    }
    return res;
}

const supportedChainTokenList = () => {
    let res = [];
    if (ChainToken?.length > 0){
        for (let i = 0; i < ChainToken?.length; i++){
            if (ChainToken[i].isEnable){
                let chainInfo = null;
                if (ChainInfo?.length > 0){
                    for (let j = 0; j < ChainInfo?.length; j++){
                        if (ChainInfo[j].chainId == ChainToken[i].chainId){
                            chainInfo = ChainInfo[j];
                            break;
                        }
                    }
                }
                res.push({
                    ...ChainToken[i],
                    chainInfo: {
                        ...chainInfo || null
                    }
                });
            }
        }
    }
    return res;
}

const floorToFix = (num, digits) => {
    if (num) {
        let tempNum = num;
        for (let i = 0; i < digits; i++) {
            tempNum = tempNum * 10;
        }
        tempNum = Math.floor(tempNum);
        for (let i = 0; i < digits; i++) {
            tempNum = tempNum / 10;
        }
        return tempNum;
    }
    return 0;
}

const convertBalance = (balance) => {
    let isNegative = balance < 0;
    let tempBalance = Math.abs(balance);
    if (tempBalance >= 1000000000) {
        return `${isNegative?'-':''}${Number(floorToFix(Number(tempBalance / 1000000000).toFixed(1), 1))}b`;
    } else if (tempBalance >= 1000000) {
        return `${isNegative?'-':''}${Number(floorToFix(Number(tempBalance / 1000000).toFixed(1), 1))}m`;
    } else if (tempBalance >= 1000) {
        return `${isNegative?'-':''}${Number(floorToFix(Number(tempBalance / 1000).toFixed(1), 1))}k`;
    } else if (tempBalance >= 10) {
        return `${isNegative?'-':''}${Number(floorToFix(Number(tempBalance), 2).toFixed(2))}`;
    } else if (tempBalance > 0.0001) {
        return `${isNegative?'-':''}${Number(floorToFix(Number(tempBalance), 4).toFixed(4))}`;
    } else if (tempBalance > 0) {
        return `${isNegative?'>-':'<'}0.0001`; 
    } else {
        return 0;
    }
}

const getCurrentChainTokenInfoById = (id) => {
    let res = null;
    if (ChainToken?.length > 0){
        for (let i = 0; i < ChainToken?.length; i++){
            if (ChainToken[i].ID == id){
                res = ChainToken[i];
                break;
            }
        }
    }
    return res;
}

const isMobile = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

const getCurrentChainInfoByTokenId = (tokenId) => {
    let res = null;
    let tokenInfo = getCurrentChainTokenInfoById(tokenId);
    if (tokenInfo && ChainInfo?.length > 0){
        for (let i = 0; i < ChainInfo?.length; i++){
            if (ChainInfo[i].chainId == tokenInfo.chainId){
                res = ChainInfo[i];
                break;
            }
        }
    }
    return res;
}

const getWeb3NativeTokenBalance = ({ wallets, chainId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            await embeddedWallet.switchChain(chainId);
            const provider = await embeddedWallet.getEthersProvider();
            const balance = await provider.getBalance(embeddedWallet.address);
            resolve(ethers.utils.formatUnits(balance))
        } catch (error) {
            console.error("[get balance failed]", error);
            reject('get balance failed')
        }
    })
}

const sendTransfer = (wallets, payeeAddress, amount, chainId, sendTransaction = () =>{}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            const provider = await embeddedWallet.getEthersProvider(); // ethers provider object

            await embeddedWallet.switchChain(chainId);
            
            let balance = await provider.getBalance(embeddedWallet.address);

            const signer = provider.getSigner(); // ethers signer object

            let txRequest = {
                from: embeddedWallet.address,
                to: payeeAddress,
                value: ethers.utils.parseEther(amount),
            };

            const gasData = await getGasConfig(signer);
            
            txRequest = {
                ...txRequest,
                ...gasData
            }

            const tx = await signer.sendTransaction(txRequest).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}
  
const getWeb3TokenBalance = ({ wallets, addr, chainId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            await embeddedWallet.switchChain(chainId);
            const provider = await embeddedWallet.getEthersProvider();
            const tokenContract = new ethers.Contract(addr, erc20Abi, provider);
            const balance = await tokenContract.balanceOf(embeddedWallet.address)
            console.log(ethers.utils.formatUnits(balance));
            resolve(ethers.utils.formatUnits(balance))
        } catch (error) {
            reject('get balance failed')
        }
    })
}

export {
    sliceStr,
    invitePre,
    pageSize,
    copyFn,
    movementTestnetChain,
    renderTime,
    formatUtcTime,
    sliceString,
    getUrlParams,
    isMobile,
    getNowUtcTimestamp,
    GetSupportedChainList,
    getMonthString,
    supportedChainTokenList,
    getCurrentChainTokenInfoById,
    getCurrentChainInfoByTokenId,
    getWeb3NativeTokenBalance,
    getWeb3TokenBalance,
    sendTransfer,
    convertBalance,
    debounce
}
