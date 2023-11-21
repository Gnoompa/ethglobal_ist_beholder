"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9692],{

/***/ 18586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 20179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useCompositionContext),
/* harmony export */   N: () => (/* binding */ CompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const CompositionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    type: 'popup',
    getMetadata: ()=>undefined,
    attachMetadata () {},
    dropMetadata () {}
});
CompositionContext.displayName = 'CompositionContext';
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext);
 undefined;


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

/***/ 56142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uG: () => (/* binding */ startPluginRPC),
/* harmony export */   wX: () => (/* binding */ getPluginRPCGenerator),
/* harmony export */   wx: () => (/* binding */ startPluginGeneratorRPC),
/* harmony export */   x8: () => (/* binding */ getPluginRPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceIsBackground__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88228);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40464);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14414);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9898);





const log = {
    type: 'pretty',
    requestReplay: "production" === 'development',
    sendLocalStack: "production" === 'development'
};
let isBackground = ()=>(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .isEnvironment */ .hE)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
function __workaround__replaceIsBackground__(f) {
    isBackground = f;
}
function getPluginRPCInternal(cache, pluginID, starter, entry) {
    if (cache.has(pluginID)) return cache.get(pluginID);
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const rpc = starter(Object.create(null), {
        key: `@plugin/${pluginID}`,
        channel: {
            on: message[entry].on,
            send: message[entry].sendToBackgroundPage
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
    cache.set(pluginID, rpc);
    return rpc;
}
const cache = new Map();
const cacheGenerator = new Map();
function getPluginRPC(pluginID) {
    if (isBackground()) startPluginRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cache, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
function getPluginRPCGenerator(pluginID) {
    if (isBackground()) startPluginGeneratorRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cacheGenerator, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
}
function startPluginRPCInternal(cache, pluginID, signal, impl, starter, entry) {
    if (!isBackground()) throw new Error('Cannot start RPC in the UI.');
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const delegate = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getOrUpdateLocalImplementationHMR */ .K)(()=>impl, message[entry]);
    if (cache.has(pluginID)) return;
    cache.set(pluginID, delegate);
    starter(delegate, {
        key: pluginID,
        channel: {
            on: message[entry].on,
            send: message[entry].sendByBroadcast
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
}
/** @internal */ function startPluginRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cache, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
/** @internal */ function startPluginGeneratorRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cacheGenerator, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
} // RPC
 // Generator


/***/ }),

/***/ 76671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/truncate.js
var truncate = __webpack_require__(29796);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/base.ts + 7 modules
var base = __webpack_require__(95210);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/constants.ts
var src_constants = __webpack_require__(65977);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/helpers.ts + 3 modules
var helpers = __webpack_require__(83598);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/locales/i18n_generated.ts
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
function useFileServiceTrans() /**
      * `Web3 File Service`
      */ /**
      * `Upload and share files on top of Arweave network. Store data, permanently.`
      */ /**
      * `📃 Web3 File Service`
      */ /**
      * `File Service`
      */ /**
      * `Use the file`
      */ /**
      * `Preparing`
      */ /**
      * `Estimating time…`
      */ /**
      * `{{seconds}}s remaining`
      */ /**
      * `{{minutes}}m {{seconds}}s remaining`
      */ /**
      * `Uploading… Please do not close this page.`
      */ /**
      * `Recent files`
      */ /**
      * `Show More`
      */ /**
      * `This file is not encrypted`
      */ /**
      * `Service unavailable. Wait a few minutes and try again.`
      */ /**
      * `Make It Encrypted`
      */ /**
      * `Use Meson CDN`
      */ /**
      * `Web3 File Service`
      */ /**
      * `Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network.`
      */ /**
      * `Arweave`
      */ /**
      * `IPFS`
      */ /**
      * `Cancel`
      */ /**
      * `Confirm`
      */ /**
      * `What is Web3 File Service?`
      */ /**
      * `Download`
      */ /**
      * `Rename`
      */ /**
      * `Delete`
      */ /**
      * `Delete File`
      */ /**
      * `File name must between 3 to 20 characters.`
      */ /**
      * `You haven't uploaded any files yet.`
      */ /**
      * `No results found`
      */ /**
      * `Upload File`
      */ /**
      * `Uploaded files`
      */ /**
      * `Users can only delete local links of these files. Files on the decentralized storage protocols cannot be deleted.`
      */ /**
      * `Failed to upload file`
      */ /**
      * `Exceeded the maximum file size of 10MB.`
      */ /**
      * `File saved successfully`
      */ /**
      * `Failed to save file`
      */ /**
      * `You’ve saved {{name}} to Web3 file service.`
      */ /**
      * `Failed to save the file. Please try again.`
      */ /**
      * `Delete successfully`
      */ /**
      * `Delete failed`
      */ /**
      * `Delete file {{name}} successfully.`
      */ /**
      * `Failed to delete, please try again.`
      */ /**
      * `Please click Browse Files button to select files to upload.`
      */ /**
      * `Attached File: {{name}} ({{size}})`
      */ /**
      * `{{count}} files selected`
      */ /**
      * `size`
      */ /**
      * - upload_file_title$failed: `Failed to upload file`
      */ /**
      * - upload_file_message$failed: `Exceeded the maximum file size of 10MB.`
      */ /**
      * - save_file_title$success: `File saved successfully`
    
      * - save_file_title$failed: `Failed to save file`
      */ /**
      * - save_file_message$success: `You’ve saved {{name}} to Web3 file service.`
    
      * - save_file_message$failed: `Failed to save the file. Please try again.`
      */ /**
      * - delete_file_title$success: `Delete successfully`
    
      * - delete_file_title$failed: `Delete failed`
      */ /**
      * - delete_file_message$success: `Delete file {{name}} successfully.`
    
      * - delete_file_message$failed: `Failed to delete, please try again.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.maskbook.fileservice");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react.createElement)(es/* Trans */.cC, {
            i18nKey,
            ns: "com.maskbook.fileservice",
            shouldUnescape: true,
            ...props
        });
}
const FileServiceTrans = /**
      * `Web3 File Service is a decentralized storage service provided by Mask Network. It allows users to store files in different decentralized network. This feature is powered by Mask Network’s partner file storage protocols such as IPFS, Arweave and Meson Network.It supports files in PDF, DOC, JPG, PNG, MP3, MP4. and other formats. At present, the maximum file upload size is 10 MB. <br/><br/>You can store files in multiple decentralized networks through the Web3 file service function. When uploading files, you can choose to encrypt or decrypt them. According to the selected upload encrypted method, you can obtain two file links with encryption and non encryption. Users of Mask Network can share files to social platforms through this link. By using encrypted files, you can ensure the security of your files and prevent privacy leakage. <br/><br/>It should be noted that any user who has the link can download and share the file. With the characteristics of decentralized file storage systems, your uploaded files can never be deleted or tampered. Please upload files containing personal privacy with caution. <br/><br/>The Web3 File Service provided by Mask Network enables individuals to be free from data restrictions imposed by traditional social platforms, enabling free encrypted transmission and sharing of files. At present, the service is provisionally free for all users with Mask Network absorbing all the costs. Mask Network will provide updates on future costs users may have to bear.`
      */ /**
      * `By using this plugin, you agree to the <terms>terms</terms> and the <policy>privacy policy</policy>.`
      */ /**
      * `Do you want to delete file <file>{{ name }}</file>`
      */ /**
      * `File Key: <key>{{key}}</key>`
      */ /*#__PURE__*/ createProxy(createComponent);

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/CompositionContext.ts
var CompositionContext = __webpack_require__(20179);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/FileChip.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        chip: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        }
    }));
function SingleFileChip({ name, size, onClick, ...rest }) {
    const { classes } = useStyles();
    const t = useFileServiceTrans();
    const { type } = (0,CompositionContext/* useCompositionContext */.C)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        className: classes.chip,
        ...rest,
        onClick: ()=>{
            onClick({
                compositionType: type
            });
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FileService, {
                size: 16
            }),
            t.file_chip_single({
                name,
                size
            })
        ]
    });
}
function MultipleFileChip({ count, onClick, ...rest }) {
    const { classes, cx } = useStyles();
    const t = useFileServiceTrans();
    const { type } = (0,CompositionContext/* useCompositionContext */.C)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "div",
        className: cx(classes.chip),
        ...rest,
        onClick: ()=>{
            onClick({
                compositionType: type
            });
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FileService, {
                size: 16
            }),
            t.file_chip_multiple({
                count: count.toString()
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./packages/theme/src/Components/Boundary/index.tsx
var Boundary = __webpack_require__(64149);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useBoundedPopperProps.ts
var useBoundedPopperProps = __webpack_require__(86999);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FileFrame/index.tsx





const FileFrame_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        file: {
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1.5),
            overflow: 'auto',
            ['&:hover']: {
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : theme.palette.maskColor.bg
            }
        },
        content: {
            flexGrow: 1,
            marginRight: 'auto',
            marginLeft: theme.spacing(1),
            overflow: 'auto'
        },
        name: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '18px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    }));
const FileFrame = /*#__PURE__*/ (0,react.memo)(function FileFrame({ className, children, fileName, operations, ...rest }) {
    const { classes, cx } = FileFrame_useStyles();
    const rootRef = (0,react.useRef)(null);
    const nameRef = (0,react.useRef)(null);
    const [showTooltip, setShowTooltip] = (0,react.useState)(false);
    // DecryptedInspector lazy loading makes it fail to get offsetWidth of name
    // element correctly during rendering. So we do a checking after when mouse
    // enter
    (0,react.useEffect)(()=>{
        const root = rootRef.current;
        if (!root) return;
        const check = ()=>{
            if (nameRef.current) {
                setShowTooltip(nameRef.current.offsetWidth !== nameRef.current.scrollWidth);
            }
        };
        root.addEventListener('mouseenter', check);
        return ()=>{
            root.removeEventListener('mouseenter', check);
        };
    }, []);
    const tooltipPopperProps = (0,useBoundedPopperProps/* useBoundedPopperProps */.g)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(className, classes.file),
        ...rest,
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Message, {
                size: 24
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                        title: showTooltip ? fileName : undefined,
                        disableInteractive: true,
                        arrow: true,
                        PopperProps: tooltipPopperProps,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.name,
                            ref: nameRef,
                            children: fileName
                        })
                    }),
                    children
                ]
            }),
            operations
        ]
    });
});
FileFrame.displayName = 'FileFrame';

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/LinearProgress/linearProgressClasses.js
var linearProgressClasses = __webpack_require__(14419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(8128);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/Files/UploadingFile.tsx






const UploadingFile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        desc: {
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            fontSize: 12,
            marginTop: 7
        },
        progressBar: {
            height: 4,
            marginTop: 7,
            borderRadius: 2,
            [`&.${linearProgressClasses/* default */.Z.colorPrimary}`]: {
                backgroundColor: theme.palette.maskColor.thirdMain
            },
            [`& .${linearProgressClasses/* default */.Z.bar}`]: {
                borderRadius: 2,
                backgroundColor: theme.palette.maskColor.success
            }
        }
    }));
const UploadingFile = /*#__PURE__*/ (0,react.memo)(({ file, progress, ...rest })=>{
    const { classes } = UploadingFile_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FileFrame, {
        fileName: file.name,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
                className: classes.progressBar,
                variant: progress === 0 ? 'indeterminate' : 'determinate',
                value: progress
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.desc,
                children: (0,esm/* formatFileSize */.sS)(file.size, true)
            })
        ]
    });
});
UploadingFile.displayName = 'UploadingFile';

// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootMenu.ts
var ShadowRootMenu = __webpack_require__(25877);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/Files/ManageableFile.tsx








const ManageableFile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        meta: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.third
        },
        metaValue: {
            fontSize: 12,
            color: theme.palette.maskColor.second
        },
        operations: {
            display: 'flex',
            alignItems: 'center'
        },
        operationButton: {
            marginLeft: theme.spacing(1),
            color: theme.palette.maskColor.main
        },
        menuButton: {
            color: theme.palette.maskColor.second
        },
        menuLabel: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            padding: '6px'
        },
        menu: {
            minWidth: 229,
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px 0px rgba(255, 255, 255, 0.15)' : '0px 4px 30px 0px rgba(0, 0, 0, 0.10)'
        },
        row: {
            display: 'flex',
            alignItems: 'center'
        },
        rightGap: {
            marginRight: '24px'
        },
        bottomGap: {
            marginBottom: '12px'
        }
    }));
const ManageableFile = /*#__PURE__*/ (0,react.memo)(({ file, onDownload, onRename, onDelete, onSend, ...rest })=>{
    const { classes, cx } = ManageableFile_useStyles();
    const menuRef = (0,react.useRef)(null);
    const [menuOpen, setMenuOpen] = (0,react.useState)(false);
    const t = useFileServiceTrans();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileFrame, {
        fileName: file.name,
        ...rest,
        operations: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.operations,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Send, {
                    className: classes.operationButton,
                    onClick: ()=>{
                        onSend?.(file);
                    },
                    size: 20
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.More, {
                    ref: menuRef,
                    className: cx(classes.operationButton, classes.menuButton),
                    onClick: ()=>setMenuOpen(true),
                    size: 20
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ShadowRootMenu/* ShadowRootMenu */.d, {
                    classes: {
                        paper: classes.menu
                    },
                    anchorEl: menuRef.current,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'bottom'
                    },
                    transformOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    disableScrollLock: true,
                    open: menuOpen,
                    disablePortal: true,
                    onClose: ()=>setMenuOpen(false),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            onClick: ()=>{
                                onDownload?.(file);
                                setMenuOpen(false);
                            },
                            className: classes.bottomGap,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.menuLabel,
                                children: t.download()
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            onClick: ()=>{
                                onRename?.(file);
                                setMenuOpen(false);
                            },
                            className: classes.bottomGap,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.menuLabel,
                                children: t.rename()
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            onClick: ()=>{
                                onDelete?.(file);
                                setMenuOpen(false);
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.menuLabel,
                                color: (theme)=>theme.palette.maskColor.danger,
                                children: t.delete()
                            })
                        })
                    ]
                })
            ]
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.row,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.meta,
                    children: [
                        t.size(),
                        ":"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: cx(classes.metaValue, classes.rightGap),
                    children: (0,esm/* formatFileSize */.sS)(file.size, true)
                }),
                file.key ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.meta,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceTrans.file_key, {
                        components: {
                            key: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.metaValue,
                                component: "span"
                            })
                        },
                        values: {
                            key: file.key
                        }
                    })
                }) : null
            ]
        })
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/Files/SelectableFile.tsx








const SelectableFile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        desc: {
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            fontSize: 12
        },
        meta: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.third
        },
        metaValue: {
            color: theme.palette.maskColor.second
        }
    }));
/** file id */ const SelectableFile = /*#__PURE__*/ (0,react.memo)(({ file, selected, onChange, disabled, ...rest })=>{
    const { classes, theme } = SelectableFile_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FileFrame, {
        fileName: file.name,
        ...rest,
        operations: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
            disabled: disabled,
            checked: selected,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckboxBlank, {
                size: 20
            }),
            checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Checkbox, {
                size: 20,
                color: theme.palette.maskColor.primary
            }),
            onChange: (event)=>{
                onChange?.(file.id, event.currentTarget.checked);
            }
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.desc,
                children: (0,esm/* formatFileSize */.sS)(file.size, true)
            }),
            file.key ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.meta,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceTrans.file_key, {
                    components: {
                        key: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.metaValue,
                            component: "span"
                        })
                    },
                    values: {
                        key: file.key
                    }
                })
            }) : null
        ]
    });
});
SelectableFile.displayName = 'SelectableFile';

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/Files/DisplayingFile.tsx








const DisplayingFile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        desc: {
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            fontSize: 12
        },
        meta: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.third
        },
        metaValue: {
            color: theme.palette.maskColor.second
        },
        operations: {
            display: 'flex',
            alignItems: 'center'
        },
        operationButton: {
            color: theme.palette.maskColor.white,
            marginLeft: theme.spacing(1)
        }
    }));
const DisplayingFile = /*#__PURE__*/ (0,react.memo)(({ file, onSave, onDownload, ...rest })=>{
    const { classes } = DisplayingFile_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FileFrame, {
        fileName: file.name,
        ...rest,
        operations: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.operations,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.operationButton,
                    size: "small",
                    variant: "roundedDark",
                    onClick: ()=>onSave?.(file),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Dump, {
                        size: 16
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.operationButton,
                    size: "small",
                    variant: "roundedDark",
                    onClick: ()=>onDownload?.(file),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Download2, {
                        size: 16
                    })
                })
            ]
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.desc,
                children: (0,esm/* formatFileSize */.sS)(file.size, true)
            }),
            file.key ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.meta,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceTrans.file_key, {
                    components: {
                        key: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.metaValue,
                            component: "span"
                        })
                    },
                    values: {
                        key: file.key
                    }
                })
            }) : null
        ]
    });
});
DisplayingFile.displayName = 'DisplayingFile';

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/rpc.ts
var rpc = __webpack_require__(56142);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/rpc.ts


 undefined;
const PluginFileServiceRPC = (0,rpc/* getPluginRPC */.x8)(PluginID/* PluginID */.P.FileService);
const PluginFileServiceRPCGenerator = (0,rpc/* getPluginRPCGenerator */.wX)(PluginID/* PluginID */.P.FileService);

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/contexts/FileManagement/index.tsx










const FileManagementContext = /*#__PURE__*/ (0,react.createContext)({
    files: [],
    recentFiles: [],
    refetchFiles: noop/* default */.Z,
    uploadingFiles: [],
    uploadStateMap: {},
    setUploadProgress: noop/* default */.Z,
    setUploadingFiles: noop/* default */.Z,
    uploadFile: null,
    attachToPost: noop/* default */.Z
});
function openCompositionWithFiles(type, files) {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
        reason: type,
        open: true,
        options: {
            initialMetas: {
                [src_constants/* META_KEY_3 */.ep]: files
            }
        }
    });
}
// The file management could be opened via different ways
const FileManagementProvider = /*#__PURE__*/ (0,react.memo)(({ children, compositionType })=>{
    const { value: files = constants/* EMPTY_LIST */.rP, retry: refetchFiles } = (0,useAsyncRetry/* default */.Z)(()=>PluginFileServiceRPC.getAllFiles(), []);
    const navigate = (0,dist/* useNavigate */.s0)();
    const [uploadingFiles, setUploadingFiles] = (0,react.useState)([]);
    const [uploadStateMap, setUploadStateMap] = (0,react.useState)({});
    const setUploadProgress = (0,react.useCallback)((id, progress)=>{
        setUploadStateMap((map)=>{
            return {
                ...map,
                [id]: {
                    ...map[id],
                    progress
                }
            };
        });
    }, []);
    const uploadFile = (0,react.useCallback)(async (file, provider, useCDN, encrypted)=>{
        const key = encrypted ? (0,helpers/* makeFileKey */.sM)() : undefined;
        const buffer = new Uint8Array(await file.arrayBuffer());
        const id = await (0,helpers/* digest */.uR)(file, [
            provider,
            useCDN,
            encrypted
        ]);
        const createdAt = Date.now();
        const removeUnloadingFile = (id)=>{
            setUploadingFiles((files)=>files.filter((x)=>x.id !== id));
            setUploadStateMap((map)=>(0,omit/* default */.Z)(map, [
                    id
                ]));
        };
        setUploadingFiles((files)=>[
                ...files,
                {
                    type: 'file',
                    key,
                    provider,
                    id,
                    name: file.name,
                    size: file.size,
                    createdAt
                }
            ]);
        setUploadProgress(id, 0);
        const payloadTxID = await PluginFileServiceRPC.makeAttachment(provider, {
            key,
            name: file.name,
            type: file.type,
            block: buffer
        });
        // Uploading
        for await (const progress of PluginFileServiceRPCGenerator.upload(provider, payloadTxID)){
            setUploadProgress(id, progress);
        }
        const landingTxID = await PluginFileServiceRPC.uploadLandingPage(provider, {
            name: file.name,
            size: file.size,
            txId: payloadTxID,
            type: file.type,
            key,
            useCDN
        });
        const fileInfo = {
            type: 'file',
            provider,
            id,
            name: file.name,
            size: file.size,
            createdAt,
            key,
            payloadTxID,
            landingTxID
        };
        await PluginFileServiceRPC.setFileInfo(fileInfo);
        removeUnloadingFile(id);
        refetchFiles();
        return fileInfo;
    }, [
        refetchFiles
    ]);
    const attachToPost = (0,react.useCallback)((fileInfo)=>{
        openCompositionWithFiles(compositionType, Array.isArray(fileInfo) ? fileInfo : [
            fileInfo
        ]);
        modals/* ApplicationBoardModal */.G5.close();
        navigate(src_constants/* RoutePaths */.s2.Exit);
    }, [
        compositionType,
        navigate
    ]);
    const recentFiles = (0,react.useMemo)(()=>files.slice(0, 4), [
        files
    ]);
    const contextValue = (0,react.useMemo)(()=>{
        return {
            files,
            recentFiles,
            refetchFiles,
            uploadingFiles,
            uploadStateMap,
            uploadFile,
            setUploadProgress,
            setUploadingFiles,
            attachToPost
        };
    }, [
        files,
        recentFiles,
        uploadStateMap,
        uploadingFiles,
        attachToPost,
        refetchFiles,
        uploadFile
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileManagementContext.Provider, {
        value: contextValue,
        children: children
    });
});
FileManagementProvider.displayName = 'FileManagementProvider';
function useFileManagement() {
    return (0,react.useContext)(FileManagementContext);
}

// EXTERNAL MODULE: ./packages/shared-base/src/SingletonModal/index.ts
var SingletonModal = __webpack_require__(62384);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/modals/modals.ts

const ConfirmModal = new SingletonModal/* SingletonModal */.G();
const RenameModal = new SingletonModal/* SingletonModal */.G();

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/FileList.tsx










const FileList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column'
        },
        list: {
            flexGrow: 1,
            overflow: 'auto',
            paddingTop: theme.spacing(1),
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        listRoot: {
            padding: 0
        },
        listItem: {
            width: 'auto',
            padding: 0,
            margin: theme.spacing(0, 2)
        },
        disabled: {
            opacity: 0.5
        },
        file: {
            width: '100%'
        }
    }));
function FileList({ files, onLoadMore, className, onDownload, onSend, ...rest }) {
    const t = useFileServiceTrans();
    const { classes, cx } = FileList_useStyles();
    const { uploadStateMap, refetchFiles } = useFileManagement();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const deleteFile = (0,react.useCallback)(async (file)=>{
        try {
            await PluginFileServiceRPC.deleteFile(file.id);
            refetchFiles();
            showSnackbar(t.delete_file_title({
                context: 'success'
            }), {
                variant: 'success',
                message: t.delete_file_message({
                    context: 'success',
                    name: file.name
                })
            });
        } catch (err) {
            showSnackbar(t.delete_file_title({
                context: 'failed'
            }), {
                variant: 'error',
                message: t.delete_file_message({
                    context: 'failed',
                    name: file.name
                })
            });
        }
    }, [
        refetchFiles
    ]);
    const handleDelete = (0,react.useCallback)(async (file)=>{
        const confirmed = await ConfirmModal.openAndWaitForClose({
            title: t.delete_file(),
            message: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceTrans.delete_message, {
                values: {
                    name: file.name
                },
                components: {
                    file: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: (theme)=>theme.palette.maskColor.main,
                        fontSize: 14,
                        fontWeight: 700
                    })
                }
            }),
            description: t.delete_description(),
            confirmLabel: t.delete()
        });
        if (confirmed) await deleteFile(file);
    }, [
        refetchFiles,
        t
    ]);
    const handleRename = (0,react.useCallback)(async (file)=>{
        const name = await RenameModal.openAndWaitForClose({
            currentName: file.name,
            message: t.rename_validation()
        });
        if (!name) return;
        await PluginFileServiceRPC.renameFile(file.id, name);
        refetchFiles();
    }, [
        refetchFiles,
        t
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: cx(classes.container, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Boundary/* Boundary */.E, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                classes: {
                    root: classes.listRoot
                },
                children: files.map((file)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                        className: classes.listItem,
                        children: uploadStateMap[file.id] ? /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadingFile, {
                            className: classes.file,
                            file: file,
                            progress: uploadStateMap[file.id]?.progress ?? 0
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ManageableFile, {
                            className: classes.file,
                            file: file,
                            onDelete: handleDelete,
                            onRename: handleRename,
                            onDownload: onDownload,
                            onSend: onSend
                        })
                    }, file.id))
            })
        })
    });
}
const FILE_LIMIT = 2;
function SelectableFileList({ files, className, selectedIds = constants/* EMPTY_LIST */.rP, onChange, ...rest }) {
    const { classes, cx } = FileList_useStyles();
    const selectedIdsRef = (0,react.useRef)(selectedIds);
    const filesRef = (0,react.useRef)(files);
    const onChangeRef = (0,react.useRef)(onChange);
    selectedIdsRef.current = selectedIds;
    filesRef.current = files;
    onChangeRef.current = onChange;
    const handleChange = (0,react.useCallback)((fileId, checked)=>{
        const oldIds = selectedIdsRef.current;
        const newIds = filesRef.current.map((x)=>x.id).filter((id)=>id === fileId ? checked : oldIds.includes(id));
        onChangeRef.current?.(newIds);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: cx(classes.container, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Boundary/* Boundary */.E, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                classes: {
                    root: classes.listRoot
                },
                children: files.map((file)=>{
                    const disabled = selectedIds.length >= FILE_LIMIT && !selectedIds.includes(file.id);
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                        className: cx(classes.listItem, disabled ? classes.disabled : null),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectableFile, {
                            disabled: disabled,
                            className: classes.file,
                            file: file,
                            selected: selectedIds.includes(file.id),
                            onChange: handleChange
                        })
                    }, file.id);
                })
            })
        })
    });
}
/**
 * Render in decrypted post
 */ function DisplayingFileList({ files, className, onSave, onDownload, ...rest }) {
    const { classes, cx } = FileList_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: cx(classes.container, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            className: classes.list,
            classes: {
                root: classes.listRoot
            },
            children: files.map((file)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    className: classes.listItem,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DisplayingFile, {
                        className: classes.file,
                        file: file,
                        onSave: onSave,
                        onDownload: onDownload
                    })
                }, file.id))
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/FileViewer.tsx









const FileViewer_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    file: {
        width: '100%'
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        userSelect: 'none',
        padding: 0,
        backgroundColor: 'transparent'
    }
});
function FileViewer({ files }) {
    (0,usePluginWrapper/* usePluginWrapper */.f)(true);
    const { classes } = FileViewer_useStyles();
    const t = useFileServiceTrans();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const handleSave = (0,react.useCallback)(async (file)=>{
        try {
            await PluginFileServiceRPC.setFileInfo(file);
            showSnackbar(t.save_file_title({
                context: 'success'
            }), {
                variant: 'success',
                message: t.save_file_message({
                    context: 'success',
                    name: file.name
                })
            });
        } catch (err) {
            showSnackbar(t.save_file_title({
                context: 'failed'
            }), {
                variant: 'error',
                message: t.save_file_message({
                    context: 'failed',
                    name: file.name
                })
            });
        }
    }, [
        showSnackbar,
        showSnackbar,
        t
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 0,
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DisplayingFileList, {
            className: classes.file,
            files: files,
            onSave: handleSave,
            onDownload: helpers/* downloadFile */.Sv
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/storage.ts

let so;
function setupStorage(_) {
    so = _;
}
function useTermsConfirmed() {
    const value = (0,use_subscription.useSubscription)(so?.storage?.termsConfirmed?.subscription);
    return [
        value,
        function setConfirmed(newValue) {
            so?.storage.termsConfirmed.setValue(newValue);
        }
    ];
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var events_dist = __webpack_require__(93441);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/emitter.ts

const emitter = new events_dist/* Emitter */.Q5();
function openBrowser(compositionType) {
    emitter.emit('open', {
        compositionType,
        selectMode: false
    });
}
function openPicker(selectedFiles, compositionType) {
    emitter.emit('open', {
        compositionType,
        selectMode: true,
        selectedFiles
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var urlcat_dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@remix-run+router@1.7.2/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(50617);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/RouterDialog.tsx






function RouterDialog(props) {
    const t = useFileServiceTrans();
    const { pathname } = (0,dist/* useLocation */.TH)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const title = (0,router/* matchPath */.LX)(src_constants/* RoutePaths */.s2.UploadFile, pathname) ? t.upload_file() : t.__display_name();
    (0,react.useLayoutEffect)(()=>{
        if (pathname === src_constants/* RoutePaths */.s2.Exit) {
            props.onClose?.();
        }
    }, [
        pathname === src_constants/* RoutePaths */.s2.Exit,
        props.onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        ...props,
        title: title,
        onClose: ()=>{
            if (pathname === src_constants/* RoutePaths */.s2.Terms) {
                props.onClose?.();
                return;
            }
            navigate(-1);
        }
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+base@5.0.0-alpha.100_patch_hash=ved4raqjjkr2jjhghdp5ouuxk4_@types+react@18.2.21_react-do_x7tnikinjhdbsji3vhas5jytle/node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js
var TabsUnstyled = __webpack_require__(82403);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+base@5.0.0-alpha.100_patch_hash=ved4raqjjkr2jjhghdp5ouuxk4_@types+react@18.2.21_react-do_x7tnikinjhdbsji3vhas5jytle/node_modules/@mui/base/TabUnstyled/TabUnstyled.js
var TabUnstyled = __webpack_require__(69672);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+base@5.0.0-alpha.100_patch_hash=ved4raqjjkr2jjhghdp5ouuxk4_@types+react@18.2.21_react-do_x7tnikinjhdbsji3vhas5jytle/node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js
var tabUnstyledClasses = __webpack_require__(39041);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/types.ts
var types = __webpack_require__(73354);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/FileBrowser.tsx















const Tabs = (0,styled/* default */.ZP)(TabsUnstyled/* default */.Z)(({ theme })=>({
        display: 'flex',
        gap: theme.spacing(0.5)
    }));
const Tab = (0,styled/* default */.ZP)(TabUnstyled/* default */.Z)(({ theme })=>({
        height: 34,
        minWidth: 60,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        boxSizing: 'border-box',
        color: theme.palette.maskColor.second,
        fontSize: 14,
        fontWeight: 700,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 18,
        '&:hover': {
            color: theme.palette.maskColor.main
        },
        [`&.${tabUnstyledClasses/* default */.Z.selected}`]: {
            color: theme.palette.maskColor.main,
            backgroundColor: theme.palette.maskColor.bg
        }
    }));
const FileBrowser_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        header: {
            display: 'flex',
            alignItems: 'center',
            height: 40,
            flexShrink: 0,
            margin: theme.spacing(2, 2, 0)
        },
        tabs: {
            flexGrow: 1
        },
        operations: {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1.5)
        },
        operationButton: {
            display: 'flex',
            height: 36,
            width: 36,
            minWidth: 36,
            padding: 0,
            border: 0,
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'center'
        },
        searchInput: {
            flexGrow: 1
        },
        button: {
            marginLeft: theme.spacing(2)
        },
        content: {
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            overflow: 'auto',
            boxSizing: 'border-box',
            paddingBottom: theme.spacing(2),
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        emptyBox: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        emptyMessage: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(1.5)
        },
        fileList: {
            paddingTop: theme.spacing(1.5),
            width: '100%',
            overflow: 'auto',
            flexGrow: 1,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        actions: {
            padding: theme.spacing(2, 2, 0),
            flexShrink: 0,
            boxSizing: 'border-box',
            boxShadow: theme.palette.mode === 'light' ? '0px 0px 20px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12)'
        }
    }));
var ProviderTabs;
(function(ProviderTabs) {
    ProviderTabs["All"] = "All";
    ProviderTabs["IPFS"] = "IPFS";
    ProviderTabs["Arweave"] = "Arweave";
})(ProviderTabs || (ProviderTabs = {}));
const TabToProviderMap = {
    [ProviderTabs.All]: null,
    [ProviderTabs.IPFS]: types/* Provider */.z.IPFS,
    [ProviderTabs.Arweave]: types/* Provider */.z.Arweave
};
const providers = (0,esm/* getEnumAsArray */.Yl)(ProviderTabs);
function FilePicker() {
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const idsQuery = params.get('selectedFileIds') ?? '';
    const ids = (0,react.useMemo)(()=>idsQuery.split(',').filter(Boolean), [
        idsQuery
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileBrowser, {
        selectedFileIds: ids,
        selectMode: true
    }, idsQuery);
}
function FileBrowser({ selectMode, selectedFileIds = constants/* EMPTY_LIST */.rP }) {
    const t = useFileServiceTrans();
    const { classes } = FileBrowser_useStyles();
    const [tab, setTab] = (0,react.useState)(ProviderTabs.All);
    const navigate = (0,dist/* useNavigate */.s0)();
    const { files, attachToPost } = useFileManagement();
    const [searching, setSearching] = (0,react.useState)(false);
    const [input, setInput] = (0,react.useState)('');
    const [keyword, setKeyword] = (0,react.useState)('');
    const visibleFiles = (0,react.useMemo)(()=>{
        if (searching) {
            if (!keyword) return files;
            const kw = keyword.toLowerCase();
            return files.filter((x)=>{
                return x.name.toLowerCase().includes(kw) || x.key?.toLowerCase().includes(kw);
            });
        }
        const provider = TabToProviderMap[tab];
        if (!provider) return files;
        return files.filter((x)=>x.provider === provider);
    }, [
        files,
        searching,
        keyword,
        tab
    ]);
    const [selectedIds, setSelectedFileIds] = (0,react.useState)(selectedFileIds);
    const selectedFiles = (0,react.useMemo)(()=>files.filter((file)=>selectedIds.includes(file.id)), [
        files,
        selectedIds
    ]);
    function renderList() {
        if (selectMode) return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectableFileList, {
            files: visibleFiles,
            className: classes.fileList,
            selectedIds: selectedIds,
            onChange: setSelectedFileIds
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileList, {
            files: visibleFiles,
            className: classes.fileList,
            onSend: attachToPost,
            onDownload: helpers/* downloadFile */.Sv
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.content,
        children: [
            searching ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                        wrapperProps: {
                            className: classes.searchInput
                        },
                        placeholder: "Search my files",
                        value: input,
                        autoFocus: true,
                        fullWidth: true,
                        InputProps: {
                            style: {
                                height: 40
                            },
                            inputProps: {
                                style: {
                                    paddingLeft: 4
                                }
                            },
                            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {
                                size: 18
                            }),
                            endAdornment: input ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                                size: 18,
                                onClick: ()=>setInput('')
                            }) : null,
                            onKeyDown: (event)=>{
                                if (event.code === 'Enter') {
                                    setKeyword(event.currentTarget.value);
                                }
                            },
                            onBlur: (event)=>{
                                setKeyword(event.currentTarget.value);
                            }
                        },
                        onChange: (event)=>{
                            setInput(event.currentTarget.value);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        onClick: ()=>setSearching(false),
                        children: t.cancel()
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.tabs,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs, {
                            value: tab,
                            onChange: (_, newTab)=>setTab(newTab),
                            children: providers.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab, {
                                    "aria-label": x.key,
                                    value: x.value,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        fontWeight: 700,
                                        children: x.value
                                    })
                                }, x.key))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.operations,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.operationButton,
                                variant: "text",
                                onClick: ()=>setSearching(true),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.operationButton,
                                variant: "text",
                                onClick: ()=>navigate(src_constants/* RoutePaths */.s2.UploadFile),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Upload, {
                                    size: 20
                                })
                            })
                        ]
                    })
                ]
            }),
            visibleFiles.length ? renderList() : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.emptyBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                                size: 36
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.emptyMessage,
                                children: files.length ? t.empty() : t.no_uploaded_files()
                            })
                        ]
                    }),
                    files.length ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.actions,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            onClick: ()=>navigate(src_constants/* RoutePaths */.s2.UploadFile),
                            children: t.upload_file()
                        })
                    })
                ]
            }),
            selectMode && files.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    disabled: !selectedIds.length,
                    onClick: ()=>attachToPost(selectedFiles),
                    children: t.confirm()
                })
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(98826);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/UploadDropArea/index.tsx







const UploadDropArea_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dropArea: {
            display: 'flex',
            height: 230,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            boxSizing: 'border-box',
            borderRadius: 8,
            textAlign: 'center',
            padding: theme.spacing(3),
            overflow: 'hidden',
            userSelect: 'none',
            background: theme.palette.maskColor.whiteBlue
        },
        dragOver: {
            borderColor: theme.palette.maskColor.primary
        },
        uploadIcon: {
            height: 54,
            width: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            borderRadius: '50%',
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : '0px 4px 6px rgba(102, 108, 135, 0.1)'
        },
        tips: {
            lineHeight: '18px',
            fontSize: 14,
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            marginTop: 10
        },
        limit: {
            lineHeight: '18px',
            fontSize: 14,
            color: theme.palette.maskColor.second
        },
        or: {
            marginTop: 10,
            color: theme.palette.maskColor.second
        },
        button: {
            width: 164,
            marginTop: 10,
            boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 8px 25px rgba(0, 0, 0, 0.2)',
            backgroundColor: theme.palette.maskColor.main,
            color: theme.palette.mode === 'dark' ? theme.palette.maskColor.bottom : theme.palette.maskColor.white
        }
    }));
const UploadDropArea = /*#__PURE__*/ (0,react.memo)(({ maxFileSize = Number.POSITIVE_INFINITY, omitSizeLimit, onSelectFile, className, accept, ...rest })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = UploadDropArea_useStyles();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const handleFiles = (files)=>{
        if (!files || files.length !== 1) {
            showMessage(101);
        } else if (!omitSizeLimit && files[0].size > maxFileSize) {
            showMessage(102);
        } else {
            onSelectFile(files[0]);
        }
    };
    const handleFilesRef = (0,react.useRef)();
    handleFilesRef.current = handleFiles;
    const selectFile = (0,react.useCallback)(()=>{
        const input = document.createElement('input');
        input.type = 'file';
        input.hidden = true;
        if (accept) input.accept = accept;
        input.addEventListener('input', function onInput(event) {
            handleFilesRef.current?.(event.currentTarget.files);
            input.removeEventListener('input', onInput);
            document.body.removeChild(input);
        });
        input.click();
        document.body.append(input);
    }, [
        accept
    ]);
    const [bond, { over }] = (0,useDropArea/* default */.Z)({
        onFiles: handleFiles,
        onText: ()=>showMessage(101),
        onUri: ()=>showMessage(101)
    });
    const showMessage = (code)=>{
        switch(code){
            case 101:
                showSnackbar(t.upload_error({
                    context: 'single',
                    limit: ''
                }), {
                    variant: 'error'
                });
                break;
            case 102:
                showSnackbar(t.upload_file_title({
                    context: 'failed'
                }), {
                    variant: 'error',
                    message: t.upload_file_message({
                        context: 'failed'
                    })
                });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.dropArea, {
            [classes.dragOver]: over
        }, className),
        ...rest,
        ...bond,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.uploadIcon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Upload, {
                    size: 30
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tips,
                children: t.upload_drag_n_drop()
            }),
            omitSizeLimit ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.limit,
                children: t.upload_size_limit()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.or,
                children: t.upload_or()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                variant: "contained",
                onClick: selectFile,
                children: t.upload_browse_files()
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(99371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/UploadFile.tsx












const UploadFile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            height: '100%',
            paddingBottom: theme.spacing(2),
            boxSizing: 'border-box'
        },
        uploadArea: {
            display: 'flex',
            flexShrink: 0,
            margin: theme.spacing(2, 2, 0)
        },
        options: {
            display: 'flex',
            fontSize: 18,
            justifyContent: 'start',
            alignItems: 'center',
            height: 'fit-content',
            margin: theme.spacing(1.5, 2, 0)
        },
        control: {
            padding: 0,
            marginRight: theme.spacing(1)
        },
        checked: {
            color: theme.palette.maskColor.primary,
            boxShadow: '0px 4px 10px rgba(28, 104, 243, 0.2)'
        },
        label: {
            userSelect: 'none',
            marginLeft: 0
        },
        heading: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.text.primary,
            margin: theme.spacing(3, 2, 0.5)
        },
        fileList: {
            flexGrow: 1,
            overflow: 'auto',
            marginTop: theme.spacing(1)
        },
        emptyBox: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        emptyMessage: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(1.5)
        }
    }));
function UploadFile() {
    const t = useFileServiceTrans();
    const { classes, theme } = UploadFile_useStyles();
    const [encrypted, setEncrypted] = (0,react.useState)(true);
    const [useCDN, setUseCDN] = (0,react.useState)(false);
    const [provider, setProvider] = (0,react.useState)(types/* Provider */.z.Arweave);
    const { recentFiles, uploadingFiles, uploadFile, attachToPost } = useFileManagement();
    const files = (0,react.useMemo)(()=>{
        return [
            ...uploadingFiles,
            ...recentFiles
        ];
    }, [
        uploadingFiles,
        recentFiles
    ]);
    const providers = [
        {
            provider: types/* Provider */.z.Arweave,
            name: t.provider_arweave()
        },
        {
            provider: types/* Provider */.z.IPFS,
            name: t.provider_ipfs()
        }
    ];
    const onSelectFile = (0,react.useCallback)(async (file)=>{
        await uploadFile(file, provider, useCDN, encrypted);
    }, [
        encrypted,
        useCDN,
        provider
    ]);
    const cdnButton = provider === types/* Provider */.z.Arweave ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
            classes: {
                root: classes.control,
                checked: classes.checked
            },
            color: "primary",
            checked: useCDN,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckboxBlank, {
                size: 18
            }),
            checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Checkbox, {
                color: theme.palette.maskColor.primary,
                size: 18
            }),
            onChange: (event)=>setUseCDN(event.target.checked)
        }),
        className: classes.label,
        label: t.use_cdn()
    }) : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadDropArea, {
                className: classes.uploadArea,
                maxFileSize: src_constants/* MAX_FILE_SIZE */.Tb,
                onSelectFile: onSelectFile
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: providers.map((config)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                            classes: {
                                root: classes.control,
                                checked: classes.checked
                            },
                            color: "primary",
                            checked: provider === config.provider,
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonUnChecked, {
                                size: 18
                            }),
                            checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonChecked, {
                                size: 18
                            }),
                            onChange: ()=>setProvider(config.provider)
                        }),
                        className: classes.label,
                        label: config.name
                    }, config.provider))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.options,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            classes: {
                                root: classes.control,
                                checked: classes.checked
                            },
                            size: "small",
                            color: "primary",
                            checked: encrypted,
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckboxBlank, {
                                size: 18
                            }),
                            checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Checkbox, {
                                color: theme.palette.maskColor.primary,
                                size: 18
                            }),
                            onChange: (event)=>setEncrypted(event.target.checked)
                        }),
                        className: classes.label,
                        label: t.on_encrypt_it()
                    }),
                    cdnButton
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.heading,
                children: t.uploaded_files()
            }),
            files.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FileList, {
                files: files,
                className: classes.fileList,
                onSend: attachToPost,
                onDownload: helpers/* downloadFile */.Sv
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.emptyBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                        size: 36
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.emptyMessage,
                        children: t.upload_tips()
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/components/Terms.tsx








const Terms_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        terms: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'auto'
        },
        content: {
            padding: theme.spacing(2),
            display: 'flex',
            flexGrow: 1,
            overflow: 'auto',
            flexDirection: 'column',
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        title: {
            fontSize: 16,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '20px'
        },
        introduction: {
            lineHeight: '18px',
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(2),
            flexGrow: 1,
            marginBottom: 'auto'
        },
        footNote: {
            color: theme.palette.maskColor.second,
            fontSize: 16,
            marginTop: theme.spacing(2)
        },
        link: {
            color: theme.palette.primary.main
        },
        actions: {
            padding: '16px',
            display: 'flex',
            boxShadow: theme.palette.mode === 'light' ? '0px 0px 20px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12)',
            justifyContent: 'space-between',
            gap: theme.spacing(2),
            '& > :not(:first-of-type)': {
                marginLeft: 0
            }
        },
        cancelButton: {
            color: theme.palette.maskColor.main,
            backgroundColor: theme.palette.maskColor.thirdMain,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.thirdMain
            }
        },
        confirmButton: {
            color: theme.palette.maskColor.bottom,
            backgroundColor: theme.palette.maskColor.main
        },
        button: {
            flexGrow: 1,
            height: 40
        }
    }));
const TERMS_URL = 'https://legal.mask.io/arweave/file-service/plugin-terms.html';
const POLICY_URL = 'https://legal.mask.io/arweave/file-service/privacy-policy-uploader.html';
function Terms() {
    const t = useFileServiceTrans();
    const { classes, cx } = Terms_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [confirmed, setConfirmed] = useTermsConfirmed();
    (0,react.useLayoutEffect)(()=>{
        if (confirmed) navigate(-1);
    }, [
        confirmed
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.terms,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h1",
                        className: classes.title,
                        children: t.what_is_web3_file_service()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.introduction,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceTrans.introduction, {
                            multiple: true,
                            components: {
                                br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.footNote,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceTrans.foot_note, {
                            components: {
                                terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    target: "_blank",
                                    className: classes.link,
                                    href: TERMS_URL
                                }),
                                policy: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    target: "_blank",
                                    className: classes.link,
                                    href: POLICY_URL
                                })
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: cx(classes.button, classes.cancelButton),
                        onClick: ()=>navigate(src_constants/* RoutePaths */.s2.Exit),
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: cx(classes.button, classes.confirmButton),
                        onClick: ()=>setConfirmed(true),
                        children: t.confirm()
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/Routes.tsx




function FileRoutes() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: src_constants/* RoutePaths */.s2.Browser,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileBrowser, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: src_constants/* RoutePaths */.s2.FileSelector,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(FilePicker, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: src_constants/* RoutePaths */.s2.UploadFile,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadFile, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: src_constants/* RoutePaths */.s2.Terms,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Terms, {})
            }),
            /* If router is embedded inside a dialog, */ /* which should know it's time to close itself once we enter Exit */ /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: src_constants/* RoutePaths */.s2.Exit,
                element: null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: "*",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
                    replace: true,
                    to: src_constants/* RoutePaths */.s2.Browser
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/MainDialog.tsx











const MainDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            width: 600,
            maxWidth: 'none',
            height: 620,
            boxShadow: 'none',
            backgroundImage: 'none',
            [theme.breakpoints.down('sm')]: {
                margin: 12
            }
        },
        content: {
            padding: 0,
            overflow: 'auto',
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
function FileServiceDialog({ onClose, selectMode, selectedFileIds, compositionType }) {
    const { classes } = MainDialog_useStyles();
    const [confirmed] = useTermsConfirmed();
    const initialEntries = (0,react.useMemo)(()=>{
        const OpenEntry = selectMode ? {
            pathname: src_constants/* RoutePaths */.s2.FileSelector,
            search: '?' + (0,urlcat_dist/* default */.ZP)('', {
                selectedFileIds: selectedFileIds?.join(',')
            })
        } : src_constants/* RoutePaths */.s2.Browser;
        return [
            src_constants/* RoutePaths */.s2.Exit,
            OpenEntry,
            src_constants/* RoutePaths */.s2.Terms
        ];
    }, [
        selectMode,
        selectedFileIds
    ]);
    const initialIndex = confirmed ? 1 : 2;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* MemoryRouter */.VA, {
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileManagementProvider, {
            compositionType: compositionType,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RouterDialog, {
                open: true,
                onClose: onClose,
                classes: {
                    paper: classes.paper
                },
                maxWidth: "xs",
                fullWidth: true,
                independent: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                    className: classes.content,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRoutes, {})
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/FileServiceInjection.tsx





const FileServiceInjection = /*#__PURE__*/ (0,react.memo)(function FileServiceInjection() {
    const [open, setOpen] = (0,react.useState)(false);
    const [selectedFiles, setSelectedFiles] = (0,react.useState)([]);
    const [compositionType, setCompositionType] = (0,react.useState)('popup');
    const [selectMode, setSelectMode] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const unsubscribe = emitter.on('open', (options)=>{
            setOpen(true);
            setCompositionType(options.compositionType);
            setSelectMode(options.selectMode);
            setSelectedFiles(options.selectedFiles ?? constants/* EMPTY_LIST */.rP);
        });
        return ()=>{
            unsubscribe();
        };
    }, []);
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceDialog, {
        open: true,
        onClose: ()=>setOpen(false),
        compositionType: compositionType,
        selectMode: selectMode,
        selectedFileIds: selectedFiles
    });
});

// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/modals/ConfirmModal/ConfirmDialog.tsx






const ConfirmDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            minWidth: 320,
            width: 320,
            minHeight: 280
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontWeight: 700,
            marginTop: theme.spacing(3),
            color: theme.palette.maskColor.main
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 80,
            padding: theme.spacing(2),
            margin: theme.spacing(0),
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        message: {
            margin: theme.spacing(1.5, 0),
            lineHeight: '20px',
            fontSize: 14,
            color: theme.palette.maskColor.second,
            wordBreak: 'break-all'
        },
        desc: {
            flexGrow: 1,
            fontSize: 14,
            textAlign: 'center',
            color: theme.palette.maskColor.second,
            marginBottom: theme.spacing(1)
        },
        closeButton: {
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
            color: theme.palette.maskColor.main
        }
    }));
// Yet, another Confirm Dialog
const ConfirmDialog = /*#__PURE__*/ (0,react.memo)(({ title, message, description, confirmLabel = 'Confirm', onSubmit, onClose, ...rest })=>{
    const { classes } = ConfirmDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.paper,
            ...rest.classes
        },
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h1",
                    className: classes.title,
                    component: "div",
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.message,
                    component: "div",
                    children: message
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.desc,
                    component: "div",
                    children: description
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    color: "error",
                    onClick: ()=>onSubmit(),
                    children: confirmLabel
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                    className: classes.closeButton,
                    size: 24,
                    onClick: onClose
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/modals/ConfirmModal/index.tsx




const ConfirmModal_ConfirmModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [props_, setProps_] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setProps_(props);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
        open: true,
        onSubmit: ()=>dispatch?.close(true),
        onClose: ()=>dispatch?.close(false),
        ...props_,
        message: props_?.message
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/modals/RenameModal/RenameDialog.tsx







const RenameDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            minWidth: 320,
            width: 330,
            minHeight: 243,
            borderRadius: '24px',
            boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.10)'
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontWeight: 700,
            marginTop: theme.spacing(3),
            color: theme.palette.maskColor.main
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 80,
            padding: theme.spacing(2),
            margin: theme.spacing(0),
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        message: {
            marginTop: theme.spacing(1.5),
            lineHeight: '18px',
            color: theme.palette.maskColor.third,
            fontSize: 14,
            fontWeight: 400
        },
        inputBox: {
            flexGrow: 1,
            textAlign: 'center',
            width: '100%',
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(4),
            boxSizing: 'border-box'
        },
        input: {
            boxSizing: 'border-box'
        },
        button: {
            marginTop: theme.spacing(2)
        },
        closeButton: {
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
            color: theme.palette.maskColor.main
        }
    }));
const RenameDialog = /*#__PURE__*/ (0,react.memo)(({ title, message, description, currentName, onSubmit, onClose, ...rest })=>{
    const { classes } = RenameDialog_useStyles();
    const t = useFileServiceTrans();
    const [name, setName] = (0,react.useState)(currentName);
    const isDirty = name !== currentName;
    const isValid = isDirty && name.length >= 3 && name.length <= 20;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.paper,
            ...rest.classes
        },
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h1",
                    className: classes.title,
                    children: t.rename()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    component: "div",
                    className: classes.message,
                    children: message
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.inputBox,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        fullWidth: true,
                        autoFocus: true,
                        className: classes.input,
                        value: name,
                        onChange: (event)=>setName(event.currentTarget.value)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    fullWidth: true,
                    color: "primary",
                    disabled: !isValid,
                    onClick: ()=>onSubmit(name),
                    children: t.confirm()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                    className: classes.closeButton,
                    size: 24,
                    onClick: ()=>onClose()
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/modals/RenameModal/index.tsx




const RenameModal_RenameModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [props_, setProps_] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setProps_(props);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenameDialog, {
        open: true,
        onSubmit: (name)=>dispatch?.close(name),
        onClose: ()=>dispatch?.close(),
        ...props_,
        currentName: props_?.currentName ?? ''
    });
});

;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/modals/index.tsx





const Modals = /*#__PURE__*/ (0,react.memo)(function Modals() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmModal_ConfirmModal, {
                ref: ConfirmModal.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RenameModal_RenameModal, {
                ref: RenameModal.register
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var src_providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/SiteAdaptor/index.tsx





















function clickHandler() {
    return openBrowser('popup');
}
const definition = {
    ...base/* base */.u,
    init (signal, context) {
        setupStorage(context.createKVStorage('persistent', {
            termsConfirmed: undefined
        }));
    },
    DecryptedInspector (props) {
        const metadata = (0,helpers/* getFileInfoMetadata */.R9)(props.message.meta);
        if (!metadata.isOk()) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileViewer, {
                files: metadata.value
            })
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            src_constants/* META_KEY_1 */.ki,
            onAttachedFile
        ],
        [
            src_constants/* META_KEY_2 */.lw,
            onAttachedFile
        ],
        [
            src_constants/* META_KEY_3 */.ep,
            onAttachedMultipleFile
        ]
    ]),
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceInjection, {})
            ]
        });
    },
    CompositionDialogEntry: {
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FileService, {
                    size: 16
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    ns: PluginID/* PluginID */.P.FileService,
                    i18nKey: "name"
                })
            ]
        }),
        onClick: ({ compositionType, metadata })=>{
            const payload = metadata?.get(src_constants/* META_KEY_3 */.ep);
            const selectedIds = Array.isArray(payload) ? payload.map((f)=>f.id) : constants/* EMPTY_LIST */.rP;
            openPicker(selectedIds, compositionType);
        }
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FileService, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.FileService,
                i18nKey: "__plugin_name"
            });
            const iconFilterColor = 'rgba(247, 147, 30, 0.3)';
            return {
                ApplicationEntryID: base/* base */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                            field: name,
                            pluginID: base/* base */.u.ID
                        }),
                        ...EntryComponentProps,
                        icon: icon,
                        iconFilterColor: iconFilterColor,
                        onClick: ()=>{
                            EntryComponentProps.onClick ? EntryComponentProps.onClick?.(clickHandler) : clickHandler();
                            src_providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryAppFileOpen);
                        }
                    });
                },
                appBoardSortingDefaultPriority: 3,
                marketListSortingPriority: 3,
                icon,
                category: 'dapp',
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    ns: PluginID/* PluginID */.P.FileService,
                    i18nKey: "__plugin_description"
                }),
                name,
                iconFilterColor,
                tutorialLink: 'https://realmasknetwork.notion.site/8c8fe1efce5a48b49739a38f4ea8c60f'
            };
        })()
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FileService, {
            size: 24,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(247, 147, 30, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(255, 177, 16, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SiteAdaptor = (definition);
function onAttachedFile(file) {
    const name = (0,truncate/* default */.Z)(file.name, {
        length: 10
    });
    const size = (0,esm/* formatFileSize */.sS)(file.size, true);
    return {
        text: /*#__PURE__*/ (0,jsx_runtime.jsx)(SingleFileChip, {
            name: name,
            size: size,
            onClick: ({ compositionType })=>{
                openPicker([
                    file.id
                ], compositionType);
            }
        }),
        tooltip: `${file.name} (${size})`
    };
}
function onAttachedMultipleFile(files) {
    if (files.length === 1) return onAttachedFile(files[0]);
    return {
        text: /*#__PURE__*/ (0,jsx_runtime.jsx)(MultipleFileChip, {
            count: files.length,
            role: "button",
            onClick: ({ compositionType })=>{
                openPicker(files.map((file)=>file.id), compositionType);
            }
        })
    };
}


/***/ }),

/***/ 83598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uR: () => (/* binding */ digest),
  Sv: () => (/* binding */ downloadFile),
  R9: () => (/* binding */ getFileInfoMetadata),
  sM: () => (/* binding */ makeFileKey),
  Gd: () => (/* binding */ makeFileKeySigned),
  zb: () => (/* binding */ migrateFileInfoV1)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(70358);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(55906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Metadata/index.ts
var Metadata = __webpack_require__(33845);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/constants.ts
var constants = __webpack_require__(65977);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/types.ts
var types = __webpack_require__(73354);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["arweave"],"title":"type"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","size"]}');
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave","ipfs"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}');
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/schema-v3.json
const schema_v3_namespaceObject = JSON.parse('{"type":"array","items":[{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave","ipfs"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":["number","string"],"title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}]}');
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/helpers.ts












// Note: if the latest version has been changed, please update packages/mask/content-script/components/CompositionDialog/useSubmit.ts
const reader_v1 = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_1 */.ki, schema_v1_namespaceObject);
const reader_v2 = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_2 */.lw, schema_v2_namespaceObject);
const reader_v3 = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_3 */.ep, schema_v3_namespaceObject);
function getFileInfoMetadata(meta) {
    const v3 = reader_v3(meta);
    if (v3.isOk()) return v3;
    const v2 = reader_v2(meta).map((info)=>[
            info
        ]);
    if (v2.isOk()) return v2;
    return reader_v1(meta).map(migrateFileInfoV1);
}
function migrateFileInfoV1(info) {
    return [
        {
            ...info,
            type: 'file',
            provider: 'arweave'
        }
    ];
}
async function makeFileKeySigned(fileKey) {
    if ((0,isNil/* default */.Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,esm/* encodeText */.YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(esm/* encodeArrayBuffer */.ll);
}
const resolveGatewayAPI = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [types/* Provider */.z.Arweave]: 'https://arweave.net',
    [types/* Provider */.z.IPFS]: 'https://mask.infura-ipfs.io/ipfs'
}, ()=>'Unknown provider');
function makeFileKey(length = 16) {
    let key = '';
    // cspell:disable-next-line
    const table = 'ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478';
    for(let i = 0; i < length; i += 1){
        key += table.charAt(Math.floor(Math.random() * table.length));
    }
    return key;
}
function downloadFile(file) {
    const gateway = resolveGatewayAPI(file.provider);
    let link = (0,dist/* default */.ZP)(gateway, '/:txId', {
        txId: file.landingTxID
    });
    if ((0,isAfter/* default */.Z)(new Date(2022, 8, 1), new Date(file.createdAt))) {
        link = (0,dist/* default */.ZP)(constants/* RECOVERY_PAGE */.nH, {
            url: encodeURIComponent(link)
        });
    }
    (0,open_window/* openWindow */.x)(file.key ? `${link}#${file.key}` : link);
}
async function digestFile(file) {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, '0'));
    return hashHex;
}
async function digestMessage(message) {
    const buffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
async function digest(file, extraData) {
    const fileDigest = await digestFile(file);
    const dataDigest = await digestMessage(JSON.stringify(extraData));
    return digestMessage(JSON.stringify([
        fileDigest,
        dataDigest
    ]));
}


/***/ }),

/***/ 73354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Provider)
/* harmony export */ });
var Provider/**
     * Before v3, it's checksum of the file.
     * Since v3, it's digest(file, [provider, useCDN, encrypted])
     */ /**
     * Before v3, it's Date
     * Since v3, it's number
     */ /** Doesn't exist in uploading file info */ /** Doesn't exist in uploading file info */ ;
(function(Provider) {
    Provider["Arweave"] = 'arweave';
    Provider["IPFS"] = 'ipfs';
})(Provider || (Provider = {}));


/***/ }),

/***/ 38096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ openWindow)
/* harmony export */ });
// Behavior
// Dimension
function openWindow(url, target = '_blank', features = {}) {
    if (!url) return null;
    const flags = [];
    for (const [name, value] of Object.entries(features.behaviors ?? {})){
        if (value) flags.push(`${name}=1`);
    }
    if (!features.opener) flags.push('noopener');
    if (!features.referrer) flags.push('noreferrer');
    if (Number.isFinite(features.width)) flags.push(`width=${features.width}`);
    if (Number.isFinite(features.height)) flags.push(`height=${features.height}`);
    if (Number.isFinite(features.screenX)) flags.push(`screenX=${features.screenX}`);
    if (Number.isFinite(features.screenY)) flags.push(`screenY=${features.screenY}`);
    return window.open(url, target, flags.join(' '));
}


/***/ }),

/***/ 72385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 62384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 14414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getOrUpdateLocalImplementationHMR)
/* harmony export */ });
const cache = new WeakMap();
/**
 * This function provides a localImplementation that has HMR support.
 * To update, call this function with the SAME key object.
 * @param impl The implementation. Can be an async function.
 * @param key The reference object that must be the same if you're updating.
 */ async function getOrUpdateLocalImplementationHMR(impl, key) {
    if (true) return impl();
    const result = await impl();
    if (!cache.has(key)) cache.set(key, Object.create(null));
    const localImpl = cache.get(key);
    Object.setPrototypeOf(localImpl, result);
    return localImpl;
}


/***/ }),

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 23478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ MaskTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17711);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30911);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76550);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99979);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66584);
/* harmony import */ var _UIHelper_makeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23935);







const useStyles = (0,_UIHelper_makeStyles_js__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        label: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder'
        },
        required: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder',
            color: (0,_CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .n)(theme).redMain,
            paddingLeft: theme.spacing(0.5)
        },
        field: {
            width: '100%',
            [`& > .${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.root}`]: {
                paddingTop: theme.spacing(1),
                borderRadius: '2px',
                fontSize: 14,
                lineHeight: '16px'
            },
            '& input[type=number]': {
                MozAppearance: 'textfield',
                WebkitAppearance: 'none'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                WebkitAppearance: 'none'
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none'
            },
            '& input::-webkit-input-placeholder': {
                color: theme.palette.maskColor.third
            },
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.focused}`]: {
                background: 'transparent'
            }
        },
        input: {
            padding: theme.spacing(1),
            background: theme.palette.maskColor.input,
            fontSize: 13,
            lineHeight: '16px',
            borderRadius: 6,
            border: '1px solid transparent',
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.error}`]: {
                boxShadow: `0 0 0 ${theme.spacing(0.5)} ${_CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.redMain.alpha(0.2)}`,
                borderColor: _CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.redMain.alpha(0.8)
            },
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.focused}`]: {
                borderColor: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.5) : 'transparent'
            }
        },
        inputDisabled: {
            opacity: 0.5,
            color: 'rgba(255, 255, 255, 0.4)'
        },
        inputFocused: {
            background: 'transparent',
            ..._masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? {
                outline: `2px solid ${(0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.2)}`,
                borderColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.5)
            } : {
                boxShadow: `0 0 0 2px ${theme.palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
            }
        }
    }));
const MaskTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { label, sx, required = false, className, wrapperProps, helperText, ...rest } = props;
    const InputProps = props.InputProps ?? {};
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        sx: sx,
        ...wrapperProps,
        children: [
            label && typeof label === 'string' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                sx: {
                    mb: 1
                },
                variant: "body2",
                className: classes.label,
                children: [
                    label,
                    required ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        className: classes.required,
                        component: "span",
                        children: "*"
                    }) : null
                ]
            }) : null,
            label && typeof label !== 'string' ? label : null,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ref: ref,
                ...rest,
                classes: {
                    root: classes.field
                },
                variant: "standard",
                required: required,
                helperText: helperText,
                InputProps: {
                    disableUnderline: true,
                    classes: {
                        disabled: classes.inputDisabled,
                        focused: classes.inputFocused,
                        ...InputProps.classes
                    },
                    ...InputProps,
                    className: cx(classes.input, InputProps?.className)
                }
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                className: classes.field,
                ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(InputProps, 'disableUnderline'),
                ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(rest, 'margin', 'onKeyDown', 'onKeyUp', 'InputProps', 'inputProps', 'FormHelperTextProps')
            })
        ]
    });
});
MaskTextField.displayName = 'MaskTextField';


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

/***/ 33845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   mC: () => (/* binding */ createRenderWithMetadata),
/* harmony export */   r1: () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, renderWithMetadataUntyped */
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42582);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35268);
}



const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key);
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (!meta.has(key)) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.isErr()) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.error);
            return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
        }
    }
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err)(validator.getLastErrors());
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.isOk()) return render(message.value);
        return null;
    };
}
let immer_setup = false;
function editTypedMessageMeta(typedMessage, edit) {
    if (!immer_setup) {
        (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
        immer_setup = true;
    }
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .produce */ .Uy)(typedMessage, (e)=>{
        if (!e.meta) e.meta = new Map();
        edit(e.meta);
        if (e.meta.size === 0) e.meta = undefined;
    });
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.isOk()) return render(message.value);
    return null;
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

/***/ 41425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__(41425);
} else {}


/***/ }),

/***/ 37700:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__(37700);
} else {}


/***/ })

}]);
//# sourceMappingURL=chunk.9692.js.map