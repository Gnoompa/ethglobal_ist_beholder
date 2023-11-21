"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6305],{

/***/ 56305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChangeOwner)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(54225);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/Wallet.json
var Wallet = __webpack_require__(49734);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Popover/Popover.js
var Popover = __webpack_require__(66069);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(79673);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/radioClasses.js
var radioClasses = __webpack_require__(68023);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
;// CONCATENATED MODULE: ./packages/mask/popups/components/StyledRadio/index.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            '&:hover': {
                backgroundColor: 'transparent'
            },
            color: theme.palette.maskColor.secondaryLine,
            [`&.${radioClasses/* default */.Z.checked} svg`]: {
                filter: 'drop-shadow(0px 4px 10px rgba(28, 104, 243, 0.2))'
            },
            [`&.${radioClasses/* default */.Z.disabled} svg`]: {
                color: theme.palette.maskColor.secondaryLine,
                '& circle': {
                    fill: `${theme.palette.maskColor.bg} !important`
                }
            }
        }
    }));
const StyledRadio = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
        ...props,
        classes: {
            root: classes.root
        },
        inputRef: ref,
        checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonChecked, {
            size: 20
        }),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonUnChecked, {
            size: 20
        }),
        disableRipple: true
    });
}));

// EXTERNAL MODULE: ./packages/mask/popups/hooks/usePopupContext.ts
var usePopupContext = __webpack_require__(26332);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/popups/components/PersonaAvatar/index.tsx
var PersonaAvatar = __webpack_require__(80264);
// EXTERNAL MODULE: ./packages/mask/popups/components/GasSettingMenu/index.tsx + 1 modules
var GasSettingMenu = __webpack_require__(69516);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/ChangeOwner/index.tsx

























const ChangeOwner_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            padding: theme.spacing(2)
        },
        title: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '16px',
            color: theme.palette.maskColor.main
        },
        list: {
            padding: 0,
            maxHeight: 212,
            overflow: 'auto',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        primaryItem: {
            margin: 0,
            cursor: 'default',
            borderRadius: 8,
            background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.90) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.20) 1.03%, rgba(98, 152, 234, 0.20) 1.04%, rgba(98, 126, 234, 0.20) 100%)' : 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)'
        },
        secondItem: {
            margin: 0,
            borderRadius: 8,
            cursor: 'default',
            background: theme.palette.maskColor.bottom,
            border: `1px solid ${theme.palette.maskColor.line}`
        },
        primaryItemText: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        primaryItemSecondText: {
            display: 'flex',
            fontSize: 12,
            fontWeight: 400,
            color: theme.palette.maskColor.second,
            WebkitTextSizeAdjust: '100%'
        },
        walletAddress: {
            marginRight: 4,
            transform: 'scale(0.8333)',
            transformOrigin: 'left'
        },
        walletInfo: {
            marginLeft: 12,
            height: 38,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        item: {
            display: 'flex',
            padding: theme.spacing(1.5),
            alignItems: 'center',
            cursor: 'pointer',
            justifyContent: 'space-between',
            background: theme.palette.maskColor.bottom
        },
        primaryItemBox: {
            display: 'flex',
            alignItems: 'center',
            height: 36
        },
        paper: {
            padding: theme.spacing(1.5),
            borderRadius: 16,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            background: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px 0px rgba(255, 255, 255, 0.15)' : '0px 4px 30px 0px rgba(0, 0, 0, 0.10)'
        },
        popoverTitle: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'space-between'
        },
        identity: {
            fontSIze: 14,
            lineHeight: '18px',
            color: '#767F8D',
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            fontWeight: 600,
            padding: '9px 0',
            fontSize: 14,
            lineHeight: '20px'
        },
        disabledItem: {
            opacity: 0.5
        },
        linkIcon: {
            color: theme.palette.maskColor.main,
            cursor: 'pointer',
            width: 16,
            height: 16,
            marginRight: 4
        },
        avatar: {
            borderRadius: '50%',
            height: 24,
            width: 24,
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.2)
        },
        input: {
            fontSize: 13
        },
        label: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: theme.palette.maskColor.second,
            fontWeight: 700
        }
    }));
var ManagerAccountType;
(function(ManagerAccountType) {
    ManagerAccountType["Wallet"] = "Wallet";
    ManagerAccountType["Persona"] = "Persona";
})(ManagerAccountType || (ManagerAccountType = {}));
const FALLBACK_GAS = 50000;
function ChangeOwner() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = ChangeOwner_useStyles();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [manageAccount, setManageAccount] = (0,react.useState)();
    const { smartPayChainId } = (0,unstated_next/* useContainer */.u)(usePopupContext/* PopupContext */.t);
    const { data: personaManagers } = (0,useQuery/* useQuery */.a)([
        'persona-managers'
    ], ()=>service/* default */.ZP.Identity.queryOwnedPersonaInformation(true), {
        networkMode: 'always'
    });
    const chainContextValue = (0,react.useMemo)(()=>({
            chainId: smartPayChainId
        }), [
        smartPayChainId
    ]);
    const [paymentToken, setPaymentToken] = (0,react.useState)('');
    const [gasConfig, setGasConfig] = (0,react.useState)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const walletManagers = (0,react.useMemo)(()=>wallets.filter((x)=>!x.owner), [
        wallets
    ]);
    const walletManager = (0,react.useMemo)(()=>walletManagers.find((x)=>!x.owner && (0,isSameAddress/* isSameAddress */.W)(wallet?.owner, x.address)), [
        walletManagers,
        wallet
    ]);
    const personaManager = (0,react.useMemo)(()=>personaManagers?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(wallet?.owner, x.address)), [
        personaManagers,
        wallet
    ]);
    const managerAddress = walletManager?.address ?? personaManager?.address;
    const { value: gas } = (0,useAsync/* default */.Z)(async ()=>{
        const contract = entry/* Contract */.CH.getWeb3Contract(wallet?.address, Wallet);
        if (!manageAccount?.address || !wallet?.address) return;
        const tx = {
            from: wallet.address,
            to: wallet.address,
            data: contract?.methods.changeOwner(manageAccount.address).encodeABI()
        };
        const gas = await entry/* Web3 */.Bv.estimateTransaction?.(tx, FALLBACK_GAS);
        return gas ? Number.parseInt(gas, 16).toString() : FALLBACK_GAS.toString();
    }, [
        manageAccount?.address,
        wallet?.address
    ]);
    const [{ loading: loadingHandleConfirm }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!manageAccount?.address || !wallet) return;
        const hash = await entry/* Web3 */.Bv.changeOwner?.(manageAccount.address, {
            chainId: smartPayChainId,
            account: wallet?.address,
            providerType: types/* ProviderType */.lP.MaskWallet,
            owner: wallet?.owner,
            identifier: ec_key/* ECKeyIdentifier */.o.from(wallet.identifier).unwrapOr(undefined),
            gasOptionType: gasConfig?.gasOptionType,
            overrides: gasConfig
        });
        if (!hash) return;
        const receipt = await entry/* Web3 */.Bv.confirmTransaction(hash, {
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (!receipt.status) return;
        await entry/* Web3 */.Bv.updateWallet?.(wallet.address, {
            owner: manageAccount.address,
            identifier: manageAccount.identifier?.toText()
        }, {
            providerType: types/* ProviderType */.lP.MaskWallet
        });
    }, [
        manageAccount,
        smartPayChainId,
        wallet,
        gasConfig
    ]);
    const disabled = !manageAccount?.address || !wallet || loadingHandleConfirm;
    (0,useTitle/* useTitle */.Z)(t.popups_wallet_change_owner());
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: cx(classes.item, classes.primaryItem),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.primaryItemBox,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                                    size: 24
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.walletInfo,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.primaryItemText,
                                            children: wallet?.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.primaryItemSecondText,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.walletAddress,
                                                    style: {
                                                        width: 264
                                                    },
                                                    children: wallet?.address
                                                }),
                                                wallet?.address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                            size: 16,
                                                            className: classes.linkIcon,
                                                            text: wallet.address
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                            href: entry/* ExplorerResolver */.Xz.addressLink(chainId, wallet.address),
                                                            target: "_blank",
                                                            title: t.view_on_explorer(),
                                                            rel: "noopener noreferrer",
                                                            onClick: (event)=>{
                                                                event.stopPropagation();
                                                            },
                                                            className: classes.linkIcon,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                                size: 16,
                                                                className: classes.linkIcon
                                                            })
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        sx: {
                            mb: 2,
                            mt: 2
                        },
                        children: t.popups_wallet_settings_current_management_account()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: cx(classes.item, classes.secondItem),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.primaryItemBox,
                            children: [
                                walletManager ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ETH, {
                                    size: 24
                                }) : personaManager ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.avatar,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatar/* PersonaAvatar */.K, {
                                        avatar: personaManager.avatar,
                                        size: 24
                                    })
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.walletInfo,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.primaryItemText,
                                            children: walletManager?.name ?? personaManager?.nickname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.primaryItemSecondText,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.walletAddress,
                                                    style: {
                                                        width: 264
                                                    },
                                                    children: managerAddress
                                                }),
                                                managerAddress ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                            size: 16,
                                                            className: classes.linkIcon,
                                                            text: managerAddress
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                            href: walletManager ? entry/* ExplorerResolver */.Xz.addressLink(chainId, managerAddress) : (0,dist/* default */.ZP)('https://web3.bio/', {
                                                                s: managerAddress
                                                            }),
                                                            target: "_blank",
                                                            title: t.view_on_explorer(),
                                                            rel: "noopener noreferrer",
                                                            onClick: (event)=>{
                                                                event.stopPropagation();
                                                            },
                                                            className: classes.linkIcon,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                                size: 16,
                                                                className: classes.linkIcon
                                                            })
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        sx: {
                            mb: 2,
                            mt: 2
                        },
                        children: t.popups_wallet_set_a_new_manage_account()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                        placeholder: t.popups_wallet_settings_local_persona_or_wallet_only(),
                        InputProps: {
                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownRound, {
                                size: 18,
                                sx: {
                                    cursor: 'pointer'
                                }
                            }),
                            classes: {
                                input: classes.input
                            }
                        },
                        value: manageAccount?.address,
                        onMouseDown: (event)=>{
                            setAnchorEl(event.currentTarget);
                        },
                        inputProps: {
                            style: {
                                cursor: 'pointer'
                            }
                        }
                    }),
                    manageAccount ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                children: t.gas_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* ChainContextProvider */.on, {
                                value: chainContextValue,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingMenu/* GasSettingMenu */.Y, {
                                    minimumGas: gas ?? FALLBACK_GAS.toString(),
                                    initConfig: gasConfig,
                                    paymentToken: paymentToken,
                                    defaultChainId: chainId,
                                    owner: wallet?.owner,
                                    onChange: setGasConfig,
                                    onPaymentTokenChange: (paymentToken)=>setPaymentToken(paymentToken),
                                    allowMaskAsGas: true
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* default */.ZP, {
                        open: !!anchorEl,
                        anchorEl: anchorEl,
                        onClose: ()=>{
                            setAnchorEl(null);
                        },
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        },
                        PaperProps: {
                            style: {
                                minWidth: `${anchorEl?.clientWidth ?? 568}px`,
                                maxHeight: 212
                            },
                            className: classes.paper
                        },
                        disableRestoreFocus: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.list,
                            children: [
                                personaManagers?.map((persona)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        className: cx(classes.item, (0,isSameAddress/* isSameAddress */.W)(persona.address, wallet?.owner) ? classes.disabledItem : undefined),
                                        onClick: ()=>{
                                            if ((0,isSameAddress/* isSameAddress */.W)(persona.address, wallet?.owner)) return;
                                            setManageAccount({
                                                type: ManagerAccountType.Persona,
                                                name: persona.nickname,
                                                address: persona.address,
                                                identifier: persona.identifier
                                            });
                                            setAnchorEl(null);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                display: "flex",
                                                alignItems: "center",
                                                columnGap: 0.5,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: classes.avatar,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatar/* PersonaAvatar */.K, {
                                                            avatar: persona.avatar,
                                                            size: 24
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                        ml: "6px",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                                className: classes.popoverTitle,
                                                                children: persona.nickname
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                                className: classes.identity,
                                                                children: persona.address ? (0,formatter/* formatEthereumAddress */.j8)(persona.address, 4) : null
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledRadio, {
                                                checked: (0,isSameAddress/* isSameAddress */.W)(persona.address, manageAccount?.address)
                                            })
                                        ]
                                    }, persona.address)),
                                walletManagers?.map((wallet)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        className: cx(classes.item, (0,isSameAddress/* isSameAddress */.W)(wallet.address, wallet?.owner) ? classes.disabledItem : undefined),
                                        onClick: ()=>{
                                            if ((0,isSameAddress/* isSameAddress */.W)(wallet.address, wallet?.owner)) return;
                                            setManageAccount({
                                                type: ManagerAccountType.Wallet,
                                                name: wallet.name,
                                                address: wallet.address
                                            });
                                            setAnchorEl(null);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                display: "flex",
                                                alignItems: "center",
                                                columnGap: 0.5,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                                        size: 24
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                        ml: "6px",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                                className: classes.popoverTitle,
                                                                children: wallet.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                                className: classes.identity,
                                                                children: (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 4)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledRadio, {
                                                checked: (0,isSameAddress/* isSameAddress */.W)(manageAccount?.address, wallet.address)
                                            })
                                        ]
                                    }, wallet.address))
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomController/* BottomController */.L, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        className: classes.button,
                        variant: "outlined",
                        color: "secondary",
                        disabled: disabled,
                        onClick: async ()=>{
                            navigate(-1);
                            await service/* default */.ZP.Helper.removePopupWindow();
                        },
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        variant: "contained",
                        className: classes.button,
                        onClick: handleConfirm,
                        loading: loadingHandleConfirm,
                        disabled: disabled,
                        children: t.wallet_status_button_change()
                    })
                ]
            })
        ]
    });
}


/***/ })

}]);
//# sourceMappingURL=chunk.6305.js.map