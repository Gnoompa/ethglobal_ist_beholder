"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8757],{

/***/ 53218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a1: () => (/* binding */ encodeByNetwork)
/* harmony export */ });
/* unused harmony export decodeByNetwork */
/* harmony import */ var _payload_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83159);
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80129);
/* harmony import */ var _twitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52668);



function decodeByNetwork(network, content) {
    if (network === EncryptPayloadNetwork.Twitter) {
        return TwitterDecoder(content).map((x)=>[
                x
            ]).unwrapOr([]);
    }
    const possiblePayload = content.match(/(\u{1F3BC}[\w+/=|]+:\|\|)/giu) || [];
    const result = [];
    for (const payload of possiblePayload){
        const decoded = sharedDecoder(payload);
        if (decoded.isSome()) result.push(decoded.value);
        else result.push(payload);
    }
    return result;
}
function encodeByNetwork(network, content) {
    // v38
    if (typeof content === 'string') {
        if (network === _payload_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EncryptPayloadNetwork */ .FL.Twitter) return (0,_twitter_js__WEBPACK_IMPORTED_MODULE_1__/* .__TwitterEncoder */ .E)(content);
        return content;
    }
    // v37
    if (network === _payload_types_js__WEBPACK_IMPORTED_MODULE_0__/* .EncryptPayloadNetwork */ .FL.Twitter) return (0,_twitter_js__WEBPACK_IMPORTED_MODULE_1__/* .__TwitterEncoder */ .E)(content);
    return (0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .sharedEncoder */ .m)(content);
}



/***/ }),

/***/ 80129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ sharedEncoder)
/* harmony export */ });
/* unused harmony export sharedDecoder */
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76089);


/** @internal */ function sharedEncoder(input) {
    return `\u{1F3BC}6/8|${(0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(input)}:||`;
}
/** @internal */ function sharedDecoder(input) {
    const [[, payload] = []] = input.matchAll(/\u{1F3BC}6\/8\|([\w+/=]+):\|\|/giu);
    if (!payload) return None;
    try {
        return Some(new Uint8Array(decodeArrayBuffer(payload)));
    } catch  {
        return None;
    }
}


/***/ }),

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

/***/ 67101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nb: () => (/* binding */ formatPersonaFingerprint),
/* harmony export */   ck: () => (/* binding */ isSameProfile),
/* harmony export */   j1: () => (/* binding */ isSamePersona)
/* harmony export */ });
/* unused harmony exports MAX_PERSONA_LIMIT, MAX_PERSONA_NAME_LENGTH, formatPersonaName */
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

/***/ 68156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ CollectibleItem),
/* harmony export */   X: () => (/* binding */ CollectibleItemSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60625);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27966);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42097);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63623);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40346);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65327);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94715);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _CollectibleCard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92763);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8311);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, _, refs)=>({
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            overflow: 'visible',
            zIndex: 0,
            willChange: 'opacity'
        },
        withAction: {
            '&:hover': {
                transform: 'translateY(19px)',
                transitionDuration: '150ms',
                [`.${refs.action}`]: {
                    marginTop: 8,
                    opacity: 1
                },
                [`.${refs.collectibleCard}`]: {
                    transform: 'translateY(-38px)'
                },
                [`.${refs.info}`]: {
                    transform: 'translateY(-38px)'
                }
            }
        },
        ease: {
            transition: 'all 300ms ease'
        },
        fadeIn: {
            '@keyframes fade-in': {
                '0%': {
                    opacity: 0
                }
            },
            animation: 'fade-in 500ms ease-in-out',
            '@media (prefers-reduced-motion: reduce)': {
                animation: 'none'
            }
        },
        collectibleCard: {
            width: '100%',
            aspectRatio: '1/1'
        },
        info: {
            padding: 6,
            overflow: 'auto',
            boxSizing: 'border-box',
            width: '100%'
        },
        nameRow: {
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto'
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: theme.spacing(2),
            minHeight: theme.spacing(2),
            color: theme.palette.maskColor.second
        },
        identity: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: theme.spacing(2),
            minHeight: theme.spacing(2),
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        action: {
            width: '100%',
            padding: theme.spacing(0, 1),
            boxSizing: 'border-box',
            textAlign: 'center',
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 6
        },
        actionButton: {
            borderRadius: 28,
            backgroundColor: theme.palette.maskColor.primary,
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.palette.maskColor.primary
            }
        }
    }));
/** @default true */ const CollectibleItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { className, asset, pluginID, disableNetworkIcon, disableName, disableAction = true, actionLabel, verifiedBy = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP, onActionClick, onItemClick, isSelected, showUnCheckedIndicator, ...rest } = props;
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    const { classes, cx } = useStyles();
    const name = asset.collection?.name ?? '';
    const popperProps = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useBoundedPopperProps */ .g)();
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onItemClick?.(asset);
    }, [
        onItemClick,
        asset
    ]);
    const assetName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!asset.collection) return;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .isLensCollect */ .C)(asset.collection.name)) return asset.metadata?.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .isLensFollower */ .a)(asset.collection.name)) return asset.collection.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isLens */ .s)(asset.metadata?.name)) return asset.metadata?.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isXnsContractAddress */ .ob)(asset.address)) return asset.metadata?.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isENSContractAddress */ .o2)(asset.address) || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isENSNameWrapperContractAddress */ .FY)(asset.address)) return asset.metadata?.name;
        if (disableName && asset.tokenId) return `#${asset.tokenId}`;
        return asset.metadata?.name || (asset.tokenId ? `#${asset.tokenId}` : '') || asset.collection.name;
    }, [
        asset,
        disableName
    ]);
    const [nameOverflow, nameRef] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .useDetectOverflow */ .s)();
    const [identityOverflow, identityRef] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .useDetectOverflow */ .s)();
    const tooltip = nameOverflow || identityOverflow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        component: "div",
        children: [
            disableName ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: name
            }),
            assetName
        ]
    }) : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ShadowRootTooltip */ .p, {
        PopperProps: popperProps,
        title: tooltip,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: cx(classes.card, classes.fadeIn, className, disableAction ? null : classes.withAction),
            ...rest,
            ref: ref,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollectibleCard_js__WEBPACK_IMPORTED_MODULE_13__/* .CollectibleCard */ .Z, {
                    className: cx(classes.collectibleCard, classes.ease),
                    pluginID: pluginID,
                    asset: asset,
                    disableNetworkIcon: disableNetworkIcon,
                    onClick: handleClick,
                    isSelected: isSelected,
                    showUnCheckedIndicator: showUnCheckedIndicator
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: cx(classes.info, classes.ease),
                    children: [
                        disableName ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classes.nameRow,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    ref: nameRef,
                                    className: classes.name,
                                    variant: "body2",
                                    children: name || assetName
                                }),
                                verifiedBy.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ShadowRootTooltip */ .p, {
                                    title: t.verified_by({
                                        marketplace: verifiedBy.join(', ')
                                    }),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_14__.Verification, {
                                        size: 16
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            ref: identityRef,
                            className: classes.identity,
                            variant: "body2",
                            component: "div",
                            children: assetName
                        })
                    ]
                }),
                disableAction ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: cx(classes.action, classes.ease),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        fullWidth: true,
                        variant: "text",
                        className: classes.actionButton,
                        size: "small",
                        onClick: ()=>onActionClick?.(asset),
                        children: actionLabel
                    })
                })
            ]
        })
    });
}));
CollectibleItem.displayName = 'collectibleItem';
const CollectibleItemSkeleton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function CollectibleItemSkeleton({ className, omitInfo, omitName, ...rest }, ref) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: cx(classes.card, className),
        ...rest,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.collectibleCard,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    animation: "wave",
                    variant: "rectangular",
                    sx: {
                        borderRadius: '8px'
                    },
                    height: "100%"
                })
            }),
            omitInfo ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.info,
                children: [
                    omitName ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.name,
                        variant: "body2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            animation: "wave",
                            variant: "text",
                            width: "80%"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.identity,
                        variant: "body2",
                        component: "div",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            animation: "wave",
                            variant: "text",
                            width: '40%'
                        })
                    })
                ]
            })
        ]
    });
}));


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

/***/ 79399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24002);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50139);




react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .i18NextInstance */ .BV);
const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .I18nextProvider */ .a3;
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

/***/ 30018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ PersonaSelectPanel)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var helpers_personas = __webpack_require__(67101);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/index.ts
var NextID = __webpack_require__(3765);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useAllPersonas.ts
var useAllPersonas = __webpack_require__(81178);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/useConnectedPersonas.ts






function useConnectedPersonas() {
    const personasInDB = (0,useAllPersonas/* useAllPersonas */.T)();
    const result = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'connected-persona',
            personasInDB
        ],
        queryFn: async ()=>{
            const allPersonaPublicKeys = personasInDB.map((x)=>x.identifier.publicKeyAsHex);
            const allPersonaIdentifiers = personasInDB.map((x)=>x.identifier);
            const avatars = await (0,context/* queryPersonaAvatar */.Tk)?.(allPersonaIdentifiers);
            const allNextIDBindings = await entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(NextID_types/* NextIDPlatform */.V.NextID, allPersonaPublicKeys.join(','), undefined);
            return personasInDB.map((x)=>{
                return {
                    persona: x,
                    proof: allNextIDBindings.find((p)=>p.persona.toLowerCase() === x.identifier.publicKeyAsHex.toLowerCase())?.proofs.filter((x)=>x.is_valid) ?? constants/* EMPTY_LIST */.rP,
                    avatar: avatars?.get(x.identifier)
                };
            });
        }
    });
    (0,react.useEffect)(()=>Messages/* MaskMessages */.q.events.ownProofChanged.on(()=>result.refetch()), [
        result.refetch
    ]);
    return result;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/useCurrentPersona.ts


function useCurrentPersona() {
    return (0,use_subscription.useSubscription)(context/* currentPersona */._c);
}

// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var site_adaptor_context = __webpack_require__(8898);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/useNextIDVerify.ts






function useNextIDVerify() {
    const verifyPostCollectTimer = (0,react.useRef)(null);
    return (0,useAsyncFn/* default */.Z)(async (persona, username, verifiedCallback)=>{
        if (!site_adaptor_context/* currentNextIDPlatform */.m$ || !persona || !username) return;
        const payload = await entry/* NextIDProof */.q7.createPersonaPayload(persona.identifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, username, site_adaptor_context/* currentNextIDPlatform */.m$, settings/* languageSettings */.pQ.value ?? 'default');
        if (!payload) throw new Error('Failed to create persona payload.');
        const signature = await (0,context/* signWithPersona */.MN)?.(Account/* SignType */.A.Message, payload.signPayload, persona.identifier, true);
        if (!signature) throw new Error('Failed to sign by persona.');
        const postContent = payload.postContent.replace('%SIG_BASE64%', (0,pvtutils/* toBase64 */.s3)((0,pvtutils/* fromHex */.H_)(signature)));
        (0,site_adaptor_context/* postMessage */.oi)?.(postContent, {
            recover: false,
            reason: 'verify'
        });
        await new Promise((resolve, reject)=>{
            verifyPostCollectTimer.current = setInterval(async ()=>{
                const postId = (0,site_adaptor_context/* getPostIdFromNewPostToast */.Ge)?.();
                if (postId && persona.identifier.publicKeyAsHex) {
                    clearInterval(verifyPostCollectTimer.current);
                    await entry/* NextIDProof */.q7.bindProof(payload.uuid, persona.identifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, site_adaptor_context/* currentNextIDPlatform */.m$, username, payload.createdAt, {
                        signature,
                        proofLocation: postId
                    });
                    resolve();
                }
            }, 1000);
            setTimeout(()=>{
                clearInterval(verifyPostCollectTimer.current);
                reject();
            }, 1000 * 20);
        });
        const isBound = await entry/* NextIDProof */.q7.queryIsBound(persona.identifier.publicKeyAsHex, site_adaptor_context/* currentNextIDPlatform */.m$, username);
        if (!isBound) throw new Error('Failed to verify.');
        Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll(undefined);
        await verifiedCallback?.();
    }, []);
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaSelectPanel/PersonaItemUI.tsx







/* cspell:disable-next-line */ // TODO: Migrate to SocialIdentity by @Lanttcat
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        nickname: {
            fontSize: 16,
            lineHeight: '20px',
            color: theme.palette.maskColor.main,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        fingerprint: {
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.maskColor.second
        },
        indicator: {
            display: 'inline-block',
            background: '#2DDF00',
            borderRadius: '50%',
            width: 7,
            height: 7,
            position: 'absolute',
            left: '77.62%',
            right: '5.84%',
            top: '5.84%',
            bottom: '77.62%',
            border: `1px solid ${theme.palette.maskColor.bottom}`
        }
    };
});
function PersonaItemUI(props) {
    const { data, onClick, currentPersona, currentPersonaIdentifier, currentProfileIdentify } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    const isVerified = (0,react.useMemo)(()=>{
        return data.proof.some((p)=>(0,helpers_personas/* isSameProfile */.ck)((0,NextID/* resolveNextIDIdentityToProfile */.Bm)(p.identity, p.platform), currentProfileIdentify?.identifier) && p.is_valid);
    }, [
        data.proof
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        gap: 1,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                flexGrow: 0,
                position: "relative",
                children: [
                    data.avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: data.avatar,
                        sx: {
                            width: 30,
                            height: 30,
                            display: 'inline-block',
                            borderRadius: '50%'
                        }
                    }) : null,
                    !data.avatar && /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MenuPersonasActive, {
                        size: 30
                    }),
                    (0,helpers_personas/* isSamePersona */.j1)(currentPersonaIdentifier, data.persona) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.indicator
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                flexGrow: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.nickname,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            component: "span",
                            display: "inline-flex",
                            direction: "row",
                            alignItems: "center",
                            gap: 0.25,
                            children: [
                                data.persona.nickname,
                                isVerified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.NextIDMini, {
                                    width: 32,
                                    height: 18
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.fingerprint,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            component: "span",
                            display: "inline-flex",
                            direction: "row",
                            alignItems: "center",
                            gap: 0.25,
                            children: [
                                (0,helpers_personas/* formatPersonaFingerprint */.Nb)(data.persona.identifier.rawPublicKey, 4),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                    size: 14,
                                    text: data.persona.identifier.rawPublicKey
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flexGrow: 0,
                children: (0,helpers_personas/* isSamePersona */.j1)(currentPersona?.persona, data.persona) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                    size: 20,
                    className: classes.checked
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioNo, {
                    size: 20,
                    className: classes.unchecked
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaSelectPanel/index.tsx




















const PersonaSelectPanel_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        items: {
            overflow: 'auto',
            maxHeight: 225,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        reloadStatus: {
            padding: theme.spacing(1, 2, 2, 2),
            minHeight: 148,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        button: {
            display: 'inline-flex',
            gap: theme.spacing(1),
            borderRadius: 20,
            width: '100%'
        }
    };
});
const PersonaSelectPanel = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { finishTarget, enableVerify = true, onClose } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const currentPersonaIdentifier = useCurrentPersona();
    const { classes } = PersonaSelectPanel_useStyles(undefined, {
        props
    });
    const [selectedPersona, setSelectedPersona] = (0,react.useState)();
    const [, handleVerifyNextID] = useNextIDVerify();
    const currentProfileIdentify = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const { data: personas = constants/* EMPTY_LIST */.rP, isLoading, error, refetch } = useConnectedPersonas();
    (0,react.useEffect)(()=>{
        if (!currentPersonaIdentifier) {
            setSelectedPersona(personas[0]);
            return;
        }
        const persona = personas.find((x)=>(0,helpers_personas/* isSamePersona */.j1)(x.persona, currentPersonaIdentifier));
        setSelectedPersona(persona ?? personas[0]);
    }, [
        currentPersonaIdentifier?.toText(),
        personas.length
    ]);
    const [, connect] = (0,useAsyncFn/* default */.Z)(async (profileIdentifier, personaIdentifier)=>{
        if (!profileIdentifier || !personaIdentifier) return;
        await (0,context/* attachProfile */.$e)?.(profileIdentifier, personaIdentifier, {
            connectionConfirmState: 'confirmed'
        });
        await (0,context/* setCurrentPersonaIdentifier */.OX)?.(personaIdentifier);
    }, []);
    (0,react.useLayoutEffect)(()=>{
        if (personas.length || isLoading || error) return;
        onClose?.();
        modals/* LeavePageConfirmModal */.tN.open({
            openDashboard: context/* openDashboard */.f8,
            info: {
                target: 'dashboard',
                url: Routes/* DashboardRoutes */.vq.SignUpPersona,
                text: t.applications_create_persona_hint(),
                title: t.applications_create_persona_title(),
                actionHint: t.applications_create_persona_action()
            }
        });
    }, [
        !personas.length,
        isLoading,
        !error
    ]);
    const actionButton = (0,react.useMemo)(()=>{
        let isConnected = true;
        let isVerified = true;
        if (!currentProfileIdentify || !selectedPersona) return null;
        // Selected persona does not link the current site
        if (!selectedPersona.persona.linkedProfiles.find((x)=>(0,helpers_personas/* isSameProfile */.ck)(x, currentProfileIdentify.identifier))) {
            isConnected = false;
        }
        if (!(0,helpers_personas/* isSamePersona */.j1)(selectedPersona.persona, currentPersonaIdentifier)) isConnected = false;
        const verifiedAtSite = selectedPersona.proof.find((x)=>(0,helpers_personas/* isSameProfile */.ck)((0,NextID/* resolveNextIDIdentityToProfile */.Bm)(x.identity, x.platform), currentProfileIdentify.identifier) && x.is_valid);
        if (!verifiedAtSite) {
            isVerified = false;
        }
        const handleClick = async ()=>{
            if (!isConnected) {
                await connect?.(currentProfileIdentify.identifier, selectedPersona.persona.identifier);
                if (!finishTarget) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileConnectTwitter);
                else providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryMaskComposeConnectTwitter);
            }
            if (!isVerified && enableVerify) {
                onClose?.();
                modals/* ApplicationBoardModal */.G5.close();
                await handleVerifyNextID(selectedPersona.persona, currentProfileIdentify.identifier?.userId);
                if (!finishTarget) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileConnectVerify);
                else providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryMaskComposeVerifyTwitter);
            }
            if (isVerified) CrossIsolationEvents/* CrossIsolationMessages */.W.events.personaBindFinished.sendToAll({
                pluginID: finishTarget
            });
            if (finishTarget) {
                CrossIsolationEvents/* CrossIsolationMessages */.W.events.applicationDialogEvent.sendToLocal({
                    open: true,
                    pluginID: finishTarget,
                    selectedPersona: selectedPersona.persona
                });
            }
            await (0,esm/* delay */.gw)(100);
            onClose?.();
        };
        const actionProps = {
            ...(()=>{
                const { persona } = selectedPersona;
                if (!isConnected && !isVerified && enableVerify) return {
                    buttonText: t.applications_persona_verify_connect({
                        nickname: persona.nickname ?? ''
                    }),
                    hint: t.applications_persona_verify_connect_hint({
                        nickname: persona.nickname ?? ''
                    })
                };
                if (!isConnected) return {
                    buttonText: t.applications_persona_connect({
                        nickname: persona.nickname ?? ''
                    }),
                    hint: t.applications_persona_connect_hint({
                        nickname: persona.nickname ?? ''
                    })
                };
                if (!isVerified) return {
                    buttonText: t.applications_persona_verify({
                        nickname: persona.nickname ?? ''
                    }),
                    hint: t.applications_persona_verify_hint()
                };
                return {
                    buttonText: t.applications_persona_connect({
                        nickname: persona.nickname ?? ''
                    })
                };
            })(),
            onClick: handleClick
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionContent, {
            ...actionProps,
            classes: {
                button: props.classes?.button
            }
        });
    }, [
        currentPersonaIdentifier,
        currentProfileIdentify,
        enableVerify,
        finishTarget,
        selectedPersona?.persona,
        selectedPersona?.proof,
        selectedPersona?.persona.linkedProfiles
    ]);
    if (isLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
        iconSize: 24
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
        className: classes.reloadStatus,
        onRetry: refetch
    });
    if (!personas.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        height: "100%",
        justifyContent: "space-between"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        height: "100%",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                gap: 1.5,
                className: classes.items,
                children: personas.map((x)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItemUI, {
                        data: x,
                        onClick: ()=>setSelectedPersona(x),
                        currentPersona: selectedPersona,
                        currentPersonaIdentifier: currentPersonaIdentifier,
                        currentProfileIdentify: currentProfileIdentify,
                        classes: {
                            unchecked: props.classes?.unchecked
                        }
                    }, x.persona.identifier.toText());
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                children: actionButton
            })
        ]
    });
});
function ActionContent(props) {
    const { buttonText, hint, onClick } = props;
    const { classes } = PersonaSelectPanel_useStyles(undefined, {
        props
    });
    if (!buttonText) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        gap: 1.5,
        mt: 1.5,
        children: [
            hint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: (t)=>t.palette.maskColor.main,
                fontSize: 14,
                lineHeight: "18px",
                height: 36,
                children: hint
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                    color: "primary",
                    className: classes.button,
                    onClick: onClick,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Identity, {
                            size: 18
                        }),
                        buttonText
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 14743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ QRCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38079);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7387);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24002);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69530);







const CACHE_SCOPE = 'qrcode';
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme)=>({
        text: {
            paddingTop: 50
        },
        info: {
            color: theme.palette.mode === 'dark' ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z[800],
            extDecoration: 'underline',
            cursor: 'pointer'
        }
    }));
function QRCode({ text, options = {}, canvasProps }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const image = cache.get(CACHE_SCOPE, text);
    const { classes } = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!ref.current || error) return;
        qrcode__WEBPACK_IMPORTED_MODULE_1__.toCanvas(ref.current, text, options, (err)=>{
            if (err) {
                setError(true);
                cache.remove(CACHE_SCOPE, text);
                throw err;
            }
            const dataURL = ref.current?.toDataURL();
            if (dataURL) {
                cache.set(CACHE_SCOPE, text, dataURL);
            }
        });
    }, [
        options,
        text,
        error
    ]);
    return error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "textPrimary",
            variant: "body1",
            className: classes.text,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC, {
                i18nKey: "backup_qrcode_error",
                components: {
                    again: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        onClick: ()=>{
                            setError(false);
                        },
                        className: classes.info
                    })
                }
            })
        })
    }) : image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: image,
        ...canvasProps
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ...canvasProps,
        ref: ref
    });
}
const cache = {
    get (scope, key) {
        return sessionStorage.getItem(`${scope}:${key}`);
    },
    set (scope, key, value) {
        return sessionStorage.setItem(`${scope}:${key}`, value);
    },
    remove (scope, key) {
        return sessionStorage.removeItem(`${scope}:${key}`);
    }
};


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

/***/ 79921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ AddCollectiblesModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
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

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/AddCollectiblesModal/AddCollectiblesDialog.tsx







const AddCollectiblesDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        content: {
            padding: 0
        },
        grid: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 1fr))'
        }
    }));
const AddCollectiblesDialog = /*#__PURE__*/ (0,react.memo)(function AddCollectiblesDialog({ open, pluginID, chainId, account, onAdd }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = AddCollectiblesDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        titleBarIconStyle: 'back',
        open: open,
        onClose: ()=>onAdd(),
        title: t.add_collectibles(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            classes: {
                root: classes.content
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectibles, {
                pluginID: pluginID,
                chainId: chainId,
                account: account,
                onAdd: onAdd,
                classes: {
                    grid: classes.grid
                }
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/AddCollectiblesModal/index.tsx





/**
     * Specified account.
     * For example, in PFP, we can add collectibles from verified wallets if no wallet connected.
     */ const AddCollectiblesModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [pluginID, setPluginID] = (0,react.useState)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const [chainId, setChainId] = (0,react.useState)();
    const [account, setAccount] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setPluginID(props.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
            setChainId(props.chainId);
            setAccount(props.account);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectiblesDialog, {
        open: true,
        onAdd: (results)=>dispatch?.close(results),
        pluginID: pluginID,
        account: account,
        chainId: chainId
    });
});


/***/ }),

/***/ 34061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ ApplicationBoard),
  U: () => (/* binding */ ApplicationSettingTabs)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useTimeout.js
var useTimeout = __webpack_require__(48927);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentPersonaConnectStatus.ts
var useCurrentPersonaConnectStatus = __webpack_require__(54928);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/Components/Boundary/index.tsx
var Boundary = __webpack_require__(64149);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/pure-react-carousel@1.30.1_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/pure-react-carousel/dist/index.es.js
var index_es = __webpack_require__(11597);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationRecommendArea.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>{
    return {
        recommendFeatureAppListWrapper: {
            display: 'flex',
            scrollbarColor: 'transparent transparent',
            overflowX: 'scroll',
            margin: '0 2px 8px',
            padding: '8px 16px',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        carousel: {
            position: 'relative',
            height: 138,
            zIndex: 100,
            overflowX: 'scroll',
            scrollbarColor: 'transparent transparent',
            overscrollBehavior: 'contain',
            '& .carousel__slider': {
                padding: '8px 2px 0',
                width: 562,
                overscrollBehavior: 'contain',
                overflowX: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            },
            '& .carousel__slide:focus-visible': {
                outline: 'none',
                display: 'none'
            },
            overflow: 'hidden',
            '& .carousel__slide-focus-ring': {
                display: 'none'
            }
        },
        isHoveringCarousel: {
            height: 270,
            '& .carousel__slider': {
                height: 270
            }
        }
    };
});
function ApplicationRecommendArea(props) {
    const { recommendFeatureAppList, RenderEntryComponent, isCarouselReady, isHoveringCarousel, setIsHoveringCarousel } = props;
    const { classes, cx } = useStyles(undefined, {
        props
    });
    const [isPlaying, setIsPlaying] = (0,react.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                rel: "stylesheet",
                href: new URL(/* asset import */ __webpack_require__(49199), __webpack_require__.b).toString()
            }),
            recommendFeatureAppList.length > 2 && isCarouselReady?.() ? /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* CarouselProvider */.sj, {
                naturalSlideWidth: 220,
                naturalSlideHeight: 117,
                totalSlides: recommendFeatureAppList.length,
                visibleSlides: 2.242,
                infinite: false,
                interval: 2500,
                className: cx(classes.carousel, isHoveringCarousel ? classes.isHoveringCarousel : ''),
                isPlaying: isPlaying,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* Slider */.iR, {
                    onScroll: (e)=>setIsPlaying(e.target.scrollLeft === 0),
                    children: recommendFeatureAppList.map((application, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* Slide */.Mi, {
                            index: i,
                            onMouseEnter: ()=>{
                                setIsHoveringCarousel(true);
                                setIsPlaying(false);
                            },
                            onMouseLeave: ()=>{
                                setIsHoveringCarousel(false);
                                setIsPlaying(true);
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderEntryComponent, {
                                application: application
                            })
                        }, application.entry.ApplicationEntryID))
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.recommendFeatureAppListWrapper,
                children: recommendFeatureAppList.map((application)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderEntryComponent, {
                        application: application
                    }, application.entry.ApplicationEntryID))
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationSettingPluginList.tsx
var ApplicationSettingPluginList = __webpack_require__(21557);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationBoard.tsx












const ApplicationBoard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        applicationWrapper: {
            padding: theme.spacing(0, navigator.userAgent.includes('Firefox') ? 1.5 : 0.25, 1, 3),
            transform: props.isCarouselReady ? 'translateX(-8px)' : 'translateX(-8px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            overflowY: 'auto',
            overflowX: 'hidden',
            gridTemplateRows: '100px',
            gridGap: 10,
            justifyContent: 'space-between',
            maxHeight: 386,
            width: props.shouldScroll && !navigator.userAgent.includes('Firefox') ? 583 : 570,
            scrollbarColor: `${theme.palette.maskColor.secondaryLine} ${theme.palette.maskColor.secondaryLine}`,
            scrollbarWidth: 'thin',
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.maskColor.secondaryLine,
                backgroundClip: 'padding-box'
            },
            [smallQuery]: {
                overflow: 'auto',
                overscrollBehavior: 'contain',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: theme.spacing(1)
            }
        },
        applicationWrapperWithCarousel: {
            position: 'relative',
            zIndex: 50,
            top: '-132px'
        },
        placeholderWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 24,
            height: 324
        },
        placeholder: {
            color: (0,vars/* getMaskColor */.n)(theme).textLight
        }
    };
});
function ApplicationBoardContent({ openDashboard, queryOwnedPersonaInformation, currentSite, lastRecognized, allPersonas, applicationCurrentStatus, personaPerSiteConnectStatusLoading, classes }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(usePersonaContext/* PersonaContext */.m.Provider, {
        initialState: {
            queryOwnedPersonaInformation
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntryStatusProvider, {
            openDashboard: openDashboard,
            lastRecognized: lastRecognized,
            allPersonas: allPersonas,
            applicationCurrentStatus: applicationCurrentStatus,
            personaPerSiteConnectStatusLoading: personaPerSiteConnectStatusLoading,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoardPluginsList, {
                currentSite: currentSite,
                classes: {
                    applicationWrapper: classes?.applicationWrapper,
                    recommendFeatureAppListWrapper: classes?.recommendFeatureAppListWrapper
                }
            })
        })
    });
}
function ApplicationBoardPluginsList(props) {
    const { currentSite = types/* EnhanceableSite */.J.Twitter } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const plugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    const { pluginID: currentWeb3Network } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const applicationList = (0,react.useMemo)(()=>plugins.flatMap(({ ID, ApplicationEntries, enableRequirement })=>{
            if (!ApplicationEntries) return constants/* EMPTY_LIST */.rP;
            const currentWeb3NetworkSupportedChainIds = enableRequirement.web3?.[currentWeb3Network];
            const isWalletConnectedRequired = currentWeb3NetworkSupportedChainIds !== undefined;
            const currentSiteIsSupportedNetwork = enableRequirement.supports.sites[currentSite];
            const isEnabledOnTheCurrentSite = currentSiteIsSupportedNetwork === undefined || currentSiteIsSupportedNetwork;
            return ApplicationEntries.map((entry)=>({
                    entry,
                    enabled: isEnabledOnTheCurrentSite,
                    pluginID: ID,
                    isWalletConnectedRequired: !account && isWalletConnectedRequired && !entry.entryWalletConnectedNotRequired
                }));
        }).sort((a, b)=>{
            return (a.entry.appBoardSortingDefaultPriority ?? 0) - (b.entry.appBoardSortingDefaultPriority ?? 0);
        }).filter((x)=>!!x.entry.RenderEntryComponent), [
        plugins,
        currentWeb3Network,
        chainId,
        account
    ]);
    const recommendFeatureAppList = applicationList.filter((x)=>x.entry.recommendFeature).sort((a, b)=>(a.entry.appBoardSortingDefaultPriority ?? 0) - (b.entry.appBoardSortingDefaultPriority ?? 0));
    const unlistedEntries = (0,ApplicationSettingPluginList/* useUnlistedEntries */.T)();
    const listedAppList = applicationList.filter((x)=>!x.entry.recommendFeature && !unlistedEntries.includes(x.entry.ApplicationEntryID));
    // #region handle carousel ui
    const [isCarouselReady] = (0,useTimeout/* default */.Z)(300);
    const [isHoveringCarousel, setIsHoveringCarousel] = (0,react.useState)(false);
    // #endregion
    const { classes, cx } = ApplicationBoard_useStyles({
        shouldScroll: listedAppList.length > 12,
        isCarouselReady: !!isCarouselReady()
    }, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationRecommendArea, {
                classes: {
                    recommendFeatureAppListWrapper: classes?.recommendFeatureAppListWrapper
                },
                recommendFeatureAppList: recommendFeatureAppList,
                isCarouselReady: isCarouselReady,
                RenderEntryComponent: RenderEntryComponent,
                isHoveringCarousel: isHoveringCarousel,
                setIsHoveringCarousel: setIsHoveringCarousel
            }),
            listedAppList.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Boundary/* Boundary */.E, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                    className: cx(classes.applicationWrapper, recommendFeatureAppList.length > 2 && isCarouselReady() && isHoveringCarousel ? classes.applicationWrapperWithCarousel : ''),
                    children: listedAppList.map((application)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderEntryComponent, {
                            application: application
                        }, application.entry.ApplicationEntryID))
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.placeholderWrapper, recommendFeatureAppList.length > 2 && isCarouselReady() && isHoveringCarousel ? classes.applicationWrapperWithCarousel : ''),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.placeholder,
                    children: t.application_display_tab_plug_app_unlisted_placeholder()
                })
            })
        ]
    });
}
function RenderEntryComponent({ application }) {
    const Entry = application.entry.RenderEntryComponent;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const ApplicationEntryStatus = (0,react.useContext)(ApplicationEntryStatusContext);
    // #region entry disabled
    const disabled = (0,react.useMemo)(()=>{
        if (!application.enabled) return true;
        return !!application.entry.nextIdRequired && ApplicationEntryStatus.isLoading;
    }, [
        application,
        ApplicationEntryStatus.isLoading
    ]);
    // #endregion
    const clickHandler = (0,react.useMemo)(()=>{
        if (application.isWalletConnectedRequired) {
            return async (walletConnectedCallback, requiredSupportPluginID)=>{
                const connected = await modals/* SelectProviderModal */.ge.openAndWaitForClose({
                    requiredSupportPluginID
                });
                if (connected) walletConnectedCallback?.();
            };
        }
        if (!application.entry.nextIdRequired) return;
        if (ApplicationEntryStatus.isPersonaCreated === false || ApplicationEntryStatus.shouldVerifyNextId || !ApplicationEntryStatus.isPersonaConnected) return ()=>ApplicationEntryStatus.personaAction?.(ApplicationEntryStatus.isPersonaCreated ? application.pluginID : undefined);
        return;
    }, [
        ApplicationEntryStatus,
        application
    ]);
    // #endregion
    // #region tooltip hint
    const tooltipHint = (()=>{
        if (ApplicationEntryStatus.isLoading) return;
        if (application.isWalletConnectedRequired) return t.application_tooltip_hint_connect_wallet();
        if (!application.entry.nextIdRequired) return;
        if (ApplicationEntryStatus.isPersonaCreated === false && !disabled) return t.application_tooltip_hint_persona_accessing_dapp();
        if (ApplicationEntryStatus.isPersonaConnected === false && !disabled) return t.application_tooltip_hint_connect_persona();
        if (ApplicationEntryStatus.shouldVerifyNextId && !disabled) return t.application_tooltip_hint_verify();
        return;
    })();
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {
        disabled: disabled,
        tooltipHint: tooltipHint,
        onClick: clickHandler
    });
}
const ApplicationEntryStatusContext = /*#__PURE__*/ (0,react.createContext)({
    isPersonaConnected: undefined,
    isPersonaCreated: undefined,
    isNextIDVerify: undefined,
    isSiteConnectedToCurrentPersona: undefined,
    shouldDisplayTooltipHint: undefined,
    shouldVerifyNextId: undefined,
    currentPersonaPublicKey: undefined,
    currentSiteConnectedPersonaPublicKey: undefined,
    personaAction: undefined,
    isLoading: false
});
ApplicationEntryStatusContext.displayName = 'ApplicationEntryStatusContext';
function ApplicationEntryStatusProvider({ children, openDashboard, lastRecognized, applicationCurrentStatus, personaPerSiteConnectStatusLoading, allPersonas }) {
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    const { value: personaConnectStatus, loading: personaStatusLoading } = (0,useCurrentPersonaConnectStatus/* useCurrentPersonaConnectStatus */.H)(allPersonas, currentIdentifier, openDashboard, lastRecognized);
    const { isSiteConnectedToCurrentPersona, currentPersonaPublicKey, currentSiteConnectedPersonaPublicKey } = applicationCurrentStatus ?? {};
    const Context = (0,react.useMemo)(()=>({
            personaAction: personaConnectStatus.action,
            isPersonaCreated: personaConnectStatus.hasPersona,
            isPersonaConnected: personaConnectStatus.connected,
            isNextIDVerify: personaConnectStatus.verified,
            isSiteConnectedToCurrentPersona,
            shouldDisplayTooltipHint: applicationCurrentStatus?.isSiteConnectedToCurrentPersona === false && personaConnectStatus.connected,
            shouldVerifyNextId: !!(!personaConnectStatus.verified && applicationCurrentStatus),
            currentPersonaPublicKey,
            currentSiteConnectedPersonaPublicKey,
            isLoading: personaStatusLoading || personaPerSiteConnectStatusLoading
        }), [
        applicationCurrentStatus,
        personaStatusLoading,
        personaPerSiteConnectStatusLoading,
        personaConnectStatus.action,
        personaConnectStatus.hasPersona,
        personaConnectStatus.connected,
        personaConnectStatus.verified
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntryStatusContext.Provider, {
        value: Context,
        children: children
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationSettingPluginSwitch.tsx
var ApplicationSettingPluginSwitch = __webpack_require__(5149);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationBoardDialog.tsx











const ApplicationBoardDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { openSettings })=>{
    return {
        content: {
            padding: theme.spacing(1.5, openSettings ? 2 : 0, '6px'),
            height: openSettings ? 'auto' : 546,
            overflow: openSettings ? 'hidden scroll' : 'hidden',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
var ApplicationSettingTabs;
(function(ApplicationSettingTabs) {
    ApplicationSettingTabs["pluginList"] = "pluginList";
    ApplicationSettingTabs["pluginSwitch"] = "pluginSwitch";
})(ApplicationSettingTabs || (ApplicationSettingTabs = {}));
function ApplicationBoard({ open, onClose, openDashboard, queryOwnedPersonaInformation, currentSite, allPersonas, lastRecognized, applicationCurrentStatus, personaPerSiteConnectStatusLoading, setPluginMinimalModeEnabled, quickMode = false, tab = ApplicationSettingTabs.pluginSwitch, focusPluginID }) {
    const [openSettings, setOpenSettings] = (0,react.useState)(false);
    const { classes } = ApplicationBoardDialog_useStyles({
        openSettings
    });
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const [currentTab, onChange, tabs, setTab] = (0,useTabs/* useTabs */.Y)(ApplicationSettingTabs.pluginList, ApplicationSettingTabs.pluginSwitch);
    (0,react.useEffect)(()=>setTab(tab), [
        tab
    ]);
    const reset = (0,react.useCallback)(()=>{
        setOpenSettings(false);
        setTab(ApplicationSettingTabs.pluginList);
    }, []);
    const closeDialog = (0,react.useCallback)(()=>{
        if (openSettings && !quickMode) {
            setOpenSettings(false);
            return;
        }
        onClose();
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
            reason: 'timeline',
            open: false
        });
        reset();
    }, [
        openSettings,
        quickMode,
        reset
    ]);
    return open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            maxWidth: "sm",
            isOnBack: !!(openSettings && !quickMode),
            onClose: closeDialog,
            titleTabs: openSettings ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                variant: "base",
                onChange: onChange,
                "aria-label": "ApplicationBoard",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.application_settings_tab_app_list(),
                        value: tabs.pluginList
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.application_settings_tab_plug_in_switch(),
                        value: tabs.pluginSwitch
                    })
                ]
            }) : null,
            titleBarIconStyle: openSettings && !quickMode ? 'back' : 'close',
            independent: modals/* LeavePageConfirmModal */.tN.peek(),
            title: openSettings ? t.application_settings() : t.applications(),
            titleTail: openSettings ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "small",
                sx: {
                    margin: '-5px'
                },
                onClick: ()=>setOpenSettings(true),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gear, {
                    size: 24
                })
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: openSettings ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: tabs.pluginList,
                            style: {
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingPluginList/* ApplicationSettingPluginList */.O, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: tabs.pluginSwitch,
                            style: {
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingPluginSwitch/* ApplicationSettingPluginSwitch */.o, {
                                focusPluginID: focusPluginID,
                                setPluginMinimalModeEnabled: setPluginMinimalModeEnabled
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoardContent, {
                    openDashboard: openDashboard,
                    queryOwnedPersonaInformation: queryOwnedPersonaInformation,
                    currentSite: currentSite,
                    lastRecognized: lastRecognized,
                    allPersonas: allPersonas,
                    applicationCurrentStatus: applicationCurrentStatus,
                    personaPerSiteConnectStatusLoading: personaPerSiteConnectStatusLoading
                })
            })
        })
    }) : null;
}


/***/ }),

/***/ 21557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ApplicationSettingPluginList),
/* harmony export */   T: () => (/* binding */ useUnlistedEntries)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15628);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94685);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94892);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2574);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23935);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64149);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10292);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62335);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8772);








function useUnlistedEntries() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages */ ._H.ApplicationEntryUnListed.storage.data.subscription);
}
async function toggleEntryListing(entryId, listing) {
    const state = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages */ ._H.ApplicationEntryUnListed.storage.data;
    if (!state.initialized) await state.initializedPromise;
    if (listing) {
        state.setValue(state.value.filter((id)=>id !== entryId));
    } else {
        state.setValue([
            ...state.value,
            entryId
        ]);
    }
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme, { iconFilterColor })=>({
        list: {
            display: 'grid',
            gap: theme.spacing(1.5),
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            width: '100%',
            padding: theme.spacing(2, 0),
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            overflowY: 'scroll',
            height: 210
        },
        listItem: {
            width: 84,
            height: 56,
            padding: 0,
            background: theme.palette.maskColor.bottom,
            boxShadow: `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}`,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            position: 'relative'
        },
        iconWrapper: {
            '> *': {
                width: 36,
                height: 36
            },
            ...iconFilterColor ? {
                filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
                backdropFilter: 'blur(16px)'
            } : {}
        },
        unlisted: {
            fontSize: 18,
            fontWeight: 600
        },
        placeholderWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 238
        },
        placeholder: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .getMaskColor */ .n)(theme).textLight
        }
    }));
function ApplicationSettingPluginList() {
    const { classes } = useStyles({
        iconFilterColor: undefined
    });
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useSharedTrans */ .j)();
    const plugins = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__/* .useActivatedPluginsSiteAdaptor */ .JR)('any');
    const applicationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return plugins.flatMap(({ ID, ApplicationEntries: entries })=>{
            if (!entries) return [];
            return entries.filter((entry)=>entry.appBoardSortingDefaultPriority && !entry.recommendFeature).map((entry)=>({
                    entry,
                    pluginID: ID
                }));
        }).sort((a, b)=>{
            return (a.entry.appBoardSortingDefaultPriority ?? 0) - (b.entry.appBoardSortingDefaultPriority ?? 0);
        });
    }, [
        plugins
    ]);
    const unlisted = useUnlistedEntries();
    const listedEntries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return applicationList.filter((x)=>!unlisted.includes(x.entry.ApplicationEntryID));
    }, [
        unlisted
    ]);
    const unlistedEntries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return applicationList.filter((x)=>unlisted.includes(x.entry.ApplicationEntryID));
    }, [
        unlisted
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.unlisted,
                children: t.application_settings_tab_plug_app_list_listed()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppList, {
                appList: listedEntries,
                isListing: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.unlisted,
                children: t.application_settings_tab_plug_app_list_unlisted()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppList, {
                appList: unlistedEntries,
                isListing: false
            })
        ]
    });
}
function AppList({ appList, isListing }) {
    const { classes } = useStyles({
        iconFilterColor: undefined
    });
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useSharedTrans */ .j)();
    return appList.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_9__/* .Boundary */ .E, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            className: classes.list,
            children: appList.map((application)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppListItem, {
                    pluginID: application.pluginID,
                    entry: application.entry,
                    isListing: isListing
                }, application.entry.ApplicationEntryID))
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.placeholderWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: classes.placeholder,
            children: isListing ? t.application_settings_tab_plug_app_unlisted_placeholder() : t.application_settings_tab_plug_app_listed_placeholder()
        })
    });
}
const AppListItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function AppListItem({ pluginID, entry, isListing }) {
    const { classes } = useStyles({
        iconFilterColor: entry.iconFilterColor
    });
    const popperProps = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_11__/* .useBoundedPopperProps */ .g)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ShadowRootTooltip */ .p, {
        PopperProps: popperProps,
        disableInteractive: true,
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__/* .PluginTransFieldRender */ .s, {
                field: entry.name,
                pluginID: pluginID
            })
        }),
        placement: "bottom",
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            disableTouchRipple: true,
            className: classes.listItem,
            onClick: ()=>toggleEntryListing(entry.ApplicationEntryID, !isListing),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.iconWrapper,
                children: entry.icon
            })
        })
    });
});


/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ ApplicationSettingPluginSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8311);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94685);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94892);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40514);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38096);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23935);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10292);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3223);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97991);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55106);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14722);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8772);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        listItem: {
            padding: theme.spacing(1.5),
            borderRadius: 12,
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 0px 20px rgba(0, 0, 0, 0.05)',
            '&:hover': {
                boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.06)' : '0px 0px 20px rgba(0, 0, 0, 0.1)'
            },
            '&:hover .MuiAvatar-root': {
                background: theme.palette.background.paper
            },
            '&:not(:last-child)': {
                marginBottom: theme.spacing(1.5)
            }
        },
        listContent: {
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
            alignItems: 'center'
        },
        headerWrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        settings: {
            alignSelf: 'flex-start',
            paddingTop: theme.spacing(0.5),
            marginLeft: theme.spacing(0.5),
            cursor: 'pointer',
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar */ .Z.textSecondary,
            opacity: theme.palette.mode === 'dark' ? 0.5 : 1
        },
        avatar: {
            background: theme.palette.background.default,
            width: '44px',
            height: '44px',
            '> *': {
                width: '26px !important',
                height: '26px !important'
            }
        },
        placeholder: {
            minWidth: 56
        },
        info: {
            maxWidth: 420
        },
        name: {
            fontSize: 14,
            fontWeight: 700
        },
        desc: {
            fontSize: 12,
            fontWeight: 400,
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary
        }
    }));
const DSearch_KEY = 'decentralized_search';
const ApplicationSettingPluginSwitch = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ApplicationSettingPluginSwitch({ focusPluginID, setPluginMinimalModeEnabled }) {
    const { classes } = useStyles();
    const plugins = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__/* .useActivatedPluginsSiteAdaptor */ .JR)('any');
    const pluginsInMinimalMode = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__/* .useActivatedPluginsSiteAdaptor */ .JR)(true);
    const availablePlugins = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return plugins.flatMap(({ ID, ApplicationEntries: entries })=>(entries ?? []).map((entry)=>({
                    entry,
                    pluginID: ID
                }))).filter((x)=>x.entry.category === 'dapp' && !x.entry.hiddenInList).sort((a, b)=>(a.entry.marketListSortingPriority ?? 0) - (b.entry.marketListSortingPriority ?? 0));
    }, [
        plugins
    ]);
    const targetPluginRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const noAvailablePlugins = availablePlugins.length === 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!focusPluginID || noAvailablePlugins || !targetPluginRef.current) return;
        targetPluginRef.current.scrollIntoView();
    }, [
        focusPluginID,
        noAvailablePlugins
    ]);
    const onSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (id, checked)=>{
        if (id === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .PluginID */ .P.GoPlusSecurity && checked === false) {
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CrossIsolationMessages */ .W.events.checkSecurityConfirmationDialogEvent.sendToAll({
                open: true
            });
        } else {
            await setPluginMinimalModeEnabled?.(id, !checked);
        }
    }, [
        setPluginMinimalModeEnabled
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DSearchSettings, {
                checked: !pluginsInMinimalMode.map((x)=>x.ID).includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .PluginID */ .P.Handle),
                onSwitch: (event)=>onSwitch(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .PluginID */ .P.Handle, event?.target.checked),
                setRef: (element)=>{
                    if (DSearch_KEY === focusPluginID) {
                        targetPluginRef.current = element;
                    }
                }
            }),
            availablePlugins.map((x)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                    ref: (ele)=>{
                        if (x.pluginID === focusPluginID) {
                            targetPluginRef.current = ele;
                        }
                    },
                    className: classes.listItem,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        width: "100%",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                direction: "row",
                                width: "100%",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: classes.listContent,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    className: classes.avatar,
                                                    children: x.entry.icon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                className: classes.info,
                                                flex: 1,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: classes.headerWrapper,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                className: classes.name,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__/* .PluginTransFieldRender */ .s, {
                                                                    field: x.entry.name,
                                                                    pluginID: x.pluginID
                                                                })
                                                            }),
                                                            x.entry.tutorialLink ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                className: classes.settings,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__.Tutorial, {
                                                                    size: 22,
                                                                    onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_16__/* .openWindow */ .x)(x.entry.tutorialLink)
                                                                })
                                                            }) : null
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        className: classes.desc,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__/* .PluginTransFieldRender */ .s, {
                                                            field: x.entry.description,
                                                            pluginID: x.pluginID
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        justifyContent: "center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            checked: !pluginsInMinimalMode.map((x)=>x.ID).includes(x.pluginID),
                                            onChange: (event)=>onSwitch(x.pluginID, event.target.checked)
                                        })
                                    })
                                ]
                            }),
                            x.entry.features?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                direction: "row",
                                mt: 1.25,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        className: classes.placeholder
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        spacing: 1.25,
                                        children: x.entry.features?.map((f, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        className: classes.name,
                                                        fontSize: 14,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__/* .PluginTransFieldRender */ .s, {
                                                            field: f.name,
                                                            pluginID: x.pluginID
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        className: classes.desc,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_13__/* .PluginTransFieldRender */ .s, {
                                                            field: f.description,
                                                            pluginID: x.pluginID
                                                        })
                                                    })
                                                ]
                                            }, i))
                                    })
                                ]
                            }) : null
                        ]
                    })
                }, x.entry.ApplicationEntryID))
        ]
    });
});
function DSearchSettings({ checked, onSwitch, setRef }) {
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_18__/* .useSharedTrans */ .j)();
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        ref: (ele)=>setRef(ele),
        className: classes.listItem,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    direction: "row",
                    width: "100%",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: classes.listContent,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: classes.avatar,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__.DecentralizedSearch, {})
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: classes.info,
                                    flex: 1,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: classes.headerWrapper,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                className: classes.name,
                                                children: t.decentralized_search_name()
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.desc,
                                            children: t.decentralized_search_description()
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            justifyContent: "center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                checked: checked,
                                onChange: onSwitch
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    direction: "row",
                    mt: 1.25,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.placeholder
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            spacing: 1.25,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.name,
                                            fontSize: 14,
                                            children: t.decentralized_search_feature_token_name()
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.desc,
                                            children: t.decentralized_search_feature_token_description()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.name,
                                            fontSize: 14,
                                            children: t.decentralized_search_feature_nft_name()
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.desc,
                                            children: t.decentralized_search_feature_nft_description()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.name,
                                            fontSize: 14,
                                            children: t.decentralized_search_feature_wallet_name()
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: classes.desc,
                                            children: t.decentralized_search_feature_wallet_description()
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }, DSearch_KEY);
}


/***/ }),

/***/ 19523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ ApplicationBoardModal),
  P: () => (/* binding */ ApplicationBoardSettingsModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationBoardDialog.tsx + 2 modules
var ApplicationBoardDialog = __webpack_require__(34061);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationSettingPluginList.tsx
var ApplicationSettingPluginList = __webpack_require__(21557);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationSettingPluginSwitch.tsx
var ApplicationSettingPluginSwitch = __webpack_require__(5149);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationSettingsDialog.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        content: {
            padding: theme.spacing(1.5, 2, '6px'),
            height: 'auto',
            overflow: 'hidden scroll',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
const ApplicationBoardSettingsDialog = /*#__PURE__*/ (0,react.memo)(({ focusPluginID, setPluginMinimalModeEnabled, open, onClose, tab = ApplicationBoardDialog/* ApplicationSettingTabs */.U.pluginSwitch })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles();
    const [currentTab, onChange, tabs, setTab] = (0,useTabs/* useTabs */.Y)(ApplicationBoardDialog/* ApplicationSettingTabs */.U.pluginList, ApplicationBoardDialog/* ApplicationSettingTabs */.U.pluginSwitch);
    (0,react.useEffect)(()=>setTab(tab), [
        tab
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            maxWidth: "sm",
            onClose: onClose,
            titleTabs: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                variant: "base",
                onChange: onChange,
                "aria-label": "ApplicationBoard",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.application_settings_tab_app_list(),
                        value: tabs.pluginList
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.application_settings_tab_plug_in_switch(),
                        value: tabs.pluginSwitch
                    })
                ]
            }),
            title: t.application_settings(),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.pluginList,
                        style: {
                            padding: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingPluginList/* ApplicationSettingPluginList */.O, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.pluginSwitch,
                        style: {
                            padding: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingPluginSwitch/* ApplicationSettingPluginSwitch */.o, {
                            focusPluginID: focusPluginID,
                            setPluginMinimalModeEnabled: setPluginMinimalModeEnabled
                        })
                    })
                ]
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/index.tsx





const ApplicationBoardModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [openDashboard, setOpenDashboard] = (0,react.useState)();
    const [queryOwnedPersonaInformation, setQueryOwnedPersonaInformation] = (0,react.useState)();
    const [currentSite, setCurrentSite] = (0,react.useState)();
    const [allPersonas, setAllPersonas] = (0,react.useState)();
    const [lastRecognized, setLastRecognized] = (0,react.useState)();
    const [applicationCurrentStatus, setApplicationCurrentStatus] = (0,react.useState)();
    const [personaPerSiteConnectStatusLoading, setPersonaPerSiteConnectStatusLoading] = (0,react.useState)(false);
    const [setPluginMinimalModeEnabled, setSetPluginMinimalModeEnabled] = (0,react.useState)();
    const [quickMode, setQuickMode] = (0,react.useState)(false);
    const [tab, setTab] = (0,react.useState)();
    const [focusPluginID, setFocusPluginID] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setOpenDashboard(()=>props.openDashboard);
            setQueryOwnedPersonaInformation(()=>props.queryOwnedPersonaInformation);
            setCurrentSite(props.currentSite);
            setAllPersonas(props.allPersonas);
            setLastRecognized(props.lastRecognized);
            setApplicationCurrentStatus(props.applicationCurrentStatus);
            setPersonaPerSiteConnectStatusLoading(props.personaPerSiteConnectStatusLoading);
            setSetPluginMinimalModeEnabled(()=>props.setPluginMinimalModeEnabled);
            setQuickMode(props.quickMode ?? false);
            setTab(props.tab ?? ApplicationBoardDialog/* ApplicationSettingTabs */.U.pluginSwitch);
            setFocusPluginID(props.focusPluginID);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoardDialog/* ApplicationBoard */.c, {
        open: true,
        allPersonas: allPersonas ?? [],
        lastRecognized: lastRecognized,
        currentSite: currentSite,
        applicationCurrentStatus: applicationCurrentStatus,
        queryOwnedPersonaInformation: queryOwnedPersonaInformation,
        personaPerSiteConnectStatusLoading: personaPerSiteConnectStatusLoading,
        openDashboard: openDashboard,
        setPluginMinimalModeEnabled: setPluginMinimalModeEnabled,
        onClose: ()=>dispatch?.close(),
        quickMode: quickMode,
        focusPluginID: focusPluginID,
        tab: tab
    });
});
const ApplicationBoardSettingsModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [setPluginMinimalModeEnabled, setSetPluginMinimalModeEnabled] = (0,react.useState)();
    const [focusPluginID, setFocusPluginID] = (0,react.useState)();
    const [tab, setTab] = (0,react.useState)(ApplicationBoardDialog/* ApplicationSettingTabs */.U.pluginSwitch);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setSetPluginMinimalModeEnabled(()=>props.setPluginMinimalModeEnabled);
            setFocusPluginID(props.focusPluginID);
            setTab(props.tab);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoardSettingsDialog, {
        open: true,
        setPluginMinimalModeEnabled: setPluginMinimalModeEnabled,
        onClose: ()=>dispatch?.close(),
        focusPluginID: focusPluginID,
        tab: tab
    });
});


/***/ }),

/***/ 37644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90097);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(837);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78130);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72385);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80922);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
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
const Dialog = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Dialog({ title, message, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', confirmVariant = 'error', onConfirm, onClose, ...rest }) {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
        classes: {
            paper: classes.paper,
            ...rest.classes
        },
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    variant: "h1",
                    className: classes.title,
                    component: "div",
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: classes.message,
                    component: "div",
                    children: message
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: classes.desc,
                    component: "div",
                    children: description
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: classes.buttonGroup,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .ActionButton */ .K, {
                            fullWidth: true,
                            variant: "roundedOutlined",
                            onClick: ()=>onClose?.(),
                            children: cancelLabel
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .ActionButton */ .K, {
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
const ConfirmDialogComponent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function ConfirmDialog(_, ref) {
    const [props, setProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: '',
        message: ''
    });
    const [open, dispatch] = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_8__/* .useSingletonModal */ .g)(ref, {
        onOpen (p) {
            setProps(p);
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dialog, {
        open: open,
        ...props,
        onClose: ()=>dispatch?.close(false),
        onConfirm: ()=>dispatch?.close(true)
    });
});


/***/ }),

/***/ 47919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ ConfirmModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/dialogClasses.js
var dialogClasses = __webpack_require__(54677);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ConfirmModal/Dialog.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, maxWidth)=>({
        dialog: {
            [`.${dialogClasses/* default */.Z.paper}`]: {
                maxWidth
            }
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 80,
            margin: theme.spacing(0),
            fontSize: 18,
            fontWeight: 'bold'
        },
        button: {
            margin: theme.spacing(1)
        }
    }));
function Confirm({ title, confirmLabel, content, onSubmit, maxWidthOfContent, ...rest }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(maxWidthOfContent);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        title: title ?? t.dialog_confirm(),
        className: classes.dialog,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: content
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    className: classes.button,
                    onClick: ()=>onSubmit(),
                    children: confirmLabel ?? t.dialog_confirm()
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ConfirmModal/index.tsx




const ConfirmModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [props_, setProps_] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setProps_(props);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Confirm, {
        open: true,
        onSubmit: ()=>dispatch?.close(true),
        onClose: ()=>dispatch?.close(false),
        ...props_,
        content: props_?.content
    });
});


/***/ }),

/***/ 11783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ GasSettingModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(8610);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(28181);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasOptions.ts
var useGasOptions = __webpack_require__(98705);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/GasSettingModal/GasSetting1559.tsx
















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: theme.palette.mode === 'dark' ? '#212442' : '#f7f9fa',
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
                color: theme.palette.primary.contrastText
            }
        },
        button: {
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
            color: vars/* MaskColorVar */.Z.normalText
        }
    }));
const GasSetting1559 = /*#__PURE__*/ (0,react.memo)(({ gasLimit, minGasLimit = 0, gasOptionType = specs/* GasOptionType */.Qd.NORMAL, onConfirm = noop/* default */.Z })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { NATIVE_TOKEN_ADDRESS } = (0,constants/* useTokenConstants */.kd)(chainId);
    const [selectedGasOption, setGasOptionType] = (0,react.useState)(gasOptionType);
    const { data: nativeTokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, NATIVE_TOKEN_ADDRESS, {
        chainId
    });
    const { data: gasOptions, isLoading: getGasOptionsLoading } = (0,useGasOptions/* useGasOptions */.o)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    // #region Gas options
    const options = (0,react.useMemo)(()=>[
            {
                title: t.popups_wallet_gas_fee_settings_low(),
                gasOption: specs/* GasOptionType */.Qd.SLOW,
                content: gasOptions?.[specs/* GasOptionType */.Qd.SLOW]
            },
            {
                title: t.popups_wallet_gas_fee_settings_medium(),
                gasOption: specs/* GasOptionType */.Qd.NORMAL,
                content: gasOptions?.[specs/* GasOptionType */.Qd.NORMAL]
            },
            {
                title: t.popups_wallet_gas_fee_settings_high(),
                gasOption: specs/* GasOptionType */.Qd.FAST,
                content: gasOptions?.[specs/* GasOptionType */.Qd.FAST]
            }
        ], [
        gasOptions
    ]);
    // #endregion
    const currentGasOption = options.find((opt)=>opt.gasOption === selectedGasOption);
    // #region Form field define schema
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t.wallet_transfer_error_gas_limit_absence()).refine((gasLimit)=>(0,number/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimit), t.popups_wallet_gas_fee_settings_min_gas_limit_tips({
                limit: minGasLimit.toFixed()
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
    const { control, handleSubmit, setValue, clearErrors, watch, formState: { errors } } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new bignumber/* BigNumber */.O(gasLimit ?? 0).toString(),
            maxPriorityFeePerGas: '',
            maxFeePerGas: '0'
        },
        context: {
            minGasLimit,
            gasOptions
        }
    });
    // #region Set gas on tx to form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gasLimit) setValue('gasLimit', new bignumber/* BigNumber */.O(gasLimit).toString());
    }, [
        gasLimit,
        setValue
    ]);
    // #endregion
    // #region If the selected changed, set the value on the option to the form data
    (0,react.useEffect)(()=>{
        if (selectedGasOption === null) return;
        clearErrors([
            'maxPriorityFeePerGas',
            'maxFeePerGas'
        ]);
        setValue('maxPriorityFeePerGas', new bignumber/* BigNumber */.O(currentGasOption?.content?.suggestedMaxPriorityFeePerGas ?? 0).toString() ?? '');
        setValue('maxFeePerGas', new bignumber/* BigNumber */.O(currentGasOption?.content?.suggestedMaxFeePerGas ?? 0).toString() ?? '');
    }, [
        currentGasOption,
        setValue,
        options
    ]);
    // #endregion
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm?.({
            gasLimit: data.gasLimit,
            maxFee: (0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0),
            priorityFee: (0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0),
            gasOption: selectedGasOption
        });
    }, [
        onConfirm,
        selectedGasOption
    ]);
    const onSubmit = handleSubmit(handleConfirm);
    const [maxPriorityFeePerGas, maxFeePerGas, inputGasLimit] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'gasLimit'
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title, content, gasOption }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setGasOptionType(gasOption),
                        className: selectedGasOption === gasOption ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "div",
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(content?.suggestedMaxFeePerGas ?? 0).toFixed(2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        children: "Gwei"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_gas_fee_settings_usd",
                                    values: {
                                        usd: (0,formatCurrency/* formatCurrency */.x)((0,formatter/* formatWeiToEther */.yp)(content?.suggestedMaxFeePerGas ?? 0).times(nativeTokenPrice).times(gasLimit ?? 21000), 'USD', {
                                            onlyRemainTwoOrZeroDecimal: true
                                        })
                                    },
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                    },
                                    shouldUnescape: true
                                })
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t.popups_wallet_gas_fee_settings_gas_limit(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: gasLimit?.toString()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_gas_fee_settings_usd",
                                    values: {
                                        usd: (0,formatter/* formatWeiToEther */.yp)(Number(maxPriorityFeePerGas)).times(nativeTokenPrice).times(inputGasLimit || 1).toFixed(2)
                                    },
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                    },
                                    shouldUnescape: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_gas_fee_settings_usd",
                                    values: {
                                        usd: (0,formatter/* formatWeiToEther */.yp)(Number(maxFeePerGas)).times(nativeTokenPrice).times(inputGasLimit || 1).toFixed(2)
                                    },
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                    },
                                    shouldUnescape: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                        name: "maxFeePerGas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: getGasOptionsLoading,
                fullWidth: true,
                className: classes.button,
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t.confirm()
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/GasSettingModal/Prior1559GasSetting.tsx

















const minGasPriceOfChain = {
    [types/* ChainId */.a_.BSC]: (0,number/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId */.a_.Conflux]: (0,number/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId */.a_.Matic]: (0,number/* pow10 */.wA)(9).multipliedBy(30),
    [types/* ChainId */.a_.Astar]: (0,number/* pow10 */.wA)(9).multipliedBy(5)
};
// 5 Gwei
const Prior1559GasSetting_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: theme.palette.mode === 'dark' ? '#212442' : '#f7f9fa',
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
                color: theme.palette.primary.contrastText
            }
        },
        button: {
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        price: {
            fontSize: 12,
            lineHeight: '16px',
            color: vars/* MaskColorVar */.Z.normalText
        }
    }));
const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(({ gasLimit, minGasLimit = 0, gasOptionType = specs/* GasOptionType */.Qd.NORMAL, onConfirm = noop/* default */.Z })=>{
    const { classes } = Prior1559GasSetting_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const [selectedGasOption, setGasOptionType] = (0,react.useState)(gasOptionType);
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { data: gasOptions, isLoading: getGasOptionsLoading } = (0,useGasOptions/* useGasOptions */.o)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const options = (0,react.useMemo)(()=>gasOptions ? [
            {
                title: t.popups_wallet_gas_fee_settings_low(),
                gasOption: specs/* GasOptionType */.Qd.SLOW,
                gasPrice: gasOptions[specs/* GasOptionType */.Qd.SLOW].suggestedMaxFeePerGas || '0'
            },
            {
                title: t.popups_wallet_gas_fee_settings_medium(),
                gasOption: specs/* GasOptionType */.Qd.NORMAL,
                gasPrice: gasOptions[specs/* GasOptionType */.Qd.NORMAL].suggestedMaxFeePerGas || '0'
            },
            {
                title: t.popups_wallet_gas_fee_settings_high(),
                gasOption: specs/* GasOptionType */.Qd.FAST,
                gasPrice: gasOptions[specs/* GasOptionType */.Qd.FAST].suggestedMaxFeePerGas || 0
            }
        ] : null, [
        gasOptions
    ]);
    const currentGasOption = options ? options.find((opt)=>opt.gasOption === selectedGasOption) : null;
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t.wallet_transfer_error_gas_limit_absence()).refine((gasLimit)=>new bignumber/* BigNumber */.O(gasLimit).gte(minGasLimit), t.popups_wallet_gas_fee_settings_min_gas_limit_tips({
                limit: minGasLimit.toFixed()
            })),
            gasPrice: lib.z.string().min(1, t.wallet_transfer_error_gas_price_absence())
        });
    }, [
        minGasLimit
    ]);
    const { control, handleSubmit, setValue, watch, formState: { errors } } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new bignumber/* BigNumber */.O(gasLimit || 0).toString(),
            gasPrice: ''
        },
        context: {
            minGasLimit
        }
    });
    const [inputGasLimit, gasPrice] = watch([
        'gasLimit',
        'gasPrice'
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gasLimit) setValue('gasLimit', new bignumber/* BigNumber */.O(gasLimit).toString());
    }, [
        gasLimit,
        setValue
    ]);
    (0,react.useEffect)(()=>{
        const minGasPrice = minGasPriceOfChain[chainId];
        if (currentGasOption || minGasPrice) {
            setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(currentGasOption?.gasPrice || minGasPrice || 0).toString());
        }
    }, [
        currentGasOption,
        setValue,
        chainId
    ]);
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm({
            gasLimit: data.gasLimit,
            gasPrice: (0,web3_utils_lib.toWei)(data.gasPrice, 'gwei'),
            gasOption: selectedGasOption
        });
    }, [
        selectedGasOption
    ]);
    const onSubmit = handleSubmit(handleConfirm);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            options ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title, gasPrice, gasOption }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setGasOptionType(gasOption),
                        className: selectedGasOption === gasOption ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(gasPrice || 0).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_gas_fee_settings_usd",
                                    values: {
                                        usd: (0,formatter/* formatWeiToEther */.yp)(gasPrice).times(nativeTokenPrice).times(inputGasLimit || '1').toPrecision(3)
                                    },
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                    },
                                    shouldUnescape: true
                                })
                            })
                        ]
                    }, gasOption))
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t.popups_wallet_gas_fee_settings_gas_limit(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: gasLimit?.toString()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t.popups_wallet_gas_price(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "popups_wallet_gas_fee_settings_usd",
                                    values: {
                                        usd: (0,formatter/* formatGweiToEther */.Hh)(gasPrice || 0).times(nativeTokenPrice).times(inputGasLimit || 1).toFixed(2)
                                    },
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                    },
                                    shouldUnescape: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                        name: "gasPrice"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: getGasOptionsLoading,
                fullWidth: true,
                className: classes.button,
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t.confirm()
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/GasSettingModal/GasSettingSupported.tsx





function GasSettingSupported(props) {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    return entry/* ChainResolver */.iv.isFeatureSupported(chainId, 'EIP1559') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting1559, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559GasSetting, {
        ...props
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/GasSettingModal/GasSettingModal.tsx






const GasSettingModal_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            color: theme.palette.text.primary
        }
    }));
function GasSetting(props) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = GasSettingModal_useStyles();
    const { open, onClose, gasOption = specs/* GasOptionType */.Qd.NORMAL, gasLimit = 0, minGasLimit = 0, setGasLimit, setGasOptionType } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t.popups_wallet_gas_fee_settings(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingSupported, {
                gasLimit: gasLimit,
                minGasLimit: minGasLimit,
                onGasLimitChange: setGasLimit,
                gasOptionType: gasOption,
                onGasOptionChange: setGasOptionType,
                onConfirm: ({ gasPrice, gasLimit, maxFee, priorityFee, gasOption })=>{
                    modals/* GasSettingModal */.fU.close({
                        gasOption,
                        gasPrice,
                        gasLimit,
                        priorityFee,
                        maxFee
                    });
                }
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/GasSettingModal/index.tsx





const GasSettingModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [gasOptionType, setGasOptionType] = (0,react.useState)(specs/* GasOptionType */.Qd.NORMAL);
    const [gasLimit, setGasLimit] = (0,react.useState)(0);
    const [minGasLimit, setMinGasLimit] = (0,react.useState)(0);
    const [gasPrice, setGasPrice] = (0,react.useState)(0);
    const [maxFee, setMaxFee] = (0,react.useState)(0);
    const [priorityFee, setPriorityFee] = (0,react.useState)(0);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setGasOptionType(props?.gasOption ?? specs/* GasOptionType */.Qd.NORMAL);
            setGasLimit(props?.gasLimit ?? 0);
            setMinGasLimit(props?.minGasLimit ?? 0);
            setGasPrice(props?.gasPrice ?? 0);
            setMaxFee(props?.maxFee ?? 0);
            setPriorityFee(props?.priorityFee ?? 0);
        },
        onClose (props) {
            setGasOptionType(props?.gasOption ?? specs/* GasOptionType */.Qd.NORMAL);
            setGasLimit(props?.gasLimit ?? 0);
            setMinGasLimit(props?.minGasLimit ?? 0);
            setGasPrice(props?.gasPrice ?? 0);
            setMaxFee(props?.maxFee ?? 0);
            setPriorityFee(props?.priorityFee ?? 0);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {
        open: true,
        onClose: ()=>dispatch?.close(),
        gasOption: gasOptionType,
        setGasLimit: setGasLimit,
        gasLimit: gasLimit,
        minGasLimit: minGasLimit,
        setGasOptionType: setGasOptionType,
        gasPrice: gasPrice,
        maxFee: maxFee,
        priorityFee: priorityFee
    });
});


/***/ }),

/***/ 3327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ LeavePageConfirmModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/LeavePageConfirmModal/LeavePageConfirm.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        root: {
            width: 384,
            background: theme.palette.maskColor.bottom,
            position: props.positionStyle.position,
            top: props.positionStyle.top,
            right: props.positionStyle.right
        },
        content: {
            padding: theme.spacing(1, 2, 2, 2),
            minHeight: 148,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            background: theme.palette.maskColor.bottom
        },
        actions: {
            padding: theme.spacing(1, 2, 2, 2)
        }
    };
});
const positionStyleMap = {
    center: {},
    'top-right': {
        position: 'absolute',
        top: 0,
        right: 0
    }
};
function LeavePageConfirm(props) {
    const { open, onClose, info, openDashboard } = props;
    const { classes } = useStyles({
        positionStyle: positionStyleMap[info?.position ?? 'center']
    });
    const onClick = (0,react.useCallback)(()=>{
        if (!info) return;
        if (info.target !== 'dashboard') return;
        const isRoute = !!(0,head/* default */.Z)(Object.entries(Routes/* DashboardRoutes */.vq).filter(([_, value])=>value.toLowerCase() === info.url.toLowerCase()));
        if (!isRoute) return;
        openDashboard?.(info.url);
        onClose();
    }, [
        info,
        onClose,
        openDashboard
    ]);
    return open ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        disableTitleBorder: true,
        open: open,
        classes: {
            paper: classes.root,
            dialogTitle: classes.header
        },
        maxWidth: "sm",
        onClose: onClose,
        title: info?.title,
        titleBarIconStyle: "close",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                classes: {
                    root: classes.content
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: info?.text
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                classes: {
                    root: classes.actions
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    width: "100%",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "primary",
                        style: {
                            borderRadius: 20
                        },
                        onClick: onClick,
                        children: info?.actionHint
                    })
                })
            })
        ]
    }) : null;
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/LeavePageConfirmModal/index.tsx




const LeavePageConfirmModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [openDashboard, setOpenDashboard] = (0,react.useState)();
    const [info, setInfo] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setOpenDashboard(()=>props.openDashboard);
            setInfo(props.info);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LeavePageConfirm, {
        info: info,
        openDashboard: openDashboard,
        open: true,
        onClose: ()=>dispatch?.close()
    });
});


/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ PersonaSelectPanelModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaSelectPanel/index.tsx + 4 modules
var PersonaSelectPanel = __webpack_require__(30018);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/PersonaSelectPanelModal/PersonaSelectPanelDialog.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        root: {
            width: 384,
            height: 386,
            padding: theme.spacing(1),
            background: theme.palette.maskColor.bottom,
            position: props.positionStyle.position,
            top: props.positionStyle.top,
            right: props.positionStyle.right
        },
        content: {
            padding: theme.spacing(0, 2, 2, 2),
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            background: `${theme.palette.maskColor.bottom} !important`
        }
    };
});
const positionStyleMap = {
    center: {},
    'top-right': {
        position: 'absolute',
        top: 0,
        right: 0
    }
};
function PersonaSelectPanelDialog({ open, enableVerify = true, position = 'center', finishTarget, onClose }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles({
        positionStyle: positionStyleMap[position]
    });
    return open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        disableTitleBorder: true,
        open: open,
        classes: {
            paper: classes.root,
            dialogTitle: classes.header
        },
        maxWidth: "sm",
        onClose: onClose,
        title: t.applications_persona_title(),
        titleBarIconStyle: "close",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            classes: {
                root: classes.content
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSelectPanel/* PersonaSelectPanel */.$, {
                enableVerify: enableVerify,
                finishTarget: finishTarget,
                onClose: onClose
            })
        })
    }) : null;
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/PersonaSelectPanelModal/index.tsx




const PersonaSelectPanelModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [finishTarget, setFinishTarget] = (0,react.useState)();
    const [position, setPosition] = (0,react.useState)();
    const [enableVerify, setEnableVerify] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setFinishTarget(props.finishTarget);
            setPosition(props.position);
            setEnableVerify(props.enableVerify);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSelectPanelDialog, {
        open: true,
        onClose: ()=>dispatch?.close(),
        finishTarget: finishTarget,
        position: position,
        enableVerify: enableVerify
    });
});


/***/ }),

/***/ 3900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ SelectNonFungibleContractModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleCollections.ts
var useNonFungibleCollections = __webpack_require__(26896);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensCollect.ts
var isLensCollect = __webpack_require__(42097);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensFollower.ts
var isLensFollower = __webpack_require__(63623);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectNonFungibleContractModal/ContractItem.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        listItem: {
            padding: '14px 12px',
            borderRadius: theme.spacing(1),
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'light' ? '0px 0px 20px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg,
                cursor: 'pointer'
            }
        },
        logo: {
            borderRadius: '100%',
            overflow: 'hidden',
            flexShrink: 0,
            width: 36,
            height: 36,
            marginRight: 8,
            boxShadow: theme.palette.mode === 'light' ? '0 6px 12px rgba(0,0,0,0.2)' : undefined
        },
        contractName: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 400,
            color: theme.palette.maskColor.second,
            display: 'flex',
            alignItems: 'center'
        },
        linkIcon: {
            marginLeft: theme.spacing(0.5),
            color: 'inherit'
        },
        contractSymbol: {
            fontSize: 16,
            fontWeight: 700,
            lineHeight: '20px'
        },
        balance: {
            marginLeft: 'auto'
        }
    }));
const ContractItem = /*#__PURE__*/ (0,react.memo)(function ContractItem({ pluginID, className, collection, onSelect, ...rest }) {
    const { classes, cx } = useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: cx(classes.listItem, className),
        onClick: ()=>onSelect?.(collection),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                className: classes.logo,
                src: collection.iconURL || '',
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskAvatar, {
                    size: 36
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.contractSymbol,
                        children: collection.symbol
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.contractName,
                        children: [
                            collection.name,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: Others.explorerResolver.addressLink(collection.chainId, collection.address),
                                className: classes.linkIcon,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: (e)=>e.stopPropagation(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 16
                                })
                            })
                        ]
                    })
                ]
            }),
            collection.balance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.balance,
                children: collection.balance
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectNonFungibleContractModal/SelectNonFungibleContractDialog.tsx


















const SelectNonFungibleContractDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            display: 'flex',
            minHeight: 564,
            boxSizing: 'border-box',
            padding: theme.spacing(2, 0, 0),
            backgroundColor: theme.palette.maskColor.bottom,
            flexDirection: 'column',
            overflow: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        contractList: {
            overflow: 'auto',
            overscrollBehavior: 'contain',
            padding: theme.spacing(2, 2, 7),
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        contractItem: {
            marginBottom: theme.spacing(2)
        },
        toolbar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: theme.spacing(7),
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: theme.spacing(0, 0, 1.5, 1.5)
        }
    }));
const SelectNonFungibleContractDialog = /*#__PURE__*/ (0,react.memo)(({ open, pluginID, chainId, onClose, onSubmit, schemaType })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = SelectNonFungibleContractDialog_useStyles();
    const [keyword, setKeyword] = (0,react.useState)('');
    const handleClear = ()=>{
        setKeyword('');
    };
    const { data: collections = constants/* EMPTY_LIST */.rP, isLoading, isError, refetch } = (0,useNonFungibleCollections/* useNonFungibleCollections */.e)(pluginID, {
        chainId,
        schemaType
    });
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const account = (0,useAccount/* useAccount */.m)().toLowerCase();
    const customizedCollectionMap = (0,use_subscription.useSubscription)(Token?.nonFungibleCollectionMap ?? Subscriptions/* EMPTY_ENTRY */.$n);
    // Convert StorageCollection to NonFungibleCollection
    const customizedCollections = (0,react.useMemo)(()=>{
        const list = customizedCollectionMap[account];
        if (!list) return constants/* EMPTY_LIST */.rP;
        const addresses = (0,compact/* default */.Z)(collections.map((x)=>x.address?.toLowerCase()));
        return list.filter((x)=>!addresses.includes(x.contract.address)).map(({ contract, tokenIds })=>({
                chainId: contract.chainId,
                name: contract.name,
                address: contract.address,
                slug: '',
                symbol: contract.symbol,
                iconURL: contract.iconURL,
                balance: tokenIds.length,
                source: contract.source
            }));
    }, [
        customizedCollectionMap[account],
        collections
    ]);
    const filteredCollections = (0,react.useMemo)(()=>{
        const allCollections = [
            ...customizedCollections,
            ...collections
        ];
        return pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? allCollections.filter((x)=>{
            return x.address && x.schema === types/* SchemaType */.XQ.ERC721 && !(0,isLensCollect/* isLensCollect */.C)(x.name) && !(0,isLensFollower/* isLensFollower */.a)(x.name) && !(0,address/* isLensProfileAddress */._u)(x.address);
        }) : allCollections;
    }, [
        customizedCollections,
        collections,
        pluginID
    ]);
    const fuse = (0,react.useMemo)(()=>{
        return entry/* FuseNonFungibleCollection */.hT.create(filteredCollections);
    }, [
        filteredCollections
    ]);
    const searchResults = (0,react.useMemo)(()=>{
        if (!keyword) return filteredCollections;
        return fuse.search(keyword).map((x)=>x.item);
    }, [
        fuse,
        keyword,
        filteredCollections
    ]);
    const handleAddCollectibles = (0,react.useCallback)(async ()=>{
        const results = await modals/* AddCollectiblesModal */.NB.openAndWaitForClose({
            pluginID,
            chainId
        });
        if (!results) return;
        const [contract, tokenIds] = results;
        await Token?.addNonFungibleTokens?.(account, contract, tokenIds);
    }, [
        account,
        pluginID,
        chainId
    ]);
    const handleSelectCollection = (0,react.useCallback)((collection)=>{
        onSubmit?.(collection);
        onClose?.();
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        titleBarIconStyle: Sniffings/* Sniffings */.Y.is_dashboard_page ? 'close' : 'back',
        open: open,
        onClose: onClose,
        title: t.select_collectibles(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            classes: {
                root: classes.content
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    px: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                        value: keyword,
                        onChange: (evt)=>setKeyword(evt.target.value),
                        placeholder: t.collectible_search_placeholder(),
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
                                onClick: handleClear
                            }) : null
                        }
                    })
                }),
                isError ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
                    height: 500,
                    onRetry: refetch
                }) : isLoading && !collections.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
                    height: 500
                }) : !searchResults.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                    height: 500,
                    children: t.no_results()
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    className: classes.contractList,
                    children: searchResults.map((collection)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ContractItem, {
                            className: classes.contractItem,
                            pluginID: pluginID,
                            collection: collection,
                            onSelect: handleSelectCollection
                        }, collection.address))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    className: classes.toolbar,
                    direction: "row",
                    justifyContent: "center",
                    onClick: handleAddCollectibles,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Avatar, {
                            size: 24
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            ml: 2,
                            fontWeight: 700,
                            children: t.add_collectibles()
                        })
                    ]
                })
            ]
        })
    });
});
SelectNonFungibleContractDialog.displayName = 'SelectNonFungibleContractDialog';

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectNonFungibleContractModal/index.tsx





const SelectNonFungibleContractModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [pluginID, setPluginID] = (0,react.useState)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const [chainId, setChainId] = (0,react.useState)();
    const [schemaType, setSchemaType] = (0,react.useState)();
    const [title, setTitle] = (0,react.useState)();
    const [onSubmit, setOnSubmit] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setPluginID(props.pluginID);
            setChainId(props.chainId);
            setSchemaType(props.schemaType);
            setTitle(props.title);
            setOnSubmit(()=>props.onSubmit);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNonFungibleContractDialog, {
        open: true,
        onClose: ()=>dispatch?.close(),
        title: title,
        schemaType: schemaType,
        chainId: chainId,
        pluginID: pluginID,
        onSubmit: onSubmit
    });
});


/***/ }),

/***/ 80755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ ShareSelectNetworkModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/encryption/src/payload/types.ts
var types = __webpack_require__(83159);
// EXTERNAL MODULE: ./packages/encryption/src/network-encoding/index.ts
var network_encoding = __webpack_require__(53218);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(87565);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(99371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ShareSelectNetwork/ShareModal.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            display: 'flex',
            padding: theme.spacing(2),
            height: 400,
            flexDirection: 'column'
        },
        textBorder: {
            flex: 1,
            border: `1px solid ${theme.palette.maskColor.borderSecondary}`,
            borderRadius: 8,
            padding: 8
        },
        title: {
            paddingTop: 16,
            paddingBottom: 0,
            fontWeight: 700
        },
        network: {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 8,
            paddingBottom: 8
        },
        actions: {
            gap: 12,
            display: 'flex',
            paddingTop: 8
        },
        button: {
            flex: 1
        }
    }));
const SharedUrl = {
    [types/* EncryptPayloadNetwork */.FL.Unknown]: undefined,
    [types/* EncryptPayloadNetwork */.FL.Instagram]: undefined,
    [types/* EncryptPayloadNetwork */.FL.Minds]: undefined,
    [types/* EncryptPayloadNetwork */.FL.Twitter]: (message)=>{
        const url = (0,dist/* default */.ZP)('https://twitter.com/intent/tweet', {
            text: message
        });
        return new URL(url);
    },
    [types/* EncryptPayloadNetwork */.FL.Facebook]: (message)=>{
        const url = (0,dist/* default */.ZP)('https://www.facebook.com/sharer/sharer.php', {
            quote: message,
            u: 'mask.io'
        });
        return new URL(url);
    }
};
const ShareSelectNetwork = /*#__PURE__*/ (0,react.memo)(({ open, onClose, message })=>{
    const { classes } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const [network, setNetwork] = (0,react.useState)(types/* EncryptPayloadNetwork */.FL.Twitter);
    const encodedText = (0,react.useMemo)(()=>{
        if (!message) return;
        const text = (0,network_encoding/* encodeByNetwork */.a1)(network, message);
        return text;
    }, [
        message,
        network
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                        size: 17.5,
                        text: encodedText ?? ''
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.textBorder,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            wordBreak: 'break-all'
                        },
                        children: encodedText
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.share_to_social_networks()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioGroup/* default */.Z, {
                    className: classes.network,
                    defaultValue: network,
                    onChange: (e)=>{
                        const network = Number.parseInt(e.currentTarget.value, 10);
                        setNetwork(network);
                    },
                    children: Object.entries(SharedUrl).filter(([_, converter])=>converter).map(([site])=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                            label: constants/* SOCIAL_MEDIA_NAME */.OZ[(0,types/* encryptPayloadNetworkToDomain */.k0)(Number.parseInt(site, 10))],
                            value: site,
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                                color: "primary",
                                value: site,
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonUnChecked, {
                                    color: theme.palette.maskColor.line,
                                    size: 18
                                }),
                                checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RadioButtonChecked, {
                                    size: 18
                                })
                            })
                        }, site);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.actions,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            variant: "roundedOutlined",
                            onClick: onClose,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            variant: "roundedContained",
                            disabled: !encodedText,
                            onClick: ()=>{
                                if (!encodedText) return;
                                (0,open_window/* openWindow */.x)(SharedUrl[network]?.(encodedText));
                                onClose();
                            },
                            children: t.share()
                        })
                    ]
                })
            ]
        })
    });
});
ShareSelectNetwork.displayName = 'ShareSelectNetworkDialog';

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/ShareSelectNetwork/index.tsx




const ShareSelectNetworkModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [message, setMessage] = (0,react.useState)(null);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setMessage(props.message);
        }
    });
    if (!open) return null;
    if (!message) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareSelectNetwork, {
        open: true,
        onClose: ()=>dispatch?.close(),
        message: message
    });
});


/***/ }),

/***/ 87113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ TransactionConfirmModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/TokenTransactionConfirmModal/index.tsx








const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        confirmDialog: {
            width: 420,
            height: 420,
            backgroundImage: 'none'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems: 'center',
            padding: theme.spacing(3),
            boxSizing: 'border-box',
            color: theme.palette.text.primary,
            textAlign: 'center',
            fontSize: 18
        },
        congratulation: {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            color: theme.palette.maskColor.success
        },
        actions: {
            padding: theme.spacing(0, 3, 3)
        },
        nftContainer: {
            height: 126,
            width: 126
        },
        nftName: {
            display: 'flex',
            marginTop: 10
        },
        nftMessage: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        messageText: {
            fontSize: 16,
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            lineHeight: '20px'
        },
        nftMessageText: {
            fontSize: 16,
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            lineHeight: '20px'
        },
        tokenIcon: {
            margin: 'auto',
            border: `1px ${theme.palette.maskColor.secondaryLine} solid`
        }
    }));
function TokenTransactionConfirmModal({ className, confirmText, onConfirm, children, messageTextForNFT, messageTextForFT, amount, tokenType, token, nonFungibleTokenAddress, nonFungibleTokenId, onClose, ...rest }) {
    const { classes } = useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    confirmText = confirmText || 'Confirm';
    const isToken = tokenType === specs/* TokenType */.iv.Fungible;
    const { data: nonFungibleToken } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(undefined, nonFungibleTokenAddress, nonFungibleTokenId ?? '');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.confirmDialog
        },
        BackdropProps: {
            style: {
                opacity: 0
            }
        },
        titleBarIconStyle: "close",
        onClose: onClose,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: isToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                            className: classes.tokenIcon,
                            address: token?.address || '',
                            logoURL: token?.logoURL,
                            name: token?.symbol ?? token?.name,
                            chainId: token?.chainId,
                            sx: {
                                fontSize: '2.75em'
                            },
                            size: 90
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.congratulation,
                            mt: "19.5px",
                            children: t.congratulations()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.messageText,
                            mt: "41px",
                            children: messageTextForFT
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.nftMessage,
                    children: [
                        nonFungibleToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.nftContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                                        url: nonFungibleToken.metadata?.mediaURL || nonFungibleToken.metadata?.imageURL
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.nftName,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            fontWeight: 700,
                                            fontSize: 20,
                                            lineHeight: "24px",
                                            children: nonFungibleToken?.metadata?.name
                                        }),
                                        nonFungibleToken.collection?.verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Verification, {
                                            size: 21.43
                                        }) : null
                                    ]
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.congratulation,
                            mt: "24px",
                            children: t.congratulations()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.nftMessageText,
                            mt: "14px",
                            children: messageTextForNFT
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    onClick: onConfirm,
                    children: confirmText
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/TokenTransactionConfirmModal/TokenTransactionConfirm.tsx



function TransactionConfirm({ onSubmit, shareText, share, ...rest }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const handleConfirm = (0,react.useCallback)(()=>{
        share?.(shareText);
        onSubmit?.();
    }, [
        shareText,
        onSubmit,
        share
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTransactionConfirmModal, {
        ...rest,
        messageTextForNFT: rest.messageTextForNFT,
        messageTextForFT: rest.messageTextForFT,
        title: rest.title,
        confirmText: share ? t.share() : t.ok(),
        onConfirm: handleConfirm
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/TokenTransactionConfirmModal/index.tsx





const TransactionConfirmModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [shareText, setShareText] = (0,react.useState)('');
    const [onSubmit, setOnSubmit] = (0,react.useState)();
    const [share, setShare] = (0,react.useState)();
    const [amount, setAmount] = (0,react.useState)(null);
    const [token, setToken] = (0,react.useState)();
    const [tokenType, setTokenType] = (0,react.useState)(specs/* TokenType */.iv.Fungible);
    const [messageTextForNFT, setMessageTextForNFT] = (0,react.useState)();
    const [messageTextForFT, setMessageTextForFT] = (0,react.useState)();
    const [title, setTitle] = (0,react.useState)();
    const [nonFungibleTokenId, setNonFungibleTokenId] = (0,react.useState)();
    const [nonFungibleTokenAddress, setNonFungibleTokenAddress] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setShareText(props.shareText);
            setOnSubmit(()=>props.onSubmit);
            setShare(()=>props.share);
            setAmount(props.amount);
            setToken(props.token);
            setTokenType(props.tokenType);
            setTitle(props.title);
            setMessageTextForFT(props.messageTextForFT);
            setMessageTextForNFT(props.messageTextForNFT);
            setNonFungibleTokenId(props.nonFungibleTokenId ?? undefined);
            setNonFungibleTokenAddress(props.nonFungibleTokenAddress ?? undefined);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionConfirm, {
        shareText: shareText,
        open: true,
        onClose: ()=>dispatch?.close(),
        amount: amount,
        tokenType: tokenType,
        nonFungibleTokenId: nonFungibleTokenId,
        nonFungibleTokenAddress: nonFungibleTokenAddress,
        token: token,
        onSubmit: onSubmit,
        share: share,
        title: title,
        messageTextForFT: messageTextForFT,
        messageTextForNFT: messageTextForNFT
    });
});


/***/ }),

/***/ 97790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ TransactionSnackbarModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Collapse/collapseClasses.js
var collapseClasses = __webpack_require__(61212);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/notistack@2.0.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8_react-dom_vt4c2flfh7labhvk5vot2goyiq/node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(45190);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            width: '100%!important',
            maxWidth: '100%!important',
            top: '0!important',
            backdropFilter: 'blur(5px)',
            [`& .${collapseClasses/* default */.Z.wrapper}`]: {
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
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.5),
            color: theme.palette.maskColor.white
        },
        error: {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.5),
            color: theme.palette.maskColor.white
        },
        warning: {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.5),
            color: theme.palette.maskColor.white
        },
        // eslint-disable-next-line tss-unused-classes/unused-classes
        default: {},
        info: {}
    }));
const PopupSnackbarProvider = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function PopupSnackbarProvider(props) {
    const ref = useRef(null);
    const { classes } = useStyles();
    return /*#__PURE__*/ _jsx(SnackbarProvider, {
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
})));
const PopupSnackbarContent = /*#__PURE__*/ (0,react.forwardRef)(({ id, title, message, variant }, ref)=>{
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(notistack_esm/* SnackbarContent */.No, {
        className: cx(classes.content, classes[variant]),
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                component: "div",
                children: title
            }),
            typeof message === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.message,
                children: message
            }) : message
        ]
    }, id);
});
function usePopupCustomSnackbar() {
    const { enqueueSnackbar, closeSnackbar } = (0,notistack_esm/* useSnackbar */.Ds)();
    const showSnackbar = (0,react.useCallback)((text, options = {
        variant: 'success',
        autoHideDuration: 2000
    })=>{
        const { processing, message, variant, ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupSnackbarContent, {
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

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/TransactionSnackbar/TransactionSnackbar.tsx










const TransactionSnackbar_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    link: {
        display: 'flex',
        alignItems: 'center'
    }
});
function TransactionSnackbar({ pluginID }) {
    const { classes } = TransactionSnackbar_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { showSnackbar, closeSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const { showSnackbar: showPopupSnackbar, closeSnackbar: closePopupSnackbar } = usePopupCustomSnackbar();
    const snackbarKeyRef = (0,react.useRef)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const [errorInfo, setErrorInfo] = (0,react.useState)();
    const [progress, setProgress] = (0,react.useState)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    const { TransactionFormatter, TransactionWatcher } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    (0,react.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('error', (error, request)=>{
            setErrorInfo({
                error,
                request
            });
        });
        return ()=>{
            off?.();
        };
    }, [
        TransactionWatcher
    ]);
    (0,react.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('progress', (chainId, txHash, status, transaction)=>{
            if (!transaction || !pluginID) return;
            setProgress({
                chainId,
                status,
                txHash,
                transaction
            });
        });
        return ()=>{
            off?.();
        };
    }, [
        TransactionWatcher,
        pluginID
    ]);
    (0,react.useEffect)(()=>{
        setProgress(undefined);
        setErrorInfo(undefined);
    }, [
        chainId
    ]);
    const resolveSnackbarConfig = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
        [specs.TransactionStatusType.NOT_DEPEND]: {
            processing: true,
            variant: 'default',
            message: t.plugin_wallet_snackbar_wait_for_confirming()
        },
        [specs.TransactionStatusType.SUCCEED]: {
            processing: false,
            variant: 'success',
            message: t.plugin_wallet_snackbar_confirmed()
        },
        [specs.TransactionStatusType.FAILED]: {
            processing: false,
            variant: 'error',
            message: t.plugin_wallet_snackbar_failed()
        }
    }, {});
    const showSingletonSnackbar = (0,react.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) Sniffings/* Sniffings */.Y.is_popup_page ? closePopupSnackbar(snackbarKeyRef.current) : closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = Sniffings/* Sniffings */.Y.is_popup_page ? showPopupSnackbar(title, options) : showSnackbar(title, options);
        return ()=>{
            Sniffings/* Sniffings */.Y.is_popup_page ? closePopupSnackbar(snackbarKeyRef.current) : closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar,
        showPopupSnackbar,
        closePopupSnackbar
    ]);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!progress) return;
        const computed = await TransactionFormatter?.formatTransaction?.(progress.chainId, progress.transaction, progress.txHash);
        if (!computed || computed.title === 'followWithSig' || computed.title === 'burnWithSig') return;
        showSingletonSnackbar(progress.status === specs.TransactionStatusType.SUCCEED ? computed.snackbar?.successfulTitle ?? computed.title : computed.title, {
            ...resolveSnackbarConfig(progress.status),
            ...{
                message: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    sx: {
                        wordBreak: 'break-word'
                    },
                    className: classes.link,
                    color: "inherit",
                    href: Others.explorerResolver.transactionLink?.(progress.chainId, progress.txHash),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        progress.status === specs.TransactionStatusType.SUCCEED ? computed.snackbar?.successfulDescription ?? computed.description : computed.description,
                        ' ',
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            size: 16,
                            sx: {
                                ml: 0.5
                            }
                        })
                    ]
                })
            }
        });
    }, [
        progress
    ]);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!errorInfo) return;
        const transaction = errorInfo?.request?.params?.[0];
        const computed = transaction ? await TransactionFormatter?.formatTransaction?.(chainId, transaction) : undefined;
        const title = computed?.snackbar?.failedTitle ?? computed?.title;
        const message = errorInfo?.error.isRecognized ? errorInfo?.error.message : computed?.snackbar?.failedDescription;
        if (!title) return;
        if (title === 'Claim your Airdrop' && (errorInfo?.error.message.includes('Transaction was rejected') || errorInfo?.error.message.includes('Signature canceled') || errorInfo?.error.message.includes('User rejected the request') || errorInfo?.error.message.includes('User rejected transaction'))) return;
        const snackbarConfig = resolveSnackbarConfig(specs.TransactionStatusType.FAILED);
        showSingletonSnackbar(title, {
            ...snackbarConfig,
            message: message ?? snackbarConfig.message
        });
        setErrorInfo(undefined);
    }, [
        JSON.stringify(errorInfo),
        chainId
    ]);
    return null;
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/TransactionSnackbar/index.tsx




const TransactionSnackbarModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    (0,useSingletonModal/* useSingletonModal */.g)(ref);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionSnackbar, {
        pluginID: props.pluginID
    });
});


/***/ }),

/***/ 43525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ WalletConnectQRCodeModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(14743);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletConnectQRCodeModal/QRCodeModal.tsx




const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))',
            backdropFilter: 'blur(20px)'
        },
        tip: {
            fontSize: 12,
            marginTop: '10px'
        }
    }));
function QRCodeModal({ uri }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles();
    const style = {
        width: '80%',
        maxWidth: 361,
        display: 'block',
        margin: 'auto',
        borderRadius: 16
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCode/* QRCode */.s, {
                text: uri,
                canvasProps: {
                    style
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tip,
                color: "textSecondary",
                children: t.wallet_connect_qr_code_dialog_content()
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletConnectQRCodeModal/QRCodeDialog.tsx





const QRCodeDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
function QRCodeDialog({ uri, open, onClose }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = QRCodeDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t.wallet_connect_qr_code_dialog_title(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.container,
            children: uri ? /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModal, {
                uri: uri
            }) : null
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletConnectQRCodeModal/index.tsx




const WalletConnectQRCodeModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [uri, setURI] = (0,react.useState)('');
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setURI(props.uri);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeDialog, {
        uri: uri,
        open: true,
        onClose: ()=>dispatch?.close()
    });
});


/***/ }),

/***/ 80634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ WalletStatusModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/dialogClasses.js
var dialogClasses = __webpack_require__(54677);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBox/index.tsx + 5 modules
var WalletStatusBox = __webpack_require__(40025);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletStatusModal/WalletStatusDialog.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            padding: theme.spacing(2),
            overflowX: 'hidden'
        },
        inVisible: {
            visibility: 'hidden'
        },
        dialog: {
            [`.${dialogClasses/* default */.Z.paper}`]: {
                minHeight: 'unset !important'
            }
        }
    }));
function WalletStatusDialog({ open, onClose, isHidden = false, setHidden }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles();
    // #region remote controlled dialog logic
    const closeDialog = (0,react.useCallback)(()=>{
        onClose();
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
            reason: 'timeline',
            open: false
        });
    }, [
        onClose
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t.plugin_wallet_dialog_title(),
        open: open,
        onClose: closeDialog,
        maxWidth: "sm",
        className: isHidden ? classes.inVisible : classes.dialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {
                showPendingTransaction: true,
                closeDialog: ()=>{
                    setHidden(true);
                    onClose();
                }
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletStatusModal/index.tsx




const WalletStatusModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [isHidden, setHidden] = (0,react.useState)(false);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setHidden(false);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusDialog, {
        open: true,
        setHidden: setHidden,
        onClose: ()=>dispatch?.close(),
        isHidden: isHidden
    });
});


/***/ }),

/***/ 65715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nK: () => (/* binding */ Modals)
/* harmony export */ });
/* unused harmony export SwapPageModals */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);
/* harmony import */ var _WalletStatusModal_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80634);
/* harmony import */ var _SelectProviderModal_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18049);
/* harmony import */ var _WalletConnectQRCodeModal_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43525);
/* harmony import */ var _WalletRiskWarningModal_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95265);
/* harmony import */ var _ConnectWalletModal_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86457);
/* harmony import */ var _LeavePageConfirmModal_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3327);
/* harmony import */ var _ApplicationBoardModal_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19523);
/* harmony import */ var _GasSettingModal_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11783);
/* harmony import */ var _TransactionSnackbar_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97790);
/* harmony import */ var _ConfirmModal_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47919);
/* harmony import */ var _TokenTransactionConfirmModal_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87113);
/* harmony import */ var _SelectNonFungibleContractModal_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3900);
/* harmony import */ var _SelectFungibleTokenModal_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2947);
/* harmony import */ var _SelectAdvancedSettingsDialog_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19612);
/* harmony import */ var _AddCollectiblesModal_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(79921);
/* harmony import */ var _PersonaSelectPanelModal_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(330);
/* harmony import */ var _ShareSelectNetwork_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(80755);
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25127);
/* harmony import */ var _ConfirmDialog_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37644);

























const Modals = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Modals(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .RootWeb3ContextProvider */ .t2, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConnectWalletModal_index_js__WEBPACK_IMPORTED_MODULE_3__/* .ConnectWalletModal */ .B, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .ConnectWalletModal */ .Bp.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletConnectQRCodeModal_index_js__WEBPACK_IMPORTED_MODULE_5__/* .WalletConnectQRCodeModal */ .S, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .WalletConnectQRCodeModal */ .SK.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConfirmDialog_index_js__WEBPACK_IMPORTED_MODULE_6__/* .ConfirmDialogComponent */ .$, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .ConfirmDialog */ .QH.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectProviderModal_index_js__WEBPACK_IMPORTED_MODULE_7__/* .SelectProviderModal */ .g, {
                createWallet: props.createWallet,
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .SelectProviderModal */ .ge.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletStatusModal_index_js__WEBPACK_IMPORTED_MODULE_8__/* .WalletStatusModal */ .L, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .WalletStatusModal */ .L9.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletRiskWarningModal_index_js__WEBPACK_IMPORTED_MODULE_9__/* .WalletRiskWarningModal */ .L, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .WalletRiskWarningModal */ .L5.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LeavePageConfirmModal_index_js__WEBPACK_IMPORTED_MODULE_10__/* .LeavePageConfirmModal */ .t, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .LeavePageConfirmModal */ .tN.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ApplicationBoardModal_index_js__WEBPACK_IMPORTED_MODULE_11__/* .ApplicationBoardModal */ .G, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .ApplicationBoardModal */ .G5.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GasSettingModal_index_js__WEBPACK_IMPORTED_MODULE_12__/* .GasSettingModal */ .f, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .GasSettingModal */ .fU.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransactionSnackbar_index_js__WEBPACK_IMPORTED_MODULE_13__/* .TransactionSnackbarModal */ .j, {
                pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .NetworkPluginID */ .F.PLUGIN_EVM,
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .TransactionSnackbar */ .eg.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TokenTransactionConfirmModal_index_js__WEBPACK_IMPORTED_MODULE_15__/* .TransactionConfirmModal */ .l, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .TransactionConfirmModal */ .l$.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConfirmModal_index_js__WEBPACK_IMPORTED_MODULE_16__/* .ConfirmModal */ .s, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .ConfirmModal */ .sm.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectNonFungibleContractModal_index_js__WEBPACK_IMPORTED_MODULE_17__/* .SelectNonFungibleContractModal */ .r, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .SelectNonFungibleContractModal */ .rV.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectFungibleTokenModal_index_js__WEBPACK_IMPORTED_MODULE_18__/* .SelectFungibleTokenModal */ .g, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .SelectFungibleTokenModal */ .gw.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectAdvancedSettingsDialog_index_js__WEBPACK_IMPORTED_MODULE_19__/* .SelectGasSettingsModal */ .e, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .SelectGasSettingsModal */ .eq.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddCollectiblesModal_index_js__WEBPACK_IMPORTED_MODULE_20__/* .AddCollectiblesModal */ .N, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .AddCollectiblesModal */ .NB.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PersonaSelectPanelModal_index_js__WEBPACK_IMPORTED_MODULE_21__/* .PersonaSelectPanelModal */ .e, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .PersonaSelectPanelModal */ .eX.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ApplicationBoardModal_index_js__WEBPACK_IMPORTED_MODULE_11__/* .ApplicationBoardSettingsModal */ .P, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .ApplicationBoardSettingsModal */ .Ps.register
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShareSelectNetwork_index_js__WEBPACK_IMPORTED_MODULE_22__/* .ShareSelectNetworkModal */ .F, {
                ref: _modals_js__WEBPACK_IMPORTED_MODULE_4__/* .ShareSelectNetworkModal */ .FT.register
            })
        ]
    });
});
const SwapPageModals = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function SwapPageModals() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(ConnectWalletModal, {
                ref: modals.ConnectWalletModal.register
            }),
            /*#__PURE__*/ _jsx(SelectProviderModal, {
                createWallet: noop,
                ref: modals.SelectProviderModal.register
            }),
            /*#__PURE__*/ _jsx(WalletRiskWarningModal, {
                ref: modals.WalletRiskWarningModal.register
            }),
            /*#__PURE__*/ _jsx(SelectFungibleTokenModal, {
                ref: modals.SelectFungibleTokenModal.register
            }),
            /*#__PURE__*/ _jsx(SelectGasSettingsModal, {
                ref: modals.SelectGasSettingsModal.register
            })
        ]
    });
})));
// Common modals




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

/***/ 54928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useCurrentPersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77219);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67101);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3765);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65734);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25127);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);






const DEFAULT_PERSONA_CONNECT_STATUS = {
    action: undefined,
    currentPersona: undefined,
    connected: false,
    hasPersona: false,
    verified: false,
    proof: undefined
};
function useCurrentPersonaConnectStatus(personas, currentPersonaIdentifier, openDashboard, identity) {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    const create = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target, position, _, direct = false)=>{
        if (direct) {
            openDashboard?.(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardRoutes */ .vq.SignUpPersona);
        } else {
            _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_4__/* .LeavePageConfirmModal */ .tN.open({
                openDashboard,
                info: {
                    target: 'dashboard',
                    url: target ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardRoutes */ .vq.SignUpPersona,
                    text: t.applications_create_persona_hint(),
                    title: t.applications_create_persona_title(),
                    actionHint: t.applications_create_persona_action(),
                    position
                }
            });
        }
    }, []);
    const openPersonListDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((finishTarget, position, enableVerify = true)=>{
        _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_4__/* .PersonaSelectPanelModal */ .eX.open({
            finishTarget,
            position,
            enableVerify
        });
    }, []);
    const { value = DEFAULT_PERSONA_CONNECT_STATUS, loading, error, retry } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        const currentPersona = personas.find((x)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .isSamePersona */ .j1)(x, currentPersonaIdentifier));
        const currentProfile = currentPersona?.linkedProfiles.find((x)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .isSameProfile */ .ck)(x.identifier, identity?.identifier));
        // handle not have persona
        if (!currentPersona || !personas.length) {
            return {
                action: create,
                currentPersona: undefined,
                connected: false,
                hasPersona: false
            };
        }
        // handle had persona but not connect current site
        if (!currentProfile) {
            return {
                action: openPersonListDialog,
                currentPersona,
                connected: false,
                hasPersona: true
            };
        }
        // handle had persona and connected current site, then check the nextID
        try {
            const nextIDInfo = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryExistedBindingByPersona(currentPersona.identifier.publicKeyAsHex);
            const verifiedProfile = nextIDInfo?.proofs.find((x)=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .isSameProfile */ .ck)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveNextIDIdentityToProfile */ .Bm)(x.identity, x.platform), currentProfile?.identifier) && x.is_valid);
            return {
                action: verifiedProfile ? undefined : openPersonListDialog,
                currentPersona,
                connected: true,
                hasPersona: true,
                verified: !!verifiedProfile,
                proof: nextIDInfo?.proofs
            };
        } catch  {
            return {
                action: openPersonListDialog,
                currentPersona,
                connected: true,
                hasPersona: true
            };
        }
    }, [
        currentPersonaIdentifier,
        personas,
        identity?.identifier,
        create,
        openPersonListDialog
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const cleanPersonaChangedListener = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages */ .q.events.ownPersonaChanged.on(retry);
        const cleanProofsChangedListener = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages */ .q.events.ownProofChanged.on(retry);
        return ()=>{
            cleanPersonaChangedListener();
            cleanProofsChangedListener();
        };
    }, [
        retry
    ]);
    return {
        value,
        loading,
        retry,
        error
    };
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

/***/ 64149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Boundary),
/* harmony export */   b: () => (/* binding */ useBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const BoundaryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    boundaryRef: {
        current: null
    }
});
// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
const Boundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children })=>{
    const boundaryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            boundaryRef
        }), [
        boundaryRef.current
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoundaryContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
            ...children.props,
            ref: boundaryRef
        })
    });
});
Boundary.displayName = 'Boundary';
function useBoundary() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BoundaryContext);
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

/***/ 86999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useBoundedPopperProps)
/* harmony export */ });
/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64149);

function useBoundedPopperProps() {
    const { boundaryRef } = (0,_Components_index_js__WEBPACK_IMPORTED_MODULE_0__/* .useBoundary */ .b)();
    const tooltipPopperProps = {
        disablePortal: !!boundaryRef.current,
        placement: 'top',
        modifiers: [
            {
                name: 'flip',
                options: {
                    rootBoundary: boundaryRef.current,
                    boundary: boundaryRef.current
                }
            }
        ]
    };
    return tooltipPopperProps;
}


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

/***/ 26896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNonFungibleCollections)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67830);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38645);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNonFungibleCollections(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'non-fungible-collections',
            pluginID,
            account,
            options
        ],
        enabled: !!account,
        queryFn: async ()=>{
            if (!account) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .asyncIteratorToArray */ .S)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .pageableToIterator */ .T1)(async (indicator)=>{
                return Hub.getNonFungibleCollectionsByOwner(account, {
                    indicator,
                    size: 50,
                    networkPluginId: pluginID,
                    ...options
                });
            }));
        }
    });
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

/***/ 77432:
/***/ ((module) => {



/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 26991:
/***/ ((module) => {



module.exports = function encodeUtf8 (input) {
  var result = []
  var size = input.length

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point)
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD)
  }

  return new Uint8Array(result).buffer
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

/***/ 49199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ffc7ecebfd06176d5a6e.css";

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

/***/ 31369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useQueries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61941);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41026);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65295);
/* harmony import */ var _isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87167);
/* harmony import */ var _QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13110);
/* harmony import */ var _suspense_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29143);
'use client';









function useQueries({
  queries,
  context
}) {
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useQueryClient */ .NL)({
    context
  });
  const isRestoring = (0,_isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useIsRestoring */ .S)();
  const errorResetBoundary = (0,_QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useQueryErrorResetBoundary */ ._)();
  const defaultedQueries = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => queries.map(options => {
    const defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

    defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic';
    return defaultedOptions;
  }), [queries, queryClient, isRestoring]);
  defaultedQueries.forEach(query => {
    (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .ensureStaleTime */ .Fb)(query);
    (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__/* .ensurePreventErrorBoundaryRetry */ .pf)(query, errorResetBoundary);
  });
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useClearResetErrorBoundary */ .JN)(errorResetBoundary);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__/* .QueriesObserver */ .y(queryClient, defaultedQueries));
  const optimisticResult = observer.getOptimisticResult(defaultedQueries);
  (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => isRestoring ? () => undefined : observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_8__/* .notifyManager */ .V.batchCalls(onStoreChange)), [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, {
      listeners: false
    });
  }, [defaultedQueries, observer]);
  const shouldAtLeastOneSuspend = optimisticResult.some((result, index) => (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .shouldSuspend */ .SB)(defaultedQueries[index], result, isRestoring));
  const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
    const options = defaultedQueries[index];
    const queryObserver = observer.getObservers()[index];

    if (options && queryObserver) {
      if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .shouldSuspend */ .SB)(options, result, isRestoring)) {
        return (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .fetchOptimistic */ .j8)(options, queryObserver, errorResetBoundary);
      } else if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .willFetch */ .Z$)(result, isRestoring)) {
        void (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .fetchOptimistic */ .j8)(options, queryObserver, errorResetBoundary);
      }
    }

    return [];
  }) : [];

  if (suspensePromises.length > 0) {
    throw Promise.all(suspensePromises);
  }

  const observerQueries = observer.getQueries();
  const firstSingleResultWhichShouldThrow = optimisticResult.find((result, index) => {
    var _defaultedQueries$ind, _defaultedQueries$ind2;

    return (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__/* .getHasError */ .KJ)({
      result,
      errorResetBoundary,
      useErrorBoundary: (_defaultedQueries$ind = (_defaultedQueries$ind2 = defaultedQueries[index]) == null ? void 0 : _defaultedQueries$ind2.useErrorBoundary) != null ? _defaultedQueries$ind : false,
      query: observerQueries[index]
    });
  });

  if (firstSingleResultWhichShouldThrow != null && firstSingleResultWhichShouldThrow.error) {
    throw firstSingleResultWhichShouldThrow.error;
  }

  return optimisticResult;
}


//# sourceMappingURL=useQueries.mjs.map


/***/ })

}]);
//# sourceMappingURL=8757.js.map