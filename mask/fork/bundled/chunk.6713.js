(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6713],{

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 58213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 42567:
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
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugins/SwitchLogo/src/base.ts + 7 modules
var base = __webpack_require__(31965);
// EXTERNAL MODULE: ./packages/plugins/SwitchLogo/src/constants.ts
var constants = __webpack_require__(7369);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useOpenApplicationSettings.ts
var useOpenApplicationSettings = __webpack_require__(71437);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(99371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SwitchLogo.ts
var SwitchLogo = __webpack_require__(73835);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
;// CONCATENATED MODULE: ./packages/plugins/SwitchLogo/src/locales/i18n_generated.ts
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
function useSwitchLogoTrans() /**
      * `Switch Twitter Logo`
      */ /**
      * `Share and recommend this feature after saving.`
      */ /**
      * `Reset`
      */ /**
      * `Save`
      */ /**
      * `Powered by `
      */ /**
      * `Classics Logo`
      */ /**
      * `New Logo`
      */ /**
      * `Mask Network`
      */ /**
      * `I just replaced Twitter X logo with the original blue bird one with Mask Network extension.`
      */ /**
      * `Download https://mask.io to try more powerful tools on Twitter.`
      */ /**
      * `Switch between the classic Twitter logo and the new one.`
      */ /**
      * `Switch Twitter Logo`
      */ /**
      * `Share and recommend this feature after saving.`
      */ /**
      * `Classics Logo`
      */ /**
      * `New Logo`
      */ /**
      * `I just replaced Twitter X logo with the original blue bird one with Mask Network extension.`
      */ /**
      * `Download https://mask.io to try more powerful tools on Twitter.`
      */ /**
      * `Switch between the classic Twitter logo and the new one.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("io.mask.switch-logo");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/SwitchLogo/src/SiteAdaptor/SwitchLogoDialog.tsx













const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialog: {
            width: 400,
            position: 'absolute',
            top: 10,
            right: 10
        },
        content: {
            padding: 24
        },
        iconButton: {
            border: `1px solid ${theme.palette.maskColor.secondaryLine}`,
            width: 170,
            height: 74,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            cursor: 'pointer',
            gap: 8
        },
        selected: {
            border: `1px solid ${theme.palette.maskColor.highlight}`
        },
        icons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 8
        },
        buttons: {
            display: 'flex',
            gap: 8,
            flexDirection: 'row'
        },
        powered_by: {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 16,
            justifyContent: 'end',
            alignItems: 'center'
        }
    }));
const SwitchLogoDialog = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = useSwitchLogoTrans();
    const { classes, cx } = useStyles();
    const identity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const defaultLogoType = (0,useValueRef/* useValueRef */.E)(settings/* switchLogoSettings */.v2[identity?.identifier?.userId || '']);
    const [logoType, setLogoType] = (0,react.useState)(SwitchLogo/* SwitchLogoType */.O.Classics);
    const [needShare, setNeedShare] = (0,react.useState)(true);
    const [open, setOpen] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.switchLogoDialogUpdated.on(async (data)=>{
            setOpen(data.open);
        });
    }, []);
    const onSave = (0,react.useCallback)(async ()=>{
        if (!identity?.identifier?.userId || !settings/* switchLogoSettings */.v2) return;
        settings/* switchLogoSettings */.v2[identity.identifier.userId].value = logoType ?? defaultLogoType;
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntrySwitchLogoSave);
        setOpen(false);
        if (needShare && logoType === SwitchLogo/* SwitchLogoType */.O.Classics) {
            (0,context/* share */.BN)?.([
                t.switch_logo_share_text(),
                '#TwitterLogo #TwitterX #SaveTheBird\n',
                t.switch_logo_share_mask()
            ].join('\n'));
        }
    }, [
        logoType,
        identity?.identifier?.userId,
        defaultLogoType,
        needShare
    ]);
    const onChange = (0,react.useCallback)((logoType)=>{
        setLogoType(logoType);
    }, []);
    const openApplicationBoardDialog = (0,useOpenApplicationSettings/* useOpenApplicationSettings */.Y)();
    const disabled = (0,react.useMemo)(()=>{
        if (defaultLogoType === SwitchLogo/* SwitchLogoType */.O.None) return false;
        if (defaultLogoType === logoType) return true;
        return false;
    }, [
        defaultLogoType,
        logoType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: ()=>setOpen(false),
        title: t.switch_logo_title(),
        classes: {
            paper: classes.dialog
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    className: classes.icons,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            className: cx(classes.iconButton, (logoType || defaultLogoType) === SwitchLogo/* SwitchLogoType */.O.Classics ? classes.selected : ''),
                            onClick: ()=>onChange(SwitchLogo/* SwitchLogoType */.O.Classics),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TwitterColored, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 14,
                                    fontWeight: 700,
                                    children: t.switch_logo_classics_logo()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            className: cx(classes.iconButton, (logoType || defaultLogoType) === SwitchLogo/* SwitchLogoType */.O.New ? classes.selected : ''),
                            onClick: ()=>onChange(SwitchLogo/* SwitchLogoType */.O.New),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TwitterX, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 14,
                                    fontWeight: 700,
                                    children: t.switch_logo_new_logo()
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    children: logoType === SwitchLogo/* SwitchLogoType */.O.Classics ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: needShare,
                            onChange: (event)=>setNeedShare(event.target.checked)
                        }),
                        label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 14,
                            fontWeight: 400,
                            lineHeight: "18px",
                            color: (theme)=>theme.palette.maskColor.secondaryDark,
                            children: t.switch_logo_save_tip()
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    className: classes.buttons,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "roundedContained",
                        fullWidth: true,
                        onClick: onSave,
                        disabled: disabled,
                        children: t.save()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    className: classes.powered_by,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: "14px",
                            fontWeight: 700,
                            marginRight: "5px",
                            color: (theme)=>theme.palette.maskColor.secondaryDark,
                            children: t.powered_by()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: "14px",
                            fontWeight: 700,
                            marginRight: "4px",
                            children: t.mask_network()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            size: "small",
                            sx: {
                                margin: '-5px'
                            },
                            onClick: ()=>openApplicationBoardDialog(),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gear, {
                                size: 24
                            })
                        })
                    ]
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/SwitchLogo/src/SiteAdaptor/index.tsx








const recommendFeature = {
    description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
        i18nKey: "description",
        ns: PluginID/* PluginID */.P.SwitchLogo
    }),
    backgroundGradient: 'linear-gradient(360deg, #FFECD2 -0.43%, #FCB69F 99.57%)'
};
const site = {
    ...base/* base */.u,
    ApplicationEntries: [
        {
            ApplicationEntryID: constants/* PLUGIN_ID */.Uu,
            appBoardSortingDefaultPriority: 10,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TwitterColored, {
                size: 36
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.SwitchLogo,
                i18nKey: "title"
            }),
            category: 'dapp',
            recommendFeature,
            description: recommendFeature.description
        }
    ],
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchLogoDialog, {});
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

/***/ 15019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $n: () => (/* binding */ EMPTY_ENTRY),
/* harmony export */   Dv: () => (/* binding */ FALSE),
/* harmony export */   LZ: () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   i_: () => (/* binding */ UNDEFINED),
/* harmony export */   v6: () => (/* binding */ EMPTY_STRING)
/* harmony export */ });
/* unused harmony exports ZERO, TRUE, NULL */
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);
/* harmony import */ var _helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28129);


const ZERO = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(0);
const UNDEFINED = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(undefined);
const EMPTY_STRING = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)('');
const EMPTY_ARRAY = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP);
const EMPTY_ENTRY = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)({});
const TRUE = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(true);
const FALSE = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false);
const NULL = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(null);


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

/***/ 71437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useOpenApplicationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49588);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25127);



function useOpenApplicationSettings() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((tab, focusPluginID)=>{
        _index_js__WEBPACK_IMPORTED_MODULE_1__/* .ApplicationBoardSettingsModal */ .Ps.open({
            setPluginMinimalModeEnabled: _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__/* .setPluginMinimalModeEnabled */ .I1,
            tab,
            focusPluginID
        });
    }, []);
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
//# sourceMappingURL=chunk.6713.js.map