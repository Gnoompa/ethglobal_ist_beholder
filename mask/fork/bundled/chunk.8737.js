(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8737],{

/***/ 41693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ parseURLs)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseURLs(text, requireProtocol = true) {
    // CJS-ESM compatibility
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z;
    return lib.list(text).map((x)=>x.string).filter((y)=>{
        if (!requireProtocol) return true;
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        return URL.canParse(y);
    });
}


/***/ }),

/***/ 18586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ usePluginWrapper),
/* harmony export */   y: () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);


const emptyPluginWrapperMethods = {
    setWrap: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
PluginWrapperMethodsContext.displayName = 'PluginWrapperMethodsContext';
function usePluginWrapper(open, options) {
    const { setWidth, setWrap, setWrapperName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width, name } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open);
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width), [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name), [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 90786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lG: () => (/* binding */ PostInfoContext),
  eT: () => (/* binding */ PostInfoProvider),
  H9: () => (/* binding */ usePostInfoDetails)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Observable.ts
var Observable = __webpack_require__(8482);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/hooks/useObservableMapSet.ts


function useObservableValues(map) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>map.asValues,
            subscribe: (callback)=>{
                return map.event.on(map.ALL_EVENTS, callback);
            }
        }), [
        map
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}

;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts




/** post id on the network. */ /**
     * The result of this subscription will be merged with `PostContext.postMentionedLinks`.
     *
     * You don't need to provide this to resolve links in `PostContext.postContent`.
     */ /** @deprecated It should parse image into rawMessage */ /**
     * The raw TypedMessage that the site gives.
     */ // #region DOM knowledge
// #endregion
// #region Metadata of a post (author, mentioned items, ...)
/** Auto computed */ // Meta
/** @deprecated It should appears in rawMessage */ // #endregion
// #region Raw post content (not decrypted)
// #endregion
// #region Post payload discovered in the rawMessage
/**
     * undefined => payload not found
     */ // #endregion
const PostInfoContext = (0,react.createContext)(null);
PostInfoContext.displayName = 'PostInfoContext';
/** @deprecated use <PostInfoContext.Provider value={post}> */ function PostInfoProvider(props) {
    return (0,react.createElement)(PostInfoContext.Provider, {
        value: props.post,
        children: props.children
    });
}
const usePostInfoDetails = // Change to use* when https://github.com/microsoft/TypeScript/issues/44643 fixed
{
    __proto__: new Proxy({
        __proto__: null
    }, {
        get (_, key) {
            if (typeof key === 'symbol') return undefined;
            function usePostInfoDetails() {
                const postInfo = (0,react.useContext)(PostInfoContext);
                if (!postInfo) throw new TypeError('No post context');
                if (!(key in postInfo)) throw new TypeError('postInfo.' + key + ' is not found');
                const k = postInfo[key];
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof ValueRef/* ValueRef */.Xf) return (0,useValueRef/* useValueRef */.E)(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof Observable/* ObservableMap */.vP) return useObservableValues(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof Observable/* ObservableSet */.n7) return useObservableValues(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (isSubscription(k)) return (0,use_subscription.useSubscription)(k);
                return k;
            }
            Object.defineProperty(usePostInfoDetails, key, {
                value: usePostInfoDetails,
                configurable: true
            });
            return usePostInfoDetails;
        }
    })
};
function isSubscription(x) {
    return typeof x === 'object' && x !== null && !!(x.getCurrentValue && x.subscribe);
}


/***/ }),

/***/ 63889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./packages/plugins/Gitcoin/src/base.ts + 7 modules
var base = __webpack_require__(74251);
// EXTERNAL MODULE: ./packages/plugins/Gitcoin/src/constants.ts
var constants = __webpack_require__(45325);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/intersection.js
var intersection = __webpack_require__(77888);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/quill-delta-to-html@0.12.1/node_modules/quill-delta-to-html/dist/commonjs/main.js
var main = __webpack_require__(76460);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SocialIcon/index.tsx


const socialIconMap = {
    'twitter.com': icon_generated_as_jsx.Twitter,
    'github.com': icon_generated_as_jsx.GitHub,
    default: icon_generated_as_jsx.Globe
};
/** Social url */ function SocialIcon({ url, ...rest }) {
    if (!url) return null;
    const host = new URL(url).host;
    const Icon = socialIconMap[host] ?? socialIconMap.default;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
        ...rest
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./node_modules/.pnpm/dompurify@3.0.5/node_modules/dompurify/dist/purify.js
var purify = __webpack_require__(95087);
var purify_default = /*#__PURE__*/__webpack_require__.n(purify);
;// CONCATENATED MODULE: ./packages/shared-base/src/helpers/purify.ts

// NEVER expose this policy to the external!
const policy = typeof trustedTypes !== 'undefined' ? trustedTypes.createPolicy('mask', {
    createHTML: (x)=>x
}) : null;
function purify_purify(html) {
    const sanitized = purify_default().sanitize(html);
    return policy?.createHTML?.(sanitized) ?? sanitized;
}

// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/ShadowRootIsolation.tsx
var ShadowRootIsolation = __webpack_require__(16256);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/locales/i18n_generated.ts
// @ts-nocheck
/* eslint-disable */ 

function createProxy(initValue) {
    function define(key) {
        const value = initValue(key);
        Object.defineProperty(container, key, {
            value,
            configurable: true
        });
        return value;
    }
    const container = {
        __proto__: new Proxy({
            __proto__: null
        }, {
            get (_, key) {
                if (typeof key === "symbol") return undefined;
                return define(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, v)=>v === null,
        getOwnPropertyDescriptor: (_, key)=>{
            if (typeof key === "symbol") return undefined;
            if (!(key in container)) define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
function useGitcoinTrans() /**
      * `Gitcoin`
      */ /**
      * `Display specific information of Gitcoin projects, donate to a project directly on social media.`
      */ /**
      * `Install mask.io to join free assets launch activity.`
      */ /**
      * `Select a token`
      */ /**
      * `Grant not available`
      */ /**
      * `Enter an amount`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `Donate`
      */ /**
      * `Share`
      */ /**
      * `Last update:`
      */ /**
      * `By`
      */ /**
      * `View on Gitcoin`
      */ /**
      * `Amount`
      */ /**
      * `Loading`
      */ /**
      * `Something went wrong.`
      */ /**
      * `Retry`
      */ /**
      * `Connect Wallet`
      */ /**
      * `https://gitcoin.co/grants/86/gitcoin-sustainability-fund`
      */ /**
      * `Select a token`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `I participated {{grant_name}} donation event and donated {{- amount}} {{symbol}}.
    
    $t(promote)`
      */ /**
      * `Active`
      */ /**
      * `Active`
      */ /**
      * `Closed`
      */ /**
      * `Give back to the Gitcoin match pool`
      */ /**
      * `Your Total Contribution`
      */ /**
      * `Contribute towards the Gitcoin Match Pool! Funds are used for current and future Grant rounds. The selected amount will be added on top of your grant contributions.`
      */ /**
      * `You have donated {{- uiAmount}} {{symbol}} successfully.`
      */ /**
      * `Donate Checkout`
      */ /**
      * - grant_status$active: `Active`
    
      * - grant_status$closed: `Closed`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("co.gitcoin");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react.createElement)(es/* Trans */.cC, {
            i18nKey,
            ns: "co.gitcoin",
            shouldUnescape: true,
            ...props
        });
}
const GitcoinTrans = /**
      * `By using this service, you will also be contributing 5% of your contribution to the <fund>Gitcoin grants development fund</fund>.`
      */ /**
      * `Total Raised <bold>{{amount}}</bold>`
      */ /**
      * `by <bold>{{admin}}</bold>`
      */ /*#__PURE__*/ createProxy(createComponent);

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/gitcoin-grant-detail-style.ts
// Copy from Gitcoin grant detail page.
const grantDetailStyle = `
.grant-detail a {
  color: #6F3FF5;
  text-decoration: none;
}
.grant-detail a:hover {
  color: #5932C4;
  text-decoration: underline;
}
.grant-detail p,
.grant-detail ol,
.grant-detail ul,
.grant-detail pre,
.grant-detail blockquote,
.grant-detail h1,
.grant-detail h2,
.grant-detail h3,
.grant-detail h4,
.grant-detail h5,
.grant-detail h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}

.grant-detail ol,
.grant-detail ul {
    padding-left: 1.5em;
}

.grant-detail ol > li,
.grant-detail ul > li {
    list-style-type: none;
}

.grant-detail ul > li::before {
    content: '\\2022';
}

.grant-detail ul[data-checked='true'],
.grant-detail ul[data-checked='false'] {
    pointer-events: none;
}

.grant-detail ul[data-checked='true'] > li *,
.grant-detail ul[data-checked='false'] > li * {
    pointer-events: all;
}

.grant-detail ul[data-checked='true'] > li::before,
.grant-detail ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}

.grant-detail ul[data-checked='true'] > li::before {
    content: '\\2611';
}

.grant-detail ul[data-checked='false'] > li::before {
    content: '\\2610';
}

.grant-detail li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2em;
}

.grant-detail li:not(.ql-direction-rtl)::before {
    margin-left: -1.5em;
    margin-right: 0.3em;
    text-align: right;
}

.grant-detail li.ql-direction-rtl::before {
    margin-left: 0.3em;
    margin-right: -1.5em;
}

.grant-detail ol li:not(.ql-direction-rtl),
.grant-detail ul li:not(.ql-direction-rtl) {
    padding-left: 1.5em;
}

.grant-detail ol li.ql-direction-rtl,
.grant-detail ul li.ql-direction-rtl {
    padding-right: 1.5em;
}

.grant-detail ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}

.grant-detail ol li:before {
    content: counter(list-0, decimal) '. ';
}

.grant-detail ol li.ql-indent-1 {
    counter-increment: list-1;
}

.grant-detail ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}

.grant-detail ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}

.grant-detail ol li.ql-indent-2 {
    counter-increment: list-2;
}

.grant-detail ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}

.grant-detail ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}

.grant-detail ol li.ql-indent-3 {
    counter-increment: list-3;
}

.grant-detail ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}

.grant-detail ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}

.grant-detail ol li.ql-indent-4 {
    counter-increment: list-4;
}

.grant-detail ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}

.grant-detail ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}

.grant-detail ol li.ql-indent-5 {
    counter-increment: list-5;
}

.grant-detail ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}

.grant-detail ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}

.grant-detail ol li.ql-indent-6 {
    counter-increment: list-6;
}

.grant-detail ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}

.grant-detail ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}

.grant-detail ol li.ql-indent-7 {
    counter-increment: list-7;
}

.grant-detail ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}

.grant-detail ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}

.grant-detail ol li.ql-indent-8 {
    counter-increment: list-8;
}

.grant-detail ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}

.grant-detail ol li.ql-indent-8 {
    counter-reset: list-9;
}

.grant-detail ol li.ql-indent-9 {
    counter-increment: list-9;
}

.grant-detail ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}

.grant-detail .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3em;
}

.grant-detail li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5em;
}

.grant-detail .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3em;
}

.grant-detail li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5em;
}

.grant-detail .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6em;
}

.grant-detail li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5em;
}

.grant-detail .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6em;
}

.grant-detail li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5em;
}

.grant-detail .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9em;
}

.grant-detail li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5em;
}

.grant-detail .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9em;
}

.grant-detail li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5em;
}

.grant-detail .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12em;
}

.grant-detail li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5em;
}

.grant-detail .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12em;
}

.grant-detail li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5em;
}

.grant-detail .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15em;
}

.grant-detail li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5em;
}

.grant-detail .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15em;
}

.grant-detail li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5em;
}

.grant-detail .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18em;
}

.grant-detail li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5em;
}

.grant-detail .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18em;
}

.grant-detail li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5em;
}

.grant-detail .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21em;
}

.grant-detail li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5em;
}

.grant-detail .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21em;
}

.grant-detail li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5em;
}

.grant-detail .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24em;
}

.grant-detail li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5em;
}

.grant-detail .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24em;
}

.grant-detail li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5em;
}

.grant-detail .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27em;
}

.grant-detail li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5em;
}

.grant-detail .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27em;
}

.grant-detail li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5em;
}

.grant-detail .ql-video {
    display: block;
    max-width: 100%;
}

.grant-detail .ql-video.ql-align-center {
    margin: 0 auto;
}

.grant-detail .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}

.grant-detail .ql-bg-black {
    background-color: #000;
}

.grant-detail .ql-bg-red {
    background-color: #e60000;
}

.grant-detail .ql-bg-orange {
    background-color: #f90;
}

.grant-detail .ql-bg-yellow {
    background-color: #ff0;
}

.grant-detail .ql-bg-green {
    background-color: #008a00;
}

.grant-detail .ql-bg-blue {
    background-color: #06c;
}

.grant-detail .ql-bg-purple {
    background-color: #93f;
}

.grant-detail .ql-color-white {
    color: #fff;
}

.grant-detail .ql-color-red {
    color: #e60000;
}

.grant-detail .ql-color-orange {
    color: #f90;
}

.grant-detail .ql-color-yellow {
    color: #ff0;
}

.grant-detail .ql-color-green {
    color: #008a00;
}

.grant-detail .ql-color-blue {
    color: #06c;
}

.grant-detail .ql-color-purple {
    color: #93f;
}

.grant-detail .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}

.grant-detail .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}

.grant-detail .ql-size-small {
    font-size: 0.75em;
}

.grant-detail .ql-size-large {
    font-size: 1.5em;
}

.grant-detail .ql-size-huge {
    font-size: 2.5em;
}

.grant-detail .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}

.grant-detail .ql-align-center {
    text-align: center;
}

.grant-detail .ql-align-justify {
    text-align: justify;
}

.grant-detail .ql-align-right {
    text-align: right;
}
`;

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/apis/index.ts



async function fetchGrant(id) {
    if (!/\d+/.test(id)) return;
    const { grants } = await (0,fetchJSON/* fetchCachedJSON */.MP)((0,dist/* default */.ZP)(constants/* GITCOIN_API_GRANTS_V1 */.tq, {
        id
    }));
    return grants;
}

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/hooks/useGrant.ts


function useGrant(id) {
    return (0,useAsyncRetry/* default */.Z)(()=>fetchGrant(id));
}

// EXTERNAL MODULE: ./packages/shared-base/src/SingletonModal/index.ts
var SingletonModal = __webpack_require__(62384);
;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/modals.tsx

const DonateModal = new SingletonModal/* SingletonModal */.G();
const ResultModal = new SingletonModal/* SingletonModal */.G();

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/PreviewCard.tsx

















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            padding: theme.spacing(0, 1.5, 1.5),
            maxHeight: 500,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1
        },
        metas: {
            display: 'flex',
            marginTop: theme.spacing(1)
        },
        admin: {
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        link: {
            marginLeft: theme.spacing(1),
            color: theme.palette.maskColor.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        main: {
            padding: theme.spacing(2, 2, 0),
            boxSizing: 'border-box',
            marginTop: theme.spacing(2.5),
            borderRadius: 12,
            minHeight: 366,
            display: 'flex',
            flexDirection: 'column'
        },
        article: {
            borderRadius: '12px 12px 0 0',
            height: '100%',
            boxSizing: 'border-box',
            overflow: 'auto',
            overscrollBehavior: 'contain',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        network: {
            marginRight: theme.spacing(1.5)
        },
        title: {
            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: 18,
            flexGrow: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            marginRight: theme.spacing(2)
        },
        bold: {
            fontWeight: 'bold',
            color: theme.palette.maskColor.dark
        },
        banner: {
            textAlign: 'center',
            img: {
                width: '100%',
                maxWidth: '100%',
                maxHeight: 176,
                objectFit: 'contain',
                borderRadius: theme.spacing(1.5)
            }
        },
        description: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            tabSize: 4,
            img: {
                maxWidth: '100%'
            }
        },
        data: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        meta: {
            fontSize: 10,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            width: '100%'
        }
    }));
function PreviewCard(props) {
    const t = useGitcoinTrans();
    const { classes, theme } = useStyles();
    const { value: grant, error, loading, retry } = useGrant(props.grantId);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    // #region the donation dialog
    const [style, description] = (0,react.useMemo)(()=>{
        if (!grant?.description_rich) return [
            '',
            grant?.description || ''
        ];
        const ops = JSON.parse(grant.description_rich).ops;
        const converter = new main/* QuillDeltaToHtmlConverter */.bc(ops);
        return [
            grantDetailStyle,
            converter.convert()
        ];
    }, [
        grant?.description_rich,
        grant?.description
    ]);
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        height: 148,
        p: 1
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
        height: 120,
        message: t.go_wrong(),
        onRetry: retry
    });
    if (!grant) return null;
    const tenant = grant.tenants[0];
    const isSupportedTenant = (0,intersection/* default */.Z)(grant.tenants, constants/* SUPPORTED_TENANTS */.FI).length > 0;
    // Use handle_1 as Gitcoin does
    const twitterProfile = grant.twitter_handle_1 ? `https://twitter.com/${grant.twitter_handle_1}` : null;
    const ChainIcon = constants/* TenantToChainIconMap */.f8[tenant];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    ChainIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainIcon, {
                        className: classes.network,
                        size: 36
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        flexGrow: 1,
                        overflow: "auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "h1",
                                        className: classes.title,
                                        title: grant.title,
                                        children: grant.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        disableTouchRipple: true,
                                        color: "success",
                                        size: "small",
                                        sx: {
                                            pointerEvents: 'none',
                                            borderRadius: '32px',
                                            backgroundColor: grant.active ? theme.palette.maskColor.success : (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.1)
                                        },
                                        children: t.grant_status({
                                            context: grant.active ? 'active' : 'closed'
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.metas,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: theme.palette.maskColor.second,
                                        fontSize: 14,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GitcoinTrans.total_raised, {
                                            values: {
                                                amount: `$${new bignumber/* BigNumber */.O(grant.amount_received).toFixed(2)}`
                                            },
                                            components: {
                                                bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    component: "span",
                                                    className: classes.bold
                                                })
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.admin,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                color: theme.palette.maskColor.second,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GitcoinTrans.admin, {
                                                    values: {
                                                        admin: grant.admin_profile.handle
                                                    },
                                                    components: {
                                                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                            className: classes.bold,
                                                            target: "_blank",
                                                            href: `https://gitcoin.co/profile/${grant.admin_profile.handle}`
                                                        })
                                                    }
                                                })
                                            }),
                                            twitterProfile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.link,
                                                target: "_blank",
                                                href: twitterProfile,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialIcon, {
                                                    url: twitterProfile,
                                                    size: 16
                                                })
                                            }) : null,
                                            grant.admin_profile.github_url ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.link,
                                                href: grant.admin_profile.github_url,
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialIcon, {
                                                    url: grant.admin_profile.github_url,
                                                    size: 16
                                                })
                                            }) : null,
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.link,
                                                href: grant.reference_url,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialIcon, {
                                                    url: grant.reference_url,
                                                    size: 16
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.main,
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.article,
                    component: "div",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.banner,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: grant.logo_url
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ShadowRootIsolation/* ShadowRootIsolation */.Q, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("style", {
                                    children: style
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCardRender, {
                                    __html: description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.data,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.meta,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: [
                                        t.last_updated(),
                                        " ",
                                        grant.last_update_natural
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    width: '100%',
                    gap: 1,
                    mt: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            variant: "roundedDark",
                            className: classes.button,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: (0,dist/* default */.ZP)('https://gitcoin.co', grant.url),
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Eye, {
                                variant: "dark",
                                size: 18
                            }),
                            children: t.view_on()
                        })
                    }),
                    grant.active && isSupportedTenant ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            expectedChainId: chainId,
                            predicate: (pluginID)=>pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            ActionButtonPromiseProps: {
                                variant: 'roundedDark'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                fullWidth: true,
                                variant: "roundedDark",
                                onClick: ()=>{
                                    DonateModal.open({
                                        grant
                                    });
                                },
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                                    size: 18
                                }),
                                children: t.donate()
                            })
                        })
                    }) : null
                ]
            })
        ]
    });
}
// Note: this extra component is used to make sure the useStyles call happens
// under the ShadowRootIsolation context.
function PreviewCardRender({ __html }) {
    const { classes, cx } = useStyles();
    const safeHTML = (0,react.useMemo)(()=>{
        if (typeof __html === 'string') return purify_purify(__html);
        return __html;
    }, [
        __html
    ]);
    // this is safe because purify has been called
    // eslint-disable-next-line react/no-danger
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cx(classes.description, 'grant-detail'),
        dangerouslySetInnerHTML: {
            __html: safeHTML
        }
    });
}

// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkTab/index.tsx
var NetworkTab = __webpack_require__(59312);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx + 1 modules
var FungibleTokenInput = __webpack_require__(93558);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants_constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useGasConfig.ts
var useGasConfig = __webpack_require__(84553);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ContractTransaction.ts
var ContractTransaction = __webpack_require__(21704);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasPrice.ts + 1 modules
var useGasPrice = __webpack_require__(37186);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/BulkCheckout.json
var BulkCheckout = __webpack_require__(40098);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useContract.ts
var useContract = __webpack_require__(95685);
;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/hooks/useBulkCheckoutWallet.ts



function useBulkCheckoutContract(chainId) {
    const { BULK_CHECKOUT_ADDRESS } = (0,constants_constants/* useGitcoinConstants */.N_)(chainId);
    return (0,useContract/* useContract */.c)(chainId, BULK_CHECKOUT_ADDRESS, BulkCheckout);
}

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/hooks/useDonateCallback.ts











/**
 * A callback for donate gitcoin grant
 * @param address the donor address
 * @param grantAmount
 * @param tipAmount
 * @param token
 */ function useDonateCallback(address, grantAmount, tipAmount, token) {
    const { GITCOIN_ETH_ADDRESS, GITCOIN_MAINTAINER_ADDRESS } = (0,constants_constants/* useGitcoinConstants */.N_)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const bulkCheckoutContract = useBulkCheckoutContract(chainId);
    const totalAmount = (0,number/* toFixed */.FH)(new bignumber/* BigNumber */.O(grantAmount).plus(tipAmount));
    const donations = (0,react.useMemo)(()=>{
        if (!address || !token || !GITCOIN_ETH_ADDRESS) return src_constants/* EMPTY_LIST */.rP;
        return (0,compact/* default */.Z)([
            [
                token.schema === types/* SchemaType */.XQ.Native ? GITCOIN_ETH_ADDRESS : token.address,
                grantAmount,
                address
            ],
            // dest
            GITCOIN_MAINTAINER_ADDRESS && new bignumber/* BigNumber */.O(tipAmount).gt(0) ? [
                token.schema === types/* SchemaType */.XQ.Native ? GITCOIN_ETH_ADDRESS : token.address,
                tipAmount,
                GITCOIN_MAINTAINER_ADDRESS
            ] : // dest
            undefined
        ]);
    }, [
        address,
        grantAmount,
        tipAmount,
        token,
        GITCOIN_MAINTAINER_ADDRESS,
        GITCOIN_ETH_ADDRESS
    ]);
    const { gasPrice } = (0,useGasConfig/* useGasConfig */.c)(chainId);
    const { data: defaultGasPrice = '1' } = (0,useGasPrice/* useGasPrice */.F)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const gasState = (0,useAsync/* default */.Z)(async ()=>{
        if (!bulkCheckoutContract || !token) return '0';
        const price = !gasPrice || gasPrice === '0' ? defaultGasPrice : gasPrice;
        // estimate gas and compose transaction
        const tx = await new ContractTransaction/* ContractTransaction */.D(bulkCheckoutContract).fillAll(bulkCheckoutContract.methods.donate(donations), {
            from: account,
            value: token.schema === types/* SchemaType */.XQ.Native ? totalAmount : '0'
        });
        return new bignumber/* BigNumber */.O(tx.gas ?? 1).times(price).toFixed(0);
    }, [
        gasPrice,
        defaultGasPrice,
        bulkCheckoutContract,
        token
    ]);
    const [callbackState, callback] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!token || !bulkCheckoutContract || !donations.length) return;
        // estimate gas and compose transaction
        const tx = await new ContractTransaction/* ContractTransaction */.D(bulkCheckoutContract).fillAll(bulkCheckoutContract.methods.donate(donations), {
            from: account,
            value: token.schema === types/* SchemaType */.XQ.Native ? totalAmount : '0'
        });
        return entry/* Web3 */.Bv.sendTransaction(tx);
    }, [
        account,
        totalAmount,
        token,
        donations
    ]);
    return [
        callbackState,
        gasState,
        callback
    ];
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Select/Select.js + 1 modules
var Select = __webpack_require__(23361);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/DonateModal/GiveBackSelect.tsx



const OPTIONS = [
    0,
    0.05,
    0.1,
    0.15
];
const GiveBackSelect = /*#__PURE__*/ (0,react.memo)((props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
        ...props,
        MenuProps: {
            disablePortal: true,
            disableScrollLock: true,
            ...props.MenuProps
        },
        children: OPTIONS.map((ratio)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
                value: ratio,
                children: [
                    ratio * 100,
                    "%"
                ]
            }, ratio))
    });
});
GiveBackSelect.displayName = 'GiveBackSelect';

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/utils.ts


function getSupportedChainIds(tenants) {
    return (0,compact/* default */.Z)(tenants.map((tenant)=>constants/* TenantToChainMap */.nQ[tenant])).flat();
}

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/DonateModal/DonateDialog.tsx



















const DonateDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        banner: {},
        bannerImage: {
            width: '100%',
            maxWidth: '100%',
            maxHeight: 176,
            objectFit: 'contain',
            borderRadius: theme.spacing(1.5)
        },
        input: {
            marginTop: 36
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: theme.spacing(2)
        },
        rowLabel: {
            marginRight: 'auto',
            display: 'flex',
            alignItems: 'center'
        },
        giveBackSelect: {
            width: 80
        },
        contribution: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        button: {
            margin: 0,
            padding: 0,
            height: 40
        },
        actions: {
            padding: '0 !important'
        }
    }));
const DonateDialog = /*#__PURE__*/ (0,react.memo)(({ grant, ...rest })=>{
    const t = useGitcoinTrans();
    const { classes, theme } = DonateDialog_useStyles();
    const { title, admin_address: address, tenants } = grant;
    const availableChains = (0,react.useMemo)(()=>getSupportedChainIds(tenants), [
        tenants
    ]);
    const { account, chainId, setChainId } = (0,useContext/* useChainContext */.ql)();
    (0,react.useLayoutEffect)(()=>{
        if (!availableChains.includes(chainId)) setChainId(availableChains[0]);
    }, [
        chainId,
        setChainId,
        availableChains
    ]);
    const nativeTokenDetailed = (0,useAsync/* default */.Z)(async ()=>{
        return entry/* Web3 */.Bv.getNativeToken({
            chainId
        });
    }, [
        chainId
    ]);
    const { BULK_CHECKOUT_ADDRESS, TOKEN_LIST } = (0,constants_constants/* useGitcoinConstants */.N_)(chainId);
    // #region the selected token
    const [tokenMap, setTokenMap] = (0,react.useState)({});
    const token = tokenMap[chainId] ?? nativeTokenDetailed.value;
    const tokenBalance = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address);
    // #region select token dialog
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await modals/* SelectFungibleTokenModal */.gw.openAndWaitForClose({
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            chainId,
            whitelist: TOKEN_LIST,
            disableNativeToken: false,
            selectedTokens: token?.address ? [
                token.address
            ] : src_constants/* EMPTY_LIST */.rP,
            enableManage: false
        });
        if (picked) return;
        setTokenMap((map)=>({
                ...map,
                [chainId]: picked
            }));
    }, [
        token?.address,
        chainId,
        TOKEN_LIST
    ]);
    // #endregion
    // #region form
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,react.useMemo)(()=>(0,number/* rightShift */.pu)(rawAmount || '0', token?.decimals).integerValue(), [
        rawAmount,
        token?.decimals
    ]);
    const [giveBack, setGiveBack] = (0,react.useState)(0.05);
    const tipAmount = (0,react.useMemo)(()=>new bignumber/* BigNumber */.O(amount).times(giveBack).integerValue(), [
        amount,
        giveBack
    ]);
    const total = amount.plus(tipAmount);
    // #endregion
    // #region blocking
    const [{ loading }, { value: gasFee = '1' }, donateCallback] = useDonateCallback(address ?? '', amount.toFixed(0), tipAmount.toFixed(0), token);
    // #endregion
    const donate = (0,react.useCallback)(async ()=>{
        if (!token) return;
        const hash = await donateCallback();
        if (typeof hash !== 'string') return;
        const cashTag = Sniffings/* Sniffings */.Y.is_twitter_page ? '$' : '';
        const uiAmount = (0,formatBalance/* formatBalance */.a)(amount.plus(tipAmount), token.decimals);
        const shareText = t.share_text({
            amount: uiAmount,
            symbol: `${cashTag}${token.symbol}`,
            grant_name: title
        });
        await ResultModal.openAndWaitForClose({
            token,
            uiAmount,
            onShare () {
                (0,context/* share */.BN)?.(shareText);
            }
        });
        // clean up dialog
        setRawAmount('');
    }, [
        amount,
        tipAmount,
        token,
        donateCallback,
        t,
        title
    ]);
    const balance = new bignumber/* BigNumber */.O(tokenBalance.data ?? '0');
    const availableBalance = (0,react.useMemo)(()=>{
        if (!(0,helpers_address/* isNativeTokenAddress */.qw)(token?.address)) return balance;
        // Add gas padding.
        return balance.gt(gasFee) ? balance.minus(new bignumber/* BigNumber */.O(gasFee).times(2)) : number/* ZERO */.xE;
    }, [
        token?.address,
        balance.toFixed(),
        gasFee
    ]);
    const maxAmount = availableBalance.div(1 + giveBack).toFixed(0);
    // #region submit button
    const insufficientBalance = total.gt(availableBalance);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!token) return t.select_a_token();
        if (!account) return t.plugin_wallet_connect_a_wallet();
        if (!address) return t.grant_not_available();
        if (!amount || amount.isZero()) return t.enter_an_amount();
        if (insufficientBalance) return t.insufficient_balance({
            symbol: token.symbol
        });
        return '';
    }, [
        account,
        address,
        amount.toFixed(0),
        chainId,
        token,
        insufficientBalance
    ]);
    // #endregion
    if (!token || !address) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        ...rest,
        title: t.donate_dialog_title(),
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                style: {
                    padding: 16
                },
                children: [
                    grant.logo_url ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.banner,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.bannerImage,
                            src: grant.logo_url
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        noValidate: true,
                        autoComplete: "off",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                ml: -1.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                                    chains: availableChains
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInput/* FungibleTokenInput */.C, {
                                label: t.amount(),
                                amount: rawAmount,
                                maxAmount: maxAmount,
                                balance: availableBalance.toFixed(0),
                                token: token,
                                onAmountChange: setRawAmount,
                                onSelectToken: onSelectTokenChipClick,
                                loadingBalance: tokenBalance.isLoading,
                                className: classes.input
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.row,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.rowLabel,
                                        fontSize: 16,
                                        lineHeight: "20px",
                                        color: theme.palette.maskColor.main,
                                        children: [
                                            t.give_back_to_match_pool(),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                                title: t.give_back_tooltip(),
                                                placement: "top",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Info, {
                                                    color: theme.palette.maskColor.second,
                                                    size: 20,
                                                    sx: {
                                                        ml: 1
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GiveBackSelect, {
                                        value: giveBack,
                                        className: classes.giveBackSelect,
                                        onChange: (e)=>{
                                            setGiveBack(Number.parseFloat(e.target.value));
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.row,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.rowLabel,
                                        fontSize: 16,
                                        lineHeight: "20px",
                                        color: theme.palette.maskColor.second,
                                        children: t.total_contribution()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.contribution,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                mr: 1,
                                                fontSize: 24,
                                                fontWeight: 700,
                                                children: (0,formatBalance/* formatBalance */.a)(total, token.decimals, 6)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                                chainId: chainId,
                                                address: token.address,
                                                size: 18
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                ml: 1,
                                                children: token.symbol
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        expectedChainId: chainId,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            classes: {
                                button: classes.button
                            },
                            amount: total.toFixed(0),
                            spender: BULK_CHECKOUT_ADDRESS,
                            token: token.schema === types/* SchemaType */.XQ.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                                expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                                expectedChainId: chainId,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                    className: classes.button,
                                    loading: loading,
                                    fullWidth: true,
                                    size: "large",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                                        size: 18
                                    }),
                                    disabled: !!validationMessage || loading,
                                    onClick: donate,
                                    children: validationMessage || t.donate()
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/DonateModal/index.tsx




const DonateModal_DonateModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [props_, setProps_] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setProps_(props);
        }
    });
    if (!open || !props_?.grant) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DonateDialog, {
        open: true,
        onClose: ()=>dispatch?.close(),
        ...props_,
        grant: props_?.grant
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/ResultModal/ResultDialog.tsx





const ResultDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        resultDialog: {
            width: 420,
            height: 420,
            backgroundImage: 'none'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            padding: theme.spacing(4, 3, 3),
            boxSizing: 'border-box',
            color: theme.palette.text.primary,
            textAlign: 'center',
            fontSize: 18
        },
        actions: {
            padding: theme.spacing(0, 3, 3)
        },
        amount: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: theme.spacing(1)
        },
        messageText: {
            fontSize: 16,
            color: theme.palette.maskColor.second,
            lineHeight: '30px',
            fontWeight: 'bold'
        }
    }));
function ResultDialog({ className, confirmLabel, children, uiAmount, token, onClose, onShare, ...rest }) {
    const { classes } = ResultDialog_useStyles();
    const t = useGitcoinTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        title: t.donate(),
        classes: {
            paper: classes.resultDialog
        },
        BackdropProps: {
            style: {
                opacity: 0
            }
        },
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                        address: token?.address || '',
                        chainId: token?.chainId,
                        size: 90
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.amount,
                        children: [
                            uiAmount,
                            " ",
                            token?.symbol
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.messageText,
                        mt: "41px",
                        children: t.donate_successfully({
                            uiAmount,
                            symbol: token?.symbol || ''
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    onClick: ()=>{
                        onShare?.();
                        onClose?.();
                    },
                    children: confirmLabel || t.share()
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/ResultModal/index.tsx




const ResultModal_ResultModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [props_, setProps_] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setProps_(props);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultDialog, {
        open: true,
        onClose: ()=>dispatch?.close(),
        ...props_,
        token: props_?.token,
        uiAmount: props_?.uiAmount || ''
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/modals/index.tsx





const Modals = /*#__PURE__*/ (0,react.memo)(function Modals() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DonateModal_DonateModal, {
                ref: DonateModal.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultModal_ResultModal, {
                ref: ResultModal.register
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Gitcoin/src/SiteAdaptor/index.tsx













const isGitcoin = (x)=>/^https:\/\/gitcoin.co\/grants\/\d+/.test(x);
function Renderer(props) {
    (0,usePluginWrapper/* usePluginWrapper */.f)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme/* MaskLightTheme */.C,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
            grantId: props.id
        })
    });
}
const site = {
    ...base/* base */.u,
    init (_, context) {},
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals, {});
    },
    DecryptedInspector (props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,extract/* extractTextFromTypedMessage */.V)(props.message);
            if (x.isNone()) return null;
            return (0,parseURLs/* parseURLs */.l)(x.value).find(isGitcoin);
        }, [
            props.message
        ]);
        const id = link?.match(/\d+/)?.[0];
        if (!id) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            id: id
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* PLUGIN_META_KEY */.um,
            ()=>constants/* PLUGIN_NAME */.EW
        ]
    ]),
    PostInspector () {
        const links = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
        const link = links.find(isGitcoin);
        const id = link?.match(/\d+/)?.[0];
        if (!id) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            id: id
        });
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base */.u.ID,
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.Gitcoin,
                i18nKey: "description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.Gitcoin,
                i18nKey: "name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gitcoin, {
                size: 36
            }),
            marketListSortingPriority: 9,
            tutorialLink: 'https://realmasknetwork.notion.site/98ed83784ed4446a8a13fa685c7bddfb'
        }
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gitcoin, {
            variant: "light",
            size: 24,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(255, 159, 10, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(41, 228, 253, 0.2) 100%), #FFFFFF'
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 45522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nW: () => (/* binding */ useBuildInfoMarkdown)
/* harmony export */ });
/* unused harmony exports BuildInfoProvider, useBuildInfo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2194);



/** Type of the Error */ /** The Error message */ /** The error stack */ /**
 * Provide the build info for CrashUI
 */ const BuildInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useBuildInfo_raw */ .A);
BuildInfo.displayName = 'BuildInfo';
function BuildInfoProvider(props) {
    return /*#__PURE__*/ _jsx(BuildInfo.Provider, {
        ...props
    });
}
function useBuildInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BuildInfo)).current();
}
function useBuildInfoMarkdown() {
    const env = useBuildInfo();
    const gitInfo = env.COMMIT_HASH ? `
## Git (${env.DIRTY ? '*' : ''}):
${env.COMMIT_HASH} (${env.BRANCH_NAME})` : '';
    const buildInfoMarkdown = `## Build info
- Version: ${env.VERSION || 'unknown'}
- NODE_ENV: ${"production" || 0}
- userAgent: ${navigator.userAgent}
- build: ${env.channel || 'unknown'}
- BUILD_DATE: ${env.BUILD_DATE || 'unknown'}
` + gitInfo;
    return buildInfoMarkdown;
}


/***/ }),

/***/ 72385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useSingletonModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useSingletonModal(ref, options) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dispatchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const openRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(open);
    optionsRef.current = options;
    openRef.current = open;
    const creator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((dispatchOpen, dispatchClose, dispatchAbort)=>{
        dispatchRef.current = {
            peek () {
                return openRef.current;
            },
            open (props) {
                optionsRef.current?.onOpen?.(props);
                dispatchOpen(props);
                setOpen(true);
            },
            close (props) {
                optionsRef.current?.onClose?.(props);
                dispatchClose(props);
                setOpen(false);
            },
            abort (error) {
                optionsRef.current?.onAbort?.(error);
                dispatchAbort(error);
                setOpen(false);
            }
        };
        return dispatchRef.current;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, ()=>creator, [
        creator
    ]);
    return [
        open,
        dispatchRef.current
    ];
}


/***/ }),

/***/ 19628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenSpenders.ts
var useFungibleTokenSpenders = __webpack_require__(54165);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(13414);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/HelpOutline.js


/* harmony default export */ const HelpOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
}), 'HelpOutline'));
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        icon: {},
        button: {
            whiteSpace: 'nowrap',
            // increase selector priority over button's
            [`.${refs.icon}`]: {
                width: 18,
                height: 18,
                fontSize: 10
            }
        },
        helpIcon: {
            width: 18,
            height: 18
        }
    }));
function EthereumERC20TokenApprovedBoundary(props) {
    const { children = null, amount, balance, spender, token, infiniteUnlockContent, contractName, showHelperToken = true, failedContent, callback } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: token?.chainId
    });
    const { data: tokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address, {
        chainId
    });
    const { data: spenders, isLoading: spendersLoading, isError, refetch } = (0,useFungibleTokenSpenders/* useFungibleTokenSpenders */.D)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    const approveAmount = balance || tokenBalance || amount;
    const [{ type: approveStateType, allowance }, transactionState, approveCallback] = (0,useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S)(token?.address ?? '', approveAmount, spender ?? '', ()=>{
        callback?.();
        refetch();
    }, token?.chainId);
    const approved = (0,react.useMemo)(()=>{
        if ((0,number/* isGte */.sK)(allowance, amount)) return true;
        if (!token?.address || !spenders?.length) return false;
        return spenders.some((x)=>{
            return (0,isSameAddress/* isSameAddress */.W)(x.tokenInfo.address, token.address) && (0,isSameAddress/* isSameAddress */.W)(x.address, spender) && (0,number/* isGte */.sK)((0,number/* rightShift */.pu)(x.amount || 0, x.tokenInfo.decimals || token.decimals), amount);
        });
    }, [
        allowance,
        amount,
        spenders,
        token?.address,
        token?.decimals,
        spender
    ]);
    const loading = spendersLoading || approveStateType === useERC20TokenApproveCallback/* ApproveStateType */.i.UPDATING || transactionState.loadingApprove || transactionState.loading;
    const onApprove = (0,react.useCallback)(async ()=>{
        if (approved || loading) return;
        await approveCallback(true);
    }, [
        approved,
        loading,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    if (isError) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>refetch(),
        ...props.ActionButtonProps,
        children: failedContent ?? t.wallet_load_retry({
            symbol: token.symbol ?? token.name ?? 'Token'
        })
    });
    if (loading || !approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        loading: loading,
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            className: classes.icon,
            address: token.address,
            chainId: token.chainId,
            name: token.name,
            disableDefaultIcon: true
        }),
        endIcon: showHelperToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: t.plugin_wallet_token_infinite_unlock_tips({
                provider: contractName ?? '',
                symbol: token.symbol
            }),
            placement: "top",
            arrow: true,
            leaveDelay: 2000,
            disableInteractive: true,
            disableFocusListener: true,
            disableTouchListener: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HelpOutline, {
                className: classes.helpIcon
            })
        }) : null,
        onClick: onApprove,
        ...props.ActionButtonProps,
        children: infiniteUnlockContent ?? t.plugin_wallet_token_infinite_unlock({
            symbol: token.symbol
        })
    });
    if (approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    (0,esm/* unreachable */.t1)(approved);
}


/***/ }),

/***/ 93558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ FungibleTokenInput)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(30911);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/chipClasses.js
var chipClasses = __webpack_require__(57156);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/UI.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            height: 66,
            padding: theme.spacing(1.25, 1.5),
            [`& > .${inputBaseClasses/* default */.Z.input}`]: {
                paddingTop: `${theme.spacing(2.75)}!important`,
                paddingBottom: '0px !important',
                flex: 2,
                paddingLeft: '0px !important',
                fontSize: 14,
                fontWeight: 400
            }
        },
        title: {
            position: 'absolute',
            top: 10,
            left: 12
        },
        label: {
            fontSize: 13,
            lineHeight: '18px',
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        control: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            rowGap: 4,
            flex: 1
        },
        chip: {
            background: 'transparent',
            cursor: 'pointer',
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        tokenIcon: {
            width: 20,
            height: 20,
            marginRight: '0px !important'
        },
        selectToken: {
            backgroundColor: theme.palette.maskColor.primary,
            color: theme.palette.maskColor.white,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700,
            padding: theme.spacing(0.5, 1),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 99,
            cursor: 'pointer',
            ['&:hover']: {
                backgroundColor: (0,colorManipulator/* lighten */.$n)(theme.palette.maskColor.primary, 0.1)
            }
        },
        maxChip: {
            color: theme.palette.maskColor.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 18,
            padding: '0 3px',
            borderRadius: 4,
            fontSize: 10,
            marginLeft: 4,
            fontWeight: 700,
            lineHeight: '18px',
            cursor: 'pointer',
            background: theme.palette.maskColor.primary,
            '&:hover': {
                background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.8)
            },
            [`& > .${chipClasses/* default */.Z.label}`]: {
                padding: 0
            }
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700,
            marginLeft: 4
        },
        arrowIcon: {
            color: `${theme.palette.maskColor.second}!important`
        },
        chipLabel: {
            maxWidth: 150
        }
    }));
const FungibleTokenInputUI = /*#__PURE__*/ (0,react.memo)(({ label, isNative, token, onSelectToken, onMaxClick, balance, loadingBalance, disableMax = false, disableToken = false, disableBalance = false, ...props })=>{
    const { classes, cx } = useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        fullWidth: true,
        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: cx(classes.label, classes.title),
            children: label
        }),
        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.control,
            justifyContent: disableBalance ? 'flex-end' : undefined,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.label,
                    display: "flex",
                    alignItems: "center",
                    component: "div",
                    children: [
                        !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                isNative ? t.available_balance() : t.balance(),
                                ":",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    component: "span",
                                    children: token && !loadingBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                        value: balance,
                                        decimals: token?.decimals,
                                        significant: token?.decimals,
                                        formatter: formatBalance/* formatBalance */.a
                                    }) : '--'
                                })
                            ]
                        }) : null,
                        !disableMax ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            className: classes.maxChip,
                            label: "MAX",
                            size: "small",
                            onClick: onMaxClick
                        }) : null
                    ]
                }),
                !disableToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    columnGap: "12px",
                    children: token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            size: "small",
                            onClick: onSelectToken,
                            className: classes.chip,
                            classes: {
                                label: classes.chipLabel
                            },
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                className: classes.tokenIcon,
                                address: token.address,
                                name: token.name,
                                chainId: token.chainId,
                                logoURL: token.logoURL
                            }),
                            deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                className: classes.arrowIcon,
                                size: 24
                            }),
                            onDelete: onSelectToken,
                            label: token.symbol
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.selectToken,
                        onClick: onSelectToken,
                        children: [
                            t.select_a_token(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                size: 16
                            })
                        ]
                    })
                }) : null
            ]
        }),
        ...props,
        onChange: (ev)=>{
            if (ev.currentTarget.value && !new RegExp(props?.inputProps?.pattern).test(ev.currentTarget.value)) {
                return;
            }
            props.onChange?.(ev);
        },
        className: cx(classes.root, props.className)
    });
});
FungibleTokenInputUI.displayName = 'FungibleTokenInputUI';

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx







const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const FungibleTokenInput = /*#__PURE__*/ (0,react.memo)(({ label, token, disabled, disableMax, disableBalance, disableToken, loadingBalance, onSelectToken, onAmountChange, amount, maxAmount, balance, isAvailableBalance, placeholder = '0.0', maxAmountShares = 1, className })=>{
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const isNative = isAvailableBalance ?? Others.isNativeTokenAddress(token?.address);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT, RE_MATCH_FRACTION_AMOUNT } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token?.decimals}}$`)
        }), // d.ddd...d
    [
        token?.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replaceAll(',', '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInputUI, {
        label: label,
        isNative: isNative,
        token: token,
        onSelectToken: onSelectToken,
        value: amount,
        onChange: onChange,
        className: className,
        inputProps: {
            autoComplete: 'off',
            autoCorrect: 'off',
            title: 'Token Amount',
            inputMode: 'decimal',
            min: 0,
            minLength: MIN_AMOUNT_LENGTH,
            maxLength: MAX_AMOUNT_LENGTH,
            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek,
            spellCheck: false
        },
        placeholder: placeholder,
        onKeyDown: (ev)=>{
            if (ev.key === 'Enter') ev.preventDefault();
        },
        onMaxClick: ()=>{
            if (!token) return;
            const amount = new bignumber/* BigNumber */.O(maxAmount ?? balance).dividedBy(maxAmountShares).decimalPlaces(0, 1);
            const formattedBalance = (0,formatBalance/* formatBalance */.a)(amount, token.decimals, token.decimals, true, false, 4, false);
            onAmountChange(((0,number/* isZero */.Fr)(formattedBalance) ? new bignumber/* BigNumber */.O((0,number/* leftShift */.w5)(amount, token.decimals).toPrecision(2)).toFormat() : formattedBalance) ?? '0');
        },
        balance: balance,
        required: true,
        loadingBalance: loadingBalance,
        disabled: disabled,
        disableMax: disableMax,
        disableBalance: disableBalance,
        disableToken: disableToken
    });
});
FungibleTokenInput.displayName = 'FungibleTokenInput';


/***/ }),

/***/ 52478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ LoadingStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 400,
            marginTop: theme.spacing(1.5)
        }
    }));
const LoadingStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function LoadingStatus({ omitText, className, iconSize = 32, children, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .LoadingBase */ .S, {
                size: iconSize
            }),
            omitText ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.text,
                children: children ?? t.loading()
            })
        ]
    });
});


/***/ }),

/***/ 59312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17735);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82903);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3350);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98170);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81128);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16941);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22596);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65587);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60475);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _WalletIcon_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98748);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24770);










const NetworkTab = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NetworkTab({ chains, pluginID, onChange, requireChains, ...rest }) {
    const { pluginID: networkPluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkContext */ .gK)(pluginID);
    const { chainId, setChainId, setNetworkType } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const networks = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkDescriptors */ .p)(networkPluginID);
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .O)();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Others */ .v)();
    const { value: smartPaySupportChainId } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .SmartPayBundler */ .Pp.getSupportedChainId(), []);
    const supportedChains = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!wallet?.owner || requireChains) return chains;
        return chains.filter((x)=>x === smartPaySupportChainId);
    }, [
        smartPaySupportChainId,
        wallet,
        chains,
        requireChains
    ]);
    const usedNetworks = networks.filter((x)=>supportedChains.find((c)=>c === x.chainId));
    const networkIds = usedNetworks.map((x)=>x.chainId.toString());
    const isValidChainId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>chains.includes(chainId), [
        chains,
        chainId
    ]);
    const [tab, , , setTab] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_8__/* .useTabs */ .Y)(!isValidChainId ? networkIds[0] : chainId?.toString() ?? networkIds[0], ...networkIds);
    (0,react_use__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(()=>{
        setTab((prev)=>{
            if (isValidChainId && chainId && prev !== chainId?.toString()) return chainId.toString();
            return prev;
        });
        if (!isValidChainId) setChainId(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ChainId */ .a_.Mainnet);
    }, [
        chainId,
        isValidChainId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        value: tab,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .MaskTabList */ .C, {
            ...rest,
            variant: "flexible",
            onChange: (_, v)=>{
                const chainId = Number.parseInt(v, 10);
                const networkType = Others.chainResolver.networkType(chainId);
                setChainId?.(chainId);
                if (networkType) setNetworkType?.(networkType);
                onChange?.(chainId);
                setTab(v);
            },
            "aria-label": "Network Tabs",
            children: usedNetworks.map((x)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    "aria-label": x.name,
                    value: x.chainId.toString(),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletIcon_index_js__WEBPACK_IMPORTED_MODULE_15__/* .WalletIcon */ .o, {
                                mainIcon: x.icon,
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "body2",
                                fontSize: 14,
                                fontWeight: tab === x.chainId.toString() ? 700 : 400,
                                children: x.shortName ?? x.name
                            })
                        ]
                    })
                }, x.chainId);
            })
        })
    });
});


/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ReloadStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '36px'
        },
        button: {
            marginTop: theme.spacing(1.5),
            fontSize: '12px',
            fontWeight: 700,
            minWidth: theme.spacing(11),
            height: theme.spacing(4)
        }
    }));
const ReloadStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ReloadStatus({ className, children, message, actionLabel, onRetry, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.text,
                children: message ?? t.load_failed()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.button,
                onClick: ()=>onRetry?.(),
                variant: "roundedContained",
                size: "medium",
                children: actionLabel ?? t.load_retry()
            })
        ]
    });
});


/***/ }),

/***/ 24981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ WalletConnectedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(5480);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useRiskWarningApproved.ts



function useRiskWarningApproved(pluginID) {
    const { RiskWarning } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,use_subscription.useSubscription)(RiskWarning?.approved ?? Subscriptions/* FALSE */.Dv);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    button: {
        margin: 0
    }
});
function WalletConnectedBoundary(props) {
    const { children = null, offChain = false, hideRiskWarningConfirmed = false, expectedChainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = useStyles(undefined, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId: chainIdValid } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)(undefined, {
        chainId: chainIdValid
    });
    const approved = useRiskWarningApproved();
    const buttonClass = cx(classes.button, classes.connectWallet);
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonProps,
        children: t.plugin_wallet_connect_a_wallet()
    });
    if (!approved && !hideRiskWarningConfirmed && pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            modals/* WalletRiskWarningModal */.L5.open({
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t.plugin_wallet_confirm_risk_warning()
    });
    if (!(wallet?.owner && chainIdValid === smartPayChainId) && (0,number/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: nativeTokenBalance.loading ? t.plugin_wallet_update_gas_fee() : t.plugin_wallet_no_gas_fee()
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t.plugin_wallet_invalid_network()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 22103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ FormattedBalance)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10149);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29763);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    }));
function FormattedBalance(props) {
    const { value, decimals, significant, symbol, minimumBalance, formatter = (value)=>value } = props;
    const valueInt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(value ?? '0').toFixed(0);
    let formatted = formatter(valueInt, decimals, significant);
    if (minimumBalance && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isZero */ .Fr)(formatted) && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isLessThan */ .FI)(valueInt, minimumBalance)) {
        // it's a BigNumber so it's ok
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        formatted = '<' + formatter(minimumBalance, decimals, significant).toString();
    }
    const { classes } = useStyles(undefined, {
        props
    });
    if (symbol) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.balance,
                children: String(formatted)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes?.symbol,
                children: symbol
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: String(formatted)
    });
}


/***/ }),

/***/ 80835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mq: () => (/* binding */ useDialogStacking),
/* harmony export */   tE: () => (/* binding */ useDialogStackActor),
/* harmony export */   yu: () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89601);



const DialogStackingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    stack: [],
    push: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    pop: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    setParent: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    hasGlobalBackdrop: false
});
DialogStackingContext.displayName = 'DialogStackingContext';
const DialogHierarchyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
DialogHierarchyContext.displayName = 'DialogHierarchyContext';
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps, TrackDialogHierarchy } = useDialogStackConsumer(open)
 *     return <TrackDialogHierarchy>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </TrackDialogHierarchy>
 * }
 */ function useDialogStackActor(open) {
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('' + Math.random()).current;
    const { pop, push, stack, setParent, hasGlobalBackdrop } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
    // children's useEffect will run before parent's useEffect.
    // when the hierarchy is A > B and they are both open,
    // the stack will be ["B", "A"] (B pushed into the stack first.)
    // we need to notify the context the react component tree hierarchy to order them correctly.
    const parentID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogHierarchyContext);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>setParent(selfID, parentID), [
        parentID
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        open ? push(selfID) : pop(selfID);
        return ()=>pop(selfID);
    }, [
        open
    ]);
    const TrackDialogHierarchy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null).current ??= function TrackDialogHierarchy({ children }) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogHierarchyContext.Provider, {
            value: selfID,
            children: children
        });
    };
    const returnVal = {
        shouldReplaceExitWithBack: stack.length > 1,
        extraProps: {
            open
        },
        TrackDialogHierarchy
    };
    if (hasGlobalBackdrop) returnVal.extraProps.hideBackdrop = true;
    if (stack.length > 1) returnVal.extraProps.transitionDuration = 0;
    if (!open) return returnVal;
    if (stack.at(-1) !== selfID) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            hidden: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 *    <Dialog3></Dialog3>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    const [stack, setStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hierarchy, setHierarchy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const sortedStack = sortStackByHierarchy(hierarchy, stack);
        return {
            hasGlobalBackdrop: props.hasGlobalBackdrop || false,
            stack: sortedStack,
            // Note: the following methods MUST NOT use stack or hierarchy out of the useState callback.
            setParent (child, parent) {
                if (!parent) return lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
                setHierarchy((hierarchy)=>{
                    if (hierarchy[parent]?.has(child)) return hierarchy;
                    const newSet = new Set(hierarchy[parent] || []);
                    newSet.add(child);
                    return {
                        ...hierarchy,
                        [parent]: newSet
                    };
                });
                return ()=>{
                    setHierarchy((hierarchy)=>{
                        const newSet = new Set(hierarchy[parent]);
                        newSet.delete(child);
                        return {
                            ...hierarchy,
                            [parent]: newSet
                        };
                    });
                };
            },
            pop (id) {
                setStack((stack)=>stack.includes(id) ? stack.filter((x)=>x !== id) : stack);
            },
            push (id) {
                setStack((stack)=>stack.includes(id) ? stack : stack.concat(id));
            }
        };
    }, [
        stack,
        hierarchy,
        props.hasGlobalBackdrop
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogStackingContext.Provider, {
        value: context,
        children: props.children
    });
}
function useDialogStacking() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
}
function sortStackByHierarchy(hierarchy, stack) {
    if (stack.length <= 1) return stack;
    const last = stack.at(-1);
    const children = hierarchy[last];
    if (!children?.size) return stack;
    for (const child of children){
        if (stack.includes(child)) return sortStackByHierarchy(hierarchy, [
            last
        ].concat(stack.slice(0, -1)));
    }
    return stack;
}


/***/ }),

/***/ 27966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ShadowRootTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70429);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootTooltip = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootTooltip.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 26909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ad: () => (/* binding */ usePortalShadowRoot),
/* harmony export */   lr: () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   vg: () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51573);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);
/* harmony import */ var _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57604);
/* eslint-disable react-hooks/rules-of-hooks */ 




/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer, debugKey) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on DisableShadowRootContext during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .PreventShadowRootEventPropagationListContext */ .N);
    const container = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .iH.portalContainer;
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = debugKey || '';
        const shadow = root.attachShadow(_masknet_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags */ .v.shadowRootInit);
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, _Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .stopPropagation */ .UW, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheet.addContainer(shadow);
        // This is important to make the portal orders correct.
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return container;
    });
    return renderer(container);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            }));
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 16256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ ShadowRootIsolation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51573);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32704);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);
/* harmony import */ var _ShadowRootStyleProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60186);
/* eslint-disable react-hooks/rules-of-hooks */ 





/** Tag name */ /**
 * Render it's children inside a ShadowRoot to provide style isolation.
 */ function ShadowRootIsolation({ children, rootElement = 'div', ...props }) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_4__/* .DisableShadowRootContext */ .AZ)).current;
    if (disabled) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: children
    });
    const [dom, setDOM] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!container.current) {
        container.current = typeof rootElement === 'function' ? rootElement() : document.createElement(rootElement);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!dom) return;
        if (dom.shadowRoot) return;
        // Note: ShadowRootIsolation is expected to use inside other closed ShadowRoot
        const shadow = dom.attachShadow({
            ..._masknet_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags */ .v.shadowRootInit,
            mode: 'open',
            delegatesFocus: false
        });
        shadow.appendChild(container.current);
    }, [
        dom
    ]);
    if (!dom?.shadowRoot) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        ref: (x)=>x !== dom ? setDOM(x) : undefined
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider_js__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootStyleProvider */ .q, {
            preventPropagation: false,
            shadow: dom.shadowRoot,
            children: /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(children, container.current)
        })
    });
}


/***/ }),

/***/ 57604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ: () => (/* binding */ shadowEnvironmentMountingRoots),
/* harmony export */   eG: () => (/* binding */ setupReactShadowRootEnvironment),
/* harmony export */   iH: () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);
}





/**
 * This container is used to attach the single React root.
 * It does not contain direct DOM decedents.
 * All decedents are mounted via <Portal>.
 */ let globalContainer;
/**
 * This container is prepared for all the Modals.
 */ let portalContainer;
/** @internal */ const shadowEnvironmentMountingRoots = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ObservableMap */ .vP();
function setupReactShadowRootEnvironment(init, preventEventPropagationList, wrapJSX) {
    if (portalContainer) return portalContainer;
    // TODO: make sure globalContainer is the last DOM in the body?
    globalContainer = document.body.appendChild(document.createElement('div'));
    portalContainer = globalContainer.attachShadow(init);
    // Note: This React Root does not expect to have any direct DOM children.
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(globalContainer).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MountingPoint, {
            wrapJSX: wrapJSX,
            preventPropagationList: preventEventPropagationList
        })
    }));
    return portalContainer;
}
function MountingPoint(props) {
    const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        shadowEnvironmentMountingRoots.event.on(shadowEnvironmentMountingRoots.ALL_EVENTS, ()=>{
            setChildren(Array.from(shadowEnvironmentMountingRoots.values()));
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts_js__WEBPACK_IMPORTED_MODULE_4__/* .PreventShadowRootEventPropagationListContext */ .N.Provider, {
        value: props.preventPropagationList,
        children: props.wrapJSX ? props.wrapJSX(children) : children
    });
}
/** @internal */ const ref = {
    get portalContainer () {
        let dom;
        if (location.protocol.includes('extension')) dom = document.body;
        else if (globalThis.location.hostname === 'localhost') return document.body;
        else if (!portalContainer) throw new TypeError('Please call setupPortalShadowRoot first');
        else dom = portalContainer;
        Object.defineProperty(ref, 'mountingPoint', {
            value: dom
        });
        return dom;
    }
};


/***/ }),

/***/ 60186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ ShadowRootStyleProvider)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(92984);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js
var emotion_element_c39617d8_browser_esm = __webpack_require__(11020);
;// CONCATENATED MODULE: ./packages/theme/src/ShadowRoot/ShadowRootStyleSheet.ts
/// <reference types="@masknet/global-types/firefox" />
/// <reference types="@masknet/global-types/env" />
const shadowHeadMap = new WeakMap();
// There are 2 rendering mode of this ShadowRootStyleSheet.
// 1. If the host supports ConstructableStyleSheet proposal:
//      It is the fastest but only Chrome supports it.
// 2. style tags that being synchronize between all ShadowRoot.
//      See https://github.com/emotion-js/emotion/blob/main/packages/sheet/src/index.js
//      Note: We cannot use .sheet.insertRule (so called "speedy mode") because in our app,
//            the host of a ShadowRoot might be detached from the DOM and reattach to another place,
//            when a <style> tag is disconnected from the DOM, it's CSSStyleSheet object will be dropped.
class StyleSheet {
    // Unlucky, emotion will create it's own StyleSheet and use isSpeedy, tags, keys and container for Global components.
    tags = [];
    container = document.createElement('div');
    isSpeedy = false;
    key;
    constructor(options){
        this.key = options.key;
        if (options.container instanceof ShadowRoot) {
            this.implementation = 'adoptedStyleSheets' in Document.prototype ? new ConstructableStyleSheet() : new SynchronizeStyleSheet();
            this.addContainer(options.container);
            Reflect.set(this.container, 'sheet', this);
        } else {
            // global style
            const un_global = Reflect.get(options.container, 'sheet');
            if (!(un_global instanceof StyleSheet)) throw new TypeError();
            // A hack to the emotion StyleSheet
            // eslint-disable-next-line no-constructor-return
            return {
                tags: [],
                key: options.key,
                insert: un_global.implementation.insertGlobal.bind(un_global.implementation),
                flush: un_global.implementation.flushGlobal.bind(un_global.implementation)
            };
        }
    }
    addContainer(container) {
        this.implementation.addContainer(container, this.key);
    }
    hydrate() {
        throw new Error('Does not support SSR.');
    }
    insert(rule) {
        if (false) {}
        this.implementation.insert(rule);
    }
    flush() {
        this.implementation.flush();
        this._alreadyInsertedOrderInsensitiveRule = false;
    }
    implementation;
    _alreadyInsertedOrderInsensitiveRule = false;
}
class ConstructableStyleSheet {
    sheet = new CSSStyleSheet();
    globalSheet = new CSSStyleSheet();
    added = new WeakSet();
    addContainer(container) {
        if (this.added.has(container)) return;
        this.added.add(container);
        if (typeof XPCNativeWrapper === 'undefined') {
            // push & unshift crashes Chrome 103. Not tested on other versions.
            container.adoptedStyleSheets = [
                this.globalSheet,
                ...container.adoptedStyleSheets,
                this.sheet
            ];
        } else {
            // assignment does not work on Firefox 102. Not tested on other versions.
            const unsafe = XPCNativeWrapper.unwrap(container.adoptedStyleSheets);
            Array.prototype.unshift.call(unsafe, XPCNativeWrapper.unwrap(this.globalSheet));
            Array.prototype.push.call(unsafe, XPCNativeWrapper.unwrap(this.sheet));
        }
    }
    insert(rule) {
        insertRuleSpeedy(this.sheet, rule);
    }
    insertGlobal(rule) {
        insertRuleSpeedy(this.globalSheet, rule);
    }
    flush() {
        this.sheet.replaceSync('');
    }
    flushGlobal() {
        this.globalSheet.replaceSync('');
    }
}
class SynchronizeStyleSheet {
    ctr = 0;
    containers = new Map();
    addContainer(container, tag) {
        if (this.containers.has(container)) return;
        // setup tags
        const head = getShadowRootHead(container);
        const localContainer = document.createElement('div');
        localContainer.dataset.styleContainer = tag;
        head.appendChild(localContainer);
        this.containers.set(container, localContainer);
        {
            const style = createStyleElement();
            style.dataset.globalStyleOf = tag;
            head.insertBefore(style, head.firstChild);
            this.globalStyles.set(container, style);
        }
        // copy styles
        const first = this.containers.entries().next();
        if (first.done) return;
        // there is no previous styles. we are done.
        const frag = document.createDocumentFragment();
        for (const x of first.value[1].children){
            frag.appendChild(x.cloneNode(true));
        }
        localContainer.appendChild(frag);
    }
    insert(rule) {
        if (this.ctr % 25 === 0) {
            this._insertTag();
        }
        for (const container of this.containers.values()){
            const tag = container.lastElementChild;
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr += 1;
    }
    insertGlobal(rule) {
        for (const style of this.globalStyles.values()){
            style.appendChild(document.createTextNode(rule));
        }
    }
    flush() {
        for (const container of this.containers.values()){
            for (const tag of container.children){
                tag.remove();
            }
        }
        this.ctr = 0;
    }
    flushGlobal() {
        this.globalStyles.forEach((x)=>x.innerText = '');
    }
    _insertTag = ()=>{
        for (const container of this.containers.values()){
            container.appendChild(createStyleElement());
        }
    };
    globalStyles = new Map();
}
function getShadowRootHead(shadow) {
    if (!shadowHeadMap.has(shadow)) {
        const head = document.createElement('head');
        shadowHeadMap.set(shadow, head);
        shadow.insertBefore(head, shadow.firstChild);
    }
    return shadowHeadMap.get(shadow);
}
function createStyleElement() {
    const tag = document.createElement('style');
    tag.appendChild(document.createTextNode(''));
    return tag;
}
function insertRuleSpeedy(sheet, rule) {
    try {
        sheet.insertRule(rule, sheet.cssRules.length);
    } catch (error) {
        if (false) {}
    }
}

// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Contexts.ts
var Contexts = __webpack_require__(64244);
;// CONCATENATED MODULE: ./packages/theme/src/ShadowRoot/ShadowRootStyleProvider.tsx






/**
 * @internal
 * This component provide the modified version of tss-react and emotion context,
 * therefore styles within this component can render correctly in ShadowRoot.
 *
 * This component is used to render inside a bare ShadowRoot.
 * If you need a nested ShadowRoot render, use ShadowRootIsolation.
 */ function ShadowRootStyleProvider(props) {
    const { shadow, children } = props;
    const [cache, sheets] = getShadowRootEmotionCache(shadow);
    const preventEventPropagationList = (0,react.useContext)(Contexts/* PreventShadowRootEventPropagationListContext */.N);
    (0,react.useEffect)(()=>{
        if (!props.preventPropagation) return;
        preventEventPropagationList.forEach((event)=>shadow.addEventListener(event, Contexts/* stopPropagation */.UW));
        return ()=>preventEventPropagationList.forEach((event)=>shadow.removeEventListener(event, Contexts/* stopPropagation */.UW));
    }, [
        props.preventPropagation,
        preventEventPropagationList,
        shadow
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Contexts/* StyleSheetsContext */.EP.Provider, {
        value: sheets,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.C, {
            value: cache,
            children: children
        })
    });
}
const styleSheetMap = new WeakMap();
function getShadowRootEmotionCache(shadow) {
    if (styleSheetMap.has(shadow)) return styleSheetMap.get(shadow);
    // emotion doesn't allow numbers appears in the key
    const instanceID = Math.random().toString(36).slice(2).replaceAll(/\d/g, 'x').slice(0, 4);
    const key = 'css-' + instanceID;
    const muiEmotionCache = (0,emotion_cache_browser_esm/* default */.Z)({
        key
    });
    const muiStyleSheet = new StyleSheet({
        key,
        container: shadow
    });
    muiEmotionCache.sheet = muiStyleSheet;
    styleSheetMap.set(shadow, [
        muiEmotionCache,
        muiStyleSheet
    ]);
    return styleSheetMap.get(shadow);
}


/***/ }),

/***/ 93349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ makeTypedMessageImage),
/* harmony export */   c: () => (/* binding */ isTypedMessageImage)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/**
 * A single image
 * TODO: it should be serializable but still not decided how to do that yet.
 */ const isTypedMessageImage = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size?.width,
        height: size?.height,
        meta
    };
}


/***/ }),

/***/ 61111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ isTypedMessagePromise),
/* harmony export */   N: () => (/* binding */ makeTypedMessagePromise)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** What to display when the message is not ready. */ const isTypedMessagePromise = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('promise');
function makeTypedMessagePromise(promise, alt) {
    const x = {
        type: 'promise',
        serializable: false,
        promise: getPromiseWithStatus(promise),
        alt,
        meta: undefined
    };
    return x;
}
const seen = new WeakMap();
function getPromiseWithStatus(promise) {
    // let's assume it already handle the status update
    if ('status' in promise) return promise;
    if (seen.has(promise)) return seen.get(promise);
    const _ = Promise.resolve(promise);
    Object.defineProperty(_, 'status', {
        configurable: true,
        value: 'pending'
    });
    _.then((value)=>{
        Object.defineProperties(_, {
            status: {
                value: 'fulfilled'
            },
            value: {
                value
            }
        });
    }, (error)=>{
        Object.defineProperties(_, {
            status: {
                value: 'rejected'
            },
            reason: {
                value: error
            }
        });
    });
    seen.set(promise, _);
    return _;
}


/***/ }),

/***/ 86025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ makeTypedMessageText),
/* harmony export */   Po: () => (/* binding */ isTypedMessageTextV1),
/* harmony export */   Rz: () => (/* binding */ isTypedMessageText)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** A text message */ const isTypedMessageTextV1 = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('text', 1);
const isTypedMessageText = isTypedMessageTextV1;
function makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}


/***/ }),

/***/ 17425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zw: () => (/* binding */ makeTypedMessageTuple),
/* harmony export */   bZ: () => (/* binding */ isTypedMessageTuple),
/* harmony export */   h6: () => (/* binding */ makeTypedMessageSerializableTupleFromList),
/* harmony export */   kT: () => (/* binding */ makeTypedMessageTupleSerializable),
/* harmony export */   n_: () => (/* binding */ makeTypedMessageTupleFromList),
/* harmony export */   qT: () => (/* binding */ isTypedMessageTupleSerializable)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41840);
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);


/** Multiple TypedMessages (ordered) */ function isTypedMessageTuple(x) {
    return x.type === 'tuple';
}
const isTypedMessageTupleSerializable = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .composeEvery */ .mo)(isTypedMessageTuple, _utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}


/***/ }),

/***/ 76350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ isTypedMessageMaskPayload),
/* harmony export */   J: () => (/* binding */ makeTypedMessageMaskPayload)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/**
 * This TypedMessage represents an encrypted TypedMessage.
 */ const isTypedMessageMaskPayload = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('x-mask-payload');
function makeTypedMessageMaskPayload(message, meta) {
    return {
        type: 'x-mask-payload',
        message,
        meta
    };
}


/***/ }),

/***/ 43458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ makeTypedMessageAnchor),
/* harmony export */   b: () => (/* binding */ isTypedMessageAnchor)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);
if (964 != __webpack_require__.j) {
	/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
}


/** It represents a single link. */ /** The message that should be displayed as a decorate after the link. */ const isTypedMessageAnchor = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content, postImage, meta) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageText */ .P)(`[${content}](${href})`, meta),
        postImage,
        meta
    };
}


/***/ }),

/***/ 73561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ extractTextFromTypedMessage),
/* harmony export */   j: () => (/* binding */ extractImageFromTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
if (964 != __webpack_require__.j) {
	/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93349);
}
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43458);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30688);




/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message, options) {
    if (!message) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
    const text = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageText */ .Rz)(message)) text.push(message.content);
        else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageAnchor */ .b)(message)) {
            text.push(message.content);
            if (options?.linkAsText) text.push(`(${message.href})`);
        } else (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    if (text.length) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Some)(text.join(' '));
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
}
function extractImageFromTypedMessage(message) {
    if (!message) return [];
    const image = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isTypedMessageImage */ .c)(message)) return void image.push(message.image);
        return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    return image;
}


/***/ }),

/***/ 41840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hz: () => (/* binding */ isTypedMessageEqual),
/* harmony export */   c3: () => (/* binding */ isNonSerializableTypedMessageWithAlt),
/* harmony export */   fV: () => (/* binding */ isSerializableTypedMessage)
/* harmony export */ });
if (964 != __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85094);
}


function isNonSerializableTypedMessageWithAlt(x) {
    const y = x;
    if (y.serializable !== false) return false;
    if (!y.alt) return false;
    return isSerializableTypedMessage(y.alt);
}
function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    return isNonSerializableTypedMessageWithAlt(x);
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    // perform a deep equal
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(message1, message2);
}


/***/ }),

/***/ 31072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vm: () => (/* binding */ composeSome),
/* harmony export */   mo: () => (/* binding */ composeEvery),
/* harmony export */   uO: () => (/* binding */ createIsType)
/* harmony export */ });
/** @internal */ function createIsType(x, version) {
    return (y)=>{
        if (version !== undefined && y.version !== version) return false;
        return y.type === x;
    };
}
/** @internal */ function composeSome(...fns) {
    return (...args)=>fns.some((f)=>f(...args));
}
/** @internal */ function composeEvery(...fns) {
    return (...args)=>fns.every((f)=>f(...args));
}


/***/ }),

/***/ 30688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ forEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61111);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41840);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76350);



function forEachTypedMessageChild(node, visitor) {
    let stop;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        for (const each of node.items){
            stop = visitor(each);
            if (stop) return;
        }
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessagePromise */ .K)(node)) {
        // if Promise has a resolved value, we ignore it's alt.
        if ('value' in node.promise) visitor(node.promise.value);
        else if (node.alt) visitor(node.alt);
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$)(node)) {
        visitor(node.message);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        visitor(node.alt);
    }
}


/***/ }),

/***/ 54165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useFungibleTokenSpenders)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);



function useFungibleTokenSpenders(pluginID, options) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'fungible-tokens',
            'spenders',
            chainId,
            account
        ],
        enabled: true,
        queryFn: async ()=>Hub.getFungibleTokenSpenders(chainId, account)
    });
}


/***/ }),

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useNetworkDescriptors)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get all built in declared network descriptor
 * @param expectedPluginID
 * @param expectedChainIdOrNetworkTypeOrID
 * @returns
 */ function useNetworkDescriptors(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Networks */ .Rm)(pluginID);
}


/***/ }),

/***/ 95685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useContract)
/* harmony export */ });
/* unused harmony export useContracts */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95739);




/**
 * Create a contract which will forward its all transactions to the
 * EthereumService in the background page and decode the result of calls automatically
 * @param address
 * @param ABI
 * @param chainId
 */ function useContract(chainId, address = '', ABI = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .createContract */ .O)(_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.getWeb3({
            chainId
        }), address, ABI), [
        address,
        ABI
    ]);
}
/**
 * Create many contracts with same ABI
 * @param listOfAddress
 * @param ABI
 * @param chainId
 */ function useContracts(chainId, listOfAddress = EMPTY_LIST, ABI = EMPTY_LIST) {
    return useMemo(()=>listOfAddress.map((address)=>createContract(Web3.getWeb3({
                chainId
            }), address, ABI)).filter(Boolean), [
        JSON.stringify(listOfAddress),
        ABI
    ]);
}


/***/ }),

/***/ 84553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useGasConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49113);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98705);



function useGasConfig(chainId) {
    const [gasConfig, setGasConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { data: gasOptions } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useGasOptions */ .o)();
    const editor = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .GasEditor */ .e.fromGasOptions(chainId, gasOptions);
    return {
        gasPrice: editor.getGasPrice(),
        gasConfig: gasConfig || editor.getGasConfig(),
        setGasConfig
    };
}


/***/ }),

/***/ 49113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GasEditor)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84976);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);
/* harmony import */ var _helpers_formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41487);
/* harmony import */ var _constants_descriptors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3187);




class GasEditor {
    chainId;
    config;
    constructor(chainId, config){
        this.chainId = chainId;
        this.config = config;
    }
    get isEIP1559() {
        return !!_constants_descriptors_js__WEBPACK_IMPORTED_MODULE_1__/* .CHAIN_DESCRIPTORS */ .Q_.find((x)=>x.chainId === this.chainId)?.features?.includes('EIP1559');
    }
    get EIP1559GasOptionConfig() {
        return this.config;
    }
    get priorEIP1559GasOptionConfig() {
        return this.config;
    }
    getGasFee(gas) {
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .multipliedBy */ .$q)(this.getGasPrice(), gas);
    }
    getGasFeeInUSD(gas, price) {
        return (0,_helpers_formatter_js__WEBPACK_IMPORTED_MODULE_3__/* .formatWeiToEther */ .yp)(this.getGasFee(gas)).multipliedBy(price);
    }
    getGasPrice() {
        return this.EIP1559GasOptionConfig.maxFeePerGas || this.priorEIP1559GasOptionConfig.gasPrice || '0';
    }
    getGasConfig(fallback) {
        if (this.isEIP1559) {
            const config = fallback;
            return {
                gasPrice: undefined,
                maxFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.maxFeePerGas) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(config?.maxFeePerGas || '0'),
                maxPriorityFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.maxPriorityFeePerGas) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(config?.maxPriorityFeePerGas || '1'),
                gasCurrency: this.EIP1559GasOptionConfig?.gasCurrency || fallback?.gasCurrency,
                gas: this.EIP1559GasOptionConfig.gas && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(this.EIP1559GasOptionConfig.gas) ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.gas) : undefined,
                gasOptionType: this.config.gasOptionType ?? config?.gasOptionType
            };
        }
        const priorConfig = fallback;
        return {
            gasPrice: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.priorEIP1559GasOptionConfig.gasPrice) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(priorConfig?.gasPrice || '0'),
            maxFeePerGas: undefined,
            maxPriorityFeePerGas: undefined,
            gasOptionType: this.config.gasOptionType ?? priorConfig?.gasOptionType
        };
    }
    static fromConfig(chainId, gasConfig = {}) {
        return new GasEditor(chainId, gasConfig);
    }
    static fromGasPrice(chainId, gasPrice = '0') {
        return new GasEditor(chainId, {
            gasPrice,
            maxFeePerGas: gasPrice,
            maxPriorityFeePerGas: gasPrice
        });
    }
    static fromTransaction(chainId, transaction) {
        return new GasEditor(chainId, {
            gas: transaction?.gas,
            gasPrice: transaction?.gasPrice,
            maxFeePerGas: transaction?.maxFeePerGas,
            maxPriorityFeePerGas: transaction?.maxPriorityFeePerGas
        });
    }
    static fromGasOption(chainId, gasOption) {
        return new GasEditor(chainId, {
            gasPrice: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxFeePerGas ?? 0, 0),
            maxFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxFeePerGas ?? 0, 0),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxPriorityFeePerGas ?? 0, 0)
        });
    }
    static fromGasOptions(chainId, gasOptions, gasOptionType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .GasOptionType */ .Qd.NORMAL) {
        return new GasEditor(chainId, {
            gasPrice: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxFeePerGas ?? 0, 0),
            maxFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxFeePerGas ?? 0, 0),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxPriorityFeePerGas ?? 0, 0)
        });
    }
}


/***/ }),

/***/ 48653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4697);
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);


/***/ }),

/***/ 4697:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),

/***/ 40098:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"dest","type":"address"},{"indexed":true,"internalType":"address","name":"donor","type":"address"}],"name":"DonationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"dest","type":"address"}],"name":"TokenWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"dest","type":"address"}],"internalType":"struct BulkCheckout.Donation[]","name":"_donations","type":"tuple[]"}],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_dest","type":"address"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_dest","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);
//# sourceMappingURL=chunk.8737.js.map