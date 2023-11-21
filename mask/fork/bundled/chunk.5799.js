"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5799],{

/***/ 73929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useRecipientsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17735);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* harmony import */ var _DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3715);




function useRecipientsList() {
    const current = (0,_DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentIdentity */ .Ud)()?.identifier;
    const { value: hasRecipients = false } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>current ? _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Crypto.hasRecipientAvailable(current) : undefined, [
        current
    ]);
    const [recipients, setRecipients] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const request = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (!current) return;
        if (recipients) return;
        _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Crypto.getRecipients(current).then(setRecipients);
    }, [
        current,
        !!recipients
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            request,
            recipients,
            hasRecipients
        }), [
        request,
        recipients,
        hasRecipients
    ]);
}


/***/ }),

/***/ 71132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ie: () => (/* binding */ useGrantPermissions),
/* harmony export */   Xo: () => (/* binding */ useCheckPermissions),
/* harmony export */   gr: () => (/* binding */ usePluginHostPermissionCheck)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82897);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65734);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);




function usePluginHostPermissionCheck(plugins) {
    const plugins_ = plugins.filter((x)=>x.enableRequirement.host_permissions?.length);
    // query if plugin is disabled due to lack of permission
    const { retry, value: lackPermission } = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        const lackPermission = new Set();
        await Promise.allSettled(plugins_.map((plugin)=>_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.Helper.hasHostPermission(plugin.enableRequirement.host_permissions).then((result)=>!result && lackPermission.add(plugin.ID))));
        return lackPermission;
    }, [
        plugins_.map((x)=>x.ID).join(',')
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages */ .q.events.hostPermissionChanged.on(retry), [
        retry
    ]);
    return lackPermission;
}
function useCheckPermissions(permissions) {
    const asyncResult = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!permissions.length) return true;
        return _services__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.Helper.hasHostPermission(permissions);
    }, [
        permissions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages */ .q.events.hostPermissionChanged.on(asyncResult.retry), [
        asyncResult.retry
    ]);
    return asyncResult;
}
function useGrantPermissions(permissions) {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        if (!permissions?.length) return;
        return _services__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.Helper.requestHostPermission(permissions);
    }, [
        permissions
    ]);
}


/***/ }),

/***/ 54474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useSetupGuideStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84271);
/* harmony import */ var _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18126);




function useSetupGuideStatus() {
    const context = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .currentSetupGuideStatus */ .AI[_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_3__.activatedSiteAdaptorUI.networkIdentifier]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        try {
            return JSON.parse(context);
        } catch  {
            return {};
        }
    }, [
        context
    ]);
}


/***/ }),

/***/ 39570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30504);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94685);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91375);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3715);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()(()=>({
        root: {}
    }));
function Avatar(props) {
    const { userId, sourceType } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    const { data: identity } = (0,_DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_3__/* .useSocialIdentityByUserId */ .FK)(userId);
    const { data: socialAccounts = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP, isLoading: loadingSocialAccounts } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useSocialAccountsAll */ .C)(identity);
    const component = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const Component = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_6__/* .createInjectHooksRenderer */ .E)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useNotMinimalMode, (plugin)=>{
            const shouldDisplay = plugin.AvatarRealm?.Utils?.shouldDisplay?.(identity, socialAccounts, sourceType) ?? true;
            return shouldDisplay ? plugin.AvatarRealm?.UI?.Decorator : undefined;
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
            identity: identity,
            socialAccounts: socialAccounts,
            userId: userId
        });
    }, [
        identity,
        socialAccounts,
        sourceType
    ]);
    if (loadingSocialAccounts || !component) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: component
    });
}


/***/ }),

/***/ 65235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ SearchResultInspector)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/getTabContent.tsx
var getTabContent = __webpack_require__(1375);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/getAvailablePlugins.ts
var getAvailablePlugins = __webpack_require__(79412);
;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/getSearchResultTabs.ts


function getSearchResultTabs(definitions, result, translate) {
    const displayPlugins = (0,getAvailablePlugins/* getAvailablePlugins */.q)(definitions, (plugins)=>{
        if (!result) return constants/* EMPTY_LIST */.rP;
        return plugins.flatMap((x)=>x.SearchResultTabs?.map((y)=>({
                    ...y,
                    pluginID: x.ID
                })) ?? constants/* EMPTY_LIST */.rP).filter((x)=>x?.Utils?.shouldDisplay?.(result) ?? true).sort((a, z)=>a.priority - z.priority);
    });
    return displayPlugins.map((x)=>({
            id: x.ID,
            label: typeof x.label === 'string' ? x.label : translate(x.pluginID, x.label)
        }));
}

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/ScopedDomains/index.tsx
var ScopedDomains = __webpack_require__(38050);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/DataSource/useSearchedKeyword.ts


function useSearchedKeyword() {
    const [keyword, setKeyword] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const onLocationChange = ()=>{
            if (!ui.activatedSiteAdaptorUI?.collecting?.getSearchedKeyword) return;
            const kw = ui.activatedSiteAdaptorUI.collecting.getSearchedKeyword();
            setKeyword(kw);
        };
        onLocationChange();
        window.addEventListener('locationchange', onLocationChange);
        return ()=>{
            window.removeEventListener('locationchange', onLocationChange);
        };
    }, []);
    return keyword;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SearchResultInspector.tsx















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { isProfilePage, searchType })=>({
        contentWrapper: {
            background: isProfilePage || searchType !== specs/* SearchResultType */.Bk.EOA && searchType !== specs/* SearchResultType */.Bk.Domain ? 'transparent' : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(69, 163, 251, 0.2) 100%), #FFFFFF;'
        },
        tabContent: {
            position: 'relative',
            maxHeight: 478,
            borderBottom: isProfilePage ? 'unset' : `1px solid ${theme.palette.divider}`,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
function SearchResultInspector(props) {
    const { identity, profileTabType, isProfilePage } = props;
    const translate = (0,useTrans/* usePluginTransField */.T)();
    const isMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Handle);
    const keyword_ = useSearchedKeyword();
    const keyword = props.keyword || keyword_;
    const activatedPlugins = site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode();
    const resultList = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!keyword) return;
        return props.searchResults ?? entry/* DSearch */.UZ.search(keyword);
    }, [
        keyword,
        props.searchResults
    ]);
    (0,react.useEffect)(()=>{
        if (profileTabType || !resultList.value?.length) return;
        const type = resultList.value[0].type;
        let timer;
        if (type === specs/* SearchResultType */.Bk.CollectionListByTwitterHandler || type === specs/* SearchResultType */.Bk.NonFungibleCollection || type === specs/* SearchResultType */.Bk.NonFungibleToken) timer = setTimeout(()=>providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryTimelineDsearchNft), 500);
        if (type === specs/* SearchResultType */.Bk.FungibleToken) timer = setTimeout(()=>providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryTimelineDsearchToken), 500);
        return ()=>timer && clearTimeout(timer);
    }, [
        resultList,
        profileTabType
    ]);
    const currentResult = props.currentSearchResult ?? resultList.value?.[0];
    const { classes } = useStyles({
        isProfilePage,
        searchType: currentResult?.type
    });
    const contentComponent = (0,react.useMemo)(()=>{
        if (!currentResult || !resultList.value?.length) return null;
        const Component = profileTabType ? (0,getTabContent/* getSearchResultContentForProfileTab */.mb)(currentResult) : (0,getTabContent/* getSearchResultContent */.rH)(currentResult);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            resultList: resultList.value,
            currentResult: currentResult,
            isProfilePage: isProfilePage,
            identity: identity
        });
    }, [
        currentResult,
        resultList.value,
        isProfilePage,
        identity,
        profileTabType
    ]);
    const tabs = (0,react.useMemo)(()=>{
        if (!currentResult) return constants/* EMPTY_LIST */.rP;
        return getSearchResultTabs(activatedPlugins, currentResult, translate);
    }, [
        activatedPlugins,
        resultList.value,
        translate
    ]);
    const defaultTab = (0,head/* default */.Z)(tabs)?.id ?? PluginID/* PluginID */.P.Collectible;
    const [currentTab, onChange, , setTab] = (0,useTabs/* useTabs */.Y)(defaultTab, ...tabs.map((tab)=>tab.id));
    (0,react.useLayoutEffect)(()=>{
        setTab(defaultTab);
    }, [
        currentResult,
        defaultTab
    ]);
    const tabContentComponent = (0,react.useMemo)(()=>{
        if (!currentResult) return null;
        const Component = (0,getTabContent/* getSearchResultTabContent */.xF)(currentTab);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            result: currentResult
        });
    }, [
        currentTab,
        resultList.value
    ]);
    if (isMinimalMode && !isProfilePage) return null;
    if (!keyword && !currentResult) return null;
    if (!contentComponent) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScopedDomains/* ScopedDomainsContainer */.h.Provider, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.contentWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            children: contentComponent
                        }),
                        tabs.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                            px: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
                                value: currentTab,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* MaskTabList */.C, {
                                    variant: "base",
                                    onChange: onChange,
                                    "aria-label": "Web3Tabs",
                                    children: tabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                            label: tab.label,
                                            value: tab.id
                                        }, tab.id))
                                })
                            })
                        }) : null
                    ]
                }),
                tabContentComponent ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.tabContent,
                    children: tabContentComponent
                }) : null
            ]
        })
    });
}


/***/ }),

/***/ 15763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ProfileInList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98662);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67101);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3223);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38670);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97991);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32863);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29796);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29869);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);
/* harmony import */ var _shared_ui_components_Avatar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17702);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            borderRadius: 8,
            cursor: 'pointer',
            padding: 0
        },
        overflow: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        highlighted: {
            backgroundColor: 'inherit',
            color: 'inherit',
            fontWeight: 'bold'
        },
        flex: {
            display: 'flex',
            alignItems: 'center'
        },
        actionIcon: {
            cursor: 'pointer',
            marginLeft: theme.spacing(0.5)
        },
        badge: {
            width: 32,
            height: 18,
            marginLeft: theme.spacing(0.5)
        },
        highLightBg: {
            background: theme.palette.maskColor.bg
        },
        avatarBox: {
            padding: '6px 0px 6px 8px',
            minWidth: 46
        },
        avatar: {
            width: 36,
            height: 36
        },
        highLightBase: {
            lineHeight: '20px',
            fontSize: 14
        },
        highLightSecond: {
            fontSize: 16,
            lineHeight: '20px'
        },
        listItemRoot: {
            margin: '4px 0'
        },
        columnReverse: {
            margin: '4px 0',
            display: 'flex',
            flexDirection: 'column-reverse'
        },
        toolTip: {
            fontSize: 14,
            lineHeight: '18px',
            padding: 10,
            boxSizing: 'border-box',
            borderRadius: 4,
            whiteSpace: 'normal',
            marginTop: 0
        }
    }));
const ProfileInList = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ProfileInList(props) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { classes, cx } = useStyles();
    const { profile, selected, disabled, highlightText, onChange } = props;
    const searchWords = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>highlightText ? [
            highlightText
        ] : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY_LIST */ .rP, [
        highlightText
    ]);
    const rawPublicKey = profile.linkedPersona?.rawPublicKey;
    const primaryText = (()=>{
        if (!profile.fromNextID) return `@${profile.identifier.userId || profile.nickname}`;
        const mentions = profile.linkedTwitterNames?.map((x)=>'@' + x).join(' ') ?? '';
        if (mentions.length < 15) return mentions;
        const len = profile.linkedTwitterNames?.length ?? 0;
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(mentions, {
            length: 15
        }) + (len > 1 ? `(${len})` : '');
    })();
    const tooltipTitle = (()=>{
        const linkedNames = profile.linkedTwitterNames ?? [];
        if (linkedNames.length < 2) return `${t.select_friends_dialog_persona_connect({
            count: 1
        })} @${profile.identifier.userId}.`;
        const mentions = profile.linkedTwitterNames?.map((username)=>'@' + username) ?? [];
        return `${t.select_friends_dialog_persona_connect({
            count: linkedNames.length
        })} ${mentions.join(', ')}.`;
    })();
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>onChange(profile, !selected), [
        onChange,
        selected
    ]);
    const secondaryText = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .formatPersonaFingerprint */ .Nb)(profile.linkedPersona?.rawPublicKey?.toUpperCase() ?? '', 3);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        onClick: handleClick,
        className: cx(classes.root, selected ? classes.highLightBg : null),
        secondaryAction: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            disabled: disabled,
            checked: !!selected,
            color: "primary",
            size: "small",
            sx: {
                width: 20,
                height: 20
            }
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                classes: {
                    root: classes.avatarBox
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_components_Avatar_js__WEBPACK_IMPORTED_MODULE_11__/* .Avatar */ .q, {
                    classes: {
                        root: classes.avatar
                    },
                    person: profile
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                classes: {
                    root: profile.fromNextID ? classes.columnReverse : classes.listItemRoot,
                    primary: classes.overflow,
                    secondary: classes.overflow
                },
                primaryTypographyProps: {
                    component: 'div'
                },
                primary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_13__/* .ShadowRootTooltip */ .p, {
                    title: tooltipTitle,
                    arrow: true,
                    placement: "top",
                    classes: {
                        tooltip: classes.toolTip
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.flex,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: classes.highLightBase,
                            highlightClassName: classes.highlighted,
                            searchWords: searchWords,
                            autoEscape: true,
                            textToHighlight: primaryText
                        })
                    })
                }),
                secondaryTypographyProps: {
                    component: 'div'
                },
                secondary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.flex,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: classes.highLightSecond,
                            highlightClassName: classes.highLightSecond,
                            searchWords: searchWords,
                            autoEscape: true,
                            textToHighlight: secondaryText
                        }),
                        rawPublicKey ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_14__/* .CopyButton */ .q, {
                            className: classes.actionIcon,
                            size: 16,
                            text: rawPublicKey
                        }) : null,
                        profile.fromNextID ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__.NextIDMini, {
                            className: classes.badge
                        }) : null
                    ]
                })
            })
        ]
    });
});


/***/ }),

/***/ 34299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ useContacts)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useCurrentPersona.ts
var useCurrentPersona = __webpack_require__(18937);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
;// CONCATENATED MODULE: ./packages/shared/src/utils/identifierSelector.ts

function isProfileIdentifier(value) {
    return value instanceof profile/* ProfileIdentifier */.W;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/useContacts.ts





function useContacts(network) {
    const currentPersona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const values = await service/* default */.ZP.Identity.queryRelationPaged(currentPersona?.identifier, {
            network,
            pageOffset: 0
        }, 1000);
        if (values.length === 0) return constants/* EMPTY_LIST */.rP;
        const identifiers = values.map((x)=>x.profile).filter(isProfileIdentifier);
        return (await service/* default */.ZP.Identity.queryProfilesInformation(identifiers)).filter((x)=>x.linkedPersona && x.linkedPersona !== currentPersona?.identifier);
    }, [
        network,
        currentPersona
    ]);
}


/***/ }),

/***/ 73529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useTwitterIdByWalletSearch)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95766);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50508);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19477);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72601);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72845);


function useTwitterIdByWalletSearch(bindings, value, type) {
    if (!bindings?.length || !type) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_LIST */ .rP;
    const nextIdAccounts = bindings.map((binding)=>{
        const proofs = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(binding.proofs.filter((x)=>x.platform === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NextIDPlatform */ .V.Twitter), (proof)=>proof.identity);
        if (!proofs.length) return null;
        const linkedTwitterNames = proofs.map((x)=>x.identity);
        return {
            nickname: proofs[0].identity,
            identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ProfileIdentifier */ .W.of('twitter.com', proofs[0].identity).expect(`${proofs[0].identity} should be a valid user id`),
            walletAddress: type === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NextIDPlatform */ .V.Ethereum ? value : undefined,
            fromNextID: true,
            linkedTwitterNames,
            linkedPersona: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier */ .o.fromHexPublicKeyK256(binding.persona).expect(`${binding.persona} should be a valid hex public key in k256`)
        };
    });
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(nextIdAccounts);
}


/***/ }),

/***/ 10642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ injectPostInspectorDefault)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(30504);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/index.ts
var utils = __webpack_require__(41840);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/shared/helpers/attachNextIDToProfile.ts
var attachNextIDToProfile = __webpack_require__(562);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/colors/green.js
var green = __webpack_require__(62167);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/Entry.tsx + 1 modules
var Entry = __webpack_require__(18458);
// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/context.tsx + 10 modules
var context = __webpack_require__(78432);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Check.js
var Check = __webpack_require__(93573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/AdditionalPostContent.tsx










var AdditionalIcon;
(function(AdditionalIcon) {
    AdditionalIcon["check"] = "check";
    AdditionalIcon["error"] = "error";
})(AdditionalIcon || (AdditionalIcon = {}));
/** this component does not accept children */ /** Can handle typed message or normal string */ const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            boxSizing: 'border-box',
            width: '100%',
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 'inherit'
        },
        icon: {
            marginRight: theme.spacing(1),
            display: 'flex',
            width: 18,
            height: 18
        },
        content: {
            margin: theme.spacing(1, 0),
            padding: 0,
            overflowWrap: 'break-word'
        },
        rightIcon: {
            paddingLeft: theme.spacing(0.75)
        }
    }));
const AdditionalContent = /*#__PURE__*/ (0,react.memo)(function AdditionalContent(props) {
    const { classes } = useStyles();
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation(), []);
    const { progress, title, message } = props;
    const ProgressJSX = !progress ? null : progress === true ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: 20,
        color: "primary",
        variant: "indeterminate"
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: 20,
        color: "primary",
        ...progress
    });
    const RightIconJSX = ((icon)=>{
        const props = {
            fontSize: 'small',
            className: classes.rightIcon
        };
        if (icon === AdditionalIcon.check) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
            htmlColor: green/* default */.Z[500],
            ...props
        });
        if (icon === AdditionalIcon.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
            color: "error",
            ...props
        });
        return null;
    })(props.titleIcon);
    const header = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "caption",
        color: message ? 'textSecondary' : 'textPrimary',
        gutterBottom: true,
        className: classes.title,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.icon,
                children: ProgressJSX || /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                    size: 18
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    flex: 1,
                    display: 'flex'
                },
                children: [
                    title,
                    RightIconJSX
                ]
            }),
            props.headerActions
        ]
    });
    const TypedMessage = (0,react.useMemo)(()=>{
        if (typeof message === 'string') return (0,core_text/* makeTypedMessageText */.P)(message);
        if (typeof message === 'undefined') return (0,core_text/* makeTypedMessageText */.P)('');
        return message;
    }, [
        message
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        variant: "outlined",
        className: classes.root,
        elevation: 0,
        onClick: stop,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                className: classes.content,
                children: header
            }),
            message ? /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* TypedMessageRenderContext */.w, {
                    textResizer: ui.activatedSiteAdaptorUI.networkIdentifier !== 'twitter.com',
                    renderFragments: ui.activatedSiteAdaptorUI?.customization.componentOverwrite?.RenderFragments,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRender */.O, {
                        message: TypedMessage
                    })
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/shared/src/utils/resolveNextIDPlatform.ts
var resolveNextIDPlatform = __webpack_require__(85662);
// EXTERNAL MODULE: ./packages/shared/src/utils/resolveValueToSearch.ts
var resolveValueToSearch = __webpack_require__(83418);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonasFromNextID.ts
var usePersonasFromNextID = __webpack_require__(8347);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./packages/mask/content-script/components/CompositionDialog/useRecipientsList.ts
var useRecipientsList = __webpack_require__(73929);
// EXTERNAL MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/useTwitterIdByWalletSearch.tsx
var useTwitterIdByWalletSearch = __webpack_require__(73529);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/theme/src/Components/Boundary/index.tsx
var Boundary = __webpack_require__(64149);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useLookupAddress.ts
var useLookupAddress = __webpack_require__(80675);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(88012);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/ProfileInList.tsx
var ProfileInList = __webpack_require__(15763);
// EXTERNAL MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/useContacts.ts + 1 modules
var useContacts = __webpack_require__(34299);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/shared/SelectProfileUI/SelectProfileUI.tsx














const SelectProfileUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        selectedArea: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            display: 'flex',
            padding: 0
        },
        input: {
            flex: 1,
            marginBottom: theme.spacing(2)
        },
        empty: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 12,
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap'
        },
        listParent: {
            height: 400,
            display: 'flex',
            flexDirection: 'column'
        },
        listBody: {
            height: 400,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflowY: 'auto',
            flex: 1
        },
        list: {
            gridGap: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            alignItems: 'flex-start'
        },
        mainText: {
            color: theme.palette.text.primary
        }
    }));
function SelectProfileUI(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = SelectProfileUI_useStyles(undefined, {
        props
    });
    const { frozenSelected, onSetSelected, disabled, items, selected } = props;
    const [search, setSearch] = (0,react.useState)('');
    const { value: registeredAddress = '' } = (0,useLookupAddress/* useLookupAddress */.h)(undefined, (0,react.useDeferredValue)(search));
    const keyword = registeredAddress || search;
    const selectedPubkeyList = (0,compact/* default */.Z)(selected.map((x)=>x.linkedPersona?.publicKeyAsHex));
    const frozenPubkeyList = (0,react.useMemo)(()=>(0,compact/* default */.Z)(frozenSelected.map((x)=>x.linkedPersona?.publicKeyAsHex)), [
        frozenSelected
    ]);
    const { value = constants/* EMPTY_LIST */.rP } = (0,useContacts/* useContacts */.g)(ui.activatedSiteAdaptorUI.networkIdentifier);
    const onSelectedAllChange = (0,react.useCallback)((checked)=>{
        if (checked) {
            onSetSelected([
                ...items
            ]);
        } else {
            onSetSelected([]);
        }
    }, [
        items
    ]);
    const onSelectedProfile = (0,react.useCallback)((item, checked)=>{
        if (checked) {
            onSetSelected([
                ...selected,
                item
            ]);
        } else onSetSelected(selected.filter((x)=>x.linkedPersona?.publicKeyAsHex !== item.linkedPersona?.publicKeyAsHex));
    }, [
        selected
    ]);
    const fuse = (0,react.useMemo)(()=>{
        return entry/* Fuse */.QI.create(items, {
            keys: [
                'identifier.userId',
                'nickname',
                'walletAddress',
                'linkedPersona.rawPublicKey',
                'linkedPersona.publicKeyAsHex',
                'linkedTwitterNames'
            ],
            isCaseSensitive: false,
            ignoreLocation: true,
            threshold: 0
        });
    }, [
        items
    ]);
    const results = (0,react.useMemo)(()=>{
        if (!keyword) return items;
        return fuse.search(keyword).map((item)=>item.item).filter((x)=>!frozenPubkeyList.includes(x.linkedPersona?.publicKeyAsHex));
    }, [
        keyword,
        frozenPubkeyList,
        fuse,
        items
    ]);
    const profiles = (0,uniqBy/* default */.Z)([
        ...frozenSelected,
        ...results,
        ...value
    ], (x)=>x.identifier);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.selectedArea,
                sx: {
                    display: 'flex'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    className: classes.input,
                    value: disabled ? '' : search,
                    onChange: (0,react.useCallback)((e)=>setSearch(e.target.value), []),
                    onKeyDown: (e)=>{
                        if (e.code !== 'Enter') return;
                        (0,react.startTransition)(()=>props.onSearch(keyword));
                    },
                    startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                        position: "start",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {})
                    }),
                    placeholder: t.post_dialog_share_with_input_placeholder(),
                    disabled: disabled
                })
            }),
            props.loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.empty, classes.mainText),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {})
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Boundary/* Boundary */.E, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.listParent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.listBody,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.list,
                                children: profiles.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                                    className: classes.empty,
                                    children: t.compose_encrypt_share_dialog_empty()
                                }) : profiles.map((item)=>{
                                    const pubkey = item.linkedPersona?.publicKeyAsHex;
                                    const selected = selectedPubkeyList.includes(pubkey);
                                    const disabled = frozenPubkeyList.includes(pubkey);
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInList/* ProfileInList */.n, {
                                        profile: item,
                                        disabled: disabled,
                                        selected: selected || disabled,
                                        onChange: onSelectedProfile
                                    }, item.linkedPersona?.publicKeyAsHex ?? item.identifier.toText());
                                })
                            })
                        }),
                        profiles.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            flexDirection: "row",
                            sx: {
                                padding: '16px 0px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    sx: {
                                        width: 20,
                                        height: 20
                                    },
                                    onChange: (e)=>onSelectedAllChange(e.currentTarget.checked)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    sx: {
                                        paddingLeft: 1
                                    },
                                    children: t.select_all()
                                })
                            ]
                        }) : null
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SelectPeopleDialog.tsx














const SelectPeopleDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            padding: '0 12px'
        },
        body: {
            '::-webkit-scrollbar': {
                display: 'none'
            },
            padding: theme.spacing(2),
            height: 450
        },
        action: {
            display: 'flex',
            gap: 16,
            padding: 16,
            boxSizing: 'border-box',
            alignItems: 'center',
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            boxShadow: theme.palette.mode === 'light' ? ' 0px 0px 20px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12);',
            borderRadius: '0px 0px 12px 12px',
            flex: 1,
            backdropFilter: 'blur(8px)'
        },
        cancel: {
            color: theme.palette.maskColor.main,
            background: theme.palette.maskColor.thirdMain,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            height: 40,
            '&:hover': {
                color: theme.palette.maskColor.main,
                background: theme.palette.maskColor.thirdMain
            }
        },
        share: {
            color: theme.palette.maskColor.bottom,
            background: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            height: 40
        }
    }));
function SelectProfileDialog({ open, profiles, selectedProfiles, onClose, onSelect }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = SelectPeopleDialog_useStyles();
    const [people, select] = (0,react.useState)([]);
    const [committed, setCommitted] = (0,react.useState)(false);
    const handleClose = (0,react.useCallback)(()=>{
        onClose();
        setCommitted(false);
        select([]);
    }, [
        onClose
    ]);
    const recipientsList = (0,useRecipientsList/* useRecipientsList */.a)();
    const [rejection, onReject] = (0,react.useState)();
    const share = (0,react.useCallback)(()=>{
        setCommitted(true);
        onSelect((0,uniqBy/* default */.Z)([
            ...people,
            ...selectedProfiles
        ], (x)=>x.identifier)).then(handleClose, onReject);
    }, [
        handleClose,
        people,
        selectedProfiles,
        onSelect
    ]);
    const [valueToSearch, setValueToSearch] = (0,react.useState)('');
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const type = (0,resolveNextIDPlatform/* resolveNextIDPlatform */.v)(valueToSearch);
    const value = (0,resolveValueToSearch/* resolveValueToSearch */._)(valueToSearch);
    const { isLoading: searchLoading, data: NextIDResults } = (0,usePersonasFromNextID/* usePersonasFromNextID */.r)(value, type ?? types/* NextIDPlatform */.V.NextID, false);
    const NextIDItems = (0,useTwitterIdByWalletSearch/* useTwitterIdByWalletSearch */.V)(NextIDResults, value, type);
    const myUserId = currentIdentity?.identifier.userId;
    const searchedList = (0,react.useMemo)(()=>{
        if (!recipientsList?.recipients) return constants/* EMPTY_LIST */.rP;
        const profileItems = recipientsList.recipients.filter((x)=>x.identifier.userId !== myUserId);
        // Selected might contain profiles that fetched asynchronously from
        // Next.ID, which are not stored locally
        return (0,uniqBy/* default */.Z)(profileItems.concat(NextIDItems, profiles), ({ linkedPersona })=>linkedPersona?.rawPublicKey);
    }, [
        NextIDItems,
        profiles,
        recipientsList.recipients,
        myUserId
    ]);
    (0,react.useEffect)(()=>{
        if (!open) return;
        recipientsList.request();
    }, [
        open,
        recipientsList.request
    ]);
    (0,react.useEffect)(()=>{
        if (!open) return;
        providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryMaskComposeVisibleSelected);
    }, [
        open
    ]);
    const canCommit = committed || people.length === 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        onClose: handleClose,
        open: open,
        title: t.select_specific_friends_dialog__title(),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.body,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileUI, {
                    frozenSelected: selectedProfiles,
                    disabled: committed,
                    items: searchedList,
                    selected: people,
                    onSetSelected: select,
                    onSearch: setValueToSearch,
                    loading: searchLoading
                })
            }),
            rejection ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        "Error: ",
                        rejection.message,
                        " ",
                        console.error(rejection)
                    ]
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.action,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.cancel,
                        fullWidth: true,
                        onClick: handleClose,
                        variant: "roundedContained",
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        fullWidth: true,
                        variant: "roundedContained",
                        loading: committed,
                        className: classes.share,
                        disabled: canCommit,
                        onClick: share,
                        children: t.done()
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPost/authorDifferentMessage.tsx


function useAuthorDifferentMessage(author, postBy, jsx) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    if (!author || !postBy) return jsx;
    if (author === postBy) return jsx;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            t.decrypted_postbox_author_mismatch({
                name: author?.userId
            }),
            jsx
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/store.ts
var store = __webpack_require__(50754);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(48311);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var Theme_theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(8395);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/MaskPluginWrapper/index.tsx








const MaskPluginWrapper_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        card: {
            background: props?.backgroundGradient ?? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF;',
            margin: props?.margin ?? theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'default',
            borderRadius: props?.borderRadius ?? 15,
            overflow: 'hidden'
        },
        header: {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1.5)
        },
        provider: {
            display: 'flex',
            alignItems: 'center',
            '& > a': {
                lineHeight: 0
            }
        },
        publish: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16
        },
        body: {
            padding: theme.spacing(0)
        },
        providerBy: {
            marginRight: theme.spacing(0.5),
            fontSize: 14,
            fontWeight: 700,
            color: Theme_theme/* MaskLightTheme */.C.palette.maskColor.second
        }
    };
});
function MaskPostExtraInfoWrapper(props) {
    const { open, title, children, action, publisher, publisherLink, content, wrapperProps } = props;
    const { classes } = MaskPluginWrapper_useStyles({
        backgroundGradient: wrapperProps?.backgroundGradient,
        borderRadius: wrapperProps?.borderRadius,
        margin: wrapperProps?.margin
    });
    const t = (0,locales_i18n_generated/* useSharedTrans */.j)();
    const publisherInfo = (0,react.useMemo)(()=>{
        if (!publisher) return;
        const main = /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            fontSize: 14,
            fontWeight: "700",
            component: "div",
            color: vars/* MaskColorVar */.Z.textPluginColor,
            children: publisher
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
            className: classes.provider,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.providerBy,
                    children: t.powered_by()
                }),
                main,
                publisherLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: publisherLink,
                    underline: "none",
                    target: "_blank",
                    rel: "noopener",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Provider, {
                        size: 18,
                        style: {
                            marginLeft: 4
                        },
                        color: Theme_theme/* MaskLightTheme */.C.palette.maskColor.main
                    })
                }) : null
            ]
        });
    }, [
        publisher,
        publisherLink
    ]);
    const inner = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        style: {
            display: open ? 'block' : 'none'
        },
        onClick: (ev)=>ev.stopPropagation(),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    wrapperProps?.icon ?? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                        size: 24,
                        style: {
                            filter: 'drop-shadow(0px 6px 12px rgba(28, 104, 243, 0.2))'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            marginLeft: 0.5
                        },
                        variant: "body1",
                        fontSize: 16,
                        fontWeight: 700,
                        component: "div",
                        color: vars/* MaskColorVar */.Z.textPluginColor,
                        children: wrapperProps?.title ?? title ?? t.plugin_default_title()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.publish,
                        children: publisherInfo
                    })
                ]
            }),
            action ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "div",
                        variant: "body1",
                        color: "#FF3545",
                        sx: {
                            padding: 1
                        },
                        textAlign: "center",
                        children: content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.action,
                        children: action
                    })
                ]
            }) : null,
            children ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: children
            }) : null
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
            message: "Mask is loading this content..."
        }),
        children: inner
    });
}
const MaskPostExtraPluginWrapper = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { ID, name, publisher, wrapperProps } = props.definition;
    const t = (0,useTrans/* usePluginTransField */.T)();
    const [width, setWidth] = (0,react.useState)(undefined);
    const [open, setOpen] = (0,react.useState)(false);
    const [title, setTitle] = (0,react.useState)(undefined);
    const refItem = (0,react.useMemo)(()=>{
        return {
            setWidth,
            setWrap: setOpen,
            setWrapperName: setTitle
        };
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>refItem, [
        refItem
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
        ID: props.definition.ID,
        wrapperProps: wrapperProps,
        open: open,
        title: title || t(ID, name),
        width: width,
        publisher: publisher ? /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
            pluginID: ID,
            field: publisher.name
        }) : undefined,
        publisherLink: publisher?.link,
        children: props.children,
        lackHostPermission: props.lackHostPermission
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/types.ts
var shared_base_src_types = __webpack_require__(75093);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DisabledPluginSuggestion.tsx













function useDisabledPlugins() {
    const activated = new Set((0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any').map((x)=>x.ID));
    const minimalMode = new Set((0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)(true).map((x)=>x.ID));
    const disabledPlugins = (0,use_subscription.useSubscription)(store/* registeredPlugins */.i1).filter((plugin)=>!activated.has(plugin[0]) || minimalMode.has(plugin[0])).map((x)=>x[1]);
    return disabledPlugins;
}
function useDisabledPluginSuggestionFromPost(postContent, metaLinks) {
    const disabled = useDisabledPlugins().filter((x)=>x.contribution?.postContent);
    const matches = disabled.filter((x)=>{
        for (const pattern of x.contribution.postContent){
            if (postContent.isSome() && postContent.value.match(pattern)) return true;
            if (metaLinks.some((link)=>link.match(pattern))) return true;
        }
        return false;
    });
    return matches;
}
function useDisabledPluginSuggestionFromMeta(meta) {
    const disabled = useDisabledPlugins().filter((x)=>x.contribution?.metadataKeys);
    if (!meta) return constants/* EMPTY_LIST */.rP;
    const matches = disabled.filter((x)=>{
        const contributes = x.contribution.metadataKeys;
        return [
            ...meta.keys()
        ].some((key)=>contributes.has(key));
    });
    return matches;
}
function PossiblePluginSuggestionPostInspector() {
    const message = (0,extract/* extractTextFromTypedMessage */.V)(PostContext/* usePostInfoDetails */.H9.rawMessage());
    const metaLinks = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
    const matches = useDisabledPluginSuggestionFromPost(message, metaLinks);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
        plugins: matches
    });
}
function PossiblePluginSuggestionUI(props) {
    const { plugins } = props;
    const _plugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    if (!plugins.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: plugins.map((define)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUISingle, {
                define: define,
                wrapperProps: _plugins.find((y)=>y.ID === define.ID)?.wrapperProps
            }, define.ID))
    });
}
function PossiblePluginSuggestionUISingle(props) {
    const { define, lackHostPermission, wrapperProps, content } = props;
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    const onClick = (0,react.useCallback)(()=>{
        if (lackHostPermission && define.enableRequirement.host_permissions) {
            service/* default */.ZP.Helper.requestHostPermission(define.enableRequirement.host_permissions);
        } else {
            service/* default */.ZP.Settings.setPluginMinimalModeEnabled(define.ID, false);
        }
    }, [
        lackHostPermission,
        define
    ]);
    const { value: disabled } = (0,useAsync/* default */.Z)(async ()=>{
        const status = await service/* default */.ZP.Settings.getPluginMinimalModeEnabled(define.ID);
        return status === shared_base_src_types/* BooleanPreference */.e.True;
    }, [
        define.ID
    ]);
    const ButtonIcon = lackHostPermission ? icon_generated_as_jsx.Approve : icon_generated_as_jsx.Plugin;
    const wrapperContent = content ?? /*#__PURE__*/ (0,jsx_runtime.jsx)(FallbackContent, {
        disabled: disabled,
        height: 74
    });
    const buttonLabel = lackHostPermission ? t.approve() : t.plugin_enable();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
        ID: props.define.ID,
        open: true,
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
            field: define.name,
            pluginID: define.ID
        }),
        publisher: define.publisher ? /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
            pluginID: define.ID,
            field: define.publisher.name
        }) : undefined,
        publisherLink: define.publisher?.link,
        wrapperProps: wrapperProps,
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            size: "small",
            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonIcon, {
                size: 18,
                sx: {
                    lineHeight: 1
                }
            }),
            variant: "roundedDark",
            onClick: onClick,
            sx: {
                backgroundColor: theme.palette.maskColor.dark,
                color: 'white',
                width: '254px',
                height: '36px',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.5,
                '&:hover': {
                    backgroundColor: theme.palette.maskColor.dark
                }
            },
            children: buttonLabel
        }),
        content: wrapperContent
    });
}
const DisabledPluginSuggestion_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        text: {
            color: Theme_theme/* MaskLightTheme */.C.palette.maskColor.main
        },
        rectangle: {
            backgroundColor: 'rgba(255,255,255,0.5)'
        }
    }));
function FallbackContent({ disabled, ...rest }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = DisabledPluginSuggestion_useStyles();
    if (disabled) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        component: "div",
        ...rest,
        className: cx(classes.content, rest.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.text,
            children: t.plugin_disabled_tip()
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        component: "div",
        pl: 1,
        ...rest,
        className: cx(classes.content, rest.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.rectangle,
                variant: "text",
                animation: false,
                width: 103,
                height: 16
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.rectangle,
                variant: "text",
                animation: false,
                width: 68,
                height: 16
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.rectangle,
                variant: "text",
                animation: false,
                width: 48,
                height: 16
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/usePluginHostPermission.ts
var usePluginHostPermission = __webpack_require__(71132);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/PermissionBoundary.tsx







const PermissionBoundary = /*#__PURE__*/ (0,react.memo)(({ permissions, fallback, children })=>{
    const { value: hasPermissions = true } = (0,usePluginHostPermission/* useCheckPermissions */.Xo)(permissions);
    const [grantState, onGrant] = (0,usePluginHostPermission/* useGrantPermissions */.Ie)(permissions);
    if (!hasPermissions && fallback && permissions.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof fallback === 'function' ? fallback(grantState, onGrant) : fallback
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
});
const MaskPostExtraPluginWrapperWithPermission = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const wrapperMethodsRef = (0,react.useRef)(null);
    const theme = (0,useTheme/* default */.Z)();
    const t = (0,locales_i18n_generated/* useSharedTrans */.j)();
    const [open, setOpen] = (0,react.useState)(false);
    const refItem = (0,react.useMemo)(()=>{
        return {
            setWidth: (width)=>wrapperMethodsRef.current?.setWidth(width),
            setWrap: (open)=>{
                setOpen(open);
                wrapperMethodsRef.current?.setWrap(open);
            },
            setWrapperName: (name)=>wrapperMethodsRef.current?.setWrapperName(name)
        };
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>refItem, [
        refItem
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionBoundary, {
        permissions: props.definition.enableRequirement.host_permissions ?? constants/* EMPTY_LIST */.rP,
        fallback: open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUISingle, {
            lackHostPermission: true,
            define: props.definition,
            wrapperProps: props.definition.wrapperProps,
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                color: theme.palette.maskColor.publicMain,
                fontSize: 14,
                marginBottom: 3.25,
                textAlign: "left",
                component: "div",
                px: "18px",
                children: [
                    t.authorization_descriptions(),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "div",
                        children: props.definition.enableRequirement.host_permissions?.join(',')
                    })
                ]
            })
        }) : undefined,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraPluginWrapper, {
            ...props,
            ref: (methods)=>{
                if (methods) wrapperMethodsRef.current = methods;
            }
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPostMetadataRender.tsx





const Decrypted = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (x)=>x.DecryptedInspector, MaskPostExtraPluginWrapperWithPermission);
function DecryptedUI_PluginRendererWithSuggestion(props) {
    const a = useDisabledPluginSuggestionFromMeta(props.metadata);
    const b = useDisabledPluginSuggestionFromPost((0,extract/* extractTextFromTypedMessage */.V)(props.message), []);
    const suggest = Array.from(new Set(a.concat(b)));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
                plugins: suggest
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Decrypted, {
                ...props
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/useSelectedRecipientsList.ts




function useSelectedRecipientsList() {
    const iv = PostContext/* usePostInfoDetails */.H9.postIVIdentifier();
    return (0,useAsyncRetry/* default */.Z)(async ()=>iv ? service/* default */.ZP.Crypto.getIncompleteRecipientsOfPost(iv) : constants/* EMPTY_LIST */.rP, [
        iv
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/mask/shared-ui/components/Avatar.tsx
var Avatar = __webpack_require__(17702);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPost/RecipientsToolTip.tsx





const RecipientsToolTip_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { isMore })=>{
    return {
        iconStack: {
            padding: theme.spacing(0.5),
            background: theme.palette.maskColor.bg,
            borderRadius: '999px',
            cursor: 'pointer',
            display: 'inline-flex',
            boxSizing: 'border-box',
            minWidth: 'auto'
        },
        icon: {
            marginLeft: '-3.5px',
            fontSize: 'inherit',
            width: 16,
            height: 16,
            ':nth-of-type(1)': {
                zIndex: 1,
                marginLeft: 0
            },
            ':nth-of-type(2)': {
                zIndex: 2
            },
            ':nth-of-type(3)': {
                zIndex: 3
            }
        },
        iconMore: {
            transform: 'translate(-6px, 3px)',
            zIndex: 4
        },
        iconAdd: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: isMore ? 4 : 10,
            background: theme.palette.maskColor.primary,
            borderRadius: '50%',
            height: 16,
            width: 16
        }
    };
});
function RecipientsToolTip({ recipients, openDialog }) {
    const isMore = recipients.length > 3;
    const { classes } = RecipientsToolTip_useStyles({
        isMore
    });
    const theme = (0,useTheme/* default */.Z)();
    if (!recipients.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.iconStack,
        onClick: openDialog,
        children: [
            recipients.slice(0, 3).map((recipient)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* Avatar */.q, {
                    classes: {
                        root: classes.icon
                    },
                    person: recipient
                }, recipient.identifier.userId)),
            isMore ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.More, {
                size: 13,
                className: classes.iconMore,
                color: theme.palette.text.primary
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.iconAdd,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.AddNoBorder, {
                    size: 12,
                    color: theme.palette.maskColor.white
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPost/DecryptedPostSuccess.tsx



















/** The author in the payload */ /** The author of the encrypted post */ function useCanAppendShareTarget(whoAmI) {
    const version = PostContext/* usePostInfoDetails */.H9.version();
    const sharedPublic = PostContext/* usePostInfoDetails */.H9.publicShared();
    const currentPostBy = PostContext/* usePostInfoDetails */.H9.author();
    // TODO: this should be read from the payload.
    const authorInPayload = currentPostBy;
    const postAuthor = authorInPayload || currentPostBy;
    if (sharedPublic) return false;
    if (version !== -38 && version !== -37) return false;
    if (!whoAmI) return false;
    if (whoAmI !== postAuthor) return false;
    return true;
}
const DecryptPostSuccessBase = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccessNoShare(props) {
    const { message, author, postedBy } = props;
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const iv = PostContext/* usePostInfoDetails */.H9.postIVIdentifier();
    (0,react.useEffect)(()=>{
        if (message.meta || !iv?.toText()) return;
        Messages/* MaskMessages */.q.events.postReplacerHidden.sendToLocal({
            hidden: true,
            postId: iv.toText()
        });
    }, [
        message,
        iv?.toText()
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
                title: t.decrypted_postbox_title(),
                headerActions: useAuthorDifferentMessage(author, postedBy, props.children),
                message: message
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptedUI_PluginRendererWithSuggestion, {
                message: message,
                metadata: message.meta
            })
        ]
    });
});
const DecryptedPostSuccess_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { canAppendShareTarget })=>{
    return {
        visibilityBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(0.5, 1),
            background: theme.palette.maskColor.bg,
            borderRadius: '999px',
            cursor: canAppendShareTarget ? 'pointer' : 'default'
        },
        iconAdd: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 8,
            background: theme.palette.maskColor.primary,
            borderRadius: '50%',
            height: 16,
            width: 16
        }
    };
});
const DecryptPostSuccess = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccess(props) {
    const canAppendShareTarget = useCanAppendShareTarget(props.whoAmI);
    const { classes } = DecryptedPostSuccess_useStyles({
        canAppendShareTarget
    });
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [showDialog, setShowDialog] = (0,react.useState)(false);
    const theme = (0,useTheme/* default */.Z)();
    const recipients = (0,useRecipientsList/* useRecipientsList */.a)();
    const { value: selectedRecipients = constants/* EMPTY_LIST */.rP, retry } = useSelectedRecipientsList();
    const rightActions = props.author?.userId === props.whoAmI?.userId ? canAppendShareTarget && props.whoAmI ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            selectedRecipients?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RecipientsToolTip, {
                recipients: selectedRecipients,
                openDialog: ()=>setShowDialog(true)
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.visibilityBox,
                onClick: ()=>setShowDialog(true),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        fontSize: 12,
                        fontWeight: 500,
                        children: t.decrypted_postbox_only_visible_to_yourself()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.iconAdd,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.AddNoBorder, {
                            size: 12,
                            color: theme.palette.maskColor.white
                        })
                    })
                ]
            }),
            showDialog ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AppendShareDetail, {
                selectedRecipients: selectedRecipients,
                retry: retry,
                whoAmI: props.whoAmI,
                onClose: ()=>setShowDialog(false),
                recipients: recipients
            }) : null
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.visibilityBox,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textPrimary",
            fontSize: 12,
            fontWeight: 500,
            children: t.decrypted_postbox_visible_to_all()
        })
    }) : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostSuccessBase, {
        ...props,
        children: rightActions
    });
});
function AppendShareDetail({ recipients, selectedRecipients, onClose, whoAmI, retry }) {
    const info = (0,react.useContext)(PostContext/* PostInfoContext */.lG);
    const iv = PostContext/* usePostInfoDetails */.H9.postIVIdentifier();
    (0,react.useEffect)(recipients.request, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileDialog, {
        open: true,
        selectedProfiles: selectedRecipients,
        profiles: recipients.recipients || constants/* EMPTY_LIST */.rP,
        onClose: onClose,
        onSelect: async (profiles)=>{
            for (const item of profiles){
                await (0,attachNextIDToProfile/* attachNextIDToProfile */.$)(item);
            }
            await service/* default */.ZP.Crypto.appendShareTarget(info.version.getCurrentValue(), iv, profiles.map((x)=>({
                    profile: x.identifier,
                    persona: x.linkedPersona
                })), whoAmI, ui.activatedSiteAdaptorUI.encryptPayloadNetwork);
            await (0,esm/* delay */.gw)(1500);
            retry();
        }
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPost/DecryptPostAwaiting.tsx





/** The author in the payload */ /** The author of the encrypted post */ const DecryptPostAwaiting = /*#__PURE__*/ (0,react.memo)(function DecryptPostAwaiting(props) {
    const { author, postedBy, type } = props;
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const key = {
        finding_post_key: t.decrypted_postbox_decrypting_finding_post_key(),
        finding_person_public_key: t.decrypted_postbox_decrypting_finding_person_key(),
        init: t.decrypted_postbox_decrypting(),
        decode_post: t.decrypted_postbox_decoding(),
        iv_decrypted: t.decrypted_postbox_decoding(),
        payload_decrypted: t.decrypted_postbox_decoding(),
        intermediate_success: 'unreachable case. it should display success UI',
        undefined: t.decrypted_postbox_decrypting()
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: key[type?.progress || 'undefined'],
        progress: true,
        headerActions: useAuthorDifferentMessage(author, postedBy, void 0)
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPost/DecryptPostFailed.tsx





/** The author in the payload */ /** The author of the encrypted post */ const DecryptPostFailed = /*#__PURE__*/ (0,react.memo)(function DecryptPostFailed(props) {
    const { author, postedBy, error } = props;
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: t.service_decryption_failed(),
        titleIcon: "error",
        message: error?.message,
        headerActions: useAuthorDifferentMessage(author, postedBy, void 0)
    });
});

// EXTERNAL MODULE: ./packages/encryption/src/encryption/DecryptionTypes.ts
var DecryptionTypes = __webpack_require__(34625);
// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var dist_esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqWith.js
var uniqWith = __webpack_require__(9402);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/DecryptedPost/DecryptedPost.tsx













function progressReducer(state, payload) {
    const { key, progress } = payload;
    const currentProgressIndex = state.findIndex((x)=>x.key === key);
    if (currentProgressIndex === -1) {
        return [
            ...state,
            {
                key,
                progress
            }
        ];
    }
    const currentProgress = state[currentProgressIndex].progress;
    if (currentProgress && currentProgress.type !== 'progress' && progress.type === 'progress') return state;
    state[currentProgressIndex] = {
        key,
        progress
    };
    return [
        ...state
    ];
}
function isProgressEqual(a, b) {
    if (a.type !== b.type) return false;
    if (a.internal !== b.internal) return false;
    if (a.type === 'success') return (0,utils/* isTypedMessageEqual */.Hz)(a, b);
    if (a.type === 'error') return a.error === b.error;
    if (a.type === 'progress') return a.progress === b.progress;
    (0,esm/* safeUnreachable */.P)(a.type);
    return false;
}
function DecryptPost(props) {
    const { whoAmI } = props;
    const deconstructedPayload = PostContext/* usePostInfoDetails */.H9.hasMaskPayload();
    const currentPostBy = PostContext/* usePostInfoDetails */.H9.author();
    // TODO: we should read this from the payload.
    const authorInPayload = PostContext/* usePostInfoDetails */.H9.author();
    const postBy = authorInPayload || currentPostBy;
    const postMetadataImages = PostContext/* usePostInfoDetails */.H9.postMetadataImages();
    const mentionedLinks = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
    const postInfo = (0,react.useContext)(PostContext/* PostInfoContext */.lG);
    const [progress, dispatch] = (0,react.useReducer)(progressReducer, []);
    (0,react.useEffect)(()=>{
        function setCommentFns(iv, message) {
            const text = (0,extract/* extractTextFromTypedMessage */.V)(message).expect('TypedMessage should have one or more text part');
            postInfo.encryptComment.value = async (comment)=>service/* default */.ZP.Crypto.encryptComment(iv, text, comment);
            postInfo.decryptComment.value = async (encryptedComment)=>service/* default */.ZP.Crypto.decryptComment(iv, text, encryptedComment);
        }
        const signal = new AbortController();
        const postURL = postInfo.url.getCurrentValue()?.toString();
        const report = (key)=>(kind, message)=>{
                if (kind === 'e2e') {
                    dispatch({
                        type: 'refresh',
                        key,
                        progress: {
                            type: 'progress',
                            progress: 'finding_post_key',
                            internal: false
                        }
                    });
                } else {
                    dispatch({
                        type: 'refresh',
                        key,
                        progress: {
                            type: 'error',
                            error: message,
                            internal: false
                        }
                    });
                }
            };
        if (deconstructedPayload) {
            makeProgress(postURL, postBy, whoAmI, {
                type: 'text',
                text: (0,extract/* extractTextFromTypedMessage */.V)(postInfo.rawMessage.getCurrentValue()).unwrapOr('') + ' ' + mentionedLinks.join(' ')
            }, (message, iv)=>{
                setCommentFns(iv, message);
                dispatch({
                    type: 'refresh',
                    key: 'text',
                    progress: {
                        type: 'success',
                        content: message,
                        internal: false,
                        iv: (0,esm/* encodeArrayBuffer */.ll)(iv)
                    }
                });
            }, postInfo.decryptedReport, report('text'), signal.signal);
        }
        postMetadataImages.forEach((url)=>{
            if (signal.signal.aborted) return;
            makeProgress(postURL, postBy, whoAmI, {
                type: 'image-url',
                image: url
            }, (message, iv)=>{
                setCommentFns(iv, message);
                dispatch({
                    type: 'refresh',
                    key: url,
                    progress: {
                        type: 'success',
                        content: message,
                        internal: false,
                        iv: (0,esm/* encodeArrayBuffer */.ll)(iv)
                    }
                });
            }, postInfo.decryptedReport, report(url), signal.signal);
        });
        return ()=>signal.abort();
    }, [
        deconstructedPayload,
        postBy,
        postMetadataImages.join(','),
        whoAmI,
        mentionedLinks.join(',')
    ]);
    if (!deconstructedPayload && progress.every((x)=>x.progress.internal)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,uniqWith/* default */.Z)(progress, (a, b)=>isProgressEqual(a.progress, b.progress)).// the internal progress should not display to the end-user
        filter(({ progress })=>!progress.internal).map(({ progress, key }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: renderProgress(progress)
            }, key))
    });
    function renderProgress(progress) {
        switch(progress.type){
            case 'success':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostSuccess, {
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    whoAmI: whoAmI,
                    message: progress.content
                });
            case 'error':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostFailed, {
                    error: new Error(progress.error),
                    author: authorInPayload,
                    postedBy: currentPostBy
                });
            case 'progress':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostAwaiting, {
                    type: progress,
                    author: authorInPayload,
                    postedBy: currentPostBy
                });
            default:
                return null;
        }
    }
}
async function makeProgress(postURL, authorHint, currentProfile, payload, done, reporter, reportProgress, signal) {
    const context = {
        postURL,
        authorHint,
        currentProfile,
        encryptPayloadNetwork: ui.activatedSiteAdaptorUI.encryptPayloadNetwork
    };
    let iv;
    for await (const progress of service/* GeneratorServices */.$2.decrypt(payload, context)){
        if (signal.aborted) return;
        if (progress.type === DecryptionTypes/* DecryptProgressKind */.Pj.Success) {
            done(progress.content, iv || new Uint8Array());
        } else if (progress.type === DecryptionTypes/* DecryptProgressKind */.Pj.Info) {
            iv ??= progress.iv;
            if (typeof progress.isAuthorOfPost === 'boolean') reporter({
                isAuthorOfPost: (0,dist_esm.Some)(progress.isAuthorOfPost)
            });
            if (progress.iv) reporter({
                iv: (0,esm/* encodeArrayBuffer */.ll)(progress.iv)
            });
            if (progress.version) reporter({
                version: progress.version
            });
            if (typeof progress.publicShared === 'boolean') reporter({
                sharedPublic: (0,dist_esm.Some)(progress.publicShared)
            });
        } else if (progress.type === DecryptionTypes/* DecryptProgressKind */.Pj.Progress) {
            if (progress.event === DecryptionTypes/* DecryptIntermediateProgressKind */.gO.TryDecryptByE2E) reportProgress('e2e', '');
            else (0,esm/* safeUnreachable */.P)(progress.event);
        } else if (progress.type === DecryptionTypes/* DecryptProgressKind */.Pj.Error) {} else (0,esm/* safeUnreachable */.P)(progress);
    }
}

// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/PostInspector.tsx








const PluginHooksRenderer = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.PostInspector, MaskPostExtraPluginWrapperWithPermission);
/** @default 'before' */ function PostInspector(props) {
    const postBy = PostContext/* usePostInfoDetails */.H9.author();
    const hasEncryptedPost = PostContext/* usePostInfoDetails */.H9.hasMaskPayload();
    const postImages = PostContext/* usePostInfoDetails */.H9.postMetadataImages();
    const isDebugging = (0,use_subscription.useSubscription)(KVStorage/* PersistentStorages */._H.Settings.storage.debugging.subscription);
    const whoAmI = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    if (hasEncryptedPost || postImages.length) {
        if (!isDebugging) props.zipPost();
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPost, {
            whoAmI: whoAmI?.identifier || null
        }));
    }
    return withAdditionalContent(null);
    function withAdditionalContent(x) {
        const slot = hasEncryptedPost ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {});
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                 false ? /*#__PURE__*/ 0 : null,
                props.slotPosition !== 'after' && slot,
                x,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionPostInspector, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginHooksRenderer, {}),
                props.slotPosition !== 'before' && slot
            ]
        });
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostInspector.tsx






function injectPostInspectorDefault(config = {}, props) {
    const PostInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PostInspectorDefault(props) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            ...props
        });
    });
    const { zipPost, injectionPoint } = config;
    const zipPostF = zipPost || noop/* default */.Z;
    return function injectPostInspector(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(PostContext/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspectorDefault, {
                ...props,
                zipPost: ()=>zipPostF(current.rootElement)
            })
        });
        const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(injectionPoint?.(current) ?? current.rootElement.afterShadow, {
            key: 'post-inspector',
            untilVisible: true,
            signal
        });
        root.render(jsx);
        return root.destroy;
    };
}


/***/ }),

/***/ 14712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ createTaskStartSetupGuideDefault)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/Events.ts
var Events = __webpack_require__(24272);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SetupGuide.ts
var SetupGuide = __webpack_require__(37816);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Extension.js


/* harmony default export */ const Extension = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
}), 'Extension'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/WizardDialog.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            marginBottom: theme.spacing(2)
        },
        footer: {
            marginLeft: 0,
            marginTop: theme.spacing(3),
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
    }));
function ContentUI(props) {
    const { classes } = useStyles();
    switch(props.dialogType){
        case SetupGuide/* SetupGuideStep */.s.PinExtension:
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                        className: classes.content,
                        children: props.content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: props.tip
                    }),
                    props.footer ? /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                        className: classes.footer,
                        children: props.footer
                    }) : null,
                    props.dismiss ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: props.dismiss
                    }) : null
                ]
            });
        default:
            return null;
    }
}
const useWizardDialogStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: theme.spacing(3),
            position: 'relative',
            boxShadow: theme.palette.mode === 'dark' ? 'none' : theme.shadows[4],
            border: `${theme.palette.mode === 'dark' ? 'solid' : 'none'} 1px ${theme.palette.divider}`,
            borderRadius: 20,
            [theme.breakpoints.down('sm')]: {
                position: 'fixed',
                bottom: 0,
                left: 0,
                margin: 0,
                alignSelf: 'center',
                borderRadius: 0,
                boxShadow: 'none',
                border: `solid 1px ${theme.palette.divider}`,
                width: '100%'
            },
            userSelect: 'none',
            boxSizing: 'border-box',
            width: 480,
            '&.small': {
                width: 384
            },
            overflow: 'hidden'
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10,
            cursor: 'pointer'
        },
        header: {
            height: 40
        },
        content: {},
        footer: {}
    }));
function WizardDialog(props) {
    const { small, title, dialogType, content, tip, footer, dismiss, onClose } = props;
    const { classes, cx } = useWizardDialogStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: cx(classes.root, small ? 'small' : ''),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                className: classes.header,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    variant: "h3",
                    fontSize: 24,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentUI, {
                dialogType: dialogType,
                content: content,
                tip: tip,
                footer: footer,
                dismiss: dismiss
            }),
            onClose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.close,
                size: "medium",
                onClick: onClose,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {})
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/PinExtension.tsx








const PinExtension_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            minWidth: 150,
            height: 40,
            minHeight: 40,
            marginLeft: 0,
            marginTop: 0,
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
            fontSize: 14,
            wordBreak: 'keep-all',
            '&,&:hover': {
                color: `${vars/* MaskColorVar */.Z.twitterButtonText} !important`,
                background: `${vars/* MaskColorVar */.Z.twitterButton} !important`
            }
        },
        tip: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '22px',
            paddingTop: 16
        },
        connection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        connectItem: {
            flex: 1,
            height: 75,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        line: {
            width: 100,
            height: 1,
            borderTop: `dashed 1px  ${vars/* MaskColorVar */.Z.borderSecondary}`
        },
        name: {
            fontSize: 16,
            fontWeight: 500
        }
    }));
function PinExtension({ onDone, onClose }) {
    const pinImg = new URL(/* asset import */ __webpack_require__(72323), __webpack_require__.b).toString();
    const { classes } = PinExtension_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
        dialogType: SetupGuide/* SetupGuideStep */.s.PinExtension,
        content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.connection,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.connectItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                            size: 48
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.name,
                            children: "Mask Network"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.line
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.connectItem,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: pinImg,
                        width: 100,
                        style: {
                            filter: 'drop-shadow(0 0 16px rgba(101, 119, 134, 0.2))'
                        }
                    })
                })
            ]
        }),
        tip: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            className: classes.tip,
            component: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: t.setup_guide_pin_tip()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                    style: {
                        paddingLeft: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                t.setup_guide_pin_tip_step_click_left(),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Extension, {
                                    sx: {
                                        fontSize: 16,
                                        color: '#ababab'
                                    }
                                }),
                                t.setup_guide_pin_tip_step_click_right()
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                t.setup_guide_pin_tip_step_find_left(),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Pin, {
                                    size: 16
                                }),
                                t.setup_guide_pin_tip_step_find_right()
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: t.setup_guide_pin_tip_successfully()
                        })
                    ]
                })
            ]
        }),
        footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            className: classes.button,
            variant: "contained",
            onClick: onDone,
            children: t.start()
        }),
        onClose: onClose
    });
}

// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(54225);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./packages/mask/content-script/components/GuideStep/useSetupGuideStatus.ts
var useSetupGuideStatus = __webpack_require__(54474);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useTimeout.js
var useTimeout = __webpack_require__(48927);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/hooks/useCurrentUserId.ts


function useCurrentUserId() {
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const currentUserId = lastRecognized.identifier?.userId;
    // There is not state for getting current userId, setting a timeout for that.
    const [timeout] = (0,useTimeout/* default */.Z)(5000);
    const [delay] = (0,useTimeout/* default */.Z)(800);
    const fakeLoading = !delay();
    // Getting userId is instantly fast, add a fake loading
    const loading = timeout() ? false : fakeLoading || !currentUserId;
    return [
        loading,
        fakeLoading ? undefined : currentUserId
    ];
}

// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaProofs.ts
var usePersonaProofs = __webpack_require__(19717);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/hooks/useConnectedVerified.ts


function useConnectedVerified(pubkey, userId) {
    const { data: proofs, isFetching, isLoading } = (0,usePersonaProofs/* usePersonaProofs */.x)(pubkey);
    const platform = ui.activatedSiteAdaptorUI.configuration.nextIDConfig?.platform;
    const checking = isLoading || isFetching;
    if (!platform || !proofs?.length) return [
        checking,
        false
    ];
    const verified = proofs.some((x)=>x.platform === platform && x.identity === userId && x.is_valid);
    return [
        checking,
        verified
    ];
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/SetupGuideContext.tsx











function useSetupGuideStepInfo(persona) {
    // #region parse setup status
    const lastPinExtensionSetting = (0,useValueRef/* useValueRef */.E)(settings/* userPinExtension */.FX);
    const setupGuide = (0,useSetupGuideStatus/* useSetupGuideStatus */.j)();
    // #endregion
    const myIdentity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const [loadingCurrentUserId, currentUserId] = useCurrentUserId();
    const userId = setupGuide.username || currentUserId || '';
    const { data: personaInfo, isFetching: checkingConnected, refetch } = (0,useQuery/* useQuery */.a)({
        enabled: !!persona?.publicKeyAsHex,
        queryKey: [
            'query-persona-info',
            persona?.publicKeyAsHex
        ],
        queryFn: async ()=>{
            if (!persona?.publicKeyAsHex) return null;
            return service/* default */.ZP.Identity.queryPersona(persona);
        }
    });
    (0,react.useEffect)(()=>Messages/* MaskMessages */.q.events.ownPersonaChanged.on(()=>refetch()), []);
    const { data: currentTabId } = (0,useQuery/* useQuery */.a)([
        'current-tab-id'
    ], async ()=>service/* default */.ZP.Helper.getActiveTabId(), {
        refetchOnWindowFocus: true
    });
    const { networkIdentifier: site, configuration } = ui.activatedSiteAdaptorUI;
    const nextIdPlatform = configuration.nextIDConfig?.platform;
    const [checkingVerified, verified] = useConnectedVerified(personaInfo?.identifier?.publicKeyAsHex, userId);
    const connected = personaInfo?.linkedProfiles.some((x)=>x.identifier.network === site && x.identifier.userId === userId);
    (0,react.useEffect)(()=>{
        if (userId || site !== types/* EnhanceableSite */.J.Twitter) return;
        // In order to collect user info after login, need to reload twitter once
        let reloaded = false;
        const handler = ()=>{
            // twitter will redirect to home page after login
            if (!(!reloaded && location.pathname === '/home')) return;
            reloaded = true;
            location.reload();
        };
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler);
    }, [
        userId
    ]);
    const [isFirstConnection, setIsFirstConnection] = (0,react.useState)(false);
    const step = (0,react.useMemo)(()=>{
        if (!setupGuide.status) {
            // Should show pin extension when not set
            if (!lastPinExtensionSetting) {
                return SetupGuide/* SetupGuideStep */.s.PinExtension;
            } else {
                return SetupGuide/* SetupGuideStep */.s.Close;
            }
        }
        const nextStep = isFirstConnection ? SetupGuide/* SetupGuideStep */.s.VerifyOnNextID : SetupGuide/* SetupGuideStep */.s.CheckConnection;
        if (checkingVerified || checkingConnected || loadingCurrentUserId) return nextStep;
        if (!connected || nextIdPlatform && !verified) {
            return SetupGuide/* SetupGuideStep */.s.VerifyOnNextID;
        }
        return nextStep;
    }, [
        setupGuide.status,
        checkingVerified,
        checkingConnected,
        connected,
        verified,
        isFirstConnection,
        loadingCurrentUserId
    ]);
    const skip = !personaInfo || currentTabId !== setupGuide.tabId;
    // Will show connect result the first time for sites that don't need to verify nextId.
    return {
        step: skip ? SetupGuide/* SetupGuideStep */.s.Close : step,
        userId,
        currentUserId,
        loadingCurrentUserId,
        myIdentity,
        personaInfo,
        isFirstConnection,
        setIsFirstConnection,
        checkingConnected,
        checkingVerified,
        verified,
        connected
    };
}
const SetupGuideContext = (0,unstated_next/* createContainer */.f)(useSetupGuideStepInfo);
SetupGuideContext.Provider.displayName = 'SetupGuideProvider';

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/generateContactAvatarColor.ts
var generateContactAvatarColor = __webpack_require__(56851);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EmojiAvatar/constants.ts
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

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EmojiAvatar/index.tsx






function EmojiAvatar({ value, ...props }) {
    const theme = (0,useTheme/* default */.Z)();
    const { emoji, backgroundColor } = (0,react.useMemo)(()=>{
        if ((0,address/* isZeroAddress */.uO)(value) || !value) {
            return {
                emoji: '🐼',
                backgroundColor: (0,colorManipulator/* alpha */.Fq)('#627EEA', 0.2)
            };
        }
        const hash = (0,generateContactAvatarColor/* calculateHash */.G)(value);
        return {
            emoji: EMOJI_LIST[hash % EMOJI_LIST.length],
            backgroundColor: (0,generateContactAvatarColor/* generateContactAvatarColor */.e)(value, theme.palette.mode)
        };
    }, [
        value,
        theme.palette.mode
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        style: {
            backgroundColor
        },
        ...props,
        children: emoji
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var src_types = __webpack_require__(91451);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Account.ts
var Account = __webpack_require__(60541);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/pvtutils.ts
var pvtutils = __webpack_require__(26424);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/DataSource/useNextIDVerify.ts





async function createAndSignMessage(persona, username) {
    const platform = ui.activatedSiteAdaptorUI.configuration.nextIDConfig?.platform;
    if (!platform) return null;
    const payload = await entry/* NextIDProof */.q7.createPersonaPayload(persona.identifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, username, platform);
    if (!payload) throw new Error('Failed to create persona payload.');
    const signature = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, payload.signPayload, persona.identifier, location.origin, true);
    if (!signature) throw new Error('Failed to sign by persona.');
    return {
        payload,
        signature
    };
}
function useNextIDVerify() {
    const postMessage = ui.activatedSiteAdaptorUI.automation?.nativeCompositionDialog?.attachText;
    const platform = ui.activatedSiteAdaptorUI.configuration.nextIDConfig?.platform;
    return (0,useAsyncFn/* default */.Z)(async (persona, username, verifiedCallback)=>{
        if (!platform || !persona || !username) return;
        const message = await createAndSignMessage(persona, username);
        if (!message) return;
        const { signature, payload } = message;
        const postContent = payload.postContent.replace('%SIG_BASE64%', (0,pvtutils/* toBase64 */.s3)((0,pvtutils/* fromHex */.H_)(signature)));
        const postId = await ui.activatedSiteAdaptorUI.automation.endpoint?.publishPost?.([
            postContent
        ], {
            reason: 'verify'
        });
        if (!postId) throw new Error('Failed to verify.');
        if (persona.identifier.publicKeyAsHex) {
            await entry/* NextIDProof */.q7.bindProof(payload.uuid, persona.identifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, platform, username, payload.createdAt, {
                signature,
                proofLocation: postId
            });
        }
        const isBound = await entry/* NextIDProof */.q7.queryIsBound(persona.identifier.publicKeyAsHex, platform, username);
        if (!isBound) throw new Error('Failed to verify.');
        Messages/* MaskMessages */.q.events.ownProofChanged.sendToAll();
        await verifiedCallback?.();
    }, [
        postMessage,
        platform
    ]);
}

// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/BindingDialog.tsx





const BindingDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            height: 400,
            position: 'fixed',
            top: 24,
            right: 24,
            borderRadius: 12,
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.maskColor.bottomBg,
            color: theme.palette.maskColor.main,
            overflow: 'auto',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        title: {
            flexShrink: 0,
            background: theme.palette.maskColor.modalTitleBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2),
            borderBottom: `1px solid ${theme.palette.maskColor.line}`
        },
        closeButton: {
            padding: 0
        }
    };
});
const BindingDialog = /*#__PURE__*/ (0,react.memo)(function BindingDialog({ className, onClose, children, ...rest }) {
    const { classes, cx } = BindingDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        role: "dialog",
        ...rest,
        className: cx(classes.container, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Mask, {
                        width: 100,
                        height: 28.8
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        size: "large",
                        disableTouchRipple: true,
                        classes: {
                            root: classes.closeButton
                        },
                        onClick: onClose,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                            size: 30
                        })
                    })
                ]
            }),
            children
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/AccountConnectStatus.tsx












const AccountConnectStatus_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(3),
            height: '100%',
            boxSizing: 'border-box'
        },
        icon: {
            marginTop: theme.spacing(3)
        },
        title: {
            fontSize: 18,
            margin: theme.spacing(1.5),
            fontWeight: 700
        },
        loadingBox: {
            width: 320,
            height: 130,
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontSize: 16,
            textAlign: 'center'
        }
    };
});
function Frame({ children, ...rest }) {
    const { classes } = AccountConnectStatus_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const site = ui.activatedSiteAdaptorUI.networkIdentifier;
    const Icon = constants/* SOCIAL_MEDIA_ROUND_ICON_MAPPING */.hA[site] || icon_generated_as_jsx.Globe;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BindingDialog, {
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.main,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                    size: 48,
                    className: classes.icon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.connect_persona()
                }),
                children
            ]
        })
    });
}
/** Loading current userId */ const AccountConnectStatus = /*#__PURE__*/ (0,react.memo)(function AccountConnectStatus({ expectAccount, currentUserId, loading, ...rest }) {
    const { classes } = AccountConnectStatus_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const site = ui.activatedSiteAdaptorUI.networkIdentifier;
    const siteName = src_constants/* SOCIAL_MEDIA_NAME */.OZ[site] || '';
    const { connected } = SetupGuideContext.useContainer();
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Frame, {
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.loadingBox,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
                omitText: true
            })
        })
    });
    if (connected) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Frame, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "connected_already",
                    values: {
                        account: currentUserId
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {})
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                mt: "1.5em",
                children: t.switch_for_more_connections()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                mt: "auto",
                width: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    onClick: rest.onClose,
                    children: t.done()
                })
            })
        ]
    });
    if (currentUserId) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Frame, {
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                children: t.not_current_account()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                mt: "1.5em",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "request_to_switch_account",
                    values: {
                        account: expectAccount
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {})
                    }
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Frame, {
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.text,
            children: t.request_to_login({
                siteName
            })
        })
    });
});

// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
;// CONCATENATED MODULE: ./packages/mask/shared/definitions/event.ts


const EventMap = {
    [types/* EnhanceableSite */.J.Twitter]: src_types/* EventID */.HS.EntryPopupSocialAccountConnectTwitter,
    [types/* EnhanceableSite */.J.Facebook]: src_types/* EventID */.HS.EntryPopupSocialAccountConnectFb,
    [types/* EnhanceableSite */.J.Minds]: src_types/* EventID */.HS.EntryPopupSocialAccountConnectMinds,
    [types/* EnhanceableSite */.J.Instagram]: src_types/* EventID */.HS.EntryPopupSocialAccountConnectIns,
    [types/* EnhanceableSite */.J.Localhost]: src_types/* EventID */.HS.Debug,
    [types/* EnhanceableSite */.J.App]: src_types/* EventID */.HS.Debug,
    [types/* EnhanceableSite */.J.OpenSea]: src_types/* EventID */.HS.Debug,
    [types/* EnhanceableSite */.J.Mirror]: src_types/* EventID */.HS.Debug
};
const DisconnectEventMap = {
    [types/* EnhanceableSite */.J.Twitter]: src_types/* EventID */.HS.EntryPopupSocialAccountDisconnectTwitter,
    [types/* EnhanceableSite */.J.Facebook]: src_types/* EventID */.HS.EntryPopupSocialAccountDisconnectFb,
    [types/* EnhanceableSite */.J.Minds]: src_types/* EventID */.HS.EntryPopupSocialAccountDisconnectMinds,
    [types/* EnhanceableSite */.J.Instagram]: src_types/* EventID */.HS.EntryPopupSocialAccountDisconnectIns
};

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/hooks/useConnectPersona.ts









function useConnectPersona() {
    const { userId, myIdentity, personaInfo, setIsFirstConnection, connected } = SetupGuideContext.useContainer();
    const site = ui.activatedSiteAdaptorUI.networkIdentifier;
    const persona = personaInfo?.identifier;
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!persona || !userId || connected) return;
        const id = profile/* ProfileIdentifier */.W.of(site, userId);
        if (!id.isSome()) return;
        // attach persona with site profile
        await service/* default */.ZP.Identity.attachProfile(id.value, persona, {
            connectionConfirmState: 'confirmed'
        });
        setIsFirstConnection(true);
        if (myIdentity.avatar) {
            await service/* default */.ZP.Identity.updateProfileInfo(id.value, {
                avatarURL: myIdentity.avatar
            });
        }
        // auto-finish the setup process
        if (!personaInfo) throw new Error('invalid persona');
        await service/* default */.ZP.Identity.setupPersona(personaInfo?.identifier);
        queryClient/* queryClient */.E.invalidateQueries([
            'query-persona-info',
            persona.publicKeyAsHex
        ]);
        Messages/* MaskMessages */.q.events.ownPersonaChanged.sendToAll();
        providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, EventMap[ui.activatedSiteAdaptorUI.networkIdentifier]);
    }, [
        site,
        persona,
        userId,
        myIdentity.avatar,
        connected
    ]);
}

// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/hooks/useNotifyConnected.ts




function useNotifyConnected() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const { configuration } = ui.activatedSiteAdaptorUI;
    const platform = configuration.nextIDConfig?.platform;
    const notify = (0,react.useCallback)(()=>{
        if (!platform) return;
        showSnackbar(t.setup_guide_connected_title(), {
            variant: 'success',
            message: t.setup_guide_connected_description()
        });
    }, [
        t,
        showSnackbar
    ]);
    return notify;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/hooks/usePostContent.ts





function usePostContent(personaIdentifier, userId) {
    const platform = ui.activatedSiteAdaptorUI.configuration.nextIDConfig?.platform;
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'create-persona-payload',
            personaIdentifier?.publicKeyAsHex,
            userId,
            platform
        ],
        queryFn: async ()=>{
            if (!personaIdentifier?.publicKeyAsHex || !platform) return null;
            const payload = await entry/* NextIDProof */.q7.createPersonaPayload(personaIdentifier.publicKeyAsHex, NextID_types/* NextIDAction */.B.Create, userId, platform);
            if (!payload) throw new Error('Failed to create persona payload.');
            const signature = await service/* default */.ZP.Identity.signWithPersona(Account/* SignType */.A.Message, payload.signPayload, personaIdentifier, location.origin, true);
            return payload.postContent.replace('%SIG_BASE64%', (0,pvtutils/* toBase64 */.s3)((0,pvtutils/* fromHex */.H_)(signature)));
        }
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/VerifyNextID.tsx

























const VerifyNextID_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        body: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'auto'
        },
        main: {
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        avatar: {
            display: 'block',
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: `solid 1px ${vars/* MaskColorVar */.Z.border}`,
            '&.connected': {
                borderColor: vars/* MaskColorVar */.Z.success
            }
        },
        button: {
            minWidth: 150,
            height: 40,
            minHeight: 40,
            marginLeft: 0,
            marginTop: 0,
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
            fontSize: 14,
            wordBreak: 'keep-all',
            '&,&:hover': {
                color: `${vars/* MaskColorVar */.Z.twitterButtonText} !important`,
                background: `${vars/* MaskColorVar */.Z.twitterButton} !important`
            }
        },
        tip: {
            fontSize: 12,
            fontWeight: 500,
            lineHeight: '16px',
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(2)
        },
        connection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(1.5),
            gap: theme.spacing(1.5),
            color: theme.palette.maskColor.main
        },
        connectItem: {
            flex: 1,
            width: 148,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(0.5)
        },
        input: {
            width: 136
        },
        postContentTitle: {
            fontSize: 12,
            color: theme.palette.maskColor.main,
            fontWeight: 700
        },
        postContent: {
            color: theme.palette.maskColor.main,
            fontSize: 12,
            backgroundColor: theme.palette.maskColor.bg,
            borderRadius: 12,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1.5),
            whiteSpace: 'pre-line',
            wordBreak: 'break-all'
        },
        text: {
            fontSize: 12,
            fontWeight: 400,
            color: theme.palette.maskColor.second
        },
        info: {
            overflow: 'auto'
        },
        name: {
            display: 'block',
            fontSize: 14,
            fontWeight: 500,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        second: {
            color: theme.palette.maskColor.second,
            fontSize: 12,
            display: 'block',
            alignItems: 'center',
            marginTop: theme.spacing(0.5),
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        linkIcon: {
            fontSize: 0,
            color: theme.palette.maskColor.second,
            marginLeft: 2
        },
        send: {
            marginRight: theme.spacing(1)
        },
        footer: {
            borderRadius: 12,
            backdropFilter: 'blur(8px)',
            boxShadow: theme.palette.maskColor.bottomBg,
            padding: theme.spacing(2),
            marginTop: 'auto'
        }
    }));
function VerifyNextID({ onClose }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = VerifyNextID_useStyles();
    const { userId, myIdentity, personaInfo, checkingVerified, verified, loadingCurrentUserId, currentUserId } = SetupGuideContext.useContainer();
    const { nickname: username, avatar } = myIdentity;
    const personaName = personaInfo?.nickname;
    const personaIdentifier = personaInfo?.identifier;
    const [customUserId, setCustomUserId] = (0,react.useState)('');
    const { data: post, isLoading: creatingPostContent } = usePostContent(personaIdentifier, userId || customUserId);
    const { configuration, networkIdentifier } = ui.activatedSiteAdaptorUI;
    const nextIdPlatform = configuration.nextIDConfig?.platform;
    const { data: personaAvatar } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'my-own-persona-info'
        ],
        queryFn: ()=>service/* default */.ZP.Identity.queryOwnedPersonaInformation(false),
        select (data) {
            const pubkey = personaInfo?.identifier.publicKeyAsHex;
            const info = data.find((x)=>x.identifier.publicKeyAsHex === pubkey);
            return info?.avatar;
        }
    });
    const disableVerify = (0,react.useMemo)(()=>{
        return !myIdentity?.identifier || !userId ? false : myIdentity.identifier.userId !== userId;
    }, [
        myIdentity,
        userId
    ]);
    // Show connect result for the first time.
    const { loading: connecting } = useConnectPersona();
    const [, handleVerifyNextID] = useNextIDVerify();
    const [{ loading: verifying }, onVerify] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!userId) return;
        if (!personaInfo) return;
        if (!nextIdPlatform) return;
        const isBound = await entry/* NextIDProof */.q7.queryIsBound(personaInfo.identifier.publicKeyAsHex, nextIdPlatform, userId);
        if (!isBound) {
            await handleVerifyNextID(personaInfo, userId);
            providers/* Telemetry */.M.captureEvent(src_types/* EventType */.tw.Access, src_types/* EventID */.HS.EntryPopupSocialAccountVerifyTwitter);
        }
        await queryClient/* queryClient */.E.invalidateQueries([
            'next-id',
            'bindings-by-persona'
        ]);
        await (0,esm/* delay */.gw)(1000);
    }, [
        userId,
        personaInfo
    ]);
    const notify = useNotifyConnected();
    const onConfirm = (0,react.useCallback)(()=>{
        settings/* currentSetupGuideStatus */.AI[networkIdentifier].value = '';
        notify();
    }, [
        nextIdPlatform,
        notify
    ]);
    // Need to verify for next id platform
    if (currentUserId !== userId || loadingCurrentUserId || connecting) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountConnectStatus, {
            expectAccount: userId,
            currentUserId: currentUserId,
            loading: loadingCurrentUserId || connecting,
            onClose: onClose
        });
    }
    if (!personaIdentifier) return null;
    const disabled = !(userId || customUserId) || !personaName || disableVerify || checkingVerified;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BindingDialog, {
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.body,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    p: 2,
                    overflow: "auto",
                    className: classes.main,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.connection,
                            children: [
                                userId ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.connectItem,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            width: 36,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: avatar,
                                                className: cx(classes.avatar, 'connected')
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.info,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.name,
                                                    children: username
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    className: classes.second,
                                                    children: [
                                                        "@",
                                                        userId
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.connectItem,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Email, {
                                            size: 24
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            ml: 0.5,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                                placeholder: "handle",
                                                className: classes.input,
                                                value: customUserId,
                                                onChange: (e)=>{
                                                    setCustomUserId(e.target.value.trim());
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Connect, {
                                    size: 24
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.connectItem,
                                    children: [
                                        personaAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: personaAvatar,
                                            className: cx(classes.avatar, 'connected')
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EmojiAvatar, {
                                            value: personaIdentifier.publicKeyAsHex
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.info,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.name,
                                                    children: personaName
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    className: classes.second,
                                                    component: "div",
                                                    children: [
                                                        (0,personas/* formatPersonaFingerprint */.Nb)(personaIdentifier.rawPublicKey, 4),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                            className: classes.linkIcon,
                                                            href: `https://web3.bio/${personaIdentifier.publicKeyAsHex}`,
                                                            target: "_blank",
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
                        }),
                        !nextIdPlatform || verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.text,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                i18nKey: nextIdPlatform ? 'send_post_successfully' : 'connect_successfully',
                                components: {
                                    br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                }
                            })
                        }) : creatingPostContent ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.postContentTitle,
                                    children: t.setup_guide_post_content()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.postContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                            variant: "text",
                                            width: "50%"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                            variant: "text",
                                            width: "50%"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.tip,
                                    component: "div",
                                    children: t.setup_guide_verify_tip()
                                })
                            ]
                        }) : post ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.postContentTitle,
                                    children: t.setup_guide_post_content()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.postContent,
                                    children: post
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.tip,
                                    component: "div",
                                    children: t.setup_guide_verify_tip()
                                })
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.footer,
                    children: !nextIdPlatform || nextIdPlatform && verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: classes.button,
                        fullWidth: true,
                        variant: "contained",
                        disabled: disabled,
                        onClick: onConfirm,
                        children: t.ok()
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* ActionButton */.K, {
                        className: classes.button,
                        fullWidth: true,
                        variant: "contained",
                        disabled: disabled,
                        loading: verifying,
                        onClick: onVerify,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Send, {
                                size: 18,
                                className: classes.send
                            }),
                            t.send()
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/CheckConnection.tsx



function CheckConnection({ onClose }) {
    const { userId, loadingCurrentUserId, currentUserId } = SetupGuideContext.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountConnectStatus, {
        expectAccount: userId,
        currentUserId: currentUserId,
        loading: loadingCurrentUserId,
        onClose: onClose
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/SetupGuide/index.tsx











// #region setup guide ui
function SetupGuideUI() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { step } = SetupGuideContext.useContainer();
    const { networkIdentifier } = ui.activatedSiteAdaptorUI;
    const onClose = (0,react.useCallback)(()=>{
        settings/* currentSetupGuideStatus */.AI[networkIdentifier].value = '';
        settings/* userPinExtension */.FX.value = true;
    }, []);
    const onCreate = (0,react.useCallback)(()=>{
        let content = t.setup_guide_say_hello_content();
        if (networkIdentifier === types/* EnhanceableSite */.J.Twitter) {
            content += t.setup_guide_say_hello_follow({
                account: '@realMaskNetwork'
            });
        }
        ui.activatedSiteAdaptorUI.automation.maskCompositionDialog?.open?.((0,core_text/* makeTypedMessageText */.P)(content), {
            target: Events/* EncryptionTargetType */.J.Public
        });
    }, [
        t
    ]);
    const onPinClose = (0,react.useCallback)(()=>{
        settings/* userPinExtension */.FX.value = true;
        onClose();
    }, []);
    const onPinDone = (0,react.useCallback)(()=>{
        const network = networkIdentifier;
        if (!settings/* userPinExtension */.FX.value) {
            settings/* userPinExtension */.FX.value = true;
        }
        if (network === types/* EnhanceableSite */.J.Twitter && !settings/* userGuideFinished */.CH[network].value) {
            settings/* userGuideStatus */.Ct[network].value = '1';
        } else {
            onCreate();
        }
    }, [
        onCreate
    ]);
    switch(step){
        case SetupGuide/* SetupGuideStep */.s.CheckConnection:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckConnection, {
                onClose: onClose
            });
        case SetupGuide/* SetupGuideStep */.s.VerifyOnNextID:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyNextID, {
                onClose: onClose
            });
        case SetupGuide/* SetupGuideStep */.s.PinExtension:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(PinExtension, {
                onDone: onPinDone,
                onClose: onPinClose
            });
        default:
            return null;
    }
}
// #endregion
// #region setup guide
const useSetupGuideStyles = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        position: 'fixed',
        zIndex: 9999,
        maxWidth: 550,
        top: '2em',
        right: '2em'
    }
});
const SetupGuide_SetupGuide = /*#__PURE__*/ (0,react.memo)(function SetupGuide({ persona }) {
    const { classes } = useSetupGuideStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuideContext.Provider, {
            initialState: persona,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuideUI, {})
        })
    });
}) // #endregion
;

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/StartSetupGuide.tsx



function createTaskStartSetupGuideDefault() {
    return (signal, persona)=>{
        (0,renderInShadowRoot/* attachReactTreeWithoutContainer */.Ei)('setup-guide', /*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuide_SetupGuide, {
            persona: persona
        }), signal);
    };
}


/***/ }),

/***/ 97250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ collectNodeText)
/* harmony export */ });
/* harmony import */ var _collectTwitterEmoji_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69770);

function collectNodeText(node, options = {}) {
    if (!node) return '';
    if (!node.querySelector('a, img')) return node.innerText;
    return [
        ...node.childNodes
    ].map((each)=>{
        if (each.nodeType === document.TEXT_NODE) return each.nodeValue || '';
        if (each instanceof HTMLAnchorElement) {
            const result = options.onHTMLAnchorElement?.(each);
            if (result?.isSome()) return result.value;
            const href = each.getAttribute('href');
            return [
                href,
                each.innerText
            ].join(' ');
        }
        if (each instanceof HTMLImageElement) {
            const src = each.getAttribute('src');
            const alt = each.getAttribute('alt') ?? '';
            const matched = src?.match(/emoji\/v2\/svg\/([\w-]+)\.svg/)?.[1];
            if (matched) return (0,_collectTwitterEmoji_js__WEBPACK_IMPORTED_MODULE_0__/* .collectTwitterEmoji */ ._)(matched.split('-').map((x)=>Number.parseInt(x, 16))) || alt;
            return alt;
        }
        if (each instanceof HTMLElement) return collectNodeText(each, options);
        return '';
    }).join('');
}


/***/ }),

/***/ 69770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ collectTwitterEmoji)
/* harmony export */ });
function collectTwitterEmoji(points) {
    if (points.length === 0) return '';
    if (points[0] < 35 || points[0] > 57) return String.fromCodePoint(...points);
    if (points.includes(65039)) return String.fromCodePoint(...points);
    return String.fromCodePoint(points[0], 65039, ...points.slice(1));
}


/***/ }),

/***/ 95555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W2: () => (/* binding */ Container),
/* harmony export */   fR: () => (/* binding */ useTagEnhancer),
/* harmony export */   rU: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90138);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94685);




const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Container(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        color: "textPrimary",
        fontSize: "inherit",
        children: props.children
    });
});
const Link = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Anchor(props) {
    const text = props.children.startsWith('https://mask.io') ? 'Mask.io' : props.children;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: props.href,
        fontSize: "inherit",
        children: [
            text,
            props.suggestedPostImage
        ]
    });
});
function useTagEnhancer(kind, content) {
    const plugin = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__/* .useActivatedPluginsSiteAdaptor */ .JR)('any').filter((x)=>x.enhanceTag).at(0);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        plugin?.enhanceTag?.onClick?.(kind, content, event);
    }, [
        plugin
    ]);
    const onMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const cancel = plugin?.enhanceTag?.onHover?.(kind, content, event);
        event.currentTarget.addEventListener('mouseleave', ()=>cancel?.(), {
            once: true
        });
    }, [
        plugin
    ]);
    return {
        onClick,
        onMouseEnter,
        hasMatch: !!plugin
    };
}


/***/ }),

/***/ 78432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ TypedMessageRenderContext)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/context.ts
var context = __webpack_require__(94553);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/TextResizerContext.tsx
var TextResizerContext = __webpack_require__(67755);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/RenderFragments.tsx
var RenderFragments = __webpack_require__(55526);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/TransformContext.ts
var TransformContext = __webpack_require__(30641);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/RegistryContext.tsx
var RegistryContext = __webpack_require__(73077);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/index.ts
var extension = __webpack_require__(93949);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/parseLink.ts
var parseLink = __webpack_require__(96336);
;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/utils/renderText.tsx




/** @internal */ /** @internal */ const RenderTextFragment = /*#__PURE__*/ (0,react.memo)(function RenderText(props) {
    const { Text = RenderFragments/* DefaultRenderFragments */.o.Text } = (0,react.useContext)(RenderFragments/* RenderFragmentsContext */.l);
    return /*#__PURE__*/ (0,react.createElement)(react.Fragment, {}, ...parseText(props.text, props.style, Text));
});
/** @internal */ const RenderLinkFragment = /*#__PURE__*/ (0,react.memo)(function RenderLink(props) {
    const { children, href, category, suggestedPostImage, style } = props;
    const context = (0,react.useContext)(RenderFragments/* RenderFragmentsContext */.l);
    const { Text = RenderFragments/* DefaultRenderFragments */.o.Text, Link = RenderFragments/* DefaultRenderFragments */.o.Link, AtLink = Text, CashLink = Text, HashLink = Text } = context;
    const sharedProps = {
        style,
        children,
        suggestedPostImage
    };
    if (category === 'cash') return /*#__PURE__*/ (0,jsx_runtime.jsx)(CashLink, {
        ...sharedProps
    });
    if (category === 'hash') return /*#__PURE__*/ (0,jsx_runtime.jsx)(HashLink, {
        ...sharedProps
    });
    if (category === 'user') return /*#__PURE__*/ (0,jsx_runtime.jsx)(AtLink, {
        ...sharedProps
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link, {
        ...sharedProps,
        href: href
    });
});
function parseText(string, style, Text) {
    const links = (0,parseLink/* parseLink */.V)(string).flatMap((frag, index)=>{
        if (frag.type === 'text') {
            return sliceString(frag.content).map((text, i)=>text === '\n' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                    style: style
                }, `${index} of ${i}`) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Text, {
                    children: text,
                    style: style
                }, `${index} of ${i}`));
        }
        if (frag.category === 'normal' && !frag.content.match(/^https?:\/\//gi)) frag.content = 'http://' + frag.content;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
            style: style,
            category: frag.category,
            href: frag.content,
            children: frag.content,
            suggestedPostImage: undefined
        });
    });
    return links;
}
function sliceString(x) {
    const result = [];
    let index = x.indexOf('\n');
    if (index === -1) return [
        x
    ];
    let pos = 0;
    while(index !== -1){
        result.push(x.slice(pos, index), '\n');
        pos = index + 1;
        index = x.indexOf('\n', pos);
    }
    result.push(x.slice(pos));
    return result.filter(Boolean);
}

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/MetadataRender.tsx



function useMetadataRender(message) {
    const { Metadata } = (0,react.useContext)(RenderFragments/* RenderFragmentsContext */.l);
    if (!Metadata || !message.meta) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Metadata, {
        metadata: message.meta,
        message: message
    });
}

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/Core/Text.tsx





const TypedMessageTextRender = /*#__PURE__*/ (0,react.memo)(function TypedMessageTextRender(props) {
    const { content } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderTextFragment, {
                style: Object(props.meta?.get(extension/* unstable_STYLE_META */.RZ)),
                text: content
            }),
            useMetadataRender(props)
        ]
    });
});

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/Core/Image.tsx





const TypedMessageImageRender = /*#__PURE__*/ (0,react.memo)(function TypedMessageImageRender(props) {
    const { Image = RenderFragments/* DefaultRenderFragments */.o.Image } = (0,react.useContext)(RenderFragments/* RenderFragmentsContext */.l);
    const { image, width, height } = props;
    const [blobSrc, setBlobSrc] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (typeof image === 'string') return;
        const src = URL.createObjectURL(image);
        setBlobSrc(src);
        return ()=>{
            setBlobSrc(null);
            URL.revokeObjectURL(src);
        };
    }, [
        image
    ]);
    const meta = useMetadataRender(props);
    const finalSrc = blobSrc || image;
    if (typeof finalSrc !== 'string') return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image, {
                style: Object(props.meta?.get(extension/* unstable_STYLE_META */.RZ)),
                src: finalSrc,
                width: width,
                height: height
            }),
            meta
        ]
    });
});

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/utils/circularDetect.ts
/** @internal */ function hasCircular(message) {
    try {
        JSON.stringify(message);
        return false;
    } catch (err) {
        console.warn('[@masknet/typed-message] TypedMessage', message, 'may contains circular structure. Skip rendering.');
        return true;
    }
}

// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/Entry.tsx + 1 modules
var Entry = __webpack_require__(18458);
;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/Core/Tuple.tsx






const TypedMessageTupleRender = /*#__PURE__*/ (0,react.memo)(function TypedMessageTupleRender(props) {
    const meta = useMetadataRender(props);
    if ((0,react.useMemo)(()=>hasCircular(props.items), [
        props.items
    ])) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        style: Object(props.meta?.get(extension/* unstable_STYLE_META */.RZ)),
        children: [
            props.items.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRenderInline */.k, {
                    ...props,
                    message: message
                }, index)),
            meta
        ]
    });
});

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/Core/Promise.tsx





const TypedMessagePromiseRender = /*#__PURE__*/ (0,react.memo)( true ? function TypedMessagePromiseRender(props) {
    const { promise, alt } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: alt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRenderInline */.k, {
            message: alt
        }) : null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Await_new, {
            promise: promise
        })
    });
} : function TypedMessagePromiseRender(props) {
    const { promise, alt } = props;
    const _ = (0,react.useState)(0)[1];
    const rerender = ()=>_(Math.random());
    (0,react.useEffect)(()=>{
        promise.then(rerender);
    }, [
        promise,
        _
    ]);
    const transformedValue = (0,TransformContext/* useTransformedValue */.CB)('value' in promise ? promise.value : undefined);
    if (transformedValue) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRenderInline */.k, {
        message: transformedValue
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: alt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRenderInline */.k, {
            message: alt
        }) : null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Await_old, {
            promise: promise
        })
    });
});
function Await_new({ promise }) {
    const resolved = Reflect.get(react_namespaceObject, 'use')(promise);
    const transformedValue = (0,TransformContext/* useTransformedValue */.CB)(resolved);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRenderInline */.k, {
        message: transformedValue
    });
}
function Await_old({ promise }) {
    throw promise;
}

// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/Core/Unknown.tsx
var Unknown = __webpack_require__(13486);
;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/Extension/Anchor.tsx



const TypedMessageAnchorRender = /*#__PURE__*/ (0,react.memo)(function TypedMessageAnchorRender(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
        category: props.category,
        children: props.content,
        href: props.href,
        suggestedPostImage: typeof props.postImage?.image === 'string' ? // TODO: support Blob image
        // Note: no need to add alt here because itself is a decorate image.
        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: props.postImage.image,
            // we use relative sizing here. ignore the original size
            style: {
                height: '1.25em',
                marginLeft: '0.25em'
            },
            alt: ""
        }) : null
    });
});

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/registry.tsx






function createTypedMessageRenderRegistry() {
    const registry = new Map();
    const event = new EventTarget();
    let getterFunction;
    function registerTypedMessageRender(type, config) {
        if (!registry.has(type)) registry.set(type, new Map());
        const map = registry.get(type);
        const id = config.id;
        map.set(id, config);
        getterFunction = undefined;
        event.dispatchEvent(new Event('update'));
        return ()=>{
            map.delete(id);
            getterFunction = undefined;
            event.dispatchEvent(new Event('update'));
        };
    }
    function getTypedMessageRender(type) {
        return Array.from(registry.get(type)?.values() || []).sort((a, b)=>b.priority - a.priority)[0];
    }
    const subscription = {
        // generate a new function to make sure old !== new
        getCurrentValue: ()=>getterFunction ??= (type)=>getTypedMessageRender(type),
        subscribe: (f)=>{
            event.addEventListener('update', f);
            return ()=>event.removeEventListener('update', f);
        }
    };
    registerTypedMessageRender('text', {
        component: TypedMessageTextRender,
        id: Symbol('std.text'),
        priority: 0
    });
    registerTypedMessageRender('image', {
        component: TypedMessageImageRender,
        id: Symbol('std.image'),
        priority: 0
    });
    registerTypedMessageRender('unknown', {
        component: Unknown/* TypedMessageUnknownRender */.A,
        id: Symbol('std.unknown'),
        priority: 0
    });
    registerTypedMessageRender('tuple', {
        component: TypedMessageTupleRender,
        id: Symbol('std.tuple'),
        priority: 0
    });
    registerTypedMessageRender('promise', {
        component: TypedMessagePromiseRender,
        id: Symbol('std.promise'),
        priority: 0
    });
    // Extension
    registerTypedMessageRender('x-anchor', {
        component: TypedMessageAnchorRender,
        id: Symbol('std.anchor'),
        priority: 0
    });
    return {
        registerTypedMessageRender,
        getTypedMessageRender,
        subscription
    };
}

;// CONCATENATED MODULE: ./packages/mask/shared-ui/TypedMessageRender/registry.ts

const TypedMessageRenderRegistry = createTypedMessageRenderRegistry();

// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/Components/Text.tsx
var Text = __webpack_require__(95555);
// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(51848);
;// CONCATENATED MODULE: ./packages/mask/shared-ui/TypedMessageRender/context.tsx








function TypedMessageRenderContext(props) {
    const registry = (0,use_subscription.useSubscription)(TypedMessageRenderRegistry.subscription);
    const transformerFunction = (0,use_subscription.useSubscription)(transformer/* TypedMessageTransformers */.rx.subscription);
    const Provider = (0,react.useMemo)(()=>{
        return {
            Container: Text/* Container */.W2,
            Link: Text/* Link */.rU,
            Metadata: props.metadataRender,
            ...props.renderFragments
        };
    }, [
        props.metadataRender,
        props.renderFragments
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextResizerContext/* TextResizeContext */.F.Provider, {
        value: props.textResizer ?? true,
        children: /* basic render fragments provider: Text, Link, Image and Metadata */ /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderFragments/* RenderFragmentsContext */.l.Provider, {
            value: Provider,
            children: /* transformer pipeline */ /*#__PURE__*/ (0,jsx_runtime.jsx)(TransformContext/* TransformerProvider */.lG.Provider, {
                value: transformerFunction,
                children: /* transformation context */ /*#__PURE__*/ (0,jsx_runtime.jsx)(TransformContext/* TransformationContextProvider */.T6.Provider, {
                    value: props.context || context/* emptyTransformationContext */.v,
                    children: /* components provider */ /*#__PURE__*/ (0,jsx_runtime.jsx)(RegistryContext/* RegistryContext */.g.Provider, {
                        value: registry,
                        children: props.children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 51848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hk: () => (/* binding */ enableFbStyleTextPayloadReplace),
/* harmony export */   rx: () => (/* binding */ TypedMessageTransformers)
/* harmony export */ });
/* unused harmony export TypedMessagePluginTransformers */
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66243);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76714);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89434);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43458);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86025);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17425);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93949);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30919);

var Order;
(function(Order) {
    Order[Order["Flatten"] = 1000] = "Flatten";
    Order[Order["ParseLink"] = 900] = "ParseLink";
    Order[Order[// MaskPayload = 800,
    /** @deprecated */ "PayloadReplacer"] = 700] = "PayloadReplacer";
    Order[Order["Plugins"] = 500] = "Plugins";
})(Order || (Order = {}));
/**
 * Message transformation order:
 *
 * parsed_message
 * |> flatten
 * |> parse links and tags (@user, #tag, $NAME)
 * |> Mask Payload parser (installed in Site Adaptor starts)
 * |> plugins
 */ const TypedMessageTransformers = (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .composeTransformers */ .g)();
const TypedMessagePluginTransformers = (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .composeTransformers */ .g)();
TypedMessageTransformers.addTransformer(_masknet_typed_message__WEBPACK_IMPORTED_MODULE_1__/* .FlattenTypedMessage */ .p, Order.Flatten);
TypedMessageTransformers.addTransformer(_masknet_typed_message__WEBPACK_IMPORTED_MODULE_2__/* .ParseLinkTransformer */ .a, Order.ParseLink);
TypedMessageTransformers.addTransformer(TypedMessagePluginTransformers.subscription, Order.Plugins);
// We will use MaskPayload transformer to replace it in the future PR.
const matcher = /^https?:\/\/mask(\.io|book\.com)/i;
const textPayloadChar = /([\w+/=|:])/iu;
const emoji = '\u{1F3BC}';
TypedMessageTransformers.addTransformer(function visitor(message, context) {
    if ((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageAnchor */ .b)(message)) {
        if (message.href && (matcher.test(message.href) || matcher.test(message.content))) {
            return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageAnchor */ .J)('normal', 'https://mask.io', 'Mask');
        }
    }
    if (fbStyleTextPayloadReplace && (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_4__/* .isTypedMessageText */ .Rz)(message) && message.content.includes(emoji)) {
        const result = [];
        const startFrom = message.content.indexOf(emoji);
        if (startFrom !== 0) result.push((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_4__/* .makeTypedMessageText */ .P)(message.content.slice(0, startFrom)));
        const pendingChar = [];
        let index = startFrom;
        while(index < message.content.length){
            const char = message.content[index];
            if (char === '\uD83C') {
                if (pendingChar.length) {
                    result.push((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_4__/* .makeTypedMessageText */ .P)(pendingChar.join('')));
                    pendingChar.length = 0;
                }
                index += 2;
                // unicode pair
                // here we at the start of the payload char,
                // then we should drop rest chars until it no longer matches the RegExp or we met ":||".
                while(message.content[index].match(textPayloadChar)){
                    index += 1;
                    if (message.content[index] === ':' && message.content[index + 1] === '|' && message.content[index + 2] === '|') {
                        index += 3;
                        break;
                    }
                }
                // here we at the end of the payload char
                result.push((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_5__/* .makeTypedMessageTuple */ .Zw)([
                    (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_4__/* .makeTypedMessageText */ .P)(' ( \u{1F510} '),
                    (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageAnchor */ .J)('normal', 'https://mask.io', 'Mask.io'),
                    (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_4__/* .makeTypedMessageText */ .P)(') ')
                ], new Map([
                    [
                        _masknet_typed_message__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ,
                        {
                            opacity: 0.5
                        }
                    ]
                ])));
            } else {
                pendingChar.push(char);
                index += 1;
            }
        }
        return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_5__/* .makeTypedMessageTuple */ .Zw)(result, message.meta);
    }
    return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_7__/* .visitEachTypedMessageChild */ .I)(message, visitor, context);
}, Order.PayloadReplacer);
let fbStyleTextPayloadReplace = false;
function enableFbStyleTextPayloadReplace() {
    fbStyleTextPayloadReplace = true;
}


/***/ }),

/***/ 17702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56851);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55106);



function Avatar({ person, ...props }) {
    const { avatar, nickname, identifier } = person;
    const name = identifier.userId || nickname || '';
    const [first, last] = name.split(' ');
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .generateContactAvatarColor */ .e)(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    });
}


/***/ }),

/***/ 18937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useCurrentPersona)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17735);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84271);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);




/**
 * Get current setting persona
 */ function useCurrentPersona() {
    const currentIdentifier = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier */ .cn);
    const { value } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        const identifier = await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Settings.getCurrentPersonaIdentifier();
        if (!identifier) return;
        return _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Identity.queryPersona(identifier);
    }, [
        currentIdentifier
    ]);
    return value;
}


/***/ }),

/***/ 4172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ usePersonasFromDB)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28129);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65734);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);



const personas = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createSubscriptionFromAsyncSuspense */ .WS)(()=>_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.Identity.queryOwnedPersonaInformation(true), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages */ .q.events.ownPersonaChanged.on);
/**
 * Get all owned personas from DB
 */ function usePersonasFromDB() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(personas);
}


/***/ }),

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ attachNextIDToProfile)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50508);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4643);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);



async function attachNextIDToProfile(nextID) {
    const whoAmI = await _services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Settings.getCurrentPersonaIdentifier();
    if (!nextID?.fromNextID || !nextID.linkedPersona || !whoAmI) return;
    const [rpc, emit] = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .batch */ .dC)((0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .notify */ .h4)(_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Identity));
    await Promise.allSettled(nextID.linkedTwitterNames?.map((x)=>{
        return rpc.attachNextIDPersonaToProfile({
            ...nextID,
            nickname: x,
            identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier */ .W.of('twitter.com', x).expect(`${x} should be a valid user id`)
        }, whoAmI);
    }) ?? []);
    emit();
}


/***/ }),

/***/ 1375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* binding */ getProfileCardTabContent),
/* harmony export */   Dy: () => (/* binding */ getProfileTabContent),
/* harmony export */   mb: () => (/* binding */ getSearchResultContentForProfileTab),
/* harmony export */   rH: () => (/* binding */ getSearchResultContent),
/* harmony export */   xF: () => (/* binding */ getSearchResultTabContent)
/* harmony export */ });
/* unused harmony export getSettingsTabContent */
/* harmony import */ var _dom_createInjectHooksRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30504);
/* harmony import */ var _manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94685);


function getProfileTabContent(tabId) {
    return (0,_dom_createInjectHooksRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .createInjectHooksRenderer */ .E)(_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useNotMinimalMode, (x)=>{
        const tab = x.ProfileTabs?.find((x)=>x.ID === tabId);
        return tab?.UI?.TabContent;
    });
}
function getProfileCardTabContent(tabId) {
    return (0,_dom_createInjectHooksRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .createInjectHooksRenderer */ .E)(_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useNotMinimalMode, (x)=>{
        const tab = x.ProfileCardTabs?.find((x)=>x.ID === tabId);
        return tab?.UI?.TabContent;
    });
}
function getSettingsTabContent(tabId) {
    return createInjectHooksRenderer(useActivatedPluginsSiteAdaptor.visibility.useNotMinimalMode, (x)=>{
        const tab = x.SettingTabs?.find((x)=>x.ID === tabId);
        return tab?.UI?.TabContent;
    });
}
function getSearchResultContent(result) {
    return (0,_dom_createInjectHooksRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .createInjectHooksRenderer */ .E)(_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useNotMinimalMode, (x)=>{
        const shouldDisplay = x.SearchResultInspector?.Utils?.shouldDisplay?.(result) ?? true;
        return shouldDisplay ? x.SearchResultInspector?.UI?.Content : undefined;
    });
}
function getSearchResultContentForProfileTab(result) {
    return (0,_dom_createInjectHooksRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .createInjectHooksRenderer */ .E)(_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useAnyMode, (x)=>{
        const shouldDisplay = x.SearchResultInspector?.Utils?.shouldDisplay?.(result) ?? true;
        return shouldDisplay ? x.SearchResultInspector?.UI?.Content : undefined;
    });
}
function getSearchResultTabContent(tabId) {
    return (0,_dom_createInjectHooksRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .createInjectHooksRenderer */ .E)(_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useNotMinimalMode, (x)=>{
        const tab = x.SearchResultTabs?.find((x)=>x.ID === tabId);
        return tab?.UI?.TabContent;
    });
}


/***/ }),

/***/ 24272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ EncryptionTargetType),
/* harmony export */   u: () => (/* binding */ ProfileTabs)
/* harmony export */ });
var // TODO: Maybe in-page UI related messages should use Context instead of messages?
// TODO: move to plugin message
/** value is "bulkKey" */ /** emit when the settings changed. */ /** emit when the settings finished syncing with storage. */ EncryptionTargetType;
(function(EncryptionTargetType) {
    EncryptionTargetType["Public"] = 'public';
    EncryptionTargetType["Self"] = 'self';
    EncryptionTargetType["E2E"] = 'e2e';
})(EncryptionTargetType || (EncryptionTargetType = {}));
var ProfileTabs/** This is a subset of browser.permissions.Permission */ ;
(function(ProfileTabs) {
    ProfileTabs["WEB3"] = 'web3';
    ProfileTabs["DAO"] = 'dao';
})(ProfileTabs || (ProfileTabs = {}));


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

/***/ 4145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ConnectPersonaBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45262);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37377);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54928);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            flex: 1,
            position: 'relative'
        },
        mask: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            cursor: 'pointer'
        },
        button: {
            borderRadius: '99px',
            backgroundColor: theme.palette.maskColor.dark,
            color: theme.palette.maskColor.white,
            marginTop: 'auto',
            ':hover': {
                color: theme.palette.maskColor.white,
                backgroundColor: theme.palette.maskColor.dark
            }
        }
    }));
const ConnectPersonaBoundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children, directTo, handlerPosition = 'center', customHint = false, createConfirm = true, enableVerify = true, personas, beforeAction, afterAction, currentPersonaIdentifier, identity, openDashboard })=>{
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { classes } = useStyles();
    const { value: status, loading: statusLoading } = (0,_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentPersonaConnectStatus */ .H)(personas, currentPersonaIdentifier, openDashboard, identity);
    const isFnChildren = typeof children === 'function';
    const actionComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (children && customHint && !isFnChildren) return children;
        if (isFnChildren) return children(status);
        if (!status.action) return null;
        if (!status.hasPersona) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            disabled: statusLoading,
            className: classes.button,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Identity, {
                    size: 18,
                    sx: {
                        marginRight: '8px'
                    }
                }),
                t.persona_boundary_create_persona()
            ]
        });
        if (!status.connected) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            disabled: statusLoading,
            className: classes.button,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Connect, {
                    size: 18,
                    sx: {
                        marginRight: '8px',
                        color: '#fff'
                    }
                }),
                t.persona_boundary_connect_persona()
            ]
        });
        if (!status.verified) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            disabled: statusLoading,
            className: classes.button,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Connect, {
                    size: 18,
                    sx: {
                        marginRight: '8px',
                        color: '#fff'
                    }
                }),
                t.persona_boundary_verify_persona()
            ]
        });
        return null;
    }, [
        t,
        status,
        statusLoading,
        customHint,
        isFnChildren,
        children
    ]);
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        beforeAction?.(status);
        if (!status.hasPersona || !status.connected) {
            status.action?.(directTo ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .DashboardRoutes */ .vq.SignUpPersona, handlerPosition, enableVerify, !createConfirm);
            return;
        }
        if (!status.verified) status.action?.(directTo, handlerPosition, enableVerify, !createConfirm);
        afterAction?.(status);
    }, [
        directTo,
        handlerPosition,
        status,
        createConfirm
    ]);
    if (statusLoading) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        className: classes.root,
        display: "inline-flex",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                style: {
                    pointerEvents: status.action ? 'none' : 'auto'
                },
                display: "inline-flex",
                children: actionComponent
            }),
            status.action || statusLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.mask,
                display: "inline-flex"
            }) : null
        ]
    });
});


/***/ }),

/***/ 3294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ GrantPermissions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90097);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        description: {
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.main
        },
        action: {
            marginTop: theme.spacing(10)
        }
    }));
const GrantPermissions = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ permissions, onGrant, ...props })=>{
    const { classes } = useStyles(undefined, {
        props
    });
    const t = (0,_locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.description,
                children: [
                    t.authorization_descriptions(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        component: "div",
                        children: permissions.join(',')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .ActionButton */ .K, {
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__.Approve, {
                    size: 18,
                    sx: {
                        lineHeight: 1
                    }
                }),
                variant: "roundedDark",
                onClick: onGrant,
                className: classes.action,
                children: t.approve()
            })
        ]
    });
});


/***/ }),

/***/ 8347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ usePersonasFromNextID)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);




/**
 * Get all personas bound with the given identity from NextID service
 */ function usePersonasFromNextID(userId, platform, exact) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'personas',
            userId
        ],
        enabled: Boolean(platform && userId),
        queryFn: async ()=>{
            if (!platform || !userId) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
            const res = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryAllExistedBindingsByPlatform(platform, userId, exact);
            return res ? res : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.ownProofChanged.on(()=>result.refetch), [
        result.refetch
    ]);
    return result;
}


/***/ }),

/***/ 85662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ resolveNextIDPlatform)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95766);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65327);


const resolveNextIDPlatform = (value)=>{
    const address = value;
    if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .isValidAddress */ .At)(address)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.Ethereum;
    const pubKey = value;
    if (pubKey.length >= 44) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.NextID;
    const domain = value;
    if (domain.endsWith('.eth') || domain.endsWith('.lens')) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.Ethereum;
    const userId = value;
    if (/^@?\w{1,15}$/.test(userId)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.Twitter;
    return;
};


/***/ }),

/***/ 83418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ resolveValueToSearch)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19477);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95766);

const resolveValueToSearch = (value, type)=>{
    if (value.length === 44) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .o('secp256k1', value).publicKeyAsHex ?? value;
    if (type === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NextIDPlatform */ .V.Twitter) return value.replace(/^@/, '').toLowerCase();
    return value.toLowerCase();
};


/***/ }),

/***/ 93949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RZ: () => (/* binding */ unstable_STYLE_META),
/* harmony export */   SY: () => (/* binding */ isWellKnownExtensionTypedMessages)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);
/* harmony import */ var _anchor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43458);
/* harmony import */ var _MaskPayload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76350);





/** This key can be used in meta. It represents CSS when rendering this message. */ const unstable_STYLE_META = 'unstable_STYLE';
const isWellKnownExtensionTypedMessages = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .composeSome */ .Vm)(_anchor_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageAnchor */ .b, _MaskPayload_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$);


/***/ }),

/***/ 76714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ FlattenTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61111);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40048);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86025);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30919);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41840);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94553);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93949);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85094);






function FlattenTypedMessage(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .K)(message) && 'value' in message.promise) return FlattenTypedMessage(message.promise.value, context);
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(message)) {
        const next = message.items.map((x)=>FlattenTypedMessage(x, context)).flatMap((x)=>(0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(x) ? x.meta ? x : x.items : x).filter((x)=>!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageEmpty */ .Y)(x)).reduce((result, current)=>{
            const lastItem = result.at(-1);
            if (!lastItem) return result.concat(current);
            if (!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageText */ .Rz)(current) || !(0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageText */ .Rz)(lastItem)) return result.concat(current);
            if (!isTextWithMetaCanBeMerged(lastItem.meta, current.meta)) return result.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            result.pop();
            result.push((0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageText */ .P)(`${lastItem.content} ${current.content}`, lastItem.meta));
            return result;
        }, []);
        if (!message.meta) {
            if (next.length === 0) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageEmpty */ .W)();
            if (next.length === 1) return next[0];
        }
        if (next.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isSerializableTypedMessage */ .fV)) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageTupleSerializable */ .kT)(next, message.meta);
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageTuple */ .Zw)(next, message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_5__/* .visitEachTypedMessageChild */ .I)(message, FlattenTypedMessage, context);
}
function isTextWithMetaCanBeMerged(a, b) {
    if (a === b) return true;
    if (a?.size !== 1) return false;
    if (a?.size !== b?.size) return false;
    if (!a?.has(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ) || !b.has(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ)) return false;
    const a_style = a.get(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ);
    const b_style = b.get(_extension_index_js__WEBPACK_IMPORTED_MODULE_6__/* .unstable_STYLE_META */ .RZ);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(a_style, b_style);
}
FlattenTypedMessage.NoContext = (message)=>FlattenTypedMessage(message, _context_js__WEBPACK_IMPORTED_MODULE_8__/* .emptyTransformationContext */ .v);


/***/ }),

/***/ 89434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ParseLinkTransformer)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86025);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17425);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43458);
/* harmony import */ var _utils_parseLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96336);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30919);




function ParseLinkTransformer(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(message)) {
        const parsed = (0,_utils_parseLink_js__WEBPACK_IMPORTED_MODULE_1__/* .parseLink */ .V)(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageTupleSerializable */ .kT)(parsed.map((i)=>{
            if (i.type === 'text') return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(i.content);
            return (0,_extension_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageAnchor */ .J)(i.category, i.content, i.content);
        }), message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_4__/* .visitEachTypedMessageChild */ .I)(message, ParseLinkTransformer, context);
}


/***/ }),

/***/ 66243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ composeTransformers)
/* harmony export */ });
function composeTransformers() {
    const event = new EventTarget();
    const onUpdate = ()=>{
        composedTransformer = undefined;
        event.dispatchEvent(new Event('update'));
    };
    const transformers = new Set();
    let composedTransformer;
    function composed(message, context) {
        return [
            ...transformers
        ].sort((a, b)=>b[1] - a[1]).reduce((p, [c])=>c(p, context), message);
    }
    const subscription = {
        getCurrentValue: ()=>composedTransformer ??= (message, context)=>{
                return composed(message, context);
            },
        subscribe (f) {
            event.addEventListener('update', f);
            return ()=>{
                event.removeEventListener('update', f);
            };
        }
    };
    return {
        subscription,
        addTransformer (t, priority, signal) {
            const f_priority = [
                typeof t === 'function' ? t : (message, context)=>t.getCurrentValue()(message, context),
                priority
            ];
            transformers.add(f_priority);
            onUpdate();
            const cancelSubscription = typeof t === 'function' ? ()=>{} : t.subscribe(onUpdate);
            const remove = ()=>{
                transformers.delete(f_priority);
                cancelSubscription();
                onUpdate();
            };
            signal?.addEventListener('abort', remove);
            return remove;
        }
    };
}


/***/ }),

/***/ 94553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createTransformationContext),
/* harmony export */   v: () => (/* binding */ emptyTransformationContext)
/* harmony export */ });
function createTransformationContext() {
    return Object.freeze({});
}
const emptyTransformationContext = createTransformationContext();


/***/ }),

/***/ 96336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ parseLink)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseLink(text) {
    // ESM-CJS interop
    const parsed = (anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z).list(text);
    const result = [];
    let start = 0;
    for (const x of parsed){
        if (x.isURL) {
            result.push({
                type: 'text',
                content: text.slice(start, x.start)
            });
            result.push({
                type: 'link',
                content: x.string,
                category: 'normal'
            });
        } else {
            result.push({
                type: 'text',
                content: text.slice(start, x.end)
            });
        }
        start = x.end;
    }
    result.push({
        type: 'text',
        content: text.slice(start, text.length)
    });
    return result.filter((x)=>x.content).flatMap((x)=>x.type === 'text' ? parseTag(x.content) : x);
}
const TagLike = /([#$@][\w-]+)/g;
const map = {
    '@': 'user',
    '#': 'hash',
    $: 'cash'
};
function parseTag(x) {
    return x.split(TagLike).map((x)=>TagLike.test(x) ? {
            type: 'link',
            content: x,
            category: map[x[0]] || 'normal'
        } : {
            type: 'text',
            content: x
        });
}


/***/ }),

/***/ 30919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ visitEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61111);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41840);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76350);



function visitEachTypedMessageChild(node, visitor, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        const after = node.items.flatMap((x)=>{
            const next = visitor(x, context);
            if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(next)) return next.items;
            return next;
        });
        if (after.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)) {
            return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(after, node.meta);
        }
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(after, node.meta);
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessagePromise */ .K)(node)) {
        // we ignore alt if promise is resolved.
        if ('value' in node.promise) return visitor(node.promise.value, context);
        else if (node.alt) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessagePromise */ .N)(node.promise, visitor(node.alt, context));
        return node;
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isTypedMessageMaskPayload */ .$)(node)) {
        const next = visitor(node.message, context);
        return (0,_extension_index_js__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageMaskPayload */ .J)(next, node.meta);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        const alt = visitor(node.alt, context);
        if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)(alt)) {
            console.warn('[@masknet/typed-message] You must return a serializable message in this position. Original:', node, 'Transformed child "alt":', alt);
            // ignore the transform result
            return node;
        }
        return {
            ...node,
            alt
        };
    } else {
        // return node with no child
        return node;
    }
}


/***/ }),

/***/ 13486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TypedMessageUnknownRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

/** @internal */ const TypedMessageUnknownRender = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function TypedMessageUnknownRender(props) {
    const warned = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    if (!warned.current) {
        warned.current = true;
        console.warn('[@masknet/typed-message] Trying to render an unknown TypedMessage (or a known TypedMessage with no renderer) with props', props);
    }
    return null;
});


/***/ }),

/***/ 18458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ TypedMessageRender),
  k: () => (/* binding */ TypedMessageRenderInline)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/Core/Unknown.tsx
var Unknown = __webpack_require__(13486);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/RegistryContext.tsx
var RegistryContext = __webpack_require__(73077);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/RenderFragments.tsx
var RenderFragments = __webpack_require__(55526);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/TextResizerContext.tsx
var TextResizerContext = __webpack_require__(67755);
;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/utils/DebugElementProvider.tsx

const DebugElementProvider = /*#__PURE__*/ (0,react.createContext)((()=>{
    try {
        return "production" === 'development';
    } catch  {}
    return false;
})());
DebugElementProvider.displayName = 'DebugElementProvider';

;// CONCATENATED MODULE: ./packages/typed-message/react/src/Renderer/Entry.tsx







function TypedMessageRender(props) {
    const { Container = 'p' } = (0,react.useContext)(RenderFragments/* RenderFragmentsContext */.l);
    const isEmpty = props.message.type === 'empty';
    const textResize = (0,TextResizerContext/* useTextResize */.g)(!isEmpty);
    if (isEmpty) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ref: textResize,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                ...props
            })
        })
    });
}
function TypedMessageRenderInline(props) {
    const { message } = props;
    const Registry = (0,react.useContext)(RegistryContext/* RegistryContext */.g);
    const isDebug = (0,react.useContext)(DebugElementProvider);
    if (message.type === 'empty') return null;
    const Render = Registry(message.type)?.component || Unknown/* TypedMessageUnknownRender */.A;
    if (isDebug) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            "data-kind": message.type,
            ref: (ref)=>ref && Object.assign(ref, {
                    message
                }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
                ...message
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
        ...message
    });
}


/***/ }),

/***/ 73077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ RegistryContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const RegistryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{
    console.error('[@masknet/typed-message] Please create a TypedMessageRenderRegistry and provide it via RegistryContext');
    return undefined;
});
RegistryContext.displayName = 'RegistryContext';


/***/ }),

/***/ 55526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ RenderFragmentsContext),
/* harmony export */   o: () => (/* binding */ DefaultRenderFragments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const DefaultRenderFragments = {
    Text: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TextFragment(props) {
        if (props.style) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            style: props.style,
            children: props.children
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        });
    }),
    Link: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function LinkFragment(props) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: props.href,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
                fontSize: 'inherit',
                ...props.style
            },
            children: [
                props.children,
                props.suggestedPostImage
            ]
        });
    }),
    Image: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ImageFragment(props) {
        return props.width === 0 ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: props.src,
            width: props.width,
            height: props.height,
            style: props.style
        });
    }),
    Metadata: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function MetadataFragment() {
        return null;
    })
};
/** #topic */ /** @user */ /** $CASH */ const RenderFragmentsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(DefaultRenderFragments);
RenderFragmentsContext.displayName = 'RenderFragmentsContext';


/***/ }),

/***/ 67755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TextResizeContext),
/* harmony export */   g: () => (/* binding */ useTextResize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const TextResizeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
TextResizeContext.displayName = 'TextResizeContext';
function defaultAlgr(length) {
    let scale = 1;
    if (length < 45) scale = 1.5;
    else if (length < 80) scale = 1.2;
    return scale;
}
/** @internal */ function useTextResize(shouldEnable) {
    const provider = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TextResizeContext);
    const [element, setElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        if (!shouldEnable || !element || !provider) return;
        const updateFontSize = ()=>{
            const algr = typeof provider === 'function' ? provider : defaultAlgr;
            const scale = algr(element.textContent?.length ?? 0);
            element.style.fontSize = `${scale}rem`;
        };
        updateFontSize();
        const watcher = new MutationObserver(updateFontSize);
        watcher.observe(element, {
            subtree: true,
            childList: true,
            characterData: true
        });
        return ()=>watcher.disconnect();
    }, [
        shouldEnable,
        provider,
        element
    ]);
    return setElement;
}


/***/ }),

/***/ 30641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CB: () => (/* binding */ useTransformedValue),
/* harmony export */   T6: () => (/* binding */ TransformationContextProvider),
/* harmony export */   lG: () => (/* binding */ TransformerProvider)
/* harmony export */ });
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94553);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


const TransformerProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((x)=>x);
TransformerProvider.displayName = 'TransformerProvider';
const TransformationContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_masknet_typed_message__WEBPACK_IMPORTED_MODULE_1__/* .emptyTransformationContext */ .v);
TransformationContextProvider.displayName = 'TransformationContextProvider';
function useTransformedValue(message) {
    const transformer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransformerProvider);
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransformationContextProvider);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return message ? transformer(message, context) : undefined;
    }, [
        message,
        transformer,
        context
    ]);
}


/***/ }),

/***/ 38050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 72323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c2f272344e8d26b14517.png";

/***/ })

}]);
//# sourceMappingURL=chunk.5799.js.map