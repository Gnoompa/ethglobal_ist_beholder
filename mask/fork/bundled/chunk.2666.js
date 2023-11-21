"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2666],{

/***/ 78827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38096);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23478);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74765);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38777);
/* harmony import */ var _modals_modals_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75904);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        input: {
            flex: 1
        },
        toText: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            fontWeight: 700,
            height: 40,
            minWidth: 32,
            marginRight: theme.spacing(0.5),
            display: 'flex',
            alignItems: 'center'
        },
        receiverPanel: {
            display: 'flex',
            alignItems: 'flex-start'
        },
        inputText: {
            fontSize: 10,
            paddingRight: '0px !important',
            '&&::placeholder': {
                color: theme.palette.maskColor.third
            }
        },
        save: {
            color: theme.palette.maskColor.main,
            marginRight: 4
        },
        endAdornment: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(0.5)
        },
        receiver: {
            display: 'flex',
            alignItems: 'flex-start',
            color: theme.palette.maskColor.second,
            fontSize: 13
        },
        validation: {
            color: theme.palette.maskColor.danger,
            fontSize: 14
        },
        warning: {
            color: theme.palette.maskColor.warn,
            fontSize: 14
        },
        fieldWrapper: {
            flex: 1
        },
        linkOut: {
            color: theme.palette.maskColor.main,
            marginLeft: 4,
            cursor: 'pointer'
        }
    }));
const AddContactInputPanel = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function AddContactInputPanel({ isManage, autoFocus, ...props }) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { classes, cx } = useStyles();
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)();
    const { address, userInput, setUserInput, contacts, wallets, inputValidationMessage: addressValidationMessage, inputWarningMessage } = _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .ContactsContext */ .z.useContainer();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const openAddContactModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!address) return;
        return _modals_modals_js__WEBPACK_IMPORTED_MODULE_8__/* .AddContactModal */ .xf.openAndWaitForClose({
            title: t.wallet_add_contact(),
            address,
            name: ''
        });
    }, [
        address,
        userInput
    ]);
    const isAdded = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
            ...contacts,
            ...wallets
        ].some((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .isSameAddress */ .W)(address, x.address)), [
        contacts,
        wallets,
        address
    ]);
    const addable = !addressValidationMessage && (address || userInput) && !isAdded;
    const shouldShowAddress = !!address && address !== userInput;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        padding: 2,
        ...props,
        className: cx(classes.receiverPanel, props.className),
        children: [
            isManage ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                className: classes.toText,
                children: t.popups_wallet_transfer_to()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.fieldWrapper,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .MaskTextField */ .F, {
                        placeholder: t.wallet_transfer_placeholder(),
                        value: userInput,
                        onChange: (ev)=>setUserInput(ev.target.value),
                        wrapperProps: {
                            className: classes.input
                        },
                        autoFocus: autoFocus,
                        InputProps: {
                            spellCheck: false,
                            endAdornment: addable ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.endAdornment,
                                onClick: openAddContactModal,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: classes.save,
                                        children: t.save()
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.AddUser, {
                                        size: 18,
                                        color: theme.palette.maskColor.main
                                    })
                                ]
                            }) : undefined,
                            classes: {
                                input: classes.inputText
                            }
                        }
                    }),
                    inputWarningMessage && !addressValidationMessage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.warning,
                        mt: 1,
                        children: inputWarningMessage
                    }) : null,
                    addressValidationMessage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.validation,
                        mt: 1,
                        children: addressValidationMessage
                    }) : shouldShowAddress ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.receiver,
                        mt: 1,
                        children: [
                            address,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.LinkOut, {
                                size: 18,
                                className: classes.linkOut,
                                onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_14__/* .openWindow */ .x)(_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .ExplorerResolver */ .Xz.addressLink(chainId, address))
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddContactInputPanel);


/***/ }),

/***/ 69516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ GasSettingMenu)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useGasCurrencyMenu.tsx
var useGasCurrencyMenu = __webpack_require__(6569);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasOptions.ts
var useGasOptions = __webpack_require__(98705);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdSupport.ts
var useChainIdSupport = __webpack_require__(28163);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(34093);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(92935);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./packages/mask/popups/modals/modal-controls.ts
var modal_controls = __webpack_require__(75904);
;// CONCATENATED MODULE: ./packages/mask/popups/hooks/useGasOptionsMenu.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            borderRadius: 16,
            boxShadow: theme.palette.maskColor.bottomBg
        },
        list: {
            padding: theme.spacing(1.5)
        },
        item: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(1, 0),
            borderBottom: `1px solid ${theme.palette.maskColor.line}`,
            minHeight: 'unset',
            minWidth: 134,
            cursor: 'pointer',
            '&:first-of-type': {
                paddingTop: 0
            },
            '&:last-of-type': {
                paddingBottom: 4,
                border: 'unset'
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'transparent'
            }
        },
        optionName: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700
        },
        optionValue: {
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.third
        }
    }));
function useGasOptionsMenu(minimumGas, callback, paymentToken) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const { data: gasOptions } = (0,useGasOptions/* useGasOptions */.o)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const isSupport1559 = (0,useChainIdSupport/* useChainIdSupport */.U)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, 'EIP1559', chainId);
    const [customGasConfig, setCustomGasConfig] = (0,react.useState)();
    const handleClickCustom = (0,react.useCallback)(async ()=>{
        const result = await modal_controls/* GasSettingModal */.fU.openAndWaitForClose({
            chainId,
            config: {
                gas: minimumGas,
                paymentToken,
                ...customGasConfig
            }
        });
        if (!result) return;
        setCustomGasConfig({
            ...result,
            gasPrice: result.gasPrice ? (0,formatter/* formatWeiToGwei */.f1)(result.gasPrice).toFixed(2) : undefined,
            maxFeePerGas: result.maxFeePerGas ? (0,formatter/* formatWeiToGwei */.f1)(result.maxFeePerGas).toFixed(2) : '',
            maxPriorityFeePerGas: result.maxPriorityFeePerGas ? (0,formatter/* formatWeiToGwei */.f1)(result.maxPriorityFeePerGas).toFixed(2) : ''
        });
        callback(result);
    }, [
        chainId,
        minimumGas,
        callback,
        customGasConfig,
        paymentToken
    ]);
    const handleClick = (0,react.useCallback)((type, option)=>{
        if (!option) return;
        const config = isSupport1559 ? {
            gasOptionType: type,
            maxPriorityFeePerGas: option.suggestedMaxPriorityFeePerGas,
            maxFeePerGas: option.suggestedMaxFeePerGas
        } : {
            gasOptionType: type,
            gasPrice: option.suggestedMaxFeePerGas
        };
        callback(config, type);
    }, [
        callback,
        isSupport1559
    ]);
    return (0,useMenu/* useMenuConfig */._)([
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.item,
            onClick: ()=>handleClick(specs/* GasOptionType */.Qd.SLOW, gasOptions?.slow),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.optionName,
                    children: t.popups_wallet_gas_fee_settings_medium()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.optionValue,
                    children: [
                        (0,formatter/* formatWeiToGwei */.f1)(gasOptions?.slow.suggestedMaxFeePerGas ?? 0).toFixed(2),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "span",
                            children: t.wallet_transfer_gwei()
                        })
                    ]
                })
            ]
        }, "medium"),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.item,
            onClick: ()=>handleClick(specs/* GasOptionType */.Qd.NORMAL, gasOptions?.normal),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.optionName,
                    children: t.popups_wallet_gas_fee_settings_high()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.optionValue,
                    children: [
                        (0,formatter/* formatWeiToGwei */.f1)(gasOptions?.normal.suggestedMaxFeePerGas ?? 0).toFixed(2),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "span",
                            children: t.wallet_transfer_gwei()
                        })
                    ]
                })
            ]
        }, "high"),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.item,
            onClick: ()=>handleClick(specs/* GasOptionType */.Qd.FAST, gasOptions?.fast),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.optionName,
                    children: t.popups_wallet_gas_fee_settings_instant()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.optionValue,
                    children: [
                        (0,formatter/* formatWeiToGwei */.f1)(gasOptions?.fast.suggestedMaxFeePerGas ?? 0).toFixed(2),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "span",
                            children: t.wallet_transfer_gwei()
                        })
                    ]
                })
            ]
        }, "instant"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            className: classes.item,
            onClick: handleClickCustom,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.optionName,
                children: t.popups_wallet_gas_fee_settings_custom()
            })
        }, "custom")
    ], {
        classes: {
            paper: classes.paper,
            list: classes.list
        },
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        }
    });
}

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useGasRatio.ts
var useGasRatio = __webpack_require__(71110);
;// CONCATENATED MODULE: ./packages/mask/popups/components/GasSettingMenu/index.tsx















/** Payment token address */ const GasSettingMenu = /*#__PURE__*/ (0,react.memo)(function GasSettingMenu({ minimumGas, defaultChainId, initConfig, paymentToken, disable, allowMaskAsGas, owner, onChange, onPaymentTokenChange }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const gasRatio = (0,useGasRatio/* useGasRatio */.x)(paymentToken);
    const [gasConfig = initConfig, setGasConfig] = (0,react.useState)();
    const [gasOptionType, setGasOptionType] = (0,react.useState)(initConfig?.gasOptionType ?? specs/* GasOptionType */.Qd.SLOW);
    const handleChange = (0,react.useCallback)((config, type)=>{
        setGasOptionType(type);
        setGasConfig(config);
        onChange?.(config);
    }, [
        onChange
    ]);
    const [menu, openMenu] = useGasOptionsMenu(minimumGas, !disable ? handleChange : noop/* default */.Z, paymentToken);
    const [paymentTokenMenu, openPaymentTokenMenu] = (0,useGasCurrencyMenu/* useGasCurrencyMenu */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, onPaymentTokenChange ?? noop/* default */.Z, paymentToken);
    const { data: gasOptions } = (0,useGasOptions/* useGasOptions */.o)();
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: defaultChainId
    });
    const isSupport1559 = (0,useChainIdSupport/* useChainIdSupport */.U)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, 'EIP1559', chainId);
    const nativeTokenAddress = (0,useNativeTokenAddress/* useNativeTokenAddress */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const { data: token } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, paymentToken ? paymentToken : nativeTokenAddress, undefined, {
        chainId
    });
    const { data: tokenPrice } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, paymentToken ? paymentToken : nativeTokenAddress);
    const gasOptionName = (0,react.useMemo)(()=>{
        switch(gasOptionType){
            case specs/* GasOptionType */.Qd.FAST:
                return t.popups_wallet_gas_fee_settings_instant();
            case specs/* GasOptionType */.Qd.NORMAL:
                return t.popups_wallet_gas_fee_settings_high();
            case specs/* GasOptionType */.Qd.SLOW:
                return t.popups_wallet_gas_fee_settings_medium();
            default:
                return t.popups_wallet_gas_fee_settings_custom();
        }
    }, [
        gasOptionType
    ]);
    const totalGas = (0,react.useMemo)(()=>{
        if (!gasConfig) return number/* ZERO */.xE;
        const result = new bignumber/* BigNumber */.O((isSupport1559 ? gasConfig.maxFeePerGas : gasConfig.gasPrice) || number/* ZERO */.xE).times(minimumGas);
        if (!gasRatio) return (0,number/* toFixed */.FH)(result, 0);
        return (0,number/* toFixed */.FH)(result.multipliedBy(gasRatio), 0);
    }, [
        gasConfig,
        minimumGas,
        gasRatio
    ]);
    // If there is no init configuration, set a default config
    (0,react.useEffect)(()=>{
        if (!!initConfig || !gasOptions || !onChange) return;
        const target = gasOptions[specs/* GasOptionType */.Qd.SLOW];
        const result = isSupport1559 ? {
            gasOptionType: specs/* GasOptionType */.Qd.SLOW,
            maxPriorityFeePerGas: target.suggestedMaxPriorityFeePerGas,
            maxFeePerGas: target.suggestedMaxFeePerGas,
            gas: minimumGas
        } : {
            gasOptionType: specs/* GasOptionType */.Qd.SLOW,
            gasPrice: target.suggestedMaxFeePerGas,
            gas: minimumGas
        };
        setGasConfig((prev)=>{
            if (prev) return;
            return result;
        });
        onChange(result);
    }, [
        onChange,
        initConfig,
        gasOptions,
        isSupport1559,
        minimumGas
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                fontWeight: 700,
                fontSize: 14,
                mr: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                        value: totalGas,
                        decimals: token?.decimals,
                        significant: 4,
                        symbol: token?.symbol,
                        formatter: formatBalance/* formatBalance */.a
                    }),
                    ' ≈ ',
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                        value: (0,formatter/* formatWeiToEther */.yp)(totalGas).times(tokenPrice ?? 0),
                        options: {
                            onlyRemainTwoOrZeroDecimal: false,
                            customDecimalConfig: {
                                boundary: (0,number/* scale10 */.SI)(1, -4),
                                decimalExp: 4
                            }
                        },
                        formatter: formatCurrency/* formatCurrency */.x
                    })
                ]
            }),
            !disable ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                py: 0.5,
                px: 1.5,
                border: `1px solid ${theme.palette.maskColor.line}`,
                onClick: openMenu,
                borderRadius: 99,
                display: "inline-flex",
                alignItems: "center",
                columnGap: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontWeight: 700,
                        lineHeight: "18px",
                        fontSize: 14,
                        children: gasOptionName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Candle, {
                        size: 12
                    })
                ]
            }) : null,
            owner && allowMaskAsGas ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                        size: 20,
                        sx: {
                            ml: 0.5,
                            cursor: 'pointer'
                        },
                        onClick: openPaymentTokenMenu
                    }),
                    paymentTokenMenu
                ]
            }) : null,
            menu
        ]
    });
});


/***/ }),

/***/ 38777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ ContactsContext)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57131);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41238);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80675);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29063);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89019);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65327);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17735);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54225);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94036);









function useContactsContext({ defaultName, defaultChainId, defaultAddress } = {
    defaultName: '',
    defaultAddress: ''
}) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useMaskSharedTrans */ .b)();
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)({
        chainId: defaultChainId
    });
    const contacts = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useContacts */ .g)();
    const wallets = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWallets */ .r)();
    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultName || defaultAddress);
    const { value: registeredAddress, error: resolveDomainError } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useLookupAddress */ .h)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkPluginID */ .F.PLUGIN_EVM, userInput, chainId);
    const address = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!userInput) return '';
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isValidDomain */ .h)(userInput) && registeredAddress) {
            return registeredAddress;
        }
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isValidAddress */ .At)(userInput)) return userInput;
        // UserInput is wallet name
        const matches = [
            ...wallets,
            ...contacts
        ].filter((x)=>x.name === userInput);
        if (!matches.length) return defaultAddress;
        const contact = matches.length > 1 ? // There might be wallets or contacts with the same name
        matches.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .isSameAddress */ .W)(x.address, defaultAddress)) || matches[0] : matches[0];
        return contact.address;
    }, [
        userInput,
        defaultAddress,
        registeredAddress,
        contacts,
        wallets
    ]);
    const { value: addressType } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__/* .useAddressType */ .t)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .NetworkPluginID */ .F.PLUGIN_EVM, address, {
        chainId
    });
    const { value: security } = (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(async ()=>{
        if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isValidAddress */ .At)(address)) return;
        return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .GoPlusLabs */ .e.getAddressSecurity(chainId, address);
    }, [
        chainId,
        address
    ]);
    const isMaliciousAddress = security && Object.values(security).filter((x)=>x === '1').length > 1;
    const inputValidationMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (isMaliciousAddress) return t.wallets_transfer_error_address_scam();
        if (!userInput || address) return '';
        if (!((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isValidAddress */ .At)(userInput) || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isValidDomain */ .h)(userInput))) {
            return t.wallets_transfer_error_invalid_address();
        }
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isValidDomain */ .h)(userInput) && (resolveDomainError || !registeredAddress)) {
            return t.wallets_transfer_error_invalid_domain();
        }
        return '';
    }, [
        userInput,
        resolveDomainError,
        registeredAddress,
        isMaliciousAddress
    ]);
    const inputWarningMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (addressType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .AddressType */ .DL.Contract) return t.wallets_transfer_warning_contract_address();
        return '';
    }, [
        addressType
    ]);
    return {
        contacts,
        wallets,
        address,
        userInput,
        setUserInput,
        inputValidationMessage,
        inputWarningMessage
    };
}
const ContactsContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_14__/* .createContainer */ .f)(useContactsContext);
ContactsContext.Provider.displayName = 'ContactsContextProvider';


/***/ }),

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

/***/ 25072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99116);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43270);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10292);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(23869);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3223);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90138);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90097);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41238);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(41487);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92935);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(49190);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(86244);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62322);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94036);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81430);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38777);
/* harmony import */ var _components_AddContactInputPanel_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78827);
/* harmony import */ var _modals_modals_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75904);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85103);

















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme, { showDivideLine, isManage })=>({
        root: {
            overflowX: 'hidden',
            height: '100%'
        },
        page: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            height: '100%'
        },
        contactsPanel: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0',
            maxHeight: isManage ? 470 : 400,
            overflow: 'scroll',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        contactsList: {
            padding: 0
        },
        nickname: {
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700,
            maxWidth: 290,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        identifier: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
        },
        contactsListItem: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '16px !important',
            paddingRight: '16px !important',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        },
        contactsListItemInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        contactTitle: {
            color: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 700,
            paddingLeft: 16
        },
        icon: {
            fontSize: 18,
            height: 18,
            width: 18,
            cursor: 'pointer',
            marginLeft: 4
        },
        menu: {
            padding: '4px 0px 8px 0px',
            borderRadius: '16px'
        },
        menuItem: {
            padding: '8px 12px',
            width: 140,
            minHeight: 'unset',
            '&:first-of-type': showDivideLine ? {
                '&:after': {
                    content: '""',
                    background: theme.palette.divider,
                    bottom: 0,
                    position: 'absolute',
                    width: 120,
                    height: 1
                }
            } : {}
        },
        optionName: {
            fontSize: 14,
            fontWeight: 700,
            marginLeft: 8
        },
        emojiAvatar: {
            marginRight: 10,
            fontSize: 14
        },
        iconMore: {
            cursor: 'pointer'
        },
        bottomAction: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            width: '100%',
            bottom: 0,
            zIndex: 100
        },
        confirmButton: {
            margin: '16px 0'
        }
    }));
const ContactListUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ContactListUI() {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_5__/* .useMaskSharedTrans */ .b)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { setExtension } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_index_js__WEBPACK_IMPORTED_MODULE_7__/* .PageTitleContext */ .I);
    const state = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)().state;
    const isManage = state?.type === 'manage';
    const { classes } = useStyles({
        isManage
    });
    const wallets = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useWallets */ .r)();
    const { userInput, address, contacts, inputValidationMessage } = _hooks_index_js__WEBPACK_IMPORTED_MODULE_10__/* .ContactsContext */ .z.useContainer();
    const [params] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useSearchParams */ .lr)();
    const addContact = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return _modals_modals_js__WEBPACK_IMPORTED_MODULE_12__/* .AddContactModal */ .xf.openAndWaitForClose({
            title: t.wallet_add_contact(),
            address: '',
            name: ''
        });
    }, [
        t
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isManage) return;
        setExtension(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.Add, {
            color: theme.palette.maskColor.main,
            sx: {
                cursor: 'pointer'
            },
            onClick: addContact
        }));
        return ()=>setExtension(undefined);
    }, [
        isManage
    ]);
    (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_7__/* .useTitle */ .Z)(isManage ? t.contacts() : t.popups_send());
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .s0)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)();
    const handleSelectContact = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((addr, recipientName)=>{
        if (isManage) return;
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .PopupRoutes */ .mZ.Transfer, {
            ...Object.fromEntries(params.entries()),
            recipient: addr,
            recipientName
        });
        navigate(path, {
            state: location.state
        });
    }, [
        navigate,
        params,
        location.state,
        isManage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            className: classes.page,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddContactInputPanel_index_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    isManage: isManage,
                    autoFocus: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    className: classes.contactsPanel,
                    children: [
                        contacts.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            className: classes.contactTitle,
                            children: t.wallet_transfer_my_contacts_title()
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            className: classes.contactsList,
                            children: contacts.map((contact, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactListItem, {
                                    address: contact.address,
                                    name: contact.name,
                                    contactType: _type_js__WEBPACK_IMPORTED_MODULE_19__/* .ContactType */ .uC.Recipient,
                                    onSelectContact: handleSelectContact
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            className: classes.contactTitle,
                            children: t.wallet_transfer_my_wallets_title()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            className: classes.contactsList,
                            children: wallets.map((wallet, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactListItem, {
                                    address: wallet.address,
                                    name: wallet.name,
                                    contactType: _type_js__WEBPACK_IMPORTED_MODULE_19__/* .ContactType */ .uC.Owned,
                                    onSelectContact: handleSelectContact
                                }, index);
                            })
                        })
                    ]
                }),
                isManage ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    className: classes.bottomAction,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_20__/* .ActionButton */ .K, {
                        fullWidth: true,
                        onClick: ()=>{
                            const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .PopupRoutes */ .mZ.Transfer, {
                                ...Object.fromEntries(params.entries()),
                                recipient: address
                            });
                            navigate(path, {
                                state: location.state
                            });
                        },
                        width: 368,
                        className: classes.confirmButton,
                        disabled: !!inputValidationMessage || !userInput,
                        children: t.next()
                    })
                })
            ]
        })
    });
});
function ContactListItem({ address, name, contactType, onSelectContact, ...rest }) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_5__/* .useMaskSharedTrans */ .b)();
    const { classes } = useStyles({
        showDivideLine: contactType === _type_js__WEBPACK_IMPORTED_MODULE_19__/* .ContactType */ .uC.Recipient
    });
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_21__/* .useChainContext */ .ql)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const editContact = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return _modals_modals_js__WEBPACK_IMPORTED_MODULE_12__/* .EditContactModal */ .vg.openAndWaitForClose({
            title: t.wallet_edit_contact(),
            address,
            name,
            type: contactType
        });
    }, [
        address,
        name,
        contactType,
        t
    ]);
    const deleteContact = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return _modals_modals_js__WEBPACK_IMPORTED_MODULE_12__/* .DeleteContactModal */ .Ju.openAndWaitForClose({
            title: t.wallet_delete_contact(),
            address,
            name
        });
    }, [
        address,
        name,
        t
    ]);
    const menuOptions = [
        {
            name: t.edit(),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.Edit2, {
                size: 20,
                color: theme.palette.maskColor.second
            }),
            handler: editContact
        },
        {
            name: t.delete(),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.Decrease, {
                size: 20,
                color: theme.palette.maskColor.second
            }),
            handler: deleteContact
        }
    ];
    const [menu, openMenu, _, isOpenMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_22__/* .useMenuConfig */ ._)(menuOptions.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            className: classes.menuItem,
            onClick: option.handler,
            children: [
                option.icon,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    className: classes.optionName,
                    children: option.name
                })
            ]
        }, index)), {
        anchorSibling: false,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        classes: {
            paper: classes.menu
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
        classes: {
            root: classes.contactsListItem
        },
        onClick: ()=>!isOpenMenu && onSelectContact?.(address, name),
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.contactsListItemInfo,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_25__/* .EmojiAvatar */ .e, {
                        value: address,
                        className: classes.emojiAvatar,
                        sx: {
                            width: 24,
                            height: 24
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.nickname,
                                children: name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.identifier,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_26__/* .FormattedAddress */ .K, {
                                        address: address,
                                        formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_27__/* .formatEthereumAddress */ .j8,
                                        size: 4
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        onClick: (event)=>event.stopPropagation(),
                                        href: _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .ExplorerResolver */ .Xz.addressLink(chainId, address ?? ''),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.PopupLink, {
                                            className: classes.icon,
                                            color: theme.palette.maskColor.second
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            contactType === _type_js__WEBPACK_IMPORTED_MODULE_19__/* .ContactType */ .uC.Recipient ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__.More, {
                size: 24,
                className: classes.iconMore,
                onClick: (event)=>{
                    event.stopPropagation();
                    openMenu(event);
                }
            }) : null,
            menu
        ]
    });
}
function ContactList() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_index_js__WEBPACK_IMPORTED_MODULE_10__/* .ContactsContext */ .z.Provider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactListUI, {})
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactList);


/***/ }),

/***/ 94285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ DeriveStateContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54225);


function useDeriveState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
}
const DeriveStateContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .createContainer */ .f)(useDeriveState);


/***/ }),

/***/ 80760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_GasSetting)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(8610);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(28181);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(37603);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasOptions.ts
var useGasOptions = __webpack_require__(98705);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/PayloadEditor.ts + 1 modules
var PayloadEditor = __webpack_require__(61227);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(34093);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/hooks/useUnConfirmedRequest.ts







const useUnconfirmedRequest = ()=>{
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { TransactionFormatter } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const nativeTokenAddress = (0,useNativeTokenAddress/* useNativeTokenAddress */.Z)();
    const result = (0,useAsyncRetry/* default */.Z)(async ()=>{
        const payload = await service/* default */.ZP.Wallet.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = PayloadEditor/* PayloadEditor */._.fromPayload(payload).config;
        const formatterTransaction = await TransactionFormatter?.formatTransaction(chainId, computedPayload);
        const transactionContext = await TransactionFormatter?.createContext(chainId, computedPayload);
        return {
            owner: payload.owner,
            identifier: payload.identifier ? ec_key/* ECKeyIdentifier */.o.from(payload.identifier).unwrapOr(undefined) : undefined,
            paymentToken: payload.paymentToken,
            allowMaskAsGas: payload.allowMaskAsGas,
            payload: (0,omit/* default */.Z)(payload, 'owner', 'identifier', 'paymentToken'),
            computedPayload,
            formatterTransaction,
            transactionContext
        };
    }, [
        chainId,
        TransactionFormatter,
        nativeTokenAddress
    ]);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.requestsUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
};

// EXTERNAL MODULE: ./packages/mask/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(79673);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/GasSetting/GasSetting1559.tsx























const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: '#f7f9fa',
                borderRadius: 8,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        },
        optionsTitle: {
            color: '#7B8192',
            fontSize: 16,
            lineHeight: '22px'
        },
        optionsContent: {
            fontSize: 11
        },
        gasUSD: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '14px',
            wordBreak: 'break-all'
        },
        label: {
            color: theme.palette.primary.main,
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        selected: {
            backgroundColor: theme.palette.primary.main,
            '& > *': {
                color: `${theme.palette.primary.contrastText}!important`
            }
        },
        button: {
            fontWeight: 600,
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        unit: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            marginLeft: '0.5em'
        },
        price: {
            fontSize: 12,
            lineHeight: '16px',
            color: '#15181B'
        },
        disabled: {
            opacity: 0.5,
            backgroundColor: '#1C68F3!important',
            color: '#ffffff!important'
        }
    }));
const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const GasSetting1559 = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [selected, setOption] = (0,react.useState)(null);
    const [getGasLimitError, setGetGasLimitError] = (0,react.useState)(false);
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId: nativeToken?.chainId
    });
    const { value, loading: getValueLoading } = useUnconfirmedRequest();
    const { data: gasOptions, isLoading: getGasOptionsLoading } = (0,useGasOptions/* useGasOptions */.o)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    // #region Gas options
    const options = (0,react.useMemo)(()=>[
            {
                title: t.popups_wallet_gas_fee_settings_low(),
                content: gasOptions?.[specs/* GasOptionType */.Qd.SLOW]
            },
            {
                title: t.popups_wallet_gas_fee_settings_medium(),
                content: gasOptions?.[specs/* GasOptionType */.Qd.NORMAL]
            },
            {
                title: t.popups_wallet_gas_fee_settings_high(),
                content: gasOptions?.[specs/* GasOptionType */.Qd.FAST]
            }
        ], [
        gasOptions
    ]);
    // #endregion
    // #region If the payload type be TRANSFER or INTERACTION, get the gas from the payload
    const gas = (0,react.useMemo)(()=>{
        if (value && (value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.TRANSFER || value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.INTERACTION)) {
            return new bignumber/* BigNumber */.O(value?.formatterTransaction?._tx.gas ?? 0).toNumber();
        }
        return 0;
    }, [
        value
    ]);
    // #endregion
    // #region If the payload type be TRANSFER or INTERACTION, estimate min gas limit by tx data
    const { value: minGasLimit } = (0,useAsync/* default */.Z)(async ()=>{
        if (value && (value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.TRANSFER || value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.INTERACTION)) {
            try {
                return entry/* Web3 */.Bv.estimateTransaction?.({
                    data: value.formatterTransaction._tx.data,
                    from: value.formatterTransaction._tx.from,
                    to: value.formatterTransaction._tx.to,
                    value: value.formatterTransaction._tx.value
                });
            } catch  {
                setGetGasLimitError(true);
                return 0;
            }
        }
        return 0;
    }, [
        value
    ]);
    // #endregion
    // #region Form field define schema
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t.wallet_transfer_error_gas_limit_absence()).refine((gasLimit)=>(0,number/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimit ?? 0), t.popups_wallet_gas_fee_settings_min_gas_limit_tips({
                limit: String(minGasLimit)
            })),
            maxPriorityFeePerGas: lib.z.string().min(1, t.wallet_transfer_error_max_priority_fee_absence()).refine(number/* isPositive */.xP, t.wallet_transfer_error_max_priority_gas_fee_positive()),
            maxFeePerGas: lib.z.string().min(1, t.wallet_transfer_error_max_fee_absence())
        }).refine((data)=>(0,number/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas), {
            message: t.wallet_transfer_error_max_priority_gas_fee_imbalance(),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        minGasLimit,
        gasOptions
    ]);
    // #endregion
    const { control, handleSubmit, setValue, setError, watch, formState: { errors } } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new bignumber/* BigNumber */.O(gas).toString(),
            maxPriorityFeePerGas: '',
            maxFeePerGas: '0'
        },
        context: {
            minGasLimit,
            gasOptions
        }
    });
    // #region If the payload type be TRANSFER or INTERACTION and there are maxFeePerGas and maxPriorityFeePerGas parameters on tx, set them to the form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.TRANSFER || value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.INTERACTION) {
            if (value?.formatterTransaction._tx.maxFeePerGas && value?.formatterTransaction._tx.maxPriorityFeePerGas) {
                setValue('maxPriorityFeePerGas', (0,web3_utils_lib.fromWei)((0,number/* toFixed */.FH)(value.formatterTransaction._tx.maxPriorityFeePerGas), 'gwei'));
                setValue('maxFeePerGas', (0,web3_utils_lib.fromWei)((0,number/* toFixed */.FH)(value.formatterTransaction._tx.maxFeePerGas), 'gwei'));
            } else {
                setOption(1);
            }
        }
    }, [
        value,
        setValue
    ]);
    // #endregion
    // #region Set gas on tx to form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gas) setValue('gasLimit', new bignumber/* BigNumber */.O(gas).toString());
    }, [
        gas,
        setValue
    ]);
    // #endregion
    // #region If the selected changed, set the value on the option to the form data
    (0,react.useEffect)(()=>{
        if (selected === null) return;
        const { content } = options[selected];
        setValue('maxPriorityFeePerGas', (0,formatter/* formatWeiToGwei */.f1)(content?.suggestedMaxPriorityFeePerGas ?? 0).toString() ?? '');
        setValue('maxFeePerGas', (0,formatter/* formatWeiToGwei */.f1)(content?.suggestedMaxFeePerGas ?? 0).toString() ?? '');
    }, [
        selected,
        setValue,
        options
    ]);
    // #endregion
    const [{ loading }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        if (!value) return;
        const config = value.payload.params.map((param)=>param === 'latest' ? param : {
                ...param,
                gas: (0,web3_utils_lib.toHex)(new bignumber/* BigNumber */.O(data.gasLimit).toString()),
                maxPriorityFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0)),
                maxFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0))
            });
        await service/* default */.ZP.Wallet.updateUnconfirmedRequest({
            ...value.payload,
            owner: value.owner,
            identifier: value.identifier?.toText(),
            paymentToken: value.paymentToken,
            params: config
        });
        navigate(-1);
    }, [
        value
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data));
    const [maxPriorityFeePerGas, maxFeePerGas, gasLimit] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'gasLimit'
    ]);
    // #region These are additional form rules that need to be prompted for but do not affect the validation of the form
    const maxPriorFeeHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,number/* isLessThan */.FI)((0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGas), gasOptions?.[specs/* GasOptionType */.Qd.SLOW]?.suggestedMaxPriorityFeePerGas ?? 0)) return t.wallet_transfer_error_max_priority_gas_fee_too_low();
        if ((0,number/* isGreaterThan */.T1)((0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGas), (0,number/* multipliedBy */.$q)(gasOptions?.[specs/* GasOptionType */.Qd.FAST]?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t.wallet_transfer_error_max_priority_gas_fee_too_high();
        return undefined;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,number/* isLessThan */.FI)((0,formatter/* formatGweiToWei */.nU)(maxFeePerGas), gasOptions?.[specs/* GasOptionType */.Qd.SLOW]?.estimatedBaseFee ?? 0)) return t.wallet_transfer_error_max_fee_too_low();
        if ((0,number/* isGreaterThan */.T1)((0,formatter/* formatGweiToWei */.nU)(maxFeePerGas), (0,number/* multipliedBy */.$q)(gasOptions?.[specs/* GasOptionType */.Qd.FAST]?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t.wallet_transfer_error_max_fee_too_high();
        return undefined;
    }, [
        maxFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    // #endregion
    // #region If the payload is consumed it needs to be redirected
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!value && !getValueLoading) {
            navigate(Routes/* PopupRoutes */.mZ.Wallet, {
                replace: true
            });
        }
    }, [
        value,
        getValueLoading
    ]);
    // #endregion
    // #region If the estimate gas be 0, Set error
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (getGasLimitError) setError('gasLimit', {
            message: 'Cant not get estimate gas from contract'
        });
    }, [
        getGasLimitError
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title, content }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setOption(index),
                        className: selected === index ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "div",
                                className: classes.optionsContent,
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(content?.suggestedMaxFeePerGas ?? 0).toFixed(2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        component: "span",
                                        children: t.wallet_transfer_gwei()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: [
                                    "≈",
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                        value: (0,formatter/* formatWeiToEther */.yp)(content?.suggestedMaxFeePerGas ?? 0).times(nativeTokenPrice).times(gasLimit ?? 21000),
                                        formatter: formatCurrency/* formatCurrency */.x
                                    })
                                ]
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.popups_wallet_gas_fee_settings_gas_limit()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                InputProps: {
                                    inputProps: {
                                        pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                    }
                                }
                            });
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t.popups_wallet_gas_fee_settings_max_priority_fee(),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.unit,
                                children: [
                                    "(",
                                    t.wallet_transfer_gwei(),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: [
                                    "≈",
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                        value: (0,formatter/* formatGweiToEther */.Hh)(Number(maxPriorityFeePerGas)).times(nativeTokenPrice).times(gasLimit),
                                        formatter: formatCurrency/* formatCurrency */.x
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.maxPriorityFeePerGas?.message || !!maxPriorFeeHelperText,
                                helperText: errors.maxPriorityFeePerGas?.message || maxPriorFeeHelperText,
                                InputProps: {
                                    inputProps: {
                                        pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                    }
                                }
                            }),
                        name: "maxPriorityFeePerGas"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t.popups_wallet_gas_fee_settings_max_fee(),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.unit,
                                children: [
                                    "(",
                                    t.wallet_transfer_gwei(),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: [
                                    "≈",
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                        value: (0,formatter/* formatGweiToEther */.Hh)(Number(maxFeePerGas)).times(nativeTokenPrice).times(gasLimit),
                                        formatter: formatCurrency/* formatCurrency */.x
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.maxFeePerGas?.message || !!maxFeeGasHelperText,
                                helperText: errors.maxFeePerGas?.message || maxFeeGasHelperText,
                                InputProps: {
                                    inputProps: {
                                        pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                    }
                                }
                            }),
                        name: "maxFeePerGas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                variant: "contained",
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabled
                },
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t.confirm()
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/GasSetting/Prior1559GasSetting.tsx























const Prior1559GasSetting_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: '#f7f9fa',
                borderRadius: 8,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        },
        optionsTitle: {
            color: '#7B8192',
            fontSize: 16,
            lineHeight: '22px'
        },
        optionsContent: {
            fontSize: 11
        },
        gasUSD: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '14px',
            wordBreak: 'break-all'
        },
        label: {
            color: theme.palette.primary.main,
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0'
        },
        selected: {
            backgroundColor: theme.palette.primary.main,
            '& > *': {
                color: theme.palette.primary.contrastText
            }
        },
        button: {
            fontWeight: 600,
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        disabled: {
            opacity: 0.5,
            backgroundColor: '#1C68F3!important',
            color: '#ffffff!important'
        }
    }));
const minGasPriceOfChain = {
    [types/* ChainId */.a_.BSC]: (0,number/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId */.a_.Conflux]: (0,number/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId */.a_.Matic]: (0,number/* pow10 */.wA)(9).multipliedBy(30),
    [types/* ChainId */.a_.Astar]: (0,number/* pow10 */.wA)(9).multipliedBy(5)
};
// 5 Gwei
const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = Prior1559GasSetting_useStyles();
    const { data: gasOptions_ } = (0,useGasOptions/* useGasOptions */.o)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { value, loading: getValueLoading } = useUnconfirmedRequest();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [selected, setOption] = (0,react.useState)(null);
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId: nativeToken?.chainId
    });
    // #region Get gas options from debank
    const gasOptions = (0,react.useMemo)(()=>{
        return {
            slow: gasOptions_?.[specs/* GasOptionType */.Qd.SLOW].suggestedMaxFeePerGas ?? 0,
            standard: gasOptions_?.[specs/* GasOptionType */.Qd.NORMAL].suggestedMaxFeePerGas ?? 0,
            fast: gasOptions_?.[specs/* GasOptionType */.Qd.FAST].suggestedMaxFeePerGas ?? 0
        };
    }, [
        chainId,
        gasOptions_
    ]);
    // #endregion
    const options = (0,react.useMemo)(()=>gasOptions ? [
            {
                title: t.popups_wallet_gas_fee_settings_low(),
                gasPrice: gasOptions.slow
            },
            {
                title: t.popups_wallet_gas_fee_settings_medium(),
                gasPrice: gasOptions.standard
            },
            {
                title: t.popups_wallet_gas_fee_settings_high(),
                gasPrice: gasOptions.fast
            }
        ] : null, [
        gasOptions
    ]);
    const gas = (0,react.useMemo)(()=>{
        if (value && (value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.TRANSFER || value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.INTERACTION)) {
            return new bignumber/* BigNumber */.O(value?.formatterTransaction?._tx.gas ?? 0).toNumber();
        }
        return 0;
    }, [
        value
    ]);
    const { value: minGasLimit } = (0,useAsync/* default */.Z)(async ()=>{
        if (value && (value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.TRANSFER || value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.INTERACTION)) {
            try {
                return entry/* Web3 */.Bv.estimateTransaction?.(value.formatterTransaction._tx) ?? 0;
            } catch  {
                return 0;
            }
        }
        return 0;
    }, [
        value
    ]);
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t.wallet_transfer_error_gas_limit_absence()).refine((gasLimit)=>new bignumber/* BigNumber */.O(gasLimit).gte(minGasLimit ?? 0), t.popups_wallet_gas_fee_settings_min_gas_limit_tips({
                limit: String(minGasLimit)
            })),
            gasPrice: lib.z.string().min(1, t.wallet_transfer_error_gas_price_absence())
        });
    }, [
        minGasLimit
    ]);
    const { control, handleSubmit, setValue, formState: { errors } } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: '',
            gasPrice: ''
        },
        context: {
            minGasLimit
        }
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.TRANSFER || value?.formatterTransaction?.type === specs/* TransactionDescriptorType */.vt.INTERACTION) {
            // if rpc payload contain gas price, set it to default values
            if (value?.formatterTransaction._tx.gasPrice) {
                const minGasPrice = minGasPriceOfChain[chainId];
                // if the gas price in payload is lower than minimum value
                if (minGasPrice && (0,number/* isLessThan */.FI)(value.formatterTransaction._tx.gasPrice, minGasPrice)) {
                    setValue('gasPrice', new bignumber/* BigNumber */.O(minGasPrice).toString());
                }
                setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(value.formatterTransaction._tx.gasPrice).toString());
            } else {
                setOption(1);
            }
        }
    }, [
        value,
        setValue,
        chainId
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        const gasLimit = minGasLimit || gas;
        if (gasLimit) setValue('gasLimit', new bignumber/* BigNumber */.O(gasLimit).toString());
    }, [
        minGasLimit,
        gas,
        setValue
    ]);
    (0,react.useEffect)(()=>{
        if (selected !== null && options) setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(options[selected].gasPrice).toString());
    }, [
        selected,
        setValue,
        options
    ]);
    const [{ loading }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        if (!value) return;
        const config = value.payload.params.map((param)=>({
                ...param,
                gas: (0,web3_utils_lib.toHex)(new bignumber/* BigNumber */.O(data.gasLimit).toString()),
                gasPrice: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.gasPrice).toString())
            }));
        await service/* default */.ZP.Wallet.updateUnconfirmedRequest({
            ...value.payload,
            params: config
        });
        navigate(-1);
    }, [
        value
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data));
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!value && !getValueLoading) {
            navigate(Routes/* PopupRoutes */.mZ.Wallet, {
                replace: true
            });
        }
    }, [
        value,
        getValueLoading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            options ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title, gasPrice }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setOption(index),
                        className: selected === index ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.optionsContent,
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(gasPrice ?? 0).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: [
                                    "≈",
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                        value: (0,formatter/* formatWeiToEther */.yp)(gasPrice).times(nativeTokenPrice).times(minGasLimit || 21000),
                                        formatter: formatCurrency/* formatCurrency */.x
                                    })
                                ]
                            })
                        ]
                    }, index))
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.popups_wallet_gas_fee_settings_gas_limit()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                InputProps: {
                                    inputProps: {
                                        pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                    }
                                }
                            });
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.popups_wallet_gas_price()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasPrice?.message,
                                helperText: errors.gasPrice?.message,
                                InputProps: {
                                    inputProps: {
                                        pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                    }
                                }
                            }),
                        name: "gasPrice"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                variant: "contained",
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabled
                },
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t.confirm()
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/GasSetting/index.tsx










const GasSetting_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        container: {
            padding: 16,
            '& > *': {
                marginTop: 10
            }
        },
        title: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 500
        },
        description: {
            fontSize: 12,
            lineHeight: '18px',
            color: '#7B8192'
        }
    }));
const GasSetting = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = GasSetting_useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    (0,useTitle/* useTitle */.Z)(t.popups_gas_fee_settings());
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                style: {
                    marginTop: 0
                },
                children: t.popups_wallet_gas_fee_settings()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: t.popups_wallet_gas_fee_settings_description()
            }),
            entry/* ChainResolver */.iv.isFeatureSupported(chainId, 'EIP1559') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting1559, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559GasSetting, {})
        ]
    });
});
/* harmony default export */ const Wallet_GasSetting = (GasSetting);


/***/ }),

/***/ 15610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_Interaction)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/mapValues.js
var mapValues = __webpack_require__(4474);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useUpdateEffect/index.js + 2 modules
var useUpdateEffect = __webpack_require__(6249);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useMessages.ts
var useMessages = __webpack_require__(91784);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/createJsonRpcPayload.ts
var createJsonRpcPayload = __webpack_require__(83135);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/PayloadEditor.ts + 1 modules
var PayloadEditor = __webpack_require__(61227);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/abiCoder.ts
var abiCoder = __webpack_require__(1853);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/addGasMargin.ts
var addGasMargin = __webpack_require__(92263);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ErrorEditor.ts
var ErrorEditor = __webpack_require__(40225);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var type = __webpack_require__(85103);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/SignRequestInfo/index.tsx
var SignRequestInfo = __webpack_require__(98875);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContacts.ts
var useContacts = __webpack_require__(57131);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdSupport.ts
var useChainIdSupport = __webpack_require__(28163);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.js
var isString = __webpack_require__(82708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/mask/popups/components/GasSettingMenu/index.tsx + 1 modules
var GasSettingMenu = __webpack_require__(69516);
;// CONCATENATED MODULE: ./packages/mask/popups/components/TransactionPreview/index.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        info: {
            background: theme.palette.maskColor.modalTitleBg,
            borderRadius: 8,
            padding: theme.spacing(1.5)
        },
        title: {
            fontSize: 20,
            fontWeight: 700,
            lineHeight: '24px'
        },
        addressTitle: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        },
        tokenIcon: {
            width: 24,
            height: 24,
            borderRadius: '50%'
        },
        amount: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 10,
            fontSize: 18,
            fontWeight: 700
        },
        value: {
            fontSize: 14,
            lineHeight: '18px'
        },
        gasFeeTitle: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        }
    }));
const TransactionPreview = /*#__PURE__*/ (0,react.memo)(function TransactionPreview({ transaction, onConfigChange, paymentToken, onPaymentTokenChange }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const contacts = (0,useContacts/* useContacts */.g)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { title, to, tokenAddress, amount } = (0,react.useMemo)(()=>{
        const type = transaction?.formattedTransaction?.type;
        if (!type) return {};
        switch(type){
            case specs/* TransactionDescriptorType */.vt.INTERACTION:
                const to = transaction.formattedTransaction?.context?.methods?.find((x)=>[
                        'transfer',
                        'transferFrom',
                        'safeTransferFrom'
                    ].includes(x.name ?? ''))?.parameters?.to;
                return {
                    title: transaction.formattedTransaction?.title ?? t.popups_wallet_contract_interaction(),
                    to: to && (0,isString/* default */.Z)(to) ? to : transaction.computedPayload?.to,
                    tokenAddress: transaction.formattedTransaction?.tokenInAddress,
                    amount: transaction.formattedTransaction?.tokenInAmount ?? transaction.computedPayload.value
                };
            case specs/* TransactionDescriptorType */.vt.TRANSFER:
                return {
                    title: t.wallet_transfer_send(),
                    to: transaction.computedPayload.to,
                    tokenAddress: '',
                    amount: transaction.computedPayload.value
                };
            case specs/* TransactionDescriptorType */.vt.DEPLOYMENT:
            case specs/* TransactionDescriptorType */.vt.RETRY:
            case specs/* TransactionDescriptorType */.vt.CANCEL:
                throw new Error('Method not implemented.');
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        transaction
    ]);
    const tokenId = transaction?.formattedTransaction?.popup?.tokenId;
    const { data: metadata } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, tokenId ? transaction.computedPayload.to : undefined, tokenId);
    const isSupport1559 = (0,useChainIdSupport/* useChainIdSupport */.U)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, 'EIP1559', chainId);
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, to);
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: token } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, tokenAddress || nativeToken?.address);
    const { data: tokenPrice } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address, {
        chainId
    });
    const tokenValueUSD = amount && tokenPrice ? (0,number/* leftShift */.w5)(amount, token?.decimals).times(tokenPrice).toString() : '0';
    const initConfig = (0,react.useMemo)(()=>{
        if (!transaction?.computedPayload) return;
        if (isSupport1559) {
            if (transaction.computedPayload.maxFeePerGas && transaction.computedPayload.maxPriorityFeePerGas) return {
                gasOptionType: transaction.gasOptionType,
                maxFeePerGas: transaction.computedPayload.maxFeePerGas,
                maxPriorityFeePerGas: transaction.computedPayload.maxPriorityFeePerGas
            };
            return;
        }
        if (!transaction.computedPayload.gasPrice) return;
        return {
            gasPrice: transaction.computedPayload.gasPrice,
            gasOptionType: transaction.gasOptionType
        };
    }, [
        transaction?.computedPayload,
        transaction?.gasOptionType,
        isSupport1559
    ]);
    const receiver = (0,react.useMemo)(()=>{
        if (domain) return Others.formatDomainName(domain);
        const target = contacts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, to));
        return target?.name;
    }, [
        domain,
        to,
        contacts
    ]);
    if (!transaction) return;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: title
                            }),
                            receiver ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: receiver
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        mt: 2,
                        display: "flex",
                        columnGap: 0.5,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.addressTitle,
                                children: [
                                    t.to(),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 11,
                                fontWeight: 700,
                                lineHeight: "16px",
                                children: to
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 3,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        component: "div",
                        className: classes.amount,
                        children: [
                            tokenId && metadata?.collection?.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                        icon: metadata.collection.iconURL,
                                        className: classes.tokenIcon
                                    }),
                                    metadata.collection.name,
                                    "#",
                                    tokenId
                                ]
                            }) : null,
                            !tokenId ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                        address: (tokenAddress || nativeToken?.address) ?? '',
                                        chainId: chainId,
                                        name: token?.name,
                                        className: classes.tokenIcon
                                    }),
                                    amount ? (0,formatBalance/* formatBalance */.a)(amount, token?.decimals, 4, false, true, (0,number/* leftShift */.w5)(amount, token?.decimals).isGreaterThan(1) ? 6 : 12) : null
                                ]
                            }) : null
                        ]
                    }),
                    !(0,number/* isGreaterThan */.T1)(tokenValueUSD, (0,number/* pow10 */.wA)(9)) && !tokenId ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.value,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                            value: tokenValueUSD,
                            formatter: formatCurrency/* formatCurrency */.x,
                            options: {
                                onlyRemainTwoOrZeroDecimal: true
                            }
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                mt: 3.75,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.gasFeeTitle,
                        children: t.popups_wallet_gas_fee()
                    }),
                    transaction.computedPayload.gas && !!initConfig ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingMenu/* GasSettingMenu */.Y, {
                        minimumGas: transaction.computedPayload.gas,
                        initConfig: initConfig,
                        onChange: onConfigChange,
                        paymentToken: paymentToken,
                        allowMaskAsGas: transaction.allowMaskAsGas,
                        owner: transaction.owner,
                        onPaymentTokenChange: onPaymentTokenChange
                    }) : null
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(35396);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TextField/TextField.js
var TextField = __webpack_require__(76550);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
;// CONCATENATED MODULE: ./packages/mask/popups/components/UnlockERC20Token/index.tsx













const UnlockERC20Token_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        title: {
            fontSize: 18,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: '22px'
        },
        tips: {
            fontSize: 12,
            fontWeight: 700,
            textAlign: 'center',
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(1.25)
        },
        tokenInfo: {
            background: theme.palette.maskColor.modalTitleBg,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1.25),
            display: 'flex',
            alignItems: 'center',
            borderRadius: 99
        },
        tokenIcon: {
            width: 24,
            height: 24,
            borderRadius: '50%'
        },
        name: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px'
        },
        address: {
            fontSize: 12,
            transform: 'scale(0.8333)',
            color: theme.palette.maskColor.second,
            fontWeight: 400,
            transformOrigin: 'left'
        },
        link: {
            width: 16,
            height: 16,
            color: theme.palette.maskColor.main
        },
        amountInfo: {
            marginTop: theme.spacing(3.25),
            padding: theme.spacing(1.5),
            borderRadius: 8,
            border: `1px solid ${theme.palette.maskColor.line}`,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 10
        },
        input: {
            paddingRight: '0px !important',
            background: theme.palette.maskColor.input
        },
        max: {
            fontWeight: 400,
            textTransform: 'uppercase'
        },
        spender: {
            color: theme.palette.maskColor.second,
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px',
            display: 'flex',
            flexDirection: 'column'
        },
        spenderAddress: {
            marginTop: 4,
            color: theme.palette.maskColor.main,
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            columnGap: 4
        },
        gasFeeTitle: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        }
    }));
const UnlockERC20Token = /*#__PURE__*/ (0,react.memo)(function UnlockERC20Token({ transaction, handleChange, onConfigChange, onPaymentTokenChange, paymentToken }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = UnlockERC20Token_useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const [value, setValue] = (0,react.useState)('');
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const isSupport1559 = (0,useChainIdSupport/* useChainIdSupport */.U)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, 'EIP1559', chainId);
    const { data: token } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, transaction.formattedTransaction?.tokenInAddress, undefined, {
        chainId
    });
    const { data: balance = '0' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, transaction.formattedTransaction?.tokenInAddress);
    const initConfig = (0,react.useMemo)(()=>{
        if (!transaction?.computedPayload) return;
        if (isSupport1559) {
            if (transaction.computedPayload.maxFeePerGas && transaction.computedPayload.maxPriorityFeePerGas) return {
                maxFeePerGas: transaction.computedPayload.maxFeePerGas,
                maxPriorityFeePerGas: transaction.computedPayload.maxPriorityFeePerGas
            };
            return;
        }
        if (!transaction.computedPayload.gasPrice) return;
        return {
            gasPrice: transaction.computedPayload.gasPrice
        };
    }, [
        transaction?.computedPayload,
        isSupport1559
    ]);
    const tips = (0,react.useMemo)(()=>{
        if ((0,number/* isZero */.Fr)(value)) {
            return t.popups_wallet_unlock_erc20_revoke_tips();
        }
        if ((0,number/* isGreaterThan */.T1)(value, (0,number/* leftShift */.w5)(balance, token?.decimals))) {
            return t.popups_wallet_unlock_erc20_balance_too_high_tips();
        }
        return t.popups_wallet_unlock_erc20_balance_tips({
            amount: value,
            symbol: String(token?.symbol)
        });
    }, [
        value,
        balance,
        token
    ]);
    if (!transaction.formattedTransaction) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "popups_wallet_unlock_erc20_title",
                    components: {
                        br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    },
                    values: {
                        symbol: token?.symbol
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tips,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "popups_wallet_unlock_erc20_tips",
                    components: {
                        br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.tokenInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                        address: token?.address ?? '',
                        chainId: chainId,
                        name: token?.name,
                        className: classes.tokenIcon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        width: "262px",
                        mr: "18px",
                        ml: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: token?.symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                children: token?.address
                            })
                        ]
                    }),
                    token?.address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        columnGap: 1,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                text: token.address,
                                size: 16
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: entry/* ExplorerResolver */.Xz.addressLink(chainId, token.address),
                                className: classes.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 16
                                })
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.amountInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        fullWidth: true,
                        placeholder: t.popups_wallet_unlock_erc20_placeholder(),
                        value: value,
                        onChange: (e)=>{
                            setValue(e.target.value);
                            handleChange((0,number/* rightShift */.pu)(e.target.value, token?.decimals).toString());
                        },
                        InputProps: {
                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "text",
                                className: classes.max,
                                onClick: ()=>{
                                    setValue((0,number/* leftShift */.w5)(balance, token?.decimals).toString());
                                    handleChange(balance);
                                },
                                children: t.max()
                            }),
                            disableUnderline: true,
                            className: classes.input,
                            type: 'number',
                            inputProps: {
                                pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek,
                                min: 0
                            }
                        }
                    }),
                    value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        fontWeight: 700,
                        color: (0,number/* isGreaterThan */.T1)(value, (0,number/* leftShift */.w5)(balance, token?.decimals)) ? theme.palette.maskColor.danger : theme.palette.maskColor.warn,
                        children: tips
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        children: t.popups_wallet_unlock_erc20_requested_by()
                    }),
                    transaction.formattedTransaction.popup?.spender ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.spender,
                        component: "div",
                        children: [
                            t.contract(),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.spenderAddress,
                                children: [
                                    transaction.formattedTransaction.popup?.spender,
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: entry/* ExplorerResolver */.Xz.addressLink(chainId, transaction.formattedTransaction.popup.spender),
                                        className: classes.link,
                                        style: {
                                            color: theme.palette.maskColor.second
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 16
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                mt: 3.75,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.gasFeeTitle,
                        children: t.popups_wallet_gas_fee()
                    }),
                    transaction.computedPayload.gas && initConfig ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingMenu/* GasSettingMenu */.Y, {
                        minimumGas: transaction.computedPayload.gas,
                        initConfig: initConfig,
                        onChange: onConfigChange,
                        onPaymentTokenChange: onPaymentTokenChange,
                        owner: transaction.owner,
                        paymentToken: paymentToken,
                        allowMaskAsGas: transaction.allowMaskAsGas
                    }) : null
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleCollections.ts
var useNonFungibleCollections = __webpack_require__(26896);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/mask/popups/components/UnlockERC721Token/index.tsx














const UnlockERC721Token_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        title: {
            fontSize: 18,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: '22px'
        },
        tips: {
            fontSize: 12,
            fontWeight: 700,
            textAlign: 'center',
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(1.25)
        },
        tokenInfo: {
            background: theme.palette.maskColor.modalTitleBg,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1.25),
            display: 'flex',
            alignItems: 'center',
            borderRadius: 99
        },
        tokenIcon: {
            width: 24,
            height: 24,
            borderRadius: '50%'
        },
        name: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px'
        },
        address: {
            fontSize: 12,
            transform: 'scale(0.8333)',
            color: theme.palette.maskColor.second,
            fontWeight: 400,
            transformOrigin: 'left'
        },
        link: {
            width: 16,
            height: 16,
            color: theme.palette.maskColor.main
        },
        amountInfo: {
            marginTop: theme.spacing(3.25),
            padding: theme.spacing(1.5),
            borderRadius: 8,
            border: `1px solid ${theme.palette.maskColor.line}`,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 10
        },
        spender: {
            color: theme.palette.maskColor.second,
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px',
            display: 'flex',
            flexDirection: 'column'
        },
        spenderAddress: {
            marginTop: 4,
            color: theme.palette.maskColor.main,
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            columnGap: 4
        },
        gasFeeTitle: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        }
    }));
const UnlockERC721Token = /*#__PURE__*/ (0,react.memo)(function UnlockERC721Token({ transaction, onConfigChange, onPaymentTokenChange, paymentToken }) {
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = UnlockERC721Token_useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const { chainId, account } = (0,useContext/* useChainContext */.ql)();
    const isSupport1559 = (0,useChainIdSupport/* useChainIdSupport */.U)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, 'EIP1559', chainId);
    const connection = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        chainId
    });
    const { data: contract } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'nft-contract',
            chainId,
            transaction.computedPayload.to
        ],
        queryFn: ()=>{
            if (!transaction.computedPayload.to) return;
            return connection.getNonFungibleTokenContract(transaction.computedPayload.to, undefined, {
                chainId
            });
        }
    });
    const { data: collections = constants/* EMPTY_LIST */.rP } = (0,useNonFungibleCollections/* useNonFungibleCollections */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    const collection = collections.find((x)=>(0,isSameAddress/* isSameAddress */.W)(contract?.address, x.address));
    const initConfig = (0,react.useMemo)(()=>{
        if (!transaction?.computedPayload) return;
        if (isSupport1559) {
            if (transaction.computedPayload.maxFeePerGas && transaction.computedPayload.maxPriorityFeePerGas) return {
                maxFeePerGas: transaction.computedPayload.maxFeePerGas,
                maxPriorityFeePerGas: transaction.computedPayload.maxPriorityFeePerGas
            };
            return;
        }
        if (!transaction.computedPayload.gasPrice) return;
        return {
            gasPrice: transaction.computedPayload.gasPrice
        };
    }, [
        transaction?.computedPayload,
        isSupport1559
    ]);
    if (!transaction.formattedTransaction) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "popups_wallet_unlock_erc721_title",
                    components: {
                        br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    },
                    values: {
                        symbol: contract?.symbol
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tips,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "popups_wallet_unlock_erc721_tips",
                    components: {
                        br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.tokenInfo,
                children: [
                    contract?.address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                        address: contract?.address,
                        name: contract?.name,
                        label: "",
                        logoURL: collection?.iconURL ?? '',
                        className: classes.tokenIcon,
                        tokenType: specs/* TokenType */.iv.NonFungible
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        width: "262px",
                        mr: "18px",
                        ml: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: contract?.symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                children: contract?.address
                            })
                        ]
                    }),
                    contract?.address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        columnGap: 1,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                text: contract.address,
                                size: 16
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: entry/* ExplorerResolver */.Xz.addressLink(chainId, contract.address),
                                className: classes.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 16
                                })
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.amountInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        children: t.popups_wallet_unlock_erc20_requested_by()
                    }),
                    transaction.formattedTransaction.popup?.erc721Spender ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.spender,
                        children: [
                            t.contract(),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.spenderAddress,
                                children: [
                                    transaction.formattedTransaction.popup?.erc721Spender,
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: entry/* ExplorerResolver */.Xz.addressLink(chainId, transaction.formattedTransaction.popup.erc721Spender),
                                        className: classes.link,
                                        style: {
                                            color: theme.palette.maskColor.second
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 16
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                mt: 3.75,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.gasFeeTitle,
                        children: t.popups_wallet_gas_fee()
                    }),
                    transaction.computedPayload.gas && initConfig ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingMenu/* GasSettingMenu */.Y, {
                        minimumGas: transaction.computedPayload.gas,
                        initConfig: initConfig,
                        onChange: onConfigChange,
                        onPaymentTokenChange: onPaymentTokenChange,
                        owner: transaction.owner,
                        paymentToken: paymentToken,
                        allowMaskAsGas: transaction.allowMaskAsGas
                    }) : null
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/Interaction/index.tsx























const Interaction_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        left: {
            transform: 'rotate(90deg)',
            cursor: 'pointer'
        },
        right: {
            transform: 'rotate(-90deg)',
            cursor: 'pointer'
        },
        disabled: {
            color: theme.palette.maskColor.second,
            cursor: 'unset'
        },
        text: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px'
        },
        arrowIcon: {
            transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        },
        expand: {
            transform: 'rotate(180deg)'
        },
        transactionDetail: {
            padding: theme.spacing(1.5),
            margin: theme.spacing(2, 0),
            border: `1px solid ${theme.palette.maskColor.line}`,
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 10
        },
        document: {
            color: theme.palette.maskColor.second
        },
        data: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.second,
            wordBreak: 'break-all'
        },
        itemTitle: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        },
        itemValue: {
            fontSize: 12,
            fontWeight: 700
        }
    }));
const signRequest = [
    types/* EthereumMethodType */.W8.ETH_SIGN,
    types/* EthereumMethodType */.W8.ETH_SIGN_TYPED_DATA,
    types/* EthereumMethodType */.W8.PERSONAL_SIGN
];
const approveParametersType = [
    {
        name: 'spender',
        type: 'address'
    },
    {
        name: 'value',
        type: 'uint256'
    }
];
const Interaction = /*#__PURE__*/ (0,react.memo)(function Interaction() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = Interaction_useStyles();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const [index, setIndex] = (0,react.useState)(0);
    const [approveAmount, setApproveAmount] = (0,react.useState)('');
    const [expand, setExpand] = (0,react.useState)(false);
    const [gasConfig, setGasConfig] = (0,react.useState)();
    const [paymentToken, setPaymentToken] = (0,react.useState)('');
    const messages = (0,useMessages/* useMessages */.y)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { Message, TransactionFormatter } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const source = params.get('source');
    const currentRequest = (0,react.useMemo)(()=>{
        if (!messages?.length) return;
        return messages[index];
    }, [
        messages,
        index
    ]);
    const message = (0,react.useMemo)(()=>{
        if (!currentRequest || !signRequest.includes(currentRequest.request.arguments.method)) return;
        const { method, params } = currentRequest.request.arguments;
        if (method === types/* EthereumMethodType */.W8.ETH_SIGN || method === types/* EthereumMethodType */.W8.ETH_SIGN_TYPED_DATA) {
            try {
                return (0,lib.toUtf8)(params[1]);
            } catch  {
                return params[1];
            }
        } else if (method === types/* EthereumMethodType */.W8.PERSONAL_SIGN) {
            return params[0];
        }
    }, [
        currentRequest
    ]);
    const { value: transaction, loading } = (0,useAsync/* default */.Z)(async ()=>{
        if (!currentRequest?.request) return;
        const payload = (0,createJsonRpcPayload/* createJsonRpcPayload */.B)(0, currentRequest.request.arguments);
        const computedPayload = PayloadEditor/* PayloadEditor */._.fromPayload(payload).config;
        const formattedTransaction = await TransactionFormatter?.formatTransaction(chainId, computedPayload);
        const transactionContext = await TransactionFormatter?.createContext(chainId, computedPayload);
        return {
            ...currentRequest.request.options,
            payload,
            computedPayload,
            formattedTransaction,
            transactionContext
        };
    }, [
        currentRequest,
        chainId,
        TransactionFormatter
    ]);
    const [{ loading: confirmLoading }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (!currentRequest) return;
            let params = currentRequest.request.arguments.params;
            if (approveAmount) {
                if (!transaction?.formattedTransaction?._tx.data) return;
                const parameters = abiCoder/* abiCoder */.r.decodeParameters(approveParametersType, transaction?.formattedTransaction._tx.data.slice(10));
                const parametersString = abiCoder/* abiCoder */.r.encodeParameters(approveParametersType, [
                    parameters.spender,
                    (0,lib.toHex)(approveAmount)
                ]).slice(2);
                const result = `${transaction.formattedTransaction._tx.data.slice(0, 10)}${parametersString}`;
                params = (0,compact/* default */.Z)(currentRequest.request.arguments.params.map((x)=>x === 'latest' ? chainId !== types/* ChainId */.a_.Celo ? x : undefined : {
                        ...x,
                        data: result
                    }));
            }
            if (!signRequest.includes(currentRequest.request.arguments.method)) {
                params = (0,compact/* default */.Z)(params.map((x)=>{
                    if (x === 'latest') {
                        if (chainId === types/* ChainId */.a_.Celo) return;
                        return x;
                    }
                    return {
                        ...x,
                        ...gasConfig ? (0,mapValues/* default */.Z)((0,omit/* default */.Z)(gasConfig, 'gasOptionType'), (value, key)=>{
                            if (key === 'gasCurrency' || !value) return;
                            return (0,lib.toHex)(value);
                        }) : {},
                        gas: (0,lib.toHex)((0,addGasMargin/* addGasMargin */.b)(gasConfig?.gas ?? x.gas).toString()),
                        chainId: (0,lib.toHex)(x.chainId),
                        nonce: (0,lib.toHex)(x.nonce)
                    };
                }));
            }
            const response = await Message?.approveRequest(currentRequest.ID, {
                ...currentRequest.request,
                arguments: {
                    ...currentRequest.request.arguments,
                    params
                },
                options: {
                    ...currentRequest.request.options,
                    paymentToken
                }
            });
            const editor = response ? ErrorEditor/* ErrorEditor */.Q.from(null, response) : undefined;
            if (editor?.presence) throw editor.error;
            if (source) await service/* default */.ZP.Helper.removePopupWindow();
            navigate((0,dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Wallet, {
                tab: type/* WalletAssetTabs */.T9.Activity
            }), {
                replace: true
            });
        } catch (error) {
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                textAlign: "center",
                width: "275px",
                children: t.popups_wallet_rpc_error()
            }), {
                variant: 'error'
            });
        }
    }, [
        chainId,
        currentRequest,
        Message,
        source,
        gasConfig,
        approveAmount,
        transaction?.formattedTransaction?._tx.data,
        paymentToken
    ]);
    const [{ loading: cancelLoading }, handleCancel] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!currentRequest) return;
        await Message?.denyRequest(currentRequest.ID);
        if (source) await service/* default */.ZP.Helper.removePopupWindow();
        navigate(Routes/* PopupRoutes */.mZ.Wallet, {
            replace: true
        });
    }, [
        currentRequest,
        Message,
        source
    ]);
    const [{ loading: cancelAllLoading }, handleCancelAllRequest] = (0,useAsyncFn/* default */.Z)(async ()=>{
        await Message?.denyAllRequests();
        if (source) await service/* default */.ZP.Helper.removePopupWindow();
        navigate(Routes/* PopupRoutes */.mZ.Wallet, {
            replace: true
        });
    }, [
        Message,
        source
    ]);
    const handleChangeGasConfig = (0,react.useCallback)((config)=>{
        setGasConfig(config);
    }, []);
    const content = (0,react.useMemo)(()=>{
        if (currentRequest && signRequest.includes(currentRequest?.request.arguments.method)) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SignRequestInfo/* SignRequestInfo */.a, {
                message: message,
                source: source
            });
        }
        if (transaction?.formattedTransaction?.popup?.spender) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockERC20Token, {
                onConfigChange: handleChangeGasConfig,
                paymentToken: paymentToken,
                onPaymentTokenChange: (paymentToken)=>setPaymentToken(paymentToken),
                transaction: transaction,
                handleChange: (value)=>setApproveAmount(value)
            });
        }
        if (transaction?.formattedTransaction?.popup?.erc721Spender) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockERC721Token, {
                onConfigChange: handleChangeGasConfig,
                paymentToken: paymentToken,
                onPaymentTokenChange: (paymentToken)=>setPaymentToken(paymentToken),
                transaction: transaction
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionPreview, {
            transaction: transaction,
            onConfigChange: handleChangeGasConfig,
            paymentToken: paymentToken,
            onPaymentTokenChange: (paymentToken)=>setPaymentToken(paymentToken)
        });
    }, [
        message,
        source,
        transaction,
        handleChangeGasConfig,
        currentRequest,
        paymentToken
    ]);
    // clear gas config when index has been changed
    (0,useUpdateEffect/* useUpdateEffect */.r)(()=>{
        setGasConfig(undefined);
        setExpand(false);
        setApproveAmount('');
        setPaymentToken('');
    }, [
        index
    ]);
    (0,react.useEffect)(()=>{
        if (!messages.length) return;
        setIndex(messages.length - 1);
    }, [
        messages.length
    ]);
    // update default payment token from transaction
    (0,react.useEffect)(()=>{
        if (!transaction?.paymentToken) return;
        setPaymentToken((prev)=>{
            if (prev) return prev;
            return transaction.paymentToken ?? '';
        });
    }, [
        transaction?.paymentToken
    ]);
    if (!currentRequest) return;
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                p: 2,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                maxHeight: "458px",
                overflow: "auto",
                "data-hide-scrollbar": true,
                children: [
                    content,
                    currentRequest && !signRequest.includes(currentRequest?.request.arguments.method) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                        style: {
                            cursor: 'pointer'
                        },
                        onClick: ()=>setExpand(!expand),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.text,
                                children: t.popups_wallet_view_full_detail_transaction()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                size: 16,
                                sx: {
                                    marginLeft: 0.5
                                },
                                className: cx(classes.arrowIcon, expand ? classes.expand : undefined)
                            })
                        ]
                    }) : null,
                    expand ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.transactionDetail,
                        style: {
                            marginBottom: expand && messages.length <= 1 ? 0 : 16
                        },
                        children: [
                            transaction?.formattedTransaction?.popup?.spender && approveAmount ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: 1.25,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.itemTitle,
                                                children: t.popups_wallet_unlock_erc20_approve_amount()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.itemValue,
                                                children: approveAmount
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: 1.25,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.itemTitle,
                                                children: t.popups_wallet_unlock_erc20_granted_to()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.itemValue,
                                                children: (0,formatter/* formatEthereumAddress */.j8)(transaction.formattedTransaction.popup.spender, 4)
                                            })
                                        ]
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                columnGap: 0.5,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Documents, {
                                        className: classes.document,
                                        size: 16
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.text,
                                        children: t.data()
                                    })
                                ]
                            }),
                            transaction?.formattedTransaction?.popup?.method ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.text,
                                children: t.popups_wallet_transaction_function_name({
                                    name: transaction?.formattedTransaction.popup.method
                                })
                            }) : null,
                            transaction?.formattedTransaction?._tx.data ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.data,
                                children: transaction.formattedTransaction._tx.data
                            }) : null
                        ]
                    }) : null,
                    messages.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "auto",
                        marginBottom: 9,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                        size: 16,
                                        className: cx(classes.left, index === 0 ? classes.disabled : undefined),
                                        onClick: ()=>{
                                            if (index === 0) return;
                                            setIndex(index - 1);
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.text,
                                        children: t.popups_wallet_multiple_requests({
                                            index: String(index + 1),
                                            total: String(messages.length)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                        size: 16,
                                        className: cx(classes.right, index === messages.length - 1 ? classes.disabled : undefined),
                                        onClick: ()=>{
                                            if (index === messages.length - 1) return;
                                            setIndex(index + 1);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                variant: "text",
                                color: "info",
                                onClick: handleCancelAllRequest,
                                loading: cancelAllLoading,
                                children: t.popups_wallet_reject_all_requests({
                                    total: String(messages.length)
                                })
                            })
                        ]
                    }) : null
                ]
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
                        children: signRequest.includes(currentRequest?.request.arguments.method) ? t.sign() : t.confirm()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Wallet_Interaction = (Interaction);


/***/ }),

/***/ 79269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78909);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28236);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95621);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21508);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86244);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(98662);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24835);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72889);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41487);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94715);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23023);
/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8054);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81430);
/* harmony import */ var _hooks_useAsset_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81760);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        header: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        iconContainer: {
            height: 60,
            width: 60,
            position: 'relative'
        },
        badge: {
            position: 'absolute',
            border: `1px solid ${theme.palette.maskColor.white}`,
            width: 17,
            height: 17,
            borderRadius: '50%',
            right: -3,
            bottom: -3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        name: {
            color: theme.palette.maskColor.main,
            marginTop: theme.spacing(1),
            fontSize: 24,
            fontWeight: 700
        },
        address: {
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(1),
            fontSize: 16,
            height: 30,
            display: 'flex',
            alignItems: 'center'
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
            fontSize: 16,
            marginTop: 10,
            textAlign: 'center',
            color: theme.palette.maskColor.second
        },
        copyButton: {
            marginLeft: 8,
            color: theme.palette.maskColor.main
        }
    };
});
const avatarProps = {
    sx: {
        fontSize: 26
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Receive() {
    const { classes } = useStyles();
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { account } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)();
    const { chainId, address, rawAddress } = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useTokenParams */ .S)();
    // No specific token but only for chain
    const isChain = !rawAddress;
    const networks = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useNetworks */ .e)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    const currentNetwork = networks.find((network)=>network.chainId === chainId);
    const asset = (0,_hooks_useAsset_js__WEBPACK_IMPORTED_MODULE_9__/* .useAsset */ .G)(chainId, address ?? '', account);
    (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_10__/* .useTitle */ .Z)(t.wallet_receive());
    const name = isChain ? currentNetwork?.name : asset?.symbol;
    const MainIcon = isChain ? currentNetwork?.iconUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_11__/* .ImageIcon */ .X, {
        size: 60,
        icon: currentNetwork.iconUrl,
        name: currentNetwork.name
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_12__/* .Icon */ .J, {
        size: 60,
        name: currentNetwork?.name,
        color: currentNetwork?.color,
        ...avatarProps
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_13__/* .TokenIcon */ .T, {
        chainId: chainId,
        address: address,
        name: asset?.name,
        logoURL: asset?.logoURL,
        size: 60
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: classes.iconContainer,
                        children: [
                            MainIcon,
                            isChain || !currentNetwork ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classes.badge,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_15__/* .NetworkIcon */ .d, {
                                    pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM,
                                    chainId: currentNetwork.chainId,
                                    size: 16,
                                    network: currentNetwork
                                })
                            })
                        ]
                    }),
                    name ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: classes.name,
                        children: name
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        width: 60,
                        className: classes.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: classes.address,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_18__/* .FormattedAddress */ .K, {
                                address: account,
                                formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .formatEthereumAddress */ .j8,
                                size: 4
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_20__/* .CopyButton */ .q, {
                                text: account,
                                size: 18,
                                className: classes.copyButton
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.halo,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: classes.qrcodeContainer,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: classes.qrcode,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__.QRCode, {
                            value: account,
                            ecLevel: "L",
                            size: 220,
                            quietZone: 16,
                            eyeRadius: 100,
                            qrStyle: "dots"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                className: classes.tip,
                children: t.scan_address_to_payment()
            })
        ]
    });
}));


/***/ }),

/***/ 17627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_Transfer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/AddContactInputPanel/index.tsx
var AddContactInputPanel = __webpack_require__(78827);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useParamTab.ts
var useParamTab = __webpack_require__(96440);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useContactsContext.ts
var useContactsContext = __webpack_require__(38777);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTokenParams.ts
var useTokenParams = __webpack_require__(8054);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useAvailableBalance.ts
var useAvailableBalance = __webpack_require__(58752);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ProgressiveText/index.tsx
var ProgressiveText = __webpack_require__(5393);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/Theme/colors.ts
var colors = __webpack_require__(38060);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
;// CONCATENATED MODULE: ./packages/web3-hooks/evm/src/useGasLimit.ts





function useGasLimit(schemaType, contractAddress, amount, recipient, tokenId, expectedChainId) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const networks = (0,useNetworks/* useNetworks */.e)();
    const network = networks.find((x)=>x.chainId === chainId);
    const options = {
        chainId,
        providerURL: network?.rpcUrl
    };
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'gas-limit',
            chainId,
            schemaType,
            account,
            recipient,
            tokenId,
            amount
        ],
        queryFn: async ()=>{
            if (!recipient || schemaType === undefined) return 0;
            if (schemaType === types/* SchemaType */.XQ.ERC20 && !amount || !contractAddress) return 0;
            if (schemaType === types/* SchemaType */.XQ.ERC721 && !tokenId || !contractAddress) return 0;
            switch(schemaType){
                case types/* SchemaType */.XQ.Native:
                    const gas = await entry/* Web3 */.Bv.estimateTransaction?.({
                        from: account,
                        to: recipient,
                        value: amount
                    }, undefined, options);
                    return Number.parseInt(gas ?? '0', 16);
                case types/* SchemaType */.XQ.ERC20:
                    return entry/* Contract */.CH.getERC20Contract(contractAddress, options)?.methods?.transfer(recipient, amount ?? 0).estimateGas({
                        from: account
                    });
                case types/* SchemaType */.XQ.SBT:
                case types/* SchemaType */.XQ.ERC721:
                    return entry/* Contract */.CH.getERC721Contract(contractAddress, options)?.methods.transferFrom(account, recipient, tokenId ?? '').estimateGas({
                        from: account
                    });
                case types/* SchemaType */.XQ.ERC1155:
                    throw new Error('Method not implemented.');
                default:
                    (0,esm/* unreachable */.t1)(schemaType);
            }
        }
    });
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Input/Input.js
var Input = __webpack_require__(81788);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/mask/shared/helpers/formatTokenBalance.ts
var formatTokenBalance = __webpack_require__(33348);
// EXTERNAL MODULE: ./packages/mask/popups/components/GasSettingMenu/index.tsx + 1 modules
var GasSettingMenu = __webpack_require__(69516);
// EXTERNAL MODULE: ./packages/mask/popups/components/TokenPicker/index.tsx + 1 modules
var TokenPicker = __webpack_require__(79798);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/usePopupContext.ts
var usePopupContext = __webpack_require__(26332);
// EXTERNAL MODULE: ./packages/mask/popups/modals/modal-controls.ts
var modal_controls = __webpack_require__(75904);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasOptions.ts
var useGasOptions = __webpack_require__(98705);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/Transfer/useDefaultGasConfig.ts



function useDefaultGasConfig(chainId, gasLimit) {
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const isSupportEIP1559 = Others.chainResolver.isFeatureSupported(chainId, 'EIP1559');
    const { data: gasOptions } = (0,useGasOptions/* useGasOptions */.o)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const gasOption = gasOptions?.[specs/* GasOptionType */.Qd.SLOW];
    if (!gasOption) return;
    return isSupportEIP1559 ? {
        gasOptionType: specs/* GasOptionType */.Qd.SLOW,
        gas: gasLimit,
        maxFeePerGas: gasOption.suggestedMaxFeePerGas,
        maxPriorityFeePerGas: gasOption.suggestedMaxPriorityFeePerGas
    } : {
        gasOptionType: specs/* GasOptionType */.Qd.SLOW,
        gas: gasLimit,
        gasPrice: gasOption.suggestedMaxFeePerGas
    };
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/Transfer/FungibleTokenSection.tsx





















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        asset: {
            padding: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            borderRadius: 8,
            color: theme.palette.maskColor.white,
            backgroundColor: colors/* MaskColors */.m.light.maskColor.primary,
            cursor: 'pointer',
            margin: theme.spacing(0, 2)
        },
        tokenPicker: {
            margin: theme.spacing(0, 2)
        },
        tokenIcon: {
            width: 36,
            height: 36
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        maxButton: {
            cursor: 'pointer'
        },
        label: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            fontWeight: 700
        },
        error: {
            color: theme.palette.maskColor.danger,
            margin: theme.spacing(2, 2, 0)
        },
        actionGroup: {
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            gap: theme.spacing(2),
            padding: theme.spacing(2),
            width: '100%',
            bottom: 0,
            zIndex: 100,
            marginTop: 'auto'
        }
    }));
const ETH_GAS_LIMIT = '21000';
const ERC20_GAS_LIMIT = '50000';
// Change chain in SelectNetworkSidebar is pending status, but it should affect ContactsContext
const PENDING_CHAIN_ID = 'pendingChainId';
const FungibleTokenSection = /*#__PURE__*/ (0,react.memo)(function FungibleTokenSection() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const { chainId, address, params, setParams } = (0,useTokenParams/* useTokenParams */.S)();
    const { smartPayChainId } = usePopupContext/* PopupContext */.t.useContainer();
    const recipient = params.get('recipient');
    const chainContextValue = (0,react.useMemo)(()=>({
            chainId
        }), [
        chainId
    ]);
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const [paymentAddress, setPaymentAddress] = (0,react.useState)();
    // Enter from wallet home page, sending token is not decided yet
    const undecided = params.get('undecided') === 'true';
    const locationAsset = (0,react_router_dist/* useLocation */.TH)().state?.asset;
    const [selectedAsset = locationAsset, setSelectedAsset] = (0,react.useState)();
    const handleSelectAsset = (0,react.useCallback)((asset)=>{
        setSelectedAsset(asset);
        setParams((p)=>{
            p.set('chainId', asset.chainId.toString());
            p.set('address', asset.address);
            p.delete('undecided');
            p.delete(PENDING_CHAIN_ID);
            return p.toString();
        }, {
            replace: true
        });
    }, [
        setParams
    ]);
    const setPendingChainId = (0,react.useCallback)((chainId)=>{
        setParams((p)=>{
            if (!chainId) {
                p.delete(PENDING_CHAIN_ID);
            } else {
                p.set(PENDING_CHAIN_ID, chainId.toString());
            }
            return p.toString();
        }, {
            replace: true
        });
    }, [
        setParams
    ]);
    const network = (0,useNetwork/* useNetwork */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { data: token, isLoading } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address, undefined, {
        chainId
    });
    const [amount, setAmount] = (0,react.useState)('');
    const totalAmount = (0,react.useMemo)(()=>amount && token?.decimals ? (0,number/* rightShift */.pu)(amount, token.decimals).toFixed() : '0', [
        amount,
        token?.decimals
    ]);
    const isNativeToken = (0,helpers_address/* isNativeTokenAddress */.qw)(address);
    const fallbackGasLimit = isNativeToken ? ETH_GAS_LIMIT : ERC20_GAS_LIMIT;
    const gasResult = useGasLimit(isNativeToken ? types/* SchemaType */.XQ.Native : types/* SchemaType */.XQ.ERC20, address, totalAmount, recipient || undefined, undefined, chainId);
    const gasLimit = gasResult.data?.toString() ?? fallbackGasLimit;
    const { isLoading: isLoadingGasLimit } = gasResult;
    const defaultGasConfig = useDefaultGasConfig(chainId, gasLimit);
    const [gasConfig = defaultGasConfig, setGasConfig] = (0,react.useState)();
    const patchedGasConfig = (0,react.useMemo)(()=>({
            ...gasConfig,
            gasCurrency: paymentAddress,
            gas: gasLimit
        }), [
        gasConfig,
        paymentAddress,
        gasLimit
    ]);
    const { balance, isLoading: isLoadingAvailableBalance, isAvailableBalance, isGasSufficient, gasFee } = (0,useAvailableBalance/* useAvailableBalance */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address, patchedGasConfig, {
        chainId,
        providerURL: network?.rpcUrl
    });
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        account,
        chainId
    });
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [state, transfer] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!recipient || (0,number/* isZero */.Fr)(totalAmount) || !token?.decimals) return;
        const nativeTokenAddress = (0,helpers_address/* getNativeTokenAddress */.rG)(chainId);
        try {
            await Web3.transferFungibleToken(address, recipient, totalAmount, '', {
                overrides: gasConfig,
                paymentToken: paymentAddress ? paymentAddress : chainId === smartPayChainId ? nativeTokenAddress : undefined,
                chainId,
                gasOptionType: gasConfig?.gasOptionType,
                providerURL: network?.rpcUrl
            });
        } catch (err) {
            let message = err.message;
            message = message.includes('"blockNumber":') ? '' : message;
            showSnackbar(t.failed_to_transfer_token({
                message
            }), {
                variant: 'error'
            });
        }
    }, [
        address,
        chainId,
        recipient,
        totalAmount,
        token?.decimals,
        gasConfig,
        paymentAddress,
        network?.rpcUrl,
        smartPayChainId
    ]);
    if (undecided) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPicker/* TokenPicker */.w, {
        className: classes.tokenPicker,
        defaultChainId: chainId,
        chainId: chainId,
        address: address,
        onSelect: handleSelectAsset,
        onChainChange: setPendingChainId
    });
    // Use selectedAsset balance eagerly
    // balance passed from previous page, would be used if during fetching balance.
    const isLoadingBalance = selectedAsset?.balance ? false : isLoadingAvailableBalance || isLoading;
    const optimisticBalance = bignumber/* BigNumber */.O.max(0, (0,number/* minus */.h9)(selectedAsset?.balance || 0, gasFee));
    // Available token balance
    const tokenBalance = (isLoadingAvailableBalance || isLoading) && (0,number/* isZero */.Fr)(balance) ? optimisticBalance : balance;
    const decimals = token?.decimals || selectedAsset?.decimals;
    const uiTokenBalance = tokenBalance && decimals ? (0,number/* leftShift */.w5)(tokenBalance, decimals).toString() : '0';
    const inputNotReady = !recipient || !amount || (0,number/* isLessThan */.FI)(tokenBalance, totalAmount) || (0,number/* isLte */.lK)(totalAmount, 0);
    const tokenNotReady = !token?.decimals || (0,number/* isLessThan */.FI)(tokenBalance, totalAmount) || !isGasSufficient;
    const transferDisabled = inputNotReady || tokenNotReady || isLoadingGasLimit;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.asset,
                "data-hide-scrollbar": true,
                onClick: async ()=>{
                    const picked = await modal_controls/* ChooseTokenModal */.KL.openAndWaitForClose({
                        chainId,
                        address
                    });
                    if (picked) handleSelectAsset(picked);
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        position: "relative",
                        height: 36,
                        width: 36,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                className: classes.tokenIcon,
                                chainId: chainId,
                                address: address,
                                logoURL: selectedAsset?.logoURL
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                                chainId: network?.chainId,
                                className: classes.badgeIcon,
                                size: 16,
                                network: network
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        mr: "auto",
                        ml: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: isLoading,
                                skeletonWidth: 36,
                                children: token?.symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: isLoadingBalance,
                                skeletonWidth: 60,
                                children: isAvailableBalance ? t.available_amount({
                                    amount: (0,formatTokenBalance/* formatTokenBalance */.a)(tokenBalance, token?.decimals)
                                }) : (0,formatTokenBalance/* formatTokenBalance */.a)(tokenBalance, token?.decimals)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                        size: 24
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                mt: 2,
                mx: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.Z, {
                    fullWidth: true,
                    disableUnderline: true,
                    placeholder: t.amount(),
                    endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.maxButton,
                        onClick: ()=>{
                            if (!balance || !token?.decimals) return;
                            setAmount(uiTokenBalance);
                        },
                        children: t.max()
                    }),
                    value: amount,
                    onChange: (e)=>{
                        let value = e.target.value;
                        if (!balance || !token?.decimals || !value) {
                            setAmount(value);
                            return;
                        }
                        value = (0,number/* isLessThan */.FI)(value, uiTokenBalance) ? value : uiTokenBalance;
                        return setAmount(value);
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
                mx: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.gas_fee()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* ChainContextProvider */.on, {
                        value: chainContextValue,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingMenu/* GasSettingMenu */.Y, {
                            initConfig: gasConfig,
                            minimumGas: gasLimit,
                            defaultChainId: chainId,
                            paymentToken: paymentAddress,
                            allowMaskAsGas: true,
                            onPaymentTokenChange: setPaymentAddress,
                            owner: wallet?.owner,
                            onChange: setGasConfig
                        })
                    })
                ]
            }),
            isGasSufficient ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.error,
                children: t.insufficient_funds_for_gas()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.actionGroup,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        variant: "outlined",
                        fullWidth: true,
                        onClick: ()=>navigate(-2),
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        onClick: transfer,
                        disabled: transferDisabled,
                        loading: state.loading,
                        children: t.next()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleList.tsx + 3 modules
var CollectibleList = __webpack_require__(28246);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAssets.ts
var useNonFungibleAssets = __webpack_require__(55149);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensFollower.ts
var isLensFollower = __webpack_require__(63623);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensCollect.ts
var isLensCollect = __webpack_require__(42097);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqWith.js
var uniqWith = __webpack_require__(9402);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/Transfer/NonFungibleTokenSection.tsx












const NonFungibleTokenSection_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        section: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '100%',
            overflow: 'auto',
            flexGrow: 1
        },
        scroll: {
            flexGrow: 1,
            overflow: 'auto',
            paddingBottom: theme.spacing(9),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        collectibleList: {
            padding: 0,
            flexGrow: 1
        },
        actionGroup: {
            position: 'absolute',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            gap: theme.spacing(2),
            padding: theme.spacing(2),
            width: '100%',
            bottom: 0,
            zIndex: 100,
            marginTop: 'auto'
        }
    };
});
function getCollectibleKey(token) {
    return `${token.chainId}.${token.address}.${token.tokenId}`;
}
const NonFungibleTokenSection = /*#__PURE__*/ (0,react.memo)(function NonFungibleTokenSection() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = NonFungibleTokenSection_useStyles();
    const { chainId, address, tokenId, params, setParams } = (0,useTokenParams/* useNonFungibleTokenParams */.W)();
    const { value: fetchedTokens = constants/* EMPTY_LIST */.rP, done, next, loading, dataUpdatedAt } = (0,useNonFungibleAssets/* useNonFungibleAssets */.H)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const tokens = (0,react.useMemo)(()=>{
        const filtered = fetchedTokens.filter((x)=>{
            if ((0,helpers_address/* isLensProfileAddress */._u)(x.address)) return false;
            if (x.metadata?.name && (0,isLensFollower/* isLensFollower */.a)(x.metadata.name)) return false;
            if (x.collection?.name && (0,isLensCollect/* isLensCollect */.C)(x.collection.name)) return false;
            return true;
        });
        return (0,uniqWith/* default */.Z)(filtered, (v1, v2)=>{
            return (0,isSameAddress/* isSameAddress */.W)(v1.contract?.address, v2.contract?.address) && v1.tokenId === v2.tokenId;
        });
    }, [
        fetchedTokens
    ]);
    const hasSelected = address && tokenId;
    const selectedKey = hasSelected ? `${chainId}.${address}.${tokenId}` : undefined;
    const handleChange = (0,react.useCallback)((value)=>{
        setParams((p)=>{
            if (!value) {
                p.delete('nft:chainId');
                p.delete('nft:address');
                p.delete('nft:tokenId');
                return p.toString();
            }
            const [chainId, address, tokenId] = value.split('.');
            p.set('nft:chainId', chainId);
            p.set('nft:address', address);
            p.set('nft:tokenId', tokenId);
            return p.toString();
        }, {
            replace: true
        });
    }, []);
    // Collectibles are lazy loading, we can't let the target token scroll into view before it's loaded
    // So we fetch and prepend it to the list.
    const { data: targetToken } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address || '', tokenId || '', {
        chainId
    });
    const prependTokens = (0,react.useMemo)(()=>{
        if (!hasSelected || !targetToken) return tokens;
        const loadedTargetToken = tokens.find((x)=>x.chainId === chainId && (0,isSameAddress/* isSameAddress */.W)(x.address, address) && x.tokenId === tokenId);
        if (loadedTargetToken) return tokens;
        return [
            targetToken,
            ...tokens
        ];
    }, [
        hasSelected,
        targetToken,
        tokens,
        chainId,
        address,
        tokenId
    ]);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        account,
        chainId
    });
    const recipient = params.get('recipient');
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [state, transfer] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (!address || !tokenId || !recipient) return;
            await Web3.transferNonFungibleToken(address, tokenId, recipient, '1');
            return;
        } catch (error) {
            showSnackbar(t.failed_to_transfer_nft(), {
                variant: 'error'
            });
            return;
        }
    }, [
        address,
        tokenId || recipient
    ]);
    const tokenNotReady = !address || !tokenId;
    const disabled = tokenNotReady || state.loading;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.scroll,
                "data-hide-scrollbar": true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList/* CollectibleList */.O, {
                        className: classes.collectibleList,
                        retry: next,
                        collectibles: prependTokens,
                        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                        loading: loading || !done,
                        columns: 4,
                        gap: 1,
                        selectable: true,
                        value: selectedKey,
                        showNetworkIcon: true,
                        getCollectibleKey: getCollectibleKey,
                        onChange: handleChange
                    }),
                    done ? null : // There might be chains that has no assets, setting key to token size might stuck the loading
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                        callback: ()=>next?.(),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                            size: 36
                        })
                    }, dataUpdatedAt)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.actionGroup,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                    fullWidth: true,
                    onClick: transfer,
                    disabled: disabled,
                    loading: state.loading,
                    children: t.confirm()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var type = __webpack_require__(85103);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/Transfer/index.tsx













const Transfer_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        page: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            height: '100%'
        },
        body: {
            flexGrow: 1,
            // padding: theme.spacing(2, 2, 0),
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
        },
        panel: {
            '&:not([hidden])': {
                marginTop: theme.spacing(2),
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                overflow: 'auto'
            }
        },
        tabs: {
            flex: 'none!important',
            paddingTop: '0px!important',
            paddingLeft: 16,
            paddingRight: 16
        }
    }));
const Transfer = /*#__PURE__*/ (0,react.memo)(function Transfer() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = Transfer_useStyles();
    (0,useTitle/* useTitle */.Z)(t.popups_send());
    const [params, setParams] = (0,dist/* useSearchParams */.lr)();
    const undecided = params.get('undecided') === 'true';
    const [currentTab, handleTabChange] = (0,useParamTab/* useParamTab */.V)(type/* TransferTabType */.md.Token);
    const { address } = useContactsContext/* ContactsContext */.z.useContainer();
    (0,react.useEffect)(()=>{
        setParams((p)=>{
            p.set('recipient', address);
            return p.toString();
        }, {
            replace: true
        });
    }, [
        address,
        setParams
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.page,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: currentTab,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {
                    tabList: undecided ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                        onChange: handleTabChange,
                        "aria-label": "persona-tabs",
                        classes: {
                            root: classes.tabs
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.popups_wallet_token(),
                                value: type/* TransferTabType */.md.Token
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.popups_wallet_collectible(),
                                value: type/* TransferTabType */.md.NFT
                            })
                        ]
                    }) : null
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.body,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AddContactInputPanel/* default */.Z, {
                            p: 0,
                            m: "16px 16px 0",
                            autoFocus: true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: type/* TransferTabType */.md.Token,
                            className: classes.panel,
                            "data-hide-scrollbar": true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenSection, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: type/* TransferTabType */.md.NFT,
                            className: classes.panel,
                            "data-hide-scrollbar": true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NonFungibleTokenSection, {})
                        })
                    ]
                })
            ]
        })
    });
});
const TransferPage = /*#__PURE__*/ (0,react.memo)(function TransferPage() {
    const [params] = (0,dist/* useSearchParams */.lr)();
    const defaultAddress = params.get('recipient') || '';
    const defaultName = params.get('recipientName') || '';
    const { chainId } = (0,useTokenParams/* useTokenParams */.S)();
    const { chainId: nftChainId } = (0,useTokenParams/* useNonFungibleTokenParams */.W)();
    const tab = params.get('tab');
    const rawPendingChainId = params.get('pendingChainId');
    const pendingChainId = rawPendingChainId ? Number.parseInt(rawPendingChainId, 10) : undefined;
    const defaultChainId = pendingChainId ?? (tab === type/* TransferTabType */.md.Token ? chainId : nftChainId);
    const initialState = (0,react.useMemo)(()=>({
            defaultAddress,
            defaultName,
            defaultChainId
        }), [
        defaultAddress,
        defaultName,
        defaultChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContactsContext/* ContactsContext */.z.Provider, {
        initialState: initialState,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer, {})
    });
});
/* harmony default export */ const Wallet_Transfer = (TransferPage);


/***/ }),

/***/ 66902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ImportCreateWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82897);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4643);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78757);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43270);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>{
    return {
        addWalletWrapper: {
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
        mnemonicIcon: {
            background: theme.palette.maskColor.success
        },
        walletIcon: {
            background: theme.palette.maskColor.primary
        },
        iconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: '100%'
        }
    };
});
/** Choose creating or importing wallet */ const ImportCreateWallet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ImportCreateWallet({ onChoose }) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { classes, cx, theme } = useStyles();
    const [params] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useSearchParams */ .lr)();
    const external_request = params.get('external_request');
    const [, handleChoose] = (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async (route)=>{
        const hasPassword = await _services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP.Wallet.hasPassword();
        const url = (0,urlcat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(hasPassword ? route : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .DashboardRoutes */ .vq.CreateMaskWalletForm, {
            recover: route === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .DashboardRoutes */ .vq.RecoveryMaskWallet && !hasPassword ? true : undefined,
            external_request
        });
        await browser.tabs.create({
            active: true,
            url: browser.runtime.getURL(`/dashboard.html#${url}`)
        });
        onChoose?.(route);
    }, [
        onChoose,
        external_request
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.addWalletWrapper,
                onClick: ()=>handleChoose(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .DashboardRoutes */ .vq.CreateMaskWalletMnemonic),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: cx(classes.iconWrapper, classes.walletIcon),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__.Wallet, {
                            size: 20,
                            color: theme.palette.maskColor.white
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.subTitle,
                                children: t.popups_create_a_new_wallet_title()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.description,
                                children: t.popups_generate_a_new_wallet_address()
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.addWalletWrapper,
                onClick: ()=>handleChoose(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .DashboardRoutes */ .vq.RecoveryMaskWallet),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: cx(classes.iconWrapper, classes.mnemonicIcon),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__.Mnemonic, {
                            size: 20,
                            color: theme.palette.maskColor.white
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.subTitle,
                                children: t.popups_import_wallets()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.description,
                                children: t.popups_import_wallets_description()
                            })
                        ]
                    })
                ]
            })
        ]
    });
});


/***/ }),

/***/ 81760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ useAsset)
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useFungibleAsset.ts


function useFungibleAsset(pluginID, address, options) {
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, options);
    return (0,useQuery/* useQuery */.a)({
        enabled: !!address,
        queryKey: [
            'fungible-asset',
            pluginID,
            address,
            options
        ],
        queryFn: async ()=>{
            if (!address) return;
            return Hub.getFungibleAsset(address, options);
        }
    });
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/hooks/useWalletAssets.ts
var useWalletAssets = __webpack_require__(97145);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/hooks/useAsset.ts




// Use token from list first, to make sure data is consistent
function useAsset(chainId, address, account) {
    const { data: assets } = (0,useWalletAssets/* useWalletAssets */.A)();
    const { data: asset } = useFungibleAsset(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address, {
        account,
        chainId
    });
    const matchedAsset = assets.find((x)=>{
        if (x.chainId !== chainId) return false;
        return (0,isSameAddress/* isSameAddress */.W)(x.address, address);
    });
    return matchedAsset || asset;
}


/***/ }),

/***/ 97145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useWalletAssets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35681);


function useWalletAssets() {
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useFungibleAssets */ .C)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM, undefined, {
        chainId
    });
}


/***/ }),

/***/ 10977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/relativeRouteOf.ts
var relativeRouteOf = __webpack_require__(84582);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/RestorableScroll/index.tsx
var RestorableScroll = __webpack_require__(64472);
// EXTERNAL MODULE: ./packages/mask/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(35396);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(28181);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/primitives.ts
var primitives = __webpack_require__(47469);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Input/Input.js
var Input = __webpack_require__(81788);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useMutation.mjs
var useMutation = __webpack_require__(22144);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchChainId.ts
var fetchChainId = __webpack_require__(6475);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameURL.ts
var isSameURL = __webpack_require__(76423);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/EditNetwork/network-schema.ts




/**
 * schema with basic validation
 * duplicated name validator is injected as dependency, both frontend and
 * background can provide their own validator
 */ function createBaseSchema(t, duplicateNameValidator) {
    const schema = lib.z.object({
        name: lib.z.string().trim().nonempty().refine(duplicateNameValidator, t.network_already_exists()),
        rpc: lib.z.string().trim().url(t.incorrect_rpc_url()).refine((rpc)=>rpc.startsWith('https'), t.rpc_requires_https()),
        chainId: lib.z.union([
            lib.z.string().trim().regex(/^\d+|0x[\da-f]$/i, t.invalid_number()).transform((v)=>Number.parseInt(v, v.startsWith('0x') ? 16 : 10)),
            lib.z.number()
        ]),
        currencySymbol: lib.z.string().optional(),
        explorer: lib.z.string().url(t.incorrect_explorer_url())
    });
    return schema;
}
function createSchema(t, duplicateNameValidator, networks, editingId) {
    const baseSchema = createBaseSchema(t, duplicateNameValidator);
    const schema = baseSchema.superRefine(async (schema, context)=>{
        if (!schema.rpc) return true;
        let rpcChainId;
        try {
            rpcChainId = await (0,fetchChainId/* fetchChainId */.R)(schema.rpc);
        } catch (err) {
            context.addIssue({
                code: lib.z.ZodIssueCode.custom,
                path: [
                    'rpc'
                ],
                message: t.failed_to_fetch_chain_id()
            });
            return false;
        }
        if (!schema.chainId) return true;
        if (rpcChainId !== schema.chainId) {
            // Background can pass i18n params by params field to frontend
            context.addIssue({
                code: lib.z.ZodIssueCode.custom,
                path: [
                    'chainId'
                ],
                message: t.rpc_return_different_chain_id({
                    chain_id: String(rpcChainId)
                }),
                params: {
                    chain_id: rpcChainId
                }
            });
            return;
        }
        return true;
    }).superRefine((schema, context)=>{
        const { rpc } = schema;
        const network = networks.find((network)=>(0,isSameURL/* isSameURL */.U)(network.rpcUrl, rpc) && network.ID !== editingId);
        if (network) {
            context.addIssue({
                code: lib.z.ZodIssueCode.custom,
                path: [
                    'rpc'
                ],
                message: t.rpc_url_is_used_by({
                    name: network.name
                })
            });
            return false;
        } else {
            networks.some((network)=>{
                if ((0,constants/* getRPCConstant */.T)(network.chainId, 'RPC_URLS')?.includes(rpc)) {
                    context.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        path: [
                            'rpc'
                        ],
                        message: t.rpc_url_is_used_by({
                            name: network.name
                        })
                    });
                    return true;
                }
                return false;
            });
        }
        return true;
    });
    return schema;
}

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchCached.ts
var fetchCached = __webpack_require__(22674);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
;// CONCATENATED MODULE: ./packages/web3-providers/src/helpers/fetchChains.ts


async function fetchChains() {
    return (0,fetchJSON/* fetchCachedJSON */.MP)('https://chainid.network/chains.json', undefined, {
        squashExpiration: 0,
        cacheDuration: fetchCached/* Duration */.nL.TWELVE_HOURS
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/EditNetwork/useWarnings.ts






function useWarnings(formChainId, formSymbol) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const chainIdWarning = (0,react.useMemo)(()=>{
        if (!formChainId) return;
        const duplicated = networks.find((x)=>x.chainId === formChainId);
        if (!duplicated?.isCustomized) return;
        return t.chain_id_is_used_by({
            name: duplicated.name
        });
    }, [
        formChainId,
        networks
    ]);
    const { data: chains = src_constants/* EMPTY_LIST */.rP } = (0,useQuery/* useQuery */.a)([
        'chain-list'
    ], fetchChains);
    const symbolWarning = (0,react.useMemo)(()=>{
        const match = chains.find((chain)=>chain.chainId === formChainId);
        if (!match) return;
        if (match.nativeCurrency.symbol !== formSymbol) return t.rpc_return_different_symbol({
            chain_id: String(formChainId),
            symbol: match.nativeCurrency.symbol
        });
        return undefined;
    }, [
        chains,
        formSymbol,
        formChainId
    ]);
    return {
        chainIdWarning,
        symbolWarning
    };
}

// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/EditNetwork/index.tsx




















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        main: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        form: {
            overflow: 'auto',
            flexGrow: 1,
            padding: theme.spacing(0, 2, 2)
        },
        iconButton: {
            padding: 0,
            minWidth: 'auto',
            width: 'auto'
        },
        footer: {
            padding: theme.spacing(2),
            borderRadius: 12,
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            boxShadow: theme.palette.maskColor.bottomBg,
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2)
        },
        label: {
            color: theme.palette.maskColor.second,
            marginBottom: theme.spacing(0.5),
            marginTop: theme.spacing(2)
        },
        error: {
            color: theme.palette.maskColor.danger,
            marginTop: theme.spacing(0.5)
        },
        warn: {
            color: theme.palette.maskColor.main,
            marginTop: theme.spacing(0.5)
        }
    }));
const QUERY_KEY = [
    'system',
    'wallet',
    'networks'
];
const EditNetwork = /*#__PURE__*/ (0,react.memo)(function EditNetwork() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const id = (0,dist/* useParams */.UO)().id;
    const chainId = id?.match(/^\d+$/) ? Number.parseInt(id, 10) : undefined;
    const isEditing = !!id && !chainId;
    const { chainId: currentChainId, setChainId } = (0,useContext/* useChainContext */.ql)();
    // #region Get network
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const network = (0,react.useMemo)(()=>{
        const network = networks.find((x)=>x.ID === id);
        if (!network) return null;
        return {
            name: network.name,
            chainId: network.chainId,
            rpc: network.isCustomized ? network.rpcUrl : (0,constants/* getRPCConstant */.T)(network.chainId, 'RPC_URLS')?.[0],
            currencySymbol: network.nativeCurrency.symbol,
            explorer: network.explorerUrl.url,
            isCustomized: network.isCustomized
        };
    }, [
        chainId,
        networks
    ]);
    // #endregion
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    (0,useTitle/* useTitle */.Z)(network ? network.name : t.network_management_add_network());
    const { setExtension } = (0,react.useContext)(useTitle/* PageTitleContext */.I);
    const isBuiltIn = network ? !network.isCustomized : false;
    (0,react.useEffect)(()=>{
        if (isBuiltIn || !id || !Network) return;
        setExtension(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "text",
            className: classes.iconButton,
            onClick: async ()=>{
                if (currentChainId === network?.chainId) {
                    await entry/* Web3 */.Bv.switchChain?.(types/* ChainId */.a_.Mainnet, {
                        providerType: types/* ProviderType */.lP.MaskWallet
                    });
                    setChainId(types/* ChainId */.a_.Mainnet);
                }
                await Network?.removeNetwork(id);
                showSnackbar(t.deleted_network_successfully());
                // Trigger UI update.
                queryClient/* queryClient */.E.invalidateQueries(QUERY_KEY);
                navigate(-1);
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Trash, {
                size: 24
            })
        }));
        return ()=>setExtension(undefined);
    }, [
        isBuiltIn,
        id,
        classes.iconButton,
        showSnackbar,
        t,
        Network,
        currentChainId
    ]);
    const schema = (0,react.useMemo)(()=>{
        return createSchema(t, async (name)=>{
            return !networks.find((network)=>network.name === name && network.ID !== id);
        }, networks, id);
    }, [
        t,
        id,
        networks
    ]);
    const { getValues, watch, register, setError, formState: { errors, isValidating, isDirty, isValid: isFormValid } } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: network || {}
    });
    const checkZodError = (0,react.useCallback)((message)=>{
        try {
            const issues = JSON.parse(message);
            issues.forEach((issue)=>{
                // We assume there is no multiple paths.
                setError(issue.path[0], {
                    // @ts-expect-error i18n-todo: figure out type of issue.message.
                    message: t[issue.message](issue.params)
                });
            });
        } catch  {}
        return false;
    }, [
        setError,
        t
    ]);
    const formChainId = +watch('chainId');
    const formSymbol = watch('currencySymbol');
    const { chainIdWarning, symbolWarning } = useWarnings(formChainId, formSymbol);
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const { isLoading: isMutating, mutate } = (0,useMutation/* useMutation */.D)({
        mutationFn: async (data)=>{
            if (!Network) return;
            setIsSubmitting(true);
            try {
                const parsedData = await schema.parseAsync(data);
                const chainId = parsedData.chainId;
                let symbol = parsedData.currencySymbol;
                if (!symbol) {
                    const chains = await queryClient/* queryClient */.E.fetchQuery({
                        queryKey: [
                            'chain-list'
                        ],
                        queryFn: fetchChains
                    });
                    symbol = chains.find((x)=>x.chainId === chainId)?.nativeCurrency.symbol;
                }
                symbol ||= '';
                const network = {
                    isCustomized: true,
                    type: types/* NetworkType */.td.CustomNetwork,
                    chainId,
                    name: parsedData.name,
                    fullName: parsedData.name,
                    network: 'mainnet',
                    rpcUrl: parsedData.rpc,
                    nativeCurrency: {
                        id: primitives/* ZERO_ADDRESS */.r,
                        chainId,
                        type: specs/* TokenType */.iv.Fungible,
                        schema: types/* SchemaType */.XQ.Native,
                        name: symbol,
                        symbol,
                        decimals: 18,
                        address: primitives/* ZERO_ADDRESS */.r
                    },
                    explorerUrl: {
                        url: parsedData.explorer
                    }
                };
                if (isEditing) {
                    await Network.updateNetwork(id, network);
                    showSnackbar(t.saved_network_successfully());
                } else {
                    await Network.addNetwork(network);
                    showSnackbar(t.adding_network_successfully());
                }
                navigate(-1);
                queryClient/* queryClient */.E.invalidateQueries(QUERY_KEY);
            } catch (err) {
                checkZodError(err.message);
                showSnackbar(t.failed_to_save_network());
            }
            setIsSubmitting(false);
        }
    });
    const [isChecking, setIsChecking] = (0,react.useState)(false);
    const isNotReady = isValidating || !isFormValid || !isDirty || isChecking;
    const disabled = isNotReady || isMutating || isSubmitting;
    const handleSubmit = (0,react.useCallback)(async ()=>{
        if (disabled) return;
        setIsChecking(true);
        const data = getValues();
        const result = await schema.parseAsync(data).then(()=>true, (err)=>checkZodError(err.message));
        setIsChecking(false);
        if (!result) return;
        mutate(data);
    }, [
        disabled,
        getValues,
        isEditing
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: classes.main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                className: classes.form,
                "data-hide-scrollbar": true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.network_name()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.Z, {
                        fullWidth: true,
                        disableUnderline: true,
                        error: !!errors.name,
                        ...register('name'),
                        placeholder: "Cel",
                        disabled: isBuiltIn,
                        inputProps: {
                            placeholder: '',
                            maxLength: 24
                        }
                    }),
                    errors.name ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        children: errors.name.message
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.rpc_url()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.Z, {
                        fullWidth: true,
                        disableUnderline: true,
                        error: !!errors.rpc,
                        ...register('rpc'),
                        placeholder: "https://",
                        disabled: isBuiltIn
                    }),
                    errors.rpc ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        children: errors.rpc.message
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.chain_id()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.Z, {
                        fullWidth: true,
                        disableUnderline: true,
                        error: !!errors.chainId,
                        ...register('chainId'),
                        placeholder: "eg. 2",
                        disabled: isBuiltIn
                    }),
                    errors.chainId ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        children: errors.chainId.message
                    }) : chainIdWarning ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.warn,
                        children: chainIdWarning
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.optional_currency_symbol()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.Z, {
                        fullWidth: true,
                        disableUnderline: true,
                        error: !!errors.currencySymbol,
                        ...register('currencySymbol', {
                            required: false
                        }),
                        placeholder: "eg. ETH",
                        disabled: isBuiltIn || !!errors.chainId
                    }),
                    symbolWarning ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.warn,
                        children: symbolWarning
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.optional_block_explorer_url()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* default */.Z, {
                        fullWidth: true,
                        disableUnderline: true,
                        ...register('explorer'),
                        placeholder: "https://",
                        disabled: isBuiltIn
                    }),
                    errors.explorer ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        children: errors.explorer.message
                    }) : null
                ]
            }),
            !isBuiltIn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        variant: "outlined",
                        onClick: ()=>navigate(-1),
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        onClick: handleSubmit,
                        disabled: disabled,
                        children: t.confirm()
                    })
                ]
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Icon/index.tsx + 1 modules
var Icon = __webpack_require__(28236);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextOverflowTooltip/index.tsx
var TextOverflowTooltip = __webpack_require__(59134);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/NetworkManagement/index.tsx











const NetworkManagement_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        main: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        list: {
            overflow: 'auto',
            padding: theme.spacing(2),
            flexGrow: 1,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        network: {
            borderRadius: 8,
            border: `1px solid ${theme.palette.maskColor.line}`,
            height: theme.spacing(6),
            padding: theme.spacing(1.5),
            boxSizing: 'border-box',
            marginBottom: theme.spacing(2),
            cursor: 'pointer'
        },
        text: {
            marginLeft: theme.spacing(1),
            marginRight: 'auto',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center'
        },
        name: {
            marginRight: theme.spacing(0.5),
            fontSize: 12,
            maxWidth: '50%',
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '16px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        footer: {
            padding: theme.spacing(2),
            borderRadius: 12,
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            boxShadow: theme.palette.maskColor.bottomBg,
            backdropFilter: 'blur(8px)'
        }
    }));
const NetworkManagement = /*#__PURE__*/ (0,react.memo)(function NetworkManagement() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = NetworkManagement_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    (0,useTitle/* useTitle */.Z)(t.manage_network());
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: classes.main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                children: networks.map((network)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.network,
                        role: "link",
                        onClick: ()=>{
                            navigate(`${Routes/* PopupRoutes */.mZ.EditNetwork}/${network.ID}`);
                        },
                        children: [
                            network.iconUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                                size: 24,
                                mainIcon: network.iconUrl
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
                                size: 24,
                                name: network.name,
                                sx: {
                                    fontSize: 12
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.text,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                        title: network.name,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.name,
                                            children: network.name
                                        })
                                    }),
                                    network.isCustomized ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Lock, {
                                        size: 16
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                                color: theme.palette.maskColor.second,
                                size: 20
                            })
                        ]
                    }, network.ID);
                })
            }),
             false ? /*#__PURE__*/ 0 : null
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useVerifiedWallets.ts
var useVerifiedWallets = __webpack_require__(15799);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/usePopupContext.ts
var usePopupContext = __webpack_require__(26332);
// EXTERNAL MODULE: ./packages/mask/popups/components/WalletItem/index.tsx
var WalletItem = __webpack_require__(22964);
// EXTERNAL MODULE: ./packages/mask/popups/components/BottomController/index.tsx
var BottomController = __webpack_require__(49546);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var type = __webpack_require__(85103);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var urlcat_dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/SelectWallet/index.tsx




















const SelectWallet_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        item: {
            color: theme.palette.maskColor.main
        },
        disabled: {
            opacity: '0.5',
            cursor: 'default'
        },
        placeholder: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));
const SelectWallet = /*#__PURE__*/ (0,react.memo)(function SelectWallet() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = SelectWallet_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const external_request_id = params.get('external_request');
    const source = params.get('source');
    const { value: external_request } = (0,useAsync/* default */.Z)(async ()=>{
        if (!external_request_id) return null;
        return service/* default */.ZP.Wallet.getEIP2255PermissionDetail(external_request_id);
    }, [
        external_request_id
    ]);
    const chainIdSearched = params.get('chainId');
    const isVerifyWalletFlow = params.get('verifyWallet');
    const isSettingNFTAvatarFlow = params.get('setNFTAvatar');
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { proofs } = usePersonaContext/* PersonaContext */.m.useContainer();
    const bindingWallets = (0,useVerifiedWallets/* useVerifiedWallets */.f)(proofs);
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: chainIdSearched ? Number.parseInt(chainIdSearched, 10) : undefined
    });
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const { smartPayChainId } = usePopupContext/* PopupContext */.t.useContainer();
    const { value: localWallets = src_constants/* EMPTY_LIST */.rP } = (0,useAsync/* default */.Z)(async ()=>service/* default */.ZP.Wallet.getWallets(), []);
    const allWallets = (0,useWallets/* useWallets */.r)();
    const wallets = (0,react.useMemo)(()=>{
        if (!allWallets.length && localWallets.length) return localWallets;
        return allWallets;
    }, [
        localWallets,
        allWallets
    ]);
    const defaultWallet = params.get('address') || account || ((0,head/* default */.Z)(wallets)?.address ?? '');
    const [selected = defaultWallet, setSelected] = (0,react.useState)();
    const handleCancel = (0,react.useCallback)(async ()=>{
        if (isVerifyWalletFlow) {
            navigate(-1);
        } else {
            // TODO Open the popup via a RPC request, and reject the request
            const rejected = await Promise.allSettled([
                Promise.reject({
                    message: 'User rejected the request.'
                })
            ]);
            await service/* default */.ZP.Wallet.resolveMaskAccount(rejected[0]);
            await service/* default */.ZP.Helper.removePopupWindow();
        }
    }, [
        isVerifyWalletFlow
    ]);
    const handleConfirm = (0,react.useCallback)(async ()=>{
        if (external_request_id && external_request) {
            await service/* default */.ZP.Wallet.grantEIP2255Permission(external_request_id, [
                selected
            ]);
            return service/* default */.ZP.Helper.removePopupWindow();
        }
        if (isVerifyWalletFlow || isSettingNFTAvatarFlow) {
            await entry/* Web3 */.Bv.connect({
                account: selected,
                chainId,
                providerType: types/* ProviderType */.lP.MaskWallet
            });
            navigate(isSettingNFTAvatarFlow ? (0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.PersonaAvatarSetting, {
                tab: type/* ProfilePhotoType */.jj.NFT
            }) : Routes/* PopupRoutes */.mZ.ConnectWallet, {
                replace: true
            });
            return;
        }
        const wallet = wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, selected));
        if (wallet && source && !external_request_id) await service/* default */.ZP.Wallet.internalWalletConnect(wallet.address, source);
        await service/* default */.ZP.Wallet.resolveMaskAccount([
            wallet?.owner ? {
                address: selected,
                owner: wallet.owner,
                identifier: ec_key/* ECKeyIdentifier */.o.from(wallet.identifier).unwrapOr(undefined)
            } : {
                address: selected
            }
        ]);
        if (smartPayChainId && wallet?.owner && chainId !== smartPayChainId) {
            await entry/* Web3 */.Bv.switchChain?.(smartPayChainId, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
            const network = networks.find((x)=>x.chainId === smartPayChainId);
            if (network) await Network?.switchNetwork(network.ID);
        }
        return service/* default */.ZP.Helper.removePopupWindow();
    }, [
        source,
        external_request,
        external_request_id,
        isVerifyWalletFlow,
        selected,
        chainId,
        wallets,
        smartPayChainId,
        isSettingNFTAvatarFlow,
        networks,
        Network
    ]);
    (0,useTitle/* useTitle */.Z)(external_request ? 'Connecting External Site' : t.popups_select_wallet());
    if (!chainIdValid) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.placeholder,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            children: t.popups_wallet_unsupported_network()
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        overflow: "auto",
        "data-hide-scrollbar": true,
        children: [
            external_request ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                textAlign: "center",
                paddingX: 2,
                children: [
                    "Connecting: ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("i", {
                        children: external_request.origin
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    "Be aware of fraud!"
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                pt: 1,
                pb: 9,
                px: 2,
                display: "flex",
                flexDirection: "column",
                rowGap: "6px",
                children: wallets.filter((x)=>{
                    if (x.owner && chainId !== types/* ChainId */.a_.Matic) return false;
                    if (!isVerifyWalletFlow && !isSettingNFTAvatarFlow) return true;
                    return !x.owner;
                }).map((item)=>{
                    const disabled = isVerifyWalletFlow && bindingWallets?.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.identity, item.address));
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem/* WalletItem */.Z, {
                        className: cx(classes.item, disabled ? classes.disabled : undefined),
                        wallet: item,
                        isSelected: (0,isSameAddress/* isSameAddress */.W)(item.address, selected),
                        onSelect: ()=>{
                            if (!disabled) setSelected(item.address);
                        }
                    }, item.address);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomController/* BottomController */.L, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        fullWidth: true,
                        onClick: handleCancel,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        onClick: handleConfirm,
                        disabled: isVerifyWalletFlow ? !!wallets?.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, selected) && !!x.owner) : false,
                        children: t.confirm()
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Wallet_SelectWallet = (SelectWallet);

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/UserAssetsContext.tsx
var UserAssetsContext = __webpack_require__(45258);
// EXTERNAL MODULE: ./packages/theme/src/Components/Boundary/index.tsx
var Boundary = __webpack_require__(64149);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(65854);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabList/TabList.js


const _excluded = ["children"];





const TabList = /*#__PURE__*/react.forwardRef(function TabList(props, ref) {
  const {
    children: childrenProp
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const children = react.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }

    return /*#__PURE__*/react.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
      id: (0,TabContext/* getTabId */.pQ)(context, child.props.value)
    });
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tabs/* default */.Z, (0,esm_extends/* default */.Z)({}, other, {
    ref: ref,
    value: context.value,
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabList_TabList = (TabList);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/tabClasses.js
var tabClasses = __webpack_require__(14323);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tabs/tabsClasses.js
var tabsClasses = __webpack_require__(87198);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useParamTab.ts
var useParamTab = __webpack_require__(96440);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ProgressiveText/index.tsx
var ProgressiveText = __webpack_require__(5393);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(47675);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useEverSeen.ts
var useEverSeen = __webpack_require__(83220);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useBoundedPopperProps.ts
var useBoundedPopperProps = __webpack_require__(86999);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptors.ts
var useNetworkDescriptors = __webpack_require__(3350);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/web3-providers/src/Chainbase/helpers.ts
var helpers = __webpack_require__(58021);
// EXTERNAL MODULE: ./packages/web3-providers/src/DeBank/types.ts
var DeBank_types = __webpack_require__(12049);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/mask/shared/helpers/formatTokenBalance.ts
var formatTokenBalance = __webpack_require__(33348);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/mapKeys.js
var mapKeys = __webpack_require__(37350);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(95528);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/decodeFunctionData.ts
var decodeFunctionData = __webpack_require__(35640);
// EXTERNAL MODULE: ./packages/mask/popups/modals/modal-controls.ts
var modal_controls = __webpack_require__(75904);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/utils.ts








const MaxUint256 = (0,number/* toFixed */.FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
async function modifyTransaction(transaction, replaceType) {
    const candidate = transaction.candidates[transaction.indexId];
    if (!candidate) return;
    const oldGasSettings = {
        gas: candidate.gas,
        gasPrice: candidate.gasPrice ? (0,formatter/* formatWeiToGwei */.f1)(candidate.gasPrice).toFixed() : undefined,
        maxFeePerGas: candidate.maxFeePerGas ? (0,formatter/* formatWeiToGwei */.f1)(candidate.maxFeePerGas).toFixed() : undefined,
        maxPriorityFeePerGas: candidate.maxPriorityFeePerGas ? (0,formatter/* formatWeiToGwei */.f1)(candidate.maxPriorityFeePerGas).toFixed() : undefined
    };
    const gasSettings = await modal_controls/* GasSettingModal */.fU.openAndWaitForClose({
        chainId: transaction.chainId,
        config: oldGasSettings,
        nonce: candidate.nonce,
        replaceType
    });
    if (!gasSettings) return;
    const newConfig = {
        ...candidate,
        ...oldGasSettings,
        ...(0,mapKeys/* default */.Z)(gasSettings, (value)=>typeof value === 'undefined' ? value : (0,web3_utils_lib.toHex)(value))
    };
    if (replaceType === type/* ReplaceType */.uM.CANCEL) {
        await entry/* Web3 */.Bv.cancelTransaction(transaction.id, newConfig, {
            providerType: types/* ProviderType */.lP.MaskWallet
        });
    } else {
        await entry/* Web3 */.Bv.replaceTransaction(transaction.id, newConfig, {
            providerType: types/* ProviderType */.lP.MaskWallet
        });
    }
}
// The Debank transaction history api does not return the input data,
//  so can not do the decoding within its scope.
function parseReceiverFromERC20TransferInput(input) {
    if (!input) return '';
    try {
        const decodedInputParam = (0,decodeFunctionData/* decodeFunctionData */.p)(ERC20, input ?? '', 'transfer');
        return decodedInputParam[0];
    } catch  {
        return '';
    }
}
// The Debank transaction history api does not return the input data and approved token info,
//  so can not do the decoding within its scope.
function parseAmountFromERC20ApproveInput(input) {
    if (!input) return;
    try {
        const decodedInputParam = (0,decodeFunctionData/* decodeFunctionData */.p)(ERC20, input ?? '', 'approve');
        const result = decodedInputParam[1].toString();
        return MaxUint256 === result ? 'Infinite' : result;
    } catch  {
        return;
    }
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/ActivityList/ActivityItem.tsx



















const ActivityItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { cateType = '' }, __)=>{
    const colorMap = {
        send: theme.palette.maskColor.warn,
        receive: theme.palette.maskColor.success,
        default: theme.palette.maskColor.primary
    };
    const backgroundColorMap = {
        send: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.1),
        receive: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.1),
        default: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.1)
    };
    const boxShadowMap = {
        send: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.2),
        receive: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.2),
        default: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.2)
    };
    const iconColor = colorMap[cateType] || colorMap.default;
    const iconBoxShadow = `0px 6px 12px 0px ${boxShadowMap[cateType] || boxShadowMap.default}`;
    const iconBackgroundColor = backgroundColorMap[cateType] || backgroundColorMap.default;
    return {
        item: {
            padding: theme.spacing(0.5, 0),
            cursor: 'pointer'
        },
        scamItem: {
            opacity: 0.5
        },
        txIconContainer: {
            height: 32,
            width: 32,
            position: 'relative',
            flexShrink: 0
        },
        txIcon: {
            height: 32,
            width: 32,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: (0,colorManipulator/* alpha */.Fq)(iconColor, 0.5),
            boxShadow: iconBoxShadow,
            backgroundColor: iconBackgroundColor,
            backdropFilter: 'blur(8px)',
            position: 'absolute'
        },
        badgeIcon: {
            position: 'absolute',
            right: -4.5,
            bottom: -1,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        txName: {
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            fontWeight: 700
        },
        scamLabel: {
            display: 'inline-block',
            padding: '4px 6px',
            backgroundColor: theme.palette.maskColor.third,
            color: theme.palette.maskColor.white,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700,
            marginLeft: 4,
            borderRadius: 4
        },
        toAddress: {
            whiteSpace: 'nowrap',
            color: theme.palette.maskColor.second
        },
        operations: {
            display: 'flex',
            gap: 6,
            marginTop: theme.spacing(0.5)
        },
        button: {
            borderRadius: 4,
            padding: '4px 6px',
            border: 'none',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer'
        },
        speedupButton: {
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.1),
            color: theme.palette.maskColor.primary
        },
        cancelButton: {
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.1),
            color: theme.palette.maskColor.danger
        },
        failedLabel: {
            fontSize: 14,
            color: theme.palette.maskColor.danger,
            fontWeight: 400,
            marginRight: 4
        },
        assets: {
            marginLeft: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        },
        asset: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            textAlign: 'right',
            display: 'inline-flex',
            alignItems: 'center'
        },
        amount: {
            fontWeight: 700
        },
        symbol: {
            display: 'inline-block',
            fontWeight: 400,
            maxWidth: '9ch',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            marginLeft: theme.spacing(0.5)
        }
    };
});
const TransactionIcon = /*#__PURE__*/ (0,react.memo)(function TransactionIcon({ cateType }) {
    const { classes, theme } = ActivityItem_useStyles({
        cateType
    });
    const mapType = cateType || 'default';
    const IconMap = {
        send: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.BaseUpload, {
            color: theme.palette.maskColor.warn,
            size: 20
        }),
        receive: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Download, {
            color: theme.palette.maskColor.success,
            size: 20
        }),
        default: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Cached, {
            color: theme.palette.maskColor.primary,
            size: 20
        })
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.txIcon,
        children: IconMap[mapType] || IconMap.default
    });
});
const ActivityItem = /*#__PURE__*/ (0,react.memo)(function ActivityItem({ transaction, className, onView, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = ActivityItem_useStyles({});
    const descriptors = (0,useNetworkDescriptors/* useNetworkDescriptors */.p)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const networkDescriptor = descriptors.find((x)=>x.chainId === transaction.chainId);
    const blockNumber = transaction && 'blockNumber' in transaction ? transaction.blockNumber : undefined;
    const [seen, ref] = (0,useEverSeen/* useEverSeen */.t)();
    const { data: tx, isLoading: loadingTx } = (0,useQuery/* useQuery */.a)({
        // This could be a transaction of SmartPay which Debank doesn't provide detailed info for it.
        // This also could be an ERC20 transfer, which Debank returns the token contract rather than receiver as `to_address`.
        // So we fetch via Chainbase
        enabled: (!transaction.to || transaction.type === 'transfer' || transaction.type === 'approve') && seen,
        queryKey: [
            'chainbase',
            'transaction',
            transaction.chainId,
            transaction.id,
            blockNumber
        ],
        queryFn: async ()=>{
            if (!transaction.chainId || !transaction.id) return;
            return entry/* ChainbaseHistory */.uy.getTransaction(transaction.chainId, transaction.id, blockNumber);
        }
    });
    const { data: txInput, isLoading: loadingTxInput } = (0,useQuery/* useQuery */.a)({
        // Enable this when chainbase does not support the current chain.
        enabled: !!transaction && !loadingTx && !tx?.input && transaction.type === 'transfer',
        queryKey: [
            transaction?.chainId,
            transaction?.id
        ],
        queryFn: async ()=>{
            if (!transaction?.chainId || !transaction?.id) return;
            const tx = await entry/* Web3 */.Bv.getTransaction(transaction.id, {
                chainId: transaction.chainId
            });
            return tx?.input;
        }
    });
    const receiverAddress = parseReceiverFromERC20TransferInput(tx?.input ?? txInput);
    const status = transaction.status ?? (tx ? helpers/* normalizeTxStatus */.t_(tx.status) : undefined);
    const account = (0,useAccount/* useAccount */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const fromAddress = transaction.from || tx?.from_address;
    const toAddress = receiverAddress || transaction.to || tx?.to_address;
    const loadingToAddress = transaction.type === 'transfer' ? !receiverAddress && (loadingTx || loadingTxInput) : !toAddress && loadingTx;
    const isOut = (0,isSameAddress/* isSameAddress */.W)(fromAddress, account);
    const popperProps = (0,useBoundedPopperProps/* useBoundedPopperProps */.g)();
    const approveAmount = parseAmountFromERC20ApproveInput(tx?.input ?? txInput);
    const { data: approveToken } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, transaction.type === 'approve' ? tx?.to_address : '', undefined, {
        chainId: transaction.chainId
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: cx(classes.item, className, transaction.isScam ? classes.scamItem : null),
        onClick: ()=>onView(transaction),
        ref: ref,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.txIconContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionIcon, {
                        cateType: transaction.cateType
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                        className: classes.badgeIcon,
                        size: 16,
                        icon: networkDescriptor?.icon
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                secondaryTypographyProps: {
                    component: 'div'
                },
                style: {
                    marginLeft: 15
                },
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProgressiveText/* ProgressiveText */.l, {
                    className: classes.toAddress,
                    loading: loadingToAddress,
                    skeletonWidth: 100,
                    component: "div",
                    children: [
                        status === specs.TransactionStatusType.FAILED ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.failedLabel,
                            component: "span",
                            children: t.failed()
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                            i18nKey: "other_address",
                            context: isOut ? 'to' : 'from',
                            value: {
                                address: isOut ? toAddress : fromAddress
                            },
                            components: {
                                addr: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReversedAddress/* ReversedAddress */.i, {
                                    address: isOut ? toAddress : fromAddress,
                                    component: "span"
                                })
                            }
                        })
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.txName,
                    children: [
                        transaction.cateName,
                        transaction.isScam ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classes.scamLabel,
                            children: t.scam_tx()
                        }) : null
                    ]
                })
            }),
            transaction.type === 'approve' && approveAmount && approveToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.asset,
                component: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: classes.amount,
                        children: approveAmount === 'Infinite' ? approveAmount : (0,formatTokenBalance/* formatTokenBalance */.a)(approveAmount, approveToken.decimals)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                        title: approveToken.symbol,
                        PopperProps: popperProps,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classes.symbol,
                            children: approveToken.symbol
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.assets,
                children: transaction.assets.map((token, i)=>{
                    const isSend = token.direction === DeBank_types.DebankTransactionDirection.SEND;
                    const amount = (0,number/* isLessThan */.FI)(token.amount, '0.0001') ? '<0.0001' : (0,number/* trimZero */.vr)((0,number/* toFixed */.FH)(token.amount, 4));
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.asset,
                        component: "div",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                className: classes.amount,
                                children: `${isSend ? '-' : '+'} ${amount} `
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                title: token.symbol,
                                PopperProps: popperProps,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: classes.symbol,
                                    children: token.symbol
                                })
                            })
                        ]
                    }, i);
                })
            })
        ]
    });
});
const RecentActivityItem = /*#__PURE__*/ (0,react.memo)(function RecentActivityItem({ transaction, className, onSpeedup, onCancel, onView, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = ActivityItem_useStyles({});
    // candidate is current transaction
    const candidate = transaction.candidates[transaction.indexId];
    const receiverAddress = parseReceiverFromERC20TransferInput(candidate.data);
    const toAddress = receiverAddress || candidate.to;
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, toAddress);
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId: transaction.chainId
    });
    const network = (0,useNetwork/* useNetwork */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, transaction.chainId);
    const recipient = (0,react.useMemo)(()=>{
        if (domain) return t.to_address({
            address: (0,formatter/* formatDomainName */.bc)(domain)
        });
        if (toAddress) return t.to_address({
            address: (0,formatter/* formatEthereumAddress */.j8)(toAddress, 4)
        });
        return undefined;
    }, [
        domain,
        t
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: cx(classes.item, className),
        onClick: ()=>onView(transaction, candidate),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.txIconContainer,
                children: [
                    /* TODO specify cateType */ /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionIcon, {
                        cateType: 'send'
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                        className: classes.badgeIcon,
                        chainId: transaction.chainId,
                        size: 16,
                        network: network
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                secondaryTypographyProps: {
                    component: 'div'
                },
                style: {
                    marginLeft: 15
                },
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            children: [
                                transaction.status === specs.TransactionStatusType.FAILED ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.failedLabel,
                                    component: "span",
                                    children: t.failed()
                                }) : null,
                                recipient
                            ]
                        }),
                        transaction.status === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.operations,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    type: "button",
                                    className: cx(classes.button, classes.speedupButton),
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onSpeedup?.(transaction);
                                    },
                                    children: t.speed_up()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    type: "button",
                                    className: cx(classes.button, classes.cancelButton),
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onCancel?.(transaction);
                                    },
                                    children: t.cancel()
                                })
                            ]
                        }) : null
                    ]
                }),
                children: /* TODO specify cateType */ /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.txName,
                    children: t.send()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                ml: "auto",
                children: candidate.value && nativeToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.asset,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                            className: classes.amount,
                            children: `- ${(0,formatTokenBalance/* formatTokenBalance */.a)(candidate.value, nativeToken.decimals)} `
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classes.symbol,
                            children: nativeToken.symbol
                        })
                    ]
                }) : null
            })
        ]
    });
});
const ActivityItemSkeleton = /*#__PURE__*/ (0,react.memo)(function ActivityItemSkeleton({ className, ...rest }) {
    const { classes, cx } = ActivityItem_useStyles({});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: cx(classes.item, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.txIconContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        variant: "circular",
                        width: 32,
                        height: 32
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        variant: "circular",
                        className: classes.badgeIcon,
                        width: 16,
                        height: 16
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                secondaryTypographyProps: {
                    component: 'div'
                },
                style: {
                    marginLeft: 15
                },
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "text",
                    width: 100
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "text",
                    width: 90
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                ml: "auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "text",
                    width: 40
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs
var useInfiniteQuery = __webpack_require__(86886);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQueries.mjs
var useQueries = __webpack_require__(31369);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
var sortBy = __webpack_require__(89762);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/ActivityList/useTransactions.ts







/**
 * Get locale transitions and merge them with ones from debank history.
 * Transactions from debank are fetching page by page.
 */ function useTransactions() {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const result = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
        queryKey: [
            'debank',
            'all-history',
            account
        ],
        queryFn: async ({ pageParam })=>{
            return entry/* DeBankHistory */.uM.getAllTransactions(account, {
                indicator: pageParam
            });
        },
        getNextPageParam: (lastPage)=>lastPage.nextIndicator
    });
    const data = result.data;
    const transactions = (0,react.useMemo)(()=>data?.pages.flatMap((p)=>p.data) || src_constants/* EMPTY_LIST */.rP, [
        data?.pages
    ]);
    const networks = (0,useNetworks/* useNetworks */.e)();
    const { Transaction } = (0,useWeb3State/* useWeb3State */.d)();
    // TODO invalidQueries after sending transitions
    const queries = (0,useQueries/* useQueries */.h)({
        queries: networks.map((network)=>{
            return {
                enabled: !!account && (transactions.length > 0 || !result.isLoading),
                queryKey: [
                    'transitions',
                    network.chainId,
                    account
                ],
                queryFn: async ()=>{
                    return Transaction?.getTransactions?.(network.chainId, account) ?? [];
                }
            };
        })
    });
    (0,react.useEffect)(()=>{
        return Transaction?.transactions?.subscribe(()=>{
            queryClient/* queryClient */.E.invalidateQueries([
                'transitions'
            ]);
        });
    }, []);
    const allLocaleTxes = (0,react.useMemo)(()=>{
        return queries.flatMap((x)=>x.data ?? []);
    }, [
        queries
    ]);
    // Some are already in debank history
    const localeTxes = (0,react.useMemo)(()=>{
        const now = Date.now();
        const duration = 1800_000;
        return (0,sortBy/* default */.Z)(allLocaleTxes.filter((tx)=>{
            // show txes from the past half txes
            return !transactions.find((x)=>x.id === tx.id) && now - tx.updatedAt.getTime() < duration;
        }), (x)=>-x.createdAt.getTime());
    }, [
        allLocaleTxes,
        transactions
    ]);
    return {
        ...result,
        data: transactions,
        localeTxes
    };
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/ActivityList/index.tsx













const ActivityList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { hasNav })=>({
        container: {
            paddingBottom: hasNav ? 72 : undefined,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        list: {
            backgroundColor: theme.palette.maskColor.bottom,
            padding: theme.spacing(2)
        },
        item: {
            '&:not(:last-of-type)': {
                marginBottom: theme.spacing(1.5)
            }
        }
    }));
const ActivityList = /*#__PURE__*/ (0,react.memo)(function ActivityList() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { hasNavigator } = (0,dist/* useOutletContext */.bx)();
    const { classes } = ActivityList_useStyles({
        hasNav: hasNavigator
    });
    const navigate = (0,dist/* useNavigate */.s0)();
    const { data: transactions, localeTxes, isLoading, isFetching, fetchNextPage } = useTransactions();
    const handleSpeedup = (0,react.useCallback)(async (transaction)=>{
        modifyTransaction(transaction, type/* ReplaceType */.uM.SPEED_UP);
    }, []);
    const handleCancel = (0,react.useCallback)((transaction)=>{
        modifyTransaction(transaction, type/* ReplaceType */.uM.CANCEL);
    }, []);
    const handleView = (0,react.useCallback)((transaction, candidate)=>{
        navigate(Routes/* PopupRoutes */.mZ.TransactionDetail, {
            // No available API to fetch a transaction info yet.
            // Just pass target transaction to the detail page.
            state: {
                transaction,
                candidate
            }
        });
    }, [
        navigate
    ]);
    if (!isLoading && !localeTxes.length && !transactions.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
        height: "100%",
        children: t.no_data()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        "data-hide-scrollbar": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                children: [
                    localeTxes.map((transaction)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RecentActivityItem, {
                            transaction: transaction,
                            onSpeedup: handleSpeedup,
                            onCancel: handleCancel,
                            onView: handleView
                        }, transaction.id)),
                    transactions.map((transaction)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityItem, {
                            className: classes.item,
                            transaction: transaction,
                            onView: handleView
                        }, transaction.id)),
                    isFetching ? (0,range/* default */.Z)(4).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityItemSkeleton, {
                            className: classes.item
                        }, i)) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                callback: ()=>fetchNextPage(),
                height: 10
            }, transactions.length)
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/hooks/useWalletAssets.ts
var useWalletAssets = __webpack_require__(97145);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/hooks/useAssetExpand.ts



const assetExpandRef = new ValueRef/* ValueRef */.Xf(false);
const subscription = {
    getCurrentValue () {
        return assetExpandRef.value;
    },
    subscribe (callback) {
        return assetExpandRef.addListener(callback);
    }
};
function useAssetExpand() {
    const isExpand = (0,use_subscription.useSubscription)(subscription);
    const setAssetsIsExpand = (0,react.useCallback)((val)=>{
        assetExpandRef.value = typeof val === 'function' ? val(assetExpandRef.value) : val;
    }, []);
    return [
        isExpand,
        setAssetsIsExpand
    ];
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/AssetsList/MoreBar.tsx





const MoreBar = /*#__PURE__*/ (0,react.memo)(function MoreBar({ isExpand, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    if (isExpand) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
        variant: "roundedOutlined",
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t.popups_wallet_more_collapse()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                style: {
                    transform: 'rotate(180deg)'
                }
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
        variant: "roundedOutlined",
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t.popups_wallet_more_expand()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {})
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/AssetsList/index.tsx

















const AssetsList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { hasNav })=>({
        container: {
            paddingBottom: hasNav ? 72 : undefined,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        list: {
            backgroundColor: theme.palette.maskColor.bottom,
            padding: theme.spacing(2)
        },
        item: {
            padding: 14,
            cursor: 'pointer',
            borderRadius: 8,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            }
        },
        tokenIcon: {
            width: 36,
            height: 36
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        text: {
            marginLeft: 14,
            maxWidth: '50%',
            overflow: 'auto'
        },
        name: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        balance: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            fontWeight: 400,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        customToken: {
            color: theme.palette.maskColor.third,
            fontSize: 13,
            fontWeight: 400,
            lineHeight: '18px'
        },
        value: {
            fontSize: 16,
            fontWeight: 700
        },
        more: {
            display: 'inline-flex',
            width: 'auto',
            margin: theme.spacing(0, 'auto', 2)
        }
    }));
const AssetItem = /*#__PURE__*/ (0,react.memo)(function AssetItem({ asset, onItemClick, ...rest }) {
    const { hasNavigator } = (0,dist/* useOutletContext */.bx)();
    const { classes, cx } = AssetsList_useStyles({
        hasNav: hasNavigator
    });
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const network = networks.find((x)=>x.chainId === asset.chainId);
    const providerURL = network?.isCustomized ? network.rpcUrl : undefined;
    const [seen, ref] = (0,useEverSeen/* useEverSeen */.t)();
    // Debank might not provide asset from current custom network
    const tryRpc = (!asset.balance || (0,number/* isZero */.Fr)(asset.balance)) && network?.isCustomized && seen;
    const { data: rpcBalance, isLoading } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, asset.address, {
        chainId: asset.chainId,
        providerURL
    }, tryRpc);
    const balance = (0,react.useMemo)(()=>{
        if (tryRpc) {
            return {
                pending: isLoading,
                value: isLoading ? undefined : (0,formatTokenBalance/* formatTokenBalance */.a)(rpcBalance, asset.decimals)
            };
        }
        return {
            pending: false,
            value: (0,formatTokenBalance/* formatTokenBalance */.a)(asset.balance, asset.decimals)
        };
    }, [
        tryRpc,
        rpcBalance,
        asset.balance,
        asset.decimals,
        isLoading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        ...rest,
        ref: ref,
        onClick: ()=>onItemClick(asset),
        className: cx(classes.item, rest.className),
        secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.value,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                value: asset.value?.usd || 0,
                formatter: formatCurrency/* formatCurrency */.x,
                options: {
                    onlyRemainTwoOrZeroDecimal: true
                }
            })
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                position: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                        className: classes.tokenIcon,
                        chainId: asset.chainId,
                        address: asset.address,
                        name: asset.name,
                        logoURL: asset.logoURL,
                        size: 36
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                        className: classes.badgeIcon,
                        chainId: asset.chainId,
                        size: 16,
                        network: network
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                className: classes.text,
                secondaryTypographyProps: {
                    component: 'div'
                },
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                            title: `${balance.value} ${asset.symbol}`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProgressiveText/* ProgressiveText */.l, {
                                className: classes.balance,
                                loading: balance.pending,
                                skeletonWidth: 60,
                                children: [
                                    balance.value,
                                    " ",
                                    asset.symbol
                                ]
                            })
                        }),
                        asset.isCustomToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.customToken,
                            children: t.added_by_user()
                        }) : null
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                    title: asset.name,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        children: asset.name
                    })
                })
            })
        ]
    }, `${asset.chainId}.${asset.address}`);
});
const AssetsList = /*#__PURE__*/ (0,react.memo)(function AssetsList() {
    const { hasNavigator } = (0,dist/* useOutletContext */.bx)();
    const { classes } = AssetsList_useStyles({
        hasNav: hasNavigator
    });
    const navigate = (0,dist/* useNavigate */.s0)();
    const { data: assets, isLoading } = (0,useWalletAssets/* useWalletAssets */.A)();
    const [assetsIsExpand, setAssetsIsExpand] = useAssetExpand();
    const onItemClick = (0,react.useCallback)((asset)=>{
        navigate((0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.TokenDetail, {
            chainId: asset.chainId,
            address: asset.address
        }));
    }, []);
    const onSwitch = (0,react.useCallback)(()=>setAssetsIsExpand((x)=>!x), []);
    const isSmartPay = !!(0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM)?.owner;
    const filteredAssets = (0,react.useMemo)(()=>{
        if (isSmartPay) return assets.filter((x)=>x.chainId === types/* ChainId */.a_.Matic);
        return assets;
    }, [
        assets,
        isSmartPay
    ]);
    const hasLowValueToken = (0,react.useMemo)(()=>{
        return !!filteredAssets.find((x)=>{
            if ((0,helpers_address/* isNativeTokenAddress */.qw)(x.address)) return false;
            return x.value?.usd ? (0,number/* isLessThan */.FI)(x.value.usd, 1) : false;
        });
    }, [
        filteredAssets
    ]);
    const list = filteredAssets.filter((asset)=>assetsIsExpand || (0,helpers_address/* isNativeTokenAddress */.qw)(asset.address) || (0,number/* isGte */.sK)(asset.value?.usd ?? 0, 1));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        "data-hide-scrollbar": true,
        children: [
            isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsListSkeleton, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                children: list.map((asset)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AssetItem, {
                        asset: asset,
                        onItemClick: onItemClick
                    }, `${asset.chainId}.${asset.address}`))
            }),
            hasLowValueToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreBar, {
                isExpand: assetsIsExpand,
                onClick: onSwitch,
                className: classes.more
            }) : null
        ]
    });
});
const AssetsListSkeleton = /*#__PURE__*/ (0,react.memo)(function AssetsListSkeleton() {
    const { classes } = AssetsList_useStyles({});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: (0,range/* default */.Z)(10).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classes.item,
                secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.value,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        width: 60
                    })
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        position: "relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                variant: "circular",
                                className: classes.tokenIcon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                variant: "circular",
                                width: 16,
                                height: 16,
                                className: classes.badgeIcon
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        className: classes.text,
                        secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.balance,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                width: 100
                            })
                        }),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            className: classes.name,
                            width: 90
                        })
                    })
                ]
            }, i))
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionList.tsx + 4 modules
var CollectionList = __webpack_require__(25199);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/WalletAssets/WalletCollections.tsx













const gridProps = {
    columns: 'repeat(auto-fill, minmax(20%, 1fr))',
    gap: '8px'
};
const WalletCollections_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { hasNav })=>({
        grid: {
            paddingBottom: hasNav ? 72 : undefined
        },
        importNft: {
            cursor: 'pointer',
            color: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 700,
            textAlign: 'center'
        }
    }));
function useAdditionalAssets() {
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const collectionMap = (0,use_subscription.useSubscription)(Token?.nonFungibleCollectionMap ?? Subscriptions/* EMPTY_ENTRY */.$n);
    const account = (0,useAccount/* useAccount */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const additionalAssets = (0,react.useMemo)(()=>{
        const collections = collectionMap[account?.toLowerCase()];
        if (!collections) return src_constants/* EMPTY_LIST */.rP;
        return collections.flatMap((collection)=>{
            const { contract } = collection;
            const tokens = collection.tokenIds.map((tokenId)=>{
                return {
                    tokenId,
                    chainId: contract.chainId,
                    ownerId: account,
                    address: contract.address,
                    contract,
                    metadata: {
                        chainId: contract.chainId,
                        name: contract.name,
                        tokenId,
                        symbol: contract.symbol
                    },
                    collection: {
                        name: contract.name,
                        symbol: contract.symbol
                    }
                };
            });
            return tokens;
        });
    }, [
        collectionMap,
        account
    ]);
    return additionalAssets;
}
const WalletCollections = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)(function WalletCollections({ onAddToken, scrollTargetRef }, ref) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { hasNavigator } = (0,dist/* useOutletContext */.bx)();
    const { classes } = WalletCollections_useStyles({
        hasNav: hasNavigator
    });
    const [currentTab] = (0,useParamTab/* useParamTab */.V)(type/* WalletAssetTabs */.T9.Tokens);
    const [, setParams] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const additionalAssets = useAdditionalAssets();
    const navigate = (0,dist/* useNavigate */.s0)();
    const handleItemClick = (0,react.useCallback)((asset)=>{
        const path = (0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.CollectibleDetail, {
            chainId: asset.chainId,
            address: asset.address,
            id: asset.tokenId
        });
        navigate(path, {
            state: {
                asset
            }
        });
    }, [
        navigate
    ]);
    const handleCollectionChange = (0,react.useCallback)((id)=>{
        const SEARCH_KEY = 'collectionId';
        setParams((params)=>{
            if (!id) params.delete(SEARCH_KEY);
            else params.set(SEARCH_KEY, id);
            return params.toString();
        }, {
            replace: true
        });
    }, [
        setParams
    ]);
    const collectiblesEmptyText = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                component: "div",
                children: t.do_not_see_your_nft()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.importNft,
                role: "button",
                onClick: ()=>onAddToken(currentTab),
                children: t.import_nft()
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionList/* CollectionList */.G, {
        ref: ref,
        classes: {
            grid: classes.grid
        },
        gridProps: gridProps,
        disableSidebar: true,
        disableWindowScroll: true,
        scrollElementRef: scrollTargetRef,
        emptyText: collectiblesEmptyText,
        additionalAssets: additionalAssets,
        onItemClick: handleItemClick,
        onCollectionChange: handleCollectionChange
    });
}));

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/WalletAssets/index.tsx
















const WalletAssets_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            marginTop: -34
        },
        header: {
            display: 'flex'
        },
        tab: {
            height: 34,
            padding: '8px 12px',
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second,
            minHeight: 'unset',
            backgroundColor: 'transparent',
            borderRadius: '12px 12px 0 0',
            boxShadow: 'none',
            [`&.${tabClasses/* default */.Z.selected}`]: {
                backgroundColor: theme.palette.maskColor.bottom,
                fontWeight: 700,
                color: theme.palette.maskColor.main,
                boxShadow: `0px 4px 6px 0px ${isDark ? 'rgba(0, 0, 0, 0.10)' : 'rgba(102, 108, 135, 0.10)'}`,
                backdropFilter: 'blur(5px)'
            }
        },
        panels: {
            overflow: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        tabPanel: {
            '&:not([hidden])': {
                padding: 0,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        },
        addButton: {
            minWidth: 'auto',
            height: 24,
            width: 24,
            marginRight: theme.spacing(2),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            padding: theme.spacing(0.5),
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: `0px 4px 6px 0px ${isDark ? 'rgba(0, 0, 0, 0.10)' : 'rgba(102, 108, 135, 0.10)'}`,
            marginLeft: 'auto'
        }
    };
});
const StyledTabList = (0,styled/* default */.ZP)(TabList_TabList)`
    &.${tabsClasses/* default */.Z.root} {
        min-height: unset;
        background-color: transparent;
        padding: 0 16px;
        flex-shrink: 0;
    }
    & .${tabsClasses/* default */.Z.indicator} {
        display: none;
    }
`;
const WalletAssets = /*#__PURE__*/ (0,react.memo)(function WalletAssets() {
    const navigate = (0,dist/* useNavigate */.s0)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const handleAdd = (0,react.useCallback)((assetTab)=>navigate(`${Routes/* PopupRoutes */.mZ.AddToken}/${chainId}/${assetTab}`), [
        chainId,
        navigate
    ]);
    return wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssetsUI, {
        onAddToken: handleAdd
    }) : null;
});
const WalletAssetsUI = /*#__PURE__*/ (0,react.memo)(function WalletAssetsUI({ onAddToken }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const { classes } = WalletAssets_useStyles();
    const [currentTab, handleTabChange] = (0,useParamTab/* useParamTab */.V)(type/* WalletAssetTabs */.T9.Tokens);
    const account = (0,useAccount/* useAccount */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const SEARCH_KEY = 'collectionId';
    const scrollTargetRef = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.content,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: currentTab,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledTabList, {
                            value: currentTab,
                            onChange: handleTabChange,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    className: classes.tab,
                                    label: t.popups_wallet_tab_assets(),
                                    value: type/* WalletAssetTabs */.T9.Tokens
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    className: classes.tab,
                                    label: t.popups_wallet_tab_collectibles(),
                                    value: type/* WalletAssetTabs */.T9.Collectibles
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    className: classes.tab,
                                    label: t.popups_wallet_tab_activity(),
                                    value: type/* WalletAssetTabs */.T9.Activity
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "text",
                            className: classes.addButton,
                            onClick: ()=>onAddToken(currentTab),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.AddNoBorder, {
                                size: 16
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(UserAssetsContext/* UserAssetsProvider */.z, {
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    account: account,
                    defaultCollectionId: params.get(SEARCH_KEY) || undefined,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Boundary/* Boundary */.E, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.panels,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScroll */.g, {
                                    scrollKey: "assets",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        value: type/* WalletAssetTabs */.T9.Tokens,
                                        className: classes.tabPanel,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsList, {})
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                    value: type/* WalletAssetTabs */.T9.Collectibles,
                                    className: classes.tabPanel,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScroll */.g, {
                                        scrollKey: "collectibles",
                                        targetRef: scrollTargetRef,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletCollections, {
                                            onAddToken: onAddToken,
                                            scrollTargetRef: scrollTargetRef
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScroll */.g, {
                                    scrollKey: "activities",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        value: type/* WalletAssetTabs */.T9.Activity,
                                        className: classes.tabPanel,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityList, {})
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/PriceChange/index.tsx
var PriceChange = __webpack_require__(99044);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Days.ts
var Days = __webpack_require__(89087);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PriceChartRange/index.tsx




const PriceChartRange_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { columns })=>({
        container: {
            background: theme.palette.maskColor.input,
            borderRadius: 28,
            padding: theme.spacing(0.5),
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`
        },
        active: {
            boxShadow: '0px 2px 5px 1px rgba(0, 0, 0, 0.05)',
            background: theme.palette.background.paper,
            fontWeight: 700
        },
        link: {
            padding: theme.spacing(1, 1.5),
            cursor: 'pointer',
            flexGrow: 1,
            flexShrink: 0,
            borderRadius: 18,
            textAlign: 'center',
            color: theme.palette.text.primary,
            textDecoration: 'none !important'
        }
    }));
const DEFAULT_RANGE_OPTIONS = [
    Days/* Days */.h.ONE_DAY,
    Days/* Days */.h.ONE_WEEK,
    Days/* Days */.h.ONE_MONTH,
    Days/* Days */.h.ONE_YEAR,
    Days/* Days */.h.MAX
];
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}Y`;
    if (days >= 30) return `${Math.floor(days / 30)}M`;
    if (days >= 7) return `${Math.floor(days / 7)}W`;
    if (days === 1) return '24H';
    return `${days}d`;
}
function PriceChartRange({ rangeOptions = DEFAULT_RANGE_OPTIONS, days, onDaysChange, ...rest }) {
    const { classes, cx } = PriceChartRange_useStyles({
        columns: rangeOptions.length
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: cx(classes.container, rest.className),
        direction: "row",
        gap: 2,
        ...rest,
        children: rangeOptions.map((daysOption)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: cx(classes.link, days === daysOption ? classes.active : ''),
                onClick: ()=>onDaysChange?.(daysOption),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        ':hover': {
                            fontWeight: 700
                        }
                    },
                    component: "span",
                    children: resolveDaysName(daysOption)
                })
            }, daysOption))
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleCoinMarketTable/index.tsx
var FungibleCoinMarketTable = __webpack_require__(50464);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CoinMetadataTable/index.tsx + 3 modules
var CoinMetadataTable = __webpack_require__(57826);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var Theme_theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTokenParams.ts
var useTokenParams = __webpack_require__(8054);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./node_modules/.pnpm/@remix-run+router@1.7.2/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(50617);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(39907);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/ActionGroup/index.tsx












const ActionGroup_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 16,
            paddingBottom: 16,
            gap: theme.spacing(2)
        },
        button: {
            color: theme.palette.maskColor.second,
            width: 112,
            height: theme.spacing(4.5),
            boxSizing: 'border-box',
            backgroundColor: theme.palette.maskColor.bottom,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            border: 'none',
            boxShadow: `0px 4px 6px 0px ${isDark ? 'rgba(0, 0, 0, 0.10)' : 'rgba(102, 108, 135, 0.10)'}`,
            backdropFilter: 'blur(5px)',
            cursor: 'pointer',
            transition: 'transform 0.1s ease',
            '&:hover': {
                transform: 'scale(1.03)'
            },
            '&:active': {
                transform: 'scale(0.97)'
            }
        },
        disabled: {
            opacity: 0.5,
            cursor: 'unset'
        },
        label: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1),
            fontWeight: 700,
            fontSize: 14
        }
    };
});
const ActionGroup = /*#__PURE__*/ (0,react.memo)(function ActionGroup({ className, chainId, address, asset, ...rest }) {
    const { classes, cx, theme } = ActionGroup_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const location = (0,dist/* useLocation */.TH)();
    const traderDefinition = (0,useActivatedPlugin/* useActivatedPlugin */.R)(PluginID/* PluginID */.P.Trader, 'any');
    const chainIdList = traderDefinition?.enableRequirement.web3?.[PluginID/* NetworkPluginID */.F.PLUGIN_EVM]?.supportedChainIds ?? [];
    const disabledSwap = (0,react.useMemo)(()=>!chainIdList.includes(chainId), [
        chainId,
        chainIdList
    ]);
    const handleSwap = (0,react.useCallback)(()=>{
        if (disabledSwap) return;
        const url = (0,urlcat_dist/* default */.ZP)('popups.html#/', Routes/* PopupRoutes */.mZ.Swap, (0,helpers_address/* isNativeTokenAddress */.qw)(asset?.address) ? {
            chainId: asset?.chainId
        } : {
            id: asset?.address,
            chainId: asset?.chainId,
            name: asset?.name,
            symbol: asset?.symbol,
            contract_address: asset?.address,
            decimals: asset?.decimals
        });
        (0,open_window/* openWindow */.x)(browser.runtime.getURL(url), 'SWAP_DIALOG');
    }, [
        asset,
        disabledSwap
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: cx(classes.container, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                type: "button",
                className: classes.button,
                onClick: ()=>{
                    const path = (0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Contacts, {
                        address,
                        chainId,
                        token: (0,router/* matchPath */.LX)(Routes/* PopupRoutes */.mZ.TokenDetail, location.pathname) ? true : undefined,
                        undecided: address ? undefined : true
                    });
                    navigate(path, {
                        state: {
                            asset
                        }
                    });
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Send, {
                        size: 20,
                        color: theme.palette.maskColor.main
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.wallet_send()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                type: "button",
                className: classes.button,
                onClick: ()=>{
                    navigate((0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Receive, {
                        chainId,
                        address
                    }));
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownward, {
                        size: 20,
                        color: theme.palette.maskColor.main
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.wallet_receive()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                disabled: disabledSwap,
                type: "button",
                className: cx(classes.button, disabledSwap ? classes.disabled : undefined),
                onClick: handleSwap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Cached, {
                        size: 20,
                        color: theme.palette.maskColor.main
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t.wallet_swap()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/hooks/useAsset.ts + 1 modules
var useAsset = __webpack_require__(81760);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useDimension.ts
var useDimension = __webpack_require__(13611);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePriceLineChart.ts + 2 modules
var usePriceLineChart = __webpack_require__(57386);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useCurrencyType.ts
var useCurrencyType = __webpack_require__(18121);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFiatCurrencyRate.ts
var useFiatCurrencyRate = __webpack_require__(76010);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TokenDetail/TrendingChart.tsx





const DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 368,
    height: 174
};
function TrendingChart({ stats, ...props }) {
    const svgRef = (0,react.useRef)(null);
    const currencyType = (0,useCurrencyType/* useCurrencyType */.P)();
    const { data: fiatCurrencyRate = 1 } = (0,useFiatCurrencyRate/* useFiatCurrencyRate */.P)();
    const chartData = (0,react.useMemo)(()=>stats.map(([date, price])=>({
                date: new Date(date),
                value: (0,number/* multipliedBy */.$q)(price, fiatCurrencyRate).toNumber()
            })), [
        stats
    ]);
    (0,useDimension/* useDimension */.$)(svgRef, DIMENSION);
    (0,usePriceLineChart/* usePriceLineChart */.Z)(svgRef, chartData, DIMENSION, 'token-price-line-chart', {
        sign: currencyType
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        ref: svgRef,
        width: DIMENSION.width,
        height: DIMENSION.height,
        viewBox: `0 0 ${DIMENSION.width} ${DIMENSION.height}`,
        preserveAspectRatio: "xMidYMid meet",
        ...props
    });
}

// EXTERNAL MODULE: ./packages/web3-providers/src/Trending/helpers.ts
var Trending_helpers = __webpack_require__(67876);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TokenDetail/useCoinGeckoCoinId.ts







function useCoinGeckoCoinId(chainId, address) {
    const isNativeToken = (0,helpers_address/* isNativeTokenAddress */.qw)(address);
    const erc20CoinId = (0,useQuery/* useQuery */.a)({
        enabled: !isNativeToken && !!address,
        queryKey: [
            'coin-gecko',
            'coin-id',
            'by-address',
            address
        ],
        queryFn: async ()=>{
            const coinInfo = await entry/* CoinGeckoTrending */.A5.getCoinInfoByAddress(address, chainId);
            return coinInfo?.id;
        }
    });
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const { data: fallbackSymbol } = (0,useQuery/* useQuery */.a)([
        'chain-list'
    ], fetchChains, {
        select: (chains)=>chains.find((x)=>x.chainId === chainId)?.nativeCurrency.symbol
    });
    const symbol = nativeToken?.symbol || fallbackSymbol;
    const nativeCoinId = (0,useQuery/* useQuery */.a)({
        enabled: isNativeToken,
        queryKey: [
            'native-token',
            'coin-id',
            chainId,
            symbol
        ],
        queryFn: async ()=>{
            const constantCoinId = (0,constants/* getCoinGeckoConstant */.U1)(chainId, 'COIN_ID');
            if (constantCoinId) return constantCoinId;
            const results = await entry/* DSearch */.UZ.search(symbol, specs/* SearchResultType */.Bk.FungibleToken);
            return results[0]?.id;
        }
    });
    return isNativeToken ? nativeCoinId : erc20CoinId;
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TokenDetail/useCoinTrendingStats.ts





function useCoinTrendingStats(chainId, address, days) {
    const { data: coinId, isLoading } = useCoinGeckoCoinId(chainId, address);
    return (0,useQuery/* useQuery */.a)({
        enabled: !isLoading && days !== undefined,
        queryKey: [
            'coin-stats',
            chainId,
            address,
            coinId,
            days
        ],
        queryFn: async ()=>{
            if (!coinId || days === undefined) return;
            const currency = Trending_helpers/* getCurrency */.zC(chainId, specs/* SourceType */.PO.CoinGecko);
            if (!currency) return;
            return entry/* CoinGeckoTrending */.A5.getCoinPriceStats(chainId, coinId, currency, days);
        }
    });
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(34093);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TokenDetail/useTokenPrice.ts


function useTokenPrice(chainId, address) {
    const nativeTokenAddress = (0,useNativeTokenAddress/* useNativeTokenAddress */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    return (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address ?? nativeTokenAddress, {
        chainId
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TokenDetail/useTrending.ts





function useTrending(chainId, address) {
    const { data: coinId, isLoading } = useCoinGeckoCoinId(chainId, address);
    return (0,useQuery/* useQuery */.a)({
        enabled: !isLoading,
        queryKey: [
            'coin-trending',
            'coin-gecko',
            chainId,
            coinId,
            address
        ],
        queryFn: async ()=>{
            const currency = Trending_helpers/* getCurrency */.zC(chainId, specs/* SourceType */.PO.CoinGecko);
            if (!currency || !coinId) return null;
            return entry/* CoinGeckoTrending */.A5.getCoinTrending(chainId, coinId, currency);
        }
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TokenDetail/index.tsx




















const TokenDetail_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        page: {
            position: 'relative',
            height: '100%',
            overflow: 'auto',
            // space for action group.
            paddingBottom: 68,
            zIndex: 3,
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        deleteButton: {
            padding: 0,
            minWidth: 'auto',
            width: 'auto'
        },
        assetValue: {
            fontSize: 24,
            fontWeight: 700,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
        },
        priceChange: {
            fontSize: 16
        },
        tokenIcon: {
            marginRight: 4,
            fontSize: 12
        },
        label: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second,
            textTransform: 'capitalize'
        },
        value: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            marginTop: 2,
            display: 'flex',
            alignItems: 'center'
        },
        actions: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0
        },
        trending: {
            display: 'flex',
            boxSizing: 'border-box',
            margin: theme.spacing(2, 'auto', 0)
        },
        info: {
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: '20px 20px 0 0',
            padding: theme.spacing(2),
            boxShadow: theme.palette.maskColor.bottomBg,
            backdropFilter: 'blur(8px)'
        },
        halo: {
            position: 'relative',
            zIndex: 1,
            overflowX: 'hidden',
            height: '100%',
            '&:before': {
                position: 'absolute',
                left: '-10%',
                top: 240,
                zIndex: 1,
                content: '""',
                height: 256,
                width: 256,
                backgroundImage: isDark ? 'radial-gradient(50% 50.00% at 50% 50.00%, #443434 0%, rgba(68, 52, 52, 0.00) 100%)' : 'radial-gradient(50% 50.00% at 50% 50.00%, #FFE9E9 0%, rgba(255, 233, 233, 0.00) 100%)'
            },
            '&:after': {
                position: 'absolute',
                left: '70%',
                top: 240,
                zIndex: 1,
                content: '""',
                height: 256,
                width: 256,
                backgroundImage: isDark ? 'radial-gradient(50% 50.00% at 50% 50.00%, #605675 0%, rgba(56, 51, 67, 0.00) 100%)' : 'radial-gradient(50% 50.00% at 50% 50.00%, #F0E9FF 0%, rgba(240, 233, 255, 0.00) 100%)'
            }
        }
    };
});
const TokenDetail = /*#__PURE__*/ (0,react.memo)(function TokenDetail() {
    const { classes, theme } = TokenDetail_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { chainId, address } = (0,useTokenParams/* useTokenParams */.S)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const account = (0,useAccount/* useAccount */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const isNativeToken = (0,helpers_address/* isNativeTokenAddress */.qw)(address);
    const asset = (0,useAsset/* useAsset */.G)(chainId, address, account);
    const { data: balance = asset?.balance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address, {
        chainId
    });
    const [chartRange, setChartRange] = (0,react.useState)(Days/* Days */.h.ONE_DAY);
    const { data: stats = src_constants/* EMPTY_LIST */.rP, refetch, isLoading: isLoadingStats } = useCoinTrendingStats(chainId, address, chartRange);
    const { data: tokenPrice = stats.at(-1)?.[1], isLoading: isLoadingPrice } = useTokenPrice(chainId, address);
    const tokenValue = (0,react.useMemo)(()=>{
        if (asset?.value?.usd) return asset.value.usd;
        if (!asset?.decimals || !tokenPrice || !balance) return 0;
        return (0,number/* leftShift */.w5)(balance, asset.decimals).times(tokenPrice);
    }, [
        balance,
        asset,
        tokenPrice
    ]);
    const { data: trending, isLoading: isLoadingTrending, isError } = useTrending(chainId, address);
    const priceChange = trending?.market?.price_change_percentage_24h_in_currency || trending?.market?.price_change_24h || 0;
    (0,useTitle/* useTitle */.Z)(asset ? `${asset.symbol}(${asset.name})` : 'Loading Asset...');
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { setExtension } = (0,react.useContext)(useTitle/* PageTitleContext */.I);
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    (0,react.useEffect)(()=>{
        if (!asset || isNativeToken) return;
        setExtension(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "text",
            className: classes.deleteButton,
            onClick: async ()=>{
                const result = await modal_controls/* ConfirmModal */.sm.openAndWaitForClose({
                    title: t.hide_token_symbol({
                        symbol: asset.symbol
                    }),
                    message: t.hide_token_description({
                        symbol: asset.symbol
                    })
                });
                if (!result) return;
                // Actually, blocking.
                await Token?.blockToken?.(account, {
                    id: asset.address,
                    chainId,
                    type: specs/* TokenType */.iv.Fungible,
                    schema: types/* SchemaType */.XQ.ERC20,
                    address: asset.address
                });
                showSnackbar(t.hided_token_successfully());
                navigate(-1);
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Trash, {
                size: 24
            })
        }));
        return ()=>setExtension(undefined);
    }, [
        chainId,
        asset,
        isNativeToken,
        classes.deleteButton,
        showSnackbar,
        t,
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.halo,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.page,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    padding: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                            className: classes.assetValue,
                            loading: isLoadingPrice,
                            skeletonWidth: 80,
                            children: typeof tokenPrice !== 'undefined' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                value: tokenPrice,
                                formatter: formatCurrency/* formatCurrency */.x
                            }) : null
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChange/* PriceChange */.Y, {
                            className: classes.priceChange,
                            change: priceChange,
                            loading: isLoadingTrending
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartRange, {
                            days: chartRange,
                            onDaysChange: setChartRange,
                            gap: "10px",
                            mt: 2
                        }),
                        !isLoadingStats && isError ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
                            onRetry: refetch,
                            className: classes.trending,
                            height: DIMENSION.height,
                            width: DIMENSION.width
                        }) : !isLoadingStats && !stats.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                            className: classes.trending,
                            height: DIMENSION.height,
                            width: DIMENSION.width,
                            children: t.not_enough_data_to_present()
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingChart, {
                            className: classes.trending,
                            stats: stats
                        }, `${chainId}.${address}`),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.label,
                                            children: t.balance()
                                        }),
                                        asset ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            component: "div",
                                            className: classes.value,
                                            justifyContent: "flex-start",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                                    className: classes.tokenIcon,
                                                    address: asset.address,
                                                    name: asset.name,
                                                    chainId: asset.chainId,
                                                    logoURL: asset.logoURL,
                                                    size: 16
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                                    value: balance,
                                                    decimals: asset.decimals,
                                                    significant: 6,
                                                    formatter: formatBalance/* formatBalance */.a
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            component: "div",
                                            className: classes.value,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                    className: classes.tokenIcon,
                                                    variant: "circular",
                                                    width: 16,
                                                    height: 16
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                    variant: "text",
                                                    width: 30
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    textAlign: "right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.label,
                                            children: t.value()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "div",
                                            className: classes.value,
                                            justifyContent: "flex-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                                value: tokenValue,
                                                formatter: formatCurrency/* formatCurrency */.x
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                isLoadingTrending ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.info,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleCoinMarketTable/* FungibleCoinMarketTableSkeleton */.r, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTable/* CoinMetadataTableSkeleton */.w, {})
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.info,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleCoinMarketTable/* FungibleCoinMarketTable */.N, {
                            trending: trending
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTable/* CoinMetadataTable */.y, {
                            trending: trending
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                    theme: theme.palette.mode === 'light' ? Theme_theme/* MaskDarkTheme */.H : Theme_theme/* MaskLightTheme */.C,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionGroup, {
                        className: classes.actions,
                        chainId: chainId,
                        address: address,
                        asset: asset
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const Wallet_TokenDetail = (TokenDetail);

// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/theme/src/Theme/colors.ts
var colors = __webpack_require__(38060);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/capitalize.js
var capitalize = __webpack_require__(68951);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TransactionDetail/useTransactionLogs.ts






/**
 * Prefer to list online transaction.
 * But only local transaction record activity logs.
 * Would try to get activity from local record transaction for online transaction
 */ function useTransactionLogs(transactionState) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const account = (0,useAccount/* useAccount */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { Transaction } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: txes } = (0,useQuery/* useQuery */.a)({
        enabled: transactionState && !('candidates' in transactionState),
        // Could already be cached through ActivityList page.
        queryKey: [
            'transactions',
            transactionState?.chainId,
            account
        ],
        networkMode: 'always',
        queryFn: async ()=>{
            if (!transactionState?.chainId) return;
            return Transaction?.getTransactions?.(transactionState?.chainId, account) ?? src_constants/* EMPTY_LIST */.rP;
        }
    });
    const logs = (0,react.useMemo)(()=>{
        if (!transactionState) return src_constants/* EMPTY_LIST */.rP;
        const isRecentTx = 'candidates' in transactionState;
        const localTransaction = isRecentTx ? transactionState : txes?.find((x)=>x.id === transactionState.id);
        if (localTransaction) {
            return [
                t.transaction_confirmed_at({
                    datetime: (0,format/* default */.Z)(localTransaction.createdAt, "HH:mm 'on' M/dd/yyyy")
                }),
                t.transaction_completed_at({
                    datetime: (0,format/* default */.Z)(localTransaction.updatedAt, "HH:mm 'on' M/dd/yyyy")
                })
            ].filter(Boolean);
        }
        return src_constants/* EMPTY_LIST */.rP;
    }, [
        transactionState,
        t,
        txes
    ]);
    return logs;
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/TransactionDetail/index.tsx





















const TransactionDetail_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        statusTitle: {
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'capitalize'
        },
        status: {
            padding: theme.spacing(1),
            borderRadius: 8,
            display: 'inline-flex',
            fontSize: 18,
            fontWeight: 700,
            marginLeft: 'auto',
            alignItems: 'center',
            gap: 4,
            transition: 'all 0.3s ease-in-out'
        },
        statusFail: {
            color: theme.palette.maskColor.danger,
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.1)
        },
        statusSuccess: {
            color: theme.palette.maskColor.success,
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.1)
        },
        statusPending: {
            color: theme.palette.maskColor.warn,
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.1)
        },
        field: {
            display: 'flex',
            marginTop: theme.spacing(1.5)
        },
        fieldName: {
            color: theme.palette.maskColor.second,
            fontSize: 12,
            fontWeight: 700
        },
        fieldValue: {
            minWidth: '5em',
            color: theme.palette.maskColor.main,
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontSize: 12,
            fontWeight: 700
        },
        sectionName: {
            marginTop: theme.spacing(1.5),
            backgroundColor: theme.palette.maskColor.bg,
            padding: 10,
            fontSize: 14,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            borderRadius: 4
        },
        logs: {
            padding: 0,
            margin: 0,
            listStyleType: 'none'
        },
        log: {
            marginTop: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center'
        },
        index: {
            height: 22,
            width: 22,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, #1C68F3 0%, #8EB6FF 99.00%)',
            borderRadius: '50%',
            color: colors/* MaskColors */.m.light.maskColor.white,
            fontSize: 12,
            fontWeight: 700
        },
        logText: {
            lineHeight: '16px',
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontWeight: 700,
            fontSize: 12
        },
        actionGroup: {
            display: 'flex',
            justifyContent: 'center',
            background: theme.palette.maskColor.secondaryBottom,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            gap: theme.spacing(2),
            padding: theme.spacing(2),
            width: '100%',
            bottom: 0,
            zIndex: 100,
            marginTop: 'auto'
        },
        speedupButton: {
            backgroundColor: colors/* MaskColors */.m.light.maskColor.primary,
            color: colors/* MaskColors */.m.light.maskColor.white,
            '&:hover': {
                backgroundColor: colors/* MaskColors */.m.light.maskColor.primary,
                color: colors/* MaskColors */.m.light.maskColor.white
            }
        }
    }));
const TransactionDetail = /*#__PURE__*/ (0,react.memo)(function TransactionDetail() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx, theme } = TransactionDetail_useStyles();
    const location = (0,dist/* useLocation */.TH)();
    const transactionState = location.state.transaction;
    const candidateState = location.state.candidate;
    const isRecentTx = transactionState && 'candidates' in transactionState;
    const transaction = isRecentTx ? transactionState.candidates[transactionState.id] : transactionState;
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = transactionState?.chainId;
    const transactionId = transactionState?.id;
    const blockNumber = transaction && 'blockNumber' in transaction ? transaction.blockNumber : undefined;
    (0,useTitle/* useTitle */.Z)((0,capitalize/* default */.Z)(transaction && 'cateName' in transaction ? transaction.cateName : 'Transaction'));
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId: transaction?.chainId
    });
    const { data: nativeTokenPrice } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId: transaction?.chainId
    });
    const { data: tx, isLoading: loadingTx } = (0,useQuery/* useQuery */.a)({
        enabled: !!transaction,
        queryKey: [
            'chainbase',
            'transaction',
            transaction?.chainId,
            transactionId,
            blockNumber
        ],
        queryFn: async ()=>{
            if (!chainId || !transactionId) return null;
            return entry/* ChainbaseHistory */.uy.getTransaction(chainId, transactionId, blockNumber);
        }
    });
    const { data: txInput, isLoading: loadingTxInput } = (0,useQuery/* useQuery */.a)({
        enabled: !!transaction && !loadingTx && !tx?.input && transactionState?.type === 'transfer' && !candidateState?.data,
        queryKey: [
            transaction?.chainId,
            transactionId
        ],
        queryFn: async ()=>{
            if (!chainId || !transactionId) return;
            const tx = await entry/* Web3 */.Bv.getTransaction(transactionId, {
                chainId
            });
            return tx?.input;
        }
    });
    const handleSpeedup = (0,react.useCallback)(()=>{
        if (!isRecentTx) return;
        return modifyTransaction(transactionState, type/* ReplaceType */.uM.SPEED_UP);
    }, [
        isRecentTx,
        transactionState
    ]);
    const handleCancel = (0,react.useCallback)(()=>{
        if (!isRecentTx) return;
        modifyTransaction(transactionState, type/* ReplaceType */.uM.CANCEL);
    }, [
        isRecentTx,
        transactionState
    ]);
    const logs = useTransactionLogs(transactionState);
    if (!transaction) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
            to: `${Routes/* PopupRoutes */.mZ.Wallet}?tab=${type/* WalletAssetTabs */.T9.Activity}`,
            replace: true
        });
    }
    const { FAILED, SUCCEED, NOT_DEPEND } = specs.TransactionStatusType;
    const StatusIconMap = {
        [FAILED]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.BaseClose, {
            size: 20
        }),
        [SUCCEED]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FillSuccess, {
            size: 20
        }),
        [NOT_DEPEND]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WarningTriangle, {
            size: 20
        })
    };
    const StatusClassesMap = {
        [FAILED]: classes.statusFail,
        [SUCCEED]: classes.statusSuccess,
        [NOT_DEPEND]: classes.statusPending
    };
    const StatusLabelMap = {
        [FAILED]: t.transaction_failed(),
        [SUCCEED]: t.transaction_success(),
        [NOT_DEPEND]: t.transaction_pending()
    };
    const status = tx ? helpers/* normalizeTxStatus */.t_(tx.status) : transactionState?.status;
    const statusPending = status === undefined && loadingTx;
    const isOut = (0,isSameAddress/* isSameAddress */.W)(transaction.from, account);
    const link = transactionId ? entry/* ExplorerResolver */.Xz.transactionLink(chainId, transactionId) : undefined;
    const gasUsedPercent = tx ? tx.gas_used * 100 / tx.gas : 0;
    const gasFeeInState = !isRecentTx && !tx ? transactionState?.fee?.eth : undefined;
    const gasFee = tx ? (0,formatter/* formatWeiToEther */.yp)((0,number/* multipliedBy */.$q)(tx.gas_used, tx.effective_gas_price)) : gasFeeInState ? new bignumber/* BigNumber */.O(gasFeeInState) : undefined;
    const gasCost = gasFee && nativeTokenPrice ? gasFee.times(nativeTokenPrice) : undefined;
    const receiverAddress = parseReceiverFromERC20TransferInput(candidateState?.data || tx?.input || txInput);
    const toAddress = receiverAddress || transaction.to || tx?.to_address;
    const loadingToAddress = transactionState?.type === 'transfer' ? !receiverAddress && (loadingTx || loadingTxInput) : !transaction.to && loadingTx;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                p: 2,
                overflow: "auto",
                "data-hide-scrollbar": true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h2",
                                className: classes.statusTitle,
                                children: t.transaction_status()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProgressiveText/* ProgressiveText */.l, {
                                component: "div",
                                className: cx(classes.status, StatusClassesMap[status]),
                                loading: statusPending,
                                skeletonWidth: 90,
                                children: [
                                    StatusIconMap[status],
                                    StatusLabelMap[status]
                                ]
                            })
                        ]
                    }),
                    transactionId ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_hash()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.fieldValue,
                                children: [
                                    (0,formatter/* formatHash */.NI)(transactionId, 4),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                        size: 16,
                                        text: transactionId,
                                        sx: {
                                            ml: 0.5
                                        }
                                    })
                                ]
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_link()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.fieldValue,
                                children: [
                                    t.view_on_explorer(),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        href: link,
                                        target: "_blank",
                                        ml: 0.5,
                                        fontSize: 0,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 16,
                                            color: theme.palette.maskColor.second
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h2",
                        className: classes.sectionName,
                        children: t.transaction_base()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_from()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                className: classes.fieldValue,
                                component: "div",
                                loading: !transaction.from && loadingTx,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReversedAddress/* ReversedAddress */.i, {
                                    address: transaction.from || tx?.from_address
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_to()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                className: classes.fieldValue,
                                component: "div",
                                loading: loadingToAddress,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReversedAddress/* ReversedAddress */.i, {
                                    address: toAddress
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h2",
                        className: classes.sectionName,
                        children: "Transaction"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.nonce()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: tx?.nonce
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.amount()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: tx && nativeToken ? `${isOut ? '-' : '+'}${(0,formatBalance/* formatBalance */.a)(tx.value || '0', nativeToken.decimals, 6)} ${nativeToken.symbol}` : ''
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_gas_limit()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: tx?.gas
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_gas_used()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: [
                                    tx?.gas_used,
                                    gasUsedPercent ? ` (${(0,number/* trimZero */.vr)(gasUsedPercent.toFixed(1))}%)` : ''
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_gas_price()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: tx ? (0,formatter/* formatWeiToGwei */.f1)(tx.effective_gas_price).toFixed(6) : ''
                            })
                        ]
                    }),
                    tx?.max_priority_fee_per_gas ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_priority_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: tx ? (0,formatter/* formatWeiToGwei */.f1)(tx.max_priority_fee_per_gas).toFixed(6) : ''
                            })
                        ]
                    }) : null,
                    tx?.max_fee_per_gas ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_max_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: tx ? (0,formatter/* formatWeiToGwei */.f1)(tx.max_fee_per_gas).toFixed(6) : ''
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.field,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.fieldName,
                                children: t.transaction_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProgressiveText/* ProgressiveText */.l, {
                                loading: loadingTx,
                                className: classes.fieldValue,
                                children: [
                                    gasFee ? `${gasFee.toFixed(6)} ${nativeToken?.symbol}` : '',
                                    gasCost ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            ' ≈ ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                                value: gasCost,
                                                formatter: formatCurrency/* formatCurrency */.x
                                            })
                                        ]
                                    }) : ''
                                ]
                            })
                        ]
                    }),
                    logs?.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h2",
                                className: classes.sectionName,
                                children: t.activity_log()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("ol", {
                                className: classes.logs,
                                children: logs.map((log, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: classes.log,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: classes.index,
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.logText,
                                                children: log
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }) : null
                ]
            }),
            isRecentTx && status === NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.actionGroup,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: classes.speedupButton,
                        fullWidth: true,
                        onClick: handleSpeedup,
                        children: t.speed_up()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        color: "error",
                        fullWidth: true,
                        onClick: handleCancel,
                        children: t.cancel()
                    })
                ]
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/NFTFallbackImage/index.tsx
var NFTFallbackImage = __webpack_require__(85080);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useReportSpam.tsx
var useReportSpam = __webpack_require__(29128);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenSecurity/index.tsx + 1 modules
var TokenSecurity = __webpack_require__(78199);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensFollower.ts
var isLensFollower = __webpack_require__(63623);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensCollect.ts
var isLensCollect = __webpack_require__(42097);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/resolveImageURL.ts
var resolveImageURL = __webpack_require__(81438);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/CollectibleDetail/index.tsx
















const CollectibleDetail_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        page: {
            padding: theme.spacing(2),
            overflow: 'auto',
            paddingBottom: 74
        },
        image: {
            width: 178,
            height: 178,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 12,
            overflow: 'hidden'
        },
        name: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            textAlign: 'center',
            margin: theme.spacing(1.5, 'auto', 0),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        collectionName: {
            fontSize: 14,
            fontWeight: 400,
            textAlign: 'center',
            marginTop: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        collectionNameLabel: {
            marginLeft: 4,
            marginRight: 4
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: '100%',
            height: '100%'
        },
        icon: {
            borderRadius: '50%',
            overflow: 'hidden'
        },
        prices: {
            display: 'flex',
            gap: theme.spacing(1.5),
            marginTop: theme.spacing(4)
        },
        price: {
            flexGrow: 1
        },
        priceLabel: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        },
        priceValue: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            marginTop: theme.spacing(1.5)
        },
        noneValue: {
            color: theme.palette.maskColor.second
        },
        sectionTitle: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(1.5)
        },
        text: {
            fontSize: 12,
            color: theme.palette.maskColor.second,
            fontWeight: 400,
            wordWrap: 'break-word'
        },
        traits: {
            flexWrap: 'wrap',
            gap: theme.spacing(1.5),
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        trait: {
            border: `1px solid ${theme.palette.maskColor.line}`,
            borderRadius: 8,
            padding: 6,
            overflow: 'auto'
        },
        traitType: {
            fontSize: 12,
            color: theme.palette.maskColor.primaryMain,
            textTransform: 'capitalize',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        traitValue: {
            fontSize: 13,
            fontWeight: 700,
            color: theme.palette.maskColor.primary,
            marginTop: theme.spacing(0.5),
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        sendButton: {
            position: 'fixed',
            left: 18,
            right: 18,
            bottom: 18,
            boxShadow: '0px 6px 12px 0px rgba(7, 16, 27, 0.20)',
            backdropFilter: 'blur(8px)'
        },
        iconButton: {
            padding: 0,
            minWidth: 'auto',
            width: 'auto'
        },
        reportButton: {
            color: theme.palette.maskColor.main,
            height: 20,
            width: 20,
            padding: 0,
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }));
const CollectibleDetail = /*#__PURE__*/ (0,react.memo)(function CollectibleDetail() {
    const { classes, cx } = CollectibleDetail_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const location = (0,dist/* useLocation */.TH)();
    const { chainId, address, params } = (0,useTokenParams/* useTokenParams */.S)();
    const account = (0,useAccount/* useAccount */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const id = params.get('id') || '';
    const stateAsset = location.state?.asset;
    const { data: asset, isLoading } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, address, id, {
        chainId
    });
    (0,react.useEffect)(()=>{
        if (!asset && !isLoading) navigate(-1);
    }, [
        !asset && !isLoading,
        navigate
    ]);
    (0,useTitle/* useTitle */.Z)(asset?.metadata?.name || t.collectible_title());
    const availableAsset = asset || stateAsset;
    const name = availableAsset?.metadata?.name;
    const collectionName = availableAsset?.collection?.name;
    const assetDesc = availableAsset?.metadata?.description;
    const collectionDesc = availableAsset?.collection?.description;
    const floorPrice = (0,react.useMemo)(()=>{
        if (!asset?.collection?.floorPrices) return null;
        return asset.collection.floorPrices.find((x)=>x.marketplace_id === 'opensea') || asset.collection.floorPrices[0];
    }, [
        asset?.collection?.floorPrices
    ]);
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { setExtension } = (0,react.useContext)(useTitle/* PageTitleContext */.I);
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    (0,react.useEffect)(()=>{
        setExtension(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "text",
            className: classes.iconButton,
            onClick: async ()=>{
                const result = await modal_controls/* ConfirmModal */.sm.openAndWaitForClose({
                    title: t.hide_collectible({
                        name: String(name)
                    }),
                    message: t.hide_collectible_description({
                        name: String(name)
                    })
                });
                if (!result || !Token?.blockToken || !availableAsset) return;
                await Token.blockToken(account, {
                    id: `${availableAsset.chainId}.${availableAsset.address}.${availableAsset.tokenId}`,
                    chainId: availableAsset.chainId,
                    type: specs/* TokenType */.iv.NonFungible,
                    schema: types/* SchemaType */.XQ.ERC721,
                    address: availableAsset.address,
                    tokenId: availableAsset.tokenId
                });
                await Token.removeNonFungibleTokens?.(account, {
                    chainId: availableAsset.chainId,
                    name: '',
                    // Name is not necessary but satisfies typing.
                    address: availableAsset.address,
                    schema: types/* SchemaType */.XQ.ERC721
                }, [
                    availableAsset.tokenId
                ]);
                showSnackbar(t.hided_token_successfully());
                navigate(-1);
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Trash, {
                size: 24
            })
        }));
        return ()=>setExtension(undefined);
    }, [
        classes.iconButton,
        t,
        name,
        account,
        navigate,
        showSnackbar
    ]);
    const lastSale = asset?.priceInToken;
    const transferable = (0,react.useMemo)(()=>{
        if (!availableAsset) return false;
        if ((0,helpers_address/* isLensProfileAddress */._u)(availableAsset.address)) return false;
        if (availableAsset.metadata?.name && (0,isLensFollower/* isLensFollower */.a)(availableAsset.metadata.name)) return false;
        if (availableAsset.collection?.name && (0,isLensCollect/* isLensCollect */.C)(availableAsset.collection.name)) return false;
        return true;
    }, [
        availableAsset
    ]);
    const fallbackImage = availableAsset ? (0,resolveImageURL/* resolveImageURL */.y)(undefined, availableAsset.metadata?.name, availableAsset.collection?.name, availableAsset.contract?.address) : NFTFallbackImage/* NFTFallbackImage */.t;
    const { isReporting, isSpam, promptReport } = (0,useReportSpam/* useReportSpam */.v)({
        address: availableAsset?.address,
        chainId: availableAsset?.chainId,
        collectionId: availableAsset?.collection?.id
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: classes.page,
        "data-hide-scrollbar": true,
        children: [
            availableAsset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                classes: {
                    root: classes.image,
                    fallbackImage: classes.fallbackImage
                },
                url: availableAsset?.metadata?.imageURL,
                fallbackImage: fallbackImage
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.image
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                variant: "h1",
                className: classes.name,
                loading: isLoading || !name,
                skeletonWidth: 100,
                skeletonHeight: 18,
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.collectionName,
                children: [
                    availableAsset?.collection?.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        size: 24,
                        classes: {
                            container: classes.icon
                        },
                        src: availableAsset.collection.iconURL
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                        className: classes.collectionNameLabel,
                        loading: isLoading || !collectionName,
                        skeletonWidth: 80,
                        children: collectionName
                    }),
                    isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* NFTSpamBadge */.k, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        className: classes.reportButton,
                        onClick: promptReport,
                        disabled: isReporting,
                        children: isReporting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                            size: 16
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Flag, {
                            size: 16
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.prices,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.price,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h2",
                                className: classes.priceLabel,
                                children: t.collectible_last_sale_price()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: cx(classes.priceValue, lastSale ? '' : classes.noneValue),
                                children: lastSale ? `${(0,formatBalance/* formatBalance */.a)(lastSale.amount, lastSale.token.decimals)} ${lastSale.token.symbol}` : t.none()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.price,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h2",
                                className: classes.priceLabel,
                                children: t.floor_price()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: cx(classes.priceValue, floorPrice ? '' : classes.noneValue),
                                children: floorPrice ? `${(0,formatBalance/* formatBalance */.a)(floorPrice.value, floorPrice.payment_token.decimals)} ${floorPrice.payment_token.symbol}` : t.none()
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "h2",
                className: classes.sectionTitle,
                children: t.collectible_description()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.text,
                children: assetDesc || t.none()
            }),
            isLoading || asset?.traits?.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h2",
                        className: classes.sectionTitle,
                        children: t.collectible_properties()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.traits,
                        children: asset?.traits?.map((trait, index)=>{
                            const uiValue = (0,formatter/* formatTrait */.d0)(trait);
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.trait,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                        title: trait.type,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.traitType,
                                            children: trait.type
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                        title: trait.value,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.traitValue,
                                            children: uiValue
                                        })
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            }) : null,
            isLoading || collectionDesc ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h2",
                        className: classes.sectionTitle,
                        children: t.about_collection({
                            name: String(collectionName)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                        variant: "body1",
                        loading: isLoading,
                        className: classes.text,
                        skeletonWidth: 100,
                        children: collectionDesc
                    })
                ]
            }) : null,
            transferable ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                className: classes.sendButton,
                onClick: ()=>{
                    const path = (0,urlcat_dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Contacts, {
                        tab: type/* TransferTabType */.md.NFT,
                        'nft:chainId': chainId,
                        'nft:address': address,
                        'nft:tokenId': availableAsset?.tokenId
                    });
                    navigate(path);
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Send, {
                        size: 16,
                        style: {
                            marginRight: 4
                        }
                    }),
                    t.send()
                ]
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(37603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./packages/mask/popups/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(51093);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var shared_src_constants = __webpack_require__(16044);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/Unlock/index.tsx













const Unlock_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.maskColor.secondaryBottom
        },
        content: {
            padding: '0px 16px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        },
        titleWrapper: {
            paddingTop: 8,
            height: 100,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontStyle: 'normal',
            fontWeight: 700,
            marginBottom: 12
        },
        inputWrapper: {
            paddingTop: 18,
            height: 192,
            width: '100%'
        },
        pointer: {
            cursor: 'pointer'
        }
    }));
const Unlock = /*#__PURE__*/ (0,react.memo)(function Unlock() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = Unlock_useStyles();
    const [password, setPassword] = (0,react.useState)('');
    const theme = (0,useTheme/* default */.Z)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const [{ value: verified, loading }, handleUnlock] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const from = params.get('from');
        const close_after_unlock = params.get('close_after_unlock');
        const verified = await service/* default */.ZP.Wallet.unlockWallet(password);
        if (verified) {
            if (close_after_unlock && !from) {
                await service/* default */.ZP.Helper.removePopupWindow();
            } else if (from) {
                const path = (0,urlcat_dist/* default */.ZP)(from, {
                    tab: from === Routes/* PopupRoutes */.mZ.Personas ? shared_src_constants/* PopupHomeTabType */.$J.ConnectedWallets : undefined
                });
                navigate(path, {
                    replace: true
                });
            }
        }
        return verified;
    }, [
        password,
        params
    ]);
    const navigateToResetWallet = (0,react.useCallback)(()=>{
        navigate({
            pathname: Routes/* PopupRoutes */.mZ.ResetWallet
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.titleWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: t.welcome_back()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.inputWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                            placeholder: "Password",
                            value: password,
                            autoFocus: true,
                            onKeyDown: (event)=>{
                                if (event.key === 'Enter') handleUnlock();
                            },
                            type: "password",
                            onChange: (e)=>setPassword(e.target.value)
                        }),
                        verified === false ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 14,
                            color: theme.palette.maskColor.danger,
                            marginTop: "12px",
                            children: t.popups_wallet_unlock_error_password()
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    loading: loading,
                    fullWidth: true,
                    variant: "contained",
                    disabled: !password || loading,
                    onClick: handleUnlock,
                    children: t.unlock()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: theme.palette.maskColor.main,
                    marginTop: "16px",
                    onClick: navigateToResetWallet,
                    className: classes.pointer,
                    fontSize: 14,
                    textAlign: "center",
                    fontWeight: 700,
                    children: t.popups_wallet_reset_tips()
                })
            ]
        })
    });
});
/* harmony default export */ const Wallet_Unlock = (Unlock);

// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/components/ImportCreateWallet/index.tsx
var ImportCreateWallet = __webpack_require__(66902);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/StartUp/index.tsx









const StartUp_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.maskColor.secondaryBottom
        },
        content: {
            padding: 16,
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        },
        titleWrapper: {
            padding: theme.spacing(2, 0),
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
        placeholderDescription: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            color: theme.palette.maskColor.third,
            marginTop: theme.spacing(1.5),
            textAlign: 'center'
        }
    }));
const WalletStartUp = /*#__PURE__*/ (0,react.memo)(function WalletStartUp() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = StartUp_useStyles();
    const [, onEnterCreateWallet] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (Sniffings/* Sniffings */.Y.is_firefox) {
            window.close();
        }
        await service/* default */.ZP.Helper.removePopupWindow();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        "data-hide-scrollbar": true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.titleWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: t.popups_add_wallet()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.placeholderDescription,
                            children: t.popups_add_wallet_description()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportCreateWallet/* ImportCreateWallet */.t, {
                    onChoose: onEnterCreateWallet
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/WalletHeader/WalletSetupHeaderUI.tsx






const WalletSetupHeaderUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            height: 140,
            padding: 16,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            alignSelf: 'stretch',
            background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), linear-gradient(90deg, rgba(98, 126, 234, 0.2) 0%, rgba(59, 153, 252, 0.2) 100%)' : theme.palette.maskColor.bottom,
            lineHeight: 0
        },
        backIcon: {
            position: 'absolute',
            top: 16,
            left: 16,
            fontSize: 24,
            cursor: 'pointer',
            color: theme.palette.maskColor.main
        }
    }));
const WalletSetupHeaderUI = /*#__PURE__*/ (0,react.memo)(function WalletSetupHeaderUI({ showBack }) {
    const { classes } = WalletSetupHeaderUI_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const location = (0,dist/* useLocation */.TH)();
    const handleBack = (0,react.useCallback)(()=>navigate(-1), [
        location
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            showBack ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Comeback, {
                className: classes.backIcon,
                onClick: handleBack
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskWallet, {
                width: 64,
                height: 64
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(76670);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/hooks/useConnected.ts


function useConnectedWallets(origin) {
    return (0,useQuery/* useQuery */.a)([
        'origin-connected-wallets',
        origin
    ], async ()=>{
        if (origin === null) {
            const result = await service/* default */.ZP.Helper.queryCurrentActiveTab();
            if (!result.url || !URL.canParse(result.url)) return null;
            origin = new URL(result.url).origin;
        }
        const connected = await service/* default */.ZP.Wallet.getAllConnectedWallets(origin);
        return connected;
    }, {
        networkMode: 'always'
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sum.js
var sum = __webpack_require__(15337);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/WalletHeader/WalletAssetsValue.tsx






const WalletAssetsValue = /*#__PURE__*/ (0,react.memo)(function WalletAssetsValue({ account, ...props }) {
    const { data: assets, isLoading } = (0,useWalletAssets/* useWalletAssets */.A)();
    const value = (0,react.useMemo)(()=>{
        return (0,sum/* default */.Z)(assets.map((x)=>x.value?.usd ? Number.parseFloat(x.value.usd) : 0));
    }, [
        assets
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
        ...props,
        loading: isLoading,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
            value: value,
            formatter: formatCurrency/* formatCurrency */.x,
            options: {
                onlyRemainTwoOrZeroDecimal: true
            }
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/WalletHeader/UI.tsx












const UI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { disabled })=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        container: {
            padding: '16px',
            lineHeight: 0,
            // padding bottom space for assets tabs
            paddingBottom: !disabled ? 34 : 16,
            background: isDark ? theme.palette.maskColor.modalTitleBg : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(98, 126, 234, 0.2) 0%, rgba(59, 153, 252, 0.2) 100%)'
        },
        topbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 38,
            gap: theme.spacing(1)
        },
        action: {
            background: theme.palette.maskColor.bg,
            borderRadius: 99,
            padding: '5px 8px 5px 4px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            maxWidth: '50%',
            boxShadow: `0px 4px 6px 0px ${isDark ? 'rgba(0, 0, 0, 0.10)' : 'rgba(102, 108, 135, 0.10)'}`,
            backdropFilter: 'blur(5px)'
        },
        nickname: {
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        identifier: {
            fontSize: 10,
            color: theme.palette.maskColor.second,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            height: 12,
            width: 12,
            color: theme.palette.maskColor.second,
            cursor: 'pointer',
            marginLeft: 4
        },
        arrow: {
            fontSize: 20,
            transition: 'all 300ms',
            flexShrink: 0,
            color: theme.palette.maskColor.secondaryDark
        },
        networkSelector: {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            cursor: 'pointer',
            overflow: 'auto'
        },
        chainName: {
            flexGrow: 1,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            maxWidth: 154
        },
        connected: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: '18px',
            fontSize: 12,
            color: theme.palette.maskColor.second,
            columnGap: 4
        },
        dot: {
            display: 'inline-block',
            width: 7,
            height: 7,
            borderRadius: 99
        },
        connectedDot: {
            backgroundColor: theme.palette.maskColor.success
        },
        unconnectedDot: {
            backgroundColor: theme.palette.maskColor.third
        },
        balance: {
            fontSize: 36,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            height: 54,
            paddingTop: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(2)
        }
    };
});
const WalletHeaderUI = /*#__PURE__*/ (0,react.memo)(function WalletHeaderUI({ currentNetwork, chainId, onOpenNetworkSelector, onActionClick, wallet, disabled = false, disableCopy = false, origin }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = UI_useStyles({
        disabled
    });
    const { data: connectedWallets, isLoading } = useConnectedWallets(origin);
    const connected = connectedWallets?.has(wallet.address);
    const addressLink = entry/* ExplorerResolver */.Xz.addressLink(chainId, wallet.address);
    const networkName = currentNetwork?.name || currentNetwork?.fullName;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.topbar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.networkSelector,
                        onClick: (event)=>{
                            if (!disabled && !wallet.owner) onOpenNetworkSelector(event);
                        },
                        children: [
                            currentNetwork?.iconUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                size: 30,
                                icon: currentNetwork?.iconUrl,
                                name: currentNetwork?.name || '?'
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainIcon/* ChainIcon */.f, {
                                size: 30,
                                color: currentNetwork?.color,
                                name: currentNetwork?.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                ml: 0.5,
                                overflow: "auto",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        overflow: "auto",
                                        display: "flex",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                                title: networkName,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.chainName,
                                                    component: "div",
                                                    children: networkName
                                                })
                                            }),
                                            !disabled && !wallet.owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                                size: 20,
                                                className: classes.arrow,
                                                style: {
                                                    transform: status ? 'rotate(-180deg)' : undefined
                                                }
                                            }) : null
                                        ]
                                    }),
                                    isLoading ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProgressiveText/* ProgressiveText */.l, {
                                        className: classes.connected,
                                        loading: isLoading,
                                        skeletonWidth: 50,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: cx(classes.dot, connected ? classes.connectedDot : classes.unconnectedDot)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: t.popups_wallet_connected_status({
                                                    context: connected ? 'connected' : 'unconnected'
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.action,
                        onClick: ()=>{
                            if (!disabled) onActionClick();
                        },
                        children: [
                            wallet.owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SmartPay, {
                                size: 30
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                size: 30
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                ml: 0.5,
                                overflow: "hidden",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                        title: wallet.name,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.nickname,
                                            children: wallet.name
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.identifier,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                                address: wallet.address,
                                                formatter: formatter/* formatEthereumAddress */.j8,
                                                size: 4
                                            }),
                                            !disableCopy ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                text: wallet.address,
                                                className: classes.icon,
                                                size: 12
                                            }) : null,
                                            addressLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.icon,
                                                onClick: (event)=>event.stopPropagation(),
                                                href: addressLink,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupLink, {
                                                    size: 12
                                                })
                                            }) : null
                                        ]
                                    })
                                ]
                            }),
                            !disabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                className: classes.arrow
                            }) : null
                        ]
                    })
                ]
            }),
            !disabled ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssetsValue, {
                        className: classes.balance,
                        skeletonWidth: 100,
                        skeletonHeight: "2em"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionGroup, {
                        chainId: chainId,
                        mt: 2
                    })
                ]
            }) : null
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/WalletHeader/index.tsx










const CUSTOM_HEADER_PATTERNS = [
    `${Routes/* PopupRoutes */.mZ.AddToken}/:chainId/:assetType`,
    Routes/* PopupRoutes */.mZ.Transfer,
    Routes/* PopupRoutes */.mZ.ExportWalletPrivateKey
];
const WalletHeader = /*#__PURE__*/ (0,react.memo)(function WalletHeader() {
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const location = (0,dist/* useLocation */.TH)();
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: hasPassword } = (0,useQuery/* useQuery */.a)([
        '@@has-password'
    ], service/* default */.ZP.Wallet.hasPassword, {
        networkMode: 'always'
    });
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const origin = params.get('source');
    const currentNetwork = (0,useNetwork/* useNetwork */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const matchResetWallet = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.ResetWallet);
    const matchWallet = Routes/* PopupRoutes */.mZ.Wallet === location.pathname;
    const customHeader = CUSTOM_HEADER_PATTERNS.some((pattern)=>(0,router/* matchPath */.LX)(pattern, location.pathname));
    const matchContractInteraction = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.ContractInteraction);
    const chooseNetwork = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.ChooseNetwork);
    }, [
        modalNavigate
    ]);
    const handleActionClick = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.SwitchWallet);
    }, [
        modalNavigate
    ]);
    if (customHeader) return null;
    if (matchContractInteraction) {
        if (!wallet) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeaderUI, {
            origin: origin,
            chainId: chainId,
            currentNetwork: currentNetwork,
            disabled: true,
            disableCopy: true,
            onActionClick: handleActionClick,
            onOpenNetworkSelector: chooseNetwork,
            wallet: wallet
        });
    }
    if (!wallet || !hasPassword || matchResetWallet) return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSetupHeaderUI, {
        showBack: !!matchResetWallet
    });
    return matchWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeaderUI, {
        origin: origin,
        chainId: chainId,
        currentNetwork: currentNetwork,
        onActionClick: handleActionClick,
        onOpenNetworkSelector: chooseNetwork,
        wallet: wallet
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {
        onClose: ()=>service/* default */.ZP.Helper.removePopupWindow()
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/hooks/useWalletLockStatus.ts




function useWalletLockStatus() {
    const { data: isLocked, isLoading, error, refetch } = (0,useQuery/* useQuery */.a)([
        '@@is-locked'
    ], service/* default */.ZP.Wallet.isLocked, {
        networkMode: 'always'
    });
    (0,react.useEffect)(()=>{
        refetch();
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.walletLockStatusUpdated.on(()=>refetch());
    }, []);
    return {
        error,
        isLoading,
        isLocked
    };
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useMessages.ts
var useMessages = __webpack_require__(91784);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletGuard/useMessageGuard.ts



/**
 * Guardian for pending tasks
 */ function useMessageGuard() {
    const matchInteraction = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.ContractInteraction);
    const messages = (0,useMessages/* useMessages */.y)();
    return !matchInteraction && messages.length > 0;
}

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useHasPassword.ts
var useHasPassword = __webpack_require__(85129);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletGuard/usePaymentPasswordGuard.ts



function usePaymentPasswordGuard() {
    const { hasPassword, isLoading } = (0,useHasPassword/* useHasPassword */.T)();
    const matchSetPaymentPassword = (0,dist/* useMatch */.bS)(Routes/* PopupRoutes */.mZ.SetPaymentPassword);
    return !matchSetPaymentPassword && !hasPassword && !isLoading;
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/WalletGuard/index.tsx












const WalletGuard = /*#__PURE__*/ (0,react.memo)(function WalletGuard() {
    const wallets = (0,useWallets/* useWallets */.r)();
    const outletContext = (0,dist/* useOutletContext */.bx)();
    const location = (0,dist/* useLocation */.TH)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const { isLocked, isLoading } = useWalletLockStatus();
    const hitPaymentPasswordGuard = usePaymentPasswordGuard();
    const hitMessageGuard = useMessageGuard();
    if (!wallets.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeader, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStartUp, {})
            ]
        });
    }
    if (hitPaymentPasswordGuard) {
        params.set('from', location.pathname);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
            to: {
                pathname: Routes/* PopupRoutes */.mZ.SetPaymentPassword,
                search: params.toString()
            }
        });
    }
    if (isLocked && !isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSetupHeaderUI, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_Unlock, {})
            ]
        });
    }
    if (hitMessageGuard) return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
        to: Routes/* PopupRoutes */.mZ.ContractInteraction
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Outlet */.j3, {
                context: outletContext
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/NoWalletGuard/index.tsx




const NoWalletGuard = /*#__PURE__*/ (0,react.memo)(function NoWalletGuard() {
    const outletContext = (0,dist/* useOutletContext */.bx)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Outlet */.j3, {
                context: outletContext
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/CreateWallet/context.ts
var context = __webpack_require__(94285);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/index.tsx
















const WalletSettings = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3294), __webpack_require__.e(4824)]).then(__webpack_require__.bind(__webpack_require__, 84824)));
const CreateWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1766).then(__webpack_require__.bind(__webpack_require__, 9618)));
const DeriveWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9043)]).then(__webpack_require__.bind(__webpack_require__, 49043)));
const AddToken = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9742), __webpack_require__.e(2752), __webpack_require__.e(2435)]).then(__webpack_require__.bind(__webpack_require__, 36146)));
const GasSetting = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 80760)));
const Transfer = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17627)));
const ContactList = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25072)));
const ContractInteraction = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15610)));
const ResetWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 3088).then(__webpack_require__.bind(__webpack_require__, 34013)));
const SetPaymentPassword = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7944).then(__webpack_require__.bind(__webpack_require__, 47944)));
const ChangeOwner = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6305).then(__webpack_require__.bind(__webpack_require__, 56305)));
const Receive = /*#__PURE__*/ (0,react.lazy)(()=>Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79269)));
const ExportPrivateKey = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6629).then(__webpack_require__.bind(__webpack_require__, 76629)));
const ConnectedSites = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1299).then(__webpack_require__.bind(__webpack_require__, 81299)));
const r = (0,relativeRouteOf/* relativeRouteOf */.Y)(Routes/* PopupRoutes */.mZ.Wallet);
function Wallet() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScrollContext */.c.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* DeriveStateContext */.v.Provider, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Route */.AW, {
                            path: "/",
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletGuard, {}),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    index: true,
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssets, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.WalletSettings),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettings, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.CreateWallet),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWallet, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.DeriveWallet),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeriveWallet, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(`${Routes/* PopupRoutes */.mZ.Contacts}/:address?`),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactList, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(`${Routes/* PopupRoutes */.mZ.AddToken}/:chainId/:assetType`),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddToken, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.GasSetting),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.Transfer),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.ContractInteraction),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractInteraction, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.SelectWallet),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_SelectWallet, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.ChangeOwner),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeOwner, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.NetworkManagement),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkManagement, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.AddNetwork),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditNetwork, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(`${Routes/* PopupRoutes */.mZ.EditNetwork}/:id?`),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditNetwork, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.Receive),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Receive, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.ExportWalletPrivateKey),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExportPrivateKey, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.ConnectedSites),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedSites, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Route */.AW, {
                            path: "*",
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(NoWalletGuard, {}),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.SetPaymentPassword),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetPaymentPassword, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.TokenDetail),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_TokenDetail, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.TransactionDetail),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionDetail, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.CollectibleDetail),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleDetail, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: r(Routes/* PopupRoutes */.mZ.ResetWallet),
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResetWallet, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                    path: "*",
                                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
                                        to: Routes/* PopupRoutes */.mZ.Wallet
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
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

/***/ 28246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ CollectibleList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(35713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/descriptors.ts + 1 modules
var descriptors = __webpack_require__(3187);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleCard.tsx








const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0',
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
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%'
        },
        linkWrapper: {
            position: 'relative',
            display: 'block'
        },
        networkIcon: {
            position: 'absolute',
            top: 6,
            left: 6
        }
    }));
const CollectibleCard = /*#__PURE__*/ (0,react.memo)(function CollectibleCard({ className, asset, pluginID, disableLink, showNetworkIcon, ...rest }) {
    const { classes, cx } = useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(pluginID);
    const networkIcon = (0,react.useMemo)(()=>{
        // None is better than incorrect.
        if (!pluginID) return;
        if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return descriptors/* NETWORK_DESCRIPTORS */.qQ.find((network)=>network?.chainId === asset.chainId)?.icon;
        }
        return networkDescriptor?.icon;
    }, [
        asset.chainId,
        pluginID,
        networkDescriptor?.icon
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.blocker
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                            url: asset.metadata?.mediaURL || asset.metadata?.imageURL,
                            classes: {
                                fallbackImage: classes.fallbackImage
                            }
                        }),
                        networkIcon && showNetworkIcon !== false ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                            icon: networkIcon,
                            size: 24,
                            className: classes.networkIcon
                        }) : null
                    ]
                })
            })
        ]
    });
    if (disableLink) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cx(classes.linkWrapper, className),
        children: content
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        target: "_blank",
        rel: "noopener noreferrer",
        href: asset.link ?? Others.explorerResolver.nonFungibleTokenLink(asset.chainId, asset.address, asset.tokenId),
        className: cx(classes.linkWrapper, className),
        ...rest,
        children: content
    });
});
CollectibleCard.displayName = 'CollectibleCard';

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleItem.tsx






const CollectibleItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 0,
            background: theme.palette.maskColor.bg,
            borderRadius: theme.spacing(1)
        },
        inactive: {
            opacity: 0.5
        },
        selectable: {
            cursor: 'pointer'
        },
        collectibleCard: {
            width: '100%',
            height: '100%',
            aspectRatio: '1/1',
            borderRadius: theme.spacing(1),
            overflow: 'hidden'
        },
        description: {
            alignSelf: 'stretch',
            borderRadius: theme.spacing(0, 0, 1, 1)
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: '36px',
            minHeight: '1em',
            textIndent: '8px'
        },
        select: {
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 6,
            zIndex: 9
        }
    }));
// TODO lazy render in big list.
const CollectibleItem = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)(function CollectibleItem(props, ref) {
    const { provider, asset, pluginID, checked, inactive, selectable, multiple, value, onChange, className, showNetworkIcon, disableLink, ...rest } = props;
    const { classes, cx } = CollectibleItem_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const uiTokenId = Others.formatTokenId(asset.tokenId, 4);
    const SelectableButton = selectable && multiple ? Checkbox/* default */.Z : Radio/* default */.Z;
    const scrollIntoViewRef = (node)=>{
        if (!checked || multiple || !node) return;
        node.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    };
    const forkedRef = (0,useForkRef/* default */.Z)(ref, scrollIntoViewRef);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.card, className, {
            [classes.inactive]: inactive,
            [classes.selectable]: selectable
        }),
        onClick: ()=>{
            if (selectable) {
                onChange?.({
                    checked: !checked,
                    value: value
                });
            }
        },
        ...rest,
        ref: forkedRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
                className: classes.collectibleCard,
                asset: asset,
                provider: provider,
                pluginID: pluginID,
                showNetworkIcon: showNetworkIcon,
                disableLink: disableLink || selectable
            }),
            asset.metadata?.name || uiTokenId ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    variant: "body2",
                    children: asset.metadata?.name || uiTokenId
                })
            }) : null,
            checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectableButton, {
                className: classes.select,
                value: value,
                checked: true
            }) : null
        ]
    });
}));
function CollectibleItemSkeleton(props) {
    const { classes, cx } = CollectibleItem_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...props,
        className: cx(classes.card, props.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.collectibleCard,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "rectangular",
                    height: "100%"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    variant: "body2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "text",
                        height: "100%"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/LoadingSkeleton.tsx



function LoadingSkeleton({ className }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: className,
        children: (0,range/* default */.Z)(7).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItemSkeleton, {}, i))
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleList.tsx










const CollectibleList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { columns = 3, gap = 2 })=>{
    const gapIsNumber = typeof gap === 'number';
    return {
        root: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridGap: gapIsNumber ? theme.spacing(gap) : gap,
            padding: gapIsNumber ? theme.spacing(0, gap, 0) : `0 ${gap} 0`,
            boxSizing: 'border-box'
        },
        collectibleItem: {
            overflowX: 'hidden'
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 260
        },
        list: {
            overflow: 'auto',
            position: 'relative'
        }
    };
});
/**
     * Collectible key, in format of `${contractAddress}_${tokenId}`.
     * You can also customize, but don't forget pass a customized getCollectibleKey as well.
     * */ const getKey = (collectible)=>{
    return `${collectible.address}_${collectible.tokenId}`;
};
const CollectibleList = /*#__PURE__*/ (0,react.memo)(function CollectibleList(props) {
    const { pluginID, collectibles, columns, gap, loading, error, selectable, multiple, disableLink, showNetworkIcon, value, retry, getCollectibleKey = getKey, onChange, className, ...rest } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = CollectibleList_useStyles({
        columns,
        gap
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const availableKeys = (0,react.useMemo)(()=>collectibles.map(getCollectibleKey), [
        collectibles
    ]);
    const handleItemChange = (0,react.useCallback)((event)=>{
        if (multiple) {
            const newValue = availableKeys.filter((x)=>{
                return x === event.value ? event.checked : value?.includes(x);
            });
            onChange?.(newValue);
        } else {
            onChange?.(event.checked ? event.value : null);
        }
    }, [
        multiple,
        availableKeys,
        value
    ]);
    const listRef = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: cx(classes.list, className),
        ...rest,
        ref: listRef,
        children: loading && collectibles.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSkeleton, {
            className: classes.root
        }) : error || collectibles.length === 0 && !loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
            className: classes.text,
            message: t.no_collectible_found(),
            onRetry: retry
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.root,
            children: collectibles.map((token, index)=>{
                const name = token.metadata?.name;
                const uiTokenId = Others.formatTokenId(token.tokenId, 4) ?? `#${token.tokenId}`;
                const title = `${name || token.collection?.name || token.contract?.name} ${uiTokenId}`;
                const collectibleKey = getCollectibleKey(token);
                const checked = selectable ? value?.includes(collectibleKey) : false;
                const inactive = value ? !!value?.length && !checked : false;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                    title: title,
                    placement: "top",
                    disableInteractive: true,
                    PopperProps: {
                        placement: 'top',
                        popperOptions: {
                            strategy: 'absolute'
                        },
                        modifiers: [
                            {
                                name: 'preventOverflow',
                                options: {
                                    rootBoundary: listRef.current,
                                    boundary: listRef.current
                                }
                            }
                        ]
                    },
                    arrow: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem, {
                        className: classes.collectibleItem,
                        asset: token,
                        provider: specs/* SourceType */.PO.OpenSea,
                        pluginID: pluginID,
                        selectable: selectable,
                        multiple: multiple,
                        disableLink: disableLink,
                        showNetworkIcon: showNetworkIcon,
                        checked: checked,
                        inactive: inactive,
                        value: collectibleKey,
                        onChange: handleItemChange
                    })
                }, index);
            })
        })
    });
});


/***/ }),

/***/ 85080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ NFTFallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);

const NFTFallbackImage = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 126 126",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "url(#FallbackImage_svg__a)",
            d: "M0 .191h126v126H0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "url(#FallbackImage_svg__b)",
            d: "M0 .191h126v126H0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            width: "30.238",
            height: "30",
            x: "46.869",
            y: "46.691",
            fill: "url(#FallbackImage_svg__c)",
            rx: "15"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            width: "30.238",
            height: "30",
            x: "46.869",
            y: "46.691",
            fill: "url(#FallbackImage_svg__d)",
            rx: "15"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M70.75 58.288v4.861H55.518a6.62 6.62 0 0 0 6.459 5.153 6.622 6.622 0 0 0 5.942-3.694h2.83v4.083c0 .966-.784 1.75-1.752 1.75h-14.02a1.751 1.751 0 0 1-1.752-1.75V58.288H70.75Zm-4.511 6.32a5.156 5.156 0 0 1-4.263 2.247c-1.77 0-3.332-.89-4.262-2.247h8.525Zm-8-5.153a2.725 2.725 0 0 0-2.698 2.333h1.494a1.266 1.266 0 0 1 2.409 0h1.494a2.726 2.726 0 0 0-2.699-2.333Zm7.497 0a2.726 2.726 0 0 0-2.699 2.333h1.494a1.266 1.266 0 0 1 2.41 0h1.493a2.726 2.726 0 0 0-2.698-2.333Zm3.261-6.514c.968 0 1.753.783 1.753 1.75v2.139H53.225v-2.14c0-.966.785-1.75 1.753-1.75h14.02Z",
            clipRule: "evenodd"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__a",
                    x1: "0",
                    x2: "126",
                    y1: "63.191",
                    y2: "63.191",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#627EEA",
                            stopOpacity: ".2"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__b",
                    x1: "63",
                    x2: "63",
                    y1: ".191",
                    y2: "126.191",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#fff",
                            stopOpacity: ".9"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__c",
                    x1: "46.869",
                    x2: "77.107",
                    y1: "61.691",
                    y2: "61.691",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: ".01",
                            stopColor: "#6298EA",
                            stopOpacity: ".2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#627EEA",
                            stopOpacity: ".2"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "FallbackImage_svg__d",
                    x1: "61.988",
                    x2: "61.988",
                    y1: "46.691",
                    y2: "76.691",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#fff",
                            stopOpacity: ".9"
                        })
                    ]
                })
            ]
        })
    ]
});


/***/ }),

/***/ 64472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ RestorableScrollContext),
/* harmony export */   g: () => (/* binding */ RestorableScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54225);


function useScrollState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
}
const RestorableScrollContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .createContainer */ .f)(useScrollState);
RestorableScrollContext.Provider.displayName = 'RestorableScrollProvider';
// eslint-disable-next-line @typescript-eslint/ban-types
const RestorableScroll = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function RestorableScroll({ scrollKey, targetRef, children }) {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const mapRef = RestorableScrollContext.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        const target = targetRef?.current || containerRef.current;
        if (!target) return;
        target.scrollTop = mapRef.current.get(scrollKey) || 0;
        return ()=>{
            mapRef.current.set(scrollKey, target.scrollTop);
        };
    }, [
        scrollKey
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children, {
        ...children.props,
        ref: targetRef ? undefined : containerRef
    });
});


/***/ }),

/***/ 29063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useAddressType)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


function useAddressType(pluginID, address, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return Web3.getAddressType(address, options);
    }, [
        address,
        Web3,
        options?.chainId
    ]);
}


/***/ }),

/***/ 80675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useLookupAddress)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);




function useLookupAddress(pluginID, domain, expectedChainId) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    const { NameService } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!domain || !Others.isValidDomain(domain) || !NameService) return;
        return NameService.lookup?.(domain);
    }, [
        chainId,
        domain,
        NameService,
        Others
    ]);
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

/***/ 61918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useERC20TokenAllowance(address, spender, options) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'erc20-allowance',
            address,
            account,
            spender
        ],
        queryFn: async ()=>{
            if (!account || !address || !spender) return '0';
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Contract */ .CH.getERC20Contract(address, {
                chainId
            })?.methods.allowance(account, spender).call({
                from: account
            });
        },
        refetchInterval: 30 * 1000
    });
}


/***/ }),

/***/ 92263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ addGasMargin)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);

function addGasMargin(value, scale = 3000) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(10000).plus(scale)).dividedToIntegerBy(10000);
}


/***/ }),

/***/ 37603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ LoadingButton_LoadingButton)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(38832);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useId.js
var useId = __webpack_require__(48845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(64696);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useThemeProps.js
var useThemeProps = __webpack_require__(15973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(83018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js


const _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];












const useUtilityClasses = ownerState => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0,capitalize/* default */.Z)(loadingPosition)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getLoadingButtonUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
}; // TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core


const rootShouldForwardProp = prop => prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = (0,styled/* default */.ZP)(Button/* default */.Z, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.Z)({
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${LoadingButton_loadingButtonClasses.loading}`]: {
    color: 'transparent'
  }
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
const LoadingButtonLoadingIndicator = (0,styled/* default */.ZP)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0,capitalize/* default */.Z)(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, ownerState.loadingPosition === 'start' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  left: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'start' && ownerState.variant === 'text' && {
  left: 6
}, ownerState.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === 'end' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  right: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'end' && ownerState.variant === 'text' && {
  right: 6
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  position: 'relative',
  left: -10
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  position: 'relative',
  right: -10
}));
const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLoadingButton'
  });

  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = 'center',
    variant = 'text'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const id = (0,useId/* default */.Z)(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState: ownerState,
    children: loadingIndicator
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LoadingButtonRoot, (0,esm_extends/* default */.Z)({
    disabled: disabled || loading,
    id: id,
    ref: ref
  }, other, {
    variant: variant,
    classes: classes,
    ownerState: ownerState,
    children: [ownerState.loadingPosition === 'end' ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === 'end' ? loadingButtonLoadingIndicator : children]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LoadingButton_LoadingButton = (LoadingButton);

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


/***/ }),

/***/ 22144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useMutation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22549);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41026);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65295);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9599);
'use client';






function useMutation(arg1, arg2, arg3) {
  const options = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__/* .parseMutationArgs */ .lV)(arg1, arg2, arg3);
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useQueryClient */ .NL)({
    context: options.context
  });
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_3__/* .MutationObserver */ .X(queryClient, options));
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_5__/* .notifyManager */ .V.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  const mutate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((variables, mutateOptions) => {
    observer.mutate(variables, mutateOptions).catch(noop);
  }, [observer]);

  if (result.error && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .shouldThrowError */ .L)(observer.options.useErrorBoundary, [result.error])) {
    throw result.error;
  }

  return { ...result,
    mutate,
    mutateAsync: result.mutate
  };
} // eslint-disable-next-line @typescript-eslint/no-empty-function

function noop() {}


//# sourceMappingURL=useMutation.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.2666.js.map