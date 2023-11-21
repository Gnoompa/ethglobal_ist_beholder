"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6629],{

/***/ 76629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_ExportPrivateKey)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
;// CONCATENATED MODULE: ./packages/shared-base/src/types/MIME.ts
var MimeType;
(function(MimeType) {
    MimeType["JSON"] = 'application/json';
    MimeType["Binary"] = 'application/octet-stream';
    MimeType["PNG"] = 'image/png';
})(MimeType || (MimeType = {}));

// EXTERNAL MODULE: ./packages/shared-base/src/types/Wallet.ts
var Wallet = __webpack_require__(58190);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
;// CONCATENATED MODULE: ./packages/mask/shared/helpers/download.ts
// TODO: maybe fallback to normal HTML save file?
async function saveFileFromUrl(url, fileName) {
    await browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
async function saveFileFromBuffer(options) {
    const blob = new Blob([
        options.fileContent
    ], {
        type: options.mimeType
    });
    const url = URL.createObjectURL(blob);
    await browser.downloads.download({
        url,
        filename: options.fileName,
        saveAs: true
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useSyncedRef/index.js

/**
 * Like `useRef`, but it returns immutable ref that contains actual value.
 *
 * @param value
 */
function useSyncedRef(value) {
    const ref = (0,react.useRef)(value);
    ref.current = value;
    return (0,react.useMemo)(() => Object.freeze({
        get current() {
            return ref.current;
        },
    }), []);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/util/resolveHookState.js
function resolveHookState(nextState, prevState) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (typeof nextState === 'function')
        return nextState(prevState);
    return nextState;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useToggle/index.js



/**
 * Like `useState`, but can only become `true` or `false`.
 *
 * State setter, in case called without arguments, will change the state to opposite. React
 * synthetic events are ignored by default so state setter can be used as event handler directly,
 * such behaviour can be changed by setting 2nd parameter to `false`.
 */
function useToggle(initialState = false, ignoreReactEvents = true) {
    // We don't use useReducer (which would end up with less code), because exposed
    // action does not provide functional updates feature.
    // Therefore, we have to create and expose our own state setter with
    // toggle logic.
    const [state, setState] = (0,react.useState)(initialState);
    const ignoreReactEventsRef = useSyncedRef(ignoreReactEvents);
    return [
        state,
        (0,react.useCallback)((nextState) => {
            setState((prevState) => {
                if (nextState === undefined ||
                    (ignoreReactEventsRef.current &&
                        typeof nextState === 'object' &&
                        (nextState.constructor.name === 'SyntheticBaseEvent' ||
                            typeof nextState._reactName === 'string'))) {
                    return !prevState;
                }
                return Boolean(resolveHookState(nextState, prevState));
            });
        }, []),
    ];
}

;// CONCATENATED MODULE: ./packages/mask/popups/components/MnemonicDisplay/index.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: theme.spacing(1),
            borderRadius: 8,
            border: `1px solid ${theme.palette.maskColor.line}`,
            position: 'relative'
        },
        words: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            paddingLeft: 0,
            margin: 0
        },
        word: {
            backgroundColor: theme.palette.maskColor.bg,
            padding: theme.spacing(1),
            borderRadius: 8,
            listStyleType: 'decimal',
            listStylePosition: 'inside',
            position: 'relative',
            fontWeight: 700,
            fontSize: 14,
            '&::marker': {
                backgroundColor: theme.palette.maskColor.bg,
                color: theme.palette.maskColor.third,
                fontSize: 14,
                fontWeight: 400
            }
        },
        mask: {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.mode === 'dark' ? '#000000' : '#ffffff', 0.4),
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            top: 0,
            left: 0,
            cursor: 'pointer'
        },
        tips: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            lineHeight: '18px',
            textAlign: 'center'
        },
        footer: {
            marginTop: theme.spacing(2),
            display: 'flex',
            color: theme.palette.maskColor.main,
            justifyContent: 'center',
            gap: 8
        },
        button: {
            fontWeight: 400
        },
        icon: {
            color: theme.palette.maskColor.main,
            cursor: 'pointer'
        }
    }));
const MnemonicDisplay = /*#__PURE__*/ (0,react.memo)(function MnemonicDisplay({ mnemonic = constants/* EMPTY_LIST */.rP }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const [display, toggle] = useToggle(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    !display ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.mask,
                        onClick: toggle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EyeOff, {
                                size: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.tips,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_backup_mnemonic_view_tips",
                                    components: {
                                        br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                    }
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        component: "ul",
                        className: classes.words,
                        children: mnemonic.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                component: "li",
                                className: classes.word,
                                children: x
                            }, x))
                    })
                ]
            }),
            display ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: toggle,
                    variant: "text",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EyeColor, {
                        size: 20,
                        className: classes.icon
                    }),
                    className: classes.button,
                    children: t.popups_wallet_backup_mnemonic_hidden()
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(34278);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/mask/popups/components/WalletBalance/index.tsx
var WalletBalance = __webpack_require__(71418);
;// CONCATENATED MODULE: ./packages/mask/popups/components/PrivateKeyDisplay/index.tsx












const PrivateKeyDisplay_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: theme.spacing(1),
            display: 'flex',
            alignItems: 'center'
        },
        name: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700
        },
        address: {
            color: theme.palette.maskColor.second,
            fontSize: 12,
            lineHeight: '16px'
        },
        balance: {
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.maskColor.main,
            '& > span': {
                color: theme.palette.maskColor.second,
                fontSize: 12,
                lineHeight: '16px'
            }
        },
        arrowIcon: {
            marginLeft: theme.spacing(2),
            cursor: 'pointer',
            transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        },
        expand: {
            transform: 'rotate(180deg)'
        },
        privateKey: {
            padding: theme.spacing(1.5),
            background: theme.palette.maskColor.input,
            position: 'relative',
            borderRadius: 8
        },
        text: {
            fontSize: 14,
            lineHeight: '18px',
            wordWrap: 'break-word'
        },
        view: {
            color: theme.palette.maskColor.main,
            cursor: 'pointer',
            position: 'absolute',
            bottom: 6,
            right: 12
        },
        mask: {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.mode === 'dark' ? '#000000' : '#ffffff', 0.4),
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            cursor: 'pointer',
            columnGap: 12
        },
        tips: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            lineHeight: '18px',
            textAlign: 'left'
        },
        copy: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            columnGap: 8,
            fontSize: 14,
            lineHeight: '18px',
            justifyContent: 'center',
            marginTop: theme.spacing(1.5)
        }
    }));
const PrivateKeyDisplay = /*#__PURE__*/ (0,react.memo)(function PrivateKeyDisplay({ wallet, hiddenArrow }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [display, toggle] = useToggle(false);
    const [expand, setExpand] = (0,react.useState)(!!hiddenArrow);
    const { classes, cx } = PrivateKeyDisplay_useStyles();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const { value: privateKey } = (0,useAsync/* default */.Z)(async ()=>{
        if (!wallet) return;
        return service/* default */.ZP.Wallet.exportPrivateKey(wallet.address);
    }, [
        wallet
    ]);
    const handleCopy = (0,react.useCallback)(()=>{
        if (!privateKey) return;
        copyToClipboard(privateKey);
        showSnackbar(t.copied());
    }, [
        privateKey
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                        size: 24
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        ml: 1,
                        flex: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: wallet.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                children: (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 4)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        display: "flex",
                        height: "32px",
                        alignItems: "flex-end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletBalance/* WalletBalance */.N, {
                            className: classes.balance,
                            skeletonWidth: 60,
                            account: wallet.address
                        })
                    }),
                    !hiddenArrow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownRound, {
                        onClick: ()=>setExpand(!expand),
                        size: 20,
                        className: cx(classes.arrowIcon, expand ? classes.expand : undefined)
                    }) : null
                ]
            }),
            expand ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.privateKey,
                        children: [
                            !display ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.mask,
                                onClick: toggle,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EyeOff, {
                                        size: 24
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.tips,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                            i18nKey: "popups_wallet_backup_private_key_view_tips",
                                            components: {
                                                br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                            }
                                        })
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.text,
                                children: privateKey
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EyeColor, {
                                onClick: toggle,
                                size: 20,
                                className: classes.view
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.copy,
                        onClick: handleCopy,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Copy, {
                                size: 20
                            }),
                            t.popups_wallet_backup_copy_private_key()
                        ]
                    })
                ]
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useWalletGroup.ts
var useWalletGroup = __webpack_require__(83272);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/ExportPrivateKey/index.tsx





















var TabType;
(function(TabType) {
    TabType["Mnemonic"] = "Mnemonic";
    TabType["PrivateKey"] = 'Private Key';
    TabType["JsonFile"] = 'Json File';
})(TabType || (TabType = {}));
const ExportPrivateKey_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        tabs: {
            flex: 'none!important',
            paddingTop: '0px!important',
            paddingLeft: 16,
            paddingRight: 16,
            '& > button': {
                padding: theme.spacing(1, 1.5)
            }
        },
        panel: {
            padding: theme.spacing(0),
            background: theme.palette.maskColor.bottom,
            flex: 1,
            overflow: 'auto'
        },
        iconWrapper: {
            height: 120,
            background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), linear-gradient(90deg, rgba(98, 126, 234, 0.20) 0%, rgba(59, 153, 252, 0.20) 100%)' : 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));
const ExportPrivateKey = /*#__PURE__*/ (0,react.memo)(function ExportPrivateKey() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = ExportPrivateKey_useStyles();
    const wallet = (0,useWallet/* useWallet */.O)();
    const walletGroup = (0,useWalletGroup/* useWalletGroup */.j)();
    const { state } = (0,dist/* useLocation */.TH)();
    const [{ loading }, onExport] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!wallet?.address) return;
        const now = (0,format/* default */.Z)(Date.now(), 'yyyy-MM-dd');
        const jsonFile = await service/* default */.ZP.Wallet.exportKeyStoreJSON(wallet.address, state?.password);
        // TODO: The address parameter should be returned by the sdk and not displayed as such. We need to wait for the sdk to be upgraded.
        await saveFileFromBuffer({
            fileContent: (0,esm/* encodeText */.YT)(JSON.stringify({
                ...JSON.parse(jsonFile),
                address: wallet.address.slice(2)
            })),
            fileName: `mask-network-keystore-backup-${now}.json`,
            mimeType: MimeType.JSON
        });
    }, [
        wallet?.address,
        state?.password
    ]);
    const { loading: getMnemonicLoading, value: mnemonic } = (0,useAsync/* default */.Z)(async ()=>{
        if (!wallet) return;
        const words = await service/* default */.ZP.Wallet.exportMnemonicWords(wallet.address).catch(()=>'');
        if (!words) {
            const primaryWallet = wallet.mnemonicId ? await service/* default */.ZP.Wallet.getPrimaryWalletByMnemonicId(wallet.mnemonicId) : wallet.source === Wallet/* ImportSource */.Q.LocalGenerated ? await service/* default */.ZP.Wallet.getWalletPrimary() : null;
            if (!primaryWallet) return;
            const primaryWalletWords = await service/* default */.ZP.Wallet.exportMnemonicWords(primaryWallet.address);
            if (!primaryWalletWords) return;
            return primaryWalletWords.split(' ');
        }
        return words.split(' ');
    }, [
        wallet
    ]);
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)(state.hasMnemonic ? TabType.Mnemonic : TabType.PrivateKey, TabType.PrivateKey, TabType.JsonFile);
    (0,useTitle/* useTitle */.Z)(wallet?.name ? wallet.name : '');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
        value: currentTab,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {
                tabList: !getMnemonicLoading && mnemonic ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                    onChange: onChange,
                    "aria-label": "persona-tabs",
                    classes: {
                        root: classes.tabs
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_name_mnemonic(),
                            value: TabType.Mnemonic
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_name_private_key(),
                            value: TabType.PrivateKey
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_name_keystore(),
                            value: TabType.JsonFile
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                    onChange: onChange,
                    "aria-label": "persona-tabs",
                    classes: {
                        root: classes.tabs
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_name_private_key(),
                            value: TabType.PrivateKey
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_name_keystore(),
                            value: TabType.JsonFile
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                p: 2,
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
                flex: 1,
                children: [
                    !getMnemonicLoading && mnemonic ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                        className: classes.panel,
                        value: TabType.Mnemonic,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                sx: {
                                    fontSize: 14,
                                    lineHeight: '18px',
                                    fontWeight: 700
                                },
                                children: t.popups_wallet_backup_mnemonic_title()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                sx: {
                                    py: 2,
                                    color: theme.palette.maskColor.second,
                                    fontSize: 14,
                                    lineHeight: '18px'
                                },
                                children: t.popups_wallet_backup_mnemonic_tips()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicDisplay, {
                                mnemonic: mnemonic
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                        className: classes.panel,
                        value: TabType.PrivateKey,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                sx: {
                                    fontSize: 14,
                                    fontWeight: 700,
                                    lineHeight: '18px'
                                },
                                children: t.popups_wallet_settings_export_private_key_title()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                display: "flex",
                                flexDirection: "column",
                                mt: 2,
                                rowGap: 2,
                                maxHeight: "450px",
                                overflow: "auto",
                                "data-hide-scrollbar": true,
                                children: wallet?.mnemonicId && walletGroup?.groups[wallet.mnemonicId] && walletGroup?.groups[wallet.mnemonicId].length > 1 ? (walletGroup?.groups[wallet.mnemonicId].map((x, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PrivateKeyDisplay, {
                                        wallet: x
                                    }, index))) : wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivateKeyDisplay, {
                                    wallet: wallet,
                                    hiddenArrow: true
                                }) : null
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                        className: classes.panel,
                        value: TabType.JsonFile,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EncryptedFiles, {
                                    size: 36
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: theme.palette.maskColor.danger,
                                children: t.popups_export_keystore_tips()
                            })
                        ]
                    })
                ]
            }),
            currentTab === TabType.JsonFile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomController/* BottomController */.L, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                    onClick: onExport,
                    fullWidth: true,
                    loading: loading,
                    disabled: loading,
                    children: t.export()
                })
            }) : null
        ]
    });
});
/* harmony default export */ const Wallet_ExportPrivateKey = (ExportPrivateKey);


/***/ }),

/***/ 16941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTab);
    const [, startTransition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useTransition)();
    const tabRecords = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>tabRecords[t] = t);
    const isCurrentTabAvailable = [
        defaultTab,
        ...possibleTabs
    ].includes(currentTab);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isCurrentTabAvailable) {
            setTab(defaultTab);
        }
    }, [
        isCurrentTabAvailable,
        defaultTab
    ]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, value)=>{
        startTransition(()=>setTab(value));
    }, []);
    return [
        currentTab,
        onChange,
        tabRecords,
        setTab
    ];
}


/***/ })

}]);
//# sourceMappingURL=chunk.6629.js.map