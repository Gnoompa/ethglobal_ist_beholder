"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5655],{

/***/ 31670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {});


/***/ }),

/***/ 39857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ normaliseInput)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(36676);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/from-string.js
var from_string = __webpack_require__(6028);
// EXTERNAL MODULE: ./node_modules/.pnpm/browser-readablestream-to-it@2.0.2/node_modules/browser-readablestream-to-it/dist/src/index.js
var src = __webpack_require__(39877);
// EXTERNAL MODULE: ./node_modules/.pnpm/blob-to-it@2.0.2/node_modules/blob-to-it/dist/src/index.js
var dist_src = __webpack_require__(54189);
// EXTERNAL MODULE: ./node_modules/.pnpm/it-peekable@2.0.1/node_modules/it-peekable/dist/src/index.js
var it_peekable_dist_src = __webpack_require__(89985);
// EXTERNAL MODULE: ./node_modules/.pnpm/it-all@2.0.1/node_modules/it-all/dist/src/index.js
var it_all_dist_src = __webpack_require__(97270);
// EXTERNAL MODULE: ./node_modules/.pnpm/it-map@2.0.1/node_modules/it-map/dist/src/index.js
var it_map_dist_src = __webpack_require__(9517);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/utils.js
var utils = __webpack_require__(74456);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-content.js









/**
 * @template T
 * @param {T} thing
 */
async function * toAsyncIterable (thing) {
  yield thing
}

/**
 * @param {import('ipfs-core-types/src/utils').ToContent} input
 */
async function normaliseContent (input) {
  // Bytes | String
  if ((0,utils/* isBytes */._t)(input)) {
    return toAsyncIterable(toBytes(input))
  }

  if (typeof input === 'string' || input instanceof String) {
    return toAsyncIterable(toBytes(input.toString()))
  }

  // Blob
  if ((0,utils/* isBlob */.Lj)(input)) {
    return (0,dist_src/* default */.Z)(input)
  }

  // Browser stream
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = (0,src/* default */.Z)(input)
  }

  // (Async)Iterator<?>
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    /** @type {any} peekable */
    const peekable = (0,it_peekable_dist_src/* default */.Z)(input)

    /** @type {any} value */
    const { value, done } = await peekable.peek()

    if (done) {
      // make sure empty iterators result in empty files
      return toAsyncIterable(new Uint8Array(0))
    }

    peekable.push(value)

    // (Async)Iterable<Number>
    if (Number.isInteger(value)) {
      return toAsyncIterable(Uint8Array.from(await (0,it_all_dist_src/* default */.Z)(peekable)))
    }

    // (Async)Iterable<Bytes|String>
    if ((0,utils/* isBytes */._t)(value) || typeof value === 'string' || value instanceof String) {
      return (0,it_map_dist_src/* default */.Z)(peekable, toBytes)
    }
  }

  throw err_code(new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT')
}

/**
 * @param {ArrayBuffer | ArrayBufferView | string | InstanceType<typeof window.String> | number[]} chunk
 */
function toBytes (chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk
  }

  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength)
  }

  if (chunk instanceof ArrayBuffer) {
    return new Uint8Array(chunk)
  }

  if (Array.isArray(chunk)) {
    return Uint8Array.from(chunk)
  }

  return (0,from_string/* fromString */.m)(chunk.toString())
}

// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-unixfs@9.0.1/node_modules/ipfs-unixfs/src/index.js + 1 modules
var ipfs_unixfs_src = __webpack_require__(59927);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-candidate-single.js






/**
 * @typedef {import('ipfs-core-types/src/utils').ToContent} ToContent
 * @typedef {import('ipfs-unixfs-importer').ImportCandidate} ImporterImportCandidate
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidate} ImportCandidate
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidateStream} ImportCandidateStream
 */

/**
 * @param {ImportCandidate} input
 * @param {(content:ToContent) => Promise<AsyncIterable<Uint8Array>>} normaliseContent
 */
// eslint-disable-next-line complexity
async function * normaliseCandidateSingle (input, normaliseContent) {
  if (input === null || input === undefined) {
    throw err_code(new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT')
  }

  // String
  if (typeof input === 'string' || input instanceof String) {
    yield toFileObject(input.toString(), normaliseContent)
    return
  }

  // Uint8Array|ArrayBuffer|TypedArray
  // Blob|File
  if ((0,utils/* isBytes */._t)(input) || (0,utils/* isBlob */.Lj)(input)) {
    yield toFileObject(input, normaliseContent)
    return
  }

  // Browser ReadableStream
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = (0,src/* default */.Z)(input)
  }

  // Iterable<?>
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = (0,it_peekable_dist_src/* default */.Z)(input)

    /** @type {any} value **/
    const { value, done } = await peekable.peek()

    if (done) {
      // make sure empty iterators result in empty files
      yield { content: [] }
      return
    }

    peekable.push(value)

    // (Async)Iterable<Number>
    // (Async)Iterable<Bytes>
    // (Async)Iterable<String>
    if (Number.isInteger(value) || (0,utils/* isBytes */._t)(value) || typeof value === 'string' || value instanceof String) {
      yield toFileObject(peekable, normaliseContent)
      return
    }

    throw err_code(new Error('Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead'), 'ERR_UNEXPECTED_INPUT')
  }

  // { path, content: ? }
  // Note: Detected _after_ (Async)Iterable<?> because Node.js fs.ReadStreams have a
  // `path` property that passes this check.
  if ((0,utils/* isFileObject */.Mk)(input)) {
    yield toFileObject(input, normaliseContent)
    return
  }

  throw err_code(new Error('Unexpected input: cannot convert "' + typeof input + '" into ImportCandidate'), 'ERR_UNEXPECTED_INPUT')
}

/**
 * @param {ImportCandidate} input
 * @param {(content:ToContent) => Promise<AsyncIterable<Uint8Array>>} normaliseContent
 */
async function toFileObject (input, normaliseContent) {
  // @ts-expect-error - Those properties don't exist on most input types
  const { path, mode, mtime, content } = input

  /** @type {ImporterImportCandidate} */
  const file = {
    path: path || '',
    mode: (0,ipfs_unixfs_src/* parseMode */.tK)(mode),
    mtime: (0,ipfs_unixfs_src/* parseMtime */.Xu)(mtime)
  }

  if (content) {
    file.content = await normaliseContent(content)
  } else if (!path) { // Not already a file object with path or content prop
    // @ts-expect-error - input still can be different ToContent
    file.content = await normaliseContent(input)
  }

  return file
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-input-single.js



/**
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidate} ImportCandidate
 */

/**
 * Transforms any of the `ipfs.add` input types into
 *
 * ```
 * AsyncIterable<{ path, mode, mtime, content: AsyncIterable<Uint8Array> }>
 * ```
 *
 * See https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/FILES.md#ipfsadddata-options
 *
 * @param {ImportCandidate} input
 */
function normaliseInput (input) {
  return normaliseCandidateSingle(input, normaliseContent)
}


/***/ }),

/***/ 74456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lj: () => (/* binding */ isBlob),
/* harmony export */   Mk: () => (/* binding */ isFileObject),
/* harmony export */   Os: () => (/* binding */ isReadableStream),
/* harmony export */   _t: () => (/* binding */ isBytes)
/* harmony export */ });
/**
 * @param {any} obj
 * @returns {obj is ArrayBufferView|ArrayBuffer}
 */
function isBytes (obj) {
  return ArrayBuffer.isView(obj) || obj instanceof ArrayBuffer
}

/**
 * @param {any} obj
 * @returns {obj is globalThis.Blob}
 */
function isBlob (obj) {
  return obj.constructor &&
    (obj.constructor.name === 'Blob' || obj.constructor.name === 'File') &&
    typeof obj.stream === 'function'
}

/**
 * An object with a path or content property
 *
 * @param {any} obj
 * @returns {obj is import('ipfs-core-types/src/utils').ImportCandidate}
 */
function isFileObject (obj) {
  return typeof obj === 'object' && (obj.path || obj.content)
}

/**
 * @param {any} value
 * @returns {value is ReadableStream}
 */
const isReadableStream = (value) =>
  value && typeof value.getReader === 'function'


/***/ }),

/***/ 91040:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Multibases)
/* harmony export */ });
/**
 * @typedef {import('multiformats/bases/interface').MultibaseCodec<any>} MultibaseCodec
 * @typedef {import('./types').LoadBaseFn} LoadBaseFn
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */

/**
 * @type {LoadBaseFn}
 */
const LOAD_BASE = (name) => Promise.reject(new Error(`No base found for "${name}"`))

class Multibases {
  /**
   * @param {object} options
   * @param {LoadBaseFn} [options.loadBase]
   * @param {MultibaseCodec[]} options.bases
   */
  constructor (options) {
    // Object with current list of active resolvers
    /** @type {Record<string, MultibaseCodec>}} */
    this._basesByName = {}

    // Object with current list of active resolvers
    /** @type {Record<string, MultibaseCodec>}} */
    this._basesByPrefix = {}

    this._loadBase = options.loadBase || LOAD_BASE

    // Enable all supplied codecs
    for (const base of options.bases) {
      this.addBase(base)
    }
  }

  /**
   * Add support for a multibase codec
   *
   * @param {MultibaseCodec} base
   */
  addBase (base) {
    if (this._basesByName[base.name] || this._basesByPrefix[base.prefix]) {
      throw new Error(`Codec already exists for codec "${base.name}"`)
    }

    this._basesByName[base.name] = base
    this._basesByPrefix[base.prefix] = base
  }

  /**
   * Remove support for a multibase codec
   *
   * @param {MultibaseCodec} base
   */
  removeBase (base) {
    delete this._basesByName[base.name]
    delete this._basesByPrefix[base.prefix]
  }

  /**
   * @param {string} nameOrPrefix
   */
  async getBase (nameOrPrefix) {
    if (this._basesByName[nameOrPrefix]) {
      return this._basesByName[nameOrPrefix]
    }

    if (this._basesByPrefix[nameOrPrefix]) {
      return this._basesByPrefix[nameOrPrefix]
    }

    // If not supported, attempt to dynamically load this codec
    const base = await this._loadBase(nameOrPrefix)

    if (this._basesByName[base.name] == null && this._basesByPrefix[base.prefix] == null) {
      this.addBase(base)
    }

    return base
  }

  listBases () {
    return Object.values(this._basesByName)
  }
}


/***/ }),

/***/ 51655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ Multicodecs)
/* harmony export */ });
/**
 * @typedef {import('multiformats/codecs/interface').BlockCodec<any, any>} BlockCodec
 * @typedef {import('./types').LoadCodecFn} LoadCodecFn
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */

/**
 * @type {LoadCodecFn}
 */
const LOAD_CODEC = (codeOrName) => Promise.reject(new Error(`No codec found for "${codeOrName}"`))

class Multicodecs {
  /**
   * @param {object} options
   * @param {LoadCodecFn} [options.loadCodec]
   * @param {BlockCodec[]} options.codecs
   */
  constructor (options) {
    // Object with current list of active resolvers
    /** @type {Record<string, BlockCodec>}} */
    this._codecsByName = {}

    // Object with current list of active resolvers
    /** @type {Record<number, BlockCodec>}} */
    this._codecsByCode = {}

    this._loadCodec = options.loadCodec || LOAD_CODEC

    // Enable all supplied codecs
    for (const codec of options.codecs) {
      this.addCodec(codec)
    }
  }

  /**
   * Add support for a block codec
   *
   * @param {BlockCodec} codec
   */
  addCodec (codec) {
    if (this._codecsByName[codec.name] || this._codecsByCode[codec.code]) {
      throw new Error(`Resolver already exists for codec "${codec.name}"`)
    }

    this._codecsByName[codec.name] = codec
    this._codecsByCode[codec.code] = codec
  }

  /**
   * Remove support for a block codec
   *
   * @param {BlockCodec} codec
   */
  removeCodec (codec) {
    delete this._codecsByName[codec.name]
    delete this._codecsByCode[codec.code]
  }

  /**
   * @param {number | string} code
   */
  async getCodec (code) {
    const table = typeof code === 'string' ? this._codecsByName : this._codecsByCode

    if (table[code]) {
      return table[code]
    }

    // If not supported, attempt to dynamically load this codec
    const codec = await this._loadCodec(code)

    if (table[code] == null) {
      this.addCodec(codec)
    }

    return codec
  }

  listCodecs () {
    return Object.values(this._codecsByName)
  }
}


/***/ }),

/***/ 86564:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ Multihashes)
/* harmony export */ });
/**
 * @typedef {import('multiformats/hashes/interface').MultihashHasher} MultihashHasher
 * @typedef {import('./types').LoadHasherFn} LoadHasherFn
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */

/**
 * @type {LoadHasherFn}
 */
const LOAD_HASHER = (codeOrName) => Promise.reject(new Error(`No hasher found for "${codeOrName}"`))

class Multihashes {
  /**
   * @param {object} options
   * @param {LoadHasherFn} [options.loadHasher]
   * @param {MultihashHasher[]} options.hashers
   */
  constructor (options) {
    // Object with current list of active hashers
    /** @type {Record<string, MultihashHasher>}} */
    this._hashersByName = {}

    // Object with current list of active hashers
    /** @type {Record<number, MultihashHasher>}} */
    this._hashersByCode = {}

    this._loadHasher = options.loadHasher || LOAD_HASHER

    // Enable all supplied hashers
    for (const hasher of options.hashers) {
      this.addHasher(hasher)
    }
  }

  /**
   * Add support for a multibase hasher
   *
   * @param {MultihashHasher} hasher
   */
  addHasher (hasher) {
    if (this._hashersByName[hasher.name] || this._hashersByCode[hasher.code]) {
      throw new Error(`Resolver already exists for codec "${hasher.name}"`)
    }

    this._hashersByName[hasher.name] = hasher
    this._hashersByCode[hasher.code] = hasher
  }

  /**
   * Remove support for a multibase hasher
   *
   * @param {MultihashHasher} hasher
   */
  removeHasher (hasher) {
    delete this._hashersByName[hasher.name]
    delete this._hashersByCode[hasher.code]
  }

  /**
   * @param {number | string} code
   */
  async getHasher (code) {
    const table = typeof code === 'string' ? this._hashersByName : this._hashersByCode

    if (table[code]) {
      return table[code]
    }

    // If not supported, attempt to dynamically load this hasher
    const hasher = await this._loadHasher(code)

    if (table[code] == null) {
      this.addHasher(hasher)
    }

    return hasher
  }

  listHashers () {
    return Object.values(this._hashersByName)
  }
}


/***/ }),

/***/ 53031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ multipartRequest)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(36676);
// EXTERNAL MODULE: ./node_modules/.pnpm/it-peekable@2.0.1/node_modules/it-peekable/dist/src/index.js
var src = __webpack_require__(89985);
// EXTERNAL MODULE: ./node_modules/.pnpm/browser-readablestream-to-it@2.0.2/node_modules/browser-readablestream-to-it/dist/src/index.js
var dist_src = __webpack_require__(39877);
// EXTERNAL MODULE: ./node_modules/.pnpm/it-all@2.0.1/node_modules/it-all/dist/src/index.js
var it_all_dist_src = __webpack_require__(97270);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/utils.js
var utils = __webpack_require__(74456);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-content.browser.js






/**
 * @param {import('ipfs-core-types/src/utils').ToContent} input
 */
async function normaliseContent (input) {
  // Bytes
  if ((0,utils/* isBytes */._t)(input)) {
    return new Blob([input])
  }

  // String
  if (typeof input === 'string' || input instanceof String) {
    return new Blob([input.toString()])
  }

  // Blob | File
  if ((0,utils/* isBlob */.Lj)(input)) {
    return input
  }

  // Browser stream
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = (0,dist_src/* default */.Z)(input)
  }

  // (Async)Iterator<?>
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    /** @type {any} peekable */
    const peekable = (0,src/* default */.Z)(input)

    /** @type {any} value **/
    const { value, done } = await peekable.peek()

    if (done) {
      // make sure empty iterators result in empty files
      return itToBlob(peekable)
    }

    peekable.push(value)

    // (Async)Iterable<Number>
    if (Number.isInteger(value)) {
      return new Blob([Uint8Array.from(await (0,it_all_dist_src/* default */.Z)(peekable))])
    }

    // (Async)Iterable<Bytes|String>
    if ((0,utils/* isBytes */._t)(value) || typeof value === 'string' || value instanceof String) {
      return itToBlob(peekable)
    }
  }

  throw err_code(new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT')
}

/**
 * @param {AsyncIterable<BlobPart>|Iterable<BlobPart>} stream
 */
async function itToBlob (stream) {
  const parts = []

  for await (const chunk of stream) {
    parts.push(chunk)
  }

  return new Blob(parts)
}

// EXTERNAL MODULE: ./node_modules/.pnpm/it-map@2.0.1/node_modules/it-map/dist/src/index.js
var it_map_dist_src = __webpack_require__(9517);
// EXTERNAL MODULE: ./node_modules/.pnpm/ipfs-unixfs@9.0.1/node_modules/ipfs-unixfs/src/index.js + 1 modules
var ipfs_unixfs_src = __webpack_require__(59927);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-candidate-multiple.js







/**
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidate} ImportCandidate
 * @typedef {import('ipfs-core-types/src/utils').ToContent} ToContent
 * @typedef {import('ipfs-unixfs-importer').ImportCandidate} ImporterImportCandidate
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidateStream} ImportCandidateStream
 */

/**
 * @param {ImportCandidateStream} input
 * @param {(content:ToContent) => Promise<AsyncIterable<Uint8Array>>} normaliseContent
 */
// eslint-disable-next-line complexity
async function * normaliseCandidateMultiple (input, normaliseContent) {
  // String
  // Uint8Array|ArrayBuffer|TypedArray
  // Blob|File
  // fs.ReadStream
  // @ts-expect-error _readableState is a property of a node fs.ReadStream
  if (typeof input === 'string' || input instanceof String || (0,utils/* isBytes */._t)(input) || (0,utils/* isBlob */.Lj)(input) || input._readableState) {
    throw err_code(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT')
  }

  // Browser ReadableStream
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = (0,dist_src/* default */.Z)(input)
  }

  // Iterable<?>
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = (0,src/* default */.Z)(input)
    const { value, done } = await peekable.peek()

    if (done) {
      // make sure empty iterators result in empty files
      yield * []
      return
    }

    peekable.push(value)

    // (Async)Iterable<Number>
    // (Async)Iterable<Bytes>
    if (Number.isInteger(value)) {
      throw err_code(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT')
    }

    // (Async)Iterable<fs.ReadStream>
    // @ts-expect-error private field
    if (value._readableState) {
      // @ts-expect-error Node fs.ReadStreams have a `.path` property so we need to pass it as the content
      yield * (0,it_map_dist_src/* default */.Z)(peekable, (/** @type {ImportCandidate} */ value) => toFileObject({ content: value }, normaliseContent))
      return
    }

    if ((0,utils/* isBytes */._t)(value)) {
      // @ts-expect-error peekable is still an iterable of ImportCandidates
      yield toFileObject({ content: peekable }, normaliseContent)
      return
    }

    // (Async)Iterable<(Async)Iterable<?>>
    // (Async)Iterable<ReadableStream<?>>
    // ReadableStream<(Async)Iterable<?>>
    // ReadableStream<ReadableStream<?>>
    if ((0,utils/* isFileObject */.Mk)(value) || value[Symbol.iterator] || value[Symbol.asyncIterator] || (0,utils/* isReadableStream */.Os)(value) || (0,utils/* isBlob */.Lj)(value)) {
      yield * (0,it_map_dist_src/* default */.Z)(peekable, (/** @type {ImportCandidate} */ value) => toFileObject(value, normaliseContent))
      return
    }
  }

  // { path, content: ? }
  // Note: Detected _after_ (Async)Iterable<?> because Node.js fs.ReadStreams have a
  // `path` property that passes this check.
  if ((0,utils/* isFileObject */.Mk)(input)) {
    throw err_code(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT')
  }

  throw err_code(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT')
}

/**
 * @param {ImportCandidate} input
 * @param {(content:ToContent) => Promise<AsyncIterable<Uint8Array>>} normaliseContent
 */
async function toFileObject (input, normaliseContent) {
  // @ts-expect-error - Those properties don't exist on most input types
  const { path, mode, mtime, content } = input

  /** @type {ImporterImportCandidate} */
  const file = {
    path: path || '',
    mode: (0,ipfs_unixfs_src/* parseMode */.tK)(mode),
    mtime: (0,ipfs_unixfs_src/* parseMtime */.Xu)(mtime)
  }

  if (content) {
    file.content = await normaliseContent(content)
  } else if (!path) { // Not already a file object with path or content prop
    // @ts-expect-error - input still can be different ToContent
    file.content = await normaliseContent(input)
  }

  return file
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/files/normalise-input-multiple.browser.js



/**
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidateStream} ImportCandidateStream
 * @typedef {import('ipfs-core-types/src/utils').BrowserImportCandidate} BrowserImportCandidate
 */

/**
 * Transforms any of the `ipfs.addAll` input types into
 *
 * ```
 * AsyncIterable<{ path, mode, mtime, content: Blob }>
 * ```
 *
 * See https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/FILES.md#ipfsadddata-options
 *
 * @param {ImportCandidateStream} input
 * @returns {AsyncGenerator<BrowserImportCandidate, void, undefined>}
 */
function normaliseInput (input) {
  // @ts-expect-error browser normaliseContent returns a Blob not an AsyncIterable<Uint8Array>
  return normaliseCandidateMultiple(input, normaliseContent, true)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/mode-to-string.js

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

;// CONCATENATED MODULE: ./node_modules/.pnpm/ipfs-core-utils@0.18.1_undici@5.23.0/node_modules/ipfs-core-utils/src/multipart-request.browser.js

// Import browser version otherwise electron-renderer will end up with node
// version and fail.



/**
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidateStream} ImportCandidateStream
 */

/**
 * @param {ImportCandidateStream} source
 * @param {AbortController} abortController
 * @param {Headers|Record<string, string>} [headers]
 */
async function multipartRequest (source, abortController, headers = {}) {
  const parts = []
  const formData = new FormData()
  let index = 0
  let total = 0

  for await (const { content, path, mode, mtime } of normaliseInput(source)) {
    let fileSuffix = ''
    const type = content ? 'file' : 'dir'

    if (index > 0) {
      fileSuffix = `-${index}`
    }

    let fieldName = type + fileSuffix
    const qs = []

    if (mode !== null && mode !== undefined) {
      qs.push(`mode=${modeToString(mode)}`)
    }

    if ((mtime) != null) {
      const { secs, nsecs } = (mtime)

      qs.push(`mtime=${secs}`)

      if (nsecs != null) {
        qs.push(`mtime-nsecs=${nsecs}`)
      }
    }

    if (qs.length) {
      fieldName = `${fieldName}?${qs.join('&')}`
    }

    if (content) {
      formData.set(fieldName, content, path != null ? encodeURIComponent(path) : undefined)
      const end = total + content.size
      parts.push({ name: path, start: total, end })
      total = end
    } else if (path != null) {
      formData.set(fieldName, new File([''], encodeURIComponent(path), { type: 'application/x-directory' }))
    } else {
      throw new Error('path or content or both must be set')
    }

    index++
  }

  return {
    total,
    parts,
    headers,
    body: formData
  }
}


/***/ }),

/***/ 22147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36676);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81525);



/**
 * @typedef {object} Pinnable
 * @property {string | InstanceType<typeof window.String> | CID} [path]
 * @property {CID} [cid]
 * @property {boolean} [recursive]
 * @property {any} [metadata]
 *
 * @typedef {CID|string|InstanceType<typeof window.String>|Pinnable} ToPin
 * @typedef {ToPin|Iterable<ToPin>|AsyncIterable<ToPin>} Source
 *
 * @typedef {object} Pin
 * @property {string|CID} path
 * @property {boolean} recursive
 * @property {any} [metadata]
 */

/**
 * @param {any} thing
 * @returns {thing is IterableIterator<any> & Iterator<any>}
 */
function isIterable (thing) {
  return Symbol.iterator in thing
}

/**
 * @param {any} thing
 * @returns {thing is AsyncIterableIterator<any> & AsyncIterator<any>}
 */
function isAsyncIterable (thing) {
  return Symbol.asyncIterator in thing
}

/**
 * @param {any} thing
 * @returns {thing is CID}
 */
function isCID (thing) {
  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__/* .CID */ .k0.asCID(thing) != null
}

/**
 * Transform one of:
 *
 * ```ts
 * CID
 * String
 * { cid: CID recursive, metadata }
 * { path: String recursive, metadata }
 * Iterable<CID>
 * Iterable<String>
 * Iterable<{ cid: CID recursive, metadata }>
 * Iterable<{ path: String recursive, metadata }>
 * AsyncIterable<CID>
 * AsyncIterable<String>
 * AsyncIterable<{ cid: CID recursive, metadata }>
 * AsyncIterable<{ path: String recursive, metadata }>
 * ```
 * Into:
 *
 * ```ts
 * AsyncIterable<{ path: CID|String, recursive:boolean, metadata }>
 * ```
 *
 * @param {Source} input
 * @returns {AsyncIterable<Pin>}
 */
// eslint-disable-next-line complexity
async function * normaliseInput (input) {
  // must give us something
  if (input === null || input === undefined) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT')
  }

  // CID
  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__/* .CID */ .k0.asCID(input)

  if (cid) {
    yield toPin({ cid })
    return
  }

  if (input instanceof String || typeof input === 'string') {
    yield toPin({ path: input })
    return
  }

  // { cid: CID recursive, metadata }
  // @ts-expect-error - it still could be iterable or async iterable
  if (input.cid != null || input.path != null) {
    // @ts-expect-error
    return yield toPin(input)
  }

  // Iterable<?>
  if (isIterable(input)) {
    const iterator = input[Symbol.iterator]()
    const first = iterator.next()

    if (first.done) {
      return iterator
    }

    // Iterable<CID>
    if (isCID(first.value)) {
      yield toPin({ cid: first.value })
      for (const cid of iterator) {
        yield toPin({ cid })
      }
      return
    }

    // Iterable<String>
    if (first.value instanceof String || typeof first.value === 'string') {
      yield toPin({ path: first.value })
      for (const path of iterator) {
        yield toPin({ path })
      }
      return
    }

    // Iterable<Pinnable>
    if (first.value.cid != null || first.value.path != null) {
      yield toPin(first.value)
      for (const obj of iterator) {
        yield toPin(obj)
      }
      return
    }

    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT')
  }

  // AsyncIterable<?>
  if (isAsyncIterable(input)) {
    const iterator = input[Symbol.asyncIterator]()
    const first = await iterator.next()
    if (first.done) return iterator

    // AsyncIterable<CID>
    if (isCID(first.value)) {
      yield toPin({ cid: first.value })
      for await (const cid of iterator) {
        yield toPin({ cid })
      }
      return
    }

    // AsyncIterable<String>
    if (first.value instanceof String || typeof first.value === 'string') {
      yield toPin({ path: first.value })
      for await (const path of iterator) {
        yield toPin({ path })
      }
      return
    }

    // AsyncIterable<{ cid: CID|String recursive, metadata }>
    if (first.value.cid != null || first.value.path != null) {
      yield toPin(first.value)
      for await (const obj of iterator) {
        yield toPin(obj)
      }
      return
    }

    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT')
  }

  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT')
}

/**
 * @param {Pinnable} input
 */
function toPin (input) {
  const path = input.cid || `${input.path}`

  if (!path) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: Please path either a CID or an IPFS path'), 'ERR_UNEXPECTED_INPUT')
  }

  /** @type {Pin} */
  const pin = {
    path,
    recursive: input.recursive !== false
  }

  if (input.metadata != null) {
    pin.metadata = input.metadata
  }

  return pin
}


/***/ }),

/***/ 10086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ toUrlString)
/* harmony export */ });
/* harmony import */ var _multiformats_multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88556);
/* harmony import */ var _multiformats_multiaddr_to_uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86437);



/**
 * @typedef {import('@multiformats/multiaddr').Multiaddr} Multiaddr
 */

/**
 * @param {string|Multiaddr|URL} url - A string, multiaddr or URL to convert to a url string
 * @returns {string}
 */
function toUrlString (url) {
  try {
    // @ts-expect-error
    url = (0,_multiformats_multiaddr_to_uri__WEBPACK_IMPORTED_MODULE_1__/* .multiaddrToUri */ .k)((0,_multiformats_multiaddr__WEBPACK_IMPORTED_MODULE_0__/* .multiaddr */ .HM)(url))
  } catch (/** @type {any} */ err) { }

  url = url.toString()

  return url
}


/***/ })

}]);
//# sourceMappingURL=chunk.npm.ipfs-core-utils.js.map