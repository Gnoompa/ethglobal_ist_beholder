"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2061],{

/***/ 81178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useAllPersonas)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49588);


function useAllPersonas() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_dom_context_js__WEBPACK_IMPORTED_MODULE_1__/* .allPersonas */ .d4);
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

/***/ 40897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ RainbowBox),
/* harmony export */   v: () => (/* binding */ rainbowBorderKeyFrames)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94245);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);


const rainbowBorderKeyFrames = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .keyframes */ .F4)`
    0%, to {
        border-color: #00f8ff;
        box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    20% {
        border-color: #a4ff00;
        box-shadow: 0 5px 15px rgba(164, 255, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    40% {
        border-color: #f7275e;
        box-shadow: 0 5px 15px rgba(247, 39, 94, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    60% {
        border-color: #ffd300;
        box-shadow: 0 5px 15px rgba(255, 211, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    80% {
        border-color: #ff8a00;
        box-shadow: 0 5px 15px rgba(255, 138, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
`;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { width, height, radius = '100%', size = 2 })=>({
        root: {
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            width,
            height,
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: radius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: `${size}px solid #00f8ff`
        }
    }));
function RainbowBox(props) {
    const { classes } = useStyles({
        width: props.width,
        height: props.height,
        radius: props.radius,
        size: props.borderSize
    }, {
        props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: props.children
    });
}


/***/ }),

/***/ 32627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/UserAssetsContext.tsx
var UserAssetsContext = __webpack_require__(45258);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionList.tsx + 4 modules
var CollectionList = __webpack_require__(25199);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginVerifiedWalletStatusBar.tsx + 2 modules
var PluginVerifiedWalletStatusBar = __webpack_require__(92553);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var src_constants = __webpack_require__(18636);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var shared_base_src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/types.ts
var src_types = __webpack_require__(38827);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var site_adaptor_context = __webpack_require__(8898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/contexts/AvatarManagement/index.tsx












// TODO: PFP_TYPE.background is unused
const AvatarManagementContext = /*#__PURE__*/ (0,react.createContext)({
    isLoading: false,
    binding: undefined,
    targetAccount: '',
    setTargetAccount: noop/* default */.Z,
    pfpType: src_types/* PFP_TYPE */.n.PFP,
    proof: undefined,
    setProof: noop/* default */.Z,
    proofs: shared_base_src_constants/* EMPTY_LIST */.rP,
    setProofs: noop/* default */.Z,
    tokenInfo: undefined,
    setTokenInfo: noop/* default */.Z,
    selectedTokenInfo: undefined,
    setSelectedTokenInfo: noop/* default */.Z
});
const AvatarManagementProvider = /*#__PURE__*/ (0,react.memo)(({ children })=>{
    const identity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const [proof, setProof] = (0,react.useState)();
    const [proofs, setProofs] = (0,react.useState)(shared_base_src_constants/* EMPTY_LIST */.rP);
    const [tokenInfo, setTokenInfo] = (0,react.useState)();
    const { account } = (0,useContext/* useChainContext */.ql)();
    const [selectedAccount, setSelectedAccount] = (0,react.useState)('');
    const [selectedTokenInfo, setSelectedTokenInfo] = (0,react.useState)();
    const { data, isLoading, refetch } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'nft-avatar-state',
            identity
        ],
        enabled: !!identity,
        queryFn: async ()=>{
            if (!identity?.identifier || !site_adaptor_context/* currentNextIDPlatform */.m$) return;
            const bindings = await entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(site_adaptor_context/* currentNextIDPlatform */.m$, identity.identifier.userId.toLowerCase());
            const linkedPersona = await (0,context/* queryPersonaByProfile */.Id)(identity.identifier);
            const personaBindings = bindings.filter((x)=>x.persona === linkedPersona?.identifier.publicKeyAsHex.toLowerCase());
            const binding = (0,head/* default */.Z)(personaBindings);
            return {
                ...identity,
                publicKey: linkedPersona?.identifier.publicKeyAsHex,
                hasBinding: personaBindings.length > 0,
                binding,
                nextIdWallets: binding?.proofs.filter((x)=>x.platform === NextID_types/* NextIDPlatform */.V.Ethereum && (0,address/* isValidAddress */.At)(x.identity)),
                nextIdPersonas: binding?.proofs.filter((x)=>x.identity.toLowerCase() === identity.identifier?.userId.toLowerCase())
            };
        }
    });
    (0,react.useEffect)(()=>Messages/* MaskMessages */.q.events.ownProofChanged.on(()=>refetch()), [
        refetch
    ]);
    const contextValue = (0,react.useMemo)(()=>{
        return {
            binding: data?.binding,
            isLoading,
            pfpType: src_types/* PFP_TYPE */.n.PFP,
            targetAccount: selectedAccount || account || (0,head/* default */.Z)(data?.nextIdWallets)?.identity || '',
            setTargetAccount: setSelectedAccount,
            proof: proof ?? (0,head/* default */.Z)(data?.nextIdPersonas),
            setProof,
            proofs: proofs.length ? proofs : data?.nextIdWallets ?? shared_base_src_constants/* EMPTY_LIST */.rP,
            setProofs,
            tokenInfo,
            setTokenInfo,
            selectedTokenInfo,
            setSelectedTokenInfo
        };
    }, [
        selectedAccount,
        proof,
        proofs,
        tokenInfo,
        selectedTokenInfo,
        data,
        account,
        isLoading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarManagementContext.Provider, {
        value: contextValue,
        children: children
    });
});
AvatarManagementProvider.displayName = 'AvatarManagementProvider';
function useAvatarManagement() {
    return (0,react.useContext)(AvatarManagementContext);
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(68684);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/utils/index.ts + 1 modules
var utils = __webpack_require__(58833);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/NFTListDialog.tsx





















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        actions: {
            backgroundColor: theme.palette.maskColor.bottom,
            position: 'absolute',
            zIndex: 3,
            left: 0,
            bottom: 0,
            width: '100%',
            padding: 0,
            display: 'block',
            margin: 0,
            '&>:not(:first-of-type)': {
                margin: 0
            }
        },
        content: {
            padding: 0,
            backgroundColor: theme.palette.maskColor.bottom,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflow: 'hidden',
            display: 'flex'
        },
        addButton: {
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.primary
        },
        noWallet: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1
        }
    }));
const gridProps = {
    columns: 'repeat(auto-fill, minmax(20%, 1fr))'
};
function NFTListDialog() {
    const t = (0,locales_i18n_generated/* useAvatarTrans */.X)();
    const sharedI18N = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles();
    const { pfpType, proofs, tokenInfo, targetAccount, setTargetAccount, setSelectedTokenInfo, proof } = useAvatarManagement();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const originAccount = (0,useAccount/* useAccount */.m)();
    const { account, chainId, setChainId, setAccount } = (0,useContext/* useChainContext */.ql)();
    const [assetChainId, setAssetChainId] = (0,react.useState)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const [selectedPluginId, setSelectedPluginId] = (0,react.useState)(pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const [selectedToken, setSelectedToken] = (0,react.useState)(tokenInfo);
    const [disabled, setDisabled] = (0,react.useState)(false);
    const [pendingTokenCount, setPendingTokenCount] = (0,react.useState)(0);
    const [tokens, setTokens] = (0,react.useState)([]);
    const targetWallet = wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(targetAccount, x.address));
    (0,react.useEffect)(()=>setSelectedToken(undefined), [
        chainId
    ]);
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const onChangeWallet = (address, pluginID, chainId)=>{
        setAccount(address);
        setTargetAccount(address);
        setSelectedPluginId(pluginID);
        setChainId(chainId);
        setSelectedToken(undefined);
    };
    const onSave = (0,react.useCallback)(async ()=>{
        if (!selectedToken?.metadata?.imageURL) return;
        setDisabled(true);
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryAppNFT_PFP_Setting);
        try {
            const image = await (0,utils/* toPNG */.mr)(selectedToken.metadata.imageURL);
            if (!image) {
                showSnackbar(t.download_image_error(), {
                    variant: 'error'
                });
                return;
            }
            setSelectedTokenInfo({
                image: URL.createObjectURL(image),
                account: targetAccount,
                token: selectedToken,
                pluginID: selectedPluginId
            });
            navigate(RoutePaths.Upload);
        } catch (error) {
            showSnackbar(String(error), {
                variant: 'error'
            });
            return;
        } finally{
            setDisabled(false);
        }
    }, [
        selectedToken,
        targetAccount,
        selectedPluginId,
        navigate,
        proof,
        proofs
    ]);
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID);
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID);
    const handleAddCollectibles = (0,react.useCallback)(async ()=>{
        const results = await modals/* AddCollectiblesModal */.NB.openAndWaitForClose({
            pluginID,
            chainId: assetChainId,
            account: targetAccount
        });
        if (!results || !assetChainId) return;
        const [contract, tokenIds] = results;
        const address = contract.address;
        setPendingTokenCount((count)=>count + tokenIds.length);
        const allSettled = await Promise.allSettled(tokenIds.map(async (tokenId)=>{
            const [asset, token, isOwner] = await Promise.all([
                Hub.getNonFungibleAsset(address, tokenId, {
                    chainId: assetChainId,
                    account: targetAccount
                }),
                Web3.getNonFungibleToken(address, tokenId, undefined, {
                    chainId: assetChainId
                }),
                Web3.getNonFungibleTokenOwnership(address, tokenId, targetAccount, undefined, {
                    chainId: assetChainId
                })
            ]);
            if (!asset?.contract?.chainId || !token.chainId || token.contract?.chainId !== assetChainId) return;
            if (!isOwner) return;
            return {
                ...token,
                ...asset
            };
        }));
        setPendingTokenCount((count)=>Math.max(count - tokenIds.length, 0));
        const tokens = (0,compact/* default */.Z)(allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null));
        if (!tokens.length) return;
        setTokens((originalTokens)=>{
            return (0,uniqBy/* default */.Z)([
                ...originalTokens,
                ...tokens
            ], (x)=>`${x.contract?.address}.${x.tokenId}`);
        });
    }, [
        pluginID,
        assetChainId,
        targetAccount
    ]);
    (0,react.useEffect)(()=>{
        setSelectedPluginId(pluginID);
    }, [
        pluginID
    ]);
    const walletItems = proofs.sort((a, z)=>{
        return (0,number/* isGreaterThan */.T1)(a.last_checked_at, z.last_checked_at) ? -1 : 1;
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (account) setTargetAccount(account);
    }, [
        account
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (originAccount) setAccount(originAccount);
    }, [
        originAccount
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: account || proofs.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(UserAssetsContext/* UserAssetsProvider */.z, {
                    pluginID: selectedPluginId,
                    account: targetAccount,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionList/* CollectionList */.G, {
                        height: 479,
                        gridProps: gridProps,
                        disableWindowScroll: true,
                        selectedAsset: selectedToken,
                        additionalAssets: tokens,
                        pendingAdditionalAssetCount: pendingTokenCount,
                        onItemClick: setSelectedToken,
                        onChainChange: setAssetChainId
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.noWallet,
                    height: 479,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                            variant: "light",
                            size: 36
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 14,
                            color: (theme)=>theme.palette.maskColor.second,
                            mt: "12px",
                            children: t.no_wallet_message()
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                disableSpacing: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        sx: {
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '8px 16px',
                            justifyContent: 'space-between'
                        },
                        children: [
                            selectedPluginId === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "text",
                                size: "small",
                                className: classes.addButton,
                                disableRipple: true,
                                onClick: handleAddCollectibles,
                                children: t.add_collectible()
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                sx: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        style: {
                                            paddingRight: 4
                                        },
                                        variant: "body1",
                                        fontSize: 14,
                                        color: (theme)=>theme.palette.maskColor.second,
                                        fontWeight: "bold",
                                        children: t.powered_by()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        style: {
                                            paddingRight: 4
                                        },
                                        variant: "body1",
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: (theme)=>theme.palette.maskColor.main,
                                        children: "Simplehash"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SimpleHash, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginVerifiedWalletStatusBar/* PluginVerifiedWalletStatusBar */.V, {
                        openPopupWindow: ()=>(0,context/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.Personas, {
                                tab: constants/* PopupHomeTabType */.$J.ConnectedWallets
                            }),
                        verifiedWallets: walletItems,
                        onChange: onChangeWallet,
                        expectedAddress: targetAccount,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedChainId: chainId,
                            predicate: src_constants/* supportPluginIds */.St.includes(selectedPluginId) ? ()=>true : undefined,
                            expectedAccount: targetAccount,
                            expectedPluginID: !src_constants/* supportPluginIds */.St.includes(selectedPluginId) ? PluginID/* NetworkPluginID */.F.PLUGIN_EVM : selectedPluginId,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: onSave,
                                disabled: disabled || !selectedToken || !!targetWallet?.owner,
                                fullWidth: true,
                                children: targetWallet?.owner ? sharedI18N.coming_soon() : t.set_up_title({
                                    context: pfpType === src_types/* PFP_TYPE */.n.PFP ? 'pfp' : 'background'
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var evm_src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var Site_types = __webpack_require__(77953);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(40897);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/NFTAvatar.tsx






const SOCIAL_MEDIA_ICON_MAPPING = {
    [Site_types/* EnhanceableSite */.J.Twitter]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TwitterXRound, {
        size: 14
    }),
    [Site_types/* EnhanceableSite */.J.Localhost]: null
};
const NFTAvatar_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    indicator: {
        position: 'absolute',
        top: 2,
        right: 6,
        width: 7,
        height: 7,
        backgroundColor: '#3DC233',
        boxSizing: 'border-box',
        border: '1px solid #fff',
        borderRadius: '50%'
    }
});
function NFTAvatar(props) {
    const { avatar, hasBorder, owner = false } = props;
    const { classes } = NFTAvatar_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        position: "relative",
        children: [
            hasBorder ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox/* RainbowBox */._, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                    src: avatar
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    border: '2px solid transparent'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                    src: avatar
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                sx: {
                    position: 'absolute',
                    right: -3,
                    bottom: 0,
                    overflow: 'hidden',
                    borderRadius: '100%',
                    backgroundColor: 'white',
                    padding: '1px'
                },
                children: SOCIAL_MEDIA_ICON_MAPPING[Site_types/* EnhanceableSite */.J.Twitter]
            }),
            owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.indicator
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/NFTInfo.tsx




const NFTInfo_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {},
        tip: {
            maxWidth: 'none'
        }
    }));
function NFTInfo(props) {
    const { isNFT = false, loading = false, tooltip } = props;
    const { classes } = NFTInfo_useStyles();
    const t = (0,locales_i18n_generated/* useAvatarTrans */.X)();
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
        size: 24
    });
    const node = /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: isNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            fontWeight: 700,
            fontSize: 12,
            children: t.nft_set_success()
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            fontWeight: 700,
            fontSize: 12,
            children: t.set_nft()
        })
    });
    if (!tooltip) return node;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
        arrow: true,
        classes: {
            tooltip: classes.tip
        },
        placement: "top",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            style: {
                whiteSpace: 'nowrap'
            },
            fontSize: 12,
            children: tooltip
        }),
        children: node
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/usePersonaNFTAvatar.ts
var usePersonaNFTAvatar = __webpack_require__(25115);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/PersonaItem.tsx













const PersonaItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            margin: theme.spacing(2, 0.5),
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 16,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&.Mui-disabled': {
                pointerEvents: 'auto'
            }
        },
        userInfo: {
            marginLeft: 16,
            flex: 1
        }
    }));
const PersonaItem = /*#__PURE__*/ (0,react.memo)(function PersonaItem(props) {
    const { userId, onSelect, owner = false, proof, avatar, nickname = '', persona = '' } = props;
    const t = (0,locales_i18n_generated/* useAvatarTrans */.X)();
    const { classes } = PersonaItem_useStyles();
    const { value: nftAvatar, loading } = (0,usePersonaNFTAvatar/* usePersonaNFTAvatar */.O)(userId, entry/* Twitter */.tL.getAvatarId(avatar) ?? '', persona, src_constants/* RSS3_KEY_SITE */.q1.TWITTER);
    const handleSelect = (0,react.useCallback)(()=>{
        if (!proof || !onSelect) return;
        if (!nftAvatar) return onSelect(proof);
        const tokenDetailed = {
            tokenId: nftAvatar.tokenId,
            contract: {
                chainId: nftAvatar.chainId ?? evm_src_types/* ChainId */.a_.Mainnet,
                name: '',
                symbol: '',
                address: nftAvatar.address,
                schema: evm_src_types/* SchemaType */.XQ.ERC721,
                owner: ''
            },
            metadata: {
                chainId: nftAvatar.chainId ?? evm_src_types/* ChainId */.a_.Mainnet,
                name: '',
                symbol: ''
            },
            id: nftAvatar.address,
            chainId: nftAvatar.chainId ?? evm_src_types/* ChainId */.a_.Mainnet,
            type: specs/* TokenType */.iv.NonFungible,
            schema: evm_src_types/* SchemaType */.XQ.ERC721,
            address: nftAvatar.address
        };
        onSelect(proof, tokenDetailed);
    }, [
        nftAvatar,
        proof,
        onSelect
    ]);
    const inactive = !owner || !proof;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        className: classes.root,
        onClick: handleSelect,
        disabled: inactive,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar, {
                owner: owner,
                avatar: avatar || nftAvatar?.imageUrl,
                hasBorder: !!nftAvatar,
                platform: proof?.platform
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.userInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        fontSize: 14,
                        fontWeight: 700,
                        children: nickname || nftAvatar?.nickname
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textSecondary",
                        fontSize: 12,
                        children: [
                            "@",
                            userId
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTInfo, {
                loading: loading,
                tooltip: inactive ? t.inactive_persona_tooltip() : '',
                isNFT: !!nftAvatar
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                sx: {
                    color: (theme)=>theme.palette.maskColor.borderSecondary,
                    marginLeft: '8px'
                }
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonasFromNextID.ts
var usePersonasFromNextID = __webpack_require__(8347);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Alert/index.tsx
var Alert = __webpack_require__(41664);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaAction/PersonaAction.tsx
var PersonaAction = __webpack_require__(41253);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useAllPersonas.ts
var useAllPersonas = __webpack_require__(81178);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/PersonaPage.tsx

















function PersonaPage() {
    const t = (0,locales_i18n_generated/* useAvatarTrans */.X)();
    const [visible, setVisible] = (0,react.useState)(true);
    const dismissAlert = (0,react.useCallback)(()=>setVisible(false), []);
    const navigate = (0,dist/* useNavigate */.s0)();
    const { setProofs, setTokenInfo, setProof, isLoading, binding } = useAvatarManagement();
    const socialIdentity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const network = socialIdentity?.identifier?.network.replace('.com', '');
    const userId = socialIdentity?.identifier?.userId;
    const myPersonas = (0,useAllPersonas/* useAllPersonas */.T)();
    const currentPersonaIdentifier = (0,use_subscription.useSubscription)(context/* currentPersona */._c);
    const currentPersonaInfo = myPersonas?.find((x)=>x.identifier.rawPublicKey.toLowerCase() === currentPersonaIdentifier?.rawPublicKey.toLowerCase());
    const { data: bindingPersonas = shared_base_src_constants/* EMPTY_LIST */.rP } = (0,usePersonasFromNextID/* usePersonasFromNextID */.r)(currentPersonaIdentifier?.publicKeyAsHex ?? '', NextID_types/* NextIDPlatform */.V.NextID, false);
    const bindingProofs = (0,react.useMemo)(()=>(0,uniqBy/* default */.Z)(bindingPersonas.map((x)=>x.proofs.filter((y)=>y.is_valid && y.platform === network)).flat(), 'identity'), [
        bindingPersonas,
        network
    ]);
    const handleSelect = (0,react.useCallback)((proof, tokenInfo)=>{
        const proofs = binding?.proofs.filter((x)=>x.platform === NextID_types/* NextIDPlatform */.V.Ethereum && (0,address/* isValidAddress */.At)(x.identity));
        setProofs(proofs ?? shared_base_src_constants/* EMPTY_LIST */.rP);
        setTokenInfo(tokenInfo);
        setProof(proof);
        navigate(RoutePaths.NFTPicker);
    }, [
        navigate
    ]);
    const { value: avatar } = (0,useAsyncRetry/* default */.Z)(async ()=>(0,context/* queryPersonaAvatar */.Tk)(currentPersonaIdentifier), [
        currentPersonaIdentifier
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                sx: {
                    flex: 1,
                    height: 464,
                    padding: 2
                },
                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* Alert */.b, {
                            open: visible,
                            onClose: dismissAlert,
                            children: t.persona_hint()
                        }),
                        bindingProofs.filter((x)=>x.identity.toLowerCase() === userId?.toLowerCase()).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                                persona: binding?.persona,
                                avatar: socialIdentity.avatar ?? '',
                                owner: true,
                                nickname: socialIdentity.nickname,
                                proof: x,
                                userId: userId ?? x.identity,
                                onSelect: handleSelect
                            }, `avatar${i}`)),
                        myPersonas[0].linkedProfiles.filter((x)=>x.identifier.network === network).map((x, i)=>binding?.proofs.some((y)=>y.identity.toLowerCase() === x.identifier.userId.toLowerCase()) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                                avatar: "",
                                userId: x.identifier.userId
                            }, `persona${i}`)),
                        bindingProofs.filter((x)=>x.identity.toLowerCase() !== userId?.toLowerCase()).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                                persona: binding?.persona,
                                avatar: "",
                                userId: x.identity,
                                proof: x
                            }, i))
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                style: {
                    padding: 0,
                    margin: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAction/* PersonaAction */.D, {
                    avatar: avatar === null ? undefined : avatar,
                    currentPersona: currentPersonaInfo,
                    currentVisitingProfile: socialIdentity
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-avatar-editor@13.0.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-avatar-editor/dist/index.js
var react_avatar_editor_dist = __webpack_require__(13177);
var dist_default = /*#__PURE__*/__webpack_require__.n(react_avatar_editor_dist);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Slider/Slider.js
var Slider = __webpack_require__(78047);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/usePersonaConnectStatus.ts




function usePersonaConnectStatus() {
    const personas = (0,useAllPersonas/* useAllPersonas */.T)();
    const lastRecognized = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    return (0,react.useMemo)(()=>{
        const id = lastRecognized?.identifier;
        const currentPersona = personas.find((x)=>id && x.linkedProfiles.some((x)=>x.identifier === id));
        return {
            /** @deprecated */ action: !personas.length ? context/* createPersona */.Tt : !currentPersona ? site_adaptor_context/* connectPersona */.XD : undefined,
            currentPersona,
            connected: !!currentPersona,
            hasPersona: !!personas.length
        };
    }, [
        personas,
        lastRecognized?.identifier?.toText()
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/save/useSaveAddress.ts
var useSaveAddress = __webpack_require__(68441);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/save/useSaveToNextID.ts






function useSaveToNextID() {
    const saveAddress = (0,useSaveAddress/* useSaveAddress */.d)();
    return (0,react.useCallback)(async (info, account, persona, proof)=>{
        if (!proof?.identity || !persona) return;
        const siteType = (0,Site/* getEnhanceableSiteType */.pZ)();
        if (!siteType) return;
        const storage = entry/* Web3Storage */.xk.createNextIDStorage(proof.identity, proof.platform, persona, context/* signWithPersona */.MN);
        await storage.set(src_constants/* PLUGIN_ID */.Uu, info);
        saveAddress(info.userId, info.pluginId ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM, account, siteType);
        return info;
    }, [
        saveAddress
    ]);
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/storage/useSaveStringStorage.ts
var useSaveStringStorage = __webpack_require__(86673);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/save/useSaveAvatar.ts





function useSaveAvatar(pluginID) {
    const saveAddress = (0,useSaveAddress/* useSaveAddress */.d)(pluginID);
    return (0,react.useCallback)(async (account, network, avatar, sign)=>{
        if (avatar.userId === '$unknown') return;
        await saveAddress(avatar.userId, avatar.pluginId ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM, account, network);
        const avatarStorage = entry/* Web3Storage */.xk.createKVStorage(`${src_constants/* NFT_AVATAR_METADATA_STORAGE */.t5}_${network}`);
        avatarStorage?.set(avatar.userId, {
            ...avatar,
            sign
        });
        return avatar;
    }, [
        saveAddress
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/save/useSaveKV.ts




function useSaveKV(pluginID) {
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID);
    const saveAvatar = useSaveAvatar(pluginID);
    return (0,react.useCallback)(async (info, account, persona, proof)=>{
        const siteType = (0,Site/* getEnhanceableSiteType */.pZ)();
        if (!siteType) return;
        const sign = await Web3.signMessage('message', JSON.stringify(info), {
            account
        });
        return saveAvatar(account, siteType, info, sign);
    }, [
        Web3,
        saveAvatar
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/save/useSave.ts





function useSave(pluginID) {
    const saveToNextID = useSaveToNextID();
    const saveToStringStorage = (0,useSaveStringStorage/* useSaveStringStorage */.Z)(pluginID);
    const saveToKV = useSaveKV(pluginID);
    return (0,useAsyncFn/* default */.Z)(async (account, isBindAccount, token, data, persona, proof)=>{
        if (!token.contract?.address) return;
        const info = {
            pluginId: pluginID,
            nickname: data.nickname,
            userId: data.userId,
            imageUrl: data.imageUrl,
            avatarId: data.avatarId,
            address: token.contract?.address ?? '',
            ownerAddress: account,
            tokenId: token.tokenId || token.id,
            chainId: token.contract?.chainId ?? evm_src_types/* ChainId */.a_.Mainnet,
            schema: token.contract?.schema ?? evm_src_types/* SchemaType */.XQ.ERC721
        };
        try {
            switch(pluginID){
                case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                    {
                        if (isBindAccount) {
                            return await saveToNextID(info, account, persona, proof);
                        }
                        return await saveToStringStorage(data.userId, account, info);
                    }
                default:
                    if (!proof) return;
                    return await saveToKV(info, account, persona, proof);
            }
        } catch  {
            return;
        }
    }, [
        saveToNextID,
        saveToStringStorage,
        pluginID,
        saveToKV
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/UploadAvatarDialog.tsx


















const UploadAvatarDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        actions: {
            padding: 16,
            boxSizing: 'border-box',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            position: 'absolute',
            bottom: 0,
            width: '100%'
        },
        cancel: {
            '&:hover': {
                border: 'none',
                background: theme.palette.maskColor.bottom
            }
        },
        content: {
            margin: 0,
            padding: 16,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            textAlign: 'center'
        }
    }));
async function uploadAvatar(blob, userId) {
    try {
        const media = await entry/* Twitter */.tL.uploadMedia(blob);
        const data = await entry/* Twitter */.tL.updateProfileImage(userId, media.media_id_string);
        if (!data) {
            return;
        }
        const avatarId = entry/* Twitter */.tL.getAvatarId(data?.imageUrl ?? '');
        return {
            ...data,
            avatarId
        };
    } catch (err) {
        return;
    }
}
function UploadAvatarDialog() {
    const t = (0,locales_i18n_generated/* useAvatarTrans */.X)();
    const { classes } = UploadAvatarDialog_useStyles();
    const { proof, proofs, selectedTokenInfo } = useAvatarManagement();
    const { image, account, token, pluginID } = selectedTokenInfo ?? {};
    const isBindAccount = proofs.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.identity, selectedTokenInfo?.account));
    const { pluginID: currentPluginID } = (0,useContext/* useNetworkContext */.gK)(pluginID);
    const identifier = (0,use_subscription.useSubscription)(site_adaptor_context/* currentVisitingProfile */.Yg);
    const [editor, setEditor] = (0,react.useState)(null);
    const [scale, setScale] = (0,react.useState)(1);
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const [disabled, setDisabled] = (0,react.useState)(false);
    const { currentPersona } = usePersonaConnectStatus();
    const identity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const [, saveAvatar] = useSave(currentPluginID);
    const navigate = (0,dist/* useNavigate */.s0)();
    const onSave = (0,react.useCallback)(async ()=>{
        if (!editor || !account || !token || !currentPersona?.identifier) return;
        editor.getImageScaledToCanvas().toBlob(async (blob)=>{
            if (!blob || !identity?.identifier?.userId) return;
            setDisabled(true);
            const avatarData = await uploadAvatar(blob, identity.identifier.userId);
            if (!avatarData) {
                setDisabled(false);
                return;
            }
            const response = await saveAvatar(account, isBindAccount, token, avatarData, currentPersona.identifier, proof);
            if (!response) {
                showSnackbar(t.upload_avatar_failed_message(), {
                    variant: 'error'
                });
                setDisabled(false);
                return;
            }
            showSnackbar(t.upload_avatar_success_message(), {
                variant: 'success'
            });
            navigate(RoutePaths.Exit);
            setDisabled(false);
            await (0,esm/* delay */.gw)(500);
            location.reload();
        }, 'image/png');
    }, [
        account,
        editor,
        identifier,
        navigate,
        currentPersona,
        proof,
        isBindAccount,
        saveAvatar,
        identity
    ]);
    if (!account || !image || !token) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((dist_default()), {
                        ref: (e)=>setEditor(e),
                        image: image,
                        style: {
                            width: 'auto',
                            height: 400,
                            borderRadius: 8
                        },
                        scale: scale,
                        rotate: 0,
                        border: 50,
                        borderRadius: 300
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                        disabled: disabled,
                        max: 2,
                        min: 0.5,
                        step: 0.1,
                        defaultValue: 1,
                        onChange: (_, value)=>setScale(value),
                        "aria-label": "Scale",
                        sx: {
                            color: (theme)=>theme.palette.maskColor.primary,
                            '& .MuiSlider-thumb': {
                                width: 12,
                                height: 12,
                                backgroundColor: (theme)=>theme.palette.maskColor.primary
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.5,
                                backgroundColor: (theme)=>theme.palette.maskColor.thirdMain
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        disabled: disabled,
                        className: classes.cancel,
                        fullWidth: true,
                        variant: "outlined",
                        onClick: ()=>navigate(-1),
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        onClick: onSave,
                        disabled: disabled,
                        children: t.save()
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/Routes.tsx





var RoutePaths;
(function(RoutePaths) {
    RoutePaths["Personas"] = '/personas';
    RoutePaths["NFTPicker"] = '/picker';
    RoutePaths["Upload"] = '/upload';
    RoutePaths["Exit"] = '/exit';
})(RoutePaths || (RoutePaths = {}));
function AvatarRoutes() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: RoutePaths.Personas,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaPage, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: RoutePaths.NFTPicker,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTListDialog, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: RoutePaths.Upload,
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadAvatarDialog, {})
            }),
            /* If router is embedded inside a dialog, */ /* which should know it's time to close itself once we enter Exit */ /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: RoutePaths.Exit,
                element: null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                path: "*",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
                    replace: true,
                    to: RoutePaths.Personas
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@remix-run+router@1.7.2/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(50617);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/RouterDialog.tsx






function RouterDialog(props) {
    const t = (0,locales_i18n_generated/* useAvatarTrans */.X)();
    const { pathname } = (0,dist/* useLocation */.TH)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const title = (0,router/* matchPath */.LX)(RoutePaths.Upload, pathname) ? t.application_edit_profile_dialog_title() : t.application_dialog_title();
    const isOnBack = pathname !== RoutePaths.Personas;
    (0,react.useLayoutEffect)(()=>{
        if (pathname === RoutePaths.Exit) {
            props.onClose?.();
        }
    }, [
        pathname === RoutePaths.Exit,
        props.onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        ...props,
        title: title,
        isOnBack: isOnBack,
        onClose: ()=>{
            if (!isOnBack) {
                props.onClose?.();
                return;
            }
            navigate(-1);
        }
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/Application/NFTAvatarDialog.tsx








const NFTAvatarDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        margin: 0,
        minHeight: 564,
        padding: '0px !important',
        '::-webkit-scrollbar': {
            display: 'none'
        }
    }
});
function NFTAvatarDialog({ startPicking, ...rest }) {
    const { classes } = NFTAvatarDialog_useStyles();
    const initialEntries = (0,react.useMemo)(()=>{
        return [
            RoutePaths.Exit,
            startPicking ? RoutePaths.NFTPicker : RoutePaths.Personas
        ];
    }, [
        !startPicking
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* MemoryRouter */.VA, {
        initialEntries: initialEntries,
        initialIndex: 1,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarManagementProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RouterDialog, {
                ...rest,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                    className: classes.root,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarRoutes, {})
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/base.ts + 7 modules
var base = __webpack_require__(24242);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/index.tsx












function clickHandler() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.avatarSettingDialogEvent.sendToLocal({
        open: true
    });
}
const site = {
    ...base/* base */.u,
    GlobalInjection () {
        const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
        const { chainId } = (0,useContext/* useChainContext */.ql)();
        const [picking, setPicking] = (0,react.useState)();
        const [open, setOpen] = (0,react.useState)(false);
        (0,react.useEffect)(()=>{
            return CrossIsolationEvents/* CrossIsolationMessages */.W.events.avatarSettingDialogEvent.on(({ open, startPicking })=>{
                setOpen(open);
                setPicking(startPicking);
            });
        }, []);
        if (!open) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
            value: {
                pluginID,
                chainId
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarDialog, {
                startPicking: !!picking,
                open: open,
                onClose: ()=>setOpen(false)
            })
        });
    },
    ApplicationEntries: [
        (()=>{
            const name = {
                fallback: 'NFT PFP'
            };
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.NFTAvatar, {
                size: 36
            });
            const recommendFeature = {
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "plugin_nft_avatar_recommend_feature_description"
                }),
                backgroundGradient: 'linear-gradient(360deg, #FFECD2 -0.43%, #FCB69F 99.57%)'
            };
            return {
                RenderEntryComponent (EntryComponentProps) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                            field: name,
                            pluginID: base/* base */.u.ID
                        }),
                        icon: icon,
                        recommendFeature: recommendFeature,
                        ...EntryComponentProps,
                        onClick: ()=>{
                            EntryComponentProps.onClick ? EntryComponentProps.onClick?.(clickHandler) : clickHandler();
                            providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryAppNFT_PFP_Open);
                        },
                        tooltipHint: EntryComponentProps.tooltipHint ?? (EntryComponentProps.disabled ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                            i18nKey: "application_hint"
                        }))
                    });
                },
                appBoardSortingDefaultPriority: 3,
                name,
                icon,
                ApplicationEntryID: base/* base */.u.ID,
                nextIdRequired: true,
                recommendFeature
            };
        })()
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 68441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useSaveAddress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77953);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18636);




function useSaveAddress(pluginID) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (userId, pluginID, account, network)=>{
        const addressStorage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createKVStorage(`${_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .NFT_AVATAR_DB_NAME */ .$s}_${network ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Twitter}`);
        if (!addressStorage) return;
        const prevData = await addressStorage.get(userId).catch(()=>({}));
        await addressStorage.set(userId, {
            ...prevData,
            [pluginID]: account,
            [userId]: {
                address: account,
                networkPluginID: pluginID
            }
        });
    }, []);
}


/***/ }),

/***/ 86673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useSaveStringStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68422);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77953);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68441);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18636);





function useSaveStringStorage(pluginID) {
    const saveAddress = (0,_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSaveAddress */ .d)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (userId, address, nft)=>{
        const stringStorage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createFireflyStorage(`${_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_NAME */ .EW}-${((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getSiteType */ .sv)() || _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EnhanceableSite */ .J.Twitter).replace('.com', '')}`, address);
        try {
            await stringStorage.set?.(userId, nft);
            await saveAddress(nft.userId, pluginID, address, (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getEnhanceableSiteType */ .pZ)());
            return nft;
        } catch  {
            return;
        }
    }, [
        Storage,
        saveAddress
    ]);
}


/***/ }),

/***/ 40700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useGetAddress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18636);




function useGetAddress() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (site, userId)=>{
        if (userId === '$unknown') return;
        let storageV1, storageV2;
        try {
            const storage = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createKVStorage(`${_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .NFT_AVATAR_DB_NAME */ .$s}_${site}`).get(userId);
            storageV1 = storage ?? {};
            storageV2 = storage ?? {};
        } catch  {
            storageV1 = {};
            storageV2 = {};
        }
        if (storageV2[userId]) return storageV2[userId];
        if (storageV2[_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM]) return {
            address: storageV2[_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM],
            networkPluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM
        };
        // V1 only supports EVM
        if (storageV1.address) return storageV1;
        return;
    }, []);
}


/***/ }),

/***/ 61982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ useGetNFTAvatar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useGetAddress.ts
var useGetAddress = __webpack_require__(40700);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/storage/useGetNFTAvatarFromStorage.ts



function useGetNFTAvatarFromStorage() {
    return (0,react.useCallback)(async (userId, address)=>{
        const stringStorage = entry/* Web3Storage */.xk.createFireflyStorage(constants/* StorageKey */.Qt, address);
        return stringStorage.get?.(userId);
    }, [
        Storage
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/rss3/index.ts


function useGetNFTAvatarFromRSS3() {
    return (0,react.useCallback)(async (userId, address, key)=>{
        const rss3Storage = entry/* Web3Storage */.xk.createRSS3Storage(address);
        const result = await rss3Storage.get(key);
        if (result) return result[userId].nft;
        return (await rss3Storage.get('_nft'))?.nft;
    }, []);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/useGetNFTAvatar.ts







function useGetNFTAvatar() {
    const getNFTAvatarFromRSS = useGetNFTAvatarFromRSS3();
    const getNFTAvatarFromStorage = useGetNFTAvatarFromStorage();
    const getAddress = (0,useGetAddress/* useGetAddress */.T)();
    return (0,react.useCallback)(async (userId, network, key)=>{
        if (!userId || !network || !key) return;
        const addressStorage = await getAddress(network, userId);
        if (!addressStorage?.address) return;
        if (addressStorage?.networkPluginID && addressStorage.networkPluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return entry/* Web3Storage */.xk.createKVStorage(`${constants/* NFT_AVATAR_METADATA_STORAGE */.t5}_${network}`).get(userId);
        }
        const user = await getNFTAvatarFromStorage(userId, addressStorage.address);
        if (user) return user;
        return getNFTAvatarFromRSS(userId, addressStorage.address, key);
    }, [
        getNFTAvatarFromStorage,
        getAddress,
        Storage,
        getNFTAvatarFromRSS
    ]);
}


/***/ }),

/***/ 25115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ usePersonaNFTAvatar),
/* harmony export */   Z: () => (/* binding */ useCheckPersonaNFTAvatar)
/* harmony export */ });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7191);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77219);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68422);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66584);
}
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61982);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58833);







const cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0__/* .LRUCache */ .z({
    max: 500,
    ttl: 60 * 1000
});
function usePersonaNFTAvatar(userId, avatarId, persona, siteKey) {
    const getNFTAvatar = (0,_useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_2__/* .useGetNFTAvatar */ .U)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!userId) return;
        const key = `${userId}-${(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getSiteType */ .sv)()}`;
        if (!cache.has(key)) {
            const nftAvatar = await getNFTAvatarForCache(userId, siteKey, avatarId, persona, getNFTAvatar);
            if (nftAvatar) cache.set(key, nftAvatar);
        }
        return cache.get(key);
    }, [
        userId,
        persona,
        siteKey,
        getNFTAvatar,
        avatarId
    ]);
}
async function getNFTAvatarForCache(userId, key, avatarId, persona, fn) {
    const avatarMetaFromPersona = await (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__/* .getNFTAvatarByUserId */ .w9)(userId, avatarId, persona);
    if (avatarMetaFromPersona) return avatarMetaFromPersona;
    const siteType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getEnhanceableSiteType */ .pZ)();
    if (!siteType) return;
    const avatarMeta = await fn(userId, siteType, key);
    if (!avatarMeta) return;
    if (avatarId && avatarId !== avatarMeta.avatarId) return;
    if (avatarMeta.pluginId === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) {
        return {
            imageUrl: '',
            nickname: '',
            ...avatarMeta,
            address: avatarMeta.tokenId
        };
    }
    return {
        imageUrl: '',
        nickname: '',
        pluginId: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_EVM,
        chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ChainId */ .a_.Mainnet,
        ...avatarMeta
    };
}
function useCheckPersonaNFTAvatar(userId, avatarId, persona, siteKey) {
    const getNFTAvatar = (0,_useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_2__/* .useGetNFTAvatar */ .U)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!userId) return;
        const key = `${userId}-${(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getSiteType */ .sv)()}`;
        if (!cache.has(key)) {
            const nftAvatar = await getNFTAvatarForCache(userId, siteKey, avatarId, persona, getNFTAvatar);
            if (nftAvatar) cache.set(key, nftAvatar);
        }
        const metaData = cache.get(key);
        if (!metaData && _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .Sniffings */ .Y.is_twitter_page) {
            const nft = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Twitter */ .tL.getUserNftContainer(userId);
            if (nft) // is twitter blue
            return {
                address: nft.address,
                tokenId: nft.token_id,
                userId,
                avatarId,
                pluginId: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_EVM,
                chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ChainId */ .a_.Mainnet
            };
        }
        return metaData;
    }, [
        userId,
        persona,
        siteKey,
        getNFTAvatar,
        avatarId
    ]);
}


/***/ }),

/***/ 68684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ useAvatarTrans)
/* harmony export */ });
/* unused harmony export AvatarTrans */
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
function useAvatarTrans() /**
      * `NFT PFP`
      */ /**
      * `Edit Profile`
      */ /**
      * `Set NFT PFPs`
      */ /**
      * `Set up NFT PFP successfully`
      */ /**
      * `NFT PFP verification failed`
      */ /**
      * `Cancel`
      */ /**
      * `Save`
      */ /**
      * `Change`
      */ /**
      * `Connect your wallet`
      */ /**
      * `Sorry, failed to save NFT Avatar. Please set again.`
      */ /**
      * `Update NFT Avatar Success!`
      */ /**
      * `No collectible found.`
      */ /**
      * `Add Collectibles`
      */ /**
      * `Set NFT Avatar`
      */ /**
      * `Set NFT PFP`
      */ /**
      * `Set NFT NFT Background`
      */ /**
      * `Wallet Settings`
      */ /**
      * `Customize NFT experience by connecting social accounts. Enjoy Web2 with a whole new Web3 vibe.`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `Copied`
      */ /**
      * `No any collectible is available to preview. Please add your collectible here.`
      */ /**
      * `No NFTs found in current wallet.`
      */ /**
      * `Load failed`
      */ /**
      * `Reload`
      */ /**
      * `Socialize and show off your NFTs. People can bid, buy and view your valuable NFTs without leaving Twitter.`
      */ /**
      * `Provided by`
      */ /**
      * `Downloading image...`
      */ /**
      * `Saving...`
      */ /**
      * `Download image error`
      */ /**
      * `Please connect a wallet.`
      */ /**
      * `NFT background`
      */ /**
      * `Powered by`
      */ /**
      * `Loading...`
      */ /**
      * `No valid wallet detected. Please connect wallet or verify wallet firstly.`
      */ /**
      * `Not current account. Please switch to this account to set up NFTs Profile.`
      */ /**
      * `Do not support the current network.`
      */ /**
      * `NFT PFP`
      */ /**
      * `Retry`
      */ /**
      * `NFT Avatar Setting`
      */ /**
      * `Wallet`
      */ /**
      * `Change`
      */ /**
      * `Please input contract address`
      */ /**
      * `Please input token ID`
      */ /**
      * `web3 error`
      */ /**
      * `Cannot found asset.`
      */ /**
      * `Chain does not match.`
      */ /**
      * `The contract address is incorrect or the collection does not belong to you`
      */ /**
      * `Checking`
      */ /**
      * `Add`
      */ /**
      * `Input Contract Address`
      */ /**
      * `Token ID`
      */ /**
      * `No collectible found.`
      */ /**
      * - set_up_title$pfp: `Set NFT PFP`
    
      * - set_up_title$background: `Set NFT NFT Background`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("com.maskbook.avatar");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "com.maskbook.avatar",
            shouldUnescape: true,
            ...props
        });
}
const AvatarTrans = /**
      * `Only NFTs on Ethereum are supported to preview. We are currently<br/>working on supporting Polygon NFTs as well. <br/>Please add your collectibles here.`
      */ /**
      * `The NFT PFP feature currently supports only EVM chains. Support for other<br>chains will be added in the future.`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));


/***/ }),

/***/ 38827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ AvatarType),
/* harmony export */   n: () => (/* binding */ PFP_TYPE)
/* harmony export */ });
var PFP_TYPE;
(function(PFP_TYPE) {
    PFP_TYPE["BACKGROUND"] = 'background';
    PFP_TYPE["PFP"] = 'pfp';
})(PFP_TYPE || (PFP_TYPE = {}));
var AvatarType;
(function(AvatarType) {
    AvatarType["Square"] = 'shape-square';
    AvatarType["Clip"] = 'shape-hex';
    AvatarType["Circle"] = 'circle';
    AvatarType["Default"] = 'default';
})(AvatarType || (AvatarType = {}));


/***/ }),

/***/ 58833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T4: () => (/* binding */ formatPrice),
  RZ: () => (/* binding */ formatText),
  w9: () => (/* binding */ getNFTAvatarByUserId),
  mr: () => (/* binding */ toPNG)
});

// UNUSED EXPORTS: formatAddress, formatTokenId, getImage, sortPersonaBindings

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(4677);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/fetch.ts
function getImageBlobResized(img, width, height) {
    return new Promise((resolve)=>{
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const scale = Math.min(width / w, height / h);
        canvas.height = height;
        canvas.width = width;
        context?.setTransform(scale, 0, 0, scale, canvas.width / 2, canvas.height / 2);
        context?.drawImage(img, -w / 2, -h / 2, w, h);
        canvas.toBlob((b)=>resolve(b), 'image/png');
    });
}
/**
 * Fetch image by creating an image element.
 * It's not supporting in mv3 on background page.
 * @param url
 * @returns
 */ function fetchImageViaDOM(url) {
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img');
        const cleanup = ()=>{
            img.removeEventListener('load', onload);
            img.removeEventListener('error', reject);
        };
        const onload = async ()=>{
            try {
                resolve(await getImageBlobResized(img, 450, 450));
            } catch  {} finally// do nothing
            {
                cleanup();
            }
        };
        const onerror = ()=>{
            reject();
            cleanup();
        };
        img.decoding = 'async';
        img.crossOrigin = 'Anonymous';
        img.addEventListener('load', onload);
        img.addEventListener('error', onerror);
        img.src = url;
    });
}
/**
 * Fetch image by fetching with HTTP request.
 * This manner will constraint by browser safe policy (CORS).
 * @param url
 * @returns
 */ async function fetchImageViaHTTP(url) {
    const response = await fetch(url, {
        cache: 'force-cache',
        headers: {
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
    });
    if (response.ok) return response.blob();
    return null;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/attemptUntil.ts
var attemptUntil = __webpack_require__(92358);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/utils/index.ts







async function getImage(image) {
    const blob = await fetchBlob(image);
    return await blobToBase64(blob);
}
function blobToBase64(blob) {
    return new Promise((resolve, _)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
async function fetchImage(url) {
    const resolvedURL = (0,resolver/* resolveCrossOriginURL */.nX)(url);
    if (!resolvedURL) return fetchImageViaHTTP(url);
    return (0,attemptUntil/* attemptUntil */.C)([
        async ()=>fetchImageViaHTTP(url),
        async ()=>fetchImageViaDOM(resolvedURL),
        async ()=>fetchImageViaHTTP(resolvedURL)
    ], null);
}
async function toPNG(image) {
    const isBase64 = (0,resolver/* isLocaleResource */.yT)(image);
    const resolvedURL = (0,resolver/* resolveResourceURL */.Bl)(image);
    const imageData = await fetchImage(resolvedURL || image);
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if ((0,isNull/* default */.Z)(ctx)) throw new Error('Canvas was not supported');
        img.addEventListener('load', ()=>{
            [canvas.width, canvas.height] = [
                img.width,
                img.height
            ];
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob)=>{
                resolve(blob);
            }, 'image/png');
        });
        img.addEventListener('error', ()=>{
            reject(new Error('Could not load image'));
        });
        img.setAttribute('CrossOrigin', 'Anonymous');
        if (!isBase64 && imageData) img.src = URL.createObjectURL(imageData);
        else img.src = image;
    });
}
function formatPrice(amount, symbol) {
    const _amount = new bignumber/* BigNumber */.O(amount ?? '0');
    if (_amount.isZero() || _amount.isLessThan(0.01)) return '';
    if (_amount.isLessThan(1)) return `${_amount.toFixed(2)} ${symbol}`;
    if (_amount.isLessThan(1000)) return `${_amount.toFixed(1)} ${symbol}`;
    if (_amount.isLessThan(1000000)) return `${_amount.div(1000000).toFixed(1)}K ${symbol}`;
    return `${_amount.div(1000000).toFixed(1)}M ${symbol}`;
}
function formatText(name, tokenId) {
    return name.length > 28 ? `${name.slice(0, 28)}...` : name;
}
function formatTokenId(symbol, tokenId) {
    const name = tokenId;
    return name.length > 18 ? name.slice(0, 12) + '...' : name;
}
function formatAddress(address, size = 0) {
    if (size === 0 || size >= 20) return address;
    return `${address.slice(0, Math.max(0, 2 + size))}...${address.slice(-size)}`;
}
async function getAvatarFromNextIDStorage(persona, platform, userId, avatarId) {
    const response = await entry/* NextIDStorageProvider */.HV.getByIdentity(persona, platform, userId.toLowerCase(), constants/* PLUGIN_ID */.Uu);
    if (!avatarId && response.isOk()) return response.value;
    if (response.isOk() && response.value?.avatarId === avatarId) return response.value;
    return;
}
/**
 * find latest used persona binding
 */ const sortPersonaBindings = (a, b, userId)=>{
    if (!userId) return 0;
    const p_a = (0,head/* default */.Z)(a.proofs.filter((x)=>x.identity === userId.toLowerCase()));
    const p_b = (0,head/* default */.Z)(b.proofs.filter((x)=>x.identity === userId.toLowerCase()));
    if (!p_a || !p_b) return 0;
    if (p_a.last_checked_at > p_b.last_checked_at) return -1;
    return 1;
};
async function getNFTAvatarByUserId(userId, avatarId, persona) {
    const platform = (0,Site/* getSiteType */.sv)() === types/* EnhanceableSite */.J.Twitter ? NextID_types/* NextIDPlatform */.V.Twitter : undefined;
    if (!platform) return;
    const bindings = await entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(platform, userId);
    if (persona) {
        const binding = bindings.filter((x)=>x.persona.toLowerCase() === persona.toLowerCase())?.[0];
        if (binding) {
            return getAvatarFromNextIDStorage(binding.persona, platform, userId, avatarId);
        }
    }
    for (const binding of bindings.sort((a, b)=>sortPersonaBindings(a, b, userId))){
        const avatar = await getAvatarFromNextIDStorage(binding.persona, platform, userId, avatarId);
        if (avatar) return avatar;
    }
    return;
}


/***/ }),

/***/ 83220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useEverSeen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58778);


function useEverSeen() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [seen, setSeen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const nullRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const entry = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(seen ? nullRef : ref, {});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (entry?.isIntersecting) setSeen(true);
    }, [
        entry?.isIntersecting
    ]);
    return [
        seen,
        ref
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

/***/ 76670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ChainIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28236);



const ChainIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ChainIcon({ ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
        ...rest,
        sx: {
            fontSize: 12,
            fontWeight: 'bold',
            ...rest.sx
        },
        size: rest.size ?? 12.5
    });
});


/***/ }),

/***/ 21508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70858);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78909);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





/**
     * It's allow to add custom network with duplicate chainIds. Network could
     * be specified with this prop.
     */ const NetworkIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NetworkIcon(props) {
    const { pluginID, chainId, icon, network: expectedNetwork, ...rest } = props;
    const fallbackNetwork = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useNetwork */ .L)(pluginID, chainId);
    const network = expectedNetwork || fallbackNetwork;
    const iconUrl = network?.iconUrl || icon;
    if (iconUrl && !network?.isCustomized) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_3__/* .ImageIcon */ .X, {
        size: 20,
        ...rest,
        icon: iconUrl
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__/* .ChainIcon */ .f, {
        size: rest.size || 20,
        name: network?.name,
        color: rest.color || network?.color,
        className: rest.className
    });
});


/***/ }),

/***/ 65333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ SelectNetworkSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32024);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _NetworkIcon_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21508);






const AllButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(({ theme })=>({
        display: 'inline-block',
        padding: 0,
        borderRadius: '50%',
        fontSize: 10,
        backgroundColor: theme.palette.maskColor.highlight,
        '&:hover': {
            backgroundColor: theme.palette.maskColor.highlight,
            boxShadow: 'none'
        }
    }));
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()({
    sidebar: {
        flexShrink: 0,
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    networkButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        width: 24,
        minWidth: 24,
        height: 24,
        maxWidth: 24,
        padding: 0
    },
    indicator: {
        position: 'absolute',
        right: -3,
        bottom: -1
    }
});
const SelectNetworkSidebar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function SelectNetworkSidebar({ networks, chainId, pluginID, onChainChange, hideAllButton, className, ...rest }) {
    const { classes, cx } = useStyles();
    // Do not translate the "All" button
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: cx(classes.sidebar, className),
        ...rest,
        children: [
            networks.length > 1 && !hideAllButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AllButton, {
                className: classes.networkButton,
                onClick: ()=>onChainChange?.(undefined),
                children: [
                    "All",
                    !chainId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.BorderedSuccess, {
                        className: classes.indicator,
                        size: 12
                    }) : null
                ]
            }) : null,
            networks.map((x)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    variant: "text",
                    className: classes.networkButton,
                    disableRipple: true,
                    onClick: ()=>onChainChange?.(x.chainId),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NetworkIcon_index_js__WEBPACK_IMPORTED_MODULE_6__/* .NetworkIcon */ .d, {
                            pluginID: pluginID,
                            chainId: x.chainId,
                            size: 24,
                            network: x
                        }),
                        chainId === x.chainId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.BorderedSuccess, {
                            className: classes.indicator,
                            size: 12
                        }) : null
                    ]
                }, x.chainId))
        ]
    });
});


/***/ }),

/***/ 8347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ usePersonasFromNextID)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);




/**
 * Get all personas bound with the given identity from NextID service
 */ function usePersonasFromNextID(userId, platform, exact) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'personas',
            userId
        ],
        enabled: Boolean(platform && userId),
        queryFn: async ()=>{
            if (!platform || !userId) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
            const res = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryAllExistedBindingsByPlatform(platform, userId, exact);
            return res ? res : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.ownProofChanged.on(()=>result.refetch), [
        result.refetch
    ]);
    return result;
}


/***/ }),

/***/ 24500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ RadioIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);



const RadioIndicator = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function RadioIndicator({ checked, unCheckedButtonColor, checkedButtonColor, ...rest }) {
    return checked ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.RadioButtonChecked, {
        ...rest,
        color: checkedButtonColor
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.RadioButtonUnChecked, {
        ...rest,
        color: unCheckedButtonColor
    });
});


/***/ }),

/***/ 60625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useDetectOverflow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useDetectOverflow() {
    const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
        if (node) setOverflow(node.offsetWidth !== node.scrollWidth);
    }, []);
    return [
        overflow,
        ref
    ];
}


/***/ }),

/***/ 70858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=chunk.2061.js.map