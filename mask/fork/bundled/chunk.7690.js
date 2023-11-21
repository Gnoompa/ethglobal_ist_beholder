"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7690],{

/***/ 67690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PersonaAvatarPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(98826);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-avatar-editor@13.0.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-avatar-editor/dist/index.js
var react_avatar_editor_dist = __webpack_require__(13177);
var dist_default = /*#__PURE__*/__webpack_require__.n(react_avatar_editor_dist);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Slider/Slider.js
var Slider = __webpack_require__(78047);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useUpdateEffect/index.js + 2 modules
var useUpdateEffect = __webpack_require__(6249);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var type = __webpack_require__(85103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkTab/index.tsx
var NetworkTab = __webpack_require__(59312);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(82124);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginVerifiedWalletStatusBar.tsx + 2 modules
var PluginVerifiedWalletStatusBar = __webpack_require__(92553);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAssets.ts
var useNonFungibleAssets = __webpack_require__(55149);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/utils/isSameNFT.ts
var isSameNFT = __webpack_require__(61402);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectibleCard.tsx + 1 modules
var CollectibleCard = __webpack_require__(92763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
;// CONCATENATED MODULE: ./packages/mask/popups/components/NFTAvatarPicker/CollectionList.tsx








const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            padding: theme.spacing(2),
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: 16,
            columnGap: 8
        },
        item: {
            height: 86,
            maxHeight: 86
        },
        disabled: {
            opacity: 0.5
        }
    }));
const CollectionList = /*#__PURE__*/ (0,react.memo)(function CollectionList({ loading, tokens, account, selected, onItemClick, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { classes, cx } = useStyles();
    const wallet = (0,useWallet/* useWallet */.O)();
    if (!loading && !tokens.length || !account) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            style: {
                height: 358
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                sx: {
                    height: '100%'
                },
                flex: 1,
                children: t.no_NFTs_found()
            })
        });
    }
    if (loading && !tokens.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            ...rest,
            className: cx(classes.container, rest.className),
            children: (0,range/* default */.Z)(20).map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.item,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        sx: {
                            borderRadius: '8px'
                        },
                        height: "100%"
                    })
                }, index))
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        ...rest,
        className: cx(classes.container, rest.className),
        children: tokens.length ? tokens.map((x, index)=>{
            const isSelected = (0,isSameNFT/* isSameNFT */.m)(pluginID, x, selected);
            const disabled = selected && !isSelected || wallet?.owner;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard/* CollectibleCard */.Z, {
                className: cx(classes.item, disabled ? classes.disabled : undefined),
                asset: x,
                disableNetworkIcon: true,
                onClick: ()=>{
                    if (disabled) return;
                    onItemClick(!selected ? x : undefined);
                },
                isSelected: (0,isSameNFT/* isSameNFT */.m)(pluginID, x, selected),
                useRadio: true
            }, index);
        }) : null
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
;// CONCATENATED MODULE: ./packages/mask/popups/components/NFTAvatarPicker/index.tsx













const NFTAvatarPicker_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        picker: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        container: {
            overflow: 'auto',
            paddingBottom: 80
        },
        collectionList: {
            paddingTop: 0
        },
        bottomBar: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: theme.spacing(2),
            background: theme.palette.maskColor.secondaryBottom,
            backdropFilter: 'blur(8px)',
            zIndex: 2,
            boxSizing: 'border-box',
            height: 72,
            maxHeight: 72
        }
    }));
const NFTAvatarPicker = /*#__PURE__*/ (0,react.memo)(function NFTAvatarPicker({ onChange, bindingWallets }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = NFTAvatarPicker_useStyles();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const chains = (0,react.useMemo)(()=>{
        const networks = (0,entry/* getRegisteredWeb3Networks */.Rm)(pluginID);
        return networks.filter((x)=>src/* Flags */.v.support_testnet_switch ? true : x.isMainnet).map((x)=>x.chainId);
    }, []);
    const [selected, setSelected] = (0,react.useState)();
    const { account, chainId, setAccount, setChainId } = (0,useContext/* useChainContext */.ql)();
    const { value: assets, done, next, error, retry, loading } = (0,useNonFungibleAssets/* useNonFungibleAssets */.H)(pluginID, undefined, {
        chainId,
        account
    });
    const tokens = (0,react.useMemo)(()=>(0,uniqBy/* default */.Z)(assets, (x)=>x.contract?.address.toLowerCase() + x.tokenId), [
        assets
    ]);
    const handleChangeWallet = (0,react.useCallback)(()=>modalNavigate(Routes/* PopupModalRoutes */.cY.SelectProvider, {
            onlyMask: true
        }), []);
    const handleChange = (0,react.useCallback)((address, pluginID, chainId)=>{
        setAccount(address);
        setChainId(chainId);
        setSelected(undefined);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.picker,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                height: 62,
                flexShrink: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                    chains: chains,
                    pluginID: pluginID
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                "data-hide-scrollbar": true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionList, {
                        className: classes.collectionList,
                        tokens: tokens,
                        loading: loading,
                        account: account,
                        selected: selected,
                        onItemClick: setSelected
                    }),
                    error && !done && tokens.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        py: 1,
                        style: {
                            gridColumnStart: 1,
                            gridColumnEnd: 6
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                            hint: false,
                            retry: retry
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                        callback: next,
                        children: !done && tokens.length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
                    }, tokens.length)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginVerifiedWalletStatusBar/* PluginVerifiedWalletStatusBar */.V, {
                    onChange: handleChange,
                    onChangeWallet: handleChangeWallet,
                    verifiedWallets: bindingWallets ?? src_constants/* EMPTY_LIST */.rP,
                    className: classes.bottomBar,
                    expectedAddress: account,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        disabled: loading || !selected || !!wallet?.owner,
                        onClick: ()=>{
                            if (!selected?.metadata?.imageURL) return;
                            onChange(selected?.metadata?.imageURL);
                        },
                        children: wallet?.owner ? t.coming_soon() : t.confirm()
                    })
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useVerifiedWallets.ts
var useVerifiedWallets = __webpack_require__(15799);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/constants.ts
var popups_constants = __webpack_require__(81878);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/PersonaAvatarSetting/index.tsx























const PersonaAvatarSetting_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        tabs: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        tabPanel: {
            padding: 0,
            overflow: 'auto'
        },
        uploadBox: {
            background: theme.palette.maskColor.whiteBlue,
            padding: theme.spacing(3),
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 10
        },
        uploadIcon: {
            width: 54,
            height: 54,
            borderRadius: '50%',
            background: theme.palette.maskColor.secondaryBottom,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: `0px 4px 6px 0px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.10)' : 'rgba(102, 108, 135, 0.10)'}`
        },
        typo: {
            color: theme.palette.maskColor.third,
            textAlign: 'center',
            lineHeight: '18px'
        },
        strong: {
            color: theme.palette.maskColor.second,
            textAlign: 'center',
            lineHeight: '18px'
        },
        file: {
            display: 'none'
        }
    }));
const PersonaAvatarSetting = /*#__PURE__*/ (0,react.memo)(function PersonaAvatar() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const editor = (0,react.useRef)(null);
    const navigate = (0,dist/* useNavigate */.s0)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const { classes } = PersonaAvatarSetting_useStyles();
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)(params.get('tab') || type/* ProfilePhotoType */.jj.Image, type/* ProfilePhotoType */.jj.Image, type/* ProfilePhotoType */.jj.NFT);
    const [avatarLoaded, setAvatarLoaded] = (0,react.useState)(false);
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { proofs, currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const bindingWallets = (0,useVerifiedWallets/* useVerifiedWallets */.f)(proofs);
    const inputRef = (0,react.useRef)(null);
    const [file, setFile] = (0,react.useState)();
    const [scale, setScale] = (0,react.useState)(1);
    const handleSetFile = (0,react.useCallback)((file)=>{
        if (file.size > popups_constants/* MAX_FILE_SIZE */.Tb) {
            showSnackbar(t.popups_set_avatar_failed(), {
                variant: 'error'
            });
            return;
        }
        setFile(file);
    }, []);
    const [bound] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            handleSetFile(files[0]);
        }
    });
    const { account } = (0,useContext/* useChainContext */.ql)();
    const handleChangeTab = (0,react.useCallback)((event, value)=>{
        if (value === type/* ProfilePhotoType */.jj.NFT && !bindingWallets.length && !account) {
            modalNavigate(Routes/* PopupModalRoutes */.cY.SelectProvider, {
                onlyMask: true
            });
            return;
        }
        onChange(event, value);
    }, [
        onChange,
        account,
        bindingWallets
    ]);
    const [{ loading: uploadLoading }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (!editor.current || !file || !currentPersona?.identifier) return;
            if (typeof file === 'string') {
                let sign;
                const data = {
                    imageUrl: file,
                    updateAt: Date.now()
                };
                // Verify Wallet sign with persona
                if (bindingWallets.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.identity, account))) {
                    sign = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, JSON.stringify(data), currentPersona.identifier, location.origin, true);
                } else {
                    sign = await entry/* Web3 */.Bv.signMessage('message', JSON.stringify(data), {
                        account,
                        silent: true
                    });
                }
                const storage = entry/* Web3Storage */.xk.createKVStorage(constants/* PERSONA_AVATAR_DB_NAMESPACE */.wV);
                await storage.set(currentPersona.identifier.rawPublicKey, {
                    ...data,
                    sign
                });
            }
            await new Promise((resolve, reject)=>{
                editor.current?.getImage().toBlob(async (blob)=>{
                    if (blob) {
                        const identifier = await service/* default */.ZP.Settings.getCurrentPersonaIdentifier();
                        await service/* default */.ZP.Identity.updatePersonaAvatar(identifier, blob);
                        resolve();
                    }
                    reject();
                });
            });
            showSnackbar(t.popups_set_avatar_successfully());
            navigate(Routes/* PopupRoutes */.mZ.Personas, {
                replace: true
            });
        } catch  {
            showSnackbar(t.popups_set_avatar_failed(), {
                variant: 'error'
            });
        }
    }, [
        file,
        currentPersona,
        account,
        bindingWallets
    ]);
    (0,useTitle/* useTitle */.Z)(t.popups_profile_photo());
    // reset loaded state after file be changed
    (0,useUpdateEffect/* useUpdateEffect */.r)(()=>{
        if (file) setAvatarLoaded(false);
    }, [
        file
    ]);
    if (file) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    p: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((dist_default()), {
                            ref: editor,
                            image: file,
                            border: 50,
                            style: {
                                width: '100%',
                                height: '100%',
                                borderRadius: 8
                            },
                            scale: scale ?? 1,
                            rotate: 0,
                            borderRadius: 300,
                            crossOrigin: "anonymous",
                            onLoadSuccess: ()=>setAvatarLoaded(true)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                            max: 2,
                            min: 0.5,
                            step: 0.1,
                            defaultValue: 1,
                            onChange: (_, value)=>setScale(value),
                            "aria-label": "Scale"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomController/* BottomController */.L, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "outlined",
                            onClick: ()=>setFile(null),
                            fullWidth: true,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                            fullWidth: true,
                            onClick: handleConfirm,
                            loading: uploadLoading,
                            disabled: !avatarLoaded,
                            children: t.confirm()
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        "data-hide-scrollbar": true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: currentTab,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {
                    tabList: !file ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                        onChange: handleChangeTab,
                        "aria-label": "profile-photo-tabs",
                        classes: {
                            root: classes.tabs
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.popups_profile_photo_image(),
                                value: type/* ProfilePhotoType */.jj.Image
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.popups_profile_photo_nfts(),
                                value: type/* ProfilePhotoType */.jj.NFT
                            })
                        ]
                    }) : null
                }),
                !file ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: type/* ProfilePhotoType */.jj.Image,
                            className: classes.tabPanel,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                p: 2,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.uploadBox,
                                    ...bound,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            className: classes.file,
                                            type: "file",
                                            accept: "image/png, image/jpeg",
                                            ref: inputRef,
                                            onChange: ({ currentTarget })=>{
                                                if (!currentTarget.files) return;
                                                handleSetFile(currentTarget.files[0]);
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.uploadIcon,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Upload, {
                                                size: 30
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.typo,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                    children: t.popups_profile_photo_drag_file()
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                t.popups_profile_photo_size_limit()
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "strong",
                                            className: classes.strong,
                                            children: t.or()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            style: {
                                                width: 164
                                            },
                                            color: "info",
                                            onClick: ()=>inputRef.current?.click(),
                                            children: t.popups_profile_photo_browser_file()
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: type/* ProfilePhotoType */.jj.NFT,
                            className: classes.tabPanel,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarPicker, {
                                onChange: (image)=>setFile(image),
                                bindingWallets: bindingWallets
                            })
                        })
                    ]
                }) : null
            ]
        })
    });
});
function PersonaAvatarPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatarSetting, {})
    });
}


/***/ }),

/***/ 83629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ AssetPreviewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _Image_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93301);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        fallbackImage: {
            height: 64,
            width: 64
        },
        icon: {
            position: 'absolute',
            top: theme.spacing(0.5),
            left: theme.spacing(0.5)
        }
    }));
function AssetPreviewer(props) {
    const { fallbackImage, url, icon } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                classes: {
                    fallbackImage: classes.fallbackImage,
                    container: classes.container
                },
                width: "100%",
                height: "100%",
                style: {
                    objectFit: 'cover'
                },
                src: url,
                fallback: fallbackImage
            }),
            icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.icon,
                children: icon
            }) : null
        ]
    });
}


/***/ }),

/***/ 92763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CollectibleCard)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/RadioIndicator/index.tsx
var RadioIndicator = __webpack_require__(24500);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/theme/src/Components/CheckBoxIndicator/index.tsx



const CheckBoxIndicator = /*#__PURE__*/ (0,react.memo)(function CheckBoxIndicator({ checked, unCheckedButtonColor, checkedButtonColor, ...rest }) {
    return checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Checkbox, {
        ...rest,
        color: checkedButtonColor
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckboxBlank, {
        ...rest,
        color: unCheckedButtonColor
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/resolveImageURL.ts
var resolveImageURL = __webpack_require__(81438);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectibleCard.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            display: 'block',
            cursor: 'pointer'
        },
        card: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: theme.palette.mode === 'light' ? '#F7F9FA' : '#2F3336',
            width: '100%',
            height: '100%'
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 30,
            height: 30
        },
        fallbackLensImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: '100%',
            height: '100%'
        },
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%'
        },
        indicator: {
            padding: 0,
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1
        }
    }));
/** disable inspect NFT details */ const CollectibleCard = /*#__PURE__*/ (0,react.memo)(({ className, pluginID, asset, disableNetworkIcon, disableInspect, isSelected, useRadio, showUnCheckedIndicator, ...rest })=>{
    const { classes, cx } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const icon = pluginID && !disableNetworkIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
        pluginID: pluginID,
        chainId: asset.chainId
    }) : null;
    const { metadata } = asset;
    const url = metadata?.previewImageURL || metadata?.imageURL || metadata?.mediaURL;
    const fallbackImage = (0,resolveImageURL/* resolveImageURL */.y)(undefined, asset.metadata?.name, asset.collection?.name, asset.contract?.address);
    const Indicator = useRadio ? RadioIndicator/* RadioIndicator */.F : CheckBoxIndicator;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.root, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.blocker
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                className: classes.card,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                    classes: {
                        fallbackImage: fallbackImage ? classes.fallbackLensImage : classes.fallbackImage
                    },
                    url: url,
                    icon: icon,
                    fallbackImage: fallbackImage
                })
            }),
            isSelected || showUnCheckedIndicator ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Indicator, {
                size: 20,
                checked: isSelected,
                className: classes.indicator,
                checkedButtonColor: theme.palette.maskColor.primary,
                unCheckedButtonColor: theme.palette.maskColor.secondaryLine
            }) : null
        ]
    });
});
CollectibleCard.displayName = 'CollectibleCard';


/***/ }),

/***/ 96310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ElementAnchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _react_hookz_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47642);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);




const ElementAnchor = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ callback, children, ...rest })=>{
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersection = (0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_2__/* .useIntersectionObserver */ .S)(elementRef, {
        rootMargin: '200px'
    });
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(callback);
    callbackRef.current = callback;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!intersection?.isIntersecting) return;
        callbackRef.current(intersection);
    }, [
        intersection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pt: 1,
        ref: elementRef,
        justifyContent: "center",
        alignItems: "center",
        direction: "row",
        ...rest,
        children: children
    });
});
ElementAnchor.displayName = 'ElementAnchor';


/***/ }),

/***/ 85793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ EmptyStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 400,
            marginTop: theme.spacing(1.5)
        }
    }));
const EmptyStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function EmptyStatus({ className, children, iconSize = 32, ...rest }) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.EmptySimple, {
                size: iconSize
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.text,
                component: "div",
                children: children
            })
        ]
    });
});


/***/ }),

/***/ 93301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43204);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { size, rounded }, refs)=>({
        optimistic: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container: {
            width: size ?? '100%',
            height: size ?? '100%',
            position: 'relative',
            borderRadius: rounded ? '50%' : undefined,
            overflow: rounded ? 'hidden' : undefined
        },
        image: {
            display: 'block'
        },
        failImage: {
            width: 30,
            height: 30
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        failed: {
            [`&.${refs.center}`]: {
                background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)' : 'linear-gradient(180deg, #202020 0%, #181818 100%)'
            }
        }
    }));
const MASK_DARK_FALLBACK = new URL(/* asset import */ __webpack_require__(44365), __webpack_require__.b).href;
const MASK_LIGHT_FALLBACK = new URL(/* asset import */ __webpack_require__(34656), __webpack_require__.b).href;
function Image({ fallback, size, rounded, disableSpinner, classes: extraClasses, onClick, containerProps, ...rest }) {
    const { classes, cx } = useStyles({
        size,
        rounded
    }, {
        props: {
            classes: extraClasses
        }
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (rest.src && !failed) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.optimistic, containerProps?.className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                className: classes.image,
                width: size,
                height: size,
                ...rest,
                src: rest.src,
                onError: ()=>setFailed(true)
            })
        });
    }
    if (fallback && !(fallback instanceof URL) && typeof fallback !== 'string') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
            children: fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...containerProps,
        className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            loading: "lazy",
            decoding: "async",
            width: size,
            height: size,
            ...rest,
            src: fallback?.toString() ?? (theme.palette.mode === 'dark' ? MASK_DARK_FALLBACK : MASK_LIGHT_FALLBACK),
            className: cx(classes.image, classes.failImage, classes.fallbackImage)
        })
    });
}


/***/ }),

/***/ 82124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ RetryHint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);




const RetryHint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ retry, hint = true, ButtonProps })=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        height: hint ? '100%' : '100px',
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            gap: 2.75,
            children: [
                hint ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    children: t.load_failed()
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    ...ButtonProps,
                    size: "small",
                    style: {
                        borderRadius: 16
                    },
                    onClick: ()=>retry?.(),
                    children: t.load_retry()
                })
            ]
        })
    });
});
RetryHint.displayName = 'RetryHint';


/***/ }),

/***/ 59312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 61402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isSameNFT)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74765);


function isSameNFT(pluginID, a, b) {
    if (pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) return a.tokenId === b?.tokenId && a.id === b.id;
    if (!a.contract) return false;
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .W)(a.contract.address, b?.contract?.address) && a.contract?.chainId === b?.contract?.chainId && a.tokenId === b?.tokenId;
}


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

/***/ 47830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useBlockedNonFungibleTokens)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useBlockedNonFungibleTokens(pluginID, schemaType) {
    const { Token } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const nfts = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Token?.blockedNonFungibleTokens ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return nfts.length && schemaType ? nfts.filter((x)=>x.schema === schemaType) : nfts;
    }, [
        schemaType,
        nfts
    ]);
}


/***/ }),

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 55149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useNonFungibleAssets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52033);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86886);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useBlockedNonFungibleTokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47830);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useNetworkDescriptors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3350);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61811);







/**
 * Blocked tokens would be filtered out
 */ function useNonFungibleAssets(pluginID, schemaType, options) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        chainId,
        ...options
    });
    const networks = (0,_useNetworkDescriptors_js__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptors */ .p)(pluginID);
    const availableChainIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return networks.filter((x)=>x.isMainnet && (options?.chainId ? x.chainId === options.chainId : true)).map((x)=>x.chainId);
    }, [
        networks,
        options?.chainId
    ]);
    const blockedTokens = (0,_useBlockedNonFungibleTokens_js__WEBPACK_IMPORTED_MODULE_4__/* .useBlockedNonFungibleTokens */ .E)();
    const blockedTokenIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return blockedTokens.filter((x)=>availableChainIds.includes(x.chainId)).map((x)=>x.id);
    }, [
        blockedTokens,
        availableChainIds
    ]);
    const { data, isLoading, fetchNextPage, hasNextPage, refetch, error, dataUpdatedAt } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__/* .useInfiniteQuery */ .N)({
        queryKey: [
            'non-fungible-assets',
            account,
            availableChainIds,
            blockedTokenIds
        ],
        queryFn: async ({ pageParam })=>{
            const chainId = pageParam?.chainId || availableChainIds[0];
            const res = await Hub.getNonFungibleAssets(account, {
                indicator: pageParam?.indicator,
                size: 20,
                chainId
            });
            const data = blockedTokenIds.length ? res.data.filter((x)=>{
                const id = `${x.chainId}.${x.address}.${x.tokenId}`.toLowerCase();
                return !blockedTokenIds.includes(id);
            }) : res.data;
            return {
                ...res,
                data,
                chainId
            };
        },
        getNextPageParam: (lastPage)=>{
            const { nextIndicator, chainId } = lastPage;
            const nextChainId = nextIndicator ? chainId : availableChainIds[availableChainIds.indexOf(chainId) + 1];
            if (!nextChainId) return;
            return {
                indicator: nextIndicator,
                chainId: nextChainId
            };
        }
    });
    const list = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>data?.pages.flatMap((x)=>x.data) || _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY_LIST */ .rP, [
        data?.pages
    ]);
    const nextPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>fetchNextPage(), [
        fetchNextPage
    ]);
    // TODO rename these fields in style of react-query
    return {
        value: list,
        next: nextPage,
        loading: isLoading,
        done: !hasNextPage,
        retry: refetch,
        error,
        dataUpdatedAt
    };
}


/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ }),

/***/ 86886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useInfiniteQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87193);
/* harmony import */ var _useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84233);
'use client';



function useInfiniteQuery(arg1, arg2, arg3) {
  const options = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__/* .parseQueryArgs */ ._v)(arg1, arg2, arg3);
  return (0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useBaseQuery */ .r)(options, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__/* .InfiniteQueryObserver */ .c);
}


//# sourceMappingURL=useInfiniteQuery.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.7690.js.map