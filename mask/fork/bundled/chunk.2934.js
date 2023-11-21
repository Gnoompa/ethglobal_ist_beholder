(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2934],{

/***/ 41693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ parseURLs)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseURLs(text, requireProtocol = true) {
    // CJS-ESM compatibility
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z;
    return lib.list(text).map((x)=>x.string).filter((y)=>{
        if (!requireProtocol) return true;
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        return URL.canParse(y);
    });
}


/***/ }),

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

/***/ 18586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ usePluginWrapper),
/* harmony export */   y: () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);


const emptyPluginWrapperMethods = {
    setWrap: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
PluginWrapperMethodsContext.displayName = 'PluginWrapperMethodsContext';
function usePluginWrapper(open, options) {
    const { setWidth, setWrap, setWrapperName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width, name } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open);
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width), [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name), [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 90786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lG: () => (/* binding */ PostInfoContext),
  eT: () => (/* binding */ PostInfoProvider),
  H9: () => (/* binding */ usePostInfoDetails)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Observable.ts
var Observable = __webpack_require__(8482);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/hooks/useObservableMapSet.ts


function useObservableValues(map) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>map.asValues,
            subscribe: (callback)=>{
                return map.event.on(map.ALL_EVENTS, callback);
            }
        }), [
        map
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}

;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts




/** post id on the network. */ /**
     * The result of this subscription will be merged with `PostContext.postMentionedLinks`.
     *
     * You don't need to provide this to resolve links in `PostContext.postContent`.
     */ /** @deprecated It should parse image into rawMessage */ /**
     * The raw TypedMessage that the site gives.
     */ // #region DOM knowledge
// #endregion
// #region Metadata of a post (author, mentioned items, ...)
/** Auto computed */ // Meta
/** @deprecated It should appears in rawMessage */ // #endregion
// #region Raw post content (not decrypted)
// #endregion
// #region Post payload discovered in the rawMessage
/**
     * undefined => payload not found
     */ // #endregion
const PostInfoContext = (0,react.createContext)(null);
PostInfoContext.displayName = 'PostInfoContext';
/** @deprecated use <PostInfoContext.Provider value={post}> */ function PostInfoProvider(props) {
    return (0,react.createElement)(PostInfoContext.Provider, {
        value: props.post,
        children: props.children
    });
}
const usePostInfoDetails = // Change to use* when https://github.com/microsoft/TypeScript/issues/44643 fixed
{
    __proto__: new Proxy({
        __proto__: null
    }, {
        get (_, key) {
            if (typeof key === 'symbol') return undefined;
            function usePostInfoDetails() {
                const postInfo = (0,react.useContext)(PostInfoContext);
                if (!postInfo) throw new TypeError('No post context');
                if (!(key in postInfo)) throw new TypeError('postInfo.' + key + ' is not found');
                const k = postInfo[key];
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof ValueRef/* ValueRef */.Xf) return (0,useValueRef/* useValueRef */.E)(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof Observable/* ObservableMap */.vP) return useObservableValues(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof Observable/* ObservableSet */.n7) return useObservableValues(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (isSubscription(k)) return (0,use_subscription.useSubscription)(k);
                return k;
            }
            Object.defineProperty(usePostInfoDetails, key, {
                value: usePostInfoDetails,
                configurable: true
            });
            return usePostInfoDetails;
        }
    })
};
function isSubscription(x) {
    return typeof x === 'object' && x !== null && !!(x.getCurrentValue && x.subscribe);
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

/***/ 85871:
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
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/UserAssetsContext.tsx
var UserAssetsContext = __webpack_require__(45258);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionList.tsx + 4 modules
var CollectionList = __webpack_require__(25199);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/plugins/Collectible/src/base.ts + 7 modules
var base = __webpack_require__(50626);
// EXTERNAL MODULE: ./packages/plugins/Collectible/src/constants.ts
var constants = __webpack_require__(69586);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/solana/src/types.ts
var solana_src_types = __webpack_require__(97834);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/helpers/url.ts




const ZORA_COLLECTION_ADDRESS = '0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7';
const CRYPTOPUNKS_COLLECTION_ADDRESS = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';
const RULES = [
    // opensea
    {
        hosts: [
            'opensea.io'
        ],
        pathname: /^\/assets\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.OpenSea
    },
    {
        hosts: [
            'opensea.io'
        ],
        pathname: /^\/assets\/ethereum\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.OpenSea
    },
    {
        hosts: [
            'opensea.io'
        ],
        pathname: /^\/assets\/matic\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Matic,
        provider: specs/* SourceType */.PO.OpenSea
    },
    {
        hosts: [
            'opensea.io'
        ],
        pathname: /^\/assets\/arbitrum\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Arbitrum,
        provider: specs/* SourceType */.PO.OpenSea
    },
    {
        hosts: [
            'opensea.io'
        ],
        pathname: /^\/assets\/optimism\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Optimism,
        provider: specs/* SourceType */.PO.OpenSea
    },
    {
        hosts: [
            'opensea.io'
        ],
        pathname: /^\/assets\/solana\/(\w+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
        chainId: solana_src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.OpenSea
    },
    // rarible
    {
        hosts: [
            'rarible.com',
            'app.rarible.com'
        ],
        pathname: /^\/token\/(0x[\dA-Fa-f]{40}):(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Rarible
    },
    {
        hosts: [
            'rarible.com',
            'app.rarible.com'
        ],
        pathname: /^\/token\/polygon\/(0x[\dA-Fa-f]{40}):(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Matic,
        provider: specs/* SourceType */.PO.Rarible
    },
    {
        hosts: [
            'rarible.com',
            'app.rarible.com'
        ],
        pathname: /^\/token\/solana\/(\w+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
        chainId: solana_src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Rarible
    },
    // zora
    {
        hosts: [
            'zora.co',
            'market.zora.co'
        ],
        pathname: /^\/collections\/(zora|0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Zora,
        address: (matched)=>matched.replace('zora', ZORA_COLLECTION_ADDRESS)
    },
    // x2y2
    {
        hosts: [
            'x2y2.io'
        ],
        pathname: /^\/eth\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.X2Y2
    },
    // looksrare
    {
        hosts: [
            'looksrare.org'
        ],
        pathname: /^\/collections\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.LooksRare
    },
    // element
    {
        hosts: [
            'element.market',
            'www.element.market'
        ],
        pathname: /^\/assets\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Element
    },
    {
        hosts: [
            'element.market',
            'www.element.market'
        ],
        pathname: /^\/assets\/bsc\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.BSC,
        provider: specs/* SourceType */.PO.Element
    },
    {
        hosts: [
            'element.market',
            'www.element.market'
        ],
        pathname: /^\/assets\/polygon\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Matic,
        provider: specs/* SourceType */.PO.Element
    },
    // magic eden
    {
        hosts: [
            'magiceden.io'
        ],
        pathname: /^\/item-details\/(\w+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
        chainId: solana_src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.MagicEden
    },
    // solsea
    {
        hosts: [
            'solsea.io'
        ],
        pathname: /^\/n\/(\w+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
        chainId: solana_src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Solsea
    },
    // solanart
    {
        hosts: [
            'solanart.io'
        ],
        pathname: /^\/nft\/(\w+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
        chainId: solana_src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Solanart
    },
    // Etherscan
    {
        hosts: [
            'etherscan.io',
            'cn.etherscan.com'
        ],
        pathname: /^\/nft\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.NFTScan
    },
    // Punks
    {
        hosts: [
            'cryptopunks.app'
        ],
        pathname: /^\/cryptopunks\/(details)\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.NFTScan,
        address: ()=>CRYPTOPUNKS_COLLECTION_ADDRESS
    },
    // OKX
    {
        hosts: [
            'www.okx.com'
        ],
        pathname: /^\/web3\/nft\/markets\/eth\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.OKX
    },
    // Uniswap
    {
        hosts: [
            'app.uniswap.org'
        ],
        hash: /#\/nfts\/asset\/(0x[\dA-Fa-f]{40})\/(\d+)/,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        chainId: src_types/* ChainId */.a_.Mainnet,
        provider: specs/* SourceType */.PO.Uniswap
    }
];
function getPayloadFromURLs(urls) {
    for (const url of urls){
        const payload = getPayloadFromURL(url);
        if (payload) return payload;
    }
    return;
}
function getPayloadFromURL(url) {
    if (!url || !URL.canParse(url)) return;
    const _url = new URL(url);
    for (const rule of RULES){
        const isHostMatched = rule.hosts.includes(_url.hostname);
        const matched = rule.pathname && _url.pathname.match(rule.pathname) || rule.hash && _url.hash.match(rule.hash);
        if (isHostMatched && matched) {
            return {
                pluginID: rule.pluginID,
                chainId: rule.chainId,
                provider: rule.provider,
                address: rule.address?.(matched[1]) ?? matched[1],
                tokenId: rule.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA ? rule.address?.(matched[1]) ?? matched[1] : matched[2]
            };
        }
    }
    return;
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Components_Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ConnectPersonaBoundary/index.tsx
var ConnectPersonaBoundary = __webpack_require__(4145);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingIdentity.ts
var useCurrentVisitingIdentity = __webpack_require__(78178);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useAllPersonas.ts
var useAllPersonas = __webpack_require__(81178);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var dom_context = __webpack_require__(49588);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Markdown/index.tsx + 44 modules
var Markdown = __webpack_require__(70564);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/locales/i18n_generated.ts
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
function useCollectibleTrans() /**
      * `NFT Details`
      */ /**
      * `Description`
      */ /**
      * `Top offer`
      */ /**
      * `Time left`
      */ /**
      * `You`
      */ /**
      * `Done`
      */ /**
      * `Retry`
      */ /**
      * `Get more {{token}}`
      */ /**
      * `Sell`
      */ /**
      * `Checkout`
      */ /**
      * `Place Bid`
      */ /**
      * `Buy Now`
      */ /**
      * `Make Offer`
      */ /**
      * `Post Listing`
      */ /**
      * `Article`
      */ /**
      * `Overview`
      */ /**
      * `Details`
      */ /**
      * `Offers`
      */ /**
      * `Activities`
      */ /**
      * `Listing`
      */ /**
      * `History`
      */ /**
      * `Event`
      */ /**
      * `Unit Price`
      */ /**
      * `Price`
      */ /**
      * `From`
      */ /**
      * `To`
      */ /**
      * `Date`
      */ /**
      * `Quantity`
      */ /**
      * `Expires in`
      */ /**
      * `Expiration`
      */ /**
      * `No Listings`
      */ /**
      * `Base`
      */ /**
      * `Properties`
      */ /**
      * `About`
      */ /**
      * `This NFT didn't have any offers.`
      */ /**
      * `This NFT didn't have any activities.`
      */ /**
      * `Chain Info`
      */ /**
      * `Creator Royalties`
      */ /**
      * `When you sell this item, this amount will be taken out of the sale proceeds and sent to the creator of the NFT as royalties. Collection owners can adjust royalties.`
      */ /**
      * `{{platform}} Platform costs`
      */ /**
      * `Contract Address`
      */ /**
      * `Token ID`
      */ /**
      * `Mint Address`
      */ /**
      * `Blockchain`
      */ /**
      * `Created by`
      */ /**
      * `Owned by`
      */ /**
      * `View on`
      */ /**
      * `No History`
      */ /**
      * `Please ensure unreviewed item`
      */ /**
      * `Please check ToS document`
      */ /**
      * `Insufficient Offer`
      */ /**
      * `This item has not been reviewed by OpenSea.`
      */ /**
      * `You should proceed with extra caution. Anyone can create a digital item on a blockchain with any
                            name, including fake versions of existing items. Please take extra caution and do your research
                            when interacting with this item to ensure it's what it chains to be.`
      */ /**
      * `Total`
      */ /**
      * `Refresh`
      */ /**
      * `Failed to load your collectible on {{source}}.`
      */ /**
      * `By checking this box, I acknowledge that this item has not been reviewed
                                                    or approved by OpenSea.`
      */ /**
      * `Convert ETH`
      */ /**
      * `Sale ends in {{time}}`
      */ /**
      * `Set an initial price.`
      */ /**
      * `Will be on sale until you transfer this item or cancel it.`
      */ /**
      * `Starting Price`
      */ /**
      * `Ending Price`
      */ /**
      * `Must be less than or equal to the starting price. The price will progress linearly to this amount until the expiration date.`
      */ /**
      * `Expiration date`
      */ /**
      * `Schedule Date`
      */ /**
      * `Your listing will automatically end at this time. No need to cancel it!`
      */ /**
      * `Schedule a future date.`
      */ /**
      * `Buyer Address`
      */ /**
      * `Enter the buyer's address.`
      */ /**
      * `Only the buyer is allowed to buy it.`
      */ /**
      * `Include ending price`
      */ /**
      * `Adding an ending price will allow this listing to expire, or for the price to be
                                        reduced until a buyer is found.`
      */ /**
      * `Schedule for a future time`
      */ /**
      * `You can schedule this listing to only be buyable at a future data.`
      */ /**
      * `Privacy`
      */ /**
      * `You can keep your listing public, or you can specify one address that's allowed to
                                        buy it.`
      */ /**
      * `Enter a price`
      */ /**
      * `Insufficient balance`
      */ /**
      * `Invalid schedule date`
      */ /**
      * `Invalid ending price`
      */ /**
      * `Invalid expiration date`
      */ /**
      * `Invalid buyer address`
      */ /**
      * `Set Price`
      */ /**
      * `Highest Bid`
      */ /**
      * `Minimum Bid`
      */ /**
      * `Set your starting bid price.`
      */ /**
      * `Reserve Price`
      */ /**
      * `Create a hidden limit by setting a reserve price. Reserve price must be greater than or equal to the start amount.`
      */ /**
      * `Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!`
      */ /**
      * `Enter minimum bid`
      */ /**
      * `Enter reserve price`
      */ /**
      * `Invalid reserve price`
      */ /**
      * `Place a Bid`
      */ /**
      * `Make an Offer`
      */ /**
      * `By checking this box, I acknowledge that this item has not been reviewed or approved by OpenSea.`
      */ /**
      * `Collectibles`
      */ /**
      * `Display specific information of collectibles in OpenSea and Rarible, make an offer directly on social media.`
      */ /**
      * `More on {{provider}}`
      */ /**
      * `Change NFT PFP`
      */ /**
      * `Load failed`
      */ /**
      * `Retry`
      */ /**
      * `Loading`
      */ /**
      * `No collectible found.`
      */ /**
      * `Contract`
      */ /**
      * `Token Standard`
      */ /**
      * `Price`
      */ /**
      * `No NFTs found.`
      */ /**
      * `Load More`
      */ /**
      * `NFT is not minted yet.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.maskbook.collectibles");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "com.maskbook.collectibles",
            shouldUnescape: true,
            ...props
        });
}
const Collectible = /**
      * `Current price is <strong>{{price}} {{symbol}}</strong>.`
      */ /**
      * `By checking this box, I agree to OpenSea's <terms>Terms of Service</terms>.`
      */ /**
      * `By checking this box, I agree to OpenSea's <terms>Terms of Service</terms>.`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/DescriptionCard.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: 12
        },
        title: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 700,
            marginBottom: 12,
            color: theme.palette.maskColor.main
        },
        content: {
            fontSize: 14,
            lineHeight: '18px',
            width: '100%',
            boxSizing: 'border-box',
            padding: 12
        },
        textContent: {
            color: theme.palette.maskColor.second
        },
        markdownContent: {
            fontSize: 14,
            textOverflow: 'ellipsis',
            webkitBoxOrient: 'vertical',
            webkitLineClamp: '3',
            color: theme.palette.maskColor.second,
            '& p, & li': {
                fontSize: '14px !important',
                color: `${theme.palette.maskColor.second} !important`
            },
            '& a': {
                color: `${theme.palette.maskColor.main} !important`
            }
        }
    }));
function DescriptionCard(props) {
    const { asset } = props;
    const { classes } = useStyles();
    const t = useCollectibleTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: t.plugin_collectible_description_title()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: asset.metadata?.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                    className: classes.markdownContent,
                    children: asset.metadata?.description
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.textContent,
                    children: "-"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Components/TextOverflowTooltip/index.tsx
var TextOverflowTooltip = __webpack_require__(59134);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/Rank.tsx



const Rank_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        gemRankWrapper: {
            boxSizing: 'border-box',
            borderRadius: 8,
            padding: '4px 8px',
            lineHeight: '18px',
            background: 'linear-gradient(89.76deg, #AA60EC 0.24%, #FFC846 99.83%)',
            fontWeight: 700,
            color: '#fff'
        }
    }));
function Rank(props) {
    const { rank } = props;
    const { classes } = Rank_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.gemRankWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            children: [
                "# ",
                rank
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/PropertiesCard.tsx






const PropertiesCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        wrapper: {
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: 12
        },
        titleBox: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24
        },
        rankBox: {
            display: 'flex'
        },
        title: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 700,
            marginBottom: 12,
            color: theme.palette.maskColor.publicMain
        },
        content: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12
        },
        traitsItem: {
            padding: 12,
            width: 'calc(100%/3 - 8px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            marginBottom: 12,
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            boxSizing: 'border-box'
        },
        traitTitle: {
            whiteSpace: 'nowrap',
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 400,
            color: theme.palette.maskColor.second
        },
        traitValue: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        traitRarity: {},
        unset: {
            color: 'unset'
        }
    }));
function PropertiesCard(props) {
    const { asset, rank, timeline } = props;
    const { classes, cx } = PropertiesCard_useStyles();
    const t = useCollectibleTrans();
    if (!asset.traits?.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.titleBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: timeline ? cx(classes.title, classes.unset) : classes.title,
                        children: t.plugin_collectible_properties()
                    }),
                    rank ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.rankBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Rank, {
                            rank: rank
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: asset.traits?.map((trait, i)=>{
                    const uiValue = (0,formatter/* formatTrait */.d0)(trait);
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.traitsItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                title: trait.type,
                                as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                                placement: "top",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.traitTitle,
                                    children: trait.type
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                title: trait.value,
                                as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.traitValue,
                                    children: uiValue
                                })
                            }),
                            typeof trait.rarity === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.traitRarity,
                                children: [
                                    "(",
                                    trait.rarity,
                                    ")"
                                ]
                            }) : null
                        ]
                    }, i);
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SourceProviderIcon/index.tsx
var SourceProviderIcon = __webpack_require__(31547);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SourceProviderSwitcher/index.tsx






const sourceList = [
    specs/* SourceType */.PO.LooksRare,
    specs/* SourceType */.PO.OpenSea,
    specs/* SourceType */.PO.Rarible,
    specs/* SourceType */.PO.X2Y2
];
// default is all
const SourceProviderSwitcher_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        selected: {
            position: 'absolute',
            left: '16px',
            top: '14px',
            borderRadius: '50%'
        }
    };
});
function SourceProviderSwitcher({ sources, onSelect, selected }) {
    const { classes } = SourceProviderSwitcher_useStyles();
    const _sources = sources ?? sourceList;
    const handleClick = (source)=>{
        onSelect?.(source);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        justifyContent: "flex-start",
        direction: "row",
        gap: 1,
        children: _sources.map((x)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                display: "inline-stack",
                sx: {
                    cursor: 'pointer'
                },
                onClick: ()=>handleClick(x),
                position: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SourceProviderIcon/* SourceProviderIcon */.g, {
                        size: 24,
                        provider: x
                    }),
                    selected === x && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        className: classes.selected,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.BorderedSuccess, {
                            size: 12
                        })
                    })
                ]
            }, x);
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(54225);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs
var useInfiniteQuery = __webpack_require__(86886);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useNonFungibleListings.ts




function useNonFungibleListings(pluginID, address, id, options) {
    const { account } = (0,useContext/* useChainContext */.ql)({
        account: options?.account
    });
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        account,
        ...options
    });
    return (0,useInfiniteQuery/* useInfiniteQuery */.N)({
        queryKey: [
            'non-fungible',
            'orders',
            pluginID,
            address,
            id,
            options
        ],
        queryFn: ({ pageParam: nextIndicator })=>{
            return Hub.getNonFungibleTokenOrders(address ?? '', id ?? '', specs/* OrderSide */.oU.Sell, {
                indicator: nextIndicator
            });
        },
        getNextPageParam: (x)=>x.nextIndicator
    });
}

;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useNonFungibleEvents.ts



function useNonFungibleEvents(pluginID, address, id, options) {
    const { account } = (0,useContext/* useChainContext */.ql)({
        account: options?.account
    });
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        account,
        ...options
    });
    return (0,useInfiniteQuery/* useInfiniteQuery */.N)({
        queryKey: [
            'non-fungible',
            'events',
            pluginID,
            address,
            id,
            options
        ],
        queryFn: ({ pageParam: nextIndicator })=>{
            return Hub.getNonFungibleTokenEvents(address ?? '', id ?? '', {
                indicator: nextIndicator
            });
        },
        getNextPageParam: (x)=>x.nextIndicator
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useNonFungibleRarity.ts



function useNonFungibleRarity(pluginID, address, id, options) {
    const { account } = (0,useContext/* useChainContext */.ql)({
        account: options?.account
    });
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        account,
        ...options
    });
    return (0,useQuery/* useQuery */.a)([
        'non-fungible-rarity',
        pluginID,
        address,
        id,
        options
    ], ()=>{
        // Solana only needs id
        if (!address && !id) return null;
        return Hub.getNonFungibleRarity(address || '', id || '');
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Context/index.tsx




function Context_useContext(initialState) {
    const { parentPluginID, pluginID, chainId, tokenId, tokenAddress, ownerAddress, origin } = initialState ?? {};
    const [sourceType, setSourceType] = (0,react.useState)();
    const asset = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(pluginID, tokenAddress, tokenId, {
        chainId,
        account: ownerAddress
    });
    const orders = useNonFungibleListings(pluginID, tokenAddress, tokenId, {
        chainId,
        account: ownerAddress,
        sourceType
    });
    const offers = (0,react.useMemo)(()=>orders.data?.pages.flatMap((x)=>x.data) ?? src_constants/* EMPTY_LIST */.rP, [
        orders.data?.pages
    ]);
    const events = useNonFungibleEvents(pluginID, tokenAddress, tokenId, {
        chainId,
        account: ownerAddress
    });
    const rarity = useNonFungibleRarity(pluginID, tokenAddress, tokenId, {
        chainId,
        account: ownerAddress
    });
    return {
        parentPluginID,
        pluginID,
        chainId,
        origin,
        sourceType,
        setSourceType,
        tokenId,
        tokenAddress,
        ownerAddress,
        asset,
        orders,
        offers,
        events,
        rarity
    };
}
const Context = (0,unstated_next/* createContainer */.f)(Context_useContext);
Context.Provider.displayName = 'CollectibleContextProvider';

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Stack/Stack.js + 1 modules
var Stack_Stack = __webpack_require__(96450);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/PriceCard.tsx









const PriceCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        wrapper: {
            color: theme.palette.maskColor.publicMain,
            width: '100%',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF',
            padding: 12,
            boxSizing: 'border-box',
            borderRadius: 12
        },
        textBase: {
            fontSize: 14,
            color: theme.palette.maskColor.publicMain,
            '& > strong': {
                margin: '0 1px'
            },
            lineHeight: 1
        },
        priceZone: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 0.5,
            width: '100%'
        },
        offerBox: {
            display: 'flex',
            gap: 4,
            alignItems: 'center'
        },
        fallbackSymbol: {
            color: theme.palette.maskColor.publicMain,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'flex-end'
        },
        skeleton: {
            backgroundColor: theme.palette.maskColor.publicLine
        }
    }));
function PriceCard(props) {
    const { topListing } = props;
    const { setSourceType, sourceType = topListing?.source, orders } = Context.useContainer();
    const t = useCollectibleTrans();
    const { classes } = PriceCard_useStyles();
    if ((!topListing && orders.error || orders.isLoading) && !sourceType) return null;
    if (!topListing && !orders.isLoading) return sourceType ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.priceZone,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.offerBox,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        fontSize: 14,
                        fontWeight: 400,
                        children: t.plugin_collectible_no_listings()
                    })
                }),
                sourceType ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SourceProviderSwitcher, {
                    selected: sourceType,
                    onSelect: setSourceType
                }) : null
            ]
        })
    }) : null;
    const priceUSD = (0,formatCurrency/* formatCurrency */.x)(topListing?.price?.usd ?? 0, 'USD', {
        onlyRemainTwoOrZeroDecimal: true
    });
    const renderTokenSymbol = ()=>{
        const { symbol, logoURL } = topListing?.priceInToken?.token ?? {};
        if (symbol?.toUpperCase() === 'ETH') return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ETH, {
            size: 18
        });
        if (logoURL) return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            width: 18,
            height: 18,
            src: logoURL,
            alt: ""
        });
        if (symbol?.toUpperCase() === 'WETH') return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WETH, {
            size: 18
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.fallbackSymbol,
            children: topListing?.priceInToken?.token.symbol || topListing?.priceInToken?.token.name
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.priceZone,
            children: [
                orders.isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceLoadingSkeleton, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.offerBox,
                    children: [
                        renderTokenSymbol(),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.textBase,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                style: {
                                    fontSize: '18px',
                                    lineHeight: '18px'
                                },
                                children: (0,formatBalance/* formatBalance */.a)(topListing?.priceInToken?.amount, topListing?.priceInToken?.token.decimals || 18, 6)
                            })
                        }),
                        topListing?.price?.usd ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.textBase,
                            children: [
                                "(",
                                priceUSD.includes('<') || (0,number/* isZero */.Fr)(topListing?.price?.usd) ? '' : '≈',
                                priceUSD,
                                ")"
                            ]
                        }) : null
                    ]
                }),
                sourceType ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SourceProviderSwitcher, {
                    selected: sourceType,
                    onSelect: setSourceType
                }) : null
            ]
        })
    });
}
function PriceLoadingSkeleton() {
    const { classes } = PriceCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.Z, {
        gap: 0.5,
        direction: "row",
        height: 24,
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                size: 20
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "text",
                animation: "wave",
                classes: {
                    root: classes.skeleton
                },
                width: 88,
                height: 18
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/DetailsCard.tsx








const PLATFORM_COSTS = {
    [specs/* SourceType */.PO.OpenSea]: 2.5,
    [specs/* SourceType */.PO.X2Y2]: 0.5,
    [specs/* SourceType */.PO.LooksRare]: 2
};
const DetailsCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 12,
            boxSizing: 'border-box',
            gap: 8,
            borderRadius: 12,
            backgroundColor: theme.palette.maskColor.bg
        },
        listItem: {
            width: '100%',
            display: 'flex',
            gap: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
            textTransform: 'capitalize',
            overflow: 'auto'
        },
        title: {
            color: theme.palette.maskColor.second
        },
        content: {
            flexGrow: 1,
            textAlign: 'right',
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 6,
            color: theme.palette.maskColor.main
        },
        value: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            flexGrow: 1
        },
        link: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(0.5)
        }
    }));
function DetailsCard(props) {
    const { asset, sourceType } = props;
    const t = useCollectibleTrans();
    const { classes } = DetailsCard_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const infos = [];
    if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA) {
        infos.push({
            title: t.plugin_collectible_mint_address(),
            value: Others.formatAddress(asset.address, 4),
            link: true
        });
    } else if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
        infos.push({
            title: t.plugin_collectible_token_id(),
            value: Others.formatTokenId(asset.tokenId, 4)
        }, {
            title: t.contract(),
            value: Others.formatAddress(asset.address, 4) ?? '-',
            link: true
        });
    }
    infos.push({
        title: t.plugin_collectible_block_chain(),
        value: Others.chainResolver.chainFullName(asset.chainId)
    }, {
        title: t.token_standard(),
        value: Others.formatSchemaType(asset.schema || asset.contract?.schema)
    });
    if (sourceType && PLATFORM_COSTS[sourceType]) {
        infos.push({
            title: t.plugin_collectible_platform_costs({
                platform: sourceType ?? specs/* SourceType */.PO.NFTScan
            }),
            value: `${PLATFORM_COSTS[sourceType]}%`
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: infos.map((x)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.listItem,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: x.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.content,
                        component: "div",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                title: x.value,
                                as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.value,
                                    children: [
                                        x.value,
                                        " "
                                    ]
                                })
                            }),
                            x.link ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: Others.explorerResolver.addressLink(asset.chainId, asset.address) ?? '',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 16
                                })
                            }) : null,
                            x.value && x.tooltip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                title: x.tooltip,
                                placement: "top",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Info, {
                                    size: 18
                                })
                            }) : null
                        ]
                    })
                ]
            }, x.title);
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/CardDialog/tabs/AboutTab.tsx










const AboutTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: '100%',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const resolveTopListing = (orders)=>{
    if (!orders?.length) return;
    return (0,head/* default */.Z)(orders.sort((a, b)=>{
        const priceA = new bignumber/* BigNumber */.O(a.price?.usd ?? 0);
        const priceB = new bignumber/* BigNumber */.O(b.price?.usd ?? 0);
        return priceA.lt(priceB) ? 1 : 0;
    }));
};
const AboutTab = /*#__PURE__*/ (0,react.memo)(function AboutTab({ asset, orders }) {
    const { classes } = AboutTab_useStyles();
    const topListing = resolveTopListing(orders);
    const { rarity } = Context.useContainer();
    if (!asset) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceCard, {
                topListing: topListing
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsCard, {
                asset: asset
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DescriptionCard, {
                asset: asset
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PropertiesCard, {
                timeline: true,
                asset: asset,
                rank: rarity.data?.rank
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceToNow/index.js
var formatDistanceToNow = __webpack_require__(2423);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/isValidTimestamp.ts
const ETHEREUM_GENESIS_BLOCK_DATE = 1262304000000;
// 2010-01-01
function isValidTimestamp(time) {
    if (!time) return false;
    return time >= ETHEREUM_GENESIS_BLOCK_DATE;
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/OfferCard.tsx










const OfferCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: 8,
            boxSizing: 'border-box',
            gap: 12,
            borderRadius: 8,
            // there is no public bg have to hardcode
            background: theme.palette.mode === 'dark' ? theme.palette.maskColor.bg : '#fff',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)'
        },
        offerDetail: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        flex: {
            display: 'flex',
            alignItems: 'center',
            gap: 6
        },
        textBase: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            '& > strong': {
                color: theme.palette.maskColor.main
            }
        },
        fallbackSymbol: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'flex-end'
        }
    }));
const OfferCard = /*#__PURE__*/ (0,react.memo)(function OfferCard({ offer, ...rest }) {
    const { classes, cx } = OfferCard_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const t = useCollectibleTrans();
    const renderTokenIcon = ()=>{
        if (offer.priceInToken?.token.logoURL) return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            width: 20,
            height: 20,
            src: offer.priceInToken?.token.logoURL,
            alt: ""
        });
        if (offer.priceInToken?.token.symbol.toUpperCase() === 'WETH') return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WETH, {
            size: 18
        });
        return offer.priceInToken?.token.address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            name: offer.priceInToken.token.name,
            symbol: offer.priceInToken.token.symbol,
            address: offer.priceInToken.token.address,
            size: 20,
            style: {
                fontSize: 14
            }
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.fallbackSymbol,
            children: offer.priceInToken?.token.symbol || offer.priceInToken?.token.name
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...rest,
        className: cx(classes.card, rest.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.offerDetail,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.flex,
                    children: [
                        renderTokenIcon(),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.flex,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.textBase,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: (0,formatBalance/* formatBalance */.a)(offer.priceInToken?.amount, offer.priceInToken?.token.decimals || 18, 6)
                                    })
                                }),
                                offer.price?.usd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.textBase,
                                    fontSize: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                            value: offer.price.usd,
                                            formatter: formatCurrency/* formatCurrency */.x
                                        })
                                    })
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.flex,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.textBase,
                            children: t.plugin_collectible_from()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.textBase,
                            style: {
                                marginRight: 6,
                                fontSize: '12px'
                            },
                            children: offer.maker?.address ? /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                style: {
                                    margin: '0px 4px'
                                },
                                children: Others.formatAddress(offer.maker.address, 4)
                            }) : '-'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.textBase,
                            children: [
                                isValidTimestamp(offer.createdAt) ? (0,formatDistanceToNow/* default */.Z)(Math.ceil(offer.createdAt), {
                                    addSuffix: true
                                }) : '-',
                                isValidTimestamp(offer.expiredAt) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                margin: '0 4px'
                                            },
                                            children: t.plugin_collectible_expires_in()
                                        }),
                                        (0,formatDistanceToNow/* default */.Z)(Math.ceil(offer.expiredAt), {
                                            addSuffix: true
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/OffersList.tsx








const OffersList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 247,
            width: '100%',
            height: 247,
            justifyContent: 'center',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        card: {
            marginBottom: theme.spacing(1.5)
        }
    }));
function OffersList(props) {
    const { offers, loading, finished, error, onRetry, onNext } = props;
    const orderedOffers = (0,react.useMemo)(()=>offers.sort((a, b)=>a.createdAt > b.createdAt ? -1 : 0), [
        offers
    ]);
    const { classes } = OffersList_useStyles();
    const t = useCollectibleTrans();
    if (loading && !orderedOffers.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
    });
    if (error && offers.length === 0) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
            onRetry: onRetry
        })
    });
    if (!orderedOffers.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
        height: 215,
        children: t.plugin_collectible_nft_offers_empty()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.wrapper,
        style: {
            justifyContent: 'unset'
        },
        "data-hide-scrollbar": true,
        children: [
            orderedOffers?.map((x, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OfferCard, {
                    offer: x,
                    className: classes.card
                }, idx)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                pb: "1px",
                width: "100%",
                direction: "row",
                justifyContent: "center",
                "data-hide-scrollbar": true,
                children: !finished && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "roundedContained",
                    sx: {
                        mb: 2
                    },
                    onClick: ()=>onNext?.(),
                    children: t.load_more()
                })
            })
        ]
    });
}
function OffersListWrapper(props) {
    const { offers } = props;
    const { setSourceType, sourceType = offers[0]?.source } = Context.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            !offers.length && !sourceType ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                mb: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SourceProviderSwitcher, {
                    selected: sourceType,
                    onSelect: setSourceType
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(OffersList, {
                ...props
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/CardDialog/tabs/OffersTab.tsx


function OffersTab(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(OffersListWrapper, {
        ...props
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/primitives.ts
var primitives = __webpack_require__(47469);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceToNowStrict/index.js
var formatDistanceToNowStrict = __webpack_require__(71822);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/ActivityCard.tsx









const ActivityCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 12,
            boxSizing: 'border-box',
            gap: 12,
            borderRadius: 8,
            color: theme.palette.maskColor.second,
            backgroundColor: theme.palette.maskColor.bg,
            position: 'relative'
        },
        flex: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        title: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        highlight: {
            // there is no public highlight color, temp hardcode
            color: '#1C68F3'
        },
        salePrice: {
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginRight: theme.spacing(2)
        },
        salePriceText: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        textBase: {
            display: 'flex',
            fontSize: 14,
            alignItems: 'center',
            whiteSpace: 'nowrap',
            lineHeight: '18px',
            color: theme.palette.maskColor.publicSecond,
            '& > strong': {
                color: theme.palette.maskColor.main,
                margin: '0px 8px'
            }
        },
        link: {
            color: theme.palette.maskColor.main,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginLeft: 4
        },
        linkOut: {
            color: theme.palette.maskColor.secondaryDark
        },
        fallbackSymbol: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'flex-end'
        }
    }));
function ActivityCard(props) {
    const { activity } = props;
    const { type } = activity;
    const t = useCollectibleTrans();
    const { classes, cx } = ActivityCard_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.flex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: type === specs/* ActivityType */.T8.Sale ? cx(classes.title, classes.highlight) : classes.title,
                        children: type
                    }),
                    ![
                        specs/* ActivityType */.T8.Mint,
                        specs/* ActivityType */.T8.CancelOffer
                    ].includes(type) && activity.priceInToken && !(0,number/* isZero */.Fr)(activity.priceInToken.amount) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.salePrice,
                        children: [
                            activity.paymentToken?.logoURL && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                width: 24,
                                height: 24,
                                src: activity.priceInToken.token.logoURL,
                                alt: activity.priceInToken.token.symbol
                            }) || /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fallbackSymbol,
                                children: activity.priceInToken.token.symbol || activity.priceInToken.token.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.salePriceText,
                                children: (0,formatBalance/* formatBalance */.a)(activity.priceInToken.amount, activity.priceInToken.token.decimals || 18, 2)
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.flex,
                children: [
                    activity.send ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.textBase,
                        children: [
                            t.plugin_collectible_from(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                title: activity.send.address,
                                children: type === specs/* ActivityType */.T8.Mint ? Others.formatAddress(primitives/* ZERO_ADDRESS */.r, 4) : activity.send.nickname || (activity.send.address ? Others.formatAddress(activity.send.address, 4) : '-')
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.textBase,
                        children: [
                            activity.receive && activity.from?.address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    t.plugin_collectible_to(),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        title: activity.receive.address,
                                        children: type === specs/* ActivityType */.T8.Mint ? Others.formatAddress(activity.from?.address, 4) : activity.receive.nickname || (activity.receive.address ? Others.formatAddress(activity.receive.address, 4) : '-')
                                    })
                                ]
                            }) : null,
                            isValidTimestamp(activity.timestamp) && (0,formatDistanceToNowStrict/* default */.Z)(new Date(activity.timestamp), {
                                addSuffix: true
                            }),
                            activity.hash ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: Others.explorerResolver.transactionLink?.(activity.chainId, activity.hash) ?? '',
                                target: "_blank",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    className: classes.linkOut,
                                    size: 16
                                })
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/ActivitiesList.tsx










const ActivitiesList_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 280,
        height: 280,
        width: '100%',
        justifyContent: 'center',
        rowGap: 12
    }
});
function ActivitiesList() {
    const { pluginID, tokenAddress, tokenId, chainId, ownerAddress } = Context.useContainer();
    const t = useCollectibleTrans();
    const { classes } = ActivitiesList_useStyles();
    const { data, isLoading, error, hasNextPage, fetchNextPage, refetch } = useNonFungibleEvents(pluginID, tokenAddress, tokenId, {
        chainId,
        account: ownerAddress
    });
    const events = (0,react.useMemo)(()=>data?.pages.flatMap((x)=>x.data) ?? src_constants/* EMPTY_LIST */.rP, [
        data?.pages
    ]);
    if (isLoading && !events.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        className: classes.wrapper
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
        className: classes.wrapper,
        onRetry: refetch
    });
    if (!events.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
        height: 215,
        children: t.plugin_collectible_nft_activity_empty()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.wrapper,
        style: {
            justifyContent: 'unset'
        },
        children: [
            events.map((x, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityCard, {
                    activity: x
                }, idx)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                pb: "1px",
                width: "100%",
                direction: "row",
                justifyContent: "center",
                children: hasNextPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    py: 1,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                        callback: ()=>fetchNextPage(),
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}) : null
                    })
                }) : null
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/CardDialog/tabs/ActivitiesTab.tsx


function ActivitiesTab() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivitiesList, {});
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/types.ts
var TabType;
(function(TabType) {
    TabType["About"] = "About";
    TabType["Offers"] = "Offers";
    TabType["Activities"] = "Activities";
})(TabType || (TabType = {}));

// EXTERNAL MODULE: ./packages/shared/src/hooks/useReportSpam.tsx
var useReportSpam = __webpack_require__(29128);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NFTFallbackImage/index.tsx
var NFTFallbackImage = __webpack_require__(85080);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenSecurity/index.tsx + 1 modules
var TokenSecurity = __webpack_require__(78199);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/FigureCard.tsx





const FigureCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        body: {
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            boxShadow: `0px 28px 56px -28px ${vars/* MaskColorVar */.Z.primary.alpha(0.5)}`,
            borderRadius: 20,
            overflow: 'hidden'
        },
        previewer: {
            inset: 0,
            margin: 'auto',
            position: 'absolute'
        },
        nameSm: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.publicMain,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            marginRight: 'auto'
        },
        nameLg: {
            fontSize: 18,
            fontWeight: 700,
            wordBreak: 'break-word',
            alignItems: 'center',
            marginRight: 'auto',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        nameLgBox: {
            display: 'flex',
            gap: 6,
            marginTop: 12,
            alignItems: 'center'
        },
        image: {},
        fallbackImage: {
            width: '100% !important',
            height: '100% !important',
            top: 0,
            position: 'absolute'
        },
        unset: {
            color: 'unset'
        },
        reportButton: {
            color: theme.palette.maskColor.main,
            height: 20,
            width: 20,
            padding: 0,
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 7
        }
    }));
function FigureCard(props) {
    // TODO: the collection name maybe is wrong
    const { asset, hideSubTitle, timeline } = props;
    const { classes, cx } = FigureCard_useStyles();
    const { isReporting, isSpam, promptReport } = (0,useReportSpam/* useReportSpam */.v)({
        address: asset.address,
        chainId: asset.chainId,
        collectionId: asset.collection?.id
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.previewer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                        classes: {
                            root: classes.image,
                            fallbackImage: classes.fallbackImage
                        },
                        url: asset.metadata?.imageURL,
                        fallbackImage: NFTFallbackImage/* NFTFallbackImage */.t
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                mt: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                    title: asset.metadata?.name,
                    as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: timeline ? cx(classes.nameSm, classes.unset) : classes.nameSm,
                        children: asset.metadata?.name ?? '-'
                    })
                })
            }),
            !hideSubTitle && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.nameLgBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                        title: asset.collection?.name,
                        as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.nameLg,
                            children: asset.collection?.name
                        })
                    }),
                    asset.collection?.verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Verification, {}) : null,
                    isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* NFTSpamBadge */.k, {
                        ml: "7px"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        className: classes.reportButton,
                        onClick: promptReport,
                        disabled: isReporting,
                        children: isReporting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                            size: 20
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Flag, {
                            size: 20
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/CardDialog/CardDialogContent.tsx





















const CardDialogContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        contentWrapper: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        mediaBox: {
            width: 300
        },
        contentLayout: {
            width: '100%',
            height: '100%',
            display: 'flex',
            padding: 24,
            boxSizing: 'border-box',
            paddingBottom: 72,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabWrapper: {
            width: 'calc(100% - 336px)',
            marginLeft: 36,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        footer: {
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 0px 20px rgba(0, 0, 0, 0.05)',
            position: 'sticky',
            bottom: 0
        },
        buttonText: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    }));
function CardDialogContent(props) {
    const { currentTab } = props;
    const { classes } = CardDialogContent_useStyles();
    const t = useCollectibleTrans();
    const { asset, orders, offers, origin, parentPluginID = PluginID/* NetworkPluginID */.F.PLUGIN_EVM, pluginID, chainId } = Context.useContainer();
    const currentVisitingIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const lastRecognized = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const currentIdentifier = (0,use_subscription.useSubscription)(context/* currentPersonaIdentifier */.cn);
    const personas = (0,useAllPersonas/* useAllPersonas */.T)();
    const onBeforeAction = (0,react.useCallback)(()=>{
        props.setOpen(false);
    }, [
        props.setOpen
    ]);
    const onPFPButtonClick = (0,react.useCallback)(()=>{
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.avatarSettingDialogEvent.sendToLocal({
            open: true,
            startPicking: true
        });
    }, []);
    const onMoreButtonClick = (0,react.useCallback)(()=>{
        const link = asset.data?.link;
        if (link) {
            (0,open_window/* openWindow */.x)(link);
            props.setOpen(false);
        }
    }, [
        asset.data?.link
    ]);
    if (asset.isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        height: "100%"
    });
    if (!asset.data) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
        height: "100%",
        message: t.load_failed(),
        onRetry: asset.refetch
    });
    // Links of Solana NFTs might be incorrect, we discard them temporarily.
    const externalLink = pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA && asset.data.source ? asset.data.link : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.contentWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.contentLayout,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.mediaBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FigureCard, {
                            timeline: true,
                            asset: asset.data
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.tabWrapper,
                        children: currentTab === TabType.About ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AboutTab, {
                            orders: offers,
                            asset: asset.data
                        }) : currentTab === TabType.Offers ? /*#__PURE__*/ (0,jsx_runtime.jsx)(OffersTab, {
                            offers: offers,
                            loading: orders.isLoading,
                            finished: !orders.hasNextPage,
                            onNext: orders.fetchNextPage,
                            onRetry: orders.refetch
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivitiesTab, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                value: {
                    pluginID: parentPluginID
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    className: classes.footer,
                    expectedPluginID: pluginID,
                    expectedChainId: chainId,
                    children: origin === 'pfp' && currentVisitingIdentity?.isOwner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectPersonaBoundary/* ConnectPersonaBoundary */.C, {
                        personas: personas,
                        identity: lastRecognized,
                        currentPersonaIdentifier: currentIdentifier,
                        openDashboard: dom_context/* openDashboard */.f8,
                        handlerPosition: "top-right",
                        customHint: true,
                        directTo: PluginID/* PluginID */.P.Avatar,
                        beforeAction: onBeforeAction,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            variant: "contained",
                            size: "medium",
                            onClick: onPFPButtonClick,
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Avatar, {
                                    size: 20
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: classes.buttonText,
                                    children: t.plugin_collectibles_pfp_button()
                                })
                            ]
                        })
                    }) : externalLink ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        variant: "contained",
                        size: "medium",
                        onClick: onMoreButtonClick,
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.buttonText,
                                children: t.plugin_collectibles_more_on_button({
                                    provider: asset.data.source === specs/* SourceType */.PO.NFTScan ? (0,resolver/* resolveSourceTypeName */.lz)(asset.data.source) : 'platform'
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                size: 16
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/CardDialog/CardDialog.tsx










const CardDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialogRoot: {
            width: 800,
            height: 800,
            maxWidth: 800
        },
        dialogContent: {
            width: '100%',
            background: theme.palette.maskColor.bottom,
            padding: 0,
            height: '100%',
            overflow: 'hidden'
        }
    }));
function CardDialog(props) {
    const t = useCollectibleTrans();
    const { classes } = CardDialog_useStyles();
    const { chainId, pluginID, tokenId, tokenAddress } = Context.useContainer();
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)(TabType.About, TabType.Offers, TabType.Activities);
    if (!chainId || !pluginID) return null;
    if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
        if (!tokenAddress || !tokenId) return null;
    }
    if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA) {
        if (!tokenAddress) return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        title: t.plugin_collectible_nft_details(),
        onClose: ()=>props.setOpen(false),
        classes: {
            paper: classes.dialogRoot
        },
        titleTabs: /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
            value: currentTab,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Components_Tabs/* MaskTabList */.C, {
                variant: "base",
                onChange: onChange,
                "aria-label": "NFTCard",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.plugin_collectible_about(),
                        value: TabType.About
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.plugin_collectible_offers(),
                        value: TabType.Offers
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.plugin_collectible_activities(),
                        value: TabType.Activities
                    })
                ]
            })
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardDialogContent, {
                open: props.open,
                setOpen: props.setOpen,
                currentTab: currentTab
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/DialogInspector.tsx






function DialogInspector() {
    const { pluginID: parentPluginID } = (0,useContext/* useNetworkContext */.gK)();
    const [open, setOpen] = (0,react.useState)(false);
    const [pluginID, setPluginID] = (0,react.useState)();
    const [chainId, setChainId] = (0,react.useState)();
    const [tokenId, setTokenId] = (0,react.useState)();
    const [tokenAddress, setTokenAddress] = (0,react.useState)();
    const [ownerAddress, setOwnerAddress] = (0,react.useState)();
    const [originType, setOriginType] = (0,react.useState)();
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)(pluginID, chainId);
    (0,react.useEffect)(()=>{
        if (!chainIdValid) setOpen(false);
    }, [
        chainIdValid
    ]);
    (0,react.useEffect)(()=>CrossIsolationEvents/* CrossIsolationMessages */.W.events.nonFungibleTokenDialogEvent.on((ev)=>{
            if (!ev.open) return;
            setPluginID(ev.pluginID);
            setChainId(ev.chainId);
            setTokenId(ev.tokenId);
            setTokenAddress(ev.tokenAddress);
            setOwnerAddress(ev.ownerAddress);
            setOriginType(ev.origin ?? 'unknown');
            setOpen(ev.open);
        }), []);
    if (!chainId || !pluginID) return null;
    if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
        if (!tokenAddress || !tokenId) return null;
    }
    // Solana NFT has no token id.
    if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA) {
        if (!tokenAddress) return null;
    }
    if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_FLOW) {
        if (!ownerAddress || !tokenAddress || !tokenId) return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
        value: {
            pluginID,
            chainId
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
            initialState: {
                parentPluginID,
                pluginID,
                chainId,
                tokenId: tokenId ?? '0',
                tokenAddress: tokenAddress,
                ownerAddress,
                origin: originType
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardDialog, {
                open: open,
                setOpen: setOpen
            }, `${tokenAddress}.${tokenId}`)
        })
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(82124);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(7081);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(77607);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isValid/index.js + 1 modules
var isValid = __webpack_require__(45282);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(55906);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Icon/index.tsx + 1 modules
var Icon = __webpack_require__(28236);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Shared/LinkingAvatar.tsx



function LinkingAvatar(props) {
    const { href, title, src, name } = props;
    const image = /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
        src: src,
        size: 48,
        rounded: true,
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
            size: 48,
            name: name
        })
    });
    if (URL.canParse(href)) {
        const url = new URL(href).toString();
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: url,
            title: title,
            target: "_blank",
            rel: "noopener noreferrer",
            children: image
        });
    } else {
        return image;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/CollectiblePaper.tsx


function CollectiblePaper(props) {
    const { children } = props;
    const classes = props.classes;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes?.root,
        elevation: 0,
        children: children
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/CollectibleCard.tsx



const CollectibleCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            width: '100%',
            height: '100%',
            borderRadius: 0,
            overflow: 'auto',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        overContent: {
            backgroundColor: theme.palette.maskColor.white,
            boxSizing: 'border-box'
        }
    };
});
function CollectibleCard(props) {
    const { classes } = CollectibleCard_useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        ...props.CardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.overContent,
            children: props.children
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/tabs/AboutTab.tsx








const tabs_AboutTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { hidePriceCard })=>({
        body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 300
        },
        basic: {
            width: '100%',
            marginBottom: hidePriceCard ? 0 : 16
        }
    }));
const AboutTab_resolveTopListing = (orders)=>{
    if (!orders?.length) return;
    return (0,head/* default */.Z)(orders.sort((a, b)=>{
        const value_a = new bignumber/* BigNumber */.O(a.priceInToken?.amount ?? 0);
        const value_b = new bignumber/* BigNumber */.O(b.priceInToken?.amount ?? 0);
        return Number(value_b.lt(value_a));
    }));
};
function AboutTab_AboutTab(props) {
    const { asset, isLoading } = props;
    const { orders, offers, sourceType } = Context.useContainer();
    const topListing = AboutTab_resolveTopListing(offers);
    const hidePriceCard = !topListing && Boolean(orders.error) && !sourceType;
    const { classes } = tabs_AboutTab_useStyles({
        hidePriceCard
    });
    if (isLoading || !asset) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.body,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.body,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.basic,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FigureCard, {
                        hideSubTitle: true,
                        asset: asset
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceCard, {
                    topListing: topListing
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/tabs/ActivitiesTab.tsx



function ActivitiesTab_ActivitiesTab() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivitiesList, {})
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/tabs/DetailsTab.tsx






const DetailsTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        info: {
            width: '100%',
            marginBottom: 24
        }
    }));
function DetailsTab(props) {
    const { asset, isLoading } = props;
    const { classes } = DetailsTab_useStyles();
    const { sourceType, rarity } = Context.useContainer();
    if (isLoading || !asset || rarity.isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.body,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.body,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.info,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsCard, {
                        sourceType: sourceType,
                        asset: asset
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PropertiesCard, {
                    rank: rarity.data?.rank,
                    asset: asset
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/tabs/OffersTab.tsx



function OffersTab_OffersTab(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OffersListWrapper, {
            ...props
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/Card/Collectible.tsx

















const Collectible_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { currentTab })=>{
    return {
        root: {
            width: '100%',
            padding: 0,
            paddingBottom: theme.spacing(2),
            backgroundColor: 'unset'
        },
        content: {
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important',
            margin: '0 12px'
        },
        header: {
            alignItems: 'unset',
            padding: 10
        },
        body: {
            flex: 1,
            backgroundColor: theme.palette.maskColor.bg,
            overflow: 'auto',
            maxHeight: currentTab === 'about' ? 800 : 327,
            borderRadius: '0 0 12px 12px',
            scrollbarWidth: 'none',
            background: '#fff !important',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tab: {
            whiteSpace: 'nowrap',
            background: 'transparent',
            color: theme.palette.maskColor.publicSecond,
            '&:hover': {
                background: 'transparent'
            }
        },
        tabActive: {
            background: '#fff',
            color: theme.palette.maskColor.publicMain,
            '&:hover': {
                background: '#fff'
            }
        },
        subtitle: {
            marginRight: theme.spacing(0.5),
            maxHeight: '3rem',
            overflow: 'auto',
            wordBreak: 'break-word',
            color: theme.palette.maskColor.publicSecond,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        countdown: {
            fontSize: 12,
            borderRadius: 8,
            display: 'block',
            white: '100%',
            color: theme.palette.common.white,
            backgroundColor: '#eb5757',
            padding: theme.spacing(0.5, 2)
        },
        markdown: {
            overflow: 'hidden',
            '& > p': {
                display: 'inline',
                color: `${theme.palette.maskColor.publicSecond} !important`
            },
            '& hr': {
                display: 'none'
            },
            '& a': {
                color: `${theme.palette.maskColor.publicMain} !important`
            }
        },
        cardTitle: {
            display: 'inline-flex',
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            color: theme.palette.maskColor.publicMain,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: 380
        },
        reportButton: {
            marginLeft: 'auto',
            backgroundColor: theme.palette.maskColor.bg,
            width: 24,
            height: 24,
            borderRadius: 4,
            color: theme.palette.maskColor.main,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            }
        },
        empty: {
            height: 150
        }
    };
});
function Collectible_Collectible() {
    const t = useCollectibleTrans();
    const [currentTab, onChange, tabs] = (0,useTabs/* useTabs */.Y)('about', 'details', 'offers', 'activities');
    const { classes } = Collectible_useStyles({
        currentTab
    });
    const { asset, orders } = Context.useContainer();
    const titleRef = (0,react.useRef)(null);
    const [outVerified, setOutVerified] = (0,react.useState)(false);
    (0,react.useLayoutEffect)(()=>{
        if (!titleRef) return;
        const offsetWidth = titleRef.current?.offsetWidth;
        const scrollWidth = titleRef.current?.scrollWidth;
        if (!offsetWidth || !scrollWidth) {
            setOutVerified(false);
        } else {
            setOutVerified(scrollWidth > offsetWidth);
        }
    }, []);
    const { isReporting, isSpam, promptReport } = (0,useReportSpam/* useReportSpam */.v)({
        address: asset.data?.address,
        chainId: asset.data?.chainId,
        collectionId: asset.data?.collection?.id
    });
    const offers = (0,react.useMemo)(()=>orders.data?.pages.flatMap((x)=>x.data) ?? src_constants/* EMPTY_LIST */.rP, [
        orders.data?.pages
    ]);
    if (asset.isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        height: 148,
        p: 1
    });
    if (!asset.data && !asset.error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
            className: classes.empty,
            children: t.nft_minted()
        });
    }
    if (!asset.data) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pb: 2,
            pt: 4,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                ButtonProps: {
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Restore, {
                        color: "white",
                        size: 18
                    }),
                    sx: {
                        width: 256
                    }
                },
                retry: ()=>asset.refetch()
            })
        });
    }
    const _asset = asset.data;
    const endDate = _asset.auction?.endAt;
    const renderTab = ()=>{
        const tabMap = {
            [tabs.about]: /*#__PURE__*/ (0,jsx_runtime.jsx)(AboutTab_AboutTab, {
                asset: asset.data,
                isLoading: asset.isLoading
            }),
            [tabs.details]: /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsTab, {
                asset: asset.data,
                isLoading: asset.isLoading
            }),
            [tabs.offers]: /*#__PURE__*/ (0,jsx_runtime.jsx)(OffersTab_OffersTab, {
                offers: offers,
                loading: orders.isLoading,
                error: orders.error,
                finished: !orders.hasNextPage,
                onRetry: orders.refetch,
                onNext: orders.fetchNextPage
            }),
            [tabs.activities]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivitiesTab_ActivitiesTab, {})
        };
        return tabMap[currentTab] || null;
    };
    const Tabs = [
        {
            value: tabs.about,
            label: t.plugin_collectible_about()
        },
        {
            value: tabs.details,
            label: t.plugin_collectible_details()
        },
        {
            value: tabs.offers,
            label: t.plugin_collectible_offers()
        },
        {
            value: tabs.activities,
            label: t.plugin_collectible_activities()
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectiblePaper, {
                classes: {
                    root: classes.root
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        className: classes.header,
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkingAvatar, {
                            href: _asset.link ?? '',
                            title: _asset.owner?.nickname ?? _asset.owner?.address ?? '',
                            name: _asset.metadata?.name ?? '',
                            src: _asset.collection?.iconURL ?? _asset.creator?.avatarURL ?? _asset.owner?.avatarURL ?? ''
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            component: "div",
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.cardTitle,
                                    ref: titleRef,
                                    children: [
                                        _asset.metadata?.name || '-',
                                        _asset.collection?.verified && !outVerified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Verification, {
                                            size: 20,
                                            sx: {
                                                marginLeft: 0.5
                                            }
                                        }) : null
                                    ]
                                }),
                                _asset.collection?.verified && outVerified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Verification, {
                                    size: 20,
                                    sx: {
                                        marginLeft: 0.5
                                    }
                                }) : null,
                                isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* NFTSpamBadge */.k, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    className: classes.reportButton,
                                    onClick: promptReport,
                                    disabled: isReporting,
                                    children: isReporting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                                        size: 16
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Flag, {
                                        size: 16
                                    })
                                })
                            ]
                        }),
                        subheader: _asset.metadata?.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.subtitle,
                            component: "div",
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                className: classes.markdown,
                                children: _asset.metadata.description
                            })
                        }) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
                                value: currentTab,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_Tabs/* MaskTabList */.C, {
                                    variant: "base",
                                    "aria-label": "collectible",
                                    onChange: onChange,
                                    children: Tabs.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                            className: x.value === currentTab ? classes.tabActive : classes.tab,
                                            value: x.value,
                                            label: x.label
                                        }, x.value))
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.body,
                                elevation: 0,
                                children: renderTab()
                            })
                        ]
                    })
                ]
            }),
            endDate && (0,isValid/* default */.Z)(endDate) && (0,isAfter/* default */.Z)(endDate, Date.now()) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.countdown,
                    children: t.plugin_collectible_sale_end({
                        time: (0,format/* default */.Z)(endDate, 'yyyy-MM-dd HH:mm:ss')
                    })
                })
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/PostInspector.tsx






function PostInspector(props) {
    const token = props.payload;
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme/* MaskLightTheme */.C,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
            initialState: {
                parentPluginID: pluginID,
                pluginID: token.pluginID,
                chainId: token.chainId,
                tokenId: token.tokenId,
                tokenAddress: token.address
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                value: {
                    pluginID: token.pluginID,
                    chainId: token.chainId
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible_Collectible, {})
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Collectible/src/SiteAdaptor/index.tsx



















function useInspectCollectible(pluginID) {
    return (0,react.useCallback)(function inspectCollectible(asset, from) {
        if (!pluginID) return;
        if (from === 'web3Profile') providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryProfileUserNftsClickNft);
        else if (from === 'profileCard') providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryTimelineHoverUserNftClickNft);
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.nonFungibleTokenDialogEvent.sendToLocal({
            open: true,
            chainId: asset.chainId,
            pluginID,
            tokenId: asset.tokenId,
            tokenAddress: asset.address
        });
    }, [
        pluginID
    ]);
}
const gridProps = {
    columns: 'repeat(auto-fill, minmax(20%, 1fr))'
};
const usePopupCollectionStyles = (0,makeStyles/* makeStyles */.Z)()({
    sidebar: {
        paddingBottom: 48
    }
});
const TabConfig = {
    ID: `${constants/* PLUGIN_ID */.Uu}_nfts`,
    label: 'NFTs',
    priority: 4,
    UI: {
        TabContent ({ socialAccount }) {
            const inspectCollectible = useInspectCollectible(socialAccount?.pluginID);
            if (!socialAccount) return null;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                value: {
                    pluginID: socialAccount.pluginID
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserAssetsContext/* UserAssetsProvider */.z, {
                    pluginID: socialAccount.pluginID,
                    account: socialAccount.address,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionList/* CollectionList */.G, {
                        gridProps: gridProps,
                        from: "web3Profile",
                        onItemClick: (asset)=>inspectCollectible(asset, 'web3Profile')
                    })
                })
            });
        }
    },
    Utils: {
        sorter: (a, z)=>{
            if (a.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.ENS)) return -1;
            if (z.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.ENS)) return 1;
            if (a.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.RSS3)) return -1;
            if (z.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.RSS3)) return 1;
            if (a.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.Address)) return -1;
            if (z.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.Address)) return 1;
            return 0;
        }
    }
};
const site = {
    ...base/* base */.u,
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogInspector, {});
    },
    PostInspector () {
        const links = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
        const payload = getPayloadFromURLs(links);
        (0,usePluginWrapper/* usePluginWrapper */.f)(!!payload);
        return payload ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: payload
        }) : null;
    },
    DecryptedInspector (props) {
        const links = (0,parseURLs/* parseURLs */.l)((0,extract/* extractTextFromTypedMessage */.V)(props.message, {
            linkAsText: true
        }).unwrapOr(''));
        const payload = getPayloadFromURLs(links);
        (0,usePluginWrapper/* usePluginWrapper */.f)(!!payload);
        return payload ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: payload
        }) : null;
    },
    ProfileTabs: [
        TabConfig
    ],
    ProfileCardTabs: [
        {
            ...TabConfig,
            priority: 4,
            UI: {
                TabContent ({ socialAccount }) {
                    const inspectCollectible = useInspectCollectible(socialAccount?.pluginID);
                    const { classes } = usePopupCollectionStyles();
                    if (!socialAccount) return null;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                        value: {
                            pluginID: socialAccount.pluginID
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserAssetsContext/* UserAssetsProvider */.z, {
                            pluginID: socialAccount.pluginID,
                            account: socialAccount.address,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionList/* CollectionList */.G, {
                                height: 392,
                                gridProps: gridProps,
                                classes: {
                                    sidebar: classes.sidebar
                                },
                                disableWindowScroll: true,
                                from: "profileCard",
                                onItemClick: (asset)=>inspectCollectible(asset, 'profileCard')
                            })
                        })
                    });
                }
            },
            Utils: {
                ...TabConfig.Utils,
                shouldDisplay (identity, socialAccount) {
                    return socialAccount?.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM;
                }
            }
        }
    ],
    SearchResultTabs: [
        {
            ...TabConfig,
            priority: 4,
            UI: {
                TabContent ({ result }) {
                    const socialAccount = {
                        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                        address: result.type === specs/* SearchResultType */.Bk.Domain ? result.address ?? '' : result.keyword,
                        label: result.type === specs/* SearchResultType */.Bk.Domain ? result.keyword : result.type === specs/* SearchResultType */.Bk.EOA ? result.domain ?? '' : '',
                        supportedAddressTypes: [
                            SocialIdentity/* SocialAddressType */.b.ENS
                        ]
                    };
                    const inspectCollectible = useInspectCollectible(socialAccount?.pluginID);
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        style: {
                            minHeight: 300
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                            value: {
                                pluginID: result.pluginID
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserAssetsContext/* UserAssetsProvider */.z, {
                                pluginID: result.pluginID,
                                account: socialAccount.address,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionList/* CollectionList */.G, {
                                    height: 479,
                                    gridProps: gridProps,
                                    disableWindowScroll: true,
                                    onItemClick: inspectCollectible
                                })
                            })
                        })
                    });
                }
            },
            Utils: {
                ...TabConfig.Utils,
                shouldDisplay (result) {
                    return [
                        specs/* SearchResultType */.Bk.Domain,
                        specs/* SearchResultType */.Bk.EOA
                    ].includes(result.type);
                }
            }
        }
    ],
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base */.u.ID,
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_collectibles_description",
                ns: PluginID/* PluginID */.P.Collectible
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_collectibles_name",
                ns: PluginID/* PluginID */.P.Collectible
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Collectibles, {
                size: 36
            }),
            marketListSortingPriority: 7,
            tutorialLink: 'https://realmasknetwork.notion.site/c388746f11774ecfa17914c900d3ed97'
        }
    ],
    wrapperProps: {
        title: constants/* PLUGIN_NAME */.EW,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ApplicationNFT, {
            size: 24
        })
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 38096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ openWindow)
/* harmony export */ });
// Behavior
// Dimension
function openWindow(url, target = '_blank', features = {}) {
    if (!url) return null;
    const flags = [];
    for (const [name, value] of Object.entries(features.behaviors ?? {})){
        if (value) flags.push(`${name}=1`);
    }
    if (!features.opener) flags.push('noopener');
    if (!features.referrer) flags.push('noreferrer');
    if (Number.isFinite(features.width)) flags.push(`width=${features.width}`);
    if (Number.isFinite(features.height)) flags.push(`height=${features.height}`);
    if (Number.isFinite(features.screenX)) flags.push(`screenX=${features.screenX}`);
    if (Number.isFinite(features.screenY)) flags.push(`screenY=${features.screenY}`);
    return window.open(url, target, flags.join(' '));
}


/***/ }),

/***/ 83220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useEverSeen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58778);


function useEverSeen() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [seen, setSeen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const nullRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const entry = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(seen ? nullRef : ref, {});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (entry?.isIntersecting) setSeen(true);
    }, [
        entry?.isIntersecting
    ]);
    return [
        seen,
        ref
    ];
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

/***/ 76670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ChainIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28236);



const ChainIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ChainIcon({ ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
        ...rest,
        sx: {
            fontSize: 12,
            fontWeight: 'bold',
            ...rest.sx
        },
        size: rest.size ?? 12.5
    });
});


/***/ }),

/***/ 4145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ConnectPersonaBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45262);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37377);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54928);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            flex: 1,
            position: 'relative'
        },
        mask: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            cursor: 'pointer'
        },
        button: {
            borderRadius: '99px',
            backgroundColor: theme.palette.maskColor.dark,
            color: theme.palette.maskColor.white,
            marginTop: 'auto',
            ':hover': {
                color: theme.palette.maskColor.white,
                backgroundColor: theme.palette.maskColor.dark
            }
        }
    }));
const ConnectPersonaBoundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children, directTo, handlerPosition = 'center', customHint = false, createConfirm = true, enableVerify = true, personas, beforeAction, afterAction, currentPersonaIdentifier, identity, openDashboard })=>{
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { classes } = useStyles();
    const { value: status, loading: statusLoading } = (0,_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentPersonaConnectStatus */ .H)(personas, currentPersonaIdentifier, openDashboard, identity);
    const isFnChildren = typeof children === 'function';
    const actionComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (children && customHint && !isFnChildren) return children;
        if (isFnChildren) return children(status);
        if (!status.action) return null;
        if (!status.hasPersona) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            disabled: statusLoading,
            className: classes.button,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Identity, {
                    size: 18,
                    sx: {
                        marginRight: '8px'
                    }
                }),
                t.persona_boundary_create_persona()
            ]
        });
        if (!status.connected) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            disabled: statusLoading,
            className: classes.button,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Connect, {
                    size: 18,
                    sx: {
                        marginRight: '8px',
                        color: '#fff'
                    }
                }),
                t.persona_boundary_connect_persona()
            ]
        });
        if (!status.verified) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            disabled: statusLoading,
            className: classes.button,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Connect, {
                    size: 18,
                    sx: {
                        marginRight: '8px',
                        color: '#fff'
                    }
                }),
                t.persona_boundary_verify_persona()
            ]
        });
        return null;
    }, [
        t,
        status,
        statusLoading,
        customHint,
        isFnChildren,
        children
    ]);
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        beforeAction?.(status);
        if (!status.hasPersona || !status.connected) {
            status.action?.(directTo ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .DashboardRoutes */ .vq.SignUpPersona, handlerPosition, enableVerify, !createConfirm);
            return;
        }
        if (!status.verified) status.action?.(directTo, handlerPosition, enableVerify, !createConfirm);
        afterAction?.(status);
    }, [
        directTo,
        handlerPosition,
        status,
        createConfirm
    ]);
    if (statusLoading) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        className: classes.root,
        display: "inline-flex",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                style: {
                    pointerEvents: status.action ? 'none' : 'auto'
                },
                display: "inline-flex",
                children: actionComponent
            }),
            status.action || statusLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.mask,
                display: "inline-flex"
            }) : null
        ]
    });
});


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

/***/ 28236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Icon)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/name2Image.ts
const DEFAULT_IMAGES = [
    new URL(/* asset import */ __webpack_require__(32665), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(63417), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(74246), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(85663), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(38374), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(51139), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(82567), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(15213), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(52660), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(33605), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(32297), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(53066), __webpack_require__.b).toString()
];
const name2Image = (name)=>{
    if (!name) return DEFAULT_IMAGES[0];
    let sum = 0;
    for(let i = 0; i < name.length; i += 1){
        sum += name.charCodeAt(i);
    }
    return DEFAULT_IMAGES[sum % DEFAULT_IMAGES.length];
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/index.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { size })=>({
        icon: {
            margin: 0,
            borderRadius: '50%',
            color: `${theme.palette.maskColor.dark} !important`,
            backgroundSize: 'cover',
            height: size,
            width: size
        }
    }));
const Icon = /*#__PURE__*/ (0,react.memo)(function Icon(props) {
    const { logoURL, size, color, name, label, className, ...rest } = props;
    const [failed, setFailed] = (0,react.useState)(false);
    const defaultBackgroundImage = name2Image(name);
    const { classes, cx } = useStyles({
        size
    });
    const theme = (0,useTheme/* default */.Z)();
    const showImage = logoURL && !failed;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: cx(classes.icon, className),
        src: logoURL,
        ...rest,
        imgProps: {
            onError: (event)=>{
                setFailed(true);
                rest.imgProps?.onError?.(event);
            },
            ...rest.imgProps
        },
        sx: {
            ...rest.sx,
            backgroundImage: showImage ? undefined : `url("${defaultBackgroundImage}")`,
            backgroundColor: showImage ? color ?? theme.palette.common.white : undefined
        },
        children: label ?? name?.slice(0, 1).toUpperCase() ?? '?'
    });
});
Icon.displayName = 'Icon';


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

/***/ 85080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ NFTFallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);

const NFTFallbackImage = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 126 126",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "url(#FallbackImage_svg__a)",
            d: "M0 .191h126v126H0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "url(#FallbackImage_svg__b)",
            d: "M0 .191h126v126H0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            width: "30.238",
            height: "30",
            x: "46.869",
            y: "46.691",
            fill: "url(#FallbackImage_svg__c)",
            rx: "15"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            width: "30.238",
            height: "30",
            x: "46.869",
            y: "46.691",
            fill: "url(#FallbackImage_svg__d)",
            rx: "15"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M70.75 58.288v4.861H55.518a6.62 6.62 0 0 0 6.459 5.153 6.622 6.622 0 0 0 5.942-3.694h2.83v4.083c0 .966-.784 1.75-1.752 1.75h-14.02a1.751 1.751 0 0 1-1.752-1.75V58.288H70.75Zm-4.511 6.32a5.156 5.156 0 0 1-4.263 2.247c-1.77 0-3.332-.89-4.262-2.247h8.525Zm-8-5.153a2.725 2.725 0 0 0-2.698 2.333h1.494a1.266 1.266 0 0 1 2.409 0h1.494a2.726 2.726 0 0 0-2.699-2.333Zm7.497 0a2.726 2.726 0 0 0-2.699 2.333h1.494a1.266 1.266 0 0 1 2.41 0h1.493a2.726 2.726 0 0 0-2.698-2.333Zm3.261-6.514c.968 0 1.753.783 1.753 1.75v2.139H53.225v-2.14c0-.966.785-1.75 1.753-1.75h14.02Z",
            clipRule: "evenodd"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__a",
                    x1: "0",
                    x2: "126",
                    y1: "63.191",
                    y2: "63.191",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#627EEA",
                            stopOpacity: ".2"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__b",
                    x1: "63",
                    x2: "63",
                    y1: ".191",
                    y2: "126.191",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#fff",
                            stopOpacity: ".9"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__c",
                    x1: "46.869",
                    x2: "77.107",
                    y1: "61.691",
                    y2: "61.691",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#627EEA",
                            stopOpacity: ".2"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__d",
                    x1: "61.988",
                    x2: "61.988",
                    y1: "46.691",
                    y2: "76.691",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#fff",
                            stopOpacity: ".9"
                        })
                    ]
                })
            ]
        })
    ]
});


/***/ }),

/***/ 21508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70858);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78909);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





/**
     * It's allow to add custom network with duplicate chainIds. Network could
     * be specified with this prop.
     */ const NetworkIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NetworkIcon(props) {
    const { pluginID, chainId, icon, network: expectedNetwork, ...rest } = props;
    const fallbackNetwork = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useNetwork */ .L)(pluginID, chainId);
    const network = expectedNetwork || fallbackNetwork;
    const iconUrl = network?.iconUrl || icon;
    if (iconUrl && !network?.isCustomized) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_3__/* .ImageIcon */ .X, {
        size: 20,
        ...rest,
        icon: iconUrl
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__/* .ChainIcon */ .f, {
        size: rest.size || 20,
        name: network?.name,
        color: rest.color || network?.color,
        className: rest.className
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

/***/ 65333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ SelectNetworkSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32024);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _NetworkIcon_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21508);






const AllButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(({ theme })=>({
        display: 'inline-block',
        padding: 0,
        borderRadius: '50%',
        fontSize: 10,
        backgroundColor: theme.palette.maskColor.highlight,
        '&:hover': {
            backgroundColor: theme.palette.maskColor.highlight,
            boxShadow: 'none'
        }
    }));
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()({
    sidebar: {
        flexShrink: 0,
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    networkButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        width: 24,
        minWidth: 24,
        height: 24,
        maxWidth: 24,
        padding: 0
    },
    indicator: {
        position: 'absolute',
        right: -3,
        bottom: -1
    }
});
const SelectNetworkSidebar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function SelectNetworkSidebar({ networks, chainId, pluginID, onChainChange, hideAllButton, className, ...rest }) {
    const { classes, cx } = useStyles();
    // Do not translate the "All" button
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: cx(classes.sidebar, className),
        ...rest,
        children: [
            networks.length > 1 && !hideAllButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AllButton, {
                className: classes.networkButton,
                onClick: ()=>onChainChange?.(undefined),
                children: [
                    "All",
                    !chainId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.BorderedSuccess, {
                        className: classes.indicator,
                        size: 12
                    }) : null
                ]
            }) : null,
            networks.map((x)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    variant: "text",
                    className: classes.networkButton,
                    disableRipple: true,
                    onClick: ()=>onChainChange?.(x.chainId),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NetworkIcon_index_js__WEBPACK_IMPORTED_MODULE_6__/* .NetworkIcon */ .d, {
                            pluginID: pluginID,
                            chainId: x.chainId,
                            size: 24,
                            network: x
                        }),
                        chainId === x.chainId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.BorderedSuccess, {
                            className: classes.indicator,
                            size: 12
                        }) : null
                    ]
                }, x.chainId))
        ]
    });
});


/***/ }),

/***/ 31547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SourceProviderIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);



function SourceProviderIcon(props) {
    const { size = 16 } = props;
    switch(props.provider){
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.NFTScan:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.NFTScan, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.Gem:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Gem, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.Rarible:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Rarible, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.OpenSea:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSea, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CoinGecko, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CoinMarketCap, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.UniswapInfo:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Uniswap, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.LooksRare:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.LooksRare, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.X2Y2:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.X2Y2, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.SimpleHash:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.SimpleHash, {
                size: size
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
}


/***/ }),

/***/ 95621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TokenIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61811);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81755);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28236);








const TokenIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TokenIcon(props) {
    const { pluginID = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId: propChainId, address, logoURL, symbol, tokenType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.Fungible, disableDefaultIcon, name, ...rest } = props;
    const { data: token } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleToken */ .c)(pluginID, address, undefined, {
        chainId: propChainId
    });
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)({
        chainId: props.chainId
    });
    const Hub = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Hub */ .h)(pluginID);
    const isNFT = tokenType === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.NonFungible;
    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            'token-icon',
            chainId,
            address,
            isNFT
        ],
        enabled: !logoURL,
        queryFn: async ()=>{
            const logoURLs = isNFT ? (()=>{
                throw new Error("Unreachable: it used to call Hub.getNonFungibleTokenIconURLs, but it's default implementation is throw an error, and not override by any subclass.");
            })() : await Hub.getFungibleTokenIconURLs(chainId, address).catch(()=>[]);
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(logoURLs);
        }
    });
    if (data && disableDefaultIcon) return null;
    const text = token?.name || token?.symbol || symbol || name || '?';
    // `?` prevent to fallback to avatar icon
    const url = logoURL || token?.logoURL || data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Icon */ .J, {
        ...rest,
        logoURL: url,
        name: text
    });
});


/***/ }),

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

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PluginWalletStatusBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6764);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23935);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98170);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84305);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20701);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6379);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62649);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24770);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8772);
/* harmony import */ var _WalletDescription_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58307);
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(72116);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25127);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            boxSizing: 'content-box',
            display: 'flex',
            backgroundColor: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_dashboard_page ? _masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar */ .Z.mainBackground : (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .Fq)(theme.palette.maskColor.bottom, 0.8),
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
        }
    }));
const PluginWalletStatusBarWithoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ className, onClick, expectedPluginID, expectedChainId, children, requiredSupportChainIds, requiredSupportPluginID })=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useSharedTrans */ .j)();
    const { classes, cx } = useStyles();
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useNetworkContext */ .gK)();
    const { account, chainId, providerType } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useChainContext */ .ql)();
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useWallet */ .O)(pluginID);
    const providerDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useProviderDescriptor */ .f)();
    const networkDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkDescriptor */ .V)(pluginID, chainId);
    const expectedNetworkDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkDescriptor */ .V)(expectedPluginID, expectedChainId);
    const { data: domain } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__/* .useReverseAddress */ .$)(pluginID, account);
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_12__/* .useWeb3Others */ .v)();
    const openSelectProviderDialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        _index_js__WEBPACK_IMPORTED_MODULE_13__/* .SelectProviderModal */ .ge.open({
            requiredSupportChainIds,
            requiredSupportPluginID
        });
    }, [
        expectedNetworkDescriptor,
        requiredSupportChainIds,
        requiredSupportPluginID
    ]);
    const pendingTransactions = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_14__/* .useRecentTransactions */ .S)(pluginID, _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__.TransactionStatusType.NOT_DEPEND);
    const walletName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (domain) return domain;
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .ProviderType */ .lP.MaskWallet && wallet?.name) return wallet?.name;
        return providerDescriptor?.name || Others.formatAddress(account, 4);
    }, [
        account,
        domain,
        providerType,
        wallet?.name,
        providerDescriptor?.name,
        Others.formatAddress
    ]);
    if (!account) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            className: cx(classes.root, className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                fullWidth: true,
                onClick: openSelectProviderDialog,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_19__.Wallet, {
                        className: classes.connection
                    }),
                    " ",
                    t.plugin_wallet_connect_a_wallet()
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: cx(classes.root, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletDescription_js__WEBPACK_IMPORTED_MODULE_20__/* .WalletDescription */ .a, {
                pending: !!pendingTransactions.length,
                providerIcon: providerDescriptor?.icon,
                networkIcon: networkDescriptor?.icon,
                iconFilterColor: providerDescriptor?.iconFilterColor,
                name: walletName,
                formattedAddress: Others.formatAddress(account, 4),
                addressLink: Others.explorerResolver.addressLink(chainId, account),
                onClick: onClick ?? openSelectProviderDialog,
                onPendingClick: ()=>_index_js__WEBPACK_IMPORTED_MODULE_13__/* .WalletStatusModal */ .L9.open()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Action_js__WEBPACK_IMPORTED_MODULE_21__/* .Action */ .a, {
                openSelectWalletDialog: openSelectProviderDialog,
                children: children
            })
        ]
    });
});
PluginWalletStatusBarWithoutContext.displayName = 'PluginWalletStatusBarWithoutContext';
const PluginWalletStatusBar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const children = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .RevokeChainContextProvider */ .fw, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWalletStatusBarWithoutContext, {
            ...props
        })
    });
    return props.actualPluginID ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkContextProvider */ .f6, {
        value: props.actualPluginID,
        children: children
    }) : children;
});
PluginWalletStatusBar.displayName = 'PluginWalletStatusBar';


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

/***/ 34134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 64149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Boundary),
/* harmony export */   b: () => (/* binding */ useBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const BoundaryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    boundaryRef: {
        current: null
    }
});
// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
const Boundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children })=>{
    const boundaryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            boundaryRef
        }), [
        boundaryRef.current
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoundaryContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
            ...children.props,
            ref: boundaryRef
        })
    });
});
Boundary.displayName = 'Boundary';
function useBoundary() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BoundaryContext);
}


/***/ }),

/***/ 24500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 22596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ MaskTabList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ButtonGroup/ButtonGroup.js
var ButtonGroup = __webpack_require__(8952);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/BaseTab.tsx



const BaseTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 36,
        lineHeight: '18px',
        boxShadow: activated ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(1.5)} ${theme.spacing(1.5)} 0px 0px !important`,
        color: activated ? theme.palette.maskColor.main : theme.palette.maskColor.secondaryDark,
        fontSize: 16,
        fontWeight: 'bold',
        '&:hover': {
            boxShadow: activated ? '0 0 20px rgba(0, 0, 0, 0.05)' : 'none',
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        },
        // If there is only single one tab.
        '&:first-of-type:last-of-type': {
            maxWidth: '25%'
        }
    }));
const BaseTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BaseTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: (e)=>handleClick(e),
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/FlexibleTab.tsx



const FlexibleTabTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flexShrink: 0,
        flexGrow: 0,
        padding: theme.spacing(1.25, 1.5),
        height: 38,
        lineHeight: '16px',
        minWidth: theme.spacing(3),
        background: activated ? theme.palette.maskColor.input : 'transparent',
        borderRadius: `${theme.spacing(1)} !important`,
        color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold !important',
        '&:hover': {
            background: activated ? theme.palette.maskColor.input : 'transparent',
            color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.primary,
            boxShadow: 'none'
        }
    }));
const FlexibleTab = /*#__PURE__*/ (0,react.memo)((props)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const { isVisitable, ...rest } = props;
    const ref = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!activated) return;
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!visitable) onChange?.({}, String(value), visitable);
    }, []);
    const handleClick = (event)=>{
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!activated && onChange) onChange(event, String(value), visitable);
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleTabTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...rest,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBackIosNew.js


/* harmony default export */ const ArrowBackIosNew = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
}), 'ArrowBackIosNew'));
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useClickAway.js
var useClickAway = __webpack_require__(47824);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/RoundTab.tsx



const RoundTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 34,
        lineHeight: '16px',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(2)} !important`,
        color: activated ? theme.palette.text.primary : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
        '&:hover': {
            boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
            color: theme.palette.text.primary,
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        }
    }));
const RoundTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoundTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/index.tsx









const defaultTabSize = 38;
const ArrowButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme })=>({
        position: 'absolute',
        top: 0,
        right: 0,
        padding: theme.spacing(1.5),
        height: defaultTabSize,
        width: defaultTabSize,
        minWidth: `${defaultTabSize}px !important`,
        background: theme.palette.background.input,
        '&:hover': {
            background: theme.palette.background.input
        }
    }));
const ArrowBackIosNewIconWrap = (0,styled/* default */.ZP)(ArrowBackIosNew)(({ theme })=>({
        color: theme.palette.text.primary,
        width: 16,
        borderRadius: '0 8px 8px 0'
    }));
const FlexibleButtonGroupPanel = (0,styled/* default */.ZP)(Box/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'isOpen'
})(({ theme, isOpen = false })=>({
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        padding: theme.spacing(1.5),
        maxWidth: 'calc(100% - 24px)',
        width: 'calc(100% - 24px)',
        boxShadow: isOpen ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        backdropFilter: 'blur(20px)',
        background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
        boxSizing: 'content-box'
    }));
const ButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant'
})(({ theme, maskVariant = 'base' })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflowY: 'clip',
        flex: 1,
        gap: theme.spacing(1),
        ...maskVariant === 'round' ? {
            padding: theme.spacing(0.5),
            background: theme.palette.maskColor.input,
            borderRadius: 18
        } : maskVariant === 'flexible' ? {
            background: 'transparent',
            borderRadius: 0
        } : {
            marginTop: theme.spacing(-1),
            paddingTop: theme.spacing(1),
            background: 'transparent',
            borderRadius: 0
        }
    }));
const FlexButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant' && prop !== 'isOpen' && prop !== 'isOverflow'
})(({ theme, maskVariant = 'base', isOpen = false, isOverflow = false })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: isOpen ? 'wrap' : 'nowrap',
        overflow: 'hidden',
        flex: 1,
        maxWidth: '100%',
        paddingRight: isOpen ? defaultTabSize : 0,
        gap: maskVariant !== 'base' ? theme.spacing(1) : 0,
        borderRadius: 0,
        background: !isOpen && isOverflow ? theme.palette.mode === 'light' ? `linear-gradient(270deg, rgba(255,255,255,1) ${defaultTabSize}px, rgba(223, 229, 244, 0.8) ${defaultTabSize}px, rgba(244, 247, 254, 0) 72px)` : `linear-gradient(270deg, transparent ${defaultTabSize}px, rgba(49, 49, 49, 0.8) ${defaultTabSize}px, rgba(23, 23, 23, 0) 72px)` : 'transparent'
    }));
const tabMapping = {
    flexible: FlexibleTab,
    round: RoundTab,
    base: BaseTab
};
/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTabs('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <MaskTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </MaskTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const MaskTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    const classes = props.classes;
    const [open, handleToggle] = (0,react.useState)(false);
    const [isTabsOverflow, setIsTabsOverflow] = (0,react.useState)(false);
    const [firstId, setFirstTabId] = (0,react.useState)(context?.value);
    const innerRef = (0,react.useRef)(null);
    const anchorRef = (0,react.useRef)(null);
    const flexPanelRef = (0,react.useRef)(null);
    const { width } = (0,useWindowSize/* default */.Z)();
    if (context === null) throw new TypeError('No TabContext provided');
    const { onChange, variant = 'base', hideArrowButton, ...rest } = props;
    (0,react.useImperativeHandle)(ref, ()=>innerRef?.current);
    // #region hide tab should up to first when chick
    (0,react.useEffect)(()=>{
        if (!innerRef?.current) return;
        const current = innerRef.current;
        setIsTabsOverflow(current.scrollWidth >= current.clientWidth + defaultTabSize);
    }, [
        innerRef?.current,
        width
    ]);
    // #endregion
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) throw new TypeError('Invalided Children');
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            className: child.props.className,
            onChange: (event, value, visitable)=>{
                handleToggle(false);
                props.onChange(event, value);
                if (variant === 'flexible' && !visitable) {
                    setFirstTabId(value);
                }
            }
        };
        if (child.type !== Tab/* default */.Z) return child;
        if (variant === 'flexible') {
            Object.assign(extra, {
                // if move tab to first in flexible tabs
                isVisitable: (top, right)=>{
                    const anchor = anchorRef.current?.getBoundingClientRect();
                    return right <= (anchor?.right ?? 0) - defaultTabSize && top - (anchor?.top ?? 0) < defaultTabSize;
                }
            });
        }
        const C = tabMapping[variant];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(C, {
            value: child.props.value,
            ...extra,
            children: child.props.label
        });
    });
    // #region hide tab should up to first when chick
    const flexibleTabs = (0,react.useMemo)(()=>{
        if (variant !== 'flexible') return null;
        return children?.sort((a, b)=>{
            if (a.props.value === firstId) return -1;
            if (b.props.value === firstId) return 1;
            return 0;
        });
    }, [
        firstId,
        children
    ]);
    // #endregion
    // #region Should close panel when click other area
    (0,useClickAway/* default */.Z)(flexPanelRef, (event)=>{
        if (variant !== 'flexible') return;
        const { left, right, top, bottom } = innerRef.current?.getBoundingClientRect() ?? {
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
        };
        const pointerX = event.x ?? 0;
        const pointerY = event.y ?? 0;
        if (pointerX > right || pointerX < left || pointerY < top || pointerY > bottom) handleToggle(false);
    });
    // #endregion
    if (variant === 'flexible') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            position: "relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
                    maskVariant: variant,
                    ref: anchorRef,
                    style: {
                        visibility: 'hidden',
                        height: defaultTabSize
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleButtonGroupPanel, {
                    isOpen: !!(open && isTabsOverflow),
                    ref: flexPanelRef,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexButtonGroupWrap, {
                        maskVariant: variant,
                        isOpen: open,
                        isOverflow: !!(isTabsOverflow && !hideArrowButton),
                        ...rest,
                        ref: innerRef,
                        role: "tablist",
                        children: [
                            flexibleTabs,
                            (isTabsOverflow || open) && !hideArrowButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowButtonWrap, {
                                className: classes?.arrowButton,
                                variant: "text",
                                size: "small",
                                "aria-controls": open ? 'split-button-menu' : undefined,
                                "aria-expanded": open ? 'true' : undefined,
                                "aria-label": "select tabs list",
                                "aria-haspopup": "menu",
                                onClick: ()=>handleToggle(!open),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackIosNewIconWrap, {
                                    sx: {
                                        transform: open ? 'rotate(90deg)' : 'rotate(270deg)'
                                    }
                                })
                            }) : null
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
        maskVariant: variant,
        ...rest,
        ref: innerRef,
        role: "tablist",
        children: children
    });
});
MaskTabList.displayName = 'MaskTabList';


/***/ }),

/***/ 86999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useBoundedPopperProps)
/* harmony export */ });
/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64149);

function useBoundedPopperProps() {
    const { boundaryRef } = (0,_Components_index_js__WEBPACK_IMPORTED_MODULE_0__/* .useBoundary */ .b)();
    const tooltipPopperProps = {
        disablePortal: !!boundaryRef.current,
        placement: 'top',
        modifiers: [
            {
                name: 'flip',
                options: {
                    rootBoundary: boundaryRef.current,
                    boundary: boundaryRef.current
                }
            }
        ]
    };
    return tooltipPopperProps;
}


/***/ }),

/***/ 16941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 93349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ makeTypedMessageImage),
/* harmony export */   c: () => (/* binding */ isTypedMessageImage)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/**
 * A single image
 * TODO: it should be serializable but still not decided how to do that yet.
 */ const isTypedMessageImage = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size?.width,
        height: size?.height,
        meta
    };
}


/***/ }),

/***/ 61111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ isTypedMessagePromise),
/* harmony export */   N: () => (/* binding */ makeTypedMessagePromise)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** What to display when the message is not ready. */ const isTypedMessagePromise = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('promise');
function makeTypedMessagePromise(promise, alt) {
    const x = {
        type: 'promise',
        serializable: false,
        promise: getPromiseWithStatus(promise),
        alt,
        meta: undefined
    };
    return x;
}
const seen = new WeakMap();
function getPromiseWithStatus(promise) {
    // let's assume it already handle the status update
    if ('status' in promise) return promise;
    if (seen.has(promise)) return seen.get(promise);
    const _ = Promise.resolve(promise);
    Object.defineProperty(_, 'status', {
        configurable: true,
        value: 'pending'
    });
    _.then((value)=>{
        Object.defineProperties(_, {
            status: {
                value: 'fulfilled'
            },
            value: {
                value
            }
        });
    }, (error)=>{
        Object.defineProperties(_, {
            status: {
                value: 'rejected'
            },
            reason: {
                value: error
            }
        });
    });
    seen.set(promise, _);
    return _;
}


/***/ }),

/***/ 86025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ makeTypedMessageText),
/* harmony export */   Po: () => (/* binding */ isTypedMessageTextV1),
/* harmony export */   Rz: () => (/* binding */ isTypedMessageText)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** A text message */ const isTypedMessageTextV1 = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('text', 1);
const isTypedMessageText = isTypedMessageTextV1;
function makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}


/***/ }),

/***/ 17425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zw: () => (/* binding */ makeTypedMessageTuple),
/* harmony export */   bZ: () => (/* binding */ isTypedMessageTuple),
/* harmony export */   h6: () => (/* binding */ makeTypedMessageSerializableTupleFromList),
/* harmony export */   kT: () => (/* binding */ makeTypedMessageTupleSerializable),
/* harmony export */   n_: () => (/* binding */ makeTypedMessageTupleFromList),
/* harmony export */   qT: () => (/* binding */ isTypedMessageTupleSerializable)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41840);
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);


/** Multiple TypedMessages (ordered) */ function isTypedMessageTuple(x) {
    return x.type === 'tuple';
}
const isTypedMessageTupleSerializable = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .composeEvery */ .mo)(isTypedMessageTuple, _utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}


/***/ }),

/***/ 76350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ isTypedMessageMaskPayload),
/* harmony export */   J: () => (/* binding */ makeTypedMessageMaskPayload)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/**
 * This TypedMessage represents an encrypted TypedMessage.
 */ const isTypedMessageMaskPayload = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('x-mask-payload');
function makeTypedMessageMaskPayload(message, meta) {
    return {
        type: 'x-mask-payload',
        message,
        meta
    };
}


/***/ }),

/***/ 43458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ makeTypedMessageAnchor),
/* harmony export */   b: () => (/* binding */ isTypedMessageAnchor)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);
if (964 != __webpack_require__.j) {
	/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
}


/** It represents a single link. */ /** The message that should be displayed as a decorate after the link. */ const isTypedMessageAnchor = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content, postImage, meta) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageText */ .P)(`[${content}](${href})`, meta),
        postImage,
        meta
    };
}


/***/ }),

/***/ 73561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ extractTextFromTypedMessage),
/* harmony export */   j: () => (/* binding */ extractImageFromTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
if (964 != __webpack_require__.j) {
	/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93349);
}
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43458);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30688);




/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message, options) {
    if (!message) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
    const text = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageText */ .Rz)(message)) text.push(message.content);
        else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageAnchor */ .b)(message)) {
            text.push(message.content);
            if (options?.linkAsText) text.push(`(${message.href})`);
        } else (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    if (text.length) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Some)(text.join(' '));
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
}
function extractImageFromTypedMessage(message) {
    if (!message) return [];
    const image = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isTypedMessageImage */ .c)(message)) return void image.push(message.image);
        return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    return image;
}


/***/ }),

/***/ 41840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hz: () => (/* binding */ isTypedMessageEqual),
/* harmony export */   c3: () => (/* binding */ isNonSerializableTypedMessageWithAlt),
/* harmony export */   fV: () => (/* binding */ isSerializableTypedMessage)
/* harmony export */ });
if (964 != __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85094);
}


function isNonSerializableTypedMessageWithAlt(x) {
    const y = x;
    if (y.serializable !== false) return false;
    if (!y.alt) return false;
    return isSerializableTypedMessage(y.alt);
}
function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    return isNonSerializableTypedMessageWithAlt(x);
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    // perform a deep equal
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(message1, message2);
}


/***/ }),

/***/ 31072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vm: () => (/* binding */ composeSome),
/* harmony export */   mo: () => (/* binding */ composeEvery),
/* harmony export */   uO: () => (/* binding */ createIsType)
/* harmony export */ });
/** @internal */ function createIsType(x, version) {
    return (y)=>{
        if (version !== undefined && y.version !== version) return false;
        return y.type === x;
    };
}
/** @internal */ function composeSome(...fns) {
    return (...args)=>fns.some((f)=>f(...args));
}
/** @internal */ function composeEvery(...fns) {
    return (...args)=>fns.every((f)=>f(...args));
}


/***/ }),

/***/ 30688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ forEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61111);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41840);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76350);



function forEachTypedMessageChild(node, visitor) {
    let stop;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        for (const each of node.items){
            stop = visitor(each);
            if (stop) return;
        }
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessagePromise */ .K)(node)) {
        // if Promise has a resolved value, we ignore it's alt.
        if ('value' in node.promise) visitor(node.promise.value);
        else if (node.alt) visitor(node.alt);
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$)(node)) {
        visitor(node.message);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        visitor(node.alt);
    }
}


/***/ }),

/***/ 18121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 98862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useNonFungibleAsset)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);




function useNonFungibleAsset(pluginID, address, id, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        enabled: !!address,
        queryKey: [
            'non-fungible-asset',
            pluginID,
            address,
            id,
            account,
            options
        ],
        queryFn: async ()=>{
            if (!address || !id && pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) return null;
            return Hub.getNonFungibleAsset(address, id ?? '');
        }
    });
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

/***/ 48245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 65587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ TabContext),
/* harmony export */   _i: () => (/* binding */ useTabContext),
/* harmony export */   pQ: () => (/* binding */ getTabId),
/* harmony export */   uU: () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

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

/***/ 32665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/32cc6126716b1c948521.svg";

/***/ }),

/***/ 33605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2ba762c78bff78c550fb.svg";

/***/ }),

/***/ 32297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/db4a425a3e40a8852fa3.svg";

/***/ }),

/***/ 53066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3e222d37b7dad4bdab7e.svg";

/***/ }),

/***/ 63417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0db610b2e2f8b0e3f140.svg";

/***/ }),

/***/ 74246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/44a2ee9660f3051e559b.svg";

/***/ }),

/***/ 85663:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/17413f9e89ac1d796f8b.svg";

/***/ }),

/***/ 38374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/99b296aa8c69cb9a9ac3.svg";

/***/ }),

/***/ 51139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d9090da8ea2f06ba6df9.svg";

/***/ }),

/***/ 82567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6f3a8ca61f969207c1e3.svg";

/***/ }),

/***/ 15213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ca770caade4e39fafbc5.svg";

/***/ }),

/***/ 52660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8a27a1699f5026bcded9.svg";

/***/ }),

/***/ 86886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useInfiniteQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87193);
/* harmony import */ var _useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84233);
'use client';



function useInfiniteQuery(arg1, arg2, arg3) {
  const options = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__/* .parseQueryArgs */ ._v)(arg1, arg2, arg3);
  return (0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useBaseQuery */ .r)(options, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__/* .InfiniteQueryObserver */ .c);
}


//# sourceMappingURL=useInfiniteQuery.mjs.map


/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=chunk.2934.js.map