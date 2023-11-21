"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5367],{

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $e: () => (/* binding */ attachProfile),
/* harmony export */   I1: () => (/* binding */ setPluginMinimalModeEnabled),
/* harmony export */   Id: () => (/* binding */ queryPersonaByProfile),
/* harmony export */   MN: () => (/* binding */ signWithPersona),
/* harmony export */   OX: () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   Tk: () => (/* binding */ queryPersonaAvatar),
/* harmony export */   Tt: () => (/* binding */ createPersona),
/* harmony export */   Vf: () => (/* binding */ hasPaymentPassword),
/* harmony export */   W1: () => (/* binding */ __setUIContext__),
/* harmony export */   Xm: () => (/* binding */ requestHostPermission),
/* harmony export */   ZV: () => (/* binding */ fetchJSON),
/* harmony export */   _c: () => (/* binding */ currentPersona),
/* harmony export */   d4: () => (/* binding */ allPersonas),
/* harmony export */   f8: () => (/* binding */ openDashboard),
/* harmony export */   il: () => (/* binding */ querySocialIdentity),
/* harmony export */   lU: () => (/* binding */ openPopupWindow),
/* harmony export */   yy: () => (/* binding */ hasHostPermission)
/* harmony export */ });
// This file will be virtualized in the future.
// Currently all plugins access the same value, but we can virtualize them in the future.
// DO NOT add <T> to this function, you do not test if it is T right?
// (e.g. receive a function to check it validate: (x: unknown) => x is T)
// fetchJSON<T>(validate: (x: unknown) => x is T, input: RequestInfo | URL, init?: RequestInit): Promise<T>
/** Open Dashboard with a new window */ /** Open popup window */ /** Sign a message with persona (w or w/o popups) */ let allPersonas;
let currentPersona;
let queryPersonaAvatar;
let querySocialIdentity;
let fetchJSON;
let queryPersonaByProfile;
let openDashboard;
let openPopupWindow;
let signWithPersona;
let hasPaymentPassword;
let createPersona;
let setCurrentPersonaIdentifier;
let attachProfile;
let setPluginMinimalModeEnabled;
let hasHostPermission;
let requestHostPermission;
function __setUIContext__(value) {
    ({ allPersonas, currentPersona, queryPersonaAvatar, querySocialIdentity, fetchJSON, queryPersonaByProfile, openDashboard, openPopupWindow, signWithPersona, hasPaymentPassword, createPersona, setCurrentPersonaIdentifier, attachProfile, setPluginMinimalModeEnabled, hasHostPermission, requestHostPermission } = value);
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

/***/ 94685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: () => (/* binding */ useIsMinimalMode),
/* harmony export */   JR: () => (/* binding */ useActivatedPluginsSiteAdaptor),
/* harmony export */   jJ: () => (/* binding */ startPluginSiteAdaptor),
/* harmony export */   o7: () => (/* binding */ useActivatedPluginSiteAdaptor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85094);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30898);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88547);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70771);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50754);
}







const { events, activated, startDaemon, minimalMode } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_2__/* .createManager */ .m)((def)=>def.SiteAdaptor, _manage_js__WEBPACK_IMPORTED_MODULE_2__/* .createManager */ .m.NoManagedContext);
const activatedSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
events.on('activateChanged', ()=>activatedSub.value = [
        ...activated.plugins
    ]);
const minimalModeSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
events.on('minimalModeChanged', ()=>minimalModeSub.value = [
        ...minimalMode
    ]);
function useActivatedPluginsSiteAdaptor(minimalModeEqualsTo) {
    const minimalMode = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub);
    const result = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(activatedSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) return result.filter((x)=>minimalMode.includes(x.ID));
        else if (minimalModeEqualsTo === false) return result.filter((x)=>!minimalMode.includes(x.ID));
        (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        result,
        minimalMode,
        minimalModeEqualsTo
    ]);
}
useActivatedPluginsSiteAdaptor.visibility = {
    useMinimalMode: useActivatedPluginsSiteAdaptor.bind(null, true),
    useNotMinimalMode: useActivatedPluginsSiteAdaptor.bind(null, false),
    useAnyMode: useActivatedPluginsSiteAdaptor.bind(null, 'any')
};
function useIsMinimalMode(pluginID) {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub).includes(pluginID);
}
/**
 *
 * @param pluginID Get the plugin ID
 * @param visibility Should invisible plugin included?
 * @returns
 */ function useActivatedPluginSiteAdaptor(pluginID, minimalModeEqualsTo) {
    const plugins = useActivatedPluginsSiteAdaptor(minimalModeEqualsTo);
    const minimalMode = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const result = plugins.find((x)=>x.ID === pluginID);
        if (!result) return result;
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) {
            if (minimalMode.includes(result.ID)) return result;
            return undefined;
        } else if (minimalModeEqualsTo === false) {
            if (minimalMode.includes(result.ID)) return undefined;
            return result;
        }
        (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        pluginID,
        plugins,
        minimalMode,
        minimalModeEqualsTo
    ]);
}
function startPluginSiteAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store_js__WEBPACK_IMPORTED_MODULE_6__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        const status = def.enableRequirement.supports.sites[currentNetwork];
        if (def.enableRequirement.supports.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.supports.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ share),
/* harmony export */   EE: () => (/* binding */ __setSiteAdaptorContext__),
/* harmony export */   Ge: () => (/* binding */ getPostIdFromNewPostToast),
/* harmony export */   Ns: () => (/* binding */ lastRecognizedProfile),
/* harmony export */   P4: () => (/* binding */ getPostURL),
/* harmony export */   XD: () => (/* binding */ connectPersona),
/* harmony export */   Yg: () => (/* binding */ currentVisitingProfile),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   m$: () => (/* binding */ currentNextIDPlatform),
/* harmony export */   mO: () => (/* binding */ getUserIdentity),
/* harmony export */   oi: () => (/* binding */ postMessage)
/* harmony export */ });
/* unused harmony export getSearchedKeyword */
// This file will be virtualized in the future.
// Currently all plugins access the same value, but we can virtualize them in the future.
let lastRecognizedProfile;
let currentVisitingProfile;
let currentNextIDPlatform;
let currentPersonaIdentifier;
let getPostURL;
let share;
let getUserIdentity;
let getPostIdFromNewPostToast;
let postMessage;
let getSearchedKeyword;
let connectPersona;
function __setSiteAdaptorContext__(value) {
    ({ lastRecognizedProfile, currentVisitingProfile, currentNextIDPlatform, currentPersonaIdentifier, getPostURL, share, getUserIdentity, getPostIdFromNewPostToast, postMessage, getSearchedKeyword, connectPersona } = value);
}


/***/ }),

/***/ 78178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useCurrentVisitingIdentity)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8898);


function useCurrentVisitingIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .currentVisitingProfile */ .Yg);
}


/***/ }),

/***/ 58213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useLastRecognizedIdentity)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8898);



function useLastRecognizedIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .lastRecognizedProfile */ .Ns ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .UNDEFINED */ .i_);
}


/***/ }),

/***/ 37460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useSocialIdentity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8898);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49588);





/**
 * Get the social identity of the given identity
 */ function useSocialIdentity(identity) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            identity,
            _context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$
        ],
        enabled: Boolean(identity && _context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$),
        queryFn: async ()=>{
            if (!_context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$ || !identity) return null;
            return (0,_dom_context_js__WEBPACK_IMPORTED_MODULE_3__/* .querySocialIdentity */ .il)(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$, identity);
        },
        refetchOnWindowFocus: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.ownProofChanged.on(()=>result.refetch()), [
        result.refetch
    ]);
    return result;
}


/***/ }),

/***/ 79412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getAvailablePlugins)
/* harmony export */ });
function getAvailablePlugins(plugins, producer) {
    return producer ? producer(plugins) : plugins;
}


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ getPluginMessage),
/* harmony export */   kO: () => (/* binding */ DOMAIN_RPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceImplementationOfCreatePluginMessage__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61530);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40464);


/** @internal */ const DOMAIN_RPC = Symbol('create RPC instead of normal message');
/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = getPluginMessage(PLUGIN_ID)
 */ let getPluginMessage = (pluginID, type)=>{
    const domain = (type === DOMAIN_RPC ? '@plugin-rpc/' : '@plugin/') + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .WebExtensionMessage */ .$({
        domain
    });
    const events = messageCenter.events;
    messageCenter.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .G;
    cache.set(domain, events);
    return events;
};
function __workaround__replaceImplementationOfCreatePluginMessage__(newImpl) {
    getPluginMessage = newImpl;
}
const cache = new Map() // TODO: this type should be defined here, not shared-base
;


/***/ }),

/***/ 81601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(11017);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/plugins/Debugger/src/base.ts + 7 modules
var base = __webpack_require__(68303);
// EXTERNAL MODULE: ./packages/plugins/Debugger/src/constants.ts
var constants = __webpack_require__(98032);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useSocialAccountsAll.ts + 2 modules
var useSocialAccountsAll = __webpack_require__(91375);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Table/Table.js
var Table = __webpack_require__(84491);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(84173);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(26720);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(98894);
;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/TabContent.tsx




const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        overflow: 'auto'
    }
});
function TabContent({ identity, socialAccount }) {
    const { classes } = useStyles();
    const { data: socialAccounts, isLoading: loadingSocialAccounts } = (0,useSocialAccountsAll/* useSocialAccountsAll */.C)(identity);
    const renderIdentity = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
            dense: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Nickname"
                        }),
                        secondary: identity?.nickname
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Bio"
                        }),
                        secondary: identity?.bio
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Home Page"
                        }),
                        secondary: identity?.homepage
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    sx: {
                        display: 'block'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Avatar"
                        }),
                        secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: identity?.avatar,
                            style: {
                                maxWidth: 100
                            }
                        })
                    })
                })
            ]
        });
    };
    const renderAddressName = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            dense: true,
            children: socialAccount ? [
                socialAccount
            ].map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: [
                                x.pluginID,
                                " - ",
                                x.label
                            ]
                        }),
                        secondary: x.address
                    })
                }, `${x.pluginID}_${x.address}`)) : null
        });
    };
    const renderAllAddressNames = ()=>{
        if (loadingSocialAccounts) return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            dense: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                    primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading..."
                    })
                })
            })
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            dense: true,
            children: socialAccounts?.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: [
                                x.pluginID,
                                " - ",
                                x.label
                            ]
                        }),
                        secondary: x.address
                    })
                }, `${x.pluginID}_${x.address}`))
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Profile Data"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: renderIdentity()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Address Name"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: renderAddressName()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "All Address Names"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: renderAllAddressNames()
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useBlockNumber.ts






function useBlockNumber(pluginID, options) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: options?.chainId
    });
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        chainId,
        ...options
    });
    const { BlockNumberNotifier } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const asyncRetry = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return Web3.getBlockNumber();
    }, [
        chainId,
        Web3
    ]);
    (0,react.useEffect)(()=>{
        return BlockNumberNotifier?.emitter.on('update', (actualChainId)=>{
            if (actualChainId === chainId) asyncRetry.retry();
        }) ?? noop/* default */.Z;
    }, [
        chainId,
        asyncRetry.retry,
        BlockNumberNotifier
    ]);
    return asyncRetry;
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBlockTimestamp.ts
var useBlockTimestamp = __webpack_require__(49193);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useLookupAddress.ts
var useLookupAddress = __webpack_require__(80675);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingIdentity.ts
var useCurrentVisitingIdentity = __webpack_require__(78178);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useSocialIdentity.ts
var useSocialIdentity = __webpack_require__(37460);
;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingSocialIdentity.ts


/**
 * Get the social identity of the current visiting identity
 */ function useCurrentVisitingSocialIdentity() {
    const identity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    return (0,useSocialIdentity/* useSocialIdentity */.m)(identity);
}

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/helpers/joinsABTest.ts
var joinsABTest = __webpack_require__(56802);
;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/ConsoleContent.tsx








const ConsoleContent_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        overflow: 'auto'
    }
});
function ConsoleContent(props) {
    const { classes } = ConsoleContent_useStyles();
    const { pluginID: currentPluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { account, chainId, networkType, providerType } = (0,useContext/* useChainContext */.ql)();
    const { data: balance = '0' } = (0,useBalance/* useBalance */.K)();
    const { value: blockNumber = 0 } = useBlockNumber();
    const { value: blockTimestamp = 0 } = (0,useBlockTimestamp/* useBlockTimestamp */.o)();
    const { data: reversedName } = (0,useReverseAddress/* useReverseAddress */.$)(currentPluginID, account);
    const { value: lookedAddress } = (0,useLookupAddress/* useLookupAddress */.h)(currentPluginID, reversedName);
    const currentVisitingIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const lastRecognizedIdentity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const currentVisitingSocialIdentity = useCurrentVisitingSocialIdentity();
    (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(CrossIsolationEvents/* CrossIsolationMessages */.W.events.followLensDialogEvent);
    const table = [
        {
            name: 'A/B Testing',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: (0,joinsABTest/* joinsABTest */.G)() ? 'A' : 'B'
            })
        },
        {
            name: 'Account',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: Others.formatAddress(account, 4) || 'Not Connected'
            })
        },
        {
            name: 'ChainId',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: chainId
            })
        },
        {
            name: 'PluginID',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: currentPluginID
            })
        },
        {
            name: 'Network Type',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: networkType
            })
        },
        {
            name: 'Provider Type',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: providerType
            })
        },
        {
            name: 'Balance',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: balance
            })
        },
        {
            name: 'Block Number',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: blockNumber
            })
        },
        {
            name: 'Block Timestamp',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: blockTimestamp
            })
        },
        {
            name: 'Reversed Name',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: reversedName
            })
        },
        {
            name: 'Looked Address',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: lookedAddress
            })
        },
        {
            name: 'Visiting Identity',
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                variant: "body2",
                children: [
                    currentVisitingIdentity?.identifier?.userId,
                    " ",
                    currentVisitingIdentity?.isOwner ? 'OWNER' : ''
                ]
            })
        },
        {
            name: 'Owner Identity',
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                variant: "body2",
                children: [
                    lastRecognizedIdentity?.identifier?.userId,
                    " ",
                    lastRecognizedIdentity?.isOwner ? 'OWNER' : ''
                ]
            })
        },
        {
            name: 'Visiting Public Key',
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                style: {
                    width: 280,
                    wordBreak: 'break-all'
                },
                children: currentVisitingSocialIdentity.data?.publicKey
            })
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                children: table.map(({ name, content })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: content
                            })
                        ]
                    }, name))
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/message.ts
var message = __webpack_require__(9898);
;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/messages.ts


/**
     * Open console dialog
     */ /**
     * Open connection dialog
     */ /**
     * Open hub dialog
     */ /**
     * Open widget dialog
     */ const PluginDebuggerMessages = (0,message/* getPluginMessage */.db)(constants/* PLUGIN_ID */.Uu);

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/ConsoleDialog.tsx







function ConsoleDialog() {
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.consoleDialogUpdated);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Debugger",
        fullWidth: true,
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConsoleContent, {
                    onClose: closeDialog
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Persona.ts
var Persona = __webpack_require__(3545);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/ConnectionContent.tsx










const ConnectionContent_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        overflow: 'auto'
    }
});
function ConnectionContent(props) {
    const { classes } = ConnectionContent_useStyles();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const customNetwork = (0,react.useMemo)(()=>{
        return networks.find((x)=>x.type === types/* NetworkType */.td.CustomNetwork);
    }, [
        networks
    ]);
    const onAddNetwork = (0,react.useCallback)(async ()=>{
        await Network?.addNetwork({
            type: types/* NetworkType */.td.CustomNetwork,
            chainId: types/* ChainId */.a_.Mainnet,
            coinMarketCapChainId: '',
            coinGeckoChainId: '',
            coinGeckoPlatformId: '',
            name: 'Mainnet',
            network: 'mainnet',
            nativeCurrency: entry/* ChainResolver */.iv.nativeCurrency(types/* ChainId */.a_.Mainnet),
            rpcUrl: 'https://cloudflare-eth.com',
            explorerUrl: {
                url: 'https://etherscan.io/'
            },
            isCustomized: true
        });
    }, [
        Network
    ]);
    const onUseNetwork = (0,react.useCallback)(async ()=>{
        if (!customNetwork) return;
        await Network?.switchNetwork(customNetwork.ID);
    }, [
        customNetwork,
        Network
    ]);
    const onRemoveNetwork = (0,react.useCallback)(async ()=>{
        if (!customNetwork) return;
        await Network?.removeNetwork(customNetwork.ID);
    }, [
        customNetwork,
        Network
    ]);
    const onRenameNetwork = (0,react.useCallback)(async ()=>{
        if (!customNetwork) return;
        await Network?.updateNetwork(customNetwork.ID, {
            name: 'Ethereum Mainnet'
        });
    }, [
        customNetwork,
        Network
    ]);
    const onCaptureEvent = (0,react.useCallback)(async ()=>{
        providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Debug, src_types/* EventID */.HS.Debug);
    }, []);
    const onCaptureException = (0,react.useCallback)(async ()=>{
        providers/* Telemetry */.M.captureException(src_types/* ExceptionType */.wz.Error, src_types/* ExceptionID */.T$.Debug, new Error(`An error message ${Date.now()}.`));
    }, []);
    const onEstimateCallback = (0,react.useCallback)(async ()=>{
        const contract = entry/* Contract */.CH.getERC20Contract('0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7', {
            chainId: types/* ChainId */.a_.Mainnet
        });
        const estimatedGas = await entry/* Web3 */.Bv.estimateTransaction?.({
            from: '0x66b57885E8E9D84742faBda0cE6E3496055b012d',
            to: '0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7',
            value: '1',
            data: contract?.methods.approve('0x31f42841c2db5173425b5223809cf3a38fede360', '1').encodeABI()
        }, 0, {
            chainId: types/* ChainId */.a_.Mainnet,
            account: '0x66b57885E8E9D84742faBda0cE6E3496055b012d',
            paymentToken: '0x66b57885E8E9D84742faBda0cE6E3496055b012d',
            overrides: {
                gas: '88888',
                maxFeePerGas: '88888',
                maxPriorityFeePerGas: '88888'
            }
        });
        // eslint-disable-next-line no-alert
        alert(estimatedGas);
    }, []);
    const onTransferCallback = (0,react.useCallback)(()=>{
        return entry/* Web3 */.Bv.transferFungibleToken('0x0000000000000000000000000000000000000000', '0x96ec3286a049b42133c3ddd26777051612bdf61f', '100', undefined, {
            chainId,
            account
        });
    }, []);
    const onDeployCallback = (0,react.useCallback)(()=>{
        return entry/* Web3 */.Bv.deploy?.('0x790116d0685eB197B886DAcAD9C247f785987A4a', undefined, {
            chainId: types/* ChainId */.a_.Matic,
            account: '0x790116d0685eB197B886DAcAD9C247f785987A4a'
        });
    }, []);
    const onFundCallback = (0,react.useCallback)(()=>{
        return entry/* Web3 */.Bv.fund?.({
            publicKey: '',
            type: Persona/* ProofType */.e.Persona,
            payload: JSON.stringify({
                ownerAddress: '0x96ec3286a049b42133c3ddd26777051612bdf61f',
                nonce: 0
            }),
            signature: ''
        }, {
            chainId: types/* ChainId */.a_.Matic,
            account: '0x96ec3286a049b42133c3ddd26777051612bdf61f'
        });
    }, []);
    const onChangeOwnerChange = (0,react.useCallback)(()=>{
        return entry/* Web3 */.Bv.changeOwner?.('0x66b57885E8E9D84742faBda0cE6E3496055b012d', {
            chainId: types/* ChainId */.a_.Matic,
            account: '0x96ec3286a049b42133c3ddd26777051612bdf61f'
        });
    }, []);
    const onApproveFungibleTokenCallback = (0,react.useCallback)(()=>{
        if (pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return;
        return entry/* Web3 */.Bv.approveFungibleToken('0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7', '0x31f42841c2db5173425b5223809cf3a38fede360', '1', {
            chainId: types/* ChainId */.a_.Matic,
            account: '0x66b57885E8E9D84742faBda0cE6E3496055b012d',
            paymentToken: '0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7'
        });
    }, [
        pluginID
    ]);
    const onSign = (0,react.useCallback)(async (type)=>{
        const message = 'Hello World';
        const typedData = JSON.stringify({
            domain: {
                chainId: chainId.toString(),
                name: 'Ether Mail',
                verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
                version: '1'
            },
            message: {
                contents: 'Hello, Bob!',
                from: {
                    name: 'Cow',
                    wallets: [
                        '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
                        '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF'
                    ]
                },
                to: [
                    {
                        name: 'Bob',
                        wallets: [
                            '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
                            '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
                            '0xB0B0b0b0b0b0B000000000000000000000000000'
                        ]
                    }
                ]
            },
            primaryType: 'Mail',
            types: {
                Group: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'members',
                        type: 'Person[]'
                    }
                ],
                Mail: [
                    {
                        name: 'from',
                        type: 'Person'
                    },
                    {
                        name: 'to',
                        type: 'Person[]'
                    },
                    {
                        name: 'contents',
                        type: 'string'
                    }
                ],
                Person: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'wallets',
                        type: 'address[]'
                    }
                ]
            }
        });
        const transaction = {
            chainId: types/* ChainId */.a_.Mainnet,
            from: '0x66b57885E8E9D84742faBda0cE6E3496055b012d',
            to: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
            value: '0x1000',
            gas: '0x5208',
            gasPrice: '0x174876e800',
            nonce: 0,
            data: '0x'
        };
        const sign = async ()=>{
            switch(type){
                case 'message':
                    return entry/* Web3 */.Bv.signMessage('message', message);
                case 'typedData':
                    return entry/* Web3 */.Bv.signMessage('typedData', typedData);
                case 'transaction':
                    return entry/* Web3 */.Bv.signTransaction(transaction);
                default:
                    return '';
            }
        };
        const signed = await sign();
        // eslint-disable-next-line no-alert
        alert(`Signed: ${signed}`);
    }, [
        chainId
    ]);
    const onSwitchChain = (0,react.useCallback)(async (chainId)=>{
        try {
            await entry/* Web3 */.Bv.switchChain?.(chainId);
        } catch (error) {
            // eslint-disable-next-line no-alert
            if (error instanceof Error) alert(error.message);
        } finally{
            if (await entry/* Web3 */.Bv.getChainId() === chainId) {
                // eslint-disable-next-line no-alert
                alert(`Switched to chain ${chainId}`);
            } else {
                // eslint-disable-next-line no-alert
                alert(`Failed to switch to chain ${chainId}`);
            }
        }
    }, []);
    const onConnect = (0,react.useCallback)(async (chainId, providerType)=>{
        try {
            await entry/* Web3 */.Bv.connect({
                chainId,
                providerType
            });
        } catch (error) {
            // eslint-disable-next-line no-alert
            if (error instanceof Error) alert(error.message);
        }
    }, []);
    const onDisconnect = (0,react.useCallback)(async (providerType)=>{
        try {
            await entry/* Web3 */.Bv.disconnect({
                providerType
            });
        } catch (error) {
            // eslint-disable-next-line no-alert
            if (error instanceof Error) alert(error.message);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Add Custom Network"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onAddNetwork(),
                                    children: "Add Network"
                                })
                            })
                        ]
                    }),
                    customNetwork ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            whiteSpace: "nowrap",
                                            children: "Use Custom Network"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            size: "small",
                                            onClick: ()=>onUseNetwork(),
                                            children: "Use Network"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            whiteSpace: "nowrap",
                                            children: "Remove Custom Network"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                                            size: "small",
                                            onClick: ()=>onRemoveNetwork(),
                                            children: [
                                                "Remove ",
                                                customNetwork.name
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            whiteSpace: "nowrap",
                                            children: "Rename Custom Network"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                                            size: "small",
                                            onClick: ()=>onRenameNetwork(),
                                            children: [
                                                "Rename ",
                                                customNetwork.name
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Capture Event"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onCaptureEvent(),
                                    children: "Capture Event"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Capture Exception"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onCaptureException(),
                                    children: "Capture Exception"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Estimate"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onEstimateCallback(),
                                    children: "Estimate"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Transfer"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onTransferCallback(),
                                    children: "Transfer"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Deploy"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onDeployCallback(),
                                    children: "Deploy"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Fund"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onFundCallback(),
                                    children: "Fund"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Change Owner"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>onChangeOwnerChange(),
                                    children: "Change Owner"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Approve Fungible Token"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: onApproveFungibleTokenCallback,
                                    children: "Approve"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Approve Non-Fungible Token"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: onApproveFungibleTokenCallback,
                                    children: "Approve"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Sign Message"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>{
                                        switch(pluginID){
                                            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                                                onSign('message');
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Sign"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Sign Typed Data"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>{
                                        switch(pluginID){
                                            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                                                onSign('typedData');
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Sign"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Sign Transaction"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>{
                                        switch(pluginID){
                                            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                                                onSign('transaction');
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Sign"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Switch Chain"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: async ()=>{
                                        switch(pluginID){
                                            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                                                await onSwitchChain(chainId === types/* ChainId */.a_.Mainnet ? types/* ChainId */.a_.Matic : types/* ChainId */.a_.Mainnet);
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Switch Chain"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Connect Wallet"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: async ()=>{
                                        switch(pluginID){
                                            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                                                await onConnect(types/* ChainId */.a_.Mainnet, types/* ProviderType */.lP.MetaMask);
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Connect"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Disconnect Wallet"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: async ()=>{
                                        switch(pluginID){
                                            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                                                await onDisconnect(types/* ProviderType */.lP.MetaMask);
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Disconnect"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/ConnectionDialog.tsx







function ConnectionDialog() {
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.connectionDialogUpdated);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Connection",
        fullWidth: true,
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectionContent, {
                    onClose: closeDialog
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootMenu.ts
var ShadowRootMenu = __webpack_require__(25877);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TextField/TextField.js
var TextField = __webpack_require__(76550);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/HubContent.tsx









const HubContent_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        overflow: 'auto'
    }
});
function HubContent(props) {
    const { classes } = HubContent_useStyles();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const [keyword, setKeyword] = (0,react.useState)('PUNK');
    const [address, setAddress] = (0,react.useState)('0x932261f9fc8da46c4a22e31b45c4de60623848bf');
    const [tokenId, setTokenId] = (0,react.useState)('32342');
    const [sourceType, setSourceType] = (0,react.useState)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const APIs = [
        // gas options
        [
            'getGasOptions',
            [
                chainId
            ]
        ],
        // transactions
        [
            'getTransactions',
            [
                chainId,
                account
            ]
        ],
        // fungible tokens
        [
            'getFungibleToken',
            [
                address
            ]
        ],
        [
            'getFungibleAsset',
            [
                address
            ]
        ],
        [
            'getFungibleAssets',
            [
                account
            ]
        ],
        [
            'getFungibleTokenPrice',
            [
                chainId,
                address
            ]
        ],
        [
            'getFungibleTokenIconURLs',
            [
                chainId,
                address
            ]
        ],
        [
            'getFungibleTokensFromTokenList',
            [
                chainId
            ]
        ],
        [
            'getFungibleTokenSpenders',
            [
                chainId,
                account
            ]
        ],
        // non-fungible tokens
        [
            'getNonFungibleTokensFromTokenList',
            [
                chainId
            ]
        ],
        [
            'getNonFungibleTokenSpenders',
            [
                chainId,
                address
            ]
        ],
        [
            'getNonFungibleTokenContract',
            [
                address
            ]
        ],
        [
            'getNonFungibleCollectionsByOwner',
            [
                account
            ]
        ],
        [
            'getNonFungibleTokenEvents',
            [
                address,
                tokenId
            ]
        ],
        [
            'getNonFungibleTokenOffers',
            [
                address,
                tokenId
            ]
        ],
        [
            'getNonFungibleTokenListings',
            [
                address,
                tokenId
            ]
        ],
        [
            'getNonFungibleTokenOrders',
            [
                address,
                tokenId,
                specs/* OrderSide */.oU.Buy
            ]
        ],
        [
            'getNonFungibleAsset',
            [
                address,
                tokenId
            ]
        ],
        [
            'getNonFungibleAssets',
            [
                account
            ]
        ],
        [
            'getNonFungibleRarity',
            [
                address,
                tokenId
            ]
        ],
        [
            'getNonFungibleTokenFloorPrice',
            [
                address,
                tokenId
            ]
        ],
        [
            'getNonFungibleAssetsByCollection',
            [
                address
            ]
        ]
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Keyword"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    label: "Keyword",
                                    value: keyword,
                                    placeholder: "Enter keyword to search",
                                    size: "small",
                                    onChange: (e)=>setKeyword(e.target.value)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Contract Address"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    label: "Address",
                                    value: address,
                                    placeholder: "Enter contract address",
                                    size: "small",
                                    onChange: (e)=>setAddress(e.target.value)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Token ID"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    label: "Token Id",
                                    value: tokenId,
                                    placeholder: "Enter token id",
                                    size: "small",
                                    style: {
                                        marginTop: 8
                                    },
                                    onChange: (e)=>setTokenId(e.target.value)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Source Type"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        size: "small",
                                        onClick: (e)=>setAnchorEl(e.currentTarget),
                                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownRound, {
                                            size: 14
                                        }),
                                        children: sourceType ? (0,resolver/* resolveSourceTypeName */.lz)(sourceType) : 'NO PROVIDER'
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootMenu/* ShadowRootMenu */.d, {
                                        anchorEl: anchorEl,
                                        open: !!anchorEl,
                                        defaultValue: specs/* SourceType */.PO.OpenSea,
                                        onClose: ()=>setAnchorEl(null),
                                        children: (0,esm/* getEnumAsArray */.Yl)(specs/* SourceType */.PO).map((x)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                value: x.value,
                                                onClick: ()=>setSourceType(x.value),
                                                children: x.key
                                            }, x.key);
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    APIs.map(([key, parameters])=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        whiteSpace: "nowrap",
                                        children: key
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        size: "small",
                                        onClick: async ()=>{
                                            try {
                                                console.log(`Query ${key}:`);
                                                console.log(// @ts-expect-error the ...parameters call is unsafe
                                                await entry/* HubAll */.AB.use(pluginID)[key]?.(...parameters, {
                                                    chainId,
                                                    account,
                                                    sourceType
                                                }));
                                            } catch (error) {
                                                console.error(error);
                                            }
                                        },
                                        children: "Query"
                                    })
                                })
                            ]
                        }, key);
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/HubDialog.tsx








function HubDialog() {
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.hubDialogUpdated);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Hub",
        fullWidth: true,
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                value: {
                    chainId: types/* ChainId */.a_.Mainnet
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HubContent, {
                    onClose: closeDialog
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/AvatarDecorator.tsx


const AvatarDecorator_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#fff',
        zIndex: 10,
        '&:hover': {
            display: 'block'
        }
    }
});
function AvatarDecorator({ identity, persona, socialAccounts }) {
    const { classes } = AvatarDecorator_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        "data-nickname": identity?.nickname ?? 'N/A',
        "data-persona": persona ?? 'N/A',
        "data-address-list": JSON.stringify(socialAccounts)
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/getAvailablePlugins.ts
var getAvailablePlugins = __webpack_require__(79412);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/Widget.ts


function Widget(props) {
    const { name, pluginID, fallback, ...rest } = props;
    const plugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)(false);
    const WidgetComponent = (0,react.useMemo)(()=>{
        if (pluginID) return plugins.find((x)=>x.ID === pluginID)?.Widgets?.find((y)=>y.name === name)?.UI?.Widget;
        return null;
    }, [
        plugins
    ]);
    if (!WidgetComponent) return (0,react.createElement)(react.Fragment, {
        children: fallback
    });
    return (0,react.createElement)(WidgetComponent, rest);
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/WidgetContent.tsx




function WidgetContent(props) {
    const activatedPlugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    const displayPlugins = (0,getAvailablePlugins/* getAvailablePlugins */.q)(activatedPlugins, (plugins)=>{
        return plugins.filter((x)=>x.Widgets);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        children: displayPlugins.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        sx: {
                            mb: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                            field: x.name,
                            pluginID: x.ID
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        variant: "outlined",
                        sx: {
                            padding: 1
                        },
                        children: x.Widgets?.map((y)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Widget, {
                                pluginID: x.ID,
                                name: y.name
                            }, y.ID))
                    })
                ]
            }, x.ID))
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/WidgetDialog.tsx








function WidgetDialog() {
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.widgetDialogUpdated);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Widgets",
        fullWidth: true,
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                value: {
                    chainId: types/* ChainId */.a_.Mainnet
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WidgetContent, {
                    onClose: closeDialog
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/components/SearchResultInspector.tsx


function SearchResultInspector({ resultList }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: resultList[0].keyword
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Debugger/src/SiteAdaptor/index.tsx
















const site = {
    ...base/* base */.u,
    ApplicationEntries: [
        {
            ApplicationEntryID: `${constants/* PLUGIN_ID */.Uu}_Debugger`,
            RenderEntryComponent () {
                const { openDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.consoleDialogUpdated);
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                    title: constants/* PLUGIN_NAME */.EW,
                    disabled: false,
                    iconFilterColor: "",
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                        size: 36
                    }),
                    onClick: ()=>{
                        openDialog();
                    }
                });
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                size: 36
            }),
            name: constants/* PLUGIN_NAME */.EW
        },
        {
            ApplicationEntryID: `${constants/* PLUGIN_ID */.Uu}_Hub`,
            RenderEntryComponent () {
                const { openDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.hubDialogUpdated);
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                    title: "Hub",
                    disabled: false,
                    iconFilterColor: "",
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                        size: 36
                    }),
                    onClick: ()=>{
                        openDialog();
                    }
                });
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                size: 36
            }),
            name: constants/* PLUGIN_NAME */.EW
        },
        {
            ApplicationEntryID: `${constants/* PLUGIN_ID */.Uu}_Connection`,
            RenderEntryComponent () {
                const { openDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.connectionDialogUpdated);
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                    title: "Connection",
                    disabled: false,
                    iconFilterColor: "",
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                        size: 36
                    }),
                    onClick: ()=>{
                        openDialog();
                    }
                });
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                size: 36
            }),
            name: constants/* PLUGIN_NAME */.EW
        },
        {
            ApplicationEntryID: `${constants/* PLUGIN_ID */.Uu}_Widget`,
            RenderEntryComponent () {
                const { openDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(PluginDebuggerMessages.widgetDialogUpdated);
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                    title: "Widgets",
                    disabled: false,
                    iconFilterColor: "",
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                        size: 36
                    }),
                    onClick: ()=>{
                        openDialog();
                    }
                });
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                size: 36
            }),
            name: constants/* PLUGIN_NAME */.EW
        }
    ],
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ConsoleDialog, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectionDialog, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(HubDialog, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WidgetDialog, {})
            ]
        });
    },
    SearchResultInspector: {
        ID: `${constants/* PLUGIN_ID */.Uu}_searchResultInspector`,
        UI: {
            Content: SearchResultInspector
        },
        Utils: {
            shouldDisplay: (result)=>false
        }
    },
    SearchResultTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_resultTab1`,
            label: 'Tab 1',
            priority: 99999,
            Utils: {
                shouldDisplay: (result)=>false
            },
            UI: {
                TabContent ({ result }) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: "Tab 1"
                    });
                }
            }
        },
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_resultTab2`,
            label: 'Tab 2',
            priority: 99999,
            Utils: {
                shouldDisplay: (result)=>false
            },
            UI: {
                TabContent ({ result }) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: "Tab 2"
                    });
                }
            }
        }
    ],
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_profileTabContent`,
            label: 'Debugger',
            priority: 99999,
            UI: {
                TabContent: TabContent
            },
            Utils: {
                sorter (a, z) {
                    if (a.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.Address)) return 1;
                    if (z.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.Address)) return -1;
                    return 0;
                }
            }
        }
    ],
    AvatarRealm: {
        ID: `${constants/* PLUGIN_ID */.Uu}_avatar`,
        label: 'Debugger',
        priority: 99999,
        UI: {
            Decorator: AvatarDecorator
        }
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 11017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60307);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    // create an uuid for every hook
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        }), [
        onUpdateByRemote,
        event,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 3545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ RelationFavor),
/* harmony export */   e: () => (/* binding */ ProofType)
/* harmony export */ });
var /**
 * This interface contains the minimal information for UI display
 */ /** The nickname of the persona. Should use profile.nickname if it presents. */ /** The evm address of persona */ /** The nickname of the profile. Should be used in prior. */ RelationFavor;
(function(RelationFavor) {
    RelationFavor[RelationFavor["COLLECTED"] = -1] = "COLLECTED";
    RelationFavor[RelationFavor["UNCOLLECTED"] = 1] = "UNCOLLECTED";
    RelationFavor[RelationFavor["DEPRECATED"] = 0] = "DEPRECATED";
})(RelationFavor || (RelationFavor = {}));
var ProofType// JSON.stringify(payload)
;
(function(ProofType) {
    ProofType["Persona"] = 'persona';
    ProofType["EOA"] = 'eoa';
})(ProofType || (ProofType = {}));


/***/ }),

/***/ 25877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ShadowRootMenu)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8737);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootMenu = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootMenu.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 75607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ useBalance)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96732);







function useBalance(pluginID, options, /** Allow to control the request */ enabled = true) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        chainId,
        ...options
    });
    const { BalanceNotifier } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(pluginID);
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled: !!account && !!Web3 && enabled,
        queryKey: [
            'balance',
            pluginID,
            chainId,
            account,
            options
        ],
        queryFn: async ()=>{
            if (!account) return 0;
            return Web3.getBalance(account, {
                ...options,
                chainId
            });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return BalanceNotifier?.emitter.on('update', (ev)=>{
            if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .W)(account, ev.account)) result.refetch();
        }) ?? lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    }, [
        account,
        result.refetch,
        BalanceNotifier
    ]);
    return result;
}


/***/ }),

/***/ 49193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useBlockTimestamp)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96732);



function useBlockTimestamp(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Connection */ .T)(pluginID, {
        chainId,
        ...options
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return Web3.getBlockTimestamp();
    }, [
        Web3
    ]);
}


/***/ }),

/***/ 80675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useLookupAddress)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);




function useLookupAddress(pluginID, domain, expectedChainId) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    const { NameService } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!domain || !Others.isValidDomain(domain) || !NameService) return;
        return NameService.lookup?.(domain);
    }, [
        chainId,
        domain,
        NameService,
        Others
    ]);
}


/***/ }),

/***/ 72889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNetworks)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);





/**
 * Bulletin networks and custom networks.
 * There could be duplicate chian id among them, because that's allow to custom networks.
 */ function useNetworks(pluginID, uniqChainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networks ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const list = networks.filter((x)=>x.network === 'mainnet' || x.isCustomized);
        return uniqChainId ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(list, (x)=>x.chainId) : list;
    }, [
        networks,
        uniqChainId
    ]);
}


/***/ }),

/***/ 6379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useReverseAddress)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83977);


function useReverseAddress(pluginID, address, domainOnly) {
    const { NameService } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .d)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'reverse',
            address,
            domainOnly
        ],
        enabled: !!NameService?.reverse,
        queryFn: async ()=>{
            if (!address) return null;
            return await NameService?.reverse?.(address, domainOnly) || null;
        }
    });
}


/***/ }),

/***/ 91375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ useSocialAccountsAll)
});

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAddressesAll.ts



/**
 * Get all social addresses across all networks.
 */ function useSocialAddressesAll(identity, includes, sorter) {
    // TODO: to add flow
    const { IdentityService: EVM_IdentityService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { IdentityService: SolanaIdentityService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA);
    const userId = identity?.identifier?.userId;
    return (0,useQuery/* useQuery */.a)({
        enabled: !!identity && userId !== '$unknown',
        queryKey: [
            'all-social-addresses',
            userId,
            identity,
            includes
        ],
        queryFn: async ()=>{
            const allSettled = await Promise.allSettled([
                EVM_IdentityService,
                SolanaIdentityService
            ].map((x)=>x?.lookup(identity) ?? []));
            const listOfAddress = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []);
            const sorted = sorter && listOfAddress.length ? listOfAddress.sort(sorter) : listOfAddress;
            return includes?.length ? sorted.filter((x)=>includes.includes(x.type)) : sorted;
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountsFrom.ts


/**
 * Merge many social addresses into a social account.
 */ function useSocialAccountsFrom(socialAddresses) {
    const { IdentityService } = (0,useWeb3State/* useWeb3State */.d)();
    return (0,react.useMemo)(()=>{
        return IdentityService?.__mergeSocialAddressesAll__(socialAddresses);
    }, [
        socialAddresses,
        IdentityService
    ]);
}

;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountsAll.ts



/**
 * Get all social addresses across all networks.
 */ function useSocialAccountsAll(identity, includes, sorter) {
    const { data: socialAddressList = constants/* EMPTY_LIST */.rP, ...rest } = useSocialAddressesAll(identity, includes, sorter);
    const socialAccounts = useSocialAccountsFrom(socialAddressList) ?? constants/* EMPTY_LIST */.rP;
    return {
        ...rest,
        data: socialAccounts
    };
}


/***/ }),

/***/ 96732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useWeb3Connection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Connection(expectedPluginID, options) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3All */ .Ph.use(pluginID, options), [
        pluginID,
        JSON.stringify(options)
    ]);
}


/***/ }),

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58750);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .xB, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

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

/***/ 87167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIsRestoring),
/* harmony export */   u: () => (/* binding */ IsRestoringProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const IsRestoringContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const useIsRestoring = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsRestoringContext);
const IsRestoringProvider = IsRestoringContext.Provider;


//# sourceMappingURL=isRestoring.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.5367.js.map