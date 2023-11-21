"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6751],{

/***/ 44475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ usePersistSubscription)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


/**
 * In favor of react-query's persist cache and cache management
 */ function usePersistSubscription(persistKey, subscription, predicate) {
    const [initialValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>subscription.getCurrentValue());
    const { data = initialValue, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            persistKey
        ],
        networkMode: 'always',
        queryFn: ()=>{
            const value = subscription.getCurrentValue();
            if (predicate && !predicate(value)) return undefined;
            return value;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        refetch();
        // Actively fetch, make persist data act as placeholder data
        return subscription.subscribe(refetch);
    }, [
        subscription,
        refetch
    ]);
    return data;
}


/***/ }),

/***/ 15019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $n: () => (/* binding */ EMPTY_ENTRY),
/* harmony export */   Dv: () => (/* binding */ FALSE),
/* harmony export */   LZ: () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   i_: () => (/* binding */ UNDEFINED),
/* harmony export */   v6: () => (/* binding */ EMPTY_STRING)
/* harmony export */ });
/* unused harmony exports ZERO, TRUE, NULL */
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);
/* harmony import */ var _helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28129);


const ZERO = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(0);
const UNDEFINED = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(undefined);
const EMPTY_STRING = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)('');
const EMPTY_ARRAY = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP);
const EMPTY_ENTRY = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)({});
const TRUE = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(true);
const FALSE = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false);
const NULL = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(null);


/***/ }),

/***/ 75369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ compose)
/* harmony export */ });
function compose(...args) {
    if (args.length === 0) throw new TypeError();
    const last = args.pop();
    return args.filter(Boolean).reduceRight((prev, fn)=>fn(prev), last);
}


/***/ }),

/***/ 29752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);




function useAccount(pluginID, expectedAccount) {
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    const { Provider } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const defaultAccount = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Provider?.account ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .UNDEFINED */ .i_);
    return Others.formatAddress(expectedAccount ?? defaultAccount ?? '');
}


/***/ }),

/***/ 58807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useChainId)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);
/* harmony import */ var _useDefaultChainId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4639);




function useChainId(pluginID, expectedChainId) {
    const { Provider } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    const defaultChainId = (0,_useDefaultChainId_js__WEBPACK_IMPORTED_MODULE_2__/* .useDefaultChainId */ .b)(pluginID);
    const actualChainId = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Provider?.chainId ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .UNDEFINED */ .i_);
    return expectedChainId ?? actualChainId ?? defaultChainId;
}


/***/ }),

/***/ 14162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  on: () => (/* binding */ ChainContextProvider),
  V4: () => (/* binding */ DefaultWeb3ContextProvider),
  f6: () => (/* binding */ NetworkContextProvider),
  fw: () => (/* binding */ RevokeChainContextProvider),
  t2: () => (/* binding */ RootWeb3ContextProvider),
  vP: () => (/* binding */ Web3ContextProvider),
  ql: () => (/* binding */ useChainContext),
  Ux: () => (/* binding */ useEnvironmentContext),
  gK: () => (/* binding */ useNetworkContext)
});

// UNUSED EXPORTS: ReadonlyNetworkContextProvider, RevokeNetworkContextProvider

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omitBy.js + 1 modules
var omitBy = __webpack_require__(72802);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(81770);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/usePersistSubscription.ts
var usePersistSubscription = __webpack_require__(44475);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
if (/^(3161|964)$/.test(__webpack_require__.j)) {
var useValueRef = __webpack_require__(84271);
}
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/compose.ts
var compose = __webpack_require__(75369);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
if (/^(3161|964)$/.test(__webpack_require__.j)) {
var settings = __webpack_require__(5338);
}
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
if (/^(3161|964)$/.test(__webpack_require__.j)) {
var Site = __webpack_require__(68422);
}
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainId.ts
var useChainId = __webpack_require__(58807);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useProviderType.ts



function useProviderType(pluginID) {
    const { Provider } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const defaultProviderType = (0,use_subscription.useSubscription)(Provider?.providerType ?? Subscriptions/* UNDEFINED */.i_);
    return defaultProviderType;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useContext.tsx











// If it's controlled, we prefer passed value over state inside
const ReadonlyNetworkContext = /*#__PURE__*/ (0,react.createContext)(null);
ReadonlyNetworkContext.displayName = 'ReadonlyNetworkContext';
const NetworkContext = /*#__PURE__*/ (0,react.createContext)(null);
NetworkContext.displayName = 'NetworkContext';
const ChainContext = /*#__PURE__*/ (0,react.createContext)(null);
ChainContext.displayName = 'ChainContext';
/**
 * Provide the current readonly network plugin ID (readonly)
 * @param props
 * @returns
 */ function ReadonlyNetworkContextProvider({ value, children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadonlyNetworkContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Provide the current selected network plugin ID
 * @param props
 * @returns
 */ function NetworkContextProvider({ value, children }) {
    const [pluginID = value, setPluginID] = (0,react.useState)();
    const context = (0,react.useMemo)(()=>({
            pluginID,
            setPluginID
        }), [
        pluginID
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkContext.Provider, {
        value: context,
        children: children
    });
}
/**
 * Provide the current chain context
 * @param props
 * @returns
 */ const ChainContextProvider = /*#__PURE__*/ (0,react.memo)(function ChainContextProvider({ value, children }) {
    const { pluginID } = useNetworkContext();
    const { controlled } = value;
    const globalAccount = (0,useAccount/* useAccount */.m)(pluginID);
    const globalChainId = (0,useChainId/* useChainId */.x)(pluginID);
    const globalProviderType = useProviderType(pluginID);
    const maskProvider = entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet];
    // The initial value of subscription.account could be empty string
    const maskAccount = (0,usePersistSubscription/* usePersistSubscription */.i)('@@mask-account', maskProvider.subscription.account, (x)=>!!x);
    const maskChainId = (0,usePersistSubscription/* usePersistSubscription */.i)('@@mask-chain-id', maskProvider.subscription.chainId);
    const [_account, setAccount] = (0,react.useState)();
    const [_chainId, setChainId] = (0,react.useState)();
    const [_providerType, setProviderType] = (0,react.useState)();
    const location = (0,useLocation/* default */.Z)();
    const is_popup_wallet_page = Sniffings/* Sniffings */.Y.is_popup_page && location.hash?.includes('/wallet');
    const account = controlled ? value.account : _account ?? value.account ?? (is_popup_wallet_page ? maskAccount : globalAccount);
    const chainId = controlled ? value.chainId : _chainId ?? value.chainId ?? (is_popup_wallet_page ? maskChainId : globalChainId);
    const providerType = controlled ? value.providerType : _providerType ?? value.providerType ?? (is_popup_wallet_page ? types/* ProviderType */.lP.MaskWallet : globalProviderType);
    const context = (0,react.useMemo)(()=>({
            account,
            chainId,
            providerType,
            setAccount,
            setChainId,
            setProviderType
        }), [
        account,
        chainId,
        providerType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContext.Provider, {
        value: context,
        children: children
    });
});
/**
 * Provide a context that contains both network and chain context
 * @param props
 * @returns
 */ function Web3ContextProvider({ value, children }) {
    const { pluginID, ...rest } = value;
    return (0,compose/* compose */.q)((children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkContextProvider, {
            value: pluginID,
            children: children
        }), (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContextProvider, {
            value: rest,
            children: children
        }), /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    }));
}
/**
 * Provide the top most network context
 * @param props
 * @returns
 */ function RevokeNetworkContextProvider({ children }) {
    const { pluginID } = useContext(ReadonlyNetworkContext);
    const value = useMemo(()=>({
            pluginID,
            setPluginID: ()=>{
                throw new Error('Set pluginID is not allowed.');
            }
        }), [
        pluginID
    ]);
    return /*#__PURE__*/ _jsx(NetworkContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Provide the top most chain context
 * @param props
 * @returns
 */ function RevokeChainContextProvider({ children }) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.x)();
    const providerType = useProviderType();
    const value = (0,react.useMemo)(()=>({
            account,
            chainId,
            providerType
        }), [
        account,
        chainId,
        providerType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * The default Web3 context provider that uses the EVM plugin
 * @param props
 * @returns
 */ function DefaultWeb3ContextProvider({ value, children }) {
    const contextValue = (0,react.useMemo)(()=>{
        return {
            pluginID: value?.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            ...value
        };
    }, [
        JSON.stringify(value)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ContextProvider, {
        value: contextValue,
        children: children
    });
}
/**
 * The root Web3 context provider that uses the plugin ID from global settings
 * @param props
 * @returns
 */ function RootWeb3ContextProvider({ value, children }) {
    const pluginIDs = (0,useValueRef/* useValueRef */.E)(settings/* pluginIDsSettings */.Mo);
    const contextValue = (0,react.useMemo)(()=>{
        const site = (0,Site/* getSiteType */.sv)();
        return {
            pluginID: value?.pluginID ?? (site ? pluginIDs[site] : PluginID/* NetworkPluginID */.F.PLUGIN_EVM)
        };
    }, [
        pluginIDs,
        JSON.stringify(value)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadonlyNetworkContextProvider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ContextProvider, {
            value: contextValue,
            children: children
        })
    });
}
function useEnvironmentContext(overrides) {
    const context = (0,react.useContext)(ReadonlyNetworkContext);
    return {
        ...context,
        ...(0,omitBy/* default */.Z)(overrides, isUndefined/* default */.Z)
    };
}
function useNetworkContext(overrides) {
    const context = (0,react.useContext)(NetworkContext);
    return {
        ...context,
        pluginID: overrides ?? context.pluginID
    };
}
function useChainContext(overrides) {
    const context = (0,react.useContext)(ChainContext);
    return {
        ...context,
        ...(0,omitBy/* default */.Z)(overrides, isUndefined/* default */.Z)
    };
}


/***/ }),

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useDefaultChainId)
/* harmony export */ });
/* unused harmony export getDefaultChainId */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59190);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97834);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14162);





const DEFAULT_CHAIN_ID = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM]: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_.Mainnet
};
function useDefaultChainId(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkContext */ .gK)(expectedPluginID);
    return DEFAULT_CHAIN_ID[pluginID];
}
function getDefaultChainId(pluginID) {
    return DEFAULT_CHAIN_ID[pluginID];
}


/***/ }),

/***/ 81128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useWeb3Others)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Others(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .OthersAll */ .Zy.use(pluginID), [
        pluginID
    ]);
}


/***/ }),

/***/ 83977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


function useWeb3State(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getActivatedPluginWeb3State */ .TQ)(pluginID);
}


/***/ }),

/***/ 41425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=__webpack_require__(9578);exports.useSubscription=function(a){return b.useSyncExternalStore(a.subscribe,a.getCurrentValue)};


/***/ }),

/***/ 15628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(41425);
} else {}


/***/ }),

/***/ 37700:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(78996);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 9578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(37700);
} else {}


/***/ }),

/***/ 65295:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NL: () => (/* binding */ useQueryClient),
/* harmony export */   aH: () => (/* binding */ QueryClientProvider)
/* harmony export */ });
/* unused harmony export defaultContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false); // If we are given a context, we will use it.
// Otherwise, if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(context, contextSharing) {
  if (context) {
    return context;
  }

  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

const useQueryClient = ({
  context
} = {}) => {
  const queryClient = react__WEBPACK_IMPORTED_MODULE_0__.useContext(getQueryClientContext(context, react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
const QueryClientProvider = ({
  client,
  children,
  context,
  contextSharing = false
}) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);

  if (false) {}

  const Context = getQueryClientContext(context, contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryClientSharingContext.Provider, {
    value: !context && contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: client
  }, children));
};


//# sourceMappingURL=QueryClientProvider.mjs.map


/***/ }),

/***/ 22487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useQueryErrorResetBoundary)
/* harmony export */ });
/* unused harmony export QueryErrorResetBoundary */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}

const QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(createValue()); // HOOK

const useQueryErrorResetBoundary = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryErrorResetBoundaryContext); // COMPONENT

const QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /*#__PURE__*/React.createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};


//# sourceMappingURL=QueryErrorResetBoundary.mjs.map


/***/ }),

/***/ 13110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JN: () => (/* binding */ useClearResetErrorBoundary),
/* harmony export */   KJ: () => (/* binding */ getHasError),
/* harmony export */   pf: () => (/* binding */ ensurePreventErrorBoundaryRetry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9599);
'use client';



const ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
const useClearResetErrorBoundary = errorResetBoundary => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
const getHasError = ({
  result,
  errorResetBoundary,
  useErrorBoundary,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .shouldThrowError */ .L)(useErrorBoundary, [result.error, query]);
};


//# sourceMappingURL=errorBoundaryUtils.mjs.map


/***/ }),

/***/ 29143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fb: () => (/* binding */ ensureStaleTime),
/* harmony export */   SB: () => (/* binding */ shouldSuspend),
/* harmony export */   Z$: () => (/* binding */ willFetch),
/* harmony export */   j8: () => (/* binding */ fetchOptimistic)
/* harmony export */ });
const ensureStaleTime = defaultedOptions => {
  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }
};
const willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
const shouldSuspend = (defaultedOptions, result, isRestoring) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
const fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).then(({
  data
}) => {
  defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
}).catch(error => {
  errorResetBoundary.clearReset();
  defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
});


//# sourceMappingURL=suspense.mjs.map


/***/ }),

/***/ 84233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useBaseQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41026);
/* harmony import */ var _QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65295);
/* harmony import */ var _isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87167);
/* harmony import */ var _errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13110);
/* harmony import */ var _suspense_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29143);
'use client';









function useBaseQuery(options, Observer) {
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useQueryClient */ .NL)({
    context: options.context
  });
  const isRestoring = (0,_isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useIsRestoring */ .S)();
  const errorResetBoundary = (0,_QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useQueryErrorResetBoundary */ ._)();
  const defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic'; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onSettled);
  }

  (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .ensureStaleTime */ .Fb)(defaultedOptions);
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .ensurePreventErrorBoundaryRetry */ .pf)(defaultedOptions, errorResetBoundary);
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useClearResetErrorBoundary */ .JN)(errorResetBoundary);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new Observer(queryClient, defaultedOptions));
  const result = observer.getOptimisticResult(defaultedOptions);
  (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => {
    const unsubscribe = isRestoring ? () => undefined : observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(onStoreChange)); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return unsubscribe;
  }, [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .shouldSuspend */ .SB)(defaultedOptions, result, isRestoring)) {
    throw (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .fetchOptimistic */ .j8)(defaultedOptions, observer, errorResetBoundary);
  } // Handle error boundary


  if ((0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .getHasError */ .KJ)({
    result,
    errorResetBoundary,
    useErrorBoundary: defaultedOptions.useErrorBoundary,
    query: observer.getCurrentQuery()
  })) {
    throw result.error;
  } // Handle result property usage tracking


  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}


//# sourceMappingURL=useBaseQuery.mjs.map


/***/ }),

/***/ 39333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28281);
/* harmony import */ var _useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84233);
'use client';



function useQuery(arg1, arg2, arg3) {
  const parsedOptions = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__/* .parseQueryArgs */ ._v)(arg1, arg2, arg3);
  return (0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useBaseQuery */ .r)(parsedOptions, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__/* .QueryObserver */ .z);
}


//# sourceMappingURL=useQuery.mjs.map


/***/ }),

/***/ 41026:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useSyncExternalStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9578);
'use client';


const useSyncExternalStore = use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore;


//# sourceMappingURL=useSyncExternalStore.mjs.map


/***/ }),

/***/ 9599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ shouldThrowError)
/* harmony export */ });
function shouldThrowError(_useErrorBoundary, params) {
  // Allow useErrorBoundary function to override throwing behavior on a per-error basis
  if (typeof _useErrorBoundary === 'function') {
    return _useErrorBoundary(...params);
  }

  return !!_useErrorBoundary;
}


//# sourceMappingURL=utils.mjs.map


/***/ })

}]);
//# sourceMappingURL=6751.js.map