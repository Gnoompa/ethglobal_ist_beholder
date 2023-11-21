"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4544],{

/***/ 20188:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isZeroAddress = exports.zeroAddress = exports.importPublic = exports.privateToAddress = exports.privateToPublic = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isValidAddress = exports.Account = void 0;
var assert_1 = __importDefault(__webpack_require__(67594));
var externals_1 = __webpack_require__(57643);
var secp256k1_1 = __webpack_require__(73181);
var internal_1 = __webpack_require__(84629);
var constants_1 = __webpack_require__(45298);
var bytes_1 = __webpack_require__(57347);
var hash_1 = __webpack_require__(47769);
var helpers_1 = __webpack_require__(45886);
var types_1 = __webpack_require__(18672);
var Account = /** @class */ (function () {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */
    function Account(nonce, balance, stateRoot, codeHash) {
        if (nonce === void 0) { nonce = new externals_1.BN(0); }
        if (balance === void 0) { balance = new externals_1.BN(0); }
        if (stateRoot === void 0) { stateRoot = constants_1.KECCAK256_RLP; }
        if (codeHash === void 0) { codeHash = constants_1.KECCAK256_NULL; }
        this.nonce = nonce;
        this.balance = balance;
        this.stateRoot = stateRoot;
        this.codeHash = codeHash;
        this._validate();
    }
    Account.fromAccountData = function (accountData) {
        var nonce = accountData.nonce, balance = accountData.balance, stateRoot = accountData.stateRoot, codeHash = accountData.codeHash;
        return new Account(nonce ? new externals_1.BN((0, bytes_1.toBuffer)(nonce)) : undefined, balance ? new externals_1.BN((0, bytes_1.toBuffer)(balance)) : undefined, stateRoot ? (0, bytes_1.toBuffer)(stateRoot) : undefined, codeHash ? (0, bytes_1.toBuffer)(codeHash) : undefined);
    };
    Account.fromRlpSerializedAccount = function (serialized) {
        var values = externals_1.rlp.decode(serialized);
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized account input. Must be array');
        }
        return this.fromValuesArray(values);
    };
    Account.fromValuesArray = function (values) {
        var _a = __read(values, 4), nonce = _a[0], balance = _a[1], stateRoot = _a[2], codeHash = _a[3];
        return new Account(new externals_1.BN(nonce), new externals_1.BN(balance), stateRoot, codeHash);
    };
    Account.prototype._validate = function () {
        if (this.nonce.lt(new externals_1.BN(0))) {
            throw new Error('nonce must be greater than zero');
        }
        if (this.balance.lt(new externals_1.BN(0))) {
            throw new Error('balance must be greater than zero');
        }
        if (this.stateRoot.length !== 32) {
            throw new Error('stateRoot must have a length of 32');
        }
        if (this.codeHash.length !== 32) {
            throw new Error('codeHash must have a length of 32');
        }
    };
    /**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */
    Account.prototype.raw = function () {
        return [
            (0, types_1.bnToUnpaddedBuffer)(this.nonce),
            (0, types_1.bnToUnpaddedBuffer)(this.balance),
            this.stateRoot,
            this.codeHash,
        ];
    };
    /**
     * Returns the RLP serialization of the account as a `Buffer`.
     */
    Account.prototype.serialize = function () {
        return externals_1.rlp.encode(this.raw());
    };
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */
    Account.prototype.isContract = function () {
        return !this.codeHash.equals(constants_1.KECCAK256_NULL);
    };
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */
    Account.prototype.isEmpty = function () {
        return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(constants_1.KECCAK256_NULL);
    };
    return Account;
}());
exports.Account = Account;
/**
 * Checks if the address is a valid. Accepts checksummed addresses too.
 */
var isValidAddress = function (hexAddress) {
    try {
        (0, helpers_1.assertIsString)(hexAddress);
    }
    catch (e) {
        return false;
    }
    return /^0x[0-9a-fA-F]{40}$/.test(hexAddress);
};
exports.isValidAddress = isValidAddress;
/**
 * Returns a checksummed address.
 *
 * If an eip1191ChainId is provided, the chainId will be included in the checksum calculation. This
 * has the effect of checksummed addresses for one chain having invalid checksums for others.
 * For more details see [EIP-1191](https://eips.ethereum.org/EIPS/eip-1191).
 *
 * WARNING: Checksums with and without the chainId will differ and the EIP-1191 checksum is not
 * backwards compatible to the original widely adopted checksum format standard introduced in
 * [EIP-55](https://eips.ethereum.org/EIPS/eip-55), so this will break in existing applications.
 * Usage of this EIP is therefore discouraged unless you have a very targeted use case.
 */
var toChecksumAddress = function (hexAddress, eip1191ChainId) {
    (0, helpers_1.assertIsHexString)(hexAddress);
    var address = (0, internal_1.stripHexPrefix)(hexAddress).toLowerCase();
    var prefix = '';
    if (eip1191ChainId) {
        var chainId = (0, types_1.toType)(eip1191ChainId, types_1.TypeOutput.BN);
        prefix = chainId.toString() + '0x';
    }
    var hash = (0, hash_1.keccakFromString)(prefix + address).toString('hex');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
            ret += address[i].toUpperCase();
        }
        else {
            ret += address[i];
        }
    }
    return ret;
};
exports.toChecksumAddress = toChecksumAddress;
/**
 * Checks if the address is a valid checksummed address.
 *
 * See toChecksumAddress' documentation for details about the eip1191ChainId parameter.
 */
var isValidChecksumAddress = function (hexAddress, eip1191ChainId) {
    return (0, exports.isValidAddress)(hexAddress) && (0, exports.toChecksumAddress)(hexAddress, eip1191ChainId) === hexAddress;
};
exports.isValidChecksumAddress = isValidChecksumAddress;
/**
 * Generates an address of a newly created contract.
 * @param from The address which is creating this new address
 * @param nonce The nonce of the from account
 */
var generateAddress = function (from, nonce) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(nonce);
    var nonceBN = new externals_1.BN(nonce);
    if (nonceBN.isZero()) {
        // in RLP we want to encode null in the case of zero nonce
        // read the RLP documentation for an answer if you dare
        return (0, hash_1.rlphash)([from, null]).slice(-20);
    }
    // Only take the lower 160bits of the hash
    return (0, hash_1.rlphash)([from, Buffer.from(nonceBN.toArray())]).slice(-20);
};
exports.generateAddress = generateAddress;
/**
 * Generates an address for a contract created using CREATE2.
 * @param from The address which is creating this new address
 * @param salt A salt
 * @param initCode The init code of the contract being created
 */
var generateAddress2 = function (from, salt, initCode) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(salt);
    (0, helpers_1.assertIsBuffer)(initCode);
    (0, assert_1.default)(from.length === 20);
    (0, assert_1.default)(salt.length === 32);
    var address = (0, hash_1.keccak256)(Buffer.concat([Buffer.from('ff', 'hex'), from, salt, (0, hash_1.keccak256)(initCode)]));
    return address.slice(-20);
};
exports.generateAddress2 = generateAddress2;
/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 */
var isValidPrivate = function (privateKey) {
    return (0, secp256k1_1.privateKeyVerify)(privateKey);
};
exports.isValidPrivate = isValidPrivate;
/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
var isValidPublic = function (publicKey, sanitize) {
    if (sanitize === void 0) { sanitize = false; }
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length === 64) {
        // Convert to SEC1 for secp256k1
        return (0, secp256k1_1.publicKeyVerify)(Buffer.concat([Buffer.from([4]), publicKey]));
    }
    if (!sanitize) {
        return false;
    }
    return (0, secp256k1_1.publicKeyVerify)(publicKey);
};
exports.isValidPublic = isValidPublic;
/**
 * Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
var pubToAddress = function (pubKey, sanitize) {
    if (sanitize === void 0) { sanitize = false; }
    (0, helpers_1.assertIsBuffer)(pubKey);
    if (sanitize && pubKey.length !== 64) {
        pubKey = Buffer.from((0, secp256k1_1.publicKeyConvert)(pubKey, false).slice(1));
    }
    (0, assert_1.default)(pubKey.length === 64);
    // Only take the lower 160bits of the hash
    return (0, hash_1.keccak)(pubKey).slice(-20);
};
exports.pubToAddress = pubToAddress;
exports.publicToAddress = exports.pubToAddress;
/**
 * Returns the ethereum public key of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
var privateToPublic = function (privateKey) {
    (0, helpers_1.assertIsBuffer)(privateKey);
    // skip the type flag and use the X, Y points
    return Buffer.from((0, secp256k1_1.publicKeyCreate)(privateKey, false)).slice(1);
};
exports.privateToPublic = privateToPublic;
/**
 * Returns the ethereum address of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
var privateToAddress = function (privateKey) {
    return (0, exports.publicToAddress)((0, exports.privateToPublic)(privateKey));
};
exports.privateToAddress = privateToAddress;
/**
 * Converts a public key to the Ethereum format.
 */
var importPublic = function (publicKey) {
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length !== 64) {
        publicKey = Buffer.from((0, secp256k1_1.publicKeyConvert)(publicKey, false).slice(1));
    }
    return publicKey;
};
exports.importPublic = importPublic;
/**
 * Returns the zero address.
 */
var zeroAddress = function () {
    var addressLength = 20;
    var addr = (0, bytes_1.zeros)(addressLength);
    return (0, bytes_1.bufferToHex)(addr);
};
exports.zeroAddress = zeroAddress;
/**
 * Checks if a given address is the zero address.
 */
var isZeroAddress = function (hexAddress) {
    try {
        (0, helpers_1.assertIsString)(hexAddress);
    }
    catch (e) {
        return false;
    }
    var zeroAddr = (0, exports.zeroAddress)();
    return zeroAddr === hexAddress;
};
exports.isZeroAddress = isZeroAddress;


/***/ }),

/***/ 52363:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Address = void 0;
var assert_1 = __importDefault(__webpack_require__(67594));
var externals_1 = __webpack_require__(57643);
var bytes_1 = __webpack_require__(57347);
var account_1 = __webpack_require__(20188);
var Address = /** @class */ (function () {
    function Address(buf) {
        (0, assert_1.default)(buf.length === 20, 'Invalid address length');
        this.buf = buf;
    }
    /**
     * Returns the zero address.
     */
    Address.zero = function () {
        return new Address((0, bytes_1.zeros)(20));
    };
    /**
     * Returns an Address object from a hex-encoded string.
     * @param str - Hex-encoded address
     */
    Address.fromString = function (str) {
        (0, assert_1.default)((0, account_1.isValidAddress)(str), 'Invalid address');
        return new Address((0, bytes_1.toBuffer)(str));
    };
    /**
     * Returns an address for a given public key.
     * @param pubKey The two points of an uncompressed key
     */
    Address.fromPublicKey = function (pubKey) {
        (0, assert_1.default)(Buffer.isBuffer(pubKey), 'Public key should be Buffer');
        var buf = (0, account_1.pubToAddress)(pubKey);
        return new Address(buf);
    };
    /**
     * Returns an address for a given private key.
     * @param privateKey A private key must be 256 bits wide
     */
    Address.fromPrivateKey = function (privateKey) {
        (0, assert_1.default)(Buffer.isBuffer(privateKey), 'Private key should be Buffer');
        var buf = (0, account_1.privateToAddress)(privateKey);
        return new Address(buf);
    };
    /**
     * Generates an address for a newly created contract.
     * @param from The address which is creating this new address
     * @param nonce The nonce of the from account
     */
    Address.generate = function (from, nonce) {
        (0, assert_1.default)(externals_1.BN.isBN(nonce));
        return new Address((0, account_1.generateAddress)(from.buf, nonce.toArrayLike(Buffer)));
    };
    /**
     * Generates an address for a contract created using CREATE2.
     * @param from The address which is creating this new address
     * @param salt A salt
     * @param initCode The init code of the contract being created
     */
    Address.generate2 = function (from, salt, initCode) {
        (0, assert_1.default)(Buffer.isBuffer(salt));
        (0, assert_1.default)(Buffer.isBuffer(initCode));
        return new Address((0, account_1.generateAddress2)(from.buf, salt, initCode));
    };
    /**
     * Is address equal to another.
     */
    Address.prototype.equals = function (address) {
        return this.buf.equals(address.buf);
    };
    /**
     * Is address zero.
     */
    Address.prototype.isZero = function () {
        return this.equals(Address.zero());
    };
    /**
     * True if address is in the address range defined
     * by EIP-1352
     */
    Address.prototype.isPrecompileOrSystemAddress = function () {
        var addressBN = new externals_1.BN(this.buf);
        var rangeMin = new externals_1.BN(0);
        var rangeMax = new externals_1.BN('ffff', 'hex');
        return addressBN.gte(rangeMin) && addressBN.lte(rangeMax);
    };
    /**
     * Returns hex encoding of address.
     */
    Address.prototype.toString = function () {
        return '0x' + this.buf.toString('hex');
    };
    /**
     * Returns Buffer representation of address.
     */
    Address.prototype.toBuffer = function () {
        return Buffer.from(this.buf);
    };
    return Address;
}());
exports.Address = Address;


/***/ }),

/***/ 57347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufArrToArr = exports.arrToBufArr = exports.validateNoLeadingZeroes = exports.baToJSON = exports.toUtf8 = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToHex = exports.bufferToInt = exports.toBuffer = exports.unpadHexString = exports.unpadArray = exports.unpadBuffer = exports.setLengthRight = exports.setLengthLeft = exports.zeros = exports.intToBuffer = exports.intToHex = void 0;
var externals_1 = __webpack_require__(57643);
var internal_1 = __webpack_require__(84629);
var helpers_1 = __webpack_require__(45886);
/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
var intToHex = function (i) {
    if (!Number.isSafeInteger(i) || i < 0) {
        throw new Error("Received an invalid integer type: ".concat(i));
    }
    return "0x".concat(i.toString(16));
};
exports.intToHex = intToHex;
/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
var intToBuffer = function (i) {
    var hex = (0, exports.intToHex)(i);
    return Buffer.from((0, internal_1.padToEven)(hex.slice(2)), 'hex');
};
exports.intToBuffer = intToBuffer;
/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
var zeros = function (bytes) {
    return Buffer.allocUnsafe(bytes).fill(0);
};
exports.zeros = zeros;
/**
 * Pads a `Buffer` with zeros till it has `length` bytes.
 * Truncates the beginning or end of input if its length exceeds `length`.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @param right whether to start padding form the left or right
 * @return (Buffer)
 */
var setLength = function (msg, length, right) {
    var buf = (0, exports.zeros)(length);
    if (right) {
        if (msg.length < length) {
            msg.copy(buf);
            return buf;
        }
        return msg.slice(0, length);
    }
    else {
        if (msg.length < length) {
            msg.copy(buf, length - msg.length);
            return buf;
        }
        return msg.slice(-length);
    }
};
/**
 * Left Pads a `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
var setLengthLeft = function (msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, false);
};
exports.setLengthLeft = setLengthLeft;
/**
 * Right Pads a `Buffer` with trailing zeros till it has `length` bytes.
 * it truncates the end if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
var setLengthRight = function (msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, true);
};
exports.setLengthRight = setLengthRight;
/**
 * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
 * @param a (Buffer|Array|String)
 * @return (Buffer|Array|String)
 */
var stripZeros = function (a) {
    var first = a[0];
    while (a.length > 0 && first.toString() === '0') {
        a = a.slice(1);
        first = a[0];
    }
    return a;
};
/**
 * Trims leading zeros from a `Buffer`.
 * @param a (Buffer)
 * @return (Buffer)
 */
var unpadBuffer = function (a) {
    (0, helpers_1.assertIsBuffer)(a);
    return stripZeros(a);
};
exports.unpadBuffer = unpadBuffer;
/**
 * Trims leading zeros from an `Array` (of numbers).
 * @param a (number[])
 * @return (number[])
 */
var unpadArray = function (a) {
    (0, helpers_1.assertIsArray)(a);
    return stripZeros(a);
};
exports.unpadArray = unpadArray;
/**
 * Trims leading zeros from a hex-prefixed `String`.
 * @param a (String)
 * @return (String)
 */
var unpadHexString = function (a) {
    (0, helpers_1.assertIsHexString)(a);
    a = (0, internal_1.stripHexPrefix)(a);
    return stripZeros(a);
};
exports.unpadHexString = unpadHexString;
/**
 * Attempts to turn a value into a `Buffer`.
 * Inputs supported: `Buffer`, `String` (hex-prefixed), `Number`, null/undefined, `BN` and other objects
 * with a `toArray()` or `toBuffer()` method.
 * @param v the value
 */
var toBuffer = function (v) {
    if (v === null || v === undefined) {
        return Buffer.allocUnsafe(0);
    }
    if (Buffer.isBuffer(v)) {
        return Buffer.from(v);
    }
    if (Array.isArray(v) || v instanceof Uint8Array) {
        return Buffer.from(v);
    }
    if (typeof v === 'string') {
        if (!(0, internal_1.isHexString)(v)) {
            throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(v));
        }
        return Buffer.from((0, internal_1.padToEven)((0, internal_1.stripHexPrefix)(v)), 'hex');
    }
    if (typeof v === 'number') {
        return (0, exports.intToBuffer)(v);
    }
    if (externals_1.BN.isBN(v)) {
        if (v.isNeg()) {
            throw new Error("Cannot convert negative BN to buffer. Given: ".concat(v));
        }
        return v.toArrayLike(Buffer);
    }
    if (v.toArray) {
        // converts a BN to a Buffer
        return Buffer.from(v.toArray());
    }
    if (v.toBuffer) {
        return Buffer.from(v.toBuffer());
    }
    throw new Error('invalid type');
};
exports.toBuffer = toBuffer;
/**
 * Converts a `Buffer` to a `Number`.
 * @param buf `Buffer` object to convert
 * @throws If the input number exceeds 53 bits.
 */
var bufferToInt = function (buf) {
    return new externals_1.BN((0, exports.toBuffer)(buf)).toNumber();
};
exports.bufferToInt = bufferToInt;
/**
 * Converts a `Buffer` into a `0x`-prefixed hex `String`.
 * @param buf `Buffer` object to convert
 */
var bufferToHex = function (buf) {
    buf = (0, exports.toBuffer)(buf);
    return '0x' + buf.toString('hex');
};
exports.bufferToHex = bufferToHex;
/**
 * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
 * @param num Signed integer value
 */
var fromSigned = function (num) {
    return new externals_1.BN(num).fromTwos(256);
};
exports.fromSigned = fromSigned;
/**
 * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param num
 */
var toUnsigned = function (num) {
    return Buffer.from(num.toTwos(256).toArray());
};
exports.toUnsigned = toUnsigned;
/**
 * Adds "0x" to a given `String` if it does not already start with "0x".
 */
var addHexPrefix = function (str) {
    if (typeof str !== 'string') {
        return str;
    }
    return (0, internal_1.isHexPrefixed)(str) ? str : '0x' + str;
};
exports.addHexPrefix = addHexPrefix;
/**
 * Returns the utf8 string representation from a hex string.
 *
 * Examples:
 *
 * Input 1: '657468657265756d000000000000000000000000000000000000000000000000'
 * Input 2: '657468657265756d'
 * Input 3: '000000000000000000000000000000000000000000000000657468657265756d'
 *
 * Output (all 3 input variants): 'ethereum'
 *
 * Note that this method is not intended to be used with hex strings
 * representing quantities in both big endian or little endian notation.
 *
 * @param string Hex string, should be `0x` prefixed
 * @return Utf8 string
 */
var toUtf8 = function (hex) {
    var zerosRegexp = /^(00)+|(00)+$/g;
    hex = (0, internal_1.stripHexPrefix)(hex);
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid non-even hex string input for toUtf8() provided');
    }
    var bufferVal = Buffer.from(hex.replace(zerosRegexp, ''), 'hex');
    return bufferVal.toString('utf8');
};
exports.toUtf8 = toUtf8;
/**
 * Converts a `Buffer` or `Array` to JSON.
 * @param ba (Buffer|Array)
 * @return (Array|String|null)
 */
var baToJSON = function (ba) {
    if (Buffer.isBuffer(ba)) {
        return "0x".concat(ba.toString('hex'));
    }
    else if (ba instanceof Array) {
        var array = [];
        for (var i = 0; i < ba.length; i++) {
            array.push((0, exports.baToJSON)(ba[i]));
        }
        return array;
    }
};
exports.baToJSON = baToJSON;
/**
 * Checks provided Buffers for leading zeroes and throws if found.
 *
 * Examples:
 *
 * Valid values: 0x1, 0x, 0x01, 0x1234
 * Invalid values: 0x0, 0x00, 0x001, 0x0001
 *
 * Note: This method is useful for validating that RLP encoded integers comply with the rule that all
 * integer values encoded to RLP must be in the most compact form and contain no leading zero bytes
 * @param values An object containing string keys and Buffer values
 * @throws if any provided value is found to have leading zero bytes
 */
var validateNoLeadingZeroes = function (values) {
    var e_1, _a;
    try {
        for (var _b = __values(Object.entries(values)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
            if (v !== undefined && v.length > 0 && v[0] === 0) {
                throw new Error("".concat(k, " cannot have leading zeroes, received: ").concat(v.toString('hex')));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.validateNoLeadingZeroes = validateNoLeadingZeroes;
function arrToBufArr(arr) {
    if (!Array.isArray(arr)) {
        return Buffer.from(arr);
    }
    return arr.map(function (a) { return arrToBufArr(a); });
}
exports.arrToBufArr = arrToBufArr;
function bufArrToArr(arr) {
    if (!Array.isArray(arr)) {
        return Uint8Array.from(arr !== null && arr !== void 0 ? arr : []);
    }
    return arr.map(function (a) { return bufArrToArr(a); });
}
exports.bufArrToArr = bufArrToArr;


/***/ }),

/***/ 45298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.MAX_INTEGER = exports.MAX_UINT64 = void 0;
var buffer_1 = __webpack_require__(7661);
var externals_1 = __webpack_require__(57643);
/**
 * 2^64-1
 */
exports.MAX_UINT64 = new externals_1.BN('ffffffffffffffff', 16);
/**
 * The max integer that the evm can handle (2^256-1)
 */
exports.MAX_INTEGER = new externals_1.BN('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
/**
 * 2^256
 */
exports.TWO_POW256 = new externals_1.BN('10000000000000000000000000000000000000000000000000000000000000000', 16);
/**
 * Keccak-256 hash of null
 */
exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
/**
 * Keccak-256 hash of null
 */
exports.KECCAK256_NULL = buffer_1.Buffer.from(exports.KECCAK256_NULL_S, 'hex');
/**
 * Keccak-256 of an RLP of an empty array
 */
exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
/**
 * Keccak-256 of an RLP of an empty array
 */
exports.KECCAK256_RLP_ARRAY = buffer_1.Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
/**
 * Keccak-256 hash of the RLP of null
 */
exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
/**
 * Keccak-256 hash of the RLP of null
 */
exports.KECCAK256_RLP = buffer_1.Buffer.from(exports.KECCAK256_RLP_S, 'hex');


/***/ }),

/***/ 57643:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Re-exports commonly used modules:
 * * Exports [`BN`](https://github.com/indutny/bn.js), [`rlp`](https://github.com/ethereumjs/rlp).
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rlp = exports.BN = void 0;
var bn_js_1 = __importDefault(__webpack_require__(73182));
exports.BN = bn_js_1.default;
var rlp = __importStar(__webpack_require__(99347));
exports.rlp = rlp;


/***/ }),

/***/ 47769:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rlphash = exports.ripemd160FromArray = exports.ripemd160FromString = exports.ripemd160 = exports.sha256FromArray = exports.sha256FromString = exports.sha256 = exports.keccakFromArray = exports.keccakFromHexString = exports.keccakFromString = exports.keccak256 = exports.keccak = void 0;
var keccak_1 = __webpack_require__(17649);
var createHash = __webpack_require__(68066);
var externals_1 = __webpack_require__(57643);
var bytes_1 = __webpack_require__(57347);
var helpers_1 = __webpack_require__(45886);
/**
 * Creates Keccak hash of a Buffer input
 * @param a The input data (Buffer)
 * @param bits (number = 256) The Keccak width
 */
var keccak = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsBuffer)(a);
    switch (bits) {
        case 224: {
            return (0, keccak_1.keccak224)(a);
        }
        case 256: {
            return (0, keccak_1.keccak256)(a);
        }
        case 384: {
            return (0, keccak_1.keccak384)(a);
        }
        case 512: {
            return (0, keccak_1.keccak512)(a);
        }
        default: {
            throw new Error("Invald algorithm: keccak".concat(bits));
        }
    }
};
exports.keccak = keccak;
/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
 * @param a The input data (Buffer)
 */
var keccak256 = function (a) {
    return (0, exports.keccak)(a);
};
exports.keccak256 = keccak256;
/**
 * Creates Keccak hash of a utf-8 string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
var keccakFromString = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsString)(a);
    var buf = Buffer.from(a, 'utf8');
    return (0, exports.keccak)(buf, bits);
};
exports.keccakFromString = keccakFromString;
/**
 * Creates Keccak hash of an 0x-prefixed string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
var keccakFromHexString = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsHexString)(a);
    return (0, exports.keccak)((0, bytes_1.toBuffer)(a), bits);
};
exports.keccakFromHexString = keccakFromHexString;
/**
 * Creates Keccak hash of a number array input
 * @param a The input data (number[])
 * @param bits (number = 256) The Keccak width
 */
var keccakFromArray = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsArray)(a);
    return (0, exports.keccak)((0, bytes_1.toBuffer)(a), bits);
};
exports.keccakFromArray = keccakFromArray;
/**
 * Creates SHA256 hash of an input.
 * @param  a The input data (Buffer|Array|String)
 */
var _sha256 = function (a) {
    a = (0, bytes_1.toBuffer)(a);
    return createHash('sha256').update(a).digest();
};
/**
 * Creates SHA256 hash of a Buffer input.
 * @param a The input data (Buffer)
 */
var sha256 = function (a) {
    (0, helpers_1.assertIsBuffer)(a);
    return _sha256(a);
};
exports.sha256 = sha256;
/**
 * Creates SHA256 hash of a string input.
 * @param a The input data (string)
 */
var sha256FromString = function (a) {
    (0, helpers_1.assertIsString)(a);
    return _sha256(a);
};
exports.sha256FromString = sha256FromString;
/**
 * Creates SHA256 hash of a number[] input.
 * @param a The input data (number[])
 */
var sha256FromArray = function (a) {
    (0, helpers_1.assertIsArray)(a);
    return _sha256(a);
};
exports.sha256FromArray = sha256FromArray;
/**
 * Creates RIPEMD160 hash of the input.
 * @param a The input data (Buffer|Array|String|Number)
 * @param padded Whether it should be padded to 256 bits or not
 */
var _ripemd160 = function (a, padded) {
    a = (0, bytes_1.toBuffer)(a);
    var hash = createHash('rmd160').update(a).digest();
    if (padded === true) {
        return (0, bytes_1.setLengthLeft)(hash, 32);
    }
    else {
        return hash;
    }
};
/**
 * Creates RIPEMD160 hash of a Buffer input.
 * @param a The input data (Buffer)
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160 = function (a, padded) {
    (0, helpers_1.assertIsBuffer)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160 = ripemd160;
/**
 * Creates RIPEMD160 hash of a string input.
 * @param a The input data (String)
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160FromString = function (a, padded) {
    (0, helpers_1.assertIsString)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160FromString = ripemd160FromString;
/**
 * Creates RIPEMD160 hash of a number[] input.
 * @param a The input data (number[])
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160FromArray = function (a, padded) {
    (0, helpers_1.assertIsArray)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160FromArray = ripemd160FromArray;
/**
 * Creates SHA-3 hash of the RLP encoded version of the input.
 * @param a The input data
 */
var rlphash = function (a) {
    return (0, exports.keccak)(externals_1.rlp.encode(a));
};
exports.rlphash = rlphash;


/***/ }),

/***/ 45886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertIsString = exports.assertIsArray = exports.assertIsBuffer = exports.assertIsHexString = void 0;
var internal_1 = __webpack_require__(84629);
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
var assertIsHexString = function (input) {
    if (!(0, internal_1.isHexString)(input)) {
        var msg = "This method only supports 0x-prefixed hex strings but input was: ".concat(input);
        throw new Error(msg);
    }
};
exports.assertIsHexString = assertIsHexString;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
var assertIsBuffer = function (input) {
    if (!Buffer.isBuffer(input)) {
        var msg = "This method only supports Buffer but input was: ".concat(input);
        throw new Error(msg);
    }
};
exports.assertIsBuffer = assertIsBuffer;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
var assertIsArray = function (input) {
    if (!Array.isArray(input)) {
        var msg = "This method only supports number arrays but input was: ".concat(input);
        throw new Error(msg);
    }
};
exports.assertIsArray = assertIsArray;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
var assertIsString = function (input) {
    if (typeof input !== 'string') {
        var msg = "This method only supports strings but input was: ".concat(input);
        throw new Error(msg);
    }
};
exports.assertIsString = assertIsString;


/***/ }),

/***/ 22372:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isHexString = exports.getKeys = exports.fromAscii = exports.fromUtf8 = exports.toAscii = exports.arrayContainsArray = exports.getBinarySize = exports.padToEven = exports.stripHexPrefix = exports.isHexPrefixed = void 0;
/**
 * Constants
 */
__exportStar(__webpack_require__(45298), exports);
/**
 * Account class and helper functions
 */
__exportStar(__webpack_require__(20188), exports);
/**
 * Address type
 */
__exportStar(__webpack_require__(52363), exports);
/**
 * Hash functions
 */
__exportStar(__webpack_require__(47769), exports);
/**
 * ECDSA signature
 */
__exportStar(__webpack_require__(63411), exports);
/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */
__exportStar(__webpack_require__(57347), exports);
/**
 * Function for definining properties on an object
 */
__exportStar(__webpack_require__(66527), exports);
/**
 * External exports (BN, rlp)
 */
__exportStar(__webpack_require__(57643), exports);
/**
 * Helpful TypeScript types
 */
__exportStar(__webpack_require__(18672), exports);
/**
 * Export ethjs-util methods
 */
var internal_1 = __webpack_require__(84629);
Object.defineProperty(exports, "isHexPrefixed", ({ enumerable: true, get: function () { return internal_1.isHexPrefixed; } }));
Object.defineProperty(exports, "stripHexPrefix", ({ enumerable: true, get: function () { return internal_1.stripHexPrefix; } }));
Object.defineProperty(exports, "padToEven", ({ enumerable: true, get: function () { return internal_1.padToEven; } }));
Object.defineProperty(exports, "getBinarySize", ({ enumerable: true, get: function () { return internal_1.getBinarySize; } }));
Object.defineProperty(exports, "arrayContainsArray", ({ enumerable: true, get: function () { return internal_1.arrayContainsArray; } }));
Object.defineProperty(exports, "toAscii", ({ enumerable: true, get: function () { return internal_1.toAscii; } }));
Object.defineProperty(exports, "fromUtf8", ({ enumerable: true, get: function () { return internal_1.fromUtf8; } }));
Object.defineProperty(exports, "fromAscii", ({ enumerable: true, get: function () { return internal_1.fromAscii; } }));
Object.defineProperty(exports, "getKeys", ({ enumerable: true, get: function () { return internal_1.getKeys; } }));
Object.defineProperty(exports, "isHexString", ({ enumerable: true, get: function () { return internal_1.isHexString; } }));


/***/ }),

/***/ 84629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

/*
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

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
THE SOFTWARE
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isHexString = exports.getKeys = exports.fromAscii = exports.fromUtf8 = exports.toAscii = exports.arrayContainsArray = exports.getBinarySize = exports.padToEven = exports.stripHexPrefix = exports.isHexPrefixed = void 0;
/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param str the string input value
 * @return a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */
function isHexPrefixed(str) {
    if (typeof str !== 'string') {
        throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof str));
    }
    return str[0] === '0' && str[1] === 'x';
}
exports.isHexPrefixed = isHexPrefixed;
/**
 * Removes '0x' from a given `String` if present
 * @param str the string value
 * @returns the string without 0x prefix
 */
var stripHexPrefix = function (str) {
    if (typeof str !== 'string')
        throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof str));
    return isHexPrefixed(str) ? str.slice(2) : str;
};
exports.stripHexPrefix = stripHexPrefix;
/**
 * Pads a `String` to have an even length
 * @param value
 * @return output
 */
function padToEven(value) {
    var a = value;
    if (typeof a !== 'string') {
        throw new Error("[padToEven] value must be type 'string', received ".concat(typeof a));
    }
    if (a.length % 2)
        a = "0".concat(a);
    return a;
}
exports.padToEven = padToEven;
/**
 * Get the binary size of a string
 * @param str
 * @returns the number of bytes contained within the string
 */
function getBinarySize(str) {
    if (typeof str !== 'string') {
        throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof str));
    }
    return Buffer.byteLength(str, 'utf8');
}
exports.getBinarySize = getBinarySize;
/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param superset
 * @param subset
 *
 */
function arrayContainsArray(superset, subset, some) {
    if (Array.isArray(superset) !== true) {
        throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof superset, "'"));
    }
    if (Array.isArray(subset) !== true) {
        throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof subset, "'"));
    }
    return subset[some ? 'some' : 'every'](function (value) { return superset.indexOf(value) >= 0; });
}
exports.arrayContainsArray = arrayContainsArray;
/**
 * Should be called to get ascii from its hex representation
 *
 * @param string in hex
 * @returns ascii string representation of hex value
 */
function toAscii(hex) {
    var str = '';
    var i = 0;
    var l = hex.length;
    if (hex.substring(0, 2) === '0x')
        i = 2;
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }
    return str;
}
exports.toAscii = toAscii;
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @param string
 * @param optional padding
 * @returns hex representation of input string
 */
function fromUtf8(stringValue) {
    var str = Buffer.from(stringValue, 'utf8');
    return "0x".concat(padToEven(str.toString('hex')).replace(/^0+|0+$/g, ''));
}
exports.fromUtf8 = fromUtf8;
/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @param  string
 * @param  optional padding
 * @returns  hex representation of input string
 */
function fromAscii(stringValue) {
    var hex = '';
    for (var i = 0; i < stringValue.length; i++) {
        var code = stringValue.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? "0".concat(n) : n;
    }
    return "0x".concat(hex);
}
exports.fromAscii = fromAscii;
/**
 * Returns the keys from an array of objects.
 * @example
 * ```js
 * getKeys([{a: '1', b: '2'}, {a: '3', b: '4'}], 'a') => ['1', '3']
 *````
 * @param  params
 * @param  key
 * @param  allowEmpty
 * @returns output just a simple array of output keys
 */
function getKeys(params, key, allowEmpty) {
    if (!Array.isArray(params)) {
        throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof params));
    }
    if (typeof key !== 'string') {
        throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof params));
    }
    var result = [];
    for (var i = 0; i < params.length; i++) {
        var value = params[i][key];
        if (allowEmpty && !value) {
            value = '';
        }
        else if (typeof value !== 'string') {
            throw new Error("invalid abi - expected type 'string', received ".concat(typeof value));
        }
        result.push(value);
    }
    return result;
}
exports.getKeys = getKeys;
/**
 * Is the string a hex string.
 *
 * @param  value
 * @param  length
 * @returns  output the string is a hex string
 */
function isHexString(value, length) {
    if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/))
        return false;
    if (length && value.length !== 2 + 2 * length)
        return false;
    return true;
}
exports.isHexString = isHexString;


/***/ }),

/***/ 66527:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defineProperties = void 0;
var assert_1 = __importDefault(__webpack_require__(67594));
var internal_1 = __webpack_require__(84629);
var externals_1 = __webpack_require__(57643);
var bytes_1 = __webpack_require__(57347);
/**
 * Defines properties on a `Object`. It make the assumption that underlying data is binary.
 * @param self the `Object` to define properties on
 * @param fields an array fields to define. Fields can contain:
 * * `name` - the name of the properties
 * * `length` - the number of bytes the field can have
 * * `allowLess` - if the field can be less than the length
 * * `allowEmpty`
 * @param data data to be validated against the definitions
 * @deprecated
 */
var defineProperties = function (self, fields, data) {
    self.raw = [];
    self._fields = [];
    // attach the `toJSON`
    self.toJSON = function (label) {
        if (label === void 0) { label = false; }
        if (label) {
            var obj_1 = {};
            self._fields.forEach(function (field) {
                obj_1[field] = "0x".concat(self[field].toString('hex'));
            });
            return obj_1;
        }
        return (0, bytes_1.baToJSON)(self.raw);
    };
    self.serialize = function serialize() {
        return externals_1.rlp.encode(self.raw);
    };
    fields.forEach(function (field, i) {
        self._fields.push(field.name);
        function getter() {
            return self.raw[i];
        }
        function setter(v) {
            v = (0, bytes_1.toBuffer)(v);
            if (v.toString('hex') === '00' && !field.allowZero) {
                v = Buffer.allocUnsafe(0);
            }
            if (field.allowLess && field.length) {
                v = (0, bytes_1.unpadBuffer)(v);
                (0, assert_1.default)(field.length >= v.length, "The field ".concat(field.name, " must not have more ").concat(field.length, " bytes"));
            }
            else if (!(field.allowZero && v.length === 0) && field.length) {
                (0, assert_1.default)(field.length === v.length, "The field ".concat(field.name, " must have byte length of ").concat(field.length));
            }
            self.raw[i] = v;
        }
        Object.defineProperty(self, field.name, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter,
        });
        if (field.default) {
            self[field.name] = field.default;
        }
        // attach alias
        if (field.alias) {
            Object.defineProperty(self, field.alias, {
                enumerable: false,
                configurable: true,
                set: setter,
                get: getter,
            });
        }
    });
    // if the constuctor is passed data
    if (data) {
        if (typeof data === 'string') {
            data = Buffer.from((0, internal_1.stripHexPrefix)(data), 'hex');
        }
        if (Buffer.isBuffer(data)) {
            data = externals_1.rlp.decode(data);
        }
        if (Array.isArray(data)) {
            if (data.length > self._fields.length) {
                throw new Error('wrong number of fields in data');
            }
            // make sure all the items are buffers
            data.forEach(function (d, i) {
                self[self._fields[i]] = (0, bytes_1.toBuffer)(d);
            });
        }
        else if (typeof data === 'object') {
            var keys_1 = Object.keys(data);
            fields.forEach(function (field) {
                if (keys_1.indexOf(field.name) !== -1)
                    self[field.name] = data[field.name];
                if (keys_1.indexOf(field.alias) !== -1)
                    self[field.alias] = data[field.alias];
            });
        }
        else {
            throw new Error('invalid data');
        }
    }
};
exports.defineProperties = defineProperties;


/***/ }),

/***/ 63411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hashPersonalMessage = exports.isValidSignature = exports.fromRpcSig = exports.toCompactSig = exports.toRpcSig = exports.ecrecover = exports.ecsign = void 0;
var secp256k1_1 = __webpack_require__(73181);
var externals_1 = __webpack_require__(57643);
var bytes_1 = __webpack_require__(57347);
var hash_1 = __webpack_require__(47769);
var helpers_1 = __webpack_require__(45886);
var types_1 = __webpack_require__(18672);
function ecsign(msgHash, privateKey, chainId) {
    var _a = (0, secp256k1_1.ecdsaSign)(msgHash, privateKey), signature = _a.signature, recovery = _a.recid;
    var r = Buffer.from(signature.slice(0, 32));
    var s = Buffer.from(signature.slice(32, 64));
    if (!chainId || typeof chainId === 'number') {
        // return legacy type ECDSASignature (deprecated in favor of ECDSASignatureBuffer to handle large chainIds)
        if (chainId && !Number.isSafeInteger(chainId)) {
            throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
        }
        var v_1 = chainId ? recovery + (chainId * 2 + 35) : recovery + 27;
        return { r: r, s: s, v: v_1 };
    }
    var chainIdBN = (0, types_1.toType)(chainId, types_1.TypeOutput.BN);
    var v = chainIdBN.muln(2).addn(35).addn(recovery).toArrayLike(Buffer);
    return { r: r, s: s, v: v };
}
exports.ecsign = ecsign;
function calculateSigRecovery(v, chainId) {
    var vBN = (0, types_1.toType)(v, types_1.TypeOutput.BN);
    if (vBN.eqn(0) || vBN.eqn(1))
        return (0, types_1.toType)(v, types_1.TypeOutput.BN);
    if (!chainId) {
        return vBN.subn(27);
    }
    var chainIdBN = (0, types_1.toType)(chainId, types_1.TypeOutput.BN);
    return vBN.sub(chainIdBN.muln(2).addn(35));
}
function isValidSigRecovery(recovery) {
    var rec = new externals_1.BN(recovery);
    return rec.eqn(0) || rec.eqn(1);
}
/**
 * ECDSA public key recovery from signature.
 * NOTE: Accepts `v == 0 | v == 1` for EIP1559 transactions
 * @returns Recovered public key
 */
var ecrecover = function (msgHash, v, r, s, chainId) {
    var signature = Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32)], 64);
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    var senderPubKey = (0, secp256k1_1.ecdsaRecover)(signature, recovery.toNumber(), msgHash);
    return Buffer.from((0, secp256k1_1.publicKeyConvert)(senderPubKey, false).slice(1));
};
exports.ecrecover = ecrecover;
/**
 * Convert signature parameters into the format of `eth_sign` RPC method.
 * NOTE: Accepts `v == 0 | v == 1` for EIP1559 transactions
 * @returns Signature
 */
var toRpcSig = function (v, r, s, chainId) {
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32), (0, bytes_1.toBuffer)(v)]));
};
exports.toRpcSig = toRpcSig;
/**
 * Convert signature parameters into the format of Compact Signature Representation (EIP-2098).
 * NOTE: Accepts `v == 0 | v == 1` for EIP1559 transactions
 * @returns Signature
 */
var toCompactSig = function (v, r, s, chainId) {
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    var vn = (0, types_1.toType)(v, types_1.TypeOutput.Number);
    var ss = s;
    if ((vn > 28 && vn % 2 === 1) || vn === 1 || vn === 28) {
        ss = Buffer.from(s);
        ss[0] |= 0x80;
    }
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(ss, 32)]));
};
exports.toCompactSig = toCompactSig;
/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
 * NOTE: After EIP1559, `v` could be `0` or `1` but this function assumes
 * it's a signed message (EIP-191 or EIP-712) adding `27` at the end. Remove if needed.
 */
var fromRpcSig = function (sig) {
    var buf = (0, bytes_1.toBuffer)(sig);
    var r;
    var s;
    var v;
    if (buf.length >= 65) {
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = (0, bytes_1.bufferToInt)(buf.slice(64));
    }
    else if (buf.length === 64) {
        // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = (0, bytes_1.bufferToInt)(buf.slice(32, 33)) >> 7;
        s[0] &= 0x7f;
    }
    else {
        throw new Error('Invalid signature length');
    }
    // support both versions of `eth_sign` responses
    if (v < 27) {
        v += 27;
    }
    return {
        v: v,
        r: r,
        s: s,
    };
};
exports.fromRpcSig = fromRpcSig;
/**
 * Validate a ECDSA signature.
 * NOTE: Accepts `v == 0 | v == 1` for EIP1559 transactions
 * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
 */
var isValidSignature = function (v, r, s, homesteadOrLater, chainId) {
    if (homesteadOrLater === void 0) { homesteadOrLater = true; }
    var SECP256K1_N_DIV_2 = new externals_1.BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
    var SECP256K1_N = new externals_1.BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
    if (r.length !== 32 || s.length !== 32) {
        return false;
    }
    if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
        return false;
    }
    var rBN = new externals_1.BN(r);
    var sBN = new externals_1.BN(s);
    if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
        return false;
    }
    if (homesteadOrLater && sBN.cmp(SECP256K1_N_DIV_2) === 1) {
        return false;
    }
    return true;
};
exports.isValidSignature = isValidSignature;
/**
 * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
 * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
 * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
 * used to produce the signature.
 */
var hashPersonalMessage = function (message) {
    (0, helpers_1.assertIsBuffer)(message);
    var prefix = Buffer.from("\u0019Ethereum Signed Message:\n".concat(message.length), 'utf-8');
    return (0, hash_1.keccak)(Buffer.concat([prefix, message]));
};
exports.hashPersonalMessage = hashPersonalMessage;


/***/ }),

/***/ 18672:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toType = exports.TypeOutput = exports.bnToRlp = exports.bnToUnpaddedBuffer = exports.bnToHex = void 0;
var externals_1 = __webpack_require__(57643);
var internal_1 = __webpack_require__(84629);
var bytes_1 = __webpack_require__(57347);
/**
 * Convert BN to 0x-prefixed hex string.
 */
function bnToHex(value) {
    return "0x".concat(value.toString(16));
}
exports.bnToHex = bnToHex;
/**
 * Convert value from BN to an unpadded Buffer
 * (useful for RLP transport)
 * @param value value to convert
 */
function bnToUnpaddedBuffer(value) {
    // Using `bn.toArrayLike(Buffer)` instead of `bn.toBuffer()`
    // for compatibility with browserify and similar tools
    return (0, bytes_1.unpadBuffer)(value.toArrayLike(Buffer));
}
exports.bnToUnpaddedBuffer = bnToUnpaddedBuffer;
/**
 * Deprecated alias for {@link bnToUnpaddedBuffer}
 * @deprecated
 */
function bnToRlp(value) {
    return bnToUnpaddedBuffer(value);
}
exports.bnToRlp = bnToRlp;
/**
 * Type output options
 */
var TypeOutput;
(function (TypeOutput) {
    TypeOutput[TypeOutput["Number"] = 0] = "Number";
    TypeOutput[TypeOutput["BN"] = 1] = "BN";
    TypeOutput[TypeOutput["Buffer"] = 2] = "Buffer";
    TypeOutput[TypeOutput["PrefixedHexString"] = 3] = "PrefixedHexString";
})(TypeOutput = exports.TypeOutput || (exports.TypeOutput = {}));
function toType(input, outputType) {
    if (input === null) {
        return null;
    }
    if (input === undefined) {
        return undefined;
    }
    if (typeof input === 'string' && !(0, internal_1.isHexString)(input)) {
        throw new Error("A string must be provided with a 0x-prefix, given: ".concat(input));
    }
    else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
        throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }
    var output = (0, bytes_1.toBuffer)(input);
    if (outputType === TypeOutput.Buffer) {
        return output;
    }
    else if (outputType === TypeOutput.BN) {
        return new externals_1.BN(output);
    }
    else if (outputType === TypeOutput.Number) {
        var bn = new externals_1.BN(output);
        var max = new externals_1.BN(Number.MAX_SAFE_INTEGER.toString());
        if (bn.gt(max)) {
            throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
        }
        return bn.toNumber();
    }
    else {
        // outputType === TypeOutput.PrefixedHexString
        return "0x".concat(output.toString('hex'));
    }
}
exports.toType = toType;


/***/ })

}]);
//# sourceMappingURL=npm.ethereumjs-util.js.map