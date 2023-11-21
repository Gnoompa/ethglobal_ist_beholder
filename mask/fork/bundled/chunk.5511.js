"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5511],{

/***/ 8054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useTokenParams),
/* harmony export */   W: () => (/* binding */ useNonFungibleTokenParams)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58807);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65327);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43270);




function useTokenParams() {
    const [params, setParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__/* .useSearchParams */ .lr)();
    const defaultChainId = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .x)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    const rawChainId = params.get('chainId');
    const chainId = rawChainId ? Number.parseInt(rawChainId, 10) : defaultChainId;
    const rawAddress = params.get('address');
    const address = rawAddress || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .getNativeTokenAddress */ .rG)(chainId);
    return {
        chainId,
        address,
        rawChainId,
        rawAddress,
        params,
        setParams
    };
}
/**
 * No fallback for non-fungible token
 */ function useNonFungibleTokenParams() {
    const [params, setParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__/* .useSearchParams */ .lr)();
    const defaultChainId = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .x)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    const rawChainId = params.get('nft:chainId');
    const chainId = rawChainId ? Number.parseInt(rawChainId, 10) : defaultChainId;
    const address = params.get('nft:address');
    const tokenId = params.get('nft:tokenId');
    return {
        chainId,
        address,
        tokenId,
        params,
        setParams
    };
}


/***/ }),

/***/ 57074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SwapPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/trader/useAllProviderTradeContext.ts + 34 modules
var useAllProviderTradeContext = __webpack_require__(6780);
// EXTERNAL MODULE: ./packages/public-api/src/web.ts
var web = __webpack_require__(64455);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/SharedContextProvider.tsx
var SharedContextProvider = __webpack_require__(18956);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/SelectProviderModal/index.tsx + 4 modules
var modals_SelectProviderModal = __webpack_require__(18049);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/WalletRiskWarningModal/index.tsx + 1 modules
var modals_WalletRiskWarningModal = __webpack_require__(95265);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ConnectWalletModal/index.tsx
var modals_ConnectWalletModal = __webpack_require__(86457);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/SelectFungibleTokenModal/index.tsx + 1 modules
var modals_SelectFungibleTokenModal = __webpack_require__(2947);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/SelectAdvancedSettingsDialog/index.tsx + 15 modules
var SelectAdvancedSettingsDialog = __webpack_require__(19612);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals_modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/index.tsx

























const Modals = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function Modals(props) {
    return /*#__PURE__*/ _jsxs(RootWeb3ContextProvider, {
        children: [
            /*#__PURE__*/ _jsx(ConnectWalletModal, {
                ref: modals.ConnectWalletModal.register
            }),
            /*#__PURE__*/ _jsx(WalletConnectQRCodeModal, {
                ref: modals.WalletConnectQRCodeModal.register
            }),
            /*#__PURE__*/ _jsx(ConfirmDialogComponent, {
                ref: modals.ConfirmDialog.register
            }),
            /*#__PURE__*/ _jsx(SelectProviderModal, {
                createWallet: props.createWallet,
                ref: modals.SelectProviderModal.register
            }),
            /*#__PURE__*/ _jsx(WalletStatusModal, {
                ref: modals.WalletStatusModal.register
            }),
            /*#__PURE__*/ _jsx(WalletRiskWarningModal, {
                ref: modals.WalletRiskWarningModal.register
            }),
            /*#__PURE__*/ _jsx(LeavePageConfirmModal, {
                ref: modals.LeavePageConfirmModal.register
            }),
            /*#__PURE__*/ _jsx(ApplicationBoardModal, {
                ref: modals.ApplicationBoardModal.register
            }),
            /*#__PURE__*/ _jsx(GasSettingModal, {
                ref: modals.GasSettingModal.register
            }),
            /*#__PURE__*/ _jsx(TransactionSnackbarModal, {
                pluginID: NetworkPluginID.PLUGIN_EVM,
                ref: modals.TransactionSnackbar.register
            }),
            /*#__PURE__*/ _jsx(TransactionConfirmModal, {
                ref: modals.TransactionConfirmModal.register
            }),
            /*#__PURE__*/ _jsx(ConfirmModal, {
                ref: modals.ConfirmModal.register
            }),
            /*#__PURE__*/ _jsx(SelectNonFungibleContractModal, {
                ref: modals.SelectNonFungibleContractModal.register
            }),
            /*#__PURE__*/ _jsx(SelectFungibleTokenModal, {
                ref: modals.SelectFungibleTokenModal.register
            }),
            /*#__PURE__*/ _jsx(SelectGasSettingsModal, {
                ref: modals.SelectGasSettingsModal.register
            }),
            /*#__PURE__*/ _jsx(AddCollectiblesModal, {
                ref: modals.AddCollectiblesModal.register
            }),
            /*#__PURE__*/ _jsx(PersonaSelectPanelModal, {
                ref: modals.PersonaSelectPanelModal.register
            }),
            /*#__PURE__*/ _jsx(ApplicationBoardSettingsModal, {
                ref: modals.ApplicationBoardSettingsModal.register
            }),
            /*#__PURE__*/ _jsx(ShareSelectNetworkModal, {
                ref: modals.ShareSelectNetworkModal.register
            })
        ]
    });
})));
const SwapPageModals = /*#__PURE__*/ (0,react.memo)(function SwapPageModals() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(modals_ConnectWalletModal/* ConnectWalletModal */.B, {
                ref: modals_modals/* ConnectWalletModal */.Bp.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(modals_SelectProviderModal/* SelectProviderModal */.g, {
                createWallet: noop/* default */.Z,
                ref: modals_modals/* SelectProviderModal */.ge.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(modals_WalletRiskWarningModal/* WalletRiskWarningModal */.L, {
                ref: modals_modals/* WalletRiskWarningModal */.L5.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(modals_SelectFungibleTokenModal/* SelectFungibleTokenModal */.g, {
                ref: modals_modals/* SelectFungibleTokenModal */.gw.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAdvancedSettingsDialog/* SelectGasSettingsModal */.e, {
                ref: modals_modals/* SelectGasSettingsModal */.eq.register
            })
        ]
    });
});
// Common modals



// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/applyToDOM.ts
var applyToDOM = __webpack_require__(79836);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(92935);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(39907);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
;// CONCATENATED MODULE: ./packages/mask/popups/components/NetworkSelector/index.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            minWidth: 140,
            backgroundColor: theme.palette.primary.main,
            padding: '4px 12px 4px 4px',
            minHeight: 28,
            borderRadius: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        title: {
            color: '#ffffff',
            fontSize: 12,
            lineHeight: '16px',
            marginLeft: 4
        },
        menu: {
            maxHeight: 466,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const NetworkSelector = /*#__PURE__*/ (0,react.memo)(()=>{
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const traderDefinition = (0,useActivatedPlugin/* useActivatedPlugin */.R)(PluginID/* PluginID */.P.Trader, 'any');
    const chainIdList = traderDefinition?.enableRequirement.web3?.[PluginID/* NetworkPluginID */.F.PLUGIN_EVM]?.supportedChainIds ?? [];
    const actualNetworks = (0,react.useMemo)(()=>networks.filter((x)=>chainIdList.includes(x.chainId)), [
        networks,
        chainIdList
    ]);
    const onChainChange = (0,react.useCallback)(async (network)=>{
        await Network?.switchNetwork(network.ID);
        await entry/* Web3 */.Bv.switchChain?.(network.chainId);
    }, [
        Network,
        entry/* Web3 */.Bv
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelectorUI, {
        currentNetwork: actualNetworks.find((x)=>x.chainId === chainId) ?? (0,head/* default */.Z)(actualNetworks),
        onChainChange: onChainChange,
        networks: actualNetworks
    });
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react.memo)(({ currentNetwork, onChainChange, networks })=>{
    const { classes } = useStyles();
    const [menu, openMenu] = (0,useMenu/* useMenuConfig */._)(networks.map((network)=>{
        const chainId = network.chainId;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>onChainChange(network),
            selected: chainId === currentNetwork?.chainId,
            children: [
                network.iconUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                    size: 20,
                    icon: network.iconUrl,
                    name: network.name
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    chainId: network.chainId,
                    size: 20,
                    network: network
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId);
    }) ?? [], {
        classes: {
            paper: classes.menu
        }
    });
    if (!currentNetwork) return;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            currentNetwork.iconUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                size: 20,
                                icon: currentNetwork.iconUrl,
                                name: currentNetwork.name
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                                chainId: currentNetwork.chainId,
                                size: 20,
                                network: currentNetwork
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: currentNetwork?.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownRound, {
                        size: 16,
                        color: "#fff"
                    })
                ]
            }),
            menu
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTokenParams.ts
var useTokenParams = __webpack_require__(8054);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/token.ts
var token = __webpack_require__(48289);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/Trader.tsx + 34 modules
var Trader = __webpack_require__(57310);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/utils/shareToTwitterAsPopup.ts
var shareToTwitterAsPopup = __webpack_require__(71810);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Swap/SwapBox/index.tsx








function SwapBox() {
    const location = (0,dist/* useLocation */.TH)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const params = new URLSearchParams(location.search);
    const address = params.get('contract_address');
    const name = params.get('name');
    const symbol = params.get('symbol');
    const decimals = params.get('decimals');
    const fallbackToken = (0,react.useMemo)(()=>{
        return (0,token/* createERC20Token */.wY)(chainId, address ?? '', name ? name : undefined, symbol ? symbol : undefined, Number.parseInt(decimals ?? '0', 10));
    }, [
        chainId,
        address,
        name,
        symbol,
        decimals
    ]);
    const { data: coin } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address ?? '', fallbackToken, {
        chainId
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
        share: shareToTwitterAsPopup/* shareToTwitterAsPopup */.I,
        defaultInputCoin: coin,
        chainId: chainId
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Swap/index.tsx












const Swap_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        page: {
            minHeight: '100vh',
            maxWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.maskColor.bg
        },
        container: {
            width: 800,
            backgroundColor: theme.palette.background.paper,
            marginLeft: 'auto',
            marginRight: 'auto',
            minHeight: 720,
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            padding: '32px 0'
        },
        header: {
            width: 598,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '22px 16px'
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: theme.palette.maskColor.second
        },
        main: {
            width: 598,
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
function SwapPage() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = Swap_useStyles();
    const { chainId } = (0,useTokenParams/* useTokenParams */.S)();
    (0,applyToDOM/* applyMaskColorVars */.D)(document.body, web/* Appearance */.um.light);
    const chainContextValue = (0,react.useMemo)(()=>({
            chainId
        }), [
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SharedContextProvider/* SharedContextProvider */.Q, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* ChainContextProvider */.on, {
                value: chainContextValue,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.page,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                                className: classes.header,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "h1",
                                        className: classes.title,
                                        children: t.plugin_trader_swap()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                                className: classes.main,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext */.TX.Provider, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapBox, {})
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapPageModals, {})
        ]
    });
}


/***/ }),

/***/ 94685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: () => (/* binding */ useIsMinimalMode),
/* harmony export */   JR: () => (/* binding */ useActivatedPluginsSiteAdaptor),
/* harmony export */   o7: () => (/* binding */ useActivatedPluginSiteAdaptor)
/* harmony export */ });
/* unused harmony export startPluginSiteAdaptor */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85094);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30898);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88547);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70771);







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
        const def = getPluginDefine(id);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wX: () => (/* binding */ getPluginRPCGenerator),
/* harmony export */   x8: () => (/* binding */ getPluginRPC)
/* harmony export */ });
/* unused harmony exports __workaround__replaceIsBackground__, startPluginRPC, startPluginGeneratorRPC */
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

/***/ 71810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ shareToTwitterAsPopup)
/* harmony export */ });
/* harmony import */ var _bom_open_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);


function shareToTwitterAsPopup(message) {
    const url = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://twitter.com/intent/tweet', {
        text: message
    });
    const width = 700;
    const height = 520;
    const openedWindow = (0,_bom_open_window_js__WEBPACK_IMPORTED_MODULE_1__/* .openWindow */ .x)(url, 'share', {
        width,
        height,
        screenX: window.screenX + (window.innerWidth - width) / 2,
        screenY: window.screenY + (window.innerHeight - height) / 2,
        opener: true,
        referrer: true,
        behaviors: {
            toolbar: true,
            status: true,
            resizable: true,
            scrollbars: true
        }
    });
    if (openedWindow === null) {
        location.assign(url);
    }
}


/***/ }),

/***/ 92935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useMenuConfig)
/* harmony export */ });
/* unused harmony export useMenu */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8737);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25877);




/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        menu: {
            // TODO: replace hard code to theme
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 4px 30px rgba(0, 0, 0, 0.1)'
        }
    }));
function useMenuConfig(elements, config, ref) {
    const { classes } = useStyles();
    const { anchorSibling = false, useShadowRoot = true, ...menuProps } = config;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootMenu */ .d : _mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...menuProps,
            PaperProps: menuProps?.PaperProps,
            classes: {
                paper: classes.menu,
                ...menuProps.classes
            },
            MenuListProps: menuProps?.MenuListProps,
            open,
            anchorEl,
            ref,
            onClose: close,
            onClick: close,
            anchorOrigin: menuProps?.anchorOrigin,
            transformOrigin: menuProps?.transformOrigin,
            disableScrollLock: true
        }, elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element)),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? element.nextElementSibling ?? undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
            setOpen(false);
            setAnchorEl(null);
        }, []),
        open
    ];
}


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


/***/ })

}]);
//# sourceMappingURL=chunk.5511.js.map