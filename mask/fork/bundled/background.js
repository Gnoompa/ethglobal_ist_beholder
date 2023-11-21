/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 49924:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _entry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36023);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_entry_js__WEBPACK_IMPORTED_MODULE_0__]);
_entry_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The deferred module cache
/******/ 	var __webpack_module_deferred_exports__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: __webpack_module_deferred_exports__[moduleId] || {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 		// delete __webpack_module_deferred_exports__[module];
/******/ 		// skipped because strictModuleErrorHandling is not enabled.
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 9759) return "bundled/npm.react-use.js";
/******/ 			if (chunkId === 9141) return "bundled/npm.tss-react.js";
/******/ 			if (chunkId === 2486) return "bundled/npm-ns.mui.base.js";
/******/ 			if (chunkId === 1555) return "bundled/npm.react-transition-group.js";
/******/ 			if (chunkId === 4586) return "bundled/npm.react-i18next.js";
/******/ 			if (chunkId === 5105) return "bundled/npm.react-dom.js";
/******/ 			if (chunkId === 5178) return "bundled/npm-ns.popperjs.core.js";
/******/ 			if (chunkId === 5598) return "bundled/5598.js";
/******/ 			if (chunkId === 6751) return "bundled/6751.js";
/******/ 			if (chunkId === 8145) return "bundled/npm.notistack.js";
/******/ 			if (chunkId === 5313) return "bundled/npm.tinycolor2.js";
/******/ 			if (chunkId === 5336) return "bundled/npm-ns.remix-run.router.js";
/******/ 			if (chunkId === 3617) return "bundled/npm.react-router.js";
/******/ 			if (chunkId === 6060) return "bundled/6060.js";
/******/ 			if (chunkId === 1216) return "bundled/npm.react-router-dom.js";
/******/ 			if (chunkId === 6565) return "bundled/npm.qrcode.js";
/******/ 			if (chunkId === 486) return "bundled/486.js";
/******/ 			if (chunkId === 3271) return "bundled/3271.js";
/******/ 			// return url for filenames based on template
/******/ 			return "bundled/chunk." + ({"598":"npm.react-markdown","1006":"npm.ipfs-unixfs","1014":"npm.parse5","1440":"npm.validator","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1696":"npm.jsbi","1883":"npm-ns.scamsniffer.detector","2135":"npm.bloom-filters","2162":"npm.z-schema","2284":"npm.mdast-util-to-hast","2538":"npm.parse-domain","2757":"npm.quill-delta-to-html","2939":"npm-ns.uniswap.v3-sdk","3513":"npm.micromark","3526":"npm-ns.uniswap.v3-staker","3850":"npm.arweave","4038":"npm.cborg","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4548":"npm.vfile","4590":"npm-ns.uniswap.sdk-core","5215":"npm.xxhashjs","5258":"MaskWallet","5643":"npm.cuint","5655":"npm.ipfs-core-utils","5715":"npm.micromark-core-commonmark","5784":"npm.big.js","5787":"npm.warp-contracts","6572":"npm-ns.uniswap.swap-router-contracts","6601":"npm.linkifyjs","7100":"npm-ns.multiformats.multiaddr","7174":"npm.mdast-util-from-markdown","7372":"npm.ipfs-http-client","7525":"npm-ns.streamparser.json","7696":"npm.color-convert","7913":"npm.lodash","8132":"npm.seedrandom","8370":"npm.dompurify","8393":"npm.lodash.get","8685":"npm.long","8787":"npm.property-information","9197":"npm.decimal.js-light","9858":"npm.merkletreejs"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var dynamicImportLoader = (url, done, chunkId) => {
/******/ 			import(url).then(() => done(), (e) => {
/******/ 				console.warn('jsonp chunk loader failed to use dynamic import.', e)
/******/ 				fallbackLoader(url, done, chunkId)
/******/ 			})
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (typeof location === 'object' && location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
/******/ 		var fallbackLoader = __webpack_require__.l
/******/ 		__webpack_require__.l = dynamicImportLoader
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make deferred namespace object */
/******/ 	(() => {
/******/ 		__webpack_require__.z = (moduleId, mode) => {
/******/ 			// mode: 0 => namespace (esm)
/******/ 			// mode: 1 => default-only (esm strict cjs)
/******/ 			// mode: 2 => default-with-named (esm-cjs compat)
/******/ 			// mode: 3 => dynamic (if exports has __esModule, then esm, otherwise default-with-named)
/******/ 		
/******/ 			var cachedModule = __webpack_module_cache__[moduleId];
/******/ 			// optimization not applied when output.strictModuleErrorHandling is off
/******/ 		
/******/ 			if (mode == 1) {
/******/ 				var ns = { __proto__: null };
/******/ 				__webpack_require__.r(ns);
/******/ 				__webpack_require__.d(ns, {
/******/ 					"default": () => (__webpack_require__(moduleId))
/******/ 				});
/******/ 				return ns;
/******/ 			}
/******/ 		
/******/ 			var init = () => {
/******/ 				ns = __webpack_require__(moduleId);
/******/ 				if (__webpack_require__.aE in ns) ns = ns[__webpack_require__.aE];
/******/ 				init = null;
/******/ 				if (mode == 3) {
/******/ 					if (ns.__esModule) mode = 0;
/******/ 					else mode = 2;
/******/ 				}
/******/ 				if (mode) return ns;
/******/ 				delete handler.defineProperty;
/******/ 				delete handler.deleteProperty;
/******/ 				delete handler.set;
/******/ 				delete handler.get;
/******/ 				delete handler.has;
/******/ 				delete handler.ownKeys;
/******/ 				delete handler.getOwnPropertyDescriptor;
/******/ 				return ns;
/******/ 			};
/******/ 		
/******/ 			ns = cachedModule && cachedModule.exports || __webpack_module_deferred_exports__[moduleId] || (__webpack_module_deferred_exports__[moduleId] = { __proto__: null });
/******/ 			var handler = {
/******/ 				__proto__: null,
/******/ 				get: (_, name) => {
/******/ 					switch (name) {
/******/ 						case "__esModule": return true;
/******/ 						case Symbol.toStringTag: return "Module";
/******/ 					}
/******/ 					init?.();
/******/ 					// possible mode: 0, 2
/******/ 					// for mode 2, ns.default is re-evaluated every time to reflect the latest module.exports value.
/******/ 					// for the rest, we access the initial namespace object to keep esm semantics (export list is static).
/******/ 					if (mode == 0 || !__webpack_require__.o(ns, "default")) return ns[name];
/******/ 					return __webpack_require__(moduleId);
/******/ 				},
/******/ 				has: (_, name) => {
/******/ 					switch (name) {
/******/ 						case "__esModule":
/******/ 						case Symbol.toStringTag:
/******/ 						case __webpack_require__.zS:
/******/ 							return true;
/******/ 					}
/******/ 					if (init) init();
/******/ 					return name in ns;
/******/ 				},
/******/ 				ownKeys: () => {
/******/ 					if (init) init();
/******/ 					return Reflect.ownKeys(ns);
/******/ 				},
/******/ 				getOwnPropertyDescriptor: (_, name) => {
/******/ 					switch (name) {
/******/ 						case "__esModule": return { value: true, configurable: !!mode };
/******/ 						case Symbol.toStringTag: return { value: "Module", configurable: !!mode };
/******/ 					}
/******/ 					if (init) init();
/******/ 					var desc = Reflect.getOwnPropertyDescriptor(ns, name);
/******/ 					if (mode == 2 && name == "default" && !desc) {
/******/ 						desc = { value: ns, configurable: true };
/******/ 					}
/******/ 					return desc;
/******/ 				},
/******/ 				defineProperty: (_, name) => {
/******/ 					if (init) init();
/******/ 					return Reflect.defineProperty(ns, name);
/******/ 				},
/******/ 				deleteProperty: () => (false),
/******/ 				set: () => (false),
/******/ 			}
/******/ 			return new Proxy(ns, handler);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 3352;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "assets/" + wasmModuleHash + ".wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			3352: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loader fallback */
/******/ 	(() => {
/******/ 		  const isBrowser = !!(() => {
/******/ 		    try {
/******/ 		      if (typeof browser.runtime.getURL === 'function') return true
/******/ 		    } catch (err) { }
/******/ 		  })()
/******/ 		  const runtime = isBrowser ? browser : chrome
/******/ 		  runtime.runtime.onMessage.addListener((message, sender, sendResponse) => {
/******/ 		    const cond = message && message.type === 'WTW_INJECT' && sender && sender.tab && sender.tab.id != null
/******/ 		    if (!cond) return
/******/ 		    let file = message.file
/******/ 		    try {
/******/ 		      file = new URL(file).pathname
/******/ 		    } catch {}
/******/ 		    if (!file) return
/******/ 		    if (runtime.scripting) {
/******/ 		      runtime.scripting
/******/ 		        .executeScript({
/******/ 		          target: { tabId: sender.tab.id, frameIds: [sender.frameId] },
/******/ 		          files: [file],
/******/ 		        })
/******/ 		        .then(sendResponse)
/******/ 		    } else {
/******/ 		      const details = { frameId: sender.frameId, file }
/******/ 		      if (isBrowser) {
/******/ 		        runtime.tabs.executeScript(sender.tab.id, details).then(sendResponse)
/******/ 		      } else {
/******/ 		        runtime.tabs.executeScript(sender.tab.id, details, sendResponse)
/******/ 		      }
/******/ 		    }
/******/ 		    return true
/******/ 		  })
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,8672,8136,9742,2222,4454,6949,2698,3453,3294,3638,12,187,3147,3742,3693,5756,7849,1077,2735,5132,2619,5737,2624,7425,2780,5838,9239,9749,6077,551,3959,3846,9227,3409,6316,5951,5687,686,8129,2093,237,2305,7512,9744,2912,444,1432,2299,6160,9262,4544,5891,2503,9278,7765,5229,211,1947,3883,9313,4960,253,9566,1305,9517,572,9834,4570,8712,3981,5553,2088,1183,3177,1020,5464,3832,5717,516,1377,9527,9223,2974,5058,5597,7822,6067,6904,79,7856,2118,4557,234,9536,708,2891,4029,4918,8547,3619,1528,9447,8117,4275,2406,4396,828,2943,5426,4278,6265,49,5438,3493,324,6220,2402,4124], () => (__webpack_require__(49924)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map