"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4038],{

/***/ 40911:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dy: () => (/* reexport safe */ _lib_token_js__WEBPACK_IMPORTED_MODULE_2__.D),
/* harmony export */   Jx: () => (/* reexport safe */ _lib_decode_js__WEBPACK_IMPORTED_MODULE_1__.Jx),
/* harmony export */   WU: () => (/* reexport safe */ _lib_token_js__WEBPACK_IMPORTED_MODULE_2__.W),
/* harmony export */   cv: () => (/* reexport safe */ _lib_encode_js__WEBPACK_IMPORTED_MODULE_0__.cv)
/* harmony export */ });
/* harmony import */ var _lib_encode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17148);
/* harmony import */ var _lib_decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7815);
/* harmony import */ var _lib_token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83657);





/***/ }),

/***/ 87474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fh: () => (/* binding */ encodeUint),
/* harmony export */   Jl: () => (/* binding */ readUint32),
/* harmony export */   Km: () => (/* binding */ decodeUint8),
/* harmony export */   Tp: () => (/* binding */ encodeUintValue),
/* harmony export */   X0: () => (/* binding */ readUint16),
/* harmony export */   YX: () => (/* binding */ readUint64),
/* harmony export */   Zh: () => (/* binding */ decodeUint16),
/* harmony export */   cs: () => (/* binding */ decodeUint32),
/* harmony export */   kj: () => (/* binding */ readUint8),
/* harmony export */   or: () => (/* binding */ uintBoundaries),
/* harmony export */   uN: () => (/* binding */ decodeUint64)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15279);


const uintBoundaries = [
  24,
  256,
  65536,
  4294967296,
  BigInt('18446744073709551616')
];
function readUint8(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEnoughData */ .DO)(data, offset, 1);
  const value = data[offset];
  if (options.strict === true && value < uintBoundaries[0]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint16(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEnoughData */ .DO)(data, offset, 2);
  const value = data[offset] << 8 | data[offset + 1];
  if (options.strict === true && value < uintBoundaries[1]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint32(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEnoughData */ .DO)(data, offset, 4);
  const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  if (options.strict === true && value < uintBoundaries[2]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint64(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEnoughData */ .DO)(data, offset, 8);
  const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
  const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
  if (options.strict === true && value < uintBoundaries[3]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } integer encoded in more bytes than necessary (strict decode)`);
  }
  if (value <= Number.MAX_SAFE_INTEGER) {
    return Number(value);
  }
  if (options.allowBigInt === true) {
    return value;
  }
  throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf, token) {
  return encodeUintValue(buf, 0, token.value);
}
function encodeUintValue(buf, major, uint) {
  if (uint < uintBoundaries[0]) {
    const nuint = Number(uint);
    buf.push([major | nuint]);
  } else if (uint < uintBoundaries[1]) {
    const nuint = Number(uint);
    buf.push([
      major | 24,
      nuint
    ]);
  } else if (uint < uintBoundaries[2]) {
    const nuint = Number(uint);
    buf.push([
      major | 25,
      nuint >>> 8,
      nuint & 255
    ]);
  } else if (uint < uintBoundaries[3]) {
    const nuint = Number(uint);
    buf.push([
      major | 26,
      nuint >>> 24 & 255,
      nuint >>> 16 & 255,
      nuint >>> 8 & 255,
      nuint & 255
    ]);
  } else {
    const buint = BigInt(uint);
    if (buint < uintBoundaries[4]) {
      const set = [
        major | 27,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let lo = Number(buint & BigInt(4294967295));
      let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
      set[8] = lo & 255;
      lo = lo >> 8;
      set[7] = lo & 255;
      lo = lo >> 8;
      set[6] = lo & 255;
      lo = lo >> 8;
      set[5] = lo & 255;
      set[4] = hi & 255;
      hi = hi >> 8;
      set[3] = hi & 255;
      hi = hi >> 8;
      set[2] = hi & 255;
      hi = hi >> 8;
      set[1] = hi & 255;
      buf.push(set);
    } else {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } encountered BigInt larger than allowable range`);
    }
  }
}
encodeUint.encodedSize = function encodedSize(token) {
  return encodeUintValue.encodedSize(token.value);
};
encodeUintValue.encodedSize = function encodedSize(uint) {
  if (uint < uintBoundaries[0]) {
    return 1;
  }
  if (uint < uintBoundaries[1]) {
    return 2;
  }
  if (uint < uintBoundaries[2]) {
    return 3;
  }
  if (uint < uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeUint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};

/***/ }),

/***/ 15876:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UT: () => (/* binding */ encodeNegint),
/* harmony export */   ec: () => (/* binding */ decodeNegint64),
/* harmony export */   r0: () => (/* binding */ decodeNegint16),
/* harmony export */   wy: () => (/* binding */ decodeNegint32),
/* harmony export */   yr: () => (/* binding */ decodeNegint8)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87474);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15279);



function decodeNegint8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint8 */ .kj(data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint16 */ .X0(data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint32 */ .Jl(data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
  const int = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint64 */ .YX(data, pos + 1, options);
  if (typeof int !== 'bigint') {
    const value = -1 - int;
    if (value >= Number.MIN_SAFE_INTEGER) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint, value, 9);
    }
  }
  if (options.allowBigInt !== true) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeErrPrefix */ .IR } integers outside of the safe integer range are not supported`);
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint, neg1b - BigInt(int), 9);
}
function encodeNegint(buf, token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp(buf, token.type.majorEncoded, unsigned);
}
encodeNegint.encodedSize = function encodedSize(token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .uintBoundaries */ .or[0]) {
    return 1;
  }
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .uintBoundaries */ .or[1]) {
    return 2;
  }
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .uintBoundaries */ .or[2]) {
    return 3;
  }
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .uintBoundaries */ .or[3]) {
    return 5;
  }
  return 9;
};
encodeNegint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};

/***/ }),

/***/ 60606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BS: () => (/* binding */ decodeBytes16),
/* harmony export */   Ii: () => (/* binding */ decodeBytesCompact),
/* harmony export */   ME: () => (/* binding */ decodeBytes64),
/* harmony export */   UQ: () => (/* binding */ decodeBytes8),
/* harmony export */   hg: () => (/* binding */ encodeBytes),
/* harmony export */   zU: () => (/* binding */ decodeBytes32)
/* harmony export */ });
/* unused harmony export compareBytes */
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15279);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87474);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(141);




function toToken(data, pos, prefix, length) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEnoughData */ .DO)(data, pos, prefix + length);
  const buf = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .slice */ .tP)(data, pos + prefix, pos + prefix + length);
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.bytes, buf, prefix + length);
}
function decodeBytesCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint8 */ .kj(data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint16 */ .X0(data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint32 */ .Jl(data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint64 */ .YX(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } 64-bit integer bytes lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function tokenBytes(token) {
  if (token.encodedBytes === undefined) {
    token.encodedBytes = token.type === _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.string ? (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .fromString */ .mL)(token.value) : token.value;
  }
  return token.encodedBytes;
}
function encodeBytes(buf, token) {
  const bytes = tokenBytes(token);
  _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .encodeUintValue */ .Tp(buf, token.type.majorEncoded, bytes.length);
  buf.push(bytes);
}
encodeBytes.encodedSize = function encodedSize(token) {
  const bytes = tokenBytes(token);
  return _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .encodeUintValue */ .Tp.encodedSize(bytes.length) + bytes.length;
};
encodeBytes.compareTokens = function compareTokens(tok1, tok2) {
  return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};
function compareBytes(b1, b2) {
  return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .compare */ .qu)(b1, b2);
}

/***/ }),

/***/ 16608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bq: () => (/* binding */ decodeString8),
/* harmony export */   YW: () => (/* binding */ encodeString),
/* harmony export */   bc: () => (/* binding */ decodeString64),
/* harmony export */   h: () => (/* binding */ decodeString16),
/* harmony export */   nt: () => (/* binding */ decodeStringCompact),
/* harmony export */   q0: () => (/* binding */ decodeString32)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15279);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87474);
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60606);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(141);





function toToken(data, pos, prefix, length, options) {
  const totLength = prefix + length;
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEnoughData */ .DO)(data, pos, totLength);
  const tok = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.string, (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .toString */ .BB)(data, pos + prefix, pos + totLength), totLength);
  if (options.retainStringBytes === true) {
    tok.byteValue = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .slice */ .tP)(data, pos + prefix, pos + totLength);
  }
  return tok;
}
function decodeStringCompact(data, pos, minor, options) {
  return toToken(data, pos, 1, minor, options);
}
function decodeString8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint8 */ .kj(data, pos + 1, options), options);
}
function decodeString16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint16 */ .X0(data, pos + 1, options), options);
}
function decodeString32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint32 */ .Jl(data, pos + 1, options), options);
}
function decodeString64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .readUint64 */ .YX(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } 64-bit integer string lengths not supported`);
  }
  return toToken(data, pos, 9, l, options);
}
const encodeString = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__/* .encodeBytes */ .hg;

/***/ }),

/***/ 83374:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HF: () => (/* binding */ encodeArray),
/* harmony export */   Ju: () => (/* binding */ decodeArrayCompact),
/* harmony export */   OC: () => (/* binding */ decodeArray16),
/* harmony export */   a8: () => (/* binding */ decodeArray64),
/* harmony export */   h7: () => (/* binding */ decodeArray8),
/* harmony export */   lY: () => (/* binding */ decodeArray32),
/* harmony export */   s5: () => (/* binding */ decodeArrayIndefinite)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87474);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15279);



function toToken(_data, _pos, prefix, length) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.array, length, prefix);
}
function decodeArrayCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint8 */ .kj(data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint16 */ .X0(data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint32 */ .Jl(data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint64 */ .YX(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeErrPrefix */ .IR } 64-bit integer array lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeErrPrefix */ .IR } indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeArray(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.array.majorEncoded, token.value);
}
encodeArray.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUint */ .Fh.compareTokens;
encodeArray.encodedSize = function encodedSize(token) {
  return _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp.encodedSize(token.value);
};

/***/ }),

/***/ 36572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F2: () => (/* binding */ decodeMap64),
/* harmony export */   G: () => (/* binding */ decodeMap8),
/* harmony export */   IY: () => (/* binding */ decodeMap32),
/* harmony export */   KI: () => (/* binding */ encodeMap),
/* harmony export */   _K: () => (/* binding */ decodeMapCompact),
/* harmony export */   ng: () => (/* binding */ decodeMapIndefinite),
/* harmony export */   qe: () => (/* binding */ decodeMap16)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87474);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15279);



function toToken(_data, _pos, prefix, length) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.map, length, prefix);
}
function decodeMapCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint8 */ .kj(data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint16 */ .X0(data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint32 */ .Jl(data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint64 */ .YX(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeErrPrefix */ .IR } 64-bit integer map lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeErrPrefix */ .IR } indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.map.majorEncoded, token.value);
}
encodeMap.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUint */ .Fh.compareTokens;
encodeMap.encodedSize = function encodedSize(token) {
  return _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp.encodedSize(token.value);
};

/***/ }),

/***/ 63967:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CF: () => (/* binding */ decodeTag16),
/* harmony export */   MV: () => (/* binding */ decodeTag64),
/* harmony export */   ZR: () => (/* binding */ decodeTag8),
/* harmony export */   qJ: () => (/* binding */ decodeTagCompact),
/* harmony export */   vP: () => (/* binding */ decodeTag32),
/* harmony export */   xy: () => (/* binding */ encodeTag)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87474);


function decodeTagCompact(_data, _pos, minor, _options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint8 */ .kj(data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint16 */ .X0(data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint32 */ .Jl(data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .readUint64 */ .YX(data, pos + 1, options), 9);
}
function encodeTag(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.tag.majorEncoded, token.value);
}
encodeTag.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUint */ .Fh.compareTokens;
encodeTag.encodedSize = function encodedSize(token) {
  return _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeUintValue */ .Tp.encodedSize(token.value);
};

/***/ }),

/***/ 30819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GI: () => (/* binding */ decodeFloat32),
/* harmony export */   h1: () => (/* binding */ decodeUndefined),
/* harmony export */   mW: () => (/* binding */ decodeFloat16),
/* harmony export */   tA: () => (/* binding */ encodeFloat),
/* harmony export */   vV: () => (/* binding */ decodeFloat64),
/* harmony export */   y7: () => (/* binding */ decodeBreak)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15279);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87474);



const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
  if (options.allowUndefined === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } undefined values are not supported`);
  } else if (options.coerceUndefinedToNull === true) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.null, null, 1);
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.undefined, undefined, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } indefinite length items not allowed`);
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.break, undefined, 1);
}
function createToken(value, bytes, options) {
  if (options) {
    if (options.allowNaN === false && Number.isNaN(value)) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } NaN values are not supported`);
    }
    if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } Infinity values are not supported`);
    }
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.float, value, bytes);
}
function decodeFloat16(data, pos, _minor, options) {
  return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
  return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
  return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf, token, options) {
  const float = token.value;
  if (float === false) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.float.majorEncoded | MINOR_FALSE]);
  } else if (float === true) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.float.majorEncoded | MINOR_TRUE]);
  } else if (float === null) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.float.majorEncoded | MINOR_NULL]);
  } else if (float === undefined) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.float.majorEncoded | MINOR_UNDEFINED]);
  } else {
    let decoded;
    let success = false;
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        ui8a[0] = 249;
        buf.push(ui8a.slice(0, 3));
        success = true;
      } else {
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) {
          ui8a[0] = 250;
          buf.push(ui8a.slice(0, 5));
          success = true;
        }
      }
    }
    if (!success) {
      encodeFloat64(float);
      decoded = readFloat64(ui8a, 1);
      ui8a[0] = 251;
      buf.push(ui8a.slice(0, 9));
    }
  }
}
encodeFloat.encodedSize = function encodedSize(token, options) {
  const float = token.value;
  if (float === false || float === true || float === null || float === undefined) {
    return 1;
  }
  if (!options || options.float64 !== true) {
    encodeFloat16(float);
    let decoded = readFloat16(ui8a, 1);
    if (float === decoded || Number.isNaN(float)) {
      return 3;
    }
    encodeFloat32(float);
    decoded = readFloat32(ui8a, 1);
    if (float === decoded) {
      return 5;
    }
  }
  return 9;
};
const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);
function encodeFloat16(inp) {
  if (inp === Infinity) {
    dataView.setUint16(0, 31744, false);
  } else if (inp === -Infinity) {
    dataView.setUint16(0, 64512, false);
  } else if (Number.isNaN(inp)) {
    dataView.setUint16(0, 32256, false);
  } else {
    dataView.setFloat32(0, inp);
    const valu32 = dataView.getUint32(0);
    const exponent = (valu32 & 2139095040) >> 23;
    const mantissa = valu32 & 8388607;
    if (exponent === 255) {
      dataView.setUint16(0, 31744, false);
    } else if (exponent === 0) {
      dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
    } else {
      const logicalExponent = exponent - 127;
      if (logicalExponent < -24) {
        dataView.setUint16(0, 0);
      } else if (logicalExponent < -14) {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
      } else {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
      }
    }
  }
}
function readFloat16(ui8a, pos) {
  if (ui8a.length - pos < 2) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } not enough data for float16`);
  }
  const half = (ui8a[pos] << 8) + ui8a[pos + 1];
  if (half === 31744) {
    return Infinity;
  }
  if (half === 64512) {
    return -Infinity;
  }
  if (half === 32256) {
    return NaN;
  }
  const exp = half >> 10 & 31;
  const mant = half & 1023;
  let val;
  if (exp === 0) {
    val = mant * 2 ** -24;
  } else if (exp !== 31) {
    val = (mant + 1024) * 2 ** (exp - 25);
  } else {
    val = mant === 0 ? Infinity : NaN;
  }
  return half & 32768 ? -val : val;
}
function encodeFloat32(inp) {
  dataView.setFloat32(0, inp, false);
}
function readFloat32(ui8a, pos) {
  if (ui8a.length - pos < 4) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } not enough data for float32`);
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 4).getFloat32(0, false);
}
function encodeFloat64(inp) {
  dataView.setFloat64(0, inp, false);
}
function readFloat64(ui8a, pos) {
  if (ui8a.length - pos < 8) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeErrPrefix */ .IR } not enough data for float64`);
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 8).getFloat64(0, false);
}
encodeFloat.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_2__/* .encodeUint */ .Fh.compareTokens;

/***/ }),

/***/ 141:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BB: () => (/* binding */ toString),
/* harmony export */   Dz: () => (/* binding */ asU8A),
/* harmony export */   Pu: () => (/* binding */ decodeCodePointsArray),
/* harmony export */   mL: () => (/* binding */ fromString),
/* harmony export */   nI: () => (/* binding */ fromArray),
/* harmony export */   qu: () => (/* binding */ compare),
/* harmony export */   tP: () => (/* binding */ slice),
/* harmony export */   un: () => (/* binding */ alloc),
/* harmony export */   zo: () => (/* binding */ concat)
/* harmony export */ });
/* unused harmony exports useBuffer, toHex, fromHex */
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === 'function';
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
function isBuffer(buf) {
  return useBuffer && globalThis.Buffer.isBuffer(buf);
}
function asU8A(buf) {
  if (!(buf instanceof Uint8Array)) {
    return Uint8Array.from(buf);
  }
  return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf;
}
const toString = useBuffer ? (bytes, start, end) => {
  return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString('utf8') : utf8Slice(bytes, start, end);
} : (bytes, start, end) => {
  return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? string => {
  return string.length > 64 ? globalThis.Buffer.from(string) : utf8ToBytes(string);
} : string => {
  return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
};
const fromArray = arr => {
  return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end) => {
  if (isBuffer(bytes)) {
    return new Uint8Array(bytes.subarray(start, end));
  }
  return bytes.slice(start, end);
} : (bytes, start, end) => {
  return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length) => {
  chunks = chunks.map(c => c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
  return asU8A(globalThis.Buffer.concat(chunks, length));
} : (chunks, length) => {
  const out = new Uint8Array(length);
  let off = 0;
  for (let b of chunks) {
    if (off + b.length > out.length) {
      b = b.subarray(0, out.length - off);
    }
    out.set(b, off);
    off += b.length;
  }
  return out;
};
const alloc = useBuffer ? size => {
  return globalThis.Buffer.allocUnsafe(size);
} : size => {
  return new Uint8Array(size);
};
const toHex = (/* unused pure expression or super */ null && (useBuffer ? d => {
  if (typeof d === 'string') {
    return d;
  }
  return globalThis.Buffer.from(toBytes(d)).toString('hex');
} : d => {
  if (typeof d === 'string') {
    return d;
  }
  return Array.prototype.reduce.call(toBytes(d), (p, c) => `${ p }${ c.toString(16).padStart(2, '0') }`, '');
}));
const fromHex = (/* unused pure expression or super */ null && (useBuffer ? hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }
  return globalThis.Buffer.from(hex, 'hex');
} : hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }
  if (!hex.length) {
    return new Uint8Array(0);
  }
  return new Uint8Array(hex.split('').map((c, i, d) => i % 2 === 0 ? `0x${ c }${ d[i + 1] }` : '').filter(Boolean).map(e => parseInt(e, 16)));
}));
function toBytes(obj) {
  if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') {
    return obj;
  }
  if (obj instanceof ArrayBuffer) {
    return new Uint8Array(obj);
  }
  if (ArrayBuffer.isView(obj)) {
    return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
}
function compare(b1, b2) {
  if (isBuffer(b1) && isBuffer(b2)) {
    return b1.compare(b2);
  }
  for (let i = 0; i < b1.length; i++) {
    if (b1[i] === b2[i]) {
      continue;
    }
    return b1[i] < b2[i] ? -1 : 1;
  }
  return 0;
}
function utf8ToBytes(string, units = Infinity) {
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function utf8Slice(buf, offset, end) {
  const res = [];
  while (offset < end) {
    const firstByte = buf[offset];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (offset + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
      case 1:
        if (firstByte < 128) {
          codePoint = firstByte;
        }
        break;
      case 2:
        secondByte = buf[offset + 1];
        if ((secondByte & 192) === 128) {
          tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
          if (tempCodePoint > 127) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 3:
        secondByte = buf[offset + 1];
        thirdByte = buf[offset + 2];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
          if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 4:
        secondByte = buf[offset + 1];
        thirdByte = buf[offset + 2];
        fourthByte = buf[offset + 3];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
          if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
            codePoint = tempCodePoint;
          }
        }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    offset += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

/***/ }),

/***/ 15279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DO: () => (/* binding */ assertEnoughData),
/* harmony export */   IR: () => (/* binding */ decodeErrPrefix),
/* harmony export */   OO: () => (/* binding */ encodeErrPrefix)
/* harmony export */ });
/* unused harmony export uintMinorPrefixBytes */
const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';
const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;
function assertEnoughData(data, pos, need) {
  if (data.length - pos < need) {
    throw new Error(`${ decodeErrPrefix } not enough data for type`);
  }
}


/***/ }),

/***/ 7815:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ decode)
/* harmony export */ });
/* unused harmony exports Tokeniser, tokensToObject */
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15279);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83657);
/* harmony import */ var _jump_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74613);



const defaultDecodeOptions = {
  strict: false,
  allowIndefinite: true,
  allowUndefined: true,
  allowBigInt: true
};
class Tokeniser {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
  }
  done() {
    return this.pos >= this.data.length;
  }
  next() {
    const byt = this.data[this.pos];
    let token = _jump_js__WEBPACK_IMPORTED_MODULE_2__/* .quick */ .PS[byt];
    if (token === undefined) {
      const decoder = _jump_js__WEBPACK_IMPORTED_MODULE_2__/* .jump */ .cW[byt];
      if (!decoder) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } no decoder for major type ${ byt >>> 5 } (byte 0x${ byt.toString(16).padStart(2, '0') })`);
      }
      const minor = byt & 31;
      token = decoder(this.data, this.pos, minor, this.options);
    }
    this.pos += token.encodedLength;
    return token;
  }
}
const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');
function tokenToArray(token, tokeniser, options) {
  const arr = [];
  for (let i = 0; i < token.value; i++) {
    const value = tokensToObject(tokeniser, options);
    if (value === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } got unexpected break to lengthed array`);
    }
    if (value === DONE) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } found array but not enough entries (got ${ i }, expected ${ token.value })`);
    }
    arr[i] = value;
  }
  return arr;
}
function tokenToMap(token, tokeniser, options) {
  const useMaps = options.useMaps === true;
  const obj = useMaps ? undefined : {};
  const m = useMaps ? new Map() : undefined;
  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);
    if (key === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } got unexpected break to lengthed map`);
    }
    if (key === DONE) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } found map but not enough entries (got ${ i } [no key], expected ${ token.value })`);
    }
    if (useMaps !== true && typeof key !== 'string') {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } non-string keys not supported (got ${ typeof key })`);
    }
    if (options.rejectDuplicateMapKeys === true) {
      if (useMaps && m.has(key) || !useMaps && key in obj) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } found repeat map key "${ key }"`);
      }
    }
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } found map but not enough entries (got ${ i } [no value], expected ${ token.value })`);
    }
    if (useMaps) {
      m.set(key, value);
    } else {
      obj[key] = value;
    }
  }
  return useMaps ? m : obj;
}
function tokensToObject(tokeniser, options) {
  if (tokeniser.done()) {
    return DONE;
  }
  const token = tokeniser.next();
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__/* .Type */ .D.break) {
    return BREAK;
  }
  if (token.type.terminal) {
    return token.value;
  }
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__/* .Type */ .D.array) {
    return tokenToArray(token, tokeniser, options);
  }
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__/* .Type */ .D.map) {
    return tokenToMap(token, tokeniser, options);
  }
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__/* .Type */ .D.tag) {
    if (options.tags && typeof options.tags[token.value] === 'function') {
      const tagged = tokensToObject(tokeniser, options);
      return options.tags[token.value](tagged);
    }
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } tag not supported (${ token.value })`);
  }
  throw new Error('unsupported');
}
function decode(data, options) {
  if (!(data instanceof Uint8Array)) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } data to decode must be a Uint8Array`);
  }
  options = Object.assign({}, defaultDecodeOptions, options);
  const tokeniser = options.tokenizer || new Tokeniser(data, options);
  const decoded = tokensToObject(tokeniser, options);
  if (decoded === DONE) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } did not find any content to decode`);
  }
  if (decoded === BREAK) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } got unexpected break`);
  }
  if (!tokeniser.done()) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrPrefix */ .IR } too many terminals, data makes no sense`);
  }
  return decoded;
}


/***/ }),

/***/ 17148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cv: () => (/* binding */ encode),
  w$: () => (/* binding */ encodeCustom)
});

// UNUSED EXPORTS: Ref, makeCborEncoders, objectToTokens

;// CONCATENATED MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/is.js
const typeofs = [
  'string',
  'number',
  'bigint',
  'symbol'
];
const objectTypeNames = [
  'Function',
  'Generator',
  'AsyncGenerator',
  'GeneratorFunction',
  'AsyncGeneratorFunction',
  'AsyncFunction',
  'Observable',
  'Array',
  'Buffer',
  'Object',
  'RegExp',
  'Date',
  'Error',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Promise',
  'URL',
  'HTMLElement',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'BigInt64Array',
  'BigUint64Array'
];
function is(value) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  if (value === true || value === false) {
    return 'boolean';
  }
  const typeOf = typeof value;
  if (typeofs.includes(typeOf)) {
    return typeOf;
  }
  if (typeOf === 'function') {
    return 'Function';
  }
  if (Array.isArray(value)) {
    return 'Array';
  }
  if (isBuffer(value)) {
    return 'Buffer';
  }
  const objectType = getObjectType(value);
  if (objectType) {
    return objectType;
  }
  return 'Object';
}
function isBuffer(value) {
  return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}
function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (objectTypeNames.includes(objectTypeName)) {
    return objectTypeName;
  }
  return undefined;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/token.js
var token = __webpack_require__(83657);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/byte-utils.js
var byte_utils = __webpack_require__(141);
;// CONCATENATED MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/bl.js

const defaultChunkSize = 256;
class Bl {
  constructor(chunkSize = defaultChunkSize) {
    this.chunkSize = chunkSize;
    this.cursor = 0;
    this.maxCursor = -1;
    this.chunks = [];
    this._initReuseChunk = null;
  }
  reset() {
    this.cursor = 0;
    this.maxCursor = -1;
    if (this.chunks.length) {
      this.chunks = [];
    }
    if (this._initReuseChunk !== null) {
      this.chunks.push(this._initReuseChunk);
      this.maxCursor = this._initReuseChunk.length - 1;
    }
  }
  push(bytes) {
    let topChunk = this.chunks[this.chunks.length - 1];
    const newMax = this.cursor + bytes.length;
    if (newMax <= this.maxCursor + 1) {
      const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
      topChunk.set(bytes, chunkPos);
    } else {
      if (topChunk) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        if (chunkPos < topChunk.length) {
          this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
          this.maxCursor = this.cursor - 1;
        }
      }
      if (bytes.length < 64 && bytes.length < this.chunkSize) {
        topChunk = (0,byte_utils/* alloc */.un)(this.chunkSize);
        this.chunks.push(topChunk);
        this.maxCursor += topChunk.length;
        if (this._initReuseChunk === null) {
          this._initReuseChunk = topChunk;
        }
        topChunk.set(bytes, 0);
      } else {
        this.chunks.push(bytes);
        this.maxCursor += bytes.length;
      }
    }
    this.cursor += bytes.length;
  }
  toBytes(reset = false) {
    let byts;
    if (this.chunks.length === 1) {
      const chunk = this.chunks[0];
      if (reset && this.cursor > chunk.length / 2) {
        byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
        this._initReuseChunk = null;
        this.chunks = [];
      } else {
        byts = (0,byte_utils/* slice */.tP)(chunk, 0, this.cursor);
      }
    } else {
      byts = (0,byte_utils/* concat */.zo)(this.chunks, this.cursor);
    }
    if (reset) {
      this.reset();
    }
    return byts;
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/common.js
var common = __webpack_require__(15279);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/jump.js
var jump = __webpack_require__(74613);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/0uint.js
var _0uint = __webpack_require__(87474);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/1negint.js
var _1negint = __webpack_require__(15876);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/2bytes.js
var _2bytes = __webpack_require__(60606);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/3string.js
var _3string = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/4array.js
var _4array = __webpack_require__(83374);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/5map.js
var _5map = __webpack_require__(36572);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/6tag.js
var _6tag = __webpack_require__(63967);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/7float.js
var _7float = __webpack_require__(30819);
;// CONCATENATED MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/encode.js














const defaultEncodeOptions = {
  float64: false,
  mapSorter,
  quickEncodeToken: jump/* quickEncodeToken */.JN
};
function makeCborEncoders() {
  const encoders = [];
  encoders[token/* Type */.D.uint.major] = _0uint/* encodeUint */.Fh;
  encoders[token/* Type */.D.negint.major] = _1negint/* encodeNegint */.UT;
  encoders[token/* Type */.D.bytes.major] = _2bytes/* encodeBytes */.hg;
  encoders[token/* Type */.D.string.major] = _3string/* encodeString */.YW;
  encoders[token/* Type */.D.array.major] = _4array/* encodeArray */.HF;
  encoders[token/* Type */.D.map.major] = _5map/* encodeMap */.KI;
  encoders[token/* Type */.D.tag.major] = _6tag/* encodeTag */.xy;
  encoders[token/* Type */.D.float.major] = _7float/* encodeFloat */.tA;
  return encoders;
}
const cborEncoders = makeCborEncoders();
const buf = new Bl();
class Ref {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }
  includes(obj) {
    let p = this;
    do {
      if (p.obj === obj) {
        return true;
      }
    } while (p = p.parent);
    return false;
  }
  static createCheck(stack, obj) {
    if (stack && stack.includes(obj)) {
      throw new Error(`${ common/* encodeErrPrefix */.OO } object contains circular references`);
    }
    return new Ref(obj, stack);
  }
}
const simpleTokens = {
  null: new token/* Token */.W(token/* Type */.D.null, null),
  undefined: new token/* Token */.W(token/* Type */.D.undefined, undefined),
  true: new token/* Token */.W(token/* Type */.D.true, true),
  false: new token/* Token */.W(token/* Type */.D.false, false),
  emptyArray: new token/* Token */.W(token/* Type */.D.array, 0),
  emptyMap: new token/* Token */.W(token/* Type */.D.map, 0)
};
const typeEncoders = {
  number(obj, _typ, _options, _refStack) {
    if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
      return new token/* Token */.W(token/* Type */.D.float, obj);
    } else if (obj >= 0) {
      return new token/* Token */.W(token/* Type */.D.uint, obj);
    } else {
      return new token/* Token */.W(token/* Type */.D.negint, obj);
    }
  },
  bigint(obj, _typ, _options, _refStack) {
    if (obj >= BigInt(0)) {
      return new token/* Token */.W(token/* Type */.D.uint, obj);
    } else {
      return new token/* Token */.W(token/* Type */.D.negint, obj);
    }
  },
  Uint8Array(obj, _typ, _options, _refStack) {
    return new token/* Token */.W(token/* Type */.D.bytes, obj);
  },
  string(obj, _typ, _options, _refStack) {
    return new token/* Token */.W(token/* Type */.D.string, obj);
  },
  boolean(obj, _typ, _options, _refStack) {
    return obj ? simpleTokens.true : simpleTokens.false;
  },
  null(_obj, _typ, _options, _refStack) {
    return simpleTokens.null;
  },
  undefined(_obj, _typ, _options, _refStack) {
    return simpleTokens.undefined;
  },
  ArrayBuffer(obj, _typ, _options, _refStack) {
    return new token/* Token */.W(token/* Type */.D.bytes, new Uint8Array(obj));
  },
  DataView(obj, _typ, _options, _refStack) {
    return new token/* Token */.W(token/* Type */.D.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
  },
  Array(obj, _typ, options, refStack) {
    if (!obj.length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyArray,
          new token/* Token */.W(token/* Type */.D.break)
        ];
      }
      return simpleTokens.emptyArray;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const e of obj) {
      entries[i++] = objectToTokens(e, options, refStack);
    }
    if (options.addBreakTokens) {
      return [
        new token/* Token */.W(token/* Type */.D.array, obj.length),
        entries,
        new token/* Token */.W(token/* Type */.D.break)
      ];
    }
    return [
      new token/* Token */.W(token/* Type */.D.array, obj.length),
      entries
    ];
  },
  Object(obj, typ, options, refStack) {
    const isMap = typ !== 'Object';
    const keys = isMap ? obj.keys() : Object.keys(obj);
    const length = isMap ? obj.size : keys.length;
    if (!length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyMap,
          new token/* Token */.W(token/* Type */.D.break)
        ];
      }
      return simpleTokens.emptyMap;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const key of keys) {
      entries[i++] = [
        objectToTokens(key, options, refStack),
        objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
      ];
    }
    sortMapEntries(entries, options);
    if (options.addBreakTokens) {
      return [
        new token/* Token */.W(token/* Type */.D.map, length),
        entries,
        new token/* Token */.W(token/* Type */.D.break)
      ];
    }
    return [
      new token/* Token */.W(token/* Type */.D.map, length),
      entries
    ];
  }
};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' ')) {
  typeEncoders[`${ typ }Array`] = typeEncoders.DataView;
}
function objectToTokens(obj, options = {}, refStack) {
  const typ = is(obj);
  const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];
  if (typeof customTypeEncoder === 'function') {
    const tokens = customTypeEncoder(obj, typ, options, refStack);
    if (tokens != null) {
      return tokens;
    }
  }
  const typeEncoder = typeEncoders[typ];
  if (!typeEncoder) {
    throw new Error(`${ common/* encodeErrPrefix */.OO } unsupported type: ${ typ }`);
  }
  return typeEncoder(obj, typ, options, refStack);
}
function sortMapEntries(entries, options) {
  if (options.mapSorter) {
    entries.sort(options.mapSorter);
  }
}
function mapSorter(e1, e2) {
  const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
  const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
  if (keyToken1.type !== keyToken2.type) {
    return keyToken1.type.compare(keyToken2.type);
  }
  const major = keyToken1.type.major;
  const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
  if (tcmp === 0) {
    console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
  }
  return tcmp;
}
function tokensToEncoded(buf, tokens, encoders, options) {
  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      tokensToEncoded(buf, token, encoders, options);
    }
  } else {
    encoders[tokens.type.major](buf, tokens, options);
  }
}
function encodeCustom(data, encoders, options) {
  const tokens = objectToTokens(data, options);
  if (!Array.isArray(tokens) && options.quickEncodeToken) {
    const quickBytes = options.quickEncodeToken(tokens);
    if (quickBytes) {
      return quickBytes;
    }
    const encoder = encoders[tokens.type.major];
    if (encoder.encodedSize) {
      const size = encoder.encodedSize(tokens, options);
      const buf = new Bl(size);
      encoder(buf, tokens, options);
      if (buf.chunks.length !== 1) {
        throw new Error(`Unexpected error: pre-calculated length for ${ tokens } was wrong`);
      }
      return (0,byte_utils/* asU8A */.Dz)(buf.chunks[0]);
    }
  }
  buf.reset();
  tokensToEncoded(buf, tokens, encoders, options);
  return buf.toBytes(true);
}
function encode(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return encodeCustom(data, cborEncoders, options);
}


/***/ }),

/***/ 30918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d2: () => (/* reexport */ Tokenizer),
  Jx: () => (/* reexport */ decode_decode),
  cv: () => (/* reexport */ encode_encode)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/token.js
var lib_token = __webpack_require__(83657);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/encode.js + 2 modules
var encode = __webpack_require__(17148);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/common.js
var common = __webpack_require__(15279);
// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/byte-utils.js
var byte_utils = __webpack_require__(141);
;// CONCATENATED MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/json/encode.js




class JSONEncoder extends Array {
  constructor() {
    super();
    this.inRecursive = [];
  }
  prefix(buf) {
    const recurs = this.inRecursive[this.inRecursive.length - 1];
    if (recurs) {
      if (recurs.type === lib_token/* Type */.D.array) {
        recurs.elements++;
        if (recurs.elements !== 1) {
          buf.push([44]);
        }
      }
      if (recurs.type === lib_token/* Type */.D.map) {
        recurs.elements++;
        if (recurs.elements !== 1) {
          if (recurs.elements % 2 === 1) {
            buf.push([44]);
          } else {
            buf.push([58]);
          }
        }
      }
    }
  }
  [lib_token/* Type */.D.uint.major](buf, token) {
    this.prefix(buf);
    const is = String(token.value);
    const isa = [];
    for (let i = 0; i < is.length; i++) {
      isa[i] = is.charCodeAt(i);
    }
    buf.push(isa);
  }
  [lib_token/* Type */.D.negint.major](buf, token) {
    this[lib_token/* Type */.D.uint.major](buf, token);
  }
  [lib_token/* Type */.D.bytes.major](_buf, _token) {
    throw new Error(`${ common/* encodeErrPrefix */.OO } unsupported type: Uint8Array`);
  }
  [lib_token/* Type */.D.string.major](buf, token) {
    this.prefix(buf);
    const byts = (0,byte_utils/* fromString */.mL)(JSON.stringify(token.value));
    buf.push(byts.length > 32 ? (0,byte_utils/* asU8A */.Dz)(byts) : byts);
  }
  [lib_token/* Type */.D.array.major](buf, _token) {
    this.prefix(buf);
    this.inRecursive.push({
      type: lib_token/* Type */.D.array,
      elements: 0
    });
    buf.push([91]);
  }
  [lib_token/* Type */.D.map.major](buf, _token) {
    this.prefix(buf);
    this.inRecursive.push({
      type: lib_token/* Type */.D.map,
      elements: 0
    });
    buf.push([123]);
  }
  [lib_token/* Type */.D.tag.major](_buf, _token) {
  }
  [lib_token/* Type */.D.float.major](buf, token) {
    if (token.type.name === 'break') {
      const recurs = this.inRecursive.pop();
      if (recurs) {
        if (recurs.type === lib_token/* Type */.D.array) {
          buf.push([93]);
        } else if (recurs.type === lib_token/* Type */.D.map) {
          buf.push([125]);
        } else {
          throw new Error('Unexpected recursive type; this should not happen!');
        }
        return;
      }
      throw new Error('Unexpected break; this should not happen!');
    }
    if (token.value === undefined) {
      throw new Error(`${ common/* encodeErrPrefix */.OO } unsupported type: undefined`);
    }
    this.prefix(buf);
    if (token.type.name === 'true') {
      buf.push([
        116,
        114,
        117,
        101
      ]);
      return;
    } else if (token.type.name === 'false') {
      buf.push([
        102,
        97,
        108,
        115,
        101
      ]);
      return;
    } else if (token.type.name === 'null') {
      buf.push([
        110,
        117,
        108,
        108
      ]);
      return;
    }
    const is = String(token.value);
    const isa = [];
    let dp = false;
    for (let i = 0; i < is.length; i++) {
      isa[i] = is.charCodeAt(i);
      if (!dp && (isa[i] === 46 || isa[i] === 101 || isa[i] === 69)) {
        dp = true;
      }
    }
    if (!dp) {
      isa.push(46);
      isa.push(48);
    }
    buf.push(isa);
  }
}
function mapSorter(e1, e2) {
  if (Array.isArray(e1[0]) || Array.isArray(e2[0])) {
    throw new Error(`${ common/* encodeErrPrefix */.OO } complex map keys are not supported`);
  }
  const keyToken1 = e1[0];
  const keyToken2 = e2[0];
  if (keyToken1.type !== lib_token/* Type */.D.string || keyToken2.type !== lib_token/* Type */.D.string) {
    throw new Error(`${ common/* encodeErrPrefix */.OO } non-string map keys are not supported`);
  }
  if (keyToken1 < keyToken2) {
    return -1;
  }
  if (keyToken1 > keyToken2) {
    return 1;
  }
  throw new Error(`${ common/* encodeErrPrefix */.OO } unexpected duplicate map keys, this is not supported`);
}
const defaultEncodeOptions = {
  addBreakTokens: true,
  mapSorter
};
function encode_encode(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return (0,encode/* encodeCustom */.w$)(data, new JSONEncoder(), options);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/decode.js
var decode = __webpack_require__(7815);
;// CONCATENATED MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/json/decode.js




class Tokenizer {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
    this.modeStack = ['value'];
    this.lastToken = '';
  }
  done() {
    return this.pos >= this.data.length;
  }
  ch() {
    return this.data[this.pos];
  }
  currentMode() {
    return this.modeStack[this.modeStack.length - 1];
  }
  skipWhitespace() {
    let c = this.ch();
    while (c === 32 || c === 9 || c === 13 || c === 10) {
      c = this.data[++this.pos];
    }
  }
  expect(str) {
    if (this.data.length - this.pos < str.length) {
      throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected end of input at position ${ this.pos }`);
    }
    for (let i = 0; i < str.length; i++) {
      if (this.data[this.pos++] !== str[i]) {
        throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected token at position ${ this.pos }, expected to find '${ String.fromCharCode(...str) }'`);
      }
    }
  }
  parseNumber() {
    const startPos = this.pos;
    let negative = false;
    let float = false;
    const swallow = chars => {
      while (!this.done()) {
        const ch = this.ch();
        if (chars.includes(ch)) {
          this.pos++;
        } else {
          break;
        }
      }
    };
    if (this.ch() === 45) {
      negative = true;
      this.pos++;
    }
    if (this.ch() === 48) {
      this.pos++;
      if (this.ch() === 46) {
        this.pos++;
        float = true;
      } else {
        return new lib_token/* Token */.W(lib_token/* Type */.D.uint, 0, this.pos - startPos);
      }
    }
    swallow([
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57
    ]);
    if (negative && this.pos === startPos + 1) {
      throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected token at position ${ this.pos }`);
    }
    if (!this.done() && this.ch() === 46) {
      if (float) {
        throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected token at position ${ this.pos }`);
      }
      float = true;
      this.pos++;
      swallow([
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57
      ]);
    }
    if (!this.done() && (this.ch() === 101 || this.ch() === 69)) {
      float = true;
      this.pos++;
      if (!this.done() && (this.ch() === 43 || this.ch() === 45)) {
        this.pos++;
      }
      swallow([
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57
      ]);
    }
    const numStr = String.fromCharCode.apply(null, this.data.subarray(startPos, this.pos));
    const num = parseFloat(numStr);
    if (float) {
      return new lib_token/* Token */.W(lib_token/* Type */.D.float, num, this.pos - startPos);
    }
    if (this.options.allowBigInt !== true || Number.isSafeInteger(num)) {
      return new lib_token/* Token */.W(num >= 0 ? lib_token/* Type */.D.uint : lib_token/* Type */.D.negint, num, this.pos - startPos);
    }
    return new lib_token/* Token */.W(num >= 0 ? lib_token/* Type */.D.uint : lib_token/* Type */.D.negint, BigInt(numStr), this.pos - startPos);
  }
  parseString() {
    if (this.ch() !== 34) {
      throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected character at position ${ this.pos }; this shouldn't happen`);
    }
    this.pos++;
    for (let i = this.pos, l = 0; i < this.data.length && l < 65536; i++, l++) {
      const ch = this.data[i];
      if (ch === 92 || ch < 32 || ch >= 128) {
        break;
      }
      if (ch === 34) {
        const str = String.fromCharCode.apply(null, this.data.subarray(this.pos, i));
        this.pos = i + 1;
        return new lib_token/* Token */.W(lib_token/* Type */.D.string, str, l);
      }
    }
    const startPos = this.pos;
    const chars = [];
    const readu4 = () => {
      if (this.pos + 4 >= this.data.length) {
        throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected end of unicode escape sequence at position ${ this.pos }`);
      }
      let u4 = 0;
      for (let i = 0; i < 4; i++) {
        let ch = this.ch();
        if (ch >= 48 && ch <= 57) {
          ch -= 48;
        } else if (ch >= 97 && ch <= 102) {
          ch = ch - 97 + 10;
        } else if (ch >= 65 && ch <= 70) {
          ch = ch - 65 + 10;
        } else {
          throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected unicode escape character at position ${ this.pos }`);
        }
        u4 = u4 * 16 + ch;
        this.pos++;
      }
      return u4;
    };
    const readUtf8Char = () => {
      const firstByte = this.ch();
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (this.pos + bytesPerSequence > this.data.length) {
        throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected unicode sequence at position ${ this.pos }`);
      }
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
      case 1:
        if (firstByte < 128) {
          codePoint = firstByte;
        }
        break;
      case 2:
        secondByte = this.data[this.pos + 1];
        if ((secondByte & 192) === 128) {
          tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
          if (tempCodePoint > 127) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 3:
        secondByte = this.data[this.pos + 1];
        thirdByte = this.data[this.pos + 2];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
          if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 4:
        secondByte = this.data[this.pos + 1];
        thirdByte = this.data[this.pos + 2];
        fourthByte = this.data[this.pos + 3];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
          if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
            codePoint = tempCodePoint;
          }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        chars.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      chars.push(codePoint);
      this.pos += bytesPerSequence;
    };
    while (!this.done()) {
      const ch = this.ch();
      let ch1;
      switch (ch) {
      case 92:
        this.pos++;
        if (this.done()) {
          throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected string termination at position ${ this.pos }`);
        }
        ch1 = this.ch();
        this.pos++;
        switch (ch1) {
        case 34:
        case 39:
        case 92:
        case 47:
          chars.push(ch1);
          break;
        case 98:
          chars.push(8);
          break;
        case 116:
          chars.push(9);
          break;
        case 110:
          chars.push(10);
          break;
        case 102:
          chars.push(12);
          break;
        case 114:
          chars.push(13);
          break;
        case 117:
          chars.push(readu4());
          break;
        default:
          throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected string escape character at position ${ this.pos }`);
        }
        break;
      case 34:
        this.pos++;
        return new lib_token/* Token */.W(lib_token/* Type */.D.string, (0,byte_utils/* decodeCodePointsArray */.Pu)(chars), this.pos - startPos);
      default:
        if (ch < 32) {
          throw new Error(`${ common/* decodeErrPrefix */.IR } invalid control character at position ${ this.pos }`);
        } else if (ch < 128) {
          chars.push(ch);
          this.pos++;
        } else {
          readUtf8Char();
        }
      }
    }
    throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected end of string at position ${ this.pos }`);
  }
  parseValue() {
    switch (this.ch()) {
    case 123:
      this.modeStack.push('obj-start');
      this.pos++;
      return new lib_token/* Token */.W(lib_token/* Type */.D.map, Infinity, 1);
    case 91:
      this.modeStack.push('array-start');
      this.pos++;
      return new lib_token/* Token */.W(lib_token/* Type */.D.array, Infinity, 1);
    case 34: {
        return this.parseString();
      }
    case 110:
      this.expect([
        110,
        117,
        108,
        108
      ]);
      return new lib_token/* Token */.W(lib_token/* Type */.D.null, null, 4);
    case 102:
      this.expect([
        102,
        97,
        108,
        115,
        101
      ]);
      return new lib_token/* Token */.W(lib_token/* Type */.D.false, false, 5);
    case 116:
      this.expect([
        116,
        114,
        117,
        101
      ]);
      return new lib_token/* Token */.W(lib_token/* Type */.D.true, true, 4);
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.parseNumber();
    default:
      throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected character at position ${ this.pos }`);
    }
  }
  next() {
    this.skipWhitespace();
    switch (this.currentMode()) {
    case 'value':
      this.modeStack.pop();
      return this.parseValue();
    case 'array-value': {
        this.modeStack.pop();
        if (this.ch() === 93) {
          this.pos++;
          this.skipWhitespace();
          return new lib_token/* Token */.W(lib_token/* Type */.D.break, undefined, 1);
        }
        if (this.ch() !== 44) {
          throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected character at position ${ this.pos }, was expecting array delimiter but found '${ String.fromCharCode(this.ch()) }'`);
        }
        this.pos++;
        this.modeStack.push('array-value');
        this.skipWhitespace();
        return this.parseValue();
      }
    case 'array-start': {
        this.modeStack.pop();
        if (this.ch() === 93) {
          this.pos++;
          this.skipWhitespace();
          return new lib_token/* Token */.W(lib_token/* Type */.D.break, undefined, 1);
        }
        this.modeStack.push('array-value');
        this.skipWhitespace();
        return this.parseValue();
      }
    case 'obj-key':
      if (this.ch() === 125) {
        this.modeStack.pop();
        this.pos++;
        this.skipWhitespace();
        return new lib_token/* Token */.W(lib_token/* Type */.D.break, undefined, 1);
      }
      if (this.ch() !== 44) {
        throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected character at position ${ this.pos }, was expecting object delimiter but found '${ String.fromCharCode(this.ch()) }'`);
      }
      this.pos++;
      this.skipWhitespace();
    case 'obj-start': {
        this.modeStack.pop();
        if (this.ch() === 125) {
          this.pos++;
          this.skipWhitespace();
          return new lib_token/* Token */.W(lib_token/* Type */.D.break, undefined, 1);
        }
        const token = this.parseString();
        this.skipWhitespace();
        if (this.ch() !== 58) {
          throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected character at position ${ this.pos }, was expecting key/value delimiter ':' but found '${ String.fromCharCode(this.ch()) }'`);
        }
        this.pos++;
        this.modeStack.push('obj-value');
        return token;
      }
    case 'obj-value': {
        this.modeStack.pop();
        this.modeStack.push('obj-key');
        this.skipWhitespace();
        return this.parseValue();
      }
    default:
      throw new Error(`${ common/* decodeErrPrefix */.IR } unexpected parse state at position ${ this.pos }; this shouldn't happen`);
    }
  }
}
function decode_decode(data, options) {
  options = Object.assign({ tokenizer: new Tokenizer(data, options) }, options);
  return (0,decode/* decode */.Jx)(data, options);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/cborg@1.10.1/node_modules/cborg/esm/lib/json/json.js




/***/ }),

/***/ 74613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JN: () => (/* binding */ quickEncodeToken),
/* harmony export */   PS: () => (/* binding */ quick),
/* harmony export */   cW: () => (/* binding */ jump)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83657);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87474);
/* harmony import */ var _1negint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15876);
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60606);
/* harmony import */ var _3string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16608);
/* harmony import */ var _4array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83374);
/* harmony import */ var _5map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36572);
/* harmony import */ var _6tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63967);
/* harmony import */ var _7float_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30819);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15279);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(141);











function invalidMinor(data, pos, minor) {
  throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_9__/* .decodeErrPrefix */ .IR } encountered invalid minor (${ minor }) for major ${ data[pos] >>> 5 }`);
}
function errorer(msg) {
  return () => {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_9__/* .decodeErrPrefix */ .IR } ${ msg }`);
  };
}
const jump = [];
for (let i = 0; i <= 23; i++) {
  jump[i] = invalidMinor;
}
jump[24] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeUint8 */ .Km;
jump[25] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeUint16 */ .Zh;
jump[26] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeUint32 */ .cs;
jump[27] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeUint64 */ .uN;
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;
for (let i = 32; i <= 55; i++) {
  jump[i] = invalidMinor;
}
jump[56] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeNegint8 */ .yr;
jump[57] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeNegint16 */ .r0;
jump[58] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeNegint32 */ .wy;
jump[59] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeNegint64 */ .ec;
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;
for (let i = 64; i <= 87; i++) {
  jump[i] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeBytesCompact */ .Ii;
}
jump[88] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeBytes8 */ .UQ;
jump[89] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeBytes16 */ .BS;
jump[90] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeBytes32 */ .zU;
jump[91] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeBytes64 */ .ME;
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer('indefinite length bytes/strings are not supported');
for (let i = 96; i <= 119; i++) {
  jump[i] = _3string_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeStringCompact */ .nt;
}
jump[120] = _3string_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeString8 */ .Bq;
jump[121] = _3string_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeString16 */ .h;
jump[122] = _3string_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeString32 */ .q0;
jump[123] = _3string_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeString64 */ .bc;
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer('indefinite length bytes/strings are not supported');
for (let i = 128; i <= 151; i++) {
  jump[i] = _4array_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeArrayCompact */ .Ju;
}
jump[152] = _4array_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeArray8 */ .h7;
jump[153] = _4array_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeArray16 */ .OC;
jump[154] = _4array_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeArray32 */ .lY;
jump[155] = _4array_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeArray64 */ .a8;
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = _4array_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeArrayIndefinite */ .s5;
for (let i = 160; i <= 183; i++) {
  jump[i] = _5map_js__WEBPACK_IMPORTED_MODULE_6__/* .decodeMapCompact */ ._K;
}
jump[184] = _5map_js__WEBPACK_IMPORTED_MODULE_6__/* .decodeMap8 */ .G;
jump[185] = _5map_js__WEBPACK_IMPORTED_MODULE_6__/* .decodeMap16 */ .qe;
jump[186] = _5map_js__WEBPACK_IMPORTED_MODULE_6__/* .decodeMap32 */ .IY;
jump[187] = _5map_js__WEBPACK_IMPORTED_MODULE_6__/* .decodeMap64 */ .F2;
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = _5map_js__WEBPACK_IMPORTED_MODULE_6__/* .decodeMapIndefinite */ .ng;
for (let i = 192; i <= 215; i++) {
  jump[i] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__/* .decodeTagCompact */ .qJ;
}
jump[216] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__/* .decodeTag8 */ .ZR;
jump[217] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__/* .decodeTag16 */ .CF;
jump[218] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__/* .decodeTag32 */ .vP;
jump[219] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__/* .decodeTag64 */ .MV;
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;
for (let i = 224; i <= 243; i++) {
  jump[i] = errorer('simple values are not supported');
}
jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = _7float_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeUndefined */ .h1;
jump[248] = errorer('simple values are not supported');
jump[249] = _7float_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeFloat16 */ .mW;
jump[250] = _7float_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeFloat32 */ .GI;
jump[251] = _7float_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeFloat64 */ .vV;
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = _7float_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeBreak */ .y7;
const quick = [];
for (let i = 0; i < 24; i++) {
  quick[i] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.uint, i, 1);
}
for (let i = -1; i >= -24; i--) {
  quick[31 - i] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint, i, 1);
}
quick[64] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.bytes, new Uint8Array(0), 1);
quick[96] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.string, '', 1);
quick[128] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.array, 0, 1);
quick[160] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.map, 0, 1);
quick[244] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.false, false, 1);
quick[245] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.true, true, 1);
quick[246] = new _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .W(_token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.null, null, 1);
function quickEncodeToken(token) {
  switch (token.type) {
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.false:
    return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([244]);
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.true:
    return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([245]);
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.null:
    return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([246]);
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.bytes:
    if (!token.value.length) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([64]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.string:
    if (token.value === '') {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([96]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.array:
    if (token.value === 0) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([128]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.map:
    if (token.value === 0) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([160]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.uint:
    if (token.value < 24) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([Number(token.value)]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .D.negint:
    if (token.value >= -24) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromArray */ .nI)([31 - Number(token.value)]);
    }
  }
}

/***/ }),

/***/ 83657:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Type),
/* harmony export */   W: () => (/* binding */ Token)
/* harmony export */ });
class Type {
  constructor(major, name, terminal) {
    this.major = major;
    this.majorEncoded = major << 5;
    this.name = name;
    this.terminal = terminal;
  }
  toString() {
    return `Type[${ this.major }].${ this.name }`;
  }
  compare(typ) {
    return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
  }
}
Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false);
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);
class Token {
  constructor(type, value, encodedLength) {
    this.type = type;
    this.value = value;
    this.encodedLength = encodedLength;
    this.encodedBytes = undefined;
    this.byteValue = undefined;
  }
  toString() {
    return `Token[${ this.type }].${ this.value }`;
  }
}


/***/ })

}]);
//# sourceMappingURL=chunk.npm.cborg.js.map