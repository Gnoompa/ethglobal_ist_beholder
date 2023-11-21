"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8125],{

/***/ 39907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useActivatedPlugin)
/* harmony export */ });
/* harmony import */ var _manager_extension_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86766);
/* harmony import */ var _manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94685);


function useActivatedPlugin(pluginID, minimalModeEqualsTo) {
    const pluginSiteAdaptor = (0,_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_0__/* .useActivatedPluginSiteAdaptor */ .o7)(pluginID, minimalModeEqualsTo);
    const pluginExtensionPage = (0,_manager_extension_page_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginExtensionPage */ .d2)(pluginID);
    return pluginSiteAdaptor ?? pluginExtensionPage ?? null;
}


/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ReloadStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);





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
            fontWeight: 700,
            lineHeight: '36px'
        },
        button: {
            marginTop: theme.spacing(1.5),
            fontSize: '12px',
            fontWeight: 700,
            minWidth: theme.spacing(11),
            height: theme.spacing(4)
        }
    }));
const ReloadStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ReloadStatus({ className, children, message, actionLabel, onRetry, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.text,
                children: message ?? t.load_failed()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.button,
                onClick: ()=>onRetry?.(),
                variant: "roundedContained",
                size: "medium",
                children: actionLabel ?? t.load_retry()
            })
        ]
    });
});


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

/***/ 58752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useAvailableBalance)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17735);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10149);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5480);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9443);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88572);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49113);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65327);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41487);








function useAvailableBalance(pluginID, address, gasOption, options) {
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)(options);
    const { value: nativeTokenBalance = '0' } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNativeTokenBalance */ .h)(pluginID, options);
    const maskTokenAddress = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useMaskTokenAddress */ .z)(pluginID, options);
    const { data: maskBalance = '0', isLoading: isLoadingMaskBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useFungibleTokenBalance */ .V)(undefined, maskTokenAddress);
    const { data: tokenBalance = '0', isLoading: isLoadingTokenBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useFungibleTokenBalance */ .V)(pluginID, address, {
        ...options,
        chainId
    });
    // #region paymaster ratio
    const { value: currencyRatio, loading } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>{
        const chainId = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .SmartPayBundler */ .Pp.getSupportedChainId();
        const depositPaymaster = new _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .DepositPaymaster */ .hv(chainId);
        const ratio = await depositPaymaster.getRatio();
        return ratio;
    }, []);
    // #endregion
    const gasFee = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!gasOption?.gas || pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM) return _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .ZERO */ .xE;
        const result = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .GasEditor */ .e.fromConfig(chainId, gasOption).getGasFee(gasOption.gas);
        if (!gasOption.gasCurrency || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .isNativeTokenAddress */ .qw)(gasOption.gasCurrency)) return result;
        if (!currencyRatio) return _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .ZERO */ .xE;
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_1__/* .BigNumber */ .O((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .toFixed */ .FH)(result.multipliedBy(currencyRatio), 0));
    }, [
        gasOption,
        chainId,
        pluginID
    ]);
    const isGasFeeGreaterThanOneETH = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!gasOption?.gas || pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM) return false;
        return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .GasEditor */ .e.fromConfig(chainId, gasOption).getGasFee(gasOption.gas).gte((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .formatEtherToWei */ .$u)(1));
    }, [
        gasOption,
        chainId,
        pluginID
    ]);
    const isAvailableBalance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isSameAddress */ .W)(address, gasOption?.gasCurrency) || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .isNativeTokenAddress */ .qw)(address) || pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM, [
        address,
        gasOption?.gasCurrency,
        pluginID
    ]);
    const isGasSufficient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM) return true;
        if (!gasOption?.gasCurrency || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .isNativeTokenAddress */ .qw)(gasOption.gasCurrency)) return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .isGreaterThan */ .T1)(nativeTokenBalance, gasFee);
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .isGreaterThan */ .T1)(maskBalance, gasFee);
    }, [
        gasOption?.gasCurrency,
        nativeTokenBalance,
        maskBalance,
        gasFee,
        pluginID
    ]);
    const balance = isAvailableBalance && pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM ? bignumber_js__WEBPACK_IMPORTED_MODULE_1__/* .BigNumber */ .O.max(new bignumber_js__WEBPACK_IMPORTED_MODULE_1__/* .BigNumber */ .O(tokenBalance).minus(gasFee), 0).toString() : tokenBalance;
    return {
        isAvailableBalance,
        isGasSufficient,
        isGasFeeGreaterThanOneETH,
        gasFee,
        balance,
        isLoading: isLoadingMaskBalance || isLoadingTokenBalance || loading
    };
}


/***/ }),

/***/ 6569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useGasCurrencyMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72845);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27043);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23869);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6764);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24500);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95325);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24637);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9443);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61918);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33026);
/* harmony import */ var _useMenu_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92935);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95621);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        paper: {
            minWidth: 240,
            background: theme.palette.maskColor.bottom,
            borderRadius: 16,
            boxShadow: theme.palette.maskColor.bottomBg,
            padding: theme.spacing(0.5)
        },
        item: {
            display: 'flex',
            height: 46,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 8,
            padding: theme.spacing(1)
        },
        token: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4,
            fontSize: 16,
            fontWeight: 700,
            lineHeight: '20px'
        },
        radio: {
            color: theme.palette.mode === 'dark' ? (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* .alpha */ .Fq)(theme.palette.maskColor.line, 0.43) : theme.palette.maskColor.line
        }
    }));
function useGasCurrencyMenu(pluginId, onCurrencyChange, selectedAddress, handleUnlock) {
    const sharedI18N = (0,_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    const { classes } = useStyles();
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)();
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { data: nativeToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useNativeToken */ .u)(pluginId);
    const maskAddress = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useMaskTokenAddress */ .z)(pluginId);
    const { data: maskToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useFungibleToken */ .c)(pluginId, maskAddress);
    const { PAYMASTER_MASK_CONTRACT_ADDRESS } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useSmartPayConstants */ .Fd)(chainId);
    const { data: allowance = '0' } = (0,_masknet_web3_hooks_evm__WEBPACK_IMPORTED_MODULE_10__/* .useERC20TokenAllowance */ .n)(maskAddress, PAYMASTER_MASK_CONTRACT_ADDRESS);
    const availableBalanceTooLow = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .isLessThan */ .FI)((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .formatBalance */ .a)(allowance, maskToken?.decimals), 0.1);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((address)=>{
        setCurrent(address);
        onCurrencyChange?.(address);
    }, [
        onCurrencyChange
    ]);
    const selected = selectedAddress || current || nativeToken?.address;
    return (0,_useMenu_js__WEBPACK_IMPORTED_MODULE_13__/* .useMenuConfig */ ._)((0,lodash_es__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)([
        nativeToken ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            className: classes.item,
            disableRipple: true,
            onClick: ()=>handleChange(nativeToken.address),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.token,
                    component: "div",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_17__/* .TokenIcon */ .T, {
                            ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(nativeToken, 'chainId', 'address', 'symbol'),
                            size: 30
                        }),
                        nativeToken.symbol
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_19__/* .RadioIndicator */ .F, {
                    size: 20,
                    checked: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_20__/* .isSameAddress */ .W)(selected, nativeToken.address),
                    className: classes.radio
                })
            ]
        }) : null,
        maskToken ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            className: classes.item,
            disableRipple: true,
            onClick: !availableBalanceTooLow ? ()=>handleChange(maskToken.address) : lodash_es__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.token,
                    component: "div",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_17__/* .TokenIcon */ .T, {
                            ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(maskToken, 'chainId', 'address', 'symbol'),
                            size: 30
                        }),
                        maskToken.symbol
                    ]
                }),
                availableBalanceTooLow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    variant: "roundedContained",
                    onClick: handleUnlock,
                    size: "small",
                    children: sharedI18N.unlock()
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_19__/* .RadioIndicator */ .F, {
                    size: 20,
                    className: classes.radio,
                    checked: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_20__/* .isSameAddress */ .W)(selected, maskAddress)
                })
            ]
        }) : null
    ]), {
        classes: {
            paper: classes.paper
        },
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    });
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


/***/ }),

/***/ 9443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ useMaskTokenAddress)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useMaskTokenAddress(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)();
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return Others?.getMaskTokenAddress?.(options?.chainId ?? chainId);
}


/***/ }),

/***/ 39256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 98862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useNonFungibleAsset)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);




function useNonFungibleAsset(pluginID, address, id, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        enabled: !!address,
        queryKey: [
            'non-fungible-asset',
            pluginID,
            address,
            id,
            account,
            options
        ],
        queryFn: async ()=>{
            if (!address || !id && pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) return null;
            return Hub.getNonFungibleAsset(address, id ?? '');
        }
    });
}


/***/ }),

/***/ 49113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GasEditor)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84976);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);
/* harmony import */ var _helpers_formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41487);
/* harmony import */ var _constants_descriptors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3187);




class GasEditor {
    chainId;
    config;
    constructor(chainId, config){
        this.chainId = chainId;
        this.config = config;
    }
    get isEIP1559() {
        return !!_constants_descriptors_js__WEBPACK_IMPORTED_MODULE_1__/* .CHAIN_DESCRIPTORS */ .Q_.find((x)=>x.chainId === this.chainId)?.features?.includes('EIP1559');
    }
    get EIP1559GasOptionConfig() {
        return this.config;
    }
    get priorEIP1559GasOptionConfig() {
        return this.config;
    }
    getGasFee(gas) {
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .multipliedBy */ .$q)(this.getGasPrice(), gas);
    }
    getGasFeeInUSD(gas, price) {
        return (0,_helpers_formatter_js__WEBPACK_IMPORTED_MODULE_3__/* .formatWeiToEther */ .yp)(this.getGasFee(gas)).multipliedBy(price);
    }
    getGasPrice() {
        return this.EIP1559GasOptionConfig.maxFeePerGas || this.priorEIP1559GasOptionConfig.gasPrice || '0';
    }
    getGasConfig(fallback) {
        if (this.isEIP1559) {
            const config = fallback;
            return {
                gasPrice: undefined,
                maxFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.maxFeePerGas) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(config?.maxFeePerGas || '0'),
                maxPriorityFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.maxPriorityFeePerGas) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(config?.maxPriorityFeePerGas || '1'),
                gasCurrency: this.EIP1559GasOptionConfig?.gasCurrency || fallback?.gasCurrency,
                gas: this.EIP1559GasOptionConfig.gas && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(this.EIP1559GasOptionConfig.gas) ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.gas) : undefined,
                gasOptionType: this.config.gasOptionType ?? config?.gasOptionType
            };
        }
        const priorConfig = fallback;
        return {
            gasPrice: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.priorEIP1559GasOptionConfig.gasPrice) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(priorConfig?.gasPrice || '0'),
            maxFeePerGas: undefined,
            maxPriorityFeePerGas: undefined,
            gasOptionType: this.config.gasOptionType ?? priorConfig?.gasOptionType
        };
    }
    static fromConfig(chainId, gasConfig = {}) {
        return new GasEditor(chainId, gasConfig);
    }
    static fromGasPrice(chainId, gasPrice = '0') {
        return new GasEditor(chainId, {
            gasPrice,
            maxFeePerGas: gasPrice,
            maxPriorityFeePerGas: gasPrice
        });
    }
    static fromTransaction(chainId, transaction) {
        return new GasEditor(chainId, {
            gas: transaction?.gas,
            gasPrice: transaction?.gasPrice,
            maxFeePerGas: transaction?.maxFeePerGas,
            maxPriorityFeePerGas: transaction?.maxPriorityFeePerGas
        });
    }
    static fromGasOption(chainId, gasOption) {
        return new GasEditor(chainId, {
            gasPrice: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxFeePerGas ?? 0, 0),
            maxFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxFeePerGas ?? 0, 0),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxPriorityFeePerGas ?? 0, 0)
        });
    }
    static fromGasOptions(chainId, gasOptions, gasOptionType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .GasOptionType */ .Qd.NORMAL) {
        return new GasEditor(chainId, {
            gasPrice: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxFeePerGas ?? 0, 0),
            maxFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxFeePerGas ?? 0, 0),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxPriorityFeePerGas ?? 0, 0)
        });
    }
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

/***/ }),

/***/ 47642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIntersectionObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const DEFAULT_THRESHOLD = [0];
const DEFAULT_ROOT_MARGIN = '0px';
const observers = new Map();
const getObserverEntry = (options) => {
    const root = options.root ?? document;
    let rootObservers = observers.get(root);
    if (!rootObservers) {
        rootObservers = new Map();
        observers.set(root, rootObservers);
    }
    const opt = JSON.stringify([options.rootMargin, options.threshold]);
    let entry = rootObservers.get(opt);
    if (!entry) {
        const callbacks = new Map();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => callbacks.get(e.target)?.forEach((cb) => setTimeout(() => {
                cb(e);
            }, 0)));
        }, options);
        entry = {
            observer,
            observe(target, callback) {
                let cbs = callbacks.get(target);
                if (!cbs) {
                    // If target has no observers yet - register it
                    cbs = new Set();
                    callbacks.set(target, cbs);
                    observer.observe(target);
                }
                // As Set is duplicate-safe - simply add callback on each call
                cbs.add(callback);
            },
            unobserve(target, callback) {
                const cbs = callbacks.get(target);
                // Else branch should never occur in case of normal execution
                // because callbacks map is hidden in closure - it is impossible to
                // simulate situation with non-existent `cbs` Set
                /* istanbul ignore else */
                if (cbs) {
                    // Remove current observer
                    cbs.delete(callback);
                    if (!cbs.size) {
                        // If no observers left unregister target completely
                        callbacks.delete(target);
                        observer.unobserve(target);
                        // If not tracked elements left - disconnect observer
                        if (!callbacks.size) {
                            observer.disconnect();
                            rootObservers.delete(opt);
                            if (!rootObservers.size) {
                                observers.delete(root);
                            }
                        }
                    }
                }
            },
        };
        rootObservers.set(opt, entry);
    }
    return entry;
};
/**
 * Tracks intersection of a target element with an ancestor element or with a
 * top-level document's viewport.
 *
 * @param target React reference or Element to track.
 * @param options Like `IntersectionObserver` options but `root` can also be
 * react reference
 */
function useIntersectionObserver(target, { threshold = DEFAULT_THRESHOLD, root: r, rootMargin = DEFAULT_ROOT_MARGIN, } = {}) {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const tgt = target && 'current' in target ? target.current : target;
        if (!tgt)
            return;
        let subscribed = true;
        const observerEntry = getObserverEntry({
            root: r && 'current' in r ? r.current : r,
            rootMargin,
            threshold,
        });
        const handler = (entry) => {
            // It is reinsurance for the highly asynchronous invocations, almost
            // impossible to achieve in tests, thus excluding from LOC
            /* istanbul ignore else */
            if (subscribed) {
                setState(entry);
            }
        };
        observerEntry.observe(tgt, handler);
        return () => {
            subscribed = false;
            observerEntry.unobserve(tgt, handler);
        };
    }, [target, r, rootMargin, ...threshold]);
    return state;
}


/***/ })

}]);
//# sourceMappingURL=chunk.8125.js.map