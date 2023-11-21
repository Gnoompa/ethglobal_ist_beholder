"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9831],{

/***/ 42460:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDomainName = exports.deleteNameRegistry = exports.transferNameOwnership = exports.updateNameRegistryData = exports.createNameRegistry = void 0;
const web3_js_1 = __webpack_require__(20374);
const instructions_1 = __webpack_require__(90827);
const state_1 = __webpack_require__(58517);
const int_1 = __webpack_require__(41144);
const utils_1 = __webpack_require__(87403);
const constants_1 = __webpack_require__(3857);
/**
 * Creates a name account with the given rent budget, allocated space, owner and class.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the new account
 * @param space The space in bytes allocated to the account
 * @param payerKey The allocation cost payer
 * @param nameOwner The pubkey to be set as owner of the new name account
 * @param lamports The budget to be set for the name account. If not specified, it'll be the minimum for rent exemption
 * @param nameClass The class of this new name
 * @param parentName The parent name of the new name. If specified its owner needs to sign
 * @returns
 */
async function createNameRegistry(connection, name, space, payerKey, nameOwner, lamports, nameClass, parentName) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, parentName);
    const balance = lamports
        ? lamports
        : await connection.getMinimumBalanceForRentExemption(space);
    let nameParentOwner;
    if (parentName) {
        const { registry: parentAccount } = await (0, utils_1.getNameOwner)(connection, parentName);
        nameParentOwner = parentAccount.owner;
    }
    const createNameInstr = (0, instructions_1.createInstruction)(constants_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, nameAccountKey, nameOwner, payerKey, hashed_name, 
    //@ts-ignore
    new int_1.Numberu64(balance), 
    //@ts-ignore
    new int_1.Numberu32(space), nameClass, parentName, nameParentOwner);
    return createNameInstr;
}
exports.createNameRegistry = createNameRegistry;
/**
 * Overwrite the data of the given name registry.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name registry to update
 * @param offset The offset to which the data should be written into the registry
 * @param input_data The data to be written
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 */
async function updateNameRegistryData(connection, name, offset, input_data, nameClass, nameParent) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, nameParent);
    let signer;
    if (nameClass) {
        signer = nameClass;
    }
    else {
        signer = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .registry.owner;
    }
    const updateInstr = (0, instructions_1.updateInstruction)(constants_1.NAME_PROGRAM_ID, nameAccountKey, 
    //@ts-ignore
    new int_1.Numberu32(offset), input_data, signer);
    return updateInstr;
}
exports.updateNameRegistryData = updateNameRegistryData;
/**
 * Change the owner of a given name account.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param newOwner The new owner to be set
 * @param curentNameOwner the current name Owner
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @param parentOwner Parent name owner
 * @returns
 */
async function transferNameOwnership(connection, name, newOwner, nameClass, nameParent, parentOwner) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, nameParent);
    let curentNameOwner;
    if (nameClass) {
        curentNameOwner = nameClass;
    }
    else {
        curentNameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey)).registry.owner;
    }
    const transferInstr = (0, instructions_1.transferInstruction)(constants_1.NAME_PROGRAM_ID, nameAccountKey, newOwner, curentNameOwner, nameClass, nameParent, parentOwner);
    return transferInstr;
}
exports.transferNameOwnership = transferNameOwnership;
/**
 * Delete the name account and transfer the rent to the target.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param refundTargetKey The refund destination address
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @returns
 */
async function deleteNameRegistry(connection, name, refundTargetKey, nameClass, nameParent) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, nameParent);
    let nameOwner;
    if (nameClass) {
        nameOwner = nameClass;
    }
    else {
        nameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .registry.owner;
    }
    const changeAuthoritiesInstr = (0, instructions_1.deleteInstruction)(constants_1.NAME_PROGRAM_ID, nameAccountKey, refundTargetKey, nameOwner);
    return changeAuthoritiesInstr;
}
exports.deleteNameRegistry = deleteNameRegistry;
/**
 * This function can be used to register a .sol domain
 * @param name The domain name to register e.g bonfida if you want to register bonfida.sol
 * @param space The domain name account size (max 10kB)
 * @param buyer The public key of the buyer
 * @param buyerTokenAccount The buyer FIDA token account
 * @returns
 */
const registerDomainName = async (name, space, buyer, buyerTokenAccount) => {
    const [centralState] = await web3_js_1.PublicKey.findProgramAddress([constants_1.REGISTER_PROGRAM_ID.toBuffer()], constants_1.REGISTER_PROGRAM_ID);
    const hashed = await (0, utils_1.getHashedName)(name);
    const nameAccount = await (0, utils_1.getNameAccountKey)(hashed, undefined, constants_1.ROOT_DOMAIN_ACCOUNT);
    const hashedReverseLookup = await (0, utils_1.getHashedName)(nameAccount.toBase58());
    const reverseLookupAccount = await (0, utils_1.getNameAccountKey)(hashedReverseLookup, centralState);
    const [derived_state] = await web3_js_1.PublicKey.findProgramAddress([nameAccount.toBuffer()], constants_1.REGISTER_PROGRAM_ID);
    const ix = new instructions_1.createV2Instruction({ name, space }).getInstruction(constants_1.REGISTER_PROGRAM_ID, web3_js_1.SYSVAR_RENT_PUBKEY, constants_1.NAME_PROGRAM_ID, constants_1.ROOT_DOMAIN_ACCOUNT, nameAccount, reverseLookupAccount, centralState, buyer, buyerTokenAccount, constants_1.BONFIDA_FIDA_BNB, derived_state);
    return [[], [ix]];
};
exports.registerDomainName = registerDomainName;


/***/ }),

/***/ 3857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = exports.TWITTER_VERIFICATION_AUTHORITY = exports.REVERSE_LOOKUP_CLASS = exports.BONFIDA_FIDA_BNB = exports.PYTH_FIDDA_PRICE_ACC = exports.REGISTER_PROGRAM_ID = exports.ROOT_DOMAIN_ACCOUNT = exports.HASH_PREFIX = exports.NAME_PROGRAM_ID = void 0;
const web3_js_1 = __webpack_require__(20374);
/**
 * The Solana Name Service program ID
 */
exports.NAME_PROGRAM_ID = new web3_js_1.PublicKey("namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX");
/**
 * Hash prefix used to derive domain name addresses
 */
exports.HASH_PREFIX = "SPL Name Service";
/**
 * The `.sol` TLD
 */
exports.ROOT_DOMAIN_ACCOUNT = new web3_js_1.PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx");
/**
 * The Registry program ID
 */
exports.REGISTER_PROGRAM_ID = new web3_js_1.PublicKey("jCebN34bUfdeUYJT13J1yG16XWQpt5PDx6Mse9GUqhR");
/**
 * The FIDA Pyth price feed
 */
exports.PYTH_FIDDA_PRICE_ACC = new web3_js_1.PublicKey("ETp9eKXVv1dWwHSpsXRUuXHmw24PwRkttCGVgpZEY9zF");
/**
 * The FIDA buy and burn address
 */
exports.BONFIDA_FIDA_BNB = new web3_js_1.PublicKey("AUoZ3YAhV3b2rZeEH93UMZHXUZcTramBvb4d9YEVySkc");
/**
 * The reverse look up class
 */
exports.REVERSE_LOOKUP_CLASS = new web3_js_1.PublicKey("33m47vH6Eav6jr5Ry86XjhRft2jRBLDnDgPSHoquXi2Z");
/**
 * The `.twitter` TLD authority
 */
exports.TWITTER_VERIFICATION_AUTHORITY = new web3_js_1.PublicKey("FvPH7PrVrLGKPfqaf3xJodFTjZriqrAXXLTVWEorTFBi");
/**
 * The `.twitter` TLD
 */
exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = new web3_js_1.PublicKey("4YcexoW3r78zz16J2aqmukBLRwGq6rAvWzJpkYAXqebv");


/***/ }),

/***/ 22345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFavoriteDomain = void 0;
const name_offers_1 = __webpack_require__(75699);
const utils_1 = __webpack_require__(87403);
const web3_js_1 = __webpack_require__(20374);
/**
 * This function can be used to retrieve the favorite domain of a user
 * @param connection The Solana RPC connection object
 * @param owner The owner you want to retrieve the favorite domain for
 * @returns
 */
const getFavoriteDomain = async (connection, owner) => {
    const [favKey] = await name_offers_1.FavouriteDomain.getKey(name_offers_1.NAME_OFFERS_ID, new web3_js_1.PublicKey(owner));
    const favorite = await name_offers_1.FavouriteDomain.retrieve(connection, favKey);
    const reverse = await (0, utils_1.performReverseLookup)(connection, favorite.nameAccount);
    return { domain: favorite.nameAccount, reverse };
};
exports.getFavoriteDomain = getFavoriteDomain;


/***/ }),

/***/ 17437:
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
__exportStar(__webpack_require__(87403), exports);
__exportStar(__webpack_require__(42460), exports);
__exportStar(__webpack_require__(58517), exports);
__exportStar(__webpack_require__(74334), exports);
__exportStar(__webpack_require__(98595), exports);
__exportStar(__webpack_require__(87403), exports);
__exportStar(__webpack_require__(90827), exports);
__exportStar(__webpack_require__(3994), exports);
__exportStar(__webpack_require__(22345), exports);
__exportStar(__webpack_require__(3857), exports);
__exportStar(__webpack_require__(41144), exports);
__exportStar(__webpack_require__(22197), exports);
__exportStar(__webpack_require__(81449), exports);
__exportStar(__webpack_require__(34931), exports);


/***/ }),

/***/ 90827:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createV2Instruction = exports.deleteInstruction = exports.transferInstruction = exports.updateInstruction = exports.createInstruction = void 0;
const web3_js_1 = __webpack_require__(20374);
const spl_token_1 = __webpack_require__(21303);
const int_1 = __webpack_require__(41144);
const borsh_1 = __webpack_require__(71433);
const constants_1 = __webpack_require__(3857);
function createInstruction(nameProgramId, systemProgramId, nameKey, nameOwnerKey, payerKey, hashed_name, lamports, space, nameClassKey, nameParent, nameParentOwner) {
    const buffers = [
        Buffer.from(Int8Array.from([0])),
        //@ts-ignore
        new int_1.Numberu32(hashed_name.length).toBuffer(),
        hashed_name,
        lamports.toBuffer(),
        space.toBuffer(),
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: systemProgramId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: payerKey,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: nameKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: false,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParent) {
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParentOwner) {
        keys.push({
            pubkey: nameParentOwner,
            isSigner: true,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.createInstruction = createInstruction;
function updateInstruction(nameProgramId, nameAccountKey, offset, input_data, nameUpdateSigner) {
    const buffers = [
        Buffer.from(Int8Array.from([1])),
        offset.toBuffer(),
        //@ts-ignore
        new int_1.Numberu32(input_data.length).toBuffer(),
        input_data,
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameUpdateSigner,
            isSigner: true,
            isWritable: false,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.updateInstruction = updateInstruction;
function transferInstruction(nameProgramId, nameAccountKey, newOwnerKey, currentNameOwnerKey, nameClassKey, nameParent, parentOwner) {
    const buffers = [Buffer.from(Int8Array.from([2])), newOwnerKey.toBuffer()];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: parentOwner ? parentOwner : currentNameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    if (parentOwner && nameParent) {
        if (!nameClassKey) {
            keys.push({
                pubkey: web3_js_1.PublicKey.default,
                isSigner: false,
                isWritable: false,
            });
        }
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.transferInstruction = transferInstruction;
function deleteInstruction(nameProgramId, nameAccountKey, refundTargetKey, nameOwnerKey) {
    const buffers = [Buffer.from(Int8Array.from([3]))];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: refundTargetKey,
            isSigner: false,
            isWritable: true,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.deleteInstruction = deleteInstruction;
class createV2Instruction {
    constructor(obj) {
        this.tag = 9;
        this.name = obj.name;
        this.space = obj.space;
    }
    serialize() {
        return (0, borsh_1.serialize)(createV2Instruction.schema, this);
    }
    getInstruction(programId, rentSysvarAccount, nameProgramId, rootDomain, nameAccount, reverseLookupAccount, centralState, buyer, buyerTokenAccount, fidaVault, state) {
        const data = Buffer.from(this.serialize());
        const keys = [
            {
                pubkey: rentSysvarAccount,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: nameProgramId,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: rootDomain,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: nameAccount,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: reverseLookupAccount,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: web3_js_1.SystemProgram.programId,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: centralState,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: buyer,
                isSigner: true,
                isWritable: true,
            },
            {
                pubkey: buyerTokenAccount,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: constants_1.PYTH_FIDDA_PRICE_ACC,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: fidaVault,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: state,
                isSigner: false,
                isWritable: false,
            },
        ];
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.createV2Instruction = createV2Instruction;
createV2Instruction.schema = new Map([
    [
        createV2Instruction,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["name", "string"],
                ["space", "u32"],
            ],
        },
    ],
]);


/***/ }),

/***/ 41144:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Numberu64 = exports.Numberu32 = void 0;
const bn_js_1 = __importDefault(__webpack_require__(73117));
class Numberu32 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 4) {
            return b;
        }
        if (b.length > 4) {
            throw new Error("Numberu32 too large");
        }
        const zeroPad = Buffer.alloc(4);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 4) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(""), 16);
    }
}
exports.Numberu32 = Numberu32;
class Numberu64 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        if (b.length > 8) {
            throw new Error("Numberu64 too large");
        }
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 8) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(""), 16);
    }
}
exports.Numberu64 = Numberu64;


/***/ }),

/***/ 3994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retrieveNfts = exports.retrieveNftOwner = exports.MINT_PREFIX = exports.NAME_TOKENIZER_ID = void 0;
const web3_js_1 = __webpack_require__(20374);
const spl_token_1 = __webpack_require__(21303);
/**
 * Mainnet program ID
 */
exports.NAME_TOKENIZER_ID = new web3_js_1.PublicKey("nftD3vbNkNqfj2Sd3HZwbpw4BxxKWr4AjGb9X38JeZk");
/**
 * PDA prefix
 */
exports.MINT_PREFIX = Buffer.from("tokenized_name");
/**
 * This function can be used to retrieve the owner of a tokenized domain name
 *
 * @param connection The solana connection object to the RPC node
 * @param nameAccount The key of the domain name
 * @returns
 */
const retrieveNftOwner = async (connection, nameAccount) => {
    var _a;
    try {
        const [mint] = await web3_js_1.PublicKey.findProgramAddress([exports.MINT_PREFIX, nameAccount.toBuffer()], exports.NAME_TOKENIZER_ID);
        const mintInfo = await (0, spl_token_1.getMint)(connection, mint);
        if (mintInfo.supply.toString() === "0") {
            return undefined;
        }
        const { value } = await connection.getTokenLargestAccounts(mint);
        const holder = (_a = value.find((e) => e.amount === "1")) === null || _a === void 0 ? void 0 : _a.address;
        if (!holder) {
            return undefined;
        }
        const info = await connection.getAccountInfo(holder);
        if (!info || !info.data) {
            return undefined;
        }
        return new web3_js_1.PublicKey(info.data.slice(32, 64));
    }
    catch {
        return undefined;
    }
};
exports.retrieveNftOwner = retrieveNftOwner;
/**
 * This function can be used to retrieve all the tokenized domains name
 *
 * @param connection The solana connection object to the RPC node
 * @returns
 */
const retrieveNfts = async (connection) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: "3",
            },
        },
    ];
    const result = await connection.getProgramAccounts(exports.NAME_TOKENIZER_ID, {
        filters,
    });
    const offset = 1 + 1 + 32 + 32;
    return result.map((e) => new web3_js_1.PublicKey(e.account.data.slice(offset, offset + 32)));
};
exports.retrieveNfts = retrieveNfts;


/***/ }),

/***/ 22197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPointRecord = exports.getSolRecord = exports.getShdwRecord = exports.getPicRecord = exports.getTelegramRecord = exports.getTwitterRecord = exports.getRedditRecord = exports.getGithubRecord = exports.getDiscordRecord = exports.getUrlRecord = exports.getEmailRecord = exports.getDogeRecord = exports.getLtcRecord = exports.getBtcRecord = exports.getEthRecord = exports.getArweaveRecord = exports.getIpfsRecord = exports.getRecord = void 0;
const record_1 = __webpack_require__(81449);
const utils_1 = __webpack_require__(87403);
const state_1 = __webpack_require__(58517);
/**
 * This function can be used to retrieve a specified record for the given domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @param record The record to search for
 * @returns
 */
const getRecord = async (connection, domain, record) => {
    var _a, _b;
    const { pubkey } = await (0, utils_1.getDomainKey)(record + "." + domain, true);
    let { registry } = await state_1.NameRegistryState.retrieve(connection, pubkey);
    // Remove trailling 0s
    const idx = (_a = registry.data) === null || _a === void 0 ? void 0 : _a.indexOf(0x00);
    registry.data = (_b = registry.data) === null || _b === void 0 ? void 0 : _b.slice(0, idx);
    return registry;
};
exports.getRecord = getRecord;
/**
 * This function can be used to retrieve the IPFS record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getIpfsRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.IPFS);
};
exports.getIpfsRecord = getIpfsRecord;
/**
 * This function can be used to retrieve the Arweave record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getArweaveRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.ARWV);
};
exports.getArweaveRecord = getArweaveRecord;
/**
 * This function can be used to retrieve the ETH record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getEthRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.ETH);
};
exports.getEthRecord = getEthRecord;
/**
 * This function can be used to retrieve the BTC record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getBtcRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.BTC);
};
exports.getBtcRecord = getBtcRecord;
/**
 * This function can be used to retrieve the LTC record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getLtcRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.LTC);
};
exports.getLtcRecord = getLtcRecord;
/**
 * This function can be used to retrieve the DOGE record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getDogeRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.DOGE);
};
exports.getDogeRecord = getDogeRecord;
/**
 * This function can be used to retrieve the email record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getEmailRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Email);
};
exports.getEmailRecord = getEmailRecord;
/**
 * This function can be used to retrieve the URL record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getUrlRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Url);
};
exports.getUrlRecord = getUrlRecord;
/**
 * This function can be used to retrieve the Discord record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getDiscordRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Discord);
};
exports.getDiscordRecord = getDiscordRecord;
/**
 * This function can be used to retrieve the Github record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getGithubRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Github);
};
exports.getGithubRecord = getGithubRecord;
/**
 * This function can be used to retrieve the Reddit record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getRedditRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Reddit);
};
exports.getRedditRecord = getRedditRecord;
/**
 * This function can be used to retrieve the Twitter record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getTwitterRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Twitter);
};
exports.getTwitterRecord = getTwitterRecord;
/**
 * This function can be used to retrieve the Telegram record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getTelegramRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Telegram);
};
exports.getTelegramRecord = getTelegramRecord;
/**
 * This function can be used to retrieve the pic record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getPicRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Pic);
};
exports.getPicRecord = getPicRecord;
/**
 * This function can be used to retrieve the SHDW record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getShdwRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.SHDW);
};
exports.getShdwRecord = getShdwRecord;
/**
 * This function can be used to retrieve the SOL record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getSolRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.SOL);
};
exports.getSolRecord = getSolRecord;
/**
 * This function can be used to retrieve the POINT record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getPointRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.POINT);
};
exports.getPointRecord = getPointRecord;


/***/ }),

/***/ 34931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolve = exports.checkSolRecord = void 0;
const web3_js_1 = __webpack_require__(20374);
const record_1 = __webpack_require__(22197);
const utils_1 = __webpack_require__(87403);
const state_1 = __webpack_require__(58517);
const tweetnacl_1 = __webpack_require__(49538);
const record_2 = __webpack_require__(81449);
/**
 * This function can be used to verify the validity of a SOL record
 * @param record The record data to verify
 * @param signedRecord The signed data
 * @param pubkey The public key of the signer
 * @returns
 */
const checkSolRecord = (record, signedRecord, pubkey) => {
    return tweetnacl_1.sign.detached.verify(record, signedRecord, pubkey.toBytes());
};
exports.checkSolRecord = checkSolRecord;
/**
 * This function can be used to resolve a domain name to transfer funds
 * @param connection The Solana RPC connection object
 * @param domain The domain to resolve
 * @returns
 */
const resolve = async (connection, domain) => {
    var _a;
    const { pubkey } = await (0, utils_1.getDomainKey)(domain);
    const { registry, nftOwner } = await state_1.NameRegistryState.retrieve(connection, pubkey);
    if (nftOwner) {
        return nftOwner;
    }
    try {
        const recordKey = await (0, utils_1.getDomainKey)(record_2.Record.SOL + "." + domain, true);
        const solRecord = await (0, record_1.getSolRecord)(connection, domain);
        if (((_a = solRecord.data) === null || _a === void 0 ? void 0 : _a.length) !== 96) {
            throw new Error("Invalid SOL record data");
        }
        const encoder = new TextEncoder();
        const expectedBuffer = Buffer.concat([
            solRecord.data.slice(0, 32),
            recordKey.pubkey.toBuffer(),
        ]);
        const expected = encoder.encode(expectedBuffer.toString("hex"));
        const valid = (0, exports.checkSolRecord)(expected, solRecord.data.slice(32), registry.owner);
        if (!valid) {
            throw new Error("Signature invalid");
        }
        return new web3_js_1.PublicKey(solRecord.data.slice(0, 32));
    }
    catch (err) {
        console.log(err);
    }
    return registry.owner;
};
exports.resolve = resolve;


/***/ }),

/***/ 58517:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mint = exports.TokenData = exports.NameRegistryState = void 0;
const web3_js_1 = __webpack_require__(20374);
const borsh_1 = __webpack_require__(71433);
const nft_1 = __webpack_require__(3994);
class NameRegistryState {
    constructor(obj) {
        this.parentName = new web3_js_1.PublicKey(obj.parentName);
        this.owner = new web3_js_1.PublicKey(obj.owner);
        this.class = new web3_js_1.PublicKey(obj.class);
    }
    static async retrieve(connection, nameAccountKey) {
        var _a;
        const nameAccount = await connection.getAccountInfo(nameAccountKey);
        if (!nameAccount) {
            throw new Error("Invalid name account provided");
        }
        let res = (0, borsh_1.deserializeUnchecked)(this.schema, NameRegistryState, nameAccount.data);
        res.data = (_a = nameAccount.data) === null || _a === void 0 ? void 0 : _a.slice(this.HEADER_LEN);
        const nftOwner = await (0, nft_1.retrieveNftOwner)(connection, nameAccountKey);
        return { registry: res, nftOwner };
    }
    static async _retrieveBatch(connection, nameAccountKeys) {
        const nameAccounts = await connection.getMultipleAccountsInfo(nameAccountKeys);
        const fn = (data) => {
            if (!data)
                return undefined;
            const res = (0, borsh_1.deserializeUnchecked)(this.schema, NameRegistryState, data);
            res.data = data === null || data === void 0 ? void 0 : data.slice(this.HEADER_LEN);
            return res;
        };
        return nameAccounts.map((e) => fn(e === null || e === void 0 ? void 0 : e.data));
    }
    static async retrieveBatch(connection, nameAccountKeys) {
        let result = [];
        while (nameAccountKeys.length > 0) {
            result.push(...(await this._retrieveBatch(connection, nameAccountKeys.splice(0, 100))));
        }
        return result;
    }
}
exports.NameRegistryState = NameRegistryState;
NameRegistryState.HEADER_LEN = 96;
NameRegistryState.schema = new Map([
    [
        NameRegistryState,
        {
            kind: "struct",
            fields: [
                ["parentName", [32]],
                ["owner", [32]],
                ["class", [32]],
            ],
        },
    ],
]);
class TokenData {
    constructor(obj) {
        this.name = obj.name;
        this.ticker = obj.ticker;
        this.mint = obj.mint;
        this.decimals = obj.decimals;
        this.website = obj === null || obj === void 0 ? void 0 : obj.website;
        this.logoUri = obj === null || obj === void 0 ? void 0 : obj.logoUri;
    }
    serialize() {
        return (0, borsh_1.serialize)(TokenData.schema, this);
    }
    static deserialize(data) {
        return (0, borsh_1.deserializeUnchecked)(TokenData.schema, TokenData, data);
    }
}
exports.TokenData = TokenData;
TokenData.schema = new Map([
    [
        TokenData,
        {
            kind: "struct",
            fields: [
                ["name", "string"],
                ["ticker", "string"],
                ["mint", [32]],
                ["decimals", "u8"],
                ["website", { kind: "option", type: "string" }],
                ["logoUri", { kind: "option", type: "string" }],
            ],
        },
    ],
]);
class Mint {
    constructor(obj) {
        this.mint = obj.mint;
    }
    serialize() {
        return (0, borsh_1.serialize)(Mint.schema, this);
    }
    static deserialize(data) {
        return (0, borsh_1.deserializeUnchecked)(Mint.schema, Mint, data);
    }
}
exports.Mint = Mint;
Mint.schema = new Map([
    [
        Mint,
        {
            kind: "struct",
            fields: [["mint", [32]]],
        },
    ],
]);


/***/ }),

/***/ 98595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTokenInfoFromName = exports.getTokenInfoFromMint = exports.TOKEN_TLD = void 0;
const web3_js_1 = __webpack_require__(20374);
const utils_1 = __webpack_require__(87403);
const state_1 = __webpack_require__(58517);
exports.TOKEN_TLD = new web3_js_1.PublicKey("6NSu2tci4apRKQtt257bAVcvqYjB3zV2H1dWo56vgpa6");
const getTokenInfoFromMint = async (connection, mint) => {
    const nameKey = await (0, utils_1.getNameAccountKey)(await (0, utils_1.getHashedName)(mint.toBase58()), undefined, exports.TOKEN_TLD);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, nameKey);
    if (!registry.data) {
        throw new Error("Invalid account data");
    }
    return state_1.TokenData.deserialize(registry.data);
};
exports.getTokenInfoFromMint = getTokenInfoFromMint;
const getTokenInfoFromName = async (connection, name) => {
    const reverseNameKey = await (0, utils_1.getNameAccountKey)(await (0, utils_1.getHashedName)(name), undefined, exports.TOKEN_TLD);
    const { registry: reverseRegistry } = await state_1.NameRegistryState.retrieve(connection, reverseNameKey);
    if (!reverseRegistry.data) {
        throw new Error("Invalid account data");
    }
    const mint = new web3_js_1.PublicKey(state_1.Mint.deserialize(reverseRegistry.data).mint);
    return await (0, exports.getTokenInfoFromMint)(connection, mint);
};
exports.getTokenInfoFromName = getTokenInfoFromName;


/***/ }),

/***/ 74334:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createReverseTwitterRegistry = exports.ReverseTwitterRegistryState = exports.getTwitterRegistryData = exports.getTwitterHandleandRegistryKeyViaFilters = exports.getHandleAndRegistryKey = exports.getTwitterRegistry = exports.getTwitterRegistryKey = exports.deleteTwitterRegistry = exports.changeVerifiedPubkey = exports.changeTwitterRegistryData = exports.createVerifiedTwitterRegistry = void 0;
const web3_js_1 = __webpack_require__(20374);
const constants_1 = __webpack_require__(3857);
const bindings_1 = __webpack_require__(42460);
const instructions_1 = __webpack_require__(90827);
const state_1 = __webpack_require__(58517);
const utils_1 = __webpack_require__(87403);
const int_1 = __webpack_require__(41144);
const borsh_1 = __webpack_require__(71433);
////////////////////////////////////////////////////
// Bindings
// Signed by the authority, the payer and the verified pubkey
async function createVerifiedTwitterRegistry(connection, twitterHandle, verifiedPubkey, space, // The space that the user will have to write data into the verified registry
payerKey) {
    // Create user facing registry
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const lamports = await connection.getMinimumBalanceForRentExemption(space + state_1.NameRegistryState.HEADER_LEN);
    let instructions = [
        (0, instructions_1.createInstruction)(constants_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, twitterHandleRegistryKey, verifiedPubkey, payerKey, hashedTwitterHandle, 
        //@ts-ignore
        new int_1.Numberu64(lamports), 
        //@ts-ignore
        new int_1.Numberu32(space), undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY, constants_1.TWITTER_VERIFICATION_AUTHORITY // Twitter authority acts as owner of the parent for all user-facing registries
        ),
    ];
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, verifiedPubkey, payerKey));
    return instructions;
}
exports.createVerifiedTwitterRegistry = createVerifiedTwitterRegistry;
// Overwrite the data that is written in the user facing registry
// Signed by the verified pubkey
async function changeTwitterRegistryData(twitterHandle, verifiedPubkey, offset, // The offset at which to write the input data into the NameRegistryData
input_data) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        (0, instructions_1.updateInstruction)(constants_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, 
        //@ts-ignore
        new int_1.Numberu32(offset), input_data, verifiedPubkey),
    ];
    return instructions;
}
exports.changeTwitterRegistryData = changeTwitterRegistryData;
// Change the verified pubkey for a given twitter handle
// Signed by the Authority, the verified pubkey and the payer
async function changeVerifiedPubkey(connection, twitterHandle, currentVerifiedPubkey, newVerifiedPubkey, payerKey) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    // Transfer the user-facing registry ownership
    let instructions = [
        (0, instructions_1.transferInstruction)(constants_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, newVerifiedPubkey, currentVerifiedPubkey, undefined),
    ];
    // Delete the current reverse registry
    const currentHashedVerifiedPubkey = await (0, utils_1.getHashedName)(currentVerifiedPubkey.toString());
    const currentReverseRegistryKey = await (0, utils_1.getNameAccountKey)(currentHashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, undefined);
    instructions.push(await (0, bindings_1.deleteNameRegistry)(connection, currentVerifiedPubkey.toString(), payerKey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY));
    // Create the new reverse registry
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, newVerifiedPubkey, payerKey));
    return instructions;
}
exports.changeVerifiedPubkey = changeVerifiedPubkey;
// Delete the verified registry for a given twitter handle
// Signed by the verified pubkey
async function deleteTwitterRegistry(twitterHandle, verifiedPubkey) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const hashedVerifiedPubkey = await (0, utils_1.getHashedName)(verifiedPubkey.toString());
    const reverseRegistryKey = await (0, utils_1.getNameAccountKey)(hashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        // Delete the user facing registry
        (0, instructions_1.deleteInstruction)(constants_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, verifiedPubkey, verifiedPubkey),
        // Delete the reverse registry
        (0, instructions_1.deleteInstruction)(constants_1.NAME_PROGRAM_ID, reverseRegistryKey, verifiedPubkey, verifiedPubkey),
    ];
    return instructions;
}
exports.deleteTwitterRegistry = deleteTwitterRegistry;
//////////////////////////////////////////
// Getter Functions
// Returns the key of the user-facing registry
async function getTwitterRegistryKey(twitter_handle) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitter_handle);
    return await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
}
exports.getTwitterRegistryKey = getTwitterRegistryKey;
async function getTwitterRegistry(connection, twitter_handle) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitter_handle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, twitterHandleRegistryKey);
    return registry;
}
exports.getTwitterRegistry = getTwitterRegistry;
async function getHandleAndRegistryKey(connection, verifiedPubkey) {
    const hashedVerifiedPubkey = await (0, utils_1.getHashedName)(verifiedPubkey.toString());
    const reverseRegistryKey = await (0, utils_1.getNameAccountKey)(hashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseRegistryState = await ReverseTwitterRegistryState.retrieve(connection, reverseRegistryKey);
    return [
        reverseRegistryState.twitterHandle,
        new web3_js_1.PublicKey(reverseRegistryState.twitterRegistryKey),
    ];
}
exports.getHandleAndRegistryKey = getHandleAndRegistryKey;
// Uses the RPC node filtering feature, execution speed may vary
async function getTwitterHandleandRegistryKeyViaFilters(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: constants_1.TWITTER_VERIFICATION_AUTHORITY.toBase58(),
            },
        },
    ];
    const filteredAccounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, { filters });
    for (const f of filteredAccounts) {
        if (f.account.data.length > state_1.NameRegistryState.HEADER_LEN + 32) {
            let data = f.account.data.slice(state_1.NameRegistryState.HEADER_LEN);
            let state = (0, borsh_1.deserializeUnchecked)(ReverseTwitterRegistryState.schema, ReverseTwitterRegistryState, data);
            return [state.twitterHandle, new web3_js_1.PublicKey(state.twitterRegistryKey)];
        }
    }
    throw new Error("Registry not found.");
}
exports.getTwitterHandleandRegistryKeyViaFilters = getTwitterHandleandRegistryKeyViaFilters;
// Uses the RPC node filtering feature, execution speed may vary
// Does not give you the handle, but is an alternative to getHandlesAndKeysFromVerifiedPubkey + getTwitterRegistry to get the data
async function getTwitterRegistryData(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: new web3_js_1.PublicKey(Buffer.alloc(32, 0)).toBase58(),
            },
        },
    ];
    const filteredAccounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, { filters });
    if (filteredAccounts.length > 1) {
        throw new Error("Found more than one registry.");
    }
    return filteredAccounts[0].account.data.slice(state_1.NameRegistryState.HEADER_LEN);
}
exports.getTwitterRegistryData = getTwitterRegistryData;
//////////////////////////////////////////////
// Utils
class ReverseTwitterRegistryState {
    constructor(obj) {
        this.twitterRegistryKey = obj.twitterRegistryKey;
        this.twitterHandle = obj.twitterHandle;
    }
    static async retrieve(connection, reverseTwitterAccountKey) {
        let reverseTwitterAccount = await connection.getAccountInfo(reverseTwitterAccountKey, "processed");
        if (!reverseTwitterAccount) {
            throw new Error("Invalid reverse Twitter account provided");
        }
        let res = (0, borsh_1.deserializeUnchecked)(this.schema, ReverseTwitterRegistryState, reverseTwitterAccount.data.slice(state_1.NameRegistryState.HEADER_LEN));
        return res;
    }
}
exports.ReverseTwitterRegistryState = ReverseTwitterRegistryState;
ReverseTwitterRegistryState.schema = new Map([
    [
        ReverseTwitterRegistryState,
        {
            kind: "struct",
            fields: [
                ["twitterRegistryKey", [32]],
                ["twitterHandle", "string"],
            ],
        },
    ],
]);
async function createReverseTwitterRegistry(connection, twitterHandle, twitterRegistryKey, verifiedPubkey, payerKey) {
    // Create the reverse lookup registry
    const hashedVerifiedPubkey = await (0, utils_1.getHashedName)(verifiedPubkey.toString());
    const reverseRegistryKey = await (0, utils_1.getNameAccountKey)(hashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseTwitterRegistryStateBuff = (0, borsh_1.serialize)(ReverseTwitterRegistryState.schema, new ReverseTwitterRegistryState({
        twitterRegistryKey: twitterRegistryKey.toBytes(),
        twitterHandle,
    }));
    return [
        (0, instructions_1.createInstruction)(constants_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, reverseRegistryKey, verifiedPubkey, payerKey, hashedVerifiedPubkey, new int_1.Numberu64(
        //@ts-ignore
        await connection.getMinimumBalanceForRentExemption(reverseTwitterRegistryStateBuff.length + state_1.NameRegistryState.HEADER_LEN)), 
        //@ts-ignore
        new int_1.Numberu32(reverseTwitterRegistryStateBuff.length), constants_1.TWITTER_VERIFICATION_AUTHORITY, // Twitter authority acts as class for all reverse-lookup registries
        constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY, // Reverse registries are also children of the root
        constants_1.TWITTER_VERIFICATION_AUTHORITY),
        (0, instructions_1.updateInstruction)(constants_1.NAME_PROGRAM_ID, reverseRegistryKey, 
        //@ts-ignore
        new int_1.Numberu32(0), Buffer.from(reverseTwitterRegistryStateBuff), constants_1.TWITTER_VERIFICATION_AUTHORITY),
    ];
}
exports.createReverseTwitterRegistry = createReverseTwitterRegistry;


/***/ }),

/***/ 81449:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Record = void 0;
/**
 * List of SNS Records
 */
var Record;
(function (Record) {
    Record["IPFS"] = "IPFS";
    Record["ARWV"] = "ARWV";
    Record["SOL"] = "SOL";
    Record["ETH"] = "ETH";
    Record["BTC"] = "BTC";
    Record["LTC"] = "LTC";
    Record["DOGE"] = "DOGE";
    Record["Email"] = "email";
    Record["Url"] = "url";
    Record["Discord"] = "discord";
    Record["Github"] = "github";
    Record["Reddit"] = "reddit";
    Record["Twitter"] = "twitter";
    Record["Telegram"] = "telegram";
    Record["Pic"] = "pic";
    Record["SHDW"] = "SHDW";
    Record["POINT"] = "POINT";
})(Record = exports.Record || (exports.Record = {}));


/***/ }),

/***/ 87403:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAllRegisteredDomains = exports.getAllDomains = exports.getDomainKey = exports.findSubdomains = exports.performReverseLookupBatch = exports.getDNSRecordAddress = exports.performReverseLookup = exports.getNameAccountKey = exports.getHashedName = exports.getNameOwner = void 0;
const web3_js_1 = __webpack_require__(20374);
const bn_js_1 = __importDefault(__webpack_require__(73117));
const sha2_1 = __webpack_require__(79382);
const constants_1 = __webpack_require__(3857);
const state_1 = __webpack_require__(58517);
const constants_2 = __webpack_require__(3857);
async function getNameOwner(connection, nameAccountKey) {
    const nameAccount = await connection.getAccountInfo(nameAccountKey);
    if (!nameAccount) {
        throw new Error("Unable to find the given account.");
    }
    return state_1.NameRegistryState.retrieve(connection, nameAccountKey);
}
exports.getNameOwner = getNameOwner;
async function getHashedName(name) {
    const input = constants_1.HASH_PREFIX + name;
    const str = (0, sha2_1.sha256)(Buffer.from(input, "utf8")).slice(2);
    return Buffer.from(str, "hex");
}
exports.getHashedName = getHashedName;
async function getNameAccountKey(hashed_name, nameClass, nameParent) {
    const seeds = [hashed_name];
    if (nameClass) {
        seeds.push(nameClass.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    if (nameParent) {
        seeds.push(nameParent.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    const [nameAccountKey] = await web3_js_1.PublicKey.findProgramAddress(seeds, constants_1.NAME_PROGRAM_ID);
    return nameAccountKey;
}
exports.getNameAccountKey = getNameAccountKey;
async function performReverseLookup(connection, nameAccount) {
    const hashedReverseLookup = await getHashedName(nameAccount.toBase58());
    const reverseLookupAccount = await getNameAccountKey(hashedReverseLookup, constants_2.REVERSE_LOOKUP_CLASS);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, reverseLookupAccount);
    if (!registry.data) {
        throw "Could not retrieve name data";
    }
    const nameLength = new bn_js_1.default(registry.data.slice(0, 4), "le").toNumber();
    return registry.data.slice(4, 4 + nameLength).toString();
}
exports.performReverseLookup = performReverseLookup;
async function getDNSRecordAddress(nameAccount, type) {
    const hashedName = await getHashedName("\0".concat(type));
    const recordAccount = await getNameAccountKey(hashedName, undefined, nameAccount);
    return recordAccount;
}
exports.getDNSRecordAddress = getDNSRecordAddress;
async function performReverseLookupBatch(connection, nameAccounts) {
    let reverseLookupAccounts = [];
    for (let nameAccount of nameAccounts) {
        const hashedReverseLookup = await getHashedName(nameAccount.toBase58());
        const reverseLookupAccount = await getNameAccountKey(hashedReverseLookup, constants_2.REVERSE_LOOKUP_CLASS);
        reverseLookupAccounts.push(reverseLookupAccount);
    }
    let names = await state_1.NameRegistryState.retrieveBatch(connection, reverseLookupAccounts);
    return names.map((name) => {
        if (name === undefined || name.data === undefined) {
            return undefined;
        }
        let nameLength = new bn_js_1.default(name.data.slice(0, 4), "le").toNumber();
        return name.data.slice(4, 4 + nameLength).toString();
    });
}
exports.performReverseLookupBatch = performReverseLookupBatch;
/**
 *
 * @param connection The Solana RPC connection object
 * @param parentKey The parent you want to find sub-domains for
 * @returns
 */
const findSubdomains = async (connection, parentKey) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: parentKey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: constants_2.REVERSE_LOOKUP_CLASS.toBase58(),
            },
        },
    ];
    const result = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, {
        filters,
    });
    return result.map((e) => { var _a; return (_a = e.account.data.slice(97).toString("utf-8")) === null || _a === void 0 ? void 0 : _a.split("\0").join(""); });
};
exports.findSubdomains = findSubdomains;
const _derive = async (name, parent = constants_1.ROOT_DOMAIN_ACCOUNT) => {
    let hashed = await getHashedName(name);
    let pubkey = await getNameAccountKey(hashed, undefined, parent);
    return { pubkey, hashed };
};
/**
 * This function can be used to compute the public key of a domain or subdomain
 * @param domain The domain to compute the public key for (e.g `bonfida.sol`, `dex.bonfida.sol`)
 * @returns
 */
const getDomainKey = async (domain, record = false) => {
    if (domain.endsWith(".sol")) {
        domain = domain.slice(0, -4);
    }
    const splitted = domain.split(".");
    if (splitted.length === 2) {
        const prefix = Buffer.from([record ? 1 : 0]).toString();
        const sub = prefix.concat(splitted[0]);
        const { pubkey: parentKey } = await _derive(splitted[1]);
        const result = await _derive(sub, parentKey);
        return { ...result, isSub: true, parent: parentKey };
    }
    else if (splitted.length > 2) {
        throw new Error("Invalid derivation input");
    }
    const result = await _derive(domain, constants_1.ROOT_DOMAIN_ACCOUNT);
    return { ...result, isSub: false, parent: undefined };
};
exports.getDomainKey = getDomainKey;
/**
 * This function can be used to retrieve all domain names owned by `wallet`
 * @param connection The Solana RPC connection object
 * @param wallet The wallet you want to search domain names for
 * @returns
 */
async function getAllDomains(connection, wallet) {
    const filters = [
        {
            memcmp: {
                offset: 32,
                bytes: wallet.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.ROOT_DOMAIN_ACCOUNT.toBase58(),
            },
        },
    ];
    const accounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, {
        filters,
    });
    return accounts.map((a) => a.pubkey);
}
exports.getAllDomains = getAllDomains;
/**
 * This function can be used to retrieve all the registered `.sol` domains.
 * The account data is sliced to avoid enormous payload and only the owner is returned
 * @param connection The Solana RPC connection object
 * @returns
 */
const getAllRegisteredDomains = async (connection) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.ROOT_DOMAIN_ACCOUNT.toBase58(),
            },
        },
    ];
    const dataSlice = { offset: 32, length: 32 };
    const accounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, {
        dataSlice,
        filters,
    });
    return accounts;
};
exports.getAllRegisteredDomains = getAllRegisteredDomains;


/***/ }),

/***/ 92938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDomainName = exports.deleteNameRegistry = exports.transferNameOwnership = exports.updateNameRegistryData = exports.createNameRegistry = void 0;
const web3_js_1 = __webpack_require__(20374);
const instructions_1 = __webpack_require__(47514);
const state_1 = __webpack_require__(37628);
const int_1 = __webpack_require__(70740);
const utils_1 = __webpack_require__(8262);
const constants_1 = __webpack_require__(34823);
/**
 * Creates a name account with the given rent budget, allocated space, owner and class.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the new account
 * @param space The space in bytes allocated to the account
 * @param payerKey The allocation cost payer
 * @param nameOwner The pubkey to be set as owner of the new name account
 * @param lamports The budget to be set for the name account. If not specified, it'll be the minimum for rent exemption
 * @param nameClass The class of this new name
 * @param parentName The parent name of the new name. If specified its owner needs to sign
 * @returns
 */
async function createNameRegistry(connection, name, space, payerKey, nameOwner, lamports, nameClass, parentName) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, parentName);
    const balance = lamports
        ? lamports
        : await connection.getMinimumBalanceForRentExemption(space);
    let nameParentOwner;
    if (parentName) {
        const { registry: parentAccount } = await (0, utils_1.getNameOwner)(connection, parentName);
        nameParentOwner = parentAccount.owner;
    }
    const createNameInstr = (0, instructions_1.createInstruction)(constants_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, nameAccountKey, nameOwner, payerKey, hashed_name, 
    //@ts-ignore
    new int_1.Numberu64(balance), 
    //@ts-ignore
    new int_1.Numberu32(space), nameClass, parentName, nameParentOwner);
    return createNameInstr;
}
exports.createNameRegistry = createNameRegistry;
/**
 * Overwrite the data of the given name registry.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name registry to update
 * @param offset The offset to which the data should be written into the registry
 * @param input_data The data to be written
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 */
async function updateNameRegistryData(connection, name, offset, input_data, nameClass, nameParent) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, nameParent);
    let signer;
    if (nameClass) {
        signer = nameClass;
    }
    else {
        signer = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .registry.owner;
    }
    const updateInstr = (0, instructions_1.updateInstruction)(constants_1.NAME_PROGRAM_ID, nameAccountKey, 
    //@ts-ignore
    new int_1.Numberu32(offset), input_data, signer);
    return updateInstr;
}
exports.updateNameRegistryData = updateNameRegistryData;
/**
 * Change the owner of a given name account.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param newOwner The new owner to be set
 * @param curentNameOwner the current name Owner
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @param parentOwner Parent name owner
 * @returns
 */
async function transferNameOwnership(connection, name, newOwner, nameClass, nameParent, parentOwner) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, nameParent);
    let curentNameOwner;
    if (nameClass) {
        curentNameOwner = nameClass;
    }
    else {
        curentNameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey)).registry.owner;
    }
    const transferInstr = (0, instructions_1.transferInstruction)(constants_1.NAME_PROGRAM_ID, nameAccountKey, newOwner, curentNameOwner, nameClass, nameParent, parentOwner);
    return transferInstr;
}
exports.transferNameOwnership = transferNameOwnership;
/**
 * Delete the name account and transfer the rent to the target.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param refundTargetKey The refund destination address
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @returns
 */
async function deleteNameRegistry(connection, name, refundTargetKey, nameClass, nameParent) {
    const hashed_name = await (0, utils_1.getHashedName)(name);
    const nameAccountKey = await (0, utils_1.getNameAccountKey)(hashed_name, nameClass, nameParent);
    let nameOwner;
    if (nameClass) {
        nameOwner = nameClass;
    }
    else {
        nameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .registry.owner;
    }
    const changeAuthoritiesInstr = (0, instructions_1.deleteInstruction)(constants_1.NAME_PROGRAM_ID, nameAccountKey, refundTargetKey, nameOwner);
    return changeAuthoritiesInstr;
}
exports.deleteNameRegistry = deleteNameRegistry;
/**
 * This function can be used to register a .sol domain
 * @param name The domain name to register e.g bonfida if you want to register bonfida.sol
 * @param space The domain name account size (max 10kB)
 * @param buyer The public key of the buyer
 * @param buyerTokenAccount The buyer FIDA token account
 * @returns
 */
const registerDomainName = async (name, space, buyer, buyerTokenAccount) => {
    const [centralState] = await web3_js_1.PublicKey.findProgramAddress([constants_1.REGISTER_PROGRAM_ID.toBuffer()], constants_1.REGISTER_PROGRAM_ID);
    const hashed = await (0, utils_1.getHashedName)(name);
    const nameAccount = await (0, utils_1.getNameAccountKey)(hashed, undefined, constants_1.ROOT_DOMAIN_ACCOUNT);
    const hashedReverseLookup = await (0, utils_1.getHashedName)(nameAccount.toBase58());
    const reverseLookupAccount = await (0, utils_1.getNameAccountKey)(hashedReverseLookup, centralState);
    const [derived_state] = await web3_js_1.PublicKey.findProgramAddress([nameAccount.toBuffer()], constants_1.REGISTER_PROGRAM_ID);
    const ix = new instructions_1.createV2Instruction({ name, space }).getInstruction(constants_1.REGISTER_PROGRAM_ID, web3_js_1.SYSVAR_RENT_PUBKEY, constants_1.NAME_PROGRAM_ID, constants_1.ROOT_DOMAIN_ACCOUNT, nameAccount, reverseLookupAccount, centralState, buyer, buyerTokenAccount, constants_1.BONFIDA_FIDA_BNB, derived_state);
    return [[], [ix]];
};
exports.registerDomainName = registerDomainName;


/***/ }),

/***/ 34823:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = exports.TWITTER_VERIFICATION_AUTHORITY = exports.REVERSE_LOOKUP_CLASS = exports.BONFIDA_FIDA_BNB = exports.PYTH_FIDDA_PRICE_ACC = exports.REGISTER_PROGRAM_ID = exports.ROOT_DOMAIN_ACCOUNT = exports.HASH_PREFIX = exports.NAME_PROGRAM_ID = void 0;
const web3_js_1 = __webpack_require__(20374);
/**
 * The Solana Name Service program ID
 */
exports.NAME_PROGRAM_ID = new web3_js_1.PublicKey("namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX");
/**
 * Hash prefix used to derive domain name addresses
 */
exports.HASH_PREFIX = "SPL Name Service";
/**
 * The `.sol` TLD
 */
exports.ROOT_DOMAIN_ACCOUNT = new web3_js_1.PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx");
/**
 * The Registry program ID
 */
exports.REGISTER_PROGRAM_ID = new web3_js_1.PublicKey("jCebN34bUfdeUYJT13J1yG16XWQpt5PDx6Mse9GUqhR");
/**
 * The FIDA Pyth price feed
 */
exports.PYTH_FIDDA_PRICE_ACC = new web3_js_1.PublicKey("ETp9eKXVv1dWwHSpsXRUuXHmw24PwRkttCGVgpZEY9zF");
/**
 * The FIDA buy and burn address
 */
exports.BONFIDA_FIDA_BNB = new web3_js_1.PublicKey("AUoZ3YAhV3b2rZeEH93UMZHXUZcTramBvb4d9YEVySkc");
/**
 * The reverse look up class
 */
exports.REVERSE_LOOKUP_CLASS = new web3_js_1.PublicKey("33m47vH6Eav6jr5Ry86XjhRft2jRBLDnDgPSHoquXi2Z");
/**
 * The `.twitter` TLD authority
 */
exports.TWITTER_VERIFICATION_AUTHORITY = new web3_js_1.PublicKey("FvPH7PrVrLGKPfqaf3xJodFTjZriqrAXXLTVWEorTFBi");
/**
 * The `.twitter` TLD
 */
exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = new web3_js_1.PublicKey("4YcexoW3r78zz16J2aqmukBLRwGq6rAvWzJpkYAXqebv");


/***/ }),

/***/ 34320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFavoriteDomain = void 0;
const name_offers_1 = __webpack_require__(75699);
const utils_1 = __webpack_require__(8262);
const web3_js_1 = __webpack_require__(20374);
/**
 * This function can be used to retrieve the favorite domain of a user
 * @param connection The Solana RPC connection object
 * @param owner The owner you want to retrieve the favorite domain for
 * @returns
 */
const getFavoriteDomain = async (connection, owner) => {
    const [favKey] = await name_offers_1.FavouriteDomain.getKey(name_offers_1.NAME_OFFERS_ID, new web3_js_1.PublicKey(owner));
    const favorite = await name_offers_1.FavouriteDomain.retrieve(connection, favKey);
    const reverse = await (0, utils_1.performReverseLookup)(connection, favorite.nameAccount);
    return { domain: favorite.nameAccount, reverse };
};
exports.getFavoriteDomain = getFavoriteDomain;


/***/ }),

/***/ 87772:
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
__exportStar(__webpack_require__(8262), exports);
__exportStar(__webpack_require__(92938), exports);
__exportStar(__webpack_require__(37628), exports);
__exportStar(__webpack_require__(84693), exports);
__exportStar(__webpack_require__(47199), exports);
__exportStar(__webpack_require__(8262), exports);
__exportStar(__webpack_require__(47514), exports);
__exportStar(__webpack_require__(53833), exports);
__exportStar(__webpack_require__(34320), exports);
__exportStar(__webpack_require__(34823), exports);
__exportStar(__webpack_require__(70740), exports);
__exportStar(__webpack_require__(39906), exports);
__exportStar(__webpack_require__(21720), exports);
__exportStar(__webpack_require__(19633), exports);


/***/ }),

/***/ 47514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createV2Instruction = exports.deleteInstruction = exports.transferInstruction = exports.updateInstruction = exports.createInstruction = void 0;
const web3_js_1 = __webpack_require__(20374);
const spl_token_1 = __webpack_require__(21303);
const int_1 = __webpack_require__(70740);
const borsh_1 = __webpack_require__(82083);
const constants_1 = __webpack_require__(34823);
function createInstruction(nameProgramId, systemProgramId, nameKey, nameOwnerKey, payerKey, hashed_name, lamports, space, nameClassKey, nameParent, nameParentOwner) {
    const buffers = [
        Buffer.from(Int8Array.from([0])),
        //@ts-ignore
        new int_1.Numberu32(hashed_name.length).toBuffer(),
        hashed_name,
        lamports.toBuffer(),
        space.toBuffer(),
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: systemProgramId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: payerKey,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: nameKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: false,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParent) {
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParentOwner) {
        keys.push({
            pubkey: nameParentOwner,
            isSigner: true,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.createInstruction = createInstruction;
function updateInstruction(nameProgramId, nameAccountKey, offset, input_data, nameUpdateSigner) {
    const buffers = [
        Buffer.from(Int8Array.from([1])),
        offset.toBuffer(),
        //@ts-ignore
        new int_1.Numberu32(input_data.length).toBuffer(),
        input_data,
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameUpdateSigner,
            isSigner: true,
            isWritable: false,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.updateInstruction = updateInstruction;
function transferInstruction(nameProgramId, nameAccountKey, newOwnerKey, currentNameOwnerKey, nameClassKey, nameParent, parentOwner) {
    const buffers = [Buffer.from(Int8Array.from([2])), newOwnerKey.toBuffer()];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: parentOwner ? parentOwner : currentNameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    if (parentOwner && nameParent) {
        if (!nameClassKey) {
            keys.push({
                pubkey: web3_js_1.PublicKey.default,
                isSigner: false,
                isWritable: false,
            });
        }
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.transferInstruction = transferInstruction;
function deleteInstruction(nameProgramId, nameAccountKey, refundTargetKey, nameOwnerKey) {
    const buffers = [Buffer.from(Int8Array.from([3]))];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: refundTargetKey,
            isSigner: false,
            isWritable: true,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.deleteInstruction = deleteInstruction;
class createV2Instruction {
    constructor(obj) {
        this.tag = 9;
        this.name = obj.name;
        this.space = obj.space;
    }
    serialize() {
        return (0, borsh_1.serialize)(createV2Instruction.schema, this);
    }
    getInstruction(programId, rentSysvarAccount, nameProgramId, rootDomain, nameAccount, reverseLookupAccount, centralState, buyer, buyerTokenAccount, fidaVault, state) {
        const data = Buffer.from(this.serialize());
        const keys = [
            {
                pubkey: rentSysvarAccount,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: nameProgramId,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: rootDomain,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: nameAccount,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: reverseLookupAccount,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: web3_js_1.SystemProgram.programId,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: centralState,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: buyer,
                isSigner: true,
                isWritable: true,
            },
            {
                pubkey: buyerTokenAccount,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: constants_1.PYTH_FIDDA_PRICE_ACC,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: fidaVault,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: state,
                isSigner: false,
                isWritable: false,
            },
        ];
        return new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        });
    }
}
exports.createV2Instruction = createV2Instruction;
createV2Instruction.schema = new Map([
    [
        createV2Instruction,
        {
            kind: "struct",
            fields: [
                ["tag", "u8"],
                ["name", "string"],
                ["space", "u32"],
            ],
        },
    ],
]);


/***/ }),

/***/ 70740:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Numberu64 = exports.Numberu32 = void 0;
const bn_js_1 = __importDefault(__webpack_require__(73182));
class Numberu32 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 4) {
            return b;
        }
        if (b.length > 4) {
            throw new Error("Numberu32 too large");
        }
        const zeroPad = Buffer.alloc(4);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 4) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(""), 16);
    }
}
exports.Numberu32 = Numberu32;
class Numberu64 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        if (b.length > 8) {
            throw new Error("Numberu64 too large");
        }
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 8) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(""), 16);
    }
}
exports.Numberu64 = Numberu64;


/***/ }),

/***/ 53833:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retrieveNfts = exports.retrieveNftOwner = exports.MINT_PREFIX = exports.NAME_TOKENIZER_ID = void 0;
const web3_js_1 = __webpack_require__(20374);
const spl_token_1 = __webpack_require__(21303);
/**
 * Mainnet program ID
 */
exports.NAME_TOKENIZER_ID = new web3_js_1.PublicKey("nftD3vbNkNqfj2Sd3HZwbpw4BxxKWr4AjGb9X38JeZk");
/**
 * PDA prefix
 */
exports.MINT_PREFIX = Buffer.from("tokenized_name");
/**
 * This function can be used to retrieve the owner of a tokenized domain name
 *
 * @param connection The solana connection object to the RPC node
 * @param nameAccount The key of the domain name
 * @returns
 */
const retrieveNftOwner = async (connection, nameAccount) => {
    var _a;
    try {
        const [mint] = await web3_js_1.PublicKey.findProgramAddress([exports.MINT_PREFIX, nameAccount.toBuffer()], exports.NAME_TOKENIZER_ID);
        const mintInfo = await (0, spl_token_1.getMint)(connection, mint);
        if (mintInfo.supply.toString() === "0") {
            return undefined;
        }
        const { value } = await connection.getTokenLargestAccounts(mint);
        const holder = (_a = value.find((e) => e.amount === "1")) === null || _a === void 0 ? void 0 : _a.address;
        if (!holder) {
            return undefined;
        }
        const info = await connection.getAccountInfo(holder);
        if (!info || !info.data) {
            return undefined;
        }
        return new web3_js_1.PublicKey(info.data.slice(32, 64));
    }
    catch {
        return undefined;
    }
};
exports.retrieveNftOwner = retrieveNftOwner;
/**
 * This function can be used to retrieve all the tokenized domains name
 *
 * @param connection The solana connection object to the RPC node
 * @returns
 */
const retrieveNfts = async (connection) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: "3",
            },
        },
    ];
    const result = await connection.getProgramAccounts(exports.NAME_TOKENIZER_ID, {
        filters,
    });
    const offset = 1 + 1 + 32 + 32;
    return result.map((e) => new web3_js_1.PublicKey(e.account.data.slice(offset, offset + 32)));
};
exports.retrieveNfts = retrieveNfts;


/***/ }),

/***/ 39906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPointRecord = exports.getSolRecord = exports.getShdwRecord = exports.getPicRecord = exports.getTelegramRecord = exports.getTwitterRecord = exports.getRedditRecord = exports.getGithubRecord = exports.getDiscordRecord = exports.getUrlRecord = exports.getEmailRecord = exports.getDogeRecord = exports.getLtcRecord = exports.getBtcRecord = exports.getEthRecord = exports.getArweaveRecord = exports.getIpfsRecord = exports.getRecord = void 0;
const record_1 = __webpack_require__(21720);
const utils_1 = __webpack_require__(8262);
const state_1 = __webpack_require__(37628);
/**
 * This function can be used to retrieve a specified record for the given domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @param record The record to search for
 * @returns
 */
const getRecord = async (connection, domain, record) => {
    var _a, _b;
    const { pubkey } = await (0, utils_1.getDomainKey)(record + "." + domain, true);
    let { registry } = await state_1.NameRegistryState.retrieve(connection, pubkey);
    // Remove trailling 0s
    const idx = (_a = registry.data) === null || _a === void 0 ? void 0 : _a.indexOf(0x00);
    registry.data = (_b = registry.data) === null || _b === void 0 ? void 0 : _b.slice(0, idx);
    return registry;
};
exports.getRecord = getRecord;
/**
 * This function can be used to retrieve the IPFS record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getIpfsRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.IPFS);
};
exports.getIpfsRecord = getIpfsRecord;
/**
 * This function can be used to retrieve the Arweave record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getArweaveRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.ARWV);
};
exports.getArweaveRecord = getArweaveRecord;
/**
 * This function can be used to retrieve the ETH record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getEthRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.ETH);
};
exports.getEthRecord = getEthRecord;
/**
 * This function can be used to retrieve the BTC record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getBtcRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.BTC);
};
exports.getBtcRecord = getBtcRecord;
/**
 * This function can be used to retrieve the LTC record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getLtcRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.LTC);
};
exports.getLtcRecord = getLtcRecord;
/**
 * This function can be used to retrieve the DOGE record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getDogeRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.DOGE);
};
exports.getDogeRecord = getDogeRecord;
/**
 * This function can be used to retrieve the email record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getEmailRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Email);
};
exports.getEmailRecord = getEmailRecord;
/**
 * This function can be used to retrieve the URL record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getUrlRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Url);
};
exports.getUrlRecord = getUrlRecord;
/**
 * This function can be used to retrieve the Discord record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getDiscordRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Discord);
};
exports.getDiscordRecord = getDiscordRecord;
/**
 * This function can be used to retrieve the Github record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getGithubRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Github);
};
exports.getGithubRecord = getGithubRecord;
/**
 * This function can be used to retrieve the Reddit record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getRedditRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Reddit);
};
exports.getRedditRecord = getRedditRecord;
/**
 * This function can be used to retrieve the Twitter record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getTwitterRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Twitter);
};
exports.getTwitterRecord = getTwitterRecord;
/**
 * This function can be used to retrieve the Telegram record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getTelegramRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Telegram);
};
exports.getTelegramRecord = getTelegramRecord;
/**
 * This function can be used to retrieve the pic record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getPicRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.Pic);
};
exports.getPicRecord = getPicRecord;
/**
 * This function can be used to retrieve the SHDW record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getShdwRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.SHDW);
};
exports.getShdwRecord = getShdwRecord;
/**
 * This function can be used to retrieve the SOL record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getSolRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.SOL);
};
exports.getSolRecord = getSolRecord;
/**
 * This function can be used to retrieve the POINT record of a domain name
 * @param connection The Solana RPC connection object
 * @param domain The .sol domain name
 * @returns
 */
const getPointRecord = async (connection, domain) => {
    return await (0, exports.getRecord)(connection, domain, record_1.Record.POINT);
};
exports.getPointRecord = getPointRecord;


/***/ }),

/***/ 19633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolve = exports.checkSolRecord = void 0;
const web3_js_1 = __webpack_require__(20374);
const record_1 = __webpack_require__(39906);
const utils_1 = __webpack_require__(8262);
const state_1 = __webpack_require__(37628);
const tweetnacl_1 = __webpack_require__(49538);
const record_2 = __webpack_require__(21720);
/**
 * This function can be used to verify the validity of a SOL record
 * @param record The record data to verify
 * @param signedRecord The signed data
 * @param pubkey The public key of the signer
 * @returns
 */
const checkSolRecord = (record, signedRecord, pubkey) => {
    return tweetnacl_1.sign.detached.verify(record, signedRecord, pubkey.toBytes());
};
exports.checkSolRecord = checkSolRecord;
/**
 * This function can be used to resolve a domain name to transfer funds
 * @param connection The Solana RPC connection object
 * @param domain The domain to resolve
 * @returns
 */
const resolve = async (connection, domain) => {
    var _a;
    const { pubkey } = await (0, utils_1.getDomainKey)(domain);
    const { registry, nftOwner } = await state_1.NameRegistryState.retrieve(connection, pubkey);
    if (nftOwner) {
        return nftOwner;
    }
    try {
        const recordKey = await (0, utils_1.getDomainKey)(record_2.Record.SOL + "." + domain, true);
        const solRecord = await (0, record_1.getSolRecord)(connection, domain);
        if (((_a = solRecord.data) === null || _a === void 0 ? void 0 : _a.length) !== 96) {
            throw new Error("Invalid SOL record data");
        }
        const encoder = new TextEncoder();
        const expectedBuffer = Buffer.concat([
            solRecord.data.slice(0, 32),
            recordKey.pubkey.toBuffer(),
        ]);
        const expected = encoder.encode(expectedBuffer.toString("hex"));
        const valid = (0, exports.checkSolRecord)(expected, solRecord.data.slice(32), registry.owner);
        if (!valid) {
            throw new Error("Signature invalid");
        }
        return new web3_js_1.PublicKey(solRecord.data.slice(0, 32));
    }
    catch (err) {
        console.log(err);
    }
    return registry.owner;
};
exports.resolve = resolve;


/***/ }),

/***/ 37628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mint = exports.TokenData = exports.NameRegistryState = void 0;
const web3_js_1 = __webpack_require__(20374);
const borsh_1 = __webpack_require__(82083);
const nft_1 = __webpack_require__(53833);
class NameRegistryState {
    constructor(obj) {
        this.parentName = new web3_js_1.PublicKey(obj.parentName);
        this.owner = new web3_js_1.PublicKey(obj.owner);
        this.class = new web3_js_1.PublicKey(obj.class);
    }
    static async retrieve(connection, nameAccountKey) {
        var _a;
        const nameAccount = await connection.getAccountInfo(nameAccountKey);
        if (!nameAccount) {
            throw new Error("Invalid name account provided");
        }
        let res = (0, borsh_1.deserializeUnchecked)(this.schema, NameRegistryState, nameAccount.data);
        res.data = (_a = nameAccount.data) === null || _a === void 0 ? void 0 : _a.slice(this.HEADER_LEN);
        const nftOwner = await (0, nft_1.retrieveNftOwner)(connection, nameAccountKey);
        return { registry: res, nftOwner };
    }
    static async _retrieveBatch(connection, nameAccountKeys) {
        const nameAccounts = await connection.getMultipleAccountsInfo(nameAccountKeys);
        const fn = (data) => {
            if (!data)
                return undefined;
            const res = (0, borsh_1.deserializeUnchecked)(this.schema, NameRegistryState, data);
            res.data = data === null || data === void 0 ? void 0 : data.slice(this.HEADER_LEN);
            return res;
        };
        return nameAccounts.map((e) => fn(e === null || e === void 0 ? void 0 : e.data));
    }
    static async retrieveBatch(connection, nameAccountKeys) {
        let result = [];
        while (nameAccountKeys.length > 0) {
            result.push(...(await this._retrieveBatch(connection, nameAccountKeys.splice(0, 100))));
        }
        return result;
    }
}
exports.NameRegistryState = NameRegistryState;
NameRegistryState.HEADER_LEN = 96;
NameRegistryState.schema = new Map([
    [
        NameRegistryState,
        {
            kind: "struct",
            fields: [
                ["parentName", [32]],
                ["owner", [32]],
                ["class", [32]],
            ],
        },
    ],
]);
class TokenData {
    constructor(obj) {
        this.name = obj.name;
        this.ticker = obj.ticker;
        this.mint = obj.mint;
        this.decimals = obj.decimals;
        this.website = obj === null || obj === void 0 ? void 0 : obj.website;
        this.logoUri = obj === null || obj === void 0 ? void 0 : obj.logoUri;
    }
    serialize() {
        return (0, borsh_1.serialize)(TokenData.schema, this);
    }
    static deserialize(data) {
        return (0, borsh_1.deserializeUnchecked)(TokenData.schema, TokenData, data);
    }
}
exports.TokenData = TokenData;
TokenData.schema = new Map([
    [
        TokenData,
        {
            kind: "struct",
            fields: [
                ["name", "string"],
                ["ticker", "string"],
                ["mint", [32]],
                ["decimals", "u8"],
                ["website", { kind: "option", type: "string" }],
                ["logoUri", { kind: "option", type: "string" }],
            ],
        },
    ],
]);
class Mint {
    constructor(obj) {
        this.mint = obj.mint;
    }
    serialize() {
        return (0, borsh_1.serialize)(Mint.schema, this);
    }
    static deserialize(data) {
        return (0, borsh_1.deserializeUnchecked)(Mint.schema, Mint, data);
    }
}
exports.Mint = Mint;
Mint.schema = new Map([
    [
        Mint,
        {
            kind: "struct",
            fields: [["mint", [32]]],
        },
    ],
]);


/***/ }),

/***/ 47199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTokenInfoFromName = exports.getTokenInfoFromMint = exports.TOKEN_TLD = void 0;
const web3_js_1 = __webpack_require__(20374);
const utils_1 = __webpack_require__(8262);
const state_1 = __webpack_require__(37628);
exports.TOKEN_TLD = new web3_js_1.PublicKey("6NSu2tci4apRKQtt257bAVcvqYjB3zV2H1dWo56vgpa6");
const getTokenInfoFromMint = async (connection, mint) => {
    const nameKey = await (0, utils_1.getNameAccountKey)(await (0, utils_1.getHashedName)(mint.toBase58()), undefined, exports.TOKEN_TLD);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, nameKey);
    if (!registry.data) {
        throw new Error("Invalid account data");
    }
    return state_1.TokenData.deserialize(registry.data);
};
exports.getTokenInfoFromMint = getTokenInfoFromMint;
const getTokenInfoFromName = async (connection, name) => {
    const reverseNameKey = await (0, utils_1.getNameAccountKey)(await (0, utils_1.getHashedName)(name), undefined, exports.TOKEN_TLD);
    const { registry: reverseRegistry } = await state_1.NameRegistryState.retrieve(connection, reverseNameKey);
    if (!reverseRegistry.data) {
        throw new Error("Invalid account data");
    }
    const mint = new web3_js_1.PublicKey(state_1.Mint.deserialize(reverseRegistry.data).mint);
    return await (0, exports.getTokenInfoFromMint)(connection, mint);
};
exports.getTokenInfoFromName = getTokenInfoFromName;


/***/ }),

/***/ 84693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createReverseTwitterRegistry = exports.ReverseTwitterRegistryState = exports.getTwitterRegistryData = exports.getTwitterHandleandRegistryKeyViaFilters = exports.getHandleAndRegistryKey = exports.getTwitterRegistry = exports.getTwitterRegistryKey = exports.deleteTwitterRegistry = exports.changeVerifiedPubkey = exports.changeTwitterRegistryData = exports.createVerifiedTwitterRegistry = void 0;
const web3_js_1 = __webpack_require__(20374);
const constants_1 = __webpack_require__(34823);
const bindings_1 = __webpack_require__(92938);
const instructions_1 = __webpack_require__(47514);
const state_1 = __webpack_require__(37628);
const utils_1 = __webpack_require__(8262);
const int_1 = __webpack_require__(70740);
const borsh_1 = __webpack_require__(82083);
////////////////////////////////////////////////////
// Bindings
// Signed by the authority, the payer and the verified pubkey
async function createVerifiedTwitterRegistry(connection, twitterHandle, verifiedPubkey, space, // The space that the user will have to write data into the verified registry
payerKey) {
    // Create user facing registry
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const lamports = await connection.getMinimumBalanceForRentExemption(space + state_1.NameRegistryState.HEADER_LEN);
    let instructions = [
        (0, instructions_1.createInstruction)(constants_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, twitterHandleRegistryKey, verifiedPubkey, payerKey, hashedTwitterHandle, 
        //@ts-ignore
        new int_1.Numberu64(lamports), 
        //@ts-ignore
        new int_1.Numberu32(space), undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY, constants_1.TWITTER_VERIFICATION_AUTHORITY // Twitter authority acts as owner of the parent for all user-facing registries
        ),
    ];
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, verifiedPubkey, payerKey));
    return instructions;
}
exports.createVerifiedTwitterRegistry = createVerifiedTwitterRegistry;
// Overwrite the data that is written in the user facing registry
// Signed by the verified pubkey
async function changeTwitterRegistryData(twitterHandle, verifiedPubkey, offset, // The offset at which to write the input data into the NameRegistryData
input_data) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        (0, instructions_1.updateInstruction)(constants_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, 
        //@ts-ignore
        new int_1.Numberu32(offset), input_data, verifiedPubkey),
    ];
    return instructions;
}
exports.changeTwitterRegistryData = changeTwitterRegistryData;
// Change the verified pubkey for a given twitter handle
// Signed by the Authority, the verified pubkey and the payer
async function changeVerifiedPubkey(connection, twitterHandle, currentVerifiedPubkey, newVerifiedPubkey, payerKey) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    // Transfer the user-facing registry ownership
    let instructions = [
        (0, instructions_1.transferInstruction)(constants_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, newVerifiedPubkey, currentVerifiedPubkey, undefined),
    ];
    // Delete the current reverse registry
    const currentHashedVerifiedPubkey = await (0, utils_1.getHashedName)(currentVerifiedPubkey.toString());
    const currentReverseRegistryKey = await (0, utils_1.getNameAccountKey)(currentHashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, undefined);
    instructions.push(await (0, bindings_1.deleteNameRegistry)(connection, currentVerifiedPubkey.toString(), payerKey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY));
    // Create the new reverse registry
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, newVerifiedPubkey, payerKey));
    return instructions;
}
exports.changeVerifiedPubkey = changeVerifiedPubkey;
// Delete the verified registry for a given twitter handle
// Signed by the verified pubkey
async function deleteTwitterRegistry(twitterHandle, verifiedPubkey) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitterHandle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const hashedVerifiedPubkey = await (0, utils_1.getHashedName)(verifiedPubkey.toString());
    const reverseRegistryKey = await (0, utils_1.getNameAccountKey)(hashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        // Delete the user facing registry
        (0, instructions_1.deleteInstruction)(constants_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, verifiedPubkey, verifiedPubkey),
        // Delete the reverse registry
        (0, instructions_1.deleteInstruction)(constants_1.NAME_PROGRAM_ID, reverseRegistryKey, verifiedPubkey, verifiedPubkey),
    ];
    return instructions;
}
exports.deleteTwitterRegistry = deleteTwitterRegistry;
//////////////////////////////////////////
// Getter Functions
// Returns the key of the user-facing registry
async function getTwitterRegistryKey(twitter_handle) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitter_handle);
    return await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
}
exports.getTwitterRegistryKey = getTwitterRegistryKey;
async function getTwitterRegistry(connection, twitter_handle) {
    const hashedTwitterHandle = await (0, utils_1.getHashedName)(twitter_handle);
    const twitterHandleRegistryKey = await (0, utils_1.getNameAccountKey)(hashedTwitterHandle, undefined, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, twitterHandleRegistryKey);
    return registry;
}
exports.getTwitterRegistry = getTwitterRegistry;
async function getHandleAndRegistryKey(connection, verifiedPubkey) {
    const hashedVerifiedPubkey = await (0, utils_1.getHashedName)(verifiedPubkey.toString());
    const reverseRegistryKey = await (0, utils_1.getNameAccountKey)(hashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseRegistryState = await ReverseTwitterRegistryState.retrieve(connection, reverseRegistryKey);
    return [
        reverseRegistryState.twitterHandle,
        new web3_js_1.PublicKey(reverseRegistryState.twitterRegistryKey),
    ];
}
exports.getHandleAndRegistryKey = getHandleAndRegistryKey;
// Uses the RPC node filtering feature, execution speed may vary
async function getTwitterHandleandRegistryKeyViaFilters(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: constants_1.TWITTER_VERIFICATION_AUTHORITY.toBase58(),
            },
        },
    ];
    const filteredAccounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, { filters });
    for (const f of filteredAccounts) {
        if (f.account.data.length > state_1.NameRegistryState.HEADER_LEN + 32) {
            let data = f.account.data.slice(state_1.NameRegistryState.HEADER_LEN);
            let state = (0, borsh_1.deserializeUnchecked)(ReverseTwitterRegistryState.schema, ReverseTwitterRegistryState, data);
            return [state.twitterHandle, new web3_js_1.PublicKey(state.twitterRegistryKey)];
        }
    }
    throw new Error("Registry not found.");
}
exports.getTwitterHandleandRegistryKeyViaFilters = getTwitterHandleandRegistryKeyViaFilters;
// Uses the RPC node filtering feature, execution speed may vary
// Does not give you the handle, but is an alternative to getHandlesAndKeysFromVerifiedPubkey + getTwitterRegistry to get the data
async function getTwitterRegistryData(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: new web3_js_1.PublicKey(Buffer.alloc(32, 0)).toBase58(),
            },
        },
    ];
    const filteredAccounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, { filters });
    if (filteredAccounts.length > 1) {
        throw new Error("Found more than one registry.");
    }
    return filteredAccounts[0].account.data.slice(state_1.NameRegistryState.HEADER_LEN);
}
exports.getTwitterRegistryData = getTwitterRegistryData;
//////////////////////////////////////////////
// Utils
class ReverseTwitterRegistryState {
    constructor(obj) {
        this.twitterRegistryKey = obj.twitterRegistryKey;
        this.twitterHandle = obj.twitterHandle;
    }
    static async retrieve(connection, reverseTwitterAccountKey) {
        let reverseTwitterAccount = await connection.getAccountInfo(reverseTwitterAccountKey, "processed");
        if (!reverseTwitterAccount) {
            throw new Error("Invalid reverse Twitter account provided");
        }
        let res = (0, borsh_1.deserializeUnchecked)(this.schema, ReverseTwitterRegistryState, reverseTwitterAccount.data.slice(state_1.NameRegistryState.HEADER_LEN));
        return res;
    }
}
exports.ReverseTwitterRegistryState = ReverseTwitterRegistryState;
ReverseTwitterRegistryState.schema = new Map([
    [
        ReverseTwitterRegistryState,
        {
            kind: "struct",
            fields: [
                ["twitterRegistryKey", [32]],
                ["twitterHandle", "string"],
            ],
        },
    ],
]);
async function createReverseTwitterRegistry(connection, twitterHandle, twitterRegistryKey, verifiedPubkey, payerKey) {
    // Create the reverse lookup registry
    const hashedVerifiedPubkey = await (0, utils_1.getHashedName)(verifiedPubkey.toString());
    const reverseRegistryKey = await (0, utils_1.getNameAccountKey)(hashedVerifiedPubkey, constants_1.TWITTER_VERIFICATION_AUTHORITY, constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseTwitterRegistryStateBuff = (0, borsh_1.serialize)(ReverseTwitterRegistryState.schema, new ReverseTwitterRegistryState({
        twitterRegistryKey: twitterRegistryKey.toBytes(),
        twitterHandle,
    }));
    return [
        (0, instructions_1.createInstruction)(constants_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, reverseRegistryKey, verifiedPubkey, payerKey, hashedVerifiedPubkey, new int_1.Numberu64(
        //@ts-ignore
        await connection.getMinimumBalanceForRentExemption(reverseTwitterRegistryStateBuff.length + state_1.NameRegistryState.HEADER_LEN)), 
        //@ts-ignore
        new int_1.Numberu32(reverseTwitterRegistryStateBuff.length), constants_1.TWITTER_VERIFICATION_AUTHORITY, // Twitter authority acts as class for all reverse-lookup registries
        constants_1.TWITTER_ROOT_PARENT_REGISTRY_KEY, // Reverse registries are also children of the root
        constants_1.TWITTER_VERIFICATION_AUTHORITY),
        (0, instructions_1.updateInstruction)(constants_1.NAME_PROGRAM_ID, reverseRegistryKey, 
        //@ts-ignore
        new int_1.Numberu32(0), Buffer.from(reverseTwitterRegistryStateBuff), constants_1.TWITTER_VERIFICATION_AUTHORITY),
    ];
}
exports.createReverseTwitterRegistry = createReverseTwitterRegistry;


/***/ }),

/***/ 21720:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Record = void 0;
/**
 * List of SNS Records
 */
var Record;
(function (Record) {
    Record["IPFS"] = "IPFS";
    Record["ARWV"] = "ARWV";
    Record["SOL"] = "SOL";
    Record["ETH"] = "ETH";
    Record["BTC"] = "BTC";
    Record["LTC"] = "LTC";
    Record["DOGE"] = "DOGE";
    Record["Email"] = "email";
    Record["Url"] = "url";
    Record["Discord"] = "discord";
    Record["Github"] = "github";
    Record["Reddit"] = "reddit";
    Record["Twitter"] = "twitter";
    Record["Telegram"] = "telegram";
    Record["Pic"] = "pic";
    Record["SHDW"] = "SHDW";
    Record["POINT"] = "POINT";
})(Record = exports.Record || (exports.Record = {}));


/***/ }),

/***/ 8262:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(7661)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAllRegisteredDomains = exports.getAllDomains = exports.getDomainKey = exports.findSubdomains = exports.performReverseLookupBatch = exports.getDNSRecordAddress = exports.performReverseLookup = exports.getNameAccountKey = exports.getHashedName = exports.getNameOwner = void 0;
const web3_js_1 = __webpack_require__(20374);
const bn_js_1 = __importDefault(__webpack_require__(73182));
const sha2_1 = __webpack_require__(79382);
const constants_1 = __webpack_require__(34823);
const state_1 = __webpack_require__(37628);
const constants_2 = __webpack_require__(34823);
async function getNameOwner(connection, nameAccountKey) {
    const nameAccount = await connection.getAccountInfo(nameAccountKey);
    if (!nameAccount) {
        throw new Error("Unable to find the given account.");
    }
    return state_1.NameRegistryState.retrieve(connection, nameAccountKey);
}
exports.getNameOwner = getNameOwner;
async function getHashedName(name) {
    const input = constants_1.HASH_PREFIX + name;
    const str = (0, sha2_1.sha256)(Buffer.from(input, "utf8")).slice(2);
    return Buffer.from(str, "hex");
}
exports.getHashedName = getHashedName;
async function getNameAccountKey(hashed_name, nameClass, nameParent) {
    const seeds = [hashed_name];
    if (nameClass) {
        seeds.push(nameClass.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    if (nameParent) {
        seeds.push(nameParent.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    const [nameAccountKey] = await web3_js_1.PublicKey.findProgramAddress(seeds, constants_1.NAME_PROGRAM_ID);
    return nameAccountKey;
}
exports.getNameAccountKey = getNameAccountKey;
async function performReverseLookup(connection, nameAccount) {
    const hashedReverseLookup = await getHashedName(nameAccount.toBase58());
    const reverseLookupAccount = await getNameAccountKey(hashedReverseLookup, constants_2.REVERSE_LOOKUP_CLASS);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, reverseLookupAccount);
    if (!registry.data) {
        throw "Could not retrieve name data";
    }
    const nameLength = new bn_js_1.default(registry.data.slice(0, 4), "le").toNumber();
    return registry.data.slice(4, 4 + nameLength).toString();
}
exports.performReverseLookup = performReverseLookup;
async function getDNSRecordAddress(nameAccount, type) {
    const hashedName = await getHashedName("\0".concat(type));
    const recordAccount = await getNameAccountKey(hashedName, undefined, nameAccount);
    return recordAccount;
}
exports.getDNSRecordAddress = getDNSRecordAddress;
async function performReverseLookupBatch(connection, nameAccounts) {
    let reverseLookupAccounts = [];
    for (let nameAccount of nameAccounts) {
        const hashedReverseLookup = await getHashedName(nameAccount.toBase58());
        const reverseLookupAccount = await getNameAccountKey(hashedReverseLookup, constants_2.REVERSE_LOOKUP_CLASS);
        reverseLookupAccounts.push(reverseLookupAccount);
    }
    let names = await state_1.NameRegistryState.retrieveBatch(connection, reverseLookupAccounts);
    return names.map((name) => {
        if (name === undefined || name.data === undefined) {
            return undefined;
        }
        let nameLength = new bn_js_1.default(name.data.slice(0, 4), "le").toNumber();
        return name.data.slice(4, 4 + nameLength).toString();
    });
}
exports.performReverseLookupBatch = performReverseLookupBatch;
/**
 *
 * @param connection The Solana RPC connection object
 * @param parentKey The parent you want to find sub-domains for
 * @returns
 */
const findSubdomains = async (connection, parentKey) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: parentKey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: constants_2.REVERSE_LOOKUP_CLASS.toBase58(),
            },
        },
    ];
    const result = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, {
        filters,
    });
    return result.map((e) => { var _a; return (_a = e.account.data.slice(97).toString("utf-8")) === null || _a === void 0 ? void 0 : _a.split("\0").join(""); });
};
exports.findSubdomains = findSubdomains;
const _derive = async (name, parent = constants_1.ROOT_DOMAIN_ACCOUNT) => {
    let hashed = await getHashedName(name);
    let pubkey = await getNameAccountKey(hashed, undefined, parent);
    return { pubkey, hashed };
};
/**
 * This function can be used to compute the public key of a domain or subdomain
 * @param domain The domain to compute the public key for (e.g `bonfida.sol`, `dex.bonfida.sol`)
 * @returns
 */
const getDomainKey = async (domain, record = false) => {
    if (domain.endsWith(".sol")) {
        domain = domain.slice(0, -4);
    }
    const splitted = domain.split(".");
    if (splitted.length === 2) {
        const prefix = Buffer.from([record ? 1 : 0]).toString();
        const sub = prefix.concat(splitted[0]);
        const { pubkey: parentKey } = await _derive(splitted[1]);
        const result = await _derive(sub, parentKey);
        return { ...result, isSub: true, parent: parentKey };
    }
    else if (splitted.length > 2) {
        throw new Error("Invalid derivation input");
    }
    const result = await _derive(domain, constants_1.ROOT_DOMAIN_ACCOUNT);
    return { ...result, isSub: false, parent: undefined };
};
exports.getDomainKey = getDomainKey;
/**
 * This function can be used to retrieve all domain names owned by `wallet`
 * @param connection The Solana RPC connection object
 * @param wallet The wallet you want to search domain names for
 * @returns
 */
async function getAllDomains(connection, wallet) {
    const filters = [
        {
            memcmp: {
                offset: 32,
                bytes: wallet.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.ROOT_DOMAIN_ACCOUNT.toBase58(),
            },
        },
    ];
    const accounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, {
        filters,
    });
    return accounts.map((a) => a.pubkey);
}
exports.getAllDomains = getAllDomains;
/**
 * This function can be used to retrieve all the registered `.sol` domains.
 * The account data is sliced to avoid enormous payload and only the owner is returned
 * @param connection The Solana RPC connection object
 * @returns
 */
const getAllRegisteredDomains = async (connection) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: constants_1.ROOT_DOMAIN_ACCOUNT.toBase58(),
            },
        },
    ];
    const dataSlice = { offset: 32, length: 32 };
    const accounts = await connection.getProgramAccounts(constants_1.NAME_PROGRAM_ID, {
        dataSlice,
        filters,
    });
    return accounts;
};
exports.getAllRegisteredDomains = getAllRegisteredDomains;


/***/ })

}]);
//# sourceMappingURL=npm-ns.bonfida.spl-name-service.js.map