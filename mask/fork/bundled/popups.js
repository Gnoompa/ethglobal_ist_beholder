/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sy: () => (/* binding */ ActionModalContainer),
/* harmony export */   ao: () => (/* binding */ useModalNavigate),
/* harmony export */   mO: () => (/* binding */ useActionModal)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43204);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99116);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54225);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78757);





function useModal() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const openModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setOpen(true), []);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .s0)();
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const leavingScreen = theme.transitions.duration.leavingScreen;
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
        clearTimeout(timerRef.current);
        // Wait for animation ending
        timerRef.current = setTimeout(navigate, leavingScreen, -1);
    }, [
        leavingScreen
    ]);
    return {
        open,
        /** open the drawer */ openModal,
        closeModal
    };
}
/** A Context to control the drawer inside ActionModal,
/* to add duration for the drawer exit-animation before route exiting
 */ const ActionModalContainer = (0,unstated_next__WEBPACK_IMPORTED_MODULE_4__/* .createContainer */ .f)(useModal);
/**
 * To close a modal with animation, call `closeModal` instead of `navigate(-1)`
 */ function useActionModal() {
    return ActionModalContainer.useContainer();
}
/**
 * To open a modal, should navigate with setting state `{ mainLocation: location }`
 */ function useModalNavigate() {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .TH)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .s0)();
    const openModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((path, params, options)=>{
        navigate((0,urlcat__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(path, params ?? {}), {
            ...options,
            state: {
                ...options?.state,
                mainLocation: location.state?.mainLocation ?? location
            }
        });
    }, [
        location,
        navigate
    ]);
    return openModal;
}


/***/ }),

/***/ 86329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ConnectSocialAccounts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16044);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52033);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81878);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(2)
        },
        item: {
            background: theme.palette.maskColor.bg,
            padding: theme.spacing(1.5),
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        networkIcon: {
            width: 24,
            height: 24
        },
        network: {
            marginLeft: 8,
            color: theme.palette.maskColor.second,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700
        }
    }));
const ConnectSocialAccounts = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ConnectSocialAccounts({ networks, onConnect }) {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.container,
        children: networks.map((networkIdentifier)=>{
            const Icon = _masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .SOCIAL_MEDIA_ROUND_ICON_MAPPING */ .hA[networkIdentifier];
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.item,
                onClick: ()=>onConnect(networkIdentifier),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.networkIcon,
                        children: Icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                            size: 24,
                            style: {
                                filter: _constants_js__WEBPACK_IMPORTED_MODULE_5__/* .SOCIAL_MEDIA_ICON_FILTER_COLOR */ .VB[networkIdentifier],
                                backdropFilter: 'blur(8px)',
                                borderRadius: 99
                            }
                        }) : null
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: classes.network,
                        children: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .SOCIAL_MEDIA_NAME */ .OZ[networkIdentifier]
                    })
                ]
            }, networkIdentifier);
        })
    });
});


/***/ }),

/***/ 35396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ LoadingPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52478);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        gap: 12
    }
});
const LoadingPlaceholder = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function LoadingPlaceholder({ title, ...rest }) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
        ...rest,
        className: cx(classes.container, rest.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .LoadingStatus */ .Q, {
            iconSize: 24,
            children: title
        })
    });
});


/***/ }),

/***/ 51093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PasswordField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88012);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60317);
/* harmony import */ var _StyledInput_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79673);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8311);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function PasswordField({ show = true, ...rest }, ref) {
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledInput_index_js__WEBPACK_IMPORTED_MODULE_2__/* .StyledInput */ .F, {
        ...rest,
        type: showPassword ? 'text' : 'password',
        ref: ref,
        InputProps: {
            ...rest.InputProps,
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: show ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword),
                    onMouseDown: (event)=>event.preventDefault(),
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.EyeOff, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.Eye, {})
                }) : undefined
            })
        }
    });
}));


/***/ }),

/***/ 80264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ PersonaAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()(()=>({
        root: {
            borderRadius: '50%'
        }
    }));
const PersonaAvatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PersonaAvatar({ size, hasProofs, avatar, ...rest }) {
    const { classes } = useStyles(undefined, {
        props: rest
    });
    if (hasProofs && !avatar) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__.NextIdAvatar, {
        size: size,
        className: classes.root
    });
    if (avatar) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        src: avatar,
        style: {
            width: size,
            height: size
        },
        className: classes.root
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__.MenuPersonasActive, {
        size: size,
        className: classes.root
    });
});


/***/ }),

/***/ 99730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ PersonaPublicKey)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98662);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67101);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { iconSize })=>({
        text: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '16px',
            color: theme.palette.maskColor.third,
            display: 'flex',
            columnGap: 2,
            alignItems: 'center'
        },
        icon: {
            width: iconSize,
            height: iconSize,
            fontSize: iconSize,
            lineHeight: `${iconSize}px`,
            color: theme.palette.maskColor.third
        }
    }));
const PersonaPublicKey = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PersonaPublicKey({ rawPublicKey, publicHexString, iconSize, ...rest }) {
    const { classes } = useStyles({
        iconSize
    }, {
        props: rest
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.text,
        children: [
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .formatPersonaFingerprint */ .Nb)(rawPublicKey, 4),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_5__/* .CopyButton */ .q, {
                text: rawPublicKey,
                className: classes.icon,
                size: iconSize
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                underline: "none",
                target: "_blank",
                rel: "noopener noreferrer",
                href: `https://web3.bio/${publicHexString}`,
                className: classes.icon,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.LinkOut, {
                    size: iconSize
                })
            })
        ]
    });
});


/***/ }),

/***/ 83303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ SelectProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99116);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43270);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78757);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77953);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24770);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41238);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4643);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5130);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16044);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 16
        },
        providerItem: {
            cursor: 'pointer',
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            padding: theme.spacing(1.5)
        },
        providerIcon: {
            width: 36,
            height: 36
        },
        providerName: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        }
    }));
const SelectProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function SelectProvider() {
    const { classes } = useStyles();
    const wallets = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWallets */ .r)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .s0)();
    const [params] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .useSearchParams */ .lr)();
    const onlyMask = params.get('onlyMask');
    const providers = (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .getRegisteredWeb3Providers */ .i8)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    const modalNavigate = (0,_index_js__WEBPACK_IMPORTED_MODULE_9__/* .useModalNavigate */ .ao)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (providerType)=>{
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ProviderType */ .lP.MaskWallet) {
            const hasWallets = wallets.filter((x)=>!x.owner).length;
            navigate(hasWallets ? (0,urlcat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupRoutes */ .mZ.SelectWallet, {
                setNFTAvatar: onlyMask ? true : undefined,
                verifyWallet: !onlyMask ? true : undefined,
                chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ChainId */ .a_.Mainnet
            }) : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupRoutes */ .mZ.Wallet);
            return;
        } else if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ProviderType */ .lP.WalletConnect) {
            const account = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_3__/* .Web3 */ .Bv.connect({
                providerType
            });
            // wallet connect has been connected
            if (account) {
                navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupRoutes */ .mZ.ConnectWallet);
                return;
            }
        } else {
            const currentPopupWindowId = await _services__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP.Helper.queryCurrentPopupWindowId();
            if (currentPopupWindowId) {
                modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupModalRoutes */ .cY.ConnectProvider, {
                    providerType
                }, {
                    replace: true
                });
                return;
            }
            await _services__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP.Helper.openPopupWindow(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupRoutes */ .mZ.Personas, {
                providerType,
                from: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .PopupModalRoutes */ .cY.SelectProvider,
                tab: _masknet_shared__WEBPACK_IMPORTED_MODULE_13__/* .PopupHomeTabType */ .$J.ConnectedWallets
            }, true);
            return;
        }
    }, [
        wallets,
        onlyMask
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        className: classes.container,
        children: providers.filter((x)=>{
            if (onlyMask) {
                return x.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ProviderType */ .lP.MaskWallet || x.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ProviderType */ .lP.WalletConnect;
            }
            return (x.enableRequirements?.supportedExtensionSites ?? []).includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .ExtensionSite */ .v.Popup);
        }).map((provider)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.providerItem,
                onClick: ()=>onClick(provider.type),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        src: provider.icon,
                        className: classes.providerIcon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: classes.providerName,
                        children: provider.name
                    })
                ]
            }, provider.ID);
        })
    });
});


/***/ }),

/***/ 79673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76550);



const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function StyledInput(props, ref) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        fullWidth: true,
        inputRef: ref,
        variant: "standard",
        autoComplete: "off",
        inputProps: {
            'aria-autocomplete': 'none',
            ...props.inputProps
        },
        InputProps: {
            ...props.InputProps,
            disableUnderline: true
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginTop: 12
            }
        }
    });
}));


/***/ }),

/***/ 79798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ TokenPicker)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SelectNetworkSidebar/index.tsx
var SelectNetworkSidebar = __webpack_require__(65333);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleAssets.ts
var useFungibleAssets = __webpack_require__(35681);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ProgressiveText/index.tsx
var ProgressiveText = __webpack_require__(5393);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(35713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/mask/shared/helpers/formatTokenBalance.ts
var formatTokenBalance = __webpack_require__(33348);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useEverSeen.ts
var useEverSeen = __webpack_require__(83220);
;// CONCATENATED MODULE: ./packages/mask/popups/components/TokenPicker/TokenItem.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        item: {
            padding: theme.spacing(1, 1.5),
            boxSizing: 'border-box',
            borderRadius: 8,
            border: `1px solid ${theme.palette.maskColor.line}`,
            marginBottom: theme.spacing(1)
        },
        selected: {
            borderColor: theme.palette.maskColor.highlight
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
            borderRadius: '50%',
            fontSize: 10
        },
        listText: {
            margin: 0
        },
        text: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        name: {
            fontSize: 14,
            color: theme.palette.maskColor.second,
            display: 'flex',
            alignItems: 'center'
        },
        balance: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        link: {
            color: theme.palette.maskColor.second,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4
        }
    };
});
const TokenItem = /*#__PURE__*/ (0,react.memo)(function TokenItem({ className, asset, network, onSelect, selected, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const explorerLink = (0,react.useMemo)(()=>{
        return Others.explorerResolver.fungibleTokenLink(asset.chainId, asset.address);
    }, [
        asset.address,
        asset.chainId,
        Others.explorerResolver.fungibleTokenLink
    ]);
    const liRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!selected) return;
        liRef.current?.scrollIntoView();
    }, [
        selected,
        liRef.current
    ]);
    // #region Try getting balance through RPC.
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
    // #endregion
    const forkedRef = (0,useForkRef/* default */.Z)(liRef, ref);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
            className: classes.balance,
            loading: balance.pending,
            skeletonWidth: 50,
            children: balance.value
        }),
        className: cx(classes.item, className, selected ? classes.selected : null),
        onClick: ()=>onSelect?.(asset),
        ref: forkedRef,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                children: /* TODO utility TokenIcon with badge */ /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    position: "relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                            className: classes.tokenIcon,
                            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            chainId: asset.chainId,
                            address: asset.address,
                            name: asset.name,
                            size: 36
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                            className: classes.badgeIcon,
                            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            chainId: network.chainId,
                            size: 16,
                            network: network
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                className: classes.listText,
                secondaryTypographyProps: {
                    component: 'div'
                },
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.name,
                            children: [
                                asset.name,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    onClick: (event)=>event.stopPropagation(),
                                    href: explorerLink,
                                    className: classes.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                        size: 18
                                    })
                                })
                            ]
                        }),
                        asset.isCustomToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t.added_by_user()
                        }) : null
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    children: asset.symbol
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/components/TokenPicker/index.tsx










const TokenPicker_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        picker: {
            display: 'flex',
            gap: theme.spacing(0.5),
            flexDirection: 'row',
            overflow: 'auto'
        },
        sidebar: {
            paddingRight: theme.spacing(1)
        },
        list: {
            overflow: 'auto',
            width: '100%'
        }
    };
});
const TokenPicker = /*#__PURE__*/ (0,react.memo)(function TokenPicker({ defaultChainId, chainId, address, className, onSelect, onChainChange, ...rest }) {
    const { classes, cx } = TokenPicker_useStyles();
    const { data: assets = constants/* EMPTY_LIST */.rP } = (0,useFungibleAssets/* useFungibleAssets */.C)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, undefined, {
        chainId
    });
    const [sidebarChainId, setSidebarChainId] = (0,react.useState)(defaultChainId);
    const handleChainChange = (0,react.useCallback)((chainId)=>{
        onChainChange?.(chainId);
        setSidebarChainId(chainId);
    }, [
        onChainChange
    ]);
    const availableAssets = (0,react.useMemo)(()=>{
        if (!sidebarChainId) return assets;
        return assets.filter((x)=>x.chainId === sidebarChainId);
    }, [
        assets,
        sidebarChainId
    ]);
    const isSmartPay = !!(0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM)?.owner;
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, true);
    const filteredNetworks = (0,react.useMemo)(()=>{
        if (isSmartPay) return networks.filter((x)=>x.chainId === types/* ChainId */.a_.Matic && !x.isCustomized);
        return networks;
    }, [
        networks,
        isSmartPay
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: cx(classes.picker, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNetworkSidebar/* SelectNetworkSidebar */.C, {
                className: classes.sidebar,
                networks: filteredNetworks,
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                chainId: sidebarChainId,
                hideAllButton: true,
                onChainChange: handleChainChange
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                "data-hide-scrollbar": true,
                children: availableAssets.map((asset)=>{
                    const network = filteredNetworks.find((x)=>x.chainId === asset.chainId);
                    const selected = asset.chainId === chainId && (0,isSameAddress/* isSameAddress */.W)(asset.address, address);
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenItem, {
                        asset: asset,
                        network: network,
                        selected: selected,
                        onSelect: onSelect
                    }, `${asset.chainId}.${asset.address}`);
                })
            })
        ]
    });
});


/***/ }),

/***/ 71418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ WalletBalance)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75607);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24637);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95325);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78130);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);






const WalletBalance = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function WalletBalance({ skeletonWidth, skeletonHeight, account, ...props }) {
    const { data: balance, isLoading: loadingBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useBalance */ .K)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM, {
        account
    });
    const { data: nativeToken, isLoading: isLoadingToken } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNativeToken */ .u)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    if (!nativeToken) return null;
    if (loadingBalance || isLoadingToken) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            ...props,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                animation: "wave",
                variant: "text",
                height: skeletonHeight ?? '1.5em',
                width: skeletonWidth ?? '100%'
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        ...props,
        children: [
            (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .formatBalance */ .a)(balance, nativeToken.decimals, 0, false, true),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                component: "span",
                ml: 0.5,
                children: nativeToken.symbol
            })
        ]
    });
});


/***/ }),

/***/ 22964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ WalletItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41487);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58190);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6379);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8311);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46017);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3223);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72881);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70429);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86244);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71418);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        item: {
            padding: theme.spacing(1),
            display: 'flex',
            cursor: 'pointer',
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 8,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            },
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.root}`]: {
                right: 0
            }
        },
        address: {
            fontSize: 12,
            color: theme.palette.maskColor.second,
            display: 'flex',
            alignItems: 'center'
        },
        mainLine: {
            color: theme.palette.maskColor.main,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center'
        },
        name: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        text: {
            marginLeft: 6,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 6
        },
        badge: {
            fontSize: 12,
            fontWeight: 700,
            display: 'inline-block',
            padding: '2px 4px',
            boxSizing: 'border-box',
            borderRadius: 4,
            lineHeight: '16px',
            height: 20,
            backgroundColor: theme.palette.maskColor.bg,
            marginLeft: theme.spacing(1),
            color: theme.palette.maskColor.second
        },
        balance: {
            textAlign: 'left',
            color: theme.palette.maskColor.second,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontSize: 12,
            marginLeft: theme.spacing(2)
        },
        tooltip: {
            width: 240
        }
    }));
const WalletItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function WalletItem({ wallet, onSelect, isSelected, className, hiddenTag, ...rest }) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { classes, cx } = useStyles();
    const { data: domain } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useReverseAddress */ .$)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_EVM, wallet.address);
    const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onSelect(wallet);
    }, [
        wallet
    ]);
    const extraName = domain && domain !== wallet.name ? ` (${(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatDomainName */ .bc)(domain)})` : '';
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        className: cx(classes.item, className),
        onClick: handleSelect,
        secondaryAction: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            sx: {
                marginLeft: 0.75
            },
            checked: isSelected
        }),
        ...rest,
        children: [
            wallet.owner ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__.SmartPay, {
                size: 24
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__.MaskBlue, {
                size: 24
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                className: classes.text,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        width: 180,
                        overflow: "auto",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.mainLine,
                                component: "div",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        className: classes.name,
                                        children: `${wallet.name}${extraName}`
                                    }),
                                    wallet.source === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .ImportSource */ .Q.LocalGenerated || hiddenTag ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        component: "span",
                                        className: classes.badge,
                                        children: t.wallet_imported()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.address,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    title: wallet.address,
                                    placement: "right",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_15__/* .FormattedAddress */ .K, {
                                            address: wallet.address,
                                            size: 4,
                                            formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_16__/* .WalletBalance */ .N, {
                        className: classes.balance,
                        skeletonWidth: 60,
                        account: wallet.address
                    })
                ]
            })
        ]
    });
});


/***/ }),

/***/ 81878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tb: () => (/* binding */ MAX_FILE_SIZE),
/* harmony export */   VB: () => (/* binding */ SOCIAL_MEDIA_ICON_FILTER_COLOR),
/* harmony export */   wV: () => (/* binding */ MATCH_PASSWORD_RE)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77953);

const MATCH_PASSWORD_RE = /^(?=.{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\dA-Za-z]).*/;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const SOCIAL_MEDIA_ICON_FILTER_COLOR = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter]: 'drop-shadow(0px 6px 12px rgba(29, 161, 242, 0.20))',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Facebook]: 'drop-shadow(0px 6px 12px rgba(60, 89, 155, 0.20))',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Minds]: 'drop-shadow(0px 6px 12px rgba(33, 37, 42, 0.20))',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Instagram]: 'drop-shadow(0px 6px 12px rgba(246, 100, 16, 0.20))',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.OpenSea]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Mirror]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Localhost]: ''
};


/***/ }),

/***/ 71110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useGasRatio)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65327);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54225);
/* harmony import */ var _usePopupContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26332);





function useGasRatio(paymentToken) {
    const { smartPayChainId } = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .useContainer */ .u)(_usePopupContext_js__WEBPACK_IMPORTED_MODULE_2__/* .PopupContext */ .t);
    const { data: smartPayRatio } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)([
        'smart-pay',
        'gas-ratio',
        smartPayChainId
    ], async ()=>{
        if (!smartPayChainId) return;
        const depositPaymaster = new _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .DepositPaymaster */ .hv(smartPayChainId);
        const ratio = await depositPaymaster.getRatio();
        return ratio;
    });
    return paymentToken && !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .isNativeTokenAddress */ .qw)(paymentToken) ? smartPayRatio : undefined;
}


/***/ }),

/***/ 26332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PopupContext)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54225);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17735);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/**
 * Warning: Don't change this context.
 * This will be removed
 */ 



function usePopupContext() {
    const [signed, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { value: smartPayChainId } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SmartPayBundler */ .Pp.getSupportedChainId(), []);
    return {
        smartPayChainId,
        signed,
        setSigned
    };
}
const PopupContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_3__/* .createContainer */ .f)(usePopupContext);


/***/ }),

/***/ 11929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useSupportSocialNetworks)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17735);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);


function useSupportSocialNetworks() {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(async ()=>{
        const sites = await _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.SiteAdaptor.getSupportedSites({
            isSocialNetwork: true
        });
        return sites.map((x)=>x.networkIdentifier);
    }, []);
}


/***/ }),

/***/ 67373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useSupportedSites)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39333);


function useSupportedSites() {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__/* .useQuery */ .a)({
        queryKey: [
            'supported-sites'
        ],
        networkMode: 'always',
        queryFn: async ()=>{
            const sites = await _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.SiteAdaptor.getAllOrigins();
            const settings = await _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.getAllInjectSwitchSettings();
            return Promise.all(sites.map(async (x)=>({
                    ...x,
                    allowInject: settings[x.networkIdentifier]
                })));
        }
    });
}


/***/ }),

/***/ 81430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ PageTitleContext),
/* harmony export */   Z: () => (/* binding */ useTitle)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


const PageTitleContextDefault = {
    title: '',
    extension: null,
    setExtension: ()=>{},
    setTitle: ()=>{},
    setCustomBackHandler: ()=>{}
};
const PageTitleContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(PageTitleContextDefault);
PageTitleContext.displayName = 'PageTitleContext';
function useTitle(title, customBackHandler) {
    const { setTitle, setCustomBackHandler } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PageTitleContext);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        setTitle(title);
        setCustomBackHandler(()=>customBackHandler);
        return ()=>{
            setTitle('Mask');
            setCustomBackHandler(lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
        };
    }, [
        title,
        customBackHandler
    ]);
}


/***/ }),

/***/ 83272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useWalletGroup)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58190);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41238);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60275);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17735);





function useWalletGroup() {
    const wallets = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__/* .useWallets */ .r)();
    // TODO: sort by time
    const { value } = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        const imported = wallets.filter((x)=>!x.mnemonicId && x.source !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ImportSource */ .Q.LocalGenerated);
        // old version data
        if (wallets.some((x)=>x.source === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ImportSource */ .Q.LocalGenerated && !x.mnemonicId)) {
            const localGenerated = wallets.filter((x)=>x.source === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ImportSource */ .Q.LocalGenerated);
            const primary = await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Wallet.getWalletPrimary();
            if (!primary) return;
            const groups = {
                [primary.address]: (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)([
                    ...localGenerated,
                    primary
                ], (x)=>x.address)
            };
            return {
                groups,
                imported
            };
        }
        return {
            groups: (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(wallets.filter((x)=>!!x.mnemonicId), (x)=>x.mnemonicId),
            imported
        };
    }, [
        wallets
    ]);
    return value;
}


/***/ }),

/***/ 52842:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _shared_ui_initialization_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_ui_initialization_index_js__WEBPACK_IMPORTED_MODULE_0__]);
_shared_ui_initialization_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/// <reference types="@masknet/global-types/web-extension" />

await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6883));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 6883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/extension-page.ts
var extension_page = __webpack_require__(86766);
// EXTERNAL MODULE: ./packages/mask/shared-ui/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(83817);
// EXTERNAL MODULE: ./packages/mask/shared/plugin-infra/host.ts + 32 modules
var host = __webpack_require__(31418);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(30504);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+styled-engine@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
var StyledEngineProvider = __webpack_require__(58843);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(80835);
// EXTERNAL MODULE: ./packages/theme/src/Theme/Provider.tsx
var Provider = __webpack_require__(39112);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/Injector.tsx
var Injector = __webpack_require__(3266);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/instance.ts
var instance = __webpack_require__(50139);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/I18NextProviderHMR.tsx




es/* initReactI18next */.Db.init(instance/* i18NextInstance */.BV);
const I18NextProviderHMR =  false ? 0 : es/* I18nextProvider */.a3;
function I18NextProvider_dev({ i18n, defaultNS, children }) {
    const [ns, setNS] = useState(defaultNS);
    useEffect(()=>{
        const f = ()=>setNS('HMR');
        globalThis.addEventListener('MASK_I18N_HMR', f);
        return ()=>globalThis.removeEventListener('MASK_I18N_HMR', f);
    }, []);
    // Force trigger a re-render to apply HMR
    if (ns === 'HMR') defaultNS = Math.random() + '';
    useEffect(()=>{
        if (ns === 'HMR') setNS('');
    }, [
        ns
    ]);
    return /*#__PURE__*/ _jsx(I18nextProvider, {
        i18n: i18n,
        defaultNS: defaultNS,
        children: children
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/SharedContextProvider.tsx
var SharedContextProvider = __webpack_require__(18956);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/compose.ts
var compose = __webpack_require__(75369);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx + 3 modules
var ErrorBoundary = __webpack_require__(87148);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query-persist-client@4.35.0_@tanstack+react-query@4.29.25/node_modules/@tanstack/react-query-persist-client/build/lib/PersistQueryClientProvider.mjs + 2 modules
var PersistQueryClientProvider = __webpack_require__(62633);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/localStoragePersist.ts + 1 modules
var localStoragePersist = __webpack_require__(16217);
;// CONCATENATED MODULE: ./packages/shared/src/UI/contexts/PageUIProvider.tsx










function PageUIProvider(useTheme, children, fallback) {
    return (0,compose/* compose */.q)(// Avoid the crash due to unhandled suspense
    (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            children: children
        }), // Provide the minimal environment (i18n context) for CrashUI in page mode
    (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(I18NextProviderHMR, {
            i18n: instance/* i18NextInstance */.BV,
            children: children
        }), (children)=>(0,StyledEngineProvider/* default */.Z)({
            injectFirst: true,
            children
        }), (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary/* ErrorBoundary */.S, {
            children: children
        }), (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskUIRoot, {
            useTheme: useTheme,
            fallback: fallback,
            children: children
        }), /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    }));
}
function MaskUIRoot({ children, useTheme, fallback }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogStack/* DialogStackingProvider */.yu, {
        hasGlobalBackdrop: false,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider/* MaskThemeProvider */.R, {
            useMaskIconPalette: (theme)=>theme.palette.mode,
            useTheme: useTheme,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersistQueryClientProvider/* PersistQueryClientProvider */.S, {
                client: queryClient/* queryClient */.E,
                persistOptions: localStoragePersist/* persistOptions */.t,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* RootWeb3ContextProvider */.t2, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SharedContextProvider/* SharedContextProvider */.Q, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Suspense, {
                            fallback: fallback,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Injector/* CSSVariableInjector */.U, {}),
                                children
                            ]
                        })
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/Histories/Popups.ts
var Popups = __webpack_require__(91115);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-idle-timer@5.7.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-idle-timer/dist/index.esm.js
var index_esm = __webpack_require__(22871);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/useUserPrefersColorScheme.ts
var useUserPrefersColorScheme = __webpack_require__(49);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useAppearance.ts
var useAppearance = __webpack_require__(73388);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useThemeLanguage.ts
var useThemeLanguage = __webpack_require__(20355);
;// CONCATENATED MODULE: ./packages/mask/popups/hooks/usePopupTheme.ts






function usePopupTheme() {
    const appearance = (0,useAppearance/* useAppearance */.M)();
    const mode = (0,useUserPrefersColorScheme/* useSystemPreferencePalette */.Q)();
    const [localization] = (0,useThemeLanguage/* useThemeLanguage */.e)((0,useValueRef/* useValueRef */.E)(settings/* languageSettings */.pQ));
    return (0,createMuiStrictModeTheme/* default */.Z)((appearance === 'default' ? mode : appearance) === specs/* ThemeMode */.hY.Dark ? theme/* MaskDarkTheme */.H : theme/* MaskLightTheme */.C, localization);
}

// EXTERNAL MODULE: ./packages/mask/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(35396);
// EXTERNAL MODULE: ./node_modules/.pnpm/@remix-run+router@1.7.2/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(50617);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(61536);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/BottomNavigationAction/BottomNavigationAction.js
var BottomNavigationAction = __webpack_require__(37204);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useMessages.ts
var useMessages = __webpack_require__(91784);
;// CONCATENATED MODULE: ./packages/mask/popups/components/Navigator/index.tsx
/// <reference types="react/canary" />








const useStyle = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            padding: theme.spacing(2, 1.5),
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0,0.80)' : 'rgba(255, 255, 255, 0.80)',
            width: '100%',
            backdropFilter: 'blur(8px)',
            boxShadow: theme.palette.maskColor.bottomBg,
            borderRadius: '12px 12px 0 0'
        },
        action: {
            color: theme.palette.maskColor.third,
            height: '100%',
            minWidth: 94,
            padding: 6,
            boxSizing: 'border-box'
        },
        selected: {
            '& > button': {
                color: theme.palette.maskColor.highlight,
                filter: 'drop-shadow(0px 4px 10px rgba(0, 60, 216, 0.2))'
            }
        }
    }));
const BottomNavLink = /*#__PURE__*/ (0,react.memo)(function BottomNavLink({ children, to }) {
    const { classes } = useStyle();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom_dist/* NavLink */.OL, {
        to: to,
        className: ({ isActive })=>isActive ? classes.selected : undefined,
        children: children
    });
});
const Navigator = /*#__PURE__*/ (0,react.memo)(function Navigator({ className, ...rest }) {
    const { classes, cx } = useStyle();
    const messages = (0,useMessages/* useMessages */.y)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: cx(classes.container, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavLink, {
                to: Routes/* PopupRoutes */.mZ.Personas,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    tabIndex: -1,
                    showLabel: false,
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskMe, {
                        size: 28
                    }),
                    className: classes.action
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavLink, {
                to: Routes/* PopupRoutes */.mZ.Wallet,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    tabIndex: -1,
                    showLabel: false,
                    icon: messages.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.BusyWalletNav, {
                        size: 28
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WalletNav, {
                        size: 28
                    }),
                    className: classes.action
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavLink, {
                to: Routes/* PopupRoutes */.mZ.Friends,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    tabIndex: -1,
                    showLabel: false,
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Contacts, {
                        size: 28
                    }),
                    className: classes.action
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavLink, {
                to: Routes/* PopupRoutes */.mZ.Settings,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    className: classes.action,
                    tabIndex: -1,
                    showLabel: false,
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Settings2, {
                        size: 28
                    })
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/components/PopupLayout/index.tsx







const GlobalCss = /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalStyles/* default */.Z, {
    styles: {
        body: {
            width: 400,
            minWidth: 400,
            minHeight: 600,
            overflowX: 'hidden',
            margin: '0 auto !important',
            maxWidth: '100%',
            WebkitFontSmoothing: 'subpixel-antialiased',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        '[data-hide-scrollbar]': {
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }
});
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            height: '100%',
            minHeight: 600,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.maskColor.bottom,
            position: 'relative'
        },
        body: {
            flexGrow: 1,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
        },
        navigator: {
            flexShrink: 0,
            flexGrow: 0,
            position: 'absolute',
            bottom: 0,
            zIndex: 999
        }
    }));
// Setting too large will make it over popup modal
const PATTERNS = [
    Routes/* PopupRoutes */.mZ.Personas,
    Routes/* PopupRoutes */.mZ.Wallet,
    Routes/* PopupRoutes */.mZ.Friends,
    Routes/* PopupRoutes */.mZ.Settings,
    Routes/* PopupRoutes */.mZ.SetPaymentPassword
];
const LoadMaskSDK = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 654).then(__webpack_require__.bind(__webpack_require__, 60654)));
const PopupLayout = /*#__PURE__*/ (0,react.memo)(function PopupLayout({ children }) {
    const { classes } = useStyles();
    const location = (0,dist/* useLocation */.TH)();
    const matched = PATTERNS.some((pattern)=>(0,router/* matchPath */.LX)(pattern, location.pathname));
    const outletContext = (0,react.useMemo)(()=>({
            hasNavigator: matched
        }), [
        matched
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            GlobalCss,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                elevation: 0,
                sx: {
                    height: '100vh',
                    overflowY: 'auto',
                    minHeight: 600,
                    borderRadius: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.container,
                    "data-hide-scrollbar": true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.body,
                            "data-hide-scrollbar": true,
                            children: children ?? /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Outlet */.j3, {
                                context: outletContext
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                            fallback: null,
                            children: matched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadMaskSDK, {}) : null
                        }),
                        matched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigator, {
                            className: classes.navigator
                        }) : null
                    ]
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Backdrop/backdropClasses.js
var backdropClasses = __webpack_require__(36326);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(15957);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
;// CONCATENATED MODULE: ./packages/mask/popups/components/ActionModal/ActionModal.tsx






const ActionModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        modal: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            maxHeight: '80vh',
            padding: 18,
            borderRadius: theme.spacing(3, 3, 0, 0),
            backgroundColor: theme.palette.maskColor.bottom
        },
        closeButton: {
            position: 'absolute',
            width: 24,
            height: 24,
            color: theme.palette.maskColor.main,
            minWidth: 'auto',
            right: 18,
            top: 18
        },
        header: {
            fontSize: 24,
            fontWeight: 700,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        content: {
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            marginTop: theme.spacing(2),
            // If has no action.
            '&:not(:last-child)': {
                marginBottom: theme.spacing(2)
            }
        },
        root: {
            [`& .${backdropClasses/* default */.Z.root}`]: {
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.10)' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), rgba(28, 104, 243, 0.20)',
                backdropFilter: 'blur(5px)'
            }
        }
    }));
const ActionModal = /*#__PURE__*/ (0,react.memo)(function ActionModal({ header, className, children, action = null, onClose, ...rest }) {
    const { classes } = ActionModal_useStyles();
    const { open, openModal, closeModal } = (0,ActionModalContext/* useActionModal */.mO)();
    (0,react.useEffect)(openModal, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Drawer/* default */.ZP, {
        anchor: "bottom",
        className: className,
        classes: {
            paper: classes.modal,
            root: classes.root
        },
        role: "dialog",
        open: open,
        onClose: closeModal,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "text",
                disableRipple: true,
                className: classes.closeButton,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                    size: 24,
                    onClick: closeModal
                })
            }),
            header ? /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                className: classes.header,
                children: header
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: children
            }),
            action
        ]
    });
});
function wrapModal(modal) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModalContext/* ActionModalContainer */.Sy.Provider, {
        children: modal
    });
}

// EXTERNAL MODULE: ./packages/mask/popups/hooks/usePopupContext.ts
var usePopupContext = __webpack_require__(26332);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(78678);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ConnectProvider/index.tsx













const ConnectProvider_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { loading, timeout })=>({
        tips: {
            fontSize: 14,
            color: theme.palette.maskColor.third,
            fontWeight: 700,
            lineHeight: '18px',
            textAlign: 'center'
        },
        icon: {
            '@keyframes spinner': {
                to: {
                    transform: 'rotate(360deg)'
                }
            },
            position: 'relative',
            width: 48,
            height: 48,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...loading ? {
                '&:before': {
                    content: "''",
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: -5,
                    left: -5,
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    border: `2px solid ${theme.palette.maskColor.main}`,
                    borderTopColor: theme.palette.maskColor.second,
                    animation: 'spinner 2s linear infinite'
                }
            } : {},
            ...timeout ? {
                border: `2px solid ${theme.palette.maskColor.danger}`,
                borderRadius: '50%',
                padding: 10
            } : {}
        }
    }));
const ConnectProviderModal = /*#__PURE__*/ (0,react.memo)(function ConnectProviderModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const location = (0,dist/* useLocation */.TH)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { Provider } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const { providerType } = (0,react.useMemo)(()=>{
        const providerType = params.get('providerType');
        return {
            providerType
        };
    }, [
        params
    ]);
    const provider = (0,useProviderDescriptor/* useProviderDescriptor */.f)(pluginID, providerType);
    const providerExist = (0,react.useMemo)(()=>{
        if (!provider?.type) return false;
        return Provider?.isReady(provider.type);
    }, [
        provider?.type,
        Provider
    ]);
    const handleClose = (0,react.useCallback)(()=>{
        navigate(Routes/* PopupRoutes */.mZ.Personas, {
            replace: true
        });
    }, []);
    const [{ loading, error }, handleConnect] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const params = new URLSearchParams(location.search);
        const providerType = params.get('providerType');
        if (!providerType) return;
        try {
            const connect = async ()=>{
                // wait for web3 state init
                await (0,esm/* delay */.gw)(1500);
                const chainId = providerType === types/* ProviderType */.lP.Fortmatic ? types/* ChainId */.a_.Mainnet : await entry/* Web3 */.Bv.getChainId({
                    providerType
                });
                return entry/* Web3 */.Bv.connect({
                    chainId,
                    providerType: providerType
                });
            };
            // Fortmatic takes extra time because it requires the user to enter an account and password, a verification code
            const result = await (0,esm/* timeout */.Vs)(connect(), providerType === types/* ProviderType */.lP.Fortmatic ? 5 * 60 * 1000 : 30 * 1000);
            if (!result) return;
            navigate(Routes/* PopupRoutes */.mZ.ConnectWallet, {
                replace: true
            });
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === 'timeout') throw error;
                if (error.message.includes('reject') || error.message.includes('cancel')) {
                    showSnackbar(t.popups_cancel_connect_provider(), {
                        variant: 'warning'
                    });
                    handleClose();
                }
            }
        }
    }, []);
    const isTimeout = error?.message === 'timeout';
    const { classes } = ConnectProvider_useStyles({
        loading,
        timeout: isTimeout
    });
    const handleChooseAnotherWallet = (0,react.useCallback)(()=>{
        modalNavigate(Routes/* PopupModalRoutes */.cY.SelectProvider, {
            replace: true
        });
    }, [
        modalNavigate
    ]);
    (0,useMount/* default */.Z)(()=>handleConnect());
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionModal, {
        header: providerExist ? t.popups_wait_for_provider_connect_title({
            providerType: String(providerType)
        }) : t.popups_not_connected_third_party_wallet_title(),
        keepMounted: true,
        ...props,
        onClose: handleClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tips,
                children: isTimeout ? t.popups_wait_for_provider_connect_timeout() : providerExist ? t.popups_wait_for_provider_connect_tips({
                    providerType: String(providerType)
                }) : t.popups_not_connected_third_party_wallet_tips({
                    providerType: String(providerType)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                mt: 4,
                p: 1.5,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                children: [
                    provider?.icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.icon,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: provider.icon,
                            style: {
                                width: 32,
                                height: 32
                            }
                        })
                    }) : null,
                    isTimeout ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "roundedContained",
                        size: "small",
                        sx: {
                            width: 84,
                            mt: 1.5
                        },
                        onClick: handleConnect,
                        children: t.retry()
                    }) : null,
                    !providerExist ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "18px",
                                my: 1.25,
                                children: t.popups_not_connected_third_party_wallet_description()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "roundedContained",
                                size: "small",
                                onClick: handleChooseAnotherWallet,
                                children: t.popups_choose_another_wallet()
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./packages/mask/popups/components/SelectProvider/index.tsx
var SelectProvider = __webpack_require__(83303);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/SelectProviderModal/index.tsx







const SelectProviderModal = /*#__PURE__*/ (0,react.memo)(function SelectProviderModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const onlyMask = params.get('onlyMask');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionModal, {
        header: onlyMask ? t.connect_your_wallet() : t.connect(),
        keepMounted: true,
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                textAlign: "center",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: "18px",
                color: theme.palette.maskColor.third,
                children: onlyMask ? t.popups_select_and_connect_wallet() : t.popups_select_wallet_to_verify_tips()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                mt: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProvider/* SelectProvider */.X, {})
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useUserContext.ts
var useUserContext = __webpack_require__(18382);
// EXTERNAL MODULE: ./packages/mask/popups/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(51093);
// EXTERNAL MODULE: ./packages/mask/popups/constants.ts
var constants = __webpack_require__(81878);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/VerifyBackupPasswordModal/index.tsx










const VerifyBackupPasswordModal = /*#__PURE__*/ (0,react.memo)(function VerifyBackupPasswordModal() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [password, setPassword] = (0,react.useState)('');
    const [passwordMatched, setPasswordMatched] = (0,react.useState)(true);
    const [passwordValid, setPasswordValid] = (0,react.useState)(false);
    const { user } = useUserContext/* UserContext */.S.useContainer();
    const handleExport = (0,react.useCallback)(()=>{
        if (user.backupPassword !== password) {
            setPasswordMatched(false);
            return;
        }
        navigate(Routes/* PopupRoutes */.mZ.ExportPrivateKey, {
            replace: true
        });
    }, [
        user,
        password
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_backup_persona(),
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            onClick: handleExport,
            disabled: !passwordValid || !passwordMatched || !password.length,
            children: t.export()
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            m: 0.5,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                placeholder: t.password(),
                onFocus: ()=>setPasswordMatched(true),
                onChange: (e)=>{
                    setPassword(e.target.value);
                    setPasswordValid(constants/* MATCH_PASSWORD_RE */.wV.test(e.target.value));
                },
                value: password,
                error: !passwordMatched,
                helperText: !passwordValid ? t.popups_backup_password_invalid() : !passwordMatched ? t.popups_backup_password_incorrect() : null
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/SetBackupPasswordModal/index.tsx










const SetBackupPasswordModal = /*#__PURE__*/ (0,react.memo)(function SetBackupPasswordModal() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const [params] = (0,react_router_dom_dist/* useSearchParams */.lr)();
    const to = params.get('to');
    const { updateUser } = useUserContext/* UserContext */.S.useContainer();
    const [newPassword, setNewPassword] = (0,react.useState)('');
    const [repeatPassword, setRepeatPassword] = (0,react.useState)('');
    const [passwordValidError, setPasswordValidError] = (0,react.useState)('');
    const [passwordMatched, setPasswordMatched] = (0,react.useState)(true);
    const navigate = (0,dist/* useNavigate */.s0)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const validPassword = (0,react.useCallback)(()=>{
        if (newPassword.length < 8 || newPassword.length > 20) {
            return;
        } else if (!constants/* MATCH_PASSWORD_RE */.wV.test(newPassword)) {
            setPasswordValidError(t.popups_settings_backup_password_invalid());
            return;
        }
        setPasswordValidError('');
    }, [
        newPassword
    ]);
    const validRepeatPassword = (0,react.useCallback)(()=>{
        setPasswordMatched(newPassword === repeatPassword);
    }, [
        newPassword,
        repeatPassword
    ]);
    const [{ loading }, handleClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!newPassword || !passwordMatched || !!passwordValidError) return;
        updateUser({
            backupPassword: newPassword
        });
        showSnackbar(t.popups_backup_password_set_successfully());
        if (to) {
            navigate(to, {
                replace: true
            });
            return;
        }
        navigate(-1);
    }, [
        newPassword,
        passwordMatched,
        passwordValidError,
        updateUser,
        params,
        to
    ]);
    const disabled = (0,react.useMemo)(()=>{
        if (!newPassword.length || !repeatPassword.length) return true;
        if (newPassword.length < 8 || newPassword.length > 20) return true;
        if (repeatPassword.length < 8 || repeatPassword.length > 20) return true;
        if (!!passwordValidError || !passwordMatched) return true;
        return false;
    }, [
        newPassword,
        repeatPassword,
        passwordMatched,
        passwordValidError
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_backup_password(),
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            onClick: handleClick,
            loading: loading,
            disabled: disabled,
            children: t.confirm()
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 2,
            m: 0.5,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                    placeholder: t.password(),
                    onChange: (e)=>setNewPassword(e.target.value),
                    autoFocus: true,
                    onBlur: validPassword,
                    value: newPassword,
                    error: !!passwordValidError,
                    helperText: passwordValidError
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                    placeholder: t.reenter(),
                    onChange: (e)=>setRepeatPassword(e.target.value),
                    value: repeatPassword,
                    onBlur: validRepeatPassword,
                    error: !passwordMatched,
                    helperText: !passwordMatched ? t.popups_backup_password_inconsistency() : ''
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 12,
                            color: theme.palette.maskColor.second,
                            children: t.popups_backup_password_rules_tips()
                        }),
                        to ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            mt: 2,
                            fontSize: 12,
                            color: theme.palette.maskColor.second,
                            children: t.popups_backup_password_tips()
                        }) : null
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TextField/TextField.js
var TextField = __webpack_require__(76550);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/PersonaRenameModal/index.tsx












const PersonaRenameModal = /*#__PURE__*/ (0,react.memo)(function PersonaRenameModal() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const [name, setName] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const { currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [{ loading }, handleClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!name || !currentPersona) return;
        if (name.length > 24 || name.length < 1) {
            setError('popups_persona_rename_tips');
            return;
        }
        try {
            await service/* default */.ZP.Identity.renamePersona(currentPersona.identifier, name);
        } catch (error) {
            setError(t.popups_persona_persona_name_exists());
            return;
        }
        navigate(Routes/* PopupRoutes */.mZ.Personas, {
            replace: true
        });
    }, [
        name,
        currentPersona
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionModal, {
        header: t.popups_rename(),
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            disabled: loading || !name.length || !!error,
            onClick: handleClick,
            children: t.confirm()
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.maskColor.third,
                children: t.popups_persona_rename_tips()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "center",
                mx: 0.5,
                mb: 0.5,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    sx: {
                        mt: 4
                    },
                    fullWidth: true,
                    placeholder: currentPersona?.nickname,
                    error: !!error,
                    helperText: error,
                    value: name,
                    autoFocus: true,
                    onChange: (e)=>{
                        if (e.target.value.length > 24) return;
                        if (error) setError('');
                        setName(e.target.value);
                    },
                    InputProps: {
                        endAdornment: name.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupClose, {
                            onClick: ()=>{
                                setName('');
                                setError('');
                            },
                            size: 18,
                            color: error ? theme.palette.maskColor.danger : undefined
                        }) : null,
                        disableUnderline: true
                    }
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/components/PersonaAvatar/index.tsx
var PersonaAvatar = __webpack_require__(80264);
// EXTERNAL MODULE: ./packages/mask/popups/components/PersonaPublicKey/index.tsx
var PersonaPublicKey = __webpack_require__(99730);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/PersonaSettingModal/index.tsx












const PersonaSettingModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        avatarItem: {
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        item: {
            padding: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        avatar: {
            boxShadow: '0px 6px 12px 0px rgba(29, 161, 242, 0.20)',
            backdropFilter: 'blur(8px)'
        },
        text: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor.main
        },
        arrow: {
            color: theme.palette.maskColor.second,
            cursor: 'pointer'
        },
        icon: {
            color: theme.palette.maskColor.second
        },
        right: {
            display: 'flex',
            alignItems: 'center',
            columnGap: theme.spacing(1.5)
        }
    }));
const PersonaSettingModal = /*#__PURE__*/ (0,react.memo)(function PersonaSettingModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = PersonaSettingModal_useStyles();
    const { user } = useUserContext/* UserContext */.S.useContainer();
    const { currentPersona, avatar, proofs } = usePersonaContext/* PersonaContext */.m.useContainer();
    const navigate = (0,dist/* useNavigate */.s0)();
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionModal, {
        header: t.persona(),
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            variant: "contained",
            color: "error",
            onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.Logout),
            children: t.popups_log_out()
        }),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.avatarItem,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: t.popups_profile_photo()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.right,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatar/* PersonaAvatar */.K, {
                                avatar: avatar,
                                hasProofs: !!proofs?.length,
                                size: 48,
                                classes: {
                                    root: classes.avatar
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                                size: 24,
                                className: classes.arrow,
                                onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.PersonaAvatarSetting)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: t.popups_next_id()
                    }),
                    currentPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaPublicKey/* PersonaPublicKey */.q, {
                        rawPublicKey: currentPersona.identifier.rawPublicKey,
                        publicHexString: currentPersona.identifier.publicKeyAsHex,
                        iconSize: 16,
                        classes: {
                            icon: classes.icon,
                            text: classes.text
                        }
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: t.popups_name()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.right,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.text,
                                children: currentPersona?.nickname
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                                size: 24,
                                className: classes.arrow,
                                onClick: ()=>modalNavigate(Routes/* PopupModalRoutes */.cY.PersonaRename)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: t.popups_backup_persona()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {
                        size: 24,
                        className: classes.arrow,
                        onClick: ()=>{
                            modalNavigate(!user.backupPassword ? Routes/* PopupModalRoutes */.cY.SetBackupPassword : Routes/* PopupModalRoutes */.cY.verifyBackupPassword, {
                                to: Routes/* PopupRoutes */.mZ.ExportPrivateKey
                            });
                        }
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemSecondaryAction/listItemSecondaryActionClasses.js
var listItemSecondaryActionClasses = __webpack_require__(46017);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/SwitchPersonaModal/PersonaItem.tsx






const PersonaItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        item: {
            padding: theme.spacing(1),
            display: 'flex',
            cursor: 'pointer',
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 8,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            },
            [`& .${listItemSecondaryActionClasses/* default */.Z.root}`]: {
                right: 0
            }
        },
        avatar: {
            boxShadow: '0px 4px 12px 0px rgba(171, 185, 255, 0.20)',
            width: 36,
            height: 36
        },
        name: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px'
        },
        icon: {
            color: theme.palette.maskColor.second
        }
    }));
const PersonaItem = /*#__PURE__*/ (0,react.memo)(function PersonaItem({ isSelected, onSelect, persona, ...rest }) {
    const { classes } = PersonaItem_useStyles();
    const handleClick = (0,react.useCallback)(()=>{
        onSelect(persona);
    }, [
        onSelect,
        persona
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
            checked: isSelected
        }),
        onClick: handleClick,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAvatar/* PersonaAvatar */.K, {
                avatar: persona.avatar,
                classes: {
                    root: classes.avatar
                },
                size: 36
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                ml: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        children: persona.nickname
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaPublicKey/* PersonaPublicKey */.q, {
                        rawPublicKey: persona.identifier.rawPublicKey,
                        publicHexString: persona.identifier.publicKeyAsHex,
                        iconSize: 16,
                        classes: {
                            icon: classes.icon
                        }
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/SwitchPersonaModal/index.tsx












const SwitchPersonaModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            overflow: 'auto',
            backgroundColor: theme.palette.maskColor.bottom,
            display: 'flex',
            flexDirection: 'column'
        },
        list: {
            padding: 0,
            overflow: 'auto'
        },
        modalAction: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: theme.spacing(1.5)
        }
    }));
const SwitchPersonaModal = /*#__PURE__*/ (0,react.memo)(function SwitchPersonaModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { classes } = SwitchPersonaModal_useStyles();
    const { personas, currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const handleOpenDashboard = (0,react.useCallback)(async (route)=>{
        await browser.tabs.create({
            active: true,
            url: browser.runtime.getURL(`/dashboard.html#${route}`)
        });
        if (navigator.userAgent.includes('Firefox')) {
            window.close();
        }
        await service/* default */.ZP.Helper.removePopupWindow();
    }, []);
    const handleSelect = (0,react.useCallback)(async (persona)=>{
        await service/* default */.ZP.Settings.setCurrentPersonaIdentifier(persona.identifier);
        navigate(-1);
    }, []);
    const action = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.modalAction,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                fullWidth: true,
                size: "small",
                variant: "outlined",
                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupRestore, {
                    size: 18
                }),
                onClick: ()=>handleOpenDashboard(Routes/* DashboardRoutes */.vq.RecoveryPersona),
                children: t.popups_recovery()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                fullWidth: true,
                size: "small",
                variant: "outlined",
                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.History, {
                    size: 18
                }),
                onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.Settings),
                children: t.backup()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                fullWidth: true,
                size: "small",
                variant: "outlined",
                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.AddUser, {
                    size: 18
                }),
                onClick: ()=>handleOpenDashboard(Routes/* DashboardRoutes */.vq.SignUpPersona),
                children: t.add()
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_switch_persona(),
        action: action,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                children: personas.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                        persona: item,
                        isSelected: currentPersona?.identifier.toText() === item.identifier.toText(),
                        onSelect: handleSelect
                    }, index))
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FiatCurrencyIcon/index.tsx




const ICON_FILTER_COLOR = {
    [specs/* CurrencyType */.V2.USD]: 'drop-shadow(0px 6px 12px rgba(0, 204, 94, 0.20))',
    [specs/* CurrencyType */.V2.CNY]: 'drop-shadow(0px 6px 12px rgba(243, 0, 0, 0.20))',
    [specs/* CurrencyType */.V2.HKD]: 'drop-shadow(0px 6px 12px rgba(243, 0, 0, 0.20))',
    [specs/* CurrencyType */.V2.JPY]: 'drop-shadow(0px 6px 12px rgba(243, 0, 0, 0.20))',
    [specs/* CurrencyType */.V2.EUR]: 'drop-shadow(0px 6px 12px rgba(0, 47, 159, 0.20))'
};
const CurrencyIconMap = {
    [specs/* CurrencyType */.V2.USD]: icon_generated_as_jsx.America,
    [specs/* CurrencyType */.V2.CNY]: icon_generated_as_jsx.China,
    [specs/* CurrencyType */.V2.HKD]: icon_generated_as_jsx.HongKong,
    [specs/* CurrencyType */.V2.JPY]: icon_generated_as_jsx.Japan,
    [specs/* CurrencyType */.V2.EUR]: icon_generated_as_jsx.Europe
};
const FiatCurrencyIcon = /*#__PURE__*/ (0,react.memo)(function FiatCurrencyIcon({ type, ...rest }) {
    if (!(type in CurrencyIconMap)) return null;
    const Icon = CurrencyIconMap[type];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
        ...rest,
        style: {
            filter: ICON_FILTER_COLOR[type],
            flexShrink: 0,
            flexGrow: 0,
            height: rest.size,
            width: rest.size,
            borderRadius: '50%'
        }
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/RadioIndicator/index.tsx
var RadioIndicator = __webpack_require__(24500);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useCurrencyType.ts
var useCurrencyType = __webpack_require__(18121);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ChooseCurrencyModal/index.tsx










const ChooseCurrencyModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        networkList: {
            paddingLeft: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: '1fr'
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            listStyle: 'none',
            borderRadius: 8,
            padding: theme.spacing(1.5),
            cursor: 'pointer'
        },
        selectedItem: {
            background: theme.palette.maskColor.bg
        },
        itemBox: {
            display: 'flex',
            alignItems: 'center'
        },
        text: {
            color: theme.palette.maskColor.main,
            fontSize: 12,
            fontWeight: 700,
            marginLeft: 8
        }
    }));
const CurrencyItem = /*#__PURE__*/ (0,react.memo)(function CurrencyItem({ fiatCurrencyType }) {
    const { cx, classes } = ChooseCurrencyModal_useStyles();
    const { closeModal } = (0,ActionModalContext/* useActionModal */.mO)();
    const theme = (0,useTheme/* default */.Z)();
    const currentCurrencyType = (0,useCurrencyType/* useCurrencyType */.P)();
    const checked = fiatCurrencyType === currentCurrencyType;
    const setFiatCurrencyType = (0,react.useCallback)(async ()=>{
        await entry/* Web3State */.SC.state.Settings?.setDefaultCurrencyType(fiatCurrencyType);
        closeModal();
    }, [
        fiatCurrencyType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: cx(classes.item, checked ? classes.selectedItem : ''),
        role: "option",
        onClick: setFiatCurrencyType,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.itemBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FiatCurrencyIcon, {
                        type: fiatCurrencyType,
                        size: 24
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: (0,resolver/* resolveCurrencyFullName */.N)(fiatCurrencyType)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioIndicator/* RadioIndicator */.F, {
                size: 20,
                checked: checked,
                unCheckedButtonColor: theme.palette.maskColor.secondaryLine
            })
        ]
    });
});
const ChooseCurrencyModal = /*#__PURE__*/ (0,react.memo)(function ChooseCurrencyModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = ChooseCurrencyModal_useStyles();
    const currencies = [
        specs/* CurrencyType */.V2.USD,
        specs/* CurrencyType */.V2.CNY,
        specs/* CurrencyType */.V2.HKD,
        specs/* CurrencyType */.V2.JPY,
        specs/* CurrencyType */.V2.EUR
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.currency(),
        keepMounted: true,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: classes.networkList,
            children: currencies.map((fiatCurrencyType, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CurrencyItem, {
                    fiatCurrencyType: fiatCurrencyType
                }, index))
        })
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ProgressiveText/index.tsx
var ProgressiveText = __webpack_require__(5393);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextOverflowTooltip/index.tsx
var TextOverflowTooltip = __webpack_require__(59134);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworks.ts
var useNetworks = __webpack_require__(72889);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ChooseNetworkModal/index.tsx














const ChooseNetworkModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        networkList: {
            paddingLeft: 0,
            margin: 0,
            display: 'grid',
            gap: theme.spacing(2),
            gridTemplateColumns: '1fr 1fr'
        },
        network: {
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            borderRadius: 8,
            padding: theme.spacing(1.5),
            border: `1px solid ${theme.palette.maskColor.line}`,
            overflow: 'auto'
        },
        icon: {
            width: 24,
            height: 24,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0
        },
        text: {
            marginLeft: theme.spacing(1),
            marginRight: 'auto',
            overflow: 'auto'
        },
        name: {
            fontSize: 12,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '16px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        balance: {
            fontSize: 12,
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            lineHeight: '16px'
        }
    }));
const NetworkItem = /*#__PURE__*/ (0,react.memo)(function NetworkItem({ network, currentNetworkId }) {
    const { classes, theme } = ChooseNetworkModal_useStyles();
    const { closeModal } = (0,ActionModalContext/* useActionModal */.mO)();
    const chainId = network.chainId;
    const liRef = (0,react.useRef)(null);
    const selected = network.ID === currentNetworkId;
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    (0,react.useEffect)(()=>{
        if (!selected) return;
        liRef.current?.scrollIntoView();
    }, [
        selected,
        liRef.current
    ]);
    const providerURL = network.isCustomized ? network.rpcUrl : undefined;
    const { data: balance, isLoading: loadingBalance } = (0,useBalance/* useBalance */.K)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        providerURL
    });
    const token = network.nativeCurrency;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: classes.network,
        role: "option",
        ref: liRef,
        onClick: async ()=>{
            await Network?.switchNetwork(network.ID);
            await entry/* Web3 */.Bv.switchChain?.(chainId, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
            closeModal();
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.icon,
                children: network.iconUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                    size: 24,
                    icon: network.iconUrl,
                    name: network.name
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    chainId: network.chainId,
                    size: 24,
                    network: network
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.text,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                        title: network.name,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.name,
                            children: network.name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressiveText/* ProgressiveText */.l, {
                        className: classes.balance,
                        loading: loadingBalance,
                        skeletonWidth: 60,
                        skeletonHeight: 16,
                        children: `${(0,formatBalance/* formatBalance */.a)(balance, token?.decimals, 0, false, true)} ${token?.symbol}`
                    })
                ]
            }),
            selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonChecked, {
                size: 20
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonUnChecked, {
                size: 20,
                color: theme.palette.maskColor.line
            })
        ]
    });
});
const ChooseNetworkModal = /*#__PURE__*/ (0,react.memo)(function ChooseNetworkModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = ChooseNetworkModal_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const network = (0,useNetwork/* useNetwork */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const action = /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        fullWidth: true,
        onClick: ()=>navigate(Routes/* PopupRoutes */.mZ.NetworkManagement),
        children: t.manage_network()
    });
    const currentNetworkId = network?.ID;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.network(),
        action: action,
        keepMounted: true,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: classes.networkList,
            children: networks.map((network)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkItem, {
                    currentNetworkId: currentNetworkId,
                    network: network
                }, network.ID))
        })
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/mask/popups/components/ConnectSocialAccounts/index.tsx
var ConnectSocialAccounts = __webpack_require__(86329);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useSupportSocialNetworks.ts
var useSupportSocialNetworks = __webpack_require__(11929);
// EXTERNAL MODULE: ./packages/mask/shared/definitions/event.ts
var definitions_event = __webpack_require__(30218);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ConnectSocialAccountModal/index.tsx












const ConnectSocialAccountModal = /*#__PURE__*/ (0,react.memo)(function ConnectSocialAccountModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { value: definedSocialNetworks = src_constants/* EMPTY_LIST */.rP } = (0,useSupportSocialNetworks/* useSupportSocialNetworks */.T)();
    const { currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const handleConnect = (0,react.useCallback)(async (networkIdentifier)=>{
        if (!currentPersona) return;
        await service/* default */.ZP.SiteAdaptor.connectSite(currentPersona.identifier, networkIdentifier, undefined);
        const eventID = definitions_event/* EventMap */.j[networkIdentifier];
        if (eventID) providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, eventID);
    }, [
        currentPersona
    ]);
    if (!definedSocialNetworks.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_connect_social_account(),
        keepMounted: true,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialAccounts/* ConnectSocialAccounts */.L, {
            networks: definedSocialNetworks,
            onConnect: handleConnect
        })
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useWalletGroup.ts
var useWalletGroup = __webpack_require__(83272);
// EXTERNAL MODULE: ./packages/mask/popups/components/WalletItem/index.tsx
var WalletItem = __webpack_require__(22964);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/WalletGroupModal/index.tsx














const WalletGroupModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            marginTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            rowGap: theme.spacing(1.5)
        },
        title: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            marginBottom: theme.spacing(1.5)
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 6
        }
    }));
const WalletGroupModal = /*#__PURE__*/ (0,react.memo)(function WalletGroupModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = WalletGroupModal_useStyles();
    const walletGroup = (0,useWalletGroup/* useWalletGroup */.j)();
    const currentWallet = (0,useWallet/* useWallet */.O)();
    const { smartPayChainId } = usePopupContext/* PopupContext */.t.useContainer();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { closeModal } = (0,ActionModalContext/* useActionModal */.mO)();
    const handleSelect = (0,react.useCallback)(async (wallet)=>{
        const address = wallet.address;
        await entry/* Web3 */.Bv.connect({
            account: address,
            chainId: wallet.owner && smartPayChainId ? smartPayChainId : chainId,
            providerType: types/* ProviderType */.lP.MaskWallet,
            owner: wallet.owner,
            identifier: ec_key/* ECKeyIdentifier */.o.from(wallet.identifier).unwrapOr(undefined)
        });
        closeModal();
        if (wallet.owner && smartPayChainId) {
            const network = networks.find((x)=>x.chainId === smartPayChainId);
            if (network) await Network?.switchNetwork(network.ID);
            await entry/* Web3 */.Bv.switchChain?.(smartPayChainId, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
        }
    }, [
        smartPayChainId,
        chainId,
        closeModal,
        Network,
        networks
    ]);
    if (!walletGroup) return;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.wallet_account(),
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.root,
            children: [
                Object.entries(walletGroup.groups).map(([key, value], index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.popups_wallet_group_title({
                                    index: String(index + 1)
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.list,
                                children: value.map((wallet)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem/* WalletItem */.Z, {
                                        hiddenTag: true,
                                        wallet: wallet,
                                        isSelected: (0,isSameAddress/* isSameAddress */.W)(wallet.address, currentWallet?.address),
                                        onSelect: handleSelect
                                    }, wallet.address);
                                })
                            })
                        ]
                    }, key);
                }),
                walletGroup.imported.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: t.popups_wallet_imported_group_title()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.title,
                            children: walletGroup.imported.map((wallet)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem/* WalletItem */.Z, {
                                    wallet: wallet,
                                    isSelected: (0,isSameAddress/* isSameAddress */.W)(wallet.address, currentWallet?.address),
                                    onSelect: handleSelect
                                }, wallet.address))
                        })
                    ]
                }) : null
            ]
        })
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./packages/public-api/src/web.ts
var web = __webpack_require__(64455);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useLanguage.ts
var useLanguage = __webpack_require__(80849);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/SelectLanguageModal/index.tsx









const SelectLanguageModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        item: {
            padding: theme.spacing(1.5),
            borderRadius: 8
        },
        text: {
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '16px'
        },
        radio: {
            padding: 0
        }
    }));
const SelectLanguageModal = /*#__PURE__*/ (0,react.memo)(function SelectLanguageModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = SelectLanguageModal_useStyles();
    const lang = (0,useLanguage/* useLanguage */.Z)();
    const handleLanguageChange = (0,react.useCallback)(async (target)=>{
        await service/* default */.ZP.Settings.setLanguage(target);
    }, []);
    const LANGUAGE_OPTIONS_MAP = (0,react.useMemo)(()=>({
            [web/* LanguageOptions */.P7.__auto__]: t.popups_settings_language_auto(),
            [web/* LanguageOptions */.P7.enUS]: 'English',
            [web/* LanguageOptions */.P7.zhCN]: '简体中文',
            [web/* LanguageOptions */.P7.zhTW]: '繁体中文',
            [web/* LanguageOptions */.P7.jaJP]: '日本語',
            [web/* LanguageOptions */.P7.koKR]: '한국어'
        }), [
        t
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_settings_select_language(),
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: (0,esm/* getEnumAsArray */.Yl)(web/* LanguageOptions */.P7).map((x)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                    className: classes.item,
                    onClick: ()=>handleLanguageChange(x.value),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            classes: {
                                primary: classes.text
                            },
                            primary: LANGUAGE_OPTIONS_MAP[x.value]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                            className: classes.radio,
                            checked: lang === x.value
                        })
                    ]
                }, x.key);
            })
        })
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/SelectAppearanceModal/index.tsx










const SelectAppearanceModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        item: {
            padding: theme.spacing(1.5),
            borderRadius: 8
        },
        icon: {
            minWidth: 24,
            height: 16,
            color: theme.palette.maskColor.main,
            '& > *': {
                width: 16,
                height: 16
            }
        },
        text: {
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '16px'
        },
        radio: {
            padding: 0
        }
    }));
const APPEARANCE_ICON_MAP = {
    [web/* Appearance */.um.default]: null,
    [web/* Appearance */.um.light]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Sun, {}),
    [web/* Appearance */.um.dark]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Dark, {})
};
const SelectAppearanceModal = /*#__PURE__*/ (0,react.memo)(function SelectAppearanceModal() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = SelectAppearanceModal_useStyles();
    const mode = (0,useAppearance/* useAppearance */.M)();
    const APPEARANCE_OPTIONS_MAP = (0,react.useMemo)(()=>({
            [web/* Appearance */.um.default]: t.popups_settings_appearance_default(),
            [web/* Appearance */.um.light]: t.popups_settings_appearance_light(),
            [web/* Appearance */.um.dark]: t.popups_settings_appearance_dark()
        }), [
        t
    ]);
    const handleAppearanceChange = (0,react.useCallback)(async (target)=>{
        await service/* default */.ZP.Settings.setTheme(target);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_settings_appearance(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: (0,esm/* getEnumAsArray */.Yl)(web/* Appearance */.um).map((x)=>{
                const icon = APPEARANCE_ICON_MAP[x.value];
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                    className: classes.item,
                    onClick: ()=>handleAppearanceChange(x.value),
                    children: [
                        icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                            className: classes.icon,
                            children: icon
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            classes: {
                                primary: classes.text
                            },
                            primary: APPEARANCE_OPTIONS_MAP[x.value]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                            className: classes.radio,
                            checked: mode === x.value
                        })
                    ]
                }, x.key);
            })
        })
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/Switch.js
var Switch = __webpack_require__(14722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useSupportedSites.ts
var useSupportedSites = __webpack_require__(67373);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var shared_src_constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/SupportedSitesModal/index.tsx












const SupportedSitesModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        description: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.third,
            lineHeight: '18px'
        },
        list: {
            marginTop: theme.spacing(2),
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            rowGap: theme.spacing(1)
        },
        item: {
            padding: '5px 12px'
        },
        name: {
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            fontSize: 12,
            lineHeight: '16px'
        },
        icon: {
            minWidth: 32
        }
    }));
const SupportedSitesModal = /*#__PURE__*/ (0,react.memo)(function SupportedSitesModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = SupportedSitesModal_useStyles();
    const { data = src_constants/* EMPTY_LIST */.rP, isLoading, refetch } = (0,useSupportedSites/* useSupportedSites */.G)();
    const handleSwitch = (0,react.useCallback)(async ({ allowInject, hasPermission, networkIdentifier })=>{
        if (!hasPermission) {
            const result = await service/* default */.ZP.SiteAdaptor.requestPermissionBySite(networkIdentifier);
            if (!result) return;
        }
        await service/* default */.ZP.Settings.setInjectSwitchSetting(networkIdentifier, !allowInject);
        await refetch();
    }, [
        settings/* InjectSwitchSettings */.Fw,
        refetch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionModal, {
        header: t.popups_settings_supported_sites(),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: t.popups_settings_supported_sites_description()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                children: !isLoading && data ? data?.map((x)=>{
                    const Icon = shared_src_constants/* SOCIAL_MEDIA_ROUND_ICON_MAPPING */.hA[x.networkIdentifier];
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                        className: classes.item,
                        onClick: ()=>handleSwitch({
                                ...x,
                                networkIdentifier: x.networkIdentifier
                            }),
                        children: [
                            Icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                className: classes.icon,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                    size: 24,
                                    style: {
                                        filter: constants/* SOCIAL_MEDIA_ICON_FILTER_COLOR */.VB[x.networkIdentifier],
                                        backdropFilter: 'blur(8px)',
                                        borderRadius: 99
                                    }
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                classes: {
                                    primary: classes.name
                                },
                                primary: src_constants/* SOCIAL_MEDIA_NAME */.OZ[x.networkIdentifier]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                                checked: !!x.hasPermission && !!x.allowInject
                            })
                        ]
                    }, x.networkIdentifier);
                }) : (0,range/* default */.Z)(5).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.item,
                        style: {
                            height: 48
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                className: classes.icon,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                    variant: "circular",
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                    width: 100
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                width: 40
                            })
                        ]
                    }, i))
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var dist_index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(28181);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ChangeBackupPasswordModal/index.tsx












const ChangeBackupPasswordModal = /*#__PURE__*/ (0,react.memo)(function ChangeBackupPasswordModal(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { user, updateUser } = useUserContext/* UserContext */.S.useContainer();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { control, handleSubmit, formState: { errors, isValid, isSubmitting, isDirty } } = (0,dist_index_esm/* useForm */.cI)({
        mode: 'onBlur',
        defaultValues: {
            oldPassword: '',
            newPassword: '',
            repeatPassword: ''
        },
        context: {
            user
        },
        resolver: (0,zod/* zodResolver */.F)(lib.z.object({
            oldPassword: lib.z.string().min(8).max(20).refine((oldPassword)=>oldPassword === user.backupPassword, t.popups_backup_password_incorrect()).refine((oldPassword)=>constants/* MATCH_PASSWORD_RE */.wV.test(oldPassword), t.popups_settings_backup_password_invalid()),
            newPassword: lib.z.string().min(8).max(20).refine((newPassword)=>constants/* MATCH_PASSWORD_RE */.wV.test(newPassword), t.popups_settings_backup_password_invalid()),
            repeatPassword: lib.z.string().min(8).max(20).refine((repeatPassword)=>constants/* MATCH_PASSWORD_RE */.wV.test(repeatPassword), t.popups_settings_backup_password_invalid())
        }).refine((data)=>data.newPassword !== data.oldPassword, {
            message: t.popups_settings_new_backup_password_error_tips(),
            path: [
                'newPassword'
            ]
        }).refine((data)=>data.newPassword === data.repeatPassword, {
            message: t.popups_backup_password_inconsistency(),
            path: [
                'repeatPassword'
            ]
        }))
    });
    const handleFormSubmit = (0,react.useCallback)((data)=>{
        updateUser({
            backupPassword: data.newPassword
        });
        showSnackbar(t.popups_backup_password_set_successfully());
        navigate(-1);
    }, [
        handleSubmit,
        updateUser,
        showSnackbar
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.popups_settings_change_backup_password(),
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            onClick: handleSubmit(handleFormSubmit),
            loading: isSubmitting,
            disabled: !isDirty || !isValid,
            children: t.confirm()
        }),
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            component: "form",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 2,
            py: 1,
            px: 0.25,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist_index_esm/* Controller */.Qr, {
                    control: control,
                    render: ({ field })=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                            ...field,
                            placeholder: t.password(),
                            autoFocus: true,
                            error: errors.oldPassword?.type !== 'too_small' && errors.oldPassword?.type !== 'too_big' ? !!errors.oldPassword?.message : false,
                            helperText: errors.oldPassword?.type !== 'too_small' && errors.oldPassword?.type !== 'too_big' ? errors.oldPassword?.message : ''
                        });
                    },
                    name: "oldPassword"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist_index_esm/* Controller */.Qr, {
                    control: control,
                    name: "newPassword",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                            ...field,
                            placeholder: t.popups_settings_new_backup_password(),
                            error: errors.newPassword?.type !== 'too_small' && errors.newPassword?.type !== 'too_big' ? !!errors.newPassword?.message : false,
                            helperText: errors.newPassword?.type !== 'too_small' && errors.newPassword?.type !== 'too_big' ? errors.newPassword?.message : ''
                        })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist_index_esm/* Controller */.Qr, {
                    control: control,
                    name: "repeatPassword",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                            ...field,
                            placeholder: t.reenter(),
                            error: errors.repeatPassword?.type !== 'too_small' && errors.repeatPassword?.type !== 'too_big' ? !!errors.repeatPassword?.message : false,
                            helperText: errors.repeatPassword?.type !== 'too_small' && errors.repeatPassword?.type !== 'too_big' ? errors.repeatPassword?.message : ''
                        })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontSize: 12,
                    color: theme.palette.maskColor.second,
                    children: t.popups_backup_password_rules_tips()
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/components/BottomDrawer/index.tsx





const BottomDrawer_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            padding: theme.spacing(2.25),
            borderRadius: '24px 24px 0 0',
            background: theme.palette.maskColor.bottom
        },
        root: {
            [`& .${backdropClasses/* default */.Z.root}`]: {
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.10)' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), rgba(28, 104, 243, 0.20)',
                backdropFilter: 'blur(5px)'
            }
        },
        header: {
            display: 'flex',
            width: '100%',
            textAlign: 'center',
            position: 'relative'
        },
        title: {
            fontSize: 24,
            lineHeight: '120%',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            flex: 1,
            paddingTop: theme.spacing(3),
            paddingLeft: 0,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        closeButton: {
            position: 'absolute',
            right: 0,
            top: '0'
        }
    }));
const BottomDrawer = /*#__PURE__*/ (0,react.memo)(function BottomDrawer({ open, onClose, children, title, ...rest }) {
    const { classes } = BottomDrawer_useStyles(undefined, {
        props: rest
    });
    const handleClose = ()=>onClose?.();
    const everOpenRef = (0,react.useRef)(false);
    (0,react.useEffect)(()=>{
        if (open) everOpenRef.current = true;
    }, [
        open
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Drawer/* default */.ZP, {
        anchor: "bottom",
        onClose: handleClose,
        open: open,
        classes: {
            paper: classes.paper,
            root: classes.root
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                        title: title,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                        className: classes.closeButton,
                        size: 24,
                        onClick: handleClose
                    })
                ]
            }),
            open || everOpenRef.current ? children : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ConfirmModal/index.tsx







const ConfirmModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        message: {
            fontSize: 14,
            color: theme.palette.maskColor.third,
            fontWeight: 700,
            lineHeight: '18px',
            padding: theme.spacing(1.5, 0, 2),
            textAlign: 'center'
        },
        button: {
            marginTop: theme.spacing(2)
        }
    }));
function ConfirmDrawer({ message, buttonLabel, onConfirm, ...rest }) {
    const { classes } = ConfirmModal_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.message,
                children: message
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                className: classes.button,
                onClick: onConfirm,
                children: buttonLabel || t.confirm()
            })
        ]
    });
}
const ConfirmModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: '',
        message: ''
    });
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDrawer, {
        open: open,
        ...props,
        onClose: ()=>dispatch?.close(false),
        onConfirm: ()=>dispatch?.close(true)
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var Components_TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/buttonClasses.js
var buttonClasses = __webpack_require__(80843);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmojiAvatar/index.tsx
var EmojiAvatar = __webpack_require__(49190);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(88012);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContacts.ts
var useContacts = __webpack_require__(57131);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/AddContactModal/index.tsx
















const AddContactModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            flex: 1
        },
        secondaryButton: {
            backgroundColor: theme.palette.maskColor.thirdMain,
            color: theme.palette.maskColor.main,
            border: 'none!important',
            ['&:hover']: {
                background: theme.palette.maskColor.thirdMain,
                boxShadow: `0px 8px 25px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.thirdMain, 0.1)}`,
                border: 'none'
            },
            [`&.${buttonClasses/* default */.Z.disabled}`]: {
                color: theme.palette.maskColor.main,
                background: theme.palette.maskColor.thirdMain,
                opacity: 0.4
            }
        },
        emojiAvatar: {
            margin: '28px auto 12px',
            fontSize: 32
        },
        buttonGroup: {
            marginTop: theme.spacing(3),
            display: 'flex',
            columnGap: 12
        },
        input: {
            marginTop: 12
        },
        helperText: {
            color: theme.palette.maskColor.danger,
            marginTop: 12
        }
    }));
function AddContactDrawer({ onConfirm, address, name, setName, setAddress, ...rest }) {
    const { classes, cx } = AddContactModal_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const contacts = (0,useContacts/* useContacts */.g)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const addressError = Boolean(address) && !(0,helpers_address/* isValidAddress */.At)(address);
    const nameExistError = Boolean(contacts?.find((contact)=>contact.name === name) || wallets.find((wallet)=>wallet.name === name));
    const addressExistError = (0,react.useMemo)(()=>contacts.some((contact)=>(0,isSameAddress/* isSameAddress */.W)(address, contact.address)), [
        contacts,
        address
    ]);
    const [{ loading }, addContact] = (0,useAsyncFn/* default */.Z)(async ()=>{
        await entry/* Web3State */.SC.state.AddressBook?.addContact({
            name,
            address
        });
        showSnackbar(t.wallet_add_contact_successfully());
        onConfirm?.();
    }, [
        name,
        address,
        onConfirm,
        t
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (addressError) return t.wallets_transfer_error_invalid_address();
        if (nameExistError) return t.wallets_transfer_contact_wallet_name_already_exist();
        if (addressExistError) return t.popups_wallet_settings_address_exists();
        return '';
    }, [
        t,
        addressError,
        nameExistError,
        addressExistError
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EmojiAvatar/* EmojiAvatar */.e, {
                value: address,
                className: classes.emojiAvatar,
                sx: {
                    width: 60,
                    height: 60
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_TextField/* MaskTextField */.F, {
                spellCheck: false,
                placeholder: t.name(),
                className: classes.input,
                value: name,
                onChange: (ev)=>{
                    if (name.length > 18) return;
                    setName(ev.target.value);
                },
                error: nameExistError,
                autoFocus: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_TextField/* MaskTextField */.F, {
                spellCheck: false,
                placeholder: t.address(),
                wrapperProps: {
                    className: classes.input
                },
                value: address,
                onChange: (ev)=>setAddress(ev.target.value),
                error: addressError || addressExistError,
                InputProps: {
                    endAdornment: addressError || addressExistError ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                        position: "end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            onClick: ()=>setAddress(''),
                            edge: "end",
                            size: "small",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                                size: 18,
                                color: theme.palette.maskColor.danger
                            })
                        })
                    }) : null
                }
            }),
            validationMessage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.helperText,
                children: validationMessage
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.buttonGroup,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: cx(classes.button, classes.secondaryButton),
                        onClick: rest.onClose,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        loading: loading,
                        onClick: addContact,
                        className: classes.button,
                        disabled: addressError || nameExistError || addressExistError || !name.trim() || !address,
                        children: t.confirm()
                    })
                ]
            })
        ]
    });
}
const AddContactModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: '',
        address: '',
        name: ''
    });
    const setAddress = (0,react.useCallback)((address)=>setProps({
            ...props,
            address
        }), [
        props
    ]);
    const setName = (0,react.useCallback)((name)=>setProps({
            ...props,
            name
        }), [
        props
    ]);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AddContactDrawer, {
        open: open,
        ...props,
        setAddress: setAddress,
        setName: setName,
        onClose: ()=>dispatch?.close(false),
        onConfirm: ()=>dispatch?.close(true)
    });
});

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/type.ts
var Wallet_type = __webpack_require__(85103);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/EditContactModal/index.tsx
















const EditContactModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            flex: 1
        },
        secondaryButton: {
            backgroundColor: theme.palette.maskColor.thirdMain,
            color: theme.palette.maskColor.main,
            border: 'none!important',
            ['&:hover']: {
                background: theme.palette.maskColor.thirdMain,
                boxShadow: `0px 8px 25px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.thirdMain, 0.1)}`,
                border: 'none'
            },
            [`&.${buttonClasses/* default */.Z.disabled}`]: {
                color: theme.palette.maskColor.main,
                background: theme.palette.maskColor.thirdMain,
                opacity: 0.4
            }
        },
        emojiAvatar: {
            margin: '28px auto 12px',
            fontSize: 32
        },
        buttonGroup: {
            marginTop: theme.spacing(3),
            display: 'flex',
            columnGap: 12
        },
        input: {
            marginTop: 12,
            background: 'transparent'
        },
        inputRoot: {
            background: 'transparent',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 700,
            color: theme.palette.maskColor.third,
            height: 30,
            caretColor: theme.palette.maskColor.primary,
            border: 'none',
            outline: 'none',
            '&.Mui-focused': {
                border: 'none',
                outline: 'none'
            },
            '& .MuiInputBase-input': {
                textAlign: 'center'
            }
        },
        helperText: {
            color: theme.palette.maskColor.danger,
            marginTop: 12
        },
        address: {
            textAlign: 'center',
            color: theme.palette.maskColor.second,
            marginTop: 12,
            fontSize: 16
        },
        inputWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
        }
    }));
function EditContactDrawer({ onConfirm, address, name, setName, type, ...rest }) {
    const { classes, cx } = EditContactModal_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const contacts = (0,useContacts/* useContacts */.g)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const nameAlreadyExist = Boolean(contacts?.find((contact)=>contact.name === name && !(0,isSameAddress/* isSameAddress */.W)(contact.address, address)) || wallets?.find((wallet)=>wallet.name === name));
    const validationMessage = (0,react.useMemo)(()=>{
        if (nameAlreadyExist) return t.wallets_transfer_contact_wallet_name_already_exist();
        return '';
    }, [
        t,
        nameAlreadyExist
    ]);
    const [{ loading }, edit] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const _name = name.trim();
        if (type === Wallet_type/* ContactType */.uC.Recipient) {
            await entry/* Web3State */.SC.state.AddressBook?.renameContact({
                name: _name,
                address
            });
        } else if (type === Wallet_type/* ContactType */.uC.Owned) {
            await entry/* Web3 */.Bv.renameWallet?.(address, _name, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
        }
        showSnackbar(t.wallet_edit_contact_successfully());
        onConfirm?.();
    }, [
        name,
        address,
        type,
        onConfirm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EmojiAvatar/* EmojiAvatar */.e, {
                value: address,
                className: classes.emojiAvatar,
                sx: {
                    width: 60,
                    height: 60
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.inputWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_TextField/* MaskTextField */.F, {
                    variant: "standard",
                    autoFocus: true,
                    inputProps: {
                        style: {
                            textAlign: 'center'
                        }
                    },
                    classes: {
                        root: classes.inputRoot
                    },
                    spellCheck: false,
                    placeholder: t.name(),
                    className: classes.input,
                    value: name,
                    onChange: (ev)=>{
                        if (name.length > 18) return;
                        setName(ev.target.value);
                    },
                    error: nameAlreadyExist
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.address,
                children: (0,formatter/* formatEthereumAddress */.j8)(address, 4)
            }),
            validationMessage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.helperText,
                children: validationMessage
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.buttonGroup,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: cx(classes.button, classes.secondaryButton),
                        onClick: rest.onClose,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        onClick: edit,
                        loading: loading,
                        className: classes.button,
                        disabled: nameAlreadyExist || !name.trim(),
                        children: t.confirm()
                    })
                ]
            })
        ]
    });
}
const EditContactModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: '',
        address: '',
        name: '',
        type: undefined
    });
    const setName = (0,react.useCallback)((name)=>setProps({
            ...props,
            name
        }), [
        props
    ]);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EditContactDrawer, {
        open: open,
        ...props,
        setName: setName,
        onClose: ()=>dispatch?.close(false),
        onConfirm: ()=>dispatch?.close(true)
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/DeleteContactModal/index.tsx













const DeleteContactModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            flex: 1
        },
        secondaryButton: {
            backgroundColor: theme.palette.maskColor.thirdMain,
            color: theme.palette.maskColor.main,
            border: 'none!important',
            ['&:hover']: {
                background: theme.palette.maskColor.thirdMain,
                boxShadow: `0px 8px 25px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.thirdMain, 0.1)}`,
                border: 'none'
            },
            [`&.${buttonClasses/* default */.Z.disabled}`]: {
                color: theme.palette.maskColor.main,
                background: theme.palette.maskColor.thirdMain,
                opacity: 0.4
            }
        },
        emojiAvatar: {
            margin: '28px auto 12px',
            fontSize: 32
        },
        buttonGroup: {
            marginTop: theme.spacing(3),
            display: 'flex',
            columnGap: 12
        },
        address: {
            textAlign: 'center',
            color: theme.palette.maskColor.second,
            marginTop: 12,
            fontSize: 16
        },
        name: {
            textAlign: 'center',
            color: theme.palette.maskColor.main,
            marginTop: 12,
            fontSize: 18,
            fontWeight: 700,
            maxWidth: 300,
            margin: 'auto',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    }));
function DeleteContactDrawer({ onConfirm, address, name, ...rest }) {
    const { classes, cx } = DeleteContactModal_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [{ loading }, deleteContact] = (0,useAsyncFn/* default */.Z)(async ()=>{
        await entry/* Web3State */.SC.state.AddressBook?.removeContact(address);
        showSnackbar(t.wallet_delete_contact_successfully());
        onConfirm?.();
    }, [
        address,
        onConfirm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EmojiAvatar/* EmojiAvatar */.e, {
                value: address,
                className: classes.emojiAvatar,
                sx: {
                    width: 60,
                    height: 60
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.name,
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.address,
                children: (0,formatter/* formatEthereumAddress */.j8)(address, 4)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.buttonGroup,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: cx(classes.button, classes.secondaryButton),
                        onClick: rest.onClose,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        onClick: deleteContact,
                        loading: loading,
                        className: classes.button,
                        color: "error",
                        children: t.wallet_delete_contact()
                    })
                ]
            })
        ]
    });
}
const DeleteContactModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: '',
        address: '',
        name: ''
    });
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteContactDrawer, {
        open: open,
        ...props,
        onClose: ()=>dispatch?.close(false),
        onConfirm: ()=>dispatch?.close(true)
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/WalletRenameModal/index.tsx












function WalletRenameDrawer({ wallet, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const [name, setName] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const contacts = (0,useContacts/* useContacts */.g)();
    const [{ loading }, handleClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!name || !wallet) return;
        const _name = name.trim();
        if (_name.length > 18 || _name.length < 3) {
            setError(t.popups_wallet_settings_rename_tips());
            return;
        }
        const nameExists = contacts.some((x)=>x.name === _name);
        if (nameExists) {
            setError(t.popups_wallet_settings_name_exists());
            return;
        }
        try {
            await entry/* Web3 */.Bv?.renameWallet?.(wallet.address, _name, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
            setName('');
            rest.onClose?.();
        } catch (error) {
            setError(error.message);
            return;
        }
    }, [
        name,
        wallet?.address,
        contacts
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.maskColor.third,
                sx: {
                    marginTop: '12px'
                },
                children: t.popups_wallet_settings_rename_tips()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "center",
                mx: 0.5,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    sx: {
                        mt: 2
                    },
                    fullWidth: true,
                    autoFocus: true,
                    placeholder: wallet?.name,
                    error: !!error,
                    value: name,
                    onChange: (e)=>{
                        setName(e.target.value);
                        setError('');
                    },
                    InputProps: {
                        endAdornment: name.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupClose, {
                            onClick: ()=>{
                                setName('');
                                setError('');
                            },
                            size: 18,
                            color: error ? theme.palette.maskColor.danger : undefined
                        }) : null,
                        disableUnderline: true
                    }
                })
            }),
            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 14,
                color: theme.palette.maskColor.danger,
                mt: 1,
                children: error
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: loading,
                disabled: loading || !name.length || !!error,
                onClick: handleClick,
                sx: {
                    marginTop: '16px'
                },
                children: t.confirm()
            })
        ]
    });
}
const WalletRenameModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: '',
        wallet: undefined
    });
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRenameDrawer, {
        open: open,
        ...props,
        onClose: ()=>dispatch?.close(false)
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/WalletRemoveModal/index.tsx
















function WalletRemoveDrawer({ wallet, error, password, setPassword, setError, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const wallets = (0,useWallets/* useWallets */.r)();
    const [{ loading }, handleClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!password || !wallet) return;
        try {
            const verified = await service/* default */.ZP.Wallet.verifyPassword(password);
            if (!verified) {
                setError(t.create_wallet_incorrect_payment_password());
                return;
            }
            const index = wallets.findIndex((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, wallet.address));
            const remainWallets = wallets.filter((x)=>!(0,isSameAddress/* isSameAddress */.W)(x.address, wallet.address) && !(0,isSameAddress/* isSameAddress */.W)(x.owner, wallet.address));
            let nextWallet = wallets[index + 1] || wallets[0];
            if (!remainWallets.includes(nextWallet)) nextWallet = remainWallets[0];
            await entry/* Web3 */.Bv.removeWallet?.(wallet.address, password, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
            await entry/* Web3 */.Bv.connect({
                providerType: types/* ProviderType */.lP.MaskWallet,
                account: nextWallet?.address ?? ''
            });
            rest.onClose?.();
            navigate(Routes/* PopupRoutes */.mZ.Wallet, {
                replace: true
            });
        } catch (error) {
            setError(error.message);
            return;
        }
    }, [
        password,
        wallet?.address
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.maskColor.third,
                sx: {
                    marginTop: '12px'
                },
                children: t.popups_wallet_settings_are_you_sure_remove_wallet()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.maskColor.main,
                sx: {
                    marginTop: '0px'
                },
                children: wallet?.address
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "center",
                mx: 0.5,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                    sx: {
                        mt: 2
                    },
                    fullWidth: true,
                    autoFocus: true,
                    placeholder: t.popups_wallet_payment_password(),
                    error: !!error,
                    value: password,
                    onChange: (e)=>{
                        setPassword(e.target.value);
                        setError('');
                    }
                })
            }),
            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 14,
                color: theme.palette.maskColor.danger,
                mt: 1,
                children: error
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: loading,
                disabled: loading || !password.length || !!error,
                onClick: handleClick,
                color: "error",
                sx: {
                    marginTop: '16px'
                },
                children: t.remove()
            })
        ]
    });
}
const WalletRemoveModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: '',
        wallet: undefined
    });
    const [password, setPassword] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRemoveDrawer, {
        password: password,
        setPassword: setPassword,
        error: error,
        setError: setError,
        open: open,
        ...props,
        onClose: ()=>{
            setError('');
            setPassword('');
            dispatch?.close(false);
        }
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/hoursToMilliseconds/index.js
var hoursToMilliseconds = __webpack_require__(73724);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/millisecondsToMinutes/index.js
var millisecondsToMinutes = __webpack_require__(4800);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/minutesToMilliseconds/index.js
var minutesToMilliseconds = __webpack_require__(40858);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/hooks/useWalletAutoLockTime.ts
var useWalletAutoLockTime = __webpack_require__(18029);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(81770);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/WalletAutoLockSettingModal/index.tsx












const WalletAutoLockSettingModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        list: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: 16,
            gap: 12,
            alignSelf: 'stretch'
        },
        listItem: {
            padding: '8px 12px',
            borderRadius: 6,
            display: 'flex',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            height: 32,
            background: theme.palette.maskColor.thirdMain,
            flex: '1 0 0',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer'
        },
        selected: {
            color: theme.palette.maskColor.bottom,
            background: theme.palette.maskColor.main
        },
        listItemOneDay: {
            flex: 'auto',
            width: 48
        }
    }));
var OptionName;
(function(OptionName) {
    OptionName["ONE_QUARTE"] = '15';
    OptionName["TWO_QUARTE"] = '30';
    OptionName["ONE_HOUR"] = '60';
    OptionName["ONE_DAY"] = '1 Day';
    OptionName["NEVER"] = 'Never';
})(OptionName || (OptionName = {}));
const DEFAULT_MIN_AUTO_LOCKER_TIME = 1000 * 60 * 15;
// 15 minutes
const ONE_DAY_IN_MILLISECONDS = (0,hoursToMilliseconds/* default */.Z)(24);
function WalletAutoLockSettingDrawer(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes, cx } = WalletAutoLockSettingModal_useStyles();
    const { value: autoLockerTime = DEFAULT_MIN_AUTO_LOCKER_TIME } = (0,useWalletAutoLockTime/* useWalletAutoLockTime */.e)();
    const [time, setTime] = (0,react.useState)();
    const initialTime = (0,millisecondsToMinutes/* default */.Z)(autoLockerTime).toString();
    const error = Number.isNaN((0,isUndefined/* default */.Z)(time) ? initialTime : time);
    const [{ loading }, setAutoLockerTime] = (0,useAsyncFn/* default */.Z)(async (time)=>{
        await service/* default */.ZP.Wallet.setAutoLockerTime(time);
        props.onClose?.();
    }, []);
    const options = [
        {
            value: '15',
            name: OptionName.ONE_QUARTE
        },
        {
            value: '30',
            name: OptionName.TWO_QUARTE
        },
        {
            value: '60',
            name: OptionName.ONE_HOUR
        },
        {
            value: '1440',
            name: OptionName.ONE_DAY
        },
        {
            value: '',
            name: OptionName.NEVER
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.maskColor.third,
                sx: {
                    marginTop: '12px'
                },
                children: t.popups_wallet_settings_auto_lock_tips()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.list,
                children: options.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: cx(classes.listItem, option.name === OptionName.ONE_DAY ? classes.listItemOneDay : '', option.value === (time ?? initialTime) ? classes.selected : '', option.value === '' && (time ?? initialTime) === '0' ? classes.selected : '', option.value === '' && (0,minutesToMilliseconds/* default */.Z)(Number(time ?? initialTime)) > ONE_DAY_IN_MILLISECONDS ? classes.selected : ''),
                        onClick: ()=>{
                            setTime(option.value);
                        },
                        children: option.name
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                disabled: error || loading,
                loading: loading,
                sx: {
                    marginTop: '16px'
                },
                onClick: ()=>setAutoLockerTime((0,minutesToMilliseconds/* default */.Z)(Number(time ?? initialTime))),
                children: t.confirm()
            })
        ]
    });
}
const WalletAutoLockSettingModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: ''
    });
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAutoLockSettingDrawer, {
        open: open,
        ...props,
        onClose: ()=>dispatch?.close(false)
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/ChangePaymentPasswordModal/index.tsx










const ChangePaymentPasswordModal_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        title: {
            paddingLeft: 0
        }
    }));
function ChangePaymentPasswordDrawer({ oldPassword, newPassword, confirmNewPassword, setOldPassword, setNewPassword, setConfirmNewPassword, passwordNotMatch, passwordTooShort, originalPasswordWrong, setPasswordNotMatch, setPasswordTooShort, setOriginalPasswordWrong, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = ChangePaymentPasswordModal_useStyles();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [{ loading }, handleClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (newPassword !== confirmNewPassword) {
            setPasswordNotMatch(t.popups_wallet_new_password_not_match());
            return;
        }
        if ([
            oldPassword,
            newPassword,
            confirmNewPassword
        ].some((x)=>x.length < 6)) {
            setPasswordTooShort(t.popups_wallet_password_length_error());
            return;
        }
        try {
            await service/* default */.ZP.Wallet.changePassword(oldPassword, newPassword);
            showSnackbar(t.popups_wallet_password_change_successful());
            rest.onClose?.();
        } catch (error) {
            setOriginalPasswordWrong(error.message);
        }
    }, [
        oldPassword,
        newPassword,
        confirmNewPassword,
        t
    ]);
    const inputProps = {
        endAdornment: null,
        disableUnderline: true,
        inputProps: {
            maxLength: 20
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        classes: {
            title: classes.title
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.maskColor.third,
                sx: {
                    marginTop: '12px'
                },
                children: t.popups_wallet_create_payment_password_tip()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                        sx: {
                            mt: 2
                        },
                        fullWidth: true,
                        autoFocus: true,
                        placeholder: t.popups_wallet_old_payment_password(),
                        error: !!originalPasswordWrong,
                        value: oldPassword,
                        onChange: (e)=>{
                            setOldPassword(e.target.value);
                            setOriginalPasswordWrong('');
                            setPasswordTooShort('');
                        },
                        InputProps: inputProps
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                        sx: {
                            mt: 2
                        },
                        fullWidth: true,
                        placeholder: t.popups_wallet_new_payment_password(),
                        error: false,
                        value: newPassword,
                        onChange: (e)=>{
                            setNewPassword(e.target.value);
                            setPasswordNotMatch('');
                            setPasswordTooShort('');
                        },
                        InputProps: inputProps
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                        sx: {
                            mt: 2
                        },
                        fullWidth: true,
                        placeholder: t.popups_wallet_confirm_password(),
                        error: false,
                        value: confirmNewPassword,
                        onChange: (e)=>{
                            setConfirmNewPassword(e.target.value);
                            setPasswordNotMatch('');
                            setPasswordTooShort('');
                        },
                        InputProps: inputProps
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 14,
                color: theme.palette.maskColor.danger,
                mt: 1.5,
                height: 32,
                children: passwordTooShort || passwordNotMatch || originalPasswordWrong
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: loading,
                disabled: loading,
                onClick: handleClick,
                sx: {
                    marginTop: '16px'
                },
                children: t.confirm()
            })
        ]
    });
}
const ChangePaymentPasswordModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: ''
    });
    const [oldPassword, setOldPassword] = (0,react.useState)('');
    const [newPassword, setNewPassword] = (0,react.useState)('');
    const [confirmNewPassword, setConfirmNewPassword] = (0,react.useState)('');
    const [passwordNotMatch, setPasswordNotMatch] = (0,react.useState)('');
    const [passwordTooShort, setPasswordTooShort] = (0,react.useState)('');
    const [originalPasswordWrong, setOriginalPasswordWrong] = (0,react.useState)('');
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangePaymentPasswordDrawer, {
        open: open,
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
        passwordNotMatch: passwordNotMatch,
        passwordTooShort: passwordTooShort,
        originalPasswordWrong: originalPasswordWrong,
        setOldPassword: setOldPassword,
        setNewPassword: setNewPassword,
        setConfirmNewPassword: setConfirmNewPassword,
        setPasswordNotMatch: setPasswordNotMatch,
        setPasswordTooShort: setPasswordTooShort,
        setOriginalPasswordWrong: setOriginalPasswordWrong,
        ...props,
        onClose: ()=>{
            setOldPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            setPasswordNotMatch('');
            setPasswordTooShort('');
            setOriginalPasswordWrong('');
            dispatch?.close(false);
        }
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ShowPrivateKeyModal/index.tsx














function ShowPrivateKeyDrawer({ password, error, setPassword, setError, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const navigate = (0,dist/* useNavigate */.s0)();
    const [{ loading }, handleClick] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const verified = await service/* default */.ZP.Wallet.verifyPassword(password);
        if (!verified) {
            setError(t.create_wallet_incorrect_payment_password());
            return;
        }
        if (!wallet) return;
        await service/* default */.ZP.Wallet.unlockWallet(password);
        navigate(Routes/* PopupRoutes */.mZ.ExportWalletPrivateKey, {
            state: {
                password,
                hasMnemonic: wallet?.mnemonicId ?? !!await service/* default */.ZP.Wallet.exportMnemonicWords(wallet.address).catch(noop/* default */.Z)
            }
        });
        rest.onClose?.();
    }, [
        password,
        wallet
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomDrawer, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "center",
                mx: 0.5,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                    sx: {
                        mt: 2
                    },
                    fullWidth: true,
                    autoFocus: true,
                    placeholder: t.popups_wallet_payment_password(),
                    error: !!error,
                    value: password,
                    onChange: (e)=>{
                        setPassword(e.target.value);
                        setError('');
                    }
                })
            }),
            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 14,
                color: theme.palette.maskColor.danger,
                mt: 1,
                children: error
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: loading,
                disabled: loading || !!error || !password,
                onClick: handleClick,
                sx: {
                    marginTop: '16px'
                },
                children: t.confirm()
            })
        ]
    });
}
const ShowPrivateKeyModal = /*#__PURE__*/ (0,react.forwardRef)((_, ref)=>{
    const [props, setProps] = (0,react.useState)({
        title: ''
    });
    const [error, setError] = (0,react.useState)('');
    const [password, setPassword] = (0,react.useState)('');
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowPrivateKeyDrawer, {
        error: error,
        setError: setError,
        password: password,
        setPassword: setPassword,
        open: open,
        ...props,
        onClose: ()=>{
            setError('');
            setPassword('');
            dispatch?.close(false);
        }
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdSupport.ts
var useChainIdSupport = __webpack_require__(28163);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasOptions.ts
var useGasOptions = __webpack_require__(98705);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(34093);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(77821);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useGasRatio.ts
var useGasRatio = __webpack_require__(71110);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/GasSettingModal/GasSettingDialog.tsx













const GasSettingDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        title: {
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.second,
            lineHeight: '18px',
            marginBottom: theme.spacing(1.5)
        },
        unit: {
            fontSize: 14,
            color: theme.palette.maskColor.third,
            lineHeight: '18px'
        },
        seconds: {
            textAlign: 'center',
            fontSize: 14,
            color: theme.palette.maskColor.success
        },
        preview: {
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 18
        },
        tips: {
            fontSize: 14,
            lineHeight: '18px'
        }
    }));
const GasSettingDialog = /*#__PURE__*/ (0,react.memo)(function GasSettingModal({ open, chainId, onClose, replaceType, nonce, config }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = GasSettingDialog_useStyles();
    const gasRatio = (0,useGasRatio/* useGasRatio */.x)(config.paymentToken);
    const isSupport1559 = (0,useChainIdSupport/* useChainIdSupport */.U)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, 'EIP1559', chainId);
    const { data: gasOptions } = (0,useGasOptions/* useGasOptions */.o)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const nativeTokenAddress = (0,useNativeTokenAddress/* useNativeTokenAddress */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const { data: token } = (0,useFungibleToken/* useFungibleToken */.c)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, config.paymentToken ? config.paymentToken : nativeTokenAddress, undefined, {
        chainId
    });
    const { data: tokenPrice } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, config.paymentToken ? config.paymentToken : nativeTokenAddress);
    const [gasPrice = config.gasPrice || '', setGasPrice] = (0,react.useState)();
    const [maxPriorityFeePerGas = config.maxPriorityFeePerGas || '', setMaxPriorityFeePerGas] = (0,react.useState)();
    const [maxFeePerGas = config.maxFeePerGas || '', setMaxFeePerGas] = (0,react.useState)();
    const estimateSecond = (0,react.useMemo)(()=>{
        if (!gasOptions || replaceType) return;
        const target = isSupport1559 ? maxFeePerGas : gasPrice;
        if ((0,number/* isLessThan */.FI)(target, (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxFeePerGas))) {
            return gasOptions.slow.estimatedSeconds;
        } else if ((0,number/* isLessThan */.FI)(target, (0,formatter/* formatWeiToGwei */.f1)(gasOptions.fast.suggestedMaxFeePerGas))) {
            return gasOptions.normal.estimatedSeconds;
        }
        return gasOptions.fast.estimatedSeconds;
    }, [
        gasOptions,
        gasPrice,
        isSupport1559,
        maxFeePerGas,
        replaceType
    ]);
    const totalGas = (0,react.useMemo)(()=>{
        if (!config.gas) return '0';
        const result = (0,formatter/* formatGweiToWei */.nU)((isSupport1559 ? maxFeePerGas : gasPrice) || number/* ZERO */.xE).times(config.gas || number/* ZERO */.xE);
        if (!gasRatio) return (0,number/* toFixed */.FH)(result);
        return (0,number/* toFixed */.FH)(result.multipliedBy(gasRatio));
    }, [
        gasPrice,
        config.gas,
        maxFeePerGas,
        isSupport1559,
        gasRatio
    ]);
    const gasPriceError = (0,react.useMemo)(()=>{
        if (isSupport1559) return;
        if ((0,number/* isZero */.Fr)(gasPrice)) return t.popups_wallet_gas_price_should_greater_than_zero();
        if (gasOptions && (0,number/* isGreaterThan */.T1)(gasOptions.slow.suggestedMaxFeePerGas, (0,formatter/* formatGweiToWei */.nU)(gasPrice))) {
            return t.popups_wallet_gas_price_too_low();
        }
        return;
    }, [
        gasPrice,
        gasOptions,
        isSupport1559
    ]);
    const maxPriorityFeePerGasError = (0,react.useMemo)(()=>{
        if (!isSupport1559) return;
        const formattedMaxPriorityFee = (0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGas);
        if ((0,number/* isZero */.Fr)(maxPriorityFeePerGas)) {
            return t.popups_wallet_priority_fee_is_zero();
        } else if (gasOptions && (0,number/* isGreaterThan */.T1)(formattedMaxPriorityFee, new bignumber/* BigNumber */.O(gasOptions.fast.suggestedMaxPriorityFeePerGas).multipliedBy(2))) {
            return t.popups_wallet_priority_fee_is_too_high();
        } else if (gasOptions && (0,number/* isLessThan */.FI)(formattedMaxPriorityFee, gasOptions.slow.suggestedMaxPriorityFeePerGas)) {
            return t.popups_wallet_priority_fee_is_too_low();
        }
        return;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        isSupport1559
    ]);
    const maxFeePerGasError = (0,react.useMemo)(()=>{
        if (!isSupport1559) return;
        const formattedMaxPriorityFee = (0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGas);
        const formattedMaxFee = (0,formatter/* formatGweiToWei */.nU)(maxFeePerGas);
        const miniumMaxFeePerGas = formattedMaxPriorityFee.plus(gasOptions?.fast.baseFeePerGas ?? 0);
        if (formattedMaxPriorityFee.isZero()) return;
        if ((0,number/* isGreaterThan */.T1)(miniumMaxFeePerGas, formattedMaxFee)) {
            return t.popups_wallet_max_fee_is_too_low({
                minimum: (0,formatter/* formatWeiToGwei */.f1)(miniumMaxFeePerGas).toFixed(2, bignumber/* BigNumber */.O.ROUND_UP)
            });
        }
        return;
    }, [
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasOptions?.fast,
        isSupport1559
    ]);
    const disabled = (0,react.useMemo)(()=>{
        if (isSupport1559) {
            return !maxPriorityFeePerGas || !maxFeePerGas || (0,number/* isZero */.Fr)(maxPriorityFeePerGas) || !!maxFeePerGasError;
        } else {
            return !gasPrice || (0,number/* isZero */.Fr)(gasPrice);
        }
    }, [
        maxPriorityFeePerGas,
        maxFeePerGas,
        gasOptions,
        isSupport1559,
        maxFeePerGasError,
        gasPrice
    ]);
    const error = gasPriceError || maxPriorityFeePerGasError || maxFeePerGasError;
    const tips = (0,react.useMemo)(()=>{
        switch(replaceType){
            case Wallet_type/* ReplaceType */.uM.CANCEL:
                return t.popups_wallet_cancel_transaction_tips();
            case Wallet_type/* ReplaceType */.uM.SPEED_UP:
                return t.popups_wallet_speed_up_transaction_tips();
            default:
                return;
        }
    }, [
        replaceType
    ]);
    const handleConfirm = (0,react.useCallback)(()=>{
        onClose(isSupport1559 ? {
            gasOptionType: specs/* GasOptionType */.Qd.CUSTOM,
            gas: config.gas,
            maxFeePerGas: (0,formatter/* formatGweiToWei */.nU)(maxFeePerGas).toFixed(),
            maxPriorityFeePerGas: (0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGas).toFixed()
        } : {
            gasPrice: (0,formatter/* formatGweiToWei */.nU)(gasPrice).toFixed(),
            gas: config.gas,
            gasOptionType: specs/* GasOptionType */.Qd.CUSTOM
        });
    }, [
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        isSupport1559,
        onClose,
        config
    ]);
    (0,react.useEffect)(()=>{
        if (!open || !gasOptions || config.gasPrice || config.maxFeePerGas && config.maxPriorityFeePerGas) return;
        // Set default value
        if (!isSupport1559) {
            const result = replaceType && config.gasPrice ? (0,formatter/* formatWeiToGwei */.f1)(config.gasPrice).plus(5) : (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxFeePerGas);
            setGasPrice(result.toFixed(2));
        } else {
            const maxPriorityFeePerGas = replaceType && config.maxPriorityFeePerGas ? (0,formatter/* formatWeiToGwei */.f1)(config.maxPriorityFeePerGas).plus(5) : (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxPriorityFeePerGas);
            const maxFeePerGas = replaceType && config.maxFeePerGas ? (0,formatter/* formatWeiToGwei */.f1)(config.maxFeePerGas).plus(5) : (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxFeePerGas);
            setMaxPriorityFeePerGas(maxPriorityFeePerGas.toFixed(2));
            setMaxFeePerGas(maxFeePerGas.toFixed(2));
        }
    }, [
        open,
        isSupport1559,
        gasOptions,
        replaceType,
        config
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        rowGap: 1.5,
        mt: 1.5,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.preview,
                children: [
                    (0,formatBalance/* formatBalance */.a)(totalGas, token?.decimals, 4, false, true, 6),
                    " ",
                    token?.symbol,
                    " ≈",
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                        value: (0,formatter/* formatWeiToEther */.yp)(totalGas).times(tokenPrice ?? 0),
                        formatter: formatCurrency/* formatCurrency */.x,
                        options: {
                            onlyRemainTwoOrZeroDecimal: false,
                            customDecimalConfig: {
                                boundary: (0,number/* scale10 */.SI)(1, -4),
                                decimalExp: 4
                            }
                        }
                    })
                ]
            }),
            tips ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tips,
                sx: {
                    color: replaceType === Wallet_type/* ReplaceType */.uM.CANCEL ? theme.palette.maskColor.danger : theme.palette.maskColor.warn
                },
                children: tips
            }) : null,
            estimateSecond && !replaceType ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.seconds,
                children: /* @ts-expect-error https://github.com/Jack-Works/i18n-codegen/issues/10 */ t.popups_wallet_gas_price_estimate_second({
                    seconds: String(estimateSecond)
                })
            }) : null,
            gasOptions?.normal.baseFeePerGas && isSupport1559 && (!error || !replaceType) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "info",
                children: t.popups_wallet_gas_price_current_base_fee({
                    baseFee: (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.baseFeePerGas).toFixed(2, bignumber/* BigNumber */.O.ROUND_UP)
                })
            }) : null,
            isSupport1559 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: replaceType ? t.nonce() : t.popups_wallet_gas_fee_settings_gas_limit()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                value: (0,number/* toFixed */.FH)(replaceType ? nonce : config.gas, 0),
                                disabled: true,
                                fullWidth: true,
                                InputProps: {
                                    disableUnderline: true,
                                    type: 'number'
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.title,
                                        children: t.popups_wallet_gas_fee_settings_max_priority_fee()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                        error: !!maxPriorityFeePerGasError,
                                        value: maxPriorityFeePerGas,
                                        onChange: (e)=>{
                                            if (!e.target.value) {
                                                setMaxPriorityFeePerGas('');
                                                setMaxFeePerGas((0,formatter/* formatWeiToGwei */.f1)(gasOptions?.slow.baseFeePerGas ?? 0).toFixed(2));
                                                return;
                                            }
                                            if ((0,number/* isLessThan */.FI)(e.target.value, (0,formatter/* formatWeiToGwei */.f1)(gasOptions?.slow.suggestedMaxPriorityFeePerGas ?? 0)) && !!replaceType || !(0,number/* isPositive */.xP)(e.target.value)) {
                                                return;
                                            }
                                            setMaxPriorityFeePerGas(e.target.value);
                                            setMaxFeePerGas((0,formatter/* formatWeiToGwei */.f1)(gasOptions?.slow.baseFeePerGas ?? 0).plus(e.target.value).toFixed(2, bignumber/* BigNumber */.O.ROUND_UP));
                                        },
                                        InputProps: {
                                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.unit,
                                                children: t.gwei()
                                            }),
                                            disableUnderline: true,
                                            inputProps: {
                                                min: 0,
                                                type: 'number'
                                            }
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.title,
                                        children: t.popups_wallet_gas_fee_settings_max_fee()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                        error: !!maxFeePerGasError,
                                        onChange: (e)=>{
                                            if (!e.target.value) {
                                                setMaxFeePerGas('');
                                                return;
                                            }
                                            if ((0,number/* isLessThan */.FI)(e.target.value, (0,formatter/* formatWeiToGwei */.f1)(gasOptions?.slow.baseFeePerGas ?? 0).plus(maxPriorityFeePerGas)) && !!replaceType || !(0,number/* isPositive */.xP)(e.target.value)) return;
                                            setMaxFeePerGas(e.target.value || '0');
                                        },
                                        value: maxFeePerGas,
                                        InputProps: {
                                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.unit,
                                                children: t.gwei()
                                            }),
                                            disableUnderline: true,
                                            type: 'number',
                                            inputProps: {
                                                min: 0
                                            }
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                columnGap: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.popups_wallet_gas_price()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                error: !!gasPriceError,
                                value: gasPrice,
                                onChange: (e)=>{
                                    if (!e.target.value) {
                                        setGasPrice('');
                                        return;
                                    }
                                    if ((0,number/* isLessThan */.FI)(e.target.value, (0,formatter/* formatWeiToGwei */.f1)(gasOptions?.slow.suggestedMaxFeePerGas ?? 0)) && !!replaceType || !(0,number/* isPositive */.xP)(e.target.value)) {
                                        return;
                                    }
                                    setGasPrice(e.target.value || '0');
                                },
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.unit,
                                        children: t.gwei()
                                    }),
                                    disableUnderline: true,
                                    type: 'number',
                                    inputProps: {
                                        min: 0
                                    }
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: replaceType ? t.nonce() : t.popups_wallet_gas_fee_settings_gas_limit()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                value: (0,number/* toFixed */.FH)(replaceType ? nonce : config.gas, 0),
                                disabled: true,
                                fullWidth: true,
                                InputProps: {
                                    disableUnderline: true,
                                    type: 'number'
                                }
                            })
                        ]
                    })
                ]
            }),
            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "error",
                children: error
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                onClick: handleConfirm,
                disabled: disabled,
                children: t.confirm()
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/modals/GasSettingModal/index.tsx







const initGasSetting = {
    gas: ''
};
const GasSettingModal = /*#__PURE__*/ (0,react.forwardRef)(function GasSettingModal(_, ref) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [chainId, setChainId] = (0,react.useState)();
    const [replaceType, setReplaceType] = (0,react.useState)();
    const [gasConfig = initGasSetting, setGasConfig] = (0,react.useState)();
    const [nonce, setNonce] = (0,react.useState)('');
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setChainId(props.chainId);
            setReplaceType(props.replaceType);
            setGasConfig(props.config);
            setNonce(props.nonce ?? '');
        }
    });
    const title = (0,react.useMemo)(()=>{
        switch(replaceType){
            case Wallet_type/* ReplaceType */.uM.CANCEL:
                return t.cancel();
            case Wallet_type/* ReplaceType */.uM.SPEED_UP:
                return t.speed_up();
            default:
                return t.popups_wallet_gas_fee();
        }
    }, [
        replaceType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomDrawer, {
        open: open,
        title: title,
        onClose: ()=>dispatch?.close(undefined),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingDialog, {
            nonce: nonce,
            onClose: (config)=>dispatch?.close(config),
            open: open,
            chainId: chainId,
            replaceType: replaceType,
            config: gasConfig
        })
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/components/TokenPicker/index.tsx + 1 modules
var TokenPicker = __webpack_require__(79798);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/ChooseToken/index.tsx





const ChooseTokenDrawer = /*#__PURE__*/ (0,react.memo)(function ChooseTokenDrawer({ title, open, onClose, ...others }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomDrawer, {
        title: title,
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPicker/* TokenPicker */.w, {
            ...others,
            defaultChainId: others.chainId,
            mt: 2,
            height: 455
        }, `${others.chainId}.${others.address}`)
    });
});
const ChooseTokenModal = /*#__PURE__*/ (0,react.forwardRef)(function ChooseTokenModal(_, ref) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [props, setProps] = (0,react.useState)({});
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChooseTokenDrawer, {
        ...props,
        open: open,
        title: t.popups_wallet_choose_token(),
        onClose: ()=>dispatch?.close(),
        onSelect: (asset)=>dispatch?.close(asset)
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/modals/modal-controls.ts
var modal_controls = __webpack_require__(75904);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ConfirmDialog/index.tsx






const ConfirmDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            minWidth: 320,
            width: 320
        },
        title: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 80,
            padding: theme.spacing(3),
            margin: theme.spacing(0),
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        message: {
            marginTop: theme.spacing(3),
            padding: theme.spacing(0, 2),
            lineHeight: '20px',
            fontSize: 14,
            color: theme.palette.maskColor.second,
            wordBreak: 'break-all'
        },
        desc: {
            flexGrow: 1,
            fontSize: 14,
            textAlign: 'center',
            color: theme.palette.maskColor.second,
            marginBottom: theme.spacing(1)
        },
        buttonGroup: {
            width: '100%',
            display: 'flex',
            gap: theme.spacing(2),
            marginTop: theme.spacing(4)
        }
    }));
/** Change color of confirm button */ // Yet, another Confirm Dialog
const Dialog = /*#__PURE__*/ (0,react.memo)(function Dialog({ title, message, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', confirmVariant = 'error', onConfirm, onClose, ...rest }) {
    const { classes } = ConfirmDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.paper,
            ...rest.classes
        },
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h1",
                    className: classes.title,
                    component: "div",
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.message,
                    component: "div",
                    children: message
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.desc,
                    component: "div",
                    children: description
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.buttonGroup,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                            fullWidth: true,
                            variant: "roundedOutlined",
                            onClick: ()=>onClose?.(),
                            children: cancelLabel
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                            fullWidth: true,
                            variant: "roundedContained",
                            color: confirmVariant,
                            onClick: ()=>onConfirm(),
                            children: confirmLabel
                        })
                    ]
                })
            ]
        })
    });
});
const ConfirmDialogComponent = /*#__PURE__*/ (0,react.forwardRef)(function ConfirmDialog(_, ref) {
    const [props, setProps] = (0,react.useState)({
        title: '',
        message: ''
    });
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog, {
        open: open,
        ...props,
        onClose: ()=>dispatch?.close(false),
        onConfirm: ()=>dispatch?.close(true)
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/mask/popups/modals/index.tsx















const Modals = /*#__PURE__*/ (0,react.memo)(function Modals() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmModal, {
                ref: modal_controls/* ConfirmModal */.sm.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialogComponent, {
                ref: modals/* ConfirmDialog */.QH.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddContactModal, {
                ref: modal_controls/* AddContactModal */.xf.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EditContactModal, {
                ref: modal_controls/* EditContactModal */.vg.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteContactModal, {
                ref: modal_controls/* DeleteContactModal */.Ju.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRenameModal, {
                ref: modal_controls/* WalletRenameModal */.AY.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRemoveModal, {
                ref: modal_controls/* WalletRemoveModal */.RN.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAutoLockSettingModal, {
                ref: modal_controls/* WalletAutoLockSettingModal */.bU.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingModal, {
                ref: modal_controls/* GasSettingModal */.fU.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangePaymentPasswordModal, {
                ref: modal_controls/* ChangePaymentPasswordModal */.jm.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowPrivateKeyModal, {
                ref: modal_controls/* ShowPrivateKeyModal */.Jw.register
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChooseTokenModal, {
                ref: modal_controls/* ChooseTokenModal */.KL.register
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/SwitchWallet/index.tsx
















const SwitchWallet_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            overflow: 'auto',
            backgroundColor: theme.palette.maskColor.bottom,
            display: 'flex',
            flexDirection: 'column'
        },
        list: {
            padding: 0,
            overflow: 'auto'
        },
        walletItem: {
            marginBottom: 6
        },
        modalAction: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: theme.spacing(2, 1)
        },
        actionButton: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        actionLabel: {
            marginLeft: theme.spacing(0.5)
        }
    }));
const SwitchWallet = /*#__PURE__*/ (0,react.memo)(function SwitchWallet() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, theme } = SwitchWallet_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { closeModal } = (0,ActionModalContext/* useActionModal */.mO)();
    const { smartPayChainId } = usePopupContext/* PopupContext */.t.useContainer();
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const wallets = (0,useWallets/* useWallets */.r)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const handleClickCreate = (0,react.useCallback)(async ()=>{
        if (!wallets.some((x)=>!x.configurable)) {
            const hasPaymentPassword = await service/* default */.ZP.Wallet.hasPassword();
            await browser.tabs.create({
                active: true,
                url: browser.runtime.getURL(`/dashboard.html#/create-mask-wallet/${hasPaymentPassword ? 'mnemonic' : 'form'}`)
            });
        } else {
            navigate(Routes/* PopupRoutes */.mZ.CreateWallet);
        }
    }, [
        wallets
    ]);
    const handleImport = (0,react.useCallback)(async ()=>{
        await browser.tabs.create({
            active: true,
            url: browser.runtime.getURL('/dashboard.html#/create-mask-wallet/recovery')
        });
    }, []);
    const { Network } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const networks = (0,useNetworks/* useNetworks */.e)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const handleSelect = (0,react.useCallback)(async (wallet)=>{
        const address = wallet.address;
        await entry/* Web3 */.Bv.connect({
            account: address,
            chainId: wallet.owner && smartPayChainId ? smartPayChainId : chainId,
            providerType: types/* ProviderType */.lP.MaskWallet,
            owner: wallet.owner,
            identifier: ec_key/* ECKeyIdentifier */.o.from(wallet.identifier).unwrapOr(undefined)
        });
        closeModal();
        if (wallet.owner && smartPayChainId) {
            const network = networks.find((x)=>x.chainId === smartPayChainId);
            if (network) await Network?.switchNetwork(network.ID);
            await entry/* Web3 */.Bv.switchChain?.(smartPayChainId, {
                providerType: types/* ProviderType */.lP.MaskWallet
            });
        }
    }, [
        smartPayChainId,
        chainId,
        closeModal,
        Network,
        networks
    ]);
    const handleClickSettings = (0,react.useCallback)(async ()=>{
        navigate(Routes/* PopupRoutes */.mZ.WalletSettings);
    }, []);
    const handleLock = (0,react.useCallback)(async ()=>{
        await service/* default */.ZP.Wallet.lockWallet();
        navigate(Routes/* PopupRoutes */.mZ.Wallet);
    }, []);
    const action = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.modalAction,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
                className: classes.actionButton,
                fullWidth: true,
                size: "small",
                variant: "outlined",
                onClick: handleClickCreate,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.actionLabel,
                        component: "span",
                        children: t.popups_add_wallet()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
                className: classes.actionButton,
                fullWidth: true,
                size: "small",
                variant: "outlined",
                onClick: handleImport,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Download2, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.actionLabel,
                        component: "span",
                        children: t.popups_import_wallet()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
                className: classes.actionButton,
                fullWidth: true,
                size: "small",
                variant: "outlined",
                onClick: handleLock,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Lock, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.actionLabel,
                        component: "span",
                        children: t.popups_lock_wallet()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
                className: classes.actionButton,
                fullWidth: true,
                size: "small",
                variant: "outlined",
                onClick: handleClickSettings,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WalletSetting, {
                        size: 20,
                        color: theme.palette.maskColor.second
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.actionLabel,
                        component: "span",
                        children: t.popups_wallet_settings()
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionModal, {
        header: t.wallet_account(),
        action: action,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                children: wallets.map((item)=>item.owner && chainId !== types/* ChainId */.a_.Matic ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem/* WalletItem */.Z, {
                        wallet: item,
                        onSelect: handleSelect,
                        isSelected: (0,isSameAddress/* isSameAddress */.W)(item.address, wallet?.address),
                        className: classes.walletItem
                    }, item.address))
            })
        })
    });
});
/* harmony default export */ const Wallet_SwitchWallet = (SwitchWallet);

;// CONCATENATED MODULE: ./packages/mask/popups/Popup.tsx
























const Wallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(8672), __webpack_require__.e(8136), __webpack_require__.e(9759), __webpack_require__.e(6949), __webpack_require__.e(2698), __webpack_require__.e(4049), __webpack_require__.e(4072), __webpack_require__.e(7531), __webpack_require__.e(7015), __webpack_require__.e(5678), __webpack_require__.e(962), __webpack_require__.e(8125), __webpack_require__.e(8858), __webpack_require__.e(1251), __webpack_require__.e(2666)]).then(__webpack_require__.bind(__webpack_require__, 10977)));
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(9759), __webpack_require__.e(6949), __webpack_require__.e(4049), __webpack_require__.e(1251), __webpack_require__.e(4741)]).then(__webpack_require__.bind(__webpack_require__, 84741)));
const SwapPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(9742), __webpack_require__.e(9759), __webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(2752), __webpack_require__.e(187), __webpack_require__.e(1546), __webpack_require__.e(2939), __webpack_require__.e(3526), __webpack_require__.e(9197), __webpack_require__.e(6572), __webpack_require__.e(4428), __webpack_require__.e(1696), __webpack_require__.e(4590), __webpack_require__.e(5784), __webpack_require__.e(5333), __webpack_require__.e(2105), __webpack_require__.e(5185), __webpack_require__.e(5511)]).then(__webpack_require__.bind(__webpack_require__, 57074)));
const RequestPermissionPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2304)]).then(__webpack_require__.bind(__webpack_require__, 2304)));
const PermissionAwareRedirect = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(4693)]).then(__webpack_require__.bind(__webpack_require__, 24693)));
const Contacts = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6949), __webpack_require__.e(8813)]).then(__webpack_require__.bind(__webpack_require__, 35145)));
const Settings = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5148).then(__webpack_require__.bind(__webpack_require__, 55148)));
const PluginRender = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(extension_page/* useActivatedPluginsExtensionPage */.fb, (x)=>x.GlobalInjection);
function PluginRenderDelayed() {
    const [canRenderPlugin, setRenderPlugins] = (0,react.useState)(false);
    (0,react.useEffect)(()=>setRenderPlugins(true), []);
    if (!canRenderPlugin) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {});
}
const personaInitialState = {
    queryOwnedPersonaInformation: service/* default */.ZP.Identity.queryOwnedPersonaInformation,
    queryPersonaAvatarLastUpdateTime: service/* default */.ZP.Identity.getPersonaAvatarLastUpdateTime
};
const PopupRoutes = /*#__PURE__*/ (0,react.memo)(function PopupRoutes() {
    const location1 = (0,dist/* useLocation */.TH)();
    const mainLocation = location1.state?.mainLocation;
    (0,react.useEffect)(()=>{
        const spinner = document.getElementById('app-spinner');
        if (spinner) spinner.remove();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "100vh",
            display: "flex",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {})
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(usePersonaContext/* PersonaContext */.m.Provider, {
            initialState: personaInitialState,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(useUserContext/* UserContext */.S.Provider, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
                        location: mainLocation || location1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Route */.AW, {
                                path: "/",
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupLayout, {}),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                        path: Routes/* PopupRoutes */.mZ.Personas + '/*',
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Personas, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                        path: Routes/* PopupRoutes */.mZ.Wallet + '/*',
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                        path: Routes/* PopupRoutes */.mZ.Friends + '/*',
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Contacts, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                        path: Routes/* PopupRoutes */.mZ.Settings,
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupRoutes */.mZ.Swap,
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapPage, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupRoutes */.mZ.RequestPermission,
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPermissionPage, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupRoutes */.mZ.PermissionAwareRedirect,
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirect, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: "*",
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Navigate */.Fg, {
                                    replace: true,
                                    to: Routes/* PopupRoutes */.mZ.Personas
                                })
                            })
                        ]
                    }),
                    mainLocation ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Routes */.Z5, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.verifyBackupPassword,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyBackupPasswordModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SetBackupPassword,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetBackupPasswordModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.PersonaRename,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRenameModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.PersonaSettings,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSettingModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SwitchPersona,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchPersonaModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.ChooseCurrency,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(ChooseCurrencyModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.ChooseNetwork,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(ChooseNetworkModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SwitchWallet,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_SwitchWallet, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.ConnectSocialAccount,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialAccountModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SelectProvider,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProviderModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.ConnectProvider,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectProviderModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.WalletAccount,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletGroupModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SelectLanguage,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectLanguageModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SelectAppearance,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAppearanceModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.SupportedSitesModal,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(SupportedSitesModal, {}))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Route */.AW, {
                                path: Routes/* PopupModalRoutes */.cY.ChangeBackupPassword,
                                element: wrapModal(/*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeBackupPasswordModal, {}))
                            })
                        ]
                    }) : null
                ]
            })
        })
    });
});
function Popup_Popups() {
    const [title, setTitle] = (0,react.useState)('');
    const [extension, setExtension] = (0,react.useState)();
    const [customBackHandler, setCustomBackHandler] = (0,react.useState)();
    const titleContext = (0,react.useMemo)(()=>({
            title,
            setTitle,
            extension,
            setExtension,
            customBackHandler,
            setCustomBackHandler
        }), [
        title,
        extension,
        customBackHandler
    ]);
    (0,index_esm/* useIdleTimer */.Yp)({
        onAction: !location.hash.includes('/swap') ? service/* default */.ZP.Wallet.setAutoLockTimer : noop/* default */.Z,
        throttle: 10000
    });
    (0,react.useEffect)(()=>{
        if (location.hash.includes('/swap')) return;
        return Messages/* MaskMessages */.q.events.popupRouteUpdated.on((url)=>Popups/* PopupsHistory */.j.replace(url));
    }, []);
    return PageUIProvider(usePopupTheme, /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupSnackbar/* PopupSnackbarProvider */.j, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
            value: {
                providerType: types/* ProviderType */.lP.MaskWallet
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(usePopupContext/* PopupContext */.t.Provider, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTitle/* PageTitleContext */.I.Provider, {
                    value: titleContext,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* unstable_HistoryRouter */.M, {
                        history: Popups/* PopupsHistory */.j,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupRoutes, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals, {}),
                            /* TODO: Should only load plugins when the page is plugin-aware. */ /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRenderDelayed, {})
                        ]
                    })
                })
            })
        })
    }), null);
}

// EXTERNAL MODULE: ./packages/mask/shared-ui/initUIContext.ts
var initUIContext = __webpack_require__(9485);
;// CONCATENATED MODULE: ./packages/mask/popups/initialization/render.tsx







(0,initUIContext/* setupUIContext */.y)();
if (location.hash === '') location.assign('#/personas');
/**
 * Firefox will not help popup fixed width when user click browser action
 * So this will determine if the user has set maxWidth to 'unset' when resizing in the window
 */ if (navigator.userAgent.includes('Firefox')) {
    setTimeout(()=>{
        document.body.style.maxWidth = '350px';
        window.addEventListener('resize', ()=>{
            if (window.innerWidth !== 400) {
                document.body.style.maxWidth = 'unset';
            }
        }, {
            once: true
        });
    }, 200);
}
(0,createNormalReactRoot/* createNormalReactRoot */.j)(/*#__PURE__*/ (0,jsx_runtime.jsx)(Popup_Popups, {}));
startPluginHost();
function startPluginHost() {
    // TODO: Should only load plugins when the page is plugin-aware.
    (0,extension_page/* startPluginHostExtensionPage */.rw)((0,host/* createPluginHost */.R)(undefined, (id, def, signal)=>({
            ...(0,host/* createSharedContext */.y)(id, signal),
            allPersonas: initUIContext/* allPersonas */.d,
            hasPaymentPassword: service/* default */.ZP.Wallet.hasPassword,
            setMinimalMode (enabled) {
                service/* default */.ZP.Settings.setPluginMinimalModeEnabled(id, enabled);
            }
        }), service/* default */.ZP.Settings.getPluginMinimalModeEnabled, service/* default */.ZP.Helper.hasHostPermission));
}


/***/ }),

/***/ 75904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AY: () => (/* binding */ WalletRenameModal),
/* harmony export */   Ju: () => (/* binding */ DeleteContactModal),
/* harmony export */   Jw: () => (/* binding */ ShowPrivateKeyModal),
/* harmony export */   KL: () => (/* binding */ ChooseTokenModal),
/* harmony export */   RN: () => (/* binding */ WalletRemoveModal),
/* harmony export */   bU: () => (/* binding */ WalletAutoLockSettingModal),
/* harmony export */   fU: () => (/* binding */ GasSettingModal),
/* harmony export */   jm: () => (/* binding */ ChangePaymentPasswordModal),
/* harmony export */   sm: () => (/* binding */ ConfirmModal),
/* harmony export */   vg: () => (/* binding */ EditContactModal),
/* harmony export */   xf: () => (/* binding */ AddContactModal)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62384);

const ConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const AddContactModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const EditContactModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletRenameModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletRemoveModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const DeleteContactModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletAutoLockSettingModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const GasSettingModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ChangePaymentPasswordModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ShowPrivateKeyModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ChooseTokenModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();


/***/ }),

/***/ 18029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useWalletAutoLockTime)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40514);




function useWalletAutoLockTime() {
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        return _services__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.Wallet.getAutoLockerDuration();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .CrossIsolationMessages */ .W.events.walletLockTimeUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
}


/***/ }),

/***/ 85103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T9: () => (/* binding */ WalletAssetTabs),
/* harmony export */   jj: () => (/* binding */ ProfilePhotoType),
/* harmony export */   md: () => (/* binding */ TransferTabType),
/* harmony export */   uC: () => (/* binding */ ContactType),
/* harmony export */   uM: () => (/* binding */ ReplaceType),
/* harmony export */   ug: () => (/* binding */ MethodAfterPersonaSign)
/* harmony export */ });
var ReplaceType;
(function(ReplaceType) {
    ReplaceType["CANCEL"] = "CANCEL";
    ReplaceType["SPEED_UP"] = "SPEED_UP";
})(ReplaceType || (ReplaceType = {}));
var MethodAfterPersonaSign;
(function(MethodAfterPersonaSign) {
    MethodAfterPersonaSign["DISCONNECT_NEXT_ID"] = "DISCONNECT_NEXT_ID";
})(MethodAfterPersonaSign || (MethodAfterPersonaSign = {}));
var ProfilePhotoType;
(function(ProfilePhotoType) {
    ProfilePhotoType["Image"] = "Image";
    ProfilePhotoType["NFT"] = "NFT";
})(ProfilePhotoType || (ProfilePhotoType = {}));
var ContactType;
(function(ContactType) {
    ContactType["Owned"] = "Owned";
    ContactType["Recipient"] = "Recipient";
})(ContactType || (ContactType = {}));
var WalletAssetTabs;
(function(WalletAssetTabs) {
    WalletAssetTabs["Tokens"] = "Tokens";
    WalletAssetTabs["Collectibles"] = "Collectibles";
    WalletAssetTabs["Activity"] = "Activity";
})(WalletAssetTabs || (WalletAssetTabs = {}));
var TransferTabType;
(function(TransferTabType) {
    TransferTabType["Token"] = "Token";
    TransferTabType["NFT"] = "NFT";
})(TransferTabType || (TransferTabType = {}));


/***/ }),

/***/ 9485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ allPersonas),
/* harmony export */   y: () => (/* binding */ setupUIContext)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28129);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37377);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49588);



const allPersonas = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createSubscriptionFromAsync */ .Fd)(()=>_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.queryOwnedPersonaInformation(true), [], (x)=>{
    const clearCurrentPersonaIdentifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.currentPersonaIdentifier.on(x);
    const clearPersonasChanged = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.personasChanged.on(x);
    return ()=>{
        clearCurrentPersonaIdentifier();
        clearPersonasChanged();
    };
});
const currentPersona = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createSubscriptionFromAsync */ .Fd)(_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.getCurrentPersonaIdentifier, undefined, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.currentPersonaIdentifier.on);
function setupUIContext() {
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_3__/* .__setUIContext__ */ .W1)({
        allPersonas,
        currentPersona,
        queryPersonaAvatar: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.getPersonaAvatar,
        querySocialIdentity: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.querySocialIdentity,
        fetchJSON: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Helper.fetchJSON,
        queryPersonaByProfile: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.queryPersonaByProfile,
        openDashboard: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Helper.openDashboard,
        openPopupWindow: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Helper.openPopupWindow,
        signWithPersona: (a, b, c, d)=>_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.signWithPersona(a, b, c, location.origin, d),
        hasPaymentPassword: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Wallet.hasPassword,
        createPersona: ()=>_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Helper.openDashboard(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .DashboardRoutes */ .vq.SignUpPersona),
        attachProfile: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity.attachProfile,
        setCurrentPersonaIdentifier: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.setCurrentPersonaIdentifier,
        setPluginMinimalModeEnabled: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.setPluginMinimalModeEnabled,
        hasHostPermission: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Helper.hasHostPermission,
        requestHostPermission: _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Helper.requestHostPermission
    });
}


/***/ }),

/***/ 30218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EventMap),
/* harmony export */   l: () => (/* binding */ DisconnectEventMap)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77953);
/* harmony import */ var _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91451);


const EventMap = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountConnectTwitter,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Facebook]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountConnectFb,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Minds]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountConnectMinds,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Instagram]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountConnectIns,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Localhost]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.Debug,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.App]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.Debug,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.OpenSea]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.Debug,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Mirror]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.Debug
};
const DisconnectEventMap = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountDisconnectTwitter,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Facebook]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountDisconnectFb,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Minds]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountDisconnectMinds,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Instagram]: _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_1__/* .EventID */ .HS.EntryPopupSocialAccountDisconnectIns
};


/***/ }),

/***/ 33348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ formatTokenBalance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29763);

/**
 * Yet another formatBalance
 */ function formatTokenBalance(balance = '0', decimals = 1) {
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .isZero */ .Fr)(balance)) return '0';
    const bn = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .leftShift */ .w5)(balance, decimals);
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .isLessThan */ .FI)(bn, 0.0001)) return '<0.0001';
    if (bn.lt(1)) return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .trimZero */ .vr)(bn.toFixed(4));
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .addThousandSeparators */ .OI)((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .trimZero */ .vr)(bn.toFixed(2)));
}


/***/ }),

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   ZV: () => (/* binding */ fetchJSON),
/* harmony export */   _c: () => (/* binding */ currentPersona),
/* harmony export */   d4: () => (/* binding */ allPersonas),
/* harmony export */   f8: () => (/* binding */ openDashboard),
/* harmony export */   il: () => (/* binding */ querySocialIdentity),
/* harmony export */   lU: () => (/* binding */ openPopupWindow)
/* harmony export */ });
/* unused harmony exports hasHostPermission, requestHostPermission */
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

/***/ 64455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P7: () => (/* binding */ LanguageOptions),
/* harmony export */   iu: () => (/* binding */ SupportedLanguages),
/* harmony export */   um: () => (/* binding */ Appearance),
/* harmony export */   z4: () => (/* binding */ TradeProvider)
/* harmony export */ });
var /** Unix timestamp */ /** Unix timestamp */ Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));
var TradeProvider;
(function(TradeProvider) {
    TradeProvider[TradeProvider["UNISWAP_V2"] = 0] = "UNISWAP_V2";
    TradeProvider[TradeProvider["ZRX"] = 1] = "ZRX";
    TradeProvider[TradeProvider["SUSHISWAP"] = 2] = "SUSHISWAP";
    TradeProvider[TradeProvider["QUICKSWAP"] = 5] = "QUICKSWAP";
    TradeProvider[TradeProvider["PANCAKESWAP"] = 6] = "PANCAKESWAP";
    TradeProvider[TradeProvider["DODO"] = 7] = "DODO";
    TradeProvider[TradeProvider["UNISWAP_V3"] = 8] = "UNISWAP_V3";
    TradeProvider[TradeProvider["BANCOR"] = 9] = "BANCOR";
    TradeProvider[TradeProvider["OPENOCEAN"] = 10] = "OPENOCEAN";
    TradeProvider[TradeProvider["WANNASWAP"] = 11] = "WANNASWAP";
    TradeProvider[TradeProvider["TRISOLARIS"] = 12] = "TRISOLARIS";
    TradeProvider[TradeProvider["TRADERJOE"] = 13] = "TRADERJOE";
    TradeProvider[TradeProvider["PANGOLIN"] = 14] = "PANGOLIN";
    TradeProvider[TradeProvider["MDEX"] = 15] = "MDEX";
    TradeProvider[TradeProvider["ARTHSWAP"] = 19] = "ARTHSWAP";
    TradeProvider[TradeProvider["VERSA"] = 20] = "VERSA";
    TradeProvider[TradeProvider["ASTAREXCHANGE"] = 21] = "ASTAREXCHANGE";
    TradeProvider[TradeProvider["YUMISWAP"] = 22] = "YUMISWAP";
})(TradeProvider || (TradeProvider = {}));
var /** Supported language settings */ LanguageOptions;
(function(LanguageOptions) {
    LanguageOptions["__auto__"] = 'auto';
    LanguageOptions["enUS"] = 'en-US';
    LanguageOptions["zhCN"] = 'zh-CN';
    LanguageOptions["zhTW"] = 'zh-TW';
    LanguageOptions["koKR"] = 'ko-KR';
    LanguageOptions["jaJP"] = 'ja-JP';
})(LanguageOptions || (LanguageOptions = {}));
var /** Supported display languages */ SupportedLanguages/** Base on response of coingecko's token price API */ ;
(function(SupportedLanguages) {
    SupportedLanguages["enUS"] = 'en-US';
    SupportedLanguages["zhCN"] = 'zh-CN';
    SupportedLanguages["zhTW"] = 'zh-TW';
    SupportedLanguages["koKR"] = 'ko-KR';
    SupportedLanguages["jaJP"] = 'ja-JP';
})(SupportedLanguages || (SupportedLanguages = {}));


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

/***/ 72385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useSingletonModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useSingletonModal(ref, options) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dispatchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const openRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(open);
    optionsRef.current = options;
    openRef.current = open;
    const creator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((dispatchOpen, dispatchClose, dispatchAbort)=>{
        dispatchRef.current = {
            peek () {
                return openRef.current;
            },
            open (props) {
                optionsRef.current?.onOpen?.(props);
                dispatchOpen(props);
                setOpen(true);
            },
            close (props) {
                optionsRef.current?.onClose?.(props);
                dispatchClose(props);
                setOpen(false);
            },
            abort (error) {
                optionsRef.current?.onAbort?.(error);
                dispatchAbort(error);
                setOpen(false);
            }
        };
        return dispatchRef.current;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, ()=>creator, [
        creator
    ]);
    return [
        open,
        dispatchRef.current
    ];
}


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fw: () => (/* binding */ InjectSwitchSettings),
/* harmony export */   Jg: () => (/* binding */ currentMaskWalletLockStatusSettings),
/* harmony export */   Mo: () => (/* binding */ pluginIDsSettings),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   pQ: () => (/* binding */ languageSettings),
/* harmony export */   v2: () => (/* binding */ switchLogoSettings)
/* harmony export */ });
/* unused harmony exports currentSetupGuideStatus, userGuideStatus, userGuideFinished, sayHelloShowed, userPinExtension, dismissVerifyNextID, decentralizedSearchSettings, appearanceSettings, getCurrentPluginMinimalMode, setCurrentPluginMinimalMode */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85094);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64455);
/* harmony import */ var _createSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6938);
/* harmony import */ var _i18n_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50139);
/* harmony import */ var _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24835);
/* harmony import */ var _types_Wallet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58190);
/* harmony import */ var _Site_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77953);
/* harmony import */ var _types_SwitchLogo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73835);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88547);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19477);










const languageSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__);
languageSettings.addListener(_i18n_index_js__WEBPACK_IMPORTED_MODULE_2__/* .updateLanguage */ .BF);
const pluginIDsSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('PluginIdBySite', {
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Twitter]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Facebook]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Instagram]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.OpenSea]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Minds]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Localhost]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Mirror]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.App]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ExtensionSite */ .v.Popup]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ExtensionSite */ .v.Dashboard]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM
}, lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const InjectSwitchSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('InjectSwitchBySite', true);
const currentMaskWalletLockStatusSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .P.Wallet}+maskWalletLockStatus`, _types_Wallet_js__WEBPACK_IMPORTED_MODULE_6__/* .LockStatus */ .O.INIT);
const currentSetupGuideStatus = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('userGuideStatus', '');
const userGuideFinished = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('userGuideFinished', false);
const sayHelloShowed = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('sayHelloShowed', false);
const userPinExtension = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('userPinExtension', false);
const dismissVerifyNextID = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('dismissVerifyNextID', {}, lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const decentralizedSearchSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('decentralizedSearchSettings', true);
const appearanceSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .Appearance */ .um.default);
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSiteAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsExtensionPage().find((x) => x.ID === PLUGIN_ID)` instead
 * @deprecated DO NOT EXPORT THIS
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const pluginMinimalModeReversed = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('pluginsEnabled', true);
function getCurrentPluginMinimalMode(id) {
    if (pluginMinimalModeReversed['plugin:' + id].value === 'enabled') return BooleanPreference.False;
    if (pluginMinimalModeReversed['plugin:' + id].value === false) return BooleanPreference.True;
    return BooleanPreference.Default;
}
function setCurrentPluginMinimalMode(id, value) {
    if (value === BooleanPreference.Default) pluginMinimalModeReversed['plugin:' + id].value = true;
    else if (value === BooleanPreference.True) pluginMinimalModeReversed['plugin:' + id].value = false;
    else if (value === BooleanPreference.False) pluginMinimalModeReversed['plugin:' + id].value = 'enabled';
}
const currentPersonaIdentifier = new _index_js__WEBPACK_IMPORTED_MODULE_7__/* .ValueRefWithReady */ .td(undefined);
{
    const currentPersonaIdentifier_raw = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '');
    currentPersonaIdentifier.addListener((newVal)=>{
        currentPersonaIdentifier_raw.value = newVal?.toText() ?? '';
    });
    currentPersonaIdentifier_raw.addListener((newVal)=>{
        currentPersonaIdentifier.value = newVal ? _index_js__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .o.from(newVal).unwrap() : undefined;
    });
    currentPersonaIdentifier_raw.readyPromise.then(()=>{
        const value = currentPersonaIdentifier_raw.value;
        currentPersonaIdentifier.value = value ? _index_js__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .o.from(value).unwrap() : undefined;
    });
}try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__;
} catch  {}
const switchLogoSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('SwitchLogo', _types_SwitchLogo_js__WEBPACK_IMPORTED_MODULE_9__/* .SwitchLogoType */ .O.New);


/***/ }),

/***/ 52033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dm: () => (/* binding */ NEXT_ID_PLATFORM_SOCIAL_MEDIA_MAP),
/* harmony export */   Ek: () => (/* binding */ NUMERIC_INPUT_REGEXP_PATTERN),
/* harmony export */   Nu: () => (/* binding */ EMPTY_OBJECT),
/* harmony export */   OZ: () => (/* binding */ SOCIAL_MEDIA_NAME),
/* harmony export */   bH: () => (/* binding */ DEFAULT_PLUGIN_PUBLISHER),
/* harmony export */   ge: () => (/* binding */ SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID),
/* harmony export */   rP: () => (/* binding */ EMPTY_LIST)
/* harmony export */ });
/* unused harmony exports MEDIA_VIEWER_URL, MAX_WALLET_LIMIT, UNIT_TEST_ADDRESS, UNIT_TEST_ERC20_ADDRESS */
/* harmony import */ var _NextID_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95766);
/* harmony import */ var _Site_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77953);


const SOCIAL_MEDIA_NAME = {
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter]: 'X',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Facebook]: 'Facebook',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Minds]: 'Minds',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Instagram]: 'Instagram',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.OpenSea]: 'OpenSea',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Localhost]: 'Localhost',
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Mirror]: 'Mirror'
};
const NEXT_ID_PLATFORM_SOCIAL_MEDIA_MAP = {
    [_NextID_types_js__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.Twitter]: _Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter
};
const SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID = [
    _Site_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite */ .J.Twitter
];
const MEDIA_VIEWER_URL = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;
// Not allow 0000.1, 000100
const NUMERIC_INPUT_REGEXP_PATTERN = '^[1-9]|^0(?![0-9])[.,]?[0-9]*$';
const UNIT_TEST_ADDRESS = '0x732b8e42455f79F3072fe18222A7E926588B4747';
const UNIT_TEST_ERC20_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
const DEFAULT_PLUGIN_PUBLISHER = {
    name: {
        fallback: 'Mask Network'
    },
    link: 'https://mask.io/'
};


/***/ }),

/***/ 56851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ calculateHash),
/* harmony export */   e: () => (/* binding */ generateContactAvatarColor)
/* harmony export */ });
function calculateHash(input) {
    const hash = [
        ...input
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return Math.abs(hash);
}
function generateContactAvatarColor(input, theme) {
    const hash = calculateHash(input);
    const values = [
        Math.abs(hash),
        theme === 'dark' ? '78%' : '98%',
        theme === 'dark' ? '50%' : '70%'
    ];
    return `hsl(${values.join(', ')})`;
}


/***/ }),

/***/ 67101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nb: () => (/* binding */ formatPersonaFingerprint),
/* harmony export */   ck: () => (/* binding */ isSameProfile),
/* harmony export */   j1: () => (/* binding */ isSamePersona),
/* harmony export */   rY: () => (/* binding */ formatPersonaName)
/* harmony export */ });
/* unused harmony exports MAX_PERSONA_LIMIT, MAX_PERSONA_NAME_LENGTH */
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12247);

function formatPersonaFingerprint(fingerprint, size) {
    if (!size) {
        if (fingerprint.length <= 26) return fingerprint;
        return `${fingerprint.slice(0, 12)}...${fingerprint.slice(-9)}`;
    }
    if (size <= 0) return fingerprint;
    return `${fingerprint.slice(0, Math.max(0, 2 + size))}...${fingerprint.slice(-size)}`;
}
const MAX_PERSONA_LIMIT = 10;
const MAX_PERSONA_NAME_LENGTH = 12;
const formatPersonaName = (nickname)=>{
    if (!nickname) return '';
    if (nickname.length < MAX_PERSONA_NAME_LENGTH) return nickname;
    return `${nickname.slice(0, 12)}...`;
};
function isSameIdentity(identities) {
    return identities.reduce((previousValue, T2, key)=>{
        if (key === 0) return true;
        const T1 = identities[key - 1];
        if (!T2 || !T1) return false;
        const i1IdentifierText = (T1 instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Identifier */ .x ? T1 : T1.identifier).toText();
        const i2IdentifierText = (T2 instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Identifier */ .x ? T2 : T2.identifier).toText();
        return previousValue && i1IdentifierText.toLowerCase() === i2IdentifierText.toLowerCase();
    }, false);
}
function isSamePersona(...personas) {
    return isSameIdentity(personas);
}
function isSameProfile(...profiles) {
    return isSameIdentity(profiles);
}


/***/ }),

/***/ 28129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ mergeSubscription),
/* harmony export */   Fd: () => (/* binding */ createSubscriptionFromAsync),
/* harmony export */   S3: () => (/* binding */ mapSubscription),
/* harmony export */   WS: () => (/* binding */ createSubscriptionFromAsyncSuspense),
/* harmony export */   qY: () => (/* binding */ createConstantSubscription),
/* harmony export */   v_: () => (/* binding */ createSubscriptionFromValueRef)
/* harmony export */ });
/* unused harmony exports getSubscriptionCurrentValue, SubscriptionDebug */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);


async function getSubscriptionCurrentValue(getSubscription, retries = 3) {
    const getValue = ()=>{
        return getSubscription()?.getCurrentValue();
    };
    const createReader = async ()=>{
        try {
            return getValue();
        } catch (error) {
            if (!(error instanceof Promise)) return;
            await error;
            return getValue();
        }
    };
    const createReaders = Array.from({
        length: retries
    }).fill(()=>createReader());
    for (const createReader of createReaders){
        try {
            return await createReader();
        } catch  {
            continue;
        }
    }
    return;
}
function createConstantSubscription(value) {
    return {
        getCurrentValue: ()=>value,
        subscribe: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange, signal) {
    const { getCurrentValue, subscribe } = createSubscriptionFromAsyncSuspense(f, onChange, signal);
    return {
        subscribe,
        getCurrentValue: ()=>{
            try {
                return getCurrentValue();
            } catch  {
                return defaultValue;
            }
        }
    };
}
function createSubscriptionFromAsyncSuspense(f, onChange, signal) {
    const { subscribe, trigger } = getEventTarget();
    let value = ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
    const setter = (v)=>{
        value = (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Some)(v);
        trigger();
    };
    // initial request
    const promise = f().then(setter);
    // follow-up updating
    const listen = onChange(()=>f().then(setter));
    signal?.addEventListener('abort', listen, {
        once: true
    });
    return {
        getCurrentValue: ()=>{
            // TODO: suspense
            if (value.isNone()) throw promise;
            return value.value;
        },
        subscribe: (sub)=>{
            if (signal?.aborted) return lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
            const undo = subscribe(sub);
            signal?.addEventListener('abort', undo, {
                once: true
            });
            return ()=>{
                undo();
            };
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all data to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT)), 500);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f);
    }
    return {
        trigger,
        subscribe
    };
}
function mapSubscription(sub, mapper) {
    let value = ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
    sub.subscribe(()=>value = ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None);
    return {
        getCurrentValue () {
            if (value.isNone()) value = (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Some)(mapper(sub.getCurrentValue()));
            return value.value;
        },
        subscribe: sub.subscribe
    };
}
function mergeSubscription(...subscriptions) {
    let values;
    const f = ()=>values = undefined;
    subscriptions.forEach((x)=>x.subscribe(f));
    return {
        getCurrentValue () {
            return values ??= subscriptions.map((x)=>x.getCurrentValue());
        },
        subscribe: (callback)=>{
            const removeListeners = subscriptions.map((x)=>x.subscribe(callback));
            return ()=>removeListeners.forEach((x)=>x());
        }
    };
}
function createSubscriptionFromValueRef(ref, signal) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value,
        subscribe: (sub)=>{
            if (signal?.aborted) return lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
            const f = ref.addListener(sub);
            signal?.addEventListener('abort', f, {
                once: true
            });
            return f;
        }
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}


/***/ }),

/***/ 50139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BF: () => (/* binding */ updateLanguage),
/* harmony export */   BV: () => (/* binding */ i18NextInstance)
/* harmony export */ });
/* unused harmony export queryRemoteI18NBundle */
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64455);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5828);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57228);




const i18NextInstance = i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["default"] */ .ZP["default"] || i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP;
if (false) {}
if (!i18NextInstance.isInitialized) {
    i18NextInstance.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["default"] */ .Z["default"] || i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).init({
        keySeparator: false,
        interpolation: {
            escapeValue: true
        },
        contextSeparator: '$',
        fallbackLng: {
            'zh-CN': [
                'zh-TW',
                'en'
            ],
            'zh-TW': [
                'zh-CN',
                'en'
            ],
            default: [
                'en'
            ]
        },
        defaultNS: 'mask',
        nonExplicitSupportedLngs: true,
        detection: {
            order: [
                'navigator'
            ]
        },
        react: {
            bindI18n: 'languageChanged loaded',
            // We'll be getting bundles in different languages from the remote, and we'll need to trigger re-rendering.
            // https://react.i18next.com/latest/i18next-instance
            bindI18nStore: 'added removed'
        }
    });
}
function updateLanguage(next) {
    if (next === _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions */ .P7.__auto__) {
        const result = i18NextInstance.services.languageDetector.detect();
        i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .ZP.changeLanguage(result[0] || _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions */ .P7.enUS);
    } else {
        i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .ZP.changeLanguage(next);
    }
}
const cache = Symbol('shared-base i18n cache');
const interpolationLike = /({{.+?}})/g;
function getInterpolations(string) {
    return [
        ...string.matchAll(interpolationLike)
    ].map((arr)=>arr[0]).sort(undefined).join('');
}
function queryRemoteI18NBundle(_updater) {
    const updater = _updater;
    const update = updater[cache] ??= debounce(async ()=>{
        const result = await updater(i18NextInstance.language);
        for (const [ns, lang, json] of result){
            const next = {
                ...i18NextInstance.getResourceBundle(lang, ns)
            };
            for(const key in json){
                const value = json[key];
                if (typeof value !== 'string') continue;
                if (!next[key]) next[key] = value;
                else // we only accept i18n hot update if and only if the interpolations are the same, otherwise the translation will be broken.
                if (getInterpolations(value) === next[key]) {
                    next[key] = value;
                }
            }
            i18NextInstance.addResourceBundle(lang, ns, next, true, true);
        }
    }, 1500);
    update();
    i18NextInstance.on('languageChanged', update);
    return ()=>i18NextInstance.off('languageChanged', update);
}


/***/ }),

/***/ 37377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cY: () => (/* binding */ PopupModalRoutes),
/* harmony export */   mZ: () => (/* binding */ PopupRoutes),
/* harmony export */   vq: () => (/* binding */ DashboardRoutes)
/* harmony export */ });
var DashboardRoutes;
(function(DashboardRoutes) {
    DashboardRoutes["Setup"] = '/setup';
    DashboardRoutes["Welcome"] = '/setup/welcome';
    DashboardRoutes["SignUpPersona"] = '/setup/sign-up';
    DashboardRoutes["RecoveryPersona"] = '/setup/recovery';
    DashboardRoutes["SignUpPersonaMnemonic"] = '/setup/sign-up/mnemonic';
    DashboardRoutes["SignUpPersonaOnboarding"] = '/setup/sign-up/onboarding';
    DashboardRoutes["LocalBackup"] = '/setup/local-backup';
    DashboardRoutes["CloudBackup"] = '/setup/cloud-backup';
    DashboardRoutes["CloudBackupPreview"] = '/setup/cloud-backup-preview';
    DashboardRoutes["SignUp"] = '/sign-up';
    DashboardRoutes["SignIn"] = '/sign-in';
    DashboardRoutes["PrivacyPolicy"] = '/privacy-policy';
    DashboardRoutes["Personas"] = '/personas';
    DashboardRoutes["CreateMaskWallet"] = '/create-mask-wallet';
    DashboardRoutes["CreateMaskWalletForm"] = '/create-mask-wallet/form';
    DashboardRoutes["RecoveryMaskWallet"] = '/create-mask-wallet/recovery';
    DashboardRoutes["CreateMaskWalletMnemonic"] = '/create-mask-wallet/mnemonic';
    DashboardRoutes["AddDeriveWallet"] = '/create-mask-wallet/add-derive-wallet';
    DashboardRoutes["SignUpMaskWalletOnboarding"] = '/create-mask-wallet/onboarding';
})(DashboardRoutes || (DashboardRoutes = {}));
var PopupModalRoutes;
(function(PopupModalRoutes) {
    PopupModalRoutes["ChooseCurrency"] = '/modal/choose-currency';
    PopupModalRoutes["ChooseNetwork"] = '/modal/choose-network';
    PopupModalRoutes["SwitchWallet"] = '/modal/switch-wallet';
    PopupModalRoutes["ConnectSocialAccount"] = '/modal/connect-social-account';
    PopupModalRoutes["SelectProvider"] = '/modal/select-provider';
    PopupModalRoutes["ConnectProvider"] = '/modal/connect-provider';
    PopupModalRoutes["SwitchPersona"] = '/modal/switch-persona';
    PopupModalRoutes["PersonaSettings"] = '/modal/persona-setting';
    PopupModalRoutes["PersonaRename"] = '/modal/persona-rename';
    PopupModalRoutes["SetBackupPassword"] = '/modal/set-backup-password';
    PopupModalRoutes["verifyBackupPassword"] = '/modal/verify-backup-password';
    PopupModalRoutes["WalletAccount"] = '/modal/wallet-accounts';
    PopupModalRoutes["SelectLanguage"] = '/modal/select-language';
    PopupModalRoutes["SelectAppearance"] = '/modal/select-appearance';
    PopupModalRoutes["SupportedSitesModal"] = '/modal/supported-sites';
    PopupModalRoutes["ChangeBackupPassword"] = '/modal/change-backup-password';
})(PopupModalRoutes || (PopupModalRoutes = {}));
var PopupRoutes// Unlock
;
(function(PopupRoutes) {
    PopupRoutes["Root"] = '/';
    PopupRoutes["Wallet"] = '/wallet';
    PopupRoutes["WalletStartUp"] = '/wallet/startup';
    PopupRoutes["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes["WalletSettings"] = '/wallet/settings';
    PopupRoutes["WalletRename"] = '/wallet/rename';
    PopupRoutes["DeleteWallet"] = '/wallet/delete';
    PopupRoutes["CreateWallet"] = '/wallet/create';
    PopupRoutes["DeriveWallet"] = '/wallet/derive';
    PopupRoutes["SelectWallet"] = '/wallet/select';
    PopupRoutes["BackupWallet"] = '/wallet/backup';
    PopupRoutes["AddToken"] = '/wallet/addToken';
    PopupRoutes["GasSetting"] = '/wallet/gas';
    PopupRoutes["TokenDetail"] = '/wallet/token-detail';
    PopupRoutes["TransactionDetail"] = '/wallet/transaction-detail';
    PopupRoutes["CollectibleDetail"] = '/wallet/collectible-detail';
    PopupRoutes["ContractInteraction"] = '/wallet/contract-interaction';
    PopupRoutes["ConfirmTransaction"] = '/wallet/confirm-transaction';
    PopupRoutes["ResetWallet"] = '/wallet/reset-wallet';
    PopupRoutes["Transfer"] = '/wallet/transfer';
    PopupRoutes["Contacts"] = '/wallet/contacts';
    PopupRoutes["SetPaymentPassword"] = '/wallet/password';
    PopupRoutes["ReplaceTransaction"] = '/wallet/replace';
    PopupRoutes["NetworkManagement"] = '/wallet/network-management';
    PopupRoutes["EditNetwork"] = '/wallet/edit-network';
    PopupRoutes["AddNetwork"] = '/wallet/add-network';
    PopupRoutes["Receive"] = '/wallet/receive';
    PopupRoutes["ExportWalletPrivateKey"] = '/wallet/export-private-key';
    PopupRoutes["ConnectedSites"] = '/wallet/connected-sites';
    PopupRoutes["Personas"] = '/personas';
    PopupRoutes["Logout"] = '/personas/logout';
    PopupRoutes["SocialAccounts"] = '/personas/accounts';
    PopupRoutes["AccountDetail"] = '/personas/accounts/detail';
    PopupRoutes["ConnectedWallets"] = '/personas/connected-wallets';
    PopupRoutes["ConnectWallet"] = '/personas/connect-wallet';
    PopupRoutes["PersonaSignRequest"] = '/personas/sign-request';
    PopupRoutes["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes["RequestPermission"] = '/request-permission';
    PopupRoutes["SignRequest"] = '/sign-request';
    PopupRoutes["Swap"] = '/swap';
    PopupRoutes["VerifyWallet"] = '/personas/verify';
    PopupRoutes["ChangeOwner"] = '/wallet/change-owner';
    PopupRoutes["Friends"] = '/friends';
    PopupRoutes["FriendsDetail"] = '/friends/detail';
    PopupRoutes["Settings"] = '/settings';
    PopupRoutes["WalletConnect"] = '/personas/wallet-connect';
    PopupRoutes["ExportPrivateKey"] = '/personas/export-private-key';
    PopupRoutes["PersonaAvatarSetting"] = '/personas/avatar-setting';
})(PopupRoutes || (PopupRoutes = {}));


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

/***/ 96453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EMOJI_LIST)
/* harmony export */ });
const EMOJI_LIST = [
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼',
    '🐻',
    '🐨',
    '🐯',
    '🦁',
    '🐮',
    '🐷',
    '🐽',
    '🐸',
    '🐵',
    '🙈',
    '🙉',
    '🙊',
    '🐒',
    '🐔',
    '🐧',
    '🐦',
    '🐣',
    '🐥',
    '🦆',
    '🦅',
    '🦉',
    '🦇',
    '🐺',
    '🐗',
    '🐴',
    '🦄',
    '🐝',
    '🐛',
    '🦋',
    '🐌',
    '🐞',
    '🐢',
    '🐍',
    '🦖',
    '🦕',
    '🐙',
    '🦑',
    '🦐',
    '🦞',
    '🦀',
    '🐡',
    '🐠',
    '🐟',
    '🐬',
    '🐳',
    '🐋',
    '🦈',
    '🐊',
    '🐅',
    '🐆',
    '🦓',
    '🦍',
    '🦧',
    '🐘',
    '🦛',
    '🦏',
    '🐪',
    '🐫',
    '🦒',
    '🦘',
    '👻',
    '🤖',
    '🎃',
    '🍏',
    '🍎',
    '🍐',
    '🍊',
    '🍋',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🍈',
    '🍒',
    '🍑',
    '🥭',
    '🍍',
    '🥥',
    '🥝',
    '🍅',
    '🍆',
    '🥑',
    '🥦',
    '🥬',
    '🥒',
    '🌶',
    '🌽',
    '🥕',
    '🧄',
    '🧅',
    '🥔',
    '🍠',
    '⚽',
    '🏀',
    '🏈',
    '⚾',
    '🥎',
    '🎾',
    '🏐',
    '🏉',
    '🥏',
    '🎱',
    '🍭',
    '🍬',
    '🍫'
];


/***/ }),

/***/ 49190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ EmojiAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56851);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65327);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96453);






function EmojiAvatar({ value, ...props }) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { emoji, backgroundColor } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .isZeroAddress */ .uO)(value) || !value) {
            return {
                emoji: '🐼',
                backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* .alpha */ .Fq)('#627EEA', 0.2)
            };
        }
        const hash = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .calculateHash */ .G)(value);
        return {
            emoji: _constants_js__WEBPACK_IMPORTED_MODULE_6__/* .EMOJI_LIST */ .z[hash % _constants_js__WEBPACK_IMPORTED_MODULE_6__/* .EMOJI_LIST */ .z.length],
            backgroundColor: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .generateContactAvatarColor */ .e)(value, theme.palette.mode)
        };
    }, [
        value,
        theme.palette.mode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        style: {
            backgroundColor
        },
        ...props,
        children: emoji
    });
}


/***/ }),

/***/ 52478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ LoadingStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
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
            fontWeight: 400,
            marginTop: theme.spacing(1.5)
        }
    }));
const LoadingStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function LoadingStatus({ omitText, className, iconSize = 32, children, ...rest }) {
    const { classes, cx } = useStyles();
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .LoadingBase */ .S, {
                size: iconSize
            }),
            omitText ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.text,
                children: children ?? t.loading()
            })
        ]
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

/***/ 5393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ProgressiveText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94715);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);



const ProgressiveText = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function ProgressiveText({ loading, skeletonWidth, skeletonHeight, children, fallback = '--', ...props }, ref) {
    if (loading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            ...props,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                animation: "wave",
                variant: "text",
                height: skeletonHeight ?? '1.5em',
                width: skeletonWidth ?? '100%'
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        ref: ref,
        children: children ?? fallback
    });
}));


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

/***/ 18956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ SharedContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _base_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14580);


function SharedContextProvider({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_index_js__WEBPACK_IMPORTED_MODULE_1__/* .BaseSharedUIProvider */ .bP, {
        children: children
    });
}


/***/ }),

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bp: () => (/* binding */ ConnectWalletModal),
/* harmony export */   G5: () => (/* binding */ ApplicationBoardModal),
/* harmony export */   L5: () => (/* binding */ WalletRiskWarningModal),
/* harmony export */   L9: () => (/* binding */ WalletStatusModal),
/* harmony export */   NB: () => (/* binding */ AddCollectiblesModal),
/* harmony export */   Ps: () => (/* binding */ ApplicationBoardSettingsModal),
/* harmony export */   QH: () => (/* binding */ ConfirmDialog),
/* harmony export */   SK: () => (/* binding */ WalletConnectQRCodeModal),
/* harmony export */   eX: () => (/* binding */ PersonaSelectPanelModal),
/* harmony export */   eq: () => (/* binding */ SelectGasSettingsModal),
/* harmony export */   fU: () => (/* binding */ GasSettingModal),
/* harmony export */   ge: () => (/* binding */ SelectProviderModal),
/* harmony export */   gw: () => (/* binding */ SelectFungibleTokenModal),
/* harmony export */   l$: () => (/* binding */ TransactionConfirmModal),
/* harmony export */   rV: () => (/* binding */ SelectNonFungibleContractModal),
/* harmony export */   sm: () => (/* binding */ ConfirmModal),
/* harmony export */   tN: () => (/* binding */ LeavePageConfirmModal)
/* harmony export */ });
/* unused harmony exports TransactionSnackbar, ShareSelectNetworkModal */
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

/***/ 86244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ FormattedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45911);



function FormattedAddress({ address, size, formatter = lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z }) {
    if (!address) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: formatter(address, size)
    });
}


/***/ }),

/***/ 34134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ FormattedCurrency)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18121);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76010);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);




function FormattedCurrency({ value = 0, sign, options, // it's a BigNumber so it's ok
// eslint-disable-next-line @typescript-eslint/no-base-to-string
formatter = (value, sign)=>`${sign} ${value}`.trim() }) {
    const currentSign = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useCurrencyType */ .P)();
    const { data: currentFiatCurrencyRate } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useFiatCurrencyRate */ .P)();
    const rate = options?.fiatCurrencyRate ?? (sign === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType */ .V2.USD ? 1 : currentFiatCurrencyRate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: formatter(value, rate === 1 ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType */ .V2.USD : sign ?? currentSign, {
            ...options,
            fiatCurrencyRate: rate
        })
    });
}


/***/ }),

/***/ 39117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ PersonaContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17735);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12367);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6964);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48740);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54225);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50508);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67101);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95766);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84271);
/* harmony import */ var _usePersonaProofs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19717);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16044);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);











function usePersonaInformation(queryOwnedPersonaInformation) {
    const { data: personas = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        queryKey: [
            'my-own-persona-info'
        ],
        queryFn: ()=>queryOwnedPersonaInformation?.(false)
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.ownPersonaChanged.on(()=>refetch()), []);
    return {
        personas
    };
}
function usePersonaContext(initialState) {
    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [selectedPersona, setSelectedPersona] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const currentIdentifier = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .currentPersonaIdentifier */ .cn);
    const { personas } = usePersonaInformation(initialState?.queryOwnedPersonaInformation);
    const currentPersona = personas.find((x)=>x.identifier === (currentIdentifier || personas[0]?.identifier));
    const { value: avatar } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>{
        if (!currentPersona) return;
        if (!initialState?.queryPersonaAvatarLastUpdateTime) return currentPersona.avatar;
        const lastUpdateTime = await initialState.queryPersonaAvatarLastUpdateTime(currentPersona.identifier);
        const storage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createKVStorage(_constants_js__WEBPACK_IMPORTED_MODULE_8__/* .PERSONA_AVATAR_DB_NAMESPACE */ .wV);
        try {
            const remote = await storage.get(currentPersona.identifier.rawPublicKey);
            if (remote && lastUpdateTime && (0,date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(lastUpdateTime, remote.updateAt)) {
                return remote.imageUrl;
            }
            return currentPersona.avatar;
        } catch  {
            return currentPersona.avatar;
        }
    }, [
        currentPersona,
        initialState?.queryPersonaAvatarLastUpdateTime
    ]);
    const { data: proofs, isLoading: fetchProofsLoading } = (0,_usePersonaProofs_js__WEBPACK_IMPORTED_MODULE_10__/* .usePersonaProofs */ .x)(currentPersona?.identifier.publicKeyAsHex);
    const accounts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!currentPersona) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP;
        const localProfiles = currentPersona.linkedProfiles.map((profile)=>({
                ...profile,
                identity: profile.identifier.userId
            }));
        if (!proofs) return localProfiles;
        const remoteProfiles = proofs.filter((x)=>!!_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_ID_PLATFORM_SOCIAL_MEDIA_MAP */ .Dm[x.platform] && x.is_valid).map((x)=>{
            const network = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_ID_PLATFORM_SOCIAL_MEDIA_MAP */ .Dm[x.platform];
            return {
                ...x,
                identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .ProfileIdentifier */ .W.of(network, x.identity).expect(`${network} and ${x.identity} should compose a valid ProfileIdentifier`)
            };
        });
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(remoteProfiles, localProfiles, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isSameProfile */ .ck).map((x)=>{
            const localProfile = localProfiles.find((profile)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isSameProfile */ .ck)(profile, x));
            if (!localProfile) return x;
            return {
                ...x,
                ...localProfile
            };
        }).sort((a, b)=>{
            const aTimeZone = a.createAt?.getTime();
            const bTimeZone = b.createAt?.getTime();
            if (a.is_valid) return -1;
            if (b.is_valid) return 1;
            if (a.last_checked_at && b.last_checked_at) {
                return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(Number(a.last_checked_at), Number(b.last_checked_at)) ? -1 : 1;
            }
            if (a.createAt && b.createAt && !!aTimeZone && !!bTimeZone) {
                return (0,date_fns__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(a.createAt, b.createAt);
            }
            if (a.identity && b.identity && a.identity !== b.identity) return a.identity < b.identity ? -1 : 1;
            return 0;
        });
    }, [
        proofs,
        currentPersona
    ]);
    const walletProofs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!proofs?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP;
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(proofs.filter((proof)=>proof.platform === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .NextIDPlatform */ .V.Ethereum), (x)=>x.identity);
    }, [
        proofs
    ]);
    return {
        accounts,
        selectedAccount,
        setSelectedAccount,
        avatar,
        personas,
        currentPersona,
        selectedPersona,
        setSelectedPersona,
        proofs,
        fetchProofsLoading,
        walletProofs
    };
}
const PersonaContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_17__/* .createContainer */ .f)(usePersonaContext);


/***/ }),

/***/ 19717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ usePersonaProofs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65734);




function usePersonaProofs(publicKey) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'bindings-by-persona',
            publicKey
        ],
        queryFn: async ()=>{
            if (_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_popup_page) await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.clearPersonaQueryCache(publicKey);
            const binding = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryExistedBindingByPersona(publicKey);
            return binding?.proofs ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP;
        }
    });
    const { refetch } = result;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages */ .q.events.ownProofChanged.on(async ()=>{
            // Clearing the query cache when the proof relation changes
            if (publicKey) {
                await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.clearPersonaQueryCache(publicKey);
            }
            refetch();
        });
    }, [
        publicKey
    ]);
    return result;
}


/***/ }),

/***/ 79836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ applyMaskColorVars),
/* harmony export */   P: () => (/* binding */ CSSVariableInjectorCSS)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32711);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13101);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89204);



// Fragment are in the form of "1, 2, 3"
// which is used for rgba(var(--x), alpha)
function getRGBFragment(x, key) {
    const { r, g, b } = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(x[key]).toRgb();
    return [
        r,
        g,
        b
    ].join(', ');
}
function CSSVariableInjectorCSS(scheme) {
    const ns = scheme === 'light' ? _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .LightColor */ .C : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DarkColor */ .I;
    const result = {};
    for (const key of Object.keys(ns)){
        // --mask-name: val;
        result[`--mask-${(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}`] = ns[key];
        result[`--mask-${(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment`] = getRGBFragment(ns, key);
    }
    return {
        ':root, :host': result,
        // TODO doesn't work on components that mounted in portal
        '[data-hide-scrollbar]': {
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
}
function applyMaskColorVars(node, scheme) {
    const ns = scheme === 'light' ? _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .LightColor */ .C : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DarkColor */ .I;
    if (node === document.body) {
        const id = '#mask-style-var';
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            document.head.appendChild(style);
        }
        applyMaskColorVars(document.getElementById(id), scheme);
        return;
    } else if (node instanceof HTMLStyleElement) {
        let rule = ':root, :host {\n';
        for (const key of Object.keys(ns)){
            // --mask-name: val;
            rule += `    --mask-${(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}: ${ns[key]};\n`;
            rule += `    --mask-${(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for (const key of Object.keys(ns)){
            node.style.setProperty('--mask-' + (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key), ns[key]);
            node.style.setProperty('--mask-' + (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
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

/***/ 39521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ usePopupCustomSnackbar),
/* harmony export */   j: () => (/* binding */ PopupSnackbarProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61212);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45190);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);





const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            width: '100%!important',
            maxWidth: '100%!important',
            top: '0!important',
            backdropFilter: 'blur(5px)',
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.wrapper}`]: {
                padding: '0 !important'
            }
        },
        content: {
            width: '100vw',
            padding: '8px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: '18px'
        },
        title: {
            lineHeight: '18px',
            padding: '0 8px'
        },
        message: {
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        success: {
            background: (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .Fq)(theme.palette.maskColor.success, 0.5),
            color: theme.palette.maskColor.white
        },
        error: {
            background: (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .Fq)(theme.palette.maskColor.danger, 0.5),
            color: theme.palette.maskColor.white
        },
        warning: {
            background: (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .Fq)(theme.palette.maskColor.warn, 0.5),
            color: theme.palette.maskColor.white
        },
        // eslint-disable-next-line tss-unused-classes/unused-classes
        default: {},
        info: {}
    }));
const PopupSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PopupSnackbarProvider(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 1,
        disableWindowBlurListener: true,
        autoHideDuration: 2000,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        classes: {
            containerRoot: classes.container,
            variantSuccess: classes.success,
            variantError: classes.error,
            variantInfo: classes.info,
            variantWarning: classes.warning
        },
        ...props
    });
});
const PopupSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ id, title, message, variant }, ref)=>{
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarContent */ .No, {
        className: cx(classes.content, classes[variant]),
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.title,
                component: "div",
                children: title
            }),
            typeof message === 'string' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.message,
                children: message
            }) : message
        ]
    }, id);
});
function usePopupCustomSnackbar() {
    const { enqueueSnackbar, closeSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_2__/* .useSnackbar */ .Ds)();
    const showSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text, options = {
        variant: 'success',
        autoHideDuration: 2000
    })=>{
        const { processing, message, variant, ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PopupSnackbarContent, {
                    id: key,
                    title: title,
                    message: message,
                    variant: variant
                });
            },
            autoHideDuration: 2000,
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

/***/ 23478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ MaskTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17711);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30911);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76550);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99979);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66584);
/* harmony import */ var _UIHelper_makeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23935);







const useStyles = (0,_UIHelper_makeStyles_js__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        label: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder'
        },
        required: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder',
            color: (0,_CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .n)(theme).redMain,
            paddingLeft: theme.spacing(0.5)
        },
        field: {
            width: '100%',
            [`& > .${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.root}`]: {
                paddingTop: theme.spacing(1),
                borderRadius: '2px',
                fontSize: 14,
                lineHeight: '16px'
            },
            '& input[type=number]': {
                MozAppearance: 'textfield',
                WebkitAppearance: 'none'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                WebkitAppearance: 'none'
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none'
            },
            '& input::-webkit-input-placeholder': {
                color: theme.palette.maskColor.third
            },
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.focused}`]: {
                background: 'transparent'
            }
        },
        input: {
            padding: theme.spacing(1),
            background: theme.palette.maskColor.input,
            fontSize: 13,
            lineHeight: '16px',
            borderRadius: 6,
            border: '1px solid transparent',
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.error}`]: {
                boxShadow: `0 0 0 ${theme.spacing(0.5)} ${_CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.redMain.alpha(0.2)}`,
                borderColor: _CSSVariables_vars_js__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.redMain.alpha(0.8)
            },
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.focused}`]: {
                borderColor: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.5) : 'transparent'
            }
        },
        inputDisabled: {
            opacity: 0.5,
            color: 'rgba(255, 255, 255, 0.4)'
        },
        inputFocused: {
            background: 'transparent',
            ..._masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? {
                outline: `2px solid ${(0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.2)}`,
                borderColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* .alpha */ .Fq)(theme.palette.maskColor.primary, 0.5)
            } : {
                boxShadow: `0 0 0 2px ${theme.palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
            }
        }
    }));
const MaskTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { label, sx, required = false, className, wrapperProps, helperText, ...rest } = props;
    const InputProps = props.InputProps ?? {};
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        sx: sx,
        ...wrapperProps,
        children: [
            label && typeof label === 'string' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                sx: {
                    mb: 1
                },
                variant: "body2",
                className: classes.label,
                children: [
                    label,
                    required ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        className: classes.required,
                        component: "span",
                        children: "*"
                    }) : null
                ]
            }) : null,
            label && typeof label !== 'string' ? label : null,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ref: ref,
                ...rest,
                classes: {
                    root: classes.field
                },
                variant: "standard",
                required: required,
                helperText: helperText,
                InputProps: {
                    disableUnderline: true,
                    classes: {
                        disabled: classes.inputDisabled,
                        focused: classes.inputFocused,
                        ...InputProps.classes
                    },
                    ...InputProps,
                    className: cx(classes.input, InputProps?.className)
                }
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                className: classes.field,
                ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(InputProps, 'disableUnderline'),
                ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(rest, 'margin', 'onKeyDown', 'onKeyUp', 'InputProps', 'inputProps', 'FormHelperTextProps')
            })
        ]
    });
});
MaskTextField.displayName = 'MaskTextField';


/***/ }),

/***/ 27966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ShadowRootTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70429);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootTooltip = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootTooltip.displayName = 'ShadowRootTooltip';


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

/***/ 75607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 28163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ useChainIdSupport)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useChainIdSupport(pluginID, feature, expectedChainId) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return Others.chainResolver.isFeatureSupported?.(chainId, feature ?? '') ?? false;
}


/***/ }),

/***/ 57131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useContacts)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);



function useContacts(pluginID) {
    const { AddressBook } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(AddressBook?.contacts ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ARRAY */ .LZ);
}


/***/ }),

/***/ 18121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useCurrencyType)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);



function useCurrencyType(pluginID) {
    const { Settings } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Settings?.currencyType ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .UNDEFINED */ .i_);
}


/***/ }),

/***/ 76010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useFiatCurrencyRate)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27043);
/* harmony import */ var _useCurrencyType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18121);





function useFiatCurrencyRate() {
    const fiatCurrencyType = (0,_useCurrencyType_js__WEBPACK_IMPORTED_MODULE_1__/* .useCurrencyType */ .P)();
    const currencyType = fiatCurrencyType?.toUpperCase() || _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        queryKey: [
            '@@fiat-currency-rates'
        ],
        queryFn: async ()=>{
            const allRates = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .FiatCurrencyRate */ .PN.getRates();
            // Pick what we need only to reduce memory cost.
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(allRates, Object.keys(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2));
        },
        select: (data)=>data[currencyType]
    });
}


/***/ }),

/***/ 16281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 91784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useMessages)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);



function useMessages(pluginID) {
    const { Message } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Message?.messages ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ARRAY */ .LZ);
}


/***/ }),

/***/ 24637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useNativeToken)
/* harmony export */ });
/* harmony import */ var _useFungibleToken_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54246);
/* harmony import */ var _useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34093);


function useNativeToken(pluginID, options) {
    const nativeTokenAddress = (0,_useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .useNativeTokenAddress */ .Z)(pluginID, options);
    return (0,_useFungibleToken_js__WEBPACK_IMPORTED_MODULE_1__/* .useFungibleToken */ .c)(pluginID, nativeTokenAddress, undefined, options);
}


/***/ }),

/***/ 34093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 33222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ ChainbaseHistory)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38645);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37049);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58021);




class ChainbaseHistoryAPI {
    async getTransactions(address, { chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet, indicator } = {}) {
        if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isValidChainId */ .J)(chainId)) return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createPageable */ .LI)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP, (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createIndicator */ .sz)(indicator));
        const txs = await (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchFromChainbase */ .Dc)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/v1/account/txs', {
            chainId,
            address,
            page: (indicator?.index ?? 0) + 1
        }));
        if (!txs) return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createPageable */ .LI)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP, (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createIndicator */ .sz)(indicator));
        const assets = txs.map((x)=>(0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__/* .toTransaction */ .vF)(chainId, x));
        return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createPageable */ .LI)(assets, (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createIndicator */ .sz)(indicator), assets.length ? (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createNextIndicator */ .gT)(indicator) : undefined);
    }
    async getTransaction(chain_id, hash, block_number, tx_index) {
        const url = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/v1/tx/detail', {
            chain_id,
            hash,
            block_number,
            tx_index
        });
        return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchFromChainbase */ .Dc)(url);
    }
    async getEventsByContract(contract_address, from_block, to_block, { chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet, indicator } = {}) {
        const url = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/v1/contract/events', {
            chain_id: chainId,
            contract_address,
            from_block,
            to_block,
            page: (indicator?.index ?? 0) + 1
        });
        return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchFromChainbase */ .Dc)(url);
    }
}
const ChainbaseHistory = new ChainbaseHistoryAPI();


/***/ }),

/***/ 58021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: () => (/* binding */ fetchFromChainbase),
/* harmony export */   t_: () => (/* binding */ normalizeTxStatus),
/* harmony export */   vF: () => (/* binding */ toTransaction)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60174);
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);





async function fetchFromChainbase(pathname) {
    const data = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchCachedJSON */ .MP)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .CHAINBASE_API_URL */ .jU, pathname));
    return data?.code === 0 ? data.data : undefined;
}
function toTransaction(chainId, tx) {
    return {
        id: tx.transaction_hash,
        hash: tx.transaction_hash,
        chainId,
        status: normalizeTxStatus(tx.status),
        timestamp: new Date(tx.block_timestamp).getTime(),
        from: tx.from_address,
        to: tx.to_address,
        assets: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP,
        blockNumber: Number.parseInt(tx.block_number, 10),
        nonce: tx.nonce
    };
}
/** 0 is fail, 1 is succeed */ function normalizeTxStatus(status) {
    const map = {
        0: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__.TransactionStatusType.FAILED,
        1: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__.TransactionStatusType.SUCCEED
    };
    return map[status];
}


/***/ }),

/***/ 62322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $h: () => (/* reexport safe */ _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_41__.$),
/* harmony export */   $u: () => (/* binding */ ContractReadonly),
/* harmony export */   A5: () => (/* reexport safe */ _CoinGecko_index_js__WEBPACK_IMPORTED_MODULE_38__.A),
/* harmony export */   AB: () => (/* binding */ HubAll),
/* harmony export */   Bv: () => (/* binding */ Web3),
/* harmony export */   CH: () => (/* binding */ Contract),
/* harmony export */   Cl: () => (/* reexport safe */ _Web3_EVM_providers_index_js__WEBPACK_IMPORTED_MODULE_5__.C),
/* harmony export */   E6: () => (/* binding */ Airdrop),
/* harmony export */   EV: () => (/* reexport safe */ _Firefly_index_js__WEBPACK_IMPORTED_MODULE_46__.E),
/* harmony export */   HV: () => (/* reexport safe */ _NextID_index_js__WEBPACK_IMPORTED_MODULE_35__.H),
/* harmony export */   Lf: () => (/* binding */ SmartPayOwner),
/* harmony export */   MJ: () => (/* binding */ Web3Readonly),
/* harmony export */   PN: () => (/* reexport safe */ _FiatCurrencyRate_index_js__WEBPACK_IMPORTED_MODULE_47__.P),
/* harmony export */   Ph: () => (/* binding */ Web3All),
/* harmony export */   Pp: () => (/* reexport safe */ _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_19__.P),
/* harmony export */   QI: () => (/* reexport safe */ _Fuse_index_js__WEBPACK_IMPORTED_MODULE_44__.Q),
/* harmony export */   Ri: () => (/* reexport safe */ _Lens_index_js__WEBPACK_IMPORTED_MODULE_29__.R),
/* harmony export */   Rk: () => (/* reexport safe */ _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_32__.Rk),
/* harmony export */   Rm: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.Rm),
/* harmony export */   S5: () => (/* reexport safe */ _RSS3_index_js__WEBPACK_IMPORTED_MODULE_45__.S),
/* harmony export */   SC: () => (/* reexport safe */ _Manager_registry_js__WEBPACK_IMPORTED_MODULE_24__.oN),
/* harmony export */   TQ: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.TQ),
/* harmony export */   UZ: () => (/* binding */ DSearch),
/* harmony export */   VN: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.VN),
/* harmony export */   Vw: () => (/* reexport safe */ _CryptoScamDB_index_js__WEBPACK_IMPORTED_MODULE_28__.V),
/* harmony export */   Xb: () => (/* binding */ Hub),
/* harmony export */   Xz: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.Xz),
/* harmony export */   Z9: () => (/* reexport safe */ _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_42__.Z),
/* harmony export */   Zy: () => (/* binding */ OthersAll),
/* harmony export */   aC: () => (/* reexport safe */ _Snapshot_index_js__WEBPACK_IMPORTED_MODULE_33__.a),
/* harmony export */   bO: () => (/* reexport safe */ _NFTSpam_index_js__WEBPACK_IMPORTED_MODULE_48__.b),
/* harmony export */   e: () => (/* reexport safe */ _GoPlusLabs_index_js__WEBPACK_IMPORTED_MODULE_37__.e),
/* harmony export */   ej: () => (/* binding */ Others),
/* harmony export */   f7: () => (/* reexport safe */ _Web3Bio_index_js__WEBPACK_IMPORTED_MODULE_36__.f),
/* harmony export */   fe: () => (/* reexport safe */ _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_31__.f),
/* harmony export */   fh: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.fh),
/* harmony export */   h_: () => (/* binding */ RedPacket),
/* harmony export */   hv: () => (/* reexport safe */ _SmartPay_libs_DepositPaymaster_js__WEBPACK_IMPORTED_MODULE_34__.h),
/* harmony export */   i8: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.i8),
/* harmony export */   iv: () => (/* reexport safe */ _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__.iv),
/* harmony export */   jI: () => (/* binding */ SmartPayFunder),
/* harmony export */   k4: () => (/* reexport safe */ _Lido_index_js__WEBPACK_IMPORTED_MODULE_25__.k),
/* harmony export */   mG: () => (/* binding */ Multicall),
/* harmony export */   nB: () => (/* reexport safe */ _ENS_index_js__WEBPACK_IMPORTED_MODULE_39__.n),
/* harmony export */   q7: () => (/* reexport safe */ _NextID_index_js__WEBPACK_IMPORTED_MODULE_17__.q),
/* harmony export */   tL: () => (/* reexport safe */ _Twitter_index_js__WEBPACK_IMPORTED_MODULE_26__.t),
/* harmony export */   uM: () => (/* reexport safe */ _DeBank_index_js__WEBPACK_IMPORTED_MODULE_40__.u),
/* harmony export */   uQ: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__.uQ),
/* harmony export */   uy: () => (/* reexport safe */ _Chainbase_index_js__WEBPACK_IMPORTED_MODULE_43__.u),
/* harmony export */   wk: () => (/* reexport safe */ _TheGraph_index_js__WEBPACK_IMPORTED_MODULE_30__.w),
/* harmony export */   xk: () => (/* reexport safe */ _Storage_apis_Storage_js__WEBPACK_IMPORTED_MODULE_12__.x),
/* harmony export */   y2: () => (/* reexport safe */ _Manager_index_js__WEBPACK_IMPORTED_MODULE_1__.y),
/* harmony export */   yd: () => (/* reexport safe */ _CoinMarketCap_index_js__WEBPACK_IMPORTED_MODULE_27__.yd)
/* harmony export */ });
/* unused harmony exports Request, RequestReadonly, FlowWeb3, FlowHub, FlowOthers, SolanaWeb3, SolanaHub, SolanaOthers, SmartPayAccount */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24835);
/* harmony import */ var _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92848);
/* harmony import */ var _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1288);
/* harmony import */ var _DSearch_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26861);
/* harmony import */ var _Multicall_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93097);
/* harmony import */ var _RedPacket_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33286);
/* harmony import */ var _SmartPay_apis_OwnerAPI_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(16769);
/* harmony import */ var _Airdrop_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19906);
/* harmony import */ var _Web3_EVM_apis_ContractAPI_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67433);
/* harmony import */ var _Web3_EVM_apis_ContractReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61871);
/* harmony import */ var _Web3_EVM_apis_ConnectionReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3543);
/* harmony import */ var _Web3_EVM_apis_RequestAPI_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81254);
/* harmony import */ var _Web3_EVM_apis_RequestReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64043);
/* harmony import */ var _Web3_Router_apis_AllHubAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53543);
/* harmony import */ var _Web3_Router_apis_AllConnectionAPI_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17103);
/* harmony import */ var _Web3_Router_apis_AllOthersAPI_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27283);
/* harmony import */ var _Manager_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55949);
/* harmony import */ var _Manager_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29836);
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(45025);
/* harmony import */ var _Lido_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7542);
/* harmony import */ var _Twitter_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(26854);
/* harmony import */ var _CoinMarketCap_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88494);
/* harmony import */ var _CryptoScamDB_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(91428);
/* harmony import */ var _Lens_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(58291);
/* harmony import */ var _TheGraph_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(94348);
/* harmony import */ var _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(63087);
/* harmony import */ var _SimpleHash_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(62595);
/* harmony import */ var _Snapshot_index_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(98773);
/* harmony import */ var _Web3_EVM_providers_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66402);
/* harmony import */ var _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66979);
/* harmony import */ var _Storage_apis_Storage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4978);
/* harmony import */ var _SmartPay_libs_DepositPaymaster_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(89288);
/* harmony import */ var _NextID_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63544);
/* harmony import */ var _NextID_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(93293);
/* harmony import */ var _Web3Bio_index_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(50247);
/* harmony import */ var _GoPlusLabs_index_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(36541);
/* harmony import */ var _CoinGecko_index_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(47797);
/* harmony import */ var _ENS_index_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(68513);
/* harmony import */ var _DeBank_index_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(86273);
/* harmony import */ var _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(94114);
/* harmony import */ var _NFTScan_index_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(3487);
/* harmony import */ var _Chainbase_index_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(33222);
/* harmony import */ var _Fuse_index_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(63502);
/* harmony import */ var _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25514);
/* harmony import */ var _RSS3_index_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(23516);
/* harmony import */ var _Firefly_index_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(87904);
/* harmony import */ var _FiatCurrencyRate_index_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(3795);
/* harmony import */ var _NFTSpam_index_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(89524);





















const DSearch = new _DSearch_index_js__WEBPACK_IMPORTED_MODULE_2__/* .DSearchAPI */ .d();



const Multicall = new _Multicall_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MulticallAPI */ .U();

const RedPacket = new _RedPacket_index_js__WEBPACK_IMPORTED_MODULE_4__/* .RedPacketAPI */ .$();








// Web3
const HubAll = new _Web3_Router_apis_AllHubAPI_js__WEBPACK_IMPORTED_MODULE_6__/* .AllHubAPI */ .a();
const Web3All = new _Web3_Router_apis_AllConnectionAPI_js__WEBPACK_IMPORTED_MODULE_7__/* .AllConnectionAPI */ .B();
const OthersAll = new _Web3_Router_apis_AllOthersAPI_js__WEBPACK_IMPORTED_MODULE_8__/* .AllOthersAPI */ .q();

const Contract = new _Web3_EVM_apis_ContractAPI_js__WEBPACK_IMPORTED_MODULE_10__/* .ContractAPI */ .J();
const ContractReadonly = new _Web3_EVM_apis_ContractReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_11__/* .ContractReadonlyAPI */ .M();


const Web3 = Web3All.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_EVM);
const Web3Readonly = new _Web3_EVM_apis_ConnectionReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_14__/* .ConnectionReadonlyAPI */ .S();
const Request = new _Web3_EVM_apis_RequestAPI_js__WEBPACK_IMPORTED_MODULE_15__/* .RequestAPI */ .U();
const RequestReadonly = new _Web3_EVM_apis_RequestReadonlyAPI_js__WEBPACK_IMPORTED_MODULE_16__/* .RequestReadonlyAPI */ .c();
const Hub = HubAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_EVM);
const Others = OthersAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_EVM);
const FlowWeb3 = Web3All.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_FLOW);
const FlowHub = HubAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_FLOW);
const FlowOthers = OthersAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_FLOW);
const SolanaWeb3 = Web3All.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_SOLANA);
const SolanaHub = HubAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_SOLANA);
const SolanaOthers = OthersAll.use(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID */ .F.PLUGIN_SOLANA);
// Smart Pay




// NextID

// Web3Bio

// GoPlusLabs

// CoinGecko

// R2D2

// Name Service

// Debank

// NFTScan

// Chainbase

// Zerion

// Fuse


// Smart Pay

const SmartPayFunder = new _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_20__/* .SmartPayFunderAPI */ .B();
const SmartPayOwner = new _SmartPay_apis_OwnerAPI_js__WEBPACK_IMPORTED_MODULE_21__/* .SmartPayOwnerAPI */ .P();
const SmartPayAccount = new _SmartPay_index_js__WEBPACK_IMPORTED_MODULE_22__/* .SmartPayAccountAPI */ .C();
// RSS3

// Airdrop
const Airdrop = new _Airdrop_index_js__WEBPACK_IMPORTED_MODULE_23__/* .AirdropAPI */ .H();
// Firefly

// FiatCurrencyRate

// Calendar

// NFT Spam



/***/ }),

/***/ 29763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $q: () => (/* binding */ multipliedBy),
/* harmony export */   FH: () => (/* binding */ toFixed),
/* harmony export */   FI: () => (/* binding */ isLessThan),
/* harmony export */   Fr: () => (/* binding */ isZero),
/* harmony export */   KH: () => (/* binding */ isGreaterThanOrEqualTo),
/* harmony export */   OI: () => (/* binding */ addThousandSeparators),
/* harmony export */   PD: () => (/* binding */ plus),
/* harmony export */   PW: () => (/* binding */ isLessThanOrEqualTo),
/* harmony export */   SI: () => (/* binding */ scale10),
/* harmony export */   T1: () => (/* binding */ isGreaterThan),
/* harmony export */   h9: () => (/* binding */ minus),
/* harmony export */   hC: () => (/* binding */ dividedBy),
/* harmony export */   lK: () => (/* binding */ isLessThanOrEqualTo),
/* harmony export */   pu: () => (/* binding */ rightShift),
/* harmony export */   ry: () => (/* binding */ ONE),
/* harmony export */   sK: () => (/* binding */ isGreaterThanOrEqualTo),
/* harmony export */   ux: () => (/* binding */ toZero),
/* harmony export */   vr: () => (/* binding */ trimZero),
/* harmony export */   w5: () => (/* binding */ leftShift),
/* harmony export */   wA: () => (/* binding */ pow10),
/* harmony export */   xE: () => (/* binding */ ZERO),
/* harmony export */   xP: () => (/* binding */ isPositive)
/* harmony export */ });
/* unused harmony exports isOne, isEqual, toNumber */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81770);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27624);


const ZERO = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O('0');
const ONE = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O('1');
/** if abs(n) < m then return 0 */ function toZero(n, m = 1e-6) {
    if (!n) return ZERO;
    const n_ = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n);
    return n_.abs().isLessThanOrEqualTo(m) ? ZERO : n_;
}
/** n === 0 */ function isZero(n) {
    return n === 0 || n === '0' || n === '0x0' || new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).isZero();
}
/** n === 1 */ function isOne(n) {
    return n === 1 || n === '1' || new BigNumber(n).isEqualTo(ONE);
}
/** n === m */ function isEqual(n, m) {
    return new BigNumber(n).isEqualTo(m);
}
/** a > b */ function isGreaterThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isGreaterThan(b);
}
/** a >= b */ function isGreaterThanOrEqualTo(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isGreaterThanOrEqualTo(b);
}

/** a < b */ function isLessThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isLessThan(b);
}
/** a <= b */ function isLessThanOrEqualTo(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).isLessThanOrEqualTo(b);
}

/** a > 0 */ function isPositive(n) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).isPositive();
}
/** a * b */ function multipliedBy(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).multipliedBy(b);
}
/** a + b */ function plus(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).plus(b);
}
/** a - b */ function minus(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).minus(b);
}
/** 10 ** n */ /** @deprecated use scale10 */ function pow10(n) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(10).pow(n);
}
/** scale 10 ** n * m */ function scale10(m, n = 1) {
    const x = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(1).shiftedBy(n);
    return n === 1 ? x : x.multipliedBy(m);
}
/** n * (10 ** m) */ function rightShift(n, m) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).shiftedBy(+(m ?? 0));
}
/** n / (10 ** m) */ function leftShift(n, m) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(n).shiftedBy(-(m ?? 0));
}
/** a / b */ function dividedBy(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(a).dividedBy(b);
}
/** new BigNumber(n).toNumber() */ function toNumber(value, fallback = 0) {
    return new BigNumber(value ?? fallback).toNumber();
}
function toFixed(value = 0, decimalPlaces) {
    const n = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value);
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(decimalPlaces) ? n.toFixed(decimalPlaces) : n.toFixed();
}
/** Trim ending zeros of decimals */ function trimZero(digit) {
    const result = digit.replaceAll(/\.([1-9]*)?0+$/g, (_, p1)=>{
        return p1 ? `.${p1}` : '';
    });
    if (isLessThan(result, 1)) {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result, '0');
    }
    return result;
}
function addThousandSeparators(num) {
    return num.toString().replaceAll(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}


/***/ }),

/***/ 53007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bl: () => (/* binding */ resolveResourceURL),
/* harmony export */   Bz: () => (/* binding */ resolveArweaveURL),
/* harmony export */   JF: () => (/* binding */ resolveNextIDPlatformName),
/* harmony export */   N: () => (/* binding */ resolveCurrencyFullName),
/* harmony export */   Ri: () => (/* binding */ resolveNextIDPlatformLink),
/* harmony export */   Vo: () => (/* binding */ resolveSocialAddressLink),
/* harmony export */   X5: () => (/* binding */ resolveNetworkWalletName),
/* harmony export */   j$: () => (/* binding */ resolveNextID_NetworkPluginID),
/* harmony export */   lz: () => (/* binding */ resolveSourceTypeName),
/* harmony export */   mg: () => (/* binding */ resolveIPFS_URL),
/* harmony export */   nX: () => (/* binding */ resolveCrossOriginURL),
/* harmony export */   uL: () => (/* binding */ resolveCurrencyName),
/* harmony export */   ww: () => (/* binding */ resolveNextIDPlatformWalletName),
/* harmony export */   yT: () => (/* binding */ isLocaleResource)
/* harmony export */ });
/* unused harmony exports isIPFS_CID, isIPFS_Resource, isArweaveResource, resolveLocalURL, trimQuery, resolveIPFS_CID */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74170);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45569);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95766);
/* harmony import */ var _specs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43434);




const resolveSocialAddressLink = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Address]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.ARBID]: 'https://arb.id/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.ENS]: 'https://ens.domains/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.SPACE_ID]: 'https://space.id/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.RSS3]: 'https://rss3.bio/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Crossbell]: 'https://crossbell.io/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Firefly]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.SOL]: 'https://naming.bonfida.org/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.NEXT_ID]: 'https://next.id/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.CyberConnect]: 'https://cyberconnect.me/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Leaderboard]: 'https://ethleaderboard.xyz/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Sybil]: 'https://sybil.org/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.TwitterBlue]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Mask]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.Lens]: '',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SocialAddressType */ .b.OpenSea]: ''
}, ()=>'');
const resolveSourceTypeName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.DeBank]: 'DeBank',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Zerion]: 'Zerion',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.RSS3]: 'RSS3',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CoinMarketCap]: 'CoinMarketCap',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.UniswapInfo]: 'UniswapInfo',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.OpenSea]: 'OpenSea',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Rarible]: 'Rarible',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.LooksRare]: 'LooksRare',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.NFTScan]: 'NFTScan',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Zora]: 'Zora',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Gem]: 'Gem',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Alchemy_EVM]: 'Alchemy_EVM',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Alchemy_FLOW]: 'Alchemy_FLOW',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.RaritySniper]: 'RaritySniper',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.TraitSniper]: 'TraitSniper',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Chainbase]: 'Chainbase',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.X2Y2]: 'X2Y2',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.MagicEden]: 'MagicEden',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Element]: 'Element',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Flow]: 'Flow',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Solana]: 'Solana',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Solsea]: 'Solsea',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Solanart]: 'Solanart',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.R2D2]: 'R2D2',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Rabby]: 'Rabby',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CoinGecko]: 'CoinGecko',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CF]: 'CloudFlare',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.GoPlus]: 'GoPlus',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.OKX]: 'OKX',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Uniswap]: 'Uniswap',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.NFTX]: 'NFTX',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Etherscan]: 'Etherscan',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.CryptoPunks]: 'CryptoPunks',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.SimpleHash]: 'SimpleHash',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceType */ .PO.Approval]: 'Approval'
}, (providerType)=>{
    throw new Error(`Unknown source type: ${providerType}.`);
});
const resolveCurrencyName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.BTC]: 'BTC',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.ETH]: 'ETH',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.NATIVE]: 'ETH',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.USD]: 'USD',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.CNY]: 'CNY',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.JPY]: 'JPY',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.HKD]: 'HKD',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.EUR]: 'EUR'
}, (CurrencyType)=>{
    throw new Error(`Unknown currency type: ${CurrencyType}.`);
});
const resolveCurrencyFullName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.BTC]: 'Bitcoin',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.ETH]: 'Ethereum',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.NATIVE]: 'Ethereum',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.USD]: 'United States Dollar',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.CNY]: 'Chinese Yuan',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.JPY]: 'Japanese Yen',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.HKD]: 'Hong Kong Dollar',
    [_specs_index_js__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType */ .V2.EUR]: 'Euro'
}, (CurrencyType)=>{
    throw new Error(`Unknown currency type: ${CurrencyType}.`);
});
const resolveNetworkWalletName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM]: 'ETH Wallet',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: 'Solana Wallet',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: 'Flow Wallet'
}, (network)=>{
    throw new Error(`Unknown network plugin-id: ${network}`);
});
const resolveNextIDPlatformWalletName = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function(platform) {
    const pluginId = resolveNextID_NetworkPluginID(platform);
    if (!pluginId) return `${platform} wallet`;
    return resolveNetworkWalletName(pluginId);
});
const resolveNextID_NetworkPluginID = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Ethereum]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.NextID]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.GitHub]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Keybase]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Twitter]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.ENS]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.RSS3]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.LENS]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.REDDIT]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SYBIL]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.EthLeaderboard]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SpaceId]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Farcaster]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Bit]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Unstoppable]: undefined,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.CyberConnect]: undefined
}, ()=>{
    return undefined;
});
const resolveNextIDPlatformName = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Ethereum]: 'Ethereum',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.NextID]: 'NEXT.ID',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.GitHub]: 'Github',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Keybase]: 'Keybase',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Twitter]: 'Twitter',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.ENS]: 'ENS',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.RSS3]: 'RSS3',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.LENS]: 'Lens',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.REDDIT]: 'Reddit',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SYBIL]: 'Sybil',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.EthLeaderboard]: 'EthLeaderboard',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SpaceId]: 'Space ID',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Farcaster]: 'Farcaster',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Bit]: '.bit',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Unstoppable]: 'Unstoppable Domains',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.CyberConnect]: 'CyberConnect'
}, ()=>{
    return '';
});
const resolveNextIDPlatformLink = (networkPlatform, identifier, name)=>{
    switch(networkPlatform){
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Ethereum:
            return `https://etherscan.io/address/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.NextID:
            return 'https://next.id/';
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.GitHub:
            return `https://github.com/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Keybase:
            return `https://keybase.io/${name}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Twitter:
            return `https://twitter.com/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.ENS:
            return `https://app.ens.domains/name/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.RSS3:
            return `https://rss3.io/result?search=${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.LENS:
            return `https://www.lensfrens.xyz/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.REDDIT:
            return `https://www.reddit.com/user/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SYBIL:
            return 'https://sybil.org/';
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.EthLeaderboard:
            return 'https://ethleaderboard.xyz/';
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.SpaceId:
            return `https://bscscan.com/address/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Farcaster:
            return `https://warpcast.com/${identifier}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Bit:
            return `https://bit.cc/${name}`;
        case _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NextIDPlatform */ .V.Unstoppable:
            return `https://ud.me/${name}`;
        default:
            return '';
    }
};
// https://stackoverflow.com/a/67176726
const MATCH_IPFS_CID_RAW = 'Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[2-7A-Za-z]{58,}|B[2-7A-Z]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[\\dA-F]{50,}';
const MATCH_IPFS_DATA_RE = /ipfs\/(data:.*)$/;
const MATCH_IPFS_CID_RE = new RegExp(`(${MATCH_IPFS_CID_RAW})`);
const MATCH_IPFS_CID_STRICT_RE = new RegExp(`^(?:${MATCH_IPFS_CID_RAW})$`);
const MATCH_IPFS_CID_AT_STARTS_RE = new RegExp(`^https://(?:${MATCH_IPFS_CID_RAW})`);
const MATCH_IPFS_CID_AND_PATHNAME_RE = new RegExp(`(?:${MATCH_IPFS_CID_RAW})\\/?.*`);
const MATCH_LOCAL_RESOURCE_URL_RE = /^(data|blob:|\w+-extension:\/\/|<svg\s)/;
const CORS_HOST = 'https://cors-next.r2d2.to';
const IPFS_GATEWAY_HOST = 'https://hoot.it';
function isIPFS_CID(cid) {
    return MATCH_IPFS_CID_STRICT_RE.test(cid);
}
function isIPFS_Resource(str) {
    return MATCH_IPFS_CID_RE.test(str);
}
function isArweaveResource(str) {
    return str.startsWith('ar:');
}
function isLocaleResource(url) {
    return MATCH_LOCAL_RESOURCE_URL_RE.test(url);
}
function resolveLocalURL(url) {
    if (url.startsWith('<svg ')) return `data:image/svg+xml;base64,${btoa(url)}`;
    return url;
}
/**
 * Remove query from IPFS url, as it is not needed
 * and will increase requests sometimes.
 * For example https://ipfs.io/ipfs/<same-cid>?id=67891 and https://ipfs.io/ipfs/<same-cid>?id=67892
 * are set to two different NFTs, but according to the same CID,
 * they are exactly the same.
 */ function trimQuery(url) {
    return url.replace(/\?.+$/, '');
}
function resolveIPFS_CID(str) {
    return str.match(MATCH_IPFS_CID_RE)?.[1];
}
function resolveIPFS_URL(cidOrURL) {
    if (!cidOrURL) return cidOrURL;
    // eliminate cors proxy
    if (cidOrURL.startsWith(CORS_HOST)) {
        return trimQuery(resolveIPFS_URL(decodeURIComponent(cidOrURL.replace(new RegExp(`^${CORS_HOST}??`), ''))));
    }
    // a ipfs.io host
    if (cidOrURL.startsWith(IPFS_GATEWAY_HOST)) {
        // base64 data string
        const [_, data] = cidOrURL.match(MATCH_IPFS_DATA_RE) ?? [];
        if (data) return decodeURIComponent(data);
        // plain
        return trimQuery(decodeURIComponent(cidOrURL));
    }
    // a ipfs hash fragment
    if (isIPFS_Resource(cidOrURL)) {
        // starts with a cid
        if (MATCH_IPFS_CID_AT_STARTS_RE.test(cidOrURL)) {
            try {
                const u = new URL(cidOrURL);
                const cid = resolveIPFS_CID(cidOrURL);
                if (cid) {
                    if (u.pathname === '/') {
                        return resolveIPFS_URL((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://ipfs.io/ipfs/:cid', {
                            cid
                        }));
                    } else {
                        return resolveIPFS_URL((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://ipfs.io/ipfs/:cid/:path', {
                            cid,
                            path: u.pathname.slice(1)
                        }));
                    }
                }
            } catch (error) {
                console.log({
                    error
                });
            }
        }
        // do nothing
        const pathname = cidOrURL.match(MATCH_IPFS_CID_AND_PATHNAME_RE)?.[0];
        if (pathname) return trimQuery(`${IPFS_GATEWAY_HOST}/ipfs/${pathname}`);
    }
    return cidOrURL;
}
function resolveArweaveURL(url) {
    if (!url) return url;
    if (url.startsWith('https://')) return url;
    return (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('https://arweave.net/:str', {
        str: url
    });
}
/**
 * Please do not use to resolve an image or an video resource, because that's
 * not allowed by the cors agent server
 */ function resolveCrossOriginURL(url) {
    if (!url) return url;
    if (isLocaleResource(url)) return url;
    if (url.startsWith(CORS_HOST)) return url;
    return `${CORS_HOST}?${encodeURIComponent(url)}`;
}
function resolveResourceURL(url) {
    if (!url) return url;
    if (isLocaleResource(url)) return resolveLocalURL(url);
    if (isArweaveResource(url)) return resolveArweaveURL(url);
    return resolveIPFS_URL(url);
}


/***/ }),

/***/ 62649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ SearchResultType),
/* harmony export */   PO: () => (/* binding */ SourceType),
/* harmony export */   Qd: () => (/* binding */ GasOptionType),
/* harmony export */   Rq: () => (/* binding */ MessageStateType),
/* harmony export */   T8: () => (/* binding */ ActivityType),
/* harmony export */   TransactionStatusType: () => (/* binding */ TransactionStatusType),
/* harmony export */   V2: () => (/* binding */ CurrencyType),
/* harmony export */   hY: () => (/* binding */ ThemeMode),
/* harmony export */   iv: () => (/* binding */ TokenType),
/* harmony export */   oU: () => (/* binding */ OrderSide),
/* harmony export */   vt: () => (/* binding */ TransactionDescriptorType)
/* harmony export */ });
/* unused harmony exports TransactionReceiptStatusType, FontSize, ThemeColor */
var CurrencyType;
(function(CurrencyType) {
    CurrencyType["NATIVE"] = 'native';
    CurrencyType["BTC"] = 'btc';
    CurrencyType["ETH"] = 'eth';
    CurrencyType["USD"] = 'usd';
    CurrencyType["CNY"] = 'cny';
    CurrencyType["HKD"] = 'hkd';
    CurrencyType["JPY"] = 'jpy';
    CurrencyType["EUR"] = 'eur';
})(CurrencyType || (CurrencyType = {}));
var OrderSide;
(function(OrderSide) {
    OrderSide[OrderSide["Buy"] = 0] = "Buy";
    OrderSide[OrderSide["Sell"] = 1] = "Sell";
})(OrderSide || (OrderSide = {}));
var GasOptionType;
(function(GasOptionType) {
    GasOptionType["FAST"] = 'fast';
    GasOptionType["NORMAL"] = 'normal';
    GasOptionType["SLOW"] = 'slow';
    GasOptionType["CUSTOM"] = 'custom';
})(GasOptionType || (GasOptionType = {}));
var TokenType;
(function(TokenType) {
    TokenType["Fungible"] = "Fungible";
    TokenType["NonFungible"] = "NonFungible";
})(TokenType || (TokenType = {}));
var SourceType;
(function(SourceType) {
    SourceType[// FT assets
    "DeBank"] = "DeBank";
    SourceType["Zerion"] = "Zerion";
    SourceType["Flow"] = "Flow";
    SourceType["Solana"] = "Solana";
    SourceType["CoinGecko"] = "CoinGecko";
    SourceType["CoinMarketCap"] = "CoinMarketCap";
    SourceType["UniswapInfo"] = "UniswapInfo";
    SourceType["CF"] = 'CloudFlare';
    SourceType["GoPlus"] = "GoPlus";
    SourceType[// NFT assets
    "Rabby"] = "Rabby";
    SourceType["Gem"] = "Gem";
    SourceType["RSS3"] = "RSS3";
    SourceType["Zora"] = 'zora';
    SourceType["OpenSea"] = 'opensea';
    SourceType["Rarible"] = 'rarible';
    SourceType["LooksRare"] = 'looksrare';
    SourceType["NFTScan"] = "NFTScan";
    SourceType["Alchemy_EVM"] = "Alchemy_EVM";
    SourceType["Alchemy_FLOW"] = "Alchemy_FLOW";
    SourceType["Chainbase"] = "Chainbase";
    SourceType["X2Y2"] = "X2Y2";
    SourceType["MagicEden"] = "MagicEden";
    SourceType["Element"] = "Element";
    SourceType["Solsea"] = "Solsea";
    SourceType["Solanart"] = "Solanart";
    SourceType["OKX"] = "OKX";
    SourceType["Uniswap"] = "Uniswap";
    SourceType["NFTX"] = "NFTX";
    SourceType["Etherscan"] = "Etherscan";
    SourceType["CryptoPunks"] = "CryptoPunks";
    SourceType["SimpleHash"] = "SimpleHash";
    SourceType[// Rarity
    "RaritySniper"] = "RaritySniper";
    SourceType["TraitSniper"] = "TraitSniper";
    SourceType[// Token List
    "R2D2"] = "R2D2";
    SourceType["Approval"] = "Approval";
})(SourceType || (SourceType = {}));
var SearchResultType;
(function(SearchResultType) {
    SearchResultType[// e.g., 0x6a7122B831c2B79c508A978f73f2ee23171279B3
    "EOA"] = "EOA";
    SearchResultType[// e.g., vitalik.eth or vitalik.bnb
    "Domain"] = "Domain";
    SearchResultType[// e.g., $MASK #MASK or its address 0x69af81e73a73b40adf4f3d4223cd9b1ece623074
    "FungibleToken"] = "FungibleToken";
    SearchResultType[// e.g., #APE
    "NonFungibleToken"] = "NonFungibleToken";
    SearchResultType[// e.g., #punks
    "NonFungibleCollection"] = "NonFungibleCollection";
    SearchResultType[// e.g., realMaskNetwork
    "CollectionListByTwitterHandler"] = "CollectionListByTwitterHandler";
    SearchResultType[// e.g., PancakeSwap
    "DAO"] = "DAO";
})(SearchResultType || (SearchResultType = {}));
var ActivityType;
(function(ActivityType) {
    ActivityType["Transfer"] = "Transfer";
    ActivityType["Mint"] = "Mint";
    ActivityType["Sale"] = "Sale";
    ActivityType["Offer"] = "Offer";
    ActivityType["Burn"] = "Burn";
    ActivityType["List"] = "List";
    ActivityType["CancelOffer"] = "CancelOffer";
})(ActivityType || (ActivityType = {}));
var MessageStateType;
(function(MessageStateType) {
    MessageStateType[MessageStateType["NOT_DEPEND"] = 1] = "NOT_DEPEND";
    MessageStateType[MessageStateType["APPROVED"] = 2] = "APPROVED";
    MessageStateType[MessageStateType["DENIED"] = 3] = "DENIED";
})(MessageStateType || (MessageStateType = {}));
var TransactionStatusType;
(function(TransactionStatusType) {
    TransactionStatusType[TransactionStatusType["NOT_DEPEND"] = 1] = "NOT_DEPEND";
    TransactionStatusType[TransactionStatusType["SUCCEED"] = 2] = "SUCCEED";
    TransactionStatusType[TransactionStatusType["FAILED"] = 3] = "FAILED";
})(TransactionStatusType || (TransactionStatusType = {}));
var TransactionReceiptStatusType;
(function(TransactionReceiptStatusType) {
    TransactionReceiptStatusType[TransactionReceiptStatusType["FAILED"] = 0] = "FAILED";
    TransactionReceiptStatusType[TransactionReceiptStatusType["SUCCEED"] = 1] = "SUCCEED";
    TransactionReceiptStatusType[TransactionReceiptStatusType["NOT_DEPEND"] = 2] = "NOT_DEPEND";
})(TransactionReceiptStatusType || (TransactionReceiptStatusType = {}));
var TransactionDescriptorType;
(function(TransactionDescriptorType) {
    TransactionDescriptorType[/** Transfer on chain value. */ "TRANSFER"] = 'transfer';
    TransactionDescriptorType[/** A transaction to operate state mutations. */ "INTERACTION"] = 'interaction';
    TransactionDescriptorType[/** A transaction to deploy programs. */ "DEPLOYMENT"] = 'deployment';
    TransactionDescriptorType[/** A transaction to cancel a previous transaction. */ "CANCEL"] = 'cancel';
    TransactionDescriptorType[/** A transaction to modify a previous transaction. */ "RETRY"] = 'retry';
})(TransactionDescriptorType || (TransactionDescriptorType = {}));
var FontSize;
(function(FontSize) {
    FontSize["X_Small"] = 'xSmall';
    FontSize["Small"] = 'small';
    FontSize["Normal"] = 'normal';
    FontSize["Large"] = 'large';
    FontSize["X_Large"] = 'xLarge';
})(FontSize || (FontSize = {}));
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["Light"] = 'light';
    ThemeMode["Dark"] = 'dark';
})(ThemeMode || (ThemeMode = {}));
var ThemeColor// EIP3091
// Indicate a built-in chain or customized one.
/** An unique ID for each network */ /** The ID of the plugin that provides the functionality of the network. */ /** The chain id */ /** The network type */ /** The network icon */ /** The network icon in fixed color */ /** The average time for mining a block (unit: seconds). */ /** The background gradient color for relative network bar */ /** The network name. e.g. Ethereum */ /** The network short name. e.g. 'ETH' */ /** Is a mainnet network */ /** An unique ID for each wallet provider */ /** The ID of a plugin that provides the adoption of this provider. */ /** The provider type */ /** The provider icon */ /** The provider name */ /** The provider bar background gradient color */ /** The provider icon filter color */ /** Enable requirements */ /** A link to provider's home website */ /** A link only contains domain name */ /** A link to download the client application */ /** For NFT, it could be `${chainId}.${contractAddress}.${tokenId}` */ /** NFT has tokenId */ /** Added by user */ // Sorted by market cap.
/** source type */ /** @example 2.5% */ /** source type */ /** Might be the format `TheName #42` */ /** image url */ /** Useful for progress loading */ /** source media url */ /** source media type */ /** project url */ /** source type */ /** some providers define id, while others don't. For those don't, we will fallback to contract address */ /** the balance of the current owner */ /** the amount of holders */ /** verified by provider */ /** unix timestamp */ /** source type */ // collection name
// The param `from` of the transaction
// The param `to` of the transaction
// The user address who received the NFT
// The user address who sent the NFT
// #region solana
// #endregion
/** the token id */ /** the address or uid of the token owner */ /** the contract info */ /** the media metadata */ /** the collection info */ /** The type of trait. */ /** The value of trait. */ /** The rarity of trait in percentage. */ /** unix timestamp */ /** unix timestamp */ /** tokens available to make an order */ /** tokens available to make an offer */ /** chain Id */ /** permalink of asset */ /** token amount */ /** transaction hash */ /** buy or sell */ /** the account make the order */ /** the account fullfil the order */ /** unix timestamp */ /** unix timestamp */ /** calculated current price */ /** the payment token and corresponding price */ /** source type */ /** chain Id */ /** event type */ /** permalink of asset */ /** name of asset */ /** symbol of asset */ /** token amount */ /** transaction hash */ /** the account make the order */ /** the account fullfil the order */ /** the account who send the token */ /** the account who receive the token */ /** unix timestamp */ /** relate token price */ /** the payment token and corresponding price */ /** the payment token */ /** source type */ /**
 * A fungible token but with more metadata
 */ /** currently balance */ /** estimated price */ /** estimated value */ /**
 * A non-fungible token but with more metadata
 */ /** permalink */ /** the creator data */ /** the owner data */ /** estimated price */ /** rarity */ /** traits of the digital asset */ /** token on auction */ /** related orders */ /** related events */ /** all payment tokens */ /** the payment token and corresponding price */ /** source type */ /**
 * Authorization about a fungible token.
 */ /** spender address */ /** spender name */ /** spender logo */ /** allowance token amount of this spender */ /** allowance token amount(not formatted by token decimals) of this spender */ /**
 * Authorization about a non-fungible contract.
 */ /** The original searched keyword */ /** alias name list, e.g. binance for bnb. */ // If pin this to top of results
/** The id of token on the provider platform */ /** The transaction type */ /** a transaction title. */ /** The original transaction object */ /** The address of the token leveraged to swap other tokens */ /** The amount of the token leveraged to swap other tokens */ /** a human-readable description. */ /** a human-readable description for successful transaction. */ /** a human-readable title for successful transaction. */ /** a human-readable description for failed transaction. */ /** a human-readable title for failed transaction. */ /** The spender address of erc20 approve */ /** The spender address of erc721 approve */ /** The method name of contract function */ /** The Non-Fungible token description */ /** The custom token description */ /** the descriptor type */ /** chain id */ /** the from address. */ /** the to address */ /** the value amount (polyfill to 0x0 if absent in the original transaction) */ /** code to deploy */ /** transaction hash */ /** methods */ /** name */ /** actual parameters */ /** nested children contexts */ /** address */ /** address */ /** unix timestamp */ /** transferred assets */ /** estimated tx fee */ /** the initial transaction id */ /** the id for accessing tx from candidates */ /** the chain id */ /** status type */ /** all available tx candidates */ /** record drafted at */ /** record created at */ /** record updated at */ /** a dynamically computed field in the hook which means the minted (initial) transaction */ /** Emit if the balance of the account updated. */ /** Emit if the balance of the chain updated. */ /** Emit when error occur */ /** Emit when the watched transaction status updated. */ /** Is testnets valid */ /** The currency of estimated values and prices. */ /** The gas options type */ /** The source type of fungible assets */ /** The source type of non-fungible assets */ /** Set the default fiat currency. */ /** The tracked addresses of currently chosen sub-network */ /** Add a contact into address book. */ /** Remove a contact from address book. */ /** Rename an name of contact from address book. */ /** The id of the used network. */ /** The used network. */ /** All available networks. */ /** Add a new network. */ /** Use the network RPC to build a connection. */ /** Update a network. */ /** Remove a network */ /** Is approved */ /** Detect if an account is approved the statement */ /** Approve statement of designate account */ /** Revoke statement of designate account */ /** Merge many social addresses into a social account. Don't overwrite it in sub-classes. */ /** Find all social addresses related to the given identity. */ /** get address of domain name */ /** get domain name of address */ /** safely get domain name of address */ /** The user trusted fungible tokens. */ /** The user trusted non-fungible tokens. */ /** The user blocked fungible tokens. */ /** The user blocked non-fungible tokens. */ /** Credible fungible tokens */ /** Credible non-fungible tokens */ /** Add a token */ /** Remove a token */ /** Unblock a token */ /** Block a token */ /** Create a credible fungible token */ /** Create a credible non-fungible token */ /** All unresolved requests. */ /** Updates a request. */ /** Applies a request. */ /** Applies a request and waits for confirmation from the user. */ /** Approves a request. */ /** Rejects a request. */ /** Rejects all requests. */ /** The tracked transactions of currently chosen sub-network */ /** Get a transaction record. */ /** Add a transaction record. */ /** Replace a transaction with new record. */ /** Update transaction status. */ /** Remove a transaction record. */ /** Get all transaction records. */ /** Clear all transactions of the account under given chain */ /** Step 1: Create a transaction formatting context. */ /** Step 2: Create a transaction descriptor */ /** Elaborate a transaction in a human-readable format. */ /** Notify error */ /** Notify transaction status */ /** The account of the currently visiting site. */ /** The chain id of the currently visiting site. */ /** The network type of the currently visiting site. */ /** The provider type of the currently visiting site. */ /** Detect if a provider is ready */ /** Wait until a provider ready */ /** Connect with the provider and set chain id. */ /** Disconnect with the provider. */ /** Sign a message with persona (w or w/o popups) */ // TODO: this is not the best place to put this signature, but to avoid IOContext leaked as a global variable, we'll put it here for now.
;
(function(ThemeColor) {
    ThemeColor["Blue"] = 'rgb(37, 99, 235)';
})(ThemeColor || (ThemeColor = {}));


/***/ }),

/***/ 33026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $F: () => (/* binding */ getENSConstants),
/* harmony export */   AA: () => (/* binding */ useRedPacketConstants),
/* harmony export */   AM: () => (/* binding */ getLidoConstant),
/* harmony export */   BL: () => (/* binding */ useLensConstants),
/* harmony export */   BO: () => (/* binding */ getSmartPayConstants),
/* harmony export */   Bx: () => (/* binding */ getDeBankConstants),
/* harmony export */   CW: () => (/* binding */ getCryptoPunksConstants),
/* harmony export */   FF: () => (/* binding */ getLensProfileConstants),
/* harmony export */   Fd: () => (/* binding */ useSmartPayConstants),
/* harmony export */   GV: () => (/* binding */ getRedPacketConstants),
/* harmony export */   Gr: () => (/* binding */ getTraderConstants),
/* harmony export */   Hi: () => (/* binding */ getTokenListConstants),
/* harmony export */   IJ: () => (/* binding */ getNftRedPacketConstant),
/* harmony export */   N_: () => (/* binding */ useGitcoinConstants),
/* harmony export */   Ox: () => (/* binding */ getAirdropClaimersConstants),
/* harmony export */   PN: () => (/* binding */ usePetConstants),
/* harmony export */   Qq: () => (/* binding */ useArtBlocksConstants),
/* harmony export */   Qt: () => (/* binding */ getGitcoinConstant),
/* harmony export */   T: () => (/* binding */ getRPCConstant),
/* harmony export */   U1: () => (/* binding */ getCoinGeckoConstant),
/* harmony export */   V6: () => (/* binding */ getCoinGeckoConstants),
/* harmony export */   _x: () => (/* binding */ getTokenConstant),
/* harmony export */   aV: () => (/* binding */ getTokenConstants),
/* harmony export */   cY: () => (/* binding */ useAirdropClaimersConstants),
/* harmony export */   ed: () => (/* binding */ getTokenAssetBaseURLConstants),
/* harmony export */   fj: () => (/* binding */ getArbConstants),
/* harmony export */   gA: () => (/* binding */ getEtherscanConstants),
/* harmony export */   hc: () => (/* binding */ getOpenOceanConstants),
/* harmony export */   i_: () => (/* binding */ getMaskBoxConstants),
/* harmony export */   k$: () => (/* binding */ getGoPlusLabsConstants),
/* harmony export */   kd: () => (/* binding */ useTokenConstants),
/* harmony export */   kt: () => (/* binding */ useMaskBoxConstants),
/* harmony export */   oo: () => (/* binding */ useTokenConstant),
/* harmony export */   p8: () => (/* binding */ getSmartPayConstant),
/* harmony export */   pS: () => (/* binding */ getNftRedPacketConstants),
/* harmony export */   rH: () => (/* binding */ getSpaceIdConstants),
/* harmony export */   rY: () => (/* binding */ ChainIdList),
/* harmony export */   rd: () => (/* binding */ getAaveConstant),
/* harmony export */   t0: () => (/* binding */ getRPCConstants),
/* harmony export */   uq: () => (/* binding */ useNftRedPacketConstants),
/* harmony export */   wB: () => (/* binding */ getEthereumConstant),
/* harmony export */   yj: () => (/* binding */ getMaskBoxConstant),
/* harmony export */   z8: () => (/* binding */ getRedPacketConstant)
/* harmony export */ });
/* unused harmony exports getEthereumConstants, useEthereumConstant, useEthereumConstants, getDeBankConstant, useDeBankConstant, useDeBankConstants, useCoinGeckoConstant, useCoinGeckoConstants, getGitcoinConstants, useGitcoinConstant, getOpenOceanConstant, useOpenOceanConstant, useOpenOceanConstants, useRedPacketConstant, getTraderConstant, useTraderConstant, useTraderConstants, getTrendingConstant, getTrendingConstants, useTrendingConstant, useTrendingConstants, useMaskBoxConstant, useRPCConstant, useRPCConstants, getEtherscanConstant, useEtherscanConstant, useEtherscanConstants, getTokenListConstant, useTokenListConstant, useTokenListConstants, getTokenAssetBaseURLConstant, useTokenAssetBaseURLConstant, useTokenAssetBaseURLConstants, getArtBlocksConstant, getArtBlocksConstants, useArtBlocksConstant, useNftRedPacketConstant, getAaveConstants, useAaveConstant, useAaveConstants, getLidoConstants, useLidoConstant, useLidoConstants, getPetConstant, getPetConstants, usePetConstant, useSmartPayConstant, getLensConstant, getLensConstants, useLensConstant, getAirdropClaimersConstant, useAirdropClaimersConstant */
/* harmony import */ var _masknet_web3_constants_evm_ethereum_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45831);
/* harmony import */ var _masknet_web3_constants_evm_debank_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92995);
/* harmony import */ var _masknet_web3_constants_evm_coingecko_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60702);
/* harmony import */ var _masknet_web3_constants_evm_gitcoin_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72071);
/* harmony import */ var _masknet_web3_constants_evm_openocean_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56971);
/* harmony import */ var _masknet_web3_constants_evm_red_packet_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19684);
/* harmony import */ var _masknet_web3_constants_evm_nft_red_packet_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62337);
/* harmony import */ var _masknet_web3_constants_evm_token_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42482);
/* harmony import */ var _masknet_web3_constants_evm_trader_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25189);
/* harmony import */ var _masknet_web3_constants_evm_trending_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66745);
/* harmony import */ var _masknet_web3_constants_evm_mask_box_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1353);
/* harmony import */ var _masknet_web3_constants_evm_rpc_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91687);
/* harmony import */ var _masknet_web3_constants_evm_etherscan_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68818);
/* harmony import */ var _masknet_web3_constants_evm_token_list_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52598);
/* harmony import */ var _masknet_web3_constants_evm_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50828);
/* harmony import */ var _masknet_web3_constants_evm_artblocks_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(978);
/* harmony import */ var _masknet_web3_constants_evm_aave_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25828);
/* harmony import */ var _masknet_web3_constants_evm_lido_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3278);
/* harmony import */ var _masknet_web3_constants_evm_pet_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(78343);
/* harmony import */ var _masknet_web3_constants_evm_smart_pay_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(62455);
/* harmony import */ var _masknet_web3_constants_evm_ens_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30246);
/* harmony import */ var _masknet_web3_constants_evm_arb_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(30390);
/* harmony import */ var _masknet_web3_constants_evm_space_id_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97874);
/* harmony import */ var _masknet_web3_constants_evm_lens_profile_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(59740);
/* harmony import */ var _masknet_web3_constants_evm_gopluslabs_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1389);
/* harmony import */ var _masknet_web3_constants_evm_lens_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(38186);
/* harmony import */ var _masknet_web3_constants_evm_cryptopunks_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(74476);
/* harmony import */ var _masknet_web3_constants_evm_airdrop_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(97996);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22563);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);































function getEnvConstants(key) {
    try {
        const map = {
            WEB3_CONSTANTS_RPC: ""
        };
        return map[key] ?? '';
    } catch  {
        return '';
    }
}
const ChainIdList = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_).map((x)=>x.value);
const getEthereumConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_ethereum_json__WEBPACK_IMPORTED_MODULE_3__);
const getEthereumConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_ethereum_json__WEBPACK_IMPORTED_MODULE_3__);
const useEthereumConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getEthereumConstants);
const useEthereumConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getEthereumConstants);
const getDeBankConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_debank_json__WEBPACK_IMPORTED_MODULE_4__);
const getDeBankConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_debank_json__WEBPACK_IMPORTED_MODULE_4__);
const useDeBankConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getDeBankConstants);
const useDeBankConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getDeBankConstants);
const getCoinGeckoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_coingecko_json__WEBPACK_IMPORTED_MODULE_5__);
const getCoinGeckoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_coingecko_json__WEBPACK_IMPORTED_MODULE_5__);
const useCoinGeckoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getCoinGeckoConstants);
const useCoinGeckoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getCoinGeckoConstants);
const getGitcoinConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_gitcoin_json__WEBPACK_IMPORTED_MODULE_6__);
const getGitcoinConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_gitcoin_json__WEBPACK_IMPORTED_MODULE_6__);
const useGitcoinConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getGitcoinConstants);
const useGitcoinConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getGitcoinConstants);
const getOpenOceanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_openocean_json__WEBPACK_IMPORTED_MODULE_7__);
const getOpenOceanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_openocean_json__WEBPACK_IMPORTED_MODULE_7__);
const useOpenOceanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getOpenOceanConstants);
const useOpenOceanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getOpenOceanConstants);
const getRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_red_packet_json__WEBPACK_IMPORTED_MODULE_8__);
const getRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_red_packet_json__WEBPACK_IMPORTED_MODULE_8__);
const useRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getRedPacketConstants);
const useRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getRedPacketConstants);
const getTokenConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_json__WEBPACK_IMPORTED_MODULE_9__);
const getTokenConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_json__WEBPACK_IMPORTED_MODULE_9__);
const useTokenConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTokenConstants);
const useTokenConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTokenConstants);
const getTraderConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trader_json__WEBPACK_IMPORTED_MODULE_10__);
const getTraderConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trader_json__WEBPACK_IMPORTED_MODULE_10__);
const useTraderConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTraderConstants);
const useTraderConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTraderConstants);
const getTrendingConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trending_json__WEBPACK_IMPORTED_MODULE_11__);
const getTrendingConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_trending_json__WEBPACK_IMPORTED_MODULE_11__);
const useTrendingConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTrendingConstants);
const useTrendingConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTrendingConstants);
const getMaskBoxConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_mask_box_json__WEBPACK_IMPORTED_MODULE_12__);
const getMaskBoxConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_mask_box_json__WEBPACK_IMPORTED_MODULE_12__);
const useMaskBoxConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getMaskBoxConstants);
const useMaskBoxConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getMaskBoxConstants);
const getRPCConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllFromJSON */ .t)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, getEnvConstants('WEB3_CONSTANTS_RPC'), _masknet_web3_constants_evm_rpc_json__WEBPACK_IMPORTED_MODULE_13__);
const getRPCConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformFromJSON */ .rm)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, getEnvConstants('WEB3_CONSTANTS_RPC'), _masknet_web3_constants_evm_rpc_json__WEBPACK_IMPORTED_MODULE_13__);
const useRPCConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getRPCConstants);
const useRPCConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getRPCConstants);
const getEtherscanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_etherscan_json__WEBPACK_IMPORTED_MODULE_14__);
const getEtherscanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_etherscan_json__WEBPACK_IMPORTED_MODULE_14__);
const useEtherscanConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getEtherscanConstants);
const useEtherscanConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getEtherscanConstants);
const getTokenListConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_list_json__WEBPACK_IMPORTED_MODULE_15__);
const getTokenListConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_list_json__WEBPACK_IMPORTED_MODULE_15__);
const useTokenListConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTokenListConstants);
const useTokenListConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTokenListConstants);
const getTokenAssetBaseURLConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_16__);
const getTokenAssetBaseURLConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_16__);
const useTokenAssetBaseURLConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getTokenAssetBaseURLConstants);
const useTokenAssetBaseURLConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getTokenAssetBaseURLConstants);
const getArtBlocksConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_artblocks_json__WEBPACK_IMPORTED_MODULE_17__);
const getArtBlocksConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_artblocks_json__WEBPACK_IMPORTED_MODULE_17__);
const useArtBlocksConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getArtBlocksConstants);
const useArtBlocksConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getArtBlocksConstants);
const getNftRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_nft_red_packet_json__WEBPACK_IMPORTED_MODULE_18__);
const getNftRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_nft_red_packet_json__WEBPACK_IMPORTED_MODULE_18__);
const useNftRedPacketConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getNftRedPacketConstants);
const useNftRedPacketConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getNftRedPacketConstants);
const getAaveConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_aave_json__WEBPACK_IMPORTED_MODULE_19__);
const getAaveConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_aave_json__WEBPACK_IMPORTED_MODULE_19__);
const useAaveConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getAaveConstants);
const useAaveConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getAaveConstants);
const getLidoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lido_json__WEBPACK_IMPORTED_MODULE_20__);
const getLidoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lido_json__WEBPACK_IMPORTED_MODULE_20__);
const useLidoConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getLidoConstants);
const useLidoConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getLidoConstants);
const getPetConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_pet_json__WEBPACK_IMPORTED_MODULE_21__);
const getPetConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_pet_json__WEBPACK_IMPORTED_MODULE_21__);
const usePetConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getPetConstants);
const usePetConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getPetConstants);
const getSmartPayConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_smart_pay_json__WEBPACK_IMPORTED_MODULE_22__);
const getSmartPayConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_smart_pay_json__WEBPACK_IMPORTED_MODULE_22__);
const useSmartPayConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getSmartPayConstants);
const useSmartPayConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getSmartPayConstants);
const getENSConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_ens_json__WEBPACK_IMPORTED_MODULE_23__);
const getArbConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_arb_json__WEBPACK_IMPORTED_MODULE_24__);
const getSpaceIdConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_space_id_json__WEBPACK_IMPORTED_MODULE_25__);
const getLensProfileConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lens_profile_json__WEBPACK_IMPORTED_MODULE_26__);
const getGoPlusLabsConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_gopluslabs_json__WEBPACK_IMPORTED_MODULE_27__);
const getLensConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lens_json__WEBPACK_IMPORTED_MODULE_28__);
const getLensConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_lens_json__WEBPACK_IMPORTED_MODULE_28__);
const useLensConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getLensConstants);
const useLensConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getLensConstants);
const getCryptoPunksConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_cryptopunks_json__WEBPACK_IMPORTED_MODULE_29__);
const getAirdropClaimersConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transform */ .vs)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_airdrop_json__WEBPACK_IMPORTED_MODULE_30__);
const getAirdropClaimersConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAll */ .YV)(_types_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_, _masknet_web3_constants_evm_airdrop_json__WEBPACK_IMPORTED_MODULE_30__);
const useAirdropClaimersConstant = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformHook */ .__)(getAirdropClaimersConstants);
const useAirdropClaimersConstants = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .transformAllHook */ .H$)(getAirdropClaimersConstants);


/***/ }),

/***/ 41487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $u: () => (/* binding */ formatEtherToWei),
/* harmony export */   Hh: () => (/* binding */ formatGweiToEther),
/* harmony export */   Lt: () => (/* binding */ formatGas),
/* harmony export */   NI: () => (/* binding */ formatHash),
/* harmony export */   Xy: () => (/* binding */ formatTokenId),
/* harmony export */   bc: () => (/* binding */ formatDomainName),
/* harmony export */   d0: () => (/* binding */ formatTrait),
/* harmony export */   dN: () => (/* binding */ formatAmount),
/* harmony export */   f1: () => (/* binding */ formatWeiToGwei),
/* harmony export */   j8: () => (/* binding */ formatEthereumAddress),
/* harmony export */   nU: () => (/* binding */ formatGweiToWei),
/* harmony export */   sB: () => (/* binding */ formatSchemaType),
/* harmony export */   yp: () => (/* binding */ formatWeiToEther)
/* harmony export */ });
/* unused harmony exports formatKeccakHash, formatNumberString, formatEtherToGwei */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74170);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29763);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43434);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21447);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24770);
/* harmony import */ var _address_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65327);
/* harmony import */ var _isValidDomain_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89019);








function formatAmount(amount = '0', decimals = 0) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(amount).shiftedBy(decimals).toFixed();
}
const formatEthereumAddress = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function formatEthereumAddress(address, size = 0) {
    if (!(0,_address_js__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At)(address)) return address;
    const address_ = (0,_address_js__WEBPACK_IMPORTED_MODULE_2__/* .checksumAddress */ .xs)(address);
    if (size === 0 || size >= 20) return address_;
    return `${address_.slice(0, Math.max(0, 2 + size))}...${address_.slice(-size)}`;
}, (addr, size)=>`${addr}.${size}`);
/**
 * timestamp in seconds or milliseconds
 */ const formatTimestamp = (timestamp)=>{
    const value = Number.parseInt(timestamp, 10) * (timestamp.length === 10 ? 1000 : 1);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(new Date(value), 'yyyy-MM-dd HH:mm');
};
function formatTrait(trait) {
    if ((0,_address_js__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At)(trait.value)) return formatEthereumAddress(trait.value, 4);
    if (trait.displayType === 'date') return formatTimestamp(trait.value);
    return trait.value;
}
function formatHash(hash, size = 0) {
    if (size === 0) return hash;
    return `${hash.slice(0, Math.max(0, 2 + size))}...${hash.slice(-size)}`;
}
const formatSchemaType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createLookupTableResolver */ .F)({
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.Native]: 'Native',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.ERC20]: 'ERC20',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.ERC721]: 'ERC721',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.ERC1155]: 'ERC1155',
    [_types_index_js__WEBPACK_IMPORTED_MODULE_4__/* .SchemaType */ .XQ.SBT]: 'SBT'
}, '');
function formatTokenId(tokenId = '', size_ = 4) {
    const size = Math.max(2, size_);
    const isHex = tokenId.toLowerCase().startsWith('0x');
    const prefix = isHex ? '0x' : '#';
    if (tokenId.length < size * 2 + prefix.length) return `#${tokenId}`;
    const head = tokenId.slice(0, isHex ? 2 + size : size);
    const tail = tokenId.slice(-size);
    return `${prefix}${head}...${tail}`;
}
function formatDomainName(domain, size = 18, invalidIgnore) {
    if (!domain) return domain;
    if (!(0,_isValidDomain_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidDomain */ .h)(domain) && !invalidIgnore) {
        return domain;
    }
    if (domain.length <= size) return domain;
    if ((0,_isValidDomain_js__WEBPACK_IMPORTED_MODULE_5__/* .isEnsSubdomain */ .t)(domain)) {
        return domain.replace(/^\[([^\]]+?)]\.(.*)$/, (_, hash, mainName)=>{
            return `[${hash.slice(0, 4)}...${hash.slice(-4)}].${formatDomainName(mainName, size, invalidIgnore)}`;
        });
    }
    return domain.replace(/^(.*)\.(\w+)$/, (_, name, suffix)=>{
        return `${name.slice(0, size - 6)}...${name.slice(-2)}.${suffix}`;
    });
}
function formatKeccakHash(hash, size = 0) {
    if (!/0x\w{64}/.test(hash)) return hash;
    if (size === 0) return hash;
    return `${hash.slice(0, Math.max(0, 2 + size))}...${hash.slice(-size)}`;
}
function formatNumberString(input, size = 0) {
    if (!/\d+/.test(input)) return input;
    if (size === 0) return input;
    return `${input.slice(0, Math.max(0, size))}...${input.slice(-size)}`;
}
function formatWeiToGwei(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(-9);
}
function formatWeiToEther(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(-18);
}
function formatGweiToWei(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(9).integerValue();
}
function formatEtherToGwei(value) {
    return new BigNumber(value).shiftedBy(9).integerValue();
}
function formatGas(value) {
    if (!value || (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(value)) return '';
    const gwei = formatWeiToGwei(value);
    if (gwei.lt('0.01')) return '<0.01 Gwei';
    return `${gwei.toFixed(2)} Gwei`;
}
function formatEtherToWei(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(18).integerValue();
}
function formatGweiToEther(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).shiftedBy(-9);
}


/***/ }),

/***/ 78996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(5385);
} else {}


/***/ }),

/***/ 28181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ t)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/dist/resolvers.mjs
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a]||{},{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs
var n=function(e,o){for(var n={};e.length;){var t=e[0],s=t.code,i=t.message,a=t.path.join(".");if(!n[a])if("unionErrors"in t){var u=t.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:s};if("unionErrors"in t&&t.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[t.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,s,f?[].concat(f,t.message):t.message)}e.shift()}return n},t=function(r,t,s){return void 0===s&&(s={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===s.mode?"parse":"parseAsync"](i,t)).then(function(r){return u.shouldUseNativeValidation&&resolvers_t({},u),{errors:{},values:s.raw?i:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){if(function(r){return null!=r.errors}(r))return{values:{},errors:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)};throw r}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 30898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dq: () => (/* reexport */ combineAbortSignal/* combineAbortSignal */.d),
  v_: () => (/* reexport */ concatArrayBuffer/* concatArrayBuffer */.v),
  xe: () => (/* reexport */ decodeArrayBuffer),
  PQ: () => (/* reexport */ defer/* defer */.P),
  gw: () => (/* reexport */ delay/* delay */.g),
  ll: () => (/* reexport */ encodeArrayBuffer),
  YT: () => (/* reexport */ encodeText),
  sS: () => (/* reexport */ file/* formatFileSize */.s),
  Yl: () => (/* reexport */ typescript_enum/* getEnumAsArray */.Y),
  GT: () => (/* reexport */ nonNull/* isNonNull */.G),
  J3: () => (/* reexport */ memoizePromise/* memoizePromise */.J),
  P: () => (/* reexport */ control_flow/* safeUnreachable */.P),
  Vs: () => (/* reexport */ timeout/* timeout */.V),
  t1: () => (/* reexport */ control_flow/* unreachable */.t)
});

// UNUSED EXPORTS: assertNonNull, blobToDataURL, decodeHexString, decodeText, detectAudioSupport, detectImageSupport, detectVideoSupport, encodeHexString, findAvailableImageURL, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, lazy, waitDocumentReadyState

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/memoizePromise.js
var memoizePromise = __webpack_require__(22444);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/defer.js
var defer = __webpack_require__(54093);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/concatArrayBuffer.js
var concatArrayBuffer = __webpack_require__(16315);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/ecmascript/lazyDecorator.js
var lazyDecorator = __webpack_require__(24687);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/media/file.js
var file = __webpack_require__(83043);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/media/image.js
var media_image = __webpack_require__(56077);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/typescript/control-flow.js
var control_flow = __webpack_require__(51298);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/typescript/enum.js
var typescript_enum = __webpack_require__(6722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/typescript/nonNull.js
var nonNull = __webpack_require__(89259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/combineAbortSignal.js
var combineAbortSignal = __webpack_require__(56999);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/delay.js
var delay = __webpack_require__(48261);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/document.readyState.js
var document_readyState = __webpack_require__(8555);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/encode-text-arraybuffer.js
function encodeText(input) {
    return new TextEncoder().encode(input);
}
function decodeText(input) {
    if (input instanceof ArrayBuffer)
        return new TextDecoder().decode(input);
    return new TextDecoder().decode(Uint8Array.from(input));
}
function decodeArrayBuffer(input) {
    const decoded = atob(input);
    const buffer = new Uint8Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
        buffer[i] = decoded.charCodeAt(i);
    }
    return buffer.buffer;
}
function encodeArrayBuffer(input) {
    let encoded = '';
    for (const code of input instanceof ArrayBuffer ? new Uint8Array(input) : Uint8Array.from(input)) {
        encoded += String.fromCharCode(code);
    }
    return btoa(encoded);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/web/timeout.js
var timeout = __webpack_require__(11278);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js




















/***/ }),

/***/ 89259:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ isNonNull)
/* harmony export */ });
/* unused harmony export assertNonNull */
function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined)
        throw new Error(message);
    return val;
}
function isNonNull(x) {
    return x !== undefined && x !== null;
}


/***/ }),

/***/ 76089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Err: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.UG),
/* harmony export */   None: () => (/* reexport safe */ _option_js__WEBPACK_IMPORTED_MODULE_1__.Hq),
/* harmony export */   Ok: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.Ok),
/* harmony export */   Result: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_0__.x4),
/* harmony export */   Some: () => (/* reexport safe */ _option_js__WEBPACK_IMPORTED_MODULE_1__.bD)
/* harmony export */ });
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98096);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46314);




/***/ }),

/***/ 8311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aave: () => (/* binding */ Aave),
/* harmony export */   AchievementBurn: () => (/* binding */ AchievementBurn),
/* harmony export */   AchievementReceive: () => (/* binding */ AchievementReceive),
/* harmony export */   Add: () => (/* binding */ Add),
/* harmony export */   AddNoBorder: () => (/* binding */ AddNoBorder),
/* harmony export */   AddUser: () => (/* binding */ AddUser),
/* harmony export */   Algorand: () => (/* binding */ Algorand),
/* harmony export */   America: () => (/* binding */ America),
/* harmony export */   Appearance: () => (/* binding */ Appearance),
/* harmony export */   Appendices: () => (/* binding */ Appendices),
/* harmony export */   ApplicationNFT: () => (/* binding */ ApplicationNFT),
/* harmony export */   Approval: () => (/* binding */ Approval),
/* harmony export */   ApprovalApprove: () => (/* binding */ ApprovalApprove),
/* harmony export */   Arbitrum: () => (/* binding */ Arbitrum),
/* harmony export */   ArrowBack: () => (/* binding */ ArrowBack),
/* harmony export */   ArrowDownRound: () => (/* binding */ ArrowDownRound),
/* harmony export */   ArrowDownward: () => (/* binding */ ArrowDownward),
/* harmony export */   ArrowDrop: () => (/* binding */ ArrowDrop),
/* harmony export */   ArrowRight: () => (/* binding */ ArrowRight),
/* harmony export */   ArrowUp: () => (/* binding */ ArrowUp),
/* harmony export */   ArtBlocks: () => (/* binding */ ArtBlocks),
/* harmony export */   Arweave: () => (/* binding */ Arweave),
/* harmony export */   Avalanche: () => (/* binding */ Avalanche),
/* harmony export */   Avatar: () => (/* binding */ Avatar),
/* harmony export */   BSC: () => (/* binding */ BSC),
/* harmony export */   BaseClose: () => (/* binding */ BaseClose),
/* harmony export */   BaseUpload: () => (/* binding */ BaseUpload),
/* harmony export */   BaseUser: () => (/* binding */ BaseUser),
/* harmony export */   BestTrade: () => (/* binding */ BestTrade),
/* harmony export */   Bit: () => (/* binding */ Bit),
/* harmony export */   BorderedSuccess: () => (/* binding */ BorderedSuccess),
/* harmony export */   BusyWalletNav: () => (/* binding */ BusyWalletNav),
/* harmony export */   Buy: () => (/* binding */ Buy),
/* harmony export */   Cached: () => (/* binding */ Cached),
/* harmony export */   Calendar: () => (/* binding */ Calendar),
/* harmony export */   Candle: () => (/* binding */ Candle),
/* harmony export */   Celo: () => (/* binding */ Celo),
/* harmony export */   Check: () => (/* binding */ Check),
/* harmony export */   CheckCircle: () => (/* binding */ CheckCircle),
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   CheckboxBlank: () => (/* binding */ CheckboxBlank),
/* harmony export */   ChevronUp: () => (/* binding */ ChevronUp),
/* harmony export */   China: () => (/* binding */ China),
/* harmony export */   CircleLoading: () => (/* binding */ CircleLoading),
/* harmony export */   CircleWarning: () => (/* binding */ CircleWarning),
/* harmony export */   Close: () => (/* binding */ Close),
/* harmony export */   CoinGecko: () => (/* binding */ CoinGecko),
/* harmony export */   CoinMarketCap: () => (/* binding */ CoinMarketCap),
/* harmony export */   CollectibleApprove: () => (/* binding */ CollectibleApprove),
/* harmony export */   CollectibleBurn: () => (/* binding */ CollectibleBurn),
/* harmony export */   CollectibleIn: () => (/* binding */ CollectibleIn),
/* harmony export */   CollectibleMint: () => (/* binding */ CollectibleMint),
/* harmony export */   CollectibleOut: () => (/* binding */ CollectibleOut),
/* harmony export */   Collectibles: () => (/* binding */ Collectibles),
/* harmony export */   Comeback: () => (/* binding */ Comeback),
/* harmony export */   Connect: () => (/* binding */ Connect),
/* harmony export */   Contacts: () => (/* binding */ Contacts),
/* harmony export */   Copy: () => (/* binding */ Copy),
/* harmony export */   Cosmos: () => (/* binding */ Cosmos),
/* harmony export */   CrossBridge: () => (/* binding */ CrossBridge),
/* harmony export */   CrossSync: () => (/* binding */ CrossSync),
/* harmony export */   Crossbell: () => (/* binding */ Crossbell),
/* harmony export */   Currency: () => (/* binding */ Currency),
/* harmony export */   CyberConnect: () => (/* binding */ CyberConnect),
/* harmony export */   Danger: () => (/* binding */ Danger),
/* harmony export */   Dark: () => (/* binding */ Dark),
/* harmony export */   DecentralizedSearch: () => (/* binding */ DecentralizedSearch),
/* harmony export */   Decrease: () => (/* binding */ Decrease),
/* harmony export */   DefaultToken: () => (/* binding */ DefaultToken),
/* harmony export */   Delete: () => (/* binding */ Delete),
/* harmony export */   Disconnect: () => (/* binding */ Disconnect),
/* harmony export */   DiscordRound: () => (/* binding */ DiscordRound),
/* harmony export */   Documents: () => (/* binding */ Documents),
/* harmony export */   DonationDonate: () => (/* binding */ DonationDonate),
/* harmony export */   DonationLaunch: () => (/* binding */ DonationLaunch),
/* harmony export */   Download: () => (/* binding */ Download),
/* harmony export */   Download2: () => (/* binding */ Download2),
/* harmony export */   Drop: () => (/* binding */ Drop),
/* harmony export */   Dump: () => (/* binding */ Dump),
/* harmony export */   EIP1577: () => (/* binding */ EIP1577),
/* harmony export */   ENS: () => (/* binding */ ENS),
/* harmony export */   ETH: () => (/* binding */ ETH),
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   Edit2: () => (/* binding */ Edit2),
/* harmony export */   EmptySimple: () => (/* binding */ EmptySimple),
/* harmony export */   EncryptedFiles: () => (/* binding */ EncryptedFiles),
/* harmony export */   EtherScan: () => (/* binding */ EtherScan),
/* harmony export */   Europe: () => (/* binding */ Europe),
/* harmony export */   Eye: () => (/* binding */ Eye),
/* harmony export */   EyeColor: () => (/* binding */ EyeColor),
/* harmony export */   EyeOff: () => (/* binding */ EyeOff),
/* harmony export */   FacebookColored: () => (/* binding */ FacebookColored),
/* harmony export */   FacebookRound: () => (/* binding */ FacebookRound),
/* harmony export */   Fantom: () => (/* binding */ Fantom),
/* harmony export */   Farcaster: () => (/* binding */ Farcaster),
/* harmony export */   FileService: () => (/* binding */ FileService),
/* harmony export */   FillSuccess: () => (/* binding */ FillSuccess),
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   Firefly: () => (/* binding */ Firefly),
/* harmony export */   Flag: () => (/* binding */ Flag),
/* harmony export */   Flow: () => (/* binding */ Flow),
/* harmony export */   Follow: () => (/* binding */ Follow),
/* harmony export */   Gas: () => (/* binding */ Gas),
/* harmony export */   GasStation: () => (/* binding */ GasStation),
/* harmony export */   Gear: () => (/* binding */ Gear),
/* harmony export */   Gem: () => (/* binding */ Gem),
/* harmony export */   GitHub: () => (/* binding */ GitHub),
/* harmony export */   Gitcoin: () => (/* binding */ Gitcoin),
/* harmony export */   Globe: () => (/* binding */ Globe),
/* harmony export */   Gnosis: () => (/* binding */ Gnosis),
/* harmony export */   GovernancePropose: () => (/* binding */ GovernancePropose),
/* harmony export */   GovernanceVote: () => (/* binding */ GovernanceVote),
/* harmony export */   GrayMasks: () => (/* binding */ GrayMasks),
/* harmony export */   HamburgerMenu: () => (/* binding */ HamburgerMenu),
/* harmony export */   History: () => (/* binding */ History),
/* harmony export */   HongKong: () => (/* binding */ HongKong),
/* harmony export */   IPFS: () => (/* binding */ IPFS),
/* harmony export */   Identity: () => (/* binding */ Identity),
/* harmony export */   Info: () => (/* binding */ Info),
/* harmony export */   Instagram: () => (/* binding */ Instagram),
/* harmony export */   InstagramColored: () => (/* binding */ InstagramColored),
/* harmony export */   InstagramRoundColored: () => (/* binding */ InstagramRoundColored),
/* harmony export */   Japan: () => (/* binding */ Japan),
/* harmony export */   KeySquare: () => (/* binding */ KeySquare),
/* harmony export */   Keybase: () => (/* binding */ Keybase),
/* harmony export */   Kusama: () => (/* binding */ Kusama),
/* harmony export */   Leaderboard: () => (/* binding */ Leaderboard),
/* harmony export */   LeftArrow: () => (/* binding */ LeftArrow),
/* harmony export */   Lens: () => (/* binding */ Lens),
/* harmony export */   LinkOut: () => (/* binding */ LinkOut),
/* harmony export */   Lock: () => (/* binding */ Lock),
/* harmony export */   LooksRare: () => (/* binding */ LooksRare),
/* harmony export */   MarketsClaim: () => (/* binding */ MarketsClaim),
/* harmony export */   Mask: () => (/* binding */ Mask),
/* harmony export */   MaskAvatar: () => (/* binding */ MaskAvatar),
/* harmony export */   MaskBlue: () => (/* binding */ MaskBlue),
/* harmony export */   MaskBox: () => (/* binding */ MaskBox),
/* harmony export */   MaskMe: () => (/* binding */ MaskMe),
/* harmony export */   MaskSquare: () => (/* binding */ MaskSquare),
/* harmony export */   MaskWallet: () => (/* binding */ MaskWallet),
/* harmony export */   Masks: () => (/* binding */ Masks),
/* harmony export */   Medium: () => (/* binding */ Medium),
/* harmony export */   MenuPersonasActive: () => (/* binding */ MenuPersonasActive),
/* harmony export */   Message: () => (/* binding */ Message),
/* harmony export */   MetaMask: () => (/* binding */ MetaMask),
/* harmony export */   Minds: () => (/* binding */ Minds),
/* harmony export */   MindsRound: () => (/* binding */ MindsRound),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   Mnemonic: () => (/* binding */ Mnemonic),
/* harmony export */   Momoka: () => (/* binding */ Momoka),
/* harmony export */   More: () => (/* binding */ More),
/* harmony export */   NFTAvatar: () => (/* binding */ NFTAvatar),
/* harmony export */   NFTScan: () => (/* binding */ NFTScan),
/* harmony export */   NextIDMini: () => (/* binding */ NextIDMini),
/* harmony export */   NextIdAvatar: () => (/* binding */ NextIdAvatar),
/* harmony export */   NoteBurn: () => (/* binding */ NoteBurn),
/* harmony export */   NoteCreate: () => (/* binding */ NoteCreate),
/* harmony export */   NoteEdit: () => (/* binding */ NoteEdit),
/* harmony export */   NoteLink: () => (/* binding */ NoteLink),
/* harmony export */   NoteMint: () => (/* binding */ NoteMint),
/* harmony export */   OpenSea: () => (/* binding */ OpenSea),
/* harmony export */   OpenSeaColored: () => (/* binding */ OpenSeaColored),
/* harmony export */   Optimism: () => (/* binding */ Optimism),
/* harmony export */   PancakeSwap: () => (/* binding */ PancakeSwap),
/* harmony export */   PersonasOutline: () => (/* binding */ PersonasOutline),
/* harmony export */   Pets: () => (/* binding */ Pets),
/* harmony export */   Planet: () => (/* binding */ Planet),
/* harmony export */   Play: () => (/* binding */ Play),
/* harmony export */   Plugin: () => (/* binding */ Plugin),
/* harmony export */   PolkaDot: () => (/* binding */ PolkaDot),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   PolygonScan: () => (/* binding */ PolygonScan),
/* harmony export */   PopupClose: () => (/* binding */ PopupClose),
/* harmony export */   PopupLink: () => (/* binding */ PopupLink),
/* harmony export */   PopupRestore: () => (/* binding */ PopupRestore),
/* harmony export */   ProfileBurn: () => (/* binding */ ProfileBurn),
/* harmony export */   ProfileCreate: () => (/* binding */ ProfileCreate),
/* harmony export */   ProfileLink: () => (/* binding */ ProfileLink),
/* harmony export */   ProfileProxy: () => (/* binding */ ProfileProxy),
/* harmony export */   ProfileUpdate: () => (/* binding */ ProfileUpdate),
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   PublicKey2: () => (/* binding */ PublicKey2),
/* harmony export */   Questions: () => (/* binding */ Questions),
/* harmony export */   RSS3: () => (/* binding */ RSS3),
/* harmony export */   RSS3Link: () => (/* binding */ RSS3Link),
/* harmony export */   RadioButtonChecked: () => (/* binding */ RadioButtonChecked),
/* harmony export */   RadioButtonUnChecked: () => (/* binding */ RadioButtonUnChecked),
/* harmony export */   RadioNo: () => (/* binding */ RadioNo),
/* harmony export */   Rarible: () => (/* binding */ Rarible),
/* harmony export */   ReceiveColorful: () => (/* binding */ ReceiveColorful),
/* harmony export */   RedPacket: () => (/* binding */ RedPacket),
/* harmony export */   RedditRound: () => (/* binding */ RedditRound),
/* harmony export */   Refresh: () => (/* binding */ Refresh),
/* harmony export */   Restore: () => (/* binding */ Restore),
/* harmony export */   Retweet: () => (/* binding */ Retweet),
/* harmony export */   RightArrow: () => (/* binding */ RightArrow),
/* harmony export */   Rsk: () => (/* binding */ Rsk),
/* harmony export */   Savings: () => (/* binding */ Savings),
/* harmony export */   ScamSniffer: () => (/* binding */ ScamSniffer),
/* harmony export */   Search: () => (/* binding */ Search),
/* harmony export */   SecurityChecker: () => (/* binding */ SecurityChecker),
/* harmony export */   SecurityRisk: () => (/* binding */ SecurityRisk),
/* harmony export */   SecurityWarning: () => (/* binding */ SecurityWarning),
/* harmony export */   Send: () => (/* binding */ Send),
/* harmony export */   SendColorful: () => (/* binding */ SendColorful),
/* harmony export */   SettingInfo: () => (/* binding */ SettingInfo),
/* harmony export */   Settings2: () => (/* binding */ Settings2),
/* harmony export */   SettingsLanguage: () => (/* binding */ SettingsLanguage),
/* harmony export */   Shared: () => (/* binding */ Shared),
/* harmony export */   SimpleHash: () => (/* binding */ SimpleHash),
/* harmony export */   SmartPay: () => (/* binding */ SmartPay),
/* harmony export */   Snapshot: () => (/* binding */ Snapshot),
/* harmony export */   Solana: () => (/* binding */ Solana),
/* harmony export */   SpaceId: () => (/* binding */ SpaceId),
/* harmony export */   Success: () => (/* binding */ Success),
/* harmony export */   SuccessForSnackBar: () => (/* binding */ SuccessForSnackBar),
/* harmony export */   Sun: () => (/* binding */ Sun),
/* harmony export */   SushiSwap: () => (/* binding */ SushiSwap),
/* harmony export */   SwapColorful: () => (/* binding */ SwapColorful),
/* harmony export */   Sybil: () => (/* binding */ Sybil),
/* harmony export */   TelegramRound: () => (/* binding */ TelegramRound),
/* harmony export */   Time: () => (/* binding */ Time),
/* harmony export */   TipCoin: () => (/* binding */ TipCoin),
/* harmony export */   Tips: () => (/* binding */ Tips),
/* harmony export */   TokenBridge: () => (/* binding */ TokenBridge),
/* harmony export */   TokenBurn: () => (/* binding */ TokenBurn),
/* harmony export */   TokenIn: () => (/* binding */ TokenIn),
/* harmony export */   TokenLiquidity: () => (/* binding */ TokenLiquidity),
/* harmony export */   TokenMint: () => (/* binding */ TokenMint),
/* harmony export */   TokenOut: () => (/* binding */ TokenOut),
/* harmony export */   TokenStake: () => (/* binding */ TokenStake),
/* harmony export */   TokenSwap: () => (/* binding */ TokenSwap),
/* harmony export */   TokenUnstake: () => (/* binding */ TokenUnstake),
/* harmony export */   TransactionFailed: () => (/* binding */ TransactionFailed),
/* harmony export */   Transak: () => (/* binding */ Transak),
/* harmony export */   Trash: () => (/* binding */ Trash),
/* harmony export */   TrashLine: () => (/* binding */ TrashLine),
/* harmony export */   Twitter: () => (/* binding */ Twitter),
/* harmony export */   TwitterColored: () => (/* binding */ TwitterColored),
/* harmony export */   TwitterOtherColored: () => (/* binding */ TwitterOtherColored),
/* harmony export */   TwitterX: () => (/* binding */ TwitterX),
/* harmony export */   TwitterXRound: () => (/* binding */ TwitterXRound),
/* harmony export */   Undo: () => (/* binding */ Undo),
/* harmony export */   Unfollow: () => (/* binding */ Unfollow),
/* harmony export */   Uniswap: () => (/* binding */ Uniswap),
/* harmony export */   UnknownBurn: () => (/* binding */ UnknownBurn),
/* harmony export */   UnknownCancel: () => (/* binding */ UnknownCancel),
/* harmony export */   UnknownIn: () => (/* binding */ UnknownIn),
/* harmony export */   UnknownOut: () => (/* binding */ UnknownOut),
/* harmony export */   Unstoppable: () => (/* binding */ Unstoppable),
/* harmony export */   Upload: () => (/* binding */ Upload),
/* harmony export */   Valuables: () => (/* binding */ Valuables),
/* harmony export */   Verification: () => (/* binding */ Verification),
/* harmony export */   WETH: () => (/* binding */ WETH),
/* harmony export */   Wallet: () => (/* binding */ Wallet),
/* harmony export */   WalletNav: () => (/* binding */ WalletNav),
/* harmony export */   WalletSetting: () => (/* binding */ WalletSetting),
/* harmony export */   Warning: () => (/* binding */ Warning),
/* harmony export */   WarningTriangle: () => (/* binding */ WarningTriangle),
/* harmony export */   Web: () => (/* binding */ Web),
/* harmony export */   Web3Profile: () => (/* binding */ Web3Profile),
/* harmony export */   Web3ProfileCard: () => (/* binding */ Web3ProfileCard),
/* harmony export */   X2Y2: () => (/* binding */ X2Y2),
/* harmony export */   XLog: () => (/* binding */ XLog),
/* harmony export */   YouTube: () => (/* binding */ YouTube),
/* harmony export */   ZeroX: () => (/* binding */ ZeroX),
/* harmony export */   Zilliqa: () => (/* binding */ Zilliqa),
/* harmony export */   ZkScan: () => (/* binding */ ZkScan)
/* harmony export */ });
/* unused harmony exports Coincarp, Debank, Discord, DiscordRoundBlack, DiscordRoundGray, FacebookRoundGray, GitHubGray, InstagramRoundGray, Link3, MaskBanner, MaskGrey, MaskPlaceholder, MaskText, MaskTextNightly, MediumGray, MiniMask, Nftgo, RedditRoundGray, TwitterRound, TwitterRoundGray, YouTubeGray, Zerion, Zora, Approve, ArrowUpRound, BackUp, BaseContacts, BluePin, Card, CheckboxBorder, CheckboxNo, CircleClose, Clear, Cloud, CloudBackup, CloudBackup2, CloudLink, CNY, Collectible, Document, Empty, Facebook, File, FileMessage, Folder, GearSettings, HKD, Interaction, InteractionCircle, JPY, LinearCalendar, Link, Loader, LoadingBase, LocalBackup, MaskInMinds, NextIdPersonaWarning, NFTRedPacket, OutlinedMask, Pin, Plugins, PopupTrash, PrimaryInfo, PublicKey, RestoreColorful, Right, Risk, Selected, Self, Setting, Settings, SharpMask, SignUpAccount, Star, Swap, SwitchLogo, TelegramRoundGray, Tick, Tutorial, TwitterStroke, TxIn, TxOut, USD, User, WebBlack, MenuPersonas, MenuSettings, MenuSettingsActive, MenuWallets, MenuWalletsActive, ENSCover, FindTruman, GoodGhosting, Markets, PoolTogether, CN, Email, JP, KR, SettingsAppearance, SettingsBackup, SettingsEmail, SettingsPassword, SettingsPhone, SettingsRestore, SettingsSync, UK */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77745);


const Aave = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Aave', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99740), __webpack_require__.b),
    },
])
const Algorand = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Algorand', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(19248), __webpack_require__.b),
    },
])
const Arbitrum = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Arbitrum', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80307), __webpack_require__.b),
    },
])
const Arweave = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Arweave', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80058), __webpack_require__.b),
    },
])
const Avalanche = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Avalanche', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63433), __webpack_require__.b),
    },
])
const BSC = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BSC', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(44717), __webpack_require__.b),
    },
])
const Celo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Celo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3424), __webpack_require__.b),
    },
])
const Coincarp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Coincarp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(49294), __webpack_require__.b),
    },
])
const CoinGecko = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CoinGecko', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60321), __webpack_require__.b),
    },
])
const CoinMarketCap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CoinMarketCap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92747), __webpack_require__.b),
    },
])
const Cosmos = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Cosmos', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(21479), __webpack_require__.b),
    },
])
const Crossbell = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Crossbell', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6442), __webpack_require__.b),
    },
])
const CrossSync = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CrossSync', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88230), __webpack_require__.b),
    },
])
const CyberConnect = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CyberConnect', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93845), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(80963), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(93923), __webpack_require__.b),
    },
])
const Danger = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Danger', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(73565), __webpack_require__.b),
    },
])
const Debank = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Debank', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(47093), __webpack_require__.b),
    },
])
const Discord = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Discord', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32263), __webpack_require__.b),
    },
])
const DiscordRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DiscordRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(667), __webpack_require__.b),
    },
])
const DiscordRoundBlack = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DiscordRoundBlack', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(75185), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(76208), __webpack_require__.b),
    },
])
const DiscordRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DiscordRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(46778), __webpack_require__.b),
    },
])
const EIP1577 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EIP1577', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51702), __webpack_require__.b),
    },
])
const ETH = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ETH', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84), __webpack_require__.b),
    },
])
const EtherScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EtherScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51337), __webpack_require__.b),
    },
])
const FacebookColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FacebookColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89988), __webpack_require__.b),
    },
])
const FacebookRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FacebookRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52426), __webpack_require__.b),
    },
])
const FacebookRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FacebookRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(962), __webpack_require__.b),
    },
])
const Fantom = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Fantom', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84011), __webpack_require__.b),
    },
])
const Farcaster = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Farcaster', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41984), __webpack_require__.b),
    },
])
const Firefly = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Firefly', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(56025), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(38838), __webpack_require__.b),
    },
])
const Flow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Flow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(94091), __webpack_require__.b),
    },
])
const Gem = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gem', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(74796), __webpack_require__.b),
    },
])
const GitHub = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GitHub', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89965), __webpack_require__.b),
    },
])
const GitHubGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GitHubGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40233), __webpack_require__.b),
    },
])
const Gnosis = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gnosis', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87634), __webpack_require__.b),
    },
])
const Instagram = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Instagram', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(24604), __webpack_require__.b),
    },
])
const InstagramColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InstagramColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(54878), __webpack_require__.b),
    },
])
const InstagramRoundColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InstagramRoundColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78063), __webpack_require__.b),
    },
])
const InstagramRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InstagramRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41854), __webpack_require__.b),
    },
])
const IPFS = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('IPFS', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93568), __webpack_require__.b),
    },
])
const Keybase = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Keybase', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(14241), __webpack_require__.b),
    },
])
const Kusama = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Kusama', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52684), __webpack_require__.b),
    },
])
const Leaderboard = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Leaderboard', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58543), __webpack_require__.b),
    },
])
const Lens = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Lens', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52924), __webpack_require__.b),
    },
])
const Link3 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Link3', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(47282), __webpack_require__.b),
    },
])
const LooksRare = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LooksRare', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(16660), __webpack_require__.b),
    },
])
const Mask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Mask', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(20507), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(37279), __webpack_require__.b),
    },
])
const MaskBanner = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskBanner', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(55143), __webpack_require__.b),
    },
])
const MaskBlue = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskBlue', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90386), __webpack_require__.b),
    },
])
const MaskGrey = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskGrey', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(18219), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(42166), __webpack_require__.b),
    },
])
const MaskPlaceholder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskPlaceholder', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(47226), __webpack_require__.b),
    },
    {
        c: ['dim'],
        u: () => new URL(/* asset import */ __webpack_require__(36607), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(50039), __webpack_require__.b),
    },
])
const MaskSquare = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskSquare', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(55767), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(89654), __webpack_require__.b),
    },
])
const MaskText = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskText', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(34206), __webpack_require__.b),
    },
])
const MaskTextNightly = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskTextNightly', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6611), __webpack_require__.b),
    },
])
const MaskWallet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskWallet', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(33379), __webpack_require__.b),
    },
])
const Medium = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Medium', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92862), __webpack_require__.b),
    },
])
const MediumGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MediumGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(83651), __webpack_require__.b),
    },
])
const MetaMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MetaMask', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(83581), __webpack_require__.b),
    },
])
const Minds = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Minds', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(36423), __webpack_require__.b),
    },
])
const MindsRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MindsRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77247), __webpack_require__.b),
    },
])
const MiniMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MiniMask', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(53671), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(15965), __webpack_require__.b),
    },
])
const Mirror = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Mirror', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(16880), __webpack_require__.b),
    },
])
const Momoka = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Momoka', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(67525), __webpack_require__.b),
    },
])
const NextIDMini = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NextIDMini', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(72243), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(46850), __webpack_require__.b),
    },
])
const Nftgo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Nftgo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(46700), __webpack_require__.b),
    },
])
const NFTScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NFTScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65261), __webpack_require__.b),
    },
])
const OpenSea = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('OpenSea', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78952), __webpack_require__.b),
    },
])
const OpenSeaColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('OpenSeaColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77637), __webpack_require__.b),
    },
])
const Optimism = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Optimism', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(4335), __webpack_require__.b),
    },
])
const PancakeSwap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PancakeSwap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(38282), __webpack_require__.b),
    },
])
const Pets = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Pets', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71553), __webpack_require__.b),
    },
])
const Planet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Planet', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32761), __webpack_require__.b),
    },
])
const PolkaDot = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PolkaDot', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(42371), __webpack_require__.b),
    },
])
const Polygon = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Polygon', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32916), __webpack_require__.b),
    },
])
const PolygonScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PolygonScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5668), __webpack_require__.b),
    },
])
const Rarible = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Rarible', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5703), __webpack_require__.b),
    },
])
const RedditRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RedditRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99119), __webpack_require__.b),
    },
])
const RedditRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RedditRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30228), __webpack_require__.b),
    },
])
const Rsk = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Rsk', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30445), __webpack_require__.b),
    },
])
const RSS3 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RSS3', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(62210), __webpack_require__.b),
    },
])
const SimpleHash = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SimpleHash', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(13387), __webpack_require__.b),
    },
])
const Solana = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Solana', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(66043), __webpack_require__.b),
    },
])
const SushiSwap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SushiSwap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(22550), __webpack_require__.b),
    },
])
const Sybil = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Sybil', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89559), __webpack_require__.b),
    },
])
const TelegramRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TelegramRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6731), __webpack_require__.b),
    },
])
const TwitterColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(33484), __webpack_require__.b),
    },
])
const TwitterOtherColored = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterOtherColored', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(22845), __webpack_require__.b),
    },
])
const TwitterRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20582), __webpack_require__.b),
    },
])
const TwitterRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27884), __webpack_require__.b),
    },
])
const TwitterX = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterX', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(66258), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(23251), __webpack_require__.b),
    },
])
const TwitterXRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TwitterXRound', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(92814), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(24608), __webpack_require__.b),
    },
])
const Uniswap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Uniswap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6576), __webpack_require__.b),
    },
])
const WETH = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WETH', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(70948), __webpack_require__.b),
    },
])
const X2Y2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('X2Y2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69722), __webpack_require__.b),
    },
])
const XLog = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('XLog', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90601), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(85976), __webpack_require__.b),
    },
])
const YouTube = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('YouTube', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65409), __webpack_require__.b),
    },
])
const YouTubeGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('YouTubeGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82728), __webpack_require__.b),
    },
])
const Zerion = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Zerion', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(23663), __webpack_require__.b),
    },
])
const ZeroX = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ZeroX', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97772), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(64695), __webpack_require__.b),
    },
])
const Zilliqa = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Zilliqa', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88541), __webpack_require__.b),
    },
])
const ZkScan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('zkScan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(68582), __webpack_require__.b),
    },
])
const Zora = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Zora', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18666), __webpack_require__.b),
    },
])
const Add = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Add', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50845), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 4.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4ZM3.2 12a8.8 8.8 0 1 1 17.6 0 8.8 8.8 0 0 1-17.6 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 8a.8.8 0 0 1 .8.8v6.4a.8.8 0 0 1-1.6 0V8.8A.8.8 0 0 1 12 8Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M8 12a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 0 1.6H8.8A.8.8 0 0 1 8 12Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const AddNoBorder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'AddNoBorder',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(69891), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 13 12',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M1.6 6a.4.4 0 0 1 .4-.4h9a.4.4 0 0 1 0 .8H2a.4.4 0 0 1-.4-.4Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M6.5 1.1a.4.4 0 0 1 .4.4v9a.4.4 0 0 1-.8 0v-9a.4.4 0 0 1 .4-.4Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [13, 12],
)
const AddUser = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('AddUser', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88192), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M15.5 12.159a.6.6 0 0 1 .6.6v4.062a.6.6 0 0 1-1.2 0v-4.062a.6.6 0 0 1 .6-.6Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M18.132 14.79a.6.6 0 0 1-.6.6h-4.065a.6.6 0 0 1 0-1.2h4.065a.6.6 0 0 1 .6.6ZM9.298 2.41a2.992 2.992 0 1 0 0 5.984 2.992 2.992 0 0 0 0-5.983ZM5.106 5.403a4.192 4.192 0 1 1 8.384 0 4.192 4.192 0 0 1-8.384 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6.519 8.988a7.797 7.797 0 0 1 8.497 1.69.6.6 0 0 1-.848.848 6.597 6.597 0 0 0-11.263 4.666.6.6 0 0 1-1.2 0A7.798 7.798 0 0 1 6.52 8.988Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const America = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('America', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17737), __webpack_require__.b),
    },
])
const Appearance = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Appearance', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60568), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm10.09 13.908-4.7-2.286 3.707-3.503L9.692 3l4.576 2.538 5.072-.878-.879 5.071L21 14.307l-5.118.598-3.504 3.705-2.286-4.702Zm-2.262.658 1.608 1.609-4.825 4.826-1.609-1.609 4.826-4.826Z',
                }),
            }),
        s: true,
    },
])
const Appendices = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Appendices', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59916), __webpack_require__.b),
    },
])
const ApplicationNFT = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ApplicationNFT', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78080), __webpack_require__.b),
    },
])
const Approve = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Approve', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(86398), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 18 18',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M9.502.936c.456 0 .94.063 1.338.208l.005.002 3.742 1.403c.56.209 1.038.63 1.373 1.114.335.484.56 1.08.56 1.677v5.573c0 .554-.18 1.153-.441 1.675-.263.522-.637 1.023-1.082 1.356l-3.224 2.406c-.644.484-1.468.71-2.265.71-.798 0-1.622-.226-2.265-.71l-3.224-2.406c-.445-.333-.82-.834-1.082-1.356-.263-.522-.442-1.12-.442-1.675V5.34c0-.595.226-1.188.56-1.671.335-.483.813-.903 1.372-1.113h.001l3.741-1.41h.002c.393-.147.875-.21 1.331-.21ZM8.565 2.2 4.821 3.61c-.302.113-.609.364-.842.7-.233.336-.36.71-.36 1.03v5.573c0 .33.113.755.322 1.17.208.413.482.759.75.96m0 0 3.226 2.408c.414.311.989.483 1.59.483.6 0 1.175-.172 1.59-.483v-.001l3.225-2.408c.268-.2.542-.546.75-.96.209-.414.322-.838.322-1.17V5.34c0-.324-.127-.7-.36-1.037-.233-.337-.54-.588-.842-.7L10.453 2.2c-.24-.087-.583-.14-.951-.14-.37 0-.708.053-.937.139',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12.118 6.487c.22.22.22.576 0 .796l-3.225 3.224a.562.562 0 0 1-.796 0L6.89 9.3a.562.562 0 1 1 .795-.795l.81.81 2.827-2.828c.22-.22.576-.22.796 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const ArrowBack = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowBack', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(95820), __webpack_require__.b),
    },
])
const ArrowDownRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowDownRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59542), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'm4 5.6 4 4 4-4',
                }),
            }),
        s: true,
    },
])
const ArrowDownward = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowDownward', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1759), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M12 4.135a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0v-14a1 1 0 0 1 1-1Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.293 11.428a1 1 0 0 1 1.414 0L12 17.72l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const ArrowDrop = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowDrop', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72305), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm11.434 15.434-5.068-5.068A.8.8 0 0 1 6.93 9h10.14a.8.8 0 0 1 .565 1.366l-5.068 5.068a.8.8 0 0 1-1.132 0Z',
                }),
            }),
        s: true,
    },
])
const ArrowRight = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowRight', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5641), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeMiterlimit: '10',
                    d: 'm7.708 4.792 5.209 5.416-5.209 5.417',
                }),
            }),
        s: true,
    },
])
const ArrowUp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowUp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18033), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm12.566 9.066 5.068 5.068a.8.8 0 0 1-.566 1.366H6.931a.8.8 0 0 1-.565-1.366l5.068-5.068a.8.8 0 0 1 1.132 0Z',
                }),
            }),
        s: true,
    },
])
const ArrowUpRound = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArrowUpRound', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63932), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'm18 15.6-4-4-4 4',
                }),
            }),
        s: true,
    },
])
const BackUp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BackUp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93899), __webpack_require__.b),
    },
])
const BaseClose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BaseClose', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(38101), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(74640), __webpack_require__.b),
    },
])
const BaseContacts = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BaseContacts', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41371), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'BaseContacts_svg__base/Contacts-1',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'BaseContacts_svg__Vector (Stroke)',
                            d: 'M6 2.809c-1.225 0-2.2.979-2.2 2.17v10.91c0 1.191.975 2.17 2.2 2.17h.75c.996 0 1.97.39 2.684 1.102l.002.002 1.706 1.687a1.222 1.222 0 0 0 1.706 0l1.707-1.687.001-.002a3.788 3.788 0 0 1 2.684-1.102H18c1.224 0 2.2-.987 2.2-2.17V4.979c0-1.191-.975-2.17-2.2-2.17H6Zm-3.8 2.17c0-2.089 1.705-3.77 3.8-3.77h12c2.095 0 3.8 1.681 3.8 3.77v10.91c0 2.077-1.703 3.77-3.8 3.77h-.76c-.592 0-1.147.229-1.554.636l-.004.003-1.71 1.69a2.823 2.823 0 0 1-3.954 0l-1.71-1.69-.003-.003a2.205 2.205 0 0 0-1.555-.636H6c-2.095 0-3.8-1.681-3.8-3.77V4.979Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'BaseContacts_svg__Vector (Stroke)_2',
                            d: 'M12 6.14a1.53 1.53 0 1 0 0 3.059 1.53 1.53 0 0 0 0-3.06ZM8.87 7.668a3.13 3.13 0 1 1 6.26 0 3.13 3.13 0 0 1-6.26 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'BaseContacts_svg__Vector (Stroke)_3',
                            d: 'M7.2 15.66c0-2.387 2.309-4.06 4.8-4.06 2.492 0 4.8 1.673 4.8 4.06a.8.8 0 0 1-1.6 0c0-1.214-1.271-2.46-3.2-2.46-1.928 0-3.2 1.246-3.2 2.46a.8.8 0 0 1-1.6 0Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const BaseUpload = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'BaseUpload',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(32728), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 25',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'm12 5.12 4.566 4.565a.8.8 0 0 1-1.131 1.131L12.8 8.182v7.569a.8.8 0 0 1-1.6 0V8.18l-2.634 2.635a.8.8 0 0 1-1.131-1.131L12 5.119Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M5.8 15.45v3h12.4v-3h1.6v3.6a1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1v-3.6h1.6Z',
                            }),
                        ],
                    }),
                }),
            s: true,
        },
    ],
    [24, 25],
)
const BaseUser = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BaseUser', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98592), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M6.786 21.02c.637.12 1.37.18 2.215.18h6c.844 0 1.577-.06 2.214-.18-.536-1.776-2.565-3.25-5.214-3.25-2.65 0-4.679 1.474-5.215 3.25Zm-1.723.532c.266-3.141 3.413-5.382 6.938-5.382 3.524 0 6.67 2.241 6.937 5.382a.8.8 0 0 1-.57.835c-.978.289-2.1.413-3.367.413H9c-1.268 0-2.39-.124-3.367-.413a.8.8 0 0 1-.57-.835Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.06 3.059C4.408 1.71 6.42 1.199 9 1.199h6c2.58 0 4.592.511 5.94 1.86 1.35 1.348 1.86 3.361 1.86 5.94v6c0 1.955-.292 3.578-1.016 4.838-.744 1.292-1.895 2.119-3.426 2.552a.8.8 0 0 1-1.015-.702c-.174-2.059-2.367-3.918-5.343-3.918-2.975 0-5.168 1.86-5.343 3.918a.8.8 0 0 1-1.015.702c-1.53-.433-2.682-1.26-3.425-2.552-.725-1.26-1.017-2.883-1.017-4.838V9c0-2.579.511-4.592 1.86-5.94Zm1.13 1.13C3.29 5.092 2.8 6.58 2.8 9v6c0 1.825.278 3.127.804 4.04a3.61 3.61 0 0 0 1.65 1.506C6.029 17.943 8.865 16.17 12 16.17c3.135 0 5.971 1.773 6.747 4.376a3.615 3.615 0 0 0 1.65-1.506c.525-.913.803-2.215.803-4.04V9c0-2.42-.489-3.908-1.39-4.81-.902-.9-2.389-1.39-4.81-1.39H9c-2.42 0-3.908.49-4.81 1.39ZM12 7.8a2.776 2.776 0 0 0-2.78 2.78A2.785 2.785 0 0 0 12 13.37a2.785 2.785 0 0 0 2.78-2.79A2.776 2.776 0 0 0 12 7.8Zm-4.38 2.78A4.376 4.376 0 0 1 12 6.2a4.376 4.376 0 0 1 4.38 4.38A4.385 4.385 0 0 1 12 14.97a4.385 4.385 0 0 1-4.38-4.39Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 7.8a2.776 2.776 0 0 0-2.78 2.78A2.785 2.785 0 0 0 12 13.37a2.785 2.785 0 0 0 2.78-2.79A2.776 2.776 0 0 0 12 7.8Zm-4.38 2.78A4.376 4.376 0 0 1 12 6.2a4.376 4.376 0 0 1 4.38 4.38A4.385 4.385 0 0 1 12 14.97a4.385 4.385 0 0 1-4.38-4.39Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const BestTrade = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BestTrade', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(42513), __webpack_require__.b),
    },
])
const BluePin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BluePin', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75524), __webpack_require__.b),
    },
])
const BorderedSuccess = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BorderedSuccess', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(928), __webpack_require__.b),
    },
])
const BusyWalletNav = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('BusyWalletNav', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37501), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M17.77 9.873h3.484c.412 0 .746.326.746.728v2.53a.746.746 0 0 1-.746.729h-3.405c-.994.013-1.863-.651-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.092 2.092 0 0 1 1.576-.74Zm.15 2.66h.33a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.745h-.33a.766.766 0 0 0-.54.213.728.728 0 0 0-.224.524c0 .413.341.749.765.754Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M22 8.382h-4.231v.034c-1.964 0-3.556 1.552-3.556 3.467s1.592 3.467 3.556 3.467H22v.312C22 19.015 19.964 21 16.516 21H7.484C4.036 21 2 19.015 2 15.662V8.338C2 4.985 4.036 3 7.484 3h9.032C19.964 3 22 4.985 22 8.382Zm-15.262 0h5.644a.755.755 0 0 0 .765-.746.755.755 0 0 0-.764-.745H6.738a.755.755 0 0 0-.764.736c0 .413.34.75.764.754Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#FF3545',
                        d: 'M23 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#fff',
                        fillRule: 'evenodd',
                        d: 'M24 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM20.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Buy = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Buy', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75250), __webpack_require__.b),
    },
])
const Cached = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Cached', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71514), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    d: 'm19.617 8.902-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46a7.93 7.93 0 0 0 4.26 1.24c4.42 0 8-3.58 8-8h3l-4-4Zm-13 4c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46a7.93 7.93 0 0 0-4.26-1.24c-4.42 0-8 3.58-8 8h-3l4 4 4-4h-3Z',
                    style: {
                        '--default-color': '#1C68F3',
                        fill: 'var(--icon-color, var(--default-color, currentColor))',
                    },
                }),
            }),
        s: true,
    },
])
const Candle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('candle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8556), __webpack_require__.b),
    },
])
const Card = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Card', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41754), __webpack_require__.b),
    },
])
const Check = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Check', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(68540), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M21.066 6.434a.8.8 0 0 1 0 1.13l-10 10a.8.8 0 0 1-1.131 0l-5-5a.8.8 0 0 1 1.13-1.13l4.435 4.434 9.434-9.434a.8.8 0 0 1 1.132 0Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Checkbox = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Checkbox', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27737), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M0 4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#fff',
                        fillRule: 'evenodd',
                        d: 'M14.03 5.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 0 1 1.06 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const CheckboxBlank = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckboxBlank', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75018), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                    width: '18',
                    height: '18',
                    x: '1',
                    y: '1',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    rx: '3',
                }),
            }),
        s: true,
    },
])
const CheckboxBorder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckboxBorder', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(95876), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                    width: '17',
                    height: '17',
                    x: '.5',
                    y: '.5',
                    fill: '#fff',
                    stroke: 'currentColor',
                    rx: '3.5',
                }),
            }),
        s: true,
    },
])
const CheckboxNo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckboxNo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75746), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                    width: '14',
                    height: '14',
                    x: '1',
                    y: '1',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    rx: '3',
                }),
            }),
        s: true,
    },
])
const CheckCircle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CheckCircle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(36976), __webpack_require__.b),
    },
])
const ChevronUp = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ChevronUp', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84826), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M5.833 10.833 10 15l4.167-4.167M5.833 5 10 9.167 14.167 5',
                }),
            }),
        s: true,
    },
])
const China = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('China', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51940), __webpack_require__.b),
    },
])
const CircleClose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CircleClose', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71632), __webpack_require__.b),
    },
])
const CircleLoading = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CircleLoading', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87654), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 36 36',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M34.5 18c0 9.113-7.387 16.5-16.5 16.5S1.5 27.113 1.5 18 8.887 1.5 18 1.5 34.5 8.887 34.5 18ZM4.8 18c0 7.29 5.91 13.2 13.2 13.2 7.29 0 13.2-5.91 13.2-13.2 0-7.29-5.91-13.2-13.2-13.2-7.29 0-13.2 5.91-13.2 13.2Z',
                            opacity: '.5',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M18 32.85c0 .911-.74 1.658-1.647 1.568A16.5 16.5 0 1 1 31.595 8.65c.517.751.218 1.76-.58 2.199-.799.439-1.794.14-2.33-.598a13.2 13.2 0 1 0-12.33 20.846c.903.114 1.645.842 1.645 1.753Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const CircleWarning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CircleWarning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69564), __webpack_require__.b),
    },
])
const Clear = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Clear', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(57208), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(97560), __webpack_require__.b),
    },
])
const Close = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Close', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64970), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M15 5 5 15M5 5l10 10',
                }),
            }),
        s: true,
    },
])
const Cloud = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Cloud', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65226), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 18 18',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipPath: "url('#Cloud_svg__cloud_a')",
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M4.924 7.633a.6.6 0 0 1-.536.658 2.576 2.576 0 1 0 .726 5.097.6.6 0 0 1 .217 1.18 3.776 3.776 0 1 1-1.065-7.471.6.6 0 0 1 .658.536Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M13.515 7.313a.6.6 0 0 1-.737-.422 4.253 4.253 0 1 0-8.107 2.55.6.6 0 0 1-1.129.406 5.453 5.453 0 1 1 10.395-3.27.6.6 0 0 1-.422.736Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M12.574 13.412a2.889 2.889 0 1 0-1.734-4.951.6.6 0 0 1-.835-.862 4.088 4.088 0 1 1 2.455 7.008.6.6 0 0 1 .114-1.195Zm-3.948-2.038a.6.6 0 0 1 .6.6v4.01l1.282-1.28a.6.6 0 1 1 .848.848L9.05 17.858a.6.6 0 0 1-.848 0l-2.306-2.306a.6.6 0 1 1 .848-.849l1.282 1.282v-4.011a.6.6 0 0 1 .6-.6Z',
                            }),
                        ],
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('clipPath', {
                            id: 'Cloud_svg__cloud_a',
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                fill: 'currentColor',
                                d: 'M.043.933h18v18h-18z',
                            }),
                        }),
                    }),
                ],
            }),
        s: true,
    },
])
const CloudBackup = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CloudBackup', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20523), __webpack_require__.b),
    },
])
const CloudBackup2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CloudBackup2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5289), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 19 19',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipPath: "url('#CloudBackup2_svg__cloud_backup_a')",
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M4.924 7.633a.6.6 0 0 1-.536.658 2.576 2.576 0 1 0 .726 5.097.6.6 0 0 1 .217 1.18 3.776 3.776 0 1 1-1.065-7.471.6.6 0 0 1 .658.536Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M13.515 7.313a.6.6 0 0 1-.737-.422 4.253 4.253 0 1 0-8.107 2.55.6.6 0 0 1-1.129.406 5.453 5.453 0 1 1 10.395-3.27.6.6 0 0 1-.422.736Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M12.574 13.412a2.889 2.889 0 1 0-1.734-4.951.6.6 0 0 1-.835-.862 4.088 4.088 0 1 1 2.455 7.008.6.6 0 0 1 .114-1.195Z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M8.626 16.535a.6.6 0 0 1-.6-.6v-4.011l-1.282 1.282a.6.6 0 0 1-.849-.849l2.306-2.306a.6.6 0 0 1 .849 0l2.306 2.306a.6.6 0 0 1-.848.849l-1.282-1.282v4.01a.6.6 0 0 1-.6.6Z',
                            }),
                        ],
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('clipPath', {
                            id: 'CloudBackup2_svg__cloud_backup_a',
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                fill: 'currentColor',
                                d: 'M.043.933h18v18h-18z',
                            }),
                        }),
                    }),
                ],
            }),
        s: true,
    },
])
const CloudLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CloudLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(49650), __webpack_require__.b),
    },
])
const CNY = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CNY', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79688), __webpack_require__.b),
    },
])
const Collectible = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Collectible',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(68118), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 13 12',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M6.5 0c-3.307 0-6 2.69-6 6s2.693 6 6 6 6-2.693 6-6-2.69-6-6-6Zm5.223 6a5.19 5.19 0 0 1-.92 2.96 2.705 2.705 0 0 0-.026-.067V8.89c-.156-.384-.468-.844-.905-1.367v-.001c-.09-.106-.175-.205-.252-.291a.617.617 0 0 0 .11-.352V3.975A3.255 3.255 0 0 0 7.299.838 5.233 5.233 0 0 1 11.723 6ZM1.277 6A5.233 5.233 0 0 1 5.805.823a2.85 2.85 0 0 0-1.287.739 2.972 2.972 0 0 0-.883 2.098v3.4c-.39.423-.843 1.015-1.117 1.61a6.888 6.888 0 0 0-.192.458A5.184 5.184 0 0 1 1.277 6Zm1.637 3.793c.062-.197.135-.397.224-.605.017.112.04.226.07.337l.001.002c.102.356.306.66.481.874a5.335 5.335 0 0 1-.776-.608Zm1.554-2.47c.023-.021.047-.042.073-.063a3.02 3.02 0 0 0-.009.233c0 .28.045.589.2.841a.97.97 0 0 0 .715.47c.09.016.173.02.249.02.45 0 .852-.183 1.167-.393.23-.154.423-.327.567-.474a.636.636 0 0 0 .486.02l.682-.245a2.694 2.694 0 0 0-.824.774c-.281.406-.443 1.019-.54 1.56-.077.432-.116.843-.136 1.116-.194.025-.389.04-.585.041-.063-.3-.236-.745-.726-1.013a1.97 1.97 0 0 0-1.406-.204c-.143-.154-.342-.41-.422-.691-.152-.533-.057-1.184-.013-1.423a6.11 6.11 0 0 1 .522-.569Zm1.016 1.254-.035.228h-.004l.04-.228Zm2.35-4.3h-.002V3.054c0-.825-.672-1.493-1.493-1.493h-.126a1.5 1.5 0 0 0-.23.018c.173-.046.354-.069.54-.067a2.47 2.47 0 0 1 2.43 2.463v2.8l-1.118.405V4.277ZM4.417 3.66c0-.545.215-1.085.594-1.487-.182.247-.29.552-.29.882v1.454c0 .443.196.836.498 1.108a.714.714 0 0 1-.128.247c-.107.14-.314.28-.566.45a6.006 6.006 0 0 0-.108.072V3.66Zm1.92 2.348c.26 0 .504-.068.715-.186v1.393a3.274 3.274 0 0 1-.454.444c-.31.247-.678.433-1.034.379h-.001a.22.22 0 0 1-.172-.108c-.081-.136-.104-.384-.074-.681.025-.248.08-.49.126-.644a1.513 1.513 0 0 0 .469-.63c.095.02.195.033.299.033h.126Zm-.839-2.953c0-.396.322-.716.716-.716h.126c.396 0 .716.322.716.716v1.454a.716.716 0 0 1-.716.716h-.126a.716.716 0 0 1-.716-.716V3.054Zm2.915 5.894a1.923 1.923 0 0 1 1.011-.741c.318.399.533.734.633.978.052.127.1.294.139.499a5.244 5.244 0 0 1-2.305 1.35c.022-.248.059-.56.117-.878.088-.484.22-.94.405-1.208Zm-3.95 1.857a.188.188 0 0 1 .01-.018c.12-.041.495-.137.94.106a.638.638 0 0 1 .258.262 5.25 5.25 0 0 1-1.208-.35Z',
                        clipRule: 'evenodd',
                    }),
                }),
            s: true,
        },
    ],
    [13, 12],
)
const Comeback = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Comeback', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97406), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M20 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a.996.996 0 0 0 1.415 0 1 1 0 0 0 0-1.414L7.413 13H20a1 1 0 1 0 0-2Z',
                }),
            }),
        s: true,
    },
])
const Connect = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Connect', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5720), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6.39 8.988a.6.6 0 0 1 .6-.6h4.02a.6.6 0 1 1 0 1.2H6.99a.6.6 0 0 1-.6-.6Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M1.986 9a3.961 3.961 0 0 1 3.96-3.96h2.015v1.2H5.947a2.761 2.761 0 1 0 0 5.521H7.96v1.2H5.947a3.961 3.961 0 0 1-3.961-3.96Zm14.028 0a3.961 3.961 0 0 0-3.96-3.96H9.288v1.2h2.764a2.761 2.761 0 0 1 0 5.521H9.29v1.2h2.764a3.961 3.961 0 0 0 3.961-3.96Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Contacts = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Contacts', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82112), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M17.294 7.291A5.274 5.274 0 0 1 12 12.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12 2a5.273 5.273 0 0 1 5.294 5.291ZM12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425 0 2.72-3.685 3.4-8 3.4Zm3.644-8.014a.8.8 0 0 1 .8-.8h5.112a.8.8 0 0 1 0 1.6h-5.112a.8.8 0 0 1-.8-.8Zm1.289-2.45a.8.8 0 0 1 .8-.8h3.823a.8.8 0 0 1 0 1.6h-3.823a.8.8 0 0 1-.8-.8Zm1.203-2.449a.8.8 0 0 1 .8-.8h2.62a.8.8 0 0 1 0 1.6h-2.62a.8.8 0 0 1-.8-.8Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Copy = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Copy',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(34166), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 16 17',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M7.736 12.923c-.898 0-1.68-.268-2.244-.794-.566-.53-.858-1.272-.858-2.117V5.267c0-.84.29-1.58.851-2.11.559-.525 1.336-.794 2.227-.8h4.386c.898 0 1.68.267 2.243.793.567.53.859 1.272.859 2.117v4.745c0 .84-.29 1.58-.852 2.109-.558.525-1.335.795-2.226.8h-.003l-4.383.002v-.534.534Zm0-1.067c-.689 0-1.19-.203-1.516-.506-.32-.3-.52-.746-.52-1.338V5.267c0-.589.198-1.033.516-1.332.322-.303.82-.507 1.5-.51h.002l4.38-.002c.689 0 1.19.203 1.515.506.321.3.52.746.52 1.338v4.745c0 .589-.197 1.032-.516 1.332-.322.303-.818.506-1.5.51l-4.381.002Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M5.41 15c-.898 0-1.68-.268-2.243-.794-.567-.53-.86-1.272-.86-2.117V7.344c0-1.084.484-1.987 1.37-2.49a.533.533 0 0 1 .526.928c-.514.292-.828.817-.828 1.562v4.745c0 .592.199 1.037.52 1.338.325.303.826.506 1.515.506l4.382-.002c.763-.005 1.295-.258 1.612-.627a.533.533 0 0 1 .81.694c-.563.654-1.418.994-2.418 1h-.003L5.41 15v-.534V15Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [16, 17],
)
const Currency = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Currency', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69484), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 25 25',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M3.36 8.49v9h15v-9h-15Zm14.25 2.128a2.265 2.265 0 0 1-1.377-1.378h1.377v1.378Zm-2.133 6.122H6.245a2.975 2.975 0 0 0-2.135-2.133v-3.23A2.978 2.978 0 0 0 6.244 9.24h9.232a2.979 2.979 0 0 0 2.134 2.138v3.227a2.978 2.978 0 0 0-2.133 2.135Zm-9.99-7.5a2.258 2.258 0 0 1-1.377 1.371v-1.37h1.377ZM4.11 15.373a2.255 2.255 0 0 1 1.372 1.367H4.11v-1.367Zm12.132 1.367a2.26 2.26 0 0 1 1.368-1.376v1.376h-1.368Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M14.985 11.865a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm0 1.5a.376.376 0 0 1 0-.75.376.376 0 0 1 0 .75ZM10.86 9.99c-1.242 0-2.25 1.344-2.25 3 0 1.657 1.008 3 2.25 3 1.243 0 2.25-1.343 2.25-3 0-1.656-1.007-3-2.25-3Zm0 5.25c-.813 0-1.5-1.03-1.5-2.25s.687-2.25 1.5-2.25 1.5 1.03 1.5 2.25-.687 2.25-1.5 2.25Zm-4.125-3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm0 1.5a.375.375 0 0 1 0-.75.376.376 0 0 1 0 .75ZM5.28 6.48H6v1.56h-.72zm14.76 0v.72H6v-.72z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#111418',
                        d: 'M20.04 14.76v.72h-.96v-.72z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        stroke: 'currentColor',
                        strokeWidth: '.36',
                        d: 'M20.22 6.66h.36v8.64h-.36z',
                    }),
                ],
            }),
        s: true,
    },
])
const Dark = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Dark', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(57418), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M9.266 1.878a3.979 3.979 0 0 0 1.007 7.827 3.979 3.979 0 0 0 3.849-2.971 6.25 6.25 0 1 1-4.855-4.855Z',
                }),
            }),
        s: true,
    },
])
const Decrease = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('decrease', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77597), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'decrease_svg__base/decrease',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'decrease_svg__Vector (Stroke)',
                            d: 'M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-7.333 6a7.333 7.333 0 1 1 14.666 0 7.333 7.333 0 0 1-14.666 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'decrease_svg__Vector (Stroke)_2',
                            d: 'M6.667 10c0-.369.298-.667.666-.667h5.334a.667.667 0 1 1 0 1.333H7.333a.667.667 0 0 1-.666-.667Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const DefaultToken = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DefaultToken', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(60737), __webpack_require__.b),
    },
    {
        c: ['dim'],
        u: () => new URL(/* asset import */ __webpack_require__(98331), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(52122), __webpack_require__.b),
    },
])
const Delete = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Delete', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31967), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.334 1.334 0 0 1 1.334 1.334V4m2 0v9.333a1.334 1.334 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334zm-6 3.333v4m2.666-4v4',
                }),
            }),
        s: true,
    },
])
const Disconnect = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Disconnect', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97234), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M16.348 4.455a.8.8 0 0 1 .293 1.093L8.746 19.223a.8.8 0 0 1-1.386-.8l7.895-13.675a.8.8 0 0 1 1.093-.293Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M2.647 12A5.281 5.281 0 0 1 7.93 6.72h3.316v1.6H7.929a3.681 3.681 0 1 0 0 7.362h1.163v1.6H7.93a5.281 5.281 0 0 1-5.282-5.28Zm18.705 0a5.281 5.281 0 0 0-5.28-5.281h-1.66v1.6h1.66a3.681 3.681 0 0 1 0 7.362H12.35v1.6h3.72a5.281 5.281 0 0 0 5.281-5.28Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Document = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Document', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(94706), __webpack_require__.b),
    },
])
const Documents = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Documents', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(89869), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.98 2.61c-.42.45-.65 1.14-.65 2.06v6.66c0 .92.23 1.6.65 2.06.42.44 1.09.74 2.15.74h5.34c1.06 0 1.74-.3 2.15-.74.42-.46.65-1.14.65-2.06V4.67c0-.92-.23-1.6-.65-2.06-.41-.44-1.09-.74-2.15-.74H6.13c-1.06 0-1.73.3-2.15.74ZM3.2 1.9C3.87 1.17 4.87.8 6.13.8h5.34c1.27 0 2.26.37 2.93 1.1.66.71.93 1.7.93 2.78v6.66c0 1.08-.27 2.07-.93 2.78-.67.72-1.66 1.09-2.93 1.09H6.13c-1.26 0-2.26-.37-2.93-1.09a3.98 3.98 0 0 1-.93-2.78V4.67c0-1.09.27-2.07.93-2.78Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M11.46 1.33c.29 0 .53.24.53.54V3.2c0 .44.36.8.8.8h1.33a.53.53 0 0 1 0 1.07H12.8a1.87 1.87 0 0 1-1.87-1.87V1.87c0-.3.24-.54.54-.54ZM5.6 8c0-.3.24-.53.53-.53h4a.53.53 0 1 1 0 1.06h-4A.53.53 0 0 1 5.6 8Zm0 2.14c0-.3.24-.54.53-.54h5.33a.53.53 0 0 1 0 1.07H6.13a.53.53 0 0 1-.53-.53Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Download = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Download', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78264), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M14 10v2.667A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V10m2.667-3.333L8 10l3.333-3.333M8 10V2',
                }),
            }),
        s: true,
    },
])
const Download2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Download2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(73073), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M11.694 9.779a.8.8 0 0 1-.494-.74v-6a.8.8 0 0 1 1.6 0v4.07l.634-.635a.8.8 0 0 1 1.132 1.132l-2 2a.8.8 0 0 1-.872.173Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12.566 9.606a.8.8 0 0 1-1.132 0l-2-2a.8.8 0 1 1 1.132-1.132l2 2a.8.8 0 0 1 0 1.132Zm-9.724 3.11c.731-1.058 2.083-1.517 4.158-1.517.552 0 .982.057 1.37.209.364.141.642.35.88.529l.03.022a.8.8 0 0 1 .104.094l1.01 1.078a2.198 2.198 0 0 0 3.202.001l.003-.002 1.02-1.08a.803.803 0 0 1 .101-.09l.03-.023c.239-.18.516-.388.88-.53.388-.15.818-.208 1.37-.208 2.076 0 3.427.459 4.158 1.517.35.505.502 1.075.573 1.622.07.53.07 1.101.07 1.633v1.028c0 1.451-.259 2.928-1.185 4.046-.951 1.148-2.468 1.754-4.616 1.754H8c-2.576 0-4.177-.57-5.033-1.81-.412-.596-.595-1.274-.682-1.94-.085-.65-.085-1.352-.085-2.02V15.97c0-.532 0-1.102.07-1.633.07-.547.223-1.117.572-1.622Zm1.014 1.83c-.055.417-.056.888-.056 1.453v1c0 .703.001 1.306.072 1.842.069.53.198.93.411 1.239.395.57 1.293 1.12 3.717 1.12h8c1.852 0 2.836-.514 3.384-1.176.574-.693.816-1.716.816-3.025v-1c0-.565-.001-1.036-.056-1.454-.053-.41-.151-.702-.302-.92-.269-.39-.917-.826-2.842-.826-.448 0-.658.048-.79.1-.131.05-.24.124-.475.3l-.97 1.027-.002.001a3.799 3.799 0 0 1-5.534.002l-.003-.003-.962-1.029c-.235-.175-.343-.247-.474-.299-.132-.05-.342-.099-.79-.099-1.924 0-2.573.437-2.842.826-.15.218-.249.51-.302.92Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M8.797 5.961a.8.8 0 0 1-.72.874c-1.355.13-1.796.54-1.996.915-.261.49-.28 1.179-.28 2.248v2a.8.8 0 1 1-1.6 0V9.894c-.001-.92-.002-2.015.469-2.897.55-1.03 1.609-1.596 3.253-1.755a.8.8 0 0 1 .874.72Zm6.407 0a.8.8 0 0 1 .873-.719c1.645.159 2.704.725 3.254 1.755.47.882.47 1.977.47 2.897v2.104a.8.8 0 1 1-1.6 0v-2c0-1.07-.02-1.759-.282-2.248-.2-.375-.64-.784-1.996-.915a.8.8 0 0 1-.719-.874Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Drop = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Drop',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(89038), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 20 24',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M9.46 14.845a.7.7 0 0 0 1.08 0l2.845-3.45a.7.7 0 0 0-.54-1.145h-5.69a.7.7 0 0 0-.54 1.145l2.845 3.45Z',
                    }),
                }),
            s: true,
        },
    ],
    [20, 24],
)
const Dump = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Dump', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(7652), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.566 4.565C3.07 5.06 2.8 5.993 2.8 7.999v8c0 2.006.27 2.939.766 3.434.495.496 1.428.766 3.434.766h10c2.006 0 2.939-.27 3.434-.766.496-.495.766-1.428.766-3.434v-4c0-2.006-.27-2.939-.765-3.434-.496-.496-1.43-.766-3.435-.766h-3c-.572 0-1.043-.084-1.446-.328-.359-.216-.592-.525-.759-.746l-.032-.042-.003-.004-1.5-2c-.304-.405-.44-.569-.623-.679-.165-.099-.456-.2-1.137-.2H7c-2.006 0-2.939.27-3.434.765ZM2.435 3.434C3.439 2.429 5.005 2.199 7 2.199h1.5c.82 0 1.443.118 1.96.43.478.286.787.699 1.046 1.045l.034.045 1.499 1.998c.21.277.27.341.343.385.051.031.19.097.618.097h3c1.994 0 3.561.23 4.566 1.235 1.004 1.004 1.234 2.57 1.234 4.565v4c0 1.995-.23 3.562-1.234 4.566-1.005 1.004-2.572 1.234-4.566 1.234H7c-1.994 0-3.561-.23-4.565-1.234C1.43 19.56 1.2 17.993 1.2 15.999V8c0-1.994.23-3.561 1.235-4.565Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M7.2 3a.8.8 0 0 1 .8-.8h9c1.123 0 2.113.28 2.816.984.703.702.984 1.692.984 2.815v1.38a.8.8 0 0 1-1.6 0V6c0-.876-.218-1.387-.515-1.684-.297-.297-.808-.516-1.685-.516H8a.8.8 0 0 1-.8-.8Zm8.339 11.106a.8.8 0 0 1-.74.494h-6a.8.8 0 0 1 0-1.6h4.07l-.635-.634a.8.8 0 0 1 1.131-1.132l2 2a.8.8 0 0 1 .174.872Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M15.365 13.234a.8.8 0 0 1 0 1.132l-2 2a.8.8 0 0 1-1.131-1.132l2-2a.8.8 0 0 1 1.131 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Edit = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Edit', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20023), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M10 17.596h7.5m-3.75-13.75a1.768 1.768 0 0 1 2.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z',
                }),
            }),
        s: true,
    },
])
const Edit2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Edit2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(61122), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M20 19.25a.75.75 0 1 1 0 1.5H4a.75.75 0 1 1 0-1.5h16ZM16.76 2.81l2.304 2.303a1.2 1.2 0 0 1 0 1.697l-9.8 9.8a1.2 1.2 0 0 1-.849.352H5.512a.6.6 0 0 1-.6-.6V13.46a1.2 1.2 0 0 1 .352-.849l9.8-9.8a1.2 1.2 0 0 1 1.697 0l-.001.001Zm-.848 1.273-9.5 9.5v1.88h1.879l9.5-9.5-1.879-1.88Z',
                }),
            }),
        s: true,
    },
])
const Empty = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Empty', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84535), __webpack_require__.b),
    },
])
const EmptySimple = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EmptySimple', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(31395), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(2963), __webpack_require__.b),
    },
])
const EncryptedFiles = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EncryptedFiles', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20126), __webpack_require__.b),
    },
])
const Europe = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Europe', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72851), __webpack_require__.b),
    },
])
const Eye = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Eye', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(43908), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(19762), __webpack_require__.b),
    },
])
const EyeColor = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EyeColor', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43878), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 21 21',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M10.58 8.1a2.31 2.31 0 1 0 0 4.63 2.31 2.31 0 0 0 0-4.62Zm-3.65 2.32a3.65 3.65 0 1 1 7.3 0 3.65 3.65 0 0 1-7.3 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M2.43 7.9c2-3.14 4.93-5.04 8.15-5.04 3.22 0 6.16 1.9 8.15 5.04.46.72.67 1.64.67 2.52 0 .88-.2 1.8-.67 2.52-2 3.14-4.93 5.04-8.15 5.04-3.22 0-6.16-1.9-8.15-5.04a4.76 4.76 0 0 1-.67-2.52c0-.88.2-1.8.67-2.52Zm8.15-3.71c-2.66 0-5.21 1.56-7.03 4.42-.29.46-.46 1.11-.46 1.8 0 .7.17 1.36.46 1.81 1.82 2.86 4.37 4.43 7.03 4.43s5.21-1.57 7.03-4.43c.29-.45.46-1.1.46-1.8s-.17-1.35-.46-1.8c-1.82-2.87-4.37-4.43-7.03-4.43Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const EyeOff = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('EyeOff', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(88107), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(61804), __webpack_require__.b),
    },
])
const Facebook = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Facebook', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(95856), __webpack_require__.b),
    },
])
const File = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('File', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82627), __webpack_require__.b),
    },
])
const FileMessage = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FileMessage', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58905), __webpack_require__.b),
    },
])
const FillSuccess = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FillSuccess', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(93656), __webpack_require__.b),
    },
])
const Filter = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Filter', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69820), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M2.535 16.26a.8.8 0 0 1 .8-.8h7.234a.8.8 0 0 1 0 1.6H3.335a.8.8 0 0 1-.8-.8Zm15.249-2.08a2.08 2.08 0 1 0-.002 4.159 2.08 2.08 0 0 0 .002-4.159Zm-3.68 2.08a3.68 3.68 0 1 1 7.36 0 3.68 3.68 0 0 1-7.36 0Zm-1.475-8.523a.8.8 0 0 1 .8-.8h7.235a.8.8 0 0 1 0 1.6H13.43a.8.8 0 0 1-.8-.8Zm-10.094 0a3.68 3.68 0 1 1 7.36 0 3.68 3.68 0 0 1-7.36 0Zm3.68-2.08a2.08 2.08 0 1 0 0 4.16 2.08 2.08 0 0 0 0-4.16Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Flag = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Flag', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(29665), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.89 1.2a.8.8 0 0 1 .8.8v20a.8.8 0 0 1-1.6 0V2a.8.8 0 0 1 .8-.8Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.09 4a.8.8 0 0 1 .8-.8h11.2c.74 0 1.398.102 1.934.326.542.228 1.005.603 1.232 1.16.226.554.16 1.146-.064 1.687-.222.537-.616 1.072-1.137 1.593l-1.2 1.2c-.51.51-.452 1.27-.038 1.632a.79.79 0 0 1 .038.037l1.2 1.2c.99.99 1.63 2.191 1.158 3.293-.467 1.09-1.766 1.472-3.123 1.472H4.89a.8.8 0 0 1 0-1.6h11.2c1.243 0 1.594-.367 1.652-.502.053-.124.092-.622-.818-1.532l-1.183-1.183c-1.164-1.042-1.1-2.865-.017-3.948l1.2-1.2c.43-.43.674-.794.79-1.074.113-.274.084-.413.06-.471-.023-.057-.098-.175-.369-.288-.276-.116-.705-.202-1.315-.202H4.89a.8.8 0 0 1-.8-.8Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Folder = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Folder', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72333), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.566 4.565C3.07 5.06 2.8 5.993 2.8 7.999v8c0 2.006.27 2.939.766 3.434.495.496 1.428.766 3.434.766h10c2.006 0 2.939-.27 3.434-.766.496-.495.766-1.428.766-3.434v-4c0-2.006-.27-2.939-.765-3.434-.496-.496-1.43-.766-3.435-.766h-3c-.572 0-1.043-.084-1.446-.328-.359-.216-.592-.525-.759-.746l-.032-.042-.003-.004-1.5-2c-.304-.405-.44-.569-.623-.679-.165-.099-.456-.2-1.137-.2H7c-2.006 0-2.939.27-3.434.765ZM2.435 3.434C3.439 2.429 5.005 2.199 7 2.199h1.5c.82 0 1.443.118 1.96.43.478.286.787.699 1.046 1.045l.034.045 1.499 1.998c.21.277.27.341.343.385.051.031.19.097.618.097h3c1.994 0 3.561.23 4.566 1.235 1.004 1.004 1.234 2.57 1.234 4.565v4c0 1.995-.23 3.562-1.234 4.566-1.005 1.004-2.572 1.234-4.566 1.234H7c-1.994 0-3.561-.23-4.565-1.234C1.43 19.56 1.2 17.993 1.2 15.999V8c0-1.994.23-3.561 1.235-4.565Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M7.2 3a.8.8 0 0 1 .8-.8h9c1.123 0 2.113.28 2.816.984.703.702.984 1.692.984 2.815v1.38a.8.8 0 0 1-1.6 0V6c0-.876-.218-1.387-.515-1.684-.297-.297-.808-.516-1.685-.516H8a.8.8 0 0 1-.8-.8Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Gas = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gas', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60130), __webpack_require__.b),
    },
])
const GasStation = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GasStation', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1339), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M4.92 3.338c-.354.327-.62.85-.62 1.662v16.2h12.4V5c0-.811-.265-1.335-.62-1.662-.364-.336-.906-.538-1.58-.538h-8c-.674 0-1.215.202-1.58.538ZM3.836 2.162C4.556 1.498 5.514 1.2 6.5 1.2h8c.986 0 1.945.298 2.665.962.73.674 1.135 1.65 1.135 2.838v17a.8.8 0 0 1-.8.8h-14a.8.8 0 0 1-.8-.8V5c0-1.188.405-2.164 1.136-2.838Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M1.2 22a.8.8 0 0 1 .8-.8h17a.8.8 0 0 1 0 1.6H2a.8.8 0 0 1-.8-.8ZM6.53 4.811c.538-.47 1.226-.62 1.86-.62h4.23c.635 0 1.323.15 1.861.62.558.487.83 1.205.83 2.07v1.23c0 .864-.272 1.582-.83 2.069-.538.47-1.226.62-1.86.62H8.39c-.635 0-1.323-.15-1.862-.62-.558-.487-.829-1.205-.829-2.07V6.88c0-.864.271-1.582.83-2.069Zm1.05 1.206c-.127.11-.28.338-.28.863v1.23c0 .526.153.753.28.864.147.128.404.226.81.226h4.23c.405 0 .662-.098.808-.226.127-.11.281-.338.281-.864V6.88c0-.525-.154-.752-.28-.863-.147-.128-.404-.227-.81-.227H8.39c-.405 0-.662.1-.809.227Zm4.258 6.187a.8.8 0 0 1 0 1.131l-1.741 1.741h2.738a.8.8 0 0 1 .584 1.346l-3.134 3.355a.8.8 0 1 1-1.169-1.092l1.876-2.009H8.165A.8.8 0 0 1 7.6 15.31l3.107-3.107a.8.8 0 0 1 1.131 0Zm7.447-3.561a.8.8 0 0 1 1.073-.358l2 1A.8.8 0 0 1 22.8 10v6a.8.8 0 0 1-.798.8l-4.5.01a.8.8 0 0 1-.004-1.6l3.702-.008v-4.707l-1.558-.78a.8.8 0 0 1-.357-1.072Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Gear = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gear', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(35786), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(32722), __webpack_require__.b),
    },
])
const GearSettings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GearSettings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17478), __webpack_require__.b),
    },
])
const Globe = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Globe', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30790), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18a38.524 38.524 0 0 0-.983-.332 9.077 9.077 0 0 1 8.52-6.38s.125-.018.186.14c.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474L9.047 5.9Zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04v.002Z',
                }),
            }),
        s: true,
    },
])
const GrayMasks = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GrayMasks', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84147), __webpack_require__.b),
    },
])
const HamburgerMenu = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('HamburgerMenu', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59737), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                            width: '15.383',
                            height: '2',
                            x: '4.309',
                            y: '6.539',
                            rx: '1',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                            width: '15.383',
                            height: '2',
                            x: '4.309',
                            y: '11',
                            rx: '1',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('rect', {
                            width: '15.383',
                            height: '2',
                            x: '4.309',
                            y: '15.461',
                            rx: '1',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const History = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('History', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(94299), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M3.743 3.919c-.63.677-.974 1.703-.974 3.08v10c0 1.378.344 2.403.974 3.08.619.668 1.628 1.12 3.226 1.12h7.375a.8.8 0 1 1 0 1.6H6.969c-1.903 0-3.393-.547-4.399-1.63-.996-1.073-1.401-2.547-1.401-4.17V7c0-1.622.405-3.097 1.401-4.17C3.576 1.748 5.066 1.2 6.97 1.2h8c1.902 0 3.393.548 4.399 1.63.995 1.073 1.4 2.548 1.4 4.17v4.205a.8.8 0 1 1-1.6 0V6.999c0-1.377-.343-2.403-.973-3.08-.62-.667-1.628-1.12-3.226-1.12h-8c-1.598 0-2.607.453-3.226 1.12Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M18.95 14.418a3.442 3.442 0 1 0 0 6.884 3.442 3.442 0 0 0 0-6.884Zm-4.842 3.442a4.842 4.842 0 1 1 9.684 0 4.842 4.842 0 0 1-9.684 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M18.949 14.895a.7.7 0 0 1 .7.7v2.278a.7.7 0 1 1-1.4 0v-2.279a.7.7 0 0 1 .7-.7Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M18.343 17.522a.7.7 0 0 1 .957-.256l1.668.963a.7.7 0 1 1-.7 1.213l-1.668-.963a.7.7 0 0 1-.257-.957ZM14.95 2a.8.8 0 0 1 .8.8v2c0 .658.542 1.2 1.2 1.2h2a.8.8 0 0 1 0 1.6h-2a2.806 2.806 0 0 1-2.8-2.8v-2a.8.8 0 0 1 .8-.8Zm-8.783 8.388a.8.8 0 0 1 .8-.8h6a.8.8 0 0 1 0 1.6h-6a.8.8 0 0 1-.8-.8Zm0 4.85a.8.8 0 0 1 .8-.8h4.814a.8.8 0 0 1 0 1.6H6.967a.8.8 0 0 1-.8-.8Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const HKD = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('HKD', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3901), __webpack_require__.b),
    },
])
const HongKong = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('HongKong', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(9897), __webpack_require__.b),
    },
])
const Identity = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Identity', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(68977), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(27959), __webpack_require__.b),
    },
])
const Info = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Info', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(24239), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(7942), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            d: 'M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#fff',
                            fillRule: 'evenodd',
                            d: 'M10 8.61a.75.75 0 0 1 .75.75v4.516a.75.75 0 1 1-1.5 0V9.359a.75.75 0 0 1 .75-.75Zm0-2.5a.75.75 0 0 1 .75.75v.019a.75.75 0 0 1-1.5 0v-.02a.75.75 0 0 1 .75-.75Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Interaction = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Interaction', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(38485), __webpack_require__.b),
    },
])
const InteractionCircle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('InteractionCircle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79593), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M10.833 18.667a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'm12.75 6 1.5 1.5-1.5 1.5',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M7.5 9.75V9A1.5 1.5 0 0 1 9 7.5h5.25M9 14.25l-1.5-1.5 1.5-1.5',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M14.25 10.5v.75a1.5 1.5 0 0 1-1.5 1.5H7.5',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Japan = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Japan', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79970), __webpack_require__.b),
    },
])
const JPY = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('JPY', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(34558), __webpack_require__.b),
    },
])
const KeySquare = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'KeySquare',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(92242), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 25 24',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            stroke: 'currentColor',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '1.5',
                            d: 'M9.8 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            stroke: 'currentColor',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: '10',
                            strokeWidth: '1.5',
                            d: 'M17.08 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88Zm-5.83 2.67-.85-.86',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            stroke: 'currentColor',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '2',
                            d: 'M14.195 10.7h.009',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [25, 24],
)
const LeftArrow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LeftArrow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58177), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M16.566 4.937a.8.8 0 0 1 0 1.132l-6.435 6.434 6.434 6.434a.8.8 0 0 1-1.13 1.132l-7-7a.8.8 0 0 1 0-1.132l7-7a.8.8 0 0 1 1.13 0Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const LinearCalendar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LinearCalendar', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(10572), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(19011), __webpack_require__.b),
    },
])
const Link = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Link', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40596), __webpack_require__.b),
    },
])
const LinkOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LinkOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80490), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 12 12',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M1.6 2.1a.5.5 0 0 1 .5-.5h3.529v.8H2.4v7.2h7.2V6.235h.8V9.9a.5.5 0 0 1-.5.5H2.1a.5.5 0 0 1-.5-.5V2.1ZM6.832 2c0-.22.18-.4.4-.4H10c.22 0 .4.18.4.4v2.747a.4.4 0 0 1-.8 0v-1.77l-4.935 5.02a.4.4 0 0 1-.57-.56L9.045 2.4H7.233a.4.4 0 0 1-.4-.4Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Loader = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Loader', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52796), __webpack_require__.b),
    },
])
const LoadingBase = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LoadingBase', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(71322), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(19083), __webpack_require__.b),
    },
])
const LocalBackup = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('LocalBackup', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98960), __webpack_require__.b),
    },
])
const Lock = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Lock',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(76080), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 25',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M7.748 5.01c-.697.866-.948 2.132-.948 3.74v2a.8.8 0 0 1-1.6 0v-2c0-1.704.25-3.438 1.302-4.744C7.585 2.662 9.363 1.95 12 1.95s4.416.713 5.498 2.057C18.55 5.312 18.8 7.046 18.8 8.75v2a.8.8 0 0 1-1.6 0v-2c0-1.607-.25-2.873-.948-3.74-.667-.828-1.889-1.46-4.252-1.46s-3.584.632-4.252 1.46zM12 15.05a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zm-3.3 1.7a3.3 3.3 0 1 1 6.6 0 3.3 3.3 0 0 1-6.6 0z',
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                d: 'M3.566 12.315c-.496.495-.766 1.428-.766 3.434v2c0 2.006.27 2.939.766 3.434.495.496 1.428.766 3.434.766h10c2.006 0 2.939-.27 3.434-.766.496-.495.766-1.428.766-3.434v-2c0-2.006-.27-2.939-.765-3.434-.496-.496-1.43-.766-3.435-.766H7c-2.006 0-2.939.27-3.434.766zm-1.131-1.131C3.439 10.178 5.005 9.949 7 9.949h10c1.994 0 3.561.23 4.566 1.235 1.004 1.004 1.234 2.57 1.234 4.565v2c0 1.995-.23 3.562-1.234 4.566-1.005 1.004-2.572 1.234-4.566 1.234H7c-1.994 0-3.561-.23-4.565-1.234C1.43 21.31 1.2 19.743 1.2 17.749v-2c0-1.994.23-3.561 1.235-4.566z',
                            }),
                        ],
                    }),
                }),
            s: true,
        },
    ],
    [24, 25],
)
const MaskAvatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskAvatar', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(85091), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(84989), __webpack_require__.b),
    },
])
const MaskInMinds = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskInMinds', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71963), __webpack_require__.b),
    },
])
const MaskMe = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskMe', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98365), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M17.794 7.397a5.274 5.274 0 0 1-5.294 5.292 5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12.5 2.105a5.273 5.273 0 0 1 5.294 5.292ZM12.5 22.105c-4.338 0-8-.705-8-3.425 0-2.72 3.685-3.4 8-3.4 4.339 0 8 .704 8 3.424 0 2.721-3.685 3.401-8 3.401Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Masks = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Masks', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(38035), __webpack_require__.b),
    },
])
const Message = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Message', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5777), __webpack_require__.b),
    },
])
const Mnemonic = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Mnemonic',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(4821), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 25',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M2.865 5.878a2.8 2.8 0 0 1 2.8-2.8h13.69a.8.8 0 0 1 0 1.6H5.665a1.2 1.2 0 0 0-1.2 1.2v.803h13.87a2.8 2.8 0 0 1 2.8 2.8v10.138a2.8 2.8 0 0 1-2.8 2.8H5.665a2.8 2.8 0 0 1-2.8-2.8V5.88Zm1.6 2.403v11.338a1.2 1.2 0 0 0 1.2 1.2h12.67a1.2 1.2 0 0 0 1.2-1.2V9.481a1.2 1.2 0 0 0-1.2-1.2H4.465Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M12.285 9.23a.8.8 0 0 1 .463 1.032l-3.484 9.155a.8.8 0 1 1-1.496-.569l3.484-9.155a.8.8 0 0 1 1.033-.463Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M15.769 19.881a.8.8 0 0 0 .463-1.032l-3.484-9.155a.8.8 0 0 0-1.495.569l3.484 9.155a.8.8 0 0 0 1.032.463Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M9.458 15.546a.8.8 0 0 1 .8-.8H13.9a.8.8 0 0 1 0 1.6h-3.642a.8.8 0 0 1-.8-.8Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [24, 25],
)
const More = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('More', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(12051), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z',
                }),
            }),
        s: true,
    },
])
const NextIdAvatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NextIdAvatar', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(50183), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(20277), __webpack_require__.b),
    },
])
const NextIdPersonaWarning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NextIdPersonaWarning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(85782), __webpack_require__.b),
    },
])
const NFTRedPacket = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NFTRedPacket', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69846), __webpack_require__.b),
    },
])
const OutlinedMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('OutlinedMask', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(61130), __webpack_require__.b),
    },
])
const PersonasOutline = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'PersonasOutline',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(89743), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 20 21',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('g', {
                        id: 'PersonasOutline_svg__base/me',
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PersonasOutline_svg__Profile',
                            fillRule: 'evenodd',
                            stroke: 'currentColor',
                            strokeOpacity: '.78',
                            strokeWidth: '1.6',
                            d: 'M14.412 6.577A4.395 4.395 0 0 1 10 10.987a4.396 4.396 0 0 1-4.412-4.41A4.395 4.395 0 0 1 10 2.167a4.394 4.394 0 0 1 4.412 4.41ZM10 18.834c-3.615 0-6.667-.587-6.667-2.854 0-2.268 3.071-2.834 6.667-2.834 3.616 0 6.667.587 6.667 2.854 0 2.267-3.072 2.834-6.667 2.834Z',
                            clipRule: 'evenodd',
                        }),
                    }),
                }),
            s: true,
        },
    ],
    [20, 21],
)
const Pin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Pin', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(84023), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(60009), __webpack_require__.b),
    },
])
const Play = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Play', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(11268), __webpack_require__.b),
    },
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(93173), __webpack_require__.b),
    },
])
const Plugin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Plugin', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50580), __webpack_require__.b),
    },
])
const Plugins = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Plugins', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32658), __webpack_require__.b),
    },
])
const PopupClose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupClose', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30762), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'm6 6 12 12M6 18 18 6',
                }),
            }),
        s: true,
    },
])
const PopupLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41617), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 12 12',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M1.6 2.1a.5.5 0 0 1 .5-.5h3.529v.8H2.4v7.2h7.2V6.235h.8V9.9a.5.5 0 0 1-.5.5H2.1a.5.5 0 0 1-.5-.5V2.1ZM6.832 2c0-.22.18-.4.4-.4H10c.22 0 .4.18.4.4v2.747a.4.4 0 0 1-.8 0v-1.77l-4.935 5.02a.4.4 0 0 1-.57-.56L9.045 2.4H7.233a.4.4 0 0 1-.4-.4Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const PopupRestore = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupRestore', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(28331), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'm13.777 8.974-3.636 1.02a.323.323 0 0 0-.213.458.38.38 0 0 0 .023.042l1.942 3.17a.46.46 0 0 0 .554.18.33.33 0 0 0 .177-.173l.501-.743c.863.446 1.46.842 1.802 1.673l.527 1.28a.457.457 0 0 0 .516.27.33.33 0 0 0 .27-.29l.115-1c.208-1.655-.805-3.351-2.512-4.207l.474-1.174c.074-.182-.037-.4-.249-.485a.452.452 0 0 0-.29-.021Zm-2.892 1.6 2.37-.667-.303.752c-.074.183.037.4.248.485 1.376.556 2.287 1.74 2.372 3.016-.514-1.052-1.464-1.911-2.629-2.38-.21-.085-.442-.006-.516.177l-.277.686-1.265-2.07Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M5.998 3.895c-.907.417-1.19.873-1.19 1.165 0 .292.283.747 1.19 1.165.856.394 2.08.654 3.465.654 1.384 0 2.609-.26 3.464-.654.908-.418 1.19-.873 1.19-1.165 0-.292-.283-.748-1.19-1.165-.855-.394-2.08-.654-3.464-.654-1.385 0-2.61.26-3.465.654Zm-.502-1.09c1.046-.482 2.45-.764 3.967-.764s2.92.282 3.966.764c.995.457 1.888 1.211 1.888 2.255 0 1.044-.893 1.797-1.888 2.255-1.046.482-2.449.764-3.966.764-1.518 0-2.92-.282-3.967-.764-.994-.458-1.888-1.211-1.888-2.255 0-1.044.894-1.798 1.888-2.255Zm.279 6.487c.708.375 1.738.655 2.942.738l-.082 1.197c-1.325-.091-2.529-.401-3.422-.875-.859-.455-1.605-1.165-1.605-2.115h1.2c0 .262.224.661.967 1.055Zm0 2.948c.708.374 1.738.654 2.942.737l-.082 1.197c-1.325-.091-2.529-.401-3.422-.875-.859-.455-1.605-1.165-1.605-2.115h1.2c0 .263.224.661.967 1.055Zm-.097 2.7c.755.4 2.1.713 4.374.713v1.2c-2.347 0-3.924-.318-4.935-.852-1.053-.557-1.509-1.365-1.509-2.223h1.2c0 .355.156.784.87 1.162Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M14.717 4.358a.6.6 0 0 1 .6.6v2.548a.6.6 0 1 1-1.2 0V4.958a.6.6 0 0 1 .6-.6Zm-10.509 0a.6.6 0 0 1 .6.6v8.82a.6.6 0 0 1-1.2 0v-8.82a.6.6 0 0 1 .6-.6Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const PopupTrash = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PopupTrash', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90094), __webpack_require__.b),
    },
])
const PrimaryInfo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PrimaryInfo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63919), __webpack_require__.b),
    },
])
const Provider = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Provider', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(88703), __webpack_require__.b),
    },
])
const PublicKey = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PublicKey', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(30670), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(67925), __webpack_require__.b),
    },
])
const PublicKey2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PublicKey2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(79854), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'PublicKey2_svg__base/key',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PublicKey2_svg__Ellipse 85 (Stroke)',
                            d: 'M11.856 4.691a3.244 3.244 0 1 0 3.996 5.111 3.244 3.244 0 0 0-3.996-5.11Zm-1.608 5.375a4.577 4.577 0 1 1 7.212-5.638 4.577 4.577 0 0 1-7.212 5.638Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PublicKey2_svg__Ellipse 86 (Stroke)',
                            d: 'M13.433 6.71a.684.684 0 1 0 .842 1.076.684.684 0 0 0-.842-1.077Zm-1.168 1.78a2.017 2.017 0 1 1 3.178-2.484 2.017 2.017 0 0 1-3.178 2.484Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'PublicKey2_svg__Vector 11 (Stroke)',
                            d: 'M1.924 16.573a.667.667 0 0 1 .114-.935l3.776-2.953 4.494-3.494a.667.667 0 0 1 .819 1.053L7.16 13.328l.95 1.215a.667.667 0 0 1-1.05.821l-.952-1.216-1.043.815 1.556 1.99a.667.667 0 1 1-1.05.82l-1.556-1.99-1.157.905a.667.667 0 0 1-.935-.115Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Questions = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Questions', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(98970), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12 4.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4ZM3.2 12a8.8 8.8 0 1 1 17.6 0 8.8 8.8 0 0 1-17.6 0Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M11.9 16.787a.69.69 0 1 1-.057-1.38.69.69 0 0 1 .056 1.38Zm2.956-6.713c-.04.738-.267 1.317-1.397 2.448-.571.573-.932 1.004-.97 1.38a.574.574 0 0 1-1.14-.112c.076-.795.66-1.437 1.3-2.08 1.027-1.024 1.046-1.35 1.063-1.697a1.475 1.475 0 0 0-.421-1.1 1.79 1.79 0 0 0-1.293-.55h-.003a1.714 1.714 0 0 0-1.707 1.711.574.574 0 0 1-1.147 0c0-.762.295-1.478.833-2.019a2.838 2.838 0 0 1 2.018-.838 2.947 2.947 0 0 1 2.13.906c.513.537.772 1.23.734 1.951Z',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M14.052 8.19a2.85 2.85 0 0 0-2.06-.876 2.74 2.74 0 0 0-1.948.81 2.744 2.744 0 0 0-.806 1.95.476.476 0 1 0 .952 0 1.811 1.811 0 0 1 1.804-1.809h.004a1.887 1.887 0 0 1 1.363.58 1.572 1.572 0 0 1 .449 1.172c-.01.18-.02.365-.165.636-.142.266-.411.612-.927 1.127-.644.646-1.2 1.264-1.272 2.02a.475.475 0 1 0 .947.092c.02-.213.132-.432.302-.664a7.27 7.27 0 0 1 .694-.775c.563-.563.895-.982 1.09-1.348a2.31 2.31 0 0 0 .28-1.036 2.507 2.507 0 0 0-.707-1.879Zm-2.06-1.07a3.044 3.044 0 0 1 2.2.935 2.7 2.7 0 0 1 .761 2.025c-.02.38-.09.723-.301 1.117-.21.39-.556.826-1.124 1.394a7.08 7.08 0 0 0-.675.753c-.163.22-.25.405-.266.568a.67.67 0 0 1-1.31.13m-.026-.261c.081-.835.692-1.5 1.329-2.14.512-.51.765-.84.893-1.08.125-.233.133-.385.142-.553a1.376 1.376 0 0 0-.394-1.027V8.98a1.692 1.692 0 0 0-1.223-.52h-.003a1.616 1.616 0 0 0-1.61 1.614.67.67 0 1 1-1.342 0c0-.788.306-1.529.862-2.088a2.936 2.936 0 0 1 2.087-.867v.098-.098m-.74 6.662.096.01-.097-.01m.644 1.723a.594.594 0 0 0-.234 1.147.592.592 0 1 0 .234-1.147Zm-.303-.145a.787.787 0 1 1 .558 1.473.787.787 0 0 1-.558-1.473Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const RadioButtonChecked = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RadioButtonChecked', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82614), __webpack_require__.b),
    },
])
const RadioButtonUnChecked = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RadioButtonUnChecked', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5285), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 21 21',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('circle', {
                    cx: '10.166',
                    cy: '10.131',
                    r: '9',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                }),
            }),
        s: true,
    },
])
const RadioNo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RadioNo', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(25691), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 21 21',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('circle', {
                    cx: '10.166',
                    cy: '10.437',
                    r: '9',
                    stroke: '#6F6F6F',
                    strokeWidth: '2',
                }),
            }),
        s: true,
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(72636), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 21 21',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('circle', {
                    cx: '10.166',
                    cy: '10.911',
                    r: '9',
                    stroke: '#E6E7E8',
                    strokeWidth: '2',
                }),
            }),
        s: true,
    },
])
const ReceiveColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ReceiveColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(72261), __webpack_require__.b),
    },
])
const RedPacket = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RedPacket', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82268), __webpack_require__.b),
    },
])
const Refresh = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Refresh', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90963), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M12 4.934a7.198 7.198 0 0 0-6.283 3.68.8.8 0 1 1-1.395-.783A8.8 8.8 0 1 1 3.2 12.134a.8.8 0 0 1 1.6 0 7.2 7.2 0 1 0 7.2-7.2Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M4.797 3.47a.8.8 0 0 1 .8.8v3.2h3.2a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.8-.8v-4a.8.8 0 0 1 .8-.8Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Restore = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Restore', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87590), __webpack_require__.b),
    },
])
const RestoreColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RestoreColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(10849), __webpack_require__.b),
    },
])
const Retweet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Retweet', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(12414), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(2329), __webpack_require__.b),
    },
])
const Right = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Right', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(11238), __webpack_require__.b),
    },
])
const RightArrow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('RightArrow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(16066), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M8.935 20.063a.8.8 0 0 1 0-1.132l6.434-6.434-6.434-6.434a.8.8 0 1 1 1.13-1.132l7 7a.8.8 0 0 1 0 1.132l-7 7a.8.8 0 0 1-1.13 0Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Risk = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Risk', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(76435), __webpack_require__.b),
    },
])
const Search = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Search', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75653), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M4.271 9.41a4.93 4.93 0 1 1 8.478 3.424.617.617 0 0 0-.122.123A4.93 4.93 0 0 1 4.272 9.41zm8.837 4.79a6.18 6.18 0 1 1 .884-.884l2.596 2.596a.625.625 0 1 1-.884.884L13.108 14.2z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const SecurityRisk = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SecurityRisk', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(97420), __webpack_require__.b),
    },
])
const SecurityWarning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SecurityWarning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64831), __webpack_require__.b),
    },
])
const Selected = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Selected', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(33056), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#101010',
                            d: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            d: 'M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#fff',
                            fillRule: 'evenodd',
                            d: 'M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(20061), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#F5F5F5',
                            d: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            d: 'M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: '#fff',
                            fillRule: 'evenodd',
                            d: 'M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Self = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Self', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78826), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 25 25',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M17.794 7.397a5.274 5.274 0 0 1-5.294 5.292 5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12.5 2.105a5.273 5.273 0 0 1 5.294 5.292ZM12.5 22.105c-4.338 0-8-.705-8-3.425 0-2.72 3.685-3.4 8-3.4 4.339 0 8 .704 8 3.424 0 2.721-3.685 3.401-8 3.401Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const Send = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Send', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(11892), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'M16.345 3.382 2.425 7.926l3.397 2.032a.75.75 0 0 1 .365.643v2.277l2.3-.933a.75.75 0 0 1 .648.041l5.208 2.92 2.002-11.524Zm.339-1.372a.75.75 0 0 1 .971.84l-2.239 12.89a.75.75 0 0 1-1.106.525L8.737 13.14l-2.718 1.1a.75.75 0 0 1-1.032-.695v-2.69L.96 8.45a.75.75 0 0 1 .152-1.357l15.57-5.082ZM14.18 5.656a.6.6 0 0 1-.06.846l-4.234 3.679a.6.6 0 0 1-.787-.906l4.234-3.679a.6.6 0 0 1 .847.06Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const SendColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SendColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(81107), __webpack_require__.b),
    },
])
const Setting = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Setting', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20987), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'none',
                    stroke: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M14.55 11.25a1.238 1.238 0 0 0 .247 1.365l.045.045a1.5 1.5 0 0 1-1.06 2.562 1.5 1.5 0 0 1-1.062-.44l-.045-.044a1.238 1.238 0 0 0-1.365-.248 1.238 1.238 0 0 0-.75 1.133v.127a1.5 1.5 0 1 1-3 0v-.068a1.238 1.238 0 0 0-.81-1.132 1.238 1.238 0 0 0-1.365.247l-.045.045a1.5 1.5 0 1 1-2.123-2.122l.046-.045a1.238 1.238 0 0 0 .247-1.365 1.238 1.238 0 0 0-1.132-.75H2.25a1.5 1.5 0 1 1 0-3h.067a1.237 1.237 0 0 0 1.133-.81 1.237 1.237 0 0 0-.248-1.365l-.044-.045A1.5 1.5 0 1 1 5.28 3.217l.045.046a1.237 1.237 0 0 0 1.365.247h.06a1.237 1.237 0 0 0 .75-1.132V2.25a1.5 1.5 0 0 1 3 0v.067a1.238 1.238 0 0 0 .75 1.133 1.237 1.237 0 0 0 1.365-.248l.045-.044a1.5 1.5 0 1 1 2.123 2.122l-.045.045a1.237 1.237 0 0 0-.248 1.365v.06a1.237 1.237 0 0 0 1.133.75h.127a1.5 1.5 0 0 1 0 3h-.068a1.238 1.238 0 0 0-1.132.75z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Settings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Settings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50267), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'm12 23-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 1 1 2.828-1.172A4.027 4.027 0 0 1 12 16zm0-6a2 2 0 1 0-.001 4A2 2 0 0 0 12 10z',
                }),
            }),
        s: true,
    },
])
const Settings2 = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Settings2', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90704), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    d: 'm17.808 3.606 4.345 7.528c.31.537.31 1.205 0 1.744l-4.345 7.526c-.312.537-.89.872-1.512.872h-8.69c-.624 0-1.2-.333-1.512-.872l-4.346-7.526a1.743 1.743 0 0 1 0-1.744l4.299-7.441c.34-.59.977-.959 1.66-.959h8.59c.62 0 1.2.333 1.51.872Zm-9.415 8.4a3.562 3.562 0 0 1 3.557-3.559 3.564 3.564 0 0 1 3.558 3.56 3.56 3.56 0 0 1-3.558 3.556 3.562 3.562 0 0 1-3.557-3.558Zm1.64.001a1.92 1.92 0 0 0 1.917 1.918 1.92 1.92 0 0 0 1.918-1.918 1.92 1.92 0 0 0-1.918-1.917 1.92 1.92 0 0 0-1.917 1.917Z',
                    clipRule: 'evenodd',
                }),
            }),
        s: true,
    },
])
const SharpMask = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SharpMask', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20055), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M3.2 1.5H16.8C17.0232 1.5 17.2443 1.54397 17.4506 1.6294C17.6568 1.71484 17.8442 1.84006 18.0021 1.99792C18.1599 2.15578 18.2852 2.34318 18.3706 2.54944C18.456 2.75569 18.5 2.97675 18.5 3.2V16.8C18.5 17.2509 18.3209 17.6833 18.0021 18.0021C17.6833 18.3209 17.2509 18.5 16.8 18.5H3.2C2.74913 18.5 2.31673 18.3209 1.99792 18.0021C1.67911 17.6833 1.5 17.2509 1.5 16.8V3.2C1.5 2.74913 1.67911 2.31673 1.99792 1.99792C2.31673 1.67911 2.74913 1.5 3.2 1.5ZM17.1999 11.1998V7.20037H2.80005V15.7599C2.79999 15.949 2.8372 16.1363 2.90954 16.3111C2.98189 16.4859 3.08795 16.6447 3.22168 16.7784C3.35541 16.9122 3.51419 17.0183 3.68893 17.0907C3.86368 17.1631 4.05098 17.2004 4.24013 17.2004H15.7599C15.949 17.2004 16.1363 17.1631 16.3111 17.0907C16.4858 17.0183 16.6446 16.9122 16.7783 16.7784C16.912 16.6447 17.0181 16.4859 17.0905 16.3111C17.1628 16.1363 17.2 15.949 17.1999 15.7599V12.4001H14.8741C14.4255 13.3125 13.7303 14.0809 12.8672 14.6182C12.0041 15.1555 11.0077 15.4402 9.99105 15.44C7.39855 15.44 5.23016 13.6273 4.68347 11.2003L17.1999 11.1998ZM9.99105 14.2491C10.6812 14.2496 11.3611 14.0813 11.9714 13.7591C12.5818 13.4368 13.1041 12.9703 13.4931 12.4001H6.48816C6.87711 12.9704 7.39953 13.4369 8.00997 13.7592C8.6204 14.0814 9.30078 14.2496 9.99105 14.2491ZM4.70271 10.0796C4.77976 9.5465 5.04632 9.05898 5.45355 8.70637C5.86078 8.35377 6.38142 8.15969 6.92009 8.15969C7.45876 8.15969 7.9794 8.35377 8.38663 8.70637C8.79386 9.05898 9.06042 9.5465 9.13747 10.0796H7.90989C7.84206 9.87052 7.70975 9.68827 7.53193 9.55902C7.35411 9.42976 7.13993 9.36014 6.92009 9.36014C6.70026 9.36014 6.48607 9.42976 6.30825 9.55902C6.13044 9.68827 5.99812 9.87052 5.93029 10.0796H4.70271ZM10.863 10.0796C10.9404 9.54682 11.207 9.05969 11.6142 8.70741C12.0213 8.35512 12.5417 8.16123 13.0801 8.16123C13.6185 8.16123 14.1389 8.35512 14.5461 8.70741C14.9532 9.05969 15.2199 9.54682 15.2973 10.0796H14.0697C14.0019 9.87052 13.8696 9.68827 13.6917 9.55902C13.5139 9.42976 13.2997 9.36014 13.0799 9.36014C12.8601 9.36014 12.6459 9.42976 12.4681 9.55902C12.2903 9.68827 12.1579 9.87052 12.0901 10.0796H10.863ZM17.1995 4.24058C17.1996 4.05143 17.1624 3.86412 17.09 3.68935C17.0177 3.51458 16.9116 3.35577 16.7779 3.222C16.6441 3.08823 16.4854 2.98211 16.3106 2.90971C16.1359 2.83732 15.9486 2.80005 15.7594 2.80005H4.24013C4.05094 2.79999 3.8636 2.83721 3.6888 2.90959C3.514 2.98196 3.35517 3.08807 3.22139 3.22184C3.08762 3.35562 2.98151 3.51444 2.90914 3.68924C2.83677 3.86404 2.79955 4.05139 2.79961 4.24058V6.00053H17.1999L17.1995 4.24058Z',
                }),
            }),
        s: true,
    },
])
const SignUpAccount = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SignUpAccount', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(47196), __webpack_require__.b),
    },
])
const SmartPay = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SmartPay', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64454), __webpack_require__.b),
    },
])
const Star = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Star', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(7798), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M11.742 17.426a.5.5 0 0 1 .516 0l4.908 2.962a.5.5 0 0 0 .745-.542l-1.302-5.582a.5.5 0 0 1 .16-.492l4.337-3.758a.5.5 0 0 0-.284-.876l-5.712-.492a.5.5 0 0 1-.418-.303L12.46 3.084a.5.5 0 0 0-.92 0l-2.232 5.26a.5.5 0 0 1-.418.302l-5.713.493a.5.5 0 0 0-.285.875l4.33 3.759a.5.5 0 0 1 .16.49l-1.295 5.585a.5.5 0 0 0 .746.54l4.909-2.962z',
                }),
            }),
        s: true,
    },
])
const Success = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Success', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(36303), __webpack_require__.b),
    },
])
const SuccessForSnackBar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SuccessForSnackBar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8670), __webpack_require__.b),
    },
])
const Sun = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Sun', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84207), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M8 12.992c.254 0 .466.183.51.425l.008.093v.972a.518.518 0 0 1-1.027.093l-.009-.093v-.972c0-.286.232-.518.518-.518Zm4.181-1.528.081.066.688.688a.518.518 0 0 1-.651.798l-.081-.066-.688-.688a.518.518 0 0 1 .651-.798Zm-7.711.066c.177.177.199.45.066.651l-.066.081-.688.688a.518.518 0 0 1-.798-.651l.066-.081.688-.688a.518.518 0 0 1 .732 0ZM8 4.296a3.704 3.704 0 1 1 0 7.408 3.704 3.704 0 0 1 0-7.408Zm6.482 3.186a.518.518 0 0 1 .093 1.027l-.093.009h-.972a.518.518 0 0 1-.093-1.027l.093-.009h.972Zm-11.992 0a.518.518 0 0 1 .093 1.027l-.093.009h-.972a.518.518 0 0 1-.093-1.027l.093-.009h.972ZM12.95 3.05c.177.177.199.45.066.651l-.066.081-.688.688a.518.518 0 0 1-.798-.651l.066-.081.688-.688a.518.518 0 0 1 .732 0ZM3.7 2.984l.081.066.688.688a.518.518 0 0 1-.651.798l-.081-.066-.688-.688a.518.518 0 0 1 .651-.798ZM8 1c.254 0 .466.183.51.425l.008.093v.972a.518.518 0 0 1-1.027.093l-.009-.093v-.972C7.482 1.232 7.714 1 8 1Z',
                }),
            }),
        s: true,
    },
])
const Swap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Swap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58946), __webpack_require__.b),
    },
])
const SwapColorful = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SwapColorful', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31827), __webpack_require__.b),
    },
])
const SwitchLogo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SwitchLogo', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(82869), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(21210), __webpack_require__.b),
    },
])
const TelegramRoundGray = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TelegramRoundGray', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(69557), __webpack_require__.b),
    },
])
const Tick = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Tick', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(14368), __webpack_require__.b),
    },
])
const Time = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Time', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(15593), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    id: 'Time_svg__base/time',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'Time_svg__Vector (Stroke)',
                            d: 'M10 3.166a6.833 6.833 0 1 0 0 13.667 6.833 6.833 0 0 0 0-13.667ZM1.834 9.999a8.167 8.167 0 1 1 16.333 0 8.167 8.167 0 0 1-16.334 0Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'Time_svg__Vector (Stroke)_2',
                            d: 'M10 5.233c.368 0 .667.298.667.666v4.125a.667.667 0 1 1-1.333 0V5.9c0-.368.298-.666.666-.666Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            id: 'Time_svg__Vector (Stroke)_3',
                            d: 'M9.423 9.69a.667.667 0 0 1 .91-.244l3.021 1.745a.667.667 0 0 1-.666 1.154l-3.021-1.744a.667.667 0 0 1-.244-.91Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Tips = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Tips', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(19986), __webpack_require__.b),
    },
])
const TransactionFailed = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TransactionFailed', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(96712), __webpack_require__.b),
    },
])
const Trash = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'Trash',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(41733), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 25 24',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M2.5 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M10.5 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1h-4Zm7 2V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1h-2a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1h-2Zm-11 2v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7h-12Z',
                            clipRule: 'evenodd',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            fill: 'currentColor',
                            fillRule: 'evenodd',
                            d: 'M10.5 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z',
                            clipRule: 'evenodd',
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [25, 24],
)
const TrashLine = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TrashLine', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75828), __webpack_require__.b),
    },
])
const Tutorial = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Tutorial', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8226), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M18.227 10.117v-2.44c.27-.285.284-.57.27-.732-.067-.637-.772-.895-1.002-.99-1.681-.636-4.799-1.897-6.52-2.602-1.044-.515-1.382-.42-2.399-.013-.271.108-4.758 1.775-6.492 2.494-.95.393-1.085.976-1.085 1.3 0 .543.38 1.03 1.071 1.316l2.074.84v5.449l.176.176c.081.081 1.938 1.952 5.34 1.952 3.186 0 5.002-1.884 5.083-1.966l.163-.176v-5.38l.772-.326-.027 1.111-.623 1.044 1.884 1.79 2.087-1.817-.772-1.03Zm-4.541 4.12A6.337 6.337 0 0 1 9.66 15.66c-2.358 0-3.808-1.03-4.296-1.423V9.791l3.063 1.247h.013c.976.366 1.722.34 2.657-.067l2.589-1.098v4.364Zm3.267-2.928-.38-.352.285-.474.054-2.169a.615.615 0 0 0-.176-.678.632.632 0 0 0-.773-.054L10.61 9.846c-.637.284-1.057.298-1.735.054l-6.33-2.575c-.162-.068-.257-.136-.298-.19.04-.04.136-.109.312-.19 1.735-.718 6.411-2.467 6.465-2.48h.014c.813-.326.813-.326 1.423-.014l.04.014c1.709.69 4.799 1.951 6.507 2.602v3.456l.339.448-.393.338Z',
                }),
            }),
        s: true,
    },
])
const Twitter = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Twitter', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40423), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M13.33 4.459a2.867 2.867 0 0 0 1.258-1.583 5.728 5.728 0 0 1-1.816.694 2.867 2.867 0 0 0-4.878 2.61 8.123 8.123 0 0 1-5.896-2.99 2.867 2.867 0 0 0 .886 3.82 2.85 2.85 0 0 1-1.296-.358v.036c0 1.362.96 2.535 2.296 2.805a2.867 2.867 0 0 1-1.292.05 2.867 2.867 0 0 0 2.672 1.986 5.74 5.74 0 0 1-3.553 1.225c-.228 0-.457-.013-.683-.04A8.099 8.099 0 0 0 5.414 14a8.085 8.085 0 0 0 8.13-8.51 5.812 5.812 0 0 0 1.429-1.482 5.72 5.72 0 0 1-1.643.45Z',
                }),
            }),
        s: true,
    },
])
const TwitterStroke = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'TwitterStroke',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(89279), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 21 20',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('g', {
                            clipPath: "url('#TwitterStroke_svg__twitter-stroke')",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                d: 'M12.664 2.113a4.4 4.4 0 0 1 4.575.898 8.416 8.416 0 0 0 2.043-1.057.667.667 0 0 1 1.033.703 7.101 7.101 0 0 1-1.674 3.127c.017.154.025.308.026.463v.002c0 5.025-2.416 8.696-5.875 10.537-3.441 1.832-7.848 1.815-11.782-.37a.667.667 0 0 1 .35-1.25 9.034 9.034 0 0 0 4.42-.957c-1.371-.793-2.336-1.75-2.992-2.785-.817-1.291-1.127-2.66-1.183-3.894-.056-1.232.14-2.342.346-3.14a10.736 10.736 0 0 1 .396-1.223l.03-.074.01-.02.002-.007.015-.032.596.299.546-.384a8.217 8.217 0 0 0 6.287 3.483V6.28a4.4 4.4 0 0 1 2.831-4.166ZM3.248 4.7l-.006.023a9.42 9.42 0 0 0-.305 2.746c.048 1.058.311 2.188.978 3.241.664 1.049 1.754 2.06 3.523 2.847a.667.667 0 0 1 .103 1.16 10.365 10.365 0 0 1-3.547 1.537c2.875.896 5.804.615 8.172-.645 3-1.597 5.167-4.8 5.168-9.358a3.178 3.178 0 0 0-.055-.568.666.666 0 0 1 .186-.6c.326-.321.61-.678.85-1.063a9.753 9.753 0 0 1-1.073.393.667.667 0 0 1-.695-.201 3.066 3.066 0 0 0-5.38 2.053v.843a.667.667 0 0 1-.65.666A9.55 9.55 0 0 1 3.248 4.7Z',
                                clipRule: 'evenodd',
                            }),
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('clipPath', {
                                id: 'TwitterStroke_svg__twitter-stroke',
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                                    fill: 'currentColor',
                                    d: 'M.5 0h20v20H.5z',
                                }),
                            }),
                        }),
                    ],
                }),
            s: true,
        },
    ],
    [21, 20],
)
const TxIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TxIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(52127), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.25',
                    d: 'M14 10v2.667A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V10m2.667-3.333L8 10l3.333-3.333M8 10V2',
                }),
            }),
        s: true,
    },
])
const TxOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TxOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27778), __webpack_require__.b),
    },
])
const Undo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Undo', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(53760), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        stroke: 'currentColor',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: '10',
                        strokeWidth: '1.6',
                        d: 'M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        stroke: 'currentColor',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '1.6',
                        d: 'M6.43 10.81 3.87 8.25l2.56-2.56',
                    }),
                ],
            }),
        s: true,
    },
])
const Upload = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Upload', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(41440), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M12.306 1.26A.8.8 0 0 1 12.8 2v6a.8.8 0 0 1-1.6 0V3.93l-.634.635a.8.8 0 0 1-1.131-1.131l2-2a.8.8 0 0 1 .871-.174Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M11.434 1.434a.8.8 0 0 1 1.132 0l2 2a.8.8 0 0 1-1.132 1.13l-2-2a.8.8 0 0 1 0-1.13ZM2.842 12.716c.731-1.058 2.083-1.517 4.158-1.517.552 0 .982.057 1.37.209.364.141.642.35.88.529l.03.022a.8.8 0 0 1 .104.094l1.01 1.078a2.198 2.198 0 0 0 3.202.001l.003-.002 1.02-1.08a.803.803 0 0 1 .101-.09l.03-.023c.239-.18.516-.388.88-.53.388-.15.818-.208 1.37-.208 2.076 0 3.427.459 4.158 1.517.35.505.502 1.075.573 1.622.07.53.07 1.101.07 1.633v1.028c0 1.451-.259 2.928-1.185 4.046-.951 1.148-2.468 1.754-4.616 1.754H8c-2.576 0-4.177-.57-5.033-1.81-.412-.596-.595-1.274-.682-1.94-.085-.65-.085-1.352-.085-2.02V15.97c0-.532 0-1.102.07-1.633.07-.547.223-1.117.572-1.622Zm1.014 1.83c-.055.417-.056.888-.056 1.453v1c0 .703.001 1.306.072 1.842.069.53.198.93.411 1.239.395.57 1.293 1.12 3.717 1.12h8c1.852 0 2.836-.514 3.384-1.176.574-.693.816-1.716.816-3.025v-1c0-.565-.001-1.036-.056-1.454-.053-.41-.151-.702-.302-.92-.269-.39-.917-.826-2.842-.826-.448 0-.658.048-.79.1-.131.05-.24.124-.475.3l-.97 1.027-.002.001a3.799 3.799 0 0 1-5.534.002l-.003-.003-.962-1.029c-.235-.175-.343-.247-.474-.299-.132-.05-.342-.099-.79-.099-1.924 0-2.573.437-2.842.826-.15.218-.249.51-.302.92Z',
                        clipRule: 'evenodd',
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        d: 'M8.797 5.961a.8.8 0 0 1-.72.874c-1.355.13-1.796.54-1.996.915-.261.49-.28 1.179-.28 2.248v2a.8.8 0 1 1-1.6 0V9.894c-.001-.92-.002-2.015.469-2.897.55-1.03 1.609-1.596 3.253-1.755a.8.8 0 0 1 .874.72Zm6.407 0a.8.8 0 0 1 .873-.719c1.645.159 2.704.725 3.254 1.755.47.882.47 1.977.47 2.897v2.104a.8.8 0 1 1-1.6 0v-2c0-1.07-.02-1.759-.282-2.248-.2-.375-.64-.784-1.996-.915a.8.8 0 0 1-.719-.874Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const USD = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('USD', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(80987), __webpack_require__.b),
    },
])
const User = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('User', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(27980), __webpack_require__.b),
    },
])
const Verification = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Verification', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60398), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        d: 'M10.705 1.603A1.699 1.699 0 0 1 12 1a1.691 1.691 0 0 1 1.295.603l.816.968a1.695 1.695 0 0 0 1.698.555l1.229-.302a1.7 1.7 0 0 1 2.095 1.53l.094 1.265a1.705 1.705 0 0 0 1.05 1.45l1.168.48c.97.4 1.353 1.58.8 2.476l-.665 1.079a1.71 1.71 0 0 0 0 1.793l.666 1.08c.552.895.17 2.074-.8 2.472l-1.17.483a1.703 1.703 0 0 0-1.05 1.45l-.093 1.265a1.712 1.712 0 0 1-.695 1.252 1.695 1.695 0 0 1-1.4.277l-1.229-.302a1.69 1.69 0 0 0-1.697.555l-.817.968A1.699 1.699 0 0 1 12 23a1.691 1.691 0 0 1-1.295-.603l-.816-.968a1.698 1.698 0 0 0-1.698-.555l-1.229.302a1.7 1.7 0 0 1-2.095-1.53l-.094-1.265a1.71 1.71 0 0 0-1.05-1.45l-1.168-.482a1.706 1.706 0 0 1-.8-2.472l.665-1.08a1.71 1.71 0 0 0 0-1.793l-.665-1.08a1.71 1.71 0 0 1 .8-2.473l1.17-.481a1.707 1.707 0 0 0 1.05-1.451l.092-1.266a1.71 1.71 0 0 1 .695-1.252 1.694 1.694 0 0 1 1.4-.277l1.229.302a1.694 1.694 0 0 0 1.698-.555l.816-.968Z',
                        style: {
                            '--default-color': '#1C68F3',
                            fill: 'var(--icon-color, var(--default-color, currentColor))',
                        },
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: '#fff',
                        fillRule: 'evenodd',
                        d: 'M17.698 8.776a.75.75 0 0 1 0 1.06l-6.867 6.866a.75.75 0 0 1-1.06 0l-3.21-3.209a.75.75 0 1 1 1.061-1.06l2.679 2.678 6.336-6.335a.75.75 0 0 1 1.06 0Z',
                        clipRule: 'evenodd',
                    }),
                ],
            }),
        s: true,
    },
])
const Wallet = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Wallet', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37270), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6.2 11.15a.8.8 0 0 1 .8-.8h6a.8.8 0 0 1 0 1.6H7a.8.8 0 0 1-.8-.8Zm-.51-7.51A2.887 2.887 0 0 0 2.8 6.53v4.62a.8.8 0 0 1-1.6 0V6.53a4.487 4.487 0 0 1 4.49-4.49h5.62c1.182 0 2.298.367 3.131 1.082.845.724 1.36 1.774 1.36 3.027a.8.8 0 0 1-1.6 0c0-.787-.311-1.392-.802-1.813-.501-.43-1.23-.697-2.089-.697H5.69Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M6 6.95a3.199 3.199 0 0 0-3.2 3.2v7a3.2 3.2 0 0 0 3.2 3.2h10a3.2 3.2 0 0 0 3.2-3.2v-.65h-.13c-1.254 0-2.542-.772-2.902-2.113l-.002-.004a2.813 2.813 0 0 1 .75-2.751 2.793 2.793 0 0 1 2.004-.832h.28v-.65c0-1.759-1.442-3.2-3.2-3.2H6Zm-4.8 3.2c0-2.652 2.148-4.8 4.8-4.8h10c2.642 0 4.8 2.158 4.8 4.8v1.45a.8.8 0 0 1-.8.8h-1.08a1.193 1.193 0 0 0-.886.377 1.214 1.214 0 0 0-.32 1.197c.14.518.691.926 1.356.926H20a.8.8 0 0 1 .8.8v1.45a4.8 4.8 0 0 1-4.8 4.8H6a4.799 4.799 0 0 1-4.8-4.8v-7Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M18.92 12.399c-.345 0-.648.134-.866.358l-.015.014c-.256.25-.398.605-.362.982v.01c.051.605.636 1.136 1.363 1.136h1.93c.134 0 .23-.107.23-.22v-2.06a.227.227 0 0 0-.23-.22h-2.05Zm-2.006-.765a2.793 2.793 0 0 1 2.006-.835h2.05c1.007 0 1.83.813 1.83 1.82v2.06c0 1.007-.823 1.82-1.83 1.82h-1.93c-1.431 0-2.824-1.047-2.956-2.599a2.808 2.808 0 0 1 .83-2.267Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const WalletNav = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WalletNav', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82930), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M17.77 9.873h3.484c.412 0 .746.326.746.728v2.53a.746.746 0 0 1-.746.729h-3.405c-.994.013-1.863-.651-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.092 2.092 0 0 1 1.576-.74Zm.15 2.66h.33a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.745h-.33a.766.766 0 0 0-.54.213.728.728 0 0 0-.224.524c0 .413.341.749.765.754Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M22 8.382h-4.231v.034c-1.964 0-3.556 1.552-3.556 3.467s1.592 3.467 3.556 3.467H22v.312C22 19.015 19.964 21 16.516 21H7.484C4.036 21 2 19.015 2 15.662V8.338C2 4.985 4.036 3 7.484 3h9.032C19.964 3 22 4.985 22 8.382Zm-15.262 0h5.644a.755.755 0 0 0 .765-.746.755.755 0 0 0-.764-.745H6.738a.755.755 0 0 0-.764.736c0 .413.34.75.764.754Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const WalletSetting = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WalletSetting', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(66251), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('g', {
                    fill: 'currentColor',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'm18.46 9.279-3.62-6.274a1.458 1.458 0 0 0-1.26-.726H6.42c-.568 0-1.1.306-1.382.799l-3.582 6.2c-.26.45-.26 1.006 0 1.454l3.62 6.271c.26.45.74.727 1.26.727h7.243c.517 0 1-.28 1.26-.727l3.62-6.271a1.461 1.461 0 0 0 0-1.453Zm-1.185.77-3.621 6.27a.086.086 0 0 1-.074.044H6.337a.084.084 0 0 1-.074-.043l-3.62-6.272a.085.085 0 0 1 0-.086l3.58-6.199a.232.232 0 0 1 .198-.115h7.159c.03 0 .058.015.074.043l3.62 6.271a.085.085 0 0 1 0 .086Z',
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                            d: 'M9.959 7.04a2.968 2.968 0 0 0-2.965 2.964A2.968 2.968 0 0 0 9.96 12.97a2.967 2.967 0 0 0 2.965-2.963A2.97 2.97 0 0 0 9.959 7.04Zm0 4.564a1.6 1.6 0 0 1-1.598-1.598A1.6 1.6 0 0 1 9.96 8.41a1.6 1.6 0 0 1 1.598 1.597 1.6 1.6 0 0 1-1.598 1.598Z',
                        }),
                    ],
                }),
            }),
        s: true,
    },
])
const Warning = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Warning', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43440), __webpack_require__.b),
    },
])
const WarningTriangle = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WarningTriangle', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82802), __webpack_require__.b),
    },
])
const Web = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Web', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(30672), __webpack_require__.b),
    },
])
const WebBlack = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('WebBlack', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(22274), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(89302), __webpack_require__.b),
    },
])
const MenuPersonas = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuPersonas', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51245), __webpack_require__.b),
    },
])
const MenuPersonasActive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuPersonasActive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78973), __webpack_require__.b),
    },
])
const MenuSettings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuSettings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(87361), __webpack_require__.b),
    },
])
const MenuSettingsActive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuSettingsActive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99714), __webpack_require__.b),
    },
])
const MenuWallets = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuWallets', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18787), __webpack_require__.b),
    },
])
const MenuWalletsActive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MenuWalletsActive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65718), __webpack_require__.b),
    },
])
const Approval = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Approval', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(63443), __webpack_require__.b),
    },
])
const ArtBlocks = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ArtBlocks', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92869), __webpack_require__.b),
    },
])
const Avatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Avatar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(20840), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 20 20',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M7.413 2.721c1.191-.96 2.814-1.23 4.293-.95 1.346.322 2.551 1.228 3.204 2.453.453.805.593 1.738.599 2.65l-.001 7.089c-.04.308.204.528.359.764.735 1.054 1.078 2.332 1.139 3.605-.442.002-.884.001-1.326 0-.067-.822-.212-1.644-.597-2.382-1.206-.006-2.41.02-3.617.008-.007-.895-.003-1.79-.005-2.686-1.028-.24-2.115-.061-3.081.338-1.846.778-3.096 2.727-3.089 4.723H4c-.061-1.578.593-3.132 1.626-4.307.145-.137.093-.352.108-.53-.013-1.811.008-3.624-.01-5.436-.045-.902-.017-1.806.024-2.708.108-1.08.77-2.041 1.666-2.63Zm4.23.365c.148.42.554.684.715 1.102.504.938.361 2.023.378 3.044.008 2.481.006 4.962.007 7.443.495.001.99.004 1.486-.006-.004-2.598-.003-5.198 0-7.796-.006-.627-.069-1.273-.349-1.845-.414-.933-1.265-1.646-2.238-1.942Zm-3.712.848c-.653.427-.977 1.227-.952 1.99 1.498.015 2.994.005 4.492.006.053-.995-.59-2.006-1.576-2.261-.656-.233-1.369-.046-1.964.265Zm-.913 3.268c-.007.533.012 1.093.293 1.564.418.793 1.285 1.28 2.172 1.306v1.27a3.986 3.986 0 0 1-2.493-.973c.013.825 0 1.651.01 2.478a6.488 6.488 0 0 1 4.465-.941c-.008-1.568-.001-3.136-.005-4.704H7.018Z',
                }),
            }),
        s: true,
    },
])
const Bit = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Bit', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43728), __webpack_require__.b),
    },
])
const Calendar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Calendar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(54711), __webpack_require__.b),
    },
])
const Collectibles = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Collectibles', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40062), __webpack_require__.b),
    },
])
const CrossBridge = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CrossBridge', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40852), __webpack_require__.b),
    },
])
const DecentralizedSearch = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DecentralizedSearch', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77739), __webpack_require__.b),
    },
])
const ENS = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ENS', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31337), __webpack_require__.b),
    },
])
const ENSCover = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ENSCover', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64948), __webpack_require__.b),
    },
])
const FileService = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FileService', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60184), __webpack_require__.b),
    },
])
const FindTruman = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('FindTruman', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6466), __webpack_require__.b),
    },
])
const Gitcoin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Gitcoin', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(77213), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(73808), __webpack_require__.b),
    },
])
const GoodGhosting = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GoodGhosting', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(10922), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(77986), __webpack_require__.b),
    },
])
const Markets = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Markets', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(75035), __webpack_require__.b),
    },
])
const MarketsClaim = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MarketsClaim', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(78674), __webpack_require__.b),
    },
])
const MaskBox = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('MaskBox', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43785), __webpack_require__.b),
    },
])
const NFTAvatar = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NFTAvatar', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(32649), __webpack_require__.b),
    },
])
const PoolTogether = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('PoolTogether', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(28233), __webpack_require__.b),
    },
])
const Savings = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Savings', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50426), __webpack_require__.b),
    },
])
const ScamSniffer = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ScamSniffer', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1263), __webpack_require__.b),
    },
])
const SecurityChecker = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SecurityChecker', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(92346), __webpack_require__.b),
    },
])
const SettingInfo = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingInfo', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(51221), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(80959), __webpack_require__.b),
    },
])
const Shared = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('shared', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(85751), __webpack_require__.b),
    },
])
const Snapshot = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Snapshot', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43311), __webpack_require__.b),
    },
])
const SpaceId = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SpaceId', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(18836), __webpack_require__.b),
    },
])
const TipCoin = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TipCoin', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65442), __webpack_require__.b),
    },
])
const Transak = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Transak', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(81679), __webpack_require__.b),
    },
])
const Unstoppable = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Unstoppable', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3450), __webpack_require__.b),
    },
])
const Valuables = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Valuables', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(1915), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(15905), __webpack_require__.b),
    },
])
const Web3Profile = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Web3Profile', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50690), __webpack_require__.b),
    },
])
const Web3ProfileCard = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Web3ProfileCard', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71852), __webpack_require__.b),
    },
])
const AchievementBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('AchievementBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(23862), __webpack_require__.b),
    },
])
const AchievementReceive = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('AchievementReceive', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(68560), __webpack_require__.b),
    },
])
const ApprovalApprove = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ApprovalApprove', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(99123), __webpack_require__.b),
    },
])
const CollectibleApprove = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleApprove', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(49806), __webpack_require__.b),
    },
])
const CollectibleBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82735), __webpack_require__.b),
    },
])
const CollectibleIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17794), __webpack_require__.b),
    },
])
const CollectibleMint = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleMint', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(1597), __webpack_require__.b),
    },
])
const CollectibleOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CollectibleOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(40063), __webpack_require__.b),
    },
])
const DonationDonate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DonationDonate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(8223), __webpack_require__.b),
    },
])
const DonationLaunch = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('DonationLaunch', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64223), __webpack_require__.b),
    },
])
const Follow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Follow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51495), __webpack_require__.b),
    },
])
const GovernancePropose = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GovernancePropose', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(50821), __webpack_require__.b),
    },
])
const GovernanceVote = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('GovernanceVote', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(21930), __webpack_require__.b),
    },
])
const NoteBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(58407), __webpack_require__.b),
    },
])
const NoteCreate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteCreate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(85496), __webpack_require__.b),
    },
])
const NoteEdit = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteEdit', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(84889), __webpack_require__.b),
    },
])
const NoteLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(7901), __webpack_require__.b),
    },
])
const NoteMint = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('NoteMint', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(59790), __webpack_require__.b),
    },
])
const ProfileBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64486), __webpack_require__.b),
    },
])
const ProfileCreate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileCreate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(21586), __webpack_require__.b),
    },
])
const ProfileLink = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileLink', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(5026), __webpack_require__.b),
    },
])
const ProfileProxy = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileProxy', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(77340), __webpack_require__.b),
    },
])
const ProfileUpdate = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('ProfileUpdate', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(90135), __webpack_require__.b),
    },
])
const RSS3Link = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)(
    'RSS3Link',
    [
        {
            u: () => new URL(/* asset import */ __webpack_require__(78637), __webpack_require__.b),
            j: () =>
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 9 2',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                        fill: 'currentColor',
                        d: 'M.848 1.872a.83.83 0 0 1-.608-.256A.879.879 0 0 1 0 .992C0 .747.08.544.24.384A.83.83 0 0 1 .848.128a.83.83 0 0 1 .608.256.8.8 0 0 1 .256.608.85.85 0 0 1-.256.624.83.83 0 0 1-.608.256Zm3.391 0a.83.83 0 0 1-.608-.256.879.879 0 0 1-.24-.624c0-.245.08-.448.24-.608a.83.83 0 0 1 .608-.256.83.83 0 0 1 .608.256.8.8 0 0 1 .256.608.85.85 0 0 1-.256.624.83.83 0 0 1-.608.256Zm3.391 0a.83.83 0 0 1-.609-.256.879.879 0 0 1-.24-.624c0-.245.08-.448.24-.608A.83.83 0 0 1 7.63.128a.83.83 0 0 1 .608.256.8.8 0 0 1 .256.608.85.85 0 0 1-.256.624.83.83 0 0 1-.608.256Z',
                    }),
                }),
            s: true,
        },
    ],
    [9, 2],
)
const TokenBridge = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenBridge', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(86320), __webpack_require__.b),
    },
])
const TokenBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37968), __webpack_require__.b),
    },
])
const TokenIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(51678), __webpack_require__.b),
    },
])
const TokenLiquidity = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenLiquidity', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(82157), __webpack_require__.b),
    },
])
const TokenMint = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenMint', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(6172), __webpack_require__.b),
    },
])
const TokenOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(14767), __webpack_require__.b),
    },
])
const TokenStake = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenStake', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(44186), __webpack_require__.b),
    },
])
const TokenSwap = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenSwap', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(65649), __webpack_require__.b),
    },
])
const TokenUnstake = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('TokenUnstake', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(3474), __webpack_require__.b),
    },
])
const Unfollow = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Unfollow', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(43771), __webpack_require__.b),
    },
])
const UnknownBurn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownBurn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(9509), __webpack_require__.b),
    },
])
const UnknownCancel = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownCancel', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(28638), __webpack_require__.b),
    },
])
const UnknownIn = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownIn', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(60520), __webpack_require__.b),
    },
])
const UnknownOut = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UnknownOut', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(37471), __webpack_require__.b),
    },
])
const CN = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('CN', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(42333), __webpack_require__.b),
    },
])
const Email = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('Email', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(17555), __webpack_require__.b),
        j: () =>
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M16.192 14.725c1.238.944 2.07 1.14 2.597.905.346-.156.595-.521.74-.925a8.002 8.002 0 0 0-3.53-9.633A8 8 0 1 0 12.015 20l.006 2A9.957 9.957 0 0 1 7 20.66C2.22 17.897.58 11.781 3.341 7a10 10 0 0 1 18.07 8.383 4.033 4.033 0 0 1-.471.925c-.337.494-.775.895-1.332 1.145-1.327.595-2.945.19-4.83-1.297a5 5 0 1 1 1.414-1.432ZM12.001 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
                }),
            }),
        s: true,
    },
])
const JP = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('JP', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(71381), __webpack_require__.b),
    },
])
const KR = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('KR', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(31731), __webpack_require__.b),
    },
])
const SettingsAppearance = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsAppearance', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(34621), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(95605), __webpack_require__.b),
    },
])
const SettingsBackup = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsBackup', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(52878), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(39691), __webpack_require__.b),
    },
])
const SettingsEmail = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsEmail', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(5960), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(61968), __webpack_require__.b),
    },
])
const SettingsLanguage = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsLanguage', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(99024), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(58220), __webpack_require__.b),
    },
])
const SettingsPassword = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsPassword', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(28862), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(59067), __webpack_require__.b),
    },
])
const SettingsPhone = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsPhone', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(59165), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(5537), __webpack_require__.b),
    },
])
const SettingsRestore = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsRestore', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(61330), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(50485), __webpack_require__.b),
    },
])
const SettingsSync = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('SettingsSync', [
    {
        c: ['dark'],
        u: () => new URL(/* asset import */ __webpack_require__(33561), __webpack_require__.b),
    },
    {
        c: ['light'],
        u: () => new URL(/* asset import */ __webpack_require__(46832), __webpack_require__.b),
    },
])
const UK = /*#__PURE__*/ (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_1__/* .__createIcon */ .x)('UK', [
    {
        u: () => new URL(/* asset import */ __webpack_require__(64311), __webpack_require__.b),
    },
])


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The deferred module cache
/******/ 	var __webpack_module_deferred_exports__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: __webpack_module_deferred_exports__[moduleId] || {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 		// delete __webpack_module_deferred_exports__[module];
/******/ 		// skipped because strictModuleErrorHandling is not enabled.
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload function */
/******/ 	(() => {
/******/ 		__webpack_require__.H = {};
/******/ 		__webpack_require__.G = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.H).map((key) => {
/******/ 				__webpack_require__.H[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 4049) return "bundled/npm.qrcode-generator.js";
/******/ 			if (chunkId === 2752) return "bundled/npm.react-window.js";
/******/ 			if (chunkId === 5333) return "bundled/5333.js";
/******/ 			if (chunkId === 3638) return "bundled/npm.anchorme.js";
/******/ 			if (chunkId === 6565) return "bundled/npm.qrcode.js";
/******/ 			if (chunkId === 6316) return "bundled/npm-ns.msgpack.msgpack.js";
/******/ 			if (chunkId === 8117) return "bundled/npm.protobufjs.js";
/******/ 			if (chunkId === 6220) return "bundled/6220.js";
/******/ 			// return url for filenames based on template
/******/ 			return "bundled/chunk." + ({"598":"npm.react-markdown","1006":"npm.ipfs-unixfs","1014":"npm.parse5","1440":"npm.validator","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1696":"npm.jsbi","1883":"npm-ns.scamsniffer.detector","2135":"npm.bloom-filters","2162":"npm.z-schema","2284":"npm.mdast-util-to-hast","2538":"npm.parse-domain","2757":"npm.quill-delta-to-html","2939":"npm-ns.uniswap.v3-sdk","3513":"npm.micromark","3526":"npm-ns.uniswap.v3-staker","3850":"npm.arweave","4038":"npm.cborg","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4548":"npm.vfile","4590":"npm-ns.uniswap.sdk-core","5215":"npm.xxhashjs","5643":"npm.cuint","5655":"npm.ipfs-core-utils","5678":"npm.d3-voronoi","5715":"npm.micromark-core-commonmark","5784":"npm.big.js","5787":"npm.warp-contracts","6572":"npm-ns.uniswap.swap-router-contracts","6601":"npm.linkifyjs","7015":"npm.d3-transition","7100":"npm-ns.multiformats.multiaddr","7174":"npm.mdast-util-from-markdown","7372":"npm.ipfs-http-client","7525":"npm-ns.streamparser.json","7531":"npm.d3-selection","7696":"npm.color-convert","7913":"npm.lodash","8132":"npm.seedrandom","8370":"npm.dompurify","8393":"npm.lodash.get","8685":"npm.long","8787":"npm.property-information","9197":"npm.decimal.js-light","9858":"npm.merkletreejs"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var dynamicImportLoader = (url, done, chunkId) => {
/******/ 			import(url).then(() => done(), (e) => {
/******/ 				console.warn('jsonp chunk loader failed to use dynamic import.', e)
/******/ 				fallbackLoader(url, done, chunkId)
/******/ 			})
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (typeof location === 'object' && location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
/******/ 		var fallbackLoader = __webpack_require__.l
/******/ 		__webpack_require__.l = dynamicImportLoader
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make deferred namespace object */
/******/ 	(() => {
/******/ 		__webpack_require__.z = (moduleId, mode) => {
/******/ 			// mode: 0 => namespace (esm)
/******/ 			// mode: 1 => default-only (esm strict cjs)
/******/ 			// mode: 2 => default-with-named (esm-cjs compat)
/******/ 			// mode: 3 => dynamic (if exports has __esModule, then esm, otherwise default-with-named)
/******/ 		
/******/ 			var cachedModule = __webpack_module_cache__[moduleId];
/******/ 			// optimization not applied when output.strictModuleErrorHandling is off
/******/ 		
/******/ 			if (mode == 1) {
/******/ 				var ns = { __proto__: null };
/******/ 				__webpack_require__.r(ns);
/******/ 				__webpack_require__.d(ns, {
/******/ 					"default": () => (__webpack_require__(moduleId))
/******/ 				});
/******/ 				return ns;
/******/ 			}
/******/ 		
/******/ 			var init = () => {
/******/ 				ns = __webpack_require__(moduleId);
/******/ 				if (__webpack_require__.aE in ns) ns = ns[__webpack_require__.aE];
/******/ 				init = null;
/******/ 				if (mode == 3) {
/******/ 					if (ns.__esModule) mode = 0;
/******/ 					else mode = 2;
/******/ 				}
/******/ 				if (mode) return ns;
/******/ 				delete handler.defineProperty;
/******/ 				delete handler.deleteProperty;
/******/ 				delete handler.set;
/******/ 				delete handler.get;
/******/ 				delete handler.has;
/******/ 				delete handler.ownKeys;
/******/ 				delete handler.getOwnPropertyDescriptor;
/******/ 				return ns;
/******/ 			};
/******/ 		
/******/ 			ns = cachedModule && cachedModule.exports || __webpack_module_deferred_exports__[moduleId] || (__webpack_module_deferred_exports__[moduleId] = { __proto__: null });
/******/ 			var handler = {
/******/ 				__proto__: null,
/******/ 				get: (_, name) => {
/******/ 					switch (name) {
/******/ 						case "__esModule": return true;
/******/ 						case Symbol.toStringTag: return "Module";
/******/ 					}
/******/ 					init?.();
/******/ 					// possible mode: 0, 2
/******/ 					// for mode 2, ns.default is re-evaluated every time to reflect the latest module.exports value.
/******/ 					// for the rest, we access the initial namespace object to keep esm semantics (export list is static).
/******/ 					if (mode == 0 || !__webpack_require__.o(ns, "default")) return ns[name];
/******/ 					return __webpack_require__(moduleId);
/******/ 				},
/******/ 				has: (_, name) => {
/******/ 					switch (name) {
/******/ 						case "__esModule":
/******/ 						case Symbol.toStringTag:
/******/ 						case __webpack_require__.zS:
/******/ 							return true;
/******/ 					}
/******/ 					if (init) init();
/******/ 					return name in ns;
/******/ 				},
/******/ 				ownKeys: () => {
/******/ 					if (init) init();
/******/ 					return Reflect.ownKeys(ns);
/******/ 				},
/******/ 				getOwnPropertyDescriptor: (_, name) => {
/******/ 					switch (name) {
/******/ 						case "__esModule": return { value: true, configurable: !!mode };
/******/ 						case Symbol.toStringTag: return { value: "Module", configurable: !!mode };
/******/ 					}
/******/ 					if (init) init();
/******/ 					var desc = Reflect.getOwnPropertyDescriptor(ns, name);
/******/ 					if (mode == 2 && name == "default" && !desc) {
/******/ 						desc = { value: ns, configurable: true };
/******/ 					}
/******/ 					return desc;
/******/ 				},
/******/ 				defineProperty: (_, name) => {
/******/ 					if (init) init();
/******/ 					return Reflect.defineProperty(ns, name);
/******/ 				},
/******/ 				deleteProperty: () => (false),
/******/ 				set: () => (false),
/******/ 			}
/******/ 			return new Proxy(ns, handler);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 964;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "assets/" + wasmModuleHash + ".wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			964: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		__webpack_require__.H.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				link.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "preload";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"8813": [
/******/ 				6949,
/******/ 				8929
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.preload = (chunkId) => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.G);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,8672,8136,9742,9759,2222,4454,6949,9141,2698,2486,1555,3453,4586,5105,5178,8145,3294,5313,12,187,2598,3147,3742,3693,5756,7849,2735,5132,2619,5737,2624,7425,2780,5838,5336,9239,9749,6077,551,3959,3846,9227,3409,5951,5687,686,8129,2093,237,2305,7512,9744,2912,444,1432,2299,6160,9262,4544,5891,3617,9278,7765,5229,211,1947,3883,9313,4960,253,9566,1305,9517,572,9834,4570,8712,3981,5553,2088,1183,3177,1020,5464,3832,5717,516,1377,9527,9223,2974,5058,5597,7822,6067,6904,79,7856,2118,4557,234,9536,708,2891,4029,4918,8547,3619,1528,9447,6230,9831,1216,2128,4162,9131,5598,6751,6060,5438,486,4305,3493,324,3271,5801,8304], () => (__webpack_require__(52842)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popups.js.map