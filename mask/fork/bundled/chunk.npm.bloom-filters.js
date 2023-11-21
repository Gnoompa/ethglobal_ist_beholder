"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2135],{

/***/ 38943:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : api.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScalableBloomFilter = exports.DeprecatedHashing = exports.Hashing = exports.Cell = exports.InvertibleBloomFilter = exports.CuckooFilter = exports.MinHashFactory = exports.MinHash = exports.TopK = exports.HyperLogLog = exports.CountMinSketch = exports.PartitionedBloomFilter = exports.CountingBloomFilter = exports.XorFilter = exports.BitSet = exports.BloomFilter = exports.BaseFilter = void 0;
var base_filter_1 = __webpack_require__(31038);
Object.defineProperty(exports, "BaseFilter", ({ enumerable: true, get: function () { return __importDefault(base_filter_1).default; } }));
var bloom_filter_1 = __webpack_require__(59036);
Object.defineProperty(exports, "BloomFilter", ({ enumerable: true, get: function () { return __importDefault(bloom_filter_1).default; } }));
var bit_set_1 = __webpack_require__(61752);
Object.defineProperty(exports, "BitSet", ({ enumerable: true, get: function () { return __importDefault(bit_set_1).default; } }));
var xor_filter_1 = __webpack_require__(80375);
Object.defineProperty(exports, "XorFilter", ({ enumerable: true, get: function () { return __importDefault(xor_filter_1).default; } }));
var counting_bloom_filter_1 = __webpack_require__(78310);
Object.defineProperty(exports, "CountingBloomFilter", ({ enumerable: true, get: function () { return __importDefault(counting_bloom_filter_1).default; } }));
var partitioned_bloom_filter_1 = __webpack_require__(75741);
Object.defineProperty(exports, "PartitionedBloomFilter", ({ enumerable: true, get: function () { return __importDefault(partitioned_bloom_filter_1).default; } }));
var count_min_sketch_1 = __webpack_require__(95762);
Object.defineProperty(exports, "CountMinSketch", ({ enumerable: true, get: function () { return __importDefault(count_min_sketch_1).default; } }));
var hyperloglog_1 = __webpack_require__(28344);
Object.defineProperty(exports, "HyperLogLog", ({ enumerable: true, get: function () { return __importDefault(hyperloglog_1).default; } }));
var topk_1 = __webpack_require__(38801);
Object.defineProperty(exports, "TopK", ({ enumerable: true, get: function () { return __importDefault(topk_1).default; } }));
var min_hash_1 = __webpack_require__(56608);
Object.defineProperty(exports, "MinHash", ({ enumerable: true, get: function () { return min_hash_1.MinHash; } }));
var min_hash_factory_1 = __webpack_require__(88947);
Object.defineProperty(exports, "MinHashFactory", ({ enumerable: true, get: function () { return __importDefault(min_hash_factory_1).default; } }));
var cuckoo_filter_1 = __webpack_require__(18900);
Object.defineProperty(exports, "CuckooFilter", ({ enumerable: true, get: function () { return __importDefault(cuckoo_filter_1).default; } }));
var invertible_bloom_lookup_tables_1 = __webpack_require__(57813);
Object.defineProperty(exports, "InvertibleBloomFilter", ({ enumerable: true, get: function () { return __importDefault(invertible_bloom_lookup_tables_1).default; } }));
var cell_1 = __webpack_require__(68885);
Object.defineProperty(exports, "Cell", ({ enumerable: true, get: function () { return __importDefault(cell_1).default; } }));
var hashing_1 = __webpack_require__(78416);
Object.defineProperty(exports, "Hashing", ({ enumerable: true, get: function () { return __importDefault(hashing_1).default; } }));
var deprecated_hashing_1 = __webpack_require__(94511);
Object.defineProperty(exports, "DeprecatedHashing", ({ enumerable: true, get: function () { return __importDefault(deprecated_hashing_1).default; } }));
var scalable_bloom_filter_1 = __webpack_require__(22891);
Object.defineProperty(exports, "ScalableBloomFilter", ({ enumerable: true, get: function () { return __importDefault(scalable_bloom_filter_1).default; } }));


/***/ }),

/***/ 31038:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : base-filter.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var seedrandom_1 = __importDefault(__webpack_require__(45284));
var hashing_1 = __importDefault(__webpack_require__(78416));
var utils_1 = __webpack_require__(74409);
/**
 * A base class for implementing probailistic filters
 * @author Thomas Minier
 * @author Arnaud Grall
 */
var BaseFilter = /** @class */ (function () {
    function BaseFilter() {
        this._seed = (0, utils_1.getDefaultSeed)();
        this._rng = (0, seedrandom_1.default)("".concat(this._seed));
        this._hashing = new hashing_1.default();
    }
    Object.defineProperty(BaseFilter.prototype, "seed", {
        /**
         * Get the seed used in this structure
         */
        get: function () {
            return this._seed;
        },
        /**
         * Set the seed for this structure
         * @param  seed the new seed that will be used in this structure
         */
        set: function (seed) {
            this._seed = seed;
            this._rng = (0, seedrandom_1.default)("".concat(this._seed));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFilter.prototype, "random", {
        /**
         * Get a function used to draw random number
         * @return A factory function used to draw random integer
         */
        get: function () {
            return this._rng;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Return a next random seeded int32 integer
     * @returns
     */
    BaseFilter.prototype.nextInt32 = function () {
        return this._rng.int32();
    };
    /**
     * Save the current structure as a JSON
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BaseFilter.prototype.saveAsJSON = function () {
        throw new Error('not-implemented');
    };
    /**
     * Load an Object from a provided JSON object
     * @param json the JSON object to load
     * @return Return the Object loaded from the provided JSON object
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    BaseFilter.fromJSON = function (json) {
        throw new Error("not-implemented");
    };
    return BaseFilter;
}());
exports["default"] = BaseFilter;


/***/ }),

/***/ 61752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* file : BitSet.ts
MIT License

Copyright (c) 2021 David Leppik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base64_arraybuffer_1 = __webpack_require__(45809);
var bitsPerWord = 8;
/**
 * A memory-efficient Boolean array. Contains just the minimal operations needed for our Bloom filter implementation.
 *
 * @author David Leppik
 */
var BitSet = /** @class */ (function () {
    /**
     * Constructor. All bits are initially set to false.
     * @param size the number of bits that can be stored. (This is NOT required to be a multiple of 8.)
     */
    function BitSet(size) {
        var diff = bitsPerWord - (size % bitsPerWord);
        this.size = size + ([0, 8].includes(diff) ? 0 : diff);
        this.array = new Uint8Array(Math.ceil(this.size / bitsPerWord));
    }
    /**
     * Returns the value of the bit at the given index
     * @param index position of the bit, zero-indexed
     */
    BitSet.prototype.has = function (index) {
        var wordIndex = Math.floor(index / bitsPerWord);
        var mask = 1 << index % bitsPerWord;
        return (this.array[wordIndex] & mask) !== 0;
    };
    /**
     * Set the bit to true
     * @param index position of the bit, zero-indexed
     */
    BitSet.prototype.add = function (index) {
        var wordIndex = Math.floor(index / bitsPerWord);
        var mask = 1 << index % bitsPerWord;
        this.array[wordIndex] = this.array[wordIndex] | mask;
    };
    /**
     * Returns the maximum true bit.
     */
    BitSet.prototype.max = function () {
        for (var i = this.array.length - 1; i >= 0; i--) {
            var bits = this.array[i];
            if (bits) {
                return BitSet.highBit(bits) + i * bitsPerWord;
            }
        }
        return 0;
    };
    /**
     * Returns the number of true bits.
     */
    BitSet.prototype.bitCount = function () {
        var result = 0;
        for (var i = 0; i < this.array.length; i++) {
            result += BitSet.countBits(this.array[i]); // Assumes we never have bits set beyond the end
        }
        return result;
    };
    /**
     * Returns true if the size and contents are identical.
     * @param other another BitSet
     */
    BitSet.prototype.equals = function (other) {
        if (other.size !== this.size) {
            return false;
        }
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i] !== other.array[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Returns a JSON-encodable object readable by {@link import}.
     */
    BitSet.prototype.export = function () {
        return {
            size: this.size,
            content: (0, base64_arraybuffer_1.encode)(this.array),
        };
    };
    /**
     * Returns an object written by {@link export}.
     * @param data an object written by {@link export}
     */
    BitSet.import = function (data) {
        if (typeof data.size !== 'number') {
            throw Error('BitSet missing size');
        }
        if (typeof data.content !== 'string') {
            throw Error('BitSet: missing content');
        }
        var result = new BitSet(data.size);
        var buffer = (0, base64_arraybuffer_1.decode)(data.content);
        result.array = new Uint8Array(buffer);
        return result;
    };
    /**
     * Returns the index of the maximum bit in the number, or -1 for 0
     * @bits an unsigned 8-bit number
     * ```js
     * @example
     * BitSet.highBit(0) // returns -1
     * BitSet.highBit(5) // returns 2
     * ```
     */
    BitSet.highBit = function (bits) {
        var result = bitsPerWord - 1;
        var mask = 1 << result;
        while (result >= 0 && (mask & bits) !== mask) {
            mask >>>= 1;
            result--;
        }
        return result;
    };
    /**
     * Returns the number of true bits in the number
     * @bits an unsigned 8-bit number
     * @example
     * ```js
     * BitSet.countBits(0) // returns 0
     * BitSet.countBits(3) // returns 2
     * ```
     */
    BitSet.countBits = function (bits) {
        var result = bits & 1;
        while (bits !== 0) {
            bits = bits >>> 1;
            result += bits & 1;
        }
        return result;
    };
    return BitSet;
}());
exports["default"] = BitSet;


/***/ }),

/***/ 59036:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : bloom-filter.ts
MIT License

Copyright (c) 2017 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var bit_set_1 = __importDefault(__webpack_require__(61752));
var exportable_1 = __webpack_require__(18677);
var formulas_1 = __webpack_require__(35081);
/**
 * A Bloom filter is a space-efficient probabilistic data structure, conceived by Burton Howard Bloom in 1970,
 * that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not.
 *
 * Reference: Bloom, B. H. (1970). Space/time trade-offs in hash coding with allowable errors. Communications of the ACM, 13(7), 422-426.
 * @see {@link http://crystal.uta.edu/~mcguigan/cse6350/papers/Bloom.pdf} for more details about classic Bloom Filters.
 * @author Thomas Minier
 * @author Arnaud Grall
 */
var BloomFilter = /** @class */ (function (_super) {
    __extends(BloomFilter, _super);
    /**
     * Constructor
     * @param size - The number of cells
     * @param nbHashes - The number of hash functions used
     */
    function BloomFilter(size, nbHashes) {
        var _this = _super.call(this) || this;
        if (nbHashes < 1) {
            throw new Error("A BloomFilter cannot uses less than one hash function, while you tried to use ".concat(nbHashes, "."));
        }
        _this._size = size;
        _this._nbHashes = nbHashes;
        _this._filter = new bit_set_1.default(size);
        return _this;
    }
    BloomFilter_1 = BloomFilter;
    /**
     * Create an optimal bloom filter providing the maximum of elements stored and the error rate desired
     * @param  nbItems      - The maximum number of item to store
     * @param  errorRate  - The error rate desired for a maximum of items inserted
     * @return A new {@link BloomFilter}
     */
    BloomFilter.create = function (nbItems, errorRate) {
        var size = (0, formulas_1.optimalFilterSize)(nbItems, errorRate);
        var hashes = (0, formulas_1.optimalHashes)(size, nbItems);
        return new this(size, hashes);
    };
    /**
     * Build a new Bloom Filter from an existing iterable with a fixed error rate
     * @param items - The iterable used to populate the filter
     * @param errorRate - The error rate, i.e. 'false positive' rate, targeted by the filter
     * @param seed - The random number seed (optional)
     * @return A new Bloom Filter filled with the iterable's elements
     * @example
     * ```js
     * // create a filter with a false positive rate of 0.1
     * const filter = BloomFilter.from(['alice', 'bob', 'carl'], 0.1);
     * ```
     */
    BloomFilter.from = function (items, errorRate, seed) {
        var array = Array.from(items);
        var filter = BloomFilter_1.create(array.length, errorRate);
        if (typeof seed === 'number') {
            filter.seed = seed;
        }
        array.forEach(function (element) { return filter.add(element); });
        return filter;
    };
    Object.defineProperty(BloomFilter.prototype, "size", {
        /**
         * Get the optimal size of the filter
         * @return The size of the filter
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BloomFilter.prototype, "length", {
        /**
         * Get the number of bits currently set in the filter
         * @return The filter length
         */
        get: function () {
            return this._filter.bitCount();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an element to the filter
     * @param element - The element to add
     * @example
     * ```js
     * const filter = new BloomFilter(15, 0.1);
     * filter.add('foo');
     * ```
     */
    BloomFilter.prototype.add = function (element) {
        var indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        for (var i = 0; i < indexes.length; i++) {
            this._filter.add(indexes[i]);
        }
    };
    /**
     * Test an element for membership
     * @param element - The element to look for in the filter
     * @return False if the element is definitively not in the filter, True is the element might be in the filter
     * @example
     * ```js
     * const filter = new BloomFilter(15, 0.1);
     * filter.add('foo');
     * console.log(filter.has('foo')); // output: true
     * console.log(filter.has('bar')); // output: false
     * ```
     */
    BloomFilter.prototype.has = function (element) {
        var indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        for (var i = 0; i < indexes.length; i++) {
            if (!this._filter.has(indexes[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Get the current false positive rate (or error rate) of the filter
     * @return The current false positive rate of the filter
     * @example
     * ```js
     * const filter = new BloomFilter(15, 0.1);
     * console.log(filter.rate()); // output: something around 0.1
     * ```
     */
    BloomFilter.prototype.rate = function () {
        return Math.pow(1 - Math.exp(-this.length / this._size), this._nbHashes);
    };
    /**
     * Check if another Bloom Filter is equal to this one
     * @param  other - The filter to compare to this one
     * @return True if they are equal, false otherwise
     */
    BloomFilter.prototype.equals = function (other) {
        if (this._size !== other._size || this._nbHashes !== other._nbHashes) {
            return false;
        }
        return this._filter.equals(other._filter);
    };
    var BloomFilter_1;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], BloomFilter.prototype, "_size", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], BloomFilter.prototype, "_nbHashes", void 0);
    __decorate([
        (0, exportable_1.Field)(function (f) { return f.export(); }, function (data) {
            // create the bitset from new and old array-based exported structure
            if (Array.isArray(data)) {
                var bs_1 = new bit_set_1.default(data.length);
                data.forEach(function (val, index) {
                    if (val !== 0) {
                        bs_1.add(index);
                    }
                });
                return bs_1;
            }
            else {
                return bit_set_1.default.import(data);
            }
        }),
        __metadata("design:type", bit_set_1.default
        /**
         * Constructor
         * @param size - The number of cells
         * @param nbHashes - The number of hash functions used
         */
        )
    ], BloomFilter.prototype, "_filter", void 0);
    BloomFilter = BloomFilter_1 = __decorate([
        (0, exportable_1.AutoExportable)('BloomFilter', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_size')),
        __param(1, (0, exportable_1.Parameter)('_nbHashes')),
        __metadata("design:paramtypes", [Number, Number])
    ], BloomFilter);
    return BloomFilter;
}(base_filter_1.default));
exports["default"] = BloomFilter;


/***/ }),

/***/ 78310:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : counting-bloom-filter.ts
MIT License

Copyright (c) 2017 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var formulas_1 = __webpack_require__(35081);
var utils_1 = __webpack_require__(74409);
/**
 * A Counting Bloom filter works in a similar manner as a regular Bloom filter; however, it is able to keep track of insertions and deletions. In a counting Bloom filter, each entry in the Bloom filter is a small counter associated with a basic Bloom filter bit.
 *
 * Reference: F. Bonomi, M. Mitzenmacher, R. Panigrahy, S. Singh, and G. Varghese, “An Improved Construction for Counting Bloom Filters,” in 14th Annual European Symposium on Algorithms, LNCS 4168, 2006, pp.
684–695.
 * @author Thomas Minier & Arnaud Grall
 */
var CountingBloomFilter = /** @class */ (function (_super) {
    __extends(CountingBloomFilter, _super);
    /**
     * Constructor
     * @param size - The size of the filter
     * @param nbHashes - The number of hash functions
     */
    function CountingBloomFilter(size, nbHashes) {
        var _this = _super.call(this) || this;
        if (nbHashes < 1) {
            throw new Error("A CountingBloomFilter must used at least one hash function, but you tried to use ".concat(nbHashes, " functions. Consider increasing it."));
        }
        _this._size = size; // fm.optimalFilterSize(capacity, errorRate)
        _this._nbHashes = nbHashes; // fm.optimalHashes(this._size, capacity)
        // the filter contains tuples [bit, counter]
        _this._filter = (0, utils_1.allocateArray)(_this._size, function () { return [0, 0]; });
        _this._length = 0;
        return _this;
    }
    CountingBloomFilter_1 = CountingBloomFilter;
    /**
     * Allocate a CountingBloomFilter with a target maximum capacity and error rate
     * @param  capacity - The maximum capacity of the filter
     * @param  errorRate - The error rate of the filter
     * @return A new {@link CountingBloomFilter}
     */
    CountingBloomFilter.create = function (capacity, errorRate) {
        var s = (0, formulas_1.optimalFilterSize)(capacity, errorRate);
        return new CountingBloomFilter_1(s, (0, formulas_1.optimalHashes)(s, capacity));
    };
    /**
     * Build a new Bloom Filter from an iterable with a fixed error rate
     * @param items - Iterable used to populate the filter
     * @param errorRate - The error rate of the filter
     * @return A new Bloom Filter filled with the iterable's elements
     * @example
     * ```js
     * // create a filter with a false positive rate of 0.1
     * const filter = CountingBloomFilter.from(['alice', 'bob', 'carl'], 0.1);
     * ```
     */
    CountingBloomFilter.from = function (items, errorRate) {
        var array = Array.from(items);
        var filter = CountingBloomFilter_1.create(array.length, errorRate);
        array.forEach(function (element) { return filter.add(element); });
        return filter;
    };
    Object.defineProperty(CountingBloomFilter.prototype, "size", {
        /**
         * Get the optimal size of the filter
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountingBloomFilter.prototype, "length", {
        /**
         * Get the number of elements currently in the filter
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an element to the filter
     * @param element - The element to add
     * @example
     * ```js
     * const filter = new CountingBloomFilter(15, 0.1);
     * filter.add('foo');
     * ```
     */
    CountingBloomFilter.prototype.add = function (element) {
        var indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        for (var i = 0; i < indexes.length; i++) {
            // increment counter
            this._filter[indexes[i]][1] += 1;
            // set bit if necessary
            if (this._filter[indexes[i]][1] > 0) {
                this._filter[indexes[i]][0] = 1;
            }
        }
        this._length++;
    };
    /**
     * Remove an element from the filter
     * @param element - The element to delete
     * @example
     * ```js
     * const filter = new CountingBloomFilter(15, 0.1);
     * filter.remove('foo');
     * ```
     */
    CountingBloomFilter.prototype.remove = function (element) {
        var indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        var success = true;
        for (var i = 0; i < indexes.length; i++) {
            // decrement counter
            this._filter[indexes[i]][1] -= 1;
            // set bit if necessary
            if (this._filter[indexes[i]][1] <= 0) {
                this._filter[indexes[i]][0] = 0;
            }
        }
        this._length--;
        return success;
    };
    /**
     * Test an element for membership
     * @param element - The element to look for in the filter
     * @return False if the element is definitively not in the filter, True is the element might be in the filter
     * @example
     * ```js
     * const filter = new CountingBloomFilter(15, 0.1);
     * filter.add('foo');
     * console.log(filter.has('foo')); // output: true
     * console.log(filter.has('bar')); // output: false
     * ```
     */
    CountingBloomFilter.prototype.has = function (element) {
        var indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        for (var i = 0; i < indexes.length; i++) {
            if (!this._filter[indexes[i]][0]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Get the current false positive rate (or error rate) of the filter
     * @return The current false positive rate of the filter
     * @example
     * ```js
     * const filter = new BloomFilter(15, 0.1);
     * console.log(filter.rate()); // output: something around 0.1
     * ```
     */
    CountingBloomFilter.prototype.rate = function () {
        return Math.pow(1 - Math.exp((-this._nbHashes * this._length) / this._size), this._nbHashes);
    };
    /**
     * Check if another Counting Bloom Filter is equal to this one
     * @param  filter - The filter to compare to this one
     * @return True if they are equal, false otherwise
     */
    CountingBloomFilter.prototype.equals = function (other) {
        if (this._size !== other._size ||
            this._nbHashes !== other._nbHashes ||
            this._length !== other._length) {
            return false;
        }
        return this._filter.every(function (value, index) {
            return other._filter[index][0] === value[0] &&
                other._filter[index][1] === value[1];
        });
    };
    var CountingBloomFilter_1;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], CountingBloomFilter.prototype, "_size", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], CountingBloomFilter.prototype, "_nbHashes", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Array)
    ], CountingBloomFilter.prototype, "_filter", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], CountingBloomFilter.prototype, "_length", void 0);
    CountingBloomFilter = CountingBloomFilter_1 = __decorate([
        (0, exportable_1.AutoExportable)('CountingBloomFilter', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_size')),
        __param(1, (0, exportable_1.Parameter)('_nbHashes')),
        __metadata("design:paramtypes", [Number, Number])
    ], CountingBloomFilter);
    return CountingBloomFilter;
}(base_filter_1.default));
exports["default"] = CountingBloomFilter;


/***/ }),

/***/ 75741:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : partitioned-bloom-filter.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
var bit_set_1 = __importDefault(__webpack_require__(61752));
/**
 * Return the optimal number of hashes needed for a given error rate and load factor
 * P = p^k <=> k = ln(P)/ln(p)
 * @param  errorRate - The provided error rate
 * @param  loadFactor - The load factor, ideally 0.5
 * @return The number of hash function to use
 */
function computeOptimalNumberOfhashes(errorRate, loadFactor) {
    // P = p^k <=> k = ln(P)/ln(p)
    return Math.ceil(Math.log(errorRate) / Math.log(loadFactor));
}
/**
 * Return the total number of bits needed for this filter
 * n = M*(ln(p)ln(1-p))/(-ln(P)) <=> M = (n*-ln(P)/(ln(p)ln(1-p))
 * @param  size - The number of desired items
 * @param  rate - The error rate desired
 * @param  loadFactor - The load factor desired
 * @return The total number of cells this filter will have
 */
function computeOptimalNumberOfCells(size, rate, loadFactor) {
    // n=M*(ln(p)ln(1-p))/(-ln(P)) <=> M=(n*-ln(P)/(ln(p)ln(1-p))
    return Math.ceil((size * -Math.log(rate)) / (Math.log(loadFactor) * Math.log(1 - loadFactor)));
}
/**
 * Return the maximum number of items this filter can store
 * @param  totalBits - The total number of cells in the filter
 * @param  loadFactor - The load factor desired
 * @param  nbHashes - The number of hash functions used
 * @return The maximum number of items this filter store
 */
function computeNumberOfItems(totalBits, loadFactor, nbHashes) {
    return Math.ceil((totalBits * (Math.log(loadFactor) * Math.log(1 - loadFactor))) /
        -(nbHashes * Math.log(loadFactor)));
}
/**
 * A Partitioned Bloom Filter is a variation of a classic Bloom filter.
 *
 * This filter works by partitioning the M-sized bit array into k slices of size m = M/k bits, k = nb of hash functions in the filter.
 * Each hash function produces an index over m for its respective slice.
 * Thus, each element is described by exactly k bits, meaning the distribution of false positives is uniform across all elements.
 *
 * Be careful, as a Partitioned Bloom Filter have much higher collison risks that a classic Bloom Filter on small sets of data.
 *
 * Reference: Chang, F., Feng, W. C., & Li, K. (2004, March). Approximate caches for packet classification. In INFOCOM 2004. Twenty-third AnnualJoint Conference of the IEEE Computer and Communications Societies (Vol. 4, pp. 2196-2207). IEEE.
 * @see {@link https://pdfs.semanticscholar.org/0e18/e24b37a1f4196fddf8c9ff8e4368b74cfd88.pdf} for more details about Partitioned Bloom Filters
 * @author Thomas Minier & Arnaud Grall
 */
var PartitionedBloomFilter = /** @class */ (function (_super) {
    __extends(PartitionedBloomFilter, _super);
    /**
     * Constructor
     * @param size - The total number of cells
     * @param nbHashes - The number of hash functions
     * @param loadFactor - The load factor
     * @param capacity - The filter capacity
     */
    function PartitionedBloomFilter(size, nbHashes, loadFactor, capacity) {
        var _this = _super.call(this) || this;
        _this._size = size;
        _this._nbHashes = nbHashes;
        _this._loadFactor = loadFactor;
        _this._m = Math.ceil(_this._size / _this._nbHashes);
        _this._filter = (0, utils_1.allocateArray)(_this._nbHashes, function () { return new bit_set_1.default(_this._m); });
        _this._capacity =
            capacity !== undefined
                ? capacity
                : computeNumberOfItems(_this._size, loadFactor, nbHashes);
        return _this;
    }
    PartitionedBloomFilter_1 = PartitionedBloomFilter;
    /**
     * Return a PartitionedBloomFilter for a given number of elements and under a given error rate
     * @param  size - The max allowable number of items to insert
     * @param  errorRate - The desired error rate
     * @return A new PartitionedBloomFilter optimal for the given parameters
     */
    PartitionedBloomFilter.create = function (size, errorRate, loadFactor) {
        if (loadFactor === void 0) { loadFactor = 0.5; }
        var capacity = computeOptimalNumberOfCells(size, errorRate, loadFactor);
        var nbHashes = computeOptimalNumberOfhashes(errorRate, loadFactor);
        return new PartitionedBloomFilter_1(capacity, nbHashes, loadFactor, size);
    };
    /**
     * Build a new Partitioned Bloom Filter from an existing iterable with a fixed error rate
     * @param items - The iterable used to populate the filter
     * @param errorRate - The error rate, i.e. 'false positive' rate, targetted by the filter
     * @param loadFactor - The filter's load factor
     * @return A new Bloom Filter filled with the iterable's elements
     * @example
     * ```js
     * // create a filter with a false positive rate of 0.1
     * const filter = PartitionedBloomFilter.from(['alice', 'bob', 'carl'], 0.1);
     * ```
     */
    PartitionedBloomFilter.from = function (items, errorRate, loadFactor) {
        if (loadFactor === void 0) { loadFactor = 0.5; }
        var array = Array.from(items);
        var filter = PartitionedBloomFilter_1.create(array.length, errorRate, loadFactor);
        array.forEach(function (element) { return filter.add(element); });
        return filter;
    };
    Object.defineProperty(PartitionedBloomFilter.prototype, "capacity", {
        /**
         * Get the filter capacity, i.e. the maximum number of elements it will contains
         */
        get: function () {
            return this._capacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PartitionedBloomFilter.prototype, "size", {
        /**
         * Get the size of the filter
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PartitionedBloomFilter.prototype, "loadFactor", {
        /**
         * Get the filter's load factor
         */
        get: function () {
            return this._loadFactor;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an element to the filter
     * @param element - The element to add
     * @example
     * ```js
     * const filter = new PartitionedBloomFilter(15, 0.1);
     * filter.add('foo');
     * ```
     */
    PartitionedBloomFilter.prototype.add = function (element) {
        var indexes = this._hashing.getIndexes(element, this._m, this._nbHashes, this.seed);
        for (var i = 0; i < this._nbHashes; i++) {
            this._filter[i].add(indexes[i]);
        }
    };
    /**
     * Test an element for membership
     * @param element - The element to look for in the filter
     * @return False if the element is definitively not in the filter, True is the element might be in the filter
     * @example
     * ```js
     * const filter = new PartitionedBloomFilter(15, 0.1);
     * filter.add('foo');
     * console.log(filter.has('foo')); // output: true
     * console.log(filter.has('bar')); // output: false
     * ```
     */
    PartitionedBloomFilter.prototype.has = function (element) {
        var indexes = this._hashing.getIndexes(element, this._m, this._nbHashes, this.seed);
        for (var i = 0; i < this._nbHashes; i++) {
            if (!this._filter[i].has(indexes[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Compute the current false positive rate (or error rate) of the filter
     * @return The current false positive rate of the filter
     * @example
     * ```js
     * const filter = PartitionedBloomFilter.create(15, 0.1);
     * console.log(filter.rate()); // output: something around 0.1
     * ```
     */
    PartitionedBloomFilter.prototype.rate = function () {
        // get the error rate for the first bucket (1 - (1 - 1/m)^n), where m is the size of a slice and n is the number of inserted elements
        var p = this._currentload();
        // P = p^k
        return Math.pow(p, this._nbHashes);
    };
    /**
     * Check if another Partitioned Bloom Filter is equal to this one
     * @param  filter - The filter to compare to this one
     * @return True if they are equal, false otherwise
     */
    PartitionedBloomFilter.prototype.equals = function (other) {
        if (this._size !== other._size ||
            this._nbHashes !== other._nbHashes ||
            this._loadFactor !== other._loadFactor) {
            return false;
        }
        return this._filter.every(function (array, outerIndex) {
            return other._filter[outerIndex].equals(array);
        });
    };
    /**
     * Return the current load of this filter, iterate on all buckets
     * @return An integer between 0 and 1, where 0 = filter empty and 1 = filter full
     */
    PartitionedBloomFilter.prototype._currentload = function () {
        var values = this._filter.map(function (bucket) {
            return bucket.bitCount();
        });
        var used = values.reduce(function (a, b) { return a + b; }, 0);
        return used / this._size;
    };
    var PartitionedBloomFilter_1;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], PartitionedBloomFilter.prototype, "_size", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], PartitionedBloomFilter.prototype, "_nbHashes", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], PartitionedBloomFilter.prototype, "_loadFactor", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], PartitionedBloomFilter.prototype, "_m", void 0);
    __decorate([
        (0, exportable_1.Field)(function (sets) { return sets.map(function (s) { return s.export(); }); }, function (array) {
            return array.map(function (data) {
                // create the bitset from new and old array-based exported structure
                if (Array.isArray(data)) {
                    var bs_1 = new bit_set_1.default(data.length);
                    data.forEach(function (val, index) {
                        if (val !== 0) {
                            bs_1.add(index);
                        }
                    });
                    return bs_1;
                }
                else {
                    return bit_set_1.default.import(data);
                }
            });
        }),
        __metadata("design:type", Array)
    ], PartitionedBloomFilter.prototype, "_filter", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], PartitionedBloomFilter.prototype, "_capacity", void 0);
    PartitionedBloomFilter = PartitionedBloomFilter_1 = __decorate([
        (0, exportable_1.AutoExportable)('PartitionedBloomFilter', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_size')),
        __param(1, (0, exportable_1.Parameter)('_nbHashes')),
        __param(2, (0, exportable_1.Parameter)('_loadFactor')),
        __param(3, (0, exportable_1.Parameter)('_capacity')),
        __metadata("design:paramtypes", [Number, Number, Number, Number])
    ], PartitionedBloomFilter);
    return PartitionedBloomFilter;
}(base_filter_1.default));
exports["default"] = PartitionedBloomFilter;


/***/ }),

/***/ 22891:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : scalable-bloom-filter.ts
MIT License

Copyright (c) 2022 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var partitioned_bloom_filter_1 = __importDefault(__webpack_require__(75741));
var seedrandom_1 = __importDefault(__webpack_require__(45284));
/**
 * A Scalable Bloom Filter is a variant of Bloom Filters that can adapt dynamically to the
number of elements stored, while assuring a maximum false positive probability
 *
 * Reference: ALMEIDA, Paulo Sérgio, BAQUERO, Carlos, PREGUIÇA, Nuno, et al. Scalable bloom filters. Information Processing Letters, 2007, vol. 101, no 6, p. 255-261.
 * @see {@link https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.725.390&rep=rep1&type=pdf}
 * @author Thomas Minier & Arnaud Grall
 */
var ScalableBloomFilter = /** @class */ (function (_super) {
    __extends(ScalableBloomFilter, _super);
    function ScalableBloomFilter(_initial_size, _error_rate, _ratio) {
        if (_initial_size === void 0) { _initial_size = 8; }
        if (_error_rate === void 0) { _error_rate = 0.01; }
        if (_ratio === void 0) { _ratio = 0.5; }
        var _this = _super.call(this) || this;
        /**
         * Internal Partition Bloom Filters
         */
        _this._filters = [];
        _this._initial_size = _initial_size;
        _this._error_rate = _error_rate;
        _this._ratio = _ratio;
        _this._filters.push(partitioned_bloom_filter_1.default.create(_this._initial_size, _this._error_rate, _this._ratio));
        _this._filters[_this._filters.length - 1].seed = _this.seed;
        return _this;
    }
    ScalableBloomFilter_1 = ScalableBloomFilter;
    Object.defineProperty(ScalableBloomFilter.prototype, "seed", {
        /**
         * @override
         * Return the current seed.
         * For obscure reason we must code this function...
         */
        get: function () {
            return this._seed;
        },
        /**
         * @override
         * Set the seed for this structure. If you override the seed after adding data,
         * all the filters will be updated and you may get wrong indexes for already indexed data
         * due to the seed change. So only change it once before adding data.
         * @param  seed the new seed that will be used in this structure
         */
        set: function (seed) {
            var _this = this;
            this._seed = seed;
            this._rng = (0, seedrandom_1.default)("".concat(this._seed));
            this._filters.forEach(function (filter) {
                filter.seed = _this.seed;
            });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add a new element to the filter
     * @param element
     */
    ScalableBloomFilter.prototype.add = function (element) {
        // determine if we need to create a new filter
        var currentFilter = this._filters[this._filters.length - 1];
        if (currentFilter._currentload() > currentFilter._loadFactor) {
            // create a new filter
            var newSize = this._initial_size *
                Math.pow(ScalableBloomFilter_1._s, this._filters.length + 1) *
                Math.LN2;
            var newErrorRate = this._error_rate * Math.pow(this._ratio, this._filters.length);
            this._filters.push(partitioned_bloom_filter_1.default.create(newSize, newErrorRate, this._ratio));
            this._filters[this._filters.length - 1].seed = this.seed;
        }
        // get the newly created filter
        this._filters[this._filters.length - 1].add(element);
    };
    /**
     * Return True if the element has been found, false otherwise.
     * Check until we found the value in a filter otherwise stop on the first value found.
     * @param element
     * @returns
     */
    ScalableBloomFilter.prototype.has = function (element) {
        return this._filters.some(function (filter) { return filter.has(element); });
    };
    /**
     * Return the current capacity (number of elements) of this filter
     * @returns
     */
    ScalableBloomFilter.prototype.capacity = function () {
        return this._filters.map(function (f) { return f._capacity; }).reduce(function (p, c) { return p + c; }, 0);
    };
    /**
     * Return the current false positive rate of this structure
     * @returns
     */
    ScalableBloomFilter.prototype.rate = function () {
        return this._filters[this._filters.length - 1].rate();
    };
    /**
     * Check if two ScalableBloomFilter are equal
     * @param filter
     * @returns
     */
    ScalableBloomFilter.prototype.equals = function (filter) {
        // assert the seed, the ratio and the capacity are equals
        if (this.seed !== filter.seed ||
            this._ratio !== filter._ratio ||
            this.capacity() !== filter.capacity()) {
            return false;
        }
        return this._filters.every(function (currentFilter, index) {
            return filter._filters[index].equals(currentFilter);
        });
    };
    /**
     * Create a Scalable Bloom Filter based on Partitionned Bloom Filter.
     * @param _size the starting size of the filter
     * @param _error_rate ther error rate desired of the filter
     * @param _ratio the load factor desired
     * @returns
     */
    ScalableBloomFilter.create = function (_size, _error_rate, _ratio) {
        if (_ratio === void 0) { _ratio = 0.5; }
        return new ScalableBloomFilter_1(_size, _error_rate, _ratio);
    };
    var ScalableBloomFilter_1;
    /**
     * Static value, will power the size of the new set, by default we will follow a power of 2.
     */
    ScalableBloomFilter._s = 2;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], ScalableBloomFilter.prototype, "_initial_size", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], ScalableBloomFilter.prototype, "_error_rate", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], ScalableBloomFilter.prototype, "_ratio", void 0);
    __decorate([
        (0, exportable_1.Field)(function (filters) {
            return filters.map(function (filter) { return filter.saveAsJSON(); });
        }, // eslint-disable-line @typescript-eslint/no-unsafe-return
        function (array) {
            return array.map(function (data) { return partitioned_bloom_filter_1.default.fromJSON(data); });
        }),
        __metadata("design:type", Array)
    ], ScalableBloomFilter.prototype, "_filters", void 0);
    ScalableBloomFilter = ScalableBloomFilter_1 = __decorate([
        (0, exportable_1.AutoExportable)('ScalableBloomFilter', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_initial_size')),
        __param(1, (0, exportable_1.Parameter)('_error_rate')),
        __param(2, (0, exportable_1.Parameter)('_ratio')),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ScalableBloomFilter);
    return ScalableBloomFilter;
}(base_filter_1.default));
exports["default"] = ScalableBloomFilter;


/***/ }),

/***/ 80375:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

/* file : xor-filter.ts
MIT License

Copyright (c) 2017 Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// Code inspired by the java implementation (https://github.com/FastFilter/fastfilter_java/blob/master/fastfilter/src/main/java/org/fastfilter/xor/Xor8.java)
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
var xxhashjs_1 = __importDefault(__webpack_require__(86892));
var long_1 = __importDefault(__webpack_require__(41963));
var base64_arraybuffer_1 = __webpack_require__(45809);
var CONSTANTS = new Map();
CONSTANTS.set(8, 0xff);
CONSTANTS.set(16, 0xffff);
/**
 * XOR-Filter for 8-bits and 16-bits fingerprint length.
 *
 * To use for fixed sets of elements only
 * Inspired from @see https://github.com/FastFilter/fastfilter_java
 * @author Arnaud GRALL
 * @example
 * ```js
 * const xor8 = new XorFilter(1) // default fingerprint of 8 bits
 * xor8.add(['a'])
 * xor8.has('a') // true
 * xor8.has('b') // false
 * const xor16 = new XorFilter(1, 16)
 * xor16.add(['a'])
 * xor16.has('a') // true
 * xor16.has('b') // false
 * ```
 */
var XorFilter = /** @class */ (function (_super) {
    __extends(XorFilter, _super);
    /**
     * Create an empty XorFilter for a number of `size` elements.
     * The fingerprint length can be choosen
     * @param size
     * @param bits_per_fingerprint
     */
    function XorFilter(size, bits_per_fingerprint) {
        var _this = _super.call(this) || this;
        _this.ALLOWED_FINGERPRINT_SIZES = [8, 16];
        _this.HASHES = 3;
        _this.OFFSET = 32;
        _this.FACTOR_TIMES_100 = 123;
        /**
         * Number of bits per fingerprint
         */
        _this._bits = 8;
        // try to use the Buffer class or reject by throwing an error
        if (!Buffer) {
            throw new Error(utils_1.BufferError);
        }
        if (bits_per_fingerprint) {
            if (!_this.ALLOWED_FINGERPRINT_SIZES.includes(bits_per_fingerprint)) {
                throw new Error("bits_per_fingerprint parameter must be one of: [".concat(_this.ALLOWED_FINGERPRINT_SIZES.join(','), "], got: ").concat(bits_per_fingerprint));
            }
            _this._bits = bits_per_fingerprint;
        }
        if (size <= 0) {
            throw new Error('a XorFilter must be calibrated for a given number of elements');
        }
        _this._size = size;
        var arrayLength = _this._getOptimalFilterSize(_this._size);
        _this._blockLength = arrayLength / _this.HASHES;
        _this._filter = (0, utils_1.allocateArray)(arrayLength, function () {
            return Buffer.allocUnsafe(_this._bits / 8).fill(0);
        });
        return _this;
    }
    XorFilter_1 = XorFilter;
    /**
     * Return False if the element is not in the filter, True if it might be in the set with certain probability.
     * @param element
     * @returns
     */
    XorFilter.prototype.has = function (element) {
        var hash = this._hash64(element instanceof long_1.default
            ? element
            : this._hashable_to_long(element, this.seed), this.seed);
        var fingerprint = this._fingerprint(hash).toInt();
        var r0 = long_1.default.fromInt(hash.toInt());
        var r1 = long_1.default.fromInt(hash.rotl(21).toInt());
        var r2 = long_1.default.fromInt(hash.rotl(42).toInt());
        var h0 = this._reduce(r0, this._blockLength);
        var h1 = this._reduce(r1, this._blockLength) + this._blockLength;
        var h2 = this._reduce(r2, this._blockLength) + 2 * this._blockLength;
        var l0 = this._readBuffer(this._filter[h0]);
        var l1 = this._readBuffer(this._filter[h1]);
        var l2 = this._readBuffer(this._filter[h2]);
        var xored = fingerprint ^ l0 ^ l1 ^ l2;
        var constant = CONSTANTS.get(this._bits); // eslint-disable-line @typescript-eslint/no-non-null-assertion
        return (xored & constant) === 0;
    };
    /**
     * Add elements to the filter, modify the filter in place.
     * Warning: Another call will override the previously created filter.
     * @param elements
     * @example
     * ```js
     * const xor = new XorFilter(1, 8)
     * xor.add(['alice'])
     * xor.has('alice') // true
     * xor.has('bob') // false
     * ```
     */
    XorFilter.prototype.add = function (elements) {
        if (elements.length !== this._size) {
            throw new Error("This filter has been created for exactly ".concat(this._size, " elements"));
        }
        else {
            this._create(elements, this._filter.length);
        }
    };
    /**
     * Return True if the other XorFilter is equal
     * @param filter
     * @returns
     */
    XorFilter.prototype.equals = function (filter) {
        // first check the seed
        if (this.seed !== filter.seed) {
            return false;
        }
        // check the number of bits per fingerprint used
        if (this._bits !== filter._bits) {
            return false;
        }
        // check the number of elements inserted
        if (this._size !== filter._size) {
            return false;
        }
        // now check each entry of the filter
        var broken = true;
        var i = 0;
        while (broken && i < this._filter.length) {
            if (!filter._filter[i].equals(this._filter[i])) {
                broken = false;
            }
            else {
                i++;
            }
        }
        return broken;
    };
    /**
     * Return a XorFilter for a specified set of elements
     * @param elements
     * @returns
     */
    XorFilter.create = function (elements, bits_per_fingerprint) {
        var a = new XorFilter_1(elements.length, bits_per_fingerprint);
        a.add(elements);
        return a;
    };
    // ===================================
    // ==== PRIVATE METHODS/FUNCTIONS ====
    // ===================================
    /**
     * @internal
     * @private
     * Return the optimal xor filter size
     * @param size
     * @returns
     */
    XorFilter.prototype._getOptimalFilterSize = function (size) {
        // optimal size
        var s = long_1.default.ONE.multiply(this.FACTOR_TIMES_100)
            .multiply(size)
            .divide(100)
            .add(this.OFFSET);
        // return a size which is a multiple of hashes for optimal blocklength
        return s.add(-s.mod(this.HASHES)).toInt();
    };
    /**
     * @internal
     * @private
     * Read the buffer provided as int8, int16 or int32le based on the size of the finger prints
     * @param buffer
     * @returns
     */
    XorFilter.prototype._readBuffer = function (buffer) {
        var val;
        switch (this._bits) {
            case 16:
                val = buffer.readInt16LE();
                break;
            case 8:
            default:
                val = buffer.readInt8();
                break;
        }
        return val;
    };
    /**
     * @internal
     * @private
     * Generate the fingerprint of the hash
     * @param hash hash of the element
     * @returns
     */
    XorFilter.prototype._fingerprint = function (hash) {
        return hash.and((1 << this._bits) - 1);
    };
    /**
     * @internal
     * @private
     * Transform any HashableInput into its Long representation
     * @param element
     * @param seed
     * @returns
     */
    XorFilter.prototype._hashable_to_long = function (element, seed) {
        return long_1.default.fromString(xxhashjs_1.default.h64(element, seed).toString(10), 10);
    };
    /**
     * @internal
     * @private
     * Hash a long into a Long
     * @param element
     * @returns
     */
    XorFilter.prototype._hash64 = function (element, seed) {
        var h = element.add(seed);
        h = h
            .xor(h.shiftRightUnsigned(33))
            .multiply(long_1.default.fromString('0xff51afd7ed558ccd', 16));
        h = h = h
            .xor(h.shiftRightUnsigned(33))
            .multiply(long_1.default.fromString('0xc4ceb9fe1a85ec53', 16));
        h = h.xor(h.shiftRightUnsigned(33));
        return h;
    };
    /**
     * Perform a modulo reduction using an optimiaze technique
     * @param hash
     * @param size
     * @returns
     */
    XorFilter.prototype._reduce = function (hash, size) {
        // http://lemire.me/blog/2016/06/27/a-fast-alternative-to-the-modulo-reduction/
        return hash
            .and(long_1.default.fromString('0xffffffff', 16))
            .multiply(size)
            .shiftRightUnsigned(32)
            .toInt();
    };
    /**
     * Hash the element
     * @param element
     * @param seed
     * @returns
     */
    XorFilter.prototype._getHash = function (element, seed, index) {
        var hash = this._hash64(element, seed);
        var r = hash.rotl(21 * index);
        var rn = this._reduce(r, this._blockLength);
        var sum = rn + index * this._blockLength;
        return sum;
    };
    /**
     * Create the filter representing the elements to store.
     * We eliminate all duplicated entries before creating the array.
     * Follow the algorithm 2 and 3 of the paper (@see https://arxiv.org/pdf/1912.08258.pdf)
     * Inspired by Go impl from (@see https://github.com/FastFilter/xorfilter/blob/master/xorfilter.go)
     * @param elements array of elements to add in the filter
     * @param arraylength length of the filter
     * @returns
     */
    XorFilter.prototype._create = function (elements, arrayLength) {
        var _this = this;
        var reverseOrder = (0, utils_1.allocateArray)(this._size, long_1.default.ZERO);
        var reverseH = (0, utils_1.allocateArray)(this._size, 0);
        var reverseOrderPos;
        var _loop_1 = function () {
            this_1.seed = this_1.nextInt32();
            var t2count = (0, utils_1.allocateArray)(arrayLength, 0);
            var t2 = (0, utils_1.allocateArray)(arrayLength, long_1.default.ZERO);
            elements
                .map(function (k) {
                if (k instanceof long_1.default) {
                    return k;
                }
                else {
                    return _this._hashable_to_long(k, _this.seed);
                }
            })
                .forEach(function (k) {
                for (var hi = 0; hi < _this.HASHES; hi++) {
                    var h = _this._getHash(k, _this.seed, hi);
                    t2[h] = t2[h].xor(k);
                    if (t2count[h] > 120) {
                        // probably something wrong with the hash function
                        throw new Error("Probably something wrong with the hash function, t2count[".concat(h, "]=").concat(t2count[h]));
                    }
                    t2count[h]++;
                }
            });
            reverseOrderPos = 0;
            var alone = (0, utils_1.allocateArray)(this_1.HASHES, function () {
                return (0, utils_1.allocateArray)(_this._blockLength, 0);
            });
            var alonePos = (0, utils_1.allocateArray)(this_1.HASHES, 0);
            for (var nextAlone = 0; nextAlone < this_1.HASHES; nextAlone++) {
                for (var i_1 = 0; i_1 < this_1._blockLength; i_1++) {
                    if (t2count[nextAlone * this_1._blockLength + i_1] === 1) {
                        alone[nextAlone][alonePos[nextAlone]++] =
                            nextAlone * this_1._blockLength + i_1;
                    }
                }
            }
            var found = -1;
            var i = 0;
            while (i !== -1) {
                i = -1;
                for (var hi = 0; hi < this_1.HASHES; hi++) {
                    if (alonePos[hi] > 0) {
                        i = alone[hi][--alonePos[hi]];
                        found = hi;
                        break;
                    }
                }
                if (i === -1) {
                    // no entry found
                    break;
                }
                if (t2count[i] <= 0) {
                    continue;
                }
                var k = t2[i];
                if (t2count[i] !== 1) {
                    throw new Error('At this step, the count must not be different of 1');
                }
                --t2count[i];
                for (var hi = 0; hi < this_1.HASHES; hi++) {
                    if (hi !== found) {
                        var h = this_1._getHash(k, this_1.seed, hi);
                        var newCount = --t2count[h];
                        if (newCount === 1) {
                            alone[hi][alonePos[hi]++] = h;
                        }
                        t2[h] = t2[h].xor(k);
                    }
                }
                reverseOrder[reverseOrderPos] = k;
                reverseH[reverseOrderPos] = found;
                reverseOrderPos++;
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (reverseOrderPos !== this._size);
        for (var i = reverseOrderPos - 1; i >= 0; i--) {
            var k = reverseOrder[i];
            var found = reverseH[i];
            var change = -1;
            var hash = this._hash64(k, this.seed);
            var xor = this._fingerprint(hash).toInt();
            for (var hi = 0; hi < this.HASHES; hi++) {
                var h = this._getHash(k, this.seed, hi);
                if (found === hi) {
                    change = h;
                }
                else {
                    xor ^= this._readBuffer(this._filter[h]);
                }
            }
            // the value is in 32 bits format, so we must cast it to the desired number of bytes
            var buf = Buffer.from((0, utils_1.allocateArray)(4, 0));
            buf.writeInt32LE(xor);
            this._filter[change] = buf.slice(0, this._bits / 8);
        }
    };
    var XorFilter_1;
    __decorate([
        (0, exportable_1.Field)(function (d) { return d.map(base64_arraybuffer_1.encode); }, function (d) { return d.map(function (e) { return Buffer.from((0, base64_arraybuffer_1.decode)(e)); }); }),
        __metadata("design:type", Array)
    ], XorFilter.prototype, "_filter", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Object)
    ], XorFilter.prototype, "_bits", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], XorFilter.prototype, "_size", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], XorFilter.prototype, "_blockLength", void 0);
    XorFilter = XorFilter_1 = __decorate([
        (0, exportable_1.AutoExportable)('XorFilter', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_size')),
        __param(1, (0, exportable_1.Parameter)('_bits')),
        __metadata("design:paramtypes", [Number, Number])
    ], XorFilter);
    return XorFilter;
}(base_filter_1.default));
exports["default"] = XorFilter;


/***/ }),

/***/ 35754:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : bucket.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var lodash_1 = __webpack_require__(16991);
var utils = __importStar(__webpack_require__(74409));
var exportable_1 = __webpack_require__(18677);
var exportable_2 = __webpack_require__(18677);
/**
 * A Bucket is a container of a fixed number of values, used in various bloom filters.
 * @extends Exportable
 * @author Thomas Minier
 * @private
 */
var Bucket = /** @class */ (function () {
    /**
     * Constructor
     * @param size - The maximum number of elements in the bucket
     */
    function Bucket(size) {
        this._elements = utils.allocateArray(size, null);
        this._size = size;
        this._length = 0;
    }
    Bucket_1 = Bucket;
    Object.defineProperty(Bucket.prototype, "size", {
        /**
         * Get the maximum number of element in the bucket
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bucket.prototype, "length", {
        /**
         * Get the number of elements currenlty in the bucket
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Test if the bucket has any space available
     * @return True if te bucket has any space available, False if if its full
     */
    Bucket.prototype.isFree = function () {
        return this._length < this._size;
    };
    /**
     * Get the index of the first empty slot in the bucket
     * @return The index of the first empty slot, or -1 if the bucket is full
     */
    Bucket.prototype.nextEmptySlot = function () {
        return (0, lodash_1.indexOf)(this._elements, null);
    };
    /**
     * Get the element at the given index in the bucket
     * @param index - The index to access
     * @return The element at the given index
     */
    Bucket.prototype.at = function (index) {
        return this._elements[index];
    };
    /**
     * Try to add an element to the bucket
     * @param element - The element to add in the bucket
     * @return True if the insertion is a success, False if the bucket is full
     */
    Bucket.prototype.add = function (element) {
        if (element === null || !this.isFree()) {
            return false;
        }
        this.set(this.nextEmptySlot(), element);
        this._length++;
        return true;
    };
    /**
     * Try to remove an element from the bucket
     * @param element - The element to remove from the bucket
     * @return True if the element has been successfully removed, False if it was not in the bucket
     */
    Bucket.prototype.remove = function (element) {
        var index = (0, lodash_1.indexOf)(this._elements, element);
        if (index <= -1) {
            return false;
        }
        this.unset(index);
        return true;
    };
    /**
     * Test an element for membership
     * @param element - The element to look for in the bucket
     * @return True is the element is in the bucket, otherwise False
     */
    Bucket.prototype.has = function (element) {
        return (0, lodash_1.indexOf)(this._elements, element) > -1;
    };
    /**
     * Set an element at the given index in the bucket
     * @param index - The index at where the element should be inserted
     * @param element - The element to insert
     */
    Bucket.prototype.set = function (index, element) {
        this._elements[index] = element;
    };
    /**
     * Unset the element at the given index
     * @param index - The index of the element that should be unset
     */
    Bucket.prototype.unset = function (index) {
        this._elements[index] = null;
        this._length--;
    };
    /**
     * Randomly swap an element of the bucket with a given element, then return the replaced element
     * @param element - The element to be inserted
     * @param random - Factory function used to generate random function
     * @return The element that have been swapped with the parameter
     */
    Bucket.prototype.swapRandom = function (element, random) {
        if (random === void 0) { random = Math.random; }
        var index = utils.randomInt(0, this._length - 1, random);
        var tmp = this._elements[index];
        this._elements[index] = element;
        return tmp;
    };
    /**
     * Swap an element of the bucket with a given index and element, then return the replaced element
     * @param index - The index at where the element should be inserted
     * @param element - The element to be inserted
     * @return The element that have been swapped with the parameter
     */
    Bucket.prototype.swap = function (index, element) {
        var tmp = this._elements[index];
        this._elements[index] = element;
        return tmp;
    };
    /**
     * Test if two buckets are equals: they have the same size, length and content
     * @param bucket - The other bucket with which to compare
     * @return True if the two buckets are equals, False otherwise
     */
    Bucket.prototype.equals = function (bucket) {
        if (this._size !== bucket.size || this._length !== bucket.length)
            return false;
        return this._elements.every(function (elt, index) { return (0, lodash_1.eq)(bucket.at(index), elt); });
    };
    var Bucket_1;
    Bucket = Bucket_1 = __decorate([
        (0, exportable_1.Exportable)({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            export: (0, exportable_2.cloneObject)('Bucket', '_size', '_elements'),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            import: function (json) {
                if ((json.type !== 'Bucket' || !('_size' in json), !('_elements' in json)) // eslint-disable-line @typescript-eslint/no-unsafe-member-access
                ) {
                    throw new Error('Cannot create a Bucket from a JSON export which does not represent a bucket');
                }
                var bucket = new Bucket_1(json._size); // eslint-disable-line @typescript-eslint/no-unsafe-member-access
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                json._elements.forEach(function (elt, i) {
                    if (elt !== null) {
                        bucket._elements[i] = elt;
                        bucket._length++;
                    }
                });
                return bucket;
            },
        }),
        __metadata("design:paramtypes", [Number])
    ], Bucket);
    return Bucket;
}());
exports["default"] = Bucket;


/***/ }),

/***/ 18900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : cuckoo-filter.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var bucket_1 = __importDefault(__webpack_require__(35754));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
/**
 * Compute the optimal fingerprint length in bytes for a given bucket size
 * and a false positive rate.
 * @param  {int} size - The filter bucket size
 * @param  {int} rate - The error rate, i.e. 'false positive' rate, targetted by the filter
 * @return {int} The optimal fingerprint length in bytes
 * @private
 */
function computeFingerpintLength(size, rate) {
    var f = Math.ceil(Math.log2(1 / rate) + Math.log2(2 * size));
    return Math.ceil(f / 8); // because we use 64-bits hashes
}
/**
 * Cuckoo filters improve on Bloom filters by supporting deletion, limited counting,
 * and bounded False positive rate with similar storage efficiency as a standard Bloom filter.
 *
 * Reference: Fan, B., Andersen, D. G., Kaminsky, M., & Mitzenmacher, M. D. (2014, December). Cuckoo filter: Practically better than bloom.
 * In Proceedings of the 10th ACM International on Conference on emerging Networking Experiments and Technologies (pp. 75-88). ACM.
 * @see {@link https://www.cs.cmu.edu/~dga/papers/cuckoo-conext2014.pdf} for more details about Cuckoo filters
 * @author Thomas Minier & Arnaud Grall
 */
var CuckooFilter = /** @class */ (function (_super) {
    __extends(CuckooFilter, _super);
    /**
     * Constructor
     * @param size - The filter size
     * @param fLength - The length of the fingerprints
     * @param bucketSize - The size of the buckets in the filter
     * @param maxKicks - (optional) The max number of kicks when resolving collision at insertion, default to 1
     */
    function CuckooFilter(size, fLength, bucketSize, maxKicks) {
        if (maxKicks === void 0) { maxKicks = 500; }
        var _this = _super.call(this) || this;
        _this._filter = (0, utils_1.allocateArray)(size, function () { return new bucket_1.default(bucketSize); });
        _this._size = size;
        _this._bucketSize = bucketSize;
        _this._fingerprintLength = fLength;
        _this._length = 0;
        _this._maxKicks = maxKicks;
        return _this;
    }
    CuckooFilter_1 = CuckooFilter;
    /**
     * Return a new optimal CuckooFilter given the number of maximum elements to store and the error rate desired
     * @param  size - The number of items to store
     * @param  errorRate - The desired error rate
     * @param  bucketSize - The number of buckets desired per cell
     * @param  maxKicks - The number of kicks done when a collision occurs
     * @return A Cuckoo Filter optimal for these parameters
     */
    CuckooFilter.create = function (size, errorRate, bucketSize, maxKicks) {
        if (bucketSize === void 0) { bucketSize = 4; }
        if (maxKicks === void 0) { maxKicks = 500; }
        var fl = computeFingerpintLength(bucketSize, errorRate);
        var capacity = Math.ceil(size / bucketSize / 0.955);
        return new CuckooFilter_1(capacity, fl, bucketSize, maxKicks);
    };
    /**
     * Build a new optimal CuckooFilter from an iterable with a fixed error rate
     * @param items - Iterable used to populate the filter
     * @param errorRate - The error rate of the filter
     * @param  bucketSize - The number of buckets desired per cell
     * @param  maxKicks - The number of kicks done when a collision occurs
     * @return A new Cuckoo Filter filled with the iterable's elements
     */
    CuckooFilter.from = function (items, errorRate, bucketSize, maxKicks) {
        if (bucketSize === void 0) { bucketSize = 4; }
        if (maxKicks === void 0) { maxKicks = 500; }
        var array = Array.from(items);
        var filter = CuckooFilter_1.create(array.length, errorRate, bucketSize, maxKicks);
        array.forEach(function (item) { return filter.add(item); });
        return filter;
    };
    Object.defineProperty(CuckooFilter.prototype, "size", {
        /**
         * Get the filter size
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CuckooFilter.prototype, "fullSize", {
        /**
         * Get the filter full size, i.e., the total number of cells
         */
        get: function () {
            return this.size * this.bucketSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CuckooFilter.prototype, "length", {
        /**
         * Get the filter length, i.e. the current number of elements in the filter
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CuckooFilter.prototype, "fingerprintLength", {
        /**
         * Get the length of the fingerprints in the filter
         */
        get: function () {
            return this._fingerprintLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CuckooFilter.prototype, "bucketSize", {
        /**
         * Get the size of the buckets in the filter
         */
        get: function () {
            return this._bucketSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CuckooFilter.prototype, "maxKicks", {
        /**
         * Get the max number of kicks when resolving collision at insertion
         */
        get: function () {
            return this._maxKicks;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an element to the filter, if false is returned, it means that the filter is considered as full.
     * @param element - The element to add
     * @return True if the insertion is a success, False if the filter is full
     * @example
     * ```js
     * const filter = new CuckooFilter(15, 3, 2);
     * filter.add('alice');
     * filter.add('bob');
     * ```
     */
    CuckooFilter.prototype.add = function (element, throwError, destructive) {
        if (throwError === void 0) { throwError = false; }
        if (destructive === void 0) { destructive = false; }
        // TODO do the recovery if return false or throw error because we altered values
        var locations = this._locations(element);
        // store fingerprint in an available empty bucket
        if (this._filter[locations.firstIndex].isFree()) {
            this._filter[locations.firstIndex].add(locations.fingerprint);
        }
        else if (this._filter[locations.secondIndex].isFree()) {
            this._filter[locations.secondIndex].add(locations.fingerprint);
        }
        else {
            // buckets are full, we must relocate one of them
            var index = this.random() < 0.5 ? locations.firstIndex : locations.secondIndex;
            var movedElement = locations.fingerprint;
            var logs = [];
            for (var nbTry = 0; nbTry < this._maxKicks; nbTry++) {
                var rndIndex = (0, utils_1.randomInt)(0, this._filter[index].length - 1, this.random);
                var tmp = this._filter[index].at(rndIndex); // eslint-disable-line @typescript-eslint/no-non-null-assertion
                logs.push([index, rndIndex, tmp]);
                this._filter[index].set(rndIndex, movedElement);
                movedElement = tmp;
                // movedElement = this._filter[index].set(rndswapRandom(movedElement, this._rng)
                var newHash = this._hashing.hashAsInt(movedElement, this.seed);
                index = Math.abs(index ^ Math.abs(newHash)) % this._filter.length;
                // add the moved element to the bucket if possible
                if (this._filter[index].isFree()) {
                    this._filter[index].add(movedElement);
                    this._length++;
                    return true;
                }
            }
            if (!destructive) {
                // rollback all modified entries to their initial states
                for (var i = logs.length - 1; i >= 0; i--) {
                    var log = logs[i];
                    this._filter[log[0]].set(log[1], log[2]);
                }
            }
            // considered full
            if (throwError) {
                // rollback all operations
                throw new Error("The Cuckoo Filter is full, cannot insert element \"".concat(element, "\"") // eslint-disable-line @typescript-eslint/restrict-template-expressions
                );
            }
            else {
                return false;
            }
        }
        this._length++;
        return true;
    };
    /**
     * Remove an element from the filter
     * @param element - The element to remove
     * @return True if the element has been removed from the filter, False if it wasn't in the filter
     * @example
     * ```js
     * const filter = new CuckooFilter(15, 3, 2);
     * filter.add('alice');
     * filter.add('bob');
     *
     * // remove an element
     * filter.remove('bob');
     * ```
     */
    CuckooFilter.prototype.remove = function (element) {
        var locations = this._locations(element);
        if (this._filter[locations.firstIndex].has(locations.fingerprint)) {
            this._filter[locations.firstIndex].remove(locations.fingerprint);
            this._length--;
            return true;
        }
        else if (this._filter[locations.secondIndex].has(locations.fingerprint)) {
            this._filter[locations.secondIndex].remove(locations.fingerprint);
            this._length--;
            return true;
        }
        return false;
    };
    /**
     * Test an element for membership
     * @param element - The element to look for in the filter
     * @return False if the element is definitively not in the filter, True is the element might be in the filter
     * @example
     * ```js
     * const filter = new CuckooFilter(15, 3, 2);
     * filter.add('alice');
     *
     * console.log(filter.has('alice')); // output: true
     * console.log(filter.has('bob')); // output: false
     * ```
     */
    CuckooFilter.prototype.has = function (element) {
        var locations = this._locations(element);
        return (this._filter[locations.firstIndex].has(locations.fingerprint) ||
            this._filter[locations.secondIndex].has(locations.fingerprint));
    };
    /**
     * Return the false positive rate for this cuckoo filter
     * @return The false positive rate
     */
    CuckooFilter.prototype.rate = function () {
        var load = this._computeHashTableLoad();
        var c = this._fingerprintLength / load.load;
        return Math.pow(2, Math.log2(2 * this._bucketSize) - load.load * c);
    };
    /**
     * Return the load of this filter
     * @return {Object} load: is the load, size is the number of entries, free is the free number of entries, used is the number of entry used
     */
    CuckooFilter.prototype._computeHashTableLoad = function () {
        var max = this._filter.length * this._bucketSize;
        var used = this._filter.reduce(function (acc, val) { return acc + val.length; }, 0);
        return {
            used: used,
            free: max - used,
            size: max,
            load: used / max,
        };
    };
    /**
     * For a element, compute its fingerprint and the index of its two buckets
     * @param element - The element to hash
     * @return The fingerprint of the element and the index of its two buckets
     * @private
     */
    CuckooFilter.prototype._locations = function (element) {
        var hashes = this._hashing.hashIntAndString(element, this.seed);
        var hash = hashes.int;
        if (this._fingerprintLength > hashes.string.length) {
            throw new Error("The fingerprint length (".concat(this._fingerprintLength, ") is higher than the hash length (").concat(hashes.string.length, "). Please reduce the fingerprint length or report if it is an unexpected behavior."));
        }
        var fingerprint = hashes.string.substring(0, this._fingerprintLength);
        var firstIndex = Math.abs(hash);
        var secondHash = Math.abs(this._hashing.hashAsInt(fingerprint, this.seed));
        var secondIndex = Math.abs(firstIndex ^ secondHash);
        var res = {
            fingerprint: fingerprint,
            firstIndex: firstIndex % this._size,
            secondIndex: secondIndex % this._size,
        };
        return res;
    };
    /**
     * Check if another Cuckoo filter is equal to this one
     * @param  filter - The cuckoo filter to compare to this one
     * @return True if they are equal, false otherwise
     */
    CuckooFilter.prototype.equals = function (filter) {
        var i = 0;
        var res = true;
        while (res && i < this._filter.length) {
            var bucket = this._filter[i];
            if (!filter._filter[i].equals(bucket)) {
                res = false;
            }
            i++;
        }
        return res;
    };
    var CuckooFilter_1;
    CuckooFilter = CuckooFilter_1 = __decorate([
        (0, exportable_1.Exportable)({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            export: (0, exportable_1.cloneObject)('CuckooFilter', '_size', '_fingerprintLength', '_length', '_maxKicks', '_filter', '_seed'),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            import: function (json) {
                /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
                if (json.type !== 'CuckooFilter' ||
                    !('_size' in json) ||
                    !('_fingerprintLength' in json) ||
                    !('_length' in json) ||
                    !('_maxKicks' in json) ||
                    !('_filter' in json) ||
                    !('_seed' in json)) {
                    throw new Error('Cannot create a CuckooFilter from a JSON export which does not represent a cuckoo filter');
                }
                var filter = new CuckooFilter_1(json._size, json._fingerprintLength, json._bucketSize, json._maxKicks);
                filter._length = json._length;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                filter._filter = json._filter.map(function (j) {
                    var bucket = new bucket_1.default(j._size);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    j._elements.forEach(function (elt, i) {
                        if (elt !== null) {
                            bucket._elements[i] = elt;
                            bucket._length++;
                        }
                    });
                    return bucket;
                });
                filter.seed = json.seed;
                return filter;
                /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
            },
        }),
        __metadata("design:paramtypes", [Number, Number, Number, Object])
    ], CuckooFilter);
    return CuckooFilter;
}(base_filter_1.default));
exports["default"] = CuckooFilter;


/***/ }),

/***/ 18677:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : exportable.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// !disable all rules referring to `any` for exportable because we are dealing with all types so any is allowed
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoExportable = exports.Parameter = exports.Field = exports.Exportable = exports.cloneObject = exports.cloneField = void 0;
__webpack_require__(83954);
/**
 * Clone a field of a filter (array, object or any primary type)
 * @param  {*} v - Value to clone
 * @return {*} Cloned value
 */
function cloneField(v) {
    if (v === null || v === undefined) {
        return v;
    }
    if (Array.isArray(v)) {
        return v.map(cloneField);
    }
    else if (typeof v === 'object') {
        if ('saveAsJSON' in v) {
            return v.saveAsJSON();
        }
        return Object.assign({}, v);
    }
    return v;
}
exports.cloneField = cloneField;
/**
 * Get a function used to clone an object
 * @param type - Object type
 * @param fields - Object's fields to clone
 * @return A function that clones the given fields of an input object
 */
function cloneObject(type) {
    var fields = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fields[_i - 1] = arguments[_i];
    }
    return function (obj) {
        var json = { type: type };
        fields.forEach(function (field) {
            json[field] = cloneField(obj[field]);
        });
        return json;
    };
}
exports.cloneObject = cloneObject;
/**
 * Turn a datastructure into an exportable one, so it can be serialized from/to JSON objects.
 * @param specs - An object that describes how the datastructure should be exported/imported
 * @author Thomas Minier
 */
function Exportable(specs) {
    return function (target) {
        target.prototype.saveAsJSON = function () {
            return specs.export(this);
        };
        target.fromJSON = function (json) {
            return specs.import(json);
        };
        return target;
    };
}
exports.Exportable = Exportable;
var METADATA_CLASSNAME = Symbol('bloom-filters:exportable:class-name');
var METADATA_FIELDS = Symbol('bloom-filters:exportable:fields');
var METADATA_PARAMETERS = Symbol('bloom-filters:exportable:constructor-parameters');
/**
 * Register a field to be exportable/importable
 * @param importer - Function invoked on the JSON field to convert it into JavaScript
 */
function Field(exporter, importer) {
    if (exporter === undefined) {
        exporter = cloneField;
    }
    if (importer === undefined) {
        importer = function (v) { return v; };
    }
    return function (target, propertyKey) {
        var fields = [];
        if (globalThis.ReflectMetadata.hasMetadata(METADATA_FIELDS, target)) {
            fields = globalThis.ReflectMetadata.getMetadata(METADATA_FIELDS, target);
        }
        fields.push({
            name: propertyKey,
            exporter: exporter,
            importer: importer, // eslint-disable-line @typescript-eslint/no-non-null-assertion
        });
        globalThis.ReflectMetadata.defineMetadata(METADATA_FIELDS, fields, target);
    };
}
exports.Field = Field;
function Parameter(fieldName) {
    return function (target, propertyKey, parameterIndex) {
        var parameters = new Map();
        if (globalThis.ReflectMetadata.hasMetadata(METADATA_PARAMETERS, target)) {
            parameters = globalThis.ReflectMetadata.getMetadata(METADATA_PARAMETERS, target);
        }
        parameters.set(fieldName, parameterIndex);
        globalThis.ReflectMetadata.defineMetadata(METADATA_PARAMETERS, parameters, target);
    };
}
exports.Parameter = Parameter;
/**
 * Augment a TypeScript class to make it exportable/importable, using @Field and @Parameter decorator
 * @param className - Name of the exportable/importable class
 */
function AutoExportable(className, otherFields) {
    if (otherFields === void 0) { otherFields = []; }
    return function (target) {
        globalThis.ReflectMetadata.defineMetadata(METADATA_CLASSNAME, className, target.prototype);
        if (!globalThis.ReflectMetadata.hasMetadata(METADATA_FIELDS, target.prototype) ||
            otherFields.length === 0) {
            throw new SyntaxError('No exported fields declared when @AutoExportable is called');
        }
        // define empty parameters map, for object with a constructor without parameters
        if (!globalThis.ReflectMetadata.hasMetadata(METADATA_PARAMETERS, target)) {
            globalThis.ReflectMetadata.defineMetadata(METADATA_PARAMETERS, new Map(), target);
        }
        target.prototype.saveAsJSON = function () {
            var _this = this;
            var json = {
                type: globalThis.ReflectMetadata.getMetadata(METADATA_CLASSNAME, target.prototype),
            };
            // export fields defined using the @Field decorator
            var fields = globalThis.ReflectMetadata.getMetadata(METADATA_FIELDS, target.prototype);
            fields.forEach(function (field) {
                json[field.name] = field.exporter(_this[field.name]);
            });
            // export fields declared through the otherFields parameter
            otherFields.forEach(function (field) {
                json[field] = cloneField(_this[field]);
            });
            return json;
        };
        target.fromJSON = function (json) {
            var className = globalThis.ReflectMetadata.getMetadata(METADATA_CLASSNAME, target.prototype);
            var parameters = globalThis.ReflectMetadata.getMetadata(METADATA_PARAMETERS, target);
            var fields = globalThis.ReflectMetadata.getMetadata(METADATA_FIELDS, target.prototype);
            // validate the input JSON
            if (json.type !== className) {
                throw new Error("Cannot create an object ".concat(className, " from a JSON export with type \"").concat(json.type, "\"") // eslint-disable-line @typescript-eslint/restrict-template-expressions
                );
            }
            var constructorArgs = [];
            var copyFields = [];
            otherFields
                .map(function (name) { return ({ name: name, importer: function (v) { return v; } }); })
                .concat(fields)
                .forEach(function (field) {
                if (!(field.name in json)) {
                    throw new Error("Invalid import: required field \"".concat(field, "\" not found in JSON export \"").concat(json, "\"") // eslint-disable-line @typescript-eslint/restrict-template-expressions
                    );
                }
                // build constructor/copy arguments
                if (parameters.has(field.name)) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    constructorArgs[parameters.get(field.name)] = field.importer(json[field.name]);
                }
                else {
                    copyFields.push({
                        name: field.name,
                        value: field.importer(json[field.name]),
                    });
                }
            });
            // build new object
            var obj = new (target.bind.apply(target, __spreadArray([void 0], __read(constructorArgs), false)))();
            // write non-constructor exported fields
            copyFields.forEach(function (arg) {
                obj[arg.name] = arg.value;
            });
            return obj;
        };
    };
}
exports.AutoExportable = AutoExportable;


/***/ }),

/***/ 35081:
/***/ ((__unused_webpack_module, exports) => {


/* file : formulas.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.optimalHashes = exports.optimalFilterSize = void 0;
/**
 * Various formulas used with Bloom Filters
 * @namespace Formulas
 * @private
 */
/**
 * Compute the optimal size of a Bloom Filter
 * @param  length - The length of the set used to fill the filter
 * @param  errorRate - The targeted false positive rate
 * @return The optimal size of a Bloom Filter
 * @memberof Formulas
 */
function optimalFilterSize(length, errorRate) {
    return Math.ceil(-((length * Math.log(errorRate)) / Math.pow(Math.log(2), 2)));
}
exports.optimalFilterSize = optimalFilterSize;
/**
 * Compute the optimal number of hash functions to be used by a Bloom Filter
 * @param  size - The size of the filter
 * @param  length - The length of the set used to fill the filter
 * @return The optimal number of hash functions to be used by a Bloom Filter
 * @memberof Formulas
 */
function optimalHashes(size, length) {
    return Math.ceil((size / length) * Math.log(2));
}
exports.optimalHashes = optimalHashes;


/***/ }),

/***/ 94511:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(74409);
var hashing_1 = __importDefault(__webpack_require__(78416));
/**
 * @deprecated
 * Hashing class to use before v1.3.7
 */
var DeprecatedHashing = /** @class */ (function (_super) {
    __extends(DeprecatedHashing, _super);
    function DeprecatedHashing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Apply Double Hashing to produce a n-hash
         * @param  n - The indice of the hash function we want to produce
         * @param  hashA - The result of the first hash function applied to a value.
         * @param  hashB - The result of the second hash function applied to a value.
         * @param  size - The size of the datastructures associated to the hash context (ex: the size of a Bloom Filter)
         * @return The result of hash_n applied to a value.
         * @returns
         */
        _this.doubleHashing = function (n, hashA, hashB, size) {
            return Math.abs((hashA + n * hashB) % size);
        };
        return _this;
    }
    /**
     * Generate N indexes on range [0, size)
     * It uses the double hashing technique to generate the indexes.
     * It hash twice the value only once before generating the indexes.
     * Warning: you can have a lot of modulo collisions.
     * @param  element    - The element to hash
     * @param  size       - The range on which we can generate the index, exclusive
     * @param  hashCount  - The number of indexes we want
     * @return An array of indexes on range [0, size)
     */
    DeprecatedHashing.prototype.getIndexes = function (element, size, hashCount, seed) {
        return this.getDistinctIndexes(element, size, hashCount, seed);
    };
    /**
     * Generate a set of distinct indexes on interval [0, size) using the double hashing technique
     * This function is the old method called by a lot of filters.
     * To work in the current version, replace, the getIndexes function of the filters by this one
     * @param  element  - The element to hash
     * @param  size     - the range on which we can generate an index [0, size) = size
     * @param  number   - The number of indexes desired
     * @param  seed     - The seed used
     * @return A array of indexes
     * @author Arnaud Grall
     */
    DeprecatedHashing.prototype.getDistinctIndexes = function (element, size, number, seed) {
        var _this = this;
        if (seed === undefined) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        var getDistinctIndicesBis = function (n, elem, size, count, indexes) {
            if (indexes === void 0) { indexes = []; }
            if (indexes.length === count) {
                return indexes;
            }
            else {
                var hashes = _this.hashTwice(elem, seed + (size % n)); // eslint-disable-line @typescript-eslint/no-non-null-assertion
                var ind = _this.doubleHashing(n, hashes.first, hashes.second, size);
                if (indexes.includes(ind)) {
                    // console.log('generate index: %d for %s', ind, elem)
                    return getDistinctIndicesBis(n + 1, elem, size, count, indexes);
                }
                else {
                    // console.log('already found: %d for %s', ind, elem)
                    indexes.push(ind);
                    return getDistinctIndicesBis(n + 1, elem, size, count, indexes);
                }
            }
        };
        return getDistinctIndicesBis(1, element, size, number);
    };
    return DeprecatedHashing;
}(hashing_1.default));
exports["default"] = DeprecatedHashing;


/***/ }),

/***/ 78416:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var xxhashjs_1 = __importDefault(__webpack_require__(86892));
var utils_1 = __webpack_require__(74409);
var Hashing = /** @class */ (function () {
    function Hashing() {
    }
    /**
     * Apply enhanced Double Hashing to produce a n-hash
     * @see {@link http://peterd.org/pcd-diss.pdf} s6.5.4
     * @param  n - The indice of the hash function we want to produce
     * @param  hashA - The result of the first hash function applied to a value.
     * @param  hashB - The result of the second hash function applied to a value.
     * @param  size - The size of the datastructures associated to the hash context (ex: the size of a Bloom Filter)
     * @return The result of hash_n applied to a value.
     * @memberof Hashing
     * @author Thomas Minier
     * @author Arnaud Grall
     */
    Hashing.prototype.doubleHashing = function (n, hashA, hashB, size) {
        return Math.abs((hashA + n * hashB + Math.floor((Math.pow(n, 3) - n) / 6)) % size);
    };
    /**
     * Generate a set of distinct indexes on interval [0, size) using the double hashing technique
     * For generating efficiently distinct indexes we re-hash after detecting a cycle by changing slightly the seed.
     * It has the effect of generating faster distinct indexes without loosing entirely the utility of the double hashing.
     * For small number of indexes it will work perfectly. For a number close to the size, and size very large
     * Advise: do not generate `size` indexes for a large interval. In practice, size should be equal
     * to the number of hash functions used and is often low.
     *
     * @param  element  - The element to hash
     * @param  size     - the range on which we can generate an index [0, size) = size
     * @param  number   - The number of indexes desired
     * @param  seed     - The seed used
     * @return Array<number>
     * @author Arnaud Grall
     * @author Simon Woolf (SimonWoolf)
     */
    Hashing.prototype.getDistinctIndexes = function (element, size, number, seed) {
        if (seed === undefined) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        var n = 0;
        var indexes = new Set();
        var hashes = this.hashTwice(element, seed);
        // let cycle = 0
        while (indexes.size < number) {
            var ind = hashes.first % size;
            if (!indexes.has(ind)) {
                indexes.add(ind);
            }
            hashes.first = (hashes.first + hashes.second) % size;
            hashes.second = (hashes.second + n) % size;
            n++;
            if (n > size) {
                // Enhanced double hashing stops cycles of length less than `size` in the case where
                // size is coprime with the second hash. But you still get cycles of length `size`.
                // So if we reach there and haven't finished, append a prime to the input and
                // rehash.
                seed++;
                hashes = this.hashTwice(element, seed);
            }
        }
        return __spreadArray([], __read(indexes.values()), false);
    };
    /**
     * Generate N indexes on range [0, size)
     * It uses the double hashing technique to generate the indexes.
     * It hash twice the value only once before generating the indexes.
     * Warning: you can have a lot of modulo collisions.
     * @param  element    - The element to hash
     * @param  size       - The range on which we can generate the index, exclusive
     * @param  hashCount  - The number of indexes we want
     * @return An array of indexes on range [0, size)
     */
    Hashing.prototype.getIndexes = function (element, size, hashCount, seed) {
        if (seed === undefined) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        var arr = [];
        var hashes = this.hashTwice(element, seed);
        for (var i = 0; i < hashCount; i++) {
            arr.push(this.doubleHashing(i, hashes.first, hashes.second, size));
        }
        return arr;
    };
    /**
     * @internal
     * Hash an element of type {@link HashableInput} into {@link Number}
     * Can be overrided as long as you return a value of type {@link Number}
     * Don't forget to use the seed when hashing, otherwise if some kind of randomness is in the process
     * you may have inconsistent behaviors between 2 runs.
     * @param element
     * @param seed
     * @returns A 64bits floating point {@link Number}
     */
    Hashing.prototype.serialize = function (element, seed) {
        if (!seed) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        return Number(xxhashjs_1.default.h64(element, seed).toNumber());
    };
    /**
     * (64-bits only) Hash a value into two values (in hex or integer format)
     * @param  value - The value to hash
     * @param  asInt - (optional) If True, the values will be returned as an integer. Otherwise, as hexadecimal values.
     * @param seed the seed used for hashing
     * @return The results of the hash functions applied to the value (in hex or integer)
     * @author Arnaud Grall & Thomas Minier
     */
    Hashing.prototype.hashTwice = function (value, seed) {
        if (seed === undefined) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        return {
            first: this.serialize(value, seed + 1),
            second: this.serialize(value, seed + 2),
        };
    };
    /**
     * Hash twice an element into their HEX string representations
     * @param value
     * @param seed
     * @returns TwoHashesTemplated<string>
     */
    Hashing.prototype.hashTwiceAsString = function (value, seed) {
        var _a = this.hashTwice(value, seed), first = _a.first, second = _a.second;
        return {
            first: (0, utils_1.numberToHex)(first),
            second: (0, utils_1.numberToHex)(second),
        };
    };
    /**
     * (64-bits only) Same as hashTwice but return Numbers and String equivalent
     * @param  val the value to hash
     * @param  seed the seed to change when hashing
     * @return TwoHashesIntAndString
     * @author Arnaud Grall
     */
    Hashing.prototype.hashTwiceIntAndString = function (val, seed) {
        if (seed === undefined) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        var one = this.hashIntAndString(val, seed + 1);
        var two = this.hashIntAndString(val, seed + 2);
        return {
            int: {
                first: one.int,
                second: two.int,
            },
            string: {
                first: one.string,
                second: two.string,
            },
        };
    };
    /**
     * Hash an item as an unsigned int
     * @param  elem - Element to hash
     * @param  seed - The hash seed. If its is UINT32 make sure to set the length to 32
     * @param  length - The length of hashes (defaults to 32 bits)
     * @return The hash value as an unsigned int
     * @author Arnaud Grall
     */
    Hashing.prototype.hashAsInt = function (elem, seed) {
        if (seed === undefined) {
            seed = (0, utils_1.getDefaultSeed)();
        }
        return this.serialize(elem, seed);
    };
    /**
     * Hash an item and return its number and HEX string representation
     * @param  elem - Element to hash
     * @param  seed - The hash seed. If its is UINT32 make sure to set the length to 32
     * @param  base - The base in which the string will be returned, default: 16
     * @param  length - The length of hashes (defaults to 32 bits)
     * @return The item hased as an int and a string
     * @author Arnaud Grall
     */
    Hashing.prototype.hashIntAndString = function (elem, seed) {
        var hash = this.hashAsInt(elem, seed);
        return { int: hash, string: (0, utils_1.numberToHex)(hash) };
    };
    return Hashing;
}());
exports["default"] = Hashing;


/***/ }),

/***/ 68885:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

/* file: cell.ts
MIT License

Copyright (c) 2019-2020 Thomas Minier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(74409);
var exportable_1 = __webpack_require__(18677);
var base_filter_1 = __importDefault(__webpack_require__(31038));
var inspect = Symbol.for('nodejs.util.inspect.custom');
/**
 * A cell is an internal datastructure of an {@link InvertibleBloomFilter}.
 * It is composed of an idSum (the XOR of all element inserted in that cell), a hashSum (the XOR of all hashed element in that cell) and a counter (the number of elements inserted in that cell).
 * @author Arnaud Grall
 * @author Thomas Minier
 */
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    /**
     * Constructor.
     * To create an empty cell, you might want to use the static Cell#empty() method.
     * @param idSum - The XOR of all element inserted in that cell
     * @param hashSum - The XOR of all hashed element in that cell
     * @param count - The number of elements inserted in that cell
     */
    function Cell(idSum, hashSum, count) {
        var _this = _super.call(this) || this;
        _this._idSum = idSum;
        _this._hashSum = hashSum;
        _this._count = count;
        return _this;
    }
    Cell_1 = Cell;
    /**
     * Create an empty cell
     * @return An empty Cell
     */
    Cell.empty = function () {
        return new Cell_1(Buffer.allocUnsafe(0).fill(0), Buffer.allocUnsafe(0).fill(0), 0);
    };
    Cell.prototype[inspect] = function () {
        return "Cell:<".concat(JSON.stringify(this._idSum.toJSON().data), ", ").concat(JSON.stringify(this._hashSum.toJSON().data), ", ").concat(this._count, ">");
    };
    Object.defineProperty(Cell.prototype, "idSum", {
        /**
         * Get the id sum of the Cell (The XOR of all element inserted in that cell)
         */
        get: function () {
            return this._idSum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "hashSum", {
        /**
         * Get the hash sum of the Cell (The XOR of all hashed element in that cell)
         */
        get: function () {
            return this._hashSum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "count", {
        /**
         * Get the number of elements inserted in that cell
         */
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an element in this cell
     * @param idSum - The element to XOR in this cell
     * @param hashSum - The hash of the element to XOR in this cell
     */
    Cell.prototype.add = function (idSum, hashSum) {
        this._idSum = (0, utils_1.xorBuffer)(this._idSum, idSum);
        this._hashSum = (0, utils_1.xorBuffer)(this._hashSum, hashSum);
        this._count++;
    };
    /**
     * Perform the XOR operation between this Cell and another one and returns a resulting Cell.
     * A XOR between two cells is the XOR between their id sum and hash sum,
     * and the difference between their count.
     * @param cell - Cell to perform XOR with
     * @return A new Cell, resulting from the XOR operation
     */
    Cell.prototype.xorm = function (cell) {
        return new Cell_1((0, utils_1.xorBuffer)(this._idSum, cell.idSum), (0, utils_1.xorBuffer)(this._hashSum, cell.hashSum), this._count - cell.count);
    };
    /**
     * Test if the Cell is empty
     * @return True if the Cell is empty, False otherwise
     */
    Cell.prototype.isEmpty = function () {
        return (this._idSum.equals(Buffer.from('')) &&
            this._hashSum.equals(Buffer.from('')) &&
            this._count === 0);
    };
    /**
     * Test if another Cell is equals to this one
     * @param  cell - The cell to compare with
     * @return True if the two Cells are equals, False otherwise
     */
    Cell.prototype.equals = function (cell) {
        return (this._count === cell.count &&
            this._idSum.equals(cell.idSum) &&
            this._hashSum.equals(cell.hashSum));
    };
    /**
     * Test if the cell is "Pure".
     * A pure cell is a cell with a counter equal to 1 or -1, and with a hash sum equal to the id sum
     * @return True if the cell ius pure, False otherwise
     */
    Cell.prototype.isPure = function () {
        // A pure cell cannot be empty or must have a count equals to 1 or -1
        if (this.isEmpty() || (this._count !== 1 && this._count !== -1)) {
            return false;
        }
        // compare the hashes
        var hashes = this._hashing.hashTwiceAsString(JSON.stringify(this._idSum.toJSON()), this.seed);
        return this._hashSum.equals(Buffer.from(hashes.first));
    };
    var Cell_1;
    __decorate([
        (0, exportable_1.Field)(function (elt) { return elt.toString(); }, Buffer.from),
        __metadata("design:type", Buffer
        // eslint-disable-next-line @typescript-eslint/unbound-method
        )
    ], Cell.prototype, "_idSum", void 0);
    __decorate([
        (0, exportable_1.Field)(function (elt) { return elt.toString(); }, Buffer.from),
        __metadata("design:type", Buffer)
    ], Cell.prototype, "_hashSum", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], Cell.prototype, "_count", void 0);
    Cell = Cell_1 = __decorate([
        (0, exportable_1.AutoExportable)('Cell', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_idSum')),
        __param(1, (0, exportable_1.Parameter)('_hashSum')),
        __param(2, (0, exportable_1.Parameter)('_count')),
        __metadata("design:paramtypes", [Buffer,
            Buffer, Number])
    ], Cell);
    return Cell;
}(base_filter_1.default));
exports["default"] = Cell;


/***/ }),

/***/ 57813:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

/* file : invertible-bloom-lookup-tables.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var cell_1 = __importDefault(__webpack_require__(68885));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
var formulas_1 = __webpack_require__(35081);
/**
 * An Invertible Bloom Lookup Table is a space-efficient and probabilistic data-structure for solving the set-difference problem efficiently without the use of logs or other prior context. It computes the set difference with communication proportional to the size of the difference between the sets being compared.
 * They can simultaneously calculate D(A−B) and D(B−A) using O(d) space. This data structure encodes sets in a fashion that is similar in spirit to Tornado codes’ construction [6], in that it randomly combines elements using the XOR function
 * Reference: Eppstein, D., Goodrich, M. T., Uyeda, F., & Varghese, G. (2011). What's the difference?: efficient set reconciliation without prior context. ACM SIGCOMM Computer Communication Review, 41(4), 218-229.
 * @see {@link http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.220.6282&rep=rep1&type=pdf} for more details about Invertible Bloom Lookup Tables
 * @author Arnaud Grall
 * @author Thomas Minier
 */
var InvertibleBloomFilter = /** @class */ (function (_super) {
    __extends(InvertibleBloomFilter, _super);
    /**
     * Construct an Invertible Bloom Lookup Table
     * @param size - The number of cells in the InvertibleBloomFilter. It should be set to d * alpha, where d is the number of difference and alpha is a constant
     * @param hashCount - The number of hash functions used (empirically studied to be 3 or 4 in most cases)
     */
    function InvertibleBloomFilter(size, hashCount) {
        if (hashCount === void 0) { hashCount = 3; }
        var _this = _super.call(this) || this;
        if (Buffer === undefined) {
            throw new Error('No native Buffer implementation bound in your JavaScript env. If you are in a Web browser, consider importing the polyfill "feross/buffer" (https://github.com/feross/buffer).');
        }
        if (hashCount <= 0) {
            throw new Error('The hashCount must be a non-zero, positive integer');
        }
        _this._size = size;
        _this._hashCount = hashCount;
        // the number of elements in the array is n = alpha * size
        _this._elements = (0, utils_1.allocateArray)(_this._size, function () { return cell_1.default.empty(); });
        return _this;
    }
    InvertibleBloomFilter_1 = InvertibleBloomFilter;
    /**
     * Create an Invertible Bloom filter optimal for an expected size and error rate.
     * @param nbItems - Number of items expected to insert into the IBLT
     * @param errorRate - Expected error rate
     * @return A new Invertible Bloom filter optimal for the given parameters.
     */
    InvertibleBloomFilter.create = function (nbItems, errorRate) {
        var size = (0, formulas_1.optimalFilterSize)(nbItems, errorRate);
        var nbHashes = (0, formulas_1.optimalHashes)(size, nbItems);
        return new InvertibleBloomFilter_1(size, nbHashes);
    };
    /**
     * Create an Invertible Bloom filter from a set of Buffer and optimal for an error rate.
     * @param items - An iterable to yield Buffers to be inserted into the filter
     * @param errorRate - Expected error rate
     * @return A new Invertible Bloom filter filled with the iterable's items.
     */
    InvertibleBloomFilter.from = function (items, errorRate) {
        var array = Array.from(items);
        var filter = InvertibleBloomFilter_1.create(array.length, errorRate);
        array.forEach(function (item) { return filter.add(item); });
        return filter;
    };
    Object.defineProperty(InvertibleBloomFilter.prototype, "hashCount", {
        /**
         * Return the number of hash functions used
         * @return {Number}
         */
        get: function () {
            return this._hashCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvertibleBloomFilter.prototype, "size", {
        /**
         * Get the number of cells of the filter
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvertibleBloomFilter.prototype, "length", {
        /**
         * Get the number of elements added in the filter
         * Complexity in time: O(alpha*d)
         */
        get: function () {
            return this._elements.reduce(function (a, b) { return a + b.count; }, 0) / this._hashCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvertibleBloomFilter.prototype, "elements", {
        /**
         * Return the cells used to store elements in this InvertibleBloomFilter
         */
        get: function () {
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an element to the InvertibleBloomFilter
     * @param element - The element to insert
     */
    InvertibleBloomFilter.prototype.add = function (element) {
        var hashes = this._hashing.hashTwiceAsString(JSON.stringify(element.toJSON()), this.seed);
        var indexes = this._hashing.getDistinctIndexes(hashes.first, this._size, this._hashCount, this.seed);
        for (var i = 0; i < this._hashCount; ++i) {
            this._elements[indexes[i]].add(element, Buffer.from(hashes.first));
        }
    };
    /**
     * Remove an element from the filter
     * @param element - The element to remove
     * @return True if the element has been removed, False otheriwse
     */
    InvertibleBloomFilter.prototype.remove = function (element) {
        var hashes = this._hashing.hashTwiceAsString(JSON.stringify(element.toJSON()), this.seed);
        var indexes = this._hashing.getDistinctIndexes(hashes.first, this._size, this._hashCount, this.seed);
        for (var i = 0; i < this._hashCount; ++i) {
            this._elements[indexes[i]] = this._elements[indexes[i]].xorm(new cell_1.default(Buffer.from(element), Buffer.from(hashes.first), 1));
        }
        return true;
    };
    /**
     * Test if an item is in the filter.
     * @param  element - The element to test
     * @return False if the element is not in the filter, true if "may be" in the filter.
     */
    InvertibleBloomFilter.prototype.has = function (element) {
        var hashes = this._hashing.hashTwiceAsString(JSON.stringify(element.toJSON()), this.seed);
        var indexes = this._hashing.getDistinctIndexes(hashes.first, this._size, this._hashCount, this.seed);
        for (var i = 0; i < this._hashCount; ++i) {
            if (this._elements[indexes[i]].count === 0) {
                return false;
            }
            else if (this._elements[indexes[i]].count === 1) {
                if (this._elements[indexes[i]].idSum.equals(element)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * List all entries from the filter using a Generator.
     * The generator ends with True if the operation has not failed, False otheriwse.
     * It is not recommended to modify an IBLT while listing its entries!
     * @return A generator that yields all filter's entries.
     */
    InvertibleBloomFilter.prototype.listEntries = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var that = this;
        var seenBefore = [];
        return (function () {
            var _loop_1, index, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (index) {
                            var localCell;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        localCell = that._elements[index];
                                        if (!(localCell.count > 0 &&
                                            seenBefore.findIndex(function (b) { return b.equals(localCell.idSum); }) === -1)) return [3 /*break*/, 3];
                                        if (!that.has(localCell.idSum)) return [3 /*break*/, 2];
                                        seenBefore.push(localCell.idSum);
                                        return [4 /*yield*/, localCell.idSum];
                                    case 1:
                                        _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2: return [2 /*return*/, { value: false }];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < that._elements.length - 1)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(index)];
                    case 2:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        })();
    };
    /**
     * Substract the filter with another {@link InvertibleBloomFilter}, and returns the resulting filter.
     * @param  remote - The filter to substract with
     * @return A new InvertibleBloomFilter which is the XOR of the local and remote one
     */
    InvertibleBloomFilter.prototype.substract = function (iblt) {
        if (this.size !== iblt.size) {
            throw new Error('The two Invertible Bloom Filters must be of the same size');
        }
        var res = new InvertibleBloomFilter_1(iblt._size, iblt._hashCount);
        res.seed = this.seed;
        for (var i = 0; i < this.size; ++i) {
            res._elements[i] = this._elements[i].xorm(iblt._elements[i]);
        }
        return res;
    };
    /**
     * Test if two InvertibleBloomFilters are equals
     * @param iblt - The filter to compare with
     * @return True if the two filters are equals, False otherwise
     */
    InvertibleBloomFilter.prototype.equals = function (iblt) {
        if (iblt._size !== this._size ||
            iblt._hashCount !== this._hashCount ||
            iblt.seed !== this.seed) {
            return false;
        }
        else {
            for (var i = 0; i < iblt._elements.length; ++i) {
                if (!iblt._elements[i].equals(this._elements[i])) {
                    return false;
                }
            }
            return true;
        }
    };
    /**
     * Decode an InvertibleBloomFilter based on its substracted version
     * @return The results of the deconding process
     */
    InvertibleBloomFilter.prototype.decode = function (additional, missing) {
        if (additional === void 0) { additional = []; }
        if (missing === void 0) { missing = []; }
        var pureList = [];
        var cell = null;
        // checking for all pure cells
        for (var i = 0; i < this._elements.length; ++i) {
            cell = this._elements[i];
            if (cell.isPure()) {
                pureList.push(i);
            }
        }
        while (pureList.length !== 0) {
            cell = this._elements[pureList.pop()]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
            var id = cell.idSum;
            var c = cell.count;
            if (cell.isPure()) {
                if (c === 1) {
                    additional.push(id);
                }
                else if (c === -1) {
                    missing.push(id);
                }
                else {
                    throw new Error('Please report, not possible');
                }
                var hashes = this._hashing.hashTwiceAsString(JSON.stringify(id.toJSON()), this.seed);
                var indexes = this._hashing.getDistinctIndexes(hashes.first, this._size, this._hashCount, this.seed);
                for (var i = 0; i < indexes.length; ++i) {
                    this._elements[indexes[i]] = this._elements[indexes[i]].xorm(new cell_1.default(id, Buffer.from(hashes.first), c));
                    if (this._elements[indexes[i]].isPure()) {
                        pureList.push(indexes[i]);
                    }
                }
            }
        }
        if (this._elements.findIndex(function (e) { return !e.isEmpty(); }) > -1) {
            return {
                success: false,
                reason: {
                    cell: cell,
                    iblt: this,
                },
                additional: additional,
                missing: missing,
            };
        }
        else {
            return {
                success: true,
                additional: additional,
                missing: missing,
            };
        }
    };
    var InvertibleBloomFilter_1;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], InvertibleBloomFilter.prototype, "_size", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], InvertibleBloomFilter.prototype, "_hashCount", void 0);
    __decorate([
        (0, exportable_1.Field)(undefined, function (json) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var res = json.map(function (elt) {
                var c = new cell_1.default(Buffer.from(elt._idSum), Buffer.from(elt._hashSum), elt._count);
                c.seed = elt._seed;
                return c;
            });
            return res;
        }),
        __metadata("design:type", Array)
    ], InvertibleBloomFilter.prototype, "_elements", void 0);
    InvertibleBloomFilter = InvertibleBloomFilter_1 = __decorate([
        (0, exportable_1.AutoExportable)('InvertibleBloomFilter', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_size')),
        __param(1, (0, exportable_1.Parameter)('_hashCount')),
        __metadata("design:paramtypes", [Number, Object])
    ], InvertibleBloomFilter);
    return InvertibleBloomFilter;
}(base_filter_1.default));
exports["default"] = InvertibleBloomFilter;


/***/ }),

/***/ 95762:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file : count-min-sketch.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
/**
 * The count–min sketch (CM sketch) is a probabilistic data structure that serves as a frequency table of events in a stream of data.
 * It uses hash functions to map events to frequencies, but unlike a hash table uses only sub-linear space, at the expense of overcounting some events due to collisions.
 *
 * Reference: Cormode, G., & Muthukrishnan, S. (2005). An improved data stream summary: the count-min sketch and its applications. Journal of Algorithms, 55(1), 58-75.
 * @see {@link http://vaffanculo.twiki.di.uniroma1.it/pub/Ing_algo/WebHome/p14_Cormode_JAl_05.pdf} for more details on Count Min Sketch
 * @extends Exportable
 * @author Thomas Minier & Arnaud Grall
 */
var CountMinSketch = /** @class */ (function (_super) {
    __extends(CountMinSketch, _super);
    /**
     * Constructor
     * @param columns - Number of columns
     * @param rows - Number of rows
     */
    function CountMinSketch(columns, rows) {
        var _this = _super.call(this) || this;
        _this._columns = columns;
        _this._rows = rows;
        _this._matrix = (0, utils_1.allocateArray)(_this._rows, function () {
            return (0, utils_1.allocateArray)(_this._columns, 0);
        });
        _this._allSums = 0;
        return _this;
    }
    CountMinSketch_1 = CountMinSketch;
    /**
     * Create a count-min sketch, with a target error rate and probability of accuracy
     * @param  errorRate - The error rate
     * @param  accuracy  - The probability of accuracy
     * @return A new Count Min Sketch optimal for the input parameters
     */
    CountMinSketch.create = function (errorRate, accuracy) {
        if (accuracy === void 0) { accuracy = 0.999; }
        // columns = Math.ceil(Math.E / epsilon) and rows = Math.ceil(Math.log(1 / delta))
        var columns = Math.ceil(Math.E / errorRate);
        var rows = Math.ceil(Math.log(1 / accuracy));
        return new CountMinSketch_1(columns, rows);
    };
    /**
     * Create a Count Min Sketch from a set of items, with a target error rate and probability of accuracy
     * @param items - An iterable to yield items to be inserted into the filter
     * @param  errorRate - The error rate
     * @param  accuracy  - The probability of accuracy
     * @return A new Count Min Sketch filled with the iterable's items.
     */
    CountMinSketch.from = function (items, errorRate, accuracy) {
        var e_1, _a;
        if (accuracy === void 0) { accuracy = 0.999; }
        var filter = CountMinSketch_1.create(errorRate, accuracy);
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                filter.update(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return filter;
    };
    Object.defineProperty(CountMinSketch.prototype, "columns", {
        /**
         * Return the number of columns in the sketch
         */
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountMinSketch.prototype, "rows", {
        /**
         * Return the number of rows in the sketch
         */
        get: function () {
            return this._rows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountMinSketch.prototype, "sum", {
        /**
         * Get the sum of all counts in the sketch
         */
        get: function () {
            return this._allSums;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update the count min sketch with a new occurrence of an element
     * @param element - The new element
     * @param count - Number of occurences of the elemnt (defauls to one)
     */
    CountMinSketch.prototype.update = function (element, count) {
        if (count === void 0) { count = 1; }
        this._allSums += count;
        var indexes = this._hashing.getIndexes(element, this._columns, this._rows, this.seed);
        for (var i = 0; i < this._rows; i++) {
            this._matrix[i][indexes[i]] += count;
        }
    };
    /**
     * Perform a point query: estimate the number of occurence of an element
     * @param element - The element we want to count
     * @return The estimate number of occurence of the element
     */
    CountMinSketch.prototype.count = function (element) {
        var min = Infinity;
        var indexes = this._hashing.getIndexes(element, this._columns, this._rows, this.seed);
        for (var i = 0; i < this._rows; i++) {
            var v = this._matrix[i][indexes[i]];
            min = Math.min(v, min);
        }
        return min;
    };
    /**
     * Check if another Count Min Sketch is equal to this one
     * @param  filter - The filter to compare to this one
     * @return True if they are equal, false otherwise
     */
    CountMinSketch.prototype.equals = function (other) {
        if (this._columns !== other._columns || this._rows !== other._rows) {
            return false;
        }
        for (var i = 0; i < this._rows; i++) {
            for (var j = 0; j < this._columns; j++) {
                if (this._matrix[i][j] !== other._matrix[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * Merge (in place) this sketch with another sketch, if they have the same number of columns and rows.
     * @param sketch - The sketch to merge with
     */
    CountMinSketch.prototype.merge = function (sketch) {
        if (this._columns !== sketch._columns) {
            throw new Error('Cannot merge two sketches with different number of columns');
        }
        if (this._rows !== sketch._rows) {
            throw new Error('Cannot merge two sketches with different number of rows');
        }
        for (var i = 0; i < this._rows; i++) {
            for (var j = 0; j < this._columns; j++) {
                this._matrix[i][j] += sketch._matrix[i][j];
            }
        }
    };
    /**
     * Clone the sketch
     * @return A new cloned sketch
     */
    CountMinSketch.prototype.clone = function () {
        var sketch = new CountMinSketch_1(this._columns, this._rows);
        sketch.merge(this);
        sketch.seed = this.seed;
        return sketch;
    };
    var CountMinSketch_1;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], CountMinSketch.prototype, "_columns", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], CountMinSketch.prototype, "_rows", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Array)
    ], CountMinSketch.prototype, "_matrix", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], CountMinSketch.prototype, "_allSums", void 0);
    CountMinSketch = CountMinSketch_1 = __decorate([
        (0, exportable_1.AutoExportable)('CountMinSketch', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_columns')),
        __param(1, (0, exportable_1.Parameter)('_rows')),
        __metadata("design:paramtypes", [Number, Number])
    ], CountMinSketch);
    return CountMinSketch;
}(base_filter_1.default));
exports["default"] = CountMinSketch;


/***/ }),

/***/ 28344:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file: hyperloglog.ts
MIT License

Copyright (c) 2019-2020 Thomas Minier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
// 2^32, computed as a constant as we use it a lot in the HyperLogLog algorithm
var TWO_POW_32 = Math.pow(2, 32);
/**
 * Estimlate the bias-correction constant, denoted alpha in the algorithm, based on the number of registers.
 * As alpha is pretty expensive to compute, we estimate it with the formula from Flajolet et al.
 * @param m - Number of registers in the HyperLogLog algorithm
 * @return The estimated bias-correction constant
 */
function computeAlpha(m) {
    switch (m) {
        case 16:
            return 0.673;
        case 32:
            return 0.697;
        case 64:
            return 0.709;
        default:
            return 0.7213 / (1.0 + 1.079 / m);
    }
}
/**
 * HyperLogLog is an algorithm for the count-distinct problem, approximating the number of distinct elements in a multiset.
 * @see HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm {@link http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf}
 * @author Thomas Minier
 */
var HyperLogLog = /** @class */ (function (_super) {
    __extends(HyperLogLog, _super);
    /**
     * Constructor
     * @param nbRegisters - The number of registers to use
     */
    function HyperLogLog(nbRegisters) {
        var _this = _super.call(this) || this;
        _this._nbRegisters = nbRegisters;
        _this._nbBytesPerHash = Math.round(Math.log2(nbRegisters));
        _this._correctionBias = computeAlpha(nbRegisters);
        _this._registers = (0, utils_1.allocateArray)(_this._nbRegisters, 0);
        return _this;
    }
    HyperLogLog_1 = HyperLogLog;
    Object.defineProperty(HyperLogLog.prototype, "nbRegisters", {
        /**
         * Get the number of registers used by the HyperLogLog
         */
        get: function () {
            return this._nbRegisters;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update The multiset with a new element
     * @param element - Element to add
     */
    HyperLogLog.prototype.update = function (element) {
        // const hashedValue = Buffer.from(hashAsString(element, this.seed))
        var hashedValue = this._hashing.hashAsInt(element, this.seed).toString(2);
        var registerIndex = 1 + parseInt(hashedValue.slice(0, this._nbBytesPerHash - 1), 2);
        // find the left most 1-bit in the second part of the buffer
        var secondPart = hashedValue.slice(this._nbBytesPerHash);
        var posLeftMost = 0;
        while (secondPart[posLeftMost] !== '1' &&
            posLeftMost < secondPart.length - 1) {
            posLeftMost++;
        }
        // update the register
        this._registers[registerIndex] = Math.max(this._registers[registerIndex], posLeftMost);
    };
    /**
     * Estimate the cardinality of the multiset
     * @return The estimated cardinality of the multiset
     */
    HyperLogLog.prototype.count = function (round) {
        if (round === void 0) { round = false; }
        // Use the standard HyperLogLog estimator
        var harmonicMean = this._registers.reduce(function (acc, value) { return acc + Math.pow(2, -value); }, 0);
        var estimation = (this._correctionBias * Math.pow(this._nbRegisters, 2)) / harmonicMean;
        // use linear counting to correct the estimation if E < 5m/2 and some registers are set to zero
        /*if (estimation < ((5/2) * this._nbRegisters) && this._registers.some(value => value === 0)) {
          const nbZeroRegisters = this._registers.filter(value => value === 0).length
          estimation = this._nbRegisters * Math.log(this._nbRegisters / nbZeroRegisters)
        }*/
        // correct the estimation for very large registers
        if (estimation > TWO_POW_32 / 30) {
            estimation = -TWO_POW_32 * Math.log(1 - estimation / TWO_POW_32);
        }
        // round if required
        if (round) {
            estimation = Math.round(estimation);
        }
        return estimation;
    };
    /**
     * Compute the accuracy of the cardinality estimation produced by this HyperLogLog
     * @return The accuracy of the cardinality estimation
     */
    HyperLogLog.prototype.accuracy = function () {
        return 1.04 / Math.sqrt(this._nbRegisters);
    };
    /**
     * Perform the union with another HyperLogLog multiset
     * @param other - Multiset ot merge with
     * @return The union of the two multisets
     */
    HyperLogLog.prototype.merge = function (other) {
        if (this.nbRegisters !== other.nbRegisters) {
            throw new Error("Two HyperLogLog must have the same number of registers to be merged. Tried to merge two HyperLogLog with m = ".concat(this.nbRegisters, " and m = ").concat(other.nbRegisters));
        }
        var newSketch = new HyperLogLog_1(this.nbRegisters);
        for (var i = 0; i < this.nbRegisters - 1; i++) {
            newSketch._registers[i] = Math.max(this._registers[i], other._registers[i]);
        }
        return newSketch;
    };
    /**
     * Check if another HyperLogLog is equal to this one
     * @param  other - The HyperLogLog to compare to this one
     * @return True if they are equal, false otherwise
     */
    HyperLogLog.prototype.equals = function (other) {
        if (this.nbRegisters !== other.nbRegisters) {
            return false;
        }
        for (var i = 0; i < this.nbRegisters - 1; i++) {
            if (this._registers[i] !== other._registers[i]) {
                return false;
            }
        }
        return true;
    };
    var HyperLogLog_1;
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], HyperLogLog.prototype, "_nbRegisters", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], HyperLogLog.prototype, "_nbBytesPerHash", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], HyperLogLog.prototype, "_correctionBias", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Array)
    ], HyperLogLog.prototype, "_registers", void 0);
    HyperLogLog = HyperLogLog_1 = __decorate([
        (0, exportable_1.AutoExportable)('HyperLogLog', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_nbRegisters')),
        __metadata("design:paramtypes", [Number])
    ], HyperLogLog);
    return HyperLogLog;
}(base_filter_1.default));
exports["default"] = HyperLogLog;


/***/ }),

/***/ 88947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* file: min-hash-factory.ts
MIT License

Copyright (c) 2019-2020 Thomas Minier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
var min_hash_1 = __webpack_require__(56608);
var lodash_1 = __webpack_require__(16991);
/**
 * Test if a number is a prime number
 * @param x - Number to test
 * @return True if the input is a prime number, False otherwise
 */
function isPrime(x) {
    if (x !== 2 && x % 2 === 0) {
        return false;
    }
    for (var i = 2; i < Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * Find the fist prime number superior to a number
 * @param x - Input number
 * @return The fist prime number superior to the input number
 */
function closestPrime(x) {
    var i = 0;
    var stop = false;
    var to_return = i;
    while (!stop) {
        if (isPrime(x + i)) {
            to_return = x + i;
            stop = true;
        }
        i++;
    }
    return to_return;
}
/**
 * A factory to create MinHash sketches using the same set of hash functions.
 *
 * **WARNING**: Only the MinHash produced by the same factory can be compared between them.
 * @author Thomas Minier
 */
var MinHashFactory = /** @class */ (function () {
    /**
     * Constructor
     * @param nbHashes - Number of hash functions to use for comouting the MinHash signature
     * @param maxValue - The highest value that can be found in the set to compare
     */
    function MinHashFactory(nbHashes, maxValue) {
        this._nbHashes = nbHashes;
        this._maxValue = maxValue;
        this._hashFunctions = [];
        // generate hash functions
        var c = closestPrime(this._maxValue);
        for (var i = 0; i < this._nbHashes; i++) {
            var a = (0, lodash_1.random)(0, this._maxValue, false);
            var b = (0, lodash_1.random)(0, this._maxValue, false);
            this._hashFunctions.push({ a: a, b: b, c: c });
        }
    }
    /**
     * Create a new MinHash set
     * @return A new MinHash set
     */
    MinHashFactory.prototype.create = function () {
        return new min_hash_1.MinHash(this._nbHashes, this._hashFunctions);
    };
    return MinHashFactory;
}());
exports["default"] = MinHashFactory;


/***/ }),

/***/ 56608:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file: min-hash.ts
MIT License

Copyright (c) 2019-2020 Thomas Minier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinHash = void 0;
var base_filter_1 = __importDefault(__webpack_require__(31038));
var exportable_1 = __webpack_require__(18677);
var utils_1 = __webpack_require__(74409);
/**
 * An error thrown when we try to compute the Jaccard Similarity with an empty MinHash
 * @author Thomas Minier
 */
var EmptyMinHashError = /** @class */ (function (_super) {
    __extends(EmptyMinHashError, _super);
    function EmptyMinHashError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmptyMinHashError;
}(Error));
/**
 * Apply a hash function to a number to produce a hash
 * @param x - Value to hash
 * @param fn - HashFunction to apply
 * @return The hashed value
 */
function applyHashFunction(x, fn) {
    return (fn.a * x + fn.b) % fn.c;
}
/**
 * MinHash (or the min-wise independent permutations locality sensitive hashing scheme) is a technique for quickly estimating how similar two sets are.
 * It is able to estimate the Jaccard similarity between two large sets of numbers using random hashing.
 *
 * **WARNING**: Only the MinHash produced by the same {@link MinHashFactory} can be compared between them.
 *
 * @see "On the resemblance and containment of documents", by Andrei Z. Broder, in Compression and Complexity of Sequences: Proceedings, Positano, Amalfitan Coast, Salerno, Italy, June 11-13, 1997.
 * @author Thomas Minier
 */
var MinHash = /** @class */ (function (_super) {
    __extends(MinHash, _super);
    /**
     * Constructor
     * @param nbHashes - Number of hash functions to use for comouting the MinHash signature
     * @param hashFunctions - Hash functions used to compute the signature
     */
    function MinHash(nbHashes, hashFunctions) {
        var _this = _super.call(this) || this;
        _this._nbHashes = nbHashes;
        _this._hashFunctions = hashFunctions;
        _this._signature = (0, utils_1.allocateArray)(_this._nbHashes, Infinity);
        return _this;
    }
    Object.defineProperty(MinHash.prototype, "nbHashes", {
        /**
         * Get the number of hash functions used by the MinHash
         */
        get: function () {
            return this._nbHashes;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Test if the signature of the MinHash is empty
     * @return True if the MinHash is empty, False otherwise
     */
    MinHash.prototype.isEmpty = function () {
        return this._signature[0] === Infinity;
    };
    /**
     * Insert a value into the MinHash and update its signature.
     * @param value - Value to insert
     */
    MinHash.prototype.add = function (value) {
        for (var i = 0; i < this._nbHashes; i++) {
            var hash = applyHashFunction(value, this._hashFunctions[i]);
            this._signature[i] = Math.min(this._signature[i], hash);
        }
    };
    /**
     * Ingest a set of values into the MinHash, in an efficient manner, and update its signature.
     * @param values - Set of values to load
     */
    MinHash.prototype.bulkLoad = function (values) {
        var _this = this;
        var _loop_1 = function (i) {
            var candidateSignatures = values.map(function (value) {
                return applyHashFunction(value, _this._hashFunctions[i]);
            });
            // get the minimum of the candidate Signatures
            // dont supply too much parameters to Math.min or Math.max with risk of getting stack error
            // so we compute an iterative minimum
            var min = candidateSignatures[0];
            for (var i_1 = 1; i_1 < candidateSignatures.length; i_1++) {
                if (min > candidateSignatures[i_1]) {
                    min = candidateSignatures[i_1];
                }
            }
            this_1._signature[i] = Math.min(this_1._signature[i], min);
        };
        var this_1 = this;
        for (var i = 0; i < this._nbHashes; i++) {
            _loop_1(i);
        }
    };
    /**
     * Estimate the Jaccard similarity coefficient with another MinHash signature
     * @param other - MinHash to compare with
     * @return The estimated Jaccard similarity coefficient between the two sets
     */
    MinHash.prototype.compareWith = function (other) {
        if (this.isEmpty() || other.isEmpty()) {
            throw new EmptyMinHashError('Cannot compute a Jaccard similairty with a MinHash that contains no values');
        }
        // fix: we need to check for the number of equal signatures, not uniq equal signatures
        // lodash intersection ends with a uniq set of values
        var count = 0;
        for (var i = 0; i < this._nbHashes; i++) {
            if (this._signature[i] === other._signature[i]) {
                count++;
            }
        }
        return count / this._nbHashes;
    };
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], MinHash.prototype, "_nbHashes", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Array)
    ], MinHash.prototype, "_hashFunctions", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Array)
    ], MinHash.prototype, "_signature", void 0);
    MinHash = __decorate([
        (0, exportable_1.AutoExportable)('MinHash', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_nbHashes')),
        __param(1, (0, exportable_1.Parameter)('_hashFunctions')),
        __metadata("design:paramtypes", [Number, Array])
    ], MinHash);
    return MinHash;
}(base_filter_1.default));
exports.MinHash = MinHash;


/***/ }),

/***/ 38801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* file: topk.ts
MIT License

Copyright (c) 2019-2020 Thomas Minier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.decorate === "function") r = globalThis.ReflectMetadata.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof globalThis.ReflectMetadata === "object" && typeof globalThis.ReflectMetadata.metadata === "function") return globalThis.ReflectMetadata.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_filter_1 = __importDefault(__webpack_require__(31038));
var count_min_sketch_1 = __importDefault(__webpack_require__(95762));
var exportable_1 = __webpack_require__(18677);
var lodash_1 = __webpack_require__(16991);
/**
 * A MinHeap stores items sorted by ascending frequency
 * @author Thomas Minier
 */
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this._content = [];
    }
    Object.defineProperty(MinHeap.prototype, "length", {
        /**
         * Get the number of items in the heap
         */
        get: function () {
            return this._content.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MinHeap.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Access an item at a given index
     * @param index - Index of the item
     * @return The item or `undefined` if the index is out of the array
     */
    MinHeap.prototype.get = function (index) {
        return this._content[index];
    };
    /**
     * Add a new element to the heap and keep items sorted by ascending frequency
     * @param element - Element to insert
     */
    MinHeap.prototype.add = function (element) {
        // kepp items sorted by frequency
        var index = (0, lodash_1.sortedIndexBy)(this._content, element, function (heapElement) { return heapElement.frequency; });
        this._content.splice(index, 0, element);
    };
    /**
     * Remove an item at a given index and keep items sorted by ascending frequency
     * @param index - Index of the item to remove
     */
    MinHeap.prototype.remove = function (index) {
        this._content.splice(index, 1);
    };
    /**
     * Remove and returns the element with the smallest frequency in the heap
     * @return The element with the smallest frequency in the heap
     */
    MinHeap.prototype.popMin = function () {
        return this._content.shift();
    };
    /**
     * Get the index of an element by its value
     * @param value - Value of the element to search for
     * @return Index of the element or -1 if it is not in the heap
     */
    MinHeap.prototype.indexOf = function (value) {
        // TODO optimize
        return this._content.findIndex(function (heapElement) { return heapElement.value === value; });
        // const index = sortedIndexBy(this._content, {value, frequency: 0}, heapElement => heapElement.value)
        // if (this._content[index] !== undefined && this._content[index].value === value) {
        //   return index
        // }
        // return -1
    };
    /**
     * Clear the content of the heap
     */
    MinHeap.prototype.clear = function () {
        this._content = [];
    };
    return MinHeap;
}());
/**
 * A TopK computes the ranking of elements in a multiset (by an arbitrary score) and returns the `k` results with the highest scores.
 * This implementation of the TopK problem sorts items based on their estimated cardinality in the multiset.
 * It is based on a Count Min Sketch, for estimating the cardinality of items, and a MinHeap, for implementing a sliding window over the `k` results with the highest scores.
 * @author Thomas Minier
 * @author Arnaud Grall
 */
var TopK = /** @class */ (function (_super) {
    __extends(TopK, _super);
    /**
     * Constructor
     * @param k - How many elements to store
     * @param errorRate - The error rate
     * @param accuracy  - The probability of accuracy
     */
    function TopK(k, errorRate, accuracy) {
        var _this = _super.call(this) || this;
        _this._k = k;
        _this._errorRate = errorRate;
        _this._accuracy = accuracy;
        _this._sketch = count_min_sketch_1.default.create(errorRate, accuracy);
        _this._heap = new MinHeap();
        return _this;
    }
    /**
     * Add an element to the TopK
     * @param element - Element to add
     */
    TopK.prototype.add = function (element, count) {
        if (count === void 0) { count = 1; }
        if (0 >= count) {
            throw "count must be > 0 (was ".concat(count, ")");
        }
        this._sketch.update(element, count);
        var frequency = this._sketch.count(element);
        if (this._heap.length < this._k ||
            frequency >= this._heap.get(0).frequency // eslint-disable-line @typescript-eslint/no-non-null-assertion
        ) {
            var index = this._heap.indexOf(element);
            // remove the entry if it is already in the MinHeap
            if (index > -1) {
                this._heap.remove(index);
            }
            // add the new entry
            this._heap.add({
                value: element,
                frequency: frequency,
            });
            // if there is more items than K, then remove the smallest item in the heap
            if (this._heap.length > this._k) {
                this._heap.popMin();
            }
        }
    };
    /**
     * Clear the content of the TopK
     */
    TopK.prototype.clear = function () {
        this._sketch = count_min_sketch_1.default.create(this._errorRate, this._accuracy);
        this._heap.clear();
    };
    /**
     * Get the top-k values as an array of objects {value: string, frequency: number, rank: number}
     * @return The top-k values as an array of objects {value: string, frequency: number, rank: number}
     */
    TopK.prototype.values = function () {
        var res = [];
        for (var i = this._heap.length - 1; i >= 0; i--) {
            var elt = this._heap.get(i); // eslint-disable-line @typescript-eslint/no-non-null-assertion
            res.push({
                value: elt.value,
                frequency: elt.frequency,
                rank: this._heap.length - i,
            });
        }
        return res;
    };
    /**
     * Get the top-k values as an iterator that yields objects {value: string, frequency: number, rank: number}.
     * WARNING: With this method, values are produced on-the-fly, hence you should not modify the TopK
     * while the iteration is not completed, otherwise the generated values may not respect the TopK properties.
     * @return The top-k values as an iterator of object {value: string, frequency: number, rank: number}
     */
    TopK.prototype.iterator = function () {
        var heap = this._heap;
        return (function () {
            var i, elt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = heap.length - 1;
                        _a.label = 1;
                    case 1:
                        if (!(i >= 0)) return [3 /*break*/, 4];
                        elt = heap.get(i) // eslint-disable-line @typescript-eslint/no-non-null-assertion
                        ;
                        return [4 /*yield*/, {
                                value: elt.value,
                                frequency: elt.frequency,
                                rank: heap.length - i,
                            }];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i--;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        })();
    };
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], TopK.prototype, "_k", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], TopK.prototype, "_errorRate", void 0);
    __decorate([
        (0, exportable_1.Field)(),
        __metadata("design:type", Number)
    ], TopK.prototype, "_accuracy", void 0);
    __decorate([
        (0, exportable_1.Field)(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        function (sketch) { return sketch.saveAsJSON(); }, function (json) { return count_min_sketch_1.default.fromJSON(json); }),
        __metadata("design:type", count_min_sketch_1.default)
    ], TopK.prototype, "_sketch", void 0);
    __decorate([
        (0, exportable_1.Field)(function (heap) { return heap.content; }, function (json) {
            var heap = new MinHeap();
            heap.content = json;
            return heap;
        }),
        __metadata("design:type", MinHeap
        /**
         * Constructor
         * @param k - How many elements to store
         * @param errorRate - The error rate
         * @param accuracy  - The probability of accuracy
         */
        )
    ], TopK.prototype, "_heap", void 0);
    TopK = __decorate([
        (0, exportable_1.AutoExportable)('TopK', ['_seed']),
        __param(0, (0, exportable_1.Parameter)('_k')),
        __param(1, (0, exportable_1.Parameter)('_errorRate')),
        __param(2, (0, exportable_1.Parameter)('_accuracy')),
        __metadata("design:paramtypes", [Number, Number, Number])
    ], TopK);
    return TopK;
}(base_filter_1.default));
exports["default"] = TopK;


/***/ }),

/***/ 74409:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

/* file : utils.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDefaultSeed = exports.isEmptyBuffer = exports.xorBuffer = exports.randomInt = exports.numberToHex = exports.allocateArray = exports.BufferError = void 0;
/**
 * BufferError
 */
exports.BufferError = 'The buffer class must be available, if you are a browser user use the buffer package (https://www.npmjs.com/package/buffer)';
/**
 * Create a new array fill with a base value
 * @param size - The size of the array
 * @param defaultValue - The default value used to fill the array. If it's a function, it will be invoked to get the default value.
 * @return A newly allocated array
 * @memberof Utils
 */
function allocateArray(size, defaultValue) {
    var array = new Array(size);
    var getDefault = typeof defaultValue === 'function'
        ? defaultValue
        : function () { return defaultValue; };
    for (var ind = 0; ind < size; ind++) {
        array[ind] = getDefault();
    }
    return array;
}
exports.allocateArray = allocateArray;
/**
 * Return a number to its Hex format by padding zeroes if length mod 4 != 0
 * @param elem the element to transform in HEX
 * @returns the HEX number padded of zeroes
 */
function numberToHex(elem) {
    var e = Number(elem).toString(16);
    if (e.length % 4 !== 0) {
        e = '0'.repeat(4 - (e.length % 4)) + e;
    }
    return e;
}
exports.numberToHex = numberToHex;
/**
 * Generate a random int between two bounds (included)
 * @param min - The lower bound
 * @param max - The upper bound
 * @param random - Function used to generate random floats
 * @return A random int bewteen lower and upper bound (included)
 * @memberof Utils
 * @author Thomas Minier
 */
function randomInt(min, max, random) {
    if (random === undefined) {
        random = Math.random;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    var rn = random();
    return Math.floor(rn * (max - min + 1)) + min;
}
exports.randomInt = randomInt;
/**
 * Return the non-destructive XOR of two buffers
 * @param a - The buffer to copy, then to xor with b
 * @param b - The buffer to xor with
 * @return The results of the XOR between the two buffers
 * @author Arnaud Grall
 */
function xorBuffer(a, b) {
    var length = Math.max(a.length, b.length);
    var buffer = Buffer.allocUnsafe(length).fill(0);
    for (var i = 0; i < length; ++i) {
        if (i < a.length && i < b.length) {
            buffer[length - i - 1] = a[a.length - i - 1] ^ b[b.length - i - 1];
        }
        else if (i < a.length && i >= b.length) {
            buffer[length - i - 1] ^= a[a.length - i - 1];
        }
        else if (i < b.length && i >= a.length) {
            buffer[length - i - 1] ^= b[b.length - i - 1];
        }
    }
    // now need to remove leading zeros in the buffer if any
    var start = 0;
    var it = buffer.values();
    var value = it.next();
    while (!value.done && value.value === 0) {
        start++;
        value = it.next();
    }
    return buffer.slice(start);
}
exports.xorBuffer = xorBuffer;
/**
 * Return true if the buffer is empty, i.e., all value are equals to 0.
 * @param  buffer - The buffer to inspect
 * @return True if the buffer only contains zero, False otherwise
 * @author Arnaud Grall
 */
function isEmptyBuffer(buffer) {
    var e_1, _a;
    if (buffer === null || !buffer)
        return true;
    try {
        for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
            var value = buffer_1_1.value;
            if (value !== 0) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}
exports.isEmptyBuffer = isEmptyBuffer;
/**
 * Return the default seed used in the package
 * @return A seed as a floating point number
 * @author Arnaud Grall
 */
function getDefaultSeed() {
    return 0x1234567890;
}
exports.getDefaultSeed = getDefaultSeed;


/***/ })

}]);
//# sourceMappingURL=chunk.npm.bloom-filters.js.map