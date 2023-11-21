"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5597],{

/***/ 64724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lW: () => (/* binding */ send)
/* harmony export */ });
/* unused harmony exports sendExecuteScript, sendGetAccount, sendGetBlock, sendGetBlockHeader, sendGetCollection, sendGetEvents, sendGetNetworkParameters, sendGetTransaction, sendGetTransactionStatus, sendPing, sendTransaction */
/* harmony import */ var _onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93644);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _onflow_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21874);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34081);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _onflow_util_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28114);






const AbortController = globalThis.AbortController || __webpack_require__(235);
class HTTPRequestError extends Error {
  constructor(_ref) {
    let {
      error,
      hostname,
      path,
      method,
      requestBody,
      responseBody,
      responseStatusText,
      statusCode
    } = _ref;
    const msg = `
      HTTP Request Error: An error occurred when interacting with the Access API.
      ${error ? `error=${error}` : ""}
      ${hostname ? `hostname=${hostname}` : ""}
      ${path ? `path=${path}` : ""}
      ${method ? `method=${method}` : ""}
      ${requestBody ? `requestBody=${requestBody}` : ""}
      ${responseBody ? `responseBody=${responseBody}` : ""}
      ${responseStatusText ? `responseStatusText=${responseStatusText}` : ""}
      ${statusCode ? `statusCode=${statusCode}` : ""}
    `;
    super(msg);
    this.name = "HTTP Request Error";
    this.statusCode = statusCode;
    this.errorMessage = error;
  }
}

/**
 * Creates an HTTP Request to be sent to a REST Access API via Fetch API.
 *
 * @param {object} options - Options for the HTTP Request
 * @param {String} options.hostname - Access API Hostname
 * @param {String} options.path - Path to the resource on the Access API
 * @param {String} options.method - HTTP Method
 * @param {object} options.body - HTTP Request Body
 * @param {object} [options.headers] - HTTP Request Headers
 *
 * @returns JSON object response from Access API.
 */
async function httpRequest(_ref2) {
  let {
    hostname,
    path,
    method,
    body,
    headers,
    retryLimit = 5,
    retryIntervalMs = 1000,
    timeoutLimit = 30000
  } = _ref2;
  const bodyJSON = body ? JSON.stringify(body) : null;
  function makeRequest() {
    const controller = new AbortController();
    const fetchTimeout = setTimeout(() => {
      controller.abort();
    }, timeoutLimit);
    return cross_fetch__WEBPACK_IMPORTED_MODULE_2___default()(`${hostname}${path}`, {
      method: method,
      body: bodyJSON,
      headers,
      signal: controller.signal
    }).then(async res => {
      if (res.ok) {
        return res.json();
      }
      const responseText = res.body ? await res.text() : null;
      const response = safeParseJSON(responseText);
      throw new HTTPRequestError({
        error: response?.message,
        hostname,
        path,
        method,
        requestBody: bodyJSON,
        responseBody: responseText,
        responseStatusText: res.statusText,
        statusCode: res.status
      });
    }).catch(async e => {
      if (e instanceof HTTPRequestError) {
        throw e;
      }
      if (e.name === "AbortError") {
        throw e;
      }

      // Show AN error for all network errors
      await _onflow_util_logger__WEBPACK_IMPORTED_MODULE_1__/* .log */ .c({
        title: "Access Node Error",
        message: `The provided access node ${hostname} does not appear to be a valid REST/HTTP access node.
Please verify that you are not unintentionally using a GRPC access node.
See more here: https://docs.onflow.org/fcl/reference/sdk-guidelines/#connect`,
        level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_1__/* .LEVELS */ .z.error
      });
      throw new HTTPRequestError({
        error: e?.message,
        hostname,
        path,
        method,
        requestBody: bodyJSON
      });
    }).finally(() => {
      clearTimeout(fetchTimeout);
    });
  }
  async function requestLoop() {
    let retryAttempt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    try {
      const resp = await makeRequest();
      return resp;
    } catch (error) {
      const retryStatusCodes = [408, 429, 500, 502, 503, 504];
      if (error.name === "AbortError" || retryStatusCodes.includes(error.statusCode)) {
        return await new Promise((resolve, reject) => {
          if (retryAttempt < retryLimit) {
            console.warn(`Access node unavailable, retrying in ${retryIntervalMs} ms...`);
            setTimeout(() => {
              resolve(requestLoop(retryAttempt + 1));
            }, retryIntervalMs);
          } else {
            reject(error);
          }
        });
      } else {
        throw error;
      }
    }
  }

  // Keep retrying request until server available or max attempts exceeded
  return await requestLoop();
}
function safeParseJSON(data) {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

async function sendExecuteScriptAtBlockIDRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/scripts?block_id=${ix.block.id}`,
    method: "POST",
    body: {
      script: context.Buffer.from(ix.message.cadence).toString("base64"),
      arguments: ix.message.arguments.map(arg => context.Buffer.from(JSON.stringify(ix.arguments[arg].asArgument)).toString("base64"))
    }
  });
  return constructResponse$4(ix, context, res);
}
async function sendExecuteScriptAtBlockHeightRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/scripts?block_height=${ix.block.height}`,
    method: "POST",
    body: {
      script: context.Buffer.from(ix.message.cadence).toString("base64"),
      arguments: ix.message.arguments.map(arg => context.Buffer.from(JSON.stringify(ix.arguments[arg].asArgument)).toString("base64"))
    }
  });
  return constructResponse$4(ix, context, res);
}
async function sendExecuteScriptAtLatestBlockRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/scripts?block_height=sealed`,
    method: "POST",
    body: {
      script: context.Buffer.from(ix.message.cadence).toString("base64"),
      arguments: ix.message.arguments.map(arg => context.Buffer.from(JSON.stringify(ix.arguments[arg].asArgument)).toString("base64"))
    }
  });
  return constructResponse$4(ix, context, res);
}
function constructResponse$4(ix, context, res) {
  let ret = context.response();
  ret.tag = ix.tag;
  ret.encodedData = JSON.parse(context.Buffer.from(res, "base64").toString());
  return ret;
}
async function sendExecuteScript(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Execute Script Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Execute Script Error: context.response must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.Buffer, `SDK Send Execute Script Error: context.Buffer must be defined.`);
  ix = await ix;
  if (ix.block.id) {
    return await sendExecuteScriptAtBlockIDRequest(ix, context, opts);
  } else if (ix.block.height) {
    return await sendExecuteScriptAtBlockHeightRequest(ix, context, opts);
  } else {
    return await sendExecuteScriptAtLatestBlockRequest(ix, context, opts);
  }
}

const HashAlgorithmIDs = {
  SHA2_256: 1,
  SHA2_384: 2,
  SHA3_256: 3,
  SHA3_384: 4,
  KMAC128_BLS_BLS12_381: 5
};
const SignatureAlgorithmIDs = {
  ECDSA_P256: 1,
  ECDSA_secp256k1: 2,
  BLS_BLS12_381: 3
};
async function sendGetAccountAtBlockHeightRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/accounts/${ix.account.addr}?block_height=${ix.block.height}&expand=contracts,keys`,
    method: "GET",
    body: null
  });
  return constructResponse$3(ix, context, res);
}
async function sendGetAccountAtLatestBlockRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/accounts/${ix.account.addr}?block_height=sealed&expand=contracts,keys`,
    method: "GET",
    body: null
  });
  return constructResponse$3(ix, context, res);
}
function constructResponse$3(ix, context, res) {
  let ret = context.response();
  ret.tag = ix.tag;
  const unwrapContracts = contracts => {
    const c = {};
    if (!contracts) return c;
    for (let key of Object.keys(contracts)) {
      c[key] = context.Buffer.from(contracts[key], "base64").toString();
    }
    return c;
  };
  ret.account = {
    address: res.address,
    balance: Number(res.balance),
    code: "",
    contracts: unwrapContracts(res.contracts),
    keys: res.keys?.map(key => ({
      index: Number(key.index),
      publicKey: key.public_key.replace(/^0x/, ""),
      signAlgo: SignatureAlgorithmIDs[key.signing_algorithm],
      signAlgoString: key.signing_algorithm,
      hashAlgo: HashAlgorithmIDs[key.hashing_algorithm],
      hashAlgoString: key.hashing_algorithm,
      sequenceNumber: Number(key.sequence_number),
      weight: Number(key.weight),
      revoked: key.revoked
    })) ?? []
  };
  return ret;
}
async function sendGetAccount(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Account Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Account Error: context.response must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.Buffer, `SDK Send Get Account Error: context.Buffer must be defined.`);
  ix = await ix;
  if (ix.block.height !== null) {
    return await sendGetAccountAtBlockHeightRequest(ix, context, opts);
  } else {
    return await sendGetAccountAtLatestBlockRequest(ix, context, opts);
  }
}

async function sendGetBlockHeaderByIDRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/blocks/${ix.block.id}`,
    method: "GET",
    body: null
  });
  return constructResponse$2(ix, context, res);
}
async function sendGetBlockHeaderByHeightRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/blocks?height=${ix.block.height}`,
    method: "GET",
    body: null
  });
  return constructResponse$2(ix, context, res);
}
async function sendGetLatestBlockHeaderRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const height = ix.block?.isSealed ? "sealed" : "final";
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/blocks?height=${height}`,
    method: "GET",
    body: null
  });
  return constructResponse$2(ix, context, res);
}
function constructResponse$2(ix, context, res) {
  const block = res.length ? res[0] : null;
  const ret = context.response();
  ret.tag = ix.tag;
  ret.blockHeader = {
    id: block.header.id,
    parentId: block.header.parent_id,
    height: Number(block.header.height),
    timestamp: block.header.timestamp
  };
  return ret;
}
async function sendGetBlockHeader(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Block Header Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Block Header Error: context.response must be defined.`);
  ix = await ix;
  const interactionHasBlockID = ix.block.id !== null;
  const interactionHasBlockHeight = ix.block.height !== null;
  if (interactionHasBlockID) {
    return await sendGetBlockHeaderByIDRequest(ix, context, opts);
  } else if (interactionHasBlockHeight) {
    return await sendGetBlockHeaderByHeightRequest(ix, context, opts);
  } else {
    return await sendGetLatestBlockHeaderRequest(ix, context, opts);
  }
}

async function sendGetBlockByIDRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/blocks/${ix.block.id}?expand=payload`,
    method: "GET",
    body: null
  });
  return constructResponse$1(ix, context, res);
}
async function sendGetBlockByHeightRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/blocks?height=${ix.block.height}&expand=payload`,
    method: "GET",
    body: null
  });
  return constructResponse$1(ix, context, res);
}
async function sendGetBlockRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const height = ix.block?.isSealed ? "sealed" : "final";
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/blocks?height=${height}&expand=payload`,
    method: "GET",
    body: null
  });
  return constructResponse$1(ix, context, res);
}
function constructResponse$1(ix, context, res) {
  const block = res.length ? res[0] : null;
  const ret = context.response();
  ret.tag = ix.tag;
  ret.block = {
    id: block.header.id,
    parentId: block.header.parent_id,
    height: Number(block.header.height),
    timestamp: block.header.timestamp,
    collectionGuarantees: block.payload.collection_guarantees.map(collectionGuarantee => ({
      collectionId: collectionGuarantee.collection_id,
      signerIds: collectionGuarantee.signer_ids
    })),
    blockSeals: block.payload.block_seals.map(blockSeal => ({
      blockId: blockSeal.block_id,
      executionReceiptId: blockSeal.result_id
    }))
  };
  return ret;
}
async function sendGetBlock(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Block Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Block Error: context.response must be defined.`);
  ix = await ix;
  const interactionHasBlockID = ix.block.id !== null;
  const interactionHasBlockHeight = ix.block.height !== null;
  if (interactionHasBlockID) {
    return await sendGetBlockByIDRequest(ix, context, opts);
  } else if (interactionHasBlockHeight) {
    return await sendGetBlockByHeightRequest(ix, context, opts);
  } else {
    return await sendGetBlockRequest(ix, context, opts);
  }
}

async function sendGetCollection(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Collection Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Collection Error: context.response must be defined.`);
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/collections/${ix.collection.id}?expand=transactions`,
    method: "GET",
    body: null
  });
  const ret = context.response();
  ret.tag = ix.tag;
  ret.collection = {
    id: res.id,
    transactionIds: res.transactions.map(transaction => transaction.id)
  };
  return ret;
}

async function sendGetEventsForHeightRangeRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/events?type=${ix.events.eventType}&start_height=${ix.events.start}&end_height=${ix.events.end}`,
    method: "GET",
    body: null
  });
  return constructResponse(ix, context, res);
}
async function sendGetEventsForBlockIDsRequest(ix, context, opts) {
  const httpRequest$1 = opts.httpRequest || httpRequest;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/events?type=${ix.events.eventType}&block_ids=${ix.events.blockIds.join(",")}`,
    method: "GET",
    body: null
  });
  return constructResponse(ix, context, res);
}
function constructResponse(ix, context, res) {
  let ret = context.response();
  ret.tag = ix.tag;
  ret.events = [];
  res.forEach(block => block.events ? block.events.forEach(event => ret.events.push({
    blockId: block.block_id,
    blockHeight: Number(block.block_height),
    blockTimestamp: block.block_timestamp,
    type: event.type,
    transactionId: event.transaction_id,
    transactionIndex: Number(event.transaction_index),
    eventIndex: Number(event.event_index),
    payload: JSON.parse(context.Buffer.from(event.payload, "base64").toString())
  })) : null);
  return ret;
}
async function sendGetEvents(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Events Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Events Error: context.response must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.Buffer, `SDK Send Get Events Error: context.Buffer must be defined.`);
  ix = await ix;
  const interactionContainsBlockHeightRange = ix.events.start !== null;
  const interactionContainsBlockIDsList = Array.isArray(ix.events.blockIds) && ix.events.blockIds.length > 0;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(interactionContainsBlockHeightRange || interactionContainsBlockIDsList, "SendGetEventsError: Unable to determine which get events request to send. Either a block height range, or block IDs must be specified.");
  if (interactionContainsBlockHeightRange) {
    return await sendGetEventsForHeightRangeRequest(ix, context, opts);
  } else {
    return await sendGetEventsForBlockIDsRequest(ix, context, opts);
  }
}

async function sendGetTransaction(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Transaction Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Transaction Error: context.response must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.Buffer, `SDK Send Get Transaction Error: context.Buffer must be defined.`);
  const httpRequest$1 = opts.httpRequest || httpRequest;
  ix = await ix;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/transactions/${ix.transaction.id}`,
    method: "GET",
    body: null
  });
  const unwrapKey = key => ({
    address: key.address,
    keyId: Number(key.key_id),
    sequenceNumber: Number(key.sequence_number)
  });
  const unwrapSignature = sig => ({
    address: sig.address,
    keyId: Number(sig.key_index),
    signature: sig.signature
  });
  const unwrapArg = arg => JSON.parse(context.Buffer.from(arg, "base64").toString());
  let ret = context.response();
  ret.tag = ix.tag;
  ret.transaction = {
    script: context.Buffer.from(res.script, "base64").toString(),
    args: [...res.arguments.map(unwrapArg)],
    referenceBlockId: res.reference_block_id,
    gasLimit: Number(res.gas_limit),
    payer: res.payer,
    proposalKey: res.proposal_key ? unwrapKey(res.proposal_key) : res.proposal_key,
    authorizers: res.authorizers,
    payloadSignatures: [...res.payload_signatures.map(unwrapSignature)],
    envelopeSignatures: [...res.envelope_signatures.map(unwrapSignature)]
  };
  return ret;
}

const STATUS_MAP = {
  UNKNOWN: 0,
  PENDING: 1,
  FINALIZED: 2,
  EXECUTED: 3,
  SEALED: 4,
  EXPIRED: 5
};
async function sendGetTransactionStatus(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Transaction Status Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Transaction Status Error: context.response must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.Buffer, `SDK Send Get Transaction Status Error: context.Buffer must be defined.`);
  const httpRequest$1 = opts.httpRequest || httpRequest;
  ix = await ix;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/transaction_results/${ix.transaction.id}`,
    method: "GET",
    body: null
  });
  let ret = context.response();
  ret.tag = ix.tag;
  ret.transactionStatus = {
    blockId: res.block_id,
    status: STATUS_MAP[res.status.toUpperCase()] || "",
    statusString: res.status.toUpperCase(),
    statusCode: res.status_code,
    errorMessage: res.error_message,
    events: res.events.map(event => ({
      type: event.type,
      transactionId: event.transaction_id,
      transactionIndex: Number(event.transaction_index),
      eventIndex: Number(event.event_index),
      payload: JSON.parse(context.Buffer.from(event.payload, "base64").toString())
    }))
  };
  return ret;
}

async function sendPing(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Ping Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Ping Error: context.response must be defined.`);
  const httpRequest$1 = opts.httpRequest || httpRequest;
  await httpRequest$1({
    hostname: opts.node,
    path: "/v1/blocks?height=sealed",
    method: "GET",
    body: null
  });
  let ret = context.response();
  ret.tag = ix.tag;
  return ret;
}

const idof = acct => `${withPrefix(acct.addr)}-${acct.keyId}`;
async function sendTransaction(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Transaction Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Transaction Error: context.response must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.Buffer, `SDK Send Transaction Error: context.Buffer must be defined.`);
  const httpRequest$1 = opts.httpRequest || httpRequest;
  ix = await ix;

  // Apply Non Payer Signatures to Payload Signatures
  let payloadSignatures = [];
  for (let acct of Object.values(ix.accounts)) {
    try {
      if (!acct.role.payer && acct.signature != null) {
        payloadSignatures.push({
          address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_4__/* .sansPrefix */ .CH)(acct.addr),
          key_index: String(acct.keyId),
          signature: context.Buffer.from(acct.signature, "hex").toString("base64")
        });
      }
    } catch (error) {
      console.error("SDK HTTP Send Error: Trouble applying payload signature", {
        acct,
        ix
      });
      throw error;
    }
  }

  // Apply Payer Signatures to Envelope Signatures
  let envelopeSignatures = {};
  for (let acct of Object.values(ix.accounts)) {
    try {
      if (acct.role.payer && acct.signature != null) {
        let id = acct.tempId || idof(acct);
        envelopeSignatures[id] = envelopeSignatures[id] || {
          address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_4__/* .sansPrefix */ .CH)(acct.addr),
          key_index: String(acct.keyId),
          signature: context.Buffer.from(acct.signature, "hex").toString("base64")
        };
      }
    } catch (error) {
      console.error("SDK HTTP Send Error: Trouble applying envelope signature", {
        acct,
        ix
      });
      throw error;
    }
  }
  envelopeSignatures = Object.values(envelopeSignatures);
  var t1 = Date.now();
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/transactions`,
    method: "POST",
    body: {
      script: context.Buffer.from(ix.message.cadence).toString("base64"),
      arguments: [...ix.message.arguments.map(arg => context.Buffer.from(JSON.stringify(ix.arguments[arg].asArgument)).toString("base64"))],
      reference_block_id: ix.message.refBlock ? ix.message.refBlock : null,
      gas_limit: String(ix.message.computeLimit),
      payer: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_4__/* .sansPrefix */ .CH)(ix.accounts[Array.isArray(ix.payer) ? ix.payer[0] : ix.payer].addr),
      proposal_key: {
        address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_4__/* .sansPrefix */ .CH)(ix.accounts[ix.proposer].addr),
        key_index: String(ix.accounts[ix.proposer].keyId),
        sequence_number: String(ix.accounts[ix.proposer].sequenceNum)
      },
      authorizers: ix.authorizations.map(tempId => ix.accounts[tempId].addr).reduce((prev, current) => {
        return prev.find(item => item === current) ? prev : [...prev, current];
      }, []).map(_onflow_util_address__WEBPACK_IMPORTED_MODULE_4__/* .sansPrefix */ .CH),
      payload_signatures: payloadSignatures,
      envelope_signatures: envelopeSignatures
    }
  });
  var t2 = Date.now();
  let ret = context.response();
  ret.tag = ix.tag;
  ret.transactionId = res.id;
  if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") {
    window.dispatchEvent(new CustomEvent("FLOW::TX", {
      detail: {
        txId: ret.transactionId,
        delta: t2 - t1
      }
    }));
  }
  return ret;
}

async function sendGetNetworkParameters(ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Get Network Parameters Error: opts.node must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.response, `SDK Send Get Network Parameters Error: context.response must be defined.`);
  const httpRequest$1 = opts.httpRequest || httpRequest;
  ix = await ix;
  const res = await httpRequest$1({
    hostname: opts.node,
    path: `/v1/network/parameters`,
    method: "GET",
    body: null
  });
  let ret = context.response();
  ret.tag = ix.tag;
  ret.networkParameters = {
    chainId: res.chain_id
  };
  return ret;
}

const send = async function (ix) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(opts.node, `SDK Send Error: Either opts.node or "accessNode.api" in config must be defined.`);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(context.ix, `SDK Send Error: context.ix must be defined.`);
  ix = await ix;

  // prettier-ignore
  switch (true) {
    case context.ix.isTransaction(ix):
      return opts.sendTransaction ? opts.sendTransaction(ix, context, opts) : sendTransaction(ix, context, opts);
    case context.ix.isGetTransactionStatus(ix):
      return opts.sendGetTransactionStatus ? opts.sendGetTransactionStatus(ix, context, opts) : sendGetTransactionStatus(ix, context, opts);
    case context.ix.isGetTransaction(ix):
      return opts.sendGetTransaction ? opts.sendGetTransaction(ix, context, opts) : sendGetTransaction(ix, context, opts);
    case context.ix.isScript(ix):
      return opts.sendExecuteScript ? opts.sendExecuteScript(ix, context, opts) : sendExecuteScript(ix, context, opts);
    case context.ix.isGetAccount(ix):
      return opts.sendGetAccount ? opts.sendGetAccount(ix, context, opts) : sendGetAccount(ix, context, opts);
    case context.ix.isGetEvents(ix):
      return opts.sendGetEvents ? opts.sendGetEvents(ix, context, opts) : sendGetEvents(ix, context, opts);
    case context.ix.isGetBlock(ix):
      return opts.sendGetBlock ? opts.sendGetBlock(ix, context, opts) : sendGetBlock(ix, context, opts);
    case context.ix.isGetBlockHeader(ix):
      return opts.sendGetBlockHeader ? opts.sendGetBlockHeader(ix, context, opts) : sendGetBlockHeader(ix, context, opts);
    case context.ix.isGetCollection(ix):
      return opts.sendGetCollection ? opts.sendGetCollection(ix, context, opts) : sendGetCollection(ix, context, opts);
    case context.ix.isPing(ix):
      return opts.sendPing ? opts.sendPing(ix, context, opts) : sendPing(ix, context, opts);
    case context.ix.isGetNetworkParameters(ix):
      return opts.sendGetNetworkParameters ? opts.sendGetNetworkParameters(ix, context, opts) : sendGetNetworkParameters(ix, context, opts);
    default:
      return ix;
  }
};




/***/ })

}]);
//# sourceMappingURL=npm-ns.onflow.transport-http.js.map