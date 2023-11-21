"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8343],{

/***/ 58343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81430);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94036);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90138);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6764);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39117);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4643);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34278);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17735);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24002);
/* harmony import */ var _components_BottomController_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49546);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99116);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39521);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90097);













const ExportPrivateKey = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ExportPrivateKey() {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useMaskSharedTrans */ .b)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .s0)();
    const { currentPersona } = _masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .PersonaContext */ .m.useContainer();
    const { showSnackbar } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .usePopupCustomSnackbar */ .D)();
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { value } = (0,react_use__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(async ()=>{
        if (!currentPersona) return;
        return _services__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP.Backup.backupPersonaPrivateKey(currentPersona.identifier);
    }, [
        currentPersona
    ]);
    const handleBack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupRoutes */ .mZ.Personas, {
            replace: true
        });
    }, []);
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!value) return;
        copyToClipboard(value);
        showSnackbar(t.copied());
    }, [
        value
    ]);
    (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_12__/* .useTitle */ .Z)(currentPersona?.nickname ?? '');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                p: 2,
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        fontWeight: 700,
                        children: t.popups_wallet_backup_private_key()
                    }),
                    value ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        p: 1.5,
                        style: {
                            background: theme.palette.maskColor.input,
                            wordWrap: 'break-word',
                            borderRadius: 8
                        },
                        children: value
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .Trans */ .cC, {
                            i18nKey: "popups_export_private_key_tips",
                            components: {
                                a: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    onClick: ()=>{
                                        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupRoutes */ .mZ.Settings);
                                    }
                                })
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_BottomController_index_js__WEBPACK_IMPORTED_MODULE_16__/* .BottomController */ .L, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        variant: "outlined",
                        fullWidth: true,
                        onClick: handleBack,
                        children: t.back()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_18__/* .ActionButton */ .K, {
                        onClick: handleCopy,
                        fullWidth: true,
                        children: t.copy()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportPrivateKey);


/***/ })

}]);
//# sourceMappingURL=chunk.8343.js.map