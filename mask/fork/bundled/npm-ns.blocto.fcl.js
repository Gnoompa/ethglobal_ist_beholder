"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9239],{

/***/ 11513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUtils: () => (/* binding */ index$1),
/* harmony export */   InteractionTemplateUtils: () => (/* binding */ index),
/* harmony export */   TestUtils: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.kW),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   WalletUtils: () => (/* binding */ index$2),
/* harmony export */   account: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.JT),
/* harmony export */   arg: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.R9),
/* harmony export */   args: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.WC),
/* harmony export */   atBlockHeight: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.o9),
/* harmony export */   atBlockId: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.$x),
/* harmony export */   authenticate: () => (/* binding */ authenticate),
/* harmony export */   authorization: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.jL),
/* harmony export */   authorizations: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.KX),
/* harmony export */   authz: () => (/* binding */ authz),
/* harmony export */   block: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Ge),
/* harmony export */   build: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.J_),
/* harmony export */   cadence: () => (/* reexport safe */ _onflow_util_template__WEBPACK_IMPORTED_MODULE_10__.X),
/* harmony export */   cdc: () => (/* reexport safe */ _onflow_util_template__WEBPACK_IMPORTED_MODULE_10__.X),
/* harmony export */   config: () => (/* reexport safe */ _onflow_config__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   createSignableVoucher: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.c0),
/* harmony export */   currentUser: () => (/* binding */ currentUser),
/* harmony export */   decode: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Jx),
/* harmony export */   discovery: () => (/* binding */ discovery),
/* harmony export */   display: () => (/* reexport safe */ _onflow_util_address__WEBPACK_IMPORTED_MODULE_5__.jf),
/* harmony export */   events: () => (/* binding */ events),
/* harmony export */   getAccount: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.D0),
/* harmony export */   getBlock: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Qg),
/* harmony export */   getBlockHeader: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Nx),
/* harmony export */   getChainId: () => (/* binding */ getChainId),
/* harmony export */   getCollection: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__._N),
/* harmony export */   getEvents: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.vw),
/* harmony export */   getEventsAtBlockHeightRange: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.oL),
/* harmony export */   getEventsAtBlockIds: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.aU),
/* harmony export */   getNetworkParameters: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Nj),
/* harmony export */   getTransaction: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.fo),
/* harmony export */   getTransactionStatus: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Lv),
/* harmony export */   invariant: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.kG),
/* harmony export */   isBad: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Pe),
/* harmony export */   isOk: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.IY),
/* harmony export */   limit: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.b9),
/* harmony export */   logIn: () => (/* binding */ logIn),
/* harmony export */   mutate: () => (/* binding */ mutate),
/* harmony export */   param: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.wu),
/* harmony export */   params: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   payer: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.$C),
/* harmony export */   ping: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.qE),
/* harmony export */   pipe: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.zG),
/* harmony export */   pluginRegistry: () => (/* binding */ pluginRegistry),
/* harmony export */   proposer: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.iB),
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   reauthenticate: () => (/* binding */ reauthenticate),
/* harmony export */   ref: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.iH),
/* harmony export */   sansPrefix: () => (/* reexport safe */ _onflow_util_address__WEBPACK_IMPORTED_MODULE_5__.CH),
/* harmony export */   script: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__._v),
/* harmony export */   send: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Jd),
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   t: () => (/* binding */ t),
/* harmony export */   transaction: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.PS),
/* harmony export */   tx: () => (/* binding */ transaction),
/* harmony export */   unauthenticate: () => (/* binding */ unauthenticate),
/* harmony export */   validator: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.sC),
/* harmony export */   verifyUserSignatures: () => (/* binding */ verifyUserSignatures),
/* harmony export */   voucherIntercept: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.Hv),
/* harmony export */   voucherToTxId: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.fI),
/* harmony export */   why: () => (/* reexport safe */ _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__.zq),
/* harmony export */   withPrefix: () => (/* reexport safe */ _onflow_util_address__WEBPACK_IMPORTED_MODULE_5__.dq)
/* harmony export */ });
/* harmony import */ var _onflow_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92316);
/* harmony import */ var _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48823);
/* harmony import */ var _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21874);
/* harmony import */ var _onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93644);
/* harmony import */ var _onflow_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56993);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34081);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _onflow_util_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28114);
/* harmony import */ var _onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48083);
/* harmony import */ var _onflow_rlp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77346);
/* harmony import */ var _onflow_util_uid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17957);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7661);
/* harmony import */ var _onflow_util_template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14933);


















async function getChainIdFromAccessNode() {
  const response = await _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .send */ .Jd([_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .getNetworkParameters */ .Nj()]).then(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx);
  return response.chainId;
}

/**
 * Sets the default chain id to the chain id of the access node
 *
 * @returns {string} The chain id of the access node
 *
 * @example
 * // returns "testnet"
 * setChainIdDefault()
 */
async function setChainIdDefault() {
  const network = await getChainIdFromAccessNode();
  _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.put("flow.network.default", network);
  return network;
}

/**
 * @description
 * Gets the chain ID if its set, otherwise gets the chain ID from the access node
 *
 * @returns {string} The chain ID of the access node
 * @throws {Error} If the chain ID is not found
 *
 * @example
 * // returns "testnet"
 * getChainId()
 */
async function getChainId() {
  let network = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("flow.network.default");
  if (!network) {
    network = await setChainIdDefault();
    if (!network) {
      network = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("flow.network");
      if (network) {
        _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c.deprecate({
          pkg: "FCL",
          subject: 'Using the "flow.network" configuration key for specifying the flow network',
          message: "Configuring flow.network is no longer required",
          transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/TRANSITIONS.md#0002-deprecate-flow.network-config-key"
        });
      } else {
        network = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("env");
        if (network) _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c.deprecate({
          pkg: "FCL",
          subject: 'Using the "env" configuration key for specifying the flow network',
          message: "Configuring to specify flow network is no longer required",
          transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/TRANSITIONS.md#0001-deprecate-env-config-key"
        });
      }
    }
  }
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(network, "Error getting chainId from access node. Please configure flow.network instead");
  return network;
}

/**
 * @description
 * Watches the config for changes to access node and updates the chain id accordingly
 *
 * @returns {Function} A function that unsubscribes the listener
 *
 */
function watchForChainIdChanges() {
  return _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.subscribe(function configSubscriber(config) {
    const nextAccessNode = config?.["accessNode.api"];
    if (this.prevAccessNode !== nextAccessNode) {
      setChainIdDefault();
    }
    this.prevAccessNode = nextAccessNode;
  }.bind({}));
}

function isAndroid() {
  return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
function isSmallIOS() {
  return typeof navigator !== "undefined" && /iPhone|iPod/.test(navigator.userAgent);
}
function isLargeIOS() {
  return typeof navigator !== "undefined" && /iPad/.test(navigator.userAgent);
}
function isIOS() {
  return isSmallIOS() || isLargeIOS();
}
function isMobile() {
  return isAndroid() || isIOS();
}

const isServerSide = () => typeof window === "undefined";
const SESSION_STORAGE = {
  can: !isServerSide(),
  get: async key => JSON.parse(sessionStorage.getItem(key)),
  put: async (key, value) => sessionStorage.setItem(key, JSON.stringify(value))
};
(0,_onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v)({
  "discovery.wallet.method.default": "IFRAME/RPC",
  "fcl.storage.default": SESSION_STORAGE
});

// Set chain id default on access node change
watchForChainIdChanges();
async function configLens(regex) {
  return Object.fromEntries(Object.entries(await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v)().where(regex)).map(_ref => {
    let [key, value] = _ref;
    return [key.replace(regex, ""), value];
  }));
}

const VERSION = "1.4.0" ;

const is = type => d => typeof d === type;
const isRequired = d => d != null;
const isObject = is("object");
const isString = is("string");
const isFunc = is("function");
const isNumber = is("number");

function normalizeArgs(ax) {
  if (isFunc(ax)) return ax(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .arg */ .R9, _onflow_types__WEBPACK_IMPORTED_MODULE_3__);
  return [];
}

async function httpDocumentResolver(_ref) {
  let {
    url
  } = _ref;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(typeof url !== "undefined", "retrieve({ url }) -- url must be defined");
  let res;
  try {
    res = await cross_fetch__WEBPACK_IMPORTED_MODULE_4___default()(url);
  } catch (e) {
    throw new Error("httpDocumentResolver Error: Failed to retrieve document.");
  }
  let document = res.ok ? await res.json() : null;
  return document;
}
const DOCUMENT_RESOLVERS = new Map([["http", httpDocumentResolver], ["https", httpDocumentResolver]]);
async function retrieve(_ref2) {
  let {
    url
  } = _ref2;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(typeof url !== "undefined", "retrieve({ url }) -- url must be defined");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(typeof url === "string", "retrieve({ url }) -- url must be a string");
  const documentResolversFromConfig = await (0,_onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v)().where(/^document\.resolver\./);
  Object.keys(documentResolversFromConfig).map(key => {
    const resolverFromConfig = documentResolversFromConfig[key];
    const resolverProtocol = key.replace(/^document\.resolver\./, "");
    DOCUMENT_RESOLVERS.set(resolverProtocol, resolverFromConfig);
  });
  const urlParts = /^(.*):\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/.exec(url);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(urlParts, "Failed to parse URL");
  const protocol = urlParts[1];
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(urlParts, "Failed to parse URL protocol");
  const resolver = DOCUMENT_RESOLVERS.get(protocol);
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(resolver, `No resolver found for protcol=${protocol}`);
  let document = await resolver({
    url
  });
  return document;
}

function normalizeInteractionTemplate(template) {
  if (template == null) return null;
  switch (template["f_version"]) {
    case "1.0.0":
      return template;
    default:
      throw new Error("normalizeInteractionTemplate Error: Invalid InteractionTemplate");
  }
}

/**
 * @description Fills import addresses in Cadence for network
 * 
 * @param {object} params
 * @param {string} params.network - Network to derive Cadence for
 * @param {object} params.template - Interaction Template to derive Cadence from
 * @returns {string} - Cadence
 */
function deriveCadenceByNetwork(_ref) {
  let {
    network,
    template
  } = _ref;
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(network != undefined, "deriveCadenceByNetwork({ network }) -- network must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof network === "string", "deriveCadenceByNetwork({ network }) -- network must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template != undefined, "generateDependencyPin({ template }) -- template must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template === "object", "generateDependencyPin({ template }) -- template must be an object");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template.f_type === "InteractionTemplate", "generateDependencyPin({ template }) -- template must be an InteractionTemplate");
  template = normalizeInteractionTemplate(template);
  switch (template.f_version) {
    case "1.0.0":
      let networkDependencies = Object.keys(template?.data?.dependencies).map(dependencyPlaceholder => {
        let dependencyNetworkContracts = Object.values(template?.data?.dependencies?.[dependencyPlaceholder]);
        (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(dependencyNetworkContracts, `deriveCadenceByNetwork -- Could not find contracts for dependency placeholder: ${dependencyPlaceholder}`);
        (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(dependencyNetworkContracts.length === 0, `deriveCadenceByNetwork -- Could not find contracts for dependency placeholder: ${dependencyPlaceholder}`);
        let dependencyContract = dependencyNetworkContracts[0];
        let dependencyContractForNetwork = dependencyContract?.[network];
        (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(dependencyContractForNetwork, `deriveCadenceByNetwork -- Could not find ${network} network information for dependency: ${dependencyPlaceholder}`);
        return [dependencyPlaceholder, dependencyContractForNetwork.address];
      });
      return networkDependencies.reduce((cadence, _ref2) => {
        let [placeholder, address] = _ref2;
        const regex = new RegExp("(\\b" + placeholder + "\\b)", "g");
        return cadence.replace(regex, address);
      }, template.data.cadence);
    default:
      throw new Error("deriveCadenceByNetwork Error: Unsupported template version");
  }
}

async function deriveDependencies(_ref) {
  let {
    template
  } = _ref;
  const network = await getChainId();
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(network, "FCL configureDependencies Error: Missing configuration value for 'flow.network'");
  const derivedDependencies = {};
  switch (template["f_version"]) {
    case "1.0.0":
      const dependencyPlaceholderKeys = Object.keys(template?.data?.dependencies);
      for (let dependencyPlaceholderKey of dependencyPlaceholderKeys) {
        let dependencyPlaceholder = template?.data?.dependencies[dependencyPlaceholderKey];
        const dependencyPlaceholderContractsKeys = Object.keys(dependencyPlaceholder);
        (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(dependencyPlaceholderContractsKeys.length > 0, `FCL configureDependencies Error: No contracts found in template for placeholder=${dependencyPlaceholderKey}`);
        const dependencyPlaceholderContract = dependencyPlaceholder[dependencyPlaceholderContractsKeys[0]];
        const dependency = dependencyPlaceholderContract[network];
        (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(dependency, `FCL configureDependencies Error: No dependency information for placeholder=${dependencyPlaceholderKey} contract=${dependencyPlaceholderContractsKeys[0]} network=${network}`);
        (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(dependency?.address, `FCL configureDependencies Error: No address information for placeholder=${dependencyPlaceholderKey} contract=${dependencyPlaceholderContractsKeys[0]} network=${network}`);
        derivedDependencies[dependencyPlaceholderKey] = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(dependency?.address);
      }
      return derivedDependencies;
    default:
      throw new Error("FCL configureDependencies Error: Unsupported template version");
  }
}

async function prepTemplateOpts(opts) {
  if (isString(opts?.template)) {
    opts.template = await retrieve({
      url: opts?.template
    });
  }
  let dependencies = {};
  if (opts?.template) {
    opts.template = normalizeInteractionTemplate(opts?.template);
    dependencies = await deriveDependencies({
      template: opts.template
    });
  }
  const cadence = opts.cadence || deriveCadenceByNetwork({
    template: opts.template,
    network: await getChainId()
  });
  opts.cadence = cadence;
  opts.dependencies = dependencies;
  return opts;
}

async function pre(type, opts) {
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(opts), `${type}(opts) -- opts is required`);
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isObject(opts), `${type}(opts) -- opts must be an object`);
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(!(opts.cadence && opts.template), `${type}({ template, cadence }) -- cannot pass both cadence and template`);
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(opts.cadence || opts?.template), `${type}({ cadence }) -- cadence is required`);
  // // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isString(opts.cadence) || opts?.template, `${type}({ cadence }) -- cadence must be a string`);
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(opts.cadence || (await _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc().get("flow.network")), `${type}(opts) -- Required value for "flow.network" not defined in config. See: ${"https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration"}`);
  // prettier-ignore
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(await _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc().get("accessNode.api"), `${type}(opts) -- Required value for "accessNode.api" not defined in config. See: ${"https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration"}`);
}
async function preMutate(opts) {
  return pre("mutate", opts);
}
async function preQuery(opts) {
  return pre("query", opts);
}

/**
 * @description
 * Allows you to submit scripts to query the blockchain.
 *
 *  @param {object} opts - Query Options and configuration
 *  @param {string} opts.cadence - Cadence Script used to query Flow
 *  @param {import("../fcl").ArgsFn} [opts.args] - Arguments passed to cadence script
 *  @param {object} [opts.template] - Interaction Template for a script
 *  @param {number} [opts.limit]   - Compute Limit for Query
 *  @returns {Promise}
 *
 *  @example
 *    const cadence = `
 *      cadence: `
 *        pub fun main(a: Int, b: Int, c: Address): Int {
 *          log(c)
 *          return a + b
 *        }
 *    `.trim()
 *
 *    const args = (arg, t) => [
 *      arg(5, t.Int),
 *      arg(7, t.Int),
 *      arg("0xb2db43ad6bc345fec9", t.Address),
 *    ]
 *
 *    await query({ cadence, args })
 */
async function query() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  await preQuery(opts);
  opts = await prepTemplateOpts(opts);
  return _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc().overload(opts.dependencies || {}, async () =>
  // prettier-ignore
  _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .send */ .Jd([_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .script */ ._v(opts.cadence), _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .args */ .WC(normalizeArgs(opts.args || [])), opts.limit && typeof opts.limit === "number" && _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .limit */ .b9(opts.limit)]).then(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx));
}

async function fetchServices(servicesURL, code) {
  if (servicesURL == null || code == null) return [];
  const url = new URL(servicesURL);
  url.searchParams.append("code", code);
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(d => d.json());
  if (Array.isArray(resp)) return resp;

  // Backwards compatibility for First-Gen Wallet Providers
  const services = [];

  // Convert authorizations into authz services
  if (Array.isArray(resp.authorizations)) {
    for (let service of resp.authorizations) {
      services.push({
        type: "authz",
        keyId: resp.keyId,
        ...service
      });
    }
  }

  // Convert Provider info into an authn service
  if (resp.provider != null) {
    services.push({
      type: "authn",
      id: "wallet-provider#authn",
      ...resp.provider
    });
  }
  return services;
}

function mergeServices() {
  let sx1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let sx2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // TODO: Make this smarter
  return [...sx1, ...sx2];
}

const SERVICE_PRAGMA = {
  f_type: "Service",
  f_vsn: "1.0.0"
};
const IDENTITY_PRAGMA = {
  f_type: "Identity",
  f_vsn: "1.0.0"
};
const USER_PRAGMA = {
  f_type: "USER",
  f_vsn: "1.0.0"
};
const POLLING_RESPONSE_PRAGMA = {
  f_type: "PollingResponse",
  f_vsn: "1.0.0"
};
const COMPOSITE_SIGNATURE_PRAGMA = {
  f_type: "CompositeSignature",
  f_vsn: "1.0.0"
};

// {
//   "f_type": "Service",
//   "f_vsn": "1.0.0",
//   "type": "authn",
//   "uid": "uniqueDedupeKey",
//   "endpoint": "https://rawr",
//   "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // wallets internal id for the user
//   "identity": {
//     "address": "0x____"
//   },
//   "provider": {
//     "address": "0x____",
//     "name": "Best Wallet",
//     "description": "The Best Wallet"
//     "icon": "https://",
//   }
// }
function normalizeAuthn(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      return {
        ...SERVICE_PRAGMA,
        type: service.type,
        uid: service.id,
        endpoint: service.authn,
        id: service.pid,
        provider: {
          address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(service.addr),
          name: service.name,
          icon: service.icon
        }
      };
  }
}

// {
//   "f_type": "service",
//   "f_vsn": "1.0.0",
//   "type": "authz",
//   "uid": "uniqueDedupeKey",
//   "endpoint": "https://rawr",
//   "method": "HTTP/POST", // HTTP/POST | IFRAME/RPC | HTTP/RPC
//   "identity": {
//      "address": "0x______",
//      "keyId": 0,
//   },
//   "data": {}, // included in body of authz request
//   "params": {}, // included as query params on endpoint url
// }
function normalizeAuthz(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      return {
        ...SERVICE_PRAGMA,
        type: service.type,
        uid: service.id,
        endpoint: service.endpoint,
        method: service.method,
        identity: {
          ...IDENTITY_PRAGMA,
          address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(service.addr),
          keyId: service.keyId
        },
        params: service.params,
        data: service.data
      };
  }
}

// {
//   "f_type": "service",
//   "f_vsn": "1.0.0",
//   "type": "pre-authz",
//   "uid": "uniqueDedupeKey",
//   "endpoint": "https://rawr",
//   "method": "HTTP/POST", // HTTP/POST | IFRAME/RPC | HTTP/RPC
//   "identity": {
//      "address": "0x______",
//      "keyId": 0,
//   },
//   "data": {}, // included in body of pre-authz request
//   "params": {}, // included as query params on endpoint url
// }
function normalizePreAuthz(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      return {
        ...SERVICE_PRAGMA,
        type: service.type,
        uid: service.id,
        endpoint: service.endpoint,
        method: service.method,
        identity: {
          ...IDENTITY_PRAGMA,
          address: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(service.addr),
          keyId: service.keyId
        },
        params: service.params,
        data: service.data
      };
  }
}

// {
//    "f_type": "Service",
//    "f_vsn": "1.0.0",
//    "type": "frame",
//    "endpoint": "https://rawr",
//    "data": {},   // Sent to frame when ready
//    "params": {}, // include in query params on frame
// }
function normalizeFrame(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      return {
        old: service,
        ...SERVICE_PRAGMA,
        type: "frame",
        endpoint: service.endpoint,
        params: service.params || {},
        data: service.data || {}
      };
  }
}

// {
//    "f_type": "Service",
//    "f_vsn": "1.0.0",
//    "type": "back-channel-rpc",
//    "endpoint": "https://rawr",
//    "method": "HTTP/GET", // HTTP/GET | HTTP/POST
//    "data": {},           // included in body of rpc
//    "params": {},         // included as query params on endpoint url
// }
function normalizeBackChannelRpc(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      return {
        ...SERVICE_PRAGMA,
        type: "back-channel-rpc",
        endpoint: service.endpoint,
        method: service.method,
        params: service.params || {},
        data: service.data || {}
      };
  }
}

// {
//   "f_type": "Service",
//   "f_vsn": "1.0.0",
//   "type": "open-id",
//   "uid": "uniqueDedupeKey",
//   "method: "data",
//   "data": {
//      "profile": {
//        "name": "Bob",
//        "family_name": "Builder",
//        "given_name": "Robert",
//        "middle_name": "the",
//        "nickname": "Bob the Builder",
//        "perferred_username": "bob",
//        "profile": "https://www.bobthebuilder.com/",
//        "picture": "https://avatars.onflow.org/avatar/bob",
//        "gender": "...",
//        "birthday": "2001-01-18",
//        "zoneinfo": "America/Vancouver",
//        "locale": "en-us",
//        "updated_at": "1614970797388"
//      },
//      "email": {
//        "email": "bob@bob.bob",
//        "email_verified": true
//      },
//      "address": {
//        "address": "One Apple Park Way, Cupertino, CA 95014, USA"
//      },
//      "phone": {
//        "phone_number": "+1 (xxx) yyy-zzzz",
//        "phone_number_verified": true
//      },
//      "social": {
//        "twitter": "@_qvvg",
//        "twitter_verified": true
//      },
//   }
// }
function normalizeOpenId(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      return null;
  }
}

// {
//   "f_type": "Service",
//   "f_vsn": "1.0.0",
//   "type": "user-signature",
//   "uid": "uniqueDedupeKey",
//   "endpoint": "https://rawr",
//   "method": "IFRAME/RPC", // HTTP/POST | IFRAME/RPC | HTTP/RPC
//   "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // wallets internal id for the user
//   "data": {}, // included in body of user-signature request
//   "params": {}, // included as query params on endpoint url
// }
function normalizeUserSignature(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      throw new Error("Invalid user-signature service");
  }
}

// {
//    "f_type": "Service",
//    "f_vsn": "1.0.0",
//    type: "local-view",
//    method: "VIEW/IFRAME",
//    endpoint: "https://woot.org/authz/local",
//    data: {},
//    params: {},
// }
function normalizeLocalView(resp) {
  if (resp == null) return null;
  if (resp.method == null) {
    resp = {
      ...resp,
      type: "local-view",
      method: "VIEW/IFRAME"
    };
  }
  switch (resp["f_vsn"]) {
    case "1.0.0":
      return resp;
    default:
      return {
        ...SERVICE_PRAGMA,
        type: resp.type || "local-view",
        method: resp.method,
        endpoint: resp.endpoint,
        data: resp.data || {},
        params: resp.params || {}
      };
  }
}

// {
//   "f_type": "Service",                    // Its a service!
//   "f_vsn": "1.0.0",                       // Follows the v1.0.0 spec for the service
//   "type": "account-proof",                // the type of service it is
//   "method": "DATA",                       // Its data!
//   "uid": "awesome-wallet#account-proof",  // A unique identifier for the service
//   "data": {
//     "f_type": "account-proof",
//     "f_vsn": "1.0.0",
//     "nonce": "0A1BC2FF",                  // Nonce signed by the current account-proof (minimum 32 bytes in total, i.e 64 hex characters)
//     "address": "0xUSER",                  // The user's address (8 bytes, i.e 16 hex characters)
//     "signature": CompositeSignature,      // address (sans-prefix), keyId, signature (hex)
// }

function normalizeAccountProof(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      throw new Error(`FCL Normalizer Error: Invalid account-proof service`);
  }
}

// {
//   "f_type": "Service",
//   "f_vsn": "1.0.0",
//   "type": "authn-refresh",
//   "uid": "uniqueDedupeKey",
//   "endpoint": "https://rawr",
//   "method": "HTTP/POST",  // "HTTP/POST", // HTTP/POST | IFRAME/RPC | HTTP/RPC
//   "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // wallets internal id for the user
//   "data": {}, // included in body of request
//   "params": {}, // included as query params on endpoint url
// }
function normalizeAuthnRefresh(service) {
  if (service == null) return null;
  switch (service["f_vsn"]) {
    case "1.0.0":
      return service;
    default:
      throw new Error("Invalid authn-refresh service");
  }
}

const serviceNormalizers = {
  "back-channel-rpc": normalizeBackChannelRpc,
  "pre-authz": normalizePreAuthz,
  authz: normalizeAuthz,
  authn: normalizeAuthn,
  frame: normalizeFrame,
  "open-id": normalizeOpenId,
  "user-signature": normalizeUserSignature,
  "local-view": normalizeLocalView,
  "account-proof": normalizeAccountProof,
  "authn-refresh": normalizeAuthnRefresh
};
function normalizeService(service, data) {
  try {
    var normalized = serviceNormalizers[service.type](service, data);
    return normalized;
  } catch (error) {
    console.error(`Unrecognized FCL Service Type [${service.type}]`, service, error);
    return service;
  }
}

function deriveCompositeId(authn) {
  return _onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .encode */ .cv([authn.provider.address || authn.provider.name || "UNSPECIFIED", authn.id]).toString("hex");
}
function normalizeData(data) {
  data.addr = data.addr ? (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(data.addr) : null;
  data.paddr = data.paddr ? (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(data.paddr) : null;
  return data;
}
function findService(type, services) {
  return services.find(d => d.type === type);
}
async function buildUser(data) {
  data = normalizeData(data);
  var services = mergeServices(data.services || [], await fetchServices(data.hks, data.code)).map(service => normalizeService(service, data));
  const authn = findService("authn", services);
  return {
    ...USER_PRAGMA,
    addr: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(data.addr),
    cid: deriveCompositeId(authn),
    loggedIn: true,
    services: services,
    expiresAt: data.expires
  };
}

function serviceOfType() {
  let services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let type = arguments.length > 1 ? arguments[1] : undefined;
  return services.find(service => service.type === type);
}

function serviceEndpoint(service) {
  const url = new URL(service.endpoint);
  if (window?.location?.origin) {
    url.searchParams.append("l6n", window.location.origin);
  }
  if (service.params != null) {
    for (let [key, value] of Object.entries(service.params || {})) {
      url.searchParams.append(key, value);
    }
  }
  return url;
}

function fetchService(service) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const method = opts.method || "POST";
  const body = method === "GET" ? undefined : JSON.stringify(opts.data || service.data || {});
  return fetch(serviceEndpoint(service), {
    method: method,
    headers: {
      ...(service.headers || {}),
      ...(opts.headers || {}),
      "Content-Type": "application/json"
    },
    body: body
  }).then(d => d.json());
}

// {
//    "f_type": "PollingResponse",
//    "f_vsn": "1.0.0",
//    "status": "PENDING", // PENDING | APPROVED | DECLINED | REDIRECT
//    "reason": null,      // Reason for Declining Transaction
//    "data": null,        // Return value for APPROVED
//    "updates": BackChannelRpc,
//    "local": Frame,
// }
function normalizePollingResponse(resp) {
  if (resp == null) return null;
  switch (resp["f_vsn"]) {
    case "1.0.0":
      return resp;
    default:
      return {
        ...POLLING_RESPONSE_PRAGMA,
        status: resp.status ?? "APPROVED",
        reason: resp.reason ?? null,
        data: resp.compositeSignature || resp.data || {
          ...resp
        } || {},
        updates: normalizeBackChannelRpc(resp.authorizationUpdates),
        local: normalizeFrame((resp.local || [])[0])
      };
  }
}

const OPTIONS = {
  "HTTP/GET": "GET",
  "HTTP/POST": "POST"
};
const serviceMethod = service => {
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(OPTIONS[service.method], "Invalid Service Method for type back-channel-rpc", {
    service
  });
  return OPTIONS[service.method];
};
async function poll(service) {
  let canContinue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => true;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(service, "Missing Polling Service", {
    service
  });
  if (!canContinue()) throw new Error("Externally Halted");
  let resp;
  try {
    if (typeof document !== "undefined" && document.visibilityState === "hidden") {
      await new Promise(r => setTimeout(r, 500));
      return poll(service, canContinue);
    }
    resp = await fetchService(service, {
      method: serviceMethod(service)
    }).then(normalizePollingResponse);
  } catch (error) {
    throw error;
  }
  switch (resp.status) {
    case "APPROVED":
      return resp.data;
    case "DECLINED":
      throw new Error(`Declined: ${resp.reason || "No reason supplied."}`);
    default:
      await new Promise(r => setTimeout(r, 500));
      return poll(resp.updates, canContinue);
  }
}

const FRAME = "FCL_IFRAME";
const FRAME_STYLES = `
  position:fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100vw;
  display:block;
  background:rgba(0,0,0,0.25);
  z-index: 2147483647;
  box-sizing: border-box;
  color-scheme: light;
`;
function renderFrame(src) {
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(!document.getElementById(FRAME), "Attempt at triggering multiple Frames", {
    src
  });
  const $frame = document.createElement("iframe");
  $frame.src = src;
  $frame.id = FRAME;
  $frame.allow = "usb *; hid *";
  $frame.frameBorder = "0";
  $frame.style.cssText = FRAME_STYLES;
  document.body.append($frame);
  const unmount = () => {
    if (document.getElementById(FRAME)) {
      document.getElementById(FRAME).remove();
    }
  };
  return [$frame.contentWindow, unmount];
}

const POP = "FCL_POP";
let popup = null;
let previousUrl$1 = null;
function popupWindow(url, windowName, win, w, h) {
  const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
  const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
  const popup = win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
  if (!popup) throw new Error("Popup failed to open (was it blocked by a popup blocker?)");
  return popup;
}
function renderPop(src) {
  if (popup == null || popup?.closed) {
    popup = popupWindow(src, POP, window, 640, 770);
  } else if (previousUrl$1 !== src) {
    popup.location.replace(src);
    popup.focus();
  } else {
    popup.focus();
  }
  previousUrl$1 = src;
  const unmount = () => {
    if (popup && !popup.closed) {
      popup.close();
    }
    popup = null;
  };
  return [popup, unmount];
}

let tab$1 = null;
let previousUrl = null;
function renderTab(src) {
  if (tab$1 == null || tab$1?.closed) {
    tab$1 = window.open(src, "_blank");
    if (!tab$1) throw new Error("Tab failed to open (was it blocked by the browser?)");
  } else if (previousUrl !== src) {
    tab$1.location.replace(src);
    tab$1.focus();
  } else {
    tab$1.focus();
  }
  previousUrl = src;
  const unmount = () => {
    if (tab$1 && !tab$1.closed) {
      tab$1.close();
    }
    tab$1 = null;
  };
  return [tab$1, unmount];
}

const VIEWS = {
  "VIEW/IFRAME": renderFrame,
  "VIEW/POP": renderPop,
  "VIEW/TAB": renderTab
};
async function execLocal(service) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  try {
    return VIEWS[service.method](serviceEndpoint(service), opts);
  } catch (error) {
    console.error("execLocal({service, opts = {}})", error, {
      service,
      opts
    });
    throw error;
  }
}

async function execHttpPost(_ref) {
  let {
    service,
    body,
    config,
    opts
  } = _ref;
  const resp = await fetchService(service, {
    data: {
      fclVersion: VERSION,
      service: {
        params: service.params,
        data: service.data,
        type: service.type
      },
      config,
      ...body
    }
  }).then(normalizePollingResponse);
  if (resp.status === "APPROVED") {
    return resp.data;
  } else if (resp.status === "DECLINED") {
    throw new Error(`Declined: ${resp.reason || "No reason supplied."}`);
  } else if (resp.status === "REDIRECT") {
    return resp;
  } else if (resp.status === "PENDING") {
    var canContinue = true;
    const [_, unmount] = await execLocal(normalizeLocalView(resp.local));
    const close = () => {
      try {
        unmount();
        canContinue = false;
      } catch (error) {
        console.error("Frame Close Error", error);
      }
    };
    return poll(resp.updates, () => canContinue).then(serviceResponse => {
      close();
      return serviceResponse;
    }).catch(error => {
      console.error(error);
      close();
      throw error;
    });
  } else {
    console.error(`Auto Decline: Invalid Response`, {
      service,
      resp
    });
    throw new Error(`Auto Decline: Invalid Response`);
  }
}

const CLOSE_EVENT = "FCL:VIEW:CLOSE";
const READY_EVENT = "FCL:VIEW:READY";
const RESPONSE_EVENT = "FCL:VIEW:RESPONSE";
const _ = e => typeof e === "string" && e.toLowerCase();
const IGNORE = new Set(["monetizationstart", "monetizationpending", "monetizationprogress", "monetizationstop"]);
const deprecate = (was, want) => console.warn("DEPRECATION NOTICE", `Received ${was}, please use ${want} for this and future versions of FCL`);
const buildMessageHandler = _ref => {
  let {
    close,
    send,
    onReady,
    onResponse,
    onMessage
  } = _ref;
  return e => {
    try {
      if (typeof e.data !== "object") return;
      if (IGNORE.has(e.data.type)) return;
      if (_(e.data.type) === _(CLOSE_EVENT)) close();
      if (_(e.data.type) === _(READY_EVENT)) onReady(e, {
        send,
        close
      });
      if (_(e.data.type) === _(RESPONSE_EVENT)) onResponse(e, {
        send,
        close
      });
      onMessage(e, {
        send,
        close
      });

      // Backwards Compatible
      if (_(e.data.type) === _("FCL:FRAME:READY")) {
        deprecate(e.data.type, READY_EVENT);
        onReady(e, {
          send,
          close
        });
      }
      if (_(e.data.type) === _("FCL:FRAME:RESPONSE")) {
        deprecate(e.data.type, RESPONSE_EVENT);
        onResponse(e, {
          send,
          close
        });
      }
      if (_(e.data.type) === _("FCL:FRAME:CLOSE")) {
        deprecate(e.data.type, CLOSE_EVENT);
        close();
      }
      //
      if (_(e.data.type) === _("FCL::CHALLENGE::RESPONSE")) {
        deprecate(e.data.type, RESPONSE_EVENT);
        onResponse(e, {
          send,
          close
        });
      }
      if (_(e.data.type) === _("FCL::AUTHZ_READY")) {
        deprecate(e.data.type, READY_EVENT);
        onReady(e, {
          send,
          close
        });
      }
      if (_(e.data.type) === _("FCL::CHALLENGE::CANCEL")) {
        deprecate(e.data.type, CLOSE_EVENT);
        close();
      }
      if (_(e.data.type) === _("FCL::CANCEL")) {
        deprecate(e.data.type, CLOSE_EVENT);
        close();
      }
    } catch (error) {
      console.error("Frame Callback Error", error);
      close();
    }
  };
};

const noop$3 = () => {};
function frame(service) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (service == null) return {
    send: noop$3,
    close: noop$3
  };
  const onClose = opts.onClose || noop$3;
  const onMessage = opts.onMessage || noop$3;
  const onReady = opts.onReady || noop$3;
  const onResponse = opts.onResponse || noop$3;
  const handler = buildMessageHandler({
    close,
    send,
    onReady,
    onResponse,
    onMessage
  });
  window.addEventListener("message", handler);
  const [$frame, unmount] = renderFrame(serviceEndpoint(service));
  return {
    send,
    close
  };
  function close() {
    try {
      window.removeEventListener("message", handler);
      unmount();
      onClose();
    } catch (error) {
      console.error("Frame Close Error", error);
    }
  }
  function send(msg) {
    try {
      $frame.postMessage(JSON.parse(JSON.stringify(msg || {})), "*");
    } catch (error) {
      console.error("Frame Send Error", msg, error);
    }
  }
}

function execIframeRPC(_ref) {
  let {
    service,
    body,
    config,
    opts
  } = _ref;
  return new Promise((resolve, reject) => {
    const id = (0,_onflow_util_uid__WEBPACK_IMPORTED_MODULE_8__/* .uid */ .h)();
    const includeOlderJsonRpcCall = opts.includeOlderJsonRpcCall;
    frame(service, {
      async onReady(_, _ref2) {
        let {
          send
        } = _ref2;
        try {
          send({
            type: "FCL:VIEW:READY:RESPONSE",
            fclVersion: VERSION,
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config
          });
          send({
            fclVersion: VERSION,
            type: "FCL:FRAME:READY:RESPONSE",
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config,
            deprecated: {
              message: "FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
            }
          });
          if (includeOlderJsonRpcCall) {
            send({
              jsonrpc: "2.0",
              id: id,
              method: "fcl:sign",
              params: [body, service.params],
              deprecated: {
                message: "jsonrpc is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
              }
            });
          }
        } catch (error) {
          throw error;
        }
      },
      onResponse(e, _ref3) {
        let {
          close
        } = _ref3;
        try {
          if (typeof e.data !== "object") return;
          const resp = normalizePollingResponse(e.data);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execIframeRPC onResponse error", error);
          throw error;
        }
      },
      onMessage(e, _ref4) {
        let {
          close
        } = _ref4;
        try {
          if (typeof e.data !== "object") return;
          if (e.data.jsonrpc !== "2.0") return;
          if (e.data.id !== id) return;
          const resp = normalizePollingResponse(e.data.result);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execIframeRPC onMessage error", error);
          throw error;
        }
      },
      onClose() {
        reject(`Declined: Externally Halted`);
      }
    });
  });
}

const noop$2 = () => {};
function pop(service) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (service == null) return {
    send: noop$2,
    close: noop$2
  };
  const onClose = opts.onClose || noop$2;
  const onMessage = opts.onMessage || noop$2;
  const onReady = opts.onReady || noop$2;
  const onResponse = opts.onResponse || noop$2;
  const handler = buildMessageHandler({
    close,
    send,
    onReady,
    onResponse,
    onMessage
  });
  window.addEventListener("message", handler);
  const [$pop, unmount] = renderPop(serviceEndpoint(service));
  const timer = setInterval(function () {
    if ($pop && $pop.closed) {
      close();
    }
  }, 500);
  return {
    send,
    close
  };
  function close() {
    try {
      window.removeEventListener("message", handler);
      clearInterval(timer);
      unmount();
      onClose();
    } catch (error) {
      console.error("Popup Close Error", error);
    }
  }
  function send(msg) {
    try {
      $pop.postMessage(JSON.parse(JSON.stringify(msg || {})), "*");
    } catch (error) {
      console.error("Popup Send Error", msg, error);
    }
  }
}

function execPopRPC(_ref) {
  let {
    service,
    body,
    config,
    opts
  } = _ref;
  return new Promise((resolve, reject) => {
    const id = (0,_onflow_util_uid__WEBPACK_IMPORTED_MODULE_8__/* .uid */ .h)();
    const {
      redir,
      includeOlderJsonRpcCall
    } = opts;
    pop(service, {
      async onReady(_, _ref2) {
        let {
          send
        } = _ref2;
        try {
          send({
            fclVersion: VERSION,
            type: "FCL:VIEW:READY:RESPONSE",
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config
          });
          send({
            fclVersion: VERSION,
            type: "FCL:FRAME:READY:RESPONSE",
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config,
            deprecated: {
              message: "FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
            }
          });
          if (includeOlderJsonRpcCall) {
            send({
              jsonrpc: "2.0",
              id: id,
              method: "fcl:sign",
              params: [body, service.params]
            });
          }
        } catch (error) {
          throw error;
        }
      },
      onResponse(e, _ref3) {
        let {
          close
        } = _ref3;
        try {
          if (typeof e.data !== "object") return;
          const resp = normalizePollingResponse(e.data);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              !redir && close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execPopRPC onResponse error", error);
          throw error;
        }
      },
      onMessage(e, _ref4) {
        let {
          close
        } = _ref4;
        try {
          if (typeof e.data !== "object") return;
          if (e.data.jsonrpc !== "2.0") return;
          if (e.data.id !== id) return;
          const resp = normalizePollingResponse(e.data.result);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              !redir && close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execPopRPC onMessage error", error);
          throw error;
        }
      },
      onClose() {
        reject(`Declined: Externally Halted`);
      }
    });
  });
}

const noop$1 = () => {};
function tab(service) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (service == null) return {
    send: noop$1,
    close: noop$1
  };
  const onClose = opts.onClose || noop$1;
  const onMessage = opts.onMessage || noop$1;
  const onReady = opts.onReady || noop$1;
  const onResponse = opts.onResponse || noop$1;
  const handler = buildMessageHandler({
    close,
    send,
    onReady,
    onResponse,
    onMessage
  });
  window.addEventListener("message", handler);
  const [$tab, unmount] = renderTab(serviceEndpoint(service));
  const timer = setInterval(function () {
    if ($tab && $tab.closed) {
      close();
    }
  }, 500);
  return {
    send,
    close
  };
  function close() {
    try {
      window.removeEventListener("message", handler);
      clearInterval(timer);
      unmount();
      onClose();
    } catch (error) {
      console.error("Tab Close Error", error);
    }
  }
  function send(msg) {
    try {
      $tab.postMessage(JSON.parse(JSON.stringify(msg || {})), "*");
    } catch (error) {
      console.error("Tab Send Error", msg, error);
    }
  }
}

function execTabRPC(_ref) {
  let {
    service,
    body,
    config,
    opts
  } = _ref;
  return new Promise((resolve, reject) => {
    const id = (0,_onflow_util_uid__WEBPACK_IMPORTED_MODULE_8__/* .uid */ .h)();
    const {
      redir,
      includeOlderJsonRpcCall
    } = opts;
    tab(service, {
      async onReady(_, _ref2) {
        let {
          send
        } = _ref2;
        try {
          send({
            fclVersion: VERSION,
            type: "FCL:VIEW:READY:RESPONSE",
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config
          });
          send({
            fclVersion: VERSION,
            type: "FCL:FRAME:READY:RESPONSE",
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config,
            deprecated: {
              message: "FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
            }
          });
          if (includeOlderJsonRpcCall) {
            send({
              jsonrpc: "2.0",
              id: id,
              method: "fcl:sign",
              params: [body, service.params]
            });
          }
        } catch (error) {
          throw error;
        }
      },
      onResponse(e, _ref3) {
        let {
          close
        } = _ref3;
        try {
          if (typeof e.data !== "object") return;
          const resp = normalizePollingResponse(e.data);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              !redir && close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execPopRPC onResponse error", error);
          throw error;
        }
      },
      onMessage(e, _ref4) {
        let {
          close
        } = _ref4;
        try {
          if (typeof e.data !== "object") return;
          if (e.data.jsonrpc !== "2.0") return;
          if (e.data.id !== id) return;
          const resp = normalizePollingResponse(e.data.result);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              !redir && close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execPopRPC onMessage error", error);
          throw error;
        }
      },
      onClose() {
        reject(`Declined: Externally Halted`);
      }
    });
  });
}

const noop = () => {};
function extension(service) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (service == null) return {
    send: noop,
    close: noop
  };
  const onClose = opts.onClose || noop;
  const onMessage = opts.onMessage || noop;
  const onReady = opts.onReady || noop;
  const onResponse = opts.onResponse || noop;
  const handler = buildMessageHandler({
    close,
    send,
    onReady,
    onResponse,
    onMessage
  });
  window.addEventListener("message", handler);
  send({
    service
  });
  return {
    send,
    close
  };
  function close() {
    try {
      window.removeEventListener("message", handler);
      onClose();
    } catch (error) {
      console.error("Ext Close Error", error);
    }
  }
  function send(msg) {
    try {
      window && window.postMessage(JSON.parse(JSON.stringify(msg || {})), "*");
    } catch (error) {
      console.error("Ext Send Error", msg, error);
    }
  }
}

function execExtRPC(_ref) {
  let {
    service,
    body,
    config,
    opts
  } = _ref;
  return new Promise((resolve, reject) => {
    extension(service, {
      async onReady(_, _ref2) {
        let {
          send
        } = _ref2;
        try {
          send({
            fclVersion: VERSION,
            type: "FCL:VIEW:READY:RESPONSE",
            body,
            service: {
              params: service.params,
              data: service.data,
              type: service.type
            },
            config
          });
        } catch (error) {
          throw error;
        }
      },
      onResponse(e, _ref3) {
        let {
          close
        } = _ref3;
        try {
          if (typeof e.data !== "object") return;
          const resp = normalizePollingResponse(e.data);
          switch (resp.status) {
            case "APPROVED":
              resolve(resp.data);
              close();
              break;
            case "DECLINED":
              reject(`Declined: ${resp.reason || "No reason supplied"}`);
              close();
              break;
            case "REDIRECT":
              resolve(resp);
              close();
              break;
            default:
              reject(`Declined: No reason supplied`);
              close();
              break;
          }
        } catch (error) {
          console.error("execExtRPC onResponse error", error);
          throw error;
        }
      },
      onClose() {
        reject(`Declined: Externally Halted`);
      }
    });
  });
}

const CORE_STRATEGIES = {
  "HTTP/RPC": execHttpPost,
  "HTTP/POST": execHttpPost,
  "IFRAME/RPC": execIframeRPC,
  "POP/RPC": execPopRPC,
  "TAB/RPC": execTabRPC,
  "EXT/RPC": execExtRPC
};
const supportedPlugins = ["ServicePlugin"];
const supportedServicePlugins = ["discovery-service"];
const validateDiscoveryPlugin = servicePlugin => {
  const {
    services,
    serviceStrategy
  } = servicePlugin;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(Array.isArray(services) && services.length, "Array of Discovery Services is required");
  for (const ds of services) {
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(ds.f_type) && ds.f_type === "Service", "Service is required");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(ds.type) && ds.type === "authn", `Service must be type authn. Received ${ds.type}`);
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(ds.method in CORE_STRATEGIES || serviceStrategy.method === ds.method, `Service method ${ds.method} is not supported`);
  }
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(serviceStrategy), "Service strategy is required");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(serviceStrategy.method) && isString(serviceStrategy.method), "Service strategy method is required");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(serviceStrategy.exec) && isFunc(serviceStrategy.exec), "Service strategy exec function is required");
  return {
    discoveryServices: services,
    serviceStrategy
  };
};
const ServiceRegistry = () => {
  let services = new Set();
  let strategies = new Map(Object.entries(CORE_STRATEGIES));
  const add = servicePlugin => {
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(supportedServicePlugins.includes(servicePlugin.type), `Service Plugin type ${servicePlugin.type} is not supported`);
    if (servicePlugin.type === "discovery-service") {
      const {
        discoveryServices,
        serviceStrategy
      } = validateDiscoveryPlugin(servicePlugin);
      setServices(discoveryServices);
      if (!strategies.has(serviceStrategy.method)) {
        strategies.set(serviceStrategy.method, serviceStrategy.exec);
      } else {
        (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
          title: `Add Service Plugin`,
          message: `Service strategy for ${serviceStrategy.method} already exists`,
          level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.warn
        });
      }
    }
  };
  const setServices = discoveryServices => services = new Set([...discoveryServices]);
  const getServices = () => [...services];
  const getStrategy = method => strategies.get(method);
  const getStrategies = () => [...strategies.keys()];
  return Object.freeze({
    add,
    getServices,
    getStrategy,
    getStrategies
  });
};
const validatePlugins = plugins => {
  let pluginsArray;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(plugins, "No plugins supplied");
  if (!Array.isArray(plugins)) {
    pluginsArray = [plugins];
  } else {
    pluginsArray = [...plugins];
  }
  for (const p of pluginsArray) {
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(p.name), "Plugin name is required");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isRequired(p.f_type), "Plugin f_type is required");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(supportedPlugins.includes(p.f_type), `Plugin type ${p.f_type} is not supported`);
  }
  return pluginsArray;
};
const PluginRegistry = () => {
  const pluginsMap = new Map();
  const getPlugins = () => pluginsMap;
  const add = plugins => {
    const pluginsArray = validatePlugins(plugins);
    for (const p of pluginsArray) {
      pluginsMap.set(p.name, p);
      if (p.f_type === "ServicePlugin") {
        serviceRegistry.add(p);
      }
    }
  };
  return Object.freeze({
    add,
    getPlugins
  });
};
const serviceRegistry = ServiceRegistry();
const pluginRegistry = PluginRegistry();

const execStrategy = async _ref => {
  let {
    service,
    body,
    config,
    opts
  } = _ref;
  const strategy = serviceRegistry.getStrategy(service.method);
  return strategy({
    service,
    body,
    config,
    opts
  });
};
async function execService(_ref2) {
  let {
    service,
    msg = {},
    config = {},
    opts = {}
  } = _ref2;
  msg.data = service.data;
  const execConfig = {
    services: await configLens(/^service\./),
    app: await configLens(/^app\.detail\./),
    client: {
      ...config.client,
      fclVersion: VERSION,
      fclLibrary: "https://github.com/onflow/fcl-js",
      hostname: window?.location?.hostname ?? null,
      network: await getChainId()
    }
  };
  try {
    const res = await execStrategy({
      service,
      body: msg,
      config: execConfig,
      opts
    });
    if (res.status === "REDIRECT") {
      (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(service.type === res.data.type, "Cannot shift recursive service type in execService");
      return await execService({
        service: res.data,
        msg,
        config: execConfig,
        opts
      });
    } else {
      return res;
    }
  } catch (error) {
    (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
      title: `Error on execService ${service?.type}`,
      message: error,
      level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.error
    });
    throw error;
  }
}

// {
//    "f_type": "CompositeSignature",
//    "f_vsn": "1.0.0",
//    "addr": "_____",         // sans-prefix
//    "signature": "adfe1234", // hex
//    "keyId": 3,
// }
function normalizeCompositeSignature(resp) {
  if (resp == null) return null;
  switch (resp["f_vsn"]) {
    case "1.0.0":
      return resp;
    default:
      return {
        ...COMPOSITE_SIGNATURE_PRAGMA,
        addr: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .sansPrefix */ .CH)(resp.addr || resp.address),
        signature: resp.signature || resp.sig,
        keyId: resp.keyId
      };
  }
}

const makeDiscoveryServices = async () => {
  const extensionServices = window?.fcl_extensions || [];
  return [...extensionServices, ...serviceRegistry.getServices()];
};
async function getDiscoveryService(service) {
  const discoveryAuthnInclude = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("discovery.authn.include", []);
  const discoveryWalletMethod = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.first(["discovery.wallet.method", "discovery.wallet.method.default"]);
  const method = service?.method ? service.method : discoveryWalletMethod;
  const endpoint = service?.endpoint ?? (await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.first(["discovery.wallet", "challenge.handshake"]));
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(endpoint, `
    If no service is passed to "authenticate," then "discovery.wallet" must be defined in fcl config.
    See: "https://docs.onflow.org/fcl/reference/api/#setting-configuration-values"
    `);
  return {
    ...service,
    type: "authn",
    endpoint,
    method,
    discoveryAuthnInclude
  };
}

async function getServices(_ref) {
  let {
    types
  } = _ref;
  const endpoint = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("discovery.authn.endpoint");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(Boolean(endpoint), `"discovery.authn.endpoint" in config must be defined.`);
  const include = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("discovery.authn.include", []);
  const url = new URL(endpoint);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: types,
      fclVersion: VERSION,
      include,
      clientServices: await makeDiscoveryServices(),
      supportedStrategies: serviceRegistry.getStrategies(),
      userAgent: window?.navigator?.userAgent,
      network: await getChainId()
    })
  }).then(d => d.json());
}

const SERVICE_ACTOR_KEYS = {
  AUTHN: "authn",
  RESULTS: "results",
  SNAPSHOT: "SNAPSHOT",
  UPDATED: "UPDATED",
  UPDATE_RESULTS: "UPDATE_RESULTS"
};
const warn = (fact, msg) => {
  if (fact) {
    console.warn(`
      %cFCL Warning
      ============================
      ${msg}
      For more info, please see the docs: https://docs.onflow.org/fcl/
      ============================
      `, "font-weight:bold;font-family:monospace;");
  }
};
const fetchServicesFromDiscovery = async () => {
  try {
    const services = await getServices({
      types: [SERVICE_ACTOR_KEYS.AUTHN]
    });
    (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .send */ .lW)(SERVICE_ACTOR_KEYS.AUTHN, SERVICE_ACTOR_KEYS.UPDATE_RESULTS, {
      results: services
    });
  } catch (error) {
    (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
      title: `${error.name} Error fetching Discovery API services.`,
      message: error.message,
      level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.error
    });
  }
};
const HANDLERS$3 = {
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .INIT */ .qg]: async ctx => {
    warn(typeof window === "undefined", '"fcl.discovery" is only available in the browser.');
    // If you call this before the window is loaded extensions will not be set yet
    if (document.readyState === 'complete') {
      fetchServicesFromDiscovery();
    } else {
      window.onload = async () => {
        fetchServicesFromDiscovery();
      };
    }
  },
  [SERVICE_ACTOR_KEYS.UPDATE_RESULTS]: (ctx, _letter, data) => {
    ctx.merge(data);
    ctx.broadcast(SERVICE_ACTOR_KEYS.UPDATED, {
      ...ctx.all()
    });
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .SUBSCRIBE */ .kD]: (ctx, letter) => {
    ctx.subscribe(letter.from);
    ctx.send(letter.from, SERVICE_ACTOR_KEYS.UPDATED, {
      ...ctx.all()
    });
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UNSUBSCRIBE */ .By]: (ctx, letter) => ctx.unsubscribe(letter.from),
  [SERVICE_ACTOR_KEYS.SNAPSHOT]: async (ctx, letter) => letter.reply({
    ...ctx.all()
  })
};
const spawnProviders = () => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .spawn */ .Cs)(HANDLERS$3, SERVICE_ACTOR_KEYS.AUTHN);

/**
 * @typedef {import("@onflow/typedefs").Service} Service
 */

/**
 * @callback SubscriptionCallback
 * @returns {Service[]}
 */

/**
 * @description
 * Discovery methods for interacting with Authn.
 * 
 * @typedef {object} Authn
 * @property {Function} subscribe - Subscribe to Discovery authn services
 * @property {Function} snapshot - Get the current Discovery authn services spanshot
 * @property {Function} update - Trigger an update of authn services
 */
const authn = {
  /**
   * @description - Subscribe to Discovery authn services
   * @param {Function} cb
   * @returns {SubscriptionCallback}
   */
  subscribe: cb => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .subscriber */ .qP)(SERVICE_ACTOR_KEYS.AUTHN, spawnProviders, cb),
  /**
   * @description - Get the current Discovery authn services spanshot
   * @returns {Service[]}
   */
  snapshot: () => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .snapshoter */ .L6)(SERVICE_ACTOR_KEYS.AUTHN, spawnProviders),
  /**
   * @description - Trigger an update of authn services
   * @returns {void}
   */
  update: () => fetchServicesFromDiscovery()
};

const discovery = {
  authn
};

/**
 * @typedef {import("@onflow/typedefs").CurrentUser} CurrentUser
 * @typedef {import("@onflow/typedefs").CompositeSignature} CompositeSignature
 */

const isFn = d => typeof d === "function";
const NAME = "CURRENT_USER";
const UPDATED$1 = "CURRENT_USER/UPDATED";
const SNAPSHOT = "SNAPSHOT";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const DEL_CURRENT_USER = "DEL_CURRENT_USER";
const DATA = `{
  "f_type": "User",
  "f_vsn": "1.0.0",
  "addr":null,
  "cid":null,
  "loggedIn":null,
  "expiresAt":null,
  "services":[]
}`;
const getStoredUser = async storage => {
  const fallback = JSON.parse(DATA);
  const stored = await storage.get(NAME);
  if (stored != null && fallback["f_vsn"] !== stored["f_vsn"]) {
    storage.removeItem(NAME);
    return fallback;
  }
  return stored || fallback;
};
const HANDLERS$2 = {
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .INIT */ .qg]: async ctx => {
    if (typeof window === "undefined") {
      console.warn(`
        %cFCL Warning
        ============================
        "currentUser" is only available in the browser.
        For more info, please see the docs: https://docs.onflow.org/fcl/
        ============================
        `, "font-weight:bold;font-family:monospace;");
    }
    ctx.merge(JSON.parse(DATA));
    const storage = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.first(["fcl.storage", "fcl.storage.default"]);
    if (storage.can) {
      const user = await getStoredUser(storage);
      if (notExpired(user)) ctx.merge(user);
    }
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .SUBSCRIBE */ .kD]: (ctx, letter) => {
    ctx.subscribe(letter.from);
    ctx.send(letter.from, UPDATED$1, {
      ...ctx.all()
    });
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UNSUBSCRIBE */ .By]: (ctx, letter) => {
    ctx.unsubscribe(letter.from);
  },
  [SNAPSHOT]: async (ctx, letter) => {
    letter.reply({
      ...ctx.all()
    });
  },
  [SET_CURRENT_USER]: async (ctx, letter, data) => {
    ctx.merge(data);
    const storage = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.first(["fcl.storage", "fcl.storage.default"]);
    if (storage.can) storage.put(NAME, ctx.all());
    ctx.broadcast(UPDATED$1, {
      ...ctx.all()
    });
  },
  [DEL_CURRENT_USER]: async (ctx, letter) => {
    ctx.merge(JSON.parse(DATA));
    const storage = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.first(["fcl.storage", "fcl.storage.default"]);
    if (storage.can) storage.put(NAME, ctx.all());
    ctx.broadcast(UPDATED$1, {
      ...ctx.all()
    });
  }
};
const spawnCurrentUser = () => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .spawn */ .Cs)(HANDLERS$2, NAME);
function notExpired(user) {
  return user.expiresAt == null || user.expiresAt === 0 || user.expiresAt > Date.now();
}
async function getAccountProofData() {
  let accountProofDataResolver = await _onflow_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.get("fcl.accountProof.resolver");
  if (accountProofDataResolver == null) return;
  if (!isFn(accountProofDataResolver)) {
    (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
      title: "Account Proof Data Resolver must be a function",
      message: `Check fcl.accountProof.resolver configuration.
                Expected: fcl.accountProof.resolver: async () => { ... }
                Received: fcl.accountProof.resolver: ${typeof accountProofDataResolver}
                `,
      level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.warn
    });
    return;
  }
  const accountProofData = await accountProofDataResolver();
  if (accountProofData == null) return;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(typeof accountProofData.appIdentifier === "string", "appIdentifier must be a string");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(/^[0-9a-f]+$/i.test(accountProofData.nonce), "Nonce must be a hex string");
  return accountProofData;
}
const makeConfig = async _ref => {
  let {
    discoveryAuthnInclude
  } = _ref;
  return {
    client: {
      discoveryAuthnInclude,
      clientServices: await makeDiscoveryServices(),
      supportedStrategies: serviceRegistry.getStrategies()
    }
  };
};

/**
 * @description - Authenticate a user
 * @param {object} [opts] - Options
 * @param {object} [opts.service] - Optional service to use for authentication
 * @param {boolean} [opts.redir=false] - Optional flag to allow window to stay open after authentication
 * @returns {Promise<CurrentUser>} - User object
 */
async function authenticate$1() {
  let {
    service,
    redir = false
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (service && !service?.provider?.is_installed && service?.provider?.requires_install) {
    window.location.href = service?.provider?.install_link;
    return;
  }
  return new Promise(async (resolve, reject) => {
    spawnCurrentUser();
    const opts = {
      redir
    };
    const user = await snapshot();
    const discoveryService = await getDiscoveryService(service);
    const refreshService = serviceOfType(user.services, "authn-refresh");
    let accountProofData;
    if (user.loggedIn) {
      if (refreshService) {
        try {
          const response = await execService({
            service: refreshService,
            msg: accountProofData,
            opts
          });
          (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .send */ .lW)(NAME, SET_CURRENT_USER, await buildUser(response));
        } catch (error) {
          (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
            title: `${error.name} Could not refresh wallet authentication.`,
            message: error.message,
            level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.error
          });
        } finally {
          return resolve(await snapshot());
        }
      } else {
        return resolve(user);
      }
    }
    try {
      accountProofData = await getAccountProofData();
    } catch (error) {
      (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
        title: `${error.name} On Authentication: Could not resolve account proof data.`,
        message: error.message,
        level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.error
      });
      return reject(error);
    }
    try {
      const response = await execService({
        service: discoveryService,
        msg: accountProofData,
        config: await makeConfig(discoveryService),
        opts
      });
      (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .send */ .lW)(NAME, SET_CURRENT_USER, await buildUser(response));
    } catch (error) {
      (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
        title: `${error} On Authentication`,
        message: error,
        level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.error
      });
    } finally {
      resolve(await snapshot());
    }
  });
}

/**
 * @description - Unauthenticate a user
 * @returns {void}
 */
function unauthenticate$1() {
  spawnCurrentUser();
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .send */ .lW)(NAME, DEL_CURRENT_USER);
}
const normalizePreAuthzResponse = authz => ({
  f_type: "PreAuthzResponse",
  f_vsn: "1.0.0",
  proposer: (authz || {}).proposer,
  payer: (authz || {}).payer || [],
  authorization: (authz || {}).authorization || []
});
function resolvePreAuthz(authz) {
  const resp = normalizePreAuthzResponse(authz);
  const axs = [];
  if (resp.proposer != null) axs.push(["PROPOSER", resp.proposer]);
  for (let az of resp.payer || []) axs.push(["PAYER", az]);
  for (let az of resp.authorization || []) axs.push(["AUTHORIZER", az]);
  var result = axs.map(_ref2 => {
    let [role, az] = _ref2;
    return {
      tempId: [az.identity.address, az.identity.keyId].join("|"),
      addr: az.identity.address,
      keyId: az.identity.keyId,
      signingFunction(signable) {
        return execService({
          service: az,
          msg: signable
        });
      },
      role: {
        proposer: role === "PROPOSER",
        payer: role === "PAYER",
        authorizer: role === "AUTHORIZER"
      }
    };
  });
  return result;
}

/**
 * @description
 * Produces the needed authorization details for the current user to submit transactions to Flow
 * It defines a signing function that connects to a user's wallet provider to produce signatures to submit transactions.
 * 
 * @param {object} account - Account object
 * @returns {Promise<object>} - Account object with signing function
 */
async function authorization(account) {
  spawnCurrentUser();
  return {
    ...account,
    tempId: "CURRENT_USER",
    async resolve(account, preSignable) {
      const user = await authenticate$1({
        redir: true
      });
      const authz = serviceOfType(user.services, "authz");
      const preAuthz = serviceOfType(user.services, "pre-authz");
      if (preAuthz) return resolvePreAuthz(await execService({
        service: preAuthz,
        msg: preSignable
      }));
      if (authz) {
        let windowRef;
        if (isMobile() && authz.method === "WC/RPC") {
          windowRef = window.open("", "_blank");
        }
        return {
          ...account,
          tempId: "CURRENT_USER",
          resolve: null,
          addr: (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .sansPrefix */ .CH)(authz.identity.address),
          keyId: authz.identity.keyId,
          sequenceNum: null,
          signature: null,
          async signingFunction(signable) {
            return normalizeCompositeSignature(await execService({
              service: authz,
              msg: signable,
              opts: {
                includeOlderJsonRpcCall: true,
                windowRef
              }
            }));
          }
        };
      }
      throw new Error("No Authz or PreAuthz Service configured for CURRENT_USER");
    }
  };
}

/**
 * @description
 * The callback passed to subscribe will be called when the user authenticates and un-authenticates, making it easy to update the UI accordingly.
 * 
 * @param {Function} callback - Callback function
 * @returns {Function} - Unsubscribe function
 */
function subscribe(callback) {
  spawnCurrentUser();
  const EXIT = "@EXIT";
  const self = (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .spawn */ .Cs)(async ctx => {
    ctx.send(NAME, _onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .SUBSCRIBE */ .kD);
    while (1) {
      const letter = await ctx.receive();
      if (letter.tag === EXIT) {
        ctx.send(NAME, _onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UNSUBSCRIBE */ .By);
        return;
      }
      callback(letter.data);
    }
  });
  return () => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .send */ .lW)(self, EXIT);
}

/**
 * @description - Gets the current user
 * @returns {Promise<CurrentUser>} - User object
 */
function snapshot() {
  spawnCurrentUser();
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .send */ .lW)(NAME, SNAPSHOT, null, {
    expectReply: true,
    timeout: 0
  });
}

/**
 * @description - Resolves the current user as an argument
 * @returns {Promise<Function>}
 */
async function resolveArgument() {
  const {
    addr
  } = await authenticate$1();
  return (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .arg */ .R9)((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(addr), _onflow_types__WEBPACK_IMPORTED_MODULE_3__.Address);
}
const makeSignable = msg => {
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(/^[0-9a-f]+$/i.test(msg), "Message must be a hex string");
  return {
    message: msg
  };
};

/**
 * @description - A method to use allowing the user to personally sign data via FCL Compatible Wallets/Services.
 * @param {string} msg - Message to sign
 * @returns {Promise<CompositeSignature[]>} - Array of CompositeSignatures
 */
async function signUserMessage(msg) {
  spawnCurrentUser();
  const user = await authenticate$1({
    redir: true
  });
  const signingService = serviceOfType(user.services, "user-signature");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(signingService, "Current user must have authorized a signing service.");
  try {
    const response = await execService({
      service: signingService,
      msg: makeSignable(msg)
    });
    if (Array.isArray(response)) {
      return response.map(compSigs => normalizeCompositeSignature(compSigs));
    } else {
      return [normalizeCompositeSignature(response)];
    }
  } catch (error) {
    return error;
  }
}
let currentUser = () => {
  return {
    authenticate: authenticate$1,
    unauthenticate: unauthenticate$1,
    authorization,
    signUserMessage,
    subscribe,
    snapshot,
    resolveArgument
  };
};
currentUser.authenticate = authenticate$1;
currentUser.unauthenticate = unauthenticate$1;
currentUser.authorization = authorization;
currentUser.signUserMessage = signUserMessage;
currentUser.subscribe = subscribe;
currentUser.snapshot = snapshot;
currentUser.resolveArgument = resolveArgument;

/**
 * @description
 * Allows you to submit transactions to the blockchain to potentially mutate the state.
 *
 *  @param {object} opts - Mutation Options and configuration
 *  @param {string} opts.cadence - Cadence Transaction used to mutate Flow
 *  @param {import("../fcl").ArgsFn} [opts.args] - Arguments passed to cadence transaction
 *  @param {object} [opts.template] - Interaction Template for a transaction
 *  @param {number} [opts.limit] - Compute Limit for transaction
 *  @returns {Promise<string>} Transaction Id
 *
 * @example
 *    fcl.mutate({
 *      cadence: `
 *        transaction(a: Int, b: Int, c: Address) {
 *          prepare(acct: AuthAccount) {
 *            log(acct)
 *            log(a)
 *            log(b)
 *            log(c)
 *          }
 *        }
 *      `,
 *      args: (arg, t) => [
 *        arg(6, t.Int),
 *        arg(7, t.Int),
 *        arg("0xba1132bc08f82fe2", t.Address),
 *      ],
 *    })
 *
 *
 *  Options:
 *    type Options = {
 *      template: InteractionTemplate | String // InteractionTemplate or url to one
 *      cadence: String!,
 *      args: (arg, t) => Array<Arg>,
 *      limit: Number,
 *      authz: AuthzFn, // will overload the trinity of signatory roles
 *      proposer: AuthzFn, // will overload the proposer signatory role
 *      payer: AuthzFn, // will overload the payer signatory role
 *      authorizations: [AuthzFn], // an array of authorization functions used as authorizations signatory roles
 *    }
 */
async function mutate() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var txid;
  try {
    await preMutate(opts);
    opts = await prepTemplateOpts(opts);

    // Allow for a config to overwrite the authorization function.
    // prettier-ignore
    const authz = await _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc().get("fcl.authz", currentUser().authorization);
    txid = _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc().overload(opts.dependencies || {}, async () =>
    // prettier-ignore
    _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .send */ .Jd([_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .transaction */ .PS(opts.cadence), _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .args */ .WC(normalizeArgs(opts.args || [])), opts.limit && isNumber(opts.limit) && _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .limit */ .b9(opts.limit),
    // opts.proposer > opts.authz > authz
    _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .proposer */ .iB(opts.proposer || opts.authz || authz),
    // opts.payer > opts.authz > authz
    _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .payer */ .$C(opts.payer || opts.authz || authz),
    // opts.authorizations > [opts.authz > authz]
    _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .authorizations */ .KX(opts.authorizations || [opts.authz || authz])]).then(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx));
    return txid;
  } catch (error) {
    throw error;
  }
}

/**
 * @description
 * Listens for messages from FCL
 * 
 * @param {string} messageType - Message type
 * @param {Function} cb - Callback function
 * @returns {Function} - Function to remove event listener
 */
const onMessageFromFCL = function (messageType) {
  let cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
  const buildData = data => {
    if (data.deprecated) console.warn("DEPRECATION NOTICE", data.deprecated.message);
    delete data?.body?.interaction;
    return data;
  };
  const internal = e => {
    const {
      data
    } = e;
    if (typeof data !== "object") return;
    if (typeof data == null) return;
    if (data.type !== messageType) return;
    cb(buildData(data));
  };
  window.addEventListener("message", internal);
  return () => window.removeEventListener("message", internal);
};

/**
 * @description
 * Sends message to FCL window
 * 
 * @param {string} type - Message type
 * @param {object} msg - Message object
 * @returns {void}
 * 
 * @example
 * sendMsgToFCL("FCL:VIEW:RESPONSE", {
 *    f_type: "PollingResponse",
 *    f_vsn: "1.0.0",
 *    status: "APPROVED",
 *    reason: null,
 *    data: data,
 *  })
 */
const sendMsgToFCL = function (type) {
  let msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (window.location !== window.parent.location) {
    window.parent.postMessage({
      ...msg,
      type
    }, "*");
  } else if (window.opener) {
    window.opener.postMessage({
      ...msg,
      type
    }, "*");
  } else {
    throw new Error("Unable to communicate with parent FCL instance");
  }
};

/**
 * @description
 * Listens for "FCL:VIEW:READY:RESPONSE" and sends "FCL:VIEW:READY"
 * 
 * @param {Function} cb - Callback function
 * @param {object} msg - Message object
 * @returns {void}
 */
const ready = function (cb) {
  onMessageFromFCL("FCL:VIEW:READY:RESPONSE", cb);
  sendMsgToFCL("FCL:VIEW:READY");
};

/**
 * @description
 * Sends "FCL:VIEW:CLOSE"
 * 
 * @returns {void}
 */
const close = () => {
  sendMsgToFCL("FCL:VIEW:CLOSE");
};

/**
 * @description
 * Sends "FCL:VIEW:RESPONSE" with status "APPROVED"
 * 
 * @param {object} data - Data object
 * @returns {void}
 */
const approve = data => {
  sendMsgToFCL("FCL:VIEW:RESPONSE", {
    f_type: "PollingResponse",
    f_vsn: "1.0.0",
    status: "APPROVED",
    reason: null,
    data: data
  });
};

/**
 * @description
 * Sends "FCL:VIEW:RESPONSE" with status "DECLINED"
 * 
 * @param {string} reason - Reason for declining
 * @returns {void}
 */
const decline = reason => {
  sendMsgToFCL("FCL:VIEW:RESPONSE", {
    f_type: "PollingResponse",
    f_vsn: "1.0.0",
    status: "DECLINED",
    reason: reason,
    data: null
  });
};

/**
 * @description
 * Sends "FCL:VIEW:RESPONSE" with status "REDIRECT"
 * 
 * @param {object} data - Data object
 * @returns {void}
 */
const redirect = data => {
  sendMsgToFCL("FCL:VIEW:RESPONSE", {
    f_type: "PollingResponse",
    f_vsn: "1.0.0",
    status: "REDIRECT",
    reason: null,
    data: data
  });
};

/**
 * @description
 * Constructs a new CompositeSignature instance.
 *
 * @param {string} addr - Flow Address
 * @param {number} keyId - Key ID
 * @param {string} signature - Signature as a hex string
 */
function CompositeSignature(addr, keyId, signature) {
  this.f_type = COMPOSITE_SIGNATURE_PRAGMA.f_type;
  this.f_vsn = COMPOSITE_SIGNATURE_PRAGMA.f_vsn;
  this.addr = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(addr);
  this.keyId = Number(keyId);
  this.signature = signature;
}

const rightPaddedHexBuffer = (value, pad) => _onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .Buffer */ .lW.from(value.padEnd(pad * 2, "0"), "hex");
const leftPaddedHexBuffer = (value, pad) => _onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .Buffer */ .lW.from(value.padStart(pad * 2, "0"), "hex");
const addressBuffer = addr => leftPaddedHexBuffer(addr, 8);
const nonceBuffer = nonce => _onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .Buffer */ .lW.from(nonce, "hex");
const encodeAccountProof = function (_ref) {
  let {
    address,
    nonce,
    appIdentifier
  } = _ref;
  let includeDomainTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(address, "Encode Message For Provable Authn Error: address must be defined");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(nonce, "Encode Message For Provable Authn Error: nonce must be defined");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(appIdentifier, "Encode Message For Provable Authn Error: appIdentifier must be defined");
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(nonce.length >= 64, "Encode Message For Provable Authn Error: nonce must be minimum of 32 bytes");
  const ACCOUNT_PROOF_DOMAIN_TAG = rightPaddedHexBuffer(_onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .Buffer */ .lW.from("FCL-ACCOUNT-PROOF-V0.0").toString("hex"), 32);
  if (includeDomainTag) {
    return _onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .Buffer */ .lW.concat([ACCOUNT_PROOF_DOMAIN_TAG, (0,_onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .encode */ .cv)([appIdentifier, addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .sansPrefix */ .CH)(address)), nonceBuffer(nonce)])]).toString("hex");
  }
  return (0,_onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .encode */ .cv)([appIdentifier, addressBuffer((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .sansPrefix */ .CH)(address)), nonceBuffer(nonce)]).toString("hex");
};

function injectExtService(service) {
  if (service.type === "authn" && service.endpoint != null) {
    if (!Array.isArray(window.fcl_extensions)) {
      window.fcl_extensions = [];
    }
    window.fcl_extensions.push(service);
  } else {
    console.warn("Authn service is required");
  }
}

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sendMsgToFCL: sendMsgToFCL,
  ready: ready,
  close: close,
  approve: approve,
  decline: decline,
  redirect: redirect,
  onMessageFromFCL: onMessageFromFCL,
  encodeMessageFromSignable: _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .encodeMessageFromSignable */ .Oq,
  CompositeSignature: CompositeSignature,
  encodeAccountProof: encodeAccountProof,
  injectExtService: injectExtService
});

const ACCOUNT_PROOF = "ACCOUNT_PROOF";
const USER_SIGNATURE = "USER_SIGNATURE";
const validateArgs = args => {
  if (args.appIdentifier) {
    const {
      appIdentifier,
      address,
      nonce,
      signatures
    } = args;
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isString(appIdentifier), "verifyAccountProof({ appIdentifier }) -- appIdentifier must be a string");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isString(address) && (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .sansPrefix */ .CH)(address).length === 16, "verifyAccountProof({ address }) -- address must be a valid address");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(/^[0-9a-f]+$/i.test(nonce), "nonce must be a hex string");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(Array.isArray(signatures) && signatures.every((sig, i, arr) => sig.f_type === "CompositeSignature"), "Must include an Array of CompositeSignatures to verify");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(signatures.map(cs => cs.addr).every((addr, i, arr) => addr === arr[0]), "User signatures to be verified must be from a single account address");
    return true;
  } else {
    const {
      message,
      address,
      compSigs
    } = args;
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(/^[0-9a-f]+$/i.test(message), "Signed message must be a hex string");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(isString(address) && (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .sansPrefix */ .CH)(address).length === 16, "verifyUserSignatures({ address }) -- address must be a valid address");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(Array.isArray(compSigs) && compSigs.every((sig, i, arr) => sig.f_type === "CompositeSignature"), "Must include an Array of CompositeSignatures to verify");
    (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(compSigs.map(cs => cs.addr).every((addr, i, arr) => addr === arr[0]), "User signatures to be verified must be from a single account address");
    return true;
  }
};

// TODO: pass in option for contract but we're connected to testnet
// log address + network -> in sync?
const getVerifySignaturesScript = async (sig, opts) => {
  const verifyFunction = sig === "ACCOUNT_PROOF" ? "verifyAccountProofSignatures" : "verifyUserSignatures";
  let network = await getChainId();
  let fclCryptoContract;
  (0,_onflow_util_invariant__WEBPACK_IMPORTED_MODULE_11__/* .invariant */ .k)(opts.fclCryptoContract || network === "testnet" || network === "mainnet", "${verifyFunction}({ fclCryptoContract }) -- config.flow.network must be specified (testnet || mainnet) or contract address provided via opts.fclCryptoContract");
  if (opts.fclCryptoContract) {
    fclCryptoContract = opts.fclCryptoContract;
  } else {
    fclCryptoContract = network === "testnet" ? "0x74daa6f9c7ef24b1" : "0xb4b82a1c9d21d284";
  }
  return `
      import FCLCrypto from ${fclCryptoContract}

      pub fun main(
          address: Address, 
          message: String, 
          keyIndices: [Int], 
          signatures: [String]
      ): Bool {
        return FCLCrypto.${verifyFunction}(address: address, message: message, keyIndices: keyIndices, signatures: signatures)
      }
    `;
};

/**
 * @description
 * Verify a valid account proof signature or signatures for an account on Flow.
 *
 * @param {string} appIdentifier - A message string in hexadecimal format
 * @param {object} accountProofData - An object consisting of address, nonce, and signatures
 * @param {string} accountProofData.address - A Flow account address
 * @param {string} accountProofData.nonce - A random string in hexadecimal format (minimum 32 bytes in total, i.e 64 hex characters)
 * @param {object[]} accountProofData.signatures - An array of composite signatures to verify
 * @param {object} [opts={}] - Options object
 * @param {string} opts.fclCryptoContract - An optional override Flow account address where the FCLCrypto contract is deployed
 * @returns {Promise<boolean>} - Returns true if the signature is valid, false otherwise
 *
 * @example
 *
 *  const accountProofData = {
 *   address: "0x123",
 *   nonce: "F0123"
 *   signatures: [{f_type: "CompositeSignature", f_vsn: "1.0.0", addr: "0x123", keyId: 0, signature: "abc123"}],
 *  }
 *
 *  const isValid = await fcl.AppUtils.verifyAccountProof(
 *    "AwesomeAppId",
 *    accountProofData,
 *    {fclCryptoContract}
 *  )
 */
async function verifyAccountProof(appIdentifier, _ref) {
  let {
    address,
    nonce,
    signatures
  } = _ref;
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  validateArgs({
    appIdentifier,
    address,
    nonce,
    signatures
  });
  const message = encodeAccountProof({
    address,
    nonce,
    appIdentifier
  }, false);
  let signaturesArr = [];
  let keyIndices = [];
  for (const el of signatures) {
    signaturesArr.push(el.signature);
    keyIndices.push(el.keyId.toString());
  }
  return query({
    cadence: await getVerifySignaturesScript(ACCOUNT_PROOF, opts),
    args: (arg, t) => [arg((0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(address), t.Address), arg(message, t.String), arg(keyIndices, t.Array(t.Int)), arg(signaturesArr, t.Array(t.String))]
  });
}

/**
 * @description
 * Verify a valid signature/s for an account on Flow.
 *
 * @param {string} message - A message string in hexadecimal format
 * @param {Array} compSigs - An array of Composite Signatures
 * @param {string} compSigs[].addr - The account address
 * @param {number} compSigs[].keyId - The account keyId
 * @param {string} compSigs[].signature - The signature to verify
 * @param {object} [opts={}] - Options object
 * @param {string} opts.fclCryptoContract - An optional override of Flow account address where the FCLCrypto contract is deployed
 * @returns {boolean} - Returns true if the signature is valid, false otherwise
 *
 * @example
 *
 *  const isValid = await fcl.AppUtils.verifyUserSignatures(
 *    Buffer.from('FOO').toString("hex"),
 *    [{f_type: "CompositeSignature", f_vsn: "1.0.0", addr: "0x123", keyId: 0, signature: "abc123"}],
 *    {fclCryptoContract}
 *  )
 */
async function verifyUserSignatures$1(message, compSigs) {
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const address = (0,_onflow_util_address__WEBPACK_IMPORTED_MODULE_5__/* .withPrefix */ .dq)(compSigs[0].addr);
  validateArgs({
    message,
    address,
    compSigs
  });
  let signaturesArr = [];
  let keyIndices = [];
  for (const el of compSigs) {
    signaturesArr.push(el.signature);
    keyIndices.push(el.keyId.toString());
  }
  return query({
    cadence: await getVerifySignaturesScript(USER_SIGNATURE, opts),
    args: (arg, t) => [arg(address, t.Address), arg(message, t.String), arg(keyIndices, t.Array(t.Int)), arg(signaturesArr, t.Array(t.String))]
  });
}

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  verifyAccountProof: verifyAccountProof,
  verifyUserSignatures: verifyUserSignatures$1
});

/**
 * Verify a valid signature/s for an account on Flow.
 *
 * @deprecated since version '1.0.0-alpha.0', use AppUtils.verifyUserSignatures instead
 *
 */
const verifyUserSignatures = _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c.deprecate({
  pkg: "FCL",
  subject: "fcl.verifyUserSignatures()",
  message: "Please use fcl.AppUtils.verifyUserSignatures()",
  callback: function verifyUserSignatures(message, compSigs) {
    return verifyUserSignatures$1(message, compSigs);
  }
});

const serialize = async function () {
  let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const resolveFunction = await _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc.first(["sdk.resolve"], opts.resolve || _blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .resolve */ .DB);
  if (Array.isArray(args)) args = await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .pipe */ .zG)((0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .interaction */ .Tl)(), args);
  return JSON.stringify((0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .createSignableVoucher */ .c0)(await resolveFunction(args)), null, 2);
};

/**
 * @typedef {import("@onflow/typedefs").Transaction} Transaction
 */

/**
 * @typedef {import("@onflow/typedefs").TransactionStatus} TransactionStatus
 */

const RATE$1 = 2500;
const POLL = "POLL";
const fetchTxStatus = async transactionId => {
  return (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .send */ .Jd)([(0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .getTransactionStatus */ .Lv)(transactionId)]).then(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx);
};
const isExpired = tx => tx.status === 5;
const isSealed = tx => tx.status >= 4;
const isExecuted = tx => tx.status >= 3;
const isFinalized = tx => tx.status >= 2;
const isPending = tx => tx.status >= 1;
const isUnknown = tx => tx.status >= 0;
const isDiff = (cur, next) => {
  return JSON.stringify(cur) !== JSON.stringify(next);
};
const HANDLERS$1 = {
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .INIT */ .qg]: async ctx => {
    ctx.sendSelf(POLL);
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .SUBSCRIBE */ .kD]: (ctx, letter) => {
    ctx.subscribe(letter.from);
    ctx.send(letter.from, _onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UPDATED */ .SH, ctx.all());
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UNSUBSCRIBE */ .By]: (ctx, letter) => {
    ctx.unsubscribe(letter.from);
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .SNAPSHOT */ .kT]: async (ctx, letter) => {
    letter.reply(ctx.all());
  },
  [POLL]: async ctx => {
    let tx;
    try {
      tx = await fetchTxStatus(ctx.self());
    } catch (e) {
      return ctx.fatalError(e);
    }
    if (!isSealed(tx)) setTimeout(() => ctx.sendSelf(POLL), RATE$1);
    if (isDiff(ctx.all(), tx)) ctx.broadcast(_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UPDATED */ .SH, tx);
    ctx.merge(tx);
  }
};
const scoped = transactionId => {
  if (typeof transactionId === "object") transactionId = transactionId.transactionId;
  if (transactionId == null) throw new Error("transactionId required");
  return transactionId;
};
const spawnTransaction = transactionId => {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .spawn */ .Cs)(HANDLERS$1, scoped(transactionId));
};

/**
 * @callback SubscriptionCallback
 * @param {TransactionStatus} txStatus
 * @returns {void}
 */

/**
 * Provides methods for interacting with a transaction
 * 
 * @param {string} transactionId - The transaction ID
 * @returns {{
 *    snapshot: function(): Promise<TransactionStatus>,
 *    subscribe: function(SubscriptionCallback): function(): void,
 *    onceFinalized: function(): Promise<TransactionStatus>,
 *    onceExecuted: function(): Promise<TransactionStatus>,
 *    onceSealed: function(): Promise<TransactionStatus>
 * }}
 */
function transaction(transactionId) {
  function snapshot() {
    return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .snapshoter */ .L6)(transactionId, spawnTransaction);
  }
  function subscribe(callback) {
    return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .subscriber */ .qP)(scoped(transactionId), spawnTransaction, callback);
  }
  function once(predicate) {
    return function innerOnce() {
      let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const suppress = opts.suppress || false;
      return new Promise((resolve, reject) => {
        const unsub = subscribe((txStatus, error) => {
          if ((error || txStatus.statusCode) && !suppress) {
            reject(error || txStatus.errorMessage);
            unsub();
          } else if (predicate(txStatus)) {
            resolve(txStatus);
            unsub();
          }
        });
      });
    };
  }
  return {
    snapshot,
    subscribe,
    onceFinalized: once(isFinalized),
    onceExecuted: once(isExecuted),
    onceSealed: once(isSealed)
  };
}
transaction.isUnknown = isUnknown;
transaction.isPending = isPending;
transaction.isFinalized = isFinalized;
transaction.isExecuted = isExecuted;
transaction.isSealed = isSealed;
transaction.isExpired = isExpired;

const RATE = 10000;
const UPDATED = "UPDATED";
const TICK = "TICK";
const HIGH_WATER_MARK = "hwm";
const scheduleTick = async ctx => {
  return setTimeout(() => ctx.sendSelf(TICK), await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc)().get("fcl.eventPollRate", RATE));
};
const HANDLERS = {
  [TICK]: async ctx => {
    if (!ctx.hasSubs()) return;
    let hwm = ctx.get(HIGH_WATER_MARK);
    if (hwm == null) {
      ctx.put(HIGH_WATER_MARK, await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .block */ .Ge)());
      ctx.put(TICK, await scheduleTick(ctx));
    } else {
      let next = await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .block */ .Ge)();
      ctx.put(HIGH_WATER_MARK, next);
      if (hwm.height < next.height) {
        const data = await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .send */ .Jd)([(0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .getEventsAtBlockHeightRange */ .oL)(ctx.self(), hwm.height + 1, next.height)]).then(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx);
        for (let d of data) ctx.broadcast(UPDATED, d.data);
      }
      ctx.put(TICK, await scheduleTick(ctx));
    }
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .SUBSCRIBE */ .kD]: async (ctx, letter) => {
    if (!ctx.hasSubs()) {
      ctx.put(TICK, await scheduleTick(ctx));
    }
    ctx.subscribe(letter.from);
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .UNSUBSCRIBE */ .By]: (ctx, letter) => {
    ctx.unsubscribe(letter.from);
    if (!ctx.hasSubs()) {
      clearTimeout(ctx.get(TICK));
      ctx.delete(TICK);
      ctx.delete(HIGH_WATER_MARK);
    }
  }
};
const spawnEvents = key => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .spawn */ .Cs)(HANDLERS, key);

/**
 * @typedef {import("@onflow/typedefs").Event} Event
 */

/**
 * @typedef {object} SubscribeObject
 * @property {Function} subscribe - The subscribe function.
 */

/**
 * @callback SubscriptionCallback
 * @returns {Event}
 */

/**
 * @description - Subscribe to events
 * @param {string} key - A valid event name
 * @returns {SubscribeObject}
 * 
 * @example
 * import * as fcl from "@blocto/fcl"
 * fcl.events(eventName).subscribe((event) => console.log(event))
 */
function events(key) {
  return {
    /**
     * @description - Subscribe to events
     * @param {Function} callback - The callback function
     * @returns {SubscriptionCallback}
     */
    subscribe: callback => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_6__/* .subscriber */ .qP)(key, spawnEvents, callback)
  };
}

var sha3 = {};

var sponge = {};

var permute = {};

var chi = {};

var copy = function copy(I, i) {
  return function (O, o) {
    var oi = o * 2;
    var ii = i * 2;
    O[oi] = I[ii];
    O[oi + 1] = I[ii + 1];
  };
};
var copy_1 = copy;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _copy = _interopRequireDefault(copy_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var chi = function chi(_ref) {
    var A = _ref.A,
      C = _ref.C;
    for (var y = 0; y < 25; y += 5) {
      for (var x = 0; x < 5; x++) {
        (0, _copy["default"])(A, y + x)(C, x);
      }
      for (var _x = 0; _x < 5; _x++) {
        var xy = (y + _x) * 2;
        var x1 = (_x + 1) % 5 * 2;
        var x2 = (_x + 2) % 5 * 2;
        A[xy] ^= ~C[x1] & C[x2];
        A[xy + 1] ^= ~C[x1 + 1] & C[x2 + 1];
      }
    }
  };
  var _default = chi;
  exports["default"] = _default;
})(chi);

var iota = {};

var roundConstants = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var ROUND_CONSTANTS = new Uint32Array([0, 1, 0, 32898, 2147483648, 32906, 2147483648, 2147516416, 0, 32907, 0, 2147483649, 2147483648, 2147516545, 2147483648, 32777, 0, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 2147483648, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 0, 32778, 2147483648, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 0, 2147483649, 2147483648, 2147516424]);
  var _default = ROUND_CONSTANTS;
  exports["default"] = _default;
})(roundConstants);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _roundConstants = _interopRequireDefault(roundConstants);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var iota = function iota(_ref) {
    var A = _ref.A,
      roundIndex = _ref.roundIndex;
    var i = roundIndex * 2;
    A[0] ^= _roundConstants["default"][i];
    A[1] ^= _roundConstants["default"][i + 1];
  };
  var _default = iota;
  exports["default"] = _default;
})(iota);

var rhoPi = {};

var piShuffles = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var PI_SHUFFLES = [10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1];
  var _default = PI_SHUFFLES;
  exports["default"] = _default;
})(piShuffles);

var rhoOffsets = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var RHO_OFFSETS = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44];
  var _default = RHO_OFFSETS;
  exports["default"] = _default;
})(rhoOffsets);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _piShuffles = _interopRequireDefault(piShuffles);
  var _rhoOffsets = _interopRequireDefault(rhoOffsets);
  var _copy = _interopRequireDefault(copy_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var rhoPi = function rhoPi(_ref) {
    var A = _ref.A,
      C = _ref.C,
      W = _ref.W;
    (0, _copy["default"])(A, 1)(W, 0);
    var H = 0;
    var L = 0;
    var Wi = 0;
    var ri = 32;
    for (var i = 0; i < 24; i++) {
      var j = _piShuffles["default"][i];
      var r = _rhoOffsets["default"][i];
      (0, _copy["default"])(A, j)(C, 0);
      H = W[0];
      L = W[1];
      ri = 32 - r;
      Wi = r < 32 ? 0 : 1;
      W[Wi] = H << r | L >>> ri;
      W[(Wi + 1) % 2] = L << r | H >>> ri;
      (0, _copy["default"])(W, 0)(A, j);
      (0, _copy["default"])(C, 0)(W, 0);
    }
  };
  var _default = rhoPi;
  exports["default"] = _default;
})(rhoPi);

var theta = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _copy = _interopRequireDefault(copy_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var theta = function theta(_ref) {
    var A = _ref.A,
      C = _ref.C,
      D = _ref.D,
      W = _ref.W;
    var H = 0;
    var L = 0;
    for (var x = 0; x < 5; x++) {
      var x20 = x * 2;
      var x21 = (x + 5) * 2;
      var x22 = (x + 10) * 2;
      var x23 = (x + 15) * 2;
      var x24 = (x + 20) * 2;
      C[x20] = A[x20] ^ A[x21] ^ A[x22] ^ A[x23] ^ A[x24];
      C[x20 + 1] = A[x20 + 1] ^ A[x21 + 1] ^ A[x22 + 1] ^ A[x23 + 1] ^ A[x24 + 1];
    }
    for (var _x = 0; _x < 5; _x++) {
      (0, _copy["default"])(C, (_x + 1) % 5)(W, 0);
      H = W[0];
      L = W[1];
      W[0] = H << 1 | L >>> 31;
      W[1] = L << 1 | H >>> 31;
      D[_x * 2] = C[(_x + 4) % 5 * 2] ^ W[0];
      D[_x * 2 + 1] = C[(_x + 4) % 5 * 2 + 1] ^ W[1];
      for (var y = 0; y < 25; y += 5) {
        A[(y + _x) * 2] ^= D[_x * 2];
        A[(y + _x) * 2 + 1] ^= D[_x * 2 + 1];
      }
    }
  };
  var _default = theta;
  exports["default"] = _default;
})(theta);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _chi = _interopRequireDefault(chi);
  var _iota = _interopRequireDefault(iota);
  var _rhoPi = _interopRequireDefault(rhoPi);
  var _theta = _interopRequireDefault(theta);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var permute = function permute() {
    var C = new Uint32Array(10);
    var D = new Uint32Array(10);
    var W = new Uint32Array(2);
    return function (A) {
      for (var roundIndex = 0; roundIndex < 24; roundIndex++) {
        (0, _theta["default"])({
          A: A,
          C: C,
          D: D,
          W: W
        });
        (0, _rhoPi["default"])({
          A: A,
          C: C,
          W: W
        });
        (0, _chi["default"])({
          A: A,
          C: C
        });
        (0, _iota["default"])({
          A: A,
          roundIndex: roundIndex
        });
      }
      C.fill(0);
      D.fill(0);
      W.fill(0);
    };
  };
  var _default = permute;
  exports["default"] = _default;
})(permute);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _buffer = buffer__WEBPACK_IMPORTED_MODULE_9__;
  var _permute = _interopRequireDefault(permute);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var xorWords = function xorWords(I, O) {
    for (var i = 0; i < I.length; i += 8) {
      var o = i / 4;
      O[o] ^= I[i + 7] << 24 | I[i + 6] << 16 | I[i + 5] << 8 | I[i + 4];
      O[o + 1] ^= I[i + 3] << 24 | I[i + 2] << 16 | I[i + 1] << 8 | I[i];
    }
    return O;
  };
  var readWords = function readWords(I, O) {
    for (var o = 0; o < O.length; o += 8) {
      var i = o / 4;
      O[o] = I[i + 1];
      O[o + 1] = I[i + 1] >>> 8;
      O[o + 2] = I[i + 1] >>> 16;
      O[o + 3] = I[i + 1] >>> 24;
      O[o + 4] = I[i];
      O[o + 5] = I[i] >>> 8;
      O[o + 6] = I[i] >>> 16;
      O[o + 7] = I[i] >>> 24;
    }
    return O;
  };
  var Sponge = function Sponge(_ref) {
    var _this = this;
    var capacity = _ref.capacity,
      padding = _ref.padding;
    var keccak = (0, _permute["default"])();
    var stateSize = 200;
    var blockSize = capacity / 8;
    var queueSize = stateSize - capacity / 4;
    var queueOffset = 0;
    var state = new Uint32Array(stateSize / 4);
    var queue = _buffer.Buffer.allocUnsafe(queueSize);
    this.absorb = function (buffer) {
      for (var i = 0; i < buffer.length; i++) {
        queue[queueOffset] = buffer[i];
        queueOffset += 1;
        if (queueOffset >= queueSize) {
          xorWords(queue, state);
          keccak(state);
          queueOffset = 0;
        }
      }
      return _this;
    };
    this.squeeze = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = {
        buffer: options.buffer || _buffer.Buffer.allocUnsafe(blockSize),
        padding: options.padding || padding,
        queue: _buffer.Buffer.allocUnsafe(queue.length),
        state: new Uint32Array(state.length)
      };
      queue.copy(output.queue);
      for (var i = 0; i < state.length; i++) {
        output.state[i] = state[i];
      }
      output.queue.fill(0, queueOffset);
      output.queue[queueOffset] |= output.padding;
      output.queue[queueSize - 1] |= 128;
      xorWords(output.queue, output.state);
      for (var offset = 0; offset < output.buffer.length; offset += queueSize) {
        keccak(output.state);
        readWords(output.state, output.buffer.slice(offset, offset + queueSize));
      }
      return output.buffer;
    };
    this.reset = function () {
      queue.fill(0);
      state.fill(0);
      queueOffset = 0;
      return _this;
    };
    return this;
  };
  var _default = Sponge;
  exports["default"] = _default;
})(sponge);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.SHAKE = exports.SHA3Hash = exports.SHA3 = exports.Keccak = void 0;
  var _buffer = buffer__WEBPACK_IMPORTED_MODULE_9__;
  var _sponge = _interopRequireDefault(sponge);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var createHash = function createHash(_ref) {
    var allowedSizes = _ref.allowedSizes,
      defaultSize = _ref.defaultSize,
      padding = _ref.padding;
    return function Hash() {
      var _this = this;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
      if (!this || this.constructor !== Hash) {
        return new Hash(size);
      }
      if (allowedSizes && !allowedSizes.includes(size)) {
        throw new Error("Unsupported hash length");
      }
      var sponge = new _sponge["default"]({
        capacity: size
      });
      this.update = function (input) {
        var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
        if (_buffer.Buffer.isBuffer(input)) {
          sponge.absorb(input);
          return _this;
        }
        if (typeof input === "string") {
          return _this.update(_buffer.Buffer.from(input, encoding));
        }
        throw new TypeError("Not a string or buffer");
      };
      this.digest = function () {
        var formatOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "binary";
        var options = typeof formatOrOptions === "string" ? {
          format: formatOrOptions
        } : formatOrOptions;
        var buffer = sponge.squeeze({
          buffer: options.buffer,
          padding: options.padding || padding
        });
        if (options.format && options.format !== "binary") {
          return buffer.toString(options.format);
        }
        return buffer;
      };
      this.reset = function () {
        sponge.reset();
        return _this;
      };
      return this;
    };
  };
  var Keccak = createHash({
    allowedSizes: [224, 256, 384, 512],
    defaultSize: 512,
    padding: 1
  });
  exports.Keccak = Keccak;
  var SHA3 = createHash({
    allowedSizes: [224, 256, 384, 512],
    defaultSize: 512,
    padding: 6
  });
  exports.SHA3 = SHA3;
  var SHAKE = createHash({
    allowedSizes: [128, 256],
    defaultSize: 256,
    padding: 31
  });
  exports.SHAKE = SHAKE;
  var SHA3Hash = Keccak;
  exports.SHA3Hash = SHA3Hash;
  SHA3.SHA3Hash = SHA3Hash;
  var _default = SHA3;
  exports["default"] = _default;
})(sha3);

async function genHash(utf8String) {
  const sha = new sha3.SHA3(256);
  sha.update(_onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .Buffer */ .lW.from(utf8String, "utf8"));
  return sha.digest("hex");
}

/**
 * @description Generates Interaction Template ID for a given Interaction Template
 *  
 * @param {object} params
 * @param {object} params.template - Interaction Template
 * @returns {Promise<string>} - Interaction Template ID
 */
async function generateTemplateId(_ref) {
  let {
    template
  } = _ref;
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template != undefined, "generateTemplateId({ template }) -- template must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template === "object", "generateTemplateId({ template }) -- template must be an object");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template.f_type === "InteractionTemplate", "generateTemplateId({ template }) -- template object must be an InteractionTemplate");
  template = normalizeInteractionTemplate(template);
  switch (template.f_version) {
    case "1.0.0":
      const templateData = template.data;
      const messages = await Promise.all(Object.keys(templateData.messages).map(async messageKey => [await genHash(messageKey), await Promise.all(Object.keys(templateData.messages?.[messageKey]?.i18n).map(async i18nkeylanguage => [await genHash(i18nkeylanguage), await genHash(templateData.messages?.[messageKey]?.i18n?.[i18nkeylanguage])]))]));
      const dependencies = await Promise.all(Object.keys(templateData?.dependencies).map(async dependencyAddressPlaceholder => [await genHash(dependencyAddressPlaceholder), await Promise.all(Object.keys(templateData?.dependencies?.[dependencyAddressPlaceholder]).map(async dependencyContract => [await genHash(dependencyContract), await Promise.all(Object.keys(templateData?.dependencies?.[dependencyAddressPlaceholder]?.[dependencyContract]).map(async dependencyContractNetwork => [await genHash(dependencyContractNetwork), [await genHash(templateData?.dependencies?.[dependencyAddressPlaceholder]?.[dependencyContract]?.[dependencyContractNetwork].address), await genHash(templateData?.dependencies?.[dependencyAddressPlaceholder]?.[dependencyContract]?.[dependencyContractNetwork].contract), await genHash(templateData?.dependencies?.[dependencyAddressPlaceholder]?.[dependencyContract]?.[dependencyContractNetwork].fq_address), await genHash(templateData?.dependencies?.[dependencyAddressPlaceholder]?.[dependencyContract]?.[dependencyContractNetwork].pin), await genHash(String(templateData?.dependencies?.[dependencyAddressPlaceholder]?.[dependencyContract]?.[dependencyContractNetwork].pin_block_height))]]))]))]));
      const _arguments = await Promise.all(Object.keys(templateData?.["arguments"]).map(async argumentLabel => [await genHash(argumentLabel), [await genHash(String(templateData?.["arguments"]?.[argumentLabel].index)), await genHash(templateData?.["arguments"]?.[argumentLabel].type), await genHash(templateData?.["arguments"]?.[argumentLabel].balance || ""), await Promise.all(Object.keys(templateData?.["arguments"]?.[argumentLabel].messages).map(async argumentMessageKey => [await genHash(argumentMessageKey), await Promise.all(Object.keys(templateData?.["arguments"]?.[argumentLabel].messages?.[argumentMessageKey].i18n).map(async i18nkeylanguage => [await genHash(i18nkeylanguage), await genHash(templateData?.["arguments"]?.[argumentLabel].messages?.[argumentMessageKey].i18n?.[i18nkeylanguage])]))]))]]));
      const encodedHex = (0,_onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .encode */ .cv)([await genHash("InteractionTemplate"), await genHash("1.0.0"), await genHash(templateData?.type), await genHash(templateData?.interface), messages, await genHash(templateData?.cadence), dependencies, _arguments]).toString("hex");
      return genHash(encodedHex);
    default:
      throw new Error("generateTemplateId Error: Unsupported template version");
  }
}

/**
 * @description Returns whether a set of auditors have audited a given Interaction Template
 * 
 * @param {object} params
 * @param {object} params.template - Interaction Template
 * @param {Array<string>} params.auditors - Array of auditors
 * @param {object} opts
 * @param {string} opts.flowInteractionAuditContract - Flow Interaction Template Audit contract address
 * @returns {Promise<object>} - Object of auditor addresses and audit status
 */
async function getInteractionTemplateAudits(_ref) {
  let {
    template,
    auditors
  } = _ref;
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template != undefined, "getInteractionTemplateAudits({ template }) -- template must be defined");
  template = normalizeInteractionTemplate(template);
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template.f_type === "InteractionTemplate", "getInteractionTemplateAudits({ template }) -- template must be an InteractionTemplate");

  // Recompute ID to be sure it matches
  let recomputedTemplateID = await generateTemplateId({
    template
  });
  if (recomputedTemplateID !== template.id) {
    (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
      title: "getInteractionTemplateAudits Debug Error",
      message: `Could not recompute and match template ID
                computed: ${recomputedTemplateID}
                template: ${template.id}
            `,
      level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.debug
    });
    throw new Error("getInteractionTemplateAudits Error: Could not recompute and match template ID");
  }
  switch (template.f_version) {
    case "1.0.0":
      const _auditors = auditors || (await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc)().get("flow.auditors"));
      (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(_auditors, "getInteractionTemplateAudits Error: Required configuration for 'fcl.auditors' is not set");
      (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(Array.isArray(_auditors), "getInteractionTemplateAudits Error: Required configuration for 'fcl.auditors' is not an array");
      let FlowInteractionAuditContract = opts.flowInteractionAuditContract;
      if (!FlowInteractionAuditContract) {
        const fclNetwork = await getChainId();
        (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(fclNetwork === "mainnet" || fclNetwork === "testnet", "getInteractionTemplateAudits Error: Unable to determine address for FlowInteractionTemplateAudit contract. Set configuration for 'fcl.network' to 'mainnet' or 'testnet'");
        if (fclNetwork === "mainnet") {
          FlowInteractionAuditContract = "0xfd100e39d50a13e6";
        } else {
          FlowInteractionAuditContract = "0xf78bfc12d0a786dc";
        }
      }
      const audits = await query({
        cadence: `
        import FlowInteractionTemplateAudit from ${FlowInteractionAuditContract}
        pub fun main(templateId: String, auditors: [Address]): {Address:Bool} {
          return FlowInteractionTemplateAudit.getHasTemplateBeenAuditedByAuditors(templateId: templateId, auditors: auditors)
        }
        `,
        args: (arg, t) => [arg(recomputedTemplateID, t.String), arg(_auditors, t.Array(t.Address))]
      });
      return audits;
    default:
      throw new Error("getInteractionTemplateAudits Error: Unsupported template version");
  }
}

function generateImport(_ref) {
  let {
    contractName,
    address
  } = _ref;
  return {
    contractName,
    address,
    contract: ""
  };
}

function findImports(cadence) {
  let imports = [];
  let importsReg = /import ((\w|,| )+)* from 0x\w+/g;
  let fileImports = cadence.match(importsReg) || [];
  for (const fileImport of fileImports) {
    const importLineReg = /import ((\w+|, |)*) from (0x\w+)/g;
    const importLine = importLineReg.exec(fileImport);
    const contractsReg = /((?:\w+)+),?/g;
    const contracts = importLine[1].match(contractsReg) || [];
    for (const contract of contracts) {
      imports.push(generateImport({
        address: importLine[3],
        contractName: contract.replace(/,/g, "")
      }));
    }
  }
  return imports;
}

/**
 * @description Produces a dependency pin for a contract at a given block height
 * @param {object} params
 * @param {string} params.address - The address of the account containing the contract
 * @param {string} params.contractName - The name of the contract
 * @param {number} params.blockHeight - The block height to produce the dependency pin for
 * @param {object} opts - Options to pass to the interaction
 * @returns {Promise<string>} - The dependency pin
 */
async function generateDependencyPin(_ref) {
  let {
    address,
    contractName,
    blockHeight
  } = _ref;
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(address != undefined, "generateDependencyPin({ address }) -- address must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(contractName != undefined, "generateDependencyPin({ contractName }) -- contractName must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(blockHeight != undefined, "generateDependencyPin({ blockHeight }) -- blockHeight must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof address === "string", "generateDependencyPin({ address }) -- address must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof contractName === "string", "generateDependencyPin({ contractName }) -- contractName must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof blockHeight === "number", "generateDependencyPin({ blockHeight }) -- blockHeight must be a number");
  let horizon = [generateImport({
    contractName,
    address
  })];
  for (const horizonImport of horizon) {
    let account = await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .send */ .Jd)([(0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .getAccount */ .D0)(await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc)().get(horizonImport.address, horizonImport.address)), (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .atBlockHeight */ .o9)(blockHeight)], opts).then(_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .Jx);
    horizonImport.contract = account.contracts?.[horizonImport.contractName];
    if (!horizonImport.contract) {
      console.error("Did not find expected contract", horizonImport, account);
      throw new Error("Did not find expected contract");
    }
    let contractImports = findImports(horizonImport.contract);
    horizon.push(...contractImports);
  }
  let contractHashes = horizon.map(iport => genHash(iport.contract));
  let contractHashesJoined = contractHashes.join("");
  return genHash(contractHashesJoined);
}

/**
 * @description Produces a dependency pin for a contract at latest sealed block
 * @param {object} params
 * @param {string} params.address - The address of the account containing the contract
 * @param {string} params.contractName - The name of the contract
 * @param {object} opts - Options to pass to the interaction
 * @returns {Promise<string>} - The dependency pin
 */
async function generateDependencyPinAtLatestSealedBlock(_ref2) {
  let {
    address,
    contractName
  } = _ref2;
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let latestSealedBlock = await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .block */ .Ge)({
    sealed: true
  }, opts);
  let latestSealedBlockHeight = latestSealedBlock?.height;
  return generateDependencyPin({
    address,
    contractName,
    blockHeight: latestSealedBlockHeight
  }, opts);
}

function normalizeInteractionTemplateInterface(templateInterface) {
  if (templateInterface == null) return null;
  switch (templateInterface["f_version"]) {
    case "1.0.0":
      return templateInterface;
    default:
      throw new Error("normalizeInteractionTemplateInterface Error: Invalid InteractionTemplateInterface");
  }
}

/**
 * @description Generates Interaction Template Interface ID for a given Interaction Template Interface
 * 
 * @param {object} params
 * @param {object} params.templateInterface - Interaction Template Interface
 * @returns {Promise<string>} - Interaction Template Interface ID
 */
async function generateTemplateInterfaceId(_ref) {
  let {
    templateInterface
  } = _ref;
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(templateInterface != undefined, "generateTemplateInterfaceId({ templateInterface }) -- templateInterface must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof templateInterface === "object", "generateTemplateInterfaceId({ templateInterface }) -- templateInterface must be an object");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof templateInterface.f_type === "InteractionTemplateInterface", "generateTemplateInterfaceId({ templateInterface }) -- templateInterface object must be an InteractionTemplate");
  templateInterface = normalizeInteractionTemplateInterface(templateInterface);
  switch (templateInterface.f_version) {
    case "1.0.0":
      const interfaceData = templateInterface.data;
      const encodedHex = (0,_onflow_rlp__WEBPACK_IMPORTED_MODULE_7__/* .encode */ .cv)([await genHash("InteractionTemplateInterface"), await genHash("1.0.0"), await genHash(interfaceData.flip), await Promise.all(Object.keys(interfaceData.arguments).map(async argumentLabel => [await genHash(argumentLabel), await genHash(String(interfaceData.arguments[argumentLabel].index)), await genHash(interfaceData.arguments[argumentLabel].type)]))]).toString("hex");
      return genHash(encodedHex);
    default:
      throw new Error("generateTemplateInterfaceId Error: Unsupported templateInterface version");
  }
}

/**
 * @description Checks if an Interaction Template's pins match those generated at a block height
 * 
 * @param {object} params
 * @param {object} params.template - Interaction Template to check pins for
 * @param {number} params.blockHeight - Block height to check pins at
 * @param {string} params.network - Network to check pins on
 * @param {object} opts
 * @returns {Promise<boolean>} - Whether or not the pins match
 */
async function verifyDependencyPinsSame(_ref) {
  let {
    template,
    blockHeight,
    network
  } = _ref;
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template != undefined, "generateDependencyPin({ template }) -- template must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template === "object", "generateDependencyPin({ template }) -- template must be an object");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template.f_type === "InteractionTemplate", "generateDependencyPin({ template }) -- template must be an InteractionTemplate");
  template = normalizeInteractionTemplate(template);
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(network != undefined, "generateDependencyPin({ network }) network must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(blockHeight != undefined, "generateDependencyPin({ blockHeight }) blockHeight must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof blockHeight === "number", "generateDependencyPin({ blockHeight }) blockHeight must be a number");
  switch (template.f_version) {
    case "1.0.0":
      let templateDependenciesPlaceholderKeys = Object.keys(template.data.dependencies);
      for (let templateDependencyPlaceholderKey of templateDependenciesPlaceholderKeys) {
        let templateDependencyPlaceholder = template.data.dependencies[templateDependencyPlaceholderKey];
        let templateDependencyPlaceholderContractNames = Object.keys(templateDependencyPlaceholder);
        for (let templateDependencyPlaceholderContractName of templateDependencyPlaceholderContractNames) {
          let templateDependencyPlaceholderContractNetworks = template.data.dependencies[templateDependencyPlaceholderKey][templateDependencyPlaceholderContractName];
          let templateDependency = templateDependencyPlaceholderContractNetworks[network];
          if (typeof templateDependency === "undefined") continue;
          let pin = await generateDependencyPin({
            address: templateDependency.address,
            contractName: templateDependency.contract,
            blockHeight
          }, opts);
          if (pin !== templateDependency.pin) {
            (0,_onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .log */ .c)({
              title: "verifyDependencyPinsSame Debug Error",
              message: `Could not recompute and match dependency pin.
                                address: ${templateDependency.address} | contract: ${templateDependency.contract}
                                computed: ${pin}
                                template: ${templateDependency.pin}
                            `,
              level: _onflow_util_logger__WEBPACK_IMPORTED_MODULE_2__/* .LEVELS */ .z.debug
            });
            return false;
          }
        }
      }
      return true;
    default:
      throw new Error("verifyDependencyPinsSame Error: Unsupported template version");
  }
}

/**
 * @description Checks if an Interaction Template's pins match those generated at the latest block height
 * 
 * @param {object} params
 * @param {object} params.template - Interaction Template to check pins for
 * @param {string} params.network - Network to check pins on
 * @param {object} opts
 * @returns {Promise<boolean>} - Whether or not the pins match
 */
async function verifyDependencyPinsSameAtLatestSealedBlock(_ref2) {
  let {
    template,
    network
  } = _ref2;
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let latestSealedBlock = await (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .block */ .Ge)({
    sealed: true
  });
  let latestSealedBlockHeight = latestSealedBlock?.height;
  return verifyDependencyPinsSame({
    template,
    network,
    blockHeight: latestSealedBlockHeight
  }, opts);
}

/**
 * @description Get Interaction Template argument message
 * 
 * @param {object} params
 * @param {string} params.localization [localization="en-US"] - Localization code
 * @param {string} params.messageKey - Message key
 * @param {object} params.template - Interaction Template
 * @returns {string} - Message
 */
function getTemplateMessage(_ref) {
  let {
    localization = "en-US",
    messageKey,
    template
  } = _ref;
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(messageKey, "getTemplateMessage({ messageKey }) -- messageKey must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof messageKey === "string", "getTemplateMessage({ messageKey }) -- messageKey must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(localization, "getTemplateMessage({ localization }) -- localization must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof localization === "string", "getTemplateMessage({ localization }) -- localization must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template != undefined, "getTemplateMessage({ template }) -- template must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template === "object", "getTemplateMessage({ template }) -- template must be an object");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template.f_type === "InteractionTemplate", "getTemplateMessage({ template }) -- template object must be an InteractionTemplate");
  const messages = template?.data?.messages;
  return messages?.[messageKey]?.i18n?.[localization];
}

/**
 * @description Gets Interaction Template argument message by message key, argument label, and localization
 * 
 * @param {object} opts
 * @param {string} opts.localization [localization="en-US"] - Localization to get message for
 * @param {string} opts.argumentLabel - Argument label to get message for
 * @param {string} opts.messageKey - Message key to get message for
 * @param {object} opts.template - Interaction Template to get message from
 * @returns {string} - Message
 */
function getTemplateArgumentMessage(_ref) {
  let {
    localization = "en-US",
    argumentLabel,
    messageKey,
    template
  } = _ref;
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(messageKey, "getTemplateArgumentMessage({ messageKey }) -- messageKey must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof messageKey === "string", "getTemplateArgumentMessage({ messageKey }) -- messageKey must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(argumentLabel, "getTemplateArgumentMessage({ argumentLabel }) -- argumentLabel must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof messageKey === "string", "getTemplateArgumentMessage({ argumentLabel }) -- argumentLabel must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(localization, "getTemplateArgumentMessage({ localization }) -- localization must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof localization === "string", "getTemplateArgumentMessage({ localization }) -- localization must be a string");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(template != undefined, "getTemplateArgumentMessage({ template }) -- template must be defined");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template === "object", "getTemplateArgumentMessage({ template }) -- template must be an object");
  (0,_blocto_flow_sdk__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .kG)(typeof template.f_type === "InteractionTemplate", "getTemplateArgumentMessage({ template }) -- template object must be an InteractionTemplate");
  const args = template?.data?.arguments;
  return args?.[argumentLabel]?.messages?.[messageKey]?.i18n?.[localization];
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getInteractionTemplateAudits: getInteractionTemplateAudits,
  generateDependencyPin: generateDependencyPin,
  generateDependencyPinAtLatestSealedBlock: generateDependencyPinAtLatestSealedBlock,
  generateTemplateId: generateTemplateId,
  generateTemplateInterfaceId: generateTemplateInterfaceId,
  verifyDependencyPinsSame: verifyDependencyPinsSame,
  verifyDependencyPinsSameAtLatestSealedBlock: verifyDependencyPinsSameAtLatestSealedBlock,
  deriveCadenceByNetwork: deriveCadenceByNetwork,
  getTemplateMessage: getTemplateMessage,
  getTemplateArgumentMessage: getTemplateArgumentMessage
});

const authenticate = function () {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return currentUser().authenticate(opts);
};
const unauthenticate = () => currentUser().unauthenticate();
const reauthenticate = function () {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  currentUser().unauthenticate();
  return currentUser().authenticate(opts);
};
const signUp = function () {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return currentUser().authenticate(opts);
};
const logIn = function () {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return currentUser().authenticate(opts);
};
const authz = currentUser().authorization;
const t = _onflow_types__WEBPACK_IMPORTED_MODULE_3__;

/**
 * @callback ArgsFn
 * @param {ArgFn} arg - Argument function to define a single argument
 * @param {object} t - Cadence Types object used to define the type
 * @returns {any[]}
 */

/**
 * @callback ArgFn
 * @param {any} value - the value of the argument
 * @param {any} type - the cadence type of the value
 * @returns {any}
 */




/***/ })

}]);
//# sourceMappingURL=npm-ns.blocto.fcl.js.map