"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9141],{

/***/ 94245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a0: () => (/* reexport */ makeStyles_createMakeStyles),
  F4: () => (/* reexport */ emotion_react_browser_esm/* keyframes */.F4)
});

// UNUSED EXPORTS: GlobalStyles, TssCacheProvider, createMakeAndWithStyles, createTss, createWithStyles, tss, useStyles

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/polyfills/Object.fromEntries.js
/* eslint-disable @typescript-eslint/no-explicit-any */
const objectFromEntries = !Object
    .fromEntries
    ? (entries) => {
        if (!entries || !entries[Symbol.iterator]) {
            throw new Error("Object.fromEntries() requires a single iterable argument");
        }
        const o = {};
        Object.keys(entries).forEach(key => {
            const [k, v] = entries[key];
            o[k] = v;
        });
        return o;
    }
    : Object.fromEntries;

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/objectKeys.js
/** Object.keys() with types */
function objectKeys(o) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(o);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/assert.js
/** https://docs.tsafe.dev/assert */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/typeGuard.js
/* eslint-disable @typescript-eslint/no-explicit-any */
/** https://docs.tsafe.dev/typeguard */
function typeGuard(_value, isMatched) {
    return isMatched;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/classnames.js


/** Copy pasted from
 * https://github.com/emotion-js/emotion/blob/23f43ab9f24d44219b0b007a00f4ac681fe8712e/packages/react/src/class-names.js#L17-L63
 **/
const classnames = (args) => {
    const len = args.length;
    let i = 0;
    let cls = "";
    for (; i < len; i++) {
        const arg = args[i];
        if (arg == null)
            continue;
        let toAdd;
        switch (typeof arg) {
            case "boolean":
                break;
            case "object": {
                if (Array.isArray(arg)) {
                    toAdd = classnames(arg);
                }
                else {
                    assert(!typeGuard(arg, false));
                    if (false) {}
                    toAdd = "";
                    for (const k in arg) {
                        if (arg[k] && k) {
                            toAdd && (toAdd += " ");
                            toAdd += k;
                        }
                    }
                }
                break;
            }
            default: {
                toAdd = arg;
            }
        }
        if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
        }
    }
    return cls;
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+serialize@1.1.0/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var emotion_serialize_browser_esm = __webpack_require__(75145);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+utils@1.2.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var emotion_utils_browser_esm = __webpack_require__(39935);
;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/useGuaranteedMemo.js

/** Like react's useMemo but with guarantee that the fn
 * won't be invoked again if deps hasn't change */
function useGuaranteedMemo(fn, deps) {
    const ref = (0,react.useRef)();
    if (!ref.current ||
        deps.length !== ref.current.prevDeps.length ||
        ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
        ref.current = {
            "v": fn(),
            "prevDeps": [...deps]
        };
    }
    return ref.current.v;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/types.js
function matchCSSObject(arg) {
    return (arg instanceof Object &&
        !("styles" in arg) &&
        !("length" in arg) &&
        !("__emotion_styles" in arg));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/cssAndCx.js





const { createCssAndCx } = (() => {
    function merge(registered, css, className) {
        const registeredStyles = [];
        const rawClassName = (0,emotion_utils_browser_esm/* getRegisteredStyles */.fp)(registered, registeredStyles, className);
        if (registeredStyles.length < 2) {
            return className;
        }
        return rawClassName + css(registeredStyles);
    }
    function createCssAndCx(params) {
        const { cache } = params;
        const css = (...args) => {
            const serialized = (0,emotion_serialize_browser_esm/* serializeStyles */.O)(args, cache.registered);
            (0,emotion_utils_browser_esm/* insertStyles */.My)(cache, serialized, false);
            const className = `${cache.key}-${serialized.name}`;
            scope: {
                const arg = args[0];
                if (!matchCSSObject(arg)) {
                    break scope;
                }
                increaseSpecificityToTakePrecedenceOverMediaQueries.saveClassNameCSSObjectMapping(cache, className, arg);
            }
            return className;
        };
        const cx = (...args) => {
            const className = classnames(args);
            const feat27FixedClassnames = increaseSpecificityToTakePrecedenceOverMediaQueries.fixClassName(cache, className, css);
            return merge(cache.registered, css, feat27FixedClassnames);
            //return merge(cache.registered, css, className);
        };
        return { css, cx };
    }
    return { createCssAndCx };
})();
function createUseCssAndCx(params) {
    const { useCache } = params;
    function useCssAndCx() {
        const cache = useCache();
        const { css, cx } = useGuaranteedMemo(() => createCssAndCx({ cache }), [cache]);
        return { css, cx };
    }
    return { useCssAndCx };
}
// https://github.com/garronej/tss-react/issues/27
const increaseSpecificityToTakePrecedenceOverMediaQueries = (() => {
    const cssObjectMapByCache = new WeakMap();
    return {
        "saveClassNameCSSObjectMapping": (cache, className, cssObject) => {
            let cssObjectMap = cssObjectMapByCache.get(cache);
            if (cssObjectMap === undefined) {
                cssObjectMap = new Map();
                cssObjectMapByCache.set(cache, cssObjectMap);
            }
            cssObjectMap.set(className, cssObject);
        },
        "fixClassName": (() => {
            function fix(classNameCSSObjects) {
                let isThereAnyMediaQueriesInPreviousClasses = false;
                return classNameCSSObjects.map(([className, cssObject]) => {
                    if (cssObject === undefined) {
                        return className;
                    }
                    let out;
                    if (!isThereAnyMediaQueriesInPreviousClasses) {
                        out = className;
                        for (const key in cssObject) {
                            if (key.startsWith("@media")) {
                                isThereAnyMediaQueriesInPreviousClasses = true;
                                break;
                            }
                        }
                    }
                    else {
                        out = {
                            "&&": cssObject
                        };
                    }
                    return out;
                });
            }
            return (cache, className, css) => {
                const cssObjectMap = cssObjectMapByCache.get(cache);
                return classnames(fix(className
                    .split(" ")
                    .map(className => [
                    className,
                    cssObjectMap === null || cssObjectMap === void 0 ? void 0 : cssObjectMap.get(className)
                ])).map(classNameOrCSSObject => typeof classNameOrCSSObject === "string"
                    ? classNameOrCSSObject
                    : css(classNameOrCSSObject)));
            };
        })()
    };
})();

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/getDependencyArrayRef.js
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * useEffect(
 *    ()=> { ... },
 *    [ { "foo": "bar" } ]
 * )
 * => The callback will be invoked every render.
 * because { "foo": "bar" } is a new instance every render.
 *
 * useEffect(
 *    ()=> { ... },
 *    [ getDependencyArrayRef({ "foo": "bar" }) ]
 * );
 * => The callback will only be invoked once.
 *
 * The optimization will be enabled only if obj is
 * of the form Record<string, string | number | undefined | null>
 * otherwise the object is returned (the function is the identity function).
 */
function getDependencyArrayRef(obj) {
    if (!(obj instanceof Object) || typeof obj === "function") {
        return obj;
    }
    const arr = [];
    for (const key in obj) {
        const value = obj[key];
        const typeofValue = typeof value;
        if (!(typeofValue === "string" ||
            (typeofValue === "number" && !isNaN(value)) ||
            typeofValue === "boolean" ||
            value === undefined ||
            value === null)) {
            return obj;
        }
        arr.push(`${key}:${typeofValue}_${value}`);
    }
    return "xSqLiJdLMd9s" + arr.join("|");
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/mergeClasses.js
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

function mergeClasses(classesFromUseStyles, classesOverrides, cx) {
    //NOTE: We use this test to be resilient in case classesOverrides is not of the expected type.
    if (!(classesOverrides instanceof Object)) {
        return classesFromUseStyles;
    }
    const out = {};
    objectKeys(classesFromUseStyles).forEach(ruleName => (out[ruleName] = cx(classesFromUseStyles[ruleName], classesOverrides[ruleName])));
    objectKeys(classesOverrides).forEach(ruleName => {
        if (ruleName in classesFromUseStyles) {
            return;
        }
        const className = classesOverrides[ruleName];
        //...Same here, that why we don't do className === undefined
        if (typeof className !== "string") {
            return;
        }
        out[ruleName] = className;
    });
    return out;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/mui/themeStyleOverridesPlugin.js



const useMuiThemeStyleOverridesPlugin = ({ classes, theme, muiStyleOverridesParams, css, cx, name }) => {
    var _a, _b;
    require_named: {
        // NOTE: Hack for backwards compatibility with the makeStyles API.
        if (name === "makeStyle no name") {
            name = undefined;
            break require_named;
        }
        if (muiStyleOverridesParams !== undefined && name === undefined) {
            throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')");
        }
    }
    let styleOverrides = undefined;
    try {
        styleOverrides =
            name === undefined
                ? undefined
                : ((_b = (_a = theme.components) === null || _a === void 0 ? void 0 : _a[name /*example*/]) === null || _b === void 0 ? void 0 : _b.styleOverrides) || undefined;
        // eslint-disable-next-line no-empty
    }
    catch (_c) { }
    const classesFromThemeStyleOverrides = (0,react.useMemo)(() => {
        if (styleOverrides === undefined) {
            return undefined;
        }
        const themeClasses = {};
        for (const ruleName in styleOverrides) {
            const cssObjectOrGetCssObject = styleOverrides[ruleName];
            if (!(cssObjectOrGetCssObject instanceof Object)) {
                continue;
            }
            themeClasses[ruleName] = css(typeof cssObjectOrGetCssObject === "function"
                ? cssObjectOrGetCssObject(Object.assign({ theme, "ownerState": muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.ownerState }, muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.props))
                : cssObjectOrGetCssObject);
        }
        return themeClasses;
    }, [
        styleOverrides,
        getDependencyArrayRef(muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.props),
        getDependencyArrayRef(muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.ownerState),
        css
    ]);
    classes = (0,react.useMemo)(() => mergeClasses(classes, classesFromThemeStyleOverrides, cx), [classes, classesFromThemeStyleOverrides, cx]);
    return { classes };
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js
var emotion_element_c39617d8_browser_esm = __webpack_require__(11020);
;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/makeStyles.js
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */











let counter = 0;
function makeStyles_createMakeStyles(params) {
    const { useTheme, cache: cacheProvidedAtInception } = params;
    const { useCache } = createUseCache({ cacheProvidedAtInception });
    const { useCssAndCx } = createUseCssAndCx({ useCache });
    /** returns useStyle. */
    function makeStyles(params) {
        const { name: nameOrWrappedName, uniqId = `${counter++}` } = params !== null && params !== void 0 ? params : {};
        const name = typeof nameOrWrappedName !== "object"
            ? nameOrWrappedName
            : Object.keys(nameOrWrappedName)[0];
        return function (cssObjectByRuleNameOrGetCssObjectByRuleName) {
            const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName ===
                "function"
                ? cssObjectByRuleNameOrGetCssObjectByRuleName
                : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
            return function useStyles(params, muiStyleOverridesParams) {
                const theme = useTheme();
                let { css, cx } = useCssAndCx();
                const cache = useCache();
                let classes = (0,react.useMemo)(() => {
                    const refClassesCache = {};
                    const refClasses = typeof Proxy !== "undefined" &&
                        new Proxy({}, {
                            "get": (_target, propertyKey) => {
                                if (typeof propertyKey === "symbol") {
                                    assert(false);
                                }
                                return (refClassesCache[propertyKey] = `${cache.key}-${uniqId}${name !== undefined ? `-${name}` : ""}-${propertyKey}-ref`);
                            }
                        });
                    const cssObjectByRuleName = getCssObjectByRuleName(theme, params, refClasses || {});
                    const classes = objectFromEntries(objectKeys(cssObjectByRuleName).map(ruleName => {
                        const cssObject = cssObjectByRuleName[ruleName];
                        if (!cssObject.label) {
                            cssObject.label = `${name !== undefined ? `${name}-` : ""}${ruleName}`;
                        }
                        return [
                            ruleName,
                            `${css(cssObject)}${typeGuard(ruleName, ruleName in refClassesCache)
                                ? ` ${refClassesCache[ruleName]}`
                                : ""}`
                        ];
                    }));
                    objectKeys(refClassesCache).forEach(ruleName => {
                        if (ruleName in classes) {
                            return;
                        }
                        classes[ruleName] =
                            refClassesCache[ruleName];
                    });
                    return classes;
                }, [cache, css, cx, theme, getDependencyArrayRef(params)]);
                {
                    const propsClasses = muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.props.classes;
                    classes = (0,react.useMemo)(() => mergeClasses(classes, propsClasses, cx), [classes, getDependencyArrayRef(propsClasses), cx]);
                }
                {
                    const pluginResultWrap = useMuiThemeStyleOverridesPlugin({
                        classes,
                        css,
                        cx,
                        "name": name !== null && name !== void 0 ? name : "makeStyle no name",
                        "idOfUseStyles": uniqId,
                        muiStyleOverridesParams,
                        // NOTE: If it's not a Mui Theme the plugin is resilient, it will not crash
                        "theme": theme
                    });
                    if (pluginResultWrap.classes !== undefined) {
                        classes = pluginResultWrap.classes;
                    }
                    if (pluginResultWrap.css !== undefined) {
                        css = pluginResultWrap.css;
                    }
                    if (pluginResultWrap.cx !== undefined) {
                        cx = pluginResultWrap.cx;
                    }
                }
                return {
                    classes,
                    theme,
                    css,
                    cx
                };
            };
        };
    }
    function useStyles() {
        const theme = useTheme();
        const { css, cx } = useCssAndCx();
        return { theme, css, cx };
    }
    return { makeStyles, useStyles };
}
const reactContext = (0,react.createContext)(undefined);
function TssCacheProvider(props) {
    const { children, value } = props;
    return (React.createElement(reactContext.Provider, { value: value }, children));
}
const { createUseCache } = (() => {
    function useCacheProvidedByProvider() {
        const cacheExplicitlyProvidedForTss = (0,react.useContext)(reactContext);
        return cacheExplicitlyProvidedForTss;
    }
    function createUseCache(params) {
        const { cacheProvidedAtInception } = params;
        function useCache() {
            var _a;
            const contextualCache = (0,emotion_element_c39617d8_browser_esm._)();
            const cacheExplicitlyProvidedForTss = useCacheProvidedByProvider();
            const cacheToBeUsed = (_a = cacheProvidedAtInception !== null && cacheProvidedAtInception !== void 0 ? cacheProvidedAtInception : cacheExplicitlyProvidedForTss) !== null && _a !== void 0 ? _a : contextualCache;
            if (cacheToBeUsed === null) {
                throw new Error([
                    "In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.",
                    "MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,",
                    "MUI needs an Emotion cache to be provided for SSR to work.",
                    "Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/",
                    "TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"
                ].join("\n"));
            }
            return cacheToBeUsed;
        }
        return { useCache };
    }
    return { createUseCache };
})();

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/withStyles.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable @typescript-eslint/no-explicit-any */



function withStyles_createWithStyles(params) {
    const { useTheme, cache } = params;
    const { makeStyles } = createMakeStyles({ useTheme, cache });
    function withStyles(Component, cssObjectByRuleNameOrGetCssObjectByRuleName, params) {
        const Component_ = typeof Component === "string"
            ? (() => {
                const tag = Component;
                const Out = function (_a) {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    return createElement(tag, props, children);
                };
                Object.defineProperty(Out, "name", {
                    "value": capitalize(tag)
                });
                return Out;
            })()
            : Component;
        /**
         * Get component name for wrapping
         * @see https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
         */
        const name = (() => {
            {
                const { name: nameOrWrappedName } = params !== null && params !== void 0 ? params : {};
                if (nameOrWrappedName !== undefined) {
                    return typeof nameOrWrappedName !== "object"
                        ? nameOrWrappedName
                        : Object.keys(nameOrWrappedName)[0];
                }
            }
            {
                const displayName = Component_.displayName;
                if (typeof displayName === "string" && displayName !== "") {
                    return displayName;
                }
            }
            {
                const { name } = Component_;
                if (name) {
                    return name;
                }
            }
        })();
        const useStyles = makeStyles(Object.assign(Object.assign({}, params), { name }))(typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function"
            ? (theme, props, classes) => incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName(theme, props, classes))
            : incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName));
        function getHasNonRootClasses(classes) {
            for (const name in classes) {
                if (name === "root") {
                    continue;
                }
                return true;
            }
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Out = forwardRef(function (props, ref) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { className, classes: _classes } = props, rest = __rest(props, ["className", "classes"]);
            const { classes, cx } = useStyles(props, { props });
            const rootClassName = cx(classes.root, className);
            fixedClassesByClasses.set(classes, Object.assign(Object.assign({}, classes), { "root": rootClassName }));
            return (React.createElement(Component_, Object.assign({ ref: ref, className: getHasNonRootClasses(classes)
                    ? className
                    : rootClassName }, (typeof Component === "string" ? {} : { classes }), rest)));
        });
        if (name !== undefined) {
            Out.displayName = `${capitalize(name)}WithStyles`;
            Object.defineProperty(Out, "name", { "value": Out.displayName });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Out;
    }
    withStyles.getClasses = getClasses;
    return { withStyles };
}
const fixedClassesByClasses = new WeakMap();
const errorMessageGetClasses = "getClasses should only be used in conjunction with withStyles";
function getClasses(props) {
    const classesIn = props.classes;
    if (classesIn === undefined) {
        throw new Error(errorMessageGetClasses);
    }
    const classes = fixedClassesByClasses.get(classesIn);
    if (classes === undefined) {
        throw new Error(errorMessageGetClasses);
    }
    return classes;
}
function incorporateMediaQueries(cssObjectByRuleNameWithMediaQueries) {
    const cssObjectByRuleName = {};
    const cssObjectByRuleNameWithMediaQueriesByMediaQuery = {};
    Object.keys(cssObjectByRuleNameWithMediaQueries).forEach(ruleNameOrMediaQuery => ((ruleNameOrMediaQuery.startsWith("@media")
        ? cssObjectByRuleNameWithMediaQueriesByMediaQuery
        : cssObjectByRuleName)[ruleNameOrMediaQuery] =
        cssObjectByRuleNameWithMediaQueries[ruleNameOrMediaQuery]));
    Object.keys(cssObjectByRuleNameWithMediaQueriesByMediaQuery).forEach(mediaQuery => {
        const cssObjectByRuleNameBis = cssObjectByRuleNameWithMediaQueriesByMediaQuery[mediaQuery];
        Object.keys(cssObjectByRuleNameBis).forEach(ruleName => {
            var _a;
            return (cssObjectByRuleName[ruleName] = Object.assign(Object.assign({}, ((_a = cssObjectByRuleName[ruleName]) !== null && _a !== void 0 ? _a : {})), { [mediaQuery]: cssObjectByRuleNameBis[ruleName] }));
        });
    });
    return cssObjectByRuleName;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tools/isSSR.js
const isSSR = (() => {
    const isBrowser = typeof document === "object" &&
        typeof (document === null || document === void 0 ? void 0 : document.getElementById) === "function";
    // Check for common testing framework global variables
    const isJest = typeof jest !== "undefined";
    const isMocha = typeof mocha !== "undefined";
    const isVitest = typeof __vitest_worker__ !== "undefined";
    return !isBrowser && !isJest && !isMocha && !isVitest;
})();

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/tss.js
/* eslint-disable @typescript-eslint/ban-types */
var tss_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










function createTss(params) {
    const { useContext, usePlugin, cache: cacheProvidedAtInception } = params;
    const { useCache } = createUseCache({ cacheProvidedAtInception });
    const { useCssAndCx } = createUseCssAndCx({ useCache });
    const usePluginDefault = ({ classes, cx, css }) => ({ classes, cx, css });
    const tss = createTss_internal({
        useContext,
        useCache,
        useCssAndCx,
        "usePlugin": usePlugin !== null && usePlugin !== void 0 ? usePlugin : usePluginDefault,
        "name": undefined,
        "doesUseNestedSelectors": false
    });
    return { tss };
}
let tss_counter = 0;
const nestedSelectorUsageTrackRecord = [];
function createTss_internal(params) {
    const { useContext, useCache, useCssAndCx, usePlugin, name, doesUseNestedSelectors } = params;
    return {
        "withParams": () => createTss_internal(Object.assign({}, params)),
        "withName": nameOrWrappedName => createTss_internal(Object.assign(Object.assign({}, params), { "name": typeof nameOrWrappedName !== "object"
                ? nameOrWrappedName
                : Object.keys(nameOrWrappedName)[0] })),
        "withNestedSelectors": () => createTss_internal(Object.assign(Object.assign({}, params), { "doesUseNestedSelectors": true })),
        "create": (cssObjectByRuleNameOrGetCssObjectByRuleName) => {
            // NOTE: Not isomorphic. Not guaranteed to be the same on client and server.
            // Do not attempt to 'simplify' the code without taking this fact into account.
            const idOfUseStyles = `x${tss_counter++}`;
            const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName ===
                "function"
                ? cssObjectByRuleNameOrGetCssObjectByRuleName
                : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
            return function useStyles(params) {
                var _a, _b, _c;
                const _d = (params !== null && params !== void 0 ? params : {}), { classesOverrides } = _d, paramsAndPluginParams = tss_rest(_d, ["classesOverrides"]);
                const context = useContext();
                const { css, cx } = useCssAndCx();
                const cache = useCache();
                let classes = (0,react.useMemo)(() => {
                    const refClassesCache = {};
                    // @ts-expect-error: Type safety non achievable.
                    const cssObjectByRuleName = getCssObjectByRuleName(Object.assign(Object.assign(Object.assign({}, params), context), (!doesUseNestedSelectors
                        ? {}
                        : {
                            "classes": typeof Proxy === "undefined"
                                ? {}
                                : new Proxy({}, {
                                    "get": (_target, ruleName) => {
                                        /* prettier-ignore */
                                        if (typeof ruleName === "symbol") {
                                            assert(false);
                                        }
                                        if (isSSR) {
                                            {
                                                /* prettier-ignore */
                                                let wrap = nestedSelectorUsageTrackRecord.find(wrap => wrap.name === name &&
                                                    wrap.idOfUseStyles === idOfUseStyles);
                                                /* prettier-ignore */
                                                if (wrap === undefined) {
                                                    /* prettier-ignore */
                                                    wrap = {
                                                        name,
                                                        idOfUseStyles,
                                                        "nestedSelectorRuleNames": new Set()
                                                    };
                                                    /* prettier-ignore */
                                                    nestedSelectorUsageTrackRecord.push(wrap);
                                                }
                                                /* prettier-ignore */
                                                wrap.nestedSelectorRuleNames.add(ruleName);
                                            }
                                            if (
                                            /* prettier-ignore */
                                            nestedSelectorUsageTrackRecord.find(wrap => wrap.name === name &&
                                                wrap.idOfUseStyles !== idOfUseStyles &&
                                                wrap.nestedSelectorRuleNames.has(ruleName)) !== undefined) {
                                                throw new Error([
                                                    `tss-react: Duplicate nested selector "${ruleName}" detected in ${name ===
                                                        undefined
                                                        ? `useStyles named "${name}"`
                                                        : "anonymous useStyles function"}.`,
                                                    `In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.`,
                                                    `Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.`
                                                ].join("\n"));
                                            }
                                        }
                                        /* prettier-ignore */
                                        return (refClassesCache[ruleName]
                                            =
                                                `${cache.key}-${idOfUseStyles}${name !== undefined ? `-${name}` : ""}-${ruleName}-ref`);
                                    }
                                })
                        })));
                    const classes = objectFromEntries(objectKeys(cssObjectByRuleName).map(ruleName => {
                        const cssObject = cssObjectByRuleName[ruleName];
                        if (!cssObject.label) {
                            cssObject.label = `${name !== undefined ? `${name}-` : ""}${ruleName}`;
                        }
                        return [
                            ruleName,
                            `${css(cssObject)}${typeGuard(ruleName, ruleName in refClassesCache)
                                ? ` ${refClassesCache[ruleName]}`
                                : ""}`
                        ];
                    }));
                    objectKeys(refClassesCache).forEach(ruleName => {
                        if (ruleName in classes) {
                            return;
                        }
                        classes[ruleName] =
                            refClassesCache[ruleName];
                    });
                    return classes;
                }, [
                    cache,
                    css,
                    cx,
                    getDependencyArrayRef(params),
                    ...Object.values(context)
                ]);
                classes = (0,react.useMemo)(() => mergeClasses(classes, classesOverrides, cx), [classes, getDependencyArrayRef(classesOverrides), cx]);
                // @ts-expect-error: Type safety non achievable.
                const pluginResultWrap = usePlugin(Object.assign(Object.assign({ classes,
                    css,
                    cx,
                    idOfUseStyles,
                    name }, context), paramsAndPluginParams));
                return Object.assign({ "classes": (_a = pluginResultWrap.classes) !== null && _a !== void 0 ? _a : classes, "css": (_b = pluginResultWrap.css) !== null && _b !== void 0 ? _b : css, "cx": (_c = pluginResultWrap.cx) !== null && _c !== void 0 ? _c : cx }, context);
            };
        }
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(58750);
;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/GlobalStyles.js
"use client";


function GlobalStyles(props) {
    const { styles } = props;
    return React.createElement(reactEmotion.Global, { styles: reactEmotion.css(styles) });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/index.js
"use client";






/** @see <https://docs.tss-react.dev/api/keyframes> */

/** @see <https://docs.tss-react.dev/api/globalstyles> */

/** @see <https://docs.tss-react.dev/api/makestyles> */
function createMakeAndWithStyles(params) {
    return Object.assign(Object.assign({}, createMakeStyles(params)), createWithStyles(params));
}
const { tss } = createTss({
    "useContext": () => ({})
});
const useStyles = tss.create({});


/***/ })

}]);
//# sourceMappingURL=npm.tss-react.js.map