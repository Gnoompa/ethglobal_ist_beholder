"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4280],{

/***/ 24280:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPoint: () => (/* binding */ isPoint),
/* harmony export */   isPointCompressed: () => (/* binding */ isPointCompressed),
/* harmony export */   isPrivate: () => (/* binding */ isPrivate),
/* harmony export */   pointCompress: () => (/* binding */ pointCompress)
/* harmony export */ });
/* unused harmony exports __initializeContext, isXOnlyPoint, pointAdd, pointAddScalar, pointFromScalar, xOnlyPointFromScalar, xOnlyPointFromPoint, pointMultiply, privateAdd, privateSub, privateNegate, xOnlyPointAddTweak, xOnlyPointAddTweakCheck, sign, signRecoverable, signSchnorr, verify, recover, verifySchnorr */
/* harmony import */ var uint8array_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67980);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56026);
/* harmony import */ var _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81975);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__]);
_wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const WASM_BUFFER = new Uint8Array(_wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.memory.buffer);
const WASM_PRIVATE_KEY_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.PRIVATE_INPUT.value;
const WASM_PUBLIC_KEY_INPUT_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.PUBLIC_KEY_INPUT.value;
const WASM_PUBLIC_KEY_INPUT_PTR2 = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.PUBLIC_KEY_INPUT2.value;
const WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.X_ONLY_PUBLIC_KEY_INPUT.value;
const WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.X_ONLY_PUBLIC_KEY_INPUT2.value;
const WASM_TWEAK_INPUT_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.TWEAK_INPUT.value;
const WASM_HASH_INPUT_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.HASH_INPUT.value;
const WASM_EXTRA_DATA_INPUT_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.EXTRA_DATA_INPUT.value;
const WASM_SIGNATURE_INPUT_PTR = _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.SIGNATURE_INPUT.value;
const PRIVATE_KEY_INPUT = WASM_BUFFER.subarray(WASM_PRIVATE_KEY_PTR, WASM_PRIVATE_KEY_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .PRIVATE_KEY_SIZE */ .Yl);
const PUBLIC_KEY_INPUT = WASM_BUFFER.subarray(WASM_PUBLIC_KEY_INPUT_PTR, WASM_PUBLIC_KEY_INPUT_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .PUBLIC_KEY_UNCOMPRESSED_SIZE */ .Bl);
const PUBLIC_KEY_INPUT2 = WASM_BUFFER.subarray(WASM_PUBLIC_KEY_INPUT_PTR2, WASM_PUBLIC_KEY_INPUT_PTR2 + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .PUBLIC_KEY_UNCOMPRESSED_SIZE */ .Bl);
const X_ONLY_PUBLIC_KEY_INPUT = WASM_BUFFER.subarray(WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR, WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .X_ONLY_PUBLIC_KEY_SIZE */ .Vt);
const X_ONLY_PUBLIC_KEY_INPUT2 = WASM_BUFFER.subarray(WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR, WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .X_ONLY_PUBLIC_KEY_SIZE */ .Vt);
const TWEAK_INPUT = WASM_BUFFER.subarray(WASM_TWEAK_INPUT_PTR, WASM_TWEAK_INPUT_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .TWEAK_SIZE */ .jx);
const HASH_INPUT = WASM_BUFFER.subarray(WASM_HASH_INPUT_PTR, WASM_HASH_INPUT_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .HASH_SIZE */ .ZM);
const EXTRA_DATA_INPUT = WASM_BUFFER.subarray(WASM_EXTRA_DATA_INPUT_PTR, WASM_EXTRA_DATA_INPUT_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .EXTRA_DATA_SIZE */ .P0);
const SIGNATURE_INPUT = WASM_BUFFER.subarray(WASM_SIGNATURE_INPUT_PTR, WASM_SIGNATURE_INPUT_PTR + _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .SIGNATURE_SIZE */ .fJ);
function assumeCompression(compressed, p) {
    if (compressed === undefined) {
        return p !== undefined ? p.length : _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .PUBLIC_KEY_COMPRESSED_SIZE */ .XM;
    }
    return compressed
        ? _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .PUBLIC_KEY_COMPRESSED_SIZE */ .XM
        : _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .PUBLIC_KEY_UNCOMPRESSED_SIZE */ .Bl;
}
function _isPoint(p) {
    try {
        PUBLIC_KEY_INPUT.set(p);
        return _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.isPoint(p.length) === 1;
    }
    finally {
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function __initializeContext() {
    wasm.initializeContext();
}
function isPoint(p) {
    return _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .isDERPoint */ .DV(p) && _isPoint(p);
}
function isPointCompressed(p) {
    return _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .isPointCompressed */ .rH(p) && _isPoint(p);
}
function isXOnlyPoint(p) {
    return validate.isXOnlyPoint(p) && _isPoint(p);
}
function isPrivate(d) {
    return _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .isPrivate */ .hv(d);
}
function pointAdd(pA, pB, compressed) {
    validate.validatePoint(pA);
    validate.validatePoint(pB);
    const outputlen = assumeCompression(compressed, pA);
    try {
        PUBLIC_KEY_INPUT.set(pA);
        PUBLIC_KEY_INPUT2.set(pB);
        return wasm.pointAdd(pA.length, pB.length, outputlen) === 1
            ? PUBLIC_KEY_INPUT.slice(0, outputlen)
            : null;
    }
    finally {
        PUBLIC_KEY_INPUT.fill(0);
        PUBLIC_KEY_INPUT2.fill(0);
    }
}
function pointAddScalar(p, tweak, compressed) {
    validate.validatePoint(p);
    validate.validateTweak(tweak);
    const outputlen = assumeCompression(compressed, p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        TWEAK_INPUT.set(tweak);
        return wasm.pointAddScalar(p.length, outputlen) === 1
            ? PUBLIC_KEY_INPUT.slice(0, outputlen)
            : null;
    }
    finally {
        PUBLIC_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function pointCompress(p, compressed) {
    _validate_js__WEBPACK_IMPORTED_MODULE_1__/* .validatePoint */ .yE(p);
    const outputlen = assumeCompression(compressed, p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        _wasm_loader_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.pointCompress(p.length, outputlen);
        return PUBLIC_KEY_INPUT.slice(0, outputlen);
    }
    finally {
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function pointFromScalar(d, compressed) {
    validate.validatePrivate(d);
    const outputlen = assumeCompression(compressed);
    try {
        PRIVATE_KEY_INPUT.set(d);
        return wasm.pointFromScalar(outputlen) === 1
            ? PUBLIC_KEY_INPUT.slice(0, outputlen)
            : null;
    }
    finally {
        PRIVATE_KEY_INPUT.fill(0);
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function xOnlyPointFromScalar(d) {
    validate.validatePrivate(d);
    try {
        PRIVATE_KEY_INPUT.set(d);
        wasm.xOnlyPointFromScalar();
        return X_ONLY_PUBLIC_KEY_INPUT.slice(0, validate.X_ONLY_PUBLIC_KEY_SIZE);
    }
    finally {
        PRIVATE_KEY_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
    }
}
function xOnlyPointFromPoint(p) {
    validate.validatePoint(p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        wasm.xOnlyPointFromPoint(p.length);
        return X_ONLY_PUBLIC_KEY_INPUT.slice(0, validate.X_ONLY_PUBLIC_KEY_SIZE);
    }
    finally {
        PUBLIC_KEY_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
    }
}
function pointMultiply(p, tweak, compressed) {
    validate.validatePoint(p);
    validate.validateTweak(tweak);
    const outputlen = assumeCompression(compressed, p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        TWEAK_INPUT.set(tweak);
        return wasm.pointMultiply(p.length, outputlen) === 1
            ? PUBLIC_KEY_INPUT.slice(0, outputlen)
            : null;
    }
    finally {
        PUBLIC_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function privateAdd(d, tweak) {
    validate.validatePrivate(d);
    validate.validateTweak(tweak);
    try {
        PRIVATE_KEY_INPUT.set(d);
        TWEAK_INPUT.set(tweak);
        return wasm.privateAdd() === 1
            ? PRIVATE_KEY_INPUT.slice(0, validate.PRIVATE_KEY_SIZE)
            : null;
    }
    finally {
        PRIVATE_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function privateSub(d, tweak) {
    validate.validatePrivate(d);
    validate.validateTweak(tweak);
    // We can not pass zero tweak to WASM, because WASM use `secp256k1_ec_seckey_negate` for tweak negate.
    // (zero is not valid seckey)
    if (validate.isZero(tweak)) {
        return new Uint8Array(d);
    }
    try {
        PRIVATE_KEY_INPUT.set(d);
        TWEAK_INPUT.set(tweak);
        return wasm.privateSub() === 1
            ? PRIVATE_KEY_INPUT.slice(0, validate.PRIVATE_KEY_SIZE)
            : null;
    }
    finally {
        PRIVATE_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function privateNegate(d) {
    validate.validatePrivate(d);
    try {
        PRIVATE_KEY_INPUT.set(d);
        wasm.privateNegate();
        return PRIVATE_KEY_INPUT.slice(0, validate.PRIVATE_KEY_SIZE);
    }
    finally {
        PRIVATE_KEY_INPUT.fill(0);
    }
}
function xOnlyPointAddTweak(p, tweak) {
    validate.validateXOnlyPoint(p);
    validate.validateTweak(tweak);
    try {
        X_ONLY_PUBLIC_KEY_INPUT.set(p);
        TWEAK_INPUT.set(tweak);
        const parity = wasm.xOnlyPointAddTweak();
        return parity !== -1
            ? {
                parity,
                xOnlyPubkey: X_ONLY_PUBLIC_KEY_INPUT.slice(0, validate.X_ONLY_PUBLIC_KEY_SIZE),
            }
            : null;
    }
    finally {
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function xOnlyPointAddTweakCheck(point, tweak, resultToCheck, tweakParity) {
    validate.validateXOnlyPoint(point);
    validate.validateXOnlyPoint(resultToCheck);
    validate.validateTweak(tweak);
    const hasParity = tweakParity !== undefined;
    if (hasParity)
        validate.validateParity(tweakParity);
    try {
        X_ONLY_PUBLIC_KEY_INPUT.set(point);
        X_ONLY_PUBLIC_KEY_INPUT2.set(resultToCheck);
        TWEAK_INPUT.set(tweak);
        if (hasParity) {
            return wasm.xOnlyPointAddTweakCheck(tweakParity) === 1;
        }
        else {
            wasm.xOnlyPointAddTweak();
            const newKey = X_ONLY_PUBLIC_KEY_INPUT.slice(0, validate.X_ONLY_PUBLIC_KEY_SIZE);
            return compare(newKey, resultToCheck) === 0;
        }
    }
    finally {
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT2.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function sign(h, d, e) {
    validate.validateHash(h);
    validate.validatePrivate(d);
    validate.validateExtraData(e);
    try {
        HASH_INPUT.set(h);
        PRIVATE_KEY_INPUT.set(d);
        if (e !== undefined)
            EXTRA_DATA_INPUT.set(e);
        wasm.sign(e === undefined ? 0 : 1);
        return SIGNATURE_INPUT.slice(0, validate.SIGNATURE_SIZE);
    }
    finally {
        HASH_INPUT.fill(0);
        PRIVATE_KEY_INPUT.fill(0);
        if (e !== undefined)
            EXTRA_DATA_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function signRecoverable(h, d, e) {
    validate.validateHash(h);
    validate.validatePrivate(d);
    validate.validateExtraData(e);
    try {
        HASH_INPUT.set(h);
        PRIVATE_KEY_INPUT.set(d);
        if (e !== undefined)
            EXTRA_DATA_INPUT.set(e);
        const recoveryId = wasm.signRecoverable(e === undefined ? 0 : 1);
        const signature = SIGNATURE_INPUT.slice(0, validate.SIGNATURE_SIZE);
        return {
            signature,
            recoveryId,
        };
    }
    finally {
        HASH_INPUT.fill(0);
        PRIVATE_KEY_INPUT.fill(0);
        if (e !== undefined)
            EXTRA_DATA_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function signSchnorr(h, d, e) {
    validate.validateHash(h);
    validate.validatePrivate(d);
    validate.validateExtraData(e);
    try {
        HASH_INPUT.set(h);
        PRIVATE_KEY_INPUT.set(d);
        if (e !== undefined)
            EXTRA_DATA_INPUT.set(e);
        wasm.signSchnorr(e === undefined ? 0 : 1);
        return SIGNATURE_INPUT.slice(0, validate.SIGNATURE_SIZE);
    }
    finally {
        HASH_INPUT.fill(0);
        PRIVATE_KEY_INPUT.fill(0);
        if (e !== undefined)
            EXTRA_DATA_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function verify(h, Q, signature, strict = false) {
    validate.validateHash(h);
    validate.validatePoint(Q);
    validate.validateSignature(signature);
    try {
        HASH_INPUT.set(h);
        PUBLIC_KEY_INPUT.set(Q);
        SIGNATURE_INPUT.set(signature);
        return wasm.verify(Q.length, strict === true ? 1 : 0) === 1 ? true : false;
    }
    finally {
        HASH_INPUT.fill(0);
        PUBLIC_KEY_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function recover(h, signature, recoveryId, compressed = false) {
    validate.validateHash(h);
    validate.validateSignature(signature);
    validate.validateSignatureNonzeroRS(signature);
    if (recoveryId & 2) {
        validate.validateSigrPMinusN(signature);
    }
    validate.validateSignatureCustom(() => isXOnlyPoint(signature.subarray(0, 32)));
    const outputlen = assumeCompression(compressed);
    try {
        HASH_INPUT.set(h);
        SIGNATURE_INPUT.set(signature);
        return wasm.recover(outputlen, recoveryId) === 1
            ? PUBLIC_KEY_INPUT.slice(0, outputlen)
            : null;
    }
    finally {
        HASH_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function verifySchnorr(h, Q, signature) {
    validate.validateHash(h);
    validate.validateXOnlyPoint(Q);
    validate.validateSignature(signature);
    try {
        HASH_INPUT.set(h);
        X_ONLY_PUBLIC_KEY_INPUT.set(Q);
        SIGNATURE_INPUT.set(signature);
        return wasm.verifySchnorr() === 1 ? true : false;
    }
    finally {
        HASH_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56079:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ generateInt32)
/* harmony export */ });
function get4RandomBytes() {
    const bytes = new Uint8Array(4);
    if (typeof crypto === "undefined") {
        throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    }
    crypto.getRandomValues(bytes);
    return bytes;
}
// Only to be used to initialize the context for rust-secp256k1
function generateInt32() {
    const array = get4RandomBytes();
    return ((array[0] << (3 * 8)) +
        (array[1] << (2 * 8)) +
        (array[2] << (1 * 8)) +
        array[3]);
}


/***/ }),

/***/ 56026:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bl: () => (/* binding */ PUBLIC_KEY_UNCOMPRESSED_SIZE),
/* harmony export */   DV: () => (/* binding */ isDERPoint),
/* harmony export */   P0: () => (/* binding */ EXTRA_DATA_SIZE),
/* harmony export */   Vt: () => (/* binding */ X_ONLY_PUBLIC_KEY_SIZE),
/* harmony export */   XM: () => (/* binding */ PUBLIC_KEY_COMPRESSED_SIZE),
/* harmony export */   Yl: () => (/* binding */ PRIVATE_KEY_SIZE),
/* harmony export */   ZM: () => (/* binding */ HASH_SIZE),
/* harmony export */   fJ: () => (/* binding */ SIGNATURE_SIZE),
/* harmony export */   hv: () => (/* binding */ isPrivate),
/* harmony export */   jx: () => (/* binding */ TWEAK_SIZE),
/* harmony export */   rH: () => (/* binding */ isPointCompressed),
/* harmony export */   yE: () => (/* binding */ validatePoint)
/* harmony export */ });
/* unused harmony exports isZero, isPoint, isXOnlyPoint, validateParity, validatePrivate, validateXOnlyPoint, validateTweak, validateHash, validateExtraData, validateSignature, validateSignatureCustom, validateSignatureNonzeroRS, validateSigrPMinusN */
/* harmony import */ var _validate_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61834);

const PRIVATE_KEY_SIZE = 32;
const PUBLIC_KEY_COMPRESSED_SIZE = 33;
const PUBLIC_KEY_UNCOMPRESSED_SIZE = 65;
const X_ONLY_PUBLIC_KEY_SIZE = 32;
const TWEAK_SIZE = 32;
const HASH_SIZE = 32;
const EXTRA_DATA_SIZE = 32;
const SIGNATURE_SIZE = 64;
const BN32_ZERO = new Uint8Array(32);
const BN32_N = new Uint8Array([
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65,
]);
// Difference between field and order
const BN32_P_MINUS_N = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 69, 81, 35, 25, 80, 183, 95,
    196, 64, 45, 161, 114, 47, 201, 186, 238,
]);
function isUint8Array(value) {
    return value instanceof Uint8Array;
}
function cmpBN32(data1, data2) {
    for (let i = 0; i < 32; ++i) {
        if (data1[i] !== data2[i]) {
            return data1[i] < data2[i] ? -1 : 1;
        }
    }
    return 0;
}
function isZero(x) {
    return cmpBN32(x, BN32_ZERO) === 0;
}
function isPrivate(x) {
    return (isUint8Array(x) &&
        x.length === PRIVATE_KEY_SIZE &&
        cmpBN32(x, BN32_ZERO) > 0 &&
        cmpBN32(x, BN32_N) < 0);
}
function isPoint(p) {
    return (isUint8Array(p) &&
        (p.length === PUBLIC_KEY_COMPRESSED_SIZE ||
            p.length === PUBLIC_KEY_UNCOMPRESSED_SIZE ||
            p.length === X_ONLY_PUBLIC_KEY_SIZE));
}
function isXOnlyPoint(p) {
    return isUint8Array(p) && p.length === X_ONLY_PUBLIC_KEY_SIZE;
}
function isDERPoint(p) {
    return (isUint8Array(p) &&
        (p.length === PUBLIC_KEY_COMPRESSED_SIZE ||
            p.length === PUBLIC_KEY_UNCOMPRESSED_SIZE));
}
function isPointCompressed(p) {
    return isUint8Array(p) && p.length === PUBLIC_KEY_COMPRESSED_SIZE;
}
function isTweak(tweak) {
    return (isUint8Array(tweak) &&
        tweak.length === TWEAK_SIZE &&
        cmpBN32(tweak, BN32_N) < 0);
}
function isHash(h) {
    return isUint8Array(h) && h.length === HASH_SIZE;
}
function isExtraData(e) {
    return e === undefined || (isUint8Array(e) && e.length === EXTRA_DATA_SIZE);
}
function isSignature(signature) {
    return (isUint8Array(signature) &&
        signature.length === 64 &&
        cmpBN32(signature.subarray(0, 32), BN32_N) < 0 &&
        cmpBN32(signature.subarray(32, 64), BN32_N) < 0);
}
function isSigrLessThanPMinusN(signature) {
    return (isUint8Array(signature) &&
        signature.length === 64 &&
        cmpBN32(signature.subarray(0, 32), BN32_P_MINUS_N) < 0);
}
function validateParity(p) {
    if (p !== 0 && p !== 1)
        throwError(ERROR_BAD_PARITY);
}
function validatePrivate(d) {
    if (!isPrivate(d))
        throwError(ERROR_BAD_PRIVATE);
}
function validatePoint(p) {
    if (!isPoint(p))
        (0,_validate_error_js__WEBPACK_IMPORTED_MODULE_0__/* .throwError */ ._y)(_validate_error_js__WEBPACK_IMPORTED_MODULE_0__/* .ERROR_BAD_POINT */ .Gy);
}
function validateXOnlyPoint(p) {
    if (!isXOnlyPoint(p))
        throwError(ERROR_BAD_POINT);
}
function validateTweak(tweak) {
    if (!isTweak(tweak))
        throwError(ERROR_BAD_TWEAK);
}
function validateHash(h) {
    if (!isHash(h))
        throwError(ERROR_BAD_HASH);
}
function validateExtraData(e) {
    if (!isExtraData(e))
        throwError(ERROR_BAD_EXTRA_DATA);
}
function validateSignature(signature) {
    if (!isSignature(signature))
        throwError(ERROR_BAD_SIGNATURE);
}
function validateSignatureCustom(validatorFn) {
    if (!validatorFn())
        throwError(ERROR_BAD_SIGNATURE);
}
function validateSignatureNonzeroRS(signature) {
    if (isZero(signature.subarray(0, 32)))
        throwError(ERROR_BAD_SIGNATURE);
    if (isZero(signature.subarray(32, 64)))
        throwError(ERROR_BAD_SIGNATURE);
}
function validateSigrPMinusN(signature) {
    if (!isSigrLessThanPMinusN(signature))
        throwError(ERROR_BAD_RECOVERY_ID);
}


/***/ }),

/***/ 61834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gy: () => (/* binding */ ERROR_BAD_POINT),
/* harmony export */   _y: () => (/* binding */ throwError)
/* harmony export */ });
/* unused harmony exports ERROR_BAD_PRIVATE, ERROR_BAD_TWEAK, ERROR_BAD_HASH, ERROR_BAD_SIGNATURE, ERROR_BAD_EXTRA_DATA, ERROR_BAD_PARITY, ERROR_BAD_RECOVERY_ID */
const ERROR_BAD_PRIVATE = 0;
const ERROR_BAD_POINT = 1;
const ERROR_BAD_TWEAK = 2;
const ERROR_BAD_HASH = 3;
const ERROR_BAD_SIGNATURE = 4;
const ERROR_BAD_EXTRA_DATA = 5;
const ERROR_BAD_PARITY = 6;
const ERROR_BAD_RECOVERY_ID = 7;
const ERRORS_MESSAGES = {
    [ERROR_BAD_PRIVATE.toString()]: "Expected Private",
    [ERROR_BAD_POINT.toString()]: "Expected Point",
    [ERROR_BAD_TWEAK.toString()]: "Expected Tweak",
    [ERROR_BAD_HASH.toString()]: "Expected Hash",
    [ERROR_BAD_SIGNATURE.toString()]: "Expected Signature",
    [ERROR_BAD_EXTRA_DATA.toString()]: "Expected Extra Data (32 bytes)",
    [ERROR_BAD_PARITY.toString()]: "Expected Parity (1 | 0)",
    [ERROR_BAD_RECOVERY_ID.toString()]: "Bad Recovery Id",
};
function throwError(errcode) {
    const message = ERRORS_MESSAGES[errcode.toString()] || `Unknow error code: ${errcode}`;
    throw new TypeError(message);
}


/***/ }),

/***/ 81975:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _secp256k1_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76604);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_secp256k1_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_secp256k1_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Suppress TS2792: Cannot find module './secp256k1.wasm'.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_secp256k1_wasm__WEBPACK_IMPORTED_MODULE_0__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports toHex, fromHex, compare */
const HEX_STRINGS = "0123456789abcdefABCDEF";
const HEX_CODES = HEX_STRINGS.split("").map((c) => c.codePointAt(0));
const HEX_CODEPOINTS = Array(256)
    .fill(true)
    .map((_, i) => {
    const s = String.fromCodePoint(i);
    const index = HEX_STRINGS.indexOf(s);
    // ABCDEF will use 10 - 15
    return index < 0 ? undefined : index < 16 ? index : index - 6;
});
const ENCODER = new TextEncoder();
const DECODER = new TextDecoder("ascii");
// There are two implementations.
// One optimizes for length of the bytes, and uses TextDecoder.
// One optimizes for iteration count, and appends strings.
// This removes the overhead of TextDecoder.
function toHex(bytes) {
    const b = bytes || new Uint8Array();
    return b.length > 512 ? _toHexLengthPerf(b) : _toHexIterPerf(b);
}
function _toHexIterPerf(bytes) {
    let s = "";
    for (let i = 0; i < bytes.length; ++i) {
        s += HEX_STRINGS[HEX_CODEPOINTS[HEX_CODES[bytes[i] >> 4]]];
        s += HEX_STRINGS[HEX_CODEPOINTS[HEX_CODES[bytes[i] & 15]]];
    }
    return s;
}
function _toHexLengthPerf(bytes) {
    const hexBytes = new Uint8Array(bytes.length * 2);
    for (let i = 0; i < bytes.length; ++i) {
        hexBytes[i * 2] = HEX_CODES[bytes[i] >> 4];
        hexBytes[i * 2 + 1] = HEX_CODES[bytes[i] & 15];
    }
    return DECODER.decode(hexBytes);
}
// Mimics Buffer.from(x, 'hex') logic
// Stops on first non-hex string and returns
// https://github.com/nodejs/node/blob/v14.18.1/src/string_bytes.cc#L246-L261
function fromHex(hexString) {
    const hexBytes = ENCODER.encode(hexString || "");
    const resultBytes = new Uint8Array(Math.floor(hexBytes.length / 2));
    let i;
    for (i = 0; i < resultBytes.length; i++) {
        const a = HEX_CODEPOINTS[hexBytes[i * 2]];
        const b = HEX_CODEPOINTS[hexBytes[i * 2 + 1]];
        if (a === undefined || b === undefined) {
            break;
        }
        resultBytes[i] = (a << 4) | b;
    }
    return i === resultBytes.length ? resultBytes : resultBytes.slice(0, i);
}
// Same behavior as Buffer.compare()
function compare(v1, v2) {
    const minLength = Math.min(v1.length, v2.length);
    for (let i = 0; i < minLength; ++i) {
        if (v1[i] !== v2[i]) {
            return v1[i] < v2[i] ? -1 : 1;
        }
    }
    return v1.length === v2.length ? 0 : v1.length > v2.length ? 1 : -1;
}


/***/ }),

/***/ 76604:
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(56079);
/* harmony import */ var WEBPACK_IMPORTED_MODULE_1 = __webpack_require__(61834);
module.exports = __webpack_require__.v(exports, module.id, "6e428f1b92d777d06bd2", {
	"./rand.js": {
		"generateInt32": WEBPACK_IMPORTED_MODULE_0/* .generateInt32 */ .L
	},
	"./validate_error.js": {
		"throwError": WEBPACK_IMPORTED_MODULE_1/* .throwError */ ._y
	}
});

/***/ })

}]);
//# sourceMappingURL=chunk.4280.js.map