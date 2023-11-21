"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8304],{

/***/ 34625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G6: () => (/* binding */ DecryptError)
/* harmony export */ });
/* unused harmony exports DecryptProgressKind, DecryptIntermediateProgressKind, DecryptErrorReasons */
var /** Return the cached post key for this payload. */ /**
     * Store the post key into the cache so next time it will be much faster.
     * @param key Post AES key
     */ /**
     * Checkout if the host has the local key of the given ProfileIdentifier.
     * @param author Author of this payload
     */ /**
     * Try to decrypt message by someone's localKey.
     *
     * Host must try authorHint's localKey if they have access to.
     *
     * Host may try other localKeys they owned even not listed in the authorHint.
     *
     * @param authorHint A hint for searching the localKey.
     * @param data Encrypted data
     * @param iv
     * @returns The decrypted data
     */ /**
     * If the author is null, the host should use some heuristic approach (e.g. where they found the post).
     * @param author ProfileIdentifier of the author. Might be empty.
     */ /**
     * Query the key from the gun.
     *
     * Error from this function will become a fatal error.
     */ /**
     * Query the key from the gun.
     *
     * This should be an infinite async iterator that listen to the gun network until the AbortSignal is triggered.
     *
     * Error from this function will become a fatal error.
     */ /**
     * Query the key from the gun.
     *
     * This should be an infinite async iterator that listen to the gun network until the AbortSignal is triggered.
     *
     * Error from this function will become a fatal error.
     */ /**
     * Query the key from the gun.
     *
     * This should be an infinite async iterator that listen to the gun network until the AbortSignal is triggered.
     *
     * Error from this function will become a fatal error.
     */ /**
     * Derive a group of AES key by ECDH(selfPriv, targetPub).
     *
     * Host should derive a new AES-GCM key for each private key they have access to.
     *
     * If the provided key cannot derive AES with any key (e.g. The given key is ED25519 but there is only P-256 private keys)
     * please return an empty array.
     *
     * Error from this function will become a fatal error.
     * @param publicKey The public key used in ECDH
     */ /** For the first time encryption, it might be included in the post payload. */ DecryptProgressKind;
(function(DecryptProgressKind) {
    DecryptProgressKind["Success"] = 'success';
    DecryptProgressKind["Error"] = 'error';
    DecryptProgressKind["Info"] = 'info';
    DecryptProgressKind["Progress"] = 'progress';
})(DecryptProgressKind || (DecryptProgressKind = {}));
var DecryptIntermediateProgressKind;
(function(DecryptIntermediateProgressKind) {
    DecryptIntermediateProgressKind["TryDecryptByE2E"] = 'E2E';
})(DecryptIntermediateProgressKind || (DecryptIntermediateProgressKind = {}));
var // TODO: rename as DecryptErrorReasons
DecryptErrorReasons;
(function(DecryptErrorReasons) {
    DecryptErrorReasons["PayloadBroken"] = '[@masknet/encryption] Payload is broken.';
    DecryptErrorReasons["PayloadDecryptedButTypedMessageBroken"] = "[@masknet/encryption] Payload decrypted, but it's inner TypedMessage is broken.";
    DecryptErrorReasons["CannotDecryptAsAuthor"] = '[@masknet/encryption] Failed decrypt as the author of this payload.';
    DecryptErrorReasons["DecryptFailed"] = '[@masknet/encryption] Post key found, but decryption failed.';
    DecryptErrorReasons["AuthorPublicKeyNotFound"] = "[@masknet/encryption] Cannot found author's public key";
    DecryptErrorReasons["PrivateKeyNotFound"] = '[@masknet/encryption] Cannot continue to decrypt because there is no private key found.';
    DecryptErrorReasons["NotShareTarget"] = '[@masknet/encryption] No valid key is found. Likely this post is not shared with you';
    DecryptErrorReasons[// Not used in this library.
    "UnrecognizedAuthor"] = '[@masknet/encryption] No author is recognized which is required for the image steganography decoding.';
    DecryptErrorReasons["CurrentProfileDoesNotConnectedToPersona"] = '[@masknet/encryption] Cannot decrypt by E2E because no persona is linked with the current profile.';
    DecryptErrorReasons["NoPayloadFound"] = '[@masknet/encryption] No payload found in this material.';
})(DecryptErrorReasons || (DecryptErrorReasons = {}));
class DecryptError extends Error {
    message;
    recoverable;
    static Reasons = DecryptErrorReasons;
    type;
    constructor(message, cause, recoverable = false){
        super(message, {
            cause
        });
        this.message = message;
        this.recoverable = recoverable;
        this.type = DecryptProgressKind.Error;
    }
}


/***/ }),

/***/ 46110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ef: () => (/* binding */ injectedOperaProvider),
/* harmony export */   L7: () => (/* binding */ injectedOKXProvider),
/* harmony export */   TT: () => (/* binding */ injectedCoin98EVMProvider),
/* harmony export */   ju: () => (/* binding */ injectedPhantomProvider),
/* harmony export */   mA: () => (/* binding */ injectedBrowserProvider),
/* harmony export */   pb: () => (/* binding */ injectedCoin98SolanaProvider),
/* harmony export */   r_: () => (/* binding */ injectedCoinbaseProvider),
/* harmony export */   wB: () => (/* binding */ injectedMetaMaskProvider),
/* harmony export */   yR: () => (/* binding */ injectedSolflareProvider),
/* harmony export */   yz: () => (/* binding */ injectedCloverProvider)
/* harmony export */ });
/* unused harmony exports pasteText, pasteImage, pasteInstagram, inputText, hookInputUploadOnce */
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53230);
/* harmony import */ var _Coin98_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38488);
/* harmony import */ var _Coinbase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92607);
/* harmony import */ var _OKX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37464);
/* harmony import */ var _Phantom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72297);
/* harmony import */ var _Solflare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5993);
/* harmony import */ var _Opera_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77122);
/* harmony import */ var _Clover_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51092);
/* harmony import */ var _MetaMask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13389);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35936);
/* harmony import */ var _shared_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70733);













const injectedCoin98EVMProvider = new _Coin98_js__WEBPACK_IMPORTED_MODULE_0__/* .Coin98Provider */ .v(_Coin98_js__WEBPACK_IMPORTED_MODULE_0__/* .Coin98ProviderType */ .E.EVM);
const injectedCoin98SolanaProvider = new _Coin98_js__WEBPACK_IMPORTED_MODULE_0__/* .Coin98Provider */ .v(_Coin98_js__WEBPACK_IMPORTED_MODULE_0__/* .Coin98ProviderType */ .E.Solana);
const injectedPhantomProvider = new _Phantom_js__WEBPACK_IMPORTED_MODULE_1__/* .PhantomProvider */ .p();
const injectedSolflareProvider = new _Solflare_js__WEBPACK_IMPORTED_MODULE_2__/* .SolflareProvider */ .B();
const injectedBrowserProvider = new _Browser_js__WEBPACK_IMPORTED_MODULE_3__/* .BrowserProvider */ .Q();
const injectedMetaMaskProvider = new _MetaMask_js__WEBPACK_IMPORTED_MODULE_4__/* .MetaMaskProvider */ .Y();
const injectedCoinbaseProvider = new _Coinbase_js__WEBPACK_IMPORTED_MODULE_5__/* .CoinbaseProvider */ .X();
const injectedOKXProvider = new _OKX_js__WEBPACK_IMPORTED_MODULE_6__/* .OKXProvider */ .k();
const injectedOperaProvider = new _Opera_js__WEBPACK_IMPORTED_MODULE_7__/* .OperaProvider */ .J();
const injectedCloverProvider = new _Clover_js__WEBPACK_IMPORTED_MODULE_8__/* .CloverProvider */ .u();
// Please keep this list update to date
const Providers = [
    injectedCoinbaseProvider,
    injectedOKXProvider,
    injectedOperaProvider,
    injectedCloverProvider,
    injectedBrowserProvider,
    injectedCoin98EVMProvider,
    injectedCoin98SolanaProvider,
    injectedPhantomProvider
];
function pasteText(text) {
    sendEvent('paste', text);
}
function pasteImage(image) {
    sendEvent('pasteImage', Array.from(image));
}
function pasteInstagram(image) {
    sendEvent('instagramUpload', Array.from(image));
}
function inputText(text) {
    sendEvent('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    sendEvent('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
if (typeof location === 'object' && location.protocol.includes('extension')) {
    console.warn('This package is not expected to be imported in background script or the extension script. Please check your code.');
}
globalThis.document?.addEventListener?.(_shared_index_js__WEBPACK_IMPORTED_MODULE_10__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared_index_js__WEBPACK_IMPORTED_MODULE_10__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .rejectPromise */ .Eu)(...r[1]);
        // web3
        case 'web3BridgeEmitEvent':
            {
                const [pathname, eventName, data] = r[1];
                Providers.filter((x)=>x.pathname === pathname).forEach((x)=>x?.emit(eventName, data));
                break;
            }
        case 'web3BridgeBindEvent':
        case 'web3BridgeSendRequest':
        case 'web3BridgeExecute':
        case 'web3UntilBridgeOnline':
        case 'web3BridgePrimitiveAccess':
            break;
        // misc
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 62311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ createHook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84271);
/// <reference types="react/canary" />



// Do not move or export this function.
// This function should not be encouraged to use everywhere
/**
 * @internal
 * @deprecated
 */ function createHook(f, subscribe) {
    const Request = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)((_cacheKey)=>f());
    const cacheKey = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRef */ .Xf(0);
    subscribe(()=>cacheKey.value += 1);
    return function useData() {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.use)(Request((0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__/* .useValueRef */ .E)(cacheKey)));
    };
}


/***/ }),

/***/ 73388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useAppearance)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65734);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);
/* harmony import */ var _createHook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62311);



const useAppearance = (0,_createHook_js__WEBPACK_IMPORTED_MODULE_0__/* .createHook */ .B)(_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.getTheme, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.appearanceSettings.on);


/***/ }),

/***/ 80849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65734);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);
/* harmony import */ var _createHook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62311);



const useLanguage = (0,_createHook_js__WEBPACK_IMPORTED_MODULE_0__/* .createHook */ .B)(_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.getLanguage, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.languageSettings.on);


/***/ }),

/***/ 18382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ UserContext)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2574);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54225);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);




function useUserContext() {
    const user = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PersistentStorages */ ._H.Settings.storage.backupConfig.subscription);
    const updateUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (obj)=>{
        await _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PersistentStorages */ ._H.Settings.storage.backupConfig.setValue({
            ...user,
            ...obj,
            backupPassword: obj.backupPassword ? btoa(obj.backupPassword) : user.backupPassword
        });
    }, [
        user
    ]);
    const result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        try {
            const backupPassword = user.backupPassword && atob(user.backupPassword);
            return {
                ...user,
                backupPassword
            };
        } catch  {
            // Maybe `backupPassword` is not base64-encoded.
            return user;
        }
    }, [
        user,
        updateUser
    ]);
    return {
        user: result,
        updateUser
    };
}
const UserContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_3__/* .createContainer */ .f)(useUserContext);


/***/ }),

/***/ 51018:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59637);
/* harmony import */ var _debugger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23331);
/* harmony import */ var _async_setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async_setup_js__WEBPACK_IMPORTED_MODULE_2__]);
_async_setup_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96403));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 4643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Services, GeneratorServices */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88228);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61530);
/* harmony import */ var _shared_base_src_serializer_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40464);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1749);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.




(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .assertNotEnvironment */ .BX)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .WebExtensionMessage */ .$({
    domain: '$'
});
const log = {
    type: 'pretty',
    requestReplay: "production" === 'development',
    sendLocalStack: "production" === 'development'
};
const Services = {
    Crypto: add('Crypto'),
    Identity: add('Identity'),
    Backup: add('Backup'),
    Helper: add('Helper'),
    SiteAdaptor: add('SiteAdaptor'),
    Settings: add('Settings'),
    Wallet: add('Wallet')
};
(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .setDebugObject */ .o)('Services', Services);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const GeneratorServices = add('GeneratorServices', true);
/**
 * Helper to add a new service to Services.* / GeneratorServices.* namespace.
 * @param key Name of the service. Used for better debugging.
 * @param generator Is the service is a generator?
 */ function add(key, generator = false) {
    const channel = message.events[key].bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
    const RPC = generator ? async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc : async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE;
    const service = RPC(null, {
        key,
        serializer: _shared_base_src_serializer_index_js__WEBPACK_IMPORTED_MODULE_4__/* .serializer */ .G,
        log,
        channel,
        strict: true,
        thenable: false
    });
    return service;
}


/***/ }),

/***/ 83817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);




function cleanup() {
    if (false) {}
}
function getContainer(container) {
    if (!container) container = document.getElementById('root') ?? void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    return container;
}
function Root(jsx) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ.Provider, {
            value: true,
            children: jsx
        })
    });
}
function createNormalReactRoot(jsx, dom) {
    cleanup();
    const container = getContainer(dom);
    return (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container).render(Root(jsx));
}


/***/ }),

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n7: () => (/* binding */ ObservableSet),
/* harmony export */   vP: () => (/* binding */ ObservableMap)
/* harmony export */ });
/* unused harmony export ObservableWeakMap */
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93441);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);


function tick(callback) {
    Promise.resolve().then(callback);
}
class ObservableWeakMap extends (/* unused pure expression or super */ null && (WeakMap)) {
    ALL_EVENTS = ALL_EVENTS;
    event = new Emitter();
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key));
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value));
        return _;
    }
}
class ObservableMap extends Map {
    ALL_EVENTS = _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .ALL_EVENTS */ .Ko;
    event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    _asValues;
    get asValues() {
        return this._asValues ??= this.size ? [
            ...this.values()
        ] : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
    }
    clear() {
        super.clear();
        this._asValues = undefined;
        tick(()=>this.event.emit('clear'));
    }
    delete(key) {
        const _ = super.delete(key);
        this._asValues = undefined;
        tick(()=>this.event.emit('delete', key));
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        this._asValues = undefined;
        tick(()=>this.event.emit('set', key, value));
        this.event.emit('set', key, value);
        return _;
    }
}
class ObservableSet extends Set {
    ALL_EVENTS = _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .ALL_EVENTS */ .Ko;
    event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    _asValues;
    get asValues() {
        return this._asValues ??= this.size ? [
            ...this.values()
        ] : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
    }
    clear() {
        super.clear();
        this._asValues = undefined;
        tick(()=>this.event.emit('clear'));
    }
    delete(key) {
        const _ = super.delete(key);
        this._asValues = undefined;
        tick(()=>this.event.emit('delete', key));
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x));
        this._asValues = undefined;
        this.event.emit('add', value);
        tick(()=>this.event.emit('add', value));
        return this;
    }
}


/***/ }),

/***/ 16217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ persistOptions)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-sync-storage-persister@4.35.0/node_modules/@tanstack/query-sync-storage-persister/build/lib/index.mjs
function createSyncStoragePersister({
  storage,
  key = "REACT_QUERY_OFFLINE_CACHE",
  throttleTime = 1000,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
  retry
}) {
  if (storage) {
    const trySave = persistedClient => {
      try {
        storage.setItem(key, serialize(persistedClient));
        return;
      } catch (error) {
        return error;
      }
    };

    return {
      persistClient: throttle(persistedClient => {
        let client = persistedClient;
        let error = trySave(client);
        let errorCount = 0;

        while (error && client) {
          errorCount++;
          client = retry == null ? void 0 : retry({
            persistedClient: client,
            error,
            errorCount
          });

          if (client) {
            error = trySave(client);
          }
        }
      }, throttleTime),
      restoreClient: () => {
        const cacheString = storage.getItem(key);

        if (!cacheString) {
          return;
        }

        return deserialize(cacheString);
      },
      removeClient: () => {
        storage.removeItem(key);
      }
    };
  }

  return {
    persistClient: noop,
    restoreClient: () => undefined,
    removeClient: noop
  };
}

function throttle(func, wait = 100) {
  let timer = null;
  let params;
  return function (...args) {
    params = args;

    if (timer === null) {
      timer = setTimeout(() => {
        func(...params);
        timer = null;
      }, wait);
    }
  };
} // eslint-disable-next-line @typescript-eslint/no-empty-function


function noop() {}


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./packages/shared/src/UI/contexts/localStoragePersist.ts

const persister = createSyncStoragePersister({
    storage: window.localStorage
});
// We don't persist all queries but only those have the first key starts with '@@'
const persistOptions = {
    persister,
    dehydrateOptions: {
        shouldDehydrateQuery: ({ queryKey })=>{
            if (typeof queryKey[0] !== 'string') return false;
            return queryKey[0].startsWith('@@');
        }
    }
};


/***/ }),

/***/ 59134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ TextOverflowTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70429);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60625);




// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
const TextOverflowTooltip = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children, as, ...rest })=>{
    const [overflow, ref] = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useDetectOverflow */ .s)();
    const Tooltip = as ?? _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tooltip, {
        ...rest,
        title: overflow ? rest.title : '',
        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
            ...children.props,
            ref
        })
    });
});
TextOverflowTooltip.displayName = 'TextOverflowTooltip';


/***/ }),

/***/ 57604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iH: () => (/* binding */ ref)
/* harmony export */ });
/* unused harmony exports shadowEnvironmentMountingRoots, setupReactShadowRootEnvironment */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);





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
    createRoot(globalContainer).render(/*#__PURE__*/ _jsx(StrictMode, {
        children: /*#__PURE__*/ _jsx(MountingPoint, {
            wrapJSX: wrapJSX,
            preventPropagationList: preventEventPropagationList
        })
    }));
    return portalContainer;
}
function MountingPoint(props) {
    const [children, setChildren] = useState([]);
    useEffect(()=>{
        shadowEnvironmentMountingRoots.event.on(shadowEnvironmentMountingRoots.ALL_EVENTS, ()=>{
            setChildren(Array.from(shadowEnvironmentMountingRoots.values()));
        });
    }, []);
    return /*#__PURE__*/ _jsx(PreventShadowRootEventPropagationListContext.Provider, {
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

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ useSystemPreferencePalette)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37004);

function useSystemPreferencePalette() {
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}


/***/ }),

/***/ 37911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ isReadonlyMethodType)
/* harmony export */ });
/* unused harmony export readonlyMethodType */
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24770);

const readonlyMethodType = [
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_CODE,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GAS_PRICE,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_BLOCK_NUMBER,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_BALANCE,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_BLOCK_BY_NUMBER,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_BLOCK_BY_HASH,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_TRANSACTION_BY_HASH,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_TRANSACTION_RECEIPT,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_TRANSACTION_COUNT,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_FILTER_CHANGES,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_NEW_PENDING_TRANSACTION_FILTER,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_ESTIMATE_GAS,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_CALL,
    _types_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EthereumMethodType */ .W8.ETH_GET_LOGS
];
Object.freeze(readonlyMethodType);
function isReadonlyMethodType(type) {
    return readonlyMethodType.includes(type);
}


/***/ }),

/***/ 58843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StyledEngineProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11020);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92984);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49603);



 // prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.


const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
  key: 'css',
  prepend: true
});
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C, {
    value: cache,
    children: children
  }) : children;
}
 false ? 0 : void 0;

/***/ }),

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 70486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(78996),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 49603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(70486);
} else {}


/***/ }),

/***/ 62633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ PersistQueryClientProvider)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query-persist-client@4.35.0_@tanstack+react-query@4.29.25/node_modules/@tanstack/react-query-persist-client/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.35.0/node_modules/@tanstack/query-core/build/lib/hydration.mjs
var hydration = __webpack_require__(26245);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-persist-client-core@4.35.0/node_modules/@tanstack/query-persist-client-core/build/lib/persist.mjs


/**
 * Checks if emitted event is about cache change and not about observers.
 * Useful for persist, where we only want to trigger save when cache is changed.
 */
const cacheableEventTypes = ['added', 'removed', 'updated'];

function isCacheableEventType(eventType) {
  return cacheableEventTypes.includes(eventType);
}
/**
 * Restores persisted data to the QueryCache
 *  - data obtained from persister.restoreClient
 *  - data is hydrated using hydrateOptions
 * If data is expired, busted, empty, or throws, it runs persister.removeClient
 */


async function persistQueryClientRestore({
  queryClient,
  persister,
  maxAge = 1000 * 60 * 60 * 24,
  buster = '',
  hydrateOptions
}) {
  try {
    const persistedClient = await persister.restoreClient();

    if (persistedClient) {
      if (persistedClient.timestamp) {
        const expired = Date.now() - persistedClient.timestamp > maxAge;
        const busted = persistedClient.buster !== buster;

        if (expired || busted) {
          persister.removeClient();
        } else {
          (0,hydration/* hydrate */.ZB)(queryClient, persistedClient.clientState, hydrateOptions);
        }
      } else {
        persister.removeClient();
      }
    }
  } catch (err) {
    if (false) {}

    persister.removeClient();
  }
}
/**
 * Persists data from the QueryCache
 *  - data dehydrated using dehydrateOptions
 *  - data is persisted using persister.persistClient
 */

async function persistQueryClientSave({
  queryClient,
  persister,
  buster = '',
  dehydrateOptions
}) {
  const persistClient = {
    buster,
    timestamp: Date.now(),
    clientState: (0,hydration/* dehydrate */.D)(queryClient, dehydrateOptions)
  };
  await persister.persistClient(persistClient);
}
/**
 * Subscribe to QueryCache and MutationCache updates (for persisting)
 * @returns an unsubscribe function (to discontinue monitoring)
 */

function persistQueryClientSubscribe(props) {
  const unsubscribeQueryCache = props.queryClient.getQueryCache().subscribe(event => {
    if (isCacheableEventType(event.type)) {
      persistQueryClientSave(props);
    }
  });
  const unusbscribeMutationCache = props.queryClient.getMutationCache().subscribe(event => {
    if (isCacheableEventType(event.type)) {
      persistQueryClientSave(props);
    }
  });
  return () => {
    unsubscribeQueryCache();
    unusbscribeMutationCache();
  };
}
/**
 * Restores persisted data to QueryCache and persists further changes.
 */

function persistQueryClient(props) {
  let hasUnsubscribed = false;
  let persistQueryClientUnsubscribe;

  const unsubscribe = () => {
    hasUnsubscribed = true;
    persistQueryClientUnsubscribe == null ? void 0 : persistQueryClientUnsubscribe();
  }; // Attempt restore


  const restorePromise = persistQueryClientRestore(props).then(() => {
    if (!hasUnsubscribed) {
      // Subscribe to changes in the query cache to trigger the save
      persistQueryClientUnsubscribe = persistQueryClientSubscribe(props);
    }
  });
  return [unsubscribe, restorePromise];
}


//# sourceMappingURL=persist.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/isRestoring.mjs
var lib_isRestoring = __webpack_require__(87167);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query-persist-client@4.35.0_@tanstack+react-query@4.29.25/node_modules/@tanstack/react-query-persist-client/build/lib/PersistQueryClientProvider.mjs
'use client';





const PersistQueryClientProvider = ({
  client,
  children,
  persistOptions,
  onSuccess,
  ...props
}) => {
  const [isRestoring, setIsRestoring] = react.useState(true);
  const refs = react.useRef({
    persistOptions,
    onSuccess
  });
  react.useEffect(() => {
    refs.current = {
      persistOptions,
      onSuccess
    };
  });
  react.useEffect(() => {
    let isStale = false;
    setIsRestoring(true);
    const [unsubscribe, promise] = persistQueryClient({ ...refs.current.persistOptions,
      queryClient: client
    });
    promise.then(() => {
      if (!isStale) {
        refs.current.onSuccess == null ? void 0 : refs.current.onSuccess();
        setIsRestoring(false);
      }
    });
    return () => {
      isStale = true;
      unsubscribe();
    };
  }, [client]);
  return /*#__PURE__*/react.createElement(QueryClientProvider/* QueryClientProvider */.aH, _extends({
    client: client
  }, props), /*#__PURE__*/react.createElement(lib_isRestoring/* IsRestoringProvider */.u, {
    value: isRestoring
  }, children));
};


//# sourceMappingURL=PersistQueryClientProvider.mjs.map


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

/***/ 8555:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export waitDocumentReadyState */
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);

function waitDocumentReadyState(target) {
    if (ok(target))
        return Promise.resolve();
    return new Promise((resolve) => {
        const callback = () => {
            if (ok(target)) {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, { passive: true });
    });
}
function ok(target, current = document.readyState) {
    return score(target) <= score(current);
}
function score(x) {
    if (x === 'loading')
        return 0;
    if (x === 'interactive')
        return 1;
    if (x === 'complete')
        return 2;
    unreachable(x);
}


/***/ }),

/***/ 46314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hq: () => (/* binding */ None),
/* harmony export */   bD: () => (/* binding */ Some)
/* harmony export */ });
/* unused harmony export Option */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44281);
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98096);


/**
 * Contains the None value
 */
var NoneImpl = /** @class */ (function () {
    function NoneImpl() {
    }
    NoneImpl.prototype.isSome = function () {
        return false;
    };
    NoneImpl.prototype.isNone = function () {
        return true;
    };
    NoneImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    NoneImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    NoneImpl.prototype.expect = function (msg) {
        throw new Error("".concat(msg));
    };
    NoneImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
    };
    NoneImpl.prototype.map = function (_mapper) {
        return this;
    };
    NoneImpl.prototype.mapOr = function (default_, _mapper) {
        return default_;
    };
    NoneImpl.prototype.mapOrElse = function (default_, _mapper) {
        return default_();
    };
    NoneImpl.prototype.or = function (other) {
        return other;
    };
    NoneImpl.prototype.orElse = function (other) {
        return other();
    };
    NoneImpl.prototype.andThen = function (op) {
        return this;
    };
    NoneImpl.prototype.toResult = function (error) {
        return (0,_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(error);
    };
    NoneImpl.prototype.toString = function () {
        return 'None';
    };
    return NoneImpl;
}());
// Export None as a singleton, then freeze it so it can't be modified
var None = new NoneImpl();
Object.freeze(None);
/**
 * Contains the success value
 */
var SomeImpl = /** @class */ (function () {
    function SomeImpl(val) {
        if (!(this instanceof SomeImpl)) {
            return new SomeImpl(val);
        }
        this.value = val;
    }
    SomeImpl.prototype.isSome = function () {
        return true;
    };
    SomeImpl.prototype.isNone = function () {
        return false;
    };
    /**
     * Helper function if you know you have an Some<T> and T is iterable
     */
    SomeImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.value);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    SomeImpl.prototype.unwrapOr = function (_val) {
        return this.value;
    };
    SomeImpl.prototype.expect = function (_msg) {
        return this.value;
    };
    SomeImpl.prototype.unwrap = function () {
        return this.value;
    };
    SomeImpl.prototype.map = function (mapper) {
        return Some(mapper(this.value));
    };
    SomeImpl.prototype.mapOr = function (_default_, mapper) {
        return mapper(this.value);
    };
    SomeImpl.prototype.mapOrElse = function (_default_, mapper) {
        return mapper(this.value);
    };
    SomeImpl.prototype.or = function (_other) {
        return this;
    };
    SomeImpl.prototype.orElse = function (_other) {
        return this;
    };
    SomeImpl.prototype.andThen = function (mapper) {
        return mapper(this.value);
    };
    SomeImpl.prototype.toResult = function (error) {
        return (0,_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(this.value);
    };
    /**
     * Returns the contained `Some` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Some<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the type of the Option is later changed to a None that can actually occur.
     *
     * (this is the `into_Some()` in rust)
     */
    SomeImpl.prototype.safeUnwrap = function () {
        return this.value;
    };
    SomeImpl.prototype.toString = function () {
        return "Some(".concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.value), ")");
    };
    SomeImpl.EMPTY = new SomeImpl(undefined);
    return SomeImpl;
}());
// This allows Some to be callable - possible because of the es5 compilation target
var Some = SomeImpl;
var Option;
(function (Option) {
    /**
     * Parse a set of `Option`s, returning an array of all `Some` values.
     * Short circuits with the first `None` found, if any
     */
    function all() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var someOption = [];
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.isSome()) {
                someOption.push(option.value);
            }
            else {
                return option;
            }
        }
        return Some(someOption);
    }
    Option.all = all;
    /**
     * Parse a set of `Option`s, short-circuits when an input value is `Some`.
     * If no `Some` is found, returns `None`.
     */
    function any() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        // short-circuits
        for (var _a = 0, options_2 = options; _a < options_2.length; _a++) {
            var option = options_2[_a];
            if (option.isSome()) {
                return option;
            }
            else {
                return option;
            }
        }
        // it must be None
        return None;
    }
    Option.any = any;
    function isOption(value) {
        return value instanceof Some || value === None;
    }
    Option.isOption = isOption;
})(Option || (Option = {}));


/***/ }),

/***/ 98096:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ok: () => (/* binding */ Ok),
/* harmony export */   UG: () => (/* binding */ Err),
/* harmony export */   x4: () => (/* binding */ Result)
/* harmony export */ });
/* unused harmony exports ErrImpl, OkImpl */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44281);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46314);


/**
 * Contains the error value
 */
var ErrImpl = /** @class */ (function () {
    function ErrImpl(val) {
        if (!(this instanceof ErrImpl)) {
            return new ErrImpl(val);
        }
        this.error = val;
        var stackLines = new Error().stack.split('\n').slice(2);
        if (stackLines && stackLines.length > 0 && stackLines[0].includes('ErrImpl')) {
            stackLines.shift();
        }
        this._stack = stackLines.join('\n');
    }
    ErrImpl.prototype.isOk = function () {
        return false;
    };
    ErrImpl.prototype.isErr = function () {
        return true;
    };
    ErrImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    /**
     * @deprecated in favor of unwrapOr
     * @see unwrapOr
     */
    ErrImpl.prototype.else = function (val) {
        return val;
    };
    ErrImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    ErrImpl.prototype.expect = function (msg) {
        // The cause casting required because of the current TS definition being overly restrictive
        // (the definition says it has to be an Error while it can be anything).
        // See https://github.com/microsoft/TypeScript/issues/45167
        throw new Error("".concat(msg, " - Error: ").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.error), "\n").concat(this._stack), { cause: this.error });
    };
    ErrImpl.prototype.expectErr = function (_msg) {
        return this.error;
    };
    ErrImpl.prototype.unwrap = function () {
        // The cause casting required because of the current TS definition being overly restrictive
        // (the definition says it has to be an Error while it can be anything).
        // See https://github.com/microsoft/TypeScript/issues/45167
        throw new Error("Tried to unwrap Error: ".concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.error), "\n").concat(this._stack), { cause: this.error });
    };
    ErrImpl.prototype.unwrapErr = function () {
        return this.error;
    };
    ErrImpl.prototype.map = function (_mapper) {
        return this;
    };
    ErrImpl.prototype.andThen = function (op) {
        return this;
    };
    ErrImpl.prototype.mapErr = function (mapper) {
        return new Err(mapper(this.error));
    };
    ErrImpl.prototype.mapOr = function (default_, _mapper) {
        return default_;
    };
    ErrImpl.prototype.mapOrElse = function (default_, _mapper) {
        return default_(this.error);
    };
    ErrImpl.prototype.or = function (other) {
        return other;
    };
    ErrImpl.prototype.orElse = function (other) {
        return other(this.error);
    };
    ErrImpl.prototype.toOption = function () {
        return _option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
    };
    ErrImpl.prototype.toString = function () {
        return "Err(".concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.error), ")");
    };
    Object.defineProperty(ErrImpl.prototype, "stack", {
        get: function () {
            return "".concat(this, "\n").concat(this._stack);
        },
        enumerable: false,
        configurable: true
    });
    /** An empty Err */
    ErrImpl.EMPTY = new ErrImpl(undefined);
    return ErrImpl;
}());
// This allows Err to be callable - possible because of the es5 compilation target
var Err = ErrImpl;
/**
 * Contains the success value
 */
var OkImpl = /** @class */ (function () {
    function OkImpl(val) {
        if (!(this instanceof OkImpl)) {
            return new OkImpl(val);
        }
        this.value = val;
    }
    OkImpl.prototype.isOk = function () {
        return true;
    };
    OkImpl.prototype.isErr = function () {
        return false;
    };
    /**
     * Helper function if you know you have an Ok<T> and T is iterable
     */
    OkImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.value);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    /**
     * @see unwrapOr
     * @deprecated in favor of unwrapOr
     */
    OkImpl.prototype.else = function (_val) {
        return this.value;
    };
    OkImpl.prototype.unwrapOr = function (_val) {
        return this.value;
    };
    OkImpl.prototype.expect = function (_msg) {
        return this.value;
    };
    OkImpl.prototype.expectErr = function (msg) {
        throw new Error(msg);
    };
    OkImpl.prototype.unwrap = function () {
        return this.value;
    };
    OkImpl.prototype.unwrapErr = function () {
        // The cause casting required because of the current TS definition being overly restrictive
        // (the definition says it has to be an Error while it can be anything).
        // See https://github.com/microsoft/TypeScript/issues/45167
        throw new Error("Tried to unwrap Ok: ".concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.value)), { cause: this.value });
    };
    OkImpl.prototype.map = function (mapper) {
        return new Ok(mapper(this.value));
    };
    OkImpl.prototype.andThen = function (mapper) {
        return mapper(this.value);
    };
    OkImpl.prototype.mapErr = function (_mapper) {
        return this;
    };
    OkImpl.prototype.mapOr = function (_default_, mapper) {
        return mapper(this.value);
    };
    OkImpl.prototype.mapOrElse = function (_default_, mapper) {
        return mapper(this.value);
    };
    OkImpl.prototype.or = function (_other) {
        return this;
    };
    OkImpl.prototype.orElse = function (_other) {
        return this;
    };
    OkImpl.prototype.toOption = function () {
        return (0,_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.value);
    };
    /**
     * Returns the contained `Ok` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Ok<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the error type of the Result is later changed to an error that can actually occur.
     *
     * (this is the `into_ok()` in rust)
     */
    OkImpl.prototype.safeUnwrap = function () {
        return this.value;
    };
    OkImpl.prototype.toString = function () {
        return "Ok(".concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.value), ")");
    };
    OkImpl.EMPTY = new OkImpl(undefined);
    return OkImpl;
}());
// This allows Ok to be callable - possible because of the es5 compilation target
var Ok = OkImpl;
var Result;
(function (Result) {
    /**
     * Parse a set of `Result`s, returning an array of all `Ok` values.
     * Short circuits with the first `Err` found, if any
     */
    function all() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var okResult = [];
        for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
            var result = results_1[_a];
            if (result.isOk()) {
                okResult.push(result.value);
            }
            else {
                return result;
            }
        }
        return new Ok(okResult);
    }
    Result.all = all;
    /**
     * Parse a set of `Result`s, short-circuits when an input value is `Ok`.
     * If no `Ok` is found, returns an `Err` containing the collected error values
     */
    function any() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var errResult = [];
        // short-circuits
        for (var _a = 0, results_2 = results; _a < results_2.length; _a++) {
            var result = results_2[_a];
            if (result.isOk()) {
                return result;
            }
            else {
                errResult.push(result.error);
            }
        }
        // it must be a Err
        return new Err(errResult);
    }
    Result.any = any;
    /**
     * Wrap an operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrap(op) {
        try {
            return new Ok(op());
        }
        catch (e) {
            return new Err(e);
        }
    }
    Result.wrap = wrap;
    /**
     * Wrap an async operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrapAsync(op) {
        try {
            return op()
                .then(function (val) { return new Ok(val); })
                .catch(function (e) { return new Err(e); });
        }
        catch (e) {
            return Promise.resolve(new Err(e));
        }
    }
    Result.wrapAsync = wrapAsync;
    function isResult(val) {
        return val instanceof Err || val instanceof Ok;
    }
    Result.isResult = isResult;
})(Result || (Result = {}));


/***/ })

}]);
//# sourceMappingURL=8304.js.map