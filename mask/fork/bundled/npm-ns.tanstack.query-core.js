"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6949],{

/***/ 52893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ focusManager)
/* harmony export */ });
/* unused harmony export FocusManager */
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83730);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14047);



class FocusManager extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Subscribable */ .l {
  constructor() {
    super();

    this.setup = onFocus => {
      // addEventListener does not exist in React Native, but window does
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isServer */ .sk && window.addEventListener) {
        const listener = () => onFocus(); // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return () => {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      }

      return;
    };
  }

  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  }

  setEventListener(setup) {
    var _this$cleanup2;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(focused => {
      if (typeof focused === 'boolean') {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }

  setFocused(focused) {
    const changed = this.focused !== focused;

    if (changed) {
      this.focused = focused;
      this.onFocus();
    }
  }

  onFocus() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }

  isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  }

}
const focusManager = new FocusManager();


//# sourceMappingURL=focusManager.mjs.map


/***/ }),

/***/ 45820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gm: () => (/* binding */ infiniteQueryBehavior),
/* harmony export */   Qy: () => (/* binding */ hasNextPage),
/* harmony export */   ZF: () => (/* binding */ hasPreviousPage)
/* harmony export */ });
/* unused harmony exports getNextPageParam, getPreviousPageParam */
function infiniteQueryBehavior() {
  return {
    onFetch: context => {
      context.fetchFn = () => {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;

        const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        let newPageParams = oldPageParams;
        let cancelled = false;

        const addSignalProperty = object => {
          Object.defineProperty(object, 'signal', {
            enumerable: true,
            get: () => {
              var _context$signal;

              if ((_context$signal = context.signal) != null && _context$signal.aborted) {
                cancelled = true;
              } else {
                var _context$signal2;

                (_context$signal2 = context.signal) == null ? void 0 : _context$signal2.addEventListener('abort', () => {
                  cancelled = true;
                });
              }

              return context.signal;
            }
          });
        }; // Get query function


        const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + context.options.queryHash + "'"));

        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        }; // Create function to fetch a page


        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const queryFnResult = queryFn(queryFnContext);
          const promise = Promise.resolve(queryFnResult).then(page => buildNewPages(pages, param, page, previous));
          return promise;
        };

        let promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
          const manual = typeof pageParam !== 'undefined';
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } // Fetch previous page?
        else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== 'undefined';
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } // Refetch pages
        else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === 'undefined';
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true; // Fetch first page

          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0])); // Fetch remaining pages

          for (let i = 1; i < oldPages.length; i++) {
            promise = promise.then(pages => {
              const shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;

              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }

              return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
            });
          }
        }

        const finalPromise = promise.then(pages => ({
          pages,
          pageParams: newPageParams
        }));
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    const nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }

  return;
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    const previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }

  return;
}


//# sourceMappingURL=infiniteQueryBehavior.mjs.map


/***/ }),

/***/ 87193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ InfiniteQueryObserver)
/* harmony export */ });
if (9966 != __webpack_require__.j) {
	/* harmony import */ var _queryObserver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28281);
}
if (9966 != __webpack_require__.j) {
	/* harmony import */ var _infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45820);
}



class InfiniteQueryObserver extends (/* runtime-dependent pure expression or super */ 9966 != __webpack_require__.j ? (_queryObserver_mjs__WEBPACK_IMPORTED_MODULE_0__/* .QueryObserver */ .z) : null) {
  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(client, options) {
    super(client, options);
  }

  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }

  setOptions(options, notifyOptions) {
    super.setOptions({ ...options,
      behavior: (0,_infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_1__/* .infiniteQueryBehavior */ .Gm)()
    }, notifyOptions);
  }

  getOptimisticResult(options) {
    options.behavior = (0,_infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_1__/* .infiniteQueryBehavior */ .Gm)();
    return super.getOptimisticResult(options);
  }

  fetchNextPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({ ...options,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam
        }
      }
    });
  }

  fetchPreviousPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({ ...options,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam
        }
      }
    });
  }

  createResult(query, options) {
    var _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet, _state$data, _state$data2;

    const {
      state
    } = query;
    const result = super.createResult(query, options);
    const {
      isFetching,
      isRefetching
    } = result;
    const isFetchingNextPage = isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward';
    const isFetchingPreviousPage = isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward';
    return { ...result,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,_infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_1__/* .hasNextPage */ .Qy)(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: (0,_infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_1__/* .hasPreviousPage */ .ZF)(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage,
      isFetchingPreviousPage,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
  }

}


//# sourceMappingURL=infiniteQueryObserver.mjs.map


/***/ }),

/***/ 75732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ defaultLogger)
/* harmony export */ });
const defaultLogger = console;


//# sourceMappingURL=logger.mjs.map


/***/ }),

/***/ 34796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ getDefaultState),
/* harmony export */   m: () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75732);
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29641);
/* harmony import */ var _removable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29475);
/* harmony import */ var _retryer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94275);





// CLASS
class Mutation extends _removable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Removable */ .F {
  constructor(config) {
    super();
    this.defaultOptions = config.defaultOptions;
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.logger = config.logger || _logger_mjs__WEBPACK_IMPORTED_MODULE_1__/* .defaultLogger */ ._;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }

  setOptions(options) {
    this.options = { ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }

  get meta() {
    return this.options.meta;
  }

  setState(state) {
    this.dispatch({
      type: 'setState',
      state
    });
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer); // Stop the mutation from being garbage collected

      this.clearGcTimeout();
      this.mutationCache.notify({
        type: 'observerAdded',
        mutation: this,
        observer
      });
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(x => x !== observer);
    this.scheduleGc();
    this.mutationCache.notify({
      type: 'observerRemoved',
      mutation: this,
      observer
    });
  }

  optionalRemove() {
    if (!this.observers.length) {
      if (this.state.status === 'loading') {
        this.scheduleGc();
      } else {
        this.mutationCache.remove(this);
      }
    }
  }

  continue() {
    var _this$retryer$continu, _this$retryer;

    return (_this$retryer$continu = (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.continue()) != null ? _this$retryer$continu : this.execute();
  }

  async execute() {
    const executeMutation = () => {
      var _this$options$retry;

      this.retryer = (0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createRetryer */ .Mz)({
        fn: () => {
          if (!this.options.mutationFn) {
            return Promise.reject('No mutationFn found');
          }

          return this.options.mutationFn(this.state.variables);
        },
        onFail: (failureCount, error) => {
          this.dispatch({
            type: 'failed',
            failureCount,
            error
          });
        },
        onPause: () => {
          this.dispatch({
            type: 'pause'
          });
        },
        onContinue: () => {
          this.dispatch({
            type: 'continue'
          });
        },
        retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      });
      return this.retryer.promise;
    };

    const restored = this.state.status === 'loading';

    try {
      var _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onSettl, _this$options3;

      if (!restored) {
        var _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options;

        this.dispatch({
          type: 'loading',
          variables: this.options.variables
        }); // Notify cache callback

        await ((_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this));
        const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables));

        if (context !== this.state.context) {
          this.dispatch({
            type: 'loading',
            context,
            variables: this.state.variables
          });
        }
      }

      const data = await executeMutation(); // Notify cache callback

      await ((_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this));
      await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context)); // Notify cache callback

      await ((_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, data, null, this.state.variables, this.state.context, this));
      await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context));
      this.dispatch({
        type: 'success',
        data
      });
      return data;
    } catch (error) {
      try {
        var _this$mutationCache$c7, _this$mutationCache$c8, _this$options$onError, _this$options4, _this$mutationCache$c9, _this$mutationCache$c10, _this$options$onSettl2, _this$options5;

        // Notify cache callback
        await ((_this$mutationCache$c7 = (_this$mutationCache$c8 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c7.call(_this$mutationCache$c8, error, this.state.variables, this.state.context, this));

        if (false) {}

        await ((_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, error, this.state.variables, this.state.context)); // Notify cache callback

        await ((_this$mutationCache$c9 = (_this$mutationCache$c10 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c9.call(_this$mutationCache$c10, undefined, error, this.state.variables, this.state.context, this));
        await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, undefined, error, this.state.variables, this.state.context));
        throw error;
      } finally {
        this.dispatch({
          type: 'error',
          error: error
        });
      }
    }
  }

  dispatch(action) {
    const reducer = state => {
      switch (action.type) {
        case 'failed':
          return { ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };

        case 'pause':
          return { ...state,
            isPaused: true
          };

        case 'continue':
          return { ...state,
            isPaused: false
          };

        case 'loading':
          return { ...state,
            context: action.context,
            data: undefined,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !(0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_2__/* .canFetch */ .Kw)(this.options.networkMode),
            status: 'loading',
            variables: action.variables
          };

        case 'success':
          return { ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: false
          };

        case 'error':
          return { ...state,
            data: undefined,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: 'error'
          };

        case 'setState':
          return { ...state,
            ...action.state
          };
      }
    };

    this.state = reducer(this.state);
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__/* .notifyManager */ .V.batch(() => {
      this.observers.forEach(observer => {
        observer.onMutationUpdate(action);
      });
      this.mutationCache.notify({
        mutation: this,
        type: 'updated',
        action
      });
    });
  }

}
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}


//# sourceMappingURL=mutation.mjs.map


/***/ }),

/***/ 22549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ MutationObserver)
/* harmony export */ });
if (964 == __webpack_require__.j) {
	/* harmony import */ var _mutation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34796);
}
if (964 == __webpack_require__.j) {
	/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29641);
}
if (964 == __webpack_require__.j) {
	/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83730);
}
if (964 == __webpack_require__.j) {
	/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14047);
}





// CLASS
class MutationObserver extends (/* runtime-dependent pure expression or super */ 964 == __webpack_require__.j ? (_subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Subscribable */ .l) : null) {
  constructor(client, options) {
    super();
    this.client = client;
    this.setOptions(options);
    this.bindMethods();
    this.updateResult();
  }

  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }

  setOptions(options) {
    var _this$currentMutation;

    const prevOptions = this.options;
    this.options = this.client.defaultMutationOptions(options);

    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .shallowEqualObjects */ .VS)(prevOptions, this.options)) {
      this.client.getMutationCache().notify({
        type: 'observerOptionsUpdated',
        mutation: this.currentMutation,
        observer: this
      });
    }

    (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.setOptions(this.options);
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$currentMutation2;

      (_this$currentMutation2 = this.currentMutation) == null ? void 0 : _this$currentMutation2.removeObserver(this);
    }
  }

  onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    const notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  }

  getCurrentResult() {
    return this.currentResult;
  }

  reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  }

  mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    });
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  }

  updateResult() {
    const state = this.currentMutation ? this.currentMutation.state : (0,_mutation_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultState */ .R)();
    const result = { ...state,
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = result;
  }

  notify(options) {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__/* .notifyManager */ .V.batch(() => {
      // First trigger the mutate callbacks
      if (this.mutateOptions && this.hasListeners()) {
        if (options.onSuccess) {
          var _this$mutateOptions$o, _this$mutateOptions, _this$mutateOptions$o2, _this$mutateOptions2;

          (_this$mutateOptions$o = (_this$mutateOptions = this.mutateOptions).onSuccess) == null ? void 0 : _this$mutateOptions$o.call(_this$mutateOptions, this.currentResult.data, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o2 = (_this$mutateOptions2 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o2.call(_this$mutateOptions2, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (options.onError) {
          var _this$mutateOptions$o3, _this$mutateOptions3, _this$mutateOptions$o4, _this$mutateOptions4;

          (_this$mutateOptions$o3 = (_this$mutateOptions3 = this.mutateOptions).onError) == null ? void 0 : _this$mutateOptions$o3.call(_this$mutateOptions3, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o4 = (_this$mutateOptions4 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o4.call(_this$mutateOptions4, undefined, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      }
    });
  }

}


//# sourceMappingURL=mutationObserver.mjs.map


/***/ }),

/***/ 29641:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ notifyManager)
/* harmony export */ });
/* unused harmony export createNotifyManager */
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);


function createNotifyManager() {
  let queue = [];
  let transactions = 0;

  let notifyFn = callback => {
    callback();
  };

  let batchNotifyFn = callback => {
    callback();
  };

  const batch = callback => {
    let result;
    transactions++;

    try {
      result = callback();
    } finally {
      transactions--;

      if (!transactions) {
        flush();
      }
    }

    return result;
  };

  const schedule = callback => {
    if (transactions) {
      queue.push(callback);
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .scheduleMicrotask */ .A4)(() => {
        notifyFn(callback);
      });
    }
  };
  /**
   * All calls to the wrapped function will be batched.
   */


  const batchCalls = callback => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };

  const flush = () => {
    const originalQueue = queue;
    queue = [];

    if (originalQueue.length) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .scheduleMicrotask */ .A4)(() => {
        batchNotifyFn(() => {
          originalQueue.forEach(callback => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */


  const setNotifyFunction = fn => {
    notifyFn = fn;
  };
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */


  const setBatchNotifyFunction = fn => {
    batchNotifyFn = fn;
  };

  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction
  };
} // SINGLETON

const notifyManager = createNotifyManager();


//# sourceMappingURL=notifyManager.mjs.map


/***/ }),

/***/ 97036:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ onlineManager)
/* harmony export */ });
/* unused harmony export OnlineManager */
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83730);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14047);



const onlineEvents = ['online', 'offline'];
class OnlineManager extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Subscribable */ .l {
  constructor() {
    super();

    this.setup = onOnline => {
      // addEventListener does not exist in React Native, but window does
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isServer */ .sk && window.addEventListener) {
        const listener = () => onOnline(); // Listen to online


        onlineEvents.forEach(event => {
          window.addEventListener(event, listener, false);
        });
        return () => {
          // Be sure to unsubscribe if a new handler is set
          onlineEvents.forEach(event => {
            window.removeEventListener(event, listener);
          });
        };
      }

      return;
    };
  }

  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  }

  setEventListener(setup) {
    var _this$cleanup2;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(online => {
      if (typeof online === 'boolean') {
        this.setOnline(online);
      } else {
        this.onOnline();
      }
    });
  }

  setOnline(online) {
    const changed = this.online !== online;

    if (changed) {
      this.online = online;
      this.onOnline();
    }
  }

  onOnline() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }

  isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  }

}
const onlineManager = new OnlineManager();


//# sourceMappingURL=onlineManager.mjs.map


/***/ }),

/***/ 61941:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ QueriesObserver)
/* harmony export */ });
if (!/^(1799|3352)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14047);
}
if (!/^(1799|3352)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29641);
}
if (!/^(1799|3352)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _queryObserver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28281);
}
if (!/^(1799|3352)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83730);
}





class QueriesObserver extends (/* runtime-dependent pure expression or super */ !/^(1799|3352)$/.test(__webpack_require__.j) ? (_subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Subscribable */ .l) : null) {
  constructor(client, queries) {
    super();
    this.client = client;
    this.queries = [];
    this.result = [];
    this.observers = [];
    this.observersMap = {};

    if (queries) {
      this.setQueries(queries);
    }
  }

  onSubscribe() {
    if (this.listeners.size === 1) {
      this.observers.forEach(observer => {
        observer.subscribe(result => {
          this.onUpdate(observer, result);
        });
      });
    }
  }

  onUnsubscribe() {
    if (!this.listeners.size) {
      this.destroy();
    }
  }

  destroy() {
    this.listeners = new Set();
    this.observers.forEach(observer => {
      observer.destroy();
    });
  }

  setQueries(queries, notifyOptions) {
    this.queries = queries;
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_1__/* .notifyManager */ .V.batch(() => {
      const prevObservers = this.observers;
      const newObserverMatches = this.findMatchingObservers(this.queries); // set options for the new observers to notify of changes

      newObserverMatches.forEach(match => match.observer.setOptions(match.defaultedQueryOptions, notifyOptions));
      const newObservers = newObserverMatches.map(match => match.observer);
      const newObserversMap = Object.fromEntries(newObservers.map(observer => [observer.options.queryHash, observer]));
      const newResult = newObservers.map(observer => observer.getCurrentResult());
      const hasIndexChange = newObservers.some((observer, index) => observer !== prevObservers[index]);

      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }

      this.observers = newObservers;
      this.observersMap = newObserversMap;
      this.result = newResult;

      if (!this.hasListeners()) {
        return;
      }

      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .difference */ .e5)(prevObservers, newObservers).forEach(observer => {
        observer.destroy();
      });
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .difference */ .e5)(newObservers, prevObservers).forEach(observer => {
        observer.subscribe(result => {
          this.onUpdate(observer, result);
        });
      });
      this.notify();
    });
  }

  getCurrentResult() {
    return this.result;
  }

  getQueries() {
    return this.observers.map(observer => observer.getCurrentQuery());
  }

  getObservers() {
    return this.observers;
  }

  getOptimisticResult(queries) {
    return this.findMatchingObservers(queries).map(match => match.observer.getOptimisticResult(match.defaultedQueryOptions));
  }

  findMatchingObservers(queries) {
    const prevObservers = this.observers;
    const prevObserversMap = new Map(prevObservers.map(observer => [observer.options.queryHash, observer]));
    const defaultedQueryOptions = queries.map(options => this.client.defaultQueryOptions(options));
    const matchingObservers = defaultedQueryOptions.flatMap(defaultedOptions => {
      const match = prevObserversMap.get(defaultedOptions.queryHash);

      if (match != null) {
        return [{
          defaultedQueryOptions: defaultedOptions,
          observer: match
        }];
      }

      return [];
    });
    const matchedQueryHashes = new Set(matchingObservers.map(match => match.defaultedQueryOptions.queryHash));
    const unmatchedQueries = defaultedQueryOptions.filter(defaultedOptions => !matchedQueryHashes.has(defaultedOptions.queryHash));
    const matchingObserversSet = new Set(matchingObservers.map(match => match.observer));
    const unmatchedObservers = prevObservers.filter(prevObserver => !matchingObserversSet.has(prevObserver));

    const getObserver = options => {
      const defaultedOptions = this.client.defaultQueryOptions(options);
      const currentObserver = this.observersMap[defaultedOptions.queryHash];
      return currentObserver != null ? currentObserver : new _queryObserver_mjs__WEBPACK_IMPORTED_MODULE_3__/* .QueryObserver */ .z(this.client, defaultedOptions);
    };

    const newOrReusedObservers = unmatchedQueries.map((options, index) => {
      if (options.keepPreviousData) {
        // return previous data from one of the observers that no longer match
        const previouslyUsedObserver = unmatchedObservers[index];

        if (previouslyUsedObserver !== undefined) {
          return {
            defaultedQueryOptions: options,
            observer: previouslyUsedObserver
          };
        }
      }

      return {
        defaultedQueryOptions: options,
        observer: getObserver(options)
      };
    });

    const sortMatchesByOrderOfQueries = (a, b) => defaultedQueryOptions.indexOf(a.defaultedQueryOptions) - defaultedQueryOptions.indexOf(b.defaultedQueryOptions);

    return matchingObservers.concat(newOrReusedObservers).sort(sortMatchesByOrderOfQueries);
  }

  onUpdate(observer, result) {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.result = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .replaceAt */ .Rc)(this.result, index, result);
      this.notify();
    }
  }

  notify() {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_1__/* .notifyManager */ .V.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(this.result);
      });
    });
  }

}


//# sourceMappingURL=queriesObserver.mjs.map


/***/ }),

/***/ 72326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ QueryClient)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/utils.mjs
var utils = __webpack_require__(14047);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/logger.mjs
var logger = __webpack_require__(75732);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/notifyManager.mjs
var notifyManager = __webpack_require__(29641);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/retryer.mjs
var retryer = __webpack_require__(94275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/removable.mjs
var removable = __webpack_require__(29475);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/query.mjs






// CLASS
class Query extends removable/* Removable */.F {
  constructor(config) {
    super();
    this.abortSignalConsumed = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.logger = config.logger || logger/* defaultLogger */._;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }

  get meta() {
    return this.options.meta;
  }

  setOptions(options) {
    this.options = { ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }

  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === 'idle') {
      this.cache.remove(this);
    }
  }

  setData(newData, options) {
    const data = (0,utils/* replaceData */.oE)(this.state.data, newData, this.options); // Set data and mark it as cached

    this.dispatch({
      data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }

  setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state,
      setStateOptions
    });
  }

  cancel(options) {
    var _this$retryer;

    const promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(utils/* noop */.ZT).catch(utils/* noop */.ZT) : Promise.resolve();
  }

  destroy() {
    super.destroy();
    this.cancel({
      silent: true
    });
  }

  reset() {
    this.destroy();
    this.setState(this.initialState);
  }

  isActive() {
    return this.observers.some(observer => observer.options.enabled !== false);
  }

  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }

  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(observer => observer.getCurrentResult().isStale);
  }

  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,utils/* timeUntilStale */.Kp)(this.state.dataUpdatedAt, staleTime);
  }

  onFocus() {
    var _this$retryer2;

    const observer = this.observers.find(x => x.shouldFetchOnWindowFocus());

    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  }

  onOnline() {
    var _this$retryer3;

    const observer = this.observers.find(x => x.shouldFetchOnReconnect());

    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer); // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer
      });
    }
  }

  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter(x => x !== observer);

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        this.scheduleGc();
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer
      });
    }
  }

  getObserversCount() {
    return this.observers.length;
  }

  invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  }

  fetch(options, fetchOptions) {
    var _this$options$behavio, _context$fetchOptions;

    if (this.state.fetchStatus !== 'idle') {
      if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;

        // make sure that retries that were potentially cancelled due to unmounts can continue
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry(); // Return current promise if we are already fetching

        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      const observer = this.observers.find(x => x.options.queryFn);

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    if (!Array.isArray(this.options.queryKey)) {
      if (false) {}
    }

    const abortController = (0,utils/* getAbortController */.G9)(); // Create query function context

    const queryFnContext = {
      queryKey: this.queryKey,
      pageParam: undefined,
      meta: this.meta
    }; // Adds an enumerable signal property to the object that
    // which sets abortSignalConsumed to true when the signal
    // is read.

    const addSignalProperty = object => {
      Object.defineProperty(object, 'signal', {
        enumerable: true,
        get: () => {
          if (abortController) {
            this.abortSignalConsumed = true;
            return abortController.signal;
          }

          return undefined;
        }
      });
    };

    addSignalProperty(queryFnContext); // Create fetch function

    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'");
      }

      this.abortSignalConsumed = false;
      return this.options.queryFn(queryFnContext);
    }; // Trigger behavior hook


    const context = {
      fetchOptions,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn
    };
    addSignalProperty(context);
    (_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch(context); // Store state in case the current fetch needs to be reverted

    this.revertState = this.state; // Set to fetching state if not already in it

    if (this.state.fetchStatus === 'idle' || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }

    const onError = error => {
      // Optimistically update state if needed
      if (!((0,retryer/* isCancelledError */.DV)(error) && error.silent)) {
        this.dispatch({
          type: 'error',
          error: error
        });
      }

      if (!(0,retryer/* isCancelledError */.DV)(error)) {
        var _this$cache$config$on, _this$cache$config, _this$cache$config$on2, _this$cache$config2;

        // Notify cache callback
        (_this$cache$config$on = (_this$cache$config = this.cache.config).onError) == null ? void 0 : _this$cache$config$on.call(_this$cache$config, error, this);
        (_this$cache$config$on2 = (_this$cache$config2 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on2.call(_this$cache$config2, this.state.data, error, this);

        if (false) {}
      }

      if (!this.isFetchingOptimistic) {
        // Schedule query gc after fetching
        this.scheduleGc();
      }

      this.isFetchingOptimistic = false;
    }; // Try to fetch the data


    this.retryer = (0,retryer/* createRetryer */.Mz)({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
      onSuccess: data => {
        var _this$cache$config$on3, _this$cache$config3, _this$cache$config$on4, _this$cache$config4;

        if (typeof data === 'undefined') {
          if (false) {}

          onError(new Error(this.queryHash + " data is undefined"));
          return;
        }

        this.setData(data); // Notify cache callback

        (_this$cache$config$on3 = (_this$cache$config3 = this.cache.config).onSuccess) == null ? void 0 : _this$cache$config$on3.call(_this$cache$config3, data, this);
        (_this$cache$config$on4 = (_this$cache$config4 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on4.call(_this$cache$config4, data, this.state.error, this);

        if (!this.isFetchingOptimistic) {
          // Schedule query gc after fetching
          this.scheduleGc();
        }

        this.isFetchingOptimistic = false;
      },
      onError,
      onFail: (failureCount, error) => {
        this.dispatch({
          type: 'failed',
          failureCount,
          error
        });
      },
      onPause: () => {
        this.dispatch({
          type: 'pause'
        });
      },
      onContinue: () => {
        this.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }

  dispatch(action) {
    const reducer = state => {
      var _action$meta, _action$dataUpdatedAt;

      switch (action.type) {
        case 'failed':
          return { ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };

        case 'pause':
          return { ...state,
            fetchStatus: 'paused'
          };

        case 'continue':
          return { ...state,
            fetchStatus: 'fetching'
          };

        case 'fetch':
          return { ...state,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
            fetchStatus: (0,retryer/* canFetch */.Kw)(this.options.networkMode) ? 'fetching' : 'paused',
            ...(!state.dataUpdatedAt && {
              error: null,
              status: 'loading'
            })
          };

        case 'success':
          return { ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
            error: null,
            isInvalidated: false,
            status: 'success',
            ...(!action.manual && {
              fetchStatus: 'idle',
              fetchFailureCount: 0,
              fetchFailureReason: null
            })
          };

        case 'error':
          const error = action.error;

          if ((0,retryer/* isCancelledError */.DV)(error) && error.revert && this.revertState) {
            return { ...this.revertState
            };
          }

          return { ...state,
            error: error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: 'idle',
            status: 'error'
          };

        case 'invalidate':
          return { ...state,
            isInvalidated: true
          };

        case 'setState':
          return { ...state,
            ...action.state
          };
      }
    };

    this.state = reducer(this.state);
    notifyManager/* notifyManager */.V.batch(() => {
      this.observers.forEach(observer => {
        observer.onQueryUpdate(action);
      });
      this.cache.notify({
        query: this,
        type: 'updated',
        action
      });
    });
  }

}

function getDefaultState(options) {
  const data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
  const hasData = typeof data !== 'undefined';
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? 'success' : 'loading',
    fetchStatus: 'idle'
  };
}


//# sourceMappingURL=query.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/subscribable.mjs
var subscribable = __webpack_require__(83730);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/queryCache.mjs





// CLASS
class QueryCache extends subscribable/* Subscribable */.l {
  constructor(config) {
    super();
    this.config = config || {};
    this.queries = [];
    this.queriesMap = {};
  }

  build(client, options, state) {
    var _options$queryHash;

    const queryKey = options.queryKey;
    const queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : (0,utils/* hashQueryKeyByOptions */.Rm)(queryKey, options);
    let query = this.get(queryHash);

    if (!query) {
      query = new Query({
        cache: this,
        logger: client.getLogger(),
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }

    return query;
  }

  add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'added',
        query
      });
    }
  }

  remove(query) {
    const queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(x => x !== query);

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'removed',
        query
      });
    }
  }

  clear() {
    notifyManager/* notifyManager */.V.batch(() => {
      this.queries.forEach(query => {
        this.remove(query);
      });
    });
  }

  get(queryHash) {
    return this.queriesMap[queryHash];
  }

  getAll() {
    return this.queries;
  }

  find(arg1, arg2) {
    const [filters] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2);

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(query => (0,utils/* matchQuery */._x)(filters, query));
  }

  findAll(arg1, arg2) {
    const [filters] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2);
    return Object.keys(filters).length > 0 ? this.queries.filter(query => (0,utils/* matchQuery */._x)(filters, query)) : this.queries;
  }

  notify(event) {
    notifyManager/* notifyManager */.V.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }

  onFocus() {
    notifyManager/* notifyManager */.V.batch(() => {
      this.queries.forEach(query => {
        query.onFocus();
      });
    });
  }

  onOnline() {
    notifyManager/* notifyManager */.V.batch(() => {
      this.queries.forEach(query => {
        query.onOnline();
      });
    });
  }

}


//# sourceMappingURL=queryCache.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/mutation.mjs
var lib_mutation = __webpack_require__(34796);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/mutationCache.mjs





// CLASS
class MutationCache extends subscribable/* Subscribable */.l {
  constructor(config) {
    super();
    this.config = config || {};
    this.mutations = [];
    this.mutationId = 0;
  }

  build(client, options, state) {
    const mutation = new lib_mutation/* Mutation */.m({
      mutationCache: this,
      logger: client.getLogger(),
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
    });
    this.add(mutation);
    return mutation;
  }

  add(mutation) {
    this.mutations.push(mutation);
    this.notify({
      type: 'added',
      mutation
    });
  }

  remove(mutation) {
    this.mutations = this.mutations.filter(x => x !== mutation);
    this.notify({
      type: 'removed',
      mutation
    });
  }

  clear() {
    notifyManager/* notifyManager */.V.batch(() => {
      this.mutations.forEach(mutation => {
        this.remove(mutation);
      });
    });
  }

  getAll() {
    return this.mutations;
  }

  find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(mutation => (0,utils/* matchMutation */.X7)(filters, mutation));
  }

  findAll(filters) {
    return this.mutations.filter(mutation => (0,utils/* matchMutation */.X7)(filters, mutation));
  }

  notify(event) {
    notifyManager/* notifyManager */.V.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }

  resumePausedMutations() {
    var _this$resuming;

    this.resuming = ((_this$resuming = this.resuming) != null ? _this$resuming : Promise.resolve()).then(() => {
      const pausedMutations = this.mutations.filter(x => x.state.isPaused);
      return notifyManager/* notifyManager */.V.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(utils/* noop */.ZT)), Promise.resolve()));
    }).then(() => {
      this.resuming = undefined;
    });
    return this.resuming;
  }

}


//# sourceMappingURL=mutationCache.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/focusManager.mjs
var focusManager = __webpack_require__(52893);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/onlineManager.mjs
var onlineManager = __webpack_require__(97036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs
var infiniteQueryBehavior = __webpack_require__(45820);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@4.29.25/node_modules/@tanstack/query-core/build/lib/queryClient.mjs









// CLASS
class QueryClient {
  constructor(config = {}) {
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.logger = config.logger || logger/* defaultLogger */._;
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
    this.mountCount = 0;

    if (false) {}
  }

  mount() {
    this.mountCount++;
    if (this.mountCount !== 1) return;
    this.unsubscribeFocus = focusManager/* focusManager */.j.subscribe(() => {
      if (focusManager/* focusManager */.j.isFocused()) {
        this.resumePausedMutations();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager/* onlineManager */.N.subscribe(() => {
      if (onlineManager/* onlineManager */.N.isOnline()) {
        this.resumePausedMutations();
        this.queryCache.onOnline();
      }
    });
  }

  unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    this.mountCount--;
    if (this.mountCount !== 0) return;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    this.unsubscribeFocus = undefined;
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
    this.unsubscribeOnline = undefined;
  }

  isFetching(arg1, arg2) {
    const [filters] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2);
    filters.fetchStatus = 'fetching';
    return this.queryCache.findAll(filters).length;
  }

  isMutating(filters) {
    return this.mutationCache.findAll({ ...filters,
      fetching: true
    }).length;
  }

  getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  }

  ensureQueryData(arg1, arg2, arg3) {
    const parsedOptions = (0,utils/* parseQueryArgs */._v)(arg1, arg2, arg3);
    const cachedData = this.getQueryData(parsedOptions.queryKey);
    return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
  }

  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey,
      state
    }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }

  setQueryData(queryKey, updater, options) {
    const query = this.queryCache.find(queryKey);
    const prevData = query == null ? void 0 : query.state.data;
    const data = (0,utils/* functionalUpdate */.SE)(updater, prevData);

    if (typeof data === 'undefined') {
      return undefined;
    }

    const parsedOptions = (0,utils/* parseQueryArgs */._v)(queryKey);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(data, { ...options,
      manual: true
    });
  }

  setQueriesData(queryKeyOrFilters, updater, options) {
    return notifyManager/* notifyManager */.V.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey
    }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
  }

  getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  }

  removeQueries(arg1, arg2) {
    const [filters] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2);
    const queryCache = this.queryCache;
    notifyManager/* notifyManager */.V.batch(() => {
      queryCache.findAll(filters).forEach(query => {
        queryCache.remove(query);
      });
    });
  }

  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = {
      type: 'active',
      ...filters
    };
    return notifyManager/* notifyManager */.V.batch(() => {
      queryCache.findAll(filters).forEach(query => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }

  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2, arg3);

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    const promises = notifyManager/* notifyManager */.V.batch(() => this.queryCache.findAll(filters).map(query => query.cancel(cancelOptions)));
    return Promise.all(promises).then(utils/* noop */.ZT).catch(utils/* noop */.ZT);
  }

  invalidateQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2, arg3);
    return notifyManager/* notifyManager */.V.batch(() => {
      var _ref, _filters$refetchType;

      this.queryCache.findAll(filters).forEach(query => {
        query.invalidate();
      });

      if (filters.refetchType === 'none') {
        return Promise.resolve();
      }

      const refetchFilters = { ...filters,
        type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : 'active'
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }

  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,utils/* parseFilterArgs */.I6)(arg1, arg2, arg3);
    const promises = notifyManager/* notifyManager */.V.batch(() => this.queryCache.findAll(filters).filter(query => !query.isDisabled()).map(query => {
      var _options$cancelRefetc;

      return query.fetch(undefined, { ...options,
        cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
        meta: {
          refetchPage: filters.refetchPage
        }
      });
    }));
    let promise = Promise.all(promises).then(utils/* noop */.ZT);

    if (!(options != null && options.throwOnError)) {
      promise = promise.catch(utils/* noop */.ZT);
    }

    return promise;
  }

  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = (0,utils/* parseQueryArgs */._v)(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }

  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(utils/* noop */.ZT).catch(utils/* noop */.ZT);
  }

  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = (0,utils/* parseQueryArgs */._v)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,infiniteQueryBehavior/* infiniteQueryBehavior */.Gm)();
    return this.fetchQuery(parsedOptions);
  }

  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(utils/* noop */.ZT).catch(utils/* noop */.ZT);
  }

  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }

  getQueryCache() {
    return this.queryCache;
  }

  getMutationCache() {
    return this.mutationCache;
  }

  getLogger() {
    return this.logger;
  }

  getDefaultOptions() {
    return this.defaultOptions;
  }

  setDefaultOptions(options) {
    this.defaultOptions = options;
  }

  setQueryDefaults(queryKey, options) {
    const result = this.queryDefaults.find(x => (0,utils/* hashQueryKey */.yF)(queryKey) === (0,utils/* hashQueryKey */.yF)(x.queryKey));

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  }

  getQueryDefaults(queryKey) {
    if (!queryKey) {
      return undefined;
    } // Get the first matching defaults


    const firstMatchingDefaults = this.queryDefaults.find(x => (0,utils/* partialMatchKey */.to)(queryKey, x.queryKey)); // Additional checks and error in dev mode

    if (false) {}

    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }

  setMutationDefaults(mutationKey, options) {
    const result = this.mutationDefaults.find(x => (0,utils/* hashQueryKey */.yF)(mutationKey) === (0,utils/* hashQueryKey */.yF)(x.mutationKey));

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  }

  getMutationDefaults(mutationKey) {
    if (!mutationKey) {
      return undefined;
    } // Get the first matching defaults


    const firstMatchingDefaults = this.mutationDefaults.find(x => (0,utils/* partialMatchKey */.to)(mutationKey, x.mutationKey)); // Additional checks and error in dev mode

    if (false) {}

    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }

  defaultQueryOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }

    const defaultedOptions = { ...this.defaultOptions.queries,
      ...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
      ...options,
      _defaulted: true
    };

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,utils/* hashQueryKeyByOptions */.Rm)(defaultedOptions.queryKey, defaultedOptions);
    } // dependent default values


    if (typeof defaultedOptions.refetchOnReconnect === 'undefined') {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== 'always';
    }

    if (typeof defaultedOptions.useErrorBoundary === 'undefined') {
      defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
    }

    return defaultedOptions;
  }

  defaultMutationOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }

    return { ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
      ...options,
      _defaulted: true
    };
  }

  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }

}


//# sourceMappingURL=queryClient.mjs.map


/***/ }),

/***/ 28281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ QueryObserver)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14047);
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29641);
/* harmony import */ var _focusManager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52893);
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83730);
/* harmony import */ var _retryer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94275);






class QueryObserver extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Subscribable */ .l {
  constructor(client, options) {
    super();
    this.client = client;
    this.options = options;
    this.trackedProps = new Set();
    this.selectError = null;
    this.bindMethods();
    this.setOptions(options);
  }

  bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  }

  onSubscribe() {
    if (this.listeners.size === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }

  shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }

  shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }

  destroy() {
    this.listeners = new Set();
    this.clearStaleTimeout();
    this.clearRefetchInterval();
    this.currentQuery.removeObserver(this);
  }

  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryOptions(options);

    if (false) {}

    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .shallowEqualObjects */ .VS)(prevOptions, this.options)) {
      this.client.getQueryCache().notify({
        type: 'observerOptionsUpdated',
        query: this.currentQuery,
        observer: this
      });
    }

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    const mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }

    const nextRefetchInterval = this.computeRefetchInterval(); // Update refetch interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  }

  getOptimisticResult(options) {
    const query = this.client.getQueryCache().build(this.client, options);
    const result = this.createResult(query, options);

    if (shouldAssignObserverCurrentProperties(this, result, options)) {
      // this assigns the optimistic result to the current Observer
      // because if the query function changes, useQuery will be performing
      // an effect where it would fetch again.
      // When the fetch finishes, we perform a deep data cloning in order
      // to reuse objects references. This deep data clone is performed against
      // the `observer.currentResult.data` property
      // When QueryKey changes, we refresh the query and get new `optimistic`
      // result, while we leave the `observer.currentResult`, so when new data
      // arrives, it finds the old `observer.currentResult` which is related
      // to the old QueryKey. Which means that currentResult and selectData are
      // out of sync already.
      // To solve this, we move the cursor of the currentResult everytime
      // an observer reads an optimistic value.
      // When keeping the previous data, the result doesn't change until new
      // data arrives.
      this.currentResult = result;
      this.currentResultOptions = this.options;
      this.currentResultState = this.currentQuery.state;
    }

    return result;
  }

  getCurrentResult() {
    return this.currentResult;
  }

  trackResult(result) {
    const trackedResult = {};
    Object.keys(result).forEach(key => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackedProps.add(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }

  getCurrentQuery() {
    return this.currentQuery;
  }

  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }

  refetch({
    refetchPage,
    ...options
  } = {}) {
    return this.fetch({ ...options,
      meta: {
        refetchPage
      }
    });
  }

  fetchOptimistic(options) {
    const defaultedOptions = this.client.defaultQueryOptions(options);
    const query = this.client.getQueryCache().build(this.client, defaultedOptions);
    query.isFetchingOptimistic = true;
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }

  fetch(fetchOptions) {
    var _fetchOptions$cancelR;

    return this.executeFetch({ ...fetchOptions,
      cancelRefetch: (_fetchOptions$cancelR = fetchOptions.cancelRefetch) != null ? _fetchOptions$cancelR : true
    }).then(() => {
      this.updateResult();
      return this.currentResult;
    });
  }

  executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    let promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions != null && fetchOptions.throwOnError)) {
      promise = promise.catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT);
    }

    return promise;
  }

  updateStaleTimeout() {
    this.clearStaleTimeout();

    if (_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isServer */ .sk || this.currentResult.isStale || !(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isValidTimeout */ .PN)(this.options.staleTime)) {
      return;
    }

    const time = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .timeUntilStale */ .Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    const timeout = time + 1;
    this.staleTimeoutId = setTimeout(() => {
      if (!this.currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }

  computeRefetchInterval() {
    var _this$options$refetch;

    return typeof this.options.refetchInterval === 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  }

  updateRefetchInterval(nextInterval) {
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;

    if (_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isServer */ .sk || this.options.enabled === false || !(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isValidTimeout */ .PN)(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }

    this.refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || _focusManager_mjs__WEBPACK_IMPORTED_MODULE_2__/* .focusManager */ .j.isFocused()) {
        this.executeFetch();
      }
    }, this.currentRefetchInterval);
  }

  updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  }

  clearStaleTimeout() {
    if (this.staleTimeoutId) {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = undefined;
    }
  }

  clearRefetchInterval() {
    if (this.refetchIntervalId) {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = undefined;
    }
  }

  createResult(query, options) {
    const prevQuery = this.currentQuery;
    const prevOptions = this.options;
    const prevResult = this.currentResult;
    const prevResultState = this.currentResultState;
    const prevResultOptions = this.currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    const prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    const {
      state
    } = query;
    let {
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      fetchStatus,
      status
    } = state;
    let isPreviousData = false;
    let isPlaceholderData = false;
    let data; // Optimistically set result in fetching state if needed

    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        fetchStatus = (0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__/* .canFetch */ .Kw)(query.options.networkMode) ? 'fetching' : 'paused';

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }

      if (options._optimisticResults === 'isRestoring') {
        fetchStatus = 'idle';
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdatedAt && prevQueryResult != null && prevQueryResult.isSuccess && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
      // Memoize select result
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
        data = this.selectResult;
      } else {
        try {
          this.selectFn = options.select;
          data = options.select(state.data);
          data = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .replaceData */ .oE)(prevResult == null ? void 0 : prevResult.data, data, options);
          this.selectResult = data;
          this.selectError = null;
        } catch (selectError) {
          if (false) {}

          this.selectError = selectError;
        }
      }
    } // Use query data
    else {
      data = state.data;
    } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && status === 'loading') {
      let placeholderData; // Memoize placeholder data

      if (prevResult != null && prevResult.isPlaceholderData && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);
            this.selectError = null;
          } catch (selectError) {
            if (false) {}

            this.selectError = selectError;
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .replaceData */ .oE)(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
        isPlaceholderData = true;
      }
    }

    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = 'error';
    }

    const isFetching = fetchStatus === 'fetching';
    const isLoading = status === 'loading';
    const isError = status === 'error';
    const result = {
      status,
      fetchStatus,
      isLoading,
      isSuccess: status === 'success',
      isError,
      isInitialLoading: isLoading && isFetching,
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isLoading,
      isLoadingError: isError && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === 'paused',
      isPlaceholderData,
      isPreviousData,
      isRefetchError: isError && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  }

  updateResult(notifyOptions) {
    const prevResult = this.currentResult;
    const nextResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify and update result if something has changed

    if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .shallowEqualObjects */ .VS)(nextResult, prevResult)) {
      return;
    }

    this.currentResult = nextResult; // Determine which callbacks to trigger

    const defaultNotifyOptions = {
      cache: true
    };

    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }

      const {
        notifyOnChangeProps
      } = this.options;

      if (notifyOnChangeProps === 'all' || !notifyOnChangeProps && !this.trackedProps.size) {
        return true;
      }

      const includedProps = new Set(notifyOnChangeProps != null ? notifyOnChangeProps : this.trackedProps);

      if (this.options.useErrorBoundary) {
        includedProps.add('error');
      }

      return Object.keys(this.currentResult).some(key => {
        const typedKey = key;
        const changed = this.currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify({ ...defaultNotifyOptions,
      ...notifyOptions
    });
  }

  updateQuery() {
    const query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    const prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  }

  onQueryUpdate(action) {
    const notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = !action.manual;
    } else if (action.type === 'error' && !(0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__/* .isCancelledError */ .DV)(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  }

  notify(notifyOptions) {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batch(() => {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        var _this$options$onSucce, _this$options, _this$options$onSettl, _this$options2;

        (_this$options$onSucce = (_this$options = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options, this.currentResult.data);
        (_this$options$onSettl = (_this$options2 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options2, this.currentResult.data, null);
      } else if (notifyOptions.onError) {
        var _this$options$onError, _this$options3, _this$options$onSettl2, _this$options4;

        (_this$options$onError = (_this$options3 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options3, this.currentResult.error);
        (_this$options$onSettl2 = (_this$options4 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options4, undefined, this.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        this.client.getQueryCache().notify({
          query: this.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  }

}

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}

function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    const value = typeof field === 'function' ? field(query) : field;
    return value === 'always' || value !== false && isStale(query, options);
  }

  return false;
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== 'error') && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
} // this function would decide if we will update the observer's 'current'
// properties after an optimistic reading via getOptimisticResult


function shouldAssignObserverCurrentProperties(observer, optimisticResult, options) {
  // it is important to keep this condition like this for three reasons:
  // 1. It will get removed in the v5
  // 2. it reads: don't update the properties if we want to keep the previous
  // data.
  // 3. The opposite condition (!options.keepPreviousData) would fallthrough
  // and will result in a bad decision
  if (options.keepPreviousData) {
    return false;
  } // this means we want to put some placeholder data when pending and queryKey
  // changed.


  if (options.placeholderData !== undefined) {
    // re-assign properties only if current data is placeholder data
    // which means that data did not arrive yet, so, if there is some cached data
    // we need to "prepare" to receive it
    return optimisticResult.isPlaceholderData;
  } // if the newly created result isn't what the observer is holding as current,
  // then we'll need to update the properties as well


  if (observer.getCurrentResult() !== optimisticResult) {
    return true;
  } // basically, just keep previous properties if nothing changed


  return false;
}


//# sourceMappingURL=queryObserver.mjs.map


/***/ }),

/***/ 29475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Removable)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);


class Removable {
  destroy() {
    this.clearGcTimeout();
  }

  scheduleGc() {
    this.clearGcTimeout();

    if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isValidTimeout */ .PN)(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }

  updateCacheTime(newCacheTime) {
    // Default to 5 minutes (Infinity for server-side) if no cache time is set
    this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isServer */ .sk ? Infinity : 5 * 60 * 1000);
  }

  clearGcTimeout() {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = undefined;
    }
  }

}


//# sourceMappingURL=removable.mjs.map


/***/ }),

/***/ 94275:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DV: () => (/* binding */ isCancelledError),
/* harmony export */   Kw: () => (/* binding */ canFetch),
/* harmony export */   Mz: () => (/* binding */ createRetryer)
/* harmony export */ });
/* unused harmony export CancelledError */
/* harmony import */ var _focusManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52893);
/* harmony import */ var _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97036);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14047);




function defaultRetryDelay(failureCount) {
  return Math.min(1000 * 2 ** failureCount, 30000);
}

function canFetch(networkMode) {
  return (networkMode != null ? networkMode : 'online') === 'online' ? _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__/* .onlineManager */ .N.isOnline() : true;
}
class CancelledError {
  constructor(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }

}
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((outerResolve, outerReject) => {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  const cancel = cancelOptions => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config.abort == null ? void 0 : config.abort();
    }
  };

  const cancelRetry = () => {
    isRetryCancelled = true;
  };

  const continueRetry = () => {
    isRetryCancelled = false;
  };

  const shouldPause = () => !_focusManager_mjs__WEBPACK_IMPORTED_MODULE_1__/* .focusManager */ .j.isFocused() || config.networkMode !== 'always' && !_onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__/* .onlineManager */ .N.isOnline();

  const resolve = value => {
    if (!isResolved) {
      isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  const reject = value => {
    if (!isResolved) {
      isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  const pause = () => {
    return new Promise(continueResolve => {
      continueFn = value => {
        const canContinue = isResolved || !shouldPause();

        if (canContinue) {
          continueResolve(value);
        }

        return canContinue;
      };

      config.onPause == null ? void 0 : config.onPause();
    }).then(() => {
      continueFn = undefined;

      if (!isResolved) {
        config.onContinue == null ? void 0 : config.onContinue();
      }
    });
  }; // Create loop function


  const run = () => {
    // Do nothing if already resolved
    if (isResolved) {
      return;
    }

    let promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }

    Promise.resolve(promiseOrValue).then(resolve).catch(error => {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (isResolved) {
        return;
      } // Do we need to retry the request?


      const retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      const retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      const delay = typeof retryDelay === 'function' ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === 'number' && failureCount < retry || typeof retry === 'function' && retry(failureCount, error);

      if (isRetryCancelled || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(failureCount, error); // Delay

      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .sleep */ .Gh)(delay) // Pause if the document is not visible or when the device is offline
      .then(() => {
        if (shouldPause()) {
          return pause();
        }

        return;
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  if (canFetch(config.networkMode)) {
    run();
  } else {
    pause().then(run);
  }

  return {
    promise,
    cancel,
    continue: () => {
      const didContinue = continueFn == null ? void 0 : continueFn();
      return didContinue ? promise : Promise.resolve();
    },
    cancelRetry,
    continueRetry
  };
}


//# sourceMappingURL=retryer.mjs.map


/***/ }),

/***/ 83730:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ Subscribable)
/* harmony export */ });
class Subscribable {
  constructor() {
    this.listeners = new Set();
    this.subscribe = this.subscribe.bind(this);
  }

  subscribe(listener) {
    const identity = {
      listener
    };
    this.listeners.add(identity);
    this.onSubscribe();
    return () => {
      this.listeners.delete(identity);
      this.onUnsubscribe();
    };
  }

  hasListeners() {
    return this.listeners.size > 0;
  }

  onSubscribe() {// Do nothing
  }

  onUnsubscribe() {// Do nothing
  }

}


//# sourceMappingURL=subscribable.mjs.map


/***/ }),

/***/ 14047:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A4: () => (/* binding */ scheduleMicrotask),
/* harmony export */   G9: () => (/* binding */ getAbortController),
/* harmony export */   Gh: () => (/* binding */ sleep),
/* harmony export */   I6: () => (/* binding */ parseFilterArgs),
/* harmony export */   Kp: () => (/* binding */ timeUntilStale),
/* harmony export */   PN: () => (/* binding */ isValidTimeout),
/* harmony export */   Rc: () => (/* binding */ replaceAt),
/* harmony export */   Rm: () => (/* binding */ hashQueryKeyByOptions),
/* harmony export */   SE: () => (/* binding */ functionalUpdate),
/* harmony export */   VS: () => (/* binding */ shallowEqualObjects),
/* harmony export */   X7: () => (/* binding */ matchMutation),
/* harmony export */   ZT: () => (/* binding */ noop),
/* harmony export */   _v: () => (/* binding */ parseQueryArgs),
/* harmony export */   _x: () => (/* binding */ matchQuery),
/* harmony export */   e5: () => (/* binding */ difference),
/* harmony export */   lV: () => (/* binding */ parseMutationArgs),
/* harmony export */   oE: () => (/* binding */ replaceData),
/* harmony export */   sk: () => (/* binding */ isServer),
/* harmony export */   to: () => (/* binding */ partialMatchKey),
/* harmony export */   yF: () => (/* binding */ hashQueryKey)
/* harmony export */ });
/* unused harmony exports isError, isPlainArray, isPlainObject, isQueryKey, parseMutationFilterArgs, partialDeepEqual, replaceEqualDeep */
// TYPES
// UTILS
const isServer = typeof window === 'undefined' || 'Deno' in window;
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function difference(array1, array2) {
  return array1.filter(x => !array2.includes(x));
}
function replaceAt(array, index, value) {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return { ...arg3,
      queryKey: arg1,
      queryFn: arg2
    };
  }

  return { ...arg2,
    queryKey: arg1
  };
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return { ...arg3,
        mutationKey: arg1,
        mutationFn: arg2
      };
    }

    return { ...arg2,
      mutationKey: arg1
    };
  }

  if (typeof arg1 === 'function') {
    return { ...arg2,
      mutationFn: arg1
    };
  }

  return { ...arg1
  };
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{ ...arg2,
    queryKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function parseMutationFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{ ...arg2,
    mutationKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function matchQuery(filters, query) {
  const {
    type = 'all',
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  if (type !== 'all') {
    const isActive = query.isActive();

    if (type === 'active' && !isActive) {
      return false;
    }

    if (type === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetchStatus !== 'undefined' && fetchStatus !== query.state.fetchStatus) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  const {
    exact,
    fetching,
    predicate,
    mutationKey
  } = filters;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 */

function hashQueryKey(queryKey) {
  return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
    result[key] = val[key];
    return result;
  }, {}) : val);
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(a, b);
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(key => !partialDeepEqual(a[key], b[key]));
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  const array = isPlainArray(a) && isPlainArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;

    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  const ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  const prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  sleep(0).then(callback);
}
function getAbortController() {
  if (typeof AbortController === 'function') {
    return new AbortController();
  }

  return;
}
function replaceData(prevData, data, options) {
  // Use prev data if an isDataEqual function is defined and returns `true`
  if (options.isDataEqual != null && options.isDataEqual(prevData, data)) {
    return prevData;
  } else if (typeof options.structuralSharing === 'function') {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    // Structurally share data between prev and new data if needed
    return replaceEqualDeep(prevData, data);
  }

  return data;
}


//# sourceMappingURL=utils.mjs.map


/***/ }),

/***/ 26245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ dehydrate),
/* harmony export */   ZB: () => (/* binding */ hydrate)
/* harmony export */ });
/* unused harmony exports defaultShouldDehydrateMutation, defaultShouldDehydrateQuery */
// TYPES
// FUNCTIONS
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
} // Most config is not dehydrated but instead meant to configure again when
// consuming the de/rehydrated data, typically with useQuery on the client.
// Sometimes it might make sense to prefetch data on the server and include
// in the html-payload, but not consume it on the initial render.


function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}

function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
  return query.state.status === 'success';
}
function dehydrate(client, options = {}) {
  const mutations = [];
  const queries = [];

  if (options.dehydrateMutations !== false) {
    const shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(mutation => {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }

  if (options.dehydrateQueries !== false) {
    const shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(query => {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }

  return {
    mutations,
    queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== 'object' || dehydratedState === null) {
    return;
  }

  const mutationCache = client.getMutationCache();
  const queryCache = client.getQueryCache(); // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

  const mutations = dehydratedState.mutations || []; // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

  const queries = dehydratedState.queries || [];
  mutations.forEach(dehydratedMutation => {
    var _options$defaultOptio;

    mutationCache.build(client, { ...(options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations),
      mutationKey: dehydratedMutation.mutationKey
    }, dehydratedMutation.state);
  });
  queries.forEach(dehydratedQuery => {
    var _options$defaultOptio2;

    const query = queryCache.get(dehydratedQuery.queryHash); // Reset fetch status to idle in the dehydrated state to avoid
    // query being stuck in fetching state upon hydration

    const dehydratedQueryState = { ...dehydratedQuery.state,
      fetchStatus: 'idle'
    }; // Do not hydrate if an existing query exists with newer data

    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQueryState.dataUpdatedAt) {
        query.setState(dehydratedQueryState);
      }

      return;
    } // Restore query


    queryCache.build(client, { ...(options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries),
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }, dehydratedQueryState);
  });
}


//# sourceMappingURL=hydration.mjs.map


/***/ })

}]);
//# sourceMappingURL=npm-ns.tanstack.query-core.js.map