"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6482],{

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

/***/ 86787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ BuyTokenGlobalInjection)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(11017);
// EXTERNAL MODULE: ./packages/plugins/Transak/src/messages.ts
var messages = __webpack_require__(48188);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/.pnpm/json-stable-stringify@1.0.2/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(74545);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./packages/plugins/Transak/src/constants.ts
var constants = __webpack_require__(44967);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
;// CONCATENATED MODULE: ./packages/plugins/Transak/src/hooks/useTransakURL.ts





const HOST_MAP = {
    production: 'https://global.transak.com',
    development: 'https://staging-global.transak.com',
    test: 'https://development-global.transak.com'
};
const DEFAULT_PARAMETERS = {
    apiKey:  true ? constants/* TRANSAK_API_KEY_PRODUCTION */.o1 : 0,
    environment:  true ? 'PRODUCTION' : 0,
    defaultFiatAmount: 100,
    defaultCryptoCurrency: 'ETH',
    hostURL: location.origin,
    redirectURL: location.origin,
    widgetWidth: '100%',
    widgetHeight: '630px',
    hideMenu: false,
    excludeFiatCurrencies: 'KRW'
};
function useTransakURL(config) {
    const theme = (0,useTheme/* default */.Z)();
    const search = (0,react.useMemo)(()=>{
        const config_ = {
            ...DEFAULT_PARAMETERS,
            themeColor: (0,colorManipulator/* rgbToHex */.vq)(theme.palette.maskColor.dark).slice(1),
            exchangeScreenTitle: config?.walletAddress ? `Buy Crypto to ${(0,formatter/* formatEthereumAddress */.j8)(config.walletAddress, 4)}` : void 0,
            ...config
        };
        const params = new URLSearchParams();
        Object.entries(config_).forEach(([key, value = ''])=>params.append(key, String(value)));
        return params.toString();
    }, [
        theme.palette.primary.main,
        json_stable_stringify_default()(config)
    ]);
    return `${HOST_MAP["production"]}?${search}`;
}

;// CONCATENATED MODULE: ./packages/plugins/Transak/src/SiteAdaptor/BuyTokenDialog.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialogPaper: {
            width: '500px !important',
            overflow: 'inherit'
        },
        dialogContent: {
            padding: '0 !important'
        },
        close: {
            color: `${theme.palette.common.white} !important`,
            backgroundColor: `${theme.palette.maskColor.dark} !important`,
            top: theme.spacing(-2),
            right: theme.spacing(-2),
            position: 'absolute'
        },
        content: {
            width: '100%',
            padding: 0,
            backgroundColor: theme.palette.common.white,
            position: 'relative',
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflow: 'inherit',
            borderRadius: 12
        },
        frame: {
            display: 'block',
            width: '100%',
            height: 630,
            border: 0,
            borderRadius: 12
        }
    }));
function BuyTokenDialog(props) {
    const { classes } = useStyles(undefined, {
        props
    });
    const { code, address, open, onClose } = props;
    const transakURL = useTransakURL({
        defaultCryptoCurrency: code,
        walletAddress: address
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            onClose: onClose,
            classes: {
                paper: classes.dialogPaper,
                dialogContent: classes.dialogContent
            },
            disableBackdropClick: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        className: classes.close,
                        size: "small",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
                    }),
                    transakURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                        className: classes.frame,
                        src: transakURL
                    }) : null
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Transak/src/SiteAdaptor/BuyTokenGlobalInjection.tsx





const BuyTokenGlobalInjection = /*#__PURE__*/ (0,react.memo)(function BuyTokenGlobalInjection() {
    const [code, setCode] = (0,react.useState)('ETH');
    const [address, setAddress] = (0,react.useState)('');
    const { open, closeDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(messages/* PluginTransakMessages */.l.buyTokenDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setCode(ev.code ?? 'ETH');
        setAddress(ev.address);
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BuyTokenDialog, {
        open: true,
        onClose: closeDialog,
        code: code,
        address: address
    });
});


/***/ }),

/***/ 6482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26997);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11017);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46025);
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48188);
/* harmony import */ var _BuyTokenGlobalInjection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86787);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);









const site = {
    ..._base_js__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u,
    init (signal) {},
    GlobalInjection: _BuyTokenGlobalInjection_js__WEBPACK_IMPORTED_MODULE_3__/* .BuyTokenGlobalInjection */ .G,
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.Transak, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
                i18nKey: "plugin_transak_name",
                ns: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .PluginID */ .P.Transak
            });
            const iconFilterColor = 'rgba(69, 110, 255, 0.3)';
            return {
                ApplicationEntryID: _base_js__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const { openDialog } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F)(_messages_js__WEBPACK_IMPORTED_MODULE_7__/* .PluginTransakMessages */ .l.buyTokenDialogUpdated);
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_8__/* .ApplicationEntry */ .T, {
                        title: name,
                        icon: icon,
                        iconFilterColor: iconFilterColor,
                        ...EntryComponentProps,
                        onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(openDialog) : openDialog
                    });
                },
                appBoardSortingDefaultPriority: 8,
                marketListSortingPriority: 6,
                tutorialLink: 'https://transak.com/',
                icon,
                description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
                    i18nKey: "plugin_transak_description"
                }),
                name,
                category: 'dapp',
                iconFilterColor
            };
        })()
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (site);


/***/ }),

/***/ 48188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44967);


 undefined;
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .getPluginMessage */ .db)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


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


/***/ })

}]);
//# sourceMappingURL=chunk.6482.js.map