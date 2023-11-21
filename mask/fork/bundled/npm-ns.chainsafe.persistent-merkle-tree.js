"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5426],{

/***/ 78676:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gindexChild = exports.gindexParent = exports.gindexSibling = exports.concatGindices = exports.getGindexBits = exports.gindexIterator = exports.getGindicesAtDepth = exports.iterateAtDepth = exports.countToDepth = exports.convertGindexToBitstring = exports.toGindexBitstring = exports.toGindex = exports.bitIndexBigInt = void 0;
function bitIndexBigInt(v) {
    return v.toString(2).length - 1;
}
exports.bitIndexBigInt = bitIndexBigInt;
function toGindex(depth, index) {
    const anchor = BigInt(1) << BigInt(depth);
    if (index >= anchor) {
        throw new Error(`index ${index} too large for depth ${depth}`);
    }
    return anchor | index;
}
exports.toGindex = toGindex;
function toGindexBitstring(depth, index) {
    const str = index ? Number(index).toString(2) : "";
    if (str.length > depth) {
        throw new Error("index too large for depth");
    }
    else {
        return "1" + str.padStart(depth, "0");
    }
}
exports.toGindexBitstring = toGindexBitstring;
function convertGindexToBitstring(gindex) {
    if (typeof gindex === "string") {
        if (gindex.length === 0) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        return gindex;
    }
    else {
        if (gindex < 1) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        return gindex.toString(2);
    }
}
exports.convertGindexToBitstring = convertGindexToBitstring;
// Get the depth (root starting at 0) necessary to cover a subtree of `count` elements.
// (in out): (0 0), (1 0), (2 1), (3 2), (4 2), (5 3), (6 3), (7 3), (8 3), (9 4)
function countToDepth(count) {
    if (count <= 1) {
        return 0;
    }
    return (count - BigInt(1)).toString(2).length;
}
exports.countToDepth = countToDepth;
/**
 * Iterate through Gindexes at a certain depth
 */
function iterateAtDepth(depth, startIndex, count) {
    const anchor = BigInt(1) << BigInt(depth);
    if (startIndex + count > anchor) {
        throw new Error("Too large for depth");
    }
    let i = toGindex(depth, startIndex);
    const last = i + count;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (i < last) {
                        const value = i;
                        i++;
                        return { done: false, value };
                    }
                    else {
                        return { done: true, value: undefined };
                    }
                },
            };
        },
    };
}
exports.iterateAtDepth = iterateAtDepth;
/**
 * Return Gindexes at a certain depth
 */
function getGindicesAtDepth(depth, startIndex, count) {
    const anchor = BigInt(1) << BigInt(depth);
    if (startIndex + count > anchor) {
        throw new Error("Too large for depth");
    }
    let gindex = toGindex(depth, BigInt(startIndex));
    const gindices = [];
    for (let i = 0; i < count; i++) {
        gindices.push(gindex++);
    }
    return gindices;
}
exports.getGindicesAtDepth = getGindicesAtDepth;
const ERR_INVALID_GINDEX = "Invalid gindex";
function gindexIterator(gindex) {
    let bitstring;
    if (typeof gindex === "string") {
        if (!gindex.length) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex;
    }
    else {
        if (gindex < 1) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex.toString(2);
    }
    let i = 1;
    const next = () => {
        if (i === bitstring.length) {
            return { done: true, value: undefined };
        }
        const bit = Number(bitstring[i]);
        i++;
        return { done: false, value: bit };
    };
    return {
        [Symbol.iterator]() {
            return { next };
        },
        remainingBitLength() {
            return bitstring.length - i;
        },
    };
}
exports.gindexIterator = gindexIterator;
function getGindexBits(gindex) {
    let bitstring;
    if (typeof gindex === "string") {
        if (!gindex.length) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex;
    }
    else {
        if (gindex < 1) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex.toString(2);
    }
    const bits = [];
    for (let i = 1; i < bitstring.length; i++) {
        bits.push(Number(bitstring[i]));
    }
    return bits;
}
exports.getGindexBits = getGindexBits;
/**
 * Concatenate Generalized Indices
 * Given generalized indices i1 for A -> B, i2 for B -> C .... i_n for Y -> Z, returns
 * the generalized index for A -> Z.
 */
function concatGindices(gindices) {
    return BigInt(gindices.reduce((acc, gindex) => acc + gindex.toString(2).slice(1), "0b1"));
}
exports.concatGindices = concatGindices;
function gindexSibling(gindex) {
    return gindex ^ BigInt(1);
}
exports.gindexSibling = gindexSibling;
function gindexParent(gindex) {
    return gindex / BigInt(2);
}
exports.gindexParent = gindexParent;
function gindexChild(gindex, rightChild) {
    return gindex * BigInt(2) + BigInt(rightChild);
}
exports.gindexChild = gindexChild;


/***/ }),

/***/ 5240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isHashObject = exports.uint8ArrayToHashObject = exports.hashObjectToUint8Array = exports.hashTwoObjects = exports.hash = void 0;
const as_sha256_1 = __webpack_require__(44902);
const input = new Uint8Array(64);
/**
 * Hash two 32 byte arrays
 */
function hash(a, b) {
    input.set(a, 0);
    input.set(b, 32);
    return as_sha256_1.digest64(input);
}
exports.hash = hash;
/**
 * Hash 2 objects, each store 8 numbers (equivalent to Uint8Array(32))
 */
function hashTwoObjects(a, b) {
    return as_sha256_1.digest64HashObjects(a, b);
}
exports.hashTwoObjects = hashTwoObjects;
function hashObjectToUint8Array(obj) {
    const byteArr = new Uint8Array(32);
    as_sha256_1.hashObjectToByteArray(obj, byteArr, 0);
    return byteArr;
}
exports.hashObjectToUint8Array = hashObjectToUint8Array;
function uint8ArrayToHashObject(byteArr) {
    return as_sha256_1.byteArrayToHashObject(byteArr);
}
exports.uint8ArrayToHashObject = uint8ArrayToHashObject;
function isHashObject(hash) {
    // @ts-ignore
    return hash.length === undefined;
}
exports.isHashObject = isHashObject;


/***/ }),

/***/ 94994:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(78676), exports);
__exportStar(__webpack_require__(5240), exports);
__exportStar(__webpack_require__(66286), exports);
__exportStar(__webpack_require__(85298), exports);
__exportStar(__webpack_require__(27791), exports);
__exportStar(__webpack_require__(4533), exports);
__exportStar(__webpack_require__(17958), exports);
__exportStar(__webpack_require__(55915), exports);


/***/ }),

/***/ 66286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bitwiseOrNodeH = exports.setNodeH = exports.getNodeH = exports.compose = exports.identity = exports.LeafNode = exports.BranchNode = exports.Node = void 0;
const hash_1 = __webpack_require__(5240);
const TWO_POWER_32 = 2 ** 32;
/**
 * An immutable binary merkle tree node
 */
class Node {
    constructor(h0, h1, h2, h3, h4, h5, h6, h7) {
        this.h0 = h0;
        this.h1 = h1;
        this.h2 = h2;
        this.h3 = h3;
        this.h4 = h4;
        this.h5 = h5;
        this.h6 = h6;
        this.h7 = h7;
    }
    applyHash(root) {
        this.h0 = root.h0;
        this.h1 = root.h1;
        this.h2 = root.h2;
        this.h3 = root.h3;
        this.h4 = root.h4;
        this.h5 = root.h5;
        this.h6 = root.h6;
        this.h7 = root.h7;
    }
}
exports.Node = Node;
/**
 * An immutable binary merkle tree node that has a `left` and `right` child
 */
class BranchNode extends Node {
    constructor(_left, _right) {
        // First null value is to save an extra variable to check if a node has a root or not
        super(null, 0, 0, 0, 0, 0, 0, 0);
        this._left = _left;
        this._right = _right;
        if (!_left) {
            throw new Error("Left node is undefined");
        }
        if (!_right) {
            throw new Error("Right node is undefined");
        }
    }
    get rootHashObject() {
        if (this.h0 === null) {
            super.applyHash(hash_1.hashTwoObjects(this.left.rootHashObject, this.right.rootHashObject));
        }
        return this;
    }
    get root() {
        return hash_1.hashObjectToUint8Array(this.rootHashObject);
    }
    isLeaf() {
        return false;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
}
exports.BranchNode = BranchNode;
/**
 * An immutable binary merkle tree node that has no children
 */
class LeafNode extends Node {
    static fromRoot(root) {
        return this.fromHashObject(hash_1.uint8ArrayToHashObject(root));
    }
    /**
     * New LeafNode from existing HashObject.
     */
    static fromHashObject(ho) {
        return new LeafNode(ho.h0, ho.h1, ho.h2, ho.h3, ho.h4, ho.h5, ho.h6, ho.h7);
    }
    /**
     * New LeafNode with its internal value set to zero. Consider using `zeroNode(0)` if you don't need to mutate.
     */
    static fromZero() {
        return new LeafNode(0, 0, 0, 0, 0, 0, 0, 0);
    }
    /**
     * LeafNode with HashObject `(uint32, 0, 0, 0, 0, 0, 0, 0)`.
     */
    static fromUint32(uint32) {
        return new LeafNode(uint32, 0, 0, 0, 0, 0, 0, 0);
    }
    /**
     * Create a new LeafNode with the same internal values. The returned instance is safe to mutate
     */
    clone() {
        return LeafNode.fromHashObject(this);
    }
    get rootHashObject() {
        return this;
    }
    get root() {
        return hash_1.hashObjectToUint8Array(this);
    }
    isLeaf() {
        return true;
    }
    get left() {
        throw Error("LeafNode has no left node");
    }
    get right() {
        throw Error("LeafNode has no right node");
    }
    writeToBytes(data, start, size) {
        // TODO: Optimize
        data.set(this.root.slice(0, size), start);
    }
    getUint(uintBytes, offsetBytes, clipInfinity) {
        const hIndex = Math.floor(offsetBytes / 4);
        // number has to be masked from an h value
        if (uintBytes < 4) {
            const bitIndex = (offsetBytes % 4) * 8;
            const h = getNodeH(this, hIndex);
            if (uintBytes === 1) {
                return 0xff & (h >> bitIndex);
            }
            else {
                return 0xffff & (h >> bitIndex);
            }
        }
        // number equals the h value
        else if (uintBytes === 4) {
            return getNodeH(this, hIndex) >>> 0;
        }
        // number spans 2 h values
        else if (uintBytes === 8) {
            const low = getNodeH(this, hIndex);
            const high = getNodeH(this, hIndex + 1);
            if (high === 0) {
                return low >>> 0;
            }
            else if (high === -1 && low === -1 && clipInfinity) {
                // Limit uint returns
                return Infinity;
            }
            else {
                return (low >>> 0) + (high >>> 0) * TWO_POWER_32;
            }
        }
        // Bigger uint can't be represented
        else {
            throw Error("uintBytes > 8");
        }
    }
    getUintBigint(uintBytes, offsetBytes) {
        const hIndex = Math.floor(offsetBytes / 4);
        // number has to be masked from an h value
        if (uintBytes < 4) {
            const bitIndex = (offsetBytes % 4) * 8;
            const h = getNodeH(this, hIndex);
            if (uintBytes === 1) {
                return BigInt(0xff & (h >> bitIndex));
            }
            else {
                return BigInt(0xffff & (h >> bitIndex));
            }
        }
        // number equals the h value
        else if (uintBytes === 4) {
            return BigInt(getNodeH(this, hIndex) >>> 0);
        }
        // number spans multiple h values
        else {
            const hRange = Math.ceil(uintBytes / 4);
            let v = BigInt(0);
            for (let i = 0; i < hRange; i++) {
                v += BigInt(getNodeH(this, hIndex + i) >>> 0) << BigInt(32 * i);
            }
            return v;
        }
    }
    setUint(uintBytes, offsetBytes, value, clipInfinity) {
        const hIndex = Math.floor(offsetBytes / 4);
        // number has to be masked from an h value
        if (uintBytes < 4) {
            const bitIndex = (offsetBytes % 4) * 8;
            let h = getNodeH(this, hIndex);
            if (uintBytes === 1) {
                h &= ~(0xff << bitIndex);
                h |= ( true && value) << bitIndex;
            }
            else {
                h &= ~(0xffff << bitIndex);
                h |= ( true && value) << bitIndex;
            }
            setNodeH(this, hIndex, h);
        }
        // number equals the h value
        else if (uintBytes === 4) {
            setNodeH(this, hIndex, value);
        }
        // number spans 2 h values
        else if (uintBytes === 8) {
            if (value === Infinity && clipInfinity) {
                setNodeH(this, hIndex, -1);
                setNodeH(this, hIndex + 1, -1);
            }
            else {
                setNodeH(this, hIndex, value & 0xffffffff);
                setNodeH(this, hIndex + 1, (value / TWO_POWER_32) & 0xffffffff);
            }
        }
        // Bigger uint can't be represented
        else {
            throw Error("uintBytes > 8");
        }
    }
    setUintBigint(uintBytes, offsetBytes, valueBN) {
        const hIndex = Math.floor(offsetBytes / 4);
        // number has to be masked from an h value
        if (uintBytes < 4) {
            const value = Number(valueBN);
            const bitIndex = (offsetBytes % 4) * 8;
            let h = getNodeH(this, hIndex);
            if (uintBytes === 1) {
                h &= ~(0xff << bitIndex);
                h |= ( true && value) << bitIndex;
            }
            else {
                h &= ~(0xffff << bitIndex);
                h |= ( true && value) << bitIndex;
            }
            setNodeH(this, hIndex, h);
        }
        // number equals the h value
        else if (uintBytes === 4) {
            setNodeH(this, hIndex, Number(valueBN));
        }
        // number spans multiple h values
        else {
            const hEnd = hIndex + Math.ceil(uintBytes / 4);
            for (let i = hIndex; i < hEnd; i++) {
                setNodeH(this, i, Number(valueBN & BigInt(0xffffffff)));
                valueBN = valueBN >> BigInt(32);
            }
        }
    }
    bitwiseOrUint(uintBytes, offsetBytes, value) {
        const hIndex = Math.floor(offsetBytes / 4);
        // number has to be masked from an h value
        if (uintBytes < 4) {
            const bitIndex = (offsetBytes % 4) * 8;
            bitwiseOrNodeH(this, hIndex, value << bitIndex);
        }
        // number equals the h value
        else if (uintBytes === 4) {
            bitwiseOrNodeH(this, hIndex, value);
        }
        // number spans multiple h values
        else {
            const hEnd = hIndex + Math.ceil(uintBytes / 4);
            for (let i = hIndex; i < hEnd; i++) {
                bitwiseOrNodeH(this, i, value & 0xffffffff);
                value >>= 32;
            }
        }
    }
}
exports.LeafNode = LeafNode;
function identity(n) {
    return n;
}
exports.identity = identity;
function compose(inner, outer) {
    return function (n) {
        return outer(inner(n));
    };
}
exports.compose = compose;
function getNodeH(node, hIndex) {
    if (hIndex === 0)
        return node.h0;
    else if (hIndex === 1)
        return node.h1;
    else if (hIndex === 2)
        return node.h2;
    else if (hIndex === 3)
        return node.h3;
    else if (hIndex === 4)
        return node.h4;
    else if (hIndex === 5)
        return node.h5;
    else if (hIndex === 6)
        return node.h6;
    else if (hIndex === 7)
        return node.h7;
    else
        throw Error("hIndex > 7");
}
exports.getNodeH = getNodeH;
function setNodeH(node, hIndex, value) {
    if (hIndex === 0)
        node.h0 = value;
    else if (hIndex === 1)
        node.h1 = value;
    else if (hIndex === 2)
        node.h2 = value;
    else if (hIndex === 3)
        node.h3 = value;
    else if (hIndex === 4)
        node.h4 = value;
    else if (hIndex === 5)
        node.h5 = value;
    else if (hIndex === 6)
        node.h6 = value;
    else if (hIndex === 7)
        node.h7 = value;
    else
        throw Error("hIndex > 7");
}
exports.setNodeH = setNodeH;
function bitwiseOrNodeH(node, hIndex, value) {
    if (hIndex === 0)
        node.h0 |= value;
    else if (hIndex === 1)
        node.h1 |= value;
    else if (hIndex === 2)
        node.h2 |= value;
    else if (hIndex === 3)
        node.h3 |= value;
    else if (hIndex === 4)
        node.h4 |= value;
    else if (hIndex === 5)
        node.h5 |= value;
    else if (hIndex === 6)
        node.h6 |= value;
    else if (hIndex === 7)
        node.h7 |= value;
    else
        throw Error("hIndex > 7");
}
exports.bitwiseOrNodeH = bitwiseOrNodeH;


/***/ }),

/***/ 85298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packedNodeRootsToBytes = exports.packedRootsBytesToLeafNodes = exports.packedRootsBytesToNode = void 0;
const subtree_1 = __webpack_require__(4533);
const node_1 = __webpack_require__(66286);
function packedRootsBytesToNode(depth, dataView, start, end) {
    const leafNodes = packedRootsBytesToLeafNodes(dataView, start, end);
    return subtree_1.subtreeFillToContents(leafNodes, depth);
}
exports.packedRootsBytesToNode = packedRootsBytesToNode;
/**
 * Optimized deserialization of linear bytes to consecutive leaf nodes
 */
function packedRootsBytesToLeafNodes(dataView, start, end) {
    const size = end - start;
    // If the offset in data is not a multiple of 4, Uint32Array can't be used
    // > start offset of Uint32Array should be a multiple of 4
    // NOTE: Performance tests show that using a DataView is as fast as Uint32Array
    const fullNodeCount = Math.floor(size / 32);
    const leafNodes = new Array(Math.ceil(size / 32));
    // Efficiently construct the tree writing to hashObjects directly
    // TODO: Optimize, with this approach each h property is written twice
    for (let i = 0; i < fullNodeCount; i++) {
        const offset = start + i * 32;
        leafNodes[i] = new node_1.LeafNode(dataView.getInt32(offset + 0, true), dataView.getInt32(offset + 4, true), dataView.getInt32(offset + 8, true), dataView.getInt32(offset + 12, true), dataView.getInt32(offset + 16, true), dataView.getInt32(offset + 20, true), dataView.getInt32(offset + 24, true), dataView.getInt32(offset + 28, true));
    }
    // Consider that the last node may only include partial data
    const remainderBytes = size % 32;
    // Last node
    if (remainderBytes > 0) {
        const node = new node_1.LeafNode(0, 0, 0, 0, 0, 0, 0, 0);
        leafNodes[fullNodeCount] = node;
        // Loop to dynamically copy the full h values
        const fullHCount = Math.floor(remainderBytes / 4);
        for (let h = 0; h < fullHCount; h++) {
            node_1.setNodeH(node, h, dataView.getInt32(start + fullNodeCount * 32 + h * 4, true));
        }
        const remainderUint32 = size % 4;
        if (remainderUint32 > 0) {
            let h = 0;
            for (let i = 0; i < remainderUint32; i++) {
                h |= dataView.getUint8(start + size - remainderUint32 + i) << (i * 8);
            }
            node_1.setNodeH(node, fullHCount, h);
        }
    }
    return leafNodes;
}
exports.packedRootsBytesToLeafNodes = packedRootsBytesToLeafNodes;
/**
 * Optimized serialization of consecutive leave nodes to linear bytes
 */
function packedNodeRootsToBytes(dataView, start, size, nodes) {
    // If the offset in data is not a multiple of 4, Uint32Array can't be used
    // > start offset of Uint32Array should be a multiple of 4
    // NOTE: Performance tests show that using a DataView is as fast as Uint32Array
    // Consider that the last node may only include partial data
    const remainderBytes = size % 32;
    // Full nodes
    // Efficiently get hashObjects data into data
    const fullNodeCount = Math.floor(size / 32);
    for (let i = 0; i < fullNodeCount; i++) {
        const node = nodes[i];
        const offset = start + i * 32;
        dataView.setInt32(offset + 0, node.h0, true);
        dataView.setInt32(offset + 4, node.h1, true);
        dataView.setInt32(offset + 8, node.h2, true);
        dataView.setInt32(offset + 12, node.h3, true);
        dataView.setInt32(offset + 16, node.h4, true);
        dataView.setInt32(offset + 20, node.h5, true);
        dataView.setInt32(offset + 24, node.h6, true);
        dataView.setInt32(offset + 28, node.h7, true);
    }
    // Last node
    if (remainderBytes > 0) {
        const node = nodes[fullNodeCount];
        // Loop to dynamically copy the full h values
        const fullHCount = Math.floor(remainderBytes / 4);
        for (let h = 0; h < fullHCount; h++) {
            dataView.setInt32(start + fullNodeCount * 32 + h * 4, node_1.getNodeH(node, h), true);
        }
        const remainderUint32 = size % 4;
        if (remainderUint32 > 0) {
            const h = node_1.getNodeH(node, fullHCount);
            for (let i = 0; i < remainderUint32; i++) {
                dataView.setUint8(start + size - remainderUint32 + i, (h >> (i * 8)) & 0xff);
            }
        }
    }
}
exports.packedNodeRootsToBytes = packedNodeRootsToBytes;


/***/ }),

/***/ 27791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeProof = exports.serializeProof = exports.createNodeFromProof = exports.createProof = exports.ProofTypeSerialized = exports.ProofType = void 0;
const multi_1 = __webpack_require__(31405);
const single_1 = __webpack_require__(46354);
const treeOffset_1 = __webpack_require__(30066);
var ProofType;
(function (ProofType) {
    ProofType["single"] = "single";
    ProofType["treeOffset"] = "treeOffset";
    ProofType["multi"] = "multi";
})(ProofType = exports.ProofType || (exports.ProofType = {}));
/**
 * Serialized proofs are prepended with a single byte, denoting their type
 */
exports.ProofTypeSerialized = [
    ProofType.single,
    ProofType.treeOffset,
    ProofType.multi, // 2
];
function createProof(rootNode, input) {
    switch (input.type) {
        case ProofType.single: {
            const [leaf, witnesses] = single_1.createSingleProof(rootNode, input.gindex);
            return {
                type: ProofType.single,
                gindex: input.gindex,
                leaf,
                witnesses,
            };
        }
        case ProofType.treeOffset: {
            const [offsets, leaves] = treeOffset_1.createTreeOffsetProof(rootNode, input.gindices);
            return {
                type: ProofType.treeOffset,
                offsets,
                leaves,
            };
        }
        case ProofType.multi: {
            const [leaves, witnesses, gindices] = multi_1.createMultiProof(rootNode, input.gindices);
            return {
                type: ProofType.multi,
                leaves,
                witnesses,
                gindices,
            };
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.createProof = createProof;
function createNodeFromProof(proof) {
    switch (proof.type) {
        case ProofType.single:
            return single_1.createNodeFromSingleProof(proof.gindex, proof.leaf, proof.witnesses);
        case ProofType.treeOffset:
            return treeOffset_1.createNodeFromTreeOffsetProof(proof.offsets, proof.leaves);
        case ProofType.multi:
            return multi_1.createNodeFromMultiProof(proof.leaves, proof.witnesses, proof.gindices);
        default:
            throw new Error("Invalid proof type");
    }
}
exports.createNodeFromProof = createNodeFromProof;
function serializeProof(proof) {
    switch (proof.type) {
        case ProofType.single:
        case ProofType.multi:
            throw new Error("Not implemented");
        case ProofType.treeOffset: {
            const output = new Uint8Array(1 + treeOffset_1.computeTreeOffsetProofSerializedLength(proof.offsets, proof.leaves));
            output[0] = exports.ProofTypeSerialized.indexOf(ProofType.treeOffset);
            treeOffset_1.serializeTreeOffsetProof(output, 1, proof.offsets, proof.leaves);
            return output;
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.serializeProof = serializeProof;
function deserializeProof(data) {
    const proofType = exports.ProofTypeSerialized[data[0]];
    if (!proofType) {
        throw new Error("Invalid proof type");
    }
    switch (proofType) {
        case ProofType.single:
        case ProofType.multi:
            throw new Error("Not implemented");
        case ProofType.treeOffset: {
            const [offsets, leaves] = treeOffset_1.deserializeTreeOffsetProof(data, 1);
            return {
                type: ProofType.treeOffset,
                offsets,
                leaves,
            };
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.deserializeProof = deserializeProof;


/***/ }),

/***/ 31405:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNodeFromMultiProof = exports.createMultiProof = void 0;
const node_1 = __webpack_require__(66286);
const tree_1 = __webpack_require__(17958);
const util_1 = __webpack_require__(67662);
/**
 * Create an multiproof
 *
 * See https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.md#merkle-multiproofs
 *
 * @param rootNode the root node of the tree
 * @param gindices generalized indices of leaves to include in the proof
 */
function createMultiProof(rootNode, gindices) {
    const tree = new tree_1.Tree(rootNode);
    const witnessGindices = util_1.computeMultiProofBitstrings(gindices.map((gindex) => gindex.toString(2)), false, util_1.SortOrder.Decreasing);
    const leafGindices = gindices.slice().sort((a, b) => (a < b ? 1 : -1));
    const leaves = leafGindices.map((gindex) => tree.getRoot(gindex));
    const witnesses = witnessGindices.map((gindex) => tree.getRoot(gindex));
    return [leaves, witnesses, leafGindices];
}
exports.createMultiProof = createMultiProof;
/**
 * Recreate a `Node` given a multiproof
 *
 * See https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.md#merkle-multiproofs
 *
 * @param leaves leaves of a EF multiproof
 * @param witnesses witnesses of a EF multiproof
 * @param gindices generalized indices of the leaves
 */
function createNodeFromMultiProof(leaves, witnesses, gindices) {
    if (leaves.length !== gindices.length) {
        throw new Error("Leaves length should equal gindices length");
    }
    const leafBitstrings = gindices.map((gindex) => gindex.toString(2));
    const witnessBitstrings = util_1.computeMultiProofBitstrings(leafBitstrings, false, util_1.SortOrder.Decreasing);
    if (witnessBitstrings.length !== witnesses.length) {
        throw new Error("Witnesses length should equal witnesses gindices length");
    }
    // Algorithm:
    // create an object which tracks key-values for each level
    // pre-load leaves and witnesses into the level object
    // level by level, starting from the bottom,
    // find the sibling, create the parent, store it in the next level up
    // the root is in level 1
    const maxLevel = Math.max(leafBitstrings[0]?.length ?? 0, witnessBitstrings[0]?.length ?? 0);
    const levels = Object.fromEntries(Array.from({ length: maxLevel }, (_, i) => [i + 1, {}]));
    // preload leaves and witnesses
    for (let i = 0; i < leafBitstrings.length; i++) {
        const leafBitstring = leafBitstrings[i];
        const leaf = leaves[i];
        levels[leafBitstring.length][leafBitstring] = node_1.LeafNode.fromRoot(leaf);
    }
    for (let i = 0; i < witnessBitstrings.length; i++) {
        const witnessBitstring = witnessBitstrings[i];
        const witness = witnesses[i];
        levels[witnessBitstring.length][witnessBitstring] = node_1.LeafNode.fromRoot(witness);
    }
    for (let i = maxLevel; i > 1; i--) {
        const level = levels[i];
        const parentLevel = levels[i - 1];
        for (const bitstring of Object.keys(level)) {
            const node = level[bitstring];
            // if the node doesn't exist, we've already processed its sibling
            if (!node) {
                continue;
            }
            const isLeft = bitstring[bitstring.length - 1] === "0";
            const parentBitstring = bitstring.substring(0, bitstring.length - 1);
            const siblingBitstring = parentBitstring + (isLeft ? "1" : "0");
            const siblingNode = level[siblingBitstring];
            if (!siblingNode) {
                throw new Error(`Sibling not found: ${siblingBitstring}`);
            }
            // store the parent node
            const parentNode = isLeft ? new node_1.BranchNode(node, siblingNode) : new node_1.BranchNode(siblingNode, node);
            parentLevel[parentBitstring] = parentNode;
            // delete the used nodes
            delete level[bitstring];
            delete level[siblingBitstring];
        }
    }
    const root = levels[1]["1"];
    if (!root) {
        throw new Error("Internal consistency error: no root found");
    }
    return root;
}
exports.createNodeFromMultiProof = createNodeFromMultiProof;


/***/ }),

/***/ 46354:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNodeFromSingleProof = exports.createSingleProof = exports.ERR_INVALID_NAV = void 0;
const node_1 = __webpack_require__(66286);
const gindex_1 = __webpack_require__(78676);
exports.ERR_INVALID_NAV = "Invalid tree navigation";
function createSingleProof(rootNode, index) {
    const witnesses = [];
    let node = rootNode;
    for (const i of gindex_1.gindexIterator(index)) {
        if (i) {
            if (node.isLeaf())
                throw new Error(exports.ERR_INVALID_NAV);
            witnesses.push(node.left.root);
            node = node.right;
        }
        else {
            if (node.isLeaf())
                throw new Error(exports.ERR_INVALID_NAV);
            witnesses.push(node.right.root);
            node = node.left;
        }
    }
    return [node.root, witnesses.reverse()];
}
exports.createSingleProof = createSingleProof;
function createNodeFromSingleProof(gindex, leaf, witnesses) {
    let node = node_1.LeafNode.fromRoot(leaf);
    const w = witnesses.slice().reverse();
    while (gindex > 1) {
        const sibling = node_1.LeafNode.fromRoot(w.pop());
        if (gindex % BigInt(2) === BigInt(0)) {
            node = new node_1.BranchNode(node, sibling);
        }
        else {
            node = new node_1.BranchNode(sibling, node);
        }
        gindex = gindex / BigInt(2);
    }
    return node;
}
exports.createNodeFromSingleProof = createNodeFromSingleProof;


/***/ }),

/***/ 30066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeTreeOffsetProof = exports.serializeTreeOffsetProof = exports.computeTreeOffsetProofSerializedLength = exports.createNodeFromTreeOffsetProof = exports.createTreeOffsetProof = exports.treeOffsetProofToNode = exports.nodeToTreeOffsetProof = void 0;
const node_1 = __webpack_require__(66286);
const util_1 = __webpack_require__(67662);
/**
 * Compute offsets and leaves of a tree-offset proof
 *
 * Recursive function
 *
 * See https://github.com/protolambda/eth-merkle-trees/blob/master/tree_offsets.md
 * @param node current node in the tree
 * @param gindex current generalized index in the tree
 * @param proofGindices generalized indices to left include in the proof - must be sorted in-order according to the tree
 */
function nodeToTreeOffsetProof(node, gindex, proofGindices) {
    if (!proofGindices.length || !proofGindices[0].startsWith(gindex)) {
        // there are no proof indices left OR the current subtree contains no remaining proof indices
        return [[], []];
    }
    else if (gindex === proofGindices[0]) {
        // the current node is at the next proof index
        proofGindices.shift();
        return [[], [node.root]];
    }
    else {
        // recursively compute offsets, leaves for the left and right subtree
        const [leftOffsets, leftLeaves] = nodeToTreeOffsetProof(node.left, gindex + "0", proofGindices);
        const [rightOffsets, rightLeaves] = nodeToTreeOffsetProof(node.right, gindex + "1", proofGindices);
        // the offset prepended to the list is # of leaves in the left subtree
        const pivot = leftLeaves.length;
        return [[pivot].concat(leftOffsets, rightOffsets), leftLeaves.concat(rightLeaves)];
    }
}
exports.nodeToTreeOffsetProof = nodeToTreeOffsetProof;
/**
 * Recreate a `Node` given offsets and leaves of a tree-offset proof
 *
 * Recursive definition
 *
 * See https://github.com/protolambda/eth-merkle-trees/blob/master/tree_offsets.md
 */
function treeOffsetProofToNode(offsets, leaves) {
    if (!leaves.length) {
        throw new Error("Proof must contain gt 0 leaves");
    }
    else if (leaves.length === 1) {
        return node_1.LeafNode.fromRoot(leaves[0]);
    }
    else {
        // the offset popped from the list is the # of leaves in the left subtree
        const pivot = offsets[0];
        return new node_1.BranchNode(treeOffsetProofToNode(offsets.slice(1, pivot), leaves.slice(0, pivot)), treeOffsetProofToNode(offsets.slice(pivot), leaves.slice(pivot)));
    }
}
exports.treeOffsetProofToNode = treeOffsetProofToNode;
/**
 * Create a tree-offset proof
 *
 * @param rootNode the root node of the tree
 * @param gindices generalized indices to include in the proof
 */
function createTreeOffsetProof(rootNode, gindices) {
    return nodeToTreeOffsetProof(rootNode, "1", util_1.computeMultiProofBitstrings(gindices.map((g) => g.toString(2))));
}
exports.createTreeOffsetProof = createTreeOffsetProof;
/**
 * Recreate a `Node` given a tree-offset proof
 *
 * @param offsets offsets of a tree-offset proof
 * @param leaves leaves of a tree-offset proof
 */
function createNodeFromTreeOffsetProof(offsets, leaves) {
    // TODO validation
    return treeOffsetProofToNode(offsets, leaves);
}
exports.createNodeFromTreeOffsetProof = createNodeFromTreeOffsetProof;
function computeTreeOffsetProofSerializedLength(offsets, leaves) {
    // add 1 for # of leaves
    return (offsets.length + 1) * 2 + leaves.length * 32;
}
exports.computeTreeOffsetProofSerializedLength = computeTreeOffsetProofSerializedLength;
// Serialized tree offset proof structure:
// # of leaves - 2 bytes
// offsets - 2 bytes each
// leaves - 32 bytes each
function serializeTreeOffsetProof(output, byteOffset, offsets, leaves) {
    const writer = new DataView(output.buffer, output.byteOffset, output.byteLength);
    // set # of leaves
    writer.setUint16(byteOffset, leaves.length, true);
    // set offsets
    const offsetsStartIndex = byteOffset + 2;
    for (let i = 0; i < offsets.length; i++) {
        writer.setUint16(i * 2 + offsetsStartIndex, offsets[i], true);
    }
    // set leaves
    const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
    for (let i = 0; i < leaves.length; i++) {
        output.set(leaves[i], i * 32 + leavesStartIndex);
    }
}
exports.serializeTreeOffsetProof = serializeTreeOffsetProof;
function deserializeTreeOffsetProof(data, byteOffset) {
    const reader = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // get # of leaves
    const leafCount = reader.getUint16(byteOffset, true);
    if (data.length < (leafCount - 1) * 2 + leafCount * 32) {
        throw new Error("Unable to deserialize tree offset proof: not enough bytes");
    }
    // get offsets
    const offsetsStartIndex = byteOffset + 2;
    const offsets = Array.from({ length: leafCount - 1 }, (_, i) => reader.getUint16(i * 2 + offsetsStartIndex, true));
    // get leaves
    const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
    const leaves = Array.from({ length: leafCount }, (_, i) => data.subarray(i * 32 + leavesStartIndex, (i + 1) * 32 + leavesStartIndex));
    return [offsets, leaves];
}
exports.deserializeTreeOffsetProof = deserializeTreeOffsetProof;


/***/ }),

/***/ 67662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.computeMultiProofBitstrings = exports.SortOrder = exports.filterParentBitstrings = exports.sortDecreasingBitstrings = exports.sortInOrderBitstrings = exports.computeProofBitstrings = exports.computeProofGindices = void 0;
const gindex_1 = __webpack_require__(78676);
// Not currently in use, but simpler implementation useful for testing
/**
 * Compute both the path and branch indices
 *
 * Path indices are parent indices upwards toward the root
 * Branch indices are witnesses required for a merkle proof
 */
function computeProofGindices(gindex) {
    const path = new Set();
    const branch = new Set();
    let g = gindex;
    while (g > 1) {
        path.add(g);
        branch.add(gindex_1.gindexSibling(g));
        g = gindex_1.gindexParent(g);
    }
    return { path, branch };
}
exports.computeProofGindices = computeProofGindices;
/**
 * Compute both the path and branch indices
 *
 * Path indices are parent indices upwards toward the root
 * Branch indices are witnesses required for a merkle proof
 */
function computeProofBitstrings(gindex) {
    const path = new Set();
    const branch = new Set();
    let g = gindex;
    while (g.length > 1) {
        path.add(g);
        const lastBit = g[g.length - 1];
        const parent = g.substring(0, g.length - 1);
        branch.add(parent + (Number(lastBit) ^ 1));
        g = parent;
    }
    return { path, branch };
}
exports.computeProofBitstrings = computeProofBitstrings;
/**
 * Sort generalized indices in-order
 * @param bitLength maximum bit length of generalized indices to sort
 */
function sortInOrderBitstrings(gindices, bitLength) {
    if (!gindices.length) {
        return [];
    }
    return gindices
        .map((g) => g.padEnd(bitLength))
        .sort()
        .map((g) => g.trim());
}
exports.sortInOrderBitstrings = sortInOrderBitstrings;
/**
 * Sort generalized indices in decreasing order
 */
function sortDecreasingBitstrings(gindices) {
    if (!gindices.length) {
        return [];
    }
    return gindices.sort((a, b) => {
        if (a.length < b.length) {
            return 1;
        }
        else if (b.length < a.length) {
            return -1;
        }
        let aPos0 = a.indexOf("0");
        let bPos0 = b.indexOf("0");
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (aPos0 === -1) {
                return -1;
            }
            else if (bPos0 === -1) {
                return 1;
            }
            if (aPos0 < bPos0) {
                return 1;
            }
            else if (bPos0 < aPos0) {
                return -1;
            }
            aPos0 = a.indexOf("0", aPos0 + 1);
            bPos0 = b.indexOf("0", bPos0 + 1);
        }
    });
}
exports.sortDecreasingBitstrings = sortDecreasingBitstrings;
/**
 * Filter out parent generalized indices
 */
function filterParentBitstrings(gindices) {
    const sortedBitstrings = gindices.slice().sort((a, b) => a.length - b.length);
    const filtered = [];
    outer: for (let i = 0; i < sortedBitstrings.length; i++) {
        const bsA = sortedBitstrings[i];
        for (let j = i + 1; j < sortedBitstrings.length; j++) {
            const bsB = sortedBitstrings[j];
            if (bsB.startsWith(bsA)) {
                continue outer;
            }
        }
        filtered.push(bsA);
    }
    return filtered;
}
exports.filterParentBitstrings = filterParentBitstrings;
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["InOrder"] = 0] = "InOrder";
    SortOrder[SortOrder["Decreasing"] = 1] = "Decreasing";
    SortOrder[SortOrder["Unsorted"] = 2] = "Unsorted";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
/**
 * Return the set of generalized indices required for a multiproof
 * This may include all leaves and any necessary witnesses
 * @param gindices leaves to include in proof
 * @returns all generalized indices required for a multiproof (leaves and witnesses), deduplicated and sorted
 */
function computeMultiProofBitstrings(gindices, includeLeaves = true, sortOrder = SortOrder.InOrder) {
    const leaves = filterParentBitstrings(gindices);
    // Maybe initialize the proof indices with the leaves
    const proof = new Set(includeLeaves ? leaves : []);
    const paths = new Set();
    const branches = new Set();
    // Collect all path indices and all branch indices
    let maxBitLength = 1;
    for (const gindex of leaves) {
        if (gindex.length > maxBitLength)
            maxBitLength = gindex.length;
        const { path, branch } = computeProofBitstrings(gindex);
        path.forEach((g) => paths.add(g));
        branch.forEach((g) => branches.add(g));
    }
    // Remove all branches that are included in the paths
    paths.forEach((g) => branches.delete(g));
    // Add all remaining branches to the leaves
    branches.forEach((g) => proof.add(g));
    switch (sortOrder) {
        case SortOrder.InOrder:
            return sortInOrderBitstrings(Array.from(proof), maxBitLength);
        case SortOrder.Decreasing:
            return sortDecreasingBitstrings(Array.from(proof));
        case SortOrder.Unsorted:
            return Array.from(proof);
    }
}
exports.computeMultiProofBitstrings = computeMultiProofBitstrings;


/***/ }),

/***/ 4533:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subtreeFillToContents = exports.subtreeFillToLength = exports.subtreeFillToDepth = void 0;
const node_1 = __webpack_require__(66286);
const zeroNode_1 = __webpack_require__(55915);
function subtreeFillToDepth(bottom, depth) {
    let node = bottom;
    while (depth > 0) {
        node = new node_1.BranchNode(node, node);
        depth--;
    }
    return node;
}
exports.subtreeFillToDepth = subtreeFillToDepth;
function subtreeFillToLength(bottom, depth, length) {
    const maxLength = 1 << depth;
    if (length > maxLength)
        throw new Error("ERR_TOO_MANY_NODES");
    if (length === maxLength)
        return subtreeFillToDepth(bottom, depth);
    if (depth === 0) {
        if (length === 1)
            return bottom;
        else
            throw new Error("ERR_NAVIGATION");
    }
    if (depth === 1) {
        return new node_1.BranchNode(bottom, length > 1 ? bottom : zeroNode_1.zeroNode(0));
    }
    const pivot = maxLength >> 1;
    if (length <= pivot) {
        return new node_1.BranchNode(subtreeFillToLength(bottom, depth - 1, length), zeroNode_1.zeroNode(depth - 1));
    }
    else {
        return new node_1.BranchNode(subtreeFillToDepth(bottom, depth - 1), subtreeFillToLength(bottom, depth - 1, length - pivot));
    }
}
exports.subtreeFillToLength = subtreeFillToLength;
/**
 * WARNING: Mutates the provided nodes array.
 * TODO: Don't mutate the nodes array.
 */
function subtreeFillToContents(nodes, depth) {
    const maxLength = 2 ** depth;
    if (nodes.length > maxLength) {
        throw new Error(`nodes.length ${nodes.length} over maxIndex at depth ${depth}`);
    }
    if (nodes.length === 0) {
        return zeroNode_1.zeroNode(depth);
    }
    if (depth === 0) {
        return nodes[0];
    }
    if (depth === 1) {
        return nodes.length > 1
            ? // All nodes at depth 1 available
                new node_1.BranchNode(nodes[0], nodes[1])
            : // Pad with zero node
                new node_1.BranchNode(nodes[0], zeroNode_1.zeroNode(0));
    }
    let count = nodes.length;
    for (let d = depth; d > 0; d--) {
        const countRemainder = count % 2;
        const countEven = count - countRemainder;
        // For each depth level compute the new BranchNodes and overwrite the nodes array
        for (let i = 0; i < countEven; i += 2) {
            nodes[i / 2] = new node_1.BranchNode(nodes[i], nodes[i + 1]);
        }
        if (countRemainder > 0) {
            nodes[countEven / 2] = new node_1.BranchNode(nodes[countEven], zeroNode_1.zeroNode(depth - d));
        }
        // If there was remainer, 2 nodes are added to the count
        count = countEven / 2 + countRemainder;
    }
    return nodes[0];
}
exports.subtreeFillToContents = subtreeFillToContents;


/***/ }),

/***/ 17958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.treeZeroAfterIndex = exports.iterateNodesAtDepth = exports.getNodesAtDepth = exports.setNodesAtDepth = exports.setNodeAtDepth = exports.getNodeAtDepth = exports.setNodeWithFn = exports.setNode = exports.getNode = exports.Tree = void 0;
const zeroNode_1 = __webpack_require__(55915);
const gindex_1 = __webpack_require__(78676);
const node_1 = __webpack_require__(66286);
const proof_1 = __webpack_require__(27791);
const single_1 = __webpack_require__(46354);
/**
 * Binary merkle tree
 *
 * Wrapper around immutable `Node` to support mutability.
 *
 * Mutability between a parent tree and subtree is achieved by maintaining a `hook` callback, which updates the parent when the subtree is updated.
 */
class Tree {
    constructor(node, hook) {
        this._rootNode = node;
        if (hook) {
            if (typeof WeakRef === "undefined") {
                this.hook = hook;
            }
            else {
                this.hook = new WeakRef(hook);
            }
        }
    }
    /**
     * Create a `Tree` from a `Proof` object
     */
    static createFromProof(proof) {
        return new Tree(proof_1.createNodeFromProof(proof));
    }
    /**
     * The root node of the tree
     */
    get rootNode() {
        return this._rootNode;
    }
    /**
     *
     * Setting the root node will trigger a call to the tree's `hook` if it exists.
     */
    set rootNode(newRootNode) {
        this._rootNode = newRootNode;
        if (this.hook) {
            // WeakRef should not change status during a program's execution
            // So, use WeakRef feature detection to assume the type of this.hook
            // to minimize the memory footprint of Tree
            if (typeof WeakRef === "undefined") {
                this.hook(newRootNode);
            }
            else {
                const hookVar = this.hook.deref();
                if (hookVar) {
                    hookVar(newRootNode);
                }
                else {
                    // Hook has been garbage collected, no need to keep the hookRef
                    this.hook = undefined;
                }
            }
        }
    }
    /**
     * The root hash of the tree
     */
    get root() {
        return this.rootNode.root;
    }
    /**
     * Return a copy of the tree
     */
    clone() {
        return new Tree(this.rootNode);
    }
    /**
     * Return the subtree at the specified gindex.
     *
     * Note: The returned subtree will have a `hook` attached to the parent tree.
     * Updates to the subtree will result in updates to the parent.
     */
    getSubtree(index) {
        return new Tree(this.getNode(index), (node) => this.setNode(index, node));
    }
    /**
     * Return the node at the specified gindex.
     */
    getNode(gindex) {
        return getNode(this.rootNode, gindex);
    }
    /**
     * Return the node at the specified depth and index.
     *
     * Supports index up to `Number.MAX_SAFE_INTEGER`.
     */
    getNodeAtDepth(depth, index) {
        return getNodeAtDepth(this.rootNode, depth, index);
    }
    /**
     * Return the hash at the specified gindex.
     */
    getRoot(index) {
        return this.getNode(index).root;
    }
    /**
     * Set the node at at the specified gindex.
     */
    setNode(gindex, n) {
        this.rootNode = setNode(this.rootNode, gindex, n);
    }
    /**
     * Traverse to the node at the specified gindex,
     * then apply the function to get a new node and set the node at the specified gindex with the result.
     *
     * This is a convenient method to avoid traversing the tree 2 times to
     * get and set.
     */
    setNodeWithFn(gindex, getNewNode) {
        this.rootNode = setNodeWithFn(this.rootNode, gindex, getNewNode);
    }
    /**
     * Set the node at the specified depth and index.
     *
     * Supports index up to `Number.MAX_SAFE_INTEGER`.
     */
    setNodeAtDepth(depth, index, node) {
        this.rootNode = setNodeAtDepth(this.rootNode, depth, index, node);
    }
    /**
     * Set the hash at the specified gindex.
     *
     * Note: This will set a new `LeafNode` at the specified gindex.
     */
    setRoot(index, root) {
        this.setNode(index, node_1.LeafNode.fromRoot(root));
    }
    /**
     * Fast read-only iteration
     * In-order traversal of nodes at `depth`
     * starting from the `startIndex`-indexed node
     * iterating through `count` nodes
     *
     * Supports index up to `Number.MAX_SAFE_INTEGER`.
     */
    getNodesAtDepth(depth, startIndex, count) {
        return getNodesAtDepth(this.rootNode, depth, startIndex, count);
    }
    /**
     * Fast read-only iteration
     * In-order traversal of nodes at `depth`
     * starting from the `startIndex`-indexed node
     * iterating through `count` nodes
     *
     * Supports index up to `Number.MAX_SAFE_INTEGER`.
     */
    iterateNodesAtDepth(depth, startIndex, count) {
        return iterateNodesAtDepth(this.rootNode, depth, startIndex, count);
    }
    /**
     * Return a merkle proof for the node at the specified gindex.
     */
    getSingleProof(index) {
        return single_1.createSingleProof(this.rootNode, index)[1];
    }
    /**
     * Return a merkle proof for the proof input.
     *
     * This method can be used to create multiproofs.
     */
    getProof(input) {
        return proof_1.createProof(this.rootNode, input);
    }
}
exports.Tree = Tree;
/**
 * Return the node at the specified gindex.
 */
function getNode(rootNode, gindex) {
    const gindexBitstring = gindex_1.convertGindexToBitstring(gindex);
    let node = rootNode;
    for (let i = 1; i < gindexBitstring.length; i++) {
        if (node.isLeaf()) {
            throw new Error(`Invalid tree - found leaf at depth ${i}`);
        }
        // If bit is set, means navigate right
        node = gindexBitstring[i] === "1" ? node.right : node.left;
    }
    return node;
}
exports.getNode = getNode;
/**
 * Set the node at at the specified gindex.
 * Returns the new root node.
 */
function setNode(rootNode, gindex, n) {
    // Pre-compute entire bitstring instead of using an iterator (25% faster)
    const gindexBitstring = gindex_1.convertGindexToBitstring(gindex);
    const parentNodes = getParentNodes(rootNode, gindexBitstring);
    return rebindNodeToRoot(gindexBitstring, parentNodes, n);
}
exports.setNode = setNode;
/**
 * Traverse to the node at the specified gindex,
 * then apply the function to get a new node and set the node at the specified gindex with the result.
 *
 * This is a convenient method to avoid traversing the tree 2 times to
 * get and set.
 *
 * Returns the new root node.
 */
function setNodeWithFn(rootNode, gindex, getNewNode) {
    // Pre-compute entire bitstring instead of using an iterator (25% faster)
    const gindexBitstring = gindex_1.convertGindexToBitstring(gindex);
    const parentNodes = getParentNodes(rootNode, gindexBitstring);
    const lastParentNode = parentNodes[parentNodes.length - 1];
    const lastBit = gindexBitstring[gindexBitstring.length - 1];
    const oldNode = lastBit === "1" ? lastParentNode.right : lastParentNode.left;
    const newNode = getNewNode(oldNode);
    return rebindNodeToRoot(gindexBitstring, parentNodes, newNode);
}
exports.setNodeWithFn = setNodeWithFn;
/**
 * Traverse the tree from root node, ignore the last bit to get all parent nodes
 * of the specified bitstring.
 */
function getParentNodes(rootNode, bitstring) {
    let node = rootNode;
    // Keep a list of all parent nodes of node at gindex `index`. Then walk the list
    // backwards to rebind them "recursively" with the new nodes without using functions
    const parentNodes = [rootNode];
    // Ignore the first bit, left right directions are at bits [1,..]
    // Ignore the last bit, no need to push the target node to the parentNodes array
    for (let i = 1; i < bitstring.length - 1; i++) {
        // Compare to string directly to prevent unnecessary type conversions
        if (bitstring[i] === "1") {
            node = node.right;
        }
        else {
            node = node.left;
        }
        parentNodes.push(node);
    }
    return parentNodes;
}
/**
 * Build a new tree structure from bitstring, parentNodes and a new node.
 * Returns the new root node.
 */
function rebindNodeToRoot(bitstring, parentNodes, newNode) {
    let node = newNode;
    // Ignore the first bit, left right directions are at bits [1,..]
    // Iterate the list backwards including the last bit, but offset the parentNodes array
    // by one since the first bit in bitstring was ignored in the previous loop
    for (let i = bitstring.length - 1; i >= 1; i--) {
        if (bitstring[i] === "1") {
            node = new node_1.BranchNode(parentNodes[i - 1].left, node);
        }
        else {
            node = new node_1.BranchNode(node, parentNodes[i - 1].right);
        }
    }
    return node;
}
/**
 * Supports index up to `Number.MAX_SAFE_INTEGER`.
 */
function getNodeAtDepth(rootNode, depth, index) {
    if (depth === 0) {
        return rootNode;
    }
    if (depth === 1) {
        return index === 0 ? rootNode.left : rootNode.right;
    }
    // Ignore first bit "1", then substract 1 to get to the parent
    const depthiRoot = depth - 1;
    const depthiParent = 0;
    let node = rootNode;
    for (let d = depthiRoot; d >= depthiParent; d--) {
        node = isLeftNode(d, index) ? node.left : node.right;
    }
    return node;
}
exports.getNodeAtDepth = getNodeAtDepth;
/**
 * Supports index up to `Number.MAX_SAFE_INTEGER`.
 */
function setNodeAtDepth(rootNode, nodesDepth, index, nodeChanged) {
    // TODO: OPTIMIZE (if necessary)
    return setNodesAtDepth(rootNode, nodesDepth, [index], [nodeChanged]);
}
exports.setNodeAtDepth = setNodeAtDepth;
/**
 * Set multiple nodes in batch, editing and traversing nodes strictly once.
 *
 * - gindexes MUST be sorted in ascending order beforehand.
 * - All gindexes must be at the exact same depth.
 * - Depth must be > 0, if 0 just replace the root node.
 *
 * Strategy: for each gindex in `gindexes` navigate to the depth of its parent,
 * and create a new parent. Then calculate the closest common depth with the next
 * gindex and navigate upwards creating or caching nodes as necessary. Loop and repeat.
 *
 * Supports index up to `Number.MAX_SAFE_INTEGER`.
 */
function setNodesAtDepth(rootNode, nodesDepth, indexes, nodes) {
    // depth depthi   gindexes   indexes
    // 0     1           1          0
    // 1     0         2   3      0   1
    // 2     -        4 5 6 7    0 1 2 3
    // '10' means, at depth 1, node is at the left
    //
    // For index N check if the bit at position depthi is set to navigate right at depthi
    // ```
    // mask = 1 << depthi
    // goRight = (N & mask) == mask
    // ```
    // If depth is 0 there's only one node max and the optimization below will cause a navigation error.
    // For this case, check if there's a new root node and return it, otherwise the current rootNode.
    if (nodesDepth === 0) {
        return nodes.length > 0 ? nodes[0] : rootNode;
    }
    /**
     * Contiguous filled stack of parent nodes. It get filled in the first descent
     * Indexed by depthi
     */
    const parentNodeStack = new Array(nodesDepth);
    /**
     * Temp stack of left parent nodes, index by depthi.
     * Node leftParentNodeStack[depthi] is a node at d = depthi - 1, such that:
     * ```
     * parentNodeStack[depthi].left = leftParentNodeStack[depthi]
     * ```
     */
    const leftParentNodeStack = new Array(nodesDepth);
    // Ignore first bit "1", then substract 1 to get to the parent
    const depthiRoot = nodesDepth - 1;
    const depthiParent = 0;
    let depthi = depthiRoot;
    let node = rootNode;
    // Insert root node to make the loop below general
    parentNodeStack[depthiRoot] = rootNode;
    // TODO: Iterate to depth 32 to allow using bit ops
    // for (; depthi >= 32; depthi--) {
    //   node = node.left;
    // }
    for (let i = 0; i < indexes.length; i++) {
        const index = indexes[i];
        // Navigate down until parent depth, and store the chain of nodes
        //
        // Starts from latest common depth, so node is the parent node at `depthi`
        // When persisting the next node, store at the `d - 1` since its the child of node at `depthi`
        //
        // Stops at the level above depthiParent. For the re-binding routing below node must be at depthiParent
        for (let d = depthi; d > depthiParent; d--) {
            node = isLeftNode(d, index) ? node.left : node.right;
            parentNodeStack[d - 1] = node;
        }
        depthi = depthiParent;
        // If this is the left node, check first it the next node is on the right
        //
        //   -    If both nodes exist, create new
        //  / \
        // x   x
        //
        //   -    If only the left node exists, rebind left
        //  / \
        // x   -
        //
        //   -    If this is the right node, only the right node exists, rebind right
        //  / \
        // -   x
        // d = 0, mask = 1 << d = 1
        const isLeftLeafNode = (index & 1) !== 1;
        if (isLeftLeafNode) {
            // Next node is the very next to the right of current node
            if (index + 1 === indexes[i + 1]) {
                node = new node_1.BranchNode(nodes[i], nodes[i + 1]);
                // Move pointer one extra forward since node has consumed two nodes
                i++;
            }
            else {
                node = new node_1.BranchNode(nodes[i], node.right);
            }
        }
        else {
            node = new node_1.BranchNode(node.left, nodes[i]);
        }
        // Here `node` is the new BranchNode at depthi `depthiParent`
        // Now climb upwards until finding the common node with the next index
        // For the last iteration, climb to the root at `depthiRoot`
        const isLastIndex = i >= indexes.length - 1;
        const diffDepthi = isLastIndex ? depthiRoot : findDiffDepthi(index, indexes[i + 1]);
        // When climbing up from a left node there are two possible paths
        // 1. Go to the right of the parent: Store left node to rebind latter
        // 2. Go another level up: Will never visit the left node again, so must rebind now
        // 🡼 \     Rebind left only, will never visit this node again
        // 🡽 /\
        //
        //    / 🡽  Rebind left only (same as above)
        // 🡽 /\
        //
        // 🡽 /\ 🡾  Store left node to rebind the entire node when returning
        //
        // 🡼 \     Rebind right with left if exists, will never visit this node again
        //   /\ 🡼
        //
        //    / 🡽  Rebind right with left if exists (same as above)
        //   /\ 🡼
        for (let d = depthiParent + 1; d <= diffDepthi; d++) {
            // If node is on the left, store for latter
            // If node is on the right merge with stored left node
            if (isLeftNode(d, index)) {
                if (isLastIndex || d !== diffDepthi) {
                    // If it's last index, bind with parent since it won't navigate to the right anymore
                    // Also, if still has to move upwards, rebind since the node won't be visited anymore
                    node = new node_1.BranchNode(node, parentNodeStack[d].right);
                }
                else {
                    // Only store the left node if it's at d = diffDepth
                    leftParentNodeStack[d] = node;
                    node = parentNodeStack[d];
                }
            }
            else {
                const leftNode = leftParentNodeStack[d];
                if (leftNode !== undefined) {
                    node = new node_1.BranchNode(leftNode, node);
                    leftParentNodeStack[d] = undefined;
                }
                else {
                    node = new node_1.BranchNode(parentNodeStack[d].left, node);
                }
            }
        }
        // Prepare next loop
        // Go to the parent of the depth with diff, to switch branches to the right
        depthi = diffDepthi;
    }
    // Done, return new root node
    return node;
}
exports.setNodesAtDepth = setNodesAtDepth;
/**
 * Fast read-only iteration
 * In-order traversal of nodes at `depth`
 * starting from the `startIndex`-indexed node
 * iterating through `count` nodes
 *
 * **Strategy**
 * 1. Navigate down to parentDepth storing a stack of parents
 * 2. At target level push current node
 * 3. Go up to the first level that navigated left
 * 4. Repeat (1) for next index
 */
function getNodesAtDepth(rootNode, depth, startIndex, count) {
    // Optimized paths for short trees (x20 times faster)
    if (depth === 0) {
        return startIndex === 0 && count > 0 ? [rootNode] : [];
    }
    else if (depth === 1) {
        if (count === 0) {
            return [];
        }
        else if (count === 1) {
            return startIndex === 0 ? [rootNode.left] : [rootNode.right];
        }
        else {
            return [rootNode.left, rootNode.right];
        }
    }
    // Ignore first bit "1", then substract 1 to get to the parent
    const depthiRoot = depth - 1;
    const depthiParent = 0;
    let depthi = depthiRoot;
    let node = rootNode;
    // Contiguous filled stack of parent nodes. It get filled in the first descent
    // Indexed by depthi
    const parentNodeStack = new Array(depth);
    const isLeftStack = new Array(depth);
    const nodes = new Array(count);
    // Insert root node to make the loop below general
    parentNodeStack[depthiRoot] = rootNode;
    for (let i = 0; i < count; i++) {
        for (let d = depthi; d >= depthiParent; d--) {
            if (d !== depthi) {
                parentNodeStack[d] = node;
            }
            const isLeft = isLeftNode(d, startIndex + i);
            isLeftStack[d] = isLeft;
            node = isLeft ? node.left : node.right;
        }
        nodes[i] = node;
        // Find the first depth where navigation when left.
        // Store that height and go right from there
        for (let d = depthiParent; d <= depthiRoot; d++) {
            if (isLeftStack[d] === true) {
                depthi = d;
                break;
            }
        }
        node = parentNodeStack[depthi];
    }
    return nodes;
}
exports.getNodesAtDepth = getNodesAtDepth;
/**
 * @see getNodesAtDepth but instead of pushing to an array, it yields
 */
function* iterateNodesAtDepth(rootNode, depth, startIndex, count) {
    const endIndex = startIndex + count;
    // Ignore first bit "1", then substract 1 to get to the parent
    const depthiRoot = depth - 1;
    const depthiParent = 0;
    let depthi = depthiRoot;
    let node = rootNode;
    // Contiguous filled stack of parent nodes. It get filled in the first descent
    // Indexed by depthi
    const parentNodeStack = new Array(depth);
    const isLeftStack = new Array(depth);
    // Insert root node to make the loop below general
    parentNodeStack[depthiRoot] = rootNode;
    for (let index = startIndex; index < endIndex; index++) {
        for (let d = depthi; d >= depthiParent; d--) {
            if (d !== depthi) {
                parentNodeStack[d] = node;
            }
            const isLeft = isLeftNode(d, index);
            isLeftStack[d] = isLeft;
            node = isLeft ? node.left : node.right;
        }
        yield node;
        // Find the first depth where navigation when left.
        // Store that height and go right from there
        for (let d = depthiParent; d <= depthiRoot; d++) {
            if (isLeftStack[d] === true) {
                depthi = d;
                break;
            }
        }
        node = parentNodeStack[depthi];
    }
}
exports.iterateNodesAtDepth = iterateNodesAtDepth;
/**
 * Zero's all nodes right of index with constant depth of `nodesDepth`.
 *
 * For example, zero-ing this tree at depth 2 after index 0
 * ```
 *    X              X
 *  X   X    ->    X   0
 * X X X X        X 0 0 0
 * ```
 *
 * Or, zero-ing this tree at depth 3 after index 2
 * ```
 *        X                     X
 *    X       X             X       0
 *  X   X   X   X    ->   X   X   0   0
 * X X X X X X X X       X X X 0 0 0 0 0
 * ```
 *
 * The strategy is to first navigate down to `nodesDepth` and `index` and keep a stack of parents.
 * Then navigate up re-binding:
 * - If navigated to the left rebind with zeroNode()
 * - If navigated to the right rebind with parent.left from the stack
 */
function treeZeroAfterIndex(rootNode, nodesDepth, index) {
    // depth depthi   gindexes   indexes
    // 0     1           1          0
    // 1     0         2   3      0   1
    // 2     -        4 5 6 7    0 1 2 3
    // '10' means, at depth 1, node is at the left
    //
    // For index N check if the bit at position depthi is set to navigate right at depthi
    // ```
    // mask = 1 << depthi
    // goRight = (N & mask) == mask
    // ```
    // Degenerate case where tree is zero after a negative index (-1).
    // All positive indexes are zero, so the entire tree is zero. Return cached zero node as root.
    if (index < 0) {
        return zeroNode_1.zeroNode(nodesDepth);
    }
    /**
     * Contiguous filled stack of parent nodes. It get filled in the first descent
     * Indexed by depthi
     */
    const parentNodeStack = new Array(nodesDepth);
    // Ignore first bit "1", then substract 1 to get to the parent
    const depthiRoot = nodesDepth - 1;
    const depthiParent = 0;
    let depthi = depthiRoot;
    let node = rootNode;
    // Insert root node to make the loop below general
    parentNodeStack[depthiRoot] = rootNode;
    // Navigate down until parent depth, and store the chain of nodes
    //
    // Stops at the depthiParent level. To rebind below down to `nodesDepth`
    for (let d = depthi; d >= depthiParent; d--) {
        node = isLeftNode(d, index) ? node.left : node.right;
        parentNodeStack[d - 1] = node;
    }
    depthi = depthiParent;
    // Now climb up re-binding with either zero of existing tree.
    for (let d = depthiParent; d <= depthiRoot; d++) {
        if (isLeftNode(d, index)) {
            // If navigated to the left, then all the child nodes of the right node are NOT part of the new tree.
            // So re-bind new `node` with a zeroNode at the current depth.
            node = new node_1.BranchNode(node, zeroNode_1.zeroNode(d));
        }
        else {
            // If navigated to the right, then all the child nodes of the left node are part of the new tree.
            // So re-bind new `node` with the existing left node of the parent.
            node = new node_1.BranchNode(parentNodeStack[d].left, node);
        }
    }
    // Done, return new root node
    return node;
}
exports.treeZeroAfterIndex = treeZeroAfterIndex;
/**
 * Returns true if the `index` at `depth` is a left node, false if it is a right node.
 *
 * Supports index up to `Number.MAX_SAFE_INTEGER`.
 * In Eth2 case the biggest tree's index is 2**40 (VALIDATOR_REGISTRY_LIMIT)
 */
function isLeftNode(depthi, index) {
    if (depthi > 31) {
        // Javascript can only do bitwise ops with 32 bit numbers.
        // Shifting left 1 by 32 wraps around and becomes 1.
        // Get the high part of `index` and adjust depthi
        const indexHi = (index / 2 ** 32) >>> 0;
        const mask = 1 << (depthi - 32);
        return (indexHi & mask) !== mask;
    }
    const mask = 1 << depthi;
    return (index & mask) !== mask;
}
/**
 * depth depthi   gindexes   indexes
 * 0     1           1          0
 * 1     0         2   3      0   1
 * 2     -        4 5 6 7    0 1 2 3
 *
 * **Conditions**:
 * - `from` and `to` must not be equal
 *
 * @param from Index
 * @param to Index
 */
function findDiffDepthi(from, to) {
    return (
    // (0,0) -> 0 | (0,1) -> 1 | (0,2) -> 2
    Math.ceil(Math.log2(-~(from ^ to))) -
        // Must offset by one to match the depthi scale
        1);
}


/***/ }),

/***/ 55915:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zeroNode = void 0;
const node_1 = __webpack_require__(66286);
const zeroes = [node_1.LeafNode.fromZero()];
/**
 * Return the `Node` at a specified height from the merkle tree made of "zero data"
 * ```
 *           ...
 *          /
 *         x           <- height 2
 *      /     \
 *     x       x       <- height 1
 *   /  \      /  \
 * 0x0  0x0  0x0  0x0  <- height 0
 * ```
 */
function zeroNode(height) {
    if (height >= zeroes.length) {
        for (let i = zeroes.length; i <= height; i++) {
            zeroes[i] = new node_1.BranchNode(zeroes[i - 1], zeroes[i - 1]);
        }
    }
    return zeroes[height];
}
exports.zeroNode = zeroNode;


/***/ })

}]);
//# sourceMappingURL=npm-ns.chainsafe.persistent-merkle-tree.js.map