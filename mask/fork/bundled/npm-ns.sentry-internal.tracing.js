"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3409],{

/***/ 68568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gE: () => (/* binding */ BrowserTracing)
});

// UNUSED EXPORTS: BROWSER_TRACING_INTEGRATION_ID, getMetaContent

// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+core@7.66.0/node_modules/@sentry/core/esm/tracing/idletransaction.js
var idletransaction = __webpack_require__(66614);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+core@7.66.0/node_modules/@sentry/core/esm/tracing/hubextensions.js + 1 modules
var hubextensions = __webpack_require__(55953);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+core@7.66.0/node_modules/@sentry/core/esm/tracing/utils.js
var utils = __webpack_require__(99077);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(3527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/tracing.js
var tracing = __webpack_require__(65238);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/browser.js
var browser = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/worldwide.js
var worldwide = __webpack_require__(81260);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/types.js


const WINDOW = worldwide/* GLOBAL_OBJ */.n2 ;



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/backgroundtab.js




/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
  if (WINDOW && WINDOW.document) {
    WINDOW.document.addEventListener('visibilitychange', () => {
      const activeTransaction = (0,utils/* getActiveTransaction */.x1)() ;
      if (WINDOW.document.hidden && activeTransaction) {
        const statusType = 'cancelled';

        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.log(
            `[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`,
          );
        // We should not set status if it is already set, this prevent important statuses like
        // error or data loss from being overwritten on transaction.
        if (!activeTransaction.status) {
          activeTransaction.setStatus(statusType);
        }
        activeTransaction.setTag('visibilitychange', 'document.hidden');
        activeTransaction.finish();
      }
    });
  } else {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
  }
}



// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/time.js
var esm_time = __webpack_require__(88395);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/bindReporter.js
const bindReporter = (
  callback,
  metric,
  reportAllChanges,
) => {
  let prevValue;
  let delta;
  return (forceReport) => {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        delta = metric.value - (prevValue || 0);

        // Report the metric if there's a non-zero delta or if no previous
        // value exists (which can happen in the case of the document becoming
        // hidden when the metric value is 0).
        // See: https://github.com/GoogleChrome/web-vitals/issues/14
        if (delta || prevValue === undefined) {
          prevValue = metric.value;
          metric.delta = delta;
          callback(metric);
        }
      }
    }
  };
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/generateUniqueID.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
const generateUniqueID = () => {
  return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/getNavigationEntry.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getNavigationEntryFromPerformanceTiming = () => {
  // eslint-disable-next-line deprecation/deprecation
  const timing = WINDOW.performance.timing;
  // eslint-disable-next-line deprecation/deprecation
  const type = WINDOW.performance.navigation.type;

  const navigationEntry = {
    entryType: 'navigation',
    startTime: 0,
    type: type == 2 ? 'back_forward' : type === 1 ? 'reload' : 'navigate',
  };

  for (const key in timing) {
    if (key !== 'navigationStart' && key !== 'toJSON') {
      // eslint-disable-next-line deprecation/deprecation
      navigationEntry[key] = Math.max((timing[key ] ) - timing.navigationStart, 0);
    }
  }
  return navigationEntry ;
};

const getNavigationEntry = () => {
  if (WINDOW.__WEB_VITALS_POLYFILL__) {
    return (
      WINDOW.performance &&
      ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) ||
        getNavigationEntryFromPerformanceTiming())
    );
  } else {
    return WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  }
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/getActivationStart.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getActivationStart = () => {
  const navEntry = getNavigationEntry();
  return (navEntry && navEntry.activationStart) || 0;
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/initMetric.js





/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const initMetric = (name, value) => {
  const navEntry = getNavigationEntry();
  let navigationType = 'navigate';

  if (navEntry) {
    if (WINDOW.document.prerendering || getActivationStart() > 0) {
      navigationType = 'prerender';
    } else {
      navigationType = navEntry.type.replace(/_/g, '-') ;
    }
  }

  return {
    name,
    value: typeof value === 'undefined' ? -1 : value,
    rating: 'good', // Will be updated if the value changes.
    delta: 0,
    entries: [],
    id: generateUniqueID(),
    navigationType,
  };
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/observe.js
/**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
const observe = (
  type,
  callback,
  opts,
) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po = new PerformanceObserver(list => {
        callback(list.getEntries() );
      });
      po.observe(
        Object.assign(
          {
            type,
            buffered: true,
          },
          opts || {},
        ) ,
      );
      return po;
    }
  } catch (e) {
    // Do nothing.
  }
  return;
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/onHidden.js


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const onHidden = (cb, once) => {
  const onHiddenOrPageHide = (event) => {
    if (event.type === 'pagehide' || WINDOW.document.visibilityState === 'hidden') {
      cb(event);
      if (once) {
        removeEventListener('visibilitychange', onHiddenOrPageHide, true);
        removeEventListener('pagehide', onHiddenOrPageHide, true);
      }
    }
  };
  addEventListener('visibilitychange', onHiddenOrPageHide, true);
  // Some browsers have buggy implementations of visibilitychange,
  // so we use pagehide in addition, just to be safe.
  addEventListener('pagehide', onHiddenOrPageHide, true);
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/getCLS.js





/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Calculates the [CLS](https://web.dev/cls/) value for the current page and
 * calls the `callback` function once the value is ready to be reported, along
 * with all `layout-shift` performance entries that were used in the metric
 * value calculation. The reported value is a `double` (corresponding to a
 * [layout shift score](https://web.dev/cls/#layout-shift-score)).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** CLS should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */
const onCLS = (onReport) => {
  const metric = initMetric('CLS', 0);
  let report;

  let sessionValue = 0;
  let sessionEntries = [];

  // const handleEntries = (entries: Metric['entries']) => {
  const handleEntries = (entries) => {
    entries.forEach(entry => {
      // Only count layout shifts without recent user input.
      if (!entry.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

        // If the entry occurred less than 1 second after the previous entry and
        // less than 5 seconds after the first entry in the session, include the
        // entry in the current session. Otherwise, start a new session.
        if (
          sessionValue &&
          sessionEntries.length !== 0 &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += entry.value;
          sessionEntries.push(entry);
        } else {
          sessionValue = entry.value;
          sessionEntries = [entry];
        }

        // If the current session value is larger than the current CLS value,
        // update CLS and the entries contributing to it.
        if (sessionValue > metric.value) {
          metric.value = sessionValue;
          metric.entries = sessionEntries;
          if (report) {
            report();
          }
        }
      }
    });
  };

  const po = observe('layout-shift', handleEntries);
  if (po) {
    report = bindReporter(onReport, metric);

    const stopListening = () => {
      handleEntries(po.takeRecords() );
      report(true);
    };

    onHidden(stopListening);

    return stopListening;
  }

  return;
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js



/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let firstHiddenTime = -1;

const initHiddenTime = () => {
  // If the document is hidden and not prerendering, assume it was always
  // hidden and the page was loaded in the background.
  return WINDOW.document.visibilityState === 'hidden' && !WINDOW.document.prerendering ? 0 : Infinity;
};

const trackChanges = () => {
  // Update the time if/when the document becomes hidden.
  onHidden(({ timeStamp }) => {
    firstHiddenTime = timeStamp;
  }, true);
};

const getVisibilityWatcher = (

) => {
  if (firstHiddenTime < 0) {
    // If the document is hidden when this code runs, assume it was hidden
    // since navigation start. This isn't a perfect heuristic, but it's the
    // best we can do until an API is available to support querying past
    // visibilityState.
    firstHiddenTime = initHiddenTime();
    trackChanges();
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    },
  };
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/getFID.js






/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Calculates the [FID](https://web.dev/fid/) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `first-input` performance entry used to determine the value. The
 * reported value is a `DOMHighResTimeStamp`.
 *
 * _**Important:** since FID is only reported after the user interacts with the
 * page, it's possible that it will not be reported for some page loads._
 */
const onFID = (onReport) => {
  const visibilityWatcher = getVisibilityWatcher();
  const metric = initMetric('FID');
  // eslint-disable-next-line prefer-const
  let report;

  const handleEntry = (entry) => {
    // Only report if the page wasn't hidden prior to the first input.
    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
      metric.value = entry.processingStart - entry.startTime;
      metric.entries.push(entry);
      report(true);
    }
  };

  const handleEntries = (entries) => {
    (entries ).forEach(handleEntry);
  };

  const po = observe('first-input', handleEntries);
  report = bindReporter(onReport, metric);

  if (po) {
    onHidden(() => {
      handleEntries(po.takeRecords() );
      po.disconnect();
    }, true);
  }
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/web-vitals/getLCP.js







/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const reportedMetricIDs = {};

/**
 * Calculates the [LCP](https://web.dev/lcp/) value for the current page and
 * calls the `callback` function once the value is ready (along with the
 * relevant `largest-contentful-paint` performance entry used to determine the
 * value). The reported value is a `DOMHighResTimeStamp`.
 */
const onLCP = (onReport) => {
  const visibilityWatcher = getVisibilityWatcher();
  const metric = initMetric('LCP');
  let report;

  const handleEntries = (entries) => {
    const lastEntry = entries[entries.length - 1] ;
    if (lastEntry) {
      // The startTime attribute returns the value of the renderTime if it is
      // not 0, and the value of the loadTime otherwise. The activationStart
      // reference is used because LCP should be relative to page activation
      // rather than navigation start if the page was prerendered.
      const value = Math.max(lastEntry.startTime - getActivationStart(), 0);

      // Only report if the page wasn't hidden prior to LCP.
      if (value < visibilityWatcher.firstHiddenTime) {
        metric.value = value;
        metric.entries = [lastEntry];
        report();
      }
    }
  };

  const po = observe('largest-contentful-paint', handleEntries);

  if (po) {
    report = bindReporter(onReport, metric);

    const stopListening = () => {
      if (!reportedMetricIDs[metric.id]) {
        handleEntries(po.takeRecords() );
        po.disconnect();
        reportedMetricIDs[metric.id] = true;
        report(true);
      }
    };

    // Stop listening after input. Note: while scrolling is an input that
    // stop LCP observation, it's unreliable since it can be programmatically
    // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
    ['keydown', 'click'].forEach(type => {
      addEventListener(type, stopListening, { once: true, capture: true });
    });

    onHidden(stopListening, true);

    return stopListening;
  }

  return;
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/metrics/utils.js
/**
 * Checks if a given value is a valid measurement value.
 */
function isMeasurementValue(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function _startChild(transaction, { startTimestamp, ...ctx }) {
  if (startTimestamp && transaction.startTimestamp > startTimestamp) {
    transaction.startTimestamp = startTimestamp;
  }

  return transaction.startChild({
    startTimestamp,
    ...ctx,
  });
}



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/metrics/index.js










/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
  return time / 1000;
}

function getBrowserPerformanceAPI() {
  // @ts-ignore we want to make sure all of these are available, even if TS is sure they are
  return WINDOW && WINDOW.addEventListener && WINDOW.performance;
}

let _performanceCursor = 0;

let _measurements = {};
let _lcpEntry;
let _clsEntry;

/**
 * Start tracking web vitals
 *
 * @returns A function that forces web vitals collection
 */
function startTrackingWebVitals() {
  const performance = getBrowserPerformanceAPI();
  if (performance && esm_time/* browserPerformanceTimeOrigin */.Z1) {
    // @ts-ignore we want to make sure all of these are available, even if TS is sure they are
    if (performance.mark) {
      WINDOW.performance.mark('sentry-tracing-init');
    }
    _trackFID();
    const clsCallback = _trackCLS();
    const lcpCallback = _trackLCP();

    return () => {
      if (clsCallback) {
        clsCallback();
      }
      if (lcpCallback) {
        lcpCallback();
      }
    };
  }

  return () => undefined;
}

/**
 * Start tracking long tasks.
 */
function startTrackingLongTasks() {
  const entryHandler = (entries) => {
    for (const entry of entries) {
      const transaction = (0,utils/* getActiveTransaction */.x1)() ;
      if (!transaction) {
        return;
      }
      const startTime = msToSec((esm_time/* browserPerformanceTimeOrigin */.Z1 ) + entry.startTime);
      const duration = msToSec(entry.duration);

      transaction.startChild({
        description: 'Main UI thread blocked',
        op: 'ui.long-task',
        origin: 'auto.ui.browser.metrics',
        startTimestamp: startTime,
        endTimestamp: startTime + duration,
      });
    }
  };

  observe('longtask', entryHandler);
}

/**
 * Start tracking interaction events.
 */
function startTrackingInteractions() {
  const entryHandler = (entries) => {
    for (const entry of entries) {
      const transaction = (0,utils/* getActiveTransaction */.x1)() ;
      if (!transaction) {
        return;
      }

      if (entry.name === 'click') {
        const startTime = msToSec((esm_time/* browserPerformanceTimeOrigin */.Z1 ) + entry.startTime);
        const duration = msToSec(entry.duration);

        transaction.startChild({
          description: (0,browser/* htmlTreeAsString */.Rt)(entry.target),
          op: `ui.interaction.${entry.name}`,
          origin: 'auto.ui.browser.metrics',
          startTimestamp: startTime,
          endTimestamp: startTime + duration,
        });
      }
    }
  };

  observe('event', entryHandler, { durationThreshold: 0 });
}

/** Starts tracking the Cumulative Layout Shift on the current page. */
function _trackCLS() {
  // See:
  // https://web.dev/evolving-cls/
  // https://web.dev/cls-web-tooling/
  return onCLS(metric => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding CLS');
    _measurements['cls'] = { value: metric.value, unit: '' };
    _clsEntry = entry ;
  });
}

/** Starts tracking the Largest Contentful Paint on the current page. */
function _trackLCP() {
  return onLCP(metric => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding LCP');
    _measurements['lcp'] = { value: metric.value, unit: 'millisecond' };
    _lcpEntry = entry ;
  });
}

/** Starts tracking the First Input Delay on the current page. */
function _trackFID() {
  onFID(metric => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }

    const timeOrigin = msToSec(esm_time/* browserPerformanceTimeOrigin */.Z1 );
    const startTime = msToSec(entry.startTime);
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding FID');
    _measurements['fid'] = { value: metric.value, unit: 'millisecond' };
    _measurements['mark.fid'] = { value: timeOrigin + startTime, unit: 'second' };
  });
}

/** Add performance related spans to a transaction */
function addPerformanceEntries(transaction) {
  const performance = getBrowserPerformanceAPI();
  if (!performance || !WINDOW.performance.getEntries || !esm_time/* browserPerformanceTimeOrigin */.Z1) {
    // Gatekeeper if performance API not available
    return;
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Tracing] Adding & adjusting spans using Performance API');
  const timeOrigin = msToSec(esm_time/* browserPerformanceTimeOrigin */.Z1);

  const performanceEntries = performance.getEntries();

  let responseStartTimestamp;
  let requestStartTimestamp;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  performanceEntries.slice(_performanceCursor).forEach((entry) => {
    const startTime = msToSec(entry.startTime);
    const duration = msToSec(entry.duration);

    if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
      return;
    }

    switch (entry.entryType) {
      case 'navigation': {
        _addNavigationSpans(transaction, entry, timeOrigin);
        responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
        requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
        break;
      }
      case 'mark':
      case 'paint':
      case 'measure': {
        _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);

        // capture web vitals
        const firstHidden = getVisibilityWatcher();
        // Only report if the page wasn't hidden prior to the web vital.
        const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;

        if (entry.name === 'first-paint' && shouldRecord) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding FP');
          _measurements['fp'] = { value: entry.startTime, unit: 'millisecond' };
        }
        if (entry.name === 'first-contentful-paint' && shouldRecord) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding FCP');
          _measurements['fcp'] = { value: entry.startTime, unit: 'millisecond' };
        }
        break;
      }
      case 'resource': {
        const resourceName = (entry.name ).replace(WINDOW.location.origin, '');
        _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
        break;
      }
      // Ignore other entry types.
    }
  });

  _performanceCursor = Math.max(performanceEntries.length - 1, 0);

  _trackNavigator(transaction);

  // Measurements are only available for pageload transactions
  if (transaction.op === 'pageload') {
    // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
    // start of the response in milliseconds
    if (typeof responseStartTimestamp === 'number') {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding TTFB');
      _measurements['ttfb'] = {
        value: (responseStartTimestamp - transaction.startTimestamp) * 1000,
        unit: 'millisecond',
      };

      if (typeof requestStartTimestamp === 'number' && requestStartTimestamp <= responseStartTimestamp) {
        // Capture the time spent making the request and receiving the first byte of the response.
        // This is the time between the start of the request and the start of the response in milliseconds.
        _measurements['ttfb.requestTime'] = {
          value: (responseStartTimestamp - requestStartTimestamp) * 1000,
          unit: 'millisecond',
        };
      }
    }

    ['fcp', 'fp', 'lcp'].forEach(name => {
      if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
        return;
      }
      // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
      // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
      // to be adjusted to be relative to transaction.startTimestamp.
      const oldValue = _measurements[name].value;
      const measurementTimestamp = timeOrigin + msToSec(oldValue);

      // normalizedValue should be in milliseconds
      const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
      const delta = normalizedValue - oldValue;

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
      _measurements[name].value = normalizedValue;
    });

    const fidMark = _measurements['mark.fid'];
    if (fidMark && _measurements['fid']) {
      // create span for FID
      _startChild(transaction, {
        description: 'first input delay',
        endTimestamp: fidMark.value + msToSec(_measurements['fid'].value),
        op: 'ui.action',
        origin: 'auto.ui.browser.metrics',
        startTimestamp: fidMark.value,
      });

      // Delete mark.fid as we don't want it to be part of final payload
      delete _measurements['mark.fid'];
    }

    // If FCP is not recorded we should not record the cls value
    // according to the new definition of CLS.
    if (!('fcp' in _measurements)) {
      delete _measurements.cls;
    }

    Object.keys(_measurements).forEach(measurementName => {
      transaction.setMeasurement(
        measurementName,
        _measurements[measurementName].value,
        _measurements[measurementName].unit,
      );
    });

    _tagMetricInfo(transaction);
  }

  _lcpEntry = undefined;
  _clsEntry = undefined;
  _measurements = {};
}

/** Create measure related spans */
function _addMeasureSpans(
  transaction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry,
  startTime,
  duration,
  timeOrigin,
) {
  const measureStartTimestamp = timeOrigin + startTime;
  const measureEndTimestamp = measureStartTimestamp + duration;

  _startChild(transaction, {
    description: entry.name ,
    endTimestamp: measureEndTimestamp,
    op: entry.entryType ,
    origin: 'auto.resource.browser.metrics',
    startTimestamp: measureStartTimestamp,
  });

  return measureStartTimestamp;
}

/** Instrument navigation entries */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _addNavigationSpans(transaction, entry, timeOrigin) {
  ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach(event => {
    _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
  });
  _addPerformanceNavigationTiming(transaction, entry, 'secureConnection', timeOrigin, 'TLS/SSL', 'connectEnd');
  _addPerformanceNavigationTiming(transaction, entry, 'fetch', timeOrigin, 'cache', 'domainLookupStart');
  _addPerformanceNavigationTiming(transaction, entry, 'domainLookup', timeOrigin, 'DNS');
  _addRequest(transaction, entry, timeOrigin);
}

/** Create performance navigation related spans */
function _addPerformanceNavigationTiming(
  transaction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry,
  event,
  timeOrigin,
  description,
  eventEnd,
) {
  const end = eventEnd ? (entry[eventEnd] ) : (entry[`${event}End`] );
  const start = entry[`${event}Start`] ;
  if (!start || !end) {
    return;
  }
  _startChild(transaction, {
    op: 'browser',
    origin: 'auto.browser.browser.metrics',
    description: description || event,
    startTimestamp: timeOrigin + msToSec(start),
    endTimestamp: timeOrigin + msToSec(end),
  });
}

/** Create request and response related spans */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _addRequest(transaction, entry, timeOrigin) {
  _startChild(transaction, {
    op: 'browser',
    origin: 'auto.browser.browser.metrics',
    description: 'request',
    startTimestamp: timeOrigin + msToSec(entry.requestStart ),
    endTimestamp: timeOrigin + msToSec(entry.responseEnd ),
  });

  _startChild(transaction, {
    op: 'browser',
    origin: 'auto.browser.browser.metrics',
    description: 'response',
    startTimestamp: timeOrigin + msToSec(entry.responseStart ),
    endTimestamp: timeOrigin + msToSec(entry.responseEnd ),
  });
}

/** Create resource-related spans */
function _addResourceSpans(
  transaction,
  entry,
  resourceName,
  startTime,
  duration,
  timeOrigin,
) {
  // we already instrument based on fetch and xhr, so we don't need to
  // duplicate spans here.
  if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = {};
  if ('transferSize' in entry) {
    data['http.response_transfer_size'] = entry.transferSize;
  }
  if ('encodedBodySize' in entry) {
    data['http.response_content_length'] = entry.encodedBodySize;
  }
  if ('decodedBodySize' in entry) {
    data['http.decoded_response_content_length'] = entry.decodedBodySize;
  }
  if ('renderBlockingStatus' in entry) {
    data['resource.render_blocking_status'] = entry.renderBlockingStatus;
  }

  const startTimestamp = timeOrigin + startTime;
  const endTimestamp = startTimestamp + duration;

  _startChild(transaction, {
    description: resourceName,
    endTimestamp,
    op: entry.initiatorType ? `resource.${entry.initiatorType}` : 'resource.other',
    origin: 'auto.resource.browser.metrics',
    startTimestamp,
    data,
  });
}

/**
 * Capture the information of the user agent.
 */
function _trackNavigator(transaction) {
  const navigator = WINDOW.navigator ;
  if (!navigator) {
    return;
  }

  // track network connectivity
  const connection = navigator.connection;
  if (connection) {
    if (connection.effectiveType) {
      transaction.setTag('effectiveConnectionType', connection.effectiveType);
    }

    if (connection.type) {
      transaction.setTag('connectionType', connection.type);
    }

    if (isMeasurementValue(connection.rtt)) {
      _measurements['connection.rtt'] = { value: connection.rtt, unit: 'millisecond' };
    }
  }

  if (isMeasurementValue(navigator.deviceMemory)) {
    transaction.setTag('deviceMemory', `${navigator.deviceMemory} GB`);
  }

  if (isMeasurementValue(navigator.hardwareConcurrency)) {
    transaction.setTag('hardwareConcurrency', String(navigator.hardwareConcurrency));
  }
}

/** Add LCP / CLS data to transaction to allow debugging */
function _tagMetricInfo(transaction) {
  if (_lcpEntry) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding LCP Data');

    // Capture Properties of the LCP element that contributes to the LCP.

    if (_lcpEntry.element) {
      transaction.setTag('lcp.element', (0,browser/* htmlTreeAsString */.Rt)(_lcpEntry.element));
    }

    if (_lcpEntry.id) {
      transaction.setTag('lcp.id', _lcpEntry.id);
    }

    if (_lcpEntry.url) {
      // Trim URL to the first 200 characters.
      transaction.setTag('lcp.url', _lcpEntry.url.trim().slice(0, 200));
    }

    transaction.setTag('lcp.size', _lcpEntry.size);
  }

  // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
  if (_clsEntry && _clsEntry.sources) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding CLS Data');
    _clsEntry.sources.forEach((source, index) =>
      transaction.setTag(`cls.source.${index + 1}`, (0,browser/* htmlTreeAsString */.Rt)(source.node)),
    );
  }
}



// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+core@7.66.0/node_modules/@sentry/core/esm/utils/hasTracingEnabled.js
var hasTracingEnabled = __webpack_require__(16964);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+core@7.66.0/node_modules/@sentry/core/esm/hub.js + 2 modules
var esm_hub = __webpack_require__(2542);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+core@7.66.0/node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
var tracing_dynamicSamplingContext = __webpack_require__(11075);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/instrument.js + 2 modules
var instrument = __webpack_require__(53773);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(82717);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/baggage.js
var baggage = __webpack_require__(59817);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sentry+utils@7.66.0/node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(61100);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/request.js



/* eslint-disable max-lines */

const DEFAULT_TRACE_PROPAGATION_TARGETS = ['localhost', /^\/(?!\/)/];

/** Options for Request Instrumentation */

const defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  enableHTTPTimings: true,
  // TODO (v8): Remove this property
  tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
  tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS,
};

/** Registers span creators for xhr and fetch requests  */
function instrumentOutgoingRequests(_options) {
  const {
    traceFetch,
    traceXHR,
    // eslint-disable-next-line deprecation/deprecation
    tracePropagationTargets,
    // eslint-disable-next-line deprecation/deprecation
    tracingOrigins,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
  } = {
    traceFetch: defaultRequestInstrumentationOptions.traceFetch,
    traceXHR: defaultRequestInstrumentationOptions.traceXHR,
    ..._options,
  };

  const shouldCreateSpan =
    typeof shouldCreateSpanForRequest === 'function' ? shouldCreateSpanForRequest : (_) => true;

  // TODO(v8) Remove tracingOrigins here
  // The only reason we're passing it in here is because this instrumentOutgoingRequests function is publicly exported
  // and we don't want to break the API. We can remove it in v8.
  const shouldAttachHeadersWithTargets = (url) =>
    shouldAttachHeaders(url, tracePropagationTargets || tracingOrigins);

  const spans = {};

  if (traceFetch) {
    (0,instrument/* addInstrumentationHandler */.oq)('fetch', (handlerData) => {
      const createdSpan = fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (enableHTTPTimings && createdSpan) {
        addHTTPTimings(createdSpan);
      }
    });
  }

  if (traceXHR) {
    (0,instrument/* addInstrumentationHandler */.oq)('xhr', (handlerData) => {
      const createdSpan = xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (enableHTTPTimings && createdSpan) {
        addHTTPTimings(createdSpan);
      }
    });
  }
}

function isPerformanceResourceTiming(entry) {
  return (
    entry.entryType === 'resource' &&
    'initiatorType' in entry &&
    typeof (entry ).nextHopProtocol === 'string' &&
    (entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest')
  );
}

/**
 * Creates a temporary observer to listen to the next fetch/xhr resourcing timings,
 * so that when timings hit their per-browser limit they don't need to be removed.
 *
 * @param span A span that has yet to be finished, must contain `url` on data.
 */
function addHTTPTimings(span) {
  const url = span.data.url;
  const observer = new PerformanceObserver(list => {
    const entries = list.getEntries();
    entries.forEach(entry => {
      if (isPerformanceResourceTiming(entry) && entry.name.endsWith(url)) {
        const spanData = resourceTimingEntryToSpanData(entry);
        spanData.forEach(data => span.setData(...data));
        observer.disconnect();
      }
    });
  });
  observer.observe({
    entryTypes: ['resource'],
  });
}

/**
 * Converts ALPN protocol ids to name and version.
 *
 * (https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
 * @param nextHopProtocol PerformanceResourceTiming.nextHopProtocol
 */
function extractNetworkProtocol(nextHopProtocol) {
  let name = 'unknown';
  let version = 'unknown';
  let _name = '';
  for (const char of nextHopProtocol) {
    // http/1.1 etc.
    if (char === '/') {
      [name, version] = nextHopProtocol.split('/');
      break;
    }
    // h2, h3 etc.
    if (!isNaN(Number(char))) {
      name = _name === 'h' ? 'http' : _name;
      version = nextHopProtocol.split(_name)[1];
      break;
    }
    _name += char;
  }
  if (_name === nextHopProtocol) {
    // webrtc, ftp, etc.
    name = _name;
  }
  return { name, version };
}

function getAbsoluteTime(time = 0) {
  return ((esm_time/* browserPerformanceTimeOrigin */.Z1 || performance.timeOrigin) + time) / 1000;
}

function resourceTimingEntryToSpanData(resourceTiming) {
  const { name, version } = extractNetworkProtocol(resourceTiming.nextHopProtocol);

  const timingSpanData = [];

  timingSpanData.push(['network.protocol.version', version], ['network.protocol.name', name]);

  if (!esm_time/* browserPerformanceTimeOrigin */.Z1) {
    return timingSpanData;
  }
  return [
    ...timingSpanData,
    ['http.request.redirect_start', getAbsoluteTime(resourceTiming.redirectStart)],
    ['http.request.fetch_start', getAbsoluteTime(resourceTiming.fetchStart)],
    ['http.request.domain_lookup_start', getAbsoluteTime(resourceTiming.domainLookupStart)],
    ['http.request.domain_lookup_end', getAbsoluteTime(resourceTiming.domainLookupEnd)],
    ['http.request.connect_start', getAbsoluteTime(resourceTiming.connectStart)],
    ['http.request.secure_connection_start', getAbsoluteTime(resourceTiming.secureConnectionStart)],
    ['http.request.connection_end', getAbsoluteTime(resourceTiming.connectEnd)],
    ['http.request.request_start', getAbsoluteTime(resourceTiming.requestStart)],
    ['http.request.response_start', getAbsoluteTime(resourceTiming.responseStart)],
    ['http.request.response_end', getAbsoluteTime(resourceTiming.responseEnd)],
  ];
}

/**
 * A function that determines whether to attach tracing headers to a request.
 * This was extracted from `instrumentOutgoingRequests` to make it easier to test shouldAttachHeaders.
 * We only export this fuction for testing purposes.
 */
function shouldAttachHeaders(url, tracePropagationTargets) {
  return (0,string/* stringMatchesSomePattern */.U0)(url, tracePropagationTargets || DEFAULT_TRACE_PROPAGATION_TARGETS);
}

/**
 * Create and track fetch request spans
 *
 * @returns Span if a span was created, otherwise void.
 */
function fetchCallback(
  handlerData,
  shouldCreateSpan,
  shouldAttachHeaders,
  spans,
) {
  if (!(0,hasTracingEnabled/* hasTracingEnabled */.z)() || !handlerData.fetchData) {
    return undefined;
  }

  const shouldCreateSpanResult = shouldCreateSpan(handlerData.fetchData.url);

  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;

    const span = spans[spanId];
    if (span) {
      if (handlerData.response) {
        // TODO (kmclb) remove this once types PR goes through
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        span.setHttpStatus(handlerData.response.status);

        const contentLength =
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          handlerData.response && handlerData.response.headers && handlerData.response.headers.get('content-length');

        const contentLengthNum = parseInt(contentLength);
        if (contentLengthNum > 0) {
          span.setData('http.response_content_length', contentLengthNum);
        }
      } else if (handlerData.error) {
        span.setStatus('internal_error');
      }
      span.finish();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return undefined;
  }

  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  const scope = hub.getScope();
  const client = hub.getClient();
  const parentSpan = scope.getSpan();

  const { method, url } = handlerData.fetchData;

  const span =
    shouldCreateSpanResult && parentSpan
      ? parentSpan.startChild({
          data: {
            url,
            type: 'fetch',
            'http.method': method,
          },
          description: `${method} ${url}`,
          op: 'http.client',
          origin: 'auto.http.browser',
        })
      : undefined;

  if (span) {
    handlerData.fetchData.__span = span.spanId;
    spans[span.spanId] = span;
  }

  if (shouldAttachHeaders(handlerData.fetchData.url) && client) {
    const request = handlerData.args[0];

    // In case the user hasn't set the second argument of a fetch call we default it to `{}`.
    handlerData.args[1] = handlerData.args[1] || {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options = handlerData.args[1];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    options.headers = addTracingHeadersToFetchRequest(request, client, scope, options, span);
  }

  return span;
}

/**
 * Adds sentry-trace and baggage headers to the various forms of fetch headers
 */
function addTracingHeadersToFetchRequest(
  request, // unknown is actually type Request but we can't export DOM types from this package,
  client,
  scope,
  options

,
  requestSpan,
) {
  const span = requestSpan || scope.getSpan();

  const transaction = span && span.transaction;

  const { traceId, sampled, dsc } = scope.getPropagationContext();

  const sentryTraceHeader = span ? span.toTraceparent() : (0,tracing/* generateSentryTraceHeader */.$p)(traceId, undefined, sampled);
  const dynamicSamplingContext = transaction
    ? transaction.getDynamicSamplingContext()
    : dsc
    ? dsc
    : (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(traceId, client, scope);

  const sentryBaggageHeader = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);

  const headers =
    typeof Request !== 'undefined' && (0,is/* isInstanceOf */.V9)(request, Request) ? (request ).headers : options.headers;

  if (!headers) {
    return { 'sentry-trace': sentryTraceHeader, baggage: sentryBaggageHeader };
  } else if (typeof Headers !== 'undefined' && (0,is/* isInstanceOf */.V9)(headers, Headers)) {
    const newHeaders = new Headers(headers );

    newHeaders.append('sentry-trace', sentryTraceHeader);

    if (sentryBaggageHeader) {
      // If the same header is appended multiple times the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.append(baggage/* BAGGAGE_HEADER_NAME */.bU, sentryBaggageHeader);
    }

    return newHeaders ;
  } else if (Array.isArray(headers)) {
    const newHeaders = [...headers, ['sentry-trace', sentryTraceHeader]];

    if (sentryBaggageHeader) {
      // If there are multiple entries with the same key, the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.push([baggage/* BAGGAGE_HEADER_NAME */.bU, sentryBaggageHeader]);
    }

    return newHeaders ;
  } else {
    const existingBaggageHeader = 'baggage' in headers ? headers.baggage : undefined;
    const newBaggageHeaders = [];

    if (Array.isArray(existingBaggageHeader)) {
      newBaggageHeaders.push(...existingBaggageHeader);
    } else if (existingBaggageHeader) {
      newBaggageHeaders.push(existingBaggageHeader);
    }

    if (sentryBaggageHeader) {
      newBaggageHeaders.push(sentryBaggageHeader);
    }

    return {
      ...(headers ),
      'sentry-trace': sentryTraceHeader,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(',') : undefined,
    };
  }
}

/**
 * Create and track xhr request spans
 *
 * @returns Span if a span was created, otherwise void.
 */
// eslint-disable-next-line complexity
function xhrCallback(
  handlerData,
  shouldCreateSpan,
  shouldAttachHeaders,
  spans,
) {
  const xhr = handlerData.xhr;
  const sentryXhrData = xhr && xhr[instrument/* SENTRY_XHR_DATA_KEY */.xU];

  if (!(0,hasTracingEnabled/* hasTracingEnabled */.z)() || (xhr && xhr.__sentry_own_request__) || !xhr || !sentryXhrData) {
    return undefined;
  }

  const shouldCreateSpanResult = shouldCreateSpan(sentryXhrData.url);

  // check first if the request has finished and is tracked by an existing span which should now end
  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = xhr.__sentry_xhr_span_id__;
    if (!spanId) return;

    const span = spans[spanId];
    if (span) {
      span.setHttpStatus(sentryXhrData.status_code);
      span.finish();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return undefined;
  }

  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  const scope = hub.getScope();
  const parentSpan = scope.getSpan();

  const span =
    shouldCreateSpanResult && parentSpan
      ? parentSpan.startChild({
          data: {
            ...sentryXhrData.data,
            type: 'xhr',
            'http.method': sentryXhrData.method,
            url: sentryXhrData.url,
          },
          description: `${sentryXhrData.method} ${sentryXhrData.url}`,
          op: 'http.client',
          origin: 'auto.http.browser',
        })
      : undefined;

  if (span) {
    xhr.__sentry_xhr_span_id__ = span.spanId;
    spans[xhr.__sentry_xhr_span_id__] = span;
  }

  if (xhr.setRequestHeader && shouldAttachHeaders(sentryXhrData.url)) {
    if (span) {
      const transaction = span && span.transaction;
      const dynamicSamplingContext = transaction && transaction.getDynamicSamplingContext();
      const sentryBaggageHeader = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);
      setHeaderOnXhr(xhr, span.toTraceparent(), sentryBaggageHeader);
    } else {
      const client = hub.getClient();
      const { traceId, sampled, dsc } = scope.getPropagationContext();
      const sentryTraceHeader = (0,tracing/* generateSentryTraceHeader */.$p)(traceId, undefined, sampled);
      const dynamicSamplingContext =
        dsc || (client ? (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(traceId, client, scope) : undefined);
      const sentryBaggageHeader = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);
      setHeaderOnXhr(xhr, sentryTraceHeader, sentryBaggageHeader);
    }
  }

  return span;
}

function setHeaderOnXhr(
  xhr,
  sentryTraceHeader,
  sentryBaggageHeader,
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    xhr.setRequestHeader('sentry-trace', sentryTraceHeader);
    if (sentryBaggageHeader) {
      // From MDN: "If this method is called several times with the same header, the values are merged into one single request header."
      // We can therefore simply set a baggage header without checking what was there before
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      xhr.setRequestHeader(baggage/* BAGGAGE_HEADER_NAME */.bU, sentryBaggageHeader);
    }
  } catch (_) {
    // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
  }
}



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/router.js



/**
 * Default function implementing pageload and navigation transactions
 */
function instrumentRoutingWithDefaults(
  customStartTransaction,
  startTransactionOnPageLoad = true,
  startTransactionOnLocationChange = true,
) {
  if (!WINDOW || !WINDOW.location) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Could not initialize routing instrumentation due to invalid location');
    return;
  }

  let startingUrl = WINDOW.location.href;

  let activeTransaction;
  if (startTransactionOnPageLoad) {
    activeTransaction = customStartTransaction({
      name: WINDOW.location.pathname,
      // pageload should always start at timeOrigin (and needs to be in s, not ms)
      startTimestamp: esm_time/* browserPerformanceTimeOrigin */.Z1 ? esm_time/* browserPerformanceTimeOrigin */.Z1 / 1000 : undefined,
      op: 'pageload',
      origin: 'auto.pageload.browser',
      metadata: { source: 'url' },
    });
  }

  if (startTransactionOnLocationChange) {
    (0,instrument/* addInstrumentationHandler */.oq)('history', ({ to, from }) => {
      /**
       * This early return is there to account for some cases where a navigation transaction starts right after
       * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
       * create an uneccessary navigation transaction.
       *
       * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
       * only be caused in certain development environments where the usage of a hot module reloader is causing
       * errors.
       */
      if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
        startingUrl = undefined;
        return;
      }

      if (from !== to) {
        startingUrl = undefined;
        if (activeTransaction) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
          // If there's an open transaction on the scope, we need to finish it before creating an new one.
          activeTransaction.finish();
        }
        activeTransaction = customStartTransaction({
          name: WINDOW.location.pathname,
          op: 'navigation',
          origin: 'auto.navigation.browser',
          metadata: { source: 'url' },
        });
      }
    });
  }
}



;// CONCATENATED MODULE: ./node_modules/.pnpm/@sentry-internal+tracing@7.66.0/node_modules/@sentry-internal/tracing/esm/browser/browsertracing.js








const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';

/** Options for Browser Tracing integration */

const DEFAULT_BROWSER_TRACING_OPTIONS = {
  ...idletransaction/* TRACING_DEFAULTS */.AT,
  markBackgroundTransactions: true,
  routingInstrumentation: instrumentRoutingWithDefaults,
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true,
  enableLongTask: true,
  _experiments: {},
  ...defaultRequestInstrumentationOptions,
};

/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */
class BrowserTracing  {
  // This class currently doesn't have a static `id` field like the other integration classes, because it prevented
  // @sentry/tracing from being treeshaken. Tree shakers do not like static fields, because they behave like side effects.
  // TODO: Come up with a better plan, than using static fields on integration classes, and use that plan on all
  // integrations.

  /** Browser Tracing integration options */

  /**
   * @inheritDoc
   */

   constructor(_options) {
    this.name = BROWSER_TRACING_INTEGRATION_ID;
    this._hasSetTracePropagationTargets = false;

    (0,hubextensions/* addTracingExtensions */.T)();

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
      this._hasSetTracePropagationTargets = !!(
        _options &&
        // eslint-disable-next-line deprecation/deprecation
        (_options.tracePropagationTargets || _options.tracingOrigins)
      );
    }

    this.options = {
      ...DEFAULT_BROWSER_TRACING_OPTIONS,
      ..._options,
    };

    // Special case: enableLongTask can be set in _experiments
    // TODO (v8): Remove this in v8
    if (this.options._experiments.enableLongTask !== undefined) {
      this.options.enableLongTask = this.options._experiments.enableLongTask;
    }

    // TODO (v8): remove this block after tracingOrigins is removed
    // Set tracePropagationTargets to tracingOrigins if specified by the user
    // In case both are specified, tracePropagationTargets takes precedence
    // eslint-disable-next-line deprecation/deprecation
    if (_options && !_options.tracePropagationTargets && _options.tracingOrigins) {
      // eslint-disable-next-line deprecation/deprecation
      this.options.tracePropagationTargets = _options.tracingOrigins;
    }

    this._collectWebVitals = startTrackingWebVitals();
    if (this.options.enableLongTask) {
      startTrackingLongTasks();
    }
    if (this.options._experiments.enableInteractions) {
      startTrackingInteractions();
    }
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    this._getCurrentHub = getCurrentHub;
    const hub = getCurrentHub();
    const client = hub.getClient();
    const clientOptions = client && client.getOptions();

    const {
      routingInstrumentation: instrumentRouting,
      startTransactionOnLocationChange,
      startTransactionOnPageLoad,
      markBackgroundTransactions,
      traceFetch,
      traceXHR,
      shouldCreateSpanForRequest,
      enableHTTPTimings,
      _experiments,
    } = this.options;

    const clientOptionsTracePropagationTargets = clientOptions && clientOptions.tracePropagationTargets;
    // There are three ways to configure tracePropagationTargets:
    // 1. via top level client option `tracePropagationTargets`
    // 2. via BrowserTracing option `tracePropagationTargets`
    // 3. via BrowserTracing option `tracingOrigins` (deprecated)
    //
    // To avoid confusion, favour top level client option `tracePropagationTargets`, and fallback to
    // BrowserTracing option `tracePropagationTargets` and then `tracingOrigins` (deprecated).
    // This is done as it minimizes bundle size (we don't have to have undefined checks).
    //
    // If both 1 and either one of 2 or 3 are set (from above), we log out a warning.
    // eslint-disable-next-line deprecation/deprecation
    const tracePropagationTargets = clientOptionsTracePropagationTargets || this.options.tracePropagationTargets;
    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && clientOptionsTracePropagationTargets) {
      logger/* logger */.kg.warn(
        '[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.',
      );
    }

    instrumentRouting(
      (context) => {
        const transaction = this._createRouteTransaction(context);

        this.options._experiments.onStartRouteTransaction &&
          this.options._experiments.onStartRouteTransaction(transaction, context, getCurrentHub);

        return transaction;
      },
      startTransactionOnPageLoad,
      startTransactionOnLocationChange,
    );

    if (markBackgroundTransactions) {
      registerBackgroundTabDetection();
    }

    if (_experiments.enableInteractions) {
      this._registerInteractionListener();
    }

    instrumentOutgoingRequests({
      traceFetch,
      traceXHR,
      tracePropagationTargets,
      shouldCreateSpanForRequest,
      enableHTTPTimings,
    });
  }

  /** Create routing idle transaction. */
   _createRouteTransaction(context) {
    if (!this._getCurrentHub) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
      return undefined;
    }

    const hub = this._getCurrentHub();

    const { beforeNavigate, idleTimeout, finalTimeout, heartbeatInterval } = this.options;

    const isPageloadTransaction = context.op === 'pageload';

    const sentryTrace = isPageloadTransaction ? getMetaContent('sentry-trace') : '';
    const baggage = isPageloadTransaction ? getMetaContent('baggage') : '';
    const { traceparentData, dynamicSamplingContext, propagationContext } = (0,tracing/* tracingContextFromHeaders */.KA)(
      sentryTrace,
      baggage,
    );

    const expandedContext = {
      ...context,
      ...traceparentData,
      metadata: {
        ...context.metadata,
        dynamicSamplingContext: traceparentData && !dynamicSamplingContext ? {} : dynamicSamplingContext,
      },
      trimEnd: true,
    };

    const modifiedContext = typeof beforeNavigate === 'function' ? beforeNavigate(expandedContext) : expandedContext;

    // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
    // from being sent to Sentry).
    const finalContext = modifiedContext === undefined ? { ...expandedContext, sampled: false } : modifiedContext;

    // If `beforeNavigate` set a custom name, record that fact
    finalContext.metadata =
      finalContext.name !== expandedContext.name
        ? { ...finalContext.metadata, source: 'custom' }
        : finalContext.metadata;

    this._latestRouteName = finalContext.name;
    this._latestRouteSource = finalContext.metadata && finalContext.metadata.source;

    if (finalContext.sampled === false) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`[Tracing] Starting ${finalContext.op} transaction on scope`);

    const { location } = WINDOW;

    const idleTransaction = (0,hubextensions/* startIdleTransaction */.l)(
      hub,
      finalContext,
      idleTimeout,
      finalTimeout,
      true,
      { location }, // for use in the tracesSampler
      heartbeatInterval,
    );

    const scope = hub.getScope();

    // If it's a pageload and there is a meta tag set
    // use the traceparentData as the propagation context
    if (isPageloadTransaction && traceparentData) {
      scope.setPropagationContext(propagationContext);
    } else {
      // Navigation transactions should set a new propagation context based on the
      // created idle transaction.
      scope.setPropagationContext({
        traceId: idleTransaction.traceId,
        spanId: idleTransaction.spanId,
        parentSpanId: idleTransaction.parentSpanId,
        sampled: idleTransaction.sampled,
      });
    }

    idleTransaction.registerBeforeFinishCallback(transaction => {
      this._collectWebVitals();
      addPerformanceEntries(transaction);
    });

    return idleTransaction ;
  }

  /** Start listener for interaction transactions */
   _registerInteractionListener() {
    let inflightInteractionTransaction;
    const registerInteractionTransaction = () => {
      const { idleTimeout, finalTimeout, heartbeatInterval } = this.options;
      const op = 'ui.action.click';

      const currentTransaction = (0,utils/* getActiveTransaction */.x1)();
      if (currentTransaction && currentTransaction.op && ['navigation', 'pageload'].includes(currentTransaction.op)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.warn(
            `[Tracing] Did not create ${op} transaction because a pageload or navigation transaction is in progress.`,
          );
        return undefined;
      }

      if (inflightInteractionTransaction) {
        inflightInteractionTransaction.setFinishReason('interactionInterrupted');
        inflightInteractionTransaction.finish();
        inflightInteractionTransaction = undefined;
      }

      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn(`[Tracing] Did not create ${op} transaction because _getCurrentHub is invalid.`);
        return undefined;
      }

      if (!this._latestRouteName) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
        return undefined;
      }

      const hub = this._getCurrentHub();
      const { location } = WINDOW;

      const context = {
        name: this._latestRouteName,
        op,
        trimEnd: true,
        metadata: {
          source: this._latestRouteSource || 'url',
        },
      };

      inflightInteractionTransaction = (0,hubextensions/* startIdleTransaction */.l)(
        hub,
        context,
        idleTimeout,
        finalTimeout,
        true,
        { location }, // for use in the tracesSampler
        heartbeatInterval,
      );
    };

    ['click'].forEach(type => {
      addEventListener(type, registerInteractionTransaction, { once: false, capture: true });
    });
  }
}

/** Returns the value of a meta tag */
function getMetaContent(metaName) {
  // Can't specify generic to `getDomElement` because tracing can be used
  // in a variety of environments, have to disable `no-unsafe-member-access`
  // as a result.
  const metaTag = (0,browser/* getDomElement */.qT)(`meta[name=${metaName}]`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return metaTag ? metaTag.getAttribute('content') : undefined;
}




/***/ }),

/***/ 58773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ addExtensionMethods)
/* harmony export */ });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2542);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55953);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52625);
/* module decorator */ module = __webpack_require__.hmd(module);



/**
 * @private
 */
function _autoloadDatabaseIntegrations() {
  const carrier = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_0__/* .getMainCarrier */ .cu)();
  if (!carrier.__SENTRY__) {
    return;
  }

  const packageToIntegrationMapping = {
    mongodb() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/mongo')

;
      return new integration.Mongo();
    },
    mongoose() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/mongo')

;
      return new integration.Mongo();
    },
    mysql() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/mysql')

;
      return new integration.Mysql();
    },
    pg() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/postgres')

;
      return new integration.Postgres();
    },
  };

  const mappedPackages = Object.keys(packageToIntegrationMapping)
    .filter(moduleName => !!(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .loadModule */ .$y)(moduleName))
    .map(pkg => {
      try {
        return packageToIntegrationMapping[pkg]();
      } catch (e) {
        return undefined;
      }
    })
    .filter(p => p) ;

  if (mappedPackages.length > 0) {
    carrier.__SENTRY__.integrations = [...(carrier.__SENTRY__.integrations || []), ...mappedPackages];
  }
}

/**
 * This patches the global object and injects the Tracing extensions methods
 */
function addExtensionMethods() {
  (0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .addTracingExtensions */ .T)();

  // Detect and automatically load specified integrations.
  if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .isNodeEnv */ .KV)()) {
    _autoloadDatabaseIntegrations();
  }
}




/***/ }),

/***/ 9058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Apollo)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32047);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52625);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3527);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70551);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89575);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61100);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




/** Tracing integration for Apollo */
class Apollo  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Apollo';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(
    options = {
      useNestjs: false,
    },
  ) {
    this.name = Apollo.id;
    this._useNest = !!options.useNestjs;
  }

  /** @inheritdoc */
   loadDependency() {
    if (this._useNest) {
      this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('@nestjs/graphql');
    } else {
      this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('apollo-server-core');
    }

    return this._module;
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Apollo Integration is skipped because of instrumenter configuration.');
      return;
    }

    if (this._useNest) {
      const pkg = this.loadDependency();

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Apollo-NestJS Integration was unable to require @nestjs/graphql package.');
        return;
      }

      /**
       * Iterate over resolvers of NestJS ResolversExplorerService before schemas are constructed.
       */
      (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(
        pkg.GraphQLFactory.prototype,
        'mergeWithSchema',
        function (orig) {
          return function (

            ...args
          ) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(this.resolversExplorerService, 'explore', function (orig) {
              return function () {
                const resolvers = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .arrayify */ .lE)(orig.call(this));

                const instrumentedResolvers = instrumentResolvers(resolvers, getCurrentHub);

                return instrumentedResolvers;
              };
            });

            return orig.call(this, ...args);
          };
        },
      );
    } else {
      const pkg = this.loadDependency();

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Apollo Integration was unable to require apollo-server-core package.');
        return;
      }

      /**
       * Iterate over resolvers of the ApolloServer instance before schemas are constructed.
       */
      (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(pkg.ApolloServerBase.prototype, 'constructSchema', function (orig) {
        return function (

) {
          if (!this.config.resolvers) {
            if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
              if (this.config.schema) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.' +
                    'If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead.',
                );
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn();
              } else if (this.config.modules) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.',
                );
              }

              _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Skipping tracing as no resolvers found on the `ApolloServer` instance.');
            }

            return orig.call(this);
          }

          const resolvers = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .arrayify */ .lE)(this.config.resolvers);

          this.config.resolvers = instrumentResolvers(resolvers, getCurrentHub);

          return orig.call(this);
        };
      });
    }
  }
}Apollo.__initStatic();

function instrumentResolvers(resolvers, getCurrentHub) {
  return resolvers.map(model => {
    Object.keys(model).forEach(resolverGroupName => {
      Object.keys(model[resolverGroupName]).forEach(resolverName => {
        if (typeof model[resolverGroupName][resolverName] !== 'function') {
          return;
        }

        wrapResolver(model, resolverGroupName, resolverName, getCurrentHub);
      });
    });

    return model;
  });
}

/**
 * Wrap a single resolver which can be a parent of other resolvers and/or db operations.
 */
function wrapResolver(
  model,
  resolverGroupName,
  resolverName,
  getCurrentHub,
) {
  (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(model[resolverGroupName], resolverName, function (orig) {
    return function ( ...args) {
      const scope = getCurrentHub().getScope();
      const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);
      const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
        description: `${resolverGroupName}.${resolverName}`,
        op: 'graphql.resolve',
        origin: 'auto.graphql.apollo',
      })]);

      const rv = orig.call(this, ...args);

      if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .isThenable */ .J8)(rv)) {
        return rv.then((res) => {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
          return res;
        });
      }

      (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);

      return rv;
    };
  });
}




/***/ }),

/***/ 33655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Express)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32047);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3527);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62143);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7188);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61100);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */
class Express  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Express';}

  /**
   * @inheritDoc
   */

  /**
   * Express App instance
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Express.id;
    this._router = options.router || options.app;
    this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (!this._router) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.error('ExpressIntegration is missing an Express instance');
      return;
    }

    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.log('Express Integration is skipped because of instrumenter configuration.');
      return;
    }

    instrumentMiddlewares(this._router, this._methods);
    instrumentRouter(this._router );
  }
}Express.__initStatic();

/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
function wrap(fn, method) {
  const arity = fn.length;

  switch (arity) {
    case 2: {
      return function ( req, res) {
        const transaction = res.__sentry_transaction;
        if (transaction) {
          const span = transaction.startChild({
            description: fn.name,
            op: `middleware.express.${method}`,
            origin: 'auto.middleware.express',
          });
          res.once('finish', () => {
            span.finish();
          });
        }
        return fn.call(this, req, res);
      };
    }
    case 3: {
      return function (

        req,
        res,
        next,
      ) {
        const transaction = res.__sentry_transaction;
        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([transaction, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
          description: fn.name,
          op: `middleware.express.${method}`,
          origin: 'auto.middleware.express',
        })]);
        fn.call(this, req, res, function ( ...args) {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([span, 'optionalAccess', _4 => _4.finish, 'call', _5 => _5()]);
          next.call(this, ...args);
        });
      };
    }
    case 4: {
      return function (

        err,
        req,
        res,
        next,
      ) {
        const transaction = res.__sentry_transaction;
        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([transaction, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
          description: fn.name,
          op: `middleware.express.${method}`,
          origin: 'auto.middleware.express',
        })]);
        fn.call(this, err, req, res, function ( ...args) {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
          next.call(this, ...args);
        });
      };
    }
    default: {
      throw new Error(`Express middleware takes 2-4 arguments. Got: ${arity}`);
    }
  }
}

/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapMiddlewareArgs(args, method) {
  return args.map((arg) => {
    if (typeof arg === 'function') {
      return wrap(arg, method);
    }

    if (Array.isArray(arg)) {
      return arg.map((a) => {
        if (typeof a === 'function') {
          return wrap(a, method);
        }
        return a;
      });
    }

    return arg;
  });
}

/**
 * Patches original router to utilize our tracing functionality
 */
function patchMiddleware(router, method) {
  const originalCallback = router[method];

  router[method] = function (...args) {
    return originalCallback.call(this, ...wrapMiddlewareArgs(args, method));
  };

  return router;
}

/**
 * Patches original router methods
 */
function instrumentMiddlewares(router, methods = []) {
  methods.forEach((method) => patchMiddleware(router, method));
}

/**
 * Patches the prototype of Express.Router to accumulate the resolved route
 * if a layer instance's `match` function was called and it returned a successful match.
 *
 * @see https://github.com/expressjs/express/blob/master/lib/router/index.js
 *
 * @param appOrRouter the router instance which can either be an app (i.e. top-level) or a (nested) router.
 */
function instrumentRouter(appOrRouter) {
  // This is how we can distinguish between app and routers
  const isApp = 'settings' in appOrRouter;

  // In case the app's top-level router hasn't been initialized yet, we have to do it now
  if (isApp && appOrRouter._router === undefined && appOrRouter.lazyrouter) {
    appOrRouter.lazyrouter();
  }

  const router = isApp ? appOrRouter._router : appOrRouter;

  if (!router) {
    /*
    If we end up here, this means likely that this integration is used with Express 3 or Express 5.
    For now, we don't support these versions (3 is very old and 5 is still in beta). To support Express 5,
    we'd need to make more changes to the routing instrumentation because the router is no longer part of
    the Express core package but maintained in its own package. The new router has different function
    signatures and works slightly differently, demanding more changes than just taking the router from
    `app.router` instead of `app._router`.
    @see https://github.com/pillarjs/router

    TODO: Proper Express 5 support
    */
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.debug('Cannot instrument router for URL Parameterization (did not find a valid router).');
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.debug('Routing instrumentation is currently only supported in Express 4.');
    return;
  }

  const routerProto = Object.getPrototypeOf(router) ;

  const originalProcessParams = routerProto.process_params;
  routerProto.process_params = function process_params(
    layer,
    called,
    req,
    res,
    done,
  ) {
    // Base case: We're in the first part of the URL (thus we start with the root '/')
    if (!req._reconstructedRoute) {
      req._reconstructedRoute = '';
    }

    // If the layer's partial route has params, is a regex or an array, the route is stored in layer.route.
    const { layerRoutePath, isRegex, isArray, numExtraSegments } = getLayerRoutePathInfo(layer);

    if (layerRoutePath || isRegex || isArray) {
      req._hasParameters = true;
    }

    // Otherwise, the hardcoded path (i.e. a partial route without params) is stored in layer.path
    const partialRoute = layerRoutePath || layer.path || '';

    // Normalize the partial route so that it doesn't contain leading or trailing slashes
    // and exclude empty or '*' wildcard routes.
    // The exclusion of '*' routes is our best effort to not "pollute" the transaction name
    // with interim handlers (e.g. ones that check authentication or do other middleware stuff).
    // We want to end up with the parameterized URL of the incoming request without any extraneous path segments.
    const finalPartialRoute = partialRoute
      .split('/')
      .filter(segment => segment.length > 0 && (isRegex || isArray || !segment.includes('*')))
      .join('/');

    // If we found a valid partial URL, we append it to the reconstructed route
    if (finalPartialRoute && finalPartialRoute.length > 0) {
      // If the partial route is from a regex route, we append a '/' to close the regex
      req._reconstructedRoute += `/${finalPartialRoute}${isRegex ? '/' : ''}`;
    }

    // Now we check if we are in the "last" part of the route. We determine this by comparing the
    // number of URL segments from the original URL to that of our reconstructed parameterized URL.
    // If we've reached our final destination, we update the transaction name.
    const urlLength = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(req.originalUrl || '') + numExtraSegments;
    const routeLength = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(req._reconstructedRoute);

    if (urlLength === routeLength) {
      if (!req._hasParameters) {
        if (req._reconstructedRoute !== req.originalUrl) {
          req._reconstructedRoute = req.originalUrl ? (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .stripUrlQueryAndFragment */ .rt)(req.originalUrl) : req.originalUrl;
        }
      }

      const transaction = res.__sentry_transaction;
      if (transaction && transaction.metadata.source !== 'custom') {
        // If the request URL is '/' or empty, the reconstructed route will be empty.
        // Therefore, we fall back to setting the final route to '/' in this case.
        const finalRoute = req._reconstructedRoute || '/';

        transaction.setName(...(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .extractPathForTransaction */ .oA)(req, { path: true, method: true, customRoute: finalRoute }));
      }
    }

    return originalProcessParams.call(this, layer, called, req, res, done);
  };
}

/**
 * Extracts and stringifies the layer's route which can either be a string with parameters (`users/:id`),
 * a RegEx (`/test/`) or an array of strings and regexes (`['/path1', /\/path[2-5]/, /path/:id]`). Additionally
 * returns extra information about the route, such as if the route is defined as regex or as an array.
 *
 * @param layer the layer to extract the stringified route from
 *
 * @returns an object containing the stringified route, a flag determining if the route was a regex
 *          and the number of extra segments to the matched path that are additionally in the route,
 *          if the route was an array (defaults to 0).
 */
function getLayerRoutePathInfo(layer) {
  const lrp = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([layer, 'access', _10 => _10.route, 'optionalAccess', _11 => _11.path]);

  const isRegex = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isRegExp */ .Kj)(lrp);
  const isArray = Array.isArray(lrp);

  if (!lrp) {
    return { isRegex, isArray, numExtraSegments: 0 };
  }

  const numExtraSegments = isArray
    ? Math.max(getNumberOfArrayUrlSegments(lrp ) - (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(layer.path || ''), 0)
    : 0;

  const layerRoutePath = getLayerRoutePathString(isArray, lrp);

  return { layerRoutePath, isRegex, isArray, numExtraSegments };
}

/**
 * Returns the number of URL segments in an array of routes
 *
 * Example: ['/api/test', /\/api\/post[0-9]/, '/users/:id/details`] -> 7
 */
function getNumberOfArrayUrlSegments(routesArray) {
  return routesArray.reduce((accNumSegments, currentRoute) => {
    // array members can be a RegEx -> convert them toString
    return accNumSegments + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(currentRoute.toString());
  }, 0);
}

/**
 * Extracts and returns the stringified version of the layers route path
 * Handles route arrays (by joining the paths together) as well as RegExp and normal
 * string values (in the latter case the toString conversion is technically unnecessary but
 * it doesn't hurt us either).
 */
function getLayerRoutePathString(isArray, lrp) {
  if (isArray) {
    return (lrp ).map(r => r.toString()).join(',');
  }
  return lrp && lrp.toString();
}




/***/ }),

/***/ 86219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ GraphQL)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32047);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52625);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3527);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70551);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61100);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




/** Tracing integration for graphql package */
class GraphQL  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'GraphQL';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = GraphQL.id;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('graphql/execution/execute.js'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('GraphQL Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('GraphQL Integration was unable to require graphql/execution package.');
      return;
    }

    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(pkg, 'execute', function (orig) {
      return function ( ...args) {
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: 'execute',
          op: 'graphql.execute',
          origin: 'auto.graphql.graphql',
        })]);

        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _6 => _6.setSpan, 'call', _7 => _7(span)]);

        const rv = orig.call(this, ...args);

        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isThenable */ .J8)(rv)) {
          return rv.then((res) => {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _10 => _10.setSpan, 'call', _11 => _11(parentSpan)]);

            return res;
          });
        }

        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _14 => _14.setSpan, 'call', _15 => _15(parentSpan)]);
        return rv;
      };
    });
  }
}GraphQL.__initStatic();




/***/ }),

/***/ 62600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Mongo)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32047);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52625);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3527);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70551);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61100);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




// This allows us to use the same array for both defaults options and the type itself.
// (note `as const` at the end to make it a union of string literal types (i.e. "a" | "b" | ... )
// and not just a string[])

const OPERATIONS = [
  'aggregate', // aggregate(pipeline, options, callback)
  'bulkWrite', // bulkWrite(operations, options, callback)
  'countDocuments', // countDocuments(query, options, callback)
  'createIndex', // createIndex(fieldOrSpec, options, callback)
  'createIndexes', // createIndexes(indexSpecs, options, callback)
  'deleteMany', // deleteMany(filter, options, callback)
  'deleteOne', // deleteOne(filter, options, callback)
  'distinct', // distinct(key, query, options, callback)
  'drop', // drop(options, callback)
  'dropIndex', // dropIndex(indexName, options, callback)
  'dropIndexes', // dropIndexes(options, callback)
  'estimatedDocumentCount', // estimatedDocumentCount(options, callback)
  'find', // find(query, options, callback)
  'findOne', // findOne(query, options, callback)
  'findOneAndDelete', // findOneAndDelete(filter, options, callback)
  'findOneAndReplace', // findOneAndReplace(filter, replacement, options, callback)
  'findOneAndUpdate', // findOneAndUpdate(filter, update, options, callback)
  'indexes', // indexes(options, callback)
  'indexExists', // indexExists(indexes, options, callback)
  'indexInformation', // indexInformation(options, callback)
  'initializeOrderedBulkOp', // initializeOrderedBulkOp(options, callback)
  'insertMany', // insertMany(docs, options, callback)
  'insertOne', // insertOne(doc, options, callback)
  'isCapped', // isCapped(options, callback)
  'mapReduce', // mapReduce(map, reduce, options, callback)
  'options', // options(options, callback)
  'parallelCollectionScan', // parallelCollectionScan(options, callback)
  'rename', // rename(newName, options, callback)
  'replaceOne', // replaceOne(filter, doc, options, callback)
  'stats', // stats(options, callback)
  'updateMany', // updateMany(filter, update, options, callback)
  'updateOne', // updateOne(filter, update, options, callback)
] ;

// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
const OPERATION_SIGNATURES

 = {
  // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
  // see https://github.com/getsentry/sentry-javascript/pull/3102
  bulkWrite: ['operations'],
  countDocuments: ['query'],
  createIndex: ['fieldOrSpec'],
  createIndexes: ['indexSpecs'],
  deleteMany: ['filter'],
  deleteOne: ['filter'],
  distinct: ['key', 'query'],
  dropIndex: ['indexName'],
  find: ['query'],
  findOne: ['query'],
  findOneAndDelete: ['filter'],
  findOneAndReplace: ['filter', 'replacement'],
  findOneAndUpdate: ['filter', 'update'],
  indexExists: ['indexes'],
  insertMany: ['docs'],
  insertOne: ['doc'],
  mapReduce: ['map', 'reduce'],
  rename: ['newName'],
  replaceOne: ['filter', 'doc'],
  updateMany: ['filter', 'update'],
  updateOne: ['filter', 'update'],
};

function isCursor(maybeCursor) {
  return maybeCursor && typeof maybeCursor === 'object' && maybeCursor.once && typeof maybeCursor.once === 'function';
}

/** Tracing integration for mongo package */
class Mongo  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Mongo';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Mongo.id;
    this._operations = Array.isArray(options.operations) ? options.operations : (OPERATIONS );
    this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
    this._useMongoose = !!options.useMongoose;
  }

  /** @inheritdoc */
   loadDependency() {
    const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)(moduleName));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Mongo Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error(`Mongo Integration was unable to require \`${moduleName}\` package.`);
      return;
    }

    this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
  }

  /**
   * Patches original collection methods
   */
   _instrumentOperations(collection, operations, getCurrentHub) {
    operations.forEach((operation) => this._patchOperation(collection, operation, getCurrentHub));
  }

  /**
   * Patches original collection to utilize our tracing functionality
   */
   _patchOperation(collection, operation, getCurrentHub) {
    if (!(operation in collection.prototype)) return;

    const getSpanContext = this._getSpanContextFromOperationArguments.bind(this);

    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(collection.prototype, operation, function (orig) {
      return function ( ...args) {
        const lastArg = args[args.length - 1];
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

        // Check if the operation was passed a callback. (mapReduce requires a different check, as
        // its (non-callback) arguments can also be functions.)
        if (typeof lastArg !== 'function' || (operation === 'mapReduce' && args.length === 2)) {
          const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5(getSpanContext(this, operation, args))]);
          const maybePromiseOrCursor = orig.call(this, ...args);

          if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isThenable */ .J8)(maybePromiseOrCursor)) {
            return maybePromiseOrCursor.then((res) => {
              (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
              return res;
            });
          }
          // If the operation returns a Cursor
          // we need to attach a listener to it to finish the span when the cursor is closed.
          else if (isCursor(maybePromiseOrCursor)) {
            const cursor = maybePromiseOrCursor ;

            try {
              cursor.once('close', () => {
                (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
              });
            } catch (e) {
              // If the cursor is already closed, `once` will throw an error. In that case, we can
              // finish the span immediately.
              (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
            }

            return cursor;
          } else {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
            return maybePromiseOrCursor;
          }
        }

        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _14 => _14.startChild, 'call', _15 => _15(getSpanContext(this, operation, args.slice(0, -1)))]);

        return orig.call(this, ...args.slice(0, -1), function (err, result) {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _16 => _16.finish, 'call', _17 => _17()]);
          lastArg(err, result);
        });
      };
    });
  }

  /**
   * Form a SpanContext based on the user input to a given operation.
   */
   _getSpanContextFromOperationArguments(
    collection,
    operation,
    args,
  ) {
    const data = {
      'db.system': 'mongodb',
      'db.name': collection.dbName,
      'db.operation': operation,
      'db.mongodb.collection': collection.collectionName,
    };
    const spanContext = {
      op: 'db',
      // TODO v8: Use `${collection.collectionName}.${operation}`
      origin: 'auto.db.mongo',
      description: operation,
      data,
    };

    // If the operation takes no arguments besides `options` and `callback`, or if argument
    // collection is disabled for this operation, just return early.
    const signature = OPERATION_SIGNATURES[operation];
    const shouldDescribe = Array.isArray(this._describeOperations)
      ? this._describeOperations.includes(operation)
      : this._describeOperations;

    if (!signature || !shouldDescribe) {
      return spanContext;
    }

    try {
      // Special case for `mapReduce`, as the only one accepting functions as arguments.
      if (operation === 'mapReduce') {
        const [map, reduce] = args ;
        data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
        data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
      } else {
        for (let i = 0; i < signature.length; i++) {
          data[`db.mongodb.${signature[i]}`] = JSON.stringify(args[i]);
        }
      }
    } catch (_oO) {
      // no-empty
    }

    return spanContext;
  }
}Mongo.__initStatic();




/***/ }),

/***/ 97402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ Mysql)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32047);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52625);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3527);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70551);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




/** Tracing integration for node-mysql package */
class Mysql  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Mysql';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = Mysql.id;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('mysql/lib/Connection.js'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Mysql Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Mysql Integration was unable to require `mysql` package.');
      return;
    }

    let mySqlConfig = undefined;

    try {
      pkg.prototype.connect = new Proxy(pkg.prototype.connect, {
        apply(wrappingTarget, thisArg, args) {
          if (!mySqlConfig) {
            mySqlConfig = thisArg.config;
          }
          return wrappingTarget.apply(thisArg, args);
        },
      });
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Mysql Integration was unable to instrument `mysql` config.');
    }

    function spanDataFromConfig() {
      if (!mySqlConfig) {
        return {};
      }
      return {
        'server.address': mySqlConfig.host,
        'server.port': mySqlConfig.port,
        'db.user': mySqlConfig.user,
      };
    }

    // The original function will have one of these signatures:
    //    function (callback) => void
    //    function (options, callback) => void
    //    function (options, values, callback) => void
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(pkg, 'createQuery', function (orig) {
      return function ( options, values, callback) {
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);
        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: typeof options === 'string' ? options : (options ).sql,
          op: 'db',
          origin: 'auto.db.mysql',
          data: {
            ...spanDataFromConfig(),
            'db.system': 'mysql',
          },
        })]);

        if (typeof callback === 'function') {
          return orig.call(this, options, values, function (err, result, fields) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
            callback(err, result, fields);
          });
        }

        if (typeof values === 'function') {
          return orig.call(this, options, function (err, result, fields) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            values(err, result, fields);
          });
        }

        return orig.call(this, options, values, callback);
      };
    });
  }
}Mysql.__initStatic();




/***/ }),

/***/ 4314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Postgres)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32047);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52625);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3527);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70551);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61100);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




/** Tracing integration for node-postgres package */
class Postgres  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Postgres';}

  /**
   * @inheritDoc
   */

   constructor(options = {}) {
    this.name = Postgres.id;
    this._usePgNative = !!options.usePgNative;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('pg'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Postgres Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Postgres Integration was unable to require `pg` package.');
      return;
    }

    if (this._usePgNative && !(0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([pkg, 'access', _2 => _2.native, 'optionalAccess', _3 => _3.Client])) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error("Postgres Integration was unable to access 'pg-native' bindings.");
      return;
    }

    const { Client } = this._usePgNative ? pkg.native : pkg;

    /**
     * function (query, callback) => void
     * function (query, params, callback) => void
     * function (query) => Promise
     * function (query, params) => Promise
     * function (pg.Cursor) => pg.Cursor
     */
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .fill */ .hl)(Client.prototype, 'query', function (orig) {
      return function ( config, values, callback) {
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([scope, 'optionalAccess', _4 => _4.getSpan, 'call', _5 => _5()]);

        const data = {
          'db.system': 'postgresql',
        };

        try {
          if (this.database) {
            data['db.name'] = this.database;
          }
          if (this.host) {
            data['server.address'] = this.host;
          }
          if (this.port) {
            data['server.port'] = this.port;
          }
          if (this.user) {
            data['db.user'] = this.user;
          }
        } catch (e) {
          // ignore
        }

        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
          description: typeof config === 'string' ? config : (config ).text,
          op: 'db',
          origin: 'auto.db.postgres',
          data,
        })]);

        if (typeof callback === 'function') {
          return orig.call(this, config, values, function (err, result) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            callback(err, result);
          });
        }

        if (typeof values === 'function') {
          return orig.call(this, config, function (err, result) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
            values(err, result);
          });
        }

        const rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);

        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isThenable */ .J8)(rv)) {
          return rv.then((res) => {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
            return res;
          });
        }

        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _14 => _14.finish, 'call', _15 => _15()]);
        return rv;
      };
    });
  }
}Postgres.__initStatic();




/***/ }),

/***/ 92371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Prisma)
/* harmony export */ });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2542);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37017);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70551);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3527);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53754);




function isValidPrismaClient(possibleClient) {
  return !!possibleClient && !!(possibleClient )['$use'];
}

/** Tracing integration for @prisma/client package */
class Prisma  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Prisma';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Prisma.id;

    // We instrument the PrismaClient inside the constructor and not inside `setupOnce` because in some cases of server-side
    // bundling (Next.js) multiple Prisma clients can be instantiated, even though users don't intend to. When instrumenting
    // in setupOnce we can only ever instrument one client.
    // https://github.com/getsentry/sentry-javascript/issues/7216#issuecomment-1602375012
    // In the future we might explore providing a dedicated PrismaClient middleware instead of this hack.
    if (isValidPrismaClient(options.client) && !options.client._sentryInstrumented) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .addNonEnumerableProperty */ .xp)(options.client , '_sentryInstrumented', true);

      const clientData = {};
      try {
        const engineConfig = (options.client )._engineConfig;
        if (engineConfig) {
          const { activeProvider, clientVersion } = engineConfig;
          if (activeProvider) {
            clientData['db.system'] = activeProvider;
          }
          if (clientVersion) {
            clientData['db.prisma.version'] = clientVersion;
          }
        }
      } catch (e) {
        // ignore
      }

      options.client.$use((params, next) => {
        if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentHub */ .Gd)) {
          return next(params);
        }

        const action = params.action;
        const model = params.model;

        return (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .trace */ .g4)(
          {
            name: model ? `${model} ${action}` : action,
            op: 'db.sql.prisma',
            origin: 'auto.db.prisma',
            data: { ...clientData, 'db.operation': action },
          },
          () => next(params),
        );
      });
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .kg.warn('Unsupported Prisma client provided to PrismaIntegration. Provided client:', options.client);
    }
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    // Noop - here for backwards compatibility
  }
} Prisma.__initStatic();




/***/ }),

/***/ 53754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ shouldDisableAutoInstrumentation)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32047);


/**
 * Check if Sentry auto-instrumentation should be disabled.
 *
 * @param getCurrentHub A method to fetch the current hub
 * @returns boolean
 */
function shouldDisableAutoInstrumentation(getCurrentHub) {
  const clientOptions = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__/* ._optionalChain */ .x)([getCurrentHub, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getOptions, 'call', _5 => _5()]);
  const instrumenter = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__/* ._optionalChain */ .x)([clientOptions, 'optionalAccess', _6 => _6.instrumenter]) || 'sentry';

  return instrumenter !== 'sentry';
}




/***/ })

}]);
//# sourceMappingURL=npm-ns.sentry-internal.tracing.js.map