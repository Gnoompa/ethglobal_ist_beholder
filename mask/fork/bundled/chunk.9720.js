"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9720],{

/***/ 18586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 51874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ usePostLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _PostContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90786);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8898);



function usePostLink() {
    const id = _PostContext_js__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails */ .H9.postID();
    const identifier = _PostContext_js__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails */ .H9.identifier();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!id || !identifier) return '';
        return (0,_context_js__WEBPACK_IMPORTED_MODULE_2__/* .getPostURL */ .P4)?.(identifier) ?? '';
    }, [
        id,
        identifier,
        _context_js__WEBPACK_IMPORTED_MODULE_2__/* .getPostURL */ .P4
    ]);
}


/***/ }),

/***/ 53639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useSiteThemeMode)
/* harmony export */ });
/* harmony import */ var _utils_theme_color_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13326);

function useSiteThemeMode(theme) {
    const backgroundColor = (0,_utils_theme_color_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getBackgroundColor */ .dF)(document.body);
    const isDark = theme.palette.mode === 'dark';
    const isDarker = backgroundColor === 'rgb(0,0,0)';
    return isDark ? !isDarker ? 'dim' : 'dark' : 'light';
}


/***/ }),

/***/ 56142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uG: () => (/* binding */ startPluginRPC),
/* harmony export */   wX: () => (/* binding */ getPluginRPCGenerator),
/* harmony export */   wx: () => (/* binding */ startPluginGeneratorRPC),
/* harmony export */   x8: () => (/* binding */ getPluginRPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceIsBackground__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88228);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40464);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14414);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9898);





const log = {
    type: 'pretty',
    requestReplay: "production" === 'development',
    sendLocalStack: "production" === 'development'
};
let isBackground = ()=>(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .isEnvironment */ .hE)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
function __workaround__replaceIsBackground__(f) {
    isBackground = f;
}
function getPluginRPCInternal(cache, pluginID, starter, entry) {
    if (cache.has(pluginID)) return cache.get(pluginID);
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const rpc = starter(Object.create(null), {
        key: `@plugin/${pluginID}`,
        channel: {
            on: message[entry].on,
            send: message[entry].sendToBackgroundPage
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
    cache.set(pluginID, rpc);
    return rpc;
}
const cache = new Map();
const cacheGenerator = new Map();
function getPluginRPC(pluginID) {
    if (isBackground()) startPluginRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cache, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
function getPluginRPCGenerator(pluginID) {
    if (isBackground()) startPluginGeneratorRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cacheGenerator, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
}
function startPluginRPCInternal(cache, pluginID, signal, impl, starter, entry) {
    if (!isBackground()) throw new Error('Cannot start RPC in the UI.');
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const delegate = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getOrUpdateLocalImplementationHMR */ .K)(()=>impl, message[entry]);
    if (cache.has(pluginID)) return;
    cache.set(pluginID, delegate);
    starter(delegate, {
        key: pluginID,
        channel: {
            on: message[entry].on,
            send: message[entry].sendByBroadcast
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
}
/** @internal */ function startPluginRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cache, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
/** @internal */ function startPluginGeneratorRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cacheGenerator, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
} // RPC
 // Generator


/***/ }),

/***/ 13326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _T: () => (/* binding */ isDark),
/* harmony export */   dF: () => (/* binding */ getBackgroundColor),
/* harmony export */   f2: () => (/* binding */ fromRGB),
/* harmony export */   wj: () => (/* binding */ shade),
/* harmony export */   xr: () => (/* binding */ toRGB)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47494);

function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join(',')})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function shade(channels, percentage) {
    return channels.map((c)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.floor(c * (100 + percentage) / 100), 0, 255));
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10)
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}


/***/ }),

/***/ 19720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/plugins/RedPacket/src/base.ts + 7 modules
var base = __webpack_require__(71188);
// EXTERNAL MODULE: ./packages/plugins/RedPacket/src/constants.ts
var constants = __webpack_require__(8172);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Metadata/index.ts
var Metadata = __webpack_require__(33845);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"contract_address":{"type":"string","title":"contract_address"},"rpid":{"type":"string","title":"rpid"},"txid":{"type":"string","title":"txid"},"password":{"type":"string","title":"password"},"shares":{"type":"number","title":"shares"},"sender":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"},"message":{"type":"string","title":"message"}},"required":["address","message","name"],"title":"sender"},"is_random":{"type":"boolean","title":"is_random"},"total":{"type":"string","title":"total"},"creation_time":{"type":"number","title":"creation_time"},"duration":{"type":"number","title":"duration"},"network":{"type":"string","title":"network"},"token":{"type":"object","additionalProperties":true,"properties":{"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"decimals":{"description":"token decimal","type":"number","title":"decimals"},"symbol":{"description":"token symbol","type":"string","title":"symbol"}},"required":["address"],"title":"token"}},"required":["contract_address","creation_time","duration","is_random","password","rpid","sender","shares","total"]}');
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/schema-nft.json
const schema_nft_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"id":{"type":"string","title":"id"},"txid":{"type":"string","title":"txid"},"duration":{"type":"number","title":"duration"},"message":{"type":"string","title":"message"},"senderName":{"type":"string","title":"senderName"},"contractName":{"type":"string","title":"contractName"},"contractAddress":{"type":"string","title":"contractAddress"},"privateKey":{"type":"string","title":"privateKey"},"chainId":{"type":"number","title":"chainId"},"contractTokenURI":{"type":"string","title":"contractTokenURI"}},"required":["id","duration","message","senderName","contractName","contractAddress","privateKey","chainId","contractTokenURI"]}');
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/helpers.ts




const RedPacketMetadataReader = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketMetaKey */.Vr, schema_namespaceObject);
const renderWithRedPacketMetadata = (0,Metadata/* createRenderWithMetadata */.mC)(RedPacketMetadataReader);
const RedPacketNftMetadataReader = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketNftMetaKey */.HA, schema_nft_namespaceObject);
const renderWithRedPacketNftMetadata = (0,Metadata/* createRenderWithMetadata */.mC)(RedPacketNftMetadataReader);

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasPrice.ts + 1 modules
var useGasPrice = __webpack_require__(37186);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentLinkedPersona.ts
var useCurrentLinkedPersona = __webpack_require__(50538);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkTab/index.tsx
var NetworkTab = __webpack_require__(59312);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/GasEditor.ts
var GasEditor = __webpack_require__(49113);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(39907);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useThemeSettings.ts
var useThemeSettings = __webpack_require__(53639);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingIdentity.ts
var useCurrentVisitingIdentity = __webpack_require__(78178);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/locales/i18n_generated.ts
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
function useRedPacketTrans() /**
      * `🧧🧧🧧 Try sending Lucky Drop to your friends with tokens or NFTs to share the joy now! Install Mask.io to send your first Lucky Drop.`
      */ /**
      * `🧧🧧🧧 Try sending Lucky Drop to your friends with Mask.io.`
      */ /**
      * `Collections`
      */ /**
      * `Select a Token`
      */ /**
      * `Search`
      */ /**
      * `Loading token...`
      */ /**
      * `No results`
      */ /**
      * `The collectible has already been added.`
      */ /**
      * `The collectible does not belong to you.`
      */ /**
      * `The maximum number of NFTs to be sold in NFT lucky drop contract is {{- amount}}.`
      */ /**
      * `The NFT lucky drop supports up to {{amount, number}} NFTs selected for one time.`
      */ /**
      * `Choose your collection`
      */ /**
      * `Completed`
      */ /**
      * `Expired`
      */ /**
      * `This is an NFT lucky drop.`
      */ /**
      * ``
      */ /**
      * `Follow @$t(mask:twitter_account) (mask.io) to claim NFT lucky drops.`
      */ /**
      * `Follow @$t(mask:facebook_account) (mask.io) to claim NFT lucky drops.`
      */ /**
      * `@{{sender}} is sending an NFT lucky drop on {{network}} network. {{account_promote}}
    $t(promote_short)
    $t(mask:hash_tag) #LuckyDrop
    {{payload}}`
      */ /**
      * `I just claimed an NFT lucky drop from @{{sender}} on {{network}} network. {{account_promote}}
    $t(promote_short)
    $t(mask:hash_tag) #LuckyDrop
    {{payload}}`
      */ /**
      * `Total Amount`
      */ /**
      * `Attached Message`
      */ /**
      * `Wallet account`
      */ /**
      * `Enclose a Message`
      */ /**
      * `Claiming...`
      */ /**
      * `Claim`
      */ /**
      * `The Lucky Drop can’t be sent due to data damage. Please withdraw the assets after {{duration}}.`
      */ /**
      * `Refund`
      */ /**
      * `Empty`
      */ /**
      * `Refunding`
      */ /**
      * `Total Amount: {{- amount}} {{symbol}}`
      */ /**
      * `Split Mode: {{mode}}`
      */ /**
      * `Attached Message`
      */ /**
      * `The minimum amount for each share is {{- amount}} {{symbol}}`
      */ /**
      * `Lucky Drop`
      */ /**
      * `Gift crypto or NFTs to any users, first come, first served.`
      */ /**
      * `Create the Lucky Drop`
      */ /**
      * `Note: When you "Unlock All", all of the NFTs in the collection will be by default authorized for sale. This includes the NFTs transferred afterwards.`
      */ /**
      * `Select partially`
      */ /**
      * `ALL ({{total}} NFT)`
      */ /**
      * `Token ID separated by comma, e.g. 1224, 7873, 8948`
      */ /**
      * `Insufficient Balance`
      */ /**
      * `Create the Lucky Drop`
      */ /**
      * `When selecting too many NFTs, the total gas fee may exceed the MetaMask limit of 1 {{symbol}}. Please reduce the number of NFTs selected.`
      */ /**
      * `Collectibles`
      */ /**
      * `Tokens`
      */ /**
      * `Claimed {{- amount}}`
      */ /**
      * `Confirm the Lucky Drop`
      */ /**
      * `Confirm`
      */ /**
      * `Confirming`
      */ /**
      * `Enter Amount Each`
      */ /**
      * `Enter Total`
      */ /**
      * `Enter shares`
      */ /**
      * `At most 255 recipients`
      */ /**
      * `Lucky Drop`
      */ /**
      * `History`
      */ /**
      * `New`
      */ /**
      * `Send {{- amount}} {{symbol}}`
      */ /**
      * `Send {{count}} NFT`
      */ /**
      * `Send {{count}} NFTs`
      */ /**
      * `Insufficient Balance`
      */ /**
      * `Insufficient {{symbol}} Balance`
      */ /**
      * `Back`
      */ /**
      * `You can withdraw the rest of your balances back 24h later after sending them out.`
      */ /**
      * `Total`
      */ /**
      * `Total cost`
      */ /**
      * `Amount per Share`
      */ /**
      * `Amount Each`
      */ /**
      * `Transaction cost`
      */ /**
      * `Shares`
      */ /**
      * `Identical`
      */ /**
      * `Random`
      */ /**
      * `Random Amount`
      */ /**
      * `Equal Amount`
      */ /**
      * `Quantity`
      */ /**
      * `Split Mode`
      */ /**
      * `Token`
      */ /**
      * `Not supported on {{chain}} yet.`
      */ /**
      * `You haven't created any NFT lucky drop yet. Try to create and share lucky with your friends.`
      */ /**
      * `You haven't created any Token lucky drop yet. Try to create and share lucky with your friends.`
      */ /**
      * `Send`
      */ /**
      * `{{- time}} (UTC+8)`
      */ /**
      * `Best Wishes!`
      */ /**
      * `Enter quantity`
      */ /**
      * `Create time:`
      */ /**
      * `Blessing words`
      */ /**
      * `The Lucky Drop can’t be sent due to data damage.`
      */ /**
      * `From: @{{name}}`
      */ /**
      * `I just claimed a lucky drop from @{{sender}} on {{network}} network. Follow @{{account}} (mask.io) to claim lucky drops.
    $t(promote_short)
    #mask_io #LuckyDrop
    {{payload}}`
      */ /**
      * `I just claimed a lucky drop from @{{sender}} on {{network}} network.
    $t(promote_short)
    {{payload}}`
      */ /**
      * `Hi friends, I just found a lucky drop sent by @{{sender}} on {{network}} network. Follow @{{account}} (mask.io) to claim lucky drops.
    $t(promote_short)
    #mask_io #LuckyDrop
    {{payload}}`
      */ /**
      * `Hi friends, I just found a lucky drop sent by @{{sender}} on {{network}} network.
    $t(promote_short)
    {{payload}}`
      */ /**
      * `You got {{- amount}} {{symbol}}`
      */ /**
      * `You could refund {{- balance}} {{symbol}}.`
      */ /**
      * `The Lucky Drop has been refunded.`
      */ /**
      * `The Lucky Drop is expired.`
      */ /**
      * `The Lucky Drop is broken.`
      */ /**
      * `The Lucky Drop is empty.`
      */ /**
      * `{{count}} share / {{- total}} {{symbol}}`
      */ /**
      * `{{count}} shares / {{- total}} {{symbol}}`
      */ /**
      * `Send a surprise crypto giveaway. Tokens and NFTs on multiple chains are supported.`
      */ /**
      * `You claimed {{- amount}} {{name}}.`
      */ /**
      * `Claimed 1 {{name}} successfully.`
      */ /**
      * `Lucky Drop`
      */ /**
      * `Share`
      */ /**
      * `OK`
      */ /**
      * `You got 1 {{name}}`
      */ /**
      * `History`
      */ /**
      * `realMaskNetwork`
      */ /**
      * `masknetwork`
      */ /**
      * `Loading`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Invalid Network`
      */ /**
      * `Select All`
      */ /**
      * `Retry`
      */ /**
      * `Something went wrong.`
      */ /**
      * `No Enough Gas Fees`
      */ /**
      * - send_symbol_one: `Send {{count}} NFT`
    
      * - send_symbol_other: `Send {{count}} NFTs`
      */ /**
      * - description_failover_one: `{{count}} share / {{- total}} {{symbol}}`
    
      * - description_failover_other: `{{count}} shares / {{- total}} {{symbol}}`
      */ /**
      * - account_promote$default: ``
    
      * - account_promote$twitter: `Follow @$t(mask:twitter_account) (mask.io) to claim NFT lucky drops.`
    
      * - account_promote$facebook: `Follow @$t(mask:facebook_account) (mask.io) to claim NFT lucky drops.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.maskbook.red_packet");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react.createElement)(es/* Trans */.cC, {
            i18nKey,
            ns: "com.maskbook.red_packet",
            shouldUnescape: true,
            ...props
        });
}
const RedPacketTrans = /**
      * `You can also use <text>{{text}}</text> to select multiple NFTs.`
      */ /**
      * `Token ID <tokenIdList></tokenIdList> does not exist or belong to you.`
      */ /**
      * `<span>{{count}}</span> NFT`
      */ /**
      * `<span>{{count}}</span> NFTs`
      */ /**
      * `Claimed: <span>{{claimedShares}}/{{shares}}</span> {{claimedAmount}}/{{amount}} <span>{{symbol}}</span>`
      */ /**
      * `Claimed: <span>{{claimedShares}}/{{shares}}</span> <span>{{symbol}}</span>`
      */ /**
      * - nft_select_amount_one: `<span>{{count}}</span> NFT`
    
      * - nft_select_amount_other: `<span>{{count}}</span> NFTs`
      */ /*#__PURE__*/ createProxy(createComponent);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(27043);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/utils/reduceUselessPayloadInfo.ts

function reduceUselessPayloadInfo(payload) {
    const token = (0,pick/* default */.Z)(payload.token, [
        'decimals',
        'symbol',
        'address',
        'chainId'
    ]);
    return {
        ...(0,omit/* default */.Z)(payload, [
            'block_number'
        ]),
        token
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(34093);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants_constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SelectGasSettingsToolbar/index.tsx
var SelectGasSettingsToolbar = __webpack_require__(66390);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useGasConfig.ts
var useGasConfig = __webpack_require__(84553);
;// CONCATENATED MODULE: ./packages/web3-hooks/evm/src/useTransactionValue.ts




function useTransactionValue(originalValue, gas, /** token address */ gasCurrency) {
    const { data: nativeTokenBalance = '0', isLoading: loadingBalance } = (0,useBalance/* useBalance */.K)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: gasCurrencyBalance = '0', isLoading: loadingTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, gasCurrency);
    const balance = gasCurrency ? gasCurrencyBalance : nativeTokenBalance;
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    // #region amount minus estimate gas fee
    const { gasPrice } = (0,useGasConfig/* useGasConfig */.c)(chainId);
    const estimateGasFee = !gas ? undefined : gasPrice && gasPrice !== '0' ? new bignumber/* BigNumber */.O(gasPrice).multipliedBy(gas).multipliedBy(1.5).toFixed() : undefined;
    const transactionValue = new bignumber/* BigNumber */.O(balance).isLessThan(new bignumber/* BigNumber */.O(originalValue ?? '0').plus(new bignumber/* BigNumber */.O(estimateGasFee ?? '0'))) ? new bignumber/* BigNumber */.O(originalValue ?? '0').minus(estimateGasFee ?? '0').toFixed() : originalValue;
    return {
        transactionValue,
        estimateGasFee,
        loading: loadingBalance || loadingTokenBalance
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Launch.js


/* harmony default export */ const Launch = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch'));
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ContractTransaction.ts
var ContractTransaction = __webpack_require__(21704);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/decodeEvents.ts
var decodeEvents = __webpack_require__(44747);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useContract.ts
var useContract = __webpack_require__(95685);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/HappyRedPacketV1.json
const HappyRedPacketV1_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"ifclaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_claimed_list","outputs":[{"internalType":"address[]","name":"claimer_addrs","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint8","name":"_number","type":"uint8"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"toBytes","outputs":[{"internalType":"bytes","name":"b","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"token_type","type":"uint256"},{"internalType":"address","name":"token_address","type":"address"},{"internalType":"address","name":"sender_address","type":"address"},{"internalType":"address","name":"recipient_address","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer_token","outputs":[],"stateMutability":"payable","type":"function"}]');
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/HappyRedPacketV2.json
const HappyRedPacketV2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"CreationSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/HappyRedPacketV3.json
const HappyRedPacketV3_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"bool","name":"ifrandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ./packages/web3-contracts/abis/HappyRedPacketV4.json
var HappyRedPacketV4 = __webpack_require__(74122);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useRedPacketContract.ts






function useRedPacketContract(chainId, version) {
    const { HAPPY_RED_PACKET_ADDRESS_V1: addressV1, HAPPY_RED_PACKET_ADDRESS_V2: addressV2, HAPPY_RED_PACKET_ADDRESS_V3: addressV3, HAPPY_RED_PACKET_ADDRESS_V4: addressV4 } = (0,constants_constants/* useRedPacketConstants */.AA)(chainId);
    const v1 = (0,useContract/* useContract */.c)(chainId, addressV1, HappyRedPacketV1_namespaceObject);
    const v2 = (0,useContract/* useContract */.c)(chainId, addressV2, HappyRedPacketV2_namespaceObject);
    const v3 = (0,useContract/* useContract */.c)(chainId, addressV3, HappyRedPacketV3_namespaceObject);
    const v4 = (0,useContract/* useContract */.c)(chainId, addressV4, HappyRedPacketV4);
    const versions = [
        v1,
        v2,
        v3,
        v4
    ];
    return versions[version - 1];
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useCreateCallback.tsx









function checkParams(paramsObj) {
    if ((0,number/* isLessThan */.FI)(paramsObj.total, paramsObj.shares)) {
        throw new Error('At least [number of lucky drops] tokens to your lucky drop.');
    }
    if (paramsObj.shares <= 0) {
        throw new Error('At least 1 person should be able to claim the lucky drop.');
    }
    return true;
}
function useCreateParamsCallback(expectedChainId, redPacketSettings, version, publicKey) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const { NATIVE_TOKEN_ADDRESS } = (0,constants_constants/* useTokenConstants */.kd)(chainId);
    const redPacketContract = useRedPacketContract(chainId, version);
    const getCreateParams = (0,react.useCallback)(async ()=>{
        if (!redPacketSettings || !redPacketContract) return null;
        const { duration, isRandom, message, name, shares, total, token } = redPacketSettings;
        const seed = Math.random().toString();
        const tokenType = token.schema === src_types/* SchemaType */.XQ.Native ? 0 : 1;
        const tokenAddress = token.schema === src_types/* SchemaType */.XQ.Native ? NATIVE_TOKEN_ADDRESS : token.address;
        if (!tokenAddress) return null;
        const paramsObj = {
            publicKey,
            shares,
            isRandom,
            duration,
            seed: (0,lib.sha3)(seed),
            message,
            name,
            tokenType,
            tokenAddress,
            total,
            token
        };
        try {
            checkParams(paramsObj);
        } catch  {
            return null;
        }
        const params = Object.values((0,omit/* default */.Z)(paramsObj, [
            'token'
        ]));
        let gasError = null;
        const value = (0,number/* toFixed */.FH)(paramsObj.token?.schema === src_types/* SchemaType */.XQ.Native ? total : 0);
        const gas = await redPacketContract.methods.create_red_packet(...params).estimateGas({
            from: account,
            value
        }).catch((error)=>{
            gasError = error;
        });
        return {
            gas: gas ? (0,number/* toFixed */.FH)(gas) : undefined,
            params,
            paramsObj,
            gasError
        };
    }, [
        redPacketSettings,
        account,
        redPacketContract
    ]);
    return getCreateParams;
}
function useCreateParams(expectedChainId, redPacketSettings, version, publicKey) {
    const getCreateParams = useCreateParamsCallback(expectedChainId, redPacketSettings, version, publicKey);
    return (0,useAsync/* default */.Z)(()=>getCreateParams(), [
        JSON.stringify(redPacketSettings),
        version,
        publicKey
    ]);
}
function useCreateCallback(expectedChainId, redPacketSettings, version, publicKey, gasOption) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const redPacketContract = useRedPacketContract(chainId, version);
    const getCreateParams = useCreateParamsCallback(expectedChainId, redPacketSettings, version, publicKey);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        const { token } = redPacketSettings;
        const createParams = await getCreateParams();
        if (!token || !redPacketContract || !createParams) return;
        const { gas, params, paramsObj, gasError } = createParams;
        if (gasError) return;
        try {
            checkParams(paramsObj);
        } catch (error) {
            return;
        }
        // estimate gas and compose transaction
        const tx = await new ContractTransaction/* ContractTransaction */.D(redPacketContract).fillAll(redPacketContract.methods.create_red_packet(...params), {
            from: account,
            value: (0,number/* toFixed */.FH)(token.schema === src_types/* SchemaType */.XQ.Native ? paramsObj.total : 0),
            gas,
            chainId,
            ...gasOption
        });
        const hash = await entry/* Web3 */.Bv.sendTransaction(tx, {
            paymentToken: gasOption?.gasCurrency,
            chainId,
            gasOptionType: gasOption?.gasOptionType
        });
        const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash, {
            chainId
        });
        if (receipt) {
            const events = (0,decodeEvents/* decodeEvents */.e)(redPacketContract.options.jsonInterface, receipt.logs);
            return {
                hash,
                receipt,
                events
            };
        }
        return {
            hash,
            receipt
        };
    }, [
        account,
        redPacketContract,
        redPacketSettings,
        gasOption,
        chainId
    ]);
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/rpc.ts
var rpc = __webpack_require__(56142);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/messages.ts


 undefined;
const RedPacketRPC = (0,rpc/* getPluginRPC */.x8)(constants/* RedPacketPluginID */.jY);

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketConfirmDialog.tsx


















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        },
        grid: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        gridWrapper: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        hit: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: 568,
            fontWeight: 300,
            borderRadius: 8,
            backgroundColor: theme.palette.maskColor.bg,
            color: theme.palette.text.primary,
            padding: 12,
            marginTop: 0,
            marginBottom: 130,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        ellipsis: {
            fontSize: 24,
            fontWeight: 700,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        controller: {
            position: 'sticky',
            bottom: 0
        }
    }));
function RedPacketConfirmDialog(props) {
    const t = useRedPacketTrans();
    const { settings, onCreated, onClose, gasOption, onGasOptionChange, expectedChainId } = props;
    const { classes, cx } = useStyles();
    const { isLoading: loadingBalance } = (0,useBalance/* useBalance */.K)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { account, chainId, networkType } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    (0,react.useEffect)(()=>{
        if (settings?.token?.chainId !== chainId) onClose();
    }, [
        chainId,
        onClose
    ]);
    // #region blocking
    // password should remain the same rather than change each time when createState change,
    //  otherwise password in database would be different from creating red-packet.
    const contract_version = 4;
    const nativeTokenAddress = (0,useNativeTokenAddress/* useNativeTokenAddress */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const { account: publicKey, privateKey = '' } = (0,react.useMemo)(()=>entry/* Web3 */.Bv.createAccount(), []);
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    // #region amount minus estimate gas fee
    const { value: createParams } = useCreateParams(chainId, settings, contract_version, publicKey);
    const isNativeToken = (0,isSameAddress/* isSameAddress */.W)(settings?.token?.address, nativeTokenAddress);
    const { transactionValue, estimateGasFee } = useTransactionValue(settings?.total, createParams?.gas, gasOption?.gasCurrency);
    const isWaitGasBeMinus = (!estimateGasFee || loadingBalance) && isNativeToken;
    const isBalanceInsufficient = (0,isSameAddress/* isSameAddress */.W)(gasOption?.gasCurrency, nativeToken?.address) && new bignumber/* BigNumber */.O(transactionValue).isLessThanOrEqualTo(0);
    const total = isNativeToken ? isBalanceInsufficient ? '0' : transactionValue : (settings?.total);
    const formatTotal = (0,formatBalance/* formatBalance */.a)(total, settings?.token?.decimals ?? 18, isNativeToken ? 3 : 0);
    const formatAvg = (0,formatBalance/* formatBalance */.a)(new bignumber/* BigNumber */.O(total).div(settings?.shares ?? 1).toFixed(0, 1), settings?.token?.decimals ?? 18, isNativeToken ? 3 : 0);
    const [{ loading: isCreating }, createCallback] = useCreateCallback(chainId, {
        ...settings,
        total
    }, contract_version, publicKey, gasOption);
    // #endregion
    const createRedpacket = (0,react.useCallback)(async ()=>{
        const result = await createCallback();
        const { hash, receipt, events } = result ?? {};
        if (typeof hash !== 'string') return;
        if (typeof receipt?.transactionHash !== 'string') return;
        // the settings is not available
        if (!settings?.token) return;
        const CreationSuccess = events?.CreationSuccess?.returnValues ?? {};
        // the events log is not available
        if (!events?.CreationSuccess?.returnValues.id) return;
        payload.current.sender = {
            address: account,
            name: settings.name,
            message: settings.message
        };
        payload.current.is_random = settings.isRandom;
        payload.current.shares = settings.shares;
        payload.current.password = privateKey;
        payload.current.rpid = CreationSuccess.id;
        payload.current.total = CreationSuccess.total;
        payload.current.duration = settings.duration;
        payload.current.creation_time = Number.parseInt(CreationSuccess.creation_time, 10) * 1000;
        payload.current.token = settings.token;
        const record = {
            id: receipt.transactionHash,
            from: '',
            password: privateKey,
            contract_version
        };
        RedPacketRPC.addRedPacket(record, chainId);
        // output the redpacket as JSON payload
        onCreated(payload.current);
    }, [
        createCallback,
        settings,
        onCreated
    ]);
    // #endregion
    // assemble JSON payload
    const payload = (0,react.useRef)({
        network: entry/* ChainResolver */.iv.chainName(chainId)
    });
    const { HAPPY_RED_PACKET_ADDRESS_V4 } = (0,constants_constants/* useRedPacketConstants */.AA)(chainId);
    (0,react.useEffect)(()=>{
        const contractAddress = HAPPY_RED_PACKET_ADDRESS_V4;
        if (!contractAddress) {
            onClose();
            return;
        }
        payload.current.contract_address = contractAddress;
        payload.current.contract_version = contract_version;
        payload.current.network = entry/* ChainResolver */.iv.networkType(chainId);
    }, [
        chainId,
        networkType,
        contract_version
    ]);
    const nativeTokenDetailed = (0,react.useMemo)(()=>entry/* ChainResolver */.iv.nativeCurrency(chainId), [
        chainId
    ]);
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const { value: params } = useCreateParams(chainId, settings, contract_version, publicKey);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 2,
                className: cx(classes.grid, classes.gridWrapper),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "h4",
                            color: "textPrimary",
                            align: "center",
                            className: classes.ellipsis,
                            children: settings?.message
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textSecondary",
                            children: t.split_mode()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            align: "right",
                            children: settings?.isRandom ? t.random() : t.average()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textSecondary",
                            children: t.share()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            align: "right",
                            children: settings?.shares
                        })
                    }),
                    settings?.isRandom ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: t.amount_per_share()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    align: "right",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "row-reverse",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                            color: "textPrimary",
                                            className: classes.link,
                                            href: entry/* ExplorerResolver */.Xz.fungibleTokenLink(chainId, settings?.token?.address ?? ''),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            onClick: stop,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch, {
                                                fontSize: "small"
                                            })
                                        }),
                                        isBalanceInsufficient ? '0' : formatAvg,
                                        " ",
                                        settings?.token?.symbol
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textSecondary",
                            children: t.total_cost()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            align: "right",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row-reverse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    color: "textPrimary",
                                    className: classes.link,
                                    href: entry/* ExplorerResolver */.Xz.fungibleTokenLink(chainId, settings?.token?.address ?? ''),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: stop,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch, {
                                        fontSize: "small"
                                    })
                                }),
                                formatTotal,
                                " ",
                                settings?.token?.symbol
                            ]
                        })
                    }),
                    estimateGasFee && !(0,number/* isZero */.Fr)(estimateGasFee) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectGasSettingsToolbar/* SelectGasSettingsToolbar */.M, {
                        nativeToken: nativeTokenDetailed,
                        nativeTokenPrice: nativeTokenPrice,
                        supportMultiCurrency: !!wallet?.owner && chainId === smartPayChainId,
                        gasConfig: gasOption,
                        gasLimit: Number.parseInt(params?.gas ?? '0', 10),
                        onChange: onGasOptionChange,
                        estimateGasFee: estimateGasFee,
                        editMode: true
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                            className: classes.hit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SettingInfo, {
                                    size: 20
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    align: "left",
                                    marginTop: "1px",
                                    marginLeft: "8.5px",
                                    style: {
                                        lineHeight: '18px'
                                    },
                                    fontSize: "14px",
                                    children: t.hint()
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                className: classes.controller,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    expectedChainId: chainId,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: isCreating || isWaitGasBeMinus,
                        fullWidth: true,
                        onClick: createRedpacket,
                        disabled: isBalanceInsufficient || isWaitGasBeMinus || isCreating,
                        children: isCreating ? t.confirming() : t.confirm()
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/intervalToDuration/index.js
var intervalToDuration = __webpack_require__(78723);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextDay/index.js
var nextDay = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useIntersectionObserver/index.js
var useIntersectionObserver = __webpack_require__(47642);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(37004);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Popper/Popper.js
var Popper = __webpack_require__(92384);
;// CONCATENATED MODULE: ./packages/web3-providers/src/RedPacket/types.ts
var // #region erc20 red packet
/** From twitter/facebook url */ /** An unique record type in DB */ RedPacketStatus// #endregion
// #region nft red packet
/** An unique record type in DB */ ;
(function(RedPacketStatus) {
    RedPacketStatus["claimed"] = "claimed";
    RedPacketStatus["expired"] = "expired";
    RedPacketStatus["empty"] = "empty";
    RedPacketStatus["refunded"] = "refunded";
})(RedPacketStatus || (RedPacketStatus = {}));

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useAvailability.ts



function useAvailability(id, contract_address, version, options) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const redPacketContract = useRedPacketContract(chainId, version);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || !contract_address || !redPacketContract) return null;
        return redPacketContract.methods.check_availability(id).call({
            // check availability is ok w/o account
            from: account
        });
    }, [
        id,
        account,
        contract_address,
        redPacketContract
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useAvailabilityComputed.ts






/**
 * Fetch the red packet info from the chain
 * @param payload
 */ function useAvailabilityComputed(account, payload) {
    const parsedChainId = payload.token?.chainId ?? entry/* NetworkResolver */.VN.networkChainId(payload.network ?? '') ?? src_types/* ChainId */.a_.Mainnet;
    const asyncResult = useAvailability(payload.rpid, payload.contract_address, payload.contract_version, {
        account,
        chainId: parsedChainId
    });
    const result = asyncResult;
    const availability = result.value;
    if (!availability) return {
        ...asyncResult,
        payload,
        computed: {
            canClaim: false,
            canRefund: false,
            listOfStatus: []
        }
    };
    const isEmpty = availability.balance === '0';
    const isExpired = availability.expired;
    const isClaimed = availability.claimed_amount !== '0';
    const isRefunded = isEmpty && availability.claimed < availability.total;
    const isCreator = (0,isSameAddress/* isSameAddress */.W)(payload?.sender.address ?? '', account);
    const isPasswordValid = !!(payload.password && payload.password !== 'PASSWORD INVALID');
    return {
        ...asyncResult,
        computed: {
            canClaim: !isExpired && !isEmpty && !isClaimed && isPasswordValid,
            canRefund: isExpired && !isEmpty && isCreator,
            canSend: !isEmpty && !isExpired && !isRefunded && isCreator,
            isPasswordValid,
            listOfStatus: (0,compact/* default */.Z)([
                isClaimed ? RedPacketStatus.claimed : undefined,
                isEmpty ? RedPacketStatus.empty : undefined,
                isRefunded ? RedPacketStatus.refunded : undefined,
                isExpired ? RedPacketStatus.expired : undefined
            ])
        }
    };
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useCreateRedPacketReceipt.ts






function useCreateRedPacketReceipt(txid) {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { HAPPY_RED_PACKET_ADDRESS_V4 } = (0,constants_constants/* useRedPacketConstants */.AA)(chainId);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!txid) return null;
        const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(txid, {
            chainId
        });
        if (!receipt) return null;
        const log = receipt.logs.find((log)=>(0,isSameAddress/* isSameAddress */.W)(log.address, HAPPY_RED_PACKET_ADDRESS_V4));
        if (!log) return null;
        const eventParams = (0,decodeEvents/* decodeEvents */.e)(HappyRedPacketV4, [
            log
        ]);
        return {
            rpid: eventParams.CreationSuccess.id ?? '',
            creation_time: eventParams.CreationSuccess.creation_time.toNumber() * 1000
        };
    }, [
        txid,
        HAPPY_RED_PACKET_ADDRESS_V4,
        chainId
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useRefundCallback.ts






function useRefundCallback(version, from, id, expectedChainId) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const [isRefunded, setIsRefunded] = (0,react.useState)(false);
    const redPacketContract = useRedPacketContract(chainId, version);
    const [state, refundCallback] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!redPacketContract || !id) return;
        setIsRefunded(false);
        const tx = await new ContractTransaction/* ContractTransaction */.D(redPacketContract).fillAll(redPacketContract.methods.refund(id), {
            from
        });
        const hash = await entry/* Web3 */.Bv.sendTransaction(tx, {
            chainId
        });
        setIsRefunded(true);
        return hash;
    }, [
        id,
        redPacketContract,
        chainId,
        from
    ]);
    return [
        state,
        isRefunded,
        refundCallback
    ];
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/instance.ts
var instance = __webpack_require__(50139);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/utils/formatDate.ts

function dateTimeFormat(date, includeTime = true) {
    return new Intl.DateTimeFormat(instance/* i18NextInstance */.BV.language, includeTime ? {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hourCycle: 'h23'
    } : {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).format(date);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketInHistoryList.tsx
















const RedPacketInHistoryList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { listItemBackground, listItemBackgroundIcon })=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        message: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            [smallQuery]: {
                whiteSpace: 'normal'
            }
        },
        root: {
            width: '100%',
            padding: 0,
            background: theme.palette.common.white,
            marginBottom: theme.spacing(1.5),
            borderRadius: 8,
            '&:last-child': {
                marginBottom: '80px'
            }
        },
        contentItem: {
            width: '100%',
            borderRadius: 8,
            position: 'static !important',
            height: 'auto !important',
            padding: theme.spacing(1.5),
            background: listItemBackground ?? theme.palette.background.default,
            [smallQuery]: {
                padding: theme.spacing(2, 1.5)
            },
            '&:before': {
                position: 'absolute',
                content: '""',
                top: 45,
                left: 400,
                zIndex: 0,
                width: 114,
                opacity: 0.2,
                height: 61,
                filter: 'blur(1.5px)',
                background: listItemBackgroundIcon,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '114px 114px'
            }
        },
        box: {
            display: 'flex',
            width: '100%'
        },
        content: {
            transform: 'RedPacketTransY(-4px)',
            width: '100%',
            [smallQuery]: {
                paddingLeft: theme.spacing(1.5),
                width: 'auto'
            }
        },
        section: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            [smallQuery]: {
                flexWrap: 'wrap'
            }
        },
        div: {
            maxWidth: 350
        },
        title: {
            color: theme.palette.maskColor.dark,
            fontWeight: 700,
            fontSize: 14
        },
        info: {
            color: theme.palette.maskColor.dark,
            [smallQuery]: {
                fontSize: 13
            },
            fontSize: 14
        },
        infoTitle: {
            color: theme.palette.maskColor.secondaryDark,
            marginRight: 4,
            fontSize: 14,
            [smallQuery]: {
                fontSize: 13
            }
        },
        actionButton: {
            fontSize: 12,
            width: 88,
            height: 32,
            background: theme.palette.maskColor.dark,
            color: theme.palette.maskColor.white,
            borderRadius: '999px',
            minHeight: 'auto',
            [smallQuery]: {
                marginTop: theme.spacing(1)
            },
            '&:disabled': {
                background: theme.palette.maskColor.dark,
                color: theme.palette.common.white
            },
            '&:hover': {
                background: theme.palette.maskColor.dark,
                color: theme.palette.maskColor.white,
                opacity: 0.8
            }
        },
        footer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            marginTop: 15
        },
        footerInfo: {
            fontSize: 14,
            color: theme.palette.maskColor.secondaryDark,
            '& span': {
                color: theme.palette.maskColor.dark,
                marginRight: 2
            }
        },
        popper: {
            overflow: 'visible',
            backgroundColor: theme.palette.maskColor.dark,
            transform: 'RedPacketTrans(196px, 47px)',
            borderRadius: 8,
            width: 328,
            padding: 10
        },
        arrow: {
            position: 'absolute',
            top: -12,
            right: 40,
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: `6px solid ${theme.palette.maskColor.dark}`,
            transform: 'RedPacketTransY(6px)'
        },
        popperText: {
            cursor: 'default',
            color: theme.palette.common.white,
            fontSize: 12
        },
        disabledButton: {
            background: theme.palette.maskColor.dark,
            color: theme.palette.common.white,
            opacity: 0.6
        },
        fullWidthBox: {
            width: '100%',
            display: 'flex'
        },
        icon: {
            width: 18,
            height: 18,
            marginLeft: 6,
            zIndex: -1
        },
        invisible: {
            visibility: 'hidden'
        }
    };
});
function RedPacketInHistoryList(props) {
    const { history, onSelect } = props;
    const t = useRedPacketTrans();
    const [isViewed, setIsViewed] = (0,react.useState)(false);
    const ref = (0,react.useRef)(null);
    const entry = (0,useIntersectionObserver/* useIntersectionObserver */.S)(ref, {});
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const isSmall = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.down('sm'));
    const { value: receipt } = useCreateRedPacketReceipt(isViewed && !history.rpid ? history.txid : '');
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const rpid = history.rpid ?? receipt?.rpid ?? '';
    const creation_time = history.creation_time ?? receipt?.creation_time ?? 0;
    const { classes, cx } = RedPacketInHistoryList_useStyles({
        listItemBackground: networkDescriptor?.backgroundGradient,
        listItemBackgroundIcon: networkDescriptor ? `url("${networkDescriptor.icon}")` : undefined
    });
    const patchedHistory = (0,react.useMemo)(()=>({
            ...props.history,
            rpid,
            creation_time
        }), [
        props.history,
        rpid,
        creation_time
    ]);
    (0,react.useEffect)(()=>{
        if (entry?.isIntersecting) setIsViewed(true);
    }, [
        entry?.isIntersecting
    ]);
    const { value: availability, computed: { canRefund, canSend, listOfStatus, isPasswordValid }, retry: revalidateAvailability } = useAvailabilityComputed(account, patchedHistory);
    const claimerNumber = availability ? Number(availability.claimed) : 0;
    const total_remaining = availability?.balance;
    const [{ loading: isRefunding }, refunded, refundCallback] = useRefundCallback(patchedHistory.contract_version, account, rpid);
    const tokenAddress = patchedHistory.token?.address ?? patchedHistory.token_address;
    const { data: tokenDetailed } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, tokenAddress ?? '', undefined, {
        chainId
    });
    const historyToken = {
        ...tokenDetailed ?? patchedHistory.token,
        address: tokenAddress
    };
    const onSendOrRefund = (0,react.useCallback)(async ()=>{
        if (canRefund) {
            await refundCallback();
            revalidateAvailability();
        }
        if (canSend) onSelect({
            ...patchedHistory,
            token: historyToken
        });
    }, [
        onSelect,
        refundCallback,
        canRefund,
        canSend,
        patchedHistory,
        historyToken
    ]);
    // #region password lost tips
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const openPopper = !!anchorEl;
    // #endregion
    // #region refund time
    const refundDuration = canSend && !isPasswordValid ? (0,intervalToDuration/* default */.Z)({
        start: Date.now(),
        end: (0,nextDay/* default */.Z)(creation_time, 1)
    }) : null;
    const formatRefundDuration = `${refundDuration?.hours}h ${refundDuration?.minutes}m`;
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: classes.contentItem,
            ref: ref,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.box,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.div,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classes.fullWidthBox,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                className: cx(classes.title, classes.message),
                                                children: patchedHistory.sender.message === '' ? t.best_wishes() : patchedHistory.sender.message
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.fullWidthBox,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body1",
                                                    className: cx(classes.infoTitle, classes.message),
                                                    children: t.create_time()
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body1",
                                                    className: cx(classes.info, classes.message, rpid ? '' : classes.invisible),
                                                    children: t.history_duration({
                                                        time: dateTimeFormat(new Date(creation_time))
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                canRefund || canSend || listOfStatus.includes(RedPacketStatus.empty) || refunded ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                            loading: isRefunding,
                                            fullWidth: isSmall,
                                            onClick: canSend && !isPasswordValid ? undefined : onSendOrRefund,
                                            onMouseEnter: (event)=>{
                                                canSend && !isPasswordValid ? setAnchorEl(event.currentTarget) : undefined;
                                            },
                                            onMouseLeave: ()=>{
                                                canSend && !isPasswordValid ? setAnchorEl(null) : undefined;
                                            },
                                            disabled: listOfStatus.includes(RedPacketStatus.empty) || refunded || isRefunding,
                                            className: cx(classes.actionButton, canSend && !isPasswordValid ? classes.disabledButton : ''),
                                            size: "large",
                                            children: canSend ? t.share() : isRefunding ? t.refunding() : listOfStatus.includes(RedPacketStatus.empty) || refunded ? t.empty() : t.refund()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Popper/* default */.Z, {
                                            className: classes.popper,
                                            id: "popper",
                                            open: openPopper,
                                            anchorEl: anchorEl,
                                            transition: true,
                                            disablePortal: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.popperText,
                                                    children: t.data_broken({
                                                        duration: formatRefundDuration
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: classes.arrow
                                                })
                                            ]
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.footer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    className: classes.footerInfo,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketTrans.history_claimed, {
                                        components: {
                                            span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                        },
                                        values: {
                                            claimedShares: String(claimerNumber),
                                            shares: String(patchedHistory.shares),
                                            amount: (0,formatBalance/* formatBalance */.a)(patchedHistory.total, historyToken?.decimals ?? 18, 6, true),
                                            claimedAmount: rpid ? (0,formatBalance/* formatBalance */.a)((0,number/* minus */.h9)(patchedHistory.total, total_remaining ?? 0), historyToken?.decimals ?? 18, 6, true) : '',
                                            symbol: historyToken?.symbol
                                        }
                                    })
                                }),
                                historyToken?.logoURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                    className: classes.icon,
                                    address: historyToken?.address ?? '',
                                    name: historyToken?.name,
                                    logoURL: historyToken?.logoURL
                                }) : null
                            ]
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useRedPacketHistory.ts







const CREATE_RED_PACKET_METHOD_ID = '0x5db05aba';
function useRedPacketHistory(address, chainId) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { HAPPY_RED_PACKET_ADDRESS_V4_BLOCK_HEIGHT, HAPPY_RED_PACKET_ADDRESS_V4 } = (0,constants_constants/* getRedPacketConstants */.GV)(chainId);
    const result = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!HAPPY_RED_PACKET_ADDRESS_V4) return src_constants/* EMPTY_LIST */.rP;
        if (wallet?.owner) {
            const historyTransactions = await entry/* TheGraphRedPacket */.wk.getHistories(chainId, address, HAPPY_RED_PACKET_ADDRESS_V4);
            if (!historyTransactions) return src_constants/* EMPTY_LIST */.rP;
            return RedPacketRPC.getRedPacketHistoryFromDatabase(historyTransactions);
        }
        const blockNumber = await entry/* Web3 */.Bv.getBlockNumber({
            chainId
        });
        const payloadList = await entry/* RedPacket */.h_.getHistories(chainId, address, HAPPY_RED_PACKET_ADDRESS_V4, CREATE_RED_PACKET_METHOD_ID, HAPPY_RED_PACKET_ADDRESS_V4_BLOCK_HEIGHT ?? 0, blockNumber);
        if (!payloadList) return src_constants/* EMPTY_LIST */.rP;
        return RedPacketRPC.getRedPacketHistoryFromDatabase(payloadList);
    }, [
        address,
        chainId,
        wallet?.owner
    ]);
    const value = (0,react.useMemo)(()=>result.value?.filter((x)=>x.chainId === chainId).sort((a, b)=>b.creation_time - a.creation_time), [
        chainId,
        result.value
    ]);
    return {
        ...result,
        value
    };
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketHistoryList.tsx









const RedPacketHistoryList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            padding: 0,
            height: 474,
            boxSizing: 'border-box',
            flexDirection: 'column',
            margin: '0 auto',
            overflow: 'auto',
            [smallQuery]: {
                padding: 0
            },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            display: 'flex',
            flexDirection: 'column',
            height: 474,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: 360,
            margin: '0 auto'
        },
        emptyIcon: {
            width: 36,
            height: 36,
            marginBottom: 13
        },
        loading: {
            fontSize: 14,
            marginTop: 13
        }
    };
});
function RedPacketHistoryList(props) {
    const { onSelect } = props;
    const t = useRedPacketTrans();
    const sharedI18N = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = RedPacketHistoryList_useStyles();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { value: histories, loading } = useRedPacketHistory(account, chainId);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            style: {
                height: 474,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                    size: 30
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.loading,
                    children: sharedI18N.loading()
                })
            ]
        });
    }
    if (!histories?.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                    className: classes.emptyIcon
                }),
                t.search_no_result()
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            style: {
                padding: '16px 0 0'
            },
            children: histories.map((history, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketInHistoryList, {
                    history: history,
                    onSelect: onSelect
                }, i))
        })
    });
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleCollections.ts
var useNonFungibleCollections = __webpack_require__(26896);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useNftRedPacketHistory.ts






const useNftRedPacketHistory_CREATE_RED_PACKET_METHOD_ID = '0x29e744bf';
function useNftRedPacketHistory(address, chainId) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { NFT_RED_PACKET_ADDRESS_BLOCK_HEIGHT, RED_PACKET_NFT_ADDRESS } = (0,constants_constants/* getNftRedPacketConstants */.pS)(chainId);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!RED_PACKET_NFT_ADDRESS) return src_constants/* EMPTY_LIST */.rP;
        if (wallet?.owner) {
            const historyTransactions = await entry/* TheGraphRedPacket */.wk.getNFTHistories(chainId, address, RED_PACKET_NFT_ADDRESS);
            if (!historyTransactions) return src_constants/* EMPTY_LIST */.rP;
            return RedPacketRPC.getNftRedPacketHistory(historyTransactions);
        }
        const blockNumber = await entry/* Web3 */.Bv.getBlockNumber({
            chainId
        });
        const payloadList = await entry/* RedPacket */.h_.getNFTHistories(chainId, address, RED_PACKET_NFT_ADDRESS, useNftRedPacketHistory_CREATE_RED_PACKET_METHOD_ID, NFT_RED_PACKET_ADDRESS_BLOCK_HEIGHT ?? 0, blockNumber);
        if (!payloadList) return src_constants/* EMPTY_LIST */.rP;
        return RedPacketRPC.getNftRedPacketHistory(payloadList);
    }, [
        address,
        chainId,
        wallet?.owner
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/fill.js
var fill = __webpack_require__(85447);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/NftRedPacket.json
var NftRedPacket = __webpack_require__(80847);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useNftRedPacketContract.ts



function useNftRedPacketContract(chainId) {
    const { RED_PACKET_NFT_ADDRESS } = (0,constants_constants/* useNftRedPacketConstants */.uq)(chainId);
    return (0,useContract/* useContract */.c)(chainId, RED_PACKET_NFT_ADDRESS, NftRedPacket);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useAvailabilityNftRedPacket.ts



function useAvailabilityNftRedPacket(id, from, chainId) {
    const nftRedPacketContract = useNftRedPacketContract(chainId);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || !nftRedPacketContract) return null;
        const availability = await nftRedPacketContract.methods.check_availability(id).call({
            // check availability is ok w/o account
            from
        });
        const result = await nftRedPacketContract.methods.check_erc721_remain_ids(id).call({
            // check availability is ok w/o account
            from
        });
        const isClaimed = availability.claimed_id !== '0';
        const totalAmount = result.erc721_token_ids.length;
        const bits = new bignumber/* BigNumber */.O(result.bit_status).toString(2).split('');
        const claimedAmount = bits.filter((bit)=>bit === '1').length;
        const isClaimedAll = totalAmount === claimedAmount;
        const isCompleted = isClaimedAll && !isClaimed;
        const isEnd = isCompleted || availability.expired;
        const bitStatusList = bits.reverse().map((bit)=>bit === '1');
        return {
            isClaimed,
            totalAmount,
            claimedAmount,
            remaining: totalAmount - claimedAmount,
            isClaimedAll,
            isCompleted,
            isEnd,
            bitStatusList,
            ...availability
        };
    }, [
        id,
        from,
        nftRedPacketContract
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useNftAvailabilityComputed.ts






/**
 * Fetch the red packet info from the chain
 * @param payload
 */ function useNftAvailabilityComputed(account, payload) {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const asyncResult = useAvailabilityNftRedPacket(payload?.rpid, account, chainId);
    const result = asyncResult;
    const availability = result.value;
    return (0,react.useMemo)(()=>{
        if (!availability) {
            return {
                ...asyncResult,
                payload,
                computed: {
                    canClaim: false,
                    listOfStatus: []
                }
            };
        }
        const isEmpty = availability.remaining === 0;
        const isExpired = availability.expired;
        const isClaimed = availability.isClaimed;
        const isCreator = (0,isSameAddress/* isSameAddress */.W)(payload?.sender.address ?? '', account);
        const isPasswordValid = !!payload.password && payload.password !== 'PASSWORD INVALID';
        const isClaimable = !isExpired && !isEmpty && !isClaimed;
        const isSendable = !isEmpty && !isExpired && isCreator;
        return {
            ...asyncResult,
            computed: {
                canClaim: isClaimable && isPasswordValid,
                canSend: isSendable,
                isPasswordValid,
                listOfStatus: (0,compact/* default */.Z)([
                    isClaimed ? RedPacketStatus.claimed : undefined,
                    isEmpty ? RedPacketStatus.empty : undefined,
                    isExpired ? RedPacketStatus.expired : undefined
                ])
            }
        };
    }, [
        asyncResult,
        availability,
        chainId
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useCreateNftRedPacketReceipt.ts






function useCreateNftRedPacketReceipt(txid, expectedChainId) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const { RED_PACKET_NFT_ADDRESS } = (0,constants_constants/* useNftRedPacketConstants */.uq)(chainId);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(txid, {
            chainId
        });
        if (!receipt) return null;
        const log = receipt.logs.find((log)=>(0,isSameAddress/* isSameAddress */.W)(log.address, RED_PACKET_NFT_ADDRESS));
        if (!log) return null;
        const eventParams = (0,decodeEvents/* decodeEvents */.e)(NftRedPacket, [
            log
        ]);
        return {
            rpid: eventParams.CreationSuccess.id ?? '',
            creation_time: eventParams.CreationSuccess.creation_time.toNumber() * 1000
        };
    }, [
        txid,
        chainId,
        RED_PACKET_NFT_ADDRESS
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/NftRedPacketHistoryItem.tsx















const NftRedPacketHistoryItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { listItemBackground, listItemBackgroundIcon })=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            width: '100%',
            padding: 0,
            background: theme.palette.common.white,
            marginBottom: theme.spacing(1.5),
            borderRadius: 8,
            '&:last-child': {
                marginBottom: '80px'
            }
        },
        contentItem: {
            width: '100%',
            borderRadius: 8,
            position: 'static !important',
            height: 'auto !important',
            padding: theme.spacing(1.5),
            background: listItemBackground ?? theme.palette.background.default,
            [smallQuery]: {
                padding: theme.spacing(2, 1.5)
            },
            '&:before': {
                position: 'absolute',
                content: '""',
                top: 45,
                left: 400,
                zIndex: 0,
                width: 114,
                opacity: 0.2,
                height: 61,
                filter: 'blur(1.5px)',
                background: listItemBackgroundIcon,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '114px 114px'
            }
        },
        message: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            [smallQuery]: {
                whiteSpace: 'normal'
            }
        },
        box: {
            display: 'flex',
            width: '100%'
        },
        content: {
            transform: 'RedPacketTransY(-4px)',
            width: '100%',
            paddingLeft: theme.spacing(1)
        },
        section: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing(2),
            [smallQuery]: {
                marginBottom: 0
            }
        },
        icon: {
            width: 18,
            height: 18,
            marginLeft: 6,
            zIndex: -1
        },
        title: {
            color: theme.palette.maskColor.dark,
            whiteSpace: 'break-spaces',
            fontWeight: 500,
            fontSize: 16
        },
        info: {
            color: theme.palette.maskColor.dark,
            [smallQuery]: {
                fontSize: 13
            },
            fontSize: 14
        },
        infoTitle: {
            color: theme.palette.maskColor.secondaryDark,
            marginRight: 4,
            fontSize: 14,
            [smallQuery]: {
                fontSize: 13
            }
        },
        actionButton: {
            fontSize: 12,
            width: 88,
            height: 32,
            background: theme.palette.maskColor.dark,
            color: theme.palette.maskColor.white,
            borderRadius: '999px',
            minHeight: 'auto',
            [smallQuery]: {
                marginTop: theme.spacing(1)
            },
            '&:disabled': {
                background: theme.palette.maskColor.dark,
                color: theme.palette.common.white
            },
            '&:hover': {
                background: theme.palette.maskColor.dark,
                color: theme.palette.maskColor.white,
                opacity: 0.8
            }
        },
        footer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            marginTop: 15
        },
        footerInfo: {
            fontSize: 14,
            color: theme.palette.maskColor.secondaryDark,
            '& span': {
                color: theme.palette.maskColor.dark,
                marginRight: 2
            }
        },
        fullWidthBox: {
            width: '100%',
            display: 'flex'
        },
        ellipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 360
        }
    };
});
const NftRedPacketHistoryItem = /*#__PURE__*/ (0,react.memo)(({ history, onSend, onShowPopover, onHidePopover, collections })=>{
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const [isViewed, setIsViewed] = (0,react.useState)(false);
    const ref = (0,react.useRef)(null);
    const entry = (0,useIntersectionObserver/* useIntersectionObserver */.S)(ref, {});
    const t = useRedPacketTrans();
    const { value: receipt } = useCreateNftRedPacketReceipt(isViewed ? history.txid : '', history.chainId);
    const rpid = receipt?.rpid ?? '';
    const creation_time = receipt?.creation_time ?? 0;
    const patchedHistory = (0,react.useMemo)(()=>({
            ...history,
            rpid,
            creation_time
        }), [
        history,
        rpid,
        creation_time
    ]);
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { classes, cx } = NftRedPacketHistoryItem_useStyles({
        listItemBackground: networkDescriptor?.backgroundGradient,
        listItemBackgroundIcon: networkDescriptor ? `url("${networkDescriptor.icon}")` : undefined
    });
    (0,react.useEffect)(()=>{
        if (entry?.isIntersecting) setIsViewed(true);
    }, [
        entry?.isIntersecting
    ]);
    const { computed: { canSend, isPasswordValid } } = useNftAvailabilityComputed(account, patchedHistory);
    const collection = collections.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, patchedHistory.token_address));
    const handleSend = (0,react.useCallback)(()=>{
        if (!(canSend && collection && isPasswordValid)) return;
        onSend(patchedHistory, collection);
    }, [
        onSend,
        canSend,
        patchedHistory,
        collection,
        isPasswordValid
    ]);
    const { value: redpacketStatus } = useAvailabilityNftRedPacket(patchedHistory.rpid, account, patchedHistory.chainId);
    const bitStatusList = redpacketStatus ? redpacketStatus.bitStatusList : (0,fill/* default */.Z)(Array(patchedHistory.token_ids.length), false);
    const handleMouseEnter = (event)=>{
        if (canSend && !isPasswordValid) {
            handleShowPopover(event.currentTarget);
        }
    };
    const handleShowPopover = (anchor)=>{
        onShowPopover(anchor, t.nft_data_broken());
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: classes.contentItem,
            ref: ref,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.box,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classes.fullWidthBox,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                className: cx(classes.title, classes.message, classes.ellipsis),
                                                children: patchedHistory.sender.message === '' ? t.best_wishes() : patchedHistory.sender.message
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.fullWidthBox,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body1",
                                                    className: cx(classes.infoTitle, classes.message),
                                                    children: t.create_time()
                                                }),
                                                rpid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body1",
                                                    className: cx(classes.info, classes.message),
                                                    children: t.history_duration({
                                                        time: dateTimeFormat(new Date(patchedHistory.creation_time))
                                                    })
                                                }) : null
                                            ]
                                        })
                                    ]
                                }),
                                canSend ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                    onMouseEnter: handleMouseEnter,
                                    onMouseLeave: onHidePopover,
                                    onClick: handleSend,
                                    disabled: !isPasswordValid,
                                    className: classes.actionButton,
                                    size: "large",
                                    children: t.share()
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.footer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    className: classes.footerInfo,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketTrans.history_nft_claimed, {
                                        components: {
                                            span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                        },
                                        values: {
                                            claimedShares: rpid ? bitStatusList.filter(Boolean).length.toString() : '0',
                                            shares: patchedHistory.shares.toString(),
                                            symbol: collection?.name ?? ''
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                    className: classes.icon,
                                    address: collection?.address ?? '',
                                    name: collection?.name ?? '-',
                                    logoURL: collection?.iconURL ?? new URL(/* asset import */ __webpack_require__(4926), __webpack_require__.b).toString()
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/NftRedPacketHistoryList.tsx












const NftRedPacketHistoryList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            width: 568,
            padding: 0,
            boxSizing: 'border-box',
            height: 474,
            flexDirection: 'column',
            margin: '0 auto',
            overflow: 'auto',
            [smallQuery]: {
                width: '100%',
                padding: 0
            },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            display: 'flex',
            flexDirection: 'column',
            height: 474,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: 360,
            margin: '0 auto'
        },
        emptyIcon: {
            width: 36,
            height: 36,
            marginBottom: 13
        },
        popper: {
            overflow: 'visible',
            padding: 6
        },
        popperContent: {
            position: 'relative',
            overflow: 'visible',
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(15, 20, 25, 1)' : '#fff',
            borderRadius: 8,
            padding: 10
        },
        arrow: {
            position: 'absolute',
            bottom: 0,
            right: 74,
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: `6px solid ${theme.palette.mode === 'light' ? 'rgba(15, 20, 25, 1)' : '#fff'}`,
            transform: 'RedPacketTrans(-50%, 6px)',
            [`&.${refs.atBottom}`]: {
                bottom: 'auto',
                top: 0,
                transform: 'RedPacketTrans(-50%, -6px) rotate(180deg)'
            }
        },
        atBottom: {},
        popperText: {
            cursor: 'default',
            color: theme.palette.mode === 'light' ? '#fff' : 'rgba(15, 20, 25, 1)',
            fontSize: 12
        },
        loading: {
            fontSize: 14,
            marginTop: 13
        }
    };
});
function NftRedPacketHistoryList({ onSend }) {
    const { classes, cx } = NftRedPacketHistoryList_useStyles();
    const t = useRedPacketTrans();
    const sharedI18N = (0,i18n_generated/* useSharedTrans */.j)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { value: histories, loading } = useNftRedPacketHistory(account, chainId);
    const containerRef = (0,react.useRef)(null);
    const [popperText, setPopperText] = (0,react.useState)('');
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const { data: collections = src_constants/* EMPTY_LIST */.rP } = (0,useNonFungibleCollections/* useNonFungibleCollections */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        schemaType: src_types/* SchemaType */.XQ.ERC721
    });
    const handleShowPopover = (anchor, text)=>{
        setAnchorEl(anchor);
        setPopperText(text);
    };
    const handleHidePopover = ()=>{
        setAnchorEl(null);
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            style: {
                height: 474,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                    size: 30
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.loading,
                    children: sharedI18N.loading()
                })
            ]
        });
    }
    if (!histories?.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                    className: classes.emptyIcon
                }),
                t.nft_no_history()
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: containerRef,
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    style: {
                        padding: '16px 0 0'
                    },
                    children: histories.map((history)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NftRedPacketHistoryItem, {
                            collections: collections,
                            history: history,
                            onSend: onSend,
                            onShowPopover: handleShowPopover,
                            onHidePopover: handleHidePopover
                        }, history.txid))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Popper/* default */.Z, {
                className: classes.popper,
                id: "data-damaged",
                open: !!anchorEl,
                placement: "top",
                anchorEl: anchorEl,
                disablePortal: true,
                children: ({ placement })=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.popperContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.popperText,
                                children: popperText
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: cx(classes.arrow, placement === 'bottom' ? classes.atBottom : '')
                            })
                        ]
                    });
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/openComposition.ts

function openComposition(metadataKey, payload) {
    // Close the duplicated dialog if already opened by clicking the mask compose icon.
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
        reason: 'popup',
        open: false
    });
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
        reason: 'timeline',
        open: true,
        options: {
            initialMetas: {
                [metadataKey]: payload
            }
        }
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketPast.tsx












const RedPacketPast_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        tabWrapper: {
            padding: theme.spacing(0, 2, 0, 2)
        }
    }));
function RedPacketPast({ onSelect, onClose, tabs }) {
    const { classes } = RedPacketPast_useStyles();
    const currentIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const linkedPersona = (0,useCurrentLinkedPersona/* useCurrentLinkedPersona */.O)();
    const senderName = currentIdentity?.identifier?.userId ?? linkedPersona?.nickname ?? 'Unknown User';
    const handleSendNftRedpacket = (0,react.useCallback)((history, collection)=>{
        const { rpid, txid, duration, sender, password, chainId } = history;
        openComposition(constants/* RedPacketNftMetaKey */.HA, {
            id: rpid,
            txid,
            duration,
            message: sender.message,
            senderName,
            contractName: collection.name,
            contractAddress: collection.address,
            contractTokenURI: collection.iconURL ?? '',
            privateKey: password,
            chainId
        });
        modals/* ApplicationBoardModal */.G5.close();
        onClose?.();
    }, [
        senderName
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.tabWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.tokens,
                        style: {
                            padding: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketHistoryList, {
                            onSelect: onSelect
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.collectibles,
                        style: {
                            padding: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NftRedPacketHistoryList, {
                            onSend: handleSendNftRedpacket
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    width: '100%',
                    position: 'absolute',
                    bottom: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    requiredSupportPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Components/RadioIndicator/index.tsx
var RadioIndicator = __webpack_require__(24500);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useAvailableBalance.ts
var useAvailableBalance = __webpack_require__(58752);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx + 1 modules
var FungibleTokenInput = __webpack_require__(93558);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenValue/index.tsx
var TokenValue = __webpack_require__(44888);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useDefaultCreateGas.ts








function useDefaultCreateGas(redPacketSettings, version, publicKey) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { NATIVE_TOKEN_ADDRESS } = (0,constants_constants/* useTokenConstants */.kd)(chainId);
    const redPacketContract = useRedPacketContract(chainId, version);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!redPacketSettings || !redPacketContract) return number/* ZERO */.xE;
        const { duration, isRandom, message, name, shares, total, token } = redPacketSettings;
        if (!token) return number/* ZERO */.xE;
        const seed = Math.random().toString();
        const tokenType = token.schema === src_types/* SchemaType */.XQ.Native ? 0 : 1;
        const tokenAddress = token.schema === src_types/* SchemaType */.XQ.Native ? NATIVE_TOKEN_ADDRESS : token.address;
        if (!tokenAddress) {
            return number/* ZERO */.xE;
        }
        const paramsObj = {
            publicKey,
            shares,
            isRandom,
            duration,
            seed: (0,lib.sha3)(seed),
            message,
            name,
            tokenType,
            tokenAddress,
            total,
            token
        };
        try {
            checkParams(paramsObj);
        } catch  {
            return number/* ZERO */.xE;
        }
        const params = Object.values((0,omit/* default */.Z)(paramsObj, [
            'token'
        ]));
        const value = (0,number/* toFixed */.FH)(paramsObj.token?.schema === src_types/* SchemaType */.XQ.Native ? total : 0);
        return redPacketContract.methods.create_red_packet(...params).estimateGas({
            from: account,
            value
        });
    }, [
        JSON.stringify(redPacketSettings),
        account,
        redPacketContract,
        publicKey,
        version,
        NATIVE_TOKEN_ADDRESS
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketERC20Form.tsx




















// seconds of 1 day
const duration = 60 * 60 * 24;
const RedPacketERC20Form_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        field: {
            display: 'flex',
            gap: 16,
            margin: 16
        },
        input: {
            flex: 1
        },
        button: {
            margin: 0,
            padding: 0,
            height: 40,
            maxWidth: 286
        },
        unlockContainer: {
            margin: 0,
            columnGap: 16,
            flexFlow: 'unset',
            ['& > div']: {
                padding: '0px !important'
            }
        },
        option: {
            display: 'flex',
            width: '50%',
            alignItems: 'center',
            color: theme.palette.maskColor.line
        },
        checkIconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '50%',
            marginRight: 5,
            backgroundColor: 'transparent'
        },
        tokenValue: {
            flexGrow: 1
        }
    }));
function RedPacketERC20Form(props) {
    const t = useRedPacketTrans();
    const { classes } = RedPacketERC20Form_useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const { onChange, onNext, origin, gasOption, onGasOptionChange, expectedChainId } = props;
    // context
    const wallet = (0,useWallet/* useWallet */.O)();
    const { pluginID } = (0,useContext/* useEnvironmentContext */.Ux)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const { HAPPY_RED_PACKET_ADDRESS_V4 } = (0,constants_constants/* useRedPacketConstants */.AA)(chainId);
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    // #region select token
    const nativeTokenDetailed = (0,react.useMemo)(()=>entry/* ChainResolver */.iv.nativeCurrency(chainId), [
        chainId
    ]);
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const [token = nativeTokenDetailed, setToken] = (0,react.useState)(origin?.token);
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await modals/* SelectFungibleTokenModal */.gw.openAndWaitForClose({
            disableNativeToken: false,
            selectedTokens: token ? [
                token.address
            ] : [],
            chainId,
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
        });
        if (!picked) return;
        setToken(picked);
    }, [
        token?.address,
        chainId
    ]);
    // #endregion
    // #region packet settings
    const [isRandom, setRandom] = (0,react.useState)(!origin ? 1 : origin?.isRandom ? 1 : 0);
    const [message, setMessage] = (0,react.useState)(origin?.message || '');
    const currentIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const linkedPersona = (0,useCurrentLinkedPersona/* useCurrentLinkedPersona */.O)();
    const senderName = currentIdentity?.identifier?.userId ?? linkedPersona?.nickname ?? 'Unknown User';
    // shares
    const [shares, setShares] = (0,react.useState)(origin?.shares || constants/* RED_PACKET_DEFAULT_SHARES */.sX);
    const onShareChange = (0,react.useCallback)((ev)=>{
        const shares_ = ev.currentTarget.value.replaceAll(/[,.]/g, '');
        if (shares_ === '') setShares('');
        else if (/^[1-9]+\d*$/.test(shares_)) {
            const parsed = Number.parseInt(shares_, 10);
            if (parsed >= constants/* RED_PACKET_MIN_SHARES */.Ih && parsed <= constants/* RED_PACKET_MAX_SHARES */.DY) {
                setShares(Number.parseInt(shares_, 10));
            } else if (parsed > constants/* RED_PACKET_MAX_SHARES */.DY) {
                setShares(constants/* RED_PACKET_MAX_SHARES */.DY);
            }
        }
    }, [
        constants/* RED_PACKET_MIN_SHARES */.Ih,
        constants/* RED_PACKET_MAX_SHARES */.DY
    ]);
    // amount
    const [rawAmount, setRawAmount] = (0,react.useState)(!origin ? '' : origin?.isRandom ? (0,formatBalance/* formatBalance */.a)(origin?.total, origin.token?.decimals ?? 0) : (0,formatBalance/* formatBalance */.a)(new bignumber/* BigNumber */.O(origin?.total ?? '0').div(origin?.shares ?? 1), origin?.token?.decimals ?? 0));
    const amount = (0,number/* rightShift */.pu)(rawAmount || '0', token?.decimals);
    const rawTotalAmount = (0,react.useMemo)(()=>isRandom || !rawAmount ? rawAmount : (0,number/* multipliedBy */.$q)(rawAmount, shares).toFixed(), [
        rawAmount,
        isRandom,
        shares
    ]);
    const totalAmount = (0,react.useMemo)(()=>(0,number/* multipliedBy */.$q)(amount, isRandom ? 1 : shares ?? '0'), [
        amount,
        shares,
        isRandom
    ]);
    const minTotalAmount = (0,react.useMemo)(()=>new bignumber/* BigNumber */.O(isRandom ? 1 : shares ?? 0), [
        shares,
        isRandom
    ]);
    const isDivisible = !totalAmount.dividedBy(shares).isLessThan(1);
    (0,react.useEffect)(()=>{
        setToken(nativeTokenDetailed);
    }, [
        chainId,
        nativeTokenDetailed
    ]);
    (0,react.useEffect)(()=>{
        setRawAmount('');
    }, [
        token
    ]);
    const creatingParams = (0,react.useMemo)(()=>({
            duration,
            isRandom: !!isRandom,
            name: senderName,
            message: message || t.best_wishes(),
            shares: shares || 0,
            token: token ? (0,omit/* default */.Z)(token, [
                'logoURI'
            ]) : undefined,
            total: totalAmount.toFixed()
        }), [
        isRandom,
        senderName,
        message,
        t,
        shares,
        token,
        totalAmount
    ]);
    const onClick = (0,react.useCallback)(()=>{
        onChange(creatingParams);
        onNext();
    }, [
        creatingParams,
        onChange,
        onNext
    ]);
    // #region gas
    const { account: publicKey } = (0,react.useMemo)(()=>entry/* Web3 */.Bv.createAccount(), []);
    const contract_version = 4;
    const { value: params } = useCreateParams(chainId, creatingParams, contract_version, publicKey);
    // #endregion
    // balance
    const { value: defaultGas = number/* ZERO */.xE } = useDefaultCreateGas({
        duration,
        isRandom: !!isRandom,
        name: senderName,
        message: message || t.best_wishes(),
        shares: shares || 0,
        token: token ? (0,omit/* default */.Z)(token, [
            'logoURI'
        ]) : undefined,
        total: (0,number/* rightShift */.pu)(0.01, token?.decimals).toFixed()
    }, contract_version, publicKey);
    const { isAvailableBalance, balance, isGasSufficient } = (0,useAvailableBalance/* useAvailableBalance */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address, gasOption ? {
        ...gasOption,
        gas: new bignumber/* BigNumber */.O(defaultGas).toString()
    } : undefined, {
        chainId
    });
    const { transactionValue, loading: loadingTransactionValue } = useTransactionValue(origin?.total, gasOption?.gas, gasOption?.gasCurrency);
    // #endregion
    const validationMessage = (0,react.useMemo)(()=>{
        if (!token) return t.select_a_token();
        if (!account) return t.plugin_wallet_connect_a_wallet();
        if ((0,number/* isZero */.Fr)(shares || '0')) return t.enter_shares();
        if ((0,number/* isGreaterThan */.T1)(shares || '0', 255)) return t.max_shares();
        if ((0,number/* isGreaterThan */.T1)(minTotalAmount, balance) || (0,number/* isGreaterThan */.T1)(totalAmount, balance)) return t.insufficient_token_balance({
            symbol: token?.symbol
        });
        if ((0,number/* isZero */.Fr)(amount)) {
            return isRandom ? t.enter_total_amount() : t.enter_each_amount();
        }
        if (!isDivisible) return t.indivisible({
            symbol: token.symbol,
            amount: (0,formatBalance/* formatBalance */.a)(1, token.decimals)
        });
        return '';
    }, [
        isRandom,
        account,
        amount,
        totalAmount,
        shares,
        token,
        balance,
        t,
        minTotalAmount
    ]);
    const gasValidationMessage = (0,react.useMemo)(()=>{
        if (!token) return '';
        if (!isGasSufficient) {
            return t.no_enough_gas_fees();
        }
        if (!loadingTransactionValue && new bignumber/* BigNumber */.O(transactionValue).isLessThanOrEqualTo(0)) return t.insufficient_balance();
        return '';
    }, [
        isAvailableBalance,
        balance,
        token?.symbol,
        transactionValue,
        loadingTransactionValue
    ]);
    if (!token) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.field,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.option,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.checkIconWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioIndicator/* RadioIndicator */.F, {
                                    onClick: ()=>setRandom(1),
                                    checked: !!isRandom,
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: isRandom ? theme.palette.maskColor.main : theme.palette.maskColor.second,
                                fontSize: 16,
                                fontWeight: isRandom ? 700 : 400,
                                children: t.random_amount()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.option,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.checkIconWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioIndicator/* RadioIndicator */.F, {
                                    onClick: ()=>setRandom(0),
                                    checked: !isRandom,
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: !isRandom ? theme.palette.maskColor.main : theme.palette.maskColor.second,
                                fontSize: 16,
                                fontWeight: !isRandom ? 700 : 400,
                                children: t.identical_amount()
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.field,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                    wrapperProps: {
                        className: classes.input
                    },
                    value: shares,
                    fullWidth: true,
                    onChange: onShareChange,
                    InputProps: {
                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: theme.palette.maskColor.third,
                                    fontSize: 14,
                                    marginRight: 0.5,
                                    children: t.quantity()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RedPacket, {
                                    size: 18
                                })
                            ]
                        }),
                        inputProps: {
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            inputMode: 'decimal',
                            placeholder: t.enter_quantity(),
                            spellCheck: false,
                            pattern: '^[0-9]+$'
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.field,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInput/* FungibleTokenInput */.C, {
                    label: t.token(),
                    token: token,
                    placeholder: isRandom ? t.total() : t.amount_each(),
                    onSelectToken: onSelectTokenChipClick,
                    onAmountChange: setRawAmount,
                    amount: rawAmount,
                    maxAmount: minTotalAmount.isGreaterThan(balance) && !(0,number/* isZero */.Fr)(balance) ? minTotalAmount.toString() : undefined,
                    isAvailableBalance: isAvailableBalance,
                    balance: balance,
                    maxAmountShares: isRandom || shares === '' ? 1 : shares
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                margin: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    fullWidth: true,
                    onChange: (e)=>setMessage(e.target.value),
                    placeholder: t.blessing_words(),
                    value: message,
                    inputProps: {
                        maxLength: 100
                    }
                })
            }),
            pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                margin: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectGasSettingsToolbar/* SelectGasSettingsToolbar */.M, {
                    nativeToken: nativeTokenDetailed,
                    nativeTokenPrice: nativeTokenPrice,
                    supportMultiCurrency: !!wallet?.owner && chainId === smartPayChainId,
                    gasConfig: gasOption,
                    gasLimit: Number.parseInt(params?.gas ?? '0', 10),
                    onChange: onGasOptionChange
                })
            }) : null,
            rawTotalAmount && !(0,number/* isZero */.Fr)(rawTotalAmount) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenValue/* TokenValue */.W, {
                className: classes.tokenValue,
                token: token,
                amount: rawTotalAmount
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    width: '100%',
                    position: 'absolute',
                    bottom: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    expectedChainId: chainId,
                    actualPluginID: pluginID,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: totalAmount.toFixed(),
                        balance: balance,
                        classes: {
                            container: classes.unlockContainer
                        },
                        ActionButtonProps: {
                            size: 'medium'
                        },
                        token: token?.schema === src_types/* SchemaType */.XQ.ERC20 && totalAmount.gt(0) && !validationMessage ? token : undefined,
                        spender: HAPPY_RED_PACKET_ADDRESS_V4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            expectedChainId: chainId,
                            forceShowingWrongNetworkButton: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                expectedChainId: chainId,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                    size: "medium",
                                    className: classes.button,
                                    fullWidth: true,
                                    disabled: !!validationMessage || !!gasValidationMessage,
                                    onClick: onClick,
                                    children: validationMessage || gasValidationMessage || t.next()
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Check.js
var Check = __webpack_require__(93573);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/AddCircleOutline.js


/* harmony default export */ const AddCircleOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'AddCircleOutline'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(17720);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/ERC721ContractSelectPanel/index.tsx











const ERC721ContractSelectPanel_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        root: {
            height: 52,
            border: `1px solid ${theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336'}`,
            borderRadius: 12,
            padding: theme.spacing(0.8, 1.2, 1),
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        },
        title: {},
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        icon: {
            height: 24,
            width: 24,
            borderRadius: 500
        },
        tokenWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        nftName: {
            marginLeft: theme.spacing(props.hasIcon ? 1 : 0),
            fontWeight: 300,
            pointerEvents: 'none',
            fontSize: 16,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        expandIcon: {
            color: theme.palette.text.primary
        },
        pointer: {
            cursor: 'pointer'
        }
    };
});
function ERC721ContractSelectPanel(props) {
    const { onContractChange, collection, label, chainId = src_types/* ChainId */.a_.Mainnet, balance } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = ERC721ContractSelectPanel_useStyles({
        hasIcon: !!collection?.iconURL
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const onCollectionChange = (0,react.useCallback)((contract)=>{
        onContractChange(contract);
    }, [
        onContractChange
    ]);
    const openDialog = (0,react.useCallback)(()=>{
        modals/* SelectNonFungibleContractModal */.rV.open({
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            schemaType: src_types/* SchemaType */.XQ.ERC721,
            chainId,
            onSubmit: onCollectionChange
        });
    }, [
        chainId,
        onCollectionChange
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: label ?? t.select_an_nft()
                    }),
                    !collection?.address || !Others.isValidAddress(collection.address) || collection.source === specs/* SourceType */.PO.SimpleHash && !collection?.id ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t.wallet_balance(),
                            ": ",
                            balance ? balance : '0'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.wrapper, classes.pointer),
                onClick: openDialog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tokenWrapper,
                        children: [
                            collection?.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.icon,
                                src: collection?.iconURL
                            }) : null,
                            collection?.name ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.nftName,
                                color: "textPrimary",
                                children: collection?.name
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                        className: classes.expandIcon
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/safeNonPayableTransactionCall.ts
function safeNonPayableTransactionCall(tx, overrides) {
    try {
        if (!tx) return;
        return tx.call(overrides);
    } catch (error) {
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-hooks/evm/src/useERC721ContractIsApproveForAll.ts




/**
 * @param contractAddress NFT contract address.
 * @param owner The address that owns the NFTs.
 * @param operator The address that acts on behalf of the owner.
 * @return True if `operator` is an approved operator for `owner`, false otherwise.
 */ function useERC721ContractIsApproveForAll(contractAddress, owner, operator, expectedChainId) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!owner || !operator || !contractAddress) return;
        return safeNonPayableTransactionCall(entry/* Contract */.CH.getERC721Contract(contractAddress, {
            chainId
        })?.methods.isApprovedForAll(owner, operator));
    }, [
        owner,
        operator
    ]);
}

// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC721ContractSetApproveForAllCallback.ts
var useERC721ContractSetApproveForAllCallback = __webpack_require__(43389);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EthereumERC721TokenApprovedBoundary/index.tsx






const EthereumERC721TokenApprovedBoundary_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({}));
function EthereumERC721TokenApprovedBoundary(props) {
    const { owner, collection, operator, children, validationMessage: _validationMessage, chainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { classes } = EthereumERC721TokenApprovedBoundary_useStyles(undefined, {
        props
    });
    const { value: isApproveForAll, loading, retry } = useERC721ContractIsApproveForAll(collection?.address, owner, operator, chainId);
    const [approveState, approveCallback] = (0,useERC721ContractSetApproveForAllCallback/* useERC721ContractSetApproveForAllCallback */.a)(collection?.address, operator, true, retry, chainId);
    (0,react.useEffect)(()=>{
        retry();
    }, [
        approveState.loading
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!collection?.address || !Others.isValidAddress(collection?.address)) return t.plugin_wallet_select_a_nft_contract();
        if (!owner || !Others.isValidAddress(owner)) return t.plugin_wallet_select_a_nft_owner();
        if (!operator || !Others.isValidAddress(operator)) return t.plugin_wallet_select_a_nft_operator();
        if (_validationMessage) return _validationMessage;
        return '';
    }, [
        collection,
        owner,
        operator,
        _validationMessage
    ]);
    if (approveState.loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            className: classes.approveButton,
            variant: "contained",
            fullWidth: true,
            loading: true,
            disabled: true,
            ...props.ActionButtonProps,
            children: t.plugin_wallet_nft_approving_all({
                symbol: collection?.symbol ? collection.symbol.toLowerCase() === 'unknown' ? 'All' : collection?.symbol : 'All'
            })
        });
    } else if (validationMessage) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            className: classes.approveButton,
            variant: "contained",
            fullWidth: true,
            disabled: true,
            ...props.ActionButtonProps,
            children: validationMessage
        });
    } else if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            className: classes.approveButton,
            variant: "contained",
            fullWidth: true,
            loading: true,
            disabled: true,
            ...props.ActionButtonProps
        });
    } else if (isApproveForAll === false) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            className: classes.approveButton,
            variant: "contained",
            fullWidth: true,
            onClick: approveCallback,
            ...props.ActionButtonProps,
            children: t.plugin_wallet_approve_all_nft({
                symbol: collection?.symbol ? collection?.symbol.toLowerCase() === 'unknown' ? 'All' : collection?.symbol : 'All'
            })
        });
    } else if (isApproveForAll === undefined) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            className: classes.approveButton,
            variant: "contained",
            fullWidth: true,
            onClick: retry,
            ...props.ActionButtonProps,
            children: t.plugin_wallet_fail_to_load_nft_contract()
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedpacketMessagePanel.tsx




const RedpacketMessagePanel_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%'
        },
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        input: {
            flex: 1,
            padding: theme.spacing(0.5)
        }
    };
});
function RedpacketMessagePanel(props) {
    const { onChange, message } = props;
    const { classes, cx } = RedpacketMessagePanel_useStyles();
    const t = useRedPacketTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.message_label()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.wrapper),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    className: classes.input,
                    onChange: (e)=>onChange(e.target.value),
                    inputProps: {
                        maxLength: 100,
                        placeholder: t.best_wishes()
                    },
                    value: message
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(58966);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findLastIndex.js
var findLastIndex = __webpack_require__(66885);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/QuestionMark.js


/* harmony default export */ const QuestionMark = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
}), 'QuestionMark'));
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/SelectNftTokenDialog.tsx















const SelectNftTokenDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        dialogContent: {
            minHeight: 380
        },
        dialogContentFixedHeight: {
            overflowY: 'hidden'
        },
        tokenBox: {
            background: theme.palette.background.default,
            width: 530,
            minHeight: 270,
            borderRadius: 12,
            margin: '16px auto',
            padding: 10
        },
        ownerTokenBox: {
            background: theme.palette.background.default,
            width: '96%',
            height: 270,
            borderRadius: 12,
            margin: '14px auto',
            padding: 10
        },
        noResultBox: {
            width: 540,
            height: 180,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16
        },
        iconButton: {
            color: '#7B8192',
            padding: theme.spacing(0.5)
        },
        searchButton: {
            borderRadius: 6,
            width: 100
        },
        searchWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
            columnGap: 16
        },
        searchWrapperSingle: {
            display: 'flex',
            justifyContent: 'space-between',
            columnGap: 16,
            padding: 0
        },
        textField: {
            flex: 1
        },
        confirmButton: {
            width: '100%',
            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
            color: theme.palette.mode === 'dark' ? '#000' : '#fff'
        },
        tokenSelector: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            width: '100%',
            height: 255,
            overflowY: 'auto',
            borderRadius: 12,
            marginBottom: theme.spacing(1.5),
            padding: theme.spacing(1.5, 1.5, 1, 1),
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        selectWrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 8,
            padding: 0,
            marginBottom: theme.spacing(1),
            background: theme.palette.background.paper,
            width: 120,
            height: 150,
            overflow: 'hidden'
        },
        selectWrapperNftNameWrapper: {
            width: '100%',
            background: theme.palette.background.paper,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            overflow: 'hidden'
        },
        selectWrapperNftName: {
            position: 'absolute',
            bottom: 0,
            marginLeft: 8,
            minHeight: 30,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        checkbox: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            top: 8,
            right: 6,
            width: 17,
            height: 17,
            borderRadius: 6,
            border: '2px solid #6E748E',
            backgroundColor: 'white'
        },
        checked: {
            borderColor: '#1C68F3 !important'
        },
        checkIcon: {
            width: 15,
            height: 15,
            color: '#1C68F3'
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 64,
            height: 64
        },
        selectedTokenAmount: {
            color: props.isSelectSharesExceed ? '#FF5F5F' : '#1C68F3'
        },
        totalAmount: {
            paddingLeft: 1
        },
        selectAmountBox: {
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center'
        },
        questionMarkIcon: {
            padding: 2,
            width: 12,
            border: `1px solid ${theme.palette.mode === 'light' ? '#0F1419' : '#D9D9D9'}`,
            borderRadius: 999,
            transform: 'RedPacketTransY(-1px)',
            height: 12,
            marginLeft: 5,
            cursor: 'pointer'
        },
        selectBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px'
        },
        selectAll: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14
        },
        selectAllCheckBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            width: 17,
            height: 17,
            borderRadius: 6,
            marginRight: 5,
            border: '2px solid #6E748E',
            backgroundColor: 'white'
        },
        selectAllCheckBoxText: {
            pointerEvents: 'none'
        },
        selectSharesExceed: {
            color: '#FF5F5F'
        },
        selectSharesExceedBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '14px 4px'
        },
        arrow: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#111418',
            transform: 'RedPacketTransX(260px) !important'
        },
        tooltip: {
            transform: 'RedPacketTransX(20px) !important',
            padding: '10px 20px',
            width: 256,
            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#111418'
        },
        tooltipText: {
            color: theme.palette.mode === 'dark' ? '#000' : '#fff'
        },
        imageWrapper: {
            height: 120,
            width: '100%',
            overflow: 'hidden'
        }
    }));
function SelectNftTokenDialog(props) {
    const { contract, existTokenDetailedList, tokenDetailedOwnerList, setExistTokenDetailedList, onClose } = props;
    const theme = (0,useTheme/* default */.Z)();
    const t = useRedPacketTrans();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const [searchedTokenDetailedList, setSearchedTokenDetailedList] = (0,react.useState)();
    const [searched, setSearched] = (0,react.useState)(false);
    const [tokenDetailedSelectedList, setTokenDetailedSelectedList] = (0,react.useState)(existTokenDetailedList);
    const [loadingToken, setLoadingToken] = (0,react.useState)(false);
    const [searchTokenListInput, setSearchTokenListInput] = (0,react.useState)('');
    const [tokenIdListInput, setTokenIdListInput] = (0,react.useState)('');
    const [tokenIdFilterList, setTokenIdFilterList] = (0,react.useState)(src_constants/* EMPTY_LIST */.rP);
    const isSelectSharesExceed = (tokenDetailedOwnerList.length === 0 ? constants/* RED_PACKET_MAX_SHARES */.DY - 1 : constants/* RED_PACKET_MAX_SHARES */.DY) < tokenDetailedSelectedList.length;
    const { classes, cx } = SelectNftTokenDialog_useStyles({
        isSelectSharesExceed
    });
    const [selectAll, setSelectAll] = (0,react.useState)(false);
    const selectAllHandler = (0,react.useCallback)(()=>{
        setTokenDetailedSelectedList(selectAll ? [] : tokenDetailedOwnerList);
        setSelectAll(!selectAll);
    }, [
        selectAll,
        tokenDetailedOwnerList
    ]);
    (0,react.useEffect)(()=>{
        setSearchTokenListInput('');
        setTokenDetailedSelectedList(existTokenDetailedList);
        setSearched(false);
    }, [
        contract
    ]);
    (0,react.useEffect)(()=>{
        setTokenIdFilterList(src_constants/* EMPTY_LIST */.rP);
    }, [
        tokenIdListInput
    ]);
    const update = (0,useUpdate/* default */.Z)();
    (0,react.useEffect)(update, [
        tokenDetailedOwnerList
    ]);
    const selectToken = (0,react.useCallback)((token, findToken, shiftKey, index)=>{
        if (!shiftKey || tokenIdFilterList.length > 0) {
            if (findToken) {
                setTokenDetailedSelectedList(tokenDetailedSelectedList.filter((v)=>v.tokenId !== findToken.tokenId));
            } else {
                setTokenDetailedSelectedList(tokenDetailedSelectedList.concat({
                    ...token,
                    index
                }));
            }
        } else {
            const tokenDetailedSelectedListSorted = tokenDetailedSelectedList.sort((a, b)=>(b.index ?? 0) - (a.index ?? 0));
            if (findToken) {
                const unselectedTokenIdList = [];
                let nextToken = findToken;
                while(nextToken){
                    unselectedTokenIdList.push(nextToken.tokenId);
                    const nextTokenIndex = (nextToken?.index ?? 0) + 1;
                    nextToken = tokenDetailedSelectedListSorted.find((v)=>(v.index ?? 0) === nextTokenIndex);
                }
                setTokenDetailedSelectedList(tokenDetailedSelectedList.filter((v)=>!unselectedTokenIdList.includes(v.tokenId)));
            } else {
                const lastSelectedToken = tokenDetailedSelectedListSorted.filter((v)=>(v?.index ?? 0) < index)[0];
                const lastSelectedTokenIndex = (0,findLastIndex/* default */.Z)(tokenDetailedOwnerList, (v, i)=>v.tokenId === lastSelectedToken?.tokenId && i < index);
                setTokenDetailedSelectedList(tokenDetailedSelectedList.concat(tokenDetailedOwnerList.slice(lastSelectedTokenIndex + 1, index + 1)));
            }
        }
    }, [
        tokenDetailedSelectedList,
        setTokenDetailedSelectedList,
        tokenIdFilterList
    ]);
    // #region fetch token detail
    const onSearch = (0,react.useCallback)(async ()=>{
        if (!/^(\s?(\w+)?\s?,?\uFF0C?)+$/u.test(searchTokenListInput)) return;
        const tokenIdList = (0,uniq/* default */.Z)(searchTokenListInput.split(/,|\uFF0C/u).map((v)=>v.trim()));
        setLoadingToken(true);
        const allSettled = await Promise.allSettled(tokenIdList.map((tokenId)=>entry/* Web3 */.Bv.getNonFungibleToken(contract?.address ?? '', tokenId, src_types/* SchemaType */.XQ.ERC721, {
                account,
                chainId
            })));
        const searchedTokenDetailedList = allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null).filter(Boolean).map((x, i)=>({
                ...x,
                index: i
            }));
        setSearchedTokenDetailedList(searchedTokenDetailedList);
        setSearched(true);
        setLoadingToken(false);
    }, [
        contract,
        searchTokenListInput,
        chainId,
        account
    ]);
    (0,react.useEffect)(()=>{
        setSearched(false);
    }, [
        searchTokenListInput
    ]);
    // #endregion
    const onFilter = (0,react.useCallback)(()=>{
        if (!/^(\s?(\w+)?\s?,?\uFF0C?)+$/u.test(tokenIdListInput)) return;
        const list = (0,uniq/* default */.Z)(tokenIdListInput.split(/,|\uFF0C/u).map((v)=>v.trim()));
        setTokenIdFilterList(list);
    }, [
        tokenIdListInput
    ]);
    const onSubmit = (0,react.useCallback)(()=>{
        setExistTokenDetailedList(tokenDetailedSelectedList);
        onClose();
    }, [
        tokenDetailedSelectedList,
        setExistTokenDetailedList,
        onClose
    ]);
    const maxSharesOptions = {
        amount: constants/* RED_PACKET_MAX_SHARES */.DY.toString()
    };
    return tokenDetailedOwnerList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
        className: classes.dialogContent,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.tokenBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.searchWrapperSingle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                                startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {
                                    className: classes.iconButton
                                }),
                                value: searchTokenListInput,
                                placeholder: "Input Token ID",
                                className: classes.textField,
                                onChange: (e)=>setSearchTokenListInput(e.target.value)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                disabled: !searchTokenListInput,
                                className: classes.searchButton,
                                onClick: onSearch,
                                children: t.search()
                            })
                        ]
                    }),
                    loadingToken || !searchedTokenDetailedList || !contract ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.noResultBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: loadingToken ? t.loading_token() : searched ? t.search_no_result() : null
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.tokenSelector,
                        children: searchedTokenDetailedList.map((token, i)=>{
                            const findToken = tokenDetailedSelectedList.find((t)=>t.tokenId === token.tokenId);
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTCard, {
                                    findToken: findToken,
                                    token: token,
                                    selectToken: selectToken,
                                    isSelectSharesExceed: isSelectSharesExceed
                                })
                            }, i);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.selectSharesExceedBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.selectSharesExceed,
                        children: isSelectSharesExceed ? t.nft_max_shares_tip(maxSharesOptions) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.selectAmountBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.tooltipText,
                                    children: tokenDetailedSelectedList.length > constants/* RED_PACKET_MAX_SHARES */.DY ? t.nft_max_shares_tip(maxSharesOptions) : t.nft_max_shares(maxSharesOptions)
                                }),
                                placement: "top-end",
                                classes: {
                                    tooltip: classes.tooltip,
                                    arrow: classes.arrow
                                },
                                arrow: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark, {
                                    className: classes.questionMarkIcon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketTrans.nft_select_amount, {
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.selectedTokenAmount
                                        })
                                    },
                                    values: {
                                        count: tokenDetailedSelectedList.length
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                disabled: loadingToken || isSelectSharesExceed,
                className: classes.confirmButton,
                onClick: onSubmit,
                children: t.confirm()
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
        className: cx(classes.dialogContent, classes.dialogContentFixedHeight),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.searchWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {
                            className: classes.iconButton
                        }),
                        value: tokenDetailedOwnerList.length === 0 ? searchTokenListInput : tokenIdListInput,
                        placeholder: t.nft_search_placeholder(),
                        className: classes.textField,
                        onChange: (e)=>tokenDetailedOwnerList.length === 0 ? setSearchTokenListInput(e.target.value) : setTokenIdListInput(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        disabled: tokenDetailedOwnerList.length === 0 ? !searchTokenListInput : !tokenIdListInput,
                        className: classes.searchButton,
                        onClick: tokenDetailedOwnerList.length === 0 ? onSearch : onFilter,
                        children: t.search()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.ownerTokenBox,
                children: loadingToken && searched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.noResultBox,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: loadingToken ? t.loading_token() : t.search_no_result()
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        tokenIdFilterList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.selectBar,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.selectAll,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: cx(classes.selectAllCheckBox, selectAll ? classes.checked : ''),
                                            onClick: selectAllHandler,
                                            children: selectAll ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                                className: classes.checkIcon
                                            }) : null
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: cx(classes.selectAllCheckBoxText),
                                            children: t.select_all()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketTrans.nft_shift_select_tip, {
                                        components: {
                                            text: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                style: {
                                                    color: theme.palette.maskColor.primary
                                                }
                                            })
                                        },
                                        values: {
                                            text: 'Shift'
                                        }
                                    })
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.tokenSelector,
                            children: tokenDetailedOwnerList.map((token)=>{
                                const findToken = tokenDetailedSelectedList.find((t)=>t.tokenId === token.tokenId);
                                if (tokenIdFilterList.length > 0 && !tokenIdFilterList.includes(token.tokenId)) return null;
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTCard, {
                                    findToken: findToken,
                                    token: token,
                                    selectToken: selectToken,
                                    isSelectSharesExceed: isSelectSharesExceed
                                }, token.tokenId);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.selectSharesExceedBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.selectSharesExceed,
                        children: isSelectSharesExceed ? t.nft_max_shares_tip(maxSharesOptions) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.selectAmountBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.tooltipText,
                                    children: tokenDetailedSelectedList.length > constants/* RED_PACKET_MAX_SHARES */.DY ? t.nft_max_shares_tip(maxSharesOptions) : t.nft_max_shares(maxSharesOptions)
                                }),
                                placement: "top-end",
                                classes: {
                                    tooltip: classes.tooltip,
                                    arrow: classes.arrow
                                },
                                arrow: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark, {
                                    className: classes.questionMarkIcon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: classes.selectedTokenAmount,
                                        children: tokenDetailedSelectedList.length + ' '
                                    }),
                                    "/",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: classes.totalAmount,
                                        children: tokenDetailedOwnerList.length
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                disabled: loadingToken || tokenDetailedSelectedList.length === 0 || isSelectSharesExceed,
                className: classes.confirmButton,
                onClick: onSubmit,
                children: t.confirm()
            })
        ]
    });
}
function NFTCard(props) {
    const { findToken, token, isSelectSharesExceed, selectToken } = props;
    const { classes, cx } = SelectNftTokenDialog_useStyles({
        isSelectSharesExceed
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.selectWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.imageWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                    url: token.metadata?.mediaURL || token.metadata?.imageURL,
                    classes: {
                        fallbackImage: classes.fallbackImage
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.selectWrapperNftNameWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.selectWrapperNftName,
                    color: "textSecondary",
                    children: (0,formatter/* formatTokenId */.Xy)(token.tokenId, 2)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.checkbox, findToken ? classes.checked : ''),
                onClick: (event)=>selectToken(token, findToken, event.shiftKey, token.index),
                children: findToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                    className: classes.checkIcon
                }) : null
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useCreateNftRedpacketCallback.ts







function useCreateNftRedpacketCallback(duration, message, name, contractAddress, tokenIdList, gasOption) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const nftRedPacketContract = useNftRedPacketContract(chainId);
    const createCallback = (0,useAsyncFn/* default */.Z)(async (publicKey)=>{
        if (!nftRedPacketContract || !(0,address/* isValidAddress */.At)(contractAddress) || tokenIdList.length === 0) {
            return;
        }
        // #region check ownership
        const checkParams = [
            tokenIdList,
            contractAddress
        ];
        const isOwner = await nftRedPacketContract.methods.check_ownership(...checkParams).call({
            from: account
        });
        if (!isOwner) {
            return;
        }
        // #endregion
        const params = [
            publicKey,
            duration,
            (0,lib.sha3)(Math.random().toString()),
            message,
            name,
            contractAddress,
            tokenIdList
        ];
        const tx = await new ContractTransaction/* ContractTransaction */.D(nftRedPacketContract).fillAll(nftRedPacketContract.methods.create_red_packet(...params), {
            from: account,
            gas: (0,number/* toFixed */.FH)(await nftRedPacketContract.methods.create_red_packet(...params).estimateGas({
                from: account
            })),
            chainId,
            ...gasOption
        });
        const hash = await entry/* Web3 */.Bv.sendTransaction(tx, {
            paymentToken: gasOption?.gasCurrency,
            gasOptionType: gasOption?.gasOptionType
        });
        const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash);
        if (receipt) {
            const events = (0,decodeEvents/* decodeEvents */.e)(nftRedPacketContract.options.jsonInterface, receipt.logs);
            return {
                hash,
                receipt,
                events
            };
        }
        return {
            hash,
            receipt
        };
    }, [
        duration,
        message,
        name,
        contractAddress,
        tokenIdList,
        nftRedPacketContract,
        account,
        chainId,
        gasOption
    ]);
    return createCallback;
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedpacketNftConfirmDialog.tsx















const RedpacketNftConfirmDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            fontSize: 16
        },
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        },
        account: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        text: {
            fontSize: 16
        },
        bold: {
            fontWeight: 500
        },
        tokenWrapper: {
            float: 'right',
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            marginRight: 8,
            height: 24,
            width: 24
        },
        tokenSelector: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            width: '100%',
            maxHeight: 420,
            overflowY: 'auto',
            background: theme.palette.background.default,
            borderRadius: 12,
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5),
            padding: theme.spacing(1.5, 1.5, 1, 1.5),
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tokenSelectorWrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 8,
            padding: 0,
            background: theme.palette.mode === 'light' ? '#fff' : '#2F3336',
            height: 150,
            overflow: 'hidden'
        },
        nftNameWrapper: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: theme.palette.background.paper,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            paddingTop: 2,
            paddingBottom: 1
        },
        nftName: {
            minHeight: 30,
            marginLeft: 8,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        button: {
            minHeight: 36,
            height: 36
        },
        sendButton: {},
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 64,
            height: 64
        },
        ellipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        assetImgWrapper: {
            maxHeight: 120,
            overflow: 'hidden'
        }
    }));
const RedpacketNftConfirmDialog_NFTCard = /*#__PURE__*/ (0,react.memo)(function NFTCard(props) {
    const { token } = props;
    const { classes } = RedpacketNftConfirmDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.tokenSelectorWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                url: token.metadata?.mediaURL || token.metadata?.imageURL,
                classes: {
                    fallbackImage: classes.fallbackImage,
                    root: classes.assetImgWrapper
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.nftNameWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.nftName,
                    color: "textSecondary",
                    children: (0,formatter/* formatTokenId */.Xy)(token.tokenId, 2)
                })
            })
        ]
    });
});
function RedpacketNftConfirmDialog(props) {
    const t = useRedPacketTrans();
    const { classes, cx } = RedpacketNftConfirmDialog_useStyles();
    const { onClose, message, contract, tokenList, senderName, gasOption } = props;
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { account: publicKey, privateKey = '' } = (0,react.useMemo)(()=>entry/* Web3 */.Bv.createAccount(), []);
    const duration = 60 * 60 * 24;
    const tokenIdList = tokenList.map((value)=>value.tokenId);
    const [{ loading: isSending }, createCallback] = useCreateNftRedpacketCallback(duration, message, senderName, contract.address ?? '', tokenIdList, gasOption);
    const [transactionId, setTransactionId] = (0,react.useState)('');
    const onSendTx = (0,react.useCallback)(async ()=>{
        const result = await createCallback(publicKey);
        const { hash, receipt, events } = result ?? {};
        if (typeof hash !== 'string') return;
        if (typeof receipt?.transactionHash !== 'string') return;
        setTransactionId(receipt.transactionHash);
        RedPacketRPC.addRedPacketNft({
            id: receipt.transactionHash,
            password: privateKey,
            contract_version: 1
        });
        const { id } = events?.CreationSuccess?.returnValues ?? {};
        if (!id) return;
        onSendPost(id);
        onClose();
    }, [
        publicKey
    ]);
    const onSendPost = (0,react.useCallback)((id)=>{
        openComposition(constants/* RedPacketNftMetaKey */.HA, {
            id,
            transactionId,
            duration,
            message,
            senderName,
            contractName: contract.name,
            contractAddress: contract.address,
            contractTokenURI: contract.iconURL ?? '',
            contractVersion: 1,
            privateKey,
            chainId: contract.chainId
        });
        modals/* ApplicationBoardModal */.G5.close();
    }, [
        duration,
        message,
        senderName,
        contract,
        privateKey,
        transactionId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 2,
                pb: 9,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            variant: "body1",
                            className: classes.text,
                            children: t.nft_account_name()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            variant: "body1",
                            align: "right",
                            className: cx(classes.account, classes.bold, classes.text),
                            children: [
                                (0,formatter/* formatEthereumAddress */.j8)(account, 4),
                                (0,address/* isNativeTokenAddress */.qw)(wallet?.address) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    color: "textPrimary",
                                    className: classes.link,
                                    href: entry/* ExplorerResolver */.Xz.addressLink(chainId, account),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: stop,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            className: cx(classes.text),
                            children: t.nft_attached_message()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            align: "right",
                            className: cx(classes.text, classes.bold, classes.ellipsis),
                            children: message
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            className: cx(classes.text),
                            children: t.collections()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.tokenWrapper,
                            children: [
                                contract.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    className: classes.icon,
                                    src: contract.iconURL
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    align: "right",
                                    className: cx(classes.text, classes.bold),
                                    children: contract.name
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        component: List/* default */.Z,
                        className: classes.tokenSelector,
                        children: tokenList.map((value, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedpacketNftConfirmDialog_NFTCard, {
                                token: value
                            }, i))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            variant: "body1",
                            className: cx(classes.text),
                            children: t.nft_total_amount()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            align: "right",
                            className: cx(classes.text, classes.bold),
                            children: tokenList.length
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                        expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                        expectedChainId: chainId,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            expectedChainId: chainId,
                            classes: {
                                connectWallet: cx(classes.button, classes.sendButton)
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                size: "medium",
                                loading: isSending,
                                disabled: isSending,
                                onClick: onSendTx,
                                className: cx(classes.button, classes.sendButton),
                                fullWidth: true,
                                children: t.send_symbol({
                                    count: tokenList.length
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/types.ts
var NFTSelectOption;
(function(NFTSelectOption) {
    NFTSelectOption["All"] = "All";
    NFTSelectOption["Partial"] = "Partial";
})(NFTSelectOption || (NFTSelectOption = {}));

// EXTERNAL MODULE: ./packages/shared-base/src/Pageable/index.ts
var Pageable = __webpack_require__(38645);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useNonFungibleAssetsByCollectionAndOwner.ts



function useNonFungibleAssetsByCollectionAndOwner(collectionId, owner, pluginID, options) {
    const [assets, setAssets] = (0,react.useState)(src_constants/* EMPTY_LIST */.rP);
    const [done, setDone] = (0,react.useState)(false);
    const [loading, toggleLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)();
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, options);
    // create iterator
    const iterator = (0,react.useMemo)(()=>{
        setAssets(src_constants/* EMPTY_LIST */.rP);
        setDone(false);
        return (0,Pageable/* pageableToIterator */.T1)(async (indicator)=>{
            return Hub.getNonFungibleAssetsByCollectionAndOwner(collectionId ?? '', owner ?? '', {
                indicator,
                size: 50
            });
        });
    }, [
        collectionId,
        Hub
    ]);
    const next = (0,react.useCallback)(async ()=>{
        if (!iterator || done) return;
        const batchResult = [];
        toggleLoading(true);
        try {
            for (const _ of Array.from({
                length: options?.size ?? 36
            })){
                const { value, done: iteratorDone } = await iterator.next();
                if (value instanceof Error) {
                    // Controlled error
                    setError(value.message);
                    break;
                } else {
                    if (iteratorDone) {
                        setDone(true);
                        break;
                    }
                    if (!iteratorDone && value) {
                        batchResult.push(value);
                    }
                }
            }
        } catch (error_) {
            // Uncontrolled error
            setError(error_);
            setDone(true);
        }
        toggleLoading(false);
        setAssets((pred)=>[
                ...pred,
                ...batchResult
            ].sort((a, b)=>a.tokenId > b.tokenId ? 1 : -1));
    }, [
        iterator,
        done
    ]);
    // Execute once after next update
    (0,react.useEffect)(()=>{
        if (next) next();
    }, [
        next
    ]);
    const retry = (0,react.useCallback)(()=>{
        setAssets(src_constants/* EMPTY_LIST */.rP);
        setDone(false);
    }, []);
    return {
        value: assets.filter((x)=>options?.chainId ? x.chainId === options?.chainId : true),
        next,
        loading,
        done,
        retry,
        error
    };
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useCreateNftRedpacketGas.ts







function useCreateNFTRedpacketGas(message, name, contractAddress, tokenIdList) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const nftRedPacketContract = useNftRedPacketContract(chainId);
    const { account: publicKey } = (0,react.useMemo)(()=>entry/* Web3 */.Bv.createAccount(), []);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!nftRedPacketContract || !account) return;
        const params = [
            publicKey,
            60 * 60 * 24,
            (0,lib.sha3)(Math.random().toString()),
            message,
            name,
            contractAddress,
            tokenIdList
        ];
        return (0,number/* toFixed */.FH)(await nftRedPacketContract?.methods.create_red_packet(...params).estimateGas({
            from: account
        }));
    }, [
        account,
        contractAddress,
        message,
        name,
        JSON.stringify(tokenIdList),
        nftRedPacketContract,
        publicKey
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketERC721Form.tsx




















const RedPacketERC721Form_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            padding: '0 16px 72px'
        },
        line: {
            display: 'flex',
            margin: theme.spacing(1, 0, 2, 0)
        },
        nftNameWrapper: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: theme.palette.background.paper,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            paddingTop: 2,
            paddingBottom: 1
        },
        nftName: {
            minHeight: 30,
            marginLeft: 8,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        tokenSelector: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: 200,
            background: theme.palette.background.default,
            borderRadius: 12,
            padding: theme.spacing(1.5, 1.5, 1, 1),
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
        tokenSelectorWrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 8,
            padding: 0,
            marginBottom: theme.spacing(2.5),
            background: theme.palette.background.paper,
            width: 120,
            height: 150,
            overflow: 'hidden'
        },
        tokenSelectorParent: {
            background: theme.palette.background.default,
            borderRadius: 12,
            paddingBottom: 5,
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5)
        },
        addWrapper: {
            cursor: 'pointer',
            alignItems: 'center',
            background: `${theme.palette.background.default} !important`,
            justifyContent: 'center',
            border: `1px solid ${theme.palette.divider}`
        },
        addIcon: {
            color: '#AFC3E1'
        },
        closeIconWrapperBack: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 5,
            right: 5,
            width: 18,
            height: 18,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 500,
            overflow: 'hidden'
        },
        closeIconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 18,
            height: 18,
            background: 'rgba(255, 95, 95, 0.3)'
        },
        closeIcon: {
            width: 14,
            height: 14,
            cursor: 'pointer',
            color: 'rgba(255, 95, 95, 1)'
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 64,
            height: 64
        },
        selectWrapper: {
            display: 'flex',
            alignItems: 'center',
            margin: 0
        },
        option: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        optionLeft: {
            marginRight: '16px'
        },
        checkIcon: {
            width: 15,
            height: 15,
            color: '#fff'
        },
        checkIconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            width: 17,
            height: 17,
            borderRadius: 999,
            marginRight: 5,
            border: '1px solid #6E748E',
            backgroundColor: 'white'
        },
        checked: {
            borderColor: '#1D9BF0 !important',
            background: '#1D9BF0 !important'
        },
        approveAllTip: {
            color: '#FF5F5F',
            margin: '8px 4px 8px 4px'
        },
        toolbar: {
            marginTop: 0
        },
        disabledSelector: {
            opacity: 0.5,
            pointerEvents: 'none'
        },
        assetImgWrapper: {
            maxHeight: 120,
            overflow: 'hidden'
        },
        approveButton: {
            height: 40,
            margin: 0,
            padding: 0
        },
        skeleton: {
            display: 'flex',
            marginBottom: 12
        },
        rectangle: {
            borderRadius: 8,
            marginRight: 12
        }
    };
});
function RedPacketERC721Form(props) {
    const t = useRedPacketTrans();
    const { onClose, setIsNFTRedPacketLoaded, openNFTConfirmDialog, setOpenNFTConfirmDialog, openSelectNFTDialog, setOpenSelectNFTDialog, gasOption, onGasOptionChange } = props;
    const { classes, cx } = RedPacketERC721Form_useStyles();
    const [selectOption, setSelectOption] = (0,react.useState)(undefined);
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useEnvironmentContext */.Ux)();
    const [collection, setCollection] = (0,react.useState)();
    const [manualSelectedTokenDetailedList, setExistTokenDetailedList] = (0,react.useState)(src_constants/* EMPTY_LIST */.rP);
    const [onceAllSelectedTokenDetailedList, setAllTokenDetailedList] = (0,react.useState)(src_constants/* EMPTY_LIST */.rP);
    const tokenDetailedList = selectOption === NFTSelectOption.Partial ? manualSelectedTokenDetailedList : onceAllSelectedTokenDetailedList;
    const [message, setMessage] = (0,react.useState)('Best Wishes!');
    const wallet = (0,useWallet/* useWallet */.O)();
    const { data: nativeTokenDetailed } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: nativeTokenPrice } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const currentIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const linkedPersona = (0,useCurrentLinkedPersona/* useCurrentLinkedPersona */.O)();
    const lastRecognized = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const senderName = lastRecognized?.identifier?.userId ?? currentIdentity?.identifier?.userId ?? linkedPersona?.nickname ?? 'Unknown User';
    const { value: gasLimit = '0' } = useCreateNFTRedpacketGas(message, senderName, collection?.address ?? '', tokenDetailedList.map((value)=>value.tokenId));
    const { isGasSufficient, isGasFeeGreaterThanOneETH } = (0,useAvailableBalance/* useAvailableBalance */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, '', gasOption, {
        chainId
    });
    const { value: assets_ = src_constants/* EMPTY_LIST */.rP, next, done } = useNonFungibleAssetsByCollectionAndOwner(collection?.assets?.length ? '' : collection?.source === specs/* SourceType */.PO.SimpleHash ? collection?.id : collection?.address, account, PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        size: 50
    });
    (0,react.useEffect)(()=>{
        next();
    }, [
        assets_.length
    ]);
    const assets = collection?.assets?.length ? collection?.assets : assets_;
    const tokenDetailedOwnerList = assets.map((v, index)=>({
            ...v,
            index
        }));
    const balance = collection?.balance ?? tokenDetailedOwnerList.length;
    const removeToken = (0,react.useCallback)((token)=>{
        setExistTokenDetailedList((list)=>list.filter((t)=>t.tokenId !== token.tokenId));
        setAllTokenDetailedList(src_constants/* EMPTY_LIST */.rP);
        setSelectOption(NFTSelectOption.Partial);
    }, [
        selectOption,
        setSelectOption,
        setExistTokenDetailedList,
        setAllTokenDetailedList
    ]);
    const maxSelectShares = Math.min(constants/* RED_PACKET_MAX_SHARES */.DY, balance);
    const clearToken = (0,react.useCallback)(()=>{
        setExistTokenDetailedList(src_constants/* EMPTY_LIST */.rP);
        setAllTokenDetailedList(src_constants/* EMPTY_LIST */.rP);
        setOpenNFTConfirmDialog(false);
    }, []);
    const clearContract = (0,react.useCallback)(()=>{
        setCollection(undefined);
    }, []);
    (0,react.useEffect)(()=>{
        if (!selectOption) {
            setSelectOption(NFTSelectOption.Partial);
        }
    }, [
        tokenDetailedOwnerList,
        selectOption
    ]);
    (0,react.useEffect)(()=>{
        clearContract();
    }, [
        account
    ]);
    (0,react.useEffect)(()=>{
        clearToken();
        setSelectOption(undefined);
        setOpenSelectNFTDialog(false);
    }, [
        collection,
        account
    ]);
    (0,react.useEffect)(()=>{
        setOpenSelectNFTDialog(false);
        clearContract();
    }, [
        chainId
    ]);
    const { RED_PACKET_NFT_ADDRESS } = (0,constants_constants/* useNftRedPacketConstants */.uq)(chainId);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!balance) return t.erc721_insufficient_balance();
        if (tokenDetailedList.length === 0) return t.select_a_token();
        return '';
    }, [
        tokenDetailedList.length,
        balance,
        t,
        isGasSufficient
    ]);
    const gasValidationMessage = (0,react.useMemo)(()=>{
        if (!isGasSufficient) {
            return t.no_enough_gas_fees();
        }
        if (isGasFeeGreaterThanOneETH) return t.erc721_create_lucky_drop();
        return '';
    }, [
        isGasSufficient,
        isGasFeeGreaterThanOneETH
    ]);
    (0,react.useEffect)(()=>{
        setIsNFTRedPacketLoaded?.(balance > 0);
    }, [
        balance > 0
    ]);
    const handleClose = (0,react.useCallback)(()=>setOpenSelectNFTDialog(false), []);
    if (openSelectNFTDialog) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNftTokenDialog, {
            onClose: handleClose,
            contract: collection,
            existTokenDetailedList: tokenDetailedList,
            setExistTokenDetailedList: setExistTokenDetailedList,
            tokenDetailedOwnerList: tokenDetailedOwnerList
        });
    }
    if (openNFTConfirmDialog && collection) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RedpacketNftConfirmDialog, {
            message: message,
            contract: collection,
            tokenList: tokenDetailedList,
            onBack: handleClose,
            onClose: onClose,
            senderName: senderName,
            gasOption: gasOption
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        style: {
                            margin: '16px 0'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ERC721ContractSelectPanel, {
                            collection: collection,
                            onContractChange: setCollection,
                            balance: balance,
                            chainId: chainId
                        })
                    }),
                    collection && balance ? done ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.selectWrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: cx(classes.optionLeft, classes.option, balance === 0 ? classes.disabledSelector : null),
                                        onClick: ()=>{
                                            setSelectOption(NFTSelectOption.All);
                                            setExistTokenDetailedList(tokenDetailedOwnerList.slice(0, maxSelectShares));
                                            setAllTokenDetailedList(tokenDetailedOwnerList.slice(0, maxSelectShares));
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: cx(classes.checkIconWrapper, selectOption === NFTSelectOption.All ? classes.checked : ''),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                                    className: classes.checkIcon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                color: "textPrimary",
                                                children: balance === 0 ? 'All' : t.nft_select_all_option({
                                                    total: Math.min(constants/* RED_PACKET_MAX_SHARES */.DY, balance).toString()
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.option,
                                        onClick: ()=>setSelectOption(NFTSelectOption.Partial),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: cx(classes.checkIconWrapper, selectOption === NFTSelectOption.Partial ? classes.checked : ''),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                                    className: classes.checkIcon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                color: "textPrimary",
                                                children: t.nft_select_partially_option()
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.tokenSelectorParent,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                                    className: classes.tokenSelector,
                                    children: [
                                        tokenDetailedList.map((value, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketERC721Form_NFTCard, {
                                                    token: value,
                                                    removeToken: removeToken
                                                })
                                            }, i)),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                            onClick: ()=>setOpenSelectNFTDialog(true),
                                            className: cx(classes.tokenSelectorWrapper, classes.addWrapper),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCircleOutline, {
                                                className: classes.addIcon,
                                                onClick: ()=>void 0
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.skeleton,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                        className: classes.rectangle,
                                        height: 24,
                                        variant: "rectangular",
                                        width: 140
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                        className: classes.rectangle,
                                        height: 24,
                                        variant: "rectangular",
                                        width: 140
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                className: classes.rectangle,
                                height: 180,
                                variant: "rectangular",
                                width: "100%"
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.line,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedpacketMessagePanel, {
                            onChange: (val)=>setMessage(val),
                            message: message
                        })
                    }),
                    collection && balance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.approveAllTip,
                        children: t.nft_approve_all_tip()
                    }) : null,
                    nativeTokenDetailed && nativeTokenPrice ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        mx: 2,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectGasSettingsToolbar/* SelectGasSettingsToolbar */.M, {
                            className: classes.toolbar,
                            nativeToken: nativeTokenDetailed,
                            nativeTokenPrice: nativeTokenPrice,
                            supportMultiCurrency: !!wallet?.owner && chainId === smartPayChainId,
                            gasConfig: gasOption,
                            gasLimit: Number.parseInt(gasLimit, 10),
                            onChange: onGasOptionChange
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    expectedChainId: chainId,
                    actualPluginID: pluginID,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                        expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                        expectedChainId: chainId,
                        forceShowingWrongNetworkButton: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            expectedChainId: chainId,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC721TokenApprovedBoundary, {
                                validationMessage: validationMessage,
                                owner: account,
                                chainId: chainId,
                                collection: collection,
                                classes: {
                                    approveButton: classes.approveButton
                                },
                                operator: RED_PACKET_NFT_ADDRESS,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                    title: isGasFeeGreaterThanOneETH ? t.erc721_gas_cap({
                                        symbol: nativeTokenDetailed?.symbol || 'ETH'
                                    }) : '',
                                    arrow: true,
                                    disableInteractive: true,
                                    placement: "top",
                                    PopperProps: {
                                        disablePortal: true,
                                        placement: 'top'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        style: {
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                            style: {
                                                height: 40,
                                                padding: 0,
                                                margin: 0
                                            },
                                            size: "large",
                                            disabled: !!validationMessage || !!gasValidationMessage,
                                            fullWidth: true,
                                            onClick: ()=>setOpenNFTConfirmDialog(true),
                                            children: gasValidationMessage || t.next()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function RedPacketERC721Form_NFTCard(props) {
    const { token, removeToken } = props;
    const { classes, cx } = RedPacketERC721Form_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: cx(classes.tokenSelectorWrapper),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                url: token.metadata?.mediaURL || token.metadata?.imageURL,
                classes: {
                    fallbackImage: classes.fallbackImage,
                    root: classes.assetImgWrapper
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.nftNameWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.nftName,
                    color: "textSecondary",
                    children: (0,formatter/* formatTokenId */.Xy)(token.tokenId, 2)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.closeIconWrapperBack,
                onClick: ()=>removeToken(token),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.closeIconWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        className: classes.closeIcon
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketDialog.tsx
























const RedPacketDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { currentTab, showHistory, isDim })=>{
    // it's hard to set dynamic color, since the background color of the button is blended transparent
    const darkBackgroundColor = isDim ? '#38414b' : '#292929';
    return {
        dialogContent: {
            padding: 0,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflowX: 'hidden',
            overflowY: !showHistory && currentTab === 'tokens' ? 'hidden' : 'auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingBottom: theme.spacing(2)
        },
        arrowButton: {
            backgroundColor: theme.palette.mode === 'dark' ? darkBackgroundColor : undefined
        }
    };
});
var CreateRedPacketPageStep;
(function(CreateRedPacketPageStep) {
    CreateRedPacketPageStep["NewRedPacketPage"] = 'new';
    CreateRedPacketPageStep["ConfirmPage"] = 'confirm';
})(CreateRedPacketPageStep || (CreateRedPacketPageStep = {}));
function RedPacketDialog(props) {
    const t = useRedPacketTrans();
    const [showHistory, setShowHistory] = (0,react.useState)(false);
    const [gasOption, setGasOption] = (0,react.useState)();
    const [step, setStep] = (0,react.useState)(CreateRedPacketPageStep.NewRedPacketPage);
    const [isNFTRedPacketLoaded, setIsNFTRedPacketLoaded] = (0,react.useState)(false);
    const { account, chainId: _chainId } = (0,useContext/* useChainContext */.ql)();
    const approvalDefinition = (0,useActivatedPlugin/* useActivatedPlugin */.R)(PluginID/* PluginID */.P.RedPacket, 'any');
    const [currentTab, onChange, tabs] = (0,useTabs/* useTabs */.Y)('tokens', 'collectibles');
    const theme = (0,useTheme/* default */.Z)();
    const mode = (0,useThemeSettings/* useSiteThemeMode */.E)(theme);
    const { classes } = RedPacketDialog_useStyles({
        currentTab,
        showHistory,
        isDim: mode === 'dim'
    });
    const chainIdList = (0,react.useMemo)(()=>{
        return currentTab === tabs.tokens ? approvalDefinition?.enableRequirement.web3?.[PluginID/* NetworkPluginID */.F.PLUGIN_EVM]?.supportedChainIds ?? [] : [
            src_types/* ChainId */.a_.Mainnet,
            src_types/* ChainId */.a_.BSC,
            src_types/* ChainId */.a_.Matic
        ];
    }, [
        currentTab === tabs.tokens,
        approvalDefinition?.enableRequirement.web3
    ]);
    const chainId = chainIdList.includes(_chainId) ? _chainId : src_types/* ChainId */.a_.Mainnet;
    // #region token lucky drop
    const [settings, setSettings] = (0,react.useState)();
    // #endregion
    // #region nft lucky drop
    const [openNFTConfirmDialog, setOpenNFTConfirmDialog] = (0,react.useState)(false);
    const [openSelectNFTDialog, setOpenSelectNFTDialog] = (0,react.useState)(false);
    // #endregion
    const onClose = (0,react.useCallback)(()=>{
        setStep(CreateRedPacketPageStep.NewRedPacketPage);
        setSettings(undefined);
        props.onClose();
    }, [
        props,
        step
    ]);
    const currentIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const lastRecognized = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const linkedPersona = (0,useCurrentLinkedPersona/* useCurrentLinkedPersona */.O)();
    const senderName = lastRecognized?.identifier?.userId ?? currentIdentity?.identifier?.userId ?? linkedPersona?.nickname;
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (payload.password === '') {
            if (payload.contract_version === 1) {
                // eslint-disable-next-line no-alert
                alert('Unable to share a lucky drop without a password. But you can still withdraw the lucky drop.');
                // eslint-disable-next-line no-alert
                payload.password = prompt('Please enter the password of the lucky drop:', '') ?? '';
            } else if (payload.contract_version > 1 && payload.contract_version < 4) {
                // just sign out the password if it is lost.
                payload.password = await entry/* Web3 */.Bv.signMessage('message', (0,lib.sha3)(payload.sender.message) ?? '', {
                    account
                });
                payload.password = payload.password.slice(2);
            }
        }
        senderName && (payload.sender.name = senderName);
        openComposition(constants/* RedPacketMetaKey */.Vr, reduceUselessPayloadInfo(payload));
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryAppLuckCreate);
        modals/* ApplicationBoardModal */.G5.close();
        onClose();
    }, [
        chainId,
        senderName
    ]);
    const onBack = (0,react.useCallback)(()=>{
        if (step === CreateRedPacketPageStep.ConfirmPage) setStep(CreateRedPacketPageStep.NewRedPacketPage);
        if (step === CreateRedPacketPageStep.NewRedPacketPage) {
            onClose();
            if (props.source === PluginID/* PluginID */.P.SmartPay) {
                CrossIsolationEvents/* CrossIsolationMessages */.W.events.smartPayDialogEvent.sendToAll({
                    open: true
                });
            }
        }
    }, [
        step,
        props.source
    ]);
    const onNext = (0,react.useCallback)(()=>{
        if (step === CreateRedPacketPageStep.NewRedPacketPage) setStep(CreateRedPacketPageStep.ConfirmPage);
    }, [
        step
    ]);
    const onDialogClose = (0,react.useCallback)(()=>{
        openSelectNFTDialog ? setOpenSelectNFTDialog(false) : openNFTConfirmDialog ? setOpenNFTConfirmDialog(false) : showHistory ? setShowHistory(false) : onBack();
    }, [
        showHistory,
        openNFTConfirmDialog,
        openSelectNFTDialog,
        onBack
    ]);
    const _onChange = (0,react.useCallback)((val)=>{
        setSettings(val);
    }, []);
    const handleCreated = (0,react.useCallback)((payload)=>{
        onCreateOrSelect(payload);
        setSettings(undefined);
    }, [
        onCreateOrSelect
    ]);
    const isCreateStep = step === CreateRedPacketPageStep.NewRedPacketPage;
    const title = showHistory ? t.history() : openSelectNFTDialog ? t.nft_select_collection() : openNFTConfirmDialog ? t.confirm() : isCreateStep ? t.display_name() : t.details();
    // #region gas config
    const { data: defaultGasPrice } = (0,useGasPrice/* useGasPrice */.F)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const handleGasSettingChange = (0,react.useCallback)((gasConfig)=>{
        const editor = GasEditor/* GasEditor */.e.fromConfig(chainId, gasConfig);
        setGasOption((config)=>{
            return editor.getGasConfig({
                gasPrice: defaultGasPrice,
                maxFeePerGas: defaultGasPrice,
                maxPriorityFeePerGas: defaultGasPrice,
                ...config
            });
        });
    }, [
        chainId,
        defaultGasPrice
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            isOpenFromApplicationBoard: props.isOpenFromApplicationBoard,
            open: props.open,
            title: title,
            titleTail: step === CreateRedPacketPageStep.NewRedPacketPage && !openNFTConfirmDialog && !showHistory ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.History, {
                onClick: ()=>setShowHistory((history)=>!history)
            }) : null,
            titleTabs: step === CreateRedPacketPageStep.NewRedPacketPage && !openNFTConfirmDialog ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                variant: "base",
                onChange: onChange,
                "aria-label": "Redpacket",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.erc20_tab_title(),
                        value: tabs.tokens
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.erc721_tab_title(),
                        value: tabs.collectibles
                    })
                ]
            }) : null,
            networkTabs: step === CreateRedPacketPageStep.NewRedPacketPage && !openNFTConfirmDialog && !openSelectNFTDialog ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.abstractTabWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                    chains: chainIdList,
                    hideArrowButton: currentTab === tabs.collectibles,
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    classes: {
                        arrowButton: classes.arrowButton
                    }
                })
            }) : null,
            onClose: onDialogClose,
            isOnBack: showHistory || step !== CreateRedPacketPageStep.NewRedPacketPage,
            disableTitleBorder: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.dialogContent,
                children: [
                    step === CreateRedPacketPageStep.NewRedPacketPage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    ...showHistory ? {
                                        display: 'none'
                                    } : {},
                                    height: showHistory ? 0 : currentTab === 'collectibles' && isNFTRedPacketLoaded ? 'calc(100% + 84px)' : 'auto'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        value: tabs.tokens,
                                        style: {
                                            padding: 0,
                                            height: 474
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketERC20Form, {
                                            expectedChainId: chainId,
                                            origin: settings,
                                            onClose: onClose,
                                            onNext: onNext,
                                            onChange: _onChange,
                                            gasOption: gasOption,
                                            onGasOptionChange: handleGasSettingChange
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        value: tabs.collectibles,
                                        style: {
                                            padding: 0,
                                            height: openNFTConfirmDialog ? 564 : 474
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketERC721Form, {
                                            openSelectNFTDialog: openSelectNFTDialog,
                                            setOpenSelectNFTDialog: setOpenSelectNFTDialog,
                                            setOpenNFTConfirmDialog: setOpenNFTConfirmDialog,
                                            openNFTConfirmDialog: openNFTConfirmDialog,
                                            onClose: onClose,
                                            setIsNFTRedPacketLoaded: setIsNFTRedPacketLoaded,
                                            gasOption: gasOption,
                                            onGasOptionChange: handleGasSettingChange
                                        })
                                    })
                                ]
                            }),
                            showHistory ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketPast, {
                                tabs: tabs,
                                onSelect: onCreateOrSelect,
                                onClose: onClose
                            }) : null
                        ]
                    }) : null,
                    step === CreateRedPacketPageStep.ConfirmPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketConfirmDialog, {
                        expectedChainId: chainId,
                        onClose: onClose,
                        onBack: onBack,
                        onCreated: handleCreated,
                        settings: settings,
                        gasOption: gasOption,
                        onGasOptionChange: handleGasSettingChange
                    }) : null
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketInjection.tsx





function RedPacketInjection() {
    const [open, setOpen] = (0,react.useState)(false);
    const [source, setSource] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.redpacketDialogEvent.on(({ open, source: pluginId })=>{
            setOpen(open);
            setSource(pluginId);
        });
    }, []);
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketDialog, {
            open: true,
            onClose: ()=>setOpen(false),
            source: source
        })
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/usePostInfo.ts
var usePostInfo = __webpack_require__(51874);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js
var tinycolor = __webpack_require__(89204);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-eth-accounts@1.10.2/node_modules/web3-eth-accounts/lib/index.js
var web3_eth_accounts_lib = __webpack_require__(30699);
var web3_eth_accounts_lib_default = /*#__PURE__*/__webpack_require__.n(web3_eth_accounts_lib);
;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/signMessage.ts

function signMessage(message, privateKey) {
    const Accounts_ = (web3_eth_accounts_lib_default());
    const accounts = new Accounts_();
    return accounts.sign(message, privateKey);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(96450);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useClaimCallback.ts






function useClaimCallback(version, from, id, password, expectedChainId) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const redPacketContract = useRedPacketContract(chainId, version);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!redPacketContract || !id || !password) return;
        const config = {
            from
        };
        // note: despite the method params type of V1 and V2 is the same,
        // but it is more understandable to declare respectively
        const contractTransaction = new ContractTransaction/* ContractTransaction */.D(redPacketContract);
        const tx = version === 4 ? await contractTransaction.fillAll(redPacketContract.methods.claim(id, password, from), config) : await contractTransaction.fillAll(redPacketContract.methods.claim(id, password, from, (0,lib.sha3)(from)), config);
        return entry/* Web3 */.Bv.sendTransaction(tx, {
            chainId
        });
    }, [
        id,
        password,
        from,
        chainId,
        redPacketContract,
        version
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacket/OperationFooter.tsx









const OperationFooter_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        footer: {
            width: '100%',
            display: 'flex',
            gap: theme.spacing(2),
            justifyContent: 'center',
            '& button': {
                flexBasis: 'auto'
            },
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                flexDirection: 'column',
                gap: theme.spacing(1)
            }
        }
    };
});
function OperationFooter({ chainId, canClaim, canRefund, isClaiming, isRefunding, onShare, onClaimOrRefund }) {
    const { classes } = OperationFooter_useStyles();
    const t = useRedPacketTrans();
    const { account, chainId: currentChainId } = (0,useContext/* useChainContext */.ql)({
        chainId
    });
    const theme = (0,useTheme/* default */.Z)();
    function getObtainButton(onClick) {
        if (!canClaim && !canRefund) return null;
        if (!account) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                fullWidth: true,
                onClick: ()=>modals/* SelectProviderModal */.ge.open(),
                variant: "roundedDark",
                children: t.plugin_wallet_connect_a_wallet()
            });
        }
        if (!currentChainId) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                disabled: true,
                fullWidth: true,
                variant: "roundedDark",
                children: t.plugin_wallet_invalid_network()
            });
        }
        const isLoading = isClaiming || isRefunding;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            sx: {
                backgroundColor: theme.palette.maskColor.dark,
                width: '100%',
                color: 'white',
                '&:hover': {
                    backgroundColor: theme.palette.maskColor.dark
                }
            },
            variant: "roundedDark",
            fullWidth: true,
            loading: isLoading,
            disabled: isLoading,
            onClick: onClick,
            children: canClaim ? isClaiming ? t.claiming() : t.claim() : isRefunding ? t.refunding() : t.refund()
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        style: {
            flex: 1,
            padding: 12
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.footer,
            children: [
                canRefund ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                    fullWidth: true,
                    variant: "roundedDark",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Shared, {
                        size: 18
                    }),
                    onClick: onShare,
                    children: t.share()
                }),
                canClaim || canRefund ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    expectedChainId: chainId ?? src_types/* ChainId */.a_.Mainnet,
                    ActionButtonPromiseProps: {
                        variant: 'roundedDark'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        hideRiskWarningConfirmed: true,
                        expectedChainId: chainId ?? src_types/* ChainId */.a_.Mainnet,
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                            size: 18
                        }),
                        ActionButtonProps: {
                            variant: 'roundedDark'
                        },
                        children: getObtainButton(onClaimOrRefund)
                    })
                }) : null
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacket/index.tsx




















const RedPacket_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { outdated })=>{
    return {
        root: {
            borderRadius: theme.spacing(2),
            padding: theme.spacing(1.5, 2),
            position: 'relative',
            display: 'flex',
            backgroundColor: 'transparent',
            color: theme.palette.common.white,
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 335,
            margin: 'auto',
            marginBottom: outdated ? '12px' : 'auto',
            boxSizing: 'border-box',
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(17311), __webpack_require__.b)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: theme.spacing(1, 1.5),
                height: 202
            },
            width: 'calc(100% - 32px)'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        content: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        },
        bottomContent: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        myStatus: {
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1.8,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14,
                left: 12,
                bottom: 8
            }
        },
        from: {
            fontSize: '14px',
            color: theme.palette.common.white,
            alignSelf: 'end',
            fontWeight: 500,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14,
                right: 12,
                bottom: 8
            }
        },
        label: {
            width: 76,
            height: 27,
            display: 'flex',
            justifyContent: 'center',
            fontSize: 12,
            alignItems: 'center',
            borderRadius: theme.spacing(1),
            backgroundColor: (0,tinycolor/* default */.Z)(theme.palette.common.black).setAlpha(0.5).toString(),
            textTransform: 'capitalize',
            position: 'absolute',
            right: 12,
            top: 12
        },
        words: {
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            color: theme.palette.common.white,
            fontSize: 24,
            fontWeight: 700,
            wordBreak: 'break-all',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '60%',
            minWidth: 300,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14
            }
        },
        messageBox: {
            width: '100%'
        },
        tokenLabel: {
            width: 48,
            height: 48,
            position: 'absolute',
            top: 0,
            left: 0
        }
    };
});
function RedPacket(props) {
    const { payload } = props;
    const t = useRedPacketTrans();
    const token = payload.token;
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const payloadChainId = token?.chainId ?? entry/* ChainResolver */.iv.chainId(payload.network ?? '') ?? src_types/* ChainId */.a_.Mainnet;
    const { account } = (0,useContext/* useChainContext */.ql)({
        chainId: payloadChainId,
        account: pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? undefined : ''
    });
    // #region token detailed
    const { value: availability, computed: availabilityComputed, retry: revalidateAvailability } = useAvailabilityComputed(account ?? payload.contract_address, payload);
    // #endregion
    const { canClaim, canRefund, listOfStatus } = availabilityComputed;
    // #region remote controlled transaction dialog
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const [{ loading: isClaiming, value: claimTxHash }, claimCallback] = useClaimCallback(payload.contract_version, account, payload.rpid, payload.contract_version > 3 ? signMessage(account, payload.password).signature : payload.password, payloadChainId);
    // TODO payload.chainId is undefined on production mode
    const network = (0,useNetwork/* useNetwork */.L)(pluginID, payload.chainId || payload.token?.chainId);
    const shareText = (0,react.useMemo)(()=>{
        const isOnTwitter = Sniffings/* Sniffings */.Y.is_twitter_page;
        const isOnFacebook = Sniffings/* Sniffings */.Y.is_facebook_page;
        const shareTextOption = {
            sender: payload.sender.name,
            payload: postLink.toString(),
            network: network?.name ?? 'Mainnet',
            account: isOnTwitter ? t.twitter_account() : t.facebook_account(),
            interpolation: {
                escapeValue: false
            }
        };
        if (listOfStatus.includes(RedPacketStatus.claimed) || claimTxHash) {
            return isOnTwitter || isOnFacebook ? t.share_message_official_account(shareTextOption) : t.share_message_not_twitter(shareTextOption);
        }
        return isOnTwitter || isOnFacebook ? t.share_unclaimed_message_official_account(shareTextOption) : t.share_unclaimed_message_not_twitter(shareTextOption);
    }, [
        payload,
        postLink,
        claimTxHash,
        listOfStatus,
        t,
        network?.name
    ]);
    const [{ loading: isRefunding }, _isRefunded, refundCallback] = useRefundCallback(payload.contract_version, account, payload.rpid, payloadChainId);
    const redPacketContract = useRedPacketContract(payloadChainId, payload.contract_version);
    const checkResult = (0,react.useCallback)(async ()=>{
        const data = await redPacketContract.methods.check_availability(payload.rpid).call({
            // check availability is ok w/o account
            from: account
        });
        if ((0,number/* isZero */.Fr)(data.claimed_amount)) return;
        modals/* TransactionConfirmModal */.l$.open({
            shareText,
            amount: (0,formatBalance/* formatBalance */.a)(data.claimed_amount, token?.decimals, 2),
            token,
            tokenType: specs/* TokenType */.iv.Fungible,
            messageTextForNFT: t.claim_nft_successful({
                name: 'NFT'
            }),
            messageTextForFT: t.claim_token_successful({
                amount: (0,formatBalance/* formatBalance */.a)(data.claimed_amount, token?.decimals, 2),
                name: `$${token?.symbol}`
            }),
            title: t.lucky_drop(),
            share: context/* share */.BN
        });
    }, [
        JSON.stringify(token),
        redPacketContract,
        payload.rpid,
        account
    ]);
    const onClaimOrRefund = (0,react.useCallback)(async ()=>{
        let hash;
        if (canClaim) {
            hash = await claimCallback();
            checkResult();
        } else if (canRefund) {
            hash = await refundCallback();
        }
        if (typeof hash === 'string') {
            revalidateAvailability();
        }
    }, [
        canClaim,
        canRefund,
        claimCallback
    ]);
    const myStatus = (0,react.useMemo)(()=>{
        if (!availability) return '';
        if (token && listOfStatus.includes(RedPacketStatus.claimed)) return t.description_claimed(availability.claimed_amount ? {
            amount: (0,formatBalance/* formatBalance */.a)(availability.claimed_amount, token.decimals, 2),
            symbol: token.symbol
        } : {
            amount: '-',
            symbol: '-'
        });
        return '';
    }, [
        listOfStatus,
        t,
        token
    ]);
    const subtitle = (0,react.useMemo)(()=>{
        if (!availability || !token) return;
        if (listOfStatus.includes(RedPacketStatus.expired) && canRefund) return t.description_refund({
            balance: (0,formatBalance/* formatBalance */.a)(availability.balance, token.decimals, 2),
            symbol: token.symbol ?? '-'
        });
        if (listOfStatus.includes(RedPacketStatus.refunded)) return t.description_refunded();
        if (listOfStatus.includes(RedPacketStatus.expired)) return t.description_expired();
        if (listOfStatus.includes(RedPacketStatus.empty)) return t.description_empty();
        if (!payload.password) return t.description_broken();
        const i18nParams = {
            total: (0,formatBalance/* formatBalance */.a)(payload.total, token.decimals, 2),
            symbol: token.symbol ?? '-',
            count: payload.shares.toString() ?? '-'
        };
        return payload.shares > 1 ? t.description_failover_other(i18nParams) : t.description_failover_one(i18nParams);
    }, [
        availability,
        canRefund,
        token,
        t,
        payload,
        listOfStatus
    ]);
    const handleShare = (0,react.useCallback)(()=>{
        if (shareText) (0,context/* share */.BN)?.(shareText);
    }, [
        shareText
    ]);
    const outdated = listOfStatus.includes(RedPacketStatus.empty) || !canRefund && listOfStatus.includes(RedPacketStatus.expired);
    const { classes } = RedPacket_useStyles({
        outdated
    });
    // the red packet can fetch without account
    if (!availability || !token) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        padding: 1,
        minHeight: 148,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: t.loading()
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                component: "article",
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: new URL(/* asset import */ __webpack_require__(5482), __webpack_require__.b).toString(),
                        className: classes.tokenLabel
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.header,
                        children: /* it might be fontSize: 12 on twitter based on theme? */ listOfStatus.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.label,
                            variant: "body2",
                            children: resolveRedPacketStatus(listOfStatus)
                        }) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.messageBox,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.words,
                                    variant: "h6",
                                    children: payload.sender.message
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.bottomContent,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                className: classes.myStatus,
                                                children: subtitle
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.myStatus,
                                                variant: "body1",
                                                children: myStatus
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.from,
                                        variant: "body1",
                                        children: t.from({
                                            name: payload.sender.name || '-'
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            outdated ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(OperationFooter, {
                chainId: payloadChainId,
                canClaim: canClaim,
                canRefund: canRefund,
                isClaiming: isClaiming,
                isRefunding: isRefunding,
                onShare: handleShare,
                onClaimOrRefund: onClaimOrRefund
            })
        ]
    });
}
function resolveRedPacketStatus(listOfStatus) {
    if (listOfStatus.includes(RedPacketStatus.claimed)) return 'Claimed';
    if (listOfStatus.includes(RedPacketStatus.refunded)) return 'Refunded';
    if (listOfStatus.includes(RedPacketStatus.expired)) return 'Expired';
    if (listOfStatus.includes(RedPacketStatus.empty)) return 'Empty';
    return '';
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketInPost.tsx






function RedPacketInPost(props) {
    const { payload } = props;
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const fromUrl = (0,usePostInfo/* usePostLink */.V)();
    (0,react.useEffect)(()=>{
        if (!fromUrl) return;
        if (!payload.txid && payload.contract_version !== 1) return;
        const record = {
            id: payload.contract_version === 1 ? payload.rpid : payload.txid,
            from: fromUrl.toString(),
            password: payload.password,
            contract_version: payload.contract_version
        };
        RedPacketRPC.addRedPacket(record, chainId);
    }, [
        fromUrl,
        chainId
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket, {
        payload: payload
    });
}

// EXTERNAL MODULE: ./packages/theme/src/hooks/useDetectOverflow.ts
var useDetectOverflow = __webpack_require__(60625);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NFTFallbackImage/index.tsx
var NFTFallbackImage = __webpack_require__(85080);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/hooks/useClaimNftRedpacketCallback.ts






const EXTRA_GAS_PER_NFT = 335;
function useClaimNftRedpacketCallback(id, totalAmount, signedMsg) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const nftRedPacketContract = useNftRedPacketContract(chainId);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!nftRedPacketContract || !id || !signedMsg || !account || !totalAmount) return;
        const transaction = nftRedPacketContract.methods.claim(id, signedMsg, account);
        const tx = await new ContractTransaction/* ContractTransaction */.D(nftRedPacketContract).fillAll(transaction, {
            from: account,
            gas: (0,number/* toFixed */.FH)(await transaction.estimateGas({
                from: account
            }) + EXTRA_GAS_PER_NFT * totalAmount),
            chainId
        });
        return entry/* Web3 */.Bv.sendTransaction(tx, {
            chainId
        });
    }, [
        id,
        signedMsg,
        account,
        chainId,
        totalAmount
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketNft.tsx

















const RedPacketNft_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { claimed, outdated })=>({
        root: {
            position: 'relative',
            width: '100%'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: theme.spacing(2),
            padding: theme.spacing(1),
            background: 'transparent',
            justifyContent: 'space-between',
            position: 'relative',
            color: theme.palette.common.white,
            boxSizing: 'border-box',
            backgroundImage: claimed ? `url(${new URL(/* asset import */ __webpack_require__(137), __webpack_require__.b)})` : `url(${new URL(/* asset import */ __webpack_require__(17311), __webpack_require__.b)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'calc(100% - 32px)',
            margin: 'auto',
            marginBottom: outdated ? '12px' : 'auto',
            height: 335
        },
        remain: {
            fontSize: 12,
            fontWeight: 600,
            color: theme.palette.common.white
        },
        button: {
            backgroundColor: theme.palette.maskColor.dark,
            color: theme.palette.common.white,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.dark
            },
            margin: '0 !important'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between !important',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1)
        },
        buttonWrapper: {
            marginTop: 0,
            display: 'flex'
        },
        claimedTokenWrapper: {
            position: 'absolute',
            top: 80,
            right: 'clamp(10px, 5.6%, 30px)',
            borderRadius: 9,
            cursor: 'pointer'
        },
        tokenImageWrapper: {
            display: 'flex',
            overflow: 'hidden',
            alignItems: 'center',
            height: 126,
            width: 126,
            borderRadius: 8,
            transform: 'RedPacketTransY(6px)',
            '& > div': {
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden'
            }
        },
        claimedText: {
            fontSize: 12,
            fontWeight: 600
        },
        badge: {
            width: 76,
            height: 27,
            display: 'flex',
            color: theme.palette.common.white,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: (0,tinycolor/* default */.Z)(theme.palette.common.black).setAlpha(0.5).toString(),
            borderRadius: 8
        },
        badgeText: {
            fontSize: 12
        },
        imgWrapper: {
            maxWidth: 180
        },
        fallbackImage: {
            height: 160,
            width: 120
        },
        description: {
            background: theme.palette.maskColor.primary,
            alignSelf: 'stretch',
            borderRadius: '0 0 8px 8px'
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: 126,
            transform: 'RedPacketTransY(3px)',
            fontSize: 13,
            color: theme.palette.common.white,
            lineHeight: '36px',
            minHeight: '1em',
            textIndent: '8px'
        },
        hidden: {
            visibility: 'hidden'
        },
        tokenLabel: {
            width: 48,
            height: 48,
            position: 'absolute',
            top: 0,
            left: 0
        },
        messageBox: {
            width: '100%'
        },
        words: {
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            color: theme.palette.common.white,
            wordBreak: 'break-all',
            fontSize: 24,
            fontWeight: 700,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '60%',
            minWidth: 300,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14
            }
        },
        from: {
            fontSize: '14px',
            color: theme.palette.common.white,
            alignSelf: 'end',
            fontWeight: 500,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14,
                right: 12,
                bottom: 8
            }
        },
        fallbackImageWrapper: {
            width: '100%',
            height: 126,
            background: theme.palette.common.white
        }
    }));
function RedPacketNft({ payload }) {
    const t = useRedPacketTrans();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account } = (0,useContext/* useChainContext */.ql)(pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? {} : {
        account: ''
    });
    const { value: availability, loading, retry: retryAvailability, error: availabilityError } = useAvailabilityNftRedPacket(payload.id, account, payload.chainId);
    const [{ loading: isClaiming }, claimCallback] = useClaimNftRedpacketCallback(payload.id, availability?.totalAmount, signMessage(account, payload.privateKey).signature ?? '');
    const [showTooltip, textRef] = (0,useDetectOverflow/* useDetectOverflow */.s)();
    (0,react.useEffect)(()=>{
        retryAvailability();
    }, [
        account
    ]);
    const network = (0,useNetwork/* useNetwork */.L)(pluginID, payload.chainId);
    const outdated = !!(availability?.isClaimedAll || availability?.isCompleted || availability?.expired);
    const { classes, cx } = RedPacketNft_useStyles({
        claimed: !!availability?.isClaimed,
        outdated
    });
    // #region on share
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareText = (0,react.useMemo)(()=>{
        const isOnTwitter = Sniffings/* Sniffings */.Y.is_twitter_page;
        const isOnFacebook = Sniffings/* Sniffings */.Y.is_facebook_page;
        const options = {
            sender: payload.senderName,
            payload: postLink.toString(),
            network: network?.name || '',
            account_promote: t.account_promote({
                context: isOnTwitter ? 'twitter' : isOnFacebook ? 'facebook' : 'default'
            }),
            interpolation: {
                escapeValue: false
            }
        };
        if (availability?.isClaimed) {
            return t.nft_share_claimed_message(options);
        }
        return t.nft_share_foreshow_message(options);
    }, [
        availability?.isClaimed,
        t,
        network?.name
    ]);
    const onShare = (0,react.useCallback)(()=>{
        if (shareText) (0,context/* share */.BN)?.(shareText);
    }, [
        shareText
    ]);
    // #endregion
    const openNFTDialog = (0,react.useCallback)(()=>{
        if (!payload.chainId || !pluginID || !availability?.claimed_id || !availability?.token_address) return;
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.nonFungibleTokenDialogEvent.sendToLocal({
            open: true,
            chainId: payload.chainId,
            pluginID,
            tokenId: availability.claimed_id,
            tokenAddress: availability.token_address
        });
    }, [
        pluginID,
        payload.chainId,
        availability?.claimed_id,
        availability?.token_address
    ]);
    const { data: asset, isLoading: loadingAsset } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, payload.contractAddress, availability?.claimed_id, {
        chainId: payload.chainId
    });
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        account
    });
    const nftRedPacketContract = useNftRedPacketContract(payload.chainId);
    const checkResult = (0,react.useCallback)(async ()=>{
        if (!nftRedPacketContract) return;
        const availability = await nftRedPacketContract.methods.check_availability(payload.id).call({
            // check availability is ok w/o account
            from: account
        });
        if (availability.claimed_id === '0') return;
        const isOnTwitter = Sniffings/* Sniffings */.Y.is_twitter_page;
        const isOnFacebook = Sniffings/* Sniffings */.Y.is_facebook_page;
        const options = {
            sender: payload.senderName,
            payload: postLink.toString(),
            network: network?.name || '',
            account_promote: t.account_promote({
                context: isOnTwitter ? 'twitter' : isOnFacebook ? 'facebook' : 'default'
            }),
            interpolation: {
                escapeValue: false
            }
        };
        const shareText = t.nft_share_foreshow_message(options);
        const token = await Hub.getNonFungibleAsset(payload.contractAddress, availability.claimed_id);
        modals/* TransactionConfirmModal */.l$.open({
            shareText,
            amount: '1',
            nonFungibleTokenId: availability.claimed_id,
            nonFungibleTokenAddress: payload.contractAddress,
            tokenType: specs/* TokenType */.iv.NonFungible,
            messageTextForNFT: t.claim_nft_successful({
                name: token?.contract?.name || 'NFT'
            }),
            messageTextForFT: t.claim_token_successful({
                amount: '1',
                name: ''
            }),
            title: t.lucky_drop(),
            share: context/* share */.BN
        });
    }, [
        nftRedPacketContract,
        payload.id,
        account,
        Hub
    ]);
    const claim = (0,react.useCallback)(async ()=>{
        const hash = await claimCallback();
        await checkResult();
        if (typeof hash === 'string') {
            retryAvailability();
        }
    }, [
        claimCallback,
        retryAvailability
    ]);
    if (availabilityError) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
        message: t.go_wrong(),
        onRetry: retryAvailability
    });
    if (!availability || loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        minHeight: 148,
        iconSize: 24
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.card,
                component: "article",
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: new URL(/* asset import */ __webpack_require__(89677), __webpack_require__.b).toString(),
                        className: classes.tokenLabel
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.messageBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                            title: payload.message,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.words,
                                variant: "h6",
                                children: payload.message
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                        title: showTooltip ? `${payload.contractName} #${availability.claimed_id}` : undefined,
                        placement: "top",
                        disableInteractive: true,
                        arrow: true,
                        PopperProps: {
                            disablePortal: true
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: cx(classes.claimedTokenWrapper, !availability.isClaimed ? classes.hidden : ''),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.tokenImageWrapper,
                                    onClick: openNFTDialog,
                                    children: loadingAsset ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                                        url: asset?.metadata?.imageURL || asset?.metadata?.mediaURL,
                                        classes: {
                                            root: classes.imgWrapper,
                                            fallbackImage: classes.fallbackImage
                                        },
                                        fallbackImage: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classes.fallbackImageWrapper,
                                            children: NFTFallbackImage/* NFTFallbackImage */.t
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.description,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.name,
                                        color: "textPrimary",
                                        variant: "body2",
                                        ref: textRef,
                                        children: `${payload.contractName} #${availability.claimed_id}`
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.footer,
                        children: [
                            availability.isClaimed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.claimedText,
                                children: t.got_nft({
                                    name: payload.contractName || 'NFT'
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.remain,
                                children: t.claimed({
                                    amount: `${availability.claimedAmount}/${availability.totalAmount}`
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                className: classes.from,
                                children: t.from({
                                    name: payload.senderName || '-'
                                })
                            })
                        ]
                    }),
                    availability.isClaimed ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.badge,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.badgeText,
                            children: t.claimed({
                                amount: ''
                            })
                        })
                    }) : availability.isEnd ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.badge,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.badgeText,
                            children: availability.expired ? t.expired() : t.completed()
                        })
                    }) : null
                ]
            }),
            outdated ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketNft_OperationFooter, {
                chainId: payload.chainId,
                isClaiming: isClaiming,
                claimed: availability.isClaimed,
                onShare: onShare,
                claim: claim
            })
        ]
    });
}
function RedPacketNft_OperationFooter({ claimed, onShare, chainId, claim, isClaiming }) {
    const { classes } = RedPacketNft_useStyles({
        claimed,
        outdated: false
    });
    const t = useRedPacketTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.buttonWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    flex: 1,
                    padding: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "roundedDark",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Shared, {
                        size: 18
                    }),
                    className: classes.button,
                    fullWidth: true,
                    onClick: onShare,
                    children: t.share()
                })
            }),
            claimed ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    flex: 1,
                    padding: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    ActionButtonPromiseProps: {
                        variant: 'roundedDark'
                    },
                    expectedChainId: chainId,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        expectedChainId: chainId,
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                            size: 18
                        }),
                        classes: {
                            connectWallet: classes.button
                        },
                        ActionButtonProps: {
                            variant: 'roundedDark'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                            variant: "roundedDark",
                            loading: isClaiming,
                            disabled: isClaiming,
                            onClick: claim,
                            className: classes.button,
                            fullWidth: true,
                            children: isClaiming ? t.claiming() : t.claim()
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/RedPacketNftInPost.tsx







function RedPacketNftInPost({ payload }) {
    (0,react.useEffect)(()=>{
        RedPacketRPC.updateRedPacketNft({
            id: payload.txid,
            type: 'red-packet-nft',
            password: payload.privateKey,
            contract_version: payload.contractVersion
        });
    }, [
        payload
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        value: {
            chainId: payload.chainId
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketNft, {
                payload: payload
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/emitter.ts

function openDialog() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.redpacketDialogEvent.sendToLocal({
        open: true
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/SiteAdaptor/index.tsx

















function Render(props) {
    (0,usePluginWrapper/* usePluginWrapper */.f)(true, {
        name: props.name
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
}
const containerStyle = {
    display: 'flex',
    alignItems: 'center'
};
const site = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        if (RedPacketMetadataReader(props.message.meta).isOk()) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
            name: "Lucky Drop",
            children: renderWithRedPacketMetadata(props.message.meta, (r)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketInPost, {
                    payload: r
                }))
        });
        if (RedPacketNftMetadataReader(props.message.meta).isOk()) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
            name: "NFT Lucky Drop",
            children: renderWithRedPacketNftMetadata(props.message.meta, (r)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketNftInPost, {
                    payload: r
                }))
        });
        return null;
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* RedPacketMetaKey */.Vr,
            (_payload)=>{
                return {
                    text: /*#__PURE__*/ (0,jsx_runtime.jsx)(ERC20RedpacketBadge, {
                        message: _payload.sender.message,
                        fallback: 'A Token Lucky Drop'
                    })
                };
            }
        ],
        [
            constants/* RedPacketNftMetaKey */.HA,
            (_payload)=>{
                return {
                    text: /*#__PURE__*/ (0,jsx_runtime.jsx)(ERC20RedpacketBadge, {
                        message: _payload.message,
                        fallback: 'An NFT Lucky Drop'
                    })
                };
            }
        ]
    ]),
    GlobalInjection: RedPacketInjection,
    CompositionDialogEntry: {
        dialog: RedPacketDialog,
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RedPacket, {
                    size: 16
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    ns: PluginID/* PluginID */.P.RedPacket,
                    i18nKey: "name"
                })
            ]
        })
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RedPacket, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.RedPacket,
                i18nKey: "name"
            });
            const recommendFeature = {
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    ns: PluginID/* PluginID */.P.RedPacket,
                    i18nKey: "recommend_feature_description"
                }),
                backgroundGradient: 'linear-gradient(180.54deg, #FF9A9E 0.71%, #FECFEF 98.79%, #FECFEF 99.78%)',
                isFirst: true
            };
            return {
                ApplicationEntryID: base/* base */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                        title: name,
                        recommendFeature: recommendFeature,
                        ...EntryComponentProps,
                        icon: icon,
                        onClick: ()=>{
                            EntryComponentProps.onClick ? EntryComponentProps.onClick?.(openDialog) : openDialog();
                            providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryAppLuckOpen);
                        }
                    });
                },
                appBoardSortingDefaultPriority: 1,
                marketListSortingPriority: 1,
                icon,
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    ns: PluginID/* PluginID */.P.RedPacket,
                    i18nKey: "description"
                }),
                name,
                tutorialLink: 'https://realmasknetwork.notion.site/0a71fd421aae4563bd07caa3e2129e5b',
                category: 'dapp',
                recommendFeature
            };
        })()
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RedPacket, {
            size: 24,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(240, 51, 51, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(249, 55, 55, 0.2) 100%), #FFFFFF'
    }
};
function ERC20RedpacketBadge(props) {
    const { message, fallback } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RedPacket, {
                size: 20
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: "12px",
                lineHeight: "16px",
                marginLeft: "8px",
                maxWidth: "450px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: message || fallback
            })
        ]
    });
}
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 14414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getOrUpdateLocalImplementationHMR)
/* harmony export */ });
const cache = new WeakMap();
/**
 * This function provides a localImplementation that has HMR support.
 * To update, call this function with the SAME key object.
 * @param impl The implementation. Can be an async function.
 * @param key The reference object that must be the same if you're updating.
 */ async function getOrUpdateLocalImplementationHMR(impl, key) {
    if (true) return impl();
    const result = await impl();
    if (!cache.has(key)) cache.set(key, Object.create(null));
    const localImpl = cache.get(key);
    Object.setPrototypeOf(localImpl, result);
    return localImpl;
}


/***/ }),

/***/ 19628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenSpenders.ts
var useFungibleTokenSpenders = __webpack_require__(54165);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(13414);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/HelpOutline.js


/* harmony default export */ const HelpOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
}), 'HelpOutline'));
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        icon: {},
        button: {
            whiteSpace: 'nowrap',
            // increase selector priority over button's
            [`.${refs.icon}`]: {
                width: 18,
                height: 18,
                fontSize: 10
            }
        },
        helpIcon: {
            width: 18,
            height: 18
        }
    }));
function EthereumERC20TokenApprovedBoundary(props) {
    const { children = null, amount, balance, spender, token, infiniteUnlockContent, contractName, showHelperToken = true, failedContent, callback } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: token?.chainId
    });
    const { data: tokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address, {
        chainId
    });
    const { data: spenders, isLoading: spendersLoading, isError, refetch } = (0,useFungibleTokenSpenders/* useFungibleTokenSpenders */.D)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    const approveAmount = balance || tokenBalance || amount;
    const [{ type: approveStateType, allowance }, transactionState, approveCallback] = (0,useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S)(token?.address ?? '', approveAmount, spender ?? '', ()=>{
        callback?.();
        refetch();
    }, token?.chainId);
    const approved = (0,react.useMemo)(()=>{
        if ((0,number/* isGte */.sK)(allowance, amount)) return true;
        if (!token?.address || !spenders?.length) return false;
        return spenders.some((x)=>{
            return (0,isSameAddress/* isSameAddress */.W)(x.tokenInfo.address, token.address) && (0,isSameAddress/* isSameAddress */.W)(x.address, spender) && (0,number/* isGte */.sK)((0,number/* rightShift */.pu)(x.amount || 0, x.tokenInfo.decimals || token.decimals), amount);
        });
    }, [
        allowance,
        amount,
        spenders,
        token?.address,
        token?.decimals,
        spender
    ]);
    const loading = spendersLoading || approveStateType === useERC20TokenApproveCallback/* ApproveStateType */.i.UPDATING || transactionState.loadingApprove || transactionState.loading;
    const onApprove = (0,react.useCallback)(async ()=>{
        if (approved || loading) return;
        await approveCallback(true);
    }, [
        approved,
        loading,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    if (isError) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>refetch(),
        ...props.ActionButtonProps,
        children: failedContent ?? t.wallet_load_retry({
            symbol: token.symbol ?? token.name ?? 'Token'
        })
    });
    if (loading || !approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        loading: loading,
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            className: classes.icon,
            address: token.address,
            chainId: token.chainId,
            name: token.name,
            disableDefaultIcon: true
        }),
        endIcon: showHelperToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: t.plugin_wallet_token_infinite_unlock_tips({
                provider: contractName ?? '',
                symbol: token.symbol
            }),
            placement: "top",
            arrow: true,
            leaveDelay: 2000,
            disableInteractive: true,
            disableFocusListener: true,
            disableTouchListener: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HelpOutline, {
                className: classes.helpIcon
            })
        }) : null,
        onClick: onApprove,
        ...props.ActionButtonProps,
        children: infiniteUnlockContent ?? t.plugin_wallet_token_infinite_unlock({
            symbol: token.symbol
        })
    });
    if (approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    (0,esm/* unreachable */.t1)(approved);
}


/***/ }),

/***/ 85080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 24981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ WalletConnectedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(5480);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useRiskWarningApproved.ts



function useRiskWarningApproved(pluginID) {
    const { RiskWarning } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,use_subscription.useSubscription)(RiskWarning?.approved ?? Subscriptions/* FALSE */.Dv);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    button: {
        margin: 0
    }
});
function WalletConnectedBoundary(props) {
    const { children = null, offChain = false, hideRiskWarningConfirmed = false, expectedChainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = useStyles(undefined, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId: chainIdValid } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)(undefined, {
        chainId: chainIdValid
    });
    const approved = useRiskWarningApproved();
    const buttonClass = cx(classes.button, classes.connectWallet);
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonProps,
        children: t.plugin_wallet_connect_a_wallet()
    });
    if (!approved && !hideRiskWarningConfirmed && pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            modals/* WalletRiskWarningModal */.L5.open({
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t.plugin_wallet_confirm_risk_warning()
    });
    if (!(wallet?.owner && chainIdValid === smartPayChainId) && (0,number/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: nativeTokenBalance.loading ? t.plugin_wallet_update_gas_fee() : t.plugin_wallet_no_gas_fee()
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t.plugin_wallet_invalid_network()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 50538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useCurrentLinkedPersona)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81178);
/* harmony import */ var _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49588);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);



function useCurrentLinkedPersona() {
    const myPersonas = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .useAllPersonas */ .T)();
    const id = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__/* .currentPersona */ ._c);
    return myPersonas?.find((x)=>x.identifier.rawPublicKey.toLowerCase() === id?.rawPublicKey.toLowerCase());
}


/***/ }),

/***/ 23478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ MaskTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17711);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30911);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76550);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99979);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66584);
/* harmony import */ var _UIHelper_makeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23935);







const useStyles = (0,_UIHelper_makeStyles_js__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        label: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder'
        },
        required: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder',
            color: (0,_CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .n)(theme).redMain,
            paddingLeft: theme.spacing(0.5)
        },
        field: {
            width: '100%',
            [`& > .${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.root}`]: {
                paddingTop: theme.spacing(1),
                borderRadius: '2px',
                fontSize: 14,
                lineHeight: '16px'
            },
            '& input[type=number]': {
                MozAppearance: 'textfield',
                WebkitAppearance: 'none'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                WebkitAppearance: 'none'
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none'
            },
            '& input::-webkit-input-placeholder': {
                color: theme.palette.maskColor.third
            },
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.focused}`]: {
                background: 'transparent'
            }
        },
        input: {
            padding: theme.spacing(1),
            background: theme.palette.maskColor.input,
            fontSize: 13,
            lineHeight: '16px',
            borderRadius: 6,
            border: '1px solid transparent',
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.error}`]: {
                boxShadow: `0 0 0 ${theme.spacing(0.5)} ${_CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.redMain.alpha(0.2)}`,
                borderColor: _CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.redMain.alpha(0.8)
            },
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.focused}`]: {
                borderColor: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.5) : 'transparent'
            }
        },
        inputDisabled: {
            opacity: 0.5,
            color: 'rgba(255, 255, 255, 0.4)'
        },
        inputFocused: {
            background: 'transparent',
            ..._masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? {
                outline: `2px solid ${(0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.2)}`,
                borderColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.5)
            } : {
                boxShadow: `0 0 0 2px ${theme.palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
            }
        }
    }));
const MaskTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { label, sx, required = false, className, wrapperProps, helperText, ...rest } = props;
    const InputProps = props.InputProps ?? {};
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        sx: sx,
        ...wrapperProps,
        children: [
            label && typeof label === 'string' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                sx: {
                    mb: 1
                },
                variant: "body2",
                className: classes.label,
                children: [
                    label,
                    required ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        className: classes.required,
                        component: "span",
                        children: "*"
                    }) : null
                ]
            }) : null,
            label && typeof label !== 'string' ? label : null,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ref: ref,
                ...rest,
                classes: {
                    root: classes.field
                },
                variant: "standard",
                required: required,
                helperText: helperText,
                InputProps: {
                    disableUnderline: true,
                    classes: {
                        disabled: classes.inputDisabled,
                        focused: classes.inputFocused,
                        ...InputProps.classes
                    },
                    ...InputProps,
                    className: cx(classes.input, InputProps?.className)
                }
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                className: classes.field,
                ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(InputProps, 'disableUnderline'),
                ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(rest, 'margin', 'onKeyDown', 'onKeyUp', 'InputProps', 'inputProps', 'FormHelperTextProps')
            })
        ]
    });
});
MaskTextField.displayName = 'MaskTextField';


/***/ }),

/***/ 60625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useDetectOverflow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useDetectOverflow() {
    const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
        if (node) setOverflow(node.offsetWidth !== node.scrollWidth);
    }, []);
    return [
        overflow,
        ref
    ];
}


/***/ }),

/***/ 33845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   mC: () => (/* binding */ createRenderWithMetadata),
/* harmony export */   r1: () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, renderWithMetadataUntyped */
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42582);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35268);
}



const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key);
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (!meta.has(key)) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.isErr()) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.error);
            return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
        }
    }
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err)(validator.getLastErrors());
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.isOk()) return render(message.value);
        return null;
    };
}
let immer_setup = false;
function editTypedMessageMeta(typedMessage, edit) {
    if (!immer_setup) {
        (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
        immer_setup = true;
    }
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .produce */ .Uy)(typedMessage, (e)=>{
        if (!e.meta) e.meta = new Map();
        edit(e.meta);
        if (e.meta.size === 0) e.meta = undefined;
    });
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.isOk()) return render(message.value);
    return null;
}


/***/ }),

/***/ 75607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 54165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useFungibleTokenSpenders)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);



function useFungibleTokenSpenders(pluginID, options) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'fungible-tokens',
            'spenders',
            chainId,
            account
        ],
        enabled: true,
        queryFn: async ()=>Hub.getFungibleTokenSpenders(chainId, account)
    });
}


/***/ }),

/***/ 26896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNonFungibleCollections)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67830);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38645);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNonFungibleCollections(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'non-fungible-collections',
            pluginID,
            account,
            options
        ],
        enabled: !!account,
        queryFn: async ()=>{
            if (!account) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .asyncIteratorToArray */ .S)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .pageableToIterator */ .T1)(async (indicator)=>{
                return Hub.getNonFungibleCollectionsByOwner(account, {
                    indicator,
                    size: 50,
                    networkPluginId: pluginID,
                    ...options
                });
            }));
        }
    });
}


/***/ }),

/***/ 95685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useContract)
/* harmony export */ });
/* unused harmony export useContracts */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95739);




/**
 * Create a contract which will forward its all transactions to the
 * EthereumService in the background page and decode the result of calls automatically
 * @param address
 * @param ABI
 * @param chainId
 */ function useContract(chainId, address = '', ABI = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .createContract */ .O)(_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.getWeb3({
            chainId
        }), address, ABI), [
        address,
        ABI
    ]);
}
/**
 * Create many contracts with same ABI
 * @param listOfAddress
 * @param ABI
 * @param chainId
 */ function useContracts(chainId, listOfAddress = EMPTY_LIST, ABI = EMPTY_LIST) {
    return useMemo(()=>listOfAddress.map((address)=>createContract(Web3.getWeb3({
                chainId
            }), address, ABI)).filter(Boolean), [
        JSON.stringify(listOfAddress),
        ABI
    ]);
}


/***/ }),

/***/ 43389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useERC721ContractSetApproveForAllCallback)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82897);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);



/**
 * @param contractAddress NFT contract Address.
 * @param operator Address to add to the set of authorized operators.
 * @param approved True if the operator is approved, false to revoke approval.
 */ function useERC721ContractSetApproveForAllCallback(contractAddress, operator, approved, callback, _chainId) {
    const { account } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        chainId: _chainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!contractAddress || !operator) return;
        const hash = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3 */ .Bv.approveAllNonFungibleTokens(contractAddress, operator, approved, undefined, {
            chainId: _chainId
        });
        const receipt = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3 */ .Bv.confirmTransaction(hash, {
            chainId: _chainId,
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (receipt) callback?.();
    }, [
        account,
        approved,
        contractAddress,
        operator
    ]);
}


/***/ }),

/***/ 84553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useGasConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49113);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98705);



function useGasConfig(chainId) {
    const [gasConfig, setGasConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { data: gasOptions } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useGasOptions */ .o)();
    const editor = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .GasEditor */ .e.fromGasOptions(chainId, gasOptions);
    return {
        gasPrice: editor.getGasPrice(),
        gasConfig: gasConfig || editor.getGasConfig(),
        setGasConfig
    };
}


/***/ }),

/***/ 44747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ decodeEvents)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84976);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abiCoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);


function decodeEvents(abis, logs) {
    // the topic0 for identifying which abi to be used for decoding the event
    const listOfTopic0 = abis.map((abi)=>(0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.keccak256)(`${abi.name}(${abi.inputs?.map((x)=>x.type).join(',')})`));
    // decode events
    const events = logs.map((log)=>{
        const idx = listOfTopic0.indexOf(log.topics[0]);
        if (idx === -1) return;
        const abi = abis[idx];
        const inputs = abi?.inputs ?? [];
        return {
            // more: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html?highlight=decodeLog#decodelog
            returnValues: _abiCoder_js__WEBPACK_IMPORTED_MODULE_1__/* .abiCoder */ .r.decodeLog(inputs, log.data, abi.anonymous ? log.topics : log.topics.slice(1)),
            raw: {
                data: log.data,
                topics: log.topics
            },
            event: abi.name,
            signature: listOfTopic0[idx],
            ...log
        };
    });
    return events.reduce((accumulate, event)=>{
        if (event) accumulate[event.event] = event;
        return accumulate;
    }, {});
}


/***/ }),

/***/ 93573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check'));

/***/ }),

/***/ 17311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0d368a67d09c11ce176b.png";

/***/ }),

/***/ 4926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b68c952c4aa8ca96564a.png";

/***/ }),

/***/ 137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/091b9f4a80fa0aacaea5.png";

/***/ }),

/***/ 89677:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/127cde17255744ecba99.png";

/***/ }),

/***/ 5482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5c51ca2a93d68cf6b19b.png";

/***/ })

}]);
//# sourceMappingURL=chunk.9720.js.map