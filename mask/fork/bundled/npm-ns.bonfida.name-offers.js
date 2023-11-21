"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2128],{

/***/ 39733:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buyFixedPrice = exports.cancelFixedPriceOffer = exports.makeFixedPriceOffer = exports.registerFavourite = exports.acceptOffer = exports.cancelOffer = exports.makeOffer = exports.ROOT_DOMAIN = exports.FEE_OWNER = exports.NAME_OFFERS_ID_DEVNET = exports.NAME_OFFERS_ID = void 0;
const web3_js_1 = __webpack_require__(20374);
const raw_instructions_1 = __webpack_require__(96925);
const bn_js_1 = __importDefault(__webpack_require__(73182));
const state_1 = __webpack_require__(21207);
const spl_token_1 = __webpack_require__(21303);
const spl_name_service_1 = __webpack_require__(87772);
/** Mainnet program ID */
exports.NAME_OFFERS_ID = new web3_js_1.PublicKey("85iDfUvr3HJyLM2zcq5BXSiDvUWfw6cSE1FfNBo8Ap29");
/** Devnet program ID */
exports.NAME_OFFERS_ID_DEVNET = new web3_js_1.PublicKey("zugu92jR3kqgFiNEJywq7gbbc9NbaLmHLiQhsZRwd6J");
/** Fee collecting address */
exports.FEE_OWNER = new web3_js_1.PublicKey("GcWEQ9K78FV7LEHteFVciYApERk5YvQuFDQPk1yYJVXi");
/** Root TLD */
exports.ROOT_DOMAIN = new web3_js_1.PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx");
/**
 * This function can be used to create an usolicited offer
 * @param amount Raw amount of the offer
 * @param nameAccount The domain name on which the unsolicited offer is made
 * @param owner The owner of the usolicited offer
 * @param quoteMint The quote token mint of the usolicited offer
 * @param tokenSource The token account from which the tokens originate from
 * @param programId The name offer program ID
 * @returns
 */
const makeOffer = async (amount, nameAccount, owner, quoteMint, tokenSource, programId) => {
    const [offerKey] = await state_1.Offer.getKey(programId, owner, quoteMint, nameAccount);
    const [escrow] = await web3_js_1.PublicKey.findProgramAddress([offerKey.toBuffer()], programId);
    const ix = new raw_instructions_1.makeOfferInstruction({
        amount: new bn_js_1.default(amount),
        nameAccount: nameAccount.toBuffer(),
    }).getInstruction(programId, owner, quoteMint, tokenSource, escrow, offerKey, web3_js_1.SystemProgram.programId, web3_js_1.SYSVAR_RENT_PUBKEY, spl_token_1.TOKEN_PROGRAM_ID);
    return [ix];
};
exports.makeOffer = makeOffer;
/**
 * This function can be used to cancel an unsolicited offer
 * @param owner The owner of the unsolicited offer
 * @param tokenDestination The token destination account
 * @param offer The offer account
 * @param programId The name offer program ID
 * @returns
 */
const cancelOffer = async (owner, tokenDestination, offer, programId) => {
    const [escrow] = await web3_js_1.PublicKey.findProgramAddress([offer.toBuffer()], programId);
    const ix = new raw_instructions_1.cancelOfferInstruction().getInstruction(programId, owner, tokenDestination, escrow, offer, spl_token_1.TOKEN_PROGRAM_ID);
    return [ix];
};
exports.cancelOffer = cancelOffer;
/**
 * This function can be used to accept an unsolicited offer
 * @param connection The Solana RPC connection object
 * @param programId The name offer program ID
 * @param offerAccount The offer account
 * @param offerOwner The offer owner account
 * @param offerBeneficiary The offer owner beneficialiciary i.e the person accepting the offer
 * @param nameAccount The domain name on which the unsolicited offer is made
 * @param escrowTokenAccount The escrow token account
 * @param destinationTokenAccount The destination token account
 * @returns
 */
const acceptOffer = async (connection, programId, offerAccount, offerOwner, offerBeneficiary, nameAccount, escrowTokenAccount, destinationTokenAccount) => {
    var _a;
    const ix = [];
    const offer = await state_1.Offer.retrieve(connection, offerAccount);
    const feeAta = await spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, offer.quoteMint, exports.FEE_OWNER);
    if (!((_a = (await connection.getAccountInfo(feeAta))) === null || _a === void 0 ? void 0 : _a.data)) {
        const ix_create_ata = spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, offer.quoteMint, feeAta, exports.FEE_OWNER, offerOwner);
        ix.push(ix_create_ata);
    }
    const ix_accept = new raw_instructions_1.acceptOfferInstruction().getInstruction(programId, offerAccount, offerBeneficiary, nameAccount, escrowTokenAccount, destinationTokenAccount, feeAta, spl_token_1.TOKEN_PROGRAM_ID, spl_name_service_1.NAME_PROGRAM_ID);
    ix.push(ix_accept);
    return ix;
};
exports.acceptOffer = acceptOffer;
/**
 * This function can be used to register a domain name as favorite
 * @param nameAccount The name account being registered as favorite
 * @param owner The owner of the name account
 * @param programId The name offer program ID
 * @returns
 */
const registerFavourite = async (nameAccount, owner, programId) => {
    const [favKey] = await state_1.FavouriteDomain.getKey(programId, owner);
    const ix = new raw_instructions_1.registerFavouriteInstruction().getInstruction(programId, nameAccount, favKey, owner, web3_js_1.SystemProgram.programId);
    return [ix];
};
exports.registerFavourite = registerFavourite;
/**
 * This function can be used to create a fixed price offer
 * @param connection The Solana RPC connection object
 * @param amount The amount of the fixed price offer
 * @param quoteMint The quote token mint of the fixed price offer
 * @param seller The seller i.e creator of the fixed price offer
 * @param nameAccount The name account being sold
 * @param programId The name offer program ID
 * @returns
 */
const makeFixedPriceOffer = async (connection, amount, quoteMint, seller, nameAccount, programId) => {
    var _a;
    const ix = [];
    const tokenDestination = await spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, quoteMint, seller);
    if (!((_a = (await connection.getAccountInfo(tokenDestination))) === null || _a === void 0 ? void 0 : _a.data)) {
        const ix_create_ata = spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, quoteMint, tokenDestination, seller, seller);
        ix.push(ix_create_ata);
    }
    const [fixedKey] = await state_1.FixedPriceOffer.getKey(programId, seller, quoteMint, nameAccount);
    const ix_offer = new raw_instructions_1.makeFixedPriceInstruction({
        amount: new bn_js_1.default(amount),
        quoteMint: quoteMint.toBuffer(),
    }).getInstruction(programId, fixedKey, seller, nameAccount, tokenDestination, spl_name_service_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId);
    ix.push(ix_offer);
    return ix;
};
exports.makeFixedPriceOffer = makeFixedPriceOffer;
/**
 * This function can be used to cancel a fixed price offer
 * @param connection The Solana RPC connection object
 * @param fixedPriceOffer The fixed price offer key
 * @param programId The name offer program ID
 * @returns
 */
const cancelFixedPriceOffer = async (connection, fixedPriceOffer, programId) => {
    const offer = await state_1.FixedPriceOffer.retrieve(connection, fixedPriceOffer);
    const ix = new raw_instructions_1.cancelFixedPriceInstruction().getInstruction(programId, fixedPriceOffer, offer.owner, offer.nameAccount, spl_name_service_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId);
    return [ix];
};
exports.cancelFixedPriceOffer = cancelFixedPriceOffer;
/**
 * This function can be used to buy a fixed a price offer
 * @param connection The Solana RPC connection object
 * @param fixedPriceOffer The fixed price offer being bought
 * @param buyer The buyer of the fixed price offer
 * @param tokenSource The token account used to buy the fixed price offer
 * @param programId The name offer program ID
 * @returns
 */
const buyFixedPrice = async (connection, fixedPriceOffer, buyer, tokenSource, programId) => {
    var _a;
    const ix = [];
    const offer = await state_1.FixedPriceOffer.retrieve(connection, fixedPriceOffer);
    const feeAta = await spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, offer.quoteMint, exports.FEE_OWNER);
    if (!((_a = (await connection.getAccountInfo(feeAta))) === null || _a === void 0 ? void 0 : _a.data)) {
        const ix_create_ata = spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, offer.quoteMint, feeAta, exports.FEE_OWNER, buyer);
        ix.push(ix_create_ata);
    }
    const ix_buy = new raw_instructions_1.buyFixedPriceInstruction().getInstruction(programId, fixedPriceOffer, buyer, offer.nameAccount, offer.tokenDestination, tokenSource, feeAta, spl_token_1.TOKEN_PROGRAM_ID, spl_name_service_1.NAME_PROGRAM_ID);
    ix.push(ix_buy);
    return ix;
};
exports.buyFixedPrice = buyFixedPrice;


/***/ }),

/***/ 75699:
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
__exportStar(__webpack_require__(39733), exports);
__exportStar(__webpack_require__(96925), exports);
__exportStar(__webpack_require__(21207), exports);
__exportStar(__webpack_require__(28857), exports);


/***/ }),

/***/ 96925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerFavouriteInstruction = exports.makeOfferInstruction = exports.makeFixedPriceInstruction = exports.cancelOfferInstruction = exports.cancelFixedPriceInstruction = exports.buyFixedPriceInstruction = exports.acceptOfferInstruction = void 0;
const borsh_1 = __webpack_require__(82083);
const web3_js_1 = __webpack_require__(20374);
class acceptOfferInstruction {
    constructor() {
        this.tag = 2;
    }
    serialize() {
        return (0, borsh_1.serialize)(acceptOfferInstruction.schema, this);
    }
    getInstruction(programId, offerAccount, offerBeneficiary, nameAccount, escrowTokenAccount, destinationTokenAccount, feeAccount, splTokenProgram, nameServiceProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: offerAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: offerBeneficiary,
            isSigner: true,
            isWritable: false,
        });
        keys.push({
            pubkey: nameAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: escrowTokenAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: destinationTokenAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: feeAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: splTokenProgram,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: nameServiceProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.acceptOfferInstruction = acceptOfferInstruction;
acceptOfferInstruction.schema = new Map([
    [
        acceptOfferInstruction,
        {
            kind: "struct",
            fields: [["tag", "u8"]],
        },
    ],
]);
class buyFixedPriceInstruction {
    constructor() {
        this.tag = 5;
    }
    serialize() {
        return (0, borsh_1.serialize)(buyFixedPriceInstruction.schema, this);
    }
    getInstruction(programId, fixedPriceOffer, buyer, nameAccount, tokenDestination, tokenSource, feeAccount, splTokenProgram, nameServiceProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: fixedPriceOffer,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: buyer,
            isSigner: true,
            isWritable: false,
        });
        keys.push({
            pubkey: nameAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: tokenDestination,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: tokenSource,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: feeAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: splTokenProgram,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: nameServiceProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.buyFixedPriceInstruction = buyFixedPriceInstruction;
buyFixedPriceInstruction.schema = new Map([
    [
        buyFixedPriceInstruction,
        {
            kind: "struct",
            fields: [["tag", "u8"]],
        },
    ],
]);
class cancelFixedPriceInstruction {
    constructor() {
        this.tag = 4;
    }
    serialize() {
        return (0, borsh_1.serialize)(cancelFixedPriceInstruction.schema, this);
    }
    getInstruction(programId, fixedPriceOffer, fixedPriceOfferOwner, nameAccount, nameServiceProgram, systemProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: fixedPriceOffer,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: fixedPriceOfferOwner,
            isSigner: true,
            isWritable: false,
        });
        keys.push({
            pubkey: nameAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: nameServiceProgram,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: systemProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.cancelFixedPriceInstruction = cancelFixedPriceInstruction;
cancelFixedPriceInstruction.schema = new Map([
    [
        cancelFixedPriceInstruction,
        {
            kind: "struct",
            fields: [["tag", "u8"]],
        },
    ],
]);
class cancelOfferInstruction {
    constructor() {
        this.tag = 1;
    }
    serialize() {
        return (0, borsh_1.serialize)(cancelOfferInstruction.schema, this);
    }
    getInstruction(programId, owner, tokenDestination, escrowAccount, offerAccount, splTokenProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: owner,
            isSigner: true,
            isWritable: false,
        });
        keys.push({
            pubkey: tokenDestination,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: escrowAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: offerAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: splTokenProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.cancelOfferInstruction = cancelOfferInstruction;
cancelOfferInstruction.schema = new Map([
    [
        cancelOfferInstruction,
        {
            kind: "struct",
            fields: [["tag", "u8"]],
        },
    ],
]);
class makeFixedPriceInstruction {
    constructor(obj) {
        this.tag = 3;
        this.amount = obj.amount;
        this.quoteMint = obj.quoteMint;
    }
    serialize() {
        return (0, borsh_1.serialize)(makeFixedPriceInstruction.schema, this);
    }
    getInstruction(programId, fixedPriceOffer, fixedPriceOfferOwner, nameAccount, tokenDestination, nameServiceProgram, systemProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: fixedPriceOffer,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: fixedPriceOfferOwner,
            isSigner: true,
            isWritable: true,
        });
        keys.push({
            pubkey: nameAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: tokenDestination,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: nameServiceProgram,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: systemProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.makeFixedPriceInstruction = makeFixedPriceInstruction;
makeFixedPriceInstruction.schema = new Map([
    [
        makeFixedPriceInstruction,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["amount", "u64"],
                ["quoteMint", [32]],
            ],
        },
    ],
]);
class makeOfferInstruction {
    constructor(obj) {
        this.tag = 0;
        this.amount = obj.amount;
        this.nameAccount = obj.nameAccount;
    }
    serialize() {
        return (0, borsh_1.serialize)(makeOfferInstruction.schema, this);
    }
    getInstruction(programId, owner, quoteMint, tokenSource, escrowTokenAccount, offerAccount, systemProgram, rentAccount, splTokenProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: owner,
            isSigner: true,
            isWritable: true,
        });
        keys.push({
            pubkey: quoteMint,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: tokenSource,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: escrowTokenAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: offerAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: systemProgram,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: rentAccount,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: splTokenProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.makeOfferInstruction = makeOfferInstruction;
makeOfferInstruction.schema = new Map([
    [
        makeOfferInstruction,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["amount", "u64"],
                ["nameAccount", [32]],
            ],
        },
    ],
]);
class registerFavouriteInstruction {
    constructor() {
        this.tag = 6;
    }
    serialize() {
        return (0, borsh_1.serialize)(registerFavouriteInstruction.schema, this);
    }
    getInstruction(programId, nameAccount, favouriteAccount, owner, systemProgram) {
        const data = Buffer.from(this.serialize());
        let keys = [];
        keys.push({
            pubkey: nameAccount,
            isSigner: false,
            isWritable: false,
        });
        keys.push({
            pubkey: favouriteAccount,
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: owner,
            isSigner: true,
            isWritable: true,
        });
        keys.push({
            pubkey: systemProgram,
            isSigner: false,
            isWritable: false,
        });
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.registerFavouriteInstruction = registerFavouriteInstruction;
registerFavouriteInstruction.schema = new Map([
    [
        registerFavouriteInstruction,
        {
            kind: "struct",
            fields: [["tag", "u8"]],
        },
    ],
]);


/***/ }),

/***/ 21207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FixedPriceOffer = exports.FavouriteDomain = exports.Offer = exports.Tag = void 0;
const borsh_1 = __webpack_require__(82083);
const web3_js_1 = __webpack_require__(20374);
/**
 * Account tags (used for deserialization on-chain)
 */
var Tag;
(function (Tag) {
    Tag[Tag["Uninitialized"] = 0] = "Uninitialized";
    Tag[Tag["ActiveOffer"] = 1] = "ActiveOffer";
    Tag[Tag["CancelledOffer"] = 2] = "CancelledOffer";
    Tag[Tag["AcceptedOffer"] = 3] = "AcceptedOffer";
    Tag[Tag["FavouriteDomain"] = 4] = "FavouriteDomain";
    Tag[Tag["FixedPriceOffer"] = 5] = "FixedPriceOffer";
    Tag[Tag["AcceptedFixedPriceOffer"] = 6] = "AcceptedFixedPriceOffer";
    Tag[Tag["CancelledFixedPriceOffer"] = 7] = "CancelledFixedPriceOffer";
})(Tag = exports.Tag || (exports.Tag = {}));
class Offer {
    constructor(obj) {
        this.tag = obj.tag;
        this.nonce = obj.nonce;
        this.nameAccount = new web3_js_1.PublicKey(obj.nameAccount);
        this.owner = new web3_js_1.PublicKey(obj.owner);
        this.quoteMint = new web3_js_1.PublicKey(obj.quoteMint);
        this.offerAmount = obj.offerAmount;
        this.escrow = new web3_js_1.PublicKey(obj.escrow);
    }
    /**
     * This function can be used to deserialize a Buffer into an Offer object
     * @param data The buffer to deserialize
     * @returns
     */
    static deserialize(data) {
        return (0, borsh_1.deserialize)(this.schema, Offer, data);
    }
    /**
     * This function can be used to retrieve and deserialize an offer
     * @param connection The Solana RPC connection object
     * @param key The offer key
     * @returns
     */
    static async retrieve(connection, key) {
        const accountInfo = await connection.getAccountInfo(key);
        if (!accountInfo || !accountInfo.data) {
            throw new Error("Offer not found");
        }
        return this.deserialize(accountInfo.data);
    }
    /**
     * This function can be used to derive the PDA of an offer
     * @param programId The name offer program ID
     * @param owner The owner of the offer
     * @param quoteMint The quote mint of the offer
     * @param nameAccount The name account key
     * @returns
     */
    static async getKey(programId, owner, quoteMint, nameAccount) {
        return await web3_js_1.PublicKey.findProgramAddress([
            Buffer.from("offer_account"),
            owner.toBuffer(),
            quoteMint.toBuffer(),
            nameAccount.toBuffer(),
        ], programId);
    }
}
exports.Offer = Offer;
Offer.schema = new Map([
    [
        Offer,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["nonce", "u8"],
                ["nameAccount", [32]],
                ["owner", [32]],
                ["quoteMint", [32]],
                ["offerAmount", "u64"],
                ["escrow", [32]],
            ],
        },
    ],
]);
class FavouriteDomain {
    constructor(obj) {
        this.tag = obj.tag;
        this.nameAccount = new web3_js_1.PublicKey(obj.nameAccount);
    }
    /**
     * This function can be used to deserialize a Buffer into a FavouriteDomain object
     * @param data The buffer to deserialize
     * @returns
     */
    static deserialize(data) {
        return (0, borsh_1.deserialize)(this.schema, FavouriteDomain, data);
    }
    /**
     * This function can be used to retrieve and deserialize a favorite domain
     * @param connection The Solana RPC connection object
     * @param key The favorite account key
     * @returns
     */
    static async retrieve(connection, key) {
        const accountInfo = await connection.getAccountInfo(key);
        if (!accountInfo || !accountInfo.data) {
            throw new Error("Favourite domain not found");
        }
        return this.deserialize(accountInfo.data);
    }
    /**
     * This function can be used to derive the key of a favorite domain
     * @param programId The name offer program ID
     * @param owner The owner to retrieve the favorite domain for
     * @returns
     */
    static async getKey(programId, owner) {
        return await web3_js_1.PublicKey.findProgramAddress([Buffer.from("favourite_domain"), owner.toBuffer()], programId);
    }
}
exports.FavouriteDomain = FavouriteDomain;
FavouriteDomain.schema = new Map([
    [
        FavouriteDomain,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["nameAccount", [32]],
            ],
        },
    ],
]);
class FixedPriceOffer {
    constructor(obj) {
        this.tag = obj.tag;
        this.nonce = obj.nonce;
        this.nameAccount = new web3_js_1.PublicKey(obj.nameAccount);
        this.owner = new web3_js_1.PublicKey(obj.owner);
        this.quoteMint = new web3_js_1.PublicKey(obj.quoteMint);
        this.offerAmount = obj.offerAmount;
        this.tokenDestination = new web3_js_1.PublicKey(obj.tokenDestination);
    }
    /**
     * This function can be used to deserialize a Buffer into a FixedPriceOffer object
     * @param data The buffer to deserialize
     * @returns
     */
    static deserialize(data) {
        return (0, borsh_1.deserialize)(this.schema, FixedPriceOffer, data);
    }
    /**
     * This function can be used to retrieve and deserialize a fixed price offer
     * @param connection The Solana RPC connection object
     * @param key The key of the fixed price offer
     * @returns
     */
    static async retrieve(connection, key) {
        const accountInfo = await connection.getAccountInfo(key);
        if (!accountInfo || !accountInfo.data) {
            throw new Error("Fixed price offer not found");
        }
        return this.deserialize(accountInfo.data);
    }
    /**
     * This function can be used to derive the key of a fixed price offer
     * @param programId The name offer program ID
     * @param owner The owner of the fixed price
     * @param quoteMint The quote mint of the fixed price offer
     * @param nameAccount The name account of the fixed price offer
     * @returns
     */
    static async getKey(programId, owner, quoteMint, nameAccount) {
        return await web3_js_1.PublicKey.findProgramAddress([
            Buffer.from("fixed_price_offer"),
            owner.toBuffer(),
            quoteMint.toBuffer(),
            nameAccount.toBuffer(),
        ], programId);
    }
}
exports.FixedPriceOffer = FixedPriceOffer;
FixedPriceOffer.schema = new Map([
    [
        FixedPriceOffer,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["nonce", "u8"],
                ["nameAccount", [32]],
                ["owner", [32]],
                ["quoteMint", [32]],
                ["offerAmount", "u64"],
                ["tokenDestination", [32]],
            ],
        },
    ],
]);


/***/ }),

/***/ 28857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signAndSendTransactionInstructions = exports.sleep = exports.getAllFixedPrice = exports.getFixedPriceOffersForOwner = exports.getFixedPriceOffersForName = exports.getOffersForOwner = exports.getOffersForName = void 0;
const web3_js_1 = __webpack_require__(20374);
const bindings_1 = __webpack_require__(39733);
const state_1 = __webpack_require__(21207);
const getOffersForName = async (connection, name) => {
    const filters = [
        {
            memcmp: {
                offset: 1 + 1,
                bytes: name.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 0,
                bytes: "2",
            },
        },
    ];
    const result = await connection.getProgramAccounts(bindings_1.NAME_OFFERS_ID, {
        filters,
    });
    return result.map((r) => {
        return { pubkey: r.pubkey, offer: state_1.Offer.deserialize(r.account.data) };
    });
};
exports.getOffersForName = getOffersForName;
const getOffersForOwner = async (connection, owner) => {
    const filters = [
        {
            memcmp: {
                offset: 1 + 1 + 32,
                bytes: owner.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 0,
                bytes: "2",
            },
        },
    ];
    const result = await connection.getProgramAccounts(bindings_1.NAME_OFFERS_ID, {
        filters,
    });
    return result.map((r) => {
        return { pubkey: r.pubkey, offer: state_1.Offer.deserialize(r.account.data) };
    });
};
exports.getOffersForOwner = getOffersForOwner;
const getFixedPriceOffersForName = async (connection, name) => {
    const filters = [
        {
            memcmp: {
                offset: 1 + 1,
                bytes: name.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 0,
                bytes: "6",
            },
        },
    ];
    const result = await connection.getProgramAccounts(bindings_1.NAME_OFFERS_ID, {
        filters,
    });
    return result.map((r) => {
        return {
            pubkey: r.pubkey,
            offer: state_1.FixedPriceOffer.deserialize(r.account.data),
        };
    });
};
exports.getFixedPriceOffersForName = getFixedPriceOffersForName;
const getFixedPriceOffersForOwner = async (connection, owner) => {
    const filters = [
        {
            memcmp: {
                offset: 1 + 1 + 32,
                bytes: owner.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 0,
                bytes: "6",
            },
        },
    ];
    const result = await connection.getProgramAccounts(bindings_1.NAME_OFFERS_ID, {
        filters,
    });
    return result.map((r) => {
        return {
            pubkey: r.pubkey,
            offer: state_1.FixedPriceOffer.deserialize(r.account.data),
        };
    });
};
exports.getFixedPriceOffersForOwner = getFixedPriceOffersForOwner;
const getAllFixedPrice = async (connection) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: "6",
            },
        },
    ];
    const result = await connection.getProgramAccounts(bindings_1.NAME_OFFERS_ID, {
        filters,
    });
    return result.map((r) => {
        return {
            pubkey: r.pubkey,
            offer: state_1.FixedPriceOffer.deserialize(r.account.data),
        };
    });
};
exports.getAllFixedPrice = getAllFixedPrice;
async function sleep(ms) {
    console.log("Sleeping for ", ms, " ms");
    return await new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
const signAndSendTransactionInstructions = async (
// sign and send transaction
connection, signers, feePayer, txInstructions) => {
    const tx = new web3_js_1.Transaction();
    tx.feePayer = feePayer.publicKey;
    signers.push(feePayer);
    tx.add(...txInstructions);
    return await connection.sendTransaction(tx, signers, {
        skipPreflight: false,
    });
};
exports.signAndSendTransactionInstructions = signAndSendTransactionInstructions;


/***/ })

}]);
//# sourceMappingURL=npm-ns.bonfida.name-offers.js.map