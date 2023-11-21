"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[828],{

/***/ 38289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchNodeStruct = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
/**
 * BranchNode whose children's data is represented as a struct, not a tree.
 *
 * This approach is usefull for memory efficiency of data that is not modified often, for example the validators
 * registry in Ethereum consensus `state.validators`. The tradeoff is that getting the hash, are proofs is more
 * expensive because the tree has to be recreated every time.
 */
class BranchNodeStruct extends persistent_merkle_tree_1.Node {
    constructor(valueToNode, value) {
        // First null value is to save an extra variable to check if a node has a root or not
        super(null, 0, 0, 0, 0, 0, 0, 0);
        this.valueToNode = valueToNode;
        this.value = value;
    }
    get rootHashObject() {
        if (this.h0 === null) {
            const node = this.valueToNode(this.value);
            super.applyHash(node.rootHashObject);
        }
        return this;
    }
    get root() {
        return persistent_merkle_tree_1.hashObjectToUint8Array(this.rootHashObject);
    }
    isLeaf() {
        return false;
    }
    get left() {
        return this.valueToNode(this.value).left;
    }
    get right() {
        return this.valueToNode(this.value).right;
    }
}
exports.BranchNodeStruct = BranchNodeStruct;


/***/ }),

/***/ 97902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hash64 = exports.byteArrayEquals = exports.toHexString = exports.fromHexString = exports.getUint8ByteToBitBooleanArray = exports.BitArray = exports.TreeViewDU = exports.TreeView = exports.isCompositeType = exports.CompositeType = exports.isBasicType = exports.BasicType = exports.Type = exports.ByteArrayType = exports.BitArrayType = exports.ArrayType = exports.VectorCompositeType = exports.VectorBasicType = exports.UnionType = exports.UintNumberType = exports.UintBigintType = exports.NoneType = exports.ListCompositeType = exports.ListBasicType = exports.ContainerNodeStructType = exports.ContainerType = exports.ByteVectorType = exports.ByteListType = exports.BooleanType = exports.BitVectorType = exports.BitListType = void 0;
// Types
var bitList_1 = __webpack_require__(1624);
Object.defineProperty(exports, "BitListType", ({ enumerable: true, get: function () { return bitList_1.BitListType; } }));
var bitVector_1 = __webpack_require__(2307);
Object.defineProperty(exports, "BitVectorType", ({ enumerable: true, get: function () { return bitVector_1.BitVectorType; } }));
var boolean_1 = __webpack_require__(83493);
Object.defineProperty(exports, "BooleanType", ({ enumerable: true, get: function () { return boolean_1.BooleanType; } }));
var byteList_1 = __webpack_require__(64381);
Object.defineProperty(exports, "ByteListType", ({ enumerable: true, get: function () { return byteList_1.ByteListType; } }));
var byteVector_1 = __webpack_require__(8608);
Object.defineProperty(exports, "ByteVectorType", ({ enumerable: true, get: function () { return byteVector_1.ByteVectorType; } }));
var container_1 = __webpack_require__(70354);
Object.defineProperty(exports, "ContainerType", ({ enumerable: true, get: function () { return container_1.ContainerType; } }));
var containerNodeStruct_1 = __webpack_require__(61769);
Object.defineProperty(exports, "ContainerNodeStructType", ({ enumerable: true, get: function () { return containerNodeStruct_1.ContainerNodeStructType; } }));
var listBasic_1 = __webpack_require__(23977);
Object.defineProperty(exports, "ListBasicType", ({ enumerable: true, get: function () { return listBasic_1.ListBasicType; } }));
var listComposite_1 = __webpack_require__(4103);
Object.defineProperty(exports, "ListCompositeType", ({ enumerable: true, get: function () { return listComposite_1.ListCompositeType; } }));
var none_1 = __webpack_require__(35060);
Object.defineProperty(exports, "NoneType", ({ enumerable: true, get: function () { return none_1.NoneType; } }));
var uint_1 = __webpack_require__(59881);
Object.defineProperty(exports, "UintBigintType", ({ enumerable: true, get: function () { return uint_1.UintBigintType; } }));
Object.defineProperty(exports, "UintNumberType", ({ enumerable: true, get: function () { return uint_1.UintNumberType; } }));
var union_1 = __webpack_require__(78683);
Object.defineProperty(exports, "UnionType", ({ enumerable: true, get: function () { return union_1.UnionType; } }));
var vectorBasic_1 = __webpack_require__(7944);
Object.defineProperty(exports, "VectorBasicType", ({ enumerable: true, get: function () { return vectorBasic_1.VectorBasicType; } }));
var vectorComposite_1 = __webpack_require__(83946);
Object.defineProperty(exports, "VectorCompositeType", ({ enumerable: true, get: function () { return vectorComposite_1.VectorCompositeType; } }));
// Base types
var array_1 = __webpack_require__(34854);
Object.defineProperty(exports, "ArrayType", ({ enumerable: true, get: function () { return array_1.ArrayType; } }));
var bitArray_1 = __webpack_require__(99364);
Object.defineProperty(exports, "BitArrayType", ({ enumerable: true, get: function () { return bitArray_1.BitArrayType; } }));
var byteArray_1 = __webpack_require__(49938);
Object.defineProperty(exports, "ByteArrayType", ({ enumerable: true, get: function () { return byteArray_1.ByteArrayType; } }));
// Base type clases
var abstract_1 = __webpack_require__(5493);
Object.defineProperty(exports, "Type", ({ enumerable: true, get: function () { return abstract_1.Type; } }));
var basic_1 = __webpack_require__(52390);
Object.defineProperty(exports, "BasicType", ({ enumerable: true, get: function () { return basic_1.BasicType; } }));
Object.defineProperty(exports, "isBasicType", ({ enumerable: true, get: function () { return basic_1.isBasicType; } }));
var composite_1 = __webpack_require__(90750);
Object.defineProperty(exports, "CompositeType", ({ enumerable: true, get: function () { return composite_1.CompositeType; } }));
Object.defineProperty(exports, "isCompositeType", ({ enumerable: true, get: function () { return composite_1.isCompositeType; } }));
var abstract_2 = __webpack_require__(52483);
Object.defineProperty(exports, "TreeView", ({ enumerable: true, get: function () { return abstract_2.TreeView; } }));
var abstract_3 = __webpack_require__(81154);
Object.defineProperty(exports, "TreeViewDU", ({ enumerable: true, get: function () { return abstract_3.TreeViewDU; } }));
// Values
var bitArray_2 = __webpack_require__(21253);
Object.defineProperty(exports, "BitArray", ({ enumerable: true, get: function () { return bitArray_2.BitArray; } }));
Object.defineProperty(exports, "getUint8ByteToBitBooleanArray", ({ enumerable: true, get: function () { return bitArray_2.getUint8ByteToBitBooleanArray; } }));
// Utils
var byteArray_2 = __webpack_require__(6165);
Object.defineProperty(exports, "fromHexString", ({ enumerable: true, get: function () { return byteArray_2.fromHexString; } }));
Object.defineProperty(exports, "toHexString", ({ enumerable: true, get: function () { return byteArray_2.toHexString; } }));
Object.defineProperty(exports, "byteArrayEquals", ({ enumerable: true, get: function () { return byteArray_2.byteArrayEquals; } }));
var merkleize_1 = __webpack_require__(72039);
Object.defineProperty(exports, "hash64", ({ enumerable: true, get: function () { return merkleize_1.hash64; } }));


/***/ }),

/***/ 5493:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = void 0;
/**
 * An SSZ type provides the following operations:
 * - Serialization from/to bytes to either a value or a tree
 * - Merkelization to compute the hashTreeRoot of both a value and a tree
 * - Proof creation from trees
 * - Create a View and a ViewDU instance from a tree
 * - Manipulate views
 */
class Type {
    /** INTERNAL METHOD: Merkleize value to tree */
    value_toTree(value) {
        // TODO: Un-performant path but useful for prototyping. Overwrite in Type if performance is important
        const uint8Array = new Uint8Array(this.value_serializedSize(value));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        this.value_serializeToBytes({ uint8Array, dataView }, 0, value);
        return this.tree_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
    }
    /** INTERNAL METHOD: Un-merkleize tree to value */
    tree_toValue(node) {
        // TODO: Un-performant path but useful for prototyping. Overwrite in Type if performance is important
        const uint8Array = new Uint8Array(this.tree_serializedSize(node));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        this.tree_serializeToBytes({ uint8Array, dataView }, 0, node);
        return this.value_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
    }
    /** Serialize a value to binary data */
    serialize(value) {
        const uint8Array = new Uint8Array(this.value_serializedSize(value));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        this.value_serializeToBytes({ uint8Array, dataView }, 0, value);
        return uint8Array;
    }
    /** Deserialize binary data to value */
    deserialize(uint8Array) {
        // Buffer.prototype.slice does not copy memory, force use Uint8Array.prototype.slice https://github.com/nodejs/node/issues/28087
        // - Uint8Array.prototype.slice: Copy memory, safe to mutate
        // - Buffer.prototype.slice: Does NOT copy memory, mutation affects both views
        // We could ensure that all Buffer instances are converted to Uint8Array before calling value_deserializeFromBytes
        // However doing that in a browser friendly way is not easy. Downstream code uses `Uint8Array.prototype.slice.call`
        // to ensure Buffer.prototype.slice is never used. Unit tests also test non-mutability.
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        return this.value_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
    }
}
exports.Type = Type;


/***/ }),

/***/ 34854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const composite_1 = __webpack_require__(90750);
const arrayBasic_1 = __webpack_require__(24558);
/* eslint-disable @typescript-eslint/member-ordering */
/**
 * Array: ordered homogeneous collection
 */
class ArrayType extends composite_1.CompositeType {
    constructor(elementType) {
        super();
        this.elementType = elementType;
    }
    defaultValue() {
        return arrayBasic_1.value_defaultValueArray(this.elementType, this.defaultLen);
    }
    // Proofs
    getPropertyType() {
        return this.elementType;
    }
    getPropertyGindex(prop) {
        if (typeof prop !== "number") {
            throw Error(`Invalid array index: ${prop}`);
        }
        const chunkIdx = Math.floor(prop / this.itemsPerChunk);
        return persistent_merkle_tree_1.toGindex(this.depth, BigInt(chunkIdx));
    }
    getIndexProperty(index) {
        return index;
    }
    tree_getLeafGindices(rootGindex, rootNode) {
        let length;
        if (this.isList) {
            if (!rootNode) {
                throw new Error("List type requires tree argument to get leaves");
            }
            length = this.tree_getLength(rootNode);
        }
        else {
            // Vectors don't need a rootNode to return length
            length = this.tree_getLength(null);
        }
        const gindices = [];
        if (composite_1.isCompositeType(this.elementType)) {
            // Underlying elements exist one per chunk
            // Iterate through chunk gindices, recursively fetching leaf gindices from each chunk
            const startIndex = persistent_merkle_tree_1.toGindex(this.depth, BigInt(0));
            const endGindex = startIndex + BigInt(length);
            const extendedStartIndex = persistent_merkle_tree_1.concatGindices([rootGindex, startIndex]);
            if (this.elementType.fixedSize === null) {
                if (!rootNode) {
                    /* istanbul ignore next - unreachable code */
                    throw new Error("Array of variable size requires tree argument to get leaves");
                }
                // variable-length elements must pass the underlying subtrees to determine the length
                for (let gindex = startIndex, extendedGindex = extendedStartIndex; gindex < endGindex; gindex++, extendedGindex++) {
                    gindices.push(...this.elementType.tree_getLeafGindices(extendedGindex, persistent_merkle_tree_1.getNode(rootNode, gindex)));
                }
            }
            else {
                for (let i = 0, extendedGindex = extendedStartIndex; i < length; i++, extendedGindex++) {
                    gindices.push(...this.elementType.tree_getLeafGindices(extendedGindex));
                }
            }
        }
        // Basic
        else {
            const chunkCount = Math.ceil(length / this.itemsPerChunk);
            const startIndex = persistent_merkle_tree_1.concatGindices([rootGindex, persistent_merkle_tree_1.toGindex(this.depth, BigInt(0))]);
            const endGindex = startIndex + BigInt(chunkCount);
            for (let gindex = startIndex; gindex < endGindex; gindex++) {
                gindices.push(gindex);
            }
        }
        // include the length chunk
        if (this.isList) {
            gindices.push(persistent_merkle_tree_1.concatGindices([rootGindex, composite_1.LENGTH_GINDEX]));
        }
        return gindices;
    }
    // JSON
    fromJson(json) {
        // TODO: Do a better typesafe approach, all final classes of ArrayType implement ArrayProps
        // There are multiple tests that cover this path for all clases
        return arrayBasic_1.value_fromJsonArray(this.elementType, json, this);
    }
    toJson(value) {
        return arrayBasic_1.value_toJsonArray(this.elementType, value, this);
    }
    clone(value) {
        return arrayBasic_1.value_cloneArray(this.elementType, value);
    }
    equals(a, b) {
        return arrayBasic_1.value_equals(this.elementType, a, b);
    }
}
exports.ArrayType = ArrayType;


/***/ }),

/***/ 24558:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertValidArrayLength = exports.value_defaultValueArray = exports.value_equals = exports.value_cloneArray = exports.value_toJsonArray = exports.value_fromJsonArray = exports.tree_deserializeFromBytesArrayBasic = exports.tree_serializeToBytesArrayBasic = exports.value_deserializeFromBytesArrayBasic = exports.value_serializeToBytesArrayBasic = exports.setChunksNode = exports.addLengthNode = exports.getChunksNodeFromRootNode = exports.getLengthFromRootNode = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
// There's a matrix of Array-ish types that require a combination of this functions.
// Regular class extends syntax doesn't work because it can only extend a single class.
//
// Type of array: List, Vector. Changes length property
// Type of element: Basic, Composite. Changes merkelization if packing or not.
// If Composite: Fixed len, Variable len. Changes the serialization requiring offsets.
/**
 * SSZ Lists (variable-length arrays) include the length of the list in the tree
 * This length is always in the same index in the tree
 * ```
 *   1
 *  / \
 * 2   3 // <-here
 * ```
 */
function getLengthFromRootNode(node) {
    // Length is represented as a Uint32 at the start of the chunk:
    // 4 = 4 bytes in Uint32
    // 0 = 0 offset bytes in Node's data
    return node.right.getUint(4, 0);
}
exports.getLengthFromRootNode = getLengthFromRootNode;
function getChunksNodeFromRootNode(node) {
    return node.left;
}
exports.getChunksNodeFromRootNode = getChunksNodeFromRootNode;
function addLengthNode(chunksNode, length) {
    return new persistent_merkle_tree_1.BranchNode(chunksNode, persistent_merkle_tree_1.LeafNode.fromUint32(length));
}
exports.addLengthNode = addLengthNode;
function setChunksNode(rootNode, chunksNode, newLength) {
    const lengthNode = newLength !== undefined
        ? // If newLength is set, create a new node for length
            persistent_merkle_tree_1.LeafNode.fromUint32(newLength)
        : // else re-use existing node
            rootNode.right;
    return new persistent_merkle_tree_1.BranchNode(chunksNode, lengthNode);
}
exports.setChunksNode = setChunksNode;
/**
 * @param length In List length = value.length, Vector length = fixed value
 */
function value_serializeToBytesArrayBasic(elementType, length, output, offset, value) {
    const elSize = elementType.byteLength;
    for (let i = 0; i < length; i++) {
        elementType.value_serializeToBytes(output, offset + i * elSize, value[i]);
    }
    return offset + length * elSize;
}
exports.value_serializeToBytesArrayBasic = value_serializeToBytesArrayBasic;
function value_deserializeFromBytesArrayBasic(elementType, data, start, end, arrayProps) {
    const elSize = elementType.byteLength;
    // Vector + List length validation
    const length = (end - start) / elSize;
    assertValidArrayLength(length, arrayProps, true);
    const values = new Array(length);
    for (let i = 0; i < length; i++) {
        // TODO: If faster, consider skipping size check for uint types
        values[i] = elementType.value_deserializeFromBytes(data, start + i * elSize, start + (i + 1) * elSize);
    }
    return values;
}
exports.value_deserializeFromBytesArrayBasic = value_deserializeFromBytesArrayBasic;
/**
 * @param length In List length = value.length, Vector length = fixed value
 */
function tree_serializeToBytesArrayBasic(elementType, length, depth, output, offset, node) {
    const size = elementType.byteLength * length;
    const chunkCount = Math.ceil(size / 32);
    const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, depth, 0, chunkCount);
    persistent_merkle_tree_1.packedNodeRootsToBytes(output.dataView, offset, size, nodes);
    return offset + size;
}
exports.tree_serializeToBytesArrayBasic = tree_serializeToBytesArrayBasic;
// List of basic elements will pack them in merkelized form
function tree_deserializeFromBytesArrayBasic(elementType, chunkDepth, data, start, end, arrayProps) {
    // Vector + List length validation
    const length = (end - start) / elementType.byteLength;
    assertValidArrayLength(length, arrayProps, true);
    // Abstract converting data to LeafNode to allow for custom data representation, such as the hashObject
    const chunksNode = persistent_merkle_tree_1.packedRootsBytesToNode(chunkDepth, data.dataView, start, end);
    if (arrayProps.isList) {
        return addLengthNode(chunksNode, length);
    }
    else {
        return chunksNode;
    }
}
exports.tree_deserializeFromBytesArrayBasic = tree_deserializeFromBytesArrayBasic;
/**
 * @param length In List length = undefined, Vector length = fixed value
 */
function value_fromJsonArray(elementType, json, arrayProps) {
    if (!Array.isArray(json)) {
        throw Error("JSON is not an array");
    }
    assertValidArrayLength(json.length, arrayProps);
    const value = new Array(json.length);
    for (let i = 0; i < json.length; i++) {
        value[i] = elementType.fromJson(json[i]);
    }
    return value;
}
exports.value_fromJsonArray = value_fromJsonArray;
/**
 * @param length In List length = undefined, Vector length = fixed value
 */
function value_toJsonArray(elementType, value, arrayProps) {
    const length = arrayProps.isList ? value.length : arrayProps.length;
    const json = new Array(length);
    for (let i = 0; i < length; i++) {
        json[i] = elementType.toJson(value[i]);
    }
    return json;
}
exports.value_toJsonArray = value_toJsonArray;
/**
 * Clone recursively an array of basic or composite types
 */
function value_cloneArray(elementType, value) {
    const newValue = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        newValue[i] = elementType.clone(value[i]);
    }
    return newValue;
}
exports.value_cloneArray = value_cloneArray;
/**
 * Check recursively if a type is structuraly equal. Returns early
 */
function value_equals(elementType, a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!elementType.equals(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
exports.value_equals = value_equals;
function value_defaultValueArray(elementType, length) {
    const values = new Array(length);
    for (let i = 0; i < length; i++) {
        values[i] = elementType.defaultValue();
    }
    return values;
}
exports.value_defaultValueArray = value_defaultValueArray;
/**
 * @param checkNonDecimalLength Check that length is a multiple of element size.
 * Optional since it's not necessary in getOffsetsArrayComposite() fn.
 */
function assertValidArrayLength(length, arrayProps, checkNonDecimalLength) {
    if (checkNonDecimalLength && length % 1 !== 0) {
        throw Error("size not multiple of element fixedSize");
    }
    // Vector + List length validation
    if (arrayProps.isList) {
        if (length > arrayProps.limit) {
            throw new Error(`Invalid list length ${length} over limit ${arrayProps.limit}`);
        }
    }
    else {
        if (length !== arrayProps.length) {
            throw new Error(`Incorrect vector length ${length} expected ${arrayProps.length}`);
        }
    }
}
exports.assertValidArrayLength = assertValidArrayLength;


/***/ }),

/***/ 27066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.value_getRootsArrayComposite = exports.tree_deserializeFromBytesArrayComposite = exports.tree_serializeToBytesArrayComposite = exports.tree_serializedSizeArrayComposite = exports.value_deserializeFromBytesArrayComposite = exports.value_serializeToBytesArrayComposite = exports.value_serializedSizeArrayComposite = exports.maxSizeArrayComposite = exports.minSizeArrayComposite = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const arrayBasic_1 = __webpack_require__(24558);
function minSizeArrayComposite(elementType, minCount) {
    // Variable Length
    if (elementType.fixedSize === null) {
        return minCount * (4 + elementType.minSize);
    }
    // Fixed length
    else {
        return minCount * elementType.minSize;
    }
}
exports.minSizeArrayComposite = minSizeArrayComposite;
function maxSizeArrayComposite(elementType, maxCount) {
    // Variable Length
    if (elementType.fixedSize === null) {
        return maxCount * (4 + elementType.maxSize);
    }
    // Fixed length
    else {
        return maxCount * elementType.maxSize;
    }
}
exports.maxSizeArrayComposite = maxSizeArrayComposite;
function value_serializedSizeArrayComposite(elementType, length, value) {
    // Variable Length
    if (elementType.fixedSize === null) {
        let size = 0;
        for (let i = 0; i < length; i++) {
            size += 4 + elementType.value_serializedSize(value[i]);
        }
        return size;
    }
    // Fixed length
    else {
        return length * elementType.fixedSize;
    }
}
exports.value_serializedSizeArrayComposite = value_serializedSizeArrayComposite;
/**
 * @param length In List length = value.length, Vector length = fixed value
 */
function value_serializeToBytesArrayComposite(elementType, length, output, offset, value) {
    // Variable length
    if (elementType.fixedSize === null) {
        let variableIndex = offset + length * 4;
        for (let i = 0; i < length; i++) {
            // write offset
            output.dataView.setUint32(offset + i * 4, variableIndex - offset, true);
            // write serialized element to variable section
            variableIndex = elementType.value_serializeToBytes(output, variableIndex, value[i]);
        }
        return variableIndex;
    }
    // Fixed length
    else {
        for (let i = 0; i < length; i++) {
            elementType.value_serializeToBytes(output, offset + i * elementType.fixedSize, value[i]);
        }
        return offset + length * elementType.fixedSize;
    }
}
exports.value_serializeToBytesArrayComposite = value_serializeToBytesArrayComposite;
function value_deserializeFromBytesArrayComposite(elementType, data, start, end, arrayProps) {
    const offsets = readOffsetsArrayComposite(elementType.fixedSize, data.dataView, start, end, arrayProps);
    const length = offsets.length; // Capture length before pushing end offset
    const values = new Array(length);
    // offests include the last element end
    for (let i = 0; i < length; i++) {
        // The offsets are relative to the start
        const startEl = start + offsets[i];
        const endEl = i === length - 1 ? end : start + offsets[i + 1];
        values[i] = elementType.value_deserializeFromBytes(data, startEl, endEl);
    }
    return values;
}
exports.value_deserializeFromBytesArrayComposite = value_deserializeFromBytesArrayComposite;
/**
 * @param length In List length = value.length, Vector length = fixed value
 */
function tree_serializedSizeArrayComposite(elementType, length, depth, node) {
    // Variable Length
    if (elementType.fixedSize === null) {
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, depth, 0, length);
        let size = 0;
        for (let i = 0; i < nodes.length; i++) {
            size += 4 + elementType.tree_serializedSize(nodes[i]);
        }
        return size;
    }
    // Fixed length
    else {
        return length * elementType.fixedSize;
    }
}
exports.tree_serializedSizeArrayComposite = tree_serializedSizeArrayComposite;
/**
 * @param length In List length = value.length, Vector length = fixed value
 */
function tree_serializeToBytesArrayComposite(elementType, length, depth, node, output, offset) {
    const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, depth, 0, length);
    // Variable Length
    // Indices contain offsets, which are indices deeper in the byte array
    if (elementType.fixedSize === null) {
        let variableIndex = offset + length * 4;
        const { dataView } = output;
        for (let i = 0; i < nodes.length; i++) {
            // write offset
            dataView.setUint32(offset + i * 4, variableIndex - offset, true);
            // write serialized element to variable section
            variableIndex = elementType.tree_serializeToBytes(output, variableIndex, nodes[i]);
        }
        return variableIndex;
    }
    // Fixed length
    else {
        for (let i = 0; i < nodes.length; i++) {
            offset = elementType.tree_serializeToBytes(output, offset, nodes[i]);
        }
        return offset;
    }
}
exports.tree_serializeToBytesArrayComposite = tree_serializeToBytesArrayComposite;
function tree_deserializeFromBytesArrayComposite(elementType, chunkDepth, data, start, end, arrayProps) {
    const offsets = readOffsetsArrayComposite(elementType.fixedSize, data.dataView, start, end, arrayProps);
    const length = offsets.length; // Capture length before pushing end offset
    const nodes = new Array(length);
    // offests include the last element end
    for (let i = 0; i < length; i++) {
        // The offsets are relative to the start
        const startEl = start + offsets[i];
        const endEl = i === length - 1 ? end : start + offsets[i + 1];
        nodes[i] = elementType.tree_deserializeFromBytes(data, startEl, endEl);
    }
    // Abstract converting data to LeafNode to allow for custom data representation, such as the hashObject
    const chunksNode = persistent_merkle_tree_1.subtreeFillToContents(nodes, chunkDepth);
    // TODO: Add LeafNode.fromUint()
    if (arrayProps.isList) {
        return arrayBasic_1.addLengthNode(chunksNode, length);
    }
    else {
        return chunksNode;
    }
}
exports.tree_deserializeFromBytesArrayComposite = tree_deserializeFromBytesArrayComposite;
/**
 * @param length In List length = value.length, Vector length = fixed value
 */
function value_getRootsArrayComposite(elementType, length, value) {
    const roots = new Array(length);
    for (let i = 0; i < length; i++) {
        roots[i] = elementType.hashTreeRoot(value[i]);
    }
    return roots;
}
exports.value_getRootsArrayComposite = value_getRootsArrayComposite;
function readOffsetsArrayComposite(elementFixedSize, data, start, end, arrayProps) {
    const size = end - start;
    let offsets;
    // Variable Length
    // Indices contain offsets, which are indices deeper in the byte array
    if (elementFixedSize === null) {
        offsets = readVariableOffsetsArrayComposite(data, start, size);
    }
    // Fixed length
    else {
        // There's no valid CompositeType with fixed size 0, it's un-rechable code. But prevents diving by zero
        /* istanbul ignore if */
        if (elementFixedSize === 0) {
            throw Error("element fixed length is 0");
        }
        if (size % elementFixedSize !== 0) {
            throw Error(`size ${size} is not multiple of element fixedSize ${elementFixedSize}`);
        }
        const length = size / elementFixedSize;
        offsets = new Uint32Array(length);
        for (let i = 0; i < length; i++) {
            offsets[i] = i * elementFixedSize;
        }
    }
    // Vector + List length validation
    arrayBasic_1.assertValidArrayLength(offsets.length, arrayProps);
    return offsets;
}
/**
 * Reads the values of contiguous variable offsets. Provided buffer includes offsets that point to position
 * within `size`. This function also validates that all offsets are in range.
 */
function readVariableOffsetsArrayComposite(dataView, start, size) {
    if (size === 0) {
        return new Uint32Array(0);
    }
    // all elements are variable-sized
    // indices contain offsets, which are indices deeper in the byte array
    // The serialized data will start with offsets of all the serialized objects (BYTES_PER_LENGTH_OFFSET bytes each)
    const firstOffset = dataView.getUint32(start, true);
    // Using the first offset, we can compute the length of the list (divide by BYTES_PER_LENGTH_OFFSET), as it gives
    // us the total number of bytes in the offset data
    const offsetDataLength = firstOffset;
    if (firstOffset === 0) {
        throw Error("First offset must be > 0");
    }
    if (offsetDataLength % 4 !== 0) {
        throw Error("Offset data length not multiple of 4");
    }
    const offsetCount = offsetDataLength / 4;
    const offsets = new Uint32Array(offsetCount);
    offsets[0] = firstOffset;
    // ArrayComposite has a contiguous section of offsets, then the data
    //
    //    [offset 1] [offset 2] [data 1 ..........] [data 2 ..]
    // 0x 08000000   0e000000   010002000300        01000200
    //
    // Ensure that:
    // - Offsets point to regions of > 0 bytes, i.e. are increasing
    // - Offsets don't point to bytes outside of the array's size
    //
    // In the example above the first offset is 8, so 8 / 4 = 2 offsets.
    // Then, read the rest of offsets to get offsets = [8, 14]
    for (let offsetIdx = 1; offsetIdx < offsetCount; offsetIdx++) {
        const offset = dataView.getUint32(start + offsetIdx * 4, true);
        offsets[offsetIdx] = offset;
        // Offsets must point to data within the Array bytes section
        if (offset > size) {
            throw new Error(`Offset out of bounds ${offset} > ${size}`);
        }
        if (offset < offsets[offsetIdx - 1]) {
            throw new Error(`Offsets must be increasing ${offset} < ${offsets[offsetIdx - 1]}`);
        }
    }
    return offsets;
}


/***/ }),

/***/ 52390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBasicType = exports.BasicType = void 0;
const abstract_1 = __webpack_require__(5493);
/* eslint-disable @typescript-eslint/member-ordering */
/**
 * Represents a basic type as defined in the spec:
 * https://github.com/ethereum/consensus-specs/blob/dev/ssz/simple-serialize.md#basic-types
 */
class BasicType extends abstract_1.Type {
    constructor() {
        super(...arguments);
        this.isBasic = true;
        // Basic types merkleize to exactly one chunk, thus depth of 0
        this.depth = 0;
        // Basic types merkleize to exactly one chunk
        this.maxChunkCount = 1;
    }
    value_serializedSize() {
        return this.byteLength;
    }
    tree_serializedSize() {
        return this.byteLength;
    }
    assertValidSize(size) {
        if (size !== this.byteLength) {
            throw Error(`BasicType invalid size ${size} expected ${this.byteLength}`);
        }
    }
    hashTreeRoot(value) {
        // TODO: Optimize
        const uint8Array = new Uint8Array(32);
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        this.value_serializeToBytes({ uint8Array, dataView }, 0, value);
        return uint8Array;
    }
    clone(value) {
        // All basic types are represented by primitive Javascript types, don't require clone
        return value;
    }
    equals(a, b) {
        // All basic types are represented by primitive Javascript types, the operator === is sufficient
        return a === b;
    }
}
exports.BasicType = BasicType;
function isBasicType(type) {
    return type.isBasic;
}
exports.isBasicType = isBasicType;


/***/ }),

/***/ 99364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitArrayType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const byteArray_1 = __webpack_require__(6165);
const merkleize_1 = __webpack_require__(72039);
const composite_1 = __webpack_require__(90750);
const bitArray_1 = __webpack_require__(44710);
const bitArray_2 = __webpack_require__(17809);
/* eslint-disable @typescript-eslint/member-ordering */
/**
 * BitArray: ordered array collection of boolean values
 * - Value: `BitArray`, @see BitArray for a justification of its memory efficiency and performance
 * - View: `BitArrayTreeView`
 * - ViewDU: `BitArrayTreeViewDU`
 */
class BitArrayType extends composite_1.CompositeType {
    constructor() {
        super(...arguments);
        this.isViewMutable = true;
    }
    getView(tree) {
        return new bitArray_1.BitArrayTreeView(this, tree);
    }
    getViewDU(node) {
        return new bitArray_2.BitArrayTreeViewDU(this, node);
    }
    commitView(view) {
        return view.node;
    }
    commitViewDU(view) {
        view.commit();
        return view.node;
    }
    cacheOfViewDU(view) {
        return view.cache;
    }
    // Merkleization
    getRoots(value) {
        return merkleize_1.splitIntoRootChunks(value.uint8Array);
    }
    // Proofs
    getPropertyGindex() {
        // Stop navigating below this type. Must only request complete data
        return null;
    }
    getPropertyType() {
        /* istanbul ignore next - unreachable code, getPropertyGindex null return prevents this call */
        throw Error("Must only request BitArray complete data");
    }
    getIndexProperty() {
        /* istanbul ignore next - unreachable code, getPropertyGindex null return prevents this call */
        throw Error("Must only request BitArray complete data");
    }
    tree_fromProofNode(node) {
        return { node, done: true };
    }
    tree_getLeafGindices(rootGindex, rootNode) {
        const byteLen = this.tree_getByteLen(rootNode);
        const chunkCount = Math.ceil(byteLen / 32);
        const startIndex = persistent_merkle_tree_1.concatGindices([rootGindex, persistent_merkle_tree_1.toGindex(this.depth, BigInt(0))]);
        const gindices = new Array(chunkCount);
        for (let i = 0, gindex = startIndex; i < chunkCount; i++, gindex++) {
            gindices[i] = gindex;
        }
        // include the length chunk
        if (this.isList) {
            gindices.push(persistent_merkle_tree_1.concatGindices([rootGindex, composite_1.LENGTH_GINDEX]));
        }
        return gindices;
    }
    // JSON
    fromJson(json) {
        const uint8Array = byteArray_1.fromHexString(json);
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        // value_deserializeFromBytes MUST validate length (limit, or length)
        return this.value_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
    }
    toJson(value) {
        return byteArray_1.toHexString(this.serialize(value));
    }
    clone(value) {
        return value.clone();
    }
    equals(a, b) {
        return a.bitLen === b.bitLen && byteArray_1.byteArrayEquals(a.uint8Array, b.uint8Array);
    }
}
exports.BitArrayType = BitArrayType;


/***/ }),

/***/ 1624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitListType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const arrayBasic_1 = __webpack_require__(24558);
const bitArray_1 = __webpack_require__(21253);
const bitArray_2 = __webpack_require__(99364);
/**
 * BitList: ordered variable-length collection of boolean values, limited to N bits
 * - Notation `Bitlist[N]`
 * - Value: `BitArray`, @see BitArray for a justification of its memory efficiency and performance
 * - View: `BitArrayTreeView`
 * - ViewDU: `BitArrayTreeViewDU`
 */
class BitListType extends bitArray_2.BitArrayType {
    constructor(limitBits, opts) {
        super();
        this.limitBits = limitBits;
        this.fixedSize = null;
        this.minSize = 1; // +1 for the extra padding bit
        this.isList = true;
        if (limitBits === 0)
            throw Error("List limit must be > 0");
        this.typeName = opts?.typeName ?? `BitList[${limitBits}]`;
        // TODO Check that itemsPerChunk is an integer
        this.maxChunkCount = Math.ceil(this.limitBits / 8 / 32);
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        // Depth includes the extra level for the length node
        this.depth = 1 + this.chunkDepth;
        this.maxSize = Math.ceil(limitBits / 8) + 1; // +1 for the extra padding bit
    }
    static named(limitBits, opts) {
        return new (named_1.namedClass(BitListType, opts.typeName))(limitBits, opts);
    }
    defaultValue() {
        return bitArray_1.BitArray.fromBitLen(0);
    }
    // Views: inherited from BitArrayType
    // Serialization + deserialization
    value_serializedSize(value) {
        return bitLenToSerializedLength(value.bitLen);
    }
    value_serializeToBytes(output, offset, value) {
        output.uint8Array.set(value.uint8Array, offset);
        return applyPaddingBit(output.uint8Array, offset, value.bitLen);
    }
    value_deserializeFromBytes(data, start, end) {
        const { uint8Array, bitLen } = this.deserializeUint8ArrayBitListFromBytes(data.uint8Array, start, end);
        return new bitArray_1.BitArray(uint8Array, bitLen);
    }
    tree_serializedSize(node) {
        return bitLenToSerializedLength(arrayBasic_1.getLengthFromRootNode(node));
    }
    tree_serializeToBytes(output, offset, node) {
        const chunksNode = arrayBasic_1.getChunksNodeFromRootNode(node);
        const bitLen = arrayBasic_1.getLengthFromRootNode(node);
        const byteLen = Math.ceil(bitLen / 8);
        const chunkLen = Math.ceil(byteLen / 32);
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(chunksNode, this.chunkDepth, 0, chunkLen);
        persistent_merkle_tree_1.packedNodeRootsToBytes(output.dataView, offset, byteLen, nodes);
        return applyPaddingBit(output.uint8Array, offset, bitLen);
    }
    tree_deserializeFromBytes(data, start, end) {
        const { uint8Array, bitLen } = this.deserializeUint8ArrayBitListFromBytes(data.uint8Array, start, end);
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        const chunksNode = persistent_merkle_tree_1.packedRootsBytesToNode(this.chunkDepth, dataView, 0, uint8Array.length);
        return arrayBasic_1.addLengthNode(chunksNode, bitLen);
    }
    tree_getByteLen(node) {
        if (!node)
            throw new Error("BitListType requires a node to get leaves");
        return Math.ceil(arrayBasic_1.getLengthFromRootNode(node) / 8);
    }
    // Merkleization: inherited from BitArrayType
    hashTreeRoot(value) {
        return merkleize_1.mixInLength(super.hashTreeRoot(value), value.bitLen);
    }
    // Proofs: inherited from BitArrayType
    // JSON: inherited from BitArrayType
    // Deserializer helpers
    deserializeUint8ArrayBitListFromBytes(data, start, end) {
        const { uint8Array, bitLen } = deserializeUint8ArrayBitListFromBytes(data, start, end);
        if (bitLen > this.limitBits) {
            throw Error(`bitLen over limit ${bitLen} > ${this.limitBits}`);
        }
        return { uint8Array, bitLen };
    }
}
exports.BitListType = BitListType;
function deserializeUint8ArrayBitListFromBytes(data, start, end) {
    if (end > data.length) {
        throw Error(`BitList attempting to read byte ${end} of data length ${data.length}`);
    }
    const lastByte = data[end - 1];
    const size = end - start;
    if (lastByte === 0) {
        throw new Error("Invalid deserialized bitlist, padding bit required");
    }
    if (lastByte === 1) {
        // Buffer.prototype.slice does not copy memory, Enforce Uint8Array usage https://github.com/nodejs/node/issues/28087
        const uint8Array = Uint8Array.prototype.slice.call(data, start, end - 1);
        const bitLen = (size - 1) * 8;
        return { uint8Array, bitLen };
    }
    // the last byte is > 1, so a padding bit will exist in the last byte and need to be removed
    // Buffer.prototype.slice does not copy memory, Enforce Uint8Array usage https://github.com/nodejs/node/issues/28087
    const uint8Array = Uint8Array.prototype.slice.call(data, start, end);
    // mask lastChunkByte
    const lastByteBitLength = lastByte.toString(2).length - 1;
    const bitLen = (size - 1) * 8 + lastByteBitLength;
    const mask = 0xff >> (8 - lastByteBitLength);
    uint8Array[size - 1] &= mask;
    return { uint8Array, bitLen };
}
function bitLenToSerializedLength(bitLen) {
    const bytes = Math.ceil(bitLen / 8);
    // +1 for the extra padding bit
    return bitLen % 8 === 0 ? bytes + 1 : bytes;
}
/**
 * Apply padding bit to a serialized BitList already written to `output` at `offset`
 * @returns New offset after (maybe) writting a padding bit.
 */
function applyPaddingBit(output, offset, bitLen) {
    const byteLen = Math.ceil(bitLen / 8);
    const newOffset = offset + byteLen;
    if (bitLen % 8 === 0) {
        output[newOffset] = 1;
        return newOffset + 1;
    }
    else {
        output[newOffset - 1] |= 1 << bitLen % 8;
        return newOffset;
    }
}


/***/ }),

/***/ 2307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitVectorType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const bitArray_1 = __webpack_require__(21253);
const bitArray_2 = __webpack_require__(99364);
/**
 * BitVector: ordered fixed-length collection of boolean values, with N bits
 * - Notation: `Bitvector[N]`
 * - Value: `BitArray`, @see BitArray for a justification of its memory efficiency and performance
 * - View: `BitArrayTreeView`
 * - ViewDU: `BitArrayTreeViewDU`
 */
class BitVectorType extends bitArray_2.BitArrayType {
    constructor(lengthBits, opts) {
        super();
        this.lengthBits = lengthBits;
        this.isList = false;
        if (lengthBits === 0)
            throw Error("Vector length must be > 0");
        this.typeName = opts?.typeName ?? `BitVector[${lengthBits}]`;
        this.chunkCount = Math.ceil(this.lengthBits / 8 / 32);
        this.maxChunkCount = this.chunkCount;
        this.depth = merkleize_1.maxChunksToDepth(this.chunkCount);
        this.fixedSize = Math.ceil(this.lengthBits / 8);
        this.minSize = this.fixedSize;
        this.maxSize = this.fixedSize;
        // To cache mask for trailing zero bits validation
        this.zeroBitsMask = lengthBits % 8 === 0 ? 0 : 0xff & (0xff << lengthBits % 8);
    }
    static named(limitBits, opts) {
        return new (named_1.namedClass(BitVectorType, opts.typeName))(limitBits, opts);
    }
    defaultValue() {
        return bitArray_1.BitArray.fromBitLen(this.lengthBits);
    }
    // Views: inherited from BitArrayType
    // Serialization + deserialization
    value_serializedSize() {
        return this.fixedSize;
    }
    value_serializeToBytes(output, offset, value) {
        output.uint8Array.set(value.uint8Array, offset);
        return offset + this.fixedSize;
    }
    value_deserializeFromBytes(data, start, end) {
        this.assertValidLength(data.uint8Array, start, end);
        // Buffer.prototype.slice does not copy memory, Enforce Uint8Array usage https://github.com/nodejs/node/issues/28087
        return new bitArray_1.BitArray(Uint8Array.prototype.slice.call(data.uint8Array, start, end), this.lengthBits);
    }
    tree_serializedSize() {
        return this.fixedSize;
    }
    tree_serializeToBytes(output, offset, node) {
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, this.depth, 0, this.chunkCount);
        persistent_merkle_tree_1.packedNodeRootsToBytes(output.dataView, offset, this.fixedSize, nodes);
        return offset + this.fixedSize;
    }
    tree_deserializeFromBytes(data, start, end) {
        this.assertValidLength(data.uint8Array, start, end);
        return persistent_merkle_tree_1.packedRootsBytesToNode(this.depth, data.dataView, start, end);
    }
    tree_getByteLen() {
        return this.fixedSize;
    }
    // Merkleization: inherited from BitArrayType
    // Proofs: inherited from BitArrayType
    // JSON: inherited from BitArrayType
    // Deserializer helpers
    assertValidLength(data, start, end) {
        const size = end - start;
        if (end - start !== this.fixedSize) {
            throw Error(`Invalid BitVector size ${size} != ${this.fixedSize}`);
        }
        // If lengthBits is not aligned to bytes, ensure trailing bits are zeroed
        if (
        // If zeroBitsMask == 0, then the BitVector uses full bytes only
        this.zeroBitsMask > 0 &&
            // if the last byte is partial, retrieve it and use the cached mask to check if trailing bits are zeroed
            (data[end - 1] & this.zeroBitsMask) > 0) {
            throw Error("BitVector: nonzero bits past length");
        }
    }
}
exports.BitVectorType = BitVectorType;


/***/ }),

/***/ 83493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BooleanType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const named_1 = __webpack_require__(35569);
const basic_1 = __webpack_require__(52390);
/**
 * Boolean: True or False
 * - Notation: `boolean`
 */
class BooleanType extends basic_1.BasicType {
    constructor(opts) {
        super();
        this.byteLength = 1;
        this.itemsPerChunk = 32;
        this.fixedSize = 1;
        this.minSize = 1;
        this.maxSize = 1;
        this.typeName = opts?.typeName ?? "boolean";
    }
    static named(opts) {
        return new (named_1.namedClass(BooleanType, opts.typeName))(opts);
    }
    defaultValue() {
        return false;
    }
    // Serialization + deserialization
    value_serializeToBytes(output, offset, value) {
        output.uint8Array[offset] = value ? 1 : 0;
        return offset + 1;
    }
    value_deserializeFromBytes(data, start, end) {
        this.assertValidSize(end - start);
        switch (data.uint8Array[start]) {
            case 1:
                return true;
            case 0:
                return false;
            default:
                throw new Error(`Boolean: invalid value: ${data.uint8Array[start]}`);
        }
    }
    tree_serializeToBytes(output, offset, node) {
        // TODO: Assumes LeafNode has 4 byte uints are primary unit
        output.uint8Array[offset] = node.getUint(4, 0);
        return offset + 1;
    }
    tree_deserializeFromBytes(data, start, end) {
        this.assertValidSize(end - start);
        const value = data.uint8Array[start];
        if (value > 1) {
            throw Error(`Boolean: invalid value ${value}`);
        }
        return persistent_merkle_tree_1.LeafNode.fromUint32(value);
    }
    // Fast tree opts
    tree_getFromNode(leafNode) {
        return leafNode.getUint(4, 0) === 1;
    }
    tree_setToNode(leafNode, value) {
        leafNode.setUint(4, 0, value ? 1 : 0);
    }
    tree_getFromPackedNode(leafNode, index) {
        const offsetBytes = index % this.itemsPerChunk;
        return leafNode.getUint(1, offsetBytes) !== 0;
    }
    tree_setToPackedNode(leafNode, index, value) {
        const offsetBytes = index % this.itemsPerChunk;
        leafNode.setUint(1, offsetBytes, value ? 1 : 0);
    }
    // JSON
    fromJson(json) {
        if (typeof json !== "boolean") {
            throw Error(`JSON invalid type ${typeof json} expected boolean`);
        }
        return json;
    }
    toJson(value) {
        return value;
    }
}
exports.BooleanType = BooleanType;


/***/ }),

/***/ 49938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteArrayType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const byteArray_1 = __webpack_require__(6165);
const merkleize_1 = __webpack_require__(72039);
const composite_1 = __webpack_require__(90750);
/* eslint-disable @typescript-eslint/member-ordering */
/**
 * ByteArray: ordered array collection of byte values
 * - Value: `Uint8Array`
 * - View: `Uint8Array`
 * - ViewDU: `Uint8Array`
 *
 * ByteArray is an immutable value which is represented by a Uint8Array for memory efficiency and performance.
 * Note: Consumers of this type MUST never mutate the `Uint8Array` representation of a ByteArray.
 */
class ByteArrayType extends composite_1.CompositeType {
    constructor() {
        super(...arguments);
        this.isViewMutable = false;
    }
    defaultValue() {
        // Since it's a byte array the minSize is bytes is the default size
        return new Uint8Array(this.minSize);
    }
    getView(tree) {
        return this.getViewDU(tree.rootNode);
    }
    getViewDU(node) {
        return this.tree_toValue(node);
    }
    commitView(view) {
        return this.commitViewDU(view);
    }
    commitViewDU(view) {
        const uint8Array = new Uint8Array(this.value_serializedSize(view));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        this.value_serializeToBytes({ uint8Array, dataView }, 0, view);
        return this.tree_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
    }
    cacheOfViewDU() {
        return;
    }
    // Over-write to prevent serialize + deserialize
    toView(value) {
        return value;
    }
    toViewDU(value) {
        return value;
    }
    // Serialization + deserialization (only value is generic)
    value_serializeToBytes(output, offset, value) {
        output.uint8Array.set(value, offset);
        return offset + value.length;
    }
    value_deserializeFromBytes(data, start, end) {
        this.assertValidSize(end - start);
        return Uint8Array.prototype.slice.call(data.uint8Array, start, end);
    }
    // Merkleization
    getRoots(value) {
        return merkleize_1.splitIntoRootChunks(value);
    }
    // Proofs
    getPropertyGindex() {
        // Stop navigating below this type. Must only request complete data
        return null;
    }
    getPropertyType() {
        throw Error("Must only request ByteArray complete data");
    }
    getIndexProperty() {
        throw Error("Must only request ByteArray complete data");
    }
    tree_fromProofNode(node) {
        return { node, done: true };
    }
    tree_getLeafGindices(rootGindex, rootNode) {
        const byteLen = this.tree_getByteLen(rootNode);
        const chunkCount = Math.ceil(byteLen / 32);
        const startIndex = persistent_merkle_tree_1.concatGindices([rootGindex, persistent_merkle_tree_1.toGindex(this.depth, BigInt(0))]);
        const gindices = new Array(chunkCount);
        for (let i = 0, gindex = startIndex; i < chunkCount; i++, gindex++) {
            gindices[i] = gindex;
        }
        // include the length chunk
        if (this.isList) {
            gindices.push(persistent_merkle_tree_1.concatGindices([rootGindex, composite_1.LENGTH_GINDEX]));
        }
        return gindices;
    }
    // JSON
    fromJson(json) {
        const value = byteArray_1.fromHexString(json);
        this.assertValidSize(value.length);
        return value;
    }
    toJson(value) {
        return byteArray_1.toHexString(value);
    }
    // ByteArray is immutable
    clone(value) {
        return value;
    }
    equals(a, b) {
        return byteArray_1.byteArrayEquals(a, b);
    }
}
exports.ByteArrayType = ByteArrayType;


/***/ }),

/***/ 64381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteListType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const arrayBasic_1 = __webpack_require__(24558);
const byteArray_1 = __webpack_require__(49938);
/**
 * ByteList: Immutable alias of List[byte, N]
 * - Notation: `ByteList[N]`
 * - Value: `Uint8Array`
 * - View: `Uint8Array`
 * - ViewDU: `Uint8Array`
 *
 * ByteList is an immutable value which is represented by a Uint8Array for memory efficiency and performance.
 * Note: Consumers of this type MUST never mutate the `Uint8Array` representation of a ByteList.
 *
 * For a `ByteListType` with mutability, use `ListBasicType(byteType)`
 */
class ByteListType extends byteArray_1.ByteArrayType {
    constructor(limitBytes, opts) {
        super();
        this.limitBytes = limitBytes;
        this.fixedSize = null;
        this.isList = true;
        if (limitBytes === 0)
            throw Error("List limit must be > 0");
        this.typeName = opts?.typeName ?? `ByteList[${limitBytes}]`;
        this.maxChunkCount = Math.ceil(this.limitBytes / 32);
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        this.depth = 1 + this.chunkDepth;
        this.minSize = 0;
        this.maxSize = this.limitBytes;
    }
    static named(limitBits, opts) {
        return new (named_1.namedClass(ByteListType, opts.typeName))(limitBits, opts);
    }
    // Views: inherited from ByteArrayType
    // Serialization + deserialization
    value_serializedSize(value) {
        return value.length;
    }
    // value_* inherited from ByteArrayType
    tree_serializedSize(node) {
        return arrayBasic_1.getLengthFromRootNode(node);
    }
    tree_serializeToBytes(output, offset, node) {
        const chunksNode = arrayBasic_1.getChunksNodeFromRootNode(node);
        const byteLen = arrayBasic_1.getLengthFromRootNode(node);
        const chunkLen = Math.ceil(byteLen / 32);
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(chunksNode, this.chunkDepth, 0, chunkLen);
        persistent_merkle_tree_1.packedNodeRootsToBytes(output.dataView, offset, byteLen, nodes);
        return offset + byteLen;
    }
    tree_deserializeFromBytes(data, start, end) {
        this.assertValidSize(end - start);
        const chunksNode = persistent_merkle_tree_1.packedRootsBytesToNode(this.chunkDepth, data.dataView, start, end);
        return arrayBasic_1.addLengthNode(chunksNode, end - start);
    }
    tree_getByteLen(node) {
        if (!node)
            throw new Error("ByteListType requires a node to get leaves");
        return arrayBasic_1.getLengthFromRootNode(node);
    }
    // Merkleization: inherited from ByteArrayType
    hashTreeRoot(value) {
        return merkleize_1.mixInLength(super.hashTreeRoot(value), value.length);
    }
    // Proofs: inherited from BitArrayType
    // JSON: inherited from ByteArrayType
    assertValidSize(size) {
        if (size > this.limitBytes) {
            throw Error(`ByteList invalid size ${size} limit ${this.limitBytes}`);
        }
    }
}
exports.ByteListType = ByteListType;


/***/ }),

/***/ 8608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteVectorType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const byteArray_1 = __webpack_require__(49938);
/* eslint-disable @typescript-eslint/member-ordering */
/**
 * ByteVector: Immutable alias of Vector[byte, N]
 * - Notation: `ByteVector[N]`
 * - Value: `Uint8Array`
 * - View: `Uint8Array`
 * - ViewDU: `Uint8Array`
 *
 * ByteVector is an immutable value which is represented by a Uint8Array for memory efficiency and performance.
 * Note: Consumers of this type MUST never mutate the `Uint8Array` representation of a ByteVector.
 *
 * For a `ByteVectorType` with mutability, use `VectorBasicType(byteType)`
 */
class ByteVectorType extends byteArray_1.ByteArrayType {
    constructor(lengthBytes, opts) {
        super();
        this.lengthBytes = lengthBytes;
        this.isList = false;
        if (lengthBytes === 0)
            throw Error("Vector length must be > 0");
        this.typeName = opts?.typeName ?? `ByteVector[${lengthBytes}]`;
        this.maxChunkCount = Math.ceil(this.lengthBytes / 32);
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        this.depth = this.chunkDepth;
        this.fixedSize = this.lengthBytes;
        this.minSize = this.fixedSize;
        this.maxSize = this.fixedSize;
    }
    static named(limitBits, opts) {
        return new (named_1.namedClass(ByteVectorType, opts.typeName))(limitBits, opts);
    }
    // Views: inherited from ByteArrayType
    // Serialization + deserialization
    value_serializedSize() {
        return this.fixedSize;
    }
    // value_* inherited from ByteArrayType
    tree_serializedSize() {
        return this.fixedSize;
    }
    tree_serializeToBytes(output, offset, node) {
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, this.chunkDepth, 0, this.maxChunkCount);
        persistent_merkle_tree_1.packedNodeRootsToBytes(output.dataView, offset, this.fixedSize, nodes);
        return offset + this.fixedSize;
    }
    tree_deserializeFromBytes(data, start, end) {
        this.assertValidSize(end - start);
        return persistent_merkle_tree_1.packedRootsBytesToNode(this.chunkDepth, data.dataView, start, end);
    }
    tree_getByteLen() {
        return this.lengthBytes;
    }
    // Merkleization: inherited from ByteArrayType
    // Proofs: inherited from BitArrayType
    // JSON: inherited from ByteArrayType
    assertValidSize(size) {
        if (size !== this.lengthBytes) {
            throw Error(`ByteVector invalid size ${size} expected ${this.lengthBytes}`);
        }
    }
}
exports.ByteVectorType = ByteVectorType;


/***/ }),

/***/ 90750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCompositeType = exports.CompositeType = exports.LENGTH_GINDEX = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const byteArray_1 = __webpack_require__(6165);
const merkleize_1 = __webpack_require__(72039);
const treePostProcessFromProofNode_1 = __webpack_require__(89896);
const abstract_1 = __webpack_require__(5493);
exports.LENGTH_GINDEX = BigInt(3);
/** Dedicated property to cache hashTreeRoot of immutable CompositeType values */
const symbolCachedPermanentRoot = Symbol("ssz_cached_permanent_root");
/* eslint-disable @typescript-eslint/member-ordering  */
/**
 * Represents a composite type as defined in the spec:
 * https://github.com/ethereum/consensus-specs/blob/dev/ssz/simple-serialize.md#composite-types
 */
class CompositeType extends abstract_1.Type {
    constructor(
    /**
     * Caches `hashTreeRoot()` result for struct values.
     *
     * WARNING: Must only be used for immutable values. The cached root is never discarded
     */
    cachePermanentRootStruct) {
        super();
        this.cachePermanentRootStruct = cachePermanentRootStruct;
        this.isBasic = false;
    }
    /** New instance of a recursive zero'ed value converted to Tree View */
    defaultView() {
        return this.toView(this.defaultValue());
    }
    /** New instance of a recursive zero'ed value converted to Deferred Update Tree View */
    defaultViewDU() {
        return this.toViewDU(this.defaultValue());
    }
    /**
     * Deserialize binary data to a Tree View.
     * @see {@link CompositeType.getView}
     */
    deserializeToView(data) {
        const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
        const node = this.tree_deserializeFromBytes({ uint8Array: data, dataView }, 0, data.length);
        return this.getView(new persistent_merkle_tree_1.Tree(node));
    }
    /**
     * Deserialize binary data to a Deferred Update Tree View.
     * @see {@link CompositeType.getViewDU}
     */
    deserializeToViewDU(data) {
        const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
        const node = this.tree_deserializeFromBytes({ uint8Array: data, dataView }, 0, data.length);
        return this.getViewDU(node);
    }
    /**
     * Transform value to a View.
     * @see {@link CompositeType.getView}
     */
    toView(value) {
        const node = this.value_toTree(value);
        return this.getView(new persistent_merkle_tree_1.Tree(node));
    }
    /**
     * Transform value to a ViewDU.
     * @see {@link CompositeType.getViewDU}
     */
    toViewDU(value) {
        const node = this.value_toTree(value);
        return this.getViewDU(node);
    }
    /**
     * Transform value to a View.
     * @see {@link CompositeType.getView}
     */
    toValueFromView(view) {
        const node = this.commitView(view);
        return this.tree_toValue(node);
    }
    /**
     * Transform value to a ViewDU.
     * @see {@link CompositeType.getViewDU}
     */
    toValueFromViewDU(view) {
        const node = this.commitViewDU(view);
        return this.tree_toValue(node);
    }
    /**
     * Transform a ViewDU to a View.
     * @see {@link CompositeType.getView} and {@link CompositeType.getViewDU}
     */
    toViewFromViewDU(view) {
        const node = this.commitViewDU(view);
        return this.getView(new persistent_merkle_tree_1.Tree(node));
    }
    /**
     * Transform a View to a ViewDU.
     * @see {@link CompositeType.getView} and {@link CompositeType.getViewDU}
     */
    toViewDUFromView(view) {
        const node = this.commitView(view);
        return this.getViewDU(node);
    }
    // Merkleize API
    hashTreeRoot(value) {
        // Return cached mutable root if any
        if (this.cachePermanentRootStruct) {
            const cachedRoot = value[symbolCachedPermanentRoot];
            if (cachedRoot) {
                return cachedRoot;
            }
        }
        const root = merkleize_1.merkleize(this.getRoots(value), this.maxChunkCount);
        if (this.cachePermanentRootStruct) {
            value[symbolCachedPermanentRoot] = root;
        }
        return root;
    }
    // For debugging and testing this feature
    getCachedPermanentRoot(value) {
        return value[symbolCachedPermanentRoot];
    }
    // Proofs API
    /**
     * Create a Tree View from a Proof. Verifies that the Proof is correct against `root`.
     * @see {@link CompositeType.getView}
     */
    createFromProof(proof, root) {
        const rootNodeFromProof = persistent_merkle_tree_1.Tree.createFromProof(proof).rootNode;
        const rootNode = treePostProcessFromProofNode_1.treePostProcessFromProofNode(rootNodeFromProof, this);
        if (root !== undefined && !byteArray_1.byteArrayEquals(rootNode.root, root)) {
            throw new Error("Proof does not match trusted root");
        }
        return this.getView(new persistent_merkle_tree_1.Tree(rootNode));
    }
    /** INTERNAL METHOD: For view's API, create proof from a tree */
    tree_createProof(node, jsonPaths) {
        const gindexes = this.tree_createProofGindexes(node, jsonPaths);
        return persistent_merkle_tree_1.createProof(node, {
            type: persistent_merkle_tree_1.ProofType.treeOffset,
            gindices: gindexes,
        });
    }
    /** INTERNAL METHOD: For view's API, create proof from a tree */
    tree_createProofGindexes(node, jsonPaths) {
        const gindexes = [];
        for (const jsonPath of jsonPaths) {
            const { type, gindex } = this.getPathInfo(jsonPath);
            if (!isCompositeType(type)) {
                gindexes.push(gindex);
            }
            else {
                // if the path subtype is composite, include the gindices of all the leaves
                const leafGindexes = type.tree_getLeafGindices(gindex, type.fixedSize === null ? persistent_merkle_tree_1.getNode(node, gindex) : undefined);
                for (const gindex of leafGindexes) {
                    gindexes.push(gindex);
                }
            }
        }
        return gindexes;
    }
    /**
     * Navigate to a subtype & gindex using a path
     */
    getPathInfo(path) {
        const gindices = [];
        let type = this;
        for (const prop of path) {
            if (type.isBasic) {
                throw new Error("Invalid path: cannot navigate beyond a basic type");
            }
            const gindex = type.getPropertyGindex(prop);
            // else stop navigating
            if (gindex !== null) {
                gindices.push(gindex);
                type = type.getPropertyType(prop);
            }
        }
        return {
            type,
            gindex: persistent_merkle_tree_1.concatGindices(gindices),
        };
    }
    /**
     * INTERNAL METHOD: post process `Ǹode` instance created from a proof and return either the same node,
     * and a new node representing the same data is a different `Node` instance. Currently used exclusively
     * by ContainerNodeStruct to convert `BranchNode` into `BranchNodeStruct`.
     */
    tree_fromProofNode(node) {
        return { node, done: false };
    }
}
exports.CompositeType = CompositeType;
function isCompositeType(type) {
    return !type.isBasic;
}
exports.isCompositeType = isCompositeType;


/***/ }),

/***/ 70354:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderContainerTypeName = exports.precomputeJsonKey = exports.ContainerType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const case_1 = __importDefault(__webpack_require__(90775));
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const composite_1 = __webpack_require__(90750);
const container_1 = __webpack_require__(69397);
const container_2 = __webpack_require__(58540);
/**
 * Container: ordered heterogeneous collection of values
 * - Notation: Custom name per instance
 */
class ContainerType extends composite_1.CompositeType {
    constructor(fields, opts) {
        super(opts?.cachePermanentRootStruct);
        this.fields = fields;
        this.opts = opts;
        this.isList = false;
        this.isViewMutable = true;
        // Render detailed typeName. Consumers should overwrite since it can get long
        this.typeName = opts?.typeName ?? renderContainerTypeName(fields);
        this.maxChunkCount = Object.keys(fields).length;
        this.depth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        // Precalculated data for faster serdes
        this.fieldsEntries = [];
        for (const fieldName of Object.keys(fields)) {
            this.fieldsEntries.push({
                fieldName,
                fieldType: this.fields[fieldName],
                jsonKey: precomputeJsonKey(fieldName, opts?.casingMap, opts?.jsonCase),
                gindex: persistent_merkle_tree_1.toGindex(this.depth, BigInt(this.fieldsEntries.length)),
            });
        }
        if (this.fieldsEntries.length === 0) {
            throw Error("Container must have > 0 fields");
        }
        // Precalculate for Proofs API
        this.fieldsGindex = {};
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            this.fieldsGindex[this.fieldsEntries[i].fieldName] = persistent_merkle_tree_1.toGindex(this.depth, BigInt(i));
        }
        // To resolve JSON paths in fieldName notation and jsonKey notation
        this.jsonKeyToFieldName = {};
        for (const { fieldName, jsonKey } of this.fieldsEntries) {
            this.jsonKeyToFieldName[jsonKey] = fieldName;
        }
        const { minLen, maxLen, fixedSize } = precomputeSizes(fields);
        this.minSize = minLen;
        this.maxSize = maxLen;
        this.fixedSize = fixedSize;
        const { isFixedLen, fieldRangesFixedLen, variableOffsetsPosition, fixedEnd } = precomputeSerdesData(fields);
        this.isFixedLen = isFixedLen;
        this.fieldRangesFixedLen = fieldRangesFixedLen;
        this.variableOffsetsPosition = variableOffsetsPosition;
        this.fixedEnd = fixedEnd;
        // TODO: This options are necessary for ContainerNodeStruct to override this.
        // Refactor this constructor to allow customization without pollutin the options
        this.TreeView = opts?.getContainerTreeViewClass?.(this) ?? container_1.getContainerTreeViewClass(this);
        this.TreeViewDU = opts?.getContainerTreeViewDUClass?.(this) ?? container_2.getContainerTreeViewDUClass(this);
    }
    static named(fields, opts) {
        return new (named_1.namedClass(ContainerType, opts.typeName))(fields, opts);
    }
    defaultValue() {
        const value = {};
        for (const { fieldName, fieldType } of this.fieldsEntries) {
            value[fieldName] = fieldType.defaultValue();
        }
        return value;
    }
    getView(tree) {
        return new this.TreeView(this, tree);
    }
    getViewDU(node, cache) {
        return new this.TreeViewDU(this, node, cache);
    }
    cacheOfViewDU(view) {
        return view.cache;
    }
    commitView(view) {
        return view.node;
    }
    commitViewDU(view) {
        view.commit();
        return view.node;
    }
    // Serialization + deserialization
    // -------------------------------
    // Containers can mix fixed length and variable length data.
    //
    // Fixed part                         Variable part
    // [field1 offset][field2 data       ][field1 data               ]
    // [0x000000c]    [0xaabbaabbaabbaabb][0xffffffffffffffffffffffff]
    value_serializedSize(value) {
        let totalSize = 0;
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            // Offset (4 bytes) + size
            totalSize +=
                fieldType.fixedSize === null ? 4 + fieldType.value_serializedSize(value[fieldName]) : fieldType.fixedSize;
        }
        return totalSize;
    }
    value_serializeToBytes(output, offset, value) {
        let fixedIndex = offset;
        let variableIndex = offset + this.fixedEnd;
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            if (fieldType.fixedSize === null) {
                // write offset
                output.dataView.setUint32(fixedIndex, variableIndex - offset, true);
                fixedIndex += 4;
                // write serialized element to variable section
                variableIndex = fieldType.value_serializeToBytes(output, variableIndex, value[fieldName]);
            }
            else {
                fixedIndex = fieldType.value_serializeToBytes(output, fixedIndex, value[fieldName]);
            }
        }
        return variableIndex;
    }
    value_deserializeFromBytes(data, start, end) {
        const fieldRanges = this.getFieldRanges(data.dataView, start, end);
        const value = {};
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            const fieldRange = fieldRanges[i];
            value[fieldName] = fieldType.value_deserializeFromBytes(data, start + fieldRange.start, start + fieldRange.end);
        }
        return value;
    }
    tree_serializedSize(node) {
        let totalSize = 0;
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, this.depth, 0, this.fieldsEntries.length);
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldType } = this.fieldsEntries[i];
            const node = nodes[i];
            // Offset (4 bytes) + size
            totalSize += fieldType.fixedSize === null ? 4 + fieldType.tree_serializedSize(node) : fieldType.fixedSize;
        }
        return totalSize;
    }
    tree_serializeToBytes(output, offset, node) {
        let fixedIndex = offset;
        let variableIndex = offset + this.fixedEnd;
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(node, this.depth, 0, this.fieldsEntries.length);
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldType } = this.fieldsEntries[i];
            const node = nodes[i];
            if (fieldType.fixedSize === null) {
                // write offset
                output.dataView.setUint32(fixedIndex, variableIndex - offset, true);
                fixedIndex += 4;
                // write serialized element to variable section
                variableIndex = fieldType.tree_serializeToBytes(output, variableIndex, node);
            }
            else {
                fixedIndex = fieldType.tree_serializeToBytes(output, fixedIndex, node);
            }
        }
        return variableIndex;
    }
    tree_deserializeFromBytes(data, start, end) {
        const fieldRanges = this.getFieldRanges(data.dataView, start, end);
        const nodes = new Array(this.fieldsEntries.length);
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldType } = this.fieldsEntries[i];
            const fieldRange = fieldRanges[i];
            nodes[i] = fieldType.tree_deserializeFromBytes(data, start + fieldRange.start, start + fieldRange.end);
        }
        return persistent_merkle_tree_1.subtreeFillToContents(nodes, this.depth);
    }
    // Merkleization
    getRoots(struct) {
        const roots = new Array(this.fieldsEntries.length);
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            roots[i] = fieldType.hashTreeRoot(struct[fieldName]);
        }
        return roots;
    }
    // Proofs
    // getPropertyGindex
    // getPropertyType
    // tree_getLeafGindices
    getPropertyGindex(prop) {
        const gindex = this.fieldsGindex[prop] ?? this.fieldsGindex[this.jsonKeyToFieldName[prop]];
        if (gindex === undefined)
            throw Error(`Unknown container property ${prop}`);
        return gindex;
    }
    getPropertyType(prop) {
        const type = this.fields[prop] ?? this.fields[this.jsonKeyToFieldName[prop]];
        if (type === undefined)
            throw Error(`Unknown container property ${prop}`);
        return type;
    }
    getIndexProperty(index) {
        if (index >= this.fieldsEntries.length) {
            return null;
        }
        return this.fieldsEntries[index].fieldName;
    }
    tree_getLeafGindices(rootGindex, rootNode) {
        const gindices = [];
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            const fieldGindex = this.fieldsGindex[fieldName];
            const fieldGindexFromRoot = persistent_merkle_tree_1.concatGindices([rootGindex, fieldGindex]);
            if (fieldType.isBasic) {
                gindices.push(fieldGindexFromRoot);
            }
            else {
                const compositeType = fieldType;
                if (fieldType.fixedSize === null) {
                    if (!rootNode) {
                        throw new Error("variable type requires tree argument to get leaves");
                    }
                    gindices.push(...compositeType.tree_getLeafGindices(fieldGindexFromRoot, persistent_merkle_tree_1.getNode(rootNode, fieldGindex)));
                }
                else {
                    gindices.push(...compositeType.tree_getLeafGindices(fieldGindexFromRoot));
                }
            }
        }
        return gindices;
    }
    // JSON
    fromJson(json) {
        if (typeof json !== "object") {
            throw Error("JSON must be of type object");
        }
        if (json === null) {
            throw Error("JSON must not be null");
        }
        const value = {};
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType, jsonKey } = this.fieldsEntries[i];
            const jsonValue = json[jsonKey];
            if (jsonValue === undefined) {
                throw Error(`JSON expected key ${jsonKey} is undefined`);
            }
            value[fieldName] = fieldType.fromJson(jsonValue);
        }
        return value;
    }
    toJson(value) {
        const json = {};
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType, jsonKey } = this.fieldsEntries[i];
            json[jsonKey] = fieldType.toJson(value[fieldName]);
        }
        return json;
    }
    clone(value) {
        const newValue = {};
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            newValue[fieldName] = fieldType.clone(value[fieldName]);
        }
        return newValue;
    }
    equals(a, b) {
        for (let i = 0; i < this.fieldsEntries.length; i++) {
            const { fieldName, fieldType } = this.fieldsEntries[i];
            if (!fieldType.equals(a[fieldName], b[fieldName])) {
                return false;
            }
        }
        return true;
    }
    /**
     * Deserializer helper: Returns the bytes ranges of all fields, both variable and fixed size.
     * Fields may not be contiguous in the serialized bytes, so the returned ranges are [start, end].
     * - For fixed size fields re-uses the pre-computed values this.fieldRangesFixedLen
     * - For variable size fields does a first pass over the fixed section to read offsets
     */
    getFieldRanges(data, start, end) {
        if (this.variableOffsetsPosition.length === 0) {
            // Validate fixed length container
            const size = end - start;
            if (size !== this.fixedEnd) {
                throw Error(`${this.typeName} size ${size} not equal fixed size ${this.fixedEnd}`);
            }
            return this.fieldRangesFixedLen;
        }
        // Read offsets in one pass
        const offsets = readVariableOffsets(data, start, end, this.fixedEnd, this.variableOffsetsPosition);
        offsets.push(end - start); // The offsets are relative to the start
        // Merge fieldRangesFixedLen + offsets in one array
        let variableIdx = 0;
        let fixedIdx = 0;
        const fieldRanges = new Array(this.isFixedLen.length);
        for (let i = 0; i < this.isFixedLen.length; i++) {
            if (this.isFixedLen[i]) {
                // push from fixLen ranges ++
                fieldRanges[i] = this.fieldRangesFixedLen[fixedIdx++];
            }
            else {
                // push from varLen ranges ++
                fieldRanges[i] = { start: offsets[variableIdx], end: offsets[variableIdx + 1] };
                variableIdx++;
            }
        }
        return fieldRanges;
    }
}
exports.ContainerType = ContainerType;
/**
 * Returns the byte ranges of all variable size fields.
 */
function readVariableOffsets(data, start, end, fixedEnd, variableOffsetsPosition) {
    // Since variable-sized values can be interspersed with fixed-sized values, we precalculate
    // the offset indices so we can more easily deserialize the fields in once pass first we get the fixed sizes
    // Note: `fixedSizes[i] = null` if that field has variable length
    const size = end - start;
    // with the fixed sizes, we can read the offsets, and store for our single pass
    const offsets = new Array(variableOffsetsPosition.length);
    for (let i = 0; i < variableOffsetsPosition.length; i++) {
        const offset = data.getUint32(start + variableOffsetsPosition[i], true);
        // Validate offsets. If the list is empty the offset points to the end of the buffer, offset == size
        if (offset > size) {
            throw new Error(`Offset out of bounds ${offset} > ${size}`);
        }
        if (i === 0) {
            if (offset !== fixedEnd) {
                throw new Error(`First offset must equal to fixedEnd ${offset} != ${fixedEnd}`);
            }
        }
        else {
            if (offset < offsets[i - 1]) {
                throw new Error(`Offsets must be increasing ${offset} < ${offsets[i - 1]}`);
            }
        }
        offsets[i] = offset;
    }
    return offsets;
}
/**
 * Precompute fixed and variable offsets position for faster deserialization.
 * @returns Does a single pass over all fields and returns:
 * - isFixedLen: If field index [i] is fixed length
 * - fieldRangesFixedLen: For fields with fixed length, their range of bytes
 * - variableOffsetsPosition: Position of the 4 bytes offset for variable size fields
 * - fixedEnd: End of the fixed size range
 * -
 */
function precomputeSerdesData(fields) {
    const isFixedLen = [];
    const fieldRangesFixedLen = [];
    const variableOffsetsPosition = [];
    let pointerFixed = 0;
    for (const fieldType of Object.values(fields)) {
        isFixedLen.push(fieldType.fixedSize !== null);
        if (fieldType.fixedSize === null) {
            // Variable length
            variableOffsetsPosition.push(pointerFixed);
            pointerFixed += 4;
        }
        else {
            fieldRangesFixedLen.push({ start: pointerFixed, end: pointerFixed + fieldType.fixedSize });
            pointerFixed += fieldType.fixedSize;
        }
    }
    return {
        isFixedLen,
        fieldRangesFixedLen,
        variableOffsetsPosition,
        fixedEnd: pointerFixed,
    };
}
/**
 * Precompute sizes of the Container doing one pass over fields
 */
function precomputeSizes(fields) {
    let minLen = 0;
    let maxLen = 0;
    let fixedSize = 0;
    for (const fieldType of Object.values(fields)) {
        minLen += fieldType.minSize;
        maxLen += fieldType.maxSize;
        if (fieldType.fixedSize === null) {
            // +4 for the offset
            minLen += 4;
            maxLen += 4;
            fixedSize = null;
        }
        else if (fixedSize !== null) {
            fixedSize += fieldType.fixedSize;
        }
    }
    return { minLen, maxLen, fixedSize };
}
/**
 * Compute the JSON key for each fieldName. There will exist a single JSON representation for each type.
 * To transform JSON payloads to a casing that is different from the type's defined use external tooling.
 */
function precomputeJsonKey(fieldName, casingMap, jsonCase) {
    if (casingMap) {
        const keyFromCaseMap = casingMap[fieldName];
        if (keyFromCaseMap === undefined) {
            throw Error(`casingMap[${fieldName}] not defined`);
        }
        return keyFromCaseMap;
    }
    else if (jsonCase) {
        if (jsonCase === "eth2") {
            const snake = case_1.default.snake(fieldName);
            return snake.replace(/(\d)$/, "_$1");
        }
        else {
            return case_1.default[jsonCase](fieldName);
        }
    }
    else {
        return fieldName;
    }
}
exports.precomputeJsonKey = precomputeJsonKey;
/**
 * Render field typeNames for a detailed typeName of this Container
 */
function renderContainerTypeName(fields, prefix = "Container") {
    const fieldNames = Object.keys(fields);
    const fieldTypeNames = fieldNames.map((fieldName) => `${fieldName}: ${fields[fieldName].typeName}`).join(", ");
    return `${prefix}({${fieldTypeNames}})`;
}
exports.renderContainerTypeName = renderContainerTypeName;


/***/ }),

/***/ 61769:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContainerNodeStructType = void 0;
const composite_1 = __webpack_require__(90750);
const container_1 = __webpack_require__(70354);
const named_1 = __webpack_require__(35569);
const containerNodeStruct_1 = __webpack_require__(87626);
const containerNodeStruct_2 = __webpack_require__(17508);
const branchNodeStruct_1 = __webpack_require__(38289);
/**
 * ContainerNodeStruct: ordered heterogeneous collection of values.
 * - Notation: Custom name per instance
 *
 * A ContainerNodeStruct is identical to a Container type except that it represents tree data with a custom
 * BranchNodeStruct node. This special branch node represents the data of its entire sub tree as a value, instead
 * of a tree of nodes. This approach is a tradeoff:
 *
 * - More memory efficient
 * - Faster reads, since it doesn't require parsing merkleized data
 * - Slower hashing, since it has to merkleize the entire value everytime and has not intermediary hashing cache
 *
 * This tradeoff is good for data that is read often, written rarely, and consumes a lot of memory (i.e. Validator)
 */
class ContainerNodeStructType extends container_1.ContainerType {
    constructor(fields, opts) {
        super(fields, {
            // Overwrite default "Container" typeName
            // Render detailed typeName. Consumers should overwrite since it can get long
            typeName: opts?.typeName ?? container_1.renderContainerTypeName(fields, "ContainerNodeStruct"),
            ...opts,
            getContainerTreeViewClass: containerNodeStruct_1.getContainerTreeViewClass,
            getContainerTreeViewDUClass: containerNodeStruct_2.getContainerTreeViewDUClass,
        });
        this.fields = fields;
        // ContainerNodeStructType TreeViews don't handle recursive mutable TreeViews like ContainerType does.
        // Using ContainerNodeStructType for fields that have mutable views (like a ListBasic), will result in
        // unnexpected behaviour if those child views are mutated.
        //
        // For example, this example below won't persist the pushed values to the list:
        // ```ts
        // const type = ContainerNodeStructType({a: new ListBasicType(byteType, 1)});
        // const view = type.defaultViewDU();
        // view.a.push(0)
        // ```
        // because the ListBasicViewDU in view.a will never propagate the changes upwards to its ContainerNodeStructType.
        for (const { fieldName, fieldType } of this.fieldsEntries) {
            if (composite_1.isCompositeType(fieldType) && fieldType.isViewMutable) {
                throw Error(`ContainerNodeStructType field '${fieldName}' ${fieldType.typeName} view is mutable`);
            }
        }
    }
    static named(fields, opts) {
        return new (named_1.namedClass(container_1.ContainerType, opts.typeName))(fields, opts);
    }
    tree_serializedSize(node) {
        return this.value_serializedSize(node.value);
    }
    tree_serializeToBytes(output, offset, node) {
        const { value } = node;
        return this.value_serializeToBytes(output, offset, value);
    }
    tree_deserializeFromBytes(data, start, end) {
        const value = this.value_deserializeFromBytes(data, start, end);
        return new branchNodeStruct_1.BranchNodeStruct(this.valueToTree.bind(this), value);
    }
    // Proofs
    // ContainerNodeStructType can only parse proofs that contain all the data.
    // TODO: Support converting a partial tree to a partial value
    getPropertyGindex() {
        return null;
    }
    // Post process tree to convert regular BranchNode to BranchNodeStruct
    // TODO: Optimize conversions
    tree_fromProofNode(node) {
        // TODO: Figure out from `node` alone if it contains complete data.
        // Otherwise throw a nice error "ContainerNodeStruct type requires proofs for all its data"
        const uint8Array = new Uint8Array(super.tree_serializedSize(node));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        super.tree_serializeToBytes({ uint8Array, dataView }, 0, node);
        const value = this.value_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
        return {
            node: new branchNodeStruct_1.BranchNodeStruct(this.valueToTree.bind(this), value),
            done: true,
        };
    }
    // Overwrites for fast conversion node <-> value
    tree_toValue(node) {
        return node.value;
    }
    value_toTree(value) {
        return new branchNodeStruct_1.BranchNodeStruct(this.valueToTree.bind(this), value);
    }
    // TODO: Optimize conversion
    valueToTree(value) {
        const uint8Array = new Uint8Array(this.value_serializedSize(value));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        this.value_serializeToBytes({ uint8Array, dataView }, 0, value);
        return super.tree_deserializeFromBytes({ uint8Array, dataView }, 0, uint8Array.length);
    }
}
exports.ContainerNodeStructType = ContainerNodeStructType;


/***/ }),

/***/ 23977:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListBasicType = void 0;
const arrayBasic_1 = __webpack_require__(24558);
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const listBasic_1 = __webpack_require__(35965);
const listBasic_2 = __webpack_require__(29102);
const array_1 = __webpack_require__(34854);
/**
 * List: ordered variable-length homogeneous collection, limited to N values
 *
 * Array of Basic type:
 * - Basic types are max 32 bytes long so multiple values may be packed in the same node.
 * - Basic types are never returned in a view wrapper, but their value representation
 */
class ListBasicType extends array_1.ArrayType {
    constructor(elementType, limit, opts) {
        super(elementType);
        this.elementType = elementType;
        this.limit = limit;
        this.fixedSize = null;
        this.isList = true;
        this.isViewMutable = true;
        this.defaultLen = 0;
        if (!elementType.isBasic)
            throw Error("elementType must be basic");
        if (limit === 0)
            throw Error("List limit must be > 0");
        this.typeName = opts?.typeName ?? `List[${elementType.typeName}, ${limit}]`;
        // TODO Check that itemsPerChunk is an integer
        this.itemsPerChunk = 32 / elementType.byteLength;
        this.maxChunkCount = Math.ceil((this.limit * elementType.byteLength) / 32);
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        // Depth includes the extra level for the length node
        this.depth = this.chunkDepth + 1;
        this.minSize = 0;
        this.maxSize = this.limit * elementType.maxSize;
    }
    static named(elementType, limit, opts) {
        return new (named_1.namedClass(ListBasicType, opts.typeName))(elementType, limit, opts);
    }
    getView(tree) {
        return new listBasic_1.ListBasicTreeView(this, tree);
    }
    getViewDU(node, cache) {
        // cache type should be validated (if applicate) in the view
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new listBasic_2.ListBasicTreeViewDU(this, node, cache);
    }
    commitView(view) {
        return view.node;
    }
    commitViewDU(view) {
        view.commit();
        return view.node;
    }
    cacheOfViewDU(view) {
        return view.cache;
    }
    // Serialization + deserialization
    value_serializedSize(value) {
        return value.length * this.elementType.byteLength;
    }
    value_serializeToBytes(output, offset, value) {
        return arrayBasic_1.value_serializeToBytesArrayBasic(this.elementType, value.length, output, offset, value);
    }
    value_deserializeFromBytes(data, start, end) {
        return arrayBasic_1.value_deserializeFromBytesArrayBasic(this.elementType, data, start, end, this);
    }
    tree_serializedSize(node) {
        return this.tree_getLength(node) * this.elementType.byteLength;
    }
    tree_serializeToBytes(output, offset, node) {
        const chunksNode = this.tree_getChunksNode(node);
        const length = this.tree_getLength(node);
        return arrayBasic_1.tree_serializeToBytesArrayBasic(this.elementType, length, this.chunkDepth, output, offset, chunksNode);
    }
    tree_deserializeFromBytes(data, start, end) {
        return arrayBasic_1.tree_deserializeFromBytesArrayBasic(this.elementType, this.chunkDepth, data, start, end, this);
    }
    // Helpers for TreeView
    tree_getLength(node) {
        return node.right.getUint(4, 0);
    }
    tree_setLength(tree, length) {
        tree.rootNode = arrayBasic_1.addLengthNode(tree.rootNode.left, length);
    }
    tree_getChunksNode(node) {
        return node.left;
    }
    tree_setChunksNode(rootNode, chunksNode, newLength) {
        return arrayBasic_1.setChunksNode(rootNode, chunksNode, newLength);
    }
    // Merkleization
    hashTreeRoot(value) {
        return merkleize_1.mixInLength(super.hashTreeRoot(value), value.length);
    }
    getRoots(value) {
        const uint8Array = new Uint8Array(this.value_serializedSize(value));
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        arrayBasic_1.value_serializeToBytesArrayBasic(this.elementType, value.length, { uint8Array, dataView }, 0, value);
        return merkleize_1.splitIntoRootChunks(uint8Array);
    }
}
exports.ListBasicType = ListBasicType;


/***/ }),

/***/ 4103:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListCompositeType = void 0;
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const arrayBasic_1 = __webpack_require__(24558);
const arrayComposite_1 = __webpack_require__(27066);
const listComposite_1 = __webpack_require__(33628);
const listComposite_2 = __webpack_require__(13181);
const array_1 = __webpack_require__(34854);
/**
 * List: ordered variable-length homogeneous collection, limited to N values
 *
 * Array of Composite type:
 * - Composite types always take at least one chunk
 * - Composite types are always returned as views
 */
class ListCompositeType extends array_1.ArrayType {
    constructor(elementType, limit, opts) {
        super(elementType);
        this.elementType = elementType;
        this.limit = limit;
        this.itemsPerChunk = 1;
        this.fixedSize = null;
        this.isList = true;
        this.isViewMutable = true;
        this.defaultLen = 0;
        if (elementType.isBasic)
            throw Error("elementType must not be basic");
        if (limit === 0)
            throw Error("List limit must be > 0");
        this.typeName = opts?.typeName ?? `List[${elementType.typeName}, ${limit}]`;
        this.maxChunkCount = this.limit;
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        // Depth includes the extra level for the length node
        this.depth = this.chunkDepth + 1;
        this.minSize = 0;
        this.maxSize = arrayComposite_1.maxSizeArrayComposite(elementType, this.limit);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static named(elementType, limit, opts) {
        return new (named_1.namedClass(ListCompositeType, opts.typeName))(elementType, limit, opts);
    }
    getView(tree) {
        return new listComposite_1.ListCompositeTreeView(this, tree);
    }
    getViewDU(node, cache) {
        // cache type should be validated (if applicate) in the view
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new listComposite_2.ListCompositeTreeViewDU(this, node, cache);
    }
    commitView(view) {
        return view.node;
    }
    commitViewDU(view) {
        view.commit();
        return view.node;
    }
    cacheOfViewDU(view) {
        return view.cache;
    }
    // Serialization + deserialization
    value_serializedSize(value) {
        return arrayComposite_1.value_serializedSizeArrayComposite(this.elementType, value.length, value);
    }
    value_serializeToBytes(output, offset, value) {
        return arrayComposite_1.value_serializeToBytesArrayComposite(this.elementType, value.length, output, offset, value);
    }
    value_deserializeFromBytes(data, start, end) {
        return arrayComposite_1.value_deserializeFromBytesArrayComposite(this.elementType, data, start, end, this);
    }
    tree_serializedSize(node) {
        const chunksNode = this.tree_getChunksNode(node);
        const length = this.tree_getLength(node);
        return arrayComposite_1.tree_serializedSizeArrayComposite(this.elementType, length, this.chunkDepth, chunksNode);
    }
    tree_serializeToBytes(output, offset, node) {
        const chunksNode = this.tree_getChunksNode(node);
        const length = this.tree_getLength(node);
        return arrayComposite_1.tree_serializeToBytesArrayComposite(this.elementType, length, this.chunkDepth, chunksNode, output, offset);
    }
    tree_deserializeFromBytes(data, start, end) {
        return arrayComposite_1.tree_deserializeFromBytesArrayComposite(this.elementType, this.chunkDepth, data, start, end, this);
    }
    // Helpers for TreeView
    tree_getLength(node) {
        return arrayBasic_1.getLengthFromRootNode(node);
    }
    tree_setLength(tree, length) {
        tree.rootNode = arrayBasic_1.addLengthNode(tree.rootNode.left, length);
    }
    tree_getChunksNode(node) {
        return node.left;
    }
    tree_setChunksNode(rootNode, chunksNode, newLength) {
        return arrayBasic_1.setChunksNode(rootNode, chunksNode, newLength);
    }
    // Merkleization
    hashTreeRoot(value) {
        return merkleize_1.mixInLength(super.hashTreeRoot(value), value.length);
    }
    getRoots(value) {
        return arrayComposite_1.value_getRootsArrayComposite(this.elementType, value.length, value);
    }
}
exports.ListCompositeType = ListCompositeType;


/***/ }),

/***/ 35060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const basic_1 = __webpack_require__(52390);
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-vars */
class NoneType extends basic_1.BasicType {
    constructor() {
        super(...arguments);
        this.typeName = "none";
        this.byteLength = 0;
        this.itemsPerChunk = 32;
        this.fixedSize = 0;
        this.minSize = 0;
        this.maxSize = 0;
    }
    defaultValue() {
        return null;
    }
    // bytes serdes
    value_serializeToBytes(output, offset, value) {
        return offset;
    }
    value_deserializeFromBytes(data, start) {
        return null;
    }
    tree_serializeToBytes(output, offset, node) {
        return offset;
    }
    tree_deserializeFromBytes(data, start, end) {
        return persistent_merkle_tree_1.zeroNode(0);
    }
    // Fast tree opts
    tree_getFromNode(leafNode) {
        return null;
    }
    tree_setToNode(leafNode, value) {
        return;
    }
    tree_getFromPackedNode(leafNode, index) {
        return null;
    }
    tree_setToPackedNode(leafNode, index, value) {
        return;
    }
    // JSON
    fromJson(json) {
        if (json !== null) {
            throw Error("JSON invalid type none must be null");
        }
        return null;
    }
    toJson(value) {
        return null;
    }
}
exports.NoneType = NoneType;


/***/ }),

/***/ 59881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UintBigintType = exports.UintNumberType = exports.uintBigintByteLens = exports.uintNumberByteLens = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const named_1 = __webpack_require__(35569);
const basic_1 = __webpack_require__(52390);
/* eslint-disable @typescript-eslint/member-ordering */
const MAX_SAFE_INTEGER_BN = BigInt(Number.MAX_SAFE_INTEGER);
const BIGINT_2_POW_64 = BigInt(2) ** BigInt(64);
const BIGINT_2_POW_128 = BigInt(2) ** BigInt(128);
const BIGINT_2_POW_192 = BigInt(2) ** BigInt(192);
// const BIGINT_64_MAX = BigInt("0xffffffffffffffff");
const NUMBER_2_POW_32 = 2 ** 32;
const NUMBER_32_MAX = 0xffffffff;
exports.uintNumberByteLens = [1, 2, 4, 8];
exports.uintBigintByteLens = [1, 2, 4, 8, 16, 32];
/**
 * Uint: N-bit unsigned integer (where N in [8, 16, 32, 64, 128, 256])
 * - Notation: uintN
 *
 * UintNumber is represented as the Javascript primitive value 'Number'.
 *
 * The Number type is a double-precision 64-bit binary format IEEE 754 value (numbers between -(2^53 − 1) and
 * 2^53 − 1). It also has the symbolic value: +Infinity.
 *
 * As of 2021 performance of 'Number' is extremely faster than 'BigInt'. Some values are spec'ed as Uint64 but
 * practically they will never exceed 53 bits, such as any unit time or simple counters. This type is an optimization
 * for these cases, as UintNumber64 can represent any value between 0 and 2^53−1 as well as the max value 2^64-1.
 */
class UintNumberType extends basic_1.BasicType {
    constructor(byteLength, opts) {
        super();
        this.byteLength = byteLength;
        if (byteLength > 8) {
            throw Error("UintNumber byteLength limit is 8");
        }
        if (Math.log2(byteLength) % 1 !== 0) {
            throw Error("byteLength must be a power of 2");
        }
        this.typeName = opts?.typeName ?? `uint${byteLength * 8}`;
        if (opts?.clipInfinity)
            this.typeName += "Inf";
        if (opts?.setBitwiseOR)
            this.typeName += "OR";
        this.itemsPerChunk = 32 / this.byteLength;
        this.fixedSize = byteLength;
        this.minSize = byteLength;
        this.maxSize = byteLength;
        this.maxDecimalStr = (BigInt(2) ** BigInt(this.byteLength * 8) - BigInt(1)).toString(10);
        this.clipInfinity = opts?.clipInfinity === true;
        this.setBitwiseOR = opts?.setBitwiseOR === true;
    }
    static named(byteLength, opts) {
        return new (named_1.namedClass(UintNumberType, opts.typeName))(byteLength, opts);
    }
    defaultValue() {
        return 0;
    }
    // Serialization + deserialization
    value_serializeToBytes({ dataView }, offset, value) {
        switch (this.byteLength) {
            case 1:
                dataView.setInt8(offset, value);
                break;
            case 2:
                dataView.setUint16(offset, value, true);
                break;
            case 4:
                dataView.setUint32(offset, value, true);
                break;
            case 8:
                if (value === Infinity) {
                    // TODO: Benchmark if it's faster to set BIGINT_64_MAX once
                    dataView.setUint32(offset, 0xffffffff);
                    dataView.setUint32(offset + 4, 0xffffffff);
                }
                else {
                    dataView.setUint32(offset, value & 0xffffffff, true);
                    dataView.setUint32(offset + 4, (value / NUMBER_2_POW_32) & 0xffffffff, true);
                }
                break;
        }
        return offset + this.byteLength;
    }
    value_deserializeFromBytes({ dataView }, start, end) {
        this.assertValidSize(end - start);
        switch (this.byteLength) {
            case 1:
                return dataView.getUint8(start);
            case 2:
                return dataView.getUint16(start, true);
            case 4:
                return dataView.getUint32(start, true);
            case 8: {
                const a = dataView.getUint32(start, true);
                const b = dataView.getUint32(start + 4, true);
                if (b === NUMBER_32_MAX && a === NUMBER_32_MAX && this.clipInfinity) {
                    return Infinity;
                }
                else {
                    return b * NUMBER_2_POW_32 + a;
                }
            }
        }
    }
    tree_serializeToBytes(output, offset, node) {
        const value = node.getUint(this.byteLength, 0, this.clipInfinity);
        this.value_serializeToBytes(output, offset, value);
        return offset + this.byteLength;
    }
    tree_deserializeFromBytes(data, start, end) {
        this.assertValidSize(end - start);
        const value = this.value_deserializeFromBytes(data, start, end);
        const node = persistent_merkle_tree_1.LeafNode.fromZero();
        node.setUint(this.byteLength, 0, value, this.clipInfinity);
        return node;
    }
    // Fast Tree access
    tree_getFromNode(leafNode) {
        return leafNode.getUint(this.byteLength, 0, this.clipInfinity);
    }
    tree_setToNode(leafNode, value) {
        this.tree_setToPackedNode(leafNode, 0, value);
    }
    tree_getFromPackedNode(leafNode, index) {
        const offsetBytes = this.byteLength * (index % this.itemsPerChunk);
        return leafNode.getUint(this.byteLength, offsetBytes, this.clipInfinity);
    }
    tree_setToPackedNode(leafNode, index, value) {
        const offsetBytes = this.byteLength * (index % this.itemsPerChunk);
        // TODO: Benchmark the cost of this if, and consider using a different class
        if (this.setBitwiseOR) {
            leafNode.bitwiseOrUint(this.byteLength, offsetBytes, value);
        }
        else {
            leafNode.setUint(this.byteLength, offsetBytes, value, this.clipInfinity);
        }
    }
    // JSON
    fromJson(json) {
        if (typeof json === "number") {
            return json;
        }
        else if (typeof json === "string") {
            if (this.clipInfinity && json === this.maxDecimalStr) {
                // Allow to handle max possible number
                return Infinity;
            }
            else {
                const num = parseInt(json, 10);
                if (isNaN(num)) {
                    throw Error("JSON invalid number isNaN");
                }
                else if (num > Number.MAX_SAFE_INTEGER) {
                    // Throw to prevent decimal precision errors downstream
                    throw Error("JSON invalid number > MAX_SAFE_INTEGER");
                }
                else {
                    return num;
                }
            }
        }
        else if (typeof json === "bigint") {
            if (json > MAX_SAFE_INTEGER_BN) {
                // Throw to prevent decimal precision errors downstream
                throw Error("JSON invalid number > MAX_SAFE_INTEGER_BN");
            }
            else {
                return Number(json);
            }
        }
        else {
            throw Error(`JSON invalid type ${typeof json} expected number`);
        }
    }
    toJson(value) {
        if (value === Infinity) {
            return this.maxDecimalStr;
        }
        else {
            return value.toString(10);
        }
    }
}
exports.UintNumberType = UintNumberType;
/**
 * Uint: N-bit unsigned integer (where N in [8, 16, 32, 64, 128, 256])
 * - Notation: uintN
 *
 * UintBigint is represented as the Javascript primitive value 'BigInt'.
 *
 * The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision.
 * With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
 *
 * As of 2021 performance of 'Number' is extremely faster than 'BigInt'. For Uint values under 53 bits use UintNumber.
 * For other values that may exceed 53 bits, use UintBigint.
 */
class UintBigintType extends basic_1.BasicType {
    constructor(byteLength, opts) {
        super();
        this.byteLength = byteLength;
        if (byteLength > 32) {
            throw Error("UintBigint byteLength limit is 32");
        }
        if (Math.log2(byteLength) % 1 !== 0) {
            throw Error("byteLength must be a power of 2");
        }
        this.typeName = opts?.typeName ?? `uintBigint${byteLength * 8}`;
        this.byteLength = byteLength;
        this.itemsPerChunk = 32 / this.byteLength;
        this.fixedSize = byteLength;
        this.minSize = byteLength;
        this.maxSize = byteLength;
    }
    static named(byteLength, opts) {
        return new (named_1.namedClass(UintBigintType, opts.typeName))(byteLength, opts);
    }
    defaultValue() {
        return BigInt(0);
    }
    // Serialization + deserialization
    value_serializeToBytes({ dataView }, offset, value) {
        switch (this.byteLength) {
            case 1:
                dataView.setInt8(offset, Number(value));
                break;
            case 2:
                dataView.setUint16(offset, Number(value), true);
                break;
            case 4:
                dataView.setUint32(offset, Number(value), true);
                break;
            case 8:
                dataView.setBigUint64(offset, value, true);
                break;
            default: {
                for (let i = 0; i < this.byteLength; i += 8) {
                    if (i > 0)
                        value = value / BIGINT_2_POW_64;
                    const lo = BigInt.asUintN(64, value);
                    dataView.setBigUint64(offset + i, lo, true);
                }
            }
        }
        return offset + this.byteLength;
    }
    value_deserializeFromBytes({ dataView }, start, end) {
        const size = end - start;
        if (size !== this.byteLength) {
            throw Error(`Invalid size ${size} expected ${this.byteLength}`);
        }
        // Note: pre-assigning the right function at the constructor to avoid this switch is not faster
        switch (this.byteLength) {
            case 1:
                return BigInt(dataView.getUint8(start));
            case 2:
                return BigInt(dataView.getUint16(start, true));
            case 4:
                return BigInt(dataView.getUint32(start, true));
            case 8:
                return dataView.getBigUint64(start, true);
            case 16: {
                const a = dataView.getBigUint64(start, true);
                const b = dataView.getBigUint64(start + 8, true);
                return b * BIGINT_2_POW_64 + a;
            }
            case 32: {
                const a = dataView.getBigUint64(start, true);
                const b = dataView.getBigUint64(start + 8, true);
                const c = dataView.getBigUint64(start + 16, true);
                const d = dataView.getBigUint64(start + 24, true);
                return d * BIGINT_2_POW_192 + c * BIGINT_2_POW_128 + b * BIGINT_2_POW_64 + a;
            }
        }
    }
    tree_serializeToBytes(output, offset, node) {
        const value = node.getUintBigint(this.byteLength, 0);
        this.value_serializeToBytes(output, offset, value);
        return offset + this.byteLength;
    }
    tree_deserializeFromBytes(data, start, end) {
        const size = end - start;
        if (size !== this.byteLength) {
            throw Error(`Invalid size ${size} expected ${this.byteLength}`);
        }
        const value = this.value_deserializeFromBytes(data, start, end);
        const node = persistent_merkle_tree_1.LeafNode.fromZero();
        node.setUintBigint(this.byteLength, 0, value);
        return node;
    }
    // Fast Tree access
    tree_getFromNode(leafNode) {
        return leafNode.getUintBigint(this.byteLength, 0);
    }
    /** Mutates node to set value */
    tree_setToNode(leafNode, value) {
        this.tree_setToPackedNode(leafNode, 0, value);
    }
    /** EXAMPLE of `tree_getFromNode` */
    tree_getFromPackedNode(leafNode, index) {
        const offsetBytes = this.byteLength * (index % this.itemsPerChunk);
        return leafNode.getUintBigint(this.byteLength, offsetBytes);
    }
    /** Mutates node to set value */
    tree_setToPackedNode(leafNode, index, value) {
        const offsetBytes = this.byteLength * (index % this.itemsPerChunk);
        // TODO: Not-optimized, copy pasted from UintNumberType
        leafNode.setUintBigint(this.byteLength, offsetBytes, value);
    }
    // JSON
    fromJson(json) {
        if (typeof json === "bigint") {
            return json;
        }
        else if (typeof json === "string" || typeof json === "number") {
            return BigInt(json);
        }
        else {
            throw Error(`JSON invalid type ${typeof json} expected bigint`);
        }
    }
    toJson(value) {
        return value.toString(10);
    }
}
exports.UintBigintType = UintBigintType;


/***/ }),

/***/ 78683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnionType = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const composite_1 = __webpack_require__(90750);
const arrayBasic_1 = __webpack_require__(24558);
const none_1 = __webpack_require__(35060);
const VALUE_GINDEX = BigInt(2);
const SELECTOR_GINDEX = BigInt(3);
/**
 * Union: union type containing one of the given subtypes
 * - Notation: Union[type_0, type_1, ...], e.g. union[None, uint64, uint32]
 */
class UnionType extends composite_1.CompositeType {
    constructor(types, opts) {
        super();
        this.types = types;
        this.depth = 1;
        this.maxChunkCount = 1;
        this.fixedSize = null;
        this.isList = true;
        this.isViewMutable = true;
        if (types.length >= 128) {
            throw Error("Must have less than 128 types");
        }
        if (types.length === 0) {
            throw Error("Must have at least 1 type option");
        }
        if (types[0] instanceof none_1.NoneType && types.length < 2) {
            throw Error("Must have at least 2 type options if the first is None");
        }
        for (let i = 1; i < types.length; i++) {
            if (types[i] instanceof none_1.NoneType) {
                throw Error("None may only be the first option");
            }
        }
        this.typeName = opts?.typeName ?? `Union[${types.map((t) => t.typeName).join(",")}]`;
        const minLens = [];
        const maxLens = [];
        for (const _type of types) {
            minLens.push(_type.minSize);
            maxLens.push(_type.maxSize);
        }
        this.minSize = 1 + Math.min(...minLens);
        this.maxSize = 1 + Math.max(...maxLens);
        this.maxSelector = this.types.length - 1;
    }
    static named(types, opts) {
        return new (named_1.namedClass(UnionType, opts.typeName))(types, opts);
    }
    defaultValue() {
        return {
            selector: 0,
            value: this.types[0].defaultValue(),
        };
    }
    getView(tree) {
        return this.tree_toValue(tree.rootNode);
    }
    getViewDU(node) {
        return this.tree_toValue(node);
    }
    cacheOfViewDU() {
        return;
    }
    commitView(view) {
        return this.value_toTree(view);
    }
    commitViewDU(view) {
        return this.value_toTree(view);
    }
    value_serializedSize(value) {
        return 1 + this.types[value.selector].value_serializedSize(value.value);
    }
    value_serializeToBytes(output, offset, value) {
        output.uint8Array[offset] = value.selector;
        return this.types[value.selector].value_serializeToBytes(output, offset + 1, value.value);
    }
    value_deserializeFromBytes(data, start, end) {
        const selector = data.uint8Array[start];
        if (selector > this.maxSelector) {
            throw Error(`Invalid selector ${selector}`);
        }
        return {
            selector,
            value: this.types[selector].value_deserializeFromBytes(data, start + 1, end),
        };
    }
    tree_serializedSize(node) {
        const selector = arrayBasic_1.getLengthFromRootNode(node);
        const valueNode = node.left;
        return 1 + this.types[selector].value_serializedSize(valueNode);
    }
    tree_serializeToBytes(output, offset, node) {
        const selector = arrayBasic_1.getLengthFromRootNode(node);
        const valueNode = node.left;
        output.uint8Array[offset] = selector;
        return this.types[selector].tree_serializeToBytes(output, offset + 1, valueNode);
    }
    tree_deserializeFromBytes(data, start, end) {
        const selector = data.uint8Array[start];
        if (selector > this.maxSelector) {
            throw Error(`Invalid selector ${selector}`);
        }
        const valueNode = this.types[selector].tree_deserializeFromBytes(data, start + 1, end);
        return arrayBasic_1.addLengthNode(valueNode, selector);
    }
    // Merkleization
    hashTreeRoot(value) {
        return merkleize_1.mixInLength(super.hashTreeRoot(value), value.selector);
    }
    getRoots(value) {
        const valueRoot = this.types[value.selector].hashTreeRoot(value.value);
        return [valueRoot];
    }
    // Proofs
    getPropertyGindex(prop) {
        switch (prop) {
            case "value":
                return VALUE_GINDEX;
            case "selector":
                return SELECTOR_GINDEX;
            default:
                throw new Error(`Invalid Union type property ${prop}`);
        }
    }
    getPropertyType() {
        // a Union has multiple types
        throw new Error("Not applicable for Union type");
    }
    getIndexProperty(index) {
        if (index === 0)
            return "value";
        if (index === 1)
            return "selector";
        throw Error("Union index of out bounds");
    }
    tree_getLeafGindices(rootGindex, rootNode) {
        if (!rootNode) {
            throw Error("rootNode required");
        }
        const gindices = [persistent_merkle_tree_1.concatGindices([rootGindex, SELECTOR_GINDEX])];
        const selector = arrayBasic_1.getLengthFromRootNode(rootNode);
        const type = this.types[selector];
        const extendedFieldGindex = persistent_merkle_tree_1.concatGindices([rootGindex, VALUE_GINDEX]);
        if (composite_1.isCompositeType(type)) {
            gindices.push(...type.tree_getLeafGindices(extendedFieldGindex, persistent_merkle_tree_1.getNode(rootNode, VALUE_GINDEX)));
        }
        else {
            gindices.push(extendedFieldGindex);
        }
        return gindices;
    }
    // JSON
    fromJson(json) {
        if (typeof json !== "object") {
            throw new Error("JSON must be of type object");
        }
        const union = json;
        if (typeof union.selector !== "number") {
            throw new Error("Invalid JSON Union selector must be number");
        }
        const type = this.types[union.selector];
        if (!type) {
            throw new Error("Invalid JSON Union selector out of range");
        }
        return {
            selector: union.selector,
            value: type.toJson(union.value),
        };
    }
    toJson(value) {
        return {
            selector: value.selector,
            value: this.types[value.selector].toJson(value.value),
        };
    }
    clone(value) {
        return {
            selector: value.selector,
            value: this.types[value.selector].clone(value.value),
        };
    }
    equals(a, b) {
        if (a.selector !== b.selector) {
            return false;
        }
        return this.types[a.selector].equals(a.value, b.value);
    }
}
exports.UnionType = UnionType;


/***/ }),

/***/ 7944:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorBasicType = void 0;
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const arrayBasic_1 = __webpack_require__(24558);
const arrayBasic_2 = __webpack_require__(98369);
const arrayBasic_3 = __webpack_require__(51254);
const array_1 = __webpack_require__(34854);
/**
 * Vector: Ordered fixed-length homogeneous collection, with N values
 *
 * Array of Basic type:
 * - Basic types are max 32 bytes long so multiple values may be packed in the same node.
 * - Basic types are never returned in a view wrapper, but their value representation
 */
class VectorBasicType extends array_1.ArrayType {
    constructor(elementType, length, opts) {
        super(elementType);
        this.elementType = elementType;
        this.length = length;
        this.isList = false;
        this.isViewMutable = true;
        if (!elementType.isBasic)
            throw Error("elementType must be basic");
        if (length === 0)
            throw Error("Vector length must be > 0");
        this.typeName = opts?.typeName ?? `Vector[${elementType.typeName}, ${length}]`;
        // TODO Check that itemsPerChunk is an integer
        this.itemsPerChunk = 32 / elementType.byteLength;
        this.maxChunkCount = Math.ceil((length * elementType.byteLength) / 32);
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        this.depth = this.chunkDepth;
        this.fixedSize = length * elementType.byteLength;
        this.minSize = this.fixedSize;
        this.maxSize = this.fixedSize;
        this.defaultLen = length;
    }
    static named(elementType, limit, opts) {
        return new (named_1.namedClass(VectorBasicType, opts.typeName))(elementType, limit, opts);
    }
    getView(tree) {
        return new arrayBasic_2.ArrayBasicTreeView(this, tree);
    }
    getViewDU(node, cache) {
        // cache type should be validated (if applicate) in the view
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new arrayBasic_3.ArrayBasicTreeViewDU(this, node, cache);
    }
    commitView(view) {
        return view.node;
    }
    commitViewDU(view) {
        view.commit();
        return view.node;
    }
    cacheOfViewDU(view) {
        return view.cache;
    }
    // Serialization + deserialization
    value_serializedSize() {
        return this.fixedSize;
    }
    value_serializeToBytes(output, offset, value) {
        return arrayBasic_1.value_serializeToBytesArrayBasic(this.elementType, this.length, output, offset, value);
    }
    value_deserializeFromBytes(data, start, end) {
        return arrayBasic_1.value_deserializeFromBytesArrayBasic(this.elementType, data, start, end, this);
    }
    tree_serializedSize() {
        return this.fixedSize;
    }
    tree_serializeToBytes(output, offset, node) {
        return arrayBasic_1.tree_serializeToBytesArrayBasic(this.elementType, this.length, this.depth, output, offset, node);
    }
    tree_deserializeFromBytes(data, start, end) {
        return arrayBasic_1.tree_deserializeFromBytesArrayBasic(this.elementType, this.depth, data, start, end, this);
    }
    // Helpers for TreeView
    tree_getLength() {
        return this.length;
    }
    tree_setLength() {
        // Vector's length is immutable, ignore this call
    }
    tree_getChunksNode(node) {
        return node;
    }
    tree_setChunksNode(rootNode, chunksNode) {
        return chunksNode;
    }
    // Merkleization
    getRoots(value) {
        const uint8Array = new Uint8Array(this.fixedSize);
        const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
        arrayBasic_1.value_serializeToBytesArrayBasic(this.elementType, this.length, { uint8Array, dataView }, 0, value);
        return merkleize_1.splitIntoRootChunks(uint8Array);
    }
}
exports.VectorBasicType = VectorBasicType;


/***/ }),

/***/ 83946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorCompositeType = void 0;
const merkleize_1 = __webpack_require__(72039);
const named_1 = __webpack_require__(35569);
const arrayComposite_1 = __webpack_require__(27066);
const arrayComposite_2 = __webpack_require__(22491);
const arrayComposite_3 = __webpack_require__(15461);
const array_1 = __webpack_require__(34854);
/**
 * Vector: Ordered fixed-length homogeneous collection, with N values
 *
 * Array of Composite type:
 * - Composite types always take at least one chunk
 * - Composite types are always returned as views
 */
class VectorCompositeType extends array_1.ArrayType {
    constructor(elementType, length, opts) {
        super(elementType);
        this.elementType = elementType;
        this.length = length;
        this.itemsPerChunk = 1;
        this.isList = false;
        this.isViewMutable = true;
        if (elementType.isBasic)
            throw Error("elementType must not be basic");
        if (length === 0)
            throw Error("Vector length must be > 0");
        this.typeName = opts?.typeName ?? `Vector[${elementType.typeName}, ${length}]`;
        this.maxChunkCount = length;
        this.chunkDepth = merkleize_1.maxChunksToDepth(this.maxChunkCount);
        this.depth = this.chunkDepth;
        this.fixedSize = elementType.fixedSize === null ? null : length * elementType.fixedSize;
        this.minSize = arrayComposite_1.minSizeArrayComposite(elementType, length);
        this.maxSize = arrayComposite_1.maxSizeArrayComposite(elementType, length);
        this.defaultLen = length;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static named(elementType, limit, opts) {
        return new (named_1.namedClass(VectorCompositeType, opts.typeName))(elementType, limit, opts);
    }
    getView(tree) {
        return new arrayComposite_2.ArrayCompositeTreeView(this, tree);
    }
    getViewDU(node, cache) {
        // cache type should be validated (if applicate) in the view
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new arrayComposite_3.ArrayCompositeTreeViewDU(this, node, cache);
    }
    commitView(view) {
        return view.node;
    }
    commitViewDU(view) {
        view.commit();
        return view.node;
    }
    cacheOfViewDU(view) {
        return view.cache;
    }
    // Serialization + deserialization
    value_serializedSize(value) {
        return arrayComposite_1.value_serializedSizeArrayComposite(this.elementType, this.length, value);
    }
    value_serializeToBytes(output, offset, value) {
        return arrayComposite_1.value_serializeToBytesArrayComposite(this.elementType, this.length, output, offset, value);
    }
    value_deserializeFromBytes(data, start, end) {
        return arrayComposite_1.value_deserializeFromBytesArrayComposite(this.elementType, data, start, end, this);
    }
    tree_serializedSize(node) {
        return arrayComposite_1.tree_serializedSizeArrayComposite(this.elementType, this.length, this.depth, node);
    }
    tree_serializeToBytes(output, offset, node) {
        return arrayComposite_1.tree_serializeToBytesArrayComposite(this.elementType, this.length, this.depth, node, output, offset);
    }
    tree_deserializeFromBytes(data, start, end) {
        return arrayComposite_1.tree_deserializeFromBytesArrayComposite(this.elementType, this.depth, data, start, end, this);
    }
    // Helpers for TreeView
    tree_getLength() {
        return this.length;
    }
    tree_setLength() {
        // Vector's length is immutable, ignore this call
    }
    tree_getChunksNode(node) {
        return node;
    }
    tree_setChunksNode(rootNode, chunksNode) {
        return chunksNode;
    }
    // Merkleization
    getRoots(value) {
        return arrayComposite_1.value_getRootsArrayComposite(this.elementType, this.length, value);
    }
}
exports.VectorCompositeType = VectorCompositeType;


/***/ }),

/***/ 6165:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.byteArrayEquals = exports.fromHexString = exports.toHexString = void 0;
// Caching this info costs about ~1000 bytes and speeds up toHexString() by x6
const hexByByte = new Array(256);
function toHexString(bytes) {
    let hex = "0x";
    for (const byte of bytes) {
        if (!hexByByte[byte]) {
            hexByByte[byte] = byte < 16 ? "0" + byte.toString(16) : byte.toString(16);
        }
        hex += hexByByte[byte];
    }
    return hex;
}
exports.toHexString = toHexString;
function fromHexString(hex) {
    if (typeof hex !== "string") {
        throw new Error(`hex argument type ${typeof hex} must be of type string`);
    }
    if (hex.startsWith("0x")) {
        hex = hex.slice(2);
    }
    if (hex.length % 2 !== 0) {
        throw new Error(`hex string length ${hex.length} must be multiple of 2`);
    }
    const byteLen = hex.length / 2;
    const bytes = new Uint8Array(byteLen);
    for (let i = 0; i < byteLen; i++) {
        const byte = parseInt(hex.slice(i * 2, (i + 1) * 2), 16);
        bytes[i] = byte;
    }
    return bytes;
}
exports.fromHexString = fromHexString;
function byteArrayEquals(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.byteArrayEquals = byteArrayEquals;


/***/ }),

/***/ 72039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nextPowerOf2 = exports.maxChunksToDepth = exports.bitLength = exports.mixInLength = exports.splitIntoRootChunks = exports.merkleize = exports.hash64 = void 0;
const as_sha256_1 = __webpack_require__(44902);
const zeros_1 = __webpack_require__(71116);
function hash64(bytes32A, bytes32B) {
    return as_sha256_1.digest2Bytes32(bytes32A, bytes32B);
}
exports.hash64 = hash64;
function merkleize(chunks, padFor) {
    const layerCount = bitLength(nextPowerOf2(padFor) - 1);
    if (chunks.length == 0) {
        return zeros_1.zeroHash(layerCount);
    }
    let chunkCount = chunks.length;
    // Instead of pushing on all padding zero chunks at the leaf level
    // we push on zero hash chunks at the highest possible level to avoid over-hashing
    for (let l = 0; l < layerCount; l++) {
        const padCount = chunkCount % 2;
        const paddedChunkCount = chunkCount + padCount;
        // if the chunks.length is odd
        // we need to push on the zero-hash of that level to merkleize that level
        for (let i = 0; i < padCount; i++) {
            chunks[chunkCount + i] = zeros_1.zeroHash(l);
        }
        for (let i = 0; i < paddedChunkCount; i += 2) {
            chunks[i / 2] = hash64(chunks[i], chunks[i + 1]);
        }
        chunkCount = paddedChunkCount / 2;
    }
    return chunks[0];
}
exports.merkleize = merkleize;
/**
 * Split a long Uint8Array into Uint8Array of exactly 32 bytes
 */
function splitIntoRootChunks(longChunk) {
    const chunkCount = Math.ceil(longChunk.length / 32);
    const chunks = new Array(chunkCount);
    for (let i = 0; i < chunkCount; i++) {
        const chunk = new Uint8Array(32);
        chunk.set(longChunk.slice(i * 32, (i + 1) * 32));
        chunks[i] = chunk;
    }
    return chunks;
}
exports.splitIntoRootChunks = splitIntoRootChunks;
/** @ignore */
function mixInLength(root, length) {
    const lengthBuf = Buffer.alloc(32);
    lengthBuf.writeUIntLE(length, 0, 6);
    return hash64(root, lengthBuf);
}
exports.mixInLength = mixInLength;
// x2 faster than bitLengthStr() which uses Number.toString(2)
function bitLength(i) {
    if (i === 0) {
        return 0;
    }
    return Math.floor(Math.log2(i)) + 1;
}
exports.bitLength = bitLength;
/**
 * Given maxChunkCount return the chunkDepth
 * ```
 * n: [0,1,2,3,4,5,6,7,8,9]
 * d: [0,0,1,2,2,3,3,3,3,4]
 * ```
 */
function maxChunksToDepth(n) {
    if (n === 0)
        return 0;
    return Math.ceil(Math.log2(n));
}
exports.maxChunksToDepth = maxChunksToDepth;
/** @ignore */
function nextPowerOf2(n) {
    return n <= 0 ? 1 : Math.pow(2, bitLength(n - 1));
}
exports.nextPowerOf2 = nextPowerOf2;


/***/ }),

/***/ 35569:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.namedClass = void 0;
function namedClass(superClass, className) {
    return new Function("superClass", `return class ${className} extends superClass {}`)(superClass);
}
exports.namedClass = namedClass;


/***/ }),

/***/ 89896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.treePostProcessFromProofNode = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
/** Duplicated partial declaration to break circular dependency with CompositeType */
function isCompositeType(type) {
    return !type.isBasic;
}
/**
 * Navigates and mutates nodes to post process a tree created with `Tree.createFromProof`.
 * Tree returns regular a tree with only BranchNode and LeafNode instances. However, SSZ features
 * non-standard nodes that make proofs for those types to be un-usable. This include:
 * - BranchNodeStruct: Must contain complete data `tree_fromProofNode` transforms a BranchNode and
 *   all of its data into a single BranchNodeStruct instance.
 *
 * @param bitstring Bitstring without the leading "1", since it's only used to compute horizontal indexes.
 */
function treePostProcessFromProofNode(node, type, bitstring = "", currentDepth = 0) {
    // Must run tree_fromProofNode on the first received node (i.e. Validator object)
    if (currentDepth === 0) {
        const nodePost = type.tree_fromProofNode(node);
        if (nodePost.done) {
            return nodePost.node;
        }
        else {
            node = nodePost.node;
        }
    }
    const atTypeDepth = type.depth === currentDepth;
    if (node.isLeaf()) {
        if (atTypeDepth) {
            const jsonPathProp = type.getIndexProperty(bitstringToIndex(bitstring));
            if (jsonPathProp === null) {
                // bitstring is out of bounds, witness node
                return node;
            }
            const childType = type.getPropertyType(jsonPathProp);
            // If this type merkleized fits in a single chunk then this LeafNode includes all data
            if (childType.maxChunkCount === 1 && isCompositeType(childType)) {
                return childType.tree_fromProofNode(node).node;
            }
            // Witness node
            else {
                return node;
            }
        }
        // LeafNode not at type depth is a witness or a length / selector nodes
        else {
            return node;
        }
    }
    else {
        if (atTypeDepth) {
            const jsonPathProp = type.getIndexProperty(bitstringToIndex(bitstring));
            if (jsonPathProp === null) {
                // bitstring is out of bounds, witness node
                return node;
            }
            const childType = type.getPropertyType(jsonPathProp);
            if (!isCompositeType(childType)) {
                throw Error("BranchNode does not map to CompositeType");
            }
            const nodePost = childType.tree_fromProofNode(node);
            // If tree_fromProofNode is the identity function, keep going, otherwise stop navigating
            if (nodePost.done) {
                return nodePost.node;
            }
            else {
                return treePostProcessFromProofNode(nodePost.node, childType);
            }
        }
        // BranchNode at not type depth, keep navigating
        else {
            const leftNode = treePostProcessFromProofNode(node.left, type, bitstring + "0", currentDepth + 1);
            const rightNode = treePostProcessFromProofNode(node.right, type, bitstring + "1", currentDepth + 1);
            if (leftNode === node.left && rightNode === node.right) {
                return node;
            }
            else {
                return new persistent_merkle_tree_1.BranchNode(leftNode, rightNode);
            }
        }
    }
}
exports.treePostProcessFromProofNode = treePostProcessFromProofNode;
/** Return the node horizontal index given a bitstring without the leading "1" */
function bitstringToIndex(bitstring) {
    if (bitstring === "")
        return 0;
    return parseInt(bitstring, 2);
}


/***/ }),

/***/ 71116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zeroHash = void 0;
const as_sha256_1 = __webpack_require__(44902);
// create array of "zero hashes", successively hashed zero chunks
const zeroHashes = [new Uint8Array(32)];
function zeroHash(depth) {
    if (depth >= zeroHashes.length) {
        for (let i = zeroHashes.length; i <= depth; i++) {
            zeroHashes[i] = as_sha256_1.digest2Bytes32(zeroHashes[i - 1], zeroHashes[i - 1]);
        }
    }
    return zeroHashes[depth];
}
exports.zeroHash = zeroHash;


/***/ }),

/***/ 21253:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUint8ByteToBitBooleanArray = exports.BitArray = void 0;
/** Globally cache this information. @see getUint8ByteToBitBooleanArray */
const uint8ByteToBitBooleanArrays = new Array(256);
/**
 * BitArray may be represented as an array of bits or compressed into an array of bytes.
 *
 * **Array of bits**:
 * Require 8.87 bytes per bit, so for 512 bits = 4500 bytes.
 * Are 'faster' to iterate with native tooling but are as fast as array of bytes with precomputed caches.
 *
 * **Array of bytes**:
 * Require an average cost of Uint8Array in JS = 220 bytes for 32 bytes, so for 512 bits = 220 bytes.
 * With precomputed boolean arrays per bytes value are as fast to iterate as an array of bits above.
 *
 * This BitArray implementation will represent data as a Uint8Array since it's very cheap to deserialize and can be as
 * fast to iterate as a native array of booleans, precomputing boolean arrays (total memory cost of 16000 bytes).
 */
class BitArray {
    constructor(
    /** Underlying BitArray Uint8Array data */
    uint8Array, 
    /** Immutable bitLen of this BitArray */
    bitLen) {
        this.uint8Array = uint8Array;
        this.bitLen = bitLen;
        if (uint8Array.length !== Math.ceil(bitLen / 8)) {
            throw Error("BitArray uint8Array length does not match bitLen");
        }
    }
    /** Returns a zero'ed BitArray of `bitLen` */
    static fromBitLen(bitLen) {
        return new BitArray(new Uint8Array(Math.ceil(bitLen / 8)), bitLen);
    }
    /** Returns a BitArray of `bitLen` with a single bit set to true at position `bitIndex` */
    static fromSingleBit(bitLen, bitIndex) {
        const bitArray = BitArray.fromBitLen(bitLen);
        bitArray.set(bitIndex, true);
        return bitArray;
    }
    /** Returns a BitArray from an array of booleans representation */
    static fromBoolArray(bitBoolArr) {
        const bitArray = BitArray.fromBitLen(bitBoolArr.length);
        for (let i = 0; i < bitBoolArr.length; i++) {
            if (bitBoolArr[i] === true) {
                bitArray.set(i, true);
            }
        }
        return bitArray;
    }
    clone() {
        // TODO: Benchmark if Uint8Array.slice(0) is the fastest way to copy data here
        // Buffer.prototype.slice does not copy memory, Enforce Uint8Array usage https://github.com/nodejs/node/issues/28087
        return new BitArray(Uint8Array.prototype.slice.call(this.uint8Array, 0), this.bitLen);
    }
    /**
     * Get bit value at index `bitIndex`
     */
    get(bitIndex) {
        const byteIdx = Math.floor(bitIndex / 8);
        const bitInBit = bitIndex % 8;
        const mask = 1 << bitInBit;
        return (this.uint8Array[byteIdx] & mask) === mask;
    }
    /**
     * Set bit value at index `bitIndex`
     */
    set(bitIndex, bit) {
        if (bitIndex >= this.bitLen) {
            throw Error(`BitArray set bitIndex ${bitIndex} beyond bitLen ${this.bitLen}`);
        }
        const byteIdx = Math.floor(bitIndex / 8);
        const bitInBit = bitIndex % 8;
        const mask = 1 << bitInBit;
        let byte = this.uint8Array[byteIdx];
        if (bit) {
            // For bit in byte, 1,0 OR 1 = 1
            // byte 100110
            // mask 010000
            // res  110110
            byte |= mask;
            this.uint8Array[byteIdx] = byte;
        }
        else {
            // For bit in byte, 1,0 OR 1 = 0
            if ((byte & mask) === mask) {
                // byte 110110
                // mask 010000
                // res  100110
                byte ^= mask;
                this.uint8Array[byteIdx] = byte;
            }
            else {
                // Ok, bit is already 0
            }
        }
    }
    /** Merge two BitArray bitfields with OR. Must have the same bitLen */
    mergeOrWith(bitArray2) {
        if (bitArray2.bitLen !== this.bitLen) {
            throw Error("Must merge BitArrays of same bitLen");
        }
        // Merge bitFields
        for (let i = 0; i < this.uint8Array.length; i++) {
            this.uint8Array[i] = this.uint8Array[i] | bitArray2.uint8Array[i];
        }
    }
    /**
     * Returns an array with the indexes which have a bit set to true
     */
    intersectValues(values) {
        const yes = [];
        if (values.length !== this.bitLen) {
            throw Error(`Must not intersect values of length ${values.length} != bitLen ${this.bitLen}`);
        }
        const fullByteLen = Math.floor(this.bitLen / 8);
        const remainderBits = this.bitLen % 8;
        // Iterate over each byte of bits
        const bytes = this.uint8Array;
        for (let iByte = 0; iByte < fullByteLen; iByte++) {
            // Get the precomputed boolean array for this byte
            const booleansInByte = getUint8ByteToBitBooleanArray(bytes[iByte]);
            // For each bit in the byte check participation and add to indexesSelected array
            for (let iBit = 0; iBit < 8; iBit++) {
                if (booleansInByte[iBit]) {
                    yes.push(values[iByte * 8 + iBit]);
                }
            }
        }
        if (remainderBits > 0) {
            // Get the precomputed boolean array for this byte
            const booleansInByte = getUint8ByteToBitBooleanArray(bytes[fullByteLen]);
            // For each bit in the byte check participation and add to indexesSelected array
            for (let iBit = 0; iBit < remainderBits; iBit++) {
                if (booleansInByte[iBit]) {
                    yes.push(values[fullByteLen * 8 + iBit]);
                }
            }
        }
        return yes;
    }
    /**
     * Returns the positions of all bits that are set to true
     */
    getTrueBitIndexes() {
        const indexes = [];
        // Iterate over each byte of bits
        const bytes = this.uint8Array;
        for (let iByte = 0, byteLen = bytes.length; iByte < byteLen; iByte++) {
            // Get the precomputed boolean array for this byte
            const booleansInByte = getUint8ByteToBitBooleanArray(bytes[iByte]);
            // For each bit in the byte check participation and add to indexesSelected array
            for (let iBit = 0; iBit < 8; iBit++) {
                if (booleansInByte[iBit]) {
                    indexes.push(iByte * 8 + iBit);
                }
            }
        }
        return indexes;
    }
    /**
     * Return the position of a single bit set. If no bit set or more than 1 bit set, throws.
     * @returns
     *  - number: if there's a single bit set, the number it the single bit set position
     *  - null: if ERROR_MORE_THAN_ONE_BIT_SET or ERROR_NO_BIT_SET
     * @throws
     *  - ERROR_MORE_THAN_ONE_BIT_SET
     *  - ERROR_NO_BIT_SET
     */
    getSingleTrueBit() {
        let index = null;
        const bytes = this.uint8Array;
        // Iterate over each byte of bits
        for (let iByte = 0, byteLen = bytes.length; iByte < byteLen; iByte++) {
            // If it's exactly zero, there won't be any indexes, continue early
            if (bytes[iByte] === 0) {
                continue;
            }
            // Get the precomputed boolean array for this byte
            const booleansInByte = getUint8ByteToBitBooleanArray(bytes[iByte]);
            // For each bit in the byte check participation and add to indexesSelected array
            for (let iBit = 0; iBit < 8; iBit++) {
                if (booleansInByte[iBit] === true) {
                    if (index !== null) {
                        // ERROR_MORE_THAN_ONE_BIT_SET
                        return null;
                    }
                    index = iByte * 8 + iBit;
                }
            }
        }
        if (index === null) {
            // ERROR_NO_BIT_SET
            return null;
        }
        else {
            return index;
        }
    }
    toBoolArray() {
        const bitBoolArr = new Array(this.bitLen);
        for (let i = 0; i < this.bitLen; i++) {
            bitBoolArr[i] = this.get(i);
        }
        return bitBoolArr;
    }
}
exports.BitArray = BitArray;
/**
 * Given a byte (0 -> 255), return a Array of boolean with length = 8, big endian.
 * Ex: 1 => [true false false false false false false false]
 *     5 => [true false true false false fase false false]
 */
function getUint8ByteToBitBooleanArray(byte) {
    if (!uint8ByteToBitBooleanArrays[byte]) {
        uint8ByteToBitBooleanArrays[byte] = computeUint8ByteToBitBooleanArray(byte);
    }
    return uint8ByteToBitBooleanArrays[byte];
}
exports.getUint8ByteToBitBooleanArray = getUint8ByteToBitBooleanArray;
/** @see getUint8ByteToBitBooleanArray */
function computeUint8ByteToBitBooleanArray(byte) {
    // this returns little endian
    const binaryStr = byte.toString(2);
    const binaryLength = binaryStr.length;
    const bits = new Array(8);
    for (let i = 0; i < 8; i++) {
        bits[i] =
            i < binaryLength
                ? //
                    binaryStr[binaryLength - i - 1] === "1"
                : false;
    }
    return bits;
}


/***/ }),

/***/ 52483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeView = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
/**
 * A Tree View is a wrapper around a type and an SSZ Tree that contains:
 * - data merkleized
 * - a hook to its parent Tree to propagate changes upwards
 *
 * **View**
 * - Best for simple usage where performance is NOT important
 * - Applies changes immediately
 * - Has reference to parent tree
 * - Does NOT have caches for fast get / set ops
 */
class TreeView {
    /** Serialize view to binary data */
    serialize() {
        const output = new Uint8Array(this.type.tree_serializedSize(this.node));
        const dataView = new DataView(output.buffer, output.byteOffset, output.byteLength);
        this.type.tree_serializeToBytes({ uint8Array: output, dataView }, 0, this.node);
        return output;
    }
    /**
     * Merkleize view and compute its hashTreeRoot.
     *
     * See spec for definition of hashTreeRoot:
     * https://github.com/ethereum/consensus-specs/blob/dev/ssz/simple-serialize.md#merkleization
     */
    hashTreeRoot() {
        return this.node.root;
    }
    /**
     * Create a Merkle multiproof on this view's data.
     * A `path` is an array of 'JSON' paths into the data
     * @example
     * ```ts
     * state.createProof([
     *   ["validators", 1234, "slashed"],
     *   ["genesisTime"]
     * ])
     * ```
     *
     * See spec for definition of merkle multiproofs:
     * https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.md#merkle-multiproofs
     */
    createProof(paths) {
        return this.type.tree_createProof(this.node, paths);
    }
    /**
     * Transform the view into a value, from the current node instance.
     * For ViewDU returns the value of the committed data, so call .commit() before if there are pending changes.
     */
    toValue() {
        return this.type.tree_toValue(this.node);
    }
    /** Return a new Tree View instance referencing the same internal `Node`. Drops its existing `Tree` hook if any */
    clone() {
        return this.type.getView(new persistent_merkle_tree_1.Tree(this.node));
    }
}
exports.TreeView = TreeView;


/***/ }),

/***/ 98369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayBasicTreeView = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const abstract_1 = __webpack_require__(52483);
class ArrayBasicTreeView extends abstract_1.TreeView {
    constructor(type, tree) {
        super();
        this.type = type;
        this.tree = tree;
    }
    /**
     * Number of elements in the array. Equal to the Uint32 value of the Tree's length node
     */
    get length() {
        return this.type.tree_getLength(this.tree.rootNode);
    }
    get node() {
        return this.tree.rootNode;
    }
    /**
     * Get element at `index`. Returns the Basic element type value directly
     */
    get(index) {
        // First walk through the tree to get the root node for that index
        const chunkIndex = Math.floor(index / this.type.itemsPerChunk);
        const leafNode = this.tree.getNodeAtDepth(this.type.depth, chunkIndex);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.type.elementType.tree_getFromPackedNode(leafNode, index);
    }
    /**
     * Set Basic element type `value` at `index`
     */
    set(index, value) {
        const length = this.length;
        if (index >= length) {
            throw Error(`Error setting index over length ${index} > ${length}`);
        }
        const chunkIndex = Math.floor(index / this.type.itemsPerChunk);
        const leafNodePrev = this.tree.getNodeAtDepth(this.type.depth, chunkIndex);
        // Create a new node to preserve immutability
        const leafNode = leafNodePrev.clone();
        this.type.elementType.tree_setToPackedNode(leafNode, index, value);
        // Commit immediately
        this.tree.setNodeAtDepth(this.type.depth, chunkIndex, leafNode);
    }
    /**
     * Get all values of this array as Basic element type values, from index zero to `this.length - 1`
     */
    getAll() {
        const length = this.length;
        const chunksNode = this.type.tree_getChunksNode(this.node);
        const chunkCount = Math.ceil(length / this.type.itemsPerChunk);
        const leafNodes = persistent_merkle_tree_1.getNodesAtDepth(chunksNode, this.type.chunkDepth, 0, chunkCount);
        const values = new Array(length);
        const itemsPerChunk = this.type.itemsPerChunk; // Prevent many access in for loop below
        const lenFullNodes = Math.floor(length / itemsPerChunk);
        const remainder = length % itemsPerChunk;
        for (let n = 0; n < lenFullNodes; n++) {
            const leafNode = leafNodes[n];
            // TODO: Implement add a fast bulk packed element reader in the elementType
            // ```
            // abstract getValuesFromPackedNode(leafNode: LeafNode, output: V[], indexOffset: number): void;
            // ```
            // if performance here is a problem
            for (let i = 0; i < itemsPerChunk; i++) {
                values[n * itemsPerChunk + i] = this.type.elementType.tree_getFromPackedNode(leafNode, i);
            }
        }
        if (remainder > 0) {
            const leafNode = leafNodes[lenFullNodes];
            for (let i = 0; i < remainder; i++) {
                values[lenFullNodes * itemsPerChunk + i] = this.type.elementType.tree_getFromPackedNode(leafNode, i);
            }
        }
        return values;
    }
}
exports.ArrayBasicTreeView = ArrayBasicTreeView;


/***/ }),

/***/ 22491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayCompositeTreeView = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const abstract_1 = __webpack_require__(52483);
class ArrayCompositeTreeView extends abstract_1.TreeView {
    constructor(type, tree) {
        super();
        this.type = type;
        this.tree = tree;
    }
    /**
     * Number of elements in the array. Equal to the Uint32 value of the Tree's length node
     */
    get length() {
        return this.type.tree_getLength(this.tree.rootNode);
    }
    /**
     * Returns the View's Tree rootNode
     */
    get node() {
        return this.tree.rootNode;
    }
    /**
     * Get element at `index`. Returns a view of the Composite element type
     */
    get(index) {
        // TODO: Optimize without bitstring
        const gindex = persistent_merkle_tree_1.toGindexBitstring(this.type.depth, index);
        const subtree = this.tree.getSubtree(gindex);
        return this.type.elementType.getView(subtree);
    }
    /**
     * Get element at `index`. Returns a view of the Composite element type.
     * DOES NOT PROPAGATE CHANGES: use only for reads and to skip parent references.
     */
    getReadonly(index) {
        // TODO: Optimize without bitstring
        const gindex = persistent_merkle_tree_1.toGindexBitstring(this.type.depth, index);
        // tree.getSubtree but without the hook
        const subtree = new persistent_merkle_tree_1.Tree(this.tree.getNode(gindex));
        return this.type.elementType.getView(subtree);
    }
    /**
     * Set Composite element type `view` at `index`
     */
    set(index, view) {
        const length = this.length;
        if (index >= length) {
            throw Error(`Error setting index over length ${index} > ${length}`);
        }
        const node = this.type.elementType.commitView(view);
        this.tree.setNodeAtDepth(this.type.depth, index, node);
    }
    /**
     * Returns an array of views of all elements in the array, from index zero to `this.length - 1`.
     * The returned views don't have a parent hook to this View's Tree, so changes in the returned views won't be
     * propagated upwards. To get linked element Views use `this.get()`
     */
    getAllReadonly() {
        const length = this.length;
        const chunksNode = this.type.tree_getChunksNode(this.node);
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(chunksNode, this.type.chunkDepth, 0, length);
        const views = new Array(length);
        for (let i = 0; i < length; i++) {
            // TODO: Optimize
            views[i] = this.type.elementType.getView(new persistent_merkle_tree_1.Tree(nodes[i]));
        }
        return views;
    }
    /**
     * Returns an array of values of all elements in the array, from index zero to `this.length - 1`.
     * The returned values are not Views so any changes won't be propagated upwards.
     * To get linked element Views use `this.get()`
     */
    getAllReadonlyValues() {
        const length = this.length;
        const chunksNode = this.type.tree_getChunksNode(this.node);
        const nodes = persistent_merkle_tree_1.getNodesAtDepth(chunksNode, this.type.chunkDepth, 0, length);
        const values = new Array(length);
        for (let i = 0; i < length; i++) {
            values[i] = this.type.elementType.tree_toValue(nodes[i]);
        }
        return values;
    }
}
exports.ArrayCompositeTreeView = ArrayCompositeTreeView;


/***/ }),

/***/ 44710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitArrayTreeView = void 0;
const abstract_1 = __webpack_require__(52483);
/**
 * Thin wrapper around BitArray to upstream changes to `tree` on every `this.set()`
 */
class BitArrayTreeView extends abstract_1.TreeView {
    constructor(type, tree) {
        super();
        this.type = type;
        this.tree = tree;
        this.bitArray = type.tree_toValue(tree.rootNode);
    }
    get node() {
        return this.tree.rootNode;
    }
    // Wrapped API from BitArray
    /** @see BitArray.uint8Array */
    get uint8Array() {
        return this.bitArray.uint8Array;
    }
    /** @see BitArray.bitLen */
    get bitLen() {
        return this.bitArray.bitLen;
    }
    /** @see BitArray.get */
    get(bitIndex) {
        return this.bitArray.get(bitIndex);
    }
    /** @see BitArray.set */
    set(bitIndex, bit) {
        this.bitArray.set(bitIndex, bit);
        // Upstream changes
        this.tree.rootNode = this.type.value_toTree(this.bitArray);
    }
    /** @see BitArray.mergeOrWith */
    mergeOrWith(bitArray2) {
        this.bitArray.mergeOrWith(bitArray2);
    }
    /** @see BitArray.intersectValues */
    intersectValues(values) {
        return this.bitArray.intersectValues(values);
    }
    /** @see BitArray.getTrueBitIndexes */
    getTrueBitIndexes() {
        return this.bitArray.getTrueBitIndexes();
    }
    /** @see BitArray.getSingleTrueBit */
    getSingleTrueBit() {
        return this.bitArray.getSingleTrueBit();
    }
    /** @see BitArray.toBoolArray */
    toBoolArray() {
        return this.bitArray.toBoolArray();
    }
}
exports.BitArrayTreeView = BitArrayTreeView;


/***/ }),

/***/ 69397:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContainerTreeViewClass = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const basic_1 = __webpack_require__(52390);
const composite_1 = __webpack_require__(90750);
const abstract_1 = __webpack_require__(52483);
/**
 * Intented usage:
 *
 * - Get initial BeaconState from disk.
 * - Before applying next block, switch to mutable
 * - Get some field, create a view in mutable mode
 * - Do modifications of the state in the state transition function
 * - When done, commit and apply new root node once to og BeaconState
 * - However, keep all the caches and transfer them to the new BeaconState
 *
 * Questions:
 * - Can the child views created in mutable mode switch to not mutable? If so, it seems that it needs to recursively
 *   iterate the entire data structure and views
 *
 */
class ContainerTreeView extends abstract_1.TreeView {
    constructor(type, tree) {
        super();
        this.type = type;
        this.tree = tree;
    }
    get node() {
        return this.tree.rootNode;
    }
}
function getContainerTreeViewClass(type) {
    class CustomContainerTreeView extends ContainerTreeView {
    }
    // Dynamically define prototype methods
    for (let index = 0; index < type.fieldsEntries.length; index++) {
        const { fieldName, fieldType } = type.fieldsEntries[index];
        // If the field type is basic, the value to get and set will be the actual 'struct' value (i.e. a JS number).
        // The view must use the tree_getFromNode() and tree_setToNode() methods to persist the struct data to the node,
        // and use the cached views array to store the new node.
        if (basic_1.isBasicType(fieldType)) {
            Object.defineProperty(CustomContainerTreeView.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // TODO: Review the memory cost of this closures
                get: function () {
                    const leafNode = persistent_merkle_tree_1.getNodeAtDepth(this.node, this.type.depth, index);
                    return fieldType.tree_getFromNode(leafNode);
                },
                set: function (value) {
                    const leafNodePrev = persistent_merkle_tree_1.getNodeAtDepth(this.node, this.type.depth, index);
                    const leafNode = leafNodePrev.clone();
                    fieldType.tree_setToNode(leafNode, value);
                    this.tree.setNodeAtDepth(this.type.depth, index, leafNode);
                },
            });
        }
        // If the field type is composite, the value to get and set will be another TreeView. The parent TreeView must
        // cache the view itself to retain the caches of the child view. To set a value the view must return a node to
        // set it to the parent tree in the field gindex.
        else if (composite_1.isCompositeType(fieldType)) {
            Object.defineProperty(CustomContainerTreeView.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // Returns TreeView of fieldName
                get: function () {
                    const gindex = persistent_merkle_tree_1.toGindexBitstring(this.type.depth, index);
                    return fieldType.getView(this.tree.getSubtree(gindex));
                },
                // Expects TreeView of fieldName
                set: function (value) {
                    const node = fieldType.commitView(value);
                    this.tree.setNodeAtDepth(this.type.depth, index, node);
                },
            });
        }
        // Should never happen
        else {
            /* istanbul ignore next - unreachable code */
            throw Error(`Unknown fieldType ${fieldType.typeName} for fieldName ${fieldName}`);
        }
    }
    // Change class name
    Object.defineProperty(CustomContainerTreeView, "name", { value: type.typeName, writable: false });
    return CustomContainerTreeView;
}
exports.getContainerTreeViewClass = getContainerTreeViewClass;


/***/ }),

/***/ 87626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContainerTreeViewClass = void 0;
const composite_1 = __webpack_require__(90750);
const branchNodeStruct_1 = __webpack_require__(38289);
const abstract_1 = __webpack_require__(52483);
/* eslint-disable @typescript-eslint/member-ordering */
/**
 * Intented usage:
 *
 * - Get initial BeaconState from disk.
 * - Before applying next block, switch to mutable
 * - Get some field, create a view in mutable mode
 * - Do modifications of the state in the state transition function
 * - When done, commit and apply new root node once to og BeaconState
 * - However, keep all the caches and transfer them to the new BeaconState
 *
 * Questions:
 * - Can the child views created in mutable mode switch to not mutable? If so, it seems that it needs to recursively
 *   iterate the entire data structure and views
 *
 */
class ContainerTreeView extends abstract_1.TreeView {
    constructor(type, tree) {
        super();
        this.type = type;
        this.tree = tree;
    }
    get node() {
        return this.tree.rootNode;
    }
}
function getContainerTreeViewClass(type) {
    class CustomContainerTreeView extends ContainerTreeView {
    }
    // Dynamically define prototype methods
    for (let index = 0; index < type.fieldsEntries.length; index++) {
        const { fieldName, fieldType } = type.fieldsEntries[index];
        // If the field type is basic, the value to get and set will be the actual 'struct' value (i.e. a JS number).
        // The view must use the tree_getFromNode() and tree_setToNode() methods to persist the struct data to the node,
        // and use the cached views array to store the new node.
        if (fieldType.isBasic) {
            Object.defineProperty(CustomContainerTreeView.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // TODO: Review the memory cost of this closures
                get: function () {
                    return this.tree.rootNode.value[fieldName];
                },
                set: function (value) {
                    const node = this.tree.rootNode;
                    const newNodeValue = this.type.clone(node.value);
                    // TODO: Should this check for valid field name? Benchmark the cost
                    newNodeValue[fieldName] = value;
                    this.tree.rootNode = new branchNodeStruct_1.BranchNodeStruct(node["valueToNode"], newNodeValue);
                },
            });
        }
        // If the field type is composite, the value to get and set will be another TreeView. The parent TreeView must
        // cache the view itself to retain the caches of the child view. To set a value the view must return a node to
        // set it to the parent tree in the field gindex.
        else if (composite_1.isCompositeType(fieldType)) {
            Object.defineProperty(CustomContainerTreeView.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // Returns TreeView of fieldName
                get: function () {
                    const { value } = this.tree.rootNode;
                    return fieldType.toView(value[fieldName]);
                },
                // Expects TreeView of fieldName
                set: function (view) {
                    const node = this.tree.rootNode;
                    const newNodeValue = this.type.clone(node.value);
                    // TODO: Should this check for valid field name? Benchmark the cost
                    newNodeValue[fieldName] = fieldType.toValueFromView(view);
                    this.tree.rootNode = new branchNodeStruct_1.BranchNodeStruct(node["valueToNode"], newNodeValue);
                },
            });
        }
        // Should never happen
        else {
            /* istanbul ignore next - unreachable code */
            throw Error(`Unknown fieldType ${fieldType.typeName} for fieldName ${fieldName}`);
        }
    }
    // Change class name
    Object.defineProperty(CustomContainerTreeView, "name", { value: type.typeName, writable: false });
    return CustomContainerTreeView;
}
exports.getContainerTreeViewClass = getContainerTreeViewClass;


/***/ }),

/***/ 35965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListBasicTreeView = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const arrayBasic_1 = __webpack_require__(98369);
class ListBasicTreeView extends arrayBasic_1.ArrayBasicTreeView {
    constructor(type, tree) {
        super(type, tree);
        this.type = type;
        this.tree = tree;
    }
    /**
     * Adds one value element at the end of the array and adds 1 to the current Tree length.
     */
    push(value) {
        const length = this.length;
        if (length >= this.type.limit) {
            throw Error("Error pushing over limit");
        }
        this.type.tree_setLength(this.tree, length + 1);
        // If in new node..
        if (length % this.type.itemsPerChunk === 0) {
            // TODO: Optimize: This `inNewNode` could be ommitted but it would cause a full navigation in .set()
            // Benchmark the cost of that navigation vs the extra math here
            // TODO: Optimize: prevent double initialization
            const leafNode = persistent_merkle_tree_1.LeafNode.fromZero();
            this.type.elementType.tree_setToPackedNode(leafNode, length, value);
            // Commit immediately
            const chunkIndex = Math.floor(length / this.type.itemsPerChunk);
            this.tree.setNodeAtDepth(this.type.depth, chunkIndex, leafNode);
        }
        else {
            // Re-use .set() since no new node is added
            this.set(length, value);
        }
    }
}
exports.ListBasicTreeView = ListBasicTreeView;


/***/ }),

/***/ 33628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListCompositeTreeView = void 0;
const arrayComposite_1 = __webpack_require__(22491);
class ListCompositeTreeView extends arrayComposite_1.ArrayCompositeTreeView {
    constructor(type, tree) {
        super(type, tree);
        this.type = type;
        this.tree = tree;
    }
    /**
     * Adds one view element at the end of the array and adds 1 to the current Tree length.
     */
    push(view) {
        const length = this.length;
        if (length >= this.type.limit) {
            throw Error("Error pushing over limit");
        }
        this.type.tree_setLength(this.tree, length + 1);
        // No need for pre-initialization like in ListBasic.push since ArrayCompositeTreeView.set() doesn't do a get node
        this.set(length, view);
    }
}
exports.ListCompositeTreeView = ListCompositeTreeView;


/***/ }),

/***/ 81154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeViewDU = void 0;
const abstract_1 = __webpack_require__(52483);
/* eslint-disable @typescript-eslint/member-ordering  */
/**
 * A Deferred Update Tree View (`ViewDU`) is a wrapper around a type and
 * a SSZ Node that contains:
 * - data merkleized
 * - some arbitrary caches to speed up data manipulation required by the type
 *
 * **ViewDU**
 * - Best for complex usage where performance is important
 * - Defers changes to when commit is called
 * - Does NOT have a reference to the parent ViewDU
 * - Has caches for fast get / set ops
 */
class TreeViewDU extends abstract_1.TreeView {
    /**
     * Merkleize view and compute its hashTreeRoot.
     * Commits any pending changes before computing the root.
     *
     * See spec for definition of hashTreeRoot:
     * https://github.com/ethereum/consensus-specs/blob/dev/ssz/simple-serialize.md#merkleization
     */
    hashTreeRoot() {
        this.commit();
        return super.hashTreeRoot();
    }
    /**
     * Serialize view to binary data.
     * Commits any pending changes before computing the root.
     */
    serialize() {
        this.commit();
        return super.serialize();
    }
    /**
     * Return a new ViewDU instance referencing the same internal `Node`.
     *
     * By default it will transfer the cache of this ViewDU to the new cloned instance. Set `dontTransferCache` to true
     * to NOT transfer the cache to the cloned instance.
     */
    clone(dontTransferCache) {
        if (dontTransferCache) {
            return this.type.getViewDU(this.node);
        }
        else {
            const cache = this.cache;
            this.clearCache();
            return this.type.getViewDU(this.node, cache);
        }
    }
}
exports.TreeViewDU = TreeViewDU;


/***/ }),

/***/ 51254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayBasicTreeViewDU = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const abstract_1 = __webpack_require__(81154);
class ArrayBasicTreeViewDU extends abstract_1.TreeViewDU {
    constructor(type, _rootNode, cache) {
        super();
        this.type = type;
        this._rootNode = _rootNode;
        this.nodesChanged = new Set();
        this.dirtyLength = false;
        if (cache) {
            this.nodes = cache.nodes;
            this._length = cache.length;
            this.nodesPopulated = cache.nodesPopulated;
        }
        else {
            this.nodes = [];
            this._length = this.type.tree_getLength(_rootNode);
            this.nodesPopulated = false;
        }
    }
    /**
     * Number of elements in the array. Equal to un-commited length of the array
     */
    get length() {
        return this._length;
    }
    get node() {
        return this._rootNode;
    }
    get cache() {
        return {
            nodes: this.nodes,
            length: this._length,
            nodesPopulated: this.nodesPopulated,
        };
    }
    /**
     * Get element at `index`. Returns the Basic element type value directly
     */
    get(index) {
        // First walk through the tree to get the root node for that index
        const chunkIndex = Math.floor(index / this.type.itemsPerChunk);
        let node = this.nodes[chunkIndex];
        if (node === undefined) {
            node = persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, chunkIndex);
            this.nodes[chunkIndex] = node;
        }
        return this.type.elementType.tree_getFromPackedNode(node, index);
    }
    /**
     * Set Basic element type `value` at `index`
     */
    set(index, value) {
        if (index >= this._length) {
            throw Error(`Error setting index over length ${index} > ${this._length}`);
        }
        const chunkIndex = Math.floor(index / this.type.itemsPerChunk);
        // Create new node if current leafNode is not dirty
        let nodeChanged;
        if (this.nodesChanged.has(chunkIndex)) {
            // TODO: This assumes that node has already been populated
            nodeChanged = this.nodes[chunkIndex];
        }
        else {
            const nodePrev = (this.nodes[chunkIndex] ??
                persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, chunkIndex));
            nodeChanged = nodePrev.clone();
            // Store the changed node in the nodes cache
            this.nodes[chunkIndex] = nodeChanged;
            this.nodesChanged.add(chunkIndex);
        }
        this.type.elementType.tree_setToPackedNode(nodeChanged, index, value);
    }
    /**
     * Get all values of this array as Basic element type values, from index zero to `this.length - 1`
     */
    getAll() {
        if (!this.nodesPopulated) {
            const nodesPrev = this.nodes;
            const chunksNode = this.type.tree_getChunksNode(this.node);
            const chunkCount = Math.ceil(this._length / this.type.itemsPerChunk);
            this.nodes = persistent_merkle_tree_1.getNodesAtDepth(chunksNode, this.type.chunkDepth, 0, chunkCount);
            // Re-apply changed nodes
            for (const index of this.nodesChanged) {
                this.nodes[index] = nodesPrev[index];
            }
            this.nodesPopulated = true;
        }
        const values = new Array(this._length);
        const itemsPerChunk = this.type.itemsPerChunk; // Prevent many access in for loop below
        const lenFullNodes = Math.floor(this._length / itemsPerChunk);
        const remainder = this._length % itemsPerChunk;
        // TODO Optimize: caching the variables used in the loop above it
        for (let n = 0; n < lenFullNodes; n++) {
            const leafNode = this.nodes[n];
            // TODO: Implement add a fast bulk packed element reader in the elementType
            // ```
            // abstract getValuesFromPackedNode(leafNode: LeafNode, output: V[], indexOffset: number): void;
            // ```
            // if performance here is a problem
            for (let i = 0; i < itemsPerChunk; i++) {
                values[n * itemsPerChunk + i] = this.type.elementType.tree_getFromPackedNode(leafNode, i);
            }
        }
        if (remainder > 0) {
            const leafNode = this.nodes[lenFullNodes];
            for (let i = 0; i < remainder; i++) {
                values[lenFullNodes * itemsPerChunk + i] = this.type.elementType.tree_getFromPackedNode(leafNode, i);
            }
        }
        return values;
    }
    commit() {
        if (this.nodesChanged.size === 0) {
            return;
        }
        // Numerical sort ascending
        const indexes = Array.from(this.nodesChanged.keys()).sort((a, b) => a - b);
        const nodes = new Array(indexes.length);
        for (let i = 0; i < indexes.length; i++) {
            nodes[i] = this.nodes[indexes[i]];
        }
        const chunksNode = this.type.tree_getChunksNode(this._rootNode);
        // TODO: Ensure fast setNodesAtDepth() method is correct
        const newChunksNode = persistent_merkle_tree_1.setNodesAtDepth(chunksNode, this.type.chunkDepth, indexes, nodes);
        this._rootNode = this.type.tree_setChunksNode(this._rootNode, newChunksNode, this.dirtyLength ? this._length : undefined);
        this.nodesChanged.clear();
        this.dirtyLength = false;
    }
    clearCache() {
        this.nodes = [];
        this.nodesPopulated = false;
        // Must clear nodesChanged, otherwise a subsequent commit call will break, because it assumes a node is there
        this.nodesChanged.clear();
        // Reset cached length only if it has been mutated
        if (this.dirtyLength) {
            this._length = this.type.tree_getLength(this._rootNode);
            this.dirtyLength = false;
        }
    }
}
exports.ArrayBasicTreeViewDU = ArrayBasicTreeViewDU;


/***/ }),

/***/ 15461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayCompositeTreeViewDU = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const abstract_1 = __webpack_require__(81154);
class ArrayCompositeTreeViewDU extends abstract_1.TreeViewDU {
    constructor(type, _rootNode, cache) {
        super();
        this.type = type;
        this._rootNode = _rootNode;
        this.viewsChanged = new Map();
        // TODO: Consider these properties are not accessible in the cache object persisted in the parent's cache.
        // nodes, caches, _length, and nodesPopulated are mutated. Consider having them in a _cache object such that
        // mutations affect the cache already found in the parent object
        this.dirtyLength = false;
        if (cache) {
            this.nodes = cache.nodes;
            this.caches = cache.caches;
            this._length = cache.length;
            this.nodesPopulated = cache.nodesPopulated;
        }
        else {
            this.nodes = [];
            this.caches = [];
            this._length = this.type.tree_getLength(_rootNode);
            // If there are exactly 0 nodes, nodesPopulated = true because 0 / 0 are in the nodes array
            this.nodesPopulated = this._length === 0;
        }
    }
    /**
     * Number of elements in the array. Equal to un-commited length of the array
     */
    get length() {
        return this._length;
    }
    get node() {
        return this._rootNode;
    }
    get cache() {
        return {
            nodes: this.nodes,
            caches: this.caches,
            length: this._length,
            nodesPopulated: this.nodesPopulated,
        };
    }
    /**
     * Get element at `index`. Returns a view of the Composite element type.
     *
     * NOTE: Assumes that any view created here will change and will call .commit() on it.
     * .get() should be used only for cases when something may mutate. To get all items without
     * triggering a .commit() in all them use .getAllReadOnly().
     */
    get(index) {
        const viewChanged = this.viewsChanged.get(index);
        if (viewChanged) {
            return viewChanged;
        }
        let node = this.nodes[index];
        if (node === undefined) {
            node = persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, index);
            this.nodes[index] = node;
        }
        // Keep a reference to the new view to call .commit on it latter, only if mutable
        const view = this.type.elementType.getViewDU(node, this.caches[index]);
        if (this.type.elementType.isViewMutable) {
            this.viewsChanged.set(index, view);
        }
        // No need to persist the child's view cache since a second get returns this view instance.
        // The cache is only persisted on commit where the viewsChanged map is dropped.
        return view;
    }
    /**
     * Get element at `index`. Returns a view of the Composite element type.
     * DOES NOT PROPAGATE CHANGES: use only for reads and to skip parent references.
     */
    getReadonly(index) {
        const viewChanged = this.viewsChanged.get(index);
        if (viewChanged) {
            return viewChanged;
        }
        let node = this.nodes[index];
        if (node === undefined) {
            node = persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, index);
            this.nodes[index] = node;
        }
        return this.type.elementType.getViewDU(node, this.caches[index]);
    }
    // Did not implemented
    // `getReadonlyValue(index: number): ValueOf<ElementType>`
    // because it can break in unexpected ways if there are pending changes in this.viewsChanged.
    // This function could first check if `this.viewsChanged` has a view for `index` and commit it,
    // but that would be pretty slow, and the same result can be achieved with
    // `this.getReadonly(index).toValue()`
    /**
     * Set Composite element type `view` at `index`
     */
    set(index, view) {
        if (index >= this._length) {
            throw Error(`Error setting index over length ${index} > ${this._length}`);
        }
        // When setting a view:
        // - Not necessary to commit node
        // - Not necessary to persist cache
        // Just keeping a reference to the view in this.viewsChanged ensures consistency
        this.viewsChanged.set(index, view);
    }
    /**
     * WARNING: Returns all commited changes, if there are any pending changes commit them beforehand
     */
    getAllReadonly() {
        this.populateAllNodes();
        const views = new Array(this._length);
        for (let i = 0; i < this._length; i++) {
            views[i] = this.type.elementType.getViewDU(this.nodes[i], this.caches[i]);
        }
        return views;
    }
    /**
     * WARNING: Returns all commited changes, if there are any pending changes commit them beforehand
     */
    getAllReadonlyValues() {
        this.populateAllNodes();
        const values = new Array(this._length);
        for (let i = 0; i < this._length; i++) {
            values[i] = this.type.elementType.tree_toValue(this.nodes[i]);
        }
        return values;
    }
    commit() {
        if (this.viewsChanged.size === 0) {
            return;
        }
        const nodesChanged = [];
        for (const [index, view] of this.viewsChanged) {
            const node = this.type.elementType.commitViewDU(view);
            // Set new node in nodes array to ensure data represented in the tree and fast nodes access is equal
            this.nodes[index] = node;
            nodesChanged.push({ index, node });
            // Cache the view's caches to preserve it's data after 'this.viewsChanged.clear()'
            const cache = this.type.elementType.cacheOfViewDU(view);
            if (cache)
                this.caches[index] = cache;
        }
        // TODO: Optimize to loop only once, Numerical sort ascending
        const nodesChangedSorted = nodesChanged.sort((a, b) => a.index - b.index);
        const indexes = nodesChangedSorted.map((entry) => entry.index);
        const nodes = nodesChangedSorted.map((entry) => entry.node);
        const chunksNode = this.type.tree_getChunksNode(this._rootNode);
        // TODO: Ensure fast setNodesAtDepth() method is correct
        const newChunksNode = persistent_merkle_tree_1.setNodesAtDepth(chunksNode, this.type.chunkDepth, indexes, nodes);
        this._rootNode = this.type.tree_setChunksNode(this._rootNode, newChunksNode, this.dirtyLength ? this._length : undefined);
        this.viewsChanged.clear();
        this.dirtyLength = false;
    }
    clearCache() {
        this.nodes = [];
        this.caches = [];
        this.nodesPopulated = false;
        // It's not necessary to clear this.viewsChanged since they have no effect on the cache.
        // However preserving _SOME_ caches results in a very unpredictable experience.
        this.viewsChanged.clear();
        // Reset cached length only if it has been mutated
        if (this.dirtyLength) {
            this._length = this.type.tree_getLength(this._rootNode);
            this.dirtyLength = false;
        }
    }
    populateAllNodes() {
        // If there's uncommited changes it may break.
        // this.length can be increased but this._rootNode doesn't have that item
        if (this.viewsChanged.size > 0) {
            throw Error("Must commit changes before reading all nodes");
        }
        if (!this.nodesPopulated) {
            this.nodes = persistent_merkle_tree_1.getNodesAtDepth(this._rootNode, this.type.depth, 0, this.length);
            this.nodesPopulated = true;
        }
    }
}
exports.ArrayCompositeTreeViewDU = ArrayCompositeTreeViewDU;


/***/ }),

/***/ 17809:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitArrayTreeViewDU = void 0;
const abstract_1 = __webpack_require__(81154);
/**
 * Thin wrapper around BitArray to upstream changes after `this.commit()`
 */
class BitArrayTreeViewDU extends abstract_1.TreeViewDU {
    constructor(type, _rootNode) {
        super();
        this.type = type;
        this._rootNode = _rootNode;
        /** Cached BitArray instance computed only on demand */
        this._bitArray = null;
    }
    get node() {
        return this._rootNode;
    }
    get cache() {
        return;
    }
    commit() {
        if (this._bitArray !== null) {
            this._rootNode = this.type.value_toTree(this._bitArray);
        }
    }
    // Wrapped API from BitArray
    /** @see BitArray.uint8Array */
    get uint8Array() {
        return this.bitArray.uint8Array;
    }
    /** @see BitArray.bitLen */
    get bitLen() {
        return this.bitArray.bitLen;
    }
    /** @see BitArray.get */
    get(bitIndex) {
        return this.bitArray.get(bitIndex);
    }
    /** @see BitArray.set */
    set(bitIndex, bit) {
        this.bitArray.set(bitIndex, bit);
    }
    /** @see BitArray.mergeOrWith */
    mergeOrWith(bitArray2) {
        this.bitArray.mergeOrWith(bitArray2);
    }
    /** @see BitArray.intersectValues */
    intersectValues(values) {
        return this.bitArray.intersectValues(values);
    }
    /** @see BitArray.getTrueBitIndexes */
    getTrueBitIndexes() {
        return this.bitArray.getTrueBitIndexes();
    }
    /** @see BitArray.getSingleTrueBit */
    getSingleTrueBit() {
        return this.bitArray.getSingleTrueBit();
    }
    /** @see BitArray.toBoolArray */
    toBoolArray() {
        return this.bitArray.toBoolArray();
    }
    /** Lazily computed bitArray instance */
    get bitArray() {
        if (this._bitArray === null) {
            this._bitArray = this.type.tree_toValue(this._rootNode);
        }
        return this._bitArray;
    }
    clearCache() {
        this._bitArray = null;
    }
}
exports.BitArrayTreeViewDU = BitArrayTreeViewDU;


/***/ }),

/***/ 58540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContainerTreeViewDUClass = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const basic_1 = __webpack_require__(52390);
const composite_1 = __webpack_require__(90750);
const abstract_1 = __webpack_require__(81154);
class ContainerTreeViewDU extends abstract_1.TreeViewDU {
    constructor(type, _rootNode, cache) {
        super();
        this.type = type;
        this._rootNode = _rootNode;
        this.nodes = [];
        this.nodesChanged = new Set();
        this.viewsChanged = new Map();
        if (cache) {
            this.nodes = cache.nodes;
            this.caches = cache.caches;
            this.nodesPopulated = cache.nodesPopulated;
        }
        else {
            this.nodes = [];
            this.caches = [];
            this.nodesPopulated = false;
        }
    }
    get node() {
        return this._rootNode;
    }
    get cache() {
        return {
            nodes: this.nodes,
            caches: this.caches,
            nodesPopulated: this.nodesPopulated,
        };
    }
    commit() {
        if (this.nodesChanged.size === 0 && this.viewsChanged.size === 0) {
            return;
        }
        const nodesChanged = [];
        for (const [index, view] of this.viewsChanged) {
            const fieldType = this.type.fieldsEntries[index].fieldType;
            const node = fieldType.commitViewDU(view);
            // Set new node in nodes array to ensure data represented in the tree and fast nodes access is equal
            this.nodes[index] = node;
            nodesChanged.push({ index, node });
            // Cache the view's caches to preserve it's data after 'this.viewsChanged.clear()'
            const cache = fieldType.cacheOfViewDU(view);
            if (cache)
                this.caches[index] = cache;
        }
        for (const index of this.nodesChanged) {
            nodesChanged.push({ index, node: this.nodes[index] });
        }
        // TODO: Optimize to loop only once, Numerical sort ascending
        const nodesChangedSorted = nodesChanged.sort((a, b) => a.index - b.index);
        const indexes = nodesChangedSorted.map((entry) => entry.index);
        const nodes = nodesChangedSorted.map((entry) => entry.node);
        this._rootNode = persistent_merkle_tree_1.setNodesAtDepth(this._rootNode, this.type.depth, indexes, nodes);
        this.nodesChanged.clear();
        this.viewsChanged.clear();
    }
    clearCache() {
        this.nodes = [];
        this.caches = [];
        this.nodesPopulated = false;
        // Must clear nodesChanged, otherwise a subsequent commit call will break, because it assumes a node is there
        this.nodesChanged.clear();
        // It's not necessary to clear this.viewsChanged since they have no effect on the cache.
        // However preserving _SOME_ caches results in a very unpredictable experience.
        this.viewsChanged.clear();
    }
}
function getContainerTreeViewDUClass(type) {
    class CustomContainerTreeViewDU extends ContainerTreeViewDU {
    }
    // Dynamically define prototype methods
    for (let index = 0; index < type.fieldsEntries.length; index++) {
        const { fieldName, fieldType } = type.fieldsEntries[index];
        // If the field type is basic, the value to get and set will be the actual 'struct' value (i.e. a JS number).
        // The view must use the tree_getFromNode() and tree_setToNode() methods to persist the struct data to the node,
        // and use the cached views array to store the new node.
        if (basic_1.isBasicType(fieldType)) {
            Object.defineProperty(CustomContainerTreeViewDU.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // TODO: Review the memory cost of this closures
                get: function () {
                    // First walk through the tree to get the root node for that index
                    let node = this.nodes[index];
                    if (node === undefined) {
                        node = persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, index);
                        this.nodes[index] = node;
                    }
                    return fieldType.tree_getFromNode(node);
                },
                set: function (value) {
                    // Create new node if current leafNode is not dirty
                    let nodeChanged;
                    if (this.nodesChanged.has(index)) {
                        // TODO: This assumes that node has already been populated
                        nodeChanged = this.nodes[index];
                    }
                    else {
                        const nodePrev = (this.nodes[index] ?? persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, index));
                        nodeChanged = nodePrev.clone();
                        // Store the changed node in the nodes cache
                        this.nodes[index] = nodeChanged;
                        this.nodesChanged.add(index);
                    }
                    fieldType.tree_setToNode(nodeChanged, value);
                },
            });
        }
        // If the field type is composite, the value to get and set will be another TreeView. The parent TreeView must
        // cache the view itself to retain the caches of the child view. To set a value the view must return a node to
        // set it to the parent tree in the field gindex.
        else if (composite_1.isCompositeType(fieldType)) {
            Object.defineProperty(CustomContainerTreeViewDU.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // Returns TreeViewDU of fieldName
                get: function () {
                    const viewChanged = this.viewsChanged.get(index);
                    if (viewChanged) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        return viewChanged;
                    }
                    let node = this.nodes[index];
                    if (node === undefined) {
                        node = persistent_merkle_tree_1.getNodeAtDepth(this._rootNode, this.type.depth, index);
                        this.nodes[index] = node;
                    }
                    // Keep a reference to the new view to call .commit on it latter, only if mutable
                    const view = fieldType.getViewDU(node, this.caches[index]);
                    if (fieldType.isViewMutable) {
                        this.viewsChanged.set(index, view);
                    }
                    // No need to persist the child's view cache since a second get returns this view instance.
                    // The cache is only persisted on commit where the viewsChanged map is dropped.
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return view;
                },
                // Expects TreeViewDU of fieldName
                set: function (view) {
                    // When setting a view:
                    // - Not necessary to commit node
                    // - Not necessary to persist cache
                    // Just keeping a reference to the view in this.viewsChanged ensures consistency
                    this.viewsChanged.set(index, view);
                },
            });
        }
        // Should never happen
        else {
            /* istanbul ignore next - unreachable code */
            throw Error(`Unknown fieldType ${fieldType.typeName} for fieldName ${fieldName}`);
        }
    }
    // Change class name
    Object.defineProperty(CustomContainerTreeViewDU, "name", { value: type.typeName, writable: false });
    return CustomContainerTreeViewDU;
}
exports.getContainerTreeViewDUClass = getContainerTreeViewDUClass;


/***/ }),

/***/ 17508:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContainerTreeViewDUClass = void 0;
const composite_1 = __webpack_require__(90750);
const abstract_1 = __webpack_require__(81154);
/* eslint-disable @typescript-eslint/member-ordering */
class ContainerTreeViewDU extends abstract_1.TreeViewDU {
    constructor(type, node) {
        super();
        this.type = type;
        this.valueChanged = null;
        this._rootNode = node;
    }
    get node() {
        return this._rootNode;
    }
    get cache() {
        return;
    }
    commit() {
        if (this.valueChanged === null) {
            return;
        }
        const value = this.valueChanged;
        this.valueChanged = null;
        this._rootNode = this.type.value_toTree(value);
    }
    clearCache() {
        this.valueChanged = null;
    }
}
function getContainerTreeViewDUClass(type) {
    class CustomContainerTreeViewDU extends ContainerTreeViewDU {
    }
    // Dynamically define prototype methods
    for (let index = 0; index < type.fieldsEntries.length; index++) {
        const { fieldName, fieldType } = type.fieldsEntries[index];
        // If the field type is basic, the value to get and set will be the actual 'struct' value (i.e. a JS number).
        // The view must use the tree_getFromNode() and tree_setToNode() methods to persist the struct data to the node,
        // and use the cached views array to store the new node.
        if (fieldType.isBasic) {
            Object.defineProperty(CustomContainerTreeViewDU.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // TODO: Review the memory cost of this closures
                get: function () {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return (this.valueChanged || this._rootNode.value)[fieldName];
                },
                set: function (value) {
                    if (this.valueChanged === null) {
                        this.valueChanged = this.type.clone(this._rootNode.value);
                    }
                    this.valueChanged[fieldName] = value;
                },
            });
        }
        // If the field type is composite, the value to get and set will be another TreeView. The parent TreeView must
        // cache the view itself to retain the caches of the child view. To set a value the view must return a node to
        // set it to the parent tree in the field gindex.
        else if (composite_1.isCompositeType(fieldType)) {
            Object.defineProperty(CustomContainerTreeViewDU.prototype, fieldName, {
                configurable: false,
                enumerable: true,
                // Returns TreeViewDU of fieldName
                get: function () {
                    const value = this.valueChanged || this._rootNode.value;
                    return fieldType.toViewDU(value[fieldName]);
                },
                // Expects TreeViewDU of fieldName
                set: function (view) {
                    if (this.valueChanged === null) {
                        this.valueChanged = this.type.clone(this._rootNode.value);
                    }
                    const value = fieldType.toValueFromViewDU(view);
                    this.valueChanged[fieldName] = value;
                },
            });
        }
        // Should never happen
        else {
            /* istanbul ignore next - unreachable code */
            throw Error(`Unknown fieldType ${fieldType.typeName} for fieldName ${fieldName}`);
        }
    }
    // Change class name
    Object.defineProperty(CustomContainerTreeViewDU, "name", { value: type.typeName, writable: false });
    return CustomContainerTreeViewDU;
}
exports.getContainerTreeViewDUClass = getContainerTreeViewDUClass;


/***/ }),

/***/ 29102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListBasicTreeViewDU = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const arrayBasic_1 = __webpack_require__(51254);
class ListBasicTreeViewDU extends arrayBasic_1.ArrayBasicTreeViewDU {
    constructor(type, _rootNode, cache) {
        super(type, _rootNode, cache);
        this.type = type;
        this._rootNode = _rootNode;
    }
    /**
     * Adds one value element at the end of the array and adds 1 to the un-commited ViewDU length
     */
    push(value) {
        if (this._length >= this.type.limit) {
            throw Error("Error pushing over limit");
        }
        // Mutate length before .set()
        this.dirtyLength = true;
        const index = this._length++;
        // If in new node..
        if (index % this.type.itemsPerChunk === 0) {
            // Set a zero node to the nodes array to avoid a navigation downwards in .set()
            const chunkIndex = Math.floor(index / this.type.itemsPerChunk);
            this.nodes[chunkIndex] = persistent_merkle_tree_1.zeroNode(0);
        }
        this.set(index, value);
    }
}
exports.ListBasicTreeViewDU = ListBasicTreeViewDU;


/***/ }),

/***/ 13181:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListCompositeTreeViewDU = void 0;
const persistent_merkle_tree_1 = __webpack_require__(94994);
const arrayComposite_1 = __webpack_require__(15461);
class ListCompositeTreeViewDU extends arrayComposite_1.ArrayCompositeTreeViewDU {
    constructor(type, _rootNode, cache) {
        super(type, _rootNode, cache);
        this.type = type;
        this._rootNode = _rootNode;
    }
    /**
     * Adds one value element at the end of the array and adds 1 to the un-commited ViewDU length
     */
    push(view) {
        if (this._length >= this.type.limit) {
            throw Error("Error pushing over limit");
        }
        this.dirtyLength = true;
        const index = this._length++;
        // No need for pre-initialization like in ListBasic.push since ArrayCompositeTreeViewDU.set() doesn't do a get node
        this.set(index, view);
    }
    /**
     * Returns a new ListCompositeTreeViewDU instance with the values from 0 to `index`.
     * The new list is equivalent to (pseudo-code):
     *
     * ```ts
     * const nodes = getChunkNodes()
     * return listFromChunkNodes(nodes.slice(0, index + 1))
     * ```
     *
     * To achieve it, rebinds the underlying tree zero-ing all nodes right of `index`.
     *
     * Note: Using index = -1, returns an empty list of length 0.
     */
    sliceTo(index) {
        // Commit before getting rootNode to ensure all pending data is in the rootNode
        this.commit();
        const rootNode = this._rootNode;
        const length = this.type.tree_getLength(rootNode);
        // All nodes beyond length are already zero
        // Array of length 2: [X,X,0,0], for index >= 1 no action needed
        if (index >= length - 1) {
            return this;
        }
        // Since this is a List, do the treeZeroAfterIndex operation on the chunks tree
        const chunksNode = this.type.tree_getChunksNode(rootNode);
        const newChunksNode = persistent_merkle_tree_1.treeZeroAfterIndex(chunksNode, this.type.chunkDepth, index);
        // Must set new length and commit to tree to restore the same tree at that index
        const newLength = index + 1;
        const newRootNode = this.type.tree_setChunksNode(rootNode, newChunksNode, newLength);
        return this.type.getViewDU(newRootNode);
    }
}
exports.ListCompositeTreeViewDU = ListCompositeTreeViewDU;


/***/ })

}]);
//# sourceMappingURL=npm-ns.chainsafe.ssz.js.map