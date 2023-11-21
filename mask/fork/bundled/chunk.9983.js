"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9983],{

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $e: () => (/* binding */ attachProfile),
/* harmony export */   I1: () => (/* binding */ setPluginMinimalModeEnabled),
/* harmony export */   Id: () => (/* binding */ queryPersonaByProfile),
/* harmony export */   MN: () => (/* binding */ signWithPersona),
/* harmony export */   OX: () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   Tk: () => (/* binding */ queryPersonaAvatar),
/* harmony export */   Tt: () => (/* binding */ createPersona),
/* harmony export */   Vf: () => (/* binding */ hasPaymentPassword),
/* harmony export */   W1: () => (/* binding */ __setUIContext__),
/* harmony export */   Xm: () => (/* binding */ requestHostPermission),
/* harmony export */   ZV: () => (/* binding */ fetchJSON),
/* harmony export */   _c: () => (/* binding */ currentPersona),
/* harmony export */   d4: () => (/* binding */ allPersonas),
/* harmony export */   f8: () => (/* binding */ openDashboard),
/* harmony export */   il: () => (/* binding */ querySocialIdentity),
/* harmony export */   lU: () => (/* binding */ openPopupWindow),
/* harmony export */   yy: () => (/* binding */ hasHostPermission)
/* harmony export */ });
// This file will be virtualized in the future.
// Currently all plugins access the same value, but we can virtualize them in the future.
// DO NOT add <T> to this function, you do not test if it is T right?
// (e.g. receive a function to check it validate: (x: unknown) => x is T)
// fetchJSON<T>(validate: (x: unknown) => x is T, input: RequestInfo | URL, init?: RequestInit): Promise<T>
/** Open Dashboard with a new window */ /** Open popup window */ /** Sign a message with persona (w or w/o popups) */ let allPersonas;
let currentPersona;
let queryPersonaAvatar;
let querySocialIdentity;
let fetchJSON;
let queryPersonaByProfile;
let openDashboard;
let openPopupWindow;
let signWithPersona;
let hasPaymentPassword;
let createPersona;
let setCurrentPersonaIdentifier;
let attachProfile;
let setPluginMinimalModeEnabled;
let hasHostPermission;
let requestHostPermission;
function __setUIContext__(value) {
    ({ allPersonas, currentPersona, queryPersonaAvatar, querySocialIdentity, fetchJSON, queryPersonaByProfile, openDashboard, openPopupWindow, signWithPersona, hasPaymentPassword, createPersona, setCurrentPersonaIdentifier, attachProfile, setPluginMinimalModeEnabled, hasHostPermission, requestHostPermission } = value);
}


/***/ }),

/***/ 86766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d2: () => (/* binding */ useActivatedPluginExtensionPage),
/* harmony export */   fb: () => (/* binding */ useActivatedPluginsExtensionPage),
/* harmony export */   fn: () => (/* binding */ useIsMinimalModeExtensionPage),
/* harmony export */   rw: () => (/* binding */ startPluginHostExtensionPage)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85094);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93441);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84271);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70771);





const { activated, startDaemon, events, minimalMode } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.ExtensionPage, _manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m.NoManagedContext);
const activatedSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
events.on(_servie_events__WEBPACK_IMPORTED_MODULE_3__/* .ALL_EVENTS */ .Ko, ()=>activatedSub.value = [
        ...activated.plugins
    ]);
const minimalModeSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
events.on('minimalModeChanged', ()=>minimalModeSub.value = [
        ...minimalMode
    ]);
function useIsMinimalModeExtensionPage(pluginID) {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(minimalModeSub).includes(pluginID);
}
function useActivatedPluginsExtensionPage() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(activatedSub);
}
function useActivatedPluginExtensionPage(pluginID) {
    const plugins = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(activatedSub);
    return plugins.find((x)=>x.ID === pluginID);
}
function startPluginHostExtensionPage(host) {
    startDaemon(host);
}


/***/ }),

/***/ 94685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: () => (/* binding */ useIsMinimalMode),
/* harmony export */   JR: () => (/* binding */ useActivatedPluginsSiteAdaptor),
/* harmony export */   jJ: () => (/* binding */ startPluginSiteAdaptor),
/* harmony export */   o7: () => (/* binding */ useActivatedPluginSiteAdaptor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85094);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30898);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88547);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70771);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50754);
}







const { events, activated, startDaemon, minimalMode } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_2__/* .createManager */ .m)((def)=>def.SiteAdaptor, _manage_js__WEBPACK_IMPORTED_MODULE_2__/* .createManager */ .m.NoManagedContext);
const activatedSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
events.on('activateChanged', ()=>activatedSub.value = [
        ...activated.plugins
    ]);
const minimalModeSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
events.on('minimalModeChanged', ()=>minimalModeSub.value = [
        ...minimalMode
    ]);
function useActivatedPluginsSiteAdaptor(minimalModeEqualsTo) {
    const minimalMode = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub);
    const result = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(activatedSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) return result.filter((x)=>minimalMode.includes(x.ID));
        else if (minimalModeEqualsTo === false) return result.filter((x)=>!minimalMode.includes(x.ID));
        (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        result,
        minimalMode,
        minimalModeEqualsTo
    ]);
}
useActivatedPluginsSiteAdaptor.visibility = {
    useMinimalMode: useActivatedPluginsSiteAdaptor.bind(null, true),
    useNotMinimalMode: useActivatedPluginsSiteAdaptor.bind(null, false),
    useAnyMode: useActivatedPluginsSiteAdaptor.bind(null, 'any')
};
function useIsMinimalMode(pluginID) {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub).includes(pluginID);
}
/**
 *
 * @param pluginID Get the plugin ID
 * @param visibility Should invisible plugin included?
 * @returns
 */ function useActivatedPluginSiteAdaptor(pluginID, minimalModeEqualsTo) {
    const plugins = useActivatedPluginsSiteAdaptor(minimalModeEqualsTo);
    const minimalMode = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const result = plugins.find((x)=>x.ID === pluginID);
        if (!result) return result;
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) {
            if (minimalMode.includes(result.ID)) return result;
            return undefined;
        } else if (minimalModeEqualsTo === false) {
            if (minimalMode.includes(result.ID)) return undefined;
            return result;
        }
        (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        pluginID,
        plugins,
        minimalMode,
        minimalModeEqualsTo
    ]);
}
function startPluginSiteAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store_js__WEBPACK_IMPORTED_MODULE_6__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        const status = def.enableRequirement.supports.sites[currentNetwork];
        if (def.enableRequirement.supports.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.supports.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 78178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useCurrentVisitingIdentity)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8898);


function useCurrentVisitingIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .currentVisitingProfile */ .Yg);
}


/***/ }),

/***/ 58213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useLastRecognizedIdentity)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8898);



function useLastRecognizedIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .lastRecognizedProfile */ .Ns ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .UNDEFINED */ .i_);
}


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ getPluginMessage),
/* harmony export */   kO: () => (/* binding */ DOMAIN_RPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceImplementationOfCreatePluginMessage__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61530);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40464);


/** @internal */ const DOMAIN_RPC = Symbol('create RPC instead of normal message');
/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = getPluginMessage(PLUGIN_ID)
 */ let getPluginMessage = (pluginID, type)=>{
    const domain = (type === DOMAIN_RPC ? '@plugin-rpc/' : '@plugin/') + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .WebExtensionMessage */ .$({
        domain
    });
    const events = messageCenter.events;
    messageCenter.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .G;
    cache.set(domain, events);
    return events;
};
function __workaround__replaceImplementationOfCreatePluginMessage__(newImpl) {
    getPluginMessage = newImpl;
}
const cache = new Map() // TODO: this type should be defined here, not shared-base
;


/***/ }),

/***/ 83629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ AssetPreviewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _Image_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93301);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        fallbackImage: {
            height: 64,
            width: 64
        },
        icon: {
            position: 'absolute',
            top: theme.spacing(0.5),
            left: theme.spacing(0.5)
        }
    }));
function AssetPreviewer(props) {
    const { fallbackImage, url, icon } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                classes: {
                    fallbackImage: classes.fallbackImage,
                    container: classes.container
                },
                width: "100%",
                height: "100%",
                style: {
                    objectFit: 'cover'
                },
                src: url,
                fallback: fallbackImage
            }),
            icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.icon,
                children: icon
            }) : null
        ]
    });
}


/***/ }),

/***/ 93558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ FungibleTokenInput)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(30911);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/chipClasses.js
var chipClasses = __webpack_require__(57156);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/UI.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            height: 66,
            padding: theme.spacing(1.25, 1.5),
            [`& > .${inputBaseClasses/* default */.Z.input}`]: {
                paddingTop: `${theme.spacing(2.75)}!important`,
                paddingBottom: '0px !important',
                flex: 2,
                paddingLeft: '0px !important',
                fontSize: 14,
                fontWeight: 400
            }
        },
        title: {
            position: 'absolute',
            top: 10,
            left: 12
        },
        label: {
            fontSize: 13,
            lineHeight: '18px',
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        control: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            rowGap: 4,
            flex: 1
        },
        chip: {
            background: 'transparent',
            cursor: 'pointer',
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        tokenIcon: {
            width: 20,
            height: 20,
            marginRight: '0px !important'
        },
        selectToken: {
            backgroundColor: theme.palette.maskColor.primary,
            color: theme.palette.maskColor.white,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700,
            padding: theme.spacing(0.5, 1),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 99,
            cursor: 'pointer',
            ['&:hover']: {
                backgroundColor: (0,colorManipulator/* lighten */.$n)(theme.palette.maskColor.primary, 0.1)
            }
        },
        maxChip: {
            color: theme.palette.maskColor.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 18,
            padding: '0 3px',
            borderRadius: 4,
            fontSize: 10,
            marginLeft: 4,
            fontWeight: 700,
            lineHeight: '18px',
            cursor: 'pointer',
            background: theme.palette.maskColor.primary,
            '&:hover': {
                background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.8)
            },
            [`& > .${chipClasses/* default */.Z.label}`]: {
                padding: 0
            }
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700,
            marginLeft: 4
        },
        arrowIcon: {
            color: `${theme.palette.maskColor.second}!important`
        },
        chipLabel: {
            maxWidth: 150
        }
    }));
const FungibleTokenInputUI = /*#__PURE__*/ (0,react.memo)(({ label, isNative, token, onSelectToken, onMaxClick, balance, loadingBalance, disableMax = false, disableToken = false, disableBalance = false, ...props })=>{
    const { classes, cx } = useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        fullWidth: true,
        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: cx(classes.label, classes.title),
            children: label
        }),
        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.control,
            justifyContent: disableBalance ? 'flex-end' : undefined,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.label,
                    display: "flex",
                    alignItems: "center",
                    component: "div",
                    children: [
                        !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                isNative ? t.available_balance() : t.balance(),
                                ":",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    component: "span",
                                    children: token && !loadingBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                        value: balance,
                                        decimals: token?.decimals,
                                        significant: token?.decimals,
                                        formatter: formatBalance/* formatBalance */.a
                                    }) : '--'
                                })
                            ]
                        }) : null,
                        !disableMax ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            className: classes.maxChip,
                            label: "MAX",
                            size: "small",
                            onClick: onMaxClick
                        }) : null
                    ]
                }),
                !disableToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    columnGap: "12px",
                    children: token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            size: "small",
                            onClick: onSelectToken,
                            className: classes.chip,
                            classes: {
                                label: classes.chipLabel
                            },
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                className: classes.tokenIcon,
                                address: token.address,
                                name: token.name,
                                chainId: token.chainId,
                                logoURL: token.logoURL
                            }),
                            deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                className: classes.arrowIcon,
                                size: 24
                            }),
                            onDelete: onSelectToken,
                            label: token.symbol
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.selectToken,
                        onClick: onSelectToken,
                        children: [
                            t.select_a_token(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                size: 16
                            })
                        ]
                    })
                }) : null
            ]
        }),
        ...props,
        onChange: (ev)=>{
            if (ev.currentTarget.value && !new RegExp(props?.inputProps?.pattern).test(ev.currentTarget.value)) {
                return;
            }
            props.onChange?.(ev);
        },
        className: cx(classes.root, props.className)
    });
});
FungibleTokenInputUI.displayName = 'FungibleTokenInputUI';

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx







const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const FungibleTokenInput = /*#__PURE__*/ (0,react.memo)(({ label, token, disabled, disableMax, disableBalance, disableToken, loadingBalance, onSelectToken, onAmountChange, amount, maxAmount, balance, isAvailableBalance, placeholder = '0.0', maxAmountShares = 1, className })=>{
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const isNative = isAvailableBalance ?? Others.isNativeTokenAddress(token?.address);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT, RE_MATCH_FRACTION_AMOUNT } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token?.decimals}}$`)
        }), // d.ddd...d
    [
        token?.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replaceAll(',', '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInputUI, {
        label: label,
        isNative: isNative,
        token: token,
        onSelectToken: onSelectToken,
        value: amount,
        onChange: onChange,
        className: className,
        inputProps: {
            autoComplete: 'off',
            autoCorrect: 'off',
            title: 'Token Amount',
            inputMode: 'decimal',
            min: 0,
            minLength: MIN_AMOUNT_LENGTH,
            maxLength: MAX_AMOUNT_LENGTH,
            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek,
            spellCheck: false
        },
        placeholder: placeholder,
        onKeyDown: (ev)=>{
            if (ev.key === 'Enter') ev.preventDefault();
        },
        onMaxClick: ()=>{
            if (!token) return;
            const amount = new bignumber/* BigNumber */.O(maxAmount ?? balance).dividedBy(maxAmountShares).decimalPlaces(0, 1);
            const formattedBalance = (0,formatBalance/* formatBalance */.a)(amount, token.decimals, token.decimals, true, false, 4, false);
            onAmountChange(((0,number/* isZero */.Fr)(formattedBalance) ? new bignumber/* BigNumber */.O((0,number/* leftShift */.w5)(amount, token.decimals).toPrecision(2)).toFormat() : formattedBalance) ?? '0');
        },
        balance: balance,
        required: true,
        loadingBalance: loadingBalance,
        disabled: disabled,
        disableMax: disableMax,
        disableBalance: disableBalance,
        disableToken: disableToken
    });
});
FungibleTokenInput.displayName = 'FungibleTokenInput';


/***/ }),

/***/ 93301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43204);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { size, rounded }, refs)=>({
        optimistic: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container: {
            width: size ?? '100%',
            height: size ?? '100%',
            position: 'relative',
            borderRadius: rounded ? '50%' : undefined,
            overflow: rounded ? 'hidden' : undefined
        },
        image: {
            display: 'block'
        },
        failImage: {
            width: 30,
            height: 30
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        failed: {
            [`&.${refs.center}`]: {
                background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)' : 'linear-gradient(180deg, #202020 0%, #181818 100%)'
            }
        }
    }));
const MASK_DARK_FALLBACK = new URL(/* asset import */ __webpack_require__(44365), __webpack_require__.b).href;
const MASK_LIGHT_FALLBACK = new URL(/* asset import */ __webpack_require__(34656), __webpack_require__.b).href;
function Image({ fallback, size, rounded, disableSpinner, classes: extraClasses, onClick, containerProps, ...rest }) {
    const { classes, cx } = useStyles({
        size,
        rounded
    }, {
        props: {
            classes: extraClasses
        }
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (rest.src && !failed) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.optimistic, containerProps?.className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                className: classes.image,
                width: size,
                height: size,
                ...rest,
                src: rest.src,
                onError: ()=>setFailed(true)
            })
        });
    }
    if (fallback && !(fallback instanceof URL) && typeof fallback !== 'string') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
            children: fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...containerProps,
        className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            loading: "lazy",
            decoding: "async",
            width: size,
            height: size,
            ...rest,
            src: fallback?.toString() ?? (theme.palette.mode === 'dark' ? MASK_DARK_FALLBACK : MASK_LIGHT_FALLBACK),
            className: cx(classes.image, classes.failImage, classes.fallbackImage)
        })
    });
}


/***/ }),

/***/ 52478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ LoadingStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 400,
            marginTop: theme.spacing(1.5)
        }
    }));
const LoadingStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function LoadingStatus({ omitText, className, iconSize = 32, children, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .LoadingBase */ .S, {
                size: iconSize
            }),
            omitText ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.text,
                children: children ?? t.loading()
            })
        ]
    });
});


/***/ }),

/***/ 59312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17735);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82903);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3350);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98170);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81128);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16941);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22596);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65587);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60475);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _WalletIcon_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98748);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24770);










const NetworkTab = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NetworkTab({ chains, pluginID, onChange, requireChains, ...rest }) {
    const { pluginID: networkPluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkContext */ .gK)(pluginID);
    const { chainId, setChainId, setNetworkType } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const networks = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkDescriptors */ .p)(networkPluginID);
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .O)();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Others */ .v)();
    const { value: smartPaySupportChainId } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .SmartPayBundler */ .Pp.getSupportedChainId(), []);
    const supportedChains = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!wallet?.owner || requireChains) return chains;
        return chains.filter((x)=>x === smartPaySupportChainId);
    }, [
        smartPaySupportChainId,
        wallet,
        chains,
        requireChains
    ]);
    const usedNetworks = networks.filter((x)=>supportedChains.find((c)=>c === x.chainId));
    const networkIds = usedNetworks.map((x)=>x.chainId.toString());
    const isValidChainId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>chains.includes(chainId), [
        chains,
        chainId
    ]);
    const [tab, , , setTab] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_8__/* .useTabs */ .Y)(!isValidChainId ? networkIds[0] : chainId?.toString() ?? networkIds[0], ...networkIds);
    (0,react_use__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(()=>{
        setTab((prev)=>{
            if (isValidChainId && chainId && prev !== chainId?.toString()) return chainId.toString();
            return prev;
        });
        if (!isValidChainId) setChainId(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ChainId */ .a_.Mainnet);
    }, [
        chainId,
        isValidChainId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        value: tab,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .MaskTabList */ .C, {
            ...rest,
            variant: "flexible",
            onChange: (_, v)=>{
                const chainId = Number.parseInt(v, 10);
                const networkType = Others.chainResolver.networkType(chainId);
                setChainId?.(chainId);
                if (networkType) setNetworkType?.(networkType);
                onChange?.(chainId);
                setTab(v);
            },
            "aria-label": "Network Tabs",
            children: usedNetworks.map((x)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    "aria-label": x.name,
                    value: x.chainId.toString(),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletIcon_index_js__WEBPACK_IMPORTED_MODULE_15__/* .WalletIcon */ .o, {
                                mainIcon: x.icon,
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "body2",
                                fontSize: 14,
                                fontWeight: tab === x.chainId.toString() ? 700 : 400,
                                children: x.shortName ?? x.name
                            })
                        ]
                    })
                }, x.chainId);
            })
        })
    });
});


/***/ }),

/***/ 66390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ SelectGasSettingsToolbar)
/* harmony export */ });
/* unused harmony export SelectGasSettingsToolbarUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17735);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10149);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8772);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25127);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92935);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(22103);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(17903);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62649);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48245);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(95325);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41487);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49113);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23869);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51744);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(78130);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16281);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8311);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62322);
/* harmony import */ var _SettingsBoard_Context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(176);
/* harmony import */ var _hooks_useGasCurrencyMenu_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6569);















/** No effects on editMode */ /** Will open internal setting dialog instead if not provided */ const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme)=>{
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 99,
            width: 93,
            height: 26,
            cursor: 'pointer',
            justifyContent: 'center',
            marginLeft: 6
        },
        section: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '16px 0',
            '& > p': {
                fontSize: 14,
                lineHeight: '18px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center'
            }
        },
        gasSection: {
            display: 'flex',
            lineHeight: '18px',
            fontWeight: 700,
            alignItems: 'center'
        },
        text: {
            lineHeight: '18px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            marginRight: 5
        },
        menuItem: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0px 12px',
            padding: theme.spacing(1, 0),
            width: 158,
            '&:hover': {
                background: 'none'
            }
        },
        title: {
            fontWeight: 700
        },
        estimateGas: {
            color: theme.palette.text.third
        },
        menuItemBorder: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        gasUSDPrice: {
            fontWeight: 700,
            margin: '0px 4px'
        },
        edit: {
            lineHeight: '18px',
            color: theme.palette.maskColor.primary,
            marginRight: 4,
            fontWeight: 700,
            cursor: 'pointer'
        }
    };
});
const SelectGasSettingsToolbar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function SelectGasSettingsToolbar(props) {
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkContext */ .gK)(props.pluginID);
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)({
        chainId: props.chainId
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingsBoard_Context_js__WEBPACK_IMPORTED_MODULE_6__/* .SettingsContext */ .J.Provider, {
        initialState: {
            pluginID,
            chainId
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectGasSettingsToolbarUI, {
            ...props
        })
    });
});
function SelectGasSettingsToolbarUI({ gasConfig: gasOption, gasLimit, nativeToken, nativeTokenPrice, estimateGasFee, supportMultiCurrency, editMode, className, classes: externalClasses, onChange, onOpenCustomSetting, MenuProps = {} }) {
    const t = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props: {
            classes: externalClasses
        }
    });
    const { gasOptions, GAS_OPTION_NAMES } = _SettingsBoard_Context_js__WEBPACK_IMPORTED_MODULE_6__/* .SettingsContext */ .J.useContainer();
    const [approveDialogOpen, setApproveDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isCustomGas, setIsCustomGas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentGasOptionType, setCurrentGasOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gasOption?.gasOptionType && gasOption.gasOptionType !== _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .GasOptionType */ .Qd.CUSTOM ? gasOption.gasOptionType : _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .GasOptionType */ .Qd.NORMAL);
    const [currentGasCurrency, setCurrentGasCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gasOption?.gasCurrency);
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3Others */ .v)();
    const isSupportEIP1559 = Others.chainResolver.isFeatureSupported(chainId, 'EIP1559');
    const setGasConfigCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((maxFeePerGas, maxPriorityFeePerGas, gasPrice)=>onChange?.(isSupportEIP1559 ? {
            maxFeePerGas,
            maxPriorityFeePerGas,
            gasCurrency: currentGasCurrency,
            gas: new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(gasLimit).toString(),
            gasOptionType: isCustomGas ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .GasOptionType */ .Qd.CUSTOM : currentGasOptionType
        } : {
            gasPrice: new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(maxFeePerGas).gt(0) ? maxFeePerGas : gasPrice,
            gasCurrency: currentGasCurrency,
            gas: new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(gasLimit).toString(),
            gasOptionType: isCustomGas ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .GasOptionType */ .Qd.CUSTOM : currentGasOptionType
        }), [
        isSupportEIP1559,
        chainId,
        onChange,
        currentGasCurrency,
        gasLimit,
        currentGasOptionType,
        isCustomGas
    ]);
    const openCustomGasSettingsDialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setIsCustomGas(true);
        if (typeof onOpenCustomSetting === 'function') {
            onOpenCustomSetting();
            return;
        }
        const { settings } = await _masknet_shared__WEBPACK_IMPORTED_MODULE_10__/* .SelectGasSettingsModal */ .eq.openAndWaitForClose({
            chainId,
            disableGasLimit: true,
            disableSlippageTolerance: true,
            transaction: gasOption
        });
        if (!settings?.transaction) return;
        setGasConfigCallback((settings?.transaction).maxFeePerGas, (settings?.transaction).maxPriorityFeePerGas, (settings?.transaction).gasPrice);
    }, [
        chainId,
        gasOption,
        setGasConfigCallback,
        onOpenCustomSetting
    ]);
    const currentGasOption = gasOptions?.[currentGasOptionType];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!currentGasOption || isCustomGas) return;
        setGasConfigCallback(currentGasOption.suggestedMaxFeePerGas, currentGasOption.suggestedMaxPriorityFeePerGas, currentGasOption.suggestedMaxPriorityFeePerGas);
    }, [
        currentGasOption,
        isCustomGas,
        setGasConfigCallback
    ]);
    const { value: currencyRatio } = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(async ()=>{
        const chainId = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .SmartPayBundler */ .Pp.getSupportedChainId();
        const depositPaymaster = new _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .DepositPaymaster */ .hv(chainId);
        const ratio = await depositPaymaster.getRatio();
        return ratio;
    }, []);
    const [menu, openMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_12__/* .useMenuConfig */ ._)(Object.entries(gasOptions ?? {}).reverse().map(([type, { suggestedMaxFeePerGas, estimatedBaseFee }])=>{
        const gas = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .formatGas */ .Lt)((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .isZero */ .Fr)(suggestedMaxFeePerGas) ? estimatedBaseFee : suggestedMaxFeePerGas);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            className: cx(classes.menuItem, classes.menuItemBorder),
            onClick: ()=>{
                setIsCustomGas(false);
                setCurrentGasOptionType(type);
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.title,
                    children: GAS_OPTION_NAMES[type]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.estimateGas,
                    children: gas
                })
            ]
        }, type);
    }).concat(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        className: cx(classes.menuItem),
        onClick: openCustomGasSettingsDialog,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            className: classes.title,
            children: t.gas_settings_custom()
        })
    }, "setting")), {
        ...MenuProps,
        anchorSibling: false,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
            ...MenuProps.anchorOrigin
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
            ...MenuProps.transformOrigin
        },
        PaperProps: {
            ...MenuProps.PaperProps,
            style: {
                background: theme.palette.maskColor.bottom,
                transform: 'translateY(8px)',
                ...MenuProps.PaperProps?.style
            }
        }
    });
    const [currencyMenu, openCurrencyMenu] = (0,_hooks_useGasCurrencyMenu_js__WEBPACK_IMPORTED_MODULE_17__/* .useGasCurrencyMenu */ .m)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_18__/* .NetworkPluginID */ .F.PLUGIN_EVM, (address)=>setCurrentGasCurrency(address), currentGasCurrency, ()=>setApproveDialogOpen(true));
    const { data: currencyToken = nativeToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_19__/* .useFungibleToken */ .c)(undefined, currentGasCurrency, nativeToken, {
        chainId
    });
    const { data: currencyTokenPrice } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_20__/* .useFungibleTokenPrice */ .O)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_18__/* .NetworkPluginID */ .F.PLUGIN_EVM, currentGasCurrency);
    const gasFee = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!gasOption || !gasLimit) return _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .ZERO */ .xE;
        const result = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__/* .GasEditor */ .e.fromConfig(chainId, gasOption).getGasFee(gasLimit);
        if (!currentGasCurrency || (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .isSameAddress */ .W)(nativeToken?.address, currentGasCurrency)) {
            return result;
        }
        if (!currencyRatio) return _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .ZERO */ .xE;
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .toFixed */ .FH)(result.multipliedBy(currencyRatio), 0));
    }, [
        gasLimit,
        gasOption,
        currencyRatio,
        currentGasCurrency,
        nativeToken
    ]);
    const gasFeeUSD = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!gasFee || gasFee.isZero()) return '$0';
        if (!currentGasCurrency || (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .isSameAddress */ .W)(nativeToken?.address, currentGasCurrency)) {
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_23__/* .formatCurrency */ .x)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .formatWeiToEther */ .yp)(gasFee).times(nativeTokenPrice), 'USD', {
                onlyRemainTwoOrZeroDecimal: true
            });
        }
        if (!currencyToken || !currencyTokenPrice) return '$0';
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_23__/* .formatCurrency */ .x)(new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_24__/* .formatBalance */ .a)(gasFee, currencyToken?.decimals)).times(currencyTokenPrice), 'USD', {
            onlyRemainTwoOrZeroDecimal: true
        });
    }, [
        gasFee,
        nativeTokenPrice,
        currencyTokenPrice,
        nativeToken?.address,
        currentGasCurrency,
        currencyToken?.decimals
    ]);
    if (!gasOptions || (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .isZero */ .Fr)(gasFee)) return null;
    if (editMode) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t.gas_settings_label_transaction_cost()
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            component: "span",
                            className: classes.edit,
                            onClick: openCustomGasSettingsDialog,
                            children: t.edit()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_26__/* .FormattedBalance */ .B, {
                            value: gasFee ?? estimateGasFee,
                            decimals: nativeToken?.decimals,
                            symbol: nativeToken?.symbol,
                            formatter: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_24__/* .formatBalance */ .a,
                            significant: 3
                        }),
                        "(",
                        gasFeeUSD,
                        ")"
                    ]
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        className: cx(classes.section, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                className: cx(classes.label, classes.label),
                children: t.gas_settings_label_gas_fee()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                className: classes.gasSection,
                component: "div",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_26__/* .FormattedBalance */ .B, {
                        value: gasFee,
                        decimals: currencyToken?.decimals ?? 0,
                        significant: 4,
                        symbol: currencyToken?.symbol,
                        formatter: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_24__/* .formatBalance */ .a
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: classes.gasUSDPrice,
                        children: t.gas_usd_price({
                            usd: gasFeeUSD
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.root,
                        onClick: gasOptions ? openMenu : undefined,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                className: classes.text,
                                children: isCustomGas ? t.gas_settings_custom() : GAS_OPTION_NAMES[currentGasOptionType]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_28__.Candle, {
                                width: 12,
                                height: 12
                            })
                        ]
                    }),
                    supportMultiCurrency ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_28__.ArrowDrop, {
                        onClick: openCurrencyMenu
                    }) : null,
                    menu,
                    supportMultiCurrency ? currencyMenu : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_29__/* .ApproveMaskDialog */ .Y, {
                open: approveDialogOpen,
                handleClose: ()=>setApproveDialogOpen(false)
            })
        ]
    });
}


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ SettingsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54225);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98705);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42938);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14821);






const DEFAULT_SLIPPAGE_TOLERANCE = 0.5;
const DEFAULT_SLIPPAGE_TOLERANCES = [
    0.5,
    1,
    2,
    5
];
const IN_MEMORY_CACHE = {
    lastSelectedGasOptionType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL,
    lastSelectedGasSettingsType: _types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .GasSettingsType */ .g.Basic
};
function useSettingsContext(initial) {
    const t = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkContext */ .gK)(initial?.pluginID);
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useChainContext */ .ql)({
        chainId: initial?.chainId
    });
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3Others */ .v)(pluginID);
    const [transactionOptions, setTransactionOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial?.transaction);
    const [slippageTolerance, setSlippageTolerance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial?.slippageTolerance ?? DEFAULT_SLIPPAGE_TOLERANCE);
    const networkSignature = `${pluginID}_${chainId}`;
    const transactionSignature = Others.getTransactionSignature(chainId, transactionOptions) ?? '';
    const needToResetByNetwork = !!IN_MEMORY_CACHE?.lastNetworkSignature && IN_MEMORY_CACHE.lastNetworkSignature !== networkSignature;
    const needToResetByTransaction = !!IN_MEMORY_CACHE?.lastTransactionSignature && IN_MEMORY_CACHE.lastTransactionSignature !== transactionSignature;
    const [gasSettingsType, setGasSettingsType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(needToResetByNetwork || needToResetByTransaction ? _types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .GasSettingsType */ .g.Basic : IN_MEMORY_CACHE.lastSelectedGasSettingsType);
    const [gasOptionType, setGasOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(needToResetByNetwork || needToResetByTransaction ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL : IN_MEMORY_CACHE.lastSelectedGasOptionType);
    const { data: gasOptions, isLoading: gasOptionsLoading, error: gasOptionsError, refetch: gasOptionRetry } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useGasOptions */ .o)(pluginID, {
        chainId
    });
    const onClearInMemoryCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        delete IN_MEMORY_CACHE.lastNetworkSignature;
        delete IN_MEMORY_CACHE.lastTransactionSignature;
        IN_MEMORY_CACHE.lastSelectedGasOptionType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL;
        IN_MEMORY_CACHE.lastSelectedGasSettingsType = _types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .GasSettingsType */ .g.Basic;
    }, []);
    const onResetAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setSlippageTolerance(1);
        setGasOptionType(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL);
        setTransactionOptions(undefined);
        gasOptionRetry();
        onClearInMemoryCache();
    }, [
        gasOptionRetry,
        onClearInMemoryCache
    ]);
    (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useSingleBlockBeatRetry */ .gm)(pluginID, async ()=>{
        if (initial?.disableGasPrice) return;
        gasOptionRetry();
    });
    // sync in-memory cache
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        IN_MEMORY_CACHE.lastNetworkSignature = networkSignature;
        IN_MEMORY_CACHE.lastTransactionSignature = transactionSignature;
        IN_MEMORY_CACHE.lastSelectedGasOptionType = gasOptionType;
        IN_MEMORY_CACHE.lastSelectedGasSettingsType = gasSettingsType;
    }, [
        gasOptionType,
        gasSettingsType,
        networkSignature,
        transactionSignature
    ]);
    return {
        DEFAULT_SLIPPAGE_TOLERANCE,
        DEFAULT_SLIPPAGE_TOLERANCES,
        GAS_OPTION_NAMES: {
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.FAST]: t.gas_settings_gas_option_type_fast(),
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL]: t.gas_settings_gas_option_type_normal(),
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.SLOW]: t.gas_settings_gas_option_type_slow(),
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.CUSTOM]: ''
        },
        pluginID,
        chainId,
        transaction: initial?.transaction,
        transactionOptions,
        setTransactionOptions,
        slippageTolerance,
        setSlippageTolerance,
        gasOptionType,
        setGasOptionType,
        gasSettingsType,
        setGasSettingsType,
        gasOptions,
        gasOptionsLoading,
        gasOptionsError,
        gasOptionRetry,
        resetAll: onResetAll
    };
}
const SettingsContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_8__/* .createContainer */ .f)(useSettingsContext);


/***/ }),

/***/ 14821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ GasSettingsType)
/* harmony export */ });
var GasSettingsType;
(function(GasSettingsType) {
    GasSettingsType["Basic"] = "Basic";
    GasSettingsType["Advanced"] = "Advanced";
})(GasSettingsType || (GasSettingsType = {}));


/***/ }),

/***/ 44888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ TokenValue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10149);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16281);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95621);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48245);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme, _, ref)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        token: {
            display: 'flex',
            alignItems: 'center',
            [`& .${ref.tokenIcon}`]: {
                marginLeft: theme.spacing(0.5)
            }
        },
        tokenIcon: {},
        amount: {
            color: theme.palette.maskColor.main,
            fontSize: '24px',
            fontWeight: 700
        },
        price: {
            color: theme.palette.maskColor.third,
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px'
        }
    }));
function TokenValue({ className, token, amount, ...rest }) {
    const { classes, cx } = useStyles();
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkContext */ .gK)();
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useChainContext */ .ql)();
    const { data: tokenPrice = 0 } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useFungibleTokenPrice */ .O)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_EVM, token?.address, {
        chainId
    });
    const priceUSD = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!tokenPrice || !amount) return;
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .formatCurrency */ .x)(new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(amount).times(tokenPrice), 'USD', {
            onlyRemainTwoOrZeroDecimal: true
        });
    }, [
        amount,
        tokenPrice
    ]);
    return amount && token ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: cx(classes.container, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.token,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.amount,
                        component: "strong",
                        fontWeight: "700",
                        fontSize: "24px",
                        children: amount
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .TokenIcon */ .T, {
                        size: 24,
                        className: classes.tokenIcon,
                        pluginID: pluginID,
                        chainId: chainId,
                        name: token.name,
                        address: token.address,
                        logoURL: token.logoURL
                    })
                ]
            }),
            priceUSD ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.price,
                children: `\u2248 ${priceUSD ?? '0'}`
            }) : null
        ]
    }) : null;
}


/***/ }),

/***/ 17903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ ApproveMaskDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10149);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90097);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26909);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13414);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33026);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82161);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51527);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(837);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99979);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46906);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6764);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        paper: {
            margin: 0,
            maxWidth: 320,
            background: theme.palette.maskColor.bottom
        },
        title: {
            textAlign: 'center',
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        description: {
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        actions: {
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(3),
            rowGap: theme.spacing(2)
        }
    }));
const ApproveMaskDialog = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ open, handleClose })=>{
    const sharedI18N = (0,_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    const { classes } = useStyles();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3Others */ .v)();
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkContext */ .gK)();
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useChainContext */ .ql)();
    const maskAddress = Others.getMaskTokenAddress(chainId);
    const { data: maskToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useFungibleToken */ .c)(pluginID, maskAddress);
    const { PAYMASTER_MASK_CONTRACT_ADDRESS } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .useSmartPayConstants */ .Fd)(chainId);
    const [{ type: approveStateType }, transactionState, approveCallback] = (0,_masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .useERC20TokenApproveCallback */ .S)(maskAddress ?? '', maskToken ? (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .toFixed */ .FH)(new bignumber_js__WEBPACK_IMPORTED_MODULE_1__/* .BigNumber */ .O(amount).shiftedBy(maskToken.decimals ?? 0).integerValue()) : '', PAYMASTER_MASK_CONTRACT_ADDRESS ?? '', lodash_es__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, chainId);
    const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (approveStateType !== _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .ApproveStateType */ .i.NOT_APPROVED) return;
        await approveCallback(true);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    const action = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (approveStateType === _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .ApproveStateType */ .i.UNKNOWN) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ActionButton */ .K, {
                fullWidth: true,
                variant: "roundedContained",
                disabled: true,
                children: sharedI18N.wallet_transfer_error_amount_absence()
            });
        }
        if (approveStateType === _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .ApproveStateType */ .i.FAILED) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ActionButton */ .K, {
                fullWidth: true,
                variant: "roundedContained",
                color: "error",
                children: sharedI18N.wallet_load_retry({
                    symbol: 'MASK'
                })
            });
        }
        if (approveStateType === _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .ApproveStateType */ .i.NOT_APPROVED || transactionState.loading || approveStateType === _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .ApproveStateType */ .i.UPDATING) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ActionButton */ .K, {
                loading: transactionState.loading || approveStateType === _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_9__/* .ApproveStateType */ .i.UPDATING,
                fullWidth: true,
                variant: "roundedContained",
                onClick: onApprove,
                children: sharedI18N.dialog_confirm()
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ActionButton */ .K, {
            fullWidth: true,
            variant: "roundedContained",
            disabled: true,
            children: sharedI18N.dialog_confirm()
        });
    }, [
        approveStateType,
        approveCallback,
        sharedI18N,
        transactionState,
        onApprove
    ]);
    return (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_13__/* .usePortalShadowRoot */ .ad)((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            container: container,
            open: open,
            onClose: handleClose,
            classes: {
                paper: classes.paper
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    sx: {
                        py: 3
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: classes.title,
                        children: sharedI18N.approve_mask()
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            className: classes.description,
                            children: sharedI18N.approve_mask_description()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            className: classes.description,
                            marginTop: 2,
                            children: sharedI18N.approve_mask_question()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
                            sx: {
                                mt: 3
                            },
                            fullWidth: true,
                            value: amount,
                            onChange: (event)=>setAmount(event.target.value),
                            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                display: "flex",
                                alignItems: "center",
                                columnGap: 1,
                                fontSize: 15,
                                lineHeight: "20px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_19__.MaskBlue, {
                                        size: 20
                                    }),
                                    " MASK"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    className: classes.actions,
                    children: [
                        action,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            fullWidth: true,
                            variant: "roundedOutlined",
                            onClick: handleClose,
                            children: sharedI18N.cancel()
                        })
                    ]
                })
            ]
        }));
});


/***/ }),

/***/ 24500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ RadioIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);



const RadioIndicator = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function RadioIndicator({ checked, unCheckedButtonColor, checkedButtonColor, ...rest }) {
    return checked ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.RadioButtonChecked, {
        ...rest,
        color: checkedButtonColor
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.RadioButtonUnChecked, {
        ...rest,
        color: unCheckedButtonColor
    });
});


/***/ }),

/***/ 42938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xg: () => (/* binding */ useCustomBlockBeatRetry),
/* harmony export */   gm: () => (/* binding */ useSingleBlockBeatRetry)
/* harmony export */ });
/* unused harmony exports useBeat, useBeatRetry, useDoubleBlockBeatRetry */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99732);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81128);




const DEFAULT_SINGLE_BLOCK_DELAY = 10 * 1000;
// 10 seconds
const DEFAULT_DOUBLE_BLOCK_DELAY = DEFAULT_SINGLE_BLOCK_DELAY * 2;
function useBeat(delay = 1000) {
    const [beat, setBeat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [, , reset] = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(()=>{
        setBeat((x)=>(x + 1) % Number.MAX_SAFE_INTEGER);
        reset();
    }, delay);
    return beat;
}
/**
 * @deprecated Use react-query with refetchInterval
 */ function useBeatRetry(fn, delay = 1000, deps = []) {
    const beat = useBeat(delay);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(fn, deps.concat(beat));
}
function useSingleBlockBeatRetry(pluginID, fn, deps = []) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3Others */ .v)(pluginID);
    return useBeatRetry(fn, Others.getAverageBlockDelay?.(chainId) ?? DEFAULT_SINGLE_BLOCK_DELAY, deps);
}
function useDoubleBlockBeatRetry(pluginID, fn, deps = []) {
    const { chainId } = useChainContext();
    const Others = useWeb3Others(pluginID);
    return useBeatRetry(fn, Others.getAverageBlockDelay?.(chainId, 2) ?? DEFAULT_DOUBLE_BLOCK_DELAY, deps);
}
function useCustomBlockBeatRetry(pluginID, fn, deps = [], scale = 1) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3Others */ .v)(pluginID);
    return useBeatRetry(fn, Others.getAverageBlockDelay?.(chainId, scale) ?? DEFAULT_DOUBLE_BLOCK_DELAY, deps);
}


/***/ }),

/***/ 16281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useFungibleTokenPrice)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useFungibleTokenPrice(pluginID, address, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        enabled: !!chainId && !!address,
        queryKey: [
            'fungible',
            'token-price',
            pluginID,
            chainId,
            address,
            options
        ],
        queryFn: async ()=>{
            return Hub.getFungibleTokenPrice(chainId, address.toLowerCase());
        }
    });
}


/***/ }),

/***/ 24637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useNativeToken)
/* harmony export */ });
/* harmony import */ var _useFungibleToken_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54246);
/* harmony import */ var _useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34093);


function useNativeToken(pluginID, options) {
    const nativeTokenAddress = (0,_useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .useNativeTokenAddress */ .Z)(pluginID, options);
    return (0,_useFungibleToken_js__WEBPACK_IMPORTED_MODULE_1__/* .useFungibleToken */ .c)(pluginID, nativeTokenAddress, undefined, options);
}


/***/ }),

/***/ 34093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useNativeTokenAddress)
/* harmony export */ });
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);
/* harmony import */ var _useNetwork_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70858);


function useNativeTokenAddress(pluginID, options) {
    const network = (0,_useNetwork_js__WEBPACK_IMPORTED_MODULE_0__/* .useNetwork */ .L)(pluginID);
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    if (network?.isCustomized) {
        return network.nativeCurrency.address;
    }
    return Others.getNativeTokenAddress(options?.chainId);
}


/***/ }),

/***/ 70858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNetwork)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72889);





function useNetwork(pluginID, chainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_3__/* .useNetworks */ .e)(pluginID);
    const networkID = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networkID ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_STRING */ .v6);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (chainId) return networks.find((x)=>x.chainId === chainId);
        return networks.find((x)=>x.ID === networkID);
    }, [
        chainId,
        networkID,
        networks
    ]);
}


/***/ }),

/***/ 48245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ formatCurrency)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29763);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);



const BOUNDARIES = {
    zeroDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, 0),
    twoDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -2),
    sixDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -6),
    eightDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -8),
    twelveDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -12),
    zeroDecimalExp: 0,
    twoDecimalExp: 2,
    sixDecimalExp: 6,
    eightDecimalExp: 8,
    twelveDecimalExp: 12
};
const DIGITAL_CURRENCY_SYMBOLS = {
    BTC: '\u20BF',
    ETH: '\u039E',
    SOL: '\u25CE',
    BNB: 'BNB',
    POLYGON: 'MATIC',
    WETH: 'WETH',
    AVAX: 'AVAX',
    GLMR: 'GLMR',
    MATIC: 'MATIC'
};
const digitalCurrencyModifier = (parts, symbol, isDigitalCurrency)=>{
    if (!isDigitalCurrency) return parts;
    const [currencyPart, ...rest] = parts;
    if (symbol) return [
        ...rest,
        {
            ...currencyPart,
            value: symbol
        }
    ];
    return parts;
};
const formatCurrencySymbol = (symbol, isLead)=>{
    return isLead || symbol.length === 0 ? symbol : ` ${symbol}`;
};
const fiatCurrencyResultModifier = (result, currency = _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD, onlyRemainTwoOrZeroDecimal)=>{
    if (currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.HKD) return result.replaceAll('$', 'HK$');
    if (currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY && onlyRemainTwoOrZeroDecimal) return result.startsWith('¥') ? '¥' + Number(result.replaceAll(/¥|,/g, '')).toFixed() : result;
    return result;
};
// https://mask.atlassian.net/wiki/spaces/MASK/pages/122916438/Token
function formatCurrency(inputValue, currency = _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD, options) {
    const { onlyRemainTwoOrZeroDecimal = false, fiatCurrencyRate = 1, customDecimalConfig } = options ?? {};
    const bn = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(inputValue).multipliedBy(fiatCurrencyRate);
    const integerValue = bn.integerValue(1);
    const decimalValue = bn.plus(integerValue.negated());
    const isMoreThanOrEqualToOne = bn.isGreaterThanOrEqualTo(1);
    const { sixDecimalBoundary, zeroDecimalBoundary, twoDecimalBoundary, twelveDecimalBoundary, eightDecimalBoundary, zeroDecimalExp, sixDecimalExp, twoDecimalExp, twelveDecimalExp } = BOUNDARIES;
    const assetValueBoundary = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? zeroDecimalBoundary : twoDecimalBoundary;
    const assetValueDecimalExp = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? zeroDecimalExp : twoDecimalExp;
    const zeroValue = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? '0' : '0.00';
    const minimumValue = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? '1' : '0.01';
    const symbol = currency ? DIGITAL_CURRENCY_SYMBOLS[currency.toUpperCase()] : '';
    let formatter;
    let isIntlCurrencyValid = !DIGITAL_CURRENCY_SYMBOLS[currency.toUpperCase()];
    try {
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: isIntlCurrencyValid ? currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.CNY : currency : 'USD',
            currencyDisplay: 'narrowSymbol'
        });
    } catch  {
        isIntlCurrencyValid = false;
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol'
        });
    }
    const isDigitalCurrency = !!(!isIntlCurrencyValid && symbol);
    const digitalCurrencyModifierValues = digitalCurrencyModifier(formatter.formatToParts(bn.isZero() ? 0 : bn.lt(sixDecimalBoundary) ? sixDecimalBoundary.toNumber() : bn.toNumber()), symbol, isDigitalCurrency);
    let result = '';
    if (bn.lt(customDecimalConfig?.boundary ?? onlyRemainTwoOrZeroDecimal ? assetValueBoundary : sixDecimalBoundary) || bn.isZero()) {
        const isLessThanAssetValueDecimalBoundary = bn.lt(assetValueBoundary);
        const isLessThanTwelveDecimalBoundary = bn.lt(twelveDecimalBoundary);
        const isLessThanCustomDecimalBoundary = customDecimalConfig?.boundary ? bn.lt(customDecimalConfig?.boundary) : false;
        const isGreatThanEightDecimalBoundary = bn.gte(eightDecimalBoundary);
        const value = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'fraction':
                    if (customDecimalConfig) {
                        return bn.isZero() ? zeroValue : isLessThanCustomDecimalBoundary ? customDecimalConfig.boundary.toFixed() : bn.toFixed(customDecimalConfig.decimalExp).replace(/0+$/, '');
                    }
                    return bn.isZero() ? zeroValue : onlyRemainTwoOrZeroDecimal ? minimumValue : isLessThanTwelveDecimalBoundary ? sixDecimalBoundary.toFixed() : isGreatThanEightDecimalBoundary ? bn.decimalPlaces(10).toFixed(twelveDecimalExp).replace(/0+$/, '') : bn.toFixed(twelveDecimalExp).replace(/0+$/, '');
                default:
                    return '';
            }
        }).join('');
        result = `${(isLessThanTwelveDecimalBoundary || onlyRemainTwoOrZeroDecimal && isLessThanAssetValueDecimalBoundary) && !bn.isZero() ? '< ' : ''}${value}`;
    } else if (isMoreThanOrEqualToOne) {
        result = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'literal':
                    return '';
                default:
                    return value;
            }
        }).join('');
    } else {
        result = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'fraction':
                    const dec = decimalValue.toFormat(customDecimalConfig?.decimalExp ?? (onlyRemainTwoOrZeroDecimal ? assetValueDecimalExp : sixDecimalExp)).replace(/\d\./, '');
                    return onlyRemainTwoOrZeroDecimal ? dec.replace(/(\d\d)(0+)$/, '$1') : dec.replace(/(0+)$/, '');
                case 'integer':
                    // When there is a carry
                    if (bn.gt('0.99') && onlyRemainTwoOrZeroDecimal) return '1';
                    return '0';
                case 'literal':
                    return '';
                default:
                    return value;
            }
        }).join('');
    }
    return fiatCurrencyResultModifier(result, currency, onlyRemainTwoOrZeroDecimal);
}


/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createContainer),
/* harmony export */   u: () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.9983.js.map