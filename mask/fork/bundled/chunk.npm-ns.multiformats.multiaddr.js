"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7100],{

/***/ 27819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sc: () => (/* binding */ Multiaddr)
});

// UNUSED EXPORTS: multiaddr, protocols, resolvers

// EXTERNAL MODULE: ./node_modules/.pnpm/is-ip@4.0.0/node_modules/is-ip/index.js + 1 modules
var is_ip = __webpack_require__(64676);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/to-string.js
var to_string = __webpack_require__(76109);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@10.3.3_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/ip.js



const isV4 = is_ip/* isIPv4 */.C;
const isV6 = is_ip/* isIPv6 */.aY;
// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L7
// but with buf/offset args removed because we don't use them
const toBytes = function (ip) {
    let offset = 0;
    let result;
    if (isV4(ip)) {
        result = new Uint8Array(offset + 4);
        ip.split(/\./g).forEach((byte) => {
            result[offset++] = parseInt(byte, 10) & 0xff;
        });
    }
    else if (isV6(ip)) {
        const sections = ip.split(':', 8);
        let i;
        for (i = 0; i < sections.length; i++) {
            const isv4 = isV4(sections[i]);
            let v4Buffer;
            if (isv4) {
                v4Buffer = toBytes(sections[i]);
                sections[i] = (0,to_string/* toString */.B)(v4Buffer.slice(0, 2), 'base16');
            }
            if (v4Buffer != null && ++i < 8) {
                sections.splice(i, 0, (0,to_string/* toString */.B)(v4Buffer.slice(2, 4), 'base16'));
            }
        }
        if (sections[0] === '') {
            while (sections.length < 8)
                sections.unshift('0');
        }
        else if (sections[sections.length - 1] === '') {
            while (sections.length < 8)
                sections.push('0');
        }
        else if (sections.length < 8) {
            for (i = 0; i < sections.length && sections[i] !== ''; i++)
                ;
            const argv = [i, 1];
            for (i = 9 - sections.length; i > 0; i--) {
                argv.push('0');
            }
            sections.splice.apply(sections, argv);
        }
        result = new Uint8Array(offset + 16);
        for (i = 0; i < sections.length; i++) {
            const word = parseInt(sections[i], 16);
            result[offset++] = (word >> 8) & 0xff;
            result[offset++] = word & 0xff;
        }
    }
    if (result == null) {
        throw Error('Invalid ip address: ' + ip);
    }
    return result;
};
// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L63
const ip_toString = function (buf, offset, length) {
    offset = ~~offset;
    length = length ?? (buf.length - offset);
    const result = [];
    let string = '';
    const view = new DataView(buf.buffer);
    if (length === 4) {
        // IPv4
        for (let i = 0; i < length; i++) {
            result.push(buf[offset + i]);
        }
        string = result.join('.');
    }
    else if (length === 16) {
        // IPv6
        for (let i = 0; i < length; i += 2) {
            result.push(view.getUint16(offset + i).toString(16));
        }
        string = result.join(':');
        string = string.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
        string = string.replace(/:{3,4}/, '::');
    }
    return string;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@10.3.3_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/protocols-table.js
const V = -1;
const names = {};
const codes = {};
const table = [
    [4, 32, 'ip4'],
    [6, 16, 'tcp'],
    [33, 16, 'dccp'],
    [41, 128, 'ip6'],
    [42, V, 'ip6zone'],
    [53, V, 'dns', true],
    [54, V, 'dns4', true],
    [55, V, 'dns6', true],
    [56, V, 'dnsaddr', true],
    [132, 16, 'sctp'],
    [273, 16, 'udp'],
    [275, 0, 'p2p-webrtc-star'],
    [276, 0, 'p2p-webrtc-direct'],
    [277, 0, 'p2p-stardust'],
    [290, 0, 'p2p-circuit'],
    [301, 0, 'udt'],
    [302, 0, 'utp'],
    [400, V, 'unix', false, true],
    // `ipfs` is added before `p2p` for legacy support.
    // All text representations will default to `p2p`, but `ipfs` will
    // still be supported
    [421, V, 'ipfs'],
    // `p2p` is the preferred name for 421, and is now the default
    [421, V, 'p2p'],
    [443, 0, 'https'],
    [444, 96, 'onion'],
    [445, 296, 'onion3'],
    [446, V, 'garlic64'],
    [460, 0, 'quic'],
    [477, 0, 'ws'],
    [478, 0, 'wss'],
    [479, 0, 'p2p-websocket-star'],
    [480, 0, 'http'],
    [777, V, 'memory']
];
// populate tables
table.forEach(row => {
    const proto = createProtocol(...row);
    codes[proto.code] = proto;
    names[proto.name] = proto;
});
function createProtocol(code, size, name, resolvable, path) {
    return {
        code,
        size,
        name,
        resolvable: Boolean(resolvable),
        path: Boolean(path)
    };
}
function getProtocol(proto) {
    if (typeof proto === 'number') {
        if (codes[proto] != null) {
            return codes[proto];
        }
        throw new Error(`no protocol with code: ${proto}`);
    }
    else if (typeof proto === 'string') {
        if (names[proto] != null) {
            return names[proto];
        }
        throw new Error(`no protocol with name: ${proto}`);
    }
    throw new Error(`invalid protocol id type: ${typeof proto}`);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/cid.js
var cid = __webpack_require__(24875);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base32.js
var base32 = __webpack_require__(13528);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/bases/base58.js
var base58 = __webpack_require__(62593);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@9.6.5/node_modules/multiformats/esm/src/hashes/digest.js
var digest = __webpack_require__(38875);
// EXTERNAL MODULE: ./node_modules/.pnpm/varint@6.0.0/node_modules/varint/index.js
var varint = __webpack_require__(39057);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/from-string.js
var from_string = __webpack_require__(88138);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/concat.js
var concat = __webpack_require__(67698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@10.3.3_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/convert.js










/**
 * converts (serializes) addresses
 */
function convert(proto, a) {
    if (a instanceof Uint8Array) {
        return convertToString(proto, a);
    }
    else {
        return convertToBytes(proto, a);
    }
}
/**
 * Convert [code,Uint8Array] to string
 */
function convertToString(proto, buf) {
    const protocol = getProtocol(proto);
    switch (protocol.code) {
        case 4: // ipv4
        case 41: // ipv6
            return bytes2ip(buf);
        case 6: // tcp
        case 273: // udp
        case 33: // dccp
        case 132: // sctp
            return bytes2port(buf).toString();
        case 53: // dns
        case 54: // dns4
        case 55: // dns6
        case 56: // dnsaddr
        case 400: // unix
        case 777: // memory
            return bytes2str(buf);
        case 421: // ipfs
            return bytes2mh(buf);
        case 444: // onion
            return bytes2onion(buf);
        case 445: // onion3
            return bytes2onion(buf);
        default:
            return (0,to_string/* toString */.B)(buf, 'base16'); // no clue. convert to hex
    }
}
function convertToBytes(proto, str) {
    const protocol = getProtocol(proto);
    switch (protocol.code) {
        case 4: // ipv4
            return ip2bytes(str);
        case 41: // ipv6
            return ip2bytes(str);
        case 6: // tcp
        case 273: // udp
        case 33: // dccp
        case 132: // sctp
            return port2bytes(parseInt(str, 10));
        case 53: // dns
        case 54: // dns4
        case 55: // dns6
        case 56: // dnsaddr
        case 400: // unix
        case 777: // memory
            return str2bytes(str);
        case 421: // ipfs
            return mh2bytes(str);
        case 444: // onion
            return onion2bytes(str);
        case 445: // onion3
            return onion32bytes(str);
        default:
            return (0,from_string/* fromString */.m)(str, 'base16'); // no clue. convert from hex
    }
}
function ip2bytes(ipString) {
    if (!is_ip/* isIP */.h6(ipString)) {
        throw new Error('invalid ip address');
    }
    return toBytes(ipString);
}
function bytes2ip(ipBuff) {
    const ipString = ip_toString(ipBuff, 0, ipBuff.length);
    if (ipString == null || !is_ip/* isIP */.h6(ipString)) {
        throw new Error('invalid ip address');
    }
    return ipString;
}
function port2bytes(port) {
    const buf = new ArrayBuffer(2);
    const view = new DataView(buf);
    view.setUint16(0, port);
    return new Uint8Array(buf);
}
function bytes2port(buf) {
    const view = new DataView(buf.buffer);
    return view.getUint16(buf.byteOffset);
}
function str2bytes(str) {
    const buf = (0,from_string/* fromString */.m)(str);
    const size = Uint8Array.from(varint.encode(buf.length));
    return (0,concat/* concat */.z)([size, buf], size.length + buf.length);
}
function bytes2str(buf) {
    const size = varint.decode(buf);
    buf = buf.slice(varint.decode.bytes);
    if (buf.length !== size) {
        throw new Error('inconsistent lengths');
    }
    return (0,to_string/* toString */.B)(buf);
}
function mh2bytes(hash) {
    let mh;
    if (hash[0] === 'Q' || hash[0] === '1') {
        mh = digest/* decode */.Jx(base58.base58btc.decode(`z${hash}`)).bytes;
    }
    else {
        mh = cid/* CID */.k.parse(hash).multihash.bytes;
    }
    // the address is a varint prefixed multihash string representation
    const size = Uint8Array.from(varint.encode(mh.length));
    return (0,concat/* concat */.z)([size, mh], size.length + mh.length);
}
/**
 * Converts bytes to bas58btc string
 */
function bytes2mh(buf) {
    const size = varint.decode(buf);
    const address = buf.slice(varint.decode.bytes);
    if (address.length !== size) {
        throw new Error('inconsistent lengths');
    }
    return (0,to_string/* toString */.B)(address, 'base58btc');
}
function onion2bytes(str) {
    const addr = str.split(':');
    if (addr.length !== 2) {
        throw new Error(`failed to parse onion addr: ["'${addr.join('", "')}'"]' does not contain a port number`);
    }
    if (addr[0].length !== 16) {
        throw new Error(`failed to parse onion addr: ${addr[0]} not a Tor onion address.`);
    }
    // onion addresses do not include the multibase prefix, add it before decoding
    const buf = base32.base32.decode('b' + addr[0]);
    // onion port number
    const port = parseInt(addr[1], 10);
    if (port < 1 || port > 65536) {
        throw new Error('Port number is not in range(1, 65536)');
    }
    const portBuf = port2bytes(port);
    return (0,concat/* concat */.z)([buf, portBuf], buf.length + portBuf.length);
}
function onion32bytes(str) {
    const addr = str.split(':');
    if (addr.length !== 2) {
        throw new Error(`failed to parse onion addr: ["'${addr.join('", "')}'"]' does not contain a port number`);
    }
    if (addr[0].length !== 56) {
        throw new Error(`failed to parse onion addr: ${addr[0]} not a Tor onion3 address.`);
    }
    // onion addresses do not include the multibase prefix, add it before decoding
    const buf = base32.base32.decode(`b${addr[0]}`);
    // onion port number
    const port = parseInt(addr[1], 10);
    if (port < 1 || port > 65536) {
        throw new Error('Port number is not in range(1, 65536)');
    }
    const portBuf = port2bytes(port);
    return (0,concat/* concat */.z)([buf, portBuf], buf.length + portBuf.length);
}
function bytes2onion(buf) {
    const addrBytes = buf.slice(0, buf.length - 2);
    const portBytes = buf.slice(buf.length - 2);
    const addr = (0,to_string/* toString */.B)(addrBytes, 'base32');
    const port = bytes2port(portBytes);
    return `${addr}:${port}`;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@10.3.3_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/codec.js





/**
 * string -> [[str name, str addr]... ]
 */
function stringToStringTuples(str) {
    const tuples = [];
    const parts = str.split('/').slice(1); // skip first empty elem
    if (parts.length === 1 && parts[0] === '') {
        return [];
    }
    for (let p = 0; p < parts.length; p++) {
        const part = parts[p];
        const proto = getProtocol(part);
        if (proto.size === 0) {
            tuples.push([part]);
            continue;
        }
        p++; // advance addr part
        if (p >= parts.length) {
            throw ParseError('invalid address: ' + str);
        }
        // if it's a path proto, take the rest
        if (proto.path === true) {
            tuples.push([
                part,
                // TODO: should we need to check each path part to see if it's a proto?
                // This would allow for other protocols to be added after a unix path,
                // however it would have issues if the path had a protocol name in the path
                cleanPath(parts.slice(p).join('/'))
            ]);
            break;
        }
        tuples.push([part, parts[p]]);
    }
    return tuples;
}
/**
 * [[str name, str addr]... ] -> string
 */
function stringTuplesToString(tuples) {
    const parts = [];
    tuples.map((tup) => {
        const proto = protoFromTuple(tup);
        parts.push(proto.name);
        if (tup.length > 1 && tup[1] != null) {
            parts.push(tup[1]);
        }
        return null;
    });
    return cleanPath(parts.join('/'));
}
/**
 * [[str name, str addr]... ] -> [[int code, Uint8Array]... ]
 */
function stringTuplesToTuples(tuples) {
    return tuples.map((tup) => {
        if (!Array.isArray(tup)) {
            tup = [tup];
        }
        const proto = protoFromTuple(tup);
        if (tup.length > 1) {
            return [proto.code, convertToBytes(proto.code, tup[1])];
        }
        return [proto.code];
    });
}
/**
 * Convert tuples to string tuples
 *
 * [[int code, Uint8Array]... ] -> [[int code, str addr]... ]
 */
function tuplesToStringTuples(tuples) {
    return tuples.map(tup => {
        const proto = protoFromTuple(tup);
        if (tup[1] != null) {
            return [proto.code, convertToString(proto.code, tup[1])];
        }
        return [proto.code];
    });
}
/**
 * [[int code, Uint8Array ]... ] -> Uint8Array
 */
function tuplesToBytes(tuples) {
    return fromBytes((0,concat/* concat */.z)(tuples.map((tup) => {
        const proto = protoFromTuple(tup);
        let buf = Uint8Array.from(varint.encode(proto.code));
        if (tup.length > 1 && tup[1] != null) {
            buf = (0,concat/* concat */.z)([buf, tup[1]]); // add address buffer
        }
        return buf;
    })));
}
function sizeForAddr(p, addr) {
    if (p.size > 0) {
        return p.size / 8;
    }
    else if (p.size === 0) {
        return 0;
    }
    else {
        const size = varint.decode(addr);
        return size + varint.decode.bytes;
    }
}
function bytesToTuples(buf) {
    const tuples = [];
    let i = 0;
    while (i < buf.length) {
        const code = varint.decode(buf, i);
        const n = varint.decode.bytes;
        const p = getProtocol(code);
        const size = sizeForAddr(p, buf.slice(i + n));
        if (size === 0) {
            tuples.push([code]);
            i += n;
            continue;
        }
        const addr = buf.slice(i + n, i + n + size);
        i += (size + n);
        if (i > buf.length) { // did not end _exactly_ at buffer.length
            throw ParseError('Invalid address Uint8Array: ' + (0,to_string/* toString */.B)(buf, 'base16'));
        }
        // ok, tuple seems good.
        tuples.push([code, addr]);
    }
    return tuples;
}
/**
 * Uint8Array -> String
 */
function bytesToString(buf) {
    const a = bytesToTuples(buf);
    const b = tuplesToStringTuples(a);
    return stringTuplesToString(b);
}
/**
 * String -> Uint8Array
 */
function stringToBytes(str) {
    str = cleanPath(str);
    const a = stringToStringTuples(str);
    const b = stringTuplesToTuples(a);
    return tuplesToBytes(b);
}
/**
 * String -> Uint8Array
 */
function fromString(str) {
    return stringToBytes(str);
}
/**
 * Uint8Array -> Uint8Array
 */
function fromBytes(buf) {
    const err = validateBytes(buf);
    if (err != null) {
        throw err;
    }
    return Uint8Array.from(buf); // copy
}
function validateBytes(buf) {
    try {
        bytesToTuples(buf); // try to parse. will throw if breaks
    }
    catch (err) {
        return err;
    }
}
function isValidBytes(buf) {
    return validateBytes(buf) === undefined;
}
function cleanPath(str) {
    return '/' + str.trim().split('/').filter((a) => a).join('/');
}
function ParseError(str) {
    return new Error('Error parsing address: ' + str);
}
function protoFromTuple(tup) {
    const proto = getProtocol(tup[0]);
    return proto;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(36676);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/equals.js
var equals = __webpack_require__(36588);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@10.3.3_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/index.js








const inspect = Symbol.for('nodejs.util.inspect.custom');
const IP_CODES = [
    getProtocol('ip4').code,
    getProtocol('ip6').code
];
const DNS_CODES = [
    getProtocol('dns').code,
    getProtocol('dns4').code,
    getProtocol('dns6').code,
    getProtocol('dnsaddr').code
];
const P2P_CODES = [
    getProtocol('p2p').code,
    getProtocol('ipfs').code
];
const TCP_UDP_CODES = [
    getProtocol('tcp').code,
    getProtocol('udp').code
];
const resolvers = new Map();
const symbol = Symbol.for('@multiformats/js-multiaddr/multiaddr');
/**
 * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
 * a Uint8Array, String or another Multiaddr instance
 * public key.
 *
 */
class Multiaddr {
    /**
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     * ```
     *
     * @param {MultiaddrInput} [addr] - If String or Uint8Array, needs to adhere to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
     */
    constructor(addr) {
        // default
        if (addr == null) {
            addr = '';
        }
        // Define symbol
        Object.defineProperty(this, symbol, { value: true });
        if (addr instanceof Uint8Array) {
            this.bytes = fromBytes(addr);
        }
        else if (typeof addr === 'string') {
            if (addr.length > 0 && addr.charAt(0) !== '/') {
                throw new Error(`multiaddr "${addr}" must start with a "/"`);
            }
            this.bytes = fromString(addr);
        }
        else if (Multiaddr.isMultiaddr(addr)) { // Multiaddr
            this.bytes = fromBytes(addr.bytes); // validate + copy buffer
        }
        else {
            throw new Error('addr must be a string, Buffer, or another Multiaddr');
        }
    }
    /**
     * Returns Multiaddr as a String
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toString()
     * // '/ip4/127.0.0.1/tcp/4001'
     * ```
     */
    toString() {
        return bytesToString(this.bytes);
    }
    /**
     * Returns Multiaddr as a JSON encoded object
     *
     * @example
     * ```js
     * JSON.stringify(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
     * // '/ip4/127.0.0.1/tcp/4001'
     * ```
     */
    toJSON() {
        return this.toString();
    }
    /**
     * Returns Multiaddr as a convinient options object to be used with net.createConnection
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toOptions()
     * // { family: 4, host: '127.0.0.1', transport: 'tcp', port: 4001 }
     * ```
     */
    toOptions() {
        const codes = this.protoCodes();
        const parts = this.toString().split('/').slice(1);
        let transport;
        let port;
        if (parts.length > 2) {
            // default to https when protocol & port are omitted from DNS addrs
            if (DNS_CODES.includes(codes[0]) && P2P_CODES.includes(codes[1])) {
                transport = getProtocol('tcp').name;
                port = 443;
            }
            else {
                transport = getProtocol(parts[2]).name;
                port = parseInt(parts[3]);
            }
        }
        else if (DNS_CODES.includes(codes[0])) {
            transport = getProtocol('tcp').name;
            port = 443;
        }
        else {
            throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".');
        }
        const opts = {
            family: (codes[0] === 41 || codes[0] === 55) ? 6 : 4,
            host: parts[1],
            transport,
            port
        };
        return opts;
    }
    /**
     * Returns the protocols the Multiaddr is defined with, as an array of objects, in
     * left-to-right order. Each object contains the protocol code, protocol name,
     * and the size of its address space in bits.
     * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protos()
     * // [ { code: 4, size: 32, name: 'ip4' },
     * //   { code: 6, size: 16, name: 'tcp' } ]
     * ```
     */
    protos() {
        return this.protoCodes().map(code => Object.assign({}, getProtocol(code)));
    }
    /**
     * Returns the codes of the protocols in left-to-right order.
     * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
     *
     * @example
     * ```js
     * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoCodes()
     * // [ 4, 6 ]
     * ```
     */
    protoCodes() {
        const codes = [];
        const buf = this.bytes;
        let i = 0;
        while (i < buf.length) {
            const code = varint.decode(buf, i);
            const n = varint.decode.bytes;
            const p = getProtocol(code);
            const size = sizeForAddr(p, buf.slice(i + n));
            i += (size + n);
            codes.push(code);
        }
        return codes;
    }
    /**
     * Returns the names of the protocols in left-to-right order.
     * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protoNames()
     * // [ 'ip4', 'tcp' ]
     * ```
     */
    protoNames() {
        return this.protos().map(proto => proto.name);
    }
    /**
     * Returns a tuple of parts
     *
     * @example
     * ```js
     * new Multiaddr("/ip4/127.0.0.1/tcp/4001").tuples()
     * // [ [ 4, <Buffer 7f 00 00 01> ], [ 6, <Buffer 0f a1> ] ]
     * ```
     */
    tuples() {
        return bytesToTuples(this.bytes);
    }
    /**
     * Returns a tuple of string/number parts
     * - tuples[][0] = code of protocol
     * - tuples[][1] = contents of address
     *
     * @example
     * ```js
     * new Multiaddr("/ip4/127.0.0.1/tcp/4001").stringTuples()
     * // [ [ 4, '127.0.0.1' ], [ 6, '4001' ] ]
     * ```
     */
    stringTuples() {
        const t = bytesToTuples(this.bytes);
        return tuplesToStringTuples(t);
    }
    /**
     * Encapsulates a Multiaddr in another Multiaddr
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
     *
     * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     *
     * const mh3 = mh1.encapsulate(mh2)
     * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
     *
     * mh3.toString()
     * // '/ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001'
     * ```
     *
     * @param {MultiaddrInput} addr - Multiaddr to add into this Multiaddr
     */
    encapsulate(addr) {
        addr = new Multiaddr(addr);
        return new Multiaddr(this.toString() + addr.toString());
    }
    /**
     * Decapsulates a Multiaddr from another Multiaddr
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
     *
     * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     *
     * const mh3 = mh1.encapsulate(mh2)
     * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
     *
     * mh3.decapsulate(mh2).toString()
     * // '/ip4/8.8.8.8/tcp/1080'
     * ```
     *
     * @param {Multiaddr | string} addr - Multiaddr to remove from this Multiaddr
     */
    decapsulate(addr) {
        const addrString = addr.toString();
        const s = this.toString();
        const i = s.lastIndexOf(addrString);
        if (i < 0) {
            throw new Error(`Address ${this.toString()} does not contain subaddress: ${addr.toString()}`);
        }
        return new Multiaddr(s.slice(0, i));
    }
    /**
     * A more reliable version of `decapsulate` if you are targeting a
     * specific code, such as 421 (the `p2p` protocol code). The last index of the code
     * will be removed from the `Multiaddr`, and a new instance will be returned.
     * If the code is not present, the original `Multiaddr` is returned.
     *
     * @example
     * ```js
     * const addr = new Multiaddr('/ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC')
     * // <Multiaddr 0400... - /ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC>
     *
     * addr.decapsulateCode(421).toString()
     * // '/ip4/0.0.0.0/tcp/8080'
     *
     * new Multiaddr('/ip4/127.0.0.1/tcp/8080').decapsulateCode(421).toString()
     * // '/ip4/127.0.0.1/tcp/8080'
     * ```
     */
    decapsulateCode(code) {
        const tuples = this.tuples();
        for (let i = tuples.length - 1; i >= 0; i--) {
            if (tuples[i][0] === code) {
                return new Multiaddr(tuplesToBytes(tuples.slice(0, i)));
            }
        }
        return this;
    }
    /**
     * Extract the peerId if the multiaddr contains one
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string>
     *
     * // should return QmValidBase58string or null if the id is missing or invalid
     * const peerId = mh1.getPeerId()
     * ```
     */
    getPeerId() {
        try {
            const tuples = this.stringTuples().filter((tuple) => {
                if (tuple[0] === names.ipfs.code) {
                    return true;
                }
                return false;
            });
            // Get the last ipfs tuple ['ipfs', 'peerid string']
            const tuple = tuples.pop();
            if (tuple?.[1] != null) {
                const peerIdStr = tuple[1];
                // peer id is base58btc encoded string but not multibase encoded so add the `z`
                // prefix so we can validate that it is correctly encoded
                if (peerIdStr[0] === 'Q' || peerIdStr[0] === '1') {
                    return (0,to_string/* toString */.B)(base58.base58btc.decode(`z${peerIdStr}`), 'base58btc');
                }
                // try to parse peer id as CID
                return (0,to_string/* toString */.B)(cid/* CID */.k.parse(peerIdStr).multihash.bytes, 'base58btc');
            }
            return null;
        }
        catch (e) {
            return null;
        }
    }
    /**
     * Extract the path if the multiaddr contains one
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock>
     *
     * // should return utf8 string or null if the id is missing or invalid
     * const path = mh1.getPath()
     * ```
     */
    getPath() {
        let path = null;
        try {
            path = this.stringTuples().filter((tuple) => {
                const proto = getProtocol(tuple[0]);
                if (proto.path === true) {
                    return true;
                }
                return false;
            })[0][1];
            if (path == null) {
                path = null;
            }
        }
        catch {
            path = null;
        }
        return path;
    }
    /**
     * Checks if two Multiaddrs are the same
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
     *
     * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     *
     * mh1.equals(mh1)
     * // true
     *
     * mh1.equals(mh2)
     * // false
     * ```
     */
    equals(addr) {
        return (0,equals/* equals */.f)(this.bytes, addr.bytes);
    }
    /**
     * Resolve multiaddr if containing resolvable hostname.
     *
     * @example
     * ```js
     * Multiaddr.resolvers.set('dnsaddr', resolverFunction)
     * const mh1 = new Multiaddr('/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb')
     * const resolvedMultiaddrs = await mh1.resolve()
     * // [
     * //   <Multiaddr 04934b5353060fa1a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/4001/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
     * //   <Multiaddr 04934b53530601bbde03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/443/wss/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
     * //   <Multiaddr 04934b535391020fa1cc03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/udp/4001/quic/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>
     * // ]
     * ```
     */
    async resolve(options) {
        const resolvableProto = this.protos().find((p) => p.resolvable);
        // Multiaddr is not resolvable?
        if (resolvableProto == null) {
            return [this];
        }
        const resolver = resolvers.get(resolvableProto.name);
        if (resolver == null) {
            throw err_code(new Error(`no available resolver for ${resolvableProto.name}`), 'ERR_NO_AVAILABLE_RESOLVER');
        }
        const addresses = await resolver(this, options);
        return addresses.map((a) => new Multiaddr(a));
    }
    /**
     * Gets a Multiaddrs node-friendly address object. Note that protocol information
     * is left out: in Node (and most network systems) the protocol is unknowable
     * given only the address.
     *
     * Has to be a ThinWaist Address, otherwise throws error
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').nodeAddress()
     * // {family: 4, address: '127.0.0.1', port: 4001}
     * ```
     */
    nodeAddress() {
        const codes = this.protoCodes();
        const names = this.protoNames();
        const parts = this.toString().split('/').slice(1);
        let protocol = getProtocol(parts[2]).code;
        let port = parseInt(parts[3]);
        // default to https when protocol & port are omitted from DNS addrs
        if (DNS_CODES.includes(codes[0]) && P2P_CODES.includes(codes[1])) {
            protocol = getProtocol('tcp').code;
            port = 443;
        }
        if (parts.length < 4) {
            throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".');
        }
        else if (!IP_CODES.includes(codes[0]) && !DNS_CODES.includes(codes[0])) {
            throw new Error(`no protocol with name: "'${names[0]}'". Must have a valid family name: "{ip4, ip6, dns, dns4, dns6, dnsaddr}".`);
        }
        else if (!TCP_UDP_CODES.includes(protocol)) {
            throw new Error(`no protocol with name: "'${names[1]}'". Must have a valid transport protocol: "{tcp, udp}".`);
        }
        return {
            family: (codes[0] === 41 || codes[0] === 55) ? 6 : 4,
            address: parts[1],
            port // tcp or udp port
        };
    }
    /**
     * Returns if a Multiaddr is a Thin Waist address or not.
     *
     * Thin Waist is if a Multiaddr adheres to the standard combination of:
     *
     * `{IPv4, IPv6}/{TCP, UDP}`
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     * const mh2 = new Multiaddr('/ip4/192.168.2.1/tcp/5001')
     * // <Multiaddr 04c0a80201061389 - /ip4/192.168.2.1/tcp/5001>
     * const mh3 = mh1.encapsulate(mh2)
     * // <Multiaddr 047f000001060fa104c0a80201061389 - /ip4/127.0.0.1/tcp/4001/ip4/192.168.2.1/tcp/5001>
     * const mh4 = new Multiaddr('/ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a')
     * // <Multiaddr 047f0000010607d0de039302a503221220d52ebb89d85b02a284948203a62ff28389c57c9f42beec4ec20db76a64835843 - /ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a>
     * mh1.isThinWaistAddress()
     * // true
     * mh2.isThinWaistAddress()
     * // true
     * mh3.isThinWaistAddress()
     * // false
     * mh4.isThinWaistAddress()
     * // false
     * ```
     */
    isThinWaistAddress(addr) {
        const protos = (addr ?? this).protos();
        if (protos.length !== 2) {
            return false;
        }
        if (protos[0].code !== 4 && protos[0].code !== 41) {
            return false;
        }
        if (protos[1].code !== 6 && protos[1].code !== 273) {
            return false;
        }
        return true;
    }
    /**
     * Creates a Multiaddr from a node-friendly address object
     *
     * @example
     * ```js
     * Multiaddr.fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     * ```
     */
    static fromNodeAddress(addr, transport) {
        if (addr == null) {
            throw new Error('requires node address object');
        }
        if (transport == null) {
            throw new Error('requires transport protocol');
        }
        let ip;
        switch (addr.family) {
            case 4:
                ip = 'ip4';
                break;
            case 6:
                ip = 'ip6';
                break;
            default:
                throw Error('Invalid addr family, should be 4 or 6.');
        }
        return new Multiaddr('/' + [ip, addr.address, transport, addr.port].join('/'));
    }
    /**
     * Returns if something is a Multiaddr that is a name
     */
    static isName(addr) {
        if (!Multiaddr.isMultiaddr(addr)) {
            return false;
        }
        // if a part of the multiaddr is resolvable, then return true
        return addr.protos().some((proto) => proto.resolvable);
    }
    /**
     * Check if object is a CID instance
     */
    static isMultiaddr(value) {
        return Boolean(value?.[symbol]);
    }
    /**
     * Returns Multiaddr as a human-readable string.
     * For post Node.js v10.0.0.
     * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
     *
     * @example
     * ```js
     * console.log(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
     * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
     * ```
     */
    [inspect]() {
        return '<Multiaddr ' +
            (0,to_string/* toString */.B)(this.bytes, 'base16') + ' - ' +
            bytesToString(this.bytes) + '>';
    }
    /**
     * Returns Multiaddr as a human-readable string.
     * Fallback for pre Node.js v10.0.0.
     * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').inspect()
     * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
     * ```
     */
    inspect() {
        return '<Multiaddr ' +
            (0,to_string/* toString */.B)(this.bytes, 'base16') + ' - ' +
            bytesToString(this.bytes) + '>';
    }
}
Multiaddr.resolvers = resolvers;
/**
 * Static factory
 */
function multiaddr(addr) {
    return new Multiaddr(addr);
}




/***/ }),

/***/ 88556:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h2: () => (/* binding */ isMultiaddr),
  HM: () => (/* binding */ multiaddr)
});

// UNUSED EXPORTS: fromNodeAddress, isName, protocols, resolvers

// EXTERNAL MODULE: ./node_modules/.pnpm/@chainsafe+is-ip@2.0.1/node_modules/@chainsafe/is-ip/lib/is-ip.js + 2 modules
var is_ip = __webpack_require__(55086);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/to-string.js
var to_string = __webpack_require__(5766);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@11.6.1_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/ip.js



const isV4 = is_ip/* isIPv4 */.C;
const isV6 = is_ip/* isIPv6 */.aY;
// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L7
// but with buf/offset args removed because we don't use them
const toBytes = function (ip) {
    let offset = 0;
    ip = ip.toString().trim();
    if (isV4(ip)) {
        const bytes = new Uint8Array(offset + 4);
        ip.split(/\./g).forEach((byte) => {
            bytes[offset++] = parseInt(byte, 10) & 0xff;
        });
        return bytes;
    }
    if (isV6(ip)) {
        const sections = ip.split(':', 8);
        let i;
        for (i = 0; i < sections.length; i++) {
            const isv4 = isV4(sections[i]);
            let v4Buffer;
            if (isv4) {
                v4Buffer = toBytes(sections[i]);
                sections[i] = (0,to_string/* toString */.B)(v4Buffer.slice(0, 2), 'base16');
            }
            if (v4Buffer != null && ++i < 8) {
                sections.splice(i, 0, (0,to_string/* toString */.B)(v4Buffer.slice(2, 4), 'base16'));
            }
        }
        if (sections[0] === '') {
            while (sections.length < 8)
                sections.unshift('0');
        }
        else if (sections[sections.length - 1] === '') {
            while (sections.length < 8)
                sections.push('0');
        }
        else if (sections.length < 8) {
            for (i = 0; i < sections.length && sections[i] !== ''; i++)
                ;
            const argv = [i, 1];
            for (i = 9 - sections.length; i > 0; i--) {
                argv.push('0');
            }
            sections.splice.apply(sections, argv);
        }
        const bytes = new Uint8Array(offset + 16);
        for (i = 0; i < sections.length; i++) {
            const word = parseInt(sections[i], 16);
            bytes[offset++] = (word >> 8) & 0xff;
            bytes[offset++] = word & 0xff;
        }
        return bytes;
    }
    throw new Error('invalid ip address');
};
// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L63
const ip_toString = function (buf, offset = 0, length) {
    offset = ~~offset;
    length = length ?? (buf.length - offset);
    const view = new DataView(buf.buffer);
    if (length === 4) {
        const result = [];
        // IPv4
        for (let i = 0; i < length; i++) {
            result.push(buf[offset + i]);
        }
        return result.join('.');
    }
    if (length === 16) {
        const result = [];
        // IPv6
        for (let i = 0; i < length; i += 2) {
            result.push(view.getUint16(offset + i).toString(16));
        }
        return result.join(':')
            .replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3')
            .replace(/:{3,4}/, '::');
    }
    return '';
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@11.6.1_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/protocols-table.js
const V = -1;
const names = {};
const codes = {};
const table = [
    [4, 32, 'ip4'],
    [6, 16, 'tcp'],
    [33, 16, 'dccp'],
    [41, 128, 'ip6'],
    [42, V, 'ip6zone'],
    [43, 8, 'ipcidr'],
    [53, V, 'dns', true],
    [54, V, 'dns4', true],
    [55, V, 'dns6', true],
    [56, V, 'dnsaddr', true],
    [132, 16, 'sctp'],
    [273, 16, 'udp'],
    [275, 0, 'p2p-webrtc-star'],
    [276, 0, 'p2p-webrtc-direct'],
    [277, 0, 'p2p-stardust'],
    [280, 0, 'webrtc'],
    [281, 0, 'webrtc-w3c'],
    [290, 0, 'p2p-circuit'],
    [301, 0, 'udt'],
    [302, 0, 'utp'],
    [400, V, 'unix', false, true],
    // `ipfs` is added before `p2p` for legacy support.
    // All text representations will default to `p2p`, but `ipfs` will
    // still be supported
    [421, V, 'ipfs'],
    // `p2p` is the preferred name for 421, and is now the default
    [421, V, 'p2p'],
    [443, 0, 'https'],
    [444, 96, 'onion'],
    [445, 296, 'onion3'],
    [446, V, 'garlic64'],
    [448, 0, 'tls'],
    [449, V, 'sni'],
    [460, 0, 'quic'],
    [461, 0, 'quic-v1'],
    [465, 0, 'webtransport'],
    [466, V, 'certhash'],
    [477, 0, 'ws'],
    [478, 0, 'wss'],
    [479, 0, 'p2p-websocket-star'],
    [480, 0, 'http'],
    [777, V, 'memory']
];
// populate tables
table.forEach(row => {
    const proto = createProtocol(...row);
    codes[proto.code] = proto;
    names[proto.name] = proto;
});
function createProtocol(code, size, name, resolvable, path) {
    return {
        code,
        size,
        name,
        resolvable: Boolean(resolvable),
        path: Boolean(path)
    };
}
/**
 * For the passed proto string or number, return a {@link Protocol}
 *
 * @example
 *
 * ```js
 * import { protocol } from '@multiformats/multiaddr'
 *
 * console.info(protocol(4))
 * // { code: 4, size: 32, name: 'ip4', resolvable: false, path: false }
 * ```
 */
function getProtocol(proto) {
    if (typeof proto === 'number') {
        if (codes[proto] != null) {
            return codes[proto];
        }
        throw new Error(`no protocol with code: ${proto}`);
    }
    else if (typeof proto === 'string') {
        if (names[proto] != null) {
            return names[proto];
        }
        throw new Error(`no protocol with name: ${proto}`);
    }
    throw new Error(`invalid protocol id type: ${typeof proto}`);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/cid.js
var cid = __webpack_require__(81525);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base32.js
var base32 = __webpack_require__(75439);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/bases/base58.js
var base58 = __webpack_require__(7820);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/basics.js + 9 modules
var basics = __webpack_require__(49749);
// EXTERNAL MODULE: ./node_modules/.pnpm/multiformats@11.0.2/node_modules/multiformats/src/hashes/digest.js
var digest = __webpack_require__(1851);
// EXTERNAL MODULE: ./node_modules/.pnpm/varint@6.0.0/node_modules/varint/index.js
var varint = __webpack_require__(39057);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/from-string.js
var from_string = __webpack_require__(6028);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/concat.js
var concat = __webpack_require__(1987);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@11.6.1_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/convert.js
/**
 * @packageDocumentation
 *
 * Provides methods for converting
 */











function convert(proto, a) {
    if (a instanceof Uint8Array) {
        return convertToString(proto, a);
    }
    else {
        return convertToBytes(proto, a);
    }
}
/**
 * Convert [code,Uint8Array] to string
 */
function convertToString(proto, buf) {
    const protocol = getProtocol(proto);
    switch (protocol.code) {
        case 4: // ipv4
        case 41: // ipv6
            return bytes2ip(buf);
        case 42: // ipv6zone
            return bytes2str(buf);
        case 6: // tcp
        case 273: // udp
        case 33: // dccp
        case 132: // sctp
            return bytes2port(buf).toString();
        case 53: // dns
        case 54: // dns4
        case 55: // dns6
        case 56: // dnsaddr
        case 400: // unix
        case 449: // sni
        case 777: // memory
            return bytes2str(buf);
        case 421: // ipfs
            return bytes2mh(buf);
        case 444: // onion
            return bytes2onion(buf);
        case 445: // onion3
            return bytes2onion(buf);
        case 466: // certhash
            return bytes2mb(buf);
        default:
            return (0,to_string/* toString */.B)(buf, 'base16'); // no clue. convert to hex
    }
}
function convertToBytes(proto, str) {
    const protocol = getProtocol(proto);
    switch (protocol.code) {
        case 4: // ipv4
            return ip2bytes(str);
        case 41: // ipv6
            return ip2bytes(str);
        case 42: // ipv6zone
            return str2bytes(str);
        case 6: // tcp
        case 273: // udp
        case 33: // dccp
        case 132: // sctp
            return port2bytes(parseInt(str, 10));
        case 53: // dns
        case 54: // dns4
        case 55: // dns6
        case 56: // dnsaddr
        case 400: // unix
        case 449: // sni
        case 777: // memory
            return str2bytes(str);
        case 421: // ipfs
            return mh2bytes(str);
        case 444: // onion
            return onion2bytes(str);
        case 445: // onion3
            return onion32bytes(str);
        case 466: // certhash
            return mb2bytes(str);
        default:
            return (0,from_string/* fromString */.m)(str, 'base16'); // no clue. convert from hex
    }
}
const decoders = Object.values(basics/* bases */.gh).map((c) => c.decoder);
const anybaseDecoder = (function () {
    let acc = decoders[0].or(decoders[1]);
    decoders.slice(2).forEach((d) => (acc = acc.or(d)));
    return acc;
})();
function ip2bytes(ipString) {
    if (!is_ip/* isIP */.h6(ipString)) {
        throw new Error('invalid ip address');
    }
    return toBytes(ipString);
}
function bytes2ip(ipBuff) {
    const ipString = ip_toString(ipBuff, 0, ipBuff.length);
    if (ipString == null) {
        throw new Error('ipBuff is required');
    }
    if (!is_ip/* isIP */.h6(ipString)) {
        throw new Error('invalid ip address');
    }
    return ipString;
}
function port2bytes(port) {
    const buf = new ArrayBuffer(2);
    const view = new DataView(buf);
    view.setUint16(0, port);
    return new Uint8Array(buf);
}
function bytes2port(buf) {
    const view = new DataView(buf.buffer);
    return view.getUint16(buf.byteOffset);
}
function str2bytes(str) {
    const buf = (0,from_string/* fromString */.m)(str);
    const size = Uint8Array.from(varint.encode(buf.length));
    return (0,concat/* concat */.z)([size, buf], size.length + buf.length);
}
function bytes2str(buf) {
    const size = varint.decode(buf);
    buf = buf.slice(varint.decode.bytes);
    if (buf.length !== size) {
        throw new Error('inconsistent lengths');
    }
    return (0,to_string/* toString */.B)(buf);
}
function mh2bytes(hash) {
    let mh;
    if (hash[0] === 'Q' || hash[0] === '1') {
        mh = digest/* decode */.Jx(base58.base58btc.decode(`z${hash}`)).bytes;
    }
    else {
        mh = cid/* CID */.k0.parse(hash).multihash.bytes;
    }
    // the address is a varint prefixed multihash string representation
    const size = Uint8Array.from(varint.encode(mh.length));
    return (0,concat/* concat */.z)([size, mh], size.length + mh.length);
}
function mb2bytes(mbstr) {
    const mb = anybaseDecoder.decode(mbstr);
    const size = Uint8Array.from(varint.encode(mb.length));
    return (0,concat/* concat */.z)([size, mb], size.length + mb.length);
}
function bytes2mb(buf) {
    const size = varint.decode(buf);
    const hash = buf.slice(varint.decode.bytes);
    if (hash.length !== size) {
        throw new Error('inconsistent lengths');
    }
    return 'u' + (0,to_string/* toString */.B)(hash, 'base64url');
}
/**
 * Converts bytes to bas58btc string
 */
function bytes2mh(buf) {
    const size = varint.decode(buf);
    const address = buf.slice(varint.decode.bytes);
    if (address.length !== size) {
        throw new Error('inconsistent lengths');
    }
    return (0,to_string/* toString */.B)(address, 'base58btc');
}
function onion2bytes(str) {
    const addr = str.split(':');
    if (addr.length !== 2) {
        throw new Error(`failed to parse onion addr: ["'${addr.join('", "')}'"]' does not contain a port number`);
    }
    if (addr[0].length !== 16) {
        throw new Error(`failed to parse onion addr: ${addr[0]} not a Tor onion address.`);
    }
    // onion addresses do not include the multibase prefix, add it before decoding
    const buf = base32.base32.decode('b' + addr[0]);
    // onion port number
    const port = parseInt(addr[1], 10);
    if (port < 1 || port > 65536) {
        throw new Error('Port number is not in range(1, 65536)');
    }
    const portBuf = port2bytes(port);
    return (0,concat/* concat */.z)([buf, portBuf], buf.length + portBuf.length);
}
function onion32bytes(str) {
    const addr = str.split(':');
    if (addr.length !== 2) {
        throw new Error(`failed to parse onion addr: ["'${addr.join('", "')}'"]' does not contain a port number`);
    }
    if (addr[0].length !== 56) {
        throw new Error(`failed to parse onion addr: ${addr[0]} not a Tor onion3 address.`);
    }
    // onion addresses do not include the multibase prefix, add it before decoding
    const buf = base32.base32.decode(`b${addr[0]}`);
    // onion port number
    const port = parseInt(addr[1], 10);
    if (port < 1 || port > 65536) {
        throw new Error('Port number is not in range(1, 65536)');
    }
    const portBuf = port2bytes(port);
    return (0,concat/* concat */.z)([buf, portBuf], buf.length + portBuf.length);
}
function bytes2onion(buf) {
    const addrBytes = buf.slice(0, buf.length - 2);
    const portBytes = buf.slice(buf.length - 2);
    const addr = (0,to_string/* toString */.B)(addrBytes, 'base32');
    const port = bytes2port(portBytes);
    return `${addr}:${port}`;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@11.6.1_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/codec.js





/**
 * string -> [[str name, str addr]... ]
 */
function stringToStringTuples(str) {
    const tuples = [];
    const parts = str.split('/').slice(1); // skip first empty elem
    if (parts.length === 1 && parts[0] === '') {
        return [];
    }
    for (let p = 0; p < parts.length; p++) {
        const part = parts[p];
        const proto = getProtocol(part);
        if (proto.size === 0) {
            tuples.push([part]);
            // eslint-disable-next-line no-continue
            continue;
        }
        p++; // advance addr part
        if (p >= parts.length) {
            throw ParseError('invalid address: ' + str);
        }
        // if it's a path proto, take the rest
        if (proto.path === true) {
            tuples.push([
                part,
                // should we need to check each path part to see if it's a proto?
                // This would allow for other protocols to be added after a unix path,
                // however it would have issues if the path had a protocol name in the path
                cleanPath(parts.slice(p).join('/'))
            ]);
            break;
        }
        tuples.push([part, parts[p]]);
    }
    return tuples;
}
/**
 * [[str name, str addr]... ] -> string
 */
function stringTuplesToString(tuples) {
    const parts = [];
    tuples.map((tup) => {
        const proto = protoFromTuple(tup);
        parts.push(proto.name);
        if (tup.length > 1 && tup[1] != null) {
            parts.push(tup[1]);
        }
        return null;
    });
    return cleanPath(parts.join('/'));
}
/**
 * [[str name, str addr]... ] -> [[int code, Uint8Array]... ]
 */
function stringTuplesToTuples(tuples) {
    return tuples.map((tup) => {
        if (!Array.isArray(tup)) {
            tup = [tup];
        }
        const proto = protoFromTuple(tup);
        if (tup.length > 1) {
            return [proto.code, convertToBytes(proto.code, tup[1])];
        }
        return [proto.code];
    });
}
/**
 * Convert tuples to string tuples
 *
 * [[int code, Uint8Array]... ] -> [[int code, str addr]... ]
 */
function tuplesToStringTuples(tuples) {
    return tuples.map(tup => {
        const proto = protoFromTuple(tup);
        if (tup[1] != null) {
            return [proto.code, convertToString(proto.code, tup[1])];
        }
        return [proto.code];
    });
}
/**
 * [[int code, Uint8Array ]... ] -> Uint8Array
 */
function tuplesToBytes(tuples) {
    return fromBytes((0,concat/* concat */.z)(tuples.map((tup) => {
        const proto = protoFromTuple(tup);
        let buf = Uint8Array.from(varint.encode(proto.code));
        if (tup.length > 1 && tup[1] != null) {
            buf = (0,concat/* concat */.z)([buf, tup[1]]); // add address buffer
        }
        return buf;
    })));
}
/**
 * For the passed address, return the serialized size
 */
function sizeForAddr(p, addr) {
    if (p.size > 0) {
        return p.size / 8;
    }
    else if (p.size === 0) {
        return 0;
    }
    else {
        const size = varint.decode(addr);
        return size + (varint.decode.bytes ?? 0);
    }
}
function bytesToTuples(buf) {
    const tuples = [];
    let i = 0;
    while (i < buf.length) {
        const code = varint.decode(buf, i);
        const n = varint.decode.bytes ?? 0;
        const p = getProtocol(code);
        const size = sizeForAddr(p, buf.slice(i + n));
        if (size === 0) {
            tuples.push([code]);
            i += n;
            // eslint-disable-next-line no-continue
            continue;
        }
        const addr = buf.slice(i + n, i + n + size);
        i += (size + n);
        if (i > buf.length) { // did not end _exactly_ at buffer.length
            throw ParseError('Invalid address Uint8Array: ' + (0,to_string/* toString */.B)(buf, 'base16'));
        }
        // ok, tuple seems good.
        tuples.push([code, addr]);
    }
    return tuples;
}
/**
 * Uint8Array -> String
 */
function bytesToString(buf) {
    const a = bytesToTuples(buf);
    const b = tuplesToStringTuples(a);
    return stringTuplesToString(b);
}
/**
 * String -> Uint8Array
 */
function stringToBytes(str) {
    str = cleanPath(str);
    const a = stringToStringTuples(str);
    const b = stringTuplesToTuples(a);
    return tuplesToBytes(b);
}
/**
 * String -> Uint8Array
 */
function fromString(str) {
    return stringToBytes(str);
}
/**
 * Uint8Array -> Uint8Array
 */
function fromBytes(buf) {
    const err = validateBytes(buf);
    if (err != null) {
        throw err;
    }
    return Uint8Array.from(buf); // copy
}
function validateBytes(buf) {
    try {
        bytesToTuples(buf); // try to parse. will throw if breaks
    }
    catch (err) {
        return err;
    }
}
function isValidBytes(buf) {
    return validateBytes(buf) === undefined;
}
function cleanPath(str) {
    return '/' + str.trim().split('/').filter((a) => a).join('/');
}
function ParseError(str) {
    return new Error('Error parsing address: ' + str);
}
function protoFromTuple(tup) {
    const proto = getProtocol(tup[0]);
    return proto;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(36676);
// EXTERNAL MODULE: ./node_modules/.pnpm/uint8arrays@4.0.3/node_modules/uint8arrays/dist/src/equals.js
var equals = __webpack_require__(56619);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@multiformats+multiaddr@11.6.1_undici@5.23.0/node_modules/@multiformats/multiaddr/dist/src/index.js
/**
 * @packageDocumentation
 *
 * An implementation of a Multiaddr in JavaScript
 *
 * @example
 *
 * ```js
 * import { multiaddr } from '@multiformats/multiaddr'
 *
 * const ma = multiaddr('/ip4/127.0.0.1/tcp/1234')
 * ```
 */
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DefaultMultiaddr_string, _DefaultMultiaddr_tuples, _DefaultMultiaddr_stringTuples, _a;








const inspect = Symbol.for('nodejs.util.inspect.custom');
const DNS_CODES = [
    getProtocol('dns').code,
    getProtocol('dns4').code,
    getProtocol('dns6').code,
    getProtocol('dnsaddr').code
];
/**
 * All configured {@link Resolver}s
 */
const resolvers = new Map();
const symbol = Symbol.for('@multiformats/js-multiaddr/multiaddr');
/**
 * Creates a Multiaddr from a node-friendly address object
 *
 * @example
 * ```js
 * import { fromNodeAddress } from '@multiformats/multiaddr'
 *
 * fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
 * // Multiaddr(/ip4/127.0.0.1/tcp/4001)
 * ```
 */
function fromNodeAddress(addr, transport) {
    if (addr == null) {
        throw new Error('requires node address object');
    }
    if (transport == null) {
        throw new Error('requires transport protocol');
    }
    let ip;
    let host = addr.address;
    switch (addr.family) {
        case 4:
            ip = 'ip4';
            break;
        case 6:
            ip = 'ip6';
            if (host.includes('%')) {
                const parts = host.split('%');
                if (parts.length !== 2) {
                    throw Error('Multiple ip6 zones in multiaddr');
                }
                host = parts[0];
                const zone = parts[1];
                ip = `/ip6zone/${zone}/ip6`;
            }
            break;
        default:
            throw Error('Invalid addr family, should be 4 or 6.');
    }
    return new DefaultMultiaddr('/' + [ip, host, transport, addr.port].join('/'));
}
/**
 * Returns if something is a {@link Multiaddr} that is a resolvable name
 *
 * @example
 *
 * ```js
 * import { isName, multiaddr } from '@multiformats/multiaddr'
 *
 * isName(multiaddr('/ip4/127.0.0.1'))
 * // false
 * isName(multiaddr('/dns/ipfs.io'))
 * // true
 * ```
 */
function isName(addr) {
    if (!isMultiaddr(addr)) {
        return false;
    }
    // if a part of the multiaddr is resolvable, then return true
    return addr.protos().some((proto) => proto.resolvable);
}
/**
 * Check if object is a {@link Multiaddr} instance
 *
 * @example
 *
 * ```js
 * import { isMultiaddr, multiaddr } from '@multiformats/multiaddr'
 *
 * isMultiaddr(5)
 * // false
 * isMultiaddr(multiaddr('/ip4/127.0.0.1'))
 * // true
 * ```
 */
function isMultiaddr(value) {
    return Boolean(value?.[symbol]);
}
/**
 * Creates a {@link Multiaddr} from a {@link MultiaddrInput}
 */
class DefaultMultiaddr {
    constructor(addr) {
        _DefaultMultiaddr_string.set(this, void 0);
        _DefaultMultiaddr_tuples.set(this, void 0);
        _DefaultMultiaddr_stringTuples.set(this, void 0);
        this[_a] = true;
        // default
        if (addr == null) {
            addr = '';
        }
        if (addr instanceof Uint8Array) {
            this.bytes = fromBytes(addr);
        }
        else if (typeof addr === 'string') {
            if (addr.length > 0 && addr.charAt(0) !== '/') {
                throw new Error(`multiaddr "${addr}" must start with a "/"`);
            }
            this.bytes = fromString(addr);
        }
        else if (isMultiaddr(addr)) { // Multiaddr
            this.bytes = fromBytes(addr.bytes); // validate + copy buffer
        }
        else {
            throw new Error('addr must be a string, Buffer, or another Multiaddr');
        }
    }
    toString() {
        if (__classPrivateFieldGet(this, _DefaultMultiaddr_string, "f") == null) {
            __classPrivateFieldSet(this, _DefaultMultiaddr_string, bytesToString(this.bytes), "f");
        }
        return __classPrivateFieldGet(this, _DefaultMultiaddr_string, "f");
    }
    toJSON() {
        return this.toString();
    }
    toOptions() {
        let family;
        let transport;
        let host;
        let port;
        let zone = '';
        const tcp = getProtocol('tcp');
        const udp = getProtocol('udp');
        const ip4 = getProtocol('ip4');
        const ip6 = getProtocol('ip6');
        const dns6 = getProtocol('dns6');
        const ip6zone = getProtocol('ip6zone');
        for (const [code, value] of this.stringTuples()) {
            if (code === ip6zone.code) {
                zone = `%${value ?? ''}`;
            }
            // default to https when protocol & port are omitted from DNS addrs
            if (DNS_CODES.includes(code)) {
                transport = tcp.name;
                port = 443;
                host = `${value ?? ''}${zone}`;
                family = code === dns6.code ? 6 : 4;
            }
            if (code === tcp.code || code === udp.code) {
                transport = getProtocol(code).name;
                port = parseInt(value ?? '');
            }
            if (code === ip4.code || code === ip6.code) {
                transport = getProtocol(code).name;
                host = `${value ?? ''}${zone}`;
                family = code === ip6.code ? 6 : 4;
            }
        }
        if (family == null || transport == null || host == null || port == null) {
            throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".');
        }
        const opts = {
            family,
            host,
            transport,
            port
        };
        return opts;
    }
    protos() {
        return this.protoCodes().map(code => Object.assign({}, getProtocol(code)));
    }
    protoCodes() {
        const codes = [];
        const buf = this.bytes;
        let i = 0;
        while (i < buf.length) {
            const code = varint.decode(buf, i);
            const n = varint.decode.bytes ?? 0;
            const p = getProtocol(code);
            const size = sizeForAddr(p, buf.slice(i + n));
            i += (size + n);
            codes.push(code);
        }
        return codes;
    }
    protoNames() {
        return this.protos().map(proto => proto.name);
    }
    tuples() {
        if (__classPrivateFieldGet(this, _DefaultMultiaddr_tuples, "f") == null) {
            __classPrivateFieldSet(this, _DefaultMultiaddr_tuples, bytesToTuples(this.bytes), "f");
        }
        return __classPrivateFieldGet(this, _DefaultMultiaddr_tuples, "f");
    }
    stringTuples() {
        if (__classPrivateFieldGet(this, _DefaultMultiaddr_stringTuples, "f") == null) {
            __classPrivateFieldSet(this, _DefaultMultiaddr_stringTuples, tuplesToStringTuples(this.tuples()), "f");
        }
        return __classPrivateFieldGet(this, _DefaultMultiaddr_stringTuples, "f");
    }
    encapsulate(addr) {
        addr = new DefaultMultiaddr(addr);
        return new DefaultMultiaddr(this.toString() + addr.toString());
    }
    decapsulate(addr) {
        const addrString = addr.toString();
        const s = this.toString();
        const i = s.lastIndexOf(addrString);
        if (i < 0) {
            throw new Error(`Address ${this.toString()} does not contain subaddress: ${addr.toString()}`);
        }
        return new DefaultMultiaddr(s.slice(0, i));
    }
    decapsulateCode(code) {
        const tuples = this.tuples();
        for (let i = tuples.length - 1; i >= 0; i--) {
            if (tuples[i][0] === code) {
                return new DefaultMultiaddr(tuplesToBytes(tuples.slice(0, i)));
            }
        }
        return this;
    }
    getPeerId() {
        try {
            const tuples = this.stringTuples().filter((tuple) => {
                if (tuple[0] === names.ipfs.code) {
                    return true;
                }
                return false;
            });
            // Get the last ipfs tuple ['ipfs', 'peerid string']
            const tuple = tuples.pop();
            if (tuple?.[1] != null) {
                const peerIdStr = tuple[1];
                // peer id is base58btc encoded string but not multibase encoded so add the `z`
                // prefix so we can validate that it is correctly encoded
                if (peerIdStr[0] === 'Q' || peerIdStr[0] === '1') {
                    return (0,to_string/* toString */.B)(base58.base58btc.decode(`z${peerIdStr}`), 'base58btc');
                }
                // try to parse peer id as CID
                return (0,to_string/* toString */.B)(cid/* CID */.k0.parse(peerIdStr).multihash.bytes, 'base58btc');
            }
            return null;
        }
        catch (e) {
            return null;
        }
    }
    getPath() {
        let path = null;
        try {
            path = this.stringTuples().filter((tuple) => {
                const proto = getProtocol(tuple[0]);
                if (proto.path === true) {
                    return true;
                }
                return false;
            })[0][1];
            if (path == null) {
                path = null;
            }
        }
        catch {
            path = null;
        }
        return path;
    }
    equals(addr) {
        return (0,equals/* equals */.f)(this.bytes, addr.bytes);
    }
    async resolve(options) {
        const resolvableProto = this.protos().find((p) => p.resolvable);
        // Multiaddr is not resolvable?
        if (resolvableProto == null) {
            return [this];
        }
        const resolver = resolvers.get(resolvableProto.name);
        if (resolver == null) {
            throw err_code(new Error(`no available resolver for ${resolvableProto.name}`), 'ERR_NO_AVAILABLE_RESOLVER');
        }
        const addresses = await resolver(this, options);
        return addresses.map((a) => new DefaultMultiaddr(a));
    }
    nodeAddress() {
        const options = this.toOptions();
        if (options.transport !== 'tcp' && options.transport !== 'udp') {
            throw new Error(`multiaddr must have a valid format - no protocol with name: "${options.transport}". Must have a valid transport protocol: "{tcp, udp}"`);
        }
        return {
            family: options.family,
            address: options.host,
            port: options.port
        };
    }
    isThinWaistAddress(addr) {
        const protos = (addr ?? this).protos();
        if (protos.length !== 2) {
            return false;
        }
        if (protos[0].code !== 4 && protos[0].code !== 41) {
            return false;
        }
        if (protos[1].code !== 6 && protos[1].code !== 273) {
            return false;
        }
        return true;
    }
    /**
     * Returns Multiaddr as a human-readable string
     * https://nodejs.org/api/util.html#utilinspectcustom
     *
     * @example
     * ```js
     * import { multiaddr } from '@multiformats/multiaddr'
     *
     * console.info(multiaddr('/ip4/127.0.0.1/tcp/4001'))
     * // 'Multiaddr(/ip4/127.0.0.1/tcp/4001)'
     * ```
     */
    [(_DefaultMultiaddr_string = new WeakMap(), _DefaultMultiaddr_tuples = new WeakMap(), _DefaultMultiaddr_stringTuples = new WeakMap(), _a = symbol, inspect)]() {
        return `Multiaddr(${bytesToString(this.bytes)})`;
    }
}
/**
 * A function that takes a {@link MultiaddrInput} and returns a {@link Multiaddr}
 *
 * @example
 * ```js
 * import { multiaddr } from '@libp2p/multiaddr'
 *
 * multiaddr('/ip4/127.0.0.1/tcp/4001')
 * // Multiaddr(/ip4/127.0.0.1/tcp/4001)
 * ```
 *
 * @param {MultiaddrInput} [addr] - If String or Uint8Array, needs to adhere to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
 */
function multiaddr(addr) {
    return new DefaultMultiaddr(addr);
}



/***/ })

}]);
//# sourceMappingURL=chunk.npm-ns.multiformats.multiaddr.js.map