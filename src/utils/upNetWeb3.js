import abi_SBTFactory from "./json/ABI_SBTFactory.json";
import abi_SBTNFT from "./json/ABI_SBTNFT.json";
import { getGasConfig } from "./gas";
import { BigNumber, ethers } from "ethers";
import {
    getConfig,
} from "./upNet";

function stringToHex(str) {
    const val = [...str].map(c => c.charCodeAt(0).toString(16).padStart(2, 0)).join``
    return '0x' + val;
}

async function getSBTFactoryContract(wallets, isWriter, chainId) {
    const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));

    await embeddedWallet.switchChain(chainId);

    const web3Config = await getConfig();
    const contractAddr = web3Config?.sbt?.factory;
    //const contractAddr = '0xEE48B2dE50DdA9a9290137D6a000Ae72221bB98A';

    const provider = await embeddedWallet.getEthersProvider();

    if (isWriter) {
        const signer = provider.getSigner();

        /*const gasConfig = {
            maxPriorityFeePerGas: 1000000000000,
            maxFeePerGas: 1000000000000,
            gasLimit: 1000000,
        }*/

        let gasConfig = {
            gasPrice: 5e9,
            maxFeePerGas: 5e9,
            //gasLimit: 3500000,
        }

        const contract = new ethers.Contract(contractAddr, abi_SBTFactory, provider).connect(signer);
        return { contract, addr: embeddedWallet.address, gasConfig, embeddedWallet };
    } else {
        const contract = new ethers.Contract(contractAddr, abi_SBTFactory, provider);
        return { contract, addr: embeddedWallet.address, embeddedWallet };
    }
}

const getLoginNFT = (wallets, chainId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            await embeddedWallet.switchChain(chainId);

            const web3Config = await getConfig();
            const contractAddr = web3Config?.sbt?.factory;
            //const contractAddr = '0xEE48B2dE50DdA9a9290137D6a000Ae72221bB98A';

            console.log("embeddedWallet", embeddedWallet.address);

            const provider = await embeddedWallet.getEthersProvider();

            const contract = new ethers.Contract(contractAddr, abi_SBTFactory, provider);

            contract.getTokenId(embeddedWallet.address).then(res => {
                console.log("[getLoginNFT] ", res);
                resolve(res);
            }).catch(e => {
                console.log("[getLoginNFT exception]", e);
                if (e.message.indexOf('(reading \'switchChain\')') > 0) {
                    console.log("privy need login")
                    reject('need login');
                } else {
                    reject('Transaction Failed');
                }
            });
        } catch (error) {
            console.log("[getNftMetadata exception]", error);
            if (error.message.indexOf('(reading \'switchChain\')') > 0) {
                console.log("privy need login")
                reject('need login');
            } else {
                reject('Transaction Failed');
            }
        }
    })
}

const mintLoginNFT = ({wallets, chainId, callId, validUntil, signature}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { contract, addr, gasConfig } = await getSBTFactoryContract(wallets, true, chainId);

            const sig = stringToHex(atob(signature));

            //const tempAddr = '0x60978bde42944AA05911438E0a10bB979ba3702C';

            const mintTx = await contract.populateTransaction.mintNFT(callId, addr, validUntil, sig);

            const gasForTx = await contract.signer.estimateGas(mintTx);
            //console.log('[gasForTx]', gasForTx.toBigInt());

            if (gasForTx.toBigInt() * 2n > (gasConfig.gasLimit || 0)) {
                gasConfig.gasLimit = BigNumber.from(gasForTx.toBigInt() * 2n);
                //console.log('[gasConfig.gasLimit overrided]', gasConfig);
            }
            
            contract.mintNFT(callId, addr, validUntil, sig, gasConfig).then(res => {
            //contract.mintNFT(0, tempAddr, validUntil, sig, gasConfig).then(res => {
                console.log("[mintLoginNFT] ", res);
                resolve(res)
            }).catch(e => {
                console.log("[mintLoginNFT exception]", e);
                if (e.message.indexOf('(reading \'switchChain\')') > 0) {
                    console.log("privy need login")
                    reject('need login');
                } else {
                    reject('Transaction Failed');
                }
            });
        } catch (error) {
            console.log("[mintLoginNFT exception]", error);
            if (error.message.indexOf('(reading \'switchChain\')') > 0) {
                console.log("privy need login")
                reject('need login');
            } else {
                reject('Transaction Failed');
            }
        }
    })
}


export {
    getLoginNFT,
    mintLoginNFT,
}