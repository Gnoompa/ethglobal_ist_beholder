"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3088],{

/***/ 34013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4643);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90097);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24002);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99116);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var _components_StyledInput_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79673);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.maskColor.secondaryBottom
        },
        content: {
            flexGrow: 1,
            padding: '0px 16px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        },
        titleWrapper: {
            paddingTop: 8,
            height: 100,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontStyle: 'normal',
            fontWeight: 700,
            marginBottom: 12
        },
        description: {
            marginTop: 8,
            marginBottom: 16,
            textAlign: 'center',
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        strong: {
            color: theme.palette.maskColor.danger,
            fontWeight: 700
        },
        bottomAction: {
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            position: 'absolute',
            backdropFilter: 'blur(8px)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            padding: '16px',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: 6
        },
        button: {
            flex: '1 0 0',
            '&:disabled': {
                color: theme.palette.maskColor.white
            }
        }
    }));
const ResetWallet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ResetWallet() {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { classes } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .s0)();
    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const disabled = answer !== 'RESET';
    const onBack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>navigate(-1), []);
    const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // We don't reset existed wallets until recovery
        await browser.tabs.create({
            active: true,
            url: browser.runtime.getURL('/dashboard.html#/create-mask-wallet/form?reset=true')
        });
        await _services__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP.Helper.removePopupWindow();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.titleWrapper,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: classes.title,
                            children: t.popups_wallet_reset_wallet()
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.description,
                        children: t.popups_wallet_reset_wallet_description_1()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.description,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .Trans */ .cC, {
                            i18nKey: "popups_wallet_reset_wallet_description_2",
                            components: {
                                strong: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                                    className: classes.strong
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.description,
                        children: t.popups_wallet_reset_wallet_description_3()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput_index_js__WEBPACK_IMPORTED_MODULE_9__/* .StyledInput */ .F, {
                        type: "text",
                        autoFocus: true,
                        placeholder: "RESET",
                        value: answer,
                        onChange: (ev)=>{
                            setAnswer(ev.currentTarget.value);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.bottomAction,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        onClick: onBack,
                        variant: "outlined",
                        className: classes.button,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_11__/* .ActionButton */ .K, {
                        variant: "contained",
                        color: "error",
                        onClick: onConfirm,
                        className: classes.button,
                        disabled: disabled,
                        children: t.confirm()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetWallet);


/***/ })

}]);
//# sourceMappingURL=chunk.3088.js.map