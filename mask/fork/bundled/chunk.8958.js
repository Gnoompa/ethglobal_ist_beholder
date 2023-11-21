(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8958],{

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 94685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ share),
/* harmony export */   EE: () => (/* binding */ __setSiteAdaptorContext__),
/* harmony export */   Ge: () => (/* binding */ getPostIdFromNewPostToast),
/* harmony export */   Ns: () => (/* binding */ lastRecognizedProfile),
/* harmony export */   P4: () => (/* binding */ getPostURL),
/* harmony export */   XD: () => (/* binding */ connectPersona),
/* harmony export */   Yg: () => (/* binding */ currentVisitingProfile),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   m$: () => (/* binding */ currentNextIDPlatform),
/* harmony export */   mO: () => (/* binding */ getUserIdentity),
/* harmony export */   oi: () => (/* binding */ postMessage)
/* harmony export */ });
/* unused harmony export getSearchedKeyword */
// This file will be virtualized in the future.
// Currently all plugins access the same value, but we can virtualize them in the future.
let lastRecognizedProfile;
let currentVisitingProfile;
let currentNextIDPlatform;
let currentPersonaIdentifier;
let getPostURL;
let share;
let getUserIdentity;
let getPostIdFromNewPostToast;
let postMessage;
let getSearchedKeyword;
let connectPersona;
function __setSiteAdaptorContext__(value) {
    ({ lastRecognizedProfile, currentVisitingProfile, currentNextIDPlatform, currentPersonaIdentifier, getPostURL, share, getUserIdentity, getPostIdFromNewPostToast, postMessage, getSearchedKeyword, connectPersona } = value);
}


/***/ }),

/***/ 81178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useAllPersonas)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49588);


function useAllPersonas() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_dom_context_js__WEBPACK_IMPORTED_MODULE_1__/* .allPersonas */ .d4);
}


/***/ }),

/***/ 78178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 18512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/plugins/NextID/src/base.ts + 7 modules
var base = __webpack_require__(26509);
// EXTERNAL MODULE: ./packages/plugins/NextID/src/constants.ts
var constants = __webpack_require__(66060);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingIdentity.ts
var useCurrentVisitingIdentity = __webpack_require__(78178);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useAllPersonas.ts
var useAllPersonas = __webpack_require__(81178);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentPersonaConnectStatus.ts
var useCurrentPersonaConnectStatus = __webpack_require__(54928);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaProofs.ts
var usePersonaProofs = __webpack_require__(19717);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var src_constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PluginCardFrame/index.tsx
var PluginCardFrame = __webpack_require__(21766);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PluginEnableBoundary/index.tsx
var PluginEnableBoundary = __webpack_require__(52623);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var shared_base_src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(37603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Done.js
var Done = __webpack_require__(36447);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
;// CONCATENATED MODULE: ./packages/plugins/NextID/src/locales/i18n_generated.ts
// @ts-nocheck
/* eslint-disable */ 

function createProxy(initValue) {
    function define(key) {
        const value = initValue(key);
        Object.defineProperty(container, key, {
            value,
            configurable: true
        });
        return value;
    }
    const container = {
        __proto__: new Proxy({
            __proto__: null
        }, {
            get (_, key) {
                if (typeof key === "symbol") return undefined;
                return define(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, v)=>v === null,
        getOwnPropertyDescriptor: (_, key)=>{
            if (typeof key === "symbol") return undefined;
            if (!(key in container)) define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
function useNextID_Trans() /**
      * `Wallet`
      */ /**
      * `Persona`
      */ /**
      * `Unsupported Network`
      */ /**
      * `Wallets not found.`
      */ /**
      * `1. Switch to the user’s tweets page and back.`
      */ /**
      * `2. Invite the user to install the Mask extension and post a verification tweet.`
      */ /**
      * `The user might have not connected wallets yet. You can try as following:`
      */ /**
      * `In this Web3 section, you can show your address for receiving tips, your NFT collection, donation records, and other on-chain information to friends who have installed Mask Network.`
      */ /**
      * `Verify your wallet here.`
      */ /**
      * `In the Web3 tab, you can show your wallet addresses for receiving tips, NFT collections, donation records, and other on-chain feeds to friends who have also installed the Mask extension.`
      */ /**
      * `Verify your Twitter ID here.`
      */ /**
      * `You can verify your Twitter ID with Next.ID to enhance your Web3 experience.`
      */ /**
      * `This user has not connected wallets here.`
      */ /**
      * `Verify your Twitter ID`
      */ /**
      * `Verify your wallet`
      */ /**
      * `Add wallet`
      */ /**
      * `Verify your wallet`
      */ /**
      * `This wallet address has already been connected.`
      */ /**
      * `Please switch to the address that you want to disconnect.`
      */ /**
      * `Disconnect Wallet`
      */ /**
      * `Persona Sign`
      */ /**
      * `Wallet Sign`
      */ /**
      * `copied`
      */ /**
      * `Provided by`
      */ /**
      * `View on explorer`
      */ /**
      * `Persona Sign`
      */ /**
      * `Confirm this sign in your Personas`
      */ /**
      * `Your wallet cancelled the sign`
      */ /**
      * `Wallet Sign`
      */ /**
      * `Confirm this transaction in your wallet.`
      */ /**
      * `Wallet sign cancelled.`
      */ /**
      * `Wallet Sign`
      */ /**
      * `Wallet sign succeeded.`
      */ /**
      * `Wallet sign failed.`
      */ /**
      * `Create Persona`
      */ /**
      * `Connect Persona`
      */ /**
      * `Please create persona`
      */ /**
      * `Please connect persona`
      */ /**
      * `Choose either your Persona or the currently connected wallet to sign to disconnect.`
      */ /**
      * `Choose either your Persona or the currently connected wallet to sign to disconnect.`
      */ /**
      * `Done`
      */ /**
      * `Confirm`
      */ /**
      * `Cancel`
      */ /**
      * `Delete`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `This wallet will no longer show up in your Web3 profile page. Your Mask friends can no longer give tips to this wallet, or browse NFTs, donations and other on-chain information of this address.`
      */ /**
      * `Tips`
      */ /**
      * `Insufficient balance`
      */ /**
      * `Sending...`
      */ /**
      * `The collectible doesn't exist or belong to you.`
      */ /**
      * `Sent tip successfully.`
      */ /**
      * `Sent {{- amount}} {{name}} tip successfully.`
      */ /**
      * `Search`
      */ /**
      * `Web3 Profile`
      */ /**
      * `Mask Network`
      */ /**
      * `Please create your persona to use Web3 Profile.`
      */ /**
      * `In the Web3 tab, you can show your wallet addresses for NFT collections, donation records, and other on-chain feeds to friends who have also installed the Mask extension.`
      */ /**
      * `The user has not set this.`
      */ /**
      * `Reload`
      */ /**
      * `Load failed`
      */ /**
      * `Persona`
      */ /**
      * `Please create a Persona and verify your account to use this function.`
      */ /**
      * `Create persona`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.mask.next_id");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBox/index.tsx + 5 modules
var WalletStatusBox = __webpack_require__(40025);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
;// CONCATENATED MODULE: ./packages/plugins/NextID/src/components/BindPanelUI.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        persona: {
            padding: theme.spacing(1.7),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '4px',
            width: 48,
            height: 48
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            fontWeight: 500
        },
        identifier: {
            fontSize: 12,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            wordBreak: 'break-all'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            color: theme.palette.text.primary
        },
        deneText: {
            color: '#60DFAB'
        },
        done: {
            background: '#60DFAB !important',
            color: `${vars/* MaskColorVar */.Z.white} !important`,
            opacity: '1 !important'
        },
        loadingIcon: {
            position: 'relative',
            right: -6
        },
        error: {
            marginTop: '14px',
            color: (0,vars/* getMaskColor */.n)(theme).redMain,
            paddingLeft: theme.spacing(0.5),
            borderLeft: `solid 2px ${(0,vars/* getMaskColor */.n)(theme).redMain}`
        }
    }));
const SUPPORTED_PLUGINS = [
    PluginID/* NetworkPluginID */.F.PLUGIN_EVM
];
const BindPanelUI = /*#__PURE__*/ (0,react.memo)(({ onPersonaSign, onWalletSign, currentPersona, signature, isBound, title, onClose, open, isCurrentAccount })=>{
    const t = useNextID_Trans();
    const { classes } = useStyles();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const isSupported = SUPPORTED_PLUGINS.includes(pluginID);
    const isWalletSigned = !!signature.wallet.value;
    const isPersonaSigned = !!signature.persona.value;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        title: title,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            style: {
                padding: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            mb: 1.25,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subTitle,
                                    children: t.wallet()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            className: isWalletSigned ? classes.deneText : '',
                                            component: "span",
                                            children: "1"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            component: "span",
                                            children: ' / 2 '
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {}),
                        isBound ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.bind_wallet_bound_error()
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            mt: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                fullWidth: true,
                                classes: {
                                    loadingIndicatorEnd: classes.loadingIcon
                                },
                                loadingPosition: "end",
                                disabled: !isCurrentAccount || isBound || !!isWalletSigned || !isSupported,
                                className: isWalletSigned ? classes.done : '',
                                loading: signature.wallet.loading,
                                onClick: onWalletSign,
                                endIcon: isWalletSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                    sx: {
                                        color: vars/* MaskColorVar */.Z.white
                                    }
                                }) : null,
                                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
                                children: isWalletSigned ? t.done() : t.wallet_sign()
                            })
                        })
                    ]
                }),
                !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.error,
                    children: t.unsupported_network()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            mb: 1.25,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subTitle,
                                    children: t.persona()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            className: isPersonaSigned ? classes.deneText : '',
                                            component: "span",
                                            children: "2"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "span",
                                            variant: "body2",
                                            children: ' / 2 '
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            className: classes.persona,
                            mb: 3,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Masks, {
                                        size: 48
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.name,
                                            children: currentPersona?.nickname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.identifier,
                                            children: (0,personas/* formatPersonaFingerprint */.Nb)(currentPersona?.identifier.rawPublicKey ?? '', 10)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            mt: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                fullWidth: true,
                                disabled: isBound || !!isPersonaSigned || !isSupported,
                                classes: {
                                    loadingIndicatorEnd: classes.loadingIcon
                                },
                                loadingPosition: "end",
                                className: isPersonaSigned ? classes.done : '',
                                loading: signature.persona.loading,
                                onClick: onPersonaSign,
                                endIcon: isPersonaSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                    sx: {
                                        color: vars/* MaskColorVar */.Z.white
                                    }
                                }) : null,
                                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
                                children: isPersonaSigned ? t.done() : t.persona_sign()
                            })
                        })
                    ]
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/NextID/src/hooks/useBindPayload.ts



const useBindPayload = (action, address, currentIdentifier)=>{
    return (0,useAsyncRetry/* default */.Z)(()=>{
        if (!address) return Promise.resolve(undefined);
        if (!currentIdentifier || !address) return Promise.resolve(undefined);
        return entry/* NextIDProof */.q7.createPersonaPayload(currentIdentifier, action, address, types/* NextIDPlatform */.V.Ethereum);
    }, [
        currentIdentifier,
        address
    ]);
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
;// CONCATENATED MODULE: ./packages/plugins/NextID/src/hooks/usePersonaSign.ts



function usePersonaSign(message, currentIdentifier) {
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!message || !currentIdentifier) return;
        try {
            return await (0,context/* signWithPersona */.MN)?.(Account/* SignType */.A.Message, message, currentIdentifier);
        } catch  {
            return;
        }
    }, [
        message,
        currentIdentifier
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
;// CONCATENATED MODULE: ./packages/plugins/NextID/src/hooks/useWalletSign.ts




const useWalletSign = (message, address)=>{
    const t = useNextID_Trans();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const [state, fn] = (0,useAsyncFn/* default */.Z)(async (changed)=>{
        if (changed || !address || !message) return;
        try {
            showSnackbar(t.notify_wallet_sign(), {
                processing: true,
                message: t.notify_wallet_sign_confirm()
            });
            const result = await entry/* Web3 */.Bv.signMessage('message', message, {
                account: address
            });
            return result;
        } catch  {
            showSnackbar(t.notify_wallet_sign(), {
                variant: 'error',
                message: t.notify_wallet_sign_cancel()
            });
            return;
        }
    }, [
        address,
        message,
        address
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        fn(true);
    }, [
        address
    ]);
    return [
        state,
        ()=>fn(false)
    ];
};

;// CONCATENATED MODULE: ./packages/plugins/NextID/src/components/BindDialog.tsx














const BindDialog = /*#__PURE__*/ (0,react.memo)(({ open, onClose, persona, onBound, bounds })=>{
    const { account } = (0,useContext/* useChainContext */.ql)();
    const t = useNextID_Trans();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const currentIdentifier = persona.identifier;
    const isBound = !!bounds.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.identity, account));
    const { value: message } = useBindPayload(types/* NextIDAction */.B.Create, account, persona.identifier.publicKeyAsHex);
    const [personaSignState, handlePersonaSign] = usePersonaSign(message?.signPayload, currentIdentifier);
    const [walletSignState, handleWalletSign] = useWalletSign(message?.signPayload, account);
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!personaSignState.value || !walletSignState.value || isBound || !message || !persona.identifier.publicKeyAsHex) return;
        try {
            await entry/* NextIDProof */.q7.bindProof(message.uuid, persona.identifier.publicKeyAsHex, types/* NextIDAction */.B.Create, types/* NextIDPlatform */.V.Ethereum, account, message.createdAt, {
                walletSignature: walletSignState.value,
                signature: personaSignState.value
            });
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'success',
                message: t.notify_wallet_sign_request_success()
            });
            Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll();
            await (0,esm/* delay */.gw)(2000);
            onBound();
            onClose();
        } catch  {
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'error',
                message: t.notify_wallet_sign_request_failed()
            });
        }
    }, [
        walletSignState.value,
        personaSignState.value,
        isBound
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BindPanelUI, {
        title: t.verify_wallet_dialog_title(),
        onClose: onClose,
        open: open,
        currentPersona: persona,
        onPersonaSign: handlePersonaSign,
        onWalletSign: handleWalletSign,
        isCurrentAccount: true,
        signature: {
            persona: personaSignState,
            wallet: walletSignState
        },
        isBound: isBound
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaSelectPanel/index.tsx + 4 modules
var PersonaSelectPanel = __webpack_require__(30018);
;// CONCATENATED MODULE: ./packages/plugins/NextID/src/components/Actions/index.tsx







const Actions_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            display: 'inline-flex',
            gap: theme.spacing(1),
            minWidth: 254,
            borderRadius: '20px',
            width: 'fit-content !important'
        },
        unchecked: {
            '& circle': {
                stroke: theme.palette.maskColor.white
            }
        }
    }));
const CreatePersonaAction = /*#__PURE__*/ (0,react.memo)(({ disabled, onCreate })=>{
    const t = useNextID_Trans();
    const { classes, theme } = Actions_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flex: 1,
                px: 1.25,
                justifyContent: "flex-start",
                width: "100%",
                boxSizing: "border-box",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 400,
                    fontSize: 14,
                    color: theme.palette.maskColor.second,
                    children: t.create_persona_intro()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                    color: "primary",
                    disabled: disabled,
                    className: classes.button,
                    onClick: onCreate,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Identity, {
                            size: 18
                        }),
                        t.create_persona()
                    ]
                })
            })
        ]
    });
});
const SelectConnectPersonaAction = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes } = Actions_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        p: 1.25,
        pb: 0,
        width: "100%",
        boxSizing: "border-box",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSelectPanel/* PersonaSelectPanel */.$, {
            classes: {
                unchecked: classes.unchecked,
                button: classes.button
            }
        })
    });
});
const AddWalletPersonaAction = /*#__PURE__*/ (0,react.memo)(({ onAddWallet })=>{
    const t = useNextID_Trans();
    const { classes, theme } = Actions_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flex: 1,
                px: 1.25,
                justifyContent: "flex-start",
                width: "100%",
                boxSizing: "border-box",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 400,
                    fontSize: 14,
                    color: theme.palette.maskColor.second,
                    children: t.add_wallet_intro()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                    color: "primary",
                    variant: "contained",
                    onClick: onAddWallet,
                    className: classes.button,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                            size: 16
                        }),
                        t.add_wallet_button()
                    ]
                })
            })
        ]
    });
});
const OtherLackWalletAction = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = useNextID_Trans();
    const theme = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            fontWeight: 400,
            fontSize: 14,
            color: theme.palette.maskColor.second,
            children: t.others_lack_wallet()
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/NextID/src/components/NextIdPage.tsx












const NextIdPage = /*#__PURE__*/ (0,react.memo)(function NextIdPage() {
    const currentProfileIdentifier = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const visitingPersonaIdentifier = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const allPersonas = (0,useAllPersonas/* useAllPersonas */.T)();
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    const { value: personaConnectStatus, loading: statusLoading } = (0,useCurrentPersonaConnectStatus/* useCurrentPersonaConnectStatus */.H)(allPersonas, currentIdentifier, context/* openDashboard */.f8, currentProfileIdentifier);
    const [openBindDialog, toggleBindDialog] = (0,react.useState)(false);
    const isOwn = currentProfileIdentifier && currentProfileIdentifier?.identifier?.userId === visitingPersonaIdentifier?.identifier?.userId;
    const { value: currentPersona, loading: loadingPersona } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!visitingPersonaIdentifier?.identifier) return;
        return (0,context/* queryPersonaByProfile */.Id)?.(visitingPersonaIdentifier.identifier);
    }, [
        visitingPersonaIdentifier?.identifier,
        personaConnectStatus.hasPersona
    ]);
    const publicKeyAsHex = currentPersona?.identifier.publicKeyAsHex;
    const proofs = (0,usePersonaProofs/* usePersonaProofs */.x)(publicKeyAsHex);
    const handleAddWallets = (0,react.useCallback)(()=>{
        (0,context/* openPopupWindow */.lU)?.(Routes/* PopupRoutes */.mZ.Personas, {
            tab: src_constants/* PopupHomeTabType */.$J.ConnectedWallets
        });
    }, []);
    const ActionComponent = (0,react.useMemo)(()=>{
        if (!isOwn) return /*#__PURE__*/ (0,jsx_runtime.jsx)(OtherLackWalletAction, {});
        if (!personaConnectStatus.hasPersona || !personaConnectStatus.connected || !personaConnectStatus.verified) {
            if (!personaConnectStatus.hasPersona) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CreatePersonaAction, {
                disabled: statusLoading,
                onCreate: ()=>personaConnectStatus.action?.(undefined, undefined, undefined, true)
            });
            if (!personaConnectStatus.connected || !personaConnectStatus.verified) return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectConnectPersonaAction, {});
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWalletPersonaAction, {
                disabled: statusLoading,
                onAddWallet: handleAddWallets
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWalletPersonaAction, {
            disabled: statusLoading,
            onAddWallet: handleAddWallets
        });
    }, [
        isOwn,
        statusLoading,
        handleAddWallets,
        personaConnectStatus
    ]);
    if (!proofs.data && proofs.isFetching || loadingPersona) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {})
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                theme: theme/* MaskLightTheme */.C,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginEnableBoundary/* PluginEnableBoundary */._, {
                        pluginID: PluginID/* PluginID */.P.Web3Profile,
                        children: ActionComponent
                    })
                })
            }),
            openBindDialog && currentPersona && isOwn ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BindDialog, {
                open: openBindDialog,
                onClose: ()=>toggleBindDialog(false),
                persona: currentPersona,
                bounds: proofs.data ?? shared_base_src_constants/* EMPTY_LIST */.rP,
                onBound: proofs.refetch
            }) : null
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/NextID/src/SiteAdaptor/index.tsx




const site = {
    ...base/* base */.u,
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_tabContent`,
            label: 'Wallets',
            priority: 10,
            UI: {
                TabContent: ({ identity })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NextIdPage, {})
            }
        }
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 45522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nW: () => (/* binding */ useBuildInfoMarkdown)
/* harmony export */ });
/* unused harmony exports BuildInfoProvider, useBuildInfo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2194);



/** Type of the Error */ /** The Error message */ /** The error stack */ /**
 * Provide the build info for CrashUI
 */ const BuildInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useBuildInfo_raw */ .A);
BuildInfo.displayName = 'BuildInfo';
function BuildInfoProvider(props) {
    return /*#__PURE__*/ _jsx(BuildInfo.Provider, {
        ...props
    });
}
function useBuildInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BuildInfo)).current();
}
function useBuildInfoMarkdown() {
    const env = useBuildInfo();
    const gitInfo = env.COMMIT_HASH ? `
## Git (${env.DIRTY ? '*' : ''}):
${env.COMMIT_HASH} (${env.BRANCH_NAME})` : '';
    const buildInfoMarkdown = `## Build info
- Version: ${env.VERSION || 'unknown'}
- NODE_ENV: ${"production" || 0}
- userAgent: ${navigator.userAgent}
- build: ${env.channel || 'unknown'}
- BUILD_DATE: ${env.BUILD_DATE || 'unknown'}
` + gitInfo;
    return buildInfoMarkdown;
}


/***/ }),

/***/ 62384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ SingletonModal)
/* harmony export */ });
/* unused harmony export SingletonModalQueued */
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93441);


class SingletonModal {
    constructor(){
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.abort = this.abort.bind(this);
        this.openAndWaitForClose = this.openAndWaitForClose.bind(this);
    }
    emitter = new _servie_events__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
    onOpen;
    onClose;
    onAbort;
    dispatchPeek;
    dispatchOpen;
    dispatchClose;
    dispatchAbort;
    /**
     * Register a React modal component that implemented a forwarded ref.
     * The ref item should be fed with open and close methods.
     */ register = (creator)=>{
        if (!creator) {
            this.dispatchOpen = undefined;
            this.dispatchClose = undefined;
            this.dispatchAbort = undefined;
            return;
        }
        const ref = creator((props)=>{
            this.onOpen?.(props);
            this.emitter.emit('open', props);
        }, (props)=>{
            this.onClose?.(props);
            this.emitter.emit('close', props);
        }, (error)=>{
            this.onAbort?.(error);
            this.emitter.emit('abort', error);
        });
        this.dispatchPeek = ref.peek;
        this.dispatchOpen = ref.open;
        this.dispatchClose = ref.close;
        this.dispatchAbort = ref.abort;
    };
    /**
     * Peek the open state of the React modal component.
     */ peek() {
        return this.dispatchPeek?.() ?? false;
    }
    /**
     * Open the registered modal component with props
     * @param props
     */ open(props) {
        if (typeof this.dispatchOpen === 'undefined') console.warn("[SingletonModal]: The modal hasn't registered yet.");
        this.dispatchOpen?.(props);
    }
    /**
     * Close the registered modal component with props
     * @param props
     */ close(props) {
        this.dispatchClose?.(props);
    }
    /**
     * Abort the registered modal component with Error
     */ abort(error) {
        this.dispatchAbort?.(error);
    }
    /**
     * Open the registered modal component and wait for it closes
     * @param props
     */ openAndWaitForClose(props) {
        return new Promise((resolve, reject)=>{
            this.open(props);
            this.onClose = (props)=>resolve(props);
            this.onAbort = (error)=>reject(error);
        });
    }
}
class SingletonModalQueued extends (/* unused pure expression or super */ null && (SingletonModal)) {
    opened = false;
    tasks = [];
    constructor(){
        super();
        this.emitter.on('open', ()=>{
            this.opened = true;
        });
        this.emitter.on('close', ()=>{
            this.opened = false;
            this.cleanup();
        });
        this.emitter.on('abort', ()=>{
            this.opened = false;
            this.cleanup();
        });
    }
    open(props) {
        if (!this.opened) {
            super.open(props);
            return;
        }
        this.tasks.push({
            props
        });
    }
    close(props) {
        if (!this.opened) return;
        super.close(props);
    }
    openAndWaitForClose(props) {
        if (!this.opened) return super.openAndWaitForClose(props);
        const d = defer();
        this.tasks.push({
            props,
            defer: d
        });
        return d[0];
    }
    async cleanup() {
        if (this.opened || !this.tasks.length) return;
        await delay(300);
        const { props, defer } = this.tasks.shift();
        this.open(props);
        if (!defer) return;
        this.onClose = (props)=>defer[1](props);
        this.onAbort = (error)=>defer[2](error);
    }
}


/***/ }),

/***/ 67101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nb: () => (/* binding */ formatPersonaFingerprint),
/* harmony export */   ck: () => (/* binding */ isSameProfile),
/* harmony export */   j1: () => (/* binding */ isSamePersona),
/* harmony export */   rY: () => (/* binding */ formatPersonaName)
/* harmony export */ });
/* unused harmony exports MAX_PERSONA_LIMIT, MAX_PERSONA_NAME_LENGTH */
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12247);

function formatPersonaFingerprint(fingerprint, size) {
    if (!size) {
        if (fingerprint.length <= 26) return fingerprint;
        return `${fingerprint.slice(0, 12)}...${fingerprint.slice(-9)}`;
    }
    if (size <= 0) return fingerprint;
    return `${fingerprint.slice(0, Math.max(0, 2 + size))}...${fingerprint.slice(-size)}`;
}
const MAX_PERSONA_LIMIT = 10;
const MAX_PERSONA_NAME_LENGTH = 12;
const formatPersonaName = (nickname)=>{
    if (!nickname) return '';
    if (nickname.length < MAX_PERSONA_NAME_LENGTH) return nickname;
    return `${nickname.slice(0, 12)}...`;
};
function isSameIdentity(identities) {
    return identities.reduce((previousValue, T2, key)=>{
        if (key === 0) return true;
        const T1 = identities[key - 1];
        if (!T2 || !T1) return false;
        const i1IdentifierText = (T1 instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Identifier */ .x ? T1 : T1.identifier).toText();
        const i2IdentifierText = (T2 instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Identifier */ .x ? T2 : T2.identifier).toText();
        return previousValue && i1IdentifierText.toLowerCase() === i2IdentifierText.toLowerCase();
    }, false);
}
function isSamePersona(...personas) {
    return isSameIdentity(personas);
}
function isSameProfile(...profiles) {
    return isSameIdentity(profiles);
}


/***/ }),

/***/ 98662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34278);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        copy: {
            '&:hover': {
                color: theme.palette.maskColor.main
            }
        }
    }));
/** defaults to 'Copied' */ /** stop event propagation and prevent default */ const CopyButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CopyButton({ text, title, successText, size, color, scoped = true, className, ...props }) {
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props
    });
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ev)=>{
        if (scoped) {
            ev.stopPropagation();
            ev.preventDefault();
        }
        copyToClipboard(text);
        setCopied(true);
        setActive(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(setActive, 1500, false);
    }, [
        text,
        scoped
    ]);
    const tooltipTitle = copied ? successText ?? t.copied() : title ?? t.copy();
    const iconProps = {
        size,
        color
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootTooltip */ .p, {
        open: active,
        title: tooltipTitle,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            underline: "none",
            component: "button",
            onClick: handleCopy,
            color: "inherit",
            ...props,
            fontSize: 0,
            className: cx(classes.root, className),
            children: active ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Check, {
                ...iconProps,
                color: theme.palette.maskColor.success
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Copy, {
                ...iconProps,
                className: classes.copy
            })
        })
    });
});


/***/ }),

/***/ 78909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ ImageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const ImageIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ImageIcon({ size = 48, icon, iconFilterColor, ...rest }) {
    const style = iconFilterColor ? {
        filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
        backdropFilter: 'blur(16px)',
        ...rest.style
    } : rest.style;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        ...rest,
        style: style
    });
});


/***/ }),

/***/ 52478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 30018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ PersonaSelectPanel)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var helpers_personas = __webpack_require__(67101);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/index.ts
var NextID = __webpack_require__(3765);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useAllPersonas.ts
var useAllPersonas = __webpack_require__(81178);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/useConnectedPersonas.ts






function useConnectedPersonas() {
    const personasInDB = (0,useAllPersonas/* useAllPersonas */.T)();
    const result = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'connected-persona',
            personasInDB
        ],
        queryFn: async ()=>{
            const allPersonaPublicKeys = personasInDB.map((x)=>x.identifier.publicKeyAsHex);
            const allPersonaIdentifiers = personasInDB.map((x)=>x.identifier);
            const avatars = await (0,context/* queryPersonaAvatar */.Tk)?.(allPersonaIdentifiers);
            const allNextIDBindings = await entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(NextID_types/* NextIDPlatform */.V.NextID, allPersonaPublicKeys.join(','), undefined);
            return personasInDB.map((x)=>{
                return {
                    persona: x,
                    proof: allNextIDBindings.find((p)=>p.persona.toLowerCase() === x.identifier.publicKeyAsHex.toLowerCase())?.proofs.filter((x)=>x.is_valid) ?? constants/* EMPTY_LIST */.rP,
                    avatar: avatars?.get(x.identifier)
                };
            });
        }
    });
    (0,react.useEffect)(()=>Messages/* MaskMessages */.q.events.ownProofChanged.on(()=>result.refetch()), [
        result.refetch
    ]);
    return result;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/useCurrentPersona.ts


function useCurrentPersona() {
    return (0,use_subscription.useSubscription)(context/* currentPersona */._c);
}

// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var site_adaptor_context = __webpack_require__(8898);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/useNextIDVerify.ts






function useNextIDVerify() {
    const verifyPostCollectTimer = (0,react.useRef)(null);
    return (0,useAsyncFn/* default */.Z)(async (persona, username, verifiedCallback)=>{
        if (!site_adaptor_context/* currentNextIDPlatform */.m$ || !persona || !username) return;
        const payload = await entry/* NextIDProof */.q7.createPersonaPayload(persona.identifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, username, site_adaptor_context/* currentNextIDPlatform */.m$, settings/* languageSettings */.pQ.value ?? 'default');
        if (!payload) throw new Error('Failed to create persona payload.');
        const signature = await (0,context/* signWithPersona */.MN)?.(Account/* SignType */.A.Message, payload.signPayload, persona.identifier, true);
        if (!signature) throw new Error('Failed to sign by persona.');
        const postContent = payload.postContent.replace('%SIG_BASE64%', (0,pvtutils/* toBase64 */.s3)((0,pvtutils/* fromHex */.H_)(signature)));
        (0,site_adaptor_context/* postMessage */.oi)?.(postContent, {
            recover: false,
            reason: 'verify'
        });
        await new Promise((resolve, reject)=>{
            verifyPostCollectTimer.current = setInterval(async ()=>{
                const postId = (0,site_adaptor_context/* getPostIdFromNewPostToast */.Ge)?.();
                if (postId && persona.identifier.publicKeyAsHex) {
                    clearInterval(verifyPostCollectTimer.current);
                    await entry/* NextIDProof */.q7.bindProof(payload.uuid, persona.identifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, site_adaptor_context/* currentNextIDPlatform */.m$, username, payload.createdAt, {
                        signature,
                        proofLocation: postId
                    });
                    resolve();
                }
            }, 1000);
            setTimeout(()=>{
                clearInterval(verifyPostCollectTimer.current);
                reject();
            }, 1000 * 20);
        });
        const isBound = await entry/* NextIDProof */.q7.queryIsBound(persona.identifier.publicKeyAsHex, site_adaptor_context/* currentNextIDPlatform */.m$, username);
        if (!isBound) throw new Error('Failed to verify.');
        Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll(undefined);
        await verifiedCallback?.();
    }, []);
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaSelectPanel/PersonaItemUI.tsx







/* cspell:disable-next-line */ // TODO: Migrate to SocialIdentity by @Lanttcat
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        nickname: {
            fontSize: 16,
            lineHeight: '20px',
            color: theme.palette.maskColor.main,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        fingerprint: {
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.maskColor.second
        },
        indicator: {
            display: 'inline-block',
            background: '#2DDF00',
            borderRadius: '50%',
            width: 7,
            height: 7,
            position: 'absolute',
            left: '77.62%',
            right: '5.84%',
            top: '5.84%',
            bottom: '77.62%',
            border: `1px solid ${theme.palette.maskColor.bottom}`
        }
    };
});
function PersonaItemUI(props) {
    const { data, onClick, currentPersona, currentPersonaIdentifier, currentProfileIdentify } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    const isVerified = (0,react.useMemo)(()=>{
        return data.proof.some((p)=>(0,helpers_personas/* isSameProfile */.ck)((0,NextID/* resolveNextIDIdentityToProfile */.Bm)(p.identity, p.platform), currentProfileIdentify?.identifier) && p.is_valid);
    }, [
        data.proof
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        gap: 1,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                flexGrow: 0,
                position: "relative",
                children: [
                    data.avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: data.avatar,
                        sx: {
                            width: 30,
                            height: 30,
                            display: 'inline-block',
                            borderRadius: '50%'
                        }
                    }) : null,
                    !data.avatar && /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MenuPersonasActive, {
                        size: 30
                    }),
                    (0,helpers_personas/* isSamePersona */.j1)(currentPersonaIdentifier, data.persona) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.indicator
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                flexGrow: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.nickname,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            component: "span",
                            display: "inline-flex",
                            direction: "row",
                            alignItems: "center",
                            gap: 0.25,
                            children: [
                                data.persona.nickname,
                                isVerified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.NextIDMini, {
                                    width: 32,
                                    height: 18
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.fingerprint,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            component: "span",
                            display: "inline-flex",
                            direction: "row",
                            alignItems: "center",
                            gap: 0.25,
                            children: [
                                (0,helpers_personas/* formatPersonaFingerprint */.Nb)(data.persona.identifier.rawPublicKey, 4),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                    size: 14,
                                    text: data.persona.identifier.rawPublicKey
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flexGrow: 0,
                children: (0,helpers_personas/* isSamePersona */.j1)(currentPersona?.persona, data.persona) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                    size: 20,
                    className: classes.checked
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioNo, {
                    size: 20,
                    className: classes.unchecked
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaSelectPanel/index.tsx




















const PersonaSelectPanel_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        items: {
            overflow: 'auto',
            maxHeight: 225,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        reloadStatus: {
            padding: theme.spacing(1, 2, 2, 2),
            minHeight: 148,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        button: {
            display: 'inline-flex',
            gap: theme.spacing(1),
            borderRadius: 20,
            width: '100%'
        }
    };
});
const PersonaSelectPanel = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { finishTarget, enableVerify = true, onClose } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const currentPersonaIdentifier = useCurrentPersona();
    const { classes } = PersonaSelectPanel_useStyles(undefined, {
        props
    });
    const [selectedPersona, setSelectedPersona] = (0,react.useState)();
    const [, handleVerifyNextID] = useNextIDVerify();
    const currentProfileIdentify = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const { data: personas = constants/* EMPTY_LIST */.rP, isLoading, error, refetch } = useConnectedPersonas();
    (0,react.useEffect)(()=>{
        if (!currentPersonaIdentifier) {
            setSelectedPersona(personas[0]);
            return;
        }
        const persona = personas.find((x)=>(0,helpers_personas/* isSamePersona */.j1)(x.persona, currentPersonaIdentifier));
        setSelectedPersona(persona ?? personas[0]);
    }, [
        currentPersonaIdentifier?.toText(),
        personas.length
    ]);
    const [, connect] = (0,useAsyncFn/* default */.Z)(async (profileIdentifier, personaIdentifier)=>{
        if (!profileIdentifier || !personaIdentifier) return;
        await (0,context/* attachProfile */.$e)?.(profileIdentifier, personaIdentifier, {
            connectionConfirmState: 'confirmed'
        });
        await (0,context/* setCurrentPersonaIdentifier */.OX)?.(personaIdentifier);
    }, []);
    (0,react.useLayoutEffect)(()=>{
        if (personas.length || isLoading || error) return;
        onClose?.();
        modals/* LeavePageConfirmModal */.tN.open({
            openDashboard: context/* openDashboard */.f8,
            info: {
                target: 'dashboard',
                url: Routes/* DashboardRoutes */.vq.SignUpPersona,
                text: t.applications_create_persona_hint(),
                title: t.applications_create_persona_title(),
                actionHint: t.applications_create_persona_action()
            }
        });
    }, [
        !personas.length,
        isLoading,
        !error
    ]);
    const actionButton = (0,react.useMemo)(()=>{
        let isConnected = true;
        let isVerified = true;
        if (!currentProfileIdentify || !selectedPersona) return null;
        // Selected persona does not link the current site
        if (!selectedPersona.persona.linkedProfiles.find((x)=>(0,helpers_personas/* isSameProfile */.ck)(x, currentProfileIdentify.identifier))) {
            isConnected = false;
        }
        if (!(0,helpers_personas/* isSamePersona */.j1)(selectedPersona.persona, currentPersonaIdentifier)) isConnected = false;
        const verifiedAtSite = selectedPersona.proof.find((x)=>(0,helpers_personas/* isSameProfile */.ck)((0,NextID/* resolveNextIDIdentityToProfile */.Bm)(x.identity, x.platform), currentProfileIdentify.identifier) && x.is_valid);
        if (!verifiedAtSite) {
            isVerified = false;
        }
        const handleClick = async ()=>{
            if (!isConnected) {
                await connect?.(currentProfileIdentify.identifier, selectedPersona.persona.identifier);
                if (!finishTarget) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileConnectTwitter);
                else providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryMaskComposeConnectTwitter);
            }
            if (!isVerified && enableVerify) {
                onClose?.();
                modals/* ApplicationBoardModal */.G5.close();
                await handleVerifyNextID(selectedPersona.persona, currentProfileIdentify.identifier?.userId);
                if (!finishTarget) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileConnectVerify);
                else providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryMaskComposeVerifyTwitter);
            }
            if (isVerified) CrossIsolationEvents/* CrossIsolationMessages */.W.events.personaBindFinished.sendToAll({
                pluginID: finishTarget
            });
            if (finishTarget) {
                CrossIsolationEvents/* CrossIsolationMessages */.W.events.applicationDialogEvent.sendToLocal({
                    open: true,
                    pluginID: finishTarget,
                    selectedPersona: selectedPersona.persona
                });
            }
            await (0,esm/* delay */.gw)(100);
            onClose?.();
        };
        const actionProps = {
            ...(()=>{
                const { persona } = selectedPersona;
                if (!isConnected && !isVerified && enableVerify) return {
                    buttonText: t.applications_persona_verify_connect({
                        nickname: persona.nickname ?? ''
                    }),
                    hint: t.applications_persona_verify_connect_hint({
                        nickname: persona.nickname ?? ''
                    })
                };
                if (!isConnected) return {
                    buttonText: t.applications_persona_connect({
                        nickname: persona.nickname ?? ''
                    }),
                    hint: t.applications_persona_connect_hint({
                        nickname: persona.nickname ?? ''
                    })
                };
                if (!isVerified) return {
                    buttonText: t.applications_persona_verify({
                        nickname: persona.nickname ?? ''
                    }),
                    hint: t.applications_persona_verify_hint()
                };
                return {
                    buttonText: t.applications_persona_connect({
                        nickname: persona.nickname ?? ''
                    })
                };
            })(),
            onClick: handleClick
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionContent, {
            ...actionProps,
            classes: {
                button: props.classes?.button
            }
        });
    }, [
        currentPersonaIdentifier,
        currentProfileIdentify,
        enableVerify,
        finishTarget,
        selectedPersona?.persona,
        selectedPersona?.proof,
        selectedPersona?.persona.linkedProfiles
    ]);
    if (isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        iconSize: 24
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
        className: classes.reloadStatus,
        onRetry: refetch
    });
    if (!personas.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        height: "100%",
        justifyContent: "space-between"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        height: "100%",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                gap: 1.5,
                className: classes.items,
                children: personas.map((x)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItemUI, {
                        data: x,
                        onClick: ()=>setSelectedPersona(x),
                        currentPersona: selectedPersona,
                        currentPersonaIdentifier: currentPersonaIdentifier,
                        currentProfileIdentify: currentProfileIdentify,
                        classes: {
                            unchecked: props.classes?.unchecked
                        }
                    }, x.persona.identifier.toText());
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                children: actionButton
            })
        ]
    });
});
function ActionContent(props) {
    const { buttonText, hint, onClick } = props;
    const { classes } = PersonaSelectPanel_useStyles(undefined, {
        props
    });
    if (!buttonText) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        gap: 1.5,
        mt: 1.5,
        children: [
            hint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: (t)=>t.palette.maskColor.main,
                fontSize: 14,
                lineHeight: "18px",
                height: 36,
                children: hint
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                    color: "primary",
                    className: classes.button,
                    onClick: onClick,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Identity, {
                            size: 18
                        }),
                        buttonText
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 21766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ PluginCardFrameMini)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52478);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.maskColor.main
        },
        container: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF;',
            minHeight: '196px',
            justifyContent: 'space-between',
            color: theme.palette.maskColor.main
        },
        web3Icon: {
            marginRight: 6,
            marginTop: 2
        },
        item1: {
            color: theme.palette.maskColor.secondaryDark,
            fontSize: '14px',
            fontWeight: 400
        },
        item2: {
            color: theme.palette.maskColor.dark,
            fontSize: '14px',
            fontWeight: 500,
            marginLeft: '2px'
        },
        linkOutIcon: {
            color: theme.palette.maskColor.secondaryDark
        }
    }));
function PluginCardFrameMini({ icon, title, provider, providerLink, children }) {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    const { classes, theme } = useStyles();
    const PluginName = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.title,
        direction: "row",
        children: [
            icon ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.Web3Profile, {
                className: classes.web3Icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fontSize: 16,
                fontWeight: 700,
                color: theme.palette.maskColor.main,
                children: title ?? t.plugin_card_frame_default_title()
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                direction: "row",
                justifyContent: "space-between",
                p: 1.5,
                children: [
                    PluginName,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        direction: "row",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: classes.item1,
                                children: t.plugin_card_frame_default_provided_by()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: classes.item2,
                                children: provider ?? t.plugin_card_frame_default_provided_by_value()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                underline: "none",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                color: "textPrimary",
                                href: providerLink ?? 'https://mask.io/',
                                width: "22px",
                                height: "22px",
                                style: {
                                    alignSelf: 'center',
                                    marginLeft: '4px'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.LinkOut, {
                                    size: 16,
                                    className: classes.linkOutIcon
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                p: 1.5,
                children: children ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_7__/* .LoadingStatus */ .Q, {
                    iconSize: 24,
                    color: theme.palette.maskColor.main,
                    children: t.plugin_card_frame_loading()
                })
            })
        ]
    });
}


/***/ }),

/***/ 52623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ PluginEnableBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82897);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8311);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94685);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90097);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);
/* harmony import */ var _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49588);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            display: 'inline-flex',
            justifyContent: 'center',
            borderRadius: 20,
            width: 254,
            height: 40
        }
    }));
const PluginEnableBoundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { children, pluginID } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    const disabled = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__/* .useIsMinimalMode */ .$i)(pluginID);
    const [{ loading }, onEnablePlugin] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        await (0,_masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_6__/* .setPluginMinimalModeEnabled */ .I1)?.(pluginID, false);
    }, [
        pluginID
    ]);
    if (disabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        fontWeight: 400,
                        fontSize: 14,
                        children: t.enable_plugin_boundary_description()
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_9__/* .ActionButton */ .K, {
                    loading: loading,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__.Plugin, {
                        size: 18
                    }),
                    className: classes.root,
                    color: "primary",
                    onClick: onEnablePlugin,
                    sx: {
                        mt: 6
                    },
                    children: t.enable_plugin_boundary()
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
});


/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ReloadStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6764);
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
            fontWeight: 700,
            lineHeight: '36px'
        },
        button: {
            marginTop: theme.spacing(1.5),
            fontSize: '12px',
            fontWeight: 700,
            minWidth: theme.spacing(11),
            height: theme.spacing(4)
        }
    }));
const ReloadStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ReloadStatus({ className, children, message, actionLabel, onRetry, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.text,
                children: message ?? t.load_failed()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.button,
                onClick: ()=>onRetry?.(),
                variant: "roundedContained",
                size: "medium",
                children: actionLabel ?? t.load_retry()
            })
        ]
    });
});


/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78909);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme, props)=>({
        root: {
            position: 'relative',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block'
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${props.badgeIconBorderColor ?? theme.palette.common.white}`,
            borderRadius: '50%'
        }
    }));
function WalletIcon(props) {
    const { size = 24, badgeSize = 14, mainIcon, badgeIcon, badgeIconBorderColor, iconFilterColor } = props;
    const { classes } = useStyles({
        size: badgeSize > size ? badgeSize : size,
        badgeIconBorderColor
    }, {
        props: {
            classes: props.classes
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            mainIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.mainIcon,
                size: size,
                icon: mainIcon,
                iconFilterColor: iconFilterColor
            }) : null,
            badgeIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.badgeIcon,
                size: badgeSize,
                icon: badgeIcon
            }) : null
        ]
    });
}


/***/ }),

/***/ 40025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ WalletStatusBox)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var Theme_theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/theme/src/Theme/colors.ts
var colors = __webpack_require__(38060);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(60574);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useClearTransactionsCallback.ts



function useClearTransactionsCallback(pluginID) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { Transaction } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,react.useCallback)(async ()=>{
        if (!account) return;
        return Transaction?.clearTransactions?.(chainId, account);
    }, [
        chainId,
        account,
        Transaction
    ]);
}

;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useRemoveTransaction.ts



function useRemoveTransactionCallback(pluginID) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { Transaction } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,react.useCallback)(async (id)=>{
        if (!account) return;
        await Transaction?.removeTransaction?.(chainId, account, id);
    }, [
        chainId,
        account,
        Transaction
    ]);
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__(77393);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(27043);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(84973);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js + 1 modules
var filter = __webpack_require__(3311);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./packages/web3-constants/evm/aave.json
var aave = __webpack_require__(25828);
// EXTERNAL MODULE: ./packages/web3-constants/evm/artblocks.json
var artblocks = __webpack_require__(978);
// EXTERNAL MODULE: ./packages/web3-constants/evm/gitcoin.json
var gitcoin = __webpack_require__(72071);
// EXTERNAL MODULE: ./packages/web3-constants/evm/lido.json
var lido = __webpack_require__(3278);
// EXTERNAL MODULE: ./packages/web3-constants/evm/mask-box.json
var mask_box = __webpack_require__(1353);
// EXTERNAL MODULE: ./packages/web3-constants/evm/nft-red-packet.json
var nft_red_packet = __webpack_require__(62337);
// EXTERNAL MODULE: ./packages/web3-constants/evm/red-packet.json
var red_packet = __webpack_require__(19684);
// EXTERNAL MODULE: ./packages/web3-constants/evm/trader.json
var trader = __webpack_require__(25189);
;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/getContractOwnerDomain.ts









const collect = (data, fields)=>{
    const groupedByFields = (0,values/* default */.Z)((0,pick/* default */.Z)(data, fields));
    const listOfAddresses = groupedByFields.map((v)=>(0,values/* default */.Z)(v));
    const listOfAddress = (0,flatten/* default */.Z)(listOfAddresses);
    const collected = (0,filter/* default */.Z)((0,uniq/* default */.Z)(listOfAddress), Boolean);
    return collected.map((addr)=>addr.toLowerCase());
};
const domainAddressMap = {
    'uniswap.org': collect(trader, [
        'UNISWAP_V2_ROUTER_ADDRESS',
        'UNISWAP_V2_FACTORY_ADDRESS',
        'UNISWAP_SWAP_ROUTER_ADDRESS',
        'UNISWAP_V3_FACTORY_ADDRESS',
        'UNISWAP_V3_QUOTER_ADDRESS'
    ]),
    'defikingdoms.com': collect(trader, [
        'DEFIKINGDOMS_ROUTER_ADDRESS',
        'DEFIKINGDOMS_FACTORY_ADDRESS'
    ]),
    'app.openswap.one': collect(trader, [
        'OPENSWAP_ROUTER_ADDRESS',
        'OPENSWAP_FACTORY_ADDRESS'
    ]),
    'viper.exchange': collect(trader, [
        'VENOMSWAP_ROUTER_ADDRESS',
        'VENOMSWAP_FACTORY_ADDRESS'
    ]),
    'viperswap.one': collect(trader, [
        'VENOMSWAP_ROUTER_ADDRESS',
        'VENOMSWAP_FACTORY_ADDRESS'
    ]),
    'www.sushi.com': collect(trader, [
        'SUSHISWAP_ROUTER_ADDRESS',
        'SUSHISWAP_FACTORY_ADDRESS'
    ]),
    'quickswap.exchange': collect(trader, [
        'QUICKSWAP_ROUTER_ADDRESS',
        'QUICKSWAP_FACTORY_ADDRESS'
    ]),
    'pancakeswap.finance': collect(trader, [
        'PANCAKESWAP_ROUTER_ADDRESS',
        'PANCAKESWAP_FACTORY_ADDRESS'
    ]),
    'dodoex.io': collect(trader, [
        'DODO_EXCHANGE_PROXY_ADDRESS'
    ]),
    'www.bancor.network': collect(trader, [
        'BANCOR_EXCHANGE_PROXY_ADDRESS'
    ]),
    'traderjoexyz.com': collect(trader, [
        'TRADERJOE_ROUTER_ADDRESS',
        'TRADERJOE_FACTORY_ADDRESS'
    ]),
    'openocean.finance': collect(trader, [
        'OPENOCEAN_EXCHANGE_PROXY_ADDRESS'
    ]),
    'pangolin.exchange': collect(trader, [
        'PANGOLIN_ROUTER_ADDRESS',
        'PANGOLIN_FACTORY_ADDRESS'
    ]),
    'wannaswap.finance': collect(trader, [
        'WANNASWAP_ROUTER_V2_ADDRESS',
        'WANNASWAP_ROUTER_ADDRESS',
        'WANNASWAP_FACTORY_ADDRESS'
    ]),
    'yumiswap.com': collect(trader, [
        'YUMISWAP_ROUTER_ADDRESS',
        'YUMISWAP_FACTORY_ADDRESS'
    ]),
    'www.trisolaris.io': collect(trader, [
        'TRISOLARIS_ROUTER_ADDRESS',
        'TRISOLARIS_FACTORY_ADDRESS'
    ]),
    'mdex.com': collect(trader, [
        'MDEX_ROUTER_ADDRESS',
        'MDEX_FACTORY_ADDRESS'
    ]),
    'aave.com': collect(aave, [
        'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS'
    ]),
    'www.artblocks.io': collect(artblocks, [
        'GEN_ART_721_MINTER'
    ]),
    'gitcoin.co': collect(gitcoin, [
        'GITCOIN_ETH_ADDRESS',
        'BULK_CHECKOUT_ADDRESS'
    ]),
    'lido.fi': collect(lido, [
        'LIDO_stETH_ADDRESS',
        'LIDO_REFERRAL_ADDRESS'
    ]),
    'mask.io': [
        ...collect(red_packet, [
            'HAPPY_RED_PACKET_ADDRESS_V1',
            'HAPPY_RED_PACKET_ADDRESS_V2',
            'HAPPY_RED_PACKET_ADDRESS_V3',
            'HAPPY_RED_PACKET_ADDRESS_V4'
        ]),
        ...collect(nft_red_packet, [
            'RED_PACKET_NFT_ADDRESS'
        ]),
        ...collect(mask_box, [
            'MASK_BOX_CONTRACT_ADDRESS'
        ])
    ]
};
// Not very common usage, no need to create a map of address-to-domain
function getContractOwnerDomain(address) {
    if (!address) return address;
    const addr = address.toLowerCase();
    const pair = Object.entries(domainAddressMap).find(([, addresses])=>{
        return addresses.includes(addr);
    });
    return pair ? pair[0] : addr;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBox/TransactionList.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        list: {
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            padding: 0
        },
        listItem: {
            height: 52,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1, 1),
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.background.default
            }
        },
        transaction: {
            width: '100%'
        },
        methodName: {
            fontWeight: 500,
            textTransform: 'capitalize',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        timestamp: {
            lineHeight: '18px'
        },
        cell: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            boxSizing: 'border-box'
        },
        linkText: {
            lineHeight: '18px'
        },
        link: {
            display: 'flex'
        },
        linkIcon: {
            // TODO: replace with theme color
            color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#07101B',
            width: 17.5,
            height: 17.5,
            marginLeft: theme.spacing(0.5)
        },
        clear: {
            color: vars/* MaskColorVar */.Z.blue,
            cursor: 'pointer'
        }
    }));
const statusTextColorMap = {
    [specs.TransactionStatusType.NOT_DEPEND]: '#FFB915',
    [specs.TransactionStatusType.SUCCEED]: '#60DFAB',
    [specs.TransactionStatusType.FAILED]: '#FF5F5F'
};
function Transaction({ chainId, transaction: tx, onClear = noop/* default */.Z, ...rest }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, theme } = useStyles();
    const statusTextMap = {
        [specs.TransactionStatusType.NOT_DEPEND]: t.recent_transaction_pending(),
        [specs.TransactionStatusType.SUCCEED]: t.recent_transaction_success(),
        [specs.TransactionStatusType.FAILED]: t.recent_transaction_failed()
    };
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { TransactionFormatter, TransactionWatcher } = (0,useWeb3State/* useWeb3State */.d)();
    const address = (tx._tx.to || '').toLowerCase();
    const { value: functionName } = (0,useAsync/* default */.Z)(async ()=>{
        const formattedTransaction = await TransactionFormatter?.formatTransaction(chainId, tx._tx);
        return formattedTransaction?.title ?? 'Contract Interaction';
    }, [
        TransactionFormatter
    ]);
    const handleClear = (0,react.useCallback)(()=>{
        onClear(tx);
    }, [
        onClear,
        tx
    ]);
    const domainOrAddress = (0,react.useMemo)(()=>getContractOwnerDomain(address), [
        address
    ]);
    const [txStatus, setTxStatus] = (0,react.useState)(tx.status);
    (0,react.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('progress', (chainId, id, status, transaction)=>{
            setTxStatus(status);
        });
        return ()=>{
            off?.();
        };
    }, [
        tx.id,
        TransactionWatcher
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                textAlign: "left",
                md: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    overflow: "hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.methodName,
                            title: functionName || '',
                            variant: "body1",
                            fontWeight: 500,
                            children: functionName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.timestamp,
                            variant: "body1",
                            color: theme.palette.text.secondary,
                            children: (0,format/* default */.Z)(tx.createdAt, 'yyyy.MM.dd HH:mm')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                flexGrow: 1,
                md: 4,
                justifyContent: "right",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.linkText,
                        children: address && (0,isSameAddress/* isSameAddress */.W)(domainOrAddress, address) ? Others.formatAddress(address, 4) : domainOrAddress || address
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.link,
                        href: Others.explorerResolver.transactionLink?.(chainId, tx.id),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            className: classes.linkIcon
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                md: 2,
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 400,
                    justifyContent: "center",
                    color: statusTextColorMap[txStatus],
                    fontSize: 14,
                    children: statusTextMap[txStatus]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                md: 2,
                justifyContent: "right",
                children: txStatus === specs.TransactionStatusType.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 300,
                    className: classes.clear,
                    onClick: handleClear,
                    children: t.wallet_status_pending_clear()
                }) : null
            })
        ]
    });
}
const TransactionList = /*#__PURE__*/ (0,react.forwardRef)(({ className, transactions, onClear = noop/* default */.Z, ...rest }, ref)=>{
    const { classes, cx } = useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    if (!transactions.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: cx(classes.list, className),
        ...rest,
        ref: ref,
        children: transactions.map((tx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transaction, {
                    className: classes.transaction,
                    transaction: tx,
                    chainId: chainId,
                    onClear: onClear
                })
            }, tx.id))
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBox/usePendingTransactions.tsx








const usePendingTransactions_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        summaryWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1, 1)
        },
        pendingSummary: {
            cursor: 'default',
            color: theme.palette.maskColor.warn
        },
        clearAll: {
            cursor: 'pointer',
            color: theme.palette.mode === 'light' ? vars/* MaskColorVar */.Z.blue : theme.palette.common.white
        },
        hide: {
            display: 'none'
        }
    }));
function usePendingTransactions() {
    const { classes, cx } = usePendingTransactions_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    // #region recent pending transactions
    const pendingTransactions = (0,useRecentTransactions/* useRecentTransactions */.S)(undefined, specs.TransactionStatusType.NOT_DEPEND);
    // frozenTxes would not be reactive to pendingTransactions,
    // it would be recreated then the list shows up.
    const [meltedTxHashes, setMeltedTxHashes] = (0,react.useState)([]);
    const clearRecentTxes = useClearTransactionsCallback();
    const removeRecentTx = useRemoveTransactionCallback();
    const transactions = pendingTransactions.slice(0, 5).filter((tx)=>!meltedTxHashes.includes(tx.id));
    // #endregion
    const summary = pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.summaryWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(pendingTransactions.length ? '' : classes.hide),
                children: pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.pendingSummary,
                    variant: "body2",
                    mr: 1,
                    fontWeight: 700,
                    children: t.wallet_status_pending({
                        count: pendingTransactions.length
                    })
                }) : null
            }),
            pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.clearAll,
                onClick: clearRecentTxes,
                fontWeight: 700,
                children: t.wallet_status_pending_clear_all()
            }) : null
        ]
    }) : null;
    const transactionList = transactions.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionList, {
        transactions: transactions,
        onClear: (tx)=>{
            setMeltedTxHashes((list)=>[
                    ...list,
                    tx.id
                ]);
            removeRecentTx(tx.id);
        }
    }) : null;
    return {
        summary,
        transactionList
    };
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBox/index.tsx











const WalletStatusBox_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { contentBackground, disableChange, withinRiskWarningDialog, textColor })=>({
        currentAccount: {
            padding: theme.spacing(0, 1.5),
            marginBottom: withinRiskWarningDialog ? '7px' : theme.spacing(2),
            display: 'flex',
            background: contentBackground ?? (Sniffings/* Sniffings */.Y.is_dashboard_page ? (0,vars/* getMaskColor */.n)(theme).primaryBackground2 : theme.palette.background.default),
            borderRadius: 8,
            alignItems: 'center',
            height: disableChange ? 60 : 82
        },
        dashboardBackground: {
            background: theme.palette.background.default
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1.5)
        },
        accountName: {
            color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.dark : textColor,
            fontWeight: 700,
            marginRight: 5,
            lineHeight: '18px'
        },
        balance: {
            color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.dark : textColor,
            paddingTop: 2,
            lineHeight: '18px'
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        actionButton: {
            fontSize: 12,
            color: 'white',
            backgroundColor: theme.palette.maskColor.dark,
            marginLeft: theme.spacing(1),
            padding: theme.spacing(1, 2),
            '&:hover': {
                backgroundColor: theme.palette.maskColor.dark
            }
        },
        link: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        connectButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        icon: {
            width: 17.5,
            height: 17.5,
            marginRight: theme.spacing(0.5)
        },
        copyIcon: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? textColor : theme.palette.maskColor.dark
        },
        linkIcon: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? textColor : theme.palette.maskColor?.dark
        },
        statusBox: {
            position: 'relative'
        }
    }));
function WalletStatusBox(props) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes, cx } = WalletStatusBox_useStyles({
        contentBackground: providerDescriptor?.backgroundGradient ?? theme.palette.maskColor.publicBg,
        disableChange: props.disableChange,
        withinRiskWarningDialog: props.withinRiskWarningDialog,
        textColor: providerDescriptor?.type === types/* ProviderType */.lP.MaskWallet ? theme.palette.maskColor.dark : theme.palette.text.primary
    });
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const { data: balance = '0', isLoading: loadingBalance } = (0,useBalance/* useBalance */.K)();
    const { data: nativeToken, isLoading: loadingNativeToken } = (0,useNativeToken/* useNativeToken */.u)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)();
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(undefined, account);
    const { summary: pendingSummary, transactionList } = usePendingTransactions();
    if (!Others.isValidAddress(account)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: classes.connectButtonWrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: cx(classes.actionButton),
                color: "primary",
                variant: "contained",
                size: "small",
                onClick: ()=>modals/* SelectProviderModal */.ge.open(),
                children: t.plugin_wallet_on_connect()
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: cx(classes.statusBox, classes.currentAccount, Sniffings/* Sniffings */.Y.is_dashboard_page ? classes.dashboardBackground : ''),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                        size: 30,
                        badgeSize: 12,
                        mainIcon: providerDescriptor?.icon,
                        badgeIcon: chainIdValid ? networkDescriptor?.icon : undefined
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.accountInfo,
                        children: [
                            types/* ProviderType */.lP.MaskWallet === providerDescriptor?.type ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accountName,
                                children: wallet?.name
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.infoRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.accountName,
                                        children: domain ? Others.formatDomainName(domain) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                            address: account,
                                            size: 4,
                                            formatter: Others.formatAddress
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                                        theme: Theme_theme/* MaskLightTheme */.C,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                            className: cx(classes.icon, classes.copyIcon),
                                            color: colors/* MaskColors */.m.light.maskColor.dark,
                                            size: 17.5,
                                            text: account
                                        })
                                    }),
                                    chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.link,
                                        href: Others.explorerResolver.addressLink(chainId, account) ?? '',
                                        target: "_blank",
                                        title: t.plugin_wallet_view_on_explorer(),
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            className: cx(classes.icon, classes.linkIcon)
                                        })
                                    }) : null
                                ]
                            }),
                            props.withinRiskWarningDialog ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.infoRow,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    children: loadingNativeToken || loadingBalance ? '-' : `${(0,formatBalance/* formatBalance */.a)(balance, nativeToken?.decimals, 3)} ${nativeToken?.symbol}`
                                })
                            })
                        ]
                    }),
                    !props.disableChange && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: cx(classes.actionButton),
                                variant: "contained",
                                size: "small",
                                onClick: async ()=>{
                                    props.closeDialog?.();
                                    // TODO: remove this after global dialog be implement
                                    await (0,esm/* delay */.gw)(500);
                                    modals/* WalletStatusModal */.L9.close();
                                    await Web3.disconnect();
                                },
                                children: t.plugin_wallet_disconnect()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: cx(classes.actionButton),
                                variant: "contained",
                                size: "small",
                                onClick: ()=>{
                                    modals/* SelectProviderModal */.ge.open();
                                    props.closeDialog?.();
                                },
                                children: t.wallet_status_button_change()
                            })
                        ]
                    })
                ]
            }),
            props.showPendingTransaction ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    pendingSummary,
                    transactionList
                ]
            }) : null
        ]
    });
}


/***/ }),

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bp: () => (/* binding */ ConnectWalletModal),
/* harmony export */   FT: () => (/* binding */ ShareSelectNetworkModal),
/* harmony export */   G5: () => (/* binding */ ApplicationBoardModal),
/* harmony export */   L5: () => (/* binding */ WalletRiskWarningModal),
/* harmony export */   L9: () => (/* binding */ WalletStatusModal),
/* harmony export */   NB: () => (/* binding */ AddCollectiblesModal),
/* harmony export */   Ps: () => (/* binding */ ApplicationBoardSettingsModal),
/* harmony export */   QH: () => (/* binding */ ConfirmDialog),
/* harmony export */   SK: () => (/* binding */ WalletConnectQRCodeModal),
/* harmony export */   eX: () => (/* binding */ PersonaSelectPanelModal),
/* harmony export */   eg: () => (/* binding */ TransactionSnackbar),
/* harmony export */   eq: () => (/* binding */ SelectGasSettingsModal),
/* harmony export */   fU: () => (/* binding */ GasSettingModal),
/* harmony export */   ge: () => (/* binding */ SelectProviderModal),
/* harmony export */   gw: () => (/* binding */ SelectFungibleTokenModal),
/* harmony export */   l$: () => (/* binding */ TransactionConfirmModal),
/* harmony export */   rV: () => (/* binding */ SelectNonFungibleContractModal),
/* harmony export */   sm: () => (/* binding */ ConfirmModal),
/* harmony export */   tN: () => (/* binding */ LeavePageConfirmModal)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62384);

const WalletConnectQRCodeModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectProviderModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletStatusModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletRiskWarningModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConnectWalletModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const LeavePageConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ApplicationBoardModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ApplicationBoardSettingsModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const GasSettingModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const TransactionConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const TransactionSnackbar = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConfirmDialog = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectNonFungibleContractModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectGasSettingsModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const AddCollectiblesModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectFungibleTokenModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const PersonaSelectPanelModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ShareSelectNetworkModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();



/***/ }),

/***/ 86244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ FormattedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45911);



function FormattedAddress({ address, size, formatter = lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z }) {
    if (!address) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: formatter(address, size)
    });
}


/***/ }),

/***/ 16044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ PopupHomeTabType),
/* harmony export */   hA: () => (/* binding */ SOCIAL_MEDIA_ROUND_ICON_MAPPING),
/* harmony export */   mN: () => (/* binding */ EnhanceableSite_RSS3_NFT_SITE_KEY_map),
/* harmony export */   wV: () => (/* binding */ PERSONA_AVATAR_DB_NAMESPACE)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ICON_MAPPING, RSS3_NFT_SITE_KEY */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterX, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Minds, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterXRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.MindsRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramRoundColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
var RSS3_NFT_SITE_KEY;
(function(RSS3_NFT_SITE_KEY) {
    RSS3_NFT_SITE_KEY["TWITTER"] = '_nfts';
    RSS3_NFT_SITE_KEY["FACEBOOK"] = '_facebook_nfts';
    RSS3_NFT_SITE_KEY["INSTAGRAM"] = '_instagram_nfts';
})(RSS3_NFT_SITE_KEY || (RSS3_NFT_SITE_KEY = {}));
const EnhanceableSite_RSS3_NFT_SITE_KEY_map = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: RSS3_NFT_SITE_KEY.FACEBOOK,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: RSS3_NFT_SITE_KEY.TWITTER,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: RSS3_NFT_SITE_KEY.INSTAGRAM
};
const PERSONA_AVATAR_DB_NAMESPACE = 'com.maskbook.persona.avatar.storage';
var PopupHomeTabType;
(function(PopupHomeTabType) {
    PopupHomeTabType["SocialAccounts"] = 'Social Accounts';
    PopupHomeTabType["ConnectedWallets"] = 'Connected Wallets';
})(PopupHomeTabType || (PopupHomeTabType = {}));


/***/ }),

/***/ 54928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useCurrentPersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77219);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67101);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3765);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65734);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25127);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);






const DEFAULT_PERSONA_CONNECT_STATUS = {
    action: undefined,
    currentPersona: undefined,
    connected: false,
    hasPersona: false,
    verified: false,
    proof: undefined
};
function useCurrentPersonaConnectStatus(personas, currentPersonaIdentifier, openDashboard, identity) {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    const create = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target, position, _, direct = false)=>{
        if (direct) {
            openDashboard?.(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardRoutes */ .vq.SignUpPersona);
        } else {
            _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_4__/* .LeavePageConfirmModal */ .tN.open({
                openDashboard,
                info: {
                    target: 'dashboard',
                    url: target ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardRoutes */ .vq.SignUpPersona,
                    text: t.applications_create_persona_hint(),
                    title: t.applications_create_persona_title(),
                    actionHint: t.applications_create_persona_action(),
                    position
                }
            });
        }
    }, []);
    const openPersonListDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((finishTarget, position, enableVerify = true)=>{
        _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_4__/* .PersonaSelectPanelModal */ .eX.open({
            finishTarget,
            position,
            enableVerify
        });
    }, []);
    const { value = DEFAULT_PERSONA_CONNECT_STATUS, loading, error, retry } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        const currentPersona = personas.find((x)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .isSamePersona */ .j1)(x, currentPersonaIdentifier));
        const currentProfile = currentPersona?.linkedProfiles.find((x)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .isSameProfile */ .ck)(x.identifier, identity?.identifier));
        // handle not have persona
        if (!currentPersona || !personas.length) {
            return {
                action: create,
                currentPersona: undefined,
                connected: false,
                hasPersona: false
            };
        }
        // handle had persona but not connect current site
        if (!currentProfile) {
            return {
                action: openPersonListDialog,
                currentPersona,
                connected: false,
                hasPersona: true
            };
        }
        // handle had persona and connected current site, then check the nextID
        try {
            const nextIDInfo = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryExistedBindingByPersona(currentPersona.identifier.publicKeyAsHex);
            const verifiedProfile = nextIDInfo?.proofs.find((x)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .isSameProfile */ .ck)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveNextIDIdentityToProfile */ .Bm)(x.identity, x.platform), currentProfile?.identifier) && x.is_valid);
            return {
                action: verifiedProfile ? undefined : openPersonListDialog,
                currentPersona,
                connected: true,
                hasPersona: true,
                verified: !!verifiedProfile,
                proof: nextIDInfo?.proofs
            };
        } catch  {
            return {
                action: openPersonListDialog,
                currentPersona,
                connected: true,
                hasPersona: true
            };
        }
    }, [
        currentPersonaIdentifier,
        personas,
        identity?.identifier,
        create,
        openPersonListDialog
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const cleanPersonaChangedListener = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages */ .q.events.ownPersonaChanged.on(retry);
        const cleanProofsChangedListener = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages */ .q.events.ownProofChanged.on(retry);
        return ()=>{
            cleanPersonaChangedListener();
            cleanProofsChangedListener();
        };
    }, [
        retry
    ]);
    return {
        value,
        loading,
        retry,
        error
    };
}


/***/ }),

/***/ 19717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ usePersonaProofs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65734);




function usePersonaProofs(publicKey) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'bindings-by-persona',
            publicKey
        ],
        queryFn: async ()=>{
            if (_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_popup_page) await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.clearPersonaQueryCache(publicKey);
            const binding = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryExistedBindingByPersona(publicKey);
            return binding?.proofs ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP;
        }
    });
    const { refetch } = result;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages */ .q.events.ownProofChanged.on(async ()=>{
            // Clearing the query cache when the proof relation changes
            if (publicKey) {
                await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.clearPersonaQueryCache(publicKey);
            }
            refetch();
        });
    }, [
        publicKey
    ]);
    return result;
}


/***/ }),

/***/ 13101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ LightColor),
/* harmony export */   I: () => (/* binding */ DarkColor)
/* harmony export */ });
const LightColor = {
    bg: '##F9F9F9',
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#FFFFFF',
    secondary: '#e8f0fe',
    secondaryContrastText: '#1c68f3',
    input: '#F6F6F8',
    primaryBackground: '#ffffff',
    primaryBackground2: '#FBFBFC',
    secondaryBackground: '#f9fafa',
    lightBackground: '#F9FAFA',
    mainBackground: '#ffffff',
    suspensionBackground: 'rgba(249, 250, 250, 0.8)',
    normalBackground: '#F3F3F4',
    twitterBackground: '#F7F9FA',
    twitterBackgroundHover: '#EFF1F2',
    twitterInputBackground: '#F6F8F8',
    twitterButton: '#111418',
    twitterButtonText: '#ffffff',
    twitterBlue: '#1C68F3',
    twitterBorderLine: '#EDF1F2',
    twitterSecond: '#7B8192',
    twitterMain: '#0F1419',
    twitterBottom: '#ffffff',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterBg: '#F6F8F8',
    twitterTooltipBg: 'rgba(0,0,0,.6)',
    twitterInput: '#EDF1F2',
    twitterLine: '#EBEEF0',
    redMain: '#ff5f5f',
    redLight: '#ffafaf',
    redContrastText: '#ffffff',
    greenMain: '#3DC233',
    greenLight: '#e6f6f0',
    orangeMain: '#ffb915',
    orangeLight: '#faf0d8',
    iconLight: '#a6a9b6',
    divider: '#eff3f4',
    border: '#F3F3F4',
    borderSecondary: '#536471',
    textPrimary: '#111432',
    textSecondary: '#7b8192',
    secondaryInfoText: '#AFC3E1',
    normalText: '#7B8192',
    normalTextLight: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#1C68F3',
    lineLight: '#E4E8F1',
    lineLighter: '#E9E9EA',
    textLight: '#A6A9B6',
    lightestBackground: '#FFFFFF',
    linkText: '#1C68F3',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#F9FAFA',
    main: '#1C68F3',
    errorBackground: 'rgba(255, 95, 95, 0.15)',
    tooltipBackground: '#ffffff',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#000000',
    errorPlugin: '#FF3545',
    buttonPluginBackground: '#07101B',
    textPluginColor: '#07101B',
    buttonPluginColor: '#FFFFFF'
};
const DarkColor = {
    bg: '#1C1C1C',
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#15171A',
    secondary: '#242e57',
    secondaryContrastText: '#ffffff',
    input: '#282B49',
    primaryBackground: '#212442',
    primaryBackground2: '#212442',
    secondaryBackground: '#252846',
    lightBackground: '#2E314F',
    mainBackground: '#111432',
    suspensionBackground: 'rgba(27, 30, 60, 0.8)',
    normalBackground: '#262947',
    twitterInputBackground: '#17191D',
    twitterBackground: '#17191D',
    twitterBackgroundHover: '#17191D',
    twitterButton: '#EFF3F4',
    twitterButtonText: '#0F1419',
    twitterBlue: '#4989FF',
    twitterBorderLine: '#2F3336',
    twitterInput: '#1D2023',
    twitterSecond: '#636B72',
    twitterMain: '#D9D9D9',
    twitterBottom: '#000000',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterLine: '#2F3336',
    twitterBg: '#15171A',
    twitterTooltipBg: 'rgba(91,112,131,.6)',
    redMain: '#ff5f5f',
    redLight: '#46304a',
    redContrastText: '#ffffff',
    greenMain: '#3DC233',
    greenLight: '#314457',
    orangeMain: '#ffb915',
    orangeLight: '#463e3f',
    iconLight: '#a6a9b6',
    divider: '#3e455e',
    border: '#3E455E',
    borderSecondary: '#6e767d',
    // TODO: ?
    textPrimary: '#ffffff',
    // TODO: ?
    textSecondary: 'ghostwhite',
    secondaryInfoText: '#AFC3E1',
    normalText: 'rgba(255, 255, 255, 0.8)',
    normalTextLight: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#ffffff',
    lineLight: '#32365B',
    lineLighter: '#32365B',
    textLight: '#A6A9B6',
    lightestBackground: '#212422',
    linkText: '#ffffff',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#000000',
    main: '#D4D4D4',
    errorBackground: 'rgba(255, 95, 95, 0.1)',
    tooltipBackground: '#1A1D20',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#ffffff',
    errorPlugin: '#FF3545',
    buttonPluginBackground: '#07101B',
    textPluginColor: '#07101B',
    buttonPluginColor: '#FFFFFF'
};


/***/ }),

/***/ 23935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MaskColorVar),
/* harmony export */   n: () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32711);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13101);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
}
/** Append alpha channel to the original color */ function set(key) {
    if (typeof key === 'symbol') return undefined;
    const cssVar = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
    function value(defaultValue) {
        // it might be an object when used in styled components.
        if (typeof defaultValue !== 'string') defaultValue = undefined;
        const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
        return x;
    }
    Object.assign(value, {
        [Symbol.toPrimitive]: ()=>`var(--mask-${cssVar})`,
        alpha: (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
    });
    Object.defineProperty(MaskColorVar, key, {
        configurable: true,
        enumerable: true,
        value
    });
    return value;
}
/**
 * @deprecated Use theme.palette.maskColor
 */ const MaskColorVar = {
    __proto__: new Proxy({}, {
        get: (_, p)=>set(p),
        getOwnPropertyDescriptor: (_, p)=>{
            set(p);
            return Object.getOwnPropertyDescriptor(MaskColorVar, p);
        }
    })
};


/***/ }),

/***/ 90097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _LoadingBase_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20419);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);




const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    loading: {
        ['& > *']: {
            opacity: 0.3
        }
    }
});
function ActionButton(props) {
    const { width, loading, children, className, style, ...rest } = props;
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: cx('actionButton', className, loading ? classes.loading : undefined),
        style: {
            width,
            ...style,
            pointerEvents: loading ? 'none' : undefined
        },
        ...rest,
        disableElevation: true,
        disabled: !!(rest.disabled || loading),
        children: [
            loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                style: {
                    opacity: 1
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadingBase_index_js__WEBPACK_IMPORTED_MODULE_4__/* .LoadingBase */ .S, {})
            }) : null,
            children
        ]
    });
}


/***/ }),

/***/ 80835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mq: () => (/* binding */ useDialogStacking),
/* harmony export */   tE: () => (/* binding */ useDialogStackActor),
/* harmony export */   yu: () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89601);



const DialogStackingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    stack: [],
    push: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    pop: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    setParent: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    hasGlobalBackdrop: false
});
DialogStackingContext.displayName = 'DialogStackingContext';
const DialogHierarchyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
DialogHierarchyContext.displayName = 'DialogHierarchyContext';
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps, TrackDialogHierarchy } = useDialogStackConsumer(open)
 *     return <TrackDialogHierarchy>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </TrackDialogHierarchy>
 * }
 */ function useDialogStackActor(open) {
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('' + Math.random()).current;
    const { pop, push, stack, setParent, hasGlobalBackdrop } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
    // children's useEffect will run before parent's useEffect.
    // when the hierarchy is A > B and they are both open,
    // the stack will be ["B", "A"] (B pushed into the stack first.)
    // we need to notify the context the react component tree hierarchy to order them correctly.
    const parentID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogHierarchyContext);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>setParent(selfID, parentID), [
        parentID
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        open ? push(selfID) : pop(selfID);
        return ()=>pop(selfID);
    }, [
        open
    ]);
    const TrackDialogHierarchy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null).current ??= function TrackDialogHierarchy({ children }) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogHierarchyContext.Provider, {
            value: selfID,
            children: children
        });
    };
    const returnVal = {
        shouldReplaceExitWithBack: stack.length > 1,
        extraProps: {
            open
        },
        TrackDialogHierarchy
    };
    if (hasGlobalBackdrop) returnVal.extraProps.hideBackdrop = true;
    if (stack.length > 1) returnVal.extraProps.transitionDuration = 0;
    if (!open) return returnVal;
    if (stack.at(-1) !== selfID) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            hidden: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 *    <Dialog3></Dialog3>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    const [stack, setStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hierarchy, setHierarchy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const sortedStack = sortStackByHierarchy(hierarchy, stack);
        return {
            hasGlobalBackdrop: props.hasGlobalBackdrop || false,
            stack: sortedStack,
            // Note: the following methods MUST NOT use stack or hierarchy out of the useState callback.
            setParent (child, parent) {
                if (!parent) return lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
                setHierarchy((hierarchy)=>{
                    if (hierarchy[parent]?.has(child)) return hierarchy;
                    const newSet = new Set(hierarchy[parent] || []);
                    newSet.add(child);
                    return {
                        ...hierarchy,
                        [parent]: newSet
                    };
                });
                return ()=>{
                    setHierarchy((hierarchy)=>{
                        const newSet = new Set(hierarchy[parent]);
                        newSet.delete(child);
                        return {
                            ...hierarchy,
                            [parent]: newSet
                        };
                    });
                };
            },
            pop (id) {
                setStack((stack)=>stack.includes(id) ? stack.filter((x)=>x !== id) : stack);
            },
            push (id) {
                setStack((stack)=>stack.includes(id) ? stack : stack.concat(id));
            }
        };
    }, [
        stack,
        hierarchy,
        props.hasGlobalBackdrop
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogStackingContext.Provider, {
        value: context,
        children: props.children
    });
}
function useDialogStacking() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
}
function sortStackByHierarchy(hierarchy, stack) {
    if (stack.length <= 1) return stack;
    const last = stack.at(-1);
    const children = hierarchy[last];
    if (!children?.size) return stack;
    for (const child of children){
        if (stack.includes(child)) return sortStackByHierarchy(hierarchy, [
            last
        ].concat(stack.slice(0, -1)));
    }
    return stack;
}


/***/ }),

/***/ 20419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ LoadingBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);



const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        animated: {
            '@keyframes loadingAnimation': {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(360deg)'
                }
            },
            animation: 'loadingAnimation 1s linear infinite'
        }
    }));
function LoadingBase(props) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CircleLoading, {
        ...props,
        className: cx(classes.animated, props.className)
    });
}


/***/ }),

/***/ 8330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YO: () => (/* binding */ CustomSnackbarProvider),
  Ii: () => (/* binding */ useCustomSnackbar)
});

// UNUSED EXPORTS: CustomSnackbarContent, PopupSnackbarProvider, SnackbarProvider, usePopupCustomSnackbar, useSnackbar

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/index.js + 16 modules
var esm = __webpack_require__(94245);
// EXTERNAL MODULE: ./node_modules/.pnpm/notistack@2.0.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8_react-dom_vt4c2flfh7labhvk5vot2goyiq/node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(45190);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Info.js


/* harmony default export */ const Info = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info'));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Warning.js


/* harmony default export */ const Warning = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Snackbar/index.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { offsetY }, classNames)=>{
    const spinningAnimationKeyFrames = (0,esm/* keyframes */.F4)`
        to {
          transform: rotate(360deg)
        }
    `;
    const title = {
        color: theme.palette.maskColor.main,
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '18px'
    };
    const message = {
        color: theme.palette.maskColor.main,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        lineHeight: '18px',
        wordBreak: 'break-word',
        '& > a': {
            display: 'flex',
            alignItems: 'center'
        },
        '& :focus:not(:focus-visible)': {
            outline: 0
        }
    };
    const defaultVariant = {
        background: theme.palette.maskColor.bottom,
        color: theme.palette.maskColor.main,
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: 'inherit'
        }
    };
    const success = {
        backgroundColor: theme.palette.maskColor.success,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const error = {
        background: theme.palette.maskColor.danger,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const info = {
        background: theme.palette.maskColor.primary,
        color: theme.palette.maskColor.white,
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const warning = {
        backgroundColor: theme.palette.maskColor.warn,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: typeof offsetY !== 'undefined' ? `translateY(${offsetY}px)` : 'none',
            color: vars/* MaskColorVar */.Z.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important'
        },
        // eslint-disable-next-line tss-unused-classes/unused-classes
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > svg': {
                width: 24,
                height: 24
            }
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit',
            transform: 'translateY(-10px)'
        },
        texts: {
            marginLeft: theme.spacing(1.5),
            '& :focus:not(:focus-visible)': {
                outline: 0
            }
        },
        title,
        message
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SuccessForSnackBar, {}),
    error: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TransactionFailed, {}),
    warning: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes, cx } = useStyles({
        offsetY: props.offsetY
    }, {
        props
    });
    const snackbar = (0,notistack_esm/* useSnackbar */.Ds)();
    const loadingIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleLoading, {
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(notistack_esm/* SnackbarContent */.No, {
        ref: ref,
        className: cx(classes.content, classes[props.variant]),
        children: [
            variantIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    });
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react.memo)(function CustomSnackbarProvider({ offsetY, ...rest }) {
    const ref = (0,react.useRef)(null);
    const { classes } = useStyles({
        offsetY
    });
    const onDismiss = (key)=>()=>{
            ref.current?.closeSnackbar(key);
        };
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(notistack_esm/* SnackbarProvider */.wT, {
            ref: ref,
            maxSnack: 30,
            disableWindowBlurListener: true,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            hideIconVariant: true,
            // this is a false positive, SnackbarProvider won't use it like it is a component.
            // eslint-disable-next-line react/no-unstable-nested-components
            content: (key, title)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                    id: key,
                    variant: rest.variant ?? 'default',
                    title: title,
                    offsetY: offsetY
                }),
            // eslint-disable-next-line react/no-unstable-nested-components
            action: (key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "large",
                    onClick: onDismiss(key),
                    sx: {
                        color: 'inherit'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        color: "inherit"
                    })
                }),
            classes: {
                containerRoot: classes.root,
                variantSuccess: classes.success,
                variantError: classes.error,
                variantInfo: classes.info,
                variantWarning: classes.warning
            },
            domRoot: container,
            ...rest
        }));
});
function useCustomSnackbar() {
    const { enqueueSnackbar, closeSnackbar } = (0,notistack_esm/* useSnackbar */.Ds)();
    const showSnackbar = (0,react.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing, message, variant, ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                    variant: variant ?? 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                });
            },
            ...rest
        });
    }, [
        enqueueSnackbar
    ]);
    return {
        showSnackbar,
        closeSnackbar
    };
}


/***/ }),

/***/ 27966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ShadowRootTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70429);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootTooltip = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootTooltip.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 26909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ad: () => (/* binding */ usePortalShadowRoot),
/* harmony export */   lr: () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   vg: () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51573);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);
/* harmony import */ var _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57604);
/* eslint-disable react-hooks/rules-of-hooks */ 




/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer, debugKey) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on DisableShadowRootContext during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .PreventShadowRootEventPropagationListContext */ .N);
    const container = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .iH.portalContainer;
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = debugKey || '';
        const shadow = root.attachShadow(_masknet_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags */ .v.shadowRootInit);
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, _Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .stopPropagation */ .UW, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheet.addContainer(shadow);
        // This is important to make the portal orders correct.
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return container;
    });
    return renderer(container);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            }));
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 57604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ: () => (/* binding */ shadowEnvironmentMountingRoots),
/* harmony export */   eG: () => (/* binding */ setupReactShadowRootEnvironment),
/* harmony export */   iH: () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);
}





/**
 * This container is used to attach the single React root.
 * It does not contain direct DOM decedents.
 * All decedents are mounted via <Portal>.
 */ let globalContainer;
/**
 * This container is prepared for all the Modals.
 */ let portalContainer;
/** @internal */ const shadowEnvironmentMountingRoots = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ObservableMap */ .vP();
function setupReactShadowRootEnvironment(init, preventEventPropagationList, wrapJSX) {
    if (portalContainer) return portalContainer;
    // TODO: make sure globalContainer is the last DOM in the body?
    globalContainer = document.body.appendChild(document.createElement('div'));
    portalContainer = globalContainer.attachShadow(init);
    // Note: This React Root does not expect to have any direct DOM children.
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(globalContainer).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MountingPoint, {
            wrapJSX: wrapJSX,
            preventPropagationList: preventEventPropagationList
        })
    }));
    return portalContainer;
}
function MountingPoint(props) {
    const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        shadowEnvironmentMountingRoots.event.on(shadowEnvironmentMountingRoots.ALL_EVENTS, ()=>{
            setChildren(Array.from(shadowEnvironmentMountingRoots.values()));
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts_js__WEBPACK_IMPORTED_MODULE_4__/* .PreventShadowRootEventPropagationListContext */ .N.Provider, {
        value: props.preventPropagationList,
        children: props.wrapJSX ? props.wrapJSX(children) : children
    });
}
/** @internal */ const ref = {
    get portalContainer () {
        let dom;
        if (location.protocol.includes('extension')) dom = document.body;
        else if (globalThis.location.hostname === 'localhost') return document.body;
        else if (!portalContainer) throw new TypeError('Please call setupPortalShadowRoot first');
        else dom = portalContainer;
        Object.defineProperty(ref, 'mountingPoint', {
            value: dom
        });
        return dom;
    }
};


/***/ }),

/***/ 75607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ useBalance)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96732);







function useBalance(pluginID, options, /** Allow to control the request */ enabled = true) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        chainId,
        ...options
    });
    const { BalanceNotifier } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(pluginID);
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled: !!account && !!Web3 && enabled,
        queryKey: [
            'balance',
            pluginID,
            chainId,
            account,
            options
        ],
        queryFn: async ()=>{
            if (!account) return 0;
            return Web3.getBalance(account, {
                ...options,
                chainId
            });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return BalanceNotifier?.emitter.on('update', (ev)=>{
            if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .W)(account, ev.account)) result.refetch();
        }) ?? lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    }, [
        account,
        result.refetch,
        BalanceNotifier
    ]);
    return result;
}


/***/ }),

/***/ 44909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useChainIdValid(pluginID, expectedChainId) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return (!account || Others.chainResolver.isValidChainId?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 54246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useFungibleToken)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92358);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65327);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72889);







function useFungibleToken(pluginID, address, fallbackToken, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworks */ .e)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: true,
        queryKey: [
            'fungible-token',
            pluginID,
            address,
            chainId,
            options
        ],
        queryFn: async ()=>{
            if (!address) return;
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .attemptUntil */ .C)([
                async ()=>{
                    if (pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM || !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .isNativeTokenAddress */ .qw)(address) || !chainId) return;
                    const network = networks.find((x)=>x.chainId === chainId);
                    return network?.nativeCurrency;
                },
                async ()=>{
                    const token = await Hub.getFungibleToken(address, {
                        chainId
                    });
                    if (!token) return;
                    const logoURL = token.logoURL ?? fallbackToken?.logoURL;
                    const symbol = token.symbol === 'UNKNOWN' || !token.symbol ? fallbackToken?.symbol : token.symbol;
                    return {
                        ...token,
                        symbol,
                        logoURL
                    };
                }
            ], fallbackToken);
        }
    });
}


/***/ }),

/***/ 24637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared network descriptor
 * @param expectedPluginID
 * @param expectedChainIdOrNetworkTypeOrID
 * @returns
 */ function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { networkType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Networks */ .Rm)(pluginID).find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes(expectedChainIdOrNetworkTypeOrID ?? networkType ?? ''));
}


/***/ }),

/***/ 72889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNetworks)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);





/**
 * Bulletin networks and custom networks.
 * There could be duplicate chian id among them, because that's allow to custom networks.
 */ function useNetworks(pluginID, uniqChainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networks ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const list = networks.filter((x)=>x.network === 'mainnet' || x.isCustomized);
        return uniqChainId ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(list, (x)=>x.chainId) : list;
    }, [
        networks,
        uniqChainId
    ]);
}


/***/ }),

/***/ 84305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared provider descriptor
 * @param expectedPluginID
 * @param expectedProviderTypeOrID
 * @returns
 */ function useProviderDescriptor(expectedPluginID, expectedProviderTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { providerType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Providers */ .i8)(pluginID).find((x)=>[
            x.type,
            x.ID
        ].includes(expectedProviderTypeOrID ?? providerType ?? ''));
}


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

/***/ 6379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useReverseAddress)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83977);


function useReverseAddress(pluginID, address, domainOnly) {
    const { NameService } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .d)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'reverse',
            address,
            domainOnly
        ],
        enabled: !!NameService?.reverse,
        queryFn: async ()=>{
            if (!address) return null;
            return await NameService?.reverse?.(address, domainOnly) || null;
        }
    });
}


/***/ }),

/***/ 98170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWallets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41238);




/**
 * Use the currently selected wallet.
 * @param pluginID
 * @returns
 */ function useWallet(pluginID, providerType) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    const wallets = (0,_useWallets_js__WEBPACK_IMPORTED_MODULE_2__/* .useWallets */ .r)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return account ? wallets.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W)?.(x.address, account)) ?? null : null;
    }, [
        account,
        wallets
    ]);
}


/***/ }),

/***/ 41238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44475);





function useWallets() {
    // We got stored Mask wallets only.
    const wallets = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__/* .usePersistSubscription */ .i)('@@mask-wallets', _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Providers */ .Cl[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType */ .lP.MaskWallet].subscription.wallets ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            ...wallets
        ].map((w)=>{
            // Could be serialized by react query persist client
            if (w.createdAt instanceof Date && w.updatedAt instanceof Date) return w;
            return {
                ...w,
                createdAt: new Date(w.createdAt),
                updatedAt: new Date(w.updatedAt)
            };
        }).sort((a, b)=>{
            if (a.owner && !b.owner) return 1;
            const timestampA = a.createdAt.getTime();
            const timestampB = b.createdAt.getTime();
            if (timestampA - timestampB > 10000) {
                return 1;
            } else if (timestampB - timestampA > 10000) {
                return -1;
            }
            const numA = a.name.split('Wallet ')[1];
            const numB = b.name.split('Wallet ')[1];
            try {
                if (!numA && numB && !Number.isNaN(numB)) return 1;
                if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
                    return Number(numA) > Number(numB) ? 1 : -1;
                } else {
                    return numB.length - numA.length;
                }
            } catch  {
                return 0;
            }
        });
    }, [
        wallets
    ]);
}


/***/ }),

/***/ 96732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useWeb3Connection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Connection(expectedPluginID, options) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3All */ .Ph.use(pluginID, options), [
        pluginID,
        JSON.stringify(options)
    ]);
}


/***/ }),

/***/ 61811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useWeb3Hub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Hub(expectedPluginID, options) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .HubAll */ .AB.use(pluginID, options), [
        pluginID,
        JSON.stringify(options)
    ]);
}


/***/ }),

/***/ 36447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done'));

/***/ }),

/***/ 37603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ LoadingButton_LoadingButton)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(38832);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useId.js
var useId = __webpack_require__(48845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(64696);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useThemeProps.js
var useThemeProps = __webpack_require__(15973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(83018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js


const _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];












const useUtilityClasses = ownerState => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0,capitalize/* default */.Z)(loadingPosition)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getLoadingButtonUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
}; // TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core


const rootShouldForwardProp = prop => prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = (0,styled/* default */.ZP)(Button/* default */.Z, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.Z)({
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${LoadingButton_loadingButtonClasses.loading}`]: {
    color: 'transparent'
  }
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
const LoadingButtonLoadingIndicator = (0,styled/* default */.ZP)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0,capitalize/* default */.Z)(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, ownerState.loadingPosition === 'start' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  left: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'start' && ownerState.variant === 'text' && {
  left: 6
}, ownerState.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === 'end' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  right: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'end' && ownerState.variant === 'text' && {
  right: 6
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  position: 'relative',
  left: -10
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  position: 'relative',
  right: -10
}));
const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLoadingButton'
  });

  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = 'center',
    variant = 'text'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const id = (0,useId/* default */.Z)(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState: ownerState,
    children: loadingIndicator
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LoadingButtonRoot, (0,esm_extends/* default */.Z)({
    disabled: disabled || loading,
    id: id,
    ref: ref
  }, other, {
    variant: variant,
    classes: classes,
    ownerState: ownerState,
    children: [ownerState.loadingPosition === 'end' ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === 'end' ? loadingButtonLoadingIndicator : children]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LoadingButton_LoadingButton = (LoadingButton);

/***/ }),

/***/ 79847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(26572);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 48653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4697);
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);


/***/ }),

/***/ 26572:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 4697:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),

/***/ 87167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIsRestoring),
/* harmony export */   u: () => (/* binding */ IsRestoringProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const IsRestoringContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const useIsRestoring = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsRestoringContext);
const IsRestoringProvider = IsRestoringContext.Provider;


//# sourceMappingURL=isRestoring.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.8958.js.map