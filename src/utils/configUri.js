import {envConfig} from "./env";

const {baseUrl} = envConfig;
// console.log(baseUrl, rtc_appid, webIMappKey);
const _ = baseUrl + '/api/v1';

const url = {
    login: _ + '/account/login/privy',
    info: _ + '/account/info',
    check: _ + '/cdkey/redeem',
    retry: _ + '/cdkey/retry',
    modifyname: _ + '/account/modifyname',
    invitecodeBind: _ + '/invitecode/bind',
    invitecodeList: _ + '/invitecode/list',
    exchangeUsd: _ + '/account/exchange/usd',
    distributorRedeem: _ + '/distributor/redeem',
    distributorTxLog: _ + '/distributor/get_tx_log',
    distributorVerification: _ + '/distributor/verification',
    distributorCdkeyList: _ + '/distributor/issue_cdkey_list',
    withdrawQuery: _ + '/distributor/withdraw/query',
    withdrawCreate: _ + '/distributor/withdraw/create',
    withdrawReject: _ + '/distributor/withdraw/reject',
    withdrawClaim: _ + '/distributor/withdraw/claim',
    distributorSaleMonth: _ + '/distributor/sale_month',
    mintLoginNFTSignature: _ + '/sbt/signature',
    getConfig: _ + '/config',
}
export {
    url,
    baseUrl,
    _
}
