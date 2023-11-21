"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4824],{

/***/ 27341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useConnectedOrigins)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98170);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);




function useConnectedOrigins() {
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)([
        'wallet-granted-origins',
        wallet?.address
    ], async ()=>await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Wallet.getAllConnectedOrigins(wallet.address), {
        enabled: !!wallet?.address,
        networkMode: 'always'
    });
}


/***/ }),

/***/ 84824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_WalletSettings)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/popups/modals/modal-controls.ts
var modal_controls = __webpack_require__(75904);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/millisecondsToMinutes/index.js
var millisecondsToMinutes = __webpack_require__(4800);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/millisecondsToHours/index.js
var millisecondsToHours = __webpack_require__(29737);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/useStyles.ts
/* eslint-disable tss-unused-classes/unused-classes */ 

const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        list: {
            padding: '12px 16px 0px 16px',
            overflow: 'auto',
            flexGrow: 1
        },
        primaryItem: {
            margin: '16px 16px 0 16px',
            background: theme.palette.maskColor.primary
        },
        primaryItemText: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.white
        },
        primaryItemSecondText: {
            fontSize: 10,
            fontWeight: 700,
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8)
        },
        item: {
            display: 'flex',
            padding: theme.spacing(1.5),
            marginBottom: 12,
            alignItems: 'center',
            cursor: 'pointer',
            justifyContent: 'space-between',
            background: theme.palette.maskColor.bottom,
            borderRadius: 8,
            boxShadow: `0px 0px 20px 0px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.main, 0.05)}`
        },
        itemText: {
            marginLeft: 6,
            fontSize: 14,
            color: theme.palette.maskColor.main
        },
        walletInfo: {
            marginLeft: 12
        },
        maskBlue: {
            border: `1px solid ${theme.palette.maskColor.white}`,
            borderRadius: 99
        },
        primaryItemBox: {
            display: 'flex',
            alignItems: 'center',
            height: 36
        },
        itemBox: {
            display: 'flex',
            alignItems: 'center',
            height: 24
        },
        bottomAction: {
            paddingTop: 16,
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)'
        },
        ellipsis: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: 150
        },
        removeWalletButton: {
            marginBottom: 16
        },
        bold: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        confirmMessage: {
            fontSize: 14,
            lineHeight: '18px',
            wordBreak: 'break-word',
            maxHeight: '60vh',
            overflow: 'auto'
        }
    }));

// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/hooks/useWalletAutoLockTime.ts
var useWalletAutoLockTime = __webpack_require__(18029);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/AutoLock.tsx









function AutoLock() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = useStyles();
    const { value } = (0,useWalletAutoLockTime/* useWalletAutoLockTime */.e)();
    const minutes = (0,react.useMemo)(()=>value ? (0,millisecondsToMinutes/* default */.Z)(value) : undefined, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>modal_controls/* WalletAutoLockSettingModal */.bU.open({
                title: t.popups_wallet_settings_auto_unlock_time_title()
            }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Time, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.popups_wallet_settings_auto_unlock_time()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: minutes && minutes >= 60 ? t['popups_wallet_settings_auto-unlock_time_hour']({
                            count: (0,millisecondsToHours/* default */.Z)(value)
                        }) : t.popups_wallet_settings_auto_unlock_time_mins({
                            time: String((0,millisecondsToMinutes/* default */.Z)(value))
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        color: theme.palette.maskColor.second,
                        size: 24
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useCurrencyType.ts
var useCurrencyType = __webpack_require__(18121);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/ChangeCurrency.tsx










function ChangeCurrency() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = useStyles();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const chooseCurrency = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.ChooseCurrency);
    }, [
        modalNavigate
    ]);
    const currencyType = (0,useCurrencyType/* useCurrencyType */.P)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: chooseCurrency,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Currency, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.currency()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    currencyType ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: (0,resolver/* resolveCurrencyName */.uL)(currencyType)
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        color: theme.palette.maskColor.second,
                        size: 24
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/ChangeNetwork.tsx








function ChangeNetwork() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = useStyles();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const chooseNetwork = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.ChooseNetwork);
    }, [
        modalNavigate
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: chooseNetwork,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Globe, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.popups_wallet_settings_change_network()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.itemBox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                    color: theme.palette.maskColor.second,
                    size: 24
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/ChangeOwner.tsx












function ChangeOwner() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx, theme } = useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const { data: personaManagers } = (0,useQuery/* useQuery */.a)([
        'persona-managers'
    ], async ()=>{
        return service/* default */.ZP.Identity.queryOwnedPersonaInformation(true);
    }, {
        networkMode: 'always'
    });
    const walletManager = (0,react.useMemo)(()=>wallets.find((x)=>!x.owner && (0,isSameAddress/* isSameAddress */.W)(wallet?.owner, x.address)), [
        wallets,
        wallet
    ]);
    const personaManager = (0,react.useMemo)(()=>personaManagers?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(wallet?.owner, x.address)), [
        personaManagers,
        wallet
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.ChangeOwner),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PersonasOutline, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.popups_change_owner()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: cx(classes.itemText, classes.ellipsis),
                        children: walletManager?.name ?? personaManager?.nickname
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        color: theme.palette.maskColor.second,
                        size: 24
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/ChangePaymentPassword.tsx






function ChangePaymentPassword() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>modal_controls/* ChangePaymentPasswordModal */.jm.open({
                title: t.popups_wallet_settings_change_payment_password()
            }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Lock, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.popups_wallet_settings_change_payment_password()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                color: theme.palette.maskColor.second,
                size: 24
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useConnectedOrigins.ts
var useConnectedOrigins = __webpack_require__(27341);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/ConnectedOrigins.tsx








function ConnectedOrigins() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { data: origins } = (0,useConnectedOrigins/* useConnectedOrigins */.T)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.ConnectedSites),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Appendices, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.popups_wallet_connected_sites()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: origins ? origins.size : 0
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        color: theme.palette.maskColor.second,
                        size: 24
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContacts.ts
var useContacts = __webpack_require__(57131);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/Contacts.tsx








function Contacts() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const contacts = (0,useContacts/* useContacts */.g)();
    const { classes, theme } = useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const totalContacts = wallets.length + contacts.length;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>navigate(`${Routes/* PopupRoutes */.mZ.Contacts}/${wallet?.address}`, {
                state: {
                    type: 'manage'
                }
            }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.BaseUser, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.contacts()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: totalContacts
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        color: theme.palette.maskColor.second,
                        size: 24
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/Rename.tsx







function Rename() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const { classes, theme } = useStyles();
    if (!wallet) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>modal_controls/* WalletRenameModal */.AY.open({
                wallet,
                title: t.rename()
            }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Edit2, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.rename()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: wallet.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        color: theme.palette.maskColor.second,
                        size: 24
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/ShowPrivateKey.tsx






function ShowPrivateKey() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: ()=>modal_controls/* ShowPrivateKeyModal */.Jw.open({
                title: t.popups_wallet_settings_enter_payment_password()
            }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PublicKey2, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.itemText,
                        children: t.popups_wallet_settings_backup_wallet()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                color: theme.palette.maskColor.second,
                size: 24
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletSettings/index.tsx


























function getPathIndex(path) {
    const rawIndex = path?.split('/').pop();
    if (!rawIndex) return;
    return Number.parseInt(rawIndex, 10);
}
const WalletSettings = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx, theme } = useStyles();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const allWallets = (0,useWallets/* useWallets */.r)();
    const handleSwitchWallet = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.WalletAccount);
    }, [
        modalNavigate
    ]);
    (0,useTitle/* useTitle */.Z)(t.popups_wallet_setting());
    const siblingWallets = (0,react.useMemo)(()=>{
        if (!wallet?.mnemonicId) return constants/* EMPTY_LIST */.rP;
        return allWallets.filter((x)=>x.mnemonicId === wallet.mnemonicId).sort((a, z)=>{
            const msA = a.createdAt.getTime();
            const msZ = z.createdAt.getTime();
            if (msA !== msZ) return msA - msZ;
            const pathIndexA = getPathIndex(a.derivationPath);
            const pathIndexZ = getPathIndex(z.derivationPath);
            if (pathIndexA === pathIndexZ) return 0;
            if (pathIndexA === undefined) return 1;
            if (pathIndexZ === undefined) return -1;
            return pathIndexA - pathIndexZ;
        });
    }, [
        allWallets,
        wallet?.mnemonicId
    ]);
    if (!wallet) return null;
    // The wallet has derivationPath is also the one with minimum derivation path
    const isTheFirstWallet = wallet.mnemonicId ? (0,isSameAddress/* isSameAddress */.W)((0,head/* default */.Z)(siblingWallets)?.address, wallet.address) : false;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.content,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: cx(classes.item, classes.primaryItem),
                onClick: handleSwitchWallet,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.primaryItemBox,
                        children: [
                            wallet.owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                                size: 24
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                size: 24,
                                className: classes.maskBlue
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.walletInfo,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.primaryItemText,
                                        children: wallet.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.primaryItemSecondText,
                                        children: wallet.address
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownRound, {
                        color: theme.palette.maskColor.white,
                        size: 24
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                "data-hide-scrollbar": true,
                children: [
                    wallet.owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeOwner, {}) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Rename, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Contacts, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedOrigins, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AutoLock, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeCurrency, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangePaymentPassword, {}),
                    wallet.owner ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowPrivateKey, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeNetwork, {})
                        ]
                    })
                ]
            }),
            wallet.owner ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.bottomAction,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                    fullWidth: true,
                    disabled: isTheFirstWallet,
                    onClick: async ()=>{
                        const ownedWallets = !wallet?.address ? [] : allWallets.filter((x)=>(0,isSameAddress/* isSameAddress */.W)(x.owner, wallet.address));
                        if (ownedWallets.length) {
                            const currentWallet = (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 4);
                            const other_wallets = ownedWallets.map((x)=>(0,formatter/* formatEthereumAddress */.j8)(x.address, 4)).join(',');
                            const confirmed = await modals/* ConfirmDialog */.QH.openAndWaitForClose({
                                title: t.remove_wallet_title(),
                                message: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.confirmMessage,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                        i18nKey: "remove_wallet_message",
                                        values: {
                                            wallet: currentWallet,
                                            other_wallets
                                        },
                                        components: {
                                            bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.bold,
                                                component: "span"
                                            }),
                                            br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                        }
                                    })
                                })
                            });
                            if (!confirmed) return;
                        }
                        await modal_controls/* WalletRemoveModal */.RN.openAndWaitForClose({
                            title: t.remove(),
                            wallet
                        });
                    },
                    width: 368,
                    color: "error",
                    className: classes.removeWalletButton,
                    children: t.popups_wallet_settings_remove_wallet()
                })
            })
        ]
    });
});
/* harmony default export */ const Wallet_WalletSettings = (WalletSettings);


/***/ })

}]);
//# sourceMappingURL=chunk.4824.js.map