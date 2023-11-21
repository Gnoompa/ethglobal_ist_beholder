"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2435],{

/***/ 36146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_AddToken)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SelectNetworkSidebar/index.tsx
var SelectNetworkSidebar = __webpack_require__(65333);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenList/index.tsx + 8 modules
var FungibleTokenList = __webpack_require__(14584);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenList/type.ts
var type = __webpack_require__(45889);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAddressType.ts
var useAddressType = __webpack_require__(29063);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQueries.mjs
var useQueries = __webpack_require__(31369);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectibleItem.tsx
var CollectibleItem = __webpack_require__(68156);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AddCollectibles/index.tsx


















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        form: {
            height: 564,
            boxSizing: 'border-box',
            display: 'flex',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.maskColor.bottom,
            flexDirection: 'column',
            overflow: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        main: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            // Space for toolbar
            paddingBottom: theme.spacing(9),
            boxSizing: 'border-box'
        },
        grid: {
            width: '100%',
            display: 'grid',
            overflow: 'auto',
            gridGap: theme.spacing(2),
            padding: theme.spacing(2, 0),
            paddingRight: theme.spacing(1),
            boxSizing: 'border-box',
            marginBottom: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        notMine: {
            opacity: 0.5,
            cursor: 'not-allowed',
            '*': {
                cursor: 'not-allowed'
            }
        },
        error: {
            backgroundColor: theme.palette.maskColor.bottom,
            fontSize: 14,
            color: theme.palette.maskColor.danger
        },
        toolbar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: theme.spacing(9),
            padding: theme.spacing(0, 2),
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: theme.spacing(0, 0, 1.5, 1.5)
        },
        input: {
            fontSize: 12
        }
    }));
/**
     * Specified account.
     * For example, in PFP, we can add collectibles from verified wallets if no wallet connected.
     */ function isValidTokenIds(rawIds) {
    const containsInvalidId = rawIds.split(',').some((v)=>{
        const trimmed = v.trim();
        if (!trimmed) return false;
        const id = Number.parseInt(trimmed, 10);
        return Number.isNaN(id) || id <= 0;
    });
    return !containsInvalidId;
}
const AddCollectibles = /*#__PURE__*/ (0,react.memo)(function AddCollectibles(props) {
    const { pluginID, chainId: defaultChainId, account: defaultAccount, onAdd } = props;
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: defaultChainId
    });
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const theme = (0,useTheme/* default */.Z)();
    const walletAccount = (0,useAccount/* useAccount */.m)();
    const account = defaultAccount || walletAccount;
    const { classes } = useStyles(undefined, {
        props
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    const { control, watch, handleSubmit, resetField, formState: { errors, isValidating } } = (0,index_esm/* useForm */.cI)({
        mode: 'all',
        defaultValues: {
            address: '',
            tokenIds: ''
        }
    });
    const watchedTokenIds = watch('tokenIds');
    const tokenIds = (0,react.useMemo)(()=>(0,uniq/* default */.Z)((0,compact/* default */.Z)(watchedTokenIds.split(',').map((id)=>id.trim()))), [
        watchedTokenIds
    ]);
    const address = watch('address');
    const hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        chainId
    });
    const connection = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        chainId
    });
    const { value: addressType, loading: loadingAddressType } = (0,useAddressType/* useAddressType */.t)(pluginID, Others.isValidAddress(address) ? address : '', {
        chainId
    });
    const validationMsgForAddress = (0,react.useMemo)(()=>{
        if (!address) return '';
        if (!Others.isValidAddress?.(address ?? '') || addressType !== types/* AddressType */.DL.Contract && !loadingAddressType) return t.collectible_contract_invalid();
        return '';
    }, [
        address,
        addressType,
        loadingAddressType
    ]);
    const { data: contract, isLoading: isLoadingContract, isError, refetch } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'nft-contract',
            pluginID,
            chainId,
            address
        ],
        queryFn: ()=>connection.getNonFungibleTokenContract(address, undefined, {
                chainId
            })
    });
    const isValid = (0,react.useMemo)(()=>{
        return Boolean(isValidTokenIds(watchedTokenIds) && !validationMsgForAddress && address && tokenIds.length > 0);
    }, [
        watchedTokenIds,
        validationMsgForAddress
    ]);
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        chainId
    });
    const assetsQueries = (0,useQueries/* useQueries */.h)({
        queries: tokenIds.map((tokenId)=>({
                enabled: isValid,
                queryKey: [
                    'nft-asset',
                    account,
                    pluginID,
                    chainId,
                    address,
                    tokenId
                ],
                queryFn: async ()=>{
                    try {
                        return await hub.getNonFungibleAsset(address, tokenId, {
                            chainId,
                            account
                        });
                    } catch (err) {
                        const token = await Web3.getNonFungibleToken(address, tokenId);
                        return {
                            ...token,
                            owner: {
                                address: token.ownerId
                            }
                        };
                    }
                }
            }))
    });
    const loadingAssets = assetsQueries.every((x)=>x.isLoading);
    const allFailed = assetsQueries.every((x)=>x.failureReason);
    const noResults = assetsQueries.every((x)=>!x.isLoading && !x.data) || !isValid || allFailed;
    const someNotMine = assetsQueries.some((x)=>x.data ? !(0,isSameAddress/* isSameAddress */.W)(x.data.owner?.address, account) : false);
    const handleFormSubmit = (0,react.useCallback)((event)=>{
        handleSubmit(()=>{})(event);
    }, [
        handleSubmit
    ]);
    const [selectedTokenIdsMap, setSelectedTokenIdsMap] = (0,react.useState)({});
    const selectedTokenIds = selectedTokenIdsMap[(0,formatter/* formatEthereumAddress */.j8)(address)] || constants/* EMPTY_LIST */.rP;
    const toggleSelect = (0,react.useCallback)((asset)=>{
        setSelectedTokenIdsMap((idsMap)=>{
            const ids = idsMap[(0,formatter/* formatEthereumAddress */.j8)(address)] ?? [];
            const newIds = ids.includes(asset.tokenId) ? ids.filter((x)=>x !== asset.tokenId) : [
                ...ids,
                asset.tokenId
            ];
            return {
                ...idsMap,
                [(0,formatter/* formatEthereumAddress */.j8)(address)]: newIds
            };
        });
    }, [
        address
    ]);
    const handleAdd = (0,react.useCallback)(()=>{
        if (!contract) return;
        onAdd([
            contract,
            selectedTokenIds
        ]);
    }, [
        contract,
        selectedTokenIds,
        onAdd
    ]);
    const disabled = !selectedTokenIds.length || isLoadingContract || isValidating || props.disabled;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: classes.form,
        onSubmit: handleFormSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                control: control,
                name: "address",
                render: ({ field })=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                ...field,
                                autoFocus: true,
                                placeholder: t.add_collectibles_address_placeholder(),
                                error: !!(errors.address || validationMsgForAddress),
                                InputProps: {
                                    spellCheck: false,
                                    endAdornment: field.value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                                        size: 18,
                                        onClick: ()=>resetField('address'),
                                        color: validationMsgForAddress ? theme.palette.maskColor.danger : undefined
                                    }) : null,
                                    classes: {
                                        input: classes.input
                                    }
                                }
                            }),
                            validationMsgForAddress ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.error,
                                mt: 0.5,
                                children: validationMsgForAddress
                            }) : null
                        ]
                    });
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                mt: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                    control: control,
                    name: "tokenIds",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                    ...field,
                                    placeholder: t.add_collectibles_token_id_placeholder(),
                                    error: !!errors.tokenIds,
                                    InputProps: {
                                        spellCheck: false,
                                        endAdornment: field.value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                                            size: 18,
                                            onClick: ()=>resetField('tokenIds'),
                                            color: errors.tokenIds ? theme.palette.maskColor.danger : undefined
                                        }) : null,
                                        classes: {
                                            input: classes.input
                                        }
                                    }
                                }),
                                errors.tokenIds ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.error,
                                    mt: 0.5,
                                    children: errors.tokenIds?.message
                                }) : null
                            ]
                        })
                })
            }),
            someNotMine ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.error,
                mt: 1,
                children: t.collection_not_belong_to_you()
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.main,
                children: !address || tokenIds.length === 0 ? null : (isLoadingContract || loadingAssets) && isValid && !allFailed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
                    flexGrow: 1
                }) : isError ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
                    flexGrow: 1,
                    onRetry: refetch
                }) : noResults ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                    height: "100%",
                    children: t.no_results()
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.grid,
                    children: assetsQueries.filter((x)=>x.data).map(({ data: asset, isLoading }, i)=>{
                        if (isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItemSkeleton */.X, {}, i);
                        if (!asset) return null;
                        const isMine = (0,isSameAddress/* isSameAddress */.W)(account, asset.owner?.address);
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItem */.G, {
                            className: isMine ? undefined : classes.notMine,
                            asset: asset,
                            pluginID: pluginID,
                            disableName: true,
                            actionLabel: t.send(),
                            disableAction: true,
                            onItemClick: isMine ? toggleSelect : undefined,
                            isSelected: selectedTokenIds.includes(asset.tokenId),
                            showUnCheckedIndicator: true
                        }, `${asset.chainId}.${asset.address}.${asset.tokenId}`);
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                className: classes.toolbar,
                direction: "row",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                    fullWidth: true,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Avatar, {
                        size: 18
                    }),
                    disabled: disabled,
                    onClick: handleAdd,
                    children: t.add_collectibles()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRowSize.ts
var useRowSize = __webpack_require__(88020);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBlockedFungibleTokens.ts
var useBlockedFungibleTokens = __webpack_require__(87085);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var Wallet_type = __webpack_require__(85103);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/AddToken/index.tsx

















const AddToken_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { searchError })=>({
        content: {
            flex: 1,
            padding: '0 0 0 16px',
            display: 'flex',
            overflow: 'hidden'
        },
        channel: {
            flex: 1,
            paddingTop: theme.spacing(2),
            '& > div': {
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }
        },
        listBox: {
            flex: 1,
            marginTop: searchError ? 18 : 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        wrapper: {
            padding: theme.spacing(0, 2, 0, 1.5)
        },
        input: {
            fontSize: 12,
            background: '#F7F9FA'
        },
        tabs: {
            flex: 'none!important',
            paddingTop: '0px!important',
            paddingLeft: 16,
            paddingRight: 16
        },
        panel: {
            padding: 0,
            background: theme.palette.maskColor.bottom,
            flex: 1,
            overflow: 'auto'
        },
        main: {
            flexGrow: 1,
            height: '100%',
            boxSizing: 'border-box',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        searchInput: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1.5),
            paddingBottom: theme.spacing(2)
        },
        sidebar: {
            height: 432,
            paddingTop: theme.spacing(2)
        },
        grid: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(40%, 1fr))'
        },
        form: {
            padding: theme.spacing(2, 2, 0, 1.5),
            height: 490
        },
        nftContent: {
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
var TabType;
(function(TabType) {
    TabType["Tokens"] = "Tokens";
    TabType["Collectibles"] = "Collectibles";
})(TabType || (TabType = {}));
const AddToken = /*#__PURE__*/ (0,react.memo)(function AddToken() {
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const blackList = (0,useBlockedFungibleTokens/* useBlockedFungibleTokens */.v)();
    const rowSize = (0,useRowSize/* useRowSize */.g)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { chainId: defaultChainId, assetType } = (0,dist/* useParams */.UO)();
    const { account } = (0,useContext/* useChainContext */.ql)();
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)(assetType === TabType.Collectibles ? TabType.Collectibles : TabType.Tokens, TabType.Tokens, TabType.Collectibles);
    const [searchError, setSearchError] = (0,react.useState)(false);
    const { classes } = AddToken_useStyles({
        searchError
    });
    const allNetworks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, true);
    const supportedChains = allNetworks.map((x)=>x.chainId);
    const [chainId, setChainId] = (0,react.useState)(defaultChainId && supportedChains.includes(Number.parseInt(defaultChainId, 10)) ? Number.parseInt(defaultChainId, 10) : types/* ChainId */.a_.Mainnet);
    (0,useTitle/* useTitle */.Z)(t.add_assets());
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [{ loading: loadingAddCustomNFTs }, addCustomNFTs] = (0,useAsyncFn/* default */.Z)(async (result)=>{
        const [contract, tokenIds] = result;
        await Token?.addNonFungibleTokens?.(account, contract, tokenIds);
        for await (const tokenId of tokenIds){
            await Token?.addToken?.(account, {
                id: `${contract.chainId}.${contract.address}.${tokenId}`,
                chainId: contract.chainId,
                tokenId,
                type: specs/* TokenType */.iv.NonFungible,
                schema: contract.schema,
                address: contract.address
            });
        }
        showSnackbar(t.popups_wallet_collectible_added_successfully(), {
            variant: 'success'
        });
        navigate(`${Routes/* PopupRoutes */.mZ.Wallet}?tab=${Wallet_type/* WalletAssetTabs */.T9.Collectibles}`, {
            replace: true
        });
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
        value: currentTab,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {
                tabList: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                    onChange: onChange,
                    "aria-label": "persona-tabs",
                    classes: {
                        root: classes.tabs
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_token(),
                            value: TabType.Tokens
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: t.popups_wallet_collectible(),
                            value: TabType.Collectibles
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNetworkSidebar/* SelectNetworkSidebar */.C, {
                        className: classes.sidebar,
                        hideAllButton: true,
                        chainId: chainId,
                        onChainChange: (chainId)=>setChainId(chainId ?? types/* ChainId */.a_.Mainnet),
                        networks: allNetworks,
                        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.main,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.panel,
                                value: TabType.Tokens,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenList/* FungibleTokenList */.C, {
                                    chainId: chainId,
                                    isHiddenChainIcon: false,
                                    mode: type/* TokenListMode */.K.Manage,
                                    classes: {
                                        channel: classes.channel,
                                        listBox: classes.listBox,
                                        searchInput: classes.searchInput
                                    },
                                    onSearchError: setSearchError,
                                    blacklist: blackList.map((x)=>x.address),
                                    FixedSizeListProps: {
                                        height: 444,
                                        itemSize: rowSize + 16,
                                        className: classes.wrapper
                                    },
                                    SearchTextFieldProps: {
                                        className: classes.input
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.panel,
                                value: TabType.Collectibles,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectibles, {
                                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                                    chainId: chainId,
                                    onAdd: addCustomNFTs,
                                    disabled: loadingAddCustomNFTs,
                                    classes: {
                                        grid: classes.grid,
                                        form: classes.form,
                                        main: classes.nftContent
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Wallet_AddToken = (AddToken);


/***/ }),

/***/ 88020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useRowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useRowSize() {
    const [rowSize, setRowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(54);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        try {
            const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
            setRowSize(fontSize * 4);
        } catch  {
            setRowSize(60);
        }
    }, []);
    return rowSize;
}


/***/ }),

/***/ 87792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 14584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ FungibleTokenList)
});

// UNUSED EXPORTS: TokenListMode

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-window@1.8.9_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(77288);
// EXTERNAL MODULE: ./node_modules/.pnpm/fuse.js@6.6.2_patch_hash=b2o4qvyfvxmpo7347sqko6h22a/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(32180);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/theme/src/Components/SearchableList/EmptyResult.tsx



function EmptyResult() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                size: 36
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: "No results"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/theme/src/Components/SearchableList/SearchableList.tsx










/** The list data should be render */ /** The identity of list data item for remove duplicates item */ /** The key of list item for search */ /** Renderer for each list item */ /** The props to react-window */ /** The callback when clicked someone list item */ /** The hook when search */ /** Props for search box */ /** Show search bar */ /**
 * This component is used to provide a searchable list in Mask design.
 *
 * @example
 * interface IListDate { name: string }
 * const ListItem = ({ name }: IListDate) => <div>{ name }</div>
 * const onSelect = () => {}
 *
 * return (
 *      <SearchableList<IListDate>
 *           onSelect={onSelect}
 *           data={ListData}
 *           searchKey={['name']}
 *           itemRender={ListItem}
 *      />
 * )
 */ function SearchableList({ itemKey, data, onSelect, onSearch, disableSearch, searchKey, itemRender, FixedSizeListProps = {}, SearchFieldProps, ...props }) {
    const [keyword, setKeyword] = (0,react.useState)('');
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { height = 300, itemSize, ...rest } = FixedSizeListProps;
    const { InputProps, ...textFieldPropsRest } = SearchFieldProps ?? {};
    // #region create searched data
    const readyToRenderData = (0,react.useMemo)(()=>{
        if (!keyword) return data;
        const fuse = new fuse_esm/* default */.Z(data, {
            shouldSort: true,
            isCaseSensitive: false,
            threshold: 0.45,
            minMatchCharLength: 1,
            keys: searchKey ?? Object.keys(data.length > 0 ? data[0] : [])
        });
        const filtered = fuse.search(keyword).map((x)=>x.item);
        return itemKey ? (0,uniqBy/* default */.Z)(filtered, (x)=>x[itemKey]) : filtered;
    }, [
        keyword,
        JSON.stringify(data)
    ]);
    // #endregion
    const handleChange = (e)=>{
        const value = e.currentTarget.value;
        setKeyword(value);
        onSearch?.(value);
        if (!value) handleClear();
    };
    const handleClear = ()=>{
        setKeyword('');
        onSearch?.('');
    };
    const getItemKey = (0,react.useCallback)((index, data)=>{
        if (!itemKey) return index.toString();
        return data.dataSet[index][itemKey];
    }, [
        itemKey
    ]);
    const windowHeight = !!textFieldPropsRest.error && typeof height === 'number' ? height - 28 : height;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            !disableSearch && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.searchInput,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                        value: keyword,
                        placeholder: "Search",
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
                            endAdornment: keyword ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                                size: 18,
                                onClick: handleClear,
                                color: textFieldPropsRest.error ? theme.palette.maskColor.danger : undefined
                            }) : null,
                            ...InputProps
                        },
                        onChange: handleChange,
                        ...textFieldPropsRest
                    }),
                    textFieldPropsRest.error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        mt: 0.5,
                        children: textFieldPropsRest.helperText
                    }) : null
                ]
            }),
            readyToRenderData.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                height: windowHeight,
                justifyContent: "center",
                alignContent: "center",
                marginTop: "18px",
                marginBottom: "48px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyResult, {})
            }),
            readyToRenderData.length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.listBox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
                    className: classes.list,
                    width: "100%",
                    height: windowHeight,
                    overscanCount: 25,
                    itemSize: itemSize ?? 100,
                    itemData: {
                        dataSet: readyToRenderData,
                        onSelect
                    },
                    itemKey: (index, data)=>getItemKey(index, data),
                    itemCount: readyToRenderData.length,
                    ...rest,
                    children: itemRender
                })
            })
        ]
    });
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            overflow: 'visible'
        },
        listBox: {
            '& > div::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 0
            },
            '& > div::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.maskColor.secondaryLine,
                backgroundClip: 'padding-box'
            },
            '& > div > div': {
                position: 'relative',
                margin: 'auto'
            }
        },
        list: {
            scrollbarWidth: 'thin'
        },
        error: {
            backgroundColor: theme.palette.maskColor.bottom,
            fontSize: 14,
            color: theme.palette.maskColor.danger
        }
    }));

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainId.ts
var useChainId = __webpack_require__(58807);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useFungibleTokensFromTokenList.ts



function useFungibleTokensFromTokenList(pluginID, options) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: options?.chainId
    });
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        chainId,
        ...options
    });
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        return Hub.getFungibleTokensFromTokenList(chainId, {
            chainId
        });
    }, [
        chainId,
        Hub
    ]);
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleAssets.ts
var useFungibleAssets = __webpack_require__(35681);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useTrustedFungibleTokens.ts
var useTrustedFungibleTokens = __webpack_require__(92750);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBlockedFungibleTokens.ts
var useBlockedFungibleTokens = __webpack_require__(87085);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useFungibleTokensBalance.ts



function useFungibleTokensBalance(pluginID, listOfAddress, options) {
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, options);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!listOfAddress?.length) return constants/* EMPTY_OBJECT */.Nu;
        return Web3.getFungibleTokensBalance(listOfAddress);
    }, [
        listOfAddress?.join(','),
        Web3
    ]);
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAddressType.ts
var useAddressType = __webpack_require__(29063);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenList/type.ts
var type = __webpack_require__(45889);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/Switch.js
var Switch = __webpack_require__(14722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/switchClasses.js
var switchClasses = __webpack_require__(95070);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingSwitch/index.tsx

const SettingSwitch = (0,styled/* default */.ZP)(Switch/* default */.Z)(({ size, disabled })=>{
    const isSmall = size === 'small';
    const base = isSmall ? 16 : 24;
    return {
        [`&.${switchClasses/* default */.Z.root}`]: {
            width: base * 3,
            height: base * 2,
            padding: '5px 3px'
        },
        [`& .${switchClasses/* default */.Z.thumb}`]: {
            width: base,
            height: base
        },
        [`& .${switchClasses/* default */.Z.checked}`]: {
            color: 'white !important',
            [`&.${switchClasses/* default */.Z.switchBase}`]: {
                transform: `translateX(${isSmall ? 20 : 28}px)`
            },
            [`&+.${switchClasses/* default */.Z.track}`]: {
                opacity: '1 !important',
                backgroundColor: `${disabled ? 'rgba(61, 194, 51, 0.5)' : '#3DC233'} !important`
            }
        },
        [`& .${switchClasses/* default */.Z.track}`]: {
            borderRadius: 12
        },
        [`& .${switchClasses/* default */.Z.switchBase}`]: {
            top: isSmall ? 4 : 3,
            transform: `translateX(${isSmall ? 4 : 2}px)`
        }
    };
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/useTokenBlocked.ts



const useTokenBlocked = (address)=>{
    const blockedFungibleTokens = (0,useBlockedFungibleTokens/* useBlockedFungibleTokens */.v)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, undefined);
    return !!blockedFungibleTokens?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
};
const useTokenTrusted = (address, chainId)=>{
    const trustedFungibleTokens = (0,useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, undefined, chainId);
    return !!trustedFungibleTokens?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
};

// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/DotLoading/index.tsx
var DotLoading = __webpack_require__(87792);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/FungibleTokenItem.tsx
















const FungibleTokenItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        list: {
            maxHeight: '100%',
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(0.5),
            borderRadius: theme.spacing(1),
            backdropFilter: 'blur(16px)',
            '&:hover': {
                background: theme.palette.maskColor.bg
            }
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        primary: {
            flex: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        name: {
            display: 'flex',
            gap: theme.spacing(0.5),
            alignItems: 'center',
            lineHeight: '20px',
            color: theme.palette.maskColor.second
        },
        nameText: {
            maxWidth: 400,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        symbol: {
            lineHeight: '20px',
            fontSize: 16
        },
        balance: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        importButton: {
            borderRadius: 99
        },
        action: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        switch: {
            position: 'relative',
            left: theme.spacing(1)
        },
        link: {
            color: theme.palette.maskColor.second
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        dotLoadingWrapper: {
            display: 'flex',
            flexDirection: 'column-reverse',
            height: 15
        }
    }));
const getFungibleTokenItem = (getSource, isSelected, mode, addOrRemoveTokenToLocal, trustOrBlockTokenToLocal, isHiddenChainIcon, isCustomToken)=>{
    return /*#__PURE__*/ (0,react.memo)(({ data, index, style })=>{
        const t = (0,i18n_generated/* useSharedTrans */.j)();
        const { classes } = FungibleTokenItem_useStyles();
        const Others = (0,useWeb3Others/* useWeb3Others */.v)();
        const token = data.dataSet[index];
        const onSelect = data.onSelect;
        const { chainId, address, name, symbol, decimals, logoURL, balance } = token;
        const isBlocked = useTokenBlocked(address);
        const isTrust = useTokenTrusted(address, token.chainId);
        const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
        const network = (0,useNetwork/* useNetwork */.L)(pluginID, chainId);
        const { source, selected } = (0,react.useMemo)(()=>{
            return {
                source: getSource(address),
                selected: isSelected(address)
            };
        }, [
            address,
            getSource,
            isSelected
        ]);
        const [{ loading: onAddOrRemoveTokenToLocalLoading }, onAddOrRemoveTokenToLocal] = (0,useAsyncFn/* default */.Z)(async (event, strategy)=>{
            event.stopPropagation();
            if (token) await addOrRemoveTokenToLocal(token, strategy);
        }, [
            token,
            addOrRemoveTokenToLocal
        ]);
        const [{ loading: onTrustOrBlockTokenToLocalLoading }, onTrustOrBlockTokenToLocal] = (0,useAsyncFn/* default */.Z)(async (event)=>{
            event.stopPropagation();
            if (token) await trustOrBlockTokenToLocal(token, event.target.checked ? 'trust' : 'block');
        }, [
            token,
            trustOrBlockTokenToLocal
        ]);
        const explorerLink = (0,react.useMemo)(()=>{
            return Others.explorerResolver.fungibleTokenLink(token.chainId, token.address);
        }, [
            token.address,
            token.chainId,
            Others.explorerResolver.fungibleTokenLink
        ]);
        const action = (0,react.useMemo)(()=>{
            if (mode === type/* TokenListMode */.K.Manage) {
                if (source === 'personal') return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TrashLine, {
                    onClick: (e)=>onAddOrRemoveTokenToLocal(e, 'remove'),
                    size: 24
                });
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: isCustomToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        color: "primary",
                        disabled: onAddOrRemoveTokenToLocalLoading,
                        loading: onAddOrRemoveTokenToLocalLoading,
                        className: classes.importButton,
                        onClick: (e)=>onAddOrRemoveTokenToLocal(e, 'add'),
                        children: t.import()
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingSwitch, {
                        disabled: source === 'official-native' && mode === type/* TokenListMode */.K.Manage || onTrustOrBlockTokenToLocalLoading,
                        classes: {
                            root: classes.switch
                        },
                        onChange: async (event)=>{
                            event.stopPropagation();
                            event.preventDefault();
                            await onTrustOrBlockTokenToLocal(event);
                        },
                        size: "small",
                        checked: !isBlocked
                    })
                });
            }
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.balance,
                children: balance === undefined ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                    size: 24
                }) : balance === '' ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                    value: balance,
                    decimals: decimals,
                    significant: 6,
                    formatter: formatBalance/* formatBalance */.a
                })
            });
        }, [
            balance,
            decimals,
            isBlocked,
            source,
            mode,
            isTrust
        ]);
        const { data: tokenBalance, isLoading: isLoadingTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, isCustomToken ? address : '', {
            chainId
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: style,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                title: address,
                button: true,
                className: `${classes.list} dashboard token-list`,
                onClick: mode === type/* TokenListMode */.K.List ? ()=>onSelect(token) : undefined,
                disabled: !!(selected && mode === type/* TokenListMode */.K.List),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            position: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                    className: classes.icon,
                                    chainId: chainId,
                                    address: address,
                                    name: name,
                                    logoURL: logoURL
                                }),
                                isHiddenChainIcon || !network?.iconUrl ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                                    pluginID: pluginID,
                                    chainId: chainId,
                                    className: classes.badgeIcon,
                                    size: 16
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                        classes: {
                            primary: classes.text
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                component: "span",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: classes.symbol,
                                        children: symbol
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: `${classes.name} dashboard token-list-symbol`,
                                        children: isCustomToken ? isLoadingTokenBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.dotLoadingWrapper,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DotLoading/* DotLoading */.k, {})
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                            value: tokenBalance,
                                            decimals: decimals,
                                            significant: 6,
                                            formatter: formatBalance/* formatBalance */.a
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.nameText,
                                                    children: name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                    onClick: (event)=>event.stopPropagation(),
                                                    href: explorerLink,
                                                    style: {
                                                        width: 18,
                                                        height: 18
                                                    },
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupLink, {
                                                        size: 18,
                                                        className: classes.link
                                                    })
                                                }),
                                                token.isCustomToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: t.added_by_user()
                                                }) : null
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.action,
                                sx: {
                                    fontSize: 16
                                },
                                color: "textSecondary",
                                component: "span",
                                children: action
                            })
                        ]
                    })
                ]
            }, address)
        });
    });
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/ManageTokenListBar.tsx






const ManageTokenListBar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: theme.spacing(2.25, 0),
            margin: theme.spacing(2, -2, -2, -2),
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: theme.spacing(0, 0, 1.5, 1.5)
        },
        target: {
            cursor: 'pointer',
            fontWeight: 700
        }
    }));
const ManageTokenListBar = /*#__PURE__*/ (0,react.memo)(({ onClick })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = ManageTokenListBar_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        className: classes.root,
        direction: "row",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            className: classes.target,
            display: "inline-flex",
            gap: 2,
            direction: "row",
            onClick: onClick,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Edit2, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.erc20_manage_token_list()
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/index.tsx














const SEARCH_KEYS = [
    'address',
    'symbol',
    'name'
];
const FungibleTokenList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { enableMange })=>({
        channel: {
            position: enableMange ? 'relative' : 'unset'
        },
        bar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
        }
    }));
function FungibleTokenList(props) {
    const { tokens = constants/* EMPTY_LIST */.rP, whitelist: includeTokens, blacklist: excludeTokens = constants/* EMPTY_LIST */.rP, onSelect, onSearchError, FixedSizeListProps, selectedTokens = constants/* EMPTY_LIST */.rP, enableManage = false, isHiddenChainIcon = true, setMode, mode = type/* TokenListMode */.K.List } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = FungibleTokenList_useStyles({
        enableMange: mode === type/* TokenListMode */.K.List && enableManage
    }, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)(props.pluginID);
    const account = (0,useAccount/* useAccount */.m)(pluginID);
    const chainId = (0,useChainId/* useChainId */.x)(pluginID, props.chainId);
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    const { value: fungibleTokens = constants/* EMPTY_LIST */.rP } = useFungibleTokensFromTokenList(pluginID, {
        chainId
    });
    const { data: fungibleAssets = constants/* EMPTY_LIST */.rP } = (0,useFungibleAssets/* useFungibleAssets */.C)(pluginID, undefined, {
        chainId
    });
    const trustedFungibleTokens = (0,useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y)(pluginID, undefined, chainId);
    const blockedFungibleTokens = (0,useBlockedFungibleTokens/* useBlockedFungibleTokens */.v)(pluginID);
    const nativeToken = (0,react.useMemo)(()=>Others.chainResolver.nativeCurrency(chainId), [
        chainId
    ]);
    const filteredFungibleTokens = (0,react.useMemo)(()=>{
        const allFungibleTokens = (0,uniqBy/* default */.Z)([
            ...nativeToken ? [
                nativeToken
            ] : [],
            ...tokens,
            ...fungibleTokens,
            ...trustedFungibleTokens
        ], (x)=>x.address.toLowerCase());
        const blockedTokenAddresses = blockedFungibleTokens.map((x)=>x.address);
        return allFungibleTokens.filter((token)=>{
            const checkSameAddress = (addr)=>addr.toLowerCase() === token.address.toLowerCase();
            const isIncluded = !includeTokens || includeTokens.some(checkSameAddress);
            const isExcluded = excludeTokens.length ? excludeTokens.some(checkSameAddress) : false;
            const isBlocked = blockedTokenAddresses.some(checkSameAddress);
            return isIncluded && !isExcluded && !isBlocked;
        });
    }, [
        nativeToken,
        tokens,
        fungibleTokens,
        trustedFungibleTokens,
        includeTokens,
        excludeTokens,
        blockedFungibleTokens
    ]);
    const { value: fungibleTokensBalance = constants/* EMPTY_OBJECT */.Nu } = useFungibleTokensBalance(pluginID, filteredFungibleTokens.map((x)=>x.address), {
        account,
        chainId
    });
    // To avoid SearchableList re-render, reduce the dep
    const sortedFungibleTokensForManage = (0,react.useMemo)(()=>{
        if (mode === type/* TokenListMode */.K.List) return constants/* EMPTY_LIST */.rP;
        const isTrustedToken = (0,isSameAddress/* currySameAddress */.D)(trustedFungibleTokens.map((x)=>x.address));
        return (0,uniqBy/* default */.Z)([
            ...nativeToken ? [
                nativeToken
            ] : [],
            ...fungibleTokens,
            ...trustedFungibleTokens
        ], (x)=>x.address.toLowerCase()).sort((a, z)=>{
            // trusted token
            if (isTrustedToken(a.address)) return -1;
            if (isTrustedToken(z.address)) return 1;
            const isNativeTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, Others.getNativeTokenAddress(a.chainId));
            if (isNativeTokenA) return -1;
            const isNativeTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, Others.getNativeTokenAddress(z.chainId));
            if (isNativeTokenZ) return 1;
            // mask token with position value
            const isMaskTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, Others.getMaskTokenAddress(a.chainId));
            if (isMaskTokenA) return -1;
            const isMaskTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, Others.getMaskTokenAddress(z.chainId));
            if (isMaskTokenZ) return 1;
            if (z.rank && (!a.rank || a.rank - z.rank > 0)) return 1;
            if (a.rank && (!z.rank || z.rank - a.rank > 0)) return -1;
            // alphabet
            if (a.name !== z.name) return a.name < z.name ? -1 : 1;
            return 0;
        });
    }, [
        chainId,
        trustedFungibleTokens,
        fungibleTokens,
        nativeToken,
        mode
    ]);
    const sortedFungibleTokensForList = (0,react.useMemo)(()=>{
        if (mode === type/* TokenListMode */.K.Manage) return constants/* EMPTY_LIST */.rP;
        const fungibleAssetsTable = Object.fromEntries(fungibleAssets.filter((x)=>x.chainId === chainId).map((x)=>[
                x.address,
                x
            ]));
        const isTrustedToken = (0,isSameAddress/* currySameAddress */.D)(trustedFungibleTokens.map((x)=>x.address));
        const getTokenValue = (address)=>{
            const value = fungibleAssetsTable[address]?.value?.[specs/* CurrencyType */.V2.USD];
            return value ? (0,number/* toZero */.ux)(value) : number/* ZERO */.xE;
        };
        const { getNativeTokenAddress, getMaskTokenAddress } = Others;
        return filteredFungibleTokens.map((x)=>({
                ...x,
                // To avoid reduce re-render, merge balance into token, when value is `undefined` to represent loading
                balance: fungibleTokensBalance[x.address]
            })).sort((a, z)=>{
            // the currently selected chain id
            if (a.chainId !== z.chainId) {
                if (a.chainId === chainId) return -1;
                if (z.chainId === chainId) return 1;
            }
            // native token
            const isNativeTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, getNativeTokenAddress(a.chainId));
            if (isNativeTokenA) return -1;
            const isNativeTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, getNativeTokenAddress(z.chainId));
            if (isNativeTokenZ) return 1;
            // mask token with position value
            const aUSD = getTokenValue(a.address);
            const isMaskTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, getMaskTokenAddress(a.chainId));
            if (aUSD.isPositive() && isMaskTokenA) return -1;
            const zUSD = getTokenValue(z.address);
            const isMaskTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, getMaskTokenAddress(z.chainId));
            if (zUSD.isPositive() && isMaskTokenZ) return 1;
            // token value
            if (!aUSD.isEqualTo(zUSD)) return zUSD.gt(aUSD) ? 1 : -1;
            const aBalance = (0,number/* leftShift */.w5)(fungibleTokensBalance[a.address] ?? '0', a.decimals);
            const zBalance = (0,number/* leftShift */.w5)(fungibleTokensBalance[z.address] ?? '0', z.decimals);
            // token balance
            if (!aBalance.isEqualTo(zBalance)) return zBalance.gt(aBalance) ? 1 : -1;
            // trusted token
            if (isTrustedToken(a.address)) return -1;
            if (isTrustedToken(z.address)) return 1;
            // mask token with position value
            if (isMaskTokenA) return -1;
            if (isMaskTokenZ) return 1;
            if (z.rank && (!a.rank || a.rank - z.rank > 0)) return 1;
            if (a.rank && (!z.rank || z.rank - a.rank > 0)) return -1;
            // alphabet
            if (a.name !== z.name) return a.name < z.name ? -1 : 1;
            return 0;
        });
    }, [
        mode,
        chainId,
        fungibleAssets,
        trustedFungibleTokens,
        filteredFungibleTokens,
        fungibleTokensBalance
    ]);
    // #region add token by address
    const [keyword, setKeyword] = (0,react.useState)('');
    const { value: addressType } = (0,useAddressType/* useAddressType */.t)(pluginID, !Others.isValidAddress?.(keyword ?? '') ? '' : keyword, {
        chainId
    });
    const isAddressNotContract = addressType !== types/* AddressType */.DL.Contract && Others.isValidAddress(keyword);
    const searchedTokenAddress = (0,react.useMemo)(()=>{
        if (!keyword) return;
        return Others.isValidAddress(keyword) && !sortedFungibleTokensForList.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, keyword)) ? keyword : '';
    }, [
        keyword,
        sortedFungibleTokensForList
    ]);
    const searchError = keyword.match(/^0x.+/i) && !Others.isValidAddress(keyword) ? t.erc20_search_wrong_address() : '';
    (0,react.useEffect)(()=>{
        onSearchError?.(!!searchError);
    }, [
        searchError,
        !searchError
    ]);
    const { data: searchedToken } = (0,useFungibleToken/* useFungibleToken */.c)(pluginID, searchedTokenAddress, undefined, {
        chainId
    });
    const isCustomToken = (0,react.useMemo)(()=>!sortedFungibleTokensForManage.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, searchedToken?.address) && searchedToken?.chainId === x.chainId) && Boolean(searchedToken), [
        sortedFungibleTokensForManage,
        searchedToken
    ]);
    const { data: tokenBalance = '' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(pluginID, searchedToken?.address, {
        chainId,
        account
    });
    // #endregion
    const itemRender = (0,react.useMemo)(()=>{
        return getFungibleTokenItem((address)=>{
            if ((0,isSameAddress/* isSameAddress */.W)(nativeToken?.address, address)) return 'official-native';
            const inOfficialList = fungibleTokens.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
            if (inOfficialList) return 'official';
            const inPersonaList = trustedFungibleTokens.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
            if (inPersonaList) return 'personal';
            return 'external';
        }, (address)=>selectedTokens.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x, address)), mode, async (token, strategy)=>{
            if (strategy === 'add') await Token?.addToken?.(account, token);
            if (strategy === 'remove') await Token?.removeToken?.(account, token);
        }, async (token, strategy)=>{
            if (strategy === 'trust') await Token?.trustToken?.(account, token);
            if (strategy === 'block') await Token?.blockToken?.(account, token);
        }, isHiddenChainIcon, isCustomToken);
    }, [
        nativeToken?.address,
        selectedTokens,
        mode,
        trustedFungibleTokens,
        fungibleTokens,
        isCustomToken,
        isHiddenChainIcon
    ]);
    const SearchFieldProps = (0,react.useMemo)(()=>({
            placeholder: t.erc20_token_list_placeholder(),
            helperText: searchError,
            error: !!searchError,
            ...props.SearchTextFieldProps
        }), [
        searchError,
        JSON.stringify(props.SearchTextFieldProps)
    ]);
    const [, startTransition] = (0,react.useTransition)();
    const handleSelect = (0,react.useCallback)((token)=>startTransition(()=>onSelect?.(token)), [
        onSelect
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        className: classes.channel,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchableList, {
                onSelect: handleSelect,
                onSearch: setKeyword,
                data: isAddressNotContract ? constants/* EMPTY_LIST */.rP : searchedToken && (0,isSameAddress/* isSameAddress */.W)(searchedToken.address, searchedTokenAddress) ? // balance field work for case: user search someone token by contract and whitelist is empty.
                [
                    {
                        ...searchedToken,
                        balance: tokenBalance,
                        isCustomToken
                    }
                ] : mode === type/* TokenListMode */.K.List ? sortedFungibleTokensForList : sortedFungibleTokensForManage,
                searchKey: SEARCH_KEYS,
                disableSearch: !!props.disableSearch,
                itemKey: "address",
                classes: {
                    listBox: classes.listBox,
                    searchInput: classes.searchInput
                },
                itemRender: itemRender,
                FixedSizeListProps: FixedSizeListProps,
                SearchFieldProps: SearchFieldProps
            }),
            mode === type/* TokenListMode */.K.List && enableManage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.bar,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ManageTokenListBar, {
                    onClick: ()=>setMode?.(type/* TokenListMode */.K.Manage)
                })
            }) : null
        ]
    });
}
FungibleTokenList.displayName = 'FungibleTokenList';


/***/ }),

/***/ 45889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TokenListMode)
/* harmony export */ });
var TokenListMode;
(function(TokenListMode) {
    TokenListMode["List"] = 'list';
    TokenListMode["Manage"] = 'manage';
})(TokenListMode || (TokenListMode = {}));


/***/ }),

/***/ 16941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 94973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ })

}]);
//# sourceMappingURL=chunk.2435.js.map