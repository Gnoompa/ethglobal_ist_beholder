"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6189,7531,7015,5678],{

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ share),
/* harmony export */   EE: () => (/* binding */ __setSiteAdaptorContext__),
/* harmony export */   Ge: () => (/* binding */ getPostIdFromNewPostToast),
/* harmony export */   Ns: () => (/* binding */ lastRecognizedProfile),
/* harmony export */   P4: () => (/* binding */ getPostURL),
/* harmony export */   XD: () => (/* binding */ connectPersona),
/* harmony export */   Yg: () => (/* binding */ currentVisitingProfile),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   m$: () => (/* binding */ currentNextIDPlatform),
/* harmony export */   mO: () => (/* binding */ getUserIdentity),
/* harmony export */   oi: () => (/* binding */ postMessage)
/* harmony export */ });
/* unused harmony export getSearchedKeyword */
// This file will be virtualized in the future.
// Currently all plugins access the same value, but we can virtualize them in the future.
let lastRecognizedProfile;
let currentVisitingProfile;
let currentNextIDPlatform;
let currentPersonaIdentifier;
let getPostURL;
let share;
let getUserIdentity;
let getPostIdFromNewPostToast;
let postMessage;
let getSearchedKeyword;
let connectPersona;
function __setSiteAdaptorContext__(value) {
    ({ lastRecognizedProfile, currentVisitingProfile, currentNextIDPlatform, currentPersonaIdentifier, getPostURL, share, getUserIdentity, getPostIdFromNewPostToast, postMessage, getSearchedKeyword, connectPersona } = value);
}


/***/ }),

/***/ 53639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useSiteThemeMode)
/* harmony export */ });
/* harmony import */ var _utils_theme_color_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13326);

function useSiteThemeMode(theme) {
    const backgroundColor = (0,_utils_theme_color_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getBackgroundColor */ .dF)(document.body);
    const isDark = theme.palette.mode === 'dark';
    const isDarker = backgroundColor === 'rgb(0,0,0)';
    return isDark ? !isDarker ? 'dim' : 'dark' : 'light';
}


/***/ }),

/***/ 13326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _T: () => (/* binding */ isDark),
/* harmony export */   dF: () => (/* binding */ getBackgroundColor),
/* harmony export */   f2: () => (/* binding */ fromRGB),
/* harmony export */   wj: () => (/* binding */ shade),
/* harmony export */   xr: () => (/* binding */ toRGB)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47494);

function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join(',')})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function shade(channels, percentage) {
    return channels.map((c)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.floor(c * (100 + percentage) / 100), 0, 255));
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10)
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}


/***/ }),

/***/ 14448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(40262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Pageable/index.ts
var Pageable = __webpack_require__(38645);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useNonFungibleAssetsByCollection.ts



function useNonFungibleAssetsByCollection(address, pluginID, options) {
    const [assets, setAssets] = (0,react.useState)(constants/* EMPTY_LIST */.rP);
    const [done, setDone] = (0,react.useState)(false);
    const [loading, toggleLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)();
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, options);
    // create iterator
    const iterator = (0,react.useMemo)(()=>{
        setAssets(constants/* EMPTY_LIST */.rP);
        setDone(false);
        return (0,Pageable/* pageableToIterator */.T1)(async (indicator)=>{
            return Hub.getNonFungibleAssetsByCollection(address ?? '', {
                indicator,
                size: 50,
                ...options
            });
        });
    }, [
        Hub,
        address
    ]);
    const next = (0,react.useCallback)(async ()=>{
        if (!iterator || done) return;
        const batchResult = [];
        toggleLoading(true);
        try {
            for (const _ of Array.from({
                length: options?.size ?? 36
            })){
                const { value, done: iteratorDone } = await iterator.next();
                if (value instanceof Error) {
                    // Controlled error
                    setError(value.message);
                    break;
                } else {
                    if (iteratorDone) {
                        setDone(true);
                        break;
                    }
                    if (!iteratorDone && value) {
                        batchResult.push(value);
                    }
                }
            }
        } catch (error_) {
            // Uncontrolled error
            setError(error_);
            setDone(true);
        }
        toggleLoading(false);
        setAssets((pred)=>[
                ...pred,
                ...batchResult
            ].sort((a, b)=>Number(a.tokenId) - Number(b.tokenId)));
    }, [
        iterator,
        done
    ]);
    // Execute once after next update
    (0,react.useEffect)(()=>{
        if (next) next();
    }, [
        next
    ]);
    const retry = (0,react.useCallback)(()=>{
        setAssets(constants/* EMPTY_LIST */.rP);
        setDone(false);
    }, []);
    return {
        value: assets.filter((x)=>options?.chainId ? x.chainId === options?.chainId : true),
        next,
        loading,
        done,
        retry,
        error
    };
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/token.ts
var token = __webpack_require__(48289);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/token.ts
var helpers_token = __webpack_require__(77199);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(82124);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextOverflowTooltip/index.tsx
var TextOverflowTooltip = __webpack_require__(59134);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLens.ts
var isLens = __webpack_require__(40346);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/resolveImageURL.ts
var resolveImageURL = __webpack_require__(81438);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/NFTList/index.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { columns = 4, gap = 12 })=>{
    const isLight = theme.palette.mode === 'light';
    return {
        checkbox: {
            position: 'absolute',
            right: 0,
            top: 0
        },
        list: {
            gridGap: gap,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`
        },
        nftContainer: {
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            width: 126,
            height: 154,
            transition: 'all 0.2s ease',
            overflow: 'hidden',
            '&:hover': {
                backgroundColor: isLight ? theme.palette.background.paper : undefined,
                boxShadow: isLight ? '0px 4px 30px rgba(0, 0, 0, 0.1)' : undefined
            }
        },
        nftItem: {
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            padding: 0,
            flexDirection: 'column',
            userSelect: 'none'
        },
        disabled: {
            opacity: 0.5,
            cursor: 'not-allowed'
        },
        selected: {
            position: 'relative',
            '&::after': {
                position: 'absolute',
                border: `2px solid ${theme.palette.primary.main}`,
                content: '""',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                borderRadius: 12
            }
        },
        inactive: {
            opacity: 0.5
        },
        fallbackImage: {
            width: 30,
            height: 30
        },
        fallbackENSImage: {
            width: '100%',
            height: '100%'
        },
        image: {
            background: 'transparent !important',
            width: 126,
            height: 126
        },
        caption: {
            padding: theme.spacing(0.5),
            color: theme.palette.text.primary,
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        root: {
            width: 'auto',
            height: 'auto'
        }
    };
});
function NFTItem({ token, pluginID }) {
    const { classes } = useStyles({});
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    const caption = (0,isLens/* isLens */.s)(token.metadata?.name) ? token.metadata?.name : Others.formatTokenId(token.tokenId, 4);
    const onClick = (0,react.useCallback)(()=>{
        if (!token.chainId || !pluginID) return;
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.nonFungibleTokenDialogEvent.sendToLocal({
            open: true,
            chainId: token.chainId,
            pluginID,
            tokenId: token.tokenId,
            tokenAddress: token.address
        });
    }, [
        pluginID,
        token.chainId,
        token.tokenId,
        token.address
    ]);
    const fallbackImageURL = (0,resolveImageURL/* resolveImageURL */.y)(undefined, token.metadata?.name, token.collection?.name, token.contract?.address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.nftContainer,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                url: token.metadata?.imageURL ?? token.metadata?.imageURL,
                classes: {
                    fallbackImage: fallbackImageURL ? classes.fallbackENSImage : classes.fallbackImage,
                    container: classes.image,
                    root: classes.root
                },
                fallbackImage: fallbackImageURL
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                title: caption,
                disableInteractive: true,
                arrow: true,
                placement: "bottom",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.caption,
                    children: Others.isValidDomain(token.metadata?.name ?? '') || pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA ? token.metadata?.name : caption
                })
            })
        ]
    });
}
function NFTList({ selectable, selectedPairs, tokens, onChange, limit = 1, columns = 4, gap = 12, className, onNextPage, finished, pluginID, hasError }) {
    const { classes, cx } = useStyles({
        columns,
        gap
    });
    const isRadio = limit === 1;
    const reachedLimit = selectedPairs && selectedPairs.length >= limit;
    const toggleItem = (0,react.useCallback)((currentId, contractAddress)=>{
        onChange?.(currentId, contractAddress);
    }, [
        onChange
    ]);
    const includes = pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? (pairs, pair)=>{
        return !!pairs.find(([address, tokenId])=>(0,isSameAddress/* isSameAddress */.W)(address, pair[0]) && tokenId === pair[1]);
    } : (pairs, pair)=>{
        return !!pairs.find(([, tokenId])=>tokenId === pair[1]);
    };
    const SelectComponent = isRadio ? Radio/* default */.Z : Checkbox/* default */.Z;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: cx(classes.list, className),
                children: tokens.map((token)=>{
                    const selected = selectedPairs ? includes(selectedPairs, [
                        token.contract?.address,
                        token.tokenId
                    ]) : false;
                    const inactive = selectedPairs ? selectedPairs.length > 0 && !selected : false;
                    const disabled = selectable ? !isRadio && reachedLimit && !selected : false;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: cx(classes.nftItem, {
                            [classes.disabled]: disabled,
                            [classes.selected]: selected,
                            [classes.inactive]: inactive
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTItem, {
                                token: token,
                                pluginID: pluginID
                            }),
                            selectable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectComponent, {
                                size: "small",
                                onChange: noop/* default */.Z,
                                disabled: disabled,
                                onClick: ()=>{
                                    if (disabled) return;
                                    if (selected) {
                                        toggleItem(null, '');
                                    } else {
                                        toggleItem(token.tokenId, token.contract?.address);
                                    }
                                },
                                className: classes.checkbox,
                                checked: selected
                            }) : null
                        ]
                    }, token.tokenId + token.id);
                })
            }),
            hasError && finished && tokens.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                py: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                    hint: false,
                    retry: onNextPage
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                py: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                    callback: onNextPage,
                    children: !finished && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/PluginCardFrame/index.tsx
var PluginCardFrame = __webpack_require__(21766);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PluginEnableBoundary/index.tsx
var PluginEnableBoundary = __webpack_require__(52623);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Days.ts
var Days = __webpack_require__(89087);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var Theme_theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/context.tsx


const TrendingViewContext = /*#__PURE__*/ (0,react.createContext)({
    isTokenTagPopper: true,
    isCollectionProjectPopper: false,
    isProfilePage: false,
    isPreciseSearch: false,
    isDSearch: false
});
function TrendingViewProvider({ isTokenTagPopper, isCollectionProjectPopper, isProfilePage, isPreciseSearch, children }) {
    const context = (0,react.useMemo)(()=>({
            isTokenTagPopper,
            isDSearch: !isTokenTagPopper && !isCollectionProjectPopper && !isProfilePage,
            isCollectionProjectPopper,
            isProfilePage,
            isPreciseSearch
        }), [
        isTokenTagPopper,
        isCollectionProjectPopper,
        isProfilePage,
        isPreciseSearch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewContext.Provider, {
        value: context,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(81770);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/messages.ts
var messages = __webpack_require__(68026);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trending/usePriceStats.ts





function usePriceStats({ chainId: expectedChainId, coinId, currency, days = Days/* Days */.h.MAX, sourceType }) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    return (0,useQuery/* useQuery */.a)([
        'price-stats',
        chainId,
        coinId,
        currency,
        days,
        sourceType
    ], async ()=>{
        if ((0,isUndefined/* default */.Z)(days) || (0,isUndefined/* default */.Z)(coinId) || (0,isUndefined/* default */.Z)(sourceType) || (0,isUndefined/* default */.Z)(currency)) return constants/* EMPTY_LIST */.rP;
        return messages/* PluginTraderRPC */.V.getPriceStats(chainId, coinId, currency, days, sourceType);
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(84973);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-providers/src/Trending/helpers.ts
var helpers = __webpack_require__(67876);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trending/useTrending.ts








function useNFT_TrendingOverview(pluginID, id, // For nftscan it's address, for simplehash it's collection id.
expectedChainId) {
    return (0,useQuery/* useQuery */.a)([
        'nft-trending-overview',
        pluginID,
        expectedChainId,
        id
    ], async ()=>{
        if (!id || !expectedChainId || !pluginID) return null;
        return messages/* PluginTraderRPC */.V.getNFT_TrendingOverview(pluginID, expectedChainId, id);
    });
}
function useNonFungibleTokenActivities(pluginID, id, expectedChainId) {
    const cursorRef = (0,react.useRef)('');
    const [nonFungibleTokenActivities, setNonFungibleTokenActivities] = (0,react.useState)({});
    const [{ loading: loadingActivities }, fetchActivities] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!id || !expectedChainId || !pluginID) return;
        const result = await messages/* PluginTraderRPC */.V.getNonFungibleTokenActivities(pluginID, expectedChainId, id, cursorRef.current);
        setNonFungibleTokenActivities((currentActivities)=>{
            if (!result || currentActivities[result.cursor] || !result?.content) return currentActivities;
            cursorRef.current = result.cursor;
            return {
                ...currentActivities,
                [cursorRef.current]: result.content
            };
        });
    }, [
        id,
        expectedChainId,
        pluginID
    ]);
    (0,react.useEffect)(()=>{
        fetchActivities();
    }, [
        fetchActivities
    ]);
    return {
        activities: (0,flatten/* default */.Z)(Object.values(nonFungibleTokenActivities)),
        fetchActivities,
        loadingActivities
    };
}
function useTrendingById(result, address) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: result.chainId
    });
    const currency = helpers/* getCurrency */.zC(result.chainId, result.source);
    const { isLoading, data: coinTrending, error } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'get-coin-trending',
            result,
            currency?.id
        ],
        queryFn: async ()=>{
            if (!currency || !result.source) return null;
            return messages/* PluginTraderRPC */.V.getCoinTrending(result, currency);
        }
    });
    const { data: detailedToken } = (0,useFungibleToken/* useFungibleToken */.c)(result.pluginID, coinTrending?.coin.contract_address, undefined, {
        chainId: coinTrending?.coin.chainId
    });
    const trendingData = (0,react.useMemo)(()=>{
        if (isLoading || error || !coinTrending) return;
        return {
            ...coinTrending,
            coin: {
                ...coinTrending.coin,
                id: coinTrending.coin.id ?? '',
                name: coinTrending.coin.name ?? '',
                symbol: coinTrending.coin.symbol ?? '',
                type: coinTrending.coin.type ?? specs/* TokenType */.iv.Fungible,
                decimals: coinTrending.coin.decimals || detailedToken?.decimals || 0,
                contract_address: coinTrending.coin.contract_address ?? coinTrending.contracts?.[0]?.address ?? address,
                chainId: coinTrending.coin.chainId ?? coinTrending.contracts?.[0]?.chainId ?? chainId
            }
        };
    }, [
        isLoading,
        error,
        coinTrending,
        detailedToken?.decimals
    ]);
    if (isLoading) {
        return {
            loading: true
        };
    }
    if (error) {
        return {
            loading: false,
            error: error
        };
    }
    return {
        value: {
            currency,
            trending: trendingData
        },
        loading: isLoading
    };
}
function useHighestFloorPrice(id) {
    return (0,useQuery/* useQuery */.a)([
        'highest-floor-price',
        id
    ], async ()=>{
        if (!id) return null;
        return messages/* PluginTraderRPC */.V.getHighestFloorPrice(id);
    });
}
function useOneDaySaleAmounts(id) {
    return (0,useQuery/* useQuery */.a)([
        'one-day-sale-amount',
        id
    ], async ()=>{
        if (!id) return null;
        return messages/* PluginTraderRPC */.V.getOneDaySaleAmounts(id);
    });
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/Trader.tsx + 34 modules
var Trader = __webpack_require__(57310);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/trader/useAllProviderTradeContext.ts + 34 modules
var useAllProviderTradeContext = __webpack_require__(6780);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/TradeView.tsx






const TradeView_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            width: '100%',
            paddingTop: theme.spacing(2),
            position: 'relative',
            boxSizing: 'border-box'
        },
        trade: {
            padding: `${theme.spacing(0, 2)}!important`,
            margin: '0 !important'
        }
    };
});
function TradeView(props) {
    const { TraderProps } = props;
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { data: inputToken } = (0,useFungibleToken/* useFungibleToken */.c)(pluginID, TraderProps.defaultInputCoin?.address ?? '', TraderProps.defaultInputCoin, {
        chainId
    });
    const { data: outputToken } = (0,useFungibleToken/* useFungibleToken */.c)(pluginID, TraderProps.defaultOutputCoin?.address ?? '', TraderProps.defaultOutputCoin, {
        chainId: TraderProps.defaultOutputCoin?.chainId ?? chainId
    });
    const { classes } = TradeView_useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext */.TX.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
                ...TraderProps,
                defaultOutputCoin: (0,address/* isNativeTokenAddress */.qw)(outputToken?.address) ? undefined : outputToken,
                defaultInputCoin: inputToken,
                chainId: chainId,
                classes: {
                    root: classes.trade
                },
                settings: true
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/CoinMetadataTable/index.tsx + 3 modules
var CoinMetadataTable = __webpack_require__(57826);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleCoinMarketTable/index.tsx
var FungibleCoinMarketTable = __webpack_require__(50464);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatSupply.ts
var formatSupply = __webpack_require__(30952);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/formatInteger.ts

function formatInteger(value, fallback) {
    if (value === undefined || value === null) return fallback;
    const result = new bignumber/* BigNumber */.O(typeof value === 'string' ? value.replaceAll(',', '') : value);
    return result.isNaN() ? fallback : result.toFormat(0);
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(67041);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/CoinMarketTable.tsx









const CoinMarketTable_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px'
        },
        gridItem: {
            display: 'flex',
            width: 132.5,
            height: 66,
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontWeight: 700,
            fontSize: 14
        },
        gridItemTitle: {
            fontSize: 12,
            fontWeight: 400
        },
        gridItemValue: {
            fontSize: 14,
            fontWeight: 700
        },
        amountWrapper: {
            display: 'flex',
            alignItems: 'center'
        },
        amount: {
            marginLeft: 4
        }
    }));
function NonFungibleCoinMarketTable(props) {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { trending, result } = props;
    const chainId = result.chainId ?? trending.coin.chainId;
    const { data: overview } = useNFT_TrendingOverview(result.pluginID, trending.coin.id, chainId);
    const { data: highestPrice_ } = useHighestFloorPrice(overview?.highest_price ?? trending.market?.highest_price ? '' : trending.coin.id);
    const { data: salesOneDay_ } = useOneDaySaleAmounts(overview?.sales_24h ?? overview?.sales ?? trending.market?.total_24h ? '' : trending.coin.id);
    const salesOneDay = salesOneDay_ ?? overview?.sales_24h ?? overview?.sales ?? trending.market?.total_24h;
    const highestPrice = highestPrice_ ?? overview?.highest_price ?? trending.market?.highest_price;
    const { classes, cx } = CoinMarketTable_useStyles();
    const chain = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(result.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const PaymentIcon = trending.market?.price_token_address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
        address: trending.market?.price_token_address,
        chainId: chainId,
        size: 14
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
        mainIcon: chain?.icon,
        size: 14
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            spacing: 4,
            className: classes.gridContainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_total_assets()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            variant: "body2",
                            className: classes.gridItemValue,
                            children: (0,formatSupply/* formatSupply */.E)(overview?.items_total ?? trending.market?.total_supply, '--')
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_owners_count()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            variant: "body2",
                            className: classes.gridItemValue,
                            children: formatInteger(overview?.owners_total ?? trending.market?.owners_count, '--')
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_market_cap()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.amountWrapper,
                            children: [
                                overview?.market_cap ? PaymentIcon : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    variant: "body2",
                                    className: cx(classes.gridItemValue, classes.amount),
                                    children: formatInteger(overview?.market_cap ?? trending.market?.market_cap, '--')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_highest_price()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.amountWrapper,
                            children: [
                                highestPrice ? PaymentIcon : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    variant: "body2",
                                    className: cx(classes.gridItemValue, classes.amount),
                                    children: (0,formatSupply/* formatSupply */.E)(highestPrice, '--')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_total_volume()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.amountWrapper,
                            children: [
                                overview?.total_volume ? PaymentIcon : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    variant: "body2",
                                    className: cx(classes.gridItemValue, classes.amount),
                                    children: (0,formatSupply/* formatSupply */.E)(overview?.total_volume ?? trending.market?.total_volume, '--')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_one_day_average_price()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.amountWrapper,
                            children: [
                                overview?.average_price_24h ?? overview?.average_price ? PaymentIcon : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    variant: "body2",
                                    className: cx(classes.gridItemValue, classes.amount),
                                    children: (0,formatSupply/* formatSupply */.E)(overview?.average_price_24h ?? overview?.average_price, '--')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_one_day_traded_volume()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.amountWrapper,
                            children: [
                                overview?.volume_24h ?? overview?.volume ? PaymentIcon : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    variant: "body2",
                                    className: cx(classes.gridItemValue, classes.amount),
                                    children: (0,formatSupply/* formatSupply */.E)(overview?.volume_24h ?? overview?.volume ?? trending.market?.volume_24h, '--')
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.gridItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            variant: "body2",
                            className: classes.gridItemTitle,
                            children: t.plugin_trader_one_day_sale()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            variant: "body2",
                            className: classes.gridItemValue,
                            children: (0,formatSupply/* formatSupply */.E)(salesOneDay, '--')
                        })
                    ]
                })
            ]
        })
    });
}
function CoinMarketTable(props) {
    const isNFT = props.trending.coin.type === specs/* TokenType */.iv.NonFungible;
    return isNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NonFungibleCoinMarketTable, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleCoinMarketTable/* FungibleCoinMarketTable */.N, {
        ...props,
        sign: specs/* CurrencyType */.V2.USD
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/CoinMarketPanel.tsx




function CoinMarketPanel(props) {
    const { trending, result } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        p: 2,
        gap: 1,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketTable, {
                trending: trending,
                result: result
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTable/* CoinMetadataTable */.y, {
                trending: trending
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useDimension.ts
var useDimension = __webpack_require__(13611);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePriceLineChart.ts + 2 modules
var usePriceLineChart = __webpack_require__(57386);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/PriceChart.tsx







const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 566,
    height: 190
};
const PriceChart_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { stats, coin })=>{
    return {
        root: {
            position: 'relative',
            cursor: stats.length && coin?.platform_url ? 'pointer' : 'default'
        },
        svg: {
            display: 'block'
        },
        progress: {
            position: 'absolute',
            left: 275,
            top: 85
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    };
});
function PriceChart(props) {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes } = PriceChart_useStyles(props, {
        props
    });
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    (0,useDimension/* useDimension */.$)(svgRef, DEFAULT_DIMENSION);
    (0,usePriceLineChart/* usePriceLineChart */.Z)(svgRef, props.stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })), DEFAULT_DIMENSION, 'x-trader-price-line-chart', {
        sign: props.currency.name ?? 'USD'
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            props.loading && props.stats.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                gap: 2,
                children: [
                    props.stats.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: DEFAULT_DIMENSION.width,
                        height: DEFAULT_DIMENSION.height,
                        viewBox: `0 0 ${DEFAULT_DIMENSION.width} ${DEFAULT_DIMENSION.height}`,
                        preserveAspectRatio: "xMidYMid meet",
                        onClick: ()=>{
                            props.stats.length && (0,open_window/* openWindow */.x)(props.coin?.platform_url);
                        }
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.placeholder,
                        align: "center",
                        color: "textSecondary",
                        children: t.plugin_trader_no_data()
                    }),
                    props.children
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/helpers/resolveDaysName.ts
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}Y`;
    if (days >= 30) return `${Math.floor(days / 30)}M`;
    if (days >= 7) return `${Math.floor(days / 7)}W`;
    if (days === 1) return '24H';
    return `${days}d`;
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/PriceChartDaysControl.tsx





const PriceChartDaysControl_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            background: theme.palette.maskColor.input,
            borderRadius: 28,
            padding: theme.spacing(0.5)
        },
        active: {
            boxShadow: '0px 2px 5px 1px rgba(0, 0, 0, 0.05)',
            background: theme.palette.maskColor.bottom,
            fontWeight: 700
        },
        link: {
            padding: theme.spacing(1),
            width: '25%',
            cursor: 'pointer',
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
function PriceChartDaysControl({ rangeOptions = DEFAULT_RANGE_OPTIONS, days, onDaysChange }) {
    const { classes, cx } = PriceChartDaysControl_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        className: classes.root,
        direction: "row",
        gap: 2,
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

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(27043);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var styles_useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box_Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(98894);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(26720);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(40612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Table/Table.js
var Table = __webpack_require__(84491);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(69995);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(84173);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useThemeSettings.ts
var useThemeSettings = __webpack_require__(53639);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatElapsed.ts
var formatElapsed = __webpack_require__(69212);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TickersTable.tsx











const TickersTable_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { themeMode, isPopper })=>({
        container: {
            maxHeight: 266,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        cell: {
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5),
            background: themeMode === 'dim' && !isPopper ? '#15202b' : theme.palette.maskColor.bottom,
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            border: 'none',
            '&:not(:first-child)': {
                textAlign: 'center'
            }
        },
        logo: {
            width: 18,
            height: 18,
            verticalAlign: 'bottom',
            marginRight: theme.spacing(0.5)
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        },
        pair: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: 100,
            width: 100
        }
    }));
function TickersTable({ tickers }) {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const theme = (0,styles_useTheme/* default */.Z)();
    const themeMode = (0,useThemeSettings/* useSiteThemeMode */.E)(theme);
    const { isCollectionProjectPopper, isTokenTagPopper } = (0,react.useContext)(TrendingViewContext);
    const { classes } = TickersTable_useStyles({
        themeMode,
        isPopper: isCollectionProjectPopper || isTokenTagPopper
    });
    const headCellMap = {
        volume: t.plugin_trader_table_volume(),
        updated: t.plugin_trader_table_updated(),
        exchange: t.plugin_trader_table_exchange(),
        pair: t.plugin_trader_table_pair(),
        price: t.plugin_trader_table_price()
    };
    const columns = [
        'exchange',
        'pair',
        'price',
        'volume',
        'updated'
    ];
    const tickerRows = tickers.map((ticker, index)=>{
        const price = ticker.price ?? ticker.floor_price;
        const volume = ticker.volume;
        const marketplaceOrExchange = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            direction: "row",
            alignItems: "center",
            children: [
                ticker.logo_url ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.logo,
                    src: ticker.logo_url
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    component: "span",
                    children: ticker.market_name
                })
            ]
        });
        const cellMap = {
            volume: volume ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                value: volume,
                formatter: formatCurrency/* formatCurrency */.x,
                sign: specs/* CurrencyType */.V2.USD
            }) : null,
            updated: ticker.updated ? (0,formatElapsed/* formatElapsed */.Q)(ticker.updated.getTime()) : null,
            exchange: marketplaceOrExchange,
            pair: (()=>{
                if (!ticker.base_name || !ticker.target_name) return null;
                const formatted = (0,formatter/* formatEthereumAddress */.j8)(ticker.base_name, 2);
                const basename = formatted !== ticker.base_name ? ticker.base_name : '';
                const targetName = (0,formatter/* formatEthereumAddress */.j8)(ticker.target_name, 2);
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                    placement: "top-start",
                    disableInteractive: true,
                    PopperProps: {
                        disablePortal: true
                    },
                    disableHoverListener: basename.length + targetName.length < 9,
                    title: `${formatted} / ${(0,formatter/* formatEthereumAddress */.j8)(ticker.target_name, 2)}`,
                    arrow: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                        className: classes.pair,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                            color: (theme)=>theme.palette.maskColor?.primary,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: ticker.trade_url,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    component: "span",
                                    title: formatted !== ticker.base_name ? ticker.base_name : '',
                                    children: formatted
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "/"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    component: "span",
                                    children: (0,formatter/* formatEthereumAddress */.j8)(ticker.target_name, 2)
                                })
                            ]
                        })
                    })
                });
            })(),
            price: price ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                value: price,
                formatter: formatCurrency/* formatCurrency */.x,
                sign: specs/* CurrencyType */.V2.USD
            }) : null
        };
        const cells = Object.entries((0,pick/* default */.Z)(cellMap, columns)).map(([name, cell])=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                children: cell
            }, name));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
            children: cells
        }, index);
    });
    const headCells = Object.values((0,pick/* default */.Z)(headCellMap, columns));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: headCells.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: x
                            }, x))
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: columns.length ? tickerRows : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            className: classes.cell,
                            colSpan: columns.length,
                            style: {
                                borderStyle: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.placeholder,
                                align: "center",
                                color: "textSecondary",
                                children: t.plugin_trader_no_data()
                            })
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
;// CONCATENATED MODULE: ./packages/plugins/Transak/src/hooks/useTransakAllowanceCoin.ts

const ENV = {
    production: 'https://api.transak.com/api/v2/currencies/crypto-currencies',
    development: 'https://staging-api.transak.com/api/v2/currencies/crypto-currencies',
    test: 'https://development-api.transak.com/api/v2/currencies/crypto-currencies'
};
const URL = ENV["production"];
function useTransakAllowanceCoin(token) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (token.symbol) {
            const allowanceList = await fetch(URL, {
                method: 'GET'
            }).then((res)=>res.json()).then((res)=>res.response);
            return allowanceList.map((val)=>val.symbol).includes(token.symbol);
        }
        return false;
    }, [
        JSON.stringify(token)
    ]).value;
}

// EXTERNAL MODULE: ./packages/plugins/Transak/src/messages.ts
var src_messages = __webpack_require__(48188);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useTokenSecurity.ts
var useTokenSecurity = __webpack_require__(72390);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useTokenMenuCollectionList.ts
var useTokenMenuCollectionList = __webpack_require__(50215);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var src_constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useSocialAccountsBySettings.ts
var useSocialAccountsBySettings = __webpack_require__(70790);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useReportSpam.tsx
var useReportSpam = __webpack_require__(29128);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Linking.tsx
var Linking = __webpack_require__(32147);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenWithSocialGroupMenu/index.tsx + 1 modules
var TokenWithSocialGroupMenu = __webpack_require__(52266);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PriceChange/index.tsx
var PriceChange = __webpack_require__(99044);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenSecurity/index.tsx + 1 modules
var TokenSecurity = __webpack_require__(78199);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/AnchorContext/index.tsx
var AnchorContext = __webpack_require__(91688);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(11017);
// EXTERNAL MODULE: ./packages/theme/src/Theme/colors.ts
var colors = __webpack_require__(38060);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(77607);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(12113);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/types/trader.ts
var trader = __webpack_require__(50584);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/CoinIcon.tsx



function CoinIcon({ type, ...rest }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
        tokenType: type,
        pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        ...rest
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TrendingCard.tsx



const TrendingCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            overflow: 'auto',
            backgroundColor: 'transparent',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            marginBottom: theme.spacing(1.5)
        }
    };
});
function TrendingCard(props) {
    const { children } = props;
    const { classes } = TrendingCard_useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        component: "article",
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(92935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(6184);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowDropDown.js


/* harmony default export */ const ArrowDropDown = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m7 10 5 5 5-5z"
}), 'ArrowDropDown'));
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FootnoteMenu/index.tsx






const FootnoteMenu_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        link: {
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        title: {
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 10
        },
        icon: {
            color: theme.palette.maskColor.main
        }
    }));
function FootnoteMenu(props) {
    const { children, options, selectedIndex = -1, onChange } = props;
    const { classes, theme } = FootnoteMenu_useStyles(undefined, {
        props
    });
    const onSelect = (option)=>{
        onChange?.(option.value);
    };
    const [menu, openMenu] = (0,useMenu/* useMenuConfig */._)(options.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            disabled: x.disabled,
            onClick: ()=>onSelect(x),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "space-around",
                gap: 1,
                alignItems: "center",
                width: "100%",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        flexGrow: 1,
                        color: theme.palette.maskColor.main,
                        children: x.name
                    }),
                    selectedIndex === i ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                        size: 20,
                        style: {
                            color: theme.palette.maskColor.primary,
                            boxShadow: '0px 4px 10px rgba(28, 104, 243, 0.2)'
                        }
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {
                        style: {
                            fontSize: 20,
                            color: theme.palette.maskColor.secondaryLine
                        }
                    })
                ]
            })
        }, x.value.id)), {
        anchorSibling: false,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        PaperProps: {
            style: {
                background: theme.palette.maskColor.bottom
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                className: classes.link,
                color: "inherit",
                underline: "none",
                onClick: options.length > 1 ? openMenu : undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.title,
                        variant: "subtitle2",
                        children: [
                            options[selectedIndex]?.name,
                            options.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown, {
                                style: {
                                    fontSize: 16,
                                    cursor: 'pointer'
                                },
                                className: classes.icon
                            }) : null
                        ]
                    }),
                    children
                ]
            }),
            menu
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/SourceProviderIcon/index.tsx
var SourceProviderIcon = __webpack_require__(31547);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SourceSwitcher/index.tsx








const SourceSwitcher_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        source: {
            justifyContent: 'space-between'
        },
        sourceMenu: {
            fontSize: 14,
            fontWeight: 700
        },
        sourceName: {
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? '' : theme.palette.maskColor.publicMain
        }
    };
});
function SourceSwitcher(props) {
    const { result, setResult, resultList } = props;
    const { classes } = SourceSwitcher_useStyles(undefined, {
        props
    });
    const sourceTypes = (0,uniqBy/* default */.Z)(resultList, (x)=>x.source).map((x)=>x.source);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.source,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            className: classes.sourceMenu,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 0.5,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu, {
                options: (0,uniqBy/* default */.Z)(resultList, (x)=>x.source).map((x)=>({
                        name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            display: "inline-flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 0.5,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.sourceName,
                                    children: (0,resolver/* resolveSourceTypeName */.lz)(x.source)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SourceProviderIcon/* SourceProviderIcon */.g, {
                                    provider: x.source,
                                    size: 20
                                })
                            ]
                        }),
                        value: x
                    })),
                selectedIndex: typeof result.source !== 'undefined' ? sourceTypes.indexOf(result.source) : -1,
                onChange: setResult,
                classes: {
                    title: classes.selectedOption,
                    icon: classes.arrowDropIcon
                }
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/PluginDescriptor.tsx






const PluginDescriptor_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        cardIcon: {
            filter: 'drop-shadow(0px 6px 12px rgba(0, 65, 185, 0.2))',
            marginLeft: theme.spacing(0.25)
        }
    };
});
function PluginDescriptor({ children, isCollectionProjectPopper, isProfilePage, isTokenTagPopper }) {
    const { classes } = PluginDescriptor_useStyles();
    const t = (0,locales_i18n_generated/* useSharedTrans */.j)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 0.5,
                alignItems: "center",
                children: [
                    isCollectionProjectPopper || isTokenTagPopper ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Web3ProfileCard, {
                        className: classes.cardIcon,
                        size: 24
                    }) : isProfilePage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Web3Profile, {
                        className: classes.cardIcon,
                        size: 24
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.DecentralizedSearch, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontWeight: "bolder",
                        fontSize: 16,
                        color: (theme)=>isCollectionProjectPopper || isTokenTagPopper ? theme.palette.maskColor.main : theme.palette.maskColor.dark,
                        children: isTokenTagPopper || isCollectionProjectPopper ? t.web3_profile_card_name() : isProfilePage ? t.profile_card_name() : t.decentralized_search_name()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TrendingViewDescriptor.tsx










const TrendingViewDescriptor_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        source: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        sourceNote: {
            color: theme.palette.maskColor.secondaryDark,
            marginRight: 4,
            fontWeight: 700
        },
        sourceMenu: {
            fontSize: 14,
            fontWeight: 700
        },
        selectedOption: {
            fontWeight: 700,
            color: props.isCollectionProjectPopper || props.isTokenTagPopper ? theme.palette.maskColor.main : theme.palette.maskColor.dark
        },
        arrowDropIcon: {
            color: props.isCollectionProjectPopper || props.isTokenTagPopper ? theme.palette.maskColor.main : theme.palette.maskColor.dark
        }
    };
});
function TrendingViewDescriptor(props) {
    const { result, resultList, setResult } = props;
    const { isProfilePage, isCollectionProjectPopper = false, isTokenTagPopper = true } = (0,react.useContext)(TrendingViewContext);
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes } = TrendingViewDescriptor_useStyles({
        isTokenTagPopper,
        isCollectionProjectPopper
    });
    const displayList = (0,uniqBy/* default */.Z)(resultList.filter((x)=>x.type === result.type), (x)=>x.source);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginDescriptor, {
        isCollectionProjectPopper: isCollectionProjectPopper,
        isProfilePage: isProfilePage,
        isTokenTagPopper: isTokenTagPopper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.source,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    className: classes.sourceMenu,
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 0.5,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.sourceNote,
                        children: t.powered_by()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SourceSwitcher, {
                    resultList: displayList,
                    result: result,
                    setResult: setResult,
                    classes: {
                        selectedOption: classes.selectedOption,
                        arrowDropIcon: classes.arrowDropIcon
                    }
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TrendingViewDeck.tsx






















const TrendingViewDeck_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        content: {
            paddingTop: 0,
            paddingBottom: '0 !important',
            '&:last-child': {
                padding: 0
            }
        },
        cardHeader: {
            padding: theme.spacing(2),
            paddingBottom: theme.spacing(6.5),
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(69, 163, 251, 0.2) 100%), #FFFFFF;'
        },
        headline: {
            marginTop: props.isCollectionProjectPopper || props.isTokenTagPopper ? 0 : 16,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative'
        },
        title: {
            display: 'flex',
            maxWidth: 350,
            alignItems: 'center',
            whiteSpace: 'nowrap'
        },
        name: {
            maxWidth: 200,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 18,
            fontWeight: 700,
            color: theme.palette.maskColor?.dark
        },
        symbol: {
            fontWeight: 700,
            fontSize: 18,
            color: theme.palette.maskColor.dark,
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            display: 'flex',
            alignItems: 'center'
        },
        symbolText: {
            display: 'inline-block',
            maxWidth: 200,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontStyle: 'normal',
            overflow: 'hidden',
            textTransform: 'uppercase'
        },
        rank: {
            display: 'inline-flex',
            padding: theme.spacing(0.25, 0.5),
            color: theme.palette.maskColor?.white,
            fontWeight: 400,
            fontSize: 10,
            background: theme.palette.maskColor?.dark,
            borderRadius: theme.spacing(0.5)
        },
        avatar: {
            width: 24,
            height: 24,
            fontSize: 10,
            backgroundColor: theme.palette.common.white
        },
        buyButton: {
            marginLeft: 'auto'
        },
        icon: {
            color: colors/* MaskColors */.m.dark.maskColor.dark
        },
        pluginDescriptorWrapper: {
            padding: '15px 17px 15px 13px',
            position: 'absolute',
            width: '100%',
            height: 48,
            left: 0,
            bottom: 12,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            background: theme.palette.maskColor.bg,
            backdropFilter: 'blur(5px)',
            boxSizing: 'border-box',
            borderBottomRightRadius: '16px',
            borderBottomLeftRadius: '16px',
            zIndex: 2
        },
        link: {
            outline: 0
        }
    };
});
function TrendingViewDeck(props) {
    const { trending, stats, children, TrendingCardProps, resultList = constants/* EMPTY_LIST */.rP, result, setResult, setActive, currentTab, identity } = props;
    const { coin, market } = trending;
    const [walletMenuOpen, setWalletMenuOpen] = (0,react.useState)(false);
    const closeMenu = (0,react.useCallback)(()=>setWalletMenuOpen(false), []);
    const { isCollectionProjectPopper, isTokenTagPopper, isPreciseSearch, isProfilePage } = (0,react.useContext)(TrendingViewContext);
    const { anchorEl, anchorBounding } = (0,AnchorContext/* useAnchor */.Wb)();
    const [timer, setTimer] = (0,react.useState)();
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const theme = (0,styles_useTheme/* default */.Z)();
    const { classes } = TrendingViewDeck_useStyles({
        isTokenTagPopper,
        isCollectionProjectPopper
    }, {
        props
    });
    const isNFT = coin.type === specs/* TokenType */.iv.NonFungible;
    // #region buy
    const transakPluginEnabled = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any').some((x)=>x.ID === PluginID/* PluginID */.P.Transak);
    const transakIsMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Transak);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const isAllowanceCoin = useTransakAllowanceCoin({
        address: coin.contract_address,
        symbol: coin.symbol
    });
    const { setDialog: setBuyDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(src_messages/* PluginTransakMessages */.l.buyTokenDialogUpdated);
    const minimalPlugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)(true);
    const isTokenSecurityEnable = !isNFT && !minimalPlugins.map((x)=>x.ID).includes(PluginID/* PluginID */.P.GoPlusSecurity);
    const { value: tokenSecurity, error } = (0,useTokenSecurity/* useTokenSecurity */.x)(coin.chainId, coin.contract_address?.trim(), isTokenSecurityEnable);
    const isBuyable = !isNFT && transakPluginEnabled && !transakIsMinimalMode && coin.symbol && isAllowanceCoin;
    const onBuyButtonClicked = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            code: coin.symbol,
            address: account
        });
    }, [
        account,
        coin.symbol
    ]);
    // #endregion
    const titleRef = (0,react.useRef)(null);
    const coinAddress = coin.address || coin.contract_address;
    const coinName = result.name || coin.name;
    const collectionList = (0,useTokenMenuCollectionList/* useTokenMenuCollectionList */.u)(resultList, result);
    const rss3Key = src_constants/* EnhanceableSite_RSS3_NFT_SITE_KEY_map */.mN[identity?.identifier?.network];
    const { data: socialAccounts = constants/* EMPTY_LIST */.rP } = (0,useSocialAccountsBySettings/* useSocialAccountsBySettings */.j)(identity, undefined, undefined, context/* signWithPersona */.MN);
    const openRss3Profile = (0,react.useCallback)((address)=>{
        if (!isCollectionProjectPopper) {
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.hideSearchResultInspectorEvent.sendToLocal({
                hide: true
            });
            return;
        }
        if (!identity?.identifier?.userId || !anchorBounding) return;
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.sendToLocal({
            open: true,
            userId: identity?.identifier?.userId,
            anchorBounding,
            anchorEl,
            address,
            external: true
        });
        setActive?.(false);
    }, [
        identity,
        isCollectionProjectPopper,
        anchorBounding,
        anchorEl
    ]);
    const { isReporting, isSpam, promptReport } = (0,useReportSpam/* useReportSpam */.v)({
        address: coin.address,
        chainId: coin.chainId
    });
    (0,react.useEffect)(()=>{
        if (timer) clearTimeout(timer);
        if (isCollectionProjectPopper || isTokenTagPopper) {
            const timer = setTimeout(()=>{
                providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, isNFT ? src_types/* EventID */.HS.EntryTimelineHoverNftDuration : src_types/* EventID */.HS.EntryTimelineHoverTokenDuration);
            }, 1000);
            setTimer(timer);
        }
        return ()=>{
            if (timer) clearTimeout(timer);
            setTimer(undefined);
        };
    }, [
        isCollectionProjectPopper,
        isTokenTagPopper,
        isProfilePage,
        isNFT
    ]);
    const floorPrice = trending.dataProvider === specs/* SourceType */.PO.CoinMarketCap ? (0,last/* default */.Z)(stats)?.[1] ?? market?.current_price : market?.current_price;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingCard, {
        ...TrendingCardProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                className: classes.cardHeader,
                children: [
                    isCollectionProjectPopper || isTokenTagPopper ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewDescriptor, {
                        result: result,
                        resultList: resultList,
                        setResult: setResult
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        className: classes.headline,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                            gap: 2,
                            flexGrow: 1,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 0.5,
                                        ref: titleRef,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking/* Linking */.E, {
                                                LinkProps: {
                                                    className: classes.link
                                                },
                                                href: (0,head/* default */.Z)(coin.home_urls),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                    className: classes.avatar,
                                                    src: coin.image_url,
                                                    alt: coin.symbol,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinIcon, {
                                                        type: coin.type,
                                                        name: coinName,
                                                        label: "",
                                                        symbol: coin.symbol,
                                                        address: coinAddress ?? '',
                                                        logoURL: coin.image_url,
                                                        size: 20
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                className: classes.title,
                                                variant: "h6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking/* Linking */.E, {
                                                        href: (0,head/* default */.Z)(coin.home_urls),
                                                        LinkProps: {
                                                            className: classes.name,
                                                            title: coinName
                                                        },
                                                        children: coinName
                                                    }),
                                                    coin.symbol ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        component: "span",
                                                        className: classes.symbol,
                                                        children: [
                                                            "(",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("em", {
                                                                className: classes.symbolText,
                                                                children: coin.symbol
                                                            }),
                                                            ")"
                                                        ]
                                                    }) : null
                                                ]
                                            }),
                                            typeof coin.market_cap_rank === 'number' || result.rank ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                component: "span",
                                                className: classes.rank,
                                                title: "Index Cap Rank",
                                                children: t.plugin_trader_rank({
                                                    rank: result.rank?.toString() ?? coin.market_cap_rank?.toString() ?? ''
                                                })
                                            }) : null,
                                            (collectionList.length > 1 || socialAccounts.length && rss3Key) && !isPreciseSearch ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                        sx: {
                                                            padding: 0
                                                        },
                                                        size: "small",
                                                        onClick: ()=>setWalletMenuOpen((v)=>!v),
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                                            size: 24,
                                                            className: classes.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenWithSocialGroupMenu/* TokenWithSocialGroupMenu */.S, {
                                                        disablePortal: true,
                                                        disableScrollLock: false,
                                                        open: walletMenuOpen,
                                                        onClose: closeMenu,
                                                        anchorEl: titleRef.current,
                                                        onAddressChange: openRss3Profile,
                                                        collectionList: collectionList,
                                                        socialAccounts: socialAccounts,
                                                        currentCollection: result,
                                                        onTokenChange: setResult
                                                    })
                                                ]
                                            }) : null,
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ThemeProvider/* default */.Z, {
                                                theme: Theme_theme/* MaskLightTheme */.C,
                                                children: [
                                                    isBuyable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                        color: "primary",
                                                        className: classes.buyButton,
                                                        size: "small",
                                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Buy, {
                                                            size: 16
                                                        }),
                                                        variant: "contained",
                                                        onClick: onBuyButtonClicked,
                                                        children: t.buy_now()
                                                    }) : null,
                                                    isNFT && (0,head/* default */.Z)(coin.home_urls) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                        color: "primary",
                                                        className: classes.buyButton,
                                                        size: "small",
                                                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                            size: 16
                                                        }),
                                                        variant: "roundedContained",
                                                        onClick: ()=>window.open((0,head/* default */.Z)(coin.home_urls)),
                                                        children: t.open()
                                                    }) : null
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                        direction: "row",
                                        justifyContent: "space-between",
                                        marginTop: 2,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                                direction: "row",
                                                gap: 1,
                                                alignItems: "center",
                                                children: [
                                                    market ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        lineHeight: "24px",
                                                        color: theme.palette.maskColor.dark,
                                                        children: [
                                                            isNFT ? `${t.plugin_trader_floor_price()}: ` : null,
                                                            floorPrice ? (0,formatCurrency/* formatCurrency */.x)(floorPrice, isNFT ? market.price_symbol : 'USD') : '--'
                                                        ]
                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        lineHeight: "24px",
                                                        children: t.plugin_trader_no_data()
                                                    }),
                                                    isNFT && !isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                        onClick: promptReport,
                                                        disabled: isReporting,
                                                        children: isReporting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                                                            size: 16
                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Flag, {
                                                            size: 16,
                                                            color: theme.palette.maskColor.dark
                                                        })
                                                    }) : null,
                                                    market && !isNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChange/* PriceChange */.Y, {
                                                        change: market.price_change_percentage_24h_in_currency || market.price_change_24h || 0
                                                    }) : null
                                                ]
                                            }),
                                            isNFT && isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* NFTSpamBadge */.k, {}) : isTokenSecurityEnable && tokenSecurity && !error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* TokenSecurityBar */.f, {
                                                tokenSecurity: tokenSecurity
                                            }) : null
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        className: classes.body,
                        elevation: 0,
                        children: [
                            children,
                            (isCollectionProjectPopper || isTokenTagPopper) && currentTab === trader/* ContentTab */.X.Market ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                style: {
                                    height: 48,
                                    width: '100%',
                                    background: theme.palette.maskColor.bottom
                                }
                            }) : null
                        ]
                    }),
                    (isCollectionProjectPopper || isTokenTagPopper) && currentTab !== trader/* ContentTab */.X.Swap ? /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: classes.pluginDescriptorWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewDescriptor, {
                            result: result,
                            resultList: resultList,
                            setResult: setResult
                        })
                    }) : null
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/fromUnixTime/index.js
var fromUnixTime = __webpack_require__(75483);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
;// CONCATENATED MODULE: ./packages/web3-providers/src/helpers/resolveActivityTypeBackgroundColor.ts


const resolveActivityTypeBackgroundColor = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [specs/* ActivityType */.T8.Sale]: 'rgba(28, 104, 243, 0.1)',
    [specs/* ActivityType */.T8.Burn]: 'rgba(255, 53, 69, 0.1)',
    [specs/* ActivityType */.T8.Transfer]: 'rgba(61, 194, 51, 0.1)',
    [specs/* ActivityType */.T8.Mint]: 'rgba(255, 177, 0, 0.1)',
    [specs/* ActivityType */.T8.CancelOffer]: 'rgba(255, 177, 0, 0.1)',
    [specs/* ActivityType */.T8.List]: 'rgba(255, 177, 0, 0.1)',
    [specs/* ActivityType */.T8.Offer]: 'rgba(255, 177, 0, 0.1)'
}, '');

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/NonFungibleTickersTable.tsx















const NonFungibleTickersTable_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { isPopper, themeMode })=>({
        container: {
            maxHeight: isPopper ? 320 : 266,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        cell: {
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5),
            background: themeMode === 'dim' && !isPopper ? '#15202b' : theme.palette.maskColor.bottom,
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            border: 'none',
            '&:not(:first-child)': {
                textAlign: 'center'
            },
            '&:last-child': {
                textAlign: 'right'
            }
        },
        nftImage: {
            height: 20,
            width: 20,
            marginRight: 4,
            borderRadius: 4
        },
        nftCell: {
            display: 'flex',
            alignItems: 'center'
        },
        cellWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        methodCellWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        methodCell: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 24,
            width: 62,
            borderRadius: 500,
            fontWeight: 400
        },
        tokenIcon: {
            width: 16,
            height: 16,
            marginRight: 4
        },
        imageLoading: {
            color: theme.palette.maskColor.main,
            height: '15px !important',
            width: '15px !important'
        },
        linkIcon: {
            color: theme.palette.text.primary
        },
        transactionLink: {
            height: 16,
            marginLeft: 4
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        },
        loadMore: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            transform: 'translateY(-16px)'
        },
        loadMoreIcon: {
            marginBottom: 16
        }
    }));
function NonFungibleTickersTable({ id, chainId, result }) {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const theme = (0,styles_useTheme/* default */.Z)();
    const containerRef = (0,react.useRef)(null);
    const themeMode = (0,useThemeSettings/* useSiteThemeMode */.E)(theme);
    const { isCollectionProjectPopper, isTokenTagPopper } = (0,react.useContext)(TrendingViewContext);
    const { classes } = NonFungibleTickersTable_useStyles({
        isPopper: isCollectionProjectPopper || isTokenTagPopper,
        themeMode
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(result.pluginID);
    const { activities, fetchActivities, loadingActivities } = useNonFungibleTokenActivities(result.pluginID, id, chainId);
    const headCellMap = {
        nft: t.plugin_trader_table_nft(),
        method: t.plugin_trader_table_method(),
        value: t.plugin_trader_table_value(),
        from: t.plugin_trader_table_from(),
        to: t.plugin_trader_table_to(),
        time: t.plugin_trader_table_time()
    };
    const tickerRows = activities?.map((x, index)=>{
        const cellMap = {
            nft: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.nftCell,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskAvatar, {
                            size: 20
                        }),
                        src: x.imageURL,
                        classes: {
                            container: classes.nftImage,
                            imageLoading: classes.imageLoading
                        },
                        className: classes.nftImage
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        children: Others.formatTokenId(x.token_id || x.token_address, 3)
                    })
                ]
            }),
            method: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.methodCellWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.methodCell,
                    style: {
                        backgroundColor: resolveActivityTypeBackgroundColor(x.event_type)
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        children: x.event_type
                    })
                })
            }),
            value: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionValue, {
                chainId: chainId,
                activity: x,
                result: result
            }),
            from: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                    address: x.send ?? x.from ?? x.source,
                    formatter: (address)=>Others.formatAddress(Others.formatDomainName(address, 12), 3) ?? address
                })
            }),
            to: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                    address: x.receive ?? x.destination,
                    formatter: (address)=>Others.formatAddress(Others.formatDomainName(address, 12), 3) ?? address
                })
            }),
            time: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.cellWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        fontSize: 12,
                        children: [
                            (0,format/* default */.Z)((0,fromUnixTime/* default */.Z)(Number.parseInt((x.timestamp / 1000).toFixed(0), 10)), 'yyyy-MM-dd HH:mm'),
                            ' '
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: x.transaction_link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: classes.transactionLink,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            size: 15,
                            className: classes.linkIcon
                        })
                    })
                ]
            })
        };
        const cells = Object.entries(cellMap).map(([name, cell])=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                children: cell
            }, name));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
            children: cells
        }, index);
    }) ?? [];
    const headCells = Object.values(headCellMap);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        ref: containerRef,
        children: activities.length === 0 && loadingActivities ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            height: 298,
            width: 566,
            alignItems: "center",
            justifyContent: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontSize: "14px",
                    mt: 1.5,
                    children: t.loading()
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                    size: "small",
                    stickyHeader: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                                children: headCells.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        children: x
                                    }, x))
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: tickerRows.length ? tickerRows : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    className: classes.cell,
                                    colSpan: headCells.length,
                                    style: {
                                        borderStyle: 'none'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.placeholder,
                                        align: "center",
                                        color: "textSecondary",
                                        children: t.plugin_trader_no_data()
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    py: 1,
                    className: classes.loadMore,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                        callback: fetchActivities,
                        children: activities.length > 0 && loadingActivities ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                            className: classes.loadMoreIcon
                        }) : null
                    })
                })
            ]
        })
    });
}
function TransactionValue({ result, chainId, activity }) {
    const { classes } = NonFungibleTickersTable_useStyles({
        isPopper: false
    });
    const chain = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(result.pluginID, chainId);
    const { data: token } = (0,useFungibleToken/* useFungibleToken */.c)(result.pluginID, activity.trade_token?.address, activity.trade_token, {
        chainId: result.chainId
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.cellWrapper,
        children: [
            result.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.tokenIcon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                    mainIcon: chain?.icon,
                    size: 16
                })
            }) : activity.trade_symbol?.toUpperCase() === 'WETH' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WETH, {
                size: 16,
                className: classes.tokenIcon
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                logoURL: token?.logoURL || activity.trade_token?.logoURL,
                symbol: activity.trade_symbol,
                address: activity.contract_address,
                className: classes.tokenIcon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                children: (0,formatCurrency/* formatCurrency */.x)((activity.trade_price ?? activity.fee ?? 0).toFixed(4), '')
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TrendingViewSkeleton.tsx








const TrendingViewSkeleton_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: theme.spacing(1, 1.5),
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(69, 163, 251, 0.2) 100%), #FFFFFF;'
        },
        content: {
            height: 162,
            paddingTop: 0,
            paddingBottom: 0
        }
    }));
function TrendingViewSkeleton(props) {
    const { TrendingCardProps, children } = props;
    const { isCollectionProjectPopper, isProfilePage, isTokenTagPopper } = (0,react.useContext)(TrendingViewContext);
    const { classes } = TrendingViewSkeleton_useStyles(undefined, {
        props
    });
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingCard, {
        ...TrendingCardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            className: classes.root,
            children: [
                isCollectionProjectPopper || isTokenTagPopper ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginDescriptor, {
                    isCollectionProjectPopper: isCollectionProjectPopper,
                    isProfilePage: isProfilePage,
                    isTokenTagPopper: isTokenTagPopper
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                    className: classes.content,
                    children: children ?? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: "14px",
                                mt: 1.5,
                                children: t.loading()
                            })
                        ]
                    })
                }),
                isCollectionProjectPopper || isTokenTagPopper ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginDescriptor, {
                    isCollectionProjectPopper: isCollectionProjectPopper,
                    isProfilePage: isProfilePage,
                    isTokenTagPopper: isTokenTagPopper
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/FailedTrendingView.tsx







const FailedTrendingView_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(69, 163, 251, 0.2) 100%), #FFFFFF;',
            padding: theme.spacing(1, 1.5),
            boxSizing: 'border-box',
            height: 202,
            display: 'flex',
            flexDirection: 'column'
        }
    }));
function FailedTrendingView({ result, resultList, setResult, ...rest }) {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes } = FailedTrendingView_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: Theme_theme/* MaskLightTheme */.C,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingCard, {
            ...rest,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                        style: {
                            height: 'auto',
                            flexGrow: 1
                        },
                        children: t.load_failed()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewDescriptor, {
                        result: result,
                        resultList: resultList,
                        setResult: setResult
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var site_adaptor_context = __webpack_require__(8898);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TrendingView.tsx































const TrendingView_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        root: props.isTokenTagPopper || props.isCollectionProjectPopper ? {
            width: 598,
            borderRadius: theme.spacing(2),
            boxShadow: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) 0 0 15px, rgba(255, 255, 255, 0.15) 0 0 3px 1px' : 'rgba(101, 119, 134, 0.2) 0 0 15px, rgba(101, 119, 134, 0.15) 0 0 3px 1px'
        } : {
            width: '100%',
            boxShadow: 'none',
            borderRadius: 0,
            marginBottom: 0
        },
        tabListRoot: {
            flexGrow: 0
        },
        body: props.isCollectionProjectPopper ? {
            minHeight: 374,
            maxHeight: props.isCollectionProjectPopper ? props.currentTab === trader/* ContentTab */.X.Price ? 450 : props.currentTab === trader/* ContentTab */.X.Swap ? 'unset' : 374 : 'unset',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            background: 'transparent'
        } : {
            background: 'transparent',
            maxHeight: props.currentTab === trader/* ContentTab */.X.Market ? 374 : 'unset',
            display: 'flex',
            flexDirection: 'column'
        },
        footerSkeleton: props.isTokenTagPopper ? {} : {
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        content: props.isTokenTagPopper ? {} : {
            border: 'none'
        },
        tradeViewRoot: {
            maxWidth: '100% !important'
        },
        priceChartRoot: props.isTokenTagPopper ? {
            flex: 1
        } : {},
        cardHeader: {
            marginBottom: '-36px'
        },
        nftItems: {
            height: props.isCollectionProjectPopper ? 360 : 530,
            padding: theme.spacing(2),
            boxSizing: 'border-box',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        priceChartWrapper: {
            padding: theme.spacing(4, 2, props.isTokenTagPopper ? 8 : 4, 2)
        },
        nftList: {
            gap: 12
        },
        hidden: {
            padding: 0,
            visibility: 'hidden',
            height: 0
        }
    };
});
function TrendingView(props) {
    const { resultList, identity, setActive, currentResult } = props;
    const [result, setResult] = (0,react.useState)(currentResult ?? resultList[0]);
    const { isTokenTagPopper, isCollectionProjectPopper, isProfilePage } = (0,react.useContext)(TrendingViewContext);
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const theme = (0,useTheme/* default */.Z)();
    const isMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Trader);
    const isWeb3ProfileMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Web3Profile);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId: result.chainId ?? chainId
    });
    const site = (0,Site/* getSiteType */.sv)();
    const pluginIDs = (0,useValueRef/* useValueRef */.E)(settings/* pluginIDsSettings */.Mo);
    const context = {
        pluginID: site ? pluginIDs[site] : PluginID/* NetworkPluginID */.F.PLUGIN_EVM
    };
    // #region merge trending
    const { value: { trending } = {}, loading: loadingTrending, error } = useTrendingById(result, result.address);
    // #endregion
    (0,react.useEffect)(()=>{
        if (currentResult) setResult(currentResult);
    }, [
        currentResult
    ]);
    // #region stats
    const [days, setDays] = (0,react.useState)(Days/* Days */.h.ONE_DAY);
    const [currentPriceChange, setCurrentPriceChange] = (0,react.useState)(trending?.market?.price_change_percentage_24h_in_currency);
    const onPriceDaysControlChange = (0,react.useCallback)((days)=>{
        setDays(days);
        const map = {
            [Days/* Days */.h.ONE_DAY]: trending?.market?.price_change_percentage_24h_in_currency,
            [Days/* Days */.h.ONE_WEEK]: trending?.market?.price_change_percentage_7d_in_currency,
            [Days/* Days */.h.ONE_MONTH]: trending?.market?.price_change_percentage_30d_in_currency,
            [Days/* Days */.h.ONE_YEAR]: trending?.market?.price_change_percentage_1y_in_currency,
            [Days/* Days */.h.MAX]: trending?.market?.atl_change_percentage
        };
        setCurrentPriceChange(map[days]);
    }, [
        trending?.market
    ]);
    (0,react.useEffect)(()=>{
        onPriceDaysControlChange(Days/* Days */.h.ONE_DAY);
    }, [
        trending?.market
    ]);
    const isNFT = trending?.coin.type === specs/* TokenType */.iv.NonFungible;
    const { data: stats = constants/* EMPTY_LIST */.rP, isLoading: loadingStats } = usePriceStats({
        chainId: result.chainId,
        coinId: trending?.coin.id,
        sourceType: isNFT ? specs/* SourceType */.PO.NFTScan : trending?.dataProvider,
        currency: trending?.currency,
        days
    });
    // #endregion
    // #region expected chainId
    const swapExpectedContract = (0,react.useMemo)(()=>{
        const contracts = trending?.contracts?.filter((x)=>x.chainId && x.address) ?? [];
        const fallbackContracts = trending?.coin.chainId && trending.coin.contract_address ? [
            {
                chainId: trending.coin.chainId,
                address: trending.coin.contract_address,
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
            }
        ] : [];
        const _contracts = (contracts.length ? contracts : fallbackContracts).filter((x)=>x.chainId === chainId) ?? [];
        if (_contracts.length > 0) return (0,head/* default */.Z)(_contracts);
        return (0,head/* default */.Z)(contracts);
    }, [
        trending,
        chainId
    ]);
    // #endregion
    // #region if the coin is a native token or contract address exists
    const isSwappable = !isMinimalMode && !isNFT && !!trending?.coin.contract_address && (!swapExpectedContract?.pluginID || swapExpectedContract?.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    // #endregion
    // #region tabs
    const tabs = (0,react.useMemo)(()=>{
        const list = [
            trader/* ContentTab */.X.Market,
            trader/* ContentTab */.X.Price,
            trader/* ContentTab */.X.Exchange
        ];
        if (isSwappable) list.push(trader/* ContentTab */.X.Swap);
        if (isNFT) list.push(trader/* ContentTab */.X.NFTItems);
        return list;
    }, [
        isSwappable,
        isNFT
    ]);
    const [currentTab, , , setTab] = (0,useTabs/* useTabs */.Y)(tabs[0], ...tabs);
    (0,react.useLayoutEffect)(()=>{
        setTab(tabs[0]);
    }, [
        result,
        tabs[0]
    ]);
    const TabComponents = (0,react.useMemo)(()=>{
        const configs = [
            {
                key: trader/* ContentTab */.X.Market,
                label: t.plugin_trader_tab_market()
            },
            {
                key: trader/* ContentTab */.X.Price,
                label: t.plugin_trader_trending()
            },
            {
                key: trader/* ContentTab */.X.Exchange,
                label: isNFT ? t.plugin_trader_tab_activities() : t.plugin_trader_tab_exchange()
            },
            isSwappable ? {
                key: trader/* ContentTab */.X.Swap,
                label: t.plugin_trader_tab_swap()
            } : undefined,
            isNFT ? {
                key: trader/* ContentTab */.X.NFTItems,
                label: t.plugin_trader_nft_items()
            } : undefined
        ];
        return (0,compact/* default */.Z)(configs).map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                value: x.key,
                label: x.label
            }, x.key));
    }, [
        t,
        isSwappable,
        isNFT
    ]);
    // #endregion
    const { classes, cx } = TrendingView_useStyles({
        isTokenTagPopper,
        isCollectionProjectPopper,
        currentTab
    });
    // #region api ready callback
    (0,react.useEffect)(()=>{
        props.onUpdate?.();
    }, [
        loadingTrending
    ]);
    // #endregion
    const collectionId = trending?.coin.type === specs/* TokenType */.iv.NonFungible ? result.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA ? result.name : trending.coin.contract_address : undefined;
    const { value: fetchedTokens = constants/* EMPTY_LIST */.rP, done, next, error: loadError } = useNonFungibleAssetsByCollection(collectionId, result.pluginID, {
        chainId: result.chainId
    });
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FailedTrendingView, {
            result: result,
            resultList: resultList,
            setResult: setResult,
            classes: {
                root: classes.root
            }
        });
    }
    // #region display loading skeleton
    if (!trending?.currency || loadingTrending) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: Theme_theme/* MaskLightTheme */.C,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewSkeleton, {
            classes: {
                footer: classes.footerSkeleton
            },
            TrendingCardProps: {
                classes: {
                    root: classes.root
                }
            }
        })
    });
    // #endregion
    const { coin, tickers } = trending;
    const Component = /*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingViewDeck, {
        classes: {
            body: classes.body,
            content: classes.content,
            cardHeader: classes.cardHeader
        },
        currentTab: currentTab,
        stats: stats,
        identity: identity,
        setActive: setActive,
        setResult: setResult,
        resultList: resultList,
        result: result,
        currency: trending.currency,
        trending: trending,
        TrendingCardProps: {
            classes: {
                root: classes.root
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
                value: currentTab,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    px: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* MaskTabList */.C, {
                        variant: "base",
                        classes: {
                            root: classes.tabListRoot
                        },
                        onChange: (_, v)=>{
                            setTab(v);
                            if (!isProfilePage) return;
                            if (isNFT) {
                                if (v === trader/* ContentTab */.X.Price) {
                                    providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryProfileNFT_TrendSwitchTo);
                                } else if (v === trader/* ContentTab */.X.NFTItems) {
                                    providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryProfileNFT_ItemsSwitchTo);
                                } else if (v === trader/* ContentTab */.X.Exchange) {
                                    providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryProfileNFT_ActivitiesSwitchTo);
                                }
                            } else {
                                if (v === trader/* ContentTab */.X.Price) {
                                    providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryProfileTokenSwitchTrend);
                                } else if (v === trader/* ContentTab */.X.Exchange) {
                                    providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryProfileTokenSwitchMarket);
                                }
                            }
                        },
                        "aria-label": "Network Tabs",
                        children: TabComponents
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                sx: {
                    backgroundColor: isTokenTagPopper || isCollectionProjectPopper ? theme.palette.maskColor.bottom : 'transparent',
                    flexGrow: 1,
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                },
                children: [
                    currentTab === trader/* ContentTab */.X.Market && trending.dataProvider ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketPanel, {
                        trending: trending,
                        result: result
                    }) : null,
                    currentTab === trader/* ContentTab */.X.Price ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.priceChartWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChart, {
                            classes: {
                                root: classes.priceChartRoot
                            },
                            coin: coin,
                            amount: currentPriceChange ?? trending?.market?.price_change_percentage_24h_in_currency ?? 0,
                            currency: trending.currency,
                            stats: stats,
                            loading: loadingStats,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartDaysControl, {
                                rangeOptions: DEFAULT_RANGE_OPTIONS,
                                days: days,
                                onDaysChange: onPriceDaysControlChange
                            })
                        })
                    }) : null,
                    currentTab === trader/* ContentTab */.X.Exchange && trending.dataProvider ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        p: 2,
                        children: isNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NonFungibleTickersTable, {
                            id: (result.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA ? result.name : coin.address) ?? '',
                            chainId: result.chainId ?? coin.chainId ?? types/* ChainId */.a_.Mainnet,
                            result: result
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TickersTable, {
                            tickers: tickers
                        })
                    }) : null,
                    currentTab === trader/* ContentTab */.X.Swap && isSwappable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                        value: {
                            pluginID: context.pluginID,
                            chainId: (0,token/* isNativeTokenSymbol */.VD)(coin.symbol) ? coin.chainId : swapExpectedContract?.chainId
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeView, {
                            classes: {
                                root: classes.tradeViewRoot
                            },
                            TraderProps: {
                                share: site_adaptor_context/* share */.BN,
                                defaultInputCoin: (0,helpers_token/* createFungibleToken */.mn)(result.chainId, types/* SchemaType */.XQ.Native, nativeToken?.address ?? '', nativeToken?.name ?? '', nativeToken?.symbol ?? '', nativeToken?.decimals ?? 0, (0,address/* isNativeTokenAddress */.qw)(result.address) ? result.logoURL : undefined),
                                defaultOutputCoin: (0,address/* isNativeTokenAddress */.qw)(coin.contract_address) ? undefined : (0,helpers_token/* createFungibleToken */.mn)(swapExpectedContract?.chainId, types/* SchemaType */.XQ.ERC20, swapExpectedContract?.address || '', coin.name ?? coin.name, coin.symbol ?? coin.symbol ?? '', coin.decimals ?? 0, result.logoURL)
                            }
                        })
                    }) : null,
                    isNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: cx(classes.nftItems, currentTab === trader/* ContentTab */.X.NFTItems ? '' : classes.hidden),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTList, {
                            pluginID: result.pluginID,
                            className: classes.nftList,
                            tokens: fetchedTokens,
                            onNextPage: next,
                            finished: done,
                            hasError: !!loadError,
                            gap: 16
                        })
                    }) : null
                ]
            })
        ]
    });
    if (isProfilePage && isWeb3ProfileMinimalMode) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                theme: Theme_theme/* MaskLightTheme */.C,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginEnableBoundary/* PluginEnableBoundary */._, {
                    pluginID: PluginID/* PluginID */.P.Web3Profile,
                    children: Component
                })
            })
        });
    }
    return Component;
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/base.ts + 7 modules
var base = __webpack_require__(45536);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/TraderDialog.tsx
var TraderDialog = __webpack_require__(75810);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(80835);
// EXTERNAL MODULE: ./packages/web3-providers/src/types/Trending.ts
var Trending = __webpack_require__(91948);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+base@5.0.0-alpha.100_patch_hash=ved4raqjjkr2jjhghdp5ouuxk4_@types+react@18.2.21_react-do_x7tnikinjhdbsji3vhas5jytle/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(67182);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Fade/Fade.js
var Fade = __webpack_require__(49803);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TrendingPopper.tsx






const TrendingPopper = /*#__PURE__*/ (0,react.memo)(function TrendingPopper({ children, locked }) {
    const [active, setActive] = (0,react.useState)(false);
    const [name, setName] = (0,react.useState)('');
    const [isCollectionProjectPopper, setIsNFTProjectPopper] = (0,react.useState)(false);
    const [identity, setIdentity] = (0,react.useState)();
    const [badgeBounding, setBadgeBounding] = (0,react.useState)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [address, setAddress] = (0,react.useState)('');
    const [currentResult, setCurrentResult] = (0,react.useState)();
    const [type, setType] = (0,react.useState)();
    const [initialOffsetY, setInitialOffsetY] = (0,react.useState)(0);
    // open popper from message center
    (0,react.useEffect)(()=>{
        return messages/* PluginTraderMessages */.A.trendingAnchorObserved.on((ev)=>{
            setInitialOffsetY(window.scrollY);
            setName(ev.name);
            setCurrentResult(ev.currentResult);
            setType(ev.type);
            setBadgeBounding(ev.anchorBounding);
            setAnchorEl(ev.anchorEl);
            setAddress(ev.address ?? '');
            setIdentity(ev.identity);
            setIsNFTProjectPopper(!!ev.isCollectionProjectPopper);
            setActive(true);
        });
    }, []);
    (0,react.useEffect)(()=>{
        const onResize = ()=>setActive(false);
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    }, []);
    // close popper if location was changed
    const location = (0,useLocation/* default */.Z)();
    (0,react.useEffect)(()=>setActive(false), [
        location.state?.key,
        location.href
    ]);
    const badgeBoundingBottom = badgeBounding?.bottom ?? 0;
    const badgeBoundingLeft = badgeBounding?.left ?? 0;
    const positionY_Type = badgeBoundingBottom < 550 ? 'bottom' : 'top';
    const positionX_Type = window.innerWidth - badgeBoundingLeft < 700 ? 'right' : 'left';
    if (!type) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* default */.Z, {
        useCapture: true,
        onClickAway: ()=>{
            if (!locked) setActive(false);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
            in: active,
            easing: "linear",
            timeout: 250,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    left: positionX_Type === 'left' ? badgeBoundingLeft - 20 : badgeBoundingLeft - 300,
                    ...positionY_Type === 'bottom' ? {
                        top: badgeBoundingBottom + initialOffsetY + 10
                    } : {
                        bottom: window.innerHeight - badgeBoundingBottom + 10 - initialOffsetY
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AnchorContext/* AnchorProvider */.Y7, {
                    anchorEl: anchorEl,
                    anchorBounding: badgeBounding,
                    children: children?.(name, type, currentResult, setActive, identity, address, isCollectionProjectPopper)
                })
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trending/TagInspector.tsx












function TagInspector() {
    const createTrendingView = (0,react.useCallback)((name, type, currentResult, setActive, identity, address, isCollectionProjectPopper, reposition)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewWrapper, {
            address: address,
            currentResult: currentResult,
            identity: identity,
            setActive: setActive,
            name: name,
            type: type,
            reposition: reposition,
            isCollectionProjectPopper: isCollectionProjectPopper
        });
    }, []);
    const { stack } = (0,DialogStack/* useDialogStacking */.mq)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingPopper, {
            locked: stack.length > 0,
            children: createTrendingView
        })
    });
}
function TrendingViewWrapper({ name, type, reposition, currentResult, setActive, address, identity, isCollectionProjectPopper }) {
    const { value: resultList, loading: loadingResultList } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!name || !type) return constants/* EMPTY_LIST */.rP;
        const results = await entry/* DSearch */.UZ.search(isCollectionProjectPopper ? name : `${type === Trending/* TrendingAPI */.l.TagType.CASH ? '$' : '#'}${name}`, isCollectionProjectPopper ? specs/* SearchResultType */.Bk.CollectionListByTwitterHandler : undefined);
        return results.sort((a)=>a.source === specs/* SourceType */.PO.CoinMarketCap ? 1 : 0);
    }, [
        name,
        type,
        isCollectionProjectPopper
    ]);
    if (!resultList?.length || loadingResultList) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewProvider, {
        isDSearch: false,
        isCollectionProjectPopper: !!isCollectionProjectPopper,
        isProfilePage: false,
        isTokenTagPopper: !isCollectionProjectPopper,
        isPreciseSearch: false,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingView, {
            currentResult: currentResult,
            resultList: resultList,
            onUpdate: reposition,
            address: address,
            identity: identity,
            setActive: setActive
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/cashTag.tsx


const enhanceTag = {
    onHover (kind, content, event) {
        const element = event.currentTarget;
        const timer = setTimeout(async ()=>{
            const type = kind === 'cash' ? Trending/* TrendingAPI */.l.TagType.CASH : Trending/* TrendingAPI */.l.TagType.HASH;
            messages/* PluginTraderMessages */.A.trendingAnchorObserved.sendToLocal({
                name: content,
                type,
                anchorBounding: element.getBoundingClientRect(),
                anchorEl: element
            });
        }, 500);
        return ()=>{
            clearTimeout(timer);
        };
    }
};

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/index.tsx

















function openDialog() {
    return CrossIsolationEvents/* CrossIsolationMessages */.W.events.swapDialogEvent.sendToLocal({
        open: true
    });
}
const site = {
    ...base/* base */.u,
    init () {},
    SearchResultInspector: {
        ID: PluginID/* PluginID */.P.Trader,
        UI: {
            Content: function TraderSearchResultContent({ currentResult, resultList, isProfilePage, identity }) {
                if (!resultList.length || !currentResult) return null;
                const { chainId, keyword, pluginID } = currentResult;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
                    value: {
                        pluginID,
                        chainId
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewProvider, {
                        isDSearch: !isProfilePage,
                        isCollectionProjectPopper: false,
                        isProfilePage: !!isProfilePage,
                        isTokenTagPopper: false,
                        isPreciseSearch: entry/* Others */.ej.isValidAddress(keyword),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingView, {
                            resultList: resultList,
                            identity: identity,
                            currentResult: currentResult
                        })
                    })
                });
            }
        },
        Utils: {
            shouldDisplay (result) {
                return [
                    specs/* SearchResultType */.Bk.FungibleToken,
                    specs/* SearchResultType */.Bk.NonFungibleToken,
                    specs/* SearchResultType */.Bk.NonFungibleCollection,
                    specs/* SearchResultType */.Bk.CollectionListByTwitterHandler
                ].includes(result.type);
            }
        }
    },
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TagInspector, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderDialog/* TraderDialog */.F, {
                        share: site_adaptor_context/* share */.BN
                    })
                })
            ]
        });
    },
    enhanceTag: enhanceTag,
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SwapColorful, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_trader_swap",
                ns: PluginID/* PluginID */.P.Trader
            });
            const iconFilterColor = 'rgba(247, 147, 30, 0.3)';
            return {
                ApplicationEntryID: base/* base */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                        ...EntryComponentProps,
                        title: name,
                        icon: icon,
                        iconFilterColor: iconFilterColor,
                        onClick: ()=>{
                            EntryComponentProps.onClick ? EntryComponentProps.onClick?.(openDialog) : openDialog();
                            providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryAppSwapOpen);
                        }
                    });
                },
                appBoardSortingDefaultPriority: 7,
                marketListSortingPriority: 7,
                icon,
                category: 'dapp',
                name,
                tutorialLink: 'https://realmasknetwork.notion.site/f2e7d081ee38487ca1db958393ac1edc',
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "plugin_trader_swap_description"
                }),
                iconFilterColor,
                hiddenInList: true
            };
        })()
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SwapColorful, {
            size: 24,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(254, 156, 0, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(254, 156, 0, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 48188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44967);


 undefined;
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .getPluginMessage */ .db)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 91688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wb: () => (/* binding */ useAnchor),
/* harmony export */   Y7: () => (/* binding */ AnchorProvider)
/* harmony export */ });
/* unused harmony export AnchorContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const AnchorContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    anchorEl: null
});
function AnchorProvider({ anchorEl, anchorBounding, children }) {
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            anchorEl,
            anchorBounding
        }), [
        anchorEl,
        anchorBounding
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnchorContext.Provider, {
        value: contextValue,
        children: children
    });
}
function useAnchor() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AnchorContext);
}


/***/ }),

/***/ 27877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AccountIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45569);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27966);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53007);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90138);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72845);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32147);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>{
    return {
        icon: {
            width: 20,
            height: 20
        },
        iconStack: {
            display: 'inline-flex',
            alignItems: 'center'
        },
        stackedIcon: {
            marginRight: -6,
            display: 'inline-flex',
            alignItems: 'center'
        },
        linking: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        },
        link: {
            color: theme.palette.maskColor.primary,
            textDecoration: 'none'
        },
        actionIcon: {
            marginLeft: theme.spacing(0.5),
            color: theme.palette.maskColor.main
        },
        roundedIcon: {
            borderRadius: '50%'
        },
        tooltip: {
            maxWidth: 'unset'
        }
    };
});
var AddressPlatform;
(function(AddressPlatform) {
    AddressPlatform["Facebook"] = 'facebook';
    AddressPlatform["Twitter"] = 'twitter';
    AddressPlatform["NextId"] = 'next_id';
})(AddressPlatform || (AddressPlatform = {}));
function AccountTooltips({ platform, type, children }) {
    const { classes } = useStyles();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootTooltip */ .p, {
        classes: {
            tooltip: classes.tooltip
        },
        disableInteractive: true,
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            fontSize: 14,
            lineHeight: "18px",
            children: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Address === type ? t.account_icon_tooltips_only({
                context: platform
            }) : t.account_icon_tooltips({
                source: type?.replace('_', ' ') ?? '',
                context: platform
            })
        }),
        arrow: true,
        children: children
    });
}
function AccountIcons({ socialAccount, classes: externalClasses }) {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props: {
            classes: externalClasses
        }
    });
    const { supportedAddressTypes } = socialAccount;
    if (!supportedAddressTypes?.length) return null;
    const iconStyle = theme.palette.mode === 'light' ? {
        boxShadow: '0px 6px 12px rgba(28, 104, 243, 0.2)',
        backdropFilter: 'blur(8px)'
    } : undefined;
    const fromTwitter = [
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.ENS,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.SPACE_ID,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.ARBID,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Lens,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.TwitterBlue,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Address
    ].find((x)=>supportedAddressTypes.includes(x));
    const fromNextId = supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.NEXT_ID);
    const normalClasses = cx(classes.actionIcon, classes.icon);
    const roundedClasses = cx(classes.actionIcon, classes.icon, classes.roundedIcon);
    const configs = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)([
        fromNextId ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.NEXT_ID),
            platform: AddressPlatform.NextId,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.NextIDMini, {
                className: normalClasses,
                style: {
                    ...iconStyle,
                    width: 32,
                    height: 18
                }
            })
        } : null,
        fromTwitter ? {
            platform: AddressPlatform.Twitter,
            type: fromTwitter,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.TwitterXRound, {
                className: roundedClasses,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.CyberConnect) ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.CyberConnect),
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.CyberConnect,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.CyberConnect, {
                className: normalClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Leaderboard) ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Leaderboard),
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Leaderboard,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Leaderboard, {
                className: normalClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Sybil) ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Sybil),
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Sybil,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Sybil, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Mask) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Mask,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.MaskBlue, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Firefly) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Firefly,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Firefly, {
                className: normalClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.OpenSea) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.OpenSea,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.OpenSea, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.RSS3) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.RSS3,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.RSS3, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.SPACE_ID) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.SPACE_ID,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.SpaceId, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Lens) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Lens,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Lens, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null
    ]);
    if (configs.length <= 3) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: configs.map(({ platform, type, link, icon }, i)=>{
                const node = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AccountTooltips, {
                    platform: platform,
                    type: type,
                    children: icon
                }, i);
                if (link) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Linking */ .E, {
                    href: link,
                    LinkProps: {
                        className: classes.linking
                    },
                    children: node
                }, i);
                return node;
            })
        });
    }
    const sources = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(configs.flatMap((config, i)=>{
        return config.type && config.link ? [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: classes.link,
                href: config.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: config.type
            }, config.type),
            i === configs.length ? '' : ', '
        ] : null;
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootTooltip */ .p, {
        classes: {
            tooltip: classes.tooltip
        },
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            fontSize: 14,
            lineHeight: "18px",
            component: "div",
            children: [
                t.account_icon_merged_tooltip({
                    context: fromTwitter ? AddressPlatform.Twitter : fromNextId ? AddressPlatform.NextId : 'normal'
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: sources
                })
            ]
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: classes.iconStack,
            children: configs.map(({ icon }, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: classes.stackedIcon,
                    children: icon
                }, i);
            })
        })
    });
}


/***/ }),

/***/ 72665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ AddressItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81755);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90138);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45569);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89019);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47675);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        link: {
            cursor: 'pointer',
            zIndex: 1,
            '&:hover': {
                textDecoration: 'none'
            },
            lineHeight: 0
        },
        arrowDropIcon: {
            color: theme.palette.maskColor.dark
        }
    }));
function AddressItem({ socialAccount, TypographyProps = {
    fontSize: '14px',
    fontWeight: 700
}, linkIconClassName, disableLinkIcon, onClick, isMenu = false }) {
    const { classes } = useStyles();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Others */ .v)(socialAccount?.pluginID);
    if (!socialAccount) return null;
    const preferAddress = !socialAccount.label || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .isEnsSubdomain */ .t)(socialAccount.label) || socialAccount.supportedAddressTypes?.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SocialAddressType */ .b.Firefly) || // Label from Firefly is not reliable
    (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .W)(socialAccount.label, socialAccount.address);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClick: (ev)=>onClick?.(ev),
                children: preferAddress ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_7__/* .ReversedAddress */ .i, {
                    ...TypographyProps,
                    address: socialAccount.address,
                    pluginID: socialAccount.pluginID
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    fontSize: "14px",
                    fontWeight: 700,
                    ...TypographyProps,
                    children: socialAccount.label
                })
            }),
            disableLinkIcon ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.link,
                href: Others.explorerResolver.addressLink((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(socialAccount.supportedChainIds) ?? Others.getDefaultChainId(), socialAccount.address),
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_11__.LinkOut, {
                    size: 20,
                    className: linkIconClassName
                })
            }),
            isMenu ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_11__.ArrowDrop, {
                className: classes.arrowDropIcon,
                onClick: onClick
            }) : null
        ]
    });
}


/***/ }),

/***/ 26997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ApplicationEntry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme, { disabled, iconFilterColor })=>({
        applicationBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.maskColor.bg,
            borderRadius: '8px',
            height: 100
        },
        applicationBoxHover: {
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.02) translateY(-2px)',
                background: theme.palette.maskColor.bottom,
                boxShadow: theme.palette.mode === 'light' ? '0px 5px 8px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12)'
            }
        },
        title: {
            whiteSpace: 'nowrap',
            fontSize: 14
        },
        disabled: {
            opacity: 0.4,
            cursor: 'default !important',
            pointerEvent: 'none'
        },
        iconWrapper: {
            '> *': {
                width: 36,
                height: 36
            },
            ...iconFilterColor ? {
                filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`
            } : {}
        },
        arrow: {
            marginLeft: '-12px',
            color: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white
        },
        firstAreaArrow: {
            marginLeft: '12px !important'
        },
        recommendFeatureApplicationBox: {
            width: 257,
            minWidth: 257,
            height: 97,
            marginRight: 9.5,
            cursor: 'pointer',
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderRadius: 8,
            boxSizing: 'content-box'
        },
        recommendFeatureAppIconWrapper: {
            marginRight: 12,
            '> *': {
                width: '48px !important',
                height: '48px !important'
            }
        },
        recommendFeatureAppListItemName: {
            textAlign: 'left',
            fontSize: 18,
            fontWeight: 700,
            cursor: disabled ? 'default' : 'pointer',
            color: theme.palette.common.white
        },
        recommendFeatureAppListItemDescription: {
            textAlign: 'left',
            fontSize: 12,
            fontWeight: 500,
            cursor: disabled ? 'default' : 'pointer',
            color: theme.palette.common.white
        }
    }));
function ApplicationEntry(props) {
    const { title, secondTitle, onClick, disabled = false, icon, tooltipHint, recommendFeature, iconFilterColor } = props;
    const { classes, cx } = useStyles({
        disabled,
        iconFilterColor
    });
    const popperProps = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useBoundedPopperProps */ .g)();
    const jsx = recommendFeature ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "text",
        // do not change to sx. the hover image will be changed in applicationBoxHover
        style: {
            background: recommendFeature.backgroundGradient
        },
        disabled: disabled,
        className: cx(classes.recommendFeatureApplicationBox, disabled ? classes.disabled : classes.applicationBoxHover),
        onClick: disabled ? undefined : onClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.recommendFeatureAppIconWrapper,
                children: icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: classes.recommendFeatureAppListItemName,
                        children: title
                    }),
                    secondTitle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: classes.recommendFeatureAppListItemDescription,
                        children: secondTitle
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: classes.recommendFeatureAppListItemDescription,
                        children: recommendFeature.description
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: cx(classes.applicationBox, disabled ? classes.disabled : classes.applicationBoxHover),
        onClick: disabled ? undefined : onClick,
        variant: "text",
        disabled: disabled,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.iconWrapper,
                children: icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.title,
                color: "textPrimary",
                children: title
            }),
            secondTitle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "body2",
                color: "textSecondary",
                children: secondTitle
            }) : null
        ]
    });
    return tooltipHint && !disabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootTooltip */ .p, {
        PopperProps: {
            ...popperProps,
            disablePortal: true,
            placement: recommendFeature ? 'bottom' : 'top'
        },
        classes: {
            arrow: cx(classes.arrow, recommendFeature?.isFirst ? classes.firstAreaArrow : '')
        },
        placement: recommendFeature ? 'bottom' : 'top',
        arrow: true,
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: tooltipHint
        }),
        children: jsx
    }) : jsx;
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

/***/ 21766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ PluginCardFrameMini)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52478);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.maskColor.main
        },
        container: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF;',
            minHeight: '196px',
            justifyContent: 'space-between',
            color: theme.palette.maskColor.main
        },
        web3Icon: {
            marginRight: 6,
            marginTop: 2
        },
        item1: {
            color: theme.palette.maskColor.secondaryDark,
            fontSize: '14px',
            fontWeight: 400
        },
        item2: {
            color: theme.palette.maskColor.dark,
            fontSize: '14px',
            fontWeight: 500,
            marginLeft: '2px'
        },
        linkOutIcon: {
            color: theme.palette.maskColor.secondaryDark
        }
    }));
function PluginCardFrameMini({ icon, title, provider, providerLink, children }) {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    const { classes, theme } = useStyles();
    const PluginName = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.title,
        direction: "row",
        children: [
            icon ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.Web3Profile, {
                className: classes.web3Icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fontSize: 16,
                fontWeight: 700,
                color: theme.palette.maskColor.main,
                children: title ?? t.plugin_card_frame_default_title()
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                direction: "row",
                justifyContent: "space-between",
                p: 1.5,
                children: [
                    PluginName,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        direction: "row",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: classes.item1,
                                children: t.plugin_card_frame_default_provided_by()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: classes.item2,
                                children: provider ?? t.plugin_card_frame_default_provided_by_value()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                underline: "none",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                color: "textPrimary",
                                href: providerLink ?? 'https://mask.io/',
                                width: "22px",
                                height: "22px",
                                style: {
                                    alignSelf: 'center',
                                    marginLeft: '4px'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.LinkOut, {
                                    size: 16,
                                    className: classes.linkOutIcon
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                p: 1.5,
                children: children ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_7__/* .LoadingStatus */ .Q, {
                    iconSize: 24,
                    color: theme.palette.maskColor.main,
                    children: t.plugin_card_frame_loading()
                })
            })
        ]
    });
}


/***/ }),

/***/ 52623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ PluginEnableBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82897);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8311);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94685);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90097);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);
/* harmony import */ var _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49588);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            display: 'inline-flex',
            justifyContent: 'center',
            borderRadius: 20,
            width: 254,
            height: 40
        }
    }));
const PluginEnableBoundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { children, pluginID } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    const disabled = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__/* .useIsMinimalMode */ .$i)(pluginID);
    const [{ loading }, onEnablePlugin] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        await (0,_masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_6__/* .setPluginMinimalModeEnabled */ .I1)?.(pluginID, false);
    }, [
        pluginID
    ]);
    if (disabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        fontWeight: 400,
                        fontSize: 14,
                        children: t.enable_plugin_boundary_description()
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_9__/* .ActionButton */ .K, {
                    loading: loading,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__.Plugin, {
                        size: 18
                    }),
                    className: classes.root,
                    color: "primary",
                    onClick: onEnablePlugin,
                    sx: {
                        mt: 6
                    },
                    children: t.enable_plugin_boundary()
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
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

/***/ 31547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SourceProviderIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);



function SourceProviderIcon(props) {
    const { size = 16 } = props;
    switch(props.provider){
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.NFTScan:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.NFTScan, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.Gem:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Gem, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.Rarible:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Rarible, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.OpenSea:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSea, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CoinGecko, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CoinMarketCap, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.UniswapInfo:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Uniswap, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.LooksRare:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.LooksRare, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.X2Y2:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.X2Y2, {
                size: size
            });
        case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.SimpleHash:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.SimpleHash, {
                size: size
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
}


/***/ }),

/***/ 52266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ TokenWithSocialGroupMenu)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useTokenMenuCollectionList.ts
var useTokenMenuCollectionList = __webpack_require__(50215);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__(85094);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(6184);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(40262);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/TokenMenuList/index.tsx








const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        menuItem: {
            display: 'flex',
            overflow: 'hidden',
            alignItems: 'center',
            height: 36,
            padding: '0 12px'
        },
        itemText: {
            flexDirection: 'row',
            flexGrow: 1,
            justifyContent: 'space-around',
            gap: theme.spacing(1),
            alignItems: 'center',
            overflow: 'hidden'
        },
        itemCheckout: {
            display: 'flex',
            alignItems: 'center'
        },
        rank: {
            marginRight: 4
        },
        name: {
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        symbol: {
            marginLeft: theme.spacing(0.5)
        },
        coinIcon: {
            marginRight: 4
        },
        checkedIcon: {
            filter: 'drop-shadow(0px 4px 10px rgba(28, 104, 243, 0.2))',
            color: theme.palette.maskColor.primary
        }
    }));
function TokenMenuList({ options, currentOption, onSelect, fromSocialCard = false }) {
    const { classes } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: options.map((x, i)=>{
            const selected = (0,isEqual/* default */.Z)(x, currentOption);
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
                className: classes.menuItem,
                onClick: ()=>onSelect(x, i),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                        className: classes.coinIcon,
                        logoURL: x.logoURL,
                        address: x.address || '',
                        symbol: x.symbol,
                        size: 20
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        className: classes.itemText,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                fontSize: 14,
                                fontWeight: 700,
                                flexGrow: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: classes.name,
                                        children: x.name
                                    }),
                                    x.symbol ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: classes.symbol,
                                        children: [
                                            "(",
                                            x.symbol,
                                            ")"
                                        ]
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.itemCheckout,
                                children: [
                                    x.rank ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        fontSize: 14,
                                        fontWeight: 700,
                                        flexGrow: 1,
                                        overflow: "hidden",
                                        className: classes.rank,
                                        textOverflow: "ellipsis",
                                        children: [
                                            "#",
                                            x.rank
                                        ]
                                    }) : null,
                                    fromSocialCard ? null : selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                                        size: 20,
                                        className: classes.checkedIcon
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {
                                        style: {
                                            fontSize: 20,
                                            color: theme.palette.maskColor.secondaryLine,
                                            visibility: 'hidden'
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, i);
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AddressItem/index.tsx
var AddressItem = __webpack_require__(72665);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AccountIcons/index.tsx
var AccountIcons = __webpack_require__(27877);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Menu/Menu.js
var Menu = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Divider/Divider.js
var Divider = __webpack_require__(31673);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toPairs.js + 1 modules
var toPairs = __webpack_require__(2594);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js
var groupBy = __webpack_require__(60275);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/TokenWithSocialGroupMenu/index.tsx









const MENU_ITEM_HEIGHT = 40;
const MENU_LIST_PADDING = 8;
const TokenWithSocialGroupMenu_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        groupName: {
            height: 18,
            marginTop: 5,
            fontWeight: 700,
            fontSize: 14,
            padding: '0 12px'
        },
        group: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        addressMenu: {
            maxHeight: MENU_ITEM_HEIGHT * 9 + MENU_LIST_PADDING * 2,
            minWidth: 320,
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
            borderRadius: 16
        },
        divider: {
            margin: theme.spacing(1, 0),
            width: 'calc(100% - 24px)',
            color: theme.palette.maskColor.line,
            borderColor: theme.palette.maskColor.line,
            position: 'relative',
            left: 12
        },
        menuItem: {
            height: MENU_ITEM_HEIGHT,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'space-between'
        },
        addressItem: {
            display: 'flex',
            alignItems: 'center'
        },
        secondLinkIcon: {
            color: theme.palette.maskColor.secondaryDark
        },
        selectedIcon: {
            color: theme.palette.maskColor.primary,
            marginLeft: theme.spacing(2)
        }
    }));
const menuGroupNameMap = {
    FungibleToken: 'Token',
    NonFungibleToken: 'NFT',
    NonFungibleCollection: 'NFT'
};
const TokenWithSocialGroupMenu = /*#__PURE__*/ (0,react.memo)(function TokenWithSocialGroupMenu({ currentCollection, collectionList: collectionList_, disablePortal = true, disableScrollLock = true, socialAccounts, currentAddress, onAddressChange, fromSocialCard, onTokenChange, onClose, ...rest }) {
    const { classes } = TokenWithSocialGroupMenu_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const onSelect = (0,react.useCallback)((value, index)=>{
        onTokenChange?.(value, index);
        onClose?.();
    }, [
        onTokenChange,
        onClose
    ]);
    const collectionList = (0,useTokenMenuCollectionList/* useTokenMenuCollectionList */.u)(collectionList_, currentCollection);
    const groups = (0,toPairs/* default */.Z)((0,groupBy/* default */.Z)(collectionList, (x)=>x.type)).map(([type, collectionList])=>[
            type,
            collectionList
        ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Menu/* default */.Z, {
        disablePortal: disablePortal,
        disableScrollLock: disableScrollLock,
        PaperProps: {
            className: classes.addressMenu
        },
        onClose: onClose,
        ...rest,
        children: [
            groups.map(([type, groupOptions])=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.group,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.groupName,
                            children: menuGroupNameMap[type]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                            className: classes.divider
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenMenuList, {
                            options: groupOptions,
                            currentOption: currentCollection,
                            onSelect: onSelect,
                            fromSocialCard: fromSocialCard
                        })
                    ]
                }, type)),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.group,
                children: [
                    collectionList?.length > 0 && socialAccounts?.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.groupName,
                                children: t.address_viewer_address_name_address()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                                className: classes.divider
                            })
                        ]
                    }) : null,
                    socialAccounts?.map((x)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
                            className: classes.menuItem,
                            value: x.address,
                            onClick: ()=>{
                                onAddressChange?.(x.address);
                                onClose?.();
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.addressItem,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressItem/* AddressItem */.U, {
                                            socialAccount: x,
                                            linkIconClassName: classes.secondLinkIcon
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountIcons/* AccountIcons */.H, {
                                            socialAccount: x
                                        })
                                    ]
                                }),
                                (0,isSameAddress/* isSameAddress */.W)(currentAddress, x.address) && /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                                    size: 20,
                                    className: classes.selectedIcon
                                })
                            ]
                        }, x.address);
                    })
                ]
            }, "rss3")
        ]
    });
});


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

/***/ 16044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ PopupHomeTabType),
/* harmony export */   hA: () => (/* binding */ SOCIAL_MEDIA_ROUND_ICON_MAPPING),
/* harmony export */   mN: () => (/* binding */ EnhanceableSite_RSS3_NFT_SITE_KEY_map),
/* harmony export */   wV: () => (/* binding */ PERSONA_AVATAR_DB_NAMESPACE)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ICON_MAPPING, RSS3_NFT_SITE_KEY */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterX, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Minds, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterXRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.MindsRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramRoundColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
var RSS3_NFT_SITE_KEY;
(function(RSS3_NFT_SITE_KEY) {
    RSS3_NFT_SITE_KEY["TWITTER"] = '_nfts';
    RSS3_NFT_SITE_KEY["FACEBOOK"] = '_facebook_nfts';
    RSS3_NFT_SITE_KEY["INSTAGRAM"] = '_instagram_nfts';
})(RSS3_NFT_SITE_KEY || (RSS3_NFT_SITE_KEY = {}));
const EnhanceableSite_RSS3_NFT_SITE_KEY_map = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: RSS3_NFT_SITE_KEY.FACEBOOK,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: RSS3_NFT_SITE_KEY.TWITTER,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: RSS3_NFT_SITE_KEY.INSTAGRAM
};
const PERSONA_AVATAR_DB_NAMESPACE = 'com.maskbook.persona.avatar.storage';
var PopupHomeTabType;
(function(PopupHomeTabType) {
    PopupHomeTabType["SocialAccounts"] = 'Social Accounts';
    PopupHomeTabType["ConnectedWallets"] = 'Connected Wallets';
})(PopupHomeTabType || (PopupHomeTabType = {}));


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

/***/ 29128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useReportSpam)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8330);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82897);
/* harmony import */ var _UI_modals_modals_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25127);
/* harmony import */ var _locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);








/**
 * collectionId is more accurate
 */ function useReportSpam({ address, chainId, collectionId }) {
    const t = (0,_locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { data: collectionByAddress } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled: !collectionId,
        queryKey: [
            'simple-hash',
            'collection',
            chainId,
            address
        ],
        queryFn: async ()=>{
            if (!address || !chainId) return null;
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SimpleHashEVM */ .fe.getCollectionByContractAddress(address, {
                chainId
            });
        }
    });
    const { data: collectionById } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled: !!collectionId,
        queryKey: [
            'simple-hash',
            'collection',
            collectionId
        ],
        queryFn: async ()=>{
            if (!collectionId) return null;
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SimpleHashEVM */ .fe.getSimpleHashCollection(collectionId);
        }
    });
    const collection = collectionById || collectionByAddress;
    const colId = collectionId || collection?.collection_id;
    const [state, reportSpam] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!colId) return;
        const res = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NFTSpam */ .bO.report({
            collection_id: colId,
            source: 'mask-network',
            status: 'reporting'
        });
        return res.code === 200;
    }, [
        colId
    ]);
    const { showSnackbar } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .useCustomSnackbar */ .Ii)();
    const promptReport = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const confirmed = await _UI_modals_modals_js__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmDialog */ .QH.openAndWaitForClose({
            title: t.report_nft(),
            message: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    wordBreak: 'keep-all'
                },
                children: t.confirm_to_report_nft({
                    name: collection?.name || 'this NFT'
                })
            }),
            confirmVariant: 'warning'
        });
        if (!confirmed || !colId) return;
        const result = await reportSpam();
        showSnackbar(t.report_spam(), {
            variant: result ? 'success' : 'error',
            message: result ? t.report_spam_success() : t.report_spam_fail()
        });
    }, [
        colId,
        reportSpam,
        collection?.name
    ]);
    const isSpam = !!collection && collection.spam_score !== null && collection?.spam_score > _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SPAM_SCORE */ .Rk;
    return {
        isReporting: state.loading,
        isSpam,
        collection,
        promptReport
    };
}


/***/ }),

/***/ 70790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useSocialAccountsBySettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45569);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91375);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66117);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);




function useSocialAccountsBySettings(identity, typeWhitelist, sorter, signWithPersona) {
    const { data: socialAccounts, isLoading: loadingSocialAccounts, error: loadSocialAccountsError, refetch: refetchSocialAccounts } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useSocialAccountsAll */ .C)(identity, typeWhitelist, sorter);
    const userId = identity?.identifier?.userId;
    const { data: hiddenAddress, isFetching: loadingHiddenAddress, isInitialLoading, error: loadingHiddenAddressError, refetch: refetchLoadHiddenAddress } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useHiddenAddressConfigOf */ .Nl)(identity?.publicKey, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Web3Profile, userId, signWithPersona);
    const addresses = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!hiddenAddress || !socialAccounts) return socialAccounts;
        return socialAccounts.filter((x)=>{
            if (!x.supportedAddressTypes?.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SocialAddressType */ .b.NEXT_ID)) return true;
            return !hiddenAddress.some((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .currySameAddress */ .D)(x.address));
        });
    }, [
        socialAccounts,
        hiddenAddress,
        loadingHiddenAddress
    ]);
    const refetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        refetchSocialAccounts();
        refetchLoadHiddenAddress();
    }, []);
    return {
        data: addresses,
        isLoading: loadingSocialAccounts || loadingHiddenAddress,
        isInitialLoading,
        error: loadSocialAccountsError || loadingHiddenAddressError,
        refetch
    };
}


/***/ }),

/***/ 50215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useTokenMenuCollectionList)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72601);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);


function useTokenMenuCollectionList(collectionList_, currentCollection) {
    const collectionList = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(collectionList_, (x)=>`${x.address?.toLowerCase()}_${x.chainId}_${x.type}_${x.name?.toLowerCase()}_${x.source}`);
    const SourceTypeList = collectionList.map((x)=>x.source);
    return collectionList.filter((x)=>{
        if (currentCollection && x.source !== currentCollection.source && [
            _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap,
            _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko
        ].includes(currentCollection.source) && [
            _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap,
            _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko
        ].includes(x.source)) {
            return false;
        }
        if ((currentCollection?.source === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.NFTScan || !currentCollection) && SourceTypeList.includes(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinGecko) && x.source === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.CoinMarketCap) {
            return false;
        }
        return true;
    });
}


/***/ }),

/***/ 59134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ TextOverflowTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70429);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60625);




// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
const TextOverflowTooltip = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children, as, ...rest })=>{
    const [overflow, ref] = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useDetectOverflow */ .s)();
    const Tooltip = as ?? _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tooltip, {
        ...rest,
        title: overflow ? rest.title : '',
        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
            ...children.props,
            ref
        })
    });
});
TextOverflowTooltip.displayName = 'TextOverflowTooltip';


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

/***/ 91375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ useSocialAccountsAll)
});

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAddressesAll.ts



/**
 * Get all social addresses across all networks.
 */ function useSocialAddressesAll(identity, includes, sorter) {
    // TODO: to add flow
    const { IdentityService: EVM_IdentityService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { IdentityService: SolanaIdentityService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA);
    const userId = identity?.identifier?.userId;
    return (0,useQuery/* useQuery */.a)({
        enabled: !!identity && userId !== '$unknown',
        queryKey: [
            'all-social-addresses',
            userId,
            identity,
            includes
        ],
        queryFn: async ()=>{
            const allSettled = await Promise.allSettled([
                EVM_IdentityService,
                SolanaIdentityService
            ].map((x)=>x?.lookup(identity) ?? []));
            const listOfAddress = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []);
            const sorted = sorter && listOfAddress.length ? listOfAddress.sort(sorter) : listOfAddress;
            return includes?.length ? sorted.filter((x)=>includes.includes(x.type)) : sorted;
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountsFrom.ts


/**
 * Merge many social addresses into a social account.
 */ function useSocialAccountsFrom(socialAddresses) {
    const { IdentityService } = (0,useWeb3State/* useWeb3State */.d)();
    return (0,react.useMemo)(()=>{
        return IdentityService?.__mergeSocialAddressesAll__(socialAddresses);
    }, [
        socialAddresses,
        IdentityService
    ]);
}

;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountsAll.ts



/**
 * Get all social addresses across all networks.
 */ function useSocialAccountsAll(identity, includes, sorter) {
    const { data: socialAddressList = constants/* EMPTY_LIST */.rP, ...rest } = useSocialAddressesAll(identity, includes, sorter);
    const socialAccounts = useSocialAccountsFrom(socialAddressList) ?? constants/* EMPTY_LIST */.rP;
    return {
        ...rest,
        data: socialAccounts
    };
}


/***/ }),

/***/ 91948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ TrendingAPI)
/* harmony export */ });
var TrendingAPI; /** NFT only */  /** NFT only */  /** NFT only */  /** NFT only */  /** NFT only */  /** NFT only */  /** NFT only */  /** NFT only */  /** fungible token only */  /** fungible token only */  /** NFT only */  /** NFT only */  /** NFT only */  // #region historical
 // #endregion
 /** Get all supported coins. */  /** Get all related coins with a keyword. */  /** Get coin info by address. */  /** Get coin trending information by id. */  /** Get coin price stats by id. */  /** Get token info by symbol */ 
(function(TrendingAPI) {
    let TagType;
    (function(TagType) {
        TagType[TagType["CASH"] = 1] = "CASH";
        TagType[TagType["HASH"] = 2] = "HASH";
    })(TagType = TrendingAPI.TagType || (TrendingAPI.TagType = {}));
})(TrendingAPI || (TrendingAPI = {}));


/***/ }),

/***/ 69212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ formatElapsed)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50139);

function formatElapsed(from) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Date.now() - from;
    if (elapsed < msPerMinute) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV.t('relative_time_seconds_ago', {
        count: Math.round(elapsed / 1000)
    });
    if (elapsed < msPerHour) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV.t('relative_time_minutes_ago', {
        count: Math.round(elapsed / msPerMinute)
    });
    if (elapsed < msPerDay) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV.t('relative_time_hours_ago', {
        count: Math.round(elapsed / msPerHour)
    });
    if (elapsed < msPerMonth) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV.t('relative_time_days_ago', {
        count: Math.round(elapsed / msPerDay)
    });
    if (elapsed < msPerYear) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV.t('relative_time_months_ago', {
        count: Math.round(elapsed / msPerMonth)
    });
    return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV.t('relative_time_years_ago', {
        count: Math.round(elapsed / msPerYear)
    });
}


/***/ }),

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked'));

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


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Jz: () => (/* reexport */ mouse),
  Ys: () => (/* reexport */ src_select)
});

// UNUSED EXPORTS: clientPoint, create, creator, customEvent, event, local, matcher, namespace, namespaces, selectAll, selection, selector, selectorAll, style, touch, touches, window

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/on.js
var on = __webpack_require__(27111);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/sourceEvent.js


/* harmony default export */ function sourceEvent() {
  var current = on/* event */.B, source;
  while (source = current.sourceEvent) current = source;
  return current;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/point.js
/* harmony default export */ function point(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/mouse.js



/* harmony default export */ function mouse(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/index.js + 32 modules
var selection = __webpack_require__(97203);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/select.js


/* harmony default export */ function src_select(selector) {
  return typeof selector === "string"
      ? new selection/* Selection */.Y1([[document.querySelector(selector)]], [document.documentElement])
      : new selection/* Selection */.Y1([[selector]], selection/* root */.Jz);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/index.js




















/***/ }),

/***/ 54701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}


/***/ }),

/***/ 53722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83137);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[prefix], local: name} : name;
}


/***/ }),

/***/ 83137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ xhtml),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ 97203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y1: () => (/* binding */ Selection),
  ZP: () => (/* binding */ src_selection),
  Jz: () => (/* binding */ root)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(15032);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/select.js



/* harmony default export */ function selection_select(select) {
  if (typeof select !== "function") select = (0,selector/* default */.Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(12185);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/selectAll.js



/* harmony default export */ function selectAll(select) {
  if (typeof select !== "function") select = (0,selectorAll/* default */.Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(54701);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ function filter(match) {
  if (typeof match !== "function") match = (0,matcher/* default */.Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ function sparse(update) {
  return new Array(update.length);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ function enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/constant.js
/* harmony default export */ function constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/data.js




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ function data(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ function exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/join.js
/* harmony default export */ function join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ function merge(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/order.js
/* harmony default export */ function order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ function sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/call.js
/* harmony default export */ function call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ function nodes() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/node.js
/* harmony default export */ function node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/size.js
/* harmony default export */ function size() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ function empty() {
  return !this.node();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/each.js
/* harmony default export */ function each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(53722);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function attr(name, value) {
  var fullname = (0,namespace/* default */.Z)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(97733);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function selection_raise() {
  return this.each(raise);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function selection_lower() {
  return this.each(lower);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/namespaces.js
var namespaces = __webpack_require__(83137);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/creator.js



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === namespaces/* xhtml */.P && document.documentElement.namespaceURI === namespaces/* xhtml */.P
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function creator(name) {
  var fullname = (0,namespace/* default */.Z)(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/append.js


/* harmony default export */ function append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ function insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,selector/* default */.Z)(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function selection_remove() {
  return this.each(remove);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ function datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/on.js
var on = __webpack_require__(27111);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/window.js
var src_window = __webpack_require__(39429);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = (0,src_window/* default */.Z)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/index.js
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  filter: filter,
  data: data,
  enter: enter,
  exit: exit,
  join: join,
  merge: merge,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: node,
  size: size,
  empty: empty,
  each: each,
  attr: attr,
  style: style/* default */.Z,
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: datum,
  on: on/* default */.ZP,
  dispatch: dispatch
};

/* harmony default export */ const src_selection = (selection);


/***/ }),

/***/ 27111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ event),
/* harmony export */   ZP: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export customEvent */
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
}

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ 97733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ styleValue),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39429);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 15032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ 12185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ 39429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ 45912:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: active, interrupt, transition

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/index.js + 32 modules
var selection = __webpack_require__(97203);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-dispatch@1.0.6/node_modules/d3-dispatch/src/dispatch.js
var dispatch = __webpack_require__(25674);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-timer@1.0.10/node_modules/d3-timer/src/timer.js
var timer = __webpack_require__(36861);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-timer@1.0.10/node_modules/d3-timer/src/timeout.js
var timeout = __webpack_require__(5141);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/schedule.js



var emptyOn = (0,dispatch/* default */.Z)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var schedule_SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,timer/* timer */.HT)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = schedule_SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== schedule_SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,timeout/* default */.Z)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,timeout/* default */.Z)(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/interrupt.js


/* harmony default export */ function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-interpolate@1.4.0/node_modules/d3-interpolate/src/transform/index.js + 2 modules
var transform = __webpack_require__(69014);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(53722);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-color@1.4.1/node_modules/d3-color/src/color.js + 1 modules
var color = __webpack_require__(33830);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-interpolate@1.4.0/node_modules/d3-interpolate/src/number.js
var number = __webpack_require__(44701);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-interpolate@1.4.0/node_modules/d3-interpolate/src/rgb.js + 3 modules
var rgb = __webpack_require__(44675);
// EXTERNAL MODULE: ./node_modules/.pnpm/d3-interpolate@1.4.0/node_modules/d3-interpolate/src/string.js
var string = __webpack_require__(56015);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? number/* default */.Z
      : b instanceof color/* default */.ZP ? rgb/* default */.ZP
      : (c = (0,color/* default */.ZP)(b)) ? (b = c, rgb/* default */.ZP)
      : string/* default */.Z)(a, b);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/attr.js





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function attr(name, value) {
  var fullname = (0,namespace/* default */.Z)(name), i = fullname === "transform" ? transform/* interpolateTransformSvg */.w : interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,namespace/* default */.Z)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ function delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

/* harmony default export */ function duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

/* harmony default export */ function ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(54701);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ function filter(match) {
  if (typeof match !== "function") match = (0,matcher/* default */.Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new transition_Transition(subgroups, this._parents, this._name, this._id);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ function merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new transition_Transition(merges, this._parents, this._name, this._id);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/on.js


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function remove() {
  return this.on("end.remove", removeFunction(this._id));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(15032);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/select.js




/* harmony default export */ function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,selector/* default */.Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new transition_Transition(subgroups, this._parents, name, id);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(12185);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ function selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,selectorAll/* default */.Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new transition_Transition(subgroups, parents, name, id);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/selection.js


var Selection = selection/* default */.ZP.prototype.constructor;

/* harmony default export */ function transition_selection() {
  return new Selection(this._groups, this._parents);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-selection@1.4.2/node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(97733);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,style/* styleValue */.S)(this, name),
        string1 = (this.style.removeProperty(name), (0,style/* styleValue */.S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,style/* styleValue */.S)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,style/* styleValue */.S)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,style/* styleValue */.S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? transform/* interpolateTransformCss */.Y : interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/text.js


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ function transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new transition_Transition(groups, this._parents, name, id1);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/end.js


/* harmony default export */ function end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/transition/index.js





















var id = 0;

function transition_Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition_transition(name) {
  return (0,selection/* default */.ZP)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection/* default */.ZP.prototype;

transition_Transition.prototype = transition_transition.prototype = {
  constructor: transition_Transition,
  select: transition_select,
  selectAll: selectAll,
  filter: filter,
  merge: merge,
  selection: transition_selection,
  transition: transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on,
  attr: attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: remove,
  tween: tween,
  delay: delay,
  duration: duration,
  ease: ease,
  end: end
};

// EXTERNAL MODULE: ./node_modules/.pnpm/d3-ease@1.0.7/node_modules/d3-ease/src/cubic.js
var cubic = __webpack_require__(51476);
;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubic/* cubicInOut */.tw
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = (0,timer/* now */.zO)(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ function selection_transition(name) {
  var id,
      timing;

  if (name instanceof transition_Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = (0,timer/* now */.zO)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new transition_Transition(groups, this._parents, name, id);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/selection/index.js




selection/* default */.ZP.prototype.interrupt = selection_interrupt;
selection/* default */.ZP.prototype.transition = selection_transition;

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/active.js



var root = (/* unused pure expression or super */ null && ([null]));

/* harmony default export */ function active(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-transition@1.3.2/node_modules/d3-transition/src/index.js






/***/ }),

/***/ 43272:
/***/ (() => {


// UNUSED EXPORTS: voronoi

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/RedBlackTree.js
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ const src_RedBlackTree = (RedBlackTree);

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/Edge.js


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index);
  cells[right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = edges.length,
      edge;

  while (i--) {
    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > Diagram_epsilon
            || Math.abs(edge[0][1] - edge[1][1]) > Diagram_epsilon)) {
      delete edges[i];
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/Cell.js



function createCell(site) {
  return cells[site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = cells.length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > Diagram_epsilon || Math.abs(endY - startY) > Diagram_epsilon) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
              Math.abs(endX - x0) < Diagram_epsilon && y1 - endY > Diagram_epsilon ? [x0, Math.abs(startX - x0) < Diagram_epsilon ? startY : y1]
              : Math.abs(endY - y1) < Diagram_epsilon && x1 - endX > Diagram_epsilon ? [Math.abs(startY - y1) < Diagram_epsilon ? startX : x1, y1]
              : Math.abs(endX - x1) < Diagram_epsilon && endY - y0 > Diagram_epsilon ? [x1, Math.abs(startX - x1) < Diagram_epsilon ? startY : y0]
              : Math.abs(endY - y0) < Diagram_epsilon && endX - x0 > Diagram_epsilon ? [Math.abs(startY - y0) < Diagram_epsilon ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/Circle.js



var circlePool = [];

var firstCircle;

function Circle() {
  RedBlackNode(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = circles._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  circles.insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    circles.remove(circle);
    circlePool.push(circle);
    RedBlackNode(circle);
    arc.circle = null;
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/Beach.js






var beachPool = [];

function Beach() {
  RedBlackNode(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < Diagram_epsilon
      && Math.abs(y - lArc.circle.cy) < Diagram_epsilon) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  detachCircle(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < Diagram_epsilon
      && Math.abs(y - rArc.circle.cy) < Diagram_epsilon) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  detachCircle(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

  attachCircle(lArc);
  attachCircle(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = beaches._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > Diagram_epsilon) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > Diagram_epsilon) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -Diagram_epsilon) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -Diagram_epsilon) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  detachCircle(lArc);
  detachCircle(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/Diagram.js






var Diagram_epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram_Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new src_RedBlackTree;
  circles = new src_RedBlackTree;

  while (true) {
    circle = firstCircle;
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        addBeach(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      removeBeach(circle.arc);
    } else {
      break;
    }
  }

  sortCellHalfedges();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    clipEdges(x0, y0, x1, y1);
    clipCells(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram_Diagram.prototype = {
  constructor: Diagram_Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/voronoi.js




/* harmony default export */ function voronoi() {
  var x = pointX,
      y = pointY,
      extent = null;

  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s = [Math.round(x(d, i, data) / epsilon) * epsilon, Math.round(y(d, i, data) / epsilon) * epsilon];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), voronoi) : x;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), voronoi) : y;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/d3-voronoi@1.1.4/node_modules/d3-voronoi/src/index.js



/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ })

}]);
//# sourceMappingURL=chunk.6189.js.map