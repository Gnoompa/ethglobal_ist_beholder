"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7944],{

/***/ 47944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_SetPaymentPassword)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ProgressiveText/index.tsx
var ProgressiveText = __webpack_require__(5393);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
;// CONCATENATED MODULE: ./packages/shared-base/src/helpers/getDefaultWalletPassword.ts
function getDefaultWalletPassword() {
    return 'MASK NETWORK'.split('').reverse().join('');
}

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(51093);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(28181);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/hooks/usePasswordForm.ts





function defineSchema(refine, t) {
    return lib.z.object({
        password: lib.z.string().min(6, t.popups_wallet_password_length_error()).max(20, t.popups_wallet_password_length_error()),
        confirm: lib.z.string().optional()
    }).refine((data)=>!refine || data.password === data.confirm, {
        message: t.popups_wallet_password_not_match(),
        path: [
            'confirm'
        ]
    });
}
function usePasswordForm(refine = true) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const schema = (0,react.useMemo)(()=>{
        return defineSchema(refine, t);
    }, [
        refine,
        t
    ]);
    const formValue = (0,index_esm/* useForm */.cI)({
        mode: 'onBlur',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: {
            password: '',
            confirm: ''
        }
    });
    return {
        ...formValue,
        schema
    };
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/SetPaymentPassword/index.tsx




















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { hasNav })=>({
        container: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            background: theme.palette.maskColor.secondaryBottom,
            paddingBottom: hasNav ? 72 : undefined
        },
        content: {
            position: 'relative',
            padding: 16,
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flexGrow: 1
        },
        titleWrapper: {
            paddingTop: 8,
            paddingBottom: 12,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 12,
            justifyContent: 'center',
            alignItems: 'center'
        },
        addWalletWrapper: {
            display: 'flex',
            width: '100%',
            padding: 12,
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            background: theme.palette.maskColor.bottom,
            borderRadius: 8,
            '&:last-child': {
                marginBottom: '0 !important'
            }
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontStyle: 'normal',
            fontWeight: 700,
            marginBottom: 12
        },
        subTitle: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.maskColor.main,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700
        },
        description: {
            color: theme.palette.maskColor.third,
            fontWeight: 400
        },
        setPasswordButtonWrapper: {
            position: 'absolute',
            width: 368,
            bottom: 16,
            marginTop: 12
        },
        bottomAction: {
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            marginTop: 'auto',
            backdropFilter: 'blur(8px)'
        },
        confirmButton: {
            margin: '16px 0'
        },
        back: {
            position: 'absolute',
            top: 16,
            left: 16
        },
        form: {
            width: '100%',
            flex: 1
        },
        textField: {
            width: '100%'
        },
        strong: {
            color: theme.palette.maskColor.main
        },
        walletItemList: {
            height: 240,
            overflow: 'scroll',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const WalletItem = /*#__PURE__*/ (0,react.memo)(function WalletItem({ wallet }) {
    const { classes } = useStyles({});
    const { address, owner } = wallet;
    const chainId = owner ? types/* ChainId */.a_.Matic : types/* ChainId */.a_.Mainnet;
    const { data: balance = '0', isLoading } = (0,useBalance/* useBalance */.K)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        account: address,
        chainId
    });
    const theme = (0,useTheme/* default */.Z)();
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.addWalletWrapper,
        children: [
            owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                size: 30
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ETH, {
                size: 30
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.subTitle,
                        children: [
                            domain || (0,formatter/* formatEthereumAddress */.j8)(address, 4),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                underline: "none",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: entry/* ExplorerResolver */.Xz.addressLink(chainId, address),
                                marginLeft: "4px",
                                width: 16,
                                height: 16,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 16,
                                    color: theme.palette.maskColor.main
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                        loading: isLoading,
                        className: classes.description,
                        fontSize: 12,
                        skeletonWidth: 50,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                            value: balance,
                            decimals: 18,
                            symbol: owner ? 'Matic' : 'ETH',
                            formatter: formatBalance/* formatBalance */.a
                        })
                    })
                ]
            })
        ]
    });
});
const SetPaymentPassword = /*#__PURE__*/ (0,react.memo)(function SetPaymentPassword() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { hasNavigator } = (0,dist/* useOutletContext */.bx)();
    const { classes } = useStyles({
        hasNav: hasNavigator
    });
    const navigate = (0,dist/* useNavigate */.s0)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const [isCreating, setIsCreating] = (0,react.useState)(!!params.get('isCreating'));
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const theme = (0,useTheme/* default */.Z)();
    const { control, handleSubmit, setError, formState: { errors, isValid }, schema, reset } = usePasswordForm();
    (0,react.useEffect)(()=>{
        reset({
            password: '',
            confirm: ''
        });
    }, [
        isCreating
    ]);
    const [{ loading }, onConfirm] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        try {
            const hasPasswordWithDefaultOne = await service/* default */.ZP.Wallet.hasPasswordWithDefaultOne();
            if (hasPasswordWithDefaultOne) {
                await service/* default */.ZP.Wallet.changePassword(getDefaultWalletPassword(), data.password);
            } else {
                await service/* default */.ZP.Wallet.setPassword(data.password);
            }
            queryClient/* queryClient */.E.refetchQueries([
                '@@has-password'
            ]);
            const hasPassword = await service/* default */.ZP.Wallet.hasPassword();
            if (hasPassword) {
                const from = params.get('from');
                showSnackbar(t.popups_wallet_set_payment_password_successfully(), {
                    variant: 'success'
                });
                CrossIsolationEvents/* CrossIsolationMessages */.W.events.passwordStatusUpdated.sendToAll(true);
                params.delete('from');
                navigate({
                    pathname: from || Routes/* PopupRoutes */.mZ.Wallet,
                    search: params.toString()
                }, {
                    replace: true
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                setError('password', {
                    message: error.message
                });
            }
        }
    }, [
        setError,
        params
    ]);
    const onSubmit = handleSubmit(onConfirm);
    const errorMsg = errors.password?.message ?? errors.confirm?.message;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.titleWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: isCreating ? t.popups_wallet_create_payment_password() : t.popups_set_the_payment_password_title()
                            }),
                            isCreating ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.description,
                                fontSize: 14,
                                fontWeight: 700,
                                children: t.popups_wallet_create_payment_password_tip()
                            }) : null
                        ]
                    }),
                    isCreating ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                className: classes.form,
                                onSubmit: onSubmit,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.textField,
                                        style: {
                                            marginBottom: 12
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                            control: control,
                                            render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                                                    ...field,
                                                    autoFocus: true,
                                                    type: "password",
                                                    variant: "filled",
                                                    placeholder: t.popups_wallet_payment_password(),
                                                    error: !isValid && !!errors.password?.message
                                                }),
                                            name: "password"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.textField,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                            render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                                                    ...field,
                                                    error: !isValid && !!errors.confirm?.message,
                                                    type: "password",
                                                    variant: "filled",
                                                    placeholder: t.popups_wallet_confirm_password()
                                                }),
                                            name: "confirm",
                                            control: control
                                        })
                                    }),
                                    errorMsg && !isValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: 14,
                                        color: theme.palette.maskColor.danger,
                                        marginTop: "12px",
                                        children: errorMsg
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: theme.palette.maskColor.third,
                                fontSize: 14,
                                textAlign: "center",
                                fontWeight: 700,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_term_of_service_agree_part_1"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: theme.palette.maskColor.third,
                                fontSize: 14,
                                textAlign: "center",
                                fontWeight: 700,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_term_of_service_agree_part_2",
                                    components: {
                                        agreement: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            className: classes.strong,
                                            target: "_blank",
                                            href: "https://legal.mask.io/maskbook/service-agreement-beta-browser.html"
                                        }),
                                        policy: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            className: classes.strong,
                                            target: "_blank",
                                            href: "https://legal.mask.io/maskbook/privacy-policy-browser.html"
                                        })
                                    }
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.walletItemList,
                                children: wallets.map((wallet, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                                        wallet: wallet
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.setPasswordButtonWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                    fullWidth: true,
                                    onClick: ()=>setIsCreating(true),
                                    children: t.popups_set_the_payment_password_title()
                                })
                            })
                        ]
                    })
                ]
            }),
            isCreating ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.bottomAction,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                    fullWidth: true,
                    onClick: onSubmit,
                    loading: loading,
                    width: 368,
                    className: classes.confirmButton,
                    children: t.confirm()
                })
            }) : null,
            isCreating && !params.get('isCreating') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Comeback, {
                className: classes.back,
                onClick: ()=>setIsCreating(false)
            }) : null
        ]
    });
});
/* harmony default export */ const Wallet_SetPaymentPassword = (SetPaymentPassword);


/***/ })

}]);
//# sourceMappingURL=chunk.7944.js.map