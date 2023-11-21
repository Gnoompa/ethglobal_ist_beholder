"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7372],{

/***/ 22104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ue: () => (/* binding */ create)
});

// UNUSED EXPORTS: CID, globSource, multiaddr, urlSource

// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/multibases.js
var src_multibases = __webpack_require__(91040);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/multicodecs.js
var src_multicodecs = __webpack_require__(51655);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/multihashes.js
var src_multihashes = __webpack_require__(86564);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ipld+dag-pb@4.0.2/node_modules/@ipld/dag-pb/src/index.js + 3 modules
var src = __webpack_require__(63660);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ipld+dag-cbor@9.0.0/node_modules/@ipld/dag-cbor/src/index.js
var dag_cbor_src = __webpack_require__(16305);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ipld+dag-json@10.0.1/node_modules/@ipld/dag-json/src/index.js
var dag_json_src = __webpack_require__(68665);
// EXTERNAL MODULE: ./node_modules/.pnpm/dag-jose@4.0.0/node_modules/dag-jose/lib/index.js + 3 modules
var lib = __webpack_require__(96074);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/identity.js
var identity = __webpack_require__(36329);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/basics.js + 9 modules
var basics = __webpack_require__(49749);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/cid.js
var src_cid = __webpack_require__(81525);
// EXTERNAL MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@11.6.1_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/index.js + 4 modules
var dist_src = __webpack_require__(88556);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-utils@9.0.14/node_modules/ipfs-utils/src/env.js
var env = __webpack_require__(2698);
// EXTERNAL MODULE: ./node_modules/.pnpm/parse-duration@1.0.2/node_modules/parse-duration/index.mjs
var parse_duration = __webpack_require__(72956);
// EXTERNAL MODULE: ./node_modules/.pnpm/@libp2p+logger@2.0.7/node_modules/@libp2p/logger/dist/src/index.js
var logger_dist_src = __webpack_require__(40366);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-utils@9.0.14/node_modules/ipfs-utils/src/http.js
var http = __webpack_require__(56084);
// EXTERNAL MODULE: ./node_modules/.pnpm/merge-options@3.0.4/node_modules/merge-options/index.mjs
var merge_options = __webpack_require__(64086);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/to-url-string.js
var to_url_string = __webpack_require__(10086);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/agent.browser.js
var agent_browser = __webpack_require__(31670);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/core.js

/* eslint-env browser */










const log = (0,logger_dist_src/* logger */.kg)('ipfs-http-client:lib:error-handler')
const merge = merge_options/* default */.Z.bind({ ignoreUndefined: true })

const DEFAULT_PROTOCOL = env.isBrowser || env.isWebWorker ? location.protocol : 'http'
const DEFAULT_HOST = env.isBrowser || env.isWebWorker ? location.hostname : 'localhost'
const DEFAULT_PORT = env.isBrowser || env.isWebWorker ? location.port : '5001'

/**
 * @typedef {import('ipfs-utils/src/types').HTTPOptions} HTTPOptions
 * @typedef {import('../types').Options} Options
 * @typedef {import('@multiformats/multiaddr').Multiaddr} Multiaddr
 */

/**
 * @param {Options|URL|Multiaddr|string} [options]
 * @returns {Options}
 */
const normalizeOptions = (options = {}) => {
  let url
  /** @type {Options} */
  let opts = {}
  let agent

  if (typeof options === 'string' || (0,dist_src/* isMultiaddr */.h2)(options)) {
    url = new URL((0,to_url_string/* toUrlString */.d)(options))
  } else if (options instanceof URL) {
    url = options
  } else if (typeof options.url === 'string' || (0,dist_src/* isMultiaddr */.h2)(options.url)) {
    url = new URL((0,to_url_string/* toUrlString */.d)(options.url))
    opts = options
  } else if (options.url instanceof URL) {
    url = options.url
    opts = options
  } else {
    opts = options || {}

    const protocol = (opts.protocol || DEFAULT_PROTOCOL).replace(':', '')
    const host = (opts.host || DEFAULT_HOST).split(':')[0]
    const port = (opts.port || DEFAULT_PORT)

    url = new URL(`${protocol}://${host}:${port}`)
  }

  if (opts.apiPath) {
    url.pathname = opts.apiPath
  } else if (url.pathname === '/' || url.pathname === undefined) {
    url.pathname = 'api/v0'
  }

  if (env.isNode) {
    const Agent = (0,agent_browser/* default */.Z)(url)

    agent = opts.agent || new Agent({
      keepAlive: true,
      // Similar to browsers which limit connections to six per host
      maxSockets: 6
    })
  }

  return {
    ...opts,
    host: url.host,
    protocol: url.protocol.replace(':', ''),
    port: Number(url.port),
    apiPath: url.pathname,
    url,
    agent
  }
}

/**
 * @param {Response} response
 */
const errorHandler = async (response) => {
  let msg

  try {
    if ((response.headers.get('Content-Type') || '').startsWith('application/json')) {
      const data = await response.json()
      log(data)
      msg = data.Message || data.message
    } else {
      msg = await response.text()
    }
  } catch (/** @type {any} */ err) {
    log('Failed to parse error response', err)
    // Failed to extract/parse error message from response
    msg = err.message
  }

  /** @type {Error} */
  let error = new http.HTTPError(response)

  if (msg) {
    // This is what rs-ipfs returns where there's a timeout
    if (msg.includes('deadline has elapsed')) {
      error = new http.TimeoutError()
    }

    // This is what go-ipfs returns where there's a timeout
    if (msg && msg.includes('context deadline exceeded')) {
      error = new http.TimeoutError()
    }
  }

  // This also gets returned
  if (msg && msg.includes('request timed out')) {
    error = new http.TimeoutError()
  }

  // If we managed to extract a message from the response, use it
  if (msg) {
    error.message = msg
  }

  throw error
}

const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g

/**
 * @param {string} str
 */
const kebabCase = (str) => {
  return str.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase()
  })
}

/**
 * @param {string | number} value
 */
const parseTimeout = (value) => {
  return typeof value === 'string' ? (0,parse_duration/* default */.Z)(value) : value
}

class Client extends http {
  /**
   * @param {Options|URL|Multiaddr|string} [options]
   */
  constructor (options = {}) {
    const opts = normalizeOptions(options)

    super({
      timeout: parseTimeout(opts.timeout || 0) || undefined,
      headers: opts.headers,
      base: `${opts.url}`,
      handleError: errorHandler,
      transformSearchParams: (search) => {
        const out = new URLSearchParams()

        for (const [key, value] of search) {
          if (
            value !== 'undefined' &&
            value !== 'null' &&
            key !== 'signal'
          ) {
            out.append(kebabCase(key), value)
          }

          // @ts-expect-error server timeouts are strings
          if (key === 'timeout' && !isNaN(value)) {
            out.append(kebabCase(key), value)
          }
        }

        return out
      },
      // @ts-expect-error this can be a https agent or a http agent
      agent: opts.agent
    })

    // @ts-expect-error - cannot delete no-optional fields
    delete this.get
    // @ts-expect-error - cannot delete no-optional fields
    delete this.put
    // @ts-expect-error - cannot delete no-optional fields
    delete this.delete
    // @ts-expect-error - cannot delete no-optional fields
    delete this.options

    const fetch = this.fetch

    /**
     * @param {string | Request} resource
     * @param {HTTPOptions} options
     */
    this.fetch = (resource, options = {}) => {
      if (typeof resource === 'string' && !resource.startsWith('/')) {
        resource = `${opts.url}/${resource}`
      }

      return fetch.call(this, resource, merge(options, {
        method: 'POST'
      }))
    }
  }
}

const HTTPError = http.HTTPError

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/configure.js

/* eslint-env browser */



// Set default configuration and call create function with them
/**
 * @typedef { import("../types").Options } Options
 */

/**
 * @template T
 * @typedef {(client: Client, clientOptions: Options) => T} Fn
 */

/**
 * @template T
 * @typedef {(clientOptions: Options) => T} Factory
 */

/**
 * @template T
 * @param {Fn<T>} fn
 * @returns {Factory<T>}
 */
const configure = (fn) => {
  return (options) => {
    return fn(new Client(options), options)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/mode-to-string.js

/**
 * @param {number | string | undefined} mode
 */
function modeToString (mode) {
  if (mode == null) {
    return undefined
  }

  if (typeof mode === 'string') {
    return mode
  }

  return mode.toString(8).padStart(4, '0')
}

// EXTERNAL MODULE: ./node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(36676);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/parse-mtime.js


/**
 * @param {any} input
 */
function parseMtime (input) {
  if (input == null) {
    return undefined
  }

  /** @type {{ secs: number, nsecs?: number } | undefined} */
  let mtime

  // { secs, nsecs }
  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    }
  }

  // UnixFS TimeSpec
  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    }
  }

  // process.hrtime()
  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    }
  }

  // Javascript Date
  if (input instanceof Date) {
    const ms = input.getTime()
    const secs = Math.floor(ms / 1000)

    mtime = {
      secs: secs,
      nsecs: (ms - (secs * 1000)) * 1000
    }
  }

  /*
  TODO: https://github.com/ipfs/aegir/issues/487

  // process.hrtime.bigint()
  if (input instanceof BigInt) {
    const secs = input / BigInt(1e9)
    const nsecs = input - (secs * BigInt(1e9))

    mtime = {
      secs: parseInt(secs.toString()),
      nsecs: parseInt(nsecs.toString())
    }
  }
  */

  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined
  }

  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS')
  }

  return mtime
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/to-url-search-params.js



/**
 * @param {*} params
 * @returns {URLSearchParams}
 */
function toUrlSearchParams ({ arg, searchParams, hashAlg, mtime, mode, ...options } = {}) {
  if (searchParams) {
    options = {
      ...options,
      ...searchParams
    }
  }

  if (hashAlg) {
    options.hash = hashAlg
  }

  if (mtime != null) {
    mtime = parseMtime(mtime)

    options.mtime = mtime.secs
    options.mtimeNsecs = mtime.nsecs
  }

  if (mode != null) {
    options.mode = modeToString(mode)
  }

  if (options.timeout && !isNaN(options.timeout)) {
    // server API expects timeouts as strings
    options.timeout = `${options.timeout}ms`
  }

  if (arg === undefined || arg === null) {
    arg = []
  } else if (!Array.isArray(arg)) {
    arg = [arg]
  }

  const urlSearchParams = new URLSearchParams(options)

  arg.forEach((/** @type {any} */ arg) => urlSearchParams.append('arg', arg))

  return urlSearchParams
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bitswap/wantlist.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bitswap').API<HTTPClientExtraOptions>} BitswapAPI
 */

const createWantlist = configure(api => {
  /**
   * @type {BitswapAPI["wantlist"]}
   */
  async function wantlist (options = {}) {
    const res = await (await api.post('bitswap/wantlist', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })).json()

    return (res.Keys || []).map((/** @type {{ '/': string }} */ k) => src_cid/* CID */.k0.parse(k['/']))
  }
  return wantlist
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bitswap/wantlist-for-peer.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bitswap').API<HTTPClientExtraOptions>} BitswapAPI
 */

const createWantlistForPeer = configure(api => {
  /**
   * @type {BitswapAPI["wantlistForPeer"]}
   */
  async function wantlistForPeer (peerId, options = {}) {
    const res = await (await api.post('bitswap/wantlist', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        peer: peerId.toString()
      }),
      headers: options.headers
    })).json()

    return (res.Keys || []).map((/** @type {{ '/': string }} */ k) => src_cid/* CID */.k0.parse(k['/']))
  }
  return wantlistForPeer
})

// EXTERNAL MODULE: ./node_modules/.pnpm/@libp2p+peer-id@2.0.3/node_modules/@libp2p/peer-id/dist/src/index.js + 1 modules
var peer_id_dist_src = __webpack_require__(16698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bitswap/stat.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bitswap').API<HTTPClientExtraOptions>} BitswapAPI
 */

const createStat = configure(api => {
  /**
   * @type {BitswapAPI["stat"]}
   */
  async function stat (options = {}) {
    const res = await api.post('bitswap/stat', {
      searchParams: toUrlSearchParams(options),
      signal: options.signal,
      headers: options.headers
    })

    return toCoreInterface(await res.json())
  }
  return stat
})

/**
 * @param {any} res
 */
function toCoreInterface (res) {
  return {
    provideBufLen: res.ProvideBufLen,
    wantlist: (res.Wantlist || []).map((/** @type {{ '/': string }} */ k) => src_cid/* CID */.k0.parse(k['/'])),
    peers: (res.Peers || []).map((/** @type {string} */ str) => (0,peer_id_dist_src/* peerIdFromString */.jE)(str)),
    blocksReceived: BigInt(res.BlocksReceived),
    dataReceived: BigInt(res.DataReceived),
    blocksSent: BigInt(res.BlocksSent),
    dataSent: BigInt(res.DataSent),
    dupBlksReceived: BigInt(res.DupBlksReceived),
    dupDataReceived: BigInt(res.DupDataReceived)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bitswap/unwant.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bitswap').API<HTTPClientExtraOptions>} BitswapAPI
 */

const createUnwant = configure(api => {
  /**
   * @type {BitswapAPI["unwant"]}
   */
  async function unwant (cid, options = {}) {
    const res = await api.post('bitswap/unwant', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    })

    return res.json()
  }
  return unwant
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bitswap/index.js





/**
 * @param {import('../types').Options} config
 */
function createBitswap (config) {
  return {
    wantlist: createWantlist(config),
    wantlistForPeer: createWantlistForPeer(config),
    unwant: createUnwant(config),
    stat: createStat(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/block/get.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/block').API<HTTPClientExtraOptions>} BlockAPI
 */

const createGet = configure(api => {
  /**
   * @type {BlockAPI["get"]}
   */
  async function get (cid, options = {}) {
    const res = await api.post('block/get', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    })

    return new Uint8Array(await res.arrayBuffer())
  }
  return get
})

// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/multipart-request.browser.js + 4 modules
var multipart_request_browser = __webpack_require__(53031);
// EXTERNAL MODULE: ./node_modules/.pnpm/any-signal@3.0.0/node_modules/any-signal/index.js
var any_signal = __webpack_require__(34592);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/abort-signal.js


/**
 * @param {any[]} signals
 * @returns {AbortSignal[]}
 */
function filter (signals) {
  return signals.filter(Boolean)
}

/**
 * @param  {...AbortSignal|undefined} signals
 */
function abortSignal (...signals) {
  return (0,any_signal.anySignal)(filter(signals))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/block/put.js






/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/block').API<HTTPClientExtraOptions>} BlockAPI
 */

const createPut = configure(api => {
  /**
   * @type {BlockAPI["put"]}
   */
  async function put (data, options = {}) {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    let res
    try {
      const response = await api.post('block/put', {
        signal: signal,
        searchParams: toUrlSearchParams(options),
        ...(
          await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
        )
      })
      res = await response.json()
    } catch (/** @type {any} */ err) {
      // Retry with "protobuf"/"cbor" format for go-ipfs
      // TODO: remove when https://github.com/ipfs/go-cid/issues/75 resolved
      if (options.format === 'dag-pb') {
        return put(data, { ...options, format: 'protobuf' })
      } else if (options.format === 'dag-cbor') {
        return put(data, { ...options, format: 'cbor' })
      }

      throw err
    }

    return src_cid/* CID */.k0.parse(res.Key)
  }

  return put
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/block/rm.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/block').API<HTTPClientExtraOptions>} BlockAPI
 * @typedef {import('ipfs-core-types/src/block').RmResult} RmResult
 */

const createRm = configure(api => {
  /**
   * @type {BlockAPI["rm"]}
   */
  async function * rm (cid, options = {}) {
    if (!Array.isArray(cid)) {
      cid = [cid]
    }

    const res = await api.post('block/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.map(cid => cid.toString()),
        'stream-channels': true,
        ...options
      }),
      headers: options.headers
    })

    for await (const removed of res.ndjson()) {
      yield rm_toCoreInterface(removed)
    }
  }

  return rm
})

/**
 * @param {*} removed
 */
function rm_toCoreInterface (removed) {
  /** @type {RmResult} */
  const out = {
    cid: src_cid/* CID */.k0.parse(removed.Hash)
  }

  if (removed.Error) {
    out.error = new Error(removed.Error)
  }

  return out
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/block/stat.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/block').API<HTTPClientExtraOptions>} BlockAPI
 */

const stat_createStat = configure(api => {
  /**
   * @type {BlockAPI["stat"]}
   */
  async function stat (cid, options = {}) {
    const res = await api.post('block/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return { cid: src_cid/* CID */.k0.parse(data.Key), size: data.Size }
  }

  return stat
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/block/index.js





/**
 * @param {import('../types').Options} config
 */
function createBlock (config) {
  return {
    get: createGet(config),
    put: createPut(config),
    rm: createRm(config),
    stat: stat_createStat(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bootstrap/add.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>} BootstrapAPI
 */

const createAdd = configure(api => {
  /**
   * @type {BootstrapAPI["add"]}
   */
  async function add (addr, options = {}) {
    const res = await api.post('bootstrap/add', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    })

    const { Peers } = await res.json()

    return { Peers: Peers.map((/** @type {string} */ ma) => (0,dist_src/* multiaddr */.HM)(ma)) }
  }

  return add
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bootstrap/clear.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>} BootstrapAPI
 */

const createClear = configure(api => {
  /**
   * @type {BootstrapAPI["clear"]}
   */
  async function clear (options = {}) {
    const res = await api.post('bootstrap/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        all: true
      }),
      headers: options.headers
    })

    const { Peers } = await res.json()

    return { Peers: Peers.map((/** @type {string} */ ma) => (0,dist_src/* multiaddr */.HM)(ma)) }
  }

  return clear
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bootstrap/list.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>} BootstrapAPI
 */

const createList = configure(api => {
  /**
   * @type {BootstrapAPI["list"]}
   */
  async function list (options = {}) {
    const res = await api.post('bootstrap/list', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    const { Peers } = await res.json()

    return { Peers: Peers.map((/** @type {string} */ ma) => (0,dist_src/* multiaddr */.HM)(ma)) }
  }

  return list
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bootstrap/reset.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>} BootstrapAPI
 */

const createReset = configure(api => {
  /**
   * @type {BootstrapAPI["reset"]}
   */
  async function reset (options = {}) {
    const res = await api.post('bootstrap/add', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        default: true
      }),
      headers: options.headers
    })

    const { Peers } = await res.json()

    return { Peers: Peers.map((/** @type {string} */ ma) => (0,dist_src/* multiaddr */.HM)(ma)) }
  }

  return reset
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bootstrap/rm.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>} BootstrapAPI
 */

const rm_createRm = configure(api => {
  /**
   * @type {BootstrapAPI["rm"]}
   */
  async function rm (addr, options = {}) {
    const res = await api.post('bootstrap/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    })

    const { Peers } = await res.json()

    return { Peers: Peers.map((/** @type {string} */ ma) => (0,dist_src/* multiaddr */.HM)(ma)) }
  }

  return rm
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/bootstrap/index.js






/**
 * @param {import('../types').Options} config
 */
function createBootstrap (config) {
  return {
    add: createAdd(config),
    clear: createClear(config),
    list: createList(config),
    reset: createReset(config),
    rm: rm_createRm(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/profiles/apply.js



/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config/profiles').API<HTTPClientExtraOptions>} ConfigProfilesAPI
 */

const createApply = configure(api => {
  /**
   * @type {ConfigProfilesAPI["apply"]}
   */
  async function apply (profile, options = {}) {
    const res = await api.post('config/profile/apply', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: profile,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return {
      original: data.OldCfg, updated: data.NewCfg
    }
  }

  return apply
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/object-to-camel.js

/**
 * Convert object properties to camel case.
 * NOT recursive!
 * e.g.
 * AgentVersion => agentVersion
 * ID => id
 *
 * @param {Record<string, any>} obj
 */
function objectToCamel (obj) {
  if (obj == null) {
    return obj
  }

  const caps = /^[A-Z]+$/

  /** @type {Record<string, any>} */
  const output = {}

  return Object.keys(obj).reduce((camelObj, k) => {
    if (caps.test(k)) { // all caps
      camelObj[k.toLowerCase()] = obj[k]
    } else if (caps.test(k[0])) { // pascal
      camelObj[k[0].toLowerCase() + k.slice(1)] = obj[k]
    } else {
      camelObj[k] = obj[k]
    }
    return camelObj
  }, output)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/profiles/list.js




/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config/profiles').API<HTTPClientExtraOptions>} ConfigProfilesAPI
 */

const list_createList = configure(api => {
  /**
   * @type {ConfigProfilesAPI["list"]}
   */
  async function list (options = {}) {
    const res = await api.post('config/profile/list', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    const data = await res.json()

    return data.map((/** @type {Record<string, any>} */ profile) => objectToCamel(profile))
  }
  return list
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/profiles/index.js



/**
 * @param {import('../../types').Options} config
 */
function createProfiles (config) {
  return {
    apply: createApply(config),
    list: list_createList(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/get.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */

const get_createGet = configure(api => {
  /**
   * @type {ConfigAPI["get"]}
   */
  const get = async (key, options = {}) => {
    if (!key) {
      throw new Error('key argument is required')
    }

    const res = await api.post('config', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: key,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return data.Value
  }

  return get
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/get-all.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */

const createGetAll = configure(api => {
  /**
   * @type {ConfigAPI["getAll"]}
   */
  const getAll = async (options = {}) => {
    const res = await api.post('config/show', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return data
  }

  return getAll
})

// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/from-string.js
var from_string = __webpack_require__(6028);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/replace.js






/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */

const createReplace = configure(api => {
  /**
   * @type {ConfigAPI["replace"]}
   */
  const replace = async (config, options = {}) => {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    const res = await api.post('config/replace', {
      signal,
      searchParams: toUrlSearchParams(options),
      ...(
        await (0,multipart_request_browser/* multipartRequest */.x)([(0,from_string/* fromString */.m)(JSON.stringify(config))], controller, options.headers)
      )
    })

    await res.text()
  }

  return replace
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/set.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */

const createSet = configure(api => {
  /**
   * @type {ConfigAPI["set"]}
   */
  const set = async (key, value, options = {}) => {
    if (typeof key !== 'string') {
      throw new Error('Invalid key type')
    }

    const params = {
      ...options,
      ...encodeParam(key, value)
    }

    const res = await api.post('config', {
      signal: options.signal,
      searchParams: toUrlSearchParams(params),
      headers: options.headers
    })

    await res.text()
  }

  return set
})

/**
 * @param {*} key
 * @param {*} value
 */
const encodeParam = (key, value) => {
  switch (typeof value) {
    case 'boolean':
      return { arg: [key, value.toString()], bool: true }
    case 'string':
      return { arg: [key, value] }
    default:
      return { arg: [key, JSON.stringify(value)], json: true }
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/config/index.js






/**
 * @param {import('../types').Options} config
 */
function createConfig (config) {
  return {
    getAll: createGetAll(config),
    get: get_createGet(config),
    set: createSet(config),
    replace: createReplace(config),
    profiles: createProfiles(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dag/export.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */

const createExport = configure(api => {
  /**
   * @type {DAGAPI["export"]}
   */
  async function * dagExport (root, options = {}) {
    const res = await api.post('dag/export', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: root.toString()
      }),
      headers: options.headers
    })

    yield * res.iterator()
  }

  return dagExport
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/resolve.js



/**
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */

/**
 * Retrieves IPLD Nodes along the `path` that is rooted at `cid`.
 *
 * @param {CID} cid - the CID where the resolving starts
 * @param {string} path - the path that should be resolved
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {(cid: CID, options?: AbortOptions) => Promise<Uint8Array>} getBlock
 * @param {AbortOptions} [options]
 */
async function * resolve (cid, path, codecs, getBlock, options) {
  /**
   * @param {CID} cid
   */
  const load = async (cid) => {
    const codec = await codecs.getCodec(cid.code)
    const block = await getBlock(cid, options)

    return codec.decode(block)
  }

  const parts = path.split('/').filter(Boolean)
  let value = await load(cid)
  let lastCid = cid

  // End iteration if there isn't a CID to follow any more
  while (parts.length) {
    const key = parts.shift()

    if (!key) {
      throw err_code(new Error(`Could not resolve path "${path}"`), 'ERR_INVALID_PATH')
    }

    if (Object.prototype.hasOwnProperty.call(value, key)) {
      value = value[key]

      yield {
        value,
        remainderPath: parts.join('/')
      }
    } else {
      throw err_code(new Error(`no link named "${key}" under ${lastCid}`), 'ERR_NO_LINK')
    }

    const cid = src_cid/* CID */.k0.asCID(value)

    if (cid) {
      lastCid = cid
      value = await load(value)
    }
  }

  yield {
    value,
    remainderPath: ''
  }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/it-first@2.0.1/node_modules/it-first/dist/src/index.js
var it_first_dist_src = __webpack_require__(3330);
// EXTERNAL MODULE: ./node_modules/.pnpm/it-last@2.0.1/node_modules/it-last/dist/src/index.js
var it_last_dist_src = __webpack_require__(57621);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dag/get.js







/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */

/**
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {import('../types').Options} options
 */
const dag_get_createGet = (codecs, options) => {
  const fn = configure((api, opts) => {
    const getBlock = createGet(opts)

    /**
     * @type {DAGAPI["get"]}
     */
    const get = async (cid, options = {}) => {
      if (options.path) {
        const entry = options.localResolve
          ? await (0,it_first_dist_src/* default */.Z)(resolve(cid, options.path, codecs, getBlock, options))
          : await (0,it_last_dist_src/* default */.Z)(resolve(cid, options.path, codecs, getBlock, options))
        /** @type {import('ipfs-core-types/src/dag').GetResult | undefined} - first and last will return undefined when empty */
        const result = (entry)

        if (!result) {
          throw err_code(new Error('Not found'), 'ERR_NOT_FOUND')
        }

        return result
      }

      const codec = await codecs.getCodec(cid.code)
      const block = await getBlock(cid, options)
      const node = codec.decode(block)

      return {
        value: node,
        remainderPath: ''
      }
    }

    return get
  })

  return fn(options)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dag/import.js






/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */

const createImport = configure(api => {
  /**
   * @type {DAGAPI["import"]}
   */
  async function * dagImport (source, options = {}) {
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)
    const { headers, body } = await (0,multipart_request_browser/* multipartRequest */.x)(source, controller, options.headers)

    const res = await api.post('dag/import', {
      signal,
      headers,
      body,
      searchParams: toUrlSearchParams({ 'pin-roots': options.pinRoots })
    })

    for await (const { Root } of res.ndjson()) {
      if (Root !== undefined) {
        const { Cid: { '/': Cid }, PinErrorMsg } = Root

        yield {
          root: {
            cid: src_cid/* CID */.k0.parse(Cid),
            pinErrorMsg: PinErrorMsg
          }
        }
      }
    }
  }

  return dagImport
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dag/put.js






/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */

/**
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {import('../types').Options} options
 */
const put_createPut = (codecs, options) => {
  const fn = configure((api) => {
    /**
     * @type {DAGAPI["put"]}
     */
    const put = async (dagNode, options = {}) => {
      const settings = {
        storeCodec: 'dag-cbor',
        hashAlg: 'sha2-256',
        ...options
      }

      let serialized

      if (settings.inputCodec) {
        // if you supply an inputCodec, we assume you're passing in a raw, encoded
        // block using that codec, so we'll just pass that on to the server and let
        // it deal with the decode/encode/store cycle
        if (!(dagNode instanceof Uint8Array)) {
          throw new Error('Can only inputCodec on raw bytes that can be decoded')
        }
        serialized = dagNode
      } else {
        // if you don't supply an inputCodec, we assume you've passed in a JavaScript
        // object you want to have encoded using storeCodec, so we'll prepare it for
        // you if we have the codec
        const storeCodec = await codecs.getCodec(settings.storeCodec)
        serialized = storeCodec.encode(dagNode)
        // now we have a serialized form, the server should be told to receive it
        // in that format
        settings.inputCodec = settings.storeCodec
      }

      // allow aborting requests on body errors
      const controller = new AbortController()
      const signal = abortSignal(controller.signal, settings.signal)

      const res = await api.post('dag/put', {
        timeout: settings.timeout,
        signal,
        searchParams: toUrlSearchParams(settings),
        ...(
          await (0,multipart_request_browser/* multipartRequest */.x)([serialized], controller, settings.headers)
        )
      })
      const data = await res.json()

      return src_cid/* CID */.k0.parse(data.Cid['/'])
    }

    return put
  })

  return fn(options)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dag/resolve.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */

const createResolve = configure(api => {
  /**
   * @type {DAGAPI["resolve"]}
   */
  const resolve = async (ipfsPath, options = {}) => {
    const res = await api.post('dag/resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ipfsPath}${options.path ? `/${options.path}`.replace(/\/[/]+/g, '/') : ''}`,
        ...options
      }),
      headers: options.headers
    })

    const data = await res.json()

    return { cid: src_cid/* CID */.k0.parse(data.Cid['/']), remainderPath: data.RemPath }
  }

  return resolve
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dag/index.js






/**
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {import('../types').Options} config
 */
function createDag (codecs, config) {
  return {
    export: createExport(config),
    get: dag_get_createGet(codecs, config),
    import: createImport(config),
    put: put_createPut(codecs, config),
    resolve: createResolve(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/response-types.js

// Response types are defined here =
// https://github.com/libp2p/go-libp2p-core/blob/6e566d10f4a5447317a66d64c7459954b969bdab/routing/query.go#L15-L24
const SendingQuery = 0
const PeerResponse = 1
const FinalPeer = 2
const QueryError = 3
const Provider = 4
const Value = 5
const AddingPeer = 6
const DialingPeer = 7

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/map-event.js





/**
 * @typedef {import('@libp2p/interface-peer-id').PeerId} PeerId
 * @typedef {import('@multiformats/multiaddr').Multiaddr} Multiaddr
 */

/**
 * @param {{Type: number, ID: string, Extra: string, Responses: {ID: string, Addrs: string[]}[]}} event
 * @returns {import('ipfs-core-types/src/dht').QueryEvent}
 */
const mapEvent = (event) => {
  if (event.Type === SendingQuery) {
    return {
      name: 'SENDING_QUERY',
      type: event.Type
    }
  }

  if (event.Type === PeerResponse) {
    return {
      from: (0,peer_id_dist_src/* peerIdFromString */.jE)(event.ID),
      name: 'PEER_RESPONSE',
      type: event.Type,
      // TODO: how to infer this from the go-ipfs response
      messageType: 0,
      // TODO: how to infer this from the go-ipfs response
      messageName: 'PUT_VALUE',
      closer: (event.Responses || []).map(({ ID, Addrs }) => ({ id: (0,peer_id_dist_src/* peerIdFromString */.jE)(ID), multiaddrs: Addrs.map(addr => (0,dist_src/* multiaddr */.HM)(addr)), protocols: [] })),
      providers: (event.Responses || []).map(({ ID, Addrs }) => ({ id: (0,peer_id_dist_src/* peerIdFromString */.jE)(ID), multiaddrs: Addrs.map(addr => (0,dist_src/* multiaddr */.HM)(addr)), protocols: [] }))
      // TODO: how to infer this from the go-ipfs response
      // record: ???
    }
  }

  if (event.Type === FinalPeer) {
    // dht.query ends with a FinalPeer event with no Responses
    /** @type {import('@libp2p/interface-peer-info').PeerInfo} */
    let peer = {
      // @ts-expect-error go-ipfs does not return this
      id: event.ID ?? (0,peer_id_dist_src/* peerIdFromString */.jE)(event.ID),
      /** @type {Multiaddr[]} */
      multiaddrs: [],
      protocols: []
    }

    if (event.Responses && event.Responses.length) {
      // dht.findPeer has the result in the Responses field
      peer = {
        id: (0,peer_id_dist_src/* peerIdFromString */.jE)(event.Responses[0].ID),
        multiaddrs: event.Responses[0].Addrs.map(addr => (0,dist_src/* multiaddr */.HM)(addr)),
        protocols: []
      }
    }

    return {
      name: 'FINAL_PEER',
      type: event.Type,
      peer
    }
  }

  if (event.Type === QueryError) {
    return {
      name: 'QUERY_ERROR',
      type: event.Type,
      error: new Error(event.Extra)
    }
  }

  if (event.Type === Provider) {
    return {
      name: 'PROVIDER',
      type: event.Type,
      providers: event.Responses.map(({ ID, Addrs }) => ({ id: (0,peer_id_dist_src/* peerIdFromString */.jE)(ID), multiaddrs: Addrs.map(addr => (0,dist_src/* multiaddr */.HM)(addr)), protocols: [] }))
    }
  }

  if (event.Type === Value) {
    return {
      name: 'VALUE',
      type: event.Type,
      value: (0,from_string/* fromString */.m)(event.Extra, 'base64pad')
    }
  }

  if (event.Type === AddingPeer) {
    const peers = event.Responses.map(({ ID }) => (0,peer_id_dist_src/* peerIdFromString */.jE)(ID))

    if (!peers.length) {
      throw new Error('No peer found')
    }

    return {
      name: 'ADDING_PEER',
      type: event.Type,
      peer: peers[0]
    }
  }

  if (event.Type === DialingPeer) {
    return {
      name: 'DIALING_PEER',
      type: event.Type,
      peer: (0,peer_id_dist_src/* peerIdFromString */.jE)(event.ID)
    }
  }

  throw new Error('Unknown DHT event type')
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/find-peer.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 */

const createFindPeer = configure(api => {
  /**
   * @type {DHTAPI["findPeer"]}
   */
  async function * findPeer (peerId, options = {}) {
    const res = await api.post('dht/findpeer', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: peerId,
        ...options
      }),
      headers: options.headers
    })

    for await (const event of res.ndjson()) {
      yield mapEvent(event)
    }
  }

  return findPeer
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/find-provs.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 */

const createFindProvs = configure(api => {
  /**
   * @type {DHTAPI["findProvs"]}
   */
  async function * findProvs (cid, options = {}) {
    const res = await api.post('dht/findprovs', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    })

    for await (const event of res.ndjson()) {
      yield mapEvent(event)
    }
  }

  return findProvs
})

// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/to-string.js
var to_string = __webpack_require__(5766);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/get.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 */

const dht_get_createGet = configure(api => {
  /**
   * @type {DHTAPI["get"]}
   */
  async function * get (key, options = {}) {
    const res = await api.post('dht/get', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        // arg: base36.encode(key),
        arg: key instanceof Uint8Array ? (0,to_string/* toString */.B)(key) : key.toString(),
        ...options
      }),
      headers: options.headers
    })

    for await (const event of res.ndjson()) {
      yield mapEvent(event)
    }
  }

  return get
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/provide.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 * @typedef {import('multiformats/cid').CID} CID
 */

const createProvide = configure(api => {
  /**
   * @type {DHTAPI["provide"]}
   */
  async function * provide (cids, options = { recursive: false }) {
    /** @type {CID[]} */
    const cidArr = Array.isArray(cids) ? cids : [cids]

    const res = await api.post('dht/provide', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cidArr.map(cid => cid.toString()),
        ...options
      }),
      headers: options.headers
    })

    for await (const event of res.ndjson()) {
      yield mapEvent(event)
    }
  }

  return provide
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/put.js







/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 */

const dht_put_createPut = configure(api => {
  /**
   * @type {DHTAPI["put"]}
   */
  async function * put (key, value, options = {}) {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    const res = await api.post('dht/put', {
      signal,
      searchParams: toUrlSearchParams({
        arg: key instanceof Uint8Array ? (0,to_string/* toString */.B)(key) : key.toString(),
        ...options
      }),
      ...(
        await (0,multipart_request_browser/* multipartRequest */.x)([value], controller, options.headers)
      )
    })

    for await (const event of res.ndjson()) {
      yield mapEvent(event)
    }
  }

  return put
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/query.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 */

const createQuery = configure(api => {
  /**
   * @type {DHTAPI["query"]}
   */
  async function * query (peerId, options = {}) {
    const res = await api.post('dht/query', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: peerId.toString(),
        ...options
      }),
      headers: options.headers
    })

    for await (const event of res.ndjson()) {
      yield mapEvent(event)
    }
  }

  return query
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dht/index.js







/**
 * @param {import('../types').Options} config
 */
function createDht (config) {
  return {
    findPeer: createFindPeer(config),
    findProvs: createFindProvs(config),
    get: dht_get_createGet(config),
    provide: createProvide(config),
    put: dht_put_createPut(config),
    query: createQuery(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/diag/cmds.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>} DiagAPI
 */

const createCmds = configure(api => {
  /**
   * @type {DiagAPI["cmds"]}
   */
  async function cmds (options = {}) {
    const res = await api.post('diag/cmds', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    return res.json()
  }
  return cmds
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/diag/net.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>} DiagAPI
 */

const createNet = configure(api => {
  /**
   * @type {DiagAPI["net"]}
   */
  async function net (options = {}) {
    const res = await api.post('diag/net', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })
    return res.json()
  }
  return net
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/diag/sys.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>} DiagAPI
 */

const createSys = configure(api => {
  /**
   * @type {DiagAPI["sys"]}
   */
  async function sys (options = {}) {
    const res = await api.post('diag/sys', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    return res.json()
  }
  return sys
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/diag/index.js




/**
 * @param {import('../types').Options} config
 */
function createDiag (config) {
  return {
    cmds: createCmds(config),
    net: createNet(config),
    sys: createSys(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/chmod.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createChmod = configure(api => {
  /**
   * @type {FilesAPI["chmod"]}
   */
  async function chmod (path, mode, options = {}) {
    const res = await api.post('files/chmod', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        mode,
        ...options
      }),
      headers: options.headers
    })

    await res.text()
  }
  return chmod
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/cp.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createCp = configure(api => {
  /**
   * @type {FilesAPI["cp"]}
   */
  async function cp (sources, destination, options = {}) {
    /** @type {import('ipfs-core-types/src/utils').IPFSPath[]} */
    const sourceArr = Array.isArray(sources) ? sources : [sources]

    const res = await api.post('files/cp', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: sourceArr.concat(destination).map(src => src_cid/* CID */.k0.asCID(src) ? `/ipfs/${src}` : src),
        ...options
      }),
      headers: options.headers
    })

    await res.text()
  }
  return cp
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/flush.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createFlush = configure(api => {
  /**
   * @type {FilesAPI["flush"]}
   */
  async function flush (path, options = {}) {
    if (!path || typeof path !== 'string') {
      throw new Error('ipfs.files.flush requires a path')
    }

    const res = await api.post('files/flush', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return src_cid/* CID */.k0.parse(data.Cid)
  }
  return flush
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/object-to-camel-with-metadata.js


/**
 * @param {Record<string, any>} entry
 */
function objectToCamelWithMetadata (entry) {
  const file = objectToCamel(entry)

  if (Object.prototype.hasOwnProperty.call(file, 'mode')) {
    file.mode = parseInt(file.mode, 8)
  }

  if (Object.prototype.hasOwnProperty.call(file, 'mtime')) {
    file.mtime = {
      secs: file.mtime,
      nsecs: file.mtimeNsecs || 0
    }

    delete file.mtimeNsecs
  }

  return file
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/ls.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */
const createLs = configure(api => {
  /**
   * @type {FilesAPI["ls"]}
   */
  async function * ls (path, options = {}) {
    if (!path) {
      throw new Error('ipfs.files.ls requires a path')
    }

    const res = await api.post('files/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: src_cid/* CID */.k0.asCID(path) ? `/ipfs/${path}` : path,
        // default long to true, diverges from go-ipfs where its false by default
        long: true,
        ...options,
        stream: true
      }),
      headers: options.headers
    })

    for await (const result of res.ndjson()) {
      // go-ipfs does not yet support the "stream" option
      if ('Entries' in result) {
        for (const entry of result.Entries || []) {
          yield ls_toCoreInterface(objectToCamelWithMetadata(entry))
        }
      } else {
        yield ls_toCoreInterface(objectToCamelWithMetadata(result))
      }
    }
  }
  return ls
})

/**
 * @param {*} entry
 */
function ls_toCoreInterface (entry) {
  if (entry.hash) {
    entry.cid = src_cid/* CID */.k0.parse(entry.hash)
  }

  delete entry.hash

  entry.type = entry.type === 1 ? 'directory' : 'file'

  return entry
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/mkdir.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createMkdir = configure(api => {
  /**
   * @type {FilesAPI["mkdir"]}
   */
  async function mkdir (path, options = {}) {
    const res = await api.post('files/mkdir', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })

    await res.text()
  }
  return mkdir
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/mv.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createMv = configure(api => {
  /**
   * @type {FilesAPI["mv"]}
   */
  async function mv (sources, destination, options = {}) {
    if (!Array.isArray(sources)) {
      sources = [sources]
    }

    const res = await api.post('files/mv', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: sources.concat(destination),
        ...options
      }),
      headers: options.headers
    })
    await res.text()
  }

  return mv
})

// EXTERNAL MODULE: ./node_modules/.pnpm/stream-to-it@0.2.4/node_modules/stream-to-it/source.js
var source = __webpack_require__(53662);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/read.js


// @ts-expect-error no types


/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createRead = configure(api => {
  /**
   * @type {FilesAPI["read"]}
   */
  async function * read (path, options = {}) {
    const res = await api.post('files/read', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        count: options.length,
        ...options
      }),
      headers: options.headers
    })

    yield * source(res.body)
  }
  return read
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/rm.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const files_rm_createRm = configure(api => {
  /**
   * @type {FilesAPI["rm"]}
   */
  async function rm (path, options = {}) {
    const res = await api.post('files/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })

    const body = await res.text()
    // we don't expect text body to be ever present
    // (if so, it means an error such as https://github.com/ipfs/go-ipfs/issues/8606)
    if (body !== '') {
      /** @type {Error} */
      const error = new http.HTTPError(res)
      error.message = body
      throw error
    }
  }
  return rm
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/stat.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const files_stat_createStat = configure(api => {
  /**
   * @type {FilesAPI["stat"]}
   */
  async function stat (path, options = {}) {
    const res = await api.post('files/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    data.WithLocality = data.WithLocality || false
    return stat_toCoreInterface(objectToCamelWithMetadata(data))
  }
  return stat
})

/**
 * @param {*} entry
 */
function stat_toCoreInterface (entry) {
  entry.cid = src_cid/* CID */.k0.parse(entry.hash)
  delete entry.hash
  return entry
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/touch.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createTouch = configure(api => {
  /**
   * @type {FilesAPI["touch"]}
   */
  async function touch (path, options = {}) {
    const res = await api.post('files/touch', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })

    await res.text()
  }
  return touch
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/write.js







/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */

const createWrite = configure(api => {
  /**
   * @type {FilesAPI["write"]}
   */
  async function write (path, input, options = {}) {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    const res = await api.post('files/write', {
      signal,
      searchParams: toUrlSearchParams({
        arg: path,
        streamChannels: true,
        count: options.length,
        ...options
      }),
      ...(
        await (0,multipart_request_browser/* multipartRequest */.x)([{
          content: input,
          path: 'arg',
          mode: modeToString(options.mode),
          mtime: parseMtime(options.mtime)
        }], controller, options.headers)
      )
    })

    await res.text()
  }
  return write
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/files/index.js












/**
 * @param {import('../types').Options} config
 */
function createFiles (config) {
  return {
    chmod: createChmod(config),
    cp: createCp(config),
    flush: createFlush(config),
    ls: createLs(config),
    mkdir: createMkdir(config),
    mv: createMv(config),
    read: createRead(config),
    rm: files_rm_createRm(config),
    stat: files_stat_createStat(config),
    touch: createTouch(config),
    write: createWrite(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/export.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const export_createExport = configure(api => {
  /**
   * @type {KeyAPI["export"]}
   */
  const exportKey = async (name, password, options = {}) => {
    throw err_code(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED')
  }

  return exportKey
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/gen.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const createGen = configure(api => {
  /**
   * @type {KeyAPI["gen"]}
   */
  async function gen (name, options) {
    const opts = options ?? { type: 'Ed25519' }

    const res = await api.post('key/gen', {
      signal: opts.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        ...opts
      }),
      headers: opts.headers
    })
    const data = await res.json()

    // @ts-expect-error server output is not typed
    return objectToCamel(data)
  }
  return gen
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/import.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const import_createImport = configure(api => {
  /**
   * @type {KeyAPI["import"]}
   */
  async function importKey (name, pem, password, options = {}) {
    const res = await api.post('key/import', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        pem,
        password,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    // @ts-expect-error server output is not typed
    return objectToCamel(data)
  }
  return importKey
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/info.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const createInfo = configure(api => {
  /**
   * @type {KeyAPI["info"]}
   */
  const info = async (name, options = {}) => {
    throw err_code(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED')
  }

  return info
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/list.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const key_list_createList = configure(api => {
  /**
   * @type {KeyAPI["list"]}
   */
  async function list (options = {}) {
    const res = await api.post('key/list', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })
    const data = await res.json()

    return (data.Keys || []).map((/** @type {any} **/ k) => objectToCamel(k))
  }
  return list
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/rename.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const createRename = configure(api => {
  /**
   * @type {KeyAPI["rename"]}
   */
  async function rename (oldName, newName, options = {}) {
    const res = await api.post('key/rename', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          oldName,
          newName
        ],
        ...options
      }),
      headers: options.headers
    })

    // @ts-expect-error server output is not typed
    return objectToCamel(await res.json())
  }
  return rename
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/rm.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */

const key_rm_createRm = configure(api => {
  /**
   * @type {KeyAPI["rm"]}
   */
  async function rm (name, options = {}) {
    const res = await api.post('key/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    // @ts-expect-error server output is not typed
    return objectToCamel(data.Keys[0])
  }
  return rm
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/key/index.js








/**
 * @param {import('../types').Options} config
 */
function createKey (config) {
  return {
    export: export_createExport(config),
    gen: createGen(config),
    import: import_createImport(config),
    info: createInfo(config),
    list: key_list_createList(config),
    rename: createRename(config),
    rm: key_rm_createRm(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/log/level.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>} LogAPI
 */

const createLevel = configure(api => {
  /**
   * @type {LogAPI["level"]}
   */
  async function level (subsystem, level, options = {}) {
    const res = await api.post('log/level', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          subsystem,
          level
        ],
        ...options
      }),
      headers: options.headers
    })

    return objectToCamel(await res.json())
  }
  return level
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/log/ls.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>} LogAPI
 */

const ls_createLs = configure(api => {
  /**
   * @type {LogAPI["ls"]}
   */
  async function ls (options = {}) {
    const res = await api.post('log/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    const data = await res.json()
    return data.Strings
  }
  return ls
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/log/tail.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>} LogAPI
 */

const createTail = configure(api => {
  /**
   * @type {LogAPI["tail"]}
   */
  async function * tail (options = {}) {
    const res = await api.post('log/tail', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    yield * res.ndjson()
  }
  return tail
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/log/index.js




/**
 * @param {import('../types').Options} config
 */
function createLog (config) {
  return {
    level: createLevel(config),
    ls: ls_createLs(config),
    tail: createTail(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/publish.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name').API<HTTPClientExtraOptions>} NameAPI
 */

const createPublish = configure(api => {
  /**
   * @type {NameAPI["publish"]}
   */
  async function publish (path, options = {}) {
    const res = await api.post('name/publish', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${path}`,
        ...options
      }),
      headers: options.headers
    })

    // @ts-expect-error server output is not typed
    return objectToCamel(await res.json())
  }
  return publish
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/resolve.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name').API<HTTPClientExtraOptions>} NameAPI
 */

const resolve_createResolve = configure(api => {
  /**
   * @type {NameAPI["resolve"]}
   */
  async function * resolve (path, options = {}) {
    const res = await api.post('name/resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        stream: true,
        ...options
      }),
      headers: options.headers
    })

    for await (const result of res.ndjson()) {
      yield result.Path
    }
  }
  return resolve
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/pubsub/cancel.js




/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>} NamePubsubAPI
 */

const createCancel = configure(api => {
  /**
   * @type {NamePubsubAPI["cancel"]}
   */
  async function cancel (name, options = {}) {
    const res = await api.post('name/pubsub/cancel', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        ...options
      }),
      headers: options.headers
    })

    // @ts-expect-error server output is not typed
    return objectToCamel(await res.json())
  }
  return cancel
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/pubsub/state.js




/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>} NamePubsubAPI
 */

const createState = configure(api => {
  /**
   * @type {NamePubsubAPI["state"]}
   */
  async function state (options = {}) {
    const res = await api.post('name/pubsub/state', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    // @ts-expect-error server output is not typed
    return objectToCamel(await res.json())
  }
  return state
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/pubsub/subs.js



/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>} NamePubsubAPI
 */

const createSubs = configure(api => {
  /**
   * @type {NamePubsubAPI["subs"]}
   */
  async function subs (options = {}) {
    const res = await api.post('name/pubsub/subs', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })
    const data = await res.json()

    return data.Strings || []
  }
  return subs
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/pubsub/index.js




/**
 * @param {import('../../types').Options} config
 */
function createPubsub (config) {
  return {
    cancel: createCancel(config),
    state: createState(config),
    subs: createSubs(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/name/index.js




/**
 * @param {import('../types').Options} config
 */
function createName (config) {
  return {
    publish: createPublish(config),
    resolve: resolve_createResolve(config),
    pubsub: createPubsub(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/data.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>} ObjectAPI
 */

const createData = configure(api => {
  /**
   * @type {ObjectAPI["data"]}
   */
  async function data (cid, options = {}) {
    const res = await api.post('object/data', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${cid instanceof Uint8Array ? src_cid/* CID */.k0.decode(cid) : cid}`,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.arrayBuffer()

    return new Uint8Array(data, 0, data.byteLength)
  }
  return data
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/get.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>} ObjectAPI
 */

const object_get_createGet = configure(api => {
  /**
   * @type {ObjectAPI["get"]}
   */
  async function get (cid, options = {}) {
    const res = await api.post('object/get', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${cid instanceof Uint8Array ? src_cid/* CID */.k0.decode(cid) : cid}`,
        dataEncoding: 'base64',
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return {
      Data: (0,from_string/* fromString */.m)(data.Data, 'base64pad'),
      Links: (data.Links || []).map((/** @type {any} */ link) => ({
        Name: link.Name,
        Hash: src_cid/* CID */.k0.parse(link.Hash),
        Tsize: link.Size
      }))
    }
  }
  return get
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/links.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>} ObjectAPI
 */

const createLinks = configure(api => {
  /**
   * @type {ObjectAPI["links"]}
   */
  async function links (cid, options = {}) {
    const res = await api.post('object/links', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${cid instanceof Uint8Array ? src_cid/* CID */.k0.decode(cid) : cid}`,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return (data.Links || []).map((/** @type {any} */ l) => ({
      Name: l.Name,
      Tsize: l.Size,
      Hash: src_cid/* CID */.k0.parse(l.Hash)
    }))
  }
  return links
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/new.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>} ObjectAPI
 */

const createNew = configure(api => {
  /**
   * @type {ObjectAPI["new"]}
   */
  async function newObject (options = {}) {
    const res = await api.post('object/new', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: options.template,
        ...options
      }),
      headers: options.headers
    })

    const { Hash } = await res.json()

    return src_cid/* CID */.k0.parse(Hash)
  }
  return newObject
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/put.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>} ObjectAPI
 */

/**
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {import('../types').Options} options
 */
const object_put_createPut = (codecs, options) => {
  const fn = configure((api) => {
    const dagPut = put_createPut(codecs, options)

    /**
     * @type {ObjectAPI["put"]}
     */
    async function put (obj, options = {}) {
      return dagPut(obj, {
        ...options,
        storeCodec: 'dag-pb',
        hashAlg: 'sha2-256',
        version: 1
      })
    }
    return put
  })

  return fn(options)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/stat.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>} ObjectAPI
 */

const object_stat_createStat = configure(api => {
  /**
   * @type {ObjectAPI["stat"]}
   */
  async function stat (cid, options = {}) {
    const res = await api.post('object/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${cid}`,
        ...options
      }),
      headers: options.headers
    })

    const output = await res.json()

    return {
      ...output,
      Hash: src_cid/* CID */.k0.parse(output.Hash)
    }
  }
  return stat
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/patch/add-link.js




/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object/patch').API<HTTPClientExtraOptions>} ObjectPatchAPI
 */

const createAddLink = configure(api => {
  /**
   * @type {ObjectPatchAPI["addLink"]}
   */
  async function addLink (cid, dLink, options = {}) {
    const res = await api.post('object/patch/add-link', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          `${cid}`,
          // @ts-expect-error loose types
          dLink.Name || dLink.name || '',
          // @ts-expect-error loose types
          (dLink.Hash || dLink.cid || '').toString() || null
        ],
        ...options
      }),
      headers: options.headers
    })

    const { Hash } = await res.json()

    return src_cid/* CID */.k0.parse(Hash)
  }

  return addLink
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/patch/append-data.js






/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object/patch').API<HTTPClientExtraOptions>} ObjectPatchAPI
 */

const createAppendData = configure(api => {
  /**
   * @type {ObjectPatchAPI["appendData"]}
   */
  async function appendData (cid, data, options = {}) {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    const res = await api.post('object/patch/append-data', {
      signal,
      searchParams: toUrlSearchParams({
        arg: `${cid}`,
        ...options
      }),
      ...(
        await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
      )
    })

    const { Hash } = await res.json()

    return src_cid/* CID */.k0.parse(Hash)
  }
  return appendData
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/patch/rm-link.js




/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object/patch').API<HTTPClientExtraOptions>} ObjectPatchAPI
 */

const createRmLink = configure(api => {
  /**
   * @type {ObjectPatchAPI["rmLink"]}
   */
  async function rmLink (cid, dLink, options = {}) {
    const res = await api.post('object/patch/rm-link', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          `${cid}`,
          // @ts-expect-error loose types
          dLink.Name || dLink.name || null
        ],
        ...options
      }),
      headers: options.headers
    })

    const { Hash } = await res.json()

    return src_cid/* CID */.k0.parse(Hash)
  }
  return rmLink
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/patch/set-data.js






/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object/patch').API<HTTPClientExtraOptions>} ObjectPatchAPI
 */

const createSetData = configure(api => {
  /**
   * @type {ObjectPatchAPI["setData"]}
   */
  async function setData (cid, data, options = {}) {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    const res = await api.post('object/patch/set-data', {
      signal,
      searchParams: toUrlSearchParams({
        arg: [
          `${cid}`
        ],
        ...options
      }),
      ...(
        await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
      )
    })

    const { Hash } = await res.json()

    return src_cid/* CID */.k0.parse(Hash)
  }
  return setData
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/patch/index.js





/**
 * @param {import('../../types').Options} config
 */
function createPatch (config) {
  return {
    addLink: createAddLink(config),
    appendData: createAppendData(config),
    rmLink: createRmLink(config),
    setData: createSetData(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/object/index.js








/**
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {import('../types').Options} config
 */
function createObject (codecs, config) {
  return {
    data: createData(config),
    get: object_get_createGet(config),
    links: createLinks(config),
    new: createNew(config),
    put: object_put_createPut(codecs, config),
    stat: object_stat_createStat(config),
    patch: createPatch(config)
  }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/pins/normalise-input.js
var normalise_input = __webpack_require__(22147);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/add-all.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin').API<HTTPClientExtraOptions>} PinAPI
 */

const createAddAll = configure(api => {
  /**
   * @type {PinAPI["addAll"]}
   */
  async function * addAll (source, options = {}) {
    for await (const { path, recursive, metadata } of (0,normalise_input/* normaliseInput */.f)(source)) {
      const res = await api.post('pin/add', {
        signal: options.signal,
        searchParams: toUrlSearchParams({
          ...options,
          arg: path,
          recursive,
          metadata: metadata ? JSON.stringify(metadata) : undefined,
          stream: true
        }),
        headers: options.headers
      })

      for await (const pin of res.ndjson()) {
        if (pin.Pins) { // non-streaming response
          for (const cid of pin.Pins) {
            yield src_cid/* CID */.k0.parse(cid)
          }
          continue
        }

        yield src_cid/* CID */.k0.parse(pin)
      }
    }
  }
  return addAll
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/add.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin').API<HTTPClientExtraOptions>} PinAPI
 */

/**
 * @param {import('../types').Options} config
 */
function add_createAdd (config) {
  const all = createAddAll(config)

  return configure(() => {
    /**
     * @type {PinAPI["add"]}
     */
    async function add (path, options = {}) {
      // @ts-expect-error last can return undefined
      return (0,it_last_dist_src/* default */.Z)(all([{
        path,
        ...options
      }], options))
    }
    return add
  })(config)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/ls.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin').API<HTTPClientExtraOptions>} PinAPI
 */

/**
 * @param {string} type
 * @param {string} cid
 * @param {Record<string, string>} metadata
 */
function toPin (type, cid, metadata) {
  /** @type {import('ipfs-core-types/src/pin').LsResult} */
  const pin = {
    type,
    cid: src_cid/* CID */.k0.parse(cid)
  }

  if (metadata) {
    pin.metadata = metadata
  }

  return pin
}

const pin_ls_createLs = configure(api => {
  /**
   * @type {PinAPI["ls"]}
   */
  async function * ls (options = {}) {
    /** @type {any[]} */
    let paths = []

    if (options.paths) {
      paths = Array.isArray(options.paths) ? options.paths : [options.paths]
    }

    const res = await api.post('pin/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        arg: paths.map(path => `${path}`),
        stream: true
      }),
      headers: options.headers
    })

    for await (const pin of res.ndjson()) {
      if (pin.Keys) { // non-streaming response
        for (const cid of Object.keys(pin.Keys)) {
          yield toPin(pin.Keys[cid].Type, cid, pin.Keys[cid].Metadata)
        }
        return
      }

      yield toPin(pin.Type, pin.Cid, pin.Metadata)
    }
  }
  return ls
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/rm-all.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin').API<HTTPClientExtraOptions>} PinAPI
 */

const createRmAll = configure(api => {
  /**
   * @type {PinAPI["rmAll"]}
   */
  async function * rmAll (source, options = {}) {
    for await (const { path, recursive } of (0,normalise_input/* normaliseInput */.f)(source)) {
      const searchParams = new URLSearchParams(options.searchParams)
      searchParams.append('arg', `${path}`)

      if (recursive != null) searchParams.set('recursive', String(recursive))

      const res = await api.post('pin/rm', {
        signal: options.signal,
        headers: options.headers,
        searchParams: toUrlSearchParams({
          ...options,
          arg: `${path}`,
          recursive
        })
      })

      for await (const pin of res.ndjson()) {
        if (pin.Pins) { // non-streaming response
          yield * pin.Pins.map((/** @type {string} */ cid) => src_cid/* CID */.k0.parse(cid))
          continue
        }
        yield src_cid/* CID */.k0.parse(pin)
      }
    }
  }
  return rmAll
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/rm.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin').API<HTTPClientExtraOptions>} PinAPI
 */

/**
 * @param {import('../types').Options} config
 */
const pin_rm_createRm = (config) => {
  const all = createRmAll(config)

  return configure(() => {
    /**
     * @type {PinAPI["rm"]}
     */
    async function rm (path, options = {}) {
      // @ts-expect-error last can return undefined
      return (0,it_last_dist_src/* default */.Z)(all([{
        path,
        ...options
      }], options))
    }
    return rm
  })(config)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/utils.js



/**
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').Pin} Pin
 * @typedef {import('ipfs-core-types/src/pin/remote').AddOptions} AddOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').Query} Query
 * @typedef {import('ipfs-core-types/src/pin/remote').Status} Status
 */

/**
 * @param {object} json
 * @param {string} json.Name
 * @param {string} json.Cid
 * @param {Status} json.Status
 * @returns {Pin}
 */
const decodePin = ({ Name: name, Status: status, Cid: cid }) => {
  return {
    cid: src_cid/* CID */.k0.parse(cid),
    name,
    status
  }
}

/**
 * @param {any} service
 * @returns {string}
 */
const encodeService = (service) => {
  if (typeof service === 'string' && service !== '') {
    return service
  } else {
    throw new TypeError('service name must be passed')
  }
}

/**
 * @param {any} cid
 * @returns {string}
 */
const encodeCID = (cid) => {
  if (src_cid/* CID */.k0.asCID(cid)) {
    return cid.toString()
  } else {
    throw new TypeError(`CID instance expected instead of ${typeof cid}`)
  }
}

/**
 * @param {Query & { all?: boolean }} query
 * @returns {URLSearchParams}
 */
const encodeQuery = ({ service, cid, name, status, all }) => {
  const query = toUrlSearchParams({
    service: encodeService(service),
    name,
    force: all ? true : undefined
  })

  if (cid) {
    for (const value of cid) {
      query.append('cid', encodeCID(value))
    }
  }

  if (status) {
    for (const value of status) {
      query.append('status', value)
    }
  }

  return query
}

/**
 * @param {AddOptions & {cid:CID}} options
 * @returns {URLSearchParams}
 */
const encodeAddParams = ({ cid, service, background, name, origins }) => {
  const params = toUrlSearchParams({
    arg: encodeCID(cid),
    service: encodeService(service),
    name,
    background: background ? true : undefined
  })

  if (origins) {
    for (const origin of origins) {
      params.append('origin', origin.toString())
    }
  }

  return params
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/add.js


/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>} RemotePiningAPI
 */

/**
 * @param {import('../../lib/core').Client} client
 */
function remote_add_createAdd (client) {
  /**
   * @type {RemotePiningAPI["add"]}
   */
  async function add (cid, { timeout, signal, headers, ...query }) {
    const response = await client.post('pin/remote/add', {
      timeout,
      signal,
      headers,
      searchParams: encodeAddParams({ cid, ...query })
    })

    return decodePin(await response.json())
  }

  return add
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/ls.js


/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>} RemotePiningAPI
 */

/**
 * @param {import('../../lib/core').Client} client
 */
function remote_ls_createLs (client) {
  /**
   * @type {RemotePiningAPI["ls"]}
   */
  async function * ls ({ timeout, signal, headers, ...query }) {
    const response = await client.post('pin/remote/ls', {
      timeout,
      signal,
      headers,
      searchParams: encodeQuery(query)
    })

    for await (const pin of response.ndjson()) {
      yield decodePin(pin)
    }
  }

  return ls
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/rm.js


/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>} RemotePiningAPI
 */

/**
 * @param {import('../../lib/core').Client} client
 */
function remote_rm_createRm (client) {
  /**
   * @type {RemotePiningAPI["rm"]}
   */
  async function rm ({ timeout, signal, headers, ...query }) {
    await client.post('pin/remote/rm', {
      timeout,
      signal,
      headers,
      searchParams: encodeQuery({
        ...query,
        all: false
      })
    })
  }

  return rm
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/rm-all.js


/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>} RemotePiningAPI
 */

/**
 * @param {import('../../lib/core').Client} client
 */
function rm_all_createRmAll (client) {
  /**
   * @type {RemotePiningAPI["rmAll"]}
   */
  async function rmAll ({ timeout, signal, headers, ...query }) {
    await client.post('pin/remote/rm', {
      timeout,
      signal,
      headers,
      searchParams: encodeQuery({
        ...query,
        all: true
      })
    })
  }

  return rmAll
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/service/utils.js
/**
 * @typedef {import('ipfs-core-types/src/pin/remote/service').RemotePinServiceWithStat} RemotePinServiceWithStat
 */

/**
 * @param {URL} url
 */
function encodeEndpoint (url) {
  const href = String(url)
  if (href === 'undefined') {
    throw Error('endpoint is required')
  }
  // Workaround trailing `/` issue in go-ipfs
  // @see https://github.com/ipfs/go-ipfs/issues/7826
  return href[href.length - 1] === '/' ? href.slice(0, -1) : href
}

/**
 * @param {any} json
 * @returns {RemotePinServiceWithStat}
 */
function decodeRemoteService (json) {
  return {
    service: json.Service,
    endpoint: new URL(json.ApiEndpoint),
    ...(json.Stat && { stat: decodeStat(json.Stat) })
  }
}

/**
 * @param {any} json
 * @returns {import('ipfs-core-types/src/pin/remote/service').Stat}
 */
function decodeStat (json) {
  switch (json.Status) {
    case 'valid': {
      const { Pinning, Pinned, Queued, Failed } = json.PinCount
      return {
        status: 'valid',
        pinCount: {
          queued: Queued,
          pinning: Pinning,
          pinned: Pinned,
          failed: Failed
        }
      }
    }
    case 'invalid': {
      return { status: 'invalid' }
    }
    default: {
      return { status: json.Status }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/service/add.js



/**
 * @typedef {import('../../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>} RemotePiningServiceAPI
 */

/**
 * @param {import('../../../lib/core').Client} client
 */
function service_add_createAdd (client) {
  /**
   * @type {RemotePiningServiceAPI["add"]}
   */
  async function add (name, options) {
    const { endpoint, key, headers, timeout, signal } = options

    await client.post('pin/remote/service/add', {
      timeout,
      signal,
      searchParams: toUrlSearchParams({
        arg: [name, encodeEndpoint(endpoint), key]
      }),
      headers
    })
  }

  return add
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/service/ls.js



/**
 * @typedef {import('../../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>} RemotePiningServiceAPI
 */

/**
 * @param {import('../../../lib/core').Client} client
 */
function service_ls_createLs (client) {
  /**
   * @type {RemotePiningServiceAPI["ls"]}
   */
  async function ls (options = {}) {
    // @ts-expect-error cannot derive option type from typedef
    const { stat, headers, timeout, signal } = options

    const response = await client.post('pin/remote/service/ls', {
      timeout,
      signal,
      headers,
      searchParams: stat === true ? toUrlSearchParams({ stat }) : undefined
    })

    /** @type {{RemoteServices: object[]}} */
    const { RemoteServices } = await response.json()

    return RemoteServices.map(decodeRemoteService)
  }

  return ls
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/service/rm.js


/**
 * @typedef {import('../../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>} RemotePiningServiceAPI
 */

/**
 * @param {import('../../../lib/core').Client} client
 */
function service_rm_createRm (client) {
  /**
   * @type {RemotePiningServiceAPI["rm"]}
   */
  async function rm (name, options = {}) {
    await client.post('pin/remote/service/rm', {
      signal: options.signal,
      headers: options.headers,
      searchParams: toUrlSearchParams({
        arg: name
      })
    })
  }

  return rm
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/service/index.js





/**
 * @param {import('../../../types').Options} config
 */
function createService (config) {
  const client = new Client(config)

  return {
    add: service_add_createAdd(client),
    ls: service_ls_createLs(client),
    rm: service_rm_createRm(client)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/remote/index.js







/**
 * @param {import('../../types').Options} config
 */
function createRemote (config) {
  const client = new Client(config)

  return {
    add: remote_add_createAdd(client),
    ls: remote_ls_createLs(client),
    rm: remote_rm_createRm(client),
    rmAll: rm_all_createRmAll(client),
    service: createService(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pin/index.js







/**
 * @param {import('../types').Options} config
 */
function createPin (config) {
  return {
    addAll: createAddAll(config),
    add: add_createAdd(config),
    ls: pin_ls_createLs(config),
    rmAll: createRmAll(config),
    rm: pin_rm_createRm(config),
    remote: createRemote(config)
  }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base64.js
var base64 = __webpack_require__(40980);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/lib/http-rpc-wire-format.js




/* HTTP RPC:
 * - wraps binary data in multibase. base64url is used to avoid issues
 *   when a binary data is passed as search param in URL.
 *   Historical context: https://github.com/ipfs/go-ipfs/issues/7939
 *   Multibase wrapping introduced in: https://github.com/ipfs/go-ipfs/pull/8183
 */

/**
 * @param {Array<string>} strings
 * @returns {Array<string>} strings
 */
const rpcArrayToTextArray = strings => {
  if (Array.isArray(strings)) {
    return strings.map(rpcToText)
  }
  return strings
}

/**
 * @param {string} mb
 * @returns {string}
 */
const rpcToText = mb => (0,to_string/* toString */.B)(rpcToBytes(mb))

/**
 * @param {string} mb
 * @returns {Uint8Array}
 */
const rpcToBytes = mb => base64.base64url.decode(mb)

/**
 * @param {string} mb
 * @returns {bigint}
 */
const rpcToBigInt = mb => BigInt(`0x${(0,to_string/* toString */.B)(base64.base64url.decode(mb), 'base16')}`)

/**
 * @param {string} text
 * @returns {string}
 */
const textToUrlSafeRpc = text => base64.base64url.encode((0,from_string/* fromString */.m)(text))



;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/ls.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions>} PubsubAPI
 */

const pubsub_ls_createLs = configure(api => {
  /**
   * @type {PubsubAPI["ls"]}
   */
  async function ls (options = {}) {
    const { Strings } = await (await api.post('pubsub/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })).json()

    return rpcArrayToTextArray(Strings) || []
  }
  return ls
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/peers.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions>} PubsubAPI
 */

const createPeers = configure(api => {
  /**
   * @type {PubsubAPI["peers"]}
   */
  async function peers (topic, options = {}) {
    const res = await api.post('pubsub/peers', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: textToUrlSafeRpc(topic),
        ...options
      }),
      headers: options.headers
    })

    const { Strings } = await res.json()

    return Strings || []
  }
  return peers
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/publish.js






/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions>} PubsubAPI
 */

const publish_createPublish = configure(api => {
  /**
   * @type {PubsubAPI["publish"]}
   */
  async function publish (topic, data, options = {}) {
    const searchParams = toUrlSearchParams({
      arg: textToUrlSafeRpc(topic),
      ...options
    })

    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)

    const res = await api.post('pubsub/pub', {
      signal,
      searchParams,
      ...(
        await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
      )
    })

    await res.text()
  }
  return publish
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/subscribe.js





const subscribe_log = (0,logger_dist_src/* logger */.kg)('ipfs-http-client:pubsub:subscribe')

/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('@libp2p/interface-pubsub').Message} Message
 * @typedef {(err: Error, fatal: boolean, msg?: Message) => void} ErrorHandlerFn
 * @typedef {import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions & { onError?: ErrorHandlerFn }>} PubsubAPI
 * @typedef {import('../types').Options} Options
 */

/**
 * @param {Options} options
 * @param {import('./subscription-tracker').SubscriptionTracker} subsTracker
 */
const createSubscribe = (options, subsTracker) => {
  return configure((api) => {
    /**
     * @type {PubsubAPI["subscribe"]}
     */
    async function subscribe (topic, handler, options = {}) { // eslint-disable-line require-await
      options.signal = subsTracker.subscribe(topic, handler, options.signal)

      /** @type {(value?: any) => void} */
      let done
      /** @type {(error: Error) => void} */
      let fail

      const result = new Promise((resolve, reject) => {
        done = resolve
        fail = reject
      })

      // In Firefox, the initial call to fetch does not resolve until some data
      // is received. If this doesn't happen within 1 second assume success
      const ffWorkaround = setTimeout(() => done(), 1000)

      // Do this async to not block Firefox
      api.post('pubsub/sub', {
        signal: options.signal,
        searchParams: toUrlSearchParams({
          arg: textToUrlSafeRpc(topic),
          ...options
        }),
        headers: options.headers
      })
        .catch((err) => {
          // Initial subscribe fail, ensure we clean up
          subsTracker.unsubscribe(topic, handler)

          fail(err)
        })
        .then((response) => {
          clearTimeout(ffWorkaround)

          if (!response) {
            // if there was no response, the subscribe failed
            return
          }

          readMessages(response, {
            onMessage: (message) => {
              if (!handler) {
                return
              }

              if (typeof handler === 'function') {
                handler(message)
                return
              }

              if (typeof handler.handleEvent === 'function') {
                handler.handleEvent(message)
              }
            },
            onEnd: () => subsTracker.unsubscribe(topic, handler),
            onError: options.onError
          })

          done()
        })

      return result
    }
    return subscribe
  })(options)
}

/**
 * @param {import('ipfs-utils/src/types').ExtendedResponse} response
 * @param {object} options
 * @param {(message: Message) => void} options.onMessage
 * @param {() => void} options.onEnd
 * @param {ErrorHandlerFn} [options.onError]
 */
async function readMessages (response, { onMessage, onEnd, onError }) {
  onError = onError || subscribe_log

  try {
    for await (const msg of response.ndjson()) {
      try {
        if (!msg.from) {
          continue
        }

        if (msg.from != null && msg.seqno != null) {
          onMessage({
            type: 'signed',
            from: (0,peer_id_dist_src/* peerIdFromString */.jE)(msg.from),
            data: rpcToBytes(msg.data),
            sequenceNumber: rpcToBigInt(msg.seqno),
            topic: rpcToText(msg.topicIDs[0]),
            key: rpcToBytes(msg.key ?? 'u'),
            signature: rpcToBytes(msg.signature ?? 'u')
          })
        } else {
          onMessage({
            type: 'unsigned',
            data: rpcToBytes(msg.data),
            topic: rpcToText(msg.topicIDs[0])
          })
        }
      } catch (/** @type {any} */ err) {
        err.message = `Failed to parse pubsub message: ${err.message}`
        onError(err, false, msg) // Not fatal
      }
    }
  } catch (/** @type {any} */ err) {
    if (!isAbortError(err)) {
      onError(err, true) // Fatal
    }
  } finally {
    onEnd()
  }
}

/**
 * @param {Error & {type?:string}} error
 * @returns {boolean}
 */
const isAbortError = error => {
  switch (error.type) {
    case 'aborted':
      return true
    // It is `abort` in Electron instead of `aborted`
    case 'abort':
      return true
    default:
      // FIXME: In testing with Chrome, err.type is undefined (should not be!)
      // Temporarily use the name property instead.
      return error.name === 'AbortError'
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/unsubscribe.js

/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions>} PubsubAPI
 * @typedef {import('../types').Options} Options
 */

/**
 * @param {Options} options
 * @param {import('./subscription-tracker').SubscriptionTracker} subsTracker
 */
const createUnsubscribe = (options, subsTracker) => {
  /**
   * @type {PubsubAPI["unsubscribe"]}
   */
  async function unsubscribe (topic, handler) {
    subsTracker.unsubscribe(topic, handler)
  }
  return unsubscribe
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/subscription-tracker.js

/**
 * @typedef {import('@libp2p/interface-pubsub').Message} Message
 * @typedef {import('@libp2p/interfaces/events').EventHandler<Message>} MessageHandlerFn
 *
 * @typedef {object} Subscription
 * @property {MessageHandlerFn} handler
 * @property {AbortController} controller
 */

class SubscriptionTracker {
  constructor () {
    /** @type {Map<string, Subscription[]>} */
    this._subs = new Map()
  }

  /**
   * @param {string} topic
   * @param {MessageHandlerFn} handler
   * @param {AbortSignal} [signal]
   */
  subscribe (topic, handler, signal) {
    const topicSubs = this._subs.get(topic) || []

    if (topicSubs.find(s => s.handler === handler)) {
      throw new Error(`Already subscribed to ${topic} with this handler`)
    }

    // Create controller so a call to unsubscribe can cancel the request
    const controller = new AbortController()

    this._subs.set(topic, [{ handler, controller }].concat(topicSubs))

    // If there is an external signal, forward the abort event
    if (signal) {
      signal.addEventListener('abort', () => this.unsubscribe(topic, handler))
    }

    return controller.signal
  }

  /**
   * @param {string} topic
   * @param {MessageHandlerFn} [handler]
   */
  unsubscribe (topic, handler) {
    const subs = this._subs.get(topic) || []
    let unsubs

    if (handler) {
      this._subs.set(topic, subs.filter(s => s.handler !== handler))
      unsubs = subs.filter(s => s.handler === handler)
    } else {
      this._subs.set(topic, [])
      unsubs = subs
    }

    if (!(this._subs.get(topic) || []).length) {
      this._subs.delete(topic)
    }

    unsubs.forEach(s => s.controller.abort())
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/pubsub/index.js







/**
 * @param {import('../types').Options} config
 */
function pubsub_createPubsub (config) {
  const subscriptionTracker = new SubscriptionTracker()

  return {
    ls: pubsub_ls_createLs(config),
    peers: createPeers(config),
    publish: publish_createPublish(config),
    subscribe: createSubscribe(config, subscriptionTracker),
    unsubscribe: createUnsubscribe(config, subscriptionTracker)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/refs/local.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/refs').API<HTTPClientExtraOptions>} RefsAPI
 */

const createLocal = configure(api => {
  /**
   * @type {RefsAPI["local"]}
   */
  async function * refsLocal (options = {}) {
    const res = await api.post('refs/local', {
      signal: options.signal,
      transform: objectToCamel,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    yield * res.ndjson()
  }
  return refsLocal
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/refs/index.js






/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/refs').API<HTTPClientExtraOptions>} RefsAPI
 */

const createRefs = configure((api, opts) => {
  /**
   * @type {RefsAPI["refs"]}
   */
  const refs = async function * (args, options = {}) {
    /** @type {import('ipfs-core-types/src/utils').IPFSPath[]} */
    const argsArr = Array.isArray(args) ? args : [args]

    const res = await api.post('refs', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: argsArr.map(arg => `${arg instanceof Uint8Array ? src_cid/* CID */.k0.decode(arg) : arg}`),
        ...options
      }),
      headers: options.headers,
      transform: objectToCamel
    })

    yield * res.ndjson()
  }

  return Object.assign(refs, {
    local: createLocal(opts)
  })
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/repo/gc.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>} RepoAPI
 */

const createGc = configure(api => {
  /**
   * @type {RepoAPI["gc"]}
   */
  async function * gc (options = {}) {
    const res = await api.post('repo/gc', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers,
      transform: (res) => {
        return {
          err: res.Error ? new Error(res.Error) : null,
          cid: (res.Key || {})['/'] ? src_cid/* CID */.k0.parse(res.Key['/']) : null
        }
      }
    })

    yield * res.ndjson()
  }
  return gc
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/repo/stat.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>} RepoAPI
 */

const repo_stat_createStat = configure(api => {
  /**
   * @type {RepoAPI["stat"]}
   */
  async function stat (options = {}) {
    const res = await api.post('repo/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })
    const data = await res.json()

    return {
      numObjects: BigInt(data.NumObjects),
      repoSize: BigInt(data.RepoSize),
      repoPath: data.RepoPath,
      version: data.Version,
      storageMax: BigInt(data.StorageMax)
    }
  }
  return stat
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/repo/version.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>} RepoAPI
 */

const createVersion = configure(api => {
  /**
   * @type {RepoAPI["version"]}
   */
  async function version (options = {}) {
    const res = await (await api.post('repo/version', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })).json()

    return res.Version
  }
  return version
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/repo/index.js




/**
 * @param {import('../types').Options} config
 */
function createRepo (config) {
  return {
    gc: createGc(config),
    stat: repo_stat_createStat(config),
    version: createVersion(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/stats/bw.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/stats').API<HTTPClientExtraOptions>} StatsAPI
 */

const createBw = configure(api => {
  /**
   * @type {StatsAPI["bw"]}
   */
  async function * bw (options = {}) {
    const res = await api.post('stats/bw', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers,
      transform: (stats) => ({
        totalIn: BigInt(stats.TotalIn),
        totalOut: BigInt(stats.TotalOut),
        rateIn: parseFloat(stats.RateIn),
        rateOut: parseFloat(stats.RateOut)
      })
    })

    yield * res.ndjson()
  }
  return bw
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/stats/index.js




/**
 * @param {import('../types').Options} config
 */
function createStats (config) {
  return {
    bitswap: createStat(config),
    repo: repo_stat_createStat(config),
    bw: createBw(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/swarm/addrs.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */

const createAddrs = configure(api => {
  /**
   * @type {SwarmAPI["addrs"]}
   */
  async function addrs (options = {}) {
    const res = await api.post('swarm/addrs', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    /** @type {{ Addrs: Record<string, string[]> }} */
    const { Addrs } = await res.json()

    return Object.keys(Addrs).map(id => ({
      id: (0,peer_id_dist_src/* peerIdFromString */.jE)(id),
      addrs: (Addrs[id] || []).map(a => (0,dist_src/* multiaddr */.HM)(a))
    }))
  }
  return addrs
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/swarm/connect.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */

const createConnect = configure(api => {
  /**
   * @type {SwarmAPI["connect"]}
   */
  async function connect (addr, options = {}) {
    const res = await api.post('swarm/connect', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    })
    const { Strings } = await res.json()

    return Strings || []
  }
  return connect
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/swarm/disconnect.js



/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */

const createDisconnect = configure(api => {
  /**
   * @type {SwarmAPI["disconnect"]}
   */
  async function disconnect (addr, options = {}) {
    const res = await api.post('swarm/disconnect', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    })
    const { Strings } = await res.json()

    return Strings || []
  }
  return disconnect
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/swarm/local-addrs.js




/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */

const createLocalAddrs = configure(api => {
  /**
   * @type {SwarmAPI["localAddrs"]}
   */
  async function localAddrs (options = {}) {
    const res = await api.post('swarm/addrs/local', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    /** @type {{ Strings: string[] }} */
    const { Strings } = await res.json()

    return (Strings || []).map(a => (0,dist_src/* multiaddr */.HM)(a))
  }
  return localAddrs
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/swarm/peers.js





/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */

const peers_createPeers = configure(api => {
  /**
   * @type {SwarmAPI["peers"]}
   */
  async function peers (options = {}) {
    const res = await api.post('swarm/peers', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    /** @type {{ Peers: { Peer: string, Addr: string, Muxer?: string, Latency?: string, Streams?: string[], Direction?: 0 | 1 }[] }} */
    const { Peers } = await res.json()

    return (Peers || []).map(peer => {
      return {
        addr: (0,dist_src/* multiaddr */.HM)(peer.Addr),
        peer: (0,peer_id_dist_src/* peerIdFromString */.jE)(peer.Peer),
        muxer: peer.Muxer,
        latency: peer.Latency,
        streams: peer.Streams,
        direction: peer.Direction == null ? undefined : peer.Direction === 0 ? 'inbound' : 'outbound'
      }
    })
  }
  return peers
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/swarm/index.js






/**
 * @param {import('../types').Options} config
 */
function createSwarm (config) {
  return {
    addrs: createAddrs(config),
    connect: createConnect(config),
    disconnect: createDisconnect(config),
    localAddrs: createLocalAddrs(config),
    peers: peers_createPeers(config)
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/add-all.js







/**
 * @typedef {import('ipfs-utils/src/types').ProgressFn} IPFSUtilsHttpUploadProgressFn
 * @typedef {import('ipfs-core-types/src/root').AddProgressFn} IPFSCoreAddProgressFn
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 * @typedef {import('ipfs-core-types/src/root').AddResult} AddResult
 */

const add_all_createAddAll = configure((api) => {
  /**
   * @type {RootAPI["addAll"]}
   */
  async function * addAll (source, options = {}) {
    // allow aborting requests on body errors
    const controller = new AbortController()
    const signal = abortSignal(controller.signal, options.signal)
    const { headers, body, total, parts } =
      await (0,multipart_request_browser/* multipartRequest */.x)(source, controller, options.headers)

    // In browser response body only starts streaming once upload is
    // complete, at which point all the progress updates are invalid. If
    // length of the content is computable we can interpret progress from
    // `{ total, loaded}` passed to `onUploadProgress` and `multipart.total`
    // in which case we disable progress updates to be written out.
    const [progressFn, onUploadProgress] = typeof options.progress === 'function'
      ? createProgressHandler(total, parts, options.progress)
      : [undefined, undefined]

    const res = await api.post('add', {
      searchParams: toUrlSearchParams({
        'stream-channels': true,
        ...options,
        progress: Boolean(progressFn)
      }),
      onUploadProgress,
      signal,
      headers,
      body
    })

    for await (let file of res.ndjson()) {
      file = objectToCamel(file)

      if (file.hash !== undefined) {
        yield add_all_toCoreInterface(file)
      } else if (progressFn) {
        progressFn(file.bytes || 0, file.name)
      }
    }
  }
  return addAll
})

/**
 * Returns simple progress callback when content length isn't computable or a
 * progress event handler that calculates progress from upload progress events.
 *
 * @param {number} total
 * @param {{name:string, start:number, end:number}[]|null} parts
 * @param {IPFSCoreAddProgressFn} progress
 * @returns {[IPFSCoreAddProgressFn|undefined, IPFSUtilsHttpUploadProgressFn|undefined]}
 */
const createProgressHandler = (total, parts, progress) =>
  parts ? [undefined, createOnUploadProgress(total, parts, progress)] : [progress, undefined]

/**
 * Creates a progress handler that interpolates progress from upload progress
 * events and total size of the content that is added.
 *
 * @param {number} size - actual content size
 * @param {{name:string, start:number, end:number}[]} parts
 * @param {IPFSCoreAddProgressFn} progress
 * @returns {IPFSUtilsHttpUploadProgressFn}
 */
const createOnUploadProgress = (size, parts, progress) => {
  let index = 0
  const count = parts.length
  return ({ loaded, total }) => {
    // Derive position from the current progress.
    const position = Math.floor(loaded / total * size)
    while (index < count) {
      const { start, end, name } = parts[index]
      // If within current part range report progress and break the loop
      if (position < end) {
        progress(position - start, name)
        break
      // If passed current part range report final byte for the chunk and
      // move to next one.
      } else {
        progress(end - start, name)
        index += 1
      }
    }
  }
}

/**
 * @param {object} input
 * @param {string} input.name
 * @param {string} input.hash
 * @param {string} input.size
 * @param {string} [input.mode]
 * @param {number} [input.mtime]
 * @param {number} [input.mtimeNsecs]
 */
function add_all_toCoreInterface ({ name, hash, size, mode, mtime, mtimeNsecs }) {
  /** @type {AddResult} */
  const output = {
    path: name,
    cid: src_cid/* CID */.k0.parse(hash),
    size: parseInt(size)
  }

  if (mode != null) {
    output.mode = parseInt(mode, 8)
  }

  if (mtime != null) {
    output.mtime = {
      secs: mtime,
      nsecs: mtimeNsecs || 0
    }
  }

  return output
}

// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-input-single.js + 2 modules
var normalise_input_single = __webpack_require__(39857);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/add.js





/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

/**
 * @param {import('./types').Options} options
 */
function src_add_createAdd (options) {
  const all = add_all_createAddAll(options)
  return configure(() => {
    /**
     * @type {RootAPI["add"]}
     */
    async function add (input, options = {}) {
      // @ts-expect-error - last may return undefined if source is empty
      return await (0,it_last_dist_src/* default */.Z)(all((0,normalise_input_single/* normaliseInput */.f)(input), options))
    }
    return add
  })(options)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/cat.js



/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createCat = configure(api => {
  /**
   * @type {RootAPI["cat"]}
   */
  async function * cat (path, options = {}) {
    const res = await api.post('cat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path.toString(),
        ...options
      }),
      headers: options.headers
    })

    yield * res.iterator()
  }

  return cat
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/commands.js



/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createCommands = configure(api => {
  /**
   * @type {RootAPI["commands"]}
   */
  const commands = async (options = {}) => {
    const res = await api.post('commands', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    return res.json()
  }
  return commands
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/dns.js



/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createDns = configure(api => {
  /**
   * @type {RootAPI["dns"]}
   */
  const dns = async (domain, options = {}) => {
    const res = await api.post('dns', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: domain,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    return data.Path
  }

  return dns
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/get-endpoint-config.js


const createGetEndpointConfig = configure(api => {
  return () => {
    const url = new URL(api.opts.base || '')
    return {
      host: url.hostname,
      port: url.port,
      protocol: url.protocol,
      pathname: url.pathname,
      'api-path': url.pathname
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/get.js




/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const src_get_createGet = configure(api => {
  /**
   * @type {RootAPI["get"]}
   */
  async function * get (path, options = {}) {
    /** @type {Record<string, any>} */
    const opts = {
      arg: `${path instanceof Uint8Array ? src_cid/* CID */.k0.decode(path) : path}`,
      ...options
    }

    if (opts.compressionLevel) {
      opts['compression-level'] = opts.compressionLevel
      delete opts.compressionLevel
    }

    const res = await api.post('get', {
      signal: options.signal,
      searchParams: toUrlSearchParams(opts),
      headers: options.headers
    })

    yield * res.iterator()
  }

  return get
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/id.js






/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createId = configure(api => {
  /**
   * @type {RootAPI["id"]}
   */
  async function id (options = {}) {
    const res = await api.post('id', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: options.peerId ? options.peerId.toString() : undefined,
        ...options
      }),
      headers: options.headers
    })
    const data = await res.json()

    const output = {
      ...objectToCamel(data)
    }

    output.id = (0,peer_id_dist_src/* peerIdFromString */.jE)(output.id)

    if (output.addresses) {
      output.addresses = output.addresses.map((/** @type {string} */ ma) => (0,dist_src/* multiaddr */.HM)(ma))
    }

    // @ts-expect-error server output is not typed
    return output
  }
  return id
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/is-online.js


/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

/**
 * @param {import('./types').Options} options
 */
const createIsOnline = options => {
  const id = createId(options)

  /**
   * @type {RootAPI["isOnline"]}
   */
  async function isOnline (options = {}) {
    const res = await id(options)

    return Boolean(res && res.addresses && res.addresses.length)
  }
  return isOnline
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/ls.js





/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const src_ls_createLs = configure((api, opts) => {
  /**
   * @type {RootAPI["ls"]}
   */
  async function * ls (path, options = {}) {
    const pathStr = `${path instanceof Uint8Array ? src_cid/* CID */.k0.decode(path) : path}`

    /**
     * @param {*} link
     */
    async function mapLink (link) {
      let hash = link.Hash

      if (hash.includes('/')) {
        // the hash is a path, but we need the CID
        const ipfsPath = hash.startsWith('/ipfs/') ? hash : `/ipfs/${hash}`
        const stats = await files_stat_createStat(opts)(ipfsPath)

        hash = stats.cid
      } else {
        hash = src_cid/* CID */.k0.parse(hash)
      }

      /** @type {import('ipfs-core-types/src/root').IPFSEntry} */
      const entry = {
        name: link.Name,
        path: pathStr + (link.Name ? `/${link.Name}` : ''),
        size: link.Size,
        cid: hash,
        type: typeOf(link)
      }

      if (link.Mode) {
        entry.mode = parseInt(link.Mode, 8)
      }

      if (link.Mtime !== undefined && link.Mtime !== null) {
        entry.mtime = {
          secs: link.Mtime
        }

        if (link.MtimeNsecs !== undefined && link.MtimeNsecs !== null) {
          entry.mtime.nsecs = link.MtimeNsecs
        }
      }

      return entry
    }

    const res = await api.post('ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: pathStr,
        ...options
      }),
      headers: options.headers
    })

    for await (let result of res.ndjson()) {
      result = result.Objects

      if (!result) {
        throw new Error('expected .Objects in results')
      }

      result = result[0]
      if (!result) {
        throw new Error('expected one array in results.Objects')
      }

      const links = result.Links
      if (!Array.isArray(links)) {
        throw new Error('expected one array in results.Objects[0].Links')
      }

      if (!links.length) {
        // no links, this is a file, yield a single result
        yield mapLink(result)

        return
      }

      yield * links.map(mapLink)
    }
  }
  return ls
})

/**
 * @param {any} link
 */
function typeOf (link) {
  switch (link.Type) {
    case 1:
    case 5:
      return 'dir'
    case 2:
      return 'file'
    default:
      return 'file'
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/mount.js




/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createMount = configure(api => {
  /**
   * @type {RootAPI["mount"]}
   */
  async function mount (options = {}) {
    const res = await api.post('dns', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    return objectToCamel(await res.json())
  }
  return mount
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/ping.js




/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createPing = configure(api => {
  /**
   * @type {RootAPI["ping"]}
   */
  async function * ping (peerId, options = {}) {
    const res = await api.post('ping', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${peerId}`,
        ...options
      }),
      headers: options.headers,
      transform: objectToCamel
    })

    yield * res.ndjson()
  }
  return ping
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/resolve.js



/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const src_resolve_createResolve = configure(api => {
  /**
   * @type {RootAPI["resolve"]}
   */
  async function resolve (path, options = {}) {
    const res = await api.post('resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })
    const { Path } = await res.json()
    return Path
  }
  return resolve
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/start.js



/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createStart = configure(api => {
  /**
   * @type {RootAPI["start"]}
   */
  const start = async (options = {}) => {
    throw err_code(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED')
  }

  return start
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/stop.js



/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const createStop = configure(api => {
  /**
   * @type {RootAPI["stop"]}
   */
  async function stop (options = {}) {
    const res = await api.post('shutdown', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    await res.text()
  }
  return stop
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/version.js




/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */

const version_createVersion = configure(api => {
  /**
   * @type {RootAPI["version"]}
   */
  async function version (options = {}) {
    const res = await api.post('version', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    // @ts-expect-error server output is not typed
    return {
      ...objectToCamel(await res.json()),
      'ipfs-http-client': '1.0.0'
    }
  }

  return version
})

// EXTERNAL MODULE: ipfs-utils/src/files/glob-source.js (ignored)
var glob_source_ignored_ = __webpack_require__(98996);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-utils@9.0.14/node_modules/ipfs-utils/src/files/url-source.js
var url_source = __webpack_require__(6827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-http-client@60.0.1_undici@5.23.0/node_modules/ipfs-http-client/src/index.js
/* eslint-env browser */














































/**
 * @typedef {import('multiformats/codecs/interface').BlockCodec<any, any>} BlockCodec
 * @typedef {import('multiformats/hashes/interface').MultihashHasher} MultihashHasher
 * @typedef {import('multiformats/bases/interface').MultibaseCodec<any>} MultibaseCodec
 * @typedef {import('./types').Options} Options
 * @typedef {import('./types').LoadBaseFn} LoadBaseFn
 * @typedef {import('./types').LoadCodecFn} LoadCodecFn
 * @typedef {import('./types').LoadHasherFn} LoadHasherFn
 * @typedef {import('./types').IPLDOptions} IPLDOptions
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('./types').EndpointConfig} EndpointConfig
 * @typedef {import('./types').IPFSHTTPClient} IPFSHTTPClient
 */

/**
 * @param {Options} options
 */
function create (options = {}) {
  /**
   * @type {BlockCodec}
   */
  const id = {
    name: identity.identity.name,
    code: identity.identity.code,
    encode: (id) => id,
    decode: (id) => id
  }

  /** @type {MultibaseCodec[]} */
  const multibaseCodecs = Object.values(basics/* bases */.gh);

  (options.ipld && options.ipld.bases ? options.ipld.bases : []).forEach(base => multibaseCodecs.push(base))

  const multibases = new src_multibases/* Multibases */.x({
    bases: multibaseCodecs,
    loadBase: options.ipld && options.ipld.loadBase
  })

  /** @type {BlockCodec[]} */
  const blockCodecs = Object.values(basics/* codecs */.QB);

  [src, dag_cbor_src, dag_json_src, lib, id].concat((options.ipld && options.ipld.codecs) || []).forEach(codec => blockCodecs.push(codec))

  const multicodecs = new src_multicodecs/* Multicodecs */.w({
    codecs: blockCodecs,
    loadCodec: options.ipld && options.ipld.loadCodec
  })

  /** @type {MultihashHasher[]} */
  const multihashHashers = Object.values(basics/* hashes */.kq);

  (options.ipld && options.ipld.hashers ? options.ipld.hashers : []).forEach(hasher => multihashHashers.push(hasher))

  const multihashes = new src_multihashes/* Multihashes */.d({
    hashers: multihashHashers,
    loadHasher: options.ipld && options.ipld.loadHasher
  })

  /** @type {IPFSHTTPClient} */
  const client = {
    add: src_add_createAdd(options),
    addAll: add_all_createAddAll(options),
    bitswap: createBitswap(options),
    block: createBlock(options),
    bootstrap: createBootstrap(options),
    cat: createCat(options),
    commands: createCommands(options),
    config: createConfig(options),
    dag: createDag(multicodecs, options),
    dht: createDht(options),
    diag: createDiag(options),
    dns: createDns(options),
    files: createFiles(options),
    get: src_get_createGet(options),
    getEndpointConfig: createGetEndpointConfig(options),
    id: createId(options),
    isOnline: createIsOnline(options),
    key: createKey(options),
    log: createLog(options),
    ls: src_ls_createLs(options),
    mount: createMount(options),
    name: createName(options),
    object: createObject(multicodecs, options),
    pin: createPin(options),
    ping: createPing(options),
    pubsub: pubsub_createPubsub(options),
    refs: createRefs(options),
    repo: createRepo(options),
    resolve: src_resolve_createResolve(options),
    start: createStart(options),
    stats: createStats(options),
    stop: createStop(options),
    swarm: createSwarm(options),
    version: version_createVersion(options),
    bases: multibases,
    codecs: multicodecs,
    hashers: multihashes
  }

  return client
}




const globSource = (/* unused pure expression or super */ null && (globSourceImport))


/***/ })

}]);
//# sourceMappingURL=chunk.npm.ipfs-http-client.js.map