"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1766],{

/***/ 9618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99116);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81755);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89762);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10292);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3223);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58391);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32863);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70429);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41487);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81430);
/* harmony import */ var _hooks_useWalletGroup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83272);
/* harmony import */ var _components_ImportCreateWallet_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66902);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94036);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        content: {
            padding: '16px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        sectionTitle: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            marginBottom: theme.spacing(2),
            color: theme.palette.maskColor.second
        },
        groups: {
            padding: 0,
            marginBottom: theme.spacing(2)
        },
        group: {
            boxShadow: theme.palette.maskColor.bottomBg,
            padding: theme.spacing(1.5),
            backdropFilter: 'blur(8px)',
            borderRadius: 8,
            cursor: 'pointer',
            '&:not(:first-of-type)': {
                marginTop: theme.spacing(2)
            }
        },
        secondaryAction: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        groupIcon: {
            marginRight: 0,
            minWidth: 'auto'
        },
        groupText: {
            margin: theme.spacing(0, 0, 0, 1)
        },
        groupName: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px',
            color: theme.palette.maskColor.main
        },
        walletCount: {
            marginRight: theme.spacing(1),
            fontSize: 12,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '16px'
        }
    }));
const CreateWallet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CreateWallet() {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useMaskSharedTrans */ .b)();
    const { classes, theme } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .s0)();
    const walletGroup = (0,_hooks_useWalletGroup_js__WEBPACK_IMPORTED_MODULE_5__/* .useWalletGroup */ .j)();
    const groups = walletGroup?.groups ? Object.entries(walletGroup.groups) : [];
    (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useTitle */ .Z)(t.popups_add_wallet());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.content,
        children: [
            groups.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.sectionTitle,
                        children: t.add_new_address_to_an_existing_group()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.groups,
                        children: groups.map(([key, wallets], index)=>{
                            const theFirstWallet = (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(wallets, (w)=>w.createdAt.getTime()));
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                                classes: {
                                    secondaryAction: classes.secondaryAction
                                },
                                className: classes.group,
                                onClick: ()=>{
                                    navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .PopupRoutes */ .mZ.DeriveWallet, {
                                        state: {
                                            mnemonicId: key
                                        }
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        className: classes.groupIcon,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_14__.MaskBlue, {
                                            size: 24,
                                            color: theme.palette.maskColor.white
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        className: classes.groupText,
                                        secondary: theFirstWallet?.address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            title: theFirstWallet?.address,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                component: "span",
                                                children: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__/* .formatEthereumAddress */ .j8)(theFirstWallet?.address, 4)
                                            })
                                        }) : null,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            className: classes.groupName,
                                            children: t.popups_wallet_group_title({
                                                index: String(index + 1)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        className: classes.walletCount,
                                        children: wallets.length
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_14__.ArrowRight, {
                                        size: 20
                                    })
                                ]
                            }, key);
                        })
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.sectionTitle,
                children: t.or_create_a_new_wallet_group()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ImportCreateWallet_index_js__WEBPACK_IMPORTED_MODULE_18__/* .ImportCreateWallet */ .t, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateWallet);


/***/ })

}]);
//# sourceMappingURL=chunk.1766.js.map