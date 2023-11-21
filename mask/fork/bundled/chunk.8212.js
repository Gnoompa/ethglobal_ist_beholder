(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8212],{

/***/ 39907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useActivatedPlugin)
/* harmony export */ });
/* harmony import */ var _manager_extension_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86766);
/* harmony import */ var _manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94685);


function useActivatedPlugin(pluginID, minimalModeEqualsTo) {
    const pluginSiteAdaptor = (0,_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_0__/* .useActivatedPluginSiteAdaptor */ .o7)(pluginID, minimalModeEqualsTo);
    const pluginExtensionPage = (0,_manager_extension_page_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginExtensionPage */ .d2)(pluginID);
    return pluginSiteAdaptor ?? pluginExtensionPage ?? null;
}


/***/ }),

/***/ 94892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 86766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d2: () => (/* binding */ useActivatedPluginExtensionPage),
/* harmony export */   fb: () => (/* binding */ useActivatedPluginsExtensionPage),
/* harmony export */   fn: () => (/* binding */ useIsMinimalModeExtensionPage),
/* harmony export */   rw: () => (/* binding */ startPluginHostExtensionPage)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85094);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93441);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84271);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70771);





const { activated, startDaemon, events, minimalMode } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.ExtensionPage, _manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m.NoManagedContext);
const activatedSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
events.on(_servie_events__WEBPACK_IMPORTED_MODULE_3__/* .ALL_EVENTS */ .Ko, ()=>activatedSub.value = [
        ...activated.plugins
    ]);
const minimalModeSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
events.on('minimalModeChanged', ()=>minimalModeSub.value = [
        ...minimalMode
    ]);
function useIsMinimalModeExtensionPage(pluginID) {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(minimalModeSub).includes(pluginID);
}
function useActivatedPluginsExtensionPage() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(activatedSub);
}
function useActivatedPluginExtensionPage(pluginID) {
    const plugins = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(activatedSub);
    return plugins.find((x)=>x.ID === pluginID);
}
function startPluginHostExtensionPage(host) {
    startDaemon(host);
}


/***/ }),

/***/ 94685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 64081:
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
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/plugins/Approval/src/base.ts + 8 modules
var base = __webpack_require__(26723);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkTab/index.tsx
var NetworkTab = __webpack_require__(59312);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(39907);
;// CONCATENATED MODULE: ./packages/plugins/Approval/src/locales/i18n_generated.ts
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
function useApprovalTrans() /**
      * `Approval`
      */ /**
      * `Collectibles`
      */ /**
      * `Tokens`
      */ /**
      * `No approved contract records.`
      */ /**
      * `Contract`
      */ /**
      * `Loading`
      */ /**
      * `Approved Amount`
      */ /**
      * `Approved Amount`
      */ /**
      * `Collection Approval`
      */ /**
      * `Infinite`
      */ /**
      * `Revoke`
      */ /**
      * `Revoking`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.maskbook.approval");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js
var tinycolor = __webpack_require__(89204);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(13414);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenSpenders.ts
var useFungibleTokenSpenders = __webpack_require__(54165);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/formatSpendingCap.ts


/**
 * Fetched Spending cap where it is already decimals-handled.
 * @param amount
 */ function formatSpendingCap(amount) {
    return (0,number/* isGreaterThan */.T1)(amount, '1e+10') ? 'Infinite' : (0,number/* isLessThan */.FI)(amount, '1e-6') ? '< 0.000001' : new bignumber/* BigNumber */.O(amount).toFixed(6);
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
;// CONCATENATED MODULE: ./packages/plugins/Approval/src/SiteAdaptor/ApprovalLoadingContent.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        approvalEmptyOrLoadingWrapper: {
            flexGrow: 1,
            width: '100%',
            height: 360,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        approvalEmptyOrLoadingContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14
        },
        loadingIcon: {
            width: 36,
            height: 36,
            marginBottom: 13,
            '@keyframes loadingAnimation': {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(360deg)'
                }
            },
            animation: 'loadingAnimation 1s linear infinite'
        },
        loadingText: {
            color: theme.palette.text.primary
        }
    }));
function ApprovalLoadingContent() {
    const { classes, cx } = useStyles();
    const t = useApprovalTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.approvalEmptyOrLoadingWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: cx(classes.approvalEmptyOrLoadingContent, classes.loadingText),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleLoading, {
                    className: classes.loadingIcon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.loading()
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Approval/src/SiteAdaptor/ApprovalEmptyContent.tsx





const ApprovalEmptyContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        approvalEmptyOrLoadingWrapper: {
            flexGrow: 1,
            width: '100%',
            height: 360,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        approvalEmptyOrLoadingContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14
        },
        emptyText: {
            color: theme.palette.text.secondary
        },
        emptyIcon: {
            width: 36,
            height: 36,
            marginBottom: 13
        }
    }));
function ApprovalEmptyContent() {
    const { classes, cx } = ApprovalEmptyContent_useStyles();
    const t = useApprovalTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.approvalEmptyOrLoadingWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: cx(classes.approvalEmptyOrLoadingContent, classes.emptyText),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                    className: classes.emptyIcon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.no_approved_contract_records()
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Approval/src/SiteAdaptor/ApprovalTokenContent.tsx













const ApprovalTokenContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        approvalContentWrapper: {
            flexGrow: 1,
            width: 565,
            paddingTop: 8,
            marginLeft: 16,
            display: 'flex',
            flexDirection: 'column'
        },
        listItemWrapper: {
            width: '100%',
            height: 90,
            padding: 0,
            marginTop: 4,
            background: theme.palette.common.white,
            borderRadius: 8,
            marginBottom: theme.spacing(1)
        },
        listItem: {
            width: '100%',
            height: 90,
            padding: 12,
            borderRadius: 8,
            marginBottom: 0,
            background: props?.listItemBackground ?? theme.palette.background.default,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&:before': {
                position: 'absolute',
                content: '""',
                top: 30,
                left: 381,
                zIndex: 0,
                width: 114,
                opacity: 0.2,
                height: 61,
                filter: 'blur(1.5px)',
                background: props?.listItemBackgroundIcon,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '114px 114px'
            }
        },
        listItemInfo: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            '& > div': {
                display: 'flex'
            }
        },
        logoIcon: {
            borderRadius: 999,
            width: 18,
            height: 18,
            marginRight: '4px !important'
        },
        spenderLogoIcon: {
            width: 16,
            height: 16,
            marginRight: 4
        },
        link: {
            width: 16,
            height: 16
        },
        linkOutIcon: {
            color: theme.palette.maskColor.secondaryDark,
            marginLeft: 2
        },
        spenderMaskLogoIcon: {
            display: 'inline-block',
            marginRight: 4,
            width: 16,
            height: 16,
            '& > svg': {
                width: 16,
                height: 16
            },
            '& > span': {
                width: 16,
                height: 16
            }
        },
        contractInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        primaryText: {
            fontSize: 14,
            fontWeight: 700,
            marginRight: 4,
            color: theme.palette.maskColor.dark
        },
        secondaryText: {
            fontSize: 14,
            fontWeight: 400,
            marginRight: 4,
            color: theme.palette.maskColor.secondaryDark
        },
        button: {
            minWidth: 80,
            height: 32,
            fontSize: 12,
            color: theme.palette.common.white,
            background: theme.palette.common.black,
            flex: 'initial !important',
            '&:disabled': {
                color: theme.palette.common.white,
                background: theme.palette.common.black
            },
            '&:hover': {
                color: theme.palette.common.white,
                background: theme.palette.common.black,
                boxShadow: `0 8px 25px ${(0,tinycolor/* default */.Z)(theme.palette.common.black).setAlpha(0.3).toRgbString()}`
            }
        },
        chainBoundary: {
            width: 'auto !important'
        }
    }));
function ApprovalTokenContent({ chainId }) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { data: spenders, isLoading, refetch } = (0,useFungibleTokenSpenders/* useFungibleTokenSpenders */.D)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { classes } = ApprovalTokenContent_useStyles({
        listItemBackground: networkDescriptor?.backgroundGradient,
        listItemBackgroundIcon: networkDescriptor ? `url("${networkDescriptor.icon}")` : undefined
    });
    if (isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalLoadingContent, {});
    if (!spenders || spenders.length === 0) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalEmptyContent, {});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.approvalContentWrapper,
        children: spenders.map((spender)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalTokenItem, {
                spender: spender,
                networkDescriptor: networkDescriptor,
                chainId: chainId,
                retry: refetch
            }, `${spender.address}.${spender.tokenInfo.address}`))
    });
}
function ApprovalTokenItem(props) {
    const { networkDescriptor, spender, chainId, retry } = props;
    const t = useApprovalTrans();
    const { classes, cx } = ApprovalTokenContent_useStyles({
        listItemBackground: networkDescriptor?.backgroundGradient,
        listItemBackgroundIcon: `url("${networkDescriptor?.icon}")`
    });
    const [_, transactionState, approveCallback] = (0,useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S)(spender.tokenInfo.address, '0', spender.address, retry, chainId);
    const { data: token } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, spender.tokenInfo.address, undefined, {
        chainId
    });
    const amount = spender.amount ? spender.amount : spender.rawAmount ? (0,number/* leftShift */.w5)(spender.rawAmount, token?.decimals) : undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.listItemWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
            className: classes.listItem,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.listItemInfo,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                    address: spender.tokenInfo.address,
                                    className: classes.logoIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.primaryText,
                                    children: spender.tokenInfo.symbol || token?.symbol
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.secondaryText,
                                    children: spender.tokenInfo.name || token?.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.contractInfo,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.secondaryText,
                                    children: t.contract()
                                }),
                                !spender.logo ? null : typeof spender.logo === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: spender.logo,
                                    className: classes.spenderLogoIcon
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.spenderMaskLogoIcon,
                                    children: spender.logo ?? ''
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.primaryText,
                                    children: spender.name || entry/* Others */.ej.formatAddress(spender.address, 4)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    className: classes.link,
                                    href: entry/* Others */.ej.explorerResolver.addressLink(chainId, spender.address) ?? '',
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                        className: cx(classes.spenderLogoIcon, classes.linkOutIcon)
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.secondaryText,
                                    children: t.approved_amount()
                                }),
                                amount ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.primaryText,
                                    children: formatSpendingCap(amount)
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedChainId: chainId,
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    className: classes.chainBoundary,
                    classes: {
                        switchButton: classes.button
                    },
                    ActionButtonPromiseProps: {
                        fullWidth: false,
                        init: t.revoke(),
                        startIcon: null,
                        failIcon: null,
                        waitingIcon: null,
                        className: classes.button,
                        failedButtonStyle: classes.button,
                        waiting: t.revoking(),
                        complete: t.revoke(),
                        failed: t.revoke()
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        onClick: ()=>approveCallback(true, true),
                        disabled: transactionState.loadingApprove,
                        loading: transactionState.loadingApprove,
                        className: classes.button,
                        children: transactionState.loadingApprove ? t.revoking() : t.revoke()
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleCollections.ts
var useNonFungibleCollections = __webpack_require__(26896);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleTokenContract.ts
var useNonFungibleTokenContract = __webpack_require__(34425);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC721ContractSetApproveForAllCallback.ts
var useERC721ContractSetApproveForAllCallback = __webpack_require__(43389);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/plugins/Approval/src/SiteAdaptor/ApprovalNFTContent.tsx
















const ApprovalNFTContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        approvalContentWrapper: {
            flexGrow: 1,
            width: 565,
            paddingTop: 8,
            marginLeft: 16,
            display: 'flex',
            flexDirection: 'column'
        },
        listItemWrapper: {
            width: '100%',
            height: 90,
            padding: 0,
            marginTop: 4,
            background: theme.palette.common.white,
            borderRadius: 8,
            marginBottom: theme.spacing(1)
        },
        listItem: {
            width: '100%',
            height: 90,
            padding: 12,
            borderRadius: 8,
            marginBottom: 0,
            background: props?.listItemBackground ?? theme.palette.background.default,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&:before': {
                position: 'absolute',
                content: '""',
                top: 30,
                left: 381,
                zIndex: 0,
                width: 114,
                opacity: 0.2,
                height: 61,
                filter: 'blur(1.5px)',
                background: props?.listItemBackgroundIcon,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '114px 114px'
            }
        },
        listItemInfo: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            '& > div': {
                display: 'flex'
            }
        },
        logoIcon: {
            borderRadius: 999,
            width: 18,
            height: 18,
            marginRight: '4px !important'
        },
        spenderLogoIcon: {
            width: 16,
            height: 16,
            marginRight: 4
        },
        link: {
            width: 16,
            height: 16
        },
        linkOutIcon: {
            color: theme.palette.maskColor.secondaryDark,
            marginLeft: 2
        },
        spenderMaskLogoIcon: {
            display: 'inline-block',
            marginRight: 4,
            width: 16,
            height: 16,
            '& > svg': {
                width: 16,
                height: 16
            },
            '& > span': {
                width: 16,
                height: 16
            }
        },
        contractInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        primaryText: {
            fontSize: 14,
            fontWeight: 700,
            marginRight: 4,
            color: theme.palette.maskColor.dark
        },
        secondaryText: {
            fontSize: 14,
            fontWeight: 400,
            marginRight: 4,
            color: theme.palette.maskColor.secondaryDark
        },
        button: {
            width: 80,
            height: 32,
            fontSize: 12,
            color: theme.palette.common.white,
            background: theme.palette.common.black,
            flex: 'initial !important',
            '&:disabled': {
                color: theme.palette.common.white,
                background: theme.palette.common.black
            },
            '&:hover': {
                color: theme.palette.common.white,
                background: theme.palette.common.black,
                boxShadow: `0 8px 25px ${(0,tinycolor/* default */.Z)(theme.palette.common.black).setAlpha(0.3).toRgbString()}`
            }
        },
        chainBoundary: {
            width: 'auto !important'
        }
    }));
function ApprovalNFTContent({ chainId }) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { value: spenderList, loading } = (0,useAsync/* default */.Z)(async ()=>entry/* Hub */.Xb.getNonFungibleTokenSpenders(chainId, account), [
        chainId,
        account
    ]);
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { classes } = ApprovalNFTContent_useStyles({
        listItemBackground: networkDescriptor?.backgroundGradient,
        listItemBackgroundIcon: networkDescriptor ? `url("${networkDescriptor?.icon}")` : undefined
    });
    const { data: collections = constants/* EMPTY_LIST */.rP } = (0,useNonFungibleCollections/* useNonFungibleCollections */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalLoadingContent, {});
    if (!spenderList || spenderList.length === 0) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalEmptyContent, {});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.approvalContentWrapper,
        children: spenderList.map((spender, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalNFTItem, {
                spender: spender,
                networkDescriptor: networkDescriptor,
                chainId: chainId,
                collection: collections.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, spender.contract.address))
            }, i))
    });
}
function ApprovalNFTItem(props) {
    const { networkDescriptor, spender, chainId, collection } = props;
    const t = useApprovalTrans();
    const [cancelled, setCancelled] = (0,react.useState)(false);
    const { classes, cx } = ApprovalNFTContent_useStyles({
        listItemBackground: networkDescriptor?.backgroundGradient,
        listItemBackgroundIcon: `url("${networkDescriptor?.icon}")`
    });
    const [approveState, approveCallback] = (0,useERC721ContractSetApproveForAllCallback/* useERC721ContractSetApproveForAllCallback */.a)(spender.contract.address, spender.address, false, ()=>setCancelled(true), chainId);
    const { value: contractDetailed } = (0,useNonFungibleTokenContract/* useNonFungibleTokenContract */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, spender.contract.address ?? '', src_types/* SchemaType */.XQ.ERC721, {
        chainId
    });
    return cancelled ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.listItemWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
            className: classes.listItem,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.listItemInfo,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                    address: spender.contract.address,
                                    name: spender.contract.name,
                                    label: "",
                                    logoURL: collection?.iconURL ?? '',
                                    className: classes.logoIcon,
                                    tokenType: specs/* TokenType */.iv.NonFungible
                                }),
                                contractDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.primaryText,
                                    children: contractDetailed?.symbol || spender.contract.name || contractDetailed?.name || collection?.name
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.secondaryText,
                                    children: spender.contract.name || contractDetailed?.name || collection?.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.contractInfo,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.secondaryText,
                                    children: t.contract()
                                }),
                                !spender.logo ? null : typeof spender.logo === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: spender.logo,
                                    className: classes.spenderLogoIcon
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.spenderMaskLogoIcon,
                                    children: spender.logo ?? ''
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.primaryText,
                                    children: spender.name ?? entry/* Others */.ej.formatAddress(spender.address, 4)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    className: classes.link,
                                    href: entry/* Others */.ej.explorerResolver.addressLink(chainId, spender.address) ?? '',
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                        className: cx(classes.spenderLogoIcon, classes.linkOutIcon)
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.secondaryText,
                                    children: t.collection_approval()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.primaryText,
                                    children: collection?.balance ?? spender.amount
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedChainId: chainId,
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    className: classes.chainBoundary,
                    classes: {
                        switchButton: classes.button
                    },
                    ActionButtonPromiseProps: {
                        fullWidth: false,
                        init: t.revoke(),
                        startIcon: null,
                        failIcon: null,
                        waitingIcon: null,
                        className: classes.button,
                        failedButtonStyle: classes.button,
                        waiting: t.revoking(),
                        complete: t.revoke(),
                        failed: t.revoke()
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        onClick: approveCallback,
                        disabled: approveState.loading,
                        loading: approveState.loading,
                        className: classes.button,
                        children: approveState.loading ? t.revoking() : t.revoke()
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Approval/src/SiteAdaptor/ApprovalDialog.tsx













const ApprovalDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        dialogRoot: {
            width: 600,
            height: 620,
            overflowX: 'hidden'
        },
        dialogContent: {
            width: 600,
            background: theme.palette.maskColor.bottom,
            padding: 0,
            margin: 'auto',
            overflowX: 'hidden'
        },
        contentWrapper: {
            width: 602,
            padding: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100%',
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 18
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.maskColor.secondaryLine,
                backgroundClip: 'padding-box'
            }
        },
        dialogTitle: {
            '& > p': {
                overflow: 'visible'
            }
        },
        abstractTabWrapper: {
            width: '100%',
            paddingBottom: theme.spacing(2)
        },
        approvalWrapper: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%'
        },
        footer: {
            position: 'sticky',
            bottom: 0
        }
    }));
var ApprovalDialog_Tabs;
(function(Tabs) {
    Tabs["tokens"] = 'Tokens';
    Tabs["collectibles"] = 'Collectibles';
})(ApprovalDialog_Tabs || (ApprovalDialog_Tabs = {}));
function ApprovalDialog({ open, onClose }) {
    const t = useApprovalTrans();
    const { classes } = ApprovalDialog_useStyles();
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)(ApprovalDialog_Tabs.tokens, ApprovalDialog_Tabs.collectibles);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            title: t.plugin_name(),
            onClose: onClose,
            classes: {
                paper: classes.dialogRoot,
                dialogTitle: classes.dialogTitle
            },
            titleTabs: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                variant: "base",
                onChange: onChange,
                "aria-label": "Savings",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.tokens(),
                        value: ApprovalDialog_Tabs.tokens
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.collectibles(),
                        value: ApprovalDialog_Tabs.collectibles
                    })
                ]
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.dialogContent,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalWrapper, {
                    tab: currentTab
                })
            })
        })
    });
}
function ApprovalWrapper(props) {
    const { tab } = props;
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const approvalDefinition = (0,useActivatedPlugin/* useActivatedPlugin */.R)(PluginID/* PluginID */.P.Approval, 'any');
    const chainIdList = (0,react.useMemo)(()=>{
        return (0,compact/* default */.Z)(approvalDefinition?.enableRequirement.web3?.[PluginID/* NetworkPluginID */.F.PLUGIN_EVM]?.supportedChainIds ?? constants/* EMPTY_LIST */.rP);
    }, [
        approvalDefinition
    ]);
    const { classes } = ApprovalDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.approvalWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.abstractTabWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                    chains: chainIdList,
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.contentWrapper,
                children: tab === ApprovalDialog_Tabs.tokens ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalTokenContent, {
                    chainId: chainId
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalNFTContent, {
                    chainId: chainId
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                className: classes.footer,
                requiredSupportPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Approval/src/SiteAdaptor/index.tsx












const site = {
    ...base/* base */.u,
    init (signal) {},
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Approval, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.Approval,
                i18nKey: "plugin_name"
            });
            const iconFilterColor = 'rgba(251, 176, 59, 0.3)';
            return {
                ApplicationEntryID: base/* base */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
                    const clickHandler = ()=>setOpen(true);
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                                ...EntryComponentProps,
                                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                                    field: name,
                                    pluginID: base/* base */.u.ID
                                }),
                                iconFilterColor: iconFilterColor,
                                icon: icon,
                                onClick: ()=>{
                                    EntryComponentProps.onClick ? EntryComponentProps.onClick?.(clickHandler, PluginID/* NetworkPluginID */.F.PLUGIN_EVM) : clickHandler();
                                    providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryAppApprovalOpen);
                                }
                            }),
                            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                                value: {
                                    pluginID
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApprovalDialog, {
                                    open: true,
                                    onClose: ()=>setOpen(false)
                                })
                            }) : null
                        ]
                    });
                },
                appBoardSortingDefaultPriority: 11,
                icon,
                name,
                iconFilterColor
            };
        })()
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 62384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ SingletonModal)
/* harmony export */ });
/* unused harmony export SingletonModalQueued */
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93441);


class SingletonModal {
    constructor(){
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.abort = this.abort.bind(this);
        this.openAndWaitForClose = this.openAndWaitForClose.bind(this);
    }
    emitter = new _servie_events__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
    onOpen;
    onClose;
    onAbort;
    dispatchPeek;
    dispatchOpen;
    dispatchClose;
    dispatchAbort;
    /**
     * Register a React modal component that implemented a forwarded ref.
     * The ref item should be fed with open and close methods.
     */ register = (creator)=>{
        if (!creator) {
            this.dispatchOpen = undefined;
            this.dispatchClose = undefined;
            this.dispatchAbort = undefined;
            return;
        }
        const ref = creator((props)=>{
            this.onOpen?.(props);
            this.emitter.emit('open', props);
        }, (props)=>{
            this.onClose?.(props);
            this.emitter.emit('close', props);
        }, (error)=>{
            this.onAbort?.(error);
            this.emitter.emit('abort', error);
        });
        this.dispatchPeek = ref.peek;
        this.dispatchOpen = ref.open;
        this.dispatchClose = ref.close;
        this.dispatchAbort = ref.abort;
    };
    /**
     * Peek the open state of the React modal component.
     */ peek() {
        return this.dispatchPeek?.() ?? false;
    }
    /**
     * Open the registered modal component with props
     * @param props
     */ open(props) {
        if (typeof this.dispatchOpen === 'undefined') console.warn("[SingletonModal]: The modal hasn't registered yet.");
        this.dispatchOpen?.(props);
    }
    /**
     * Close the registered modal component with props
     * @param props
     */ close(props) {
        this.dispatchClose?.(props);
    }
    /**
     * Abort the registered modal component with Error
     */ abort(error) {
        this.dispatchAbort?.(error);
    }
    /**
     * Open the registered modal component and wait for it closes
     * @param props
     */ openAndWaitForClose(props) {
        return new Promise((resolve, reject)=>{
            this.open(props);
            this.onClose = (props)=>resolve(props);
            this.onAbort = (error)=>reject(error);
        });
    }
}
class SingletonModalQueued extends (/* unused pure expression or super */ null && (SingletonModal)) {
    opened = false;
    tasks = [];
    constructor(){
        super();
        this.emitter.on('open', ()=>{
            this.opened = true;
        });
        this.emitter.on('close', ()=>{
            this.opened = false;
            this.cleanup();
        });
        this.emitter.on('abort', ()=>{
            this.opened = false;
            this.cleanup();
        });
    }
    open(props) {
        if (!this.opened) {
            super.open(props);
            return;
        }
        this.tasks.push({
            props
        });
    }
    close(props) {
        if (!this.opened) return;
        super.close(props);
    }
    openAndWaitForClose(props) {
        if (!this.opened) return super.openAndWaitForClose(props);
        const d = defer();
        this.tasks.push({
            props,
            defer: d
        });
        return d[0];
    }
    async cleanup() {
        if (this.opened || !this.tasks.length) return;
        await delay(300);
        const { props, defer } = this.tasks.shift();
        this.open(props);
        if (!defer) return;
        this.onClose = (props)=>defer[1](props);
        this.onAbort = (error)=>defer[2](error);
    }
}


/***/ }),

/***/ 38655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ ChainBoundary)
});

// UNUSED EXPORTS: ChainBoundaryWithoutContext

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useAllowTestnet.ts



function useAllowTestnet(pluginID) {
    const { Settings } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,use_subscription.useSubscription)(Settings?.allowTestnet ?? ( false ? 0 : Subscriptions/* FALSE */.Dv));
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        tooltip: {
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            borderRadius: 4,
            padding: 10,
            maxWidth: 260
        },
        arrow: {
            color: theme.palette.common.black
        },
        connectWallet: {
            '& > .MuiButton-startIcon': {
                lineHeight: 1
            }
        }
    }));
/** The expected network plugin ID */ /** The expected sub-network under the network plugin */ /** Judge the network is available for children components */ function ChainBoundaryWithoutContext(props) {
    const { expectedPluginID, expectedChainId, expectedAccount, actualNetworkPluginID, switchText, forceShowingWrongNetworkButton = false, disableConnectWallet = false, predicate = (actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { pluginID: actualPluginID } = (0,useContext/* useNetworkContext */.gK)(actualNetworkPluginID);
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(actualPluginID);
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const { account, chainId: actualChainId, providerType: actualProviderType } = (0,useContext/* useChainContext */.ql)({
        account: expectedAccount
    });
    const expectedOthers = (0,useWeb3Others/* useWeb3Others */.v)(expectedPluginID);
    const expectedAllowTestnet = useAllowTestnet(expectedPluginID);
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)(actualPluginID);
    const expectedChainName = expectedOthers.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(expectedPluginID, expectedChainId);
    const expectedChainAllowed = expectedOthers.chainResolver.isValidChainId(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID === expectedPluginID;
    const isMatched = predicate(actualPluginID, actualChainId);
    const [{ loading }, onSwitchChain] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (actualProviderType !== types/* ProviderType */.lP.WalletConnect || isMatched || !expectedChainAllowed) return;
            await Web3.switchChain?.(expectedChainId);
            await (0,esm/* delay */.gw)(1500);
            return 'complete';
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === 'Chain currently not supported' || error.message === 'Invalid Request') {
                    showSnackbar(t.plugin_wallet_switch_network_title(), {
                        processing: false,
                        variant: 'error',
                        message: t.plugin_wallet_unsupported_chain({
                            network: expectedChainName ?? ''
                        }),
                        autoHideDuration: 5000
                    });
                } else {
                    showSnackbar(t.plugin_wallet_switch_network_title(), {
                        processing: false,
                        variant: 'error',
                        message: t.plugin_wallet_switch_chain_failed(),
                        autoHideDuration: 5000
                    });
                }
            }
            return 'failed';
        }
    }, [
        expectedChainAllowed,
        isMatched,
        expectedChainId,
        actualProviderType,
        Web3,
        expectedChainName
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip,
                arrow: classes.arrow
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: props.className,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                children: children
            })
        });
    };
    if (!chainIdValid && !expectedChainAllowed && forceShowingWrongNetworkButton) return renderBox(!props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        fullWidth: true,
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
            size: 18
        }),
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonPromiseProps,
        children: t.plugin_wallet_wrong_network()
    }) : null);
    // No wallet connected
    if (!account && !disableConnectWallet) return renderBox(!props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: classes.connectWallet,
        fullWidth: true,
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
            size: 18
        }),
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonPromiseProps,
        children: t.plugin_wallet_connect_a_wallet()
    }) : null);
    // Network mismatch
    if (!isPluginIDMatched) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            fullWidth: true,
            className: classes.switchButton,
            disabled: actualProviderType === types/* ProviderType */.lP.WalletConnect,
            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                mainIcon: expectedNetworkDescriptor?.icon,
                size: 18
            }),
            sx: props.ActionButtonPromiseProps?.sx,
            onClick: ()=>modals/* SelectProviderModal */.ge.open(),
            ...props.ActionButtonPromiseProps,
            children: t.plugin_wallet_change_wallet()
        }), actualProviderType === types/* ProviderType */.lP.WalletConnect ? t.plugin_wallet_connect_tips() : t.plugin_wallet_not_support_network());
    }
    // Provider is Wallet Connect
    if (actualProviderType === types/* ProviderType */.lP.WalletConnect && !isMatched) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                mainIcon: expectedNetworkDescriptor?.icon,
                size: 18
            }),
            onClick: onSwitchChain,
            loading: loading,
            className: classes.switchButton,
            sx: props.ActionButtonPromiseProps?.sx,
            ...props.ActionButtonPromiseProps,
            children: switchText ?? t.plugin_wallet_switch_network({
                network: expectedChainName ?? ''
            })
        }), t.plugin_wallet_connect_tips());
    }
    return props.children;
}
const ChainBoundary = /*#__PURE__*/ (0,react.memo)(function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* RevokeChainContextProvider */.fw, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundaryWithoutContext, {
            ...props
        })
    });
});
ChainBoundary.displayName = 'ChainBoundary';


/***/ }),

/***/ 98662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34278);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        copy: {
            '&:hover': {
                color: theme.palette.maskColor.main
            }
        }
    }));
/** defaults to 'Copied' */ /** stop event propagation and prevent default */ const CopyButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CopyButton({ text, title, successText, size, color, scoped = true, className, ...props }) {
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props
    });
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ev)=>{
        if (scoped) {
            ev.stopPropagation();
            ev.preventDefault();
        }
        copyToClipboard(text);
        setCopied(true);
        setActive(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(setActive, 1500, false);
    }, [
        text,
        scoped
    ]);
    const tooltipTitle = copied ? successText ?? t.copied() : title ?? t.copy();
    const iconProps = {
        size,
        color
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootTooltip */ .p, {
        open: active,
        title: tooltipTitle,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            underline: "none",
            component: "button",
            onClick: handleCopy,
            color: "inherit",
            ...props,
            fontSize: 0,
            className: cx(classes.root, className),
            children: active ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Check, {
                ...iconProps,
                color: theme.palette.maskColor.success
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Copy, {
                ...iconProps,
                className: classes.copy
            })
        })
    });
});


/***/ }),

/***/ 28236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Icon)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/name2Image.ts
const DEFAULT_IMAGES = [
    new URL(/* asset import */ __webpack_require__(32665), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(63417), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(74246), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(85663), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(38374), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(51139), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(82567), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(15213), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(52660), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(33605), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(32297), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(53066), __webpack_require__.b).toString()
];
const name2Image = (name)=>{
    if (!name) return DEFAULT_IMAGES[0];
    let sum = 0;
    for(let i = 0; i < name.length; i += 1){
        sum += name.charCodeAt(i);
    }
    return DEFAULT_IMAGES[sum % DEFAULT_IMAGES.length];
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/index.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { size })=>({
        icon: {
            margin: 0,
            borderRadius: '50%',
            color: `${theme.palette.maskColor.dark} !important`,
            backgroundSize: 'cover',
            height: size,
            width: size
        }
    }));
const Icon = /*#__PURE__*/ (0,react.memo)(function Icon(props) {
    const { logoURL, size, color, name, label, className, ...rest } = props;
    const [failed, setFailed] = (0,react.useState)(false);
    const defaultBackgroundImage = name2Image(name);
    const { classes, cx } = useStyles({
        size
    });
    const theme = (0,useTheme/* default */.Z)();
    const showImage = logoURL && !failed;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: cx(classes.icon, className),
        src: logoURL,
        ...rest,
        imgProps: {
            onError: (event)=>{
                setFailed(true);
                rest.imgProps?.onError?.(event);
            },
            ...rest.imgProps
        },
        sx: {
            ...rest.sx,
            backgroundImage: showImage ? undefined : `url("${defaultBackgroundImage}")`,
            backgroundColor: showImage ? color ?? theme.palette.common.white : undefined
        },
        children: label ?? name?.slice(0, 1).toUpperCase() ?? '?'
    });
});
Icon.displayName = 'Icon';


/***/ }),

/***/ 78909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ ImageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const ImageIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ImageIcon({ size = 48, icon, iconFilterColor, ...rest }) {
    const style = iconFilterColor ? {
        filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
        backdropFilter: 'blur(16px)',
        ...rest.style
    } : rest.style;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        ...rest,
        style: style
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

/***/ 95621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TokenIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61811);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81755);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28236);








const TokenIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TokenIcon(props) {
    const { pluginID = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId: propChainId, address, logoURL, symbol, tokenType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.Fungible, disableDefaultIcon, name, ...rest } = props;
    const { data: token } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleToken */ .c)(pluginID, address, undefined, {
        chainId: propChainId
    });
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)({
        chainId: props.chainId
    });
    const Hub = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Hub */ .h)(pluginID);
    const isNFT = tokenType === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.NonFungible;
    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            'token-icon',
            chainId,
            address,
            isNFT
        ],
        enabled: !logoURL,
        queryFn: async ()=>{
            const logoURLs = isNFT ? (()=>{
                throw new Error("Unreachable: it used to call Hub.getNonFungibleTokenIconURLs, but it's default implementation is throw an error, and not override by any subclass.");
            })() : await Hub.getFungibleTokenIconURLs(chainId, address).catch(()=>[]);
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(logoURLs);
        }
    });
    if (data && disableDefaultIcon) return null;
    const text = token?.name || token?.symbol || symbol || name || '?';
    // `?` prevent to fallback to avatar icon
    const url = logoURL || token?.logoURL || data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Icon */ .J, {
        ...rest,
        logoURL: url,
        name: text
    });
});


/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78909);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme, props)=>({
        root: {
            position: 'relative',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block'
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${props.badgeIconBorderColor ?? theme.palette.common.white}`,
            borderRadius: '50%'
        }
    }));
function WalletIcon(props) {
    const { size = 24, badgeSize = 14, mainIcon, badgeIcon, badgeIconBorderColor, iconFilterColor } = props;
    const { classes } = useStyles({
        size: badgeSize > size ? badgeSize : size,
        badgeIconBorderColor
    }, {
        props: {
            classes: props.classes
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            mainIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.mainIcon,
                size: size,
                icon: mainIcon,
                iconFilterColor: iconFilterColor
            }) : null,
            badgeIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.badgeIcon,
                size: badgeSize,
                icon: badgeIcon
            }) : null
        ]
    });
}


/***/ }),

/***/ 72116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66584);





const Action = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Action({ children, openSelectWalletDialog }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        display: "flex",
        columnGap: 16,
        minWidth: !_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .Sniffings */ .Y.is_popup_page ? 276 : 176,
        ref: ref,
        children: children ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            fullWidth: true,
            onClick: openSelectWalletDialog,
            children: t.wallet_status_button_change()
        })
    });
});


/***/ }),

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PluginWalletStatusBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6764);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23935);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98170);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84305);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20701);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6379);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62649);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24770);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8772);
/* harmony import */ var _WalletDescription_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58307);
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(72116);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25127);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            boxSizing: 'content-box',
            display: 'flex',
            backgroundColor: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_dashboard_page ? _masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar */ .Z.mainBackground : (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .Fq)(theme.palette.maskColor.bottom, 0.8),
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            padding: theme.spacing(2),
            borderRadius: '0 0 12px 12px',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            maxHeight: 40
        },
        connection: {
            width: 18,
            height: 18,
            marginRight: 8
        }
    }));
const PluginWalletStatusBarWithoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ className, onClick, expectedPluginID, expectedChainId, children, requiredSupportChainIds, requiredSupportPluginID })=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useSharedTrans */ .j)();
    const { classes, cx } = useStyles();
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useNetworkContext */ .gK)();
    const { account, chainId, providerType } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useChainContext */ .ql)();
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useWallet */ .O)(pluginID);
    const providerDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useProviderDescriptor */ .f)();
    const networkDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkDescriptor */ .V)(pluginID, chainId);
    const expectedNetworkDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkDescriptor */ .V)(expectedPluginID, expectedChainId);
    const { data: domain } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__/* .useReverseAddress */ .$)(pluginID, account);
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_12__/* .useWeb3Others */ .v)();
    const openSelectProviderDialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        _index_js__WEBPACK_IMPORTED_MODULE_13__/* .SelectProviderModal */ .ge.open({
            requiredSupportChainIds,
            requiredSupportPluginID
        });
    }, [
        expectedNetworkDescriptor,
        requiredSupportChainIds,
        requiredSupportPluginID
    ]);
    const pendingTransactions = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_14__/* .useRecentTransactions */ .S)(pluginID, _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__.TransactionStatusType.NOT_DEPEND);
    const walletName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (domain) return domain;
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .ProviderType */ .lP.MaskWallet && wallet?.name) return wallet?.name;
        return providerDescriptor?.name || Others.formatAddress(account, 4);
    }, [
        account,
        domain,
        providerType,
        wallet?.name,
        providerDescriptor?.name,
        Others.formatAddress
    ]);
    if (!account) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            className: cx(classes.root, className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                fullWidth: true,
                onClick: openSelectProviderDialog,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_19__.Wallet, {
                        className: classes.connection
                    }),
                    " ",
                    t.plugin_wallet_connect_a_wallet()
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: cx(classes.root, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletDescription_js__WEBPACK_IMPORTED_MODULE_20__/* .WalletDescription */ .a, {
                pending: !!pendingTransactions.length,
                providerIcon: providerDescriptor?.icon,
                networkIcon: networkDescriptor?.icon,
                iconFilterColor: providerDescriptor?.iconFilterColor,
                name: walletName,
                formattedAddress: Others.formatAddress(account, 4),
                addressLink: Others.explorerResolver.addressLink(chainId, account),
                onClick: onClick ?? openSelectProviderDialog,
                onPendingClick: ()=>_index_js__WEBPACK_IMPORTED_MODULE_13__/* .WalletStatusModal */ .L9.open()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Action_js__WEBPACK_IMPORTED_MODULE_21__/* .Action */ .a, {
                openSelectWalletDialog: openSelectProviderDialog,
                children: children
            })
        ]
    });
});
PluginWalletStatusBarWithoutContext.displayName = 'PluginWalletStatusBarWithoutContext';
const PluginWalletStatusBar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const children = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .RevokeChainContextProvider */ .fw, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWalletStatusBarWithoutContext, {
            ...props
        })
    });
    return props.actualPluginID ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkContextProvider */ .f6, {
        value: props.actualPluginID,
        children: children
    }) : children;
});
PluginWalletStatusBar.displayName = 'PluginWalletStatusBar';


/***/ }),

/***/ 58307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ WalletDescription)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20419);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90138);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98748);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98662);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8311);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4,
            cursor: 'pointer'
        },
        description: {
            marginLeft: 10
        },
        walletName: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '18px'
        },
        address: {
            color: theme.palette.maskColor.second,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            columnGap: 2
        },
        pending: {
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderRadius: 2,
            padding: '2px 4px',
            backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* .alpha */ .Fq)(theme.palette.maskColor.warn, 0.1),
            color: theme.palette.maskColor.warn,
            lineHeight: '18px'
        },
        progress: {
            color: theme.palette.maskColor.warn
        },
        linkIcon: {
            color: theme.palette.maskColor.second,
            cursor: 'pointer',
            height: 14
        }
    }));
const WalletDescription = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ onClick, providerIcon, networkIcon, iconFilterColor, name, address, formattedAddress, addressLink, onPendingClick, pending, verified })=>{
    const { classes } = useStyles();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        onClick: onClick,
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                size: 30,
                badgeSize: 12,
                mainIcon: providerIcon ?? networkIcon,
                badgeIcon: providerIcon ? networkIcon : undefined,
                iconFilterColor: iconFilterColor
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.walletName,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: name
                            }),
                            verified ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Verification, {
                                size: 18
                            }) : null,
                            onPendingClick ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.ArrowDrop, {}) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.address,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: formattedAddress
                            }),
                            address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .CopyButton */ .q, {
                                size: 14,
                                className: classes.linkIcon,
                                text: address
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                href: addressLink,
                                target: "_blank",
                                title: "View on Explorer",
                                rel: "noopener noreferrer",
                                onClick: (event)=>{
                                    event.stopPropagation();
                                },
                                className: classes.linkIcon,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.LinkOut, {
                                    size: 14,
                                    className: classes.linkIcon
                                })
                            }),
                            pending ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: classes.pending,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onPendingClick?.();
                                },
                                children: [
                                    t.recent_transaction_pending(),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_11__/* .LoadingBase */ .S, {
                                        size: 12,
                                        className: classes.progress
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
});


/***/ }),

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bp: () => (/* binding */ ConnectWalletModal),
/* harmony export */   FT: () => (/* binding */ ShareSelectNetworkModal),
/* harmony export */   G5: () => (/* binding */ ApplicationBoardModal),
/* harmony export */   L5: () => (/* binding */ WalletRiskWarningModal),
/* harmony export */   L9: () => (/* binding */ WalletStatusModal),
/* harmony export */   NB: () => (/* binding */ AddCollectiblesModal),
/* harmony export */   Ps: () => (/* binding */ ApplicationBoardSettingsModal),
/* harmony export */   QH: () => (/* binding */ ConfirmDialog),
/* harmony export */   SK: () => (/* binding */ WalletConnectQRCodeModal),
/* harmony export */   eX: () => (/* binding */ PersonaSelectPanelModal),
/* harmony export */   eg: () => (/* binding */ TransactionSnackbar),
/* harmony export */   eq: () => (/* binding */ SelectGasSettingsModal),
/* harmony export */   fU: () => (/* binding */ GasSettingModal),
/* harmony export */   ge: () => (/* binding */ SelectProviderModal),
/* harmony export */   gw: () => (/* binding */ SelectFungibleTokenModal),
/* harmony export */   l$: () => (/* binding */ TransactionConfirmModal),
/* harmony export */   rV: () => (/* binding */ SelectNonFungibleContractModal),
/* harmony export */   sm: () => (/* binding */ ConfirmModal),
/* harmony export */   tN: () => (/* binding */ LeavePageConfirmModal)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62384);

const WalletConnectQRCodeModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectProviderModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletStatusModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletRiskWarningModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConnectWalletModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const LeavePageConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ApplicationBoardModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ApplicationBoardSettingsModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const GasSettingModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const TransactionConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const TransactionSnackbar = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConfirmDialog = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectNonFungibleContractModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectGasSettingsModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const AddCollectiblesModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectFungibleTokenModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const PersonaSelectPanelModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ShareSelectNetworkModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();



/***/ }),

/***/ 13101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ LightColor),
/* harmony export */   I: () => (/* binding */ DarkColor)
/* harmony export */ });
const LightColor = {
    bg: '##F9F9F9',
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#FFFFFF',
    secondary: '#e8f0fe',
    secondaryContrastText: '#1c68f3',
    input: '#F6F6F8',
    primaryBackground: '#ffffff',
    primaryBackground2: '#FBFBFC',
    secondaryBackground: '#f9fafa',
    lightBackground: '#F9FAFA',
    mainBackground: '#ffffff',
    suspensionBackground: 'rgba(249, 250, 250, 0.8)',
    normalBackground: '#F3F3F4',
    twitterBackground: '#F7F9FA',
    twitterBackgroundHover: '#EFF1F2',
    twitterInputBackground: '#F6F8F8',
    twitterButton: '#111418',
    twitterButtonText: '#ffffff',
    twitterBlue: '#1C68F3',
    twitterBorderLine: '#EDF1F2',
    twitterSecond: '#7B8192',
    twitterMain: '#0F1419',
    twitterBottom: '#ffffff',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterBg: '#F6F8F8',
    twitterTooltipBg: 'rgba(0,0,0,.6)',
    twitterInput: '#EDF1F2',
    twitterLine: '#EBEEF0',
    redMain: '#ff5f5f',
    redLight: '#ffafaf',
    redContrastText: '#ffffff',
    greenMain: '#3DC233',
    greenLight: '#e6f6f0',
    orangeMain: '#ffb915',
    orangeLight: '#faf0d8',
    iconLight: '#a6a9b6',
    divider: '#eff3f4',
    border: '#F3F3F4',
    borderSecondary: '#536471',
    textPrimary: '#111432',
    textSecondary: '#7b8192',
    secondaryInfoText: '#AFC3E1',
    normalText: '#7B8192',
    normalTextLight: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#1C68F3',
    lineLight: '#E4E8F1',
    lineLighter: '#E9E9EA',
    textLight: '#A6A9B6',
    lightestBackground: '#FFFFFF',
    linkText: '#1C68F3',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#F9FAFA',
    main: '#1C68F3',
    errorBackground: 'rgba(255, 95, 95, 0.15)',
    tooltipBackground: '#ffffff',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#000000',
    errorPlugin: '#FF3545',
    buttonPluginBackground: '#07101B',
    textPluginColor: '#07101B',
    buttonPluginColor: '#FFFFFF'
};
const DarkColor = {
    bg: '#1C1C1C',
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#15171A',
    secondary: '#242e57',
    secondaryContrastText: '#ffffff',
    input: '#282B49',
    primaryBackground: '#212442',
    primaryBackground2: '#212442',
    secondaryBackground: '#252846',
    lightBackground: '#2E314F',
    mainBackground: '#111432',
    suspensionBackground: 'rgba(27, 30, 60, 0.8)',
    normalBackground: '#262947',
    twitterInputBackground: '#17191D',
    twitterBackground: '#17191D',
    twitterBackgroundHover: '#17191D',
    twitterButton: '#EFF3F4',
    twitterButtonText: '#0F1419',
    twitterBlue: '#4989FF',
    twitterBorderLine: '#2F3336',
    twitterInput: '#1D2023',
    twitterSecond: '#636B72',
    twitterMain: '#D9D9D9',
    twitterBottom: '#000000',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterLine: '#2F3336',
    twitterBg: '#15171A',
    twitterTooltipBg: 'rgba(91,112,131,.6)',
    redMain: '#ff5f5f',
    redLight: '#46304a',
    redContrastText: '#ffffff',
    greenMain: '#3DC233',
    greenLight: '#314457',
    orangeMain: '#ffb915',
    orangeLight: '#463e3f',
    iconLight: '#a6a9b6',
    divider: '#3e455e',
    border: '#3E455E',
    borderSecondary: '#6e767d',
    // TODO: ?
    textPrimary: '#ffffff',
    // TODO: ?
    textSecondary: 'ghostwhite',
    secondaryInfoText: '#AFC3E1',
    normalText: 'rgba(255, 255, 255, 0.8)',
    normalTextLight: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#ffffff',
    lineLight: '#32365B',
    lineLighter: '#32365B',
    textLight: '#A6A9B6',
    lightestBackground: '#212422',
    linkText: '#ffffff',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#000000',
    main: '#D4D4D4',
    errorBackground: 'rgba(255, 95, 95, 0.1)',
    tooltipBackground: '#1A1D20',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#ffffff',
    errorPlugin: '#FF3545',
    buttonPluginBackground: '#07101B',
    textPluginColor: '#07101B',
    buttonPluginColor: '#FFFFFF'
};


/***/ }),

/***/ 23935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MaskColorVar),
/* harmony export */   n: () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32711);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13101);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
}
/** Append alpha channel to the original color */ function set(key) {
    if (typeof key === 'symbol') return undefined;
    const cssVar = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
    function value(defaultValue) {
        // it might be an object when used in styled components.
        if (typeof defaultValue !== 'string') defaultValue = undefined;
        const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
        return x;
    }
    Object.assign(value, {
        [Symbol.toPrimitive]: ()=>`var(--mask-${cssVar})`,
        alpha: (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
    });
    Object.defineProperty(MaskColorVar, key, {
        configurable: true,
        enumerable: true,
        value
    });
    return value;
}
/**
 * @deprecated Use theme.palette.maskColor
 */ const MaskColorVar = {
    __proto__: new Proxy({}, {
        get: (_, p)=>set(p),
        getOwnPropertyDescriptor: (_, p)=>{
            set(p);
            return Object.getOwnPropertyDescriptor(MaskColorVar, p);
        }
    })
};


/***/ }),

/***/ 90097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _LoadingBase_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20419);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);




const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    loading: {
        ['& > *']: {
            opacity: 0.3
        }
    }
});
function ActionButton(props) {
    const { width, loading, children, className, style, ...rest } = props;
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: cx('actionButton', className, loading ? classes.loading : undefined),
        style: {
            width,
            ...style,
            pointerEvents: loading ? 'none' : undefined
        },
        ...rest,
        disableElevation: true,
        disabled: !!(rest.disabled || loading),
        children: [
            loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                style: {
                    opacity: 1
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadingBase_index_js__WEBPACK_IMPORTED_MODULE_4__/* .LoadingBase */ .S, {})
            }) : null,
            children
        ]
    });
}


/***/ }),

/***/ 20419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ LoadingBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);



const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        animated: {
            '@keyframes loadingAnimation': {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(360deg)'
                }
            },
            animation: 'loadingAnimation 1s linear infinite'
        }
    }));
function LoadingBase(props) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CircleLoading, {
        ...props,
        className: cx(classes.animated, props.className)
    });
}


/***/ }),

/***/ 8330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YO: () => (/* binding */ CustomSnackbarProvider),
  Ii: () => (/* binding */ useCustomSnackbar)
});

// UNUSED EXPORTS: CustomSnackbarContent, PopupSnackbarProvider, SnackbarProvider, usePopupCustomSnackbar, useSnackbar

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/index.js + 16 modules
var esm = __webpack_require__(94245);
// EXTERNAL MODULE: ./node_modules/.pnpm/notistack@2.0.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8_react-dom_vt4c2flfh7labhvk5vot2goyiq/node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(45190);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Info.js


/* harmony default export */ const Info = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info'));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Warning.js


/* harmony default export */ const Warning = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Snackbar/index.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { offsetY }, classNames)=>{
    const spinningAnimationKeyFrames = (0,esm/* keyframes */.F4)`
        to {
          transform: rotate(360deg)
        }
    `;
    const title = {
        color: theme.palette.maskColor.main,
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '18px'
    };
    const message = {
        color: theme.palette.maskColor.main,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        lineHeight: '18px',
        wordBreak: 'break-word',
        '& > a': {
            display: 'flex',
            alignItems: 'center'
        },
        '& :focus:not(:focus-visible)': {
            outline: 0
        }
    };
    const defaultVariant = {
        background: theme.palette.maskColor.bottom,
        color: theme.palette.maskColor.main,
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: 'inherit'
        }
    };
    const success = {
        backgroundColor: theme.palette.maskColor.success,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const error = {
        background: theme.palette.maskColor.danger,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const info = {
        background: theme.palette.maskColor.primary,
        color: theme.palette.maskColor.white,
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const warning = {
        backgroundColor: theme.palette.maskColor.warn,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: typeof offsetY !== 'undefined' ? `translateY(${offsetY}px)` : 'none',
            color: vars/* MaskColorVar */.Z.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important'
        },
        // eslint-disable-next-line tss-unused-classes/unused-classes
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > svg': {
                width: 24,
                height: 24
            }
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit',
            transform: 'translateY(-10px)'
        },
        texts: {
            marginLeft: theme.spacing(1.5),
            '& :focus:not(:focus-visible)': {
                outline: 0
            }
        },
        title,
        message
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SuccessForSnackBar, {}),
    error: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TransactionFailed, {}),
    warning: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes, cx } = useStyles({
        offsetY: props.offsetY
    }, {
        props
    });
    const snackbar = (0,notistack_esm/* useSnackbar */.Ds)();
    const loadingIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleLoading, {
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(notistack_esm/* SnackbarContent */.No, {
        ref: ref,
        className: cx(classes.content, classes[props.variant]),
        children: [
            variantIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    });
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react.memo)(function CustomSnackbarProvider({ offsetY, ...rest }) {
    const ref = (0,react.useRef)(null);
    const { classes } = useStyles({
        offsetY
    });
    const onDismiss = (key)=>()=>{
            ref.current?.closeSnackbar(key);
        };
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(notistack_esm/* SnackbarProvider */.wT, {
            ref: ref,
            maxSnack: 30,
            disableWindowBlurListener: true,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            hideIconVariant: true,
            // this is a false positive, SnackbarProvider won't use it like it is a component.
            // eslint-disable-next-line react/no-unstable-nested-components
            content: (key, title)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                    id: key,
                    variant: rest.variant ?? 'default',
                    title: title,
                    offsetY: offsetY
                }),
            // eslint-disable-next-line react/no-unstable-nested-components
            action: (key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "large",
                    onClick: onDismiss(key),
                    sx: {
                        color: 'inherit'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        color: "inherit"
                    })
                }),
            classes: {
                containerRoot: classes.root,
                variantSuccess: classes.success,
                variantError: classes.error,
                variantInfo: classes.info,
                variantWarning: classes.warning
            },
            domRoot: container,
            ...rest
        }));
});
function useCustomSnackbar() {
    const { enqueueSnackbar, closeSnackbar } = (0,notistack_esm/* useSnackbar */.Ds)();
    const showSnackbar = (0,react.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing, message, variant, ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                    variant: variant ?? 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                });
            },
            ...rest
        });
    }, [
        enqueueSnackbar
    ]);
    return {
        showSnackbar,
        closeSnackbar
    };
}


/***/ }),

/***/ 22596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ MaskTabList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ButtonGroup/ButtonGroup.js
var ButtonGroup = __webpack_require__(8952);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/BaseTab.tsx



const BaseTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 36,
        lineHeight: '18px',
        boxShadow: activated ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(1.5)} ${theme.spacing(1.5)} 0px 0px !important`,
        color: activated ? theme.palette.maskColor.main : theme.palette.maskColor.secondaryDark,
        fontSize: 16,
        fontWeight: 'bold',
        '&:hover': {
            boxShadow: activated ? '0 0 20px rgba(0, 0, 0, 0.05)' : 'none',
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        },
        // If there is only single one tab.
        '&:first-of-type:last-of-type': {
            maxWidth: '25%'
        }
    }));
const BaseTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BaseTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: (e)=>handleClick(e),
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/FlexibleTab.tsx



const FlexibleTabTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flexShrink: 0,
        flexGrow: 0,
        padding: theme.spacing(1.25, 1.5),
        height: 38,
        lineHeight: '16px',
        minWidth: theme.spacing(3),
        background: activated ? theme.palette.maskColor.input : 'transparent',
        borderRadius: `${theme.spacing(1)} !important`,
        color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold !important',
        '&:hover': {
            background: activated ? theme.palette.maskColor.input : 'transparent',
            color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.primary,
            boxShadow: 'none'
        }
    }));
const FlexibleTab = /*#__PURE__*/ (0,react.memo)((props)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const { isVisitable, ...rest } = props;
    const ref = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!activated) return;
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!visitable) onChange?.({}, String(value), visitable);
    }, []);
    const handleClick = (event)=>{
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!activated && onChange) onChange(event, String(value), visitable);
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleTabTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...rest,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBackIosNew.js


/* harmony default export */ const ArrowBackIosNew = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
}), 'ArrowBackIosNew'));
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useClickAway.js
var useClickAway = __webpack_require__(47824);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/RoundTab.tsx



const RoundTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 34,
        lineHeight: '16px',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(2)} !important`,
        color: activated ? theme.palette.text.primary : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
        '&:hover': {
            boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
            color: theme.palette.text.primary,
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        }
    }));
const RoundTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoundTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/index.tsx









const defaultTabSize = 38;
const ArrowButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme })=>({
        position: 'absolute',
        top: 0,
        right: 0,
        padding: theme.spacing(1.5),
        height: defaultTabSize,
        width: defaultTabSize,
        minWidth: `${defaultTabSize}px !important`,
        background: theme.palette.background.input,
        '&:hover': {
            background: theme.palette.background.input
        }
    }));
const ArrowBackIosNewIconWrap = (0,styled/* default */.ZP)(ArrowBackIosNew)(({ theme })=>({
        color: theme.palette.text.primary,
        width: 16,
        borderRadius: '0 8px 8px 0'
    }));
const FlexibleButtonGroupPanel = (0,styled/* default */.ZP)(Box/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'isOpen'
})(({ theme, isOpen = false })=>({
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        padding: theme.spacing(1.5),
        maxWidth: 'calc(100% - 24px)',
        width: 'calc(100% - 24px)',
        boxShadow: isOpen ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        backdropFilter: 'blur(20px)',
        background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
        boxSizing: 'content-box'
    }));
const ButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant'
})(({ theme, maskVariant = 'base' })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflowY: 'clip',
        flex: 1,
        gap: theme.spacing(1),
        ...maskVariant === 'round' ? {
            padding: theme.spacing(0.5),
            background: theme.palette.maskColor.input,
            borderRadius: 18
        } : maskVariant === 'flexible' ? {
            background: 'transparent',
            borderRadius: 0
        } : {
            marginTop: theme.spacing(-1),
            paddingTop: theme.spacing(1),
            background: 'transparent',
            borderRadius: 0
        }
    }));
const FlexButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant' && prop !== 'isOpen' && prop !== 'isOverflow'
})(({ theme, maskVariant = 'base', isOpen = false, isOverflow = false })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: isOpen ? 'wrap' : 'nowrap',
        overflow: 'hidden',
        flex: 1,
        maxWidth: '100%',
        paddingRight: isOpen ? defaultTabSize : 0,
        gap: maskVariant !== 'base' ? theme.spacing(1) : 0,
        borderRadius: 0,
        background: !isOpen && isOverflow ? theme.palette.mode === 'light' ? `linear-gradient(270deg, rgba(255,255,255,1) ${defaultTabSize}px, rgba(223, 229, 244, 0.8) ${defaultTabSize}px, rgba(244, 247, 254, 0) 72px)` : `linear-gradient(270deg, transparent ${defaultTabSize}px, rgba(49, 49, 49, 0.8) ${defaultTabSize}px, rgba(23, 23, 23, 0) 72px)` : 'transparent'
    }));
const tabMapping = {
    flexible: FlexibleTab,
    round: RoundTab,
    base: BaseTab
};
/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTabs('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <MaskTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </MaskTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const MaskTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    const classes = props.classes;
    const [open, handleToggle] = (0,react.useState)(false);
    const [isTabsOverflow, setIsTabsOverflow] = (0,react.useState)(false);
    const [firstId, setFirstTabId] = (0,react.useState)(context?.value);
    const innerRef = (0,react.useRef)(null);
    const anchorRef = (0,react.useRef)(null);
    const flexPanelRef = (0,react.useRef)(null);
    const { width } = (0,useWindowSize/* default */.Z)();
    if (context === null) throw new TypeError('No TabContext provided');
    const { onChange, variant = 'base', hideArrowButton, ...rest } = props;
    (0,react.useImperativeHandle)(ref, ()=>innerRef?.current);
    // #region hide tab should up to first when chick
    (0,react.useEffect)(()=>{
        if (!innerRef?.current) return;
        const current = innerRef.current;
        setIsTabsOverflow(current.scrollWidth >= current.clientWidth + defaultTabSize);
    }, [
        innerRef?.current,
        width
    ]);
    // #endregion
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) throw new TypeError('Invalided Children');
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            className: child.props.className,
            onChange: (event, value, visitable)=>{
                handleToggle(false);
                props.onChange(event, value);
                if (variant === 'flexible' && !visitable) {
                    setFirstTabId(value);
                }
            }
        };
        if (child.type !== Tab/* default */.Z) return child;
        if (variant === 'flexible') {
            Object.assign(extra, {
                // if move tab to first in flexible tabs
                isVisitable: (top, right)=>{
                    const anchor = anchorRef.current?.getBoundingClientRect();
                    return right <= (anchor?.right ?? 0) - defaultTabSize && top - (anchor?.top ?? 0) < defaultTabSize;
                }
            });
        }
        const C = tabMapping[variant];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(C, {
            value: child.props.value,
            ...extra,
            children: child.props.label
        });
    });
    // #region hide tab should up to first when chick
    const flexibleTabs = (0,react.useMemo)(()=>{
        if (variant !== 'flexible') return null;
        return children?.sort((a, b)=>{
            if (a.props.value === firstId) return -1;
            if (b.props.value === firstId) return 1;
            return 0;
        });
    }, [
        firstId,
        children
    ]);
    // #endregion
    // #region Should close panel when click other area
    (0,useClickAway/* default */.Z)(flexPanelRef, (event)=>{
        if (variant !== 'flexible') return;
        const { left, right, top, bottom } = innerRef.current?.getBoundingClientRect() ?? {
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
        };
        const pointerX = event.x ?? 0;
        const pointerY = event.y ?? 0;
        if (pointerX > right || pointerX < left || pointerY < top || pointerY > bottom) handleToggle(false);
    });
    // #endregion
    if (variant === 'flexible') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            position: "relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
                    maskVariant: variant,
                    ref: anchorRef,
                    style: {
                        visibility: 'hidden',
                        height: defaultTabSize
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleButtonGroupPanel, {
                    isOpen: !!(open && isTabsOverflow),
                    ref: flexPanelRef,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexButtonGroupWrap, {
                        maskVariant: variant,
                        isOpen: open,
                        isOverflow: !!(isTabsOverflow && !hideArrowButton),
                        ...rest,
                        ref: innerRef,
                        role: "tablist",
                        children: [
                            flexibleTabs,
                            (isTabsOverflow || open) && !hideArrowButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowButtonWrap, {
                                className: classes?.arrowButton,
                                variant: "text",
                                size: "small",
                                "aria-controls": open ? 'split-button-menu' : undefined,
                                "aria-expanded": open ? 'true' : undefined,
                                "aria-label": "select tabs list",
                                "aria-haspopup": "menu",
                                onClick: ()=>handleToggle(!open),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackIosNewIconWrap, {
                                    sx: {
                                        transform: open ? 'rotate(90deg)' : 'rotate(270deg)'
                                    }
                                })
                            }) : null
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
        maskVariant: variant,
        ...rest,
        ref: innerRef,
        role: "tablist",
        children: children
    });
});
MaskTabList.displayName = 'MaskTabList';


/***/ }),

/***/ 16941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTab);
    const [, startTransition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useTransition)();
    const tabRecords = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>tabRecords[t] = t);
    const isCurrentTabAvailable = [
        defaultTab,
        ...possibleTabs
    ].includes(currentTab);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isCurrentTabAvailable) {
            setTab(defaultTab);
        }
    }, [
        isCurrentTabAvailable,
        defaultTab
    ]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, value)=>{
        startTransition(()=>setTab(value));
    }, []);
    return [
        currentTab,
        onChange,
        tabRecords,
        setTab
    ];
}


/***/ }),

/***/ 44909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useChainIdValid(pluginID, expectedChainId) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return (!account || Others.chainResolver.isValidChainId?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 54246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useFungibleToken)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92358);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65327);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72889);







function useFungibleToken(pluginID, address, fallbackToken, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworks */ .e)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: true,
        queryKey: [
            'fungible-token',
            pluginID,
            address,
            chainId,
            options
        ],
        queryFn: async ()=>{
            if (!address) return;
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .attemptUntil */ .C)([
                async ()=>{
                    if (pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM || !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .isNativeTokenAddress */ .qw)(address) || !chainId) return;
                    const network = networks.find((x)=>x.chainId === chainId);
                    return network?.nativeCurrency;
                },
                async ()=>{
                    const token = await Hub.getFungibleToken(address, {
                        chainId
                    });
                    if (!token) return;
                    const logoURL = token.logoURL ?? fallbackToken?.logoURL;
                    const symbol = token.symbol === 'UNKNOWN' || !token.symbol ? fallbackToken?.symbol : token.symbol;
                    return {
                        ...token,
                        symbol,
                        logoURL
                    };
                }
            ], fallbackToken);
        }
    });
}


/***/ }),

/***/ 88572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96732);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83977);







function useFungibleTokenBalance(pluginID, address, options, /** Allow to control the request */ enabled = true) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        ...options
    });
    const { BalanceNotifier } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(pluginID);
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled,
        queryKey: [
            'fungible-token',
            'balance',
            pluginID,
            account,
            address,
            options
        ],
        queryFn: async ()=>{
            if (!address) return '0';
            return Web3.getFungibleTokenBalance(address, undefined, options);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return BalanceNotifier?.emitter.on('update', (ev)=>{
            if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .W)(account, ev.account)) {
                result.refetch();
            }
        }) ?? lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    }, [
        account,
        result.refetch,
        BalanceNotifier
    ]);
    return result;
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

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared network descriptor
 * @param expectedPluginID
 * @param expectedChainIdOrNetworkTypeOrID
 * @returns
 */ function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { networkType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Networks */ .Rm)(pluginID).find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes(expectedChainIdOrNetworkTypeOrID ?? networkType ?? ''));
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

/***/ 72889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 26896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNonFungibleCollections)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67830);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38645);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNonFungibleCollections(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'non-fungible-collections',
            pluginID,
            account,
            options
        ],
        enabled: !!account,
        queryFn: async ()=>{
            if (!account) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .asyncIteratorToArray */ .S)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .pageableToIterator */ .T1)(async (indicator)=>{
                return Hub.getNonFungibleCollectionsByOwner(account, {
                    indicator,
                    size: 50,
                    networkPluginId: pluginID,
                    ...options
                });
            }));
        }
    });
}


/***/ }),

/***/ 34425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNonFungibleTokenContract)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


function useNonFungibleTokenContract(pluginID, address, schemaType, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return Web3.getNonFungibleTokenContract?.(address, schemaType);
    }, [
        address,
        schemaType,
        Web3
    ]);
}


/***/ }),

/***/ 84305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared provider descriptor
 * @param expectedPluginID
 * @param expectedProviderTypeOrID
 * @returns
 */ function useProviderDescriptor(expectedPluginID, expectedProviderTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { providerType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Providers */ .i8)(pluginID).find((x)=>[
            x.type,
            x.ID
        ].includes(expectedProviderTypeOrID ?? providerType ?? ''));
}


/***/ }),

/***/ 60574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useRecentTransactions(pluginID, status) {
    const { Transaction } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const transactions = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Transaction?.transactions ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return (status ? transactions.filter((x)=>status === x.status) : transactions).map((x)=>({
                ...x,
                _tx: x.candidates[x.indexId]
            }));
    }, [
        status,
        transactions
    ]);
}


/***/ }),

/***/ 6379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 98170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWallets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41238);




/**
 * Use the currently selected wallet.
 * @param pluginID
 * @returns
 */ function useWallet(pluginID, providerType) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    const wallets = (0,_useWallets_js__WEBPACK_IMPORTED_MODULE_2__/* .useWallets */ .r)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return account ? wallets.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W)?.(x.address, account)) ?? null : null;
    }, [
        account,
        wallets
    ]);
}


/***/ }),

/***/ 41238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44475);





function useWallets() {
    // We got stored Mask wallets only.
    const wallets = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__/* .usePersistSubscription */ .i)('@@mask-wallets', _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Providers */ .Cl[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType */ .lP.MaskWallet].subscription.wallets ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            ...wallets
        ].map((w)=>{
            // Could be serialized by react query persist client
            if (w.createdAt instanceof Date && w.updatedAt instanceof Date) return w;
            return {
                ...w,
                createdAt: new Date(w.createdAt),
                updatedAt: new Date(w.updatedAt)
            };
        }).sort((a, b)=>{
            if (a.owner && !b.owner) return 1;
            const timestampA = a.createdAt.getTime();
            const timestampB = b.createdAt.getTime();
            if (timestampA - timestampB > 10000) {
                return 1;
            } else if (timestampB - timestampA > 10000) {
                return -1;
            }
            const numA = a.name.split('Wallet ')[1];
            const numB = b.name.split('Wallet ')[1];
            try {
                if (!numA && numB && !Number.isNaN(numB)) return 1;
                if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
                    return Number(numA) > Number(numB) ? 1 : -1;
                } else {
                    return numB.length - numA.length;
                }
            } catch  {
                return 0;
            }
        });
    }, [
        wallets
    ]);
}


/***/ }),

/***/ 96732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 61811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useWeb3Hub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Hub(expectedPluginID, options) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .HubAll */ .AB.use(pluginID, options), [
        pluginID,
        JSON.stringify(options)
    ]);
}


/***/ }),

/***/ 61918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useERC20TokenAllowance(address, spender, options) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'erc20-allowance',
            address,
            account,
            spender
        ],
        queryFn: async ()=>{
            if (!account || !address || !spender) return '0';
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Contract */ .CH.getERC20Contract(address, {
                chainId
            })?.methods.allowance(account, spender).call({
                from: account
            });
        },
        refetchInterval: 30 * 1000
    });
}


/***/ }),

/***/ 13414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useERC20TokenApproveCallback),
/* harmony export */   i: () => (/* binding */ ApproveStateType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82897);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88572);
/* harmony import */ var _useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61918);







const MaxUint256 = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender, callback, tokenChainId) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    // read the approved information from the chain
    const { data: balance = '0', isLoading: loadingBalance, error: errorBalance, refetch: revalidateBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenBalance */ .V)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, address, {
        chainId: tokenChainId
    });
    const { data: allowance = '0', isLoading: loadingAllowance, error: errorAllowance, refetch: revalidateAllowance } = (0,_useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__/* .useERC20TokenAllowance */ .n)(address, spender, {
        chainId: tokenChainId
    });
    // the computed approve state
    const approveStateType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isLessThan */ .FI)(allowance, amount) || allowance === amount && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance
    ]);
    const [state, approveCallback] = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async (useExact = false, isRevoke = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED && !isRevoke) {
            return;
        }
        if (tokenChainId !== chainId) {
            await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.switchChain?.(tokenChainId ?? chainId);
        }
        const hash = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.approveFungibleToken(address, spender, useExact ? amount : MaxUint256, {
            chainId: tokenChainId
        });
        const receipt = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.confirmTransaction(hash, {
            chainId: tokenChainId,
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (receipt) {
            callback?.();
            revalidateBalance();
            revalidateAllowance();
        }
    }, [
        account,
        amount,
        spender,
        address,
        approveStateType,
        tokenChainId,
        chainId
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
    }, [
        revalidateBalance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        {
            ...state,
            loading: loadingAllowance || loadingBalance || state.loading,
            loadingApprove: state.loading
        },
        approveCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 43389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useERC721ContractSetApproveForAllCallback)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82897);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);



/**
 * @param contractAddress NFT contract Address.
 * @param operator Address to add to the set of authorized operators.
 * @param approved True if the operator is approved, false to revoke approval.
 */ function useERC721ContractSetApproveForAllCallback(contractAddress, operator, approved, callback, _chainId) {
    const { account } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        chainId: _chainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!contractAddress || !operator) return;
        const hash = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3 */ .Bv.approveAllNonFungibleTokens(contractAddress, operator, approved, undefined, {
            chainId: _chainId
        });
        const receipt = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3 */ .Bv.confirmTransaction(hash, {
            chainId: _chainId,
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (receipt) callback?.();
    }, [
        account,
        approved,
        contractAddress,
        operator
    ]);
}


/***/ }),

/***/ 65587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ TabContext),
/* harmony export */   _i: () => (/* binding */ useTabContext),
/* harmony export */   pQ: () => (/* binding */ getTabId),
/* harmony export */   uU: () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 79847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(26572);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 26572:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 32665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/32cc6126716b1c948521.svg";

/***/ }),

/***/ 33605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2ba762c78bff78c550fb.svg";

/***/ }),

/***/ 32297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/db4a425a3e40a8852fa3.svg";

/***/ }),

/***/ 53066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3e222d37b7dad4bdab7e.svg";

/***/ }),

/***/ 63417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0db610b2e2f8b0e3f140.svg";

/***/ }),

/***/ 74246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/44a2ee9660f3051e559b.svg";

/***/ }),

/***/ 85663:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/17413f9e89ac1d796f8b.svg";

/***/ }),

/***/ 38374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/99b296aa8c69cb9a9ac3.svg";

/***/ }),

/***/ 51139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d9090da8ea2f06ba6df9.svg";

/***/ }),

/***/ 82567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6f3a8ca61f969207c1e3.svg";

/***/ }),

/***/ 15213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ca770caade4e39fafbc5.svg";

/***/ }),

/***/ 52660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8a27a1699f5026bcded9.svg";

/***/ }),

/***/ 87167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=chunk.8212.js.map