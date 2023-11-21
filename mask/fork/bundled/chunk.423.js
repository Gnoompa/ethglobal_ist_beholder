"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[423],{

/***/ 7696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82897);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24002);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99116);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81755);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54225);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39521);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(90097);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39117);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(90138);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(6764);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74765);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37377);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98170);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41238);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83977);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(41487);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94036);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18382);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4643);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26332);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85129);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81430);
/* harmony import */ var _components_PersonaAvatar_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(80264);
/* harmony import */ var _components_PasswordField_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51093);
/* harmony import */ var _components_BottomController_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(49546);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5130);























const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme)=>({
        infoBox: {
            background: theme.palette.maskColor.modalTitleBg,
            borderRadius: 8,
            padding: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center',
            columnGap: theme.spacing(1),
            marginBottom: theme.spacing(1.5)
        },
        wallets: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: theme.spacing(1.5)
        },
        tips: {
            fontSize: 14,
            lineHeight: '20px',
            color: theme.palette.maskColor.danger,
            margin: theme.spacing(2, 0),
            wordWrap: 'break-word'
        }
    }));
const Logout = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_5__/* .useMaskSharedTrans */ .b)();
    const { currentPersona } = _masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .PersonaContext */ .m.useContainer();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .s0)();
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useWallet */ .O)();
    const wallets = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useWallets */ .r)();
    const { Provider } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3State */ .d)();
    const { smartPayChainId } = (0,unstated_next__WEBPACK_IMPORTED_MODULE_11__/* .useContainer */ .u)(_hooks_index_js__WEBPACK_IMPORTED_MODULE_12__/* .PopupContext */ .t);
    const { hasPassword, isLoading: hasPasswordLoading } = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_13__/* .useHasPassword */ .T)();
    const { user } = (0,unstated_next__WEBPACK_IMPORTED_MODULE_11__/* .useContainer */ .u)(_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_14__/* .UserContext */ .S);
    const { showSnackbar } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_15__/* .usePopupCustomSnackbar */ .D)();
    const manageWallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return wallets.filter((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .isSameAddress */ .W)(x.owner, currentPersona?.address));
    }, [
        wallets,
        currentPersona
    ]);
    const [{ loading }, onLogout] = (0,react_use__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(async ()=>{
        try {
            if (!currentPersona) return;
            if (currentPersona.address) {
                if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .isSameAddress */ .W)(currentPersona.address, wallet?.owner)) {
                    const newWallet = (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(wallets);
                    await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .Web3 */ .Bv.connect({
                        account: newWallet?.address,
                        chainId: newWallet?.owner ? smartPayChainId : undefined,
                        providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .ProviderType */ .lP.MaskWallet
                    });
                }
                if (manageWallets.length) {
                    const maskProvider = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .Providers */ .Cl[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .ProviderType */ .lP.MaskWallet];
                    await maskProvider?.removeWallets(manageWallets);
                }
            }
            await _services__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP.Identity.logoutPersona(currentPersona.identifier);
            const currentPersonaIdentifier = await _services__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP.Settings.getCurrentPersonaIdentifier();
            if (!currentPersonaIdentifier) {
                const lastCreatedPersona = await _services__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP.Identity.queryLastPersonaCreated();
                await _services__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP.Settings.setCurrentPersonaIdentifier(lastCreatedPersona);
            }
            showSnackbar(t.popups_log_out_successfully());
            navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_21__/* .PopupRoutes */ .mZ.Personas, {
                replace: true
            });
        } catch  {
            showSnackbar(t.popups_log_out_failed(), {
                variant: 'error'
            });
        }
    }, [
        currentPersona,
        Provider,
        wallet,
        wallets,
        smartPayChainId,
        manageWallets.length
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LogoutUI, {
        chainId: smartPayChainId,
        manageWallets: manageWallets,
        currentPersona: currentPersona,
        backupPassword: user.backupPassword ?? '',
        verifyPaymentPassword: _services__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP.Wallet.verifyPassword,
        loading: loading || hasPasswordLoading,
        hasPassword: hasPassword,
        onLogout: onLogout,
        onCancel: ()=>navigate(-1)
    });
});
const LogoutUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ backupPassword, loading, onLogout, hasPassword, onCancel, currentPersona, manageWallets, verifyPaymentPassword, chainId })=>{
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_5__/* .useMaskSharedTrans */ .b)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)();
    const modalNavigate = (0,_components_index_js__WEBPACK_IMPORTED_MODULE_23__/* .useModalNavigate */ .ao)();
    const { classes } = useStyles();
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [paymentPassword, setPaymentPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [paymentPasswordError, setPaymentPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_24__/* .useTitle */ .Z)(t.popups_log_out());
    const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (manageWallets.length) {
            if (hasPassword) {
                const verified = await verifyPaymentPassword(paymentPassword);
                if (!verified) {
                    setPaymentPassword(t.popups_wallet_persona_log_out_error_payment_password());
                    return;
                }
            } else if (!backupPassword) {
                modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_21__/* .PopupModalRoutes */ .cY.SetBackupPassword, {
                    to: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_21__/* .PopupRoutes */ .mZ.ExportPrivateKey
                });
                return;
            }
        }
        if (backupPassword && backupPassword !== password) {
            setError(true);
            return;
        }
        onLogout();
        return;
    }, [
        onLogout,
        backupPassword,
        password,
        paymentPassword,
        manageWallets.length,
        hasPassword
    ]);
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (loading || error || paymentPasswordError) return true;
        if (manageWallets.length) {
            if (hasPassword) return !paymentPassword.length;
            if (!backupPassword) return false;
        }
        if (backupPassword) return !password.length;
        return false;
    }, [
        loading,
        manageWallets,
        backupPassword,
        hasPassword,
        error,
        paymentPasswordError,
        paymentPassword,
        password
    ]);
    const passwordField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (manageWallets.length) {
            if (hasPassword) {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField_index_js__WEBPACK_IMPORTED_MODULE_25__/* .PasswordField */ .Z, {
                    placeholder: t.popups_wallet_logout_input_payment_password(),
                    value: paymentPassword,
                    error: !!paymentPasswordError,
                    helperText: paymentPasswordError,
                    onChange: (e)=>{
                        if (paymentPasswordError) setPaymentPasswordError('');
                        setPaymentPassword(e.target.value);
                    }
                });
            } else if (backupPassword) {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField_index_js__WEBPACK_IMPORTED_MODULE_25__/* .PasswordField */ .Z, {
                    placeholder: t.popups_wallet_backup_input_password(),
                    value: password,
                    onChange: (e)=>{
                        if (error) setError(false);
                        setPassword(e.target.value);
                    },
                    error: error,
                    helperText: error ? t.popups_password_do_not_match() : ''
                });
            }
            return;
        }
        if (backupPassword) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField_index_js__WEBPACK_IMPORTED_MODULE_25__/* .PasswordField */ .Z, {
                placeholder: t.popups_wallet_backup_input_password(),
                value: password,
                onChange: (e)=>{
                    if (error) setError(false);
                    setPassword(e.target.value);
                },
                error: error,
                helperText: error ? t.popups_password_do_not_match() : ''
            });
        }
        return;
    }, [
        manageWallets,
        hasPassword,
        paymentPassword,
        paymentPasswordError,
        backupPassword,
        password,
        error,
        t
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        flex: 1,
        maxHeight: "544px",
        overflow: "auto",
        "data-hide-scrollbar": true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                p: 2,
                pb: 11,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        className: classes.infoBox,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PersonaAvatar_index_js__WEBPACK_IMPORTED_MODULE_27__/* .PersonaAvatar */ .K, {
                                size: 30,
                                avatar: currentPersona?.avatar
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        fontWeight: 700,
                                        children: currentPersona?.nickname
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        fontSize: 10,
                                        color: theme.palette.maskColor.third,
                                        lineHeight: "10px",
                                        children: currentPersona?.identifier.rawPublicKey
                                    })
                                ]
                            })
                        ]
                    }),
                    manageWallets.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        className: classes.wallets,
                        children: manageWallets.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                className: classes.infoBox,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_29__.SmartPay, {
                                        size: 30
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                                fontWeight: 700,
                                                children: x.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                                marginTop: 0.5,
                                                color: theme.palette.maskColor.second,
                                                fontWeight: 700,
                                                fontSize: 10,
                                                lineHeight: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                children: [
                                                    (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_30__/* .formatEthereumAddress */ .j8)(x.address, 4),
                                                    chainId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                                        style: {
                                                            width: 12,
                                                            height: 12,
                                                            color: theme.palette.maskColor.main,
                                                            display: 'flex',
                                                            marginLeft: 4
                                                        },
                                                        href: _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .ExplorerResolver */ .Xz.addressLink(chainId, x.address),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_29__.LinkOut, {
                                                            size: 12
                                                        })
                                                    }) : null
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                        className: classes.tips,
                        children: [
                            t.popups_log_out_tips(),
                            currentPersona && manageWallets.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                mt: 2,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .Trans */ .cC, {
                                    i18nKey: manageWallets.length > 1 ? 'popups_log_out_with_smart_pay_tips_other' : 'popups_log_out_with_smart_pay_tips_one',
                                    values: {
                                        persona: currentPersona.nickname
                                    }
                                })
                            }) : null
                        ]
                    }),
                    passwordField
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_BottomController_index_js__WEBPACK_IMPORTED_MODULE_32__/* .BottomController */ .L, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                        variant: "outlined",
                        fullWidth: true,
                        onClick: onCancel,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_34__/* .ActionButton */ .K, {
                        variant: "contained",
                        color: !backupPassword && manageWallets.length && !hasPassword ? 'primary' : 'error',
                        fullWidth: true,
                        onClick: onConfirm,
                        disabled: disabled,
                        children: !backupPassword && manageWallets.length && !hasPassword ? t.backup() : t.popups_log_out()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);


/***/ })

}]);
//# sourceMappingURL=chunk.423.js.map