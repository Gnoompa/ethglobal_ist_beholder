"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9517],{

/***/ 56993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* binding */ Address),
/* harmony export */   Array: () => (/* binding */ _Array),
/* harmony export */   Bool: () => (/* binding */ Bool),
/* harmony export */   Character: () => (/* binding */ Character),
/* harmony export */   Dictionary: () => (/* binding */ Dictionary),
/* harmony export */   Enum: () => (/* binding */ Enum),
/* harmony export */   Event: () => (/* binding */ Event),
/* harmony export */   Fix64: () => (/* binding */ Fix64),
/* harmony export */   Identity: () => (/* binding */ Identity),
/* harmony export */   Int: () => (/* binding */ Int),
/* harmony export */   Int128: () => (/* binding */ Int128),
/* harmony export */   Int16: () => (/* binding */ Int16),
/* harmony export */   Int256: () => (/* binding */ Int256),
/* harmony export */   Int32: () => (/* binding */ Int32),
/* harmony export */   Int64: () => (/* binding */ Int64),
/* harmony export */   Int8: () => (/* binding */ Int8),
/* harmony export */   Optional: () => (/* binding */ Optional),
/* harmony export */   Path: () => (/* binding */ Path),
/* harmony export */   Reference: () => (/* binding */ Reference),
/* harmony export */   Resource: () => (/* binding */ Resource),
/* harmony export */   String: () => (/* binding */ String),
/* harmony export */   Struct: () => (/* binding */ Struct),
/* harmony export */   UFix64: () => (/* binding */ UFix64),
/* harmony export */   UInt: () => (/* binding */ UInt),
/* harmony export */   UInt128: () => (/* binding */ UInt128),
/* harmony export */   UInt16: () => (/* binding */ UInt16),
/* harmony export */   UInt256: () => (/* binding */ UInt256),
/* harmony export */   UInt32: () => (/* binding */ UInt32),
/* harmony export */   UInt64: () => (/* binding */ UInt64),
/* harmony export */   UInt8: () => (/* binding */ UInt8),
/* harmony export */   Void: () => (/* binding */ Void),
/* harmony export */   Word16: () => (/* binding */ Word16),
/* harmony export */   Word32: () => (/* binding */ Word32),
/* harmony export */   Word64: () => (/* binding */ Word64),
/* harmony export */   Word8: () => (/* binding */ Word8),
/* harmony export */   _Array: () => (/* binding */ _Array)
/* harmony export */ });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise;
var queueMicrotask_1 = typeof queueMicrotask === 'function' ? queueMicrotask.bind(typeof window !== 'undefined' ? window : commonjsGlobal)
// reuse resolved promise, and allocate it lazily
: cb => (promise || (promise = Promise.resolve())).then(cb).catch(err => setTimeout(() => {
  throw err;
}, 0));

const mailbox = () => {
  const queue = [];
  var next;
  return {
    async deliver(msg) {
      queue.push(msg);
      if (next) {
        next(queue.shift());
        next = undefined;
      }
    },
    receive() {
      return new Promise(function innerReceive(resolve) {
        const msg = queue.shift();
        if (msg) return resolve(msg);
        next = resolve;
      });
    }
  };
};
const INIT = "INIT";
const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const UPDATED$1 = "UPDATED";
const EXIT = "EXIT";
const TERMINATE = "TERMINATE";
const root = typeof self === "object" && self.self === self && self || typeof __webpack_require__.g === "object" && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g || typeof window === "object" && window.window === window && window;
root.FCL_REGISTRY = root.FCL_REGISTRY == null ? {} : root.FCL_REGISTRY;
var pid = 0b0;
const DEFAULT_TIMEOUT = 5000;
const send = function (addr, tag, data) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return new Promise((reply, reject) => {
    const expectReply = opts.expectReply || false;
    const timeout = opts.timeout != null ? opts.timeout : DEFAULT_TIMEOUT;
    if (expectReply && timeout) {
      setTimeout(() => reject(new Error(`Timeout: ${timeout}ms passed without a response.`)), timeout);
    }
    const payload = {
      to: addr,
      from: opts.from,
      tag,
      data,
      timeout,
      reply,
      reject
    };
    try {
      root.FCL_REGISTRY[addr] && root.FCL_REGISTRY[addr].mailbox.deliver(payload);
      if (!expectReply) reply(true);
    } catch (error) {
      console.error("FCL.Actor -- Could Not Deliver Message", payload, root.FCL_REGISTRY[addr], error);
    }
  });
};
const kill = addr => {
  delete root.FCL_REGISTRY[addr];
};
const fromHandlers = function () {
  let handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return async ctx => {
    if (typeof handlers[INIT] === "function") await handlers[INIT](ctx);
    __loop: while (1) {
      const letter = await ctx.receive();
      try {
        if (letter.tag === EXIT) {
          if (typeof handlers[TERMINATE] === "function") {
            await handlers[TERMINATE](ctx, letter, letter.data || {});
          }
          break __loop;
        }
        await handlers[letter.tag](ctx, letter, letter.data || {});
      } catch (error) {
        console.error(`${ctx.self()} Error`, letter, error);
      } finally {
        continue __loop;
      }
    }
  };
};
const spawn = function (fn) {
  let addr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (addr == null) addr = ++pid;
  if (root.FCL_REGISTRY[addr] != null) return addr;
  root.FCL_REGISTRY[addr] = {
    addr,
    mailbox: mailbox(),
    subs: new Set(),
    kvs: {},
    error: null
  };
  const ctx = {
    self: () => addr,
    receive: () => root.FCL_REGISTRY[addr].mailbox.receive(),
    send: function (to, tag, data) {
      let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      opts.from = addr;
      return send(to, tag, data, opts);
    },
    sendSelf: (tag, data, opts) => {
      if (root.FCL_REGISTRY[addr]) send(addr, tag, data, opts);
    },
    broadcast: function (tag, data) {
      let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      opts.from = addr;
      for (let to of root.FCL_REGISTRY[addr].subs) send(to, tag, data, opts);
    },
    subscribe: sub => sub != null && root.FCL_REGISTRY[addr].subs.add(sub),
    unsubscribe: sub => sub != null && root.FCL_REGISTRY[addr].subs.delete(sub),
    subscriberCount: () => root.FCL_REGISTRY[addr].subs.size,
    hasSubs: () => !!root.FCL_REGISTRY[addr].subs.size,
    put: (key, value) => {
      if (key != null) root.FCL_REGISTRY[addr].kvs[key] = value;
    },
    get: (key, fallback) => {
      const value = root.FCL_REGISTRY[addr].kvs[key];
      return value == null ? fallback : value;
    },
    delete: key => {
      delete root.FCL_REGISTRY[addr].kvs[key];
    },
    update: (key, fn) => {
      if (key != null) root.FCL_REGISTRY[addr].kvs[key] = fn(root.FCL_REGISTRY[addr].kvs[key]);
    },
    keys: () => {
      return Object.keys(root.FCL_REGISTRY[addr].kvs);
    },
    all: () => {
      return root.FCL_REGISTRY[addr].kvs;
    },
    where: pattern => {
      return Object.keys(root.FCL_REGISTRY[addr].kvs).reduce((acc, key) => {
        return pattern.test(key) ? {
          ...acc,
          [key]: root.FCL_REGISTRY[addr].kvs[key]
        } : acc;
      }, {});
    },
    merge: function () {
      let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.keys(data).forEach(key => root.FCL_REGISTRY[addr].kvs[key] = data[key]);
    },
    fatalError: error => {
      root.FCL_REGISTRY[addr].error = error;
      for (let to of root.FCL_REGISTRY[addr].subs) send(to, UPDATED$1);
    }
  };
  if (typeof fn === "object") fn = fromHandlers(fn);
  queueMicrotask_1(async () => {
    await fn(ctx);
    kill(addr);
  });
  return addr;
};

// Returns an unsubscribe function
// A SUBSCRIBE handler will need to be created to handle the subscription event
//
//  [SUBSCRIBE]: (ctx, letter) => {
//    ctx.subscribe(letter.from)
//    ctx.send(letter.from, UPDATED, ctx.all())
//  }
//
function subscriber(address, spawnFn, callback) {
  spawnFn(address);
  const EXIT = "@EXIT";
  const self = spawn(async ctx => {
    ctx.send(address, SUBSCRIBE);
    while (1) {
      const letter = await ctx.receive();
      const error = root.FCL_REGISTRY[address].error;
      if (letter.tag === EXIT) {
        ctx.send(address, UNSUBSCRIBE);
        return;
      }
      if (error) {
        callback(null, error);
        ctx.send(address, UNSUBSCRIBE);
        return;
      }
      callback(letter.data, null);
    }
  });
  return () => send(self, EXIT);
}

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
  [SUBSCRIBE]: (ctx, letter) => {
    ctx.subscribe(letter.from);
    ctx.send(letter.from, UPDATED, {
      ...ctx.all()
    });
  },
  [UNSUBSCRIBE]: (ctx, letter) => {
    ctx.unsubscribe(letter.from);
  }
};
spawn(HANDLERS, NAME);

/**
 * @description Adds a key-value pair to the config
 * @param {string} key - The key to add
 * @param {*} value - The value to add
 * @returns {Promise<object>} - The current config
 */
function put(key, value) {
  send(NAME, PUT, {
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
  return send(NAME, GET, {
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
  return send(NAME, GET_ALL, null, {
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
  send(NAME, UPDATE, {
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
  send(NAME, DELETE, {
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
  return send(NAME, WHERE, {
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
  return subscriber(NAME, () => spawn(HANDLERS, NAME), callback);
}

/**
 * @description Clears the config
 * @returns {void}
 */
function clearConfig() {
  return send(NAME, CLEAR);
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
  const configLoggerLevel = await config.get("logger.level", LEVELS.warn);

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

const type = (label, asArgument, asInjection) => ({
  label,
  asArgument,
  asInjection
});
const isArray = d => Array.isArray(d);
const isObj = d => typeof d === "object";
const isNull = d => d == null;
const isBoolean = d => typeof d === "boolean";
const isNumber = d => typeof d === "number";
const isInteger = d => Number.isInteger(d);
const isString = d => typeof d === "string";
const throwTypeError = msg => {
  throw new Error("Type Error: " + msg);
};
const numberValuesDeprecationNotice = type => {
  log.deprecate({
    pkg: "@onflow/types",
    subject: `Passing in Number as value for ${type}`,
    message: `Going forward, use String as value for ${type}.`,
    transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0002-[U]Int*-and-Word*-as-Number"
  });
};
const Identity = type("Identity", v => v, v => v);
const UInt = type("UInt", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt");
    return {
      type: "UInt",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt",
      value: v
    };
  }
  throwTypeError("Expected Positive Integer for type Unsigned Int");
}, v => v);
const Int = type("Int", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int");
    return {
      type: "Int",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int",
      value: v
    };
  }
  throwTypeError("Expected Integer for type Int");
}, v => v);
const UInt8 = type("UInt8", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt8");
    return {
      type: "UInt8",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt8",
      value: v
    };
  }
  throwTypeError("Expected integer for UInt8");
}, v => v);
const Int8 = type("Int8", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int8");
    return {
      type: "Int8",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int8",
      value: v
    };
  }
  throwTypeError("Expected positive integer for Int8");
}, v => v);
const UInt16 = type("UInt16", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt16");
    return {
      type: "UInt16",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt16",
      value: v
    };
  }
  throwTypeError("Expected integer for UInt16");
}, v => v);
const Int16 = type("Int16", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int16");
    return {
      type: "Int16",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int16",
      value: v
    };
  }
  throwTypeError("Expected positive integer for Int16");
}, v => v);
const UInt32 = type("UInt32", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt32");
    return {
      type: "UInt32",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt32",
      value: v
    };
  }
  throwTypeError("Expected integer for UInt32");
}, v => v);
const Int32 = type("Int32", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int32");
    return {
      type: "Int32",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int32",
      value: v
    };
  }
  throwTypeError("Expected positive integer for Int32");
}, v => v);
const UInt64 = type("UInt64", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt64");
    return {
      type: "UInt64",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt64",
      value: v
    };
  }
  throwTypeError("Expected integer for UInt64");
}, v => v);
const Int64 = type("Int64", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int64");
    return {
      type: "Int64",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int64",
      value: v
    };
  }
  throwTypeError("Expected positive integer for Int64");
}, v => v);
const UInt128 = type("UInt128", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt128");
    return {
      type: "UInt128",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt128",
      value: v
    };
  }
  throwTypeError("Expected integer for UInt128");
}, v => v);
const Int128 = type("Int128", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int128");
    return {
      type: "Int128",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int128",
      value: v
    };
  }
  throwTypeError("Expected positive integer for Int128");
}, v => v);
const UInt256 = type("UInt256", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("UInt256");
    return {
      type: "UInt256",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "UInt256",
      value: v
    };
  }
  throwTypeError("Expected integer for UInt256");
}, v => v);
const Int256 = type("Int256", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Int256");
    return {
      type: "Int256",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Int256",
      value: v
    };
  }
  throwTypeError("Expected integer for Int256");
}, v => v);
const Word8 = type("Word8", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Word8");
    return {
      type: "Word8",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Word8",
      value: v
    };
  }
  throwTypeError("Expected positive number for Word8");
}, v => v);
const Word16 = type("Word16", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Word16");
    return {
      type: "Word16",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Word16",
      value: v
    };
  }
  throwTypeError("Expected positive number for Word16");
}, v => v);
const Word32 = type("Word32", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Word32");
    return {
      type: "Word32",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Word32",
      value: v
    };
  }
  throwTypeError("Expected positive number for Word32");
}, v => v);
const Word64 = type("Word64", v => {
  if (isNumber(v) && isInteger(v)) {
    numberValuesDeprecationNotice("Word64");
    return {
      type: "Word64",
      value: v.toString()
    };
  }
  if (isString(v)) {
    return {
      type: "Word64",
      value: v
    };
  }
  throwTypeError("Expected positive number for Word64");
}, v => v);
const UFix64AndFix64NumberDeprecationNotice = () => {
  log.deprecate({
    subject: "Passing in Numbers as values for Fix64 and UFix64 types",
    pkg: "@onflow/types",
    transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number"
  });
};
const UFix64 = type("UFix64", v => {
  if (isString(v)) {
    const vParts = v.split(".");
    if (vParts.length !== 2) {
      throwTypeError(`Expected one decimal but found ${vParts.length} in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`);
    }
    if (vParts[1].length == 0 || vParts[1].length > 8) {
      throwTypeError(`Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ${vParts[1].length} digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`);
    }

    // make sure the number is extended to 8 decimal places so it matches cadence encoding of UFix values
    vParts[1] = vParts[1].padEnd(8, "0");
    v = vParts.join(".");
    return {
      type: "UFix64",
      value: v
    };
  } else if (isNumber(v)) {
    UFix64AndFix64NumberDeprecationNotice();
    return {
      type: "UFix64",
      value: v.toString()
    };
  }
  throwTypeError("Expected String for UFix64");
}, v => v);
const Fix64 = type("Fix64", v => {
  if (isString(v)) {
    const vParts = v.split(".");
    if (vParts.length !== 2) {
      throwTypeError(`Expected one decimal but found ${vParts.length} in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`);
    }
    if (vParts[1].length == 0 || vParts[1].length > 8) {
      throwTypeError(`Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ${vParts[1].length} digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`);
    }

    // make sure the number is extended to 8 decimal places so it matches cadence encoding of Fix64 values
    vParts[1] = vParts[1].padEnd(8, "0");
    v = vParts.join(".");
    return {
      type: "Fix64",
      value: v
    };
  } else if (isNumber(v)) {
    UFix64AndFix64NumberDeprecationNotice();
    return {
      type: "Fix64",
      value: v.toString()
    };
  }
  throwTypeError("Expected String for Fix64");
}, v => v);
const String = type("String", v => {
  if (isString(v)) return {
    type: "String",
    value: v
  };
  throwTypeError("Expected String for type String");
}, v => v);
const Character = type("Character", v => {
  if (isString(v)) return {
    type: "Character",
    value: v
  };
  throwTypeError("Expected Character for type Character");
}, v => v);
const Bool = type("Bool", v => {
  if (isBoolean(v)) return {
    type: "Bool",
    value: v
  };
  throwTypeError("Expected Boolean for type Bool");
}, v => v);
const Address = type("Address", v => {
  if (isString(v)) return {
    type: "Address",
    value: v
  };
  throwTypeError("Expected Address for type Address");
}, v => v);
const Void = type("Void", v => {
  if (!v || isNull(v)) return {
    type: "Void"
  };
  throwTypeError("Expected Void for type Void");
}, v => v);
const Optional = children => type("Optional", v => ({
  type: "Optional",
  value: isNull(v) ? null : children.asArgument(v)
}), v => v);
const Reference = type("Reference", v => {
  if (isObj(v)) return {
    type: "Reference",
    value: v
  };
  throwTypeError("Expected Object for type Reference");
}, v => v);
const _Array = function () {
  let children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return type("Array", v => {
    return {
      type: "Array",
      value: isArray(children) ? children.map((c, i) => c.asArgument(v[i])) : v.map(x => children.asArgument(x))
    };
  }, v => v);
};
const Dictionary = function () {
  let children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return type("Dictionary", v => {
    if (isObj(v)) return {
      type: "Dictionary",
      value: isArray(children) ? children.map((c, i) => ({
        key: c.key.asArgument(v[i].key),
        value: c.value.asArgument(v[i].value)
      })) : isArray(v) ? v.map(x => ({
        key: children.key.asArgument(x.key),
        value: children.value.asArgument(x.value)
      })) : [{
        key: children.key.asArgument(v.key),
        value: children.value.asArgument(v.value)
      }]
    };
    throwTypeError("Expected Object for type Dictionary");
  }, v => v);
};
const Event = function (id) {
  let fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return type("Event", v => {
    if (isObj(v)) return {
      type: "Event",
      value: {
        id: id,
        fields: isArray(fields) ? fields.map((c, i) => ({
          name: v.fields[i].name,
          value: c.value.asArgument(v.fields[i].value)
        })) : v.fields.map(x => ({
          name: x.name,
          value: fields.value.asArgument(x.value)
        }))
      }
    };
    throwTypeError("Expected Object for type Event");
  }, v => v);
};
const Resource = function (id) {
  let fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return type("Resource", v => {
    if (isObj(v)) return {
      type: "Resource",
      value: {
        id: id,
        fields: isArray(fields) ? fields.map((c, i) => ({
          name: v.fields[i].name,
          value: c.value.asArgument(v.fields[i].value)
        })) : v.fields.map(x => ({
          name: x.name,
          value: fields.value.asArgument(x.value)
        }))
      }
    };
    throwTypeError("Expected Object for type Resource");
  }, v => v);
};
const Struct = function (id) {
  let fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return type("Struct", v => {
    if (isObj(v)) return {
      type: "Struct",
      value: {
        id: id,
        fields: isArray(fields) ? fields.map((c, i) => ({
          name: v.fields[i].name,
          value: c.value.asArgument(v.fields[i].value)
        })) : v.fields.map(x => ({
          name: x.name,
          value: fields.value.asArgument(x.value)
        }))
      }
    };
    throwTypeError("Expected Object for type Struct");
  }, v => v);
};
const Enum = function (id) {
  let fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return type("Enum", v => {
    if (isObj(v)) return {
      type: "Enum",
      value: {
        id: id,
        fields: isArray(fields) ? fields.map((c, i) => ({
          name: v.fields[i].name,
          value: c.value.asArgument(v.fields[i].value)
        })) : v.fields.map(x => ({
          name: x.name,
          value: fields.value.asArgument(x.value)
        }))
      }
    };
    throwTypeError("Expected Object for type Enum");
  }, v => v);
};
const Path = type("Path", v => {
  if (isObj(v)) {
    if (!isString(v.domain)) {
      throwTypeError(`Expected a string for the Path domain but found ${v.domain}. Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path`);
    }
    if (!(v.domain === "storage" || v.domain === "private" || v.domain === "public")) {
      throwTypeError(`Expected either "storage", "private" or "public" as the Path domain but found ${v.domain}. Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path`);
    }
    if (!isString(v.identifier)) {
      throwTypeError(`Expected a string for the Path identifier but found ${v.identifier}. Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path`);
    }
    return {
      type: "Path",
      value: {
        domain: v.domain,
        identifier: v.identifier
      }
    };
  }
  throwTypeError("Expected Object for type Path");
}, v => v);




/***/ })

}]);
//# sourceMappingURL=npm-ns.onflow.types.js.map