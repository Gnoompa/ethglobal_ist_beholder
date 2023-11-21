"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[686],{

/***/ 40740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetadataProgram = exports.MetadataKey = void 0;
const web3_js_1 = __webpack_require__(39925);
const mpl_core_1 = __webpack_require__(68592);
var MetadataKey;
(function (MetadataKey) {
    MetadataKey[MetadataKey["Uninitialized"] = 0] = "Uninitialized";
    MetadataKey[MetadataKey["MetadataV1"] = 4] = "MetadataV1";
    MetadataKey[MetadataKey["EditionV1"] = 1] = "EditionV1";
    MetadataKey[MetadataKey["MasterEditionV1"] = 2] = "MasterEditionV1";
    MetadataKey[MetadataKey["MasterEditionV2"] = 6] = "MasterEditionV2";
    MetadataKey[MetadataKey["EditionMarker"] = 7] = "EditionMarker";
})(MetadataKey = exports.MetadataKey || (exports.MetadataKey = {}));
class MetadataProgram extends mpl_core_1.Program {
}
exports.MetadataProgram = MetadataProgram;
MetadataProgram.PREFIX = 'metadata';
MetadataProgram.PUBKEY = new web3_js_1.PublicKey(mpl_core_1.config.programs.metadata);


/***/ }),

/***/ 91816:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Edition = exports.EditionData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const MetadataProgram_1 = __webpack_require__(40740);
const web3_js_1 = __webpack_require__(39925);
const buffer_1 = __webpack_require__(7661);
class EditionData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetadataProgram_1.MetadataKey.EditionV1;
    }
}
exports.EditionData = EditionData;
EditionData.SCHEMA = EditionData.struct([
    ['key', 'u8'],
    ['parent', 'pubkeyAsString'],
    ['edition', 'u64'],
]);
class Edition extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Edition.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = EditionData.deserialize(this.info.data);
    }
    static getPDA(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(Edition.EDITION_PREFIX),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === MetadataProgram_1.MetadataKey.EditionV1;
    }
}
exports.Edition = Edition;
Edition.EDITION_PREFIX = 'edition';


/***/ }),

/***/ 72572:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditionMarker = exports.EditionMarkerData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const Edition_1 = __webpack_require__(91816);
const MetadataProgram_1 = __webpack_require__(40740);
const buffer_1 = __webpack_require__(7661);
class EditionMarkerData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetadataProgram_1.MetadataKey.EditionMarker;
    }
    editionTaken(edition) {
        const editionOffset = edition % EditionMarker.DATA_SIZE;
        const indexOffset = Math.floor(editionOffset / 8);
        if (indexOffset > 30) {
            throw Error('Bad index for edition');
        }
        const positionInBitsetFromRight = 7 - (editionOffset % 8);
        const mask = Math.pow(2, positionInBitsetFromRight);
        const appliedMask = this.ledger[indexOffset] & mask;
        return appliedMask != 0;
    }
}
exports.EditionMarkerData = EditionMarkerData;
EditionMarkerData.SCHEMA = EditionMarkerData.struct([
    ['key', 'u8'],
    ['ledger', [31]],
]);
class EditionMarker extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!EditionMarker.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = EditionMarkerData.deserialize(this.info.data);
    }
    static getPDA(mint, edition) {
        return __awaiter(this, void 0, void 0, function* () {
            const editionNumber = Math.floor(edition.toNumber() / 248);
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(Edition_1.Edition.EDITION_PREFIX),
                buffer_1.Buffer.from(editionNumber.toString()),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === MetadataProgram_1.MetadataKey.EditionMarker;
    }
}
exports.EditionMarker = EditionMarker;
EditionMarker.DATA_SIZE = 248;


/***/ }),

/***/ 40592:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MasterEdition = exports.MasterEditionV2Data = exports.MasterEditionV1Data = void 0;
const mpl_core_1 = __webpack_require__(68592);
const bs58_1 = __importDefault(__webpack_require__(18705));
const Edition_1 = __webpack_require__(91816);
const MetadataProgram_1 = __webpack_require__(40740);
const buffer_1 = __webpack_require__(7661);
const web3_js_1 = __webpack_require__(39925);
class MasterEditionV1Data extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetadataProgram_1.MetadataKey.MasterEditionV1;
    }
}
exports.MasterEditionV1Data = MasterEditionV1Data;
MasterEditionV1Data.SCHEMA = MasterEditionV1Data.struct([
    ['key', 'u8'],
    ['supply', 'u64'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
    ['printingMint', 'pubkeyAsString'],
    ['oneTimePrintingAuthorizationMint', 'pubkeyAsString'],
]);
class MasterEditionV2Data extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetadataProgram_1.MetadataKey.MasterEditionV2;
    }
}
exports.MasterEditionV2Data = MasterEditionV2Data;
MasterEditionV2Data.SCHEMA = MasterEditionV2Data.struct([
    ['key', 'u8'],
    ['supply', 'u64'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
]);
class MasterEdition extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (MasterEdition.isMasterEditionV1(this.info.data)) {
            this.data = MasterEditionV1Data.deserialize(this.info.data);
        }
        else if (MasterEdition.isMasterEditionV2(this.info.data)) {
            this.data = MasterEditionV2Data.deserialize(this.info.data);
        }
        else {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
    }
    static getPDA(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(MasterEdition.EDITION_PREFIX),
            ]);
        });
    }
    static isCompatible(data) {
        return MasterEdition.isMasterEditionV1(data) || MasterEdition.isMasterEditionV2(data);
    }
    static isMasterEditionV1(data) {
        return data[0] === MetadataProgram_1.MetadataKey.MasterEditionV1;
    }
    static isMasterEditionV2(data) {
        return data[0] === MetadataProgram_1.MetadataKey.MasterEditionV2;
    }
    getEditions(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetadataProgram_1.MetadataProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetadataProgram_1.MetadataKey.EditionV1])),
                        },
                    },
                    {
                        memcmp: {
                            offset: 1,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => Edition_1.Edition.from(account));
        });
    }
}
exports.MasterEdition = MasterEdition;
MasterEdition.EDITION_PREFIX = 'edition';


/***/ }),

/***/ 23133:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.computeCreatorOffset = exports.MAX_CREATOR_LEN = exports.MAX_URI_LENGTH = exports.MAX_SYMBOL_LENGTH = exports.MAX_NAME_LENGTH = exports.Metadata = exports.MetadataData = exports.MetadataDataData = exports.Creator = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const bn_js_1 = __importDefault(__webpack_require__(73117));
const bs58_1 = __importDefault(__webpack_require__(18705));
const buffer_1 = __webpack_require__(7661);
const MetadataProgram_1 = __webpack_require__(40740);
const Edition_1 = __webpack_require__(91816);
const MasterEdition_1 = __webpack_require__(40592);
class Creator extends mpl_core_1.Borsh.Data {
}
exports.Creator = Creator;
Creator.SCHEMA = Creator.struct([
    ['address', 'pubkeyAsString'],
    ['verified', 'u8'],
    ['share', 'u8'],
]);
class MetadataDataData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        const METADATA_REPLACE = new RegExp('\u0000', 'g');
        this.name = args.name.replace(METADATA_REPLACE, '');
        this.uri = args.uri.replace(METADATA_REPLACE, '');
        this.symbol = args.symbol.replace(METADATA_REPLACE, '');
    }
}
exports.MetadataDataData = MetadataDataData;
MetadataDataData.SCHEMA = new Map([
    ...Creator.SCHEMA,
    ...MetadataDataData.struct([
        ['name', 'string'],
        ['symbol', 'string'],
        ['uri', 'string'],
        ['sellerFeeBasisPoints', 'u16'],
        ['creators', { kind: 'option', type: [Creator] }],
    ]),
]);
class MetadataData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetadataProgram_1.MetadataKey.MetadataV1;
    }
}
exports.MetadataData = MetadataData;
MetadataData.SCHEMA = new Map([
    ...MetadataDataData.SCHEMA,
    ...MetadataData.struct([
        ['key', 'u8'],
        ['updateAuthority', 'pubkeyAsString'],
        ['mint', 'pubkeyAsString'],
        ['data', MetadataDataData],
        ['primarySaleHappened', 'u8'],
        ['isMutable', 'u8'],
    ]),
]);
class Metadata extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Metadata.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = MetadataData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetadataProgram_1.MetadataKey.MetadataV1;
    }
    static getPDA(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
            ]);
        });
    }
    static findMany(connection, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const baseFilters = [
                {
                    memcmp: {
                        offset: 0,
                        bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetadataProgram_1.MetadataKey.MetadataV1])),
                    },
                },
                filters.updateAuthority && {
                    memcmp: {
                        offset: 1,
                        bytes: new web3_js_1.PublicKey(filters.updateAuthority).toBase58(),
                    },
                },
                filters.mint && {
                    memcmp: {
                        offset: 33,
                        bytes: new web3_js_1.PublicKey(filters.mint).toBase58(),
                    },
                },
            ].filter(Boolean);
            if (filters.creators) {
                return (yield Promise.all(Array.from(Array(mpl_core_1.config.maxCreatorLimit).keys()).reduce((prev, i) => [
                    ...prev,
                    ...filters.creators.map((pubkey) => MetadataProgram_1.MetadataProgram.getProgramAccounts(connection, {
                        filters: [
                            ...baseFilters,
                            {
                                memcmp: {
                                    offset: (0, exports.computeCreatorOffset)(i),
                                    bytes: new web3_js_1.PublicKey(pubkey).toBase58(),
                                },
                            },
                        ],
                    })),
                ], [])))
                    .flat()
                    .map((account) => Metadata.from(account));
            }
            else {
                return (yield MetadataProgram_1.MetadataProgram.getProgramAccounts(connection, { filters: baseFilters })).map((account) => Metadata.from(account));
            }
        });
    }
    static findByOwner(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield mpl_core_1.TokenAccount.getTokenAccountsByOwner(connection, owner);
            const accountMap = new Map(accounts.map(({ data }) => [data.mint.toString(), data]));
            const allMetadata = yield Metadata.findMany(connection);
            return allMetadata.filter((metadata) => {
                var _a, _b;
                return accountMap.has(metadata.data.mint) &&
                    (((_b = (_a = accountMap === null || accountMap === void 0 ? void 0 : accountMap.get(metadata.data.mint)) === null || _a === void 0 ? void 0 : _a.amount) === null || _b === void 0 ? void 0 : _b.toNumber()) || 0) > 0;
            });
        });
    }
    static findByOwnerV2(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield mpl_core_1.TokenAccount.getTokenAccountsByOwner(connection, owner);
            const accountsWithAmount = accounts
                .map(({ data }) => data)
                .filter(({ amount }) => (amount === null || amount === void 0 ? void 0 : amount.toNumber()) > 0);
            return (yield Promise.all(accountsWithAmount.map(({ mint }) => Metadata.findMany(connection, { mint })))).flat();
        });
    }
    static findDataByOwner(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield mpl_core_1.TokenAccount.getTokenAccountsByOwner(connection, owner);
            const metadataPdaLookups = accounts.reduce((memo, { data }) => {
                var _a;
                return ((_a = data.amount) === null || _a === void 0 ? void 0 : _a.eq(new bn_js_1.default(1))) ? [...memo, Metadata.getPDA(data.mint)] : memo;
            }, []);
            const metadataAddresses = yield Promise.all(metadataPdaLookups);
            const tokenInfo = yield mpl_core_1.Account.getInfos(connection, metadataAddresses);
            return Array.from(tokenInfo.values()).map((m) => MetadataData.deserialize(m.data));
        });
    }
    static getEdition(connection, mint) {
        return __awaiter(this, void 0, void 0, function* () {
            const pda = yield Edition_1.Edition.getPDA(mint);
            const info = yield mpl_core_1.Account.getInfo(connection, pda);
            const key = info === null || info === void 0 ? void 0 : info.data[0];
            switch (key) {
                case MetadataProgram_1.MetadataKey.EditionV1:
                    return new Edition_1.Edition(pda, info);
                case MetadataProgram_1.MetadataKey.MasterEditionV1:
                case MetadataProgram_1.MetadataKey.MasterEditionV2:
                    return new MasterEdition_1.MasterEdition(pda, info);
                default:
                    return;
            }
        });
    }
}
exports.Metadata = Metadata;
exports.MAX_NAME_LENGTH = 32;
exports.MAX_SYMBOL_LENGTH = 10;
exports.MAX_URI_LENGTH = 200;
exports.MAX_CREATOR_LEN = 32 + 1 + 1;
const computeCreatorOffset = (index) => {
    return (1 +
        32 +
        32 +
        4 +
        exports.MAX_NAME_LENGTH +
        4 +
        exports.MAX_URI_LENGTH +
        4 +
        exports.MAX_SYMBOL_LENGTH +
        2 +
        1 +
        4 +
        index * exports.MAX_CREATOR_LEN);
};
exports.computeCreatorOffset = computeCreatorOffset;


/***/ }),

/***/ 1986:
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
__exportStar(__webpack_require__(91816), exports);
__exportStar(__webpack_require__(72572), exports);
__exportStar(__webpack_require__(40592), exports);
__exportStar(__webpack_require__(23133), exports);
__exportStar(__webpack_require__(40740), exports);
__exportStar(__webpack_require__(27661), exports);


/***/ }),

/***/ 96295:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMasterEdition = exports.CreateMasterEditionArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const MetadataProgram_1 = __webpack_require__(40740);
class CreateMasterEditionArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 10;
    }
}
exports.CreateMasterEditionArgs = CreateMasterEditionArgs;
CreateMasterEditionArgs.SCHEMA = CreateMasterEditionArgs.struct([
    ['instruction', 'u8'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
]);
class CreateMasterEdition extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { edition, metadata, updateAuthority, mint, mintAuthority, maxSupply } = params;
        const data = CreateMasterEditionArgs.serialize({
            maxSupply: maxSupply || null,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: edition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateMasterEdition = CreateMasterEdition;


/***/ }),

/***/ 83358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMetadata = exports.CreateMetadataArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const Metadata_1 = __webpack_require__(23133);
const MetadataProgram_1 = __webpack_require__(40740);
class CreateMetadataArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 0;
    }
}
exports.CreateMetadataArgs = CreateMetadataArgs;
CreateMetadataArgs.SCHEMA = new Map([
    ...Metadata_1.MetadataDataData.SCHEMA,
    ...CreateMetadataArgs.struct([
        ['instruction', 'u8'],
        ['data', Metadata_1.MetadataDataData],
        ['isMutable', 'u8'],
    ]),
]);
class CreateMetadata extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { metadata, metadataData, updateAuthority, mint, mintAuthority } = params;
        const data = CreateMetadataArgs.serialize({
            data: metadataData,
            isMutable: true,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateMetadata = CreateMetadata;


/***/ }),

/***/ 82846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MintNewEditionFromMasterEditionViaToken = exports.MintNewEditionFromMasterEditionViaTokenArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const MetadataProgram_1 = __webpack_require__(40740);
class MintNewEditionFromMasterEditionViaTokenArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 11;
    }
}
exports.MintNewEditionFromMasterEditionViaTokenArgs = MintNewEditionFromMasterEditionViaTokenArgs;
MintNewEditionFromMasterEditionViaTokenArgs.SCHEMA = MintNewEditionFromMasterEditionViaTokenArgs.struct([
    ['instruction', 'u8'],
    ['edition', 'u64'],
]);
class MintNewEditionFromMasterEditionViaToken extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { edition, metadata, updateAuthority, masterEdition, masterMetadata, mint, editionMarker, mintAuthority, tokenOwner, tokenAccount, editionValue, } = params;
        const data = MintNewEditionFromMasterEditionViaTokenArgs.serialize({
            edition: editionValue,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: edition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: masterEdition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: editionMarker,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: tokenOwner,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: tokenAccount,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: masterMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.MintNewEditionFromMasterEditionViaToken = MintNewEditionFromMasterEditionViaToken;


/***/ }),

/***/ 57946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignMetadata = exports.SignMetadataArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const MetadataProgram_1 = __webpack_require__(40740);
class SignMetadataArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 7;
    }
}
exports.SignMetadataArgs = SignMetadataArgs;
SignMetadataArgs.SCHEMA = SignMetadataArgs.struct([['instruction', 'u8']]);
class SignMetadata extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, creator } = params;
        const data = SignMetadataArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: creator,
                    isSigner: true,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.SignMetadata = SignMetadata;


/***/ }),

/***/ 17529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMetadata = exports.UpdateMetadataArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const Metadata_1 = __webpack_require__(23133);
const MetadataProgram_1 = __webpack_require__(40740);
class UpdateMetadataArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 1;
    }
}
exports.UpdateMetadataArgs = UpdateMetadataArgs;
UpdateMetadataArgs.SCHEMA = new Map([
    ...Metadata_1.MetadataDataData.SCHEMA,
    ...UpdateMetadataArgs.struct([
        ['instruction', 'u8'],
        ['data', { kind: 'option', type: Metadata_1.MetadataDataData }],
        ['updateAuthority', { kind: 'option', type: 'pubkeyAsString' }],
        ['primarySaleHappened', { kind: 'option', type: 'u8' }],
    ]),
]);
class UpdateMetadata extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, metadataData, updateAuthority, newUpdateAuthority, primarySaleHappened } = params;
        const data = UpdateMetadataArgs.serialize({
            data: metadataData,
            updateAuthority: newUpdateAuthority && newUpdateAuthority.toString(),
            primarySaleHappened: primarySaleHappened || null,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: true,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdateMetadata = UpdateMetadata;


/***/ }),

/***/ 15160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePrimarySaleHappenedViaToken = exports.UpdatePrimarySaleHappenedViaTokenArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const MetadataProgram_1 = __webpack_require__(40740);
class UpdatePrimarySaleHappenedViaTokenArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 4;
    }
}
exports.UpdatePrimarySaleHappenedViaTokenArgs = UpdatePrimarySaleHappenedViaTokenArgs;
UpdatePrimarySaleHappenedViaTokenArgs.SCHEMA = UpdatePrimarySaleHappenedViaTokenArgs.struct([['instruction', 'u8']]);
class UpdatePrimarySaleHappenedViaToken extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, owner, tokenAccount } = params;
        const data = UpdatePrimarySaleHappenedViaTokenArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: owner,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: tokenAccount,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdatePrimarySaleHappenedViaToken = UpdatePrimarySaleHappenedViaToken;


/***/ }),

/***/ 27661:
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
__exportStar(__webpack_require__(83358), exports);
__exportStar(__webpack_require__(17529), exports);
__exportStar(__webpack_require__(96295), exports);
__exportStar(__webpack_require__(82846), exports);
__exportStar(__webpack_require__(15160), exports);
__exportStar(__webpack_require__(57946), exports);


/***/ }),

/***/ 26414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetadataProgram = void 0;
const web3_js_1 = __webpack_require__(20374);
const mpl_core_1 = __webpack_require__(68592);
class MetadataProgram extends mpl_core_1.Program {
}
exports.MetadataProgram = MetadataProgram;
MetadataProgram.PREFIX = 'metadata';
MetadataProgram.PUBKEY = new web3_js_1.PublicKey(mpl_core_1.config.programs.metadata);


/***/ }),

/***/ 64246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collection = void 0;
const mpl_core_1 = __webpack_require__(68592);
class Collection extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = args.key;
        this.verified = args.verified;
    }
}
exports.Collection = Collection;
Collection.SCHEMA = Collection.struct([
    ['verified', 'u8'],
    ['key', 'pubkeyAsString'],
]);


/***/ }),

/***/ 69910:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Edition = exports.EditionData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const MetadataProgram_1 = __webpack_require__(26414);
const web3_js_1 = __webpack_require__(20374);
const buffer_1 = __webpack_require__(7661);
const constants_1 = __webpack_require__(15922);
class EditionData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = constants_1.MetadataKey.EditionV1;
    }
}
exports.EditionData = EditionData;
EditionData.SCHEMA = EditionData.struct([
    ['key', 'u8'],
    ['parent', 'pubkeyAsString'],
    ['edition', 'u64'],
]);
class Edition extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Edition.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = EditionData.deserialize(this.info.data);
    }
    static getPDA(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(Edition.EDITION_PREFIX),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === constants_1.MetadataKey.EditionV1;
    }
}
exports.Edition = Edition;
Edition.EDITION_PREFIX = 'edition';


/***/ }),

/***/ 6025:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditionMarker = exports.EditionMarkerData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const Edition_1 = __webpack_require__(69910);
const MetadataProgram_1 = __webpack_require__(26414);
const buffer_1 = __webpack_require__(7661);
const constants_1 = __webpack_require__(15922);
class EditionMarkerData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = constants_1.MetadataKey.EditionMarker;
    }
    editionTaken(edition) {
        const editionOffset = edition % EditionMarker.DATA_SIZE;
        const indexOffset = Math.floor(editionOffset / 8);
        if (indexOffset > 30) {
            throw Error('Bad index for edition');
        }
        const positionInBitsetFromRight = 7 - (editionOffset % 8);
        const mask = Math.pow(2, positionInBitsetFromRight);
        const appliedMask = this.ledger[indexOffset] & mask;
        return appliedMask != 0;
    }
}
exports.EditionMarkerData = EditionMarkerData;
EditionMarkerData.SCHEMA = EditionMarkerData.struct([
    ['key', 'u8'],
    ['ledger', [31]],
]);
class EditionMarker extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!EditionMarker.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = EditionMarkerData.deserialize(this.info.data);
    }
    static getPDA(mint, edition) {
        return __awaiter(this, void 0, void 0, function* () {
            const editionNumber = Math.floor(edition.toNumber() / 248);
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(Edition_1.Edition.EDITION_PREFIX),
                buffer_1.Buffer.from(editionNumber.toString()),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === constants_1.MetadataKey.EditionMarker;
    }
}
exports.EditionMarker = EditionMarker;
EditionMarker.DATA_SIZE = 248;


/***/ }),

/***/ 74605:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MasterEdition = exports.MasterEditionV2Data = exports.MasterEditionV1Data = void 0;
const mpl_core_1 = __webpack_require__(68592);
const bs58_1 = __importDefault(__webpack_require__(18705));
const Edition_1 = __webpack_require__(69910);
const MetadataProgram_1 = __webpack_require__(26414);
const buffer_1 = __webpack_require__(7661);
const web3_js_1 = __webpack_require__(20374);
const constants_1 = __webpack_require__(15922);
class MasterEditionV1Data extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = constants_1.MetadataKey.MasterEditionV1;
    }
}
exports.MasterEditionV1Data = MasterEditionV1Data;
MasterEditionV1Data.SCHEMA = MasterEditionV1Data.struct([
    ['key', 'u8'],
    ['supply', 'u64'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
    ['printingMint', 'pubkeyAsString'],
    ['oneTimePrintingAuthorizationMint', 'pubkeyAsString'],
]);
class MasterEditionV2Data extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = constants_1.MetadataKey.MasterEditionV2;
    }
}
exports.MasterEditionV2Data = MasterEditionV2Data;
MasterEditionV2Data.SCHEMA = MasterEditionV2Data.struct([
    ['key', 'u8'],
    ['supply', 'u64'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
]);
class MasterEdition extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (MasterEdition.isMasterEditionV1(this.info.data)) {
            this.data = MasterEditionV1Data.deserialize(this.info.data);
        }
        else if (MasterEdition.isMasterEditionV2(this.info.data)) {
            this.data = MasterEditionV2Data.deserialize(this.info.data);
        }
        else {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
    }
    static getPDA(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(MasterEdition.EDITION_PREFIX),
            ]);
        });
    }
    static isCompatible(data) {
        return MasterEdition.isMasterEditionV1(data) || MasterEdition.isMasterEditionV2(data);
    }
    static isMasterEditionV1(data) {
        return data[0] === constants_1.MetadataKey.MasterEditionV1;
    }
    static isMasterEditionV2(data) {
        return data[0] === constants_1.MetadataKey.MasterEditionV2;
    }
    getEditions(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetadataProgram_1.MetadataProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([constants_1.MetadataKey.EditionV1])),
                        },
                    },
                    {
                        memcmp: {
                            offset: 1,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => Edition_1.Edition.from(account));
        });
    }
}
exports.MasterEdition = MasterEdition;
MasterEdition.EDITION_PREFIX = 'edition';


/***/ }),

/***/ 74851:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.computeCreatorOffset = exports.MAX_CREATOR_LEN = exports.MAX_URI_LENGTH = exports.MAX_SYMBOL_LENGTH = exports.MAX_NAME_LENGTH = exports.Metadata = exports.MetadataData = exports.MetadataDataData = exports.DataV2 = exports.Creator = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const bn_js_1 = __importDefault(__webpack_require__(73117));
const bs58_1 = __importDefault(__webpack_require__(18705));
const buffer_1 = __webpack_require__(7661);
const MetadataProgram_1 = __webpack_require__(26414);
const Edition_1 = __webpack_require__(69910);
const MasterEdition_1 = __webpack_require__(74605);
const Uses_1 = __webpack_require__(27752);
const Collection_1 = __webpack_require__(64246);
const constants_1 = __webpack_require__(15922);
class Creator extends mpl_core_1.Borsh.Data {
}
exports.Creator = Creator;
Creator.SCHEMA = Creator.struct([
    ['address', 'pubkeyAsString'],
    ['verified', 'u8'],
    ['share', 'u8'],
]);
class DataV2 extends mpl_core_1.Borsh.Data {
}
exports.DataV2 = DataV2;
DataV2.SCHEMA = new Map([
    ...Creator.SCHEMA,
    ...Collection_1.Collection.SCHEMA,
    ...Uses_1.Uses.SCHEMA,
    ...DataV2.struct([
        ['name', 'string'],
        ['symbol', 'string'],
        ['uri', 'string'],
        ['sellerFeeBasisPoints', 'u16'],
        ['creators', { kind: 'option', type: [Creator] }],
        ['collection', { kind: 'option', type: Collection_1.Collection }],
        ['uses', { kind: 'option', type: Uses_1.Uses }],
    ]),
]);
class MetadataDataData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        const METADATA_REPLACE = new RegExp('\u0000', 'g');
        this.name = args.name.replace(METADATA_REPLACE, '');
        this.uri = args.uri.replace(METADATA_REPLACE, '');
        this.symbol = args.symbol.replace(METADATA_REPLACE, '');
    }
}
exports.MetadataDataData = MetadataDataData;
MetadataDataData.SCHEMA = new Map([
    ...Creator.SCHEMA,
    ...MetadataDataData.struct([
        ['name', 'string'],
        ['symbol', 'string'],
        ['uri', 'string'],
        ['sellerFeeBasisPoints', 'u16'],
        ['creators', { kind: 'option', type: [Creator] }],
    ]),
]);
class MetadataData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = constants_1.MetadataKey.MetadataV1;
    }
}
exports.MetadataData = MetadataData;
MetadataData.SCHEMA = new Map([
    ...MetadataDataData.SCHEMA,
    ...Collection_1.Collection.SCHEMA,
    ...Uses_1.Uses.SCHEMA,
    ...MetadataData.struct([
        ['key', 'u8'],
        ['updateAuthority', 'pubkeyAsString'],
        ['mint', 'pubkeyAsString'],
        ['data', MetadataDataData],
        ['primarySaleHappened', 'u8'],
        ['isMutable', 'u8'],
        ['editionNonce', { kind: 'option', type: 'u8' }],
        ['tokenStandard', { kind: 'option', type: 'u8' }],
        ['collection', { kind: 'option', type: Collection_1.Collection }],
        ['uses', { kind: 'option', type: Uses_1.Uses }],
    ]),
]);
class Metadata extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Metadata.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = MetadataData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === constants_1.MetadataKey.MetadataV1;
    }
    static getPDA(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
            ]);
        });
    }
    static findMany(connection, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const baseFilters = [
                {
                    memcmp: {
                        offset: 0,
                        bytes: bs58_1.default.encode(buffer_1.Buffer.from([constants_1.MetadataKey.MetadataV1])),
                    },
                },
                filters.updateAuthority && {
                    memcmp: {
                        offset: 1,
                        bytes: new web3_js_1.PublicKey(filters.updateAuthority).toBase58(),
                    },
                },
                filters.mint && {
                    memcmp: {
                        offset: 33,
                        bytes: new web3_js_1.PublicKey(filters.mint).toBase58(),
                    },
                },
            ].filter(Boolean);
            if (filters.creators) {
                return (yield Promise.all(Array.from(Array(mpl_core_1.config.maxCreatorLimit).keys()).reduce((prev, i) => [
                    ...prev,
                    ...filters.creators.map((pubkey) => MetadataProgram_1.MetadataProgram.getProgramAccounts(connection, {
                        filters: [
                            ...baseFilters,
                            {
                                memcmp: {
                                    offset: (0, exports.computeCreatorOffset)(i),
                                    bytes: new web3_js_1.PublicKey(pubkey).toBase58(),
                                },
                            },
                        ],
                    })),
                ], [])))
                    .flat()
                    .map((account) => Metadata.from(account));
            }
            else {
                return (yield MetadataProgram_1.MetadataProgram.getProgramAccounts(connection, { filters: baseFilters })).map((account) => Metadata.from(account));
            }
        });
    }
    static findByOwner(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield mpl_core_1.TokenAccount.getTokenAccountsByOwner(connection, owner);
            const accountMap = new Map(accounts.map(({ data }) => [data.mint.toString(), data]));
            const allMetadata = yield Metadata.findMany(connection);
            return allMetadata.filter((metadata) => {
                var _a, _b;
                return accountMap.has(metadata.data.mint) &&
                    (((_b = (_a = accountMap === null || accountMap === void 0 ? void 0 : accountMap.get(metadata.data.mint)) === null || _a === void 0 ? void 0 : _a.amount) === null || _b === void 0 ? void 0 : _b.toNumber()) || 0) > 0;
            });
        });
    }
    static findByOwnerV2(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield mpl_core_1.TokenAccount.getTokenAccountsByOwner(connection, owner);
            const accountsWithAmount = accounts
                .map(({ data }) => data)
                .filter(({ amount }) => (amount === null || amount === void 0 ? void 0 : amount.toNumber()) > 0);
            return (yield Promise.all(accountsWithAmount.map(({ mint }) => Metadata.findMany(connection, { mint })))).flat();
        });
    }
    static findDataByOwner(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield mpl_core_1.TokenAccount.getTokenAccountsByOwner(connection, owner);
            const metadataPdaLookups = accounts.reduce((memo, { data }) => {
                var _a;
                return ((_a = data.amount) === null || _a === void 0 ? void 0 : _a.eq(new bn_js_1.default(1))) ? [...memo, Metadata.getPDA(data.mint)] : memo;
            }, []);
            const metadataAddresses = yield Promise.all(metadataPdaLookups);
            const tokenInfo = yield mpl_core_1.Account.getInfos(connection, metadataAddresses);
            return Array.from(tokenInfo.values()).map((m) => MetadataData.deserialize(m.data));
        });
    }
    static getEdition(connection, mint) {
        return __awaiter(this, void 0, void 0, function* () {
            const pda = yield Edition_1.Edition.getPDA(mint);
            const info = yield mpl_core_1.Account.getInfo(connection, pda);
            const key = info === null || info === void 0 ? void 0 : info.data[0];
            switch (key) {
                case constants_1.MetadataKey.EditionV1:
                    return new Edition_1.Edition(pda, info);
                case constants_1.MetadataKey.MasterEditionV1:
                case constants_1.MetadataKey.MasterEditionV2:
                    return new MasterEdition_1.MasterEdition(pda, info);
                default:
                    return;
            }
        });
    }
}
exports.Metadata = Metadata;
exports.MAX_NAME_LENGTH = 32;
exports.MAX_SYMBOL_LENGTH = 10;
exports.MAX_URI_LENGTH = 200;
exports.MAX_CREATOR_LEN = 32 + 1 + 1;
const computeCreatorOffset = (index) => {
    return (1 +
        32 +
        32 +
        4 +
        exports.MAX_NAME_LENGTH +
        4 +
        exports.MAX_URI_LENGTH +
        4 +
        exports.MAX_SYMBOL_LENGTH +
        2 +
        1 +
        4 +
        index * exports.MAX_CREATOR_LEN);
};
exports.computeCreatorOffset = computeCreatorOffset;


/***/ }),

/***/ 27752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Uses = void 0;
const mpl_core_1 = __webpack_require__(68592);
class Uses extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.useMethod = args.useMethod;
        this.total = args.total;
        this.remaining = args.remaining;
    }
}
exports.Uses = Uses;
Uses.SCHEMA = Uses.struct([
    ['useMethod', 'u8'],
    ['total', 'u64'],
    ['remaining', 'u64'],
]);


/***/ }),

/***/ 15922:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenStandard = exports.UseMethod = exports.MetadataKey = void 0;
var MetadataKey;
(function (MetadataKey) {
    MetadataKey[MetadataKey["Uninitialized"] = 0] = "Uninitialized";
    MetadataKey[MetadataKey["MetadataV1"] = 4] = "MetadataV1";
    MetadataKey[MetadataKey["EditionV1"] = 1] = "EditionV1";
    MetadataKey[MetadataKey["MasterEditionV1"] = 2] = "MasterEditionV1";
    MetadataKey[MetadataKey["MasterEditionV2"] = 6] = "MasterEditionV2";
    MetadataKey[MetadataKey["EditionMarker"] = 7] = "EditionMarker";
})(MetadataKey = exports.MetadataKey || (exports.MetadataKey = {}));
var UseMethod;
(function (UseMethod) {
    UseMethod[UseMethod["Burn"] = 0] = "Burn";
    UseMethod[UseMethod["Single"] = 1] = "Single";
    UseMethod[UseMethod["Multiple"] = 2] = "Multiple";
})(UseMethod = exports.UseMethod || (exports.UseMethod = {}));
var TokenStandard;
(function (TokenStandard) {
    TokenStandard[TokenStandard["NonFungible"] = 0] = "NonFungible";
    TokenStandard[TokenStandard["FungibleAsset"] = 1] = "FungibleAsset";
    TokenStandard[TokenStandard["Fungible"] = 2] = "Fungible";
    TokenStandard[TokenStandard["NonFungibleEdition"] = 3] = "NonFungibleEdition";
})(TokenStandard = exports.TokenStandard || (exports.TokenStandard = {}));


/***/ }),

/***/ 27734:
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
__exportStar(__webpack_require__(15922), exports);
__exportStar(__webpack_require__(74851), exports);
__exportStar(__webpack_require__(74605), exports);
__exportStar(__webpack_require__(69910), exports);
__exportStar(__webpack_require__(6025), exports);
__exportStar(__webpack_require__(64246), exports);
__exportStar(__webpack_require__(27752), exports);


/***/ }),

/***/ 73747:
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
__exportStar(__webpack_require__(27734), exports);
__exportStar(__webpack_require__(26414), exports);
__exportStar(__webpack_require__(85913), exports);


/***/ }),

/***/ 73458:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMasterEdition = exports.CreateMasterEditionArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(20374);
const MetadataProgram_1 = __webpack_require__(26414);
class CreateMasterEditionArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 10;
    }
}
exports.CreateMasterEditionArgs = CreateMasterEditionArgs;
CreateMasterEditionArgs.SCHEMA = CreateMasterEditionArgs.struct([
    ['instruction', 'u8'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
]);
class CreateMasterEdition extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { edition, metadata, updateAuthority, mint, mintAuthority, maxSupply } = params;
        const data = CreateMasterEditionArgs.serialize({
            maxSupply: maxSupply || null,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: edition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateMasterEdition = CreateMasterEdition;


/***/ }),

/***/ 50926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMasterEditionV3 = exports.CreateMasterEditionV3Args = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(20374);
const MetadataProgram_1 = __webpack_require__(26414);
class CreateMasterEditionV3Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 17;
    }
}
exports.CreateMasterEditionV3Args = CreateMasterEditionV3Args;
CreateMasterEditionV3Args.SCHEMA = CreateMasterEditionV3Args.struct([
    ['instruction', 'u8'],
    ['maxSupply', { kind: 'option', type: 'u64' }],
]);
class CreateMasterEditionV3 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { edition, metadata, updateAuthority, mint, mintAuthority, maxSupply } = params;
        const data = CreateMasterEditionV3Args.serialize({
            maxSupply: maxSupply || null,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: edition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateMasterEditionV3 = CreateMasterEditionV3;


/***/ }),

/***/ 62031:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMetadata = exports.CreateMetadataArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const Metadata_1 = __webpack_require__(74851);
const MetadataProgram_1 = __webpack_require__(26414);
class CreateMetadataArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 0;
    }
}
exports.CreateMetadataArgs = CreateMetadataArgs;
CreateMetadataArgs.SCHEMA = new Map([
    ...Metadata_1.MetadataDataData.SCHEMA,
    ...CreateMetadataArgs.struct([
        ['instruction', 'u8'],
        ['data', Metadata_1.MetadataDataData],
        ['isMutable', 'u8'],
    ]),
]);
class CreateMetadata extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { metadata, metadataData, updateAuthority, mint, mintAuthority } = params;
        const data = CreateMetadataArgs.serialize({
            data: metadataData,
            isMutable: true,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateMetadata = CreateMetadata;


/***/ }),

/***/ 89298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMetadataV2 = exports.CreateMetadataV2Args = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const Metadata_1 = __webpack_require__(74851);
const MetadataProgram_1 = __webpack_require__(26414);
class CreateMetadataV2Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 16;
    }
}
exports.CreateMetadataV2Args = CreateMetadataV2Args;
CreateMetadataV2Args.SCHEMA = new Map([
    ...Metadata_1.DataV2.SCHEMA,
    ...CreateMetadataV2Args.struct([
        ['instruction', 'u8'],
        ['data', Metadata_1.DataV2],
        ['isMutable', 'u8'],
    ]),
]);
class CreateMetadataV2 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { metadata, metadataData, updateAuthority, mint, mintAuthority } = params;
        const data = CreateMetadataV2Args.serialize({
            data: metadataData,
            isMutable: true,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateMetadataV2 = CreateMetadataV2;


/***/ }),

/***/ 35945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MintNewEditionFromMasterEditionViaToken = exports.MintNewEditionFromMasterEditionViaTokenArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(20374);
const MetadataProgram_1 = __webpack_require__(26414);
class MintNewEditionFromMasterEditionViaTokenArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 11;
    }
}
exports.MintNewEditionFromMasterEditionViaTokenArgs = MintNewEditionFromMasterEditionViaTokenArgs;
MintNewEditionFromMasterEditionViaTokenArgs.SCHEMA = MintNewEditionFromMasterEditionViaTokenArgs.struct([
    ['instruction', 'u8'],
    ['edition', 'u64'],
]);
class MintNewEditionFromMasterEditionViaToken extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { edition, metadata, updateAuthority, masterEdition, masterMetadata, mint, editionMarker, mintAuthority, tokenOwner, tokenAccount, editionValue, } = params;
        const data = MintNewEditionFromMasterEditionViaTokenArgs.serialize({
            edition: editionValue,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: edition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: masterEdition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: editionMarker,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: mintAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: tokenOwner,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: tokenAccount,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: masterMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.MintNewEditionFromMasterEditionViaToken = MintNewEditionFromMasterEditionViaToken;


/***/ }),

/***/ 70753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignMetadata = exports.SignMetadataArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const MetadataProgram_1 = __webpack_require__(26414);
class SignMetadataArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 7;
    }
}
exports.SignMetadataArgs = SignMetadataArgs;
SignMetadataArgs.SCHEMA = SignMetadataArgs.struct([['instruction', 'u8']]);
class SignMetadata extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, creator } = params;
        const data = SignMetadataArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: creator,
                    isSigner: true,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.SignMetadata = SignMetadata;


/***/ }),

/***/ 65686:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMetadata = exports.UpdateMetadataArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const Metadata_1 = __webpack_require__(74851);
const MetadataProgram_1 = __webpack_require__(26414);
class UpdateMetadataArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 1;
    }
}
exports.UpdateMetadataArgs = UpdateMetadataArgs;
UpdateMetadataArgs.SCHEMA = new Map([
    ...Metadata_1.MetadataDataData.SCHEMA,
    ...UpdateMetadataArgs.struct([
        ['instruction', 'u8'],
        ['data', { kind: 'option', type: Metadata_1.MetadataDataData }],
        ['updateAuthority', { kind: 'option', type: 'pubkeyAsString' }],
        ['primarySaleHappened', { kind: 'option', type: 'u8' }],
    ]),
]);
class UpdateMetadata extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, metadataData, updateAuthority, newUpdateAuthority, primarySaleHappened } = params;
        const data = UpdateMetadataArgs.serialize({
            data: metadataData,
            updateAuthority: newUpdateAuthority && newUpdateAuthority.toString(),
            primarySaleHappened: primarySaleHappened || null,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: true,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdateMetadata = UpdateMetadata;


/***/ }),

/***/ 48144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMetadataV2 = exports.UpdateMetadataV2Args = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const Metadata_1 = __webpack_require__(74851);
const MetadataProgram_1 = __webpack_require__(26414);
class UpdateMetadataV2Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 15;
    }
}
exports.UpdateMetadataV2Args = UpdateMetadataV2Args;
UpdateMetadataV2Args.SCHEMA = new Map([
    ...Metadata_1.DataV2.SCHEMA,
    ...UpdateMetadataV2Args.struct([
        ['instruction', 'u8'],
        ['data', { kind: 'option', type: Metadata_1.DataV2 }],
        ['updateAuthority', { kind: 'option', type: 'pubkeyAsString' }],
        ['primarySaleHappened', { kind: 'option', type: 'u8' }],
        ['isMutable', { kind: 'option', type: 'u8' }],
    ]),
]);
class UpdateMetadataV2 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, metadataData, updateAuthority, newUpdateAuthority, primarySaleHappened, isMutable, } = params;
        const data = UpdateMetadataV2Args.serialize({
            data: metadataData,
            updateAuthority: newUpdateAuthority && newUpdateAuthority.toString(),
            primarySaleHappened: primarySaleHappened || null,
            isMutable: isMutable || null,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: updateAuthority,
                    isSigner: true,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdateMetadataV2 = UpdateMetadataV2;


/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePrimarySaleHappenedViaToken = exports.UpdatePrimarySaleHappenedViaTokenArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const MetadataProgram_1 = __webpack_require__(26414);
class UpdatePrimarySaleHappenedViaTokenArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 4;
    }
}
exports.UpdatePrimarySaleHappenedViaTokenArgs = UpdatePrimarySaleHappenedViaTokenArgs;
UpdatePrimarySaleHappenedViaTokenArgs.SCHEMA = UpdatePrimarySaleHappenedViaTokenArgs.struct([['instruction', 'u8']]);
class UpdatePrimarySaleHappenedViaToken extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { metadata, owner, tokenAccount } = params;
        const data = UpdatePrimarySaleHappenedViaTokenArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: owner,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: tokenAccount,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdatePrimarySaleHappenedViaToken = UpdatePrimarySaleHappenedViaToken;


/***/ }),

/***/ 72853:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyCollection = exports.VerifyCollectionArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(20374);
const MetadataProgram_1 = __webpack_require__(26414);
class VerifyCollectionArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 18;
    }
}
exports.VerifyCollectionArgs = VerifyCollectionArgs;
VerifyCollectionArgs.SCHEMA = new Map([...VerifyCollectionArgs.struct([['instruction', 'u8']])]);
class VerifyCollection extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { metadata, collectionAuthority, collectionMint, collectionMetadata, collectionMasterEdition, } = params;
        const data = VerifyCollectionArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: collectionAuthority,
                    isSigner: true,
                    isWritable: true,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: true,
                },
                {
                    pubkey: collectionMint,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: collectionMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: collectionMasterEdition,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetadataProgram_1.MetadataProgram.PUBKEY,
            data,
        }));
    }
}
exports.VerifyCollection = VerifyCollection;


/***/ }),

/***/ 85913:
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
__exportStar(__webpack_require__(62031), exports);
__exportStar(__webpack_require__(65686), exports);
__exportStar(__webpack_require__(73458), exports);
__exportStar(__webpack_require__(35945), exports);
__exportStar(__webpack_require__(87), exports);
__exportStar(__webpack_require__(70753), exports);
__exportStar(__webpack_require__(48144), exports);
__exportStar(__webpack_require__(89298), exports);
__exportStar(__webpack_require__(50926), exports);
__exportStar(__webpack_require__(72853), exports);
__exportStar(__webpack_require__(70753), exports);


/***/ })

}]);
//# sourceMappingURL=npm-ns.metaplex-foundation.mpl-token-metadata.js.map