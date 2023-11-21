(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8547],{

/***/ 69070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];
const Bytes = __webpack_require__(5093);
const Nat = __webpack_require__(24662);
const elliptic = __webpack_require__(46067);
const rlp = __webpack_require__(6390);
const secp256k1 = new elliptic.ec("secp256k1"); // eslint-disable-line
const { keccak256, keccak256s } = __webpack_require__(29683);

const create = entropy => {
  const innerHex = keccak256(Bytes.concat(Bytes.random(32), entropy || Bytes.random(32)));
  const middleHex = Bytes.concat(Bytes.concat(Bytes.random(32), innerHex), Bytes.random(32));
  const outerHex = keccak256(middleHex);
  return fromPrivate(outerHex);
};

const toChecksum = address => {
  const addressHash = keccak256s(address.slice(2));
  let checksumAddress = "0x";
  for (let i = 0; i < 40; i++) checksumAddress += parseInt(addressHash[i + 2], 16) > 7 ? address[i + 2].toUpperCase() : address[i + 2];
  return checksumAddress;
};

const fromPrivate = privateKey => {
  const buffer = new Buffer(privateKey.slice(2), "hex");
  const ecKey = secp256k1.keyFromPrivate(buffer);
  const publicKey = "0x" + ecKey.getPublic(false, 'hex').slice(2);
  const publicHash = keccak256(publicKey);
  const address = toChecksum("0x" + publicHash.slice(-40));
  return {
    address: address,
    privateKey: privateKey
  };
};

const encodeSignature = ([v, r, s]) => Bytes.flatten([r, s, v]);

const decodeSignature = hex => [Bytes.slice(64, Bytes.length(hex), hex), Bytes.slice(0, 32, hex), Bytes.slice(32, 64, hex)];

const makeSigner = addToV => (hash, privateKey) => {
  const signature = secp256k1.keyFromPrivate(new Buffer(privateKey.slice(2), "hex")).sign(new Buffer(hash.slice(2), "hex"), { canonical: true });
  return encodeSignature([Nat.fromString(Bytes.fromNumber(addToV + signature.recoveryParam)), Bytes.pad(32, Bytes.fromNat("0x" + signature.r.toString(16))), Bytes.pad(32, Bytes.fromNat("0x" + signature.s.toString(16)))]);
};

const sign = makeSigner(27); // v=27|28 instead of 0|1...

const recover = (hash, signature) => {
  const vals = decodeSignature(signature);
  const vrs = { v: Bytes.toNumber(vals[0]), r: vals[1].slice(2), s: vals[2].slice(2) };
  const ecPublicKey = secp256k1.recoverPubKey(new Buffer(hash.slice(2), "hex"), vrs, vrs.v < 2 ? vrs.v : 1 - vrs.v % 2); // because odd vals mean v=0... sadly that means v=0 means v=1... I hate that
  const publicKey = "0x" + ecPublicKey.encode("hex", false).slice(2);
  const publicHash = keccak256(publicKey);
  const address = toChecksum("0x" + publicHash.slice(-40));
  return address;
};

module.exports = {
  create,
  toChecksum,
  fromPrivate,
  sign,
  makeSigner,
  recover,
  encodeSignature,
  decodeSignature
};

/***/ }),

/***/ 48002:
/***/ ((module) => {

const generate = (num, fn) => {
  let a = [];
  for (var i = 0; i < num; ++i) a.push(fn(i));
  return a;
};

const replicate = (num, val) => generate(num, () => val);

const concat = (a, b) => a.concat(b);

const flatten = a => {
  let r = [];
  for (let j = 0, J = a.length; j < J; ++j) for (let i = 0, I = a[j].length; i < I; ++i) r.push(a[j][i]);
  return r;
};

const chunksOf = (n, a) => {
  let b = [];
  for (let i = 0, l = a.length; i < l; i += n) b.push(a.slice(i, i + n));
  return b;
};

module.exports = {
  generate,
  replicate,
  concat,
  flatten,
  chunksOf
};

/***/ }),

/***/ 5093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const A = __webpack_require__(48002);

const at = (bytes, index) => parseInt(bytes.slice(index * 2 + 2, index * 2 + 4), 16);

const random = bytes => {
  let rnd;
  if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) rnd = window.crypto.getRandomValues(new Uint8Array(bytes));else if (true) rnd = (__webpack_require__(49562).randomBytes)(bytes);else {}
  let hex = "0x";
  for (let i = 0; i < bytes; ++i) hex += ("00" + rnd[i].toString(16)).slice(-2);
  return hex;
};

const length = a => (a.length - 2) / 2;

const flatten = a => "0x" + a.reduce((r, s) => r + s.slice(2), "");

const slice = (i, j, bs) => "0x" + bs.slice(i * 2 + 2, j * 2 + 2);

const reverse = hex => {
  let rev = "0x";
  for (let i = 0, l = length(hex); i < l; ++i) {
    rev += hex.slice((l - i) * 2, (l - i + 1) * 2);
  }
  return rev;
};

const pad = (l, hex) => hex.length === l * 2 + 2 ? hex : pad(l, "0x" + "0" + hex.slice(2));

const padRight = (l, hex) => hex.length === l * 2 + 2 ? hex : padRight(l, hex + "0");

const toArray = hex => {
  let arr = [];
  for (let i = 2, l = hex.length; i < l; i += 2) arr.push(parseInt(hex.slice(i, i + 2), 16));
  return arr;
};

const fromArray = arr => {
  let hex = "0x";
  for (let i = 0, l = arr.length; i < l; ++i) {
    let b = arr[i];
    hex += (b < 16 ? "0" : "") + b.toString(16);
  }
  return hex;
};

const toUint8Array = hex => new Uint8Array(toArray(hex));

const fromUint8Array = arr => fromArray([].slice.call(arr, 0));

const fromNumber = num => {
  let hex = num.toString(16);
  return hex.length % 2 === 0 ? "0x" + hex : "0x0" + hex;
};

const toNumber = hex => parseInt(hex.slice(2), 16);

const concat = (a, b) => a.concat(b.slice(2));

const fromNat = bn => bn === "0x0" ? "0x" : bn.length % 2 === 0 ? bn : "0x0" + bn.slice(2);

const toNat = bn => bn[2] === "0" ? "0x" + bn.slice(3) : bn;

const fromAscii = ascii => {
  let hex = "0x";
  for (let i = 0; i < ascii.length; ++i) hex += ("00" + ascii.charCodeAt(i).toString(16)).slice(-2);
  return hex;
};

const toAscii = hex => {
  let ascii = "";
  for (let i = 2; i < hex.length; i += 2) ascii += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
  return ascii;
};

// From https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
const fromString = s => {
  const makeByte = uint8 => {
    const b = uint8.toString(16);
    return b.length < 2 ? "0" + b : b;
  };
  let bytes = "0x";
  for (let ci = 0; ci != s.length; ci++) {
    let c = s.charCodeAt(ci);
    if (c < 128) {
      bytes += makeByte(c);
      continue;
    }
    if (c < 2048) {
      bytes += makeByte(c >> 6 | 192);
    } else {
      if (c > 0xd7ff && c < 0xdc00) {
        if (++ci == s.length) return null;
        let c2 = s.charCodeAt(ci);
        if (c2 < 0xdc00 || c2 > 0xdfff) return null;
        c = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
        bytes += makeByte(c >> 18 | 240);
        bytes += makeByte(c >> 12 & 63 | 128);
      } else {
        // c <= 0xffff
        bytes += makeByte(c >> 12 | 224);
      }
      bytes += makeByte(c >> 6 & 63 | 128);
    }
    bytes += makeByte(c & 63 | 128);
  }
  return bytes;
};

const toString = bytes => {
  let s = '';
  let i = 0;
  let l = length(bytes);
  while (i < l) {
    let c = at(bytes, i++);
    if (c > 127) {
      if (c > 191 && c < 224) {
        if (i >= l) return null;
        c = (c & 31) << 6 | at(bytes, i) & 63;
      } else if (c > 223 && c < 240) {
        if (i + 1 >= l) return null;
        c = (c & 15) << 12 | (at(bytes, i) & 63) << 6 | at(bytes, ++i) & 63;
      } else if (c > 239 && c < 248) {
        if (i + 2 >= l) return null;
        c = (c & 7) << 18 | (at(bytes, i) & 63) << 12 | (at(bytes, ++i) & 63) << 6 | at(bytes, ++i) & 63;
      } else return null;
      ++i;
    }
    if (c <= 0xffff) s += String.fromCharCode(c);else if (c <= 0x10ffff) {
      c -= 0x10000;
      s += String.fromCharCode(c >> 10 | 0xd800);
      s += String.fromCharCode(c & 0x3FF | 0xdc00);
    } else return null;
  }
  return s;
};

module.exports = {
  random,
  length,
  concat,
  flatten,
  slice,
  reverse,
  pad,
  padRight,
  fromAscii,
  toAscii,
  fromString,
  toString,
  fromNumber,
  toNumber,
  fromNat,
  toNat,
  fromArray,
  toArray,
  fromUint8Array,
  toUint8Array
};

/***/ }),

/***/ 29683:
/***/ ((module) => {

// This was ported from https://github.com/emn178/js-sha3, with some minor
// modifications and pruning. It is licensed under MIT:
//
// Copyright 2015-2016 Chen, Yi-Cyuan
//  
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const HEX_CHARS = '0123456789abcdef'.split('');
const KECCAK_PADDING = [1, 256, 65536, 16777216];
const SHIFT = [0, 8, 16, 24];
const RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

const Keccak = bits => ({
  blocks: [],
  reset: true,
  block: 0,
  start: 0,
  blockCount: 1600 - (bits << 1) >> 5,
  outputBlocks: bits >> 5,
  s: (s => [].concat(s, s, s, s, s))([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
});

const update = (state, message) => {
  var length = message.length,
      blocks = state.blocks,
      byteCount = state.blockCount << 2,
      blockCount = state.blockCount,
      outputBlocks = state.outputBlocks,
      s = state.s,
      index = 0,
      i,
      code;

  // update
  while (index < length) {
    if (state.reset) {
      state.reset = false;
      blocks[0] = state.block;
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    if (typeof message !== "string") {
      for (i = state.start; index < length && i < byteCount; ++index) {
        blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
      }
    } else {
      for (i = state.start; index < length && i < byteCount; ++index) {
        code = message.charCodeAt(index);
        if (code < 0x80) {
          blocks[i >> 2] |= code << SHIFT[i++ & 3];
        } else if (code < 0x800) {
          blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
        } else if (code < 0xd800 || code >= 0xe000) {
          blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
        } else {
          code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
          blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
        }
      }
    }
    state.lastByteIndex = i;
    if (i >= byteCount) {
      state.start = i - byteCount;
      state.block = blocks[blockCount];
      for (i = 0; i < blockCount; ++i) {
        s[i] ^= blocks[i];
      }
      f(s);
      state.reset = true;
    } else {
      state.start = i;
    }
  }

  // finalize
  i = state.lastByteIndex;
  blocks[i >> 2] |= KECCAK_PADDING[i & 3];
  if (state.lastByteIndex === byteCount) {
    blocks[0] = blocks[blockCount];
    for (i = 1; i < blockCount + 1; ++i) {
      blocks[i] = 0;
    }
  }
  blocks[blockCount - 1] |= 0x80000000;
  for (i = 0; i < blockCount; ++i) {
    s[i] ^= blocks[i];
  }
  f(s);

  // toString
  var hex = '',
      i = 0,
      j = 0,
      block;
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      block = s[i];
      hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F] + HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F] + HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F] + HEX_CHARS[block >> 28 & 0x0F] + HEX_CHARS[block >> 24 & 0x0F];
    }
    if (j % blockCount === 0) {
      f(s);
      i = 0;
    }
  }
  return "0x" + hex;
};

const f = s => {
  var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

  for (n = 0; n < 48; n += 2) {
    c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
    c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
    c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
    c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
    c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
    c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
    c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
    c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
    c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
    c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

    h = c8 ^ (c2 << 1 | c3 >>> 31);
    l = c9 ^ (c3 << 1 | c2 >>> 31);
    s[0] ^= h;
    s[1] ^= l;
    s[10] ^= h;
    s[11] ^= l;
    s[20] ^= h;
    s[21] ^= l;
    s[30] ^= h;
    s[31] ^= l;
    s[40] ^= h;
    s[41] ^= l;
    h = c0 ^ (c4 << 1 | c5 >>> 31);
    l = c1 ^ (c5 << 1 | c4 >>> 31);
    s[2] ^= h;
    s[3] ^= l;
    s[12] ^= h;
    s[13] ^= l;
    s[22] ^= h;
    s[23] ^= l;
    s[32] ^= h;
    s[33] ^= l;
    s[42] ^= h;
    s[43] ^= l;
    h = c2 ^ (c6 << 1 | c7 >>> 31);
    l = c3 ^ (c7 << 1 | c6 >>> 31);
    s[4] ^= h;
    s[5] ^= l;
    s[14] ^= h;
    s[15] ^= l;
    s[24] ^= h;
    s[25] ^= l;
    s[34] ^= h;
    s[35] ^= l;
    s[44] ^= h;
    s[45] ^= l;
    h = c4 ^ (c8 << 1 | c9 >>> 31);
    l = c5 ^ (c9 << 1 | c8 >>> 31);
    s[6] ^= h;
    s[7] ^= l;
    s[16] ^= h;
    s[17] ^= l;
    s[26] ^= h;
    s[27] ^= l;
    s[36] ^= h;
    s[37] ^= l;
    s[46] ^= h;
    s[47] ^= l;
    h = c6 ^ (c0 << 1 | c1 >>> 31);
    l = c7 ^ (c1 << 1 | c0 >>> 31);
    s[8] ^= h;
    s[9] ^= l;
    s[18] ^= h;
    s[19] ^= l;
    s[28] ^= h;
    s[29] ^= l;
    s[38] ^= h;
    s[39] ^= l;
    s[48] ^= h;
    s[49] ^= l;

    b0 = s[0];
    b1 = s[1];
    b32 = s[11] << 4 | s[10] >>> 28;
    b33 = s[10] << 4 | s[11] >>> 28;
    b14 = s[20] << 3 | s[21] >>> 29;
    b15 = s[21] << 3 | s[20] >>> 29;
    b46 = s[31] << 9 | s[30] >>> 23;
    b47 = s[30] << 9 | s[31] >>> 23;
    b28 = s[40] << 18 | s[41] >>> 14;
    b29 = s[41] << 18 | s[40] >>> 14;
    b20 = s[2] << 1 | s[3] >>> 31;
    b21 = s[3] << 1 | s[2] >>> 31;
    b2 = s[13] << 12 | s[12] >>> 20;
    b3 = s[12] << 12 | s[13] >>> 20;
    b34 = s[22] << 10 | s[23] >>> 22;
    b35 = s[23] << 10 | s[22] >>> 22;
    b16 = s[33] << 13 | s[32] >>> 19;
    b17 = s[32] << 13 | s[33] >>> 19;
    b48 = s[42] << 2 | s[43] >>> 30;
    b49 = s[43] << 2 | s[42] >>> 30;
    b40 = s[5] << 30 | s[4] >>> 2;
    b41 = s[4] << 30 | s[5] >>> 2;
    b22 = s[14] << 6 | s[15] >>> 26;
    b23 = s[15] << 6 | s[14] >>> 26;
    b4 = s[25] << 11 | s[24] >>> 21;
    b5 = s[24] << 11 | s[25] >>> 21;
    b36 = s[34] << 15 | s[35] >>> 17;
    b37 = s[35] << 15 | s[34] >>> 17;
    b18 = s[45] << 29 | s[44] >>> 3;
    b19 = s[44] << 29 | s[45] >>> 3;
    b10 = s[6] << 28 | s[7] >>> 4;
    b11 = s[7] << 28 | s[6] >>> 4;
    b42 = s[17] << 23 | s[16] >>> 9;
    b43 = s[16] << 23 | s[17] >>> 9;
    b24 = s[26] << 25 | s[27] >>> 7;
    b25 = s[27] << 25 | s[26] >>> 7;
    b6 = s[36] << 21 | s[37] >>> 11;
    b7 = s[37] << 21 | s[36] >>> 11;
    b38 = s[47] << 24 | s[46] >>> 8;
    b39 = s[46] << 24 | s[47] >>> 8;
    b30 = s[8] << 27 | s[9] >>> 5;
    b31 = s[9] << 27 | s[8] >>> 5;
    b12 = s[18] << 20 | s[19] >>> 12;
    b13 = s[19] << 20 | s[18] >>> 12;
    b44 = s[29] << 7 | s[28] >>> 25;
    b45 = s[28] << 7 | s[29] >>> 25;
    b26 = s[38] << 8 | s[39] >>> 24;
    b27 = s[39] << 8 | s[38] >>> 24;
    b8 = s[48] << 14 | s[49] >>> 18;
    b9 = s[49] << 14 | s[48] >>> 18;

    s[0] = b0 ^ ~b2 & b4;
    s[1] = b1 ^ ~b3 & b5;
    s[10] = b10 ^ ~b12 & b14;
    s[11] = b11 ^ ~b13 & b15;
    s[20] = b20 ^ ~b22 & b24;
    s[21] = b21 ^ ~b23 & b25;
    s[30] = b30 ^ ~b32 & b34;
    s[31] = b31 ^ ~b33 & b35;
    s[40] = b40 ^ ~b42 & b44;
    s[41] = b41 ^ ~b43 & b45;
    s[2] = b2 ^ ~b4 & b6;
    s[3] = b3 ^ ~b5 & b7;
    s[12] = b12 ^ ~b14 & b16;
    s[13] = b13 ^ ~b15 & b17;
    s[22] = b22 ^ ~b24 & b26;
    s[23] = b23 ^ ~b25 & b27;
    s[32] = b32 ^ ~b34 & b36;
    s[33] = b33 ^ ~b35 & b37;
    s[42] = b42 ^ ~b44 & b46;
    s[43] = b43 ^ ~b45 & b47;
    s[4] = b4 ^ ~b6 & b8;
    s[5] = b5 ^ ~b7 & b9;
    s[14] = b14 ^ ~b16 & b18;
    s[15] = b15 ^ ~b17 & b19;
    s[24] = b24 ^ ~b26 & b28;
    s[25] = b25 ^ ~b27 & b29;
    s[34] = b34 ^ ~b36 & b38;
    s[35] = b35 ^ ~b37 & b39;
    s[44] = b44 ^ ~b46 & b48;
    s[45] = b45 ^ ~b47 & b49;
    s[6] = b6 ^ ~b8 & b0;
    s[7] = b7 ^ ~b9 & b1;
    s[16] = b16 ^ ~b18 & b10;
    s[17] = b17 ^ ~b19 & b11;
    s[26] = b26 ^ ~b28 & b20;
    s[27] = b27 ^ ~b29 & b21;
    s[36] = b36 ^ ~b38 & b30;
    s[37] = b37 ^ ~b39 & b31;
    s[46] = b46 ^ ~b48 & b40;
    s[47] = b47 ^ ~b49 & b41;
    s[8] = b8 ^ ~b0 & b2;
    s[9] = b9 ^ ~b1 & b3;
    s[18] = b18 ^ ~b10 & b12;
    s[19] = b19 ^ ~b11 & b13;
    s[28] = b28 ^ ~b20 & b22;
    s[29] = b29 ^ ~b21 & b23;
    s[38] = b38 ^ ~b30 & b32;
    s[39] = b39 ^ ~b31 & b33;
    s[48] = b48 ^ ~b40 & b42;
    s[49] = b49 ^ ~b41 & b43;

    s[0] ^= RC[n];
    s[1] ^= RC[n + 1];
  }
};

const keccak = bits => str => {
  var msg;
  if (str.slice(0, 2) === "0x") {
    msg = [];
    for (var i = 2, l = str.length; i < l; i += 2) msg.push(parseInt(str.slice(i, i + 2), 16));
  } else {
    msg = str;
  }
  return update(Keccak(bits, bits), msg);
};

module.exports = {
  keccak256: keccak(256),
  keccak512: keccak(512),
  keccak256s: keccak(256),
  keccak512s: keccak(512)
};

/***/ }),

/***/ 24662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const BN = __webpack_require__(73117);
const Bytes = __webpack_require__(5093);

const fromBN = bn => "0x" + bn.toString("hex");

const toBN = str => new BN(str.slice(2), 16);

const fromString = str => {
  const bn = "0x" + (str.slice(0, 2) === "0x" ? new BN(str.slice(2), 16) : new BN(str, 10)).toString("hex");
  return bn === "0x0" ? "0x" : bn;
};

const toEther = wei => toNumber(div(wei, fromString("10000000000"))) / 100000000;

const fromEther = eth => mul(fromNumber(Math.floor(eth * 100000000)), fromString("10000000000"));

const toString = a => toBN(a).toString(10);

const fromNumber = a => typeof a === "string" ? /^0x/.test(a) ? a : "0x" + a : "0x" + new BN(a).toString("hex");

const toNumber = a => toBN(a).toNumber();

const toUint256 = a => Bytes.pad(32, a);

const bin = method => (a, b) => fromBN(toBN(a)[method](toBN(b)));

const add = bin("add");
const mul = bin("mul");
const div = bin("div");
const sub = bin("sub");

module.exports = {
  toString,
  fromString,
  toNumber,
  fromNumber,
  toEther,
  fromEther,
  toUint256,
  add,
  mul,
  div,
  sub
};

/***/ }),

/***/ 6390:
/***/ ((module) => {

// The RLP format
// Serialization and deserialization for the BytesTree type, under the following grammar:
// | First byte | Meaning                                                                    |
// | ---------- | -------------------------------------------------------------------------- |
// | 0   to 127 | HEX(leaf)                                                                  |
// | 128 to 183 | HEX(length_of_leaf + 128) + HEX(leaf)                                      |
// | 184 to 191 | HEX(length_of_length_of_leaf + 128 + 55) + HEX(length_of_leaf) + HEX(leaf) |
// | 192 to 247 | HEX(length_of_node + 192) + HEX(node)                                      |
// | 248 to 255 | HEX(length_of_length_of_node + 128 + 55) + HEX(length_of_node) + HEX(node) |

const encode = tree => {
  const padEven = str => str.length % 2 === 0 ? str : "0" + str;

  const uint = num => padEven(num.toString(16));

  const length = (len, add) => len < 56 ? uint(add + len) : uint(add + uint(len).length / 2 + 55) + uint(len);

  const dataTree = tree => {
    if (typeof tree === "string") {
      const hex = tree.slice(2);
      const pre = hex.length != 2 || hex >= "80" ? length(hex.length / 2, 128) : "";
      return pre + hex;
    } else {
      const hex = tree.map(dataTree).join("");
      const pre = length(hex.length / 2, 192);
      return pre + hex;
    }
  };

  return "0x" + dataTree(tree);
};

const decode = hex => {
  let i = 2;

  const parseTree = () => {
    if (i >= hex.length) throw "";
    const head = hex.slice(i, i + 2);
    return head < "80" ? (i += 2, "0x" + head) : head < "c0" ? parseHex() : parseList();
  };

  const parseLength = () => {
    const len = parseInt(hex.slice(i, i += 2), 16) % 64;
    return len < 56 ? len : parseInt(hex.slice(i, i += (len - 55) * 2), 16);
  };

  const parseHex = () => {
    const len = parseLength();
    return "0x" + hex.slice(i, i += len * 2);
  };

  const parseList = () => {
    const lim = parseLength() * 2 + i;
    let list = [];
    while (i < lim) list.push(parseTree());
    return list;
  };

  try {
    return parseTree();
  } catch (e) {
    return [];
  }
};

module.exports = { encode, decode };

/***/ })

}]);
//# sourceMappingURL=npm.eth-lib.js.map