"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3742],{

/***/ 75293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dp: () => (/* binding */ from),
/* harmony export */   ET: () => (/* binding */ rfc4648),
/* harmony export */   kU: () => (/* binding */ baseX)
/* harmony export */ });
/* unused harmony exports or, Codec */
if (9966 != __webpack_require__.j) {
	/* harmony import */ var _vendor_base_x_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12544);
}
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);


// Linter can't see that API is used in types.
// eslint-disable-next-line


/**
 * Class represents both BaseEncoder and MultibaseEncoder meaning it
 * can be used to encode to multibase or base encode without multibase
 * prefix.
 *
 * @class
 * @template {string} Base
 * @template {string} Prefix
 * @implements {API.MultibaseEncoder<Prefix>}
 * @implements {API.BaseEncoder}
 */
class Encoder {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   */
  constructor (name, prefix, baseEncode) {
    this.name = name
    this.prefix = prefix
    this.baseEncode = baseEncode
  }

  /**
   * @param {Uint8Array} bytes
   * @returns {API.Multibase<Prefix>}
   */
  encode (bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`
    } else {
      throw Error('Unknown type, must be binary type')
    }
  }
}

/**
 * @template {string} Prefix
 */
/**
 * Class represents both BaseDecoder and MultibaseDecoder so it could be used
 * to decode multibases (with matching prefix) or just base decode strings
 * with corresponding base encoding.
 *
 * @class
 * @template {string} Base
 * @template {string} Prefix
 * @implements {API.MultibaseDecoder<Prefix>}
 * @implements {API.UnibaseDecoder<Prefix>}
 * @implements {API.BaseDecoder}
 */
class Decoder {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor (name, prefix, baseDecode) {
    this.name = name
    this.prefix = prefix
    /* c8 ignore next 3 */
    if (prefix.codePointAt(0) === undefined) {
      throw new Error('Invalid prefix character')
    }
    /** @private */
    this.prefixCodePoint = /** @type {number} */ (prefix.codePointAt(0))
    this.baseDecode = baseDecode
  }

  /**
   * @param {string} text
   */
  decode (text) {
    if (typeof text === 'string') {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)
      }
      return this.baseDecode(text.slice(this.prefix.length))
    } else {
      throw Error('Can only multibase decode strings')
    }
  }

  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or (decoder) {
    return or(this, decoder)
  }
}

/**
 * @template {string} Prefix
 * @typedef {Record<Prefix, API.UnibaseDecoder<Prefix>>} Decoders
 */

/**
 * @template {string} Prefix
 * @implements {API.MultibaseDecoder<Prefix>}
 * @implements {API.CombobaseDecoder<Prefix>}
 */
class ComposedDecoder {
  /**
   * @param {Decoders<Prefix>} decoders
   */
  constructor (decoders) {
    this.decoders = decoders
  }

  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or (decoder) {
    return or(this, decoder)
  }

  /**
   * @param {string} input
   * @returns {Uint8Array}
   */
  decode (input) {
    const prefix = /** @type {Prefix} */ (input[0])
    const decoder = this.decoders[prefix]
    if (decoder) {
      return decoder.decode(input)
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
  }
}

/**
 * @template {string} L
 * @template {string} R
 * @param {API.UnibaseDecoder<L>|API.CombobaseDecoder<L>} left
 * @param {API.UnibaseDecoder<R>|API.CombobaseDecoder<R>} right
 * @returns {ComposedDecoder<L|R>}
 */
const or = (left, right) => new ComposedDecoder(/** @type {Decoders<L|R>} */({
  ...(left.decoders || { [/** @type API.UnibaseDecoder<L> */(left).prefix]: left }),
  ...(right.decoders || { [/** @type API.UnibaseDecoder<R> */(right).prefix]: right })
}))

/**
 * @class
 * @template {string} Base
 * @template {string} Prefix
 * @implements {API.MultibaseCodec<Prefix>}
 * @implements {API.MultibaseEncoder<Prefix>}
 * @implements {API.MultibaseDecoder<Prefix>}
 * @implements {API.BaseCodec}
 * @implements {API.BaseEncoder}
 * @implements {API.BaseDecoder}
 */
class Codec {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor (name, prefix, baseEncode, baseDecode) {
    this.name = name
    this.prefix = prefix
    this.baseEncode = baseEncode
    this.baseDecode = baseDecode
    this.encoder = new Encoder(name, prefix, baseEncode)
    this.decoder = new Decoder(name, prefix, baseDecode)
  }

  /**
   * @param {Uint8Array} input
   */
  encode (input) {
    return this.encoder.encode(input)
  }

  /**
   * @param {string} input
   */
  decode (input) {
    return this.decoder.decode(input)
  }
}

/**
 * @template {string} Base
 * @template {string} Prefix
 * @param {object} options
 * @param {Base} options.name
 * @param {Prefix} options.prefix
 * @param {(bytes:Uint8Array) => string} options.encode
 * @param {(input:string) => Uint8Array} options.decode
 * @returns {Codec<Base, Prefix>}
 */
const from = ({ name, prefix, encode, decode }) =>
  new Codec(name, prefix, encode, decode)

/**
 * @template {string} Base
 * @template {string} Prefix
 * @param {object} options
 * @param {Base} options.name
 * @param {Prefix} options.prefix
 * @param {string} options.alphabet
 * @returns {Codec<Base, Prefix>}
 */
const baseX = ({ prefix, name, alphabet }) => {
  const { encode, decode } = (0,_vendor_base_x_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(alphabet, name)
  return from({
    prefix,
    name,
    encode,
    /**
     * @param {string} text
     */
    decode: text => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .coerce */ .oQ)(decode(text))
  })
}

/**
 * @param {string} string
 * @param {string} alphabet
 * @param {number} bitsPerChar
 * @param {string} name
 * @returns {Uint8Array}
 */
const decode = (string, alphabet, bitsPerChar, name) => {
  // Build the character lookup table:
  /** @type {Record<string, number>} */
  const codes = {}
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i
  }

  // Count the padding bytes:
  let end = string.length
  while (string[end - 1] === '=') {
    --end
  }

  // Allocate the output:
  const out = new Uint8Array((end * bitsPerChar / 8) | 0)

  // Parse the data:
  let bits = 0 // Number of bits currently in the buffer
  let buffer = 0 // Bits waiting to be written out, MSB first
  let written = 0 // Next byte to write
  for (let i = 0; i < end; ++i) {
    // Read one character from the string:
    const value = codes[string[i]]
    if (value === undefined) {
      throw new SyntaxError(`Non-${name} character`)
    }

    // Append the bits to the buffer:
    buffer = (buffer << bitsPerChar) | value
    bits += bitsPerChar

    // Write out some bits if the buffer has a byte's worth:
    if (bits >= 8) {
      bits -= 8
      out[written++] = 0xff & (buffer >> bits)
    }
  }

  // Verify that we have received just enough bits:
  if (bits >= bitsPerChar || 0xff & (buffer << (8 - bits))) {
    throw new SyntaxError('Unexpected end of data')
  }

  return out
}

/**
 * @param {Uint8Array} data
 * @param {string} alphabet
 * @param {number} bitsPerChar
 * @returns {string}
 */
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '='
  const mask = (1 << bitsPerChar) - 1
  let out = ''

  let bits = 0 // Number of bits currently in the buffer
  let buffer = 0 // Bits waiting to be written out, MSB first
  for (let i = 0; i < data.length; ++i) {
    // Slurp data into the buffer:
    buffer = (buffer << 8) | data[i]
    bits += 8

    // Write out as much as we can:
    while (bits > bitsPerChar) {
      bits -= bitsPerChar
      out += alphabet[mask & (buffer >> bits)]
    }
  }

  // Partial character:
  if (bits) {
    out += alphabet[mask & (buffer << (bitsPerChar - bits))]
  }

  // Add padding characters until we hit a byte boundary:
  if (pad) {
    while ((out.length * bitsPerChar) & 7) {
      out += '='
    }
  }

  return out
}

/**
 * RFC4648 Factory
 *
 * @template {string} Base
 * @template {string} Prefix
 * @param {object} options
 * @param {Base} options.name
 * @param {Prefix} options.prefix
 * @param {string} options.alphabet
 * @param {number} options.bitsPerChar
 */
const rfc4648 = ({ name, prefix, bitsPerChar, alphabet }) => {
  return from({
    prefix,
    name,
    encode (input) {
      return encode(input, alphabet, bitsPerChar)
    },
    decode (input) {
      return decode(input, alphabet, bitsPerChar, name)
    }
  })
}


/***/ }),

/***/ 75439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base32: () => (/* binding */ base32),
/* harmony export */   base32hex: () => (/* binding */ base32hex),
/* harmony export */   base32hexpad: () => (/* binding */ base32hexpad),
/* harmony export */   base32hexpadupper: () => (/* binding */ base32hexpadupper),
/* harmony export */   base32hexupper: () => (/* binding */ base32hexupper),
/* harmony export */   base32pad: () => (/* binding */ base32pad),
/* harmony export */   base32padupper: () => (/* binding */ base32padupper),
/* harmony export */   base32upper: () => (/* binding */ base32upper),
/* harmony export */   base32z: () => (/* binding */ base32z)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75293);


const base32 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
})

const base32upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
})

const base32pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
})

const base32padupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
})

const base32hex = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
})

const base32hexupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
})

const base32hexpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
})

const base32hexpadupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
})

const base32z = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
})


/***/ }),

/***/ 7820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base58btc: () => (/* binding */ base58btc),
/* harmony export */   base58flickr: () => (/* binding */ base58flickr)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75293);


const base58btc = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .baseX */ .kU)({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
})

const base58flickr = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .baseX */ .kU)({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
})


/***/ }),

/***/ 40980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   base64pad: () => (/* binding */ base64pad),
/* harmony export */   base64url: () => (/* binding */ base64url),
/* harmony export */   base64urlpad: () => (/* binding */ base64urlpad)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75293);
// @ts-check



const base64 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
})

const base64pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
})

const base64url = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
})

const base64urlpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
})


/***/ }),

/***/ 49749:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gh: () => (/* binding */ bases),
  QB: () => (/* binding */ codecs),
  kq: () => (/* binding */ hashes)
});

// UNUSED EXPORTS: CID, bytes, digest, hasher, varint

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/identity.js
var identity_namespaceObject = {};
__webpack_require__.r(identity_namespaceObject);
__webpack_require__.d(identity_namespaceObject, {
  identity: () => (identity)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base2.js
var base2_namespaceObject = {};
__webpack_require__.r(base2_namespaceObject);
__webpack_require__.d(base2_namespaceObject, {
  base2: () => (base2)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base8.js
var base8_namespaceObject = {};
__webpack_require__.r(base8_namespaceObject);
__webpack_require__.d(base8_namespaceObject, {
  base8: () => (base8)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base10.js
var base10_namespaceObject = {};
__webpack_require__.r(base10_namespaceObject);
__webpack_require__.d(base10_namespaceObject, {
  base10: () => (base10)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base16.js
var base16_namespaceObject = {};
__webpack_require__.r(base16_namespaceObject);
__webpack_require__.d(base16_namespaceObject, {
  base16: () => (base16),
  base16upper: () => (base16upper)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base36.js
var base36_namespaceObject = {};
__webpack_require__.r(base36_namespaceObject);
__webpack_require__.d(base36_namespaceObject, {
  base36: () => (base36),
  base36upper: () => (base36upper)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base256emoji.js
var base256emoji_namespaceObject = {};
__webpack_require__.r(base256emoji_namespaceObject);
__webpack_require__.d(base256emoji_namespaceObject, {
  base256emoji: () => (base256emoji)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/codecs/raw.js
var raw_namespaceObject = {};
__webpack_require__.r(raw_namespaceObject);
__webpack_require__.d(raw_namespaceObject, {
  code: () => (code),
  decode: () => (raw_decode),
  encode: () => (raw_encode),
  name: () => (raw_name)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/codecs/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  code: () => (json_code),
  decode: () => (json_decode),
  encode: () => (json_encode),
  name: () => (json_name)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base.js
var base = __webpack_require__(75293);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bytes.js
var bytes = __webpack_require__(62053);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/identity.js
// @ts-check




const identity = (0,base/* from */.Dp)({
  prefix: '\x00',
  name: 'identity',
  encode: (buf) => (0,bytes/* toString */.BB)(buf),
  decode: (str) => (0,bytes/* fromString */.mL)(str)
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base2.js
// @ts-check



const base2 = (0,base/* rfc4648 */.ET)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base8.js
// @ts-check



const base8 = (0,base/* rfc4648 */.ET)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base10.js


const base10 = (0,base/* baseX */.kU)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base16.js
// @ts-check



const base16 = (0,base/* rfc4648 */.ET)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
})

const base16upper = (0,base/* rfc4648 */.ET)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
})

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base32.js
var base32 = __webpack_require__(75439);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base36.js


const base36 = (0,base/* baseX */.kU)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
})

const base36upper = (0,base/* baseX */.kU)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
})

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base58.js
var base58 = __webpack_require__(7820);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base64.js
var base64 = __webpack_require__(40980);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base256emoji.js


const alphabet = Array.from('🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂')
const alphabetBytesToChars = /** @type {string[]} */ (alphabet.reduce((p, c, i) => { p[i] = c; return p }, /** @type {string[]} */([])))
const alphabetCharsToBytes = /** @type {number[]} */ (alphabet.reduce((p, c, i) => { p[/** @type {number} */ (c.codePointAt(0))] = i; return p }, /** @type {number[]} */([])))

/**
 * @param {Uint8Array} data
 * @returns {string}
 */
function encode (data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c]
    return p
  }, '')
}

/**
 * @param {string} str
 * @returns {Uint8Array}
 */
function decode (str) {
  const byts = []
  for (const char of str) {
    const byt = alphabetCharsToBytes[/** @type {number} */ (char.codePointAt(0))]
    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${char}`)
    }
    byts.push(byt)
  }
  return new Uint8Array(byts)
}

const base256emoji = (0,base/* from */.Dp)({
  prefix: '🚀',
  name: 'base256emoji',
  encode,
  decode
})

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/sha2-browser.js
var sha2_browser = __webpack_require__(83121);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/identity.js
var hashes_identity = __webpack_require__(36329);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/codecs/raw.js
// @ts-check



/**
 * @template T
 * @typedef {import('./interface.js').ByteView<T>} ByteView
 */

const raw_name = 'raw'
const code = 0x55

/**
 * @param {Uint8Array} node
 * @returns {ByteView<Uint8Array>}
 */
const raw_encode = (node) => (0,bytes/* coerce */.oQ)(node)

/**
 * @param {ByteView<Uint8Array>} data
 * @returns {Uint8Array}
 */
const raw_decode = (data) => (0,bytes/* coerce */.oQ)(data)

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/codecs/json.js
// @ts-check

/**
 * @template T
 * @typedef {import('./interface.js').ByteView<T>} ByteView
 */

const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder()

const json_name = 'json'
const json_code = 0x0200

/**
 * @template T
 * @param {T} node
 * @returns {ByteView<T>}
 */
const json_encode = (node) => textEncoder.encode(JSON.stringify(node))

/**
 * @template T
 * @param {ByteView<T>} data
 * @returns {T}
 */
const json_decode = (data) => JSON.parse(textDecoder.decode(data))

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/index.js
var src = __webpack_require__(32207);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/basics.js
// @ts-check



















const bases = { ...identity_namespaceObject, ...base2_namespaceObject, ...base8_namespaceObject, ...base10_namespaceObject, ...base16_namespaceObject, ...base32, ...base36_namespaceObject, ...base58, ...base64, ...base256emoji_namespaceObject }
const hashes = { ...sha2_browser, ...hashes_identity }
const codecs = { raw: raw_namespaceObject, json: json_namespaceObject }




/***/ }),

/***/ 62053:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BB: () => (/* binding */ toString),
/* harmony export */   fS: () => (/* binding */ equals),
/* harmony export */   mL: () => (/* binding */ fromString),
/* harmony export */   oQ: () => (/* binding */ coerce)
/* harmony export */ });
/* unused harmony exports isBinary, fromHex, toHex, empty */
const empty = new Uint8Array(0)

/**
 * @param {Uint8Array} d
 */
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '')

/**
 * @param {string} hex
 */
const fromHex = hex => {
  const hexes = hex.match(/../g)
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty
}

/**
 * @param {Uint8Array} aa
 * @param {Uint8Array} bb
 */
const equals = (aa, bb) => {
  if (aa === bb) return true
  if (aa.byteLength !== bb.byteLength) {
    return false
  }

  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false
    }
  }

  return true
}

/**
 * @param {ArrayBufferView|ArrayBuffer|Uint8Array} o
 * @returns {Uint8Array}
 */
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array') return o
  if (o instanceof ArrayBuffer) return new Uint8Array(o)
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
  }
  throw new Error('Unknown type, must be binary type')
}

/**
 * @param {any} o
 * @returns {o is ArrayBuffer|ArrayBufferView}
 */
const isBinary = o =>
  o instanceof ArrayBuffer || ArrayBuffer.isView(o)

/**
 * @param {string} str
 * @returns {Uint8Array}
 */
const fromString = str => (new TextEncoder()).encode(str)

/**
 * @param {Uint8Array} b
 * @returns {string}
 */
const toString = b => (new TextDecoder()).decode(b)




/***/ }),

/***/ 81525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k0: () => (/* binding */ CID)
/* harmony export */ });
/* unused harmony exports format, toJSON, fromJSON */
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1795);
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1851);
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7820);
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75439);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62053);





// Linter can see that API is used in types.
// eslint-disable-next-line


// This way TS will also expose all the types from module


/**
 * @template {API.Link<unknown, number, number, API.Version>} T
 * @template {string} Prefix
 * @param {T} link
 * @param {API.MultibaseEncoder<Prefix>} [base]
 * @returns {API.ToString<T, Prefix>}
 */
const format = (link, base) => {
  const { bytes, version } = link
  switch (version) {
    case 0:
      return toStringV0(
        bytes,
        baseCache(link),
        /** @type {API.MultibaseEncoder<"z">} */ (base) || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.encoder
      )
    default:
      return toStringV1(
        bytes,
        baseCache(link),
        /** @type {API.MultibaseEncoder<Prefix>} */ (base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.encoder)
      )
  }
}

/**
 * @template {API.UnknownLink} Link
 * @param {Link} link
 * @returns {API.LinkJSON<Link>}
 */
const toJSON = (link) => ({
  '/': format(link)
})

/**
 * @template {API.UnknownLink} Link
 * @param {API.LinkJSON<Link>} json
 */
const fromJSON = (json) =>
  CID.parse(json['/'])

/** @type {WeakMap<API.UnknownLink, Map<string, string>>} */
const cache = new WeakMap()

/**
 * @param {API.UnknownLink} cid
 * @returns {Map<string, string>}
 */
const baseCache = cid => {
  const baseCache = cache.get(cid)
  if (baseCache == null) {
    const baseCache = new Map()
    cache.set(cid, baseCache)
    return baseCache
  }
  return baseCache
}

/**
 * @template {unknown} [Data=unknown]
 * @template {number} [Format=number]
 * @template {number} [Alg=number]
 * @template {API.Version} [Version=API.Version]
 * @implements {API.Link<Data, Format, Alg, Version>}
 */

class CID {
  /**
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
   * @param {Uint8Array} bytes
   *
   */
  constructor (version, code, multihash, bytes) {
    /** @readonly */
    this.code = code
    /** @readonly */
    this.version = version
    /** @readonly */
    this.multihash = multihash
    /** @readonly */
    this.bytes = bytes

    // flag to serializers that this is a CID and
    // should be treated specially
    /** @readonly */
    this['/'] = bytes
  }

  /**
   * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
   * please either use `CID.asCID(cid)` or switch to new signalling mechanism
   *
   * @deprecated
   */
  get asCID () {
    return this
  }

  // ArrayBufferView
  get byteOffset () {
    return this.bytes.byteOffset
  }

  // ArrayBufferView
  get byteLength () {
    return this.bytes.byteLength
  }

  /**
   * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
   */
  toV0 () {
    switch (this.version) {
      case 0: {
        return /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */ (this)
      }
      case 1: {
        const { code, multihash } = this

        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0')
        }

        // sha2-256
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0')
        }

        return /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */ (
          CID.createV0(
            /** @type {API.MultihashDigest<API.SHA_256>} */ (multihash)
          )
        )
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 0. This is a bug please report`
        )
      }
    }
  }

  /**
   * @returns {CID<Data, Format, Alg, 1>}
   */
  toV1 () {
    switch (this.version) {
      case 0: {
        const { code, digest } = this.multihash
        const multihash = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue(code, digest)
        return /** @type {CID<Data, Format, Alg, 1>} */ (
          CID.createV1(this.code, multihash)
        )
      }
      case 1: {
        return /** @type {CID<Data, Format, Alg, 1>} */ (this)
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 1. This is a bug please report`
        )
      }
    }
  }

  /**
   * @param {unknown} other
   * @returns {other is CID<Data, Format, Alg, Version>}
   */
  equals (other) {
    return CID.equals(this, other)
  }

  /**
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {API.Link<Data, Format, Alg, Version>} self
   * @param {unknown} other
   * @returns {other is CID}
   */
  static equals (self, other) {
    const unknown =
      /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */ (
        other
      )
    return (
      unknown &&
      self.code === unknown.code &&
      self.version === unknown.version &&
      _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS(self.multihash, unknown.multihash)
    )
  }

  /**
   * @param {API.MultibaseEncoder<string>} [base]
   * @returns {string}
   */
  toString (base) {
    return format(this, base)
  }

  toJSON () {
    return { '/': format(this) }
  }

  link () {
    return this
  }

  get [Symbol.toStringTag] () {
    return 'CID'
  }

  // Legacy

  [Symbol.for('nodejs.util.inspect.custom')] () {
    return `CID(${this.toString()})`
  }

  /**
   * Takes any input `value` and returns a `CID` instance if it was
   * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
   * it will return value back. If `value` is not instance of this CID
   * class, but is compatible CID it will return new instance of this
   * `CID` class. Otherwise returns null.
   *
   * This allows two different incompatible versions of CID library to
   * co-exist and interop as long as binary interface is compatible.
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @template {unknown} U
   * @param {API.Link<Data, Format, Alg, Version>|U} input
   * @returns {CID<Data, Format, Alg, Version>|null}
   */
  static asCID (input) {
    if (input == null) {
      return null
    }

    const value = /** @type {any} */ (input)
    if (value instanceof CID) {
      // If value is instance of CID then we're all set.
      return value
    } else if ((value['/'] != null && value['/'] === value.bytes) || value.asCID === value) {
      // If value isn't instance of this CID class but `this.asCID === this` or
      // `value['/'] === value.bytes` is true it is CID instance coming from a
      // different implementation (diff version or duplicate). In that case we
      // rebase it to this `CID` implementation so caller is guaranteed to get
      // instance with expected API.
      const { version, code, multihash, bytes } = value
      return new CID(
        version,
        code,
        /** @type {API.MultihashDigest<Alg>} */ (multihash),
        bytes || encodeCID(version, code, multihash.bytes)
      )
    } else if (value[cidSymbol] === true) {
      // If value is a CID from older implementation that used to be tagged via
      // symbol we still rebase it to the this `CID` implementation by
      // delegating that to a constructor.
      const { version, multihash, code } = value
      const digest =
        /** @type {API.MultihashDigest<Alg>} */
        (_hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx(multihash))
      return CID.create(version, code, digest)
    } else {
      // Otherwise value is not a CID (or an incompatible version of it) in
      // which case we return `null`.
      return null
    }
  }

  /**
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
   * @returns {CID<Data, Format, Alg, Version>}
   */
  static create (version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported')
    }

    if (!(digest.bytes instanceof Uint8Array)) {
      throw new Error('Invalid digest')
    }

    switch (version) {
      case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(
            `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`
          )
        } else {
          return new CID(version, code, digest, digest.bytes)
        }
      }
      case 1: {
        const bytes = encodeCID(version, code, digest.bytes)
        return new CID(version, code, digest, bytes)
      }
      default: {
        throw new Error('Invalid version')
      }
    }
  }

  /**
   * Simplified version of `create` for CIDv0.
   *
   * @template {unknown} [T=unknown]
   * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
   * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
   */
  static createV0 (digest) {
    return CID.create(0, DAG_PB_CODE, digest)
  }

  /**
   * Simplified version of `create` for CIDv1.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @param {Code} code - Content encoding format code.
   * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
   * @returns {CID<Data, Code, Alg, 1>}
   */
  static createV1 (code, digest) {
    return CID.create(1, code, digest)
  }

  /**
   * Decoded a CID from its binary representation. The byte array must contain
   * only the CID with no additional bytes.
   *
   * An error will be thrown if the bytes provided do not contain a valid
   * binary representation of a CID.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static decode (bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes)
    if (remainder.length) {
      throw new Error('Incorrect length')
    }
    return cid
  }

  /**
   * Decoded a CID from its binary representation at the beginning of a byte
   * array.
   *
   * Returns an array with the first element containing the CID and the second
   * element containing the remainder of the original byte array. The remainder
   * will be a zero-length byte array if the provided bytes only contained a
   * binary CID representation.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
   * @returns {[CID<T, C, A, V>, Uint8Array]}
   */
  static decodeFirst (bytes) {
    const specs = CID.inspectBytes(bytes)
    const prefixSize = specs.size - specs.multihashSize
    const multihashBytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_4__/* .coerce */ .oQ)(
      bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
    )
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length')
    }
    const digestBytes = multihashBytes.subarray(
      specs.multihashSize - specs.digestSize
    )
    const digest = new _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .Digest */ .zZ(
      specs.multihashCode,
      specs.digestSize,
      digestBytes,
      multihashBytes
    )
    const cid =
      specs.version === 0
        ? CID.createV0(/** @type {API.MultihashDigest<API.SHA_256>} */ (digest))
        : CID.createV1(specs.codec, digest)
    return [/** @type {CID<T, C, A, V>} */(cid), bytes.subarray(specs.size)]
  }

  /**
   * Inspect the initial bytes of a CID to determine its properties.
   *
   * Involves decoding up to 4 varints. Typically this will require only 4 to 6
   * bytes but for larger multicodec code values and larger multihash digest
   * lengths these varints can be quite large. It is recommended that at least
   * 10 bytes be made available in the `initialBytes` argument for a complete
   * inspection.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
   * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
   */
  static inspectBytes (initialBytes) {
    let offset = 0
    const next = () => {
      const [i, length] = _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .decode */ .Jx(initialBytes.subarray(offset))
      offset += length
      return i
    }

    let version = /** @type {V} */ (next())
    let codec = /** @type {C} */ (DAG_PB_CODE)
    if (/** @type {number} */(version) === 18) {
      // CIDv0
      version = /** @type {V} */ (0)
      offset = 0
    } else {
      codec = /** @type {C} */ (next())
    }

    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${version}`)
    }

    const prefixSize = offset
    const multihashCode = /** @type {A} */ (next()) // multihash code
    const digestSize = next() // multihash length
    const size = offset + digestSize
    const multihashSize = size - prefixSize

    return { version, codec, multihashCode, digestSize, multihashSize, size }
  }

  /**
   * Takes cid in a string representation and creates an instance. If `base`
   * decoder is not provided will use a default from the configuration. It will
   * throw an error if encoding of the CID is not compatible with supplied (or
   * a default decoder).
   *
   * @template {string} Prefix
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
   * @param {API.MultibaseDecoder<Prefix>} [base]
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static parse (source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base)

    const cid = CID.decode(bytes)

    if (cid.version === 0 && source[0] !== 'Q') {
      throw Error('Version 0 CID string must not include multibase prefix')
    }

    // Cache string representation to avoid computing it on `this.toString()`
    baseCache(cid).set(prefix, source)

    return cid
  }
}

/**
 * @template {string} Prefix
 * @template {unknown} Data
 * @template {number} Code
 * @template {number} Alg
 * @template {API.Version} Ver
 * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
 * @param {API.MultibaseDecoder<Prefix>} [base]
 * @returns {[Prefix, API.ByteView<API.Link<Data, Code, Alg, Ver>>]}
 */
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
    // CIDv0 is parsed differently
    case 'Q': {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc
      return [
        /** @type {Prefix} */ (_bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix),
        decoder.decode(`${_bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix}${source}`)
      ]
    }
    case _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix: {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc
      return [/** @type {Prefix} */(_bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix), decoder.decode(source)]
    }
    case _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix: {
      const decoder = base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32
      return [/** @type {Prefix} */(_bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix), decoder.decode(source)]
    }
    default: {
      if (base == null) {
        throw Error(
          'To parse non base32 or base58btc encoded CID multibase decoder must be provided'
        )
      }
      return [/** @type {Prefix} */(source[0]), base.decode(source)]
    }
  }
}

/**
 *
 * @param {Uint8Array} bytes
 * @param {Map<string, string>} cache
 * @param {API.MultibaseEncoder<'z'>} base
 */
const toStringV0 = (bytes, cache, base) => {
  const { prefix } = base
  if (prefix !== _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base.name} encoding`)
  }

  const cid = cache.get(prefix)
  if (cid == null) {
    const cid = base.encode(bytes).slice(1)
    cache.set(prefix, cid)
    return cid
  } else {
    return cid
  }
}

/**
 * @template {string} Prefix
 * @param {Uint8Array} bytes
 * @param {Map<string, string>} cache
 * @param {API.MultibaseEncoder<Prefix>} base
 */
const toStringV1 = (bytes, cache, base) => {
  const { prefix } = base
  const cid = cache.get(prefix)
  if (cid == null) {
    const cid = base.encode(bytes)
    cache.set(prefix, cid)
    return cid
  } else {
    return cid
  }
}

const DAG_PB_CODE = 0x70
const SHA_256_CODE = 0x12

/**
 * @param {API.Version} version
 * @param {number} code
 * @param {Uint8Array} multihash
 * @returns {Uint8Array}
 */
const encodeCID = (version, code, multihash) => {
  const codeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodingLength */ .P$(version)
  const hashOffset = codeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodingLength */ .P$(code)
  const bytes = new Uint8Array(hashOffset + multihash.byteLength)
  _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeTo */ .mL(version, bytes, 0)
  _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeTo */ .mL(code, bytes, codeOffset)
  bytes.set(multihash, hashOffset)
  return bytes
}

const cidSymbol = Symbol.for('@ipld/js-cid/CID')


/***/ }),

/***/ 1851:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ decode),
/* harmony export */   Ue: () => (/* binding */ create),
/* harmony export */   fS: () => (/* binding */ equals),
/* harmony export */   zZ: () => (/* binding */ Digest)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1795);



/**
 * Creates a multihash digest.
 *
 * @template {number} Code
 * @param {Code} code
 * @param {Uint8Array} digest
 */
const create = (code, digest) => {
  const size = digest.byteLength
  const sizeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodingLength */ .P$(code)
  const digestOffset = sizeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodingLength */ .P$(size)

  const bytes = new Uint8Array(digestOffset + size)
  _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeTo */ .mL(code, bytes, 0)
  _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeTo */ .mL(size, bytes, sizeOffset)
  bytes.set(digest, digestOffset)

  return new Digest(code, size, digest, bytes)
}

/**
 * Turns bytes representation of multihash digest into an instance.
 *
 * @param {Uint8Array} multihash
 * @returns {MultihashDigest}
 */
const decode = (multihash) => {
  const bytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .coerce */ .oQ)(multihash)
  const [code, sizeOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx(bytes)
  const [size, digestOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx(bytes.subarray(sizeOffset))
  const digest = bytes.subarray(sizeOffset + digestOffset)

  if (digest.byteLength !== size) {
    throw new Error('Incorrect length')
  }

  return new Digest(code, size, digest, bytes)
}

/**
 * @param {MultihashDigest} a
 * @param {unknown} b
 * @returns {b is MultihashDigest}
 */
const equals = (a, b) => {
  if (a === b) {
    return true
  } else {
    const data = /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */(b)

    return (
      a.code === data.code &&
      a.size === data.size &&
      data.bytes instanceof Uint8Array &&
      (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS)(a.bytes, data.bytes)
    )
  }
}

/**
 * @typedef {import('./interface.js').MultihashDigest} MultihashDigest
 */

/**
 * Represents a multihash digest which carries information about the
 * hashing algorithm and an actual hash digest.
 *
 * @template {number} Code
 * @template {number} Size
 * @class
 * @implements {MultihashDigest}
 */
class Digest {
  /**
   * Creates a multihash digest.
   *
   * @param {Code} code
   * @param {Size} size
   * @param {Uint8Array} digest
   * @param {Uint8Array} bytes
   */
  constructor (code, size, digest, bytes) {
    this.code = code
    this.size = size
    this.digest = digest
    this.bytes = bytes
  }
}


/***/ }),

/***/ 92773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ from)
/* harmony export */ });
/* unused harmony export Hasher */
/* harmony import */ var _digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1851);


/**
 * @template {string} Name
 * @template {number} Code
 * @param {object} options
 * @param {Name} options.name
 * @param {Code} options.code
 * @param {(input: Uint8Array) => Await<Uint8Array>} options.encode
 */
const from = ({ name, code, encode }) => new Hasher(name, code, encode)

/**
 * Hasher represents a hashing algorithm implementation that produces as
 * `MultihashDigest`.
 *
 * @template {string} Name
 * @template {number} Code
 * @class
 * @implements {MultihashHasher<Code>}
 */
class Hasher {
  /**
   *
   * @param {Name} name
   * @param {Code} code
   * @param {(input: Uint8Array) => Await<Uint8Array>} encode
   */
  constructor (name, code, encode) {
    this.name = name
    this.code = code
    this.encode = encode
  }

  /**
   * @param {Uint8Array} input
   * @returns {Await<Digest.Digest<Code, number>>}
   */
  digest (input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input)
      return result instanceof Uint8Array
        ? _digest_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue(this.code, result)
        /* c8 ignore next 1 */
        : result.then(digest => _digest_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue(this.code, digest))
    } else {
      throw Error('Unknown type, must be binary type')
      /* c8 ignore next 1 */
    }
  }
}

/**
 * @template {number} Alg
 * @typedef {import('./interface.js').MultihashHasher} MultihashHasher
 */

/**
 * @template T
 * @typedef {Promise<T>|T} Await
 */


/***/ }),

/***/ 36329:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);
/* harmony import */ var _digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1851);



const code = 0x0
const name = 'identity'

/** @type {(input:Uint8Array) => Uint8Array} */
const encode = _bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .coerce */ .oQ

/**
 * @param {Uint8Array} input
 * @returns {Digest.Digest<typeof code, number>}
 */
const digest = (input) => _digest_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue(code, encode(input))

const identity = { code, name, encode, digest }


/***/ }),

/***/ 83121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sha256: () => (/* binding */ sha256),
/* harmony export */   sha512: () => (/* binding */ sha512)
/* harmony export */ });
/* harmony import */ var _hasher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92773);
/* global crypto */



/**
 * @param {AlgorithmIdentifier} name
 */
const sha = name =>
  /**
   * @param {Uint8Array} data
   */
  async data => new Uint8Array(await crypto.subtle.digest(name, data))

const sha256 = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_0__/* .from */ .D)({
  name: 'sha2-256',
  code: 0x12,
  encode: sha('SHA-256')
})

const sha512 = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_0__/* .from */ .D)({
  name: 'sha2-512',
  code: 0x13,
  encode: sha('SHA-512')
})


/***/ }),

/***/ 32207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k0: () => (/* reexport safe */ _cid_js__WEBPACK_IMPORTED_MODULE_0__.k0)
/* harmony export */ });
/* harmony import */ var _cid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81525);
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1795);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62053);
/* harmony import */ var _hashes_hasher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92773);
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1851);





// This way TS will also expose all the types from module





/***/ }),

/***/ 1795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Jx: () => (/* binding */ varint_decode),
  mL: () => (/* binding */ encodeTo),
  P$: () => (/* binding */ encodingLength)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/vendor/varint.js
var encode_1 = encode;

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31);

function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB;
    num /= 128;
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  
  encode.bytes = offset - oldOffset + 1;
  
  return out
}

var decode = read;

var MSB$1 = 0x80
  , REST$1 = 0x7F;

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length;

  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++];
    res += shift < 28
      ? (b & REST$1) << shift
      : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1)

  read.bytes = counter - offset;

  return res
}

var N1 = Math.pow(2,  7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);

var varint_length = function (value) {
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
};

var varint = {
    encode: encode_1
  , decode: decode
  , encodingLength: varint_length
};

var _brrp_varint = varint;

/* harmony default export */ const vendor_varint = (_brrp_varint);

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/varint.js


/**
 * @param {Uint8Array} data
 * @param {number} [offset=0]
 * @returns {[number, number]}
 */
const varint_decode = (data, offset = 0) => {
  const code = vendor_varint.decode(data, offset)
  return [code, vendor_varint.decode.bytes]
}

/**
 * @param {number} int
 * @param {Uint8Array} target
 * @param {number} [offset=0]
 */
const encodeTo = (int, target, offset = 0) => {
  vendor_varint.encode(int, target, offset)
  return target
}

/**
 * @param {number} int
 * @returns {number}
 */
const encodingLength = (int) => {
  return vendor_varint.encodingLength(int)
}


/***/ }),

/***/ 12544:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET, name) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256); // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE); // log(256) / log(BASE), rounded up
  function encode (source) {
    if (source instanceof Uint8Array) ; else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0;
    var b58 = new Uint8Array(size);
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0;
        b58[it1] = (carry % BASE) >>> 0;
        carry = (carry / BASE) >>> 0;
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i;
      pbegin++;
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]); }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    var psz = 0;
        // Skip leading spaces.
    if (source[psz] === ' ') { return }
        // Skip and count leading '1's.
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0; // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size);
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
      if (carry === 255) { return }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0;
        b256[it3] = (carry % 256) >>> 0;
        carry = (carry / 256) >>> 0;
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i;
      psz++;
    }
        // Skip trailing spaces.
    if (source[psz] === ' ') { return }
        // Skip leading zeroes in b256.
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string);
    if (buffer) { return buffer }
    throw new Error(`Non-${name} character`)
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
var src = (/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (base) : null);

var _brrp__multiformats_scope_baseX = (/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (src) : null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (_brrp__multiformats_scope_baseX) : null));


/***/ }),

/***/ 29688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kU: () => (/* binding */ baseX),
  Dp: () => (/* binding */ from),
  ET: () => (/* binding */ rfc4648)
});

// UNUSED EXPORTS: Codec, or

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
/* harmony default export */ const base_x = (_brrp__multiformats_scope_baseX);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bytes.js
var bytes = __webpack_require__(53366);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base.js


class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      switch (text[0]) {
      case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
      default: {
          throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
        }
      }
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = base_x(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => (0,bytes/* coerce */.oQ)(decode(text))
  });
};
const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};

/***/ }),

/***/ 13528:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base32: () => (/* binding */ base32),
/* harmony export */   base32hex: () => (/* binding */ base32hex),
/* harmony export */   base32hexpad: () => (/* binding */ base32hexpad),
/* harmony export */   base32hexpadupper: () => (/* binding */ base32hexpadupper),
/* harmony export */   base32hexupper: () => (/* binding */ base32hexupper),
/* harmony export */   base32pad: () => (/* binding */ base32pad),
/* harmony export */   base32padupper: () => (/* binding */ base32padupper),
/* harmony export */   base32upper: () => (/* binding */ base32upper),
/* harmony export */   base32z: () => (/* binding */ base32z)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29688);

const base32 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

/***/ }),

/***/ 62593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base58btc: () => (/* binding */ base58btc),
/* harmony export */   base58flickr: () => (/* binding */ base58flickr)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29688);

const base58btc = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .baseX */ .kU)({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .baseX */ .kU)({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

/***/ }),

/***/ 35551:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gh: () => (/* binding */ bases)
});

// UNUSED EXPORTS: CID, bytes, codecs, digest, hasher, hashes, varint

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/identity.js
var identity_namespaceObject = {};
__webpack_require__.r(identity_namespaceObject);
__webpack_require__.d(identity_namespaceObject, {
  identity: () => (identity)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base2.js
var base2_namespaceObject = {};
__webpack_require__.r(base2_namespaceObject);
__webpack_require__.d(base2_namespaceObject, {
  base2: () => (base2)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base8.js
var base8_namespaceObject = {};
__webpack_require__.r(base8_namespaceObject);
__webpack_require__.d(base8_namespaceObject, {
  base8: () => (base8)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base10.js
var base10_namespaceObject = {};
__webpack_require__.r(base10_namespaceObject);
__webpack_require__.d(base10_namespaceObject, {
  base10: () => (base10)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base16.js
var base16_namespaceObject = {};
__webpack_require__.r(base16_namespaceObject);
__webpack_require__.d(base16_namespaceObject, {
  base16: () => (base16),
  base16upper: () => (base16upper)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base36.js
var base36_namespaceObject = {};
__webpack_require__.r(base36_namespaceObject);
__webpack_require__.d(base36_namespaceObject, {
  base36: () => (base36),
  base36upper: () => (base36upper)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  base64: () => (base64),
  base64pad: () => (base64pad),
  base64url: () => (base64url),
  base64urlpad: () => (base64urlpad)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_namespaceObject = {};
__webpack_require__.r(sha2_browser_namespaceObject);
__webpack_require__.d(sha2_browser_namespaceObject, {
  sha256: () => (sha256),
  sha512: () => (sha512)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/identity.js
var hashes_identity_namespaceObject = {};
__webpack_require__.r(hashes_identity_namespaceObject);
__webpack_require__.d(hashes_identity_namespaceObject, {
  identity: () => (identity_identity)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/codecs/raw.js
var raw_namespaceObject = {};
__webpack_require__.r(raw_namespaceObject);
__webpack_require__.d(raw_namespaceObject, {
  code: () => (raw_code),
  decode: () => (decode),
  encode: () => (raw_encode),
  name: () => (raw_name)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/codecs/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  code: () => (json_code),
  decode: () => (json_decode),
  encode: () => (json_encode),
  name: () => (json_name)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base.js + 1 modules
var base = __webpack_require__(29688);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bytes.js
var bytes = __webpack_require__(53366);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/identity.js


const identity = (0,base/* from */.Dp)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,bytes/* toString */.BB)(buf),
  decode: str => (0,bytes/* fromString */.mL)(str)
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base2.js

const base2 = (0,base/* rfc4648 */.ET)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base8.js

const base8 = (0,base/* rfc4648 */.ET)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base10.js

const base10 = (0,base/* baseX */.kU)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base16.js

const base16 = (0,base/* rfc4648 */.ET)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = (0,base/* rfc4648 */.ET)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base32.js
var base32 = __webpack_require__(13528);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base36.js

const base36 = (0,base/* baseX */.kU)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = (0,base/* baseX */.kU)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base58.js
var base58 = __webpack_require__(62593);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base64.js

const base64 = (0,base/* rfc4648 */.ET)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = (0,base/* rfc4648 */.ET)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = (0,base/* rfc4648 */.ET)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = (0,base/* rfc4648 */.ET)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/digest.js
var hashes_digest = __webpack_require__(38875);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/hasher.js

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? hashes_digest/* create */.Ue(this.code, result) : result.then(digest => hashes_digest/* create */.Ue(this.code, digest));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/sha2-browser.js

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = from({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = from({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/identity.js


const code = 0;
const identity_name = 'identity';
const encode = bytes/* coerce */.oQ;
const digest = input => hashes_digest/* create */.Ue(code, encode(input));
const identity_identity = {
  code,
  name: identity_name,
  encode,
  digest
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/codecs/raw.js

const raw_name = 'raw';
const raw_code = 85;
const raw_encode = node => (0,bytes/* coerce */.oQ)(node);
const decode = data => (0,bytes/* coerce */.oQ)(data);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/codecs/json.js
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const json_name = 'json';
const json_code = 512;
const json_encode = node => textEncoder.encode(JSON.stringify(node));
const json_decode = data => JSON.parse(textDecoder.decode(data));
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/cid.js
var cid = __webpack_require__(24875);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/varint.js + 1 modules
var varint = __webpack_require__(57502);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/index.js






;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/basics.js














const bases = {
  ...identity_namespaceObject,
  ...base2_namespaceObject,
  ...base8_namespaceObject,
  ...base10_namespaceObject,
  ...base16_namespaceObject,
  ...base32,
  ...base36_namespaceObject,
  ...base58,
  ...base64_namespaceObject
};
const hashes = {
  ...sha2_browser_namespaceObject,
  ...hashes_identity_namespaceObject
};
const codecs = {
  raw: raw_namespaceObject,
  json: json_namespaceObject
};


/***/ }),

/***/ 53366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BB: () => (/* binding */ toString),
/* harmony export */   fS: () => (/* binding */ equals),
/* harmony export */   mL: () => (/* binding */ fromString),
/* harmony export */   oQ: () => (/* binding */ coerce)
/* harmony export */ });
/* unused harmony exports isBinary, fromHex, toHex, empty */
const empty = new Uint8Array(0);
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};
const equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = str => new TextEncoder().encode(str);
const toString = b => new TextDecoder().decode(b);


/***/ }),

/***/ 24875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ CID)
/* harmony export */ });
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57502);
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38875);
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62593);
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13528);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53366);





class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
    case 0: {
        return this;
      }
    default: {
        const {code, multihash} = this;
        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0');
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
    case 0: {
        const {code, digest} = this.multihash;
        const multihash = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue(code, digest);
        return CID.createV1(this.code, multihash);
      }
    case 1: {
        return this;
      }
    default: {
        throw Error(`Can not convert CID version ${ this.version } to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS(this.multihash, other.multihash);
  }
  toString(base) {
    const {bytes, version, _baseCache} = this;
    switch (version) {
    case 0:
      return toStringV0(bytes, _baseCache, base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.encoder);
    default:
      return toStringV1(bytes, _baseCache, base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return 'CID';
  }
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {version, code, multihash, bytes} = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {version, multihash, code} = value;
      const digest = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx(multihash);
      return CID.create(version, code, digest);
    } else {
      return null;
    }
  }
  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }
    switch (version) {
    case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${ DAG_PB_CODE }) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
    case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
    default: {
        throw new Error('Invalid version');
      }
    }
  }
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error('Incorrect length');
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_4__/* .coerce */ .oQ)(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__/* .Digest */ .zZ(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length] = _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .decode */ .Jx(initialBytes.subarray(offset));
      offset += length;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${ version }`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
  case 'Q': {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
      return [
        _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix,
        decoder.decode(`${ _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix }${ source }`)
      ];
    }
  case _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix: {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
      return [
        _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix,
        decoder.decode(source)
      ];
    }
  case _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix: {
      const decoder = base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32;
      return [
        _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix,
        decoder.decode(source)
      ];
    }
  default: {
      if (base == null) {
        throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
      }
      return [
        source[0],
        base.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base) => {
  const {prefix} = base;
  if (prefix !== _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${ base.name } encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes, cache, base) => {
  const {prefix} = base;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash) => {
  const codeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodingLength */ .P$(version);
  const hashOffset = codeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodingLength */ .P$(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeTo */ .mL(version, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeTo */ .mL(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

/***/ }),

/***/ 38875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ decode),
/* harmony export */   Ue: () => (/* binding */ create),
/* harmony export */   fS: () => (/* binding */ equals),
/* harmony export */   zZ: () => (/* binding */ Digest)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53366);
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57502);


const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodingLength */ .P$(code);
  const digestOffset = sizeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodingLength */ .P$(size);
  const bytes = new Uint8Array(digestOffset + size);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeTo */ .mL(code, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeTo */ .mL(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const decode = multihash => {
  const bytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .coerce */ .oQ)(multihash);
  const [code, sizeOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx(bytes);
  const [size, digestOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }
  return new Digest(code, size, digest, bytes);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS)(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}

/***/ }),

/***/ 57502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Jx: () => (/* binding */ varint_decode),
  mL: () => (/* binding */ encodeTo),
  P$: () => (/* binding */ encodingLength)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var varint_length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode,
  encodingLength: varint_length
};
var _brrp_varint = varint;
/* harmony default export */ const vendor_varint = (_brrp_varint);
;// CONCATENATED MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/varint.js

const varint_decode = data => {
  const code = vendor_varint.decode(data);
  return [
    code,
    vendor_varint.decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  vendor_varint.encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return vendor_varint.encodingLength(int);
};

/***/ })

}]);
//# sourceMappingURL=npm.multiformats.js.map