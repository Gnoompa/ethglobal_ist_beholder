"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4741],{

/***/ 90025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personas_AccountDetail)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useHiddenAddressConfig.ts
var useHiddenAddressConfig = __webpack_require__(66117);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useUpdateEffect/index.js + 2 modules
var useUpdateEffect = __webpack_require__(6249);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Personas/components/AccountAvatar/index.tsx
var AccountAvatar = __webpack_require__(150);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var src_constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useDefaultChainId.ts
var useDefaultChainId = __webpack_require__(4639);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(5480);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/Switch.js
var Switch = __webpack_require__(14722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var urlcat_dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/mask/popups/components/WalletSettingList/index.tsx













function WalletItem({ proof, toggleUnlisted, profileIdentity, checked }) {
    const theme = (0,useTheme/* default */.Z)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const networkPluginId = (0,resolver/* resolveNextID_NetworkPluginID */.j$)(proof.platform);
    const chainId = (0,useDefaultChainId/* useDefaultChainId */.b)(networkPluginId);
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(networkPluginId, chainId);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(networkPluginId);
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(networkPluginId, proof.identity);
    const formattedAddress = Others.formatAddress(proof.identity, 4);
    const addressLink = Others.explorerResolver.addressLink(chainId, proof.identity);
    const balance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)(networkPluginId, {
        account: proof.identity,
        chainId
    });
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(networkPluginId, {
        chainId
    });
    const walletName = (0,react.useMemo)(()=>{
        if (domain) return domain;
        const walletAtDB = wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(proof.identity, x.address));
        if (walletAtDB) return walletAtDB.name;
        return formattedAddress;
    }, [
        domain,
        wallets,
        proof.identity,
        formattedAddress
    ]);
    const handleSwitch = (0,react.useCallback)(()=>{
        if (!profileIdentity) return;
        toggleUnlisted(profileIdentity, proof.identity);
    }, [
        toggleUnlisted,
        profileIdentity,
        proof.identity
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        sx: {
            padding: 0
        },
        secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
            checked: checked,
            onChange: handleSwitch
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
            sx: {
                borderRadius: 2,
                '&:hover': {
                    background: theme.palette.maskColor.bg
                },
                padding: 1.5
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    style: {
                        minWidth: 30
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                        mainIcon: networkDescriptor?.icon
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                    primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: "16px",
                        display: "flex",
                        alignItems: "center",
                        children: [
                            walletName,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                underline: "none",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: addressLink,
                                width: 14,
                                height: 14,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 14,
                                    color: theme.palette.maskColor.main
                                })
                            })
                        ]
                    }),
                    secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        color: theme.palette.maskColor.second,
                        lineHeight: "16px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                            value: balance.value,
                            decimals: nativeToken?.decimals,
                            formatter: formatBalance/* formatBalance */.a,
                            symbol: nativeToken?.symbol
                        })
                    })
                })
            ]
        })
    });
}
const WalletList = /*#__PURE__*/ (0,react.memo)(function WalletList({ walletProofs, listingAddresses, toggleUnlisted, loading, isValid, identity }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const navigate = (0,dist/* useNavigate */.s0)();
    if (!isValid) return null;
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                size: 36
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                mt: 1.5,
                children: t.loading()
            })
        ]
    });
    if (!walletProofs?.length) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                size: 36
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 14,
                color: theme.palette.maskColor.second,
                mt: 1.5,
                textAlign: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "popups_empty_wallet_proofs_tips",
                    components: {
                        strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                            onClick: ()=>navigate((0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Personas, {
                                    tab: src_constants/* PopupHomeTabType */.$J.ConnectedWallets
                                })),
                            style: {
                                display: 'block',
                                color: theme.palette.maskColor.main,
                                cursor: 'pointer'
                            }
                        })
                    }
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        children: walletProofs?.map((proof, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                checked: listingAddresses.includes(proof.identity),
                proof: proof,
                toggleUnlisted: toggleUnlisted,
                profileIdentity: identity
            }, index))
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/AccountDetail/UI.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        avatar: {
            boxShadow: '0px 6px 12px 0px rgba(120, 120, 120, 0.20)',
            backdropFilter: 'blur(8px)'
        },
        account: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        identity: {
            fontSize: 14,
            fontWeight: 700,
            marginTop: theme.spacing(1.5),
            lineHeight: '18px'
        },
        tips: {
            fontSize: 14,
            lineHeight: '18px',
            marginTop: theme.spacing(2)
        }
    }));
const AccountDetailUI = /*#__PURE__*/ (0,react.memo)(({ account, onVerify, isSupportNextDotID, walletProofs, toggleUnlisted, listingAddresses, loading, onSubmit, submitting })=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const handleBack = (0,react.useCallback)(()=>navigate(-1), []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        height: "100%",
        pb: 9,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                pt: 2,
                px: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.account,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountAvatar/* AccountAvatar */.M, {
                                avatar: account.avatar,
                                network: account.identifier.network,
                                isValid: account.is_valid,
                                classes: {
                                    avatar: classes.avatar
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.identity,
                                children: [
                                    "@",
                                    account.identity
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tips,
                        children: account.is_valid ? t.popups_display_web3_address_tips() : isSupportNextDotID ? t.popups_verify_account_tips() : /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                            i18nKey: "popups_other_social_accounts_tips",
                            components: {
                                strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {})
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletList, {
                        loading: loading,
                        walletProofs: walletProofs,
                        listingAddresses: listingAddresses,
                        toggleUnlisted: toggleUnlisted,
                        isValid: isSupportNextDotID ? account.is_valid : false,
                        identity: account.identity
                    })
                ]
            }),
            isSupportNextDotID ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomController/* BottomController */.L, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        fullWidth: true,
                        onClick: handleBack,
                        children: t.back()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: submitting,
                        fullWidth: true,
                        onClick: account.is_valid ? onSubmit : onVerify,
                        children: account.is_valid ? t.save() : t.popups_verify_account()
                    })
                ]
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/shared/definitions/event.ts
var definitions_event = __webpack_require__(30218);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/AccountDetail/index.tsx






















const AccountDetail = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const theme = (0,useTheme/* default */.Z)();
    const { selectedAccount, currentPersona, walletProofs } = usePersonaContext/* PersonaContext */.m.useContainer();
    const { setExtension } = (0,react.useContext)(useTitle/* PageTitleContext */.I);
    const [pendingUnlistedConfig, setPendingUnlistedConfig] = (0,react.useState)({});
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const isSupportNextDotID = selectedAccount ? constants/* SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID */.ge.includes(selectedAccount.identifier.network) : false;
    const [{ data: unlistedAddressConfig = constants/* EMPTY_OBJECT */.Nu, isInitialLoading, refetch }, updateConfig] = (0,useHiddenAddressConfig/* useUnlistedAddressConfig */.KS)({
        identifier: currentPersona?.identifier,
        pluginID: PluginID/* PluginID */.P.Web3Profile,
        socialIds: isSupportNextDotID && selectedAccount?.is_valid && selectedAccount.identity ? [
            selectedAccount.identity
        ] : constants/* EMPTY_LIST */.rP
    }, (a, b, c, d)=>service/* default */.ZP.Identity.signWithPersona(a, b, c, location.origin, d));
    const listingAddresses = (0,react.useMemo)(()=>{
        if (!selectedAccount?.identity) return constants/* EMPTY_LIST */.rP;
        const pendingUnlistedAddresses = pendingUnlistedConfig[selectedAccount.identity] ?? constants/* EMPTY_LIST */.rP;
        const addresses = walletProofs.map((x)=>x.identity);
        return addresses.filter((x)=>!pendingUnlistedAddresses.includes(x));
    }, [
        pendingUnlistedConfig,
        selectedAccount
    ]);
    const toggleUnlisted = (0,react.useCallback)((identity, address)=>{
        setPendingUnlistedConfig((config)=>{
            const list = config[identity] ?? [];
            return {
                ...config,
                [identity]: list.includes(address) ? list.filter((x)=>x !== address) : [
                    ...list,
                    address
                ]
            };
        });
    }, []);
    const handleDetachProfile = (0,react.useCallback)(async ()=>{
        try {
            if (!selectedAccount?.identifier) return;
            await service/* default */.ZP.SiteAdaptor.disconnectSite(selectedAccount.identifier.network);
            await service/* default */.ZP.Identity.detachProfile(selectedAccount.identifier);
            Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll();
            queryClient/* queryClient */.E.invalidateQueries([
                'next-id',
                'bindings-by-persona',
                pubkey
            ]);
            queryClient/* queryClient */.E.invalidateQueries([
                'my-own-persona-info'
            ]);
            showSnackbar(t.popups_disconnect_success(), {
                variant: 'success'
            });
            providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, definitions_event/* DisconnectEventMap */.l[selectedAccount.identifier.network]);
            await (0,esm/* delay */.gw)(300);
            navigate(-1);
        } catch  {
            showSnackbar(t.popups_disconnect_failed(), {
                variant: 'error'
            });
        }
    }, [
        selectedAccount
    ]);
    const [{ loading: submitting }, handleSubmit] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            await updateConfig(pendingUnlistedConfig);
            showSnackbar(t.popups_save_successfully(), {
                variant: 'success',
                autoHideDuration: 2000
            });
        } catch  {
            showSnackbar(t.popups_save_failed(), {
                variant: 'error'
            });
        }
        refetch();
    }, [
        pendingUnlistedConfig,
        t,
        updateConfig
    ]);
    const pubkey = currentPersona?.identifier.publicKeyAsHex;
    const releaseBinding = (0,react.useCallback)(async ()=>{
        try {
            if (!pubkey || !selectedAccount?.identity || !selectedAccount?.platform) return;
            const result = await entry/* NextIDProof */.q7.createPersonaPayload(pubkey, types/* NextIDAction */.B.Delete, selectedAccount.identity, selectedAccount.platform);
            if (!result) return;
            const signature = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, result.signPayload, currentPersona.identifier, location.origin, true);
            if (!signature) return;
            await service/* default */.ZP.Identity.detachProfileWithNextID(result.uuid, pubkey, selectedAccount.platform, selectedAccount.identity, result.createdAt, {
                signature
            });
            await service/* default */.ZP.Identity.detachProfile(selectedAccount.identifier);
            await service/* default */.ZP.SiteAdaptor.disconnectSite(selectedAccount.identifier.network);
            await (0,esm/* delay */.gw)(1000);
            // Broadcast updates
            Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll();
            Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll();
            await queryClient/* queryClient */.E.refetchQueries([
                'next-id',
                'bindings-by-persona',
                pubkey
            ]);
            await queryClient/* queryClient */.E.refetchQueries([
                'my-own-persona-info'
            ]);
            showSnackbar(t.popups_disconnect_success(), {
                variant: 'success'
            });
            navigate(-1);
        } catch  {
            showSnackbar(t.popups_disconnect_failed(), {
                variant: 'error'
            });
        }
    }, [
        selectedAccount,
        currentPersona
    ]);
    const [, onVerify] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!selectedAccount?.identifier || !currentPersona?.identifier) return;
        await service/* default */.ZP.SiteAdaptor.connectSite(currentPersona.identifier, selectedAccount.identifier.network, selectedAccount.identifier);
        window.close();
    }, [
        selectedAccount,
        currentPersona
    ]);
    (0,useTitle/* useTitle */.Z)(t.popups_social_account());
    (0,react.useEffect)(()=>{
        if (!selectedAccount) navigate(Routes/* PopupRoutes */.mZ.Personas, {
            replace: true
        });
        setExtension(!selectedAccount?.is_valid && selectedAccount?.linkedPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Trash, {
            size: 24,
            onClick: handleDetachProfile
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Disconnect, {
            size: 24,
            onClick: async ()=>{
                if (!currentPersona) return;
                const confirmed = await modals/* ConfirmDialog */.QH.openAndWaitForClose({
                    title: t.popups_disconnect_persona(),
                    confirmVariant: 'warning',
                    message: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "popups_persona_disconnect_tips",
                        components: {
                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                style: {
                                    color: theme.palette.maskColor.main,
                                    wordBreak: 'keep-all'
                                }
                            })
                        },
                        values: {
                            identity: selectedAccount?.identifier.userId,
                            personaName: currentPersona.nickname
                        }
                    })
                });
                if (confirmed) {
                    await releaseBinding();
                }
            }
        }));
        return ()=>setExtension(undefined);
    }, [
        selectedAccount,
        handleDetachProfile,
        currentPersona,
        releaseBinding
    ]);
    (0,useUpdateEffect/* useUpdateEffect */.r)(()=>{
        setPendingUnlistedConfig(unlistedAddressConfig);
    }, [
        JSON.stringify(unlistedAddressConfig)
    ]);
    if (!selectedAccount) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountDetailUI, {
        account: selectedAccount,
        onVerify: onVerify,
        isSupportNextDotID: isSupportNextDotID,
        walletProofs: walletProofs,
        toggleUnlisted: toggleUnlisted,
        listingAddresses: listingAddresses,
        loading: isInitialLoading,
        onSubmit: handleSubmit,
        submitting: submitting
    });
});
/* harmony default export */ const Personas_AccountDetail = (AccountDetail);


/***/ }),

/***/ 16364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ConnectWallet)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
;// CONCATENATED MODULE: ./packages/mask/popups/components/LoadingMask/index.tsx




const LoadingMask = /*#__PURE__*/ (0,react.memo)(function LoadingMask({ text }) {
    const theme = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        width: 180,
        height: 140,
        sx: {
            background: theme.palette.maskColor.tips
        },
        borderRadius: "14px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "10px",
        position: "fixed",
        top: "calc(50% - 70px)",
        left: "calc(50% - 90px)",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                size: 30,
                color: theme.palette.maskColor.bottom
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 14,
                lineHeight: "18px",
                fontWeight: 700,
                color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
                children: text
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/ConnectWallet/index.tsx




















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        provider: {
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            padding: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        accountInfo: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4
        },
        address: {
            color: theme.palette.maskColor.second,
            fontSize: 10,
            lineHeight: '10px',
            display: 'flex',
            alignItems: 'center'
        },
        link: {
            color: theme.palette.maskColor.second,
            height: 10
        },
        description: {
            marginTop: theme.spacing(1.5),
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.maskColor.second
        },
        bounded: {
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.danger,
            marginTop: theme.spacing(1.5)
        },
        congratulation: {
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.second,
            fontWeight: 700
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 160,
            rowGap: 4
        },
        name: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700
        }
    }));
const ConnectWalletPage = /*#__PURE__*/ (0,react.memo)(function ConnectWalletPage() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { providerType, chainId, account } = (0,useContext/* useChainContext */.ql)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)(pluginID, providerType);
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(pluginID, account);
    const { currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const { value: isBound } = (0,useAsync/* default */.Z)(async ()=>{
        if (!account || !currentPersona?.identifier.publicKeyAsHex) return false;
        return entry/* NextIDProof */.q7.queryIsBound(currentPersona.identifier.publicKeyAsHex, types/* NextIDPlatform */.V.Ethereum, account);
    }, [
        account,
        currentPersona?.identifier.publicKeyAsHex
    ]);
    const walletAlias = (0,react.useMemo)(()=>{
        if (domain) return (0,formatter/* formatDomainName */.bc)(domain);
        if (providerType !== src_types/* ProviderType */.lP.MaskWallet) return `${entry/* ProviderResolver */.fh.providerName(providerType)} Wallet`;
        return wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, account))?.name ?? (0,formatter/* formatEthereumAddress */.j8)(account, 4);
    }, [
        JSON.stringify(wallets),
        account,
        domain,
        providerType
    ]);
    const walletName = (0,react.useMemo)(()=>{
        if (providerType === src_types/* ProviderType */.lP.MaskWallet) return wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, account))?.name ?? (domain || (0,formatter/* formatEthereumAddress */.j8)(account, 4));
        return domain || (0,formatter/* formatEthereumAddress */.j8)(account, 4);
    }, [
        providerType,
        account,
        domain,
        JSON.stringify(wallets)
    ]);
    const bindProof = (0,react.useCallback)(async (payload, walletSignature, signature)=>{
        if (!currentPersona) return;
        try {
            await entry/* NextIDProof */.q7.bindProof(payload.uuid, currentPersona.identifier.publicKeyAsHex, types/* NextIDAction */.B.Create, types/* NextIDPlatform */.V.Ethereum, account, payload.createdAt, {
                walletSignature,
                signature
            });
            return true;
        } catch  {
            showSnackbar(t.popups_verify_wallet_bind_fail_tips(), {
                variant: 'error'
            });
            return false;
        }
    }, [
        account,
        currentPersona
    ]);
    const [{ value: signResult, loading }, handleSign] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (!currentPersona?.identifier || !account) return;
            const payload = await entry/* NextIDProof */.q7.createPersonaPayload(currentPersona.identifier.publicKeyAsHex, types/* NextIDAction */.B.Create, account, types/* NextIDPlatform */.V.Ethereum, 'default');
            if (!payload) return;
            const personaSignature = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, payload.signPayload, currentPersona.identifier, location.origin, true);
            const walletSignature = await entry/* Web3 */.Bv.signMessage('message', payload.signPayload, {
                chainId,
                account,
                providerType,
                silent: providerType === src_types/* ProviderType */.lP.MaskWallet
            });
            const result = await bindProof(payload, walletSignature, personaSignature);
            if (result) showSnackbar(t.popups_verify_wallet_sign_success_tips());
            // Broadcast updates
            Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll();
            return true;
        } catch (error) {
            showSnackbar(t.popups_verify_wallet_sign_fail_tips(), {
                variant: 'error'
            });
            return false;
        }
    }, [
        currentPersona,
        account,
        chainId,
        account,
        providerType,
        bindProof
    ]);
    const handleCancel = (0,react.useCallback)(async ()=>{
        if (providerType === src_types/* ProviderType */.lP.MaskWallet || providerType === src_types/* ProviderType */.lP.WalletConnect) {
            navigate(-1);
            return;
        }
        await service/* default */.ZP.Helper.removePopupWindow();
    }, [
        signResult
    ]);
    const handleChooseAnotherWallet = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.SelectProvider);
    }, [
        modalNavigate
    ]);
    const handleDone = (0,react.useCallback)(async ()=>{
        if (providerType !== src_types/* ProviderType */.lP.MaskWallet) await entry/* Web3 */.Bv.disconnect({
            providerType
        });
        if (providerType === src_types/* ProviderType */.lP.MaskWallet) {
            navigate(-1);
            return;
        }
        if (providerType === src_types/* ProviderType */.lP.WalletConnect) {
            navigate((0,dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Personas, {
                tab: constants/* PopupHomeTabType */.$J.ConnectedWallets
            }), {
                replace: true
            });
        }
        await service/* default */.ZP.Helper.removePopupWindow();
    }, [
        providerType,
        navigate
    ]);
    const handleBack = (0,react.useCallback)(()=>{
        navigate((0,dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Personas, {
            tab: constants/* PopupHomeTabType */.$J.ConnectedWallets
        }), {
            replace: true
        });
    }, []);
    (0,useTitle/* useTitle */.Z)(t.plugin_wallet_connect_a_wallet(), handleBack);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            !signResult ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                p: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.provider,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.accountInfo,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                                        size: 30,
                                        mainIcon: providerDescriptor?.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                fontSize: 14,
                                                fontWeight: 700,
                                                lineHeight: "18px",
                                                children: walletAlias
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                className: classes.address,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                                        address: account,
                                                        size: 4,
                                                        formatter: formatter/* formatEthereumAddress */.j8
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                        className: classes.link,
                                                        href: account ? entry/* ExplorerResolver */.Xz.addressLink(chainId, account) : '#',
                                                        target: "_blank",
                                                        title: t.plugin_wallet_view_on_explorer(),
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                            size: 12
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                size: "small",
                                onClick: handleChooseAnotherWallet,
                                children: t.wallet_status_button_change()
                            })
                        ]
                    }),
                    isBound ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.bounded,
                        children: t.popups_verify_wallet_bounded_tips({
                            persona: String(currentPersona?.nickname)
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        children: t.popups_verify_wallet_description()
                    }),
                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingMask, {
                        text: t.signing()
                    }) : null
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            mt: 3,
                            textAlign: 'center'
                        },
                        fontSize: 36,
                        children: "🎉"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 24,
                        lineHeight: "120%",
                        fontWeight: 700,
                        my: 1.5,
                        children: t.congratulations()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.congratulation,
                        children: t.popups_verify_wallet_congratulation_tips({
                            persona: String(currentPersona?.nickname),
                            wallet: walletName
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        py: 3,
                        px: 1.5,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.info,
                                children: [
                                    currentPersona?.avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                        src: currentPersona.avatar,
                                        style: {
                                            width: 36,
                                            height: 36
                                        }
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MenuPersonasActive, {
                                        size: 36,
                                        style: {
                                            borderRadius: 99
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.name,
                                        children: currentPersona?.nickname
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Connect, {
                                size: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.info,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                                        size: 30,
                                        mainIcon: providerDescriptor?.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.name,
                                        children: walletName
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomController/* BottomController */.L, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        fullWidth: true,
                        onClick: handleCancel,
                        children: t.cancel()
                    }),
                    !signResult ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        onClick: handleSign,
                        disabled: loading || isBound,
                        children: t.sign()
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        onClick: handleDone,
                        children: t.done()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const ConnectWallet = (ConnectWalletPage);


/***/ }),

/***/ 41784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var urlcat_dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Wallet.ts
var Wallet = __webpack_require__(58190);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Personas/components/AccountAvatar/index.tsx
var AccountAvatar = __webpack_require__(150);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
// EXTERNAL MODULE: ./packages/mask/popups/components/ConnectSocialAccounts/index.tsx
var ConnectSocialAccounts = __webpack_require__(86329);
;// CONCATENATED MODULE: ./packages/mask/popups/components/SocialAccounts/index.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        tips: {
            textAlign: 'center',
            fontSize: 14,
            lineHeight: '18px',
            marginTop: theme.spacing(2),
            color: theme.palette.maskColor.second
        },
        accounts: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: theme.spacing(1),
            rowGap: theme.spacing(1.5)
        },
        accountItem: {
            padding: theme.spacing(1.5),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 16,
            cursor: 'pointer',
            '&:hover': {
                background: theme.palette.maskColor.bottom,
                boxShadow: theme.palette.maskColor.bottomBg,
                backdropFilter: 'blur(8px)'
            }
        },
        identity: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700,
            marginTop: 6,
            maxWidth: 95
        },
        connect: {
            borderRadius: 16,
            background: theme.palette.maskColor.bg,
            padding: theme.spacing(3.25, 0.5),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
        },
        avatar: {
            boxShadow: '0px 6px 12px 0px rgba(28, 104, 243, 0.20)'
        }
    }));
const SocialAccounts = /*#__PURE__*/ (0,react.memo)(function SocialAccounts({ accounts, networks, onConnect, onAccountClick }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    if (!accounts.length) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialAccounts/* ConnectSocialAccounts */.L, {
                networks: networks,
                onConnect: onConnect
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tips,
                children: t.popups_connect_social_tips()
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.accounts,
        children: [
            accounts.map((account, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.accountItem,
                    onClick: ()=>onAccountClick(account),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountAvatar/* AccountAvatar */.M, {
                            avatar: account.avatar,
                            network: account.identifier.network,
                            isValid: account.is_valid,
                            classes: {
                                avatar: classes.avatar
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.identity,
                            children: [
                                /* identity could mistakenly start with an `@` */ account.identity?.startsWith('@') ? '' : '@',
                                account.identity
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.connect,
                onClick: ()=>modalNavigate(Routes/* PopupModalRoutes */.cY.ConnectSocialAccount),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Connect, {
                        size: 16
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: "18px",
                        children: t.connect()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ProgressiveText/index.tsx
var ProgressiveText = __webpack_require__(5393);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQueries.mjs
var useQueries = __webpack_require__(31369);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useVerifiedWallets.ts
var useVerifiedWallets = __webpack_require__(15799);
;// CONCATENATED MODULE: ./packages/mask/popups/components/ConnectedWallet/index.tsx

















const ConnectedWallet_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        walletList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12
        },
        wallet: {
            padding: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            borderRadius: 16,
            '&:hover': {
                background: theme.palette.maskColor.bottom,
                boxShadow: theme.palette.maskColor.bottomBg
            }
        },
        walletInfo: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 2,
            marginLeft: theme.spacing(0.75)
        },
        walletIcon: {
            boxShadow: '0px 4px 10px 0px rgba(0, 60, 216, 0.20)',
            borderRadius: 12
        },
        walletName: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 100,
            overflow: 'hidden'
        },
        address: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '16px',
            color: theme.palette.maskColor.second,
            display: 'flex',
            alignItems: 'center'
        },
        connect: {
            cursor: 'pointer',
            borderRadius: 16,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: theme.palette.maskColor.bg,
            columnGap: 4,
            padding: '21px 0'
        }
    }));
const ConnectedWallet = /*#__PURE__*/ (0,react.memo)(function ConnectedWallet() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = ConnectedWallet_useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const localWallets = (0,useWallets/* useWallets */.r)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { currentPersona, proofs } = usePersonaContext/* PersonaContext */.m.useContainer();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const { NameService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const wallets = (0,useVerifiedWallets/* useVerifiedWallets */.f)(proofs);
    const queries = (0,useQueries/* useQueries */.h)({
        queries: wallets.map((wallet, index)=>({
                enabled: !!NameService,
                queryKey: [
                    'persona-connected-wallet',
                    wallet.identity,
                    index
                ],
                queryFn: async ()=>{
                    const domain = await NameService?.reverse?.(wallet.identity);
                    if (domain) return domain;
                    const localWallet = localWallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, wallet.identity))?.name;
                    return localWallet || null;
                }
            }))
    });
    // TODO: remove this after next dot id support multiple chain
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, src_types/* ChainId */.a_.Mainnet);
    const handleConfirmRelease = (0,react.useCallback)(async (wallet)=>{
        try {
            if (!currentPersona?.identifier.publicKeyAsHex || !wallet) return;
            const result = await entry/* NextIDProof */.q7.createPersonaPayload(currentPersona.identifier.publicKeyAsHex, types/* NextIDAction */.B.Delete, wallet.identity, wallet.platform);
            if (!result) return;
            const signature = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, result.signPayload, currentPersona.identifier, location.origin, true);
            if (!signature) return;
            await entry/* NextIDProof */.q7.bindProof(result.uuid, currentPersona.identifier.publicKeyAsHex, types/* NextIDAction */.B.Delete, wallet.platform, wallet.identity, result.createdAt, {
                signature
            });
            // Broadcast updates.
            Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll();
            showSnackbar(t.popups_wallet_disconnect_success());
        } catch  {
            showSnackbar(t.popups_wallet_disconnect_failed());
        }
    }, [
        currentPersona
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.walletList,
        children: [
            wallets.map((wallet, index)=>{
                const query = queries[index];
                let walletName = query.data || '';
                if (!walletName && !query.isLoading) {
                    walletName = `${(0,resolver/* resolveNextIDPlatformWalletName */.ww)(wallet.platform)} ${wallets.length - index}`;
                }
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.wallet,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                    size: 24,
                                    icon: networkDescriptor?.icon,
                                    className: classes.walletIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.walletInfo,
                                    component: "div",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                            className: classes.walletName,
                                            component: "span",
                                            skeletonWidth: 60,
                                            skeletonHeight: 16,
                                            loading: query.isLoading,
                                            children: (0,formatter/* formatDomainName */.bc)(walletName, 13)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            component: "span",
                                            className: classes.address,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                                    address: wallet.identity,
                                                    size: 4,
                                                    formatter: formatter/* formatEthereumAddress */.j8
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                    style: {
                                                        width: 14,
                                                        height: 14,
                                                        color: theme.palette.maskColor.main
                                                    },
                                                    href: entry/* ExplorerResolver */.Xz.addressLink(chainId, wallet.identity ?? ''),
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                        size: 14,
                                                        sx: {
                                                            ml: 0.25
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Disconnect, {
                            size: 16,
                            onClick: async ()=>{
                                if (!currentPersona) return;
                                const confirmed = await modals/* ConfirmDialog */.QH.openAndWaitForClose({
                                    title: t.popups_release_bind_wallet_title(),
                                    confirmVariant: 'warning',
                                    message: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                        i18nKey: "popups_wallet_disconnect_tips",
                                        components: {
                                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                style: {
                                                    color: theme.palette.maskColor.main
                                                }
                                            })
                                        },
                                        values: {
                                            wallet: (0,formatter/* formatEthereumAddress */.j8)(wallet.identity, 4)
                                        }
                                    })
                                });
                                if (confirmed) return handleConfirmRelease(wallet);
                            }
                        })
                    ]
                }, index);
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.connect,
                onClick: ()=>modalNavigate(Routes/* PopupModalRoutes */.cY.SelectProvider),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Connect, {
                        size: 16
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: "16px",
                        children: t.connect()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/components/PersonaPublicKey/index.tsx
var PersonaPublicKey = __webpack_require__(99730);
// EXTERNAL MODULE: ./packages/mask/popups/components/PersonaAvatar/index.tsx
var PersonaAvatar = __webpack_require__(80264);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useParamTab.ts
var useParamTab = __webpack_require__(96440);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var src_constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/mask/popups/components/SelectProvider/index.tsx
var SelectProvider = __webpack_require__(83303);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/Home/UI.tsx


















const UI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            flex: 1,
            background: theme.palette.maskColor.bottom,
            display: 'flex',
            flexDirection: 'column'
        },
        info: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        },
        content: {
            padding: 16,
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        },
        titleWrapper: {
            padding: 16,
            display: 'flex',
            marginBottom: 12,
            flexDirection: 'column',
            alignItems: 'center'
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontStyle: 'normal',
            fontWeight: 700
        },
        addPersonaWrapper: {
            display: 'flex',
            width: 368,
            padding: 12,
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            background: theme.palette.maskColor.bottom,
            borderRadius: 8,
            cursor: 'pointer'
        },
        subTitle: {
            color: theme.palette.maskColor.main,
            fontSize: 12,
            fontWeight: 700
        },
        description: {
            color: theme.palette.maskColor.third,
            fontSize: 12,
            fontWeight: 400
        },
        placeholderDescription: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            color: theme.palette.maskColor.third,
            marginTop: theme.spacing(1.5),
            textAlign: 'center'
        },
        edit: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            background: theme.palette.maskColor.bottom,
            borderRadius: 99,
            width: 18,
            height: 18,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        },
        publicKey: {
            fontSize: 12,
            color: theme.palette.maskColor.second
        },
        icon: {
            color: theme.palette.maskColor.second
        },
        settings: {
            position: 'absolute',
            top: 16,
            right: 16
        },
        header: {
            padding: theme.spacing(2),
            lineHeight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.palette.maskColor.line}`
        },
        logo: {
            width: 100,
            height: 28
        },
        menu: {
            color: theme.palette.maskColor.main
        },
        tabs: {
            paddingLeft: 16,
            paddingRight: 16
        },
        groupedButton: {
            // Increasing priority instead of using !important.
            '&&': {
                color: theme.palette.maskColor.second
            }
        },
        panel: {
            padding: theme.spacing(2),
            background: theme.palette.maskColor.bottom,
            flex: 1,
            maxHeight: 288,
            overflow: 'auto'
        },
        mnemonicIcon: {
            background: theme.palette.maskColor.success
        },
        personaIcon: {
            background: theme.palette.maskColor.primary
        },
        iconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            minWidth: 30,
            borderRadius: '100%'
        },
        emptyHeader: {
            height: 140,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: theme.palette.maskColor.whiteBlue
        }
    }));
const PersonaHomeUI = /*#__PURE__*/ (0,react.memo)(({ avatar, fingerprint, nickname, onCreatePersona, onRestore, isEmpty, accounts, networks, onConnect, publicKey, onAccountClick, bindingWallets, hasProofs, hasPaymentPassword })=>{
    const theme = (0,useTheme/* default */.Z)();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const { classes, cx } = UI_useStyles();
    const [currentTab, onChange] = (0,useParamTab/* useParamTab */.V)(src_constants/* PopupHomeTabType */.$J.SocialAccounts);
    const onChangeTab = (0,react.useCallback)((event, value)=>{
        if (settings/* currentMaskWalletLockStatusSettings */.Jg.value === Wallet/* LockStatus */.O.LOCKED && value === src_constants/* PopupHomeTabType */.$J.ConnectedWallets && hasPaymentPassword) {
            navigate((0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Wallet, {
                from: Routes/* PopupRoutes */.mZ.Personas,
                goBack: true,
                popup: true
            }));
            return;
        }
        onChange(event, value);
    }, [
        hasPaymentPassword
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        children: !isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: currentTab,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        background: theme.palette.maskColor.modalTitleBg
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.header,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskSquare, {
                                    className: classes.logo
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.HamburgerMenu, {
                                    className: classes.menu,
                                    onClick: ()=>modalNavigate(Routes/* PopupModalRoutes */.cY.SwitchPersona)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.info,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    position: "relative",
                                    height: "60px",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatar/* PersonaAvatar */.K, {
                                            size: 60,
                                            avatar: avatar,
                                            hasProofs: hasProofs
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.edit,
                                            onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.PersonaAvatarSetting),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Edit, {
                                                size: 12
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 18,
                                    fontWeight: "700",
                                    lineHeight: "22px",
                                    marginTop: "8px",
                                    children: nickname
                                }),
                                fingerprint && publicKey ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaPublicKey/* PersonaPublicKey */.q, {
                                    classes: {
                                        text: classes.publicKey,
                                        icon: classes.icon
                                    },
                                    rawPublicKey: fingerprint,
                                    publicHexString: publicKey,
                                    iconSize: 12
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Settings2, {
                                    size: 20,
                                    className: classes.settings,
                                    onClick: ()=>modalNavigate(Routes/* PopupModalRoutes */.cY.PersonaSettings)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                            onChange: onChangeTab,
                            "aria-label": "persona-tabs",
                            classes: {
                                root: classes.tabs,
                                grouped: classes.groupedButton
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    label: t.popups_social_account(),
                                    value: src_constants/* PopupHomeTabType */.$J.SocialAccounts
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    label: t.popups_connected_wallets(),
                                    value: src_constants/* PopupHomeTabType */.$J.ConnectedWallets
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    className: classes.panel,
                    value: src_constants/* PopupHomeTabType */.$J.SocialAccounts,
                    "data-hide-scrollbar": true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccounts, {
                        accounts: accounts,
                        networks: networks,
                        onConnect: onConnect,
                        onAccountClick: onAccountClick
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    className: classes.panel,
                    value: src_constants/* PopupHomeTabType */.$J.ConnectedWallets,
                    "data-hide-scrollbar": true,
                    children: bindingWallets?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedWallet, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProvider/* SelectProvider */.X, {})
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            "data-hide-scrollbar": true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.emptyHeader,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskSquare, {
                        width: 160,
                        height: 46
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.titleWrapper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t.welcome_to_mask()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.placeholderDescription,
                                    children: t.popups_add_persona_description()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.addPersonaWrapper,
                            onClick: onCreatePersona,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: cx(classes.iconWrapper, classes.personaIcon),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.AddUser, {
                                        size: 20,
                                        color: theme.palette.maskColor.white
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.subTitle,
                                            children: t.popups_create_persona()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.description,
                                            children: t.popups_generate_a_new_persona()
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.addPersonaWrapper,
                            onClick: onRestore,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: cx(classes.iconWrapper, classes.mnemonicIcon),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupRestore, {
                                        size: 20,
                                        color: theme.palette.maskColor.white
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.subTitle,
                                            children: t.popups_restore_and_login()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.description,
                                            children: t.popups_import_persona_description()
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useSupportSocialNetworks.ts
var useSupportSocialNetworks = __webpack_require__(11929);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useHasPassword.ts
var useHasPassword = __webpack_require__(85129);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/Home/index.tsx








const PersonaHome = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,dist/* useNavigate */.s0)();
    const { avatar, currentPersona, setSelectedAccount, personas, accounts, proofs } = usePersonaContext/* PersonaContext */.m.useContainer();
    const { value: definedSocialNetworks = constants/* EMPTY_LIST */.rP } = (0,useSupportSocialNetworks/* useSupportSocialNetworks */.T)();
    const bindingWallets = (0,react.useMemo)(()=>proofs?.filter((x)=>x.platform === types/* NextIDPlatform */.V.Ethereum), [
        proofs
    ]);
    const { hasPassword } = (0,useHasPassword/* useHasPassword */.T)();
    const onCreatePersona = (0,react.useCallback)(()=>{
        browser.tabs.create({
            active: true,
            url: browser.runtime.getURL(`/dashboard.html#${Routes/* DashboardRoutes */.vq.SignUpPersona}`)
        });
        if (navigator.userAgent.includes('Firefox')) {
            window.close();
        }
        service/* default */.ZP.Helper.removePopupWindow();
    }, []);
    const onRestore = (0,react.useCallback)(()=>{
        browser.tabs.create({
            active: true,
            url: browser.runtime.getURL(`/dashboard.html#${Routes/* DashboardRoutes */.vq.RecoveryPersona}`)
        });
        if (navigator.userAgent.includes('Firefox')) {
            window.close();
        }
        service/* default */.ZP.Helper.removePopupWindow();
    }, []);
    const handleConnect = (0,react.useCallback)(async (networkIdentifier)=>{
        if (currentPersona) {
            await service/* default */.ZP.SiteAdaptor.connectSite(currentPersona.identifier, networkIdentifier, undefined, true);
        }
    }, [
        currentPersona
    ]);
    const handleAccountClick = (0,react.useCallback)((account)=>{
        setSelectedAccount(account);
        navigate(Routes/* PopupRoutes */.mZ.AccountDetail);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaHomeUI, {
        hasProofs: !!proofs?.length,
        bindingWallets: bindingWallets,
        accounts: accounts,
        networks: definedSocialNetworks,
        isEmpty: !personas?.length,
        avatar: avatar,
        fingerprint: currentPersona?.identifier.rawPublicKey,
        publicKey: currentPersona?.identifier.publicKeyAsHex,
        nickname: currentPersona?.nickname,
        onCreatePersona: onCreatePersona,
        onRestore: onRestore,
        onConnect: handleConnect,
        onAccountClick: handleAccountClick,
        hasPaymentPassword: hasPassword
    });
});
/* harmony default export */ const Home = (PersonaHome);


/***/ }),

/***/ 78667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personas_PersonaSignRequest)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var type = __webpack_require__(85103);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
;// CONCATENATED MODULE: ./packages/mask/shared-ui/hooks/usePersonasFromDB.ts



const personas = (0,subscription/* createSubscriptionFromAsyncSuspense */.WS)(()=>service/* default */.ZP.Identity.queryOwnedPersonaInformation(true), Messages/* MaskMessages */.q.events.ownPersonaChanged.on);
/**
 * Get all owned personas from DB
 */ function usePersonasFromDB() {
    return (0,use_subscription.useSubscription)(personas);
}

// EXTERNAL MODULE: ./packages/mask/popups/components/SignRequestInfo/index.tsx
var SignRequestInfo = __webpack_require__(98875);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/PersonaSignRequest/index.tsx













const PersonaSignRequest = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const [requestID, setRequestID] = (0,react.useState)();
    const [message, setMessage] = (0,react.useState)('');
    const [selected, setSelected] = (0,react.useState)();
    const personas = usePersonasFromDB();
    const { currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const source = params.get('source');
    (0,react.useEffect)(()=>{
        if (!personas.length) return;
        const messageInURL = params.get('message');
        const requestIDInURL = params.get('requestID');
        const identifierInURL = params.get('identifier');
        const selectedPersona = personas.find((x)=>x.identifier.toText() === identifierInURL) ?? personas[0];
        if (!messageInURL || !requestIDInURL || !selectedPersona) {
            navigate(Routes/* PopupRoutes */.mZ.Wallet, {
                replace: true
            });
        } else {
            setSelected(selectedPersona);
            setMessage(messageInURL);
            setRequestID(requestIDInURL);
        }
    }, [
        personas,
        params
    ]);
    const [{ loading: confirmLoading }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!requestID || !selected) return;
        const selectedPersona = selected.identifier;
        Messages/* MaskMessages */.q.events.personaSignRequest.sendToBackgroundPage({
            requestID,
            selectedPersona
        });
        const method = params.get('method');
        if (!method) {
            window.close();
            return;
        }
        // sign request from popup
        switch(method){
            case type/* MethodAfterPersonaSign */.ug.DISCONNECT_NEXT_ID:
                if (!message) break;
                const signature = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, message, selectedPersona, location.origin, true);
                const profileIdentifier = params.get('profileIdentifier');
                const platform = params.get('platform');
                const identity = params.get('identity');
                const createdAt = params.get('createdAt');
                const uuid = params.get('uuid');
                if (!signature || !profileIdentifier || !platform || !identity || !createdAt || !uuid || !currentPersona?.identifier.publicKeyAsHex) break;
                await service/* default */.ZP.Identity.detachProfileWithNextID(uuid, currentPersona.identifier.publicKeyAsHex, platform, identity, createdAt, {
                    signature
                });
                const profile = currentPersona.linkedProfiles.find((x)=>x.identifier.toText() === profileIdentifier);
                if (!profile) break;
                await service/* default */.ZP.Identity.detachProfile(profile.identifier);
                break;
        }
        navigate(-1);
    }, [
        params,
        selected,
        requestID,
        message,
        currentPersona
    ]);
    const [{ loading: cancelLoading }, handleCancel] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!requestID) return;
        Messages/* MaskMessages */.q.events.personaSignRequest.sendToBackgroundPage({
            requestID
        });
        const method = params.get('method');
        if (!method) window.close();
        navigate(-1);
    }, [
        requestID,
        params
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        p: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SignRequestInfo/* SignRequestInfo */.a, {
                message: message,
                source: source
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomController/* BottomController */.L, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: cancelLoading,
                        onClick: handleCancel,
                        fullWidth: true,
                        variant: "outlined",
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: confirmLoading,
                        onClick: handleConfirm,
                        fullWidth: true,
                        children: t.sign()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Personas_PersonaSignRequest = (PersonaSignRequest);


/***/ }),

/***/ 35058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99116);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7387);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23023);
/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40514);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37377);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        header: {
            background: theme.palette.maskColor.modalTitleBg,
            padding: theme.spacing(2)
        },
        icon: {
            padding: theme.spacing(1.2, 0),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            marginTop: 14,
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 700,
            textAlign: 'center'
        },
        qrcode: {
            width: 250,
            height: 250,
            boxShadow: theme.palette.maskColor.bottomBg,
            borderRadius: theme.spacing(2),
            overflow: 'hidden'
        },
        halo: {
            position: 'relative',
            zIndex: 2,
            overflow: 'hidden',
            '&:before': {
                position: 'absolute',
                left: '-10%',
                top: 10,
                zIndex: 1,
                content: '""',
                height: 256,
                width: 256,
                backgroundImage: isDark ? 'radial-gradient(50% 50.00% at 50% 50.00%, #443434 0%, rgba(68, 52, 52, 0.00) 100%)' : 'radial-gradient(50% 50.00% at 50% 50.00%, #FFE9E9 0%, rgba(255, 233, 233, 0.00) 100%)'
            },
            '&:after': {
                position: 'absolute',
                left: '70%',
                top: 20,
                zIndex: 1,
                content: '""',
                height: 256,
                width: 256,
                backgroundImage: isDark ? 'radial-gradient(50% 50.00% at 50% 50.00%, #605675 0%, rgba(56, 51, 67, 0.00) 100%)' : 'radial-gradient(50% 50.00% at 50% 50.00%, #F0E9FF 0%, rgba(240, 233, 255, 0.00) 100%)'
            }
        },
        qrcodeContainer: {
            width: 282,
            margin: theme.spacing(2, 'auto', 0),
            padding: theme.spacing(2),
            backgroundColor: theme.palette.maskColor.bottom,
            position: 'relative',
            zIndex: 10
        },
        tip: {
            fontSize: 12,
            marginTop: 10,
            textAlign: 'center',
            color: theme.palette.maskColor.second
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function WalletConnect() {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .s0)();
    const { classes } = useStyles();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .TH)();
    const uri = location.state?.uri;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CrossIsolationMessages */ .W.events.popupWalletConnectEvent.on(({ open })=>{
            if (open) return;
            navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes */ .mZ.ConnectWallet, {
                replace: true
            });
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__.ArrowBack, {
                            onClick: ()=>navigate(-1)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.icon,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__.MaskWallet, {
                            size: 64
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: classes.title,
                children: t.wallet_connect()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.halo,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: classes.qrcodeContainer,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.qrcode,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__.QRCode, {
                            value: uri,
                            ecLevel: "L",
                            size: 220,
                            quietZone: 16,
                            eyeRadius: 100,
                            qrStyle: "dots"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: classes.tip,
                children: t.wallet_connect_tips()
            })
        ]
    });
}));


/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AccountAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55106);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16044);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77953);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            position: 'relative',
            width: 40,
            height: 40
        },
        avatar: {
            width: 40,
            height: 40,
            fontSize: 60,
            borderRadius: 99
        },
        network: {
            height: 14,
            width: 14,
            borderRadius: 99,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            right: -7,
            bottom: 0
        },
        valid: {
            width: 6,
            height: 6,
            borderRadius: 99,
            border: `1px solid ${theme.palette.maskColor.bottom}`,
            position: 'absolute',
            top: 3,
            right: 2,
            backgroundColor: theme.palette.maskColor.warn
        }
    }));
const AccountAvatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ avatar, network, isValid, ...props })=>{
    const { classes } = useStyles(undefined, {
        props
    });
    const Icon = network ? _masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .SOCIAL_MEDIA_ROUND_ICON_MAPPING */ .hA[network] : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.container,
        children: [
            avatar ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.avatar,
                src: avatar
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.GrayMasks, {
                className: classes.avatar
            }),
            Icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.network,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                    size: 14
                })
            }) : null,
            !isValid && network === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EnhanceableSite */ .J.Twitter ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.valid
            }) : null
        ]
    });
});


/***/ }),

/***/ 84741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personas)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(78678);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/relativeRouteOf.ts
var relativeRouteOf = __webpack_require__(84582);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useUpdateEffect/index.js + 2 modules
var useUpdateEffect = __webpack_require__(6249);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/components/PersonaHeader/UI.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            background: theme.palette.maskColor.modalTitleBg,
            padding: '11px 16px',
            lineHeight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        logo: {
            width: 96,
            height: 30
        },
        action: {
            background: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 6px 0px rgba(0, 0, 0, 0.10)' : '0px 4px 6px 0px rgba(102, 108, 135, 0.10)',
            borderRadius: 99,
            padding: '5px 8px 5px 4px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        avatar: {
            marginRight: 4,
            width: 30,
            height: 30
        },
        nickname: {
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700
        },
        identifier: {
            fontSize: 10,
            color: theme.palette.maskColor.second,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            width: 12,
            height: 12,
            color: theme.palette.maskColor.main,
            cursor: 'pointer',
            marginLeft: 4
        }
    }));
const PersonaHeaderUI = /*#__PURE__*/ (0,react.memo)(({ avatar, fingerprint, nickname, publicHexString })=>{
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Mask, {
                className: classes.logo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.action,
                children: [
                    avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: avatar,
                        className: classes.avatar
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Masks, {
                        className: classes.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.nickname,
                                children: (0,personas/* formatPersonaName */.rY)(nickname)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.identifier,
                                children: [
                                    (0,personas/* formatPersonaFingerprint */.Nb)(fingerprint ?? '', 4),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        underline: "none",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: `https://web3.bio/${publicHexString}`,
                                        className: classes.icon,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 12
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/components/PersonaHeader/index.tsx









const PersonaHeader = /*#__PURE__*/ (0,react.memo)(function PersonaHeader() {
    const location = (0,dist/* useLocation */.TH)();
    const { currentPersona, avatar } = usePersonaContext/* PersonaContext */.m.useContainer();
    const { setExtension } = (0,react.useContext)(useTitle/* PageTitleContext */.I);
    const matchHome = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.Personas);
    const matchWalletConnect = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.WalletConnect);
    const matchProfilePhoto = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.PersonaAvatarSetting);
    const matchSignRequest = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.PersonaSignRequest);
    (0,useUpdateEffect/* useUpdateEffect */.r)(()=>{
        setExtension(undefined);
    }, [
        location.pathname,
        setExtension
    ]);
    if (matchSignRequest && currentPersona) return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaHeaderUI, {
        avatar: avatar,
        fingerprint: currentPersona.identifier.rawPublicKey,
        nickname: currentPersona.nickname,
        publicHexString: currentPersona.identifier.publicKeyAsHex
    });
    if (matchHome || matchWalletConnect || matchProfilePhoto) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {});
});

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Personas/index.tsx








const Home = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 41784)));
const Logout = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 423).then(__webpack_require__.bind(__webpack_require__, 7696)));
const PersonaSignRequest = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 78667)));
const AccountDetail = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90025)));
const ConnectWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16364)));
const WalletConnect = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35058)));
const ExportPrivateKey = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8343).then(__webpack_require__.bind(__webpack_require__, 58343)));
const PersonaAvatarSetting = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(8672), __webpack_require__.e(9759), __webpack_require__.e(6949), __webpack_require__.e(2486), __webpack_require__.e(3104), __webpack_require__.e(7690)]).then(__webpack_require__.bind(__webpack_require__, 67690)));
const r = (0,relativeRouteOf/* relativeRouteOf */.Y)(Routes/* PopupRoutes */.mZ.Personas);
const Persona = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,dist/* useNavigate */.s0)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    (0,useMount/* default */.Z)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.popupWalletConnectEvent.on(({ open, uri })=>{
            if (!open || location.href.includes(Routes/* PopupRoutes */.mZ.WalletConnect)) return;
            navigate(Routes/* PopupRoutes */.mZ.WalletConnect, {
                replace: location.hash.includes('/modal/select-provider'),
                state: {
                    uri
                }
            });
        });
    });
    (0,react.useEffect)(()=>{
        const from = params.get('from');
        const providerType = params.get('providerType');
        if (from === Routes/* PopupModalRoutes */.cY.SelectProvider && !!providerType) {
            modalNavigate(Routes/* PopupModalRoutes */.cY.ConnectProvider, {
                providerType
            });
        }
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.Logout),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Logout, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.PersonaSignRequest),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSignRequest, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.AccountDetail),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountDetail, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.ConnectWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.WalletConnect),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnect, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.ExportPrivateKey),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExportPrivateKey, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: r(Routes/* PopupRoutes */.mZ.PersonaAvatarSetting),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatarSetting, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                        path: "*",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Home, {})
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Personas = (Persona);


/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 22103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 22596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ MaskTabList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ButtonGroup/ButtonGroup.js
var ButtonGroup = __webpack_require__(8952);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/BaseTab.tsx



const BaseTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 36,
        lineHeight: '18px',
        boxShadow: activated ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(1.5)} ${theme.spacing(1.5)} 0px 0px !important`,
        color: activated ? theme.palette.maskColor.main : theme.palette.maskColor.secondaryDark,
        fontSize: 16,
        fontWeight: 'bold',
        '&:hover': {
            boxShadow: activated ? '0 0 20px rgba(0, 0, 0, 0.05)' : 'none',
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        },
        // If there is only single one tab.
        '&:first-of-type:last-of-type': {
            maxWidth: '25%'
        }
    }));
const BaseTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BaseTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: (e)=>handleClick(e),
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/FlexibleTab.tsx



const FlexibleTabTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flexShrink: 0,
        flexGrow: 0,
        padding: theme.spacing(1.25, 1.5),
        height: 38,
        lineHeight: '16px',
        minWidth: theme.spacing(3),
        background: activated ? theme.palette.maskColor.input : 'transparent',
        borderRadius: `${theme.spacing(1)} !important`,
        color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold !important',
        '&:hover': {
            background: activated ? theme.palette.maskColor.input : 'transparent',
            color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.primary,
            boxShadow: 'none'
        }
    }));
const FlexibleTab = /*#__PURE__*/ (0,react.memo)((props)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const { isVisitable, ...rest } = props;
    const ref = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!activated) return;
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!visitable) onChange?.({}, String(value), visitable);
    }, []);
    const handleClick = (event)=>{
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!activated && onChange) onChange(event, String(value), visitable);
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleTabTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...rest,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBackIosNew.js


/* harmony default export */ const ArrowBackIosNew = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
}), 'ArrowBackIosNew'));
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useClickAway.js
var useClickAway = __webpack_require__(47824);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/RoundTab.tsx



const RoundTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 34,
        lineHeight: '16px',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(2)} !important`,
        color: activated ? theme.palette.text.primary : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
        '&:hover': {
            boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
            color: theme.palette.text.primary,
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        }
    }));
const RoundTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoundTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/index.tsx









const defaultTabSize = 38;
const ArrowButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme })=>({
        position: 'absolute',
        top: 0,
        right: 0,
        padding: theme.spacing(1.5),
        height: defaultTabSize,
        width: defaultTabSize,
        minWidth: `${defaultTabSize}px !important`,
        background: theme.palette.background.input,
        '&:hover': {
            background: theme.palette.background.input
        }
    }));
const ArrowBackIosNewIconWrap = (0,styled/* default */.ZP)(ArrowBackIosNew)(({ theme })=>({
        color: theme.palette.text.primary,
        width: 16,
        borderRadius: '0 8px 8px 0'
    }));
const FlexibleButtonGroupPanel = (0,styled/* default */.ZP)(Box/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'isOpen'
})(({ theme, isOpen = false })=>({
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        padding: theme.spacing(1.5),
        maxWidth: 'calc(100% - 24px)',
        width: 'calc(100% - 24px)',
        boxShadow: isOpen ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        backdropFilter: 'blur(20px)',
        background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
        boxSizing: 'content-box'
    }));
const ButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant'
})(({ theme, maskVariant = 'base' })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflowY: 'clip',
        flex: 1,
        gap: theme.spacing(1),
        ...maskVariant === 'round' ? {
            padding: theme.spacing(0.5),
            background: theme.palette.maskColor.input,
            borderRadius: 18
        } : maskVariant === 'flexible' ? {
            background: 'transparent',
            borderRadius: 0
        } : {
            marginTop: theme.spacing(-1),
            paddingTop: theme.spacing(1),
            background: 'transparent',
            borderRadius: 0
        }
    }));
const FlexButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant' && prop !== 'isOpen' && prop !== 'isOverflow'
})(({ theme, maskVariant = 'base', isOpen = false, isOverflow = false })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: isOpen ? 'wrap' : 'nowrap',
        overflow: 'hidden',
        flex: 1,
        maxWidth: '100%',
        paddingRight: isOpen ? defaultTabSize : 0,
        gap: maskVariant !== 'base' ? theme.spacing(1) : 0,
        borderRadius: 0,
        background: !isOpen && isOverflow ? theme.palette.mode === 'light' ? `linear-gradient(270deg, rgba(255,255,255,1) ${defaultTabSize}px, rgba(223, 229, 244, 0.8) ${defaultTabSize}px, rgba(244, 247, 254, 0) 72px)` : `linear-gradient(270deg, transparent ${defaultTabSize}px, rgba(49, 49, 49, 0.8) ${defaultTabSize}px, rgba(23, 23, 23, 0) 72px)` : 'transparent'
    }));
const tabMapping = {
    flexible: FlexibleTab,
    round: RoundTab,
    base: BaseTab
};
/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTabs('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <MaskTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </MaskTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const MaskTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    const classes = props.classes;
    const [open, handleToggle] = (0,react.useState)(false);
    const [isTabsOverflow, setIsTabsOverflow] = (0,react.useState)(false);
    const [firstId, setFirstTabId] = (0,react.useState)(context?.value);
    const innerRef = (0,react.useRef)(null);
    const anchorRef = (0,react.useRef)(null);
    const flexPanelRef = (0,react.useRef)(null);
    const { width } = (0,useWindowSize/* default */.Z)();
    if (context === null) throw new TypeError('No TabContext provided');
    const { onChange, variant = 'base', hideArrowButton, ...rest } = props;
    (0,react.useImperativeHandle)(ref, ()=>innerRef?.current);
    // #region hide tab should up to first when chick
    (0,react.useEffect)(()=>{
        if (!innerRef?.current) return;
        const current = innerRef.current;
        setIsTabsOverflow(current.scrollWidth >= current.clientWidth + defaultTabSize);
    }, [
        innerRef?.current,
        width
    ]);
    // #endregion
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) throw new TypeError('Invalided Children');
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            className: child.props.className,
            onChange: (event, value, visitable)=>{
                handleToggle(false);
                props.onChange(event, value);
                if (variant === 'flexible' && !visitable) {
                    setFirstTabId(value);
                }
            }
        };
        if (child.type !== Tab/* default */.Z) return child;
        if (variant === 'flexible') {
            Object.assign(extra, {
                // if move tab to first in flexible tabs
                isVisitable: (top, right)=>{
                    const anchor = anchorRef.current?.getBoundingClientRect();
                    return right <= (anchor?.right ?? 0) - defaultTabSize && top - (anchor?.top ?? 0) < defaultTabSize;
                }
            });
        }
        const C = tabMapping[variant];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(C, {
            value: child.props.value,
            ...extra,
            children: child.props.label
        });
    });
    // #region hide tab should up to first when chick
    const flexibleTabs = (0,react.useMemo)(()=>{
        if (variant !== 'flexible') return null;
        return children?.sort((a, b)=>{
            if (a.props.value === firstId) return -1;
            if (b.props.value === firstId) return 1;
            return 0;
        });
    }, [
        firstId,
        children
    ]);
    // #endregion
    // #region Should close panel when click other area
    (0,useClickAway/* default */.Z)(flexPanelRef, (event)=>{
        if (variant !== 'flexible') return;
        const { left, right, top, bottom } = innerRef.current?.getBoundingClientRect() ?? {
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
        };
        const pointerX = event.x ?? 0;
        const pointerY = event.y ?? 0;
        if (pointerX > right || pointerX < left || pointerY < top || pointerY > bottom) handleToggle(false);
    });
    // #endregion
    if (variant === 'flexible') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            position: "relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
                    maskVariant: variant,
                    ref: anchorRef,
                    style: {
                        visibility: 'hidden',
                        height: defaultTabSize
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleButtonGroupPanel, {
                    isOpen: !!(open && isTabsOverflow),
                    ref: flexPanelRef,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexButtonGroupWrap, {
                        maskVariant: variant,
                        isOpen: open,
                        isOverflow: !!(isTabsOverflow && !hideArrowButton),
                        ...rest,
                        ref: innerRef,
                        role: "tablist",
                        children: [
                            flexibleTabs,
                            (isTabsOverflow || open) && !hideArrowButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowButtonWrap, {
                                className: classes?.arrowButton,
                                variant: "text",
                                size: "small",
                                "aria-controls": open ? 'split-button-menu' : undefined,
                                "aria-expanded": open ? 'true' : undefined,
                                "aria-label": "select tabs list",
                                "aria-haspopup": "menu",
                                onClick: ()=>handleToggle(!open),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackIosNewIconWrap, {
                                    sx: {
                                        transform: open ? 'rotate(90deg)' : 'rotate(270deg)'
                                    }
                                })
                            }) : null
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
        maskVariant: variant,
        ...rest,
        ref: innerRef,
        role: "tablist",
        children: children
    });
});
MaskTabList.displayName = 'MaskTabList';


/***/ }),

/***/ 66117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KS: () => (/* binding */ useUnlistedAddressConfig),
/* harmony export */   Nl: () => (/* binding */ useHiddenAddressConfigOf)
/* harmony export */ });
/* unused harmony exports useHiddenAddressConfig, hiddenAddressesAdapter, getHiddenAddressesOf */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95766);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);




/**
 *
 * Get unlisted address by persona pubkey.
 *
 * @param personaPubkey The persona identifier in hex string
 * @param pluginID The plugin id as store key
 * @returns
 */ function useHiddenAddressConfig(personaPubkey, pluginID, signWithPersona) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'hidden-address',
            pluginID,
            personaPubkey
        ],
        enabled: !!personaPubkey,
        queryFn: async ()=>{
            if (!pluginID || !personaPubkey) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
            const storage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3Storage */ .xk.createNextIDStorage(personaPubkey, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NextIDPlatform */ .V.NextID, personaPubkey, signWithPersona);
            const result = await storage.get(pluginID);
            if (!result) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
            // When the tips data is legacy
            if (Array.isArray(result)) return result;
            if (!result.hiddenAddresses) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
            if (Array.isArray(result.hiddenAddresses)) return result.hiddenAddresses;
            return result.hiddenAddresses ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
        }
    });
}
function useHiddenAddressConfigOf(personaPubkey, pluginID, socialId, signWithPersona) {
    const result = useHiddenAddressConfig(personaPubkey, pluginID, signWithPersona);
    return {
        ...result,
        // Identities of Twitter proof get lowered case.
        data: result.data ? getHiddenAddressesOf(result.data, socialId?.toLowerCase()) : undefined
    };
}
/** To update storage, a signer is required */ /** For data migration */ /**
 * Provider address config and data updater
 */ function useUnlistedAddressConfig({ identifier, pluginID, socialIds }, signWithPersona) {
    const query = useHiddenAddressConfig(identifier?.publicKeyAsHex, pluginID, signWithPersona);
    const { data: unlistedAddressConfig } = query;
    const migratedUnlistedAddressConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!unlistedAddressConfig || !socialIds?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
        if (!Array.isArray(unlistedAddressConfig)) return unlistedAddressConfig;
        return hiddenAddressesAdapter(unlistedAddressConfig, socialIds);
    }, [
        unlistedAddressConfig,
        socialIds
    ]);
    const updateConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (config)=>{
        if (!identifier) return;
        const storage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3Storage */ .xk.createNextIDStorage(identifier.publicKeyAsHex, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NextIDPlatform */ .V.NextID, identifier, signWithPersona);
        await storage.set(pluginID, {
            hiddenAddresses: config
        });
    }, [
        pluginID,
        identifier
    ]);
    return [
        {
            ...query,
            data: migratedUnlistedAddressConfig
        },
        updateConfig
    ];
}
function hiddenAddressesAdapter(list, accounts) {
    return Object.fromEntries(accounts.map((account)=>[
            account,
            list
        ]));
}
function getHiddenAddressesOf(config, socialId) {
    if (!config) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
    if (Array.isArray(config)) return config;
    return socialId ? config[socialId] ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
}


/***/ }),

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 65587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ TabContext),
/* harmony export */   _i: () => (/* binding */ useTabContext),
/* harmony export */   pQ: () => (/* binding */ getTabId),
/* harmony export */   uU: () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 80234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(505);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useThemeProps.js
var useThemeProps = __webpack_require__(15973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(64696);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(83018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ })

}]);
//# sourceMappingURL=chunk.4741.js.map