"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1047],{

/***/ 21047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTweetData: () => (/* binding */ getTweetData)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _masknet_web3_providers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41632);



async function getTweetData(tweetAddress) {
    const { results } = await (0,_masknet_web3_providers_helpers__WEBPACK_IMPORTED_MODULE_1__/* .fetchCachedJSON */ .MP)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .TWEET_BASE_URL */ .Y, {
        tweetID: tweetAddress
    }));
    return results;
}


/***/ })

}]);
//# sourceMappingURL=chunk.1047.js.map