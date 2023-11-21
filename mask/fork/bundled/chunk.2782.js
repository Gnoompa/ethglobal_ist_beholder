"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2782],{

/***/ 20355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useThemeLanguage)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64455);
/* harmony import */ var _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55166);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);




const langs = {
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.enUS]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .enUS */ ._z,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.jaJP]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .jaJP */ .jz,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.koKR]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .koKR */ .uG,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.zhTW]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .zhTW */ .cj,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.zhCN]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .zhCN */ .U1
};
function useThemeLanguage(language) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (language !== _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__) return;
        (0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .updateLanguage */ .BF)(language));
    }, [
        language
    ]);
    if (language === _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__) {
        // we've scheduled an update above.
        language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.enUS;
    }
    const displayLanguage = language;
    return [
        langs[displayLanguage] || _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .enUS */ ._z,
        false
    ];
}


/***/ }),

/***/ 94892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ usePluginTransField),
/* harmony export */   s: () => (/* binding */ PluginTransFieldRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);


function PluginTransFieldRender({ pluginID, field }) {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: field
    });
}
function usePluginTransField() {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}


/***/ }),

/***/ 45522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 16044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ PopupHomeTabType),
/* harmony export */   hA: () => (/* binding */ SOCIAL_MEDIA_ROUND_ICON_MAPPING),
/* harmony export */   mN: () => (/* binding */ EnhanceableSite_RSS3_NFT_SITE_KEY_map),
/* harmony export */   wV: () => (/* binding */ PERSONA_AVATAR_DB_NAMESPACE)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ICON_MAPPING, RSS3_NFT_SITE_KEY */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterX, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Minds, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterXRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.MindsRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramRoundColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
var RSS3_NFT_SITE_KEY;
(function(RSS3_NFT_SITE_KEY) {
    RSS3_NFT_SITE_KEY["TWITTER"] = '_nfts';
    RSS3_NFT_SITE_KEY["FACEBOOK"] = '_facebook_nfts';
    RSS3_NFT_SITE_KEY["INSTAGRAM"] = '_instagram_nfts';
})(RSS3_NFT_SITE_KEY || (RSS3_NFT_SITE_KEY = {}));
const EnhanceableSite_RSS3_NFT_SITE_KEY_map = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: RSS3_NFT_SITE_KEY.FACEBOOK,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: RSS3_NFT_SITE_KEY.TWITTER,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: RSS3_NFT_SITE_KEY.INSTAGRAM
};
const PERSONA_AVATAR_DB_NAMESPACE = 'com.maskbook.persona.avatar.storage';
var PopupHomeTabType;
(function(PopupHomeTabType) {
    PopupHomeTabType["SocialAccounts"] = 'Social Accounts';
    PopupHomeTabType["ConnectedWallets"] = 'Connected Wallets';
})(PopupHomeTabType || (PopupHomeTabType = {}));


/***/ }),

/***/ 3266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61536);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _applyToDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79836);




function CSSVariableInjector(props) {
    const { current: useConsistentTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        styles: (0,_applyToDOM_js__WEBPACK_IMPORTED_MODULE_4__/* .CSSVariableInjectorCSS */ .P)(colorScheme)
    });
}


/***/ }),

/***/ 80835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 26909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 60186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 39112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ MaskThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7133);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79783);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44513);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75369);
/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8330);





function MaskThemeProvider(props) {
    const { children, useTheme, useMaskIconPalette, CustomSnackbarOffsetY } = props;
    const theme = useTheme();
    const MaskIconPalette = useMaskIconPalette(theme);
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .compose */ .q)((jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .MaskIconPaletteContext */ .v.Provider, {
            value: MaskIconPalette,
            children: jsx
        }), (children)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            theme,
            children
        }), (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_index_js__WEBPACK_IMPORTED_MODULE_4__/* .CustomSnackbarProvider */ .YO, {
            disableWindowBlurListener: false,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            children: jsx,
            offsetY: CustomSnackbarOffsetY
        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {}),
            children
        ]
    }));
}


/***/ }),

/***/ 43666:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 69550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(43666);
} else {}


/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createContainer),
/* harmony export */   u: () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.2782.js.map