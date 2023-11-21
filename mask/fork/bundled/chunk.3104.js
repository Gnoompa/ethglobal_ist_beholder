(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3104],{

/***/ 72116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66584);





const Action = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Action({ children, openSelectWalletDialog }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        display: "flex",
        columnGap: 16,
        minWidth: !_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .Sniffings */ .Y.is_popup_page ? 276 : 176,
        ref: ref,
        children: children ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            fullWidth: true,
            onClick: openSelectWalletDialog,
            children: t.wallet_status_button_change()
        })
    });
});


/***/ }),

/***/ 92553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ PluginVerifiedWalletStatusBar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Divider/Divider.js
var Divider = __webpack_require__(31673);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainId.ts
var useChainId = __webpack_require__(58807);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useDefaultChainId.ts
var useDefaultChainId = __webpack_require__(4639);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(60574);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/Action.tsx
var Action = __webpack_require__(72116);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBar/hooks/useWalletName.ts





const useWalletName = (expectedAccount, expectedPluginId, isNextIdWallet)=>{
    const { account, providerType } = (0,useContext/* useChainContext */.ql)({
        account: expectedAccount
    });
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(expectedPluginId, account);
    const wallets = (0,useWallets/* useWallets */.r)();
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)(expectedPluginId);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(expectedPluginId);
    return (0,react.useMemo)(()=>{
        // Binding Wallet Just display domain and network name
        if (domain) return Sniffings/* Sniffings */.Y.is_popup_page ? (0,formatter/* formatDomainName */.bc)(domain, 12) : domain;
        if (isNextIdWallet && expectedPluginId) return (0,resolver/* resolveNetworkWalletName */.X5)(expectedPluginId);
        const wallet = wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, expectedAccount ?? account));
        if (providerType === types/* ProviderType */.lP.MaskWallet && wallet?.name) return wallet?.name;
        return providerDescriptor?.name || Others.formatAddress(account, 4);
    }, [
        wallets,
        expectedAccount,
        providerType,
        domain,
        providerDescriptor?.name,
        Others.formatAddress,
        account,
        isNextIdWallet,
        expectedPluginId
    ]);
};

// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/WalletDescription.tsx
var WalletDescription = __webpack_require__(58307);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBar/WalletMenuItem.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        icon: {
            color: theme.palette.maskColor.line
        }
    }));
const WalletMenuItem = /*#__PURE__*/ (0,react.memo)(({ address, selected, onChangeWallet, platform, onSelect, verified, expectedChainId })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)(platform ? (0,resolver/* resolveNextID_NetworkPluginID */.j$)(platform) : undefined);
    const defaultChainId = (0,useDefaultChainId/* useDefaultChainId */.b)(pluginID);
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: platform ? defaultChainId : expectedChainId
    });
    const name = useWalletName(address, pluginID, !!platform);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(pluginID, chainId);
    const formattedAddress = Others.formatAddress(address, 4);
    const addressLink = Others.explorerResolver.addressLink(chainId, address);
    const descriptionProps = {
        name,
        providerIcon: !platform ? providerDescriptor?.icon : undefined,
        networkIcon: networkDescriptor?.icon,
        iconFilterColor: !platform ? providerDescriptor?.iconFilterColor : undefined,
        formattedAddress,
        addressLink,
        address,
        verified
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
        value: address,
        onClick: ()=>onSelect?.(descriptionProps, chainId, pluginID),
        children: [
            /* TODO: replace to radio */ /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                children: selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonChecked, {
                    size: 24,
                    style: {
                        filter: 'drop-shadow(0px 0px 6px rgba(28, 104, 243, 0.6))'
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonUnChecked, {
                    size: 24,
                    className: classes.icon
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletDescription/* WalletDescription */.a, {
                ...descriptionProps
            }),
            onChangeWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "medium",
                variant: "roundedContained",
                onClick: onChangeWallet,
                sx: {
                    marginLeft: 4
                },
                children: t.wallet_status_button_change()
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(92935);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginVerifiedWalletStatusBar.tsx

















const PluginVerifiedWalletStatusBar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            boxSizing: 'content-box',
            display: 'flex',
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.mainBackground : (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            padding: theme.spacing(2),
            borderRadius: '0 0 12px 12px',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            maxHeight: 40
        },
        connection: {
            width: 18,
            height: 18,
            marginRight: 8
        },
        menu: {
            background: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
            borderRadius: Sniffings/* Sniffings */.Y.is_popup_page ? 16 : undefined
        }
    }));
const PluginVerifiedWalletStatusBar = /*#__PURE__*/ (0,react.memo)(({ className, children, verifiedWallets, onChange, expectedAddress, openPopupWindow, onChangeWallet })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = PluginVerifiedWalletStatusBar_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const globalChainId = (0,useChainId/* useChainId */.x)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const allWallets = (0,useWallets/* useWallets */.r)();
    const { pluginID: currentPluginID } = (0,useContext/* useNetworkContext */.gK)();
    const isSmartPay = !!allWallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, account) && x.owner);
    const { value: smartPaySupportChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    // exclude current account
    const wallets = verifiedWallets.filter((x)=>!(0,isSameAddress/* isSameAddress */.W)(x.identity, account));
    const selectedWallet = wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.identity, expectedAddress));
    const defaultVerifiedWallet = selectedWallet ?? (0,head/* default */.Z)(wallets);
    // Whether the current account is verified
    const isVerifiedAccount = verifiedWallets.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.identity, account));
    const pluginIdByDefaultVerifiedWallet = defaultVerifiedWallet ? (0,resolver/* resolveNextID_NetworkPluginID */.j$)(defaultVerifiedWallet?.platform) : undefined;
    const isNextIdWallet = !account || !(0,isSameAddress/* isSameAddress */.W)(account, expectedAddress);
    const defaultPluginId = isNextIdWallet ? pluginIdByDefaultVerifiedWallet : currentPluginID;
    const defaultWalletName = useWalletName(isNextIdWallet ? defaultVerifiedWallet?.identity : account, defaultPluginId, isNextIdWallet);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(defaultPluginId);
    const defaultChainId = (0,useDefaultChainId/* useDefaultChainId */.b)(defaultPluginId);
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)(defaultPluginId);
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(defaultPluginId, !isNextIdWallet ? globalChainId : defaultChainId);
    const pendingTransactions = (0,useRecentTransactions/* useRecentTransactions */.S)(currentPluginID, specs.TransactionStatusType.NOT_DEPEND);
    // actual address
    const walletIdentity = !isNextIdWallet ? account : defaultVerifiedWallet?.identity;
    const description = (0,react.useMemo)(()=>({
            name: defaultWalletName,
            networkIcon: networkDescriptor?.icon,
            providerIcon: !isNextIdWallet ? providerDescriptor?.icon : undefined,
            iconFilterColor: !isNextIdWallet ? providerDescriptor?.iconFilterColor : '',
            formattedAddress: walletIdentity ? Others.formatAddress(walletIdentity, 4) : '',
            addressLink: walletIdentity ? Others.explorerResolver.addressLink(!isNextIdWallet ? chainId : defaultChainId, walletIdentity) : '',
            address: walletIdentity,
            verified: !isNextIdWallet ? isVerifiedAccount : true
        }), [
        account,
        defaultWalletName,
        providerDescriptor,
        networkDescriptor,
        defaultVerifiedWallet,
        defaultChainId,
        chainId,
        walletIdentity
    ]);
    const [descriptionProps, setDescriptionProps] = (0,react.useState)(description);
    const onSelect = (0,react.useCallback)((props, chainId, pluginID)=>{
        setDescriptionProps(props);
        if (!props.address) return;
        onChange?.(props.address, pluginID, chainId);
    }, [
        setDescriptionProps,
        onChange
    ]);
    const [menu, openMenu] = (0,useMenu/* useMenuConfig */._)([
        account ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletMenuItem, {
            address: account,
            verified: isVerifiedAccount,
            onChangeWallet: onChangeWallet ? onChangeWallet : ()=>modals/* SelectProviderModal */.ge.open(),
            selected: (0,isSameAddress/* isSameAddress */.W)(descriptionProps.address, account),
            onSelect: onSelect,
            expectedChainId: isSmartPay ? smartPaySupportChainId : globalChainId
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "roundedContained",
                fullWidth: true,
                onClick: ()=>modals/* SelectProviderModal */.ge.open(),
                sx: {
                    minWidth: 311
                },
                children: t.connect_your_wallet()
            })
        }, "connect"),
        wallets.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
            style: {
                marginLeft: 8,
                marginRight: 8
            }
        }, "divider") : null,
        ...wallets.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletMenuItem, {
                address: x.identity,
                verified: true,
                platform: x.platform,
                selected: (0,isSameAddress/* isSameAddress */.W)(descriptionProps.address, x.identity),
                onSelect: onSelect
            }, x.identity)),
        openPopupWindow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: openPopupWindow,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WalletSetting, {
                        size: 30,
                        sx: {
                            marginRight: 1,
                            transform: 'translate(0px, 2px)'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 14,
                        fontWeight: 700,
                        children: t.connected_wallet_settings()
                    })
                ]
            })
        }, "Wallet Setting") : null
    ], {
        classes: {
            paper: classes.menu
        }
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        setDescriptionProps(description);
    }, [
        description
    ]);
    if (!account && verifiedWallets.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: cx(classes.root, className),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                fullWidth: true,
                onClick: ()=>modals/* SelectProviderModal */.ge.open(),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                        className: classes.connection
                    }),
                    " ",
                    t.plugin_wallet_connect_a_wallet()
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: cx(classes.root, className),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletDescription/* WalletDescription */.a, {
                        ...(0,omit/* default */.Z)(descriptionProps, 'address'),
                        onClick: openMenu,
                        pending: !!pendingTransactions.length,
                        onPendingClick: ()=>modals/* WalletStatusModal */.L9.open()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Action/* Action */.a, {
                        openSelectWalletDialog: ()=>modals/* SelectProviderModal */.ge.open(),
                        children: children
                    })
                ]
            }),
            menu
        ]
    });
});


/***/ }),

/***/ 58307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ WalletDescription)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20419);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90138);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98748);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98662);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8311);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4,
            cursor: 'pointer'
        },
        description: {
            marginLeft: 10
        },
        walletName: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '18px'
        },
        address: {
            color: theme.palette.maskColor.second,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            columnGap: 2
        },
        pending: {
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderRadius: 2,
            padding: '2px 4px',
            backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* .alpha */ .Fq)(theme.palette.maskColor.warn, 0.1),
            color: theme.palette.maskColor.warn,
            lineHeight: '18px'
        },
        progress: {
            color: theme.palette.maskColor.warn
        },
        linkIcon: {
            color: theme.palette.maskColor.second,
            cursor: 'pointer',
            height: 14
        }
    }));
const WalletDescription = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ onClick, providerIcon, networkIcon, iconFilterColor, name, address, formattedAddress, addressLink, onPendingClick, pending, verified })=>{
    const { classes } = useStyles();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        onClick: onClick,
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                size: 30,
                badgeSize: 12,
                mainIcon: providerIcon ?? networkIcon,
                badgeIcon: providerIcon ? networkIcon : undefined,
                iconFilterColor: iconFilterColor
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.walletName,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: name
                            }),
                            verified ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Verification, {
                                size: 18
                            }) : null,
                            onPendingClick ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.ArrowDrop, {}) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.address,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: formattedAddress
                            }),
                            address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .CopyButton */ .q, {
                                size: 14,
                                className: classes.linkIcon,
                                text: address
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                href: addressLink,
                                target: "_blank",
                                title: "View on Explorer",
                                rel: "noopener noreferrer",
                                onClick: (event)=>{
                                    event.stopPropagation();
                                },
                                className: classes.linkIcon,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.LinkOut, {
                                    size: 14,
                                    className: classes.linkIcon
                                })
                            }),
                            pending ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: classes.pending,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onPendingClick?.();
                                },
                                children: [
                                    t.recent_transaction_pending(),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_11__/* .LoadingBase */ .S, {
                                        size: 12,
                                        className: classes.progress
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
});


/***/ }),

/***/ 92935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useMenuConfig)
/* harmony export */ });
/* unused harmony export useMenu */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8737);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25877);




/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        menu: {
            // TODO: replace hard code to theme
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 4px 30px rgba(0, 0, 0, 0.1)'
        }
    }));
function useMenuConfig(elements, config, ref) {
    const { classes } = useStyles();
    const { anchorSibling = false, useShadowRoot = true, ...menuProps } = config;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootMenu */ .d : _mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...menuProps,
            PaperProps: menuProps?.PaperProps,
            classes: {
                paper: classes.menu,
                ...menuProps.classes
            },
            MenuListProps: menuProps?.MenuListProps,
            open,
            anchorEl,
            ref,
            onClose: close,
            onClick: close,
            anchorOrigin: menuProps?.anchorOrigin,
            transformOrigin: menuProps?.transformOrigin,
            disableScrollLock: true
        }, elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element)),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? element.nextElementSibling ?? undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
            setOpen(false);
            setAnchorEl(null);
        }, []),
        open
    ];
}


/***/ }),

/***/ 25877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ShadowRootMenu)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8737);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootMenu = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootMenu.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 60574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useRecentTransactions(pluginID, status) {
    const { Transaction } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const transactions = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Transaction?.transactions ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return (status ? transactions.filter((x)=>status === x.status) : transactions).map((x)=>({
                ...x,
                _tx: x.candidates[x.indexId]
            }));
    }, [
        status,
        transactions
    ]);
}


/***/ }),

/***/ 47642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIntersectionObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const DEFAULT_THRESHOLD = [0];
const DEFAULT_ROOT_MARGIN = '0px';
const observers = new Map();
const getObserverEntry = (options) => {
    const root = options.root ?? document;
    let rootObservers = observers.get(root);
    if (!rootObservers) {
        rootObservers = new Map();
        observers.set(root, rootObservers);
    }
    const opt = JSON.stringify([options.rootMargin, options.threshold]);
    let entry = rootObservers.get(opt);
    if (!entry) {
        const callbacks = new Map();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => callbacks.get(e.target)?.forEach((cb) => setTimeout(() => {
                cb(e);
            }, 0)));
        }, options);
        entry = {
            observer,
            observe(target, callback) {
                let cbs = callbacks.get(target);
                if (!cbs) {
                    // If target has no observers yet - register it
                    cbs = new Set();
                    callbacks.set(target, cbs);
                    observer.observe(target);
                }
                // As Set is duplicate-safe - simply add callback on each call
                cbs.add(callback);
            },
            unobserve(target, callback) {
                const cbs = callbacks.get(target);
                // Else branch should never occur in case of normal execution
                // because callbacks map is hidden in closure - it is impossible to
                // simulate situation with non-existent `cbs` Set
                /* istanbul ignore else */
                if (cbs) {
                    // Remove current observer
                    cbs.delete(callback);
                    if (!cbs.size) {
                        // If no observers left unregister target completely
                        callbacks.delete(target);
                        observer.unobserve(target);
                        // If not tracked elements left - disconnect observer
                        if (!callbacks.size) {
                            observer.disconnect();
                            rootObservers.delete(opt);
                            if (!rootObservers.size) {
                                observers.delete(root);
                            }
                        }
                    }
                }
            },
        };
        rootObservers.set(opt, entry);
    }
    return entry;
};
/**
 * Tracks intersection of a target element with an ancestor element or with a
 * top-level document's viewport.
 *
 * @param target React reference or Element to track.
 * @param options Like `IntersectionObserver` options but `root` can also be
 * react reference
 */
function useIntersectionObserver(target, { threshold = DEFAULT_THRESHOLD, root: r, rootMargin = DEFAULT_ROOT_MARGIN, } = {}) {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const tgt = target && 'current' in target ? target.current : target;
        if (!tgt)
            return;
        let subscribed = true;
        const observerEntry = getObserverEntry({
            root: r && 'current' in r ? r.current : r,
            rootMargin,
            threshold,
        });
        const handler = (entry) => {
            // It is reinsurance for the highly asynchronous invocations, almost
            // impossible to achieve in tests, thus excluding from LOC
            /* istanbul ignore else */
            if (subscribed) {
                setState(entry);
            }
        };
        observerEntry.observe(tgt, handler);
        return () => {
            subscribed = false;
            observerEntry.unobserve(tgt, handler);
        };
    }, [target, r, rootMargin, ...threshold]);
    return state;
}


/***/ }),

/***/ 72060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(48665);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 43284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(72060)();
}


/***/ }),

/***/ 48665:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 13177:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(43284),__webpack_require__(78996)):0}(this,function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),i=o(t);function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function a(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){s(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(null==e)return{};var o,n=function(e,t){if(null==e)return{};for(var o,n={},a=Object.keys(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o]);return n}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(r){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,o,n,a=h(r);return t=i?(e=h(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),o=this,!(n=t)||"object"!=typeof n&&"function"!=typeof n?d(o):n}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function v(a,r){return new Promise(function(e,t){var o,n=new Image;n.onload=function(){return e(n)},n.onerror=t,!1==(null!==(o=a)&&!!o.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&r&&(n.crossOrigin=r),n.src=a})}var b,w=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),M="undefined"!=typeof File,O={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},I=w?O.touch:O.desktop,P="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,C={x:.5,y:.5},x=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,i["default"].Component);var e,t,o,n=p(a);function a(e){var v;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s(d(v=n.call(this,e)),"state",{drag:!1,my:null,mx:null,image:C}),s(d(v),"handleImageReady",function(e){var t=v.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,t.backgroundColor=v.props.backgroundColor,v.setState({drag:!1,image:t},v.props.onImageReady),v.props.onLoadSuccess(t)}),s(d(v),"clearImage",function(){v.canvas.getContext("2d").clearRect(0,0,v.canvas.width,v.canvas.height),v.setState({image:C})}),s(d(v),"handleMouseDown",function(e){(e=e||window.event).preventDefault(),v.setState({drag:!0,mx:null,my:null})}),s(d(v),"handleMouseUp",function(){v.state.drag&&(v.setState({drag:!1}),v.props.onMouseUp())}),s(d(v),"handleMouseMove",function(e){var t,o,n,a,r,i,s,u,h,c,l,d,p,g,f,m;e=e||window.event,!1!==v.state.drag&&(e.preventDefault(),n={mx:t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:o=e.targetTouches?e.targetTouches[0].pageY:e.clientY},m=v.props.rotate,m=(m%=360)<0?m+360:m,v.state.mx&&v.state.my&&(a=v.state.mx-t,r=v.state.my-o,i=v.state.image.width*v.props.scale,s=v.state.image.height*v.props.scale,h=(u=v.getCroppingRect()).x,c=u.y,h*=i,c*=s,l=function(e){return e*(Math.PI/180)},d=Math.cos(l(m)),g=c+-a*(p=Math.sin(l(m)))+r*d,f={x:(h+a*d+r*p)/i+1/v.props.scale*v.getXScale()/2,y:g/s+1/v.props.scale*v.getYScale()/2},v.props.onPositionChange(f),n.image=y(y({},v.state.image),f)),v.setState(n),v.props.onMouseMove(e))}),s(d(v),"setCanvas",function(e){v.canvas=e}),v.canvas=null,v}return e=a,(t=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(P=1);var e,t,o=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(o),document&&(e=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}()&&{passive:!1},t=I.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),w&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===C||this.clearImage();var o=this.canvas.getContext("2d");o.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(o),this.paintImage(o,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=I.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),w&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,n=e.rotate,a=e.border,r={},i=m(this.getBorders(a),2),s=i[0],u=i[1],h=t,c=o;return this.isVertical()?(r.width=c,r.height=h):(r.width=h,r.height=c),r.width+=2*s,r.height+=2*u,{canvas:r,rotate:n,width:t,height:o,border:a}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var n=o.getContext("2d");return n.translate(o.width/2,o.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-o.width/2,-o.height/2),this.isVertical()&&n.translate((o.width-o.height)/2,(o.height-o.width)/2),t.backgroundColor&&(n.fillStyle=t.backgroundColor,n.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),n.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,n=document.createElement("canvas");return this.isVertical()?(n.width=o,n.height=t):(n.width=t,n.height=o),this.paintImage(n.getContext("2d"),this.state.image,0,1),n}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),n={x:e.x-t/2,y:e.y-o/2,width:t,height:o},a=0,r=1-n.width,i=0,s=1-n.height;return(this.props.disableBoundaryChecks||1<t||1<o)&&(a=-n.width,i=-n.height,s=r=1),y(y({},n),{},{x:Math.max(a,Math.min(n.x,r)),y:Math.max(i,Math.min(n.y,s))})}},{key:"loadImage",value:function(e){var t;M&&e instanceof File?this.loadingImage=(t=e,new Promise(function(o,n){var e=new FileReader;e.onload=function(e){try{var t=v(e.target.result);o(t)}catch(e){n(e)}},e.readAsDataURL(t)}).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof e&&(this.loadingImage=v(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var o,n,a=this.getDimensions();return t/e<a.height/a.width?n=e*((o=this.getDimensions().height)/t):o=t*((n=this.getDimensions().width)/e),{height:o,width:n}}},{key:"paintImage",value:function(e,t,o,n){var a,r=3<arguments.length&&void 0!==n?n:P;t.resource&&(a=this.calculatePosition(t,o),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(r,r),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,a.x,a.y,a.width,a.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(a.x,a.y,a.width,a.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=m(this.getBorders(t),2),n=o[0],a=o[1],r=this.getCroppingRect(),i=e.width*this.props.scale,s=e.height*this.props.scale,u=-r.x*i,h=-r.y*s;return this.isVertical()?(u+=a,h+=n):(u+=n,h+=a),{x:u,y:h,height:s,width:i}}},{key:"paint",value:function(e){e.save(),e.scale(P,P),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,o,n,a,r,i,s,u,h=this.props.borderRadius,c=this.getDimensions(),l=m(this.getBorders(c.border),2),d=l[0],p=l[1],g=c.canvas.height,f=c.canvas.width,h=Math.max(h,0);h=Math.min(h,f/2-d,g/2-p),e.beginPath(),t=e,a=f-2*(o=d),r=g-2*(n=p),0===(i=h)?t.rect(o,n,a,r):(s=a-i,u=r-i,t.translate(o,n),t.arc(i,i,i,Math.PI,1.5*Math.PI),t.lineTo(s,0),t.arc(s,i,i,1.5*Math.PI,2*Math.PI),t.lineTo(a,u),t.arc(s,u,i,2*Math.PI,.5*Math.PI),t.lineTo(i,r),t.arc(i,u,i,.5*Math.PI,Math.PI),t.translate(-o,-n)),e.rect(f,0,-f,g),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),o=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,l(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),n=this.getDimensions(),a={width:n.canvas.width,height:n.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},r={width:n.canvas.width*P,height:n.canvas.height*P,style:y(y({},a),t)};return r[I.react.down]=this.handleMouseDown,w&&(r[I.react.mouseDown]=this.handleMouseDown),i.default.createElement("canvas",u({ref:this.setCanvas},r,o))}}])&&r(e.prototype,t),o&&r(e,o),a}();return s(x,"propTypes",{scale:n.default.number,rotate:n.default.number,image:n.default.oneOfType([n.default.string].concat(function(e){if(Array.isArray(e))return f(e)}(b=M?[n.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(b)||g(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:n.default.oneOfType([n.default.number,n.default.arrayOf(n.default.number)]),borderRadius:n.default.number,width:n.default.number,height:n.default.number,position:n.default.shape({x:n.default.number,y:n.default.number}),color:n.default.arrayOf(n.default.number),backgroundColor:n.default.string,crossOrigin:n.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:n.default.func,onLoadSuccess:n.default.func,onImageReady:n.default.func,onImageChange:n.default.func,onMouseUp:n.default.func,onMouseMove:n.default.func,onPositionChange:n.default.func,disableBoundaryChecks:n.default.bool,disableHiDPIScaling:n.default.bool,disableCanvasRotation:n.default.bool}),s(x,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),x});


/***/ })

}]);
//# sourceMappingURL=chunk.3104.js.map