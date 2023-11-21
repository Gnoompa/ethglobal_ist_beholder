(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4124],{

/***/ 94724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $G: () => (/* binding */ isEC_JsonWebKey),
/* harmony export */   PQ: () => (/* binding */ isEC_Private_JsonWebKey),
/* harmony export */   bG: () => (/* binding */ isAESJsonWebKey),
/* harmony export */   d8: () => (/* binding */ isEC_Public_JsonWebKey)
/* harmony export */ });
// Create nominal typing interfaces for different JsonWebKey type
// So they will no longer assignable to each other
function isAESJsonWebKey(x) {
    if (typeof x !== 'object' || x === null) return false;
    const { alg, k, key_ops, kty } = x;
    if (!alg || !k || !Array.isArray(key_ops) || kty !== 'oct') return false;
    return true;
}
function isEC_JsonWebKey(o) {
    if (typeof o !== 'object' || o === null) return false;
    const { crv, key_ops, kty, x, y } = o;
    if (!crv || !Array.isArray(key_ops) || !kty || !x || !y) return false;
    return true;
}
function isEC_Public_JsonWebKey(o) {
    if (!isEC_JsonWebKey(o)) return false;
    return !o.d;
}
function isEC_Private_JsonWebKey(o) {
    if (!isEC_JsonWebKey(o)) return false;
    return !!o.d;
} /** Ghost property, don't use it! */ 


/***/ }),

/***/ 17688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EU: () => (/* binding */ decompressK256Point),
/* harmony export */   Hj: () => (/* binding */ isK256PrivateKey),
/* harmony export */   J$: () => (/* binding */ decompressK256Key),
/* harmony export */   LZ: () => (/* binding */ isK256Point),
/* harmony export */   N0: () => (/* binding */ decompressK256Raw),
/* harmony export */   YT: () => (/* binding */ compressK256KeyRaw),
/* harmony export */   b2: () => (/* binding */ compressK256Key),
/* harmony export */   rc: () => (/* binding */ compressK256Point)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85907);


/**
 * Compress x & y into a single x
 */ async function compressK256Point(x, y) {
    const { isPoint, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    const xb = new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.FromBase64Url(x));
    const yb = new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.FromBase64Url(y));
    const point = new Uint8Array((0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(new Uint8Array([
        0x04
    ]), xb, yb));
    if (isPoint(point)) {
        return pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1.');
    }
}
/**
 * Decompress x into x & y
 */ async function decompressK256Point(point) {
    const { isPoint, isPointCompressed, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1.');
    const uncompressed = isPointCompressed(point) ? pointCompress(point, false) : point;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.ToBase64Url(x),
        y: pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.ToBase64Url(y)
    };
}
async function compressK256KeyRaw(point) {
    const { isPoint, isPointCompressed, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1.');
    if (isPointCompressed(point)) return point;
    return pointCompress(point, true);
}
async function decompressK256Raw(point) {
    const { isPoint, isPointCompressed, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1.');
    if (!isPointCompressed(point)) return point;
    return pointCompress(point, false);
}
async function compressK256Key(key) {
    const arr = await compressK256Point(key.x, key.y);
    return (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(arr);
}
async function decompressK256Key(compressedPublic) {
    const arr = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(compressedPublic);
    const key = await decompressK256Point(new Uint8Array(arr));
    const jwk = {
        crv: 'K-256',
        ext: true,
        x: key.x,
        y: key.y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC'
    };
    return jwk;
}
async function isK256Point(x) {
    const { isPoint } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    return isPoint(x);
}
async function isK256PrivateKey(d) {
    const { isPrivate } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    return isPrivate(d);
}


/***/ }),

/***/ 90436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ CheckedError)
/* harmony export */ });
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);

class CheckedError extends Error {
    kind;
    reason;
    constructor(kind, reason){
        super(kind + '', {
            cause: reason
        });
        this.kind = kind;
        this.reason = reason;
    }
    toString() {
        if (this.reason) return `${this.kind}\n${this.reason}`;
        return super.toString();
    }
    static mapErr(r) {
        return (e)=>new CheckedError(r, e);
    }
    static withErr(f, o) {
        return (...args)=>{
            const r = f(...args);
            if ('then' in r) return r.then((r)=>r.mapErr(CheckedError.mapErr(o)));
            return r.mapErr(CheckedError.mapErr(o));
        };
    }
    toErr() {
        return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err)(this);
    }
}


/***/ }),

/***/ 69201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ andThenAsync)
/* harmony export */ });
async function andThenAsync(op, mapper) {
    op = await op;
    if (op.isErr()) return op;
    return mapper(op.value);
}


/***/ }),

/***/ 41693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ parseURLs)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseURLs(text, requireProtocol = true) {
    // CJS-ESM compatibility
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z;
    return lib.list(text).map((x)=>x.string).filter((y)=>{
        if (!requireProtocol) return true;
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        return URL.canParse(y);
    });
}


/***/ }),

/***/ 34625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G6: () => (/* binding */ DecryptError),
/* harmony export */   OF: () => (/* binding */ DecryptErrorReasons),
/* harmony export */   Pj: () => (/* binding */ DecryptProgressKind),
/* harmony export */   gO: () => (/* binding */ DecryptIntermediateProgressKind)
/* harmony export */ });
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

/***/ 63966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ EncryptErrorReasons),
/* harmony export */   x: () => (/* binding */ EncryptError)
/* harmony export */ });
var /** Payload version to use. */ /** Current author who started the encryption. */ /** Public key of the current author. */ /** Network of the encryption */ /** The message to be encrypted. */ /** Encryption target. */ /**
     * This is only used in v38.
     *
     * Note: Due to historical reason (misconfiguration), some user may not have localKey.
     *
     * Throw in this case.
     */ /**
     * Derive a group of AES key by ECDH(selfPriv, targetPub).
     *
     * Host should derive a new AES-GCM key for each private key they have access to.
     *
     * If the provided key cannot derive AES with any key (e.g. The given key is ED25519 but there is only P-256 private keys)
     * please throw an error.
     *
     * Error from this function will become a fatal error.
     * This is only used in v38 or older
     *
     * @param publicKey The public key used in ECDH
     */ /**
     * Fill the arr with random values.
     * This should be only provided in the test environment to create a deterministic result.
     */ /**
     * Generate a new AES Key.
     * This should be only provided in the test environment to create a deterministic result.
     */ /**
     * Generate a pair of new EC key used for ECDH.
     * This should be only provided in the test environment to create a deterministic result.
     */ /** Additional information that need to be send to the internet in order to allow recipients to decrypt */ /** This is used in v38. */ /** This feature is supported since v37. */ EncryptErrorReasons;
(function(EncryptErrorReasons) {
    EncryptErrorReasons["ComplexTypedMessageNotSupportedInPayload38"] = '[@masknet/encryption] Complex TypedMessage is not supported in payload v38.';
    EncryptErrorReasons["PublicKeyNotFound"] = '[@masknet/encryption] Target public key not found.';
    EncryptErrorReasons["AESKeyUsageError"] = "[@masknet/encryption] AES key generated by IO doesn't have the correct usages or extractable property.";
})(EncryptErrorReasons || (EncryptErrorReasons = {}));
class EncryptError extends Error {
    message;
    static Reasons = EncryptErrorReasons;
    constructor(message, cause){
        super(message, {
            cause
        });
        this.message = message;
    }
}


/***/ }),

/***/ 47271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ createEphemeralKeysMap),
/* harmony export */   i: () => (/* binding */ fillIV)
/* harmony export */ });
/* harmony import */ var _payload_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83159);

/** @internal */ function createEphemeralKeysMap(io) {
    const ephemeralKeys = new Map();
    // get ephemeral keys, generate one if not found
    async function getEphemeralKey(curve) {
        if (ephemeralKeys.has(curve)) return ephemeralKeys.get(curve);
        ephemeralKeys.set(curve, generateEC_KeyPair(io, curve));
        return ephemeralKeys.get(curve);
    }
    return {
        ephemeralKeys,
        getEphemeralKey
    };
}
/** @internal */ function fillIV(io) {
    if (io.getRandomValues) return io.getRandomValues(new Uint8Array(16));
    return crypto.getRandomValues(new Uint8Array(16));
}
async function generateEC_KeyPair(io, kind) {
    if (io.getRandomECKey) return io.getRandomECKey(kind);
    const namedCurve = {
        [_payload_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurve */ ._r.secp256p1]: 'P-256',
        [_payload_index_js__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurve */ ._r.secp256k1]: 'K-256'
    };
    const { privateKey, publicKey } = await crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: namedCurve[kind]
    }, true, [
        'deriveKey'
    ]);
    return [
        publicKey,
        privateKey
    ];
}


/***/ }),

/***/ 24106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ deriveAESByECDH_version38OrOlderExtraSteps),
/* harmony export */   i: () => (/* binding */ v38_addReceiver)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6195);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47271);



const KEY = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('KEY');
const IV = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('IV');
/**
 * Derive a group of AES key for ECDH.
 *
 * !! For the compatibility, you should refer to the original implementation:
 *
 * !! https://github.com/DimensionDev/Maskbook/blob/f3d83713d60dd0aad462e0648c4d38586c106edc/packages/mask/src/crypto/crypto-alpha-40.ts#L29-L58
 *
 * @internal
 */ async function deriveAESByECDH_version38OrOlderExtraSteps(deriveAESByECDH, pub, iv) {
    const deriveResult = await deriveAESByECDH(pub);
    const extraSteps = deriveResult.map(async (key)=>{
        const derivedKeyRaw = await crypto.subtle.exportKey('raw', key);
        const _a = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(derivedKeyRaw, iv);
        const nextAESKeyMaterial = await crypto.subtle.digest('SHA-256', (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(_a, iv, KEY));
        const iv_pre = new Uint8Array(await crypto.subtle.digest('SHA-256', (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(_a, iv, IV)));
        const nextIV = new Uint8Array(16);
        for(let i = 0; i <= 16; i += 1){
            // eslint-disable-next-line no-bitwise
            nextIV[i] = iv_pre[i] ^ iv_pre[16 + i];
        }
        const nextAESKey = await crypto.subtle.importKey('raw', nextAESKeyMaterial, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        return [
            nextAESKey,
            nextIV
        ];
    });
    return Promise.all(extraSteps);
}
/** @internal */ async function v38_addReceiver(postKeyEncoded, target, io) {
    // For every receiver R,
    //     1. Let R_pub = R.publicKey
    //     2. Let Internal_AES be the result of ECDH with the sender's private key and R_pub
    //     Note: To keep compatibility, here we use the algorithm in
    //     https://github.com/DimensionDev/Maskbook/blob/f3d83713d60dd0aad462e0648c4d38586c106edc/packages/mask/src/crypto/crypto-alpha-40.ts#L29-L58
    //     3. Let ivToBePublish be a new generated IV. This should be sent to the receiver.
    //     4. Calculate new AES key and IV based on Internal_AES and ivToBePublish.
    //     Note: Internal_AES is not returned by io.deriveAESKey_version38_or_older, it is internal algorithm of that method.
    const ecdh = Promise.allSettled(target.target.map(async (receiverPublicKey)=>{
        const ivToBePublished = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .fillIV */ .i)(io);
        const [[aes, iv]] = await deriveAESByECDH_version38OrOlderExtraSteps(async (e)=>[
                await io.deriveAESKey(e)
            ], receiverPublicKey.key, ivToBePublished);
        const encryptedPostKey = await (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .encryptWithAES */ .l_)(aes, iv, await postKeyEncoded);
        return {
            ivToBePublished,
            encryptedPostKey: encryptedPostKey.unwrap(),
            target: receiverPublicKey
        };
    })).then((x)=>x.entries());
    const ecdhResult = new Map();
    for (const [index, result] of (await ecdh)){
        ecdhResult.set(target.target[index], result);
    }
    return ecdhResult;
}


/***/ }),

/***/ 16041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ steganographyEncodeImage),
/* harmony export */   Tx: () => (/* binding */ SteganographyPreset),
/* harmony export */   oX: () => (/* binding */ steganographyDecodeImage)
/* harmony export */ });
/* harmony import */ var _masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59300);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30749);
/* harmony import */ var _presets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35159);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30898);





var SteganographyPreset;
(function(SteganographyPreset) {
    SteganographyPreset["Preset2021"] = '2021';
    SteganographyPreset["Preset2022"] = '2022';
    SteganographyPreset["Preset2023"] = '2023';
})(SteganographyPreset || (SteganographyPreset = {}));
async function steganographyEncodeImage(buf, options) {
    const { downloadImage, data, password, grayscaleAlgorithm } = options;
    const preset = (0,_presets_js__WEBPACK_IMPORTED_MODULE_2__/* .getPreset */ .I)(options.preset);
    if (!preset) throw new Error('Failed to find preset.');
    const optionalOptions = {};
    if (grayscaleAlgorithm) optionalOptions.grayscaleAlgorithm = grayscaleAlgorithm;
    if (preset.type === 'string' && typeof data !== 'string') throw new TypeError('The chosen preset must be used with string');
    if (preset.type === 'raw' && typeof data === 'string') throw new TypeError('The chosen preset must be used with Uint8Array');
    const text = typeof data === 'string' ? data : (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .encodeArrayBuffer */ .ll)(data);
    return new Uint8Array(await (0,_masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__/* .encode */ .cv)(buf, preset.mask ? await downloadImage(preset.mask) : new Uint8Array(_masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_MASK */ .xO), {
        ...preset.options,
        ...optionalOptions,
        text,
        pass: password
    }));
}
async function steganographyDecodeImage(image, options) {
    const buffer = typeof image === 'string' ? await options.downloadImage(image) : await image.arrayBuffer();
    const dimension = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .getDimension */ .F)(buffer);
    const preset = (0,_presets_js__WEBPACK_IMPORTED_MODULE_2__/* .findPreset */ .a)(dimension);
    if (!preset) return null;
    const result = (0,_masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__/* .decode */ .Jx)(buffer, preset.mask ? await options.downloadImage(preset.mask) : new Uint8Array(_masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_MASK */ .xO), {
        ...preset.options,
        pass: options.password
    });
    if (preset.type === 'raw') return new Uint8Array((0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .decodeArrayBuffer */ .xe)(await result));
    return result;
}


/***/ }),

/***/ 35159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ getPreset),
/* harmony export */   a: () => (/* binding */ findPreset)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59300);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16041);



/** @internal */ const libV1AlgrDefaults = {
    size: 8,
    narrow: 0,
    copies: 3,
    tolerance: 128,
    exhaustPixels: true,
    cropEdgePixels: false,
    fakeMaskPixels: false,
    grayscaleAlgorithm: _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__/* .GrayscaleAlgorithm */ .Ft.NONE,
    transformAlgorithm: _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__/* .TransformAlgorithm */ .zl.FFT1D,
    version: _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__/* .AlgorithmVersion */ .c3.V1
};
const libV2AlgrDefaults = {
    size: 8,
    narrow: 0,
    copies: 3,
    tolerance: 400,
    exhaustPixels: false,
    cropEdgePixels: false,
    fakeMaskPixels: false,
    grayscaleAlgorithm: _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__/* .GrayscaleAlgorithm */ .Ft.NONE,
    transformAlgorithm: _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__/* .TransformAlgorithm */ .zl.FFT2D,
    version: _masknet_stego_js__WEBPACK_IMPORTED_MODULE_1__/* .AlgorithmVersion */ .c3.V2
};
const Preset2021 = {
    type: 'string',
    description: 'the preset we used for payload V38 with v1 algorithm',
    width: 1200,
    height: 681,
    mask: new URL(/* asset import */ __webpack_require__(4856), __webpack_require__.b).toString(),
    options: libV1AlgrDefaults
};
const Preset2022 = {
    type: 'string',
    description: 'the preset we used for payload V38',
    width: 1200,
    height: 682,
    mask: null,
    options: libV2AlgrDefaults
};
const Preset2023 = {
    type: 'raw',
    description: 'the preset we used for payload V37',
    width: 1200,
    height: 671,
    mask: null,
    options: libV2AlgrDefaults
};
const dimensionPreset = [
    Preset2023,
    Preset2022,
    Preset2021,
    {
        type: 'string',
        description: 'legacy post',
        width: 1024,
        height: 1240,
        mask: new URL(/* asset import */ __webpack_require__(85270), __webpack_require__.b).toString(),
        options: libV1AlgrDefaults
    },
    {
        type: 'string',
        description: 'legacy post',
        width: 1200,
        height: 680,
        mask: new URL(/* asset import */ __webpack_require__(28477), __webpack_require__.b).toString(),
        options: {
            ...libV1AlgrDefaults,
            cropEdgePixels: true
        }
    },
    {
        type: 'string',
        description: 'used in event election 2020',
        width: 1000,
        height: 558,
        mask: new URL(/* asset import */ __webpack_require__(28477), __webpack_require__.b).toString(),
        options: libV1AlgrDefaults
    },
    {
        type: 'string',
        description: 'old NFT',
        width: 1000,
        height: 560,
        mask: new URL(/* asset import */ __webpack_require__(30457), __webpack_require__.b).toString(),
        options: libV1AlgrDefaults
    }
];
/** @internal */ function findPreset(dimension) {
    return dimensionPreset.find((d)=>isSameDimension(d, dimension));
}
function getPreset(preset) {
    if (preset === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .SteganographyPreset */ .Tx.Preset2021) return Preset2021;
    if (preset === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .SteganographyPreset */ .Tx.Preset2022) return Preset2022;
    if (preset === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .SteganographyPreset */ .Tx.Preset2023) return Preset2023;
    (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(preset);
}
function isSameDimension(dimension, otherDimension) {
    return dimension.width === otherDimension.width && dimension.height === otherDimension.height;
}


/***/ }),

/***/ 30749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ getDimension)
/* harmony export */ });
/* harmony import */ var _masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59300);

/** @internal */ function getDimension(buf) {
    const fallback = {
        width: 0,
        height: 0
    };
    switch((0,_masknet_stego_js__WEBPACK_IMPORTED_MODULE_0__/* .getImageType */ .KX)(new Uint8Array(buf))){
        case 'image/jpeg':
            return getDimensionAsJPEG(buf) ?? fallback;
        case 'image/png':
            return getDimensionAsPNG(buf);
        default:
            return fallback;
    }
}
function getDimensionAsPNG(buf) {
    const dataView = new DataView(buf, 0, 28);
    return {
        width: dataView.getInt32(16),
        height: dataView.getInt32(20)
    };
}
/**
 * Get dimension of a JPEG image
 *
 * @see http://vip.sugovica.hu/Sardi/kepnezo/JPEG%20File%20Layout%20and%20Format.htm
 */ function getDimensionAsJPEG(buf) {
    const dataView = new DataView(buf);
    let i = 0;
    if (dataView.getUint8(i) === 0xff && dataView.getUint8(i + 1) === 0xd8 && // SOI marker
    dataView.getUint8(i + 2) === 0xff && dataView.getUint8(i + 3) === 0xe0) // APP0 marker
    {
        i += 4;
        if (dataView.getUint8(i + 2) === 'J'.charCodeAt(0) && dataView.getUint8(i + 3) === 'F'.charCodeAt(0) && dataView.getUint8(i + 4) === 'I'.charCodeAt(0) && dataView.getUint8(i + 5) === 'F'.charCodeAt(0) && dataView.getUint8(i + 6) === 0x00) {
            let block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
            while(i < dataView.byteLength){
                i += block_length;
                if (i >= dataView.byteLength) return;
                if (dataView.getUint8(i) !== 0xff) return;
                if (dataView.getUint8(i + 1) === 0xc0 || // SOF0 marker
                dataView.getUint8(i + 1) === 0xc2) // SOF2 marker
                {
                    return {
                        height: dataView.getUint8(i + 5) * 256 + dataView.getUint8(i + 6),
                        width: dataView.getUint8(i + 7) * 256 + dataView.getUint8(i + 8)
                    };
                } else {
                    i += 2;
                    block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
                }
            }
        }
    }
    return;
}


/***/ }),

/***/ 30557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V1: () => (/* binding */ encodePayload),
  WZ: () => (/* binding */ parsePayload)
});

// UNUSED EXPORTS: EC_KeyCurve, EncryptPayloadNetwork, encryptPayloadNetworkToDomain

// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./packages/encryption/src/types/Exception.ts
var Exception = __webpack_require__(41013);
// EXTERNAL MODULE: ./packages/base/src/ts-results/CheckedError.ts
var CheckedError = __webpack_require__(90436);
// EXTERNAL MODULE: ./packages/base/src/ts-results/andThenAsync.ts
var andThenAsync = __webpack_require__(69201);
;// CONCATENATED MODULE: ./packages/base/src/ts-results/OptionalResult.ts

const OptionalResult = {
    Some (x) {
        return (0,esm.Ok)((0,esm.Some)(x));
    },
    None: (0,esm.Ok)(esm.None),
    fromResult (x) {
        if (x.isErr()) return x;
        return (0,esm.Ok)((0,esm.Some)(x.value));
    }
};

// EXTERNAL MODULE: ./packages/base/src/WebCrypto/k256.ts
var k256 = __webpack_require__(17688);
// EXTERNAL MODULE: ./packages/encryption/src/payload/types.ts
var types = __webpack_require__(83159);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var kit_esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs
var decode = __webpack_require__(49990);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(26004);
;// CONCATENATED MODULE: ./packages/encryption/src/utils/index.ts





const firstArgString = (e)=>typeof e === 'string';
const firstArgUint8Array = (e)=>e instanceof Uint8Array;
const decodeUint8ArrayF = wrap((x)=>new Uint8Array((0,kit_esm/* decodeArrayBuffer */.xe)(x)), firstArgString);
const decodeTextF = wrap(kit_esm/* decodeText */.rj, firstArgUint8Array);
const JSONParseF = wrap(JSON.parse, firstArgString);
const decodeMessagePackF = wrap((u8)=>(0,decode/* decode */.Jx)(u8), firstArgUint8Array);
function encodeMessagePack(data) {
    // The returned buffer is a slice of a larger ArrayBuffer
    return (0,encode/* encode */.c)(data).slice();
}
function wrap(f, valid) {
    return (invalidE, throwsE)=>(...args)=>{
            const isValid = valid(...args);
            if (!isValid) return new CheckedError/* CheckedError */.i(invalidE, null).toErr();
            return esm.Result.wrap(()=>f(...args)).mapErr(CheckedError/* CheckedError */.i.mapErr(throwsE));
        };
}

// EXTERNAL MODULE: ./packages/encryption/src/utils/crypto.ts
var utils_crypto = __webpack_require__(6195);
;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/SignatureContainer.ts




var SignaturePayloadFirstByte;
(function(SignaturePayloadFirstByte) {
    SignaturePayloadFirstByte[SignaturePayloadFirstByte["NoSignature"] = 0] = "NoSignature";
    SignaturePayloadFirstByte[SignaturePayloadFirstByte["Signature"] = 1] = "Signature";
})(SignaturePayloadFirstByte || (SignaturePayloadFirstByte = {}));
function encodeSignatureContainer(payload, signature) {
    if (signature) return new Uint8Array((0,kit_esm/* concatArrayBuffer */.v_)(new Uint8Array([
        1
    ]), signature, payload));
    return new Uint8Array((0,kit_esm/* concatArrayBuffer */.v_)(new Uint8Array([
        0
    ]), payload));
}
function parseSignatureContainer(signatureContainer) {
    if (signatureContainer[0] === 0) {
        return (0,esm.Ok)({
            payload: signatureContainer.slice(1),
            signature: OptionalResult.None
        });
    } else if (signatureContainer[0] === 1) {
        const signature = signatureContainer.slice(1, 33);
        const payload = signatureContainer.slice(33);
        return (0,esm.Ok)({
            payload,
            signature: OptionalResult.Some({
                signature,
                signee: payload
            })
        });
    } else return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.InvalidPayload, 'Invalid signature container').toErr();
}

// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/shared.ts





const import_AES_GCM_256 = CheckedError/* CheckedError */.i.withErr(utils_crypto/* importAES */.yj, Exception/* CryptoException */.H3.InvalidCryptoKey);
/**
 * @internal
 * In payload version 38, the AES key is encrypted by this key.
 */ const v38PublicSharedJwk = {
    alg: 'A256GCM',
    ext: true,
    /* cspell:disable-next-line */ k: '3Bf8BJ3ZPSMUM2jg2ThODeLuRRD_-_iwQEaeLdcQXpg',
    key_ops: [
        'encrypt',
        'decrypt'
    ],
    kty: 'oct'
};
let v38PublicSharedCryptoKey;
async function get_v38PublicSharedCryptoKey() {
    if (v38PublicSharedCryptoKey) return (0,esm.Ok)(v38PublicSharedCryptoKey);
    const imported = await import_AES_GCM_256(v38PublicSharedJwk);
    if (imported.isErr()) return imported;
    v38PublicSharedCryptoKey = imported.value;
    return (0,esm.Ok)(v38PublicSharedCryptoKey);
}
function parseAuthor(network, id) {
    if (network === null || network === undefined) return OptionalResult.None;
    if (id === '' || id === null || id === undefined) return OptionalResult.None;
    if (typeof id !== 'string') return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.InvalidPayload, 'Invalid user id').toErr();
    let net = '';
    if (network === types/* EncryptPayloadNetwork */.FL.Facebook) net = 'facebook.com';
    else if (network === types/* EncryptPayloadNetwork */.FL.Twitter) net = 'twitter.com';
    else if (network === types/* EncryptPayloadNetwork */.FL.Instagram) net = 'instagram.com';
    else if (network === types/* EncryptPayloadNetwork */.FL.Minds) net = 'minds.com';
    else if (typeof network === 'string') net = network;
    else if (typeof network !== 'number') return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.InvalidPayload, 'Invalid network').toErr();
    else return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.UnknownEnumMember, 'unknown network').toErr();
    if (net.includes('/')) return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.InvalidPayload, 'Invalid network').toErr();
    const identifier = profile/* ProfileIdentifier */.W.of(net, id);
    if (identifier.isSome()) return OptionalResult.Some(identifier.value);
    return OptionalResult.None;
}

;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/version-37.parser.ts








// ? Payload format: (binary format)
// ? See: docs/rfc/000-Payload-37.md
const version_37_parser_decode = decodeMessagePackF(Exception/* PayloadException */.T6.InvalidPayload, Exception/* PayloadException */.T6.DecodeFailed);
const InvalidPayload = (msg)=>new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.InvalidPayload, msg).toErr();
const importAES256 = CheckedError/* CheckedError */.i.withErr(utils_crypto/* importAES */.yj, Exception/* CryptoException */.H3.InvalidCryptoKey);
const importEC = CheckedError/* CheckedError */.i.withErr(utils_crypto/* importEC_Key */.OT, Exception/* CryptoException */.H3.InvalidCryptoKey);
async function parse37(input) {
    const signatureContainer = parseSignatureContainer(input);
    if (signatureContainer.isErr()) return signatureContainer;
    const { payload, signature } = signatureContainer.value;
    return parsePayload37(payload, signature);
}
function parsePayload37(payload, signature) {
    const _ = version_37_parser_decode(payload).andThen((0,Exception/* assertArray */.Wr)('Payload', Exception/* PayloadException */.T6.InvalidPayload));
    return (0,andThenAsync/* andThenAsync */.p)(_, async (item)=>{
        const [version, authorNetwork, authorID, authorPublicKeyAlg, authorPublicKey, encryption, data] = item;
        // 0 in payload means -37, 1 means -36, ...etc
        if (version !== 0) return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.UnknownVersion, null).toErr();
        const normalized = {
            version: -37,
            author: parseAuthor(authorNetwork, authorID),
            authorPublicKey: authorPublicKey ? OptionalResult.fromResult(await importAsymmetryKey(authorPublicKeyAlg, authorPublicKey, 'authorPublicKey')) : OptionalResult.None,
            encryption: await parseEncryption(encryption),
            encrypted: (0,Exception/* assertUint8Array */.jY)(data, 'encrypted', Exception/* PayloadException */.T6.InvalidPayload),
            signature
        };
        return (0,esm.Ok)(normalized);
    });
}
async function parseEncryption(encryption) {
    if (!Array.isArray(encryption)) return InvalidPayload('Invalid encryption');
    const kind = encryption[0];
    if (kind === EncryptionKind.PeerToPeer) {
        const [, ownersAESKeyEncrypted, iv, authorEphemeralPublicKeys] = encryption;
        const e = {
            type: 'E2E',
            iv: (0,Exception/* assertUint8Array */.jY)(iv, 'iv', Exception/* PayloadException */.T6.InvalidPayload).andThen(utils_crypto/* assertIVLengthEq16 */.R_),
            ownersAESKeyEncrypted: (0,Exception/* assertUint8Array */.jY)(ownersAESKeyEncrypted, 'ownersAESKeyEncrypted', Exception/* PayloadException */.T6.InvalidPayload),
            ephemeralPublicKey: await parseAuthorEphemeralPublicKeys(authorEphemeralPublicKeys)
        };
        return (0,esm.Ok)(e);
    } else if (kind === EncryptionKind.Public) {
        const [, AESKey, iv] = encryption;
        const e = {
            type: 'public',
            iv: (0,Exception/* assertUint8Array */.jY)(iv, 'iv', Exception/* PayloadException */.T6.InvalidPayload).andThen(utils_crypto/* assertIVLengthEq16 */.R_),
            AESKey: await parseAES(AESKey)
        };
        return (0,esm.Ok)(e);
    } else {
        (0,kit_esm/* safeUnreachable */.P)(kind);
    }
    return InvalidPayload('Invalid encryption');
    async function parseAuthorEphemeralPublicKeys(item) {
        if (typeof item !== 'object' || item === null) return {};
        return Object.fromEntries(await Promise.all(Object.entries(item).map(parseAuthorEphemeralPublicKey)));
    }
}
async function parseAuthorEphemeralPublicKey([key, value]) {
    const isEnumLike = Number.parseInt(key.toString(), 10);
    if (!Number.isNaN(isEnumLike)) key = isEnumLike;
    const result = await importAsymmetryKey(key, value, 'authorEphemeralPublicKey');
    return [
        key,
        result
    ];
}
async function parseAES(aes) {
    return (0,andThenAsync/* andThenAsync */.p)((0,Exception/* assertUint8Array */.jY)(aes, 'aes', Exception/* CryptoException */.H3.InvalidCryptoKey), importAES256);
}
function importAsymmetryKey(algr, key, name) {
    return (0,andThenAsync/* andThenAsync */.p)((0,Exception/* assertUint8Array */.jY)(key, name, Exception/* CryptoException */.H3.InvalidCryptoKey), async (pubKey)=>{
        if (typeof algr === 'number') {
            if (algr in types/* EC_KeyCurve */._r) {
                if (algr === types/* EC_KeyCurve */._r.secp256k1) {
                    pubKey = await (0,k256/* decompressK256Raw */.N0)(pubKey);
                }
                const key = await importEC(pubKey, algr);
                if (key.isErr()) return key;
                return (0,esm.Ok)({
                    algr,
                    key: key.value
                });
            }
        }
        return new CheckedError/* CheckedError */.i(Exception/* CryptoException */.H3.UnsupportedAlgorithm, null).toErr();
    });
}
var EncryptionKind;
(function(EncryptionKind) {
    EncryptionKind[EncryptionKind["Public"] = 0] = "Public";
    EncryptionKind[EncryptionKind["PeerToPeer"] = 1] = "PeerToPeer";
})(EncryptionKind || (EncryptionKind = {}));

;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/version-38.parser.ts
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ 






const decodeUint8Array = decodeUint8ArrayF(Exception/* PayloadException */.T6.InvalidPayload, Exception/* PayloadException */.T6.DecodeFailed);
const decodeUint8ArrayCrypto = decodeUint8ArrayF(Exception/* CryptoException */.H3.InvalidCryptoKey, Exception/* CryptoException */.H3.InvalidCryptoKey);
const decodeTextCrypto = decodeTextF(Exception/* CryptoException */.H3.InvalidCryptoKey, Exception/* CryptoException */.H3.InvalidCryptoKey);
const JSONParse = JSONParseF(Exception/* CryptoException */.H3.InvalidCryptoKey, Exception/* CryptoException */.H3.InvalidCryptoKey);
const version_38_parser_importEC = CheckedError/* CheckedError */.i.withErr(utils_crypto/* importEC_Key */.OT, Exception/* CryptoException */.H3.InvalidCryptoKey);
async function parse38(payload) {
    // #region Parse text
    const header = '\u{1F3BC}4/4';
    if (!payload.startsWith(header)) return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.InvalidPayload, 'Unknown version').toErr();
    let rest = payload.slice(header.length);
    // cut the tail
    rest = rest.slice(0, rest.lastIndexOf(':||'));
    const { AESKeyEncrypted, encryptedText, iv, signature, authorPublicKey, authorUserID, isPublic } = splitFields(rest);
    // #endregion
    // #region Normalization
    const raw_iv = decodeUint8ArrayCrypto(iv).andThen(utils_crypto/* assertIVLengthEq16 */.R_);
    const raw_aes = decodeUint8ArrayCrypto(AESKeyEncrypted);
    const encryption = isPublic ? {
        type: 'public',
        iv: raw_iv,
        AESKey: await decodePublicSharedAESKey(raw_iv, raw_aes)
    } : {
        type: 'E2E',
        iv: raw_iv,
        ephemeralPublicKey: {},
        ownersAESKeyEncrypted: raw_aes
    };
    const normalized = {
        version: -38,
        author: OptionalResult.None,
        authorPublicKey: OptionalResult.None,
        signature: OptionalResult.None,
        encryption: (0,esm.Ok)(encryption),
        encrypted: decodeUint8Array(encryptedText)
    };
    if (authorUserID.isErr()) {
        normalized.author = authorUserID.mapErr(CheckedError/* CheckedError */.i.mapErr(Exception/* PayloadException */.T6.DecodeFailed));
    } else if (authorUserID.value.isSome()) {
        normalized.author = profile/* ProfileIdentifier */.W.from(`person:${authorUserID.value.value}`).map((x)=>(0,esm.Some)(x)).toResult(undefined).mapErr(CheckedError/* CheckedError */.i.mapErr(Exception/* PayloadException */.T6.DecodeFailed));
    }
    if (authorPublicKey) {
        normalized.authorPublicKey = await decodeECDHPublicKey(authorPublicKey);
    }
    if (signature && raw_iv.isOk() && raw_aes.isOk() && normalized.encrypted.isOk()) {
        const message = (0,kit_esm/* encodeText */.YT)(`4/4|${AESKeyEncrypted}|${iv}|${encryptedText}`);
        const sig = decodeUint8Array(signature);
        if (sig.isOk()) {
            normalized.signature = OptionalResult.Some({
                signee: message,
                signature: sig.value
            });
        } else {
            normalized.signature = sig;
        }
    }
    return (0,esm.Ok)(normalized);
}
// #endregion
// ? Version 38:🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier?:||
function splitFields(raw) {
    const [, AESKeyEncrypted = '', iv = '', encryptedText = '', signature, authorPublicKey, isPublic, authorUserIDRaw] = raw.split('|');
    const authorUserID = authorUserIDRaw ? esm.Result.wrap(()=>(0,esm.Some)(atob(authorUserIDRaw))) : OptionalResult.None;
    return {
        AESKeyEncrypted,
        encryptedText,
        iv,
        // "_" is used as placeholder
        signature: signature === '_' ? undefined : signature,
        authorPublicKey: authorPublicKey,
        authorUserID,
        isPublic: isPublic === '1'
    };
}
async function decodePublicSharedAESKey(iv, encryptedKey) {
    if (iv.isErr()) return iv;
    if (encryptedKey.isErr()) return encryptedKey;
    const publicSharedKey = await get_v38PublicSharedCryptoKey();
    if (publicSharedKey.isErr()) return publicSharedKey;
    const import_AES_GCM_256 = CheckedError/* CheckedError */.i.withErr(utils_crypto/* importAES */.yj, Exception/* CryptoException */.H3.InvalidCryptoKey);
    const decrypt = CheckedError/* CheckedError */.i.withErr(utils_crypto/* decryptWithAES */.PB, Exception/* CryptoException */.H3.InvalidCryptoKey);
    const jwk_in_u8arr = await decrypt(publicSharedKey.value, iv.value, encryptedKey.value);
    const jwk_in_text = await (0,andThenAsync/* andThenAsync */.p)(jwk_in_u8arr, decodeTextCrypto);
    const jwk = await (0,andThenAsync/* andThenAsync */.p)(jwk_in_text, JSONParse);
    const aes = await (0,andThenAsync/* andThenAsync */.p)(jwk, import_AES_GCM_256);
    return aes;
}
async function decodeECDHPublicKey(compressedPublic) {
    const key = await (0,andThenAsync/* andThenAsync */.p)(decodeUint8ArrayCrypto(compressedPublic), async (val)=>(await esm.Result.wrapAsync(()=>(0,k256/* decompressK256Point */.EU)(val))).mapErr((e)=>new CheckedError/* CheckedError */.i(Exception/* CryptoException */.H3.InvalidCryptoKey, e)));
    if (key.isErr()) return key;
    const { x, y } = key.value;
    const jwk = {
        crv: 'K-256',
        ext: true,
        x,
        y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC'
    };
    const imported = await version_38_parser_importEC(jwk, types/* EC_KeyCurve */._r.secp256k1);
    if (imported.isErr()) return imported;
    return OptionalResult.Some({
        algr: types/* EC_KeyCurve */._r.secp256k1,
        key: imported.value
    });
}

;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/version-40.ts
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ 




const version_40_decodeUint8Array = decodeUint8ArrayF(Exception/* PayloadException */.T6.InvalidPayload, Exception/* PayloadException */.T6.DecodeFailed);
// ? Payload format: (text format)
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Older version is lacking of signature, like:
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText:||
async function parse40(payload) {
    // #region Parse string
    const header = '\u{1F3BC}2/4|';
    if (!payload.startsWith(header)) return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.DecodeFailed, 'Unknown version').toErr();
    let rest = payload.slice(header.length);
    // cut the tail
    rest = rest.slice(0, rest.lastIndexOf(':||'));
    const [ownersAESKeyEncrypted, iv, encryptedText, signature] = rest.split('|');
    // #endregion
    // #region Normalization
    const encryption = {
        type: 'E2E',
        ephemeralPublicKey: {},
        iv: version_40_decodeUint8Array(iv).andThen(utils_crypto/* assertIVLengthEq16 */.R_),
        ownersAESKeyEncrypted: version_40_decodeUint8Array(ownersAESKeyEncrypted)
    };
    const normalized = {
        version: -40,
        author: OptionalResult.None,
        authorPublicKey: OptionalResult.None,
        signature: OptionalResult.None,
        encryption: (0,esm.Ok)(encryption),
        encrypted: version_40_decodeUint8Array(encryptedText)
    };
    if (signature && encryption.iv.isOk() && encryption.ownersAESKeyEncrypted.isOk() && normalized.encrypted.isOk()) {
        const message = (0,kit_esm/* encodeText */.YT)(`4/4|${ownersAESKeyEncrypted}|${iv}|${encryptedText}`);
        const sig = version_40_decodeUint8Array(signature);
        if (sig.isOk()) {
            normalized.signature = OptionalResult.Some({
                signee: message,
                signature: sig.value
            });
        } else {
            normalized.signature = sig;
        }
    }
    return (0,esm.Ok)(normalized);
} // #endregion

;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/version-39.ts
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ 


// -39 payload is totally the same as -40.
// -40 uses unstable JSON stringify in E2E encryption, -39 fixes that.
// We can reuse the payload parser here.
// ? Payload format: (text format)
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Version 39:🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Older version is lacking of signature, like:
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText:||
// ? Version 39:🎼3/4|ownersAESKeyEncrypted|iv|encryptedText:||
async function parse39(payload) {
    const v_40 = '\u{1F3BC}2/4';
    const v_39 = '\u{1F3BC}3/4';
    if (!payload.startsWith(v_39)) return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.UnknownVersion, null).toErr();
    const result = await parse40(payload.replace(v_39, v_40));
    return result.map((x)=>({
            ...x,
            version: -39
        }));
}

;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/version-38.encoder.ts
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ 





var Index;
(function(Index) {
    Index[Index["authorPublicKey"] = 5] = "authorPublicKey";
    Index[Index["publicShared"] = 6] = "publicShared";
    Index[Index["authorIdentifier"] = 7] = "authorIdentifier";
})(Index || (Index = {}));
// ? Version 38:🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier?:||
async function encode38(payload) {
    if (payload.version !== -38) {
        return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.UnknownVersion, null).toErr();
    }
    const AESKeyEncrypted = await encodeAESKeyEncrypted(payload.encryption);
    if (AESKeyEncrypted.isErr()) return AESKeyEncrypted;
    const iv = (0,kit_esm/* encodeArrayBuffer */.ll)(payload.encryption.iv.slice());
    const encrypted = (0,kit_esm/* encodeArrayBuffer */.ll)(payload.encrypted.slice());
    const signature = encodeSignature(payload.signature);
    const fields = [
        '\u{1F3BC}4/4',
        AESKeyEncrypted.value,
        iv,
        encrypted,
        signature
    ];
    if (payload.authorPublicKey.isSome()) {
        const compressed = await compressK256Key(payload.authorPublicKey.value.key);
        if (compressed.isErr()) {
            console.error('[@masknet/encryption] An error happened when compressing a secp256k1 key.', compressed.isErr());
        }
        fields[Index.authorPublicKey] = compressed.unwrapOr('_');
    }
    fields[Index.publicShared] = String(payload.encryption.type === 'public' ? 1 : 0);
    if (payload.author.isSome()) {
        const id = payload.author.value.toText().slice('people:'.length);
        fields[Index.authorIdentifier] = btoa(id);
    }
    return (0,esm.Ok)(fields.join('|') + ':||');
}
async function encodeAESKeyEncrypted(encryption) {
    if (encryption.type === 'E2E') {
        return (0,esm.Ok)((0,kit_esm/* encodeArrayBuffer */.ll)(encryption.ownersAESKeyEncrypted.slice()));
    } else {
        const { AESKey, iv } = encryption;
        const publicSharedKey = await get_v38PublicSharedCryptoKey();
        if (publicSharedKey.isErr()) return publicSharedKey;
        const jwk = await (0,utils_crypto/* exportCryptoKeyToJWK */.nm)(AESKey);
        if (jwk.isErr()) return jwk.mapErr((e)=>new CheckedError/* CheckedError */.i(Exception/* CryptoException */.H3.InvalidCryptoKey, e));
        // There is no reason that these two steps will fail.
        // Use non-CE version so they're fatal error.
        // ? The original implementation uses JSON.stringify
        // ? and JsonWebKey key order returned by WebCrypto by browsers and NodeJS are different.
        // ? We use the Chrome order to keep the result stable.
        const text = `{"alg":"A256GCM","ext":true,"k":"${jwk.value.k}","key_ops":["decrypt","encrypt"],"kty":"oct"}`;
        const ab = (0,kit_esm/* encodeText */.YT)(text);
        const encryptedKey = await (0,utils_crypto/* encryptWithAES */.l_)(publicSharedKey.value, iv, ab);
        if (encryptedKey.isErr()) return encryptedKey.mapErr((e)=>new CheckedError/* CheckedError */.i(Exception/* CryptoException */.H3.EncryptFailed, e));
        return (0,esm.Ok)((0,kit_esm/* encodeArrayBuffer */.ll)(encryptedKey.value.slice()));
    }
}
function encodeSignature(sig) {
    if (sig.isNone()) return '_';
    // TODO: should we validate the signee to make sure that it produce a backward compatible signature of the content?
    return (0,kit_esm/* encodeArrayBuffer */.ll)(sig.value.signature.slice());
}
async function compressK256Key(key) {
    const jwk = await (0,utils_crypto/* exportCryptoKeyToJWK */.nm)(key);
    if (jwk.isErr()) return jwk.mapErr((e)=>new CheckedError/* CheckedError */.i(Exception/* CryptoException */.H3.InvalidCryptoKey, e));
    const arr = (await esm.Result.wrapAsync(()=>(0,k256/* compressK256Point */.rc)(jwk.value.x, jwk.value.y))).mapErr((e)=>new CheckedError/* CheckedError */.i(Exception/* CryptoException */.H3.InvalidCryptoKey, e));
    if (arr.isErr()) return arr;
    return (0,esm.Ok)((0,kit_esm/* encodeArrayBuffer */.ll)(arr.value.slice()));
}

;// CONCATENATED MODULE: ./packages/encryption/src/payload_internal/version-37.encoder.ts




var version_37_encoder_Index;
(function(Index) {
    Index[Index["version"] = 0] = "version";
    Index[Index["authorNetwork"] = 1] = "authorNetwork";
    Index[Index["authorID"] = 2] = "authorID";
    Index[Index["authorPublicKeyAlgorithm"] = 3] = "authorPublicKeyAlgorithm";
    Index[Index["authorPublicKey"] = 4] = "authorPublicKey";
    Index[Index["encryption"] = 5] = "encryption";
    Index[Index["data"] = 6] = "data";
})(version_37_encoder_Index || (version_37_encoder_Index = {}));
async function encode37(payload) {
    const payload_arr = [
        0
    ];
    if (payload.author.isSome()) {
        const { network, userId } = payload.author.value;
        payload_arr[version_37_encoder_Index.authorNetwork] = network;
        payload_arr[version_37_encoder_Index.authorID] = userId;
    }
    if (payload.authorPublicKey.isSome()) {
        const { algr, key } = payload.authorPublicKey.value;
        payload_arr[version_37_encoder_Index.authorPublicKeyAlgorithm] = algr;
        const raw = await (0,utils_crypto/* exportCryptoKeyToRaw */.bu)(key);
        if (raw.isOk()) {
            if (algr === types/* EC_KeyCurve */._r.secp256k1) payload_arr[version_37_encoder_Index.authorPublicKey] = await (0,k256/* compressK256KeyRaw */.YT)(raw.value);
            else payload_arr[version_37_encoder_Index.authorPublicKey] = raw.value;
        } else {
            payload_arr[version_37_encoder_Index.authorPublicKey] = null;
            warn(key, raw.isErr());
        }
    }
    if (payload.encryption.type === 'E2E') {
        const { ephemeralPublicKey, iv, ownersAESKeyEncrypted } = payload.encryption;
        const keyMaterials = {};
        const subArr = [
            1,
            ownersAESKeyEncrypted,
            iv,
            keyMaterials
        ];
        for (const [alg, key] of ephemeralPublicKey.entries()){
            const k = await (0,utils_crypto/* exportCryptoKeyToRaw */.bu)(key);
            if (k.isErr()) warn(key, k.isErr());
            else {
                if (alg === types/* EC_KeyCurve */._r.secp256k1) keyMaterials[alg] = await (0,k256/* compressK256KeyRaw */.YT)(k.value);
                else keyMaterials[alg] = k.value;
            }
        }
        payload_arr[version_37_encoder_Index.encryption] = subArr;
    } else {
        const { AESKey, iv } = payload.encryption;
        const subArr = [
            0,
            new Uint8Array(await crypto.subtle.exportKey('raw', AESKey)),
            iv
        ];
        payload_arr[version_37_encoder_Index.encryption] = subArr;
    }
    payload_arr[version_37_encoder_Index.data] = payload.encrypted;
    return (0,esm.Ok)(encodeMessagePack(payload_arr));
}
function warn(key, err) {
    console.warn('[@masknet/encryption] Failed to export public key. key is', key, 'and the error is', err);
}

;// CONCATENATED MODULE: ./packages/encryption/src/payload/index.ts






async function parsePayload(payload) {
    if (payload instanceof Uint8Array) {
        return parse37(payload.slice());
    }
    if (typeof payload === 'string') {
        if (payload.startsWith('\u{1F3BC}4/4')) return parse38(payload);
        if (payload.startsWith('\u{1F3BC}3/4')) return parse39(payload);
        if (payload.startsWith('\u{1F3BC}2/4')) return parse40(payload);
    }
    return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.UnknownVersion, null).toErr();
}
async function encodePayloadWithoutSignatureContainer(payload) {
    if (payload.version === -38) return encode38(payload);
    else if (payload.version === -37) return encode37(payload);
    const decodeOnly = payload.version === -39 || payload.version === -40 || payload.version === -41;
    const errorMessage = decodeOnly ? `version ${payload.version} only supports decode.` : null;
    return new CheckedError/* CheckedError */.i(Exception/* PayloadException */.T6.UnknownVersion, errorMessage).toErr();
}
async function encodePayload(payload, sign) {
    if (payload.version === -37) {
        const bin = await encodePayloadWithoutSignatureContainer(payload);
        if (bin.isErr()) return bin;
        if (typeof bin.value === 'string') throw new TypeError('This should never be string');
        const sig = await sign(payload, bin.value);
        if (sig.isErr()) return sig;
        return (0,esm.Ok)(encodeSignatureContainer(bin.value, sig.value.unwrapOr(null)));
    }
    const val = await encodePayloadWithoutSignatureContainer(payload);
    if (val.isOk() && typeof val.value !== 'string') throw new TypeError('This should always be a string for version < -37');
    return val;
}
encodePayload.NoSign = (payload)=>encodePayload(payload, async ()=>OptionalResult.None);


/***/ }),

/***/ 83159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FL: () => (/* binding */ EncryptPayloadNetwork),
/* harmony export */   _r: () => (/* binding */ EC_KeyCurve),
/* harmony export */   k0: () => (/* binding */ encryptPayloadNetworkToDomain)
/* harmony export */ });
var // This file contains normalized Payload.
// Internal payload should not be exported
/** A parse result, that try to preserve as many info as possible. */ /**
         * The claimed author of this payload.
         */ /**
         * The claimed public key of author.
         */ /** The encryption method this payload used. */ /** The encrypted content. */ /**
     * A publicly encrypted payload.
     */ /**
     * An E2E encrypted payload.
     */ /** Well formed payload that can be encoded into the latest version */ /**
         * The claimed author of this payload.
         */ /**
         * The claimed public key of author.
         */ /** The encryption method this payload used. */ /** The encrypted content. */ /**
     * A publicly encrypted payload.
     */ /** The key used to encrypt the payload. It should be AES-256-GCM */ /**
     * An E2E encrypted payload.
     */ EC_KeyCurve;
(function(EC_KeyCurve) {
    EC_KeyCurve[EC_KeyCurve[// ed25519 = 0, Ed25519 is not supported by WebCrypto. Don't have a standard name, but maybe "Ed25519"
    // https://github.com/tQsW/webcrypto-curve25519/blob/master/explainer.md
    "secp256p1"] = 1] = "secp256p1";
    EC_KeyCurve[EC_KeyCurve[// P-256
    "secp256k1"] = 2] = "secp256k1";
})(EC_KeyCurve || (EC_KeyCurve = {}));
var // K-256
EncryptPayloadNetwork;
(function(EncryptPayloadNetwork) {
    EncryptPayloadNetwork[EncryptPayloadNetwork["Unknown"] = -1] = "Unknown";
    EncryptPayloadNetwork[EncryptPayloadNetwork["Facebook"] = 0] = "Facebook";
    EncryptPayloadNetwork[EncryptPayloadNetwork["Twitter"] = 1] = "Twitter";
    EncryptPayloadNetwork[EncryptPayloadNetwork["Instagram"] = 2] = "Instagram";
    EncryptPayloadNetwork[EncryptPayloadNetwork["Minds"] = 3] = "Minds";
})(EncryptPayloadNetwork || (EncryptPayloadNetwork = {}));
/**
 * Version starts from -42 but -42 and -41 are dropped.
 *
 * The latest version is -37.
 */ const map = {
    [EncryptPayloadNetwork.Unknown]: 'localhost',
    [EncryptPayloadNetwork.Facebook]: 'facebook.com',
    [EncryptPayloadNetwork.Minds]: 'minds.com',
    [EncryptPayloadNetwork.Twitter]: 'twitter.com',
    [EncryptPayloadNetwork.Instagram]: 'instagram.com'
};
function encryptPayloadNetworkToDomain(x) {
    return map[x];
}


/***/ }),

/***/ 41013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H3: () => (/* binding */ CryptoException),
/* harmony export */   T6: () => (/* binding */ PayloadException),
/* harmony export */   Wr: () => (/* binding */ assertArray),
/* harmony export */   jY: () => (/* binding */ assertUint8Array)
/* harmony export */ });
/* harmony import */ var _masknet_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90436);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);


var CryptoException;
(function(CryptoException) {
    CryptoException["InvalidCryptoKey"] = '[@masknet/encryption] Encountered an invalid CryptoKey.';
    CryptoException["EncryptFailed"] = '[@masknet/encryption] Failed to encrypt.';
    CryptoException["DecryptFailed"] = '[@masknet/encryption] Failed to decrypt.';
    CryptoException["UnsupportedAlgorithm"] = '[@masknet/encryption] Unsupported crypto algorithm.';
    CryptoException["InvalidIVLength"] = '[@masknet/encryption] IV length must be 16.';
})(CryptoException || (CryptoException = {}));
var PayloadException;
(function(PayloadException) {
    PayloadException["EncodeFailed"] = '[@masknet/encryption] Failed to encode the payload.';
    PayloadException["DecodeFailed"] = '[@masknet/encryption] Failed to decode the payload.';
    PayloadException["InvalidPayload"] = '[@masknet/encryption] Payload decoded, but it violates the schema.';
    PayloadException["UnknownEnumMember"] = '[@masknet/encryption] Payload includes an unknown enum member.';
    PayloadException["UnknownVersion"] = '[@masknet/encryption] Unsupported payload version.';
})(PayloadException || (PayloadException = {}));
function assertUint8Array(x, name, kinds) {
    if (x instanceof Uint8Array) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(x);
    if (x instanceof ArrayBuffer) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(new Uint8Array(x));
    return new _masknet_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .i(kinds, `${name} is not a Binary`).toErr();
}
function assertArray(name, kinds) {
    return (x)=>{
        if (Array.isArray(x)) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(x);
        return new _masknet_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .i(kinds, `${name} is no an Array`).toErr();
    };
}


/***/ }),

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OT: () => (/* binding */ importEC_Key),
/* harmony export */   PB: () => (/* binding */ decryptWithAES),
/* harmony export */   R_: () => (/* binding */ assertIVLengthEq16),
/* harmony export */   bu: () => (/* binding */ exportCryptoKeyToRaw),
/* harmony export */   gb: () => (/* binding */ getEcKeyCurve),
/* harmony export */   l_: () => (/* binding */ encryptWithAES),
/* harmony export */   nm: () => (/* binding */ exportCryptoKeyToJWK),
/* harmony export */   yj: () => (/* binding */ importAES)
/* harmony export */ });
/* harmony import */ var _masknet_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90436);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _payload_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83159);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41013);




function importAES(key) {
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrapAsync(()=>{
        if (key instanceof Uint8Array) {
            return crypto.subtle.importKey('raw', key, {
                name: 'AES-GCM',
                length: 256
            }, true, [
                'encrypt',
                'decrypt'
            ]);
        }
        return crypto.subtle.importKey('jwk', key, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt',
            'decrypt'
        ]);
    });
}
function exportCryptoKeyToJWK(key) {
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrapAsync(()=>crypto.subtle.exportKey('jwk', key));
}
function exportCryptoKeyToRaw(key) {
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrapAsync(()=>crypto.subtle.exportKey('raw', key).then((x)=>new Uint8Array(x)));
}
function importEC_Key(key, kind) {
    const DeriveKeyUsage = [
        'deriveKey',
        'deriveBits'
    ];
    const ImportParamsMap = {
        [_payload_index_js__WEBPACK_IMPORTED_MODULE_1__/* .EC_KeyCurve */ ._r.secp256k1]: {
            name: 'ECDH',
            namedCurve: 'K-256'
        },
        [_payload_index_js__WEBPACK_IMPORTED_MODULE_1__/* .EC_KeyCurve */ ._r.secp256p1]: {
            name: 'ECDH',
            namedCurve: 'P-256'
        }
    };
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrapAsync(async ()=>{
        const args = [
            ImportParamsMap[kind],
            true,
            DeriveKeyUsage
        ];
        if (key instanceof Uint8Array) {
            return crypto.subtle.importKey('raw', key, ...args);
        } else {
            return crypto.subtle.importKey('jwk', key, ...args);
        }
    });
}
function encryptWithAES(key, iv, message) {
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrapAsync(async ()=>{
        const x = await crypto.subtle.encrypt({
            name: 'AES-GCM',
            iv
        }, key, message);
        return new Uint8Array(x);
    });
}
function decryptWithAES(key, iv, message) {
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrapAsync(async ()=>{
        return new Uint8Array(await crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv
        }, key, message));
    });
}
function assertIVLengthEq16(arrayBuffer) {
    if (arrayBuffer.byteLength === 16) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(arrayBuffer);
    return new _masknet_base__WEBPACK_IMPORTED_MODULE_2__/* .CheckedError */ .i(_types_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CryptoException */ .H3.InvalidIVLength, null).toErr();
}
function getEcKeyCurve(key) {
    const algr = key.algorithm;
    if (algr.namedCurve === 'K-256') return _payload_index_js__WEBPACK_IMPORTED_MODULE_1__/* .EC_KeyCurve */ ._r.secp256k1;
    if (algr.namedCurve === 'P-256') return _payload_index_js__WEBPACK_IMPORTED_MODULE_1__/* .EC_KeyCurve */ ._r.secp256p1;
    throw new Error('Unknown curve');
}


/***/ }),

/***/ 51573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _flags_buildInfo_js__WEBPACK_IMPORTED_MODULE_2__.OB),
/* harmony export */   v: () => (/* binding */ Flags)
/* harmony export */ });
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76102);
/* harmony import */ var _libs_RemoteFlags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24935);
/* harmony import */ var _flags_buildInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15393);


const flags = new _libs_RemoteFlags_js__WEBPACK_IMPORTED_MODULE_0__/* .RemoteFlags */ .C('https://mask-flags.r2d2.to/', _flags_index_js__WEBPACK_IMPORTED_MODULE_1__/* .flags */ .i);
// fetch each time starts the app, updates will be enabled
flags.fetchAndActive();
const Flags = flags.accessor;



/***/ }),

/***/ 46110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 61271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Az: () => (/* binding */ queryAvatarsDataURL),
/* harmony export */   IK: () => (/* binding */ queryAvatarLastUpdateTime),
/* harmony export */   Zk: () => (/* binding */ storeAvatar)
/* harmony export */ });
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43058);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _utils_openDB_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16234);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43434);




const impl = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, async function(identifiers) {
    const promises = [];
    const map = new Map();
    const t = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .createAvatarDBAccess */ .Hm)(), 'readonly')('avatars');
    for (const id of identifiers){
        // Must not await here. Because we insert non-idb async operation (blobToDataURL).
        promises.push((0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .queryAvatarDB */ .dg)(t, id).then((avatar)=>{
            if (!avatar) return;
            return typeof avatar === 'string' ? avatar : (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .blobToDataURL */ .n5)(new Blob([
                avatar
            ], {
                type: 'image/png'
            }));
        }).then((url)=>url && map.set(id, url)));
    }
    await Promise.allSettled(promises);
    return map;
}, (id)=>id.flatMap((x)=>x.toText()).join(';'));
const queryAvatarLastUpdateTimeImpl = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, async (identifier)=>{
    const t = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .createAvatarDBAccess */ .Hm)(), 'readonly')('metadata');
    const metadata = await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .queryAvatarMetaDataDB */ .Pr)(t, identifier);
    return metadata?.lastUpdateTime;
}, (x)=>x);
const queryAvatarsDataURL = impl;
const queryAvatarLastUpdateTime = queryAvatarLastUpdateTimeImpl;
/**
 * Store an avatar with a url for an identifier.
 * @param identifier - This avatar belongs to.
 * @param avatar - Avatar to store. If it is a string, will try to fetch it.
 */ async function storeAvatar(identifier, avatar) {
    try {
        if (typeof avatar === 'string') {
            if (avatar.startsWith('https') === false) return;
            const isOutdated = await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .isAvatarOutdatedDB */ .PU)((0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .createAvatarDBAccess */ .Hm)(), 'readonly')('metadata'), identifier, 'lastUpdateTime');
            if (isOutdated) {
                // ! must fetch before create the transaction
                const buffer = await fetch(avatar).then((r)=>r.arrayBuffer(), ()=>avatar);
                {
                    const t = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .createAvatarDBAccess */ .Hm)(), 'readwrite')('avatars', 'metadata');
                    await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .storeAvatarDB */ .CW)(t, identifier, buffer);
                }
            }
        } else // else do nothing
        {
            const t = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .createAvatarDBAccess */ .Hm)(), 'readwrite')('avatars', 'metadata');
            await (0,_db_js__WEBPACK_IMPORTED_MODULE_3__/* .storeAvatarDB */ .CW)(t, identifier, avatar);
        }
    } catch (error) {
        console.error('[AvatarDB] Store avatar failed', error);
    } finally{
        queryAvatarLastUpdateTimeImpl.cache.clear();
        impl.cache.clear();
    }
}


/***/ }),

/***/ 43058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CW: () => (/* binding */ storeAvatarDB),
/* harmony export */   Hm: () => (/* binding */ createAvatarDBAccess),
/* harmony export */   PU: () => (/* binding */ isAvatarOutdatedDB),
/* harmony export */   Pr: () => (/* binding */ queryAvatarMetaDataDB),
/* harmony export */   dg: () => (/* binding */ queryAvatarDB),
/* harmony export */   ft: () => (/* binding */ deleteAvatarsDB),
/* harmony export */   yo: () => (/* binding */ queryAvatarOutdatedDB)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12247);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50508);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19477);
/* harmony import */ var _utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16234);



const pendingUpdate = new Map();
let pendingUpdateTimer;
// #region Schema
/** Use out-of-line keys */ /** Key is value.identifier */ // #endregion
const createAvatarDBAccess = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-avatar-cache', 1, {
        upgrade (db, oldVersion, newVersion, transaction) {
            // Out line keys
            db.createObjectStore('avatars');
            db.createObjectStore('metadata', {
                keyPath: 'identifier'
            });
        }
    });
});
/**
 * Store avatar into database
 */ async function storeAvatarDB(t, id, avatar) {
    const meta = {
        identifier: id.toText(),
        lastUpdateTime: new Date(),
        lastAccessTime: new Date()
    };
    await t.objectStore('avatars').put(avatar, id.toText());
    await t.objectStore('metadata').put(meta);
}
/**
 * Read avatar out
 */ async function queryAvatarDB(t, id) {
    const result = await t.objectStore('avatars').get(id.toText());
    if (result) scheduleAvatarMetaUpdate(id, {
        lastAccessTime: new Date()
    });
    return result || null;
}
async function queryAvatarMetaDataDB(t, id) {
    return t.objectStore('metadata').get(id.toText());
}
function scheduleAvatarMetaUpdate(id, meta) {
    pendingUpdate.set(id, meta);
    if (pendingUpdateTimer) return;
    const _1_minute = 60 * 1000;
    pendingUpdateTimer = setTimeout(async ()=>{
        try {
            const t = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await createAvatarDBAccess(), 'readwrite')('metadata');
            for (const [id, meta] of pendingUpdate){
                const old = await t.objectStore('metadata').get(id.toText());
                await t.objectStore('metadata').put({
                    ...old,
                    ...meta
                });
            }
        } finally{
            pendingUpdateTimer = null;
            pendingUpdate.clear();
        }
    }, _1_minute);
}
/**
 * Find avatar lastUpdateTime or lastAccessTime out-of-date
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 14 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 * @internal
 */ async function queryAvatarOutdatedDB(t, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 14 : 7))) {
    const outdated = [];
    for await (const { value } of t.objectStore('metadata')){
        if (deadline > value[attribute]) {
            const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Identifier */ .x.from(value.identifier);
            if (id.isNone()) continue;
            if (id.value instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ProfileIdentifier */ .W || id.value instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier */ .o) outdated.push(id.value);
        }
    }
    return outdated;
}
/**
 * Query if the avatar is outdated
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 30 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 * @internal
 */ async function isAvatarOutdatedDB(t, identifier, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 30 : 7))) {
    const meta = await t.objectStore('metadata').get(identifier.toText());
    if (!meta) return true;
    if (deadline > meta[attribute]) return true;
    return false;
}
/**
 * Batch delete avatars
 * @internal
 */ async function deleteAvatarsDB(t, ids) {
    for (const id of ids){
        t.objectStore('avatars').delete(id.toText());
        t.objectStore('metadata').delete(id.toText());
    }
}


/***/ }),

/***/ 5706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MM: () => (/* binding */ decryptByLocalKey),
/* harmony export */   M_: () => (/* binding */ queryPublicKey),
/* harmony export */   Si: () => (/* binding */ deriveAESByECDH),
/* harmony export */   i6: () => (/* binding */ encryptByLocalKey),
/* harmony export */   lr: () => (/* binding */ createProfileWithPersona),
/* harmony export */   w0: () => (/* binding */ createPersonaByJsonWebKey),
/* harmony export */   wf: () => (/* binding */ hasLocalKeyOf)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50508);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19477);
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70345);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89601);




// #region Local key helpers
/**
 * If has local key of a profile in the database.
 * @param id Profile Identifier
 */ async function hasLocalKeyOf(id) {
    let has = false;
    await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const result = await getLocalKeyOf(id, tx);
        has = !!result;
    });
    return has;
}
/**
 * Try to decrypt data using local key.
 *
 * @param authorHint Author of the local key
 * @param data Data to be decrypted
 * @param iv IV
 */ async function decryptByLocalKey(authorHint, data, iv) {
    const candidateKeys = [];
    if (authorHint) {
        await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
            const key = await getLocalKeyOf(authorHint, tx);
            key && candidateKeys.push(key);
        });
    }
    // TODO: We may push every local key we owned to the candidate list so we can also decrypt when authorHint is null, but that might be a performance pitfall when localKey field is not indexed.
    let check = lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
    return Promise.any(candidateKeys.map(async (key)=>{
        const k = await crypto.subtle.importKey('jwk', key, {
            name: 'AES-GCM',
            length: 256
        }, false, [
            'decrypt'
        ]);
        check();
        const result = await crypto.subtle.decrypt({
            iv,
            name: 'AES-GCM'
        }, k, data);
        check = abort;
        return result;
    }));
}
async function encryptByLocalKey(who, content, iv) {
    let key;
    await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const jwk = await getLocalKeyOf(who, tx);
        if (!jwk) return;
        const k = await crypto.subtle.importKey('jwk', jwk, {
            name: 'AES-GCM',
            length: 256
        }, false, [
            'encrypt'
        ]);
        key = k;
    });
    if (!key) throw new Error('No local key found');
    const result = await crypto.subtle.encrypt({
        iv,
        name: 'AES-GCM'
    }, key, content);
    return result;
}
async function getLocalKeyOf(id, tx) {
    const profile = await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .queryProfileDB */ .IW)(id, tx);
    if (!profile) return;
    if (profile.localKey) return profile.localKey;
    if (!profile.linkedPersona) return;
    const persona = await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaByProfileDB */ .fl)(id, tx);
    return persona?.localKey;
}
// #endregion
// #region ECDH
async function deriveAESByECDH(pub, of) {
    // Note: the correct type should be EcKeyAlgorithm but it is missing in worker dts
    const curve = pub.algorithm.namedCurve || '';
    const sameCurvePrivateKeys = new Map();
    await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const personas = await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonasWithPrivateKey */ .Eq)(tx);
        for (const persona of personas){
            if (!persona.privateKey) continue;
            if (persona.privateKey.crv !== curve) continue;
            if (of) {
                if (of instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ProfileIdentifier */ .W) {
                    if (!persona.linkedProfiles.has(of)) continue;
                } else if (of instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier */ .o) {
                    if (persona.identifier !== of) continue;
                } else (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(of);
            }
            sameCurvePrivateKeys.set(persona.identifier, persona.privateKey);
        }
    });
    const deriveResult = new Map();
    const result = await Promise.allSettled([
        ...sameCurvePrivateKeys
    ].map(async ([id, key])=>{
        const privateKey = await crypto.subtle.importKey('jwk', key, {
            name: 'ECDH',
            namedCurve: key.crv
        }, false, [
            'deriveKey'
        ]);
        const derived = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: pub
        }, privateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        deriveResult.set(id, derived);
    }));
    const failed = result.filter((x)=>x.status === 'rejected');
    if (failed.length) {
        console.warn('Failed to ECDH', ...failed.map((x)=>x.reason));
    }
    return deriveResult;
}
// #endregion
// #region normal functions
async function createPersonaByJsonWebKey(options) {
    const identifier = (await _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier */ .o.fromJsonWebKey(options.publicKey)).unwrap();
    const record = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier,
        linkedProfiles: new Map(),
        publicKey: options.publicKey,
        privateKey: options.privateKey,
        nickname: options.nickname,
        mnemonic: options.mnemonic,
        localKey: options.localKey,
        hasLogout: false,
        uninitialized: options.uninitialized
    };
    await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)((t)=>(0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .createPersonaDB */ .E9)(record, t));
    return identifier;
}
async function createProfileWithPersona(profileID, data, keys) {
    const ec_id = (await _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier */ .o.fromJsonWebKey(keys.publicKey)).unwrap();
    const rec = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: ec_id,
        linkedProfiles: new Map(),
        nickname: keys.nickname,
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        localKey: keys.localKey,
        mnemonic: keys.mnemonic,
        hasLogout: false
    };
    await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
        await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdatePersonaDB */ .lX)(rec, {
            explicitUndefinedField: 'ignore',
            linkedProfiles: 'merge'
        }, t);
        await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .attachProfileDB */ .tc)(profileID, ec_id, data, t);
    });
}
// #endregion
async function queryPublicKey(author) {
    if (!author) return null;
    const persona = await (0,_db_js__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaByProfileDB */ .fl)(author);
    if (!persona) return null;
    return await crypto.subtle.importKey('jwk', persona.publicKey, {
        name: 'ECDH',
        namedCurve: persona.publicKey.crv
    }, true, [
        'deriveKey'
    ]);
}
function abort() {
    throw new Error('Cancelled');
}


/***/ }),

/***/ 70345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tc: () => (/* binding */ attachProfileDB),
  As: () => (/* binding */ consistentPersonaDBWriteAccess),
  lX: () => (/* binding */ createOrUpdatePersonaDB),
  o7: () => (/* binding */ createOrUpdateProfileDB),
  hK: () => (/* binding */ createOrUpdateRelationDB),
  E9: () => (/* binding */ createPersonaDB),
  hC: () => (/* binding */ createPersonaDBReadonlyAccess),
  ah: () => (/* binding */ createProfileDB),
  N8: () => (/* binding */ createRelationDB),
  cl: () => (/* binding */ createRelationsTransaction),
  LY: () => (/* binding */ deletePersonaDB),
  H0: () => (/* binding */ deletePersonaRelationDB),
  B4: () => (/* binding */ deleteProfileDB),
  AY: () => (/* binding */ detachProfileDB),
  fl: () => (/* binding */ queryPersonaByProfileDB),
  Hm: () => (/* binding */ queryPersonaDB),
  _P: () => (/* binding */ queryPersonasDB),
  Eq: () => (/* binding */ queryPersonasWithPrivateKey),
  IW: () => (/* binding */ queryProfileDB),
  i2: () => (/* binding */ queryProfilesDB),
  bF: () => (/* binding */ queryRelations),
  PF: () => (/* binding */ queryRelationsPagedDB),
  Ul: () => (/* binding */ safeDeletePersonaDB),
  E8: () => (/* binding */ updatePersonaDB),
  Jx: () => (/* binding */ updateRelationDB)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(8610);
// EXTERNAL MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/with-async-ittr.js + 3 modules
var with_async_ittr = __webpack_require__(29311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethereumjs+util@8.0.5/node_modules/@ethereumjs/util/dist/index.js
var dist = __webpack_require__(6509);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Persona.ts
var Persona = __webpack_require__(3545);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var Identifier_profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/base/src/Identifier/base.ts
var base = __webpack_require__(12247);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post.ts
var post = __webpack_require__(82654);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post-iv.ts
var post_iv = __webpack_require__(97039);
;// CONCATENATED MODULE: ./packages/base/src/Identifier/map.ts





// you're free to add a new overload...
function convertRawMapToIdentifierMap(it, ...of) {
    const hasProfileIdentifier = of.includes(Identifier_profile/* ProfileIdentifier */.W);
    const hasECKeyIdentifier = of.includes(ec_key/* ECKeyIdentifier */.o);
    const hasPostIdentifier = of.includes(post/* PostIdentifier */._);
    const hasPostIVIdentifier = of.includes(post_iv/* PostIVIdentifier */.b);
    const result = new Map();
    const droppedValues = new Map();
    for (const [key, value] of it){
        const id = base/* Identifier */.x.from(key);
        if (id.isNone()) {
            droppedValues.set(key, value);
            continue;
        }
        if (hasProfileIdentifier && id.value instanceof Identifier_profile/* ProfileIdentifier */.W) result.set(id.value, value);
        else if (hasECKeyIdentifier && id.value instanceof ec_key/* ECKeyIdentifier */.o) result.set(id.value, value);
        else if (hasPostIdentifier && id.value instanceof post/* PostIdentifier */._) result.set(id.value, value);
        else if (hasPostIVIdentifier && id.value instanceof post_iv/* PostIVIdentifier */.b) result.set(id.value, value);
        else droppedValues.set(key, value);
    }
    if (droppedValues.size) {
        console.warn('[@masknet/shared-base] identifierRawMapToMap: Some value violates the constraint. Dropped values:', droppedValues, 'constraints:', of);
    }
    return result;
}
function convertIdentifierMapToRawMap(map) {
    const result = new Map();
    for (const [key, value] of map){
        result.set(key.toText(), value);
    }
    return result;
}

// EXTERNAL MODULE: ./packages/mask/utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(47264);
// EXTERNAL MODULE: ./packages/mask/background/database/utils/openDB.ts
var openDB = __webpack_require__(16234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
;// CONCATENATED MODULE: ./packages/mask/background/database/persona/consistency.ts


/** @internal */ async function assertPersonaDBConsistency(behavior, ...[checkRange, t]) {
    const diag = [];
    for await (const w of checkFullPersonaDBConsistency(checkRange, t)){
        diag.push(w);
    }
    if (diag.length) {
        const warn = 'PersonaDB is in the inconsistency state';
        console.warn(warn);
        console.info(await t.objectStore('personas').getAll());
        console.info(await t.objectStore('profiles').getAll());
        console.error(...diag);
        if (behavior === 'throw') {
            t.abort();
            throw new Error(warn);
        } else if (t.mode === 'readwrite') {
            console.warn('Try to fix the inconsistent db');
            for (const each of diag)await fixDBInconsistency(each, t).catch(()=>{});
        }
    }
    return diag;
}
async function fixDBInconsistency(diagnosis, t) {
    const personas = t.objectStore('personas');
    const profiles = t.objectStore('profiles');
    switch(diagnosis.type){
        case 'invalid identifier in persona':
            return personas.delete(diagnosis.invalidPersonaKey);
        case 'invalid identifier in profile':
            return profiles.delete(diagnosis.invalidProfileKey);
        case 'a persona linked to a profile meanwhile the profile is not linked to the persona':
        case 'invalid identifier in persona.linkedProfiles':
            {
                const rec = await personas.get(diagnosis.persona.toText());
                const profileWantToUnlink = diagnosis.type === 'a persona linked to a profile meanwhile the profile is not linked to the persona' ? diagnosis.designatedProfile.toText() : diagnosis.invalidProfile;
                rec.linkedProfiles.delete(profileWantToUnlink);
                return personas.put(rec);
            }
        case 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles':
        case 'invalid identifier in profile.linkedPersona':
            {
                const rec = await profiles.get(diagnosis.profile.toText());
                delete rec.linkedPersona;
                return profiles.put(rec);
            }
        default:
            return (0,esm/* unreachable */.t1)(diagnosis);
    }
}
async function* checkFullPersonaDBConsistency(checkRange, t) {
    for await (const persona of t.objectStore('personas')){
        const personaID = ec_key/* ECKeyIdentifier */.o.from(persona.key);
        if (personaID.isNone()) {
            yield {
                type: 'invalid identifier in persona',
                invalidPersonaKey: persona.key,
                _record: persona.value
            };
            continue;
        }
        if (checkRange === 'full check' || checkRange.has(personaID.value)) {
            yield* checkPersonaLink(personaID.value, t);
        }
    }
    for await (const profile of t.objectStore('profiles')){
        const profileID = Identifier_profile/* ProfileIdentifier */.W.from(profile.key);
        if (profileID.isNone()) {
            yield {
                type: 'invalid identifier in profile',
                invalidProfileKey: profile.key,
                _record: profile.value
            };
        } else if (checkRange === 'full check' || checkRange.has(profileID.value)) {
            yield* checkProfileLink(profileID.value, t);
        }
    }
}
async function* checkPersonaLink(personaID, t) {
    const rec = await t.objectStore('personas').get(personaID.toText());
    const linkedProfiles = rec?.linkedProfiles;
    if (!linkedProfiles) return;
    for (const each of linkedProfiles){
        const profileID = Identifier_profile/* ProfileIdentifier */.W.from(each[0]);
        if (profileID.isNone()) {
            yield {
                type: 'invalid identifier in persona.linkedProfiles',
                invalidProfile: each[0],
                persona: personaID
            };
            continue;
        }
        const profile = await t.objectStore('profiles').get(profileID.value.toText());
        if (!profile?.linkedPersona) {
            yield {
                type: 'a persona linked to a profile meanwhile the profile is not linked to the persona',
                persona: personaID,
                designatedProfile: profileID.value,
                profileActuallyLinkedPersona: profile?.linkedPersona
            };
        }
    }
}
async function* checkProfileLink(profile, t) {
    const rec = await t.objectStore('profiles').get(profile.toText());
    const invalidLinkedPersona = rec?.linkedPersona;
    if (!invalidLinkedPersona) return;
    if (invalidLinkedPersona.type !== 'ec_key') {
        yield {
            type: 'invalid identifier in profile.linkedPersona',
            invalidLinkedPersona,
            profile
        };
        return;
    }
    const designatedPersona = new ec_key/* ECKeyIdentifier */.o(invalidLinkedPersona.curve, invalidLinkedPersona.compressedPoint || invalidLinkedPersona.encodedCompressedKey);
    const persona = await t.objectStore('personas').get(designatedPersona.toText());
    if (!persona?.linkedProfiles.has(profile.toText())) {
        yield {
            type: 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles',
            profile,
            designatedPersona
        };
    }
}
var Type;
(function(Type) {
    Type["Invalid_Persona"] = 'invalid identifier in persona';
    Type["Invalid_Persona_LinkedProfiles"] = 'invalid identifier in persona.linkedProfiles';
    Type["Invalid_Profile"] = 'invalid identifier in profile';
    Type["Invalid_Profile_LinkedPersona"] = 'invalid identifier in profile.linkedPersona';
    Type["One_Way_Link_In_Persona"] = 'a persona linked to a profile meanwhile the profile is not linked to the persona';
    Type["One_Way_Link_In_Profile"] = 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles';
})(Type || (Type = {}));

;// CONCATENATED MODULE: ./packages/mask/background/database/persona/web.ts
/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];







/**
 * Database structure:
 *
 * # ObjectStore `persona`:
 * @description Store Personas.
 * @type {PersonaRecordDB}
 * @keys inline, {@link PersonaRecordDB.identifier}
 *
 * # ObjectStore `profiles`:
 * @description Store profiles.
 * @type {ProfileRecord}
 * A persona links to 0 or more profiles.
 * Each profile links to 0 or 1 persona.
 * @keys inline, {@link ProfileRecord.identifier}
 *
 * # ObjectStore `relations`:
 * @description Store relations.
 * @type {RelationRecord}
 * Save the relationship between persona and profile.
 * @keys inline {@link RelationRecord.linked  @link RelationRecord.profile}
 */ const db = (0,openDB/* createDBAccessWithAsyncUpgrade */.Ns)(1, 4, (currentOpenVersion, knowledge)=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-persona', currentOpenVersion, {
        upgrade (db, oldVersion, newVersion, transaction) {
            function v0_v1() {
                db.createObjectStore('personas', {
                    keyPath: 'identifier'
                });
                db.createObjectStore('profiles', {
                    keyPath: 'identifier'
                });
                transaction.objectStore('profiles').createIndex('network', 'network', {
                    unique: false
                });
                transaction.objectStore('personas').createIndex('hasPrivateKey', 'hasPrivateKey', {
                    unique: false
                });
            }
            async function v1_v2() {
                const persona = transaction.objectStore('personas');
                const profile = transaction.objectStore('profiles');
                await update(persona);
                await update(profile);
                async function update(q) {
                    for await (const rec of persona){
                        if (!rec.value.localKey) continue;
                        const jwk = knowledge?.data.get(rec.value.identifier);
                        if (!jwk) {
                            // !!! This should not happen
                            // !!! Remove it will implicitly drop user's localKey
                            delete rec.value.localKey;
                        }
                        // !!! Keep it will leave a bug, broken data in the DB
                        // continue
                        // !!! DON'T throw cause it will break the database upgrade
                        rec.value.localKey = jwk;
                        await rec.update(rec.value);
                    }
                }
            }
            async function v2_v3() {
                try {
                    db.createObjectStore('relations', {
                        keyPath: [
                            'linked',
                            'profile'
                        ]
                    });
                    transaction.objectStore('relations').createIndex('linked, profile, favor', [
                        'linked',
                        'profile',
                        'favor'
                    ], {
                        unique: true
                    });
                } catch  {}
            }
            async function v3_v4() {
                try {
                    transaction.objectStore('relations').deleteIndex('linked, profile, favor');
                    transaction.objectStore('relations').createIndex('favor, profile, linked', [
                        'favor',
                        'profile',
                        'linked'
                    ], {
                        unique: true
                    });
                    const relation = transaction.objectStore('relations');
                    await update(relation);
                    async function update(q) {
                        for await (const rec of relation){
                            rec.value.favor = rec.value.favor === Persona/* RelationFavor */.K.DEPRECATED ? Persona/* RelationFavor */.K.UNCOLLECTED : Persona/* RelationFavor */.K.COLLECTED;
                            await rec.update(rec.value);
                        }
                    }
                } catch  {}
            }
            if (oldVersion < 1) v0_v1();
            if (oldVersion < 2) v1_v2();
            if (oldVersion < 3) v2_v3();
            if (oldVersion < 4) v3_v4();
        }
    });
}, async (db)=>{
    if (db.version === 1) {
        const map = {
            version: 2,
            data: new Map()
        };
        const t = (0,openDB/* createTransaction */._X)(db, 'readonly')('personas', 'profiles');
        const a = await t.objectStore('personas').getAll();
        const b = await t.objectStore('profiles').getAll();
        for (const rec of [
            ...a,
            ...b
        ]){
            if (!rec.localKey) continue;
            map.data.set(rec.identifier, await (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(rec.localKey));
        }
        return map;
    }
    return undefined;
}, 'maskbook-persona');
/** @internal */ async function createRelationsTransaction() {
    const database = await db();
    return (0,openDB/* createTransaction */._X)(database, 'readwrite')('relations');
}
/** @internal */ async function createPersonaDBReadonlyAccess(action) {
    const database = await db();
    const transaction = (0,openDB/* createTransaction */._X)(database, 'readonly')('personas', 'profiles', 'relations');
    await action(transaction);
}
/** @internal */ async function consistentPersonaDBWriteAccess(action, tryToAutoFix = true) {
    // TODO: collect all changes on this transaction then only perform consistency check on those records.
    const database = await db();
    let t = (0,openDB/* createTransaction */._X)(database, 'readwrite')('profiles', 'personas', 'relations');
    let finished = false;
    const finish = ()=>finished = true;
    t.addEventListener('abort', finish);
    t.addEventListener('complete', finish);
    t.addEventListener('error', finish);
    // Pause those events when patching write access
    const resumePersona = Messages/* MaskMessages */.q.events.ownPersonaChanged.pause();
    const resumeRelation = Messages/* MaskMessages */.q.events.relationsChanged.pause();
    try {
        await action(t);
    } finally{
        if (finished) {
            console.warn('The transaction ends too early! There MUST be a bug in the program!');
            console.trace();
            // start a new transaction to check consistency
            t = (0,openDB/* createTransaction */._X)(database, 'readwrite')('profiles', 'personas', 'relations');
        }
        try {
            await assertPersonaDBConsistency(tryToAutoFix ? 'fix' : 'throw', 'full check', t);
            resumePersona((data)=>data.length ? [
                    undefined
                ] : []);
            resumeRelation((data)=>[
                    data.flat()
                ]);
        } finally{
            // If the consistency check throws, we drop all pending events
            resumePersona(()=>[]);
            resumeRelation(()=>[]);
        }
    }
}
// #region Plain methods
/** @internal */ async function createPersonaDB(record, t) {
    await t.objectStore('personas').add(personaRecordToDB(record));
    record.privateKey && Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll(undefined);
}
/** @internal */ async function queryPersonaByProfileDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas', 'profiles', 'relations');
    const x = await t.objectStore('profiles').get(query.toText());
    if (!x?.linkedPersona) return null;
    return queryPersonaDB(new ec_key/* ECKeyIdentifier */.o(x.linkedPersona.curve, x.linkedPersona.compressedPoint || x.linkedPersona.encodedCompressedKey), t);
}
/** @internal */ async function queryPersonaDB(query, t, isIncludeLogout) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas');
    const x = await t.objectStore('personas').get(query.toText());
    if (x && (isIncludeLogout || !x.hasLogout)) return personaRecordOutDB(x);
    return null;
}
async function queryPersonasDB(query, t, isIncludeLogout) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas');
    const records = [];
    for await (const each of t.objectStore('personas')){
        const out = personaRecordOutDB(each.value);
        if (query?.hasPrivateKey && !out.privateKey || query?.nameContains && out.nickname !== query.nameContains || query?.identifiers && !query.identifiers.some((x)=>x === out.identifier) || query?.initialized && out.uninitialized) continue;
        if (isIncludeLogout || !out.hasLogout) records.push(out);
    }
    return records;
}
/** @internal */ async function queryPersonasWithPrivateKey(t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas', 'profiles', 'relations');
    const records = [];
    records.push(...(await t.objectStore('personas').index('hasPrivateKey').getAll(IDBKeyRange.only('yes'))).map(personaRecordOutDB));
    return records;
}
/**
 * Update an existing Persona record.
 * @param nextRecord The partial record to be merged
 * @param howToMerge How to merge linkedProfiles and `field: undefined`
 * @param t transaction
 * @internal
 */ async function updatePersonaDB(// Do a copy here. We need to delete keys from it.
{ ...nextRecord }, howToMerge, t) {
    const _old = await t.objectStore('personas').get(nextRecord.identifier.toText());
    if (!_old) throw new TypeError('Update a non-exist data');
    const old = personaRecordOutDB(_old);
    let nextLinkedProfiles = old.linkedProfiles;
    if (nextRecord.linkedProfiles) {
        if (howToMerge.linkedProfiles === 'merge') nextLinkedProfiles = new Map([
            ...nextLinkedProfiles,
            ...nextRecord.linkedProfiles
        ]);
        else nextLinkedProfiles = nextRecord.linkedProfiles;
    }
    if (howToMerge.explicitUndefinedField === 'ignore') {
        const keys = Object.keys(nextRecord);
        for (const key of keys){
            if (nextRecord[key] === undefined) {
                delete nextRecord[key];
            }
        }
    }
    const next = personaRecordToDB({
        ...old,
        ...nextRecord,
        linkedProfiles: nextLinkedProfiles,
        updatedAt: nextRecord.updatedAt ?? new Date()
    });
    await t.objectStore('personas').put(next);
    (next.privateKey || old.privateKey) && Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll(undefined);
}
/** @internal */ async function createOrUpdatePersonaDB(record, howToMerge, t) {
    const personaInDB = await t.objectStore('personas').get(record.identifier.toText());
    if (personaInDB) return updatePersonaDB(record, howToMerge, t);
    else return createPersonaDB({
        ...record,
        address: record.privateKey?.d ? (0,dist.bufferToHex)((0,dist.publicToAddress)((0,dist.privateToPublic)(Buffer.from((0,pvtutils/* fromBase64URL */.mz)(record.privateKey.d))))) : undefined,
        createdAt: record.createdAt ?? new Date(),
        updatedAt: record.updatedAt ?? new Date(),
        linkedProfiles: record.linkedProfiles ?? new Map()
    }, t);
}
/** @internal */ async function deletePersonaDB(id, confirm, t) {
    const r = await t.objectStore('personas').get(id.toText());
    if (!r) return;
    if (confirm !== 'delete even with private' && r.privateKey) throw new TypeError('Cannot delete a persona with a private key');
    await t.objectStore('personas').delete(id.toText());
    r.privateKey && Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll();
}
/**
 * Delete a Persona
 * @returns a boolean. true: the record no longer exists; false: the record is kept.
 * @internal
 */ async function safeDeletePersonaDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const r = await queryPersonaDB(id, t);
    if (!r) return true;
    if (r.linkedProfiles.size !== 0) return false;
    if (r.privateKey) return false;
    await deletePersonaDB(id, "don't delete if have private key", t);
    return true;
}
/** @internal */ async function createProfileDB(record, t) {
    await t.objectStore('profiles').add(profileToDB(record));
}
/** @internal */ async function queryProfileDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('profiles');
    const result = await t.objectStore('profiles').get(id.toText());
    if (result) return profileOutDB(result);
    return null;
}
/** @internal */ async function queryProfilesDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('profiles');
    const result = [];
    if ((0,isEmpty/* default */.Z)(query)) {
        const results = await t.objectStore('profiles').getAll();
        results.forEach((each)=>{
            const out = profileOutDB(each);
            result.push(out);
        });
    }
    if (query.network) {
        const results = await t.objectStore('profiles').index('network').getAll(IDBKeyRange.only(query.network));
        results.forEach((each)=>{
            const out = profileOutDB(each);
            if (query.hasLinkedPersona && !out.linkedPersona) return;
            result.push(out);
        });
    } else if (query.identifiers?.length) {
        for await (const each of t.objectStore('profiles').iterate()){
            const out = profileOutDB(each.value);
            if (query.hasLinkedPersona && !out.linkedPersona) continue;
            if (query.identifiers.some((x)=>out.identifier === x)) result.push(out);
        }
    } else {
        for await (const each of t.objectStore('profiles').iterate()){
            const out = profileOutDB(each.value);
            if (query.hasLinkedPersona && !out.linkedPersona) continue;
            result.push(out);
        }
    }
    return result;
}
async function updateProfileDB(updating, t) {
    const old = await t.objectStore('profiles').get(updating.identifier.toText());
    if (!old) throw new Error('Updating a non exists record');
    const oldLinkedPersona = old.linkedPersona ? new ec_key/* ECKeyIdentifier */.o(old.linkedPersona.curve, old.linkedPersona.compressedPoint || old.linkedPersona.encodedCompressedKey) : undefined;
    if (oldLinkedPersona && updating.linkedPersona && oldLinkedPersona !== updating.linkedPersona) {
        const oldIdentifier = Identifier_profile/* ProfileIdentifier */.W.from(old.identifier).expect(`old data in the profile database should be a valid ProfileIdentifier, but found ${old.identifier}`);
        const oldLinkedPersona = await queryPersonaByProfileDB(oldIdentifier, t);
        if (oldLinkedPersona) {
            oldLinkedPersona.linkedProfiles.delete(oldIdentifier);
            await updatePersonaDB(oldLinkedPersona, {
                linkedProfiles: 'replace',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    }
    if (updating.linkedPersona && oldLinkedPersona !== updating.linkedPersona) {
        const linkedPersona = await queryPersonaDB(updating.linkedPersona, t);
        if (linkedPersona) {
            linkedPersona.linkedProfiles.set(updating.identifier, {
                connectionConfirmState: 'confirmed'
            });
            await updatePersonaDB(linkedPersona, {
                linkedProfiles: 'replace',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    }
    const nextRecord = profileToDB({
        ...profileOutDB(old),
        ...updating
    });
    await t.objectStore('profiles').put(nextRecord);
}
/** @internal */ async function createOrUpdateProfileDB(rec, t) {
    if (await queryProfileDB(rec.identifier, t)) return updateProfileDB(rec, t);
    else return createProfileDB(rec, t);
}
/** @internal */ async function detachProfileDB(identifier, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const profile = await queryProfileDB(identifier, t);
    if (!profile?.linkedPersona) return;
    const linkedPersona = profile.linkedPersona;
    const persona = await queryPersonaDB(linkedPersona, t);
    persona?.linkedProfiles.delete(identifier);
    if (persona) {
        await updatePersonaDB(persona, {
            linkedProfiles: 'replace',
            explicitUndefinedField: 'delete field'
        }, t);
        if (persona.privateKey) Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll(undefined);
    }
    profile.linkedPersona = undefined;
    await updateProfileDB(profile, t);
}
/** @internal */ async function attachProfileDB(identifier, attachTo, data, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const profile = await queryProfileDB(identifier, t) || await createProfileDB({
        identifier,
        createdAt: new Date(),
        updatedAt: new Date()
    }, t) || await queryProfileDB(identifier, t);
    const persona = await queryPersonaDB(attachTo, t);
    if (!persona || !profile) return;
    if (profile.linkedPersona !== undefined && profile.linkedPersona !== attachTo) {
        await detachProfileDB(identifier, t);
    }
    profile.linkedPersona = attachTo;
    persona.linkedProfiles.set(identifier, data);
    await updatePersonaDB(persona, {
        linkedProfiles: 'merge',
        explicitUndefinedField: 'ignore'
    }, t);
    await updateProfileDB(profile, t);
    if (persona.privateKey) Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll(undefined);
}
/** @internal */ async function deleteProfileDB(id, t) {
    await t.objectStore('profiles').delete(id.toText());
}
/** @internal */ async function createRelationDB(record, t, silent = false) {
    await t.objectStore('relations').add(relationRecordToDB(record));
    if (!silent) Messages/* MaskMessages */.q.events.relationsChanged.sendToAll([
        {
            of: record.profile,
            reason: 'update',
            favor: record.favor
        }
    ]);
}
/** @internal */ async function queryRelations(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('relations');
    const records = [];
    for await (const each of t.objectStore('relations')){
        const out = relationRecordOutDB(each.value);
        if (query(out)) records.push(out);
    }
    return records;
}
/** @internal */ async function queryRelationsPagedDB(linked, options, count) {
    const t = (0,openDB/* createTransaction */._X)(await db(), 'readonly')('relations');
    let firstRecord = true;
    const data = [];
    for await (const cursor of t.objectStore('relations').index('favor, profile, linked').iterate()){
        if (cursor.value.linked !== linked.toText()) continue;
        if (options.network !== 'all' && cursor.value.network !== options.network) continue;
        if (firstRecord && options.after && options.after.profile.toText() !== cursor?.value.profile) {
            cursor.continue([
                options.after.favor,
                options.after.profile.toText(),
                options.after.linked.toText()
            ]);
            firstRecord = false;
            continue;
        }
        firstRecord = false;
        // after this record
        if (options.after?.linked.toText() === cursor?.value.linked && options.after?.profile.toText() === cursor?.value.profile) continue;
        if (count <= 0) break;
        const outData = relationRecordOutDB(cursor.value);
        count -= 1;
        data.push(outData);
    }
    return data;
}
/** @internal */ async function updateRelationDB(updating, t, silent = false) {
    const old = await t.objectStore('relations').get(IDBKeyRange.only([
        updating.linked.toText(),
        updating.profile.toText()
    ]));
    if (!old) throw new Error('Updating a non exists record');
    const nextRecord = relationRecordToDB({
        ...relationRecordOutDB(old),
        ...updating
    });
    await t.objectStore('relations').put(nextRecord);
    if (!silent) {
        Messages/* MaskMessages */.q.events.relationsChanged.sendToAll([
            {
                of: updating.profile,
                favor: updating.favor,
                reason: 'update'
            }
        ]);
    }
}
/** @internal */ async function deletePersonaRelationDB(persona, linkedPersona, t, silent = false) {
    const old = await t.objectStore('relations').get(IDBKeyRange.only([
        linkedPersona.toText(),
        persona.toText()
    ]));
    if (!old) return;
    await t.objectStore('relations').delete(IDBKeyRange.only([
        linkedPersona.toText(),
        persona.toText()
    ]));
    if (!silent) Messages/* MaskMessages */.q.events.relationsChanged.sendToAll([
        {
            of: persona,
            reason: 'delete',
            favor: old.favor
        }
    ]);
}
/** @internal */ async function createOrUpdateRelationDB(record, t, silent = false) {
    const old = await t.objectStore('relations').get(IDBKeyRange.only([
        record.linked.toText(),
        record.profile.toText()
    ]));
    if (old) {
        await updateRelationDB(record, t, silent);
    } else {
        await createRelationDB(record, t, silent);
    }
}
// #endregion
// #region out db & to db
function profileToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        network: x.identifier.network,
        linkedPersona: x.linkedPersona ? {
            curve: x.linkedPersona.curve,
            type: 'ec_key',
            compressedPoint: x.linkedPersona.rawPublicKey
        } : undefined
    };
}
function profileOutDB({ network, ...x }) {
    if (x.linkedPersona) {
        if (x.linkedPersona.type !== 'ec_key') throw new Error('Unknown type of linkedPersona');
    }
    return {
        ...x,
        identifier: Identifier_profile/* ProfileIdentifier */.W.from(x.identifier).expect(`data stored in the profile database should be a valid ProfileIdentifier, but found ${x.identifier}`),
        linkedPersona: x.linkedPersona ? new ec_key/* ECKeyIdentifier */.o(x.linkedPersona.curve, x.linkedPersona.compressedPoint || x.linkedPersona.encodedCompressedKey) : undefined
    };
}
function personaRecordToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        hasPrivateKey: x.privateKey ? 'yes' : 'no',
        linkedProfiles: convertIdentifierMapToRawMap(x.linkedProfiles)
    };
}
function personaRecordOutDB(x) {
    Reflect.deleteProperty(x, 'hasPrivateKey');
    const identifier = ec_key/* ECKeyIdentifier */.o.from(x.identifier).expect(`data stored in the profile database should be a valid ECKeyIdentifier, but found ${x.identifier}`);
    const obj = {
        ...x,
        address: x.privateKey?.d ? (0,dist.bufferToHex)((0,dist.publicToAddress)((0,dist.privateToPublic)(Buffer.from((0,pvtutils/* fromBase64URL */.mz)(x.privateKey.d))))) : undefined,
        identifier,
        publicHexKey: identifier.publicKeyAsHex,
        linkedProfiles: convertRawMapToIdentifierMap(x.linkedProfiles, Identifier_profile/* ProfileIdentifier */.W)
    };
    return obj;
}
function relationRecordToDB(x) {
    if (x.profile instanceof Identifier_profile/* ProfileIdentifier */.W) {
        return {
            ...x,
            network: x.profile.network,
            profile: x.profile.toText(),
            linked: x.linked.toText()
        };
    } else {
        return {
            ...x,
            profile: x.profile.toText(),
            linked: x.linked.toText()
        };
    }
}
function relationRecordOutDB(x) {
    if (x.profile.startsWith('person:')) {
        return {
            ...x,
            profile: Identifier_profile/* ProfileIdentifier */.W.from(x.profile).expect(`data stored in the profile database should be a valid ProfileIdentifier, but found ${x.profile}`),
            linked: ec_key/* ECKeyIdentifier */.o.from(x.linked).expect(`data stored in the profile database should be a valid ECKeyIdentifier, but found ${x.linked}`)
        };
    } else {
        return {
            ...x,
            profile: ec_key/* ECKeyIdentifier */.o.from(x.profile).expect(`data stored in the profile database should be a valid ECKeyIdentifier, but found ${x.profile}`),
            linked: ec_key/* ECKeyIdentifier */.o.from(x.linked).expect(`data stored in the profile database should be a valid ECKeyIdentifier, but found ${x.linked}`)
        };
    }
} // #endregion


/***/ }),

/***/ 67144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ createPluginDatabase)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/with-async-ittr.js + 3 modules
var with_async_ittr = __webpack_require__(29311);
// EXTERNAL MODULE: ./packages/mask/background/database/utils/openDB.ts
var openDB = __webpack_require__(16234);
;// CONCATENATED MODULE: ./packages/mask/background/database/plugin-db/base.ts


/** @internal */ const db = (0,openDB/* createDBAccess */.Z_)(()=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-plugin-data', 2, {
        async upgrade (db, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db.deleteObjectStore('PluginStore');
                const os = db.createObjectStore('PluginStore', {
                    keyPath: [
                        'plugin_id',
                        'value.type',
                        'value.id'
                    ]
                });
                // a compound index by "rec.plugin_id" + "rec.value.type"
                os.createIndex('type', [
                    'plugin_id',
                    'value.type'
                ]);
                for (const each of data){
                    if (!each.plugin_id) continue;
                    if (!pluginDataHasValidKeyPath(each.value)) continue;
                    Reflect.deleteProperty(each, 'type');
                    Reflect.deleteProperty(each, 'record_id');
                    await os.add(each);
                }
            }
        }
    });
});
// cause key path error in "add" will cause transaction fail, we need to check them first
/** @internal */ function pluginDataHasValidKeyPath(value) {
    try {
        if (typeof value !== 'object' || value === null) return false;
        const id = Reflect.get(value, 'id');
        const type = Reflect.get(value, 'type');
        if (typeof id !== 'string' && typeof id !== 'number') return false;
        if (typeof type !== 'string' && typeof type !== 'number') return false;
        return true;
    } catch  {
        return false;
    }
}
const createPluginDBAccess = db;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}

;// CONCATENATED MODULE: ./packages/mask/background/database/plugin-db/wrap-plugin-database.ts

/**
 * Avoid calling it directly.
 *
 * You should get the instance from WorkerContext when the plugin is initialized.
 *
 * ```ts
 * let storage: Plugin.Worker.Storage<T | T2> | null = null
 * const worker: Plugin.Worker.Definition = {
 *     ...base,
 *     init(signal, context) {
 *         storage = context.getDatabaseStorage()
 *         // get it here, instance of calling this function directly.
 *     },
 * }
 * ```
 */ function createPluginDatabase(plugin_id, signal) {
    let livingTransaction = undefined;
    let ended = false;
    signal?.addEventListener('abort', ()=>{
        // give some extra time after the plugin shutdown to store data.
        setTimeout(()=>ended = true, 1500);
    });
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    function ensureAlive() {
        if (ended) throw new Error(`[@masknet/plugin-infra] Storage instance for ${plugin_id} has expired.`);
    }
    return {
        async get (type, id) {
            const t = await c('r');
            const data = await t.store.get(key({
                type,
                id
            }));
            if (!data) return undefined;
            return data.value;
        },
        async has (type, id) {
            const t = await c('r');
            const count = await t.store.count(key({
                type,
                id
            }));
            return count > 0;
        },
        async add (data) {
            const t = await c('rw');
            if (!pluginDataHasValidKeyPath(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put(toStore(plugin_id, data));
            else await t.store.add(toStore(plugin_id, data));
            t.commit();
        },
        async remove (type, id) {
            const t = await c('rw');
            await t.store.delete(key({
                type,
                id
            }));
            t.commit();
        },
        async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const roCursor = {
                    value: each.value.value
                };
                yield roCursor;
            }
        },
        async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const rwCursor = {
                    value: each.value.value,
                    delete: ()=>each.delete(),
                    update: async (data)=>{
                        await each.update(toStore(plugin_id, data));
                    }
                };
                yield rwCursor;
            }
        }
    };
    async function c(usage) {
        ensureAlive();
        if (usage === 'rw' && livingTransaction?.mode === 'readonly') invalidateTransaction();
        try {
            await livingTransaction?.store.openCursor();
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await createPluginDBAccess();
            const tx = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
            livingTransaction = tx;
            // Oops, workaround for https://bugs.webkit.org/show_bug.cgi?id=216769 or https://github.com/jakearchibald/idb/issues/201
            try {
                await tx.store.openCursor();
            } catch  {
                livingTransaction = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
                return livingTransaction;
            }
            return tx;
        }
        return livingTransaction;
    }
    function invalidateTransaction() {
        livingTransaction = undefined;
    }
}


/***/ }),

/***/ 80896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ savePostKeyToDB)
/* harmony export */ });
/* harmony import */ var _utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47264);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48104);


async function savePostKeyToDB(id, key, extraInfo) {
    const jwk = await (0,_utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__/* .CryptoKeyToJsonWebKey */ .i)(key);
    await (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .withPostDBTransaction */ .tr)(async (t)=>{
        const post = await (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .queryPostDB */ .q3)(id, t);
        if (!post) {
            await (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createPostDB */ .$v)({
                identifier: id,
                postCryptoKey: jwk,
                foundAt: new Date(),
                ...extraInfo
            }, t);
        } else {
            await (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .updatePostDB */ .rr)({
                ...post,
                postCryptoKey: jwk
            }, 'override', t);
        }
    });
}


/***/ }),

/***/ 48104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $v: () => (/* binding */ createPostDB),
/* harmony export */   hZ: () => (/* binding */ queryPostsDB),
/* harmony export */   q3: () => (/* binding */ queryPostDB),
/* harmony export */   rr: () => (/* binding */ updatePostDB),
/* harmony export */   tr: () => (/* binding */ withPostDBTransaction)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82654);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97039);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50508);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19477);
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29311);
/* harmony import */ var _utils_pure_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47264);
/* harmony import */ var _utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16234);




const db = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccessWithAsyncUpgrade */ .Ns)(4, 7, (currentTryOpen, knowledge)=>(0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-post-v2', currentTryOpen, {
        async upgrade (db, oldVersion, _newVersion, transaction) {
            if (oldVersion < 1) {
                // inline keys
                return void db.createObjectStore('post', {
                    keyPath: 'identifier'
                });
            }
            /**
                 * In the version 1 we use PostIdentifier to store post that identified by post iv
                 * After upgrade to version 2, we use PostIVIdentifier to store it.
                 * So we transform all old data into new data.
                 */ if (oldVersion <= 1) {
                const store = transaction.objectStore('post');
                const old = await store.getAll();
                await store.clear();
                for (const each of old){
                    const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PostIdentifier */ ._.from(each.identifier);
                    if (id.isSome()) {
                        const { postId, identifier } = id.value;
                        each.identifier = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PostIVIdentifier */ .b(identifier.network, postId).toText();
                        await store.add(each);
                    }
                }
            }
            /**
                 * In the version 2 we use `recipients?: ProfileIdentifier[]`
                 * After upgrade to version 3, we use `recipients: Record<string, RecipientDetail>`
                 */ if (oldVersion <= 2) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v2record = cursor.value;
                    const oldType = v2record.recipients?.map((x)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ProfileIdentifier */ .W.of(x.network, x.userId).unwrapOr(null)).filter(Boolean);
                    const newType = {};
                    if (oldType !== undefined) for (const each of oldType){
                        newType[each.toText()] = {
                            reason: [
                                {
                                    type: 'direct',
                                    at: new Date(0)
                                }
                            ]
                        };
                    }
                    const next = {
                        ...v2record,
                        recipients: newType,
                        postBy: undefined,
                        foundAt: new Date(0),
                        recipientGroups: []
                    };
                    await cursor.update(next);
                }
            }
            /**
                 * In the version 3 we use `recipients?: Record<string, RecipientDetail>`
                 * After upgrade to version 4, we use `recipients: Map<ProfileIdentifier, RecipientDetail>`
                 */ if (oldVersion <= 3) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v3Record = cursor.value;
                    const newType = new Map();
                    for (const [key, value] of Object.entries(v3Record.recipients)){
                        newType.set(key, value);
                    }
                    const v4Record = {
                        ...v3Record,
                        recipients: newType
                    };
                    await cursor.update(v4Record);
                }
            }
            /**
                 * In version 4 we use CryptoKey, in version 5 we use JsonWebKey
                 */ if (oldVersion <= 4) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v4Record = cursor.value;
                    const data = knowledge?.data;
                    if (!data) {
                        await cursor.delete();
                        continue;
                    }
                    if (!v4Record.postCryptoKey) continue;
                    const v5Record = {
                        ...v4Record,
                        postCryptoKey: data.get(v4Record.identifier)
                    };
                    if (!v5Record.postCryptoKey) delete v5Record.postCryptoKey;
                    await cursor.update(v5Record);
                }
            }
            // version 6 ships a wrong db migration.
            // therefore need to upgrade again to fix it.
            if (oldVersion <= 6) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v5Record = cursor.value;
                    const by = v5Record.encryptBy;
                    // This is the correct data type
                    if (typeof by === 'string') continue;
                    if (!by) continue;
                    cursor.value.encryptBy = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .ECKeyIdentifier */ .o(by.curve, by.compressedPoint || by.encodedCompressedKey).toText();
                    cursor.update(cursor.value);
                }
                if (!store.indexNames.contains('persona, date')) store.createIndex('persona, date', [
                    'encryptBy',
                    'foundAt'
                ], {
                    unique: false
                });
            }
        }
    }), async (db)=>{
    if (db.version === 4) {
        const map = new Map();
        const knowledge = {
            version: 4,
            data: map
        };
        const records = await (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(db, 'readonly')('post').objectStore('post').getAll();
        for (const r of records){
            const x = r.postCryptoKey;
            if (!x) continue;
            try {
                const key = await (0,_utils_pure_index_js__WEBPACK_IMPORTED_MODULE_6__/* .CryptoKeyToJsonWebKey */ .i)(x);
                map.set(r.identifier, key);
            } catch  {
                continue;
            }
        }
        return knowledge;
    }
    return undefined;
}, 'maskbook-post-v2');
const PostDBAccess = db;
/** @internal */ async function withPostDBTransaction(task) {
    const t = (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await PostDBAccess(), 'readwrite')('post');
    await task(t);
}
/** @internal */ async function createPostDB(record, t) {
    t ||= (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await db(), 'readwrite')('post');
    const toSave = postToDB(record);
    await t.objectStore('post').add(toSave);
}
/** @internal */ async function updatePostDB(updateRecord, mode, t) {
    t ||= (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await db(), 'readwrite')('post');
    const emptyRecord = {
        identifier: updateRecord.identifier,
        recipients: new Map(),
        postBy: undefined,
        foundAt: new Date()
    };
    const currentRecord = await queryPostDB(updateRecord.identifier, t) || emptyRecord;
    const nextRecord = {
        ...currentRecord,
        ...updateRecord
    };
    const nextRecipients = mode === 'override' ? postToDB(nextRecord).recipients : postToDB(currentRecord).recipients;
    if (mode === 'append') {
        if (updateRecord.recipients) {
            if (typeof updateRecord.recipients === 'object' && typeof nextRecipients === 'object') {
                for (const [id, date] of updateRecord.recipients){
                    nextRecipients.set(id.toText(), {
                        reason: [
                            {
                                at: date,
                                type: 'direct'
                            }
                        ]
                    });
                }
            } else {
                nextRecord.recipients = 'everyone';
            }
        }
    }
    const nextRecordInDBType = postToDB(nextRecord);
    await t.objectStore('post').put(nextRecordInDBType);
}
/** @internal */ async function queryPostDB(record, t) {
    t ||= (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const result = await t.objectStore('post').get(record.toText());
    if (result) return postOutDB(result);
    return null;
}
/** @internal */ async function queryPostsDB(query, t) {
    t ||= (0,_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const selected = [];
    for await (const { value } of t.objectStore('post')){
        const idResult = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PostIVIdentifier */ .b.from(value.identifier);
        if (idResult.isNone()) {
            console.warn('Invalid identifier', value.identifier);
            continue;
        }
        const id = idResult.value;
        if (typeof query === 'string') {
            if (id.network === query) selected.push(postOutDB(value));
        } else {
            const v = postOutDB(value);
            if (query(v, id)) selected.push(v);
        }
    }
    return selected;
}
function postOutDB(db) {
    const { identifier, foundAt, postBy, postCryptoKey, encryptBy, interestedMeta, summary, url } = db;
    let recipients;
    if (db.recipients === true) {
        recipients = 'everyone';
    } else {
        recipients = new Map();
        for (const [id, { reason }] of db.recipients){
            const identifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ProfileIdentifier */ .W.from(id);
            if (identifier.isNone()) continue;
            const detail = reason[0];
            if (!detail) continue;
            recipients.set(identifier.value, detail.at);
        }
    }
    return {
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PostIVIdentifier */ .b.from(identifier).expect(`data stored in the post database should be a valid PostIVIdentifier, but found ${identifier}`),
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ProfileIdentifier */ .W.of(postBy?.network, postBy?.userId).unwrapOr(undefined),
        recipients,
        foundAt,
        postCryptoKey,
        encryptBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .ECKeyIdentifier */ .o.from(encryptBy).unwrapOr(undefined),
        interestedMeta,
        summary,
        url
    };
}
function postToDB(out) {
    let recipients;
    if (out.recipients === 'everyone') {
        recipients = true;
    } else {
        const map = new Map();
        for (const [id, detail] of out.recipients){
            map.set(id.toText(), {
                reason: [
                    {
                        at: detail,
                        type: 'direct'
                    }
                ]
            });
        }
        recipients = map;
    }
    return {
        ...out,
        identifier: out.identifier.toText(),
        encryptBy: out.encryptBy?.toText(),
        recipients
    };
}


/***/ }),

/***/ 16234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ns: () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   Z_: () => (/* binding */ createDBAccess),
/* harmony export */   _X: () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88228);

function createDBAccess(opener) {
    let db = undefined;
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>db = undefined, {
                once: true
            });
        }
        db = undefined;
    }
    return async ()=>{
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .assertEnvironment */ .uQ)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .Environment */ .qA.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                const t = db.transaction([
                    db.objectStoreNames[0]
                ], 'readonly', {});
                t.commit();
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean, {
            once: true
        });
        db.addEventListener('error', clean, {
            once: true
        });
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare, dbName) {
    let db = undefined;
    let pendingOpen;
    async function open() {
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .assertEnvironment */ .uQ)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .Environment */ .qA.ManifestBackground);
        if (db?.version === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            }
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            currentVersion += 1;
            db?.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined, {
            once: true
        });
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return async ()=>{
        if (indexedDB.databases) {
            const oldDBs = await indexedDB.databases();
            const hasNoOldVersion = !oldDBs.some((db)=>db.name === dbName);
            const hasSameLatestVersion = oldDBs.some((db)=>db.name === dbName && db.version === latestVersion);
            if (hasNoOldVersion || hasSameLatestVersion) {
                return opener(latestVersion);
            }
        }
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined);
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 23343:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _masknet_secp256k1_webcrypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68273);
/* harmony import */ var _services_helper_telemetry_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50094);
/* harmony import */ var _masknet_flags_build_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15393);



(0,_masknet_secp256k1_webcrypto__WEBPACK_IMPORTED_MODULE_0__/* .polyfill */ .OK)();
await Promise.allSettled([
    (0,_services_helper_telemetry_id_js__WEBPACK_IMPORTED_MODULE_1__/* .setTelemetryID */ .Q)(false),
    (0,_masknet_flags_build_info__WEBPACK_IMPORTED_MODULE_2__/* .setupBuildInfo */ .tH)()
]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 36023:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _tasks_NotCancellable_OnInstall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42521);
/* harmony import */ var _async_setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async_setup_js__WEBPACK_IMPORTED_MODULE_1__]);
_async_setup_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// The following file MUST be sync, otherwise it will miss the init event.


await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23034));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 32714:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _masknet_web3_providers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49850);

globalThis.fetch = _masknet_web3_providers_helpers__WEBPACK_IMPORTED_MODULE_0__/* .fetchGlobal */ .d;


/***/ }),

/***/ 5284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ inMemory_KVStorageBackend),
  E: () => (/* binding */ indexedDB_KVStorageBackend)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/with-async-ittr.js + 3 modules
var with_async_ittr = __webpack_require__(29311);
;// CONCATENATED MODULE: ./packages/shared-base/src/KVStorage/kv-storage/idb.ts


/**
 * Create a KVStorageBackend that stores the data in the indexedDB
 * @param dbName The database name to use.
 * @param onChange When the database receives a change. onChange should broadcast this to all clients.
 * @param beforeAutoSync The promise to wait before the auto-sync starts.
 * @returns A KVStorageBackend
 */ function createIndexedDB_KVStorageBackend(dbName, onChange, beforeAutoSync = Promise.resolve()) {
    let db;
    setInterval(()=>{
        if (!db) return;
        db.close();
        db = undefined;
    }, 1000 * 60);
    async function ensureDB() {
        if (!db) db = await initDB();
        return db;
    }
    function initDB() {
        return (0,with_async_ittr/* openDB */.X3)(dbName, 1, {
            upgrade (db, oldVersion, newVersion, transaction) {
                db.createObjectStore('store');
            }
        });
    }
    return {
        beforeAutoSync,
        async getValue (key) {
            const db = await ensureDB();
            const t = db.transaction('store', 'readonly');
            if (await t.store.count(key) === 0) return esm.None;
            return (0,esm.Some)(await t.store.get(key));
        },
        async setValue (key, value) {
            const db = await ensureDB();
            const t = db.transaction('store', 'readwrite');
            await t.store.put(value, key);
            onChange(key, value);
        }
    };
}

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
;// CONCATENATED MODULE: ./packages/shared-base/src/KVStorage/kv-storage/in-memory.ts

/**
 * Create a KVStorageBackend that stores the data in the memory
 * @param onChange When the database receives a change. onChange should broadcast this to all clients.
 * @param beforeAutoSync The promise to wait before the auto-sync starts.
 * @returns A KVStorageBackend
 */ function createInMemoryKVStorageBackend(onChange, beforeAutoSync = Promise.resolve()) {
    const storage = new Map();
    return {
        beforeAutoSync,
        async getValue (key) {
            if (storage.has(key)) return (0,esm.Some)(storage.get(key));
            return esm.None;
        },
        async setValue (key, value) {
            storage.set(key, value);
            onChange(key, value);
        }
    };
}

;// CONCATENATED MODULE: ./packages/mask/background/initialization/kv-storage.ts

const indexedDB_KVStorageBackend = createIndexedDB_KVStorageBackend('mask-kv', (k, v)=>Messages/* MaskMessages */.q.events.__kv_backend_persistent__.sendByBroadcast([
        k,
        v
    ]));
const inMemory_KVStorageBackend = createInMemoryKVStorageBackend((k, v)=>Messages/* MaskMessages */.q.events.__kv_backend_in_memory__.sendByBroadcast([
        k,
        v
    ]));


/***/ }),

/***/ 23034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68469);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32714);
/* harmony import */ var _services_setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12530);
/* harmony import */ var _tasks_setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tasks_setup_js__WEBPACK_IMPORTED_MODULE_2__]);
_tasks_setup_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// Setup Tasks
(0,_services_setup_js__WEBPACK_IMPORTED_MODULE_3__/* .startServices */ .r)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68469:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6938);
/* harmony import */ var _kv_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5284);
/* harmony import */ var _utils_deprecated_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60988);



(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .setupMaskKVStorageBackend */ .$e)(_kv_storage_js__WEBPACK_IMPORTED_MODULE_0__/* .indexedDB_KVStorageBackend */ .E, _kv_storage_js__WEBPACK_IMPORTED_MODULE_0__/* .inMemory_KVStorageBackend */ .c);
(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .setupLegacySettingsAtBackground */ .kQ)(_utils_deprecated_storage_js__WEBPACK_IMPORTED_MODULE_3__/* .__deprecated__getStorage */ .$, _utils_deprecated_storage_js__WEBPACK_IMPORTED_MODULE_3__/* .__deprecated__setStorage */ .X);


/***/ }),

/***/ 70642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GA: () => (/* binding */ GUN_queryPostKey_version37),
  ab: () => (/* binding */ GUN_queryPostKey_version39Or38),
  Kl: () => (/* binding */ GUN_queryPostKey_version40),
  bQ: () => (/* binding */ publishPostAESKey_version37),
  U4: () => (/* binding */ publishPostAESKey_version39Or38)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/encryption/src/payload/types.ts
var types = __webpack_require__(83159);
// EXTERNAL MODULE: ./packages/encryption/src/utils/crypto.ts
var utils_crypto = __webpack_require__(6195);
// EXTERNAL MODULE: ./packages/mask/utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(47264);
// EXTERNAL MODULE: ./node_modules/.pnpm/event-iterator@2.0.0/node_modules/event-iterator/lib/dom.js
var dom = __webpack_require__(93214);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(76710);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
;// CONCATENATED MODULE: ./packages/gun-utils/src/server.ts
const gunServers = [
    'https://gun.r2d2.to/gun'
];

;// CONCATENATED MODULE: ./packages/gun-utils/src/instance.ts

let gun;
function getGunInstance() {
    if (gun) return gun;
    return gun = createGun();
}
const OnCloseEvent = new Set();
function createGun() {
    class WebSocket extends globalThis.WebSocket {
        constructor(url){
            super(url);
            const abort = this.abort = ()=>{
                gun?.off();
                gun = undefined;
                this.close();
                for (const each of OnCloseEvent)each();
                console.log('[Network/gun] WebSocket of the Gun instance is killed due to inactive.');
            };
            const keepAlive = this.keepAlive = ()=>{
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(abort, 3 * 60 * 1000);
            };
            this.addEventListener('message', (e)=>{
                // if there is no meaningful data exchange, then do not keep the connection alive.
                if (typeof e.data === 'string' && e.data.length < 3) return;
                keepAlive();
            }, {});
        }
        send(data) {
            this.keepAlive();
            super.send(data);
        }
        get onclose() {
            return null;
        }
        set onclose(f) {}
    }
    const _ = new Gun({
        peers: [
            ...gunServers
        ],
        localStorage: false,
        radisk: true,
        WebSocket
    });
    _.opt({
        retry: Number.POSITIVE_INFINITY
    });
    return _;
}

;// CONCATENATED MODULE: ./packages/gun-utils/src/utils.ts


function getGunNodeFromPath(path) {
    const resultNode = path.reduce((gun, path)=>gun.get(path), getGunInstance());
    return resultNode;
}
/**
 * Get data from Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).once()
 * ```
 */ function getGunData(...path) {
    return new Promise((resolve)=>{
        getGunNodeFromPath(path).once(resolve);
    });
}
/**
 * Set data on Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).put(data)
 * ```
 * @param path graph path on Gun
 * @param data data to be stored
 */ function setGunData(path, data) {
    getGunNodeFromPath(path).put(data);
}
/**
 * Delete data on Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).put(null!)
 * ```
 * @param path graph path on Gun
 */ function deleteGunData(path) {
    getGunNodeFromPath(path).put(null);
}
/**
 * Push data to the Gun data Set (Mathematical Set)
 * @param path graph path on Gun
 * @param value the object to be stored
 */ function pushToGunDataArray(path, value) {
    getGunNodeFromPath(path).set(value);
}
/**
 * Subscribe future data on Gun.
 * When subscribing a Gun data Set (Mathematical Set), you will not get the immediate result back.
 *
 * @param path graph path on Gun
 * @param isT is the data type T
 * @param abortSignal the signal to stop subscribing
 */ async function* subscribeGunMapData(path, isT, abortSignal) {
    yield* new dom/* EventIterator */.zN((queue)=>{
        // gun.off() will remove ALL listener on it
        let listenerClosed = false;
        function stop() {
            queue.stop();
            listenerClosed = true;
            OnCloseEvent.delete(stop);
        }
        abortSignal.addEventListener('abort', stop);
        OnCloseEvent.add(stop);
        const resultNode = getGunNodeFromPath(path);
        resultNode.map().on((data)=>{
            if (listenerClosed) return;
            if (isT(data)) queue.push(data);
        });
    });
}

;// CONCATENATED MODULE: ./packages/mask/background/network/queryPostKey.ts






// !!! Change how this file access Gun will break the compatibility of v40 payload decryption.
async function GUN_queryPostKey_version40(iv, whoAmI) {
    // PATH ON GUN: maskbook > posts > iv > userID
    const result = await getGunData('maskbook', 'posts', (0,esm/* encodeArrayBuffer */.ll)(iv), whoAmI);
    if (!isValidData(result)) return null;
    return {
        encryptedPostKey: new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(result.encryptedKey)),
        postKeyIV: new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(result.salt))
    };
    function isValidData(x) {
        if (typeof x !== 'object') return false;
        if (!x) return false;
        const { encryptedKey, salt: encryptedKeyIV } = x;
        if (typeof encryptedKey !== 'string' || typeof encryptedKeyIV !== 'string') return false;
        return true;
    }
}
var Version38Or39;
(function(Version38Or39) {
    async function* GUN_queryPostKey_version39Or38(version, iv, minePublicKey, network, abortSignal) {
        const minePublicKeyJWK = await (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(minePublicKey);
        const { keyHash, postHash } = await calculatePostKeyPartition(version, network, iv, minePublicKeyJWK);
        /* cspell:disable-next-line */ // ? In this step we get something like ["jzarhbyjtexiE7aB1DvQ", "jzarhuse6xlTAtblKRx9"]
        console.log(`[@masknet/encryption] Reading key partition [${postHash[0]}][${keyHash}] and [${postHash[1]}][${keyHash}]`);
        const internalNodeNames = (0,uniq/* default */.Z)((await Promise.all([
            //
            getGunData(postHash[0], keyHash),
            getGunData(postHash[1], keyHash)
        ])).filter(esm/* isNonNull */.GT).filter(isObject/* default */.Z).map(Object.keys).flat().filter((x)=>x !== '_'));
        // ? In this step we get all keys in this category (gun2[postHash][keyHash])
        const resultPromise = internalNodeNames.map((key)=>getGunData(key));
        const iter = new dom/* EventIterator */.zN((queue)=>{
            // immediate results
            for (const result of resultPromise)result.then(emit, noop/* default */.Z);
            // future results
            Promise.all([
                main(subscribeGunMapData([
                    postHash[1]
                ], isValidData, abortSignal)),
                main(subscribeGunMapData([
                    postHash[0]
                ], isValidData, abortSignal))
            ]).then(()=>queue.stop());
            async function main(keyProvider) {
                for await (const data of keyProvider)Promise.resolve(data).then(emit, noop/* default */.Z);
            }
            function emit(result) {
                if (abortSignal.aborted) return;
                if (!isValidData(result)) return;
                queue.push({
                    encryptedPostKey: new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(result.encryptedKey)),
                    postKeyIV: new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(result.salt))
                });
            }
        });
        yield* iter;
    }
    Version38Or39.GUN_queryPostKey_version39Or38 = GUN_queryPostKey_version39Or38;
    /**
     * Publish post keys on the gun
     * @param version current payload
     * @param postIV Post iv
     * @param receiversKeys Keys needs to publish
     */ async function publishPostAESKey_version39Or38(version, postIV, network, receiversKeys) {
        const [postHash] = await hashIV(network, postIV);
        if (version === -39) throw new Error('unreachable');
        for (const result of receiversKeys.values()){
            try {
                if (result.status === 'rejected') continue;
                const { encryptedPostKey, target, ivToBePublished } = result.value;
                if (!ivToBePublished) throw new Error('Missing salt');
                const jwk = await (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(target.key);
                const keyHash = await hashKey38(jwk);
                const post = {
                    encryptedKey: (0,esm/* encodeArrayBuffer */.ll)(encryptedPostKey),
                    salt: (0,esm/* encodeArrayBuffer */.ll)(ivToBePublished)
                };
                console.log(`gun[${postHash}][${keyHash}].push(`, post, ')');
                pushToGunDataArray([
                    postHash,
                    keyHash
                ], post);
            } catch (error) {
                console.error('[@masknet/encryption] An error occurs when sending E2E keys', error);
            }
        }
    }
    Version38Or39.publishPostAESKey_version39Or38 = publishPostAESKey_version39Or38;
    function isValidData(data) {
        if (!data) return false;
        if (typeof data !== 'object') return false;
        const { encryptedKey, salt } = data;
        if (typeof encryptedKey !== 'string') return false;
        if (typeof salt !== 'string') return false;
        return true;
    }
    async function calculatePostKeyPartition(version, network, iv, key) {
        const postHash = await hashIV(network, iv);
        // In version > -39, we will use stable hash to prevent unstable result for key hashing
        const keyHash = version === -39 ? await hashKey39(key) : await hashKey38(key);
        return {
            postHash,
            keyHash
        };
    }
    async function hashIV(network, iv) {
        const hashPair = '9283464d-ee4e-4e8d-a7f3-cf392a88133f';
        const N = 2;
        const hash = (await GUN_SEA_work((0,esm/* encodeArrayBuffer */.ll)(iv), hashPair)).slice(0, N);
        const networkHint = getNetworkHint(network);
        return [
            `${networkHint}${hash}`,
            `${networkHint}-${hash}`
        ];
    }
    function getNetworkHint(x) {
        if (x === types/* EncryptPayloadNetwork */.FL.Facebook) return '';
        if (x === types/* EncryptPayloadNetwork */.FL.Twitter) return 'twitter-';
        if (x === types/* EncryptPayloadNetwork */.FL.Minds) return 'minds-';
        if (x === types/* EncryptPayloadNetwork */.FL.Instagram) return 'instagram-';
        if (x === types/* EncryptPayloadNetwork */.FL.Unknown) throw new TypeError('[@masknet/encryption] Current network is not correctly configured.');
        (0,esm/* unreachable */.t1)(x);
    }
    // The difference between V38 and V39 is: V39 is not stable (JSON.stringify)
    // it's an implementation bug but for backward compatibility, it cannot be changed.
    // Therefore we upgraded the version and use a stable hash.
    async function hashKey39(key) {
        const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
        const N = 2;
        const jwk = JSON.stringify(key);
        const hash = await GUN_SEA_work(jwk, hashPair);
        return hash.slice(0, N);
    }
    async function hashKey38(jwk) {
        const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
        const N = 2;
        const hash = await GUN_SEA_work(jwk.x + jwk.y, hashPair);
        return hash.slice(0, N);
    }
})(Version38Or39 || (Version38Or39 = {}));
// This is a self contained Gun.SEA.work implementation that only contains code path we used.
async function GUN_SEA_work(data, salt) {
    if (typeof data === 'string') data = new TextEncoder().encode(data);
    if (typeof salt === 'string') salt = new TextEncoder().encode(salt);
    const key = await crypto.subtle.importKey('raw', data, {
        name: 'PBKDF2'
    }, false, [
        'deriveBits'
    ]);
    const params = {
        name: 'PBKDF2',
        iterations: 100000,
        salt,
        hash: {
            name: 'SHA-256'
        }
    };
    const derived = await crypto.subtle.deriveBits(params, key, 512);
    return btoa(String.fromCharCode(...new Uint8Array(derived)));
}
var Version37;
(function(Version37) {
    async function* GUN_queryPostKey_version37(iv, minePublicKey, network, abortSignal) {
        const minePublicKeyJWK = await (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(minePublicKey);
        const { keyHash, postHash, networkHint } = await calculatePostKeyPartition(network, iv, minePublicKeyJWK);
        /* cspell:disable-next-line */ // ? In this step we get something like ["jzarhbyjtexiE7aB1DvQ", "jzarhuse6xlTAtblKRx9"]
        const keyPartition = `${networkHint}-${postHash}-${keyHash}`;
        console.log(`[@masknet/encryption] Reading key partition [${keyPartition}]`);
        const internalNodeNames = await getGunData(keyPartition).then((x)=>{
            if (!x) return [];
            if (typeof x !== 'object') return [];
            return Object.keys(x);
        });
        // ? In this step we get all keys in this category (gun2[keyPartition])
        const resultPromise = internalNodeNames.map((key)=>getGunData(key));
        const iter = new dom/* EventIterator */.zN((queue)=>{
            // immediate results
            for (const result of resultPromise)result.then(emit, noop/* default */.Z);
            // future results
            main(subscribeGunMapData([
                keyPartition
            ], isValidData, abortSignal));
            async function main(keyProvider) {
                for await (const data of keyProvider)Promise.resolve(data).then(emit, noop/* default */.Z);
                queue.stop();
            }
            async function emit(result) {
                if (abortSignal.aborted) return;
                if (!isValidData(result)) return;
                const data = {
                    encryptedPostKey: new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(result.e))
                };
                if (result.k && result.c) {
                    data.ephemeralPublicKey = (await (0,utils_crypto/* importEC_Key */.OT)(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(result.k)), result.c)).unwrap();
                }
                queue.push(data);
            }
        });
        yield* iter;
    }
    Version37.GUN_queryPostKey_version37 = GUN_queryPostKey_version37;
    /**
     * Publish post keys on the gun
     * @param postIV Post iv
     * @param receiversKeys Keys needs to publish
     */ async function publishPostAESKey_version37(postIV, network, receiversKeys) {
        const networkPartition = getNetworkPartition(network);
        const postHash = await hashIV(postIV);
        for (const result of receiversKeys.values()){
            try {
                if (result.status === 'rejected') continue;
                const { encryptedPostKey, target, ephemeralPublicKey } = result.value;
                const jwk = await (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(target.key);
                const keyPartition = `${networkPartition}-${postHash}-${await hashKey(jwk)}`;
                const post = {
                    e: (0,esm/* encodeArrayBuffer */.ll)(encryptedPostKey)
                };
                if (ephemeralPublicKey) {
                    post.c = (0,utils_crypto/* getEcKeyCurve */.gb)(ephemeralPublicKey);
                    post.k = (0,esm/* encodeArrayBuffer */.ll)(new Uint8Array(await crypto.subtle.exportKey('raw', ephemeralPublicKey)));
                }
                console.log(`[@masknet/encryption] gun[${keyPartition}].push(`, post, ')');
                pushToGunDataArray([
                    keyPartition
                ], post);
            } catch (error) {
                console.error('[@masknet/encryption] An error occurs when sending E2E keys', error);
            }
        }
    }
    Version37.publishPostAESKey_version37 = publishPostAESKey_version37;
    // we need to make it short, but looks like gun does not support storing Uint8Array?
    /** encrypted key */ /** ephemeral public key chain */ /** ephemeral public key */ function isValidData(data) {
        if (!data) return false;
        if (typeof data !== 'object') return false;
        const { e, c, k } = data;
        if (typeof e !== 'string') return false;
        if (![
            types/* EC_KeyCurve */._r.secp256k1,
            types/* EC_KeyCurve */._r.secp256p1,
            undefined
        ].includes(c)) return false;
        if (typeof k !== 'string' && k !== undefined) return false;
        return true;
    }
    async function calculatePostKeyPartition(network, iv, key) {
        const postHash = await hashIV(iv);
        const keyHash = await hashKey(key);
        return {
            postHash,
            keyHash,
            networkHint: getNetworkPartition(network)
        };
    }
    async function hashIV(iv) {
        const hashPair = '9283464d-ee4e-4e8d-a7f3-cf392a88133f';
        const N = 2;
        return (await GUN_SEA_work((0,esm/* encodeArrayBuffer */.ll)(iv), hashPair)).slice(0, N);
    }
    async function hashKey(jwk) {
        const hashPair = 'ace7ab0c-5507-4bdd-9d43-e4249a48e720';
        const N = 2;
        const hash = await GUN_SEA_work(jwk.x + jwk.y, hashPair);
        return hash.slice(0, N);
    }
    function getNetworkPartition(x) {
        if (x === types/* EncryptPayloadNetwork */.FL.Facebook) return '37-fb';
        if (x === types/* EncryptPayloadNetwork */.FL.Twitter) return '37-tw';
        if (x === types/* EncryptPayloadNetwork */.FL.Minds) return '37-minds';
        if (x === types/* EncryptPayloadNetwork */.FL.Instagram) return '37-ins';
        if (x === types/* EncryptPayloadNetwork */.FL.Unknown) throw new TypeError('[@masknet/encryption] Current network is not correctly configured.');
        (0,esm/* unreachable */.t1)(x);
    }
})(Version37 || (Version37 = {}));
const { GUN_queryPostKey_version39Or38, publishPostAESKey_version39Or38 } = Version38Or39;
const { GUN_queryPostKey_version37, publishPostAESKey_version37 } = Version37;


/***/ }),

/***/ 66123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ toProfileInformation),
/* harmony export */   y: () => (/* binding */ toPersonaInformation)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89601);
/* harmony import */ var _database_avatar_cache_avatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61271);
/* harmony import */ var _database_persona_db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70345);



/** @internal */ function toProfileInformation(profiles) {
    return {
        mustNotAwaitThisWithInATransaction: (async ()=>{
            const result = [];
            for (const profile of profiles){
                result.push({
                    identifier: profile.identifier,
                    nickname: profile.nickname,
                    linkedPersona: profile.linkedPersona,
                    createAt: profile.createdAt
                });
            }
            const avatars = await (0,_database_avatar_cache_avatar_js__WEBPACK_IMPORTED_MODULE_0__/* .queryAvatarsDataURL */ .Az)(result.map((x)=>x.identifier));
            result.forEach((x)=>avatars.has(x.identifier) && (x.avatar = avatars.get(x.identifier)));
            return result;
        })()
    };
}
/** @internal */ function toPersonaInformation(personas, t) {
    const personaInfo = [];
    const dbQueryPass2 = [];
    const dbQuery = personas.map(async (persona)=>{
        const map = [];
        personaInfo.push({
            nickname: persona.nickname,
            identifier: persona.identifier,
            address: persona.address,
            linkedProfiles: map
        });
        if (persona.linkedProfiles.size) {
            const profiles = await (0,_database_persona_db_js__WEBPACK_IMPORTED_MODULE_1__/* .queryProfilesDB */ .i2)({
                identifiers: [
                    ...persona.linkedProfiles.keys()
                ]
            }, t);
            // we must not await toProfileInformation cause it is tx of another db.
            dbQueryPass2.push(toProfileInformation(profiles).mustNotAwaitThisWithInATransaction.then((x)=>void map.push(...x)));
        }
    });
    dbQueryPass2.push((0,_database_avatar_cache_avatar_js__WEBPACK_IMPORTED_MODULE_0__/* .queryAvatarsDataURL */ .Az)(personas.map((x)=>x.identifier)).then((avatars)=>{
        for (const [id, avatar] of avatars){
            const info = personaInfo.find((x)=>x.identifier === id);
            if (info) info.avatar = avatar;
        }
    }).catch(lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z));
    return {
        // we have to split two arrays for them and await them one by one, otherwise it will be race condition
        mustNotAwaitThisWithInATransaction: Promise.all(dbQuery).then(()=>Promise.all(dbQueryPass2)).then(()=>personaInfo)
    };
}


/***/ }),

/***/ 59680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  backupPersonaPrivateKey: () => (/* reexport */ backupPersonaPrivateKey),
  createBackupFile: () => (/* reexport */ createBackupFile),
  generateBackupPreviewInfo: () => (/* reexport */ generateBackupPreviewInfo),
  generateBackupSummary: () => (/* reexport */ generateBackupSummary),
  restoreBackup: () => (/* reexport */ restoreBackup)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(84973);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sumBy.js
var sumBy = __webpack_require__(14284);
;// CONCATENATED MODULE: ./packages/backup-format/src/utils/backupPreview.ts

function getBackupSummary(json) {
    let files = 0;
    try {
        files = Number((json.plugins?.['com.maskbook.fileservice'])?.length || 0);
    } catch  {}
    const ownerPersonas = [
        ...json.personas.values()
    ].filter((persona)=>!persona.privateKey.isNone());
    const ownerProfiles = (0,flatten/* default */.Z)(ownerPersonas.map((persona)=>[
            ...persona.linkedProfiles.keys()
        ])).map((item)=>item.toText());
    const personas = (0,compact/* default */.Z)(ownerPersonas.sort((p)=>p.nickname.unwrapOr(false) ? -1 : 0).map((p)=>p.nickname.unwrapOr(p.identifier.rawPublicKey).trim()));
    const contacts = [
        ...json.profiles.values()
    ].filter((profile)=>{
        return !ownerProfiles.includes(profile.identifier.toText()) && profile.linkedPersona.isSome();
    });
    return {
        // Names or publicKeys */
        personas,
        accounts: (0,sumBy/* default */.Z)(ownerPersonas, (persona)=>persona.linkedProfiles.size),
        posts: json.posts.size,
        contacts: contacts.length,
        relations: json.relations.length,
        files,
        wallets: json.wallets.map((wallet)=>wallet.address),
        createdAt: Number(json.meta.createdAt.unwrapOr(undefined)),
        countOfWallets: 0
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var esm = __webpack_require__(76089);
;// CONCATENATED MODULE: ./packages/backup-format/src/BackupErrors.ts
var BackupErrors;
(function(BackupErrors) {
    BackupErrors["UnknownFormat"] = '[@masknet/backup-format] Unknown format.';
    BackupErrors["WrongCheckSum"] = '[@masknet/backup-format] Bad checksum.';
})(BackupErrors || (BackupErrors = {}));

// EXTERNAL MODULE: ./packages/base/src/WebCrypto/JsonWebKey.ts
var JsonWebKey = __webpack_require__(94724);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var Identifier_profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(14568);
;// CONCATENATED MODULE: ./packages/backup-format/src/version-0/index.ts




function isBackupVersion0(obj) {
    if (!(0,isObjectLike/* default */.Z)(obj)) return false;
    try {
        const data = obj;
        if (!data.local || !data.key?.key?.privateKey || !data.key.key.publicKey) return false;
        return true;
    } catch  {
        return false;
    }
}
async function normalizeBackupVersion0(file) {
    const backup = createEmptyNormalizedBackup();
    backup.meta.version = 0;
    backup.meta.maskVersion = (0,esm.Some)('<=1.3.2');
    const { local } = file;
    const { username, key } = file.key;
    const { publicKey, privateKey } = key;
    if (!(0,JsonWebKey/* isEC_JsonWebKey */.$G)(publicKey)) return backup;
    const persona = {
        identifier: (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(publicKey)).unwrap(),
        publicKey,
        linkedProfiles: new Map(),
        localKey: (0,JsonWebKey/* isAESJsonWebKey */.bG)(local) ? (0,esm.Some)(local) : esm.None,
        privateKey: (0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(privateKey) ? (0,esm.Some)(privateKey) : esm.None,
        mnemonic: esm.None,
        nickname: esm.None,
        createdAt: esm.None,
        updatedAt: esm.None,
        address: esm.None
    };
    backup.personas.set(persona.identifier, persona);
    const identifier = Identifier_profile/* ProfileIdentifier */.W.of('facebook.com', username);
    if (identifier.isSome()) {
        const profile = {
            identifier: identifier.value,
            linkedPersona: (0,esm.Some)(persona.identifier),
            createdAt: esm.None,
            updatedAt: esm.None,
            localKey: (0,JsonWebKey/* isAESJsonWebKey */.bG)(local) ? (0,esm.Some)(local) : esm.None,
            nickname: esm.None
        };
        backup.profiles.set(profile.identifier, profile);
        persona.linkedProfiles.set(profile.identifier, void 0);
    }
    return backup;
}

;// CONCATENATED MODULE: ./packages/backup-format/src/version-1/index.ts




function isBackupVersion1(obj) {
    if (!(0,isObjectLike/* default */.Z)(obj)) return false;
    try {
        const data = obj;
        if (data.version !== 1) return false;
        if (!Array.isArray(data.whoami)) return false;
        if (!data.whoami) return false;
        return true;
    } catch  {
        return false;
    }
}
async function normalizeBackupVersion1(file) {
    const backup = createEmptyNormalizedBackup();
    backup.meta.version = 1;
    if (!file.grantedHostPermissions) backup.meta.maskVersion = (0,esm.Some)('<=1.5.2');
    else if (!file.maskbookVersion) backup.meta.maskVersion = (0,esm.Some)('<=1.6.0');
    if (file.grantedHostPermissions) {
        backup.settings.grantedHostPermissions = file.grantedHostPermissions;
    }
    const { whoami, people } = file;
    for (const { network, publicKey, userId, nickname, localKey, privateKey } of [
        ...whoami,
        ...people || []
    ]){
        const identifier = Identifier_profile/* ProfileIdentifier */.W.of(network, userId).expect(`backup should not contain invalid identifier parts ${network} and ${userId}`);
        const profile = {
            identifier,
            nickname: nickname ? (0,esm.Some)(nickname) : esm.None,
            createdAt: esm.None,
            updatedAt: esm.None,
            localKey: esm.None,
            linkedPersona: esm.None
        };
        if ((0,JsonWebKey/* isEC_JsonWebKey */.$G)(publicKey)) {
            const personaID = (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(publicKey)).unwrap();
            const persona = backup.personas.get(personaID) || {
                identifier: personaID,
                nickname: esm.None,
                linkedProfiles: new Map(),
                publicKey,
                privateKey: esm.None,
                localKey: esm.None,
                mnemonic: esm.None,
                createdAt: esm.None,
                updatedAt: esm.None,
                address: esm.None
            };
            profile.linkedPersona = (0,esm.Some)(personaID);
            if ((0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(privateKey)) {
                persona.privateKey = (0,esm.Some)(privateKey);
            }
            backup.personas.set(personaID, persona);
            persona.linkedProfiles.set(profile.identifier, void 0);
        }
        if ((0,JsonWebKey/* isAESJsonWebKey */.bG)(localKey)) {
            profile.localKey = (0,esm.Some)(localKey);
            if (profile.linkedPersona.isSome() && backup.personas.has(profile.linkedPersona.value)) {
                backup.personas.get(profile.linkedPersona.value).localKey = (0,esm.Some)(localKey);
            }
        }
    }
    return backup;
} // Note: those props are not existed in the backup, just to make the code more readable

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var kit_esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post-iv.ts
var post_iv = __webpack_require__(97039);
// EXTERNAL MODULE: ./node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(46067);
var elliptic_default = /*#__PURE__*/__webpack_require__.n(elliptic);
// EXTERNAL MODULE: ./node_modules/.pnpm/pvtsutils@1.3.5/node_modules/pvtsutils/build/index.js
var build = __webpack_require__(85907);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs
var decode = __webpack_require__(49990);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(26004);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sum.js
var sum = __webpack_require__(15337);
;// CONCATENATED MODULE: ./packages/backup-format/src/utils/hex2buffer.ts

/** @internal */ function hex2buffer(hexString, padded) {
    if (hexString.length % 2) {
        hexString = '0' + hexString;
    }
    let res = new Uint8Array(hexString.length / 2);
    for(let i = 0; i < hexString.length; i += 2){
        const c = hexString.slice(i, i + 2);
        res[(i - 1) / 2] = Number.parseInt(c, 16);
    }
    // BN padding
    if (padded) {
        let len = res.length;
        len = len > 32 ? len > 48 ? 66 : 48 : 32;
        if (res.length < len) {
            res = concat(new Uint8Array(len - res.length), res);
        }
    }
    return res;
}
/** @internal */ function concat(...buf) {
    const res = new Uint8Array((0,sum/* default */.Z)(buf.map((item)=>item.length)));
    let offset = 0;
    buf.forEach((item)=>{
        for(let i = 0; i < item.length; i += 1){
            res[offset + i] = item[i];
        }
        offset += item.length;
    });
    return res;
}

;// CONCATENATED MODULE: ./packages/backup-format/src/version-2/index.ts








function isBackupVersion2(item) {
    try {
        const x = item;
        return x._meta_.version === 2;
    } catch  {}
    return false;
}
async function normalizeBackupVersion2(item) {
    const backup = createEmptyNormalizedBackup();
    backup.meta.version = 2;
    backup.meta.maskVersion = (0,esm.Some)(item._meta_.maskbookVersion);
    backup.meta.createdAt = (0,esm.Some)(new Date(item._meta_.createdAt));
    backup.settings.grantedHostPermissions = item.grantedHostPermissions;
    const { personas, posts, profiles, relations, wallets, plugin } = item;
    for (const persona of personas){
        const { publicKey } = persona;
        if (!(0,JsonWebKey/* isEC_Public_JsonWebKey */.d8)(publicKey)) continue;
        const identifier = (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(publicKey)).unwrap();
        const normalizedPersona = {
            identifier,
            linkedProfiles: new Map(),
            publicKey,
            privateKey: (0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(persona.privateKey) ? (0,esm.Some)(persona.privateKey) : esm.None,
            localKey: (0,JsonWebKey/* isAESJsonWebKey */.bG)(persona.localKey) ? (0,esm.Some)(persona.localKey) : esm.None,
            createdAt: (0,esm.Some)(new Date(persona.createdAt)),
            updatedAt: (0,esm.Some)(new Date(persona.updatedAt)),
            nickname: persona.nickname ? (0,esm.Some)(persona.nickname) : esm.None,
            mnemonic: esm.None,
            address: persona.address ? (0,esm.Some)(persona.address) : esm.None
        };
        for (const [profile] of persona.linkedProfiles){
            const id = Identifier_profile/* ProfileIdentifier */.W.from(profile);
            if (id.isNone()) continue;
            normalizedPersona.linkedProfiles.set(id.value, null);
        }
        if (persona.mnemonic) {
            const { words, parameter } = persona.mnemonic;
            normalizedPersona.mnemonic = (0,esm.Some)({
                words,
                hasPassword: parameter.withPassword,
                path: parameter.path
            });
        }
        backup.personas.set(identifier, normalizedPersona);
    }
    for (const profile of profiles){
        const identifier = Identifier_profile/* ProfileIdentifier */.W.from(profile.identifier);
        if (identifier.isNone()) continue;
        const normalizedProfile = {
            identifier: identifier.value,
            createdAt: (0,esm.Some)(new Date(profile.createdAt)),
            updatedAt: (0,esm.Some)(new Date(profile.updatedAt)),
            nickname: profile.nickname ? (0,esm.Some)(profile.nickname) : esm.None,
            linkedPersona: ec_key/* ECKeyIdentifier */.o.from(profile.linkedPersona),
            localKey: (0,JsonWebKey/* isAESJsonWebKey */.bG)(profile.localKey) ? (0,esm.Some)(profile.localKey) : esm.None
        };
        backup.profiles.set(identifier.value, normalizedProfile);
    }
    for (const persona of backup.personas.values()){
        const toRemove = [];
        for (const profile of persona.linkedProfiles.keys()){
            if (backup.profiles.get(profile)?.linkedPersona?.unwrapOr(undefined) === persona.identifier) {} else // do nothing
            toRemove.push(profile);
        }
        for (const profile of toRemove)persona.linkedProfiles.delete(profile);
    }
    for (const post of posts){
        const identifier = post_iv/* PostIVIdentifier */.b.from(post.identifier);
        const postBy = Identifier_profile/* ProfileIdentifier */.W.from(post.postBy);
        const encryptBy = ec_key/* ECKeyIdentifier */.o.from(post.encryptBy);
        if (identifier.isNone()) continue;
        const interestedMeta = new Map();
        const normalizedPost = {
            identifier: identifier.value,
            foundAt: new Date(post.foundAt),
            postBy,
            interestedMeta,
            encryptBy,
            summary: post.summary ? (0,esm.Some)(post.summary) : esm.None,
            url: post.url ? (0,esm.Some)(post.url) : esm.None,
            postCryptoKey: (0,JsonWebKey/* isAESJsonWebKey */.bG)(post.postCryptoKey) ? (0,esm.Some)(post.postCryptoKey) : esm.None,
            recipients: esm.None
        };
        if (post.recipients) {
            if (post.recipients === 'everyone') normalizedPost.recipients = (0,esm.Some)({
                type: 'public'
            });
            else {
                const map = new Map();
                for (const [recipient, { reason }] of post.recipients){
                    const id = Identifier_profile/* ProfileIdentifier */.W.from(recipient);
                    if (id.isNone()) continue;
                    const reasons = [];
                    map.set(id.value, reasons);
                    for (const r of reason){
                        // we ignore the original reason because we no longer support group / auto sharing
                        reasons.push({
                            type: 'direct',
                            at: new Date(r.at)
                        });
                    }
                }
                normalizedPost.recipients = (0,esm.Some)({
                    type: 'e2e',
                    receivers: map
                });
            }
        }
        if (post.interestedMeta) normalizedPost.interestedMeta = MetaFromJson(post.interestedMeta);
        backup.posts.set(identifier.value, normalizedPost);
    }
    for (const relation of relations || []){
        const { profile, persona, favor } = relation;
        const a = Identifier_profile/* ProfileIdentifier */.W.from(profile);
        const b = ec_key/* ECKeyIdentifier */.o.from(persona);
        if (a.isSome() && b.isSome()) {
            backup.relations.push({
                profile: a.value,
                persona: b.value,
                favor
            });
        }
    }
    for (const wallet of wallets || []){
        if (wallet.privateKey?.d && !wallet.publicKey) {
            // @ts-expect-error cjs-esm interop
            const ec = new ((elliptic_default()).ec || (elliptic_default())["default"].ec)('secp256k1');
            const key = ec.keyFromPrivate(wallet.privateKey.d);
            const hexPub = key.getPublic('hex').slice(2);
            const hexX = hexPub.slice(0, hexPub.length / 2);
            const hexY = hexPub.slice(hexPub.length / 2, hexPub.length);
            wallet.privateKey.x = build/* Convert */.ep.ToBase64Url(hex2buffer(hexX));
            wallet.privateKey.y = build/* Convert */.ep.ToBase64Url(hex2buffer(hexY));
        }
        const normalizedWallet = {
            address: wallet.address,
            name: wallet.name,
            passphrase: wallet.passphrase ? (0,esm.Some)(wallet.passphrase) : esm.None,
            mnemonicId: wallet.mnemonicId ? (0,esm.Some)(wallet.mnemonicId) : esm.None,
            derivationPath: wallet.derivationPath ? (0,esm.Some)(wallet.derivationPath) : esm.None,
            publicKey: (0,JsonWebKey/* isEC_Public_JsonWebKey */.d8)(wallet.publicKey) ? (0,esm.Some)(wallet.publicKey) : esm.None,
            privateKey: (0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(wallet.privateKey) ? (0,esm.Some)(wallet.privateKey) : esm.None,
            mnemonic: wallet.mnemonic ? (0,esm.Some)({
                words: wallet.mnemonic.words,
                hasPassword: wallet.mnemonic.parameter.withPassword,
                path: wallet.mnemonic.parameter.path
            }) : esm.None,
            createdAt: new Date(wallet.createdAt),
            updatedAt: new Date(wallet.updatedAt)
        };
        backup.wallets.push(normalizedWallet);
    }
    backup.plugins = plugin || {};
    return backup;
}
function generateBackupVersion2(item) {
    const now = new Date();
    const result = {
        _meta_: {
            maskbookVersion: item.meta.maskVersion.unwrapOr('>=2.5.0'),
            createdAt: Number(item.meta.createdAt.unwrapOr(now)),
            type: 'maskbook-backup',
            version: 2
        },
        grantedHostPermissions: item.settings.grantedHostPermissions,
        plugin: item.plugins,
        personas: [],
        posts: [],
        profiles: [],
        relations: [],
        wallets: [],
        userGroups: []
    };
    for (const [id, data] of item.personas){
        result.personas.push({
            identifier: id.toText(),
            createdAt: Number(data.createdAt.unwrapOr(now)),
            updatedAt: Number(data.updatedAt.unwrapOr(now)),
            nickname: data.nickname.unwrapOr(undefined),
            linkedProfiles: [
                ...data.linkedProfiles.keys()
            ].map((id)=>[
                    id.toText(),
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]),
            publicKey: data.publicKey,
            privateKey: data.privateKey.unwrapOr(undefined),
            mnemonic: data.mnemonic.map((data)=>({
                    words: data.words,
                    parameter: {
                        path: data.path,
                        withPassword: data.hasPassword
                    }
                })).unwrapOr(undefined),
            localKey: data.localKey.unwrapOr(undefined)
        });
    }
    for (const [id, data] of item.profiles){
        result.profiles.push({
            identifier: id.toText(),
            createdAt: Number(data.createdAt.unwrapOr(now)),
            updatedAt: Number(data.updatedAt.unwrapOr(now)),
            nickname: data.nickname.unwrapOr(undefined),
            linkedPersona: data.linkedPersona.unwrapOr(undefined)?.toText(),
            localKey: data.localKey.unwrapOr(undefined)
        });
    }
    for (const [id, data] of item.posts){
        const item = {
            identifier: id.toText(),
            foundAt: Number(data.foundAt),
            postBy: data.postBy.isSome() ? data.postBy.value.toText() : 'person:localhost/$unknown',
            interestedMeta: MetaToJson(data.interestedMeta),
            encryptBy: data.encryptBy.unwrapOr(undefined)?.toText(),
            summary: data.summary.unwrapOr(undefined),
            url: data.url.unwrapOr(undefined),
            postCryptoKey: data.postCryptoKey.unwrapOr(undefined),
            recipientGroups: [],
            recipients: []
        };
        result.posts.push(item);
        if (data.recipients.isSome()) {
            if (data.recipients.value.type === 'public') item.recipients = 'everyone';
            else if (data.recipients.value.type === 'e2e') {
                item.recipients = [];
                for (const [recipient, reasons] of data.recipients.value.receivers){
                    if (!reasons.length) continue;
                    item.recipients.push([
                        recipient.toText(),
                        {
                            reason: [
                                {
                                    at: Number(reasons[0].at),
                                    type: 'direct'
                                }
                            ]
                        }
                    ]);
                }
            } else (0,kit_esm/* safeUnreachable */.P)(data.recipients.value);
        }
    }
    for (const data of item.relations){
        result.relations.push({
            profile: data.profile.toText(),
            persona: data.persona.toText(),
            favor: data.favor
        });
    }
    for (const data of item.wallets){
        result.wallets.push({
            address: data.address,
            name: data.name,
            passphrase: data.passphrase.unwrapOr(undefined),
            publicKey: data.publicKey.unwrapOr(undefined),
            privateKey: data.privateKey.unwrapOr(undefined),
            mnemonic: data.mnemonic.map((data)=>({
                    words: data.words,
                    parameter: {
                        path: data.path,
                        withPassword: data.hasPassword
                    }
                })).unwrapOr(undefined),
            createdAt: Number(data.createdAt),
            updatedAt: Number(data.updatedAt),
            derivationPath: data.derivationPath.unwrapOr(undefined),
            mnemonicId: data.mnemonicId.unwrapOr(undefined)
        });
    }
    return result;
}
function MetaFromJson(meta) {
    if (!meta) return new Map();
    const raw = (0,decode/* decode */.Jx)((0,kit_esm/* decodeArrayBuffer */.xe)(meta));
    if (typeof raw !== 'object' || !raw) return new Map();
    return new Map(Object.entries(raw));
}
function MetaToJson(meta) {
    return (0,kit_esm/* encodeArrayBuffer */.ll)((0,encode/* encode */.c)(Object.fromEntries(meta.entries())));
} /**
 * @see https://github.com/DimensionDev/Maskbook/issues/194
 */  // e.g. "1.8.0"
 // Unix timestamp
 // ? PersonaIdentifier can be infer from the publicKey
 // PersonaIdentifier.toText()
 /** ProfileIdentifier.toText() */  // Unix timestamp
 // Unix timestamp
 // ProfileIdentifier.toText()
 // PersonaIdentifier.toText()
 // Unix timestamp
 // Unix timestamp
 // ProfileIdentifier.toText()
 // PersonaIdentifier.toText()
 /** @deprecated */  // ProfileIdentifier.toText()
 // PostIVIdentifier.toText()
 /** ProfileIdentifier.toText() */  /** @deprecated */  // Unix timestamp
 // PersonaIdentifier.toText()
 // encoded by MessagePack
 // Unix timestamp
 // Unix timestamp
 /** @deprecated */ 

;// CONCATENATED MODULE: ./packages/backup-format/src/normalize/index.ts






async function __normalizeBackup(data) {
    if (isBackupVersion2(data)) return normalizeBackupVersion2(data);
    if (isBackupVersion1(data)) return normalizeBackupVersion1(data);
    if (isBackupVersion0(data)) return normalizeBackupVersion0(data);
    throw new TypeError(BackupErrors.UnknownFormat);
}
async function normalizeBackup(data) {
    const normalized = await __normalizeBackup(data);
    // fix invalid URL
    normalized.settings.grantedHostPermissions = normalized.settings.grantedHostPermissions.filter((url)=>/^(http|<all_urls>)/.test(url));
    return normalized;
}
/** It will return the internal format. DO NOT rely on the detail of it! */ function generateBackupRAW(data) {
    const result = generateBackupVersion2(data);
    return result;
}
function createEmptyNormalizedBackup() {
    return {
        meta: {
            version: 2,
            createdAt: esm.None,
            maskVersion: esm.None
        },
        personas: new Map(),
        profiles: new Map(),
        posts: new Map(),
        relations: [],
        settings: {
            grantedHostPermissions: []
        },
        wallets: [],
        plugins: {}
    };
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/worker.ts
var worker = __webpack_require__(90062);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/web.ts + 2 modules
var web = __webpack_require__(70345);
// EXTERNAL MODULE: ./packages/mask/background/database/post/web.ts
var post_web = __webpack_require__(48104);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/wallet/index.ts + 3 modules
var services_wallet = __webpack_require__(58113);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/legacyWallet.ts + 1 modules
var legacyWallet = __webpack_require__(36731);
// EXTERNAL MODULE: ./node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = {
	/* dynamic */ get a() {
		var exports = __webpack_require__(29017);
		if (exports.__esModule) Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};
;// CONCATENATED MODULE: ./packages/mask/background/services/backup/internal_wallet_backup.ts
/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];







async function internal_wallet_backup() {
    const wallet = await Promise.all([
        backupAllWallets(),
        backupAllLegacyWallets()
    ]);
    return wallet.flat();
}
async function backupAllWallets() {
    const wallets = await (0,services_wallet/* getWallets */.MX)();
    const allSettled = await Promise.allSettled(wallets.map(async (wallet)=>{
        return {
            ...wallet,
            mnemonic: !wallet.configurable ? await (0,services_wallet/* exportMnemonicWords */.Zu)(wallet.address) : undefined,
            privateKey: !wallet.configurable ? undefined : await (0,services_wallet/* exportPrivateKey */.Dg)(wallet.address)
        };
    }));
    const wallets_ = allSettled.map((x)=>x.status === 'fulfilled' ? WalletRecordToJSONFormat(x.value) : null);
    if (wallets_.some((x)=>!x)) throw new Error('Failed to backup wallets.');
    return wallets_.filter(kit_esm/* isNonNull */.GT);
}
async function backupAllLegacyWallets() {
    const x = await (0,legacyWallet/* getLegacyWallets */.c)();
    return x.map(LegacyWalletRecordToJSONFormat);
}
function WalletRecordToJSONFormat(wallet) {
    const backup = {
        name: wallet.name ?? '',
        address: wallet.address,
        createdAt: wallet.createdAt,
        updatedAt: wallet.updatedAt,
        derivationPath: esm.None,
        mnemonicId: esm.None,
        mnemonic: esm.None,
        passphrase: esm.None,
        publicKey: esm.None,
        privateKey: esm.None
    };
    if (wallet.mnemonic && wallet.derivationPath) {
        backup.mnemonic = (0,esm.Some)({
            words: wallet.mnemonic,
            path: wallet.derivationPath,
            hasPassword: false
        });
    }
    if (wallet.privateKey) backup.privateKey = (0,esm.Some)(keyToJWK(wallet.privateKey, 'private'));
    if (wallet.mnemonicId) backup.mnemonicId = (0,esm.Some)(wallet.mnemonicId);
    if (wallet.derivationPath) backup.derivationPath = (0,esm.Some)(wallet.derivationPath);
    return backup;
}
function LegacyWalletRecordToJSONFormat(wallet) {
    const backup = {
        name: wallet.name ?? '',
        address: wallet.address,
        createdAt: wallet.createdAt,
        updatedAt: wallet.updatedAt,
        derivationPath: esm.None,
        mnemonicId: esm.None,
        mnemonic: esm.None,
        passphrase: esm.None,
        privateKey: esm.None,
        publicKey: esm.None
    };
    // generate keys for managed wallet
    try {
        const wallet_ = wallet;
        backup.passphrase = (0,esm.Some)(wallet_.passphrase);
        if (wallet_.mnemonic?.length) backup.mnemonic = (0,esm.Some)({
            words: wallet_.mnemonic.join(' '),
            path: "m/44'/60'/0'/0/0",
            hasPassword: false
        });
        if (wallet_._public_key_ && (0,isSameAddress/* isSameAddress */.W)(keyToAddr(wallet_._public_key_, 'public'), wallet.address)) backup.publicKey = (0,esm.Some)(keyToJWK(wallet_._public_key_, 'public'));
        if (wallet_._private_key_ && (0,isSameAddress/* isSameAddress */.W)(keyToAddr(wallet_._private_key_, 'private'), wallet.address)) backup.privateKey = (0,esm.Some)(keyToJWK(wallet_._private_key_, 'private'));
    } catch (error) {
        console.error(error);
    }
    return backup;
}
function keyToJWK(key, type) {
    const ec = new elliptic.ec('secp256k1');
    const key_ = key.replace(/^0x/, '');
    const keyPair = type === 'public' ? ec.keyFromPublic(key_) : ec.keyFromPrivate(key_);
    const pubKey = keyPair.getPublic();
    const privKey = keyPair.getPrivate();
    return {
        crv: 'K-256',
        ext: true,
        x: base64(pubKey.getX().toArray()),
        y: base64(pubKey.getY().toArray()),
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC',
        d: type === 'private' ? base64(privKey.toArray()) : undefined
    };
}
function base64(nums) {
    return (0,pvtutils/* toBase64URL */.wi)(new Uint8Array(nums).buffer);
}
function keyToAddr(key, type) {
    const ec = new elliptic.ec('secp256k1');
    const key_ = key.replace(/^0x/, '');
    const keyPair = type === 'public' ? ec.keyFromPublic(key_) : ec.keyFromPrivate(key_);
    return dist.a.EthereumAddress.from(Buffer.from(keyPair.getPublic(false, 'array'))).address;
}

;// CONCATENATED MODULE: ./packages/mask/background/services/backup/internal_create.ts







/** @internal */ /**
 * @internal
 * DO NOT expose this function as a service.
 */ // TODO: use a single readonly transaction in this operation.
async function createNewBackup(options) {
    const { noPersonas, noPosts, noProfiles, noWallets, onlyForPersona, allProfile } = options;
    const file = createEmptyNormalizedBackup();
    const { meta, personas, posts, profiles, relations, settings } = file;
    meta.version = 2;
    meta.maskVersion = (0,esm.Some)(options.maskVersion || '>=2.21.0');
    meta.createdAt = (0,esm.Some)(new Date());
    settings.grantedHostPermissions = (await browser.permissions.getAll()).origins || [];
    await Promise.allSettled([
        noPersonas || backupPersonas(onlyForPersona ? [
            onlyForPersona
        ] : undefined),
        noProfiles || backupProfiles(onlyForPersona, allProfile),
        noPersonas && noProfiles || backupAllRelations(),
        noPosts || backupPosts(),
        noWallets || internal_wallet_backup().then((w)=>file.wallets = w),
        backupPlugins().then((p)=>file.plugins = p)
    ]);
    return file;
    async function backupPersonas(of) {
        const data = await (0,web/* queryPersonasDB */._P)({
            initialized: true,
            hasPrivateKey: options.hasPrivateKeyOnly,
            identifiers: of
        }, undefined, true);
        for (const persona of data){
            personas.set(persona.identifier, {
                identifier: persona.identifier,
                nickname: persona.nickname ? (0,esm.Some)(persona.nickname) : esm.None,
                publicKey: persona.publicKey,
                privateKey: persona.privateKey ? (0,esm.Some)(persona.privateKey) : esm.None,
                localKey: persona.localKey ? (0,esm.Some)(persona.localKey) : esm.None,
                createdAt: persona.createdAt ? (0,esm.Some)(persona.createdAt) : esm.None,
                updatedAt: persona.updatedAt ? (0,esm.Some)(persona.updatedAt) : esm.None,
                mnemonic: persona.mnemonic ? (0,esm.Some)({
                    hasPassword: persona.mnemonic.parameter.withPassword,
                    path: persona.mnemonic.parameter.path,
                    words: persona.mnemonic.words
                }) : esm.None,
                linkedProfiles: persona.linkedProfiles,
                address: persona.address ? (0,esm.Some)(persona.address) : esm.None
            });
        }
    }
    async function backupPosts() {
        const data = await (0,post_web/* queryPostsDB */.hZ)(()=>true);
        for (const post of data){
            let recipients = {
                type: 'public'
            };
            if (post.recipients !== 'everyone') {
                recipients = {
                    type: 'e2e',
                    receivers: new Map()
                };
                for (const [recipient, date] of post.recipients){
                    recipients.receivers.set(recipient, [
                        {
                            at: date,
                            type: 'direct'
                        }
                    ]);
                }
            }
            posts.set(post.identifier, {
                identifier: post.identifier,
                foundAt: post.foundAt,
                interestedMeta: post.interestedMeta || new Map(),
                postBy: post.postBy ? (0,esm.Some)(post.postBy) : esm.None,
                encryptBy: post.encryptBy ? (0,esm.Some)(post.encryptBy) : esm.None,
                postCryptoKey: post.postCryptoKey ? (0,esm.Some)(post.postCryptoKey) : esm.None,
                summary: post.summary ? (0,esm.Some)(post.summary) : esm.None,
                url: post.url ? (0,esm.Some)(post.url) : esm.None,
                recipients: (0,esm.Some)(recipients)
            });
        }
    }
    async function backupProfiles(of, all = false) {
        const data = await (0,web/* queryProfilesDB */.i2)({
            hasLinkedPersona: !all
        });
        for (const profile of data){
            if (of) {
                if (!profile.linkedPersona) continue;
                if (profile.linkedPersona !== of) continue;
            }
            profiles.set(profile.identifier, {
                identifier: profile.identifier,
                nickname: profile.nickname ? (0,esm.Some)(profile.nickname) : esm.None,
                localKey: profile.localKey ? (0,esm.Some)(profile.localKey) : esm.None,
                createdAt: profile.createdAt ? (0,esm.Some)(profile.createdAt) : esm.None,
                updatedAt: profile.updatedAt ? (0,esm.Some)(profile.updatedAt) : esm.None,
                linkedPersona: profile.linkedPersona ? (0,esm.Some)(profile.linkedPersona) : esm.None
            });
        }
    }
    async function backupAllRelations() {
        const data = await (0,web/* queryRelations */.bF)(()=>true);
        for (const relation of data){
            relations.push({
                favor: relation.favor,
                persona: relation.linked,
                profile: relation.profile
            });
        }
    }
    async function backupPlugins() {
        const plugins = Object.create(null);
        const allPlugins = [
            ...worker/* activatedPluginsWorker */.J
        ];
        async function backup(plugin) {
            const backupCreator = plugin.backup?.onBackup;
            if (!backupCreator) return;
            async function backupPlugin() {
                const result = await (0,kit_esm/* timeout */.Vs)(backupCreator(), 60 * 1000, 'Timeout to backup creator.');
                if (result.isNone()) return;
                // We limit the plugin contributed backups must be simple objects.
                // We may allow plugin to store binary if we're moving to binary backup format like MessagePack.
                plugins[plugin.ID] = result.map(JSON.stringify).map(JSON.parse).value;
            }
            if (false) {}
            return backupPlugin().catch((error)=>console.error(`[@masknet/plugin-infra] Plugin ${plugin.ID} failed to backup`, error));
        }
        await Promise.all(allPlugins.map(backup));
        return plugins;
    }
}

// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
;// CONCATENATED MODULE: ./packages/mask/background/services/backup/create.ts



const maskVersion = src/* env */.O.VERSION;
async function generateBackupPreviewInfo() {
    // can we avoid create a full backup?
    const backup = await createNewBackup({
        allProfile: true,
        maskVersion
    });
    return getBackupSummary(backup);
}
/** Includes persona, relations, posts and profiles. */ async function createBackupFile(options) {
    const { excludeBase, excludeWallet } = options;
    const backup = await createNewBackup({
        noPersonas: excludeBase,
        noPosts: excludeBase,
        noProfiles: excludeBase,
        noWallets: excludeWallet,
        maskVersion
    });
    const file = generateBackupRAW(backup);
    const personaNickNames = [
        ...backup.personas.values()
    ].map((p)=>p.nickname.unwrapOr('')).filter(Boolean);
    return {
        file,
        personaNickNames
    };
}

// EXTERNAL MODULE: ./packages/mask/background/services/helper/request-permission.ts + 1 modules
var request_permission = __webpack_require__(34143);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/store.ts
var store = __webpack_require__(50754);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Persona.ts
var Persona = __webpack_require__(3545);
// EXTERNAL MODULE: ./packages/base/src/WebCrypto/k256.ts
var k256 = __webpack_require__(17688);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
var max = __webpack_require__(50162);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/generateNewWalletName.ts

function generateNewWalletName(wallets, index = 0, preIndex) {
    const indexList = wallets.filter((x)=>!x.owner).map((x)=>x.name.split('Wallet ')[1]);
    const maxIndex = (0,max/* default */.Z)(indexList.filter((x)=>x && !Number.isNaN(x)).map(Number)) ?? 0;
    const preIndexNotExists = !indexList.some((x)=>Number(x) === preIndex);
    const finalIndex = preIndex && (preIndex > maxIndex || preIndexNotExists) ? preIndex : maxIndex + index + 1;
    return `Wallet ${finalIndex}`;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/HD_PATH_WITHOUT_INDEX_ETHEREUM.ts
var HD_PATH_WITHOUT_INDEX_ETHEREUM = __webpack_require__(83076);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/mask/background/services/backup/internal_wallet_restore.ts







async function internal_wallet_restore(backup) {
    const mnemonicWalletMap = new Map();
    if (backup.some((x)=>!!x.mnemonic.isSome())) {
        const mnemonicWallets = backup.filter((x)=>!!x.mnemonic.isSome());
        for (const wallet of mnemonicWallets){
            if (wallet.mnemonic.isSome()) {
                const accounts = await (0,services_wallet/* getDerivableAccounts */.tk)(wallet.mnemonic.value.words, 0, 10);
                const mnemonicId = await (0,services_wallet/* createMnemonicId */.zu)(wallet.mnemonic.value.words);
                if (!mnemonicId) continue;
                accounts.forEach((x)=>{
                    mnemonicWalletMap.set((0,formatter/* formatEthereumAddress */.j8)(x.address), {
                        mnemonicId,
                        derivationPath: x.derivationPath
                    });
                });
            }
        }
    }
    for (const wallet of backup){
        try {
            const wallets = await (0,services_wallet/* getWallets */.MX)();
            const matchedDefaultNameFormat = wallet.name.match(/Wallet (\d+)/);
            const digitIndex = matchedDefaultNameFormat?.[1];
            let name = wallet.name;
            if (!name) {
                const ens = await entry/* ChainbaseDomain */.nF.reverse(types/* ChainId */.a_.Mainnet, wallet.address);
                if (ens) name = ens;
            }
            if (!name) {
                name = generateNewWalletName(wallets, undefined, digitIndex && !Number.isNaN(digitIndex) ? Number(digitIndex) : undefined);
            }
            if (wallet.privateKey.isSome()) {
                const info = mnemonicWalletMap.get(wallet.address);
                await (0,services_wallet/* recoverWalletFromPrivateKey */.rE)(name, await JWKToKey(wallet.privateKey.value, 'private'), wallet.mnemonicId.unwrapOr(undefined) ?? info?.mnemonicId, wallet.derivationPath.unwrapOr(undefined) ?? info?.derivationPath);
            } else if (wallet.mnemonic.isSome()) {
                // fix a backup bug of pre-v2.2.2 versions
                const accounts = await (0,services_wallet/* getDerivableAccounts */.tk)(wallet.mnemonic.value.words, 1, 5);
                const index = accounts.findIndex((0,isSameAddress/* currySameAddress */.D)(wallet.address));
                await (0,services_wallet/* recoverWalletFromMnemonicWords */.AA)(name, wallet.mnemonic.value.words, index > -1 ? `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/${index}` : wallet.mnemonic.value.path);
            }
        } catch (error) {
            console.error(error);
            continue;
        }
    }
}
async function JWKToKey(jwk, type) {
    const ec = new elliptic.ec('secp256k1');
    if (type === 'public' && jwk.x && jwk.y) {
        const xb = (0,pvtutils/* fromBase64URL */.mz)(jwk.x);
        const yb = (0,pvtutils/* fromBase64URL */.mz)(jwk.y);
        const point = new Uint8Array((0,kit_esm/* concatArrayBuffer */.v_)(new Uint8Array([
            4
        ]), xb, yb));
        if (await (0,k256/* isK256Point */.LZ)(point)) return `0x${ec.keyFromPublic(point).getPublic(false, 'hex')}`;
    }
    if (type === 'private' && jwk.d) {
        const db = (0,pvtutils/* fromBase64URL */.mz)(jwk.d);
        if (await (0,k256/* isK256PrivateKey */.Hj)(db)) return `0x${ec.keyFromPrivate(db).getPrivate('hex')}`;
    }
    throw new Error('invalid private key');
}

;// CONCATENATED MODULE: ./packages/mask/background/services/backup/internal_restore.ts






async function restoreNormalizedBackup(backup) {
    const { plugins, posts, wallets } = backup;
    await restorePersonas(backup);
    await restorePosts(posts.values());
    if (wallets.length) {
        await internal_wallet_restore(wallets);
    }
    await restorePlugins(plugins);
    // Note: it looks like the restore will not immediately available to the dashboard, maybe due to
    // serialization cost or indexedDB transaction apply cost?
    // Here we add a delay as a workaround. It increases linearly as the scale of personas and profiles.
    await (0,kit_esm/* delay */.gw)(backup.personas.size + backup.profiles.size);
    if (backup.personas.size || backup.profiles.size) Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll(undefined);
}
async function restorePersonas(backup) {
    const { personas, profiles, relations } = backup;
    await (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const promises = [];
        for (const [id, persona] of personas){
            for (const [id] of persona.linkedProfiles){
                const state = {
                    connectionConfirmState: 'confirmed'
                };
                persona.linkedProfiles.set(id, state);
            }
            promises.push((0,web/* createOrUpdatePersonaDB */.lX)({
                identifier: id,
                publicKey: persona.publicKey,
                privateKey: persona.privateKey.unwrapOr(undefined),
                createdAt: persona.createdAt.unwrapOr(undefined),
                updatedAt: persona.updatedAt.unwrapOr(undefined),
                localKey: persona.localKey.unwrapOr(undefined),
                nickname: persona.nickname.unwrapOr(undefined),
                mnemonic: persona.mnemonic.map((mnemonic)=>({
                        words: mnemonic.words,
                        parameter: {
                            path: mnemonic.path,
                            withPassword: mnemonic.hasPassword
                        }
                    })).unwrapOr(undefined),
                linkedProfiles: persona.linkedProfiles,
                // "login" again because this is the restore process.
                // We need to explicitly set this flag because the backup may already in the database (but marked as "logout").
                hasLogout: false
            }, {
                explicitUndefinedField: 'ignore',
                linkedProfiles: 'merge'
            }, t));
        }
        for (const [id, profile] of profiles){
            promises.push((0,web/* createOrUpdateProfileDB */.o7)({
                identifier: id,
                nickname: profile.nickname.unwrapOr(undefined),
                localKey: profile.localKey.unwrapOr(undefined),
                linkedPersona: profile.linkedPersona.unwrapOr(undefined),
                createdAt: profile.createdAt.unwrapOr(new Date()),
                updatedAt: profile.updatedAt.unwrapOr(new Date())
            }, t));
        }
        for (const relation of relations){
            promises.push((0,web/* createOrUpdateRelationDB */.hK)({
                profile: relation.profile,
                linked: relation.persona,
                favor: relation.favor
            }, t));
        }
        if (!relations.length) {
            for (const persona of personas.values()){
                if (persona.privateKey.isNone()) continue;
                for (const profile of profiles.values()){
                    promises.push((0,web/* createOrUpdateRelationDB */.hK)({
                        favor: Persona/* RelationFavor */.K.UNCOLLECTED,
                        linked: persona.identifier,
                        profile: profile.identifier
                    }, t));
                }
            }
        }
        await Promise.all(promises);
    });
}
function restorePosts(backup) {
    return (0,post_web/* withPostDBTransaction */.tr)(async (t)=>{
        const promises = [];
        for (const post of backup){
            const rec = {
                identifier: post.identifier,
                foundAt: post.foundAt,
                postBy: post.postBy.unwrapOr(undefined),
                recipients: 'everyone'
            };
            if (post.encryptBy.isSome()) rec.encryptBy = post.encryptBy.value;
            if (post.postCryptoKey.isSome()) rec.postCryptoKey = post.postCryptoKey.value;
            if (post.summary.isSome()) rec.summary = post.summary.value;
            if (post.url.isSome()) rec.url = post.url.value;
            if (post.interestedMeta.size) rec.interestedMeta = post.interestedMeta;
            if (post.recipients.isSome()) {
                const { value } = post.recipients;
                if (value.type === 'public') rec.recipients = 'everyone';
                else {
                    const map = new Map();
                    for (const [id, detail] of value.receivers){
                        map.set(id, {
                            reason: detail.map((x)=>({
                                    at: x.at,
                                    type: 'direct'
                                }))
                        });
                    }
                }
            }
            // TODO: have a createOrUpdatePostDB
            promises.push((0,post_web/* queryPostDB */.q3)(post.identifier, t).then((result)=>result ? (0,post_web/* updatePostDB */.rr)(rec, 'override', t) : (0,post_web/* createPostDB */.$v)(rec, t)));
        }
        await Promise.all(promises);
    });
}
async function restorePlugins(backup) {
    const plugins = [
        ...worker/* activatedPluginsWorker */.J
    ];
    const works = new Set();
    for (const [pluginID, item] of Object.entries(backup)){
        const plugin = plugins.find((x)=>x.ID === pluginID);
        // should we warn user here?
        if (!plugin) {
            if ([
                ...store/* registeredPlugins */.i1.getCurrentValue().map((x)=>x[0])
            ].includes(pluginID)) console.warn(`[@masknet/plugin-infra] Found a backup of a not enabled plugin ${plugin}`, item);
            else console.warn(`[@masknet/plugin-infra] Found an unknown plugin backup of ${plugin}`, item);
            continue;
        }
        const onRestore = plugin.backup?.onRestore;
        if (!onRestore) {
            console.warn(`[@masknet/plugin-infra] Found a backup of plugin ${plugin.ID} but it did not register a onRestore callback.`, item);
            continue;
        }
        works.add((async ()=>{
            const result = await onRestore(item);
            if (result.isErr()) {
                const msg = `[@masknet/plugin-infra] Plugin ${plugin.ID} failed to restore its backup.`;
                throw new Error(msg, {
                    cause: result.error
                });
            }
        })());
    }
    await Promise.allSettled(works);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@ethereumjs+util@8.0.5/node_modules/@ethereumjs/util/dist/index.js
var util_dist = __webpack_require__(6509);
;// CONCATENATED MODULE: ./packages/mask/background/services/backup/restore.ts
/* provided dependency */ var restore_Buffer = __webpack_require__(7661)["Buffer"];








async function generateBackupSummary(raw) {
    return esm.Result.wrapAsync(async ()=>{
        const backupObj = JSON.parse(raw);
        const backup = await normalizeBackup(backupObj);
        const personas = [
            ...backup.personas.values()
        ].map((x)=>{
            if (!x.address.isNone()) return x.address.unwrap();
            if (x.privateKey.isNone()) return;
            const privateKey = x.privateKey.unwrap();
            if (!privateKey.d) return;
            const address = (0,util_dist.bufferToHex)((0,util_dist.publicToAddress)((0,util_dist.privateToPublic)(restore_Buffer.from((0,pvtutils/* fromBase64URL */.mz)(privateKey.d)))));
            return address;
        });
        const wallets = backup.wallets.map((x)=>x.address);
        const chainId = await entry/* SmartPayBundler */.Pp.getSupportedChainId();
        const accounts = await entry/* SmartPayOwner */.Lf.getAccountsByOwners(chainId, [
            ...(0,compact/* default */.Z)(personas),
            ...wallets
        ]);
        return {
            ...getBackupSummary(backup),
            countOfWallets: (0,sum/* default */.Z)([
                accounts.filter((x)=>x.deployed).length,
                wallets.length
            ])
        };
    });
}
async function restoreBackup(raw) {
    const backupObj = JSON.parse(raw);
    const backup = await normalizeBackup(backupObj);
    const granted = await (0,request_permission/* requestHostPermission */.Xm)(backup.settings.grantedHostPermissions);
    if (!granted) return;
    await restoreNormalizedBackup(backup);
    return;
}

;// CONCATENATED MODULE: ./packages/mask/background/services/backup/persona.ts



async function backupPersonaPrivateKey(identifier) {
    const profile = await (0,web/* queryPersonaDB */.Hm)(identifier);
    if (!profile?.privateKey) return undefined;
    const encodePrivateKey = (0,encode/* encode */.c)(profile.privateKey);
    return (0,kit_esm/* encodeArrayBuffer */.ll)(encodePrivateKey);
}

;// CONCATENATED MODULE: ./packages/mask/background/services/backup/index.ts





/***/ }),

/***/ 72722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ decryptWithDecoding),
  D: () => (/* binding */ getPostKeyCache)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/encryption/src/payload/types.ts
var types = __webpack_require__(83159);
// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var dist_esm = __webpack_require__(76089);
;// CONCATENATED MODULE: ./packages/encryption/src/network-encoding/shared.ts


/** @internal */ function shared_sharedEncoder(input) {
    return `\u{1F3BC}6/8|${encodeArrayBuffer(input)}:||`;
}
/** @internal */ function sharedDecoder(input) {
    const [[, payload] = []] = input.matchAll(/\u{1F3BC}6\/8\|([\w+/=]+):\|\|/giu);
    if (!payload) return dist_esm.None;
    try {
        return (0,dist_esm.Some)(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(payload)));
    } catch  {
        return dist_esm.None;
    }
}

// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
;// CONCATENATED MODULE: ./packages/encryption/src/network-encoding/twitter.ts



function twitter_TwitterEncoder(data) {
    if (typeof data === 'string') return __TwitterEncoderText(data);
    return __TwitterEncoderBinary(data);
}
/**
 * @link https://github.com/DimensionDev/Maskbook/issues/198
 */ function __TwitterEncoderText(text) {
    return 'https://mask.io/?PostData_v1=' + text.//
    replace('\u{1F3BC}', '%20').replace(':||', '%40').replace('+', '-').replace('=', '_').replaceAll('|', '.');
}
function __TwitterEncoderBinary(data) {
    return `https://mask.io/?PostData_v2=${encodeURIComponent(encodeArrayBuffer(data))}`;
}
function TwitterDecoder(raw) {
    const newVersion = TwitterDecoderBinary(raw);
    if (newVersion.isSome()) return newVersion;
    return TwitterDecoderText(raw);
}
function TwitterDecoderBinary(raw) {
    if (!raw) return dist_esm.None;
    if (!raw.includes('PostData_v2')) return dist_esm.None;
    const payloadLink = (0,parseURLs/* parseURLs */.l)(raw).filter((x)=>x.startsWith('https://mask.io/?PostData_v2='));
    try {
        for (const link of payloadLink){
            const url = new URL(link);
            const payload = url.searchParams.get('PostData_v2');
            if (!payload) continue;
            return (0,dist_esm.Some)(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(payload)));
        }
    } catch  {
        return dist_esm.None;
    }
    return dist_esm.None;
}
function TwitterDecoderText(raw) {
    if (!raw) return dist_esm.None;
    if (!raw.includes('%20') || !raw.includes('%40')) return dist_esm.None;
    const payloadLink = (0,parseURLs/* parseURLs */.l)(raw).map((x)=>x.replace(/\u2026$/, '')).filter((x)=>x.endsWith('%40'))[0];
    if (!URL.canParse(payloadLink)) return dist_esm.None;
    const { search, pathname } = new URL(payloadLink);
    const payload = search ? search.slice(1) : pathname.slice(1);
    if (!payload) return dist_esm.None;
    return (0,dist_esm.Some)('\u{1F3BC}' + payload.// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1476
    // eslint-disable-next-line unicorn/better-regex
    replace(/^PostData_v\d=/i, '').replace(/^%20/, '').replace(/%40$/, '').replace('-', '+').replace('_', '=').replaceAll('.', '|') + ':||');
}

;// CONCATENATED MODULE: ./packages/encryption/src/network-encoding/index.ts



function decodeByNetwork(network, content) {
    if (network === types/* EncryptPayloadNetwork */.FL.Twitter) {
        return TwitterDecoder(content).map((x)=>[
                x
            ]).unwrapOr([]);
    }
    const possiblePayload = content.match(/(\u{1F3BC}[\w+/=|]+:\|\|)/giu) || [];
    const result = [];
    for (const payload of possiblePayload){
        const decoded = sharedDecoder(payload);
        if (decoded.isSome()) result.push(decoded.value);
        else result.push(payload);
    }
    return result;
}
function encodeByNetwork(network, content) {
    // v38
    if (typeof content === 'string') {
        if (network === EncryptPayloadNetwork.Twitter) return __TwitterEncoder(content);
        return content;
    }
    // v37
    if (network === EncryptPayloadNetwork.Twitter) return __TwitterEncoder(content);
    return sharedEncoder(content);
}


// EXTERNAL MODULE: ./packages/encryption/src/encryption/DecryptionTypes.ts
var DecryptionTypes = __webpack_require__(34625);
// EXTERNAL MODULE: ./packages/encryption/src/image-steganography/index.ts
var image_steganography = __webpack_require__(16041);
// EXTERNAL MODULE: ./packages/encryption/src/payload/index.ts + 10 modules
var src_payload = __webpack_require__(30557);
// EXTERNAL MODULE: ./packages/typed-message/base/src/binary-encode/decode.ts
var decode = __webpack_require__(91322);
// EXTERNAL MODULE: ./packages/typed-message/base/src/deprecated-encode/index.ts
var deprecated_encode = __webpack_require__(29642);
// EXTERNAL MODULE: ./packages/base/src/ts-results/andThenAsync.ts
var andThenAsync = __webpack_require__(69201);
// EXTERNAL MODULE: ./packages/encryption/src/utils/crypto.ts
var utils_crypto = __webpack_require__(6195);
// EXTERNAL MODULE: ./packages/encryption/src/encryption/v38-ecdh.ts
var v38_ecdh = __webpack_require__(24106);
;// CONCATENATED MODULE: ./packages/encryption/src/encryption/Decryption.ts








const ErrorReasons = DecryptionTypes/* DecryptError */.G6.Reasons;
async function* decrypt(options, io) {
    const { author: _author, encrypted: _encrypted, encryption: _encryption, version } = options.message;
    const { authorPublicKey: _authorPublicKey } = options.message;
    if (_encryption.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _encryption.error);
    if (_encrypted.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _encrypted.error);
    const encryption = _encryption.value;
    const encrypted = _encrypted.value;
    // ! try decrypt by cache
    {
        const cacheKey = await io.getPostKeyCache().catch(()=>null);
        const iv = encryption.iv.unwrapOr(null);
        if (cacheKey && iv) return yield* decryptWithPostAESKey(version, cacheKey, iv, encrypted, options.onDecrypted);
    }
    if (encryption.type === 'public') {
        const { AESKey, iv } = encryption;
        if (AESKey.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, AESKey.error);
        if (iv.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, iv.error);
        // Not calling setPostCache here. It's public post and saving key is wasting storage space.
        return yield* decryptWithPostAESKey(version, AESKey.value, iv.value, encrypted, options.onDecrypted);
    } else if (encryption.type === 'E2E') {
        const { iv: _iv, ownersAESKeyEncrypted } = encryption;
        if (_iv.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _iv.error);
        const iv = _iv.value;
        const author = _author.unwrapOr(dist_esm.None);
        // #region // ! decrypt by local key. This only happens in v38 or older.
        if (options.message.version <= -38) {
            const hasAuthorLocalKey = author.isSome() ? io.hasLocalKeyOf(author.value).catch(()=>false) : Promise.resolve(false);
            if (ownersAESKeyEncrypted.isOk()) {
                try {
                    const aes_raw = new Uint8Array(await io.decryptByLocalKey(author.unwrapOr(null), ownersAESKeyEncrypted.value, iv));
                    const aes = await importAESKeyFromJWKFromTextEncoder(aes_raw);
                    io.setPostKeyCache(aes.unwrap()).catch(()=>{});
                    return yield* decryptWithPostAESKey(version, aes.unwrap(), iv, encrypted, options.onDecrypted);
                } catch (err) {
                    if (await hasAuthorLocalKey) {
                        // If we fall into this branch, it means we failed to decrypt as author.
                        // Since we will not ECDHE to myself when encrypting,
                        // it does not make sense to try the following steps (because it will never have a result).
                        return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.CannotDecryptAsAuthor, err);
                    }
                }
            } else // fall through
            {
                if (await hasAuthorLocalKey) {
                    // If the ownersAESKeyEncrypted is corrupted and we're the author, we cannot do anything to continue.
                    return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.CannotDecryptAsAuthor, ownersAESKeyEncrypted.error);
                }
            }
        }
        // fall through
        // #endregion
        // #region // ! decrypt by ECDH
        const authorPublicKey = _authorPublicKey.unwrapOr(dist_esm.None);
        yield progress(DecryptionTypes/* DecryptProgressKind */.Pj.Progress, {
            event: DecryptionTypes/* DecryptIntermediateProgressKind */.gO.TryDecryptByE2E
        });
        if (version === -37) {
            return yield* v37ECDHE(io, encryption, encrypted, options.signal, options.onDecrypted);
        } else {
            // Static ECDH
            // to do static ECDH, we need to have the authors public key first. bail if not found.
            const authorECPub = await dist_esm.Result.wrapAsync(async ()=>{
                if (authorPublicKey.isSome()) return authorPublicKey.value.key;
                return io.queryAuthorPublicKey(author.unwrapOr(null), options.signal);
            });
            if (authorECPub.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.AuthorPublicKeyNotFound, authorECPub.error);
            if (!authorECPub.value) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.AuthorPublicKeyNotFound, undefined);
            return yield* v38To40StaticECDH(version, io, authorECPub.value, iv, encrypted, options.signal, options.onDecrypted);
        }
    }
    // #endregion
    (0,esm/* unreachable */.t1)(encryption);
}
async function* v37ECDHE(io, encryption, encrypted, signal, report) {
    // checked before
    const iv = encryption.iv.unwrap();
    // for each inlinedECDHE pub, derive a set of AES key.
    const inlinedECDHE_derived = Promise.all(Object.values(encryption.ephemeralPublicKey).map((x)=>x.unwrapOr(null)).filter(Boolean).map((x)=>io.deriveAESKey(x.key))).then((x)=>x.flat());
    async function* postKey() {
        if (encryption.ownersAESKeyEncrypted.isOk()) {
            const key = {
                encryptedPostKey: encryption.ownersAESKeyEncrypted.value
            };
            yield key;
        }
        yield* io.queryPostKey_version37(iv, signal);
    }
    const ecdh = {
        type: 'ephemeral',
        derive: (key)=>key ? io.deriveAESKey(key) : inlinedECDHE_derived
    };
    return yield* decryptByECDH(-37, io, postKey(), ecdh, importAESKeyFromRaw, iv, encrypted, report);
}
async function* v38To40StaticECDH(version, io, authorECPub, iv, encrypted, signal, report) {
    const postKey = ({
        async *'-40' (iv) {
            const val = await io.queryPostKey_version40(iv);
            if (val) yield val;
        },
        '-39': io.queryPostKey_version39,
        '-38': io.queryPostKey_version38
    })[version](iv, signal);
    const ecdh = {
        type: 'static-v38-or-older',
        derive: (postKeyIV)=>(0,v38_ecdh/* deriveAESByECDH_version38OrOlderExtraSteps */.D)(io.deriveAESKey, authorECPub, postKeyIV)
    };
    return yield* decryptByECDH(version, io, postKey, ecdh, importAESKeyFromJWKFromTextEncoder, iv, encrypted, report);
}
// it's optional argument because the ephemeralPublicKey maybe inlined in the post payload.
async function* decryptByECDH(version, io, possiblePostKeyIterator, ecdhProvider, postKeyDecoder, iv, encrypted, report) {
    const { derive, type } = ecdhProvider;
    for await (const _ of possiblePostKeyIterator){
        const { encryptedPostKey } = _;
        // TODO: how to deal with signature?
        // TODO: what to do if provider throws?
        const derivedKeys = type === 'static-v38-or-older' ? await derive(_.postKeyIV || iv) : await derive(_.ephemeralPublicKey).then((aesArr)=>// TODO: we reuse iv in ephemeral mode, is that safe?
            aesArr.map((aes)=>[
                    aes,
                    iv
                ]));
        for (const [derivedKey, derivedKeyNewIV] of derivedKeys){
            const possiblePostKey = await (0,andThenAsync/* andThenAsync */.p)((0,utils_crypto/* decryptWithAES */.PB)(derivedKey, derivedKeyNewIV, encryptedPostKey), postKeyDecoder);
            if (possiblePostKey.isErr()) continue;
            const decrypted = await (0,utils_crypto/* decryptWithAES */.PB)(possiblePostKey.value, iv, encrypted);
            if (decrypted.isErr()) continue;
            io.setPostKeyCache(possiblePostKey.value).catch(()=>{});
            // If we'd able to decrypt the raw message, we will stop here.
            // because try further key cannot resolve the problem of parseTypedMessage failed.
            return yield* parseTypedMessage(version, decrypted.value, report);
        }
    }
    return void (yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.NotShareTarget, undefined));
}
async function* decryptWithPostAESKey(version, postAESKey, iv, encrypted, report) {
    const _ = await (0,utils_crypto/* decryptWithAES */.PB)(postAESKey, iv, encrypted);
    if (_.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.DecryptFailed, _.error);
    return yield* parseTypedMessage(version, _.value, report);
}
async function* parseTypedMessage(version, raw, report) {
    const _ = version === -37 ? (0,decode/* decodeTypedMessageFromDocument */.A)(raw) : (0,deprecated_encode/* decodeTypedMessageV38ToV40Format */.W)(raw, version);
    if (_.isErr()) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadDecryptedButTypedMessageBroken, _.error);
    try {
        report?.(_.value);
    } catch  {}
    return yield progress(DecryptionTypes/* DecryptProgressKind */.Pj.Success, {
        content: _.value
    });
}
// uint8 |> TextDecoder |> JSON.parse |> importAESKeyFromJWK
function importAESKeyFromJWKFromTextEncoder(aes_raw) {
    return dist_esm.Result.wrapAsync(async ()=>{
        const aes_text = new TextDecoder().decode(aes_raw);
        const aes_jwk = JSON.parse(aes_text);
        if (!aes_jwk.key_ops.includes('decrypt')) aes_jwk.key_ops.push('decrypt');
        return (await (0,utils_crypto/* importAES */.yj)(aes_jwk)).unwrap();
    });
}
function importAESKeyFromRaw(aes_raw) {
    return dist_esm.Result.wrapAsync(async ()=>{
        return crypto.subtle.importKey('raw', aes_raw, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'decrypt'
        ]);
    });
}
function progress(kind, rest) {
    return {
        type: kind,
        ...rest
    };
}

// EXTERNAL MODULE: ./packages/base/src/Identifier/post-iv.ts
var post_iv = __webpack_require__(97039);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/web.ts + 2 modules
var web = __webpack_require__(70345);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/helper.ts
var helper = __webpack_require__(5706);
// EXTERNAL MODULE: ./packages/mask/background/database/post/web.ts
var post_web = __webpack_require__(48104);
// EXTERNAL MODULE: ./packages/mask/background/database/post/helper.ts
var post_helper = __webpack_require__(80896);
// EXTERNAL MODULE: ./packages/mask/background/network/queryPostKey.ts + 3 modules
var queryPostKey = __webpack_require__(70642);
;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/decryption.ts









async function downloadImage(url) {
    const x = await fetch(url);
    return await x.arrayBuffer();
}
/**
 *
 * @param encoded If the encoded content is a text, it should only contain 1 payload. Extra payload will be ignored.
 * @param context
 */ async function* decryptWithDecoding(encoded, context) {
    let decoded;
    if (encoded.type === 'text') {
        decoded = decodeByNetwork(context.encryptPayloadNetwork, encoded.text)[0];
    } else {
        if (!context.authorHint) {
            return yield new DecryptionTypes/* DecryptError */.G6(DecryptionTypes/* DecryptErrorReasons */.OF.UnrecognizedAuthor, undefined);
        }
        const result = await (0,image_steganography/* steganographyDecodeImage */.oX)(encoded.image, {
            password: context.authorHint.toText(),
            downloadImage
        });
        if (typeof result === 'string') {
            decoded = decodeByNetwork(context.encryptPayloadNetwork, result)[0];
        } else if (result === null) {
            return yield new DecryptionTypes/* DecryptError */.G6(DecryptionTypes/* DecryptErrorReasons */.OF.NoPayloadFound, undefined);
        } else {
            decoded = result;
        }
    }
    if (!decoded) return yield new DecryptionTypes/* DecryptError */.G6(DecryptionTypes/* DecryptErrorReasons */.OF.NoPayloadFound, undefined);
    yield* decryption(decoded, context);
}
const inMemoryCache = new Map();
async function* decryption(payload, context) {
    const parse = await (0,src_payload/* parsePayload */.WZ)(payload);
    if (parse.isErr()) return null;
    const { encryptPayloadNetwork, postURL, currentProfile, authorHint } = context;
    // #region Identify the PostIdentifier
    const iv = parse.value.encryption.unwrapOr(null)?.iv.unwrapOr(null);
    {
        if (!iv) return null;
        // iv is required to identify the post and it also used in comment encryption.
        const info = {
            type: DecryptionTypes/* DecryptProgressKind */.Pj.Info,
            iv,
            version: parse.value.version
        };
        if (parse.value.encryption.isOk()) {
            const val = parse.value.encryption.value;
            info.publicShared = val.type === 'public';
            if (val.type === 'E2E') info.isAuthorOfPost = val.ownersAESKeyEncrypted.isOk();
        }
        yield info;
    }
    const id = new post_iv/* PostIVIdentifier */.b((0,types/* encryptPayloadNetworkToDomain */.k0)(encryptPayloadNetwork), (0,esm/* encodeArrayBuffer */.ll)(new Uint8Array(iv)));
    // #endregion
    if (inMemoryCache.has(id)) {
        const p = {
            type: DecryptionTypes/* DecryptProgressKind */.Pj.Success,
            content: inMemoryCache.get(id)
        };
        return void (yield p);
    }
    // #region store author public key into the database
    try {
        const id = parse.unwrap().author.unwrap().unwrap();
        if (!hasStoredAuthorPublicKey.has(id)) {
            storeAuthorPublicKey(id, authorHint, parse.unwrap().authorPublicKey.unwrap().unwrap()).catch(noop/* default */.Z);
            hasStoredAuthorPublicKey.add(id);
        }
    } catch  {}
    // #endregion
    const progress = decrypt({
        message: parse.value,
        onDecrypted (message) {
            inMemoryCache.set(id, message);
        }
    }, {
        getPostKeyCache: getPostKeyCache.bind(null, id),
        setPostKeyCache: (key)=>{
            return (0,post_helper/* savePostKeyToDB */.h)(id, key, {
                // public post will not call this function.
                // and recipients only will be set when posting/appending recipients.
                recipients: new Map(),
                postBy: authorHint || parse.safeUnwrap().author.unwrapOr(undefined)?.unwrapOr(undefined),
                url: postURL
            });
        },
        hasLocalKeyOf: helper/* hasLocalKeyOf */.wf,
        decryptByLocalKey: helper/* decryptByLocalKey */.MM,
        async deriveAESKey (pub) {
            return Array.from((await (0,helper/* deriveAESByECDH */.Si)(pub)).values());
        },
        queryAuthorPublicKey (author, signal) {
            // TODO: This should try to fetch publicKey from NextID
            // but it is not urgent because all new posts has their publicKey embedded
            return (0,helper/* queryPublicKey */.M_)(author || authorHint);
        },
        async *queryPostKey_version37 (iv, signal) {
            const author = await (0,helper/* queryPublicKey */.M_)(context.currentProfile);
            if (!author) throw new DecryptionTypes/* DecryptError */.G6(DecryptionTypes/* DecryptErrorReasons */.OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,queryPostKey/* GUN_queryPostKey_version37 */.GA)(iv, author, context.encryptPayloadNetwork, signal || new AbortController().signal);
        },
        async *queryPostKey_version38 (iv, signal) {
            const author = await (0,helper/* queryPublicKey */.M_)(context.currentProfile);
            if (!author) throw new DecryptionTypes/* DecryptError */.G6(DecryptionTypes/* DecryptErrorReasons */.OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,queryPostKey/* GUN_queryPostKey_version39Or38 */.ab)(-38, iv, author, context.encryptPayloadNetwork, signal || new AbortController().signal);
        },
        async *queryPostKey_version39 (iv, signal) {
            const author = await (0,helper/* queryPublicKey */.M_)(context.currentProfile);
            if (!author) throw new DecryptionTypes/* DecryptError */.G6(DecryptionTypes/* DecryptErrorReasons */.OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,queryPostKey/* GUN_queryPostKey_version39Or38 */.ab)(-39, iv, author, context.encryptPayloadNetwork, signal || new AbortController().signal);
        },
        async queryPostKey_version40 (iv) {
            if (!currentProfile) return null;
            return (0,queryPostKey/* GUN_queryPostKey_version40 */.Kl)(iv, currentProfile.userId);
        }
    });
    yield* progress;
    return null;
}
/** @internal */ async function getPostKeyCache(id) {
    const post = await (0,post_web/* queryPostDB */.q3)(id);
    if (!post?.postCryptoKey) return null;
    const k = await crypto.subtle.importKey('jwk', post.postCryptoKey, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'decrypt'
    ]);
    return k;
}
const hasStoredAuthorPublicKey = new Set();
async function storeAuthorPublicKey(payloadAuthor, postAuthor, pub) {
    if (payloadAuthor !== postAuthor) {
        // ! Author detected is not equal to AuthorHint.
        // ! Skip store the public key because it might be a security problem.
        return;
    }
    if (pub.algr !== types/* EC_KeyCurve */._r.secp256k1) {
        throw new Error('TODO: support other curves');
    }
    // if privateKey, we should possibly not recreate it
    const profile = await (0,web/* queryProfileDB */.IW)(payloadAuthor);
    const persona = profile?.linkedPersona ? await (0,web/* queryPersonaDB */.Hm)(profile.linkedPersona) : undefined;
    if (persona?.privateKey) return;
    const key = await crypto.subtle.exportKey('jwk', pub.key);
    const otherPersona = await (0,web/* queryPersonaDB */.Hm)((await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(key)).unwrap());
    if (otherPersona?.privateKey) return;
    return (0,helper/* createProfileWithPersona */.lr)(payloadAuthor, {
        connectionConfirmState: 'confirmed'
    }, {
        publicKey: await crypto.subtle.exportKey('jwk', pub.key)
    });
}


/***/ }),

/***/ 72085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  appendShareTarget: () => (/* reexport */ appendShareTarget),
  decryptComment: () => (/* reexport */ decryptComment),
  encryptComment: () => (/* reexport */ encryptComment),
  encryptTo: () => (/* reexport */ encryptTo),
  getIncompleteRecipientsOfPost: () => (/* reexport */ getIncompleteRecipientsOfPost),
  getRecipients: () => (/* reexport */ getRecipients),
  hasRecipientAvailable: () => (/* reexport */ hasRecipientAvailable),
  steganographyEncodeImage: () => (/* reexport */ steganographyEncodeImage)
});

// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post-iv.ts
var post_iv = __webpack_require__(97039);
// EXTERNAL MODULE: ./packages/typed-message/base/src/binary-encode/encode.ts
var encode = __webpack_require__(58098);
// EXTERNAL MODULE: ./packages/typed-message/base/src/deprecated-encode/index.ts
var deprecated_encode = __webpack_require__(29642);
// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var dist_esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./packages/encryption/src/payload/index.ts + 10 modules
var src_payload = __webpack_require__(30557);
// EXTERNAL MODULE: ./packages/encryption/src/utils/crypto.ts
var utils_crypto = __webpack_require__(6195);
// EXTERNAL MODULE: ./packages/encryption/src/encryption/EncryptionTypes.ts
var EncryptionTypes = __webpack_require__(63966);
// EXTERNAL MODULE: ./packages/encryption/src/encryption/utils.ts
var utils = __webpack_require__(47271);
;// CONCATENATED MODULE: ./packages/encryption/src/encryption/v37-ecdh.ts


/** @internal */ async function v37_addReceiver(firstTime, context, target, io) {
    const { getEphemeralKey, postIV, postKeyEncoded } = context;
    const ecdh = Promise.allSettled(target.target.map(async (receiverPublicKey)=>{
        const iv = postIV || (0,utils/* fillIV */.i)(io);
        const [ephemeralPublicKey, ephemeralPrivateKey] = await getEphemeralKey(receiverPublicKey.algr);
        const aes = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: receiverPublicKey.key
        }, ephemeralPrivateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt'
        ]);
        // Note: we're reusing iv in the post encryption.
        const encryptedPostKey = await (0,utils_crypto/* encryptWithAES */.l_)(aes, iv, await postKeyEncoded);
        const result = {
            encryptedPostKey: encryptedPostKey.unwrap(),
            target: receiverPublicKey
        };
        if (!firstTime) result.ephemeralPublicKey = ephemeralPublicKey;
        return result;
    })).then((x)=>x.entries());
    const ecdhResult = new Map();
    for (const [index, result] of (await ecdh)){
        ecdhResult.set(target.target[index], result);
    }
    return ecdhResult;
}

// EXTERNAL MODULE: ./packages/encryption/src/encryption/v38-ecdh.ts
var v38_ecdh = __webpack_require__(24106);
;// CONCATENATED MODULE: ./packages/encryption/src/encryption/Encryption.ts











async function encrypt(options, io) {
    const postIV = (0,utils/* fillIV */.i)(io);
    const postKey = await aes256GCM(io);
    if (!postKey.usages.includes('encrypt') || !postKey.usages.includes('decrypt') || !postKey.extractable) {
        throw new EncryptionTypes/* EncryptError */.x(EncryptionTypes/* EncryptErrorReasons */.U.AESKeyUsageError);
    }
    const encodedMessage = encodeMessage(options.version, options.message);
    const encryptedMessage = encodedMessage.then((message)=>(0,utils_crypto/* encryptWithAES */.l_)(postKey, postIV, message)).then((x)=>x.unwrap());
    let encryption;
    let ecdhResult;
    if (options.target.type === 'public') {
        encryption = {
            iv: postIV,
            type: 'public',
            AESKey: postKey
        };
    } else {
        const postKeyEncoded = encodePostKey(options.version, postKey);
        const context = {
            authorPublic: options.authorPublicKey,
            postKeyEncoded,
            postIV
        };
        if (options.version === -38) [encryption, ecdhResult] = await e2e_v38(context, options.target, io);
        else if (options.version === -37) [encryption, ecdhResult] = await e2e_v37(context, options.target, io);
        else (0,esm/* unreachable */.t1)(options.version);
    }
    const payload = src_payload/* encodePayload */.V1.NoSign({
        version: options.version,
        author: options.author,
        authorPublicKey: options.authorPublicKey,
        encryption,
        encrypted: await encryptedMessage,
        signature: dist_esm.None
    }).then((x)=>x.unwrap());
    return {
        author: options.author.unwrapOr(undefined),
        identifier: new post_iv/* PostIVIdentifier */.b(options.network, (0,esm/* encodeArrayBuffer */.ll)(postIV)),
        postKey,
        output: await payload,
        e2e: ecdhResult
    };
}
/** @internal */ async function encodePostKey(version, key) {
    if (version === -37) return crypto.subtle.exportKey('raw', key).then((x)=>new Uint8Array(x));
    else if (version === -38) return crypto.subtle.exportKey('jwk', key).then(JSON.stringify).then((x)=>new TextEncoder().encode(x));
    (0,esm/* unreachable */.t1)(version);
}
async function e2e_v37(context, target, io) {
    const { authorPublic, postIV, postKeyEncoded } = context;
    if (!authorPublic.isSome()) throw new EncryptionTypes/* EncryptError */.x(EncryptionTypes/* EncryptErrorReasons */.U.PublicKeyNotFound);
    const { ephemeralKeys, getEphemeralKey } = (0,utils/* createEphemeralKeysMap */.X)(io);
    const ecdhResult = v37_addReceiver(true, {
        ...context,
        getEphemeralKey
    }, target, io);
    const ownersAESKeyEncrypted = Promise.resolve().then(async ()=>{
        const [, ephemeralPrivateKey] = await getEphemeralKey(authorPublic.value.algr);
        // we get rid of localKey in v38
        const aes = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: authorPublic.value.key
        }, ephemeralPrivateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt'
        ]);
        // Note: we're reusing iv in the post encryption.
        const encryptedPostKey = await (0,utils_crypto/* encryptWithAES */.l_)(aes, postIV, await postKeyEncoded);
        return encryptedPostKey.unwrap();
    });
    const encryption = {
        type: 'E2E',
        ephemeralPublicKey: new Map(),
        iv: postIV,
        ownersAESKeyEncrypted: await ownersAESKeyEncrypted
    };
    // wait ecdh to finish write ephemeralKeys
    await ecdhResult;
    for (const [curve, keys] of ephemeralKeys){
        encryption.ephemeralPublicKey.set(curve, (await keys)[0]);
    }
    return [
        encryption,
        await ecdhResult
    ];
}
async function e2e_v38(context, target, io) {
    const { postIV, postKeyEncoded } = context;
    const ecdhResult = await (0,v38_ecdh/* v38_addReceiver */.i)(postKeyEncoded, target, io);
    const encryption = {
        type: 'E2E',
        // v38 does not support ephemeral encryption.
        ephemeralPublicKey: new Map(),
        iv: postIV,
        ownersAESKeyEncrypted: new Uint8Array(await io.encryptByLocalKey(await postKeyEncoded, postIV))
    };
    return [
        encryption,
        ecdhResult
    ];
}
async function encodeMessage(version, message) {
    if (version === -37) return (0,encode/* encodeTypedMessageToDocument */.F)(message);
    if (!(0,core_text/* isTypedMessageText */.Rz)(message)) throw new EncryptionTypes/* EncryptError */.x(EncryptionTypes/* EncryptErrorReasons */.U.ComplexTypedMessageNotSupportedInPayload38);
    return (0,deprecated_encode/* encodeTypedMessageV38Format */.H)(message);
}
async function aes256GCM(io) {
    if (io.getRandomAESKey) return io.getRandomAESKey();
    return await crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
}

// EXTERNAL MODULE: ./packages/encryption/src/payload/types.ts
var types = __webpack_require__(83159);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/helper.ts
var helper = __webpack_require__(5706);
// EXTERNAL MODULE: ./packages/mask/background/database/post/helper.ts
var post_helper = __webpack_require__(80896);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/web.ts + 2 modules
var web = __webpack_require__(70345);
// EXTERNAL MODULE: ./packages/mask/background/network/queryPostKey.ts + 3 modules
var queryPostKey = __webpack_require__(70642);
;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/encryption.ts








async function encryptTo(version, content, target, whoAmI, network) {
    const [keyMap, convertedTarget] = await prepareEncryptTarget(target);
    const authorPublicKey = whoAmI ? await (0,helper/* queryPublicKey */.M_)(whoAmI).catch(noop/* default */.Z) : undefined;
    const { identifier, output, postKey, e2e } = await encrypt({
        network: whoAmI?.network || (0,types/* encryptPayloadNetworkToDomain */.k0)(network),
        author: whoAmI ? (0,dist_esm.Some)(whoAmI) : dist_esm.None,
        authorPublicKey: authorPublicKey ? (0,dist_esm.Some)({
            algr: types/* EC_KeyCurve */._r.secp256k1,
            key: authorPublicKey
        }) : dist_esm.None,
        message: content,
        target: convertedTarget,
        version
    }, {
        async deriveAESKey (pub) {
            const result = Array.from((await (0,helper/* deriveAESByECDH */.Si)(pub, whoAmI)).values());
            if (result.length === 0) throw new Error('No key found');
            return result[0];
        },
        encryptByLocalKey: async (content, iv)=>{
            if (!whoAmI) throw new Error('No Profile found');
            return (0,helper/* encryptByLocalKey */.i6)(whoAmI, content, iv);
        }
    });
    (async ()=>{
        const profile = whoAmI ? await (0,web/* queryProfileDB */.IW)(whoAmI).catch(noop/* default */.Z) : null;
        const usingPersona = profile?.linkedPersona;
        return (0,post_helper/* savePostKeyToDB */.h)(identifier, postKey, {
            postBy: whoAmI,
            recipients: target.type === 'public' ? 'everyone' : e2eMapToRecipientDetails(keyMap, e2e),
            encryptBy: usingPersona,
            ...collectInterestedMeta(content)
        });
    })().catch((error)=>console.error('[@masknet/encryption] Failed to save post key to DB', error));
    if (target.type === 'E2E') {
        if (version === -37) {
            (0,queryPostKey/* publishPostAESKey_version37 */.bQ)(identifier.toIV(), network, e2e);
        } else {
            (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, identifier.toIV(), network, e2e);
        }
    }
    return output;
}
function e2eMapToRecipientDetails(keyMap, input) {
    const result = new Map();
    for (const [key] of input){
        const identifier = keyMap?.get(key.key);
        if (!identifier) continue;
        result.set(identifier, new Date());
    }
    return result;
}
/** @internal */ async function prepareEncryptTarget(target) {
    if (target.type === 'public') return [
        null,
        target
    ];
    const key_map = new Map();
    const map = [];
    await Promise.allSettled(target.target.map(async (id)=>{
        const key = await id.persona?.toCryptoKey('derive') || await (0,helper/* queryPublicKey */.M_)(id.profile);
        if (!key) {
            console.error('No publicKey found for profile', id.profile.toText());
            return;
        }
        map.push({
            algr: types/* EC_KeyCurve */._r.secp256k1,
            key
        });
        key_map.set(key, id.profile);
    }));
    return [
        key_map,
        {
            type: 'E2E',
            target: map
        }
    ];
}
function collectInterestedMeta(content) {
    if ((0,core_text/* isTypedMessageText */.Rz)(content)) return {
        summary: getSummary(content),
        meta: content.meta
    };
    return {};
}
const SUMMARY_MAX_LENGTH = 40;
function getSummary(content) {
    let result = '';
    const sliceLength = content.content.length > SUMMARY_MAX_LENGTH ? SUMMARY_MAX_LENGTH + 1 : SUMMARY_MAX_LENGTH;
    // UTF-8 aware summary
    if (Intl.Segmenter) {
        // it seems like using "en" can also split the word correctly.
        const seg = new Intl.Segmenter('en');
        for (const word of seg.segment(content.content)){
            if (result.length >= sliceLength) break;
            result += word.segment;
        }
    } else {
        result = content.content.slice(0, sliceLength);
    }
    return result;
}

;// CONCATENATED MODULE: ./packages/encryption/src/encryption/AppendEncryption.ts





async function appendEncryptionTarget(options, io) {
    const target = {
        type: 'E2E',
        target: options.target
    };
    const postKeyEncoded = encodePostKey(options.version, options.postAESKey);
    if (options.version === -38) {
        return (0,v38_ecdh/* v38_addReceiver */.i)(postKeyEncoded, target, io);
    } else if (options.version === -37) {
        const { getEphemeralKey } = (0,utils/* createEphemeralKeysMap */.X)(io);
        return v37_addReceiver(false, {
            postKeyEncoded,
            postIV: options.iv,
            getEphemeralKey
        }, target, io);
    }
    (0,esm/* unreachable */.t1)(options.version);
}

// EXTERNAL MODULE: ./packages/mask/background/database/post/web.ts
var post_web = __webpack_require__(48104);
// EXTERNAL MODULE: ./packages/mask/background/services/crypto/decryption.ts + 4 modules
var decryption = __webpack_require__(72722);
;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/appendEncryption.ts






async function appendShareTarget(version, post, target, whoAmI, network) {
    if (version === -39 || version === -40) throw new TypeError('invalid version');
    const key = await (0,decryption/* getPostKeyCache */.D)(post);
    const postRec = await (0,post_web/* queryPostDB */.q3)(post);
    const postBy = postRec?.encryptBy || postRec?.postBy || whoAmI;
    const [keyMap, { target: convertedTarget }] = await prepareEncryptTarget({
        type: 'E2E',
        target
    });
    if (!key) throw new Error('No post key found');
    const e2e = await appendEncryptionTarget({
        target: convertedTarget,
        iv: post.toIV(),
        postAESKey: key,
        version
    }, {
        async deriveAESKey (pub) {
            const result = Array.from((await (0,helper/* deriveAESByECDH */.Si)(pub, postBy)).values());
            if (result.length === 0) throw new Error('No key found');
            return result[0];
        }
    });
    if (version === -38) {
        (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, post.toIV(), network, e2e);
    } else {
        (0,queryPostKey/* publishPostAESKey_version37 */.bQ)(post.toIV(), network, e2e);
    }
    {
        const recipients = new Map();
        for (const [, value] of keyMap)recipients.set(value, new Date());
        (0,post_web/* updatePostDB */.rr)({
            identifier: post,
            recipients
        }, 'append');
    }
}

;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/comment.ts

// * Payload format: 🎶2/4|encrypted_comment:||
async function encryptComment(postIV, postContent, comment) {
    const key = await getCommentKey(postIV, postContent);
    const encrypted = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: postIV
    }, key, (0,esm/* encodeText */.YT)(comment));
    return `\u{1F3B6}2/4|${(0,esm/* encodeArrayBuffer */.ll)(encrypted)}:||`;
}
async function decryptComment(postIV, postContent, encryptComment) {
    const payload = extractCommentPayload(encryptComment);
    if (!payload) return null;
    const key = await getCommentKey(postIV, postContent);
    const result = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv: postIV
    }, key, (0,esm/* decodeArrayBuffer */.xe)(payload));
    return (0,esm/* decodeText */.rj)(result);
}
async function getCommentKey(postIV, postContent) {
    const pbkdf = await crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(postContent), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    return await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: postIV,
        iterations: 100000,
        hash: 'SHA-256'
    }, pbkdf, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
}
function extractCommentPayload(text) {
    const [_, toEnd] = text.split('\u{1F3B6}2/4|');
    const [content, _2] = (toEnd || '').split(':||');
    if (content.length) return content;
    return;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(43434);
// EXTERNAL MODULE: ./packages/encryption/src/image-steganography/index.ts
var image_steganography = __webpack_require__(16041);
;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/steganography.ts



async function fetchImage(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.arrayBuffer();
}
const steganographyDownloadImage = (0,esm/* memoizePromise */.J3)(memoize/* default */.Z, fetchImage, (x)=>x);
function steganographyEncodeImage(buf, options) {
    return (0,image_steganography/* steganographyEncodeImage */.Mk)(buf, {
        ...options,
        downloadImage: steganographyDownloadImage
    });
}

// EXTERNAL MODULE: ./packages/mask/background/services/__utils__/convert.ts
var convert = __webpack_require__(66123);
;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/recipients.ts



async function hasRecipientAvailable(whoAmI) {
    const profiles = await (0,web/* queryProfilesDB */.i2)({
        hasLinkedPersona: true,
        network: whoAmI.network
    });
    if (profiles.length === 0) return false;
    if (profiles.length > 1) return true;
    return profiles[0].identifier !== whoAmI;
}
async function getRecipients(whoAmI) {
    const profiles = (await (0,web/* queryProfilesDB */.i2)({
        network: whoAmI.network,
        hasLinkedPersona: true
    })).filter((x)=>x.identifier !== whoAmI);
    return (0,convert/* toProfileInformation */.Y)(profiles).mustNotAwaitThisWithInATransaction;
}
async function getIncompleteRecipientsOfPost(id) {
    const nameInDB = (await (0,post_web/* queryPostDB */.q3)(id))?.recipients;
    if (nameInDB === 'everyone') return [];
    if (!nameInDB?.size) return [];
    const profiles = (await (0,web/* queryProfilesDB */.i2)({
        identifiers: [
            ...nameInDB.keys()
        ],
        hasLinkedPersona: true
    })).filter((x)=>x.linkedPersona);
    return (0,convert/* toProfileInformation */.Y)(profiles).mustNotAwaitThisWithInATransaction;
}

;// CONCATENATED MODULE: ./packages/mask/background/services/crypto/index.ts
// Encrypt & decrypt (decryptWithDecoding is a generator, not included.)


// Comments

// Steganography




/***/ }),

/***/ 55284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fetchBlob: () => (/* reexport */ fetchBlob/* fetchBlob */.g),
  fetchGlobal: () => (/* reexport */ fetchGlobal/* fetchGlobal */.d),
  fetchJSON: () => (/* reexport */ fetchJSON/* fetchJSON */.ZV),
  fetchSandboxedPluginManifest: () => (/* reexport */ fetchSandboxedPluginManifest),
  fetchText: () => (/* reexport */ fetchText/* fetchText */.s),
  getActiveTabId: () => (/* reexport */ getActiveTabId),
  getTelemetryID: () => (/* reexport */ telemetry_id/* getTelemetryID */.L),
  hasHostPermission: () => (/* reexport */ request_permission/* hasHostPermission */.yy),
  openDashboard: () => (/* reexport */ popup_opener/* openDashboard */.f8),
  openPopupWindow: () => (/* reexport */ popup_opener/* openPopupWindow */.lU),
  queryCurrentActiveTab: () => (/* reexport */ popup_opener/* queryCurrentActiveTab */.OL),
  queryCurrentPopupWindowId: () => (/* reexport */ popup_opener/* queryCurrentPopupWindowId */.E),
  queryExtensionPermission: () => (/* reexport */ request_permission/* queryExtensionPermission */.W0),
  queryRemoteI18NBundle: () => (/* reexport */ queryRemoteI18NBundle),
  removePopupWindow: () => (/* reexport */ popup_opener/* removePopupWindow */.Y8),
  requestExtensionPermission: () => (/* reexport */ request_permission/* requestExtensionPermission */.rc),
  requestHostPermission: () => (/* reexport */ request_permission/* requestHostPermission */.Xm),
  resolveTCOLink: () => (/* reexport */ resolveTCOLink),
  setTelemetryID: () => (/* reexport */ telemetry_id/* setTelemetryID */.Q)
});

// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchBlob.ts
var fetchBlob = __webpack_require__(25747);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchText.ts
var fetchText = __webpack_require__(30426);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchGlobal.ts
var fetchGlobal = __webpack_require__(49850);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(43434);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
;// CONCATENATED MODULE: ./packages/mask/background/services/helper/short-link-resolver.ts



const cache = new Map();
async function resolver(u) {
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const text = await (0,fetchText/* fetchText */.s)(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const url = text.match(/URL=(.+).><\/noscript/)?.[1];
    if (url) cache.set(u, url);
    return url ?? null;
}
/** Resolve a https://t.co/ link to it's real address. */ const resolveTCOLink = (0,esm/* memoizePromise */.J3)(memoize/* default */.Z, resolver, (x)=>x);

// EXTERNAL MODULE: ./packages/mask/background/services/helper/popup-opener.ts
var popup_opener = __webpack_require__(76490);
// EXTERNAL MODULE: ./packages/mask/background/services/helper/request-permission.ts + 1 modules
var request_permission = __webpack_require__(34143);
;// CONCATENATED MODULE: ./packages/mask/background/services/helper/i18n-cache-query-list.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
/* harmony default export */ const i18n_cache_query_list = ({
    'mask/shared-ui/locales/%locale%.json': 'mask',
    'mask/content-script/site-adaptors/twitter.com/locales/%locale%.json': 'DO_NOT_USE',
    'shared/src/locales/%locale%.json': 'shared',
    'shared-base-ui/src/locales/%locale%.json': 'shareBase',
    'mask/dashboard/locales/%locale%.json': 'dashboard',
    'plugins/Debugger/src/locales/%locale%.json': 'io.mask.debugger',
    'plugins/FileService/src/locales/%locale%.json': 'com.maskbook.fileservice',
    'plugins/ScamSniffer/src/locales/%locale%.json': 'io.scamsniffer.mask-plugin',
    'plugins/CyberConnect/src/locales/%locale%.json': 'me.cyberconnect.app',
    'plugins/RSS3/src/locales/%locale%.json': 'bio.rss3',
    'plugins/NextID/src/locales/%locale%.json': 'com.mask.next_id',
    'plugins/template/src/locales/%locale%.json': '__template__',
    'plugins/GoPlusSecurity/src/locales/%locale%.json': 'io.gopluslabs.security',
    'plugins/CrossChainBridge/src/locales/%locale%.json': 'io.mask.cross-chain-bridge',
    'plugins/RedPacket/src/locales/%locale%.json': 'com.maskbook.red_packet',
    'plugins/Tips/src/locales/%locale%.json': 'com.maskbook.tip',
    'plugins/Avatar/src/locales/%locale%.json': 'com.maskbook.avatar',
    'plugins/Trader/src/locales/%locale%.json': 'com.maskbook.trader',
    'plugins/Gitcoin/src/locales/%locale%.json': 'co.gitcoin',
    'plugins/MaskBox/src/locales/%locale%.json': 'com.maskbook.box',
    'plugins/Pets/src/locales/%locale%.json': 'com.maskbook.pets',
    'plugins/Web3Profile/src/locales/%locale%.json': 'io.mask.web3-profile',
    'plugins/Handle/src/locales/%locale%.json': 'com.maskbook.handle',
    'plugins/Approval/src/locales/%locale%.json': 'com.maskbook.approval',
    'plugins/ScamWarning/src/locales/%locale%.json': 'com.mask.scam-warning',
    'plugins/SmartPay/src/locales/%locale%.json': 'com.mask.smart-pay',
    'plugins/VCent/src/locales/%locale%.json': 'com.maskbook.tweet',
    'plugins/Transak/src/locales/%locale%.json': 'com.maskbook.transak',
    'plugins/Collectible/src/locales/%locale%.json': 'com.maskbook.collectibles',
    'plugins/Claim/src/locales/%locale%.json': 'com.mask.claim',
    'plugins/ArtBlocks/src/locales/%locale%.json': 'io.artblocks',
    'plugins/Savings/src/locales/%locale%.json': 'com.savings',
    'plugins/Snapshot/src/locales/%locale%.json': 'org.snapshot',
    'plugins/ProfileCard/src/locales/%locale%.json': 'io.mask.web3-profile-card',
    'plugins/SwitchLogo/src/locales/%locale%.json': 'io.mask.switch-logo',
    'plugins/Calendar/src/locales/%locale%.json': 'io.mask.calendar'
});

;// CONCATENATED MODULE: ./packages/mask/background/services/helper/i18n-cache-query.ts

async function queryRemoteI18NBundle(lang) {
    // skip fetching in development. if you need to debug this, please comment this code.
    if (false) {}
    const updateLang = getCurrentLanguage(lang);
    if (!updateLang) return [];
    const responses = updateLang === 'en-US' ? fetchEnglishBundle() : fetchTranslatedBundle(lang);
    const results = await Promise.allSettled(responses);
    return results.filter((x)=>x.status === 'fulfilled').map((x)=>x.value).filter(Boolean);
}
const I18N_LOCALES_HOST = 'https://maskbook.pages.dev/';
function fetchTranslatedBundle(lang) {
    return Object.entries(i18n_cache_query_list).map(async ([url, namespace])=>{
        try {
            const path = url.replace('%locale%', lang);
            const response = await fetch(I18N_LOCALES_HOST + path, fetchOption);
            const json = await response.json();
            if (!isValidTranslation(json)) return null;
            return [
                namespace,
                lang,
                json
            ];
        } catch  {
            return null;
        }
    });
}
function fetchEnglishBundle() {
    return Object.entries(i18n_cache_query_list).map(async ([url, namespace])=>{
        try {
            const path = url.replace('%locale%', 'en-US');
            const response = await fetch(I18N_LOCALES_HOST + path, fetchOption);
            const json = await response.json();
            if (!isValidTranslation(json)) return null;
            return [
                namespace,
                'en-US',
                json
            ];
        } catch  {
            return null;
        }
    });
}
function isValidTranslation(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    for(const key in obj){
        if (typeof obj[key] !== 'string') return false;
    }
    return true;
}
const fetchOption = {
    credentials: 'omit',
    referrerPolicy: 'no-referrer'
};
function getCurrentLanguage(lang) {
    if ([
        'zh-CN',
        'zh-TW'
    ].includes(lang)) return lang;
    if (lang.startsWith('en')) return 'en-US';
    if (lang.startsWith('zh')) return 'zh-TW';
    if (lang.startsWith('ja')) return 'ja-JP';
    if (lang.startsWith('ko')) return 'ko-KR';
    return null;
}

// EXTERNAL MODULE: ./packages/mask/background/services/helper/telemetry-id.ts
var telemetry_id = __webpack_require__(50094);
;// CONCATENATED MODULE: ./packages/mask/background/services/helper/sandboxed.ts

async function fetchSandboxedPluginManifest(addr) {
    const text = await (0,fetchText/* fetchText */.s)(addr + 'mask-manifest.json');
    // TODO: verify manifest
    return JSON.parse(text.split('\n').filter((x)=>!x.match(/^ +\/\//)).join('\n'));
}

;// CONCATENATED MODULE: ./packages/mask/background/services/helper/tabs.ts
async function getActiveTabId() {
    const tabs = await browser.tabs.query({
        currentWindow: true,
        active: true,
        windowType: 'normal'
    });
    return tabs[0]?.id;
}

;// CONCATENATED MODULE: ./packages/mask/background/services/helper/index.ts










/***/ }),

/***/ 76490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ queryCurrentPopupWindowId),
/* harmony export */   OL: () => (/* binding */ queryCurrentActiveTab),
/* harmony export */   Y8: () => (/* binding */ removePopupWindow),
/* harmony export */   f8: () => (/* binding */ openDashboard),
/* harmony export */   lU: () => (/* binding */ openPopupWindow)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37377);
/* harmony import */ var _wallet_services_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79738);



let currentPopupWindowId = 0;
async function openWindow(url) {
    const windows = await browser.windows.getAll();
    const popup = windows.find((window)=>window?.type === 'popup' && window.id === currentPopupWindowId);
    if (popup) {
        await browser.windows.update(popup.id, {
            focused: true
        });
    } else {
        let left;
        let top;
        try {
            const lastFocused = await browser.windows.getLastFocused();
            // Position window in top right corner of lastFocused window.
            top = lastFocused.top ?? 0;
            left = (lastFocused.left ?? 0) + (lastFocused.width ?? 0) - 400;
        } catch  {
            // The following properties are more than likely 0, due to being
            // opened from the background chrome process for the extension that
            // has no physical dimensions
            // Note: DOM is only available in MV2 or MV3 page mode.
            const { screenX, outerWidth, screenY } = globalThis;
            if (typeof screenX === 'number' && typeof screenY === 'number' && typeof outerWidth === 'number') {
                top = Math.max(screenY, 0);
                left = Math.max(screenX + (outerWidth - 400), 0);
            } else {
                top = 100;
                left = 100;
            }
        }
        const { id } = await browser.windows.create({
            url: browser.runtime.getURL(url),
            width: 400,
            height: 628,
            type: 'popup',
            state: 'normal',
            left,
            top
        });
        // update currentPopupWindowId and clean event
        if (id) {
            currentPopupWindowId = id;
            browser.windows.onRemoved.addListener(function listener(windowID) {
                if (windowID !== id) return;
                currentPopupWindowId = 0;
                browser.windows.onRemoved.removeListener(listener);
            });
        }
    }
}
async function openOrUpdatePopupWindow(route, params) {
    if (!currentPopupWindowId) return openWindow((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('popups.html#', route, params));
    await browser.windows.update(currentPopupWindowId, {
        focused: true
    });
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages */ .q.events.popupRouteUpdated.sendToAll((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(route, {
        close_after_unlock: true,
        ...params
    }));
}
const noWalletUnlockNeeded = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes */ .mZ.PersonaSignRequest,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes */ .mZ.Personas
];
async function openPopupWindow(route, params, evenWhenWalletLocked) {
    if (noWalletUnlockNeeded.includes(route) || evenWhenWalletLocked || !await (0,_wallet_services_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isLocked */ .p1)()) {
        return openOrUpdatePopupWindow(route, {
            close_after_unlock: true,
            ...params
        });
    } else {
        return openOrUpdatePopupWindow(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes */ .mZ.Wallet, {
            close_after_unlock: true,
            from: (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(route, params)
        });
    }
}
async function queryCurrentPopupWindowId() {
    return currentPopupWindowId;
}
async function removePopupWindow() {
    if (!currentPopupWindowId) return;
    browser.windows.remove(currentPopupWindowId);
    currentPopupWindowId = 0;
}
async function openDashboard(route, search) {
    await browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(`/dashboard.html#${route}${search ? `?${search}` : ''}`)
    });
}
async function queryCurrentActiveTab() {
    const [activeTab] = await browser.tabs.query({
        active: true,
        currentWindow: true
    });
    return activeTab;
}


/***/ }),

/***/ 34143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yy: () => (/* binding */ hasHostPermission),
  W0: () => (/* binding */ queryExtensionPermission),
  rc: () => (/* binding */ requestExtensionPermission),
  Xm: () => (/* binding */ requestHostPermission),
  Jr: () => (/* binding */ requestHostPermissionForActiveTab),
  BN: () => (/* binding */ requestSiteAdaptorsPermission)
});

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
;// CONCATENATED MODULE: ./packages/mask/shared/definitions/routes.ts

function getPermissionRequestURL(permission) {
    const { origins = [], permissions = [] } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each of permissions)params.append('permissions', each);
    return `${browser.runtime.getURL(`/popups.html#${Routes/* PopupRoutes */.mZ.RequestPermission}`)}?${params.toString()}`;
}

;// CONCATENATED MODULE: ./packages/mask/background/services/helper/request-permission.ts


async function requestExtensionPermission(permission) {
    if (await browser.permissions.contains(permission)) return true;
    try {
        return await browser.permissions.request(permission).then(sendNotification);
    } catch  {}
    // which means we're on Firefox or Manifest V3.
    // Chrome Manifest v2 allows permission request from the background.
    const popup = await browser.windows.create({
        height: 600,
        width: 400,
        type: 'popup',
        url: getPermissionRequestURL(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID !== popup.id) return;
            browser.permissions.contains(permission).then(sendNotification).then(resolve);
            browser.windows.onRemoved.removeListener(listener);
        });
    });
}
function sendNotification(result) {
    if (result) Messages/* MaskMessages */.q.events.hostPermissionChanged.sendToAll();
    return result;
}
/** @internal */ async function requestHostPermissionForActiveTab() {
    const [{ id, url }] = await browser.tabs.query({
        active: true
    });
    if (!id || !url) return false;
    return requestHostPermission([
        new URL(url).origin + '/*'
    ]);
}
async function requestHostPermission(origins) {
    const currentOrigins = (await browser.permissions.getAll()).origins || [];
    const extra = origins.filter((i)=>!currentOrigins?.includes(i));
    if (!extra.length) return true;
    return requestExtensionPermission({
        origins: extra
    });
}
function hasHostPermission(origins) {
    return browser.permissions.contains({
        origins: [
            ...origins
        ]
    });
}
function queryExtensionPermission(permission) {
    return browser.permissions.contains(permission);
}
/** @internal */ function requestSiteAdaptorsPermission(defines) {
    return requestExtensionPermission({
        origins: defines.map((x)=>x.declarativePermissions.origins).flat()
    });
}


/***/ }),

/***/ 50094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getTelemetryID),
/* harmony export */   Q: () => (/* binding */ setTelemetryID)
/* harmony export */ });
/* deferred harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(65734);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};
/* harmony import */ var _shared_base_src_Telemetry_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60530);
// DO NOT CHANGE! import from folder instead of package directly
// because we need as less as possible files to be imported.
// All imports must be deferred. This file loads in the very early stage.


 undefined;
async function getTelemetryID() {
    const { telemetry_id } = await browser.storage.local.get('telemetry_id');
    return telemetry_id || setTelemetryID();
}
async function setTelemetryID(sendNotification = true) {
    const id = Array.from(crypto.getRandomValues(new Uint8Array(40)), (i)=>(i % 16).toString(16)).join('').slice(0, 40);
    try {
        await browser.storage.local.set({
            telemetry_id: id
        });
    } catch  {}
    if (sendNotification) _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__.a/* .MaskMessages */ .q.events.telemetryIDReset.sendToAll(id);
    _shared_base_src_Telemetry_index_js__WEBPACK_IMPORTED_MODULE_1__/* .TelemetryID */ .w.value = id;
    return id;
}


/***/ }),

/***/ 47214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  attachNextIDPersonaToProfile: () => (/* reexport */ attachNextIDPersonaToProfile),
  attachProfile: () => (/* reexport */ attachProfile),
  createNewRelation: () => (/* reexport */ createNewRelation),
  createPersonaByMnemonicV2: () => (/* reexport */ createPersonaByMnemonicV2),
  createPersonaByPrivateKey: () => (/* reexport */ createPersonaByPrivateKey),
  deletePersona: () => (/* reexport */ deletePersona),
  deletePersonaRelation: () => (/* reexport */ deletePersonaRelation),
  detachProfile: () => (/* reexport */ detachProfile),
  detachProfileWithNextID: () => (/* reexport */ detachProfileWithNextID),
  getPersonaAvatar: () => (/* reexport */ getPersonaAvatar),
  getPersonaAvatarLastUpdateTime: () => (/* reexport */ getPersonaAvatarLastUpdateTime),
  hasLocalKey: () => (/* reexport */ hasLocalKey),
  loginExistPersonaByPrivateKey: () => (/* reexport */ loginExistPersonaByPrivateKey),
  logoutPersona: () => (/* reexport */ logoutPersona),
  queryAvatarsDataURL: () => (/* reexport */ avatar_cache_avatar/* queryAvatarsDataURL */.Az),
  queryLastPersonaCreated: () => (/* reexport */ queryLastPersonaCreated),
  queryOwnedPersonaInformation: () => (/* reexport */ queryOwnedPersonaInformation),
  queryOwnedProfilesInformation: () => (/* reexport */ queryOwnedProfilesInformation),
  queryPersona: () => (/* reexport */ queryPersona),
  queryPersonaByMnemonic: () => (/* reexport */ queryPersonaByMnemonic),
  queryPersonaByProfile: () => (/* reexport */ queryPersonaByProfile),
  queryPersonaDB: () => (/* reexport */ web/* queryPersonaDB */.Hm),
  queryPersonaEOAByMnemonic: () => (/* reexport */ queryPersonaEOAByMnemonic),
  queryPersonaEOAByPrivateKey: () => (/* reexport */ queryPersonaEOAByPrivateKey),
  queryPersonaKeyByMnemonicV2: () => (/* reexport */ queryPersonaKeyByMnemonicV2),
  queryPersonasFromNextID: () => (/* reexport */ queryPersonasFromNextID),
  queryProfileInformation: () => (/* reexport */ queryProfileInformation),
  queryProfilesInformation: () => (/* reexport */ queryProfilesInformation),
  queryRelationPaged: () => (/* reexport */ queryRelationPaged),
  querySocialIdentity: () => (/* reexport */ querySocialIdentity),
  renamePersona: () => (/* reexport */ renamePersona),
  resolveUnknownLegacyIdentity: () => (/* reexport */ resolveUnknownLegacyIdentity),
  setupPersona: () => (/* reexport */ setupPersona),
  signWithPersona: () => (/* reexport */ sign/* signWithPersona */.M),
  updatePersonaAvatar: () => (/* reexport */ updatePersonaAvatar),
  updateProfileInfo: () => (/* reexport */ updateProfileInfo),
  updateRelation: () => (/* reexport */ updateRelation),
  validateMnemonic: () => (/* reexport */ validateMnemonic)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/bip39@3.1.0/node_modules/bip39/src/index.js
var src = __webpack_require__(5134);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/base/src/WebCrypto/JsonWebKey.ts
var JsonWebKey = __webpack_require__(94724);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/helper.ts
var helper = __webpack_require__(5706);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs
var decode = __webpack_require__(49990);
// EXTERNAL MODULE: ./node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(26004);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./packages/mask/background/database/persona/web.ts + 2 modules
var web = __webpack_require__(70345);
// EXTERNAL MODULE: ./packages/base/src/WebCrypto/k256.ts
var k256 = __webpack_require__(17688);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./packages/mask/utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(47264);
// EXTERNAL MODULE: ./node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = {
	/* dynamic */ get a() {
		var exports = __webpack_require__(29017);
		if (exports.__esModule) Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};
;// CONCATENATED MODULE: ./packages/mask/background/services/identity/persona/utils.ts





/**
 * Local key (AES key) is used to encrypt message to myself.
 * This key should never be published.
 */ async function deriveLocalKeyFromECDHKey(pub, mnemonicWord) {
    // ? Derive method: publicKey as "password" and password for the mnemonicWord as hash
    const pbkdf2 = await crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(pub.x + pub.y), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: (0,esm/* encodeText */.YT)(mnemonicWord),
        iterations: 100000,
        hash: 'SHA-256'
    }, pbkdf2, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(aes);
}
// Private key at m/44'/coinType'/account'/change/addressIndex
// coinType = ether
const path = "m/44'/60'/0'/0/0";
async function recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password) {
    const verify = src/* validateMnemonic */._I(mnemonicWord);
    if (!verify) {
        console.warn('Verify error');
    }
    const seed = await src/* mnemonicToSeed */.OI(mnemonicWord, password);
    const masterKey = dist.a.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await split_ec_k256_key_pair_into_pub_priv(await HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
async function validateMnemonic(mnemonic, wordList) {
    return src/* validateMnemonic */._I(mnemonic, wordList);
}
async function HDKeyToJwk(hdk) {
    const jwk = await (0,k256/* decompressK256Key */.J$)((0,esm/* encodeArrayBuffer */.ll)(hdk.publicKey));
    jwk.d = hdk.privateKey ? (0,pvtutils/* toBase64URL */.wi)(hdk.privateKey) : undefined;
    return jwk;
}
async function split_ec_k256_key_pair_into_pub_priv(key) {
    if (!(0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(key)) throw new TypeError('Not a EC private key');
    const { d, ...pub } = key;
    // @ts-expect-error Do a force transform
    return {
        privateKey: {
            ...key
        },
        publicKey: pub
    };
}

;// CONCATENATED MODULE: ./packages/mask/background/services/identity/persona/create.ts








async function createPersonaByPrivateKey(privateKeyString, nickname) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    if (!(0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(privateKey)) throw new TypeError('Invalid private key');
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
        privateKey,
        publicKey: (0,omit/* default */.Z)(privateKey, 'd'),
        nickname
    });
}
async function createPersonaByMnemonicV2(mnemonicWord, nickname, password) {
    const personas = await (0,web/* queryPersonasDB */._P)({
        nameContains: nickname
    });
    if (personas.length > 0) throw new Error('Nickname already exists');
    const verify = src/* validateMnemonic */._I(mnemonicWord);
    if (!verify) throw new Error('Verify error');
    const { key, mnemonicRecord: mnemonic } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password);
    const { privateKey, publicKey } = key;
    const localKey = await deriveLocalKeyFromECDHKey(publicKey, mnemonic.words);
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}
async function queryPersonaKeyByMnemonicV2(mnemonicWords) {
    const { key } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWords, '');
    const identifier = (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(key.publicKey)).unwrap();
    const encodePrivateKey = (0,encode/* encode */.c)(key.privateKey);
    const privateKey = (0,esm/* encodeArrayBuffer */.ll)(encodePrivateKey);
    return {
        publicKey: identifier.toText(),
        privateKey
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/orderBy.js
var orderBy = __webpack_require__(90926);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/mask/background/services/__utils__/convert.ts
var convert = __webpack_require__(66123);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethereumjs+util@8.0.5/node_modules/@ethereumjs/util/dist/index.js
var util_dist = __webpack_require__(6509);
;// CONCATENATED MODULE: ./packages/mask/background/services/identity/persona/query.ts
/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];










async function queryOwnedPersonaInformation(initializedOnly) {
    let result;
    await (0,web/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        let personas = await (0,web/* queryPersonasDB */._P)({
            hasPrivateKey: true
        }, t);
        if (initializedOnly) personas = personas.filter((x)=>!x.uninitialized);
        result = (0,convert/* toPersonaInformation */.y)(personas, t).mustNotAwaitThisWithInATransaction;
    });
    return result;
}
async function queryLastPersonaCreated() {
    const all = await (0,web/* queryPersonasDB */._P)({
        hasPrivateKey: true
    });
    return (0,head/* default */.Z)((0,orderBy/* default */.Z)(all, (x)=>x.createdAt, 'desc'))?.identifier;
}
async function queryPersonaByProfile(id) {
    let result;
    await (0,web/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const profile = await (0,web/* queryProfileDB */.IW)(id, t);
        if (!profile?.linkedPersona) return;
        const persona = await (0,web/* queryPersonaDB */.Hm)(profile.linkedPersona, t);
        if (!persona) return;
        result = (0,convert/* toPersonaInformation */.y)([
            persona
        ], t).mustNotAwaitThisWithInATransaction.then((x)=>(0,head/* default */.Z)(x));
    });
    return result;
}
async function queryPersona(id) {
    let result;
    await (0,web/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const persona = await (0,web/* queryPersonaDB */.Hm)(id, t);
        if (!persona) return;
        result = (0,convert/* toPersonaInformation */.y)([
            persona
        ], t).mustNotAwaitThisWithInATransaction.then((x)=>(0,head/* default */.Z)(x));
    });
    return result;
}
async function queryPersonaEOAByMnemonic(mnemonicWord, password) {
    const verify = src/* validateMnemonic */._I(mnemonicWord);
    if (!verify) throw new Error('Verify error');
    const { key } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password);
    const { privateKey, publicKey } = key;
    if (!privateKey.d) return;
    return {
        address: (0,util_dist.bufferToHex)((0,util_dist.publicToAddress)((0,util_dist.privateToPublic)(Buffer.from((0,pvtutils/* fromBase64URL */.mz)(privateKey.d))))),
        identifier: (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(publicKey)).unwrap(),
        publicKey
    };
}
async function queryPersonaEOAByPrivateKey(privateKeyString) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    if (!(0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(privateKey) || !privateKey.d) throw new TypeError('Invalid private key');
    const publicKey = (0,omit/* default */.Z)(privateKey, 'd');
    return {
        address: (0,util_dist.bufferToHex)((0,util_dist.publicToAddress)((0,util_dist.privateToPublic)(Buffer.from((0,pvtutils/* fromBase64URL */.mz)(privateKey.d))))),
        identifier: (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(publicKey)).unwrap(),
        publicKey
    };
}
async function queryPersonasFromNextID(platform, identityResolved) {
    if (!identityResolved.identifier) return;
    return entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(platform, identityResolved.identifier.userId);
}
async function querySocialIdentity(platform, identity) {
    if (!identity?.identifier) return;
    const bindings = await queryPersonasFromNextID(platform, identity);
    const persona = await queryPersonaByProfile(identity.identifier);
    const personaBindings = bindings?.filter((x)=>x.persona === persona?.identifier.publicKeyAsHex.toLowerCase()) ?? [];
    return {
        ...identity,
        publicKey: persona?.identifier.publicKeyAsHex,
        hasBinding: personaBindings.length > 0,
        binding: (0,head/* default */.Z)(personaBindings)
    };
}


// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
;// CONCATENATED MODULE: ./packages/mask/background/services/identity/persona/update.ts





async function deletePersona(id, confirm) {
    return (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,web/* queryPersonaDB */.Hm)(id, t);
        if (!d) return;
        for (const e of d.linkedProfiles){
            await (0,web/* detachProfileDB */.AY)(e[0], t);
        }
        if (confirm === 'delete even with private') await (0,web/* deletePersonaDB */.LY)(id, 'delete even with private', t);
        else if (confirm === 'safe delete') await (0,web/* safeDeletePersonaDB */.Ul)(id, t);
    });
}
async function loginPersona(identifier) {
    return (0,web/* consistentPersonaDBWriteAccess */.As)((t)=>(0,web/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: false
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t));
}
async function logoutPersona(identifier) {
    await (0,web/* consistentPersonaDBWriteAccess */.As)((t)=>(0,web/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: true
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t));
    Messages/* MaskMessages */.q.events.personasChanged.sendToAll();
}
async function setupPersona(id) {
    return (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,web/* queryPersonaDB */.Hm)(id, t);
        if (!d) throw new Error('cannot find persona');
        if (!d.privateKey) throw new Error('Cannot setup a persona without a private key');
        if (d.linkedProfiles.size === 0) throw new Error('persona should link at least one profile');
        if (d.uninitialized) {
            await (0,web/* updatePersonaDB */.E8)({
                identifier: id,
                uninitialized: false
            }, {
                linkedProfiles: 'merge',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    });
}
async function loginExistPersonaByPrivateKey(privateKeyString) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    if (!(0,JsonWebKey/* isEC_Private_JsonWebKey */.PQ)(privateKey)) throw new TypeError('Invalid private key');
    const identifier = (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(privateKey)).unwrap();
    const persona = await (0,web/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await loginPersona(persona.identifier);
        return identifier;
    }
    return null;
}
async function renamePersona(identifier, nickname) {
    const personas = await (0,web/* queryPersonasDB */._P)({
        nameContains: nickname
    });
    if (personas.length > 0) throw new Error('Nickname already exists');
    return (0,web/* consistentPersonaDBWriteAccess */.As)((t)=>(0,web/* updatePersonaDB */.E8)({
            identifier,
            nickname
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t));
}
async function queryPersonaByMnemonic(mnemonic, password) {
    const verified = await validateMnemonic(mnemonic);
    if (!verified) throw new Error('Verify error');
    const { key } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonic, password);
    const identifier = (await ec_key/* ECKeyIdentifier */.o.fromJsonWebKey(key.privateKey)).unwrap();
    const persona = await (0,web/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await loginPersona(persona.identifier);
        return persona.identifier;
    }
    return null;
}

// EXTERNAL MODULE: ./packages/mask/background/services/identity/persona/sign.ts
var sign = __webpack_require__(17801);
// EXTERNAL MODULE: ./packages/mask/background/database/avatar-cache/avatar.ts
var avatar_cache_avatar = __webpack_require__(61271);
;// CONCATENATED MODULE: ./packages/mask/background/services/identity/persona/avatar.ts


async function getPersonaAvatar(identifiers) {
    if (!identifiers) return undefined;
    // Array.isArray cannot guard for readonly array.
    // eslint-disable-next-line @masknet/type-no-instanceof-wrapper
    const map = await (0,avatar_cache_avatar/* queryAvatarsDataURL */.Az)(identifiers instanceof Array ? identifiers : [
        identifiers
    ]);
    // eslint-disable-next-line @masknet/type-no-instanceof-wrapper
    if (identifiers instanceof Array) return map;
    return map.get(identifiers);
}
async function getPersonaAvatarLastUpdateTime(identifier) {
    if (!identifier) return undefined;
    return (0,avatar_cache_avatar/* queryAvatarLastUpdateTime */.IK)(identifier);
}
async function updatePersonaAvatar(identifier, avatar) {
    if (!identifier) return;
    await (0,avatar_cache_avatar/* storeAvatar */.Zk)(identifier, await avatar.arrayBuffer());
    Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll(undefined);
}

;// CONCATENATED MODULE: ./packages/mask/background/services/identity/profile/query.ts



async function queryProfilesInformation(identifiers) {
    const profiles = await (0,web/* queryProfilesDB */.i2)({
        identifiers
    });
    return (0,convert/* toProfileInformation */.Y)(profiles).mustNotAwaitThisWithInATransaction;
}
async function queryProfileInformation(identifier) {
    const profile = await (0,web/* queryProfileDB */.IW)(identifier);
    return (0,convert/* toProfileInformation */.Y)(profile ? [
        profile
    ] : []).mustNotAwaitThisWithInATransaction;
}
/** @deprecated */ async function hasLocalKey(identifier) {
    return (0,helper/* hasLocalKeyOf */.wf)(identifier);
}
async function queryOwnedProfilesInformation(network) {
    let profiles;
    await (0,web/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const personas = (await (0,web/* queryPersonasDB */._P)({
            hasPrivateKey: true
        }, t)).sort((a, b)=>a.updatedAt > b.updatedAt ? 1 : -1);
        const ids = Array.from(new Set(personas.flatMap((x)=>[
                ...x.linkedProfiles.keys()
            ])));
        profiles = await (0,web/* queryProfilesDB */.i2)({
            identifiers: ids,
            network
        }, t);
    });
    return (0,convert/* toProfileInformation */.Y)(profiles.filter((x)=>x.identifier.network === network)).mustNotAwaitThisWithInATransaction;
}

// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Persona.ts
var Persona = __webpack_require__(3545);
;// CONCATENATED MODULE: ./packages/mask/background/services/identity/profile/update.ts





async function updateProfileInfo(identifier, data) {
    if (data.nickname) {
        const rec = {
            identifier,
            nickname: data.nickname,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await (0,web/* consistentPersonaDBWriteAccess */.As)((t)=>(0,web/* createOrUpdateProfileDB */.o7)(rec, t));
    }
    if (data.avatarURL) await (0,avatar_cache_avatar/* storeAvatar */.Zk)(identifier, data.avatarURL);
}
async function detachProfileWithNextID(uuid, personaPublicKey, platform, identity, createdAt, options) {
    await entry/* NextIDProof */.q7.bindProof(uuid, personaPublicKey, types/* NextIDAction */.B.Delete, platform, identity, createdAt, {
        signature: options?.signature
    });
    Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll(undefined);
}
const err = 'resolveUnknownLegacyIdentity should not be called on localhost';
/**
 * In older version of Mask, identity is marked as `ProfileIdentifier(network, '$unknown')` or `ProfileIdentifier(network, '$self')`. After upgrading to the newer version of Mask, Mask will try to find the current user in that network and call this function to replace old identifier into a "resolved" identity.
 * @param identifier The resolved identity
 */ async function resolveUnknownLegacyIdentity(identifier) {
    const unknown = profile/* ProfileIdentifier */.W.of(identifier.network, '$unknown').expect(err);
    const self = profile/* ProfileIdentifier */.W.of(identifier.network, '$self').expect(err);
    const records = await (0,web/* queryProfilesDB */.i2)({
        identifiers: [
            unknown,
            self
        ]
    });
    if (!records.length) return;
    const finalRecord = Object.assign({}, ...records, {
        identifier
    });
    try {
        await (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
            await (0,web/* createProfileDB */.ah)(finalRecord, t);
            await (0,web/* deleteProfileDB */.B4)(unknown, t).catch(()=>{});
            await (0,web/* deleteProfileDB */.B4)(self, t).catch(()=>{});
        });
    } catch  {}
}
// the profile already exists
/**
 * Remove an identity.
 */ async function attachProfile(source, target, data) {
    if (target instanceof profile/* ProfileIdentifier */.W) {
        const profile = await (0,web/* queryProfileDB */.IW)(target);
        if (!profile?.linkedPersona) throw new Error('target not found');
        target = profile.linkedPersona;
    }
    return (0,web/* attachProfileDB */.tc)(source, target, data);
}
function detachProfile(identifier) {
    return (0,web/* detachProfileDB */.AY)(identifier);
}
/**
 * Set NextID profile to profileDB
 * */ async function attachNextIDPersonaToProfile(item, whoAmI) {
    if (!item.linkedPersona) throw new Error('LinkedPersona Not Found');
    const now = new Date();
    const personaRecord = {
        createdAt: now,
        updatedAt: now,
        identifier: item.linkedPersona,
        linkedProfiles: new Map(),
        publicKey: await (0,k256/* decompressK256Key */.J$)(item.linkedPersona.rawPublicKey),
        publicHexKey: item.linkedPersona?.publicKeyAsHex,
        nickname: item.nickname,
        hasLogout: false,
        uninitialized: false
    };
    const profileRecord = {
        identifier: item.identifier,
        nickname: item.nickname,
        linkedPersona: item.linkedPersona,
        createdAt: now,
        updatedAt: now
    };
    try {
        await (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
            await (0,web/* createOrUpdatePersonaDB */.lX)(personaRecord, {
                explicitUndefinedField: 'ignore',
                linkedProfiles: 'merge'
            }, t);
            await (0,web/* createOrUpdateProfileDB */.o7)(profileRecord, t);
            await (0,web/* attachProfileDB */.tc)(profileRecord.identifier, item.linkedPersona, {
                connectionConfirmState: 'confirmed'
            }, t);
            await (0,web/* createOrUpdateRelationDB */.hK)({
                profile: profileRecord.identifier,
                linked: whoAmI,
                favor: Persona/* RelationFavor */.K.UNCOLLECTED
            }, t);
        });
    } catch  {}
} // already exist

;// CONCATENATED MODULE: ./packages/public-api/src/types/index.ts
var // These type MUST be sync with packages/shared-base/src/crypto/JWKType
/** Ghost property, don't use it! */ RelationFavor;
(function(RelationFavor) {
    RelationFavor[RelationFavor["COLLECTED"] = -1] = "COLLECTED";
    RelationFavor[RelationFavor["UNCOLLECTED"] = 1] = "UNCOLLECTED";
    RelationFavor[RelationFavor["DEPRECATED"] = 0] = "DEPRECATED";
})(RelationFavor || (RelationFavor = {}));

;// CONCATENATED MODULE: ./packages/mask/background/services/identity/relation/create.ts


async function createNewRelation(profile, linked, favor = RelationFavor.UNCOLLECTED) {
    const t = await (0,web/* createRelationsTransaction */.cl)();
    const relationInDB = await t.objectStore('relations').get([
        linked.toText(),
        profile.toText()
    ]);
    if (relationInDB) return;
    await (0,web/* createRelationDB */.N8)({
        profile,
        linked,
        favor
    }, t);
}

;// CONCATENATED MODULE: ./packages/mask/background/services/identity/relation/query.ts

async function queryRelationPaged(currentPersona, options, count) {
    if (!currentPersona) return [];
    return (0,web/* queryRelationsPagedDB */.PF)(currentPersona, options, count);
}

;// CONCATENATED MODULE: ./packages/mask/background/services/identity/relation/update.ts

async function updateRelation(profile, linked, favor) {
    const t = await (0,web/* createRelationsTransaction */.cl)();
    await (0,web/* updateRelationDB */.Jx)({
        profile,
        linked,
        favor
    }, t);
}
async function deletePersonaRelation(persona, linked) {
    const t = await (0,web/* createRelationsTransaction */.cl)();
    await (0,web/* deletePersonaRelationDB */.H0)(persona, linked, t);
}

;// CONCATENATED MODULE: ./packages/mask/background/services/identity/avatar/query.ts


;// CONCATENATED MODULE: ./packages/mask/background/services/identity/index.ts














/***/ }),

/***/ 17801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ signWithPersona)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60307);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26424);
/* harmony import */ var _database_persona_web_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70345);
/* harmony import */ var _helper_popup_opener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76490);
/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];






/**
 * Generate a signature w or w/o confirmation from user
 */ async function signWithPersona(type, message, identifier, source, silent = false) {
    const getIdentifier = async ()=>{
        if (!identifier || !silent) {
            const requestID = (0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
            await (0,_helper_popup_opener_js__WEBPACK_IMPORTED_MODULE_3__/* .openPopupWindow */ .lU)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes */ .mZ.PersonaSignRequest, {
                message: JSON.stringify(message),
                requestID,
                identifier: identifier?.toText(),
                source
            });
            return (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(new Promise((resolve, reject)=>{
                _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages */ .q.events.personaSignRequest.on((approval)=>{
                    if (approval.requestID !== requestID) return;
                    if (!approval.selectedPersona) reject(new Error('The user refused to sign message with persona.'));
                    resolve(approval.selectedPersona);
                });
            }), 60 * 1000, 'Timeout of signing with persona.');
        }
        return identifier;
    };
    const identifier_ = await getIdentifier();
    // find the persona with the signer's identifier
    const persona = (await (0,_database_persona_web_js__WEBPACK_IMPORTED_MODULE_6__/* .queryPersonasWithPrivateKey */ .Eq)()).find((x)=>x.identifier === identifier_);
    if (!persona?.privateKey.d) throw new Error('Persona not found');
    return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Signer */ .Ep.sign(type, Buffer.from((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .fromBase64URL */ .mz)(persona.privateKey.d)), message);
}


/***/ }),

/***/ 76427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __kv_storage_read__: () => (/* reexport */ __kv_storage_read__),
  __kv_storage_write__: () => (/* reexport */ __kv_storage_write__),
  getAllInjectSwitchSettings: () => (/* reexport */ old_settings_accessor/* getAllInjectSwitchSettings */.sm),
  getCurrentPersonaIdentifier: () => (/* reexport */ old_settings_accessor/* getCurrentPersonaIdentifier */.Rr),
  getLanguage: () => (/* reexport */ old_settings_accessor/* getLanguage */.G3),
  getLegacySettingsInitialValue: () => (/* reexport */ old_settings_accessor/* getLegacySettingsInitialValue */.DF),
  getPluginMinimalModeEnabled: () => (/* reexport */ old_settings_accessor/* getPluginMinimalModeEnabled */.CE),
  getTheme: () => (/* reexport */ old_settings_accessor/* getTheme */.gh),
  isTelemetryEnabled: () => (/* reexport */ old_settings_accessor/* isTelemetryEnabled */.Fd),
  setCurrentPersonaIdentifier: () => (/* reexport */ old_settings_accessor/* setCurrentPersonaIdentifier */.OX),
  setInjectSwitchSetting: () => (/* reexport */ old_settings_accessor/* setInjectSwitchSetting */.Eo),
  setLanguage: () => (/* reexport */ old_settings_accessor/* setLanguage */.m0),
  setPluginMinimalModeEnabled: () => (/* reexport */ old_settings_accessor/* setPluginMinimalModeEnabled */.I1),
  setTelemetryEnabled: () => (/* reexport */ old_settings_accessor/* setTelemetryEnabled */.lo),
  setTheme: () => (/* reexport */ old_settings_accessor/* setTheme */.Dc)
});

// EXTERNAL MODULE: ./packages/mask/background/services/settings/old-settings-accessor.ts
var old_settings_accessor = __webpack_require__(51477);
// EXTERNAL MODULE: ./packages/mask/background/initialization/kv-storage.ts + 2 modules
var kv_storage = __webpack_require__(5284);
;// CONCATENATED MODULE: ./packages/mask/background/services/settings/kv-storage.ts

async function __kv_storage_write__(kind, key, value) {
    if (kind === 'memory') {
        return kv_storage/* inMemory_KVStorageBackend */.c.setValue(key, value);
    } else {
        return kv_storage/* indexedDB_KVStorageBackend */.E.setValue(key, value);
    }
}
async function __kv_storage_read__(kind, key) {
    if (kind === 'memory') {
        return kv_storage/* inMemory_KVStorageBackend */.c.getValue(key);
    } else {
        return kv_storage/* indexedDB_KVStorageBackend */.E.getValue(key);
    }
}

;// CONCATENATED MODULE: ./packages/mask/background/services/settings/index.ts




/***/ }),

/***/ 51477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CE: () => (/* binding */ getPluginMinimalModeEnabled),
/* harmony export */   DF: () => (/* reexport safe */ _utils_deprecated_storage_js__WEBPACK_IMPORTED_MODULE_7__.$),
/* harmony export */   Dc: () => (/* binding */ setTheme),
/* harmony export */   Eo: () => (/* binding */ setInjectSwitchSetting),
/* harmony export */   Fd: () => (/* binding */ isTelemetryEnabled),
/* harmony export */   G3: () => (/* binding */ getLanguage),
/* harmony export */   I1: () => (/* binding */ setPluginMinimalModeEnabled),
/* harmony export */   OX: () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   Rr: () => (/* binding */ getCurrentPersonaIdentifier),
/* harmony export */   gh: () => (/* binding */ getTheme),
/* harmony export */   lo: () => (/* binding */ setTelemetryEnabled),
/* harmony export */   m0: () => (/* binding */ setLanguage),
/* harmony export */   sm: () => (/* binding */ getAllInjectSwitchSettings)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68465);
/* harmony import */ var _masknet_web3_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28668);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75093);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77953);
/* harmony import */ var _database_persona_web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70345);
/* harmony import */ var _utils_deprecated_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60988);




function create(settings) {
    async function get() {
        await settings.readyPromise;
        return settings.value;
    }
    async function set(val) {
        await settings.readyPromise;
        settings.value = val;
    }
    return [
        get,
        set
    ];
}
const [isTelemetryEnabled, setTelemetryEnabled] = create(_masknet_web3_telemetry__WEBPACK_IMPORTED_MODULE_0__/* .telemetrySettings */ .T);
const [getTheme, setTheme] = create(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .appearanceSettings */ .OF);
const [getLanguage, setLanguage] = create(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .languageSettings */ .pQ);
async function getCurrentPersonaIdentifier() {
    await _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier */ .cn.readyPromise;
    const personas = (await (0,_database_persona_web_js__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonasDB */ ._P)({
        hasPrivateKey: true
    })).sort((a, b)=>a.createdAt > b.createdAt ? 1 : 0).map((x)=>x.identifier);
    const newVal = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier */ .cn.value || personas[0];
    if (!newVal) return;
    if (personas.find((x)=>x === newVal)) return newVal;
    if (personas[0]) _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier */ .cn.value = personas[0];
    return personas[0];
}
async function setCurrentPersonaIdentifier(x) {
    await _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier */ .cn.readyPromise;
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier */ .cn.value = x;
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages */ .q.events.ownPersonaChanged.sendToAll(undefined);
}
async function getPluginMinimalModeEnabled(id) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentPluginMinimalMode */ .fL)(id);
}
async function setPluginMinimalModeEnabled(id, enabled) {
    (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentPluginMinimalMode */ .ic)(id, enabled ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .BooleanPreference */ .e.True : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .BooleanPreference */ .e.False);
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages */ .q.events.pluginMinimalModeChanged.sendToAll([
        id,
        enabled
    ]);
}
async function getAllInjectSwitchSettings() {
    const result = {};
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EnhanceableSite */ .J, (value)=>{
        result[value] = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .InjectSwitchSettings */ .Fw[value].value;
    });
    return result;
}
async function setInjectSwitchSetting(network, value) {
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .InjectSwitchSettings */ .Fw[network].value = value;
}



/***/ }),

/***/ 12530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ startServices)
/* harmony export */ });
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88228);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61530);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1749);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40464);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14414);
/* harmony import */ var _crypto_decryption_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72722);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.
/// <reference path="../env.d.ts" />




(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .assertEnvironment */ .uQ)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
const debugMode = "production" === 'development';
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .WebExtensionMessage */ .$({
    domain: '$'
});
const hmr = new EventTarget();
const DebugService = Object.create(null);
function startServices() {
    setup('Crypto', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72085)));
    setup('Identity', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47214)));
    setup('Backup', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59680)));
    setup('Helper', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 55284)));
    setup('SiteAdaptor', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26018)));
    setup('Settings', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76427)), false);
    setup('Wallet', ()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12122)));
    (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .setDebugObject */ .o)('Service', DebugService);
    const GeneratorService = {
        decrypt: _crypto_decryption_js__WEBPACK_IMPORTED_MODULE_4__/* .decryptWithDecoding */ .z
    };
     undefined;
    const channel = message.events.GeneratorServices.bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .MessageTarget */ .T.Broadcast);
    (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .setDebugObject */ .o)('GeneratorService', GeneratorService);
    (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc)(GeneratorService, {
        key: 'GeneratorService',
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .serializer */ .G,
        channel,
        log: {
            beCalled: false,
            remoteError: false,
            type: 'pretty',
            requestReplay: false
        },
        preferLocalImplementation: true,
        thenable: false
    });
}
if (false) {}
function setup(key, implementation, hasLog = true) {
    const channel = message.events[key].bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__/* .MessageTarget */ .T.Broadcast);
    async function load() {
        const val = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .getOrUpdateLocalImplementationHMR */ .K)(implementation, channel);
        DebugService[key] = val;
        return val;
    }
    if (false) {}
    // setup server
    (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(load(), {
        key,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .serializer */ .G,
        channel,
        log: hasLog ? {
            beCalled: true,
            remoteError: false,
            type: 'pretty',
            requestReplay: debugMode
        } : false,
        thenable: false
    });
}


/***/ }),

/***/ 86285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  connectSite: () => (/* binding */ connectSite),
  disconnectSite: () => (/* binding */ disconnectSite),
  getAllOrigins: () => (/* binding */ getAllOrigins),
  getOriginsWithoutPermission: () => (/* binding */ getOriginsWithoutPermission),
  getSitesWithoutPermission: () => (/* binding */ getSitesWithoutPermission),
  getSupportedOrigins: () => (/* binding */ getSupportedOrigins),
  getSupportedSites: () => (/* binding */ getSupportedSites),
  requestPermissionBySite: () => (/* binding */ requestPermissionBySite),
  setupSite: () => (/* binding */ setupSite)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
var sortBy = __webpack_require__(89762);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/json-stable-stringify@1.0.2/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(74545);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
;// CONCATENATED MODULE: ./packages/shared-base/src/types/SetupGuide.ts
var /** The persona to be connected */ /**
     * The user name given by user
     * @todo Rename to userId
     * */ /** The WIP step */ /** Specified tab id to activate setup guide */ SetupGuideStep;
(function(SetupGuideStep) {
    SetupGuideStep["FindUsername"] = 'find-username';
    SetupGuideStep["CheckConnection"] = 'check-connection';
    SetupGuideStep["VerifyOnNextID"] = 'next-id-verify';
    SetupGuideStep["PinExtension"] = 'pin-extension';
    SetupGuideStep["Close"] = 'close';
})(SetupGuideStep || (SetupGuideStep = {}));

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/facebook.com.ts


const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const FacebookAdaptor = {
    name: 'Facebook',
    networkIdentifier: types/* EnhanceableSite */.J.Facebook,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.facebook.com',
    isSocialNetwork: true,
    sortIndex: 1,
    getProfilePage: ()=>new URL('https://www.facebook.com'),
    getShareLinkURL (message) {
        const url = (0,dist/* default */.ZP)('https://www.facebook.com/sharer/sharer.php', {
            quote: message,
            u: 'mask.io'
        });
        return new URL(url);
    }
};

;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/instagram.com.ts

const instagram_com_origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const InstagramAdaptor = {
    name: 'Instagram',
    networkIdentifier: types/* EnhanceableSite */.J.Instagram,
    declarativePermissions: {
        origins: instagram_com_origins
    },
    homepage: 'https://www.instagram.com/',
    isSocialNetwork: true,
    sortIndex: 3,
    getProfilePage: ()=>new URL('https://www.instagram.com/'),
    getShareLinkURL: null
};

;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/minds.com.ts


const minds_com_origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const MindsAdaptor = {
    name: 'Minds',
    networkIdentifier: types/* EnhanceableSite */.J.Minds,
    declarativePermissions: {
        origins: minds_com_origins
    },
    homepage: 'https://www.minds.com',
    isSocialNetwork: true,
    sortIndex: 4,
    getProfilePage: ()=>new URL('https://www.minds.com'),
    getShareLinkURL (message) {
        const url = (0,dist/* default */.ZP)('https://www.minds.com/newsfeed/subscriptions', {
            intentUrl: message
        });
        return new URL(url);
    }
};

;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/mirror.xyz.ts

const mirror_xyz_origins = [
    'https://*.mirror.xyz/*'
];
const MirrorAdaptor = {
    name: 'Mirror',
    networkIdentifier: types/* EnhanceableSite */.J.Mirror,
    declarativePermissions: {
        origins: mirror_xyz_origins
    },
    homepage: 'https://mirror.xyz',
    isSocialNetwork: false,
    sortIndex: 2,
    getProfilePage: ()=>new URL('https://mirror.xyz/dashboard'),
    getShareLinkURL (message) {
        return new URL('https://mirror.xyz');
    }
};

;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/twitter.com.ts


const twitter_com_origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const TwitterAdaptor = {
    name: 'Twitter',
    networkIdentifier: types/* EnhanceableSite */.J.Twitter,
    declarativePermissions: {
        origins: twitter_com_origins
    },
    homepage: 'https://twitter.com',
    isSocialNetwork: true,
    sortIndex: 0,
    getProfilePage: (userId)=>new URL(`https://twitter.com/${userId.userId}`),
    getShareLinkURL (message) {
        const url = (0,dist/* default */.ZP)('https://twitter.com/intent/tweet', {
            text: message
        });
        return new URL(url);
    }
};

;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/definitions.ts





const defined = new Map();
const definedSiteAdaptors = defined;
function defineSiteAdaptor(UI) {
    defined.set(UI.networkIdentifier, UI);
}
defineSiteAdaptor(FacebookAdaptor);
defineSiteAdaptor(InstagramAdaptor);
defineSiteAdaptor(MindsAdaptor);
defineSiteAdaptor(MirrorAdaptor);
defineSiteAdaptor(TwitterAdaptor);

// EXTERNAL MODULE: ./packages/mask/background/services/helper/request-permission.ts + 1 modules
var request_permission = __webpack_require__(34143);
;// CONCATENATED MODULE: ./packages/mask/background/services/site-adaptors/connect.ts






async function hasPermission(origin) {
    return browser.permissions.contains({
        origins: [
            origin
        ]
    });
}
async function getSupportedSites(options = {}) {
    return (0,sortBy/* default */.Z)([
        ...definedSiteAdaptors.values()
    ].filter((x)=>options.isSocialNetwork === undefined ? true : x.isSocialNetwork === options.isSocialNetwork), (x)=>x.sortIndex).map((x)=>({
            networkIdentifier: x.networkIdentifier
        }));
}
async function getSupportedOrigins(options = {}) {
    return (0,sortBy/* default */.Z)([
        ...definedSiteAdaptors.values()
    ], (x)=>x.sortIndex).filter((x)=>options.isSocialNetwork === undefined ? true : x.isSocialNetwork === options.isSocialNetwork).map((x)=>({
            networkIdentifier: x.networkIdentifier,
            origins: [
                ...x.declarativePermissions.origins
            ]
        }));
}
async function getOriginsWithoutPermission(options = {}) {
    const groups = await getSupportedOrigins(options);
    const promises = groups.map(async ({ origins, networkIdentifier })=>{
        const unGrantedOrigins = (0,compact/* default */.Z)(await Promise.all(origins.map((origin)=>hasPermission(origin).then((yes)=>yes ? null : origin))));
        if (!unGrantedOrigins.length) return null;
        return {
            networkIdentifier,
            origins: (0,compact/* default */.Z)(unGrantedOrigins)
        };
    });
    return (0,compact/* default */.Z)(await Promise.all(promises));
}
async function getAllOrigins() {
    const groups = await getSupportedOrigins();
    const promises = groups.map(async ({ origins, networkIdentifier })=>{
        const originsWithNoPermission = (0,compact/* default */.Z)(await Promise.all(origins.map((origin)=>hasPermission(origin).then((yes)=>yes ? null : origin))));
        return {
            networkIdentifier,
            hasPermission: !originsWithNoPermission.length
        };
    });
    return Promise.all(promises);
}
async function getSitesWithoutPermission() {
    const groups = [
        ...definedSiteAdaptors.values()
    ];
    const promises = groups.map(async (x)=>{
        const origins = x.declarativePermissions.origins;
        const unGrantedOrigins = (0,compact/* default */.Z)(await Promise.all(origins.map((origin)=>hasPermission(origin).then((yes)=>yes ? null : origin))));
        if (!unGrantedOrigins.length) return null;
        return x;
    });
    return (0,compact/* default */.Z)(await Promise.all(promises));
}
async function setupSite(network, newTab) {
    const worker = definedSiteAdaptors.get(network);
    const home = worker?.homepage;
    // request permission from all sites supported.
    if (!await (0,request_permission/* requestSiteAdaptorsPermission */.BN)([
        ...definedSiteAdaptors.values()
    ])) return;
    if (!settings/* userGuideStatus */.Ct[network].value) settings/* userGuideStatus */.Ct[network].value = '1';
    await (0,esm/* delay */.gw)(100);
    if (!home) return;
    if (!newTab) return home;
    browser.tabs.create({
        active: true,
        url: home
    });
    return;
}
async function requestPermissionBySite(network) {
    const worker = definedSiteAdaptors.get(network);
    if (!worker) return;
    return (0,request_permission/* requestSiteAdaptorsPermission */.BN)([
        worker
    ]);
}
async function connectSite(identifier, network, profile, openInNewTab = true) {
    const site = definedSiteAdaptors.get(network);
    if (!site) return;
    const permissionGranted = await (0,request_permission/* requestSiteAdaptorsPermission */.BN)([
        site
    ]);
    if (!permissionGranted) return;
    const url = site.homepage;
    if (!url) return;
    let targetTab;
    if (openInNewTab) {
        targetTab = await browser.tabs.create({
            active: true,
            url: site.homepage
        });
    } else {
        const openedTabs = await browser.tabs.query({
            url: `${url}/*`
        });
        targetTab = openedTabs.find((x)=>x.active) ?? (0,head/* default */.Z)(openedTabs);
        if (!targetTab?.id || !targetTab.windowId) {
            await browser.tabs.create({
                active: true,
                url
            });
        }
    }
    await (0,esm/* delay */.gw)(100);
    if (!targetTab?.windowId) return;
    await browser.tabs.update(targetTab.id, {
        active: true
    });
    await browser.windows.update(targetTab.windowId, {
        focused: true
    });
    settings/* currentSetupGuideStatus */.AI[network].value = json_stable_stringify_default()({
        status: SetupGuideStep.VerifyOnNextID,
        persona: identifier.toText(),
        username: profile?.userId,
        tabId: targetTab?.id
    });
}
async function disconnectSite(network) {
    const site = definedSiteAdaptors.get(network);
    if (!site) return;
    const permissionGranted = await (0,request_permission/* requestSiteAdaptorsPermission */.BN)([
        site
    ]);
    if (!permissionGranted) return;
    settings/* currentSetupGuideStatus */.AI[network].value = '';
}


/***/ }),

/***/ 26018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  attachMaskSDKToCurrentActivePage: () => (/* reexport */ attachMaskSDKToCurrentActivePage),
  connectSite: () => (/* reexport */ connect.connectSite),
  disconnectSite: () => (/* reexport */ connect.disconnectSite),
  getAllOrigins: () => (/* reexport */ connect.getAllOrigins),
  getOriginsWithoutPermission: () => (/* reexport */ connect.getOriginsWithoutPermission),
  getSitesWithoutPermission: () => (/* reexport */ connect.getSitesWithoutPermission),
  getSupportedOrigins: () => (/* reexport */ connect.getSupportedOrigins),
  getSupportedSites: () => (/* reexport */ connect.getSupportedSites),
  requestPermissionBySite: () => (/* reexport */ connect.requestPermissionBySite),
  setupSite: () => (/* reexport */ connect.setupSite),
  shouldSuggestConnectInPopup: () => (/* reexport */ shouldSuggestConnectInPopup)
});

// EXTERNAL MODULE: ./packages/mask/background/services/site-adaptors/connect.ts + 7 modules
var connect = __webpack_require__(86285);
// EXTERNAL MODULE: ./packages/mask/background/utils/injectScript.ts
var injectScript = __webpack_require__(75302);
// EXTERNAL MODULE: ./packages/mask/background/services/helper/request-permission.ts + 1 modules
var request_permission = __webpack_require__(34143);
;// CONCATENATED MODULE: ./packages/mask/background/services/site-adaptors/sdk.ts


async function attachMaskSDKToCurrentActivePage(choose) {
    if (choose === 'always') {
        (0,request_permission/* requestHostPermissionForActiveTab */.Jr)();
    } else if (choose === 'always-all') {
        (0,request_permission/* requestHostPermission */.Xm)([
            '<all_urls>'
        ]);
    }
    if (browser.scripting) {
        const [{ id }] = await browser.tabs.query({
            active: true
        });
        if (!id) return false;
        await Promise.all([
            attachMaskSDK3(id),
            (0,injectScript/* evaluateContentScript */.yQ)(id)
        ]);
    } else if (browser.tabs) {
        await Promise.all([
            attachMaskSDK2(),
            (0,injectScript/* evaluateContentScript */.yQ)(undefined)
        ]);
    }
    return true;
}
async function attachMaskSDK2() {
    await browser.tabs.executeScript(undefined, {
        code: await (0,injectScript/* injectUserScriptMV2 */.oA)(injectScript/* maskSDK_URL */.O5)
    });
}
async function attachMaskSDK3(id) {
    const [{ error }] = await browser.scripting.executeScript({
        target: {
            tabId: id
        },
        files: [
            injectScript/* maskSDK_URL */.O5
        ],
        // @ts-expect-error Chrome API
        world: 'MAIN'
    });
    if (error) throw error;
}
async function developmentMaskSDKReload() {
    if (true) return;
    if (browser.scripting) {
        const [{ id }] = await browser.tabs.query({
            active: true
        });
        if (!id) return;
        await attachMaskSDK3(id);
    } else if (browser.tabs) {
        await attachMaskSDK2();
    }
}
async function shouldSuggestConnectInPopup(url) {
    if (!url) {
        const tabs = await browser.tabs.query({
            active: true
        });
        if (!tabs.length) return false;
        [{ url }] = tabs;
        if (!url) return false;
    }
    return canInject(url) && !await browser.permissions.contains({
        origins: [
            new URL(url).origin + '/*'
        ]
    });
}
function canInject(url) {
    if (url.startsWith('http://localhost:')) return true;
    if (url.startsWith('http://localhost/')) return true;
    if (url.startsWith('http://127.0.0.1')) return true;
    if (url.startsWith('https://')) return true;
    return false;
}

;// CONCATENATED MODULE: ./packages/mask/background/services/site-adaptors/index.ts




/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ walletDatabase)
/* harmony export */ });
/* harmony import */ var _database_plugin_db_wrap_plugin_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67144);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);


// Note: Wallet was a plugin in the past, but now it's a core service in Mask.
const walletDatabase = (0,_database_plugin_db_wrap_plugin_database_js__WEBPACK_IMPORTED_MODULE_0__/* .createPluginDatabase */ .X)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PluginID */ .P.Wallet);


/***/ }),

/***/ 46912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ createWalletDBAccess)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29311);
/* harmony import */ var _database_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16234);


function path(x) {
    return x;
}
const createWalletDBAccess = (0,_database_utils_openDB_js__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-plugin-wallet', 9, {
        async upgrade (db, oldVersion, newVersion, tx) {
            function v0_v1() {
                db.createObjectStore('Wallet', {
                    keyPath: path('address')
                });
            }
            function v8_v9() {
                const pluginStore = 'PluginStore';
                db.objectStoreNames.contains(pluginStore) && db.deleteObjectStore(pluginStore);
                db.createObjectStore('UnconfirmedRequestChunk', {
                    keyPath: path('record_id')
                });
            }
            if (oldVersion < 1) v0_v1();
            if (oldVersion < 9) v8_v9();
        }
    });
});


/***/ }),

/***/ 12122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EIP2255_wallet_getPermissions: () => (/* reexport */ EIP2255_wallet_getPermissions),
  EIP2255_wallet_requestPermissions: () => (/* reexport */ EIP2255_wallet_requestPermissions),
  addWallet: () => (/* reexport */ wallet/* addWallet */.ry),
  changePassword: () => (/* reexport */ wallet/* changePassword */.Cp),
  clearPassword: () => (/* reexport */ wallet/* clearPassword */.Cy),
  createMnemonicId: () => (/* reexport */ wallet/* createMnemonicId */.zu),
  createMnemonicWords: () => (/* reexport */ wallet/* createMnemonicWords */.bb),
  createWalletFromMnemonicWords: () => (/* reexport */ wallet/* createWalletFromMnemonicWords */.XZ),
  deriveWallet: () => (/* reexport */ wallet/* deriveWallet */.rf),
  disconnectAllOriginsConnectedFromWallet: () => (/* reexport */ disconnectAllOriginsConnectedFromWallet),
  disconnectAllWalletsFromOrigin: () => (/* reexport */ disconnectAllWalletsFromOrigin),
  disconnectWalletFromOrigin: () => (/* reexport */ disconnectWalletFromOrigin),
  exportKeyStoreJSON: () => (/* reexport */ wallet/* exportKeyStoreJSON */.cz),
  exportMnemonicWords: () => (/* reexport */ wallet/* exportMnemonicWords */.Zu),
  exportPrivateKey: () => (/* reexport */ wallet/* exportPrivateKey */.Dg),
  generateAddressFromKeyStoreJSON: () => (/* reexport */ wallet/* generateAddressFromKeyStoreJSON */.lt),
  generateAddressFromMnemonicWords: () => (/* reexport */ wallet/* generateAddressFromMnemonicWords */.CB),
  generateAddressFromPrivateKey: () => (/* reexport */ wallet/* generateAddressFromPrivateKey */.a6),
  generateNextDerivationAddress: () => (/* reexport */ wallet/* generateNextDerivationAddress */._D),
  getAllConnectedOrigins: () => (/* reexport */ getAllConnectedOrigins),
  getAllConnectedWallets: () => (/* reexport */ getAllConnectedWallets),
  getAutoLockerDuration: () => (/* reexport */ wallet/* getAutoLockerDuration */.f1),
  getDerivableAccounts: () => (/* reexport */ wallet/* getDerivableAccounts */.tk),
  getEIP2255PermissionDetail: () => (/* reexport */ getEIP2255PermissionDetail),
  getLegacyWallets: () => (/* reexport */ legacyWallet/* getLegacyWallets */.c),
  getPrimaryWalletByMnemonicId: () => (/* reexport */ wallet/* getPrimaryWalletByMnemonicId */.pW),
  getWallet: () => (/* reexport */ wallet/* getWallet */.iL),
  getWalletPrimary: () => (/* reexport */ wallet/* getWalletPrimary */.VK),
  getWallets: () => (/* reexport */ wallet/* getWallets */.MX),
  grantEIP2255Permission: () => (/* reexport */ grantEIP2255Permission),
  hasPassword: () => (/* reexport */ wallet/* hasPassword */.fN),
  hasPasswordWithDefaultOne: () => (/* reexport */ wallet/* hasPasswordWithDefaultOne */.ed),
  hasWallet: () => (/* reexport */ wallet/* hasWallet */.Sx),
  internalWalletConnect: () => (/* reexport */ internalWalletConnect),
  isLocked: () => (/* reexport */ wallet/* isLocked */.p1),
  lockWallet: () => (/* reexport */ wallet/* lockWallet */.tR),
  recoverWalletFromKeyStoreJSON: () => (/* reexport */ wallet/* recoverWalletFromKeyStoreJSON */.Ze),
  recoverWalletFromMnemonicWords: () => (/* reexport */ wallet/* recoverWalletFromMnemonicWords */.AA),
  recoverWalletFromPrivateKey: () => (/* reexport */ wallet/* recoverWalletFromPrivateKey */.rE),
  removeWallet: () => (/* reexport */ wallet/* removeWallet */.h1),
  renameWallet: () => (/* reexport */ wallet/* renameWallet */.N0),
  resetAllWallets: () => (/* reexport */ wallet/* resetAllWallets */.Ct),
  resetPassword: () => (/* reexport */ wallet/* resetPassword */.c0),
  resolveMaskAccount: () => (/* reexport */ resolveMaskAccount),
  selectMaskAccount: () => (/* reexport */ selectMaskAccount),
  send: () => (/* reexport */ send),
  setAutoLockTimer: () => (/* reexport */ wallet/* setAutoLockTimer */.D5),
  setAutoLockerTime: () => (/* reexport */ wallet/* setAutoLockerTime */.mV),
  setDefaultPassword: () => (/* reexport */ wallet/* setDefaultPassword */.xR),
  setPassword: () => (/* reexport */ wallet/* setPassword */.FY),
  signWithWallet: () => (/* reexport */ wallet/* signWithWallet */.JP),
  topUnconfirmedRequest: () => (/* reexport */ topUnconfirmedRequest),
  unlockWallet: () => (/* reexport */ wallet/* unlockWallet */.xG),
  updateUnconfirmedRequest: () => (/* reexport */ updateUnconfirmedRequest),
  updateWallet: () => (/* reexport */ wallet/* updateWallet */.K8),
  validatePassword: () => (/* reexport */ wallet/* validatePassword */.uo),
  verifyPassword: () => (/* reexport */ wallet/* verifyPassword */.Gv)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/async-call-rpc@6.3.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(56499);
;// CONCATENATED MODULE: ./packages/mask-sdk/shared/error.ts
// data?: unknown
class MaskEthereumProviderRpcError extends Error {
    constructor(code, message, options = {}){
        const { cause = undefined } = options;
        super(message, {
            cause
        });
        this.code = code;
        // this.data = data
        delete this.stack;
    }
    code;
    data;
}
var ErrorCode;
(function(ErrorCode) {
    ErrorCode[ErrorCode["ParseError"] = -32700] = "ParseError";
    ErrorCode[ErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    ErrorCode[ErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    ErrorCode[ErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    ErrorCode[ErrorCode["InternalError"] = -32603] = "InternalError";
})(ErrorCode || (ErrorCode = {}));
var ErrorMessages;
(function(ErrorMessages) {
    ErrorMessages["FirstArgumentIsNotObject"] = 'Expected a single, non-array, object argument.';
    ErrorMessages["FirstArgumentMethodFieldInvalid"] = "'args.method' must be a non-empty string.";
    ErrorMessages["UnknownMethod"] = 'The method "$" does not exist / is not available.';
    ErrorMessages[// ParamsIsNotObjectOrArray = "'args.params' must be an object or array if provided.",
    "ParamsIsNotArray"] = "'args.params' must be an array if provided.";
    ErrorMessages["InvalidMethodParams"] = 'Invalid method parameter(s).';
    ErrorMessages["wallet_requestPermissions_Empty"] = 'Permissions request for origin "$" contains no permissions.';
    ErrorMessages["wallet_requestPermissions_Unknown"] = 'Permissions request for origin "$" contains invalid requested permission(s).';
})(ErrorMessages || (ErrorMessages = {}));

;// CONCATENATED MODULE: ./packages/mask-sdk/server/index.ts




function createMaskSDKServer(api, signal) {
    // TODO: support AbortSignal
    return AsyncCall(api, {
        serializer,
        channel: createMaskSDKChannel('content'),
        log: false,
        thenable: false,
        mapError (error) {
            return {
                code: error.code,
                message: error.message,
                data: error
            };
        }
    });
}

// EXTERNAL MODULE: ./packages/mask/background/services/wallet/database/Plugin.db.ts
var Plugin_db = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/mask/background/services/helper/popup-opener.ts
var popup_opener = __webpack_require__(76490);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/connect.ts









// https://eips.ethereum.org/EIPS/eip-2255
async function EIP2255_wallet_getPermissions(origin) {
    const wallets = await getAllConnectedWallets(origin);
    if (!wallets.size) return [];
    return EIP2255PermissionsOfWallets(origin, wallets);
}
const requests = new Map();
async function EIP2255_wallet_requestPermissions(origin, request) {
    assertOrigin(origin);
    for(const method in request){
        if (method !== 'eth_accounts') {
            throw new MaskEthereumProviderRpcError(ErrorCode.MethodNotFound, ErrorMessages.UnknownMethod.replaceAll('$', method));
        }
    }
    const id = Math.random().toString(36).slice(2);
    requests.set(id, {
        origin,
        request,
        promise: (0,esm/* defer */.PQ)()
    });
    if (!entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet].wallets) {
        await (0,popup_opener/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.Wallet, {
            external_request: id
        });
    } else {
        await (0,popup_opener/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.SelectWallet, {
            chainId: types/* ChainId */.a_.Mainnet,
            external_request: id
        });
    }
    return requests.get(id).promise[0];
}
async function getEIP2255PermissionDetail(id) {
    return (0,omit/* default */.Z)(requests.get(id), 'promise');
}
async function grantEIP2255Permission(id, grantedWalletAddress) {
    if (!requests.has(id)) throw new Error('Invalid request id');
    const { origin, promise } = requests.get(id);
    for (const wallet of grantedWalletAddress){
        const data = await Plugin_db/* walletDatabase */.Y.get('granted_permission', wallet);
        const newData = (0,immer/* produce */.Uy)(data || {
            type: 'granted_permission',
            id: wallet,
            origins: new Map()
        }, (draft)=>{
            if (!draft.origins.has(origin)) draft.origins.set(origin, new Set());
            const permissions = draft.origins.get(origin);
            if (Array.from(permissions).some((data)=>hasEthAccountsPermission(origin, data))) return;
            permissions.add({
                invoker: origin,
                parentCapability: 'eth_accounts',
                caveats: []
            });
        });
        if (data !== newData) await Plugin_db/* walletDatabase */.Y.add(newData);
    }
    promise[1](EIP2255PermissionsOfWallets(origin, grantedWalletAddress));
}
async function disconnectWalletFromOrigin(wallet, origin) {
    assertOrigin(origin);
    const origins = new Map((await Plugin_db/* walletDatabase */.Y.get('granted_permission', wallet))?.origins);
    if (!origins.has(origin)) return;
    origins.delete(origin);
    if (origins.size) await Plugin_db/* walletDatabase */.Y.add({
        type: 'granted_permission',
        id: wallet,
        origins
    });
    else await Plugin_db/* walletDatabase */.Y.remove('granted_permission', wallet);
}
async function disconnectAllWalletsFromOrigin(origin) {
    assertOrigin(origin);
    for await (const cursor of Plugin_db/* walletDatabase */.Y.iterate_mutate('granted_permission')){
        if (!cursor.value.origins.has(origin)) continue;
        if (cursor.value.origins.size === 1) await cursor.delete();
        else {
            await cursor.update((0,immer/* produce */.Uy)(cursor.value, (draft)=>{
                draft.origins.delete(origin);
            }));
        }
    }
}
async function disconnectAllOriginsConnectedFromWallet(wallet) {
    await Plugin_db/* walletDatabase */.Y.remove('granted_permission', wallet);
}
async function internalWalletConnect(wallet, origin) {
    assertOrigin(origin);
    const origins = (await Plugin_db/* walletDatabase */.Y.get('internal_connected', wallet))?.origins;
    if (!origins) {
        Plugin_db/* walletDatabase */.Y.add({
            type: 'internal_connected',
            id: wallet,
            origins: new Set([
                origin
            ])
        });
    } else if (!origins.has(origin)) {
        for await (const cursor of Plugin_db/* walletDatabase */.Y.iterate_mutate('internal_connected')){
            if (cursor.value.id !== wallet) continue;
            await cursor.update((0,immer/* produce */.Uy)(cursor.value, (draft)=>{
                draft.origins.add(origin);
            }));
        }
    }
}
function hasEthAccountsPermission(origin, permission) {
    return permission.parentCapability === 'eth_accounts' && permission.invoker === origin;
}
function EIP2255PermissionsOfWallets(origin, wallets) {
    return [
        {
            parentCapability: 'eth_accounts',
            invoker: origin,
            caveats: [
                {
                    type: 'restrictReturnedAccounts',
                    value: [
                        ...wallets
                    ]
                }
            ]
        }
    ];
}
async function getAllConnectedWallets(origin) {
    assertOrigin(origin);
    const wallets = new Set();
    out: for await (const cursor of Plugin_db/* walletDatabase */.Y.iterate('granted_permission')){
        const thisOrigin = cursor.value.origins.get(origin);
        if (!thisOrigin) continue;
        for (const permission of thisOrigin){
            if (hasEthAccountsPermission(origin, permission)) {
                wallets.add(cursor.value.id);
                continue out;
            }
        }
    }
    for await (const cursor of Plugin_db/* walletDatabase */.Y.iterate('internal_connected')){
        if (!cursor.value.origins.has(origin)) continue;
        wallets.add(cursor.value.id);
    }
    return wallets;
}
async function getAllConnectedOrigins(wallet) {
    const origins = (await Plugin_db/* walletDatabase */.Y.get('granted_permission', wallet))?.origins;
    const connectedOrigins = new Set();
    if (!origins) return connectedOrigins;
    out: for (const permissions of origins.values()){
        for (const permission of permissions){
            if (hasEthAccountsPermission(permission.invoker, permission)) {
                connectedOrigins.add(permission.invoker);
                continue out;
            }
        }
    }
    return connectedOrigins;
}
function assertOrigin(origin) {
    if (!URL.canParse(origin) || new URL(origin).origin !== origin) throw new TypeError('origin is not a valid origin. See https://developer.mozilla.org/en-US/docs/Glossary/Origin');
}

;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/select.ts





let deferred;
/**
 * @param chainId Chain ID
 */ async function selectMaskAccount(chainId, defaultAddress, source) {
    await (0,popup_opener/* openPopupWindow */.lU)(entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet].wallets ? Routes/* PopupRoutes */.mZ.SelectWallet : Routes/* PopupRoutes */.mZ.Wallet, {
        chainId,
        address: defaultAddress,
        source
    });
    deferred = (0,esm/* defer */.PQ)();
    return deferred[0];
}
async function resolveMaskAccount(result) {
    if (Array.isArray(result)) deferred?.[1](result);
    else if (result.status === 'fulfilled') deferred?.[1](result.value);
    else deferred?.[2](result.reason);
    deferred = undefined;
}

// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/wallet/index.ts + 3 modules
var wallet = __webpack_require__(58113);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/legacyWallet.ts + 1 modules
var legacyWallet = __webpack_require__(36731);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/database/Wallet.db.ts
var Wallet_db = __webpack_require__(46912);
// EXTERNAL MODULE: ./packages/mask/background/database/utils/openDB.ts
var openDB = __webpack_require__(16234);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/rpc.ts




const MAX_UNCONFIRMED_REQUESTS_SIZE = 1;
const MAIN_RECORD_ID = '0';
function requestSorter(a, z) {
    return (a.id ?? 0) - (z.id ?? 0);
}
async function getUnconfirmedRequests() {
    const t = (0,openDB/* createTransaction */._X)(await (0,Wallet_db/* createWalletDBAccess */.n)(), 'readonly')('UnconfirmedRequestChunk');
    const chunk = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk) return [];
    return chunk.requests.slice(0, MAX_UNCONFIRMED_REQUESTS_SIZE).sort(requestSorter);
}
async function topUnconfirmedRequest() {
    return (0,head/* default */.Z)(await getUnconfirmedRequests());
}
async function updateUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await (0,Wallet_db/* createWalletDBAccess */.n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk_?.requests.length) throw new Error('No request to update.');
    const requests = chunk_?.requests?.map((item)=>{
        if (item.id !== payload.id) return item;
        return payload;
    }) ?? [];
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}

// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/PayloadEditor.ts + 1 modules
var PayloadEditor = __webpack_require__(61227);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/Signer.ts
var Signer = __webpack_require__(28775);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/createJsonRpcResponse.ts
var createJsonRpcResponse = __webpack_require__(48221);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ErrorEditor.ts
var ErrorEditor = __webpack_require__(40225);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/mask/background/services/identity/persona/sign.ts
var sign = __webpack_require__(17801);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/send.ts





/**
 * The entrance of all RPC requests to MaskWallet.
 */ async function send(payload, options) {
    const { owner, paymentToken, providerURL } = options ?? {};
    const { pid = 0, from, chainId = options?.chainId ?? types/* ChainId */.a_.Mainnet, signableMessage, signableConfig } = PayloadEditor/* PayloadEditor */._.fromPayload(payload, options);
    const identifier = ec_key/* ECKeyIdentifier */.o.from(options?.identifier).unwrapOr(undefined);
    const signer = identifier ? new Signer/* Signer */.E(identifier, (type, message, identifier)=>(0,sign/* signWithPersona */.M)(type, message, identifier, undefined, true)) : new Signer/* Signer */.E(owner || from, wallet/* signWithWallet */.JP);
    switch(payload.method){
        case types/* EthereumMethodType */.W8.ETH_SEND_TRANSACTION:
        case types/* EthereumMethodType */.W8.MASK_REPLACE_TRANSACTION:
            if (!signableConfig) throw new Error('No transaction to be sent.');
            try {
                if (owner && paymentToken) {
                    return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, await entry/* SmartPayAccount */.iC.sendTransaction(chainId, owner, signableConfig, signer, {
                        paymentToken
                    }));
                } else {
                    return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, await entry/* Web3Readonly */.MJ.sendSignedTransaction(await signer.signTransaction(signableConfig), {
                        chainId,
                        providerURL
                    }));
                }
            } catch (error) {
                throw ErrorEditor/* ErrorEditor */.Q.from(error, null, 'Failed to send transaction.').error;
            }
        case types/* EthereumMethodType */.W8.ETH_SIGN:
        case types/* EthereumMethodType */.W8.PERSONAL_SIGN:
            try {
                if (!signableMessage) throw new Error('No message to be signed.');
                return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, await signer.signMessage(signableMessage));
            } catch (error) {
                throw ErrorEditor/* ErrorEditor */.Q.from(error, null, 'Failed to sign message.').error;
            }
        case types/* EthereumMethodType */.W8.ETH_SIGN_TYPED_DATA:
            try {
                if (!signableMessage) throw new Error('No typed data to be signed.');
                return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, await signer.signTypedData(signableMessage));
            } catch (error) {
                throw ErrorEditor/* ErrorEditor */.Q.from(error, null, 'Failed to sign typed data.').error;
            }
        case types/* EthereumMethodType */.W8.ETH_SIGN_TRANSACTION:
            try {
                if (!signableConfig) throw new Error('No transaction to be signed.');
                return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, await signer.signTransaction(signableConfig));
            } catch (error) {
                throw ErrorEditor/* ErrorEditor */.Q.from(error, null, 'Failed to sign transaction.').error;
            }
        case types/* EthereumMethodType */.W8.MASK_DEPLOY:
            try {
                const [owner] = payload.params;
                if (!(0,address/* isValidAddress */.At)(owner)) throw new Error('Invalid sender address.');
                return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, await entry/* SmartPayAccount */.iC.deploy(chainId, owner, signer));
            } catch (error) {
                throw ErrorEditor/* ErrorEditor */.Q.from(error, null, 'Failed to deploy.').error;
            }
        case types/* EthereumMethodType */.W8.ETH_DECRYPT:
            throw new Error('Method not implemented.');
        case types/* EthereumMethodType */.W8.ETH_GET_ENCRYPTION_PUBLIC_KEY:
            throw new Error('Method not implemented.');
        default:
            try {
                const result = await entry/* RequestReadonly */.Kq.request({
                    method: payload.method,
                    params: payload.params ?? []
                }, {
                    chainId,
                    providerURL
                });
                return (0,createJsonRpcResponse/* createJsonRpcResponse */.T)(pid, result);
            } catch (error) {
                throw error instanceof Error ? error : new Error('Failed to send request.');
            }
    }
}

;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/index.ts








/***/ }),

/***/ 36731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ getLegacyWallets)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/bip39@3.1.0/node_modules/bip39/src/index.js
var src = __webpack_require__(5134);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(46067);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/HD_PATH_WITHOUT_INDEX_ETHEREUM.ts
var HD_PATH_WITHOUT_INDEX_ETHEREUM = __webpack_require__(83076);
// EXTERNAL MODULE: ./packages/mask/background/database/utils/openDB.ts
var openDB = __webpack_require__(16234);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/database/Wallet.db.ts
var Wallet_db = __webpack_require__(46912);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/helpers.ts

function LegacyWalletRecordOutDB(x) {
    const record = x;
    record.address = (0,formatter/* formatEthereumAddress */.j8)(record.address);
    record.erc20_token_whitelist ??= new Set();
    record.erc20_token_blacklist ??= new Set();
    record.erc721_token_whitelist ??= new Set();
    record.erc721_token_blacklist ??= new Set();
    record.erc1155_token_whitelist ??= new Set();
    record.erc1155_token_blacklist ??= new Set();
    return record;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = {
	/* dynamic */ get a() {
		var exports = __webpack_require__(29017);
		if (exports.__esModule) Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/legacyWallet.ts









function sortWallet(a, b) {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
}
async function getLegacyWallets() {
    const wallets = await getAllWalletRecords();
    return wallets.filter((x)=>x._private_key_ || x.mnemonic.length);
}
async function getAllWalletRecords() {
    const t = (0,openDB/* createTransaction */._X)(await (0,Wallet_db/* createWalletDBAccess */.n)(), 'readonly')('Wallet');
    const records = await t.objectStore('Wallet').getAll();
    const wallets = (await Promise.all(records.map(async (record)=>{
        const walletRecord = LegacyWalletRecordOutDB(record);
        return {
            ...walletRecord,
            _private_key_: await makePrivateKey(walletRecord)
        };
    }))).sort(sortWallet);
    return wallets;
}
async function makePrivateKey(record) {
    // not a managed wallet
    if (!record._private_key_ && !record.mnemonic.length) return '';
    const { privateKey } = record._private_key_ ? await recoverWalletFromPrivateKey(record._private_key_) : await recoverWalletFromMnemonicWords(record.mnemonic, record.passphrase, record.path);
    return `0x${(0,pvtutils/* toHex */.NC)(privateKey)}`;
}
async function recoverWalletFromMnemonicWords(mnemonic, passphrase, path = `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`) {
    const seed = await src/* mnemonicToSeed */.OI(mnemonic.join(' '), passphrase);
    const masterKey = dist.a.HDKey.parseMasterSeed(seed);
    const extendedPrivateKey = masterKey.derive(path).extendedPrivateKey;
    const childKey = dist.a.HDKey.parseExtendedKey(extendedPrivateKey);
    const wallet = childKey.derive('');
    const walletPublicKey = wallet.publicKey;
    const walletPrivateKey = wallet.privateKey;
    return {
        address: dist.a.EthereumAddress.from(walletPublicKey).address,
        privateKey: walletPrivateKey,
        privateKeyValid: true,
        privateKeyInHex: `0x${(0,pvtutils/* toHex */.NC)(walletPrivateKey)}`,
        path,
        mnemonic,
        passphrase
    };
}
async function recoverWalletFromPrivateKey(privateKey) {
    const ec = new elliptic.ec('secp256k1');
    const privateKey_ = privateKey.replace(/^0x/, '').trim();
    // strip 0x
    const key = ec.keyFromPrivate(privateKey_);
    return {
        address: dist.a.EthereumAddress.from(key.getPublic(false, 'array')).address,
        privateKey: (0,pvtutils/* fromHex */.H_)(privateKey_),
        privateKeyValid: privateKeyVerify(privateKey_),
        privateKeyInHex: privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`,
        mnemonic: []
    };
}
function privateKeyVerify(key) {
    if (!/[\da-f]{64}/i.test(key)) return false;
    const k = new bignumber/* BigNumber */.O(key, 16);
    const n = new bignumber/* BigNumber */.O('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
    return !k.isZero() && k.isLessThan(n);
}


/***/ }),

/***/ 78590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getAutoLockerDuration),
/* harmony export */   m: () => (/* binding */ setAutoLockerTime)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40514);
/* harmony import */ var _database_Plugin_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4228);


const DEFAULT_LOCK_DURATION = 1000 * 60 * 60 * 24;
// One day
const ID = 'locker';
// ms
async function getAutoLockerRecord() {
    return _database_Plugin_db_js__WEBPACK_IMPORTED_MODULE_0__/* .walletDatabase */ .Y.get('locker', ID);
}
async function getAutoLockerDuration() {
    const record = await getAutoLockerRecord();
    return record?.duration ?? DEFAULT_LOCK_DURATION;
}
async function setAutoLockerTime(duration) {
    await _database_Plugin_db_js__WEBPACK_IMPORTED_MODULE_0__/* .walletDatabase */ .Y.add({
        type: 'locker',
        id: ID,
        duration
    });
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CrossIsolationMessages */ .W.events.walletLockTimeUpdated.sendToAll();
}


/***/ }),

/***/ 58113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ry: () => (/* reexport */ addWallet),
  Cp: () => (/* reexport */ wallet_password/* changePassword */.Cp),
  Cy: () => (/* reexport */ wallet_password/* clearPassword */.Cy),
  zu: () => (/* binding */ createMnemonicId),
  bb: () => (/* binding */ createMnemonicWords),
  XZ: () => (/* binding */ createWalletFromMnemonicWords),
  rf: () => (/* binding */ deriveWallet),
  cz: () => (/* binding */ exportKeyStoreJSON),
  Zu: () => (/* binding */ exportMnemonicWords),
  Dg: () => (/* binding */ wallet_exportPrivateKey),
  lt: () => (/* binding */ generateAddressFromKeyStoreJSON),
  CB: () => (/* binding */ generateAddressFromMnemonicWords),
  a6: () => (/* binding */ generateAddressFromPrivateKey),
  _D: () => (/* binding */ generateNextDerivationAddress),
  f1: () => (/* reexport */ locker/* getAutoLockerDuration */.f),
  tk: () => (/* binding */ getDerivableAccounts),
  pW: () => (/* binding */ getPrimaryWalletByMnemonicId),
  iL: () => (/* binding */ wallet_getWallet),
  VK: () => (/* binding */ getWalletPrimary),
  MX: () => (/* binding */ wallet_getWallets),
  fN: () => (/* reexport */ wallet_password/* hasPassword */.fN),
  ed: () => (/* reexport */ wallet_password/* hasPasswordWithDefaultOne */.ed),
  Sx: () => (/* reexport */ hasWallet),
  p1: () => (/* reexport */ wallet_locker/* isLocked */.p1),
  tR: () => (/* reexport */ wallet_locker/* lockWallet */.tR),
  Ze: () => (/* binding */ recoverWalletFromKeyStoreJSON),
  AA: () => (/* binding */ recoverWalletFromMnemonicWords),
  rE: () => (/* binding */ recoverWalletFromPrivateKey),
  h1: () => (/* binding */ removeWallet),
  N0: () => (/* binding */ renameWallet),
  Ct: () => (/* binding */ wallet_resetAllWallets),
  c0: () => (/* reexport */ wallet_password/* resetPassword */.c0),
  D5: () => (/* reexport */ wallet_locker/* setAutoLockTimer */.D5),
  mV: () => (/* reexport */ locker/* setAutoLockerTime */.m),
  xR: () => (/* reexport */ wallet_password/* setDefaultPassword */.xR),
  FY: () => (/* reexport */ wallet_password/* setPassword */.FY),
  JP: () => (/* binding */ signWithWallet),
  xG: () => (/* reexport */ wallet_locker/* unlockWallet */.xG),
  K8: () => (/* reexport */ updateWallet),
  uo: () => (/* reexport */ wallet_password/* validatePassword */.uo),
  Gv: () => (/* reexport */ wallet_password/* verifyPassword */.Gv)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/bip39@3.1.0/node_modules/bip39/src/index.js
var src = __webpack_require__(5134);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(12113);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethereumjs+util@8.0.5/node_modules/@ethereumjs/util/dist/index.js
var dist = __webpack_require__(6509);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+mask-wallet-core@0.1.0-20211013082857-eb62e5f_protobufjs@6.11.4/node_modules/@dimensiondev/mask-wallet-core/proto/index.esm.js
var index_esm = __webpack_require__(81019);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Wallet.ts
var Wallet = __webpack_require__(58190);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/HD_PATH_WITHOUT_INDEX_ETHEREUM.ts
var HD_PATH_WITHOUT_INDEX_ETHEREUM = __webpack_require__(83076);
;// CONCATENATED MODULE: ./packages/shared-base/src/onDemandWorker/index.ts
/**
 * A Worker-like class that create/destroy Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    __init;
    worker = undefined;
    inactiveTimeToTerminate = 15 * 60 * 1000;
    /**
     * A Worker-like class that create/destroy Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        super();
        this.__init = init;
        this.log(init[1]?.name ?? 'anonymous Worker', 'created with', ...init);
    }
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {}
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    lastUsed = Date.now();
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e)));
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e)));
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e)));
        this.watchUsage();
    }
    terminate() {
        this.worker?.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback);
    }
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
    }
    postMessage(...args) {
        this.use(()=>this.worker?.postMessage(...args));
    }
    set onmessage(_) {
        onDemandWorker_throws();
    }
    set onerror(_) {
        onDemandWorker_throws();
    }
    set onmessageerror(_) {
        onDemandWorker_throws();
    }
}
function onDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    if (e instanceof MessageEvent) return new MessageEvent(e.type, {
        data: e.data
    });
    return new ErrorEvent(e.type, e);
}

;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/maskwallet/index.ts

const worker = new OnDemandWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(5258), __webpack_require__.b), {
    name: 'MaskWallet'
});
var ErrorCode;
(function(ErrorCode) {
    ErrorCode["KdfParamsInvalid"] = '-3001';
    ErrorCode["PasswordIncorrect"] = '-3002';
    ErrorCode["InvalidKeyIvLength"] = '-3003';
    ErrorCode["InvalidCiphertext"] = '-3004';
    ErrorCode["InvalidPrivateKey"] = '-3005';
    ErrorCode["InvalidPublicKey"] = '-3006';
    ErrorCode["InvalidMnemonic"] = '-3007';
    ErrorCode["InvalidSeed"] = '-3008';
    ErrorCode["InvalidDerivationPath"] = '-3009';
    ErrorCode["InvalidKeyStoreJSON"] = '-3010';
    ErrorCode["NotSupportedPublicKeyType"] = '-3011';
    ErrorCode["NotSupportedCurve"] = '-3012';
    ErrorCode["NotSupportedCipher"] = '-3013';
})(ErrorCode || (ErrorCode = {}));
const ErrorMessage = {
    [ErrorCode.KdfParamsInvalid]: 'Invalid kdf parameters.',
    [ErrorCode.PasswordIncorrect]: 'Incorrect payment password.',
    [ErrorCode.InvalidKeyIvLength]: 'Invalid key IV length.',
    [ErrorCode.InvalidCiphertext]: 'Invalid cipher text.',
    [ErrorCode.InvalidPrivateKey]: 'Invalid private key.',
    [ErrorCode.InvalidPublicKey]: 'Invalid public key.',
    [ErrorCode.InvalidMnemonic]: 'Invalid mnemonic words.',
    [ErrorCode.InvalidSeed]: 'Invalid seed.',
    [ErrorCode.InvalidDerivationPath]: 'Invalid derivation path.',
    [ErrorCode.InvalidKeyStoreJSON]: 'Invalid keystore JSON.',
    [ErrorCode.NotSupportedPublicKeyType]: 'Not supported public key type.',
    [ErrorCode.NotSupportedCurve]: 'Not supported curve.',
    [ErrorCode.NotSupportedCipher]: 'Not supported cipher.'
};
function send(input, output) {
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1219164
    if (typeof Worker !== 'function') {
        return async (value)=>{
            const { request } = await Promise.all(/* import() */[__webpack_require__.e(1077), __webpack_require__.e(2428)]).then(__webpack_require__.bind(__webpack_require__, 56147));
            const { api } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 81019));
            const payload = api.MWRequest.encode({
                [input]: value
            }).finish();
            const wasmResult = request(payload);
            return api.MWResponse.decode(wasmResult)[output];
        };
    }
    return (value)=>{
        return new Promise((resolve, reject)=>{
            const req = {
                id: Math.random(),
                data: {
                    [input]: value
                }
            };
            worker.postMessage(req);
            worker.addEventListener('message', function f(message) {
                if (message.data.id !== req.id) return;
                worker.removeEventListener('message', f);
                const data = message.data;
                if (data.response.error) return reject(new Error(ErrorMessage[data.response.error.errorCode] || 'Unknown Error'));
                resolve(data.response[output]);
            });
        });
    };
}
const importPrivateKey = send('param_import_private_key', 'resp_import_private_key');
const importMnemonic = send('param_import_mnemonic', 'resp_import_mnemonic');
const importJSON = send('param_import_json', 'resp_import_json');
const createAccountOfCoinAtPath = send('param_create_account_of_coin_at_path', 'resp_create_account_of_coin_at_path');
const exportPrivateKey = send('param_export_private_key', 'resp_export_private_key');
const exportPrivateKeyOfPath = send('param_export_private_key_of_path', 'resp_export_private_key');
const exportMnemonic = send('param_export_mnemonic', 'resp_export_mnemonic');
const exportKeyStoreJSONOfAddress = send('param_export_key_store_json_of_address', 'resp_export_key_store_json');
const exportKeyStoreJSONOfPath = send('param_export_key_store_json_of_path', 'resp_export_key_store_json');

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/asyncIterator.ts
var asyncIterator = __webpack_require__(67830);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/database/Plugin.db.ts
var Plugin_db = __webpack_require__(4228);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/wallet/database/wallet.ts





function WalletRecordOutDB(record) {
    return {
        ...(0,omit/* default */.Z)(record, 'type'),
        configurable: record.storedKeyInfo?.type ? record.storedKeyInfo.type !== index_esm.api.StoredKeyType.Mnemonic : true,
        hasStoredKeyInfo: !!record.storedKeyInfo,
        hasDerivationPath: !!record.derivationPath
    };
}
async function getWallet(address) {
    if (!address) return null;
    if (!(0,helpers_address/* isValidAddress */.At)(address)) throw new Error('Not a valid address.');
    const wallet = await Plugin_db/* walletDatabase */.Y.get('wallet', (0,formatter/* formatEthereumAddress */.j8)(address)) ?? null;
    return wallet ? WalletRecordOutDB(wallet) : null;
}
async function getWalletRequired(address) {
    const wallet = await getWallet(address);
    if (!wallet) throw new Error('The wallet does not exist.');
    return wallet;
}
async function hasWallet(address) {
    return Plugin_db/* walletDatabase */.Y.has('wallet', (0,formatter/* formatEthereumAddress */.j8)(address));
}
async function hasStoredKeyInfo(storedKeyInfo) {
    const wallets = await getWallets();
    if (!storedKeyInfo) return false;
    return wallets.filter((x)=>x.storedKeyInfo?.hash).some((x)=>x.storedKeyInfo?.hash === storedKeyInfo?.hash);
}
async function getWalletRecords() {
    return (await (0,asyncIterator/* asyncIteratorToArray */.S)(Plugin_db/* walletDatabase */.Y.iterate('wallet'))).map((x)=>x.value);
}
async function getWallets() {
    const wallets = await getWalletRecords();
    return wallets.sort((a, z)=>{
        if (a.updatedAt > z.updatedAt) return -1;
        if (a.updatedAt < z.updatedAt) return 1;
        if (a.createdAt > z.createdAt) return -1;
        if (a.createdAt < z.createdAt) return 1;
        return 0;
    }).map(WalletRecordOutDB);
}
async function addWallet(source, address, updates) {
    const wallet = await getWallet(address);
    if (wallet?.storedKeyInfo?.data) throw new Error('The wallet already exists.');
    const now = new Date();
    const address_ = (0,formatter/* formatEthereumAddress */.j8)(address);
    await Plugin_db/* walletDatabase */.Y.add({
        id: address_,
        type: 'wallet',
        source,
        address: address_,
        name: updates?.name?.trim() ?? `Account ${(await getWallets()).length + 1}`,
        derivationPath: updates?.derivationPath,
        storedKeyInfo: updates?.storedKeyInfo,
        mnemonicId: updates?.mnemonicId,
        createdAt: now,
        updatedAt: now
    });
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.walletsUpdated.sendToAll(undefined);
    return address_;
}
async function updateWallet(address, updates) {
    const wallet = await getWallet(address);
    if (!wallet) throw new Error('The wallet does not exist');
    await Plugin_db/* walletDatabase */.Y.add({
        type: 'wallet',
        ...wallet,
        name: updates.name ?? wallet.name,
        derivationPath: updates?.derivationPath ?? wallet.derivationPath,
        latestDerivationPath: updates?.latestDerivationPath ?? wallet.latestDerivationPath,
        mnemonicId: updates?.mnemonicId ?? wallet.mnemonicId,
        updatedAt: new Date()
    });
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.walletsUpdated.sendToAll(undefined);
}
async function deleteWallet(address) {
    await Plugin_db/* walletDatabase */.Y.remove('wallet', address);
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.walletsUpdated.sendToAll(undefined);
}
async function resetAllWallets() {
    for await (const x of Plugin_db/* walletDatabase */.Y.iterate_mutate('wallet')){
        await x.delete();
    }
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.walletsUpdated.sendToAll(undefined);
}

// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/wallet/password.ts + 2 modules
var wallet_password = __webpack_require__(87190);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/wallet/database/locker.ts
var locker = __webpack_require__(78590);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/services/wallet/locker.ts
var wallet_locker = __webpack_require__(79738);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/wallet/index.ts











const MAX_DERIVE_COUNT = 99;
function bumpDerivationPath(path = `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`) {
    const splitted = path.split('/');
    const index = Number.parseInt((0,last/* default */.Z)(splitted) ?? '', 10);
    if (Number.isNaN(index) || index < 0 || splitted.length !== 6) throw new Error('Invalid derivation path.');
    return [
        ...splitted.slice(0, -1),
        index + 1
    ].join('/');
}
function sanitizeWallet(wallet) {
    return (0,omit/* default */.Z)(wallet, [
        'storedKeyInfo'
    ]);
}
// db

// password


// locker

async function wallet_getWallet(address) {
    const wallet = await getWallet(address);
    if (!wallet?.hasStoredKeyInfo) return null;
    return sanitizeWallet(wallet);
}
async function wallet_getWallets() {
    const wallets = await getWallets();
    return wallets.filter((x)=>x.hasStoredKeyInfo).map(sanitizeWallet);
}
async function createMnemonicWords() {
    return src/* generateMnemonic */.OF().split(' ');
}
async function createMnemonicId(mnemonic) {
    const id = (0,lib.sha3)(mnemonic);
    if (!id) throw new Error('Failed to create mnemonic id.');
    return id;
}
async function getPrimaryWalletByMnemonicId(mnemonicId) {
    if (!mnemonicId) return;
    const wallets = await getWallets();
    return wallets.find((x)=>x.mnemonicId === mnemonicId && x.storedKeyInfo?.type === index_esm.api.StoredKeyType.Mnemonic) ?? null;
}
async function getWalletPrimary(mnemonicId) {
    const wallets = await getWallets();
    const { Mnemonic } = index_esm.api.StoredKeyType;
    const list = wallets.filter((x)=>x.storedKeyInfo?.type === Mnemonic && (mnemonicId ? mnemonicId === x.mnemonicId : true)).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime());
    return (0,head/* default */.Z)(list) ?? null;
}
async function getDerivableAccounts(mnemonic, page, pageSize = 10) {
    const oneTimePassword = 'MASK';
    const imported = await importMnemonic({
        mnemonic,
        password: oneTimePassword
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const accounts = [];
    for(let i = pageSize * page; i < pageSize * (page + 1); i += 1){
        const derivationPath = `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/${i}`;
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            password: oneTimePassword,
            derivationPath,
            StoredKeyData: imported.StoredKey.data
        });
        if (!created?.account?.address) throw new Error(`Failed to create account at path: ${derivationPath}.`);
        accounts.push({
            index: i,
            address: created.account.address,
            derivationPath
        });
    }
    return accounts;
}
async function deriveWallet(name, defaultMnemonicId) {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    // derive wallet base on the primary wallet
    const primaryWallet = await getWalletPrimary(defaultMnemonicId);
    if (!primaryWallet?.storedKeyInfo) throw new Error('Cannot find the primary wallet.');
    let derivedTimes = 0;
    let latestDerivationPath = primaryWallet.latestDerivationPath ?? primaryWallet.derivationPath;
    if (!latestDerivationPath) throw new Error('Failed to derive wallet without derivation path.');
    let mnemonicId = defaultMnemonicId;
    if (!mnemonicId) {
        const mnemonic = await exportMnemonicWords(primaryWallet.address, masterPassword);
        mnemonicId = await createMnemonicId(mnemonic);
    }
    // eslint-disable-next-line no-constant-condition
    while(true){
        derivedTimes += 1;
        // protect from endless looping
        if (derivedTimes >= MAX_DERIVE_COUNT) {
            await updateWallet(primaryWallet.address, {
                latestDerivationPath
            });
            throw new Error('Exceed the max derivation times.');
        }
        // bump index
        latestDerivationPath = bumpDerivationPath(latestDerivationPath);
        // derive a new wallet
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name,
            password: masterPassword,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!created?.account?.address) throw new Error(`Failed to create account at path: ${latestDerivationPath}.`);
        // check its existence in DB
        if (await hasWallet(created.account.address)) {
            const localWallet = await getWallet(created.account.address);
            if (localWallet?.mnemonicId) await updateWallet(localWallet.address, {
                mnemonicId
            });
            continue;
        }
        // update the primary wallet
        await updateWallet(primaryWallet.address, {
            latestDerivationPath
        });
        // found a valid candidate, get the private key of it
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            password: masterPassword,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!exported?.privateKey) throw new Error(`Failed to export private key at path: ${latestDerivationPath}`);
        // import the candidate by the private key
        return createWalletFromPrivateKey(name, exported.privateKey, mnemonicId, latestDerivationPath);
    }
}
async function generateNextDerivationAddress() {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    // derive wallet base on the primary wallet
    const primaryWallet = await getWalletPrimary();
    if (!primaryWallet?.storedKeyInfo) throw new Error('Cannot find the primary wallet.');
    let derivedTimes = 0;
    let latestDerivationPath = primaryWallet.latestDerivationPath ?? primaryWallet.derivationPath;
    if (!latestDerivationPath) throw new Error('Failed to derive wallet without derivation path.');
    // eslint-disable-next-line no-constant-condition
    while(true){
        derivedTimes += 1;
        // protect from endless looping
        if (derivedTimes >= MAX_DERIVE_COUNT) throw new Error('Exceed the max derivation times.');
        // bump index
        latestDerivationPath = bumpDerivationPath(latestDerivationPath);
        // derive a new wallet
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name: '',
            password: masterPassword,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!created?.account?.address) throw new Error(`Failed to create account at path: ${latestDerivationPath}.`);
        // check its existence in DB
        if (await hasWallet(created.account.address)) continue;
        // found a valid candidate, get the private key of it
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            password: masterPassword,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!exported?.privateKey) throw new Error(`Failed to export private key at path: ${latestDerivationPath}`);
        return generateAddressFromPrivateKey(exported.privateKey);
    }
}
async function renameWallet(address, name) {
    const name_ = name.trim();
    if (name_.length <= 0) throw new Error('Invalid wallet name.');
    await updateWallet(address, {
        name: name_
    });
}
async function removeWallet(address, unverifiedPassword) {
    await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const wallet = await getWalletRequired(address);
    await deleteWallet(wallet.address);
}
async function wallet_resetAllWallets() {
    await resetAllWallets();
}
async function signWithWallet(type, message, address) {
    return entry/* Signer */.Ep.sign(type, (0,dist.toBuffer)(`0x${await wallet_exportPrivateKey(address)}`), message);
}
async function exportMnemonicWords(address, unverifiedPassword) {
    if (unverifiedPassword) await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const wallet = await getWalletRequired(address);
    if (wallet.storedKeyInfo?.type !== index_esm.api.StoredKeyType.Mnemonic) throw new Error(`Cannot export mnemonic words of ${address}.`);
    const exported = await exportMnemonic({
        password: masterPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!exported?.mnemonic) throw new Error(`Failed to export mnemonic words of ${address}.`);
    return exported.mnemonic;
}
async function wallet_exportPrivateKey(address, unverifiedPassword) {
    if (unverifiedPassword) await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const wallet = await getWalletRequired(address);
    if (!wallet.storedKeyInfo) throw new Error(`Cannot export private key of ${address}.`);
    const exported = wallet.derivationPath && !wallet.configurable ? await exportPrivateKeyOfPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: wallet.derivationPath ?? `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`,
        password: masterPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    }) : await exportPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        password: masterPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!exported?.privateKey) throw new Error(`Failed to export private key of ${address}.`);
    return exported.privateKey;
}
async function exportKeyStoreJSON(address, unverifiedPassword) {
    if (unverifiedPassword) await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const wallet = await getWalletRequired(address);
    if (!wallet.storedKeyInfo) throw new Error(`Cannot export private key of ${address}.`);
    const exported = wallet.derivationPath && !wallet.configurable ? await exportKeyStoreJSONOfPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: wallet.derivationPath ?? `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`,
        password: masterPassword,
        newPassword: unverifiedPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    }) : await exportKeyStoreJSONOfAddress({
        coin: index_esm.api.Coin.Ethereum,
        password: masterPassword,
        newPassword: unverifiedPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!exported?.json) throw new Error(`Failed to export keystore JSON of ${address}.`);
    return exported.json;
}
async function addWalletFromMnemonicWords(source, name, mnemonic, derivationPath) {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const imported = await importMnemonic({
        mnemonic,
        password: masterPassword
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const mnemonicId = await createMnemonicId(mnemonic);
    if (await hasStoredKeyInfo(imported.StoredKey)) {
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            derivationPath,
            password: masterPassword,
            StoredKeyData: imported.StoredKey.data
        });
        if (!exported?.privateKey) throw new Error(`Failed to export private key at path: ${derivationPath}`);
        return addWalletFromPrivateKey(source, name, exported.privateKey, mnemonicId, derivationPath);
    } else {
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name,
            password: masterPassword,
            derivationPath,
            StoredKeyData: imported.StoredKey.data
        });
        if (!created?.account?.address) throw new Error('Failed to create the wallet.');
        return addWallet(source, created.account.address, {
            name,
            derivationPath,
            storedKeyInfo: imported.StoredKey,
            mnemonicId
        });
    }
}
async function addWalletFromPrivateKey(source, name, privateKey, mnemonicId, derivationPath) {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const imported = await importPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: masterPassword,
        privateKey: privateKey.replace(/^0x/, '').trim()
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: masterPassword,
        derivationPath: null,
        StoredKeyData: imported.StoredKey.data
    });
    if (!created?.account?.address) throw new Error('Failed to create the wallet.');
    return addWallet(source, created.account.address, {
        name,
        storedKeyInfo: imported.StoredKey,
        mnemonicId,
        derivationPath
    });
}
function createWalletFromMnemonicWords(name, mnemonic, derivationPath = `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`) {
    return addWalletFromMnemonicWords(Wallet/* ImportSource */.Q.LocalGenerated, name, mnemonic, derivationPath);
}
function createWalletFromPrivateKey(name, privateKey, mnemonicId, derivationPath) {
    return addWalletFromPrivateKey(Wallet/* ImportSource */.Q.LocalGenerated, name, privateKey, mnemonicId, derivationPath);
}
function recoverWalletFromMnemonicWords(name, mnemonic, derivationPath = `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`) {
    return addWalletFromMnemonicWords(Wallet/* ImportSource */.Q.UserProvided, name, mnemonic, derivationPath);
}
function recoverWalletFromPrivateKey(name, privateKey, mnemonicId, derivationPath) {
    return addWalletFromPrivateKey(Wallet/* ImportSource */.Q.UserProvided, name, privateKey, mnemonicId, derivationPath);
}
async function recoverWalletFromKeyStoreJSON(name, json, jsonPassword) {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const imported = await importJSON({
        coin: index_esm.api.Coin.Ethereum,
        json,
        keyStoreJsonPassword: jsonPassword,
        name,
        password: masterPassword
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: null,
        name,
        password: masterPassword,
        StoredKeyData: imported.StoredKey.data
    });
    if (!created?.account?.address) throw new Error('Failed to create the wallet.');
    return addWallet(Wallet/* ImportSource */.Q.UserProvided, created.account.address, {
        name,
        storedKeyInfo: imported.StoredKey
    });
}
async function generateAddressFromPrivateKey(privateKey) {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const imported = await importPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        name: '',
        password: masterPassword,
        privateKey: privateKey.replace(/^0x/, '').trim()
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        name: '',
        password: masterPassword,
        derivationPath: null,
        StoredKeyData: imported.StoredKey.data
    });
    if (!created?.account?.address) throw new Error('Failed to create the wallet.');
    return created.account.address;
}
async function generateAddressFromKeyStoreJSON(json, jsonPassword) {
    const masterPassword = await wallet_password/* INTERNAL_getMasterPasswordRequired */.rx();
    const imported = await importJSON({
        coin: index_esm.api.Coin.Ethereum,
        json,
        keyStoreJsonPassword: jsonPassword,
        name: '',
        password: masterPassword
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: null,
        name: '',
        password: masterPassword,
        StoredKeyData: imported.StoredKey.data
    });
    if (!created?.account?.address) throw new Error('Failed to create the wallet.');
    return created.account.address;
}
async function generateAddressFromMnemonicWords(name, mnemonic, derivationPath = `${HD_PATH_WITHOUT_INDEX_ETHEREUM/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.U}/0`) {
    const oneTimePassword = 'MASK';
    const imported = await importMnemonic({
        mnemonic,
        password: oneTimePassword
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: oneTimePassword,
        derivationPath,
        StoredKeyData: imported.StoredKey.data
    });
    return created?.account?.address ?? undefined;
}


/***/ }),

/***/ 79738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D5: () => (/* binding */ setAutoLockTimer),
/* harmony export */   p1: () => (/* binding */ isLocked),
/* harmony export */   tR: () => (/* binding */ lockWallet),
/* harmony export */   xG: () => (/* binding */ unlockWallet)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58190);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40514);
/* harmony import */ var _database_locker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78590);
/* harmony import */ var _password_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87190);



async function isLocked() {
    return await _password_js__WEBPACK_IMPORTED_MODULE_0__/* .hasPassword */ .fN() && !await _password_js__WEBPACK_IMPORTED_MODULE_0__/* .hasVerifiedPassword */ .Pw();
}
async function lockWallet() {
    _password_js__WEBPACK_IMPORTED_MODULE_0__/* .clearPassword */ .Cy();
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletLockStatusSettings */ .Jg.value = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus */ .O.LOCKED;
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .CrossIsolationMessages */ .W.events.walletLockStatusUpdated.sendToAll(true);
}
async function unlockWallet(unverifiedPassword) {
    if (!isLocked()) return true;
    try {
        await _password_js__WEBPACK_IMPORTED_MODULE_0__/* .verifyPasswordRequired */ .tl(unverifiedPassword);
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletLockStatusSettings */ .Jg.value = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus */ .O.UNLOCK;
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .CrossIsolationMessages */ .W.events.walletLockStatusUpdated.sendToAll(false);
        await setAutoLockTimer();
        return true;
    } catch  {
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .CrossIsolationMessages */ .W.events.walletLockStatusUpdated.sendToAll(true);
        return false;
    }
}
let autoLockTimer;
async function setAutoLockTimer() {
    const autoLockDuration = await (0,_database_locker_js__WEBPACK_IMPORTED_MODULE_4__/* .getAutoLockerDuration */ .f)();
    clearTimeout(autoLockTimer);
    if (autoLockDuration <= 0) return;
    autoLockTimer = setTimeout(async ()=>{
        await lockWallet();
    }, autoLockDuration);
}


/***/ }),

/***/ 87190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rx: () => (/* binding */ INTERNAL_getMasterPasswordRequired),
  Cp: () => (/* binding */ changePassword),
  Cy: () => (/* binding */ clearPassword),
  fN: () => (/* binding */ hasPassword),
  ed: () => (/* binding */ hasPasswordWithDefaultOne),
  Pw: () => (/* binding */ hasVerifiedPassword),
  c0: () => (/* binding */ resetPassword),
  xR: () => (/* binding */ setDefaultPassword),
  FY: () => (/* binding */ setPassword),
  uo: () => (/* binding */ validatePassword),
  Gv: () => (/* binding */ verifyPassword),
  tl: () => (/* binding */ verifyPasswordRequired)
});

// UNUSED EXPORTS: INTERNAL_getMasterPassword

// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/validate.js
var validate = __webpack_require__(78040);
;// CONCATENATED MODULE: ./packages/shared-base/src/helpers/getDefaultWalletPassword.ts
function getDefaultWalletPassword() {
    return 'MASK NETWORK'.split('').reverse().join('');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(60307);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/mask/background/services/wallet/database/Plugin.db.ts
var Plugin_db = __webpack_require__(4228);
;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/wallet/database/secret.ts




const SECRET_ID = '0';
function derivePBKDF2(password) {
    return crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(password).buffer, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
}
function deriveAES(key, iv) {
    return crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 100000,
        hash: 'SHA-256'
    }, key, {
        name: 'AES-KW',
        length: 256
    }, false, [
        'wrapKey',
        'unwrapKey'
    ]);
}
function createAES() {
    return crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
}
function encrypt(message, key, iv) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function decrypt(message, key, iv) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function wrapKey(key, wrapKey) {
    return crypto.subtle.wrapKey('raw', key, wrapKey, 'AES-KW');
}
function unwrapKey(key, wrapKey) {
    return crypto.subtle.unwrapKey('raw', key, wrapKey, 'AES-KW', 'AES-GCM', false, [
        'encrypt',
        'decrypt'
    ]);
}
function getIV() {
    return crypto.getRandomValues(new Uint8Array(16)).buffer;
}
async function deriveKey(iv, password) {
    return deriveAES(await derivePBKDF2(password), iv);
}
async function getSecret() {
    return Plugin_db/* walletDatabase */.Y.get('secret', SECRET_ID);
}
/**
 * Return true means a user password (could be the default one) has been set.
 * @returns
 */ async function secret_hasSecret() {
    return !!await getSecret();
}
/**
 * Return true means the user has set a password (could not be the default one).
 * @returns
 */ async function secret_hasSafeSecret() {
    const secret = await getSecret();
    return !!secret && (typeof secret.isUnsafe === 'undefined' || secret.isUnsafe === false);
}
/**
 * Erase the preexisting master secret by force, and create a new one with the given user password.
 * @param password
 */ async function resetSecret(password) {
    await Plugin_db/* walletDatabase */.Y.remove('secret', SECRET_ID);
    const iv = getIV();
    const key = await deriveKey(iv, password);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    const message = (0,v4/* default */.Z)();
    // the primary key never change
    await Plugin_db/* walletDatabase */.Y.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv),
        isUnsafe: password === getDefaultWalletPassword()
    });
}
/**
 * Create a master secret which will be encrypted by the given user password.
 * @param password
 */ async function encryptSecret(password) {
    const secret = await getSecret();
    if (secret) throw new Error('A secret has already been set.');
    const iv = getIV();
    const key = await deriveKey(iv, password);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    const message = (0,v4/* default */.Z)();
    // the master secret never change
    await Plugin_db/* walletDatabase */.Y.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv),
        isUnsafe: password === getDefaultWalletPassword()
    });
}
/**
 * Update the user password which is used for encrypting the master secret.
 * @param oldPassword
 * @param newPassword
 */ async function updateSecret(oldPassword, newPassword) {
    const secret = await getSecret();
    if (!secret) throw new Error('No secret has set before.');
    if (newPassword === getDefaultWalletPassword()) throw new Error('Invalid password.');
    const iv = getIV();
    const message = await decryptSecret(oldPassword);
    const key = await deriveKey(iv, newPassword);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    await Plugin_db/* walletDatabase */.Y.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv),
        isUnsafe: false
    });
}
/**
 * Decrypt the master secret.
 * @param password
 * @returns
 */ async function decryptSecret(password) {
    const secret = await getSecret();
    if (!secret) throw new Error('No secret has set before.');
    try {
        const key = await deriveKey(secret.iv, password);
        const primaryKey = await unwrapKey(secret.key, key);
        return (0,esm/* decodeText */.rj)(await decrypt(secret.encrypted, primaryKey, secret.iv));
    } catch  {
        return '';
    }
}

;// CONCATENATED MODULE: ./packages/mask/background/services/wallet/services/wallet/password.ts



let inMemoryPassword = '';
/** Decrypt the master password and return it. If it fails to decrypt, then return an empty string. */ async function INTERNAL_getMasterPassword() {
    const hasSafeSecret = await secret_hasSafeSecret();
    if (!hasSafeSecret) return decryptSecret(getDefaultWalletPassword());
    return inMemoryPassword ? decryptSecret(inMemoryPassword) : '';
}
/** Decrypt the master password and return it. If it fails to decrypt, then throw an error. */ async function INTERNAL_getMasterPasswordRequired() {
    const password_ = await INTERNAL_getMasterPassword();
    if (!password_) throw new Error('No password set yet or expired.');
    return password_;
}
function INTERNAL_setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    inMemoryPassword = newPassword;
}
/** Force erase the preexisting password and set a new one. */ async function resetPassword(newPassword) {
    validatePasswordRequired(newPassword);
    await resetSecret(newPassword);
    INTERNAL_setPassword(newPassword);
}
/** Set a password when no one has set it before. */ async function setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    await encryptSecret(newPassword);
    INTERNAL_setPassword(newPassword);
}
/** Set the default password if no secret set before. */ async function setDefaultPassword() {
    const hasSecret = await secret_hasSecret();
    if (hasSecret) return;
    const password = getDefaultWalletPassword();
    await encryptSecret(password);
    INTERNAL_setPassword(password);
}
/** Clear the verified password in memory forces the user to re-enter the password. */ async function clearPassword() {
    inMemoryPassword = '';
}
/** Has set a password (could not be the default one). */ async function hasPassword() {
    return secret_hasSafeSecret();
}
/** Has set a password (could be the default one). */ async function hasPasswordWithDefaultOne() {
    return secret_hasSecret();
}
/** Has a verified password in memory. */ async function hasVerifiedPassword() {
    return validatePassword(inMemoryPassword);
}
/** Verify the given password. if successful, keep it in memory. */ async function verifyPassword(unverifiedPassword) {
    if (inMemoryPassword === unverifiedPassword) return true;
    const valid = (0,validate/* default */.Z)(await decryptSecret(unverifiedPassword));
    if (!valid) return false;
    INTERNAL_setPassword(unverifiedPassword);
    return true;
}
/** Verify the given password. if successful, keep it in memory; otherwise, throw an error. */ async function verifyPasswordRequired(unverifiedPassword, message) {
    if (!await verifyPassword(unverifiedPassword)) throw new Error(message ?? 'Wrong password');
    return true;
}
async function changePassword(oldPassword, newPassword, message) {
    validatePasswordRequired(newPassword);
    await verifyPasswordRequired(oldPassword, message ?? 'Incorrect payment password.');
    if (oldPassword === newPassword) throw new Error('Failed to set the same password as the old one.');
    await updateSecret(oldPassword, newPassword);
    INTERNAL_setPassword(newPassword);
}
async function validatePassword(unverifiedPassword) {
    if (!unverifiedPassword) return false;
    if (unverifiedPassword.length < 6) return false;
    if (unverifiedPassword.length > 20) return false;
    return true;
}
async function validatePasswordRequired(unverifiedPassword) {
    if (!validatePassword(unverifiedPassword)) throw new Error('The password is not satisfied the requirement.');
    return true;
}


/***/ }),

/***/ 28677:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./packages/mask/background/database/persona/web.ts + 2 modules
var web = __webpack_require__(70345);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/mask/background/database/utils/openDB.ts
var openDB = __webpack_require__(16234);
// EXTERNAL MODULE: ./packages/mask/background/database/avatar-cache/db.ts
var db = __webpack_require__(43058);
;// CONCATENATED MODULE: ./packages/mask/background/database/avatar-cache/cleanup.ts


async function cleanAvatarDB(anotherList) {
    const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readwrite')('avatars', 'metadata');
    const outdated = await (0,db/* queryAvatarOutdatedDB */.yo)(t, 'lastAccessTime');
    for (const each of outdated){
        anotherList.add(each);
    }
    await (0,db/* deleteAvatarsDB */.ft)(t, Array.from(anotherList.keys()));
}

// EXTERNAL MODULE: ./packages/mask/utils-pure/hmr.ts
var hmr = __webpack_require__(28780);
;// CONCATENATED MODULE: ./packages/mask/background/tasks/Cancellable/CleanProfileAndAvatar.ts




const { signal } = (0,hmr/* hmr */.f)(/* unsupported import.meta.webpackHot */ undefined);
try {
    cleanProfileWithNoLinkedPersona(signal);
} catch  {}
async function cleanRelationDB(anotherList) {
    await (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        for await (const x of t.objectStore('relations')){
            const profileIdentifier = profile/* ProfileIdentifier */.W.from(x.value.profile);
            if (profileIdentifier.isSome()) {
                if (anotherList.has(profileIdentifier.value)) x.delete();
            }
        }
    });
}
async function cleanProfileWithNoLinkedPersona(signal) {
    const timeout = setTimeout(cleanProfileWithNoLinkedPersona, 1000 * 60 * 60 * 24, /** 1 day */ signal);
    signal.addEventListener('abort', ()=>clearTimeout(timeout));
    const cleanedList = new Set();
    const expired = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14);
    /** days */ await (0,web/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        if (signal.aborted) throw new Error('Abort');
        for await (const x of t.objectStore('profiles')){
            if (x.value.linkedPersona) continue;
            if (expired < x.value.updatedAt) continue;
            const id = profile/* ProfileIdentifier */.W.from(x.value.identifier);
            if (id.isSome()) cleanedList.add(id.value);
            await x.delete();
        }
    }, false);
    await cleanAvatarDB(cleanedList);
    await cleanRelationDB(cleanedList);
}


/***/ }),

/***/ 47248:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);
/* harmony import */ var _utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28780);
/* harmony import */ var _utils_injectScript_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75302);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66584);




const { signal } = (0,_utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__/* .hmr */ .f)(/* unsupported import.meta.webpackHot */ undefined);
if (typeof browser.scripting?.registerContentScripts === 'function') {
    await unregisterExistingScripts();
    await browser.scripting.registerContentScripts([
        ...prepareMainWorldScript([
            '<all_urls>'
        ]),
        ...await prepareContentScript([
            '<all_urls>'
        ])
    ]);
    signal.addEventListener('abort', unregisterExistingScripts);
}
async function unregisterExistingScripts() {
    await browser.scripting.unregisterContentScripts().catch(lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
}
function prepareMainWorldScript(matches) {
    if (_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Sniffings */ .Y.is_firefox) return [];
    const result = {
        id: 'injected',
        allFrames: true,
        js: [
            _utils_injectScript_js__WEBPACK_IMPORTED_MODULE_3__/* .maskSDK_URL */ .O5,
            _utils_injectScript_js__WEBPACK_IMPORTED_MODULE_3__/* .injectedScriptURL */ .Gp
        ],
        persistAcrossSessions: false,
        // @ts-expect-error Chrome API
        world: 'MAIN',
        runAt: 'document_start',
        matches
    };
    return [
        result
    ];
}
async function prepareContentScript(matches) {
    const xrayScript = {
        id: 'xray',
        allFrames: true,
        js: [
            _utils_injectScript_js__WEBPACK_IMPORTED_MODULE_3__/* .injectedScriptURL */ .Gp
        ],
        persistAcrossSessions: false,
        // @ts-expect-error Chrome API
        world: 'ISOLATED',
        runAt: 'document_start',
        matches
    };
    const content = {
        id: 'content',
        allFrames: true,
        js: await (0,_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_3__/* .fetchInjectContentScriptList */ .zY)(),
        persistAcrossSessions: false,
        // @ts-expect-error Chrome API
        world: 'ISOLATED',
        runAt: 'document_idle',
        matches
    };
    if (globalThis.navigator?.userAgent.includes('Firefox')) return [
        xrayScript,
        content
    ];
    return [
        content
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 20791:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _utils_pure_hmr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28780);
/* harmony import */ var _utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75302);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66584);



const { signal } = (0,_utils_pure_hmr_js__WEBPACK_IMPORTED_MODULE_0__/* .hmr */ .f)(/* unsupported import.meta.webpackHot */ undefined);
if (typeof browser.scripting?.registerContentScripts === 'undefined') InjectContentScript(signal);
async function onCommittedListener(arg) {
    if (!arg.url.startsWith('http')) return;
    const contains = await browser.permissions.contains({
        origins: [
            arg.url
        ]
    });
    if (!contains) return;
    const detail = {
        runAt: 'document_start',
        frameId: arg.frameId
    };
    const err = (0,_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .ignoreInjectError */ .o7)(arg);
    // don't add await here. we don't want this to block the content script
    if (_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Sniffings */ .Y.is_firefox) {
        browser.tabs.executeScript(arg.tabId, {
            ...detail,
            file: _utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .injectedScriptURL */ .Gp
        }).catch(err);
    } else {
        (0,_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .injectUserScriptMV2 */ .oA)(_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .injectedScriptURL */ .Gp).then(async (code)=>browser.tabs.executeScript(arg.tabId, {
                ...detail,
                code
            })).catch(err);
        (0,_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .injectUserScriptMV2 */ .oA)(_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .maskSDK_URL */ .O5).then(async (code)=>browser.tabs.executeScript(arg.tabId, {
                ...detail,
                code
            })).catch(err);
    }
    (0,_utils_injectScript_js__WEBPACK_IMPORTED_MODULE_1__/* .evaluateContentScript */ .yQ)(arg.tabId, arg.frameId).catch(err);
}
async function InjectContentScript(signal) {
    browser.webNavigation.onCommitted.addListener(onCommittedListener);
    signal.addEventListener('abort', ()=>browser.webNavigation.onCommitted.removeListener(onCommittedListener));
}


/***/ }),

/***/ 26775:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/mask/utils-pure/hmr.ts
var hmr = __webpack_require__(28780);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/settings/index.ts
var src_settings = __webpack_require__(28668);
;// CONCATENATED MODULE: ./packages/mask/shared/legacy-settings/listener.ts


function ToBeListened() {
    return {
        telemetrySettings: src_settings/* telemetrySettings */.T,
        appearanceSettings: settings/* appearanceSettings */.OF,
        pluginIDSettings: settings/* pluginIDsSettings */.Mo,
        languageSettings: settings/* languageSettings */.pQ,
        currentPersonaIdentifier: settings/* currentPersonaIdentifier */.cn
    };
}

;// CONCATENATED MODULE: ./packages/mask/background/tasks/Cancellable/SettingsListener.ts



const { signal } = (0,hmr/* hmr */.f)(/* unsupported import.meta.webpackHot */ undefined);
const listeners = ToBeListened();
const keys = Object.keys(listeners);
for (const key of keys){
    signal.addEventListener('abort', listeners[key].addListener((data)=>Messages/* MaskMessages */.q.events[key].sendToAll(data)));
}


/***/ }),

/***/ 4382:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _masknet_plugin_infra_background_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90062);
/* harmony import */ var _database_plugin_db_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67144);
/* harmony import */ var _shared_plugin_infra_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31418);
/* harmony import */ var _utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28780);
/* harmony import */ var _services_settings_old_settings_accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51477);
/* harmony import */ var _services_helper_request_permission_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34143);






const { signal } = (0,_utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__/* .hmr */ .f)(/* unsupported import.meta.webpackHot */ undefined);
(0,_masknet_plugin_infra_background_worker__WEBPACK_IMPORTED_MODULE_1__/* .startPluginWorker */ .H)((0,_shared_plugin_infra_host_js__WEBPACK_IMPORTED_MODULE_2__/* .createPluginHost */ .R)(signal, createWorkerContext, _services_settings_old_settings_accessor_js__WEBPACK_IMPORTED_MODULE_3__/* .getPluginMinimalModeEnabled */ .CE, _services_helper_request_permission_js__WEBPACK_IMPORTED_MODULE_4__/* .hasHostPermission */ .yy));
function createWorkerContext(pluginID, def, signal) {
    let storage = undefined;
    return {
        ...(0,_shared_plugin_infra_host_js__WEBPACK_IMPORTED_MODULE_2__/* .createSharedContext */ .y)(pluginID, signal),
        getDatabaseStorage () {
            return storage || (storage = (0,_database_plugin_db_index_js__WEBPACK_IMPORTED_MODULE_5__/* .createPluginDatabase */ .X)(pluginID, signal));
        }
    };
}


/***/ }),

/***/ 92280:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/store.ts
var store = __webpack_require__(50754);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/runtime/runtime.ts + 3 modules
var runtime_runtime = __webpack_require__(55895);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/runtime/runner.ts
var runner = __webpack_require__(1951);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/utils/url.ts
var url = __webpack_require__(54217);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/peer-dependencies/index.ts + 2 modules
var peer_dependencies = __webpack_require__(46762);
// EXTERNAL MODULE: ./node_modules/.pnpm/async-call-rpc@6.3.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(56499);
// EXTERNAL MODULE: ./packages/shared-base/src/serializer/index.ts + 3 modules
var serializer = __webpack_require__(40464);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/utils/manifest.ts
var utils_manifest = __webpack_require__(45549);
;// CONCATENATED MODULE: ./packages/sandboxed-plugin-runtime/src/background/index.ts







// TODO: return type should be Plugin.Worker.DatabaseStorage
class BackgroundPluginHost extends runner/* PluginRunner */.n {
    constructor(hooks, allowLocalOverrides, signal = new AbortController().signal){
        super(hooks, allowLocalOverrides, signal);
    }
    async HostStartPlugin(id, isLocal, signal) {
        const manifest = await this.hooks.fetchManifest(id, isLocal);
        if (!(0,utils_manifest/* isManifest */.f)(manifest)) throw new TypeError(`${id} does not have a valid manifest.`);
        const runtime = new runtime_runtime/* PluginRuntime */.J(id, isLocal ? `local-plugin-${id}` : `plugin-${id}`, {}, signal);
        (0,peer_dependencies/* addPeerDependencies */.b)(runtime);
        runtime.addNamespaceModule('@masknet/plugin/worker', {
            registerBackupHandler (handler) {
                if (!manifest.contributes?.backup) {
                    throw new Error('Refuse to register the backup handler because manifest.contributes.backup is not true.');
                }
                const { onBackup, onRestore } = handler;
                if (typeof onBackup !== 'function' || typeof onRestore !== 'function') throw new TypeError('BackupHandler must have onBackup and onRestore functions.');
                instance.backupHandler = {
                    onBackup,
                    onRestore
                };
                console.debug(`${id} attached a backup handler.`);
            },
            taggedStorage: this.hooks.createTaggedStorage(id, signal)
        });
        const { background, rpc, rpcGenerator } = manifest.entries || {};
        const instance = {
            id,
            isLocal,
            runtime
        };
        await this.bindRPC(instance, rpc, rpcGenerator);
        if (background) await runtime.imports((0,url/* getURL */.A)(id, background, isLocal));
        await this.startService(instance, !!rpc, !!rpcGenerator);
        return instance;
    }
    async bindRPC(instance, rpc, rpcGenerator) {
        if (!rpc && !rpcGenerator) return;
        const rpcReExports = [];
        if (rpc) rpcReExports.push({
            exportAllFrom: (0,url/* getURL */.A)(instance.id, rpc, instance.isLocal),
            as: 'worker'
        });
        if (rpcGenerator) rpcReExports.push({
            exportAllFrom: (0,url/* getURL */.A)(instance.id, rpcGenerator, instance.isLocal),
            as: 'workerGenerator'
        });
        instance.runtime.addReExportModule('@masknet/plugin/utils/rpc', ...rpcReExports);
    }
    async startService(instance, hasRPC, hasRPCGenerator) {
        const rpcReExport = await instance.runtime.imports('@masknet/plugin/utils/rpc');
        if (hasRPC) {
            (0,full/* AsyncCall */.LE)(rpcReExport.worker, {
                channel: this.hooks.createRpcChannel(instance.id, this.signal),
                serializer: serializer/* serializer */.G,
                log: true,
                thenable: false
            });
        }
        if (hasRPCGenerator) {
            (0,full/* AsyncGeneratorCall */.rc)(rpcReExport.workerGenerator, {
                channel: this.hooks.createRpcGeneratorChannel(instance.id, this.signal),
                serializer: serializer/* serializer */.G,
                log: true,
                thenable: false
            });
        }
    }
}

// EXTERNAL MODULE: ./packages/mask/utils-pure/hmr.ts
var hmr = __webpack_require__(28780);
// EXTERNAL MODULE: ./packages/mask/background/database/plugin-db/wrap-plugin-database.ts + 1 modules
var wrap_plugin_database = __webpack_require__(67144);
// EXTERNAL MODULE: ./packages/mask/shared/sandboxed-plugin/host-api.ts
var host_api = __webpack_require__(1197);
;// CONCATENATED MODULE: ./packages/mask/background/tasks/Cancellable/StartSandboxedPluginHost.ts







const { signal } = (0,hmr/* hmr */.f)(/* unsupported import.meta.webpackHot */ undefined);
let hot;
if (false) {}
if (src/* Flags */.v.sandboxedPluginRuntime) {
    const host = new BackgroundPluginHost({
        ...(0,host_api/* createHostAPIs */.G)(true),
        createTaggedStorage: wrap_plugin_database/* createPluginDatabase */.X
    }, "production" === 'development', signal);
    host.__builtInPluginInfraBridgeCallback__ = __builtInPluginInfraBridgeCallback__;
    host.onPluginListUpdate();
}
function __builtInPluginInfraBridgeCallback__(id) {
    let instance;
    const base = {
        enableRequirement: {
            supports: {
                type: 'opt-out',
                sites: {}
            },
            target: 'beta'
        },
        ID: id,
        // TODO: read i18n files
        // TODO: read the name from the manifest
        name: {
            fallback: '__generated__bridge__plugin__' + id
        },
        experimentalMark: true
    };
    const def = {
        ...base,
        Worker: {
            hotModuleReload: (reload)=>hot?.set(id, reload),
            async load () {
                return {
                    default: worker
                };
            }
        }
    };
    const worker = {
        ...base,
        init: async (signal, context)=>{
            const [i] = await this.startPlugin_bridged(id, signal);
            instance = i;
        },
        backup: {
            async onBackup () {
                if (!instance?.backupHandler) return esm.None;
                const data = await instance.backupHandler.onBackup();
                if (data === esm.None) return esm.None;
                if (!(data instanceof esm.Some)) throw new TypeError('Backup handler must return Some(data) or None');
                return data;
            },
            onRestore (data) {
                return esm.Result.wrapAsync(async ()=>{
                    await instance?.backupHandler?.onRestore(data);
                });
            }
        }
    };
    if (hot?.has(id)) hot.get(id)(def.Worker.load());
    else (0,store/* registerPlugin */.fo)(def);
}


/***/ }),

/***/ 22782:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40514);
/* harmony import */ var _utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28780);
/* harmony import */ var _services_wallet_services_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79738);



const { signal } = (0,_utils_pure_index_js__WEBPACK_IMPORTED_MODULE_0__/* .hmr */ .f)(/* unsupported import.meta.webpackHot */ undefined);
// Reset timer
_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CrossIsolationMessages */ .W.events.walletLockStatusUpdated.on(_services_wallet_services_index_js__WEBPACK_IMPORTED_MODULE_2__/* .setAutoLockTimer */ .D5, {
    signal
});


/***/ }),

/***/ 42521:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* deferred harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(2574);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};
// ALL IMPORTS MUST BE DEFERRED

function openWelcome() {
    const welcome = '/setup/welcome';
    browser.tabs.create({
        url: browser.runtime.getURL(`dashboard.html#${welcome}`)
    });
}
browser.runtime.onInstalled.addListener(async (detail)=>{
    if (detail.reason === 'install') {
        openWelcome();
    } else if (detail.reason === 'update') {
        const connect = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 86285));
        const groups = await connect.getOriginsWithoutPermission();
        if (groups.length) openWelcome();
        if (globalThis.localStorage) {
            const localStorage = globalThis.localStorage;
            const backupPassword = localStorage.getItem('backupPassword');
            if (backupPassword) {
                const backupMethod = localStorage.getItem('backupMethod');
                _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__.a/* .PersistentStorages */ ._H.Settings.storage.backupConfig.setValue({
                    backupPassword,
                    email: localStorage.getItem('email'),
                    phone: localStorage.getItem('phone'),
                    cloudBackupAt: backupMethod && backupMethod === 'cloud' ? localStorage.getItem('backupAt') : null,
                    localBackupAt: backupMethod && backupMethod === 'local' ? localStorage.getItem('backupAt') : null,
                    cloudBackupMethod: null
                });
            }
            // remove old data after migrate
            localStorage.removeItem('backupPassword');
            localStorage.removeItem('backupMethod');
            localStorage.removeItem('email');
            localStorage.removeItem('phone');
            localStorage.removeItem('backupAt');
        }
    }
});


/***/ }),

/***/ 53616:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62649);


function checkMessages(messages) {
    const pendingTasks = messages.filter((x)=>x.state === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .MessageStateType */ .Rq.NOT_DEPEND).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime());
    const length = Math.min(pendingTasks.length, 99);
    const action = browser.action || browser.browserAction;
    action.setBadgeBackgroundColor({
        color: '#D92F0E'
    });
    action.setBadgeText({
        text: length ? length.toString() : ''
    });
}
async function watchTasks() {
    const { storage } = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PersistentStorages */ ._H.Web3.createSubScope(`${_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM}_Message`, {
        messages: {}
    });
    await storage.messages.initializedPromise;
    checkMessages(Object.values(storage.messages.value));
    storage.messages.subscription.subscribe(()=>{
        const messages = Object.values(storage.messages.value);
        checkMessages(messages);
    });
}
watchTasks();


/***/ }),

/***/ 43047:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);

console.log(_masknet_flags__WEBPACK_IMPORTED_MODULE_0__/* .env */ .O);


/***/ }),

/***/ 16131:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _Cancellable_InjectContentScripts_imperative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20791);
/* harmony import */ var _Cancellable_InjectContentScripts_declarative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47248);
/* harmony import */ var _Cancellable_CleanProfileAndAvatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28677);
/* harmony import */ var _Cancellable_SettingsListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26775);
/* harmony import */ var _Cancellable_StartPluginHost_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4382);
/* harmony import */ var _Cancellable_StartSandboxedPluginHost_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92280);
/* harmony import */ var _Cancellable_WalletAutoLock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cancellable_InjectContentScripts_declarative_js__WEBPACK_IMPORTED_MODULE_1__]);
_Cancellable_InjectContentScripts_declarative_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







 undefined;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44773:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _setup_hmr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16131);
/* harmony import */ var _NotCancellable_PrintBuildFlags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43047);
/* harmony import */ var _NotCancellable_PendingTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_setup_hmr_js__WEBPACK_IMPORTED_MODULE_0__]);
_setup_hmr_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// NotCancellable tasks here



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ __deprecated__getStorage),
/* harmony export */   X: () => (/* binding */ __deprecated__setStorage)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76089);


/**
 * Make sure that the storage is used serially.
 */ class MutexStorage {
    tasks = [];
    locked = false;
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    async continue() {
        if (!this.locked) this.tasks.shift()?.();
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage)=>{
                if (e) reject(e);
                else resolve(storage);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.get(key), 5000, `Get ${key} timeout in mutex storage.`);
                    callback(null, stored?.[key]);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async setStorage(key, value) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e)=>{
                if (e) reject(e);
                else resolve();
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    await (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.set({
                        [key]: value
                    }), 5000, `Set ${key} to ${value} timeout in mutex storage.`);
                    callback(null);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
}
const storage = new MutexStorage();
/**
 * Avoid using this.
 * @deprecated
 * @internal
 */ async function __deprecated__getStorage(key) {
    if (typeof browser === 'undefined') return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    if (!browser.storage) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    const value = await storage.getStorage(key);
    if (value === undefined) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_1__.Some)(value);
}
/**
 * Avoid using this.
 * @deprecated
 * @internal
 */ async function __deprecated__setStorage(key, value) {
    if (typeof browser === 'undefined') return;
    if (!browser.storage) return;
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 75302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gp: () => (/* binding */ injectedScriptURL),
/* harmony export */   O5: () => (/* binding */ maskSDK_URL),
/* harmony export */   o7: () => (/* binding */ ignoreInjectError),
/* harmony export */   oA: () => (/* binding */ injectUserScriptMV2),
/* harmony export */   yQ: () => (/* binding */ evaluateContentScript),
/* harmony export */   zY: () => (/* binding */ fetchInjectContentScriptList)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43434);

const injectedScriptURL = '/js/injected-script.js';
const maskSDK_URL = '/js/mask-sdk.js';
const contentScriptURL = '/generated__content__script.html';
async function evaluateContentScript(tabId, frameId) {
    if (browser.scripting) {
        if (tabId === undefined) {
            const activeTab = await browser.tabs.query({
                active: true
            });
            if (!activeTab.length) return;
            tabId = activeTab[0].id;
        }
        if (!tabId) return;
        await browser.scripting.executeScript({
            target: {
                tabId,
                frameIds: frameId ? [
                    frameId
                ] : undefined
            },
            files: await fetchInjectContentScriptList(),
            world: 'ISOLATED'
        });
    } else {
        for (const script of (await fetchInjectContentScriptList())){
            await browser.tabs.executeScript(tabId, {
                file: script,
                frameId,
                runAt: 'document_idle'
            });
        }
    }
}
async function fetchInjectContentScriptList_raw() {
    const contentScripts = [];
    const html = await fetch(contentScriptURL).then((x)=>x.text());
    // We're not going to use DOMParser because it is not available in MV3.
    Array.from(html.matchAll(/<script src="([\w./-]+)"><\/script>/g)).forEach((script)=>contentScripts.push(new URL(script[1], browser.runtime.getURL('')).pathname));
    const body = html.match(/<body>(.+)<\/body>/)[1];
    body.replaceAll('<script defer src="', '').replaceAll('></script>', '').split('"').forEach((script)=>{
        if (!script) return;
        contentScripts.push(new URL(script, browser.runtime.getURL('')).pathname);
    });
    return contentScripts;
}
const fetchInjectContentScriptList =  false ? 0 : (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(fetchInjectContentScriptList_raw);
async function injectUserScriptMV2_raw(url) {
    try {
        const code = await fetch(url).then((x)=>x.text());
        return `{
            const script = document.createElement("script")
            script.innerHTML = ${JSON.stringify(code)}
            document.documentElement.appendChild(script)
        }`;
    } catch (error) {
        console.error(error);
        return `console.log('[Mask] User script ${url} failed to load.')`;
    }
}
const injectUserScriptMV2 =  false ? 0 : (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(injectUserScriptMV2_raw);
function ignoreInjectError(arg) {
    return (error)=>{
        const ignoredErrorMessages = [
            'non-structured-clonable data',
            'No tab with id'
        ];
        if (ignoredErrorMessages.some((x)=>error.message.includes(x))) return;
        console.error('[Mask] Inject error', error.message, arg, error);
    };
}


/***/ }),

/***/ 47264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ }),

/***/ 90062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ startPluginWorker),
/* harmony export */   J: () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* harmony import */ var _utils_rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56142);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70771);


const { startDaemon, activated } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.Worker, (id, signal)=>({
        startGeneratorService (impl) {
            (0,_utils_rpc_js__WEBPACK_IMPORTED_MODULE_1__/* .startPluginGeneratorRPC */ .wx)(id, signal, impl);
        },
        startService (impl) {
            (0,_utils_rpc_js__WEBPACK_IMPORTED_MODULE_1__/* .startPluginRPC */ .uG)(id, signal, impl);
        }
    }));
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ getPluginMessage),
/* harmony export */   kO: () => (/* binding */ DOMAIN_RPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceImplementationOfCreatePluginMessage__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61530);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40464);


/** @internal */ const DOMAIN_RPC = Symbol('create RPC instead of normal message');
/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = getPluginMessage(PLUGIN_ID)
 */ let getPluginMessage = (pluginID, type)=>{
    const domain = (type === DOMAIN_RPC ? '@plugin-rpc/' : '@plugin/') + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .WebExtensionMessage */ .$({
        domain
    });
    const events = messageCenter.events;
    messageCenter.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .G;
    cache.set(domain, events);
    return events;
};
function __workaround__replaceImplementationOfCreatePluginMessage__(newImpl) {
    getPluginMessage = newImpl;
}
const cache = new Map() // TODO: this type should be defined here, not shared-base
;


/***/ }),

/***/ 56142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uG: () => (/* binding */ startPluginRPC),
/* harmony export */   wX: () => (/* binding */ getPluginRPCGenerator),
/* harmony export */   wx: () => (/* binding */ startPluginGeneratorRPC),
/* harmony export */   x8: () => (/* binding */ getPluginRPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceIsBackground__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88228);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40464);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14414);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9898);





const log = {
    type: 'pretty',
    requestReplay: "production" === 'development',
    sendLocalStack: "production" === 'development'
};
let isBackground = ()=>(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .isEnvironment */ .hE)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
function __workaround__replaceIsBackground__(f) {
    isBackground = f;
}
function getPluginRPCInternal(cache, pluginID, starter, entry) {
    if (cache.has(pluginID)) return cache.get(pluginID);
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const rpc = starter(Object.create(null), {
        key: `@plugin/${pluginID}`,
        channel: {
            on: message[entry].on,
            send: message[entry].sendToBackgroundPage
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
    cache.set(pluginID, rpc);
    return rpc;
}
const cache = new Map();
const cacheGenerator = new Map();
function getPluginRPC(pluginID) {
    if (isBackground()) startPluginRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cache, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
function getPluginRPCGenerator(pluginID) {
    if (isBackground()) startPluginGeneratorRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cacheGenerator, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
}
function startPluginRPCInternal(cache, pluginID, signal, impl, starter, entry) {
    if (!isBackground()) throw new Error('Cannot start RPC in the UI.');
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const delegate = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getOrUpdateLocalImplementationHMR */ .K)(()=>impl, message[entry]);
    if (cache.has(pluginID)) return;
    cache.set(pluginID, delegate);
    starter(delegate, {
        key: pluginID,
        channel: {
            on: message[entry].on,
            send: message[entry].sendByBroadcast
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
}
/** @internal */ function startPluginRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cache, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
/** @internal */ function startPluginGeneratorRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cacheGenerator, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
} // RPC
 // Generator


/***/ }),

/***/ 64455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P7: () => (/* binding */ LanguageOptions),
/* harmony export */   um: () => (/* binding */ Appearance),
/* harmony export */   z4: () => (/* binding */ TradeProvider)
/* harmony export */ });
/* unused harmony export SupportedLanguages */
var /** Unix timestamp */ /** Unix timestamp */ Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));
var TradeProvider;
(function(TradeProvider) {
    TradeProvider[TradeProvider["UNISWAP_V2"] = 0] = "UNISWAP_V2";
    TradeProvider[TradeProvider["ZRX"] = 1] = "ZRX";
    TradeProvider[TradeProvider["SUSHISWAP"] = 2] = "SUSHISWAP";
    TradeProvider[TradeProvider["QUICKSWAP"] = 5] = "QUICKSWAP";
    TradeProvider[TradeProvider["PANCAKESWAP"] = 6] = "PANCAKESWAP";
    TradeProvider[TradeProvider["DODO"] = 7] = "DODO";
    TradeProvider[TradeProvider["UNISWAP_V3"] = 8] = "UNISWAP_V3";
    TradeProvider[TradeProvider["BANCOR"] = 9] = "BANCOR";
    TradeProvider[TradeProvider["OPENOCEAN"] = 10] = "OPENOCEAN";
    TradeProvider[TradeProvider["WANNASWAP"] = 11] = "WANNASWAP";
    TradeProvider[TradeProvider["TRISOLARIS"] = 12] = "TRISOLARIS";
    TradeProvider[TradeProvider["TRADERJOE"] = 13] = "TRADERJOE";
    TradeProvider[TradeProvider["PANGOLIN"] = 14] = "PANGOLIN";
    TradeProvider[TradeProvider["MDEX"] = 15] = "MDEX";
    TradeProvider[TradeProvider["ARTHSWAP"] = 19] = "ARTHSWAP";
    TradeProvider[TradeProvider["VERSA"] = 20] = "VERSA";
    TradeProvider[TradeProvider["ASTAREXCHANGE"] = 21] = "ASTAREXCHANGE";
    TradeProvider[TradeProvider["YUMISWAP"] = 22] = "YUMISWAP";
})(TradeProvider || (TradeProvider = {}));
var /** Supported language settings */ LanguageOptions;
(function(LanguageOptions) {
    LanguageOptions["__auto__"] = 'auto';
    LanguageOptions["enUS"] = 'en-US';
    LanguageOptions["zhCN"] = 'zh-CN';
    LanguageOptions["zhTW"] = 'zh-TW';
    LanguageOptions["koKR"] = 'ko-KR';
    LanguageOptions["jaJP"] = 'ja-JP';
})(LanguageOptions || (LanguageOptions = {}));
var /** Supported display languages */ SupportedLanguages/** Base on response of coingecko's token price API */ ;
(function(SupportedLanguages) {
    SupportedLanguages["enUS"] = 'en-US';
    SupportedLanguages["zhCN"] = 'zh-CN';
    SupportedLanguages["zhTW"] = 'zh-TW';
    SupportedLanguages["koKR"] = 'ko-KR';
    SupportedLanguages["jaJP"] = 'ja-JP';
})(SupportedLanguages || (SupportedLanguages = {}));


/***/ }),

/***/ 6938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PY: () => (/* binding */ createBulkSettings),
/* harmony export */   TI: () => (/* binding */ createGlobalSettings),
/* harmony export */   kQ: () => (/* binding */ setupLegacySettingsAtBackground)
/* harmony export */ });
/* unused harmony exports setupLegacySettingsAtNonBackground, createNSSettingsJSON */
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65734);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88547);



let getValue = async ()=>{
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
};
function setupLegacySettingsAtBackground(getStorage, setStorage) {
    getValue = getStorage;
    _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_set.on(async (payload)=>{
        const { key, value } = payload;
        await setStorage(key, value);
        _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_broadcast.sendToAll({
            key,
            value
        });
    });
}
function setupLegacySettingsAtNonBackground(getStorage) {
    getValue = getStorage;
}
function setupValueRef(settings, key) {
    let duringInitialValueSet = false;
    let duringBroadcastSet = false;
    Promise.resolve().then(()=>getValue(key)).then((value)=>{
        duringInitialValueSet = true;
        if (value.isSome()) settings.value = value.value;
        else if (settings instanceof _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td) settings.nowReady?.();
    }).finally(()=>duringInitialValueSet = false);
    _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_broadcast.on((payload)=>{
        if (key !== payload.key) return;
        duringBroadcastSet = true;
        settings.value = payload.value;
        duringBroadcastSet = false;
    });
    settings.addListener((newVal)=>{
        if (duringInitialValueSet || duringBroadcastSet) return;
        _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_set.sendToAll({
            key,
            value: newVal
        });
    });
    return settings;
}
/** @deprecated */ function createNSSettingsJSON(ns, key, value) {
    const settings = new ValueRefJSON(value);
    setupValueRef(settings, `${ns}+${key}`);
    return settings;
}
/** @deprecated */ function createGlobalSettings(key, value, comparer) {
    const settings = new _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td(value, comparer);
    setupValueRef(settings, `settings+${key}`);
    return settings;
}
/** @deprecated */ function createBulkSettings(settingsKey, defaultValue, comparer) {
    const item = {
        __proto__: null
    };
    _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_bulkDiscoverNS.on((ns)=>{
        if (ns.startsWith('plugin:') || settingsKey === 'pluginsEnabled') return;
        setup(ns);
    });
    function setup(ns) {
        if (ns in item) return false;
        const settings = new _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td(defaultValue, comparer);
        setupValueRef(settings, `${ns}+${settingsKey}`);
        item[ns] = settings;
        return true;
    }
    return new Proxy(item, {
        get (target, ns) {
            if (typeof ns !== 'string') return undefined;
            // if we're the first one to access this property, notify all others to create this property too.
            if (setup(ns)) {
                target[ns].readyPromise.then(()=>_Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_bulkDiscoverNS.sendToAll(ns));
            }
            return target[ns];
        }
    });
}


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   Ct: () => (/* binding */ userGuideStatus),
/* harmony export */   Fw: () => (/* binding */ InjectSwitchSettings),
/* harmony export */   Jg: () => (/* binding */ currentMaskWalletLockStatusSettings),
/* harmony export */   Mo: () => (/* binding */ pluginIDsSettings),
/* harmony export */   OF: () => (/* binding */ appearanceSettings),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   fL: () => (/* binding */ getCurrentPluginMinimalMode),
/* harmony export */   ic: () => (/* binding */ setCurrentPluginMinimalMode),
/* harmony export */   pQ: () => (/* binding */ languageSettings),
/* harmony export */   v2: () => (/* binding */ switchLogoSettings)
/* harmony export */ });
/* unused harmony exports userGuideFinished, sayHelloShowed, userPinExtension, dismissVerifyNextID, decentralizedSearchSettings */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85094);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64455);
/* harmony import */ var _createSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6938);
/* harmony import */ var _i18n_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50139);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75093);
/* harmony import */ var _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24835);
/* harmony import */ var _types_Wallet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58190);
/* harmony import */ var _Site_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77953);
/* harmony import */ var _types_SwitchLogo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73835);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88547);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19477);










const languageSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__);
languageSettings.addListener(_i18n_index_js__WEBPACK_IMPORTED_MODULE_2__/* .updateLanguage */ .BF);
const pluginIDsSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('PluginIdBySite', {
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Twitter]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Facebook]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Instagram]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.OpenSea]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Minds]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Localhost]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Mirror]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.App]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ExtensionSite */ .v.Popup]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ExtensionSite */ .v.Dashboard]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM
}, lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const InjectSwitchSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('InjectSwitchBySite', true);
const currentMaskWalletLockStatusSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .P.Wallet}+maskWalletLockStatus`, _types_Wallet_js__WEBPACK_IMPORTED_MODULE_6__/* .LockStatus */ .O.INIT);
const currentSetupGuideStatus = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('userGuideStatus', '');
const userGuideFinished = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('userGuideFinished', false);
const sayHelloShowed = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('sayHelloShowed', false);
const userPinExtension = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('userPinExtension', false);
const dismissVerifyNextID = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('dismissVerifyNextID', {}, lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const decentralizedSearchSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('decentralizedSearchSettings', true);
const appearanceSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .Appearance */ .um.default);
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSiteAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsExtensionPage().find((x) => x.ID === PLUGIN_ID)` instead
 * @deprecated DO NOT EXPORT THIS
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const pluginMinimalModeReversed = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('pluginsEnabled', true);
function getCurrentPluginMinimalMode(id) {
    if (pluginMinimalModeReversed['plugin:' + id].value === 'enabled') return _types_js__WEBPACK_IMPORTED_MODULE_10__/* .BooleanPreference */ .e.False;
    if (pluginMinimalModeReversed['plugin:' + id].value === false) return _types_js__WEBPACK_IMPORTED_MODULE_10__/* .BooleanPreference */ .e.True;
    return _types_js__WEBPACK_IMPORTED_MODULE_10__/* .BooleanPreference */ .e.Default;
}
function setCurrentPluginMinimalMode(id, value) {
    if (value === _types_js__WEBPACK_IMPORTED_MODULE_10__/* .BooleanPreference */ .e.Default) pluginMinimalModeReversed['plugin:' + id].value = true;
    else if (value === _types_js__WEBPACK_IMPORTED_MODULE_10__/* .BooleanPreference */ .e.True) pluginMinimalModeReversed['plugin:' + id].value = false;
    else if (value === _types_js__WEBPACK_IMPORTED_MODULE_10__/* .BooleanPreference */ .e.False) pluginMinimalModeReversed['plugin:' + id].value = 'enabled';
}
const currentPersonaIdentifier = new _index_js__WEBPACK_IMPORTED_MODULE_7__/* .ValueRefWithReady */ .td(undefined);
{
    const currentPersonaIdentifier_raw = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '');
    currentPersonaIdentifier.addListener((newVal)=>{
        currentPersonaIdentifier_raw.value = newVal?.toText() ?? '';
    });
    currentPersonaIdentifier_raw.addListener((newVal)=>{
        currentPersonaIdentifier.value = newVal ? _index_js__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .o.from(newVal).unwrap() : undefined;
    });
    currentPersonaIdentifier_raw.readyPromise.then(()=>{
        const value = currentPersonaIdentifier_raw.value;
        currentPersonaIdentifier.value = value ? _index_js__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .o.from(value).unwrap() : undefined;
    });
}try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__;
} catch  {}
const switchLogoSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('SwitchLogo', _types_SwitchLogo_js__WEBPACK_IMPORTED_MODULE_9__/* .SwitchLogoType */ .O.New);


/***/ }),

/***/ 52033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ek: () => (/* binding */ NUMERIC_INPUT_REGEXP_PATTERN),
/* harmony export */   Nu: () => (/* binding */ EMPTY_OBJECT),
/* harmony export */   bH: () => (/* binding */ DEFAULT_PLUGIN_PUBLISHER),
/* harmony export */   rP: () => (/* binding */ EMPTY_LIST)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_NAME, NEXT_ID_PLATFORM_SOCIAL_MEDIA_MAP, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, MEDIA_VIEWER_URL, MAX_WALLET_LIMIT, UNIT_TEST_ADDRESS, UNIT_TEST_ERC20_ADDRESS */
/* harmony import */ var _NextID_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95766);
/* harmony import */ var _Site_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77953);


const SOCIAL_MEDIA_NAME = {
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter]: 'X',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Facebook]: 'Facebook',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Minds]: 'Minds',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Instagram]: 'Instagram',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.OpenSea]: 'OpenSea',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Localhost]: 'Localhost',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Mirror]: 'Mirror'
};
const NEXT_ID_PLATFORM_SOCIAL_MEDIA_MAP = {
    [_NextID_types_js__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.Twitter]: _Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter
};
const SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID = [
    _Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter
];
const MEDIA_VIEWER_URL = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;
// Not allow 0000.1, 000100
const NUMERIC_INPUT_REGEXP_PATTERN = '^[1-9]|^0(?![0-9])[.,]?[0-9]*$';
const UNIT_TEST_ADDRESS = '0x732b8e42455f79F3072fe18222A7E926588B4747';
const UNIT_TEST_ERC20_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
const DEFAULT_PLUGIN_PUBLISHER = {
    name: {
        fallback: 'Mask Network'
    },
    link: 'https://mask.io/'
};


/***/ }),

/***/ 14414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getOrUpdateLocalImplementationHMR)
/* harmony export */ });
const cache = new WeakMap();
/**
 * This function provides a localImplementation that has HMR support.
 * To update, call this function with the SAME key object.
 * @param impl The implementation. Can be an async function.
 * @param key The reference object that must be the same if you're updating.
 */ async function getOrUpdateLocalImplementationHMR(impl, key) {
    if (true) return impl();
    const result = await impl();
    if (!cache.has(key)) cache.set(key, Object.create(null));
    const localImpl = cache.get(key);
    Object.setPrototypeOf(localImpl, result);
    return localImpl;
}


/***/ }),

/***/ 26424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H_: () => (/* binding */ fromHex),
/* harmony export */   NC: () => (/* binding */ toHex),
/* harmony export */   mz: () => (/* binding */ fromBase64URL),
/* harmony export */   s3: () => (/* binding */ toBase64),
/* harmony export */   wi: () => (/* binding */ toBase64URL)
/* harmony export */ });
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85907);

function fromBase64URL(x) {
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.FromBase64Url(x));
}
function toBase64URL(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.ToBase64Url(x);
}
function toBase64(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.ToBase64(x);
}
function toHex(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.ToHex(x);
}
function fromHex(x) {
    if (x.startsWith('0x')) x = x.slice(2);
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.FromHex(x));
}


/***/ }),

/***/ 28129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qY: () => (/* binding */ createConstantSubscription),
/* harmony export */   v_: () => (/* binding */ createSubscriptionFromValueRef)
/* harmony export */ });
/* unused harmony exports getSubscriptionCurrentValue, createSubscriptionFromAsync, createSubscriptionFromAsyncSuspense, mapSubscription, mergeSubscription, SubscriptionDebug */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);


async function getSubscriptionCurrentValue(getSubscription, retries = 3) {
    const getValue = ()=>{
        return getSubscription()?.getCurrentValue();
    };
    const createReader = async ()=>{
        try {
            return getValue();
        } catch (error) {
            if (!(error instanceof Promise)) return;
            await error;
            return getValue();
        }
    };
    const createReaders = Array.from({
        length: retries
    }).fill(()=>createReader());
    for (const createReader of createReaders){
        try {
            return await createReader();
        } catch  {
            continue;
        }
    }
    return;
}
function createConstantSubscription(value) {
    return {
        getCurrentValue: ()=>value,
        subscribe: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange, signal) {
    const { getCurrentValue, subscribe } = createSubscriptionFromAsyncSuspense(f, onChange, signal);
    return {
        subscribe,
        getCurrentValue: ()=>{
            try {
                return getCurrentValue();
            } catch  {
                return defaultValue;
            }
        }
    };
}
function createSubscriptionFromAsyncSuspense(f, onChange, signal) {
    const { subscribe, trigger } = getEventTarget();
    let value = None;
    const setter = (v)=>{
        value = Some(v);
        trigger();
    };
    // initial request
    const promise = f().then(setter);
    // follow-up updating
    const listen = onChange(()=>f().then(setter));
    signal?.addEventListener('abort', listen, {
        once: true
    });
    return {
        getCurrentValue: ()=>{
            // TODO: suspense
            if (value.isNone()) throw promise;
            return value.value;
        },
        subscribe: (sub)=>{
            if (signal?.aborted) return noop;
            const undo = subscribe(sub);
            signal?.addEventListener('abort', undo, {
                once: true
            });
            return ()=>{
                undo();
            };
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all data to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT)), 500);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f);
    }
    return {
        trigger,
        subscribe
    };
}
function mapSubscription(sub, mapper) {
    let value = None;
    sub.subscribe(()=>value = None);
    return {
        getCurrentValue () {
            if (value.isNone()) value = Some(mapper(sub.getCurrentValue()));
            return value.value;
        },
        subscribe: sub.subscribe
    };
}
function mergeSubscription(...subscriptions) {
    let values;
    const f = ()=>values = undefined;
    subscriptions.forEach((x)=>x.subscribe(f));
    return {
        getCurrentValue () {
            return values ??= subscriptions.map((x)=>x.getCurrentValue());
        },
        subscribe: (callback)=>{
            const removeListeners = subscriptions.map((x)=>x.subscribe(callback));
            return ()=>removeListeners.forEach((x)=>x());
        }
    };
}
function createSubscriptionFromValueRef(ref, signal) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value,
        subscribe: (sub)=>{
            if (signal?.aborted) return lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
            const f = ref.addListener(sub);
            signal?.addEventListener('abort', f, {
                once: true
            });
            return f;
        }
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}


/***/ }),

/***/ 50139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BF: () => (/* binding */ updateLanguage),
/* harmony export */   BV: () => (/* binding */ i18NextInstance)
/* harmony export */ });
/* unused harmony export queryRemoteI18NBundle */
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64455);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5828);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57228);




const i18NextInstance = i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["default"] */ .ZP["default"] || i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP;
if (false) {}
if (!i18NextInstance.isInitialized) {
    i18NextInstance.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["default"] */ .Z["default"] || i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).init({
        keySeparator: false,
        interpolation: {
            escapeValue: true
        },
        contextSeparator: '$',
        fallbackLng: {
            'zh-CN': [
                'zh-TW',
                'en'
            ],
            'zh-TW': [
                'zh-CN',
                'en'
            ],
            default: [
                'en'
            ]
        },
        defaultNS: 'mask',
        nonExplicitSupportedLngs: true,
        detection: {
            order: [
                'navigator'
            ]
        },
        react: {
            bindI18n: 'languageChanged loaded',
            // We'll be getting bundles in different languages from the remote, and we'll need to trigger re-rendering.
            // https://react.i18next.com/latest/i18next-instance
            bindI18nStore: 'added removed'
        }
    });
}
function updateLanguage(next) {
    if (next === _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions */ .P7.__auto__) {
        const result = i18NextInstance.services.languageDetector.detect();
        i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .ZP.changeLanguage(result[0] || _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions */ .P7.enUS);
    } else {
        i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .ZP.changeLanguage(next);
    }
}
const cache = Symbol('shared-base i18n cache');
const interpolationLike = /({{.+?}})/g;
function getInterpolations(string) {
    return [
        ...string.matchAll(interpolationLike)
    ].map((arr)=>arr[0]).sort(undefined).join('');
}
function queryRemoteI18NBundle(_updater) {
    const updater = _updater;
    const update = updater[cache] ??= debounce(async ()=>{
        const result = await updater(i18NextInstance.language);
        for (const [ns, lang, json] of result){
            const next = {
                ...i18NextInstance.getResourceBundle(lang, ns)
            };
            for(const key in json){
                const value = json[key];
                if (typeof value !== 'string') continue;
                if (!next[key]) next[key] = value;
                else // we only accept i18n hot update if and only if the interpolations are the same, otherwise the translation will be broken.
                if (getInterpolations(value) === next[key]) {
                    next[key] = value;
                }
            }
            i18NextInstance.addResourceBundle(lang, ns, next, true, true);
        }
    }, 1500);
    update();
    i18NextInstance.on('languageChanged', update);
    return ()=>i18NextInstance.off('languageChanged', update);
}


/***/ }),

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ RelationFavor),
/* harmony export */   e: () => (/* binding */ ProofType)
/* harmony export */ });
var /**
 * This interface contains the minimal information for UI display
 */ /** The nickname of the persona. Should use profile.nickname if it presents. */ /** The evm address of persona */ /** The nickname of the profile. Should be used in prior. */ RelationFavor;
(function(RelationFavor) {
    RelationFavor[RelationFavor["COLLECTED"] = -1] = "COLLECTED";
    RelationFavor[RelationFavor["UNCOLLECTED"] = 1] = "UNCOLLECTED";
    RelationFavor[RelationFavor["DEPRECATED"] = 0] = "DEPRECATED";
})(RelationFavor || (RelationFavor = {}));
var ProofType// JSON.stringify(payload)
;
(function(ProofType) {
    ProofType["Persona"] = 'persona';
    ProofType["EOA"] = 'eoa';
})(ProofType || (ProofType = {}));


/***/ }),

/***/ 37377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mZ: () => (/* binding */ PopupRoutes),
/* harmony export */   vq: () => (/* binding */ DashboardRoutes)
/* harmony export */ });
/* unused harmony export PopupModalRoutes */
var DashboardRoutes;
(function(DashboardRoutes) {
    DashboardRoutes["Setup"] = '/setup';
    DashboardRoutes["Welcome"] = '/setup/welcome';
    DashboardRoutes["SignUpPersona"] = '/setup/sign-up';
    DashboardRoutes["RecoveryPersona"] = '/setup/recovery';
    DashboardRoutes["SignUpPersonaMnemonic"] = '/setup/sign-up/mnemonic';
    DashboardRoutes["SignUpPersonaOnboarding"] = '/setup/sign-up/onboarding';
    DashboardRoutes["LocalBackup"] = '/setup/local-backup';
    DashboardRoutes["CloudBackup"] = '/setup/cloud-backup';
    DashboardRoutes["CloudBackupPreview"] = '/setup/cloud-backup-preview';
    DashboardRoutes["SignUp"] = '/sign-up';
    DashboardRoutes["SignIn"] = '/sign-in';
    DashboardRoutes["PrivacyPolicy"] = '/privacy-policy';
    DashboardRoutes["Personas"] = '/personas';
    DashboardRoutes["CreateMaskWallet"] = '/create-mask-wallet';
    DashboardRoutes["CreateMaskWalletForm"] = '/create-mask-wallet/form';
    DashboardRoutes["RecoveryMaskWallet"] = '/create-mask-wallet/recovery';
    DashboardRoutes["CreateMaskWalletMnemonic"] = '/create-mask-wallet/mnemonic';
    DashboardRoutes["AddDeriveWallet"] = '/create-mask-wallet/add-derive-wallet';
    DashboardRoutes["SignUpMaskWalletOnboarding"] = '/create-mask-wallet/onboarding';
})(DashboardRoutes || (DashboardRoutes = {}));
var PopupModalRoutes;
(function(PopupModalRoutes) {
    PopupModalRoutes["ChooseCurrency"] = '/modal/choose-currency';
    PopupModalRoutes["ChooseNetwork"] = '/modal/choose-network';
    PopupModalRoutes["SwitchWallet"] = '/modal/switch-wallet';
    PopupModalRoutes["ConnectSocialAccount"] = '/modal/connect-social-account';
    PopupModalRoutes["SelectProvider"] = '/modal/select-provider';
    PopupModalRoutes["ConnectProvider"] = '/modal/connect-provider';
    PopupModalRoutes["SwitchPersona"] = '/modal/switch-persona';
    PopupModalRoutes["PersonaSettings"] = '/modal/persona-setting';
    PopupModalRoutes["PersonaRename"] = '/modal/persona-rename';
    PopupModalRoutes["SetBackupPassword"] = '/modal/set-backup-password';
    PopupModalRoutes["verifyBackupPassword"] = '/modal/verify-backup-password';
    PopupModalRoutes["WalletAccount"] = '/modal/wallet-accounts';
    PopupModalRoutes["SelectLanguage"] = '/modal/select-language';
    PopupModalRoutes["SelectAppearance"] = '/modal/select-appearance';
    PopupModalRoutes["SupportedSitesModal"] = '/modal/supported-sites';
    PopupModalRoutes["ChangeBackupPassword"] = '/modal/change-backup-password';
})(PopupModalRoutes || (PopupModalRoutes = {}));
var PopupRoutes// Unlock
;
(function(PopupRoutes) {
    PopupRoutes["Root"] = '/';
    PopupRoutes["Wallet"] = '/wallet';
    PopupRoutes["WalletStartUp"] = '/wallet/startup';
    PopupRoutes["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes["WalletSettings"] = '/wallet/settings';
    PopupRoutes["WalletRename"] = '/wallet/rename';
    PopupRoutes["DeleteWallet"] = '/wallet/delete';
    PopupRoutes["CreateWallet"] = '/wallet/create';
    PopupRoutes["DeriveWallet"] = '/wallet/derive';
    PopupRoutes["SelectWallet"] = '/wallet/select';
    PopupRoutes["BackupWallet"] = '/wallet/backup';
    PopupRoutes["AddToken"] = '/wallet/addToken';
    PopupRoutes["GasSetting"] = '/wallet/gas';
    PopupRoutes["TokenDetail"] = '/wallet/token-detail';
    PopupRoutes["TransactionDetail"] = '/wallet/transaction-detail';
    PopupRoutes["CollectibleDetail"] = '/wallet/collectible-detail';
    PopupRoutes["ContractInteraction"] = '/wallet/contract-interaction';
    PopupRoutes["ConfirmTransaction"] = '/wallet/confirm-transaction';
    PopupRoutes["ResetWallet"] = '/wallet/reset-wallet';
    PopupRoutes["Transfer"] = '/wallet/transfer';
    PopupRoutes["Contacts"] = '/wallet/contacts';
    PopupRoutes["SetPaymentPassword"] = '/wallet/password';
    PopupRoutes["ReplaceTransaction"] = '/wallet/replace';
    PopupRoutes["NetworkManagement"] = '/wallet/network-management';
    PopupRoutes["EditNetwork"] = '/wallet/edit-network';
    PopupRoutes["AddNetwork"] = '/wallet/add-network';
    PopupRoutes["Receive"] = '/wallet/receive';
    PopupRoutes["ExportWalletPrivateKey"] = '/wallet/export-private-key';
    PopupRoutes["ConnectedSites"] = '/wallet/connected-sites';
    PopupRoutes["Personas"] = '/personas';
    PopupRoutes["Logout"] = '/personas/logout';
    PopupRoutes["SocialAccounts"] = '/personas/accounts';
    PopupRoutes["AccountDetail"] = '/personas/accounts/detail';
    PopupRoutes["ConnectedWallets"] = '/personas/connected-wallets';
    PopupRoutes["ConnectWallet"] = '/personas/connect-wallet';
    PopupRoutes["PersonaSignRequest"] = '/personas/sign-request';
    PopupRoutes["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes["RequestPermission"] = '/request-permission';
    PopupRoutes["SignRequest"] = '/sign-request';
    PopupRoutes["Swap"] = '/swap';
    PopupRoutes["VerifyWallet"] = '/personas/verify';
    PopupRoutes["ChangeOwner"] = '/wallet/change-owner';
    PopupRoutes["Friends"] = '/friends';
    PopupRoutes["FriendsDetail"] = '/friends/detail';
    PopupRoutes["Settings"] = '/settings';
    PopupRoutes["WalletConnect"] = '/personas/wallet-connect';
    PopupRoutes["ExportPrivateKey"] = '/personas/export-private-key';
    PopupRoutes["PersonaAvatarSetting"] = '/personas/avatar-setting';
})(PopupRoutes || (PopupRoutes = {}));


/***/ }),

/***/ 58021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: () => (/* binding */ fetchFromChainbase)
/* harmony export */ });
/* unused harmony exports toTransaction, normalizeTxStatus */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60174);
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);





async function fetchFromChainbase(pathname) {
    const data = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchCachedJSON */ .MP)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .CHAINBASE_API_URL */ .jU, pathname));
    return data?.code === 0 ? data.data : undefined;
}
function toTransaction(chainId, tx) {
    return {
        id: tx.transaction_hash,
        hash: tx.transaction_hash,
        chainId,
        status: normalizeTxStatus(tx.status),
        timestamp: new Date(tx.block_timestamp).getTime(),
        from: tx.from_address,
        to: tx.to_address,
        assets: EMPTY_LIST,
        blockNumber: Number.parseInt(tx.block_number, 10),
        nonce: tx.nonce
    };
}
/** 0 is fail, 1 is succeed */ function normalizeTxStatus(status) {
    const map = {
        0: TransactionStatusType.FAILED,
        1: TransactionStatusType.SUCCEED
    };
    return map[status];
}


/***/ }),

/***/ 55949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rm: () => (/* binding */ getRegisteredWeb3Networks),
/* harmony export */   TQ: () => (/* binding */ getActivatedPluginWeb3State),
/* harmony export */   i8: () => (/* binding */ getRegisteredWeb3Providers)
/* harmony export */ });
/* unused harmony exports getRegisteredWeb3Chains, getAllPluginsWeb3State */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45025);



const all = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .evm */ .oN,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .flow */ .ls,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .solana */ .Zj
};
/**
 * Get Web3 providers, for example, WalletConnect, MetaMask, etc.
 * @param ID Network name
 */ function getRegisteredWeb3Providers(ID) {
    return all[ID].provider;
}
/**
 * Get Web3 Networks, for example, mainnet, testnet, Optimism, etc.
 * @param ID Network name
 */ function getRegisteredWeb3Networks(ID) {
    return all[ID].network;
}
function getRegisteredWeb3Chains(ID) {
    return all[ID].chain;
}
function getAllPluginsWeb3State() {
    return {
        [NetworkPluginID.PLUGIN_EVM]: evm.state,
        [NetworkPluginID.PLUGIN_FLOW]: flow.state,
        [NetworkPluginID.PLUGIN_SOLANA]: solana.state
    };
}
function getActivatedPluginWeb3State(pluginID) {
    return all[pluginID].state;
}


/***/ }),

/***/ 87187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Signer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/web3-eth-accounts@1.10.2/node_modules/web3-eth-accounts/lib/index.js
var lib = __webpack_require__(30699);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/signTransaction.ts

function signTransaction(transaction, privateKey) {
    if (typeof transaction.nonce === 'undefined') throw new Error('Nonce is required.');
    const Accounts_ = (lib_default());
    const accounts = new Accounts_();
    return accounts.signTransaction(transaction, privateKey);
}

// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@metamask+eth-sig-util@5.0.2/node_modules/@metamask/eth-sig-util/dist/index.js
var dist = {
	/* dynamic */ get a() {
		var exports = __webpack_require__(98708);
		if (exports.__esModule) Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/apis/SignerAPI.ts




class Signer {
    static async sign(type, key, message) {
        switch(type){
            case Account/* SignType */.A.Message:
                return dist.a.personalSign({
                    privateKey: key,
                    data: message
                });
            case Account/* SignType */.A.TypedData:
                return dist.a.signTypedData({
                    privateKey: key,
                    data: JSON.parse(message),
                    version: dist.a.SignTypedDataVersion.V4
                });
            case Account/* SignType */.A.Transaction:
                const transaction = message;
                const chainId = transaction.chainId;
                if (!chainId) throw new Error('Invalid chain id.');
                const { rawTransaction } = await signTransaction(transaction, (0,pvtutils/* toHex */.NC)(key));
                if (!rawTransaction) throw new Error('Failed to sign transaction.');
                return rawTransaction;
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }
}


/***/ }),

/***/ 39850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web3StateRef: () => (/* binding */ Web3StateRef)
/* harmony export */ });
/* unused harmony export createEVMState */
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);















const Web3StateRef = {
    get value () {
        return _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .evm */ .oN.state;
    }
};
async function createEVMState(context) {
    const Provider_ = await Provider.new(context);
    const Transaction_ = new Transaction(context, {
        chainId: Provider_.chainId,
        account: Provider_.account
    });
    return {
        Settings: new Settings(context),
        Provider: Provider_,
        BalanceNotifier: new BalanceNotifier(),
        BlockNumberNotifier: new BlockNumberNotifier(),
        Network: new Network(context),
        AddressBook: new AddressBook(context),
        IdentityService: new IdentityService(context),
        NameService: new NameService(context),
        RiskWarning: new RiskWarning(context, {
            account: Provider_.account
        }),
        Message: new Message(context),
        Token: new Token(context, {
            account: Provider_.account,
            chainId: Provider_.chainId
        }),
        Transaction: Transaction_,
        TransactionFormatter: new TransactionFormatter(context),
        TransactionWatcher: new TransactionWatcher(context, {
            chainId: Provider_.chainId,
            transactions: Transaction_.transactions
        })
    };
}


/***/ }),

/***/ 88245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowWeb3StateRef: () => (/* binding */ FlowWeb3StateRef)
/* harmony export */ });
/* unused harmony export createFlowState */
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);







const FlowWeb3StateRef = {
    get value () {
        return _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .flow */ .ls.state;
    }
};
async function createFlowState(context) {
    const Provider_ = await Provider.new(context);
    return {
        AddressBook: new AddressBook(context),
        IdentityService: new IdentityService(context),
        Settings: new Settings(context),
        Network: new Network(context),
        Transaction: new Transaction(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        Provider: Provider_
    };
}


/***/ }),

/***/ 21984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolanaWeb3StateRef: () => (/* binding */ SolanaWeb3StateRef)
/* harmony export */ });
/* unused harmony export createSolanaState */
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);







const SolanaWeb3StateRef = {
    get value () {
        return _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .solana */ .Zj.state;
    }
};
async function createSolanaState(context) {
    const Provider_ = await Provider.new(context);
    return {
        AddressBook: new AddressBook(context),
        IdentityService: new IdentityService(context),
        Settings: new Settings(context),
        Network: new Network(context),
        Transaction: new Transaction(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        Provider: Provider_
    };
}


/***/ }),

/***/ 62322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $h: () => (/* reexport safe */ _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_41__.$),
/* harmony export */   $u: () => (/* binding */ ContractReadonly),
/* harmony export */   A5: () => (/* reexport safe */ _CoinGecko_index_js__WEBPACK_IMPORTED_MODULE_38__.A),
/* harmony export */   AB: () => (/* binding */ HubAll),
/* harmony export */   Bv: () => (/* binding */ Web3),
/* harmony export */   CH: () => (/* binding */ Contract),
/* harmony export */   Cl: () => (/* reexport safe */ _Web3_EVM_providers_index_js__WEBPACK_IMPORTED_MODULE_5__.C),
/* harmony export */   E6: () => (/* binding */ Airdrop),
/* harmony export */   EV: () => (/* reexport safe */ _Firefly_index_js__WEBPACK_IMPORTED_MODULE_46__.E),
/* harmony export */   Ep: () => (/* reexport safe */ _Web3_EVM_apis_SignerAPI_js__WEBPACK_IMPORTED_MODULE_54__.E),
/* harmony export */   HV: () => (/* reexport safe */ _NextID_index_js__WEBPACK_IMPORTED_MODULE_35__.H),
/* harmony export */   Kq: () => (/* binding */ RequestReadonly),
/* harmony export */   Lf: () => (/* binding */ SmartPayOwner),
/* harmony export */   MJ: () => (/* binding */ Web3Readonly),
/* harmony export */   PN: () => (/* reexport safe */ _FiatCurrencyRate_index_js__WEBPACK_IMPORTED_MODULE_47__.P),
/* harmony export */   Ph: () => (/* binding */ Web3All),
/* harmony export */   Pp: () => (/* reexport safe */ _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_19__.P),
/* harmony export */   Ri: () => (/* reexport safe */ _Lens_index_js__WEBPACK_IMPORTED_MODULE_29__.R),
/* harmony export */   Rk: () => (/* reexport safe */ _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_32__.Rk),
/* harmony export */   Rm: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.Rm),
/* harmony export */   S5: () => (/* reexport safe */ _RSS3_index_js__WEBPACK_IMPORTED_MODULE_45__.S),
/* harmony export */   TQ: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.TQ),
/* harmony export */   UZ: () => (/* binding */ DSearch),
/* harmony export */   VN: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.VN),
/* harmony export */   Vw: () => (/* reexport safe */ _CryptoScamDB_index_js__WEBPACK_IMPORTED_MODULE_28__.V),
/* harmony export */   Xb: () => (/* binding */ Hub),
/* harmony export */   Xz: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.Xz),
/* harmony export */   Z9: () => (/* reexport safe */ _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_42__.Z),
/* harmony export */   Zy: () => (/* binding */ OthersAll),
/* harmony export */   aC: () => (/* reexport safe */ _Snapshot_index_js__WEBPACK_IMPORTED_MODULE_33__.a),
/* harmony export */   bO: () => (/* reexport safe */ _NFTSpam_index_js__WEBPACK_IMPORTED_MODULE_48__.b),
/* harmony export */   e: () => (/* reexport safe */ _GoPlusLabs_index_js__WEBPACK_IMPORTED_MODULE_37__.e),
/* harmony export */   ej: () => (/* binding */ Others),
/* harmony export */   f7: () => (/* reexport safe */ _Web3Bio_index_js__WEBPACK_IMPORTED_MODULE_36__.f),
/* harmony export */   fe: () => (/* reexport safe */ _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_31__.f),
/* harmony export */   h_: () => (/* binding */ RedPacket),
/* harmony export */   hv: () => (/* reexport safe */ _SmartPay_libs_DepositPaymaster_js__WEBPACK_IMPORTED_MODULE_34__.h),
/* harmony export */   i8: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.i8),
/* harmony export */   iC: () => (/* binding */ SmartPayAccount),
/* harmony export */   iv: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.iv),
/* harmony export */   jI: () => (/* binding */ SmartPayFunder),
/* harmony export */   k4: () => (/* reexport safe */ _Lido_index_js__WEBPACK_IMPORTED_MODULE_25__.k),
/* harmony export */   mG: () => (/* binding */ Multicall),
/* harmony export */   nB: () => (/* reexport safe */ _ENS_index_js__WEBPACK_IMPORTED_MODULE_39__.n),
/* harmony export */   nF: () => (/* reexport safe */ _Chainbase_index_js__WEBPACK_IMPORTED_MODULE_55__.n),
/* harmony export */   q7: () => (/* reexport safe */ _NextID_index_js__WEBPACK_IMPORTED_MODULE_17__.q),
/* harmony export */   tL: () => (/* reexport safe */ _Twitter_index_js__WEBPACK_IMPORTED_MODULE_26__.t),
/* harmony export */   wk: () => (/* reexport safe */ _TheGraph_index_js__WEBPACK_IMPORTED_MODULE_30__.w),
/* harmony export */   xk: () => (/* reexport safe */ _Storage_apis_Storage_js__WEBPACK_IMPORTED_MODULE_12__.x),
/* harmony export */   yd: () => (/* reexport safe */ _CoinMarketCap_index_js__WEBPACK_IMPORTED_MODULE_27__.yd)
/* harmony export */ });
/* unused harmony exports Request, FlowWeb3, FlowHub, FlowOthers, SolanaWeb3, SolanaHub, SolanaOthers */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24835);
/* harmony import */ var _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92848);
/* harmony import */ var _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1288);
/* harmony import */ var _DSearch_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26861);
/* harmony import */ var _Multicall_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93097);
/* harmony import */ var _RedPacket_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33286);
/* harmony import */ var _SmartPay_apis_OwnerAPI_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(16769);
/* harmony import */ var _Airdrop_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19906);
/* harmony import */ var _Web3_EVM_apis_ContractAPI_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67433);
/* harmony import */ var _Web3_EVM_apis_ContractReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61871);
/* harmony import */ var _Web3_EVM_apis_ConnectionReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3543);
/* harmony import */ var _Web3_EVM_apis_RequestAPI_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81254);
/* harmony import */ var _Web3_EVM_apis_RequestReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64043);
/* harmony import */ var _Web3_Router_apis_AllHubAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53543);
/* harmony import */ var _Web3_Router_apis_AllConnectionAPI_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17103);
/* harmony import */ var _Web3_Router_apis_AllOthersAPI_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27283);
/* harmony import */ var _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55949);
/* harmony import */ var _Lido_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7542);
/* harmony import */ var _Twitter_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(26854);
/* harmony import */ var _CoinMarketCap_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88494);
/* harmony import */ var _CryptoScamDB_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(91428);
/* harmony import */ var _Lens_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(58291);
/* harmony import */ var _TheGraph_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(94348);
/* harmony import */ var _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(63087);
/* harmony import */ var _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(62595);
/* harmony import */ var _Snapshot_index_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(98773);
/* harmony import */ var _Web3_EVM_providers_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66402);
/* harmony import */ var _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66979);
/* harmony import */ var _Web3_EVM_apis_SignerAPI_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(87187);
/* harmony import */ var _Storage_apis_Storage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4978);
/* harmony import */ var _SmartPay_libs_DepositPaymaster_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(89288);
/* harmony import */ var _NextID_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63544);
/* harmony import */ var _NextID_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(93293);
/* harmony import */ var _Web3Bio_index_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(50247);
/* harmony import */ var _GoPlusLabs_index_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(36541);
/* harmony import */ var _CoinGecko_index_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(47797);
/* harmony import */ var _ENS_index_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(68513);
/* harmony import */ var _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(94114);
/* harmony import */ var _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(3487);
/* harmony import */ var _Chainbase_index_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(30685);
/* harmony import */ var _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25514);
/* harmony import */ var _RSS3_index_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(23516);
/* harmony import */ var _Firefly_index_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(87904);
/* harmony import */ var _FiatCurrencyRate_index_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(3795);
/* harmony import */ var _NFTSpam_index_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(89524);





















const DSearch = new _DSearch_index_js__WEBPACK_IMPORTED_MODULE_2__/* .DSearchAPI */ .d();



const Multicall = new _Multicall_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MulticallAPI */ .U();

const RedPacket = new _RedPacket_index_js__WEBPACK_IMPORTED_MODULE_4__/* .RedPacketAPI */ .$();








// Web3
const HubAll = new _Web3_Router_apis_AllHubAPI_js__WEBPACK_IMPORTED_MODULE_6__/* .AllHubAPI */ .a();
const Web3All = new _Web3_Router_apis_AllConnectionAPI_js__WEBPACK_IMPORTED_MODULE_7__/* .AllConnectionAPI */ .B();
const OthersAll = new _Web3_Router_apis_AllOthersAPI_js__WEBPACK_IMPORTED_MODULE_8__/* .AllOthersAPI */ .q();

const Contract = new _Web3_EVM_apis_ContractAPI_js__WEBPACK_IMPORTED_MODULE_10__/* .ContractAPI */ .J();
const ContractReadonly = new _Web3_EVM_apis_ContractReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_11__/* .ContractReadonlyAPI */ .M();


const Web3 = Web3All.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_EVM);
const Web3Readonly = new _Web3_EVM_apis_ConnectionReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_14__/* .ConnectionReadonlyAPI */ .S();
const Request = new _Web3_EVM_apis_RequestAPI_js__WEBPACK_IMPORTED_MODULE_15__/* .RequestAPI */ .U();
const RequestReadonly = new _Web3_EVM_apis_RequestReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_16__/* .RequestReadonlyAPI */ .c();
const Hub = HubAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_EVM);
const Others = OthersAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_EVM);
const FlowWeb3 = Web3All.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_FLOW);
const FlowHub = HubAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_FLOW);
const FlowOthers = OthersAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_FLOW);
const SolanaWeb3 = Web3All.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_SOLANA);
const SolanaHub = HubAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_SOLANA);
const SolanaOthers = OthersAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_SOLANA);
// Smart Pay




// NextID

// Web3Bio

// GoPlusLabs

// CoinGecko

// R2D2

// Name Service

// Debank

// NFTScan

// Chainbase

// Zerion

// Fuse


// Smart Pay

const SmartPayFunder = new _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_20__/* .SmartPayFunderAPI */ .B();
const SmartPayOwner = new _SmartPay_apis_OwnerAPI_js__WEBPACK_IMPORTED_MODULE_21__/* .SmartPayOwnerAPI */ .P();
const SmartPayAccount = new _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_22__/* .SmartPayAccountAPI */ .C();
// RSS3

// Airdrop
const Airdrop = new _Airdrop_index_js__WEBPACK_IMPORTED_MODULE_23__/* .AirdropAPI */ .H();
// Firefly

// FiatCurrencyRate

// Calendar

// NFT Spam



/***/ }),

/***/ 25747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ fetchBlob)
/* harmony export */ });
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62622);
/* harmony import */ var _getNextFetchers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72358);


async function fetchBlob(input, init, options) {
    const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__/* .fetch */ .h)(input, init, (0,_getNextFetchers_js__WEBPACK_IMPORTED_MODULE_1__/* .getNextFetchers */ .l)(options));
    if (!response.ok) throw new Error('Failed to fetch as Blob.');
    return response.blob();
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

/***/ 83076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ HD_PATH_WITHOUT_INDEX_ETHEREUM)
/* harmony export */ });
const HD_PATH_WITHOUT_INDEX_ETHEREUM = "m/44'/60'/0'/0";


/***/ }),

/***/ 29763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $q: () => (/* binding */ multipliedBy),
/* harmony export */   FH: () => (/* binding */ toFixed),
/* harmony export */   FI: () => (/* binding */ isLessThan),
/* harmony export */   Fr: () => (/* binding */ isZero),
/* harmony export */   KH: () => (/* binding */ isGreaterThanOrEqualTo),
/* harmony export */   OI: () => (/* binding */ addThousandSeparators),
/* harmony export */   PW: () => (/* binding */ isLessThanOrEqualTo),
/* harmony export */   SI: () => (/* binding */ scale10),
/* harmony export */   T1: () => (/* binding */ isGreaterThan),
/* harmony export */   h9: () => (/* binding */ minus),
/* harmony export */   hC: () => (/* binding */ dividedBy),
/* harmony export */   pu: () => (/* binding */ rightShift),
/* harmony export */   ry: () => (/* binding */ ONE),
/* harmony export */   sK: () => (/* binding */ isGreaterThanOrEqualTo),
/* harmony export */   vr: () => (/* binding */ trimZero),
/* harmony export */   w5: () => (/* binding */ leftShift),
/* harmony export */   wA: () => (/* binding */ pow10),
/* harmony export */   xE: () => (/* binding */ ZERO),
/* harmony export */   xP: () => (/* binding */ isPositive)
/* harmony export */ });
/* unused harmony exports toZero, isOne, isEqual, isLte, plus, toNumber */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81770);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27624);


const ZERO = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O('0');
const ONE = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O('1');
/** if abs(n) < m then return 0 */ function toZero(n, m = 1e-6) {
    if (!n) return ZERO;
    const n_ = new BigNumber(n);
    return n_.abs().isLessThanOrEqualTo(m) ? ZERO : n_;
}
/** n === 0 */ function isZero(n) {
    return n === 0 || n === '0' || n === '0x0' || new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).isZero();
}
/** n === 1 */ function isOne(n) {
    return n === 1 || n === '1' || new BigNumber(n).isEqualTo(ONE);
}
/** n === m */ function isEqual(n, m) {
    return new BigNumber(n).isEqualTo(m);
}
/** a > b */ function isGreaterThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isGreaterThan(b);
}
/** a >= b */ function isGreaterThanOrEqualTo(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isGreaterThanOrEqualTo(b);
}

/** a < b */ function isLessThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isLessThan(b);
}
/** a <= b */ function isLessThanOrEqualTo(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isLessThanOrEqualTo(b);
}

/** a > 0 */ function isPositive(n) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).isPositive();
}
/** a * b */ function multipliedBy(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).multipliedBy(b);
}
/** a + b */ function plus(a, b) {
    return new BigNumber(a).plus(b);
}
/** a - b */ function minus(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).minus(b);
}
/** 10 ** n */ /** @deprecated use scale10 */ function pow10(n) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(10).pow(n);
}
/** scale 10 ** n * m */ function scale10(m, n = 1) {
    const x = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(1).shiftedBy(n);
    return n === 1 ? x : x.multipliedBy(m);
}
/** n * (10 ** m) */ function rightShift(n, m) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).shiftedBy(+(m ?? 0));
}
/** n / (10 ** m) */ function leftShift(n, m) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).shiftedBy(-(m ?? 0));
}
/** a / b */ function dividedBy(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).dividedBy(b);
}
/** new BigNumber(n).toNumber() */ function toNumber(value, fallback = 0) {
    return new BigNumber(value ?? fallback).toNumber();
}
function toFixed(value = 0, decimalPlaces) {
    const n = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value);
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(decimalPlaces) ? n.toFixed(decimalPlaces) : n.toFixed();
}
/** Trim ending zeros of decimals */ function trimZero(digit) {
    const result = digit.replaceAll(/\.([1-9]*)?0+$/g, (_, p1)=>{
        return p1 ? `.${p1}` : '';
    });
    if (isLessThan(result, 1)) {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result, '0');
    }
    return result;
}
function addThousandSeparators(num) {
    return num.toString().replaceAll(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}


/***/ }),

/***/ 53007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bl: () => (/* binding */ resolveResourceURL),
/* harmony export */   Bz: () => (/* binding */ resolveArweaveURL),
/* harmony export */   JF: () => (/* binding */ resolveNextIDPlatformName),
/* harmony export */   Ri: () => (/* binding */ resolveNextIDPlatformLink),
/* harmony export */   Vo: () => (/* binding */ resolveSocialAddressLink),
/* harmony export */   X5: () => (/* binding */ resolveNetworkWalletName),
/* harmony export */   j$: () => (/* binding */ resolveNextID_NetworkPluginID),
/* harmony export */   lz: () => (/* binding */ resolveSourceTypeName),
/* harmony export */   mg: () => (/* binding */ resolveIPFS_URL),
/* harmony export */   nX: () => (/* binding */ resolveCrossOriginURL),
/* harmony export */   ww: () => (/* binding */ resolveNextIDPlatformWalletName),
/* harmony export */   yT: () => (/* binding */ isLocaleResource)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveCurrencyFullName, isIPFS_CID, isIPFS_Resource, isArweaveResource, resolveLocalURL, trimQuery, resolveIPFS_CID */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74170);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45569);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95766);
/* harmony import */ var _specs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43434);




const resolveSocialAddressLink = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Address]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.ARBID]: 'https://arb.id/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.ENS]: 'https://ens.domains/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.SPACE_ID]: 'https://space.id/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.RSS3]: 'https://rss3.bio/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Crossbell]: 'https://crossbell.io/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Firefly]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.SOL]: 'https://naming.bonfida.org/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.NEXT_ID]: 'https://next.id/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.CyberConnect]: 'https://cyberconnect.me/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Leaderboard]: 'https://ethleaderboard.xyz/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Sybil]: 'https://sybil.org/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.TwitterBlue]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Mask]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Lens]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.OpenSea]: ''
}, ()=>'');
const resolveSourceTypeName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.DeBank]: 'DeBank',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Zerion]: 'Zerion',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.RSS3]: 'RSS3',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CoinMarketCap]: 'CoinMarketCap',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.UniswapInfo]: 'UniswapInfo',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.OpenSea]: 'OpenSea',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Rarible]: 'Rarible',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.LooksRare]: 'LooksRare',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.NFTScan]: 'NFTScan',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Zora]: 'Zora',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Gem]: 'Gem',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Alchemy_EVM]: 'Alchemy_EVM',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Alchemy_FLOW]: 'Alchemy_FLOW',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.RaritySniper]: 'RaritySniper',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.TraitSniper]: 'TraitSniper',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Chainbase]: 'Chainbase',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.X2Y2]: 'X2Y2',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.MagicEden]: 'MagicEden',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Element]: 'Element',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Flow]: 'Flow',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Solana]: 'Solana',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Solsea]: 'Solsea',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Solanart]: 'Solanart',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.R2D2]: 'R2D2',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Rabby]: 'Rabby',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CoinGecko]: 'CoinGecko',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CF]: 'CloudFlare',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.GoPlus]: 'GoPlus',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.OKX]: 'OKX',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Uniswap]: 'Uniswap',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.NFTX]: 'NFTX',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Etherscan]: 'Etherscan',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CryptoPunks]: 'CryptoPunks',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.SimpleHash]: 'SimpleHash',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Approval]: 'Approval'
}, (providerType)=>{
    throw new Error(`Unknown source type: ${providerType}.`);
});
const resolveCurrencyName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.BTC]: 'BTC',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.ETH]: 'ETH',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.NATIVE]: 'ETH',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.USD]: 'USD',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.CNY]: 'CNY',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.JPY]: 'JPY',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.HKD]: 'HKD',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.EUR]: 'EUR'
}, (CurrencyType)=>{
    throw new Error(`Unknown currency type: ${CurrencyType}.`);
});
const resolveCurrencyFullName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.BTC]: 'Bitcoin',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.ETH]: 'Ethereum',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.NATIVE]: 'Ethereum',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.USD]: 'United States Dollar',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.CNY]: 'Chinese Yuan',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.JPY]: 'Japanese Yen',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.HKD]: 'Hong Kong Dollar',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.EUR]: 'Euro'
}, (CurrencyType)=>{
    throw new Error(`Unknown currency type: ${CurrencyType}.`);
});
const resolveNetworkWalletName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM]: 'ETH Wallet',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: 'Solana Wallet',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: 'Flow Wallet'
}, (network)=>{
    throw new Error(`Unknown network plugin-id: ${network}`);
});
const resolveNextIDPlatformWalletName = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function(platform) {
    const pluginId = resolveNextID_NetworkPluginID(platform);
    if (!pluginId) return `${platform} wallet`;
    return resolveNetworkWalletName(pluginId);
});
const resolveNextID_NetworkPluginID = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Ethereum]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.NextID]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.GitHub]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Keybase]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Twitter]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.ENS]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.RSS3]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.LENS]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.REDDIT]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SYBIL]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.EthLeaderboard]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SpaceId]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Farcaster]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Bit]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Unstoppable]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.CyberConnect]: undefined
}, ()=>{
    return undefined;
});
const resolveNextIDPlatformName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Ethereum]: 'Ethereum',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.NextID]: 'NEXT.ID',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.GitHub]: 'Github',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Keybase]: 'Keybase',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Twitter]: 'Twitter',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.ENS]: 'ENS',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.RSS3]: 'RSS3',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.LENS]: 'Lens',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.REDDIT]: 'Reddit',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SYBIL]: 'Sybil',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.EthLeaderboard]: 'EthLeaderboard',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SpaceId]: 'Space ID',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Farcaster]: 'Farcaster',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Bit]: '.bit',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Unstoppable]: 'Unstoppable Domains',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.CyberConnect]: 'CyberConnect'
}, ()=>{
    return '';
});
const resolveNextIDPlatformLink = (networkPlatform, identifier, name)=>{
    switch(networkPlatform){
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Ethereum:
            return `https://etherscan.io/address/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.NextID:
            return 'https://next.id/';
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.GitHub:
            return `https://github.com/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Keybase:
            return `https://keybase.io/${name}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Twitter:
            return `https://twitter.com/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.ENS:
            return `https://app.ens.domains/name/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.RSS3:
            return `https://rss3.io/result?search=${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.LENS:
            return `https://www.lensfrens.xyz/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.REDDIT:
            return `https://www.reddit.com/user/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SYBIL:
            return 'https://sybil.org/';
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.EthLeaderboard:
            return 'https://ethleaderboard.xyz/';
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SpaceId:
            return `https://bscscan.com/address/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Farcaster:
            return `https://warpcast.com/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Bit:
            return `https://bit.cc/${name}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Unstoppable:
            return `https://ud.me/${name}`;
        default:
            return '';
    }
};
// https://stackoverflow.com/a/67176726
const MATCH_IPFS_CID_RAW = 'Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[2-7A-Za-z]{58,}|B[2-7A-Z]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[\\dA-F]{50,}';
const MATCH_IPFS_DATA_RE = /ipfs\/(data:.*)$/;
const MATCH_IPFS_CID_RE = new RegExp(`(${MATCH_IPFS_CID_RAW})`);
const MATCH_IPFS_CID_STRICT_RE = new RegExp(`^(?:${MATCH_IPFS_CID_RAW})$`);
const MATCH_IPFS_CID_AT_STARTS_RE = new RegExp(`^https://(?:${MATCH_IPFS_CID_RAW})`);
const MATCH_IPFS_CID_AND_PATHNAME_RE = new RegExp(`(?:${MATCH_IPFS_CID_RAW})\\/?.*`);
const MATCH_LOCAL_RESOURCE_URL_RE = /^(data|blob:|\w+-extension:\/\/|<svg\s)/;
const CORS_HOST = 'https://cors-next.r2d2.to';
const IPFS_GATEWAY_HOST = 'https://hoot.it';
function isIPFS_CID(cid) {
    return MATCH_IPFS_CID_STRICT_RE.test(cid);
}
function isIPFS_Resource(str) {
    return MATCH_IPFS_CID_RE.test(str);
}
function isArweaveResource(str) {
    return str.startsWith('ar:');
}
function isLocaleResource(url) {
    return MATCH_LOCAL_RESOURCE_URL_RE.test(url);
}
function resolveLocalURL(url) {
    if (url.startsWith('<svg ')) return `data:image/svg+xml;base64,${btoa(url)}`;
    return url;
}
/**
 * Remove query from IPFS url, as it is not needed
 * and will increase requests sometimes.
 * For example https://ipfs.io/ipfs/<same-cid>?id=67891 and https://ipfs.io/ipfs/<same-cid>?id=67892
 * are set to two different NFTs, but according to the same CID,
 * they are exactly the same.
 */ function trimQuery(url) {
    return url.replace(/\?.+$/, '');
}
function resolveIPFS_CID(str) {
    return str.match(MATCH_IPFS_CID_RE)?.[1];
}
function resolveIPFS_URL(cidOrURL) {
    if (!cidOrURL) return cidOrURL;
    // eliminate cors proxy
    if (cidOrURL.startsWith(CORS_HOST)) {
        return trimQuery(resolveIPFS_URL(decodeURIComponent(cidOrURL.replace(new RegExp(`^${CORS_HOST}??`), ''))));
    }
    // a ipfs.io host
    if (cidOrURL.startsWith(IPFS_GATEWAY_HOST)) {
        // base64 data string
        const [_, data] = cidOrURL.match(MATCH_IPFS_DATA_RE) ?? [];
        if (data) return decodeURIComponent(data);
        // plain
        return trimQuery(decodeURIComponent(cidOrURL));
    }
    // a ipfs hash fragment
    if (isIPFS_Resource(cidOrURL)) {
        // starts with a cid
        if (MATCH_IPFS_CID_AT_STARTS_RE.test(cidOrURL)) {
            try {
                const u = new URL(cidOrURL);
                const cid = resolveIPFS_CID(cidOrURL);
                if (cid) {
                    if (u.pathname === '/') {
                        return resolveIPFS_URL((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://ipfs.io/ipfs/:cid', {
                            cid
                        }));
                    } else {
                        return resolveIPFS_URL((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://ipfs.io/ipfs/:cid/:path', {
                            cid,
                            path: u.pathname.slice(1)
                        }));
                    }
                }
            } catch (error) {
                console.log({
                    error
                });
            }
        }
        // do nothing
        const pathname = cidOrURL.match(MATCH_IPFS_CID_AND_PATHNAME_RE)?.[0];
        if (pathname) return trimQuery(`${IPFS_GATEWAY_HOST}/ipfs/${pathname}`);
    }
    return cidOrURL;
}
function resolveArweaveURL(url) {
    if (!url) return url;
    if (url.startsWith('https://')) return url;
    return (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://arweave.net/:str', {
        str: url
    });
}
/**
 * Please do not use to resolve an image or an video resource, because that's
 * not allowed by the cors agent server
 */ function resolveCrossOriginURL(url) {
    if (!url) return url;
    if (isLocaleResource(url)) return url;
    if (url.startsWith(CORS_HOST)) return url;
    return `${CORS_HOST}?${encodeURIComponent(url)}`;
}
function resolveResourceURL(url) {
    if (!url) return url;
    if (isLocaleResource(url)) return resolveLocalURL(url);
    if (isArweaveResource(url)) return resolveArweaveURL(url);
    return resolveIPFS_URL(url);
}


/***/ }),

/***/ 62649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ SearchResultType),
/* harmony export */   PO: () => (/* binding */ SourceType),
/* harmony export */   Qd: () => (/* binding */ GasOptionType),
/* harmony export */   Rq: () => (/* binding */ MessageStateType),
/* harmony export */   T8: () => (/* binding */ ActivityType),
/* harmony export */   TransactionStatusType: () => (/* binding */ TransactionStatusType),
/* harmony export */   V2: () => (/* binding */ CurrencyType),
/* harmony export */   iv: () => (/* binding */ TokenType),
/* harmony export */   oU: () => (/* binding */ OrderSide)
/* harmony export */ });
/* unused harmony exports TransactionReceiptStatusType, TransactionDescriptorType, FontSize, ThemeMode, ThemeColor */
var CurrencyType;
(function(CurrencyType) {
    CurrencyType["NATIVE"] = 'native';
    CurrencyType["BTC"] = 'btc';
    CurrencyType["ETH"] = 'eth';
    CurrencyType["USD"] = 'usd';
    CurrencyType["CNY"] = 'cny';
    CurrencyType["HKD"] = 'hkd';
    CurrencyType["JPY"] = 'jpy';
    CurrencyType["EUR"] = 'eur';
})(CurrencyType || (CurrencyType = {}));
var OrderSide;
(function(OrderSide) {
    OrderSide[OrderSide["Buy"] = 0] = "Buy";
    OrderSide[OrderSide["Sell"] = 1] = "Sell";
})(OrderSide || (OrderSide = {}));
var GasOptionType;
(function(GasOptionType) {
    GasOptionType["FAST"] = 'fast';
    GasOptionType["NORMAL"] = 'normal';
    GasOptionType["SLOW"] = 'slow';
    GasOptionType["CUSTOM"] = 'custom';
})(GasOptionType || (GasOptionType = {}));
var TokenType;
(function(TokenType) {
    TokenType["Fungible"] = "Fungible";
    TokenType["NonFungible"] = "NonFungible";
})(TokenType || (TokenType = {}));
var SourceType;
(function(SourceType) {
    SourceType[// FT assets
    "DeBank"] = "DeBank";
    SourceType["Zerion"] = "Zerion";
    SourceType["Flow"] = "Flow";
    SourceType["Solana"] = "Solana";
    SourceType["CoinGecko"] = "CoinGecko";
    SourceType["CoinMarketCap"] = "CoinMarketCap";
    SourceType["UniswapInfo"] = "UniswapInfo";
    SourceType["CF"] = 'CloudFlare';
    SourceType["GoPlus"] = "GoPlus";
    SourceType[// NFT assets
    "Rabby"] = "Rabby";
    SourceType["Gem"] = "Gem";
    SourceType["RSS3"] = "RSS3";
    SourceType["Zora"] = 'zora';
    SourceType["OpenSea"] = 'opensea';
    SourceType["Rarible"] = 'rarible';
    SourceType["LooksRare"] = 'looksrare';
    SourceType["NFTScan"] = "NFTScan";
    SourceType["Alchemy_EVM"] = "Alchemy_EVM";
    SourceType["Alchemy_FLOW"] = "Alchemy_FLOW";
    SourceType["Chainbase"] = "Chainbase";
    SourceType["X2Y2"] = "X2Y2";
    SourceType["MagicEden"] = "MagicEden";
    SourceType["Element"] = "Element";
    SourceType["Solsea"] = "Solsea";
    SourceType["Solanart"] = "Solanart";
    SourceType["OKX"] = "OKX";
    SourceType["Uniswap"] = "Uniswap";
    SourceType["NFTX"] = "NFTX";
    SourceType["Etherscan"] = "Etherscan";
    SourceType["CryptoPunks"] = "CryptoPunks";
    SourceType["SimpleHash"] = "SimpleHash";
    SourceType[// Rarity
    "RaritySniper"] = "RaritySniper";
    SourceType["TraitSniper"] = "TraitSniper";
    SourceType[// Token List
    "R2D2"] = "R2D2";
    SourceType["Approval"] = "Approval";
})(SourceType || (SourceType = {}));
var SearchResultType;
(function(SearchResultType) {
    SearchResultType[// e.g., 0x6a7122B831c2B79c508A978f73f2ee23171279B3
    "EOA"] = "EOA";
    SearchResultType[// e.g., vitalik.eth or vitalik.bnb
    "Domain"] = "Domain";
    SearchResultType[// e.g., $MASK #MASK or its address 0x69af81e73a73b40adf4f3d4223cd9b1ece623074
    "FungibleToken"] = "FungibleToken";
    SearchResultType[// e.g., #APE
    "NonFungibleToken"] = "NonFungibleToken";
    SearchResultType[// e.g., #punks
    "NonFungibleCollection"] = "NonFungibleCollection";
    SearchResultType[// e.g., realMaskNetwork
    "CollectionListByTwitterHandler"] = "CollectionListByTwitterHandler";
    SearchResultType[// e.g., PancakeSwap
    "DAO"] = "DAO";
})(SearchResultType || (SearchResultType = {}));
var ActivityType;
(function(ActivityType) {
    ActivityType["Transfer"] = "Transfer";
    ActivityType["Mint"] = "Mint";
    ActivityType["Sale"] = "Sale";
    ActivityType["Offer"] = "Offer";
    ActivityType["Burn"] = "Burn";
    ActivityType["List"] = "List";
    ActivityType["CancelOffer"] = "CancelOffer";
})(ActivityType || (ActivityType = {}));
var MessageStateType;
(function(MessageStateType) {
    MessageStateType[MessageStateType["NOT_DEPEND"] = 1] = "NOT_DEPEND";
    MessageStateType[MessageStateType["APPROVED"] = 2] = "APPROVED";
    MessageStateType[MessageStateType["DENIED"] = 3] = "DENIED";
})(MessageStateType || (MessageStateType = {}));
var TransactionStatusType;
(function(TransactionStatusType) {
    TransactionStatusType[TransactionStatusType["NOT_DEPEND"] = 1] = "NOT_DEPEND";
    TransactionStatusType[TransactionStatusType["SUCCEED"] = 2] = "SUCCEED";
    TransactionStatusType[TransactionStatusType["FAILED"] = 3] = "FAILED";
})(TransactionStatusType || (TransactionStatusType = {}));
var TransactionReceiptStatusType;
(function(TransactionReceiptStatusType) {
    TransactionReceiptStatusType[TransactionReceiptStatusType["FAILED"] = 0] = "FAILED";
    TransactionReceiptStatusType[TransactionReceiptStatusType["SUCCEED"] = 1] = "SUCCEED";
    TransactionReceiptStatusType[TransactionReceiptStatusType["NOT_DEPEND"] = 2] = "NOT_DEPEND";
})(TransactionReceiptStatusType || (TransactionReceiptStatusType = {}));
var TransactionDescriptorType;
(function(TransactionDescriptorType) {
    TransactionDescriptorType[/** Transfer on chain value. */ "TRANSFER"] = 'transfer';
    TransactionDescriptorType[/** A transaction to operate state mutations. */ "INTERACTION"] = 'interaction';
    TransactionDescriptorType[/** A transaction to deploy programs. */ "DEPLOYMENT"] = 'deployment';
    TransactionDescriptorType[/** A transaction to cancel a previous transaction. */ "CANCEL"] = 'cancel';
    TransactionDescriptorType[/** A transaction to modify a previous transaction. */ "RETRY"] = 'retry';
})(TransactionDescriptorType || (TransactionDescriptorType = {}));
var FontSize;
(function(FontSize) {
    FontSize["X_Small"] = 'xSmall';
    FontSize["Small"] = 'small';
    FontSize["Normal"] = 'normal';
    FontSize["Large"] = 'large';
    FontSize["X_Large"] = 'xLarge';
})(FontSize || (FontSize = {}));
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["Light"] = 'light';
    ThemeMode["Dark"] = 'dark';
})(ThemeMode || (ThemeMode = {}));
var ThemeColor// EIP3091
// Indicate a built-in chain or customized one.
/** An unique ID for each network */ /** The ID of the plugin that provides the functionality of the network. */ /** The chain id */ /** The network type */ /** The network icon */ /** The network icon in fixed color */ /** The average time for mining a block (unit: seconds). */ /** The background gradient color for relative network bar */ /** The network name. e.g. Ethereum */ /** The network short name. e.g. 'ETH' */ /** Is a mainnet network */ /** An unique ID for each wallet provider */ /** The ID of a plugin that provides the adoption of this provider. */ /** The provider type */ /** The provider icon */ /** The provider name */ /** The provider bar background gradient color */ /** The provider icon filter color */ /** Enable requirements */ /** A link to provider's home website */ /** A link only contains domain name */ /** A link to download the client application */ /** For NFT, it could be `${chainId}.${contractAddress}.${tokenId}` */ /** NFT has tokenId */ /** Added by user */ // Sorted by market cap.
/** source type */ /** @example 2.5% */ /** source type */ /** Might be the format `TheName #42` */ /** image url */ /** Useful for progress loading */ /** source media url */ /** source media type */ /** project url */ /** source type */ /** some providers define id, while others don't. For those don't, we will fallback to contract address */ /** the balance of the current owner */ /** the amount of holders */ /** verified by provider */ /** unix timestamp */ /** source type */ // collection name
// The param `from` of the transaction
// The param `to` of the transaction
// The user address who received the NFT
// The user address who sent the NFT
// #region solana
// #endregion
/** the token id */ /** the address or uid of the token owner */ /** the contract info */ /** the media metadata */ /** the collection info */ /** The type of trait. */ /** The value of trait. */ /** The rarity of trait in percentage. */ /** unix timestamp */ /** unix timestamp */ /** tokens available to make an order */ /** tokens available to make an offer */ /** chain Id */ /** permalink of asset */ /** token amount */ /** transaction hash */ /** buy or sell */ /** the account make the order */ /** the account fullfil the order */ /** unix timestamp */ /** unix timestamp */ /** calculated current price */ /** the payment token and corresponding price */ /** source type */ /** chain Id */ /** event type */ /** permalink of asset */ /** name of asset */ /** symbol of asset */ /** token amount */ /** transaction hash */ /** the account make the order */ /** the account fullfil the order */ /** the account who send the token */ /** the account who receive the token */ /** unix timestamp */ /** relate token price */ /** the payment token and corresponding price */ /** the payment token */ /** source type */ /**
 * A fungible token but with more metadata
 */ /** currently balance */ /** estimated price */ /** estimated value */ /**
 * A non-fungible token but with more metadata
 */ /** permalink */ /** the creator data */ /** the owner data */ /** estimated price */ /** rarity */ /** traits of the digital asset */ /** token on auction */ /** related orders */ /** related events */ /** all payment tokens */ /** the payment token and corresponding price */ /** source type */ /**
 * Authorization about a fungible token.
 */ /** spender address */ /** spender name */ /** spender logo */ /** allowance token amount of this spender */ /** allowance token amount(not formatted by token decimals) of this spender */ /**
 * Authorization about a non-fungible contract.
 */ /** The original searched keyword */ /** alias name list, e.g. binance for bnb. */ // If pin this to top of results
/** The id of token on the provider platform */ /** The transaction type */ /** a transaction title. */ /** The original transaction object */ /** The address of the token leveraged to swap other tokens */ /** The amount of the token leveraged to swap other tokens */ /** a human-readable description. */ /** a human-readable description for successful transaction. */ /** a human-readable title for successful transaction. */ /** a human-readable description for failed transaction. */ /** a human-readable title for failed transaction. */ /** The spender address of erc20 approve */ /** The spender address of erc721 approve */ /** The method name of contract function */ /** The Non-Fungible token description */ /** The custom token description */ /** the descriptor type */ /** chain id */ /** the from address. */ /** the to address */ /** the value amount (polyfill to 0x0 if absent in the original transaction) */ /** code to deploy */ /** transaction hash */ /** methods */ /** name */ /** actual parameters */ /** nested children contexts */ /** address */ /** address */ /** unix timestamp */ /** transferred assets */ /** estimated tx fee */ /** the initial transaction id */ /** the id for accessing tx from candidates */ /** the chain id */ /** status type */ /** all available tx candidates */ /** record drafted at */ /** record created at */ /** record updated at */ /** a dynamically computed field in the hook which means the minted (initial) transaction */ /** Emit if the balance of the account updated. */ /** Emit if the balance of the chain updated. */ /** Emit when error occur */ /** Emit when the watched transaction status updated. */ /** Is testnets valid */ /** The currency of estimated values and prices. */ /** The gas options type */ /** The source type of fungible assets */ /** The source type of non-fungible assets */ /** Set the default fiat currency. */ /** The tracked addresses of currently chosen sub-network */ /** Add a contact into address book. */ /** Remove a contact from address book. */ /** Rename an name of contact from address book. */ /** The id of the used network. */ /** The used network. */ /** All available networks. */ /** Add a new network. */ /** Use the network RPC to build a connection. */ /** Update a network. */ /** Remove a network */ /** Is approved */ /** Detect if an account is approved the statement */ /** Approve statement of designate account */ /** Revoke statement of designate account */ /** Merge many social addresses into a social account. Don't overwrite it in sub-classes. */ /** Find all social addresses related to the given identity. */ /** get address of domain name */ /** get domain name of address */ /** safely get domain name of address */ /** The user trusted fungible tokens. */ /** The user trusted non-fungible tokens. */ /** The user blocked fungible tokens. */ /** The user blocked non-fungible tokens. */ /** Credible fungible tokens */ /** Credible non-fungible tokens */ /** Add a token */ /** Remove a token */ /** Unblock a token */ /** Block a token */ /** Create a credible fungible token */ /** Create a credible non-fungible token */ /** All unresolved requests. */ /** Updates a request. */ /** Applies a request. */ /** Applies a request and waits for confirmation from the user. */ /** Approves a request. */ /** Rejects a request. */ /** Rejects all requests. */ /** The tracked transactions of currently chosen sub-network */ /** Get a transaction record. */ /** Add a transaction record. */ /** Replace a transaction with new record. */ /** Update transaction status. */ /** Remove a transaction record. */ /** Get all transaction records. */ /** Clear all transactions of the account under given chain */ /** Step 1: Create a transaction formatting context. */ /** Step 2: Create a transaction descriptor */ /** Elaborate a transaction in a human-readable format. */ /** Notify error */ /** Notify transaction status */ /** The account of the currently visiting site. */ /** The chain id of the currently visiting site. */ /** The network type of the currently visiting site. */ /** The provider type of the currently visiting site. */ /** Detect if a provider is ready */ /** Wait until a provider ready */ /** Connect with the provider and set chain id. */ /** Disconnect with the provider. */ /** Sign a message with persona (w or w/o popups) */ // TODO: this is not the best place to put this signature, but to avoid IOContext leaked as a global variable, we'll put it here for now.
;
(function(ThemeColor) {
    ThemeColor["Blue"] = 'rgb(37, 99, 235)';
})(ThemeColor || (ThemeColor = {}));


/***/ }),

/***/ 33026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $F: () => (/* binding */ getENSConstants),
/* harmony export */   AA: () => (/* binding */ useRedPacketConstants),
/* harmony export */   AM: () => (/* binding */ getLidoConstant),
/* harmony export */   BL: () => (/* binding */ useLensConstants),
/* harmony export */   BO: () => (/* binding */ getSmartPayConstants),
/* harmony export */   Bx: () => (/* binding */ getDeBankConstants),
/* harmony export */   CW: () => (/* binding */ getCryptoPunksConstants),
/* harmony export */   FF: () => (/* binding */ getLensProfileConstants),
/* harmony export */   Fd: () => (/* binding */ useSmartPayConstants),
/* harmony export */   GV: () => (/* binding */ getRedPacketConstants),
/* harmony export */   Gr: () => (/* binding */ getTraderConstants),
/* harmony export */   Hi: () => (/* binding */ getTokenListConstants),
/* harmony export */   IJ: () => (/* binding */ getNftRedPacketConstant),
/* harmony export */   N_: () => (/* binding */ useGitcoinConstants),
/* harmony export */   Ox: () => (/* binding */ getAirdropClaimersConstants),
/* harmony export */   PN: () => (/* binding */ usePetConstants),
/* harmony export */   Qq: () => (/* binding */ useArtBlocksConstants),
/* harmony export */   V6: () => (/* binding */ getCoinGeckoConstants),
/* harmony export */   _x: () => (/* binding */ getTokenConstant),
/* harmony export */   aV: () => (/* binding */ getTokenConstants),
/* harmony export */   cY: () => (/* binding */ useAirdropClaimersConstants),
/* harmony export */   ed: () => (/* binding */ getTokenAssetBaseURLConstants),
/* harmony export */   fj: () => (/* binding */ getArbConstants),
/* harmony export */   gA: () => (/* binding */ getEtherscanConstants),
/* harmony export */   hc: () => (/* binding */ getOpenOceanConstants),
/* harmony export */   k$: () => (/* binding */ getGoPlusLabsConstants),
/* harmony export */   kd: () => (/* binding */ useTokenConstants),
/* harmony export */   kt: () => (/* binding */ useMaskBoxConstants),
/* harmony export */   oo: () => (/* binding */ useTokenConstant),
/* harmony export */   p8: () => (/* binding */ getSmartPayConstant),
/* harmony export */   pS: () => (/* binding */ getNftRedPacketConstants),
/* harmony export */   rH: () => (/* binding */ getSpaceIdConstants),
/* harmony export */   rY: () => (/* binding */ ChainIdList),
/* harmony export */   rd: () => (/* binding */ getAaveConstant),
/* harmony export */   t0: () => (/* binding */ getRPCConstants),
/* harmony export */   uq: () => (/* binding */ useNftRedPacketConstants),
/* harmony export */   wB: () => (/* binding */ getEthereumConstant),
/* harmony export */   yj: () => (/* binding */ getMaskBoxConstant),
/* harmony export */   z8: () => (/* binding */ getRedPacketConstant)
/* harmony export */ });
/* unused harmony exports getEthereumConstants, useEthereumConstant, useEthereumConstants, getDeBankConstant, useDeBankConstant, useDeBankConstants, getCoinGeckoConstant, useCoinGeckoConstant, useCoinGeckoConstants, getGitcoinConstant, getGitcoinConstants, useGitcoinConstant, getOpenOceanConstant, useOpenOceanConstant, useOpenOceanConstants, useRedPacketConstant, getTraderConstant, useTraderConstant, useTraderConstants, getTrendingConstant, getTrendingConstants, useTrendingConstant, useTrendingConstants, getMaskBoxConstants, useMaskBoxConstant, getRPCConstant, useRPCConstant, useRPCConstants, getEtherscanConstant, useEtherscanConstant, useEtherscanConstants, getTokenListConstant, useTokenListConstant, useTokenListConstants, getTokenAssetBaseURLConstant, useTokenAssetBaseURLConstant, useTokenAssetBaseURLConstants, getArtBlocksConstant, getArtBlocksConstants, useArtBlocksConstant, useNftRedPacketConstant, getAaveConstants, useAaveConstant, useAaveConstants, getLidoConstants, useLidoConstant, useLidoConstants, getPetConstant, getPetConstants, usePetConstant, useSmartPayConstant, getLensConstant, getLensConstants, useLensConstant, getAirdropClaimersConstant, useAirdropClaimersConstant */
/* harmony import */ var _masknet_web3_constants_evm_ethereum_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45831);
/* harmony import */ var _masknet_web3_constants_evm_debank_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92995);
/* harmony import */ var _masknet_web3_constants_evm_coingecko_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60702);
/* harmony import */ var _masknet_web3_constants_evm_gitcoin_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72071);
/* harmony import */ var _masknet_web3_constants_evm_openocean_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56971);
/* harmony import */ var _masknet_web3_constants_evm_red_packet_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19684);
/* harmony import */ var _masknet_web3_constants_evm_nft_red_packet_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62337);
/* harmony import */ var _masknet_web3_constants_evm_token_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42482);
/* harmony import */ var _masknet_web3_constants_evm_trader_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25189);
/* harmony import */ var _masknet_web3_constants_evm_trending_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66745);
/* harmony import */ var _masknet_web3_constants_evm_mask_box_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1353);
/* harmony import */ var _masknet_web3_constants_evm_rpc_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91687);
/* harmony import */ var _masknet_web3_constants_evm_etherscan_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68818);
/* harmony import */ var _masknet_web3_constants_evm_token_list_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52598);
/* harmony import */ var _masknet_web3_constants_evm_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50828);
/* harmony import */ var _masknet_web3_constants_evm_artblocks_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(978);
/* harmony import */ var _masknet_web3_constants_evm_aave_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25828);
/* harmony import */ var _masknet_web3_constants_evm_lido_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3278);
/* harmony import */ var _masknet_web3_constants_evm_pet_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(78343);
/* harmony import */ var _masknet_web3_constants_evm_smart_pay_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(62455);
/* harmony import */ var _masknet_web3_constants_evm_ens_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30246);
/* harmony import */ var _masknet_web3_constants_evm_arb_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(30390);
/* harmony import */ var _masknet_web3_constants_evm_space_id_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97874);
/* harmony import */ var _masknet_web3_constants_evm_lens_profile_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(59740);
/* harmony import */ var _masknet_web3_constants_evm_gopluslabs_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1389);
/* harmony import */ var _masknet_web3_constants_evm_lens_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(38186);
/* harmony import */ var _masknet_web3_constants_evm_cryptopunks_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(74476);
/* harmony import */ var _masknet_web3_constants_evm_airdrop_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(97996);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22563);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);































function getEnvConstants(key) {
    try {
        const map = {
            WEB3_CONSTANTS_RPC: ""
        };
        return map[key] ?? '';
    } catch  {
        return '';
    }
}
const ChainIdList = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_).map((x)=>x.value);
const getEthereumConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_ethereum_json__WEBPACK_IMPORTED_MODULE_3__);
const getEthereumConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_ethereum_json__WEBPACK_IMPORTED_MODULE_3__);
const useEthereumConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getEthereumConstants);
const useEthereumConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getEthereumConstants);
const getDeBankConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_debank_json__WEBPACK_IMPORTED_MODULE_4__);
const getDeBankConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_debank_json__WEBPACK_IMPORTED_MODULE_4__);
const useDeBankConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getDeBankConstants);
const useDeBankConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getDeBankConstants);
const getCoinGeckoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_coingecko_json__WEBPACK_IMPORTED_MODULE_5__);
const getCoinGeckoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_coingecko_json__WEBPACK_IMPORTED_MODULE_5__);
const useCoinGeckoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getCoinGeckoConstants);
const useCoinGeckoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getCoinGeckoConstants);
const getGitcoinConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_gitcoin_json__WEBPACK_IMPORTED_MODULE_6__);
const getGitcoinConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_gitcoin_json__WEBPACK_IMPORTED_MODULE_6__);
const useGitcoinConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getGitcoinConstants);
const useGitcoinConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getGitcoinConstants);
const getOpenOceanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_openocean_json__WEBPACK_IMPORTED_MODULE_7__);
const getOpenOceanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_openocean_json__WEBPACK_IMPORTED_MODULE_7__);
const useOpenOceanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getOpenOceanConstants);
const useOpenOceanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getOpenOceanConstants);
const getRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_red_packet_json__WEBPACK_IMPORTED_MODULE_8__);
const getRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_red_packet_json__WEBPACK_IMPORTED_MODULE_8__);
const useRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getRedPacketConstants);
const useRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getRedPacketConstants);
const getTokenConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_json__WEBPACK_IMPORTED_MODULE_9__);
const getTokenConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_json__WEBPACK_IMPORTED_MODULE_9__);
const useTokenConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTokenConstants);
const useTokenConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTokenConstants);
const getTraderConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trader_json__WEBPACK_IMPORTED_MODULE_10__);
const getTraderConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trader_json__WEBPACK_IMPORTED_MODULE_10__);
const useTraderConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTraderConstants);
const useTraderConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTraderConstants);
const getTrendingConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trending_json__WEBPACK_IMPORTED_MODULE_11__);
const getTrendingConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trending_json__WEBPACK_IMPORTED_MODULE_11__);
const useTrendingConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTrendingConstants);
const useTrendingConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTrendingConstants);
const getMaskBoxConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_mask_box_json__WEBPACK_IMPORTED_MODULE_12__);
const getMaskBoxConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_mask_box_json__WEBPACK_IMPORTED_MODULE_12__);
const useMaskBoxConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getMaskBoxConstants);
const useMaskBoxConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getMaskBoxConstants);
const getRPCConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllFromJSON */ .t)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, getEnvConstants('WEB3_CONSTANTS_RPC'), _masknet_web3_constants_evm_rpc_json__WEBPACK_IMPORTED_MODULE_13__);
const getRPCConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformFromJSON */ .rm)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, getEnvConstants('WEB3_CONSTANTS_RPC'), _masknet_web3_constants_evm_rpc_json__WEBPACK_IMPORTED_MODULE_13__);
const useRPCConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getRPCConstants);
const useRPCConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getRPCConstants);
const getEtherscanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_etherscan_json__WEBPACK_IMPORTED_MODULE_14__);
const getEtherscanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_etherscan_json__WEBPACK_IMPORTED_MODULE_14__);
const useEtherscanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getEtherscanConstants);
const useEtherscanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getEtherscanConstants);
const getTokenListConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_list_json__WEBPACK_IMPORTED_MODULE_15__);
const getTokenListConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_list_json__WEBPACK_IMPORTED_MODULE_15__);
const useTokenListConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTokenListConstants);
const useTokenListConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTokenListConstants);
const getTokenAssetBaseURLConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_16__);
const getTokenAssetBaseURLConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_16__);
const useTokenAssetBaseURLConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTokenAssetBaseURLConstants);
const useTokenAssetBaseURLConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTokenAssetBaseURLConstants);
const getArtBlocksConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_artblocks_json__WEBPACK_IMPORTED_MODULE_17__);
const getArtBlocksConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_artblocks_json__WEBPACK_IMPORTED_MODULE_17__);
const useArtBlocksConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getArtBlocksConstants);
const useArtBlocksConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getArtBlocksConstants);
const getNftRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_nft_red_packet_json__WEBPACK_IMPORTED_MODULE_18__);
const getNftRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_nft_red_packet_json__WEBPACK_IMPORTED_MODULE_18__);
const useNftRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getNftRedPacketConstants);
const useNftRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getNftRedPacketConstants);
const getAaveConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_aave_json__WEBPACK_IMPORTED_MODULE_19__);
const getAaveConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_aave_json__WEBPACK_IMPORTED_MODULE_19__);
const useAaveConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getAaveConstants);
const useAaveConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getAaveConstants);
const getLidoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lido_json__WEBPACK_IMPORTED_MODULE_20__);
const getLidoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lido_json__WEBPACK_IMPORTED_MODULE_20__);
const useLidoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getLidoConstants);
const useLidoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getLidoConstants);
const getPetConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_pet_json__WEBPACK_IMPORTED_MODULE_21__);
const getPetConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_pet_json__WEBPACK_IMPORTED_MODULE_21__);
const usePetConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getPetConstants);
const usePetConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getPetConstants);
const getSmartPayConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_smart_pay_json__WEBPACK_IMPORTED_MODULE_22__);
const getSmartPayConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_smart_pay_json__WEBPACK_IMPORTED_MODULE_22__);
const useSmartPayConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getSmartPayConstants);
const useSmartPayConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getSmartPayConstants);
const getENSConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_ens_json__WEBPACK_IMPORTED_MODULE_23__);
const getArbConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_arb_json__WEBPACK_IMPORTED_MODULE_24__);
const getSpaceIdConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_space_id_json__WEBPACK_IMPORTED_MODULE_25__);
const getLensProfileConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lens_profile_json__WEBPACK_IMPORTED_MODULE_26__);
const getGoPlusLabsConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_gopluslabs_json__WEBPACK_IMPORTED_MODULE_27__);
const getLensConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lens_json__WEBPACK_IMPORTED_MODULE_28__);
const getLensConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lens_json__WEBPACK_IMPORTED_MODULE_28__);
const useLensConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getLensConstants);
const useLensConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getLensConstants);
const getCryptoPunksConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_cryptopunks_json__WEBPACK_IMPORTED_MODULE_29__);
const getAirdropClaimersConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_airdrop_json__WEBPACK_IMPORTED_MODULE_30__);
const getAirdropClaimersConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_airdrop_json__WEBPACK_IMPORTED_MODULE_30__);
const useAirdropClaimersConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getAirdropClaimersConstants);
const useAirdropClaimersConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getAirdropClaimersConstants);


/***/ }),

/***/ 41487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $u: () => (/* binding */ formatEtherToWei),
/* harmony export */   Lt: () => (/* binding */ formatGas),
/* harmony export */   Xy: () => (/* binding */ formatTokenId),
/* harmony export */   bc: () => (/* binding */ formatDomainName),
/* harmony export */   d0: () => (/* binding */ formatTrait),
/* harmony export */   dN: () => (/* binding */ formatAmount),
/* harmony export */   f1: () => (/* binding */ formatWeiToGwei),
/* harmony export */   j8: () => (/* binding */ formatEthereumAddress),
/* harmony export */   nU: () => (/* binding */ formatGweiToWei),
/* harmony export */   sB: () => (/* binding */ formatSchemaType),
/* harmony export */   yp: () => (/* binding */ formatWeiToEther)
/* harmony export */ });
/* unused harmony exports formatHash, formatKeccakHash, formatNumberString, formatEtherToGwei, formatGweiToEther */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74170);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29763);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43434);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21447);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24770);
/* harmony import */ var _address_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65327);
/* harmony import */ var _isValidDomain_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89019);








function formatAmount(amount = '0', decimals = 0) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(amount).shiftedBy(decimals).toFixed();
}
const formatEthereumAddress = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function formatEthereumAddress(address, size = 0) {
    if (!(0,_address_js__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At)(address)) return address;
    const address_ = (0,_address_js__WEBPACK_IMPORTED_MODULE_2__/* .checksumAddress */ .xs)(address);
    if (size === 0 || size >= 20) return address_;
    return `${address_.slice(0, Math.max(0, 2 + size))}...${address_.slice(-size)}`;
}, (addr, size)=>`${addr}.${size}`);
/**
 * timestamp in seconds or milliseconds
 */ const formatTimestamp = (timestamp)=>{
    const value = Number.parseInt(timestamp, 10) * (timestamp.length === 10 ? 1000 : 1);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(new Date(value), 'yyyy-MM-dd HH:mm');
};
function formatTrait(trait) {
    if ((0,_address_js__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At)(trait.value)) return formatEthereumAddress(trait.value, 4);
    if (trait.displayType === 'date') return formatTimestamp(trait.value);
    return trait.value;
}
function formatHash(hash, size = 0) {
    if (size === 0) return hash;
    return `${hash.slice(0, Math.max(0, 2 + size))}...${hash.slice(-size)}`;
}
const formatSchemaType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createLookupTableResolver */ .F)({
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.Native]: 'Native',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.ERC20]: 'ERC20',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.ERC721]: 'ERC721',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.ERC1155]: 'ERC1155',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.SBT]: 'SBT'
}, '');
function formatTokenId(tokenId = '', size_ = 4) {
    const size = Math.max(2, size_);
    const isHex = tokenId.toLowerCase().startsWith('0x');
    const prefix = isHex ? '0x' : '#';
    if (tokenId.length < size * 2 + prefix.length) return `#${tokenId}`;
    const head = tokenId.slice(0, isHex ? 2 + size : size);
    const tail = tokenId.slice(-size);
    return `${prefix}${head}...${tail}`;
}
function formatDomainName(domain, size = 18, invalidIgnore) {
    if (!domain) return domain;
    if (!(0,_isValidDomain_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidDomain */ .h)(domain) && !invalidIgnore) {
        return domain;
    }
    if (domain.length <= size) return domain;
    if ((0,_isValidDomain_js__WEBPACK_IMPORTED_MODULE_5__/* .isEnsSubdomain */ .t)(domain)) {
        return domain.replace(/^\[([^\]]+?)]\.(.*)$/, (_, hash, mainName)=>{
            return `[${hash.slice(0, 4)}...${hash.slice(-4)}].${formatDomainName(mainName, size, invalidIgnore)}`;
        });
    }
    return domain.replace(/^(.*)\.(\w+)$/, (_, name, suffix)=>{
        return `${name.slice(0, size - 6)}...${name.slice(-2)}.${suffix}`;
    });
}
function formatKeccakHash(hash, size = 0) {
    if (!/0x\w{64}/.test(hash)) return hash;
    if (size === 0) return hash;
    return `${hash.slice(0, Math.max(0, 2 + size))}...${hash.slice(-size)}`;
}
function formatNumberString(input, size = 0) {
    if (!/\d+/.test(input)) return input;
    if (size === 0) return input;
    return `${input.slice(0, Math.max(0, size))}...${input.slice(-size)}`;
}
function formatWeiToGwei(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(-9);
}
function formatWeiToEther(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(-18);
}
function formatGweiToWei(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(9).integerValue();
}
function formatEtherToGwei(value) {
    return new BigNumber(value).shiftedBy(9).integerValue();
}
function formatGas(value) {
    if (!value || (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(value)) return '';
    const gwei = formatWeiToGwei(value);
    if (gwei.lt('0.01')) return '<0.01 Gwei';
    return `${gwei.toFixed(2)} Gwei`;
}
function formatEtherToWei(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(18).integerValue();
}
function formatGweiToEther(value) {
    return new BigNumber(value).shiftedBy(-9);
}


/***/ }),

/***/ 37911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 69427:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.copy = void 0;
const copy = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    if (sw <= 0 || sh <= 0)
        return;
    const sourceData = new Uint32Array(source.data.buffer);
    const destData = new Uint32Array(dest.data.buffer);
    for (let y = 0; y < sh; y++) {
        const sourceY = sy + y;
        if (sourceY < 0 || sourceY >= source.height)
            continue;
        const destY = dy + y;
        if (destY < 0 || destY >= dest.height)
            continue;
        for (let x = 0; x < sw; x++) {
            const sourceX = sx + x;
            if (sourceX < 0 || sourceX >= source.width)
                continue;
            const destX = dx + x;
            if (destX < 0 || destX >= dest.width)
                continue;
            const sourceIndex = sourceY * source.width + sourceX;
            const destIndex = destY * dest.width + destX;
            destData[destIndex] = sourceData[sourceIndex];
        }
    }
};
exports.copy = copy;


/***/ }),

/***/ 48746:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateImageFactory = (fill = [0, 0, 0, 0], channels = 4) => {
    channels = Math.floor(channels);
    if (isNaN(channels) || channels < 1) {
        throw TypeError('channels should be a positive non-zero number');
    }
    if (!('length' in fill) || fill.length < channels) {
        throw TypeError(`fill should be iterable with at least ${channels} members`);
    }
    fill = (new Uint8ClampedArray(fill)).slice(0, channels);
    const allZero = fill.every(v => v === 0);
    const createImage = (width, height, data) => {
        if (width === undefined || height === undefined) {
            throw TypeError('Not enough arguments');
        }
        width = Math.floor(width);
        height = Math.floor(height);
        if (isNaN(width) || width < 1 || isNaN(height) || height < 1) {
            throw TypeError('Index or size is negative or greater than the allowed amount');
        }
        const length = width * height * channels;
        if (data === undefined) {
            data = new Uint8ClampedArray(length);
        }
        if (data instanceof Uint8ClampedArray) {
            if (data.length !== length) {
                throw TypeError('Index or size is negative or greater than the allowed amount');
            }
            if (!allZero) {
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        const index = (y * width + x) * channels;
                        for (let c = 0; c < channels; c++) {
                            data[index + c] = fill[c];
                        }
                    }
                }
            }
            return {
                get width() { return width; },
                get height() { return height; },
                get data() { return data; }
            };
        }
        throw TypeError('Expected data to be Uint8ClampedArray or undefined');
    };
    return createImage;
};
exports.createImage = exports.CreateImageFactory();


/***/ }),

/***/ 99461:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convolve = void 0;
const fixedFracBits = 14;
const convolve = (source, dest, sw, sh, dw, filters) => {
    let srcOffset = 0;
    let destOffset = 0;
    // For each row
    for (let sourceY = 0; sourceY < sh; sourceY++) {
        let filterPtr = 0;
        // Apply precomputed filters to each destination row point
        for (let destX = 0; destX < dw; destX++) {
            // Get the filter that determines the current output pixel.
            const filterShift = filters[filterPtr++];
            let srcPtr = (srcOffset + (filterShift * 4)) | 0;
            let r = 0;
            let g = 0;
            let b = 0;
            let a = 0;
            // Apply the filter to the row to get the destination pixel r, g, b, a
            for (let filterSize = filters[filterPtr++]; filterSize > 0; filterSize--) {
                const filterValue = filters[filterPtr++];
                r = (r + filterValue * source[srcPtr]) | 0;
                g = (g + filterValue * source[srcPtr + 1]) | 0;
                b = (b + filterValue * source[srcPtr + 2]) | 0;
                a = (a + filterValue * source[srcPtr + 3]) | 0;
                srcPtr = (srcPtr + 4) | 0;
            }
            // Bring this value back in range. All of the filter scaling factors
            // are in fixed point with fixedFracBits bits of fractional part.
            //
            // (!) Add 1/2 of value before clamping to get proper rounding. In other
            // case brightness loss will be noticeable if you resize image with white
            // border and place it on white background.
            //
            dest[destOffset] = (r + (1 << 13)) >> fixedFracBits;
            dest[destOffset + 1] = (g + (1 << 13)) >> fixedFracBits;
            dest[destOffset + 2] = (b + (1 << 13)) >> fixedFracBits;
            dest[destOffset + 3] = (a + (1 << 13)) >> fixedFracBits;
            destOffset = (destOffset + sh * 4) | 0;
        }
        destOffset = ((sourceY + 1) * 4) | 0;
        srcOffset = ((sourceY + 1) * sw * 4) | 0;
    }
};
exports.convolve = convolve;
/*
  Adapted to typescript from pica: https://github.com/nodeca/pica

  (The MIT License)

  Copyright (C) 2014-2017 by Vitaly Puzrin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/


/***/ }),

/***/ 93184:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filters = void 0;
const fixedFracBits = 14;
const filterValue = (x, a) => {
    if (x <= -a || x >= a)
        return 0;
    if (x == 0)
        return 0;
    // appears to do nothing?
    // if ( x > -1.19209290e-07 && x < 1.19209290e-07 ) return 1
    const xPi = x * Math.PI;
    return (Math.sin(xPi) / xPi) * Math.sin(xPi / a) / (xPi / a);
};
const toFixedPoint = (value) => Math.round(value * ((1 << fixedFracBits) - 1));
const filters = (srcSize, destSize, scale, offset, use2) => {
    const a = use2 ? 2 : 3;
    const scaleInverted = 1 / scale;
    const scaleClamped = Math.min(1, scale); // For upscale
    // Filter window (averaging interval), scaled to src image
    const srcWindow = a / scaleClamped;
    const maxFilterElementSize = Math.floor((srcWindow + 1) * 2);
    const packedFilter = new Int16Array((maxFilterElementSize + 2) * destSize);
    let packedFilterPtr = 0;
    // For each destination pixel calculate source range and built filter values
    for (let destPixel = 0; destPixel < destSize; destPixel++) {
        // Scaling should be done relative to central pixel point
        const sourcePixel = (destPixel + 0.5) * scaleInverted + offset;
        const sourceFirst = Math.max(0, Math.floor(sourcePixel - srcWindow));
        const sourceLast = Math.min(srcSize - 1, Math.ceil(sourcePixel + srcWindow));
        const filterElementSize = sourceLast - sourceFirst + 1;
        const floatFilter = new Float32Array(filterElementSize);
        const fxpFilter = new Int16Array(filterElementSize);
        let total = 0;
        // Fill filter values for calculated range
        let index = 0;
        for (let pixel = sourceFirst; pixel <= sourceLast; pixel++) {
            const floatValue = filterValue(((pixel + 0.5) - sourcePixel) * scaleClamped, a);
            total += floatValue;
            floatFilter[index] = floatValue;
            index++;
        }
        // Normalize filter, convert to fixed point and accumulate conversion error
        let filterTotal = 0;
        for (let index = 0; index < floatFilter.length; index++) {
            const filterValue = floatFilter[index] / total;
            filterTotal += filterValue;
            fxpFilter[index] = toFixedPoint(filterValue);
        }
        // Compensate normalization error, to minimize brightness drift
        fxpFilter[destSize >> 1] += toFixedPoint(1 - filterTotal);
        //
        // Now pack filter to useable form
        //
        // 1. Trim heading and tailing zero values, and compensate shitf/length
        // 2. Put all to single array in this format:
        //
        //    [ pos shift, data length, value1, value2, value3, ... ]
        //
        let leftNotEmpty = 0;
        while (leftNotEmpty < fxpFilter.length && fxpFilter[leftNotEmpty] === 0) {
            leftNotEmpty++;
        }
        let rightNotEmpty = fxpFilter.length - 1;
        while (rightNotEmpty > 0 && fxpFilter[rightNotEmpty] === 0) {
            rightNotEmpty--;
        }
        const filterShift = sourceFirst + leftNotEmpty;
        const filterSize = rightNotEmpty - leftNotEmpty + 1;
        packedFilter[packedFilterPtr++] = filterShift; // shift
        packedFilter[packedFilterPtr++] = filterSize; // size
        packedFilter.set(fxpFilter.subarray(leftNotEmpty, rightNotEmpty + 1), packedFilterPtr);
        packedFilterPtr += filterSize;
    }
    return packedFilter;
};
exports.filters = filters;
/*
  Adapted to typescript from pica: https://github.com/nodeca/pica

  (The MIT License)

  Copyright (C) 2014-2017 by Vitaly Puzrin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/


/***/ }),

/***/ 30804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = exports.m6 = void 0;
const copy_1 = __webpack_require__(69427);
const create_image_1 = __webpack_require__(48746);
const filters_1 = __webpack_require__(93184);
const convolve_1 = __webpack_require__(99461);
const resize = (source, dest, use2 = false) => {
    const xRatio = dest.width / source.width;
    const yRatio = dest.height / source.height;
    const filtersX = filters_1.filters(source.width, dest.width, xRatio, 0, use2);
    const filtersY = filters_1.filters(source.height, dest.height, yRatio, 0, use2);
    const tmp = new Uint8ClampedArray(dest.width * source.height * 4);
    convolve_1.convolve(source.data, tmp, source.width, source.height, dest.width, filtersX);
    convolve_1.convolve(tmp, dest.data, source.height, dest.width, dest.height, filtersY);
};
const lanczos = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    dw = dw | 0;
    dh = dh | 0;
    if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0)
        return;
    if (sx === 0 && sy === 0 && sw === source.width && sh === source.height && dx === 0 && dy === 0 && dw === dest.width && dh === dest.height) {
        resize(source, dest);
        return;
    }
    /*
      this is more expensive than the way we do in other rgba-lib functions, but
      I don't understand the pica code that I based this on well enough to work
      out how to use regions without doing crops first
  
      however copy is pretty fast compared to lanczos, so the difference is slight
    */
    const croppedSource = create_image_1.createImage(sw, sh);
    const croppedDest = create_image_1.createImage(dw, dh);
    copy_1.copy(source, croppedSource, sx, sy);
    resize(croppedSource, croppedDest);
    copy_1.copy(croppedDest, dest, 0, 0, croppedDest.width, croppedDest.height, dx, dy);
};
exports.m6 = lanczos;
const lanczos2 = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    dw = dw | 0;
    dh = dh | 0;
    if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0)
        return;
    if (sx === 0 && sy === 0 && sw === source.width && sh === source.height && dx === 0 && dy === 0 && dw === dest.width && dh === dest.height) {
        resize(source, dest, true);
        return;
    }
    /*
      this is more expensive than the way we do in other rgba-lib functions, but
      I don't understand the pica code that I based this on well enough to work
      out how to use regions without doing crops first
  
      however copy is pretty fast compared to lanczos, so the difference is slight
    */
    const croppedSource = create_image_1.createImage(sw, sh);
    const croppedDest = create_image_1.createImage(dw, dh);
    copy_1.copy(source, croppedSource, sx, sy);
    resize(croppedSource, croppedDest, true);
    copy_1.copy(croppedDest, dest, 0, 0, croppedDest.width, croppedDest.height, dx, dy);
};
__webpack_unused_export__ = lanczos2;


/***/ }),

/***/ 90775:
/***/ (function(module) {

/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function() {
    "use strict";
    var unicodes = function(s, prefix) {
        prefix = prefix || '';
        return s.replace(/(^|-)/g, '$1\\u'+prefix).replace(/,/g, '\\u'+prefix);
    },
    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),
    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),
    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
    regexps = function(symbols, lowers, uppers, impropers) {
        symbols = symbols || basicSymbols;
        lowers = lowers || baseLowerCase;
        uppers = uppers || baseUpperCase;
        impropers = impropers || improperInTitle;
        return {
            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),
            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),
            fill: new RegExp('['+symbols+']+(.|$)','g'),
            sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+lowers+'])', 'g'),
            improper: new RegExp('\\b('+impropers+')\\b', 'g'),
            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),
            upper: new RegExp('^[^'+lowers+']+$'),
            hole: /[^\s]\s[^\s]/,
            apostrophe: /'/g,
            room: new RegExp('['+symbols+']')
        };
    },
    re = regexps(),
    _ = {
        re: re,
        unicodes: unicodes,
        regexps: regexps,
        types: [],
        up: String.prototype.toUpperCase,
        low: String.prototype.toLowerCase,
        cap: function(s) {
            return _.up.call(s.charAt(0))+s.slice(1);
        },
        decap: function(s) {
            return _.low.call(s.charAt(0))+s.slice(1);
        },
        deapostrophe: function(s) {
            return s.replace(re.apostrophe, '');
        },
        fill: function(s, fill, deapostrophe) {
            if (fill != null) {
                s = s.replace(re.fill, function(m, next) {
                    return next ? fill + next : '';
                });
            }
            if (deapostrophe) {
                s = _.deapostrophe(s);
            }
            return s;
        },
        prep: function(s, fill, pascal, upper) {
            s = s == null ? '' : s + '';// force to string
            if (!upper && re.upper.test(s)) {
                s = _.low.call(s);
            }
            if (!fill && !re.hole.test(s)) {
                var holey = _.fill(s, ' ');
                if (re.hole.test(holey)) {
                    s = holey;
                }
            }
            if (!pascal && !re.room.test(s)) {
                s = s.replace(re.relax, _.relax);
            }
            return s;
        },
        relax: function(m, before, acronym, caps) {
            return before + ' ' + (acronym ? acronym+' ' : '') + caps;
        }
    },
    Case = {
        _: _,
        of: function(s) {
            for (var i=0,m=_.types.length; i<m; i++) {
                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }
            }
        },
        flip: function(s) {
            return s.replace(/\w/g, function(l) {
                return (l == _.up.call(l) ? _.low : _.up).call(l);
            });
        },
        random: function(s) {
            return s.replace(/\w/g, function(l) {
                return (Math.round(Math.random()) ? _.up : _.low).call(l);
            });
        },
        type: function(type, fn) {
            Case[type] = fn;
            _.types.push(type);
        }
    },
    types = {
        lower: function(s, fill, deapostrophe) {
            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);
        },
        snake: function(s) {
            return Case.lower(s, '_', true);
        },
        constant: function(s) {
            return Case.upper(s, '_', true);
        },
        camel: function(s) {
            return _.decap(Case.pascal(s));
        },
        kebab: function(s) {
            return Case.lower(s, '-', true);
        },
        upper: function(s, fill, deapostrophe) {
            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);
        },
        capital: function(s, fill, deapostrophe) {
            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {
                return border+_.up.call(letter);
            }), fill, deapostrophe);
        },
        header: function(s) {
            return Case.capital(s, '-', true);
        },
        pascal: function(s) {
            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {
                return _.up.call(letter);
            }), '', true);
        },
        title: function(s) {
            return Case.capital(s).replace(re.improper, function(small, p, i, s) {
                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;
            });
        },
        sentence: function(s, names, abbreviations) {
            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {
                return prelude + _.up.call(letter);
            });
            if (names) {
                names.forEach(function(name) {
                    s = s.replace(new RegExp('\\b'+Case.lower(name)+'\\b', "g"), _.cap);
                });
            }
            if (abbreviations) {
                abbreviations.forEach(function(abbr) {
                    s = s.replace(new RegExp('(\\b'+Case.lower(abbr)+'\\. +)(\\w)'), function(m, abbrAndSpace, letter) {
                        return abbrAndSpace + _.low.call(letter);
                    });
                });
            }
            return s;
        }
    };

    // TODO: Remove "squish" in a future breaking release.
    types.squish = types.pascal;
    
    // Allow import default
    Case.default = Case;

    for (var type in types) {
        Case.type(type, types[type]);
    }
    // export Case (AMD, commonjs, or global)
    var define = typeof define === "function" ? define : function(){};
    define( true && module.exports ? module.exports = Case : this.Case = Case);

}).call(this);


/***/ }),

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 6305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keccak512 = exports.keccak384 = exports.keccak256 = exports.keccak224 = void 0;
const sha3_1 = __webpack_require__(1217);
const utils_1 = __webpack_require__(31679);
exports.keccak224 = (0, utils_1.wrapHash)(sha3_1.keccak_224);
exports.keccak256 = (() => {
    const k = (0, utils_1.wrapHash)(sha3_1.keccak_256);
    k.create = sha3_1.keccak_256.create;
    return k;
})();
exports.keccak384 = (0, utils_1.wrapHash)(sha3_1.keccak_384);
exports.keccak512 = (0, utils_1.wrapHash)(sha3_1.keccak_512);


/***/ }),

/***/ 69644:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schnorr = exports.Signature = exports.Point = exports.CURVE = exports.utils = exports.getSharedSecret = exports.recoverPublicKey = exports.verify = exports.signSync = exports.sign = exports.getPublicKey = void 0;
const hmac_1 = __webpack_require__(58254);
const sha256_1 = __webpack_require__(81353);
const secp256k1_1 = __webpack_require__(27076);
var secp256k1_2 = __webpack_require__(27076);
Object.defineProperty(exports, "getPublicKey", ({ enumerable: true, get: function () { return secp256k1_2.getPublicKey; } }));
Object.defineProperty(exports, "sign", ({ enumerable: true, get: function () { return secp256k1_2.sign; } }));
Object.defineProperty(exports, "signSync", ({ enumerable: true, get: function () { return secp256k1_2.signSync; } }));
Object.defineProperty(exports, "verify", ({ enumerable: true, get: function () { return secp256k1_2.verify; } }));
Object.defineProperty(exports, "recoverPublicKey", ({ enumerable: true, get: function () { return secp256k1_2.recoverPublicKey; } }));
Object.defineProperty(exports, "getSharedSecret", ({ enumerable: true, get: function () { return secp256k1_2.getSharedSecret; } }));
Object.defineProperty(exports, "utils", ({ enumerable: true, get: function () { return secp256k1_2.utils; } }));
Object.defineProperty(exports, "CURVE", ({ enumerable: true, get: function () { return secp256k1_2.CURVE; } }));
Object.defineProperty(exports, "Point", ({ enumerable: true, get: function () { return secp256k1_2.Point; } }));
Object.defineProperty(exports, "Signature", ({ enumerable: true, get: function () { return secp256k1_2.Signature; } }));
Object.defineProperty(exports, "schnorr", ({ enumerable: true, get: function () { return secp256k1_2.schnorr; } }));
// Enable sync API for noble-secp256k1
secp256k1_1.utils.hmacSha256Sync = (key, ...messages) => {
    const h = hmac_1.hmac.create(sha256_1.sha256, key);
    messages.forEach(msg => h.update(msg));
    return h.digest();
};


/***/ }),

/***/ 31679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.crypto = exports.wrapHash = exports.equalsBytes = exports.hexToBytes = exports.bytesToUtf8 = exports.utf8ToBytes = exports.createView = exports.concatBytes = exports.toHex = exports.bytesToHex = exports.assertBytes = exports.assertBool = void 0;
// buf.toString('hex') -> toHex(buf)
const _assert_1 = __importDefault(__webpack_require__(42568));
const utils_1 = __webpack_require__(3254);
const assertBool = _assert_1.default.bool;
exports.assertBool = assertBool;
const assertBytes = _assert_1.default.bytes;
exports.assertBytes = assertBytes;
var utils_2 = __webpack_require__(3254);
Object.defineProperty(exports, "bytesToHex", ({ enumerable: true, get: function () { return utils_2.bytesToHex; } }));
Object.defineProperty(exports, "toHex", ({ enumerable: true, get: function () { return utils_2.bytesToHex; } }));
Object.defineProperty(exports, "concatBytes", ({ enumerable: true, get: function () { return utils_2.concatBytes; } }));
Object.defineProperty(exports, "createView", ({ enumerable: true, get: function () { return utils_2.createView; } }));
Object.defineProperty(exports, "utf8ToBytes", ({ enumerable: true, get: function () { return utils_2.utf8ToBytes; } }));
// buf.toString('utf8') -> bytesToUtf8(buf)
function bytesToUtf8(data) {
    if (!(data instanceof Uint8Array)) {
        throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof data}`);
    }
    return new TextDecoder().decode(data);
}
exports.bytesToUtf8 = bytesToUtf8;
function hexToBytes(data) {
    const sliced = data.startsWith("0x") ? data.substring(2) : data;
    return (0, utils_1.hexToBytes)(sliced);
}
exports.hexToBytes = hexToBytes;
// buf.equals(buf2) -> equalsBytes(buf, buf2)
function equalsBytes(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
exports.equalsBytes = equalsBytes;
// Internal utils
function wrapHash(hash) {
    return (msg) => {
        _assert_1.default.bytes(msg);
        return hash(msg);
    };
}
exports.wrapHash = wrapHash;
exports.crypto = (() => {
    const webCrypto = typeof self === "object" && "crypto" in self ? self.crypto : undefined;
    const nodeRequire =  true &&
        typeof module.require === "function" &&
        module.require.bind(module);
    return {
        node: nodeRequire && !webCrypto ? nodeRequire("crypto") : undefined,
        web: webCrypto
    };
})();


/***/ }),

/***/ 37537:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];


var isHexPrefixed = __webpack_require__(84725);
var stripHexPrefix = __webpack_require__(12325);

/**
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */
function padToEven(value) {
  var a = value; // eslint-disable-line

  if (typeof a !== 'string') {
    throw new Error('[ethjs-util] while padding to even, value must be string, is currently ' + typeof a + ', while padToEven.');
  }

  if (a.length % 2) {
    a = '0' + a;
  }

  return a;
}

/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
function intToHex(i) {
  var hex = i.toString(16); // eslint-disable-line

  return '0x' + hex;
}

/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
function intToBuffer(i) {
  var hex = intToHex(i);

  return new Buffer(padToEven(hex.slice(2)), 'hex');
}

/**
 * Get the binary size of a string
 * @param {String} str
 * @return {Number}
 */
function getBinarySize(str) {
  if (typeof str !== 'string') {
    throw new Error('[ethjs-util] while getting binary size, method getBinarySize requires input \'str\' to be type String, got \'' + typeof str + '\'.');
  }

  return Buffer.byteLength(str, 'utf8');
}

/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */
function arrayContainsArray(superset, subset, some) {
  if (Array.isArray(superset) !== true) {
    throw new Error('[ethjs-util] method arrayContainsArray requires input \'superset\' to be an array got type \'' + typeof superset + '\'');
  }
  if (Array.isArray(subset) !== true) {
    throw new Error('[ethjs-util] method arrayContainsArray requires input \'subset\' to be an array got type \'' + typeof subset + '\'');
  }

  return subset[Boolean(some) && 'some' || 'every'](function (value) {
    return superset.indexOf(value) >= 0;
  });
}

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
function toUtf8(hex) {
  var bufferValue = new Buffer(padToEven(stripHexPrefix(hex).replace(/^0+|0+$/g, '')), 'hex');

  return bufferValue.toString('utf8');
}

/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
function toAscii(hex) {
  var str = ''; // eslint-disable-line
  var i = 0,
      l = hex.length; // eslint-disable-line

  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }

  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    str += String.fromCharCode(code);
  }

  return str;
}

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
function fromUtf8(stringValue) {
  var str = new Buffer(stringValue, 'utf8');

  return '0x' + padToEven(str.toString('hex')).replace(/^0+|0+$/g, '');
}

/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
function fromAscii(stringValue) {
  var hex = ''; // eslint-disable-line
  for (var i = 0; i < stringValue.length; i++) {
    // eslint-disable-line
    var code = stringValue.charCodeAt(i);
    var n = code.toString(16);
    hex += n.length < 2 ? '0' + n : n;
  }

  return '0x' + hex;
}

/**
 * getKeys([{a: 1, b: 2}, {a: 3, b: 4}], 'a') => [1, 3]
 *
 * @method getKeys get specific key from inner object array of objects
 * @param {String} params
 * @param {String} key
 * @param {Boolean} allowEmpty
 * @returns {Array} output just a simple array of output keys
 */
function getKeys(params, key, allowEmpty) {
  if (!Array.isArray(params)) {
    throw new Error('[ethjs-util] method getKeys expecting type Array as \'params\' input, got \'' + typeof params + '\'');
  }
  if (typeof key !== 'string') {
    throw new Error('[ethjs-util] method getKeys expecting type String for input \'key\' got \'' + typeof key + '\'.');
  }

  var result = []; // eslint-disable-line

  for (var i = 0; i < params.length; i++) {
    // eslint-disable-line
    var value = params[i][key]; // eslint-disable-line
    if (allowEmpty && !value) {
      value = '';
    } else if (typeof value !== 'string') {
      throw new Error('invalid abi');
    }
    result.push(value);
  }

  return result;
}

/**
 * Is the string a hex string.
 *
 * @method check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length
 * @returns {Boolean} output the string is a hex string
 */
function isHexString(value, length) {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }

  if (length && value.length !== 2 + 2 * length) {
    return false;
  }

  return true;
}

module.exports = {
  arrayContainsArray: arrayContainsArray,
  intToBuffer: intToBuffer,
  getBinarySize: getBinarySize,
  isHexPrefixed: isHexPrefixed,
  stripHexPrefix: stripHexPrefix,
  padToEven: padToEven,
  intToHex: intToHex,
  fromAscii: fromAscii,
  fromUtf8: fromUtf8,
  toAscii: toAscii,
  toUtf8: toUtf8,
  getKeys: getKeys,
  isHexString: isHexString
};

/***/ }),

/***/ 70486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/***/ 78996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5385);
} else {}


/***/ }),

/***/ 49603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(70486);
} else {}


/***/ }),

/***/ 41571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(76123)["Buffer"];
// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
(function(root, f) {
  'use strict';
  if ( true && module.exports) module.exports = f();
  else if (root.nacl) root.nacl.util = f();
  else {
    root.nacl = {};
    root.nacl.util = f();
  }
}(this, function() {
  'use strict';

  var util = {};

  function validateBase64(s) {
    if (!(/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s))) {
      throw new TypeError('invalid encoding');
    }
  }

  util.decodeUTF8 = function(s) {
    if (typeof s !== 'string') throw new TypeError('expected string');
    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
    return b;
  };

  util.encodeUTF8 = function(arr) {
    var i, s = [];
    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
    return decodeURIComponent(escape(s.join('')));
  };

  if (typeof atob === 'undefined') {
    // Node.js

    if (typeof Buffer.from !== 'undefined') {
       // Node v6 and later
      util.encodeBase64 = function (arr) { // v6 and later
          return Buffer.from(arr).toString('base64');
      };

      util.decodeBase64 = function (s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
      };

    } else {
      // Node earlier than v6
      util.encodeBase64 = function (arr) { // v6 and later
        return (new Buffer(arr)).toString('base64');
      };

      util.decodeBase64 = function(s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
      };
    }

  } else {
    // Browsers

    util.encodeBase64 = function(arr) {
      var i, s = [], len = arr.length;
      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
      return btoa(s.join(''));
    };

    util.decodeBase64 = function(s) {
      validateBase64(s);
      var i, d = atob(s), b = new Uint8Array(d.length);
      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
      return b;
    };

  }

  return util;

}));


/***/ }),

/***/ 28477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/59099de55fb0e5132fb9.png";

/***/ }),

/***/ 85270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c6f6f6a9e71495dcb147.png";

/***/ }),

/***/ 4856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/05b047fd9a2685c83493.png";

/***/ }),

/***/ 30457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2ce52a3440dbeb9d55ef.png";

/***/ }),

/***/ 14911:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 76123:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 30898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n5: () => (/* reexport */ blob/* blobToDataURL */.n),
  dq: () => (/* reexport */ combineAbortSignal/* combineAbortSignal */.d),
  v_: () => (/* reexport */ concatArrayBuffer/* concatArrayBuffer */.v),
  xe: () => (/* reexport */ decodeArrayBuffer),
  rj: () => (/* reexport */ decodeText),
  PQ: () => (/* reexport */ defer/* defer */.P),
  gw: () => (/* reexport */ delay/* delay */.g),
  ll: () => (/* reexport */ encodeArrayBuffer),
  YT: () => (/* reexport */ encodeText),
  sS: () => (/* reexport */ file/* formatFileSize */.s),
  Yl: () => (/* reexport */ typescript_enum/* getEnumAsArray */.Y),
  GT: () => (/* reexport */ nonNull/* isNonNull */.G),
  J3: () => (/* reexport */ memoizePromise/* memoizePromise */.J),
  P: () => (/* reexport */ control_flow/* safeUnreachable */.P),
  Vs: () => (/* reexport */ timeout/* timeout */.V),
  t1: () => (/* reexport */ control_flow/* unreachable */.t)
});

// UNUSED EXPORTS: assertNonNull, decodeHexString, detectAudioSupport, detectImageSupport, detectVideoSupport, encodeHexString, findAvailableImageURL, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, lazy, waitDocumentReadyState

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/memoizePromise.js
var memoizePromise = __webpack_require__(22444);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/defer.js
var defer = __webpack_require__(54093);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/concatArrayBuffer.js
var concatArrayBuffer = __webpack_require__(16315);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/lazyDecorator.js
var lazyDecorator = __webpack_require__(24687);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/media/file.js
var file = __webpack_require__(83043);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/media/image.js
var media_image = __webpack_require__(56077);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/typescript/control-flow.js
var control_flow = __webpack_require__(51298);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/typescript/enum.js
var typescript_enum = __webpack_require__(6722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/typescript/nonNull.js
var nonNull = __webpack_require__(89259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/blob.js
var blob = __webpack_require__(72920);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/combineAbortSignal.js
var combineAbortSignal = __webpack_require__(56999);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/delay.js
var delay = __webpack_require__(48261);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/document.readyState.js
var document_readyState = __webpack_require__(8555);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/encode-text-arraybuffer.js
function encodeText(input) {
    return new TextEncoder().encode(input);
}
function decodeText(input) {
    if (input instanceof ArrayBuffer)
        return new TextDecoder().decode(input);
    return new TextDecoder().decode(Uint8Array.from(input));
}
function decodeArrayBuffer(input) {
    const decoded = atob(input);
    const buffer = new Uint8Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
        buffer[i] = decoded.charCodeAt(i);
    }
    return buffer.buffer;
}
function encodeArrayBuffer(input) {
    let encoded = '';
    for (const code of input instanceof ArrayBuffer ? new Uint8Array(input) : Uint8Array.from(input)) {
        encoded += String.fromCharCode(code);
    }
    return btoa(encoded);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/timeout.js
var timeout = __webpack_require__(11278);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js




















/***/ }),

/***/ 89259:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ isNonNull)
/* harmony export */ });
/* unused harmony export assertNonNull */
function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined)
        throw new Error(message);
    return val;
}
function isNonNull(x) {
    return x !== undefined && x !== null;
}


/***/ }),

/***/ 72920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ blobToDataURL)
/* harmony export */ });
function blobToDataURL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('error', () => {
            reject(reader.error);
        });
        reader.addEventListener('load', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(blob);
    });
}


/***/ }),

/***/ 8555:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 68273:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OK: () => (/* binding */ polyfill)
});

// UNUSED EXPORTS: Crypto, CryptoKey, SubtleCrypto, crypto

// EXTERNAL MODULE: ./node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(46067);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/key.js
/** @internal */
function createKeyMaterial(key, type, name, usage, extractable) {
    return {
        __proto__: null,
        name,
        type,
        key,
        extractable: !!extractable,
        usage,
    };
}
/** @internal */
function usageToFlag(name, usageList, DOMException) {
    let flag = 0 /* KeyUsages.None */;
    for (const usage of usageList) {
        if (name === 'ECDH') {
            if (usage === 'deriveBits') {
                flag |= 1 /* KeyUsages.deriveBits */;
                continue;
            }
            else if (usage === 'deriveKey') {
                flag |= 2 /* KeyUsages.deriveKey */;
                continue;
            }
        }
        else if (name === 'ECDSA') {
            if (usage === 'sign') {
                flag |= 4 /* KeyUsages.sign */;
                continue;
            }
            else if (usage === 'verify') {
                flag |= 8 /* KeyUsages.verify */;
                continue;
            }
        }
        throw new DOMException('Cannot create a key using the specified key usages.', 'SyntaxError');
    }
    if (flag === 0 /* KeyUsages.None */) {
        throw new DOMException('Usages cannot be empty when creating a key.', 'SyntaxError');
    }
    // if (name === 'ECDSA' && flag !== (KeyUsages.sign | KeyUsages.verify)) {
    //     throw new DOMException('Cannot create a key using the specified key usages.', 'SyntaxError')
    // }
    return flag;
}
/** @internal */
function usageFromFlag(KeyMaterial) {
    const { usage, name, type } = KeyMaterial;
    if (name === 'ECDH') {
        const result = [];
        if (type === 'private')
            return [];
        if (usage & 2 /* KeyUsages.deriveKey */)
            result.push('deriveKey');
        if (usage & 1 /* KeyUsages.deriveBits */)
            result.push('deriveBits');
        return result;
    }
    else {
        if (type === 'private')
            return ['sign'];
        return ['verify'];
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/memory.js

/** @internal */
function createMemory(nativeCryptoKey) {
    var _a;
    const nativeCryptoKeyGetter = nativeCryptoKey
        ? (_a = Object.getOwnPropertyDescriptor(nativeCryptoKey.prototype, 'type')) === null || _a === void 0 ? void 0 : _a.get
        : undefined;
    const shimKeys = new WeakMap();
    class CryptoKey {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        [Symbol.hasInstance](instance) {
            if (shimKeys.has(instance))
                return true;
            if (isNativeCryptoKey(instance))
                return true;
            return false;
        }
        get algorithm() {
            const { name } = get(this);
            return { name, namedCurve: 'K-256' };
        }
        get extractable() {
            return get(this).extractable;
        }
        get type() {
            return get(this).type;
        }
        get usages() {
            return usageFromFlag(get(this));
        }
    }
    Object.defineProperty(CryptoKey, Symbol.toStringTag, { configurable: true, value: 'CryptoKey' });
    function has(object) {
        return shimKeys.has(object);
    }
    function get(instance) {
        if (!shimKeys.has(instance))
            throw new TypeError('Illegal invocation');
        return shimKeys.get(instance);
    }
    function isNativeCryptoKey(instance) {
        if (!nativeCryptoKeyGetter)
            return false;
        try {
            nativeCryptoKeyGetter.call(instance);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    function newKey(material) {
        const key = Object.create(CryptoKey.prototype);
        shimKeys.set(key, material);
        return key;
    }
    return { has, get, CryptoKey, newKey };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/helper.js
/** @internal */
function isK256Alg(alg, acceptKind) {
    try {
        if (typeof alg !== 'object')
            return;
        if (alg === null)
            return;
        const { name, namedCurve } = alg;
        if (namedCurve !== 'K-256')
            return;
        if (acceptKind === 'any') {
            if (name === 'ECDH' || name === 'ECDSA')
                return name;
        }
        else {
            if (name === acceptKind)
                return name;
        }
        return;
    }
    catch (_a) {
        return;
    }
}
/** @internal */
function getHashAlg(alg) {
    try {
        const { name } = alg.hash;
        if (name === 'SHA-256')
            return name;
        if (name === 'SHA-384')
            return name;
        if (name === 'SHA-512')
            return name;
        return;
    }
    catch (_a) {
        return;
    }
}
// https://github.com/PeculiarVentures/webcrypto-liner/blob/3a97b53b7f187f776ea5b23889e03c3f54654811/src/mechs/ec/crypto.ts#L56
/** @internal */
function b2a(buffer) {
    const buf = new Uint8Array(buffer);
    const res = [];
    for (let i = 0; i < buf.length; i++) {
        res.push(buf[i]);
    }
    return res;
}
/** @internal */
function concat(...buf) {
    const res = new Uint8Array(buf.map((item) => item.length).reduce((prev, cur) => prev + cur));
    let offset = 0;
    buf.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
            res[offset + i] = item[i];
        }
        offset += item.length;
    });
    return res;
}
/** @internal */
function hex2buffer(hexString, padded) {
    if (hexString.length % 2) {
        hexString = '0' + hexString;
    }
    let res = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < hexString.length; i++) {
        const c = hexString.slice(i, ++i + 1);
        res[(i - 1) / 2] = parseInt(c, 16);
    }
    // BN padding
    if (padded) {
        let len = res.length;
        len = len > 32 ? (len > 48 ? 66 : 48) : 32;
        if (res.length < len) {
            res = concat(new Uint8Array(len - res.length), res);
        }
    }
    return res;
}
/** @internal */
function buffer2hex(buffer, padded) {
    let res = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buffer.length; i++) {
        const char = buffer[i].toString(16);
        res += char.length % 2 ? '0' + char : char;
    }
    // BN padding
    if (padded) {
        let len = buffer.length;
        len = len > 32 ? (len > 48 ? 66 : 48) : 32;
        if (res.length / 2 < len) {
            res = new Array(len * 2 - res.length + 1).join('0') + res;
        }
    }
    return res;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/ec/sign.js

function signK256(key, hash) {
    if (key.type !== 'private')
        throw new Error();
    if (key.name !== 'ECDSA')
        throw new Error();
    const array = b2a(hash);
    const sig = key.key.sign(array);
    const hexSignature = buffer2hex(sig.r.toArray(), true) + buffer2hex(sig.s.toArray(), true);
    return hex2buffer(hexSignature).buffer;
}
function verifyK256(key, hash, signature) {
    if (key.name !== 'ECDSA')
        throw new Error();
    const sig = {
        r: new Uint8Array(signature.slice(0, signature.byteLength / 2)),
        s: new Uint8Array(signature.slice(signature.byteLength / 2)),
    };
    const array = b2a(hash);
    return key.key.verify(array, sig);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/pvtsutils@1.3.5/node_modules/pvtsutils/build/index.js
var build = __webpack_require__(85907);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/ec/key.js




const k256 = new elliptic.ec('secp256k1');
/** @internal */
function importK256(method, name, data, extractable, usage, DOMException) {
    if (method === 'jwk')
        return importK256JWK(name, data, extractable, usage, DOMException);
    return importK256Raw(name, new Uint8Array(data), extractable, usage);
}
/** @internal */
function exportK256(format, key) {
    if (format === 'jwk')
        return exportK256JWK(key);
    return exportK256Raw(key);
}
/** @internal */
function generateK256Pair(name, extractable, usageList, DOMException) {
    const usage = usageToFlag(name, usageList, DOMException);
    const key = k256.genKeyPair();
    return {
        pub: createKeyMaterial(key, 'public', name, usage, extractable),
        priv: createKeyMaterial(key, 'private', name, usage, extractable),
    };
}
// !!! raw format can never store private key.
function importK256Raw(name, buffer, extractable, usage) {
    const key = k256.keyFromPublic(new Uint8Array(buffer));
    return createKeyMaterial(key, 'public', name, usage, extractable);
}
function exportK256Raw(key) {
    if (!key.extractable)
        throw new DOMException('key is not extractable', 'InvalidAccessError');
    return new Uint8Array(key.key.getPublic('array')).buffer;
}
function importK256JWK(name, jwk, extractable, usage, DOMException) {
    //#region verify
    const { d, x, y, crv, kty } = jwk;
    const key_ops = Array.from(jwk.key_ops || []);
    if (kty !== 'EC')
        throw new DOMException(`The required JWK member "kty" was missing`, 'DataError');
    if (crv !== 'K-256')
        throw new DOMException(`The required JWK member "crv" was missing`, 'DataError');
    if (!x)
        throw new DOMException(`The required JWK member "x" was missing`, 'DataError');
    if (!y)
        throw new DOMException(`The required JWK member "y" was missing`, 'DataError');
    let isValidKeyUsage = true;
    if (usage & 4 /* KeyUsages.sign */)
        if (!key_ops.includes('sign'))
            isValidKeyUsage = false;
    if (usage & 8 /* KeyUsages.verify */)
        if (!key_ops.includes('verify'))
            isValidKeyUsage = false;
    if (!isValidKeyUsage)
        throw new DOMException('The JWK "key_ops" member was inconsistent with that specified by the Web Crypto call. The JWK usage must be a superset of those requested', 'DataError');
    //#endregion
    // 4 is the point format.
    const point = concat([4], new Uint8Array(build/* Convert */.ep.FromBase64Url(x)), new Uint8Array(build/* Convert */.ep.FromBase64Url(y)));
    const priv = d ? build/* Convert */.ep.FromBase64Url(d) : undefined;
    let ecKey;
    if (priv)
        ecKey = k256.keyFromPrivate(new Uint8Array(priv));
    else
        ecKey = k256.keyFromPublic(point);
    return createKeyMaterial(ecKey, d ? 'private' : 'public', name, usage, extractable);
}
function exportK256JWK(key) {
    if (!key.extractable)
        throw new DOMException('key is not extractable', 'InvalidAccessError');
    // ignore first '04'
    const hexPub = key.key.getPublic('hex').slice(2);
    const hexX = hexPub.slice(0, hexPub.length / 2);
    const hexY = hexPub.slice(hexPub.length / 2, hexPub.length);
    if (key.type === 'public') {
        // public
        const jwk = {
            crv: 'K-256',
            ext: true,
            x: build/* Convert */.ep.ToBase64Url(hex2buffer(hexX)),
            y: build/* Convert */.ep.ToBase64Url(hex2buffer(hexY)),
            key_ops: usageFromFlag(key),
            kty: 'EC',
        };
        return jwk;
    }
    else {
        const jwk = {
            crv: 'K-256',
            ext: true,
            d: build/* Convert */.ep.ToBase64Url(hex2buffer(key.key.getPrivate('hex'))),
            x: build/* Convert */.ep.ToBase64Url(hex2buffer(hexX)),
            y: build/* Convert */.ep.ToBase64Url(hex2buffer(hexY)),
            key_ops: usageFromFlag(key),
            kty: 'EC',
        };
        return jwk;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/ec/derive.js

/** @internal */
function deriveBitsK256(pub, priv, length) {
    const derived = priv.key.derive(pub.key.getPublic());
    let array = new Uint8Array(derived.toArray());
    // Padding
    let len = array.length;
    len = len > 32 ? (len > 48 ? 66 : 48) : 32;
    if (array.length < len) {
        array = concat(new Uint8Array(len - array.length), array);
    }
    const buf = array.slice(0, length / 8).buffer;
    return buf;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/core.js







function createCrypto(nativeCrypto, nativeCryptoKey, DOMException) {
    const [shimSubtle, SubtleCrypto, CryptoKey] = createSubtleClass(nativeCrypto, nativeCryptoKey, DOMException);
    const [shimCrypto, Crypto] = createCryptoClass(nativeCrypto, shimSubtle);
    function polyfill() {
        Object.defineProperties(globalThis, {
            // classes
            Crypto: { value: Crypto, configurable: true, writable: true },
            SubtleCrypto: { value: SubtleCrypto, configurable: true, writable: true },
            CryptoKey: { value: CryptoKey, configurable: true, writable: true },
            // instance
            crypto: { value: shimCrypto, configurable: true, writable: true },
        });
    }
    return [shimCrypto, { Crypto, CryptoKey, SubtleCrypto }, polyfill];
}
function createSubtleClass(nativeCrypto, nativeCryptoKey, DOMException) {
    const nativeSubtle = nativeCrypto.subtle;
    const { get, has, CryptoKey, newKey } = createMemory(nativeCryptoKey);
    class SubtleCrypto {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
    }
    const subtleCryptoPrototype = {
        //#region Not Wrapping methods
        decrypt(algorithm, key, data) {
            return nativeSubtle.decrypt(algorithm, key, data);
        },
        digest(algorithm, data) {
            return nativeSubtle.digest(algorithm, data);
        },
        encrypt(algorithm, key, data) {
            return nativeSubtle.encrypt(algorithm, key, data);
        },
        unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages) {
            return nativeSubtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages);
        },
        async wrapKey(format, key, wrappingKey, wrapAlgorithm) {
            if (has(key)) {
                throw new DOMException(`Failed to execute 'wrapKey' on 'SubtleCrypto': Algorithm: K-256 key does not support wrapping.`, 'NotSupportedError');
            }
            return nativeSubtle.wrapKey(format, key, wrappingKey, wrapAlgorithm);
        },
        //#endregion
        //#region Derive
        async deriveBits(algorithm, baseKey, length) {
            if (has(baseKey)) {
                return deriveBitsK256(get(algorithm.public), get(baseKey), length);
            }
            return nativeSubtle.deriveBits(algorithm, baseKey, length);
        },
        async deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages) {
            if (has(baseKey)) {
                const alg = algorithm;
                const aes = derivedKeyType;
                const bits = deriveBitsK256(get(alg.public), get(baseKey), aes.length);
                return nativeSubtle.importKey('raw', bits, derivedKeyType, extractable, keyUsages);
            }
            return nativeSubtle.deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages);
        },
        //#endregion
        //#region Sign & Verify
        async sign(algorithm, key, data) {
            if (has(key)) {
                const hash = getHashAlg(algorithm);
                if (!hash) {
                    throw new DOMException(`Failed to execute 'sign' on 'SubtleCrypto': EcdsaParams: hash: Algorithm: Unrecognized name`, 'NotSupportedError');
                }
                const hashed = await nativeSubtle.digest(hash, data);
                return signK256(get(key), hashed);
            }
            return nativeSubtle.sign(algorithm, key, data);
        },
        async verify(algorithm, key, signature, data) {
            if (has(key)) {
                const hash = getHashAlg(algorithm);
                if (!hash)
                    throw new DOMException(`Failed to execute 'verify' on 'SubtleCrypto': EcdsaParams: hash: Algorithm: Unrecognized name`, 'NotSupportedError');
                const hashed = await nativeSubtle.digest(hash, data);
                return verifyK256(get(key), hashed, new Uint8Array(signature));
            }
            return nativeSubtle.verify(algorithm, key, signature, data);
        },
        //#endregion
        //#region Create, Import, Export
        async generateKey(algorithm, extractable, keyUsages) {
            const k256Name = isK256Alg(algorithm, 'any');
            if (k256Name) {
                const _ = generateK256Pair(k256Name, extractable, keyUsages, DOMException);
                return { publicKey: newKey(_.pub), privateKey: newKey(_.priv) };
            }
            return nativeSubtle.generateKey(algorithm, extractable, keyUsages);
        },
        async importKey(format, keyData, algorithm, extractable, keyUsages) {
            const k256Name = isK256Alg(algorithm, 'any');
            if (k256Name) {
                const usageFlag = usageToFlag(k256Name, keyUsages, DOMException);
                if (format === 'pkcs8') {
                    throw new DOMException('The key is not of the expected type', 'InvalidAccessError');
                }
                // TODO: support spki
                if (format === 'spki') {
                    throw new DOMException('spki export of K-256 keys is not supported', 'NotSupportedError');
                }
                if (format === 'jwk' || format === 'raw') {
                    return newKey(importK256(format, k256Name, keyData, extractable, usageFlag, DOMException));
                }
                throw new TypeError('Invalid keyFormat argument');
            }
            return nativeSubtle.importKey(format, keyData, algorithm, extractable, keyUsages);
        },
        async exportKey(format, key) {
            if (has(key)) {
                if (format === 'pkcs8') {
                    throw new DOMException('The key is not of the expected type', 'InvalidAccessError');
                }
                // TODO: support spki
                if (format === 'spki') {
                    throw new DOMException('spki export of K-256 keys is not supported', 'NotSupportedError');
                }
                if (format === 'jwk' || format === 'raw')
                    return exportK256(format, get(key));
                throw new TypeError('Invalid keyFormat argument');
            }
            return nativeSubtle.exportKey(format, key);
        },
        //#endregion
    };
    Object.defineProperty(subtleCryptoPrototype, Symbol.toStringTag, { configurable: true, value: 'SubtleCrypto' });
    Object.defineProperties(SubtleCrypto.prototype, Object.getOwnPropertyDescriptors(subtleCryptoPrototype));
    return [Object.create(subtleCryptoPrototype), SubtleCrypto, CryptoKey];
}
function createCryptoClass(nativeCrypto, shimSubtle) {
    class Crypto {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
    }
    const cryptoPrototype = {
        get subtle() {
            return shimSubtle;
        },
        getRandomValues: (array) => nativeCrypto.getRandomValues(array),
        randomUUID: () => nativeCrypto.randomUUID(),
    };
    Object.defineProperty(cryptoPrototype, Symbol.toStringTag, { configurable: true, value: 'Crypto' });
    Object.defineProperties(Crypto.prototype, Object.getOwnPropertyDescriptors(cryptoPrototype));
    return [Object.create(cryptoPrototype), Crypto];
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+secp256k1-webcrypto@1.0.0/node_modules/@masknet/secp256k1-webcrypto/dist/web.js

const [web_crypto, { Crypto, CryptoKey, SubtleCrypto }, polyfill] = createCrypto(globalThis.crypto, globalThis.CryptoKey, DOMException);


/***/ }),

/***/ 29311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X3: () => (/* reexport */ openDB)
});

// UNUSED EXPORTS: deleteDB, unwrap, wrap

;// CONCATENATED MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/wrap-idb-value.js
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap_idb_value_wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap_idb_value_wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap_idb_value_wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap_idb_value_wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap_idb_value_wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap_idb_value_wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);



;// CONCATENATED MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/index.js



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap_idb_value_wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade(wrap_idb_value_wrap(request.result), event.oldVersion, event.newVersion, wrap_idb_value_wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return wrap(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));



;// CONCATENATED MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/async-iterators.js


const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get(target, prop) {
        if (!advanceMethodProps.includes(prop))
            return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function (...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    },
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
        return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return ((prop === Symbol.asyncIterator &&
        instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        (prop === 'iterate' && instanceOfAny(target, [IDBIndex, IDBObjectStore])));
}
replaceTraps((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
        if (isIteratorProp(target, prop))
            return iterate;
        return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    },
}));

;// CONCATENATED MODULE: ./node_modules/.pnpm/idb@7.1.1/node_modules/idb/with-async-ittr.js




/***/ }),

/***/ 76089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Err: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.UG),
/* harmony export */   ErrImpl: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.Pg),
/* harmony export */   None: () => (/* reexport safe */ _option_js__WEBPACK_IMPORTED_MODULE_1__.Hq),
/* harmony export */   Ok: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.Ok),
/* harmony export */   OkImpl: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.Bp),
/* harmony export */   Option: () => (/* reexport safe */ _option_js__WEBPACK_IMPORTED_MODULE_1__.Wx),
/* harmony export */   Result: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.x4),
/* harmony export */   Some: () => (/* reexport safe */ _option_js__WEBPACK_IMPORTED_MODULE_1__.bD)
/* harmony export */ });
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98096);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46314);




/***/ }),

/***/ 46314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hq: () => (/* binding */ None),
/* harmony export */   Wx: () => (/* binding */ Option),
/* harmony export */   bD: () => (/* binding */ Some)
/* harmony export */ });
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bp: () => (/* binding */ OkImpl),
/* harmony export */   Ok: () => (/* binding */ Ok),
/* harmony export */   Pg: () => (/* binding */ ErrImpl),
/* harmony export */   UG: () => (/* binding */ Err),
/* harmony export */   x4: () => (/* binding */ Result)
/* harmony export */ });
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


/***/ }),

/***/ 8311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aave: () => (/* binding */ Aave),
/* harmony export */   AchievementBurn: () => (/* binding */ AchievementBurn),
/* harmony export */   AchievementReceive: () => (/* binding */ AchievementReceive),
/* harmony export */   Add: () => (/* binding */ Add),
/* harmony export */   Algorand: () => (/* binding */ Algorand),
/* harmony export */   ApplicationNFT: () => (/* binding */ ApplicationNFT),
/* harmony export */   Approval: () => (/* binding */ Approval),
/* harmony export */   ApprovalApprove: () => (/* binding */ ApprovalApprove),
/* harmony export */   Arbitrum: () => (/* binding */ Arbitrum),
/* harmony export */   ArrowDownRound: () => (/* binding */ ArrowDownRound),
/* harmony export */   ArrowDownward: () => (/* binding */ ArrowDownward),
/* harmony export */   ArrowDrop: () => (/* binding */ ArrowDrop),
/* harmony export */   ArrowUp: () => (/* binding */ ArrowUp),
/* harmony export */   ArtBlocks: () => (/* binding */ ArtBlocks),
/* harmony export */   Arweave: () => (/* binding */ Arweave),
/* harmony export */   Avalanche: () => (/* binding */ Avalanche),
/* harmony export */   Avatar: () => (/* binding */ Avatar),
/* harmony export */   BSC: () => (/* binding */ BSC),
/* harmony export */   BestTrade: () => (/* binding */ BestTrade),
/* harmony export */   Bit: () => (/* binding */ Bit),
/* harmony export */   BorderedSuccess: () => (/* binding */ BorderedSuccess),
/* harmony export */   Buy: () => (/* binding */ Buy),
/* harmony export */   Calendar: () => (/* binding */ Calendar),
/* harmony export */   Candle: () => (/* binding */ Candle),
/* harmony export */   Celo: () => (/* binding */ Celo),
/* harmony export */   Check: () => (/* binding */ Check),
/* harmony export */   CheckCircle: () => (/* binding */ CheckCircle),
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   CheckboxBlank: () => (/* binding */ CheckboxBlank),
/* harmony export */   ChevronUp: () => (/* binding */ ChevronUp),
/* harmony export */   CircleLoading: () => (/* binding */ CircleLoading),
/* harmony export */   CircleWarning: () => (/* binding */ CircleWarning),
/* harmony export */   Close: () => (/* binding */ Close),
/* harmony export */   CoinGecko: () => (/* binding */ CoinGecko),
/* harmony export */   CoinMarketCap: () => (/* binding */ CoinMarketCap),
/* harmony export */   CollectibleApprove: () => (/* binding */ CollectibleApprove),
/* harmony export */   CollectibleBurn: () => (/* binding */ CollectibleBurn),
/* harmony export */   CollectibleIn: () => (/* binding */ CollectibleIn),
/* harmony export */   CollectibleMint: () => (/* binding */ CollectibleMint),
/* harmony export */   CollectibleOut: () => (/* binding */ CollectibleOut),
/* harmony export */   Collectibles: () => (/* binding */ Collectibles),
/* harmony export */   Connect: () => (/* binding */ Connect),
/* harmony export */   Copy: () => (/* binding */ Copy),
/* harmony export */   Cosmos: () => (/* binding */ Cosmos),
/* harmony export */   CrossBridge: () => (/* binding */ CrossBridge),
/* harmony export */   CrossSync: () => (/* binding */ CrossSync),
/* harmony export */   Crossbell: () => (/* binding */ Crossbell),
/* harmony export */   CyberConnect: () => (/* binding */ CyberConnect),
/* harmony export */   Danger: () => (/* binding */ Danger),
/* harmony export */   DecentralizedSearch: () => (/* binding */ DecentralizedSearch),
/* harmony export */   DefaultToken: () => (/* binding */ DefaultToken),
/* harmony export */   DiscordRound: () => (/* binding */ DiscordRound),
/* harmony export */   DonationDonate: () => (/* binding */ DonationDonate),
/* harmony export */   DonationLaunch: () => (/* binding */ DonationLaunch),
/* harmony export */   Download2: () => (/* binding */ Download2),
/* harmony export */   Drop: () => (/* binding */ Drop),
/* harmony export */   Dump: () => (/* binding */ Dump),
/* harmony export */   EIP1577: () => (/* binding */ EIP1577),
/* harmony export */   ENS: () => (/* binding */ ENS),
/* harmony export */   ETH: () => (/* binding */ ETH),
/* harmony export */   EmptySimple: () => (/* binding */ EmptySimple),
/* harmony export */   EtherScan: () => (/* binding */ EtherScan),
/* harmony export */   Eye: () => (/* binding */ Eye),
/* harmony export */   FacebookColored: () => (/* binding */ FacebookColored),
/* harmony export */   FacebookRound: () => (/* binding */ FacebookRound),
/* harmony export */   Fantom: () => (/* binding */ Fantom),
/* harmony export */   Farcaster: () => (/* binding */ Farcaster),
/* harmony export */   FileService: () => (/* binding */ FileService),
/* harmony export */   FillSuccess: () => (/* binding */ FillSuccess),
/* harmony export */   Firefly: () => (/* binding */ Firefly),
/* harmony export */   Flag: () => (/* binding */ Flag),
/* harmony export */   Flow: () => (/* binding */ Flow),
/* harmony export */   Follow: () => (/* binding */ Follow),
/* harmony export */   Gas: () => (/* binding */ Gas),
/* harmony export */   GasStation: () => (/* binding */ GasStation),
/* harmony export */   Gear: () => (/* binding */ Gear),
/* harmony export */   Gem: () => (/* binding */ Gem),
/* harmony export */   GitHub: () => (/* binding */ GitHub),
/* harmony export */   Gitcoin: () => (/* binding */ Gitcoin),
/* harmony export */   Globe: () => (/* binding */ Globe),
/* harmony export */   Gnosis: () => (/* binding */ Gnosis),
/* harmony export */   GovernancePropose: () => (/* binding */ GovernancePropose),
/* harmony export */   GovernanceVote: () => (/* binding */ GovernanceVote),
/* harmony export */   History: () => (/* binding */ History),
/* harmony export */   IPFS: () => (/* binding */ IPFS),
/* harmony export */   Identity: () => (/* binding */ Identity),
/* harmony export */   Info: () => (/* binding */ Info),
/* harmony export */   Instagram: () => (/* binding */ Instagram),
/* harmony export */   InstagramColored: () => (/* binding */ InstagramColored),
/* harmony export */   InstagramRoundColored: () => (/* binding */ InstagramRoundColored),
/* harmony export */   KeySquare: () => (/* binding */ KeySquare),
/* harmony export */   Keybase: () => (/* binding */ Keybase),
/* harmony export */   Kusama: () => (/* binding */ Kusama),
/* harmony export */   Leaderboard: () => (/* binding */ Leaderboard),
/* harmony export */   LeftArrow: () => (/* binding */ LeftArrow),
/* harmony export */   Lens: () => (/* binding */ Lens),
/* harmony export */   LinkOut: () => (/* binding */ LinkOut),
/* harmony export */   LooksRare: () => (/* binding */ LooksRare),
/* harmony export */   MarketsClaim: () => (/* binding */ MarketsClaim),
/* harmony export */   MaskAvatar: () => (/* binding */ MaskAvatar),
/* harmony export */   MaskBlue: () => (/* binding */ MaskBlue),
/* harmony export */   MaskBox: () => (/* binding */ MaskBox),
/* harmony export */   Masks: () => (/* binding */ Masks),
/* harmony export */   Medium: () => (/* binding */ Medium),
/* harmony export */   MenuPersonasActive: () => (/* binding */ MenuPersonasActive),
/* harmony export */   Message: () => (/* binding */ Message),
/* harmony export */   MetaMask: () => (/* binding */ MetaMask),
/* harmony export */   Minds: () => (/* binding */ Minds),
/* harmony export */   MindsRound: () => (/* binding */ MindsRound),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   Momoka: () => (/* binding */ Momoka),
/* harmony export */   More: () => (/* binding */ More),
/* harmony export */   NFTAvatar: () => (/* binding */ NFTAvatar),
/* harmony export */   NFTScan: () => (/* binding */ NFTScan),
/* harmony export */   NextIDMini: () => (/* binding */ NextIDMini),
/* harmony export */   NoteBurn: () => (/* binding */ NoteBurn),
/* harmony export */   NoteCreate: () => (/* binding */ NoteCreate),
/* harmony export */   NoteEdit: () => (/* binding */ NoteEdit),
/* harmony export */   NoteLink: () => (/* binding */ NoteLink),
/* harmony export */   NoteMint: () => (/* binding */ NoteMint),
/* harmony export */   OpenSea: () => (/* binding */ OpenSea),
/* harmony export */   OpenSeaColored: () => (/* binding */ OpenSeaColored),
/* harmony export */   Optimism: () => (/* binding */ Optimism),
/* harmony export */   PancakeSwap: () => (/* binding */ PancakeSwap),
/* harmony export */   Pets: () => (/* binding */ Pets),
/* harmony export */   Planet: () => (/* binding */ Planet),
/* harmony export */   Play: () => (/* binding */ Play),
/* harmony export */   Plugin: () => (/* binding */ Plugin),
/* harmony export */   PolkaDot: () => (/* binding */ PolkaDot),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   PolygonScan: () => (/* binding */ PolygonScan),
/* harmony export */   ProfileBurn: () => (/* binding */ ProfileBurn),
/* harmony export */   ProfileCreate: () => (/* binding */ ProfileCreate),
/* harmony export */   ProfileLink: () => (/* binding */ ProfileLink),
/* harmony export */   ProfileProxy: () => (/* binding */ ProfileProxy),
/* harmony export */   ProfileUpdate: () => (/* binding */ ProfileUpdate),
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   Questions: () => (/* binding */ Questions),
/* harmony export */   RSS3: () => (/* binding */ RSS3),
/* harmony export */   RSS3Link: () => (/* binding */ RSS3Link),
/* harmony export */   RadioButtonChecked: () => (/* binding */ RadioButtonChecked),
/* harmony export */   RadioButtonUnChecked: () => (/* binding */ RadioButtonUnChecked),
/* harmony export */   RadioNo: () => (/* binding */ RadioNo),
/* harmony export */   Rarible: () => (/* binding */ Rarible),
/* harmony export */   ReceiveColorful: () => (/* binding */ ReceiveColorful),
/* harmony export */   RedPacket: () => (/* binding */ RedPacket),
/* harmony export */   RedditRound: () => (/* binding */ RedditRound),
/* harmony export */   Refresh: () => (/* binding */ Refresh),
/* harmony export */   Restore: () => (/* binding */ Restore),
/* harmony export */   Retweet: () => (/* binding */ Retweet),
/* harmony export */   RightArrow: () => (/* binding */ RightArrow),
/* harmony export */   Rsk: () => (/* binding */ Rsk),
/* harmony export */   Savings: () => (/* binding */ Savings),
/* harmony export */   ScamSniffer: () => (/* binding */ ScamSniffer),
/* harmony export */   Search: () => (/* binding */ Search),
/* harmony export */   SecurityChecker: () => (/* binding */ SecurityChecker),
/* harmony export */   SecurityRisk: () => (/* binding */ SecurityRisk),
/* harmony export */   SecurityWarning: () => (/* binding */ SecurityWarning),
/* harmony export */   Send: () => (/* binding */ Send),
/* harmony export */   SendColorful: () => (/* binding */ SendColorful),
/* harmony export */   SettingInfo: () => (/* binding */ SettingInfo),
/* harmony export */   SettingsLanguage: () => (/* binding */ SettingsLanguage),
/* harmony export */   Shared: () => (/* binding */ Shared),
/* harmony export */   SimpleHash: () => (/* binding */ SimpleHash),
/* harmony export */   SmartPay: () => (/* binding */ SmartPay),
/* harmony export */   Snapshot: () => (/* binding */ Snapshot),
/* harmony export */   Solana: () => (/* binding */ Solana),
/* harmony export */   SpaceId: () => (/* binding */ SpaceId),
/* harmony export */   Success: () => (/* binding */ Success),
/* harmony export */   SuccessForSnackBar: () => (/* binding */ SuccessForSnackBar),
/* harmony export */   SushiSwap: () => (/* binding */ SushiSwap),
/* harmony export */   SwapColorful: () => (/* binding */ SwapColorful),
/* harmony export */   Sybil: () => (/* binding */ Sybil),
/* harmony export */   TelegramRound: () => (/* binding */ TelegramRound),
/* harmony export */   TipCoin: () => (/* binding */ TipCoin),
/* harmony export */   Tips: () => (/* binding */ Tips),
/* harmony export */   TokenBridge: () => (/* binding */ TokenBridge),
/* harmony export */   TokenBurn: () => (/* binding */ TokenBurn),
/* harmony export */   TokenIn: () => (/* binding */ TokenIn),
/* harmony export */   TokenLiquidity: () => (/* binding */ TokenLiquidity),
/* harmony export */   TokenMint: () => (/* binding */ TokenMint),
/* harmony export */   TokenOut: () => (/* binding */ TokenOut),
/* harmony export */   TokenStake: () => (/* binding */ TokenStake),
/* harmony export */   TokenSwap: () => (/* binding */ TokenSwap),
/* harmony export */   TokenUnstake: () => (/* binding */ TokenUnstake),
/* harmony export */   TransactionFailed: () => (/* binding */ TransactionFailed),
/* harmony export */   Transak: () => (/* binding */ Transak),
/* harmony export */   Twitter: () => (/* binding */ Twitter),
/* harmony export */   TwitterColored: () => (/* binding */ TwitterColored),
/* harmony export */   TwitterOtherColored: () => (/* binding */ TwitterOtherColored),
/* harmony export */   TwitterX: () => (/* binding */ TwitterX),
/* harmony export */   TwitterXRound: () => (/* binding */ TwitterXRound),
/* harmony export */   Undo: () => (/* binding */ Undo),
/* harmony export */   Unfollow: () => (/* binding */ Unfollow),
/* harmony export */   Uniswap: () => (/* binding */ Uniswap),
/* harmony export */   UnknownBurn: () => (/* binding */ UnknownBurn),
/* harmony export */   UnknownCancel: () => (/* binding */ UnknownCancel),
/* harmony export */   UnknownIn: () => (/* binding */ UnknownIn),
/* harmony export */   UnknownOut: () => (/* binding */ UnknownOut),
/* harmony export */   Unstoppable: () => (/* binding */ Unstoppable),
/* harmony export */   Upload: () => (/* binding */ Upload),
/* harmony export */   Valuables: () => (/* binding */ Valuables),
/* harmony export */   Verification: () => (/* binding */ Verification),
/* harmony export */   WETH: () => (/* binding */ WETH),
/* harmony export */   Wallet: () => (/* binding */ Wallet),
/* harmony export */   WalletSetting: () => (/* binding */ WalletSetting),
/* harmony export */   Warning: () => (/* binding */ Warning),
/* harmony export */   WarningTriangle: () => (/* binding */ WarningTriangle),
/* harmony export */   Web: () => (/* binding */ Web),
/* harmony export */   Web3Profile: () => (/* binding */ Web3Profile),
/* harmony export */   Web3ProfileCard: () => (/* binding */ Web3ProfileCard),
/* harmony export */   X2Y2: () => (/* binding */ X2Y2),
/* harmony export */   XLog: () => (/* binding */ XLog),
/* harmony export */   YouTube: () => (/* binding */ YouTube),
/* harmony export */   ZeroX: () => (/* binding */ ZeroX),
/* harmony export */   Zilliqa: () => (/* binding */ Zilliqa),
/* harmony export */   ZkScan: () => (/* binding */ ZkScan)
/* harmony export */ });
/* unused harmony exports Coincarp, Debank, Discord, DiscordRoundBlack, DiscordRoundGray, FacebookRoundGray, GitHubGray, InstagramRoundGray, Link3, Mask, MaskBanner, MaskGrey, MaskPlaceholder, MaskSquare, MaskText, MaskTextNightly, MaskWallet, MediumGray, MiniMask, Nftgo, RedditRoundGray, TwitterRound, TwitterRoundGray, YouTubeGray, Zerion, Zora, AddNoBorder, AddUser, America, Appearance, Appendices, Approve, ArrowBack, ArrowRight, ArrowUpRound, BackUp, BaseClose, BaseContacts, BaseUpload, BaseUser, BluePin, BusyWalletNav, Cached, Card, CheckboxBorder, CheckboxNo, China, CircleClose, Clear, Cloud, CloudBackup, CloudBackup2, CloudLink, CNY, Collectible, Comeback, Contacts, Currency, Dark, Decrease, Delete, Disconnect, Document, Documents, Download, Edit, Edit2, Empty, EncryptedFiles, Europe, EyeColor, EyeOff, Facebook, File, FileMessage, Filter, Folder, GearSettings, GrayMasks, HamburgerMenu, HKD, HongKong, Interaction, InteractionCircle, Japan, JPY, LinearCalendar, Link, Loader, LoadingBase, LocalBackup, Lock, MaskInMinds, MaskMe, Mnemonic, NextIdAvatar, NextIdPersonaWarning, NFTRedPacket, OutlinedMask, PersonasOutline, Pin, Plugins, PopupClose, PopupLink, PopupRestore, PopupTrash, PrimaryInfo, PublicKey, PublicKey2, RestoreColorful, Right, Risk, Selected, Self, Setting, Settings, Settings2, SharpMask, SignUpAccount, Star, Sun, Swap, SwitchLogo, TelegramRoundGray, Tick, Time, Trash, TrashLine, Tutorial, TwitterStroke, TxIn, TxOut, USD, User, WalletNav, WebBlack, MenuPersonas, MenuSettings, MenuSettingsActive, MenuWallets, MenuWalletsActive, ENSCover, FindTruman, GoodGhosting, Markets, PoolTogether, CN, Email, JP, KR, SettingsAppearance, SettingsBackup, SettingsEmail, SettingsPassword, SettingsPhone, SettingsRestore, SettingsSync, UK */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77745);


const Aave = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Aave', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99740), __webpack_require__.b),
    },
])
const Algorand = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Algorand', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(19248), __webpack_require__.b),
    },
])
const Arbitrum = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Arbitrum', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80307), __webpack_require__.b),
    },
])
const Arweave = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Arweave', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80058), __webpack_require__.b),
    },
])
const Avalanche = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Avalanche', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63433), __webpack_require__.b),
    },
])
const BSC = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BSC', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(44717), __webpack_require__.b),
    },
])
const Celo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Celo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3424), __webpack_require__.b),
    },
])
const Coincarp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Coincarp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(49294), __webpack_require__.b),
    },
])
const CoinGecko = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CoinGecko', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60321), __webpack_require__.b),
    },
])
const CoinMarketCap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CoinMarketCap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92747), __webpack_require__.b),
    },
])
const Cosmos = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Cosmos', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(21479), __webpack_require__.b),
    },
])
const Crossbell = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Crossbell', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6442), __webpack_require__.b),
    },
])
const CrossSync = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CrossSync', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88230), __webpack_require__.b),
    },
])
const CyberConnect = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CyberConnect', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93845), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(80963), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(93923), __webpack_require__.b),
    },
])
const Danger = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Danger', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(73565), __webpack_require__.b),
    },
])
const Debank = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Debank', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(47093), __webpack_require__.b),
    },
])
const Discord = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Discord', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32263), __webpack_require__.b),
    },
])
const DiscordRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DiscordRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(667), __webpack_require__.b),
    },
])
const DiscordRoundBlack = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DiscordRoundBlack', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(75185), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(76208), __webpack_require__.b),
    },
])
const DiscordRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DiscordRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(46778), __webpack_require__.b),
    },
])
const EIP1577 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EIP1577', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51702), __webpack_require__.b),
    },
])
const ETH = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ETH', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84), __webpack_require__.b),
    },
])
const EtherScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EtherScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51337), __webpack_require__.b),
    },
])
const FacebookColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FacebookColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89988), __webpack_require__.b),
    },
])
const FacebookRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FacebookRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52426), __webpack_require__.b),
    },
])
const FacebookRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FacebookRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(962), __webpack_require__.b),
    },
])
const Fantom = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Fantom', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84011), __webpack_require__.b),
    },
])
const Farcaster = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Farcaster', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41984), __webpack_require__.b),
    },
])
const Firefly = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Firefly', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(56025), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(38838), __webpack_require__.b),
    },
])
const Flow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Flow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(94091), __webpack_require__.b),
    },
])
const Gem = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gem', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(74796), __webpack_require__.b),
    },
])
const GitHub = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GitHub', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89965), __webpack_require__.b),
    },
])
const GitHubGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GitHubGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40233), __webpack_require__.b),
    },
])
const Gnosis = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gnosis', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87634), __webpack_require__.b),
    },
])
const Instagram = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Instagram', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(24604), __webpack_require__.b),
    },
])
const InstagramColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InstagramColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(54878), __webpack_require__.b),
    },
])
const InstagramRoundColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InstagramRoundColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78063), __webpack_require__.b),
    },
])
const InstagramRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InstagramRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41854), __webpack_require__.b),
    },
])
const IPFS = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('IPFS', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93568), __webpack_require__.b),
    },
])
const Keybase = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Keybase', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(14241), __webpack_require__.b),
    },
])
const Kusama = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Kusama', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52684), __webpack_require__.b),
    },
])
const Leaderboard = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Leaderboard', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58543), __webpack_require__.b),
    },
])
const Lens = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Lens', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52924), __webpack_require__.b),
    },
])
const Link3 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Link3', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(47282), __webpack_require__.b),
    },
])
const LooksRare = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LooksRare', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(16660), __webpack_require__.b),
    },
])
const Mask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Mask', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(20507), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(37279), __webpack_require__.b),
    },
])
const MaskBanner = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskBanner', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(55143), __webpack_require__.b),
    },
])
const MaskBlue = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskBlue', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90386), __webpack_require__.b),
    },
])
const MaskGrey = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskGrey', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(18219), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(42166), __webpack_require__.b),
    },
])
const MaskPlaceholder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskPlaceholder', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(47226), __webpack_require__.b),
    },
    {
        c: ['dim'],
        u: () => new URL(/* asset import */ __webpack_require__(36607), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(50039), __webpack_require__.b),
    },
])
const MaskSquare = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskSquare', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(55767), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(89654), __webpack_require__.b),
    },
])
const MaskText = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskText', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(34206), __webpack_require__.b),
    },
])
const MaskTextNightly = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskTextNightly', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6611), __webpack_require__.b),
    },
])
const MaskWallet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskWallet', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(33379), __webpack_require__.b),
    },
])
const Medium = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Medium', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92862), __webpack_require__.b),
    },
])
const MediumGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MediumGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(83651), __webpack_require__.b),
    },
])
const MetaMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MetaMask', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(83581), __webpack_require__.b),
    },
])
const Minds = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Minds', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(36423), __webpack_require__.b),
    },
])
const MindsRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MindsRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77247), __webpack_require__.b),
    },
])
const MiniMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MiniMask', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(53671), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(15965), __webpack_require__.b),
    },
])
const Mirror = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Mirror', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(16880), __webpack_require__.b),
    },
])
const Momoka = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Momoka', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(67525), __webpack_require__.b),
    },
])
const NextIDMini = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NextIDMini', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(72243), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(46850), __webpack_require__.b),
    },
])
const Nftgo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Nftgo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(46700), __webpack_require__.b),
    },
])
const NFTScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NFTScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65261), __webpack_require__.b),
    },
])
const OpenSea = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('OpenSea', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78952), __webpack_require__.b),
    },
])
const OpenSeaColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('OpenSeaColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77637), __webpack_require__.b),
    },
])
const Optimism = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Optimism', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(4335), __webpack_require__.b),
    },
])
const PancakeSwap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PancakeSwap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(38282), __webpack_require__.b),
    },
])
const Pets = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Pets', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71553), __webpack_require__.b),
    },
])
const Planet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Planet', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32761), __webpack_require__.b),
    },
])
const PolkaDot = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PolkaDot', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(42371), __webpack_require__.b),
    },
])
const Polygon = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Polygon', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32916), __webpack_require__.b),
    },
])
const PolygonScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PolygonScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5668), __webpack_require__.b),
    },
])
const Rarible = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Rarible', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5703), __webpack_require__.b),
    },
])
const RedditRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RedditRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99119), __webpack_require__.b),
    },
])
const RedditRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RedditRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30228), __webpack_require__.b),
    },
])
const Rsk = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Rsk', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30445), __webpack_require__.b),
    },
])
const RSS3 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RSS3', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(62210), __webpack_require__.b),
    },
])
const SimpleHash = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SimpleHash', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(13387), __webpack_require__.b),
    },
])
const Solana = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Solana', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(66043), __webpack_require__.b),
    },
])
const SushiSwap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SushiSwap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(22550), __webpack_require__.b),
    },
])
const Sybil = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Sybil', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89559), __webpack_require__.b),
    },
])
const TelegramRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TelegramRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6731), __webpack_require__.b),
    },
])
const TwitterColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(33484), __webpack_require__.b),
    },
])
const TwitterOtherColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterOtherColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(22845), __webpack_require__.b),
    },
])
const TwitterRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20582), __webpack_require__.b),
    },
])
const TwitterRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27884), __webpack_require__.b),
    },
])
const TwitterX = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterX', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(66258), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(23251), __webpack_require__.b),
    },
])
const TwitterXRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterXRound', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(92814), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(24608), __webpack_require__.b),
    },
])
const Uniswap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Uniswap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6576), __webpack_require__.b),
    },
])
const WETH = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WETH', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(70948), __webpack_require__.b),
    },
])
const X2Y2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('X2Y2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69722), __webpack_require__.b),
    },
])
const XLog = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('XLog', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90601), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(85976), __webpack_require__.b),
    },
])
const YouTube = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('YouTube', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65409), __webpack_require__.b),
    },
])
const YouTubeGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('YouTubeGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82728), __webpack_require__.b),
    },
])
const Zerion = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Zerion', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(23663), __webpack_require__.b),
    },
])
const ZeroX = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ZeroX', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97772), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(64695), __webpack_require__.b),
    },
])
const Zilliqa = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Zilliqa', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88541), __webpack_require__.b),
    },
])
const ZkScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('zkScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(68582), __webpack_require__.b),
    },
])
const Zora = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Zora', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18666), __webpack_require__.b),
    },
])
const Add = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Add', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50845), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 4.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4ZM3.2 12a8.8 8.8 0 1 1 17.6 0 8.8 8.8 0 0 1-17.6 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 8a.8.8 0 0 1 .8.8v6.4a.8.8 0 0 1-1.6 0V8.8A.8.8 0 0 1 12 8Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M8 12a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 0 1.6H8.8A.8.8 0 0 1 8 12Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const AddNoBorder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'AddNoBorder',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(69891), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 13 12',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M1.6 6a.4.4 0 0 1 .4-.4h9a.4.4 0 0 1 0 .8H2a.4.4 0 0 1-.4-.4Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M6.5 1.1a.4.4 0 0 1 .4.4v9a.4.4 0 0 1-.8 0v-9a.4.4 0 0 1 .4-.4Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [13, 12],
)
const AddUser = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('AddUser', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88192), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M15.5 12.159a.6.6 0 0 1 .6.6v4.062a.6.6 0 0 1-1.2 0v-4.062a.6.6 0 0 1 .6-.6Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M18.132 14.79a.6.6 0 0 1-.6.6h-4.065a.6.6 0 0 1 0-1.2h4.065a.6.6 0 0 1 .6.6ZM9.298 2.41a2.992 2.992 0 1 0 0 5.984 2.992 2.992 0 0 0 0-5.983ZM5.106 5.403a4.192 4.192 0 1 1 8.384 0 4.192 4.192 0 0 1-8.384 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6.519 8.988a7.797 7.797 0 0 1 8.497 1.69.6.6 0 0 1-.848.848 6.597 6.597 0 0 0-11.263 4.666.6.6 0 0 1-1.2 0A7.798 7.798 0 0 1 6.52 8.988Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const America = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('America', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17737), __webpack_require__.b),
    },
])
const Appearance = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Appearance', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60568), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm10.09 13.908-4.7-2.286 3.707-3.503L9.692 3l4.576 2.538 5.072-.878-.879 5.071L21 14.307l-5.118.598-3.504 3.705-2.286-4.702Zm-2.262.658 1.608 1.609-4.825 4.826-1.609-1.609 4.826-4.826Z',
                }),
            }),
        s: true,
    },
])
const Appendices = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Appendices', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59916), __webpack_require__.b),
    },
])
const ApplicationNFT = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ApplicationNFT', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78080), __webpack_require__.b),
    },
])
const Approve = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Approve', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(86398), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 18 18',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M9.502.936c.456 0 .94.063 1.338.208l.005.002 3.742 1.403c.56.209 1.038.63 1.373 1.114.335.484.56 1.08.56 1.677v5.573c0 .554-.18 1.153-.441 1.675-.263.522-.637 1.023-1.082 1.356l-3.224 2.406c-.644.484-1.468.71-2.265.71-.798 0-1.622-.226-2.265-.71l-3.224-2.406c-.445-.333-.82-.834-1.082-1.356-.263-.522-.442-1.12-.442-1.675V5.34c0-.595.226-1.188.56-1.671.335-.483.813-.903 1.372-1.113h.001l3.741-1.41h.002c.393-.147.875-.21 1.331-.21ZM8.565 2.2 4.821 3.61c-.302.113-.609.364-.842.7-.233.336-.36.71-.36 1.03v5.573c0 .33.113.755.322 1.17.208.413.482.759.75.96m0 0 3.226 2.408c.414.311.989.483 1.59.483.6 0 1.175-.172 1.59-.483v-.001l3.225-2.408c.268-.2.542-.546.75-.96.209-.414.322-.838.322-1.17V5.34c0-.324-.127-.7-.36-1.037-.233-.337-.54-.588-.842-.7L10.453 2.2c-.24-.087-.583-.14-.951-.14-.37 0-.708.053-.937.139',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12.118 6.487c.22.22.22.576 0 .796l-3.225 3.224a.562.562 0 0 1-.796 0L6.89 9.3a.562.562 0 1 1 .795-.795l.81.81 2.827-2.828c.22-.22.576-.22.796 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const ArrowBack = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowBack', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(95820), __webpack_require__.b),
    },
])
const ArrowDownRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowDownRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59542), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'm4 5.6 4 4 4-4',
                }),
            }),
        s: true,
    },
])
const ArrowDownward = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowDownward', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1759), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M12 4.135a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0v-14a1 1 0 0 1 1-1Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.293 11.428a1 1 0 0 1 1.414 0L12 17.72l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const ArrowDrop = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowDrop', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72305), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm11.434 15.434-5.068-5.068A.8.8 0 0 1 6.93 9h10.14a.8.8 0 0 1 .565 1.366l-5.068 5.068a.8.8 0 0 1-1.132 0Z',
                }),
            }),
        s: true,
    },
])
const ArrowRight = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowRight', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5641), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeMiterlimit: '10',
                    d: 'm7.708 4.792 5.209 5.416-5.209 5.417',
                }),
            }),
        s: true,
    },
])
const ArrowUp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowUp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18033), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm12.566 9.066 5.068 5.068a.8.8 0 0 1-.566 1.366H6.931a.8.8 0 0 1-.565-1.366l5.068-5.068a.8.8 0 0 1 1.132 0Z',
                }),
            }),
        s: true,
    },
])
const ArrowUpRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowUpRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63932), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'm18 15.6-4-4-4 4',
                }),
            }),
        s: true,
    },
])
const BackUp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BackUp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93899), __webpack_require__.b),
    },
])
const BaseClose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BaseClose', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(38101), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(74640), __webpack_require__.b),
    },
])
const BaseContacts = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BaseContacts', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41371), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'BaseContacts_svg__base/Contacts-1',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'BaseContacts_svg__Vector (Stroke)',
                            d: 'M6 2.809c-1.225 0-2.2.979-2.2 2.17v10.91c0 1.191.975 2.17 2.2 2.17h.75c.996 0 1.97.39 2.684 1.102l.002.002 1.706 1.687a1.222 1.222 0 0 0 1.706 0l1.707-1.687.001-.002a3.788 3.788 0 0 1 2.684-1.102H18c1.224 0 2.2-.987 2.2-2.17V4.979c0-1.191-.975-2.17-2.2-2.17H6Zm-3.8 2.17c0-2.089 1.705-3.77 3.8-3.77h12c2.095 0 3.8 1.681 3.8 3.77v10.91c0 2.077-1.703 3.77-3.8 3.77h-.76c-.592 0-1.147.229-1.554.636l-.004.003-1.71 1.69a2.823 2.823 0 0 1-3.954 0l-1.71-1.69-.003-.003a2.205 2.205 0 0 0-1.555-.636H6c-2.095 0-3.8-1.681-3.8-3.77V4.979Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'BaseContacts_svg__Vector (Stroke)_2',
                            d: 'M12 6.14a1.53 1.53 0 1 0 0 3.059 1.53 1.53 0 0 0 0-3.06ZM8.87 7.668a3.13 3.13 0 1 1 6.26 0 3.13 3.13 0 0 1-6.26 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'BaseContacts_svg__Vector (Stroke)_3',
                            d: 'M7.2 15.66c0-2.387 2.309-4.06 4.8-4.06 2.492 0 4.8 1.673 4.8 4.06a.8.8 0 0 1-1.6 0c0-1.214-1.271-2.46-3.2-2.46-1.928 0-3.2 1.246-3.2 2.46a.8.8 0 0 1-1.6 0Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const BaseUpload = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'BaseUpload',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(32728), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 25',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'm12 5.12 4.566 4.565a.8.8 0 0 1-1.131 1.131L12.8 8.182v7.569a.8.8 0 0 1-1.6 0V8.18l-2.634 2.635a.8.8 0 0 1-1.131-1.131L12 5.119Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M5.8 15.45v3h12.4v-3h1.6v3.6a1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1v-3.6h1.6Z',
                            }),
                        ],
                    }),
                }),
            s: true,
        },
    ],
    [24, 25],
)
const BaseUser = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BaseUser', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98592), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M6.786 21.02c.637.12 1.37.18 2.215.18h6c.844 0 1.577-.06 2.214-.18-.536-1.776-2.565-3.25-5.214-3.25-2.65 0-4.679 1.474-5.215 3.25Zm-1.723.532c.266-3.141 3.413-5.382 6.938-5.382 3.524 0 6.67 2.241 6.937 5.382a.8.8 0 0 1-.57.835c-.978.289-2.1.413-3.367.413H9c-1.268 0-2.39-.124-3.367-.413a.8.8 0 0 1-.57-.835Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.06 3.059C4.408 1.71 6.42 1.199 9 1.199h6c2.58 0 4.592.511 5.94 1.86 1.35 1.348 1.86 3.361 1.86 5.94v6c0 1.955-.292 3.578-1.016 4.838-.744 1.292-1.895 2.119-3.426 2.552a.8.8 0 0 1-1.015-.702c-.174-2.059-2.367-3.918-5.343-3.918-2.975 0-5.168 1.86-5.343 3.918a.8.8 0 0 1-1.015.702c-1.53-.433-2.682-1.26-3.425-2.552-.725-1.26-1.017-2.883-1.017-4.838V9c0-2.579.511-4.592 1.86-5.94Zm1.13 1.13C3.29 5.092 2.8 6.58 2.8 9v6c0 1.825.278 3.127.804 4.04a3.61 3.61 0 0 0 1.65 1.506C6.029 17.943 8.865 16.17 12 16.17c3.135 0 5.971 1.773 6.747 4.376a3.615 3.615 0 0 0 1.65-1.506c.525-.913.803-2.215.803-4.04V9c0-2.42-.489-3.908-1.39-4.81-.902-.9-2.389-1.39-4.81-1.39H9c-2.42 0-3.908.49-4.81 1.39ZM12 7.8a2.776 2.776 0 0 0-2.78 2.78A2.785 2.785 0 0 0 12 13.37a2.785 2.785 0 0 0 2.78-2.79A2.776 2.776 0 0 0 12 7.8Zm-4.38 2.78A4.376 4.376 0 0 1 12 6.2a4.376 4.376 0 0 1 4.38 4.38A4.385 4.385 0 0 1 12 14.97a4.385 4.385 0 0 1-4.38-4.39Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 7.8a2.776 2.776 0 0 0-2.78 2.78A2.785 2.785 0 0 0 12 13.37a2.785 2.785 0 0 0 2.78-2.79A2.776 2.776 0 0 0 12 7.8Zm-4.38 2.78A4.376 4.376 0 0 1 12 6.2a4.376 4.376 0 0 1 4.38 4.38A4.385 4.385 0 0 1 12 14.97a4.385 4.385 0 0 1-4.38-4.39Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const BestTrade = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BestTrade', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(42513), __webpack_require__.b),
    },
])
const BluePin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BluePin', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75524), __webpack_require__.b),
    },
])
const BorderedSuccess = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BorderedSuccess', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(928), __webpack_require__.b),
    },
])
const BusyWalletNav = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BusyWalletNav', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37501), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M17.77 9.873h3.484c.412 0 .746.326.746.728v2.53a.746.746 0 0 1-.746.729h-3.405c-.994.013-1.863-.651-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.092 2.092 0 0 1 1.576-.74Zm.15 2.66h.33a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.745h-.33a.766.766 0 0 0-.54.213.728.728 0 0 0-.224.524c0 .413.341.749.765.754Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M22 8.382h-4.231v.034c-1.964 0-3.556 1.552-3.556 3.467s1.592 3.467 3.556 3.467H22v.312C22 19.015 19.964 21 16.516 21H7.484C4.036 21 2 19.015 2 15.662V8.338C2 4.985 4.036 3 7.484 3h9.032C19.964 3 22 4.985 22 8.382Zm-15.262 0h5.644a.755.755 0 0 0 .765-.746.755.755 0 0 0-.764-.745H6.738a.755.755 0 0 0-.764.736c0 .413.34.75.764.754Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#FF3545',
                        d: 'M23 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#fff',
                        fillRule: 'evenodd',
                        d: 'M24 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM20.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Buy = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Buy', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75250), __webpack_require__.b),
    },
])
const Cached = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Cached', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71514), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    d: 'm19.617 8.902-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46a7.93 7.93 0 0 0 4.26 1.24c4.42 0 8-3.58 8-8h3l-4-4Zm-13 4c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46a7.93 7.93 0 0 0-4.26-1.24c-4.42 0-8 3.58-8 8h-3l4 4 4-4h-3Z',
                    style: {
                        '--default-color': '#1C68F3',
                        fill: 'var(--icon-color, var(--default-color, currentColor))',
                    },
                }),
            }),
        s: true,
    },
])
const Candle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('candle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8556), __webpack_require__.b),
    },
])
const Card = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Card', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41754), __webpack_require__.b),
    },
])
const Check = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Check', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(68540), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M21.066 6.434a.8.8 0 0 1 0 1.13l-10 10a.8.8 0 0 1-1.131 0l-5-5a.8.8 0 0 1 1.13-1.13l4.435 4.434 9.434-9.434a.8.8 0 0 1 1.132 0Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Checkbox = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Checkbox', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27737), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M0 4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#fff',
                        fillRule: 'evenodd',
                        d: 'M14.03 5.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 0 1 1.06 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const CheckboxBlank = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckboxBlank', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75018), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                    width: '18',
                    height: '18',
                    x: '1',
                    y: '1',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    rx: '3',
                }),
            }),
        s: true,
    },
])
const CheckboxBorder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckboxBorder', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(95876), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                    width: '17',
                    height: '17',
                    x: '.5',
                    y: '.5',
                    fill: '#fff',
                    stroke: 'currentColor',
                    rx: '3.5',
                }),
            }),
        s: true,
    },
])
const CheckboxNo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckboxNo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75746), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                    width: '14',
                    height: '14',
                    x: '1',
                    y: '1',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    rx: '3',
                }),
            }),
        s: true,
    },
])
const CheckCircle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckCircle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(36976), __webpack_require__.b),
    },
])
const ChevronUp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ChevronUp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84826), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M5.833 10.833 10 15l4.167-4.167M5.833 5 10 9.167 14.167 5',
                }),
            }),
        s: true,
    },
])
const China = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('China', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51940), __webpack_require__.b),
    },
])
const CircleClose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CircleClose', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71632), __webpack_require__.b),
    },
])
const CircleLoading = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CircleLoading', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87654), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 36 36',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M34.5 18c0 9.113-7.387 16.5-16.5 16.5S1.5 27.113 1.5 18 8.887 1.5 18 1.5 34.5 8.887 34.5 18ZM4.8 18c0 7.29 5.91 13.2 13.2 13.2 7.29 0 13.2-5.91 13.2-13.2 0-7.29-5.91-13.2-13.2-13.2-7.29 0-13.2 5.91-13.2 13.2Z',
                            opacity: '.5',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M18 32.85c0 .911-.74 1.658-1.647 1.568A16.5 16.5 0 1 1 31.595 8.65c.517.751.218 1.76-.58 2.199-.799.439-1.794.14-2.33-.598a13.2 13.2 0 1 0-12.33 20.846c.903.114 1.645.842 1.645 1.753Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const CircleWarning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CircleWarning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69564), __webpack_require__.b),
    },
])
const Clear = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Clear', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(57208), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(97560), __webpack_require__.b),
    },
])
const Close = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Close', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64970), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M15 5 5 15M5 5l10 10',
                }),
            }),
        s: true,
    },
])
const Cloud = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Cloud', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65226), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 18 18',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipPath: "url('#Cloud_svg__cloud_a')",
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M4.924 7.633a.6.6 0 0 1-.536.658 2.576 2.576 0 1 0 .726 5.097.6.6 0 0 1 .217 1.18 3.776 3.776 0 1 1-1.065-7.471.6.6 0 0 1 .658.536Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M13.515 7.313a.6.6 0 0 1-.737-.422 4.253 4.253 0 1 0-8.107 2.55.6.6 0 0 1-1.129.406 5.453 5.453 0 1 1 10.395-3.27.6.6 0 0 1-.422.736Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M12.574 13.412a2.889 2.889 0 1 0-1.734-4.951.6.6 0 0 1-.835-.862 4.088 4.088 0 1 1 2.455 7.008.6.6 0 0 1 .114-1.195Zm-3.948-2.038a.6.6 0 0 1 .6.6v4.01l1.282-1.28a.6.6 0 1 1 .848.848L9.05 17.858a.6.6 0 0 1-.848 0l-2.306-2.306a.6.6 0 1 1 .848-.849l1.282 1.282v-4.011a.6.6 0 0 1 .6-.6Z',
                            }),
                        ],
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('clipPath', {
                            id: 'Cloud_svg__cloud_a',
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                fill: 'currentColor',
                                d: 'M.043.933h18v18h-18z',
                            }),
                        }),
                    }),
                ],
            }),
        s: true,
    },
])
const CloudBackup = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CloudBackup', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20523), __webpack_require__.b),
    },
])
const CloudBackup2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CloudBackup2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5289), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 19 19',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipPath: "url('#CloudBackup2_svg__cloud_backup_a')",
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M4.924 7.633a.6.6 0 0 1-.536.658 2.576 2.576 0 1 0 .726 5.097.6.6 0 0 1 .217 1.18 3.776 3.776 0 1 1-1.065-7.471.6.6 0 0 1 .658.536Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M13.515 7.313a.6.6 0 0 1-.737-.422 4.253 4.253 0 1 0-8.107 2.55.6.6 0 0 1-1.129.406 5.453 5.453 0 1 1 10.395-3.27.6.6 0 0 1-.422.736Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M12.574 13.412a2.889 2.889 0 1 0-1.734-4.951.6.6 0 0 1-.835-.862 4.088 4.088 0 1 1 2.455 7.008.6.6 0 0 1 .114-1.195Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M8.626 16.535a.6.6 0 0 1-.6-.6v-4.011l-1.282 1.282a.6.6 0 0 1-.849-.849l2.306-2.306a.6.6 0 0 1 .849 0l2.306 2.306a.6.6 0 0 1-.848.849l-1.282-1.282v4.01a.6.6 0 0 1-.6.6Z',
                            }),
                        ],
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('clipPath', {
                            id: 'CloudBackup2_svg__cloud_backup_a',
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                fill: 'currentColor',
                                d: 'M.043.933h18v18h-18z',
                            }),
                        }),
                    }),
                ],
            }),
        s: true,
    },
])
const CloudLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CloudLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(49650), __webpack_require__.b),
    },
])
const CNY = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CNY', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79688), __webpack_require__.b),
    },
])
const Collectible = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Collectible',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(68118), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 13 12',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M6.5 0c-3.307 0-6 2.69-6 6s2.693 6 6 6 6-2.693 6-6-2.69-6-6-6Zm5.223 6a5.19 5.19 0 0 1-.92 2.96 2.705 2.705 0 0 0-.026-.067V8.89c-.156-.384-.468-.844-.905-1.367v-.001c-.09-.106-.175-.205-.252-.291a.617.617 0 0 0 .11-.352V3.975A3.255 3.255 0 0 0 7.299.838 5.233 5.233 0 0 1 11.723 6ZM1.277 6A5.233 5.233 0 0 1 5.805.823a2.85 2.85 0 0 0-1.287.739 2.972 2.972 0 0 0-.883 2.098v3.4c-.39.423-.843 1.015-1.117 1.61a6.888 6.888 0 0 0-.192.458A5.184 5.184 0 0 1 1.277 6Zm1.637 3.793c.062-.197.135-.397.224-.605.017.112.04.226.07.337l.001.002c.102.356.306.66.481.874a5.335 5.335 0 0 1-.776-.608Zm1.554-2.47c.023-.021.047-.042.073-.063a3.02 3.02 0 0 0-.009.233c0 .28.045.589.2.841a.97.97 0 0 0 .715.47c.09.016.173.02.249.02.45 0 .852-.183 1.167-.393.23-.154.423-.327.567-.474a.636.636 0 0 0 .486.02l.682-.245a2.694 2.694 0 0 0-.824.774c-.281.406-.443 1.019-.54 1.56-.077.432-.116.843-.136 1.116-.194.025-.389.04-.585.041-.063-.3-.236-.745-.726-1.013a1.97 1.97 0 0 0-1.406-.204c-.143-.154-.342-.41-.422-.691-.152-.533-.057-1.184-.013-1.423a6.11 6.11 0 0 1 .522-.569Zm1.016 1.254-.035.228h-.004l.04-.228Zm2.35-4.3h-.002V3.054c0-.825-.672-1.493-1.493-1.493h-.126a1.5 1.5 0 0 0-.23.018c.173-.046.354-.069.54-.067a2.47 2.47 0 0 1 2.43 2.463v2.8l-1.118.405V4.277ZM4.417 3.66c0-.545.215-1.085.594-1.487-.182.247-.29.552-.29.882v1.454c0 .443.196.836.498 1.108a.714.714 0 0 1-.128.247c-.107.14-.314.28-.566.45a6.006 6.006 0 0 0-.108.072V3.66Zm1.92 2.348c.26 0 .504-.068.715-.186v1.393a3.274 3.274 0 0 1-.454.444c-.31.247-.678.433-1.034.379h-.001a.22.22 0 0 1-.172-.108c-.081-.136-.104-.384-.074-.681.025-.248.08-.49.126-.644a1.513 1.513 0 0 0 .469-.63c.095.02.195.033.299.033h.126Zm-.839-2.953c0-.396.322-.716.716-.716h.126c.396 0 .716.322.716.716v1.454a.716.716 0 0 1-.716.716h-.126a.716.716 0 0 1-.716-.716V3.054Zm2.915 5.894a1.923 1.923 0 0 1 1.011-.741c.318.399.533.734.633.978.052.127.1.294.139.499a5.244 5.244 0 0 1-2.305 1.35c.022-.248.059-.56.117-.878.088-.484.22-.94.405-1.208Zm-3.95 1.857a.188.188 0 0 1 .01-.018c.12-.041.495-.137.94.106a.638.638 0 0 1 .258.262 5.25 5.25 0 0 1-1.208-.35Z',
                        clipRule: 'evenodd',
                    }),
                }),
            s: true,
        },
    ],
    [13, 12],
)
const Comeback = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Comeback', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97406), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M20 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a.996.996 0 0 0 1.415 0 1 1 0 0 0 0-1.414L7.413 13H20a1 1 0 1 0 0-2Z',
                }),
            }),
        s: true,
    },
])
const Connect = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Connect', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5720), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6.39 8.988a.6.6 0 0 1 .6-.6h4.02a.6.6 0 1 1 0 1.2H6.99a.6.6 0 0 1-.6-.6Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M1.986 9a3.961 3.961 0 0 1 3.96-3.96h2.015v1.2H5.947a2.761 2.761 0 1 0 0 5.521H7.96v1.2H5.947a3.961 3.961 0 0 1-3.961-3.96Zm14.028 0a3.961 3.961 0 0 0-3.96-3.96H9.288v1.2h2.764a2.761 2.761 0 0 1 0 5.521H9.29v1.2h2.764a3.961 3.961 0 0 0 3.961-3.96Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Contacts = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Contacts', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82112), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M17.294 7.291A5.274 5.274 0 0 1 12 12.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12 2a5.273 5.273 0 0 1 5.294 5.291ZM12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425 0 2.72-3.685 3.4-8 3.4Zm3.644-8.014a.8.8 0 0 1 .8-.8h5.112a.8.8 0 0 1 0 1.6h-5.112a.8.8 0 0 1-.8-.8Zm1.289-2.45a.8.8 0 0 1 .8-.8h3.823a.8.8 0 0 1 0 1.6h-3.823a.8.8 0 0 1-.8-.8Zm1.203-2.449a.8.8 0 0 1 .8-.8h2.62a.8.8 0 0 1 0 1.6h-2.62a.8.8 0 0 1-.8-.8Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Copy = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Copy',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(34166), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 16 17',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M7.736 12.923c-.898 0-1.68-.268-2.244-.794-.566-.53-.858-1.272-.858-2.117V5.267c0-.84.29-1.58.851-2.11.559-.525 1.336-.794 2.227-.8h4.386c.898 0 1.68.267 2.243.793.567.53.859 1.272.859 2.117v4.745c0 .84-.29 1.58-.852 2.109-.558.525-1.335.795-2.226.8h-.003l-4.383.002v-.534.534Zm0-1.067c-.689 0-1.19-.203-1.516-.506-.32-.3-.52-.746-.52-1.338V5.267c0-.589.198-1.033.516-1.332.322-.303.82-.507 1.5-.51h.002l4.38-.002c.689 0 1.19.203 1.515.506.321.3.52.746.52 1.338v4.745c0 .589-.197 1.032-.516 1.332-.322.303-.818.506-1.5.51l-4.381.002Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M5.41 15c-.898 0-1.68-.268-2.243-.794-.567-.53-.86-1.272-.86-2.117V7.344c0-1.084.484-1.987 1.37-2.49a.533.533 0 0 1 .526.928c-.514.292-.828.817-.828 1.562v4.745c0 .592.199 1.037.52 1.338.325.303.826.506 1.515.506l4.382-.002c.763-.005 1.295-.258 1.612-.627a.533.533 0 0 1 .81.694c-.563.654-1.418.994-2.418 1h-.003L5.41 15v-.534V15Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [16, 17],
)
const Currency = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Currency', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69484), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 25 25',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M3.36 8.49v9h15v-9h-15Zm14.25 2.128a2.265 2.265 0 0 1-1.377-1.378h1.377v1.378Zm-2.133 6.122H6.245a2.975 2.975 0 0 0-2.135-2.133v-3.23A2.978 2.978 0 0 0 6.244 9.24h9.232a2.979 2.979 0 0 0 2.134 2.138v3.227a2.978 2.978 0 0 0-2.133 2.135Zm-9.99-7.5a2.258 2.258 0 0 1-1.377 1.371v-1.37h1.377ZM4.11 15.373a2.255 2.255 0 0 1 1.372 1.367H4.11v-1.367Zm12.132 1.367a2.26 2.26 0 0 1 1.368-1.376v1.376h-1.368Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M14.985 11.865a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm0 1.5a.376.376 0 0 1 0-.75.376.376 0 0 1 0 .75ZM10.86 9.99c-1.242 0-2.25 1.344-2.25 3 0 1.657 1.008 3 2.25 3 1.243 0 2.25-1.343 2.25-3 0-1.656-1.007-3-2.25-3Zm0 5.25c-.813 0-1.5-1.03-1.5-2.25s.687-2.25 1.5-2.25 1.5 1.03 1.5 2.25-.687 2.25-1.5 2.25Zm-4.125-3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm0 1.5a.375.375 0 0 1 0-.75.376.376 0 0 1 0 .75ZM5.28 6.48H6v1.56h-.72zm14.76 0v.72H6v-.72z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#111418',
                        d: 'M20.04 14.76v.72h-.96v-.72z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        stroke: 'currentColor',
                        strokeWidth: '.36',
                        d: 'M20.22 6.66h.36v8.64h-.36z',
                    }),
                ],
            }),
        s: true,
    },
])
const Dark = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Dark', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(57418), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M9.266 1.878a3.979 3.979 0 0 0 1.007 7.827 3.979 3.979 0 0 0 3.849-2.971 6.25 6.25 0 1 1-4.855-4.855Z',
                }),
            }),
        s: true,
    },
])
const Decrease = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('decrease', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77597), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'decrease_svg__base/decrease',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'decrease_svg__Vector (Stroke)',
                            d: 'M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-7.333 6a7.333 7.333 0 1 1 14.666 0 7.333 7.333 0 0 1-14.666 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'decrease_svg__Vector (Stroke)_2',
                            d: 'M6.667 10c0-.369.298-.667.666-.667h5.334a.667.667 0 1 1 0 1.333H7.333a.667.667 0 0 1-.666-.667Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const DefaultToken = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DefaultToken', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(60737), __webpack_require__.b),
    },
    {
        c: ['dim'],
        u: () => new URL(/* asset import */ __webpack_require__(98331), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(52122), __webpack_require__.b),
    },
])
const Delete = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Delete', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31967), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.334 1.334 0 0 1 1.334 1.334V4m2 0v9.333a1.334 1.334 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334zm-6 3.333v4m2.666-4v4',
                }),
            }),
        s: true,
    },
])
const Disconnect = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Disconnect', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97234), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M16.348 4.455a.8.8 0 0 1 .293 1.093L8.746 19.223a.8.8 0 0 1-1.386-.8l7.895-13.675a.8.8 0 0 1 1.093-.293Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M2.647 12A5.281 5.281 0 0 1 7.93 6.72h3.316v1.6H7.929a3.681 3.681 0 1 0 0 7.362h1.163v1.6H7.93a5.281 5.281 0 0 1-5.282-5.28Zm18.705 0a5.281 5.281 0 0 0-5.28-5.281h-1.66v1.6h1.66a3.681 3.681 0 0 1 0 7.362H12.35v1.6h3.72a5.281 5.281 0 0 0 5.281-5.28Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Document = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Document', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(94706), __webpack_require__.b),
    },
])
const Documents = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Documents', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89869), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.98 2.61c-.42.45-.65 1.14-.65 2.06v6.66c0 .92.23 1.6.65 2.06.42.44 1.09.74 2.15.74h5.34c1.06 0 1.74-.3 2.15-.74.42-.46.65-1.14.65-2.06V4.67c0-.92-.23-1.6-.65-2.06-.41-.44-1.09-.74-2.15-.74H6.13c-1.06 0-1.73.3-2.15.74ZM3.2 1.9C3.87 1.17 4.87.8 6.13.8h5.34c1.27 0 2.26.37 2.93 1.1.66.71.93 1.7.93 2.78v6.66c0 1.08-.27 2.07-.93 2.78-.67.72-1.66 1.09-2.93 1.09H6.13c-1.26 0-2.26-.37-2.93-1.09a3.98 3.98 0 0 1-.93-2.78V4.67c0-1.09.27-2.07.93-2.78Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M11.46 1.33c.29 0 .53.24.53.54V3.2c0 .44.36.8.8.8h1.33a.53.53 0 0 1 0 1.07H12.8a1.87 1.87 0 0 1-1.87-1.87V1.87c0-.3.24-.54.54-.54ZM5.6 8c0-.3.24-.53.53-.53h4a.53.53 0 1 1 0 1.06h-4A.53.53 0 0 1 5.6 8Zm0 2.14c0-.3.24-.54.53-.54h5.33a.53.53 0 0 1 0 1.07H6.13a.53.53 0 0 1-.53-.53Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Download = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Download', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78264), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M14 10v2.667A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V10m2.667-3.333L8 10l3.333-3.333M8 10V2',
                }),
            }),
        s: true,
    },
])
const Download2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Download2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(73073), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M11.694 9.779a.8.8 0 0 1-.494-.74v-6a.8.8 0 0 1 1.6 0v4.07l.634-.635a.8.8 0 0 1 1.132 1.132l-2 2a.8.8 0 0 1-.872.173Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12.566 9.606a.8.8 0 0 1-1.132 0l-2-2a.8.8 0 1 1 1.132-1.132l2 2a.8.8 0 0 1 0 1.132Zm-9.724 3.11c.731-1.058 2.083-1.517 4.158-1.517.552 0 .982.057 1.37.209.364.141.642.35.88.529l.03.022a.8.8 0 0 1 .104.094l1.01 1.078a2.198 2.198 0 0 0 3.202.001l.003-.002 1.02-1.08a.803.803 0 0 1 .101-.09l.03-.023c.239-.18.516-.388.88-.53.388-.15.818-.208 1.37-.208 2.076 0 3.427.459 4.158 1.517.35.505.502 1.075.573 1.622.07.53.07 1.101.07 1.633v1.028c0 1.451-.259 2.928-1.185 4.046-.951 1.148-2.468 1.754-4.616 1.754H8c-2.576 0-4.177-.57-5.033-1.81-.412-.596-.595-1.274-.682-1.94-.085-.65-.085-1.352-.085-2.02V15.97c0-.532 0-1.102.07-1.633.07-.547.223-1.117.572-1.622Zm1.014 1.83c-.055.417-.056.888-.056 1.453v1c0 .703.001 1.306.072 1.842.069.53.198.93.411 1.239.395.57 1.293 1.12 3.717 1.12h8c1.852 0 2.836-.514 3.384-1.176.574-.693.816-1.716.816-3.025v-1c0-.565-.001-1.036-.056-1.454-.053-.41-.151-.702-.302-.92-.269-.39-.917-.826-2.842-.826-.448 0-.658.048-.79.1-.131.05-.24.124-.475.3l-.97 1.027-.002.001a3.799 3.799 0 0 1-5.534.002l-.003-.003-.962-1.029c-.235-.175-.343-.247-.474-.299-.132-.05-.342-.099-.79-.099-1.924 0-2.573.437-2.842.826-.15.218-.249.51-.302.92Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M8.797 5.961a.8.8 0 0 1-.72.874c-1.355.13-1.796.54-1.996.915-.261.49-.28 1.179-.28 2.248v2a.8.8 0 1 1-1.6 0V9.894c-.001-.92-.002-2.015.469-2.897.55-1.03 1.609-1.596 3.253-1.755a.8.8 0 0 1 .874.72Zm6.407 0a.8.8 0 0 1 .873-.719c1.645.159 2.704.725 3.254 1.755.47.882.47 1.977.47 2.897v2.104a.8.8 0 1 1-1.6 0v-2c0-1.07-.02-1.759-.282-2.248-.2-.375-.64-.784-1.996-.915a.8.8 0 0 1-.719-.874Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Drop = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Drop',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(89038), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 20 24',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M9.46 14.845a.7.7 0 0 0 1.08 0l2.845-3.45a.7.7 0 0 0-.54-1.145h-5.69a.7.7 0 0 0-.54 1.145l2.845 3.45Z',
                    }),
                }),
            s: true,
        },
    ],
    [20, 24],
)
const Dump = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Dump', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(7652), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.566 4.565C3.07 5.06 2.8 5.993 2.8 7.999v8c0 2.006.27 2.939.766 3.434.495.496 1.428.766 3.434.766h10c2.006 0 2.939-.27 3.434-.766.496-.495.766-1.428.766-3.434v-4c0-2.006-.27-2.939-.765-3.434-.496-.496-1.43-.766-3.435-.766h-3c-.572 0-1.043-.084-1.446-.328-.359-.216-.592-.525-.759-.746l-.032-.042-.003-.004-1.5-2c-.304-.405-.44-.569-.623-.679-.165-.099-.456-.2-1.137-.2H7c-2.006 0-2.939.27-3.434.765ZM2.435 3.434C3.439 2.429 5.005 2.199 7 2.199h1.5c.82 0 1.443.118 1.96.43.478.286.787.699 1.046 1.045l.034.045 1.499 1.998c.21.277.27.341.343.385.051.031.19.097.618.097h3c1.994 0 3.561.23 4.566 1.235 1.004 1.004 1.234 2.57 1.234 4.565v4c0 1.995-.23 3.562-1.234 4.566-1.005 1.004-2.572 1.234-4.566 1.234H7c-1.994 0-3.561-.23-4.565-1.234C1.43 19.56 1.2 17.993 1.2 15.999V8c0-1.994.23-3.561 1.235-4.565Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M7.2 3a.8.8 0 0 1 .8-.8h9c1.123 0 2.113.28 2.816.984.703.702.984 1.692.984 2.815v1.38a.8.8 0 0 1-1.6 0V6c0-.876-.218-1.387-.515-1.684-.297-.297-.808-.516-1.685-.516H8a.8.8 0 0 1-.8-.8Zm8.339 11.106a.8.8 0 0 1-.74.494h-6a.8.8 0 0 1 0-1.6h4.07l-.635-.634a.8.8 0 0 1 1.131-1.132l2 2a.8.8 0 0 1 .174.872Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M15.365 13.234a.8.8 0 0 1 0 1.132l-2 2a.8.8 0 0 1-1.131-1.132l2-2a.8.8 0 0 1 1.131 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Edit = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Edit', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20023), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M10 17.596h7.5m-3.75-13.75a1.768 1.768 0 0 1 2.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z',
                }),
            }),
        s: true,
    },
])
const Edit2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Edit2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(61122), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M20 19.25a.75.75 0 1 1 0 1.5H4a.75.75 0 1 1 0-1.5h16ZM16.76 2.81l2.304 2.303a1.2 1.2 0 0 1 0 1.697l-9.8 9.8a1.2 1.2 0 0 1-.849.352H5.512a.6.6 0 0 1-.6-.6V13.46a1.2 1.2 0 0 1 .352-.849l9.8-9.8a1.2 1.2 0 0 1 1.697 0l-.001.001Zm-.848 1.273-9.5 9.5v1.88h1.879l9.5-9.5-1.879-1.88Z',
                }),
            }),
        s: true,
    },
])
const Empty = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Empty', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84535), __webpack_require__.b),
    },
])
const EmptySimple = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EmptySimple', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(31395), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(2963), __webpack_require__.b),
    },
])
const EncryptedFiles = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EncryptedFiles', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20126), __webpack_require__.b),
    },
])
const Europe = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Europe', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72851), __webpack_require__.b),
    },
])
const Eye = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Eye', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(43908), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(19762), __webpack_require__.b),
    },
])
const EyeColor = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EyeColor', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43878), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 21 21',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M10.58 8.1a2.31 2.31 0 1 0 0 4.63 2.31 2.31 0 0 0 0-4.62Zm-3.65 2.32a3.65 3.65 0 1 1 7.3 0 3.65 3.65 0 0 1-7.3 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M2.43 7.9c2-3.14 4.93-5.04 8.15-5.04 3.22 0 6.16 1.9 8.15 5.04.46.72.67 1.64.67 2.52 0 .88-.2 1.8-.67 2.52-2 3.14-4.93 5.04-8.15 5.04-3.22 0-6.16-1.9-8.15-5.04a4.76 4.76 0 0 1-.67-2.52c0-.88.2-1.8.67-2.52Zm8.15-3.71c-2.66 0-5.21 1.56-7.03 4.42-.29.46-.46 1.11-.46 1.8 0 .7.17 1.36.46 1.81 1.82 2.86 4.37 4.43 7.03 4.43s5.21-1.57 7.03-4.43c.29-.45.46-1.1.46-1.8s-.17-1.35-.46-1.8c-1.82-2.87-4.37-4.43-7.03-4.43Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const EyeOff = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EyeOff', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(88107), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(61804), __webpack_require__.b),
    },
])
const Facebook = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Facebook', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(95856), __webpack_require__.b),
    },
])
const File = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('File', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82627), __webpack_require__.b),
    },
])
const FileMessage = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FileMessage', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58905), __webpack_require__.b),
    },
])
const FillSuccess = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FillSuccess', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93656), __webpack_require__.b),
    },
])
const Filter = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Filter', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69820), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M2.535 16.26a.8.8 0 0 1 .8-.8h7.234a.8.8 0 0 1 0 1.6H3.335a.8.8 0 0 1-.8-.8Zm15.249-2.08a2.08 2.08 0 1 0-.002 4.159 2.08 2.08 0 0 0 .002-4.159Zm-3.68 2.08a3.68 3.68 0 1 1 7.36 0 3.68 3.68 0 0 1-7.36 0Zm-1.475-8.523a.8.8 0 0 1 .8-.8h7.235a.8.8 0 0 1 0 1.6H13.43a.8.8 0 0 1-.8-.8Zm-10.094 0a3.68 3.68 0 1 1 7.36 0 3.68 3.68 0 0 1-7.36 0Zm3.68-2.08a2.08 2.08 0 1 0 0 4.16 2.08 2.08 0 0 0 0-4.16Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Flag = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Flag', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(29665), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.89 1.2a.8.8 0 0 1 .8.8v20a.8.8 0 0 1-1.6 0V2a.8.8 0 0 1 .8-.8Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.09 4a.8.8 0 0 1 .8-.8h11.2c.74 0 1.398.102 1.934.326.542.228 1.005.603 1.232 1.16.226.554.16 1.146-.064 1.687-.222.537-.616 1.072-1.137 1.593l-1.2 1.2c-.51.51-.452 1.27-.038 1.632a.79.79 0 0 1 .038.037l1.2 1.2c.99.99 1.63 2.191 1.158 3.293-.467 1.09-1.766 1.472-3.123 1.472H4.89a.8.8 0 0 1 0-1.6h11.2c1.243 0 1.594-.367 1.652-.502.053-.124.092-.622-.818-1.532l-1.183-1.183c-1.164-1.042-1.1-2.865-.017-3.948l1.2-1.2c.43-.43.674-.794.79-1.074.113-.274.084-.413.06-.471-.023-.057-.098-.175-.369-.288-.276-.116-.705-.202-1.315-.202H4.89a.8.8 0 0 1-.8-.8Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Folder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Folder', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72333), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.566 4.565C3.07 5.06 2.8 5.993 2.8 7.999v8c0 2.006.27 2.939.766 3.434.495.496 1.428.766 3.434.766h10c2.006 0 2.939-.27 3.434-.766.496-.495.766-1.428.766-3.434v-4c0-2.006-.27-2.939-.765-3.434-.496-.496-1.43-.766-3.435-.766h-3c-.572 0-1.043-.084-1.446-.328-.359-.216-.592-.525-.759-.746l-.032-.042-.003-.004-1.5-2c-.304-.405-.44-.569-.623-.679-.165-.099-.456-.2-1.137-.2H7c-2.006 0-2.939.27-3.434.765ZM2.435 3.434C3.439 2.429 5.005 2.199 7 2.199h1.5c.82 0 1.443.118 1.96.43.478.286.787.699 1.046 1.045l.034.045 1.499 1.998c.21.277.27.341.343.385.051.031.19.097.618.097h3c1.994 0 3.561.23 4.566 1.235 1.004 1.004 1.234 2.57 1.234 4.565v4c0 1.995-.23 3.562-1.234 4.566-1.005 1.004-2.572 1.234-4.566 1.234H7c-1.994 0-3.561-.23-4.565-1.234C1.43 19.56 1.2 17.993 1.2 15.999V8c0-1.994.23-3.561 1.235-4.565Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M7.2 3a.8.8 0 0 1 .8-.8h9c1.123 0 2.113.28 2.816.984.703.702.984 1.692.984 2.815v1.38a.8.8 0 0 1-1.6 0V6c0-.876-.218-1.387-.515-1.684-.297-.297-.808-.516-1.685-.516H8a.8.8 0 0 1-.8-.8Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Gas = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gas', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60130), __webpack_require__.b),
    },
])
const GasStation = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GasStation', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1339), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M4.92 3.338c-.354.327-.62.85-.62 1.662v16.2h12.4V5c0-.811-.265-1.335-.62-1.662-.364-.336-.906-.538-1.58-.538h-8c-.674 0-1.215.202-1.58.538ZM3.836 2.162C4.556 1.498 5.514 1.2 6.5 1.2h8c.986 0 1.945.298 2.665.962.73.674 1.135 1.65 1.135 2.838v17a.8.8 0 0 1-.8.8h-14a.8.8 0 0 1-.8-.8V5c0-1.188.405-2.164 1.136-2.838Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M1.2 22a.8.8 0 0 1 .8-.8h17a.8.8 0 0 1 0 1.6H2a.8.8 0 0 1-.8-.8ZM6.53 4.811c.538-.47 1.226-.62 1.86-.62h4.23c.635 0 1.323.15 1.861.62.558.487.83 1.205.83 2.07v1.23c0 .864-.272 1.582-.83 2.069-.538.47-1.226.62-1.86.62H8.39c-.635 0-1.323-.15-1.862-.62-.558-.487-.829-1.205-.829-2.07V6.88c0-.864.271-1.582.83-2.069Zm1.05 1.206c-.127.11-.28.338-.28.863v1.23c0 .526.153.753.28.864.147.128.404.226.81.226h4.23c.405 0 .662-.098.808-.226.127-.11.281-.338.281-.864V6.88c0-.525-.154-.752-.28-.863-.147-.128-.404-.227-.81-.227H8.39c-.405 0-.662.1-.809.227Zm4.258 6.187a.8.8 0 0 1 0 1.131l-1.741 1.741h2.738a.8.8 0 0 1 .584 1.346l-3.134 3.355a.8.8 0 1 1-1.169-1.092l1.876-2.009H8.165A.8.8 0 0 1 7.6 15.31l3.107-3.107a.8.8 0 0 1 1.131 0Zm7.447-3.561a.8.8 0 0 1 1.073-.358l2 1A.8.8 0 0 1 22.8 10v6a.8.8 0 0 1-.798.8l-4.5.01a.8.8 0 0 1-.004-1.6l3.702-.008v-4.707l-1.558-.78a.8.8 0 0 1-.357-1.072Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Gear = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gear', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(35786), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(32722), __webpack_require__.b),
    },
])
const GearSettings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GearSettings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17478), __webpack_require__.b),
    },
])
const Globe = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Globe', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30790), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18a38.524 38.524 0 0 0-.983-.332 9.077 9.077 0 0 1 8.52-6.38s.125-.018.186.14c.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474L9.047 5.9Zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04v.002Z',
                }),
            }),
        s: true,
    },
])
const GrayMasks = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GrayMasks', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84147), __webpack_require__.b),
    },
])
const HamburgerMenu = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('HamburgerMenu', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59737), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                            width: '15.383',
                            height: '2',
                            x: '4.309',
                            y: '6.539',
                            rx: '1',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                            width: '15.383',
                            height: '2',
                            x: '4.309',
                            y: '11',
                            rx: '1',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                            width: '15.383',
                            height: '2',
                            x: '4.309',
                            y: '15.461',
                            rx: '1',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const History = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('History', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(94299), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.743 3.919c-.63.677-.974 1.703-.974 3.08v10c0 1.378.344 2.403.974 3.08.619.668 1.628 1.12 3.226 1.12h7.375a.8.8 0 1 1 0 1.6H6.969c-1.903 0-3.393-.547-4.399-1.63-.996-1.073-1.401-2.547-1.401-4.17V7c0-1.622.405-3.097 1.401-4.17C3.576 1.748 5.066 1.2 6.97 1.2h8c1.902 0 3.393.548 4.399 1.63.995 1.073 1.4 2.548 1.4 4.17v4.205a.8.8 0 1 1-1.6 0V6.999c0-1.377-.343-2.403-.973-3.08-.62-.667-1.628-1.12-3.226-1.12h-8c-1.598 0-2.607.453-3.226 1.12Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M18.95 14.418a3.442 3.442 0 1 0 0 6.884 3.442 3.442 0 0 0 0-6.884Zm-4.842 3.442a4.842 4.842 0 1 1 9.684 0 4.842 4.842 0 0 1-9.684 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M18.949 14.895a.7.7 0 0 1 .7.7v2.278a.7.7 0 1 1-1.4 0v-2.279a.7.7 0 0 1 .7-.7Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M18.343 17.522a.7.7 0 0 1 .957-.256l1.668.963a.7.7 0 1 1-.7 1.213l-1.668-.963a.7.7 0 0 1-.257-.957ZM14.95 2a.8.8 0 0 1 .8.8v2c0 .658.542 1.2 1.2 1.2h2a.8.8 0 0 1 0 1.6h-2a2.806 2.806 0 0 1-2.8-2.8v-2a.8.8 0 0 1 .8-.8Zm-8.783 8.388a.8.8 0 0 1 .8-.8h6a.8.8 0 0 1 0 1.6h-6a.8.8 0 0 1-.8-.8Zm0 4.85a.8.8 0 0 1 .8-.8h4.814a.8.8 0 0 1 0 1.6H6.967a.8.8 0 0 1-.8-.8Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const HKD = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('HKD', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3901), __webpack_require__.b),
    },
])
const HongKong = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('HongKong', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(9897), __webpack_require__.b),
    },
])
const Identity = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Identity', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(68977), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(27959), __webpack_require__.b),
    },
])
const Info = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Info', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(24239), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(7942), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            d: 'M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#fff',
                            fillRule: 'evenodd',
                            d: 'M10 8.61a.75.75 0 0 1 .75.75v4.516a.75.75 0 1 1-1.5 0V9.359a.75.75 0 0 1 .75-.75Zm0-2.5a.75.75 0 0 1 .75.75v.019a.75.75 0 0 1-1.5 0v-.02a.75.75 0 0 1 .75-.75Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Interaction = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Interaction', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(38485), __webpack_require__.b),
    },
])
const InteractionCircle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InteractionCircle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79593), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M10.833 18.667a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'm12.75 6 1.5 1.5-1.5 1.5',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M7.5 9.75V9A1.5 1.5 0 0 1 9 7.5h5.25M9 14.25l-1.5-1.5 1.5-1.5',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M14.25 10.5v.75a1.5 1.5 0 0 1-1.5 1.5H7.5',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Japan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Japan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79970), __webpack_require__.b),
    },
])
const JPY = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('JPY', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(34558), __webpack_require__.b),
    },
])
const KeySquare = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'KeySquare',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(92242), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 25 24',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            stroke: 'currentColor',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '1.5',
                            d: 'M9.8 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            stroke: 'currentColor',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: '10',
                            strokeWidth: '1.5',
                            d: 'M17.08 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88Zm-5.83 2.67-.85-.86',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            stroke: 'currentColor',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '2',
                            d: 'M14.195 10.7h.009',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [25, 24],
)
const LeftArrow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LeftArrow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58177), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M16.566 4.937a.8.8 0 0 1 0 1.132l-6.435 6.434 6.434 6.434a.8.8 0 0 1-1.13 1.132l-7-7a.8.8 0 0 1 0-1.132l7-7a.8.8 0 0 1 1.13 0Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const LinearCalendar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LinearCalendar', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(10572), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(19011), __webpack_require__.b),
    },
])
const Link = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Link', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40596), __webpack_require__.b),
    },
])
const LinkOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LinkOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80490), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 12 12',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M1.6 2.1a.5.5 0 0 1 .5-.5h3.529v.8H2.4v7.2h7.2V6.235h.8V9.9a.5.5 0 0 1-.5.5H2.1a.5.5 0 0 1-.5-.5V2.1ZM6.832 2c0-.22.18-.4.4-.4H10c.22 0 .4.18.4.4v2.747a.4.4 0 0 1-.8 0v-1.77l-4.935 5.02a.4.4 0 0 1-.57-.56L9.045 2.4H7.233a.4.4 0 0 1-.4-.4Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Loader = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Loader', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52796), __webpack_require__.b),
    },
])
const LoadingBase = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LoadingBase', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(71322), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(19083), __webpack_require__.b),
    },
])
const LocalBackup = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LocalBackup', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98960), __webpack_require__.b),
    },
])
const Lock = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Lock',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(76080), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 25',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M7.748 5.01c-.697.866-.948 2.132-.948 3.74v2a.8.8 0 0 1-1.6 0v-2c0-1.704.25-3.438 1.302-4.744C7.585 2.662 9.363 1.95 12 1.95s4.416.713 5.498 2.057C18.55 5.312 18.8 7.046 18.8 8.75v2a.8.8 0 0 1-1.6 0v-2c0-1.607-.25-2.873-.948-3.74-.667-.828-1.889-1.46-4.252-1.46s-3.584.632-4.252 1.46zM12 15.05a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zm-3.3 1.7a3.3 3.3 0 1 1 6.6 0 3.3 3.3 0 0 1-6.6 0z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M3.566 12.315c-.496.495-.766 1.428-.766 3.434v2c0 2.006.27 2.939.766 3.434.495.496 1.428.766 3.434.766h10c2.006 0 2.939-.27 3.434-.766.496-.495.766-1.428.766-3.434v-2c0-2.006-.27-2.939-.765-3.434-.496-.496-1.43-.766-3.435-.766H7c-2.006 0-2.939.27-3.434.766zm-1.131-1.131C3.439 10.178 5.005 9.949 7 9.949h10c1.994 0 3.561.23 4.566 1.235 1.004 1.004 1.234 2.57 1.234 4.565v2c0 1.995-.23 3.562-1.234 4.566-1.005 1.004-2.572 1.234-4.566 1.234H7c-1.994 0-3.561-.23-4.565-1.234C1.43 21.31 1.2 19.743 1.2 17.749v-2c0-1.994.23-3.561 1.235-4.566z',
                            }),
                        ],
                    }),
                }),
            s: true,
        },
    ],
    [24, 25],
)
const MaskAvatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskAvatar', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(85091), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(84989), __webpack_require__.b),
    },
])
const MaskInMinds = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskInMinds', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71963), __webpack_require__.b),
    },
])
const MaskMe = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskMe', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98365), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M17.794 7.397a5.274 5.274 0 0 1-5.294 5.292 5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12.5 2.105a5.273 5.273 0 0 1 5.294 5.292ZM12.5 22.105c-4.338 0-8-.705-8-3.425 0-2.72 3.685-3.4 8-3.4 4.339 0 8 .704 8 3.424 0 2.721-3.685 3.401-8 3.401Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Masks = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Masks', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(38035), __webpack_require__.b),
    },
])
const Message = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Message', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5777), __webpack_require__.b),
    },
])
const Mnemonic = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Mnemonic',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(4821), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 25',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M2.865 5.878a2.8 2.8 0 0 1 2.8-2.8h13.69a.8.8 0 0 1 0 1.6H5.665a1.2 1.2 0 0 0-1.2 1.2v.803h13.87a2.8 2.8 0 0 1 2.8 2.8v10.138a2.8 2.8 0 0 1-2.8 2.8H5.665a2.8 2.8 0 0 1-2.8-2.8V5.88Zm1.6 2.403v11.338a1.2 1.2 0 0 0 1.2 1.2h12.67a1.2 1.2 0 0 0 1.2-1.2V9.481a1.2 1.2 0 0 0-1.2-1.2H4.465Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M12.285 9.23a.8.8 0 0 1 .463 1.032l-3.484 9.155a.8.8 0 1 1-1.496-.569l3.484-9.155a.8.8 0 0 1 1.033-.463Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M15.769 19.881a.8.8 0 0 0 .463-1.032l-3.484-9.155a.8.8 0 0 0-1.495.569l3.484 9.155a.8.8 0 0 0 1.032.463Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M9.458 15.546a.8.8 0 0 1 .8-.8H13.9a.8.8 0 0 1 0 1.6h-3.642a.8.8 0 0 1-.8-.8Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [24, 25],
)
const More = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('More', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(12051), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z',
                }),
            }),
        s: true,
    },
])
const NextIdAvatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NextIdAvatar', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(50183), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(20277), __webpack_require__.b),
    },
])
const NextIdPersonaWarning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NextIdPersonaWarning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(85782), __webpack_require__.b),
    },
])
const NFTRedPacket = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NFTRedPacket', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69846), __webpack_require__.b),
    },
])
const OutlinedMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('OutlinedMask', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(61130), __webpack_require__.b),
    },
])
const PersonasOutline = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'PersonasOutline',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(89743), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 20 21',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('g', {
                        id: 'PersonasOutline_svg__base/me',
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PersonasOutline_svg__Profile',
                            fillRule: 'evenodd',
                            stroke: 'currentColor',
                            strokeOpacity: '.78',
                            strokeWidth: '1.6',
                            d: 'M14.412 6.577A4.395 4.395 0 0 1 10 10.987a4.396 4.396 0 0 1-4.412-4.41A4.395 4.395 0 0 1 10 2.167a4.394 4.394 0 0 1 4.412 4.41ZM10 18.834c-3.615 0-6.667-.587-6.667-2.854 0-2.268 3.071-2.834 6.667-2.834 3.616 0 6.667.587 6.667 2.854 0 2.267-3.072 2.834-6.667 2.834Z',
                            clipRule: 'evenodd',
                        }),
                    }),
                }),
            s: true,
        },
    ],
    [20, 21],
)
const Pin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Pin', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(84023), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(60009), __webpack_require__.b),
    },
])
const Play = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Play', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(11268), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(93173), __webpack_require__.b),
    },
])
const Plugin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Plugin', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50580), __webpack_require__.b),
    },
])
const Plugins = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Plugins', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32658), __webpack_require__.b),
    },
])
const PopupClose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupClose', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30762), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'm6 6 12 12M6 18 18 6',
                }),
            }),
        s: true,
    },
])
const PopupLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41617), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 12 12',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M1.6 2.1a.5.5 0 0 1 .5-.5h3.529v.8H2.4v7.2h7.2V6.235h.8V9.9a.5.5 0 0 1-.5.5H2.1a.5.5 0 0 1-.5-.5V2.1ZM6.832 2c0-.22.18-.4.4-.4H10c.22 0 .4.18.4.4v2.747a.4.4 0 0 1-.8 0v-1.77l-4.935 5.02a.4.4 0 0 1-.57-.56L9.045 2.4H7.233a.4.4 0 0 1-.4-.4Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const PopupRestore = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupRestore', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(28331), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'm13.777 8.974-3.636 1.02a.323.323 0 0 0-.213.458.38.38 0 0 0 .023.042l1.942 3.17a.46.46 0 0 0 .554.18.33.33 0 0 0 .177-.173l.501-.743c.863.446 1.46.842 1.802 1.673l.527 1.28a.457.457 0 0 0 .516.27.33.33 0 0 0 .27-.29l.115-1c.208-1.655-.805-3.351-2.512-4.207l.474-1.174c.074-.182-.037-.4-.249-.485a.452.452 0 0 0-.29-.021Zm-2.892 1.6 2.37-.667-.303.752c-.074.183.037.4.248.485 1.376.556 2.287 1.74 2.372 3.016-.514-1.052-1.464-1.911-2.629-2.38-.21-.085-.442-.006-.516.177l-.277.686-1.265-2.07Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M5.998 3.895c-.907.417-1.19.873-1.19 1.165 0 .292.283.747 1.19 1.165.856.394 2.08.654 3.465.654 1.384 0 2.609-.26 3.464-.654.908-.418 1.19-.873 1.19-1.165 0-.292-.283-.748-1.19-1.165-.855-.394-2.08-.654-3.464-.654-1.385 0-2.61.26-3.465.654Zm-.502-1.09c1.046-.482 2.45-.764 3.967-.764s2.92.282 3.966.764c.995.457 1.888 1.211 1.888 2.255 0 1.044-.893 1.797-1.888 2.255-1.046.482-2.449.764-3.966.764-1.518 0-2.92-.282-3.967-.764-.994-.458-1.888-1.211-1.888-2.255 0-1.044.894-1.798 1.888-2.255Zm.279 6.487c.708.375 1.738.655 2.942.738l-.082 1.197c-1.325-.091-2.529-.401-3.422-.875-.859-.455-1.605-1.165-1.605-2.115h1.2c0 .262.224.661.967 1.055Zm0 2.948c.708.374 1.738.654 2.942.737l-.082 1.197c-1.325-.091-2.529-.401-3.422-.875-.859-.455-1.605-1.165-1.605-2.115h1.2c0 .263.224.661.967 1.055Zm-.097 2.7c.755.4 2.1.713 4.374.713v1.2c-2.347 0-3.924-.318-4.935-.852-1.053-.557-1.509-1.365-1.509-2.223h1.2c0 .355.156.784.87 1.162Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M14.717 4.358a.6.6 0 0 1 .6.6v2.548a.6.6 0 1 1-1.2 0V4.958a.6.6 0 0 1 .6-.6Zm-10.509 0a.6.6 0 0 1 .6.6v8.82a.6.6 0 0 1-1.2 0v-8.82a.6.6 0 0 1 .6-.6Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const PopupTrash = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupTrash', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90094), __webpack_require__.b),
    },
])
const PrimaryInfo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PrimaryInfo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63919), __webpack_require__.b),
    },
])
const Provider = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Provider', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88703), __webpack_require__.b),
    },
])
const PublicKey = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PublicKey', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(30670), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(67925), __webpack_require__.b),
    },
])
const PublicKey2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PublicKey2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79854), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'PublicKey2_svg__base/key',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PublicKey2_svg__Ellipse 85 (Stroke)',
                            d: 'M11.856 4.691a3.244 3.244 0 1 0 3.996 5.111 3.244 3.244 0 0 0-3.996-5.11Zm-1.608 5.375a4.577 4.577 0 1 1 7.212-5.638 4.577 4.577 0 0 1-7.212 5.638Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PublicKey2_svg__Ellipse 86 (Stroke)',
                            d: 'M13.433 6.71a.684.684 0 1 0 .842 1.076.684.684 0 0 0-.842-1.077Zm-1.168 1.78a2.017 2.017 0 1 1 3.178-2.484 2.017 2.017 0 0 1-3.178 2.484Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PublicKey2_svg__Vector 11 (Stroke)',
                            d: 'M1.924 16.573a.667.667 0 0 1 .114-.935l3.776-2.953 4.494-3.494a.667.667 0 0 1 .819 1.053L7.16 13.328l.95 1.215a.667.667 0 0 1-1.05.821l-.952-1.216-1.043.815 1.556 1.99a.667.667 0 1 1-1.05.82l-1.556-1.99-1.157.905a.667.667 0 0 1-.935-.115Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Questions = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Questions', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98970), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 4.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4ZM3.2 12a8.8 8.8 0 1 1 17.6 0 8.8 8.8 0 0 1-17.6 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M11.9 16.787a.69.69 0 1 1-.057-1.38.69.69 0 0 1 .056 1.38Zm2.956-6.713c-.04.738-.267 1.317-1.397 2.448-.571.573-.932 1.004-.97 1.38a.574.574 0 0 1-1.14-.112c.076-.795.66-1.437 1.3-2.08 1.027-1.024 1.046-1.35 1.063-1.697a1.475 1.475 0 0 0-.421-1.1 1.79 1.79 0 0 0-1.293-.55h-.003a1.714 1.714 0 0 0-1.707 1.711.574.574 0 0 1-1.147 0c0-.762.295-1.478.833-2.019a2.838 2.838 0 0 1 2.018-.838 2.947 2.947 0 0 1 2.13.906c.513.537.772 1.23.734 1.951Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M14.052 8.19a2.85 2.85 0 0 0-2.06-.876 2.74 2.74 0 0 0-1.948.81 2.744 2.744 0 0 0-.806 1.95.476.476 0 1 0 .952 0 1.811 1.811 0 0 1 1.804-1.809h.004a1.887 1.887 0 0 1 1.363.58 1.572 1.572 0 0 1 .449 1.172c-.01.18-.02.365-.165.636-.142.266-.411.612-.927 1.127-.644.646-1.2 1.264-1.272 2.02a.475.475 0 1 0 .947.092c.02-.213.132-.432.302-.664a7.27 7.27 0 0 1 .694-.775c.563-.563.895-.982 1.09-1.348a2.31 2.31 0 0 0 .28-1.036 2.507 2.507 0 0 0-.707-1.879Zm-2.06-1.07a3.044 3.044 0 0 1 2.2.935 2.7 2.7 0 0 1 .761 2.025c-.02.38-.09.723-.301 1.117-.21.39-.556.826-1.124 1.394a7.08 7.08 0 0 0-.675.753c-.163.22-.25.405-.266.568a.67.67 0 0 1-1.31.13m-.026-.261c.081-.835.692-1.5 1.329-2.14.512-.51.765-.84.893-1.08.125-.233.133-.385.142-.553a1.376 1.376 0 0 0-.394-1.027V8.98a1.692 1.692 0 0 0-1.223-.52h-.003a1.616 1.616 0 0 0-1.61 1.614.67.67 0 1 1-1.342 0c0-.788.306-1.529.862-2.088a2.936 2.936 0 0 1 2.087-.867v.098-.098m-.74 6.662.096.01-.097-.01m.644 1.723a.594.594 0 0 0-.234 1.147.592.592 0 1 0 .234-1.147Zm-.303-.145a.787.787 0 1 1 .558 1.473.787.787 0 0 1-.558-1.473Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const RadioButtonChecked = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RadioButtonChecked', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82614), __webpack_require__.b),
    },
])
const RadioButtonUnChecked = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RadioButtonUnChecked', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5285), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 21 21',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('circle', {
                    cx: '10.166',
                    cy: '10.131',
                    r: '9',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                }),
            }),
        s: true,
    },
])
const RadioNo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RadioNo', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(25691), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 21 21',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('circle', {
                    cx: '10.166',
                    cy: '10.437',
                    r: '9',
                    stroke: '#6F6F6F',
                    strokeWidth: '2',
                }),
            }),
        s: true,
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(72636), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 21 21',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('circle', {
                    cx: '10.166',
                    cy: '10.911',
                    r: '9',
                    stroke: '#E6E7E8',
                    strokeWidth: '2',
                }),
            }),
        s: true,
    },
])
const ReceiveColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ReceiveColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72261), __webpack_require__.b),
    },
])
const RedPacket = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RedPacket', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82268), __webpack_require__.b),
    },
])
const Refresh = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Refresh', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90963), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M12 4.934a7.198 7.198 0 0 0-6.283 3.68.8.8 0 1 1-1.395-.783A8.8 8.8 0 1 1 3.2 12.134a.8.8 0 0 1 1.6 0 7.2 7.2 0 1 0 7.2-7.2Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.797 3.47a.8.8 0 0 1 .8.8v3.2h3.2a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.8-.8v-4a.8.8 0 0 1 .8-.8Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Restore = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Restore', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87590), __webpack_require__.b),
    },
])
const RestoreColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RestoreColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(10849), __webpack_require__.b),
    },
])
const Retweet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Retweet', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(12414), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(2329), __webpack_require__.b),
    },
])
const Right = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Right', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(11238), __webpack_require__.b),
    },
])
const RightArrow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RightArrow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(16066), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M8.935 20.063a.8.8 0 0 1 0-1.132l6.434-6.434-6.434-6.434a.8.8 0 1 1 1.13-1.132l7 7a.8.8 0 0 1 0 1.132l-7 7a.8.8 0 0 1-1.13 0Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Risk = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Risk', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(76435), __webpack_require__.b),
    },
])
const Search = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Search', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75653), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M4.271 9.41a4.93 4.93 0 1 1 8.478 3.424.617.617 0 0 0-.122.123A4.93 4.93 0 0 1 4.272 9.41zm8.837 4.79a6.18 6.18 0 1 1 .884-.884l2.596 2.596a.625.625 0 1 1-.884.884L13.108 14.2z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const SecurityRisk = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SecurityRisk', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97420), __webpack_require__.b),
    },
])
const SecurityWarning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SecurityWarning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64831), __webpack_require__.b),
    },
])
const Selected = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Selected', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(33056), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#101010',
                            d: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            d: 'M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#fff',
                            fillRule: 'evenodd',
                            d: 'M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(20061), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#F5F5F5',
                            d: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            d: 'M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#fff',
                            fillRule: 'evenodd',
                            d: 'M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Self = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Self', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78826), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M17.794 7.397a5.274 5.274 0 0 1-5.294 5.292 5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12.5 2.105a5.273 5.273 0 0 1 5.294 5.292ZM12.5 22.105c-4.338 0-8-.705-8-3.425 0-2.72 3.685-3.4 8-3.4 4.339 0 8 .704 8 3.424 0 2.721-3.685 3.401-8 3.401Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Send = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Send', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(11892), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M16.345 3.382 2.425 7.926l3.397 2.032a.75.75 0 0 1 .365.643v2.277l2.3-.933a.75.75 0 0 1 .648.041l5.208 2.92 2.002-11.524Zm.339-1.372a.75.75 0 0 1 .971.84l-2.239 12.89a.75.75 0 0 1-1.106.525L8.737 13.14l-2.718 1.1a.75.75 0 0 1-1.032-.695v-2.69L.96 8.45a.75.75 0 0 1 .152-1.357l15.57-5.082ZM14.18 5.656a.6.6 0 0 1-.06.846l-4.234 3.679a.6.6 0 0 1-.787-.906l4.234-3.679a.6.6 0 0 1 .847.06Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const SendColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SendColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(81107), __webpack_require__.b),
    },
])
const Setting = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Setting', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20987), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    stroke: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M14.55 11.25a1.238 1.238 0 0 0 .247 1.365l.045.045a1.5 1.5 0 0 1-1.06 2.562 1.5 1.5 0 0 1-1.062-.44l-.045-.044a1.238 1.238 0 0 0-1.365-.248 1.238 1.238 0 0 0-.75 1.133v.127a1.5 1.5 0 1 1-3 0v-.068a1.238 1.238 0 0 0-.81-1.132 1.238 1.238 0 0 0-1.365.247l-.045.045a1.5 1.5 0 1 1-2.123-2.122l.046-.045a1.238 1.238 0 0 0 .247-1.365 1.238 1.238 0 0 0-1.132-.75H2.25a1.5 1.5 0 1 1 0-3h.067a1.237 1.237 0 0 0 1.133-.81 1.237 1.237 0 0 0-.248-1.365l-.044-.045A1.5 1.5 0 1 1 5.28 3.217l.045.046a1.237 1.237 0 0 0 1.365.247h.06a1.237 1.237 0 0 0 .75-1.132V2.25a1.5 1.5 0 0 1 3 0v.067a1.238 1.238 0 0 0 .75 1.133 1.237 1.237 0 0 0 1.365-.248l.045-.044a1.5 1.5 0 1 1 2.123 2.122l-.045.045a1.237 1.237 0 0 0-.248 1.365v.06a1.237 1.237 0 0 0 1.133.75h.127a1.5 1.5 0 0 1 0 3h-.068a1.238 1.238 0 0 0-1.132.75z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Settings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Settings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50267), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm12 23-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 1 1 2.828-1.172A4.027 4.027 0 0 1 12 16zm0-6a2 2 0 1 0-.001 4A2 2 0 0 0 12 10z',
                }),
            }),
        s: true,
    },
])
const Settings2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Settings2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90704), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'm17.808 3.606 4.345 7.528c.31.537.31 1.205 0 1.744l-4.345 7.526c-.312.537-.89.872-1.512.872h-8.69c-.624 0-1.2-.333-1.512-.872l-4.346-7.526a1.743 1.743 0 0 1 0-1.744l4.299-7.441c.34-.59.977-.959 1.66-.959h8.59c.62 0 1.2.333 1.51.872Zm-9.415 8.4a3.562 3.562 0 0 1 3.557-3.559 3.564 3.564 0 0 1 3.558 3.56 3.56 3.56 0 0 1-3.558 3.556 3.562 3.562 0 0 1-3.557-3.558Zm1.64.001a1.92 1.92 0 0 0 1.917 1.918 1.92 1.92 0 0 0 1.918-1.918 1.92 1.92 0 0 0-1.918-1.917 1.92 1.92 0 0 0-1.917 1.917Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const SharpMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SharpMask', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20055), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M3.2 1.5H16.8C17.0232 1.5 17.2443 1.54397 17.4506 1.6294C17.6568 1.71484 17.8442 1.84006 18.0021 1.99792C18.1599 2.15578 18.2852 2.34318 18.3706 2.54944C18.456 2.75569 18.5 2.97675 18.5 3.2V16.8C18.5 17.2509 18.3209 17.6833 18.0021 18.0021C17.6833 18.3209 17.2509 18.5 16.8 18.5H3.2C2.74913 18.5 2.31673 18.3209 1.99792 18.0021C1.67911 17.6833 1.5 17.2509 1.5 16.8V3.2C1.5 2.74913 1.67911 2.31673 1.99792 1.99792C2.31673 1.67911 2.74913 1.5 3.2 1.5ZM17.1999 11.1998V7.20037H2.80005V15.7599C2.79999 15.949 2.8372 16.1363 2.90954 16.3111C2.98189 16.4859 3.08795 16.6447 3.22168 16.7784C3.35541 16.9122 3.51419 17.0183 3.68893 17.0907C3.86368 17.1631 4.05098 17.2004 4.24013 17.2004H15.7599C15.949 17.2004 16.1363 17.1631 16.3111 17.0907C16.4858 17.0183 16.6446 16.9122 16.7783 16.7784C16.912 16.6447 17.0181 16.4859 17.0905 16.3111C17.1628 16.1363 17.2 15.949 17.1999 15.7599V12.4001H14.8741C14.4255 13.3125 13.7303 14.0809 12.8672 14.6182C12.0041 15.1555 11.0077 15.4402 9.99105 15.44C7.39855 15.44 5.23016 13.6273 4.68347 11.2003L17.1999 11.1998ZM9.99105 14.2491C10.6812 14.2496 11.3611 14.0813 11.9714 13.7591C12.5818 13.4368 13.1041 12.9703 13.4931 12.4001H6.48816C6.87711 12.9704 7.39953 13.4369 8.00997 13.7592C8.6204 14.0814 9.30078 14.2496 9.99105 14.2491ZM4.70271 10.0796C4.77976 9.5465 5.04632 9.05898 5.45355 8.70637C5.86078 8.35377 6.38142 8.15969 6.92009 8.15969C7.45876 8.15969 7.9794 8.35377 8.38663 8.70637C8.79386 9.05898 9.06042 9.5465 9.13747 10.0796H7.90989C7.84206 9.87052 7.70975 9.68827 7.53193 9.55902C7.35411 9.42976 7.13993 9.36014 6.92009 9.36014C6.70026 9.36014 6.48607 9.42976 6.30825 9.55902C6.13044 9.68827 5.99812 9.87052 5.93029 10.0796H4.70271ZM10.863 10.0796C10.9404 9.54682 11.207 9.05969 11.6142 8.70741C12.0213 8.35512 12.5417 8.16123 13.0801 8.16123C13.6185 8.16123 14.1389 8.35512 14.5461 8.70741C14.9532 9.05969 15.2199 9.54682 15.2973 10.0796H14.0697C14.0019 9.87052 13.8696 9.68827 13.6917 9.55902C13.5139 9.42976 13.2997 9.36014 13.0799 9.36014C12.8601 9.36014 12.6459 9.42976 12.4681 9.55902C12.2903 9.68827 12.1579 9.87052 12.0901 10.0796H10.863ZM17.1995 4.24058C17.1996 4.05143 17.1624 3.86412 17.09 3.68935C17.0177 3.51458 16.9116 3.35577 16.7779 3.222C16.6441 3.08823 16.4854 2.98211 16.3106 2.90971C16.1359 2.83732 15.9486 2.80005 15.7594 2.80005H4.24013C4.05094 2.79999 3.8636 2.83721 3.6888 2.90959C3.514 2.98196 3.35517 3.08807 3.22139 3.22184C3.08762 3.35562 2.98151 3.51444 2.90914 3.68924C2.83677 3.86404 2.79955 4.05139 2.79961 4.24058V6.00053H17.1999L17.1995 4.24058Z',
                }),
            }),
        s: true,
    },
])
const SignUpAccount = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SignUpAccount', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(47196), __webpack_require__.b),
    },
])
const SmartPay = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SmartPay', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64454), __webpack_require__.b),
    },
])
const Star = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Star', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(7798), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M11.742 17.426a.5.5 0 0 1 .516 0l4.908 2.962a.5.5 0 0 0 .745-.542l-1.302-5.582a.5.5 0 0 1 .16-.492l4.337-3.758a.5.5 0 0 0-.284-.876l-5.712-.492a.5.5 0 0 1-.418-.303L12.46 3.084a.5.5 0 0 0-.92 0l-2.232 5.26a.5.5 0 0 1-.418.302l-5.713.493a.5.5 0 0 0-.285.875l4.33 3.759a.5.5 0 0 1 .16.49l-1.295 5.585a.5.5 0 0 0 .746.54l4.909-2.962z',
                }),
            }),
        s: true,
    },
])
const Success = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Success', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(36303), __webpack_require__.b),
    },
])
const SuccessForSnackBar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SuccessForSnackBar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8670), __webpack_require__.b),
    },
])
const Sun = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Sun', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84207), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M8 12.992c.254 0 .466.183.51.425l.008.093v.972a.518.518 0 0 1-1.027.093l-.009-.093v-.972c0-.286.232-.518.518-.518Zm4.181-1.528.081.066.688.688a.518.518 0 0 1-.651.798l-.081-.066-.688-.688a.518.518 0 0 1 .651-.798Zm-7.711.066c.177.177.199.45.066.651l-.066.081-.688.688a.518.518 0 0 1-.798-.651l.066-.081.688-.688a.518.518 0 0 1 .732 0ZM8 4.296a3.704 3.704 0 1 1 0 7.408 3.704 3.704 0 0 1 0-7.408Zm6.482 3.186a.518.518 0 0 1 .093 1.027l-.093.009h-.972a.518.518 0 0 1-.093-1.027l.093-.009h.972Zm-11.992 0a.518.518 0 0 1 .093 1.027l-.093.009h-.972a.518.518 0 0 1-.093-1.027l.093-.009h.972ZM12.95 3.05c.177.177.199.45.066.651l-.066.081-.688.688a.518.518 0 0 1-.798-.651l.066-.081.688-.688a.518.518 0 0 1 .732 0ZM3.7 2.984l.081.066.688.688a.518.518 0 0 1-.651.798l-.081-.066-.688-.688a.518.518 0 0 1 .651-.798ZM8 1c.254 0 .466.183.51.425l.008.093v.972a.518.518 0 0 1-1.027.093l-.009-.093v-.972C7.482 1.232 7.714 1 8 1Z',
                }),
            }),
        s: true,
    },
])
const Swap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Swap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58946), __webpack_require__.b),
    },
])
const SwapColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SwapColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31827), __webpack_require__.b),
    },
])
const SwitchLogo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SwitchLogo', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(82869), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(21210), __webpack_require__.b),
    },
])
const TelegramRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TelegramRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69557), __webpack_require__.b),
    },
])
const Tick = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Tick', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(14368), __webpack_require__.b),
    },
])
const Time = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Time', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(15593), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'Time_svg__base/time',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'Time_svg__Vector (Stroke)',
                            d: 'M10 3.166a6.833 6.833 0 1 0 0 13.667 6.833 6.833 0 0 0 0-13.667ZM1.834 9.999a8.167 8.167 0 1 1 16.333 0 8.167 8.167 0 0 1-16.334 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'Time_svg__Vector (Stroke)_2',
                            d: 'M10 5.233c.368 0 .667.298.667.666v4.125a.667.667 0 1 1-1.333 0V5.9c0-.368.298-.666.666-.666Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'Time_svg__Vector (Stroke)_3',
                            d: 'M9.423 9.69a.667.667 0 0 1 .91-.244l3.021 1.745a.667.667 0 0 1-.666 1.154l-3.021-1.744a.667.667 0 0 1-.244-.91Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Tips = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Tips', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(19986), __webpack_require__.b),
    },
])
const TransactionFailed = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TransactionFailed', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(96712), __webpack_require__.b),
    },
])
const Trash = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Trash',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(41733), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 25 24',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M2.5 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M10.5 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1h-4Zm7 2V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1h-2a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1h-2Zm-11 2v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7h-12Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M10.5 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [25, 24],
)
const TrashLine = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TrashLine', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75828), __webpack_require__.b),
    },
])
const Tutorial = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Tutorial', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8226), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M18.227 10.117v-2.44c.27-.285.284-.57.27-.732-.067-.637-.772-.895-1.002-.99-1.681-.636-4.799-1.897-6.52-2.602-1.044-.515-1.382-.42-2.399-.013-.271.108-4.758 1.775-6.492 2.494-.95.393-1.085.976-1.085 1.3 0 .543.38 1.03 1.071 1.316l2.074.84v5.449l.176.176c.081.081 1.938 1.952 5.34 1.952 3.186 0 5.002-1.884 5.083-1.966l.163-.176v-5.38l.772-.326-.027 1.111-.623 1.044 1.884 1.79 2.087-1.817-.772-1.03Zm-4.541 4.12A6.337 6.337 0 0 1 9.66 15.66c-2.358 0-3.808-1.03-4.296-1.423V9.791l3.063 1.247h.013c.976.366 1.722.34 2.657-.067l2.589-1.098v4.364Zm3.267-2.928-.38-.352.285-.474.054-2.169a.615.615 0 0 0-.176-.678.632.632 0 0 0-.773-.054L10.61 9.846c-.637.284-1.057.298-1.735.054l-6.33-2.575c-.162-.068-.257-.136-.298-.19.04-.04.136-.109.312-.19 1.735-.718 6.411-2.467 6.465-2.48h.014c.813-.326.813-.326 1.423-.014l.04.014c1.709.69 4.799 1.951 6.507 2.602v3.456l.339.448-.393.338Z',
                }),
            }),
        s: true,
    },
])
const Twitter = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Twitter', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40423), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M13.33 4.459a2.867 2.867 0 0 0 1.258-1.583 5.728 5.728 0 0 1-1.816.694 2.867 2.867 0 0 0-4.878 2.61 8.123 8.123 0 0 1-5.896-2.99 2.867 2.867 0 0 0 .886 3.82 2.85 2.85 0 0 1-1.296-.358v.036c0 1.362.96 2.535 2.296 2.805a2.867 2.867 0 0 1-1.292.05 2.867 2.867 0 0 0 2.672 1.986 5.74 5.74 0 0 1-3.553 1.225c-.228 0-.457-.013-.683-.04A8.099 8.099 0 0 0 5.414 14a8.085 8.085 0 0 0 8.13-8.51 5.812 5.812 0 0 0 1.429-1.482 5.72 5.72 0 0 1-1.643.45Z',
                }),
            }),
        s: true,
    },
])
const TwitterStroke = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'TwitterStroke',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(89279), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 21 20',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('g', {
                            clipPath: "url('#TwitterStroke_svg__twitter-stroke')",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                d: 'M12.664 2.113a4.4 4.4 0 0 1 4.575.898 8.416 8.416 0 0 0 2.043-1.057.667.667 0 0 1 1.033.703 7.101 7.101 0 0 1-1.674 3.127c.017.154.025.308.026.463v.002c0 5.025-2.416 8.696-5.875 10.537-3.441 1.832-7.848 1.815-11.782-.37a.667.667 0 0 1 .35-1.25 9.034 9.034 0 0 0 4.42-.957c-1.371-.793-2.336-1.75-2.992-2.785-.817-1.291-1.127-2.66-1.183-3.894-.056-1.232.14-2.342.346-3.14a10.736 10.736 0 0 1 .396-1.223l.03-.074.01-.02.002-.007.015-.032.596.299.546-.384a8.217 8.217 0 0 0 6.287 3.483V6.28a4.4 4.4 0 0 1 2.831-4.166ZM3.248 4.7l-.006.023a9.42 9.42 0 0 0-.305 2.746c.048 1.058.311 2.188.978 3.241.664 1.049 1.754 2.06 3.523 2.847a.667.667 0 0 1 .103 1.16 10.365 10.365 0 0 1-3.547 1.537c2.875.896 5.804.615 8.172-.645 3-1.597 5.167-4.8 5.168-9.358a3.178 3.178 0 0 0-.055-.568.666.666 0 0 1 .186-.6c.326-.321.61-.678.85-1.063a9.753 9.753 0 0 1-1.073.393.667.667 0 0 1-.695-.201 3.066 3.066 0 0 0-5.38 2.053v.843a.667.667 0 0 1-.65.666A9.55 9.55 0 0 1 3.248 4.7Z',
                                clipRule: 'evenodd',
                            }),
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('clipPath', {
                                id: 'TwitterStroke_svg__twitter-stroke',
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                    fill: 'currentColor',
                                    d: 'M.5 0h20v20H.5z',
                                }),
                            }),
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [21, 20],
)
const TxIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TxIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52127), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M14 10v2.667A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V10m2.667-3.333L8 10l3.333-3.333M8 10V2',
                }),
            }),
        s: true,
    },
])
const TxOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TxOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27778), __webpack_require__.b),
    },
])
const Undo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Undo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(53760), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        stroke: 'currentColor',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: '10',
                        strokeWidth: '1.6',
                        d: 'M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        stroke: 'currentColor',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '1.6',
                        d: 'M6.43 10.81 3.87 8.25l2.56-2.56',
                    }),
                ],
            }),
        s: true,
    },
])
const Upload = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Upload', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41440), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12.306 1.26A.8.8 0 0 1 12.8 2v6a.8.8 0 0 1-1.6 0V3.93l-.634.635a.8.8 0 0 1-1.131-1.131l2-2a.8.8 0 0 1 .871-.174Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M11.434 1.434a.8.8 0 0 1 1.132 0l2 2a.8.8 0 0 1-1.132 1.13l-2-2a.8.8 0 0 1 0-1.13ZM2.842 12.716c.731-1.058 2.083-1.517 4.158-1.517.552 0 .982.057 1.37.209.364.141.642.35.88.529l.03.022a.8.8 0 0 1 .104.094l1.01 1.078a2.198 2.198 0 0 0 3.202.001l.003-.002 1.02-1.08a.803.803 0 0 1 .101-.09l.03-.023c.239-.18.516-.388.88-.53.388-.15.818-.208 1.37-.208 2.076 0 3.427.459 4.158 1.517.35.505.502 1.075.573 1.622.07.53.07 1.101.07 1.633v1.028c0 1.451-.259 2.928-1.185 4.046-.951 1.148-2.468 1.754-4.616 1.754H8c-2.576 0-4.177-.57-5.033-1.81-.412-.596-.595-1.274-.682-1.94-.085-.65-.085-1.352-.085-2.02V15.97c0-.532 0-1.102.07-1.633.07-.547.223-1.117.572-1.622Zm1.014 1.83c-.055.417-.056.888-.056 1.453v1c0 .703.001 1.306.072 1.842.069.53.198.93.411 1.239.395.57 1.293 1.12 3.717 1.12h8c1.852 0 2.836-.514 3.384-1.176.574-.693.816-1.716.816-3.025v-1c0-.565-.001-1.036-.056-1.454-.053-.41-.151-.702-.302-.92-.269-.39-.917-.826-2.842-.826-.448 0-.658.048-.79.1-.131.05-.24.124-.475.3l-.97 1.027-.002.001a3.799 3.799 0 0 1-5.534.002l-.003-.003-.962-1.029c-.235-.175-.343-.247-.474-.299-.132-.05-.342-.099-.79-.099-1.924 0-2.573.437-2.842.826-.15.218-.249.51-.302.92Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M8.797 5.961a.8.8 0 0 1-.72.874c-1.355.13-1.796.54-1.996.915-.261.49-.28 1.179-.28 2.248v2a.8.8 0 1 1-1.6 0V9.894c-.001-.92-.002-2.015.469-2.897.55-1.03 1.609-1.596 3.253-1.755a.8.8 0 0 1 .874.72Zm6.407 0a.8.8 0 0 1 .873-.719c1.645.159 2.704.725 3.254 1.755.47.882.47 1.977.47 2.897v2.104a.8.8 0 1 1-1.6 0v-2c0-1.07-.02-1.759-.282-2.248-.2-.375-.64-.784-1.996-.915a.8.8 0 0 1-.719-.874Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const USD = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('USD', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80987), __webpack_require__.b),
    },
])
const User = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('User', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27980), __webpack_require__.b),
    },
])
const Verification = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Verification', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60398), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        d: 'M10.705 1.603A1.699 1.699 0 0 1 12 1a1.691 1.691 0 0 1 1.295.603l.816.968a1.695 1.695 0 0 0 1.698.555l1.229-.302a1.7 1.7 0 0 1 2.095 1.53l.094 1.265a1.705 1.705 0 0 0 1.05 1.45l1.168.48c.97.4 1.353 1.58.8 2.476l-.665 1.079a1.71 1.71 0 0 0 0 1.793l.666 1.08c.552.895.17 2.074-.8 2.472l-1.17.483a1.703 1.703 0 0 0-1.05 1.45l-.093 1.265a1.712 1.712 0 0 1-.695 1.252 1.695 1.695 0 0 1-1.4.277l-1.229-.302a1.69 1.69 0 0 0-1.697.555l-.817.968A1.699 1.699 0 0 1 12 23a1.691 1.691 0 0 1-1.295-.603l-.816-.968a1.698 1.698 0 0 0-1.698-.555l-1.229.302a1.7 1.7 0 0 1-2.095-1.53l-.094-1.265a1.71 1.71 0 0 0-1.05-1.45l-1.168-.482a1.706 1.706 0 0 1-.8-2.472l.665-1.08a1.71 1.71 0 0 0 0-1.793l-.665-1.08a1.71 1.71 0 0 1 .8-2.473l1.17-.481a1.707 1.707 0 0 0 1.05-1.451l.092-1.266a1.71 1.71 0 0 1 .695-1.252 1.694 1.694 0 0 1 1.4-.277l1.229.302a1.694 1.694 0 0 0 1.698-.555l.816-.968Z',
                        style: {
                            '--default-color': '#1C68F3',
                            fill: 'var(--icon-color, var(--default-color, currentColor))',
                        },
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#fff',
                        fillRule: 'evenodd',
                        d: 'M17.698 8.776a.75.75 0 0 1 0 1.06l-6.867 6.866a.75.75 0 0 1-1.06 0l-3.21-3.209a.75.75 0 1 1 1.061-1.06l2.679 2.678 6.336-6.335a.75.75 0 0 1 1.06 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Wallet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Wallet', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37270), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6.2 11.15a.8.8 0 0 1 .8-.8h6a.8.8 0 0 1 0 1.6H7a.8.8 0 0 1-.8-.8Zm-.51-7.51A2.887 2.887 0 0 0 2.8 6.53v4.62a.8.8 0 0 1-1.6 0V6.53a4.487 4.487 0 0 1 4.49-4.49h5.62c1.182 0 2.298.367 3.131 1.082.845.724 1.36 1.774 1.36 3.027a.8.8 0 0 1-1.6 0c0-.787-.311-1.392-.802-1.813-.501-.43-1.23-.697-2.089-.697H5.69Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6 6.95a3.199 3.199 0 0 0-3.2 3.2v7a3.2 3.2 0 0 0 3.2 3.2h10a3.2 3.2 0 0 0 3.2-3.2v-.65h-.13c-1.254 0-2.542-.772-2.902-2.113l-.002-.004a2.813 2.813 0 0 1 .75-2.751 2.793 2.793 0 0 1 2.004-.832h.28v-.65c0-1.759-1.442-3.2-3.2-3.2H6Zm-4.8 3.2c0-2.652 2.148-4.8 4.8-4.8h10c2.642 0 4.8 2.158 4.8 4.8v1.45a.8.8 0 0 1-.8.8h-1.08a1.193 1.193 0 0 0-.886.377 1.214 1.214 0 0 0-.32 1.197c.14.518.691.926 1.356.926H20a.8.8 0 0 1 .8.8v1.45a4.8 4.8 0 0 1-4.8 4.8H6a4.799 4.799 0 0 1-4.8-4.8v-7Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M18.92 12.399c-.345 0-.648.134-.866.358l-.015.014c-.256.25-.398.605-.362.982v.01c.051.605.636 1.136 1.363 1.136h1.93c.134 0 .23-.107.23-.22v-2.06a.227.227 0 0 0-.23-.22h-2.05Zm-2.006-.765a2.793 2.793 0 0 1 2.006-.835h2.05c1.007 0 1.83.813 1.83 1.82v2.06c0 1.007-.823 1.82-1.83 1.82h-1.93c-1.431 0-2.824-1.047-2.956-2.599a2.808 2.808 0 0 1 .83-2.267Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const WalletNav = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WalletNav', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82930), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M17.77 9.873h3.484c.412 0 .746.326.746.728v2.53a.746.746 0 0 1-.746.729h-3.405c-.994.013-1.863-.651-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.092 2.092 0 0 1 1.576-.74Zm.15 2.66h.33a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.745h-.33a.766.766 0 0 0-.54.213.728.728 0 0 0-.224.524c0 .413.341.749.765.754Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M22 8.382h-4.231v.034c-1.964 0-3.556 1.552-3.556 3.467s1.592 3.467 3.556 3.467H22v.312C22 19.015 19.964 21 16.516 21H7.484C4.036 21 2 19.015 2 15.662V8.338C2 4.985 4.036 3 7.484 3h9.032C19.964 3 22 4.985 22 8.382Zm-15.262 0h5.644a.755.755 0 0 0 .765-.746.755.755 0 0 0-.764-.745H6.738a.755.755 0 0 0-.764.736c0 .413.34.75.764.754Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const WalletSetting = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WalletSetting', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(66251), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'm18.46 9.279-3.62-6.274a1.458 1.458 0 0 0-1.26-.726H6.42c-.568 0-1.1.306-1.382.799l-3.582 6.2c-.26.45-.26 1.006 0 1.454l3.62 6.271c.26.45.74.727 1.26.727h7.243c.517 0 1-.28 1.26-.727l3.62-6.271a1.461 1.461 0 0 0 0-1.453Zm-1.185.77-3.621 6.27a.086.086 0 0 1-.074.044H6.337a.084.084 0 0 1-.074-.043l-3.62-6.272a.085.085 0 0 1 0-.086l3.58-6.199a.232.232 0 0 1 .198-.115h7.159c.03 0 .058.015.074.043l3.62 6.271a.085.085 0 0 1 0 .086Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M9.959 7.04a2.968 2.968 0 0 0-2.965 2.964A2.968 2.968 0 0 0 9.96 12.97a2.967 2.967 0 0 0 2.965-2.963A2.97 2.97 0 0 0 9.959 7.04Zm0 4.564a1.6 1.6 0 0 1-1.598-1.598A1.6 1.6 0 0 1 9.96 8.41a1.6 1.6 0 0 1 1.598 1.597 1.6 1.6 0 0 1-1.598 1.598Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Warning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Warning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43440), __webpack_require__.b),
    },
])
const WarningTriangle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WarningTriangle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82802), __webpack_require__.b),
    },
])
const Web = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Web', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30672), __webpack_require__.b),
    },
])
const WebBlack = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WebBlack', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(22274), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(89302), __webpack_require__.b),
    },
])
const MenuPersonas = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuPersonas', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51245), __webpack_require__.b),
    },
])
const MenuPersonasActive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuPersonasActive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78973), __webpack_require__.b),
    },
])
const MenuSettings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuSettings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87361), __webpack_require__.b),
    },
])
const MenuSettingsActive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuSettingsActive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99714), __webpack_require__.b),
    },
])
const MenuWallets = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuWallets', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18787), __webpack_require__.b),
    },
])
const MenuWalletsActive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuWalletsActive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65718), __webpack_require__.b),
    },
])
const Approval = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Approval', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63443), __webpack_require__.b),
    },
])
const ArtBlocks = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArtBlocks', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92869), __webpack_require__.b),
    },
])
const Avatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Avatar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20840), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M7.413 2.721c1.191-.96 2.814-1.23 4.293-.95 1.346.322 2.551 1.228 3.204 2.453.453.805.593 1.738.599 2.65l-.001 7.089c-.04.308.204.528.359.764.735 1.054 1.078 2.332 1.139 3.605-.442.002-.884.001-1.326 0-.067-.822-.212-1.644-.597-2.382-1.206-.006-2.41.02-3.617.008-.007-.895-.003-1.79-.005-2.686-1.028-.24-2.115-.061-3.081.338-1.846.778-3.096 2.727-3.089 4.723H4c-.061-1.578.593-3.132 1.626-4.307.145-.137.093-.352.108-.53-.013-1.811.008-3.624-.01-5.436-.045-.902-.017-1.806.024-2.708.108-1.08.77-2.041 1.666-2.63Zm4.23.365c.148.42.554.684.715 1.102.504.938.361 2.023.378 3.044.008 2.481.006 4.962.007 7.443.495.001.99.004 1.486-.006-.004-2.598-.003-5.198 0-7.796-.006-.627-.069-1.273-.349-1.845-.414-.933-1.265-1.646-2.238-1.942Zm-3.712.848c-.653.427-.977 1.227-.952 1.99 1.498.015 2.994.005 4.492.006.053-.995-.59-2.006-1.576-2.261-.656-.233-1.369-.046-1.964.265Zm-.913 3.268c-.007.533.012 1.093.293 1.564.418.793 1.285 1.28 2.172 1.306v1.27a3.986 3.986 0 0 1-2.493-.973c.013.825 0 1.651.01 2.478a6.488 6.488 0 0 1 4.465-.941c-.008-1.568-.001-3.136-.005-4.704H7.018Z',
                }),
            }),
        s: true,
    },
])
const Bit = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Bit', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43728), __webpack_require__.b),
    },
])
const Calendar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Calendar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(54711), __webpack_require__.b),
    },
])
const Collectibles = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Collectibles', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40062), __webpack_require__.b),
    },
])
const CrossBridge = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CrossBridge', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40852), __webpack_require__.b),
    },
])
const DecentralizedSearch = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DecentralizedSearch', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77739), __webpack_require__.b),
    },
])
const ENS = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ENS', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31337), __webpack_require__.b),
    },
])
const ENSCover = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ENSCover', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64948), __webpack_require__.b),
    },
])
const FileService = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FileService', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60184), __webpack_require__.b),
    },
])
const FindTruman = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FindTruman', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6466), __webpack_require__.b),
    },
])
const Gitcoin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gitcoin', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(77213), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(73808), __webpack_require__.b),
    },
])
const GoodGhosting = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GoodGhosting', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(10922), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(77986), __webpack_require__.b),
    },
])
const Markets = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Markets', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75035), __webpack_require__.b),
    },
])
const MarketsClaim = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MarketsClaim', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78674), __webpack_require__.b),
    },
])
const MaskBox = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskBox', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43785), __webpack_require__.b),
    },
])
const NFTAvatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NFTAvatar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32649), __webpack_require__.b),
    },
])
const PoolTogether = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PoolTogether', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(28233), __webpack_require__.b),
    },
])
const Savings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Savings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50426), __webpack_require__.b),
    },
])
const ScamSniffer = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ScamSniffer', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1263), __webpack_require__.b),
    },
])
const SecurityChecker = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SecurityChecker', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92346), __webpack_require__.b),
    },
])
const SettingInfo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingInfo', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(51221), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(80959), __webpack_require__.b),
    },
])
const Shared = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('shared', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(85751), __webpack_require__.b),
    },
])
const Snapshot = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Snapshot', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43311), __webpack_require__.b),
    },
])
const SpaceId = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SpaceId', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18836), __webpack_require__.b),
    },
])
const TipCoin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TipCoin', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65442), __webpack_require__.b),
    },
])
const Transak = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Transak', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(81679), __webpack_require__.b),
    },
])
const Unstoppable = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Unstoppable', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3450), __webpack_require__.b),
    },
])
const Valuables = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Valuables', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(1915), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(15905), __webpack_require__.b),
    },
])
const Web3Profile = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Web3Profile', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50690), __webpack_require__.b),
    },
])
const Web3ProfileCard = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Web3ProfileCard', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71852), __webpack_require__.b),
    },
])
const AchievementBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('AchievementBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(23862), __webpack_require__.b),
    },
])
const AchievementReceive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('AchievementReceive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(68560), __webpack_require__.b),
    },
])
const ApprovalApprove = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ApprovalApprove', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99123), __webpack_require__.b),
    },
])
const CollectibleApprove = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleApprove', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(49806), __webpack_require__.b),
    },
])
const CollectibleBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82735), __webpack_require__.b),
    },
])
const CollectibleIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17794), __webpack_require__.b),
    },
])
const CollectibleMint = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleMint', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1597), __webpack_require__.b),
    },
])
const CollectibleOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40063), __webpack_require__.b),
    },
])
const DonationDonate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DonationDonate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8223), __webpack_require__.b),
    },
])
const DonationLaunch = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DonationLaunch', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64223), __webpack_require__.b),
    },
])
const Follow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Follow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51495), __webpack_require__.b),
    },
])
const GovernancePropose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GovernancePropose', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50821), __webpack_require__.b),
    },
])
const GovernanceVote = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GovernanceVote', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(21930), __webpack_require__.b),
    },
])
const NoteBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58407), __webpack_require__.b),
    },
])
const NoteCreate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteCreate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(85496), __webpack_require__.b),
    },
])
const NoteEdit = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteEdit', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84889), __webpack_require__.b),
    },
])
const NoteLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(7901), __webpack_require__.b),
    },
])
const NoteMint = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteMint', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59790), __webpack_require__.b),
    },
])
const ProfileBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64486), __webpack_require__.b),
    },
])
const ProfileCreate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileCreate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(21586), __webpack_require__.b),
    },
])
const ProfileLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5026), __webpack_require__.b),
    },
])
const ProfileProxy = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileProxy', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77340), __webpack_require__.b),
    },
])
const ProfileUpdate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileUpdate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90135), __webpack_require__.b),
    },
])
const RSS3Link = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'RSS3Link',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(78637), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 9 2',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M.848 1.872a.83.83 0 0 1-.608-.256A.879.879 0 0 1 0 .992C0 .747.08.544.24.384A.83.83 0 0 1 .848.128a.83.83 0 0 1 .608.256.8.8 0 0 1 .256.608.85.85 0 0 1-.256.624.83.83 0 0 1-.608.256Zm3.391 0a.83.83 0 0 1-.608-.256.879.879 0 0 1-.24-.624c0-.245.08-.448.24-.608a.83.83 0 0 1 .608-.256.83.83 0 0 1 .608.256.8.8 0 0 1 .256.608.85.85 0 0 1-.256.624.83.83 0 0 1-.608.256Zm3.391 0a.83.83 0 0 1-.609-.256.879.879 0 0 1-.24-.624c0-.245.08-.448.24-.608A.83.83 0 0 1 7.63.128a.83.83 0 0 1 .608.256.8.8 0 0 1 .256.608.85.85 0 0 1-.256.624.83.83 0 0 1-.608.256Z',
                    }),
                }),
            s: true,
        },
    ],
    [9, 2],
)
const TokenBridge = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenBridge', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(86320), __webpack_require__.b),
    },
])
const TokenBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37968), __webpack_require__.b),
    },
])
const TokenIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51678), __webpack_require__.b),
    },
])
const TokenLiquidity = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenLiquidity', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82157), __webpack_require__.b),
    },
])
const TokenMint = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenMint', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6172), __webpack_require__.b),
    },
])
const TokenOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(14767), __webpack_require__.b),
    },
])
const TokenStake = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenStake', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(44186), __webpack_require__.b),
    },
])
const TokenSwap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenSwap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65649), __webpack_require__.b),
    },
])
const TokenUnstake = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenUnstake', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3474), __webpack_require__.b),
    },
])
const Unfollow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Unfollow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43771), __webpack_require__.b),
    },
])
const UnknownBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(9509), __webpack_require__.b),
    },
])
const UnknownCancel = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownCancel', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(28638), __webpack_require__.b),
    },
])
const UnknownIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60520), __webpack_require__.b),
    },
])
const UnknownOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37471), __webpack_require__.b),
    },
])
const CN = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CN', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(42333), __webpack_require__.b),
    },
])
const Email = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Email', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17555), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M16.192 14.725c1.238.944 2.07 1.14 2.597.905.346-.156.595-.521.74-.925a8.002 8.002 0 0 0-3.53-9.633A8 8 0 1 0 12.015 20l.006 2A9.957 9.957 0 0 1 7 20.66C2.22 17.897.58 11.781 3.341 7a10 10 0 0 1 18.07 8.383 4.033 4.033 0 0 1-.471.925c-.337.494-.775.895-1.332 1.145-1.327.595-2.945.19-4.83-1.297a5 5 0 1 1 1.414-1.432ZM12.001 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
                }),
            }),
        s: true,
    },
])
const JP = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('JP', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71381), __webpack_require__.b),
    },
])
const KR = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('KR', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31731), __webpack_require__.b),
    },
])
const SettingsAppearance = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsAppearance', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(34621), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(95605), __webpack_require__.b),
    },
])
const SettingsBackup = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsBackup', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(52878), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(39691), __webpack_require__.b),
    },
])
const SettingsEmail = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsEmail', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(5960), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(61968), __webpack_require__.b),
    },
])
const SettingsLanguage = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsLanguage', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(99024), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(58220), __webpack_require__.b),
    },
])
const SettingsPassword = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsPassword', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(28862), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(59067), __webpack_require__.b),
    },
])
const SettingsPhone = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsPhone', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(59165), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(5537), __webpack_require__.b),
    },
])
const SettingsRestore = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsRestore', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(61330), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(50485), __webpack_require__.b),
    },
])
const SettingsSync = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsSync', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(33561), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(46832), __webpack_require__.b),
    },
])
const UK = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UK', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64311), __webpack_require__.b),
    },
])


/***/ })

}]);
//# sourceMappingURL=4124.js.map