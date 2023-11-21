(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2570],{

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

/***/ 51874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 56142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 10388:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/plugins/MaskBox/src/base.ts + 12 modules
var base = __webpack_require__(78355);
// EXTERNAL MODULE: ./node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
var color = __webpack_require__(71623);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ./node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(54225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Components_Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/web3-hooks/evm/src/useTransactionCallback.ts



function useTransactionCallback(config, method) {
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!config || !method) return;
        const gasExpectedConfig = {
            ...config
        };
        try {
            const estimatedGas = await method.estimateGas((0,omit/* default */.Z)(config, 'gas'));
            if (!gasExpectedConfig.gas && estimatedGas) {
                gasExpectedConfig.gas = estimatedGas;
            }
        } catch (error) {
            await method.call(config);
        }
        return new Promise(async (resolve, reject)=>{
            method.send(gasExpectedConfig).once(types/* TransactionEventType */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }).once(types/* TransactionEventType */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        config,
        method
    ]);
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(45172);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/fromUnixTime/index.js
var fromUnixTime = __webpack_require__(75483);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(18351);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(47494);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(61918);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/abiCoder.ts
var abiCoder = __webpack_require__(1853);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/type.ts
var BoxState;
(function(BoxState) {
    BoxState[BoxState["UNKNOWN"] = 0] = "UNKNOWN";
    BoxState[BoxState["NOT_READY"] = 1] = "NOT_READY";
    BoxState[BoxState["READY"] = 2] = "READY";
    BoxState[BoxState["EXPIRED"] = 3] = "EXPIRED";
    BoxState[BoxState[/** sold all tokens out */ "SOLD_OUT"] = 4] = "SOLD_OUT";
    BoxState[BoxState[/** drawed all personal limited tokens */ "DRAWED_OUT"] = 5] = "DRAWED_OUT";
    BoxState[BoxState[/** canceled */ "CANCELED"] = 6] = "CANCELED";
    BoxState[BoxState[/** error occur */ "ERROR"] = 7] = "ERROR";
    BoxState[BoxState[/** 404 */ "NOT_FOUND"] = 8] = "NOT_FOUND";
    BoxState[BoxState[/** leaf not found */ "NOT_IN_WHITELIST"] = 9] = "NOT_IN_WHITELIST";
    BoxState[BoxState[/** insufficient holder token */ "INSUFFICIENT_HOLDER_TOKEN"] = 10] = "INSUFFICIENT_HOLDER_TOKEN";
    BoxState[BoxState[/** not qualified */ "NOT_QUALIFIED"] = 11] = "NOT_QUALIFIED";
})(BoxState || (BoxState = {}));
var MediaType;
(function(MediaType) {
    MediaType["Audio"] = 'audio';
    MediaType["Image"] = 'image';
    MediaType["Video"] = 'video';
    MediaType["Unknown"] = 'unknown';
})(MediaType || (MediaType = {}));

// EXTERNAL MODULE: ./packages/web3-contracts/abis/MaskBox.json
var MaskBox = __webpack_require__(12244);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useContract.ts
var useContract = __webpack_require__(95685);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxContract.ts




function useMaskBoxContract() {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { MASK_BOX_CONTRACT_ADDRESS } = (0,constants/* useMaskBoxConstants */.kt)(chainId);
    return (0,useContract/* useContract */.c)(chainId, MASK_BOX_CONTRACT_ADDRESS, MaskBox);
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxInfo.ts


function useMaskBoxInfo(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        const info = await maskBoxContract.methods.getBoxInfo(id).call();
        return info;
    }, [
        id,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ./packages/plugins/MaskBox/src/apis/merkleProof.ts
var merkleProof = __webpack_require__(70918);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMerkleProof.ts
/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];



function useMerkelProof(root) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!root) return;
        const leaf = Buffer.from((account.replace(/0x/, '').match(/.{2}/g) ?? []).map((x)=>Number.parseInt(x, 16))).toString('base64');
        return (0,merkleProof/* getMerkleProof */.g)(leaf, root);
    }, [
        account,
        root
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxStatus.ts


function useMaskBoxStatus(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        return maskBoxContract.methods.getBoxStatus(id).call();
    }, [
        id,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var lodash_es_range = __webpack_require__(81951);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxCreationSuccessEvent.ts





// dynamically set the block range window size
const FRAGMENT_SIZE = 3000;
const MAX_PAGE_SIZE = 10;
function useMaskBoxCreationSuccessEvent(creatorAddress, tokenAddress, boxId) {
    const maskBoxContract = useMaskBoxContract();
    const { MASK_BOX_CONTRACT_FROM_BLOCK } = (0,constants/* useMaskBoxConstants */.kt)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        const getPastEvents = (fromBlock, toBlock)=>{
            return maskBoxContract.getPastEvents('CreationSuccess', {
                filter: {
                    creator: creatorAddress,
                    nft_address: tokenAddress,
                    box_id: boxId
                },
                fromBlock,
                toBlock
            });
        };
        const blockNumber = await entry/* Web3 */.Bv.getBlockNumber();
        const range = blockNumber - (MASK_BOX_CONTRACT_FROM_BLOCK ?? Math.max(0, blockNumber - FRAGMENT_SIZE));
        const size = Math.min(MAX_PAGE_SIZE, Math.ceil(range / FRAGMENT_SIZE));
        const allSettled = await Promise.allSettled((0,lodash_es_range/* default */.Z)(size).map((index)=>getPastEvents(blockNumber - FRAGMENT_SIZE * (index + 1), blockNumber - FRAGMENT_SIZE * index - 1)));
        const events = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []);
        const filtered = events.filter((evt)=>evt.returnValues.box_id === boxId);
        return (0,head/* default */.Z)(filtered);
    }, [
        boxId,
        creatorAddress,
        tokenAddress,
        maskBoxContract,
        MASK_BOX_CONTRACT_FROM_BLOCK
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxTokensForSale.ts


function useMaskBoxTokensForSale(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return [];
        return maskBoxContract.methods.getNftListForSale(id, 0, 100).call();
    }, [
        id,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxPurchasedTokens.ts



function useMaskBoxPurchasedTokens(id, customer) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return src_constants/* EMPTY_LIST */.rP;
        return maskBoxContract.methods.getPurchasedNft(id, customer).call();
    }, [
        id,
        customer,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/intervalToDuration/index.js
var intervalToDuration = __webpack_require__(78723);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDuration/index.js
var formatDuration = __webpack_require__(42464);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/helpers/formatCountdown.ts

function formatCountdown(from, to) {
    const duration = (0,intervalToDuration/* default */.Z)({
        start: from,
        end: to
    });
    return (0,formatDuration/* default */.Z)(duration);
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useOpenBoxTransaction.ts





function useOpenBoxTransaction(boxId, amount, paymentTokenIndex, paymentTokenPrice, paymentTokenDetailed, proof, overrides) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const maskBoxContract = useMaskBoxContract();
    return (0,react.useMemo)(()=>{
        if (!boxId || amount <= 0 || !maskBoxContract) return;
        return {
            config: {
                ...overrides,
                from: account,
                value: paymentTokenDetailed?.schema === types/* SchemaType */.XQ.Native ? (0,number/* multipliedBy */.$q)(paymentTokenPrice, amount).toFixed() : undefined
            },
            method: maskBoxContract.methods.openBox(boxId, amount, paymentTokenIndex, proof ?? '0x00')
        };
    }, [
        account,
        amount,
        boxId,
        maskBoxContract,
        paymentTokenIndex,
        paymentTokenPrice,
        paymentTokenDetailed,
        proof,
        overrides
    ]);
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/rpc.ts
var rpc = __webpack_require__(56142);
// EXTERNAL MODULE: ./packages/plugins/MaskBox/src/constants.ts
var MaskBox_src_constants = __webpack_require__(60330);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/messages.ts


const MaskBoxRPC = (0,rpc/* getPluginRPC */.x8)(MaskBox_src_constants/* PLUGIN_ID */.U);

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxMetadata.ts



function useMaskBoxMetadata(boxId, creator) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!boxId || !creator || !(0,address/* isValidAddress */.At)(creator)) return;
        return MaskBoxRPC.getMaskBoxMetadata(boxId, creator);
    }, [
        creator
    ]);
}

;// CONCATENATED MODULE: ./packages/web3-contracts/abis/MaskBoxQualification.json
const MaskBoxQualification_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"is_qualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"error_msg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useMaskBoxQualificationContract.ts


function useMaskBoxQualificationContract(chainId, address) {
    return (0,useContract/* useContract */.c)(chainId, address, MaskBoxQualification_namespaceObject);
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useQualification.ts



function useQualification(address, account, proof) {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const qualificationContract = useMaskBoxQualificationContract(chainId, address);
    const { value: qualification = {
        qualified: false,
        error_msg: ''
    } } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!qualificationContract || !account) return null;
        return qualificationContract.methods.is_qualified(account, proof ?? '0x00').call({
            from: account
        });
    }, [
        account,
        qualificationContract,
        proof
    ]);
    return qualification;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokens.ts
var useFungibleTokens = __webpack_require__(49616);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleTokenContract.ts
var useNonFungibleTokenContract = __webpack_require__(34425);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/hooks/useContext.ts























function useContext_useContext(initialState) {
    const now = new Date();
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { MASK_BOX_CONTRACT_ADDRESS } = (0,constants/* useMaskBoxConstants */.kt)();
    const [boxId, setBoxId] = (0,react.useState)(initialState?.boxId ?? '');
    const rootHash = initialState?.hashRoot || '';
    const [paymentTokenAddress, setPaymentTokenAddress] = (0,react.useState)('');
    // #region the box info
    const { value: maskBoxInfo = null, error: errorMaskBoxInfo, loading: loadingMaskBoxInfo, retry: retryMaskBoxInfo } = useMaskBoxInfo(boxId);
    const { value: maskBoxStatus = null, error: errorMaskBoxStatus, loading: loadingMaskBoxStatus, retry: retryMaskBoxStatus } = useMaskBoxStatus(boxId);
    const { value: maskBoxCreationSuccessEvent = null, retry: retryMaskBoxCreationSuccessEvent } = useMaskBoxCreationSuccessEvent(maskBoxInfo?.creator ?? '', maskBoxInfo?.nft_address ?? '', boxId);
    const { value: paymentTokens = src_constants/* EMPTY_LIST */.rP } = (0,useFungibleTokens/* useFungibleTokens */.n)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, maskBoxStatus?.payment?.map(([address])=>address) ?? []);
    const { value: allTokens = src_constants/* EMPTY_LIST */.rP, retry: retryMaskBoxTokensForSale } = useMaskBoxTokensForSale(boxId);
    const { value: purchasedTokens = src_constants/* EMPTY_LIST */.rP, retry: retryMaskBoxPurchasedTokens } = useMaskBoxPurchasedTokens(boxId, account);
    const { value: boxInfo = null, error: errorBoxInfo, loading: loadingBoxInfo, retry: retryBoxInfo } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxInfo || !maskBoxStatus || !maskBoxInfo?.creator || (0,address/* isZeroAddress */.uO)(maskBoxInfo?.creator)) return null;
        const personalLimit = Number.parseInt(maskBoxInfo.personal_limit, 10);
        const remaining = Number.parseInt(maskBoxStatus.remaining, 10);
        // the current balance of the creator's account
        const total = Number.parseInt(maskBoxStatus.total, 10);
        // the total amount of tokens in the box
        const totalComputed = total && remaining && remaining > total ? remaining : total;
        const sold = Math.max(0, totalComputed - remaining);
        const personalRemaining = Math.max(0, personalLimit - purchasedTokens.length);
        const startAt = Number.parseInt(maskBoxCreationSuccessEvent?.returnValues.start_time || '0', 10);
        const endAt = Number.parseInt(maskBoxCreationSuccessEvent?.returnValues.end_time || '0', 10);
        const info = {
            boxId,
            creator: maskBoxInfo.creator,
            name: maskBoxInfo.name,
            sellAll: maskBoxCreationSuccessEvent?.returnValues.sell_all ?? false,
            personalLimit,
            personalRemaining,
            remaining,
            availableAmount: Math.min(personalRemaining, remaining),
            startAt: startAt === 0 ? (0,subDays/* default */.Z)(new Date(), 1) : (0,fromUnixTime/* default */.Z)(startAt),
            endAt: endAt === 0 ? (0,addDays/* default */.Z)(new Date(), 1) : (0,fromUnixTime/* default */.Z)(endAt),
            started: maskBoxStatus.started,
            total: totalComputed,
            sold,
            canceled: maskBoxStatus.canceled,
            tokenIds: allTokens,
            tokenIdsPurchased: purchasedTokens,
            payments: paymentTokens.map((token, i)=>{
                return {
                    token,
                    price: maskBoxStatus.payment[i][1],
                    receivableAmount: maskBoxStatus.payment[i][2]
                };
            }),
            tokenAddress: maskBoxInfo.nft_address,
            heroImageURL: '',
            qualificationAddress: maskBoxInfo.qualification,
            holderTokenAddress: maskBoxInfo.holder_token_addr,
            holderMinTokenAmount: maskBoxInfo.holder_min_token_amount
        };
        return info;
    }, [
        allTokens,
        purchasedTokens,
        paymentTokens,
        maskBoxInfo,
        maskBoxStatus,
        maskBoxCreationSuccessEvent
    ]);
    // #endregion
    // #region qualification
    const { value, error: errorProof, loading: loadingProof } = useMerkelProof(rootHash);
    const proofBytes = value?.proof ? abiCoder/* abiCoder */.r.encodeParameters([
        'bytes32[]'
    ], [
        value?.proof?.map((p)=>`0x${p}`) ?? []
    ]) : undefined;
    const qualification = useQualification(boxInfo?.qualificationAddress, account, value?.proof ? abiCoder/* abiCoder */.r.encodeParameters([
        'bytes',
        'bytes32'
    ], [
        proofBytes,
        rootHash
    ]) : undefined);
    // not in whitelist
    const notInWhiteList = value?.message === 'leaf not found';
    // at least hold token amount
    const { data: holderToken } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, boxInfo?.holderTokenAddress);
    const { data: holderTokenBalance = '0' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, holderToken?.address);
    const holderMinTokenAmountBN = new bignumber/* BigNumber */.O(boxInfo?.holderMinTokenAmount ?? 0);
    const insufficientHolderToken = (0,number/* isGreaterThan */.T1)(holderMinTokenAmountBN, 0) && !holderMinTokenAmountBN.lte(holderTokenBalance);
    // #endregion
    const boxState = (0,react.useMemo)(()=>{
        if (notInWhiteList) {
            return BoxState.NOT_IN_WHITELIST;
        }
        if (insufficientHolderToken) return BoxState.INSUFFICIENT_HOLDER_TOKEN;
        if (qualification?.error_msg) return BoxState.NOT_QUALIFIED;
        if (errorMaskBoxInfo || errorMaskBoxStatus || errorBoxInfo || (rootHash ? errorProof : false)) return BoxState.ERROR;
        if (loadingMaskBoxInfo || loadingMaskBoxStatus || loadingBoxInfo || (rootHash ? loadingProof : false)) {
            if (!maskBoxInfo && !boxInfo) return BoxState.UNKNOWN;
        }
        if (maskBoxInfo && !boxInfo) return BoxState.UNKNOWN;
        if (!maskBoxInfo || !maskBoxStatus || !boxInfo) return BoxState.NOT_FOUND;
        if (maskBoxStatus.canceled) return BoxState.CANCELED;
        if ((0,number/* isGreaterThanOrEqualTo */.KH)(boxInfo.tokenIdsPurchased.length, boxInfo.personalLimit)) return BoxState.DRAWED_OUT;
        if ((0,number/* isLessThanOrEqualTo */.PW)(boxInfo.remaining, 0)) return BoxState.SOLD_OUT;
        if (boxInfo.startAt > now || !boxInfo.started) return BoxState.NOT_READY;
        if (boxInfo.endAt < now || maskBoxStatus?.expired) return BoxState.EXPIRED;
        return BoxState.READY;
    }, [
        boxInfo,
        loadingBoxInfo,
        errorBoxInfo,
        maskBoxInfo,
        loadingMaskBoxInfo,
        errorMaskBoxInfo,
        qualification,
        loadingProof,
        errorProof,
        rootHash,
        notInWhiteList,
        insufficientHolderToken
    ]);
    const boxStateMessage = (0,react.useMemo)(()=>{
        switch(boxState){
            case BoxState.UNKNOWN:
                return 'Loading...';
            case BoxState.CANCELED:
                return 'Canceled';
            case BoxState.READY:
                return 'Draw';
            case BoxState.EXPIRED:
                return 'Ended';
            case BoxState.NOT_READY:
                const nowAt = now.getTime();
                const startAt = boxInfo?.startAt.getTime() ?? 0;
                if (startAt <= nowAt) return 'Syncing status...';
                const countdown = formatCountdown(startAt, nowAt);
                return countdown ? `Start sale in ${countdown}` : 'Loading...';
            case BoxState.SOLD_OUT:
                return 'Sold Out';
            case BoxState.NOT_IN_WHITELIST:
                return 'You are not in the whitelist.';
            case BoxState.INSUFFICIENT_HOLDER_TOKEN:
                const { symbol, decimals } = holderToken ?? {};
                const tokenPrice = `${(0,formatBalance/* formatBalance */.a)(boxInfo?.holderMinTokenAmount, decimals)} $${symbol}`;
                return `You must hold at least ${tokenPrice}.`;
            case BoxState.NOT_QUALIFIED:
                return qualification?.error_msg ?? 'Not qualified.';
            case BoxState.DRAWED_OUT:
                return 'Purchase limit exceeded.';
            case BoxState.ERROR:
                return 'Something went wrong.';
            case BoxState.NOT_FOUND:
                return 'Failed to load box info.';
            default:
                (0,esm/* unreachable */.t1)(boxState);
        }
    }, [
        holderToken,
        boxState,
        boxInfo?.startAt,
        qualification
    ]);
    (0,react.useEffect)(()=>{
        if (!boxInfo || boxInfo.started) return;
        if (boxInfo.startAt < now) {
            retryMaskBoxStatus();
        }
    }, [
        boxInfo
    ]);
    // #region the box metadata
    const { value: boxMetadata, retry: retryBoxMetadata } = useMaskBoxMetadata(boxId, boxInfo?.creator ?? '');
    // #endregion
    // #region the erc721 contract detailed
    const { value: contractDetailed } = (0,useNonFungibleTokenContract/* useNonFungibleTokenContract */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, maskBoxInfo?.nft_address ?? '', types/* SchemaType */.XQ.ERC721, {
        account
    });
    // #endregion
    // #region the payment count
    const [paymentCount, setPaymentCount] = (0,react.useState)(1);
    const setPaymentCount_ = (0,react.useCallback)((count)=>{
        setPaymentCount((0,clamp/* default */.Z)(count || 1, 1, boxInfo?.personalRemaining ?? 1));
    }, [
        boxInfo?.personalRemaining
    ]);
    // #endregion
    // #region token ids
    const [lastAllTokenIds, setLastAllTokenIds] = (0,react.useState)([]);
    const [lastPurchasedTokenIds, setLastPurchasedTokenIds] = (0,react.useState)([]);
    const refreshLastPurchasedTokenIds = (0,react.useCallback)(()=>{
        setLastPurchasedTokenIds((tokenIds)=>(0,uniq/* default */.Z)([
                ...tokenIds,
                ...purchasedTokens
            ]));
    }, [
        purchasedTokens.length
    ]);
    // #endregion
    // #region the payment token
    const { data: paymentNativeTokenBalance = '0' } = (0,useBalance/* useBalance */.K)();
    const { data: paymentERC20TokenBalance = '0' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, (0,address/* isNativeTokenAddress */.qw)(paymentTokenAddress) ? '' : paymentTokenAddress);
    const paymentTokenInfo = boxInfo?.payments.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.token.address, paymentTokenAddress));
    const paymentTokenIndex = boxInfo?.payments.findIndex((x)=>(0,isSameAddress/* isSameAddress */.W)(x.token.address ?? '', paymentTokenAddress)) ?? -1;
    const paymentTokenPrice = paymentTokenInfo?.price ?? '0';
    const costAmount = (0,number/* multipliedBy */.$q)(paymentTokenPrice, paymentCount);
    const isNativeToken = (0,address/* isNativeTokenAddress */.qw)(paymentTokenAddress);
    const paymentTokenBalance = isNativeToken ? paymentNativeTokenBalance : paymentERC20TokenBalance;
    const paymentTokenDetailed = paymentTokenInfo?.token ?? null;
    const isBalanceInsufficient = costAmount.gt(paymentTokenBalance);
    (0,react.useEffect)(()=>{
        const firstPaymentTokenAddress = (0,head/* default */.Z)(boxInfo?.payments)?.token.address;
        if (paymentTokenAddress === '' && firstPaymentTokenAddress) setPaymentTokenAddress(firstPaymentTokenAddress);
    }, [
        paymentTokenAddress,
        boxInfo?.payments.map((x)=>x.token.address).join(',')
    ]);
    // #endregion
    // #region transactions
    const [openBoxTransactionOverrides, setOpenBoxTransactionOverrides] = (0,react.useState)(null);
    const openBoxTransaction = useOpenBoxTransaction(boxId, paymentCount, paymentTokenIndex, paymentTokenPrice, paymentTokenDetailed, proofBytes, openBoxTransactionOverrides);
    const { data: erc20Allowance, refetch: retryAllowance } = (0,useERC20TokenAllowance/* useERC20TokenAllowance */.n)(isNativeToken ? undefined : paymentTokenAddress, MASK_BOX_CONTRACT_ADDRESS);
    const canPurchase = !isBalanceInsufficient && !!boxInfo?.personalRemaining;
    const allowToPurchase = boxState === BoxState.READY;
    const isAllowanceEnough = isNativeToken ? true : costAmount.lte(erc20Allowance ?? '0');
    const { value: openBoxTransactionGasLimit } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!openBoxTransaction || !canPurchase || !allowToPurchase || !isAllowanceEnough) return;
        const estimatedGas = await openBoxTransaction.method.estimateGas((0,omit/* default */.Z)(openBoxTransaction.config, 'gas'));
        return new bignumber/* BigNumber */.O(estimatedGas).toNumber();
    }, [
        openBoxTransaction,
        canPurchase,
        allowToPurchase,
        isAllowanceEnough
    ]);
    // #endregion
    return {
        // box id
        boxId,
        setBoxId,
        // box info & metadata
        boxInfo,
        boxMetadata,
        // box state
        boxState,
        boxStateMessage,
        // erc721 contract detailed
        contractDetailed,
        // payment count
        paymentCount,
        setPaymentCount: setPaymentCount_,
        // payment address
        paymentTokenAddress: paymentTokenAddress || ((0,head/* default */.Z)(boxInfo?.payments)?.token.address ?? ''),
        setPaymentTokenAddress: (address)=>{
            if (boxInfo?.payments.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.token.address ?? '', address))) setPaymentTokenAddress(address);
        },
        // token ids
        lastAllTokenIds,
        setLastAllTokenIds,
        lastPurchasedTokenIds,
        setLastPurchasedTokenIds,
        refreshLastPurchasedTokenIds,
        // payment token
        paymentTokenPrice,
        paymentTokenIndex,
        paymentTokenBalance,
        paymentTokenDetailed,
        isBalanceInsufficient,
        isAllowanceEnough,
        // transactions
        openBoxTransaction,
        openBoxTransactionGasLimit,
        openBoxTransactionOverrides,
        setOpenBoxTransactionOverrides,
        // retry callbacks
        retryAllowance,
        retryMaskBoxInfo,
        retryMaskBoxStatus,
        retryBoxInfo,
        retryBoxMetadata,
        retryMaskBoxCreationSuccessEvent,
        retryMaskBoxTokensForSale,
        retryMaskBoxPurchasedTokens
    };
}
const Context = (0,unstated_next/* createContainer */.f)(useContext_useContext);

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/Skeleton/Skeleton.js




let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const Skeleton_Skeleton = (/*#__PURE__*/react.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce) {
    console.warn(['MUI: The Skeleton component was moved from the lab to the core.', '', "You should use `import { Skeleton } from '@mui/material'`", "or `import Skeleton from '@mui/material/Skeleton'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props));
}));
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchBlob.ts
var fetchBlob = __webpack_require__(25747);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Video/index.tsx





const Video = /*#__PURE__*/ (0,react.forwardRef)(function Video(props, outgoingRef) {
    const { src, component = 'video', VideoProps, SkeletonProps } = props;
    const videoRef = (0,react.useRef)(null);
    const { loading, value } = (0,useAsync/* default */.Z)(async ()=>{
        if (typeof src !== 'string') return src;
        return (0,fetchBlob/* fetchBlob */.g)(src);
    }, [
        src
    ]);
    const blobURL = (0,react.useMemo)(()=>{
        if (!value) return '';
        return URL.createObjectURL(value);
    }, [
        value
    ]);
    if (component !== 'video') return null;
    if (loading || loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton_Skeleton, {
            variant: "rectangular",
            ...SkeletonProps
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
        ref: videoRef,
        muted: true,
        ...VideoProps,
        children: blobURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
            src: blobURL,
            type: "video/mp4"
        }) : null
    });
});

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/ArticlesTab.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        main: {
            padding: 16
        },
        hero: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 360,
            objectFit: 'scale-down'
        }
    }));
function ArticlesTab(props) {
    const { boxMetadata } = props;
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            children: (()=>{
                if (!boxMetadata?.mediaType) return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.hero,
                    src: new URL(/* asset import */ __webpack_require__(87705), __webpack_require__.b).toString()
                });
                switch(boxMetadata.mediaType){
                    case MediaType.Video:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Video, {
                            VideoProps: {
                                className: classes.hero,
                                controls: true
                            },
                            src: (0,resolver/* resolveIPFS_URL */.mg)(boxMetadata?.mediaUrl) ?? ''
                        });
                    default:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.hero,
                            src: boxMetadata?.mediaUrl ? (0,resolver/* resolveIPFS_URL */.mg)(boxMetadata?.mediaUrl) : new URL(/* asset import */ __webpack_require__(87705), __webpack_require__.b).toString()
                        });
                }
            })()
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Divider/Divider.js
var Divider = __webpack_require__(31673);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/DetailsTab.tsx



const DetailsTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        main: {
            height: 360,
            overflow: 'auto',
            padding: theme.spacing(2)
        },
        section: {
            border: `1px solid ${theme.palette.maskColor.publicLine}`,
            borderRadius: 16,
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2),
            '&:last-child': {
                marginBottom: theme.spacing(0)
            }
        },
        line: {
            borderColor: theme.palette.maskColor.publicLine
        },
        placeholder: {
            textAlign: 'center',
            marginTop: 170
        },
        title: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: '22px',
            paddingBottom: theme.spacing(2),
            color: theme.palette.maskColor.dark
        },
        content: {
            lineHeight: '20px',
            whiteSpace: 'pre-line',
            fontSize: 16,
            fontWeight: 400,
            color: theme.palette.maskColor.dark,
            paddingTop: theme.spacing(2)
        }
    }));
function DetailsTab(props) {
    const { boxMetadata } = props;
    const { classes, theme } = DetailsTab_useStyles();
    const definitions = boxMetadata?.activities.map((x)=>({
            title: x.title,
            content: x.body
        }));
    if (!definitions) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: theme.palette.maskColor.publicMain,
            children: "No detailed information."
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: definitions?.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        color: theme.palette.maskColor.publicMain,
                        variant: "h3",
                        children: x.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        className: classes.line
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.content,
                        color: theme.palette.maskColor.publicMain,
                        variant: "body2",
                        children: x.content
                    })
                ]
            }, i))
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Remove.js


/* harmony default export */ const Remove = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 13H5v-2h14v2z"
}), 'Remove'));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Add.js


/* harmony default export */ const Add = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add'));
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/TokenPrice/index.tsx





function TokenPrice({ chainId, contractAddress, amount, currencyType = specs/* CurrencyType */.V2.USD, ...rest }) {
    const { data: tokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, contractAddress?.toLowerCase(), {
        chainId,
        currencyType
    });
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const price = (0,address/* isZeroAddress */.uO)(contractAddress) ? nativeTokenPrice : tokenPrice;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        ...rest,
        children: [
            "$",
            (0,number/* multipliedBy */.$q)(amount, price).toFixed(2)
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Tune.js
var Tune = __webpack_require__(95397);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasPrice.ts + 1 modules
var useGasPrice = __webpack_require__(37186);
;// CONCATENATED MODULE: ./packages/shared/src/UI/wallet/GasSettingBar.tsx











function GasSettingBar(props) {
    const { gasLimit, gasPrice, maxFee, priorityFee, onChange } = props;
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { data: nativeTokenDetailed } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: gasPriceDefault = '0' } = (0,useGasPrice/* useGasPrice */.F)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const [gasOption, setGasOptionType] = (0,react.useState)(specs/* GasOptionType */.Qd.NORMAL);
    const onOpenGasSettingDialog = (0,react.useCallback)(()=>{
        modals/* GasSettingModal */.fU.open(entry/* ChainResolver */.iv.isFeatureSupported(chainId, 'EIP1559') ? {
            gasLimit,
            maxFee,
            priorityFee,
            gasOption
        } : {
            gasLimit,
            gasPrice,
            gasOption
        });
    }, [
        chainId,
        gasLimit,
        gasPrice,
        maxFee,
        priorityFee,
        gasOption
    ]);
    // set initial options
    (0,react.useEffect)(()=>{
        const off = modals/* GasSettingModal */.fU.emitter.on('close', (evt)=>{
            if (evt?.gasOption) setGasOptionType(evt.gasOption);
            onChange?.(entry/* ChainResolver */.iv.isFeatureSupported(chainId, 'EIP1559') ? {
                gas: evt?.gasLimit,
                maxFeePerGas: evt?.maxFee,
                maxPriorityFeePerGas: evt?.priorityFee
            } : {
                gas: evt?.gasLimit,
                gasPrice: evt?.gasPrice
            });
        });
        return ()=>{
            off();
        };
    }, []);
    const gasFee = (0,react.useMemo)(()=>{
        return (0,number/* multipliedBy */.$q)(gasLimit, entry/* ChainResolver */.iv.isFeatureSupported(chainId, 'EIP1559') && maxFee ? new bignumber/* BigNumber */.O(maxFee) : gasPrice ?? gasPriceDefault);
    }, [
        chainId,
        gasLimit,
        gasPrice,
        maxFee,
        gasPriceDefault
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                fontSize: "14px",
                sx: {
                    marginRight: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            (0,formatter/* formatWeiToEther */.yp)(gasFee).toFixed(6),
                            " ",
                            nativeTokenDetailed?.symbol ?? '',
                            " ≈"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPrice, {
                        chainId: chainId,
                        amount: (0,formatter/* formatWeiToEther */.yp)(gasFee)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "small",
                onClick: onOpenGasSettingDialog,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                    fontSize: "small",
                    color: "inherit"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/locales/i18n_generated.ts
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
function useMaskBoxTrans() /**
      * `Insufficient balance`
      */ /**
      * `Drawing`
      */ /**
      * `Draw`
      */ /**
      * `Active`
      */ /**
      * `Solid:`
      */ /**
      * `by`
      */ /**
      * `Limit:`
      */ /**
      * `Articles`
      */ /**
      * `Closed`
      */ /**
      * `Details`
      */ /**
      * `Load failed`
      */ /**
      * `Reload`
      */ /**
      * `{{title}} ({{price}} {{symbol}}/Time)`
      */ /**
      * `MaskBox`
      */ /**
      * `Professional multi-chain decentralized platform for launching NFT mystery boxes.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.maskbook.box");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/DrawDialog.tsx













const DrawDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        main: {
            padding: `${theme.spacing(2.5)} !important`
        },
        caption: {
            textAlign: 'center'
        },
        body: {
            padding: theme.spacing(0, 2.5)
        },
        value: {
            fontSize: 32,
            lineHeight: '40px',
            fontWeight: 'bold',
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        section: {
            padding: theme.spacing(2, 0),
            justifyContent: 'space-between'
        },
        title: {
            width: '50%'
        },
        content: {},
        field: {
            borderRadius: 0,
            padding: theme.spacing(0),
            height: '25px !important',
            minWidth: 0,
            minHeight: 0,
            outline: 'none !important',
            borderColor: `${theme.palette.divider} !important`
        },
        textfield: {
            width: 40,
            textAlign: 'center',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.divider
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.divider
                },
                '&.Mui-focused fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.divider
                }
            }
        },
        number: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                appearance: 'none',
                margin: 0
            },
            padding: 0,
            appearance: 'textfield',
            textAlign: 'center',
            borderImage: 'none'
        }
    }));
function DrawDialog(props) {
    const { boxInfo, open, drawing, onClose, onSubmit } = props;
    const { classes } = DrawDialog_useStyles();
    const { MASK_BOX_CONTRACT_ADDRESS } = (0,constants/* useMaskBoxConstants */.kt)();
    const t = useMaskBoxTrans();
    const { paymentCount, setPaymentCount, paymentTokenPrice, paymentTokenBalance, paymentTokenDetailed, isBalanceInsufficient, isAllowanceEnough, openBoxTransactionGasLimit, setOpenBoxTransactionOverrides } = (0,unstated_next/* useContainer */.u)(Context);
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const onCount = (0,react.useCallback)((step)=>{
        setPaymentCount(paymentCount + step);
    }, [
        paymentCount
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        title: "Draw",
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.main,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.caption,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.value,
                                            children: (0,formatCurrency/* formatCurrency */.x)((0,number/* multipliedBy */.$q)(paymentTokenPrice, paymentCount), '')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: paymentTokenDetailed?.symbol
                                        })
                                    ]
                                }),
                                paymentTokenDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "≈"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPrice, {
                                            chainId: chainId,
                                            amount: (0,formatCurrency/* formatCurrency */.x)(paymentTokenPrice, ''),
                                            contractAddress: paymentTokenDetailed.address
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.body,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Mystery Boxes:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.content,
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                    className: classes.field,
                                                    variant: "outlined",
                                                    color: "inherit",
                                                    disabled: paymentCount <= 1,
                                                    onClick: ()=>onCount(-1),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Remove, {
                                                        color: "inherit"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                                    className: classes.textfield,
                                                    type: "number",
                                                    size: "small",
                                                    sx: {
                                                        marginLeft: 1,
                                                        marginRight: 1
                                                    },
                                                    value: paymentCount,
                                                    disabled: boxInfo.remaining === 0 || boxInfo.personalRemaining <= 1,
                                                    onChange: (ev)=>{
                                                        const count = Number.parseInt(ev.target.value, 10);
                                                        if (count >= 1 && count <= boxInfo.availableAmount) {
                                                            setPaymentCount(count);
                                                        }
                                                    },
                                                    InputProps: {
                                                        classes: {
                                                            root: classes.field
                                                        },
                                                        autoFocus: true,
                                                        inputProps: {
                                                            className: classes.number,
                                                            autoComplete: 'off',
                                                            autoCorrect: 'off',
                                                            title: 'Token Amount',
                                                            inputMode: 'decimal',
                                                            min: 0,
                                                            max: 255,
                                                            minLength: 1,
                                                            pattern: src_constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek,
                                                            spellCheck: false
                                                        }
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                    className: classes.field,
                                                    variant: "outlined",
                                                    color: "inherit",
                                                    disabled: paymentCount >= boxInfo.availableAmount || boxInfo.remaining === 0 || boxInfo.personalRemaining === 1,
                                                    onClick: ()=>onCount(1),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add, {
                                                        color: "inherit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Quantity Limit:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.content,
                                            color: "textPrimary",
                                            children: boxInfo.personalLimit
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Available amount:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.content,
                                            color: "textPrimary",
                                            children: [
                                                boxInfo.availableAmount,
                                                "/",
                                                boxInfo.total
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Current Wallet:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.content,
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                                    size: 16,
                                                    icon: providerDescriptor?.icon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        marginLeft: 1
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                                        address: account,
                                                        size: 6,
                                                        formatter: formatter/* formatEthereumAddress */.j8
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Available:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                color: "textPrimary",
                                                children: [
                                                    (0,formatBalance/* formatBalance */.a)(paymentTokenBalance, paymentTokenDetailed?.decimals ?? 0, 6),
                                                    ' ',
                                                    paymentTokenDetailed?.symbol
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                isAllowanceEnough ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Gas Fee:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingBar, {
                                                gasLimit: openBoxTransactionGasLimit || 0,
                                                onChange: setOpenBoxTransactionOverrides
                                            })
                                        })
                                    ]
                                }) : null
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                style: {
                    padding: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        expectedChainId: chainId,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: (0,number/* multipliedBy */.$q)(paymentTokenPrice, paymentCount).toFixed(),
                            spender: MASK_BOX_CONTRACT_ADDRESS,
                            token: paymentTokenDetailed?.schema === types/* SchemaType */.XQ.ERC20 ? paymentTokenDetailed : undefined,
                            ActionButtonProps: {
                                size: 'medium',
                                sx: {
                                    marginTop: 2
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                size: "medium",
                                fullWidth: true,
                                sx: {
                                    marginTop: 2
                                },
                                disabled: isBalanceInsufficient || drawing,
                                onClick: onSubmit,
                                children: isBalanceInsufficient ? t.insufficient_balance() : drawing ? t.drawing() : t.draw()
                            })
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js
var difference = __webpack_require__(12313);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/descriptors.ts + 1 modules
var descriptors = __webpack_require__(3187);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/CollectibleCard.tsx








const CollectibleCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0',
            position: 'absolute',
            zIndex: 1,
            backgroundColor: theme.palette.mode === 'light' ? '#F7F9FA' : '#2F3336',
            width: '100%',
            height: '100%'
        },
        networkIcon: {
            position: 'absolute',
            top: 6,
            left: 6
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 30,
            height: 30
        },
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%'
        },
        linkWrapper: {
            position: 'relative',
            display: 'block'
        }
    }));
const CollectibleCard = /*#__PURE__*/ (0,react.memo)(function CollectibleCard({ className, wallet, asset, readonly, pluginID, disableLink, showNetworkIcon, ...rest }) {
    const { classes, cx } = CollectibleCard_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(pluginID);
    const networkIcon = (0,react.useMemo)(()=>{
        if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return descriptors/* NETWORK_DESCRIPTORS */.qQ.find((network)=>network?.chainId === asset.chainId)?.icon;
        }
        return networkDescriptor?.icon;
    }, [
        asset.chainId,
        pluginID
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.blocker
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                        url: asset.metadata?.mediaURL || asset.metadata?.imageURL,
                        classes: {
                            fallbackImage: classes.fallbackImage
                        }
                    }),
                    networkIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                        icon: networkIcon,
                        size: 24,
                        className: classes.networkIcon
                    }) : null
                ]
            })
        ]
    });
    if (disableLink) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cx(classes.linkWrapper, className),
        children: content
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        target: "_blank",
        rel: "noopener noreferrer",
        href: asset.link ?? Others.explorerResolver.nonFungibleTokenLink(asset.chainId, asset.address, asset.tokenId),
        className: cx(classes.linkWrapper, className),
        ...rest,
        children: content
    });
});

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/TokenCard.tsx








const TokenCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        title: {
            textAlign: 'center',
            margin: theme.spacing(1, 0),
            maxWidth: 160
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    }));
const TokenCard = /*#__PURE__*/ (0,react.memo)(({ contractDetailed, tokenId })=>{
    const { classes } = TokenCard_useStyles();
    const { data: tokenDetailed } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, contractDetailed.address, tokenId);
    return tokenDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
                readonly: true,
                provider: specs/* SourceType */.PO.OpenSea,
                asset: tokenDetailed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textSecondary",
                    variant: "body2",
                    children: tokenDetailed.contract?.name ?? tokenId
                })
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {});
});

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/usePostInfo.ts
var usePostInfo = __webpack_require__(51874);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/DrawResultDialog.tsx











const DrawResultDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        main: {
            padding: 8
        },
        list: {
            height: 360,
            overflow: 'auto',
            marginBottom: theme.spacing(2),
            display: 'grid',
            flexWrap: 'wrap',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gridGap: theme.spacing(1),
            padding: 8
        },
        token: {}
    }));
function DrawResultDialog(props) {
    const { open, onClose, boxInfo, contractDetailed } = props;
    const { classes } = DrawResultDialog_useStyles();
    const { lastPurchasedTokenIds } = (0,unstated_next/* useContainer */.u)(Context);
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareText = `I just claimed a #MaskBox with @realMaskNetwork. Install mask.io and create your own NFT mystery box! \n ${postLink}`;
    const onShare = ()=>{
        onClose();
        (0,context/* share */.BN)?.(shareText);
    };
    if (!contractDetailed) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Successful",
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.list,
                        display: "flex",
                        flexWrap: "wrap",
                        children: (0,difference/* default */.Z)(boxInfo.tokenIdsPurchased, lastPurchasedTokenIds).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.token,
                                flex: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenCard, {
                                    tokenId: x,
                                    contractDetailed: contractDetailed
                                })
                            }, x))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Shared, {
                            size: 18
                        }),
                        size: "medium",
                        fullWidth: true,
                        onClick: onShare,
                        children: "Share"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/components/PreviewCard.tsx



















const useTabsStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            backgroundColor: theme.palette.maskColor.dark,
            color: theme.palette.maskColor.white,
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor.dark
            },
            margin: '0 !important'
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
            background: theme.palette.maskColor.white,
            color: theme.palette.maskColor.publicMain,
            '&:hover': {
                background: theme.palette.maskColor.white
            }
        },
        body: {
            padding: 12,
            paddingBottom: 0
        },
        content: {
            margin: '0 12px',
            flex: 1,
            backgroundColor: theme.palette.maskColor.white,
            overflow: 'auto',
            borderRadius: '0 0 12px 12px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            gap: 24,
            display: 'flex',
            padding: 12,
            alignItems: 'center'
        },
        imgBox: {
            width: 50,
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        },
        name: {
            color: theme.palette.maskColor.publicMain,
            fontSize: 18,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: 250
        },
        active: {
            color: theme.palette.maskColor.white,
            width: 65,
            height: 32,
            fontSize: 12,
            fontWeight: 700,
            backgroundColor: theme.palette.maskColor.success
        },
        close: {
            color: theme.palette.maskColor.white,
            width: 65,
            backgroundColor: new (color_default())(theme.palette.maskColor.primary).alpha(0.1).toString(),
            height: 32,
            fontSize: 12,
            fontWeight: 700
        },
        iconBox: {
            position: 'absolute',
            bottom: 0,
            right: -8,
            padding: 1,
            backgroundColor: theme.palette.maskColor.bg,
            borderRadius: 9999,
            lineHeight: 0,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        },
        icon: {
            width: 20,
            height: 20
        },
        statusBox: {
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            height: 148,
            flexDirection: 'column'
        }
    }));
function PreviewCard() {
    const { classes } = useTabsStyles();
    const [openDrawDialog, setOpenDrawDialog] = (0,react.useState)(false);
    const [openDrawResultDialog, setOpenDrawResultDialog] = (0,react.useState)(false);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)();
    const theme = (0,useTheme/* default */.Z)();
    const t = useMaskBoxTrans();
    const { boxState, boxStateMessage, boxInfo, boxMetadata, contractDetailed, setPaymentCount, paymentTokenAddress, setPaymentTokenAddress, paymentTokenPrice, paymentTokenDetailed, refreshLastPurchasedTokenIds, // transaction
    openBoxTransaction, openBoxTransactionOverrides, openBoxTransactionGasLimit, setOpenBoxTransactionOverrides, // retry
    retryMaskBoxStatus, retryMaskBoxInfo, retryBoxInfo, retryMaskBoxCreationSuccessEvent, retryMaskBoxTokensForSale, retryMaskBoxPurchasedTokens } = (0,unstated_next/* useContainer */.u)(Context);
    const [currentTab, onChange, tabs] = (0,useTabs/* useTabs */.Y)('Articles', 'Details');
    const txConfig = (0,react.useMemo)(()=>{
        return {
            ...openBoxTransaction?.config,
            gas: openBoxTransactionOverrides?.gas ?? openBoxTransactionGasLimit
        };
    }, [
        openBoxTransaction?.config,
        openBoxTransactionOverrides,
        openBoxTransactionGasLimit
    ]);
    // #region open box
    const [{ loading: isOpening }, openBoxCallback] = useTransactionCallback(txConfig, openBoxTransaction?.method);
    const onRefresh = (0,react.useCallback)(()=>{
        setPaymentCount(1);
        setPaymentTokenAddress('');
        retryMaskBoxInfo();
        retryMaskBoxCreationSuccessEvent();
        retryMaskBoxTokensForSale();
        retryMaskBoxPurchasedTokens();
    }, [
        retryMaskBoxInfo,
        retryMaskBoxCreationSuccessEvent,
        retryMaskBoxTokensForSale,
        retryMaskBoxPurchasedTokens
    ]);
    const [drawing, setDrawing] = (0,react.useState)(false);
    const onDraw = (0,react.useCallback)(async ()=>{
        setDrawing(true);
        refreshLastPurchasedTokenIds();
        try {
            await openBoxCallback();
            onRefresh();
            setOpenDrawResultDialog(true);
            retryMaskBoxStatus();
            setOpenDrawDialog(false);
        } catch  {}
        setDrawing(false);
    }, [
        openBoxCallback,
        refreshLastPurchasedTokenIds,
        onRefresh,
        retryMaskBoxStatus
    ]);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    // #endregion
    if (boxState === BoxState.UNKNOWN) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.statusBox,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
        })
    });
    if (boxState === BoxState.ERROR) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.statusBox,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "error",
                children: t.failed()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    width: 254,
                    backgroundColor: theme.palette.maskColor.publicMain,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor.publicMain
                    },
                    height: 40,
                    marginBottom: 2,
                    marginTop: '26px'
                },
                size: "small",
                variant: "roundedContained",
                onClick: retryBoxInfo,
                children: t.retry()
            })
        ]
    });
    if (boxState === BoxState.NOT_FOUND || !boxInfo) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.statusBox,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "error",
                children: t.failed()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    width: 254,
                    backgroundColor: theme.palette.maskColor.publicMain,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor.publicMain
                    },
                    height: 40,
                    marginBottom: 2,
                    marginTop: '26px'
                },
                size: "small",
                variant: "roundedContained",
                onClick: retryMaskBoxInfo,
                children: t.retry()
            })
        ]
    });
    const Tabs = [
        {
            value: tabs.Articles,
            label: t.articles()
        },
        {
            value: tabs.Details,
            label: t.details()
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.imgBox,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                        address: boxInfo.tokenAddress ?? '',
                                        name: boxInfo.name,
                                        chainId: chainId,
                                        sx: {
                                            width: 48,
                                            height: 48
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        className: classes.iconBox,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                            size: 24,
                                            icon: networkDescriptor?.icon,
                                            className: classes.icon
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        title: boxInfo.name,
                                        className: classes.name,
                                        children: boxInfo.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        sx: {
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'row'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                sx: {
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'row'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        sx: {
                                                            paddingRight: 1
                                                        },
                                                        color: theme.palette.maskColor.publicSecond,
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        children: t.sold()
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        color: theme.palette.maskColor.publicMain,
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        children: [
                                                            boxInfo.sold,
                                                            "/",
                                                            boxInfo.total
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        sx: {
                                                            paddingRight: 1,
                                                            paddingLeft: 1
                                                        },
                                                        color: theme.palette.maskColor.publicSecond,
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        children: t.limit()
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        color: theme.palette.maskColor.publicMain,
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        children: boxInfo.personalLimit
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                sx: {
                                                    display: 'flex',
                                                    flexDirection: 'row'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        sx: {
                                                            paddingRight: 1
                                                        },
                                                        color: theme.palette.maskColor.publicSecond,
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        children: t.by()
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        color: theme.palette.maskColor.publicMain,
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        title: boxInfo.creator,
                                                        children: Others.formatAddress(boxInfo.creator, 4)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                className: boxState === BoxState.READY ? classes.active : classes.close,
                                label: boxState === BoxState.READY ? t.active() : t.close()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.body,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_Tabs/* MaskTabList */.C, {
                            variant: "base",
                            "aria-label": "maskbox",
                            onChange: onChange,
                            children: Tabs.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    value: x.value,
                                    label: x.label,
                                    className: x.value === currentTab ? classes.tabActive : classes.tab
                                }, x.value))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: tabs.Articles,
                                sx: {
                                    padding: 0
                                },
                                children: boxInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticlesTab, {
                                    boxMetadata: boxMetadata
                                }) : null
                            }, tabs.Articles),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: tabs.Details,
                                sx: {
                                    padding: 0
                                },
                                children: boxInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsTab, {
                                    boxMetadata: boxMetadata
                                }) : null
                            }, tabs.Details)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        style: {
                            padding: 12
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            expectedChainId: chainId,
                            ActionButtonPromiseProps: {
                                variant: 'roundedDark'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                expectedChainId: chainId,
                                ActionButtonProps: {
                                    size: 'medium',
                                    variant: 'roundedDark'
                                },
                                classes: {
                                    button: classes.button
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                    loading: isOpening,
                                    size: "medium",
                                    variant: "roundedDark",
                                    fullWidth: true,
                                    disabled: boxState !== BoxState.READY || isOpening,
                                    onClick: ()=>setOpenDrawDialog(true),
                                    children: (()=>{
                                        return boxState === BoxState.READY && paymentTokenAddress ? t.action_title({
                                            title: boxStateMessage,
                                            price: (0,formatCurrency/* formatCurrency */.x)(paymentTokenPrice, ''),
                                            symbol: paymentTokenDetailed?.symbol ?? ''
                                        }) : boxStateMessage;
                                    })()
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrawDialog, {
                boxInfo: boxInfo,
                open: openDrawDialog,
                drawing: drawing,
                onClose: ()=>{
                    setOpenBoxTransactionOverrides(null);
                    setOpenDrawDialog(false);
                },
                onSubmit: onDraw
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrawResultDialog, {
                boxInfo: boxInfo,
                contractDetailed: contractDetailed,
                open: openDrawResultDialog,
                onClose: ()=>{
                    refreshLastPurchasedTokenIds();
                    setOpenDrawResultDialog(false);
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/SiteAdaptor/index.tsx












const isMaskBox = (x)=>x.startsWith('https://box-beta.mask.io') || x.startsWith('https://box.mask.io');
const site = {
    ...base/* base */.u,
    DecryptedInspector (props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,extract/* extractTextFromTypedMessage */.V)(props.message);
            if (x.isNone()) return null;
            return (0,parseURLs/* parseURLs */.l)(x.value).find(isMaskBox);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector () {
        const links = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
        const link = links.find(isMaskBox);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBox, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_mask_box_name",
                ns: PluginID/* PluginID */.P.MaskBox
            });
            const iconFilterColor = 'rgba(0, 87, 255, 0.3)';
            return {
                ApplicationEntryID: base/* base */.u.ID,
                RenderEntryComponent ({ disabled }) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                        title: name,
                        disabled: disabled,
                        iconFilterColor: iconFilterColor,
                        icon: icon,
                        onClick: ()=>(0,open_window/* openWindow */.x)('https://box.mask.io/#/')
                    });
                },
                appBoardSortingDefaultPriority: 14,
                marketListSortingPriority: 14,
                icon,
                tutorialLink: 'https://realmasknetwork.notion.site/d0941687649a4ef7a38d71f23ecbe4da',
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "plugin_mask_box_description",
                    ns: PluginID/* PluginID */.P.MaskBox
                }),
                category: 'dapp',
                iconFilterColor,
                name
            };
        })()
    ]
};
/* harmony default export */ const SiteAdaptor = (site);
function Renderer(props) {
    const [, matchedChainId] = props.url.match(/chain=(\d+)/i) ?? [];
    const [, boxId] = props.url.match(/box=(\d+)/i) ?? [];
    const [, hashRoot] = props.url.match(/rootHash=([\dA-Za-z]+)/) ?? [];
    const shouldNotRender = !matchedChainId || !boxId;
    (0,usePluginWrapper/* usePluginWrapper */.f)(!shouldNotRender);
    if (shouldNotRender) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        initialState: {
            boxId,
            hashRoot
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {})
    });
}


/***/ }),

/***/ 70918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getMerkleProof)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60330);


async function getMerkleProof(leaf, root) {
    try {
        const response = await fetch((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .MERKLE_PROOF_ENDPOINT */ .m, {
            leaf,
            root: root.replace(/^0x/, '')
        }));
        return await response.json();
    } catch (err) {
        throw new Error(Reflect.get(Object(err), 'message'));
    }
}


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

/***/ 14414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 83629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 19628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 93301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 24981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 23478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 16281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 54165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 49616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useFungibleTokens)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);



function useFungibleTokens(pluginID, listOfAddress, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!listOfAddress?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP;
        return Promise.all(listOfAddress.map((x)=>Web3.getFungibleToken(x)));
    }, [
        Web3,
        listOfAddress?.join(',')
    ]);
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

/***/ 39256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useNativeTokenPrice)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34093);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNativeTokenPrice(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    const nativeTokenAddress = (0,_useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .useNativeTokenAddress */ .Z)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: !!nativeTokenAddress,
        queryKey: [
            'native-token',
            'price',
            pluginID,
            chainId,
            nativeTokenAddress,
            options
        ],
        queryFn: async ()=>Hub.getFungibleTokenPrice(chainId, nativeTokenAddress, {
                chainId
            })
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

/***/ 34425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNonFungibleTokenContract)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


function useNonFungibleTokenContract(pluginID, address, schemaType, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return Web3.getNonFungibleTokenContract?.(address, schemaType);
    }, [
        address,
        schemaType,
        Web3
    ]);
}


/***/ }),

/***/ 95685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 25747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ fetchBlob)
/* harmony export */ });
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62622);
/* harmony import */ var _getNextFetchers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72358);


async function fetchBlob(input, init, options) {
    const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__/* .fetch */ .h)(input, init, (0,_getNextFetchers_js__WEBPACK_IMPORTED_MODULE_1__/* .getNextFetchers */ .l)(options));
    if (!response.ok) throw new Error('Failed to fetch as Blob.');
    return response.blob();
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

/***/ 95397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
}), 'Tune'));

/***/ }),

/***/ 80234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(505);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useThemeProps.js
var useThemeProps = __webpack_require__(15973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(64696);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(83018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 24460:
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ 98338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
var colorNames = __webpack_require__(24460);
var swizzle = __webpack_require__(47389);
var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (hasOwnProperty.call(colorNames, name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorNames, match[1])) {
			return null;
		}

		rgb = colorNames[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ 71623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const colorString = __webpack_require__(98338);
const convert = __webpack_require__(58418);

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
	hashedModelKeys[[...convert[model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = colorString.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = convert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to[self.model](args);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to.rgb.percent(args);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = convert[this.model];
		const {labels} = convert[this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return convert[this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return colorString.to.hex(rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(convert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = convert[model];

	// Conversion methods
	Color.prototype[model] = function (...args) {
		if (this.model === model) {
			return new Color(this);
		}

		if (args.length > 0) {
			return new Color(args, model);
		}

		return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...args) {
		let color = args[0];
		if (typeof color === 'number') {
			color = zeroArray(args, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

module.exports = Color;


/***/ }),

/***/ 73241:
/***/ ((module) => {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ 47389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArrayish = __webpack_require__(73241);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ 87705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3c322010f62ad1c9eb1d.svg";

/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

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


/***/ }),

/***/ 12244:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"}],"name":"CancelSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ClaimPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint32","name":"start_time","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"end_time","type":"uint32"},{"indexed":false,"internalType":"bool","name":"sell_all","type":"bool"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"customer","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OpenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"name":"addNftIntoBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"box_ids","type":"uint256[]"}],"name":"claimPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MysteryBox.PaymentOption[]","name":"payment","type":"tuple[]"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"uint32","name":"start_time","type":"uint32"},{"internalType":"uint32","name":"end_time","type":"uint32"},{"internalType":"bool","name":"sell_all","type":"bool"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"name":"createBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxInfo","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxStatus","outputs":[{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"receivable_amount","type":"uint256"}],"internalType":"struct MysteryBox.PaymentInfo[]","name":"payment","type":"tuple[]"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getNftListForSale","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"address","name":"customer","type":"address"}],"name":"getPurchasedNft","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"},{"internalType":"uint8","name":"payment_token_index","type":"uint8"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"openBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"name":"setQualificationData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');

/***/ })

}]);
//# sourceMappingURL=chunk.2570.js.map