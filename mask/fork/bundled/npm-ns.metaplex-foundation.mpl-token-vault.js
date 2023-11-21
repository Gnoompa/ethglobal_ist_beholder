"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9834],{

/***/ 65402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultProgram = exports.VaultInstructions = exports.VaultKey = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
var VaultKey;
(function (VaultKey) {
    VaultKey[VaultKey["Uninitialized"] = 0] = "Uninitialized";
    VaultKey[VaultKey["VaultV1"] = 3] = "VaultV1";
    VaultKey[VaultKey["SafetyDepositBoxV1"] = 1] = "SafetyDepositBoxV1";
    VaultKey[VaultKey["ExternalPriceAccountV1"] = 2] = "ExternalPriceAccountV1";
})(VaultKey = exports.VaultKey || (exports.VaultKey = {}));
var VaultInstructions;
(function (VaultInstructions) {
    VaultInstructions[VaultInstructions["InitVault"] = 0] = "InitVault";
    VaultInstructions[VaultInstructions["AddTokenToInactiveVault"] = 1] = "AddTokenToInactiveVault";
    VaultInstructions[VaultInstructions["ActivateVault"] = 2] = "ActivateVault";
    VaultInstructions[VaultInstructions["CombineVault"] = 3] = "CombineVault";
    VaultInstructions[VaultInstructions["RedeemShares"] = 4] = "RedeemShares";
    VaultInstructions[VaultInstructions["WithdrawTokenFromSafetyDepositBox"] = 5] = "WithdrawTokenFromSafetyDepositBox";
    VaultInstructions[VaultInstructions["MintFractionalShares"] = 6] = "MintFractionalShares";
    VaultInstructions[VaultInstructions["WithdrawSharesFromTreasury"] = 7] = "WithdrawSharesFromTreasury";
    VaultInstructions[VaultInstructions["AddSharesToTreasury"] = 8] = "AddSharesToTreasury";
    VaultInstructions[VaultInstructions["UpdateExternalPriceAccount"] = 9] = "UpdateExternalPriceAccount";
    VaultInstructions[VaultInstructions["SetVaultAuthority"] = 10] = "SetVaultAuthority";
})(VaultInstructions = exports.VaultInstructions || (exports.VaultInstructions = {}));
class VaultProgram extends mpl_core_1.Program {
}
exports.VaultProgram = VaultProgram;
VaultProgram.PREFIX = 'vault';
VaultProgram.PUBKEY = new web3_js_1.PublicKey(mpl_core_1.config.programs.vault);


/***/ }),

/***/ 19611:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalPriceAccount = exports.ExternalPriceAccountData = void 0;
const mpl_core_1 = __webpack_require__(68592);
const VaultProgram_1 = __webpack_require__(65402);
class ExternalPriceAccountData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = VaultProgram_1.VaultKey.ExternalPriceAccountV1;
    }
}
exports.ExternalPriceAccountData = ExternalPriceAccountData;
_a = ExternalPriceAccountData;
ExternalPriceAccountData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['pricePerShare', 'u64'],
    ['priceMint', 'pubkeyAsString'],
    ['allowedToCombine', 'u8'],
]);
class ExternalPriceAccount extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(VaultProgram_1.VaultProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!ExternalPriceAccount.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = ExternalPriceAccountData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === VaultProgram_1.VaultKey.ExternalPriceAccountV1;
    }
}
exports.ExternalPriceAccount = ExternalPriceAccount;


/***/ }),

/***/ 64886:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SafetyDepositBox = exports.SafetyDepositBoxData = void 0;
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const buffer_1 = __webpack_require__(7661);
const mpl_core_1 = __webpack_require__(68592);
class SafetyDepositBoxData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = VaultProgram_1.VaultKey.SafetyDepositBoxV1;
    }
}
exports.SafetyDepositBoxData = SafetyDepositBoxData;
_a = SafetyDepositBoxData;
SafetyDepositBoxData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['vault', 'pubkeyAsString'],
    ['tokenMint', 'pubkeyAsString'],
    ['store', 'pubkeyAsString'],
    ['order', 'u8'],
]);
class SafetyDepositBox extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(VaultProgram_1.VaultProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!SafetyDepositBox.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = SafetyDepositBoxData.deserialize(this.info.data);
    }
    static getPDA(vault, mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return VaultProgram_1.VaultProgram.findProgramAddress([
                buffer_1.Buffer.from(VaultProgram_1.VaultProgram.PREFIX),
                new web3_js_1.PublicKey(vault).toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === VaultProgram_1.VaultKey.SafetyDepositBoxV1;
    }
}
exports.SafetyDepositBox = SafetyDepositBox;


/***/ }),

/***/ 4710:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vault = exports.VaultData = exports.VaultState = exports.NumberOfShareArgs = exports.AmountArgs = void 0;
const web3_js_1 = __webpack_require__(39925);
const bs58_1 = __importDefault(__webpack_require__(18705));
const mpl_core_1 = __webpack_require__(68592);
const SafetyDepositBox_1 = __webpack_require__(64886);
const VaultProgram_1 = __webpack_require__(65402);
const buffer_1 = __webpack_require__(7661);
class AmountArgs extends mpl_core_1.Borsh.Data {
}
exports.AmountArgs = AmountArgs;
_a = AmountArgs;
AmountArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['amount', 'u64'],
]);
class NumberOfShareArgs extends mpl_core_1.Borsh.Data {
}
exports.NumberOfShareArgs = NumberOfShareArgs;
_b = NumberOfShareArgs;
NumberOfShareArgs.SCHEMA = _b.struct([
    ['instruction', 'u8'],
    ['numberOfShares', 'u64'],
]);
var VaultState;
(function (VaultState) {
    VaultState[VaultState["Inactive"] = 0] = "Inactive";
    VaultState[VaultState["Active"] = 1] = "Active";
    VaultState[VaultState["Combined"] = 2] = "Combined";
    VaultState[VaultState["Deactivated"] = 3] = "Deactivated";
})(VaultState = exports.VaultState || (exports.VaultState = {}));
class VaultData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = VaultProgram_1.VaultKey.VaultV1;
    }
}
exports.VaultData = VaultData;
_c = VaultData;
VaultData.SCHEMA = _c.struct([
    ['key', 'u8'],
    ['tokenProgram', 'pubkeyAsString'],
    ['fractionMint', 'pubkeyAsString'],
    ['authority', 'pubkeyAsString'],
    ['fractionTreasury', 'pubkeyAsString'],
    ['redeemTreasury', 'pubkeyAsString'],
    ['allowFurtherShareCreation', 'u8'],
    ['pricingLookupAddress', 'pubkeyAsString'],
    ['tokenTypeCount', 'u8'],
    ['state', 'u8'],
    ['lockedPricePerShare', 'u64'],
]);
class Vault extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(VaultProgram_1.VaultProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Vault.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = VaultData.deserialize(this.info.data);
    }
    static getPDA(pubkey) {
        return __awaiter(this, void 0, void 0, function* () {
            return VaultProgram_1.VaultProgram.findProgramAddress([
                buffer_1.Buffer.from(VaultProgram_1.VaultProgram.PREFIX),
                VaultProgram_1.VaultProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(pubkey).toBuffer(),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === VaultProgram_1.VaultKey.VaultV1;
    }
    getSafetyDepositBoxes(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield VaultProgram_1.VaultProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([VaultProgram_1.VaultKey.SafetyDepositBoxV1])),
                        },
                    },
                    {
                        memcmp: {
                            offset: 1,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => SafetyDepositBox_1.SafetyDepositBox.from(account));
        });
    }
}
exports.Vault = Vault;
Vault.MAX_VAULT_SIZE = 1 + 32 + 32 + 32 + 32 + 1 + 32 + 1 + 32 + 1 + 1 + 8;
Vault.MAX_EXTERNAL_ACCOUNT_SIZE = 1 + 8 + 32 + 1;


/***/ }),

/***/ 99834:
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
__exportStar(__webpack_require__(64886), exports);
__exportStar(__webpack_require__(4710), exports);
__exportStar(__webpack_require__(19611), exports);
__exportStar(__webpack_require__(65402), exports);
__exportStar(__webpack_require__(50940), exports);
__exportStar(__webpack_require__(10740), exports);


/***/ }),

/***/ 92942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivateVault = void 0;
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const Vault_1 = __webpack_require__(4710);
const VaultProgram_2 = __webpack_require__(65402);
const mpl_core_1 = __webpack_require__(68592);
class ActivateVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionMint, fractionTreasury, fractionMintAuthority, numberOfShares, } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.ActivateVault,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMintAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.ActivateVault = ActivateVault;


/***/ }),

/***/ 64075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddSharesToTreasury = void 0;
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const Vault_1 = __webpack_require__(4710);
const VaultProgram_2 = __webpack_require__(65402);
const mpl_core_1 = __webpack_require__(68592);
class AddSharesToTreasury extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, source, transferAuthority, fractionTreasury, numberOfShares } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.AddSharesToTreasury,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: source,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.AddSharesToTreasury = AddSharesToTreasury;


/***/ }),

/***/ 51083:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTokenToInactiveVault = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const Vault_1 = __webpack_require__(4710);
const VaultProgram_1 = __webpack_require__(65402);
const VaultProgram_2 = __webpack_require__(65402);
class AddTokenToInactiveVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { vault, vaultAuthority, tokenAccount, tokenStoreAccount, transferAuthority, safetyDepositBox, amount, } = params;
        const data = Vault_1.AmountArgs.serialize({
            instruction: VaultProgram_2.VaultInstructions.AddTokenToInactiveVault,
            amount,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: safetyDepositBox,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenStoreAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
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
            ],
            programId: VaultProgram_1.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.AddTokenToInactiveVault = AddTokenToInactiveVault;


/***/ }),

/***/ 18042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CombineVault = exports.CombineVaultArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const VaultProgram_2 = __webpack_require__(65402);
class CombineVaultArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.CombineVault;
    }
}
exports.CombineVaultArgs = CombineVaultArgs;
_a = CombineVaultArgs;
CombineVaultArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class CombineVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionMint, fractionTreasury, outstandingShareTokenAccount, payingTokenAccount, redeemTreasury, newVaultAuthority, transferAuthority, externalPriceAccount, burnAuthority, } = params;
        const data = CombineVaultArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: outstandingShareTokenAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: payingTokenAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: redeemTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newVaultAuthority || vaultAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: burnAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: externalPriceAccount,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.CombineVault = CombineVault;


/***/ }),

/***/ 20082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitVault = exports.InitVaultArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const VaultProgram_2 = __webpack_require__(65402);
class InitVaultArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.InitVault;
        this.allowFurtherShareCreation = false;
    }
}
exports.InitVaultArgs = InitVaultArgs;
_a = InitVaultArgs;
InitVaultArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['allowFurtherShareCreation', 'u8'],
]);
class InitVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionalMint, redeemTreasury, fractionalTreasury, pricingLookupAddress, allowFurtherShareCreation, } = params;
        const data = InitVaultArgs.serialize({ allowFurtherShareCreation });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: fractionalMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: redeemTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionalTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: pricingLookupAddress,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.InitVault = InitVault;


/***/ }),

/***/ 50946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MintFractionalShares = void 0;
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const mpl_core_1 = __webpack_require__(68592);
const Vault_1 = __webpack_require__(4710);
const VaultProgram_2 = __webpack_require__(65402);
class MintFractionalShares extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionMint, fractionTreasury, fractionMintAuthority, numberOfShares, } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.MintFractionalShares,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: fractionMintAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.MintFractionalShares = MintFractionalShares;


/***/ }),

/***/ 64279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedeemShares = exports.RedeemSharesArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const VaultProgram_2 = __webpack_require__(65402);
class RedeemSharesArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.RedeemShares;
    }
}
exports.RedeemSharesArgs = RedeemSharesArgs;
_a = RedeemSharesArgs;
RedeemSharesArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class RedeemShares extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, burnAuthority, fractionMint, outstandingSharesAccount, proceedsAccount, redeemTreasury, transferAuthority, } = params;
        const data = RedeemSharesArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: outstandingSharesAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: proceedsAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: redeemTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: burnAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.RedeemShares = RedeemShares;


/***/ }),

/***/ 55849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetVaultAuthority = exports.SetVaultAuthorityArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const VaultProgram_2 = __webpack_require__(65402);
class SetVaultAuthorityArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.SetVaultAuthority;
    }
}
exports.SetVaultAuthorityArgs = SetVaultAuthorityArgs;
_a = SetVaultAuthorityArgs;
SetVaultAuthorityArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class SetVaultAuthority extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, currentAuthority, newAuthority } = params;
        const data = SetVaultAuthorityArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: vault,
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
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.SetVaultAuthority = SetVaultAuthority;


/***/ }),

/***/ 9529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateExternalPriceAccount = exports.UpdateExternalPriceAccountArgs = void 0;
const mpl_core_1 = __webpack_require__(68592);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const ExternalPriceAccount_1 = __webpack_require__(19611);
const VaultProgram_2 = __webpack_require__(65402);
class UpdateExternalPriceAccountArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.UpdateExternalPriceAccount;
    }
}
exports.UpdateExternalPriceAccountArgs = UpdateExternalPriceAccountArgs;
_a = UpdateExternalPriceAccountArgs;
UpdateExternalPriceAccountArgs.SCHEMA = new Map([
    ...ExternalPriceAccount_1.ExternalPriceAccountData.SCHEMA,
    ..._a.struct([
        ['instruction', 'u8'],
        ['externalPriceAccount', ExternalPriceAccount_1.ExternalPriceAccountData],
    ]),
]);
class UpdateExternalPriceAccount extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { externalPriceAccount, externalPriceAccountData } = params;
        const data = UpdateExternalPriceAccountArgs.serialize({
            externalPriceAccount: externalPriceAccountData,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: externalPriceAccount,
                    isSigner: false,
                    isWritable: true,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdateExternalPriceAccount = UpdateExternalPriceAccount;


/***/ }),

/***/ 45814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithdrawSharesFromTreasury = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const Vault_1 = __webpack_require__(4710);
const VaultProgram_2 = __webpack_require__(65402);
class WithdrawSharesFromTreasury extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, destination, transferAuthority, fractionTreasury, numberOfShares, } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.WithdrawSharesFromTreasury,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.WithdrawSharesFromTreasury = WithdrawSharesFromTreasury;


/***/ }),

/***/ 89737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithdrawTokenFromSafetyDepositBox = void 0;
const mpl_core_1 = __webpack_require__(68592);
const spl_token_1 = __webpack_require__(21303);
const web3_js_1 = __webpack_require__(39925);
const VaultProgram_1 = __webpack_require__(65402);
const Vault_1 = __webpack_require__(4710);
const VaultProgram_2 = __webpack_require__(65402);
class WithdrawTokenFromSafetyDepositBox extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, store, destination, fractionMint, transferAuthority, safetyDepositBox, amount, } = params;
        const data = Vault_1.AmountArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.WithdrawTokenFromSafetyDepositBox,
            amount,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositBox,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.WithdrawTokenFromSafetyDepositBox = WithdrawTokenFromSafetyDepositBox;


/***/ }),

/***/ 50940:
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
__exportStar(__webpack_require__(92942), exports);
__exportStar(__webpack_require__(64075), exports);
__exportStar(__webpack_require__(51083), exports);
__exportStar(__webpack_require__(18042), exports);
__exportStar(__webpack_require__(20082), exports);
__exportStar(__webpack_require__(50946), exports);
__exportStar(__webpack_require__(64279), exports);
__exportStar(__webpack_require__(55849), exports);
__exportStar(__webpack_require__(9529), exports);
__exportStar(__webpack_require__(45814), exports);
__exportStar(__webpack_require__(89737), exports);


/***/ }),

/***/ 10740:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })

}]);
//# sourceMappingURL=npm-ns.metaplex-foundation.mpl-token-vault.js.map