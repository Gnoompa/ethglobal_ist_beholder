"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1020],{

/***/ 92316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ config)
/* harmony export */ });
/* unused harmony export clearConfig */
/* harmony import */ var _onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48083);


/**
 * Asserts fact is true, otherwise throw an error with invariant message
 * @param {boolean} fact
 * @param {string} msg
 * @param {Array} rest
 * @returns {void}
 */
function invariant$1(fact, msg) {
  if (!fact) {
    const error = new Error(`INVARIANT ${msg}`);
    error.stack = error.stack.split("\n").filter(d => !/at invariant/.test(d)).join("\n");
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }
    console.error("\n\n---\n\n", error, "\n\n", ...rest, "\n\n---\n\n");
    throw error;
  }
}
const pipe$1 = function () {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return v => {
    return funcs.reduce((res, func) => {
      return func(res);
    }, v);
  };
};

/***
 * Merge multiple functions returning objects into one object.
 * @param {...function(*): object} funcs - Functions to merge
 * @return {object} - Merged object
 */
const mergePipe$1 = function () {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }
  return v => {
    return funcs.reduce((res, func) => {
      return {
        ...res,
        ...func(v)
      };
    }, {});
  };
};

/**
 * @description Object check
 * @param {*} value - Value to check
 * @returns {boolean} - Is object status
 */
const isObject$1 = value => value && typeof value === "object" && !Array.isArray(value);

/**
 * @description Deep merge multiple objects.
 * @param {object} target - Target object
 * @param {...object[]} sources - Source objects
 * @returns {object} - Merged object
 */
const mergeDeep$1 = function (target) {
  for (var _len3 = arguments.length, sources = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    sources[_key3 - 1] = arguments[_key3];
  }
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject$1(target) && isObject$1(source)) {
    for (const key in source) {
      if (isObject$1(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep$1(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep$1(target, ...sources);
};

/**
 * @description Deep merge multiple Flow JSON.
 * @param {object|object[]} value - Flow JSON or array of Flow JSONs
 * @returns {object} - Merged Flow JSON
 */
const mergeFlowJSONs$1 = value => Array.isArray(value) ? mergeDeep$1({}, ...value) : value;

/**
 * @description Filter out contracts section of flow.json.
 * @param {object|object[]} obj - Flow JSON or array of Flow JSONs
 * @returns {object} - Contracts section of Flow JSON
 */
const filterContracts$1 = obj => obj.contracts ? obj.contracts : {};

/**
 * @description Gathers contract addresses by network
 * @param {string} network - Network to gather addresses for
 * @returns {object} - Contract names by addresses mapping e.g { "HelloWorld": "0x123" }
 */
const mapContractAliasesToNetworkAddress$1 = network => contracts => {
  return Object.entries(contracts).reduce((c, _ref) => {
    let [key, value] = _ref;
    const networkContractAlias = value?.aliases?.[network];
    if (networkContractAlias) {
      c[key] = networkContractAlias;
    }
    return c;
  }, {});
};
const mapDeploymentsToNetworkAddress$1 = network => _ref2 => {
  let {
    deployments = {},
    accounts = {}
  } = _ref2;
  const networkDeployment = deployments?.[network];
  if (!networkDeployment) return {};
  return Object.entries(networkDeployment).reduce((c, _ref3) => {
    let [key, value] = _ref3;
    // Resolve account address
    const accountAddress = accounts[key]?.address;
    if (!accountAddress) return c;

    // Create an object assigning the address to the contract name.
    return value.reduce((c, contract) => {
      return {
        ...c,
        [contract]: accountAddress
      };
    }, {});
  }, {});
};

/**
 * @description Take in flow.json files and return contract to address mapping by network
 * @param {object|object[]} jsons - Flow JSON or array of Flow JSONs
 * @param {string} network - Network to gather addresses for
 * @returns {object} - Contract names by addresses mapping e.g { "HelloWorld": "0x123" }
 */
const getContracts$1 = (jsons, network) => {
  return pipe$1(mergeFlowJSONs$1, mergePipe$1(mapDeploymentsToNetworkAddress$1(network), pipe$1(filterContracts$1, mapContractAliasesToNetworkAddress$1(network))))(jsons);
};

/**
 * @description Checks if string is hexidecimal
 * @param {string} str - String to check
 * @returns {boolean} - Is hexidecimal status
 */
const isHexidecimal$1 = str => {
  // Check that it is a string
  if (typeof str !== "string") return false;
  return /^[0-9A-Fa-f]+$/.test(str);
};

/**
 * @description Checks flow.json file for private keys
 * @param {object} flowJSON - Flow JSON
 * @returns {boolean} - Has private keys status
 */
const hasPrivateKeys$1 = flowJSON => {
  return Object.entries(flowJSON?.accounts).reduce((hasPrivateKey, _ref4) => {
    let [key, value] = _ref4;
    if (hasPrivateKey) return true;
    return value?.hasOwnProperty("key") && isHexidecimal$1(value?.key);
  }, false);
};

/**
 * @description Take in flow.json or array of flow.json files and checks for private keys
 * @param {object|object[]} value - Flow JSON or array of Flow JSONs
 * @returns {boolean} - Has private keys status
 */
const anyHasPrivateKeys$1 = value => {
  if (isObject$1(value)) return hasPrivateKeys$1(value);
  return value.some(hasPrivateKeys$1);
};

/**
 * @description Format network to always be 'emulator', 'testnet', or 'mainnet'
 * @param {string} network - Network to format
 * @returns {string} - Formatted network name (either 'emulator', 'testnet', or 'mainnet')
 */
const cleanNetwork$1 = network => network?.toLowerCase() === "local" ? "emulator" : network?.toLowerCase();
const NAME$1 = "config";
const PUT$1 = "PUT_CONFIG";
const GET$1 = "GET_CONFIG";
const GET_ALL$1 = "GET_ALL_CONFIG";
const UPDATE$1 = "UPDATE_CONFIG";
const DELETE$1 = "DELETE_CONFIG";
const CLEAR$1 = "CLEAR_CONFIG";
const WHERE$1 = "WHERE_CONFIG";
const UPDATED$1 = "CONFIG/UPDATED";
const identity$1 = v => v;
const HANDLERS$1 = {
  [PUT$1]: (ctx, _letter, _ref) => {
    let {
      key,
      value
    } = _ref;
    if (key == null) throw new Error("Missing 'key' for config/put.");
    ctx.put(key, value);
    ctx.broadcast(UPDATED$1, {
      ...ctx.all()
    });
  },
  [GET$1]: (ctx, letter, _ref2) => {
    let {
      key,
      fallback
    } = _ref2;
    if (key == null) throw new Error("Missing 'key' for config/get");
    letter.reply(ctx.get(key, fallback));
  },
  [GET_ALL$1]: (ctx, letter) => {
    letter.reply({
      ...ctx.all()
    });
  },
  [UPDATE$1]: (ctx, letter, _ref3) => {
    let {
      key,
      fn
    } = _ref3;
    if (key == null) throw new Error("Missing 'key' for config/update");
    ctx.update(key, fn || identity$1);
    ctx.broadcast(UPDATED$1, {
      ...ctx.all()
    });
  },
  [DELETE$1]: (ctx, letter, _ref4) => {
    let {
      key
    } = _ref4;
    if (key == null) throw new Error("Missing 'key' for config/delete");
    ctx.delete(key);
    ctx.broadcast(UPDATED$1, {
      ...ctx.all()
    });
  },
  [CLEAR$1]: (ctx, letter) => {
    let keys = Object.keys(ctx.all());
    for (let key of keys) ctx.delete(key);
    ctx.broadcast(UPDATED$1, {
      ...ctx.all()
    });
  },
  [WHERE$1]: (ctx, letter, _ref5) => {
    let {
      pattern
    } = _ref5;
    if (pattern == null) throw new Error("Missing 'pattern' for config/where");
    letter.reply(ctx.where(pattern));
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .SUBSCRIBE */ .kD]: (ctx, letter) => {
    ctx.subscribe(letter.from);
    ctx.send(letter.from, UPDATED$1, {
      ...ctx.all()
    });
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .UNSUBSCRIBE */ .By]: (ctx, letter) => {
    ctx.unsubscribe(letter.from);
  }
};
(0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .spawn */ .Cs)(HANDLERS$1, NAME$1);

/**
 * @description Adds a key-value pair to the config
 * @param {string} key - The key to add
 * @param {*} value - The value to add
 * @returns {Promise<object>} - The current config
 */
function put$1(key, value) {
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, PUT$1, {
    key,
    value
  });
  return config$1();
}

/**
 * @description Gets a key-value pair with a fallback from the config
 * @param {string} key - The key to add
 * @param {*} [fallback] - The fallback value to return if key is not found
 * @returns {Promise<*>} - The value found at key or fallback
 */
function get$1(key, fallback) {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, GET$1, {
    key,
    fallback
  }, {
    expectReply: true,
    timeout: 10
  });
}

/**
 * @description Returns the first non null config value or the fallback
 * @param {string[]} wants - The keys to search for
 * @param {*} fallback - The fallback value to return if key is not found
 * @returns {Promise<*>} - The value found at key or fallback
 */
async function first$1() {
  let wants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let fallback = arguments.length > 1 ? arguments[1] : undefined;
  if (!wants.length) return fallback;
  const [head, ...rest] = wants;
  const ret = await get$1(head);
  if (ret == null) return first$1(rest, fallback);
  return ret;
}

/**
 * @description Returns the current config
 * @returns {Promise<object>} - The current config
 */
function all$1() {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, GET_ALL$1, null, {
    expectReply: true,
    timeout: 10
  });
}

/**
 * @description Updates a key-value pair in the config
 * @param {string} key - The key to update
 * @param {Function} fn - The function to update the value with
 * @returns {Promise<object>} - The current config
 */
function update$1(key) {
  let fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity$1;
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, UPDATE$1, {
    key,
    fn
  });
  return config$1();
}

/**
 * @description Deletes a key-value pair from the config
 * @param {string} key - The key to delete
 * @returns {Promise<object>} - The current config
 */
function _delete$1(key) {
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, DELETE$1, {
    key
  });
  return config$1();
}

/**
 * @description Returns a subset of the config based on a pattern
 * @param {string} pattern - The pattern to match keys against
 * @returns {Promise<object>} - The subset of the config
 */
function where$1(pattern) {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, WHERE$1, {
    pattern
  }, {
    expectReply: true,
    timeout: 10
  });
}

/**
 * @description Subscribes to config updates
 * @param {Function} callback - The callback to call when config is updated
 * @returns {Function} - The unsubscribe function
 */
function subscribe$1(callback) {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .subscriber */ .qP)(NAME$1, () => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .spawn */ .Cs)(HANDLERS$1, NAME$1), callback);
}

/**
 * @description Clears the config
 * @returns {void}
 */
function clearConfig$1() {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME$1, CLEAR$1);
}

/**
 * @description Resets the config to a previous state
 * @param {object} oldConfig - The previous config state
 * @returns {Promise<object>} - The current config
 */
function resetConfig$1(oldConfig) {
  return clearConfig$1().then(config$1(oldConfig));
}

/**
 * @description Takes in flow.json or array of flow.json files and creates contract placeholders
 * @param {object|object[]} data - The flow.json or array of flow.json files
 * @returns {void}
 */
async function load$1(data) {
  const network = await get$1("flow.network");
  const cleanedNetwork = cleanNetwork$1(network);
  const {
    flowJSON
  } = data;
  invariant$1(Boolean(flowJSON), "config.load -- 'flowJSON' must be defined");
  invariant$1(cleanedNetwork, `Flow Network Required -- In order for FCL to load your contracts please define "flow.network" to "emulator", "local", "testnet", or "mainnet" in your config. See more here: https://developers.flow.com/tools/fcl-js/reference/configure-fcl`);
  if (anyHasPrivateKeys$1(flowJSON)) {
    const isEmulator = cleanedNetwork === "emulator";
    log({
      title: "Private Keys Detected",
      message: `Private keys should be stored in a separate flow.json file for security. See more here: https://developers.flow.com/tools/flow-cli/security`,
      level: isEmulator ? LEVELS.warn : LEVELS.error
    });
    if (!isEmulator) return;
  }
  for (const [key, value] of Object.entries(getContracts$1(flowJSON, cleanedNetwork))) {
    const contractConfigKey = `0x${key}`;
    const existingContractConfigKey = await get$1(contractConfigKey);
    if (existingContractConfigKey && existingContractConfigKey !== value) {
      log({
        title: "Contract Placeholder Conflict Detected",
        message: `A generated contract placeholder from config.load conflicts with a placeholder you've set manually in config have the same name.`,
        level: LEVELS.warn
      });
    } else {
      put$1(contractConfigKey, value);
    }
    const systemContractConfigKey = `system.contracts.${key}`;
    const systemExistingContractConfigKeyValue = await get$1(systemContractConfigKey);
    if (systemExistingContractConfigKeyValue && systemExistingContractConfigKeyValue !== value) {
      log({
        title: "Contract Placeholder Conflict Detected",
        message: `A generated contract placeholder from config.load conflicts with a placeholder you've set manually in config have the same name.`,
        level: LEVELS.warn
      });
    } else {
      put$1(systemContractConfigKey, value);
    }
  }
}

// eslint-disable-next-line jsdoc/require-returns
/**
 * @description Sets the config
 * @param {object} [values] - The values to set
 */
function config$1(values) {
  if (values != null && typeof values === "object") {
    Object.keys(values).map(d => put$1(d, values[d]));
  }
  return {
    put: put$1,
    get: get$1,
    all: all$1,
    first: first$1,
    update: update$1,
    delete: _delete$1,
    where: where$1,
    subscribe: subscribe$1,
    overload: overload$1,
    load: load$1
  };
}
config$1.put = put$1;
config$1.get = get$1;
config$1.all = all$1;
config$1.first = first$1;
config$1.update = update$1;
config$1.delete = _delete$1;
config$1.where = where$1;
config$1.subscribe = subscribe$1;
config$1.overload = overload$1;
config$1.load = load$1;
const noop$1 = v => v;
function overload$1() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop$1;
  return new Promise(async (resolve, reject) => {
    const oldConfig = await all$1();
    try {
      config$1(opts);
      var result = await callback(await all$1());
      await resetConfig$1(oldConfig);
      resolve(result);
    } catch (error) {
      await resetConfig$1(oldConfig);
      reject(error);
    }
  });
}

/**
 * The levels of the logger
 * 
 * @typedef {Object} LEVELS
 * @property {number} debug - The debug level
 * @property {number} info - The info level
 * @property {number} log - The log level
 * @property {number} warn - The warn level
 * @property {number} error - The error level
 * 
 */
const LEVELS = Object.freeze({
  debug: 5,
  info: 4,
  log: 3,
  warn: 2,
  error: 1
});

/**
 * Builds a message formatted for the logger
 * 
 * @param {Object} options - The options for the log
 * @param {string} options.title - The title of the log
 * @param {string} options.message - The message of the log
 * @returns {Array<string>} - The message formatted for the logger
 * 
 * @example
 * buildLoggerMessageArgs({ title: "My Title", message: "My Message" })
 */
const buildLoggerMessageArgs = _ref => {
  let {
    title,
    message
  } = _ref;
  return [`
    %c${title}
    ============================

    ${message}

    ============================
    `.replace(/\n[^\S\r\n]+/g, "\n").trim(),, "font-weight:bold;font-family:monospace;"];
};

/**
 * Logs messages based on the level of the message and the level set in the config
 * 
 * @param {Object} options - The options for the log
 * @param {string} options.title - The title of the log
 * @param {string} options.message - The message of the log
 * @param {number} options.level - The level of the log
 * @param {boolean} options.always - Whether to always show the log
 * @returns {Promise<void>}
 * 
 * @example
 * log({ title: "My Title", message: "My Message", level: LEVELS.warn, always: false })
 * 
 */
const log = async _ref2 => {
  let {
    title,
    message,
    level,
    always = false
  } = _ref2;
  const configLoggerLevel = await config$1.get("logger.level", LEVELS.warn);

  // If config level is below message level then don't show it
  if (!always && configLoggerLevel < level) return;
  const loggerMessageArgs = buildLoggerMessageArgs({
    title,
    message
  });
  switch (level) {
    case LEVELS.debug:
      console.debug(...loggerMessageArgs);
      break;
    case LEVELS.info:
      console.info(...loggerMessageArgs);
      break;
    case LEVELS.warn:
      console.warn(...loggerMessageArgs);
      break;
    case LEVELS.error:
      console.error(...loggerMessageArgs);
      break;
    default:
      console.log(...loggerMessageArgs);
  }
};

/**
 * Logs a deprecation notice
 * 
 * @param {Object} options - The options for the log
 * @param {string} options.pkg - The package that is being deprecated
 * @param {string} options.subject - The subject of the deprecation
 * @param {string} options.transition - The transition path for the deprecation
 * @param {number} options.level - The level of the log
 * @param {string} options.message - The message of the log
 * @param {Function} options.callback - A callback to run after the log
 * @returns {Promise<void>}
 * 
 * @example
 * log.deprecate({ pkg: "@onflow/fcl", subject: "Some item", transition: "https://github.com/onflow/flow-js-sdk", message: "Descriptive message", level: LEVELS.warn, callback: () => {} })
 * 
 */
log.deprecate = _ref3 => {
  let {
    pkg,
    subject,
    transition,
    level = LEVELS.warn,
    message = "",
    callback = null
  } = _ref3;
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const logMessage = () => log({
    title: `${pkg ? pkg + " " : ""}Deprecation Notice`,
    message: `
      ${subject ? `${capitalizeFirstLetter(subject)} is deprecated and will cease to work in future releases${pkg ? " of " + pkg : ""}.` : ""}${message ? "\n" + message : ""}${transition ? `\nYou can learn more (including a guide on common transition paths) here: ${transition}` : ""}
    `.trim(),
    level
  });
  if (typeof callback === "function") {
    return async function () {
      await logMessage();
      return await callback(...arguments);
    };
  }
  return logMessage();
};

/**
 * Asserts fact is true, otherwise throw an error with invariant message
 * @param {boolean} fact
 * @param {string} msg
 * @param {Array} rest
 * @returns {void}
 */
function invariant(fact, msg) {
  if (!fact) {
    const error = new Error(`INVARIANT ${msg}`);
    error.stack = error.stack.split("\n").filter(d => !/at invariant/.test(d)).join("\n");
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }
    console.error("\n\n---\n\n", error, "\n\n", ...rest, "\n\n---\n\n");
    throw error;
  }
}

const pipe = function () {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return v => {
    return funcs.reduce((res, func) => {
      return func(res);
    }, v);
  };
};

/***
 * Merge multiple functions returning objects into one object.
 * @param {...function(*): object} funcs - Functions to merge
 * @return {object} - Merged object
 */
const mergePipe = function () {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }
  return v => {
    return funcs.reduce((res, func) => {
      return {
        ...res,
        ...func(v)
      };
    }, {});
  };
};

/**
 * @description Object check
 * @param {*} value - Value to check
 * @returns {boolean} - Is object status
 */
const isObject = value => value && typeof value === "object" && !Array.isArray(value);

/**
 * @description Deep merge multiple objects.
 * @param {object} target - Target object
 * @param {...object[]} sources - Source objects
 * @returns {object} - Merged object
 */
const mergeDeep = function (target) {
  for (var _len3 = arguments.length, sources = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    sources[_key3 - 1] = arguments[_key3];
  }
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
};

/**
 * @description Deep merge multiple Flow JSON.
 * @param {object|object[]} value - Flow JSON or array of Flow JSONs
 * @returns {object} - Merged Flow JSON
 */
const mergeFlowJSONs = value => Array.isArray(value) ? mergeDeep({}, ...value) : value;

/**
 * @description Filter out contracts section of flow.json.
 * @param {object|object[]} obj - Flow JSON or array of Flow JSONs
 * @returns {object} - Contracts section of Flow JSON
 */
const filterContracts = obj => obj.contracts ? obj.contracts : {};

/**
 * @description Gathers contract addresses by network
 * @param {string} network - Network to gather addresses for
 * @returns {object} - Contract names by addresses mapping e.g { "HelloWorld": "0x123" }
 */
const mapContractAliasesToNetworkAddress = network => contracts => {
  return Object.entries(contracts).reduce((c, _ref) => {
    let [key, value] = _ref;
    const networkContractAlias = value?.aliases?.[network];
    if (networkContractAlias) {
      c[key] = networkContractAlias;
    }
    return c;
  }, {});
};
const mapDeploymentsToNetworkAddress = network => _ref2 => {
  let {
    deployments = {},
    accounts = {}
  } = _ref2;
  const networkDeployment = deployments?.[network];
  if (!networkDeployment) return {};
  return Object.entries(networkDeployment).reduce((c, _ref3) => {
    let [key, value] = _ref3;
    // Resolve account address
    const accountAddress = accounts[key]?.address;
    if (!accountAddress) return c;

    // Create an object assigning the address to the contract name.
    return value.reduce((c, contract) => {
      return {
        ...c,
        [contract]: accountAddress
      };
    }, {});
  }, {});
};

/**
 * @description Take in flow.json files and return contract to address mapping by network
 * @param {object|object[]} jsons - Flow JSON or array of Flow JSONs
 * @param {string} network - Network to gather addresses for
 * @returns {object} - Contract names by addresses mapping e.g { "HelloWorld": "0x123" }
 */
const getContracts = (jsons, network) => {
  return pipe(mergeFlowJSONs, mergePipe(mapDeploymentsToNetworkAddress(network), pipe(filterContracts, mapContractAliasesToNetworkAddress(network))))(jsons);
};

/**
 * @description Checks if string is hexidecimal
 * @param {string} str - String to check
 * @returns {boolean} - Is hexidecimal status
 */
const isHexidecimal = str => {
  // Check that it is a string
  if (typeof str !== "string") return false;
  return /^[0-9A-Fa-f]+$/.test(str);
};

/**
 * @description Checks flow.json file for private keys
 * @param {object} flowJSON - Flow JSON
 * @returns {boolean} - Has private keys status
 */
const hasPrivateKeys = flowJSON => {
  return Object.entries(flowJSON?.accounts).reduce((hasPrivateKey, _ref4) => {
    let [key, value] = _ref4;
    if (hasPrivateKey) return true;
    return value?.hasOwnProperty("key") && isHexidecimal(value?.key);
  }, false);
};

/**
 * @description Take in flow.json or array of flow.json files and checks for private keys
 * @param {object|object[]} value - Flow JSON or array of Flow JSONs
 * @returns {boolean} - Has private keys status
 */
const anyHasPrivateKeys = value => {
  if (isObject(value)) return hasPrivateKeys(value);
  return value.some(hasPrivateKeys);
};

/**
 * @description Format network to always be 'emulator', 'testnet', or 'mainnet'
 * @param {string} network - Network to format
 * @returns {string} - Formatted network name (either 'emulator', 'testnet', or 'mainnet')
 */
const cleanNetwork = network => network?.toLowerCase() === "local" ? "emulator" : network?.toLowerCase();

const NAME = "config";
const PUT = "PUT_CONFIG";
const GET = "GET_CONFIG";
const GET_ALL = "GET_ALL_CONFIG";
const UPDATE = "UPDATE_CONFIG";
const DELETE = "DELETE_CONFIG";
const CLEAR = "CLEAR_CONFIG";
const WHERE = "WHERE_CONFIG";
const UPDATED = "CONFIG/UPDATED";
const identity = v => v;
const HANDLERS = {
  [PUT]: (ctx, _letter, _ref) => {
    let {
      key,
      value
    } = _ref;
    if (key == null) throw new Error("Missing 'key' for config/put.");
    ctx.put(key, value);
    ctx.broadcast(UPDATED, {
      ...ctx.all()
    });
  },
  [GET]: (ctx, letter, _ref2) => {
    let {
      key,
      fallback
    } = _ref2;
    if (key == null) throw new Error("Missing 'key' for config/get");
    letter.reply(ctx.get(key, fallback));
  },
  [GET_ALL]: (ctx, letter) => {
    letter.reply({
      ...ctx.all()
    });
  },
  [UPDATE]: (ctx, letter, _ref3) => {
    let {
      key,
      fn
    } = _ref3;
    if (key == null) throw new Error("Missing 'key' for config/update");
    ctx.update(key, fn || identity);
    ctx.broadcast(UPDATED, {
      ...ctx.all()
    });
  },
  [DELETE]: (ctx, letter, _ref4) => {
    let {
      key
    } = _ref4;
    if (key == null) throw new Error("Missing 'key' for config/delete");
    ctx.delete(key);
    ctx.broadcast(UPDATED, {
      ...ctx.all()
    });
  },
  [CLEAR]: (ctx, letter) => {
    let keys = Object.keys(ctx.all());
    for (let key of keys) ctx.delete(key);
    ctx.broadcast(UPDATED, {
      ...ctx.all()
    });
  },
  [WHERE]: (ctx, letter, _ref5) => {
    let {
      pattern
    } = _ref5;
    if (pattern == null) throw new Error("Missing 'pattern' for config/where");
    letter.reply(ctx.where(pattern));
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .SUBSCRIBE */ .kD]: (ctx, letter) => {
    ctx.subscribe(letter.from);
    ctx.send(letter.from, UPDATED, {
      ...ctx.all()
    });
  },
  [_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .UNSUBSCRIBE */ .By]: (ctx, letter) => {
    ctx.unsubscribe(letter.from);
  }
};
(0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .spawn */ .Cs)(HANDLERS, NAME);

/**
 * @description Adds a key-value pair to the config
 * @param {string} key - The key to add
 * @param {*} value - The value to add
 * @returns {Promise<object>} - The current config
 */
function put(key, value) {
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, PUT, {
    key,
    value
  });
  return config();
}

/**
 * @description Gets a key-value pair with a fallback from the config
 * @param {string} key - The key to add
 * @param {*} [fallback] - The fallback value to return if key is not found
 * @returns {Promise<*>} - The value found at key or fallback
 */
function get(key, fallback) {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, GET, {
    key,
    fallback
  }, {
    expectReply: true,
    timeout: 10
  });
}

/**
 * @description Returns the first non null config value or the fallback
 * @param {string[]} wants - The keys to search for
 * @param {*} fallback - The fallback value to return if key is not found
 * @returns {Promise<*>} - The value found at key or fallback
 */
async function first() {
  let wants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let fallback = arguments.length > 1 ? arguments[1] : undefined;
  if (!wants.length) return fallback;
  const [head, ...rest] = wants;
  const ret = await get(head);
  if (ret == null) return first(rest, fallback);
  return ret;
}

/**
 * @description Returns the current config
 * @returns {Promise<object>} - The current config
 */
function all() {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, GET_ALL, null, {
    expectReply: true,
    timeout: 10
  });
}

/**
 * @description Updates a key-value pair in the config
 * @param {string} key - The key to update
 * @param {Function} fn - The function to update the value with
 * @returns {Promise<object>} - The current config
 */
function update(key) {
  let fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, UPDATE, {
    key,
    fn
  });
  return config();
}

/**
 * @description Deletes a key-value pair from the config
 * @param {string} key - The key to delete
 * @returns {Promise<object>} - The current config
 */
function _delete(key) {
  (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, DELETE, {
    key
  });
  return config();
}

/**
 * @description Returns a subset of the config based on a pattern
 * @param {string} pattern - The pattern to match keys against
 * @returns {Promise<object>} - The subset of the config
 */
function where(pattern) {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, WHERE, {
    pattern
  }, {
    expectReply: true,
    timeout: 10
  });
}

/**
 * @description Subscribes to config updates
 * @param {Function} callback - The callback to call when config is updated
 * @returns {Function} - The unsubscribe function
 */
function subscribe(callback) {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .subscriber */ .qP)(NAME, () => (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .spawn */ .Cs)(HANDLERS, NAME), callback);
}

/**
 * @description Clears the config
 * @returns {void}
 */
function clearConfig() {
  return (0,_onflow_util_actor__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW)(NAME, CLEAR);
}

/**
 * @description Resets the config to a previous state
 * @param {object} oldConfig - The previous config state
 * @returns {Promise<object>} - The current config
 */
function resetConfig(oldConfig) {
  return clearConfig().then(config(oldConfig));
}

/**
 * @description Takes in flow.json or array of flow.json files and creates contract placeholders
 * @param {object|object[]} data - The flow.json or array of flow.json files
 * @returns {void}
 */
async function load(data) {
  const network = await get("flow.network");
  const cleanedNetwork = cleanNetwork(network);
  const {
    flowJSON
  } = data;
  invariant(Boolean(flowJSON), "config.load -- 'flowJSON' must be defined");
  invariant(cleanedNetwork, `Flow Network Required -- In order for FCL to load your contracts please define "flow.network" to "emulator", "local", "testnet", or "mainnet" in your config. See more here: https://developers.flow.com/tools/fcl-js/reference/configure-fcl`);
  if (anyHasPrivateKeys(flowJSON)) {
    const isEmulator = cleanedNetwork === "emulator";
    log({
      title: "Private Keys Detected",
      message: `Private keys should be stored in a separate flow.json file for security. See more here: https://developers.flow.com/tools/flow-cli/security`,
      level: isEmulator ? LEVELS.warn : LEVELS.error
    });
    if (!isEmulator) return;
  }
  for (const [key, value] of Object.entries(getContracts(flowJSON, cleanedNetwork))) {
    const contractConfigKey = `0x${key}`;
    const existingContractConfigKey = await get(contractConfigKey);
    if (existingContractConfigKey && existingContractConfigKey !== value) {
      log({
        title: "Contract Placeholder Conflict Detected",
        message: `A generated contract placeholder from config.load conflicts with a placeholder you've set manually in config have the same name.`,
        level: LEVELS.warn
      });
    } else {
      put(contractConfigKey, value);
    }
    const systemContractConfigKey = `system.contracts.${key}`;
    const systemExistingContractConfigKeyValue = await get(systemContractConfigKey);
    if (systemExistingContractConfigKeyValue && systemExistingContractConfigKeyValue !== value) {
      log({
        title: "Contract Placeholder Conflict Detected",
        message: `A generated contract placeholder from config.load conflicts with a placeholder you've set manually in config have the same name.`,
        level: LEVELS.warn
      });
    } else {
      put(systemContractConfigKey, value);
    }
  }
}

// eslint-disable-next-line jsdoc/require-returns
/**
 * @description Sets the config
 * @param {object} [values] - The values to set
 */
function config(values) {
  if (values != null && typeof values === "object") {
    Object.keys(values).map(d => put(d, values[d]));
  }
  return {
    put,
    get,
    all,
    first,
    update,
    delete: _delete,
    where,
    subscribe,
    overload,
    load
  };
}
config.put = put;
config.get = get;
config.all = all;
config.first = first;
config.update = update;
config.delete = _delete;
config.where = where;
config.subscribe = subscribe;
config.overload = overload;
config.load = load;
const noop = v => v;
function overload() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  return new Promise(async (resolve, reject) => {
    const oldConfig = await all();
    try {
      config(opts);
      var result = await callback(await all());
      await resetConfig(oldConfig);
      resolve(result);
    } catch (error) {
      await resetConfig(oldConfig);
      reject(error);
    }
  });
}




/***/ })

}]);
//# sourceMappingURL=npm-ns.onflow.config.js.map