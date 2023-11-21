"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[12],{

/***/ 23212:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ LiveSelector)
/* harmony export */ });
/**
 * Create a live selector that can continuously select the element you want.
 *
 * @remarks
 * Call {@link LiveSelector.evaluate | #evaluate} to evaluate the element. Falsy value will be ignored.
 *
 * @param T - Type of Element that LiveSelector contains
 *
 * @example
 * ```ts
 * const ls = new LiveSelector().querySelectorAll('a').map(x => x.href)
 * ls.evaluate() // returns all urls at the current time.
 * ```
 */
class LiveSelector {
    initialElements;
    /**
     * Create a new LiveSelector.
     *
     * @param initialElements - provides initial results, equals to `.replace(() => initialElements)`
     */
    constructor(initialElements = []) {
        this.initialElements = initialElements;
    }
    /**
     * Let developer knows where does this LiveSelector created.
     */
    stack = new Error().stack;
    /**
     * Is this LiveSelector run in the SingleMode
     */
    isSingleMode = false;
    /**
     * Enable single mode. Only 1 result will be emitted.
     */
    enableSingleMode() {
        this.isSingleMode = true;
        return this;
    }
    /**
     * Record a method call into {@link LiveSelector.selectorChain}
     */
    appendSelectorChain = (type) => (param) => {
        this.selectorChain.push({ type: type, param: param });
        return this;
    };
    /**
     * Records of previous calls on LiveSelector
     */
    selectorChain = [];
    /**
     * Clone this LiveSelector and return a new LiveSelector.
     * @returns a new LiveSelector with same action
     * @example
     * ```ts
     * ls.clone()
     * ```
     */
    clone() {
        const ls = new LiveSelector(this.initialElements);
        ls.selectorChain.push(...this.selectorChain);
        ls.isSingleMode = this.isSingleMode;
        return ls;
    }
    querySelector(selector) {
        return this.appendSelectorChain('querySelector')(selector);
    }
    querySelectorAll(selector) {
        return this.appendSelectorChain('querySelectorAll')(selector);
    }
    getElementsByClassName(className) {
        return this.appendSelectorChain('getElementsByClassName')(className);
    }
    getElementsByTagName(tag) {
        return this.appendSelectorChain('getElementsByTagName')(tag);
    }
    closest(selectors) {
        return this.appendSelectorChain('closest')(selectors);
    }
    filter(f) {
        return this.appendSelectorChain('filter')(f);
    }
    /**
     * Calls a defined callback function on each element of a LiveSelector, and continues with the results.
     *
     * @param callbackfn - Map function
     * @example
     * ```ts
     * ls.map(x => x.parentElement)
     * ```
     */
    map(callbackfn) {
        return this.appendSelectorChain('map')(callbackfn);
    }
    /**
     * Combines two LiveSelector.
     * @param newEle - Additional LiveSelector to combine.
     * @param NextType - Next type generic for LiveSelector
     *
     * @example
     * ```ts
     * ls.concat(new LiveSelector().querySelector('#root'))
     * ```
     */
    concat(newEle) {
        return this.appendSelectorChain('concat')(newEle);
    }
    /**
     * Reverses the elements in an Array.
     *
     * @example
     * ```ts
     * ls.reverse()
     * ```
     */
    reverse() {
        return this.appendSelectorChain('reverse')(undefined);
    }
    /**
     * Returns a section of an array.
     * @param start - The beginning of the specified portion of the array.
     * @param end - The end of the specified portion of the array.
     *
     * @example
     * ```ts
     * ls.slice(2, 4)
     * ```
     */
    slice(start, end) {
        return this.appendSelectorChain('slice')([start, end]);
    }
    /**
     * Sorts an array.
     * @param compareFn - The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
     *
     * @example
     * ```ts
     * ls.sort((a, b) => a.innerText.length - b.innerText.length)
     * ```
     */
    sort(compareFn) {
        return this.appendSelectorChain('sort')(compareFn);
    }
    /**
     * Flat T[][] to T[]
     *
     * @example
     * ```ts
     * ls.flat()
     * ```
     */
    flat() {
        return this.appendSelectorChain('flat')(undefined);
    }
    /**
     * Select only nth element
     *
     * @param n - Select only nth element, allow negative number.
     * @example
     * ```ts
     * ls.at(-1)
     * ```
     */
    at(n) {
        if (typeof n !== 'number')
            throw new Error('n must be a number');
        if (this.isSingleMode)
            throw new Error('LiveSelector.nth() is not available in SingleMode');
        return this.appendSelectorChain('at')(n);
    }
    /**
     * Replace the whole array.
     *
     * @example
     * ```ts
     * ls.replace(x => lodash.dropRight(x, 2))
     * ```
     *
     * @param f - returns new array.
     */
    replace(f) {
        return this.appendSelectorChain('replace')(f);
    }
    //#endregion
    //#region Build
    /**
     * Evaluate selector expression
     */
    evaluate() {
        let arr = this.initialElements;
        function isElementArray(x) {
            // Do a simple check
            return x[0] instanceof Element;
        }
        function nonNull(x) {
            return x !== null && x !== undefined;
        }
        function unique(x) {
            return Array.from(new Set(x));
        }
        let previouslyNulled = false;
        for (const op of this.selectorChain) {
            // if in single mode, drop other results.
            if (this.isSingleMode && arr.length > 1)
                arr = [arr[0]];
            switch (op.type) {
                case 'querySelector': {
                    if (!previouslyNulled) {
                        if (arr.length === 0) {
                            const e = document.querySelector(op.param);
                            if (e)
                                arr = unique(arr.concat(e));
                            else
                                previouslyNulled = true;
                        }
                        else if (isElementArray(arr)) {
                            arr = unique(arr.map((e) => e.querySelector(op.param)).filter(nonNull));
                            if (arr.length === 0)
                                previouslyNulled = true;
                        }
                        else
                            throw new TypeError('Call querySelector on non-Element item!');
                    }
                    break;
                }
                case 'getElementsByTagName':
                case 'getElementsByClassName':
                case 'querySelectorAll': {
                    if (!previouslyNulled) {
                        []; // Fix editor syntax highlight
                        if (arr.length === 0) {
                            const e = document[op.type](op.param);
                            arr = unique(arr.concat(...e));
                            if (e.length === 0)
                                previouslyNulled = true;
                        }
                        else if (isElementArray(arr)) {
                            let newArr = [];
                            for (const e of arr) {
                                newArr = newArr.concat(Array.from(e[op.type](op.param)));
                            }
                            arr = unique(newArr.filter(nonNull));
                            if (arr.length === 0)
                                previouslyNulled = true;
                        }
                        else
                            throw new TypeError(`Call ${op.type} on non-Element item!`);
                    }
                    break;
                }
                case 'closest':
                    if (arr.length === 0) {
                        break;
                    }
                    else if (isElementArray(arr)) {
                        const newArr = arr;
                        const selector = op.param;
                        function findParent(node, y) {
                            if (y < 0)
                                throw new TypeError('Cannot use `.closet` with a negative number');
                            if (y === 0)
                                return node;
                            if (!node.parentElement)
                                return null;
                            return findParent(node.parentElement, y - 1);
                        }
                        if (typeof selector === 'number') {
                            arr = unique(newArr.map((e) => findParent(e, selector)).filter(nonNull));
                        }
                        else {
                            arr = unique(newArr.map((x) => x.closest(selector)).filter(nonNull));
                        }
                    }
                    else {
                        throw new TypeError('Cannot use `.closet on non-Element`');
                    }
                    break;
                case 'filter':
                    arr = arr.filter((e, i, a) => op.param(e, i, [...a])).filter(nonNull);
                    break;
                case 'map':
                    arr = arr.map((e, i, a) => op.param(e, i, [...a])).filter(nonNull);
                    break;
                case 'concat':
                    arr = arr.concat(op.param.evaluate());
                    break;
                case 'reverse':
                    arr = Array.from(arr).reverse();
                    break;
                case 'slice': {
                    const [start, end] = op.param;
                    arr = arr.slice(start, end);
                    break;
                }
                case 'sort':
                    arr = Array.from(arr).sort(op.param);
                    break;
                case 'at': {
                    arr = [at(arr, op.param)].filter(nonNull);
                    break;
                }
                case 'flat':
                    arr = [].concat(...arr);
                    break;
                case 'replace':
                    arr = op.param(Array.from(arr));
                    break;
                default:
                    throw new TypeError('Unknown operation type');
            }
        }
        if (this.isSingleMode)
            return arr.filter(nonNull)[0];
        return arr.filter(nonNull);
    }
}
// https://github.com/tc39/proposal-relative-indexing-method
function at(arr, n) {
    /* eslint-disable @typescript-eslint/strict-boolean-expressions */
    n = Math.trunc(n) || 0;
    if (n < 0)
        n += arr.length;
    if (n < 0 || n >= arr.length)
        return undefined;
    return arr[n];
}


/***/ }),

/***/ 6806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ DOMProxy)
/* harmony export */ });
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93441);
}

/**
 * DOMProxy provide an interface that be stable even dom is changed.
 *
 * @remarks
 *
 * DOMProxy provide 3 nodes. `before`, `current` and `after`.
 * `current` is a fake dom node powered by Proxy,
 * it will forward all your operations to the `realCurrent`.
 *
 * `before` and `after` is a true `span` that always point to before and after of `realCurrent`
 *
 * Special Handlers:
 *
 * *forward*: forward to current `realCurrent`
 *
 * *undo*: undo effect when `realCurrent` changes
 *
 * *move*: move effect to new `realCurrent`
 *
 * - style (forward, undo, move)
 * - addEventListener (forward, undo, move)
 * - appendChild (forward, undo, move)
 */
function DOMProxy(options = {}) {
    const event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    // Options
    const { createAfter, createBefore, afterShadowRootInit, beforeShadowRootInit } = {
        ...{
            createAfter: () => document.createElement('span'),
            createBefore: () => document.createElement('span'),
            afterShadowRootInit: { mode: 'open' },
            beforeShadowRootInit: { mode: 'open' },
        },
        ...options,
    };
    //
    let isDestroyed = false;
    // Nodes
    let virtualBefore = null;
    let virtualBeforeShadow = null;
    const defaultCurrent = document.createElement('div');
    let current = defaultCurrent;
    let virtualAfter = null;
    let virtualAfterShadow = null;
    /** All changes applied on the `proxy` */
    const changes = [];
    /** Proxy Traps */
    const proxyTraps = {
        get: (t, key, r) => {
            const current_ = current;
            if (typeof current_[key] === 'function')
                return new Proxy(current_[key], {
                    apply: (target, thisArg, args) => {
                        changes.push({ type: 'callMethods', op: { name: key, param: args, thisArg } });
                        return current_[key](...args);
                    },
                });
            else if (key === 'style')
                return new Proxy(current.style, {
                    set: (t, styleKey, styleValue, r) => {
                        changes.push({
                            type: 'modifyStyle',
                            op: { name: styleKey, value: styleValue, originalValue: current_.style[styleKey] },
                        });
                        current_.style[styleKey] = styleValue;
                        return true;
                    },
                });
            return current_[key];
        },
        deleteProperty: (t, key) => {
            changes.push({ type: 'delete', op: key });
            return Reflect.deleteProperty(current, key);
        },
        set: (t, key, value, r) => {
            changes.push({ type: 'set', op: [key, value] });
            return (current[key] = value);
        },
        defineProperty: (t, key, attributes) => {
            changes.push({ type: 'defineProperty', op: [key, attributes] });
            return Reflect.defineProperty(current, key, attributes);
        },
        preventExtensions: (t) => {
            changes.push({ type: 'preventExtensions', op: undefined });
            return Reflect.preventExtensions(current);
        },
        setPrototypeOf: (t, prototype) => {
            changes.push({ type: 'setPrototypeOf', op: prototype });
            return Reflect.setPrototypeOf(current, prototype);
        },
    };
    const proxy = Proxy.revocable(defaultCurrent, proxyTraps);
    function hasStyle(e) {
        return 'style' in e;
    }
    /** Call before realCurrent change */
    function undoEffects(nextCurrent) {
        for (const change of changes) {
            if (change.type === 'callMethods') {
                const attr = change.op.name;
                if (attr === 'addEventListener') {
                    current.removeEventListener(...change.op.param);
                }
                else if (attr === 'appendChild') {
                    if (!nextCurrent) {
                        const node = change.op.thisArg[0];
                        if (node !== undefined)
                            current.removeChild(node);
                    }
                }
            }
            else if (change.type === 'modifyStyle') {
                const { name, value, originalValue } = change.op;
                if (hasStyle(current)) {
                    current.style[name] = originalValue;
                }
            }
        }
    }
    /** Call after realCurrent change */
    function redoEffects() {
        if (current === defaultCurrent)
            return;
        const t = {};
        for (const change of changes) {
            if (change.type === 'setPrototypeOf')
                Reflect.setPrototypeOf(current, change.op);
            else if (change.type === 'preventExtensions')
                Reflect.preventExtensions(current);
            else if (change.type === 'defineProperty')
                Reflect.defineProperty(current, change.op[0], change.op[1]);
            else if (change.type === 'set')
                Reflect.set(current, change.op[0], change.op[1], t);
            else if (change.type === 'delete')
                Reflect.deleteProperty(current, change.op);
            else if (change.type === 'callMethods') {
                const replayable = ['appendChild', 'addEventListener', 'before', 'after'];
                const key = change.op.name;
                if (replayable.indexOf(key) !== -1) {
                    if (current[key] !== undefined) {
                        ;
                        current[key](...change.op.param);
                    }
                    else {
                        console.warn(current, `doesn't have method "${key}", replay failed.`);
                    }
                }
            }
            else if (change.type === 'modifyStyle') {
                ;
                current.style[change.op.name] = change.op.value;
            }
        }
    }
    // MutationObserver
    const noop = () => { };
    let observerCallback = noop;
    let mutationObserverInit = undefined;
    let observer = null;
    function reObserve(reinit) {
        observer && observer.disconnect();
        if (observerCallback === noop || current === defaultCurrent)
            return;
        if (reinit || !observer)
            observer = new MutationObserver(observerCallback);
        observer.observe(current, mutationObserverInit);
    }
    const DOMProxyObject = {
        observer: {
            set callback(v) {
                if (v === undefined)
                    v = noop;
                observerCallback = v;
                reObserve(true);
            },
            get callback() {
                return observerCallback;
            },
            get init() {
                return mutationObserverInit;
            },
            set init(v) {
                mutationObserverInit = v;
                reObserve(false);
            },
            get observer() {
                return observer;
            },
        },
        get destroyed() {
            return isDestroyed;
        },
        get before() {
            if (isDestroyed)
                throw new TypeError('Try to access `before` node after DOMProxy is destroyed');
            if (!virtualBefore) {
                virtualBefore = createBefore();
                if (current instanceof Element)
                    current.before(virtualBefore);
            }
            return virtualBefore;
        },
        get beforeShadow() {
            if (!virtualBeforeShadow)
                virtualBeforeShadow = this.before.attachShadow(beforeShadowRootInit);
            return virtualBeforeShadow;
        },
        get current() {
            if (isDestroyed)
                throw new TypeError('Try to access `current` node after DOMProxy is destroyed');
            return proxy.proxy;
        },
        get after() {
            if (isDestroyed)
                throw new TypeError('Try to access `after` node after DOMProxy is destroyed');
            if (!virtualAfter) {
                virtualAfter = createAfter();
                if (current instanceof Element)
                    current.after(virtualAfter);
            }
            return virtualAfter;
        },
        get afterShadow() {
            if (!virtualAfterShadow)
                virtualAfterShadow = this.after.attachShadow(afterShadowRootInit);
            return virtualAfterShadow;
        },
        has(type) {
            if (type === 'before')
                return virtualBefore;
            else if (type === 'after')
                return virtualAfter;
            else if (type === 'afterShadow')
                return virtualAfterShadow;
            else if (type === 'beforeShadow')
                return virtualBeforeShadow;
            else
                return null;
        },
        get realCurrent() {
            if (isDestroyed)
                return null;
            if (current === defaultCurrent)
                return null;
            return current;
        },
        set realCurrent(node) {
            const old = current;
            if (isDestroyed)
                throw new TypeError('You can not set current for a destroyed proxy');
            if (node === current)
                return;
            if ((node === virtualAfter || node === virtualBefore) && node !== null) {
                console.warn("In the DOMProxy, you're setting .realCurrent to this DOMProxy's virtualAfter or virtualBefore. Doing this may cause bugs. If you're confused with this warning, check your rules for LiveSelector.", this);
            }
            undoEffects(node);
            reObserve(false);
            if (node === null || node === undefined) {
                current = defaultCurrent;
                if (virtualBefore)
                    virtualBefore.remove();
                if (virtualAfter)
                    virtualAfter.remove();
            }
            else {
                current = node;
                if (virtualAfter && current instanceof Element)
                    current.after(virtualAfter);
                if (virtualBefore && current instanceof Element)
                    current.before(virtualBefore);
                redoEffects();
            }
            event.emit('currentChanged', { new: node, old });
        },
        destroy() {
            observer && observer.disconnect();
            isDestroyed = true;
            proxy.revoke();
            virtualBeforeShadow = null;
            virtualAfterShadow = null;
            if (virtualBefore)
                virtualBefore.remove();
            if (virtualAfter)
                virtualAfter.remove();
            virtualBefore = null;
            virtualAfter = null;
            current = defaultCurrent;
        },
    };
    Object.defineProperties(event, Object.getOwnPropertyDescriptors(DOMProxyObject));
    return event;
}


/***/ }),

/***/ 92256:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Watcher)
/* harmony export */ });
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Proxy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6806);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _util_requestIdleCallback_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58166);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9402);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3398);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43050);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70358);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _util_timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86862);
}
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _util_EventTarget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13252);
}
/**
 * WatcherClass provides an abstract implementation of a watcher to the LiveSelector
 *
 * You should extend it and implement your own watch logic.
 *
 * Built-in watcher:
 *
 * - Mutation Observer watcher (based on MutationObserver api, watch DOM changes)
 * - Interval watcher (based on time interval)
 * - Event watcher (based on addEventListener)
 */





/**
 * Use LiveSelector to watch dom change
 */
class Watcher {
    events = (0,_util_EventTarget_js__WEBPACK_IMPORTED_MODULE_0__/* .createEventTarget */ .h)();
    /**
     * The liveSelector that this object holds.
     */
    liveSelector;
    constructor(liveSelector) {
        this.liveSelector = liveSelector.clone();
    }
    //#region How to start and stop the watcher
    /** Let the watcher start to watching */
    startWatch(...args) {
        this.isWatching = true;
        this._warning_forget_watch_.ignored = true;
        this.watcherChecker();
        return this;
    }
    /** Stop the watcher */
    stopWatch(...args) {
        this.isWatching = false;
    }
    /** Is the watcher running */
    isWatching = false;
    //#endregion
    //#region useForeach
    /** Saved useForeach */
    useForeachFn;
    /**
     * Just like React hooks. Provide callbacks for each node changes.
     *
     * @param forEachFunction - You can return a set of functions that will be called on changes.
     *
     * @remarks
     *
     * Return value of `fn`
     *
     * - `void`: No-op
     *
     * - `((oldNode: T) => void)`: it will be called when the node is removed.
     *
     * - `{ onRemove?: (old: T) => void; onTargetChanged?: (newNode: T, oldNode: T) => void; onNodeMutation?: (node: T) => void }`,
     *
     * - - `onRemove` will be called when node is removed.
     *
     * - - `onTargetChanged` will be called when the node is still existing but target has changed.
     *
     * - - `onNodeMutation` will be called when the node is the same, but it inner content or attributes are modified.
     *
     * @example
     * ```
     * // ? if your LiveSelector return Element
     * watcher.useForeach((node, key, meta) => {
     *     console.log(node.innerHTML) // when a new key is found
     *     return {
     *         onRemove() { console.log('The node is gone!') },
     *         onTargetChanged() {
     *             console.log('Key is the same, but the node has changed!')
     *             console.log(node.innerHTML) // `node` is still the latest node!
     *             // appendChild, addEventListener will not lost too!
     *         },
     *         onNodeMutation() {
     *             console.log('Key and node are both the same, but node has been mutated.')
     *         }
     *     }
     * })
     *
     * // ? if your LiveSelector does not return Element but something else
     * watcher.useForeach((value, key) => {
     *     console.log(value) // your value here.
     *     return {
     *         onRemove() { console.log('The value is gone!') },
     *         onTargetChanged(value) {
     *             console.log('Key is the same, but the value has changed!')
     *             console.log(value) // New value
     *         }
     *     }
     * })
     *
     * ```
     */
    useForeach(forEach) {
        if (this.useForeachFn) {
            console.warn("You can't chain useForeach currently. The old one will be replaced.");
        }
        this.useForeachFn = forEach;
        return this;
    }
    //#endregion
    //#region .then()
    defaultStarterForThen() {
        this.startWatch();
    }
    /**
     * Start the watcher, once it emitted data, stop watching.
     * @param map - Map function transform T to Result
     * @param options - Options for watcher
     *
     * @remarks This is an implementation of `PromiseLike`
     *
     * @example
     * ```ts
     * const value = await watcher
     * const value2 = await watcher(undefined, undefined, { minimalResultsRequired: 5 })
     * ```
     */
    // The PromiseLike<T> interface
    then(onfulfilled, onrejected, options = {}) {
        this.defaultStarterForThen();
        const { minimalResultsRequired, timeout: timeoutTime } = {
            ...{
                minimalResultsRequired: 1,
                timeout: Infinity,
            },
            ...options,
        };
        let done = () => { };
        const then = async () => {
            if (minimalResultsRequired < 1)
                throw new TypeError('Invalid minimalResultsRequired, must equal to or bigger than 1');
            if (this.singleMode && minimalResultsRequired > 1) {
                console.warn('In single mode, the watcher will ignore the option minimalResultsRequired');
            }
            const result = this.liveSelector.evaluate();
            if (Array.isArray(result) && result.length >= minimalResultsRequired) {
                // If we get the value now, return it
                return result;
            }
            else if (this.singleMode) {
                // If in single mode, return the value now
                return result;
            }
            // Or return a promise to wait the value
            return new Promise((resolve, reject) => {
                done = (state, val) => {
                    this.stopWatch();
                    this.removeListener('onIteration', f);
                    if (state)
                        resolve(val);
                    else
                        reject(val);
                };
                const f = (v) => {
                    const nodes = Array.from(v.current.values());
                    if (this.singleMode && nodes.length >= 1) {
                        return done(true, nodes[0]);
                    }
                    if (nodes.length < minimalResultsRequired)
                        return;
                    return done(true, nodes);
                };
                this.addListener('onIteration', f);
            });
        };
        const withTimeout = (0,_util_timeout_js__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .V)(then(), timeoutTime);
        withTimeout.finally(() => done(false, new Error('timeout')));
        return withTimeout.then(onfulfilled, onrejected);
    }
    //#endregion
    //#region Multiple mode
    /** Found key list of last watch */
    lastKeyList = [];
    /** Found Node list of last watch */
    lastNodeList = [];
    /** Saved callback map of last watch */
    lastCallbackMap = new Map();
    /** Saved DOMProxy of last watch */
    lastDOMProxyMap = new Map();
    /** Find node from the given list by key */
    findNodeFromListByKey = (list, keys) => (key) => {
        const i = keys.findIndex((x) => this.keyComparer(x, key));
        if (i === -1)
            return null;
        return list[i];
    };
    /** Watcher callback with single mode is off */
    normalModeWatcherCallback(currentIteration) {
        /** Key list in this iteration */
        const thisKeyList = this.mapNodeToKey === defaultMapNodeToKey ? currentIteration : currentIteration.map(this.mapNodeToKey);
        //#region Warn about repeated keys
        {
            const uniq = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(thisKeyList, this.keyComparer);
            if (uniq.length < thisKeyList.length) {
                this._warning_repeated_keys.warn(() => console.warn('There are repeated keys in your watcher. uniqKeys:', uniq, 'allKeys:', thisKeyList, ', to omit this warning, call `.omitWarningForRepeatedKeys()`'));
            }
        }
        //#endregion
        // New maps for the next generation
        /** Next generation Callback map */
        const nextCallbackMap = new Map();
        /** Next generation DOMProxy map */
        const nextDOMProxyMap = new Map();
        //#region Key is gone
        // Do: Delete node
        const findFromLast = this.findNodeFromListByKey(this.lastNodeList, this.lastKeyList);
        const goneKeys = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this.lastKeyList, thisKeyList, this.keyComparer);
        {
            for (const oldKey of goneKeys) {
                const proxy = this.lastDOMProxyMap.get(oldKey);
                const callbacks = this.lastCallbackMap.get(oldKey);
                const node = findFromLast(oldKey);
                this.requestIdleCallback(() => {
                    applyUseForeachCallback(callbacks)('remove')(node);
                    if (proxy)
                        proxy.destroy();
                }, 
                // Delete node don't need a short timeout.
                { timeout: 2000 });
            }
        }
        //#endregion
        //#region Key is new
        // Do: Add node
        const findFromNew = this.findNodeFromListByKey(currentIteration, thisKeyList);
        const newKeys = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(thisKeyList, this.lastKeyList, this.keyComparer);
        {
            for (const newKey of newKeys) {
                if (!this.useForeachFn)
                    break;
                const value = findFromNew(newKey);
                if (value instanceof Node) {
                    const proxy = (0,_Proxy_js__WEBPACK_IMPORTED_MODULE_4__/* .DOMProxy */ .E)(this.domProxyOption);
                    proxy.realCurrent = value;
                    // This step must be sync.
                    const callbacks = this.useForeachFn(proxy.current, newKey, proxy);
                    if (hasMutationCallback(callbacks) && !proxy.observer.callback) {
                        proxy.observer.init = {
                            subtree: true,
                            childList: true,
                            characterData: true,
                            attributes: true,
                        };
                        proxy.observer.callback = (m) => callbacks.onNodeMutation?.(value, m);
                    }
                    nextCallbackMap.set(newKey, callbacks);
                    nextDOMProxyMap.set(newKey, proxy);
                }
                else {
                    const callbacks = this.useForeachFn(value, newKey, undefined);
                    applyUseForeachCallback(callbacks)('warn mutation')(this._warning_mutation_);
                    nextCallbackMap.set(newKey, callbacks);
                }
            }
        }
        //#endregion
        //#region Key is the same, but node is changed
        // Do: Change reference
        const oldSameKeys = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this.lastKeyList, thisKeyList, this.keyComparer);
        const newSameKeys = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(thisKeyList, this.lastKeyList, this.keyComparer);
        const changedNodes = oldSameKeys
            .map((x) => [findFromLast(x), findFromNew(x), x, newSameKeys.find((newK) => this.keyComparer(newK, x))])
            .filter(([a, b]) => this.valueComparer(a, b) === false);
        for (const [oldNode, newNode, oldKey, newKey] of changedNodes) {
            const fn = this.lastCallbackMap.get(oldKey);
            if (newNode instanceof Node) {
                const proxy = this.lastDOMProxyMap.get(oldKey);
                proxy.realCurrent = newNode;
            }
            // This should be ordered. So keep it sync now.
            applyUseForeachCallback(fn)('target change')(newNode, oldNode);
        }
        //#endregion
        // Key is the same, node is the same
        // Do: nothing
        // #region Final: Copy the same keys
        for (const newKey of newSameKeys) {
            const oldKey = oldSameKeys.find((oldKey) => this.keyComparer(newKey, oldKey));
            nextCallbackMap.set(newKey, this.lastCallbackMap.get(oldKey));
            nextDOMProxyMap.set(newKey, this.lastDOMProxyMap.get(oldKey));
        }
        this.lastCallbackMap = nextCallbackMap;
        this.lastDOMProxyMap = nextDOMProxyMap;
        this.lastKeyList = thisKeyList;
        this.lastNodeList = currentIteration;
        if (this.events.has('onIteration') && changedNodes.length + goneKeys.length + newKeys.length > 0) {
            // Make a copy to prevent modifications
            const newMap = new Map(newKeys.map((key) => [key, findFromNew(key)]));
            const removedMap = new Map(goneKeys.map((key) => [key, findFromLast(key)]));
            const currentMap = new Map(thisKeyList.map((key) => [key, findFromNew(key)]));
            this.events.emit('onIteration', {
                new: newMap,
                removed: removedMap,
                current: currentMap,
            });
        }
        if (this.events.has('onChange'))
            for (const [oldNode, newNode, oldKey, newKey] of changedNodes) {
                this.events.emit('onChange', { oldValue: oldNode, newValue: newNode, oldKey, newKey });
            }
        if (this.events.has('onRemove'))
            for (const key of goneKeys) {
                this.events.emit('onRemove', { key, value: findFromLast(key) });
            }
        if (this.events.has('onAdd'))
            for (const key of newKeys) {
                this.events.emit('onAdd', { key, value: findFromNew(key) });
            }
        // For firstDOMProxy
        const first = currentIteration[0];
        if (first instanceof Node) {
            this._firstDOMProxy.realCurrent = first;
        }
        else if (first === undefined || first === null) {
            this._firstDOMProxy.realCurrent = null;
        }
        //#endregion
        //#region Prompt developer to open single mode
        if (currentIteration.length > 1)
            this._warning_single_mode.ignored = true;
        if (currentIteration.length === 1)
            this._warning_single_mode.warn();
        //#endregion
    }
    //#endregion
    //#region Single mode
    /**
     * Is the single mode is on.
     */
    get singleMode() {
        // @ts-ignore
        return this.liveSelector.isSingleMode;
    }
    /** Last iteration value for single mode */
    singleModeLastValue;
    /** Does it has a last iteration value in single mode? */
    singleModeHasLastValue = false;
    /** Callback for single mode */
    singleModeCallback;
    /** Watcher callback for single mode */
    singleModeWatcherCallback(firstValue) {
        if (firstValue === undefined) {
            this.firstDOMProxy.realCurrent = null;
        }
        if (firstValue instanceof Node) {
            this.firstDOMProxy.realCurrent = firstValue;
        }
        if (hasMutationCallback(this.singleModeCallback) && !this._firstDOMProxy.observer.callback) {
            this._firstDOMProxy.observer.init = { attributes: true, characterData: true, subtree: true };
            this._firstDOMProxy.observer.callback = (e) => hasMutationCallback(this.singleModeCallback) &&
                this.singleModeCallback.onNodeMutation(this._firstDOMProxy.current, e);
        }
        // ? Case: value is gone
        if (this.singleModeHasLastValue && (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(firstValue)) {
            applyUseForeachCallback(this.singleModeCallback)('remove')(this.singleModeLastValue);
            if (this.singleModeLastValue instanceof Node) {
                this._firstDOMProxy.realCurrent = null;
            }
            this.events.emit('onRemove', { key: undefined, value: this.singleModeLastValue });
            this.singleModeLastValue = undefined;
            this.singleModeHasLastValue = false;
        }
        // ? Case: value is new
        else if (!this.singleModeHasLastValue && Boolean(firstValue)) {
            if (this.useForeachFn) {
                if (firstValue instanceof Node) {
                    this.singleModeCallback = this.useForeachFn(this.firstDOMProxy.current, undefined, this.firstDOMProxy);
                }
                else {
                    this.singleModeCallback = this.useForeachFn(firstValue, undefined, undefined);
                    applyUseForeachCallback(this.singleModeCallback)('warn mutation')(this._warning_mutation_);
                }
            }
            this.events.emit('onAdd', { key: undefined, value: firstValue });
            this.singleModeLastValue = firstValue;
            this.singleModeHasLastValue = true;
        }
        // ? Case: value has changed
        else if (this.singleModeHasLastValue && !this.valueComparer(this.singleModeLastValue, firstValue)) {
            applyUseForeachCallback(this.singleModeCallback)('target change')(firstValue, this.singleModeLastValue);
            this.events.emit('onChange', {
                newKey: undefined,
                oldKey: undefined,
                newValue: firstValue,
                oldValue: this.singleModeLastValue,
            });
            this.singleModeLastValue = firstValue;
            this.singleModeHasLastValue = true;
        }
        // ? Case: value is not changed
        else {
            // ? Do nothing
        }
        return;
    }
    //#endregion
    //#region Watcher callback
    /** Should be called every watch */
    watcherChecker = (deadline) => {
        if (!this.isWatching)
            return;
        setTimeout(() => {
            const thisNodes = this.liveSelector.evaluate();
            if (this.singleMode)
                return this.singleModeWatcherCallback(thisNodes);
            else
                return this.normalModeWatcherCallback(thisNodes);
        }, 0);
    };
    //#endregion
    //#region LiveSelector settings
    /**
     * The dom proxy option used in DOMProxy()
     */
    domProxyOption = {};
    /**
     * Set option for DOMProxy
     * @param option - DOMProxy options
     */
    setDOMProxyOption(option) {
        this.domProxyOption = option;
        const oldProxy = this._firstDOMProxy;
        if (oldProxy.has('after') ||
            oldProxy.has('before') ||
            oldProxy.has('afterShadow') ||
            oldProxy.has('beforeShadow') ||
            oldProxy.realCurrent) {
            console.warn("Don't set DOMProxy before using it.");
        }
        this._firstDOMProxy = (0,_Proxy_js__WEBPACK_IMPORTED_MODULE_4__/* .DOMProxy */ .E)(option);
        return this;
    }
    //#endregion
    //#region events
    addListener(type, callback, options) {
        this.events.add(type, callback, options);
        return this;
    }
    removeListener(type, callback) {
        this.events.remove(type, callback);
        return this;
    }
    //#endregion
    //#region firstDOMProxy
    /** The first DOMProxy */
    _firstDOMProxy = (0,_Proxy_js__WEBPACK_IMPORTED_MODULE_4__/* .DOMProxy */ .E)(this.domProxyOption);
    /**
     * This DOMProxy always point to the first node in the LiveSelector
     */
    get firstDOMProxy() {
        return this._firstDOMProxy;
    }
    //#endregion
    //#region Watcher settings
    /**
     * Map `Node -> Key`, in case of you don't want the default behavior
     */
    mapNodeToKey = defaultMapNodeToKey;
    /**
     * Compare between `key` and `key`, in case of you don't want the default behavior
     */
    keyComparer = defaultEqualityComparer;
    /**
     * Compare between `value` and `value`, in case of you don't want the default behavior
     */
    valueComparer = defaultEqualityComparer;
    /**
     * To help identify same nodes in different iteration,
     * you need to implement a map function that map `node` to `key`
     *
     * If the key is changed, the same node will call through `forEachRemove` then `forEach`
     *
     * @param keyAssigner - map `node` to `key`, defaults to `node => node`
     *
     * @example
     * ```ts
     * watcher.assignKeys(node => node.innerText)
     * ```
     */
    assignKeys(keyAssigner) {
        this.noNeedInSingleMode(this.assignKeys.name);
        this.mapNodeToKey = keyAssigner;
        return this;
    }
    /**
     * To help identify same nodes in different iteration,
     * you need to implement a map function to compare `node` and `key`
     *
     * You probably don't need this.
     *
     * @param keyComparer - compare between two keys, defaults to `===`
     * @param valueComparer - compare between two value, defaults to `===`
     *
     * @example
     * ```ts
     * watcher.setComparer(
     *     (a, b) => JSON.stringify(a) === JSON.stringify(b),
     *     (a, b) => a.equals(b)
     * )
     * ```
     */
    setComparer(keyComparer, valueComparer) {
        if (keyComparer)
            this.noNeedInSingleMode(this.setComparer.name);
        if (keyComparer)
            this.keyComparer = keyComparer;
        if (valueComparer)
            this.valueComparer = valueComparer;
        return this;
    }
    //#endregion
    //#region Schedule a watcher callback run
    isWatcherCheckerRunning = false;
    needCheckerRunAgainAfterCurrentSchedule = false;
    /**
     * Schedule a watcher check
     */
    scheduleWatcherCheck = () => {
        if (this.isWatcherCheckerRunning) {
            this.needCheckerRunAgainAfterCurrentSchedule = true;
            return;
        }
        this.isWatcherCheckerRunning = true;
        this.watcherChecker();
        // Now watcherChecker is sync so this path will run at most once.
        while (this.needCheckerRunAgainAfterCurrentSchedule) {
            this.watcherChecker();
            this.needCheckerRunAgainAfterCurrentSchedule = false;
        }
        this.isWatcherCheckerRunning = false;
    };
    //#endregion
    //#region Utils
    /**
     * Get DOMProxy by key.
     * DOMProxy will be unavailable if it is deleted
     * @param key - Key used to find DOMProxy
     */
    getDOMProxyByKey(key) {
        this.noNeedInSingleMode(this.getDOMProxyByKey.name);
        return this.lastDOMProxyMap.get([...this.lastDOMProxyMap.keys()].find((_) => this.keyComparer(_, key))) || null;
    }
    /** window.requestIdleCallback, or polyfill. */
    requestIdleCallback = _util_requestIdleCallback_js__WEBPACK_IMPORTED_MODULE_7__/* .requestIdleCallback */ .K;
    /** For debug usage. Just keep it. */
    stack = new Error().stack ?? '';
    //#endregion
    //#region Warnings
    /**
     * Warning to remember if developer forget to call the startWatch.
     */
    _warning_forget_watch_ = warning({
        fn: (stack) => console.warn('Did you forget to call `.startWatch()`?\n', stack),
    });
    /**
     * If you're expecting Watcher may not be called, call this function, this will omit the warning.
     */
    omitWarningForForgetWatch() {
        this._warning_forget_watch_.ignored = true;
        return this;
    }
    _warning_repeated_keys = warning({ once: true });
    /**
     * If you're expecting repeating keys, call this function, this will omit the warning.
     */
    omitWarningForRepeatedKeys() {
        this.noNeedInSingleMode(this.omitWarningForRepeatedKeys.name);
        this._warning_repeated_keys.ignored = true;
        return this;
    }
    _warning_single_mode = warning({
        once: 15,
        fn(stack) {
            console.warn(`Your watcher seems like only watching 1 node.
If you can make sure there is only 1 node to watch, call \`.enableSingleMode()\` on the watcher.
Or to ignore this message, call \`.dismissSingleModeWarning()\` on the watcher.\n`, stack);
        },
    });
    /**
     * Dismiss the warning that let you enable single mode but the warning is false positive.
     */
    dismissSingleModeWarning() {
        this._warning_single_mode.ignored = true;
        return this;
    }
    noNeedInSingleMode(method) {
        if (this.singleMode)
            console.warn(`Method ${method} has no effect in SingleMode watcher`);
    }
    _warning_mutation_ = warning({
        fn(stack) {
            console.warn('When watcher is watching LiveSelector<not Node>, onNodeMutation will not be ignored\n', stack);
        },
    });
}
//#region Default implementations
function defaultEqualityComparer(a, b) {
    return a === b;
}
function defaultMapNodeToKey(node) {
    return node;
}
function hasMutationCallback(x) {
    if (typeof x !== 'object' || x === null)
        return false;
    if ('onNodeMutation' in x && typeof x.onNodeMutation === 'function')
        return true;
    return false;
}
function applyUseForeachCallback(callback) {
    const cb = callback;
    let remove, change, mutation;
    if (typeof cb === 'function')
        remove = cb;
    else if (cb !== undefined) {
        const { onNodeMutation, onRemove, onTargetChanged } = cb;
        [remove, change, mutation] = [onRemove, onTargetChanged, onNodeMutation];
    }
    return ((type) => (...args) => {
        if (type === 'remove')
            remove && remove(...args);
        else if (type === 'target change')
            change && change(...args);
        else if (type === 'warn mutation')
            mutation && args[0]();
    });
}
function warning(_ = {}) {
    const { dev, once, fn } = { ...{ dev: false, once: true, fn: () => { } }, ..._ };
    if (dev)
        if (true)
            return { warn(f = fn) { }, ignored: true, stack: '' };
    const [_0, _1, _2, ...lines] = (new Error().stack ?? '').split('\n');
    const stack = lines.join('\n');
    let warned = 0;
    const obj = {
        ignored: false,
        stack,
        warn(f = fn) {
            if (obj.ignored)
                return;
            if (warned > 0 && Boolean(once))
                return;
            if (typeof once === 'number' && warned <= once)
                return;
            warned = warned + 1;
            f(stack);
        },
    };
    return obj;
}
//#endregion


/***/ }),

/***/ 57791:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ IntervalWatcher)
/* harmony export */ });
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Watcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92256);
}

/**
 * A watcher based on time interval.
 *
 * @example
 * ```ts
 * new IntervalWatcher(ls)
 * .useForeach(node => {
 *     console.log(node)
 * })
 * .startWatch(1000)
 * ```
 */
class IntervalWatcher extends (/* runtime-dependent pure expression or super */ 3161 == __webpack_require__.j ? (_Watcher_js__WEBPACK_IMPORTED_MODULE_0__/* .Watcher */ .C) : null) {
    timer;
    /** Start to watch the LiveSelector at a interval(ms). */
    startWatch(interval, signal) {
        super.startWatch();
        this.timer = setInterval(this.scheduleWatcherCheck, interval);
        signal?.addEventListener('abort', () => {
            this.stopWatch();
        }, { once: true });
        return this;
    }
    /**
     * {@inheritdoc Watcher.stopWatch}
     */
    stopWatch() {
        super.stopWatch();
        if (this.timer)
            clearInterval(this.timer);
    }
}


/***/ }),

/***/ 60150:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ MutationObserverWatcher)
/* harmony export */ });
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Watcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92256);
}

/**
 * A watcher based on MutationObserver
 *
 * @example
 * ```ts
 * new MutationObserverWatcher(ls)
 *     .useForeach(node => {
 *         console.log(node)
 *     })
 *     .startWatch()
 * ```
 */
class MutationObserverWatcher extends (/* runtime-dependent pure expression or super */ 3161 == __webpack_require__.j ? (_Watcher_js__WEBPACK_IMPORTED_MODULE_0__/* .Watcher */ .C) : null) {
    liveSelector;
    consistentWatchRoot;
    stopWatchOnDisconnected;
    constructor(
    /** LiveSelector that this object holds */
    liveSelector, 
    /**
     * If you know the element is always inside of a node, set this option.
     * This may improve performance.
     */
    consistentWatchRoot = document.body, 
    /**
     * Call stopWatch() when the consistentWatchRoot disconnected.
     */
    stopWatchOnDisconnected = false) {
        super(liveSelector);
        this.liveSelector = liveSelector;
        this.consistentWatchRoot = consistentWatchRoot;
        this.stopWatchOnDisconnected = stopWatchOnDisconnected;
        setTimeout(this._warning_forget_watch_.warn, 5000);
    }
    /** Observe whole document change */
    observer = new MutationObserver((mutations, observer) => {
        if (this.consistentWatchRoot.isConnected === false && this.stopWatchOnDisconnected === true) {
            return this.stopWatch();
        }
        this.requestIdleCallback(this.scheduleWatcherCheck);
    });
    /**
     * Start an MutationObserverWatcher.
     *
     * @remarks
     * You must provide a reasonable MutationObserverInit to reduce dom events.
     *
     * https://mdn.io/MutationObserverInit
     */
    startWatch(options, signal) {
        signal?.addEventListener('abort', () => {
            this.stopWatch();
        }, { once: true });
        super.startWatch();
        this.isWatching = true;
        const watch = (root) => {
            this.observer.observe(root || document.body, options);
            this.scheduleWatcherCheck();
        };
        if (document.readyState !== 'complete' && this.consistentWatchRoot === null) {
            document.addEventListener('readystatechange', () => document.readyState !== 'complete' && watch());
        }
        else
            watch(this.consistentWatchRoot);
        return this;
    }
    defaultStarterForThen() {
        if (!this.isWatching)
            this.startWatch({ subtree: true, childList: true, characterData: true });
    }
    /**
     * {@inheritdoc Watcher.stopWatch}
     */
    stopWatch() {
        super.stopWatch();
        this.observer.disconnect();
    }
}


/***/ }),

/***/ 88228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BX: () => (/* binding */ assertNotEnvironment),
/* harmony export */   hE: () => (/* binding */ isEnvironment),
/* harmony export */   qA: () => (/* binding */ Environment),
/* harmony export */   uQ: () => (/* binding */ assertEnvironment),
/* harmony export */   zj: () => (/* binding */ getEnvironment)
/* harmony export */ });
/* unused harmony export printEnvironment */
/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/** Current running environment of Web Extension */
var Environment;
(function (Environment) {
    Environment[Environment["NONE"] = 0] = "NONE";
    /** has browser as a global variable */ Environment[Environment["HasBrowserAPI"] = 2] = "HasBrowserAPI";
    /** URL protocol ends with "-extension:" */ Environment[Environment["ExtensionProtocol"] = 4] = "ExtensionProtocol";
    /** Current running context is Content Script */ Environment[Environment["ContentScript"] = 8] = "ContentScript";
    // userScript = 1 << 4,
    /** URL of the manifest.background, generated background page, or manifest v3 service worker */
    Environment[Environment["ManifestBackground"] = 64] = "ManifestBackground";
    /** URL is listed in the manifest.options_ui */ Environment[Environment["ManifestOptions"] = 128] = "ManifestOptions";
    /**
     * URL is listed in the manifest.browser_action
     * @deprecated It will be removed in manifest v3. Use ManifestAction instead */ Environment[Environment["ManifestBrowserAction"] = 256] = "ManifestBrowserAction";
    /** URL is listed in the manifest.action */ Environment[Environment["ManifestAction"] = 256] = "ManifestAction";
    /**
     * URL is listed in the manifest.page_action
     * @deprecated Suggest to define browser_action instead.
     */ Environment[Environment["ManifestPageAction"] = 512] = "ManifestPageAction";
    /** URL is listed in the manifest.devtools_page */ Environment[Environment["ManifestDevTools"] = 1024] = "ManifestDevTools";
    /** URL is listed in the manifest.sidebar_action. Firefox Only */ Environment[Environment["ManifestSidebar"] = 2048] = "ManifestSidebar";
    /** URL is listed in the manifest.chrome_url_overrides.newtab */ Environment[Environment["ManifestOverridesNewTab"] = 4096] = "ManifestOverridesNewTab";
    /** URL is listed in the manifest.chrome_url_overrides.bookmarks */ Environment[Environment["ManifestOverridesBookmarks"] = 8192] = "ManifestOverridesBookmarks";
    /** URL is listed in the manifest.chrome_url_overrides.history */ Environment[Environment["ManifestOverridesHistory"] = 16384] = "ManifestOverridesHistory";
    // DO NOT USE value that bigger than 1 << 20
})(Environment = Environment || (Environment = {}));
let result;
/**
 * Get the current running environment
 * @remarks You can use the global variable `__holoflows_kit_get_environment_debug__` to overwrite the return value if the current hostname is localhost or 127.0.0.1
 */
function getEnvironment() {
    if (result !== undefined)
        return result;
    try {
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
            const val = __holoflows_kit_get_environment_debug__;
            if (val !== undefined)
                return Number(val);
        }
    }
    catch { }
    let flag = Environment.NONE;
    // Scheme test
    try {
        const scheme = location.protocol;
        if (scheme.endsWith('-extension:'))
            flag |= Environment.ExtensionProtocol;
    }
    catch { }
    // @ts-ignore
    const chromeLike = isChromeLike();
    if (!isBrowserLike() && chromeLike) {
        console.error([
            "Cannot find 'browser'. This library does not work with 'chrome' namespace.",
            'Please use the polyfill (https://www.npmjs.com/package/webextension-polyfill)',
        ].join('\n'));
    }
    const browser = getBrowserLikeNS();
    // Browser API test
    if (browser) {
        flag |= Environment.HasBrowserAPI;
        if (!(flag & Environment.ExtensionProtocol))
            flag |= Environment.ContentScript;
        else {
            try {
                const manifest = browser.runtime.getManifest();
                const current = location.pathname;
                const background = manifest.background
                    ? 'service_worker' in manifest.background
                        ? manifest.background.service_worker
                        : 'page' in manifest.background
                            ? manifest.background.page
                            : '/_generated_background_page.html'
                    : '';
                const options = manifest.options_ui?.page;
                if (current === normalize(background))
                    flag |= Environment.ManifestBackground;
                // TODO: this property support i18n. What will I get when call browser.runtime.getManifest()?
                if (current === normalize(manifest.browser_action?.default_popup))
                    flag |= Environment.ManifestAction;
                if (current === normalize(manifest.sidebar_action?.default_panel))
                    flag |= Environment.ManifestSidebar;
                if (current === normalize(options))
                    flag |= Environment.ManifestOptions;
                if (current === normalize(manifest.devtools_page))
                    flag |= Environment.ManifestDevTools;
                if (current === normalize(manifest.page_action?.default_popup))
                    flag |= Environment.ManifestPageAction;
                // TODO: this property support i18n.
                // @ts-expect-error https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
                const { bookmarks, history, newtab } = manifest.chrome_url_overrides || {};
                if (current === normalize(bookmarks))
                    flag |= Environment.ManifestOverridesBookmarks;
                if (current === normalize(history))
                    flag |= Environment.ManifestOverridesHistory;
                if (current === normalize(newtab))
                    flag |= Environment.ManifestOverridesNewTab;
            }
            catch { }
        }
    }
    return (result = flag);
    function normalize(x) {
        if (x === undefined)
            return '_';
        try {
            // on firefox it is a full qualified URL
            return new URL(x).pathname;
        }
        catch {
            // on chrome it is unmodified
            if (x[0] !== '/')
                return '/' + x;
            return x;
        }
    }
}
function isChromeLike() {
    try {
        return !!chrome.runtime.getURL;
    }
    catch { }
    return false;
}
function isBrowserLike() {
    try {
        return !!browser.runtime.getURL;
    }
    catch { }
    return false;
}
function getBrowserLikeNS() {
    try {
        if (typeof browser.runtime.getURL === 'function')
            return browser;
    }
    catch { }
    try {
        if (typeof chrome.runtime.getURL === 'function')
            return chrome;
    }
    catch { }
    return undefined;
}
/**
 * Print the Environment bit flag in a human-readable format
 * @param e - Printing environment bit flag
 */
function printEnvironment(e = getEnvironment()) {
    const flag = [];
    if (Environment.ContentScript & e)
        flag.push('ContentScript');
    if (Environment.ExtensionProtocol & e)
        flag.push('ExtensionProtocol');
    if (Environment.HasBrowserAPI & e)
        flag.push('HasBrowserAPI');
    if (Environment.ManifestBackground & e)
        flag.push('ManifestBackground');
    if (Environment.ManifestDevTools & e)
        flag.push('ManifestDevTools');
    if (Environment.ManifestOptions & e)
        flag.push('ManifestOptions');
    if (Environment.ManifestPageAction & e)
        flag.push('ManifestPageAction');
    if (Environment.ManifestOverridesBookmarks & e)
        flag.push('ManifestOverridesBookmarks');
    if (Environment.ManifestOverridesHistory & e)
        flag.push('ManifestOverridesHistory');
    if (Environment.ManifestOverridesNewTab & e)
        flag.push('ManifestOverridesNewTab');
    if (Environment.ManifestAction & e)
        flag.push('ManifestBrowserAction');
    if (Environment.ManifestSidebar & e)
        flag.push('ManifestSidebar');
    return flag.join('|');
}
/**
 * Assert the current environment satisfy the expectation
 * @param env - The expected environment
 */
function assertEnvironment(env) {
    if (!isEnvironment(env))
        throw new TypeError(`Running in the wrong context, (expected ${printEnvironment(env)}, actually ${printEnvironment()})`);
}
assertEnvironment.oneOf = (...args) => {
    return assertEnvironment(args.reduce((p, c) => p | c));
};
assertEnvironment.allOf = (...args) => {
    return args.map(assertEnvironment);
};
/**
 * Assert the current environment NOT satisfy the rejected flags
 * @param env - The rejected environment
 */
function assertNotEnvironment(env) {
    if (getEnvironment() & env)
        throw new TypeError(`Running in wrong context, (expected not match ${printEnvironment(env)}, actually ${printEnvironment()})`);
}
assertNotEnvironment.oneOf = (...args) => {
    return assertNotEnvironment(args.reduce((p, c) => p | c));
};
assertNotEnvironment.allOf = (...args) => {
    return args.map(assertNotEnvironment);
};
/**
 * Check if the current environment satisfy the expectation
 * @param env - The expectation environment
 */
function isEnvironment(env) {
    const now = getEnvironment();
    return Boolean(env & now);
}
isEnvironment.oneOf = (...args) => {
    return isEnvironment(args.reduce((p, c) => p | c));
};
isEnvironment.allOf = (...args) => {
    return args.map(isEnvironment);
};


/***/ }),

/***/ 61530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ WebExtensionMessage),
/* harmony export */   T: () => (/* binding */ MessageTarget)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93441);
/* harmony import */ var event_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93214);
/* harmony import */ var _util_EventTarget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13252);
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88228);
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-bitwise */




var MessageTarget;
(function (MessageTarget) {
    /** Current execution context */ MessageTarget[MessageTarget["IncludeLocal"] = 1048576] = "IncludeLocal";
    MessageTarget[MessageTarget["LocalOnly"] = 2097152] = "LocalOnly";
    /** Visible page, maybe have more than 1 page. */ MessageTarget[MessageTarget["VisiblePageOnly"] = 4194304] = "VisiblePageOnly";
    /** Page that has focus (devtools not included), 0 or 1 page. */ MessageTarget[MessageTarget["FocusedPageOnly"] = 8388608] = "FocusedPageOnly";
    /** Send to external. */ MessageTarget[MessageTarget["External"] = 16777216] = "External";
    /** Externals not included */ MessageTarget[MessageTarget["Broadcast"] = 2] = "Broadcast";
    MessageTarget[MessageTarget["All"] = 1048578] = "All";
})(MessageTarget = MessageTarget || (MessageTarget = {}));
// Only available in background page
const backgroundOnlyLivingPorts = new Map();
// Only be set in other pages
let currentTabID = -1;
let externalMode = false;
// Shared global
let postMessage = undefined;
const domainRegistry = new _servie_events__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
const constant = '@holoflows/kit/WebExtensionMessage/setup';
class WebExtensionMessage {
    // Only execute once.
    static setup(id) {
        if (id)
            externalMode = true;
        if ((0,_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .isEnvironment */ .hE)(_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .Environment */ .qA.ManifestBackground)) {
            // Wait for other pages to connect
            browser.runtime.onConnect.addListener((port) => {
                if (port.name !== constant)
                    return; // not for ours
                const sender = port.sender;
                backgroundOnlyLivingPorts.set(port, { sender });
                backgroundPortBoarding(port, sender);
            });
            WebExtensionMessage.setup = () => { };
            postMessage = backgroundPageMessageHandler;
        }
        else {
            function reconnect() {
                const port = id
                    ? // @ts-ignore
                        chrome.runtime.connect(id, { name: constant })
                    : browser.runtime.connect({ name: constant });
                postMessage = otherEnvMessageHandler.bind(port);
                // don't reconnect when external connect
                otherEnvPortBoarding(port, id ? () => { } : reconnect);
            }
            reconnect();
            WebExtensionMessage.setup = () => { };
        }
    }
    static acceptExternalConnectFns = new Set();
    /** If the connection is not accepted, it will be passed to the next handler until it is handled or no more handlers */
    static acceptExternalConnect(acceptExternalConnectFn) {
        this.acceptExternalConnectFns.add(acceptExternalConnectFn);
        if (!(0,_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .isEnvironment */ .hE)(_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .Environment */ .qA.ManifestBackground))
            return;
        // Wait for other pages to connect
        // @ts-ignore
        const c = chrome;
        c.runtime.onConnectExternal.addListener((port) => {
            if (port.name !== constant)
                return; // not for ours
            const sender = port.sender;
            if (!sender)
                return port.disconnect();
            let accepted = false;
            for (const each of this.acceptExternalConnectFns) {
                const result = each(sender);
                if (!result)
                    continue;
                if (result === true)
                    backgroundOnlyLivingPorts.set(port, { sender, external: true, environment: 0 });
                else
                    backgroundOnlyLivingPorts.set(port, { sender, environment: result.acceptAs });
                accepted = true;
                break;
            }
            if (!accepted)
                return port.disconnect();
            backgroundPortBoarding(port, sender);
        });
        this.acceptExternalConnect = (f) => void this.acceptExternalConnectFns.add(f);
        postMessage = backgroundPageMessageHandler;
    }
    #domain;
    /** Same message name within different domain won't collide with each other. */
    get domain() {
        return this.#domain;
    }
    /**
     * @param options - WebExtensionMessage options
     */
    constructor(options) {
        // invoke the warning if needed
        (0,_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .getEnvironment */ .zj)();
        try {
            if (options?.externalExtensionID) {
                WebExtensionMessage.setup(options.externalExtensionID);
            }
            else {
                typeof browser === 'object' && browser && WebExtensionMessage.setup(undefined);
            }
        }
        catch (e) {
            console.error('Setup failed', e);
        }
        const domain = (this.#domain = options?.domain ?? '');
        domainRegistry.on(domain, async (payload) => {
            if (!isInternalMessageType(payload))
                return;
            const { event, target } = payload;
            let { data } = payload;
            if (!shouldAcceptThisMessage(target))
                return;
            data = await this.serialization.deserialization(data);
            if (this.enableLog) {
                this.log(...this.logFormatter(this, event, data));
            }
            this.#eventRegistry.emit(event, data);
        });
    }
    //#region Simple API
    #events = (() => {
        const set = (event) => {
            const value = UnboundedRegistry(this, event, this.#eventRegistry);
            Object.defineProperty(container, event, {
                configurable: true,
                value,
            });
            return value;
        };
        const container = {
            __proto__: new Proxy({}, {
                get(target, key) {
                    if (typeof key === 'symbol')
                        return undefined;
                    return set(key);
                },
            }),
        };
        return new Proxy(container, {
            setPrototypeOf: (t, p) => p === null,
            getPrototypeOf: () => null,
            getOwnPropertyDescriptor: (t, key) => {
                if (typeof key === 'symbol')
                    return undefined;
                set(key);
                return Object.getOwnPropertyDescriptor(container, key);
            },
        });
    })();
    /** Event listeners */
    get events() {
        return this.#events;
    }
    //#endregion
    // declare readonly eventTarget: { readonly [key in keyof Message]: UnboundedRegister<Message[key], EventTargetRegister<Message>> }
    // declare readonly eventEmitter: { readonly [key in keyof Message]: UnboundedRegister<Message[key], EventEmitterRegister<Message>> }
    /**
     * Watch new tabs created and get event listener register of that tab.
     *
     * This API only works in the BackgroundPage.
     */
    serialization = { deserialization: (x) => x, serialization: (x) => x };
    logFormatter = (instance, key, data) => {
        return [
            `%cReceive%c %c${String(key)}`,
            'background: rgba(0, 255, 255, 0.6); color: black; padding: 0px 6px; border-radius: 4px;',
            '',
            'text-decoration: underline',
            data,
        ];
    };
    enableLog = false;
    log = console.log;
    #eventRegistry = (0,_util_EventTarget_js__WEBPACK_IMPORTED_MODULE_3__/* .createEventTarget */ .h)();
    get eventRegistry() {
        return this.#eventRegistry.emitter;
    }
}

function isInternalMessageType(e) {
    if (typeof e !== 'object' || e === null)
        return false;
    const { domain, event, target } = e;
    // Message is not for us
    if (typeof domain !== 'string')
        return false;
    if (typeof event !== 'string')
        return false;
    if (typeof target !== 'object' || target === null)
        return false;
    return true;
}
function shouldAcceptThisMessage(target) {
    if (target.kind === 'tab')
        return target.id === currentTabID && currentTabID !== -1;
    if (target.kind === 'port')
        return true;
    const flag = target.target;
    if (flag & (MessageTarget.IncludeLocal | MessageTarget.LocalOnly))
        return true;
    const here = (0,_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .getEnvironment */ .zj)();
    if (flag & MessageTarget.FocusedPageOnly)
        return typeof document === 'object' && document?.hasFocus?.();
    if (flag & MessageTarget.VisiblePageOnly) {
        // background page has document.visibilityState === 'visible' for reason I don't know why
        if (here & _Context_js__WEBPACK_IMPORTED_MODULE_2__/* .Environment */ .qA.ManifestBackground)
            return false;
        return typeof document === 'object' && document?.visibilityState === 'visible';
    }
    if (externalMode)
        return true; // skip mode checking for external connection
    return Boolean(here & flag);
}
//#endregion
function UnboundedRegistry(instance, eventName, eventListener) {
    //#region Batch message
    let pausing = false;
    const pausingMap = new Map();
    //#endregion
    async function send(target, data) {
        if (typeof target !== 'number')
            throw new TypeError('target must be a bit flag of MessageTarget | Environment');
        if (pausing) {
            const list = pausingMap.get(target) || [];
            pausingMap.set(target, list);
            list.push(data);
            return;
        }
        postMessage({
            data: await instance.serialization.serialization(data),
            domain: instance.domain,
            event: eventName,
            target: { kind: 'target', target },
        });
    }
    function on(cb, options) {
        return eventListener.add(eventName, cb, options);
    }
    function off(cb) {
        eventListener.remove(eventName, cb);
    }
    function pause() {
        pausing = true;
        return async (reducer = (x) => x) => {
            pausing = false;
            for (const [target, list] of pausingMap) {
                try {
                    await Promise.all(reducer(list).map((x) => send(target, x)));
                }
                finally {
                    pausingMap.clear();
                }
            }
        };
    }
    const self = {
        send,
        sendToLocal: send.bind(null, MessageTarget.LocalOnly),
        sendToBackgroundPage: send.bind(null, _Context_js__WEBPACK_IMPORTED_MODULE_2__/* .Environment */ .qA.ManifestBackground),
        sendToContentScripts: send.bind(null, _Context_js__WEBPACK_IMPORTED_MODULE_2__/* .Environment */ .qA.ContentScript),
        sendToVisiblePages: send.bind(null, MessageTarget.VisiblePageOnly),
        sendToFocusedPage: send.bind(null, MessageTarget.FocusedPageOnly),
        sendByBroadcast: send.bind(null, MessageTarget.Broadcast),
        sendToAll: send.bind(null, MessageTarget.All),
        bind(target, signal) {
            return {
                on: (callback, options) => {
                    const off = on(callback, options);
                    signal?.addEventListener('abort', off, { once: true });
                    return off;
                },
                off,
                send: (data) => send(target, data),
                pause,
            };
        },
        on,
        off,
        pause,
        async *[Symbol.asyncIterator]() {
            yield* new event_iterator__WEBPACK_IMPORTED_MODULE_0__/* .EventIterator */ .zN(({ push }) => this.on(push));
        },
    };
    return self;
}
function backgroundPageMessageHandler(data) {
    // receive payload from the other side
    if (!isInternalMessageType(data))
        return;
    if (data.target.kind === 'tab') {
        for (const [port, { sender }] of backgroundOnlyLivingPorts) {
            if (data.target.id !== sender?.tab?.id)
                continue;
            return port.postMessage(data);
        }
    }
    else if (data.target.kind === 'port') {
        data.target.port.postMessage(data);
    }
    else {
        const flag = data.target.target;
        // Also dispatch this message to background page itself. shouldAcceptThisMessage will help us to filter the message
        domainRegistry.emit(data.domain, data);
        if (flag & MessageTarget.LocalOnly)
            return;
        for (const [port, { environment }] of backgroundOnlyLivingPorts) {
            if (port === this)
                continue; // Not sending to the source.
            if (environment === undefined)
                continue;
            try {
                if (environment & flag)
                    port.postMessage(data);
                // they will handle this by thyself
                else if (flag & (MessageTarget.FocusedPageOnly | MessageTarget.VisiblePageOnly))
                    port.postMessage(data);
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
function otherEnvMessageHandler(payload) {
    if (typeof payload !== 'object')
        return this.postMessage(payload);
    const bound = payload.target;
    if (bound.kind === 'tab')
        return this.postMessage(payload);
    if (bound.kind === 'port')
        throw new Error('Unreachable case: bound type = port in non-background script');
    const target = bound.target;
    if (target & (MessageTarget.IncludeLocal | MessageTarget.LocalOnly)) {
        domainRegistry.emit(payload.domain, payload);
        if (target & MessageTarget.LocalOnly)
            return;
        bound.target &= ~MessageTarget.IncludeLocal; // unset IncludeLocal
    }
    this.postMessage(payload);
}
/** The port need to be initialized before use. */
function backgroundPortBoarding(port, sender) {
    // let the client know it's tab id
    // sender.tab might be undefined if it is a popup
    port.postMessage(sender?.tab?.id ?? -1);
    // Client will report it's environment flag on connection
    port.onMessage.addListener(function environmentListener(x) {
        const obj = backgroundOnlyLivingPorts.get(port);
        if (typeof obj.environment === 'undefined')
            obj.environment = Number(x);
        port.onMessage.removeListener(environmentListener);
    });
    port.onMessage.addListener(backgroundPageMessageHandler.bind(port));
    port.onDisconnect.addListener(() => backgroundOnlyLivingPorts.delete(port));
}
function otherEnvPortBoarding(port, reconnect) {
    // report self environment
    port.postMessage((0,_Context_js__WEBPACK_IMPORTED_MODULE_2__/* .getEnvironment */ .zj)());
    // server will send self tab ID on connected
    port.onMessage.addListener(function tabIDListener(x) {
        currentTabID = Number(x);
        port.onMessage.removeListener(tabIDListener);
    });
    port.onMessage.addListener((data) => {
        if (!isInternalMessageType(data))
            return;
        domainRegistry.emit(data.domain, data);
    });
    // ? Will it cause infinite loop?
    port.onDisconnect.addListener(reconnect);
}


/***/ }),

/***/ 13252:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ createEventTarget)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93441);

/** @internal */
function createEventTarget() {
    const emitter = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    const offWeakMap = new Map();
    function getOff(key) {
        if (offWeakMap.has(key))
            return offWeakMap.get(key);
        const off = new WeakMap();
        offWeakMap.set(key, off);
        return off;
    }
    return {
        has(key) {
            return (emitter.$[key]?.size ?? 0) > 0;
        },
        add(event, callback, options) {
            const off = options?.once === true ? (0,_servie_events__WEBPACK_IMPORTED_MODULE_0__/* .once */ .IH)(emitter, event, callback) : emitter.on(event, callback);
            getOff(event).set(callback, off);
            options?.signal?.addEventListener('abort', off, { once: true });
            return off;
        },
        remove(event, callback) {
            getOff(event).get(callback)?.();
        },
        emitter,
        emit(type, ...args) {
            emitter.emit(type, ...args);
        },
    };
}


/***/ }),

/***/ 58166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ requestIdleCallback)
/* harmony export */ });
/**
 * @param fn - function to execute
 * @param timeout - timeout
 */
function requestIdleCallback(fn, timeout) {
    if ('requestIdleCallback' in window) {
        return window.requestIdleCallback(fn);
    }
    const start = Date.now();
    return setTimeout(() => {
        fn({
            didTimeout: false,
            timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start));
            },
        });
    }, 1);
}


/***/ }),

/***/ 86862:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ timeout)
/* harmony export */ });
/**
 * Accept a promise and then set a timeout on it. After `time` ms, it will reject.
 * @param promise - The promise that you want to set time limit on.
 * @param time - Time before timeout. In `ms`.
 * @param rejectReason - When reject, show a reason. Defaults to `"timeout"`
 *
 * @internal
 */
const timeout = (promise, time, rejectReason) => {
    if (!Number.isFinite(time))
        return (async () => promise)();
    let timer;
    const race = Promise.race([
        promise,
        new Promise((r, reject) => {
            timer = setTimeout(() => reject(new Error(rejectReason ?? 'timeout')), time);
        }),
    ]);
    race.finally(() => clearTimeout(timer));
    return race;
};


/***/ })

}]);
//# sourceMappingURL=npm-ns.dimensiondev.holoflows-kit.js.map