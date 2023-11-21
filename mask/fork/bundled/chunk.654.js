"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[654],{

/***/ 60654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskSDK)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51573);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87148);
/// <reference types="react/canary" />






const f = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(_services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.SiteAdaptor.shouldSuggestConnectInPopup);
function MaskSDK() {
    if (!_masknet_flags__WEBPACK_IMPORTED_MODULE_1__/* .Flags */ .v.mask_sdk_enabled) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .ErrorBoundary */ .S, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSDKLoader, {})
        })
    });
}
function MaskSDKLoader() {
    const shouldShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.use)(f());
    const [dismissed, setDismissed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    if (!shouldShow) return null;
    if (dismissed) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            "(Dev mode only, UI to be done) Connect Mask on this site.",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClick: async ()=>{
                    await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.SiteAdaptor.attachMaskSDKToCurrentActivePage('once');
                    window.close();
                },
                children: "Connect once"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClick: async ()=>{
                    await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.SiteAdaptor.attachMaskSDKToCurrentActivePage('always');
                    window.close();
                },
                children: "Always connect this site"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClick: async ()=>{
                    await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.SiteAdaptor.attachMaskSDKToCurrentActivePage('always-all');
                    window.close();
                },
                children: "Always connect all sites"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClick: ()=>setDismissed(true),
                children: "Close"
            })
        ]
    });
}


/***/ })

}]);
//# sourceMappingURL=chunk.654.js.map