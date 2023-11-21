(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8774],{

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

/***/ 98746:
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
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
;// CONCATENATED MODULE: ./packages/plugins/ScamWarning/src/locales/i18n_generated.ts
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
function useScamWarningTrans() /**
      * `Safety Warning`
      */ /**
      * `Detecting whether user-published crypto websites are risky or malicious. Help to save your digital assets.`
      */ /**
      * `This domain is currently on the Mask Network warning list which may include malicious entries, phishing or scams.`
      */ /**
      * `These domains are currently on the Mask Network warning list which may include malicious entries, phishing or scams.`
      */ /**
      * - warning_description_one: `This domain is currently on the Mask Network warning list which may include malicious entries, phishing or scams.`
    
      * - warning_description_other: `These domains are currently on the Mask Network warning list which may include malicious entries, phishing or scams.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.mask.scam-warning");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
;// CONCATENATED MODULE: ./packages/plugins/ScamWarning/src/SiteAdaptor/components/PreviewCard.tsx








const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {},
        card: {
            padding: theme.spacing(1),
            color: theme.palette.maskColor.bottom,
            backgroundColor: theme.palette.maskColor.danger,
            borderRadius: theme.spacing(1)
        },
        title: {
            wordBreak: 'break-word'
        }
    }));
function PreviewCard({ links }) {
    const t = useScamWarningTrans();
    const { classes } = useStyles();
    const { value, loading } = (0,useAsync/* default */.Z)(()=>{
        return entry/* CryptoScamDB */.Vw.getScamWarnings((0,uniq/* default */.Z)(links));
    }, [
        links.join(',')
    ]);
    (0,usePluginWrapper/* usePluginWrapper */.f)(!(loading || !value?.length));
    if (!value?.length || loading) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme/* MaskDarkTheme */.H,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            p: 1.5,
            pt: 0,
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                className: classes.card,
                children: [
                    value.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h6",
                            fontWeight: 700,
                            color: "textPrimary",
                            children: x.url
                        }, x.url)),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        children: t.warning_description({
                            count: value.length
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/plugins/ScamWarning/src/base.ts + 7 modules
var base = __webpack_require__(45097);
// EXTERNAL MODULE: ./packages/plugins/ScamWarning/src/constants.ts
var constants = __webpack_require__(89697);
;// CONCATENATED MODULE: ./packages/plugins/ScamWarning/src/SiteAdaptor/index.tsx










const site = {
    ...base/* base */.u,
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Danger, {
                size: 36
            });
            return {
                ApplicationEntryID: base/* base */.u.ID,
                icon,
                category: 'dapp',
                name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "__plugin_name",
                    defaults: constants/* PLUGIN_NAME */.EW
                }),
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "__plugin_description",
                    defaults: constants/* PLUGIN_DESCRIPTION */.PP,
                    ns: base/* base */.u.ID
                })
            };
        })()
    ],
    DecryptedInspector: function Comp(props) {
        const links = (0,react.useMemo)(()=>{
            const x = (0,extract/* extractTextFromTypedMessage */.V)(props.message);
            if (x.isNone()) return null;
            return (0,parseURLs/* parseURLs */.l)(x.value, false);
        }, [
            props.message
        ]);
        if (!links) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
            links: links
        });
    },
    PostInspector () {
        const links = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
        if (!links) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
            links: links
        });
    },
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Danger, {
            size: 24
        }),
        backgroundGradient: 'rgba(255, 235, 237)'
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 84271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useValueRef)
/* harmony export */ });
/* unused harmony export useValueRefJSON */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function getServerSnapshot() {
    throw new Error('getServerSnapshot is not supported');
}
function useValueRef(ref) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)((f)=>ref.addListener(f), ()=>ref.value, getServerSnapshot);
}
/** @deprecated */ function useValueRefJSON(ref) {
    return useSyncExternalStore((f)=>ref.addListener(f), ()=>ref.asJSON);
}


/***/ }),

/***/ 23615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94245);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43204);


// Note: type refinement, see https://github.com/garronej/tss-react/issues/128
const { makeStyles } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});


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

/***/ 88505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (murmur2);


/***/ }),

/***/ 25969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ 89780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ 39935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   My: () => (/* binding */ insertStyles),
/* harmony export */   fp: () => (/* binding */ getRegisteredStyles)
/* harmony export */ });
/* unused harmony export registerStyles */
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ 2276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(57676);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


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

/***/ 34824:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 57676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(34824);
} else {}


/***/ }),

/***/ 70491:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,q=e>>>1;d<q;){var m=2*(d+1)-1,D=a[m],n=m+1,x=a[n];if(0>g(D,c))n<e&&0>g(x,D)?(a[d]=x,a[n]=c,d=n):(a[d]=D,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}exports.unstable_now=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,r=p.now();exports.unstable_now=function(){return p.now()-r}}
var t=[],u=[],v=1,w=null,y=3,z=!1,A=!1,B=!1,C="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending?navigator.scheduling.isInputPending.bind(navigator.scheduling):null;
function G(a){for(var b=h(u);null!==b;){if(null===b.callback)k(u);else if(b.startTime<=a)k(u),b.sortIndex=b.expirationTime,f(t,b);else break;b=h(u)}}function H(a){B=!1;G(a);if(!A)if(null!==h(t))A=!0,I(J);else{var b=h(u);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{a:{G(b);for(w=h(t);null!==w&&(!(w.expirationTime>b)||a&&!M());){var d=w.callback;if("function"===typeof d){w.callback=null;y=w.priorityLevel;var e=d(w.expirationTime<=b);b=exports.unstable_now();if("function"===typeof e){w.callback=e;G(b);var q=!0;break a}else w===h(t)&&k(t),G(b)}else k(t);w=h(t)}if(null!==w)q=!0;else{var m=h(u);null!==m&&K(H,m.startTime-b);q=!1}}return q}finally{w=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){C(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=C(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(t)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:v++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(u,a),null===h(t)&&a===h(u)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(t,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 75126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(70491);
} else {}


/***/ }),

/***/ 41425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=__webpack_require__(9578);exports.useSubscription=function(a){return b.useSyncExternalStore(a.subscribe,a.getCurrentValue)};


/***/ }),

/***/ 15628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(41425);
} else {}


/***/ }),

/***/ 37700:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(78996);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 9578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(37700);
} else {}


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


/***/ })

}]);
//# sourceMappingURL=chunk.8774.js.map