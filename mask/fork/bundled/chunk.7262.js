(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7262],{

/***/ 94892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ usePluginTransField),
/* harmony export */   s: () => (/* binding */ PluginTransFieldRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);


function PluginTransFieldRender({ pluginID, field }) {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: field
    });
}
function usePluginTransField() {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}


/***/ }),

/***/ 22528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SocialAccountList/index.tsx + 3 modules
var SocialAccountList = __webpack_require__(65447);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/theme/src/Theme/Provider.tsx
var Provider = __webpack_require__(39112);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/ScopedDomains/index.tsx
var ScopedDomains = __webpack_require__(38050);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/plugins/Handle/src/base.ts + 7 modules
var base = __webpack_require__(62244);
;// CONCATENATED MODULE: ./packages/plugins/Handle/src/SiteAdaptor/PluginHeader.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        provider: {
            display: 'flex',
            alignItems: 'center',
            '& > a': {
                lineHeight: 0
            }
        },
        providerBy: {
            marginRight: theme.spacing(0.5),
            color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.text.secondary
        },
        wrapper: {
            padding: theme.spacing(2)
        }
    };
});
function PluginHeader() {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        className: classes.wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 0.5,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.DecentralizedSearch, {
                        size: 24
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: theme.palette.maskColor.dark,
                        fontWeight: "bolder",
                        children: t.decentralized_search_name()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                className: classes.provider,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        fontSize: 14,
                        fontWeight: "400",
                        className: classes.providerBy,
                        children: t.plugin_provider_by()
                    }),
                    base/* base */.u.publisher ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        fontSize: 14,
                        fontWeight: "500",
                        component: "div",
                        color: vars/* MaskColorVar */.Z.textPluginColor,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                            pluginID: PluginID/* PluginID */.P.Handle,
                            field: base/* base */.u.publisher.name
                        })
                    }) : null,
                    base/* base */.u.publisher?.link ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: base/* base */.u.publisher?.link,
                        underline: "none",
                        target: "_blank",
                        rel: "noopener",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Provider, {
                            size: 18,
                            style: {
                                marginLeft: 4
                            }
                        })
                    }) : null
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Handle/src/constants.ts


const SuffixToChainIconMap = {
    eth: icon_generated_as_jsx.ENS,
    bnb: icon_generated_as_jsx.SpaceId,
    csb: icon_generated_as_jsx.Crossbell,
    avax: icon_generated_as_jsx.Avalanche,
    arb: icon_generated_as_jsx.Arbitrum,
    bit: icon_generated_as_jsx.Bit,
    x: icon_generated_as_jsx.Unstoppable,
    dao: icon_generated_as_jsx.Unstoppable,
    crypto: icon_generated_as_jsx.Unstoppable,
    wallet: icon_generated_as_jsx.Unstoppable,
    bitcoin: icon_generated_as_jsx.Unstoppable,
    '888': icon_generated_as_jsx.Unstoppable,
    blockchain: icon_generated_as_jsx.Unstoppable,
    lens: icon_generated_as_jsx.Lens
};
const SuffixToChainIdMap = {
    eth: types/* ChainId */.a_.Mainnet,
    bnb: types/* ChainId */.a_.BSC,
    csb: types/* ChainId */.a_.Mainnet,
    avax: types/* ChainId */.a_.Avalanche,
    arb: types/* ChainId */.a_.Arbitrum,
    bit: types/* ChainId */.a_.Mainnet,
    x: types/* ChainId */.a_.Mainnet,
    dao: types/* ChainId */.a_.Mainnet,
    crypto: types/* ChainId */.a_.Mainnet,
    wallet: types/* ChainId */.a_.Mainnet,
    bitcoin: types/* ChainId */.a_.Mainnet,
    '888': types/* ChainId */.a_.Mainnet,
    blockchain: types/* ChainId */.a_.Mainnet,
    lens: types/* ChainId */.a_.Mainnet
};

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/resolveNonFungibleTokenIdFromEnsDomain.ts


function resolveNonFungibleTokenIdFromEnsDomain(domain) {
    return new bignumber/* BigNumber */.O((0,lib.keccak256)(domain.replace(/\.\w+$/, ''))).toFixed();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/attemptUntil.ts
var attemptUntil = __webpack_require__(92358);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountListByAddressOrDomain.ts




function useSocialAccountListByAddressOrDomain(address, domain, defaultBindingProofs) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (defaultBindingProofs?.length) return defaultBindingProofs;
        if (!address && !domain) return constants/* EMPTY_LIST */.rP;
        return (0,attemptUntil/* attemptUntil */.C)([
            async ()=>domain ? await entry/* NextIDProof */.q7.queryProfilesByDomain(domain) : constants/* EMPTY_LIST */.rP,
            async ()=>address ? await entry/* NextIDProof */.q7.queryProfilesByAddress(address) : constants/* EMPTY_LIST */.rP,
            async ()=>address ? await entry/* Web3Bio */.f7.queryProfilesByAddress(address) : constants/* EMPTY_LIST */.rP
        ], undefined, (result)=>!result?.length);
    }, [
        address,
        domain,
        JSON.stringify(defaultBindingProofs)
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Handle/src/SiteAdaptor/context.tsx





const ENSContext = /*#__PURE__*/ (0,react.createContext)({
    nextIdBindings: [],
    reversedAddress: undefined,
    tokenId: undefined,
    domain: ''
});
ENSContext.displayName = 'ENSContext';
function ENSProvider({ children, result }) {
    const { domain, address, bindingProofs } = result;
    const tokenId = domain ? resolveNonFungibleTokenIdFromEnsDomain(domain) : '';
    const { value: nextIdBindings = constants/* EMPTY_LIST */.rP } = useSocialAccountListByAddressOrDomain(address, domain, bindingProofs);
    const context = (0,react.useMemo)(()=>({
            reversedAddress: address,
            tokenId,
            domain,
            nextIdBindings
        }), [
        address,
        tokenId,
        domain,
        JSON.stringify(nextIdBindings)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ENSContext.Provider, {
        value: context,
        children: children
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Handle/src/SiteAdaptor/SearchResultInspector.tsx












const SearchResultInspector_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            padding: theme.spacing(0, 2)
        },
        ensInfo: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 16
        },
        ensIcon: {
            marginRight: 4
        },
        domain: {
            fontWeight: 700,
            color: theme.palette.maskColor.publicMain,
            fontSize: 18,
            lineHeight: '18px'
        },
        reversedAddress: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.maskColor.secondaryDark,
            fontSize: 14,
            lineHeight: '18px'
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none !important'
        },
        reversedAddressIcon: {
            marginRight: 2,
            marginBottom: 1,
            cursor: 'pointer',
            color: theme.palette.maskColor.secondaryDark
        },
        accounts: {
            marginLeft: 'auto'
        }
    };
});
const SearchResultInspectorContent = /*#__PURE__*/ (0,react.memo)(function SearchResultInspectorContent() {
    const { classes } = SearchResultInspector_useStyles();
    const { reversedAddress, nextIdBindings, domain } = (0,react.useContext)(ENSContext);
    const suffix = domain ? domain.split('.').pop() : undefined;
    const ChainIcon = suffix ? SuffixToChainIconMap[suffix] ?? icon_generated_as_jsx.ETH : null;
    const { setPair } = ScopedDomains/* ScopedDomainsContainer */.h.useContainer();
    (0,react.useEffect)(()=>{
        if (!reversedAddress || !domain) return;
        setPair(reversedAddress, domain);
    }, [
        reversedAddress,
        domain
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: classes.ensInfo,
                    children: [
                        domain && ChainIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainIcon, {
                            size: 30,
                            className: classes.ensIcon
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                domain ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.domain,
                                    children: entry/* Others */.ej.formatDomainName(domain) || domain
                                }) : null,
                                reversedAddress ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.reversedAddress,
                                    children: [
                                        reversedAddress,
                                        ' ',
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                            size: 20,
                                            className: classes.reversedAddressIcon,
                                            text: reversedAddress
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: classes.link,
                                            href: entry/* Others */.ej.explorerResolver.addressLink((suffix ? SuffixToChainIdMap[suffix] : types/* ChainId */.a_.Mainnet) ?? types/* ChainId */.a_.Mainnet, reversedAddress) ?? '',
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                size: 20,
                                                className: classes.reversedAddressIcon
                                            })
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccountList/* SocialAccountList */.O, {
                            nextIdBindings: nextIdBindings,
                            className: classes.accounts
                        })
                    ]
                })
            })
        ]
    });
});
const SearchResultInspector_useTheme = ()=>theme/* MaskLightTheme */.C;
const useMaskIconPalette = (theme)=>theme.palette.mode;
const SearchResultInspector = /*#__PURE__*/ (0,react.memo)(function SearchResultInspector(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ENSProvider, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider/* MaskThemeProvider */.R, {
            useTheme: SearchResultInspector_useTheme,
            useMaskIconPalette: useMaskIconPalette,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultInspectorContent, {})
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Handle/src/SiteAdaptor/index.tsx







const site = {
    ...base/* base */.u,
    init (signal) {},
    SearchResultInspector: {
        ID: PluginID/* PluginID */.P.Handle,
        UI: {
            Content: ({ resultList })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultInspector, {
                    keyword: resultList[0].keyword,
                    keywordType: resultList[0].type,
                    result: resultList[0]
                })
        },
        Utils: {
            shouldDisplay (result) {
                return [
                    specs/* SearchResultType */.Bk.Domain,
                    specs/* SearchResultType */.Bk.EOA
                ].includes(result.type);
            }
        }
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base */.u.ID,
            marketListSortingPriority: 20,
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_ens_description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_ens_name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ENS, {
                size: 36
            })
        }
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 38096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ openWindow)
/* harmony export */ });
// Behavior
// Dimension
function openWindow(url, target = '_blank', features = {}) {
    if (!url) return null;
    const flags = [];
    for (const [name, value] of Object.entries(features.behaviors ?? {})){
        if (value) flags.push(`${name}=1`);
    }
    if (!features.opener) flags.push('noopener');
    if (!features.referrer) flags.push('noreferrer');
    if (Number.isFinite(features.width)) flags.push(`width=${features.width}`);
    if (Number.isFinite(features.height)) flags.push(`height=${features.height}`);
    if (Number.isFinite(features.screenX)) flags.push(`screenX=${features.screenX}`);
    if (Number.isFinite(features.screenY)) flags.push(`screenY=${features.screenY}`);
    return window.open(url, target, flags.join(' '));
}


/***/ }),

/***/ 84271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useValueRef)
/* harmony export */ });
/* unused harmony export useValueRefJSON */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function getServerSnapshot() {
    throw new Error('getServerSnapshot is not supported');
}
function useValueRef(ref) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)((f)=>ref.addListener(f), ()=>ref.value, getServerSnapshot);
}
/** @deprecated */ function useValueRefJSON(ref) {
    return useSyncExternalStore((f)=>ref.addListener(f), ()=>ref.asJSON);
}


/***/ }),

/***/ 98662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34278);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        copy: {
            '&:hover': {
                color: theme.palette.maskColor.main
            }
        }
    }));
/** defaults to 'Copied' */ /** stop event propagation and prevent default */ const CopyButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CopyButton({ text, title, successText, size, color, scoped = true, className, ...props }) {
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props
    });
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ev)=>{
        if (scoped) {
            ev.stopPropagation();
            ev.preventDefault();
        }
        copyToClipboard(text);
        setCopied(true);
        setActive(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(setActive, 1500, false);
    }, [
        text,
        scoped
    ]);
    const tooltipTitle = copied ? successText ?? t.copied() : title ?? t.copy();
    const iconProps = {
        size,
        color
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootTooltip */ .p, {
        open: active,
        title: tooltipTitle,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            underline: "none",
            component: "button",
            onClick: handleCopy,
            color: "inherit",
            ...props,
            fontSize: 0,
            className: cx(classes.root, className),
            children: active ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Check, {
                ...iconProps,
                color: theme.palette.maskColor.success
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Copy, {
                ...iconProps,
                className: classes.copy
            })
        })
    });
});


/***/ }),

/***/ 93301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 65447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ SocialAccountList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(92935);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/theme/src/Theme/colors.ts
var colors = __webpack_require__(38060);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SocialAccountList/SocialTooltip.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    title: {
        padding: '6px 2px'
    }
});
// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
function SocialTooltip({ children, platform }) {
    const { classes } = useStyles();
    const [inView, setInView] = (0,react.useState)(false);
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const ref = (0,react.useRef)(null);
    const title = platform ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.title,
        fontSize: 14,
        children: t.account_icon_tooltips({
            source: (0,resolver/* resolveNextIDPlatformName */.JF)(platform) || platform
        })
    }) : null;
    (0,react.useEffect)(()=>{
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver((entries)=>{
            const [entry] = entries;
            setInView(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: '0px'
        });
        observer.observe(el);
        return ()=>observer.unobserve(el);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
        PopperProps: {
            sx: {
                display: inView ? 'block' : 'none'
            }
        },
        disableInteractive: true,
        arrow: true,
        placement: "top",
        title: title,
        children: /*#__PURE__*/ (0,react.cloneElement)(children, {
            ...children.props,
            ref
        })
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SocialAccountList/utils.tsx


const resolveNextIDPlatformIcon = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [types/* NextIDPlatform */.V.Ethereum]: icon_generated_as_jsx.ETH,
    [types/* NextIDPlatform */.V.NextID]: null,
    [types/* NextIDPlatform */.V.GitHub]: icon_generated_as_jsx.GitHub,
    [types/* NextIDPlatform */.V.Keybase]: icon_generated_as_jsx.Keybase,
    [types/* NextIDPlatform */.V.Twitter]: icon_generated_as_jsx.TwitterXRound,
    [types/* NextIDPlatform */.V.ENS]: icon_generated_as_jsx.ENS,
    [types/* NextIDPlatform */.V.RSS3]: null,
    [types/* NextIDPlatform */.V.LENS]: icon_generated_as_jsx.Lens,
    [types/* NextIDPlatform */.V.REDDIT]: icon_generated_as_jsx.RedditRound,
    [types/* NextIDPlatform */.V.SYBIL]: null,
    [types/* NextIDPlatform */.V.EthLeaderboard]: null,
    [types/* NextIDPlatform */.V.SpaceId]: icon_generated_as_jsx.SpaceId,
    [types/* NextIDPlatform */.V.Farcaster]: icon_generated_as_jsx.Farcaster,
    [types/* NextIDPlatform */.V.Bit]: icon_generated_as_jsx.Bit,
    [types/* NextIDPlatform */.V.Unstoppable]: icon_generated_as_jsx.Unstoppable,
    [types/* NextIDPlatform */.V.CyberConnect]: icon_generated_as_jsx.CyberConnect
}, icon_generated_as_jsx.Web);

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SocialAccountList/SocialListItem.tsx














const SocialListItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        listItem: {
            boxSizing: 'border-box',
            padding: theme.spacing(0.5),
            borderRadius: 4,
            color: theme.palette.maskColor.main,
            display: 'block',
            '&:hover': {
                background: theme.palette.maskColor.bg
            },
            marginBottom: 6,
            '&:last-of-type': {
                marginBottom: 0
            }
        },
        content: {
            whiteSpace: 'nowrap',
            height: 40,
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            borderRadius: '50%'
        },
        socialName: {
            color: theme.palette.maskColor.main,
            fontWeight: 400,
            marginLeft: 4,
            fontSize: 14
        },
        accountName: {
            color: theme.palette.maskColor.main,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        address: {
            color: colors/* MaskColors */.m.light.text.secondary,
            marginTop: 2,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'auto'
        },
        addressText: {
            fontSize: '10px',
            overflow: 'auto',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        copyButton: {
            marginLeft: theme.spacing(0.5),
            color: colors/* MaskColors */.m.light.text.secondary,
            padding: 0
        },
        followButton: {
            marginLeft: 'auto',
            height: 32,
            padding: theme.spacing(1, 1.5),
            backgroundColor: '#ABFE2C',
            color: '#000',
            borderRadius: 99,
            minWidth: 64,
            fontSize: 12,
            '&:hover': {
                backgroundColor: '#ABFE2C',
                color: '#000'
            }
        },
        linkIcon: {
            display: 'flex',
            marginLeft: 'auto'
        },
        linkOutIcon: {
            cursor: 'pointer'
        },
        related: {
            whiteSpace: 'break-spaces',
            lineBreak: 'anywhere',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4
        },
        ens: {
            whiteSpace: 'nowrap',
            padding: theme.spacing(0.25, 0.5),
            marginRight: 6,
            fontSize: 12,
            maxWidth: '100%',
            display: 'inline-block',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 4
        }
    }));
const ENSAddress = /*#__PURE__*/ (0,react.memo)(({ domain })=>{
    const { classes } = SocialListItem_useStyles();
    const { value: address } = (0,useAsync/* default */.Z)(()=>{
        return entry/* ENS */.nB.lookup(domain);
    }, [
        domain
    ]);
    if (!address) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.address,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.addressText,
                children: address
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                text: address,
                size: 14,
                className: classes.copyButton
            })
        ]
    });
});
ENSAddress.displayName = 'ENSAddress';
function SocialAccountListItem({ platform, link, identity, name, onClose, relatedList, profileUrl }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { classes, cx } = SocialListItem_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { loading, value } = (0,useAsync/* default */.Z)(async ()=>{
        if (platform !== types/* NextIDPlatform */.V.LENS || !identity) return;
        const profile = await entry/* Lens */.Ri.getProfileByHandle(identity);
        const isFollowing = await entry/* Lens */.Ri.queryFollowStatus(account, profile.id);
        return {
            ownedBy: profile.ownedBy,
            isFollowing
        };
    }, [
        identity,
        platform,
        account
    ]);
    const PlatformIcon = resolveNextIDPlatformIcon(platform);
    const renderIcon = PlatformIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PlatformIcon, {
        size: 20
    }) : null;
    const icon = profileUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
        size: 20,
        src: profileUrl,
        className: classes.avatar,
        fallback: renderIcon
    }) : renderIcon;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialTooltip, {
        platform: platform,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.listItem,
            disableRipple: true,
            disabled: false,
            onClick: async ()=>{
                if (platform === types/* NextIDPlatform */.V.ENS) {
                    const address = await entry/* ENS */.nB.lookup(identity);
                    if (!address) return;
                    (0,open_window/* openWindow */.x)(`https://app.ens.domains/address/${address}`);
                }
                return (0,open_window/* openWindow */.x)(link ?? (0,resolver/* resolveNextIDPlatformLink */.Ri)(platform, identity, name));
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.content,
                    children: [
                        icon,
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: cx(classes.socialName, classes.accountName),
                            component: "div",
                            children: [
                                Others.isValidAddress(name || identity) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        Others.formatAddress(name || identity, 4),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                            size: 14,
                                            text: name || identity
                                        })
                                    ]
                                }) : name || identity,
                                platform === types/* NextIDPlatform */.V.ENS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ENSAddress, {
                                    domain: identity
                                }) : null
                            ]
                        }),
                        platform === types/* NextIDPlatform */.V.LENS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                            loading: loading,
                            variant: "text",
                            className: classes.followButton,
                            disableElevation: true,
                            onClick: (event)=>{
                                event.stopPropagation();
                                onClose();
                                CrossIsolationEvents/* CrossIsolationMessages */.W.events.followLensDialogEvent.sendToLocal({
                                    open: true,
                                    handle: identity
                                });
                            },
                            children: (0,isSameAddress/* isSameAddress */.W)(account, value?.ownedBy) ? t.view() : value?.isFollowing ? t.lens_following() : t.lens_follow()
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.linkIcon,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                size: 16,
                                className: classes.linkOutIcon
                            })
                        })
                    ]
                }),
                platform === types/* NextIDPlatform */.V.ENS && relatedList?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.related,
                    children: relatedList.map((y)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "span",
                            className: classes.ens,
                            children: y.name
                        }, y.name))
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFireflyLensAccounts.ts
var useFireflyLensAccounts = __webpack_require__(98658);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SocialAccountList/index.tsx











const SocialAccountList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        iconStack: {
            height: 28,
            padding: theme.spacing(0.5),
            boxSizing: 'border-box',
            borderRadius: 8,
            minWidth: 'auto',
            '&:hover': {
                backgroundColor: 'transparent'
            },
            '&:active': {
                backgroundColor: 'transparent'
            }
        },
        icon: {
            marginLeft: '-3.5px',
            ':nth-of-type(1)': {
                zIndex: 2,
                marginLeft: 0
            },
            ':nth-of-type(2)': {
                zIndex: 1
            },
            ':nth-of-type(3)': {
                zIndex: 0
            }
        },
        menu: {
            minWidth: 320,
            maxWidth: 340,
            boxSizing: 'border-box',
            maxHeight: 296,
            borderRadius: 16,
            padding: theme.spacing(1.5),
            translate: theme.spacing(1.9, 1),
            background: theme.palette.maskColor.bottom,
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        menuList: {
            padding: 0
        }
    };
});
const FireflyLensToNextIdLens = (account)=>{
    return {
        platform: types/* NextIDPlatform */.V.LENS,
        name: account.name,
        identity: account.handle,
        created_at: '',
        is_valid: true,
        last_checked_at: ''
    };
};
const SocialAccountList = /*#__PURE__*/ (0,react.memo)(function SocialAccountList({ nextIdBindings, disablePortal, anchorPosition, anchorReference, userId, ...rest }) {
    const { classes } = SocialAccountList_useStyles();
    const ref = (0,react.useRef)(null);
    const { data: lensAccounts = constants/* EMPTY_LIST */.rP } = (0,useFireflyLensAccounts/* useFireflyLensAccounts */.$)(userId);
    // Merge and sort
    const orderedBindings = (0,react.useMemo)(()=>{
        const merged = (0,uniqBy/* default */.Z)([
            ...lensAccounts.map(FireflyLensToNextIdLens),
            ...nextIdBindings
        ], (x)=>`${x.platform}.${x.identity}`);
        return merged.sort((a, z)=>{
            if (a.platform === z.platform) return 0;
            return a.platform === types/* NextIDPlatform */.V.LENS ? -1 : 0;
        });
    }, [
        lensAccounts,
        nextIdBindings
    ]);
    const [menu, openMenu, closeMenu] = (0,useMenu/* useMenuConfig */._)(orderedBindings.map((x, i)=>{
        const isLens = x.platform === types/* NextIDPlatform */.V.LENS;
        const profileUri = isLens ? lensAccounts.find((y)=>y.handle === x.identity)?.profileUri : undefined;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccountListItem, {
            ...x,
            profileUrl: profileUri?.[0],
            onClose: ()=>closeMenu()
        }, i);
    }), {
        hideBackdrop: true,
        anchorSibling: false,
        disablePortal,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        anchorPosition,
        anchorReference,
        PaperProps: {
            className: classes.menu
        },
        MenuListProps: {
            className: classes.menuList,
            // Remove space for scrollbar
            style: {
                paddingRight: 0,
                width: '100%'
            }
        }
    }, ref);
    (0,react.useEffect)(()=>{
        window.addEventListener('scroll', closeMenu);
        return ()=>window.removeEventListener('scroll', closeMenu);
    }, [
        closeMenu
    ]);
    const platformIcons = (0,react.useMemo)(()=>{
        return (0,uniqBy/* default */.Z)(orderedBindings, (x)=>x.platform).map((x)=>resolveNextIDPlatformIcon(x.platform)).filter(esm/* isNonNull */.GT).slice(0, 3);
    }, [
        orderedBindings
    ]);
    if (!platformIcons.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "text",
                onClick: openMenu,
                className: classes.iconStack,
                disableRipple: true,
                children: platformIcons.map((Icon, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                        className: classes.icon,
                        size: 20
                    }, Icon.displayName || index))
            }),
            menu
        ]
    });
});


/***/ }),

/***/ 92935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useSharedTrans)
/* harmony export */ });
/* unused harmony export SharedTrans */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
// @ts-nocheck
/* eslint-disable */ 

function createProxy(initValue) {
    function define(key) {
        const value = initValue(key);
        Object.defineProperty(container, key, {
            value,
            configurable: true
        });
        return value;
    }
    const container = {
        __proto__: new Proxy({
            __proto__: null
        }, {
            get (_, key) {
                if (typeof key === "symbol") return undefined;
                return define(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, v)=>v === null,
        getOwnPropertyDescriptor: (_, key)=>{
            if (typeof key === "symbol") return undefined;
            if (!(key in container)) define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
function useSharedTrans() /**
      * `Send`
      */ /**
      * `Search Area`
      */ /**
      * `Approve`
      */ /**
      * `Operation`
      */ /**
      * `Approve MASK?`
      */ /**
      * `To interact with Polygon network, MATIC tokens are required to pay as gas fees. SmartPay allow users to pay gas fee on Polygon network with MASK token.`
      */ /**
      * `Do you want to set MASK token as gas fee?`
      */ /**
      * `Mask Network requires you to authorize the following websites before using it.`
      */ /**
      * `Please create a Persona and verify your account to use this function.`
      */ /**
      * `Persona`
      */ /**
      * `Create persona`
      */ /**
      * `Congratulations!`
      */ /**
      * `Coming soon`
      */ /**
      * `Domain Request`
      */ /**
      * `Available Balance`
      */ /**
      * `Done`
      */ /**
      * `Added by user`
      */ /**
      * `All`
      */ /**
      * `Retry`
      */ /**
      * `Gwei`
      */ /**
      * `Import`
      */ /**
      * `Select an NFT`
      */ /**
      * `Balance`
      */ /**
      * `Balance({{symbol}})`
      */ /**
      * `Balance`
      */ /**
      * `DSearch`
      */ /**
      * `Web3 Profile Card`
      */ /**
      * `Web3 Profile`
      */ /**
      * `Unlock`
      */ /**
      * `Select`
      */ /**
      * `Select a token`
      */ /**
      * `Select Collectibles`
      */ /**
      * `No collectible found.`
      */ /**
      * `Manage Token List`
      */ /**
      * `Mobile Number`
      */ /**
      * `Loading`
      */ /**
      * `Name or Contract address e.g. USDC or 0x234...`
      */ /**
      * `Incorrect contract address.`
      */ /**
      * `Manage Token Lists`
      */ /**
      * `Address`
      */ /**
      * `Dismiss`
      */ /**
      * `Confirm`
      */ /**
      * `Share`
      */ /**
      * `Confirm`
      */ /**
      * `Transaction`
      */ /**
      * `View on Explorer`
      */ /**
      * `Your transaction was confirmed!`
      */ /**
      * `Load failed`
      */ /**
      * `Reload`
      */ /**
      * `Loading`
      */ /**
      * `No results`
      */ /**
      * `Powered by`
      */ /**
      * `Copy`
      */ /**
      * `Copied!`
      */ /**
      * `GO+`
      */ /**
      * `RSS3`
      */ /**
      * `Mask Network`
      */ /**
      * `Search`
      */ /**
      * `Check Security`
      */ /**
      * `Please enter token contract address.`
      */ /**
      * `Token info`
      */ /**
      * `More Details`
      */ /**
      * `More`
      */ /**
      * `Details`
      */ /**
      * `Unnamed`
      */ /**
      * `Contributions`
      */ /**
      * `Description`
      */ /**
      * `day`
      */ /**
      * `days`
      */ /**
      * `hour`
      */ /**
      * `hours`
      */ /**
      * `ago`
      */ /**
      * `Properties`
      */ /**
      * `Security Detection`
      */ /**
      * `{{quantity}} Risky items`
      */ /**
      * `{{quantity}} Attention items`
      */ /**
      * `{{quantity}} Risky item`
      */ /**
      * `{{quantity}} Attention item`
      */ /**
      * `Change`
      */ /**
      * `Edit`
      */ /**
      * `Connect your wallet`
      */ /**
      * `Connected wallets settings`
      */ /**
      * `Wallet Settings`
      */ /**
      * `Pending...`
      */ /**
      * `Advanced Settings`
      */ /**
      * `Medium`
      */ /**
      * `High`
      */ /**
      * `Instant`
      */ /**
      * `~ {{distance}}`
      */ /**
      * `up to {{- amount}} Gwei`
      */ /**
      * `Slippage Tolerance`
      */ /**
      * `Custom`
      */ /**
      * `Basic`
      */ /**
      * `Advanced`
      */ /**
      * `Gas Fee`
      */ /**
      * `Transaction cost`
      */ /**
      * `Gas Price`
      */ /**
      * `Gas Limit`
      */ /**
      * `Max Priority Fee`
      */ /**
      * `Max Fee`
      */ /**
      * `Current base fee is {{fee}} Gwei`
      */ /**
      * `Transaction with extremely low slippage tolerance might be reverted because of very small market movement.`
      */ /**
      * `You may have {{percentage}}% less received with this level of slippage tolerance.`
      */ /**
      * `Invalid slippage tolerance.`
      */ /**
      * `Enter a gas price`
      */ /**
      * `Gas price must be greater than 0 Gwei.`
      */ /**
      * `Gas price is too low for network conditions.`
      */ /**
      * `Gas price is higher than necessary. You may pay more than needed.`
      */ /**
      * `Enter a gas limit`
      */ /**
      * `Gas limit too low will cause the transaction to fail.`
      */ /**
      * `Enter a max fee`
      */ /**
      * `Enter a max priority fee`
      */ /**
      * `Max fee is too low for network conditions.`
      */ /**
      * `Max fee is higher than necessary.`
      */ /**
      * `Max priority fee must be greater than 0 Gwei.`
      */ /**
      * `Max priority fee is too low for network conditions.`
      */ /**
      * `Max priority fee is higher than necessary. You may pay more than needed.`
      */ /**
      * `Max fee cannot be lower than max priority fee.`
      */ /**
      * ` ≈ {{-usd}}`
      */ /**
      * `Default`
      */ /**
      * `Provided by`
      */ /**
      * `Web3 Profile`
      */ /**
      * `Powered by`
      */ /**
      * `Mask Network`
      */ /**
      * `Loading....`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Confirm Risk Warning`
      */ /**
      * `Updating Gas Fee…`
      */ /**
      * `No Gas Fee`
      */ /**
      * `Invalid Network`
      */ /**
      * `Wrong Network`
      */ /**
      * `Unsupported Network`
      */ /**
      * `Switch Network`
      */ /**
      * `{{network}} network is not added in the wallet. Please add and try it again.`
      */ /**
      * `Network error or user cancels the process.`
      */ /**
      * `Switch to {{network}}`
      */ /**
      * `This network is not supported yet.`
      */ /**
      * `Switching to {{network}}`
      */ /**
      * `Please switch to this network in the mobile
    application wallet you are connected to.`
      */ /**
      * `Change to {{network}}`
      */ /**
      * `Not available on {{network}} Network.`
      */ /**
      * `You must give the {{provider}} smart contract permission to use your {{symbol}}. You only have to do this once per token.`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `Select an NFT Contract`
      */ /**
      * `Select an NFT Contract Owner`
      */ /**
      * `Select an NFT Contract Operator`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `Unlocking {{symbol}}...`
      */ /**
      * `Unlock {{symbol}} successfully`
      */ /**
      * `Click to retry`
      */ /**
      * `Change Wallet`
      */ /**
      * `WalletConnect`
      */ /**
      * `Scan QR code with a WalletConnect-compatible wallet`
      */ /**
      * `Save`
      */ /**
      * `Cancel`
      */ /**
      * `Add Wallet`
      */ /**
      * `Enter an amount`
      */ /**
      * `Failed to load {{symbol}}. Click to retry.`
      */ /**
      * `Toggle the button to manage wallet display settings.`
      */ /**
      * `Change to EVM wallet`
      */ /**
      * `Change`
      */ /**
      * `Please add wallets to receive tips`
      */ /**
      * `No connected wallet, please add wallet.`
      */ /**
      * `Save successfully`
      */ /**
      * `Save failed`
      */ /**
      * `Web3 Profile Wallet set up successfully.`
      */ /**
      * `Web3 Profile Wallet setup failed, please try again.`
      */ /**
      * `Toggle the button to manage wallet display settings.`
      */ /**
      * `Pending`
      */ /**
      * `Data source is retrieved from {{source}}.`
    
      * - account_icon_tooltips$twitter: `Data source is retrieved from Twitter profile and {{source}}.`
    
      * - account_icon_tooltips$facebook: `Data source is retrieved from Facebook profile and {{source}}.`
    
      * - account_icon_tooltips$next_id: `Data source is retrieved from NEXT.ID.`
      */ /**
      * ``
    
      * - account_icon_tooltips_only$twitter: `Data source is retrieved from Twitter profile.`
    
      * - account_icon_tooltips_only$facebook: `Data source is retrieved from Facebook profile`
    
      * - account_icon_tooltips_only$next_id: `Data source is retrieved from NEXT.ID.`
      */ /**
      * `Data source is retrieved from Twitter profile and {{source}}.`
      */ /**
      * `Data source is retrieved from Twitter profile.`
      */ /**
      * `Data source is retrieved from Facebook profile and {{source}}.`
      */ /**
      * `Data source is retrieved from Facebook profile`
      */ /**
      * `Data source is retrieved from NEXT.ID.`
      */ /**
      * `Data source is retrieved from NEXT.ID.`
      */ /**
      * `Data source is retrieved from `
      */ /**
      * `Data source is retrieved from Twitter profile and `
      */ /**
      * `Data source is retrieved from Facebook profile and `
      */ /**
      * `Data source is retrieved from NEXT.ID and `
      */ /**
      * `Copy Address`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `Create Persona`
      */ /**
      * `Connect Persona`
      */ /**
      * `Verify your Twitter ID`
      */ /**
      * `Persona`
      */ /**
      * `Please create a Persona and verify your account to use this function.`
      */ /**
      * `Create persona`
      */ /**
      * `Follow`
      */ /**
      * `Following`
      */ /**
      * `View`
      */ /**
      * `Verified by {{ marketplace }}`
      */ /**
      * `No NFTs found.`
      */ /**
      * `Add NFTs`
      */ /**
      * `The collectible address is required`
      */ /**
      * `Incorrect contract address.`
      */ /**
      * `The collectible token id is required`
      */ /**
      * `Incorrect collectible token id`
      */ /**
      * `The contract address is incorrect or the collection does not belong to you.`
      */ /**
      * `Name or Contract address eg.PUNK or 0x234...`
      */ /**
      * `Input contract address`
      */ /**
      * `Token ID separated by conma, e.g. 1223,1224,`
      */ /**
      * `Phantom only supports the Solana chain.`
      */ /**
      * `Blocto only supports the Flow chain.`
      */ /**
      * `Fortmatic only supports the ETH and BNB chain.`
      */ /**
      * `Only supports EVM chains, ETH, BNB chain, Polygon, Arb, Op, etc.`
      */ /**
      * `Connect Fortmatic`
      */ /**
      * `Choose Network`
      */ /**
      * `Connect Wallet`
      */ /**
      * `View on Explorer`
      */ /**
      * `Disconnect`
      */ /**
      * `Wallet Account`
      */ /**
      * `Success`
      */ /**
      * `Failed`
      */ /**
      * `Clear`
      */ /**
      * `{{count}} Pending`
      */ /**
      * `{{count}} Pendings`
      */ /**
      * `Clear All`
      */ /**
      * `Not select wallet yet.`
      */ /**
      * `Risk Warning`
      */ /**
      * `Clicking the confirm button means that you agree to bear the above possible risks.`
      */ /**
      * `Confirm`
      */ /**
      * `Done`
      */ /**
      * `Confirming`
      */ /**
      * `Confirm Failed`
      */ /**
      * `Confirm this transaction in your wallet`
      */ /**
      * `Transaction Confirmed`
      */ /**
      * `Transaction Failed`
      */ /**
      * `Low`
      */ /**
      * `Medium`
      */ /**
      * `High`
      */ /**
      * `Enter a gas limit`
      */ /**
      * `GWEI`
      */ /**
      * `Max fee`
      */ /**
      * `Max priority fee`
      */ /**
      * `Gas Limit`
      */ /**
      * `Max fee is too low for network conditions.`
      */ /**
      * `Max fee is higher than necessary`
      */ /**
      * `Max priority fee must be greater than 0 GWEI`
      */ /**
      * `Max priority fee is too low for network conditions`
      */ /**
      * `Max priority fee is higher than necessary. You may pay more than needed.`
      */ /**
      * `Max fee cannot be lower than max priority fee`
      */ /**
      * `Enter a max priority fee`
      */ /**
      * `Enter a max fee`
      */ /**
      * `Gas Price`
      */ /**
      * `Enter a gas price`
      */ /**
      * `Gas limit must be at least {{limit}}`
      */ /**
      * `Gas fee settings`
      */ /**
      * `Connect to`
      */ /**
      * `Try Again`
      */ /**
      * `Connected to`
      */ /**
      * `Initializing...`
      */ /**
      * `You've opened the popup, please confirm.`
      */ /**
      * `Applications`
      */ /**
      * `APP Settings`
      */ /**
      * `Twitter ID verified persona({{currentSNSConnectedPersonaPublicKey}}) is not consistent with your current persona({{currentPersonaPublicKey}}). Please switch to persona({{currentSNSConnectedPersonaPublicKey}}) and try again.`
      */ /**
      * `Please verify your social account`
      */ /**
      * `Please create your persona and use it`
      */ /**
      * `Please create a persona for accessing Dapps.`
      */ /**
      * `Please connect your persona`
      */ /**
      * `Please connect your wallet`
      */ /**
      * `APP list`
      */ /**
      * `Plug-in switch`
      */ /**
      * `Listed`
      */ /**
      * `Unlisted`
      */ /**
      * `Click the application icon to hide in the APP list.`
      */ /**
      * `Click the setting icon to list it on the App board.`
      */ /**
      * `Click the application icon to list it on the App board.`
      */ /**
      * `Optimize search results with token names, NFT collections, ENS domains or wallet addresses.`
      */ /**
      * `Token`
      */ /**
      * `Get optimized search results when you look for a token.`
      */ /**
      * `NFTs`
      */ /**
      * `Search with the name of an NFT collection or its symbol to get optimized results.`
      */ /**
      * `ENS or Wallet Address`
      */ /**
      * `Search with an ENS domain or wallet address to get optimized results.`
      */ /**
      * `Claimed 1 {{name}} successfully.`
      */ /**
      * `You claimed {{- amount}} {{name}}.`
      */ /**
      * `Lucky Drop`
      */ /**
      * `Share`
      */ /**
      * `OK`
      */ /**
      * `Connect Wallet`
      */ /**
      * `The input is not a single file.`
      */ /**
      * `The file is too large; limit is {{limit}}.`
      */ /**
      * `Failed to upload file`
      */ /**
      * `Exceeded the maximum file size of 10MB.`
      */ /**
      * `Drag & Drop your file here`
      */ /**
      * `Size limit: 10 MB`
      */ /**
      * `or`
      */ /**
      * `Browse File`
      */ /**
      * `Reload`
      */ /**
      * `Load failed`
      */ /**
      * `Persona`
      */ /**
      * `Copy Success`
      */ /**
      * `Connect {{-nickname}}`
      */ /**
      * `Please connect {{-nickname}} before using dApps.`
      */ /**
      * `Verify {{-nickname}}`
      */ /**
      * `Please verify current persona with social media account before using dApps.`
      */ /**
      * `Connect and Verify {{-nickname}}`
      */ /**
      * `Enable plugin`
      */ /**
      * `This function has been turned off in the App settings. Enable plug-ins to fully access.`
      */ /**
      * `Please connect {{-nickname}} and send proof post before using dApps.`
      */ /**
      * `Price Statistic`
      */ /**
      * `Market Cap`
      */ /**
      * `Circulating Supply`
      */ /**
      * `24 Hour Trading Vol`
      */ /**
      * `Total Supply`
      */ /**
      * `Circulating Supply`
      */ /**
      * `Info`
      */ /**
      * `Contract`
      */ /**
      * `Community`
      */ /**
      * `Website`
      */ /**
      * `Please select the wallet to activate the function after saving the settings.`
      */ /**
      * `Go to Settings`
      */ /**
      * `Can’t find a valid user address data source.`
      */ /**
      * `Provided by plugin`
      */ /**
      * `Encrypt`
      */ /**
      * `Tell selective friends what's happening...`
      */ /**
      * `Encrypted Post`
      */ /**
      * `Visible To`
      */ /**
      * `Encryption Method`
      */ /**
      * `Enable auto paste`
      */ /**
      * `eg: Twitter accounts, Persona public keys, wallet addresses or ENS`
      */ /**
      * `Plugins`
      */ /**
      * `Text`
      */ /**
      * `Use text encryption`
      */ /**
      * `Image`
      */ /**
      * `Encrypt messages in images`
      */ /**
      * `No local key`
      */ /**
      * `All`
      */ /**
      * `Everyone`
      */ /**
      * `Private`
      */ /**
      * `Just Me`
      */ /**
      * `1 friend`
      */ /**
      * `{{count}} friends`
      */ /**
      * `Share with`
      */ /**
      * `Just Selected Contacts`
      */ /**
      * `No Persona-based encryption friends locally, please try searching.`
      */ /**
      * `Persona required.`
      */ /**
      * `Create`
      */ /**
      * `Connect`
      */ /**
      * `Reset`
      */ /**
      * `Editor`
      */ /**
      * `Only TypedMessageText is supported currently.`
      */ /**
      * `Share to Social Networks`
      */ /**
      * `Report NFT Scam Contract?`
      */ /**
      * `Are you sure to report {{name}}? After approving, this NFT will be marked as spam.`
      */ /**
      * `Spam`
      */ /**
      * `Report Spam`
      */ /**
      * `Successfully reported.`
      */ /**
      * `Failed to report spam.`
      */ /**
      * - day_one: `day`
    
      * - day_other: `days`
      */ /**
      * - hour_one: `hour`
    
      * - hour_other: `hours`
      */ /**
      * - wallet_status_pending_one: `{{count}} Pending`
    
      * - wallet_status_pending_other: `{{count}} Pendings`
      */ /**
      * - compose_shared_friends_one: `1 friend`
    
      * - compose_shared_friends_other: `{{count}} friends`
      */ /**
      * - account_icon_merged_tooltip$normal: `Data source is retrieved from `
    
      * - account_icon_merged_tooltip$twitter: `Data source is retrieved from Twitter profile and `
    
      * - account_icon_merged_tooltip$facebook: `Data source is retrieved from Facebook profile and `
    
      * - account_icon_merged_tooltip$next_id: `Data source is retrieved from NEXT.ID and `
      */ /**
      * - upload_error$single: `The input is not a single file.`
    
      * - upload_error$oversized: `The file is too large; limit is {{limit}}.`
      */ /**
      * - upload_file_title$failed: `Failed to upload file`
      */ /**
      * - upload_file_message$failed: `Exceeded the maximum file size of 10MB.`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("shared");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "shared",
            shouldUnescape: true,
            ...props
        });
}
const SharedTrans = /**
      * `Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves.`
      */ /**
      * ` ≈ <span>{{usd}}</span>`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));


/***/ }),

/***/ 13101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ LightColor),
/* harmony export */   I: () => (/* binding */ DarkColor)
/* harmony export */ });
const LightColor = {
    bg: '##F9F9F9',
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#FFFFFF',
    secondary: '#e8f0fe',
    secondaryContrastText: '#1c68f3',
    input: '#F6F6F8',
    primaryBackground: '#ffffff',
    primaryBackground2: '#FBFBFC',
    secondaryBackground: '#f9fafa',
    lightBackground: '#F9FAFA',
    mainBackground: '#ffffff',
    suspensionBackground: 'rgba(249, 250, 250, 0.8)',
    normalBackground: '#F3F3F4',
    twitterBackground: '#F7F9FA',
    twitterBackgroundHover: '#EFF1F2',
    twitterInputBackground: '#F6F8F8',
    twitterButton: '#111418',
    twitterButtonText: '#ffffff',
    twitterBlue: '#1C68F3',
    twitterBorderLine: '#EDF1F2',
    twitterSecond: '#7B8192',
    twitterMain: '#0F1419',
    twitterBottom: '#ffffff',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterBg: '#F6F8F8',
    twitterTooltipBg: 'rgba(0,0,0,.6)',
    twitterInput: '#EDF1F2',
    twitterLine: '#EBEEF0',
    redMain: '#ff5f5f',
    redLight: '#ffafaf',
    redContrastText: '#ffffff',
    greenMain: '#3DC233',
    greenLight: '#e6f6f0',
    orangeMain: '#ffb915',
    orangeLight: '#faf0d8',
    iconLight: '#a6a9b6',
    divider: '#eff3f4',
    border: '#F3F3F4',
    borderSecondary: '#536471',
    textPrimary: '#111432',
    textSecondary: '#7b8192',
    secondaryInfoText: '#AFC3E1',
    normalText: '#7B8192',
    normalTextLight: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#1C68F3',
    lineLight: '#E4E8F1',
    lineLighter: '#E9E9EA',
    textLight: '#A6A9B6',
    lightestBackground: '#FFFFFF',
    linkText: '#1C68F3',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#F9FAFA',
    main: '#1C68F3',
    errorBackground: 'rgba(255, 95, 95, 0.15)',
    tooltipBackground: '#ffffff',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#000000',
    errorPlugin: '#FF3545',
    buttonPluginBackground: '#07101B',
    textPluginColor: '#07101B',
    buttonPluginColor: '#FFFFFF'
};
const DarkColor = {
    bg: '#1C1C1C',
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#15171A',
    secondary: '#242e57',
    secondaryContrastText: '#ffffff',
    input: '#282B49',
    primaryBackground: '#212442',
    primaryBackground2: '#212442',
    secondaryBackground: '#252846',
    lightBackground: '#2E314F',
    mainBackground: '#111432',
    suspensionBackground: 'rgba(27, 30, 60, 0.8)',
    normalBackground: '#262947',
    twitterInputBackground: '#17191D',
    twitterBackground: '#17191D',
    twitterBackgroundHover: '#17191D',
    twitterButton: '#EFF3F4',
    twitterButtonText: '#0F1419',
    twitterBlue: '#4989FF',
    twitterBorderLine: '#2F3336',
    twitterInput: '#1D2023',
    twitterSecond: '#636B72',
    twitterMain: '#D9D9D9',
    twitterBottom: '#000000',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterLine: '#2F3336',
    twitterBg: '#15171A',
    twitterTooltipBg: 'rgba(91,112,131,.6)',
    redMain: '#ff5f5f',
    redLight: '#46304a',
    redContrastText: '#ffffff',
    greenMain: '#3DC233',
    greenLight: '#314457',
    orangeMain: '#ffb915',
    orangeLight: '#463e3f',
    iconLight: '#a6a9b6',
    divider: '#3e455e',
    border: '#3E455E',
    borderSecondary: '#6e767d',
    // TODO: ?
    textPrimary: '#ffffff',
    // TODO: ?
    textSecondary: 'ghostwhite',
    secondaryInfoText: '#AFC3E1',
    normalText: 'rgba(255, 255, 255, 0.8)',
    normalTextLight: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#ffffff',
    lineLight: '#32365B',
    lineLighter: '#32365B',
    textLight: '#A6A9B6',
    lightestBackground: '#212422',
    linkText: '#ffffff',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#000000',
    main: '#D4D4D4',
    errorBackground: 'rgba(255, 95, 95, 0.1)',
    tooltipBackground: '#1A1D20',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#ffffff',
    errorPlugin: '#FF3545',
    buttonPluginBackground: '#07101B',
    textPluginColor: '#07101B',
    buttonPluginColor: '#FFFFFF'
};


/***/ }),

/***/ 23935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MaskColorVar),
/* harmony export */   n: () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32711);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13101);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
}
/** Append alpha channel to the original color */ function set(key) {
    if (typeof key === 'symbol') return undefined;
    const cssVar = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
    function value(defaultValue) {
        // it might be an object when used in styled components.
        if (typeof defaultValue !== 'string') defaultValue = undefined;
        const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
        return x;
    }
    Object.assign(value, {
        [Symbol.toPrimitive]: ()=>`var(--mask-${cssVar})`,
        alpha: (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
    });
    Object.defineProperty(MaskColorVar, key, {
        configurable: true,
        enumerable: true,
        value
    });
    return value;
}
/**
 * @deprecated Use theme.palette.maskColor
 */ const MaskColorVar = {
    __proto__: new Proxy({}, {
        get: (_, p)=>set(p),
        getOwnPropertyDescriptor: (_, p)=>{
            set(p);
            return Object.getOwnPropertyDescriptor(MaskColorVar, p);
        }
    })
};


/***/ }),

/***/ 90097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _LoadingBase_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20419);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);




const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    loading: {
        ['& > *']: {
            opacity: 0.3
        }
    }
});
function ActionButton(props) {
    const { width, loading, children, className, style, ...rest } = props;
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: cx('actionButton', className, loading ? classes.loading : undefined),
        style: {
            width,
            ...style,
            pointerEvents: loading ? 'none' : undefined
        },
        ...rest,
        disableElevation: true,
        disabled: !!(rest.disabled || loading),
        children: [
            loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                style: {
                    opacity: 1
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadingBase_index_js__WEBPACK_IMPORTED_MODULE_4__/* .LoadingBase */ .S, {})
            }) : null,
            children
        ]
    });
}


/***/ }),

/***/ 20419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ LoadingBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);



const useStyles = (0,_UIHelper_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        animated: {
            '@keyframes loadingAnimation': {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(360deg)'
                }
            },
            animation: 'loadingAnimation 1s linear infinite'
        }
    }));
function LoadingBase(props) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.CircleLoading, {
        ...props,
        className: cx(classes.animated, props.className)
    });
}


/***/ }),

/***/ 8330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YO: () => (/* binding */ CustomSnackbarProvider),
  Ii: () => (/* binding */ useCustomSnackbar)
});

// UNUSED EXPORTS: CustomSnackbarContent, PopupSnackbarProvider, SnackbarProvider, usePopupCustomSnackbar, useSnackbar

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/index.js + 16 modules
var esm = __webpack_require__(94245);
// EXTERNAL MODULE: ./node_modules/.pnpm/notistack@2.0.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8_react-dom_vt4c2flfh7labhvk5vot2goyiq/node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(45190);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Info.js


/* harmony default export */ const Info = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info'));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Warning.js


/* harmony default export */ const Warning = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Snackbar/index.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { offsetY }, classNames)=>{
    const spinningAnimationKeyFrames = (0,esm/* keyframes */.F4)`
        to {
          transform: rotate(360deg)
        }
    `;
    const title = {
        color: theme.palette.maskColor.main,
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '18px'
    };
    const message = {
        color: theme.palette.maskColor.main,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        lineHeight: '18px',
        wordBreak: 'break-word',
        '& > a': {
            display: 'flex',
            alignItems: 'center'
        },
        '& :focus:not(:focus-visible)': {
            outline: 0
        }
    };
    const defaultVariant = {
        background: theme.palette.maskColor.bottom,
        color: theme.palette.maskColor.main,
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: 'inherit'
        }
    };
    const success = {
        backgroundColor: theme.palette.maskColor.success,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.success, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const error = {
        background: theme.palette.maskColor.danger,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const info = {
        background: theme.palette.maskColor.primary,
        color: theme.palette.maskColor.white,
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    const warning = {
        backgroundColor: theme.palette.maskColor.warn,
        color: theme.palette.maskColor.white,
        boxShadow: `0px 6px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.15)}`,
        backdropFilter: 'blur(16px)',
        [`& .${classNames.title}`]: {
            color: 'inherit'
        },
        [`& .${classNames.message}`]: {
            color: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.white, 0.8),
            '& svg': {
                color: theme.palette.maskColor.white
            }
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: typeof offsetY !== 'undefined' ? `translateY(${offsetY}px)` : 'none',
            color: vars/* MaskColorVar */.Z.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important'
        },
        // eslint-disable-next-line tss-unused-classes/unused-classes
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > svg': {
                width: 24,
                height: 24
            }
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit',
            transform: 'translateY(-10px)'
        },
        texts: {
            marginLeft: theme.spacing(1.5),
            '& :focus:not(:focus-visible)': {
                outline: 0
            }
        },
        title,
        message
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SuccessForSnackBar, {}),
    error: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TransactionFailed, {}),
    warning: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes, cx } = useStyles({
        offsetY: props.offsetY
    }, {
        props
    });
    const snackbar = (0,notistack_esm/* useSnackbar */.Ds)();
    const loadingIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleLoading, {
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(notistack_esm/* SnackbarContent */.No, {
        ref: ref,
        className: cx(classes.content, classes[props.variant]),
        children: [
            variantIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    });
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react.memo)(function CustomSnackbarProvider({ offsetY, ...rest }) {
    const ref = (0,react.useRef)(null);
    const { classes } = useStyles({
        offsetY
    });
    const onDismiss = (key)=>()=>{
            ref.current?.closeSnackbar(key);
        };
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(notistack_esm/* SnackbarProvider */.wT, {
            ref: ref,
            maxSnack: 30,
            disableWindowBlurListener: true,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            hideIconVariant: true,
            // this is a false positive, SnackbarProvider won't use it like it is a component.
            // eslint-disable-next-line react/no-unstable-nested-components
            content: (key, title)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                    id: key,
                    variant: rest.variant ?? 'default',
                    title: title,
                    offsetY: offsetY
                }),
            // eslint-disable-next-line react/no-unstable-nested-components
            action: (key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "large",
                    onClick: onDismiss(key),
                    sx: {
                        color: 'inherit'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        color: "inherit"
                    })
                }),
            classes: {
                containerRoot: classes.root,
                variantSuccess: classes.success,
                variantError: classes.error,
                variantInfo: classes.info,
                variantWarning: classes.warning
            },
            domRoot: container,
            ...rest
        }));
});
function useCustomSnackbar() {
    const { enqueueSnackbar, closeSnackbar } = (0,notistack_esm/* useSnackbar */.Ds)();
    const showSnackbar = (0,react.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing, message, variant, ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                    variant: variant ?? 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                });
            },
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

/***/ 25877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ShadowRootMenu)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8737);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootMenu = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootMenu.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 27966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ShadowRootTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70429);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootTooltip = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootTooltip.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 64244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AZ: () => (/* binding */ DisableShadowRootContext),
/* harmony export */   EP: () => (/* binding */ StyleSheetsContext),
/* harmony export */   N: () => (/* binding */ PreventShadowRootEventPropagationListContext),
/* harmony export */   UW: () => (/* binding */ stopPropagation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

/** @internal */ const StyleSheetsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
StyleSheetsContext.displayName = 'StyleSheetsContext';
/** @internal */ const PreventShadowRootEventPropagationListContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([]);
PreventShadowRootEventPropagationListContext.displayName = 'PreventShadowRootEventPropagationListContext';
/** This context does not join any ShadowRoot related feature. */ const DisableShadowRootContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
DisableShadowRootContext.displayName = 'DisableShadowRootContext';
/** @internal */ const stopPropagation = (e)=>e.stopPropagation();


/***/ }),

/***/ 26909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ad: () => (/* binding */ usePortalShadowRoot),
/* harmony export */   lr: () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   vg: () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51573);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);
/* harmony import */ var _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57604);
/* eslint-disable react-hooks/rules-of-hooks */ 




/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer, debugKey) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on DisableShadowRootContext during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .PreventShadowRootEventPropagationListContext */ .N);
    const container = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .iH.portalContainer;
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = debugKey || '';
        const shadow = root.attachShadow(_masknet_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags */ .v.shadowRootInit);
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, _Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .stopPropagation */ .UW, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheet.addContainer(shadow);
        // This is important to make the portal orders correct.
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return container;
    });
    return renderer(container);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            }));
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 57604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ: () => (/* binding */ shadowEnvironmentMountingRoots),
/* harmony export */   eG: () => (/* binding */ setupReactShadowRootEnvironment),
/* harmony export */   iH: () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);
}





/**
 * This container is used to attach the single React root.
 * It does not contain direct DOM decedents.
 * All decedents are mounted via <Portal>.
 */ let globalContainer;
/**
 * This container is prepared for all the Modals.
 */ let portalContainer;
/** @internal */ const shadowEnvironmentMountingRoots = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ObservableMap */ .vP();
function setupReactShadowRootEnvironment(init, preventEventPropagationList, wrapJSX) {
    if (portalContainer) return portalContainer;
    // TODO: make sure globalContainer is the last DOM in the body?
    globalContainer = document.body.appendChild(document.createElement('div'));
    portalContainer = globalContainer.attachShadow(init);
    // Note: This React Root does not expect to have any direct DOM children.
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(globalContainer).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MountingPoint, {
            wrapJSX: wrapJSX,
            preventPropagationList: preventEventPropagationList
        })
    }));
    return portalContainer;
}
function MountingPoint(props) {
    const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        shadowEnvironmentMountingRoots.event.on(shadowEnvironmentMountingRoots.ALL_EVENTS, ()=>{
            setChildren(Array.from(shadowEnvironmentMountingRoots.values()));
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts_js__WEBPACK_IMPORTED_MODULE_4__/* .PreventShadowRootEventPropagationListContext */ .N.Provider, {
        value: props.preventPropagationList,
        children: props.wrapJSX ? props.wrapJSX(children) : children
    });
}
/** @internal */ const ref = {
    get portalContainer () {
        let dom;
        if (location.protocol.includes('extension')) dom = document.body;
        else if (globalThis.location.hostname === 'localhost') return document.body;
        else if (!portalContainer) throw new TypeError('Please call setupPortalShadowRoot first');
        else dom = portalContainer;
        Object.defineProperty(ref, 'mountingPoint', {
            value: dom
        });
        return dom;
    }
};


/***/ }),

/***/ 39112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ MaskThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7133);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79783);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44513);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75369);
/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8330);





function MaskThemeProvider(props) {
    const { children, useTheme, useMaskIconPalette, CustomSnackbarOffsetY } = props;
    const theme = useTheme();
    const MaskIconPalette = useMaskIconPalette(theme);
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .compose */ .q)((jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .MaskIconPaletteContext */ .v.Provider, {
            value: MaskIconPalette,
            children: jsx
        }), (children)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            theme,
            children
        }), (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_index_js__WEBPACK_IMPORTED_MODULE_4__/* .CustomSnackbarProvider */ .YO, {
            disableWindowBlurListener: false,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            children: jsx,
            offsetY: CustomSnackbarOffsetY
        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {}),
            children
        ]
    }));
}


/***/ }),

/***/ 23615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94245);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43204);


// Note: type refinement, see https://github.com/garronej/tss-react/issues/128
const { makeStyles } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});


/***/ }),

/***/ 38050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ ScopedDomainsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54225);


function useMap(initialState) {
    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const setPair = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((address, domain)=>{
        setMap((map)=>{
            const key = address.toLowerCase();
            if (map[key] === domain || !domain.includes('.')) return map;
            return {
                ...map,
                [key]: domain
            };
        });
    }, []);
    const getDomain = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((address)=>{
        return initialState?.[address.toLowerCase()] || map[address.toLowerCase()];
    }, [
        map,
        initialState
    ]);
    return {
        setPair,
        getDomain,
        map
    };
}
const ScopedDomainsContainer = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .createContainer */ .f)(useMap);
ScopedDomainsContainer.Provider.displayName = 'ScopedDomainsContainer.Provider';


/***/ }),

/***/ 98658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useFireflyLensAccounts)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);


function useFireflyLensAccounts(twitterId, isVerified) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'firefly',
            'lens',
            twitterId,
            isVerified
        ],
        enabled: !!twitterId,
        queryFn: ()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Firefly */ .EV.getLensByTwitterId(twitterId, isVerified)
    });
}


/***/ }),

/***/ 88505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (murmur2);


/***/ }),

/***/ 25969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ 89780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ 39935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   My: () => (/* binding */ insertStyles),
/* harmony export */   fp: () => (/* binding */ getRegisteredStyles)
/* harmony export */ });
/* unused harmony export registerStyles */
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ 54458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ 79847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(26572);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 2276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(57676);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 48653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4697);
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);


/***/ }),

/***/ 34824:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 57676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(34824);
} else {}


/***/ }),

/***/ 43666:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 69550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(43666);
} else {}


/***/ }),

/***/ 70491:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,q=e>>>1;d<q;){var m=2*(d+1)-1,D=a[m],n=m+1,x=a[n];if(0>g(D,c))n<e&&0>g(x,D)?(a[d]=x,a[n]=c,d=n):(a[d]=D,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}exports.unstable_now=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,r=p.now();exports.unstable_now=function(){return p.now()-r}}
var t=[],u=[],v=1,w=null,y=3,z=!1,A=!1,B=!1,C="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending?navigator.scheduling.isInputPending.bind(navigator.scheduling):null;
function G(a){for(var b=h(u);null!==b;){if(null===b.callback)k(u);else if(b.startTime<=a)k(u),b.sortIndex=b.expirationTime,f(t,b);else break;b=h(u)}}function H(a){B=!1;G(a);if(!A)if(null!==h(t))A=!0,I(J);else{var b=h(u);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{a:{G(b);for(w=h(t);null!==w&&(!(w.expirationTime>b)||a&&!M());){var d=w.callback;if("function"===typeof d){w.callback=null;y=w.priorityLevel;var e=d(w.expirationTime<=b);b=exports.unstable_now();if("function"===typeof e){w.callback=e;G(b);var q=!0;break a}else w===h(t)&&k(t),G(b)}else k(t);w=h(t)}if(null!==w)q=!0;else{var m=h(u);null!==m&&K(H,m.startTime-b);q=!1}}return q}finally{w=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){C(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=C(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(t)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:v++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(u,a),null===h(t)&&a===h(u)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(t,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 75126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(70491);
} else {}


/***/ }),

/***/ 26572:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 4697:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ }),

/***/ 87167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIsRestoring),
/* harmony export */   u: () => (/* binding */ IsRestoringProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const IsRestoringContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const useIsRestoring = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsRestoringContext);
const IsRestoringProvider = IsRestoringContext.Provider;


//# sourceMappingURL=isRestoring.mjs.map


/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createContainer),
/* harmony export */   u: () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.7262.js.map