"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2503],{

/***/ 59300:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c3: () => (/* reexport */ AlgorithmVersion),
  xO: () => (/* reexport */ DEFAULT_MASK),
  Ft: () => (/* reexport */ GrayscaleAlgorithm),
  zl: () => (/* reexport */ TransformAlgorithm),
  Jx: () => (/* binding */ decode),
  cv: () => (/* binding */ dom_encode),
  KX: () => (/* reexport */ getImageType)
});

// UNUSED EXPORTS: CLI_NAME, DEFAULT_ALGORITHM_VERSION, DEFAULT_COPIES, DEFAULT_CROP_EDGE_PIXELS, DEFAULT_EXHAUST_PIXELS, DEFAULT_FAKE_MASK_PIXELS, DEFAULT_NARROW, DEFAULT_PARAM_COPIES, DEFAULT_SIZE, DEFAULT_TOLERANCE, MAX_TOLERANCE, MAX_WIDTH, SEED, TOLERANCE_NOT_SET

// NAMESPACE OBJECT: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v1/index.js
var v1_namespaceObject = {};
__webpack_require__.r(v1_namespaceObject);
__webpack_require__.d(v1_namespaceObject, {
  decode: () => (decodeImg),
  encode: () => (encode)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v2/index.js
var v2_namespaceObject = {};
__webpack_require__.r(v2_namespaceObject);
__webpack_require__.d(v2_namespaceObject, {
  decode: () => (stego_decodeImg),
  encode: () => (v2_encode)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/stego-params.js
var AlgorithmVersion;
(function (AlgorithmVersion) {
    AlgorithmVersion["V1"] = "V1";
    AlgorithmVersion["V2"] = "V2";
})(AlgorithmVersion = AlgorithmVersion || (AlgorithmVersion = {}));

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/helper.js
function helper_clamp(v, min, max) {
    if (v < min)
        return min;
    if (v > max)
        return max;
    return v;
}
function hash(input) {
    let code = 0;
    if (input.length === 0)
        return code;
    for (let i = 0; i < input.length; i += 1) {
        const char = input.charCodeAt(i);
        code = (code << 5) - code + char;
        code = code & code; // Convert to 32bit integer
    }
    return code;
}
function hashCode(input, mod, inArray) {
    let prob = 1;
    const code = hash(input);
    let index = Math.abs(code) % mod;
    while (inArray[index]) {
        index = (index + prob * prob) % mod;
        prob = prob > mod / 2 ? 1 : prob + 1;
    }
    inArray[index] = 1;
    return [index, String(code)];
}
function shuffleGroupBy3(numbers, seed, unshuffle = false) {
    const shuffleHelper = new Array(numbers.length / 3).fill(0).map((v, i) => i);
    shuffle(shuffleHelper, seed, unshuffle);
    const shuffleRes = new Array(numbers.length)
        .fill(0)
        .map((v, i) => numbers[3 * shuffleHelper[Math.floor(i / 3)] + (i % 3)]);
    numbers.forEach((v, i) => {
        numbers[i] = shuffleRes[i];
    });
}
function unshuffleGroupBy3(numbers, seed) {
    return shuffleGroupBy3(numbers, seed, true);
}
function shuffle(numbers, seed, unshuffle = false) {
    const swap = (a, b) => {
        ;
        [numbers[a], numbers[b]] = [numbers[b], numbers[a]];
    };
    for (let i = unshuffle ? numbers.length - 1 : 0; (unshuffle && i >= 0) || (!unshuffle && i < numbers.length); i += unshuffle ? -1 : 1) {
        swap(seed[i % seed.length] % numbers.length, i);
    }
}
function filterIndices(size, predicator) {
    const indices = [];
    for (let i = 0; i < size * size; i += 1) {
        if (predicator(i)) {
            indices.push(i);
        }
    }
    return indices;
}
function squareCircleIntersect(size, radius) {
    const mid = (size + 1) / 2 - 1;
    return filterIndices(size, (i) => {
        const x = Math.floor(i / size);
        const y = i % size;
        return Math.sqrt(Math.pow(mid - x, 2) + Math.pow(mid - y, 2)) <= radius;
    });
}
function isJPEG(buf) {
    if (!buf || buf.length < 3) {
        return false;
    }
    return buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
}
function isPNG(buf) {
    if (!buf || buf.length < 8) {
        return false;
    }
    return (buf[0] === 0x89 &&
        buf[1] === 0x50 &&
        buf[2] === 0x4e &&
        buf[3] === 0x47 &&
        buf[4] === 0x0d &&
        buf[5] === 0x0a &&
        buf[6] === 0x1a &&
        buf[7] === 0x0a);
}
function getImageType(buf) {
    if (isJPEG(buf)) {
        return 'image/jpeg';
    }
    else if (isPNG(buf)) {
        return 'image/png';
    }
    return undefined;
}
function randomBits(randomSource, size) {
    const arr = [];
    const alignedSize = Math.min(Math.ceil(size / 8), 65536);
    for (const number of randomSource(new Uint8Array(alignedSize))) {
        ;
        arr.push((number >> 0) & 1, (number >> 1) & 1, (number >> 2) & 1, (number >> 3) & 1, (number >> 4) & 1, (number >> 5) & 1, (number >> 6) & 1, (number >> 7) & 1);
    }
    if (arr.length > size)
        arr.length = size;
    if (alignedSize * 8 < size)
        return arr.concat(randomBits(randomSource, size - alignedSize * 8));
    return arr;
}
/**
 * generate a number from range [min, max] (both inclusive)
 */
function rand(randomSource, min, max) {
    const value = new Uint32Array(randomSource(new Uint8Array(4)).buffer);
    const zero_one = value[0] / 256 ** 4;
    return Math.floor(zero_one * (max - min + 1) + min);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/grayscale.js

// more grayscale algorithm:
// http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/
var GrayscaleAlgorithm;
(function (GrayscaleAlgorithm) {
    GrayscaleAlgorithm["NONE"] = "NONE";
    GrayscaleAlgorithm["AVERAGE"] = "AVG";
    GrayscaleAlgorithm["LUMINANCE"] = "LUMA";
    GrayscaleAlgorithm["LUMINANCE_II"] = "LUMA_II";
    GrayscaleAlgorithm["DESATURATION"] = "DESATURATION";
    GrayscaleAlgorithm["MAX_DECOMPOSITION"] = "MAX_DE";
    GrayscaleAlgorithm["MIN_DECOMPOSITION"] = "MIN_DE";
    GrayscaleAlgorithm["MID_DECOMPOSITION"] = "MID_DE";
    GrayscaleAlgorithm["SIGNLE_R"] = "R";
    GrayscaleAlgorithm["SIGNLE_G"] = "G";
    GrayscaleAlgorithm["SIGNLE_B"] = "B";
})(GrayscaleAlgorithm = GrayscaleAlgorithm || (GrayscaleAlgorithm = {}));
function grayscale(r, g, b, algorithm) {
    switch (algorithm) {
        case GrayscaleAlgorithm.AVERAGE:
            return (r + g + b) / 3;
        case GrayscaleAlgorithm.LUMINANCE:
            return r * 0.3 + g * 0.59 + b * 0.11;
        case GrayscaleAlgorithm.LUMINANCE_II:
            return r * 0.2126 + g * 0.7152 + b * 0.0722;
        case GrayscaleAlgorithm.DESATURATION:
            return (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
        case GrayscaleAlgorithm.MAX_DECOMPOSITION:
            return Math.max(r, g, b);
        case GrayscaleAlgorithm.MIN_DECOMPOSITION:
            return Math.min(r, g, b);
        case GrayscaleAlgorithm.MID_DECOMPOSITION:
            return [r, g, b].sort()[1];
        case GrayscaleAlgorithm.SIGNLE_R:
            return r;
        case GrayscaleAlgorithm.SIGNLE_G:
            return g;
        case GrayscaleAlgorithm.SIGNLE_B:
            return b;
        default:
            return 0;
    }
}
function shades(r, g, b, size) {
    const factor = 255 / (clamp(size, 2, 256) - 1);
    return Math.floor((r + g + b) / 3 / factor + 0.5) * factor;
}
function narrow(gray, size) {
    return helper_clamp(Math.round(gray), size, 255 - size);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/fft/index.js
/// fft.js
// core operations
let _n = 0; // order
let _bitrev; // bit reversal table
let _cstb; // sin/cos table
function init(n) {
    if (n !== 0 && (n & (n - 1)) === 0) {
        _n = n;
        _initArray();
        _makeBitReversalTable();
        _makeCosSinTable();
    }
    else {
        throw new Error('init: radix-2 required');
    }
}
// 1D-FFT
function fft1d(re, im) {
    fft(re, im, 1);
}
// 1D-IFFT
function ifft1d(re, im) {
    const n = 1 / _n;
    fft(re, im, -1);
    for (let i = 0; i < _n; i += 1) {
        re[i] *= n;
        im[i] *= n;
    }
}
// 2D-FFT
function fft2d(re, im) {
    const tre = [];
    const tim = [];
    let i = 0;
    // x-axis
    for (let y = 0; y < _n; y += 1) {
        i = y * _n;
        for (let x1 = 0; x1 < _n; x1 += 1) {
            tre[x1] = re[x1 + i];
            tim[x1] = im[x1 + i];
        }
        fft1d(tre, tim);
        for (let x2 = 0; x2 < _n; x2 += 1) {
            re[x2 + i] = tre[x2];
            im[x2 + i] = tim[x2];
        }
    }
    // y-axis
    for (let x = 0; x < _n; x += 1) {
        for (let y1 = 0; y1 < _n; y1 += 1) {
            i = x + y1 * _n;
            tre[y1] = re[i];
            tim[y1] = im[i];
        }
        fft1d(tre, tim);
        for (let y2 = 0; y2 < _n; y2 += 1) {
            i = x + y2 * _n;
            re[i] = tre[y2];
            im[i] = tim[y2];
        }
    }
}
// 2D-IFFT
function ifft2d(re, im) {
    const tre = [];
    const tim = [];
    let i = 0;
    // x-axis
    for (let y = 0; y < _n; y += 1) {
        i = y * _n;
        for (let x1 = 0; x1 < _n; x1 += 1) {
            tre[x1] = re[x1 + i];
            tim[x1] = im[x1 + i];
        }
        ifft1d(tre, tim);
        for (let x2 = 0; x2 < _n; x2 += 1) {
            re[x2 + i] = tre[x2];
            im[x2 + i] = tim[x2];
        }
    }
    // y-axis
    for (let x = 0; x < _n; x += 1) {
        for (let y1 = 0; y1 < _n; y1 += 1) {
            i = x + y1 * _n;
            tre[y1] = re[i];
            tim[y1] = im[i];
        }
        ifft1d(tre, tim);
        for (let y2 = 0; y2 < _n; y2 += 1) {
            i = x + y2 * _n;
            re[i] = tre[y2];
            im[i] = tim[y2];
        }
    }
}
function fft(re, im, inv) {
    let d, h, ik, m, tmp, wr, wi, xr, xi;
    const n4 = _n >> 2;
    // bit reversal
    for (let l = 0; l < _n; l += 1) {
        m = _bitrev[l];
        if (l < m) {
            tmp = re[l];
            re[l] = re[m];
            re[m] = tmp;
            tmp = im[l];
            im[l] = im[m];
            im[m] = tmp;
        }
    }
    // butterfly operation
    for (let k = 1; k < _n; k <<= 1) {
        h = 0;
        d = _n / (k << 1);
        for (let j = 0; j < k; j += 1) {
            wr = _cstb[h + n4];
            wi = inv * _cstb[h];
            for (let i = j; i < _n; i += k << 1) {
                ik = i + k;
                xr = wr * re[ik] + wi * im[ik];
                xi = wr * im[ik] - wi * re[ik];
                re[ik] = re[i] - xr;
                re[i] += xr;
                im[ik] = im[i] - xi;
                im[i] += xi;
            }
            h += d;
        }
    }
}
function _initArray() {
    _bitrev = new Uint8Array(_n);
    _cstb = new Float64Array(_n * 1.25);
}
function _makeBitReversalTable() {
    let i = 0, j = 0, k = 0;
    _bitrev[0] = 0;
    while ((i += 1) < _n) {
        k = _n >> 1;
        while (k <= j) {
            j -= k;
            k >>= 1;
        }
        j += k;
        _bitrev[i] = j;
    }
}
function _makeCosSinTable() {
    const n2 = _n >> 1, n4 = _n >> 2, n8 = _n >> 3, n2p4 = n2 + n4;
    let t = Math.sin(Math.PI / _n), dc = 2 * t * t, ds = Math.sqrt(dc * (2 - dc)), c = (_cstb[n4] = 1), s = (_cstb[0] = 0);
    t = 2 * dc;
    for (let i = 1; i < n8; i += 1) {
        c -= dc;
        dc += t * c;
        s += ds;
        ds -= t * s;
        _cstb[i] = s;
        _cstb[n4 - i] = c;
    }
    if (n8 !== 0) {
        _cstb[n8] = Math.sqrt(0.5);
    }
    for (let j = 0; j < n4; j += 1) {
        _cstb[n2 - j] = _cstb[j];
    }
    for (let k = 0; k < n2p4; k += 1) {
        _cstb[k + n2] = -_cstb[k];
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/dct/index.js
// MORE:
// https://en.wikipedia.org/wiki/JPEG
const ONE_SQUARE_ROOT_OF_TWO = 1 / Math.sqrt(2);
// type-II DCT
function dct(numbers, size = 8) {
    const coefficients = [];
    for (let v = 0; v < size; v += 1) {
        for (let u = 0; u < size; u += 1) {
            const au = u === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
            const av = v === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
            let sum = 0;
            for (let y = 0; y < size; y += 1) {
                for (let x = 0; x < size; x += 1) {
                    sum +=
                        numbers[y * size + x] *
                            Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
                            Math.cos(((2 * y + 1) * v * Math.PI) / 16);
                }
            }
            coefficients.push((sum * au * av) / 4);
        }
    }
    // in-place update
    for (let i = 0; i < coefficients.length; i += 1) {
        numbers[i] = coefficients[i];
    }
}
// type-III DCT
function idct(coefficients, size = 8) {
    const numbers = [];
    for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
            let sum = 0;
            for (let v = 0; v < size; v += 1) {
                for (let u = 0; u < size; u += 1) {
                    const au = u === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
                    const av = v === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
                    sum +=
                        au *
                            av *
                            coefficients[v * size + u] *
                            Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
                            Math.cos(((2 * y + 1) * v * Math.PI) / 16);
                }
            }
            numbers.push(sum / 4);
        }
    }
    // in-place update
    for (let i = 0; i < numbers.length; i += 1) {
        coefficients[i] = numbers[i];
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/dct/fastdct.js
/*
 * Fast discrete cosine transform algorithms (TypeScript)
 *
 * Copyright (c) 2020 Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/fast-discrete-cosine-transform-algorithms
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */
// DCT type II, unscaled. Algorithm by Byeong Gi Lee, 1984.
// See: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34
function transform(vector) {
    const n = vector.length;
    if (n <= 0 || (n & (n - 1)) !== 0)
        throw 'Length must be power of 2';
    transformInternal(vector, 0, n, new Float64Array(n));
}
function transformInternal(vector, off, len, temp) {
    if (len === 1)
        return;
    const halfLen = Math.floor(len / 2);
    for (let i = 0; i < halfLen; i += 1) {
        const x = vector[off + i];
        const y = vector[off + len - 1 - i];
        temp[off + i] = x + y;
        temp[off + i + halfLen] = (x - y) / (Math.cos(((i + 0.5) * Math.PI) / len) * 2);
    }
    transformInternal(temp, off, halfLen, vector);
    transformInternal(temp, off + halfLen, halfLen, vector);
    for (let i = 0; i < halfLen - 1; i += 1) {
        vector[off + i * 2 + 0] = temp[off + i];
        vector[off + i * 2 + 1] = temp[off + i + halfLen] + temp[off + i + halfLen + 1];
    }
    vector[off + len - 2] = temp[off + halfLen - 1];
    vector[off + len - 1] = temp[off + len - 1];
}
// DCT type III, unscaled. Algorithm by Byeong Gi Lee, 1984.
// See: https://www.nayuki.io/res/fast-discrete-cosine-transform-algorithms/lee-new-algo-discrete-cosine-transform.pdf
function inverseTransform(vector) {
    const n = vector.length;
    if (n <= 0 || (n & (n - 1)) !== 0)
        throw 'Length must be power of 2';
    vector[0] /= 2;
    inverseTransformInternal(vector, 0, n, new Float64Array(n));
    // scale
    for (var i = 0; i < vector.length; i += 1)
        vector[i] /= vector.length / 2.0;
}
function inverseTransformInternal(vector, off, len, temp) {
    if (len === 1)
        return;
    const halfLen = Math.floor(len / 2);
    temp[off + 0] = vector[off + 0];
    temp[off + halfLen] = vector[off + 1];
    for (let i = 1; i < halfLen; i += 1) {
        temp[off + i] = vector[off + i * 2];
        temp[off + i + halfLen] = vector[off + i * 2 - 1] + vector[off + i * 2 + 1];
    }
    inverseTransformInternal(temp, off, halfLen, vector);
    inverseTransformInternal(temp, off + halfLen, halfLen, vector);
    for (let i = 0; i < halfLen; i += 1) {
        const x = temp[off + i];
        const y = temp[off + i + halfLen] / (Math.cos(((i + 0.5) * Math.PI) / len) * 2);
        vector[off + i] = x + y;
        vector[off + len - 1 - i] = x - y;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/transform.js



var TransformAlgorithm;
(function (TransformAlgorithm) {
    TransformAlgorithm["FFT1D"] = "FFT1D";
    TransformAlgorithm["FFT2D"] = "FFT2D";
    TransformAlgorithm["DCT"] = "DCT";
    TransformAlgorithm["FastDCT"] = "fastDCT";
})(TransformAlgorithm = TransformAlgorithm || (TransformAlgorithm = {}));
function transform_transform(re, im, algorithm, { size }) {
    switch (algorithm) {
        case TransformAlgorithm.FFT1D:
            init(size);
            fft1d(re, im);
            break;
        case TransformAlgorithm.FFT2D:
            init(size);
            fft2d(re, im);
            break;
        case TransformAlgorithm.DCT:
            dct(re, size);
            break;
        case TransformAlgorithm.FastDCT:
            transform(re);
            break;
        default:
            throw new Error(`unknown algorithm in transform: ${algorithm}`);
    }
}
function transform_inverseTransform(re, im, algorithm, { size }) {
    switch (algorithm) {
        case TransformAlgorithm.FFT1D:
            init(size);
            ifft1d(re, im);
            break;
        case TransformAlgorithm.FFT2D:
            init(size);
            ifft2d(re, im);
            break;
        case TransformAlgorithm.DCT:
            idct(re, size);
            break;
        case TransformAlgorithm.FastDCT:
            inverseTransform(re);
            break;
        default:
            throw new Error(`unknown algorithm in inverseTransform: ${algorithm}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/locator.js
/**
 * Locator to coord of top left pixel inside block
 * @param locator
 * @param options
 */
function loc2coord({ p, w }, { size }) {
    return [(p % Math.floor(w / size)) * size, Math.floor(p / Math.floor(w / size)) * size];
}
/**
 * Locator to pixel index
 * @param locator
 * @param options
 * @param x1 x coord of top left pixel inside block
 * @param y1 y coord of top left pixel inside block
 * @param index the index of pixel inside block
 */
function loc2idx({ w, c }, { size }, x1, y1, index) {
    const x2 = index % size;
    const y2 = Math.floor(index / size);
    return ((y1 + y2) * w + x1 + x2) * 4 + c;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js
var dist = __webpack_require__(30804);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/constant.js


const CLI_NAME = 'stego-js';
const MAX_WIDTH = 1960;
const DEFAULT_NARROW = 0;
const DEFAULT_COPIES = 3;
const DEFAULT_PARAM_COPIES = 9;
const DEFAULT_SIZE = 8;
const TOLERANCE_NOT_SET = (/* unused pure expression or super */ null && (-1));
const DEFAULT_TOLERANCE = Object.freeze({
    [AlgorithmVersion.V1]: {
        [TransformAlgorithm.DCT]: 100,
        [TransformAlgorithm.FastDCT]: 500,
        [TransformAlgorithm.FFT1D]: 128,
        [TransformAlgorithm.FFT2D]: 500,
    },
    [AlgorithmVersion.V2]: {
        [TransformAlgorithm.DCT]: 10,
        [TransformAlgorithm.FastDCT]: 100,
        [TransformAlgorithm.FFT1D]: 30,
        [TransformAlgorithm.FFT2D]: 150,
    },
});
const MAX_TOLERANCE = Object.freeze({
    [TransformAlgorithm.DCT]: 5000,
    [TransformAlgorithm.FastDCT]: 5000,
    [TransformAlgorithm.FFT1D]: 5000,
    [TransformAlgorithm.FFT2D]: 50000,
});
const DEFAULT_FAKE_MASK_PIXELS = false;
const DEFAULT_EXHAUST_PIXELS = true;
const DEFAULT_CROP_EDGE_PIXELS = true;
const DEFAULT_ALGORITHM_VERSION = AlgorithmVersion.V2;
const DEFAULT_MASK = Object.freeze([
    137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202,
    0, 0, 0, 1, 115, 82, 71, 66, 1, 217, 201, 44, 127, 0, 0, 0, 9, 112, 72, 89, 115, 0, 0, 11, 19, 0, 0, 11, 19, 1, 0,
    154, 156, 24, 0, 0, 0, 3, 80, 76, 84, 69, 255, 255, 255, 167, 196, 27, 200, 0, 0, 0, 10, 73, 68, 65, 84, 120, 156, 99,
    96, 0, 0, 0, 2, 0, 1, 72, 175, 164, 113, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130,
]);
const SEED = Object.freeze([
    76221, 13388, 20800, 80672, 15974, 87005, 71203, 84444, 16928, 51335, 94092, 83586, 37656, 2240, 26283, 1887, 93419,
    96857, 20866, 21797, 42065, 39781, 50192, 24399, 98969, 54274, 38815, 45159, 36824,
]);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/image.js





function preprocessImage(imageData, getScaled) {
    if (imageData.width <= MAX_WIDTH && imageData.height <= MAX_WIDTH)
        return imageData;
    const scale = MAX_WIDTH / Math.max(imageData.width, imageData.height);
    const [w, h] = [imageData.width * scale, imageData.height * scale];
    const scaled = getScaled(w, h);
    if (scaled) {
        (0,dist/* lanczos */.m6)(imageData, scaled);
        return scaled;
    }
    else
        return imageData;
}
function cropImg({ width, height }, { size }) {
    return [Math.floor(width / size) * size, Math.floor(height / size) * size];
}
function* divideImg({ width, height, data }, { size, verbose }) {
    for (let h = 0; h < height; h += size) {
        for (let w = 0; w < width; w += size) {
            if (h + size <= height && w + size <= width) {
                for (let c = 0; c < 3; c += 1) {
                    const block = [];
                    for (let h1 = 0; h1 < size; h1 += 1) {
                        for (let w1 = 0; w1 < size; w1 += 1) {
                            block[h1 * size + w1] = data[((h + h1) * width + w + w1) * 4 + c];
                        }
                    }
                    if (verbose)
                        console.warn('height: ' + h + ' width: ' + w);
                    yield block;
                }
            }
        }
    }
}
function visitImgByPixel(imgData, visitor) {
    const { width, height, data } = imgData;
    for (let i = 0; i < width * height; i += 1) {
        const p = i * 4;
        visitor([data[p], data[p + 1], data[p + 2], data[p + 3]], p, imgData);
    }
}
function visitImgByBlock(imgData, options, visitor) {
    const { width: w, height: h } = imgData;
    let c = 0;
    let p = 0;
    let b = 0;
    for (const block of divideImg(imgData, options)) {
        const bitConsumed = visitor(block, { c, p, b, w, h }, imgData);
        c += 1;
        if (bitConsumed) {
            b += 1;
        }
        if (c === 3) {
            p += 1;
            c = 0;
        }
    }
}
function updateImgByPixel(imgData, updater) {
    visitImgByPixel(imgData, (pixel, loc) => updateImgByPixelAt(imgData.data, updater(pixel, loc), loc));
}
function updateImgByBlock(imgData, options, updater) {
    visitImgByBlock(imgData, options, (block, loc) => {
        const bitConsumed = updater(block, loc, imgData);
        if (bitConsumed) {
            updateImgByBlockAt(imgData.data, options, block, loc);
            if (options.verbose) {
                console.warn('inversed block: ' + block);
                const im = new Array(options.size * options.size);
                transform_transform(block, im.fill(0), options.transformAlgorithm, options);
                console.warn(block[25], block[18]);
            }
        }
        return bitConsumed;
    });
}
function updateImgByPixelChannelAt(imgData, loc, channel, value) {
    const { data } = imgData;
    data[loc + channel] = value;
}
function updateImgByPixelAt(data, pixel, loc) {
    data[loc + 0] = pixel[0];
    data[loc + 1] = pixel[1];
    data[loc + 2] = pixel[2];
    data[loc + 3] = pixel[3];
}
function updateImgByBlockAt(data, options, block, loc) {
    const { size } = options;
    const [x1, y1] = loc2coord(loc, options);
    for (let i = 0; i < size * size; i += 1) {
        block[i] = helper_clamp(Math.round(block[i]), 0, 255);
        data[loc2idx(loc, options, x1, y1, i)] = block[i];
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v1/position.js


function createAcc({ size, transformAlgorithm }) {
    switch (transformAlgorithm) {
        case TransformAlgorithm.FFT1D:
            return {
                prevPos: -1,
                prevCode: '',
                indices: squareCircleIntersect(size, 3),
            };
        default:
            return {
                prevPos: -1,
                prevCode: '',
                indices: [],
            };
    }
}
function getPosFromAcc(acc, { c }, { pass }) {
    const { prevCode, prevPos, indices } = acc;
    if (c !== 0) {
        return prevPos;
    }
    const [index, code] = hashCode(`${pass}_${prevCode}`, indices.length, []);
    acc.prevCode = code;
    acc.prevPos = indices[index];
    return indices[index];
}
function getPos(acc, loc, options) {
    const { pass, size, transformAlgorithm } = options;
    switch (transformAlgorithm) {
        case TransformAlgorithm.FFT1D:
            return pass ? getPosFromAcc(acc, loc, options) : (size * size + size) / 2;
        case TransformAlgorithm.FFT2D:
        case TransformAlgorithm.DCT:
        case TransformAlgorithm.FastDCT:
            return 0;
        default:
            throw new Error(`unknown algorithm: ${transformAlgorithm}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v1/bit.js

function str2bits(text, copies) {
    const chars = Array.from(text);
    const bits = [];
    const pushByte = (byte, n) => {
        for (let i = 0; i < 8; i += 1) {
            let j = 0;
            while (j < n) {
                bits.push(byte[i]);
                j += 1;
            }
        }
    };
    for (let i = 0; i < chars.length; i += 1) {
        const codes = Array.from(encodeURI(chars[i]));
        for (let j = 0; j < codes.length; j += 1) {
            const byte = [];
            let reminder = 0;
            let code = codes[j].charCodeAt(0);
            do {
                reminder = (code % 2);
                byte.push(reminder);
                code = code - Math.floor(code / 2) - reminder;
            } while (code > 1);
            byte.push(code);
            while (byte.length < 8) {
                byte.push(0);
            }
            pushByte(byte.reverse(), copies);
        }
    }
    return bits;
}
function bits2str(bits, copies) {
    let k = 128;
    let temp = 0;
    const chars = [];
    const candidates = [];
    const elect = () => (candidates.filter((c) => c === 1).length >= copies / 2 ? 1 : 0);
    for (let i = 0; i < bits.length; i += 1) {
        candidates.push(bits[i]);
        if (candidates.length === copies) {
            temp += elect() * k;
            k /= 2;
            candidates.length = 0;
            // end of message
            if (temp === 255) {
                break;
            }
            if (k < 1) {
                chars.push(String.fromCharCode(temp));
                temp = 0;
                k = 128;
            }
        }
    }
    try {
        return decodeURI(chars.join(''));
    }
    catch (e) {
        return '';
    }
}
function mergeBits(dest, ...src) {
    let k = 0;
    for (let i = 0; i < src.length; i += 1) {
        const bits = src[i];
        for (let j = 0; j < bits.length && k < dest.length; j += 1, k += 1) {
            dest[k] = bits[j];
        }
    }
    return dest;
}
function getBit(block, acc, loc, options) {
    const pos = getPos(acc, loc, options);
    const { tolerance } = options;
    return Math.abs(Math.round(block[pos] / tolerance) % 2);
}
function setBit(block, bits, acc, loc, options) {
    const pos = getPos(acc, loc, options);
    const { tolerance } = options;
    const v = Math.floor(block[pos] / tolerance);
    if (bits[loc.b]) {
        block[pos] = v % 2 === 1 ? v * tolerance : (v + 1) * tolerance;
    }
    else {
        block[pos] = v % 2 === 1 ? (v - 1) * tolerance : v * tolerance;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/mask.js

function isBlockVisibleAt(data, loc, options) {
    const { size } = options;
    const _loc = {
        ...loc,
        c: 0, // mask is a gray image since only red red was read
    };
    const [x1, y1] = loc2coord(_loc, options);
    for (let i = 0; i < size * size; i += 1) {
        const value = data[loc2idx(_loc, options, x1, y1, i)];
        if (typeof value !== 'undefined' && value < 127) {
            return false;
        }
    }
    return true;
}
function isPixelVisibleAt(data, loc) {
    return typeof data[loc] === 'undefined' || data[loc] > 127;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v1/stego.js








async function encodeImg(imgData, maskData, options, defaultRandomSource) {
    const { text, size, narrow: narrowSize, copies, grayscaleAlgorithm, transformAlgorithm, exhaustPixels } = options;
    const [width, height] = cropImg(imgData, options);
    const sizeOfBlocks = width * height * 3;
    const textBits = str2bits(text, copies);
    const randomSource = options.randomSource || defaultRandomSource;
    const bits = mergeBits(randomBits(randomSource, exhaustPixels ? sizeOfBlocks : textBits.length + 8 * copies), textBits, Array(8 * copies).fill(1));
    if (textBits.length + 8 * copies > sizeOfBlocks) {
        /* stdin */ null.write('bits overflow! try to shrink text or reduce copies.\n');
    }
    if (grayscaleAlgorithm !== GrayscaleAlgorithm.NONE || narrowSize > 0) {
        updateImgByPixel(imgData, ([r, g, b, a], loc) => {
            if (!isPixelVisibleAt(maskData, loc)) {
                return [r, g, b, a];
            }
            // decolor
            if (grayscaleAlgorithm !== GrayscaleAlgorithm.NONE) {
                const y = grayscale(r, g, b, grayscaleAlgorithm);
                r = y;
                g = y;
                b = y;
            }
            // narrow color value
            if (narrowSize > 0) {
                r = narrow(r, narrowSize);
                g = narrow(g, narrowSize);
                b = narrow(b, narrowSize);
            }
            return [r, g, b, a];
        });
    }
    const acc = createAcc(options);
    const im = new Array(size * size);
    updateImgByBlock(imgData, options, (block, loc) => {
        if (!exhaustPixels && loc.b >= bits.length) {
            return false;
        }
        if (!isBlockVisibleAt(maskData, loc, options)) {
            if (options.fakeMaskPixels && loc.c === 0) {
                const [x, y] = loc2coord(loc, options);
                const g = rand(randomSource, 10, 127);
                updateImgByPixelAt(imgData.data, [g, g, g, 255], loc2idx(loc, options, x, y, rand(randomSource, 0, 64)));
            }
            return false;
        }
        transform_transform(block, im.fill(0), transformAlgorithm, options);
        setBit(block, bits, acc, loc, options);
        transform_inverseTransform(block, im, transformAlgorithm, options);
        return true;
    });
    return imgData;
}
async function decodeImg(imgData, maskData, options) {
    const { size, copies, transformAlgorithm } = options;
    const bits = [];
    const acc = createAcc(options);
    const im = new Array(size * size);
    visitImgByBlock(imgData, options, (block, loc) => {
        if (!isBlockVisibleAt(maskData, loc, options)) {
            return false;
        }
        transform_transform(block, im.fill(0), transformAlgorithm, options);
        bits.push(getBit(block, acc, loc, options));
        return true;
    });
    return bits2str(bits, copies);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v1/index.js



async function encode(imgData, maskData, options, defaultRandomSource) {
    const { width, height } = imgData;
    const [cropWidth, cropHeight] = cropImg(imgData, options);
    return {
        data: await encodeImg(imgData, maskData, options, defaultRandomSource),
        width: options.cropEdgePixels ? cropWidth : width,
        height: options.cropEdgePixels ? cropHeight : height,
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v2/position.js

function position_getPos(options) {
    const { size, transformAlgorithm } = options;
    switch (transformAlgorithm) {
        case TransformAlgorithm.FFT1D:
            return [3 * size + 1, 2 * size + 2];
        case TransformAlgorithm.FFT2D:
            return [3 * size + 1, 2 * size + 2];
        case TransformAlgorithm.DCT:
            return [3 * size + 1, 2 * size + 2];
        case TransformAlgorithm.FastDCT:
            return [3 * size + 1, 2 * size + 2];
        default:
            const _ = transformAlgorithm;
            throw new Error(`unknown algorithm in getPos: ${transformAlgorithm}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v2/bit.js



function gray_code(n) {
    return n ^ (n >> 1);
}
const URIchars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'J',
    'H',
    'I',
    'G',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '-',
    '.',
    '_',
    '!',
    '~',
    '*',
    "'",
    '(',
    ')',
    ';',
    ',',
    '/',
    '?',
    ':',
    '@',
    '&',
    '=',
    '+',
    '$',
    '%',
];
const URIcharCode = URIchars.map((c, i) => gray_code(2 * i));
function char2code(c) {
    return URIchars.indexOf(c) !== -1 ? URIcharCode[URIchars.indexOf(c)] : 255;
}
function code2char(c) {
    return URIcharCode.indexOf(c) !== -1 ? URIchars[URIcharCode.indexOf(c)] : '';
}
function str2codes(text) {
    const codes = [];
    Array.from(text).map((char) => {
        const URIcodes = Array.from(encodeURI(char));
        URIcodes.map((URIcode) => codes.push(URIcharCode[URIchars.indexOf(URIcode)]));
    });
    return codes;
}
function codes2bits(codes, copies) {
    const bits = [];
    const pushByte = (byte, n) => {
        for (let i = 0; i < 8; i += 1) {
            let j = 0;
            while (j < n) {
                bits.push(byte[i]);
                j += 1;
            }
        }
    };
    codes.map((code) => {
        const byte = [];
        let reminder = 0;
        do {
            reminder = (code % 2);
            byte.push(reminder);
            code = code - Math.floor(code / 2) - reminder;
        } while (code > 1);
        byte.push(code);
        while (byte.length < 8) {
            byte.push(0);
        }
        pushByte(byte.reverse(), 3 * Math.ceil(copies / 3));
    });
    return bits;
}
function bit_str2bits(text, copies) {
    const codes = str2codes(text);
    return codes2bits(codes, copies);
}
function correctCharCode(rawCode, charCodes, verbose) {
    if (verbose) {
        const bits = rawCode.map((bits) => bits.map((richBits) => richBits.bit));
        const diffs = rawCode.map((bits) => bits.map((richBits) => richBits.diff));
        console.warn('[debug][rawcode] bits: ' + bits + '\n' + diffs);
    }
    let code = rawCode
        .slice()
        .reverse()
        .reduce((res, richBits, id) => {
        // correct raw bit
        const copies = richBits.length;
        const nBit1 = richBits.filter((c) => c.bit === 1).length;
        if (nBit1 === 0)
            return res;
        if (nBit1 !== copies) {
            const conditionalSum = (richBits, v) => richBits.reduce((res, e) => (e.bit === v ? res + e.diff : res), 0);
            const diff1 = Math.abs(conditionalSum(richBits, 1)) / nBit1;
            const diff0 = Math.abs(conditionalSum(richBits, 0)) / (copies - nBit1);
            if (verbose) {
                console.warn('diff1: ' + diff1 + ' diff0: ' + diff1);
            }
            if (diff1 > 2 * diff0 || nBit1 > copies / 2)
                // bit 1
                res += 1 << id;
        }
        else {
            res += 1 << id;
        }
        // done
        return res;
    }, 0);
    if (code !== 255 && URIcharCode.indexOf(code) === -1) {
        const percentChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].map((c) => char2code(c));
        const l = charCodes.length;
        let inPercent = false;
        if ((l > 1 && charCodes[l - 1] === char2code('%')) || (l > 2 && charCodes[l - 2] === char2code('%')))
            inPercent = true;
        const countBit1 = (n) => {
            let count = 0;
            while (n) {
                count += n & 1;
                n >>= 1;
            }
            return count;
        };
        code = URIcharCode.reduce((res, c) => {
            if (inPercent) {
                if (percentChars.indexOf(c) === -1)
                    return res;
                else if (percentChars.indexOf(res) === -1)
                    return c;
            }
            const dec2byte = (dec) => {
                const byte = Array.from(dec.toString(2));
                while (byte.length < 8) {
                    byte.splice(0, 0, '0');
                }
                return byte.map((n) => Number(n));
            };
            const diff = (rawCode, comp) => {
                const compBits = dec2byte(comp);
                let bitDiff = 0;
                let paramDiff = 0;
                const w = [0.45, 0.35, 0.2];
                for (let i = 0; i < rawCode.length; i += 1) {
                    const rbit = rawCode[i].filter((c) => c.bit === 1).length;
                    const absbitDiff = Math.abs(rbit - compBits[i] * rawCode[i].length);
                    bitDiff += absbitDiff;
                    paramDiff += rawCode[i].reduce((diff, b, bitId) => (b.bit !== compBits[i] ? Math.abs(b.diff) * w[bitId % 3] + diff : diff), 0);
                }
                // paramDiff /= bitDiff;
                if (verbose) {
                    console.warn(comp +
                        ' ' +
                        code2char(comp) +
                        ' ' +
                        compBits +
                        ' bit difference: ' +
                        bitDiff +
                        ' param difference: ' +
                        paramDiff +
                        '\n');
                }
                return [bitDiff, paramDiff];
            };
            if (countBit1(code ^ res) < countBit1(code ^ c))
                return res;
            else if (countBit1(code ^ res) > countBit1(code ^ c))
                return c;
            else {
                const [resDiff, cDiff] = [diff(rawCode, res), diff(rawCode, c)];
                if (resDiff[1] < cDiff[1])
                    return res;
                else if (resDiff[1] > cDiff[1])
                    return c;
                else {
                    if (resDiff[0] < cDiff[0])
                        return res;
                    else
                        return c;
                }
            }
        }, 255);
    }
    if (verbose) {
        const bits = rawCode.map((bits) => bits.map((richBits) => richBits.bit));
        const diffs = rawCode.map((bits) => bits.map((richBits) => richBits.diff));
        console.warn('elected ' + code + ' (' + code2char(code) + ') with bits: ' + bits + '\n' + diffs);
    }
    return code;
}
function bit_bits2str(richBits, copies, verbose) {
    let k = 128;
    let tempCharCode = 0;
    const tempRawBits = [];
    const charCodes = [];
    const candidates = [];
    for (let i = 0; i < richBits.length; i += 1) {
        candidates.push(richBits[i]);
        if (verbose) {
            console.warn('bit: ' + richBits[i].bit);
            console.warn('charId: ' + Math.floor(i / (8 * copies)) + ', bitId: ' + (i % (8 * copies)));
        }
        if (candidates.length === copies) {
            tempRawBits.push(candidates.slice());
            k /= 2;
            candidates.length = 0;
            if (k < 1) {
                tempCharCode = correctCharCode(tempRawBits, charCodes, verbose);
                // end of message
                if (tempCharCode === 255) {
                    break;
                }
                if (verbose) {
                    console.warn('bit index: ' + i + ' char: ' + code2char(tempCharCode) + ' temp: ' + tempCharCode + '\n');
                }
                charCodes.push(tempCharCode);
                tempCharCode = 0;
                tempRawBits.length = 0;
                k = 128;
            }
            if (copies % 3 !== 0) {
                //consume more bits
                i += 3 - (copies % 3);
            }
        }
    }
    if (verbose)
        console.warn('Before correctURI: ' + charCodes);
    const chars = charCodes.map((c) => code2char(c));
    try {
        return decodeURI(chars.join(''));
    }
    catch (e) {
        console.warn('Error when decoding:  ' + e);
        return '';
    }
}
function int2halfbyte(n, copies) {
    // reverse order
    const bytes = Array.from(n.toString(2))
        .reverse()
        .map((n) => Number(n));
    while (bytes.length < 4)
        bytes.push(0);
    const res = [];
    for (let i = 0; i < bytes.length; i += 1) {
        for (let j = 0; j < copies; j += 1) {
            res.push(bytes[i]);
        }
    }
    return res;
}
function halfbyte2int(bits, copies) {
    // bits in reverse order
    let k = 1;
    let temp = 0;
    for (let i = 0; i < bits.length / DEFAULT_PARAM_COPIES; i += 1) {
        const candidates = [];
        for (let j = 0; j < DEFAULT_PARAM_COPIES; j += 1) {
            candidates.push(bits[i * DEFAULT_PARAM_COPIES + j]);
        }
        const elect = () => (candidates.filter((c) => c === 1).length >= DEFAULT_PARAM_COPIES / 2 ? 1 : 0);
        temp += k * elect();
        k <<= 1;
    }
    return temp;
}
function param2bits(options) {
    return int2halfbyte((options.copies - 1) / 2, DEFAULT_PARAM_COPIES); // 4 bit * copies
}
function bits2param(bits) {
    const copies = 1 + halfbyte2int(bits, DEFAULT_PARAM_COPIES) * 2;
    return copies;
}
function bit_mergeBits(dest, ...src) {
    let k = 0;
    for (let i = 0; i < src.length; i += 1) {
        const bits = src[i];
        for (let j = 0; j < bits.length && k < dest.length; j += 1, k += 1) {
            dest[k] = bits[j];
        }
    }
    return dest;
}
function bit_getBit(block, options) {
    const [pos1, pos2] = position_getPos(options);
    if (options.verbose)
        console.warn('decoded value: ', block[pos1], block[pos2]);
    const diff = block[pos1] - block[pos2];
    return { bit: (diff > 0 ? 1 : 0), diff: diff };
}
function bit_setBit(block, bit, options, tolerance) {
    const [pos1, pos2] = position_getPos(options);
    let v1 = block[pos1];
    let v2 = block[pos2];
    const t0 = Math.abs(v1 - v2);
    const t = t0 > 1.5 * tolerance
        ? 0.5 * tolerance
        : t0 < 0.3 * tolerance
            ? 1.5 * tolerance
            : t0 < 0.5 * tolerance
                ? 1.2 * tolerance
                : tolerance;
    [v1, v2] = v1 < v2 ? [v1 - t / 2, v2 + t / 2] : [v1 + t / 2, v2 - t / 2];
    if (options.verbose)
        console.warn('encoded value: ', v1, v2);
    if (bit) {
        //bit '1':  block[pos1] > block[pos2]
        ;
        [block[pos1], block[pos2]] = v1 < v2 ? [v2, v1] : [v1, v2];
        if (options.transformAlgorithm === TransformAlgorithm.FFT2D)
            // coefficients of fft2d are sysmetric to (size - 1 / 2, )
            [block[72 - pos1], block[72 - pos2]] = v1 < v2 ? [v2, v1] : [v1, v2];
    }
    else {
        // bit '0':  block[pos1] < block[pos2]
        ;
        [block[pos1], block[pos2]] = v1 < v2 ? [v1, v2] : [v2, v1];
        if (options.transformAlgorithm === TransformAlgorithm.FFT2D)
            // coefficients of fft2d are sysmetric to (size - 1 / 2, )
            [block[72 - pos1], block[72 - pos2]] = v1 < v2 ? [v1, v2] : [v2, v1];
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v2/stego.js









function getCharfromIdx(idx, copies, text) {
    const charId = Math.floor(idx / (8 * copies));
    const bitId = idx % (8 * copies);
    const codes = Array.from(encodeURI(text));
    if (charId > codes.length)
        return 'OUT_OF_BOUND' + '(charId: ' + charId + ')';
    else
        return codes[charId] + '(charId: ' + charId + ', bitId: ' + bitId + ')';
}
async function stego_encodeImg(imgData, maskData, options, defaultRandomSource) {
    const { text, size, narrow: narrowSize, copies, grayscaleAlgorithm, transformAlgorithm, exhaustPixels } = options;
    const [width, height] = cropImg(imgData, options);
    const sizeOfBlocks = (width * height * 3) / (size * size);
    const textBits = bit_str2bits(text, copies);
    const paramsBits = param2bits(options);
    const randomSource = options.randomSource || defaultRandomSource;
    const bits = bit_mergeBits(randomBits(randomSource, sizeOfBlocks), paramsBits, textBits, Array(8 * copies).fill(1));
    const encodeLen = textBits.length + 8 * copies;
    if (encodeLen > sizeOfBlocks) {
        /* stdin */ null.write('bits overflow! try to shrink text or reduce copies.\n');
    }
    if (grayscaleAlgorithm !== GrayscaleAlgorithm.NONE || narrowSize > 0) {
        updateImgByPixel(imgData, ([r, g, b, a], loc) => {
            if (!isPixelVisibleAt(maskData, loc)) {
                return [r, g, b, a];
            }
            // decolor
            if (grayscaleAlgorithm !== GrayscaleAlgorithm.NONE) {
                const y = grayscale(r, g, b, grayscaleAlgorithm);
                r = y;
                g = y;
                b = y;
            }
            // narrow color value
            if (narrowSize > 0) {
                r = narrow(r, narrowSize);
                g = narrow(g, narrowSize);
                b = narrow(b, narrowSize);
            }
            return [r, g, b, a];
        });
    }
    const im = new Array(size * size);
    let blockId = -1;
    const shuffleArr = new Array(sizeOfBlocks).fill(0).map((v, i) => i);
    shuffleGroupBy3(shuffleArr, SEED); // shuffle by binding 3 blocks together (RGB)
    const encodedId = shuffleArr.map((v, i) => {
        if (i < encodeLen)
            return v;
    });
    updateImgByBlock(imgData, options, (block, loc) => {
        // Remove transparency for PNG. Even though we do not encode alpha channel,
        // the social media compression on transparant image can casue the information loss.
        if (loc.c === 0) {
            const [x, y] = loc2coord(loc, options);
            for (let i = 0; i < size * size; i += 1) {
                const idx = loc2idx(loc, options, x, y, i);
                updateImgByPixelChannelAt(imgData, idx, 3, 255);
            }
        }
        blockId += 1;
        if (!exhaustPixels && !(blockId in encodedId)) {
            return false;
        }
        if (!isBlockVisibleAt(maskData, loc, options)) {
            if (options.fakeMaskPixels && loc.c === 0) {
                const [x, y] = loc2coord(loc, options);
                const g = rand(randomSource, 10, 127);
                updateImgByPixelAt(imgData.data, [g, g, g, 255], loc2idx(loc, options, x, y, rand(randomSource, 0, 64)));
            }
            return false;
        }
        if (options.verbose) {
            console.warn('Encode on image block (blockId: ' + blockId + '): ' + block);
        }
        transform_transform(block, im.fill(0), transformAlgorithm, options);
        const tolerance = () => {
            const x = ((blockId * size) / 3) % loc.w;
            const y = Math.floor((blockId * size) / 3 / loc.w) * size;
            let t = options.tolerance;
            if (x <= 8 || x > loc.w - 2 * size || y <= size || y > loc.h - 2 * size)
                t = 1.5 * t;
            if (options.verbose) {
                console.warn('Encode with tolerance: ' + t + ' (Image size is width: ' + loc.w + ' height:' + loc.h + ')');
            }
            return t;
        };
        const t = tolerance();
        let diff1 = 0;
        let maxRetry = 5;
        while (true) {
            bit_setBit(block, bits[shuffleArr[loc.b]], options, t);
            const [pos1, pos2] = position_getPos(options);
            diff1 = diff1 === 0 ? block[pos1] - block[pos2] : diff1;
            if (options.verbose) {
                const bitOrigin = shuffleArr[loc.b] < paramsBits.length
                    ? 'PARAM_BITS'
                    : getCharfromIdx(shuffleArr[loc.b] - paramsBits.length, copies, text);
                console.warn('Encode bit: ' + bits[shuffleArr[loc.b]] + ' From char: ' + bitOrigin);
                console.warn(block);
            }
            transform_inverseTransform(block, im, transformAlgorithm, options);
            const imgBlock = block.map((v) => (v < 0 ? 0 : v > 255 ? 255 : Math.round(v)));
            transform_transform(imgBlock, im.fill(0), transformAlgorithm, options);
            const newDiff = imgBlock[pos1] - imgBlock[pos2];
            if (options.verbose)
                console.warn('After encode, the params diff is: ' +
                    newDiff +
                    ' (' +
                    imgBlock[pos1] +
                    '-' +
                    imgBlock[pos2] +
                    ') diff1: ' +
                    diff1);
            if (Math.abs(newDiff) < Math.abs(diff1 * 0.8)) {
                if (options.verbose)
                    console.warn('Repeat set bit with tolerance: ' + t + ' (max repeat times: ' + maxRetry + ')');
                if ((maxRetry -= 1) === 0) {
                    break;
                }
                // block = imgBlock;
                for (let i = 0; i < size * size; i += 1)
                    block[i] = imgBlock[i];
                continue;
            }
            break;
        }
        return true;
    });
    return imgData;
}
async function stego_decodeImg(imgData, maskData, options) {
    const { size, transformAlgorithm } = options;
    const richBits = [];
    const im = new Array(size * size);
    const [width, height] = cropImg(imgData, options);
    const sizeOfBlocks = (width * height * 3) / (size * size);
    const shuffleArr = new Array(sizeOfBlocks).fill(0).map((v, i) => i);
    shuffleGroupBy3(shuffleArr, SEED);
    let blockId = 0;
    visitImgByBlock(imgData, options, (block, loc) => {
        if (!isBlockVisibleAt(maskData, loc, options)) {
            return false;
        }
        transform_transform(block, im.fill(0), transformAlgorithm, options);
        if (options.verbose && blockId >= 4 * DEFAULT_PARAM_COPIES) {
            const i = blockId - 4 * DEFAULT_PARAM_COPIES;
            console.warn('charId: ' +
                Math.floor(shuffleArr[i] / (8 * options.copies)) +
                ', bitId: ' +
                (shuffleArr[i] % (8 * options.copies)));
            console.warn('bit: ' + bit_getBit(block, options).bit, block);
        }
        // let { bit, diff } = getBit(block, acc, options);
        richBits.push(bit_getBit(block, options));
        blockId += 1;
        return true;
    });
    unshuffleGroupBy3(richBits, SEED);
    const copiesBits = richBits.slice(0, 4 * DEFAULT_PARAM_COPIES).map((v) => v.bit);
    const copies = bits2param(copiesBits);
    if (options.verbose) {
        console.warn('copies is ' + copies);
    }
    // return bits2str(bits, 3, options.verbose);
    return bit_bits2str(richBits.slice(4 * DEFAULT_PARAM_COPIES), copies, options.verbose);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/v2/index.js



async function v2_encode(imgData, maskData, options, defaultRandomSource) {
    const { width, height } = imgData;
    const [cropWidth, cropHeight] = cropImg(imgData, options);
    return {
        data: await stego_encodeImg(imgData, maskData, options, defaultRandomSource),
        width: options.cropEdgePixels ? cropWidth : width,
        height: options.cropEdgePixels ? cropHeight : height,
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/expose.js



const algorithms = {
    [AlgorithmVersion.V1]: v1_namespaceObject,
    [AlgorithmVersion.V2]: v2_namespaceObject,
};
function createAPI(_) {
    const { preprocessImage, toPNG: toBuffer, toImageData, defaultRandomSource } = _;
    return {
        async encode(image, mask, options) {
            const { data, height, width } = await algorithms[options.version].encode(preprocessImage(await toImageData(image)), preprocessImage(await toImageData(mask)).data, options, defaultRandomSource);
            return toBuffer(data, height, width);
        },
        async decode(image, mask, options) {
            return algorithms[options.version].decode(await toImageData(image), (await toImageData(mask)).data, options);
        },
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/utils/types.js




;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/dom.js






const { encode: dom_encode, decode } = createAPI({
    toImageData(_data) {
        return new Promise((resolve) => {
            const data = new Uint8Array(_data);
            const type = getImageType(data);
            const blob = new Blob([data], { type });
            resolve(getImageData(blob));
        });
    },
    async toPNG(imgData, height = imgData.height, width = imgData.width) {
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');
        context.putImageData(imgData, 0, 0, 0, 0, width, height);
        if (isOffscreenCanvas(canvas)) {
            return canvas.convertToBlob({ type: 'image/png' }).then(toUint8Array);
        }
        else {
            return new Promise((resolve, reject) => {
                canvas.toBlob((blob) => {
                    if (blob)
                        resolve(toUint8Array(blob));
                    else
                        reject(new Error('fail to convert to png'));
                }, 'image/png');
            });
        }
    },
    preprocessImage(data) {
        return preprocessImage(data, (w, h) => createCanvas(w, h).getContext('2d')?.createImageData(w, h) ?? null);
    },
    defaultRandomSource(buffer) {
        return crypto.getRandomValues(buffer);
    },
});
async function toUint8Array(blob) {
    const buffer = await blob.arrayBuffer();
    return new Uint8Array(buffer);
}
function createCanvas(width, height) {
    let canvas;
    if (typeof OffscreenCanvas === 'function') {
        canvas = new OffscreenCanvas(width, height);
    }
    else {
        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
    }
    return canvas;
}
async function getImageData(imageBlob) {
    let width, height;
    let image;
    if (typeof createImageBitmap === 'function') {
        image = await createImageBitmap(imageBlob);
        width = image.width;
        height = image.height;
    }
    else {
        const url = URL.createObjectURL(imageBlob);
        image = await new Promise((resolve, reject) => {
            const element = new Image();
            element.addEventListener('load', () => {
                width = element.width;
                height = element.height;
                resolve(element);
            });
            element.addEventListener('error', reject);
            element.src = url;
        }).finally(() => URL.revokeObjectURL(url));
    }
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, width, height);
}
function isOffscreenCanvas(value) {
    return typeof OffscreenCanvas === 'function' && value instanceof OffscreenCanvas;
}


/***/ })

}]);
//# sourceMappingURL=npm-ns.masknet.stego-js.js.map