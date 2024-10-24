import {url} from "./configUri";
import http from "./axios";
const loginFn = (accessToken) => {
    return new Promise((resolve, reject) => {
        http('post', url.login, {
            accessToken
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const getInfo = () => {
    return new Promise((resolve, reject) => {
        http('get', url.info, {
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const checkCdkey = (cdkey) => {
    return new Promise((resolve, reject) => {
        http('post', url.check, {
            cdkey
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const retry = (cdkey) => {
    return new Promise((resolve, reject) => {
        http('post', url.retry, {
            cdkey
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const modifyname = (newName) => {
    return new Promise((resolve, reject) => {
        http('post', url.modifyname, {
            newName
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const invitecodeBind = (inviteCode) => {
    return new Promise((resolve, reject) => {
        http('post', url.invitecodeBind, {
            inviteCode
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const invitecodeList = () => {
    return new Promise((resolve, reject) => {
        http('get', url.invitecodeList, {

        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const getExchangeUsd = () => {
    return new Promise((resolve, reject) => {
        http('get', url.exchangeUsd, {
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
} 

const distributorRedeem = (cdkey) => {
    return new Promise((resolve, reject) => {
        http('post', url.distributorRedeem, {
            cdkey
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const getDistributorTxLog = (page) => {
    return new Promise((resolve, reject) => {
        http('post', url.distributorTxLog, {
            page
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const getMintLoginNFTSignature = () => {
    return new Promise((resolve, reject) => {
        http('get', url.mintLoginNFTSignature, {
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const getDistributorCdkeyList = () => {
    return new Promise((resolve, reject) => {
        http('post', url.distributorCdkeyList, {
            
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const distributorVerification = (type, code) => {
    return new Promise((resolve, reject) => {
        http('post', url.distributorVerification, {
            type,
            code,
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const queryWithdraw = (offset, pageSize) => {
    return new Promise((resolve, reject) => {
        http('post', url.withdrawQuery, {
            offset,
            pageSize,
        }).then((res) => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    })
}

const createWithdraw = (usdtAmount, beneficiary) => {
    return new Promise((resolve, reject) => {
        http('post', url.withdrawCreate, {
            usdtAmount,
            beneficiary,
        }).then((res) => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    })
}

const rejectWithdraw = (withdrawId) => {
    return new Promise((resolve, reject) => {
        http('post', url.withdrawReject, {
            withdrawId,
        }).then((res) => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    })
}

const claimWithdraw = (withdrawId) => {
    return new Promise((resolve, reject) => {
        http('post', url.withdrawClaim, {
            withdrawId,
        }).then((res) => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    })
}

const distributorSaleMonth = (fromTime, toTime) => {
    return new Promise((resolve, reject) => {
        http('post', url.distributorSaleMonth, {
            fromTime,
            toTime,
        }).then((res) => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    })
}

const getConfig = (fromTime, toTime) => {
    return new Promise((resolve, reject) => {
        http('get', url.getConfig, {
        }).then((res) => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    })
}

export {
    loginFn,
    getInfo,
    checkCdkey,
    retry,
    modifyname,
    getExchangeUsd,
    distributorRedeem,
    getDistributorTxLog,
    getDistributorCdkeyList,
    distributorVerification,
    invitecodeList,
    invitecodeBind,
    queryWithdraw,
    createWithdraw,
    rejectWithdraw,
    claimWithdraw,
    distributorSaleMonth,
    getMintLoginNFTSignature,
    getConfig,
}