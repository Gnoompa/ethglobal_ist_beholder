"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8255],{

/***/ 4369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/runtime/runtime.ts + 3 modules
var runtime_runtime = __webpack_require__(55895);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/runtime/runner.ts
var runner = __webpack_require__(1951);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/utils/url.ts
var url = __webpack_require__(54217);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/peer-dependencies/index.ts + 2 modules
var peer_dependencies = __webpack_require__(46762);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
var jsx_runtime_namespaceObject = /*#__PURE__*/__webpack_require__.t(jsx_runtime, 2);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-dom/index.js
var react_dom = __webpack_require__(32704);
var react_dom_namespaceObject = /*#__PURE__*/__webpack_require__.t(react_dom, 2);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/index.js
var esm = __webpack_require__(25365);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(82161);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(51527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBack.js


/* harmony default export */ const ArrowBack = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
}), 'ArrowBack'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Dialogs/DialogTitle.tsx




const Title = (0,styled/* default */.ZP)(DialogTitle/* default */.Z)(({ theme })=>({
        display: 'flex',
        alignItems: 'center',
        padding: `${theme.spacing(1)} ${theme.spacing(3)}`
    }));
const MaskDialogTitle = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { children, onBack, onClose } = props;
    const backButton = onBack ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        size: "large",
        onClick: onBack,
        edge: "start",
        color: "inherit",
        sx: {
            marginRight: '8px'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBack, {})
    }) : null;
    const closeButton = onClose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        size: "large",
        onClick: onClose,
        edge: "end",
        color: "inherit",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
    }) : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Title, {
        children: [
            backButton,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                component: "span",
                variant: "h6",
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    flex: 1
                }
            }),
            closeButton
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(80835);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Dialogs/Dialog.tsx







/**
 * This component is used to provide a most common dialog practice in Mask design.
 *
 * But all the primitives are tweaked to fit the design
 * Therefore it also OK to not use this component if you need a special one.
 */ const MaskDialog = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { title, onBack, onClose, open, children, DialogProps, isOpenFromApplicationBoard, ...inferredDialogProps } = props;
    const dialogProps = {
        onBackdropClick: onClose,
        onClose,
        open,
        ...inferredDialogProps,
        ...DialogProps
    };
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
        isOpenFromApplicationBoard
    ]);
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TrackDialogHierarchy, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
                container: container,
                ...dialogProps,
                ...extraProps,
                children: [
                    shouldReplaceExitWithBack ? // replace onClose with onBack when and only when there is no onBack
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskDialogTitle, {
                        onBack: onBack || closeBothCompositionDialog,
                        onClose: onBack ? closeBothCompositionDialog : undefined,
                        children: title
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskDialogTitle, {
                        onBack: onBack,
                        onClose: closeBothCompositionDialog,
                        children: title
                    }),
                    children
                ]
            })
        }));
});
function useMaskDialog(title, content, actions) {
    const [isOpen, setOpen] = useState(false);
    const onClose = useCallback(()=>setOpen(false), []);
    return /*#__PURE__*/ _jsxs(MaskDialog, {
        onClose: onClose,
        open: isOpen,
        title: title,
        children: [
            /*#__PURE__*/ _jsx(DialogContent, {
                children: content
            }),
            /*#__PURE__*/ _jsx(DialogActions, {
                children: actions
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/sandboxed-plugin-runtime/src/peer-dependencies-dom/index.ts







function addPeerDependenciesDOM(runtime) {
    runtime.addNamespaceModule('react', esModuleInterop(react_namespaceObject));
    runtime.addNamespaceModule('react/jsx-runtime', esModuleInterop(jsx_runtime_namespaceObject));
    runtime.addNamespaceModule('react-dom', esModuleInterop(react_dom_namespaceObject));
    runtime.addNamespaceModule('@mui/material', esm);
    runtime.addNamespaceModule('@masknet/theme', {
        makeStyles: makeStyles/* makeStyles */.Z,
        MaskDialog: MaskDialog
    });
    runtime.addNamespaceModule('@masknet/icons', {
        Icons: icon_generated_as_jsx
    });
}
function esModuleInterop(object) {
    return {
        default: object,
        ...object
    };
}
function createProxy(initValue) {
    function set(key) {
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
                if (typeof key === 'symbol') return undefined;
                return set(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, v)=>v === null,
        getOwnPropertyDescriptor: (_, key)=>{
            if (typeof key === 'symbol') return undefined;
            if (!(key in container)) set(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
function createI18nHooksAndTranslate(id) {
    return {
        useI18N () {
            const { t } = (0,es/* useTranslation */.$G)(id);
            return react.useMemo(()=>createProxy((key)=>t.bind(null, key)), [
                t
            ]);
        },
        Translate: createProxy((key)=>(props)=>react.createElement(es/* Trans */.cC, {
                    i18nKey: key,
                    ns: id,
                    ...props
                }))
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/async-call-rpc@6.3.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(56499);
// EXTERNAL MODULE: ./packages/shared-base/src/serializer/index.ts + 3 modules
var serializer = __webpack_require__(40464);
// EXTERNAL MODULE: ./packages/sandboxed-plugin-runtime/src/utils/manifest.ts
var utils_manifest = __webpack_require__(45549);
;// CONCATENATED MODULE: ./packages/sandboxed-plugin-runtime/src/site-adaptor/index.ts









class SiteAdaptorPluginHost extends runner/* PluginRunner */.n {
    constructor(hooks, allowLocalOverrides, signal = new AbortController().signal){
        super(hooks, allowLocalOverrides, signal);
    }
    async HostStartPlugin(id, isLocal, signal) {
        const manifest = await this.hooks.fetchManifest(id, isLocal);
        if (!(0,utils_manifest/* isManifest */.f)(manifest)) throw new TypeError(`${id} does not have a valid manifest.`);
        const runtime = new runtime_runtime/* PluginRuntime */.J(id, isLocal ? `local-plugin-${id}` : `plugin-${id}`, {}, signal);
        (0,peer_dependencies/* addPeerDependencies */.b)(runtime);
        addPeerDependenciesDOM(runtime);
        const { content_script, rpc, rpcGenerator } = manifest.entries || {};
        const MetadataBadgeRender = new Map();
        const instance = {
            id,
            isLocal,
            runtime,
            MetadataRender: new Map(),
            CompositionEntry: undefined,
            CompositionDialogMetadataBadgeRender (key, meta) {
                if (!MetadataBadgeRender.has(key)) return null;
                const data = MetadataBadgeRender.get(key)(meta);
                if (typeof data !== 'object') throw new TypeError('registerMetadataBadgeRender must return an object.');
                if (!data) return null;
                if (!('text' in data)) throw new TypeError('registerMetadataBadgeRender must return an object with text.');
                const { text, tooltip } = data;
                // assert
                react.Children.only(text);
                tooltip && react.Children.only(tooltip);
                return {
                    text,
                    tooltip
                };
            }
        };
        this.bridgeRPC(instance, !!rpc, !!rpcGenerator);
        runtime.addNamespaceModule('@masknet/plugin/content-script', {
            attachMetadata: (metaID, value)=>{
                if (typeof metaID !== 'string') throw new TypeError('Metadata key must be a string');
                if (arguments.length !== 2) throw new TypeError('attachMetadata requires two arguments');
                this.hooks.attachCompositionMetadata(id, metaID, value);
            },
            dropMetadata: (metaID)=>{
                if (metaID !== 'string') throw new TypeError('Metadata key must be a string');
                this.hooks.dropCompositionMetadata(id, metaID);
            },
            closeApplicationBoardDialog: ()=>{
                this.hooks.closeApplicationBoardDialog();
            }
        });
        runtime.addNamespaceModule('@masknet/plugin/content-script/react', {
            registerMetadataRender: (metaID, render)=>{
                if (typeof metaID !== 'string') throw new TypeError('Metadata key must be a string');
                if (typeof render !== 'function') throw new TypeError('Metadata render must be a function');
                instance.MetadataRender.set(metaID, render);
            },
            registerMetadataBadgeRender: (metaID, render)=>{
                if (typeof metaID !== 'string') throw new TypeError('Metadata key must be a string');
                if (typeof render !== 'function') throw new TypeError('Metadata render must be a function');
                MetadataBadgeRender.set(metaID, render);
            },
            registerCompositionEntry: (label, dialog)=>{
                react.Children.only(label);
                // label asserted before, dialog leave it to runtime error
                instance.CompositionEntry = {
                    label: label,
                    dialog: dialog
                };
            }
        });
        runtime.addNamespaceModule('@masknet/plugin-hooks', {
            ...createI18nHooksAndTranslate(id),
            // TODO: implement this
            // TODO: move this to @masknet/plugin/content-script/react
            usePluginWrapper: ()=>void 0
        });
        // TODO: implement this
        runtime.addNamespaceModule('@masknet/plugin/ui/showSnackbar', {
            showSnackbar: console.log
        });
        // TODO: implement this
        runtime.addNamespaceModule('@masknet/plugin/ui/open', {
            openWindow: console.log
        });
        if (content_script) await runtime.imports((0,url/* getURL */.A)(id, content_script, isLocal));
        return instance;
    }
    bridgeRPC(instance, hasRPC, hasRPCGenerator) {
        if (!hasRPC && !hasRPCGenerator) return;
        const { id, runtime } = instance;
        const namespace = {};
        if (hasRPC) {
            namespace.worker = (0,full/* AsyncCall */.LE)(null, {
                channel: this.hooks.createRpcChannel(id, this.signal),
                serializer: serializer/* serializer */.G,
                log: true,
                thenable: false
            });
        }
        if (hasRPCGenerator) {
            namespace.workerGenerator = (0,full/* AsyncGeneratorCall */.rc)(null, {
                channel: this.hooks.createRpcGeneratorChannel(id, this.signal),
                serializer: serializer/* serializer */.G,
                log: true,
                thenable: false
            });
        }
        runtime.addNamespaceModule('@masknet/plugin/utils/rpc', namespace);
    }
}

// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/store.ts
var store = __webpack_require__(50754);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/mask/utils-pure/hmr.ts
var hmr = __webpack_require__(28780);
// EXTERNAL MODULE: ./packages/mask/shared/sandboxed-plugin/host-api.ts
var host_api = __webpack_require__(1197);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/sandboxed-plugin.ts







const { signal } = (0,hmr/* hmr */.f)(/* unsupported import.meta.webpackHot */ undefined);
 undefined;
let hot;
if (false) {}
if (src/* Flags */.v.sandboxedPluginRuntime) {
    const host = new SiteAdaptorPluginHost({
        ...(0,host_api/* createHostAPIs */.G)(false),
        // TODO: implement this
        attachCompositionMetadata (plugin, id, meta) {},
        // TODO: implement this
        dropCompositionMetadata (plugin, id) {},
        closeApplicationBoardDialog () {
            modals/* ApplicationBoardModal */.G5.close();
        }
    }, "production" === 'development', signal);
    host.__builtInPluginInfraBridgeCallback__ = __builtInPluginInfraBridgeCallback__;
    host.onPluginListUpdate();
}
function __builtInPluginInfraBridgeCallback__(id) {
    let instance;
    const base = {
        enableRequirement: {
            supports: {
                type: 'opt-out',
                sites: {}
            },
            target: 'beta'
        },
        ID: id,
        // TODO: read i18n files
        // TODO: read the name from the manifest
        name: {
            fallback: '__generated__bridge__plugin__' + id
        },
        experimentalMark: true
    };
    const def = {
        ...base,
        SiteAdaptor: {
            hotModuleReload: (reload)=>hot?.set(id, reload),
            async load () {
                return {
                    default: site
                };
            }
        }
    };
    const site = {
        ...base,
        init: async (signal, context)=>{
            try {
                const [i] = await this.startPlugin_bridged(id, signal);
                instance = i;
            } catch (error) {
                console.error(`[Sandboxed-plugin] Plugin ${id} stopped due to an error when starting.`, error);
            }
        },
        get CompositionDialogEntry () {
            if (!instance?.CompositionEntry) return undefined;
            return {
                label: react.Children.only(instance.CompositionEntry.label),
                dialog ({ onClose, open }) {
                    if (open) return (0,react.createElement)(instance.CompositionEntry.dialog, {
                        onClose,
                        open
                    });
                    return null;
                }
            };
        },
        CompositionDialogMetadataBadgeRender (key, meta) {
            if (!key.startsWith(id + ':')) return null;
            const k = key.slice(id.length + 1);
            return instance.CompositionDialogMetadataBadgeRender(k, meta);
        }
    };
    if (hot?.has(id)) hot.get(id)(def.SiteAdaptor.load());
    else (0,store/* registerPlugin */.fo)(def);
}


/***/ }),

/***/ 58843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StyledEngineProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11020);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92984);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49603);



 // prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.


const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
  key: 'css',
  prepend: true
});
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C, {
    value: cache,
    children: children
  }) : children;
}
 false ? 0 : void 0;

/***/ })

}]);
//# sourceMappingURL=chunk.8255.js.map