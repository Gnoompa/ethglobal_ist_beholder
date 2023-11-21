"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2402],{

/***/ 1197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ createHostAPIs)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61530);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88228);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59429);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50139);


function createHostAPIs(isBackground) {
    return {
        async getPluginList () {
            const plugins = await fetch(browser.runtime.getURL('/sandboxed-modules/plugins.json')).then((x)=>x.json()).catch(()=>({}));
            // TODO: validate type of plugins here
            return Object.entries(plugins);
        },
        async fetchManifest (id, isLocal) {
            const prefix = isLocal ? 'local-plugin' : 'plugin';
            const manifestPath = `/sandboxed-modules/${prefix}-${id}/mask-manifest.json`;
            const manifestURL = new URL(manifestPath, location.href);
            if (manifestURL.pathname !== manifestPath) throw new TypeError('Plugin ID is invalid.');
            return fetch(browser.runtime.getURL(manifestPath)).then((x)=>x.json());
        },
        async fetchLocaleFiles (id, isLocal, languages) {
            const prefix = isLocal ? 'local-plugin' : 'plugin';
            const result = await Promise.allSettled(languages.map(async ({ url, language })=>{
                const locales = await fetch(browser.runtime.getURL(`/sandboxed-modules/${prefix}-${id}/${url}`));
                return {
                    language,
                    locales: await locales.json()
                };
            }));
            const locales = {};
            for (const _ of result){
                if (_.status === 'rejected') continue;
                locales[_.value.language] = _.value.locales;
            }
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createI18NBundle */ .C)(id, locales)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .i18NextInstance */ .BV);
        },
        // TODO: support signal
        createRpcChannel (id) {
            return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .WebExtensionMessage */ .$({
                domain: `mask-plugin-${id}-rpc`
            }).events.f.bind(isBackground ? _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .MessageTarget */ .T.Broadcast : _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__/* .Environment */ .qA.ManifestBackground);
        },
        // TODO: support signal
        createRpcGeneratorChannel (id) {
            return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .WebExtensionMessage */ .$({
                domain: `mask-plugin-${id}-rpc`
            }).events.g.bind(isBackground ? _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .MessageTarget */ .T.Broadcast : _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__/* .Environment */ .qA.ManifestBackground);
        }
    };
}


/***/ }),

/***/ 28780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ hmr)
/* harmony export */ });
function hmr(hot) {
    const ac = new AbortController();
    hot?.dispose(()=>ac.abort());
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback(), {
                    once: true
                });
            } catch (error) {
                console.error(error);
            }
        }
    };
}


/***/ }),

/***/ 46762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ addPeerDependencies)
});

// UNUSED EXPORTS: addCompatibilityModuleAlias

// NAMESPACE OBJECT: ./packages/typed-message/base/src/index.ts
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, {
  FlattenTypedMessage: () => (Flatten/* FlattenTypedMessage */.p),
  ParseLinkTransformer: () => (ParseLink/* ParseLinkTransformer */.a),
  composeTransformers: () => (composed/* composeTransformers */.g),
  createTransformationContext: () => (context/* createTransformationContext */.L),
  decodeTypedMessageFromDeprecatedFormat: () => (deprecated_encode/* decodeTypedMessageV38ToV40Format */.W),
  decodeTypedMessageFromDocument: () => (decode/* decodeTypedMessageFromDocument */.A),
  emptyTransformationContext: () => (context/* emptyTransformationContext */.v),
  encodeTypedMessageToDeprecatedFormat: () => (deprecated_encode/* encodeTypedMessageV38Format */.H),
  encodeTypedMessageToDocument: () => (encode/* encodeTypedMessageToDocument */.F),
  extractImageFromTypedMessage: () => (extract/* extractImageFromTypedMessage */.j),
  extractTextFromTypedMessage: () => (extract/* extractTextFromTypedMessage */.V),
  forEachTypedMessageChild: () => (forEachChild/* forEachTypedMessageChild */.s),
  isCoreTypedMessages: () => (isCoreTypedMessages),
  isNonSerializableTypedMessageWithAlt: () => (utils/* isNonSerializableTypedMessageWithAlt */.c3),
  isSerializableTypedMessage: () => (utils/* isSerializableTypedMessage */.fV),
  isTypedMessageAnchor: () => (extension_anchor/* isTypedMessageAnchor */.b),
  isTypedMessageEmpty: () => (empty/* isTypedMessageEmpty */.Y),
  isTypedMessageEqual: () => (utils/* isTypedMessageEqual */.Hz),
  isTypedMessageImage: () => (core_image/* isTypedMessageImage */.c),
  isTypedMessageMaskPayload: () => (MaskPayload/* isTypedMessageMaskPayload */.$),
  isTypedMessagePromise: () => (promise/* isTypedMessagePromise */.K),
  isTypedMessageText: () => (core_text/* isTypedMessageText */.Rz),
  isTypedMessageTextV1: () => (core_text/* isTypedMessageTextV1 */.Po),
  isTypedMessageTuple: () => (tuple/* isTypedMessageTuple */.bZ),
  isTypedMessageTupleSerializable: () => (tuple/* isTypedMessageTupleSerializable */.qT),
  isTypedMessageUnknown: () => (unknown/* isTypedMessageUnknown */.q),
  isWellKnownExtensionTypedMessages: () => (extension/* isWellKnownExtensionTypedMessages */.SY),
  isWellKnownTypedMessages: () => (isWellKnownTypedMessages),
  makeTypedMessageAnchor: () => (extension_anchor/* makeTypedMessageAnchor */.J),
  makeTypedMessageEmpty: () => (empty/* makeTypedMessageEmpty */.W),
  makeTypedMessageImage: () => (core_image/* makeTypedMessageImage */.a),
  makeTypedMessageMaskPayload: () => (MaskPayload/* makeTypedMessageMaskPayload */.J),
  makeTypedMessagePromise: () => (promise/* makeTypedMessagePromise */.N),
  makeTypedMessageSerializableTupleFromList: () => (tuple/* makeTypedMessageSerializableTupleFromList */.h6),
  makeTypedMessageText: () => (core_text/* makeTypedMessageText */.P),
  makeTypedMessageTuple: () => (tuple/* makeTypedMessageTuple */.Zw),
  makeTypedMessageTupleFromList: () => (tuple/* makeTypedMessageTupleFromList */.n_),
  makeTypedMessageTupleSerializable: () => (tuple/* makeTypedMessageTupleSerializable */.kT),
  makeTypedMessageUnknown: () => (unknown/* makeTypedMessageUnknown */.m),
  unstable_STYLE_META: () => (extension/* unstable_STYLE_META */.RZ),
  visitEachTypedMessageChild: () => (visitEachChild/* visitEachTypedMessageChild */.I)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./packages/base/src/Identifier/base.ts
var base = __webpack_require__(12247);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post.ts
var post = __webpack_require__(82654);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post-iv.ts
var post_iv = __webpack_require__(97039);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/empty.ts
var empty = __webpack_require__(40048);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/unknown.ts
var unknown = __webpack_require__(18063);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/tuple.ts
var tuple = __webpack_require__(17425);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/image.ts
var core_image = __webpack_require__(93349);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/promise.ts
var promise = __webpack_require__(61111);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/internal.ts
var internal = __webpack_require__(31072);
;// CONCATENATED MODULE: ./packages/typed-message/base/src/core/index.ts













const isCoreTypedMessages = (0,internal/* composeSome */.Vm)(empty/* isTypedMessageEmpty */.Y, core_text/* isTypedMessageText */.Rz, core_image/* isTypedMessageImage */.c, tuple/* isTypedMessageTuple */.bZ, unknown/* isTypedMessageUnknown */.q, promise/* isTypedMessagePromise */.K);

// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/index.ts
var extension = __webpack_require__(93949);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/anchor.ts
var extension_anchor = __webpack_require__(43458);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/MaskPayload.ts
var MaskPayload = __webpack_require__(76350);
// EXTERNAL MODULE: ./packages/typed-message/base/src/binary-encode/decode.ts
var decode = __webpack_require__(91322);
// EXTERNAL MODULE: ./packages/typed-message/base/src/binary-encode/encode.ts
var encode = __webpack_require__(58098);
// EXTERNAL MODULE: ./packages/typed-message/base/src/deprecated-encode/index.ts
var deprecated_encode = __webpack_require__(29642);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/index.ts
var utils = __webpack_require__(41840);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/typed-message/base/src/visitor/forEachChild.ts
var forEachChild = __webpack_require__(30688);
// EXTERNAL MODULE: ./packages/typed-message/base/src/visitor/visitEachChild.ts
var visitEachChild = __webpack_require__(30919);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/context.ts
var context = __webpack_require__(94553);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/composed.ts
var composed = __webpack_require__(66243);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/Flatten.ts
var Flatten = __webpack_require__(76714);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/ParseLink.ts
var ParseLink = __webpack_require__(89434);
;// CONCATENATED MODULE: ./packages/typed-message/base/src/index.ts










const isWellKnownTypedMessages = (0,internal/* composeSome */.Vm)(isCoreTypedMessages, extension/* isWellKnownExtensionTypedMessages */.SY);

;// CONCATENATED MODULE: ./packages/sandboxed-plugin-runtime/src/peer-dependencies/index.ts



function addPeerDependencies(runtime) {
    runtime.addNamespaceModule('ts-results-es', esm);
    runtime.addNamespaceModule('@masknet/typed-message', src_namespaceObject);
    runtime.addReExportModule('@masknet/base', {
        exportAllFrom: '@masknet/base/identifier.js'
    });
    runtime.addNamespaceModule('@masknet/base/identifier.js', {
        Identifier: base/* Identifier */.x,
        PostIdentifier: post/* PostIdentifier */._,
        ECKeyIdentifier: ec_key/* ECKeyIdentifier */.o,
        ProfileIdentifier: profile/* ProfileIdentifier */.W,
        PostIVIdentifier: post_iv/* PostIVIdentifier */.b
    });
    runtime.addReExportAllModule('@masknet/plugin', [
        '@masknet/plugin/utils'
    ]);
    runtime.addReExportAllModule('@masknet/plugin/utils', [
        '@masknet/plugin/utils/rpc'
    ]);
    runtime.addReExportAllModule('@masknet/plugin/ui', [
        //
        '@masknet/plugin/ui/showSnackbar',
        '@masknet/plugin/ui/open'
    ]);
}
function addCompatibilityModuleAlias(runtime) {
    runtime.addReExportModule('@masknet/shared-base', {
        exportAllFrom: '@masknet/base'
    });
}


/***/ }),

/***/ 1951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ PluginRunner)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);

class PluginRunner {
    hooks;
    allowLocalOverrides;
    signal;
    constructor(hooks, allowLocalOverrides, signal = new AbortController().signal){
        this.hooks = hooks;
        this.allowLocalOverrides = allowLocalOverrides;
        this.signal = signal;
        this.plugins = new Map();
        this.pluginList = new Map();
        this.__builtInPluginInfraBridgeCallback__ = undefined;
        signal.throwIfAborted();
        signal.addEventListener('abort', ()=>{
            for (const id of this.plugins.keys())this.stopPlugin(id);
        }, {
            once: true
        });
    }
    plugins;
    pluginList;
    getPluginInstance(id) {
        return this.plugins.get(id);
    }
    __builtInPluginInfraBridgeCallback__;
    *iteratePluginInstance() {
        for (const [instance] of this.plugins.values())yield instance;
    }
    async onPluginListUpdate() {
        const list = new Map(await this.hooks.getPluginList());
        this.pluginList = list;
        for (const [id] of list)this.__builtInPluginInfraBridgeCallback__?.(id);
    }
    async init_unbridged() {
        const list = this.pluginList;
        for (const [id, [, isLocal]] of this.plugins){
            // Stop plugin if they disappeared from the new list.
            if (!list.has(id)) this.stopPlugin(id);
            else // Stop plugin if it is loaded with a different profile (local to formal or reverse)
            if (list.get(id).local && !isLocal || list.get(id).normal && isLocal) this.stopPlugin(id);
        }
        // start new plugin
        // TODO: check plugin start condition before call start
        // TODO: start plugin in dependency DFS order?
        for (const [id, data] of list){
            if (this.plugins.has(id)) continue;
            const abort = new AbortController();
            const isLocal = !!(data.local && this.allowLocalOverrides);
            this.hooks.fetchLocaleFiles(id, isLocal, this.pluginList.get(id)?.locales ?? []);
            this.startPluginInner(id, isLocal, abort.signal, abort.abort.bind(abort));
        }
    }
    async startPlugin_bridged(id, signal) {
        const abort = new AbortController();
        const isLocal = !!(this.pluginList.get(id).local && this.allowLocalOverrides);
        this.hooks.fetchLocaleFiles(id, isLocal, this.pluginList.get(id)?.locales ?? []);
        await this.startPluginInner(id, isLocal, (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .combineAbortSignal */ .dq)(abort.signal, signal), abort.abort.bind(abort));
        return this.plugins.get(id);
    }
    async startPluginInner(id, isLocal, signal, abortFunction) {
        this.signal.throwIfAborted();
        // TODO: setup a module & fetch alias from normal version to local version
        const instance = await this.HostStartPlugin(id, isLocal, signal);
        this.plugins.set(id, [
            instance,
            isLocal,
            abortFunction
        ]);
    }
    stopPlugin(id) {
        // TODO: stop plugin in dependency DFS order?
        if (!this.plugins.has(id)) return;
        const [, , abort] = this.plugins.get(id);
        abort();
        this.plugins.delete(id);
    }
}


/***/ }),

/***/ 55895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ PluginRuntime)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+compartment@0.4.2/node_modules/@masknet/compartment/dist/bundle.js
var bundle = __webpack_require__(66816);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+membrane@0.1.5/node_modules/@masknet/membrane/dist/index.js + 3 modules
var dist = __webpack_require__(32912);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+web-endowments@0.1.1/node_modules/@masknet/web-endowments/dist/timers.js
function createTimers(abortSignal, originalTimes = {
    requestAnimationFrame,
    cancelAnimationFrame,
    requestIdleCallback: typeof requestIdleCallback === 'function' ? requestIdleCallback : undefined,
    cancelIdleCallback: typeof cancelIdleCallback === 'function' ? cancelIdleCallback : undefined,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    queueMicrotask,
}) {
    const { requestAnimationFrame: _requestAnimationFrame, cancelAnimationFrame: _cancelAnimationFrame, setInterval: _setInterval, clearInterval: _clearInterval, setTimeout: _setTimeout, clearTimeout: _clearTimeout, cancelIdleCallback: _cancelIdleCallback, requestIdleCallback: _requestIdleCallback, queueMicrotask: _queueMicrotask, } = originalTimes;
    const interval_timer_id = [];
    const idle_id = [];
    const raf_id = [];
    abortSignal.addEventListener('abort', () => {
        raf_id.forEach(_cancelAnimationFrame);
        interval_timer_id.forEach(_clearInterval);
        _cancelIdleCallback && idle_id.forEach(_cancelIdleCallback);
    }, { once: true });
    return {
        // id is a positive number, it never repeats.
        requestAnimationFrame(callback) {
            raf_id[raf_id.length] = _requestAnimationFrame(callback);
            return raf_id.length;
        },
        cancelAnimationFrame(handle) {
            const id = raf_id[handle - 1];
            if (!id)
                return;
            _cancelAnimationFrame(id);
        },
        setInterval(handler, timeout) {
            interval_timer_id[interval_timer_id.length] = _setInterval(...arguments);
            return interval_timer_id.length;
        },
        clearInterval(id) {
            if (!id)
                return;
            const handle = interval_timer_id[id - 1];
            if (!handle)
                return;
            _clearInterval(handle);
        },
        setTimeout(handler, timeout) {
            idle_id[idle_id.length] = _setTimeout(...arguments);
            return idle_id.length;
        },
        clearTimeout(id) {
            if (!id)
                return;
            const handle = idle_id[id - 1];
            if (!handle)
                return;
            _clearTimeout(handle);
        },
        requestIdleCallback: _requestIdleCallback
            ? function requestIdleCallback(callback, options) {
                idle_id[idle_id.length] = _requestIdleCallback(callback, options);
                return idle_id.length;
            }
            : undefined,
        cancelIdleCallback: _cancelIdleCallback
            ? function cancelIdleCallback(handle) {
                const id = idle_id[handle - 1];
                if (!id)
                    return;
                _cancelIdleCallback(id);
            }
            : undefined,
        queueMicrotask(callback) {
            _queueMicrotask(() => abortSignal.aborted || callback());
        },
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+web-endowments@0.1.1/node_modules/@masknet/web-endowments/dist/fetch.js
function createFetch(options) {
    const { fetch: _fetch = fetch, signal, rewriteURL, replaceRequest, replaceResponse, canConnect, normalizeURL, } = options;
    return async function fetch(input, init) {
        let request = new Request(input, {
            ...init,
            signal: getMergedSignal(init?.signal, signal) || null,
        });
        if (normalizeURL)
            request = new Request(normalizeURL(request.url), request);
        if (canConnect && !(await canConnect(request.url)))
            throw new TypeError('Failed to fetch');
        if (rewriteURL)
            request = new Request(rewriteURL(request.url, 'out'), request);
        if (replaceRequest)
            request = await replaceRequest(request);
        let response = await _fetch(request);
        if (rewriteURL) {
            const { url, redirected, type } = response;
            // Note: Response constructor does not allow us to set the url of a response.
            //       we have to define the own property on it. This is not a good simulation.
            //       To prevent get the original url by Response.prototype.[[get url]].call(response)
            //       we copy a response and set it's url to empty.
            response = new Response(response.body, response);
            Object.defineProperties(response, {
                url: { value: url, configurable: true },
                redirected: { value: redirected, configurable: true },
                type: { value: type, configurable: true },
            });
            Object.defineProperty(response, 'url', {
                configurable: true,
                value: rewriteURL(url, 'in'),
            });
        }
        if (replaceResponse)
            response = await replaceResponse(response);
        return response;
    };
}
function getMergedSignal(signal, signal2) {
    if (!signal)
        return signal2;
    if (!signal2)
        return signal;
    const abortController = new AbortController();
    signal.addEventListener('abort', () => abortController.abort(), { once: true });
    signal2.addEventListener('abort', () => abortController.abort(), { once: true });
    return abortController.signal;
}

;// CONCATENATED MODULE: ./packages/sandboxed-plugin-runtime/src/runtime/global.ts



function createGlobal(pluginID, manifest, signal) {
    const { proxy: localThis, revoke } = Proxy.revocable((0,bundle/* makeGlobalThis */.Df)(Object.prototype), {});
    signal.addEventListener('abort', revoke, {
        once: true
    });
    // Note: move it to elsewhere
    // Note: reenable this after https://github.com/facebook/react/pull/25198/files
    // if (typeof harden === 'function') harden(console)
    const endowments = {
        AbortController,
        AbortSignal,
        Blob,
        CustomEvent,
        DOMException,
        Crypto,
        CryptoKey,
        Event,
        EventTarget,
        File,
        FileReader,
        FormData,
        Headers,
        IdleDeadline,
        ReadableStream,
        ReadableStreamDefaultController,
        ReadableStreamDefaultReader,
        ReadableStreamBYOBReader,
        ReadableStreamBYOBRequest,
        ReadableByteStreamController,
        Request,
        Response,
        SubtleCrypto,
        TextDecoder,
        TextDecoderStream,
        TextEncoder,
        TextEncoderStream,
        // TODO: provide a custom-scheme friendly URL constructor?
        URL,
        URLSearchParams,
        WebAssembly,
        WritableStream,
        WritableStreamDefaultController,
        WritableStreamDefaultWriter,
        crypto,
        atob,
        btoa,
        ...createTimers(signal),
        fetch: createFetch({
            signal,
            canConnect (url) {
                if (new URL(url).protocol.endsWith('-extension:')) return false;
                // TODO: add content security policy
                return true;
            }
        })
    };
    // rewriteURL:
    // TODO: support rewrite URL of mask-modules
    // normalizeURL:
    // TODO: support normalize relative URL
    const membrane = (0,dist/* default */.Z)(globalThis, localThis, {
        endowments: Object.getOwnPropertyDescriptors(endowments)
    });
    // distortionCallback: (o) => (o === globalThis ? localThis : o),
    // Note: the membrane library will replace all intrinsic with the link to the blueRealm
    // we need to avoid it.
    if (typeof window === 'object') Object.defineProperty(localThis, 'window', {
        value: localThis
    });
    Object.defineProperties(localThis, {
        self: {
            value: localThis,
            configurable: true,
            writable: true
        },
        globalThis: {
            value: localThis,
            configurable: true,
            writable: true
        },
        console: {
            value: console,
            configurable: true,
            writable: true
        }
    });
    membrane.virtualEnvironment.link('console');
    return {
        localThis,
        membrane
    };
}

;// CONCATENATED MODULE: ./packages/sandboxed-plugin-runtime/src/runtime/runtime.ts
/// <reference types="@masknet/global-types/module-loader" />


class PluginRuntime {
    origin;
    constructor(id, origin, manifest, signal){
        this.origin = origin;
        this.#moduleMap = new Map();
        this.// internals
        #instanceFromURL = new Map();
        const { localThis, membrane } = createGlobal(id, manifest, signal);
        Object.defineProperty(this, 'id', {
            value: id
        });
        this.globalThis = membrane.execute(()=>localThis);
        this.#membrane = membrane;
        this.#signal = signal;
        this.#Module = new bundle/* Evaluators */.K$({
            globalThis: localThis
        }).Module;
    }
    async imports(specifier) {
        const module = await this.#importHook(undefined, specifier);
        // Note: moduleNamespace is a Blue::Promise<Red::ModuleNamespace>
        //       and it might become a Blue::Promise<Red::any> if there is a "then()" method defined.
        const moduleNamespace = await (0,bundle/* imports */.o0)(module);
        return this.#membrane.execute(()=>moduleNamespace);
    }
    globalThis;
    #moduleMap;
    addReExportModule(moduleName, ...bindings) {
        if (this.#moduleMap.has(moduleName)) throw new TypeError('Module is already defined.');
        this.#moduleMap.set(moduleName, {
            bindings
        });
    }
    addReExportAllModule(moduleName, from) {
        this.#moduleMap.set(moduleName, {
            bindings: from.map((x)=>({
                    exportAllFrom: x
                }))
        });
    }
    addNamespaceModule(moduleName, blueNamespace) {
        if (this.#moduleMap.has(moduleName)) throw new TypeError('Module is already defined.');
        const keys = Object.keys(blueNamespace);
        this.#moduleMap.set(moduleName, {
            bindings: keys.map((key)=>({
                    export: key
                })),
            execute: (redEnvironment)=>{
                function copyNamespace(redNamespace) {
                    for (const k of keys)redEnvironment[k] = redNamespace[k];
                }
                Object.freeze(copyNamespace);
                this.#membrane.execute(()=>copyNamespace)(blueNamespace);
            }
        });
    }
    #instanceFromURL;
    async #loadHook(specifier, referral) {
        if (!specifier.startsWith('.') && !specifier.startsWith('mask-modules://')) {
            if (this.#moduleMap.has(specifier)) return {
                normalizedURL: specifier,
                source: this.#moduleMap.get(specifier)
            };
            else throw new SyntaxError(`Module not found: ${specifier}`);
        }
        // normalize URL
        const target = new URL(specifier, referral?.includes('://') ? referral : undefined);
        const oldProtocol = target.protocol;
        target.protocol = 'https:';
        target.protocol = oldProtocol;
        const normalizedURL = target.href;
        if (oldProtocol === 'mask-modules:' && !normalizedURL.startsWith('mask-modules://' + this.origin + '/')) {
            throw new SyntaxError('Import from other plugin is not supported. Try to import: ' + normalizedURL);
        }
        const source = await __mask__module__reflection__(normalizedURL);
        return {
            normalizedURL,
            source
        };
    }
    async #importHook(referral, specifier) {
        this.#signal.throwIfAborted();
        const { normalizedURL, source } = await this.#loadHook(specifier, referral);
        if (this.#instanceFromURL.has(normalizedURL)) return this.#instanceFromURL.get(normalizedURL);
        const instance = new this.#Module(source, {
            importHook: this.#importHook.bind(this, normalizedURL),
            importMetaHook: source.needsImportMeta ? (meta)=>Object.assign(meta, {
                    url: normalizedURL
                }) : undefined
        });
        this.#instanceFromURL.set(normalizedURL, instance);
        return instance;
    }
    #signal;
    #Module;
    #membrane;
}


/***/ }),

/***/ 45549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ isManifest)
/* harmony export */ });
function isManifest(_manifest) {
    // TODO: validate with JSON schema mask-plugin-infra /packages/manifest/plugin.schema.json
    return true;
} // TODO: Those type definitions should be moved to mask-plugin-infra /packages/manifest/manifest.d.ts


/***/ }),

/***/ 54217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getURL)
/* harmony export */ });
function getURL(id, path, isLocal) {
    const pluginOrigin = (isLocal ? 'local-plugin-' : 'plugin-') + id;
    const u = new URL(path, 'https://' + pluginOrigin);
    u.protocol = 'mask-modules:';
    return u.toString();
}


/***/ }),

/***/ 91322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ decodeTypedMessageFromDocument)
/* harmony export */ });
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49990);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86025);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18063);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17425);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55739);




const HEAD = '[@masknet/typed-message] ';
function decodeTypedMessageFromDocument(bin) {
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrap(()=>{
        const doc = (0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx)(bin);
        if (!Array.isArray(doc)) throw new Error(`${HEAD}Invalid document`);
        if (doc[0] === 0) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageText */ .P)(doc[1], decodeMetadata(doc[2]));
        const [docVer, ...message] = doc;
        if (typeof docVer !== 'number') throw new Error(`${HEAD}Invalid document`);
        if (docVer !== 1) throw new Error(`${HEAD}Unknown document version`);
        const result = decodeTypedMessage(message);
        fixU8Array(result);
        return result;
    });
}
function decodeTypedMessage(tm) {
    const [type] = tm;
    if (typeof type !== 'string' && typeof type !== 'number') throw new TypeError(`${HEAD}Invalid TypedMessage`);
    if (type === _type_js__WEBPACK_IMPORTED_MODULE_3__/* .TypedMessageBinaryEncodingTypeEnum */ .M.Text) return decodeTypedMessageText(tm);
    if (type === _type_js__WEBPACK_IMPORTED_MODULE_3__/* .TypedMessageBinaryEncodingTypeEnum */ .M.Tuple) return decodeTypedMessageTuple(tm);
    return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_4__/* .makeTypedMessageUnknown */ .m)(tm);
}
function decodeTypedMessageText([, version, meta, text, format]) {
    assertNumber(version);
    assertString(text);
    return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageText */ .P)(text, decodeMetadata(meta));
}
function decodeTypedMessageTuple([, version, meta, items]) {
    assertNumber(version);
    if (!Array.isArray(items)) throw new TypeError(`${HEAD}Invalid TypedMessageTuple`);
    return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_5__/* .makeTypedMessageTuple */ .Zw)(items.map(decodeTypedMessage), decodeMetadata(meta));
}
function decodeMetadata(meta) {
    if (meta === null) return undefined;
    if (typeof meta !== 'object') throw new TypeError(`${HEAD}Invalid TypedMessage`);
    if (Object.getPrototypeOf(meta) !== Object.prototype) throw new TypeError(`${HEAD}Invalid TypedMessage`);
    return new Map(Object.entries(meta));
}
function assertNumber(x) {
    if (typeof x !== 'number') throw new TypeError(`${HEAD}Invalid TypedMessage`);
}
function assertString(x) {
    if (typeof x !== 'string') throw new TypeError(`${HEAD}Invalid TypedMessage`);
}
// Detach Uint8Array from it's underlying buffer
function fixU8Array(input) {
    // for Array and object
    if (typeof input !== 'object' || input === undefined || input === null) return;
    for (const key of Object.keys(input)){
        const value = Reflect.get(input, key);
        if (value instanceof Uint8Array) {
            Reflect.set(input, key, value.slice());
        } else {
            fixU8Array(value);
        }
    }
}


/***/ }),

/***/ 58098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ encodeTypedMessageToDocument)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86025);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17425);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26004);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55739);



const HEAD = '[@masknet/typed-message] ';
function encodeTypedMessageToDocument(tm) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(tm)) return (0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__/* .encode */ .c)([
        0,
        tm.content,
        encodeMeta(tm)
    ]);
    const doc = [
        1,
        ...encodeTypedMessage(tm)
    ];
    return (0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__/* .encode */ .c)(doc);
}
function encodeTypedMessage(tm) {
    if (tm.serializable === false) {
        if (tm.alt) return encodeTypedMessage(tm.alt);
        throw new TypeError(`${HEAD}TypedMessage ${tm.type} does not support serialization.`);
    }
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(tm)) return encodeTypedMessageText(tm);
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageTupleSerializable */ .qT)(tm)) return encodeTypedMessageTuple(tm);
    throw new TypeError(`${HEAD}Unsupported TypedMessage ${tm.type} to be serialized.`);
}
function encodeTypedMessageText(tm) {
    // TODO: TextFormat
    return [
        _type_js__WEBPACK_IMPORTED_MODULE_3__/* .TypedMessageBinaryEncodingTypeEnum */ .M.Text,
        tm.version,
        encodeMeta(tm),
        tm.content
    ];
}
function encodeTypedMessageTuple(tm) {
    return [
        _type_js__WEBPACK_IMPORTED_MODULE_3__/* .TypedMessageBinaryEncodingTypeEnum */ .M.Tuple,
        tm.version,
        encodeMeta(tm),
        tm.items.map(encodeTypedMessage)
    ];
}
function encodeMeta(tm) {
    if (!tm.meta) return null;
    const record = {
        __proto__: null
    };
    for (const [key, val] of tm.meta){
        if (typeof key !== 'string') continue;
        if (typeof val === 'undefined') continue;
        try {
            record[key] = collectValue(val);
        } catch (err) {
            console.warn(`${HEAD}key ${key} is dropped due to the error`, err);
        }
    }
    return record;
}
function collectValue(val) {
    try {
        const type = typeof val;
        if (val === undefined) {
            console.warn(`${HEAD}undefined converted to null.`);
            return null;
        }
        if (type === 'number' || val === null || type === 'boolean' || type === 'string') return val;
        if (type === 'bigint' || type === 'function' || type === 'symbol') {
            throw new TypeError(`${HEAD}Unsupported type ${type}`);
        }
        if (val instanceof Uint8Array) return new Uint8Array(val);
        if (val instanceof ArrayBuffer) {
            throw new TypeError(`${HEAD}ArrayBuffer must be Uint8Array.`);
        }
        if (Array.isArray(val)) return Array.from(val).map(collectValue);
        const proto = Object.getPrototypeOf(val);
        if (proto !== Object.prototype && proto !== null) {
            throw new TypeError(`${HEAD}unsupported value with a non trivial prototype.`);
        }
        const result = {};
        for (const key of Object.keys(val)){
            const v = val[key];
            result[key] = collectValue(v);
        }
        return result;
    } catch (err) {
        console.warn(HEAD, 'When converting value', val, ', an error occurred', err);
        throw err;
    }
}


/***/ }),

/***/ 55739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ TypedMessageBinaryEncodingTypeEnum)
/* harmony export */ });
var /** @internal */ TypedMessageBinaryEncodingTypeEnum;
(function(TypedMessageBinaryEncodingTypeEnum) {
    TypedMessageBinaryEncodingTypeEnum[TypedMessageBinaryEncodingTypeEnum["Tuple"] = 0] = "Tuple";
    TypedMessageBinaryEncodingTypeEnum[TypedMessageBinaryEncodingTypeEnum["Text"] = 1] = "Text";
})(TypedMessageBinaryEncodingTypeEnum || (TypedMessageBinaryEncodingTypeEnum = {}));


/***/ }),

/***/ 40048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ makeTypedMessageEmpty),
/* harmony export */   Y: () => (/* binding */ isTypedMessageEmpty)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

const isTypedMessageEmpty = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('empty');
let empty;
function makeTypedMessageEmpty() {
    if (empty) return empty;
    empty = {
        type: 'empty',
        serializable: true,
        version: 1,
        meta: undefined
    };
    Object.setPrototypeOf(empty, null);
    Object.freeze(empty);
    return empty;
}


/***/ }),

/***/ 93349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 18063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ makeTypedMessageUnknown),
/* harmony export */   q: () => (/* binding */ isTypedMessageUnknown)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** The unrecognized data */ const isTypedMessageUnknown = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('unknown');
function makeTypedMessageUnknown(raw) {
    return {
        type: 'unknown',
        serializable: false,
        meta: undefined,
        raw
    };
}


/***/ }),

/***/ 29642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ encodeTypedMessageV38Format),
/* harmony export */   W: () => (/* binding */ decodeTypedMessageV38ToV40Format)
/* harmony export */ });
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);


function encodeTypedMessageV38Format(message) {
    const encoder = new TextEncoder();
    if (message.meta?.size) {
        const rec = Object.fromEntries(message.meta.entries());
        return encoder.encode(`${JSON.stringify(rec)}\u{1F9E9}${message.content}`);
    }
    return encoder.encode(message.content);
}
function decodeTypedMessageV38ToV40Format(raw, version) {
    const decoder = new TextDecoder();
    const text = ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrap(()=>decoder.decode(raw));
    if (text.isErr()) return text;
    if (version === -38) {
        const maybeMetadata = (()=>{
            if (!text.value.includes('\u{1F9E9}')) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
            const [maybeJSON] = text.value.split('\u{1F9E9}');
            return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrap(()=>JSON.parse(maybeJSON)).toOption().map((val)=>{
                if (typeof val !== 'object' || Array.isArray(val)) return new Map();
                return new Map(Object.entries(val));
            });
        })();
        return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(maybeMetadata.isSome() ? (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageText */ .P)(text.value.replace(/.+\u{1F9E9}/u, ''), maybeMetadata.value) : (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageText */ .P)(text.value));
    }
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageText */ .P)(text.value));
}


/***/ }),

/***/ 76350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ makeTypedMessageAnchor),
/* harmony export */   b: () => (/* binding */ isTypedMessageAnchor)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);


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

/***/ 93949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RZ: () => (/* binding */ unstable_STYLE_META),
/* harmony export */   SY: () => (/* binding */ isWellKnownExtensionTypedMessages)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);
/* harmony import */ var _anchor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43458);
/* harmony import */ var _MaskPayload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76350);





/** This key can be used in meta. It represents CSS when rendering this message. */ const unstable_STYLE_META = 'unstable_STYLE';
const isWellKnownExtensionTypedMessages = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .composeSome */ .Vm)(_anchor_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageAnchor */ .b, _MaskPayload_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$);


/***/ }),

/***/ 76714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ FlattenTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61111);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40048);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86025);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30919);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41840);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94553);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93949);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85094);






function FlattenTypedMessage(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .K)(message) && 'value' in message.promise) return FlattenTypedMessage(message.promise.value, context);
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(message)) {
        const next = message.items.map((x)=>FlattenTypedMessage(x, context)).flatMap((x)=>(0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(x) ? x.meta ? x : x.items : x).filter((x)=>!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageEmpty */ .Y)(x)).reduce((result, current)=>{
            const lastItem = result.at(-1);
            if (!lastItem) return result.concat(current);
            if (!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageText */ .Rz)(current) || !(0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageText */ .Rz)(lastItem)) return result.concat(current);
            if (!isTextWithMetaCanBeMerged(lastItem.meta, current.meta)) return result.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            result.pop();
            result.push((0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageText */ .P)(`${lastItem.content} ${current.content}`, lastItem.meta));
            return result;
        }, []);
        if (!message.meta) {
            if (next.length === 0) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageEmpty */ .W)();
            if (next.length === 1) return next[0];
        }
        if (next.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isSerializableTypedMessage */ .fV)) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageTupleSerializable */ .kT)(next, message.meta);
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageTuple */ .Zw)(next, message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_5__/* .visitEachTypedMessageChild */ .I)(message, FlattenTypedMessage, context);
}
function isTextWithMetaCanBeMerged(a, b) {
    if (a === b) return true;
    if (a?.size !== 1) return false;
    if (a?.size !== b?.size) return false;
    if (!a?.has(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ) || !b.has(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ)) return false;
    const a_style = a.get(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ);
    const b_style = b.get(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(a_style, b_style);
}
FlattenTypedMessage.NoContext = (message)=>FlattenTypedMessage(message, _context_js__WEBPACK_IMPORTED_MODULE_8__/* .emptyTransformationContext */ .v);


/***/ }),

/***/ 89434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ParseLinkTransformer)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86025);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17425);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43458);
/* harmony import */ var _utils_parseLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96336);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30919);




function ParseLinkTransformer(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(message)) {
        const parsed = (0,_utils_parseLink_js__WEBPACK_IMPORTED_MODULE_1__/* .parseLink */ .V)(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageTupleSerializable */ .kT)(parsed.map((i)=>{
            if (i.type === 'text') return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(i.content);
            return (0,_extension_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageAnchor */ .J)(i.category, i.content, i.content);
        }), message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_4__/* .visitEachTypedMessageChild */ .I)(message, ParseLinkTransformer, context);
}


/***/ }),

/***/ 66243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ composeTransformers)
/* harmony export */ });
function composeTransformers() {
    const event = new EventTarget();
    const onUpdate = ()=>{
        composedTransformer = undefined;
        event.dispatchEvent(new Event('update'));
    };
    const transformers = new Set();
    let composedTransformer;
    function composed(message, context) {
        return [
            ...transformers
        ].sort((a, b)=>b[1] - a[1]).reduce((p, [c])=>c(p, context), message);
    }
    const subscription = {
        getCurrentValue: ()=>composedTransformer ??= (message, context)=>{
                return composed(message, context);
            },
        subscribe (f) {
            event.addEventListener('update', f);
            return ()=>{
                event.removeEventListener('update', f);
            };
        }
    };
    return {
        subscription,
        addTransformer (t, priority, signal) {
            const f_priority = [
                typeof t === 'function' ? t : (message, context)=>t.getCurrentValue()(message, context),
                priority
            ];
            transformers.add(f_priority);
            onUpdate();
            const cancelSubscription = typeof t === 'function' ? ()=>{} : t.subscribe(onUpdate);
            const remove = ()=>{
                transformers.delete(f_priority);
                cancelSubscription();
                onUpdate();
            };
            signal?.addEventListener('abort', remove);
            return remove;
        }
    };
}


/***/ }),

/***/ 94553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createTransformationContext),
/* harmony export */   v: () => (/* binding */ emptyTransformationContext)
/* harmony export */ });
function createTransformationContext() {
    return Object.freeze({});
}
const emptyTransformationContext = createTransformationContext();


/***/ }),

/***/ 73561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ extractTextFromTypedMessage),
/* harmony export */   j: () => (/* binding */ extractImageFromTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93349);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hz: () => (/* binding */ isTypedMessageEqual),
/* harmony export */   c3: () => (/* binding */ isNonSerializableTypedMessageWithAlt),
/* harmony export */   fV: () => (/* binding */ isSerializableTypedMessage)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85094);


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

/***/ 96336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ parseLink)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseLink(text) {
    // ESM-CJS interop
    const parsed = (anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z).list(text);
    const result = [];
    let start = 0;
    for (const x of parsed){
        if (x.isURL) {
            result.push({
                type: 'text',
                content: text.slice(start, x.start)
            });
            result.push({
                type: 'link',
                content: x.string,
                category: 'normal'
            });
        } else {
            result.push({
                type: 'text',
                content: text.slice(start, x.end)
            });
        }
        start = x.end;
    }
    result.push({
        type: 'text',
        content: text.slice(start, text.length)
    });
    return result.filter((x)=>x.content).flatMap((x)=>x.type === 'text' ? parseTag(x.content) : x);
}
const TagLike = /([#$@][\w-]+)/g;
const map = {
    '@': 'user',
    '#': 'hash',
    $: 'cash'
};
function parseTag(x) {
    return x.split(TagLike).map((x)=>TagLike.test(x) ? {
            type: 'link',
            content: x,
            category: map[x[0]] || 'normal'
        } : {
            type: 'text',
            content: x
        });
}


/***/ }),

/***/ 30688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 30919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ visitEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61111);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41840);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76350);



function visitEachTypedMessageChild(node, visitor, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        const after = node.items.flatMap((x)=>{
            const next = visitor(x, context);
            if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(next)) return next.items;
            return next;
        });
        if (after.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)) {
            return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(after, node.meta);
        }
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(after, node.meta);
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessagePromise */ .K)(node)) {
        // we ignore alt if promise is resolved.
        if ('value' in node.promise) return visitor(node.promise.value, context);
        else if (node.alt) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessagePromise */ .N)(node.promise, visitor(node.alt, context));
        return node;
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageMaskPayload */ .$)(node)) {
        const next = visitor(node.message, context);
        return (0,_extension_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageMaskPayload */ .J)(next, node.meta);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        const alt = visitor(node.alt, context);
        if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)(alt)) {
            console.warn('[@masknet/typed-message] You must return a serializable message in this position. Original:', node, 'Transformed child "alt":', alt);
            // ignore the transform result
            return node;
        }
        return {
            ...node,
            alt
        };
    } else {
        // return node with no child
        return node;
    }
}


/***/ }),

/***/ 91698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MN: () => (/* binding */ ObjectAssign),
/* harmony export */   U_: () => (/* binding */ ReflectOwnKeys),
/* harmony export */   Yb: () => (/* binding */ ReflectApply),
/* harmony export */   ZT: () => (/* binding */ noop),
/* harmony export */   Zv: () => (/* binding */ toSafeArray),
/* harmony export */   aF: () => (/* binding */ ArrayProtoPush),
/* harmony export */   bs: () => (/* binding */ toSafeWeakMap),
/* harmony export */   gd: () => (/* binding */ ArrayCtor),
/* harmony export */   hw: () => (/* binding */ ErrorCtor),
/* harmony export */   ir: () => (/* binding */ WeakMapCtor)
/* harmony export */ });
/* unused harmony exports ArrayIsArray, ArrayProtoFilter, ArrayProtoIncludes, ArrayProtoSort, ArrayProtoUnshift, CHAR_ELLIPSIS, JSONStringify, LOCKER_IDENTIFIER_MARKER, LOCKER_UNMINIFIED_FLAG, MathMin, NumberIsFinite, NumberIsInteger, ObjectFreeze, ObjectKeys, ObjectLookupOwnGetter, ObjectLookupOwnSetter, ObjectProtoToString, ReflectDefineProperty, ReflectDeleteProperty, ReflectGetPrototypeOf, ReflectSetPrototypeOf, StringCtor, StringProtoSlice, SymbolFor, SymbolIterator, SymbolToStringTag, SymbolUnscopables, TO_STRING_BRAND_BIG_INT, TO_STRING_BRAND_BOOLEAN, TO_STRING_BRAND_NUMBER, TO_STRING_BRAND_STRING, TO_STRING_BRAND_SYMBOL, TypeErrorCtor, getNearMembraneSerializedValue, isNearMembrane, isObject */
const {
  apply: ReflectApply,
  defineProperty: ReflectDefineProperty,
  deleteProperty: ReflectDeleteProperty,
  getPrototypeOf: ReflectGetPrototypeOf,
  ownKeys: ReflectOwnKeys,
  setPrototypeOf: ReflectSetPrototypeOf
} = Reflect;
const ObjectCtor = Object;
const {
  prototype: ObjectProto
} = ObjectCtor;
const {
  assign: ObjectAssign,
  freeze: ObjectFreeze,
  keys: ObjectKeys
} = ObjectCtor;
const {
  hasOwn: OriginalObjectHasOwn
} = ObjectCtor;
const {
  __lookupGetter__: ObjectProtoLookupGetter,
  __lookupSetter__: ObjectProtoLookupSetter,
  hasOwnProperty: ObjectProtoHasOwnProperty
} = ObjectProto;
const ObjectHasOwn = typeof OriginalObjectHasOwn === 'function' ? OriginalObjectHasOwn :
/* istanbul ignore next: currently unreachable via tests */
function ObjectHasOwn(object, key) {
  return ReflectApply(ObjectProtoHasOwnProperty, object, [key]);
};
const {
  toString: ObjectProtoToString
} = ObjectProto;

function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function ObjectLookupOwnGetter(object, key) {
  return object === null || object === undefined || !ObjectHasOwn(object, key) ? undefined : ReflectApply(ObjectProtoLookupGetter, object, [key]);
}

function ObjectLookupOwnSetter(object, key) {
  return object === null || object === undefined || !ObjectHasOwn(object, key) ? undefined : ReflectApply(ObjectProtoLookupSetter, object, [key]);
}

const {
  for: SymbolFor,
  iterator: SymbolIterator,
  toStringTag: SymbolToStringTag,
  unscopables: SymbolUnscopables
} = Symbol;
const ArrayCtor = Array;
const {
  prototype: ArrayProto
} = ArrayCtor;
const {
  at: ArrayProtoAt,
  concat: ArrayProtoConcat,
  copyWithin: ArrayProtoCopyWithin,
  entries: ArrayProtoEntries,
  every: ArrayProtoEvery,
  fill: ArrayProtoFill,
  find: ArrayProtoFind,
  findIndex: ArrayProtoFindIndex,
  flat: ArrayProtoFlat,
  flatMap: ArrayProtoFlatMap,
  forEach: ArrayProtoForEach,
  indexOf: ArrayProtoIndexOf,
  join: ArrayProtoJoin,
  keys: ArrayProtoKeys,
  lastIndexOf: ArrayProtoLastIndexOf,
  map: ArrayProtoMap,
  pop: ArrayProtoPop,
  reduce: ArrayProtoReduce,
  reduceRight: ArrayProtoReduceRight,
  reverse: ArrayProtoReverse,
  shift: ArrayProtoShift,
  slice: ArrayProtoSlice,
  some: ArrayProtoSome,
  splice: ArrayProtoSplice,
  toLocaleString: ArrayProtoToLocaleString,
  toString: ArrayProtoToString,
  values: ArrayProtoValues,
  [SymbolIterator]: ArrayProtoSymbolIterator
} = ArrayProto;
const ArrayUnscopables = ObjectFreeze(ObjectAssign({
  __proto__: null
}, ArrayProto[SymbolUnscopables]));
const {
  filter: ArrayProtoFilter,
  includes: ArrayProtoIncludes,
  sort: ArrayProtoSort,
  unshift: ArrayProtoUnshift
} = ArrayProto;
const {
  push: ArrayProtoPush
} = ArrayProto;
const {
  isArray: ArrayIsArray
} = ArrayCtor;

function toSafeArray(array) {
  ReflectSetPrototypeOf(array, null);
  array.at = ArrayProtoAt;
  array.concat = ArrayProtoConcat; // *** DO NOT SET THE ARRAY CONSTRUCTOR PROPERTY ***
  // https://bugs.chromium.org/p/v8/issues/detail?id=13202
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/lookup.cc;l=196-215?q=IsArraySpeciesLookupChainIntact
  //
  // In V8 setting the constructor property of an array, promise, regexp, or
  // typed array triggers a de-opt because it could change an instance's
  // @@species. This de-opt affects at least `Array#splice` and occurs even
  // if the prototype of the array is change or nulled beforehand. Further,
  // the de-opt persists after a page refresh. It is not until navigating to
  // a different page that the performance of `Array#splice` is restored.

  array.copyWithin = ArrayProtoCopyWithin;
  array.entries = ArrayProtoEntries;
  array.every = ArrayProtoEvery;
  array.fill = ArrayProtoFill;
  array.filter = ArrayProtoFilter;
  array.find = ArrayProtoFind;
  array.findIndex = ArrayProtoFindIndex;
  array.flat = ArrayProtoFlat;
  array.flatMap = ArrayProtoFlatMap;
  array.forEach = ArrayProtoForEach;
  array.includes = ArrayProtoIncludes;
  array.indexOf = ArrayProtoIndexOf;
  array.join = ArrayProtoJoin;
  array.keys = ArrayProtoKeys;
  array.lastIndexOf = ArrayProtoLastIndexOf;
  array.map = ArrayProtoMap;
  array.pop = ArrayProtoPop;
  array.push = ArrayProtoPush;
  array.reduce = ArrayProtoReduce;
  array.reduceRight = ArrayProtoReduceRight;
  array.reverse = ArrayProtoReverse;
  array.shift = ArrayProtoShift;
  array.slice = ArrayProtoSlice;
  array.some = ArrayProtoSome;
  array.sort = ArrayProtoSort;
  array.splice = ArrayProtoSplice;
  array.toLocaleString = ArrayProtoToLocaleString;
  array.toString = ArrayProtoToString;
  array.unshift = ArrayProtoUnshift;
  array.values = ArrayProtoValues;
  array[SymbolIterator] = ArrayProtoSymbolIterator;
  array[SymbolUnscopables] = ArrayUnscopables;
  ReflectSetPrototypeOf(array, ArrayProto);
  return array;
}

const LOCKER_IDENTIFIER_MARKER = '$LWS'; // This package is bundled by third-parties that have their own build time
// replacement logic. Instead of customizing each build system to be aware
// of this package we implement a two phase debug mode by performing small
// runtime checks to determine phase one, our code is unminified, and
// phase two, the user opted-in to custom devtools formatters. Phase one
// is used for light weight initialization time debug while phase two is
// reserved for post initialization runtime.
// istanbul ignore next

const LOCKER_UNMINIFIED_FLAG = `${() =>
/* $LWS */
1}`.includes(LOCKER_IDENTIFIER_MARKER);
const CHAR_ELLIPSIS = '\u2026';
const TO_STRING_BRAND_BIG_INT = '[object BigInt]';
const TO_STRING_BRAND_BOOLEAN = '[object Boolean]';
const TO_STRING_BRAND_NUMBER = '[object Number]';
const TO_STRING_BRAND_STRING = '[object String]';
const TO_STRING_BRAND_SYMBOL = '[object Symbol]';
const ErrorCtor = Error;
const TypeErrorCtor = (/* unused pure expression or super */ null && (TypeError));

function noop() {// No operation performed.
}

const {
  stringify: JSONStringify
} = JSON; // Used by '@locker/near-membrane-dom'.

const {
  min: MathMin
} = Math;
const LOCKER_NEAR_MEMBRANE_SERIALIZED_VALUE_SYMBOL = SymbolFor('@@lockerNearMembraneSerializedValue');
const LOCKER_NEAR_MEMBRANE_SYMBOL = SymbolFor('@@lockerNearMembrane');

function getNearMembraneSerializedValue(object) {
  return LOCKER_NEAR_MEMBRANE_SERIALIZED_VALUE_SYMBOL in object ? undefined : object[LOCKER_NEAR_MEMBRANE_SERIALIZED_VALUE_SYMBOL];
}

function isNearMembrane(value) {
  if (typeof value === 'object' && value !== null || typeof value === 'function') {
    return !(LOCKER_NEAR_MEMBRANE_SYMBOL in value) && value[LOCKER_NEAR_MEMBRANE_SYMBOL] === true;
  }

  return false;
}

const NumberCtor = Number; // Used by '@locker/near-membrane-dom'.

const {
  isFinite: NumberIsFinite,
  isInteger: NumberIsInteger
} = NumberCtor;
const StringCtor = String;
const {
  prototype: StringProto
} = StringCtor;
const {
  slice: StringProtoSlice
} = StringProto;
const WeakMapCtor = WeakMap;
const {
  prototype: WeakMapProto
} = WeakMapCtor;
const {
  delete: WeakMapProtoDelete,
  get: WeakMapProtoGet,
  has: WeakMapProtoHas,
  set: WeakMapProtoSet,
  [SymbolToStringTag]: WeakMapProtoSymbolToStringTag
} = WeakMapProto;

function toSafeWeakMap(weakMap) {
  ReflectSetPrototypeOf(weakMap, null);
  weakMap.delete = WeakMapProtoDelete;
  weakMap.get = WeakMapProtoGet;
  weakMap.has = WeakMapProtoHas;
  weakMap.set = WeakMapProtoSet;
  weakMap[SymbolToStringTag] = WeakMapProtoSymbolToStringTag;
  ReflectSetPrototypeOf(weakMap, WeakMapProto);
  return weakMap;
}




/***/ })

}]);
//# sourceMappingURL=2402.js.map