"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9759],{

/***/ 90586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ resolveHookState)
/* harmony export */ });
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}


/***/ }),

/***/ 35503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S1: () => (/* binding */ off),
/* harmony export */   ZT: () => (/* binding */ noop),
/* harmony export */   jU: () => (/* binding */ isBrowser),
/* harmony export */   on: () => (/* binding */ on)
/* harmony export */ });
/* unused harmony export isNavigator */
var noop = function () { };
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ 17735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82897);


function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = (0,_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        callback();
    }, [callback]);
    return state;
}


/***/ }),

/***/ 82897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useAsyncFn)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(682);



function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    var isMounted = (0,_useMountedState__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), state = _a[0], set = _a[1];
    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        if (!state.loading) {
            set(function (prevState) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, prevState), { loading: true })); });
        }
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}


/***/ }),

/***/ 77219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17735);



var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), attempt = _a[0], setAttempt = _a[1];
    var state = (0,_useAsync__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(fn, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArrays */ .pr)(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        if (stateLoading) {
            if (false) {}
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArrays */ .pr)(deps, [stateLoading]));
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, state), { retry: retry });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAsyncRetry);


/***/ }),

/***/ 78937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (9966 != __webpack_require__.j) {
	/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55287);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (_useToggle__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) : null));


/***/ }),

/***/ 47824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35503);


var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onClickAway);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickAway);


/***/ }),

/***/ 34278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ esm_useCopyToClipboard)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/copy-to-clipboard@3.3.1/node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(79847);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useMountedState.js
var useMountedState = __webpack_require__(682);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useSetState.js

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = (0,react.useState)(initialState), state = _a[0], set = _a[1];
    var setState = (0,react.useCallback)(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
/* harmony default export */ const esm_useSetState = (useSetState);

;// CONCATENATED MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useCopyToClipboard.js




var useCopyToClipboard = function () {
    var isMounted = (0,useMountedState/* default */.Z)();
    var _a = esm_useSetState({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = (0,react.useCallback)(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard_default()(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
/* harmony default export */ const esm_useCopyToClipboard = (useCopyToClipboard);


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (9966 == __webpack_require__.j) {
	/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42253);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
if (9966 == __webpack_require__.j) {
	/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35503);
}



var createProcess = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), over = _a[0], setOverRaw = _a[1];
    var setOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(setOverRaw, []);
    var process = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return createProcess(options); }, [onFiles, onText, onUri]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, 'dragover', onDragOver);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, 'dragenter', onDragEnter);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, 'dragleave', onDragLeave);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, 'dragexit', onDragExit);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, 'drop', onDrop);
        if (onText) {
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, 'paste', onPaste);
        }
        return function () {
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, 'dragover', onDragOver);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, 'dragenter', onDragEnter);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, 'dragleave', onDragLeave);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, 'dragexit', onDragExit);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, 'drop', onDrop);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(document, 'paste', onPaste);
        };
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArrays */ .pr)([process], args));
    return { over: over };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 == __webpack_require__.j ? (useDrop) : null));


/***/ }),

/***/ 98826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(682);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35503);



/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = (0,_useMountedState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), over = _a[0], setOver = _a[1];
    var process = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDropArea);


/***/ }),

/***/ 58068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

var useEffectOnce = function (effect) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectOnce);


/***/ }),

/***/ 58778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

var useIntersection = function (ref, options) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (useIntersection) : null));


/***/ }),

/***/ 92867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

var useInterval = function (callback, delay) {
    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () { });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        savedCallback.current = callback;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (useInterval) : null));


/***/ }),

/***/ 79904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
if (9966 == __webpack_require__.j) {
	/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58966);
}
if (9966 == __webpack_require__.j) {
	/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90586);
}



function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_misc_hookState__WEBPACK_IMPORTED_MODULE_1__/* .resolveHookState */ .f)(initialList));
    var update = (0,_useUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    var actions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var a = {
            set: function (newList) {
                list.current = (0,_misc_hookState__WEBPACK_IMPORTED_MODULE_1__/* .resolveHookState */ .f)(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set((0,_misc_hookState__WEBPACK_IMPORTED_MODULE_1__/* .resolveHookState */ .f)(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 == __webpack_require__.j ? (useList) : null));


/***/ }),

/***/ 73161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35503);


var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buildState('load')), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(window, 'popstate', onPopstate);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(window, 'pushstate', onPushstate);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(window, 'replacestate', onReplacestate);
        return function () {
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(window, 'popstate', onPopstate);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(window, 'pushstate', onPushstate);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU && hasEventConstructor ? useLocationBrowser : useLocationServer);


/***/ }),

/***/ 78678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (9966 != __webpack_require__.j) {
	/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58068);
}

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (useMount) : null));


/***/ }),

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useMountedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useMountedState() {
    var mountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var get = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () { return mountedRef.current; }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}


/***/ }),

/***/ 48927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useTimeout)
/* harmony export */ });
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99732);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58966);


function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = (0,_useUpdate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    return (0,_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(update, ms);
}


/***/ }),

/***/ 99732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useTimeoutFn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
    var isReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () { return ready.current; }, []);
    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ 55287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(toggleReducer, initialValue);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (useToggle) : null));


/***/ }),

/***/ 64245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58068);


var useUnmount = function (fn) {
    var fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnmount);


/***/ }),

/***/ 58966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(updateReducer, 0), update = _a[1];
    return update;
}


/***/ }),

/***/ 82903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ esm_useUpdateEffect)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useFirstMountState.js

function useFirstMountState() {
    var isFirst = (0,react.useRef)(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js


var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState();
    (0,react.useEffect)(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
/* harmony default export */ const esm_useUpdateEffect = (useUpdateEffect);


/***/ }),

/***/ 58758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ esm_useWindowSize)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUnmount.js
var useUnmount = __webpack_require__(64245);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useRafState.js


var useRafState = function (initialState) {
    var frame = (0,react.useRef)(0);
    var _a = (0,react.useState)(initialState), state = _a[0], setState = _a[1];
    var setRafState = (0,react.useCallback)(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    (0,useUnmount/* default */.Z)(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ const esm_useRafState = (useRafState);

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/misc/util.js
var util = __webpack_require__(35503);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = esm_useRafState({
        width: util/* isBrowser */.jU ? window.innerWidth : initialWidth,
        height: util/* isBrowser */.jU ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    (0,react.useEffect)(function () {
        if (util/* isBrowser */.jU) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            (0,util.on)(window, 'resize', handler_1);
            return function () {
                (0,util/* off */.S1)(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ const esm_useWindowSize = (useWindowSize);


/***/ })

}]);
//# sourceMappingURL=npm.react-use.js.map