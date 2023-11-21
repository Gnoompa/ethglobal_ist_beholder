(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6485,6751],{

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

/***/ 56142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 75810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82897);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40514);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39907);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44909);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49113);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1638);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(60317);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(837);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25127);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(80922);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(59312);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23935);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8311);
/* harmony import */ var _trader_useAllProviderTradeContext_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6780);
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68026);
/* harmony import */ var _Trader_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(57310);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22733);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9640);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67041);

















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { rotate })=>({
        abstractTabWrapper: {
            width: '100%',
            position: 'sticky',
            top: 0,
            zIndex: 2,
            '& > div .MuiBox-root': _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_dashboard_page ? {
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar */ .Z.mainBackground
            } : {}
        },
        content: {
            padding: 0,
            minHeight: 564,
            display: 'flex',
            flexDirection: 'column',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tradeRoot: {},
        tail: {
            display: 'flex',
            gap: 8,
            '& > button': {
                padding: 0,
                width: 24,
                height: 24
            }
        },
        icon: {
            color: theme.palette.maskColor.main,
            cursor: 'pointer'
        },
        dialog: {
            [`.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.root}`]: {
                // 'row !important' is not assignable to FlexDirection
                flexDirection: 'row !important',
                '& > p': {
                    justifyContent: 'center !important'
                }
            }
        },
        iconRotate: {
            '@keyframes rotate': {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(-360deg)'
                }
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: rotate ? 'rotate 1.5s linear' : 'none',
            transformOrigin: 'center'
        }
    }));
function TraderDialog(props) {
    const tradeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const traderDefinition = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_6__/* .useActivatedPlugin */ .R)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PluginID */ .P.Trader, 'any');
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useNetworkContext */ .gK)();
    const { chainId, setChainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useChainContext */ .ql)();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3Others */ .v)();
    const chainIdList = traderDefinition?.enableRequirement.web3?.[_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkPluginID */ .F.PLUGIN_EVM]?.supportedChainIds ?? [];
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_10__/* .useTraderTrans */ .u)();
    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { classes } = useStyles({
        rotate
    });
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chainIdValid = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__/* .useChainIdValid */ .a)(pluginID, chainId);
    const [defaultCoins, setDefaultCoins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        defaultInputCoin: undefined,
        defaultOutputCoin: undefined
    });
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const defaultInputCoin = defaultCoins?.defaultInputCoin;
    const defaultOutputCoin = defaultCoins?.defaultOutputCoin;
    const inputFungibleToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Others.createFungibleToken(chainId, Others.isNativeTokenAddress(defaultInputCoin?.address) ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .SchemaType */ .XQ.Native : _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .SchemaType */ .XQ.ERC20, defaultInputCoin?.address ?? '', defaultInputCoin?.name ?? '', defaultInputCoin?.symbol ?? '', defaultInputCoin?.decimals ?? 0), [
        chainId
    ]);
    const outputFungibleToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Others.createFungibleToken(chainId, Others.isNativeTokenAddress(defaultOutputCoin?.address) ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .SchemaType */ .XQ.Native : _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .SchemaType */ .XQ.ERC20, defaultOutputCoin?.address ?? '', defaultOutputCoin?.name ?? '', defaultOutputCoin?.symbol ?? '', defaultOutputCoin?.decimals ?? 0), [
        chainId
    ]);
    // TODO: Other network schema support
    const { data: inputToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_13__/* .useFungibleToken */ .c)(pluginID, defaultInputCoin?.address, inputFungibleToken, {
        chainId
    });
    const { data: outputToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_13__/* .useFungibleToken */ .c)(pluginID, defaultOutputCoin?.address, outputFungibleToken, {
        chainId
    });
    // #region update default input or output token
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .CrossIsolationMessages */ .W.events.swapDialogEvent.on(({ open, traderProps })=>{
            setOpen(open);
            if (traderProps) {
                const { defaultInputCoin, defaultOutputCoin } = traderProps;
                setDefaultCoins({
                    defaultInputCoin,
                    defaultOutputCoin
                });
                if (traderProps.chainId) setChainId(traderProps.chainId);
            }
        });
    }, []);
    // #endregion
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainIdValid) setOpen(false);
    }, [
        chainIdValid
    ]);
    const [, openGasSettingDialog] = (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(async ()=>{
        const { settings } = await _masknet_shared__WEBPACK_IMPORTED_MODULE_16__/* .SelectGasSettingsModal */ .eq.openAndWaitForClose({
            chainId,
            disableGasLimit: true,
            disableSlippageTolerance: false,
            transaction: {
                gas: tradeRef.current?.focusedTrade?.gas ?? _constants_index_js__WEBPACK_IMPORTED_MODULE_17__/* .MIN_GAS_LIMIT */ ._P,
                ...tradeRef.current?.gasConfig
            },
            slippageTolerance: _settings_js__WEBPACK_IMPORTED_MODULE_18__/* .currentSlippageSettings */ .I.value / 100
        });
        if (settings?.slippageTolerance) _settings_js__WEBPACK_IMPORTED_MODULE_18__/* .currentSlippageSettings */ .I.value = settings.slippageTolerance;
        _messages_js__WEBPACK_IMPORTED_MODULE_19__/* .PluginTraderMessages */ .A.swapSettingsUpdated.sendToAll({
            open: false,
            gasConfig: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .GasEditor */ .e.fromTransaction(chainId, settings?.transaction).getGasConfig()
        });
    }, [
        chainId,
        _settings_js__WEBPACK_IMPORTED_MODULE_18__/* .currentSlippageSettings */ .I.value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_21__/* .InjectedDialog */ .F, {
        open: open,
        onClose: ()=>{
            setDefaultCoins(undefined);
            setOpen(false);
        },
        title: t.plugin_trader_swap(),
        titleBarIconStyle: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_dashboard_page ? 'close' : 'back',
        titleTail: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.tail,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    onClick: ()=>{
                        if (rotate) return;
                        if (timer) clearTimeout(timer);
                        setRotate(true);
                        setTimer(setTimeout(()=>{
                            setRotate(false);
                        }, 1500));
                        tradeRef.current?.refresh();
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.iconRotate,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_23__.Refresh, {
                            size: 24,
                            className: classes.icon
                        })
                    })
                }),
                pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkPluginID */ .F.PLUGIN_EVM ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    onClick: openGasSettingDialog,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_23__.Gear, {
                        size: 24,
                        className: classes.icon
                    })
                }) : null
            ]
        }),
        className: classes.dialog,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: classes.abstractTabWrapper,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_25__/* .NetworkTab */ .L, {
                        chains: chainIdList,
                        pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkPluginID */ .F.PLUGIN_EVM
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useAllProviderTradeContext_js__WEBPACK_IMPORTED_MODULE_26__/* .AllProviderTradeContext */ .TX.Provider, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Trader_js__WEBPACK_IMPORTED_MODULE_27__/* .Trader */ .A, {
                        share: props.share,
                        defaultInputCoin: defaultInputCoin ? inputToken : undefined,
                        defaultOutputCoin: defaultOutputCoin ? outputToken : undefined,
                        chainId: chainId,
                        classes: {
                            root: classes.tradeRoot
                        },
                        ref: tradeRef
                    })
                })
            ]
        })
    });
}


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

/***/ 44475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ usePersistSubscription)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


/**
 * In favor of react-query's persist cache and cache management
 */ function usePersistSubscription(persistKey, subscription, predicate) {
    const [initialValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>subscription.getCurrentValue());
    const { data = initialValue, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            persistKey
        ],
        networkMode: 'always',
        queryFn: ()=>{
            const value = subscription.getCurrentValue();
            if (predicate && !predicate(value)) return undefined;
            return value;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        refetch();
        // Actively fetch, make persist data act as placeholder data
        return subscription.subscribe(refetch);
    }, [
        subscription,
        refetch
    ]);
    return data;
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

/***/ 75369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ compose)
/* harmony export */ });
function compose(...args) {
    if (args.length === 0) throw new TypeError();
    const last = args.pop();
    return args.filter(Boolean).reduceRight((prev, fn)=>fn(prev), last);
}


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

/***/ 87792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ DotLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);


const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        loading: {
            display: 'flex',
            columnGap: 4,
            '@keyframes dotLoading': {
                to: {
                    opacity: 0.1
                }
            },
            '& > div': {
                animation: 'dotLoading 0.6s infinite alternate'
            },
            '& > div:nth-child(2)': {
                animationDelay: '0.2s'
            },
            '& > div:nth-child(3)': {
                animationDelay: '0.4s'
            }
        },
        dot: {
            width: 3,
            height: 3,
            backgroundColor: theme.palette.maskColor.main
        }
    }));
function DotLoading() {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.loading,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.dot
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.dot
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.dot
            })
        ]
    });
}


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

/***/ 22103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ FormattedBalance)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10149);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29763);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    }));
function FormattedBalance(props) {
    const { value, decimals, significant, symbol, minimumBalance, formatter = (value)=>value } = props;
    const valueInt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(value ?? '0').toFixed(0);
    let formatted = formatter(valueInt, decimals, significant);
    if (minimumBalance && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isZero */ .Fr)(formatted) && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isLessThan */ .FI)(valueInt, minimumBalance)) {
        // it's a BigNumber so it's ok
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        formatted = '<' + formatter(minimumBalance, decimals, significant).toString();
    }
    const { classes } = useStyles(undefined, {
        props
    });
    if (symbol) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.balance,
                children: String(formatted)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes?.symbol,
                children: symbol
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: String(formatted)
    });
}


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

/***/ 27966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ShadowRootTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70429);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootTooltip = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootTooltip.displayName = 'ShadowRootTooltip';


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

/***/ 29752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);




function useAccount(pluginID, expectedAccount) {
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    const { Provider } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const defaultAccount = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Provider?.account ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .UNDEFINED */ .i_);
    return Others.formatAddress(expectedAccount ?? defaultAccount ?? '');
}


/***/ }),

/***/ 75607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 58807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useChainId)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);
/* harmony import */ var _useDefaultChainId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4639);




function useChainId(pluginID, expectedChainId) {
    const { Provider } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    const defaultChainId = (0,_useDefaultChainId_js__WEBPACK_IMPORTED_MODULE_2__/* .useDefaultChainId */ .b)(pluginID);
    const actualChainId = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Provider?.chainId ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .UNDEFINED */ .i_);
    return expectedChainId ?? actualChainId ?? defaultChainId;
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

/***/ 14162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  on: () => (/* binding */ ChainContextProvider),
  V4: () => (/* binding */ DefaultWeb3ContextProvider),
  f6: () => (/* binding */ NetworkContextProvider),
  fw: () => (/* binding */ RevokeChainContextProvider),
  t2: () => (/* binding */ RootWeb3ContextProvider),
  vP: () => (/* binding */ Web3ContextProvider),
  ql: () => (/* binding */ useChainContext),
  Ux: () => (/* binding */ useEnvironmentContext),
  gK: () => (/* binding */ useNetworkContext)
});

// UNUSED EXPORTS: ReadonlyNetworkContextProvider, RevokeNetworkContextProvider

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omitBy.js + 1 modules
var omitBy = __webpack_require__(72802);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(81770);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/usePersistSubscription.ts
var usePersistSubscription = __webpack_require__(44475);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
if (/^(3161|964)$/.test(__webpack_require__.j)) {
var useValueRef = __webpack_require__(84271);
}
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/compose.ts
var compose = __webpack_require__(75369);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
if (/^(3161|964)$/.test(__webpack_require__.j)) {
var settings = __webpack_require__(5338);
}
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
if (/^(3161|964)$/.test(__webpack_require__.j)) {
var Site = __webpack_require__(68422);
}
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainId.ts
var useChainId = __webpack_require__(58807);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useProviderType.ts



function useProviderType(pluginID) {
    const { Provider } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const defaultProviderType = (0,use_subscription.useSubscription)(Provider?.providerType ?? Subscriptions/* UNDEFINED */.i_);
    return defaultProviderType;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useContext.tsx











// If it's controlled, we prefer passed value over state inside
const ReadonlyNetworkContext = /*#__PURE__*/ (0,react.createContext)(null);
ReadonlyNetworkContext.displayName = 'ReadonlyNetworkContext';
const NetworkContext = /*#__PURE__*/ (0,react.createContext)(null);
NetworkContext.displayName = 'NetworkContext';
const ChainContext = /*#__PURE__*/ (0,react.createContext)(null);
ChainContext.displayName = 'ChainContext';
/**
 * Provide the current readonly network plugin ID (readonly)
 * @param props
 * @returns
 */ function ReadonlyNetworkContextProvider({ value, children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadonlyNetworkContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Provide the current selected network plugin ID
 * @param props
 * @returns
 */ function NetworkContextProvider({ value, children }) {
    const [pluginID = value, setPluginID] = (0,react.useState)();
    const context = (0,react.useMemo)(()=>({
            pluginID,
            setPluginID
        }), [
        pluginID
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkContext.Provider, {
        value: context,
        children: children
    });
}
/**
 * Provide the current chain context
 * @param props
 * @returns
 */ const ChainContextProvider = /*#__PURE__*/ (0,react.memo)(function ChainContextProvider({ value, children }) {
    const { pluginID } = useNetworkContext();
    const { controlled } = value;
    const globalAccount = (0,useAccount/* useAccount */.m)(pluginID);
    const globalChainId = (0,useChainId/* useChainId */.x)(pluginID);
    const globalProviderType = useProviderType(pluginID);
    const maskProvider = entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet];
    // The initial value of subscription.account could be empty string
    const maskAccount = (0,usePersistSubscription/* usePersistSubscription */.i)('@@mask-account', maskProvider.subscription.account, (x)=>!!x);
    const maskChainId = (0,usePersistSubscription/* usePersistSubscription */.i)('@@mask-chain-id', maskProvider.subscription.chainId);
    const [_account, setAccount] = (0,react.useState)();
    const [_chainId, setChainId] = (0,react.useState)();
    const [_providerType, setProviderType] = (0,react.useState)();
    const location = (0,useLocation/* default */.Z)();
    const is_popup_wallet_page = Sniffings/* Sniffings */.Y.is_popup_page && location.hash?.includes('/wallet');
    const account = controlled ? value.account : _account ?? value.account ?? (is_popup_wallet_page ? maskAccount : globalAccount);
    const chainId = controlled ? value.chainId : _chainId ?? value.chainId ?? (is_popup_wallet_page ? maskChainId : globalChainId);
    const providerType = controlled ? value.providerType : _providerType ?? value.providerType ?? (is_popup_wallet_page ? types/* ProviderType */.lP.MaskWallet : globalProviderType);
    const context = (0,react.useMemo)(()=>({
            account,
            chainId,
            providerType,
            setAccount,
            setChainId,
            setProviderType
        }), [
        account,
        chainId,
        providerType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContext.Provider, {
        value: context,
        children: children
    });
});
/**
 * Provide a context that contains both network and chain context
 * @param props
 * @returns
 */ function Web3ContextProvider({ value, children }) {
    const { pluginID, ...rest } = value;
    return (0,compose/* compose */.q)((children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkContextProvider, {
            value: pluginID,
            children: children
        }), (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContextProvider, {
            value: rest,
            children: children
        }), /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    }));
}
/**
 * Provide the top most network context
 * @param props
 * @returns
 */ function RevokeNetworkContextProvider({ children }) {
    const { pluginID } = useContext(ReadonlyNetworkContext);
    const value = useMemo(()=>({
            pluginID,
            setPluginID: ()=>{
                throw new Error('Set pluginID is not allowed.');
            }
        }), [
        pluginID
    ]);
    return /*#__PURE__*/ _jsx(NetworkContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Provide the top most chain context
 * @param props
 * @returns
 */ function RevokeChainContextProvider({ children }) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.x)();
    const providerType = useProviderType();
    const value = (0,react.useMemo)(()=>({
            account,
            chainId,
            providerType
        }), [
        account,
        chainId,
        providerType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * The default Web3 context provider that uses the EVM plugin
 * @param props
 * @returns
 */ function DefaultWeb3ContextProvider({ value, children }) {
    const contextValue = (0,react.useMemo)(()=>{
        return {
            pluginID: value?.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            ...value
        };
    }, [
        JSON.stringify(value)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ContextProvider, {
        value: contextValue,
        children: children
    });
}
/**
 * The root Web3 context provider that uses the plugin ID from global settings
 * @param props
 * @returns
 */ function RootWeb3ContextProvider({ value, children }) {
    const pluginIDs = (0,useValueRef/* useValueRef */.E)(settings/* pluginIDsSettings */.Mo);
    const contextValue = (0,react.useMemo)(()=>{
        const site = (0,Site/* getSiteType */.sv)();
        return {
            pluginID: value?.pluginID ?? (site ? pluginIDs[site] : PluginID/* NetworkPluginID */.F.PLUGIN_EVM)
        };
    }, [
        pluginIDs,
        JSON.stringify(value)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadonlyNetworkContextProvider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ContextProvider, {
            value: contextValue,
            children: children
        })
    });
}
function useEnvironmentContext(overrides) {
    const context = (0,react.useContext)(ReadonlyNetworkContext);
    return {
        ...context,
        ...(0,omitBy/* default */.Z)(overrides, isUndefined/* default */.Z)
    };
}
function useNetworkContext(overrides) {
    const context = (0,react.useContext)(NetworkContext);
    return {
        ...context,
        pluginID: overrides ?? context.pluginID
    };
}
function useChainContext(overrides) {
    const context = (0,react.useContext)(ChainContext);
    return {
        ...context,
        ...(0,omitBy/* default */.Z)(overrides, isUndefined/* default */.Z)
    };
}


/***/ }),

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useDefaultChainId)
/* harmony export */ });
/* unused harmony export getDefaultChainId */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59190);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97834);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14162);





const DEFAULT_CHAIN_ID = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM]: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_.Mainnet
};
function useDefaultChainId(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkContext */ .gK)(expectedPluginID);
    return DEFAULT_CHAIN_ID[pluginID];
}
function getDefaultChainId(pluginID) {
    return DEFAULT_CHAIN_ID[pluginID];
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

/***/ 16281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useFungibleTokenPrice)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useFungibleTokenPrice(pluginID, address, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        enabled: !!chainId && !!address,
        queryKey: [
            'fungible',
            'token-price',
            pluginID,
            chainId,
            address,
            options
        ],
        queryFn: async ()=>{
            return Hub.getFungibleTokenPrice(chainId, address.toLowerCase());
        }
    });
}


/***/ }),

/***/ 98705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useGasOptions)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81128);




function useGasOptions(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Others */ .v)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)([
        'get-gas-options',
        pluginID,
        chainId,
        options
    ], async ()=>{
        if (!Others.isValidChainId(chainId)) return;
        return Hub.getGasOptions(chainId, options);
    });
}


/***/ }),

/***/ 34093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useNativeTokenAddress)
/* harmony export */ });
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);
/* harmony import */ var _useNetwork_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70858);


function useNativeTokenAddress(pluginID, options) {
    const network = (0,_useNetwork_js__WEBPACK_IMPORTED_MODULE_0__/* .useNetwork */ .L)(pluginID);
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    if (network?.isCustomized) {
        return network.nativeCurrency.address;
    }
    return Others.getNativeTokenAddress(options?.chainId);
}


/***/ }),

/***/ 39256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useNativeTokenPrice)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34093);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNativeTokenPrice(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    const nativeTokenAddress = (0,_useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .useNativeTokenAddress */ .Z)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: !!nativeTokenAddress,
        queryKey: [
            'native-token',
            'price',
            pluginID,
            chainId,
            nativeTokenAddress,
            options
        ],
        queryFn: async ()=>Hub.getFungibleTokenPrice(chainId, nativeTokenAddress, {
                chainId
            })
    });
}


/***/ }),

/***/ 70858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNetwork)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72889);





function useNetwork(pluginID, chainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_3__/* .useNetworks */ .e)(pluginID);
    const networkID = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networkID ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_STRING */ .v6);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (chainId) return networks.find((x)=>x.chainId === chainId);
        return networks.find((x)=>x.ID === networkID);
    }, [
        chainId,
        networkID,
        networks
    ]);
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

/***/ 81128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useWeb3Others)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Others(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .OthersAll */ .Zy.use(pluginID), [
        pluginID
    ]);
}


/***/ }),

/***/ 83977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


function useWeb3State(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getActivatedPluginWeb3State */ .TQ)(pluginID);
}


/***/ }),

/***/ 48245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ formatCurrency)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29763);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);



const BOUNDARIES = {
    zeroDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, 0),
    twoDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -2),
    sixDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -6),
    eightDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -8),
    twelveDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -12),
    zeroDecimalExp: 0,
    twoDecimalExp: 2,
    sixDecimalExp: 6,
    eightDecimalExp: 8,
    twelveDecimalExp: 12
};
const DIGITAL_CURRENCY_SYMBOLS = {
    BTC: '\u20BF',
    ETH: '\u039E',
    SOL: '\u25CE',
    BNB: 'BNB',
    POLYGON: 'MATIC',
    WETH: 'WETH',
    AVAX: 'AVAX',
    GLMR: 'GLMR',
    MATIC: 'MATIC'
};
const digitalCurrencyModifier = (parts, symbol, isDigitalCurrency)=>{
    if (!isDigitalCurrency) return parts;
    const [currencyPart, ...rest] = parts;
    if (symbol) return [
        ...rest,
        {
            ...currencyPart,
            value: symbol
        }
    ];
    return parts;
};
const formatCurrencySymbol = (symbol, isLead)=>{
    return isLead || symbol.length === 0 ? symbol : ` ${symbol}`;
};
const fiatCurrencyResultModifier = (result, currency = _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD, onlyRemainTwoOrZeroDecimal)=>{
    if (currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.HKD) return result.replaceAll('$', 'HK$');
    if (currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY && onlyRemainTwoOrZeroDecimal) return result.startsWith('¥') ? '¥' + Number(result.replaceAll(/¥|,/g, '')).toFixed() : result;
    return result;
};
// https://mask.atlassian.net/wiki/spaces/MASK/pages/122916438/Token
function formatCurrency(inputValue, currency = _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD, options) {
    const { onlyRemainTwoOrZeroDecimal = false, fiatCurrencyRate = 1, customDecimalConfig } = options ?? {};
    const bn = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(inputValue).multipliedBy(fiatCurrencyRate);
    const integerValue = bn.integerValue(1);
    const decimalValue = bn.plus(integerValue.negated());
    const isMoreThanOrEqualToOne = bn.isGreaterThanOrEqualTo(1);
    const { sixDecimalBoundary, zeroDecimalBoundary, twoDecimalBoundary, twelveDecimalBoundary, eightDecimalBoundary, zeroDecimalExp, sixDecimalExp, twoDecimalExp, twelveDecimalExp } = BOUNDARIES;
    const assetValueBoundary = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? zeroDecimalBoundary : twoDecimalBoundary;
    const assetValueDecimalExp = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? zeroDecimalExp : twoDecimalExp;
    const zeroValue = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? '0' : '0.00';
    const minimumValue = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? '1' : '0.01';
    const symbol = currency ? DIGITAL_CURRENCY_SYMBOLS[currency.toUpperCase()] : '';
    let formatter;
    let isIntlCurrencyValid = !DIGITAL_CURRENCY_SYMBOLS[currency.toUpperCase()];
    try {
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: isIntlCurrencyValid ? currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.CNY : currency : 'USD',
            currencyDisplay: 'narrowSymbol'
        });
    } catch  {
        isIntlCurrencyValid = false;
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol'
        });
    }
    const isDigitalCurrency = !!(!isIntlCurrencyValid && symbol);
    const digitalCurrencyModifierValues = digitalCurrencyModifier(formatter.formatToParts(bn.isZero() ? 0 : bn.lt(sixDecimalBoundary) ? sixDecimalBoundary.toNumber() : bn.toNumber()), symbol, isDigitalCurrency);
    let result = '';
    if (bn.lt(customDecimalConfig?.boundary ?? onlyRemainTwoOrZeroDecimal ? assetValueBoundary : sixDecimalBoundary) || bn.isZero()) {
        const isLessThanAssetValueDecimalBoundary = bn.lt(assetValueBoundary);
        const isLessThanTwelveDecimalBoundary = bn.lt(twelveDecimalBoundary);
        const isLessThanCustomDecimalBoundary = customDecimalConfig?.boundary ? bn.lt(customDecimalConfig?.boundary) : false;
        const isGreatThanEightDecimalBoundary = bn.gte(eightDecimalBoundary);
        const value = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'fraction':
                    if (customDecimalConfig) {
                        return bn.isZero() ? zeroValue : isLessThanCustomDecimalBoundary ? customDecimalConfig.boundary.toFixed() : bn.toFixed(customDecimalConfig.decimalExp).replace(/0+$/, '');
                    }
                    return bn.isZero() ? zeroValue : onlyRemainTwoOrZeroDecimal ? minimumValue : isLessThanTwelveDecimalBoundary ? sixDecimalBoundary.toFixed() : isGreatThanEightDecimalBoundary ? bn.decimalPlaces(10).toFixed(twelveDecimalExp).replace(/0+$/, '') : bn.toFixed(twelveDecimalExp).replace(/0+$/, '');
                default:
                    return '';
            }
        }).join('');
        result = `${(isLessThanTwelveDecimalBoundary || onlyRemainTwoOrZeroDecimal && isLessThanAssetValueDecimalBoundary) && !bn.isZero() ? '< ' : ''}${value}`;
    } else if (isMoreThanOrEqualToOne) {
        result = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'literal':
                    return '';
                default:
                    return value;
            }
        }).join('');
    } else {
        result = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'fraction':
                    const dec = decimalValue.toFormat(customDecimalConfig?.decimalExp ?? (onlyRemainTwoOrZeroDecimal ? assetValueDecimalExp : sixDecimalExp)).replace(/\d\./, '');
                    return onlyRemainTwoOrZeroDecimal ? dec.replace(/(\d\d)(0+)$/, '$1') : dec.replace(/(0+)$/, '');
                case 'integer':
                    // When there is a carry
                    if (bn.gt('0.99') && onlyRemainTwoOrZeroDecimal) return '1';
                    return '0';
                case 'literal':
                    return '';
                default:
                    return value;
            }
        }).join('');
    }
    return fiatCurrencyResultModifier(result, currency, onlyRemainTwoOrZeroDecimal);
}


/***/ }),

/***/ 99948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error'));

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

/***/ 43666:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
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

"use strict";


if (true) {
  module.exports = __webpack_require__(43666);
} else {}


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

/***/ 65295:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NL: () => (/* binding */ useQueryClient),
/* harmony export */   aH: () => (/* binding */ QueryClientProvider)
/* harmony export */ });
/* unused harmony export defaultContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false); // If we are given a context, we will use it.
// Otherwise, if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(context, contextSharing) {
  if (context) {
    return context;
  }

  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

const useQueryClient = ({
  context
} = {}) => {
  const queryClient = react__WEBPACK_IMPORTED_MODULE_0__.useContext(getQueryClientContext(context, react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
const QueryClientProvider = ({
  client,
  children,
  context,
  contextSharing = false
}) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);

  if (false) {}

  const Context = getQueryClientContext(context, contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryClientSharingContext.Provider, {
    value: !context && contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: client
  }, children));
};


//# sourceMappingURL=QueryClientProvider.mjs.map


/***/ }),

/***/ 22487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useQueryErrorResetBoundary)
/* harmony export */ });
/* unused harmony export QueryErrorResetBoundary */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}

const QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(createValue()); // HOOK

const useQueryErrorResetBoundary = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryErrorResetBoundaryContext); // COMPONENT

const QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /*#__PURE__*/React.createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};


//# sourceMappingURL=QueryErrorResetBoundary.mjs.map


/***/ }),

/***/ 13110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JN: () => (/* binding */ useClearResetErrorBoundary),
/* harmony export */   KJ: () => (/* binding */ getHasError),
/* harmony export */   pf: () => (/* binding */ ensurePreventErrorBoundaryRetry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9599);
'use client';



const ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
const useClearResetErrorBoundary = errorResetBoundary => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
const getHasError = ({
  result,
  errorResetBoundary,
  useErrorBoundary,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .shouldThrowError */ .L)(useErrorBoundary, [result.error, query]);
};


//# sourceMappingURL=errorBoundaryUtils.mjs.map


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


/***/ }),

/***/ 29143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fb: () => (/* binding */ ensureStaleTime),
/* harmony export */   SB: () => (/* binding */ shouldSuspend),
/* harmony export */   Z$: () => (/* binding */ willFetch),
/* harmony export */   j8: () => (/* binding */ fetchOptimistic)
/* harmony export */ });
const ensureStaleTime = defaultedOptions => {
  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }
};
const willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
const shouldSuspend = (defaultedOptions, result, isRestoring) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
const fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).then(({
  data
}) => {
  defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
}).catch(error => {
  errorResetBoundary.clearReset();
  defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
});


//# sourceMappingURL=suspense.mjs.map


/***/ }),

/***/ 84233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useBaseQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41026);
/* harmony import */ var _QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65295);
/* harmony import */ var _isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87167);
/* harmony import */ var _errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13110);
/* harmony import */ var _suspense_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29143);
'use client';









function useBaseQuery(options, Observer) {
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useQueryClient */ .NL)({
    context: options.context
  });
  const isRestoring = (0,_isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useIsRestoring */ .S)();
  const errorResetBoundary = (0,_QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useQueryErrorResetBoundary */ ._)();
  const defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic'; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onSettled);
  }

  (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .ensureStaleTime */ .Fb)(defaultedOptions);
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .ensurePreventErrorBoundaryRetry */ .pf)(defaultedOptions, errorResetBoundary);
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useClearResetErrorBoundary */ .JN)(errorResetBoundary);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new Observer(queryClient, defaultedOptions));
  const result = observer.getOptimisticResult(defaultedOptions);
  (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => {
    const unsubscribe = isRestoring ? () => undefined : observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(onStoreChange)); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return unsubscribe;
  }, [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .shouldSuspend */ .SB)(defaultedOptions, result, isRestoring)) {
    throw (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .fetchOptimistic */ .j8)(defaultedOptions, observer, errorResetBoundary);
  } // Handle error boundary


  if ((0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .getHasError */ .KJ)({
    result,
    errorResetBoundary,
    useErrorBoundary: defaultedOptions.useErrorBoundary,
    query: observer.getCurrentQuery()
  })) {
    throw result.error;
  } // Handle result property usage tracking


  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}


//# sourceMappingURL=useBaseQuery.mjs.map


/***/ }),

/***/ 39333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28281);
/* harmony import */ var _useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84233);
'use client';



function useQuery(arg1, arg2, arg3) {
  const parsedOptions = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__/* .parseQueryArgs */ ._v)(arg1, arg2, arg3);
  return (0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useBaseQuery */ .r)(parsedOptions, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__/* .QueryObserver */ .z);
}


//# sourceMappingURL=useQuery.mjs.map


/***/ }),

/***/ 41026:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useSyncExternalStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9578);
'use client';


const useSyncExternalStore = use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore;


//# sourceMappingURL=useSyncExternalStore.mjs.map


/***/ }),

/***/ 9599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ shouldThrowError)
/* harmony export */ });
function shouldThrowError(_useErrorBoundary, params) {
  // Allow useErrorBoundary function to override throwing behavior on a per-error basis
  if (typeof _useErrorBoundary === 'function') {
    return _useErrorBoundary(...params);
  }

  return !!_useErrorBoundary;
}


//# sourceMappingURL=utils.mjs.map


/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=chunk.6485.js.map