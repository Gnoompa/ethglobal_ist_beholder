"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5598],{

/***/ 87148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ ErrorBoundary)
});

// UNUSED EXPORTS: withErrorBoundary

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useTimeoutFn.js
var useTimeoutFn = __webpack_require__(99732);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(77821);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(53133);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(17720);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ExpandLess.js


/* harmony default export */ const ExpandLess = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess'));
// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/context.tsx
var ErrorBoundary_context = __webpack_require__(45522);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/i18n_generated.ts
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
function useSharedBaseTrans() /**
      * `{{subject}} has an error`
      */ /**
      * `Try to recover`
      */ /**
      * `Report on GitHub`
      */ /**
      * `Report by Email`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("shareBase");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

;// CONCATENATED MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/CrashUI.tsx







/** Type of the Error */ /** The Error message */ /** The error stack */ /** The component part in the boundary */ function CrashUI({ onRetry, subject, ...error }) {
    const context = (0,ErrorBoundary_context/* useBuildInfoMarkdown */.nW)();
    const t = useSharedBaseTrans();
    const [showStack, setShowStack] = (0,react.useState)(false);
    // This is a rarely reported crash. It is likely a race condition.
    // https://github.com/DimensionDev/Maskbook/issues?q=Failed+to+execute+%27insertBefore%27+on+%27Node%27+
    // It seems like DOM mutation from out of our application might conflict with React reconciliation.
    // As a temporary fix, try to recover this React tree after 200ms.
    (0,useTimeoutFn/* default */.Z)(()=>{
        if (error.message.includes("Failed to execute 'insertBefore' on 'Node'")) {
            onRetry();
        }
    }, 200);
    // crash report, will send to GitHub
    const reportTitle = `[Crash] ${error.type}: ${error.message}`;
    const reportBody = `<!--Thanks for the crash report!
Please write down what you're doing when the crash happened, that will help us to fix it easier!-->

I was *doing something...*, then Mask reports an error.

> ${error.message}

Error stack:

<pre>${error.stack}</pre>\n\n${context || ''}`;
    const githubLink = (0,react.useMemo)(()=>{
        const url = new URLSearchParams();
        url.set('title', reportTitle);
        url.set('body', reportBody);
        return 'https://github.com/DimensionDev/Maskbook/issues/new?' + url.toString();
    }, [
        reportBody,
        reportTitle
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Root, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
            severity: "error",
            variant: "outlined",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                    children: t.error_boundary_crash_title({
                        subject
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ErrorTitle, {
                    children: [
                        error.type,
                        ": ",
                        error.message
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionArea, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            color: "primary",
                            onClick: onRetry,
                            children: t.error_boundary_try_to_recover()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            href: githubLink,
                            color: "primary",
                            target: "_blank",
                            children: t.error_boundary_report_github()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                flex: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            color: "inherit",
                            size: "small",
                            onClick: ()=>setShowStack((x)=>!x),
                            children: showStack ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess, {})
                        })
                    ]
                }),
                showStack ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorStack, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "pre",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                            children: error.stack
                        })
                    })
                }) : null
            ]
        })
    });
}
const Root = (0,styled/* default */.ZP)('div')`
    overflow-x: auto;
    flex: 1;
    width: 100%;
    contain: paint;
    margin-top: 16px;
`;
const ErrorTitle = (0,styled/* default */.ZP)('div')`
    user-select: text;
    margin-bottom: 8px;
`;
const ErrorStack = (0,styled/* default */.ZP)('div')`
    user-select: text;
    overflow-x: auto;
    height: 300px;
`;
const ActionArea = (0,styled/* default */.ZP)('div')`
    display: flex;
    gap: 8px;
`;

;// CONCATENATED MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component) {
    if (map.has(Component)) return map.get(Component);
    const C = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(Component, {
                ...props,
                ref: ref
            })
        }));
    map.set(Component, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    state = {
        error: null
    };
    render() {
        if (!this.state.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                }),
            ...this.props,
            ...this.normalizedError
        });
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        if (!this.state.error) return {
            stack,
            type,
            message
        };
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replaceAll(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replaceAll(/webpack-internal:\/{3}/g, '');
        } catch  {}
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {}
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {}
        return {
            stack,
            type,
            message
        };
    }
}


/***/ }),

/***/ 2194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBuildInfo_raw)
/* harmony export */ });
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/// <reference types="react/experimental" />

/** @internal */ function useBuildInfo_raw() {
    return _masknet_flags__WEBPACK_IMPORTED_MODULE_0__/* .env */ .O;
}


/***/ }),

/***/ 84271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 14580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xr: () => (/* binding */ sharedUINetworkIdentifier),
/* harmony export */   bP: () => (/* binding */ BaseSharedUIProvider),
/* harmony export */   uD: () => (/* binding */ useBaseUIRuntime),
/* harmony export */   vU: () => (/* binding */ sharedUIComponentOverwrite)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77953);
if (!/^(1799|3352)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84271);
}




const sharedUINetworkIdentifier = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ValueRef */ .Xf(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Localhost);
const sharedUIComponentOverwrite = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ValueRef */ .Xf({});
const BaseUIContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    networkIdentifier: sharedUINetworkIdentifier.value,
    componentOverwrite: sharedUIComponentOverwrite.value
});
BaseUIContext.displayName = 'BaseUIContext';
function BaseSharedUIProvider({ children }) {
    const site = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(sharedUINetworkIdentifier);
    const overwrite = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(sharedUIComponentOverwrite);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            networkIdentifier: site,
            componentOverwrite: overwrite
        };
    }, [
        site,
        overwrite
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BaseUIContext.Provider, {
        value: contextValue,
        children: children
    });
}
const useBaseUIRuntime = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BaseUIContext);
};


/***/ }),

/***/ 80922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx + 3 modules
var ErrorBoundary = __webpack_require__(87148);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(80835);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(37004);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(82161);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(51527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/base/BaseSharedUIProvider.tsx
var BaseSharedUIProvider = __webpack_require__(14580);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(2912);
;// CONCATENATED MODULE: ./packages/shared/src/UI/contexts/components/DialogDismissIcon.tsx



function DialogDismissIcon(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx



/* eslint-disable tss-unused-classes/unused-classes */ 






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { clean })=>({
        dialogTitle: {
            whiteSpace: 'nowrap',
            display: 'flex',
            gridTemplateColumns: '50px auto 50px',
            background: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.modalTitleBg : undefined
        },
        dialogTitleEndingContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        dialogTitleWithTabs: {
            display: 'grid !important',
            paddingBottom: '0 !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important',
            gridTemplateRows: `${theme.spacing(3.5)} ${theme.spacing(1.5)} ${theme.spacing(4.5)}`,
            gridTemplateAreas: `
            ". . ."
            "gap gap gap"
            "titleTab titleTab titleTab"
            "networkTab networkTab networkTab"
        `
        },
        dialogContent: {
            background: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.bottom : undefined,
            overscrollBehavior: 'contain'
        },
        dialogActions: {
            background: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.secondaryBottom : undefined,
            boxShadow: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.bottomBg : undefined,
            backdropFilter: Sniffings/* Sniffings */.Y.is_dashboard_page ? 'blur(8px)' : undefined
        },
        dialogGap: {
            gridArea: 'gap'
        },
        dialogTitleTabs: {
            paddingLeft: '16px !important',
            paddingRight: '16px !important',
            gridArea: 'titleTab'
        },
        dialogNetworkTabs: {
            gridArea: 'networkTab'
        },
        dialogTitleTypography: {
            flex: 1,
            textAlign: 'center',
            verticalAlign: 'middle',
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 700
        },
        dialogCloseButton: {
            color: theme.palette.text.primary,
            padding: 0,
            width: 24,
            height: 24,
            '& > svg': {
                fontSize: 24
            }
        },
        dialogCloseButtonWithTabs: {
            marginLeft: 16
        },
        dialogTitleEndingContentWithTabs: {
            marginRight: 16
        },
        paper: clean ? {
            width: 'auto',
            backgroundImage: 'none',
            maxHeight: 620
        } : {
            maxHeight: 620
        },
        tabs: {
            display: 'flex',
            gridColumn: '3 span'
        }
    }));
function InjectedDialog(props) {
    const site = (0,useValueRef/* useValueRef */.E)(BaseSharedUIProvider/* sharedUINetworkIdentifier */.Xr);
    const overwrite = (0,useValueRef/* useValueRef */.E)(BaseSharedUIProvider/* sharedUIComponentOverwrite */.vU);
    const clean = site === types/* EnhanceableSite */.J.Minds || site === types/* EnhanceableSite */.J.Facebook;
    const useSiteOverwrite = (0,react.useRef)(overwrite.InjectedDialog?.classes || (()=>({
            classes: undefined
        }))).current;
    const siteOverwrite = useSiteOverwrite().classes;
    const styles = useStyles({
        clean
    }, {
        props
    });
    const cx = styles.cx;
    const classes = {
        ...styles.classes
    };
    if (siteOverwrite) {
        for (const [key, className] of Object.entries(siteOverwrite)){
            if (key in classes) Reflect.set(classes, key, cx(Reflect.get(classes, key), String(className)));
            else Reflect.set(classes, key, String(className));
        }
    }
    const { dialogActions, dialogCloseButton, dialogContent, dialogTitle, dialogTitleEndingContent, dialogTitleEndingContentWithTabs, dialogTitleTabs, dialogNetworkTabs, dialogTitleWithTabs, dialogCloseButtonWithTabs, dialogGap, dialogTitleTypography, dialogBackdropRoot, container, ...dialogClasses } = classes;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const { children, open, disableBackdropClick, titleBarIconStyle, onClose, title, titleTabs, networkTabs, titleTail = null, disableTitleBorder, isOpenFromApplicationBoard, independent, ...rest } = props;
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    }, cx);
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    }, cx);
    const { extraProps, shouldReplaceExitWithBack, TrackDialogHierarchy } = (0,DialogStack/* useDialogStackActor */.tE)(open);
    const closeBothCompositionDialog = (0,react.useCallback)(()=>{
        if (isOpenFromApplicationBoard) {
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
                open: false,
                reason: 'popup',
                options: {
                    isOpenFromApplicationBoard
                }
            });
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
                open: false,
                reason: 'timeline',
                options: {
                    isOpenFromApplicationBoard
                }
            });
        }
        onClose?.();
    }, [
        isOpenFromApplicationBoard,
        onClose
    ]);
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TrackDialogHierarchy, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    !props.isOnBack ? closeBothCompositionDialog() : onClose?.();
                },
                BackdropProps: {
                    transitionDuration: 0,
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...(0,omit/* default */.Z)(rest, 'isOnBack'),
                ...independent ? (0,omit/* default */.Z)(extraProps, 'hidden', 'style', 'aria-hidden') : extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ErrorBoundary/* ErrorBoundary */.S, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: cx(titleTabs ? dialogTitleWithTabs : ''),
                            classes: {
                                root: dialogTitle
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    disableTouchRipple: true,
                                    classes: {
                                        root: cx(dialogCloseButton, titleTabs ? dialogCloseButtonWithTabs : '')
                                    },
                                    "aria-label": t.dialog_dismiss(),
                                    onClick: !props.isOnBack ? closeBothCompositionDialog : onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIcon, {
                                        style: titleBarIconStyle !== 'close' && shouldReplaceExitWithBack && !Sniffings/* Sniffings */.Y.is_dashboard_page ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                    className: cx(dialogTitleEndingContent, titleTabs ? dialogTitleEndingContentWithTabs : ''),
                                    children: titleTail
                                }),
                                /* If you want to apply different size gaps between rows, then consider using actual rows for the job, since you cannot apply different widths to different gaps  */ titleTabs ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                    className: dialogGap
                                }) : null,
                                titleTabs ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                    className: dialogTitleTabs,
                                    children: titleTabs
                                }) : null,
                                networkTabs ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                    className: dialogNetworkTabs,
                                    children: networkTabs
                                }) : null
                            ]
                        }) : null,
                        /* There is a .MuiDialogTitle+.MuiDialogContent selector that provides paddingTop: 0 */ /* Add an empty span here to revert this effect. */ /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        }));
}
function CopyElementWithNewProps(children, Target, extraClasses, cx) {
    return (react.Children.map(children, (child)=>{
        const allKeys = new Set([
            ...Object.keys(extraClasses),
            ...Object.keys(child?.props?.classes ?? {})
        ]);
        const result = {};
        for (const key of allKeys){
            result[key] = cx(extraClasses[key], child?.props?.classes?.[key]);
        }
        return child?.type === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: result
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useSharedTrans)
/* harmony export */ });
/* unused harmony export SharedTrans */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
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
function useSharedTrans() /**
      * `Send`
      */ /**
      * `Search Area`
      */ /**
      * `Approve`
      */ /**
      * `Operation`
      */ /**
      * `Approve MASK?`
      */ /**
      * `To interact with Polygon network, MATIC tokens are required to pay as gas fees. SmartPay allow users to pay gas fee on Polygon network with MASK token.`
      */ /**
      * `Do you want to set MASK token as gas fee?`
      */ /**
      * `Mask Network requires you to authorize the following websites before using it.`
      */ /**
      * `Please create a Persona and verify your account to use this function.`
      */ /**
      * `Persona`
      */ /**
      * `Create persona`
      */ /**
      * `Congratulations!`
      */ /**
      * `Coming soon`
      */ /**
      * `Domain Request`
      */ /**
      * `Available Balance`
      */ /**
      * `Done`
      */ /**
      * `Added by user`
      */ /**
      * `All`
      */ /**
      * `Retry`
      */ /**
      * `Gwei`
      */ /**
      * `Import`
      */ /**
      * `Select an NFT`
      */ /**
      * `Balance`
      */ /**
      * `Balance({{symbol}})`
      */ /**
      * `Balance`
      */ /**
      * `DSearch`
      */ /**
      * `Web3 Profile Card`
      */ /**
      * `Web3 Profile`
      */ /**
      * `Unlock`
      */ /**
      * `Select`
      */ /**
      * `Select a token`
      */ /**
      * `Select Collectibles`
      */ /**
      * `No collectible found.`
      */ /**
      * `Manage Token List`
      */ /**
      * `Mobile Number`
      */ /**
      * `Loading`
      */ /**
      * `Name or Contract address e.g. USDC or 0x234...`
      */ /**
      * `Incorrect contract address.`
      */ /**
      * `Manage Token Lists`
      */ /**
      * `Address`
      */ /**
      * `Dismiss`
      */ /**
      * `Confirm`
      */ /**
      * `Share`
      */ /**
      * `Confirm`
      */ /**
      * `Transaction`
      */ /**
      * `View on Explorer`
      */ /**
      * `Your transaction was confirmed!`
      */ /**
      * `Load failed`
      */ /**
      * `Reload`
      */ /**
      * `Loading`
      */ /**
      * `No results`
      */ /**
      * `Powered by`
      */ /**
      * `Copy`
      */ /**
      * `Copied!`
      */ /**
      * `GO+`
      */ /**
      * `RSS3`
      */ /**
      * `Mask Network`
      */ /**
      * `Search`
      */ /**
      * `Check Security`
      */ /**
      * `Please enter token contract address.`
      */ /**
      * `Token info`
      */ /**
      * `More Details`
      */ /**
      * `More`
      */ /**
      * `Details`
      */ /**
      * `Unnamed`
      */ /**
      * `Contributions`
      */ /**
      * `Description`
      */ /**
      * `day`
      */ /**
      * `days`
      */ /**
      * `hour`
      */ /**
      * `hours`
      */ /**
      * `ago`
      */ /**
      * `Properties`
      */ /**
      * `Security Detection`
      */ /**
      * `{{quantity}} Risky items`
      */ /**
      * `{{quantity}} Attention items`
      */ /**
      * `{{quantity}} Risky item`
      */ /**
      * `{{quantity}} Attention item`
      */ /**
      * `Change`
      */ /**
      * `Edit`
      */ /**
      * `Connect your wallet`
      */ /**
      * `Connected wallets settings`
      */ /**
      * `Wallet Settings`
      */ /**
      * `Pending...`
      */ /**
      * `Advanced Settings`
      */ /**
      * `Medium`
      */ /**
      * `High`
      */ /**
      * `Instant`
      */ /**
      * `~ {{distance}}`
      */ /**
      * `up to {{- amount}} Gwei`
      */ /**
      * `Slippage Tolerance`
      */ /**
      * `Custom`
      */ /**
      * `Basic`
      */ /**
      * `Advanced`
      */ /**
      * `Gas Fee`
      */ /**
      * `Transaction cost`
      */ /**
      * `Gas Price`
      */ /**
      * `Gas Limit`
      */ /**
      * `Max Priority Fee`
      */ /**
      * `Max Fee`
      */ /**
      * `Current base fee is {{fee}} Gwei`
      */ /**
      * `Transaction with extremely low slippage tolerance might be reverted because of very small market movement.`
      */ /**
      * `You may have {{percentage}}% less received with this level of slippage tolerance.`
      */ /**
      * `Invalid slippage tolerance.`
      */ /**
      * `Enter a gas price`
      */ /**
      * `Gas price must be greater than 0 Gwei.`
      */ /**
      * `Gas price is too low for network conditions.`
      */ /**
      * `Gas price is higher than necessary. You may pay more than needed.`
      */ /**
      * `Enter a gas limit`
      */ /**
      * `Gas limit too low will cause the transaction to fail.`
      */ /**
      * `Enter a max fee`
      */ /**
      * `Enter a max priority fee`
      */ /**
      * `Max fee is too low for network conditions.`
      */ /**
      * `Max fee is higher than necessary.`
      */ /**
      * `Max priority fee must be greater than 0 Gwei.`
      */ /**
      * `Max priority fee is too low for network conditions.`
      */ /**
      * `Max priority fee is higher than necessary. You may pay more than needed.`
      */ /**
      * `Max fee cannot be lower than max priority fee.`
      */ /**
      * ` ≈ {{-usd}}`
      */ /**
      * `Default`
      */ /**
      * `Provided by`
      */ /**
      * `Web3 Profile`
      */ /**
      * `Powered by`
      */ /**
      * `Mask Network`
      */ /**
      * `Loading....`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Confirm Risk Warning`
      */ /**
      * `Updating Gas Fee…`
      */ /**
      * `No Gas Fee`
      */ /**
      * `Invalid Network`
      */ /**
      * `Wrong Network`
      */ /**
      * `Unsupported Network`
      */ /**
      * `Switch Network`
      */ /**
      * `{{network}} network is not added in the wallet. Please add and try it again.`
      */ /**
      * `Network error or user cancels the process.`
      */ /**
      * `Switch to {{network}}`
      */ /**
      * `This network is not supported yet.`
      */ /**
      * `Switching to {{network}}`
      */ /**
      * `Please switch to this network in the mobile
    application wallet you are connected to.`
      */ /**
      * `Change to {{network}}`
      */ /**
      * `Not available on {{network}} Network.`
      */ /**
      * `You must give the {{provider}} smart contract permission to use your {{symbol}}. You only have to do this once per token.`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `Select an NFT Contract`
      */ /**
      * `Select an NFT Contract Owner`
      */ /**
      * `Select an NFT Contract Operator`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `Unlocking {{symbol}}...`
      */ /**
      * `Unlock {{symbol}} successfully`
      */ /**
      * `Click to retry`
      */ /**
      * `Change Wallet`
      */ /**
      * `WalletConnect`
      */ /**
      * `Scan QR code with a WalletConnect-compatible wallet`
      */ /**
      * `Save`
      */ /**
      * `Cancel`
      */ /**
      * `Add Wallet`
      */ /**
      * `Enter an amount`
      */ /**
      * `Failed to load {{symbol}}. Click to retry.`
      */ /**
      * `Toggle the button to manage wallet display settings.`
      */ /**
      * `Change to EVM wallet`
      */ /**
      * `Change`
      */ /**
      * `Please add wallets to receive tips`
      */ /**
      * `No connected wallet, please add wallet.`
      */ /**
      * `Save successfully`
      */ /**
      * `Save failed`
      */ /**
      * `Web3 Profile Wallet set up successfully.`
      */ /**
      * `Web3 Profile Wallet setup failed, please try again.`
      */ /**
      * `Toggle the button to manage wallet display settings.`
      */ /**
      * `Pending`
      */ /**
      * `Data source is retrieved from {{source}}.`
    
      * - account_icon_tooltips$twitter: `Data source is retrieved from Twitter profile and {{source}}.`
    
      * - account_icon_tooltips$facebook: `Data source is retrieved from Facebook profile and {{source}}.`
    
      * - account_icon_tooltips$next_id: `Data source is retrieved from NEXT.ID.`
      */ /**
      * ``
    
      * - account_icon_tooltips_only$twitter: `Data source is retrieved from Twitter profile.`
    
      * - account_icon_tooltips_only$facebook: `Data source is retrieved from Facebook profile`
    
      * - account_icon_tooltips_only$next_id: `Data source is retrieved from NEXT.ID.`
      */ /**
      * `Data source is retrieved from Twitter profile and {{source}}.`
      */ /**
      * `Data source is retrieved from Twitter profile.`
      */ /**
      * `Data source is retrieved from Facebook profile and {{source}}.`
      */ /**
      * `Data source is retrieved from Facebook profile`
      */ /**
      * `Data source is retrieved from NEXT.ID.`
      */ /**
      * `Data source is retrieved from NEXT.ID.`
      */ /**
      * `Data source is retrieved from `
      */ /**
      * `Data source is retrieved from Twitter profile and `
      */ /**
      * `Data source is retrieved from Facebook profile and `
      */ /**
      * `Data source is retrieved from NEXT.ID and `
      */ /**
      * `Copy Address`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `Create Persona`
      */ /**
      * `Connect Persona`
      */ /**
      * `Verify your Twitter ID`
      */ /**
      * `Persona`
      */ /**
      * `Please create a Persona and verify your account to use this function.`
      */ /**
      * `Create persona`
      */ /**
      * `Follow`
      */ /**
      * `Following`
      */ /**
      * `View`
      */ /**
      * `Verified by {{ marketplace }}`
      */ /**
      * `No NFTs found.`
      */ /**
      * `Add NFTs`
      */ /**
      * `The collectible address is required`
      */ /**
      * `Incorrect contract address.`
      */ /**
      * `The collectible token id is required`
      */ /**
      * `Incorrect collectible token id`
      */ /**
      * `The contract address is incorrect or the collection does not belong to you.`
      */ /**
      * `Name or Contract address eg.PUNK or 0x234...`
      */ /**
      * `Input contract address`
      */ /**
      * `Token ID separated by conma, e.g. 1223,1224,`
      */ /**
      * `Phantom only supports the Solana chain.`
      */ /**
      * `Blocto only supports the Flow chain.`
      */ /**
      * `Fortmatic only supports the ETH and BNB chain.`
      */ /**
      * `Only supports EVM chains, ETH, BNB chain, Polygon, Arb, Op, etc.`
      */ /**
      * `Connect Fortmatic`
      */ /**
      * `Choose Network`
      */ /**
      * `Connect Wallet`
      */ /**
      * `View on Explorer`
      */ /**
      * `Disconnect`
      */ /**
      * `Wallet Account`
      */ /**
      * `Success`
      */ /**
      * `Failed`
      */ /**
      * `Clear`
      */ /**
      * `{{count}} Pending`
      */ /**
      * `{{count}} Pendings`
      */ /**
      * `Clear All`
      */ /**
      * `Not select wallet yet.`
      */ /**
      * `Risk Warning`
      */ /**
      * `Clicking the confirm button means that you agree to bear the above possible risks.`
      */ /**
      * `Confirm`
      */ /**
      * `Done`
      */ /**
      * `Confirming`
      */ /**
      * `Confirm Failed`
      */ /**
      * `Confirm this transaction in your wallet`
      */ /**
      * `Transaction Confirmed`
      */ /**
      * `Transaction Failed`
      */ /**
      * `Low`
      */ /**
      * `Medium`
      */ /**
      * `High`
      */ /**
      * `Enter a gas limit`
      */ /**
      * `GWEI`
      */ /**
      * `Max fee`
      */ /**
      * `Max priority fee`
      */ /**
      * `Gas Limit`
      */ /**
      * `Max fee is too low for network conditions.`
      */ /**
      * `Max fee is higher than necessary`
      */ /**
      * `Max priority fee must be greater than 0 GWEI`
      */ /**
      * `Max priority fee is too low for network conditions`
      */ /**
      * `Max priority fee is higher than necessary. You may pay more than needed.`
      */ /**
      * `Max fee cannot be lower than max priority fee`
      */ /**
      * `Enter a max priority fee`
      */ /**
      * `Enter a max fee`
      */ /**
      * `Gas Price`
      */ /**
      * `Enter a gas price`
      */ /**
      * `Gas limit must be at least {{limit}}`
      */ /**
      * `Gas fee settings`
      */ /**
      * `Connect to`
      */ /**
      * `Try Again`
      */ /**
      * `Connected to`
      */ /**
      * `Initializing...`
      */ /**
      * `You've opened the popup, please confirm.`
      */ /**
      * `Applications`
      */ /**
      * `APP Settings`
      */ /**
      * `Twitter ID verified persona({{currentSNSConnectedPersonaPublicKey}}) is not consistent with your current persona({{currentPersonaPublicKey}}). Please switch to persona({{currentSNSConnectedPersonaPublicKey}}) and try again.`
      */ /**
      * `Please verify your social account`
      */ /**
      * `Please create your persona and use it`
      */ /**
      * `Please create a persona for accessing Dapps.`
      */ /**
      * `Please connect your persona`
      */ /**
      * `Please connect your wallet`
      */ /**
      * `APP list`
      */ /**
      * `Plug-in switch`
      */ /**
      * `Listed`
      */ /**
      * `Unlisted`
      */ /**
      * `Click the application icon to hide in the APP list.`
      */ /**
      * `Click the setting icon to list it on the App board.`
      */ /**
      * `Click the application icon to list it on the App board.`
      */ /**
      * `Optimize search results with token names, NFT collections, ENS domains or wallet addresses.`
      */ /**
      * `Token`
      */ /**
      * `Get optimized search results when you look for a token.`
      */ /**
      * `NFTs`
      */ /**
      * `Search with the name of an NFT collection or its symbol to get optimized results.`
      */ /**
      * `ENS or Wallet Address`
      */ /**
      * `Search with an ENS domain or wallet address to get optimized results.`
      */ /**
      * `Claimed 1 {{name}} successfully.`
      */ /**
      * `You claimed {{- amount}} {{name}}.`
      */ /**
      * `Lucky Drop`
      */ /**
      * `Share`
      */ /**
      * `OK`
      */ /**
      * `Connect Wallet`
      */ /**
      * `The input is not a single file.`
      */ /**
      * `The file is too large; limit is {{limit}}.`
      */ /**
      * `Failed to upload file`
      */ /**
      * `Exceeded the maximum file size of 10MB.`
      */ /**
      * `Drag & Drop your file here`
      */ /**
      * `Size limit: 10 MB`
      */ /**
      * `or`
      */ /**
      * `Browse File`
      */ /**
      * `Reload`
      */ /**
      * `Load failed`
      */ /**
      * `Persona`
      */ /**
      * `Copy Success`
      */ /**
      * `Connect {{-nickname}}`
      */ /**
      * `Please connect {{-nickname}} before using dApps.`
      */ /**
      * `Verify {{-nickname}}`
      */ /**
      * `Please verify current persona with social media account before using dApps.`
      */ /**
      * `Connect and Verify {{-nickname}}`
      */ /**
      * `Enable plugin`
      */ /**
      * `This function has been turned off in the App settings. Enable plug-ins to fully access.`
      */ /**
      * `Please connect {{-nickname}} and send proof post before using dApps.`
      */ /**
      * `Price Statistic`
      */ /**
      * `Market Cap`
      */ /**
      * `Circulating Supply`
      */ /**
      * `24 Hour Trading Vol`
      */ /**
      * `Total Supply`
      */ /**
      * `Circulating Supply`
      */ /**
      * `Info`
      */ /**
      * `Contract`
      */ /**
      * `Community`
      */ /**
      * `Website`
      */ /**
      * `Please select the wallet to activate the function after saving the settings.`
      */ /**
      * `Go to Settings`
      */ /**
      * `Can’t find a valid user address data source.`
      */ /**
      * `Provided by plugin`
      */ /**
      * `Encrypt`
      */ /**
      * `Tell selective friends what's happening...`
      */ /**
      * `Encrypted Post`
      */ /**
      * `Visible To`
      */ /**
      * `Encryption Method`
      */ /**
      * `Enable auto paste`
      */ /**
      * `eg: Twitter accounts, Persona public keys, wallet addresses or ENS`
      */ /**
      * `Plugins`
      */ /**
      * `Text`
      */ /**
      * `Use text encryption`
      */ /**
      * `Image`
      */ /**
      * `Encrypt messages in images`
      */ /**
      * `No local key`
      */ /**
      * `All`
      */ /**
      * `Everyone`
      */ /**
      * `Private`
      */ /**
      * `Just Me`
      */ /**
      * `1 friend`
      */ /**
      * `{{count}} friends`
      */ /**
      * `Share with`
      */ /**
      * `Just Selected Contacts`
      */ /**
      * `No Persona-based encryption friends locally, please try searching.`
      */ /**
      * `Persona required.`
      */ /**
      * `Create`
      */ /**
      * `Connect`
      */ /**
      * `Reset`
      */ /**
      * `Editor`
      */ /**
      * `Only TypedMessageText is supported currently.`
      */ /**
      * `Share to Social Networks`
      */ /**
      * `Report NFT Scam Contract?`
      */ /**
      * `Are you sure to report {{name}}? After approving, this NFT will be marked as spam.`
      */ /**
      * `Spam`
      */ /**
      * `Report Spam`
      */ /**
      * `Successfully reported.`
      */ /**
      * `Failed to report spam.`
      */ /**
      * - day_one: `day`
    
      * - day_other: `days`
      */ /**
      * - hour_one: `hour`
    
      * - hour_other: `hours`
      */ /**
      * - wallet_status_pending_one: `{{count}} Pending`
    
      * - wallet_status_pending_other: `{{count}} Pendings`
      */ /**
      * - compose_shared_friends_one: `1 friend`
    
      * - compose_shared_friends_other: `{{count}} friends`
      */ /**
      * - account_icon_merged_tooltip$normal: `Data source is retrieved from `
    
      * - account_icon_merged_tooltip$twitter: `Data source is retrieved from Twitter profile and `
    
      * - account_icon_merged_tooltip$facebook: `Data source is retrieved from Facebook profile and `
    
      * - account_icon_merged_tooltip$next_id: `Data source is retrieved from NEXT.ID and `
      */ /**
      * - upload_error$single: `The input is not a single file.`
    
      * - upload_error$oversized: `The file is too large; limit is {{limit}}.`
      */ /**
      * - upload_file_title$failed: `Failed to upload file`
      */ /**
      * - upload_file_message$failed: `Exceeded the maximum file size of 10MB.`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("shared");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "shared",
            shouldUnescape: true,
            ...props
        });
}
const SharedTrans = /**
      * `Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves.`
      */ /**
      * ` ≈ <span>{{usd}}</span>`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));


/***/ }),

/***/ 64244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AZ: () => (/* binding */ DisableShadowRootContext),
/* harmony export */   EP: () => (/* binding */ StyleSheetsContext),
/* harmony export */   N: () => (/* binding */ PreventShadowRootEventPropagationListContext),
/* harmony export */   UW: () => (/* binding */ stopPropagation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

/** @internal */ const StyleSheetsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
StyleSheetsContext.displayName = 'StyleSheetsContext';
/** @internal */ const PreventShadowRootEventPropagationListContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([]);
PreventShadowRootEventPropagationListContext.displayName = 'PreventShadowRootEventPropagationListContext';
/** This context does not join any ShadowRoot related feature. */ const DisableShadowRootContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
DisableShadowRootContext.displayName = 'DisableShadowRootContext';
/** @internal */ const stopPropagation = (e)=>e.stopPropagation();


/***/ }),

/***/ 23615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 88505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 0 0-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
}), 'ArrowBackRounded'));

/***/ }),

/***/ 54458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ 17720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore'));

/***/ }),

/***/ 2276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

/***/ 34824:
/***/ ((__unused_webpack_module, exports) => {

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



if (true) {
  module.exports = __webpack_require__(34824);
} else {}


/***/ }),

/***/ 70491:
/***/ ((__unused_webpack_module, exports) => {

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



if (true) {
  module.exports = __webpack_require__(70491);
} else {}


/***/ })

}]);
//# sourceMappingURL=5598.js.map