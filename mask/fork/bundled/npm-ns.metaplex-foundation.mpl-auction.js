"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9223],{

/***/ 76307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuctionProgram = void 0;
const web3_js_1 = __webpack_require__(39925);
const mpl_core_1 = __webpack_require__(68592);
class AuctionProgram extends mpl_core_1.Program {
}
exports.AuctionProgram = AuctionProgram;
AuctionProgram.PREFIX = 'auction';
AuctionProgram.EXTENDED = 'extended';
AuctionProgram.PUBKEY = new web3_js_1.PublicKey(mpl_core_1.config.programs.auction);


/***/ }),

/***/ 16394:
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
exports.Auction = exports.AuctionData = exports.PriceFloor = exports.BidState = exports.Bid = exports.PriceFloorType = exports.BidStateType = exports.AuctionState = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const bn_js_1 = __importDefault(__webpack_require__(73117));
const buffer_1 = __webpack_require__(7661);
const AuctionProgram_1 = __webpack_require__(76307);
const BidderMetadata_1 = __webpack_require__(1378);
const BidderPot_1 = __webpack_require__(86820);
var AuctionState;
(function (AuctionState) {
    AuctionState[AuctionState["Created"] = 0] = "Created";
    AuctionState[AuctionState["Started"] = 1] = "Started";
    AuctionState[AuctionState["Ended"] = 2] = "Ended";
})(AuctionState = exports.AuctionState || (exports.AuctionState = {}));
var BidStateType;
(function (BidStateType) {
    BidStateType[BidStateType["EnglishAuction"] = 0] = "EnglishAuction";
    BidStateType[BidStateType["OpenEdition"] = 1] = "OpenEdition";
})(BidStateType = exports.BidStateType || (exports.BidStateType = {}));
var PriceFloorType;
(function (PriceFloorType) {
    PriceFloorType[PriceFloorType["None"] = 0] = "None";
    PriceFloorType[PriceFloorType["Minimum"] = 1] = "Minimum";
    PriceFloorType[PriceFloorType["BlindedPrice"] = 2] = "BlindedPrice";
})(PriceFloorType = exports.PriceFloorType || (exports.PriceFloorType = {}));
class Bid extends mpl_core_1.Borsh.Data {
}
exports.Bid = Bid;
Bid.SCHEMA = Bid.struct([
    ['key', 'pubkeyAsString'],
    ['amount', 'u64'],
]);
class BidState extends mpl_core_1.Borsh.Data {
    getWinnerAt(winnerIndex) {
        const convertedIndex = this.bids.length - winnerIndex - 1;
        if (convertedIndex >= 0 && convertedIndex < this.bids.length) {
            return this.bids[convertedIndex].key;
        }
        else {
            return null;
        }
    }
    getAmountAt(winnerIndex) {
        const convertedIndex = this.bids.length - winnerIndex - 1;
        if (convertedIndex >= 0 && convertedIndex < this.bids.length) {
            return this.bids[convertedIndex].amount;
        }
        else {
            return null;
        }
    }
    getWinnerIndex(bidder) {
        if (!this.bids) {
            return null;
        }
        const index = this.bids.findIndex((b) => b.key === bidder);
        if (index !== -1) {
            const zeroBased = this.bids.length - index - 1;
            return zeroBased < this.max.toNumber() ? zeroBased : null;
        }
        return null;
    }
}
exports.BidState = BidState;
BidState.SCHEMA = new Map([
    ...Bid.SCHEMA,
    ...BidState.struct([
        ['type', 'u8'],
        ['bids', [Bid]],
        ['max', 'u64'],
    ]),
]);
class PriceFloor extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super();
        this.type = args.type;
        this.hash = args.hash || new Uint8Array(32);
        if (this.type === PriceFloorType.Minimum) {
            if (args.minPrice) {
                this.hash.set(args.minPrice.toArrayLike(buffer_1.Buffer, 'le', 8), 0);
            }
            else {
                this.minPrice = new bn_js_1.default((args.hash || new Uint8Array(0)).slice(0, 8), 'le');
            }
        }
    }
}
exports.PriceFloor = PriceFloor;
PriceFloor.SCHEMA = PriceFloor.struct([
    ['type', 'u8'],
    ['hash', [32]],
]);
class AuctionData extends mpl_core_1.Borsh.Data {
}
exports.AuctionData = AuctionData;
AuctionData.SCHEMA = new Map([
    ...BidState.SCHEMA,
    ...PriceFloor.SCHEMA,
    ...AuctionData.struct([
        ['authority', 'pubkeyAsString'],
        ['tokenMint', 'pubkeyAsString'],
        ['lastBid', { kind: 'option', type: 'u64' }],
        ['endedAt', { kind: 'option', type: 'u64' }],
        ['endAuctionAt', { kind: 'option', type: 'u64' }],
        ['auctionGap', { kind: 'option', type: 'u64' }],
        ['priceFloor', PriceFloor],
        ['state', 'u8'],
        ['bidState', BidState],
    ]),
]);
class Auction extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(AuctionProgram_1.AuctionProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        this.data = AuctionData.deserialize(this.info.data);
    }
    static getPDA(vault) {
        return AuctionProgram_1.AuctionProgram.findProgramAddress([
            buffer_1.Buffer.from(AuctionProgram_1.AuctionProgram.PREFIX),
            AuctionProgram_1.AuctionProgram.PUBKEY.toBuffer(),
            new web3_js_1.PublicKey(vault).toBuffer(),
        ]);
    }
    static findMany(connection, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield AuctionProgram_1.AuctionProgram.getProgramAccounts(connection, {
                filters: [
                    filters.authority && {
                        memcmp: {
                            offset: 0,
                            bytes: new web3_js_1.PublicKey(filters.authority).toBase58(),
                        },
                    },
                ].filter(Boolean),
            }))
                .map((account) => {
                try {
                    return Auction.from(account);
                }
                catch (err) { }
            })
                .filter(Boolean);
        });
    }
    getBidderPots(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield AuctionProgram_1.AuctionProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        dataSize: BidderPot_1.BidderPot.DATA_SIZE,
                    },
                    {
                        memcmp: {
                            offset: 32 + 32,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => BidderPot_1.BidderPot.from(account));
        });
    }
    getBidderMetadata(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield AuctionProgram_1.AuctionProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        dataSize: BidderMetadata_1.BidderMetadata.DATA_SIZE,
                    },
                    {
                        memcmp: {
                            offset: 32,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => BidderMetadata_1.BidderMetadata.from(account));
        });
    }
}
exports.Auction = Auction;
Auction.EXTENDED_DATA_SIZE = 8 + 9 + 2 + 200;


/***/ }),

/***/ 50746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuctionExtended = exports.AuctionDataExtended = void 0;
const mpl_core_1 = __webpack_require__(68592);
const AuctionProgram_1 = __webpack_require__(76307);
const buffer_1 = __webpack_require__(7661);
const web3_js_1 = __webpack_require__(39925);
class AuctionDataExtended extends mpl_core_1.Borsh.Data {
}
exports.AuctionDataExtended = AuctionDataExtended;
AuctionDataExtended.SCHEMA = AuctionDataExtended.struct([
    ['totalUncancelledBids', 'u64'],
    ['tickSize', { kind: 'option', type: 'u64' }],
    ['gapTickSizePercentage', { kind: 'option', type: 'u8' }],
    ['instantSalePrice', { kind: 'option', type: 'u64' }],
    ['name', { kind: 'option', type: [32] }],
]);
class AuctionExtended extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(AuctionProgram_1.AuctionProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!AuctionExtended.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = AuctionDataExtended.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data.length === AuctionExtended.DATA_SIZE;
    }
    static getPDA(vault) {
        return AuctionProgram_1.AuctionProgram.findProgramAddress([
            buffer_1.Buffer.from(AuctionProgram_1.AuctionProgram.PREFIX),
            AuctionProgram_1.AuctionProgram.PUBKEY.toBuffer(),
            new web3_js_1.PublicKey(vault).toBuffer(),
            buffer_1.Buffer.from(AuctionProgram_1.AuctionProgram.EXTENDED),
        ]);
    }
}
exports.AuctionExtended = AuctionExtended;
AuctionExtended.DATA_SIZE = 8 + 9 + 2 + 200;


/***/ }),

/***/ 1378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BidderMetadata = exports.BidderMetadataData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const AuctionProgram_1 = __webpack_require__(76307);
const buffer_1 = __webpack_require__(7661);
class BidderMetadataData extends mpl_core_1.Borsh.Data {
}
exports.BidderMetadataData = BidderMetadataData;
BidderMetadataData.SCHEMA = BidderMetadataData.struct([
    ['bidderPubkey', 'pubkeyAsString'],
    ['auctionPubkey', 'pubkeyAsString'],
    ['lastBid', 'u64'],
    ['lastBidTimestamp', 'u64'],
    ['cancelled', 'u8'],
]);
class BidderMetadata extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(AuctionProgram_1.AuctionProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!BidderMetadata.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = BidderMetadataData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data.length === BidderMetadata.DATA_SIZE;
    }
    static getPDA(auction, bidder) {
        return AuctionProgram_1.AuctionProgram.findProgramAddress([
            buffer_1.Buffer.from(AuctionProgram_1.AuctionProgram.PREFIX),
            AuctionProgram_1.AuctionProgram.PUBKEY.toBuffer(),
            new web3_js_1.PublicKey(auction).toBuffer(),
            new web3_js_1.PublicKey(bidder).toBuffer(),
            buffer_1.Buffer.from('metadata'),
        ]);
    }
}
exports.BidderMetadata = BidderMetadata;
BidderMetadata.DATA_SIZE = 32 + 32 + 8 + 8 + 1;


/***/ }),

/***/ 86820:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BidderPot = exports.BidderPotData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const AuctionProgram_1 = __webpack_require__(76307);
const web3_js_1 = __webpack_require__(39925);
const buffer_1 = __webpack_require__(7661);
class BidderPotData extends mpl_core_1.Borsh.Data {
}
exports.BidderPotData = BidderPotData;
BidderPotData.SCHEMA = BidderPotData.struct([
    ['bidderPot', 'pubkeyAsString'],
    ['bidderAct', 'pubkeyAsString'],
    ['auctionAct', 'pubkeyAsString'],
    ['emptied', 'u8'],
]);
class BidderPot extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(AuctionProgram_1.AuctionProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!BidderPot.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = BidderPotData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data.length === BidderPot.DATA_SIZE;
    }
    static getPDA(auction, bidder) {
        return AuctionProgram_1.AuctionProgram.findProgramAddress([
            buffer_1.Buffer.from(AuctionProgram_1.AuctionProgram.PREFIX),
            AuctionProgram_1.AuctionProgram.PUBKEY.toBuffer(),
            new web3_js_1.PublicKey(auction).toBuffer(),
            new web3_js_1.PublicKey(bidder).toBuffer(),
        ]);
    }
}
exports.BidderPot = BidderPot;
BidderPot.DATA_SIZE = 32 + 32 + 32 + 1;


/***/ }),

/***/ 67946:
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
__exportStar(__webpack_require__(16394), exports);
__exportStar(__webpack_require__(50746), exports);
__exportStar(__webpack_require__(1378), exports);
__exportStar(__webpack_require__(86820), exports);
__exportStar(__webpack_require__(76307), exports);
__exportStar(__webpack_require__(60570), exports);


/***/ }),

/***/ 50980:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelBid = exports.CancelBidArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const AuctionProgram_1 = __webpack_require__(76307);
class CancelBidArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 0;
    }
}
exports.CancelBidArgs = CancelBidArgs;
CancelBidArgs.SCHEMA = CancelBidArgs.struct([
    ['instruction', 'u8'],
    ['resource', 'pubkeyAsString'],
]);
class CancelBid extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { auction, auctionExtended, bidderPot, bidderMeta, bidder, bidderToken, bidderPotToken, tokenMint, resource, } = params;
        const data = CancelBidArgs.serialize({ resource: resource.toString() });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: bidder,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: bidderToken,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderPot,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderPotToken,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderMeta,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: AuctionProgram_1.AuctionProgram.PUBKEY,
            data,
        }));
    }
}
exports.CancelBid = CancelBid;


/***/ }),

/***/ 51403:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAuction = exports.CreateAuctionArgs = exports.WinnerLimit = exports.WinnerLimitType = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const AuctionProgram_1 = __webpack_require__(76307);
const Auction_1 = __webpack_require__(16394);
var WinnerLimitType;
(function (WinnerLimitType) {
    WinnerLimitType[WinnerLimitType["Unlimited"] = 0] = "Unlimited";
    WinnerLimitType[WinnerLimitType["Capped"] = 1] = "Capped";
})(WinnerLimitType = exports.WinnerLimitType || (exports.WinnerLimitType = {}));
class WinnerLimit extends mpl_core_1.Borsh.Data {
}
exports.WinnerLimit = WinnerLimit;
WinnerLimit.SCHEMA = WinnerLimit.struct([
    ['type', 'u8'],
    ['usize', 'u64'],
]);
class CreateAuctionArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 1;
    }
}
exports.CreateAuctionArgs = CreateAuctionArgs;
CreateAuctionArgs.SCHEMA = new Map([
    ...WinnerLimit.SCHEMA,
    ...Auction_1.PriceFloor.SCHEMA,
    ...CreateAuctionArgs.struct([
        ['instruction', 'u8'],
        ['winners', WinnerLimit],
        ['endAuctionAt', { kind: 'option', type: 'u64' }],
        ['auctionGap', { kind: 'option', type: 'u64' }],
        ['tokenMint', 'pubkeyAsString'],
        ['authority', 'pubkeyAsString'],
        ['resource', 'pubkeyAsString'],
        ['priceFloor', Auction_1.PriceFloor],
        ['tickSize', { kind: 'option', type: 'u64' }],
        ['gapTickSizePercentage', { kind: 'option', type: 'u8' }],
    ]),
]);
class CreateAuction extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { args, auction, auctionExtended, creator } = params;
        const data = CreateAuctionArgs.serialize(args);
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: creator,
                    isSigner: true,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: AuctionProgram_1.AuctionProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateAuction = CreateAuction;


/***/ }),

/***/ 77750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAuctionV2 = exports.CreateAuctionV2Args = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const AuctionProgram_1 = __webpack_require__(76307);
const Auction_1 = __webpack_require__(16394);
const CreateAuction_1 = __webpack_require__(51403);
class CreateAuctionV2Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 7;
    }
}
exports.CreateAuctionV2Args = CreateAuctionV2Args;
_a = CreateAuctionV2Args;
CreateAuctionV2Args.SCHEMA = new Map([
    ...CreateAuction_1.WinnerLimit.SCHEMA,
    ...Auction_1.PriceFloor.SCHEMA,
    ..._a.struct([
        ['instruction', 'u8'],
        ['winners', CreateAuction_1.WinnerLimit],
        ['endAuctionAt', { kind: 'option', type: 'u64' }],
        ['auctionGap', { kind: 'option', type: 'u64' }],
        ['tokenMint', 'pubkeyAsString'],
        ['authority', 'pubkeyAsString'],
        ['resource', 'pubkeyAsString'],
        ['priceFloor', Auction_1.PriceFloor],
        ['tickSize', { kind: 'option', type: 'u64' }],
        ['gapTickSizePercentage', { kind: 'option', type: 'u8' }],
        ['instantSalePrice', { kind: 'option', type: 'u64' }],
        ['name', { kind: 'option', type: [32] }],
    ]),
]);
class CreateAuctionV2 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { args, auction, auctionExtended, creator } = params;
        const data = CreateAuctionV2Args.serialize(args);
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: creator,
                    isSigner: true,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: AuctionProgram_1.AuctionProgram.PUBKEY,
            data,
        }));
    }
}
exports.CreateAuctionV2 = CreateAuctionV2;


/***/ }),

/***/ 16709:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaceBid = exports.PlaceBidArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const AuctionProgram_1 = __webpack_require__(76307);
const spl_token_1 = __webpack_require__(21303);
class PlaceBidArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 6;
    }
}
exports.PlaceBidArgs = PlaceBidArgs;
PlaceBidArgs.SCHEMA = PlaceBidArgs.struct([
    ['instruction', 'u8'],
    ['amount', 'u64'],
    ['resource', 'pubkeyAsString'],
]);
class PlaceBid extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { auction, auctionExtended, bidderPot, bidderMeta, bidder, bidderToken, bidderPotToken, tokenMint, transferAuthority, resource, amount, } = params;
        const data = PlaceBidArgs.serialize({ resource: resource.toString(), amount });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: bidder,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: bidderToken,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderPot,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderPotToken,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderMeta,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: AuctionProgram_1.AuctionProgram.PUBKEY,
            data,
        }));
    }
}
exports.PlaceBid = PlaceBid;


/***/ }),

/***/ 89956:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetAuctionAuthority = exports.SetAuctionAuthorityArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const AuctionProgram_1 = __webpack_require__(76307);
class SetAuctionAuthorityArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 5;
    }
}
exports.SetAuctionAuthorityArgs = SetAuctionAuthorityArgs;
SetAuctionAuthorityArgs.SCHEMA = SetAuctionAuthorityArgs.struct([['instruction', 'u8']]);
class SetAuctionAuthority extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { auction, currentAuthority, newAuthority } = params;
        const data = SetAuctionAuthorityArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: currentAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: newAuthority,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: AuctionProgram_1.AuctionProgram.PUBKEY,
            data,
        }));
    }
}
exports.SetAuctionAuthority = SetAuctionAuthority;


/***/ }),

/***/ 60570:
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
__exportStar(__webpack_require__(50980), exports);
__exportStar(__webpack_require__(51403), exports);
__exportStar(__webpack_require__(77750), exports);
__exportStar(__webpack_require__(16709), exports);
__exportStar(__webpack_require__(89956), exports);


/***/ })

}]);
//# sourceMappingURL=npm-ns.metaplex-foundation.mpl-auction.js.map