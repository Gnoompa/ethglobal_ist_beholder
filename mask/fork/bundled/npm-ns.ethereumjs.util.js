"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9749],{

/***/ 57383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountBodyToRLP = exports.accountBodyToSlim = exports.accountBodyFromSlim = exports.isZeroAddress = exports.zeroAddress = exports.importPublic = exports.privateToAddress = exports.privateToPublic = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isValidAddress = exports.Account = void 0;
const rlp_1 = __webpack_require__(59561);
const keccak_1 = __webpack_require__(6305);
const secp256k1_1 = __webpack_require__(69644);
const utils_1 = __webpack_require__(31679);
const bytes_1 = __webpack_require__(60979);
const constants_1 = __webpack_require__(64600);
const helpers_1 = __webpack_require__(33240);
const internal_1 = __webpack_require__(7300);
const _0n = BigInt(0);
class Account {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */
    constructor(nonce = _0n, balance = _0n, storageRoot = constants_1.KECCAK256_RLP, codeHash = constants_1.KECCAK256_NULL) {
        this.nonce = nonce;
        this.balance = balance;
        this.storageRoot = storageRoot;
        this.codeHash = codeHash;
        this._validate();
    }
    static fromAccountData(accountData) {
        const { nonce, balance, storageRoot, codeHash } = accountData;
        return new Account(nonce !== undefined ? (0, bytes_1.bufferToBigInt)((0, bytes_1.toBuffer)(nonce)) : undefined, balance !== undefined ? (0, bytes_1.bufferToBigInt)((0, bytes_1.toBuffer)(balance)) : undefined, storageRoot !== undefined ? (0, bytes_1.toBuffer)(storageRoot) : undefined, codeHash !== undefined ? (0, bytes_1.toBuffer)(codeHash) : undefined);
    }
    static fromRlpSerializedAccount(serialized) {
        const values = (0, bytes_1.arrToBufArr)(rlp_1.RLP.decode(Uint8Array.from(serialized)));
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized account input. Must be array');
        }
        return this.fromValuesArray(values);
    }
    static fromValuesArray(values) {
        const [nonce, balance, storageRoot, codeHash] = values;
        return new Account((0, bytes_1.bufferToBigInt)(nonce), (0, bytes_1.bufferToBigInt)(balance), storageRoot, codeHash);
    }
    _validate() {
        if (this.nonce < _0n) {
            throw new Error('nonce must be greater than zero');
        }
        if (this.balance < _0n) {
            throw new Error('balance must be greater than zero');
        }
        if (this.storageRoot.length !== 32) {
            throw new Error('storageRoot must have a length of 32');
        }
        if (this.codeHash.length !== 32) {
            throw new Error('codeHash must have a length of 32');
        }
    }
    /**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */
    raw() {
        return [
            (0, bytes_1.bigIntToUnpaddedBuffer)(this.nonce),
            (0, bytes_1.bigIntToUnpaddedBuffer)(this.balance),
            this.storageRoot,
            this.codeHash,
        ];
    }
    /**
     * Returns the RLP serialization of the account as a `Buffer`.
     */
    serialize() {
        return Buffer.from(rlp_1.RLP.encode((0, bytes_1.bufArrToArr)(this.raw())));
    }
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */
    isContract() {
        return !this.codeHash.equals(constants_1.KECCAK256_NULL);
    }
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */
    isEmpty() {
        return this.balance === _0n && this.nonce === _0n && this.codeHash.equals(constants_1.KECCAK256_NULL);
    }
}
exports.Account = Account;
/**
 * Checks if the address is a valid. Accepts checksummed addresses too.
 */
const isValidAddress = function (hexAddress) {
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
const toChecksumAddress = function (hexAddress, eip1191ChainId) {
    (0, helpers_1.assertIsHexString)(hexAddress);
    const address = (0, internal_1.stripHexPrefix)(hexAddress).toLowerCase();
    let prefix = '';
    if (eip1191ChainId !== undefined) {
        const chainId = (0, bytes_1.bufferToBigInt)((0, bytes_1.toBuffer)(eip1191ChainId));
        prefix = chainId.toString() + '0x';
    }
    const buf = Buffer.from(prefix + address, 'utf8');
    const hash = (0, utils_1.bytesToHex)((0, keccak_1.keccak256)(buf));
    let ret = '0x';
    for (let i = 0; i < address.length; i++) {
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
const isValidChecksumAddress = function (hexAddress, eip1191ChainId) {
    return (0, exports.isValidAddress)(hexAddress) && (0, exports.toChecksumAddress)(hexAddress, eip1191ChainId) === hexAddress;
};
exports.isValidChecksumAddress = isValidChecksumAddress;
/**
 * Generates an address of a newly created contract.
 * @param from The address which is creating this new address
 * @param nonce The nonce of the from account
 */
const generateAddress = function (from, nonce) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(nonce);
    if ((0, bytes_1.bufferToBigInt)(nonce) === BigInt(0)) {
        // in RLP we want to encode null in the case of zero nonce
        // read the RLP documentation for an answer if you dare
        return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, bytes_1.bufArrToArr)([from, null])))).slice(-20);
    }
    // Only take the lower 160bits of the hash
    return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, bytes_1.bufArrToArr)([from, nonce])))).slice(-20);
};
exports.generateAddress = generateAddress;
/**
 * Generates an address for a contract created using CREATE2.
 * @param from The address which is creating this new address
 * @param salt A salt
 * @param initCode The init code of the contract being created
 */
const generateAddress2 = function (from, salt, initCode) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(salt);
    (0, helpers_1.assertIsBuffer)(initCode);
    if (from.length !== 20) {
        throw new Error('Expected from to be of length 20');
    }
    if (salt.length !== 32) {
        throw new Error('Expected salt to be of length 32');
    }
    const address = (0, keccak_1.keccak256)(Buffer.concat([Buffer.from('ff', 'hex'), from, salt, (0, keccak_1.keccak256)(initCode)]));
    return (0, bytes_1.toBuffer)(address).slice(-20);
};
exports.generateAddress2 = generateAddress2;
/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 */
const isValidPrivate = function (privateKey) {
    return secp256k1_1.utils.isValidPrivateKey(privateKey);
};
exports.isValidPrivate = isValidPrivate;
/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
const isValidPublic = function (publicKey, sanitize = false) {
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length === 64) {
        // Convert to SEC1 for secp256k1
        // Automatically checks whether point is on curve
        try {
            secp256k1_1.Point.fromHex(Buffer.concat([Buffer.from([4]), publicKey]));
            return true;
        }
        catch (e) {
            return false;
        }
    }
    if (!sanitize) {
        return false;
    }
    try {
        secp256k1_1.Point.fromHex(publicKey);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isValidPublic = isValidPublic;
/**
 * Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
const pubToAddress = function (pubKey, sanitize = false) {
    (0, helpers_1.assertIsBuffer)(pubKey);
    if (sanitize && pubKey.length !== 64) {
        pubKey = Buffer.from(secp256k1_1.Point.fromHex(pubKey).toRawBytes(false).slice(1));
    }
    if (pubKey.length !== 64) {
        throw new Error('Expected pubKey to be of length 64');
    }
    // Only take the lower 160bits of the hash
    return Buffer.from((0, keccak_1.keccak256)(pubKey)).slice(-20);
};
exports.pubToAddress = pubToAddress;
exports.publicToAddress = exports.pubToAddress;
/**
 * Returns the ethereum public key of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
const privateToPublic = function (privateKey) {
    (0, helpers_1.assertIsBuffer)(privateKey);
    // skip the type flag and use the X, Y points
    return Buffer.from(secp256k1_1.Point.fromPrivateKey(privateKey).toRawBytes(false).slice(1));
};
exports.privateToPublic = privateToPublic;
/**
 * Returns the ethereum address of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
const privateToAddress = function (privateKey) {
    return (0, exports.publicToAddress)((0, exports.privateToPublic)(privateKey));
};
exports.privateToAddress = privateToAddress;
/**
 * Converts a public key to the Ethereum format.
 */
const importPublic = function (publicKey) {
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length !== 64) {
        publicKey = Buffer.from(secp256k1_1.Point.fromHex(publicKey).toRawBytes(false).slice(1));
    }
    return publicKey;
};
exports.importPublic = importPublic;
/**
 * Returns the zero address.
 */
const zeroAddress = function () {
    const addressLength = 20;
    const addr = (0, bytes_1.zeros)(addressLength);
    return (0, bytes_1.bufferToHex)(addr);
};
exports.zeroAddress = zeroAddress;
/**
 * Checks if a given address is the zero address.
 */
const isZeroAddress = function (hexAddress) {
    try {
        (0, helpers_1.assertIsString)(hexAddress);
    }
    catch (e) {
        return false;
    }
    const zeroAddr = (0, exports.zeroAddress)();
    return zeroAddr === hexAddress;
};
exports.isZeroAddress = isZeroAddress;
function accountBodyFromSlim(body) {
    const [nonce, balance, storageRoot, codeHash] = body;
    return [
        nonce,
        balance,
        (0, bytes_1.arrToBufArr)(storageRoot).length === 0 ? constants_1.KECCAK256_RLP : storageRoot,
        (0, bytes_1.arrToBufArr)(codeHash).length === 0 ? constants_1.KECCAK256_NULL : codeHash,
    ];
}
exports.accountBodyFromSlim = accountBodyFromSlim;
const emptyUint8Arr = new Uint8Array(0);
function accountBodyToSlim(body) {
    const [nonce, balance, storageRoot, codeHash] = body;
    return [
        nonce,
        balance,
        (0, bytes_1.arrToBufArr)(storageRoot).equals(constants_1.KECCAK256_RLP) ? emptyUint8Arr : storageRoot,
        (0, bytes_1.arrToBufArr)(codeHash).equals(constants_1.KECCAK256_NULL) ? emptyUint8Arr : codeHash,
    ];
}
exports.accountBodyToSlim = accountBodyToSlim;
/**
 * Converts a slim account (per snap protocol spec) to the RLP encoded version of the account
 * @param body Array of 4 Buffer-like items to represent the account
 * @returns RLP encoded version of the account
 */
function accountBodyToRLP(body, couldBeSlim = true) {
    const accountBody = couldBeSlim ? accountBodyFromSlim(body) : body;
    return (0, bytes_1.arrToBufArr)(rlp_1.RLP.encode(accountBody));
}
exports.accountBodyToRLP = accountBodyToRLP;


/***/ }),

/***/ 78983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Address = void 0;
const account_1 = __webpack_require__(57383);
const bytes_1 = __webpack_require__(60979);
/**
 * Handling and generating Ethereum addresses
 */
class Address {
    constructor(buf) {
        if (buf.length !== 20) {
            throw new Error('Invalid address length');
        }
        this.buf = buf;
    }
    /**
     * Returns the zero address.
     */
    static zero() {
        return new Address((0, bytes_1.zeros)(20));
    }
    /**
     * Returns an Address object from a hex-encoded string.
     * @param str - Hex-encoded address
     */
    static fromString(str) {
        if (!(0, account_1.isValidAddress)(str)) {
            throw new Error('Invalid address');
        }
        return new Address((0, bytes_1.toBuffer)(str));
    }
    /**
     * Returns an address for a given public key.
     * @param pubKey The two points of an uncompressed key
     */
    static fromPublicKey(pubKey) {
        if (!Buffer.isBuffer(pubKey)) {
            throw new Error('Public key should be Buffer');
        }
        const buf = (0, account_1.pubToAddress)(pubKey);
        return new Address(buf);
    }
    /**
     * Returns an address for a given private key.
     * @param privateKey A private key must be 256 bits wide
     */
    static fromPrivateKey(privateKey) {
        if (!Buffer.isBuffer(privateKey)) {
            throw new Error('Private key should be Buffer');
        }
        const buf = (0, account_1.privateToAddress)(privateKey);
        return new Address(buf);
    }
    /**
     * Generates an address for a newly created contract.
     * @param from The address which is creating this new address
     * @param nonce The nonce of the from account
     */
    static generate(from, nonce) {
        if (typeof nonce !== 'bigint') {
            throw new Error('Expected nonce to be a bigint');
        }
        return new Address((0, account_1.generateAddress)(from.buf, (0, bytes_1.bigIntToBuffer)(nonce)));
    }
    /**
     * Generates an address for a contract created using CREATE2.
     * @param from The address which is creating this new address
     * @param salt A salt
     * @param initCode The init code of the contract being created
     */
    static generate2(from, salt, initCode) {
        if (!Buffer.isBuffer(salt)) {
            throw new Error('Expected salt to be a Buffer');
        }
        if (!Buffer.isBuffer(initCode)) {
            throw new Error('Expected initCode to be a Buffer');
        }
        return new Address((0, account_1.generateAddress2)(from.buf, salt, initCode));
    }
    /**
     * Is address equal to another.
     */
    equals(address) {
        return this.buf.equals(address.buf);
    }
    /**
     * Is address zero.
     */
    isZero() {
        return this.equals(Address.zero());
    }
    /**
     * True if address is in the address range defined
     * by EIP-1352
     */
    isPrecompileOrSystemAddress() {
        const address = (0, bytes_1.bufferToBigInt)(this.buf);
        const rangeMin = BigInt(0);
        const rangeMax = BigInt('0xffff');
        return address >= rangeMin && address <= rangeMax;
    }
    /**
     * Returns hex encoding of address.
     */
    toString() {
        return '0x' + this.buf.toString('hex');
    }
    /**
     * Returns Buffer representation of address.
     */
    toBuffer() {
        return Buffer.from(this.buf);
    }
}
exports.Address = Address;


/***/ }),

/***/ 50627:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Ported to Typescript from original implementation below:
 * https://github.com/ahultgren/async-eventemitter -- MIT licensed
 *
 * Type Definitions based on work by: patarapolw <https://github.com/patarapolw> -- MIT licensed
 * that was contributed to Definitely Typed below:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/async-eventemitter
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncEventEmitter = void 0;
const events_1 = __webpack_require__(58470);
async function runInSeries(context, tasks, data) {
    let error;
    for await (const task of tasks) {
        try {
            if (task.length < 2) {
                //sync
                task.call(context, data);
            }
            else {
                await new Promise((resolve, reject) => {
                    task.call(context, data, (error) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve();
                        }
                    });
                });
            }
        }
        catch (e) {
            error = e;
        }
    }
    if (error) {
        throw error;
    }
}
class AsyncEventEmitter extends events_1.EventEmitter {
    emit(event, ...args) {
        let [data, callback] = args;
        const self = this;
        let listeners = self._events[event] ?? [];
        // Optional data argument
        if (callback === undefined && typeof data === 'function') {
            callback = data;
            data = undefined;
        }
        // Special treatment of internal newListener and removeListener events
        if (event === 'newListener' || event === 'removeListener') {
            data = {
                event: data,
                fn: callback,
            };
            callback = undefined;
        }
        // A single listener is just a function not an array...
        listeners = Array.isArray(listeners) ? listeners : [listeners];
        runInSeries(self, listeners.slice(), data).then(callback).catch(callback);
        return self.listenerCount(event) > 0;
    }
    once(event, listener) {
        const self = this;
        let g;
        if (typeof listener !== 'function') {
            throw new TypeError('listener must be a function');
        }
        // Hack to support set arity
        if (listener.length >= 2) {
            g = function (e, next) {
                self.removeListener(event, g);
                void listener(e, next);
            };
        }
        else {
            g = function (e) {
                self.removeListener(event, g);
                void listener(e, g);
            };
        }
        self.on(event, g);
        return self;
    }
    first(event, listener) {
        let listeners = this._events[event] ?? [];
        // Contract
        if (typeof listener !== 'function') {
            throw new TypeError('listener must be a function');
        }
        // Listeners are not always an array
        if (!Array.isArray(listeners)) {
            ;
            this._events[event] = listeners = [listeners];
        }
        listeners.unshift(listener);
        return this;
    }
    before(event, target, listener) {
        return this.beforeOrAfter(event, target, listener);
    }
    after(event, target, listener) {
        return this.beforeOrAfter(event, target, listener, 'after');
    }
    beforeOrAfter(event, target, listener, beforeOrAfter) {
        let listeners = this._events[event] ?? [];
        let i;
        let index;
        const add = beforeOrAfter === 'after' ? 1 : 0;
        // Contract
        if (typeof listener !== 'function') {
            throw new TypeError('listener must be a function');
        }
        if (typeof target !== 'function') {
            throw new TypeError('target must be a function');
        }
        // Listeners are not always an array
        if (!Array.isArray(listeners)) {
            ;
            this._events[event] = listeners = [listeners];
        }
        index = listeners.length;
        for (i = listeners.length; i--;) {
            if (listeners[i] === target) {
                index = i + add;
                break;
            }
        }
        listeners.splice(index, 0, listener);
        return this;
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    addListener(event, listener) {
        return super.addListener(event, listener);
    }
    prependListener(event, listener) {
        return super.prependListener(event, listener);
    }
    prependOnceListener(event, listener) {
        return super.prependOnceListener(event, listener);
    }
    removeAllListeners(event) {
        return super.removeAllListeners(event);
    }
    removeListener(event, listener) {
        return super.removeListener(event, listener);
    }
    eventNames() {
        return super.eventNames();
    }
    listeners(event) {
        return super.listeners(event);
    }
    listenerCount(event) {
        return super.listenerCount(event);
    }
    getMaxListeners() {
        return super.getMaxListeners();
    }
    setMaxListeners(maxListeners) {
        return super.setMaxListeners(maxListeners);
    }
}
exports.AsyncEventEmitter = AsyncEventEmitter;


/***/ }),

/***/ 60979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.intToUnpaddedBuffer = exports.bigIntToUnpaddedBuffer = exports.bigIntToHex = exports.bufArrToArr = exports.arrToBufArr = exports.validateNoLeadingZeroes = exports.baToJSON = exports.toUtf8 = exports.short = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToInt = exports.bigIntToBuffer = exports.bufferToBigInt = exports.bufferToHex = exports.toBuffer = exports.unpadHexString = exports.unpadArray = exports.unpadBuffer = exports.setLengthRight = exports.setLengthLeft = exports.zeros = exports.intToBuffer = exports.intToHex = void 0;
const helpers_1 = __webpack_require__(33240);
const internal_1 = __webpack_require__(7300);
/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
const intToHex = function (i) {
    if (!Number.isSafeInteger(i) || i < 0) {
        throw new Error(`Received an invalid integer type: ${i}`);
    }
    return `0x${i.toString(16)}`;
};
exports.intToHex = intToHex;
/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
const intToBuffer = function (i) {
    const hex = (0, exports.intToHex)(i);
    return Buffer.from((0, internal_1.padToEven)(hex.slice(2)), 'hex');
};
exports.intToBuffer = intToBuffer;
/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
const zeros = function (bytes) {
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
const setLength = function (msg, length, right) {
    const buf = (0, exports.zeros)(length);
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
const setLengthLeft = function (msg, length) {
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
const setLengthRight = function (msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, true);
};
exports.setLengthRight = setLengthRight;
/**
 * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
 * @param a (Buffer|Array|String)
 * @return (Buffer|Array|String)
 */
const stripZeros = function (a) {
    let first = a[0];
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
const unpadBuffer = function (a) {
    (0, helpers_1.assertIsBuffer)(a);
    return stripZeros(a);
};
exports.unpadBuffer = unpadBuffer;
/**
 * Trims leading zeros from an `Array` (of numbers).
 * @param a (number[])
 * @return (number[])
 */
const unpadArray = function (a) {
    (0, helpers_1.assertIsArray)(a);
    return stripZeros(a);
};
exports.unpadArray = unpadArray;
/**
 * Trims leading zeros from a hex-prefixed `String`.
 * @param a (String)
 * @return (String)
 */
const unpadHexString = function (a) {
    (0, helpers_1.assertIsHexString)(a);
    a = (0, internal_1.stripHexPrefix)(a);
    return ('0x' + stripZeros(a));
};
exports.unpadHexString = unpadHexString;
/**
 * Attempts to turn a value into a `Buffer`.
 * Inputs supported: `Buffer`, `String` (hex-prefixed), `Number`, null/undefined, `BigInt` and other objects
 * with a `toArray()` or `toBuffer()` method.
 * @param v the value
 */
const toBuffer = function (v) {
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
            throw new Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${v}`);
        }
        return Buffer.from((0, internal_1.padToEven)((0, internal_1.stripHexPrefix)(v)), 'hex');
    }
    if (typeof v === 'number') {
        return (0, exports.intToBuffer)(v);
    }
    if (typeof v === 'bigint') {
        if (v < BigInt(0)) {
            throw new Error(`Cannot convert negative bigint to buffer. Given: ${v}`);
        }
        let n = v.toString(16);
        if (n.length % 2)
            n = '0' + n;
        return Buffer.from(n, 'hex');
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
 * Converts a `Buffer` into a `0x`-prefixed hex `String`.
 * @param buf `Buffer` object to convert
 */
const bufferToHex = function (buf) {
    buf = (0, exports.toBuffer)(buf);
    return '0x' + buf.toString('hex');
};
exports.bufferToHex = bufferToHex;
/**
 * Converts a {@link Buffer} to a {@link bigint}
 */
function bufferToBigInt(buf) {
    const hex = (0, exports.bufferToHex)(buf);
    if (hex === '0x') {
        return BigInt(0);
    }
    return BigInt(hex);
}
exports.bufferToBigInt = bufferToBigInt;
/**
 * Converts a {@link bigint} to a {@link Buffer}
 */
function bigIntToBuffer(num) {
    return (0, exports.toBuffer)('0x' + num.toString(16));
}
exports.bigIntToBuffer = bigIntToBuffer;
/**
 * Converts a `Buffer` to a `Number`.
 * @param buf `Buffer` object to convert
 * @throws If the input number exceeds 53 bits.
 */
const bufferToInt = function (buf) {
    const res = Number(bufferToBigInt(buf));
    if (!Number.isSafeInteger(res))
        throw new Error('Number exceeds 53 bits');
    return res;
};
exports.bufferToInt = bufferToInt;
/**
 * Interprets a `Buffer` as a signed integer and returns a `BigInt`. Assumes 256-bit numbers.
 * @param num Signed integer value
 */
const fromSigned = function (num) {
    return BigInt.asIntN(256, bufferToBigInt(num));
};
exports.fromSigned = fromSigned;
/**
 * Converts a `BigInt` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param num
 */
const toUnsigned = function (num) {
    return bigIntToBuffer(BigInt.asUintN(256, num));
};
exports.toUnsigned = toUnsigned;
/**
 * Adds "0x" to a given `String` if it does not already start with "0x".
 */
const addHexPrefix = function (str) {
    if (typeof str !== 'string') {
        return str;
    }
    return (0, internal_1.isHexPrefixed)(str) ? str : '0x' + str;
};
exports.addHexPrefix = addHexPrefix;
/**
 * Shortens a string  or buffer's hex string representation to maxLength (default 50).
 *
 * Examples:
 *
 * Input:  '657468657265756d000000000000000000000000000000000000000000000000'
 * Output: '657468657265756d0000000000000000000000000000000000…'
 */
function short(buffer, maxLength = 50) {
    const bufferStr = Buffer.isBuffer(buffer) ? buffer.toString('hex') : buffer;
    if (bufferStr.length <= maxLength) {
        return bufferStr;
    }
    return bufferStr.slice(0, maxLength) + '…';
}
exports.short = short;
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
const toUtf8 = function (hex) {
    const zerosRegexp = /^(00)+|(00)+$/g;
    hex = (0, internal_1.stripHexPrefix)(hex);
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid non-even hex string input for toUtf8() provided');
    }
    const bufferVal = Buffer.from(hex.replace(zerosRegexp, ''), 'hex');
    return bufferVal.toString('utf8');
};
exports.toUtf8 = toUtf8;
/**
 * Converts a `Buffer` or `Array` to JSON.
 * @param ba (Buffer|Array)
 * @return (Array|String|null)
 */
const baToJSON = function (ba) {
    if (Buffer.isBuffer(ba)) {
        return `0x${ba.toString('hex')}`;
    }
    else if (ba instanceof Array) {
        const array = [];
        for (let i = 0; i < ba.length; i++) {
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
const validateNoLeadingZeroes = function (values) {
    for (const [k, v] of Object.entries(values)) {
        if (v !== undefined && v.length > 0 && v[0] === 0) {
            throw new Error(`${k} cannot have leading zeroes, received: ${v.toString('hex')}`);
        }
    }
};
exports.validateNoLeadingZeroes = validateNoLeadingZeroes;
function arrToBufArr(arr) {
    if (!Array.isArray(arr)) {
        return Buffer.from(arr);
    }
    return arr.map((a) => arrToBufArr(a));
}
exports.arrToBufArr = arrToBufArr;
function bufArrToArr(arr) {
    if (!Array.isArray(arr)) {
        return Uint8Array.from(arr ?? []);
    }
    return arr.map((a) => bufArrToArr(a));
}
exports.bufArrToArr = bufArrToArr;
/**
 * Converts a {@link bigint} to a `0x` prefixed hex string
 */
const bigIntToHex = (num) => {
    return '0x' + num.toString(16);
};
exports.bigIntToHex = bigIntToHex;
/**
 * Convert value from bigint to an unpadded Buffer
 * (useful for RLP transport)
 * @param value value to convert
 */
function bigIntToUnpaddedBuffer(value) {
    return (0, exports.unpadBuffer)(bigIntToBuffer(value));
}
exports.bigIntToUnpaddedBuffer = bigIntToUnpaddedBuffer;
function intToUnpaddedBuffer(value) {
    return (0, exports.unpadBuffer)((0, exports.intToBuffer)(value));
}
exports.intToUnpaddedBuffer = intToUnpaddedBuffer;


/***/ }),

/***/ 64600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_WITHDRAWALS_PER_PAYLOAD = exports.RLP_EMPTY_STRING = exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.SECP256K1_ORDER_DIV_2 = exports.SECP256K1_ORDER = exports.MAX_INTEGER_BIGINT = exports.MAX_INTEGER = exports.MAX_UINT64 = void 0;
const buffer_1 = __webpack_require__(7661);
const secp256k1_1 = __webpack_require__(69644);
/**
 * 2^64-1
 */
exports.MAX_UINT64 = BigInt('0xffffffffffffffff');
/**
 * The max integer that the evm can handle (2^256-1)
 */
exports.MAX_INTEGER = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
/**
 * The max integer that the evm can handle (2^256-1) as a bigint
 * 2^256-1 equals to 340282366920938463463374607431768211455
 * We use literal value instead of calculated value for compatibility issue.
 */
exports.MAX_INTEGER_BIGINT = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
exports.SECP256K1_ORDER = secp256k1_1.CURVE.n;
exports.SECP256K1_ORDER_DIV_2 = secp256k1_1.CURVE.n / BigInt(2);
/**
 * 2^256
 */
exports.TWO_POW256 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
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
/**
 *  RLP encoded empty string
 */
exports.RLP_EMPTY_STRING = buffer_1.Buffer.from([0x80]);
exports.MAX_WITHDRAWALS_PER_PAYLOAD = 16;


/***/ }),

/***/ 33240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertIsString = exports.assertIsArray = exports.assertIsBuffer = exports.assertIsHexString = void 0;
const internal_1 = __webpack_require__(7300);
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
const assertIsHexString = function (input) {
    if (!(0, internal_1.isHexString)(input)) {
        const msg = `This method only supports 0x-prefixed hex strings but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsHexString = assertIsHexString;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
const assertIsBuffer = function (input) {
    if (!Buffer.isBuffer(input)) {
        const msg = `This method only supports Buffer but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsBuffer = assertIsBuffer;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
const assertIsArray = function (input) {
    if (!Array.isArray(input)) {
        const msg = `This method only supports number arrays but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsArray = assertIsArray;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
const assertIsString = function (input) {
    if (typeof input !== 'string') {
        const msg = `This method only supports strings but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsString = assertIsString;


/***/ }),

/***/ 6509:
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
exports.toAscii = exports.stripHexPrefix = exports.padToEven = exports.isHexString = exports.isHexPrefixed = exports.getKeys = exports.getBinarySize = exports.fromUtf8 = exports.fromAscii = exports.arrayContainsArray = exports.ssz = void 0;
/**
 * Constants
 */
__exportStar(__webpack_require__(64600), exports);
/**
 * Units helpers
 */
__exportStar(__webpack_require__(85712), exports);
/**
 * Account class and helper functions
 */
__exportStar(__webpack_require__(57383), exports);
/**
 * Address type
 */
__exportStar(__webpack_require__(78983), exports);
/**
 * Withdrawal type
 */
__exportStar(__webpack_require__(82233), exports);
/**
 * ECDSA signature
 */
__exportStar(__webpack_require__(99643), exports);
/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */
__exportStar(__webpack_require__(60979), exports);
/**
 * SSZ containers
 */
exports.ssz = __webpack_require__(50687);
/**
 * Helpful TypeScript types
 */
__exportStar(__webpack_require__(15581), exports);
/**
 * Export ethjs-util methods
 */
__exportStar(__webpack_require__(50627), exports);
var internal_1 = __webpack_require__(7300);
Object.defineProperty(exports, "arrayContainsArray", ({ enumerable: true, get: function () { return internal_1.arrayContainsArray; } }));
Object.defineProperty(exports, "fromAscii", ({ enumerable: true, get: function () { return internal_1.fromAscii; } }));
Object.defineProperty(exports, "fromUtf8", ({ enumerable: true, get: function () { return internal_1.fromUtf8; } }));
Object.defineProperty(exports, "getBinarySize", ({ enumerable: true, get: function () { return internal_1.getBinarySize; } }));
Object.defineProperty(exports, "getKeys", ({ enumerable: true, get: function () { return internal_1.getKeys; } }));
Object.defineProperty(exports, "isHexPrefixed", ({ enumerable: true, get: function () { return internal_1.isHexPrefixed; } }));
Object.defineProperty(exports, "isHexString", ({ enumerable: true, get: function () { return internal_1.isHexString; } }));
Object.defineProperty(exports, "padToEven", ({ enumerable: true, get: function () { return internal_1.padToEven; } }));
Object.defineProperty(exports, "stripHexPrefix", ({ enumerable: true, get: function () { return internal_1.stripHexPrefix; } }));
Object.defineProperty(exports, "toAscii", ({ enumerable: true, get: function () { return internal_1.toAscii; } }));
__exportStar(__webpack_require__(32013), exports);


/***/ }),

/***/ 7300:
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
        throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof str}`);
    }
    return str[0] === '0' && str[1] === 'x';
}
exports.isHexPrefixed = isHexPrefixed;
/**
 * Removes '0x' from a given `String` if present
 * @param str the string value
 * @returns the string without 0x prefix
 */
const stripHexPrefix = (str) => {
    if (typeof str !== 'string')
        throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);
    return isHexPrefixed(str) ? str.slice(2) : str;
};
exports.stripHexPrefix = stripHexPrefix;
/**
 * Pads a `String` to have an even length
 * @param value
 * @return output
 */
function padToEven(value) {
    let a = value;
    if (typeof a !== 'string') {
        throw new Error(`[padToEven] value must be type 'string', received ${typeof a}`);
    }
    if (a.length % 2)
        a = `0${a}`;
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
        throw new Error(`[getBinarySize] method requires input type 'string', received ${typeof str}`);
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
        throw new Error(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof superset}'`);
    }
    if (Array.isArray(subset) !== true) {
        throw new Error(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof subset}'`);
    }
    return subset[some === true ? 'some' : 'every']((value) => superset.indexOf(value) >= 0);
}
exports.arrayContainsArray = arrayContainsArray;
/**
 * Should be called to get ascii from its hex representation
 *
 * @param string in hex
 * @returns ascii string representation of hex value
 */
function toAscii(hex) {
    let str = '';
    let i = 0;
    const l = hex.length;
    if (hex.substring(0, 2) === '0x')
        i = 2;
    for (; i < l; i += 2) {
        const code = parseInt(hex.substr(i, 2), 16);
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
    const str = Buffer.from(stringValue, 'utf8');
    return `0x${padToEven(str.toString('hex')).replace(/^0+|0+$/g, '')}`;
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
    let hex = '';
    for (let i = 0; i < stringValue.length; i++) {
        const code = stringValue.charCodeAt(i);
        const n = code.toString(16);
        hex += n.length < 2 ? `0${n}` : n;
    }
    return `0x${hex}`;
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
        throw new Error(`[getKeys] method expects input 'params' to be an array, got ${typeof params}`);
    }
    if (typeof key !== 'string') {
        throw new Error(`[getKeys] method expects input 'key' to be type 'string', got ${typeof params}`);
    }
    const result = [];
    for (let i = 0; i < params.length; i++) {
        let value = params[i][key];
        if (allowEmpty === true && !value) {
            value = '';
        }
        else if (typeof value !== 'string') {
            throw new Error(`invalid abi - expected type 'string', received ${typeof value}`);
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
    if (typeof length !== 'undefined' && length > 0 && value.length !== 2 + 2 * length)
        return false;
    return true;
}
exports.isHexString = isHexString;


/***/ }),

/***/ 32013:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Lock = void 0;
// Based on https://github.com/jsoendermann/semaphore-async-await/blob/master/src/Semaphore.ts
class Lock {
    constructor() {
        this.permits = 1;
        this.promiseResolverQueue = [];
    }
    /**
     * Returns a promise used to wait for a permit to become available. This method should be awaited on.
     * @returns  A promise that gets resolved when execution is allowed to proceed.
     */
    async acquire() {
        if (this.permits > 0) {
            this.permits -= 1;
            return Promise.resolve(true);
        }
        // If there is no permit available, we return a promise that resolves once the semaphore gets
        // signaled enough times that permits is equal to one.
        return new Promise((resolver) => this.promiseResolverQueue.push(resolver));
    }
    /**
     * Increases the number of permits by one. If there are other functions waiting, one of them will
     * continue to execute in a future iteration of the event loop.
     */
    release() {
        this.permits += 1;
        if (this.permits > 1 && this.promiseResolverQueue.length > 0) {
            // eslint-disable-next-line no-console
            console.warn('Lock.permits should never be > 0 when there is someone waiting.');
        }
        else if (this.permits === 1 && this.promiseResolverQueue.length > 0) {
            // If there is someone else waiting, immediately consume the permit that was released
            // at the beginning of this function and let the waiting function resume.
            this.permits -= 1;
            const nextResolver = this.promiseResolverQueue.shift();
            if (nextResolver) {
                nextResolver(true);
            }
        }
    }
}
exports.Lock = Lock;


/***/ }),

/***/ 99643:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hashPersonalMessage = exports.isValidSignature = exports.fromRpcSig = exports.toCompactSig = exports.toRpcSig = exports.ecrecover = exports.ecsign = void 0;
const keccak_1 = __webpack_require__(6305);
const secp256k1_1 = __webpack_require__(69644);
const bytes_1 = __webpack_require__(60979);
const constants_1 = __webpack_require__(64600);
const helpers_1 = __webpack_require__(33240);
/**
 * Returns the ECDSA signature of a message hash.
 *
 * If `chainId` is provided assume an EIP-155-style signature and calculate the `v` value
 * accordingly, otherwise return a "static" `v` just derived from the `recovery` bit
 */
function ecsign(msgHash, privateKey, chainId) {
    const [signature, recovery] = (0, secp256k1_1.signSync)(msgHash, privateKey, { recovered: true, der: false });
    const r = Buffer.from(signature.slice(0, 32));
    const s = Buffer.from(signature.slice(32, 64));
    const v = chainId === undefined
        ? BigInt(recovery + 27)
        : BigInt(recovery + 35) + BigInt(chainId) * BigInt(2);
    return { r, s, v };
}
exports.ecsign = ecsign;
function calculateSigRecovery(v, chainId) {
    if (v === BigInt(0) || v === BigInt(1))
        return v;
    if (chainId === undefined) {
        return v - BigInt(27);
    }
    return v - (chainId * BigInt(2) + BigInt(35));
}
function isValidSigRecovery(recovery) {
    return recovery === BigInt(0) || recovery === BigInt(1);
}
/**
 * ECDSA public key recovery from signature.
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @returns Recovered public key
 */
const ecrecover = function (msgHash, v, r, s, chainId) {
    const signature = Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32)], 64);
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    const senderPubKey = (0, secp256k1_1.recoverPublicKey)(msgHash, signature, Number(recovery));
    return Buffer.from(senderPubKey.slice(1));
};
exports.ecrecover = ecrecover;
/**
 * Convert signature parameters into the format of `eth_sign` RPC method.
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @returns Signature
 */
const toRpcSig = function (v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32), (0, bytes_1.toBuffer)(v)]));
};
exports.toRpcSig = toRpcSig;
/**
 * Convert signature parameters into the format of Compact Signature Representation (EIP-2098).
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @returns Signature
 */
const toCompactSig = function (v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    let ss = s;
    if ((v > BigInt(28) && v % BigInt(2) === BigInt(1)) || v === BigInt(1) || v === BigInt(28)) {
        ss = Buffer.from(s);
        ss[0] |= 0x80;
    }
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(ss, 32)]));
};
exports.toCompactSig = toCompactSig;
/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 *
 * NOTE: For an extracted `v` value < 27 (see Geth bug https://github.com/ethereum/go-ethereum/issues/2053)
 * `v + 27` is returned for the `v` value
 * NOTE: After EIP1559, `v` could be `0` or `1` but this function assumes
 * it's a signed message (EIP-191 or EIP-712) adding `27` at the end. Remove if needed.
 */
const fromRpcSig = function (sig) {
    const buf = (0, bytes_1.toBuffer)(sig);
    let r;
    let s;
    let v;
    if (buf.length >= 65) {
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = (0, bytes_1.bufferToBigInt)(buf.slice(64));
    }
    else if (buf.length === 64) {
        // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = BigInt((0, bytes_1.bufferToInt)(buf.slice(32, 33)) >> 7);
        s[0] &= 0x7f;
    }
    else {
        throw new Error('Invalid signature length');
    }
    // support both versions of `eth_sign` responses
    if (v < 27) {
        v = v + BigInt(27);
    }
    return {
        v,
        r,
        s,
    };
};
exports.fromRpcSig = fromRpcSig;
/**
 * Validate a ECDSA signature.
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
 */
const isValidSignature = function (v, r, s, homesteadOrLater = true, chainId) {
    if (r.length !== 32 || s.length !== 32) {
        return false;
    }
    if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
        return false;
    }
    const rBigInt = (0, bytes_1.bufferToBigInt)(r);
    const sBigInt = (0, bytes_1.bufferToBigInt)(s);
    if (rBigInt === BigInt(0) ||
        rBigInt >= constants_1.SECP256K1_ORDER ||
        sBigInt === BigInt(0) ||
        sBigInt >= constants_1.SECP256K1_ORDER) {
        return false;
    }
    if (homesteadOrLater && sBigInt >= constants_1.SECP256K1_ORDER_DIV_2) {
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
const hashPersonalMessage = function (message) {
    (0, helpers_1.assertIsBuffer)(message);
    const prefix = Buffer.from(`\u0019Ethereum Signed Message:\n${message.length}`, 'utf-8');
    return Buffer.from((0, keccak_1.keccak256)(Buffer.concat([prefix, message])));
};
exports.hashPersonalMessage = hashPersonalMessage;


/***/ }),

/***/ 50687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Withdrawals = exports.Withdrawal = exports.Bytes20 = exports.UintBigInt64 = exports.UintNum64 = void 0;
const ssz_1 = __webpack_require__(97902);
const constants_1 = __webpack_require__(64600);
exports.UintNum64 = new ssz_1.UintNumberType(8);
exports.UintBigInt64 = new ssz_1.UintBigintType(8);
exports.Bytes20 = new ssz_1.ByteVectorType(20);
exports.Withdrawal = new ssz_1.ContainerType({
    index: exports.UintBigInt64,
    validatorIndex: exports.UintBigInt64,
    address: exports.Bytes20,
    amount: exports.UintBigInt64,
}, { typeName: 'Withdrawal', jsonCase: 'eth2' });
exports.Withdrawals = new ssz_1.ListCompositeType(exports.Withdrawal, constants_1.MAX_WITHDRAWALS_PER_PAYLOAD);


/***/ }),

/***/ 15581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toType = exports.TypeOutput = void 0;
const bytes_1 = __webpack_require__(60979);
const internal_1 = __webpack_require__(7300);
/**
 * Type output options
 */
var TypeOutput;
(function (TypeOutput) {
    TypeOutput[TypeOutput["Number"] = 0] = "Number";
    TypeOutput[TypeOutput["BigInt"] = 1] = "BigInt";
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
        throw new Error(`A string must be provided with a 0x-prefix, given: ${input}`);
    }
    else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
        throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }
    const output = (0, bytes_1.toBuffer)(input);
    switch (outputType) {
        case TypeOutput.Buffer:
            return output;
        case TypeOutput.BigInt:
            return (0, bytes_1.bufferToBigInt)(output);
        case TypeOutput.Number: {
            const bigInt = (0, bytes_1.bufferToBigInt)(output);
            if (bigInt > BigInt(Number.MAX_SAFE_INTEGER)) {
                throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
            }
            return Number(bigInt);
        }
        case TypeOutput.PrefixedHexString:
            return (0, bytes_1.bufferToHex)(output);
        default:
            throw new Error('unknown outputType');
    }
}
exports.toType = toType;


/***/ }),

/***/ 85712:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GWEI_TO_WEI = void 0;
/** Easy conversion from Gwei to wei */
exports.GWEI_TO_WEI = BigInt(1000000000);


/***/ }),

/***/ 82233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Withdrawal = void 0;
const address_1 = __webpack_require__(78983);
const bytes_1 = __webpack_require__(60979);
const types_1 = __webpack_require__(15581);
/**
 * Representation of EIP-4895 withdrawal data
 */
class Withdrawal {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating a Withdrawal object from varying data types.
     * Its amount is in Gwei to match CL representation and for eventual ssz withdrawalsRoot
     */
    constructor(index, validatorIndex, address, 
    /**
     * withdrawal amount in Gwei to match the CL repesentation and eventually ssz withdrawalsRoot
     */
    amount) {
        this.index = index;
        this.validatorIndex = validatorIndex;
        this.address = address;
        this.amount = amount;
    }
    static fromWithdrawalData(withdrawalData) {
        const { index: indexData, validatorIndex: validatorIndexData, address: addressData, amount: amountData, } = withdrawalData;
        const index = (0, types_1.toType)(indexData, types_1.TypeOutput.BigInt);
        const validatorIndex = (0, types_1.toType)(validatorIndexData, types_1.TypeOutput.BigInt);
        const address = new address_1.Address((0, types_1.toType)(addressData, types_1.TypeOutput.Buffer));
        const amount = (0, types_1.toType)(amountData, types_1.TypeOutput.BigInt);
        return new Withdrawal(index, validatorIndex, address, amount);
    }
    static fromValuesArray(withdrawalArray) {
        if (withdrawalArray.length !== 4) {
            throw Error(`Invalid withdrawalArray length expected=4 actual=${withdrawalArray.length}`);
        }
        const [index, validatorIndex, address, amount] = withdrawalArray;
        return Withdrawal.fromWithdrawalData({ index, validatorIndex, address, amount });
    }
    /**
     * Convert a withdrawal to a buffer array
     * @param withdrawal the withdrawal to convert
     * @returns buffer array of the withdrawal
     */
    static toBufferArray(withdrawal) {
        const { index, validatorIndex, address, amount } = withdrawal;
        const indexBuffer = (0, types_1.toType)(index, types_1.TypeOutput.BigInt) === BigInt(0)
            ? Buffer.alloc(0)
            : (0, types_1.toType)(index, types_1.TypeOutput.Buffer);
        const validatorIndexBuffer = (0, types_1.toType)(validatorIndex, types_1.TypeOutput.BigInt) === BigInt(0)
            ? Buffer.alloc(0)
            : (0, types_1.toType)(validatorIndex, types_1.TypeOutput.Buffer);
        let addressBuffer;
        if (address instanceof address_1.Address) {
            addressBuffer = address.buf;
        }
        else {
            addressBuffer = (0, types_1.toType)(address, types_1.TypeOutput.Buffer);
        }
        const amountBuffer = (0, types_1.toType)(amount, types_1.TypeOutput.BigInt) === BigInt(0)
            ? Buffer.alloc(0)
            : (0, types_1.toType)(amount, types_1.TypeOutput.Buffer);
        return [indexBuffer, validatorIndexBuffer, addressBuffer, amountBuffer];
    }
    raw() {
        return Withdrawal.toBufferArray(this);
    }
    toValue() {
        return {
            index: this.index,
            validatorIndex: this.validatorIndex,
            address: this.address.buf,
            amount: this.amount,
        };
    }
    toJSON() {
        return {
            index: (0, bytes_1.bigIntToHex)(this.index),
            validatorIndex: (0, bytes_1.bigIntToHex)(this.validatorIndex),
            address: '0x' + this.address.buf.toString('hex'),
            amount: (0, bytes_1.bigIntToHex)(this.amount),
        };
    }
}
exports.Withdrawal = Withdrawal;


/***/ }),

/***/ 69253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountBodyToRLP = exports.accountBodyToSlim = exports.accountBodyFromSlim = exports.isZeroAddress = exports.zeroAddress = exports.importPublic = exports.privateToAddress = exports.privateToPublic = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isValidAddress = exports.Account = void 0;
const rlp_1 = __webpack_require__(59561);
const keccak_1 = __webpack_require__(89375);
const secp256k1_1 = __webpack_require__(29664);
const utils_1 = __webpack_require__(65873);
const bytes_1 = __webpack_require__(73274);
const constants_1 = __webpack_require__(94191);
const helpers_1 = __webpack_require__(19605);
const internal_1 = __webpack_require__(81214);
const _0n = BigInt(0);
class Account {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */
    constructor(nonce = _0n, balance = _0n, storageRoot = constants_1.KECCAK256_RLP, codeHash = constants_1.KECCAK256_NULL) {
        this.nonce = nonce;
        this.balance = balance;
        this.storageRoot = storageRoot;
        this.codeHash = codeHash;
        this._validate();
    }
    static fromAccountData(accountData) {
        const { nonce, balance, storageRoot, codeHash } = accountData;
        return new Account(nonce !== undefined ? (0, bytes_1.bufferToBigInt)((0, bytes_1.toBuffer)(nonce)) : undefined, balance !== undefined ? (0, bytes_1.bufferToBigInt)((0, bytes_1.toBuffer)(balance)) : undefined, storageRoot !== undefined ? (0, bytes_1.toBuffer)(storageRoot) : undefined, codeHash !== undefined ? (0, bytes_1.toBuffer)(codeHash) : undefined);
    }
    static fromRlpSerializedAccount(serialized) {
        const values = (0, bytes_1.arrToBufArr)(rlp_1.RLP.decode(Uint8Array.from(serialized)));
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized account input. Must be array');
        }
        return this.fromValuesArray(values);
    }
    static fromValuesArray(values) {
        const [nonce, balance, storageRoot, codeHash] = values;
        return new Account((0, bytes_1.bufferToBigInt)(nonce), (0, bytes_1.bufferToBigInt)(balance), storageRoot, codeHash);
    }
    _validate() {
        if (this.nonce < _0n) {
            throw new Error('nonce must be greater than zero');
        }
        if (this.balance < _0n) {
            throw new Error('balance must be greater than zero');
        }
        if (this.storageRoot.length !== 32) {
            throw new Error('storageRoot must have a length of 32');
        }
        if (this.codeHash.length !== 32) {
            throw new Error('codeHash must have a length of 32');
        }
    }
    /**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */
    raw() {
        return [
            (0, bytes_1.bigIntToUnpaddedBuffer)(this.nonce),
            (0, bytes_1.bigIntToUnpaddedBuffer)(this.balance),
            this.storageRoot,
            this.codeHash,
        ];
    }
    /**
     * Returns the RLP serialization of the account as a `Buffer`.
     */
    serialize() {
        return Buffer.from(rlp_1.RLP.encode((0, bytes_1.bufArrToArr)(this.raw())));
    }
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */
    isContract() {
        return !this.codeHash.equals(constants_1.KECCAK256_NULL);
    }
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */
    isEmpty() {
        return this.balance === _0n && this.nonce === _0n && this.codeHash.equals(constants_1.KECCAK256_NULL);
    }
}
exports.Account = Account;
/**
 * Checks if the address is a valid. Accepts checksummed addresses too.
 */
const isValidAddress = function (hexAddress) {
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
const toChecksumAddress = function (hexAddress, eip1191ChainId) {
    (0, helpers_1.assertIsHexString)(hexAddress);
    const address = (0, internal_1.stripHexPrefix)(hexAddress).toLowerCase();
    let prefix = '';
    if (eip1191ChainId !== undefined) {
        const chainId = (0, bytes_1.bufferToBigInt)((0, bytes_1.toBuffer)(eip1191ChainId));
        prefix = chainId.toString() + '0x';
    }
    const buf = Buffer.from(prefix + address, 'utf8');
    const hash = (0, utils_1.bytesToHex)((0, keccak_1.keccak256)(buf));
    let ret = '0x';
    for (let i = 0; i < address.length; i++) {
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
const isValidChecksumAddress = function (hexAddress, eip1191ChainId) {
    return (0, exports.isValidAddress)(hexAddress) && (0, exports.toChecksumAddress)(hexAddress, eip1191ChainId) === hexAddress;
};
exports.isValidChecksumAddress = isValidChecksumAddress;
/**
 * Generates an address of a newly created contract.
 * @param from The address which is creating this new address
 * @param nonce The nonce of the from account
 */
const generateAddress = function (from, nonce) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(nonce);
    if ((0, bytes_1.bufferToBigInt)(nonce) === BigInt(0)) {
        // in RLP we want to encode null in the case of zero nonce
        // read the RLP documentation for an answer if you dare
        return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, bytes_1.bufArrToArr)([from, null])))).slice(-20);
    }
    // Only take the lower 160bits of the hash
    return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, bytes_1.bufArrToArr)([from, nonce])))).slice(-20);
};
exports.generateAddress = generateAddress;
/**
 * Generates an address for a contract created using CREATE2.
 * @param from The address which is creating this new address
 * @param salt A salt
 * @param initCode The init code of the contract being created
 */
const generateAddress2 = function (from, salt, initCode) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(salt);
    (0, helpers_1.assertIsBuffer)(initCode);
    if (from.length !== 20) {
        throw new Error('Expected from to be of length 20');
    }
    if (salt.length !== 32) {
        throw new Error('Expected salt to be of length 32');
    }
    const address = (0, keccak_1.keccak256)(Buffer.concat([Buffer.from('ff', 'hex'), from, salt, (0, keccak_1.keccak256)(initCode)]));
    return (0, bytes_1.toBuffer)(address).slice(-20);
};
exports.generateAddress2 = generateAddress2;
/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 */
const isValidPrivate = function (privateKey) {
    return secp256k1_1.secp256k1.utils.isValidPrivateKey(privateKey);
};
exports.isValidPrivate = isValidPrivate;
/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
const isValidPublic = function (publicKey, sanitize = false) {
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length === 64) {
        // Convert to SEC1 for secp256k1
        // Automatically checks whether point is on curve
        try {
            secp256k1_1.secp256k1.ProjectivePoint.fromHex(Buffer.concat([Buffer.from([4]), publicKey]));
            return true;
        }
        catch (e) {
            return false;
        }
    }
    if (!sanitize) {
        return false;
    }
    try {
        secp256k1_1.secp256k1.ProjectivePoint.fromHex(publicKey);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isValidPublic = isValidPublic;
/**
 * Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
const pubToAddress = function (pubKey, sanitize = false) {
    (0, helpers_1.assertIsBuffer)(pubKey);
    if (sanitize && pubKey.length !== 64) {
        pubKey = Buffer.from(secp256k1_1.secp256k1.ProjectivePoint.fromHex(pubKey).toRawBytes(false).slice(1));
    }
    if (pubKey.length !== 64) {
        throw new Error('Expected pubKey to be of length 64');
    }
    // Only take the lower 160bits of the hash
    return Buffer.from((0, keccak_1.keccak256)(pubKey)).slice(-20);
};
exports.pubToAddress = pubToAddress;
exports.publicToAddress = exports.pubToAddress;
/**
 * Returns the ethereum public key of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
const privateToPublic = function (privateKey) {
    (0, helpers_1.assertIsBuffer)(privateKey);
    // skip the type flag and use the X, Y points
    return Buffer.from(secp256k1_1.secp256k1.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(false).slice(1));
};
exports.privateToPublic = privateToPublic;
/**
 * Returns the ethereum address of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
const privateToAddress = function (privateKey) {
    return (0, exports.publicToAddress)((0, exports.privateToPublic)(privateKey));
};
exports.privateToAddress = privateToAddress;
/**
 * Converts a public key to the Ethereum format.
 */
const importPublic = function (publicKey) {
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length !== 64) {
        publicKey = Buffer.from(secp256k1_1.secp256k1.ProjectivePoint.fromHex(publicKey).toRawBytes(false).slice(1));
    }
    return publicKey;
};
exports.importPublic = importPublic;
/**
 * Returns the zero address.
 */
const zeroAddress = function () {
    const addressLength = 20;
    const addr = (0, bytes_1.zeros)(addressLength);
    return (0, bytes_1.bufferToHex)(addr);
};
exports.zeroAddress = zeroAddress;
/**
 * Checks if a given address is the zero address.
 */
const isZeroAddress = function (hexAddress) {
    try {
        (0, helpers_1.assertIsString)(hexAddress);
    }
    catch (e) {
        return false;
    }
    const zeroAddr = (0, exports.zeroAddress)();
    return zeroAddr === hexAddress;
};
exports.isZeroAddress = isZeroAddress;
function accountBodyFromSlim(body) {
    const [nonce, balance, storageRoot, codeHash] = body;
    return [
        nonce,
        balance,
        (0, bytes_1.arrToBufArr)(storageRoot).length === 0 ? constants_1.KECCAK256_RLP : storageRoot,
        (0, bytes_1.arrToBufArr)(codeHash).length === 0 ? constants_1.KECCAK256_NULL : codeHash,
    ];
}
exports.accountBodyFromSlim = accountBodyFromSlim;
const emptyUint8Arr = new Uint8Array(0);
function accountBodyToSlim(body) {
    const [nonce, balance, storageRoot, codeHash] = body;
    return [
        nonce,
        balance,
        (0, bytes_1.arrToBufArr)(storageRoot).equals(constants_1.KECCAK256_RLP) ? emptyUint8Arr : storageRoot,
        (0, bytes_1.arrToBufArr)(codeHash).equals(constants_1.KECCAK256_NULL) ? emptyUint8Arr : codeHash,
    ];
}
exports.accountBodyToSlim = accountBodyToSlim;
/**
 * Converts a slim account (per snap protocol spec) to the RLP encoded version of the account
 * @param body Array of 4 Buffer-like items to represent the account
 * @returns RLP encoded version of the account
 */
function accountBodyToRLP(body, couldBeSlim = true) {
    const accountBody = couldBeSlim ? accountBodyFromSlim(body) : body;
    return (0, bytes_1.arrToBufArr)(rlp_1.RLP.encode(accountBody));
}
exports.accountBodyToRLP = accountBodyToRLP;


/***/ }),

/***/ 40444:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Address = void 0;
const account_1 = __webpack_require__(69253);
const bytes_1 = __webpack_require__(73274);
/**
 * Handling and generating Ethereum addresses
 */
class Address {
    constructor(buf) {
        if (buf.length !== 20) {
            throw new Error('Invalid address length');
        }
        this.buf = buf;
    }
    /**
     * Returns the zero address.
     */
    static zero() {
        return new Address((0, bytes_1.zeros)(20));
    }
    /**
     * Returns an Address object from a hex-encoded string.
     * @param str - Hex-encoded address
     */
    static fromString(str) {
        if (!(0, account_1.isValidAddress)(str)) {
            throw new Error('Invalid address');
        }
        return new Address((0, bytes_1.toBuffer)(str));
    }
    /**
     * Returns an address for a given public key.
     * @param pubKey The two points of an uncompressed key
     */
    static fromPublicKey(pubKey) {
        if (!Buffer.isBuffer(pubKey)) {
            throw new Error('Public key should be Buffer');
        }
        const buf = (0, account_1.pubToAddress)(pubKey);
        return new Address(buf);
    }
    /**
     * Returns an address for a given private key.
     * @param privateKey A private key must be 256 bits wide
     */
    static fromPrivateKey(privateKey) {
        if (!Buffer.isBuffer(privateKey)) {
            throw new Error('Private key should be Buffer');
        }
        const buf = (0, account_1.privateToAddress)(privateKey);
        return new Address(buf);
    }
    /**
     * Generates an address for a newly created contract.
     * @param from The address which is creating this new address
     * @param nonce The nonce of the from account
     */
    static generate(from, nonce) {
        if (typeof nonce !== 'bigint') {
            throw new Error('Expected nonce to be a bigint');
        }
        return new Address((0, account_1.generateAddress)(from.buf, (0, bytes_1.bigIntToBuffer)(nonce)));
    }
    /**
     * Generates an address for a contract created using CREATE2.
     * @param from The address which is creating this new address
     * @param salt A salt
     * @param initCode The init code of the contract being created
     */
    static generate2(from, salt, initCode) {
        if (!Buffer.isBuffer(salt)) {
            throw new Error('Expected salt to be a Buffer');
        }
        if (!Buffer.isBuffer(initCode)) {
            throw new Error('Expected initCode to be a Buffer');
        }
        return new Address((0, account_1.generateAddress2)(from.buf, salt, initCode));
    }
    /**
     * Is address equal to another.
     */
    equals(address) {
        return this.buf.equals(address.buf);
    }
    /**
     * Is address zero.
     */
    isZero() {
        return this.equals(Address.zero());
    }
    /**
     * True if address is in the address range defined
     * by EIP-1352
     */
    isPrecompileOrSystemAddress() {
        const address = (0, bytes_1.bufferToBigInt)(this.buf);
        const rangeMin = BigInt(0);
        const rangeMax = BigInt('0xffff');
        return address >= rangeMin && address <= rangeMax;
    }
    /**
     * Returns hex encoding of address.
     */
    toString() {
        return '0x' + this.buf.toString('hex');
    }
    /**
     * Returns Buffer representation of address.
     */
    toBuffer() {
        return Buffer.from(this.buf);
    }
}
exports.Address = Address;


/***/ }),

/***/ 88153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Ported to Typescript from original implementation below:
 * https://github.com/ahultgren/async-eventemitter -- MIT licensed
 *
 * Type Definitions based on work by: patarapolw <https://github.com/patarapolw> -- MIT licensed
 * that was contributed to Definitely Typed below:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/async-eventemitter
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncEventEmitter = void 0;
const events_1 = __webpack_require__(58470);
async function runInSeries(context, tasks, data) {
    let error;
    for await (const task of tasks) {
        try {
            if (task.length < 2) {
                //sync
                task.call(context, data);
            }
            else {
                await new Promise((resolve, reject) => {
                    task.call(context, data, (error) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve();
                        }
                    });
                });
            }
        }
        catch (e) {
            error = e;
        }
    }
    if (error) {
        throw error;
    }
}
class AsyncEventEmitter extends events_1.EventEmitter {
    emit(event, ...args) {
        let [data, callback] = args;
        const self = this;
        let listeners = self._events[event] ?? [];
        // Optional data argument
        if (callback === undefined && typeof data === 'function') {
            callback = data;
            data = undefined;
        }
        // Special treatment of internal newListener and removeListener events
        if (event === 'newListener' || event === 'removeListener') {
            data = {
                event: data,
                fn: callback,
            };
            callback = undefined;
        }
        // A single listener is just a function not an array...
        listeners = Array.isArray(listeners) ? listeners : [listeners];
        runInSeries(self, listeners.slice(), data).then(callback).catch(callback);
        return self.listenerCount(event) > 0;
    }
    once(event, listener) {
        const self = this;
        let g;
        if (typeof listener !== 'function') {
            throw new TypeError('listener must be a function');
        }
        // Hack to support set arity
        if (listener.length >= 2) {
            g = function (e, next) {
                self.removeListener(event, g);
                void listener(e, next);
            };
        }
        else {
            g = function (e) {
                self.removeListener(event, g);
                void listener(e, g);
            };
        }
        self.on(event, g);
        return self;
    }
    first(event, listener) {
        let listeners = this._events[event] ?? [];
        // Contract
        if (typeof listener !== 'function') {
            throw new TypeError('listener must be a function');
        }
        // Listeners are not always an array
        if (!Array.isArray(listeners)) {
            ;
            this._events[event] = listeners = [listeners];
        }
        listeners.unshift(listener);
        return this;
    }
    before(event, target, listener) {
        return this.beforeOrAfter(event, target, listener);
    }
    after(event, target, listener) {
        return this.beforeOrAfter(event, target, listener, 'after');
    }
    beforeOrAfter(event, target, listener, beforeOrAfter) {
        let listeners = this._events[event] ?? [];
        let i;
        let index;
        const add = beforeOrAfter === 'after' ? 1 : 0;
        // Contract
        if (typeof listener !== 'function') {
            throw new TypeError('listener must be a function');
        }
        if (typeof target !== 'function') {
            throw new TypeError('target must be a function');
        }
        // Listeners are not always an array
        if (!Array.isArray(listeners)) {
            ;
            this._events[event] = listeners = [listeners];
        }
        index = listeners.length;
        for (i = listeners.length; i--;) {
            if (listeners[i] === target) {
                index = i + add;
                break;
            }
        }
        listeners.splice(index, 0, listener);
        return this;
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    addListener(event, listener) {
        return super.addListener(event, listener);
    }
    prependListener(event, listener) {
        return super.prependListener(event, listener);
    }
    prependOnceListener(event, listener) {
        return super.prependOnceListener(event, listener);
    }
    removeAllListeners(event) {
        return super.removeAllListeners(event);
    }
    removeListener(event, listener) {
        return super.removeListener(event, listener);
    }
    eventNames() {
        return super.eventNames();
    }
    listeners(event) {
        return super.listeners(event);
    }
    listenerCount(event) {
        return super.listenerCount(event);
    }
    getMaxListeners() {
        return super.getMaxListeners();
    }
    setMaxListeners(maxListeners) {
        return super.setMaxListeners(maxListeners);
    }
}
exports.AsyncEventEmitter = AsyncEventEmitter;


/***/ }),

/***/ 73274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.intToUnpaddedBuffer = exports.bigIntToUnpaddedBuffer = exports.bigIntToHex = exports.bufArrToArr = exports.arrToBufArr = exports.validateNoLeadingZeroes = exports.baToJSON = exports.toUtf8 = exports.short = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToInt = exports.bigIntToBuffer = exports.bufferToBigInt = exports.bufferToHex = exports.toBuffer = exports.unpadHexString = exports.unpadArray = exports.unpadBuffer = exports.setLengthRight = exports.setLengthLeft = exports.zeros = exports.intToBuffer = exports.intToHex = void 0;
const helpers_1 = __webpack_require__(19605);
const internal_1 = __webpack_require__(81214);
/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
const intToHex = function (i) {
    if (!Number.isSafeInteger(i) || i < 0) {
        throw new Error(`Received an invalid integer type: ${i}`);
    }
    return `0x${i.toString(16)}`;
};
exports.intToHex = intToHex;
/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
const intToBuffer = function (i) {
    const hex = (0, exports.intToHex)(i);
    return Buffer.from((0, internal_1.padToEven)(hex.slice(2)), 'hex');
};
exports.intToBuffer = intToBuffer;
/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
const zeros = function (bytes) {
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
const setLength = function (msg, length, right) {
    const buf = (0, exports.zeros)(length);
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
const setLengthLeft = function (msg, length) {
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
const setLengthRight = function (msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, true);
};
exports.setLengthRight = setLengthRight;
/**
 * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
 * @param a (Buffer|Array|String)
 * @return (Buffer|Array|String)
 */
const stripZeros = function (a) {
    let first = a[0];
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
const unpadBuffer = function (a) {
    (0, helpers_1.assertIsBuffer)(a);
    return stripZeros(a);
};
exports.unpadBuffer = unpadBuffer;
/**
 * Trims leading zeros from an `Array` (of numbers).
 * @param a (number[])
 * @return (number[])
 */
const unpadArray = function (a) {
    (0, helpers_1.assertIsArray)(a);
    return stripZeros(a);
};
exports.unpadArray = unpadArray;
/**
 * Trims leading zeros from a hex-prefixed `String`.
 * @param a (String)
 * @return (String)
 */
const unpadHexString = function (a) {
    (0, helpers_1.assertIsHexString)(a);
    a = (0, internal_1.stripHexPrefix)(a);
    return ('0x' + stripZeros(a));
};
exports.unpadHexString = unpadHexString;
/**
 * Attempts to turn a value into a `Buffer`.
 * Inputs supported: `Buffer`, `String` (hex-prefixed), `Number`, null/undefined, `BigInt` and other objects
 * with a `toArray()` or `toBuffer()` method.
 * @param v the value
 */
const toBuffer = function (v) {
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
            throw new Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${v}`);
        }
        return Buffer.from((0, internal_1.padToEven)((0, internal_1.stripHexPrefix)(v)), 'hex');
    }
    if (typeof v === 'number') {
        return (0, exports.intToBuffer)(v);
    }
    if (typeof v === 'bigint') {
        if (v < BigInt(0)) {
            throw new Error(`Cannot convert negative bigint to buffer. Given: ${v}`);
        }
        let n = v.toString(16);
        if (n.length % 2)
            n = '0' + n;
        return Buffer.from(n, 'hex');
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
 * Converts a `Buffer` into a `0x`-prefixed hex `String`.
 * @param buf `Buffer` object to convert
 */
const bufferToHex = function (buf) {
    buf = (0, exports.toBuffer)(buf);
    return '0x' + buf.toString('hex');
};
exports.bufferToHex = bufferToHex;
/**
 * Converts a {@link Buffer} to a {@link bigint}
 */
function bufferToBigInt(buf) {
    const hex = (0, exports.bufferToHex)(buf);
    if (hex === '0x') {
        return BigInt(0);
    }
    return BigInt(hex);
}
exports.bufferToBigInt = bufferToBigInt;
/**
 * Converts a {@link bigint} to a {@link Buffer}
 */
function bigIntToBuffer(num) {
    return (0, exports.toBuffer)('0x' + num.toString(16));
}
exports.bigIntToBuffer = bigIntToBuffer;
/**
 * Converts a `Buffer` to a `Number`.
 * @param buf `Buffer` object to convert
 * @throws If the input number exceeds 53 bits.
 */
const bufferToInt = function (buf) {
    const res = Number(bufferToBigInt(buf));
    if (!Number.isSafeInteger(res))
        throw new Error('Number exceeds 53 bits');
    return res;
};
exports.bufferToInt = bufferToInt;
/**
 * Interprets a `Buffer` as a signed integer and returns a `BigInt`. Assumes 256-bit numbers.
 * @param num Signed integer value
 */
const fromSigned = function (num) {
    return BigInt.asIntN(256, bufferToBigInt(num));
};
exports.fromSigned = fromSigned;
/**
 * Converts a `BigInt` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param num
 */
const toUnsigned = function (num) {
    return bigIntToBuffer(BigInt.asUintN(256, num));
};
exports.toUnsigned = toUnsigned;
/**
 * Adds "0x" to a given `String` if it does not already start with "0x".
 */
const addHexPrefix = function (str) {
    if (typeof str !== 'string') {
        return str;
    }
    return (0, internal_1.isHexPrefixed)(str) ? str : '0x' + str;
};
exports.addHexPrefix = addHexPrefix;
/**
 * Shortens a string  or buffer's hex string representation to maxLength (default 50).
 *
 * Examples:
 *
 * Input:  '657468657265756d000000000000000000000000000000000000000000000000'
 * Output: '657468657265756d0000000000000000000000000000000000…'
 */
function short(buffer, maxLength = 50) {
    const bufferStr = Buffer.isBuffer(buffer) ? buffer.toString('hex') : buffer;
    if (bufferStr.length <= maxLength) {
        return bufferStr;
    }
    return bufferStr.slice(0, maxLength) + '…';
}
exports.short = short;
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
const toUtf8 = function (hex) {
    const zerosRegexp = /^(00)+|(00)+$/g;
    hex = (0, internal_1.stripHexPrefix)(hex);
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid non-even hex string input for toUtf8() provided');
    }
    const bufferVal = Buffer.from(hex.replace(zerosRegexp, ''), 'hex');
    return bufferVal.toString('utf8');
};
exports.toUtf8 = toUtf8;
/**
 * Converts a `Buffer` or `Array` to JSON.
 * @param ba (Buffer|Array)
 * @return (Array|String|null)
 */
const baToJSON = function (ba) {
    if (Buffer.isBuffer(ba)) {
        return `0x${ba.toString('hex')}`;
    }
    else if (ba instanceof Array) {
        const array = [];
        for (let i = 0; i < ba.length; i++) {
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
const validateNoLeadingZeroes = function (values) {
    for (const [k, v] of Object.entries(values)) {
        if (v !== undefined && v.length > 0 && v[0] === 0) {
            throw new Error(`${k} cannot have leading zeroes, received: ${v.toString('hex')}`);
        }
    }
};
exports.validateNoLeadingZeroes = validateNoLeadingZeroes;
function arrToBufArr(arr) {
    if (!Array.isArray(arr)) {
        return Buffer.from(arr);
    }
    return arr.map((a) => arrToBufArr(a));
}
exports.arrToBufArr = arrToBufArr;
function bufArrToArr(arr) {
    if (!Array.isArray(arr)) {
        return Uint8Array.from(arr ?? []);
    }
    return arr.map((a) => bufArrToArr(a));
}
exports.bufArrToArr = bufArrToArr;
/**
 * Converts a {@link bigint} to a `0x` prefixed hex string
 */
const bigIntToHex = (num) => {
    return '0x' + num.toString(16);
};
exports.bigIntToHex = bigIntToHex;
/**
 * Convert value from bigint to an unpadded Buffer
 * (useful for RLP transport)
 * @param value value to convert
 */
function bigIntToUnpaddedBuffer(value) {
    return (0, exports.unpadBuffer)(bigIntToBuffer(value));
}
exports.bigIntToUnpaddedBuffer = bigIntToUnpaddedBuffer;
function intToUnpaddedBuffer(value) {
    return (0, exports.unpadBuffer)((0, exports.intToBuffer)(value));
}
exports.intToUnpaddedBuffer = intToUnpaddedBuffer;


/***/ }),

/***/ 94191:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_WITHDRAWALS_PER_PAYLOAD = exports.RLP_EMPTY_STRING = exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.SECP256K1_ORDER_DIV_2 = exports.SECP256K1_ORDER = exports.MAX_INTEGER_BIGINT = exports.MAX_INTEGER = exports.MAX_UINT64 = void 0;
const buffer_1 = __webpack_require__(7661);
const secp256k1_1 = __webpack_require__(29664);
/**
 * 2^64-1
 */
exports.MAX_UINT64 = BigInt('0xffffffffffffffff');
/**
 * The max integer that the evm can handle (2^256-1)
 */
exports.MAX_INTEGER = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
/**
 * The max integer that the evm can handle (2^256-1) as a bigint
 * 2^256-1 equals to 340282366920938463463374607431768211455
 * We use literal value instead of calculated value for compatibility issue.
 */
exports.MAX_INTEGER_BIGINT = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
exports.SECP256K1_ORDER = secp256k1_1.secp256k1.CURVE.n;
exports.SECP256K1_ORDER_DIV_2 = secp256k1_1.secp256k1.CURVE.n / BigInt(2);
/**
 * 2^256
 */
exports.TWO_POW256 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
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
/**
 *  RLP encoded empty string
 */
exports.RLP_EMPTY_STRING = buffer_1.Buffer.from([0x80]);
exports.MAX_WITHDRAWALS_PER_PAYLOAD = 16;


/***/ }),

/***/ 16536:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compactBytesToNibbles = exports.bytesToNibbles = exports.nibblesToCompactBytes = exports.nibblesToBytes = exports.hasTerminator = void 0;
// Reference: https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/
/**
 *
 * @param s byte sequence
 * @returns boolean indicating if input hex nibble sequence has terminator indicating leaf-node
 *          terminator is represented with 16 because a nibble ranges from 0 - 15(f)
 */
const hasTerminator = (nibbles) => {
    return nibbles.length > 0 && nibbles[nibbles.length - 1] === 16;
};
exports.hasTerminator = hasTerminator;
const nibblesToBytes = (nibbles, bytes) => {
    for (let bi = 0, ni = 0; ni < nibbles.length; bi += 1, ni += 2) {
        bytes[bi] = (nibbles[ni] << 4) | nibbles[ni + 1];
    }
};
exports.nibblesToBytes = nibblesToBytes;
const nibblesToCompactBytes = (nibbles) => {
    let terminator = 0;
    if ((0, exports.hasTerminator)(nibbles)) {
        terminator = 1;
        // Remove the terminator from the sequence
        nibbles = nibbles.subarray(0, nibbles.length - 1);
    }
    const buf = new Uint8Array(nibbles.length / 2 + 1);
    // Shift the terminator info into the first nibble of buf[0]
    buf[0] = terminator << 5;
    // If odd length, then add that flag into the first nibble and put the odd nibble to
    // second part of buf[0] which otherwise will be left padded with a 0
    if ((nibbles.length & 1) === 1) {
        buf[0] |= 1 << 4;
        buf[0] |= nibbles[0];
        nibbles = nibbles.subarray(1);
    }
    // create bytes out of the rest even nibbles
    (0, exports.nibblesToBytes)(nibbles, buf.subarray(1));
    return buf;
};
exports.nibblesToCompactBytes = nibblesToCompactBytes;
const bytesToNibbles = (str) => {
    const l = str.length * 2 + 1;
    const nibbles = new Uint8Array(l);
    for (let i = 0; i < str.length; i++) {
        const b = str[i];
        nibbles[i * 2] = b / 16;
        nibbles[i * 2 + 1] = b % 16;
    }
    // This will get removed from calling function if the first nibble
    // indicates that terminator is not present
    nibbles[l - 1] = 16;
    return nibbles;
};
exports.bytesToNibbles = bytesToNibbles;
const compactBytesToNibbles = (compact) => {
    if (compact.length === 0) {
        return compact;
    }
    let base = (0, exports.bytesToNibbles)(compact);
    // delete terminator flag if terminator flag was not in first nibble
    if (base[0] < 2) {
        base = base.subarray(0, base.length - 1);
    }
    // chop the terminator nibble and the even padding (if there is one)
    // i.e.  chop 2 left nibbles when even else 1 when odd
    const chop = 2 - (base[0] & 1);
    return base.subarray(chop);
};
exports.compactBytesToNibbles = compactBytesToNibbles;
/**
 * A test helper to generates compact path for a subset of key bytes
 *
 * TODO: Commenting the code for now as this seems to be helper function
 * (from geth codebase )
 *
 */
//
//
// export const getPathTo = (tillBytes: number, key: Buffer) => {
//   const hexNibbles = bytesToNibbles(key).subarray(0, tillBytes)
//   // Remove the terminator if its there, although it would be there only if tillBytes >= key.length
//   // This seems to be a test helper to generate paths so correctness of this isn't necessary
//   hexNibbles[hexNibbles.length - 1] = 0
//   const compactBytes = nibblesToCompactBytes(hexNibbles)
//   return [Buffer.from(compactBytes)]
// }


/***/ }),

/***/ 19605:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertIsString = exports.assertIsArray = exports.assertIsBuffer = exports.assertIsHexString = void 0;
const internal_1 = __webpack_require__(81214);
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
const assertIsHexString = function (input) {
    if (!(0, internal_1.isHexString)(input)) {
        const msg = `This method only supports 0x-prefixed hex strings but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsHexString = assertIsHexString;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
const assertIsBuffer = function (input) {
    if (!Buffer.isBuffer(input)) {
        const msg = `This method only supports Buffer but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsBuffer = assertIsBuffer;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
const assertIsArray = function (input) {
    if (!Array.isArray(input)) {
        const msg = `This method only supports number arrays but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsArray = assertIsArray;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
const assertIsString = function (input) {
    if (typeof input !== 'string') {
        const msg = `This method only supports strings but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsString = assertIsString;


/***/ }),

/***/ 83686:
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
exports.toAscii = exports.stripHexPrefix = exports.padToEven = exports.isHexString = exports.isHexPrefixed = exports.getKeys = exports.getBinarySize = exports.fromUtf8 = exports.fromAscii = exports.arrayContainsArray = void 0;
/**
 * Constants
 */
__exportStar(__webpack_require__(94191), exports);
/**
 * Units helpers
 */
__exportStar(__webpack_require__(35410), exports);
/**
 * Account class and helper functions
 */
__exportStar(__webpack_require__(69253), exports);
/**
 * Address type
 */
__exportStar(__webpack_require__(40444), exports);
/**
 * Withdrawal type
 */
__exportStar(__webpack_require__(96343), exports);
/**
 * ECDSA signature
 */
__exportStar(__webpack_require__(15761), exports);
/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */
__exportStar(__webpack_require__(73274), exports);
/**
 * Helpful TypeScript types
 */
__exportStar(__webpack_require__(44918), exports);
/**
 * Helper function for working with compact encoding
 */
__exportStar(__webpack_require__(16536), exports);
/**
 * Export ethjs-util methods
 */
__exportStar(__webpack_require__(88153), exports);
var internal_1 = __webpack_require__(81214);
Object.defineProperty(exports, "arrayContainsArray", ({ enumerable: true, get: function () { return internal_1.arrayContainsArray; } }));
Object.defineProperty(exports, "fromAscii", ({ enumerable: true, get: function () { return internal_1.fromAscii; } }));
Object.defineProperty(exports, "fromUtf8", ({ enumerable: true, get: function () { return internal_1.fromUtf8; } }));
Object.defineProperty(exports, "getBinarySize", ({ enumerable: true, get: function () { return internal_1.getBinarySize; } }));
Object.defineProperty(exports, "getKeys", ({ enumerable: true, get: function () { return internal_1.getKeys; } }));
Object.defineProperty(exports, "isHexPrefixed", ({ enumerable: true, get: function () { return internal_1.isHexPrefixed; } }));
Object.defineProperty(exports, "isHexString", ({ enumerable: true, get: function () { return internal_1.isHexString; } }));
Object.defineProperty(exports, "padToEven", ({ enumerable: true, get: function () { return internal_1.padToEven; } }));
Object.defineProperty(exports, "stripHexPrefix", ({ enumerable: true, get: function () { return internal_1.stripHexPrefix; } }));
Object.defineProperty(exports, "toAscii", ({ enumerable: true, get: function () { return internal_1.toAscii; } }));
__exportStar(__webpack_require__(63423), exports);
__exportStar(__webpack_require__(3734), exports);


/***/ }),

/***/ 81214:
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
        throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof str}`);
    }
    return str[0] === '0' && str[1] === 'x';
}
exports.isHexPrefixed = isHexPrefixed;
/**
 * Removes '0x' from a given `String` if present
 * @param str the string value
 * @returns the string without 0x prefix
 */
const stripHexPrefix = (str) => {
    if (typeof str !== 'string')
        throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);
    return isHexPrefixed(str) ? str.slice(2) : str;
};
exports.stripHexPrefix = stripHexPrefix;
/**
 * Pads a `String` to have an even length
 * @param value
 * @return output
 */
function padToEven(value) {
    let a = value;
    if (typeof a !== 'string') {
        throw new Error(`[padToEven] value must be type 'string', received ${typeof a}`);
    }
    if (a.length % 2)
        a = `0${a}`;
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
        throw new Error(`[getBinarySize] method requires input type 'string', received ${typeof str}`);
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
        throw new Error(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof superset}'`);
    }
    if (Array.isArray(subset) !== true) {
        throw new Error(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof subset}'`);
    }
    return subset[some === true ? 'some' : 'every']((value) => superset.indexOf(value) >= 0);
}
exports.arrayContainsArray = arrayContainsArray;
/**
 * Should be called to get ascii from its hex representation
 *
 * @param string in hex
 * @returns ascii string representation of hex value
 */
function toAscii(hex) {
    let str = '';
    let i = 0;
    const l = hex.length;
    if (hex.substring(0, 2) === '0x')
        i = 2;
    for (; i < l; i += 2) {
        const code = parseInt(hex.substr(i, 2), 16);
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
    const str = Buffer.from(stringValue, 'utf8');
    return `0x${padToEven(str.toString('hex')).replace(/^0+|0+$/g, '')}`;
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
    let hex = '';
    for (let i = 0; i < stringValue.length; i++) {
        const code = stringValue.charCodeAt(i);
        const n = code.toString(16);
        hex += n.length < 2 ? `0${n}` : n;
    }
    return `0x${hex}`;
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
        throw new Error(`[getKeys] method expects input 'params' to be an array, got ${typeof params}`);
    }
    if (typeof key !== 'string') {
        throw new Error(`[getKeys] method expects input 'key' to be type 'string', got ${typeof params}`);
    }
    const result = [];
    for (let i = 0; i < params.length; i++) {
        let value = params[i][key];
        if (allowEmpty === true && !value) {
            value = '';
        }
        else if (typeof value !== 'string') {
            throw new Error(`invalid abi - expected type 'string', received ${typeof value}`);
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
    if (typeof length !== 'undefined' && length > 0 && value.length !== 2 + 2 * length)
        return false;
    return true;
}
exports.isHexString = isHexString;


/***/ }),

/***/ 63423:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Lock = void 0;
// Based on https://github.com/jsoendermann/semaphore-async-await/blob/master/src/Semaphore.ts
class Lock {
    constructor() {
        this.permits = 1;
        this.promiseResolverQueue = [];
    }
    /**
     * Returns a promise used to wait for a permit to become available. This method should be awaited on.
     * @returns  A promise that gets resolved when execution is allowed to proceed.
     */
    async acquire() {
        if (this.permits > 0) {
            this.permits -= 1;
            return Promise.resolve(true);
        }
        // If there is no permit available, we return a promise that resolves once the semaphore gets
        // signaled enough times that permits is equal to one.
        return new Promise((resolver) => this.promiseResolverQueue.push(resolver));
    }
    /**
     * Increases the number of permits by one. If there are other functions waiting, one of them will
     * continue to execute in a future iteration of the event loop.
     */
    release() {
        this.permits += 1;
        if (this.permits > 1 && this.promiseResolverQueue.length > 0) {
            // eslint-disable-next-line no-console
            console.warn('Lock.permits should never be > 0 when there is someone waiting.');
        }
        else if (this.permits === 1 && this.promiseResolverQueue.length > 0) {
            // If there is someone else waiting, immediately consume the permit that was released
            // at the beginning of this function and let the waiting function resume.
            this.permits -= 1;
            const nextResolver = this.promiseResolverQueue.shift();
            if (nextResolver) {
                nextResolver(true);
            }
        }
    }
}
exports.Lock = Lock;


/***/ }),

/***/ 3734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProvider = exports.fetchFromProvider = void 0;
const micro_ftch_1 = __webpack_require__(76254);
const fetchFromProvider = async (url, params) => {
    const res = await (0, micro_ftch_1.default)(url, {
        headers: {
            'content-type': 'application/json',
        },
        type: 'json',
        data: {
            method: params.method,
            params: params.params,
            jsonrpc: '2.0',
            id: 1,
        },
    });
    return res.result;
};
exports.fetchFromProvider = fetchFromProvider;
const getProvider = (provider) => {
    if (typeof provider === 'string') {
        return provider;
    }
    else if (provider?.connection?.url !== undefined) {
        return provider.connection.url;
    }
    else {
        throw new Error('Must provide valid provider URL or Web3Provider');
    }
};
exports.getProvider = getProvider;


/***/ }),

/***/ 15761:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hashPersonalMessage = exports.isValidSignature = exports.fromRpcSig = exports.toCompactSig = exports.toRpcSig = exports.ecrecover = exports.ecsign = void 0;
const keccak_1 = __webpack_require__(89375);
const secp256k1_1 = __webpack_require__(29664);
const bytes_1 = __webpack_require__(73274);
const constants_1 = __webpack_require__(94191);
const helpers_1 = __webpack_require__(19605);
/**
 * Returns the ECDSA signature of a message hash.
 *
 * If `chainId` is provided assume an EIP-155-style signature and calculate the `v` value
 * accordingly, otherwise return a "static" `v` just derived from the `recovery` bit
 */
function ecsign(msgHash, privateKey, chainId) {
    const sig = secp256k1_1.secp256k1.sign(msgHash, privateKey);
    const buf = sig.toCompactRawBytes();
    const r = Buffer.from(buf.slice(0, 32));
    const s = Buffer.from(buf.slice(32, 64));
    const v = chainId === undefined
        ? BigInt(sig.recovery + 27)
        : BigInt(sig.recovery + 35) + BigInt(chainId) * BigInt(2);
    return { r, s, v };
}
exports.ecsign = ecsign;
function calculateSigRecovery(v, chainId) {
    if (v === BigInt(0) || v === BigInt(1))
        return v;
    if (chainId === undefined) {
        return v - BigInt(27);
    }
    return v - (chainId * BigInt(2) + BigInt(35));
}
function isValidSigRecovery(recovery) {
    return recovery === BigInt(0) || recovery === BigInt(1);
}
/**
 * ECDSA public key recovery from signature.
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @returns Recovered public key
 */
const ecrecover = function (msgHash, v, r, s, chainId) {
    const signature = Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32)], 64);
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    const sig = secp256k1_1.secp256k1.Signature.fromCompact(signature).addRecoveryBit(Number(recovery));
    const senderPubKey = sig.recoverPublicKey(msgHash);
    return Buffer.from(senderPubKey.toRawBytes(false).slice(1));
};
exports.ecrecover = ecrecover;
/**
 * Convert signature parameters into the format of `eth_sign` RPC method.
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @returns Signature
 */
const toRpcSig = function (v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32), (0, bytes_1.toBuffer)(v)]));
};
exports.toRpcSig = toRpcSig;
/**
 * Convert signature parameters into the format of Compact Signature Representation (EIP-2098).
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @returns Signature
 */
const toCompactSig = function (v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    let ss = s;
    if ((v > BigInt(28) && v % BigInt(2) === BigInt(1)) || v === BigInt(1) || v === BigInt(28)) {
        ss = Buffer.from(s);
        ss[0] |= 0x80;
    }
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(ss, 32)]));
};
exports.toCompactSig = toCompactSig;
/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 *
 * NOTE: For an extracted `v` value < 27 (see Geth bug https://github.com/ethereum/go-ethereum/issues/2053)
 * `v + 27` is returned for the `v` value
 * NOTE: After EIP1559, `v` could be `0` or `1` but this function assumes
 * it's a signed message (EIP-191 or EIP-712) adding `27` at the end. Remove if needed.
 */
const fromRpcSig = function (sig) {
    const buf = (0, bytes_1.toBuffer)(sig);
    let r;
    let s;
    let v;
    if (buf.length >= 65) {
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = (0, bytes_1.bufferToBigInt)(buf.slice(64));
    }
    else if (buf.length === 64) {
        // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = BigInt((0, bytes_1.bufferToInt)(buf.slice(32, 33)) >> 7);
        s[0] &= 0x7f;
    }
    else {
        throw new Error('Invalid signature length');
    }
    // support both versions of `eth_sign` responses
    if (v < 27) {
        v = v + BigInt(27);
    }
    return {
        v,
        r,
        s,
    };
};
exports.fromRpcSig = fromRpcSig;
/**
 * Validate a ECDSA signature.
 * NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions
 * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
 */
const isValidSignature = function (v, r, s, homesteadOrLater = true, chainId) {
    if (r.length !== 32 || s.length !== 32) {
        return false;
    }
    if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
        return false;
    }
    const rBigInt = (0, bytes_1.bufferToBigInt)(r);
    const sBigInt = (0, bytes_1.bufferToBigInt)(s);
    if (rBigInt === BigInt(0) ||
        rBigInt >= constants_1.SECP256K1_ORDER ||
        sBigInt === BigInt(0) ||
        sBigInt >= constants_1.SECP256K1_ORDER) {
        return false;
    }
    if (homesteadOrLater && sBigInt >= constants_1.SECP256K1_ORDER_DIV_2) {
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
const hashPersonalMessage = function (message) {
    (0, helpers_1.assertIsBuffer)(message);
    const prefix = Buffer.from(`\u0019Ethereum Signed Message:\n${message.length}`, 'utf-8');
    return Buffer.from((0, keccak_1.keccak256)(Buffer.concat([prefix, message])));
};
exports.hashPersonalMessage = hashPersonalMessage;


/***/ }),

/***/ 44918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toType = exports.TypeOutput = void 0;
const bytes_1 = __webpack_require__(73274);
const internal_1 = __webpack_require__(81214);
/**
 * Type output options
 */
var TypeOutput;
(function (TypeOutput) {
    TypeOutput[TypeOutput["Number"] = 0] = "Number";
    TypeOutput[TypeOutput["BigInt"] = 1] = "BigInt";
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
        throw new Error(`A string must be provided with a 0x-prefix, given: ${input}`);
    }
    else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
        throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }
    const output = (0, bytes_1.toBuffer)(input);
    switch (outputType) {
        case TypeOutput.Buffer:
            return output;
        case TypeOutput.BigInt:
            return (0, bytes_1.bufferToBigInt)(output);
        case TypeOutput.Number: {
            const bigInt = (0, bytes_1.bufferToBigInt)(output);
            if (bigInt > BigInt(Number.MAX_SAFE_INTEGER)) {
                throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
            }
            return Number(bigInt);
        }
        case TypeOutput.PrefixedHexString:
            return (0, bytes_1.bufferToHex)(output);
        default:
            throw new Error('unknown outputType');
    }
}
exports.toType = toType;


/***/ }),

/***/ 35410:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GWEI_TO_WEI = void 0;
/** Easy conversion from Gwei to wei */
exports.GWEI_TO_WEI = BigInt(1000000000);


/***/ }),

/***/ 96343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Withdrawal = void 0;
const address_1 = __webpack_require__(40444);
const bytes_1 = __webpack_require__(73274);
const types_1 = __webpack_require__(44918);
/**
 * Representation of EIP-4895 withdrawal data
 */
class Withdrawal {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating a Withdrawal object from varying data types.
     * Its amount is in Gwei to match CL representation and for eventual ssz withdrawalsRoot
     */
    constructor(index, validatorIndex, address, 
    /**
     * withdrawal amount in Gwei to match the CL repesentation and eventually ssz withdrawalsRoot
     */
    amount) {
        this.index = index;
        this.validatorIndex = validatorIndex;
        this.address = address;
        this.amount = amount;
    }
    static fromWithdrawalData(withdrawalData) {
        const { index: indexData, validatorIndex: validatorIndexData, address: addressData, amount: amountData, } = withdrawalData;
        const index = (0, types_1.toType)(indexData, types_1.TypeOutput.BigInt);
        const validatorIndex = (0, types_1.toType)(validatorIndexData, types_1.TypeOutput.BigInt);
        const address = new address_1.Address((0, types_1.toType)(addressData, types_1.TypeOutput.Buffer));
        const amount = (0, types_1.toType)(amountData, types_1.TypeOutput.BigInt);
        return new Withdrawal(index, validatorIndex, address, amount);
    }
    static fromValuesArray(withdrawalArray) {
        if (withdrawalArray.length !== 4) {
            throw Error(`Invalid withdrawalArray length expected=4 actual=${withdrawalArray.length}`);
        }
        const [index, validatorIndex, address, amount] = withdrawalArray;
        return Withdrawal.fromWithdrawalData({ index, validatorIndex, address, amount });
    }
    /**
     * Convert a withdrawal to a buffer array
     * @param withdrawal the withdrawal to convert
     * @returns buffer array of the withdrawal
     */
    static toBufferArray(withdrawal) {
        const { index, validatorIndex, address, amount } = withdrawal;
        const indexBuffer = (0, types_1.toType)(index, types_1.TypeOutput.BigInt) === BigInt(0)
            ? Buffer.alloc(0)
            : (0, types_1.toType)(index, types_1.TypeOutput.Buffer);
        const validatorIndexBuffer = (0, types_1.toType)(validatorIndex, types_1.TypeOutput.BigInt) === BigInt(0)
            ? Buffer.alloc(0)
            : (0, types_1.toType)(validatorIndex, types_1.TypeOutput.Buffer);
        let addressBuffer;
        if (address instanceof address_1.Address) {
            addressBuffer = address.buf;
        }
        else {
            addressBuffer = (0, types_1.toType)(address, types_1.TypeOutput.Buffer);
        }
        const amountBuffer = (0, types_1.toType)(amount, types_1.TypeOutput.BigInt) === BigInt(0)
            ? Buffer.alloc(0)
            : (0, types_1.toType)(amount, types_1.TypeOutput.Buffer);
        return [indexBuffer, validatorIndexBuffer, addressBuffer, amountBuffer];
    }
    raw() {
        return Withdrawal.toBufferArray(this);
    }
    toValue() {
        return {
            index: this.index,
            validatorIndex: this.validatorIndex,
            address: this.address.buf,
            amount: this.amount,
        };
    }
    toJSON() {
        return {
            index: (0, bytes_1.bigIntToHex)(this.index),
            validatorIndex: (0, bytes_1.bigIntToHex)(this.validatorIndex),
            address: '0x' + this.address.buf.toString('hex'),
            amount: (0, bytes_1.bigIntToHex)(this.amount),
        };
    }
}
exports.Withdrawal = Withdrawal;


/***/ })

}]);
//# sourceMappingURL=npm-ns.ethereumjs.util.js.map