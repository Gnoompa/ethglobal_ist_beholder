(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9836],{

/***/ 60893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  deleteFile: () => (/* reexport */ database/* deleteFile */._I),
  getAllFiles: () => (/* reexport */ database/* getAllFiles */.ww),
  makeAttachment: () => (/* binding */ makeAttachment),
  renameFile: () => (/* reexport */ database/* renameFile */.gQ),
  setFileInfo: () => (/* reexport */ database/* setFileInfo */.oq),
  upload: () => (/* binding */ upload),
  uploadLandingPage: () => (/* binding */ uploadLandingPage)
});

// EXTERNAL MODULE: ./packages/plugins/FileService/src/types.ts
var types = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(8610);
// EXTERNAL MODULE: ./node_modules/.pnpm/arweave@1.13.6/node_modules/arweave/web/index.js
var web = __webpack_require__(83891);
var web_default = /*#__PURE__*/__webpack_require__.n(web);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@1.12.2/node_modules/@msgpack/msgpack/dist.es5/msgpack.min.js
var msgpack_min = __webpack_require__(42742);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
async function checksum(block) {
    const hashed = await crypto.subtle.digest({ name: "SHA-256" }, block);
    return new Uint8Array(hashed);
}
async function loadKey(passphrase, salt) {
    const key = await crypto.subtle.importKey("raw", passphrase, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1000,
        hash: "SHA-256",
    }, key, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");

;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



async function encode(passphrase, input) {
    let algorithm, salt, block, keyHash;
    if (passphrase === undefined) {
        block = input.block;
    }
    else {
        keyHash = await checksum(passphrase);
        salt = crypto.getRandomValues(new Uint8Array(8));
        const key = await loadKey(passphrase, salt);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        algorithm = { name: "AES-GCM", iv, tagLength: 128 };
        const encrypted = await crypto.subtle.encrypt(algorithm, key, input.block);
        block = new Uint8Array(encrypted);
    }
    const payload = {
        version: 0,
        mime: input.mime,
        metadata: input.metadata,
        algorithm,
        salt,
        keyHash,
        block,
        blockHash: await checksum(block),
    };
    return Uint8Array.from([...MAGIC_HEADER, ...(0,msgpack_min.encode)(payload)]);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/utils.js
function bufferEqual(buf1, buf2) {
    if (buf1 === buf2) {
        return true;
    }
    else if (buf1.byteLength !== buf2.byteLength) {
        return false;
    }
    let i = buf1.byteLength;
    while (i--) {
        if (buf1[i] !== buf2[i]) {
            return false;
        }
    }
    return true;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




async function getPayload(passphrase, encoded) {
    if (!bufferEqual(MAGIC_HEADER, encoded.slice(0, MAGIC_HEADER.length))) {
        throw new Error("unexpected magic header.");
    }
    const buffer = encoded.slice(MAGIC_HEADER.length);
    const payload = (0,msgpack_min.decode)(buffer);
    if (payload.version !== 0) {
        throw new Error("unexpected file version.");
    }
    else if (payload.mime.length === 0) {
        throw new Error("unexpected `.mime`.");
    }
    else if (!bufferEqual(payload.blockHash, await checksum(payload.block))) {
        throw new Error("unexpected `blockHash`.");
    }
    else if (passphrase && payload.keyHash) {
        if (!bufferEqual(payload.keyHash, await checksum(passphrase))) {
            throw new Error("unexpected `keyHash`.");
        }
    }
    return payload;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


async function decode(passphrase, encoded) {
    const payload = await getPayload(passphrase, encoded);
    let block = payload.block;
    if (passphrase && payload.algorithm && payload.salt) {
        const data = await crypto.subtle.decrypt(payload.algorithm, await loadKey(passphrase, payload.salt), payload.block);
        block = new Uint8Array(data);
    }
    return {
        mime: payload.mime,
        metadata: payload.metadata,
        block,
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js





;// CONCATENATED MODULE: ./node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js



// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchText.ts
var fetchText = __webpack_require__(30426);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/constants.ts
var constants = __webpack_require__(65977);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var dist_es5_esm_encode = __webpack_require__(26004);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/Worker/remote-signing.ts


async function sign(transaction) {
    const response = await fetch(constants/* ARWEAVE_SIGNING */.gd, {
        method: 'POST',
        body: Uint8Array.from(await makeRequest(transaction))
    });
    transaction.setSignature(await response.json());
}
async function makeRequest(transaction) {
    const encoder = new TextEncoder();
    await transaction.prepareChunks(transaction.data);
    const get = (base, name)=>base.get(name, {
            decode: true,
            string: false
        });
    return (0,dist_es5_esm_encode/* encode */.c)([
        encoder.encode(transaction.format.toString()),
        get(transaction, 'owner'),
        get(transaction, 'target'),
        encoder.encode(transaction.quantity),
        encoder.encode(transaction.reward),
        get(transaction, 'last_tx'),
        transaction.tags.map((tag)=>[
                get(tag, 'name'),
                get(tag, 'value')
            ]),
        encoder.encode(transaction.data_size),
        get(transaction, 'data_root')
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/Worker/arweave-token.json
const arweave_token_namespaceObject = JSON.parse('{"kty":"RSA","n":"qajRPsPmNXRt3L5QYk5h62E_LzsuqjsMtjVAjaC2IsMFekiIM1n1oscwJofvEhqCL6Yd9N55xySdzg5_VjBVaxxfCSsPsXVnsHGZDjJR0hOEMe6M-eA-dfxYqqUInNcJiuQBgO-ik2VCo92e6b2H6MozNWIlSmPZefjPWAUB3-Wm0LMPSX-GJiz5m0yS0-1cvtChGzQC38O174G0DfHyFjEmvO0DS4HnOH3htkz_9u96qtily0odFiru6vNuD8aGyfWqaJX52MLiw3zPUihlNnT6z4iw0eh0aKjjnZJV0IkV9042Eu2503KaTi-jfAnwZknB1rGdZziyFJzfD2kSLiPJT9J_YCQGcXqlhZHaq_Iw3PzPziw-rSRr--701HpFjwq41XVhCYdVkzo5OsTbOzgzriCPJuiGZkhrzIOcm2p5U4SLwphc0zBpkkWDj72CKMG2UK_z4GjiGO51VVCxxaKAA-w4z1Ba_LKV5QMnxXE3FiuB6gQW9xNl-K0zaPJbLgIciLV1v2UKWHjjwWacShVRfdrKoKIHbMs9prlO7NyLDhfeBh67i-TfGLtcxgd6Y0v9KqB6j3qFtIvkT4dJL8NCEfOCczS0Mp6K8O0Wy-4r9OU8Q7xjnG2CZ9gh5rF3pKhU3iLYlP8FS4voeNi6ANVJSmOI4qYN8REZqC9Qkec"}');
// EXTERNAL MODULE: ./packages/plugins/FileService/src/helpers.ts + 3 modules
var helpers = __webpack_require__(83598);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/Worker/arweave.ts









class ArweaveAgent {
    instance;
    static stage = {};
    init() {
        if (this.instance) return;
        // Note: ESM interop
        this.instance = ((web_default())["default"] || (web_default())).init({
            host: 'arweave.net',
            port: 443,
            protocol: 'https'
        });
    }
    async makeAttachment(options) {
        this.init();
        const passphrase = options.key ? (0,esm/* encodeText */.YT)(options.key) : undefined;
        const encoded = await encode(passphrase, {
            block: options.block,
            mime: (0,isEmpty/* default */.Z)(options.type) ? 'application/octet-stream' : options.type,
            metadata: null
        });
        const transaction = await this.makePayload(encoded, 'application/octet-stream');
        ArweaveAgent.stage[transaction.id] = transaction;
        await this.instance.transactions.post(transaction);
        return transaction.id;
    }
    async uploadLandingPage(metadata) {
        this.init();
        let linkPrefix = 'https://arweave.net';
        if (metadata.useCDN) {
            linkPrefix = constants/* MESON_PREFIX */.I0;
        }
        const encodedMetadata = JSON.stringify({
            name: metadata.name,
            size: metadata.size,
            provider: constants/* Provider */.zt.Arweave,
            link: `${linkPrefix}/${metadata.txId}`,
            signed: await (0,helpers/* makeFileKeySigned */.Gd)(metadata.key),
            createdAt: new Date().toISOString()
        });
        const text = await (0,fetchText/* fetchText */.s)(constants/* LANDING_PAGE */.C7);
        const replaced = text.replace('__METADATA__', encodedMetadata);
        const data = (0,esm/* encodeText */.YT)(replaced);
        const transaction = await this.makePayload(data, 'text/html');
        await this.instance.transactions.post(transaction);
        return transaction.id;
    }
    async *upload(id) {
        this.init();
        for await (const uploader of this.instance.transactions.upload(ArweaveAgent.stage[id], new Uint8Array())){
            yield uploader.pctComplete;
        }
    }
    async makePayload(data, type) {
        this.init();
        const transaction = await this.instance.createTransaction({
            data
        }, arweave_token_namespaceObject);
        transaction.addTag('Content-Type', type);
        await sign(transaction);
        return transaction;
    }
}
/* harmony default export */ const arweave = (new ArweaveAgent());

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/index.js + 150 modules
var src = __webpack_require__(22104);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/Worker/ipfs.ts







function createClient() {
    return (0,src/* create */.Ue)({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: 'Basic MkRZaG10eThyM21DOWl5dE5tdG9ZdkdmWkxiOmM5YjVlOTRmNjM1OTdiMGEyNmJhY2RlNmI3NTgxOTgx'
        }
    });
}
class IPFSAgent {
    static providerName = 'IPFS';
    client;
    init() {
        if (this.client) return;
        this.client = createClient();
    }
    async makeAttachment(options) {
        const passphrase = options.key ? (0,esm/* encodeText */.YT)(options.key) : undefined;
        const encoded = await encode(passphrase, {
            block: options.block,
            mime: (0,isEmpty/* default */.Z)(options.type) ? 'application/octet-stream' : options.type,
            metadata: null
        });
        return this.makePayload(encoded, 'application/octet-stream');
    }
    // currently not native support progress track
    async *upload(id) {
        yield 100;
    }
    async uploadLandingPage(metadata) {
        const linkPrefix = 'https://mask.infura-ipfs.io/ipfs';
        const encodedMetadata = JSON.stringify({
            name: metadata.name,
            size: metadata.size,
            provider: constants/* Provider */.zt.IPFS,
            link: (0,dist/* default */.ZP)(linkPrefix, '/:txId', {
                txId: metadata.txId
            }),
            signed: await (0,helpers/* makeFileKeySigned */.Gd)(metadata.key),
            createdAt: new Date().toISOString()
        });
        const response = await fetch(constants/* LANDING_PAGE */.C7);
        const text = await response.text();
        const replaced = text.replace('Arweave', IPFSAgent.providerName).replace('Over Arweave', `Over ${IPFSAgent.providerName}`).replace('__METADATA__', encodedMetadata);
        const data = (0,esm/* encodeText */.YT)(replaced);
        return this.makePayload(data, 'text/html');
    }
    async makePayload(data, type) {
        this.init();
        const file = await this.client.add(data);
        return file.cid.toString();
    }
}
/* harmony default export */ const ipfs = (new IPFSAgent());

// EXTERNAL MODULE: ./packages/plugins/FileService/src/Worker/database.ts
var database = __webpack_require__(77081);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/Worker/service.ts



const allProviders = {
    [types/* Provider */.z.Arweave]: arweave,
    [types/* Provider */.z.IPFS]: ipfs
};
async function makeAttachment(provider, options) {
    return allProviders[provider]?.makeAttachment(options);
}
async function* upload(provider, id) {
    for await (const percent of allProviders[provider].upload(id)){
        yield percent;
    }
}
async function uploadLandingPage(provider, metadata) {
    return allProviders[provider]?.uploadLandingPage(metadata);
}



/***/ }),

/***/ 30426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ fetchText)
/* harmony export */ });
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62622);
/* harmony import */ var _getNextFetchers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72358);


async function fetchText(input, init, options) {
    const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__/* .fetch */ .h)(input, init, (0,_getNextFetchers_js__WEBPACK_IMPORTED_MODULE_1__/* .getNextFetchers */ .l)(options));
    if (!response.ok) throw new Error('Failed to fetch as Text.');
    return response.text();
}


/***/ }),

/***/ 34592:
/***/ ((module) => {

const { AbortController } = globalThis

/**
 * Takes an array of AbortSignals and returns a single signal.
 * If any signals are aborted, the returned signal will be aborted.
 * @param {Array<AbortSignal>} signals
 * @returns {AbortSignal}
 */
function anySignal (signals) {
  const controller = new AbortController()

  function onAbort () {
    controller.abort()

    for (const signal of signals) {
      if (!signal || !signal.removeEventListener) continue
      signal.removeEventListener('abort', onAbort)
    }
  }

  for (const signal of signals) {
    if (!signal || !signal.addEventListener) continue
    if (signal.aborted) {
      onAbort()
      break
    }
    signal.addEventListener('abort', onAbort)
  }

  return controller.signal
}

module.exports = anySignal
module.exports.anySignal = anySignal


/***/ }),

/***/ 40136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

/***/ 36942:
/***/ ((module) => {

"use strict";


/**
 * Turns a browser readable stream into an async iterable. Async iteration over
 * returned iterable will lock give stream, preventing any other consumer from
 * acquiring a reader. The lock will be released if iteration loop is broken. To
 * prevent stream cancelling optional `{ preventCancel: true }` could be passed
 * as a second argument.
 * @template T
 * @param {ReadableStream<T>} stream
 * @param {Object} [options]
 * @param {boolean} [options.preventCancel=boolean]
 * @returns {AsyncIterable<T>}
 */
async function * browserReadableStreamToIt (stream, options = {}) {
  const reader = stream.getReader()

  try {
    while (true) {
      const result = await reader.read()

      if (result.done) {
        return
      }

      yield result.value
    }
  } finally {
    if (options.preventCancel !== true) {
      reader.cancel()
    }

    reader.releaseLock()
  }
}

module.exports = browserReadableStreamToIt


/***/ }),

/***/ 36676:
/***/ ((module) => {

"use strict";


/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */
function assign(obj, props) {
    for (const key in props) {
        Object.defineProperty(obj, key, {
            value: props[key],
            enumerable: true,
            configurable: true,
        });
    }

    return obj;
}

/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */
function createError(err, code, props) {
    if (!err || typeof err === 'string') {
        throw new TypeError('Please pass an Error to err-code');
    }

    if (!props) {
        props = {};
    }

    if (typeof code === 'object') {
        props = code;
        code = '';
    }

    if (code) {
        props.code = code;
    }

    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;

        const ErrClass = function () {};

        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));

        // @ts-ignore
        const output = assign(new ErrClass(), props);

        return output;
    }
}

module.exports = createError;


/***/ }),

/***/ 2698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isElectron = __webpack_require__(40450)

const IS_ENV_WITH_DOM = typeof window === 'object' && typeof document === 'object' && document.nodeType === 9
// @ts-ignore
const IS_ELECTRON = isElectron()
const IS_BROWSER = IS_ENV_WITH_DOM && !IS_ELECTRON
const IS_ELECTRON_MAIN = IS_ELECTRON && !IS_ENV_WITH_DOM
const IS_ELECTRON_RENDERER = IS_ELECTRON && IS_ENV_WITH_DOM
const IS_NODE =  true && typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node' && !IS_ELECTRON
// @ts-ignore - we either ignore worker scope or dom scope
const IS_WEBWORKER = typeof importScripts === 'function' && typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope
const IS_TEST = typeof process !== 'undefined' && typeof process.env !== 'undefined' && "production" === 'test'
const IS_REACT_NATIVE = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'

module.exports = {
  isTest: IS_TEST,
  isElectron: IS_ELECTRON,
  isElectronMain: IS_ELECTRON_MAIN,
  isElectronRenderer: IS_ELECTRON_RENDERER,
  isNode: IS_NODE,
  /**
   * Detects browser main thread  **NOT** web worker or service worker
   */
  isBrowser: IS_BROWSER,
  isWebWorker: IS_WEBWORKER,
  isEnvWithDom: IS_ENV_WITH_DOM,
  isReactNative: IS_REACT_NATIVE
}


/***/ }),

/***/ 76378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * @typedef {globalThis.Headers} Headers
 * @typedef {globalThis.Request} Request
 * @typedef {globalThis.Response} Response
 */

// use window.fetch if it is available, fall back to node-fetch if not
module.exports = __webpack_require__(35646)


/***/ }),

/***/ 6827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const HTTP = __webpack_require__(56084)

/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {{ path: string; content?: AsyncIterable<Uint8Array> }}
 */
const urlSource = (url, options) => {
  return {
    path: decodeURIComponent(new URL(url).pathname.split('/').pop() || ''),
    content: readURLContent(url, options)
  }
}

/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {AsyncIterable<Uint8Array>}
 */
async function * readURLContent (url, options) {
  const http = new HTTP()
  const response = await http.get(url, options)

  yield * response.iterator()
}

module.exports = urlSource


/***/ }),

/***/ 56084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable no-undef */


const { fetch, Request, Headers } = __webpack_require__(48118)
const { TimeoutError, HTTPError } = __webpack_require__(24966)
const merge = (__webpack_require__(41725).bind)({ ignoreUndefined: true })
const { URL, URLSearchParams } = __webpack_require__(94090)
const anySignal = __webpack_require__(34592)
const browserReableStreamToIt = __webpack_require__(36942)
const { isBrowser, isWebWorker } = __webpack_require__(2698)
const all = __webpack_require__(39108)

/**
 * @typedef {import('stream').Readable} NodeReadableStream
 * @typedef {import('./types').HTTPOptions} HTTPOptions
 * @typedef {import('./types').ExtendedResponse} ExtendedResponse
 */

/**
 * @template TResponse
 * @param {Promise<TResponse>} promise
 * @param {number | undefined} ms
 * @param {AbortController} abortController
 * @returns {Promise<TResponse>}
 */
const timeout = (promise, ms, abortController) => {
  if (ms === undefined) {
    return promise
  }

  const start = Date.now()

  const timedOut = () => {
    const time = Date.now() - start

    return time >= ms
  }

  return new Promise((resolve, reject) => {
    const timeoutID = setTimeout(() => {
      if (timedOut()) {
        reject(new TimeoutError())
        abortController.abort()
      }
    }, ms)

    /**
     * @param {(value: any) => void } next
     */
    const after = (next) => {
      /**
       * @param {any} res
       */
      const fn = (res) => {
        clearTimeout(timeoutID)

        if (timedOut()) {
          reject(new TimeoutError())
          return
        }

        next(res)
      }
      return fn
    }

    promise
      .then(after(resolve), after(reject))
  })
}

const defaults = {
  throwHttpErrors: true,
  credentials: 'same-origin'
}

class HTTP {
  /**
   *
   * @param {HTTPOptions} options
   */
  constructor (options = {}) {
    /** @type {HTTPOptions} */
    this.opts = merge(defaults, options)
  }

  /**
   * Fetch
   *
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   * @returns {Promise<ExtendedResponse>}
   */
  async fetch (resource, options = {}) {
    /** @type {HTTPOptions} */
    const opts = merge(this.opts, options)
    // @ts-expect-error
    const headers = new Headers(opts.headers)

    // validate resource type
    // @ts-expect-error
    if (typeof resource !== 'string' && !(resource instanceof URL || resource instanceof Request)) {
      throw new TypeError('`resource` must be a string, URL, or Request')
    }

    const url = new URL(resource.toString(), opts.base)

    const {
      searchParams,
      transformSearchParams,
      json
    } = opts

    if (searchParams) {
      if (typeof transformSearchParams === 'function') {
        // @ts-ignore
        url.search = transformSearchParams(new URLSearchParams(opts.searchParams))
      } else {
        // @ts-ignore
        url.search = new URLSearchParams(opts.searchParams)
      }
    }

    if (json) {
      opts.body = JSON.stringify(opts.json)
      headers.set('content-type', 'application/json')
    }

    const abortController = new AbortController()
    // @ts-ignore
    const signal = anySignal([abortController.signal, opts.signal])

    if (globalThis.ReadableStream != null && opts.body instanceof globalThis.ReadableStream && (isBrowser || isWebWorker)) {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1387483
      opts.body = new Blob(await all(browserReableStreamToIt(opts.body)))
    }

    /** @type {ExtendedResponse} */
    // @ts-expect-error additional fields are assigned below
    const response = await timeout(
      fetch(
        url.toString(),
        {
          ...opts,
          signal,
          // @ts-expect-error non-browser fetch implementations may take extra options
          timeout: undefined,
          headers,

          // https://fetch.spec.whatwg.org/#dom-requestinit-duplex
          // https://github.com/whatwg/fetch/issues/1254
          duplex: 'half'
        }
      ),
      opts.timeout,
      abortController
    )

    if (!response.ok && opts.throwHttpErrors) {
      if (opts.handleError) {
        await opts.handleError(response)
      }
      throw new HTTPError(response)
    }

    response.iterator = async function * () {
      yield * fromStream(response.body)
    }

    response.ndjson = async function * () {
      for await (const chunk of ndjson(response.iterator())) {
        if (options.transform) {
          yield options.transform(chunk)
        } else {
          yield chunk
        }
      }
    }

    return response
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  post (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'POST' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  get (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'GET' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  put (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'PUT' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  delete (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'DELETE' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  options (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'OPTIONS' })
  }
}

/**
 * Parses NDJSON chunks from an iterator
 *
 * @param {AsyncIterable<Uint8Array>} source
 * @returns {AsyncIterable<any>}
 */
const ndjson = async function * (source) {
  const decoder = new TextDecoder()
  let buf = ''

  for await (const chunk of source) {
    buf += decoder.decode(chunk, { stream: true })
    const lines = buf.split(/\r?\n/)

    for (let i = 0; i < lines.length - 1; i++) {
      const l = lines[i].trim()
      if (l.length > 0) {
        yield JSON.parse(l)
      }
    }
    buf = lines[lines.length - 1]
  }
  buf += decoder.decode()
  buf = buf.trim()
  if (buf.length !== 0) {
    yield JSON.parse(buf)
  }
}

/**
 * Stream to AsyncIterable
 *
 * @template TChunk
 * @param {ReadableStream<TChunk> | NodeReadableStream | null} source
 * @returns {AsyncIterable<TChunk>}
 */
const fromStream = (source) => {
  if (isAsyncIterable(source)) {
    return source
  }

  // Workaround for https://github.com/node-fetch/node-fetch/issues/766
  if (isNodeReadableStream(source)) {
    const iter = source[Symbol.asyncIterator]()
    return {
      [Symbol.asyncIterator] () {
        return {
          next: iter.next.bind(iter),
          return (value) {
            source.destroy()
            if (typeof iter.return === 'function') {
              return iter.return()
            }
            return Promise.resolve({ done: true, value })
          }
        }
      }
    }
  }

  if (isWebReadableStream(source)) {
    const reader = source.getReader()
    return (async function * () {
      try {
        while (true) {
          // Read from the stream
          const { done, value } = await reader.read()
          // Exit if we're done
          if (done) return
          // Else yield the chunk
          if (value) {
            yield value
          }
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  throw new TypeError('Body can\'t be converted to AsyncIterable')
}

/**
 * Check if it's an AsyncIterable
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|AsyncIterable<TChunk>} value
 * @returns {value is AsyncIterable<TChunk>}
 */
const isAsyncIterable = (value) => {
  return typeof value === 'object' &&
  value !== null &&
  typeof /** @type {any} */(value)[Symbol.asyncIterator] === 'function'
}

/**
 * Check for web readable stream
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|ReadableStream<TChunk>} value
 * @returns {value is ReadableStream<TChunk>}
 */
const isWebReadableStream = (value) => {
  return value && typeof /** @type {any} */(value).getReader === 'function'
}

/**
 * @param {any} value
 * @returns {value is NodeReadableStream}
 */
const isNodeReadableStream = (value) =>
  Object.prototype.hasOwnProperty.call(value, 'readable') &&
  Object.prototype.hasOwnProperty.call(value, 'writable')

HTTP.HTTPError = HTTPError
HTTP.TimeoutError = TimeoutError
HTTP.streamToAsyncIterator = fromStream

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.post = (resource, options) => new HTTP(options).post(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.get = (resource, options) => new HTTP(options).get(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.put = (resource, options) => new HTTP(options).put(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.delete = (resource, options) => new HTTP(options).delete(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.options = (resource, options) => new HTTP(options).options(resource, options)

module.exports = HTTP


/***/ }),

/***/ 24966:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


class TimeoutError extends Error {
  constructor (message = 'Request timed out') {
    super(message)
    this.name = 'TimeoutError'
  }
}
exports.TimeoutError = TimeoutError

class AbortError extends Error {
  constructor (message = 'The operation was aborted.') {
    super(message)
    this.name = 'AbortError'
  }
}
exports.AbortError = AbortError

class HTTPError extends Error {
  /**
   * @param {Response} response
   */
  constructor (response) {
    super(response.statusText)
    this.name = 'HTTPError'
    this.response = response
  }
}
exports.HTTPError = HTTPError


/***/ }),

/***/ 48118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { TimeoutError, AbortError } = __webpack_require__(24966)
// @ts-expect-error
const { Response, Request, Headers, default: fetch } = __webpack_require__(76378)

/**
 * @typedef {import('../types').FetchOptions} FetchOptions
 * @typedef {import('../types').ProgressFn} ProgressFn
 */

/**
 * Fetch with progress
 *
 * @param {string | Request} url
 * @param {FetchOptions} [options]
 * @returns {Promise<ResponseWithURL>}
 */
const fetchWithProgress = (url, options = {}) => {
  const request = new XMLHttpRequest()
  request.open(options.method || 'GET', url.toString(), true)

  const { timeout, headers } = options

  if (timeout && timeout > 0 && timeout < Infinity) {
    request.timeout = timeout
  }

  if (options.overrideMimeType != null) {
    request.overrideMimeType(options.overrideMimeType)
  }

  if (headers) {
    for (const [name, value] of new Headers(headers)) {
      request.setRequestHeader(name, value)
    }
  }

  if (options.signal) {
    options.signal.onabort = () => request.abort()
  }

  if (options.onUploadProgress) {
    request.upload.onprogress = options.onUploadProgress
  }

  // Note: Need to use `arraybuffer` here instead of `blob` because `Blob`
  // instances coming from JSDOM are not compatible with `Response` from
  // node-fetch (which is the setup we get when testing with jest because
  // it uses JSDOM which does not provide a global fetch
  // https://github.com/jsdom/jsdom/issues/1724)
  request.responseType = 'arraybuffer'

  return new Promise((resolve, reject) => {
    /**
     * @param {Event} event
     */
    const handleEvent = (event) => {
      switch (event.type) {
        case 'error': {
          resolve(Response.error())
          break
        }
        case 'load': {
          resolve(
            new ResponseWithURL(request.responseURL, request.response, {
              status: request.status,
              statusText: request.statusText,
              headers: parseHeaders(request.getAllResponseHeaders())
            })
          )
          break
        }
        case 'timeout': {
          reject(new TimeoutError())
          break
        }
        case 'abort': {
          reject(new AbortError())
          break
        }
        default: {
          break
        }
      }
    }
    request.onerror = handleEvent
    request.onload = handleEvent
    request.ontimeout = handleEvent
    request.onabort = handleEvent

    // @ts-expect-error options.body can be a node readable stream, which isn't compatible with XHR, but this
    // file is a browser override so you won't get a node readable stream so ignore the error
    request.send(options.body)
  })
}

const fetchWithStreaming = fetch

/**
 * @param {string | Request} url
 * @param {FetchOptions} options
 */
const fetchWith = (url, options = {}) =>
  (options.onUploadProgress != null)
    ? fetchWithProgress(url, options)
    : fetchWithStreaming(url, options)

/**
 * Parse Headers from a XMLHttpRequest
 *
 * @param {string} input
 * @returns {Headers}
 */
const parseHeaders = (input) => {
  const headers = new Headers()
  for (const line of input.trim().split(/[\r\n]+/)) {
    const index = line.indexOf(': ')
    if (index > 0) {
      headers.set(line.slice(0, index), line.slice(index + 1))
    }
  }

  return headers
}

class ResponseWithURL extends Response {
  /**
   * @param {string} url
   * @param {BodyInit} body
   * @param {ResponseInit} options
   */
  constructor (url, body, options) {
    super(body, options)
    Object.defineProperty(this, 'url', { value: url })
  }
}

module.exports = {
  fetch: fetchWith,
  Request,
  Headers
}


/***/ }),

/***/ 40450:
/***/ ((module) => {

// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

module.exports = isElectron;


/***/ }),

/***/ 57653:
/***/ ((module) => {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ 94090:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  URLWithLegacySupport,
  format,
  URLSearchParams,
  defaultBase
} = __webpack_require__(67734)
const relative = __webpack_require__(74798)

module.exports = {
  URL: URLWithLegacySupport,
  URLSearchParams,
  format,
  relative,
  defaultBase
}


/***/ }),

/***/ 74798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { URLWithLegacySupport, format } = __webpack_require__(67734)

/**
 * @param {string | undefined} url
 * @param {any} [location]
 * @param {any} [protocolMap]
 * @param {any} [defaultProtocol]
 */
module.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {
  let protocol = location.protocol
    ? location.protocol.replace(':', '')
    : 'http'

  // Check protocol map
  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':'
  let urlParsed

  try {
    urlParsed = new URLWithLegacySupport(url)
  } catch (err) {
    urlParsed = {}
  }

  const base = Object.assign({}, location, {
    protocol: protocol || urlParsed.protocol,
    host: location.host || urlParsed.host
  })

  return new URLWithLegacySupport(url, format(base)).toString()
}


/***/ }),

/***/ 67734:
/***/ ((module) => {

"use strict";


const isReactNative =
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative'

function getDefaultBase () {
  if (isReactNative) {
    return 'http://localhost'
  }
  // in some environments i.e. cloudflare workers location is not available
  if (!self.location) {
    return ''
  }

  return self.location.protocol + '//' + self.location.host
}

const URL = self.URL
const defaultBase = getDefaultBase()

class URLWithLegacySupport {
  constructor (url = '', base = defaultBase) {
    this.super = new URL(url, base)
    this.path = this.pathname + this.search
    this.auth =
            this.username && this.password
              ? this.username + ':' + this.password
              : null

    this.query =
            this.search && this.search.startsWith('?')
              ? this.search.slice(1)
              : null
  }

  get hash () {
    return this.super.hash
  }

  get host () {
    return this.super.host
  }

  get hostname () {
    return this.super.hostname
  }

  get href () {
    return this.super.href
  }

  get origin () {
    return this.super.origin
  }

  get password () {
    return this.super.password
  }

  get pathname () {
    return this.super.pathname
  }

  get port () {
    return this.super.port
  }

  get protocol () {
    return this.super.protocol
  }

  get search () {
    return this.super.search
  }

  get searchParams () {
    return this.super.searchParams
  }

  get username () {
    return this.super.username
  }

  set hash (hash) {
    this.super.hash = hash
  }

  set host (host) {
    this.super.host = host
  }

  set hostname (hostname) {
    this.super.hostname = hostname
  }

  set href (href) {
    this.super.href = href
  }

  set password (password) {
    this.super.password = password
  }

  set pathname (pathname) {
    this.super.pathname = pathname
  }

  set port (port) {
    this.super.port = port
  }

  set protocol (protocol) {
    this.super.protocol = protocol
  }

  set search (search) {
    this.super.search = search
  }

  set username (username) {
    this.super.username = username
  }

  /**
   * @param {any} o
   */
  static createObjectURL (o) {
    return URL.createObjectURL(o)
  }

  /**
   * @param {string} o
   */
  static revokeObjectURL (o) {
    URL.revokeObjectURL(o)
  }

  toJSON () {
    return this.super.toJSON()
  }

  toString () {
    return this.super.toString()
  }

  format () {
    return this.toString()
  }
}

/**
 * @param {string | import('url').UrlObject} obj
 */
function format (obj) {
  if (typeof obj === 'string') {
    const url = new URL(obj)

    return url.toString()
  }

  if (!(obj instanceof URL)) {
    const userPass =
            // @ts-ignore its not supported in node but we normalise
            obj.username && obj.password
              // @ts-ignore its not supported in node but we normalise
              ? `${obj.username}:${obj.password}@`
              : ''
    const auth = obj.auth ? obj.auth + '@' : ''
    const port = obj.port ? ':' + obj.port : ''
    const protocol = obj.protocol ? obj.protocol + '//' : ''
    const host = obj.host || ''
    const hostname = obj.hostname || ''
    const search = obj.search || (obj.query ? '?' + obj.query : '')
    const hash = obj.hash || ''
    const pathname = obj.pathname || ''
    // @ts-ignore - path is not supported in node but we normalise
    const path = obj.path || pathname + search

    return `${protocol}${userPass || auth}${
            host || hostname + port
        }${path}${hash}`
  }
}

module.exports = {
  URLWithLegacySupport,
  URLSearchParams: self.URLSearchParams,
  defaultBase,
  format
}


/***/ }),

/***/ 39108:
/***/ ((module) => {

"use strict";


/**
 * Collects all values from an (async) iterable into an array and returns it.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const all = async (source) => {
  const arr = []

  for await (const entry of source) {
    arr.push(entry)
  }

  return arr
}

module.exports = all


/***/ }),

/***/ 41725:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOptionObject = __webpack_require__(57653);

const {hasOwnProperty} = Object.prototype;
const {propertyIsEnumerable} = Object;
const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
	value,
	writable: true,
	enumerable: true,
	configurable: true
});

const globalThis = this;
const defaultMergeOptions = {
	concatArrays: false,
	ignoreUndefined: false
};

const getEnumerableOwnPropertyKeys = value => {
	const keys = [];

	for (const key in value) {
		if (hasOwnProperty.call(value, key)) {
			keys.push(key);
		}
	}

	/* istanbul ignore else  */
	if (Object.getOwnPropertySymbols) {
		const symbols = Object.getOwnPropertySymbols(value);

		for (const symbol of symbols) {
			if (propertyIsEnumerable.call(value, symbol)) {
				keys.push(symbol);
			}
		}
	}

	return keys;
};

function clone(value) {
	if (Array.isArray(value)) {
		return cloneArray(value);
	}

	if (isOptionObject(value)) {
		return cloneOptionObject(value);
	}

	return value;
}

function cloneArray(array) {
	const result = array.slice(0, 0);

	getEnumerableOwnPropertyKeys(array).forEach(key => {
		defineProperty(result, key, clone(array[key]));
	});

	return result;
}

function cloneOptionObject(object) {
	const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};

	getEnumerableOwnPropertyKeys(object).forEach(key => {
		defineProperty(result, key, clone(object[key]));
	});

	return result;
}

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {string[]} keys keys to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
const mergeKeys = (merged, source, keys, config) => {
	keys.forEach(key => {
		if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
			return;
		}

		// Do not recurse into prototype chain of merged
		if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
			defineProperty(merged, key, merge(merged[key], source[key], config));
		} else {
			defineProperty(merged, key, clone(source[key]));
		}
	});

	return merged;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 *
 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
 */
const concatArrays = (merged, source, config) => {
	let result = merged.slice(0, 0);
	let resultIndex = 0;

	[merged, source].forEach(array => {
		const indices = [];

		// `result.concat(array)` with cloning
		for (let k = 0; k < array.length; k++) {
			if (!hasOwnProperty.call(array, k)) {
				continue;
			}

			indices.push(String(k));

			if (array === merged) {
				// Already cloned
				defineProperty(result, resultIndex++, array[k]);
			} else {
				defineProperty(result, resultIndex++, clone(array[k]));
			}
		}

		// Merge non-index keys
		result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
	});

	return result;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
function merge(merged, source, config) {
	if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
		return concatArrays(merged, source, config);
	}

	if (!isOptionObject(source) || !isOptionObject(merged)) {
		return clone(source);
	}

	return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
}

module.exports = function (...options) {
	const config = merge(clone(defaultMergeOptions), (this !== globalThis && this) || {}, defaultMergeOptions);
	let merged = {_: {}};

	for (const option of options) {
		if (option === undefined) {
			continue;
		}

		if (!isOptionObject(option)) {
			throw new TypeError('`' + option + '` is not an Option Object');
		}

		merged = merge(merged, {_: option}, config);
	}

	return merged._;
};


/***/ }),

/***/ 6552:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 35646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response) {
  module.exports = {
    default: globalThis.fetch,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
  }
} else {
  module.exports = {
    default: (__webpack_require__(58835)["default"]),
    Headers: (__webpack_require__(58835).Headers),
    Request: (__webpack_require__(58835).Request),
    Response: (__webpack_require__(58835).Response)
  }
}


/***/ }),

/***/ 58835:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof __webpack_require__.g !== 'undefined') { return __webpack_require__.g; }
	throw new Error('unable to locate global object');
}

var globalObject = getGlobal();

module.exports = exports = globalObject.fetch;

// Needed for TypeScript and Webpack.
if (globalObject.fetch) {
	exports["default"] = globalObject.fetch.bind(globalObject);
}

exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;


/***/ }),

/***/ 53662:
/***/ ((module) => {

module.exports = readable => {
  // Node.js stream
  if (readable[Symbol.asyncIterator]) return readable

  // Browser ReadableStream
  if (readable.getReader) {
    return (async function * () {
      const reader = readable.getReader()

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) return
          yield value
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  throw new Error('unknown stream')
}


/***/ }),

/***/ 16745:
/***/ ((module) => {

module.exports = read

var MSB = 0x80
  , REST = 0x7F

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++]
    res += shift < 28
      ? (b & REST) << shift
      : (b & REST) * Math.pow(2, shift)
    shift += 7
  } while (b >= MSB)

  read.bytes = counter - offset

  return res
}


/***/ }),

/***/ 86699:
/***/ ((module) => {

module.exports = encode

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31)

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0
    throw new RangeError('Could not encode varint')
  }
  out = out || []
  offset = offset || 0
  var oldOffset = offset

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB
    num /= 128
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB
    num >>>= 7
  }
  out[offset] = num | 0
  
  encode.bytes = offset - oldOffset + 1
  
  return out
}


/***/ }),

/***/ 39057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    encode: __webpack_require__(86699)
  , decode: __webpack_require__(16745)
  , encodingLength: __webpack_require__(50753)
}


/***/ }),

/***/ 50753:
/***/ ((module) => {


var N1 = Math.pow(2,  7)
var N2 = Math.pow(2, 14)
var N3 = Math.pow(2, 21)
var N4 = Math.pow(2, 28)
var N5 = Math.pow(2, 35)
var N6 = Math.pow(2, 42)
var N7 = Math.pow(2, 49)
var N8 = Math.pow(2, 56)
var N9 = Math.pow(2, 63)

module.exports = function (value) {
  return (
    value < N1 ? 1
  : value < N2 ? 2
  : value < N3 ? 3
  : value < N4 ? 4
  : value < N5 ? 5
  : value < N6 ? 6
  : value < N7 ? 7
  : value < N8 ? 8
  : value < N9 ? 9
  :              10
  )
}


/***/ }),

/***/ 98996:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 64086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41725);
/**
 * Thin ESM wrapper for CJS named exports.
 *
 * Ref: https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 72956:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let durationRE = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/uig


/**
 * conversion ratios
 */

parse.nanosecond =
parse.ns = 1 / 1e6

parse['µs'] =
parse['μs'] =
parse.us =
parse.microsecond = 1 / 1e3

parse.millisecond =
parse.ms =
parse[''] = 1

parse.second =
parse.sec =
parse.s = parse.ms * 1000

parse.minute =
parse.min =
parse.m = parse.s * 60

parse.hour =
parse.hr =
parse.h = parse.m * 60

parse.day =
parse.d = parse.h * 24

parse.week =
parse.wk =
parse.w = parse.d * 7

parse.month =
parse.b =
parse.d * (365.25 / 12)

parse.year =
parse.yr =
parse.y = parse.d * 365.25

/**
 * convert `str` to ms
 *
 * @param {String} str
 * @param {String} format
 * @return {Number}
 */

function parse(str='', format='ms'){
  var result = null
  // ignore commas/placeholders
  str = (str+'').replace(/(\d)[,_](\d)/g, '$1$2')
  str.replace(durationRE, function(_, n, units){
    units = unitRatio(units)
    if (units) result = (result || 0) + parseFloat(n, 10) * units
  })

  return result && (result / (unitRatio(format) || 1))
}

function unitRatio(str) {
  return parse[str] || parse[str.toLowerCase().replace(/s$/, '')]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ 55086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h6: () => (/* binding */ isIP),
  C: () => (/* binding */ isIPv4),
  aY: () => (/* binding */ isIPv6)
});

// UNUSED EXPORTS: ipVersion

;// CONCATENATED MODULE: ./node_modules/.pnpm/@chainsafe+is-ip@2.0.1/node_modules/@chainsafe/is-ip/lib/parser.js
/* eslint-disable @typescript-eslint/no-unsafe-return */
class Parser {
    index = 0;
    input = "";
    new(input) {
        this.index = 0;
        this.input = input;
        return this;
    }
    /** Run a parser, and restore the pre-parse state if it fails. */
    readAtomically(fn) {
        const index = this.index;
        const result = fn();
        if (result === undefined) {
            this.index = index;
        }
        return result;
    }
    /** Run a parser, but fail if the entire input wasn't consumed. Doesn't run atomically. */
    parseWith(fn) {
        const result = fn();
        if (this.index !== this.input.length) {
            return undefined;
        }
        return result;
    }
    /** Peek the next character from the input */
    peekChar() {
        if (this.index >= this.input.length) {
            return undefined;
        }
        return this.input[this.index];
    }
    /** Read the next character from the input */
    readChar() {
        if (this.index >= this.input.length) {
            return undefined;
        }
        return this.input[this.index++];
    }
    /** Read the next character from the input if it matches the target. */
    readGivenChar(target) {
        return this.readAtomically(() => {
            const char = this.readChar();
            if (char !== target) {
                return undefined;
            }
            return char;
        });
    }
    /**
     * Helper for reading separators in an indexed loop. Reads the separator
     * character iff index > 0, then runs the parser. When used in a loop,
     * the separator character will only be read on index > 0 (see
     * readIPv4Addr for an example)
     */
    readSeparator(sep, index, inner) {
        return this.readAtomically(() => {
            if (index > 0) {
                if (this.readGivenChar(sep) === undefined) {
                    return undefined;
                }
            }
            return inner();
        });
    }
    /**
     * Read a number off the front of the input in the given radix, stopping
     * at the first non-digit character or eof. Fails if the number has more
     * digits than max_digits or if there is no number.
     */
    readNumber(radix, maxDigits, allowZeroPrefix, maxBytes) {
        return this.readAtomically(() => {
            let result = 0;
            let digitCount = 0;
            const leadingChar = this.peekChar();
            if (leadingChar === undefined) {
                return undefined;
            }
            const hasLeadingZero = leadingChar === "0";
            const maxValue = 2 ** (8 * maxBytes) - 1;
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const digit = this.readAtomically(() => {
                    const char = this.readChar();
                    if (char === undefined) {
                        return undefined;
                    }
                    const num = Number.parseInt(char, radix);
                    if (Number.isNaN(num)) {
                        return undefined;
                    }
                    return num;
                });
                if (digit === undefined) {
                    break;
                }
                result *= radix;
                result += digit;
                if (result > maxValue) {
                    return undefined;
                }
                digitCount += 1;
                if (maxDigits !== undefined) {
                    if (digitCount > maxDigits) {
                        return undefined;
                    }
                }
            }
            if (digitCount === 0) {
                return undefined;
            }
            else if (!allowZeroPrefix && hasLeadingZero && digitCount > 1) {
                return undefined;
            }
            else {
                return result;
            }
        });
    }
    /** Read an IPv4 address. */
    readIPv4Addr() {
        return this.readAtomically(() => {
            const out = new Uint8Array(4);
            for (let i = 0; i < out.length; i++) {
                const ix = this.readSeparator(".", i, () => this.readNumber(10, 3, false, 1));
                if (ix === undefined) {
                    return undefined;
                }
                out[i] = ix;
            }
            return out;
        });
    }
    /** Read an IPv6 Address. */
    readIPv6Addr() {
        /**
         * Read a chunk of an IPv6 address into `groups`. Returns the number
         * of groups read, along with a bool indicating if an embedded
         * trailing IPv4 address was read. Specifically, read a series of
         * colon-separated IPv6 groups (0x0000 - 0xFFFF), with an optional
         * trailing embedded IPv4 address.
         */
        const readGroups = (groups) => {
            for (let i = 0; i < groups.length / 2; i++) {
                const ix = i * 2;
                // Try to read a trailing embedded IPv4 address. There must be at least 4 groups left.
                if (i < groups.length - 3) {
                    const ipv4 = this.readSeparator(":", i, () => this.readIPv4Addr());
                    if (ipv4 !== undefined) {
                        groups[ix] = ipv4[0];
                        groups[ix + 1] = ipv4[1];
                        groups[ix + 2] = ipv4[2];
                        groups[ix + 3] = ipv4[3];
                        return [ix + 4, true];
                    }
                }
                const group = this.readSeparator(":", i, () => this.readNumber(16, 4, true, 2));
                if (group === undefined) {
                    return [ix, false];
                }
                groups[ix] = group >> 8;
                groups[ix + 1] = group & 255;
            }
            return [groups.length, false];
        };
        return this.readAtomically(() => {
            // Read the front part of the address; either the whole thing, or up to the first ::
            const head = new Uint8Array(16);
            const [headSize, headIp4] = readGroups(head);
            if (headSize === 16) {
                return head;
            }
            // IPv4 part is not allowed before `::`
            if (headIp4) {
                return undefined;
            }
            // Read `::` if previous code parsed less than 8 groups.
            // `::` indicates one or more groups of 16 bits of zeros.
            if (this.readGivenChar(":") === undefined) {
                return undefined;
            }
            if (this.readGivenChar(":") === undefined) {
                return undefined;
            }
            // Read the back part of the address. The :: must contain at least one
            // set of zeroes, so our max length is 7.
            const tail = new Uint8Array(14);
            const limit = 16 - (headSize + 2);
            const [tailSize] = readGroups(tail.subarray(0, limit));
            // Concat the head and tail of the IP address
            head.set(tail.subarray(0, tailSize), 16 - tailSize);
            return head;
        });
    }
    /** Read an IP Address, either IPv4 or IPv6. */
    readIPAddr() {
        return this.readIPv4Addr() ?? this.readIPv6Addr();
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@chainsafe+is-ip@2.0.1/node_modules/@chainsafe/is-ip/lib/parse.js

// See https://stackoverflow.com/questions/166132/maximum-length-of-the-textual-representation-of-an-ipv6-address
const MAX_IPV6_LENGTH = 45;
const MAX_IPV4_LENGTH = 15;
const parser = new Parser();
/** Parse `input` into IPv4 bytes. */
function parseIPv4(input) {
    if (input.length > MAX_IPV4_LENGTH) {
        return undefined;
    }
    return parser.new(input).parseWith(() => parser.readIPv4Addr());
}
/** Parse `input` into IPv6 bytes. */
function parseIPv6(input) {
    if (input.length > MAX_IPV6_LENGTH) {
        return undefined;
    }
    return parser.new(input).parseWith(() => parser.readIPv6Addr());
}
/** Parse `input` into IPv4 or IPv6 bytes. */
function parseIP(input) {
    if (input.length > MAX_IPV6_LENGTH) {
        return undefined;
    }
    return parser.new(input).parseWith(() => parser.readIPAddr());
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@chainsafe+is-ip@2.0.1/node_modules/@chainsafe/is-ip/lib/is-ip.js

/** Check if `input` is IPv4. */
function isIPv4(input) {
    return Boolean(parseIPv4(input));
}
/** Check if `input` is IPv6. */
function isIPv6(input) {
    return Boolean(parseIPv6(input));
}
/** Check if `input` is IPv4 or IPv6. */
function isIP(input) {
    return Boolean(parseIP(input));
}
/**
 * @returns `6` if `input` is IPv6, `4` if `input` is IPv4, or `undefined` if `input` is neither.
 */
function ipVersion(input) {
    if (isIPv4(input)) {
        return 4;
    }
    else if (isIPv6(input)) {
        return 6;
    }
    else {
        return undefined;
    }
}


/***/ }),

/***/ 16305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   code: () => (/* binding */ code),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   name: () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40911);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81525);



// https://github.com/ipfs/go-ipfs/issues/3570#issuecomment-273931692
const CID_CBOR_TAG = 42

/**
 * @template T
 * @typedef {import('multiformats/codecs/interface').ByteView<T>} ByteView
 */

/**
 * cidEncoder will receive all Objects during encode, it needs to filter out
 * anything that's not a CID and return `null` for that so it's encoded as
 * normal.
 *
 * @param {any} obj
 * @returns {cborg.Token[]|null}
 */
function cidEncoder (obj) {
  if (obj.asCID !== obj && obj['/'] !== obj.bytes) {
    return null // any other kind of object
  }
  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__/* .CID */ .k0.asCID(obj)
  /* c8 ignore next 4 */
  // very unlikely case, and it'll probably throw a recursion error in cborg
  if (!cid) {
    return null
  }
  const bytes = new Uint8Array(cid.bytes.byteLength + 1)
  bytes.set(cid.bytes, 1) // prefix is 0x00, for historical reasons
  return [
    new cborg__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .Dy.tag, CID_CBOR_TAG),
    new cborg__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .Dy.bytes, bytes)
  ]
}

// eslint-disable-next-line jsdoc/require-returns-check
/**
 * Intercept all `undefined` values from an object walk and reject the entire
 * object if we find one.
 *
 * @returns {null}
 */
function undefinedEncoder () {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded')
}

/**
 * Intercept all `number` values from an object walk and reject the entire
 * object if we find something that doesn't fit the IPLD data model (NaN &
 * Infinity).
 *
 * @param {number} num
 * @returns {null}
 */
function numberEncoder (num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded')
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded')
  }
  return null
}

const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
}

/**
 * @param {Uint8Array} bytes
 * @returns {CID}
 */
function cidDecoder (bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00')
  }
  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__/* .CID */ .k0.decode(bytes.subarray(1)) // ignore leading 0x00
}

const decodeOptions = {
  allowIndefinite: false,
  coerceUndefinedToNull: true,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true, // this will lead to BigInt for ints outside of
  // safe-integer range, which may surprise users
  strict: true,
  useMaps: false,
  rejectDuplicateMapKeys: true,
  /** @type {import('cborg').TagDecoder[]} */
  tags: []
}
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder

const name = 'dag-cbor'
const code = 0x71

/**
 * @template T
 * @param {T} node
 * @returns {ByteView<T>}
 */
const encode = (node) => cborg__WEBPACK_IMPORTED_MODULE_0__/* .encode */ .cv(node, encodeOptions)

/**
 * @template T
 * @param {ByteView<T>} data
 * @returns {T}
 */
const decode = (data) => cborg__WEBPACK_IMPORTED_MODULE_0__/* .decode */ .Jx(data, decodeOptions)


/***/ }),

/***/ 68665:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   code: () => (/* binding */ code),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var multiformats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32207);
/* harmony import */ var multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40980);
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40911);
/* harmony import */ var cborg_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30918);
/* eslint max-depth: ["error", 7] */





/**
 * @template T
 * @typedef {import('multiformats/codecs/interface').ByteView<T>} ByteView
 */
/**
 * @template T
 * @typedef {import('multiformats').ToString<T>} ToString
 */
/**
 * @typedef {import('cborg/interface').DecodeTokenizer} DecodeTokenizer
 */

/**
 * cidEncoder will receive all Objects during encode, it needs to filter out
 * anything that's not a CID and return `null` for that so it's encoded as
 * normal. Encoding a CID means replacing it with a `{"/":"<CidString>}`
 * object as per the DAG-JSON spec.
 *
 * @param {any} obj
 * @returns {Token[]|null}
 */
function cidEncoder (obj) {
  if (obj.asCID !== obj && obj['/'] !== obj.bytes) {
    return null // any other kind of object
  }
  const cid = multiformats__WEBPACK_IMPORTED_MODULE_0__/* .CID */ .k0.asCID(obj)
  /* c8 ignore next 4 */
  // very unlikely case, and it'll probably throw a recursion error in cborg
  if (!cid) {
    return null
  }
  const cidString = cid.toString()

  return [
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.map, Infinity, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string, '/', 1), // key
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string, cidString, cidString.length), // value
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.break, undefined, 1)
  ]
}

/**
 * bytesEncoder will receive all Uint8Arrays (and friends) during encode, it
 * needs to replace it with a `{"/":{"bytes":"Base64ByteString"}}` object as
 * per the DAG-JSON spec.
 *
 * @param {Uint8Array} bytes
 * @returns {Token[]|null}
 */
function bytesEncoder (bytes) {
  const bytesString = multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_1__.base64.encode(bytes).slice(1) // no mbase prefix
  return [
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.map, Infinity, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string, '/', 1), // key
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.map, Infinity, 1), // value
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string, 'bytes', 5), // inner key
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string, bytesString, bytesString.length), // inner value
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.break, undefined, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.break, undefined, 1)
  ]
}

// eslint-disable-next-line jsdoc/require-returns-check
/**
 * Intercept all `undefined` values from an object walk and reject the entire
 * object if we find one.
 *
 * @returns {null}
 */
function undefinedEncoder () {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded')
}

/**
 * Intercept all `number` values from an object walk and reject the entire
 * object if we find something that doesn't fit the IPLD data model (NaN &
 * Infinity).
 *
 * @param {number} num
 * @returns {null}
 */
function numberEncoder (num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded')
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded')
  }
  return null // process with standard number encoder
}

const encodeOptions = {
  typeEncoders: {
    Object: cidEncoder,
    Uint8Array: bytesEncoder, // TODO: all the typedarrays
    Buffer: bytesEncoder, // TODO: all the typedarrays
    undefined: undefinedEncoder,
    number: numberEncoder
  }
}

/**
 * @implements {DecodeTokenizer}
 */
class DagJsonTokenizer extends cborg_json__WEBPACK_IMPORTED_MODULE_3__/* .Tokenizer */ .d2 {
  /**
   * @param {Uint8Array} data
   * @param {object} [options]
   */
  constructor (data, options) {
    super(data, options)
    /** @type {Token[]} */
    this.tokenBuffer = []
  }

  /**
   * @returns {boolean}
   */
  done () {
    return this.tokenBuffer.length === 0 && super.done()
  }

  /**
   * @returns {Token}
   */
  _next () {
    if (this.tokenBuffer.length > 0) {
      // @ts-ignore https://github.com/Microsoft/TypeScript/issues/30406
      return this.tokenBuffer.pop()
    }
    return super.next()
  }

  /**
   * Implements rules outlined in https://github.com/ipld/specs/pull/356
   *
   * @returns {Token}
   */
  next () {
    const token = this._next()

    if (token.type === cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.map) {
      const keyToken = this._next()
      if (keyToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string && keyToken.value === '/') {
        const valueToken = this._next()
        if (valueToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string) { // *must* be a CID
          const breakToken = this._next() // swallow the end-of-map token
          if (breakToken.type !== cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.break) {
            throw new Error('Invalid encoded CID form')
          }
          this.tokenBuffer.push(valueToken) // CID.parse will pick this up after our tag token
          return new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.tag, 42, 0)
        }
        if (valueToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.map) {
          const innerKeyToken = this._next()
          if (innerKeyToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string && innerKeyToken.value === 'bytes') {
            const innerValueToken = this._next()
            if (innerValueToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.string) { // *must* be Bytes
              for (let i = 0; i < 2; i++) {
                const breakToken = this._next() // swallow two end-of-map tokens
                if (breakToken.type !== cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.break) {
                  throw new Error('Invalid encoded Bytes form')
                }
              }
              const bytes = multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_1__.base64.decode(`m${innerValueToken.value}`)
              return new cborg__WEBPACK_IMPORTED_MODULE_2__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_2__/* .Type */ .Dy.bytes, bytes, innerValueToken.value.length)
            }
            this.tokenBuffer.push(innerValueToken) // bail
          }
          this.tokenBuffer.push(innerKeyToken) // bail
        }
        this.tokenBuffer.push(valueToken) // bail
      }
      this.tokenBuffer.push(keyToken) // bail
    }
    return token
  }
}

const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true, // this will lead to BigInt for ints outside of
  // safe-integer range, which may surprise users
  strict: true,
  useMaps: false,
  rejectDuplicateMapKeys: true,
  /** @type {import('cborg').TagDecoder[]} */
  tags: []
}

// we're going to get TAG(42)STRING("bafy...") from the tokenizer so we only need
// to deal with the STRING("bafy...") at this point
decodeOptions.tags[42] = multiformats__WEBPACK_IMPORTED_MODULE_0__/* .CID */ .k0.parse

const name = 'dag-json'
const code = 0x0129

/**
 * @template T
 * @param {T} node
 * @returns {ByteView<T>}
 */
const encode = (node) => cborg_json__WEBPACK_IMPORTED_MODULE_3__/* .encode */ .cv(node, encodeOptions)

/**
 * @template T
 * @param {ByteView<T>} data
 * @returns {T}
 */
const decode = (data) => {
  // the tokenizer is stateful so we need a single instance of it
  const options = Object.assign(decodeOptions, { tokenizer: new DagJsonTokenizer(data, decodeOptions) })
  return cborg_json__WEBPACK_IMPORTED_MODULE_3__/* .decode */ .Jx(data, options)
}

/**
 * @template T
 * @param {T} node
 * @returns {ToString<T>}
 */
const format = (node) => utf8Decoder.decode(encode(node))

const utf8Decoder = new TextDecoder()

/**
 * @template T
 * @param {ToString<T>} data
 * @returns {T}
 */
const parse = (data) => decode(utf8Encoder.encode(data))
const utf8Encoder = new TextEncoder()


/***/ }),

/***/ 63660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  code: () => (/* binding */ code),
  createLink: () => (/* reexport */ createLink),
  createNode: () => (/* reexport */ createNode),
  decode: () => (/* binding */ decode),
  encode: () => (/* binding */ encode),
  name: () => (/* binding */ src_name),
  prepare: () => (/* reexport */ prepare),
  validate: () => (/* reexport */ validate)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/cid.js
var src_cid = __webpack_require__(81525);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ipld+dag-pb@4.0.2/node_modules/@ipld/dag-pb/src/pb-decode.js
const textDecoder = new TextDecoder()

/**
 * @typedef {import('./interface').RawPBLink} RawPBLink
 */

/**
 * @typedef {import('./interface').RawPBNode} RawPBNode
 */

/**
 * @param {Uint8Array} bytes
 * @param {number} offset
 * @returns {[number, number]}
 */
function decodeVarint (bytes, offset) {
  let v = 0

  for (let shift = 0; ; shift += 7) {
    /* c8 ignore next 3 */
    if (shift >= 64) {
      throw new Error('protobuf: varint overflow')
    }
    /* c8 ignore next 3 */
    if (offset >= bytes.length) {
      throw new Error('protobuf: unexpected end of data')
    }

    const b = bytes[offset++]
    v += shift < 28 ? (b & 0x7f) << shift : (b & 0x7f) * (2 ** shift)
    if (b < 0x80) {
      break
    }
  }
  return [v, offset]
}

/**
 * @param {Uint8Array} bytes
 * @param {number} offset
 * @returns {[Uint8Array, number]}
 */
function decodeBytes (bytes, offset) {
  let byteLen
  ;[byteLen, offset] = decodeVarint(bytes, offset)
  const postOffset = offset + byteLen

  /* c8 ignore next 3 */
  if (byteLen < 0 || postOffset < 0) {
    throw new Error('protobuf: invalid length')
  }
  /* c8 ignore next 3 */
  if (postOffset > bytes.length) {
    throw new Error('protobuf: unexpected end of data')
  }

  return [bytes.subarray(offset, postOffset), postOffset]
}

/**
 * @param {Uint8Array} bytes
 * @param {number} index
 * @returns {[number, number, number]}
 */
function decodeKey (bytes, index) {
  let wire
  ;[wire, index] = decodeVarint(bytes, index)
  // [wireType, fieldNum, newIndex]
  return [wire & 0x7, wire >> 3, index]
}

/**
 * @param {Uint8Array} bytes
 * @returns {RawPBLink}
 */
function decodeLink (bytes) {
  /** @type {RawPBLink} */
  const link = {}
  const l = bytes.length
  let index = 0

  while (index < l) {
    let wireType, fieldNum
    ;[wireType, fieldNum, index] = decodeKey(bytes, index)

    if (fieldNum === 1) {
      if (link.Hash) {
        throw new Error('protobuf: (PBLink) duplicate Hash section')
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Hash`)
      }
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Name before Hash')
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Hash')
      }

      [link.Hash, index] = decodeBytes(bytes, index)
    } else if (fieldNum === 2) {
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Name section')
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Name`)
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Name')
      }

      let byts
      ;[byts, index] = decodeBytes(bytes, index)
      link.Name = textDecoder.decode(byts)
    } else if (fieldNum === 3) {
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Tsize section')
      }
      if (wireType !== 0) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Tsize`)
      }

      [link.Tsize, index] = decodeVarint(bytes, index)
    } else {
      throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${fieldNum}`)
    }
  }

  /* c8 ignore next 3 */
  if (index > l) {
    throw new Error('protobuf: (PBLink) unexpected end of data')
  }

  return link
}

/**
 * @param {Uint8Array} bytes
 * @returns {RawPBNode}
 */
function decodeNode (bytes) {
  const l = bytes.length
  let index = 0
  /** @type {RawPBLink[]|void} */
  let links
  let linksBeforeData = false
  /** @type {Uint8Array|void} */
  let data

  while (index < l) {
    let wireType, fieldNum
    ;[wireType, fieldNum, index] = decodeKey(bytes, index)

    if (wireType !== 2) {
      throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${wireType}`)
    }

    if (fieldNum === 1) {
      if (data) {
        throw new Error('protobuf: (PBNode) duplicate Data section')
      }

      [data, index] = decodeBytes(bytes, index)
      if (links) {
        linksBeforeData = true
      }
    } else if (fieldNum === 2) {
      if (linksBeforeData) { // interleaved Links/Data/Links
        throw new Error('protobuf: (PBNode) duplicate Links section')
      } else if (!links) {
        links = []
      }
      let byts
      ;[byts, index] = decodeBytes(bytes, index)
      links.push(decodeLink(byts))
    } else {
      throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${fieldNum}`)
    }
  }

  /* c8 ignore next 3 */
  if (index > l) {
    throw new Error('protobuf: (PBNode) unexpected end of data')
  }

  /** @type {RawPBNode} */
  const node = {}
  if (data) {
    node.Data = data
  }
  node.Links = links || []
  return node
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ipld+dag-pb@4.0.2/node_modules/@ipld/dag-pb/src/pb-encode.js
const textEncoder = new TextEncoder()
const maxInt32 = 2 ** 32
const maxUInt32 = 2 ** 31

/**
 * @typedef {import('./interface').RawPBLink} RawPBLink
 */

/**
 * @typedef {import('./interface').RawPBNode} RawPBNode
 */

// the encoders work backward from the end of the bytes array

/**
 * encodeLink() is passed a slice of the parent byte array that ends where this
 * link needs to end, so it packs to the right-most part of the passed `bytes`
 *
 * @param {RawPBLink} link
 * @param {Uint8Array} bytes
 * @returns {number}
 */
function encodeLink (link, bytes) {
  let i = bytes.length

  if (typeof link.Tsize === 'number') {
    if (link.Tsize < 0) {
      throw new Error('Tsize cannot be negative')
    }
    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error('Tsize too large for encoding')
    }
    i = encodeVarint(bytes, i, link.Tsize) - 1
    bytes[i] = 0x18
  }

  if (typeof link.Name === 'string') {
    const nameBytes = textEncoder.encode(link.Name)
    i -= nameBytes.length
    bytes.set(nameBytes, i)
    i = encodeVarint(bytes, i, nameBytes.length) - 1
    bytes[i] = 0x12
  }

  if (link.Hash) {
    i -= link.Hash.length
    bytes.set(link.Hash, i)
    i = encodeVarint(bytes, i, link.Hash.length) - 1
    bytes[i] = 0xa
  }

  return bytes.length - i
}

/**
 * Encodes a PBNode into a new byte array of precisely the correct size
 *
 * @param {RawPBNode} node
 * @returns {Uint8Array}
 */
function encodeNode (node) {
  const size = sizeNode(node)
  const bytes = new Uint8Array(size)
  let i = size

  if (node.Data) {
    i -= node.Data.length
    bytes.set(node.Data, i)
    i = encodeVarint(bytes, i, node.Data.length) - 1
    bytes[i] = 0xa
  }

  if (node.Links) {
    for (let index = node.Links.length - 1; index >= 0; index--) {
      const size = encodeLink(node.Links[index], bytes.subarray(0, i))
      i -= size
      i = encodeVarint(bytes, i, size) - 1
      bytes[i] = 0x12
    }
  }

  return bytes
}

/**
 * work out exactly how many bytes this link takes up
 *
 * @param {RawPBLink} link
 * @returns
 */
function sizeLink (link) {
  let n = 0

  if (link.Hash) {
    const l = link.Hash.length
    n += 1 + l + sov(l)
  }

  if (typeof link.Name === 'string') {
    const l = textEncoder.encode(link.Name).length
    n += 1 + l + sov(l)
  }

  if (typeof link.Tsize === 'number') {
    n += 1 + sov(link.Tsize)
  }

  return n
}

/**
 * Work out exactly how many bytes this node takes up
 *
 * @param {RawPBNode} node
 * @returns {number}
 */
function sizeNode (node) {
  let n = 0

  if (node.Data) {
    const l = node.Data.length
    n += 1 + l + sov(l)
  }

  if (node.Links) {
    for (const link of node.Links) {
      const l = sizeLink(link)
      n += 1 + l + sov(l)
    }
  }

  return n
}

/**
 * @param {Uint8Array} bytes
 * @param {number} offset
 * @param {number} v
 * @returns {number}
 */
function encodeVarint (bytes, offset, v) {
  offset -= sov(v)
  const base = offset

  while (v >= maxUInt32) {
    bytes[offset++] = (v & 0x7f) | 0x80
    v /= 128
  }

  while (v >= 128) {
    bytes[offset++] = (v & 0x7f) | 0x80
    v >>>= 7
  }

  bytes[offset] = v

  return base
}

/**
 * size of varint
 *
 * @param {number} x
 * @returns {number}
 */
function sov (x) {
  if (x % 2 === 0) {
    x++
  }
  return Math.floor((len64(x) + 6) / 7)
}

/**
 * golang math/bits, how many bits does it take to represent this integer?
 *
 * @param {number} x
 * @returns {number}
 */
function len64 (x) {
  let n = 0
  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32)
    n = 32
  }
  if (x >= (1 << 16)) {
    x >>>= 16
    n += 16
  }
  if (x >= (1 << 8)) {
    x >>>= 8
    n += 8
  }
  return n + len8tab[x]
}

// golang math/bits
const len8tab = [
  0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
]

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ipld+dag-pb@4.0.2/node_modules/@ipld/dag-pb/src/util.js


/**
 * @typedef {import('./interface').PBLink} PBLink
 * @typedef {import('./interface').PBNode} PBNode
 */

const pbNodeProperties = ['Data', 'Links']
const pbLinkProperties = ['Hash', 'Name', 'Tsize']

const util_textEncoder = new TextEncoder()

/**
 * @param {PBLink} a
 * @param {PBLink} b
 * @returns {number}
 */
function linkComparator (a, b) {
  if (a === b) {
    return 0
  }

  const abuf = a.Name ? util_textEncoder.encode(a.Name) : []
  const bbuf = b.Name ? util_textEncoder.encode(b.Name) : []

  let x = abuf.length
  let y = bbuf.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (abuf[i] !== bbuf[i]) {
      x = abuf[i]
      y = bbuf[i]
      break
    }
  }

  return x < y ? -1 : y < x ? 1 : 0
}

/**
 * @param {any} node
 * @param {string[]} properties
 * @returns {boolean}
 */
function hasOnlyProperties (node, properties) {
  return !Object.keys(node).some((p) => !properties.includes(p))
}

/**
 * Converts a CID, or a PBLink-like object to a PBLink
 *
 * @param {any} link
 * @returns {PBLink}
 */
function asLink (link) {
  if (typeof link.asCID === 'object') {
    const Hash = src_cid/* CID */.k0.asCID(link)
    if (!Hash) {
      throw new TypeError('Invalid DAG-PB form')
    }
    return { Hash }
  }

  if (typeof link !== 'object' || Array.isArray(link)) {
    throw new TypeError('Invalid DAG-PB form')
  }

  const pbl = {}

  if (link.Hash) {
    let cid = src_cid/* CID */.k0.asCID(link.Hash)
    try {
      if (!cid) {
        if (typeof link.Hash === 'string') {
          cid = src_cid/* CID */.k0.parse(link.Hash)
        } else if (link.Hash instanceof Uint8Array) {
          cid = src_cid/* CID */.k0.decode(link.Hash)
        }
      }
    } catch (/** @type {any} */ e) {
      throw new TypeError(`Invalid DAG-PB form: ${e.message}`)
    }

    if (cid) {
      pbl.Hash = cid
    }
  }

  if (!pbl.Hash) {
    throw new TypeError('Invalid DAG-PB form')
  }

  if (typeof link.Name === 'string') {
    pbl.Name = link.Name
  }

  if (typeof link.Tsize === 'number') {
    pbl.Tsize = link.Tsize
  }

  return pbl
}

/**
 * @param {any} node
 * @returns {PBNode}
 */
function prepare (node) {
  if (node instanceof Uint8Array || typeof node === 'string') {
    node = { Data: node }
  }

  if (typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form')
  }

  /** @type {PBNode} */
  const pbn = {}

  if (node.Data !== undefined) {
    if (typeof node.Data === 'string') {
      pbn.Data = util_textEncoder.encode(node.Data)
    } else if (node.Data instanceof Uint8Array) {
      pbn.Data = node.Data
    } else {
      throw new TypeError('Invalid DAG-PB form')
    }
  }

  if (node.Links !== undefined) {
    if (Array.isArray(node.Links)) {
      pbn.Links = node.Links.map(asLink)
      pbn.Links.sort(linkComparator)
    } else {
      throw new TypeError('Invalid DAG-PB form')
    }
  } else {
    pbn.Links = []
  }

  return pbn
}

/**
 * @param {PBNode} node
 */
function validate (node) {
  /*
  type PBLink struct {
    Hash optional Link
    Name optional String
    Tsize optional Int
  }

  type PBNode struct {
    Links [PBLink]
    Data optional Bytes
  }
  */
  // @ts-ignore private property for TS
  if (!node || typeof node !== 'object' || Array.isArray(node) || node instanceof Uint8Array || (node['/'] && node['/'] === node.bytes)) {
    throw new TypeError('Invalid DAG-PB form')
  }

  if (!hasOnlyProperties(node, pbNodeProperties)) {
    throw new TypeError('Invalid DAG-PB form (extraneous properties)')
  }

  if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) {
    throw new TypeError('Invalid DAG-PB form (Data must be bytes)')
  }

  if (!Array.isArray(node.Links)) {
    throw new TypeError('Invalid DAG-PB form (Links must be a list)')
  }

  for (let i = 0; i < node.Links.length; i++) {
    const link = node.Links[i]
    // @ts-ignore private property for TS
    if (!link || typeof link !== 'object' || Array.isArray(link) || link instanceof Uint8Array || (link['/'] && link['/'] === link.bytes)) {
      throw new TypeError('Invalid DAG-PB form (bad link)')
    }

    if (!hasOnlyProperties(link, pbLinkProperties)) {
      throw new TypeError('Invalid DAG-PB form (extraneous properties on link)')
    }

    if (link.Hash === undefined) {
      throw new TypeError('Invalid DAG-PB form (link must have a Hash)')
    }

    // @ts-ignore private property for TS
    if (link.Hash == null || !link.Hash['/'] || link.Hash['/'] !== link.Hash.bytes) {
      throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)')
    }

    if (link.Name !== undefined && typeof link.Name !== 'string') {
      throw new TypeError('Invalid DAG-PB form (link Name must be a string)')
    }

    if (link.Tsize !== undefined) {
      if (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0) {
        throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)')
      }
      if (link.Tsize < 0) {
        throw new TypeError('Invalid DAG-PB form (link Tsize cannot be negative)')
      }
    }

    if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
      throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)')
    }
  }
}

/**
 * @param {Uint8Array} data
 * @param {PBLink[]} [links=[]]
 * @returns {PBNode}
 */
function createNode (data, links = []) {
  return prepare({ Data: data, Links: links })
}

/**
 * @param {string} name
 * @param {number} size
 * @param {CID} cid
 * @returns {PBLink}
 */
function createLink (name, size, cid) {
  return asLink({ Hash: cid, Name: name, Tsize: size })
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ipld+dag-pb@4.0.2/node_modules/@ipld/dag-pb/src/index.js





/**
 * @template T
 * @typedef {import('multiformats/codecs/interface').ByteView<T>} ByteView
 */

/**
 * @typedef {import('./interface').PBLink} PBLink
 * @typedef {import('./interface').PBNode} PBNode
 */

const src_name = 'dag-pb'
const code = 0x70

/**
 * @param {PBNode} node
 * @returns {ByteView<PBNode>}
 */
function encode (node) {
  validate(node)

  const pbn = {}
  if (node.Links) {
    pbn.Links = node.Links.map((l) => {
      const link = {}
      if (l.Hash) {
        link.Hash = l.Hash.bytes // cid -> bytes
      }
      if (l.Name !== undefined) {
        link.Name = l.Name
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize
      }
      return link
    })
  }
  if (node.Data) {
    pbn.Data = node.Data
  }

  return encodeNode(pbn)
}

/**
 * @param {ByteView<PBNode>} bytes
 * @returns {PBNode}
 */
function decode (bytes) {
  const pbn = decodeNode(bytes)

  const node = {}

  if (pbn.Data) {
    node.Data = pbn.Data
  }

  if (pbn.Links) {
    node.Links = pbn.Links.map((l) => {
      const link = {}
      try {
        link.Hash = src_cid/* CID */.k0.decode(l.Hash)
      } catch (e) {}
      if (!link.Hash) {
        throw new Error('Invalid Hash field found in link, expected CID')
      }
      if (l.Name !== undefined) {
        link.Name = l.Name
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize
      }
      return link
    })
  }

  return node
}




/***/ }),

/***/ 40366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kg: () => (/* binding */ logger)
/* harmony export */ });
/* unused harmony exports disable, enable, enabled */
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15354);
/* harmony import */ var multiformats_bases_base58__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7820);
/* harmony import */ var multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75439);
/* harmony import */ var multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);




// Add a formatter for converting to a base58 string
debug__WEBPACK_IMPORTED_MODULE_0__.formatters.b = (v) => {
    return v == null ? 'undefined' : multiformats_bases_base58__WEBPACK_IMPORTED_MODULE_1__.base58btc.baseEncode(v);
};
// Add a formatter for converting to a base32 string
debug__WEBPACK_IMPORTED_MODULE_0__.formatters.t = (v) => {
    return v == null ? 'undefined' : multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_2__.base32.baseEncode(v);
};
// Add a formatter for converting to a base64 string
debug__WEBPACK_IMPORTED_MODULE_0__.formatters.m = (v) => {
    return v == null ? 'undefined' : multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_3__.base64.baseEncode(v);
};
// Add a formatter for stringifying peer ids
debug__WEBPACK_IMPORTED_MODULE_0__.formatters.p = (v) => {
    return v == null ? 'undefined' : v.toString();
};
// Add a formatter for stringifying CIDs
debug__WEBPACK_IMPORTED_MODULE_0__.formatters.c = (v) => {
    return v == null ? 'undefined' : v.toString();
};
// Add a formatter for stringifying Datastore keys
debug__WEBPACK_IMPORTED_MODULE_0__.formatters.k = (v) => {
    return v == null ? 'undefined' : v.toString();
};
function createDisabledLogger(namespace) {
    const logger = () => { };
    logger.enabled = false;
    logger.color = '';
    logger.diff = 0;
    logger.log = () => { };
    logger.namespace = namespace;
    logger.destroy = () => true;
    logger.extend = () => logger;
    return logger;
}
function logger(name) {
    // trace logging is a no-op by default
    let trace = createDisabledLogger(`${name}:trace`);
    // look at all the debug names and see if trace logging has explicitly been enabled
    if (debug__WEBPACK_IMPORTED_MODULE_0__.enabled(`${name}:trace`) && debug__WEBPACK_IMPORTED_MODULE_0__.names.map(r => r.toString()).find(n => n.includes(':trace')) != null) {
        trace = debug__WEBPACK_IMPORTED_MODULE_0__(`${name}:trace`);
    }
    return Object.assign(debug__WEBPACK_IMPORTED_MODULE_0__(name), {
        error: debug__WEBPACK_IMPORTED_MODULE_0__(`${name}:error`),
        trace
    });
}
function disable() {
    debug.disable();
}
function enable(namespaces) {
    debug.enable(namespaces);
}
function enabled(namespaces) {
    return debug.enabled(namespaces);
}


/***/ }),

/***/ 16698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jE: () => (/* binding */ peerIdFromString)
});

// UNUSED EXPORTS: createPeerId, peerIdFromBytes, peerIdFromCID, peerIdFromKeys, peerIdFromPeerId

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/cid.js
var cid = __webpack_require__(81525);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/basics.js + 9 modules
var basics = __webpack_require__(49749);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base58.js
var base58 = __webpack_require__(7820);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/digest.js
var digest = __webpack_require__(1851);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/identity.js
var hashes_identity = __webpack_require__(36329);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/equals.js
var equals = __webpack_require__(56619);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/sha2-browser.js
var sha2_browser = __webpack_require__(83121);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@libp2p+interface-peer-id@2.0.1/node_modules/@libp2p/interface-peer-id/dist/src/index.js
const symbol = Symbol.for('@libp2p/peer-id');
function isPeerId(other) {
    return other != null && Boolean(other[symbol]);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@libp2p+peer-id@2.0.3/node_modules/@libp2p/peer-id/dist/src/index.js









const inspect = Symbol.for('nodejs.util.inspect.custom');
const baseDecoder = Object
    .values(basics/* bases */.gh)
    .map(codec => codec.decoder)
    // @ts-expect-error https://github.com/multiformats/js-multiformats/issues/141
    .reduce((acc, curr) => acc.or(curr), basics/* bases */.gh.identity.decoder);
// these values are from https://github.com/multiformats/multicodec/blob/master/table.csv
const LIBP2P_KEY_CODE = 0x72;
const MARSHALLED_ED225519_PUBLIC_KEY_LENGTH = 36;
const MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH = 37;
class PeerIdImpl {
    constructor(init) {
        this.type = init.type;
        this.multihash = init.multihash;
        this.privateKey = init.privateKey;
        // mark string cache as non-enumerable
        Object.defineProperty(this, 'string', {
            enumerable: false,
            writable: true
        });
    }
    get [Symbol.toStringTag]() {
        return `PeerId(${this.toString()})`;
    }
    get [symbol]() {
        return true;
    }
    toString() {
        if (this.string == null) {
            this.string = base58.base58btc.encode(this.multihash.bytes).slice(1);
        }
        return this.string;
    }
    // return self-describing String representation
    // in default format from RFC 0001: https://github.com/libp2p/specs/pull/209
    toCID() {
        return cid/* CID */.k0.createV1(LIBP2P_KEY_CODE, this.multihash);
    }
    toBytes() {
        return this.multihash.bytes;
    }
    /**
     * Returns Multiaddr as a JSON string
     */
    toJSON() {
        return this.toString();
    }
    /**
     * Checks the equality of `this` peer against a given PeerId
     */
    equals(id) {
        if (id instanceof Uint8Array) {
            return (0,equals/* equals */.f)(this.multihash.bytes, id);
        }
        else if (typeof id === 'string') {
            return peerIdFromString(id).equals(this);
        }
        else if (id?.multihash?.bytes != null) {
            return (0,equals/* equals */.f)(this.multihash.bytes, id.multihash.bytes);
        }
        else {
            throw new Error('not valid Id');
        }
    }
    /**
     * Returns PeerId as a human-readable string
     * https://nodejs.org/api/util.html#utilinspectcustom
     *
     * @example
     * ```js
     * import { peerIdFromString } from '@libp2p/peer-id'
     *
     * console.info(peerIdFromString('QmFoo'))
     * // 'PeerId(QmFoo)'
     * ```
     */
    [inspect]() {
        return `PeerId(${this.toString()})`;
    }
}
class RSAPeerIdImpl extends PeerIdImpl {
    constructor(init) {
        super({ ...init, type: 'RSA' });
        this.type = 'RSA';
        this.publicKey = init.publicKey;
    }
}
class Ed25519PeerIdImpl extends PeerIdImpl {
    constructor(init) {
        super({ ...init, type: 'Ed25519' });
        this.type = 'Ed25519';
        this.publicKey = init.multihash.digest;
    }
}
class Secp256k1PeerIdImpl extends PeerIdImpl {
    constructor(init) {
        super({ ...init, type: 'secp256k1' });
        this.type = 'secp256k1';
        this.publicKey = init.multihash.digest;
    }
}
function createPeerId(init) {
    if (init.type === 'RSA') {
        return new RSAPeerIdImpl(init);
    }
    if (init.type === 'Ed25519') {
        return new Ed25519PeerIdImpl(init);
    }
    if (init.type === 'secp256k1') {
        return new Secp256k1PeerIdImpl(init);
    }
    throw new CodeError('Type must be "RSA", "Ed25519" or "secp256k1"', 'ERR_INVALID_PARAMETERS');
}
function peerIdFromPeerId(other) {
    if (other.type === 'RSA') {
        return new RSAPeerIdImpl(other);
    }
    if (other.type === 'Ed25519') {
        return new Ed25519PeerIdImpl(other);
    }
    if (other.type === 'secp256k1') {
        return new Secp256k1PeerIdImpl(other);
    }
    throw new CodeError('Not a PeerId', 'ERR_INVALID_PARAMETERS');
}
function peerIdFromString(str, decoder) {
    decoder = decoder ?? baseDecoder;
    if (str.charAt(0) === '1' || str.charAt(0) === 'Q') {
        // identity hash ed25519/secp256k1 key or sha2-256 hash of
        // rsa public key - base58btc encoded either way
        const multihash = digest/* decode */.Jx(base58.base58btc.decode(`z${str}`));
        if (str.startsWith('12D')) {
            return new Ed25519PeerIdImpl({ multihash });
        }
        else if (str.startsWith('16U')) {
            return new Secp256k1PeerIdImpl({ multihash });
        }
        else {
            return new RSAPeerIdImpl({ multihash });
        }
    }
    return peerIdFromBytes(baseDecoder.decode(str));
}
function peerIdFromBytes(buf) {
    try {
        const multihash = digest/* decode */.Jx(buf);
        if (multihash.code === hashes_identity.identity.code) {
            if (multihash.digest.length === MARSHALLED_ED225519_PUBLIC_KEY_LENGTH) {
                return new Ed25519PeerIdImpl({ multihash });
            }
            else if (multihash.digest.length === MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH) {
                return new Secp256k1PeerIdImpl({ multihash });
            }
        }
        if (multihash.code === sha2_browser.sha256.code) {
            return new RSAPeerIdImpl({ multihash });
        }
    }
    catch {
        return peerIdFromCID(cid/* CID */.k0.decode(buf));
    }
    throw new Error('Supplied PeerID CID is invalid');
}
function peerIdFromCID(cid) {
    if (cid == null || cid.multihash == null || cid.version == null || (cid.version === 1 && cid.code !== LIBP2P_KEY_CODE)) {
        throw new Error('Supplied PeerID CID is invalid');
    }
    const multihash = cid.multihash;
    if (multihash.code === sha2_browser.sha256.code) {
        return new RSAPeerIdImpl({ multihash: cid.multihash });
    }
    else if (multihash.code === hashes_identity.identity.code) {
        if (multihash.digest.length === MARSHALLED_ED225519_PUBLIC_KEY_LENGTH) {
            return new Ed25519PeerIdImpl({ multihash: cid.multihash });
        }
        else if (multihash.digest.length === MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH) {
            return new Secp256k1PeerIdImpl({ multihash: cid.multihash });
        }
    }
    throw new Error('Supplied PeerID CID is invalid');
}
/**
 * @param publicKey - A marshalled public key
 * @param privateKey - A marshalled private key
 */
async function peerIdFromKeys(publicKey, privateKey) {
    if (publicKey.length === MARSHALLED_ED225519_PUBLIC_KEY_LENGTH) {
        return new Ed25519PeerIdImpl({ multihash: Digest.create(identity.code, publicKey), privateKey });
    }
    if (publicKey.length === MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH) {
        return new Secp256k1PeerIdImpl({ multihash: Digest.create(identity.code, publicKey), privateKey });
    }
    return new RSAPeerIdImpl({ multihash: await sha256.digest(publicKey), publicKey, privateKey });
}


/***/ }),

/***/ 86437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ multiaddrToUri)
/* harmony export */ });
/* harmony import */ var _multiformats_multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27819);

const reduceValue = (_, v) => v;
const tcpUri = (str, port, parts, opts) => {
    // return tcp when explicitly requested
    if ((opts != null) && opts.assumeHttp === false)
        return `tcp://${str}:${port}`;
    // check if tcp is the last protocol in multiaddr
    let protocol = 'tcp';
    let explicitPort = `:${port}`;
    const last = parts[parts.length - 1];
    if (last.protocol === 'tcp') {
        // assume http and produce clean urls
        protocol = port === '443' ? 'https' : 'http';
        explicitPort = port === '443' || port === '80' ? '' : explicitPort;
    }
    return `${protocol}://${str}${explicitPort}`;
};
const Reducers = {
    ip4: reduceValue,
    ip6: (str, content, i, parts) => (parts.length === 1 && parts[0].protocol === 'ip6'
        ? content
        : `[${content}]`),
    tcp: (str, content, i, parts, opts) => (parts.some(p => ['http', 'https', 'ws', 'wss'].includes(p.protocol))
        ? `${str}:${content}`
        : tcpUri(str, content, parts, opts)),
    udp: (str, content) => `udp://${str}:${content}`,
    dnsaddr: reduceValue,
    dns4: reduceValue,
    dns6: reduceValue,
    ipfs: (str, content) => `${str}/ipfs/${content}`,
    p2p: (str, content) => `${str}/p2p/${content}`,
    http: str => `http://${str}`,
    https: str => `https://${str}`,
    ws: str => `ws://${str}`,
    wss: str => `wss://${str}`,
    'p2p-websocket-star': str => `${str}/p2p-websocket-star`,
    'p2p-webrtc-star': str => `${str}/p2p-webrtc-star`,
    'p2p-webrtc-direct': str => `${str}/p2p-webrtc-direct`
};
function multiaddrToUri(multiaddr, opts) {
    const ma = new _multiformats_multiaddr__WEBPACK_IMPORTED_MODULE_0__/* .Multiaddr */ .sc(multiaddr);
    const parts = multiaddr.toString().split('/').slice(1);
    return ma
        .tuples()
        .map(tuple => ({
        protocol: parts.shift() ?? '',
        content: (tuple[1] != null) ? parts.shift() ?? '' : ''
    }))
        .reduce((str, part, i, parts) => {
        const reduce = Reducers[part.protocol];
        if (reduce == null) {
            throw new Error(`Unsupported protocol ${part.protocol}`);
        }
        return reduce(str, part.content, i, parts, opts);
    }, '');
}


/***/ }),

/***/ 54189:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ blobToIt)
/* harmony export */ });
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39877);
/* eslint-env browser */

function blobToIt(blob) {
    if (typeof blob.stream === 'function') {
        return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(blob.stream());
    }
    // firefox < 69 does not support blob.stream()
    // @ts-expect-error - response.body is optional, but in practice it's a stream.
    return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(new Response(blob).body);
}


/***/ }),

/***/ 39877:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ browserReadableStreamToIt)
/* harmony export */ });
/**
 * Turns a browser readable stream into an async iterable. Async iteration over
 * returned iterable will lock give stream, preventing any other consumer from
 * acquiring a reader. The lock will be released if iteration loop is broken. To
 * prevent stream cancelling optional `{ preventCancel: true }` could be passed
 * as a second argument.
 */
async function* browserReadableStreamToIt(stream, options = {}) {
    const reader = stream.getReader();
    try {
        while (true) {
            const result = await reader.read();
            if (result.done) {
                return;
            }
            yield result.value;
        }
    }
    finally {
        if (options.preventCancel !== true) {
            await reader.cancel();
        }
        reader.releaseLock();
    }
}


/***/ }),

/***/ 96074:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  code: () => (/* binding */ code),
  decode: () => (/* binding */ lib_decode),
  encode: () => (/* binding */ lib_encode),
  name: () => (/* binding */ lib_name),
  toGeneral: () => (/* binding */ toGeneral)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base64.js
var base64 = __webpack_require__(40980);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dag-jose@4.0.0/node_modules/dag-jose/lib/utils.js

function toBase64url(b) {
    return base64.base64url.encode(b).slice(1);
}
function fromBase64url(s) {
    return base64.base64url.decode(`u${s}`);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/cid.js
var cid = __webpack_require__(81525);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dag-jose@4.0.0/node_modules/dag-jose/lib/signing.js


function fromSplit(split) {
    const [protectedHeader, payload, signature] = split;
    return {
        payload,
        signatures: [{ protected: protectedHeader, signature }],
        link: cid/* CID */.k0.decode(fromBase64url(payload)),
    };
}
function encodeSignature(signature) {
    const encoded = {
        signature: fromBase64url(signature.signature),
    };
    if (signature.header)
        encoded.header = signature.header;
    if (signature.protected)
        encoded.protected = fromBase64url(signature.protected);
    return encoded;
}
function encode(jws) {
    const payload = fromBase64url(jws.payload);
    try {
        cid/* CID */.k0.decode(payload);
    }
    catch (e) {
        throw new Error('Not a valid DagJWS');
    }
    return {
        payload,
        signatures: jws.signatures.map(encodeSignature),
    };
}
function decodeSignature(encoded) {
    const sign = {
        signature: toBase64url(encoded.signature),
    };
    if (encoded.header)
        sign.header = encoded.header;
    if (encoded.protected)
        sign.protected = toBase64url(encoded.protected);
    return sign;
}
function decode(encoded) {
    const decoded = {
        payload: toBase64url(encoded.payload),
        signatures: encoded.signatures.map(decodeSignature),
    };
    decoded.link = cid/* CID */.k0.decode(new Uint8Array(encoded.payload));
    return decoded;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/dag-jose@4.0.0/node_modules/dag-jose/lib/encryption.js

function encryption_fromSplit(split) {
    const [protectedHeader, encrypted_key, iv, ciphertext, tag] = split;
    const jwe = {
        ciphertext,
        iv,
        protected: protectedHeader,
        tag,
    };
    if (encrypted_key)
        jwe.recipients = [{ encrypted_key }];
    return jwe;
}
function encodeRecipient(recipient) {
    const encRec = {};
    if (recipient.encrypted_key)
        encRec.encrypted_key = fromBase64url(recipient.encrypted_key);
    if (recipient.header)
        encRec.header = recipient.header;
    return encRec;
}
function encryption_encode(jwe) {
    const encJwe = {
        ciphertext: fromBase64url(jwe.ciphertext),
        protected: fromBase64url(jwe.protected),
        iv: fromBase64url(jwe.iv),
        tag: fromBase64url(jwe.tag),
    };
    if (jwe.aad)
        encJwe.aad = fromBase64url(jwe.aad);
    if (jwe.recipients)
        encJwe.recipients = jwe.recipients.map(encodeRecipient);
    if (jwe.unprotected)
        encJwe.unprotected = jwe.unprotected;
    return encJwe;
}
function decodeRecipient(encoded) {
    const recipient = {};
    if (encoded.encrypted_key)
        recipient.encrypted_key = toBase64url(encoded.encrypted_key);
    if (encoded.header)
        recipient.header = encoded.header;
    return recipient;
}
function encryption_decode(encoded) {
    const jwe = {
        ciphertext: toBase64url(encoded.ciphertext),
        protected: toBase64url(encoded.protected),
        iv: toBase64url(encoded.iv),
        tag: toBase64url(encoded.tag),
    };
    if (encoded.aad)
        jwe.aad = toBase64url(encoded.aad);
    if (encoded.recipients)
        jwe.recipients = encoded.recipients.map(decodeRecipient);
    if (encoded.unprotected)
        jwe.unprotected = encoded.unprotected;
    return jwe;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@ipld+dag-cbor@9.0.0/node_modules/@ipld/dag-cbor/src/index.js
var src = __webpack_require__(16305);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dag-jose@4.0.0/node_modules/dag-jose/lib/index.js



const lib_name = 'dag-jose';
const code = 133;
function isDagJWS(jose) {
    return ('payload' in jose &&
        typeof jose.payload === 'string' &&
        'signatures' in jose &&
        Array.isArray(jose.signatures));
}
function isEncodedJWS(jose) {
    return ('payload' in jose &&
        jose.payload instanceof Uint8Array &&
        'signatures' in jose &&
        Array.isArray(jose.signatures));
}
function isEncodedJWE(jose) {
    return ('ciphertext' in jose &&
        jose.ciphertext instanceof Uint8Array &&
        'iv' in jose &&
        jose.iv instanceof Uint8Array &&
        'protected' in jose &&
        jose.protected instanceof Uint8Array &&
        'tag' in jose &&
        jose.tag instanceof Uint8Array);
}
function isDagJWE(jose) {
    return ('ciphertext' in jose &&
        typeof jose.ciphertext === 'string' &&
        'iv' in jose &&
        typeof jose.iv === 'string' &&
        'protected' in jose &&
        typeof jose.protected === 'string' &&
        'tag' in jose &&
        typeof jose.tag === 'string');
}
function toGeneral(jose) {
    if (typeof jose === 'string') {
        const split = jose.split('.');
        if (split.length === 3) {
            return fromSplit(split);
        }
        else if (split.length === 5) {
            return encryption_fromSplit(split);
        }
        throw new Error('Not a valid JOSE string');
    }
    if (isDagJWS(jose) || isDagJWE(jose)) {
        return jose;
    }
    throw new Error('Not a valid unencoded JOSE object');
}
function lib_encode(obj) {
    if (typeof obj === 'string') {
        obj = toGeneral(obj);
    }
    let encodedJose;
    if (isDagJWS(obj)) {
        encodedJose = encode(obj);
    }
    else if (isDagJWE(obj)) {
        encodedJose = encryption_encode(obj);
    }
    else {
        throw new Error('Not a valid JOSE object');
    }
    return new Uint8Array(src.encode(encodedJose));
}
function lib_decode(data) {
    let encoded;
    try {
        encoded = src.decode(data);
    }
    catch (e) {
        throw new Error('Not a valid DAG-JOSE object');
    }
    if (isEncodedJWS(encoded)) {
        return decode(encoded);
    }
    else if (isEncodedJWE(encoded)) {
        return encryption_decode(encoded);
    }
    else {
        throw new Error('Not a valid DAG-JOSE object');
    }
}


/***/ }),

/***/ 64676:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h6: () => (/* binding */ isIP),
  C: () => (/* binding */ isIPv4),
  aY: () => (/* binding */ isIPv6)
});

// UNUSED EXPORTS: ipVersion

;// CONCATENATED MODULE: ./node_modules/.pnpm/ip-regex@5.0.0/node_modules/ip-regex/index.js
const word = '[a-fA-F\\d:]';

const boundry = options => options && options.includeBoundaries
	? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
	: '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6segment = '[a-fA-F\\d]{1,4}';

const v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ipRegex = options => options && options.exact
	? v46Exact
	: new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

ipRegex.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
ipRegex.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');

/* harmony default export */ const ip_regex = (ipRegex);

;// CONCATENATED MODULE: ./node_modules/.pnpm/is-ip@4.0.0/node_modules/is-ip/index.js


function isIP(string) {
	return ip_regex({exact: true}).test(string);
}

function isIPv6(string) {
	return ip_regex.v6({exact: true}).test(string);
}

function isIPv4(string) {
	return ip_regex.v4({exact: true}).test(string);
}

function ipVersion(string) {
	return isIP(string) ? (isIPv6(string) ? 6 : 4) : undefined;
}


/***/ }),

/***/ 97270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ all)
/* harmony export */ });
/**
 * Collects all values from an (async) iterable and returns them as an array
 */
async function all(source) {
    const arr = [];
    for await (const entry of source) {
        arr.push(entry);
    }
    return arr;
}


/***/ }),

/***/ 3330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ first)
/* harmony export */ });
/**
 * Returns the first result from an (async) iterable, unless empty, in which
 * case returns `undefined`
 */
async function first(source) {
    for await (const entry of source) { // eslint-disable-line no-unreachable-loop
        return entry;
    }
    return undefined;
}


/***/ }),

/***/ 57621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ last)
/* harmony export */ });
/**
 * Returns the last item of an (async) iterable, unless empty, in which case
 * return `undefined`
 */
async function last(source) {
    let res;
    for await (const entry of source) {
        res = entry;
    }
    return res;
}


/***/ }),

/***/ 9517:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ map)
/* harmony export */ });
/**
 * Takes an (async) iterable and returns one with each item mapped by the passed
 * function
 */
async function* map(source, func) {
    for await (const val of source) {
        yield func(val);
    }
}


/***/ }),

/***/ 89985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ peekableIterator)
/* harmony export */ });
function peekableIterator(iterable) {
    // @ts-expect-error
    const [iterator, symbol] = iterable[Symbol.asyncIterator] != null
        // @ts-expect-error
        ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator]
        // @ts-expect-error
        : [iterable[Symbol.iterator](), Symbol.iterator];
    const queue = [];
    // @ts-expect-error
    return {
        peek: () => {
            return iterator.next();
        },
        push: (value) => {
            queue.push(value);
        },
        next: () => {
            if (queue.length > 0) {
                return {
                    done: false,
                    value: queue.shift()
                };
            }
            return iterator.next();
        },
        [symbol]() {
            return this;
        }
    };
}


/***/ }),

/***/ 36588:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ equals)
/* harmony export */ });
function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ 47087:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ allocUnsafe)
/* harmony export */ });
/* unused harmony export alloc */
/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99215);

/**
 * Returns a `Uint8Array` of the requested size. Referenced memory will
 * be initialized to 0.
 */
function alloc(size = 0) {
    if (globalThis.Buffer?.alloc != null) {
        return asUint8Array(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
/**
 * Where possible returns a Uint8Array of the requested size that references
 * uninitialized memory. Only use if you are certain you will immediately
 * overwrite every value in the returned `Uint8Array`.
 */
function allocUnsafe(size = 0) {
    if (globalThis.Buffer?.allocUnsafe != null) {
        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__/* .asUint8Array */ .P)(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}


/***/ }),

/***/ 1987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ concat)
/* harmony export */ });
/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47087);
/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99215);


/**
 * Returns a new Uint8Array created by concatenating the passed ArrayLikes
 */
function concat(arrays, length) {
    if (length == null) {
        length = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__/* .allocUnsafe */ .E)(length);
    let offset = 0;
    for (const arr of arrays) {
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__/* .asUint8Array */ .P)(output);
}


/***/ }),

/***/ 56619:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ equals)
/* harmony export */ });
/**
 * Returns true if the two passed Uint8Arrays have the same content
 */
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for (let i = 0; i < a.byteLength; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ 6028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32543);
/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99215);


/**
 * Create a `Uint8Array` from the passed string
 *
 * Supports `utf8`, `utf-8`, `hex`, and any encoding supported by the multiformats module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 */
function fromString(string, encoding = 'utf8') {
    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[encoding];
    if (base == null) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__/* .asUint8Array */ .P)(globalThis.Buffer.from(string, 'utf-8'));
    }
    // add multibase prefix
    return base.decoder.decode(`${base.prefix}${string}`); // eslint-disable-line @typescript-eslint/restrict-template-expressions
}


/***/ }),

/***/ 5766:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32543);

/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 */
function toString(array, encoding = 'utf8') {
    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[encoding];
    if (base == null) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    // strip multibase prefix
    return base.encoder.encode(array).substring(1);
}


/***/ }),

/***/ 99215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ asUint8Array)
/* harmony export */ });
/**
 * To guarantee Uint8Array semantics, convert nodejs Buffers
 * into vanilla Uint8Arrays
 */
function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
}


/***/ }),

/***/ 32543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49749);
/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47087);


function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec('utf8', 'u', (buf) => {
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
}, (str) => {
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', (buf) => {
    let string = 'a';
    for (let i = 0; i < buf.length; i++) {
        string += String.fromCharCode(buf[i]);
    }
    return string;
}, (str) => {
    str = str.substring(1);
    const buf = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_1__/* .allocUnsafe */ .E)(str.length);
    for (let i = 0; i < str.length; i++) {
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__/* .bases */ .gh.base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__/* .bases */ .gh
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);


/***/ })

}]);
//# sourceMappingURL=chunk.9836.js.map