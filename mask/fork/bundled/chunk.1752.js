(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1752],{

/***/ 87486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ injectPageInspectorDefault)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(30504);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(5081);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(34278);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(51527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(91372);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TextField/TextField.js
var TextField = __webpack_require__(76550);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-draggable@4.4.5_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__(24224);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/shared/DraggableDiv.tsx




const useStyle = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: 'none'
        },
        paper: {
            [theme.breakpoints.up('sm')]: {
                top: '2em',
                right: '2em'
            },
            [theme.breakpoints.down('sm')]: {
                bottom: '2em'
            },
            maxWidth: 550,
            position: 'fixed',
            pointerEvents: 'initial'
        }
    }));
function DraggableDiv({ DraggableProps, ...props }) {
    const { classes } = useStyle();
    const ref = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((cjs_default()), {
            nodeRef: ref,
            bounds: "parent",
            cancel: "p, h1, input, button, address",
            handle: "nav",
            ...DraggableProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ...props,
                ref: ref,
                className: classes.paper
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Download.js


/* harmony default export */ const Download = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
}), 'Download'));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/OpenInBrowser.js


/* harmony default export */ const OpenInBrowser = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser'));
;// CONCATENATED MODULE: ./packages/mask/shared/helpers/download.ts
// TODO: maybe fallback to normal HTML save file?
async function saveFileFromUrl(url, fileName) {
    await browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
async function saveFileFromBuffer(options) {
    const blob = new Blob([
        options.fileContent
    ], {
        type: options.mimeType
    });
    const url = URL.createObjectURL(blob);
    await browser.downloads.download({
        url,
        filename: options.fileName,
        saveAs: true
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/AutoPasteFailedDialog.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        title: {
            marginLeft: theme.spacing(1)
        },
        paper: {},
        button: {
            marginRight: theme.spacing(1)
        }
    }));
function AutoPasteFailedDialog(props) {
    const { onClose, data } = props;
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const url = data.image ? URL.createObjectURL(data.image) : undefined;
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const [, copy] = (0,useCopyToClipboard/* default */.Z)();
    const isMobile = (0,useMatchXS/* useMatchXS */.I)();
    const fileName = `masknetwork-encrypted-${(0,format/* default */.Z)(Date.now(), 'yyyyMMddHHmmss')}.png`;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DraggableDiv, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
            elevation: 2,
            className: classes.paper,
            sx: isMobile ? {
                width: '100vw'
            } : undefined,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "small",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.title,
                                children: t.auto_paste_failed_dialog_title()
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    sx: {
                        paddingTop: 0
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textPrimary",
                                sx: {
                                    marginBottom: 1
                                },
                                children: t.auto_paste_failed_dialog_content()
                            })
                        }),
                        props.data.text ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    multiline: true,
                                    fullWidth: true,
                                    value: data.text,
                                    InputProps: {
                                        readOnly: true
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        marginBottom: 1
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "contained",
                                    onClick: ()=>{
                                        copy(data.text);
                                        showSnackbar(t.copy_success_of_text(), {
                                            variant: 'success',
                                            preventDuplicate: true,
                                            anchorOrigin: {
                                                vertical: 'top',
                                                horizontal: 'center'
                                            }
                                        });
                                        data.image ?? onClose();
                                    },
                                    children: t.copy_text()
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            marginBottom: 1
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            textAlign: "left",
                            children: [
                                data.image ? // It must be img
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                    src: URL.createObjectURL(data.image),
                                    style: {
                                        width: '100%'
                                    }
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    marginBottom: 1
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "contained",
                                    onClick: async ()=>{
                                        if (!data.image) return;
                                        await navigator.clipboard.write([
                                            new ClipboardItem({
                                                [data.image.type]: data.image
                                            })
                                        ]);
                                        showSnackbar(t.copy_success_of_image(), {
                                            variant: 'success',
                                            preventDuplicate: true,
                                            anchorOrigin: {
                                                vertical: 'top',
                                                horizontal: 'center'
                                            }
                                        });
                                    },
                                    children: t.copy_image()
                                }),
                                url ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "text",
                                    onClick: ()=>saveFileFromUrl(url, fileName),
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Download, {}),
                                    children: t.download()
                                }) : null,
                                url ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "text",
                                    component: Link/* default */.Z,
                                    href: url,
                                    target: "_blank",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInBrowser, {}),
                                    children: t.auto_paste_failed_dialog_image_caption()
                                }) : null
                            ]
                        })
                    ]
                }),
                /* To leave some bottom padding */ /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {})
            ]
        })
    });
}
function useAutoPasteFailedDialog() {
    const [open, setOpen] = (0,react.useState)(false);
    const [data, setData] = (0,react.useState)({
        text: ''
    });
    return [
        (data)=>{
            setData(data);
            setOpen(true);
        },
        open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutoPasteFailedDialog, {
            onClose: ()=>setOpen(false),
            data: data
        }) : null
    ];
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/PageInspector.tsx









const GlobalInjection = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useAnyMode, (x)=>x.GlobalInjection);
function PageInspector() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { showSnackbar, closeSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const [autoPasteFailed, JSX] = useAutoPasteFailedDialog();
    const xsMatched = (0,useMatchXS/* useMatchXS */.I)();
    (0,react.useEffect)(()=>Messages/* MaskMessages */.q.events.autoPasteFailed.on((data)=>{
            const key = data.image ? Math.random() : data.text;
            const close = ()=>{
                closeSnackbar(key);
            };
            const timeout = setTimeout(close, 15 * 1000);
            /** 15 seconds */ showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: t.auto_paste_failed_snackbar()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        justifyContent: "flex-end",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "inherit",
                                variant: "text",
                                onClick: ()=>[
                                        clearTimeout(timeout),
                                        close(),
                                        autoPasteFailed(data)
                                    ],
                                children: t.auto_paste_failed_snackbar_action()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "inherit",
                                variant: "text",
                                "aria-label": "Close",
                                onClick: close,
                                children: t.auto_paste_failed_snackbar_action_close()
                            })
                        ]
                    })
                ]
            }), {
                variant: 'info',
                preventDuplicate: true,
                anchorOrigin: xsMatched ? {
                    vertical: 'bottom',
                    horizontal: 'center'
                } : {
                    horizontal: 'right',
                    vertical: 'top'
                },
                key,
                action: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
            });
        }), []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            JSX,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalInjection, {})
        ]
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PageInspector.tsx




function injectPageInspectorDefault() {
    const PageInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PageInspectorDefault() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspector, {});
    });
    return function injectPageInspector(signal) {
        (0,renderInShadowRoot/* attachReactTreeWithoutContainer */.Ei)('page-inspector', /*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspectorDefault, {}), signal);
    };
}


/***/ }),

/***/ 10791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ InitAutonomousStateProfiles)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65734);


function InitAutonomousStateProfiles(signal, ref, network) {
    query(network, ref);
    signal.addEventListener('abort', _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages */ .q.events.ownPersonaChanged.on(()=>query(network, ref)));
    async function query(network, ref) {
        const val = await _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.queryOwnedProfilesInformation(network);
        if (signal.aborted) return;
        ref.value = val;
    }
}


/***/ }),

/***/ 16900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ creator),
/* harmony export */   Z: () => (/* binding */ stateCreator)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85094);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8482);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);



const stateCreator = {
    profiles: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ValueRef */ .Xf([], lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)
};
const creator = {
    EmptyIdentityResolveProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ValueRef */ .Xf({}, lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z),
    EmptyPostProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ObservableWeakMap */ .$f(),
    EmptyThemeSettingsProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ValueRef */ .Xf({
            size: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .FontSize */ .Bf.Normal,
            mode: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ThemeMode */ .hY.Light,
            color: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ThemeColor */ .tP.Blue,
            isDim: false
        }, lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)
};


/***/ }),

/***/ 80029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ createRefsForCreatePostContext),
  L: () => (/* binding */ createSiteAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js
var difference = __webpack_require__(12313);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post.ts
var post = __webpack_require__(82654);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post-iv.ts
var post_iv = __webpack_require__(97039);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Observable.ts
var Observable = __webpack_require__(8482);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/empty.ts
var empty = __webpack_require__(40048);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/resolveFacebookLink.ts
function resolveFacebookLink(link) {
    return link.replace(/\?fbclid=[\S\s]*#/, '#');
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/utils/create-post-context.ts





function createSiteAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        const cancel = [];
        opt.signal?.addEventListener('abort', ()=>cancel.forEach((fn)=>fn?.()));
        // #region Mentioned links
        const linksSubscribe = (()=>{
            const isFacebook = ui.activatedSiteAdaptorUI.networkIdentifier === types/* EnhanceableSite */.J.Facebook;
            const links = new ValueRef/* ValueRef */.Xf(constants/* EMPTY_LIST */.rP);
            function evaluate() {
                const text = (0,parseURLs/* parseURLs */.l)((0,extract/* extractTextFromTypedMessage */.V)(opt.rawMessage.getCurrentValue()).unwrapOr('')).concat(opt.postMentionedLinksProvider?.getCurrentValue() || constants/* EMPTY_LIST */.rP).map(isFacebook ? resolveFacebookLink : (x)=>x);
                if ((0,difference/* default */.Z)(text, links.value).length === 0) return;
                if (!text.length) links.value = constants/* EMPTY_LIST */.rP;
                else links.value = text;
            }
            cancel.push(opt.rawMessage.subscribe(evaluate));
            const f = opt.postMentionedLinksProvider?.subscribe(evaluate);
            f && cancel.push(f);
            return (0,subscription/* createSubscriptionFromValueRef */.v_)(links);
        })();
        // #endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            author: opt.author,
            postID: opt.postID
        };
        const postIdentifier = (0,subscription/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>{
                const by = opt.author.getCurrentValue();
                const id = opt.postID.getCurrentValue();
                if (!id || !by) return null;
                return new post/* PostIdentifier */._(by, id);
            },
            subscribe: (sub)=>{
                const a = opt.author.subscribe(sub);
                const b = opt.postID.subscribe(sub);
                return ()=>void [
                        a(),
                        b()
                    ];
            }
        });
        const postIVIdentifier = new ValueRef/* ValueRef */.Xf(null);
        const isPublicShared = new ValueRef/* ValueRef */.Xf(undefined);
        const isAuthorOfPost = new ValueRef/* ValueRef */.Xf(undefined);
        const version = new ValueRef/* ValueRef */.Xf(undefined);
        return {
            author: author.author,
            coAuthors: opt.coAuthors,
            avatarURL: author.avatarURL,
            nickname: author.nickname,
            postID: author.postID,
            get rootNode () {
                return opt.rootElement.realCurrent;
            },
            rootElement: opt.rootElement,
            actionsElement: opt.actionsElement,
            isFocusing: opt.isFocusing,
            suggestedInjectionPoint: opt.suggestedInjectionPoint,
            comment: opt.comments,
            encryptComment: new ValueRef/* ValueRef */.Xf(null),
            decryptComment: new ValueRef/* ValueRef */.Xf(null),
            identifier: postIdentifier,
            url: (0,subscription/* mapSubscription */.S3)(postIdentifier, (id)=>{
                if (id) return create.getURLFromPostIdentifier?.(id) || null;
                return null;
            }),
            mentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,subscription/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>constants/* EMPTY_LIST */.rP,
                subscribe: ()=>noop/* default */.Z
            }),
            rawMessage: opt.rawMessage,
            hasMaskPayload: (()=>{
                const hasMaskPayload = new ValueRef/* ValueRef */.Xf(false);
                function evaluate() {
                    const msg = (0,extract/* extractTextFromTypedMessage */.V)(opt.rawMessage.getCurrentValue()).unwrapOr('') + '\n' + [
                        ...linksSubscribe.getCurrentValue()
                    ].join('\n');
                    hasMaskPayload.value = create.hasPayloadLike(msg);
                }
                evaluate();
                cancel.push(linksSubscribe.subscribe(evaluate));
                cancel.push(opt.rawMessage.subscribe(evaluate));
                return (0,subscription/* createSubscriptionFromValueRef */.v_)(hasMaskPayload);
            })(),
            postIVIdentifier: (0,subscription/* createSubscriptionFromValueRef */.v_)(postIVIdentifier),
            publicShared: (0,subscription/* createSubscriptionFromValueRef */.v_)(isPublicShared),
            isAuthorOfPost: (0,subscription/* createSubscriptionFromValueRef */.v_)(isAuthorOfPost),
            version: (0,subscription/* createSubscriptionFromValueRef */.v_)(version),
            decryptedReport (opts) {
                const currentAuthor = author.author.getCurrentValue();
                if (opts.iv && currentAuthor) postIVIdentifier.value = new post_iv/* PostIVIdentifier */.b(currentAuthor.network, opts.iv);
                if (opts.sharedPublic?.isSome()) isPublicShared.value = opts.sharedPublic.value;
                if (opts.isAuthorOfPost) isAuthorOfPost.value = opts.isAuthorOfPost.value;
                if (opts.version) version.value = opts.version;
            }
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new ValueRef/* ValueRef */.Xf(null);
    const nickname = new ValueRef/* ValueRef */.Xf(null);
    const postBy = new ValueRef/* ValueRef */.Xf(null);
    const postCoAuthors = new ValueRef/* ValueRef */.Xf([]);
    const postID = new ValueRef/* ValueRef */.Xf(null);
    const postMessage = new ValueRef/* ValueRef */.Xf((0,empty/* makeTypedMessageEmpty */.W)());
    const postMetadataImages = new Observable/* ObservableSet */.n7();
    const postMetadataMentionedLinks = new Observable/* ObservableMap */.vP();
    const subscriptions = {
        avatarURL: (0,subscription/* mapSubscription */.S3)((0,subscription/* createSubscriptionFromValueRef */.v_)(avatarURL), (x)=>{
            if (!x) return null;
            if (!URL.canParse(x)) return null;
            return new URL(x);
        }),
        nickname: (0,subscription/* createSubscriptionFromValueRef */.v_)(nickname),
        author: (0,subscription/* createSubscriptionFromValueRef */.v_)(postBy),
        postID: (0,subscription/* createSubscriptionFromValueRef */.v_)(postID),
        rawMessage: (0,subscription/* createSubscriptionFromValueRef */.v_)(postMessage),
        postImagesProvider: (0,subscription/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>postMetadataImages.asValues,
            subscribe: (sub)=>postMetadataImages.event.on(postMetadataImages.ALL_EVENTS, sub)
        }),
        postMentionedLinksProvider: (0,subscription/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>postMetadataMentionedLinks.asValues,
            subscribe: (sub)=>postMetadataMentionedLinks.event.on(postMetadataMentionedLinks.ALL_EVENTS, sub)
        }),
        coAuthors: (0,subscription/* createSubscriptionFromValueRef */.v_)(postCoAuthors)
    };
    return {
        subscriptions,
        avatarURL,
        nickname,
        postBy,
        postID,
        postCoAuthors,
        postMessage,
        postMetadataMentionedLinks,
        postMetadataImages
    };
}


/***/ }),

/***/ 86925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ hasPayloadLike)
/* harmony export */ });
function hasPayloadLike(text) {
    if (typeof text === 'string') return text.includes('\uD83C\uDFBC') && text.includes(':||');
    return true;
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

/***/ 62476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unnecessary-qualifier */ // https://github.com/typescript-eslint/typescript-eslint/issues/7192
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ /**
     * A code loader interface of the plugin API.
     *
     * Plugin should be lazy-loaded. If a plugin is not enabled, it will not be loaded into the Mask.
     *
     * @example
     * ```ts
     * const loader = {
     *     load: () => import('./code'),
     *     hotModuleReload: hot => import.meta.webpackHot && import.meta.webpackHot.accept('./code', () => hot(import('./code')))
     * }
     * ```
     *
     * The `./code` should use `export default` to export what loader expects.
     */ /**
         * The `load()` function will be called on demand.
         *
         * It should not have side effects (e.g. start some daemon, start a new HTTP request or WebSocket client),
         * those work should be in the `.init()` function.
         * @returns the actual definition of this plugin
         * @example load: () => import('./path')
         */ /**
         * This provides the functionality for hot module reload on the plugin.
         * When the callback is called, the old instance of the plugin will be unloaded, then the new instance will be init.
         * @example hotModuleReload: hot => import.meta.webpackHot && import.meta.webpackHot.accept('./path', () => hot(import('./path')))
         */ /**
     * DeferredDefinition should not contain any functionality of the plugin expects the loader.
     * If the plugin is not providing some of the functionality, please can omit that field.
     */ /** Load the Site Adaptor part of the plugin. */ /** Load the extension page part of the plugin. */ /** Load the Worker part of the plugin. */ /**
 * Basic knowledge of the plugin (ID, name, publisher, ...).
 */ /**
         * A lightweight K/V storage used to store some simple data.
         */ /**
         * ID of the plugin. It should be unique.
         * @example "com.mask.wallet"
         */ /**
         * The human readable name of the plugin.
         * @example { i18nKey: "name", fallback: "Never gonna give you up" }
         */ /**
         * A brief description of this plugin.
         * @example { i18nKey: "description", fallback: "This plugin is going to replace every link in the page to https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
         */ /**
         * Publisher of this plugin.
         * @example { link: "https://github.com/Dimensiondev", name: { fallback: "Mask Network", i18nKey: "org_name" } }
         */ /**
         * Configuration of what environment that this plugin expects to run in.
         */ /**
         * Is this plugin marked as "experimental"?
         *
         * If the enableRequirement.target is not "stable", it will be treated as true.
         *
         * This does not affect if the plugin enable or not.
         */ /**
         * If the plugin is in the minimal mode by default.
         */ /** i18n resources of this plugin */ /**
         * Declare what this plugin provides.
         *
         * Declare this field properly so Mask Network can suggest your plugin when needed.
         */ /** Declare ability this plugin supported. */ /**
     * This part is shared between ExtensionPage, Site Adaptor and Worker part
     * which you should include the information above in those three parts.
     */ /**
         * This function is called when the plugin is initialized.
         *
         * The plugin must clean up all side effects it creates when the `AbortSignal` provided aborts
         * to make sure the plugin can be reloaded safely.
         */ /** The publisher of the plugin */ /** The name of the publisher */ /** URL of the publisher */ /** For what stage the plugin should be included in the Mask. */ /**
     * The condition that expected to start the plugin.
     *
     * If the condition changes and becomes invalid, the plugin will be unloaded.
     */ /** The website this plugin supports. */ /** The Web3 Network this plugin supports */ /**
         * Requested origins.
         * Only put necessary permissions here.
         * https://developer.chrome.com/docs/extensions/mv3/match_patterns/
         */ /**
         * opt-in means the listed site is supported.
         * out-out means the listed site is not supported.
         */ /** This plugin can recognize and react to the following metadata keys. */ /** This plugin can recognize and enhance the post that matches the following matchers. */ /** This part runs in the Site Adaptor */ var Plugin; /** To update enabled/disabled status */  /**
             * The injected Lens Content component
             */  /**
         * The name of the slider card
         */  /**
         * Used to order the sliders
         */  /**
         * The injected UI
         */  /**
         * The name of the tab
         */  /**
         * Used to order the sliders
         */  /**
             * The injected tab content
             */  /**
             * If it returns false, this tab will not be displayed.
             */  /**
             * Filter social address.
             */  /**
             * Sort social address in expected order.
             */  /**
         * The name of the cover
         */  /**
         * Used to order the sliders
         */  /**
             * The injected cover component
             */  /**
             * If it returns false, this cover will not be displayed
             */  /**
             * Filter social account
             */  /**
             * Sort social account in expected order
             */  /**
         * The name of setting tab
         */  /**
         * Used to order the tabs
         */  /** Contribute a widget to other plugins. */  /** This part runs in the Popup */  // As you can see we currently don't have so much use case for an API here.
 /** Plugin DO NOT need to define this. This will be auto set by the plugin host. */  /** This part runs in the background page */  /**
         * Start the background service.
         * @param impl Implementation of the RPC
         */  /**
         * Start the background generator service.
         * @param impl Implementation of the RPC
         */  /**
         * This function will be called when user try to generate a new backup.
         * The return value will contribute to the backup file.
         *
         * If it returns a None, it will not contributes to the backup file.
         *
         * If it returns a Some<T>, T will be serialized by JSON.stringify and added into the backup file.
         */  /**
         * This function will be called when the user try to restore a backup file,
         * and there is some data associated with this plugin.
         *
         * @param data The serialized backup content previously returned by `onBackup`.
         * You MUST treat the data as untrustful content because it can be modified by the user.
         */  /**
     * @typeParameter Data It should be a [tagged union](https://en.wikipedia.org/wiki/Tagged_union) with an extra `id` field
     * @example
     *
     * type File = { type: 'file'; name: string; id: string }
     * type Folder = { type: 'folder'; file: string[]; id: string }
     * const Storage: Plugin.Worker.Storage<File | Folder> = context.storage
     * const file: File = { type: 'file', name: 'file.txt', id: uuid() }
     * const folder: Folder = { type: 'folder', file: [file.id], id: uuid() }
     * // Add new data
     * await Storage.add(file)
     * await Storage.add(folder)
     * // Remove
     * await Storage.remove('file', file.id)
     * // Query
     * const result: File | undefined = await Storage.get('file', file.id)
     * const has: boolean = await Storage.has('file', file.id)
     * // iterate
     * for await (const { value } of Storage.iterate('file')) {
     *     // read only during the for...await loop
     *     // !! NO: await Storage.remove('file', file.id)
     *     console.log(value.name)
     * }
     * for await (const cursor of Storage.iterate_mutate('folder')) {
     *     cursor.value // Folder
     *     await cursor.update({ ...cursor.value, file: [] })
     *     await cursor.delete()
     * }
     */  /**
         * Query an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */  /**
         * Store a data into the database.
         * @param data Must be an object with "type" and "id"
         */  /**
         * Remove an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */  /**
         * Iterate over the database of given type (readonly!)
         *
         * !!! During the iterate, you MUST NOT do anything that writes to the store (use iterate_mutate instead)
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */  /**
         * Iterate over the database of given type (read-write).
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */  /** This part defines the plugin part that does not context aware. */  /** This UI will be injected into the global scope of the target page. */  /**
         * Render metadata in many different environments.
         *
         * 1. Environment
         *
         * The render component MUST NOT assume they are running in a specific environment (e.g. Site Adaptor).
         * Plugin messages and RPC MAY NOT working.
         *
         * It MUST NOT assume the environment using the `context` props.
         * ALL actions MUST BE DONE with the given props.
         *
         * Here is some example of *possible* environments.
         * - inside site adaptor, given "composition" context, running in the CompositionDialog.
         * - inside site adaptor, given "post" context,        running in the DecryptedPost.
         * - inside Popups,       given "post" context,        running in the PostInspector (Isolated mode).
         * - on mask.io,          given "post" context,        allowing preview the message without extension installed.
         *
         * 2. Contexts
         *
         * The render component might be used in many different contexts.
         *
         * - "composition" context, the render should be editable, but not interactive (e.g. allow vote).
         * - "post" context, the render should be readonly, but interactive.
         *
         * 3. Actions
         *
         * The render component MUST BE a ForwardRefExotic React Component
         * that support operations defined in `Plugin.ContextFree.MetadataRender.RenderActions`
         */  // #region Static render
 // new Map([ [reader, react component] ])
 // #endregion
 // #region DynamicRender
 // #endregion
 /**
             * This action make the render into the edit state.
             * It should report the result via onEditComplete() props.
             *
             * If this action does not exist, it will be rendered as non-editable.
             */  /**
             * This action make the render quit the edit state.
             * If save is true, the render MUST report the new result via onEditComplete.
             *
             * If this action does not exist, the render should handle the save/cancel by themselves.
             */  /** This metadata render is called in a composition preview context. */  /**
             * When edit() is called, this component should go into to editable state.
             * If the edit completes, the new metadata will be used to replace the old one.
             */  /**
         * This metadata render is called in the decrypted post.
         */  // Helper types
 /**
     * Injected UI. There're two kinds
     * - InjectUIReact: Optimized for React component.
     * - InjectUIRaw: The fallback choice if a React component doesn't apply here.
     */  /**
     *
     * @example
     * ```ts
     * const ui = {
     *      type: 'raw' as const,
     *      init(signal, dom) {
     *          return props => dom.textContent = toString(props)
     *      }
     * }
     * ```
     */  /**
         * The raw version of the inject UI.
         * @param signal The AbortSignal. You should undo side effects when the signal aborts.
         * @param mountingPoint The mounting DOM
         * @returns A function that will be called each time if the `props` has changed
         */  /** The i18n key of the string content. */  /** The fallback content to display if there is no i18n string found. */  /**
 * This namespace is not related to the plugin authors
 */  // ---------------------------------------------------
 /**
         * Control if the plugin is in the minimal mode.
         *
         * If it is in the minimal mode, it will be omitted in some cases.
         */ 
(function(Plugin) {
    let SiteAdaptor;
    (function(SiteAdaptor) {
        let /** This UI will be rendered for each post found. */ /** This UI will be rendered for action of each post found. */ /** This UI will be rendered for each decrypted post. */ /** This UI will be rendered into the global scope of the site. */ /** This UI will be rendered under the Search result of the site */ /** This UI will be rendered under the Search result of the site. */ /** This UI will be an entry to the plugin in the Composition dialog of Mask. */ /** This UI will be use when there is known badges. */ /** This UI will be rendered as an entry in the wallet status dialog */ /** This UI will be rendered as tabs on the profile page */ /** This UI will be rendered as tabs on the profile card */ /** This UI will be rendered as cover on the profile page */ /** This UI will be rendered as tab on the setting dialog */ /** This UI will be rendered components on the avatar realm */ /** This UI will be shared across plugins */ // Widgets?: {
        //     [key in keyof WidgetRegistry]: Widget<WidgetRegistry[key]>
        // }
        /** This UI will be rendered components on the tips realm */ /** This UI will be rendered components on the tips realm */ /** This UI will be rendered as plugin wrapper page */ /**
         * A hook for if this plugin can enhance the #hash or $cash tag.
         */ // #region Composition entry
        /**
     * The entry has two type:
     *
     * - Dialog type: This type is very common so it is supported as first class citizen.
     * - Custom type: Fallback choice if the dialog type cannot do what you want to do.
     */ /**
         * A label that will be rendered in the CompositionDialog as a chip.
         * @example {fallback: "🧧 Red Packet"}
         */ /** This callback will be called when the user clicked on the chip. */ /**
         * A label that will be rendered in the CompositionDialog as a chip.
         * @example {fallback: "🧧 Red Packet"}
         */ /** A React dialog component that receives `open` and `onClose`. The dialog will be opened when the chip clicked. */ /**
         * If this option is true, the dialog will be always mounted even if the dialog is not opening.
         *
         * @default false
         */ // #endregion
        /**
         * The contrast between ApplicationEntryID and PluginID is that one plugin may contains multiple entries.
         */ /**
         * Render entry component
         */ /**
         * Used to order the applications on the board
         */ /**
         * Used to order the applications on the market list
         */ /**
         * Does the application listed in the DAPP list
         */ /**
         * One plugin may has multiple part. E.g. Tips requires connected wallet, but Tips setting not.
         */ /**
         * Display using an eye-catching card and unable to be unlisted.
         */ /**
         * The injected UI
         */ /** The brief content above detailed tabs. */ /**
         * The name of the slider card
         */ /**
         * Used to order the sliders
         */ /**
         * The injected UI
         */ /**
             * The injected tab content
             */ AvatarRealmSourceType;
        (function(AvatarRealmSourceType) {
            AvatarRealmSourceType["ProfilePage"] = "ProfilePage";
            AvatarRealmSourceType["ProfileCard"] = "ProfileCard";
            AvatarRealmSourceType["Post"] = "Post";
            AvatarRealmSourceType["Editor"] = "Editor";
            AvatarRealmSourceType["Menu"] = "Menu";
            AvatarRealmSourceType["Suggestion"] = "Suggestion";
        })(AvatarRealmSourceType = SiteAdaptor.AvatarRealmSourceType || (SiteAdaptor.AvatarRealmSourceType = {}));
        let /**
             * The injected avatar decorator component
             */ /**
             * The injected avatar settings button component
             */ /**
             * If it returns false, this cover will not be displayed.
             */ TipsSlot;
        (function(TipsSlot) {
            TipsSlot["FollowButton"] = 'follow';
            TipsSlot["Post"] = 'post';
            TipsSlot["Profile"] = 'profile';
            TipsSlot["MirrorMenu"] = 'mirror-menu';
            TipsSlot["MirrorEntry"] = 'mirror-entry';
            TipsSlot["MirrorProfile"] = 'mirror-profile';
            TipsSlot["MirrorVerification"] = 'mirror-verification';
        })(TipsSlot = SiteAdaptor.TipsSlot || (SiteAdaptor.TipsSlot = {}));
        let /**
             * The injected Tips Content component
             */ LensSlot;
        (function(LensSlot) {
            LensSlot["ProfileName"] = 'profile-name';
            LensSlot["Post"] = 'post';
            LensSlot["Sidebar"] = 'sidebar';
        })(LensSlot = SiteAdaptor.LensSlot || (SiteAdaptor.LensSlot = {}));
    })(SiteAdaptor = Plugin.SiteAdaptor || (Plugin.SiteAdaptor = {}));
})(Plugin || (Plugin = {}));


/***/ }),

/***/ 40048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ makeTypedMessageEmpty),
/* harmony export */   Y: () => (/* binding */ isTypedMessageEmpty)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

const isTypedMessageEmpty = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('empty');
let empty;
function makeTypedMessageEmpty() {
    if (empty) return empty;
    empty = {
        type: 'empty',
        serializable: true,
        version: 1,
        meta: undefined
    };
    Object.setPrototypeOf(empty, null);
    Object.freeze(empty);
    return empty;
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
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);


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
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93349);
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
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85094);


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

/***/ 72060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(48665);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 43284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(72060)();
}


/***/ }),

/***/ 48665:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })

}]);
//# sourceMappingURL=chunk.1752.js.map