"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9262],{

/***/ 48823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $C: () => (/* binding */ payer),
/* harmony export */   $x: () => (/* binding */ atBlockId),
/* harmony export */   D0: () => (/* binding */ getAccount),
/* harmony export */   DB: () => (/* binding */ resolve),
/* harmony export */   Ge: () => (/* binding */ block),
/* harmony export */   Hv: () => (/* binding */ voucherIntercept),
/* harmony export */   IY: () => (/* binding */ isOk),
/* harmony export */   JT: () => (/* binding */ account),
/* harmony export */   J_: () => (/* binding */ build),
/* harmony export */   Jd: () => (/* binding */ send),
/* harmony export */   Jx: () => (/* binding */ decode),
/* harmony export */   KX: () => (/* binding */ authorizations),
/* harmony export */   Lv: () => (/* binding */ getTransactionStatus),
/* harmony export */   Nj: () => (/* binding */ getNetworkParameters),
/* harmony export */   Nx: () => (/* binding */ getBlockHeader),
/* harmony export */   Oq: () => (/* binding */ encodeMessageFromSignable),
/* harmony export */   PS: () => (/* binding */ transaction),
/* harmony export */   Pe: () => (/* binding */ isBad),
/* harmony export */   Qg: () => (/* binding */ getBlock),
/* harmony export */   R9: () => (/* binding */ arg),
/* harmony export */   Tl: () => (/* binding */ interaction),
/* harmony export */   WC: () => (/* binding */ args),
/* harmony export */   _N: () => (/* binding */ getCollection),
/* harmony export */   _v: () => (/* binding */ script),
/* harmony export */   aU: () => (/* binding */ getEventsAtBlockIds),
/* harmony export */   b9: () => (/* binding */ limit),
/* harmony export */   c0: () => (/* binding */ createSignableVoucher),
/* harmony export */   f: () => (/* binding */ params),
/* harmony export */   fI: () => (/* binding */ voucherToTxId),
/* harmony export */   fo: () => (/* binding */ getTransaction),
/* harmony export */   iB: () => (/* binding */ proposer),
/* harmony export */   iH: () => (/* binding */ ref),
/* harmony export */   jL: () => (/* binding */ authorization),
/* harmony export */   kG: () => (/* binding */ invariant),
/* harmony export */   kW: () => (/* binding */ index),
/* harmony export */   o9: () => (/* binding */ atBlockHeight),
/* harmony export */   oL: () => (/* binding */ getEventsAtBlockHeightRange),
/* harmony export */   qE: () => (/* binding */ ping),
/* harmony export */   sC: () => (/* binding */ validator),
/* harmony export */   vc: () => (/* reexport safe */ _onflow_config__WEBPACK_IMPORTED_MODULE_1__.v),
/* harmony export */   vw: () => (/* binding */ getEvents),
/* harmony export */   wu: () => (/* binding */ param),
/* harmony export */   zG: () => (/* binding */ pipe),
/* harmony export */   zq: () => (/* binding */ why)
/* harmony export */ });
/* unused harmony exports VERSION, destroy, encodeTransactionEnvelope, encodeTransactionPayload, encodeTxIdFromVoucher, get, isGetAccount, isGetBlock, isGetBlockHeader, isGetCollection, isGetEvents, isGetNetworkParameters, isGetTransaction, isGetTransactionStatus, isPing, isScript, isTransaction, isUnknown, put, resolveAccounts, resolveArguments, resolveCadence, resolveFinalNormalization, resolveProposerSequenceNumber, resolveRefBlockId, resolveSignatures, resolveValidators, resolveVoucherIntercept, response, update */
/* harmony import */ var _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21874);
/* harmony import */ var _onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93644);
/* harmony import */ var _onflow_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92316);
/* harmony import */ var _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77346);
/* harmony import */ var _onflow_transport_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64724);
/* harmony import */ var _onflow_util_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28114);
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5259);
/* harmony import */ var _onflow_util_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14933);












const UNKNOWN /*                       */ = "UNKNOWN";
const SCRIPT /*                        */ = "SCRIPT";
const TRANSACTION /*                   */ = "TRANSACTION";
const GET_TRANSACTION_STATUS /*        */ = "GET_TRANSACTION_STATUS";
const GET_ACCOUNT /*                   */ = "GET_ACCOUNT";
const GET_EVENTS /*                    */ = "GET_EVENTS";
const PING /*                          */ = "PING";
const GET_TRANSACTION /*               */ = "GET_TRANSACTION";
const GET_BLOCK /*                     */ = "GET_BLOCK";
const GET_BLOCK_HEADER /*              */ = "GET_BLOCK_HEADER";
const GET_COLLECTION /*                */ = "GET_COLLECTION";
const GET_NETWORK_PARAMETERS /*        */ = "GET_NETWORK_PARAMETERS";
const BAD /* */ = "BAD";
const OK /*  */ = "OK";
const ACCOUNT /*  */ = "ACCOUNT";
const PARAM /*    */ = "PARAM";
const ARGUMENT /* */ = "ARGUMENT";
const AUTHORIZER /* */ = "authorizer";
const PAYER /*      */ = "payer";
const PROPOSER /*   */ = "proposer";
const ACCT = `{
  "kind":"${ACCOUNT}",
  "tempId":null,
  "addr":null,
  "keyId":null,
  "sequenceNum":null,
  "signature":null,
  "signingFunction":null,
  "resolve":null,
  "role": {
    "proposer":false,
    "authorizer":false,
    "payer":false,
    "param":false
  }
}`;
const ARG = `{
  "kind":"${ARGUMENT}",
  "tempId":null,
  "value":null,
  "asArgument":null,
  "xform":null,
  "resolve": null,
  "resolveArgument": null
}`;
const IX = `{
  "tag":"${UNKNOWN}",
  "assigns":{},
  "status":"${OK}",
  "reason":null,
  "accounts":{},
  "params":{},
  "arguments":{},
  "message": {
    "cadence":null,
    "refBlock":null,
    "computeLimit":null,
    "proposer":null,
    "payer":null,
    "authorizations":[],
    "params":[],
    "arguments":[]
  },
  "proposer":null,
  "authorizations":[],
  "payer":[],
  "events": {
    "eventType":null,
    "start":null,
    "end":null,
    "blockIds":[]
  },
  "transaction": {
    "id":null
  },
  "block": {
    "id":null,
    "height":null,
    "isSealed":null
  },
  "account": {
    "addr":null
  },
  "collection": {
    "id":null
  }
}`;
const KEYS = new Set(Object.keys(JSON.parse(IX)));
const interaction = () => JSON.parse(IX);
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
const randChar = () => CHARS[~~(Math.random() * CHARS.length)];
const uuid = () => Array.from({
  length: 10
}, randChar).join("");
const isNumber$1 = d => typeof d === "number";
const isArray$1 = d => Array.isArray(d);
const isObj = d => d !== null && typeof d === "object";
const isNull = d => d == null;
const isFn$3 = d => typeof d === "function";
const isInteraction = ix => {
  if (!isObj(ix) || isNull(ix) || isNumber$1(ix)) return false;
  for (let key of KEYS) if (!ix.hasOwnProperty(key)) return false;
  return true;
};
const Ok = ix => {
  ix.status = OK;
  return ix;
};
const Bad = (ix, reason) => {
  ix.status = BAD;
  ix.reason = reason;
  return ix;
};
const makeIx = wat => ix => {
  ix.tag = wat;
  return Ok(ix);
};
const prepAccountKeyId = acct => {
  if (acct.keyId == null) return acct;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(!isNaN(parseInt(acct.keyId)), "account.keyId must be an integer");
  return {
    ...acct,
    keyId: parseInt(acct.keyId)
  };
};
const prepAccount = function (acct) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return ix => {
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(typeof acct === "function" || typeof acct === "object", "prepAccount must be passed an authorization function or an account object");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(opts.role != null, "Account must have a role");
    const ACCOUNT = JSON.parse(ACCT);
    const role = opts.role;
    const tempId = uuid();
    if (acct.authorization && isFn$3(acct.authorization)) acct = {
      resolve: acct.authorization
    };
    if (!acct.authorization && isFn$3(acct)) acct = {
      resolve: acct
    };
    const resolve = acct.resolve;
    if (resolve) acct.resolve = function (acct) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      return [resolve, prepAccountKeyId].reduce(async (d, fn) => fn(await d, ...rest), acct);
    };
    acct = prepAccountKeyId(acct);
    ix.accounts[tempId] = {
      ...ACCOUNT,
      tempId,
      ...acct,
      role: {
        ...ACCOUNT.role,
        ...(typeof acct.role === "object" ? acct.role : {}),
        [role]: true
      }
    };
    if (role === AUTHORIZER) {
      ix.authorizations.push(tempId);
    } else if (role === PAYER) {
      ix.payer.push(tempId);
    } else {
      ix[role] = tempId;
    }
    return ix;
  };
};
const makeArgument = arg => ix => {
  let tempId = uuid();
  ix.message.arguments.push(tempId);
  ix.arguments[tempId] = JSON.parse(ARG);
  ix.arguments[tempId].tempId = tempId;
  ix.arguments[tempId].value = arg.value;
  ix.arguments[tempId].asArgument = arg.asArgument;
  ix.arguments[tempId].xform = arg.xform;
  ix.arguments[tempId].resolve = arg.resolve;
  ix.arguments[tempId].resolveArgument = isFn$3(arg.resolveArgument) ? arg.resolveArgument.bind(arg) : arg.resolveArgument;
  return Ok(ix);
};
const makeUnknown /*                 */ = makeIx(UNKNOWN);
const makeScript /*                  */ = makeIx(SCRIPT);
const makeTransaction /*             */ = makeIx(TRANSACTION);
const makeGetTransactionStatus /*    */ = makeIx(GET_TRANSACTION_STATUS);
const makeGetTransaction /*          */ = makeIx(GET_TRANSACTION);
const makeGetAccount /*              */ = makeIx(GET_ACCOUNT);
const makeGetEvents /*               */ = makeIx(GET_EVENTS);
const makePing /*                    */ = makeIx(PING);
const makeGetBlock /*                */ = makeIx(GET_BLOCK);
const makeGetBlockHeader /*          */ = makeIx(GET_BLOCK_HEADER);
const makeGetCollection /*           */ = makeIx(GET_COLLECTION);
const makeGetNetworkParameters /*    */ = makeIx(GET_NETWORK_PARAMETERS);
const is = wat => ix => ix.tag === wat;
const isUnknown /*                 */ = is(UNKNOWN);
const isScript /*                  */ = is(SCRIPT);
const isTransaction /*             */ = is(TRANSACTION);
const isGetTransactionStatus /*    */ = is(GET_TRANSACTION_STATUS);
const isGetTransaction /*          */ = is(GET_TRANSACTION);
const isGetAccount /*              */ = is(GET_ACCOUNT);
const isGetEvents /*               */ = is(GET_EVENTS);
const isPing /*                    */ = is(PING);
const isGetBlock /*                */ = is(GET_BLOCK);
const isGetBlockHeader /*          */ = is(GET_BLOCK_HEADER);
const isGetCollection /*           */ = is(GET_COLLECTION);
const isGetNetworkParameters /*    */ = is(GET_NETWORK_PARAMETERS);
const isOk /*  */ = ix => ix.status === OK;
const isBad /* */ = ix => ix.status === BAD;
const why /*   */ = ix => ix.reason;
const isAccount /*  */ = account => account.kind === ACCOUNT;
const isParam /*    */ = param => param.kind === PARAM;
const isArgument /* */ = argument => argument.kind === ARGUMENT;
const hardMode = ix => {
  for (let key of Object.keys(ix)) {
    if (!KEYS.has(key)) throw new Error(`"${key}" is an invalid root level Interaction property.`);
  }
  return ix;
};
const recPipe = async function (ix) {
  let fns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  try {
    ix = hardMode(await ix);
    if (isBad(ix)) throw new Error(`Interaction Error: ${ix.reason}`);
    if (!fns.length) return ix;
    const [hd, ...rest] = fns;
    const cur = await hd;
    if (isFn$3(cur)) return recPipe(cur(ix), rest);
    if (isNull(cur) || !cur) return recPipe(ix, rest);
    if (isInteraction(cur)) return recPipe(cur, rest);
    throw new Error("Invalid Interaction Composition");
  } catch (e) {
    throw e;
  }
};
const pipe = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  const [arg1, arg2] = args;
  if (isArray$1(arg1) && arg2 == null) return d => pipe(d, arg1);
  return recPipe(arg1, arg2);
};
const identity$1 = v => v;
const get = (ix, key, fallback) => {
  return ix.assigns[key] == null ? fallback : ix.assigns[key];
};
const put = (key, value) => ix => {
  ix.assigns[key] = value;
  return Ok(ix);
};
const update = function (key) {
  let fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity$1;
  return ix => {
    ix.assigns[key] = fn(ix.assigns[key], ix);
    return Ok(ix);
  };
};
const destroy = key => ix => {
  delete ix.assigns[key];
  return Ok(ix);
};

var ixModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  UNKNOWN: UNKNOWN,
  SCRIPT: SCRIPT,
  TRANSACTION: TRANSACTION,
  GET_TRANSACTION_STATUS: GET_TRANSACTION_STATUS,
  GET_ACCOUNT: GET_ACCOUNT,
  GET_EVENTS: GET_EVENTS,
  PING: PING,
  GET_TRANSACTION: GET_TRANSACTION,
  GET_BLOCK: GET_BLOCK,
  GET_BLOCK_HEADER: GET_BLOCK_HEADER,
  GET_COLLECTION: GET_COLLECTION,
  GET_NETWORK_PARAMETERS: GET_NETWORK_PARAMETERS,
  BAD: BAD,
  OK: OK,
  ACCOUNT: ACCOUNT,
  PARAM: PARAM,
  ARGUMENT: ARGUMENT,
  AUTHORIZER: AUTHORIZER,
  PAYER: PAYER,
  PROPOSER: PROPOSER,
  interaction: interaction,
  uuid: uuid,
  isNumber: isNumber$1,
  isArray: isArray$1,
  isObj: isObj,
  isNull: isNull,
  isFn: isFn$3,
  isInteraction: isInteraction,
  Ok: Ok,
  Bad: Bad,
  prepAccount: prepAccount,
  makeArgument: makeArgument,
  makeUnknown: makeUnknown,
  makeScript: makeScript,
  makeTransaction: makeTransaction,
  makeGetTransactionStatus: makeGetTransactionStatus,
  makeGetTransaction: makeGetTransaction,
  makeGetAccount: makeGetAccount,
  makeGetEvents: makeGetEvents,
  makePing: makePing,
  makeGetBlock: makeGetBlock,
  makeGetBlockHeader: makeGetBlockHeader,
  makeGetCollection: makeGetCollection,
  makeGetNetworkParameters: makeGetNetworkParameters,
  isUnknown: isUnknown,
  isScript: isScript,
  isTransaction: isTransaction,
  isGetTransactionStatus: isGetTransactionStatus,
  isGetTransaction: isGetTransaction,
  isGetAccount: isGetAccount,
  isGetEvents: isGetEvents,
  isPing: isPing,
  isGetBlock: isGetBlock,
  isGetBlockHeader: isGetBlockHeader,
  isGetCollection: isGetCollection,
  isGetNetworkParameters: isGetNetworkParameters,
  isOk: isOk,
  isBad: isBad,
  why: why,
  isAccount: isAccount,
  isParam: isParam,
  isArgument: isArgument,
  pipe: pipe,
  get: get,
  put: put,
  update: update,
  destroy: destroy
});

function build() {
  let fns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return pipe(interaction(), fns);
}

const DEFAULT_RESPONSE = `{
    "tag":null,
    "transaction":null,
    "transactionStatus":null,
    "transactionId":null,
    "encodedData":null,
    "events":null,
    "account":null,
    "block":null,
    "blockHeader":null,
    "latestBlock":null,
    "collection":null,
    "networkParameters":null
}`;
const response = () => JSON.parse(DEFAULT_RESPONSE);

/**
 * @description - A builder function that returns the interaction to get the latest block
 * @param {boolean} [isSealed] - Whether or not the block should be sealed
 * @returns {object} - An interaction object
 */
function getBlock() {
  let isSealed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return pipe([makeGetBlock, ix => {
    ix.block.isSealed = isSealed;
    return Ok(ix);
  }]);
}

/**
 * @description - A builder function that returns the interaction to get an account by address
 * @param {string} addr - The address of the account to getq
 * @returns {object} - An interaction object
 */
function getAccount(addr) {
  return pipe([makeGetAccount, ix => {
    ix.account.addr = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(addr);
    return Ok(ix);
  }]);
}

const latestBlockDeprecationNotice = () => {
  _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c.deprecate({
    pkg: "@onflow/decode",
    subject: "Operating upon data of the latestBlock field of the response object",
    transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/decode/WARNINGS.md#0001-Deprecating-latestBlock-field"
  });
};
const decodeImplicit = async i => i;
const decodeVoid = async () => null;
const decodeType = async type => {
  return type.staticType;
};
const decodePath = async path => {
  return {
    domain: path.domain,
    identifier: path.identifier
  };
};
const decodeCapability = async cap => {
  return {
    path: cap.path,
    address: cap.address,
    borrowType: cap.borrowType
  };
};
const decodeOptional = async (optional, decoders, stack) => optional ? await recurseDecode(optional, decoders, stack) : null;
const decodeReference = async v => ({
  address: v.address,
  type: v.type
});
const decodeArray = async (array, decoders, stack) => await Promise.all(array.map(v => new Promise(async res => res(await recurseDecode(v, decoders, [...stack, v.type])))));
const decodeDictionary = async (dictionary, decoders, stack) => await dictionary.reduce(async (acc, v) => {
  acc = await acc;
  acc[await recurseDecode(v.key, decoders, [...stack, v.key])] = await recurseDecode(v.value, decoders, [...stack, v.key]);
  return acc;
}, Promise.resolve({}));
const decodeComposite = async (composite, decoders, stack) => {
  const decoded = await composite.fields.reduce(async (acc, v) => {
    acc = await acc;
    acc[v.name] = await recurseDecode(v.value, decoders, [...stack, v.name]);
    return acc;
  }, Promise.resolve({}));
  const decoder = composite.id && decoderLookup(decoders, composite.id);
  return decoder ? await decoder(decoded) : decoded;
};
const defaultDecoders = {
  UInt: decodeImplicit,
  Int: decodeImplicit,
  UInt8: decodeImplicit,
  Int8: decodeImplicit,
  UInt16: decodeImplicit,
  Int16: decodeImplicit,
  UInt32: decodeImplicit,
  Int32: decodeImplicit,
  UInt64: decodeImplicit,
  Int64: decodeImplicit,
  UInt128: decodeImplicit,
  Int128: decodeImplicit,
  UInt256: decodeImplicit,
  Int256: decodeImplicit,
  Word8: decodeImplicit,
  Word16: decodeImplicit,
  Word32: decodeImplicit,
  Word64: decodeImplicit,
  UFix64: decodeImplicit,
  Fix64: decodeImplicit,
  String: decodeImplicit,
  Character: decodeImplicit,
  Bool: decodeImplicit,
  Address: decodeImplicit,
  Void: decodeVoid,
  Optional: decodeOptional,
  Reference: decodeReference,
  Array: decodeArray,
  Dictionary: decodeDictionary,
  Event: decodeComposite,
  Resource: decodeComposite,
  Struct: decodeComposite,
  Enum: decodeComposite,
  Type: decodeType,
  Path: decodePath,
  Capability: decodeCapability
};
const decoderLookup = (decoders, lookup) => {
  const found = Object.keys(decoders).find(decoder => {
    if (/^\/.*\/$/.test(decoder)) {
      const reg = new RegExp(decoder.substring(1, decoder.length - 1));
      return reg.test(lookup);
    }
    return decoder === lookup;
  });
  return lookup && found && decoders[found];
};
const recurseDecode = async (decodeInstructions, decoders, stack) => {
  let decoder = decoderLookup(decoders, decodeInstructions.type);
  if (!decoder) throw new Error(`Undefined Decoder Error: ${decodeInstructions.type}@${stack.join(".")}`);
  return await decoder(decodeInstructions.value, decoders, stack);
};

/**
 * @description - Decodes a response from Flow into JSON
 * @param {*} decodeInstructions - The response object from Flow
 * @param {object} customDecoders - An object of custom decoders
 * @param {Array<*>} stack - The stack of the current decoding
 * @returns {Promise<*>} - The decoded response
 */
const decode$1 = async function (decodeInstructions) {
  let customDecoders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let stack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  // Filter out all default decoders which are overridden by a custom decoder regex
  const filteredDecoders = Object.keys(defaultDecoders).filter(decoder => !Object.keys(customDecoders).find(customDecoder => new RegExp(customDecoder).test(decoder))).reduce((decoders, decoderKey) => {
    decoders[decoderKey] = defaultDecoders[decoderKey];
    return decoders;
  }, customDecoders);
  const decoders = {
    ...filteredDecoders,
    ...customDecoders
  };
  return recurseDecode(decodeInstructions, decoders, stack);
};
const decodeResponse = async function (response) {
  let customDecoders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (response.encodedData) {
    return decode$1(response.encodedData, customDecoders);
  } else if (response.transactionStatus) {
    return {
      ...response.transactionStatus,
      events: await Promise.all(response.transactionStatus.events.map(async function decodeEvents(e) {
        return {
          type: e.type,
          transactionId: e.transactionId,
          transactionIndex: e.transactionIndex,
          eventIndex: e.eventIndex,
          data: await decode$1(e.payload, customDecoders)
        };
      }))
    };
  } else if (response.transaction) {
    return response.transaction;
  } else if (response.events) {
    return await Promise.all(response.events.map(async function decodeEvents(e) {
      return {
        blockId: e.blockId,
        blockHeight: e.blockHeight,
        blockTimestamp: e.blockTimestamp,
        type: e.type,
        transactionId: e.transactionId,
        transactionIndex: e.transactionIndex,
        eventIndex: e.eventIndex,
        data: await decode$1(e.payload, customDecoders)
      };
    }));
  } else if (response.account) {
    return response.account;
  } else if (response.block) {
    return response.block;
  } else if (response.blockHeader) {
    return response.blockHeader;
  } else if (response.latestBlock) {
    latestBlockDeprecationNotice();
    return response.latestBlock;
  } else if (response.transactionId) {
    return response.transactionId;
  } else if (response.collection) {
    return response.collection;
  } else if (response.networkParameters) {
    const chainIdMap = {
      "flow-testnet": "testnet",
      "flow-mainnet": "mainnet",
      "flow-emulator": "local"
    };
    return {
      chainId: chainIdMap[response.networkParameters.chainId]
    };
  }
  return null;
};

const isFn$2 = v => typeof v === "function";
const isString$1 = v => typeof v === "string";
const oldIdentifierPatternFn = () => /\b(0x\w+)\b/g;
function isOldIdentifierSyntax(cadence) {
  return oldIdentifierPatternFn().test(cadence);
}
const newIdentifierPatternFn = () => /import\s+"(\w+)"/g;
function isNewIdentifierSyntax(cadence) {
  return newIdentifierPatternFn().test(cadence);
}
function getContractIdentifierSyntaxMatches(cadence) {
  return cadence.matchAll(newIdentifierPatternFn());
}
async function resolveCadence(ix) {
  if (!isTransaction(ix) && !isScript(ix)) return ix;
  var cadence = get(ix, "ix.cadence");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(isFn$2(cadence) || isString$1(cadence), "Cadence needs to be a function or a string.");
  if (isFn$2(cadence)) cadence = await cadence({});
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(isString$1(cadence), "Cadence needs to be a string at this point.");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(!isOldIdentifierSyntax(cadence) || !isNewIdentifierSyntax(cadence), "Both account identifier and contract identifier syntax not simultaneously supported.");
  if (isOldIdentifierSyntax(cadence)) {
    cadence = await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v)().where(/^0x/).then(d => Object.entries(d).reduce((cadence, _ref) => {
      let [key, value] = _ref;
      const regex = new RegExp("(\\b" + key + "\\b)", "g");
      return cadence.replace(regex, value);
    }, cadence));
  }
  if (isNewIdentifierSyntax(cadence)) {
    for (const [fullMatch, contractName] of getContractIdentifierSyntaxMatches(cadence)) {
      const address = await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v)().get(`system.contracts.${contractName}`);
      if (address) {
        cadence = cadence.replace(fullMatch, `import ${contractName} from ${(0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(address)}`);
      } else {
        _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c({
          title: "Contract Placeholder not found",
          message: `Cannot find a value for contract placeholder ${contractName}. Please add to your flow.json or explicitly add it to the config 'contracts.*' namespace.`,
          level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .LEVELS */ .z.warn
        });
      }
    }
  }

  // We need to move this over in any case.
  ix.message.cadence = cadence;
  return ix;
}

const isFn$1 = v => typeof v === "function";
function cast(arg) {
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(typeof arg.xform != null, `No type specified for argument: ${arg.value}`);
  if (isFn$1(arg.xform)) return arg.xform(arg.value);
  if (isFn$1(arg.xform.asArgument)) return arg.xform.asArgument(arg.value);

  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(false, `Invalid Argument`, arg);
}
async function handleArgResolution(arg) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(depth > 0, `Argument Resolve Recursion Limit Exceeded for Arg: ${arg.tempId}`);
  if (isFn$1(arg.resolveArgument)) {
    const resolvedArg = await arg.resolveArgument();
    return handleArgResolution(resolvedArg, depth - 1);
  } else {
    return arg;
  }
}
async function resolveArguments(ix) {
  if (isTransaction(ix) || isScript(ix)) {
    for (let [id, arg] of Object.entries(ix.arguments)) {
      const res = await handleArgResolution(arg);
      ix.arguments[id].asArgument = cast(res);
    }
  }
  return ix;
}

const encodeTransactionPayload = tx => prependTransactionDomainTag(rlpEncode(preparePayload(tx)));
const encodeTransactionEnvelope = tx => prependTransactionDomainTag(rlpEncode(prepareEnvelope(tx)));
const encodeTxIdFromVoucher = voucher => sha3_256(rlpEncode(prepareVoucher(voucher)));
const rightPaddedHexBuffer = (value, pad) => _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from(value.padEnd(pad * 2, 0), "hex");
const leftPaddedHexBuffer = (value, pad) => _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from(value.padStart(pad * 2, 0), "hex");
const TRANSACTION_DOMAIN_TAG = rightPaddedHexBuffer(_onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from("FLOW-V0.0-transaction").toString("hex"), 32).toString("hex");
const prependTransactionDomainTag = tx => TRANSACTION_DOMAIN_TAG + tx;
const addressBuffer = addr => leftPaddedHexBuffer(addr, 8);
const blockBuffer = block => leftPaddedHexBuffer(block, 32);
const argumentToString = arg => _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from(JSON.stringify(arg), "utf8");
const scriptBuffer = script => _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from(script, "utf8");
const signatureBuffer = signature => _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from(signature, "hex");
const rlpEncode = v => {
  return (0,_onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .cv)(v).toString("hex");
};
const sha3_256 = msg => {
  const sha = new sha3__WEBPACK_IMPORTED_MODULE_4__/* .SHA3 */ .Aj(256);
  sha.update(_onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW.from(msg, "hex"));
  return sha.digest().toString("hex");
};
const preparePayload = tx => {
  validatePayload(tx);
  return [scriptBuffer(tx.cadence), tx.arguments.map(argumentToString), blockBuffer(tx.refBlock), tx.computeLimit, addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(tx.proposalKey.address)), tx.proposalKey.keyId, tx.proposalKey.sequenceNum, addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(tx.payer)), tx.authorizers.map(authorizer => addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(authorizer)))];
};
const prepareEnvelope = tx => {
  validateEnvelope(tx);
  return [preparePayload(tx), preparePayloadSignatures(tx)];
};
const preparePayloadSignatures = tx => {
  const signers = collectSigners(tx);
  return tx.payloadSigs.map(sig => {
    return {
      signerIndex: signers.get(sig.address),
      keyId: sig.keyId,
      sig: sig.sig
    };
  }).sort((a, b) => {
    if (a.signerIndex > b.signerIndex) return 1;
    if (a.signerIndex < b.signerIndex) return -1;
    if (a.keyId > b.keyId) return 1;
    if (a.keyId < b.keyId) return -1;
  }).map(sig => {
    return [sig.signerIndex, sig.keyId, signatureBuffer(sig.sig)];
  });
};
const collectSigners = tx => {
  const signers = new Map();
  let i = 0;
  const addSigner = addr => {
    if (!signers.has(addr)) {
      signers.set(addr, i);
      i++;
    }
  };
  addSigner(tx.proposalKey.address);
  addSigner(tx.payer);
  tx.authorizers.forEach(addSigner);
  return signers;
};
const prepareVoucher = voucher => {
  validateVoucher(voucher);
  const signers = collectSigners(voucher);
  const prepareSigs = sigs => {
    return sigs.map(_ref => {
      let {
        address,
        keyId,
        sig
      } = _ref;
      return {
        signerIndex: signers.get(address),
        keyId,
        sig
      };
    }).sort((a, b) => {
      if (a.signerIndex > b.signerIndex) return 1;
      if (a.signerIndex < b.signerIndex) return -1;
      if (a.keyId > b.keyId) return 1;
      if (a.keyId < b.keyId) return -1;
    }).map(sig => {
      return [sig.signerIndex, sig.keyId, signatureBuffer(sig.sig)];
    });
  };
  return [[scriptBuffer(voucher.cadence), voucher.arguments.map(argumentToString), blockBuffer(voucher.refBlock), voucher.computeLimit, addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(voucher.proposalKey.address)), voucher.proposalKey.keyId, voucher.proposalKey.sequenceNum, addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(voucher.payer)), voucher.authorizers.map(authorizer => addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(authorizer)))], prepareSigs(voucher.payloadSigs), prepareSigs(voucher.envelopeSigs)];
};
const validatePayload = tx => {
  payloadFields.forEach(field => checkField(tx, field));
  proposalKeyFields.forEach(field => checkField(tx.proposalKey, field, "proposalKey"));
};
const validateEnvelope = tx => {
  payloadSigsFields.forEach(field => checkField(tx, field));
  tx.payloadSigs.forEach((sig, index) => {
    payloadSigFields.forEach(field => checkField(sig, field, "payloadSigs", index));
  });
};
const validateVoucher = voucher => {
  payloadFields.forEach(field => checkField(voucher, field));
  proposalKeyFields.forEach(field => checkField(voucher.proposalKey, field, "proposalKey"));
  payloadSigsFields.forEach(field => checkField(voucher, field));
  voucher.payloadSigs.forEach((sig, index) => {
    payloadSigFields.forEach(field => checkField(sig, field, "payloadSigs", index));
  });
  envelopeSigsFields.forEach(field => checkField(voucher, field));
  voucher.envelopeSigs.forEach((sig, index) => {
    envelopeSigFields.forEach(field => checkField(sig, field, "envelopeSigs", index));
  });
};
const isNumber = v => typeof v === "number";
const isString = v => typeof v === "string";
const isObject = v => v !== null && typeof v === "object";
const isArray = v => isObject(v) && v instanceof Array;
const payloadFields = [{
  name: "cadence",
  check: isString
}, {
  name: "arguments",
  check: isArray
}, {
  name: "refBlock",
  check: isString,
  defaultVal: "0"
}, {
  name: "computeLimit",
  check: isNumber
}, {
  name: "proposalKey",
  check: isObject
}, {
  name: "payer",
  check: isString
}, {
  name: "authorizers",
  check: isArray
}];
const proposalKeyFields = [{
  name: "address",
  check: isString
}, {
  name: "keyId",
  check: isNumber
}, {
  name: "sequenceNum",
  check: isNumber
}];
const payloadSigsFields = [{
  name: "payloadSigs",
  check: isArray
}];
const payloadSigFields = [{
  name: "address",
  check: isString
}, {
  name: "keyId",
  check: isNumber
}, {
  name: "sig",
  check: isString
}];
const envelopeSigsFields = [{
  name: "envelopeSigs",
  check: isArray
}];
const envelopeSigFields = [{
  name: "address",
  check: isString
}, {
  name: "keyId",
  check: isNumber
}, {
  name: "sig",
  check: isString
}];
const checkField = (obj, field, base, index) => {
  const {
    name,
    check,
    defaultVal
  } = field;
  if (obj[name] == null && defaultVal != null) obj[name] = defaultVal;
  if (obj[name] == null) throw missingFieldError(name, base, index);
  if (!check(obj[name])) throw invalidFieldError(name, base, index);
};
const printFieldName = (field, base, index) => {
  if (!!base) return index == null ? `${base}.${field}` : `${base}.${index}.${field}`;
  return field;
};
const missingFieldError = (field, base, index) => new Error(`Missing field ${printFieldName(field, base, index)}`);
const invalidFieldError = (field, base, index) => new Error(`Invalid field ${printFieldName(field, base, index)}`);

function findInsideSigners(ix) {
  // Inside Signers Are: (authorizers + proposer) - payer
  let inside = new Set(ix.authorizations);
  inside.add(ix.proposer);
  if (Array.isArray(ix.payer)) {
    ix.payer.forEach(p => inside.delete(p));
  } else {
    inside.delete(ix.payer);
  }
  return Array.from(inside);
}
function findOutsideSigners(ix) {
  // Outside Signers Are: (payer)
  let outside = new Set(Array.isArray(ix.payer) ? ix.payer : [ix.payer]);
  return Array.from(outside);
}
const createSignableVoucher = ix => {
  const buildAuthorizers = () => {
    const authorizations = ix.authorizations.map(cid => (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(ix.accounts[cid].addr)).reduce((prev, current) => {
      return prev.find(item => item === current) ? prev : [...prev, current];
    }, []);
    return authorizations[0] ? authorizations : [];
  };
  const buildInsideSigners = () => findInsideSigners(ix).map(id => ({
    address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(ix.accounts[id].addr),
    keyId: ix.accounts[id].keyId,
    sig: ix.accounts[id].signature
  }));
  const buildOutsideSigners = () => findOutsideSigners(ix).map(id => ({
    address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(ix.accounts[id].addr),
    keyId: ix.accounts[id].keyId,
    sig: ix.accounts[id].signature
  }));
  return {
    cadence: ix.message.cadence,
    refBlock: ix.message.refBlock || null,
    computeLimit: ix.message.computeLimit,
    arguments: ix.message.arguments.map(id => ix.arguments[id].asArgument),
    proposalKey: {
      address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(ix.accounts[ix.proposer].addr),
      keyId: ix.accounts[ix.proposer].keyId,
      sequenceNum: ix.accounts[ix.proposer].sequenceNum
    },
    payer: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(ix.accounts[Array.isArray(ix.payer) ? ix.payer[0] : ix.payer].addr),
    authorizers: buildAuthorizers(),
    payloadSigs: buildInsideSigners(),
    envelopeSigs: buildOutsideSigners()
  };
};
const voucherToTxId = voucher => {
  return encodeTxIdFromVoucher(voucher);
};

const idof$1 = acct => `${(0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(acct.addr)}-${acct.keyId}`;
const isFn = v => typeof v === "function";
function buildPreSignable(acct, ix) {
  try {
    return {
      f_type: "PreSignable",
      f_vsn: "1.0.1",
      roles: acct.role,
      cadence: ix.message.cadence,
      args: ix.message.arguments.map(d => ix.arguments[d].asArgument),
      data: {},
      interaction: ix,
      voucher: createSignableVoucher(ix)
    };
  } catch (error) {
    console.error("buildPreSignable", error);
    throw error;
  }
}
async function collectAccounts(ix, accounts, last) {
  let depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(depth, "Account Resolve Recursion Limit Exceeded", {
    ix,
    accounts
  });
  let authorizations = [];
  for (let ax of accounts) {
    let resolve = ax.resolve;
    ax.resolve = null;
    var old = last || ax;
    if (isFn(resolve)) ax = await resolve(ax, buildPreSignable(ax, ix));
    if (Array.isArray(ax)) {
      await collectAccounts(ix, ax, old, depth - 1);
    } else {
      if (ax.addr) {
        ax.addr = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(ax.addr);
      }
      if (ax.addr != null && ax.keyId != null) {
        ax.tempId = idof$1(ax);
      }
      ix.accounts[ax.tempId] = ix.accounts[ax.tempId] || ax;
      ix.accounts[ax.tempId].role.proposer = ix.accounts[ax.tempId].role.proposer || ax.role.proposer;
      ix.accounts[ax.tempId].role.payer = ix.accounts[ax.tempId].role.payer || ax.role.payer;
      ix.accounts[ax.tempId].role.authorizer = ix.accounts[ax.tempId].role.authorizer || ax.role.authorizer;
      if (ix.accounts[ax.tempId].role.proposer && ix.proposer === old.tempId) {
        ix.proposer = ax.tempId;
      }
      if (ix.accounts[ax.tempId].role.payer) {
        if (Array.isArray(ix.payer)) {
          ix.payer = Array.from(new Set([...ix.payer, ax.tempId].map(d => d === old.tempId ? ax.tempId : d)));
        } else {
          ix.payer = Array.from(new Set([ix.payer, ax.tempId].map(d => d === old.tempId ? ax.tempId : d)));
        }
        if (ix.payer.length > 1) {
          // remove payer dups based on addr and keyId
          const dupList = [];
          const payerAccts = [];
          ix.payer = ix.payer.reduce((g, tempId) => {
            const {
              addr
            } = ix.accounts[tempId];
            const key = idof$1(ix.accounts[tempId]);
            payerAccts.push(addr);
            if (dupList.includes(key)) return g;
            dupList.push(key);
            return [...g, tempId];
          }, []);
          const multiAccts = Array.from(new Set(payerAccts));
          if (multiAccts.length > 1) {
            throw new Error("Payer can not be different accounts");
          }
        }
      }
      if (ix.accounts[ax.tempId].role.authorizer) {
        if (last) {
          // do group replacement
          authorizations = Array.from(new Set([...authorizations, ax.tempId]));
        } else {
          // do 1-1 replacement
          ix.authorizations = ix.authorizations.map(d => d === old.tempId ? ax.tempId : d);
        }
      }
    }
    if (old.tempId != ax.tempId) delete ix.accounts[old.tempId];
  }
  if (last) {
    // complete (flatmap) group replacement
    ix.authorizations = ix.authorizations.map(d => d === last.tempId ? authorizations : d).reduce((prev, curr) => Array.isArray(curr) ? [...prev, ...curr] : [...prev, curr], []);
  }
}
async function resolveAccounts(ix) {
  if (isTransaction(ix)) {
    if (!Array.isArray(ix.payer)) {
      _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c.deprecate({
        pkg: "FCL",
        subject: '"ix.payer" must be an array. Support for ix.payer as a singular',
        message: "See changelog for more info."
      });
    }
    try {
      await collectAccounts(ix, Object.values(ix.accounts));
      await collectAccounts(ix, Object.values(ix.accounts));
    } catch (error) {
      console.error("=== SAD PANDA ===\n\n", error, "\n\n=== SAD PANDA ===");
      throw error;
    }
  }
  return ix;
}

async function resolveSignatures(ix) {
  if (isTransaction(ix)) {
    try {
      let insideSigners = findInsideSigners(ix);
      const insidePayload = encodeTransactionPayload(prepForEncoding(ix));
      await Promise.all(insideSigners.map(fetchSignature(ix, insidePayload)));
      let outsideSigners = findOutsideSigners(ix);
      const outsidePayload = encodeTransactionEnvelope({
        ...prepForEncoding(ix),
        payloadSigs: insideSigners.map(id => ({
          address: ix.accounts[id].addr,
          keyId: ix.accounts[id].keyId,
          sig: ix.accounts[id].signature
        }))
      });
      await Promise.all(outsideSigners.map(fetchSignature(ix, outsidePayload)));
    } catch (error) {
      console.error("Signatures", error, {
        ix
      });
      throw error;
    }
  }
  return ix;
}
function fetchSignature(ix, payload) {
  return async function innerFetchSignature(id) {
    const acct = ix.accounts[id];
    if (acct.signature != null) return;
    const {
      signature,
      keyId
    } = await acct.signingFunction(buildSignable(acct, payload, ix));
    if (!acct.role.proposer && keyId) {
      ix.accounts[id].keyId = keyId;
    }
    ix.accounts[id].signature = signature;
  };
}
function buildSignable(acct, message, ix) {
  try {
    return {
      f_type: "Signable",
      f_vsn: "1.0.1",
      message,
      addr: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(acct.addr),
      keyId: acct.keyId,
      roles: acct.role,
      cadence: ix.message.cadence,
      args: ix.message.arguments.map(d => ix.arguments[d].asArgument),
      data: {},
      interaction: ix,
      voucher: createSignableVoucher(ix)
    };
  } catch (error) {
    console.error("buildSignable", error);
    throw error;
  }
}
function prepForEncoding(ix) {
  const payerAddress = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)((Array.isArray(ix.payer) ? ix.accounts[ix.payer[0]] : ix.accounts[ix.payer]).addr);
  return {
    cadence: ix.message.cadence,
    refBlock: ix.message.refBlock || null,
    computeLimit: ix.message.computeLimit,
    arguments: ix.message.arguments.map(id => ix.arguments[id].asArgument),
    proposalKey: {
      address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(ix.accounts[ix.proposer].addr),
      keyId: ix.accounts[ix.proposer].keyId,
      sequenceNum: ix.accounts[ix.proposer].sequenceNum
    },
    payer: payerAddress,
    authorizers: ix.authorizations.map(cid => (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(ix.accounts[cid].addr)).reduce((prev, current) => {
      return prev.find(item => item === current) ? prev : [...prev, current];
    }, [])
  };
}

async function resolveValidators(ix) {
  const validators = get(ix, "ix.validators", []);
  return pipe(ix, validators.map(cb => ix => cb(ix, {
    Ok,
    Bad
  })));
}

async function resolveFinalNormalization(ix) {
  for (let key of Object.keys(ix.accounts)) {
    ix.accounts[key].addr = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(ix.accounts[key].addr);
  }
  return ix;
}

async function resolveVoucherIntercept(ix) {
  const fn = get(ix, "ix.voucher-intercept");
  if (isFn$3(fn)) {
    await fn(createSignableVoucher(ix));
  }
  return ix;
}

const DEFAULT_COMPUTE_LIMIT = 100;
async function resolveComputeLimit(ix) {
  if (isTransaction(ix)) {
    ix.message.computeLimit = ix.message.computeLimit || (await _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v.get("fcl.limit"));
    if (!ix.message.computeLimit) {
      _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c.deprecate({
        pkg: "FCL/SDK",
        subject: "The built-in default compute limit (DEFAULT_COMPUTE_LIMIT=10)",
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0009-deprecate-default-compute-limit"
      });
      ix.message.computeLimit = DEFAULT_COMPUTE_LIMIT;
    }
  }
  return ix;
}

const noop = v => v;
const debug = function (key) {
  let fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  return async ix => {
    const accts = ix => ["\nAccounts:", {
      proposer: ix.proposer,
      authorizations: ix.authorizations,
      payer: ix.payer
    }, "\n\nDetails:", ix.accounts].filter(Boolean);
    const log = function () {
      for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
        msg[_key] = arguments[_key];
      }
      console.log(`debug[${key}] ---\n`, ...msg, "\n\n\n---");
    };
    if (await _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v.get(`debug.${key}`)) await fn(ix, log, accts);
    return ix;
  };
};
const resolve = pipe([resolveCadence, debug("cadence", (ix, log) => log(ix.message.cadence)), resolveComputeLimit, debug("compute limit", (ix, log) => log(ix.message.computeLimit)), resolveArguments, debug("arguments", (ix, log) => log(ix.message.arguments, ix.message)), resolveAccounts, debug("accounts", (ix, log, accts) => log(...accts(ix))), /* special */execFetchRef, /* special */execFetchSequenceNumber, resolveSignatures, debug("signatures", (ix, log, accts) => log(...accts(ix))), resolveFinalNormalization, resolveValidators, resolveVoucherIntercept, debug("resolved", (ix, log) => log(ix))]);
async function execFetchRef(ix) {
  if (isTransaction(ix) && ix.message.refBlock == null) {
    const node = await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v)().get("accessNode.api");
    const sendFn = await _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v.first(["sdk.transport", "sdk.send"], _onflow_transport_http__WEBPACK_IMPORTED_MODULE_3__/* .send */ .lW);
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(sendFn, `Required value for sdk.transport is not defined in config. See: ${"https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21"}`);
    ix.message.refBlock = (await sendFn(build([getBlock()]), {
      config: _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v,
      response,
      Buffer: _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW,
      ix: ixModule
    }, {
      node
    }).then(decodeResponse)).id;
  }
  return ix;
}
async function execFetchSequenceNumber(ix) {
  if (isTransaction(ix)) {
    var acct = Object.values(ix.accounts).find(a => a.role.proposer);
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(acct, `Transactions require a proposer`);
    if (acct.sequenceNum == null) {
      const node = await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v)().get("accessNode.api");
      const sendFn = await _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v.first(["sdk.transport", "sdk.send"], _onflow_transport_http__WEBPACK_IMPORTED_MODULE_3__/* .send */ .lW);
      (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(sendFn, `Required value for sdk.transport is not defined in config. See: ${"https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21"}`);
      ix.accounts[acct.tempId].sequenceNum = await sendFn(await build([getAccount(acct.addr)]), {
        config: _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v,
        response,
        Buffer: _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW,
        ix: ixModule
      }, {
        node
      }).then(decodeResponse).then(acct => acct.keys).then(keys => keys.find(key => key.index === acct.keyId)).then(key => key.sequenceNumber);
    }
  }
  return ix;
}

function invariant() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (args.length > 1) {
    const [predicate, message] = args;
    return invariant((ix, _ref) => {
      let {
        Ok,
        Bad
      } = _ref;
      return predicate ? Ok(ix) : Bad(ix, message);
    });
  }
  const [fn] = args;
  return ix => fn(ix, {
    Ok,
    Bad
  });
}

/**
 * @description - Sends arbitrary scripts, transactions, and requests to Flow
 * @param {Array.<Function>} args - An array of functions that take interaction and return interaction
 * @param {object} opts - Optional parameters
 * @returns {Promise<*>} - A promise that resolves to a response
 */
const send = async function () {
  let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const sendFn = await _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v.first(["sdk.transport", "sdk.send"], opts.send || _onflow_transport_http__WEBPACK_IMPORTED_MODULE_3__/* .send */ .lW);
  invariant(sendFn, `Required value for sdk.transport is not defined in config. See: ${"https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21"}`);
  const resolveFn = await _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v.first(["sdk.resolve"], opts.resolve || resolve);
  opts.node = opts.node || (await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v)().get("accessNode.api"));
  if (Array.isArray(args)) args = pipe(interaction(), args);
  return sendFn(await resolveFn(args), {
    config: _onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v,
    response,
    ix: ixModule,
    Buffer: _onflow_rlp__WEBPACK_IMPORTED_MODULE_2__/* .Buffer */ .lW
  }, opts);
};

async function decode(response) {
  const decodersFromConfig = await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v)().where(/^decoder\./);
  const decoders = Object.entries(decodersFromConfig).map(_ref => {
    let [pattern, xform] = _ref;
    pattern = `/${pattern.replace(/^decoder\./, "")}$/`;
    return [pattern, xform];
  });
  return decodeResponse(response, Object.fromEntries(decoders));
}

const findPayloadSigners = voucher => {
  // Payload Signers Are: (authorizers + proposer) - payer
  let payload = new Set(voucher.authorizers);
  payload.add(voucher.proposalKey.address);
  payload.delete(voucher.payer);
  return Array.from(payload).map(_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq);
};
const findEnvelopeSigners = voucher => {
  // Envelope Signers Are: (payer)
  let envelope = new Set([voucher.payer]);
  return Array.from(envelope).map(_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq);
};
class UnableToDetermineMessageEncodingTypeForSignerAddress extends Error {
  constructor(signerAddress) {
    const msg = `
        Encode Message From Signable Error: Unable to determine message encoding for signer addresss: ${signerAddress}. 
        Please ensure the address: ${signerAddress} is intended to sign the given transaction as specified by the transaction signable.
      `.trim();
    super(msg);
    this.name = "Unable To Determine Message Encoding For Signer Addresss";
  }
}
const encodeMessageFromSignable = (signable, signerAddress) => {
  let payloadSigners = findPayloadSigners(signable.voucher);
  let envelopeSigners = findEnvelopeSigners(signable.voucher);
  const isPayloadSigner = payloadSigners.includes((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(signerAddress));
  const isEnvelopeSigner = envelopeSigners.includes((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(signerAddress));
  if (!isPayloadSigner && !isEnvelopeSigner) {
    throw new UnableToDetermineMessageEncodingTypeForSignerAddress(signerAddress);
  }
  const message = {
    cadence: signable.voucher.cadence,
    refBlock: signable.voucher.refBlock,
    computeLimit: signable.voucher.computeLimit,
    arguments: signable.voucher.arguments,
    proposalKey: {
      ...signable.voucher.proposalKey,
      address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(signable.voucher.proposalKey.address)
    },
    payer: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(signable.voucher.payer),
    authorizers: signable.voucher.authorizers.map(_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH),
    payloadSigs: signable.voucher.payloadSigs.map(ps => ({
      ...ps,
      address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .sansPrefix */ .CH)(ps.address)
    }))
  };
  return isPayloadSigner ? encodeTransactionPayload(message) : encodeTransactionEnvelope(message);
};

function validator(cb) {
  return update("ix.validators", validators => Array.isArray(validators) ? validators.push(cb) : [cb]);
}

/**
 * @description - A builder function that returns a partial interaction to a block at a specific height
 * @param {number} height - The height of the block to get
 * @returns {object} - A partial interaction object
 */
function atBlockHeight(height) {
  return pipe([ix => {
    ix.block.height = height;
    return ix;
  }, validator(ix => {
    if (typeof ix.block.isSealed === "boolean") throw new Error("Unable to specify both block height and isSealed.");
    if (ix.block.id) throw new Error("Unable to specify both block height and block id.");
    return ix;
  })]);
}

function atBlockId(id) {
  return pipe([ix => {
    ix.block.id = id;
    return Ok(ix);
  }, validator((ix, _ref) => {
    let {
      Ok,
      Bad
    } = _ref;
    if (isGetAccount(ix)) return Bad(ix, "Unable to specify a block id with a Get Account interaction.");
    if (typeof ix.block.isSealed === "boolean") return Bad(ix, "Unable to specify both block id and isSealed.");
    if (ix.block.height) return Bad(ix, "Unable to specify both block id and block height.");
    return Ok(ix);
  })]);
}

/**
 * @typedef {import("@onflow/typedefs").Account} Account
 */

/**
 * @description  Returns the details of an account from their public address
 * @param {string} address - Address of the account
 * @param {object} [queryOptions] - Query parameters
 * @param {number} [queryOptions.height] - Block height to query
 * @param {string} [queryOptions.id] - Block ID to query
 * @param {object} [opts] - Optional parameters
 * @returns {Promise<Account>} - A promise that resolves to an account response
 */
function account(address) {
  let {
    height,
    id
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 ? arguments[2] : undefined;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(!(id && height), `Method: account -- Cannot pass "id" and "height" simultaneously`);

  // Get account by ID
  if (id) return send([getAccount(address), atBlockId(id)], opts).then(decodeResponse);

  // Get account by height
  if (height) return send([getAccount(address), atBlockHeight(height)], opts).then(decodeResponse);
  return send([getAccount(address)], opts).then(decodeResponse);
}

/**
 * @typedef {import("@onflow/typedefs").Block} Block
 */

/**
 * @description Returns the latest block (optionally sealed or not), by id, or by height
 * @param {object} [queryOptions] - Query parameters
 * @param {boolean} [queryOptions.sealed=false] - Whether to query for a sealed block
 * @param {number} [queryOptions.height] - Block height to query
 * @param {string} [queryOptions.id] - Block ID to query
 * @param {object} [opts] - Optional parameters
 * @returns {Promise<Block>} - A promise that resolves to a block response
 */
function block() {
  let {
    sealed = false,
    id,
    height
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(!(sealed && id || sealed && height), `Method: block -- Cannot pass "sealed" with "id" or "height"`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(!(id && height), `Method: block -- Cannot pass "id" and "height" simultaneously`);

  // Get block by ID
  if (id) return send([getBlock(), atBlockId(id)], opts).then(decodeResponse);

  // Get block by height
  if (height) return send([getBlock(), atBlockHeight(height)], opts).then(decodeResponse);

  // Get latest block
  return send([getBlock(sealed)], opts).then(decodeResponse);
}

function authorizations() {
  let ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return pipe(ax.map(authz => {
    return prepAccount(authz, {
      role: AUTHORIZER
    });
  }));
}
function authorization(addr, signingFunction, keyId, sequenceNum) {
  return {
    addr,
    signingFunction,
    keyId,
    sequenceNum
  };
}

function getEvents(eventType, start, end) {
  if (typeof start !== "undefined" || typeof end !== "undefined") {
    _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c.deprecate({
      pkg: "FCL/SDK",
      subject: "Passing a start and end into getEvents",
      transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0005-deprecate-start-end-get-events-builder"
    });
  }
  return pipe([makeGetEvents, ix => {
    ix.events.eventType = eventType;
    ix.events.start = start;
    ix.events.end = end;
    return Ok(ix);
  }]);
}

/**
 * @description - A builder function that returns all instances of a particular event (by name) within a height range
 * NOTE:
 * - The block range provided must be from the current spork.
 * - The block range provided must be 250 blocks or lower per request.
 * @param {string} eventName - The name of the event to get
 * @param {number} fromBlockHeight - The height of the block to start looking for events (inclusive)
 * @param {number} toBlockHeight - The height of the block to stop looking for events (inclusive)
 * @returns {object} - An interaction object
 */
function getEventsAtBlockHeightRange(eventName, fromBlockHeight, toBlockHeight) {
  return pipe([makeGetEvents, ix => {
    ix.events.eventType = eventName;
    ix.events.start = fromBlockHeight;
    ix.events.end = toBlockHeight;
    return Ok(ix);
  }]);
}

/**
 * @description - A builder function that returns all instances of a particular event (by name) within a set of blocks, specified by block ids
 * NOTE:
 * - The block range provided must be from the current spork.
 * @param {string} eventName - The name of the event to get
 * @param {number[]} blockIds - The ids of the blocks to look for events
 * @returns {object} - An interaction object
 */
function getEventsAtBlockIds(eventName) {
  let blockIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return pipe([makeGetEvents, ix => {
    ix.events.eventType = eventName;
    ix.events.blockIds = blockIds;
    return Ok(ix);
  }]);
}

/**
 * @description - A builder function that returns the interaction to get a block header
 * @param {boolean} [isSealed] - Whether or not the block should be sealed
 * @returns {object} - An interaction object
 */
function getBlockHeader() {
  let isSealed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return pipe([makeGetBlockHeader, ix => {
    ix.block.isSealed = isSealed;
    return Ok(ix);
  }]);
}

/**
 * @description - A builder function that returns all a collection containing a list of transaction ids by its collection id
 * NOTE:
 * - The block range provided must be from the current spork. All events emitted during past sporks is current unavailable.
 * @param {string} [id] - The id of the collection to get
 * @returns {object} - An interaction object
 */
function getCollection() {
  let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return pipe([makeGetCollection, ix => {
    ix.collection.id = id;
    return ix;
  }]);
}

/**
 * @description - A builder function that returns the status of transaction
 * NOTE: The transactionID provided must be from the current spork.
 * @param {string} transactionId - The id of the transaction to get status
 * @returns {object} - An interaction object
 */
function getTransactionStatus(transactionId) {
  return pipe([makeGetTransactionStatus, ix => {
    ix.transaction.id = transactionId;
    return Ok(ix);
  }]);
}

/**
 * @description - A builder function that returns a transaction
 * NOTE: The transactionID provided must be from the current spork.
 * @param {string} transactionId - The id of the transaction to get
 * @returns {object} - An interaction object
 */
function getTransaction(transactionId) {
  return pipe([makeGetTransaction, ix => {
    ix.transaction.id = transactionId;
    return Ok(ix);
  }]);
}

function getNetworkParameters() {
  return pipe([makeGetNetworkParameters, ix => {
    return Ok(ix);
  }]);
}

function limit(computeLimit) {
  return ix => {
    ix.message.computeLimit = computeLimit;
    return ix;
  };
}

/**
 * @description - A utility builder to be used with other builders to pass in arguments with a value and supported type
 * @param {Array.<*>} ax - An array of arguments
 * @returns {object} - An interaction object
 */
function args() {
  let ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return pipe(ax.map(makeArgument));
}

/**
 * @description - A utility builder to be used with fcl.args[...] to create FCL supported arguments for interactions
 * @param {any} value - The value of the argument
 * @param {Function} xform - A function to transform the value
 * @returns {object} - An argument object
 */
function arg(value, xform) {
  return {
    value,
    xform
  };
}

async function proposer(authz) {
  return prepAccount(authz, {
    role: PROPOSER
  });
}

async function payer(authz) {
  return prepAccount(authz, {
    role: PAYER
  });
}

function ping() {
  return makePing;
}

function ref(refBlock) {
  return pipe([ix => {
    ix.message.refBlock = refBlock;
    return Ok(ix);
  }]);
}

function script() {
  return pipe([makeScript, put("ix.cadence", (0,_onflow_util_template__WEBPACK_IMPORTED_MODULE_5__/* .template */ .X)(...arguments))]);
}

const DEFAULT_SCRIPT_ACCOUNTS = [];
const DEFUALT_REF = null;

/**
 * @description - A template builder to use a Cadence transaction for an interaction
 * @param {...*} args - The arguments to pass
 * @returns {object} - An interaction object
 */
function transaction() {
  return pipe([makeTransaction, put("ix.cadence", (0,_onflow_util_template__WEBPACK_IMPORTED_MODULE_5__/* .template */ .X)(...arguments)), ix => {
    ix.message.refBlock = ix.message.refBlock || DEFUALT_REF;
    ix.authorizations = ix.authorizations || DEFAULT_SCRIPT_ACCOUNTS;
    return Ok(ix);
  }]);
}

function voucherIntercept(fn) {
  return put("ix.voucher-intercept", fn);
}

const resolveProposerSequenceNumber = _ref => {
  let {
    node
  } = _ref;
  return async ix => {
    if (!isTransaction(ix)) return Ok(ix);
    if (ix.accounts[ix.proposer].sequenceNum) return Ok(ix);
    const sendFn = await config.first(["sdk.transport", "sdk.send"], send$1);
    invariant$1(sendFn, `Required value for sdk.transport is not defined in config. See: ${"https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21"}`);
    const response$1 = await sendFn(await build([getAccount(ix.accounts[ix.proposer].addr)]), {
      config,
      response: response,
      Buffer,
      ix: ixModule
    }, {
      node
    });
    const decoded = await decodeResponse(response$1);
    ix.accounts[ix.proposer].sequenceNum = decoded.keys[ix.accounts[ix.proposer].keyId].sequenceNumber;
    return Ok(ix);
  };
};

async function getRefId(opts) {
  const node = await config().get("accessNode.api");
  const sendFn = await config.first(["sdk.transport", "sdk.send"], send$1);
  invariant$1(sendFn, `Required value for sdk.transport is not defined in config. See: ${"https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21"}`);
  var ix;
  ix = await pipe(interaction(), [getBlock()]);
  ix = await sendFn(ix, {
    config,
    response,
    Buffer,
    ix: ixModule
  }, {
    node
  });
  ix = await decodeResponse(ix);
  return ix.id;
}
function resolveRefBlockId(opts) {
  return async ix => {
    if (!isTransaction(ix)) return Ok(ix);
    if (ix.message.refBlock) return Ok(ix);
    ix.message.refBlock = await getRefId();
    return Ok(ix);
  };
}

function mockAccountResponse(ix) {
  let numberOfKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(ix.account, "mockAccountResponse(ix) -- ix.account is missing", ix);
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .k)(ix.account.addr, "mockAccountResponse(ix) -- ix.account.addr is missing", ix);
  const address = ix.account.addr;
  return {
    account: {
      addr: address,
      keys: Array.from({
        length: numberOfKeys
      }, (_, i) => ({
        index: i,
        sequenceNumber: 42
      }))
    }
  };
}
function mockGetBlockResponse(ix) {
  return {
    tag: "GET_BLOCK",
    block: {
      id: "32"
    }
  };
}
const identity = v => v;
function mockSend() {
  let fallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
  return async function execSend(ix) {
    ix = await ix;
    switch (true) {
      case isGetAccount(ix):
        return mockAccountResponse(ix);
      case isGetBlock(ix):
        return mockGetBlockResponse();
      default:
        return fallback(ix);
    }
  };
}

const idof = acct => `${(0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_7__/* .withPrefix */ .dq)(acct.addr)}-${acct.keyId}`;
function sig(opts) {
  return ["SIGNATURE", opts.addr, opts.keyId].join(".");
}
function authzFn() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (account) {
    const acct = {
      ...account,
      ...opts,
      signingFunction: opts.signingFunction || account.signingFunction || fallbackSigningFunction
    };
    return acct;
    function fallbackSigningFunction(signable) {
      return {
        addr: acct.addr,
        keyId: acct.keyId,
        signature: sig(acct)
      };
    }
  };
}
function authzResolve() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (account) {
    const {
      tempId,
      ...rest
    } = opts;
    return {
      ...account,
      tempId: tempId || "WITH_RESOLVE",
      resolve: authzFn(rest)
    };
  };
}
const ROLE = {
  proposer: false,
  authorizer: false,
  payer: false
};
function authzResolveMany() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (account) {
    const tempId = opts.tempId || "AUTHZ_RESOLVE_MANY";
    return {
      ...account,
      tempId,
      resolve: () => [opts.proposer && authzFn(opts.proposer)({
        role: {
          ...ROLE,
          proposer: true
        }
      }), ...opts.authorizations.map(authzFn).map(d => d({
        role: {
          ...ROLE,
          authorizer: true
        }
      })), opts.payer && authzFn(opts.payer)({
        role: {
          ...ROLE,
          payer: true
        }
      })].filter(Boolean)
    };
  };
}

const run = function () {
  let fns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return build([ref("123"), ...fns]).then(resolve);
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mockSend: mockSend,
  authzFn: authzFn,
  authzResolve: authzResolve,
  authzResolveMany: authzResolveMany,
  sig: sig,
  idof: idof,
  run: run
});

const VERSION = "1.2.0" ;

// Deprecated
const params = params => _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c.deprecate({
  pkg: "FCL/SDK",
  message: `The params builder has been removed from the Flow JS-SDK/FCL.`,
  transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params",
  level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .LEVELS */ .z.error
});
const param = params => _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c.deprecate({
  pkg: "FCL/SDK",
  message: `The param builder has been removed from the Flow JS-SDK/FCL.`,
  transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params",
  level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_0__/* .LEVELS */ .z.error
});




/***/ })

}]);
//# sourceMappingURL=npm-ns.blocto.flow-sdk.js.map