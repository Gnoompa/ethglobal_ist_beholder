"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[991],{

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

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useAllPersonas)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49588);


function useAllPersonas() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_dom_context_js__WEBPACK_IMPORTED_MODULE_1__/* .allPersonas */ .d4);
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

/***/ 99333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugins/SmartPay/src/base.ts + 7 modules
var base = __webpack_require__(36358);
// EXTERNAL MODULE: ./packages/plugins/SmartPay/src/constants.ts
var constants = __webpack_require__(13966);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(11017);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useAllPersonas.ts
var useAllPersonas = __webpack_require__(81178);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/message.ts
var message = __webpack_require__(9898);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/message.ts


 undefined;
const PluginSmartPayMessages = (0,message/* getPluginMessage */.db)(constants/* PLUGIN_ID */.Uu);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/intersectionWith.js
var intersectionWith = __webpack_require__(43050);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentPersonaInformation.ts



function useCurrentPersonaInformation() {
    const current = (0,use_subscription.useSubscription)(context/* currentPersona */._c ?? Subscriptions/* UNDEFINED */.i_);
    const personas = (0,use_subscription.useSubscription)(context/* allPersonas */.d4);
    return personas?.find((x)=>x.identifier.rawPublicKey === current?.rawPublicKey);
}

// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/hooks/useQueryQualifications.ts








function useQueryQualifications() {
    const currentIdentity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const currentPersona = useCurrentPersonaInformation();
    const wallets = (0,useWallets/* useWallets */.r)();
    const personas = (0,useAllPersonas/* useAllPersonas */.T)();
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!currentIdentity?.identifier?.userId || !currentPersona && !wallets.length || !currentIdentity.isOwner) return {
            hasVerifiedPersona: false
        };
        // If currentPersona is bound, set the currentPersona be signer
        if (currentPersona) {
            const isVerifiedPersona = await entry/* NextIDProof */.q7.queryIsBound(currentPersona.identifier.publicKeyAsHex.toLowerCase(), types/* NextIDPlatform */.V.Twitter, currentIdentity?.identifier?.userId);
            if (isVerifiedPersona) return {
                hasVerifiedPersona: true,
                signPersona: currentPersona
            };
        }
        const response = await entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(types/* NextIDPlatform */.V.Twitter, currentIdentity.identifier.userId);
        const verifiedPersona = (0,intersectionWith/* default */.Z)(personas.map((x)=>({
                ...x,
                persona: x.identifier.publicKeyAsHex.toLowerCase()
            })), response, (a, b)=>a.persona === b.persona);
        const verifiedWallets = (0,intersectionWith/* default */.Z)(wallets.map((x)=>({
                ...x,
                identity: x.address
            })), response.flatMap((x)=>x.proofs.filter((y)=>y.platform === types/* NextIDPlatform */.V.Ethereum && (0,address/* isValidAddress */.At)(y.identity))), (a, b)=>(0,isSameAddress/* isSameAddress */.W)(a.identity, b.identity));
        if (verifiedPersona.length) {
            return {
                hasVerifiedPersona: true
            };
        } else if (verifiedWallets.length) {
            return {
                hasVerifiedPersona: false,
                signWallet: (0,head/* default */.Z)(verifiedWallets)
            };
        }
        return {
            hasVerifiedPersona: false
        };
    }, [
        currentIdentity,
        currentPersona,
        wallets,
        personas
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/SmartPayEntry.tsx












const SmartPayEntry = /*#__PURE__*/ (0,react.memo)((props)=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const personas = (0,useAllPersonas/* useAllPersonas */.T)();
    const { setDialog: setSmartPayDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDialogEvent);
    const { value, loading } = useQueryQualifications();
    const handleClick = (0,react.useCallback)(async ()=>{
        if (loading || !value) return;
        // Contract account already exists
        if (wallets.filter((x)=>x.owner).length) {
            setSmartPayDialog({
                open: true,
                hasAccounts: true,
                signWallet: value.signWallet,
                signPersona: value.signPersona
            });
            return;
        }
        // If there is no persona and no signer
        if (!personas.length && !value.signPersona && !value.signWallet) {
            modals/* LeavePageConfirmModal */.tN.open({
                info: {
                    target: 'dashboard',
                    url: Routes/* DashboardRoutes */.vq.SignUpPersona,
                    text: t.create_persona_hint(),
                    title: t.create_persona_title(),
                    actionHint: t.create_persona_action(),
                    position: 'center'
                },
                openDashboard: context/* openDashboard */.f8
            });
            return;
        }
        // if there is verified persona but current persona isn't verified
        if ((value.hasVerifiedPersona || personas.length) && !value.signPersona && !value.signWallet) {
            return modals/* PersonaSelectPanelModal */.eX.open({
                enableVerify: true,
                finishTarget: PluginID/* PluginID */.P.SmartPay
            });
        }
        return setSmartPayDialog({
            open: true,
            signWallet: value.signWallet,
            signPersona: value.signPersona
        });
    }, [
        loading,
        wallets,
        value,
        personas
    ]);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.applicationDialogEvent.on(({ selectedPersona, pluginID, open })=>{
            if (pluginID !== PluginID/* PluginID */.P.SmartPay) return;
            setSmartPayDialog({
                open,
                signPersona: selectedPersona
            });
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
        ...props,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
            size: 36
        }),
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
            ns: PluginID/* PluginID */.P.SmartPay,
            i18nKey: "__plugin_name"
        }),
        onClick: ()=>props.onClick ? props.onClick() : handleClick()
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(54225);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/hooks/useSmartPayContext.ts


function useSmartPayContext() {
    const [signer, setSigner] = (0,react.useState)();
    return {
        signer,
        setSigner
    };
}
const SmartPayContext = (0,unstated_next/* createContainer */.f)(useSmartPayContext);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./node_modules/.pnpm/@remix-run+router@1.7.2/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(50617);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/locales/i18n_generated.ts
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
function useSmartPayTrans() /**
      * `Smart Pay`
      */ /**
      * `Loading`
      */ /**
      * `Add SmartPay Wallet`
      */ /**
      * `Approve`
      */ /**
      * `To interact with Polygon Network, MATIC tokens are required to pay as gas fees. SmartPay allow users to pay gas fee on Polygon Network with MASK token.`
      */ /**
      * `Do you want to set MASK token as gas fee?`
      */ /**
      * `Allow Mask as gas`
      */ /**
      * `Set MASK tokens to pay gas fee when interacting with Polygon Network.`
      */ /**
      * `Create`
      */ /**
      * `Create a New Wallet`
      */ /**
      * `Create a new Mask wallet in Pop-up.`
      */ /**
      * `Create a New Persona`
      */ /**
      * `Create a new Persona in Pop-up.`
      */ /**
      * `Created successfully!`
      */ /**
      * `Create SmartPay Wallet`
      */ /**
      * `Created a SmartPay Wallet on Ploygon network.`
      */ /**
      * `Congratulation! You’ve deployed SmartPay Wallet {{address}}.`
      */ /**
      * `Management account of the SmartPay Wallet is {{owner}}.`
      */ /**
      * `Receives assets on Polygon Network ONLY`
      */ /**
      * `Current Management account`
      */ /**
      * `Change Owner`
      */ /**
      * `Done`
      */ /**
      * `Deploy`
      */ /**
      * `What to know before SmartPay Wallet deployment:`
      */ /**
      * `User need to deploy the SmartPay Wallet on Polygon Network before using it for blockchain interaction. Wallet that has not been deployed can receive assets, but cannot send any transactions.`
      */ /**
      * `You can change management account of SmartPay Wallet. In Mask Network, both Persona and Mask Wallet can be authorized as management account.`
      */ /**
      * `Users can use SmartPay Wallet (free gas fee and private key change) only on Polygon Network at the moment.`
      */ /**
      * `This SmartPay Wallet can only receive assets on Polygon Network. Please do not use this address to receive assets from other EVM chains.`
      */ /**
      * `The ERC-4337 will open the door to more creativity and more important features for wallet design.`
      */ /**
      * `Multisigs and social recovery`
      */ /**
      * `More efficient and simpler signature algorithms (eg. Schnorr, BLS)`
      */ /**
      * `Post-quantum safe signature algorithms (eg. Lamport, Winternitz)`
      */ /**
      * `Upgradeability`
      */ /**
      * `Lucky Drop`
      */ /**
      * `Manage Account`
      */ /**
      * `Sorry, you are not in the free trial whitelist.`
      */ /**
      * `You are in the trial whitelist.`
      */ /**
      * `Create a SmartPay Wallet with your Twitter account.`
      */ /**
      * `Swap`
      */ /**
      * `SmartPay Wallet`
      */ /**
      * `SmartPay Wallet Deployment`
      */ /**
      * `Set up the Management Account for SmartPay Wallet`
      */ /**
      * `Send`
      */ /**
      * `SmartPay is based on ERC-4337 and is currently deployed on Polygon Network. Multiple chains will be supported in the future. ERC-4337 is a new wallet proposal that would open the door for creativity in wallet design and could provide more important features. And we will design more fascinating features based on the new wallet proposal in Mask Network.`
      */ /**
      * `You need to know before using SmartPay:`
      */ /**
      * `Free gas experience in Mask Network’s dApps like Lucky Drop and Tips.`
      */ /**
      * `Your private key and Json file can only be used in SmartPay.`
      */ /**
      * `Scan address to receive payment`
      */ /**
      * `MASK token can be used to pay gas fee.`
      */ /**
      * `The Twitter account above remains {{count}} time to create SmartPay Wallet.`
      */ /**
      * `The Twitter account above remains {{count}} times to create SmartPay Wallet.`
      */ /**
      * `Personas`
      */ /**
      * `Receive`
      */ /**
      * `Timeout`
      */ /**
      * `Transaction submitted.`
      */ /**
      * `Transaction rejected.`
      */ /**
      * `User cancelled the process.`
      */ /**
      * `Network error.`
      */ /**
      * `Wallets`
      */ /**
      * `Waiting for user signature`
      */ /**
      * `What is SmartPay`
      */ /**
      * `What is SmartPay?`
      */ /**
      * - deploy_tips_description_one: `User need to deploy the SmartPay Wallet on Polygon Network before using it for blockchain interaction. Wallet that has not been deployed can receive assets, but cannot send any transactions.`
    
      * - deploy_tips_description_two: `You can change management account of SmartPay Wallet. In Mask Network, both Persona and Mask Wallet can be authorized as management account.`
      */ /**
      * - erc_4337_features_one: `Multisigs and social recovery`
    
      * - erc_4337_features_two: `More efficient and simpler signature algorithms (eg. Schnorr, BLS)`
      */ /**
      * - remain_times_tips_one: `The Twitter account above remains {{count}} time to create SmartPay Wallet.`
    
      * - remain_times_tips_other: `The Twitter account above remains {{count}} times to create SmartPay Wallet.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.mask.smart-pay");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react.createElement)(es/* Trans */.cC, {
            i18nKey,
            ns: "com.mask.smart-pay",
            shouldUnescape: true,
            ...props
        });
}
const SmartPayTrans = /**
      * `You can follow Mask Network <Link>Twitter</Link> or <Discord>Discord</Discord> to participate in the event and get free qualification to have gas-free blockchain experiences with SmartPay. Soon we will publish the second batch of users participating in the test!`
      */ /**
      * `Click <Link>here</Link> and fill the SmartPay Wallet whitelist application form.`
      */ /**
      * `<strong>Your smart contract wallet is only deployed on Polygon Network for now. Please do not receive funds on other chains with the same address. </strong> We will support more chains in the future.`
      */ /**
      * - setup_smart_pay_one: `<strong>Your smart contract wallet is only deployed on Polygon Network for now. Please do not receive funds on other chains with the same address. </strong> We will support more chains in the future.`
    
      * - setup_smart_pay_two: `Free gas experience in Mask Network’s dApps like Lucky Drop and Tips.`
      */ /*#__PURE__*/ createProxy(createComponent);

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useBoolean.js
var useBoolean = __webpack_require__(78937);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box_Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaAction/PersonaAction.tsx
var PersonaAction = __webpack_require__(41253);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/WalletDescription.tsx
var WalletDescription = __webpack_require__(58307);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(11796);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Persona.ts
var Persona = __webpack_require__(3545);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/hooks/useDeploy.tsx















function useDeploy(signPersona, signWallet, signAccount, contractAccount, nonce, onSuccess) {
    const snackbarKeyRef = (0,react.useRef)();
    const t = useSmartPayTrans();
    const { TransactionWatcher, Transaction } = (0,useWeb3State/* useWeb3State */.d)();
    const lastRecognizedIdentity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { showSnackbar, closeSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const showSingletonSnackbar = (0,react.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = showSnackbar(title, options);
        return ()=>{
            closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar
    ]);
    const { closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDialogEvent);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            const options = {
                account: undefined,
                chainId,
                providerType: src_types/* ProviderType */.lP.MaskWallet,
                signal: AbortSignal.timeout(5 * 60 * 1000)
            };
            if (!chainId || !lastRecognizedIdentity?.isOwner || !lastRecognizedIdentity?.identifier?.userId || !signAccount?.address || !contractAccount || !signPersona && !signWallet) return;
            const hasPassword = await (0,context/* hasPaymentPassword */.Vf)();
            if (!hasPassword) return (0,context/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.SetPaymentPassword, {});
            if (contractAccount.funded && !contractAccount.deployed) {
                const hash = await entry/* Web3 */.Bv.deploy?.(signAccount.address, signAccount.identifier, options);
                if (!hash) return;
                const result = await entry/* Web3 */.Bv.confirmTransaction(hash, options);
                if (!result?.status) return;
                onSuccess?.();
                return result?.transactionHash;
            }
            const payload = JSON.stringify({
                twitterHandle: lastRecognizedIdentity.identifier.userId,
                ts: (0,getUnixTime/* default */.Z)(new Date()),
                ownerAddress: signAccount.address,
                nonce
            });
            let signature;
            showSingletonSnackbar(t.create_smart_pay_wallet(), {
                message: t.waiting_for_user_signature(),
                processing: true,
                variant: 'default'
            });
            if (signPersona) {
                signature = await (0,context/* signWithPersona */.MN)(Account/* SignType */.A.Message, payload, signPersona.identifier);
            } else if (signWallet) {
                signature = await entry/* Web3 */.Bv.signMessage('message', payload, options);
            }
            const publicKey = signPersona ? signPersona.identifier.publicKeyAsHex : signWallet?.address;
            if (!signature || !publicKey) return;
            closeSnackbar();
            const hash = await entry/* Web3 */.Bv.fund?.({
                publicKey,
                type: signPersona ? Persona/* ProofType */.e.Persona : Persona/* ProofType */.e.EOA,
                signature,
                payload
            }, options);
            if (!hash) throw new Error('Deploy Failed');
            const result = await entry/* Web3 */.Bv.confirmTransaction(hash, options);
            if (!result?.status) return;
            const deployHash = await entry/* Web3 */.Bv.deploy?.(signAccount.address, signAccount.identifier, options);
            if (!deployHash) return;
            const deployResult = await entry/* Web3 */.Bv.confirmTransaction(deployHash, options);
            if (!deployResult?.status) return;
            await Transaction?.removeTransaction?.(chainId, '', hash);
            await Transaction?.removeTransaction?.(chainId, '', deployHash);
            onSuccess?.();
            return deployResult.transactionHash;
        } catch (error) {
            if (error instanceof Error) {
                let message = '';
                switch(error.message){
                    case 'Failed To Fund':
                        message = t.transaction_rejected();
                        break;
                    case 'Persona Rejected':
                        message = t.user_cancelled_the_transaction();
                        break;
                    case 'Timeout':
                        message = t.timeout();
                        break;
                    default:
                        message = t.network_error();
                }
                showSingletonSnackbar(t.create_smart_pay_wallet(), {
                    processing: false,
                    variant: 'error',
                    message: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: message
                    })
                });
                if (error.message === 'Timeout') {
                    closeDialog();
                }
            }
        }
    }, [
        chainId,
        signAccount,
        lastRecognizedIdentity,
        signWallet,
        signPersona,
        contractAccount,
        nonce,
        onSuccess,
        TransactionWatcher,
        Transaction
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/hooks/useManagers.ts



function useManagers() {
    const wallets = (0,useWallets/* useWallets */.r)();
    const personaManagers = (0,useAllPersonas/* useAllPersonas */.T)();
    const walletManagers = (0,react.useMemo)(()=>wallets.filter((x)=>!x.owner), [
        wallets
    ]);
    return {
        personaManagers,
        walletManagers
    };
}

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/type.ts
var ManagerAccountType;
(function(ManagerAccountType) {
    ManagerAccountType["Wallet"] = "Wallet";
    ManagerAccountType["Persona"] = "Persona";
})(ManagerAccountType || (ManagerAccountType = {}));

// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(82161);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/CreateSuccessDialog.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            margin: 0,
            width: 320,
            backgroundColor: theme.palette.maskColor.bottom
        },
        content: {
            padding: '29px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        title: {
            color: theme.palette.maskColor.success,
            marginTop: 30,
            marginBottom: 24,
            fontSize: 20,
            fontWeight: 700,
            lineHeight: '24px',
            textAlign: 'center'
        },
        description: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            lineHeight: '18px'
        }
    }));
function CreateSuccessDialog({ open, onClose, address, owner }) {
    const t = useSmartPayTrans();
    const { classes } = useStyles();
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
            container: container,
            open: open,
            onClose: (_, reason)=>{
                if (reason === 'backdropClick') return;
                onClose();
            },
            classes: {
                paper: classes.paper
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FillSuccess, {
                            size: 50
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: t.create_successfully()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.description,
                            children: t.create_successfully_tips({
                                address: (0,formatter/* formatEthereumAddress */.j8)(address, 4)
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.description,
                            sx: {
                                marginTop: 2
                            },
                            children: t.create_successfully_tips_owner({
                                owner
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                    sx: {
                        p: 3
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        variant: "roundedContained",
                        onClick: onClose,
                        children: t.done()
                    })
                })
            ]
        }));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Popover/Popover.js
var Popover = __webpack_require__(66069);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/ManagePopover.tsx













const ManagePopover_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            background: theme.palette.maskColor.bottom,
            padding: theme.spacing(1.5, 1.5, 2, 1.5),
            boxSizing: 'border-box',
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
            borderRadius: 16,
            maxHeight: 296,
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        title: {
            color: theme.palette.maskColor.main,
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700
        },
        list: {
            padding: theme.spacing(2, 0),
            display: 'flex',
            flexDirection: 'column',
            rowGap: 10
        },
        item: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        identity: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            lineHeight: '18px',
            display: 'flex',
            columnGap: '2px',
            alignItems: 'center'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        desc: {
            fontSize: 14,
            lineHeight: '18px'
        }
    }));
const ManagePopover = /*#__PURE__*/ (0,react.memo)(({ open, anchorEl, onClose, onSelect, selectedAddress })=>{
    const t = useSmartPayTrans();
    const { classes } = ManagePopover_useStyles();
    const { personaManagers, walletManagers } = useManagers();
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
            disableScrollLock: true,
            container: container,
            open: open,
            anchorEl: anchorEl,
            onClose: onClose,
            PaperProps: {
                style: {
                    minWidth: `${anchorEl?.clientWidth ?? 568}px`
                },
                className: classes.paper
            },
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
            },
            disableRestoreFocus: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.personas()
                }),
                personaManagers.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                    className: classes.list,
                    children: personaManagers.map((persona, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            className: classes.item,
                            onClick: ()=>onSelect({
                                    type: ManagerAccountType.Persona,
                                    name: persona.nickname,
                                    address: persona.address,
                                    identifier: persona.identifier
                                }),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: 0.5,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                            size: 30
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.title,
                                                    children: persona.nickname
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    className: classes.identity,
                                                    children: [
                                                        (0,personas/* formatPersonaFingerprint */.Nb)(persona.identifier.rawPublicKey, 4),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                            size: 14,
                                                            text: persona.identifier.rawPublicKey
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                                    checked: (0,isSameAddress/* isSameAddress */.W)(persona.address, selectedAddress)
                                })
                            ]
                        }, index))
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    className: classes.footer,
                    sx: {
                        py: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t.create_a_new_persona_title()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.desc,
                                    children: t.create_a_new_persona_desc()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "roundedContained",
                            size: "small",
                            sx: {
                                height: 32
                            },
                            onClick: ()=>(0,context/* openDashboard */.f8)(Routes/* DashboardRoutes */.vq.SignUpPersona),
                            children: t.create()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.wallets()
                }),
                walletManagers.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                    className: classes.list,
                    children: walletManagers.map((wallet, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            className: classes.item,
                            onClick: ()=>onSelect({
                                    type: ManagerAccountType.Wallet,
                                    name: wallet.name,
                                    address: wallet.address
                                }),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: 0.5,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                            size: 30
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.title,
                                                    children: wallet.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    className: classes.identity,
                                                    children: [
                                                        (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 4),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                            size: 14,
                                                            text: wallet.address
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                                    checked: (0,isSameAddress/* isSameAddress */.W)(selectedAddress, wallet.address)
                                })
                            ]
                        }, index))
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    className: classes.footer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t.create_a_new_wallet_title()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.desc,
                                    children: t.create_a_new_wallet_desc()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "roundedContained",
                            size: "small",
                            sx: {
                                height: 32
                            },
                            onClick: ()=>(0,context/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.WalletStartUp, undefined),
                            children: t.create()
                        })
                    ]
                })
            ]
        }));
});

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/SmartPayBanner.tsx




const SmartPayBanner_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            borderRadius: 12,
            padding: theme.spacing(2, 2, 2, 16),
            display: 'flex',
            alignItems: 'center',
            background: `url(${new URL(/* asset import */ __webpack_require__(27384), __webpack_require__.b).toString()})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: 90,
            boxSizing: 'border-box'
        },
        tips: {
            '& > p': {
                color: theme.palette.maskColor.publicMain,
                fontSize: 16,
                fontWeight: 700,
                lineHeight: '120%',
                width: '100%',
                wordBreak: 'break-word'
            }
        }
    }));
const SmartPayBanner = /*#__PURE__*/ (0,react.memo)(({ children })=>{
    const { classes } = SmartPayBanner_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
        className: classes.card,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.tips,
            children: children
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/Deploy.tsx



























const Deploy_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        walletDescription: {
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px);',
            borderRadius: 12,
            marginTop: theme.spacing(1.5),
            padding: theme.spacing(2),
            display: 'flex',
            justifyContent: 'space-between'
        },
        badge: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        address: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            columnGap: 2
        },
        select: {
            cursor: 'pointer',
            backgroundColor: theme.palette.maskColor.input,
            borderRadius: 12,
            padding: theme.spacing(1.5),
            marginTop: theme.spacing(1.5)
        },
        selectTitle: {
            color: theme.palette.maskColor.second,
            fontSize: 13,
            lineHeight: '18px'
        },
        maskIcon: {
            filter: 'drop-shadow(0px 6px 12px rgba(0, 65, 185, 0.2))',
            backdropFilter: 'blur(8px)'
        },
        arrow: {
            color: theme.palette.maskColor.second
        },
        tips: {
            marginTop: theme.spacing(1.5),
            padding: theme.spacing(1.5),
            backgroundColor: theme.palette.maskColor.bg,
            borderRadius: 12,
            maxHeight: 200,
            boxSizing: 'border-box',
            overflowY: 'scroll',
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        stateBar: {
            position: 'sticky',
            bottom: 0,
            boxShadow: `0px 0px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.shadowBottom, theme.palette.mode === 'dark' ? 0.12 : 0.05)}`,
            backgroundColor: theme.palette.maskColor.bottom
        },
        walletStatus: {
            height: 68,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: theme.spacing(2),
            boxShadow: theme.palette.shadow.popup
        },
        content: {
            padding: theme.spacing(2),
            minHeight: 564,
            boxSizing: 'border-box'
        },
        bottomFixed: {
            height: 68,
            boxSizing: 'border-box'
        }
    }));
function Deploy({ open }) {
    const t = useSmartPayTrans();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { classes } = Deploy_useStyles();
    const wallets = (0,useWallets/* useWallets */.r)();
    const currentPersona = useCurrentPersonaInformation();
    const [successDialogOpen, toggle] = (0,useBoolean/* default */.Z)(false);
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [manager, setManager] = (0,react.useState)();
    const { personaManagers, walletManagers } = useManagers();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDialogEvent);
    const { signer } = SmartPayContext.useContainer();
    const { signWallet, signPersona } = signer || {};
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, src_types/* ProviderType */.lP.MaskWallet);
    const polygonDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const currentVisitingProfile = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const { value: avatar } = (0,useAsync/* default */.Z)(async ()=>{
        if (signPersona) return (0,context/* queryPersonaAvatar */.Tk)(signPersona.identifier);
        return null;
    }, [
        signPersona
    ]);
    // #region get contract account
    const { value, loading: queryContractLoading } = (0,useAsync/* default */.Z)(async ()=>{
        if (!manager?.address || !open || !chainId) return;
        const accounts = await entry/* SmartPayOwner */.Lf.getAccountsByOwner(chainId, manager.address, false);
        const nonce = accounts.filter((x)=>x.deployed && (0,isSameAddress/* isSameAddress */.W)(manager.address, x.creator)).length;
        return {
            account: accounts[nonce],
            nonce
        };
    }, [
        manager,
        open,
        chainId
    ]);
    // #endregion
    const { account: contractAccount, nonce } = value ?? {};
    const [{ loading: deployLoading }, handleDeploy] = useDeploy(signPersona, signWallet, manager, contractAccount, nonce, toggle);
    const handleSelectManager = (0,react.useCallback)((manager)=>{
        setManager(manager);
        setAnchorEl(null);
    }, []);
    (0,react.useEffect)(()=>{
        if (manager) return;
        if (personaManagers?.length) {
            const firstPersona = (0,head/* default */.Z)(personaManagers);
            setManager({
                type: ManagerAccountType.Persona,
                name: firstPersona?.nickname,
                address: firstPersona?.address,
                identifier: firstPersona?.identifier
            });
            return;
        } else if (walletManagers) {
            const firstWallet = (0,head/* default */.Z)(walletManagers);
            setManager({
                type: ManagerAccountType.Wallet,
                name: firstWallet?.name,
                address: firstWallet?.address
            });
            return;
        }
    }, [
        personaManagers,
        walletManagers,
        manager
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (signer?.signPersona && currentPersona?.identifier.publicKeyAsHex !== signer.signPersona.identifier.publicKeyAsHex || signer?.signWallet && !wallets.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, signer.signWallet?.address))) {
            closeDialog();
        }
    }, [
        currentPersona,
        signer,
        wallets
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SmartPayBanner, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t.white_list_tips()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t.personas_description()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                        className: classes.walletDescription,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                display: "flex",
                                alignItems: "center",
                                columnGap: 1.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                        position: "relative",
                                        width: 30,
                                        height: 30,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                                                size: 30
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                                className: classes.badge,
                                                size: 12,
                                                icon: polygonDescriptor?.icon
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                lineHeight: "18px",
                                                fontWeight: 700,
                                                children: "SmartPay Wallet"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.address,
                                                children: queryContractLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                                                    size: 14
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        (0,formatter/* formatEthereumAddress */.j8)(contractAccount?.address ?? '', 4),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                            size: 14,
                                                            text: contractAccount?.address ?? ''
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                display: "flex",
                                alignItems: "flex-end",
                                columnGap: 0.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        lineHeight: "18px",
                                        fontWeight: 700,
                                        children: "$"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: 24,
                                        fontWeight: 700,
                                        lineHeight: "1.2",
                                        children: "0.00"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                        className: classes.select,
                        onMouseDown: (event)=>{
                            event.stopPropagation();
                            event.preventDefault();
                            setAnchorEl(event.currentTarget);
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.selectTitle,
                                children: t.setup_smart_pay_managed_account()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 0.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: 1,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                                size: 24,
                                                className: classes.maskIcon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                fontSize: 18,
                                                fontWeight: 700,
                                                lineHeight: "22px",
                                                children: manager?.type === 'Persona' ? (0,personas/* formatPersonaFingerprint */.Nb)(manager?.identifier?.rawPublicKey ?? '', 4) : (0,formatter/* formatEthereumAddress */.j8)(manager?.address ?? '', 4)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                        className: classes.arrow,
                                        size: 24
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ManagePopover, {
                                open: !!anchorEl,
                                anchorEl: anchorEl,
                                onClose: ()=>{
                                    setAnchorEl(null);
                                },
                                selectedAddress: manager?.address,
                                onSelect: handleSelectManager
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                        className: classes.tips,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t.deploy_tips_title()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                component: "ol",
                                pl: 1.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "li",
                                        children: t.deploy_tips_description_one()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "li",
                                        children: t.deploy_tips_description_two()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "li",
                                        children: t.deploy_tips_description_three()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "li",
                                        children: t.deploy_tips_description_four()
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                className: classes.stateBar,
                children: signPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAction/* PersonaAction */.D, {
                    classes: {
                        bottomFixed: classes.bottomFixed
                    },
                    avatar: avatar !== null ? avatar : undefined,
                    currentPersona: signPersona,
                    currentVisitingProfile: currentVisitingProfile,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        onClick: handleDeploy,
                        loading: deployLoading,
                        disabled: deployLoading || queryContractLoading || !signPersona,
                        variant: "roundedContained",
                        children: t.deploy()
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    className: classes.walletStatus,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletDescription/* WalletDescription */.a, {
                            pending: false,
                            providerIcon: providerDescriptor?.icon,
                            networkIcon: polygonDescriptor?.icon,
                            iconFilterColor: providerDescriptor?.iconFilterColor,
                            name: signWallet?.name,
                            formattedAddress: signWallet?.address ? (0,formatter/* formatEthereumAddress */.j8)(signWallet.address, 4) : undefined,
                            addressLink: signWallet?.address && chainId ? entry/* ExplorerResolver */.Xz.addressLink(chainId, signWallet?.address) : undefined
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                            onClick: handleDeploy,
                            loading: deployLoading,
                            disabled: deployLoading || queryContractLoading || !signWallet,
                            variant: "roundedContained",
                            children: t.deploy()
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateSuccessDialog, {
                open: successDialogOpen,
                onClose: async ()=>{
                    if (!contractAccount) return;
                    await entry/* Web3 */.Bv.addWallet?.({
                        name: 'Smart pay',
                        address: contractAccount?.address
                    }, {
                        providerType: src_types/* ProviderType */.lP.MaskWallet,
                        account: '',
                        chainId
                    });
                    toggle();
                    navigate(constants/* RoutePaths */.s2.Main);
                },
                address: contractAccount?.address ?? '',
                owner: `${manager?.type === 'Persona' ? 'Persona' : 'Mask Wallet'} ${manager?.name}`
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/InEligibilityTips.tsx






const InEligibilityTips_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialogContent: {
            padding: theme.spacing(2),
            minHeight: 564,
            boxSizing: 'border-box',
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        description: {
            marginTop: theme.spacing(1.5),
            color: theme.palette.maskColor.second,
            fontSize: 14,
            lineHeight: '18px',
            '& > a': {
                color: theme.palette.maskColor.highlight
            }
        }
    }));
const InEligibilityTips = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes } = InEligibilityTips_useStyles();
    const t = useSmartPayTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
        className: classes.dialogContent,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayBanner, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.ineligibility_tips()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayTrans.eligibility_description, {
                    components: {
                        Link: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: "https://twitter.com/realMaskNetwork",
                            rel: "noopener noreferrer",
                            target: "_blank"
                        }),
                        Discord: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: "https://discord.com/invite/4SVXvj7",
                            rel: "noopener noreferrer",
                            target: "_blank"
                        })
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayTrans.eligibility_query, {
                    components: {
                        Link: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: "https://forms.gle/HpzvPVj1MUQmw5Rp9",
                            rel: "noopener noreferrer",
                            target: "_blank"
                        })
                    }
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sum.js
var sum = __webpack_require__(15337);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNaN.js
var lodash_es_isNaN = __webpack_require__(25231);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(92935);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/ApproveMaskDialog.tsx
var ApproveMaskDialog = __webpack_require__(17903);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleAssets.ts
var useFungibleAssets = __webpack_require__(35681);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants_constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/getTokenUSDValue.ts

function getTokenUSDValue(value) {
    return value ? Number.parseFloat(value[specs/* CurrencyType */.V2.USD] ?? '') : 0;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(61918);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Icon/index.tsx + 1 modules
var Icon = __webpack_require__(28236);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/AddSmartPayPopover.tsx

















const AddSmartPayPopover_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            padding: theme.spacing(3),
            background: theme.palette.maskColor.bottom,
            maxWidth: 320
        },
        title: {
            fontSize: 16,
            fontWeight: 700,
            lineHeight: '20px',
            textAlign: 'center'
        },
        info: {
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(1.5),
            columnGap: theme.spacing(1.5)
        },
        name: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px'
        },
        identifier: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            lineHeight: '18px'
        },
        tips: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            lineHeight: '18px',
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5)
        }
    }));
const AddSmartPayPopover = /*#__PURE__*/ (0,react.memo)(({ open, anchorEl, onClose })=>{
    const t = useSmartPayTrans();
    const sharedI18N = (0,i18n_generated/* useSharedTrans */.j)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { classes } = AddSmartPayPopover_useStyles();
    const { setSigner } = SmartPayContext.useContainer();
    const personas = (0,useAllPersonas/* useAllPersonas */.T)();
    const currentProfile = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const { value = 0, retry } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!currentProfile?.identifier?.userId) return 0;
        return entry/* SmartPayFunder */.jI.getRemainFrequency(currentProfile.identifier.userId);
    }, [
        currentProfile
    ]);
    const { value: qualifications, loading } = useQueryQualifications();
    const { closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDialogEvent);
    const handleCreate = (0,react.useCallback)(()=>{
        if (loading || !qualifications) return;
        // If there is no persona and no signer
        if (!personas.length && !qualifications.signPersona && !qualifications.signWallet) {
            modals/* LeavePageConfirmModal */.tN.open({
                openDashboard: context/* openDashboard */.f8,
                info: {
                    target: 'dashboard',
                    url: Routes/* DashboardRoutes */.vq.SignUpPersona,
                    text: sharedI18N.create_persona_hint(),
                    title: sharedI18N.create_persona_title(),
                    actionHint: sharedI18N.create_persona_action(),
                    position: 'center'
                }
            });
            return;
        }
        // if there is verified persona but current persona isn't verified
        if ((qualifications.hasVerifiedPersona || personas.length) && !qualifications.signPersona && !qualifications.signWallet) {
            modals/* PersonaSelectPanelModal */.eX.open({
                enableVerify: true,
                finishTarget: PluginID/* PluginID */.P.SmartPay
            });
            return;
        }
        setSigner({
            signPersona: qualifications?.signPersona,
            signWallet: qualifications?.signWallet
        });
        navigate(constants/* RoutePaths */.s2.Deploy, {
            state: {
                canBack: true
            }
        });
    }, [
        loading,
        qualifications
    ]);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.applicationDialogEvent.on(({ selectedPersona, pluginID, open })=>{
            if (!open) return closeDialog();
            if (pluginID !== PluginID/* PluginID */.P.SmartPay) return;
            setSigner({
                signPersona: selectedPersona
            });
            navigate(constants/* RoutePaths */.s2.Deploy, {
                state: {
                    canBack: true
                }
            });
        });
    }, [
        closeDialog
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!open) return;
        retry();
    }, [
        open
    ]);
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
            disableScrollLock: true,
            container: container,
            open: open,
            onClose: onClose,
            anchorEl: anchorEl,
            disableRestoreFocus: true,
            classes: {
                paper: classes.paper
            },
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
            },
            transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.add_smart_pay_wallet()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    className: classes.info,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
                            logoURL: currentProfile?.avatar,
                            name: currentProfile?.nickname,
                            size: 30
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.name,
                                    children: currentProfile?.nickname
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.identifier,
                                    children: [
                                        "@",
                                        currentProfile?.identifier?.userId
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.tips,
                    children: t.remain_times_tips({
                        count: value
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    variant: "roundedContained",
                    onClick: handleCreate,
                    children: t.create()
                })
            ]
        }));
});

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/AccountsManagePopover.tsx











const AccountsManagePopover_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            padding: theme.spacing(3),
            background: theme.palette.maskColor.bottom,
            width: 320,
            filter: theme.palette.mode === 'light' ? 'drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.1))' : 'drop-shadow(0px 4px 30px rgba(255, 255, 255, 0.15))',
            boxShadow: theme.palette.mode === 'light' ? '0px 4px 30px 0px rgba(0, 0, 0, 0.1)' : '0px 4px 30px 0px rgba(255, 255, 255, 0.15)'
        },
        title: {
            fontSize: 16,
            fontWeight: 700,
            lineHeight: '20px',
            textAlign: 'center'
        },
        second: {
            fontSIze: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        name: {
            fontSIze: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            fontWeight: 700
        },
        changeOwner: {
            height: 32,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700,
            padding: '8px 12px'
        }
    }));
const AccountsManagerPopover = /*#__PURE__*/ (0,react.memo)(({ open, anchorEl, onClose, address, owner, name })=>{
    const t = useSmartPayTrans();
    const { classes } = AccountsManagePopover_useStyles();
    const { personaManagers, walletManagers } = useManagers();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const account = (0,useAccount/* useAccount */.m)();
    const network = (0,useNetwork/* useNetwork */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { Network } = (0,useWeb3State/* useWeb3State */.d)();
    const connection = (0,useWeb3Connection/* useWeb3Connection */.T)();
    const ownerInfo = (0,react.useMemo)(()=>{
        const persona = personaManagers?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, owner));
        if (persona) return {
            name: persona.nickname,
            publicKey: (0,personas/* formatPersonaFingerprint */.Nb)(persona.identifier.rawPublicKey, 4)
        };
        const wallet = walletManagers?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, owner));
        if (!wallet) return;
        return {
            name: wallet.name,
            publicKey: (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 4)
        };
    }, [
        owner,
        personaManagers,
        walletManagers
    ]);
    const handleChangeOwner = (0,react.useCallback)(async ()=>{
        // switch account
        if (!(0,isSameAddress/* isSameAddress */.W)(address, account)) {
            await connection.connect({
                account: address,
                chainId,
                providerType: src_types/* ProviderType */.lP.MaskWallet,
                silent: true
            });
            if (network) await Network?.switchNetwork(network.ID);
        }
        await (0,context/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.ChangeOwner, {
            contractAccount: address
        });
    }, [
        address,
        connection,
        account,
        chainId,
        network
    ]);
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
            disableScrollLock: true,
            container: container,
            open: open,
            onClose: onClose,
            anchorEl: anchorEl,
            disableRestoreFocus: true,
            classes: {
                paper: classes.paper
            },
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
            },
            transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.managed_accounts()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    mt: 1.5,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.name,
                            children: name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.second,
                            children: (0,formatter/* formatEthereumAddress */.j8)(address ?? '', 4)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.second,
                    my: 1.5,
                    children: t.current_manage_account()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    component: "div",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.name,
                                    children: ownerInfo?.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.second,
                                    children: ownerInfo?.publicKey
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.changeOwner,
                            variant: "roundedContained",
                            onClick: handleChangeOwner,
                            children: t.change_owner()
                        })
                    ]
                })
            ]
        }));
});

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/SmartPayContent.tsx





















const SmartPayContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialogContent: {
            padding: theme.spacing(2),
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        dialogActions: {
            padding: '12px 12px 20px !important',
            display: 'flex',
            justifyContent: 'space-between',
            background: theme.palette.maskColor.secondaryBottom,
            backdropFilter: 'blur(16px)',
            columnGap: 12,
            '& > *': {
                marginLeft: '0px !important',
                fontSize: 12
            }
        },
        card: {
            background: theme.palette.maskColor.modalTitleBg,
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            borderRadius: 12,
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            color: theme.palette.maskColor.main,
            position: 'relative'
        },
        badge: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        address: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            columnGap: 2,
            marginTop: 4
        },
        list: {
            marginTop: theme.spacing(1.5),
            display: 'flex',
            flexDirection: 'column',
            rowGap: theme.spacing(1),
            paddingTop: 0,
            height: 309,
            overflow: 'scroll',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        listItem: {
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 8,
            padding: theme.spacing(1, 1.5),
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            }
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: theme.palette.maskColor.second,
            lineHeight: '18px',
            columnGap: 4
        },
        balance: {
            textAlign: 'right',
            '& > span': {
                fontSize: 16,
                lineHeight: '20px',
                fontWeight: 700
            }
        },
        maskGasTip: {
            color: theme.palette.maskColor.highlight,
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        linkIcon: {
            color: theme.palette.maskColor.second,
            cursor: 'pointer',
            height: 14
        },
        menu: {
            padding: theme.spacing(1.5),
            maxHeight: 320
        },
        menuPaper: {
            background: theme.palette.maskColor.bottom,
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        }
    }));
const SmartPayContent = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = useSmartPayTrans();
    const { classes } = SmartPayContent_useStyles();
    const [approveDialogOpen, setApproveDialogOpen] = (0,react.useState)(false);
    const [addAnchorEl, setAddAnchorEl] = (0,react.useState)(null);
    const [manageAnchorEl, setManageAnchorEl] = (0,react.useState)(null);
    const wallets = (0,useWallets/* useWallets */.r)();
    const contractAccounts = (0,react.useMemo)(()=>wallets.filter((x)=>x.owner), [
        wallets
    ]);
    // #region Remote Dialog Controller
    const { setDialog: setReceiveDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.receiveDialogEvent);
    const { openDialog: openSwapDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(CrossIsolationEvents/* CrossIsolationMessages */.W.events.swapDialogEvent);
    const { closeDialog, open: smartPayDialogOpen } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDialogEvent);
    // #endregion
    // #region web3 state
    const { account, chainId, setAccount } = (0,useContext/* useChainContext */.ql)();
    const wallet = (0,react.useMemo)(()=>{
        return contractAccounts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, account));
    }, [
        contractAccounts,
        account
    ]);
    const maskAddress = entry/* Others */.ej.getMaskTokenAddress(chainId);
    const polygonDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { data: assets, refetch: refreshAssets } = (0,useFungibleAssets/* useFungibleAssets */.C)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, undefined, {
        chainId
    });
    const { data: maskToken } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, maskAddress, undefined, {
        chainId
    });
    const { PAYMASTER_MASK_CONTRACT_ADDRESS } = (0,constants_constants/* useSmartPayConstants */.Fd)(chainId);
    const { data: allowance = '0' } = (0,useERC20TokenAllowance/* useERC20TokenAllowance */.n)(maskAddress, PAYMASTER_MASK_CONTRACT_ADDRESS, {
        chainId
    });
    const availableBalanceTooLow = (0,number/* isLessThan */.FI)((0,formatBalance/* formatBalance */.a)(allowance, maskToken?.decimals), 0.1);
    const balance = (0,react.useMemo)(()=>{
        if (!assets?.length) return 0;
        const values = assets.map((x)=>getTokenUSDValue(x.value));
        return (0,sum/* default */.Z)(values);
    }, [
        assets
    ]);
    // #endregion
    const currentProfile = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const { value = 0, retry: refreshRemainFrequency } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!currentProfile?.identifier?.userId) return 0;
        return entry/* SmartPayFunder */.jI.getRemainFrequency(currentProfile.identifier.userId);
    }, [
        currentProfile
    ]);
    const [menu, openMenu] = (0,useMenu/* useMenuConfig */._)(contractAccounts?.map((contractAccount, index)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
            display: "flex",
            alignItems: "center",
            columnGap: 1,
            onClick: ()=>setAccount(contractAccount.address),
            sx: {
                cursor: 'pointer'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    position: "relative",
                    width: 30,
                    height: 30,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                            size: 30
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                            className: classes.badge,
                            size: 12,
                            icon: polygonDescriptor?.icon
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minWidth: 150,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 16,
                            lineHeight: "20px",
                            fontWeight: 700,
                            children: contractAccount.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.address,
                            children: [
                                (0,formatter/* formatEthereumAddress */.j8)(contractAccount?.address ?? '', 4),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                    size: 14,
                                    text: contractAccount.address
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: chainId ? entry/* Others */.ej.explorerResolver.addressLink(chainId, contractAccount.address) : undefined,
                                    target: "_blank",
                                    title: "View on Explorer",
                                    rel: "noopener noreferrer",
                                    className: classes.linkIcon,
                                    onClick: (e)=>e.stopPropagation(),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                        size: 14
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                    checked: (0,isSameAddress/* isSameAddress */.W)(account, contractAccount.address)
                })
            ]
        }, index);
    }) ?? [], {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        MenuListProps: {
            className: classes.menu
        },
        classes: {
            paper: classes.menuPaper
        }
    });
    // #region event handler
    const connectToCurrent = (0,react.useCallback)(async ()=>{
        await entry/* Web3 */.Bv.connect({
            account,
            chainId,
            owner: wallet?.owner,
            identifier: ec_key/* ECKeyIdentifier */.o.from(wallet?.identifier).unwrapOr(undefined),
            providerType: src_types/* ProviderType */.lP.MaskWallet,
            silent: true
        });
    }, [
        account,
        wallet,
        chainId
    ]);
    const [{ loading: openLuckDropLoading }, handleLuckDropClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        await connectToCurrent();
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.redpacketDialogEvent.sendToLocal({
            open: true,
            source: PluginID/* PluginID */.P.SmartPay
        });
        closeDialog();
    }, [
        connectToCurrent
    ]);
    const [{ loading: openSwapLoading }, handleSwapClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        await connectToCurrent();
        openSwapDialog();
    }, [
        connectToCurrent
    ]);
    const [{ loading: openSendLoading }, handleSendClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        await connectToCurrent();
        await (0,context/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.Contacts, {
            selectedToken: maskToken?.address
        });
    }, [
        connectToCurrent,
        maskToken
    ]);
    const handleReceiveClick = (0,react.useCallback)(()=>{
        setReceiveDialog({
            open: true,
            address: account,
            name: wallet?.name
        });
    }, [
        account,
        wallet
    ]);
    // #endregion
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!smartPayDialogOpen) return;
        refreshAssets();
        refreshRemainFrequency();
    }, [
        smartPayDialogOpen,
        refreshAssets,
        refreshRemainFrequency
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.dialogContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                        className: classes.card,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                display: "flex",
                                alignItems: "center",
                                columnGap: 1.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                        position: "relative",
                                        width: 30,
                                        height: 30,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                                                size: 30
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                                className: classes.badge,
                                                size: 12,
                                                icon: polygonDescriptor?.icon
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                                display: "flex",
                                                onClick: openMenu,
                                                sx: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        fontSize: 16,
                                                        lineHeight: "20px",
                                                        fontWeight: 700,
                                                        children: wallet?.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                                        size: 20
                                                    })
                                                ]
                                            }),
                                            menu,
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                className: classes.address,
                                                children: [
                                                    (0,formatter/* formatEthereumAddress */.j8)(account ?? '', 4),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                        size: 14,
                                                        text: account
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                        href: account && chainId ? entry/* Others */.ej.explorerResolver.addressLink(chainId, account) : '',
                                                        target: "_blank",
                                                        title: "View on Explorer",
                                                        rel: "noopener noreferrer",
                                                        className: classes.linkIcon,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                            size: 14
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                mt: "14px",
                                fontSize: 36,
                                fontWeight: 700,
                                lineHeight: 1.2,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                    value: (0,number/* toFixed */.FH)(balance, 2),
                                    formatter: formatCurrency/* formatCurrency */.x
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                display: "flex",
                                columnGap: 1,
                                position: "absolute",
                                top: 16,
                                right: 16,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.KeySquare, {
                                        onClick: (event)=>setManageAnchorEl(event.currentTarget),
                                        size: 24
                                    }),
                                    value > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Add, {
                                        onClick: (event)=>setAddAnchorEl(event.currentTarget),
                                        size: 24
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AddSmartPayPopover, {
                                        open: !!addAnchorEl,
                                        anchorEl: addAnchorEl,
                                        onClose: ()=>setAddAnchorEl(null)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountsManagerPopover, {
                                        open: !!manageAnchorEl,
                                        anchorEl: manageAnchorEl,
                                        address: account,
                                        owner: wallet?.owner,
                                        name: wallet?.name,
                                        onClose: ()=>setManageAnchorEl(null)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        className: classes.list,
                        children: assets?.filter((asset)=>asset.chainId === chainId)?.map((token, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                                className: classes.listItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: "10px",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                                position: "relative",
                                                width: 40,
                                                height: 36,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                                        size: 36,
                                                        address: token.address,
                                                        name: token.name,
                                                        chainId: token.chainId,
                                                        logoURL: token.logoURL
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                                        className: classes.badge,
                                                        style: {
                                                            right: 0
                                                        },
                                                        size: 12,
                                                        icon: polygonDescriptor?.icon
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        fontSize: 16,
                                                        lineHeight: "20px",
                                                        fontWeight: 700,
                                                        children: [
                                                            token.symbol,
                                                            (0,isSameAddress/* isSameAddress */.W)(token.address, maskAddress) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                                                title: availableBalanceTooLow ? t.allow_mask_as_gas_token_description() : t.remain_mask_tips(),
                                                                placement: "top",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                                    ml: 1,
                                                                    onClick: async ()=>{
                                                                        if (!availableBalanceTooLow) return;
                                                                        await connectToCurrent();
                                                                        setApproveDialogOpen(true);
                                                                    },
                                                                    component: "span",
                                                                    className: classes.maskGasTip,
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    children: availableBalanceTooLow ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                        children: [
                                                                            "(",
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.GasStation, {
                                                                                size: 18,
                                                                                sx: {
                                                                                    marginRight: 0.5
                                                                                }
                                                                            }),
                                                                            t.allow_mask_as_gas_token(),
                                                                            ")"
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.GasStation, {
                                                                        size: 18
                                                                    })
                                                                })
                                                            }) : null
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        className: classes.name,
                                                        children: [
                                                            token.name,
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                                href: chainId ? entry/* Others */.ej.explorerResolver.addressLink(chainId, token.address) : undefined,
                                                                target: "_blank",
                                                                title: "View on Explorer",
                                                                rel: "noopener noreferrer",
                                                                className: classes.linkIcon,
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                                    size: 14
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                        className: classes.balance,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                            value: (0,lodash_es_isNaN/* default */.Z)(token.balance) ? 0 : token.balance,
                                            decimals: (0,lodash_es_isNaN/* default */.Z)(token.decimals) ? 0 : token.decimals,
                                            significant: 6,
                                            formatter: formatBalance/* formatBalance */.a
                                        })
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ApproveMaskDialog/* ApproveMaskDialog */.Y, {
                        open: approveDialogOpen,
                        handleClose: ()=>setApproveDialogOpen(false)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.dialogActions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: openLuckDropLoading,
                        variant: "roundedContained",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RedPacket, {}),
                        fullWidth: true,
                        size: "small",
                        onClick: handleLuckDropClick,
                        children: t.lucky_drop()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: openSwapLoading,
                        variant: "roundedContained",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SwapColorful, {}),
                        fullWidth: true,
                        size: "small",
                        onClick: handleSwapClick,
                        children: t.swap()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: openSendLoading,
                        variant: "roundedContained",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SendColorful, {}),
                        fullWidth: true,
                        size: "small",
                        onClick: handleSendClick,
                        children: t.send()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "roundedContained",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ReceiveColorful, {}),
                        fullWidth: true,
                        size: "small",
                        onClick: handleReceiveClick,
                        children: t.receive()
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/RouterDialog.tsx






















const RouterDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { isDeployPage })=>({
        dialogContent: {
            padding: 0,
            overflow: isDeployPage ? 'hidden' : 'auto',
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        }
    }));
function RouterDialog() {
    const t = useSmartPayTrans();
    const { pathname, state } = (0,dist/* useLocation */.TH)();
    const { classes } = RouterDialog_useStyles({
        isDeployPage: Boolean((0,router/* matchPath */.LX)(constants/* RoutePaths */.s2.Deploy, pathname))
    });
    const navigate = (0,dist/* useNavigate */.s0)();
    const personas = (0,useAllPersonas/* useAllPersonas */.T)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const { setSigner } = SmartPayContext.useContainer();
    const { setDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDescriptionDialogEvent);
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDialogEvent, (ev)=>{
        // reset state when dialog has been closed
        if (!ev.open) {
            setSigner(undefined);
        }
        setSigner({
            signWallet: ev.signWallet,
            signPersona: ev.signPersona
        });
    });
    const { open: openOfCross, closeDialog: closeOfCross } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(CrossIsolationEvents/* CrossIsolationMessages */.W.events.smartPayDialogEvent);
    const lastRecognizedIdentity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    // #region query white list
    const { loading: queryVerifyLoading } = (0,useAsync/* default */.Z)(async ()=>{
        if (!lastRecognizedIdentity?.identifier?.userId || !open) return;
        const chainId = await entry/* SmartPayBundler */.Pp.getSupportedChainId();
        const accounts = await entry/* SmartPayOwner */.Lf.getAccountsByOwners(chainId, [
            ...wallets.filter((x)=>!x.owner).map((x)=>x.address),
            ...(0,compact/* default */.Z)(personas.map((x)=>x.address))
        ]);
        const verified = await entry/* SmartPayFunder */.jI.verify(lastRecognizedIdentity.identifier.userId);
        if (accounts.filter((x)=>x.deployed).length) return navigate(constants/* RoutePaths */.s2.Main);
        if (verified || accounts.filter((x)=>!x.deployed && x.funded).length) return navigate(constants/* RoutePaths */.s2.Deploy);
        return navigate(constants/* RoutePaths */.s2.InEligibility);
    }, [
        open,
        lastRecognizedIdentity,
        personas.length,
        wallets.length
    ]);
    // #endregion
    const title = (0,react.useMemo)(()=>{
        if ((0,router/* matchPath */.LX)(constants/* RoutePaths */.s2.Deploy, pathname)) return t.smart_pay_wallet_deployment();
        else if ((0,router/* matchPath */.LX)(constants/* RoutePaths */.s2.InEligibility, pathname)) return t.smart_pay_wallet();
        return t.__plugin_name();
    }, [
        router/* matchPath */.LX,
        pathname
    ]);
    const handleClose = (0,react.useCallback)(()=>{
        if (state?.canBack) return navigate(-1);
        closeDialog();
        closeOfCross();
    }, [
        state
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open || openOfCross,
        onClose: handleClose,
        title: title,
        titleTail: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Questions, {
            onClick: ()=>setDialog({
                    open: true
                })
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: queryVerifyLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                rowGap: 1.5,
                minHeight: 564,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                        size: 36
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t.loading()
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: constants/* RoutePaths */.s2.Deploy,
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Deploy, {
                            open: open
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: constants/* RoutePaths */.s2.InEligibility,
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(InEligibilityTips, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: constants/* RoutePaths */.s2.Main,
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayContent, {})
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/SmartPayDialog.tsx






const SmartPayDialog = /*#__PURE__*/ (0,react.memo)(()=>{
    const entries = [
        constants/* RoutePaths */.s2.Deploy,
        constants/* RoutePaths */.s2.InEligibility,
        constants/* RoutePaths */.s2.Main
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* MemoryRouter */.VA, {
        initialEntries: entries,
        initialIndex: 1,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayContext.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RouterDialog, {})
        })
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(14743);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(51527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/ReceiveDialog.tsx











const ReceiveDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            margin: 0,
            maxWidth: 420,
            backgroundColor: theme.palette.maskColor.bottom,
            backgroundImage: 'unset'
        },
        title: {
            textAlign: 'center',
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        content: {
            padding: theme.spacing(0, 6.25, 3),
            marginTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        tips: {
            fontSize: 16,
            lineHeight: '20px',
            color: theme.palette.maskColor.second,
            marginTop: 28
        },
        warning: {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.1),
            borderRadius: 99,
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            color: theme.palette.maskColor.danger,
            padding: theme.spacing(0.5, 1.5),
            marginTop: theme.spacing(2)
        }
    }));
function InjectReceiveDialog() {
    const [address, setAddress] = (0,react.useState)('');
    const [name, setName] = (0,react.useState)('');
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.receiveDialogEvent, (ev)=>{
        if (!ev.open) return;
        if (ev.address) setAddress(ev.address);
        if (ev.name) setName(ev.name);
    });
    return open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReceiveDialog, {
        open: true,
        onClose: closeDialog,
        address: address,
        name: name
    }) : null;
}
const ReceiveDialog = /*#__PURE__*/ (0,react.memo)(function ReceiveDialog({ address, name, open, onClose }) {
    const t = useSmartPayTrans();
    const { classes } = ReceiveDialog_useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
            container: container,
            open: open,
            onClose: onClose,
            classes: {
                paper: classes.paper
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                    sx: {
                        py: 3,
                        display: 'grid',
                        alignItems: 'center',
                        gridTemplateColumns: '50px auto 50px',
                        whiteSpace: 'nowrap'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            size: "large",
                            disableRipple: true,
                            onClick: onClose,
                            sx: {
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                                color: "inherit",
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCode/* QRCode */.s, {
                            text: `${entry/* Others */.ej.chainResolver.chainPrefix(chainId)}:${address}`,
                            options: {
                                width: 250
                            },
                            canvasProps: {
                                width: 250,
                                height: 250
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.tips,
                            children: t.scan_address_to_payment()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.warning,
                            children: t.can_only_receive_polygon_assets()
                        })
                    ]
                })
            ]
        }));
});

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/components/SmartPayDescriptionDialog.tsx








const SmartPayDescriptionDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialogContent: {
            padding: theme.spacing(2),
            minHeight: 564,
            boxSizing: 'border-box'
        },
        title: {
            fontSize: 16,
            fontWeight: 700,
            lineHeight: '20px'
        },
        content: {
            fontSize: 14,
            color: theme.palette.maskColor.second
        },
        strong: {
            color: theme.palette.maskColor.main
        }
    }));
function InjectSmartPayDescriptionDialog() {
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginSmartPayMessages.smartPayDescriptionDialogEvent);
    return open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayDescriptionDialog, {
        open: true,
        onClose: closeDialog
    }) : null;
}
const SmartPayDescriptionDialog = /*#__PURE__*/ (0,react.memo)(function SmartPayDescriptionDialog({ open, onClose }) {
    const t = useSmartPayTrans();
    const { classes } = SmartPayDescriptionDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t.what_is_smart_pay(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.what_is_smart_pay_title()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        my: 3
                    },
                    className: classes.content,
                    children: t.smart_pay_description()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.setup_smart_pay_title()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    component: "ul",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "li",
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayTrans.setup_smart_pay_one, {
                                components: {
                                    strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        className: classes.strong
                                    })
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "li",
                            className: classes.content,
                            children: t.setup_smart_pay_two()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.erc_4337_features_title()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                    component: "ul",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "li",
                            className: classes.content,
                            children: t.erc_4337_features_one()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "li",
                            className: classes.content,
                            children: t.erc_4337_features_two()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "li",
                            className: classes.content,
                            children: t.erc_4337_features_three()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "li",
                            className: classes.content,
                            children: t.erc_4337_features_four()
                        })
                    ]
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/SmartPay/src/SiteAdaptor/index.tsx














const site = {
    ...base/* base */.u,
    GlobalInjection: function SmartPayGlobalInjection() {
        const wallets = (0,useWallets/* useWallets */.r)();
        const contractAccounts = wallets.filter((x)=>x.owner);
        const { value: chainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(useContext/* DefaultWeb3ContextProvider */.V4, {
            value: {
                chainId,
                account: (0,head/* default */.Z)(contractAccounts)?.address
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayDialog, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectSmartPayDescriptionDialog, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectReceiveDialog, {})
            ]
        });
    },
    ApplicationEntries: [
        {
            RenderEntryComponent: (props)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SmartPayEntry, {
                        ...props
                    })
                });
            },
            ApplicationEntryID: constants/* PLUGIN_ID */.Uu,
            appBoardSortingDefaultPriority: 2,
            marketListSortingPriority: 2,
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.SmartPay,
                i18nKey: "__plugin_name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                size: 36
            }),
            category: 'other'
        }
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 11017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60307);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    // create an uuid for every hook
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        }), [
        onUpdateByRemote,
        event,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 62384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 3545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ RelationFavor),
/* harmony export */   e: () => (/* binding */ ProofType)
/* harmony export */ });
var /**
 * This interface contains the minimal information for UI display
 */ /** The nickname of the persona. Should use profile.nickname if it presents. */ /** The evm address of persona */ /** The nickname of the profile. Should be used in prior. */ RelationFavor;
(function(RelationFavor) {
    RelationFavor[RelationFavor["COLLECTED"] = -1] = "COLLECTED";
    RelationFavor[RelationFavor["UNCOLLECTED"] = 1] = "UNCOLLECTED";
    RelationFavor[RelationFavor["DEPRECATED"] = 0] = "DEPRECATED";
})(RelationFavor || (RelationFavor = {}));
var ProofType// JSON.stringify(payload)
;
(function(ProofType) {
    ProofType["Persona"] = 'persona';
    ProofType["EOA"] = 'eoa';
})(ProofType || (ProofType = {}));


/***/ }),

/***/ 41253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ PersonaAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67101);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _CopyButton_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98662);
/* harmony import */ var _PlatformAvatar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70269);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        bottomFixed: {
            width: '100%',
            minHeight: 36,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 16,
            boxShadow: theme.palette.shadow.popup
        },
        linkIcon: {
            marginRight: theme.spacing(1),
            color: theme.palette.maskColor.second,
            cursor: 'pointer'
        },
        personaKey: {
            fontSize: '12px',
            fontWeight: '400',
            color: theme.palette.maskColor.third
        }
    }));
function PersonaAction(props) {
    const { classes } = useStyles(undefined, {
        props
    });
    const { currentPersona, avatar, children } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.bottomFixed,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                display: "flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlatformAvatar_js__WEBPACK_IMPORTED_MODULE_3__/* .PlatformAvatar */ .c, {
                        networkIcon: avatar,
                        size: 36
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginLeft: '4px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    display: 'flex'
                                },
                                children: currentPersona?.nickname
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                sx: {
                                    display: 'flex'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: classes.personaKey,
                                        children: currentPersona?.identifier ? (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .formatPersonaFingerprint */ .Nb)(currentPersona.identifier.rawPublicKey, 4) : '--'
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CopyButton_index_js__WEBPACK_IMPORTED_MODULE_6__/* .CopyButton */ .q, {
                                        size: 16,
                                        text: currentPersona?.identifier.rawPublicKey ?? '',
                                        className: classes.linkIcon
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
}


/***/ }),

/***/ 70269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ PlatformAvatar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaAction/PersonaImageIcon.tsx


const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        icon: {
            borderRadius: '50%'
        }
    };
});
function PersonaImageIcon(props) {
    const { size = 48, icon, borderRadius = '50%' } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        className: classes.icon,
        style: {
            borderRadius
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaAction/PlatformAvatar.tsx





const PlatformAvatar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        root: {
            position: 'relative',
            alignSelf: 'center',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block',
            width: '100%',
            height: '100%'
        },
        badgeIcon: {
            position: 'absolute',
            right: -2,
            bottom: -2
        }
    }));
const PlatformAvatar = /*#__PURE__*/ (0,react.memo)(function PlatformAvatar(props) {
    const { size = 24, badgeSize = 14, inverse = false, networkIcon, providerIcon } = props;
    const { classes, cx } = PlatformAvatar_useStyles({
        size: badgeSize > size ? badgeSize : size,
        isBorderColorNotDefault: props.isBorderColorNotDefault
    }, {
        props
    });
    // #region icon names
    const names = inverse ? [
        cx(classes.badgeIcon, classes.providerIcon),
        cx(classes.mainIcon, classes.networkIcon)
    ] : [
        cx(classes.mainIcon, classes.networkIcon),
        cx(classes.badgeIcon, classes.providerIcon)
    ];
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            networkIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaImageIcon, {
                classes: {
                    icon: names[0]
                },
                size: size,
                icon: networkIcon
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Masks, {
                size: size,
                sx: {
                    display: 'inline-block',
                    borderRadius: '50%'
                }
            }),
            providerIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaImageIcon, {
                classes: {
                    icon: names[1]
                },
                size: badgeSize,
                icon: providerIcon
            }) : null
        ]
    });
});


/***/ }),

/***/ 14743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ QRCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38079);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24002);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69530);







const CACHE_SCOPE = 'qrcode';
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme)=>({
        text: {
            paddingTop: 50
        },
        info: {
            color: theme.palette.mode === 'dark' ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z[800],
            extDecoration: 'underline',
            cursor: 'pointer'
        }
    }));
function QRCode({ text, options = {}, canvasProps }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const image = cache.get(CACHE_SCOPE, text);
    const { classes } = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!ref.current || error) return;
        qrcode__WEBPACK_IMPORTED_MODULE_1__.toCanvas(ref.current, text, options, (err)=>{
            if (err) {
                setError(true);
                cache.remove(CACHE_SCOPE, text);
                throw err;
            }
            const dataURL = ref.current?.toDataURL();
            if (dataURL) {
                cache.set(CACHE_SCOPE, text, dataURL);
            }
        });
    }, [
        options,
        text,
        error
    ]);
    return error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "textPrimary",
            variant: "body1",
            className: classes.text,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC, {
                i18nKey: "backup_qrcode_error",
                components: {
                    again: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        onClick: ()=>{
                            setError(false);
                        },
                        className: classes.info
                    })
                }
            })
        })
    }) : image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: image,
        ...canvasProps
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ...canvasProps,
        ref: ref
    });
}
const cache = {
    get (scope, key) {
        return sessionStorage.getItem(`${scope}:${key}`);
    },
    set (scope, key, value) {
        return sessionStorage.setItem(`${scope}:${key}`, value);
    },
    remove (scope, key) {
        return sessionStorage.removeItem(`${scope}:${key}`);
    }
};


/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 58307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 22103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ FormattedBalance)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10149);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29763);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    }));
function FormattedBalance(props) {
    const { value, decimals, significant, symbol, minimumBalance, formatter = (value)=>value } = props;
    const valueInt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(value ?? '0').toFixed(0);
    let formatted = formatter(valueInt, decimals, significant);
    if (minimumBalance && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isZero */ .Fr)(formatted) && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isLessThan */ .FI)(valueInt, minimumBalance)) {
        // it's a BigNumber so it's ok
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        formatted = '<' + formatter(minimumBalance, decimals, significant).toString();
    }
    const { classes } = useStyles(undefined, {
        props
    });
    if (symbol) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.balance,
                children: String(formatted)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes?.symbol,
                children: symbol
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: String(formatted)
    });
}


/***/ }),

/***/ 34134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ FormattedCurrency)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18121);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76010);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);




function FormattedCurrency({ value = 0, sign, options, // it's a BigNumber so it's ok
// eslint-disable-next-line @typescript-eslint/no-base-to-string
formatter = (value, sign)=>`${sign} ${value}`.trim() }) {
    const currentSign = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useCurrencyType */ .P)();
    const { data: currentFiatCurrencyRate } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useFiatCurrencyRate */ .P)();
    const rate = options?.fiatCurrencyRate ?? (sign === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType */ .V2.USD ? 1 : currentFiatCurrencyRate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: formatter(value, rate === 1 ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType */ .V2.USD : sign ?? currentSign, {
            ...options,
            fiatCurrencyRate: rate
        })
    });
}


/***/ }),

/***/ 92935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ShadowRootMenu)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8737);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootMenu = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootMenu.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 18121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useCurrencyType)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);



function useCurrencyType(pluginID) {
    const { Settings } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Settings?.currencyType ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .UNDEFINED */ .i_);
}


/***/ }),

/***/ 76010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useFiatCurrencyRate)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27043);
/* harmony import */ var _useCurrencyType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18121);





function useFiatCurrencyRate() {
    const fiatCurrencyType = (0,_useCurrencyType_js__WEBPACK_IMPORTED_MODULE_1__/* .useCurrencyType */ .P)();
    const currencyType = fiatCurrencyType?.toUpperCase() || _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        queryKey: [
            '@@fiat-currency-rates'
        ],
        queryFn: async ()=>{
            const allRates = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .FiatCurrencyRate */ .PN.getRates();
            // Pick what we need only to reduce memory cost.
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(allRates, Object.keys(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2));
        },
        select: (data)=>data[currencyType]
    });
}


/***/ }),

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 61918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useERC20TokenAllowance(address, spender, options) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'erc20-allowance',
            address,
            account,
            spender
        ],
        queryFn: async ()=>{
            if (!account || !address || !spender) return '0';
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Contract */ .CH.getERC20Contract(address, {
                chainId
            })?.methods.allowance(account, spender).call({
                from: account
            });
        },
        refetchInterval: 30 * 1000
    });
}


/***/ }),

/***/ 13414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useERC20TokenApproveCallback),
/* harmony export */   i: () => (/* binding */ ApproveStateType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82897);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88572);
/* harmony import */ var _useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61918);







const MaxUint256 = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender, callback, tokenChainId) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    // read the approved information from the chain
    const { data: balance = '0', isLoading: loadingBalance, error: errorBalance, refetch: revalidateBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenBalance */ .V)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, address, {
        chainId: tokenChainId
    });
    const { data: allowance = '0', isLoading: loadingAllowance, error: errorAllowance, refetch: revalidateAllowance } = (0,_useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__/* .useERC20TokenAllowance */ .n)(address, spender, {
        chainId: tokenChainId
    });
    // the computed approve state
    const approveStateType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isLessThan */ .FI)(allowance, amount) || allowance === amount && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance
    ]);
    const [state, approveCallback] = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async (useExact = false, isRevoke = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED && !isRevoke) {
            return;
        }
        if (tokenChainId !== chainId) {
            await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.switchChain?.(tokenChainId ?? chainId);
        }
        const hash = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.approveFungibleToken(address, spender, useExact ? amount : MaxUint256, {
            chainId: tokenChainId
        });
        const receipt = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.confirmTransaction(hash, {
            chainId: tokenChainId,
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (receipt) {
            callback?.();
            revalidateBalance();
            revalidateAllowance();
        }
    }, [
        account,
        amount,
        spender,
        address,
        approveStateType,
        tokenChainId,
        chainId
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
    }, [
        revalidateBalance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        {
            ...state,
            loading: loadingAllowance || loadingBalance || state.loading,
            loadingApprove: state.loading
        },
        approveCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58750);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .xB, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

/***/ }),

/***/ 77432:
/***/ ((module) => {



/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 26991:
/***/ ((module) => {



module.exports = function encodeUtf8 (input) {
  var result = []
  var size = input.length

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point)
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD)
  }

  return new Uint8Array(result).buffer
}


/***/ }),

/***/ 43666:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 69550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(43666);
} else {}


/***/ }),

/***/ 27384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cf09b7d6e13bab73050b.png";

/***/ }),

/***/ 87167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=chunk.991.js.map