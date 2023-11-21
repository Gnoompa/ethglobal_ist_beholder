"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7123],{

/***/ 17123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoinInfoByAddress: () => (/* binding */ getCoinInfoByAddress),
/* harmony export */   getCoinTrending: () => (/* binding */ getCoinTrending),
/* harmony export */   getHighestFloorPrice: () => (/* binding */ getHighestFloorPrice),
/* harmony export */   getNFT_TrendingOverview: () => (/* binding */ getNFT_TrendingOverview),
/* harmony export */   getNonFungibleTokenActivities: () => (/* binding */ getNonFungibleTokenActivities),
/* harmony export */   getOneDaySaleAmounts: () => (/* binding */ getOneDaySaleAmounts),
/* harmony export */   getPriceStats: () => (/* binding */ getPriceStats)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92358);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);



async function getCoinInfoByAddress(address) {
    return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .CoinGeckoTrending */ .A5.getCoinInfoByAddress(address);
}
// #region get trending info
async function getCoinTrending(result, currency) {
    const { chainId, source, pluginID, id = '', name = '', address = '' } = result;
    switch(source){
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko:
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .CoinGeckoTrending */ .A5.getCoinTrending(chainId, id, currency);
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap:
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .CoinMarketCap */ .yd.getCoinTrending(chainId, id, currency);
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.NFTScan:
            return pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_SOLANA ? _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_Solana */ .Z9.getCoinTrending(chainId, name, currency) : (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .attemptUntil */ .C)([
                _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SimpleHashEVM */ .fe,
                _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_EVM */ .$h
            ].map((x)=>()=>x.getCoinTrending(chainId, address, currency)), undefined);
        default:
            return;
    }
}
// #endregion
// #region get price stats info
async function getPriceStats(chainId, id, currency, days, dataProvider) {
    switch(dataProvider){
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko:
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .CoinGeckoTrending */ .A5.getCoinPriceStats(chainId, id, currency, days);
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap:
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .CoinMarketCap */ .yd.getCoinPriceStats(chainId, id, currency, days);
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.NFTScan:
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .attemptUntil */ .C)([
                _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SimpleHashEVM */ .fe,
                _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_EVM */ .$h
            ].map((x)=>()=>x.getCoinPriceStats(chainId, id, currency, days)), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        default:
            return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP;
    }
}
// #endregion
// #region get nft trending overview
async function getNFT_TrendingOverview(pluginID, chainId, id) {
    return pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_SOLANA ? _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_Solana */ .Z9.getCollectionOverview(chainId, id) : (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .attemptUntil */ .C)([
        _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SimpleHashEVM */ .fe,
        _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_EVM */ .$h
    ].map((x)=>()=>x.getCollectionOverview(chainId, id)), undefined);
}
// #endregion
// #region get hightest historical floor price
async function getHighestFloorPrice(id) {
    return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SimpleHashEVM */ .fe.getHighestFloorPrice(id);
}
// #endregion
// #region get 24h sale amounts
async function getOneDaySaleAmounts(id) {
    return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SimpleHashEVM */ .fe.getOneDaySaleAmounts(id);
}
// #endregion
// #region get nft trending activities
async function getNonFungibleTokenActivities(pluginID, chainId, address, cursor) {
    return pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_SOLANA ? _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_Solana */ .Z9.getCoinActivities(chainId, address, cursor) : (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .attemptUntil */ .C)([
        _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SimpleHashEVM */ .fe,
        _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NFTScanTrending_EVM */ .$h
    ].map((x)=>()=>x.getCoinActivities(chainId, address, cursor)), undefined);
} // #endregion


/***/ })

}]);
//# sourceMappingURL=chunk.7123.js.map