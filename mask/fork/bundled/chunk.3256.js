"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3256],{

/***/ 86584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ProfileTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78678);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7387);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24272);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5081);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72552);






// Required! This component don't have it own style.
function ProfileTab(props) {
    const { reset, clear, children, classes, title, type = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileTabs */ .u.WEB3 } = props;
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isMobile = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useMatchXS */ .I)();
    const switchToTab = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.profileTabUpdated.sendToLocal({
            show: true,
            type
        });
        setActive(true);
        clear();
    }, [
        clear,
        type
    ]);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Change the url hashtag to trigger `locationchange` event from e.g. 'hostname/medias#web3 => hostname/medias'
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .Sniffings */ .Y.is_twitter_page && location.assign('#' + type);
        switchToTab();
    }, [
        switchToTab,
        type
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(()=>{
        if (location.hash !== '#' + type || active || location.pathname === '/search') return;
        switchToTab();
    });
    (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_7__/* .useLocationChange */ .S)(()=>{
        const testId = document.activeElement?.dataset?.testid;
        if (testId === 'SearchBox_Search_Input') return;
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.profileTabUpdated.sendToLocal({
            show: false
        });
        setActive(false);
        reset();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.profileTabActive.on((data)=>{
            setActive(data.active);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: classes.button + ' ' + (active ? classes.selected : ''),
            onClick: onClick,
            component: "div",
            children: [
                props.icon,
                isMobile && props.icon ? null : title,
                active && children ? children : null
            ]
        })
    }, "nfts");
}


/***/ }),

/***/ 87412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ ProfileTabContent)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/getTabContent.tsx
var getTabContent = __webpack_require__(1375);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/getAvailablePlugins.ts
var getAvailablePlugins = __webpack_require__(79412);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentPersonaConnectStatus.ts
var useCurrentPersonaConnectStatus = __webpack_require__(54928);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useSocialAccountsBySettings.ts
var useSocialAccountsBySettings = __webpack_require__(70790);
// EXTERNAL MODULE: ./packages/shared/src/utils/addressSorter.ts
var addressSorter = __webpack_require__(55432);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCollectionByTwitterHandler.ts
var useCollectionByTwitterHandler = __webpack_require__(96312);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PluginCardFrame/index.tsx
var PluginCardFrame = __webpack_require__(21766);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/GrantPermission/index.tsx
var GrantPermission = __webpack_require__(3294);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/ProfileTabContent/ProfileTab/WalletSettingEntry.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            display: 'inline-flex',
            gap: theme.spacing(1),
            minWidth: 254,
            borderRadius: '20px',
            width: 'fit-content !important'
        }
    }));
function openWeb3ProfileSettingDialog() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.web3ProfileDialogEvent.sendToLocal({
        open: true
    });
}
const WalletSettingEntry = /*#__PURE__*/ (0,react.memo)(function WalletSettingEntry() {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, theme } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flex: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 400,
                    fontSize: 14,
                    color: theme.palette.maskColor.second,
                    children: t.show_wallet_setting_intro()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                    className: classes.button,
                    onClick: openWeb3ProfileSettingDialog,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Settings, {
                            size: 18
                        }),
                        t.show_wallet_setting_button()
                    ]
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AddressItem/index.tsx
var AddressItem = __webpack_require__(72665);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenWithSocialGroupMenu/index.tsx + 1 modules
var TokenWithSocialGroupMenu = __webpack_require__(52266);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SocialAccountList/index.tsx + 3 modules
var SocialAccountList = __webpack_require__(65447);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ConnectPersonaBoundary/index.tsx
var ConnectPersonaBoundary = __webpack_require__(4145);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/Events.ts
var Events = __webpack_require__(24272);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(72552);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/ScopedDomains/index.tsx
var ScopedDomains = __webpack_require__(38050);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useSnapshotSpacesByTwitterHandler.ts
var useSnapshotSpacesByTwitterHandler = __webpack_require__(18703);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/usePluginHostPermission.ts
var usePluginHostPermission = __webpack_require__(71132);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/SearchResultInspector.tsx + 2 modules
var SearchResultInspector = __webpack_require__(65235);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/usePersonasFromDB.ts
var usePersonasFromDB = __webpack_require__(4172);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTabContent.tsx

























const ProfileTabContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: Sniffings/* Sniffings */.Y.is_facebook_page ? 876 : 'auto',
            color: theme.palette.maskColor.main
        },
        container: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(69, 163, 251, 0.2) 100%), #FFFFFF;',
            padding: '16px 16px 0 16px'
        },
        title: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
        },
        walletItem: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 18,
            fontWeight: 700
        },
        settingLink: {
            cursor: 'pointer',
            marginTop: 4,
            zIndex: 0,
            '&:hover': {
                textDecoration: 'none'
            }
        },
        content: {
            position: 'relative'
        },
        walletButton: {
            padding: 0,
            fontSize: '18px',
            minWidth: 0,
            background: 'transparent',
            '&:hover': {
                background: 'none'
            }
        },
        settingItem: {
            display: 'flex',
            alignItems: 'center'
        },
        tabs: {
            display: 'flex',
            position: 'relative'
        },
        gearIcon: {
            color: theme.palette.maskColor.dark
        },
        linkOutIcon: {
            color: theme.palette.maskColor.secondaryDark
        },
        mainLinkIcon: {
            margin: '0px 2px',
            color: theme.palette.maskColor.secondaryDark
        },
        reload: {
            borderRadius: 20,
            minWidth: 254
        }
    }));
function ProfileTabContent(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ScopedDomains/* ScopedDomainsContainer */.h.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
            ...props
        })
    });
}
function ProfileTabContent_openWeb3ProfileSettingDialog() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.web3ProfileDialogEvent.sendToLocal({
        open: true
    });
}
function Content(props) {
    const { classes } = ProfileTabContent_useStyles(undefined, {
        props
    });
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const translate = (0,useTrans/* usePluginTransField */.T)();
    const [hidden, setHidden] = (0,react.useState)(true);
    const [profileTabType, setProfileTabType] = (0,react.useState)(Events/* ProfileTabs */.u.WEB3);
    const [menuOpen, setMenuOpen] = (0,react.useState)(false);
    const closeMenu = (0,react.useCallback)(()=>setMenuOpen(false), []);
    const allPersonas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    const { value: personaStatus, loading: loadingPersonaStatus, error: loadPersonaStatusError, retry: retryLoadPersonaStatus } = (0,useCurrentPersonaConnectStatus/* useCurrentPersonaConnectStatus */.H)(allPersonas, currentIdentifier, service/* default */.ZP.Helper.openDashboard, lastRecognized);
    const currentVisitingSocialIdentity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const { data: currentSocialIdentity } = (0,useActivatedUI/* useSocialIdentity */.mJ)(currentVisitingSocialIdentity);
    const currentVisitingUserId = currentVisitingSocialIdentity?.identifier?.userId;
    const isOwnerIdentity = currentVisitingSocialIdentity?.isOwner;
    const { data: socialAccounts = constants/* EMPTY_LIST */.rP, isLoading: loadingSocialAccounts, error: loadSocialAccounts, refetch: retrySocialAccounts } = (0,useSocialAccountsBySettings/* useSocialAccountsBySettings */.j)(currentSocialIdentity, undefined, addressSorter/* addressSorter */.X, (a, b, c, d)=>service/* default */.ZP.Identity.signWithPersona(a, b, c, location.origin, d));
    const [selectedAddress = (0,head/* default */.Z)(socialAccounts)?.address, setSelectedAddress] = (0,react.useState)();
    const selectedSocialAccount = socialAccounts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, selectedAddress));
    const { setPair } = ScopedDomains/* ScopedDomainsContainer */.h.useContainer();
    (0,react.useEffect)(()=>{
        if (selectedSocialAccount?.address && selectedSocialAccount?.label) {
            setPair(selectedSocialAccount.address, selectedSocialAccount.label);
        }
    }, [
        selectedSocialAccount?.address,
        selectedSocialAccount?.label
    ]);
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.ownProofChanged.on(()=>{
            retrySocialAccounts();
        });
    }, [
        retrySocialAccounts
    ]);
    const activatedPlugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    const displayPlugins = (0,getAvailablePlugins/* getAvailablePlugins */.q)(activatedPlugins, (plugins)=>{
        return plugins.flatMap((x)=>x.ProfileTabs?.map((y)=>({
                    ...y,
                    pluginID: x.ID
                })) ?? constants/* EMPTY_LIST */.rP).filter((x)=>{
            const shouldDisplay = x.Utils?.shouldDisplay?.(currentVisitingSocialIdentity, selectedSocialAccount) ?? true;
            return x.pluginID !== PluginID/* PluginID */.P.NextID && shouldDisplay;
        }).sort((a, z)=>a.priority - z.priority);
    });
    const tabs = displayPlugins.map((x)=>({
            id: x.ID,
            label: typeof x.label === 'string' ? x.label : translate(x.pluginID, x.label)
        }));
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)((0,head/* default */.Z)(tabs)?.id ?? PluginID/* PluginID */.P.Collectible, ...tabs.map((tab)=>tab.id));
    const isWeb3ProfileDisabled = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Web3Profile);
    const isOnTwitter = Sniffings/* Sniffings */.Y.is_twitter_page;
    const doesOwnerHaveNoAddress = isOwnerIdentity && personaStatus.proof?.findIndex((p)=>p.platform === NextID_types/* NextIDPlatform */.V.Ethereum) === -1;
    // the owner persona and site not verify on next ID
    const myPersonaNotVerifiedYet = isOwnerIdentity && !personaStatus.verified;
    const showNextID = isOnTwitter && // enabled the plugin
    (isWeb3ProfileDisabled || myPersonaNotVerifiedYet || // the owner persona and site verified on next ID but not verify the wallet
    doesOwnerHaveNoAddress || // the visiting persona not have social address list
    !isOwnerIdentity && !socialAccounts.length);
    const componentTabId = showNextID ? `${PluginID/* PluginID */.P.NextID}_tabContent` : currentTab;
    const contentComponent = (0,react.useMemo)(()=>{
        const Component = (0,getTabContent/* getProfileTabContent */.Dy)(componentTabId);
        if (!Component) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: currentSocialIdentity,
            socialAccount: selectedSocialAccount
        });
    }, [
        componentTabId,
        selectedSocialAccount,
        currentSocialIdentity
    ]);
    const lackHostPermission = (0,usePluginHostPermission/* usePluginHostPermissionCheck */.gr)(activatedPlugins.filter((x)=>x.ProfileCardTabs?.length));
    const lackPluginId = (0,head/* default */.Z)(lackHostPermission ? [
        ...lackHostPermission
    ] : []);
    const lackPluginDefine = activatedPlugins.find((x)=>x.ID === lackPluginId);
    const [, onGrant] = (0,usePluginHostPermission/* useGrantPermissions */.Ie)(lackPluginDefine?.enableRequirement.host_permissions);
    (0,useLocationChange/* useLocationChange */.S)(()=>{
        onChange(undefined, (0,head/* default */.Z)(tabs)?.id);
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        onChange(undefined, (0,head/* default */.Z)(tabs)?.id);
        setSelectedAddress(undefined);
    }, [
        currentVisitingUserId
    ]);
    (0,react.useEffect)(()=>{
        if (profileTabType !== Events/* ProfileTabs */.u.WEB3) return;
        if (currentTab === `${PluginID/* PluginID */.P.RSS3}_Social`) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileUserSocialSwitchTo);
        if (currentTab === `${PluginID/* PluginID */.P.RSS3}_Activities`) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileUserActivitiesSwitchTo);
        if (currentTab === `${PluginID/* PluginID */.P.RSS3}_Donation`) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileUserDonationsSwitchTo);
    }, [
        profileTabType,
        currentTab
    ]);
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.profileTabHidden.on((data)=>{
            if (data.hidden) setHidden(data.hidden);
        });
    }, [
        currentVisitingUserId
    ]);
    const [isHideInspector, hideInspector] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.hideSearchResultInspectorEvent.on((ev)=>{
            hideInspector(ev.hide);
        });
    }, []);
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.profileTabUpdated.on((data)=>{
            setHidden(!data.show);
            data.type && setProfileTabType(data.type);
        });
    }, [
        currentVisitingUserId
    ]);
    (0,react.useEffect)(()=>{
        const listener = ()=>setMenuOpen(false);
        window.addEventListener('scroll', listener, false);
        // <ClickAwayListener /> not work, when it is out of shadow root.
        window.addEventListener('click', listener, false);
        return ()=>{
            window.removeEventListener('scroll', listener, false);
            window.removeEventListener('click', listener, false);
        };
    }, []);
    const buttonRef = (0,react.useRef)(null);
    const onSelect = (address)=>{
        setSelectedAddress(address);
        setMenuOpen(false);
    };
    const { value: collectionList = constants/* EMPTY_LIST */.rP } = (0,useCollectionByTwitterHandler/* useCollectionByTwitterHandler */.m)(profileTabType === Events/* ProfileTabs */.u.WEB3 ? currentVisitingUserId : '');
    const { value: spaceList = constants/* EMPTY_LIST */.rP } = (0,useSnapshotSpacesByTwitterHandler/* useSnapshotSpacesByTwitterHandler */.n)(profileTabType === Events/* ProfileTabs */.u.DAO ? currentVisitingUserId ?? '' : '');
    const [currentTrendingIndex, setCurrentTrendingIndex] = (0,react.useState)(0);
    const trendingResult = collectionList?.[currentTrendingIndex];
    const { data: identity } = (0,useActivatedUI/* useSocialIdentityByUserId */.FK)(currentVisitingUserId);
    const { data: nextIdBindings = constants/* EMPTY_LIST */.rP } = (0,useQuery/* useQuery */.a)([
        'profiles',
        'by-twitter-id',
        currentVisitingUserId
    ], ()=>{
        if (!currentVisitingUserId) return constants/* EMPTY_LIST */.rP;
        return entry/* NextIDProof */.q7.queryProfilesByTwitterId(currentVisitingUserId);
    });
    if (hidden) return null;
    const keyword = profileTabType === Events/* ProfileTabs */.u.WEB3 ? trendingResult?.address || trendingResult?.name : currentVisitingUserId;
    const searchResults = profileTabType === Events/* ProfileTabs */.u.WEB3 ? collectionList : spaceList;
    if (keyword && !isHideInspector) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultInspector/* SearchResultInspector */.i, {
            keyword: keyword,
            isProfilePage: true,
            profileTabType: profileTabType,
            currentSearchResult: trendingResult,
            searchResults: searchResults,
            identity: identity
        })
    });
    if (lackHostPermission?.size) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GrantPermission/* GrantPermissions */.X, {
                        permissions: lackPluginDefine?.enableRequirement.host_permissions ?? constants/* EMPTY_LIST */.rP,
                        onGrant: onGrant
                    })
                })
            })
        });
    }
    if (!currentVisitingUserId || loadingSocialAccounts && !socialAccounts.length || loadingPersonaStatus) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme/* MaskLightTheme */.C,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {})
        })
    });
    if ((isOwnerIdentity && loadPersonaStatusError || loadSocialAccounts) && socialAccounts.length === 0) {
        const handleClick = ()=>{
            if (loadPersonaStatusError) retryLoadPersonaStatus();
            if (loadSocialAccounts) retrySocialAccounts();
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        display: "inline-flex",
                        gap: 3,
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                fontWeight: 400,
                                lineHeight: "18px",
                                color: (t)=>t.palette.maskColor.danger,
                                children: t.load_failed()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "primary",
                                className: classes.reload,
                                onClick: handleClick,
                                children: t.reload()
                            })
                        ]
                    })
                })
            })
        });
    }
    // Maybe should merge in NextIdPage
    if (socialAccounts.length === 0 && !showNextID && !isOnTwitter) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        display: "inline-flex",
                        gap: 3,
                        justifyContent: "center",
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 14,
                            fontWeight: 400,
                            lineHeight: "18px",
                            color: (t)=>t.palette.maskColor.publicMain,
                            children: t.web3_profile_no_social_address_list()
                        })
                    })
                })
            })
        });
    }
    if (!socialAccounts.length && !showNextID) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme/* MaskLightTheme */.C,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardFrame/* PluginCardFrameMini */.N, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        display: "inline-flex",
                        gap: 3,
                        justifyContent: "center",
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettingEntry, {})
                    })
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            tabs.length > 0 && !showNextID ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.walletItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        variant: "text",
                                        size: "small",
                                        ref: buttonRef,
                                        className: classes.walletButton,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressItem/* AddressItem */.U, {
                                            isMenu: true,
                                            onClick: (event)=>{
                                                event.preventDefault();
                                                event.stopPropagation();
                                                setMenuOpen(true);
                                            },
                                            linkIconClassName: classes.mainLinkIcon,
                                            TypographyProps: {
                                                fontSize: '18px',
                                                fontWeight: 700,
                                                color: (theme)=>theme.palette.maskColor.dark
                                            },
                                            socialAccount: selectedSocialAccount
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenWithSocialGroupMenu/* TokenWithSocialGroupMenu */.S, {
                                        open: menuOpen,
                                        onClose: closeMenu,
                                        anchorEl: buttonRef.current,
                                        onAddressChange: onSelect,
                                        currentAddress: selectedAddress,
                                        collectionList: collectionList,
                                        socialAccounts: socialAccounts,
                                        currentCollection: trendingResult,
                                        onTokenChange: (_, i)=>{
                                            setCurrentTrendingIndex(i);
                                            hideInspector(false);
                                            setMenuOpen(false);
                                        },
                                        fromSocialCard: true
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccountList/* SocialAccountList */.O, {
                                        nextIdBindings: nextIdBindings,
                                        userId: currentVisitingUserId
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.settingItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        marginRight: "5px",
                                        color: (theme)=>theme.palette.maskColor.secondaryDark,
                                        children: t.powered_by()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        marginRight: "4px",
                                        color: (theme)=>theme.palette.maskColor.dark,
                                        children: t.mask_network()
                                    }),
                                    isOwnerIdentity && isOnTwitter ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectPersonaBoundary/* ConnectPersonaBoundary */.C, {
                                        personas: allPersonas,
                                        identity: lastRecognized,
                                        currentPersonaIdentifier: currentIdentifier,
                                        openDashboard: service/* default */.ZP.Helper.openDashboard,
                                        customHint: true,
                                        handlerPosition: "top-right",
                                        directTo: PluginID/* PluginID */.P.Web3Profile,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gear, {
                                            variant: "light",
                                            onClick: ProfileTabContent_openWeb3ProfileSettingDialog,
                                            className: classes.gearIcon,
                                            sx: {
                                                cursor: 'pointer'
                                            }
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.settingLink,
                                        href: "https://mask.io",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            className: classes.linkOutIcon,
                                            size: 20
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.tabs,
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
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: contentComponent
            })
        ]
    });
}


/***/ }),

/***/ 13590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ NFTAvatarButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68684);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 9999,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            color: theme.palette.text.primary,
            cursor: 'pointer',
            backgroundColor: theme.palette.maskColor.main
        },
        setIcon: {
            width: 14,
            height: 14,
            marginLeft: 2
        },
        icon: {
            color: theme.palette.text.buttonText
        },
        text: {
            color: theme.palette.text.buttonText
        }
    }));
function NFTAvatarButton(props) {
    const { onClick } = props;
    const t = (0,_locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_2__/* .useAvatarTrans */ .X)();
    const { classes } = useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        onClick: onClick,
        role: "button",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                className: classes.icon,
                size: 20
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                display: "inline-flex",
                gap: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        style: {
                            marginLeft: 4
                        },
                        className: classes.text,
                        children: t.nft_avatar()
                    }),
                    props.showSetting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__.GearSettings, {
                        className: classes.setIcon
                    }) : null
                ]
            })
        ]
    });
}


/***/ }),

/***/ 69187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ NFTBadge)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/utils/index.ts + 1 modules
var utils = __webpack_require__(58833);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(40897);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatarRing.tsx




const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            overflow: 'unset'
        },
        container: {
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: '2px solid #00f8ff'
        }
    }));
function NFTAvatarRing(props) {
    const { classes } = useStyles();
    const { stroke, strokeWidth, fontSize, text, width, id, price, hasRainbow = true, borderSize = 2 } = props;
    const avatarSize = hasRainbow ? width - borderSize : width + 1;
    const R = avatarSize / 2;
    const path_r = R - strokeWidth + fontSize / 2;
    const x1 = R - path_r;
    const y1 = R;
    const x2 = R + path_r;
    const svgNode = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: classes.root,
        width: "100%",
        height: "100%",
        viewBox: `0 0 ${avatarSize} ${avatarSize}`,
        id: id,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        id: `${id}-path-name`,
                        fill: "none",
                        stroke: "none",
                        strokeWidth: "0",
                        d: `M${x1} ${y1} A${path_r} ${path_r} 0 1 1 ${x2} ${y1}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        id: `${id}-path-price`,
                        fill: "none",
                        stroke: "none",
                        strokeWidth: "0",
                        d: `M${x1} ${y1} A${path_r} ${path_r} 0 1 0 ${x2} ${y1}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: `${id}-gradient`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#00f8ff"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "20%",
                                stopColor: "#a4ff00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "40%",
                                stopColor: "#f7275e"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "60%",
                                stopColor: "#ffd300"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "80%",
                                stopColor: "#ff8a00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#00f8ff"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                        cx: R,
                        cy: R,
                        r: R - strokeWidth / 2 + 1,
                        fill: "none",
                        stroke: stroke,
                        strokeWidth: strokeWidth
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                        id: `${id}-pattern`,
                        x: "0",
                        y: "0",
                        width: "300%",
                        height: "100%",
                        patternUnits: navigator.userAgent.includes('Firefox') ? '' : 'userSpaceOnUse',
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                            cx: R,
                            cy: R,
                            r: R,
                            fill: `url(#${id}-gradient)`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                attributeType: "XML",
                                dur: "10s",
                                repeatCount: "indefinite",
                                from: `0 ${R} ${R}`,
                                to: `360 ${R} ${R}`
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                            x: "0%",
                            textAnchor: "middle",
                            fill: `url(#${id}-pattern)`,
                            fontFamily: "sans-serif",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                                xlinkHref: `#${id}-path-name`,
                                startOffset: "50%",
                                rotate: "auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                                    fontWeight: "bold",
                                    fontSize: fontSize,
                                    children: text
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                        x: "0%",
                        textAnchor: "middle",
                        fill: Sniffings/* Sniffings */.Y.is_firefox ? 'currentColor' : `url(#${id}-pattern)`,
                        fontFamily: "sans-serif",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                            xlinkHref: `#${id}-path-price`,
                            startOffset: "50%",
                            rotate: "auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                                fontWeight: "bold",
                                fontSize: fontSize,
                                dy: "0.5em",
                                children: price
                            })
                        })
                    })
                ]
            })
        ]
    });
    return hasRainbow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox/* RainbowBox */._, {
        borderSize: borderSize,
        children: svgNode
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        children: svgNode
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(68684);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadge.tsx







const NFTBadge_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));
function NFTBadge(props) {
    const { nftInfo, size = 140, hasRainbow, borderSize } = props;
    const { classes } = NFTBadge_useStyles(undefined, {
        props
    });
    const t = (0,i18n_generated/* useAvatarTrans */.X)();
    if (!nftInfo) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarRing, {
            id: "NFTAvatarRing",
            width: size,
            strokeWidth: 14,
            stroke: "black",
            hasRainbow: hasRainbow,
            borderSize: borderSize,
            fontSize: 9,
            text: t.loading(),
            price: ""
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onClick: (e)=>{
            e.preventDefault();
            if (!nftInfo.permalink) return;
            (0,open_window/* openWindow */.x)(nftInfo.permalink);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: nftInfo?.permalink ?? '',
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarRing, {
                id: "NFTAvatarRing",
                width: size,
                strokeWidth: 14,
                stroke: "black",
                hasRainbow: hasRainbow,
                borderSize: borderSize,
                fontSize: 9,
                text: (0,utils/* formatText */.RZ)(nftInfo.name ?? '', nftInfo.tokenId),
                price: (0,utils/* formatPrice */.T4)(nftInfo.amount ?? '0', nftInfo.symbol ?? 'ETH')
            })
        })
    });
}


/***/ }),

/***/ 43738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ NFTBadgeTimeline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38827);
/* harmony import */ var _RainbowBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40897);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20419);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25115);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()(()=>({
        root: {
            transform: 'scale(0.97)'
        }
    }));
function NFTBadgeTimeline(props) {
    const { userId, avatarId, width, height, siteKey } = props;
    const { loading, value: _avatar } = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useCheckPersonaNFTAvatar */ .Z)(userId, avatarId, '', siteKey);
    const [avatar, setAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [avatarId_, setAvatarId_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(avatarId);
    const { classes } = useStyles(undefined, {
        props
    });
    const onUpdate = (data)=>{
        if (!data.address || !data.tokenId) {
            setAvatar(undefined);
            return;
        }
        setAvatar(data);
        setAvatarId_(data.avatarId);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAvatarId_(avatarId);
    }, [
        avatarId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAvatar(_avatar);
    }, [
        _avatar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.NFTAvatarTimelineUpdated.on((data)=>onUpdate(data)), []);
    if (!avatar || !avatarId || avatar.avatarId !== avatarId_) return null;
    return loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .LoadingBase */ .S, {
        size: width
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RainbowBox_js__WEBPACK_IMPORTED_MODULE_6__/* .RainbowBox */ ._, {
        width: width,
        height: height,
        radius: props.avatarType === _types_js__WEBPACK_IMPORTED_MODULE_7__/* .AvatarType */ .f.Square ? '5px' : '100%',
        classes: {
            root: classes.root
        }
    });
}


/***/ }),

/***/ 40897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ RainbowBox),
/* harmony export */   v: () => (/* binding */ rainbowBorderKeyFrames)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94245);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);


const rainbowBorderKeyFrames = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .keyframes */ .F4)`
    0%, to {
        border-color: #00f8ff;
        box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    20% {
        border-color: #a4ff00;
        box-shadow: 0 5px 15px rgba(164, 255, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    40% {
        border-color: #f7275e;
        box-shadow: 0 5px 15px rgba(247, 39, 94, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    60% {
        border-color: #ffd300;
        box-shadow: 0 5px 15px rgba(255, 211, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    80% {
        border-color: #ff8a00;
        box-shadow: 0 5px 15px rgba(255, 138, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
`;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { width, height, radius = '100%', size = 2 })=>({
        root: {
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            width,
            height,
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: radius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: `${size}px solid #00f8ff`
        }
    }));
function RainbowBox(props) {
    const { classes } = useStyles({
        width: props.width,
        height: props.height,
        radius: props.radius,
        size: props.borderSize
    }, {
        props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: props.children
    });
}


/***/ }),

/***/ 68441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useSaveAddress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77953);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18636);




function useSaveAddress(pluginID) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (userId, pluginID, account, network)=>{
        const addressStorage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createKVStorage(`${_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .NFT_AVATAR_DB_NAME */ .$s}_${network ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Twitter}`);
        if (!addressStorage) return;
        const prevData = await addressStorage.get(userId).catch(()=>({}));
        await addressStorage.set(userId, {
            ...prevData,
            [pluginID]: account,
            [userId]: {
                address: account,
                networkPluginID: pluginID
            }
        });
    }, []);
}


/***/ }),

/***/ 86673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useSaveStringStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68422);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77953);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68441);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18636);





function useSaveStringStorage(pluginID) {
    const saveAddress = (0,_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSaveAddress */ .d)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (userId, address, nft)=>{
        const stringStorage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createFireflyStorage(`${_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_NAME */ .EW}-${((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getSiteType */ .sv)() || _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EnhanceableSite */ .J.Twitter).replace('.com', '')}`, address);
        try {
            await stringStorage.set?.(userId, nft);
            await saveAddress(nft.userId, pluginID, address, (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getEnhanceableSiteType */ .pZ)());
            return nft;
        } catch  {
            return;
        }
    }, [
        Storage,
        saveAddress
    ]);
}


/***/ }),

/***/ 40700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useGetAddress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18636);




function useGetAddress() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (site, userId)=>{
        if (userId === '$unknown') return;
        let storageV1, storageV2;
        try {
            const storage = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Storage */ .xk.createKVStorage(`${_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .NFT_AVATAR_DB_NAME */ .$s}_${site}`).get(userId);
            storageV1 = storage ?? {};
            storageV2 = storage ?? {};
        } catch  {
            storageV1 = {};
            storageV2 = {};
        }
        if (storageV2[userId]) return storageV2[userId];
        if (storageV2[_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM]) return {
            address: storageV2[_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM],
            networkPluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_EVM
        };
        // V1 only supports EVM
        if (storageV1.address) return storageV1;
        return;
    }, []);
}


/***/ }),

/***/ 61982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ useGetNFTAvatar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useGetAddress.ts
var useGetAddress = __webpack_require__(40700);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/storage/useGetNFTAvatarFromStorage.ts



function useGetNFTAvatarFromStorage() {
    return (0,react.useCallback)(async (userId, address)=>{
        const stringStorage = entry/* Web3Storage */.xk.createFireflyStorage(constants/* StorageKey */.Qt, address);
        return stringStorage.get?.(userId);
    }, [
        Storage
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/rss3/index.ts


function useGetNFTAvatarFromRSS3() {
    return (0,react.useCallback)(async (userId, address, key)=>{
        const rss3Storage = entry/* Web3Storage */.xk.createRSS3Storage(address);
        const result = await rss3Storage.get(key);
        if (result) return result[userId].nft;
        return (await rss3Storage.get('_nft'))?.nft;
    }, []);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/useGetNFTAvatar.ts







function useGetNFTAvatar() {
    const getNFTAvatarFromRSS = useGetNFTAvatarFromRSS3();
    const getNFTAvatarFromStorage = useGetNFTAvatarFromStorage();
    const getAddress = (0,useGetAddress/* useGetAddress */.T)();
    return (0,react.useCallback)(async (userId, network, key)=>{
        if (!userId || !network || !key) return;
        const addressStorage = await getAddress(network, userId);
        if (!addressStorage?.address) return;
        if (addressStorage?.networkPluginID && addressStorage.networkPluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return entry/* Web3Storage */.xk.createKVStorage(`${constants/* NFT_AVATAR_METADATA_STORAGE */.t5}_${network}`).get(userId);
        }
        const user = await getNFTAvatarFromStorage(userId, addressStorage.address);
        if (user) return user;
        return getNFTAvatarFromRSS(userId, addressStorage.address, key);
    }, [
        getNFTAvatarFromStorage,
        getAddress,
        Storage,
        getNFTAvatarFromRSS
    ]);
}


/***/ }),

/***/ 664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNFT)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77219);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61811);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96732);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95325);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62649);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);





function useNFT(account, address, tokenId, pluginID = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet, ownerAddress) {
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Others */ .v)(pluginID);
    const Hub = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        account
    });
    const Web3 = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3Connection */ .T)(pluginID, {
        chainId,
        account
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!address || !tokenId) return;
        const allSettled = await Promise.allSettled([
            Web3.getNonFungibleToken(address, tokenId),
            Hub.getNonFungibleAsset(address, tokenId, {
                chainId,
                account: ownerAddress
            })
        ]);
        const [token, asset] = allSettled.map((x)=>x.status === 'fulfilled' ? x.value : undefined);
        const metadata = asset?.metadata || token?.metadata;
        const amount = asset?.priceInToken ? (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .formatBalance */ .a)(asset.priceInToken.amount, asset.priceInToken.token.decimals) : asset?.price?.[_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyType */ .V2.USD] ?? '0';
        const name = metadata?.name ?? '';
        const imageURL = metadata?.imageURL;
        const permalink = asset?.link ?? Others.explorerResolver.nonFungibleTokenLink(chainId, address, tokenId);
        return {
            amount,
            name,
            symbol: asset?.priceInToken ? asset.priceInToken.token.symbol : 'USD',
            image: imageURL,
            owner: token?.ownerId ?? asset?.owner?.address ?? asset?.ownerId,
            // Not all NFT markets have slug in the URL
            slug: token ? undefined : asset?.collection?.slug,
            permalink,
            tokenId
        };
    }, [
        Web3,
        Hub,
        Others,
        address,
        tokenId,
        chainId,
        ownerAddress
    ]);
}


/***/ }),

/***/ 25115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ usePersonaNFTAvatar),
/* harmony export */   Z: () => (/* binding */ useCheckPersonaNFTAvatar)
/* harmony export */ });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7191);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77219);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68422);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66584);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61982);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58833);







const cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0__/* .LRUCache */ .z({
    max: 500,
    ttl: 60 * 1000
});
function usePersonaNFTAvatar(userId, avatarId, persona, siteKey) {
    const getNFTAvatar = (0,_useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_2__/* .useGetNFTAvatar */ .U)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!userId) return;
        const key = `${userId}-${(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getSiteType */ .sv)()}`;
        if (!cache.has(key)) {
            const nftAvatar = await getNFTAvatarForCache(userId, siteKey, avatarId, persona, getNFTAvatar);
            if (nftAvatar) cache.set(key, nftAvatar);
        }
        return cache.get(key);
    }, [
        userId,
        persona,
        siteKey,
        getNFTAvatar,
        avatarId
    ]);
}
async function getNFTAvatarForCache(userId, key, avatarId, persona, fn) {
    const avatarMetaFromPersona = await (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__/* .getNFTAvatarByUserId */ .w9)(userId, avatarId, persona);
    if (avatarMetaFromPersona) return avatarMetaFromPersona;
    const siteType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getEnhanceableSiteType */ .pZ)();
    if (!siteType) return;
    const avatarMeta = await fn(userId, siteType, key);
    if (!avatarMeta) return;
    if (avatarId && avatarId !== avatarMeta.avatarId) return;
    if (avatarMeta.pluginId === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) {
        return {
            imageUrl: '',
            nickname: '',
            ...avatarMeta,
            address: avatarMeta.tokenId
        };
    }
    return {
        imageUrl: '',
        nickname: '',
        pluginId: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_EVM,
        chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ChainId */ .a_.Mainnet,
        ...avatarMeta
    };
}
function useCheckPersonaNFTAvatar(userId, avatarId, persona, siteKey) {
    const getNFTAvatar = (0,_useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_2__/* .useGetNFTAvatar */ .U)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!userId) return;
        const key = `${userId}-${(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getSiteType */ .sv)()}`;
        if (!cache.has(key)) {
            const nftAvatar = await getNFTAvatarForCache(userId, siteKey, avatarId, persona, getNFTAvatar);
            if (nftAvatar) cache.set(key, nftAvatar);
        }
        const metaData = cache.get(key);
        if (!metaData && _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .Sniffings */ .Y.is_twitter_page) {
            const nft = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Twitter */ .tL.getUserNftContainer(userId);
            if (nft) // is twitter blue
            return {
                address: nft.address,
                tokenId: nft.token_id,
                userId,
                avatarId,
                pluginId: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_EVM,
                chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ChainId */ .a_.Mainnet
            };
        }
        return metaData;
    }, [
        userId,
        persona,
        siteKey,
        getNFTAvatar,
        avatarId
    ]);
}


/***/ }),

/***/ 15189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useGetAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40700);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68422);



function useWallet(userId) {
    const getAddress = (0,_useGetAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .useGetAddress */ .T)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!userId) return;
        return getAddress((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .getSiteType */ .sv)(), userId);
    }, [
        userId,
        getAddress
    ]);
}


/***/ }),

/***/ 68684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ useAvatarTrans)
/* harmony export */ });
/* unused harmony export AvatarTrans */
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
function useAvatarTrans() /**
      * `NFT PFP`
      */ /**
      * `Edit Profile`
      */ /**
      * `Set NFT PFPs`
      */ /**
      * `Set up NFT PFP successfully`
      */ /**
      * `NFT PFP verification failed`
      */ /**
      * `Cancel`
      */ /**
      * `Save`
      */ /**
      * `Change`
      */ /**
      * `Connect your wallet`
      */ /**
      * `Sorry, failed to save NFT Avatar. Please set again.`
      */ /**
      * `Update NFT Avatar Success!`
      */ /**
      * `No collectible found.`
      */ /**
      * `Add Collectibles`
      */ /**
      * `Set NFT Avatar`
      */ /**
      * `Set NFT PFP`
      */ /**
      * `Set NFT NFT Background`
      */ /**
      * `Wallet Settings`
      */ /**
      * `Customize NFT experience by connecting social accounts. Enjoy Web2 with a whole new Web3 vibe.`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `Copied`
      */ /**
      * `No any collectible is available to preview. Please add your collectible here.`
      */ /**
      * `No NFTs found in current wallet.`
      */ /**
      * `Load failed`
      */ /**
      * `Reload`
      */ /**
      * `Socialize and show off your NFTs. People can bid, buy and view your valuable NFTs without leaving Twitter.`
      */ /**
      * `Provided by`
      */ /**
      * `Downloading image...`
      */ /**
      * `Saving...`
      */ /**
      * `Download image error`
      */ /**
      * `Please connect a wallet.`
      */ /**
      * `NFT background`
      */ /**
      * `Powered by`
      */ /**
      * `Loading...`
      */ /**
      * `No valid wallet detected. Please connect wallet or verify wallet firstly.`
      */ /**
      * `Not current account. Please switch to this account to set up NFTs Profile.`
      */ /**
      * `Do not support the current network.`
      */ /**
      * `NFT PFP`
      */ /**
      * `Retry`
      */ /**
      * `NFT Avatar Setting`
      */ /**
      * `Wallet`
      */ /**
      * `Change`
      */ /**
      * `Please input contract address`
      */ /**
      * `Please input token ID`
      */ /**
      * `web3 error`
      */ /**
      * `Cannot found asset.`
      */ /**
      * `Chain does not match.`
      */ /**
      * `The contract address is incorrect or the collection does not belong to you`
      */ /**
      * `Checking`
      */ /**
      * `Add`
      */ /**
      * `Input Contract Address`
      */ /**
      * `Token ID`
      */ /**
      * `No collectible found.`
      */ /**
      * - set_up_title$pfp: `Set NFT PFP`
    
      * - set_up_title$background: `Set NFT NFT Background`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("com.maskbook.avatar");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "com.maskbook.avatar",
            shouldUnescape: true,
            ...props
        });
}
const AvatarTrans = /**
      * `Only NFTs on Ethereum are supported to preview. We are currently<br/>working on supporting Polygon NFTs as well. <br/>Please add your collectibles here.`
      */ /**
      * `The NFT PFP feature currently supports only EVM chains. Support for other<br>chains will be added in the future.`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));


/***/ }),

/***/ 38827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ AvatarType),
/* harmony export */   n: () => (/* binding */ PFP_TYPE)
/* harmony export */ });
var PFP_TYPE;
(function(PFP_TYPE) {
    PFP_TYPE["BACKGROUND"] = 'background';
    PFP_TYPE["PFP"] = 'pfp';
})(PFP_TYPE || (PFP_TYPE = {}));
var AvatarType;
(function(AvatarType) {
    AvatarType["Square"] = 'shape-square';
    AvatarType["Clip"] = 'shape-hex';
    AvatarType["Circle"] = 'circle';
    AvatarType["Default"] = 'default';
})(AvatarType || (AvatarType = {}));


/***/ }),

/***/ 58833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T4: () => (/* binding */ formatPrice),
  RZ: () => (/* binding */ formatText),
  w9: () => (/* binding */ getNFTAvatarByUserId),
  mr: () => (/* binding */ toPNG)
});

// UNUSED EXPORTS: formatAddress, formatTokenId, getImage, sortPersonaBindings

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(4677);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/fetch.ts
function getImageBlobResized(img, width, height) {
    return new Promise((resolve)=>{
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const scale = Math.min(width / w, height / h);
        canvas.height = height;
        canvas.width = width;
        context?.setTransform(scale, 0, 0, scale, canvas.width / 2, canvas.height / 2);
        context?.drawImage(img, -w / 2, -h / 2, w, h);
        canvas.toBlob((b)=>resolve(b), 'image/png');
    });
}
/**
 * Fetch image by creating an image element.
 * It's not supporting in mv3 on background page.
 * @param url
 * @returns
 */ function fetchImageViaDOM(url) {
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img');
        const cleanup = ()=>{
            img.removeEventListener('load', onload);
            img.removeEventListener('error', reject);
        };
        const onload = async ()=>{
            try {
                resolve(await getImageBlobResized(img, 450, 450));
            } catch  {} finally// do nothing
            {
                cleanup();
            }
        };
        const onerror = ()=>{
            reject();
            cleanup();
        };
        img.decoding = 'async';
        img.crossOrigin = 'Anonymous';
        img.addEventListener('load', onload);
        img.addEventListener('error', onerror);
        img.src = url;
    });
}
/**
 * Fetch image by fetching with HTTP request.
 * This manner will constraint by browser safe policy (CORS).
 * @param url
 * @returns
 */ async function fetchImageViaHTTP(url) {
    const response = await fetch(url, {
        cache: 'force-cache',
        headers: {
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
    });
    if (response.ok) return response.blob();
    return null;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/attemptUntil.ts
var attemptUntil = __webpack_require__(92358);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/utils/index.ts







async function getImage(image) {
    const blob = await fetchBlob(image);
    return await blobToBase64(blob);
}
function blobToBase64(blob) {
    return new Promise((resolve, _)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
async function fetchImage(url) {
    const resolvedURL = (0,resolver/* resolveCrossOriginURL */.nX)(url);
    if (!resolvedURL) return fetchImageViaHTTP(url);
    return (0,attemptUntil/* attemptUntil */.C)([
        async ()=>fetchImageViaHTTP(url),
        async ()=>fetchImageViaDOM(resolvedURL),
        async ()=>fetchImageViaHTTP(resolvedURL)
    ], null);
}
async function toPNG(image) {
    const isBase64 = (0,resolver/* isLocaleResource */.yT)(image);
    const resolvedURL = (0,resolver/* resolveResourceURL */.Bl)(image);
    const imageData = await fetchImage(resolvedURL || image);
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if ((0,isNull/* default */.Z)(ctx)) throw new Error('Canvas was not supported');
        img.addEventListener('load', ()=>{
            [canvas.width, canvas.height] = [
                img.width,
                img.height
            ];
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob)=>{
                resolve(blob);
            }, 'image/png');
        });
        img.addEventListener('error', ()=>{
            reject(new Error('Could not load image'));
        });
        img.setAttribute('CrossOrigin', 'Anonymous');
        if (!isBase64 && imageData) img.src = URL.createObjectURL(imageData);
        else img.src = image;
    });
}
function formatPrice(amount, symbol) {
    const _amount = new bignumber/* BigNumber */.O(amount ?? '0');
    if (_amount.isZero() || _amount.isLessThan(0.01)) return '';
    if (_amount.isLessThan(1)) return `${_amount.toFixed(2)} ${symbol}`;
    if (_amount.isLessThan(1000)) return `${_amount.toFixed(1)} ${symbol}`;
    if (_amount.isLessThan(1000000)) return `${_amount.div(1000000).toFixed(1)}K ${symbol}`;
    return `${_amount.div(1000000).toFixed(1)}M ${symbol}`;
}
function formatText(name, tokenId) {
    return name.length > 28 ? `${name.slice(0, 28)}...` : name;
}
function formatTokenId(symbol, tokenId) {
    const name = tokenId;
    return name.length > 18 ? name.slice(0, 12) + '...' : name;
}
function formatAddress(address, size = 0) {
    if (size === 0 || size >= 20) return address;
    return `${address.slice(0, Math.max(0, 2 + size))}...${address.slice(-size)}`;
}
async function getAvatarFromNextIDStorage(persona, platform, userId, avatarId) {
    const response = await entry/* NextIDStorageProvider */.HV.getByIdentity(persona, platform, userId.toLowerCase(), constants/* PLUGIN_ID */.Uu);
    if (!avatarId && response.isOk()) return response.value;
    if (response.isOk() && response.value?.avatarId === avatarId) return response.value;
    return;
}
/**
 * find latest used persona binding
 */ const sortPersonaBindings = (a, b, userId)=>{
    if (!userId) return 0;
    const p_a = (0,head/* default */.Z)(a.proofs.filter((x)=>x.identity === userId.toLowerCase()));
    const p_b = (0,head/* default */.Z)(b.proofs.filter((x)=>x.identity === userId.toLowerCase()));
    if (!p_a || !p_b) return 0;
    if (p_a.last_checked_at > p_b.last_checked_at) return -1;
    return 1;
};
async function getNFTAvatarByUserId(userId, avatarId, persona) {
    const platform = (0,Site/* getSiteType */.sv)() === types/* EnhanceableSite */.J.Twitter ? NextID_types/* NextIDPlatform */.V.Twitter : undefined;
    if (!platform) return;
    const bindings = await entry/* NextIDProof */.q7.queryAllExistedBindingsByPlatform(platform, userId);
    if (persona) {
        const binding = bindings.filter((x)=>x.persona.toLowerCase() === persona.toLowerCase())?.[0];
        if (binding) {
            return getAvatarFromNextIDStorage(binding.persona, platform, userId, avatarId);
        }
    }
    for (const binding of bindings.sort((a, b)=>sortPersonaBindings(a, b, userId))){
        const avatar = await getAvatarFromNextIDStorage(binding.persona, platform, userId, avatarId);
        if (avatar) return avatar;
    }
    return;
}


/***/ }),

/***/ 72552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useLocationChange(handler) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler);
    }, [
        handler
    ]);
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

/***/ 32147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Linking)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90138);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7387);


function Linking(props) {
    const { href, LinkProps, TypographyProps, children } = props;
    if (href && URL.canParse(href)) {
        const { hostname } = new URL(href);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            color: (theme)=>theme.palette.maskColor.main,
            target: "_blank",
            rel: "noopener noreferrer",
            href: props.href,
            ...LinkProps,
            children: children ? children : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: hostname.replace(/^www./i, '')
            })
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: LinkProps?.className,
            title: LinkProps?.title,
            children: children ? children : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: href
            })
        });
    }
}


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

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6379);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81128);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27966);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74765);






// declare explicitly to avoid ts warning
const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address, pluginID, size = 4, ...rest })=>{
    const { data: domain } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$)(pluginID, address);
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Others */ .v)(pluginID);
    const showDomain = !!domain && Others.isValidDomain(domain);
    const uiLabel = showDomain ? Others.formatDomainName(domain) : Others.formatAddress(address, size) ?? address;
    const hasEllipsis = showDomain ? uiLabel !== domain : !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .W)(uiLabel, address);
    const node = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        fontWeight: 700,
        ...rest,
        children: uiLabel
    });
    const popperProps = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .useBoundedPopperProps */ .g)();
    return hasEllipsis ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .ShadowRootTooltip */ .p, {
        title: showDomain ? domain : address,
        PopperProps: {
            ...popperProps,
            style: {
                whiteSpace: 'break-spaces'
            }
        },
        children: node
    }) : node;
});
ReversedAddress.displayName = 'ReversedAddress';


/***/ }),

/***/ 65447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 96312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useCollectionByTwitterHandler)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17735);



function useCollectionByTwitterHandler(twitterHandler) {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!twitterHandler) return;
        return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .DSearch */ .UZ.search(twitterHandler, _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SearchResultType */ .Bk.CollectionListByTwitterHandler);
    }, [
        twitterHandler
    ]);
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

/***/ 55432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ addressSorter)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45569);

function addressSorter(a, z) {
    if (a.supportedAddressTypes?.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SocialAddressType */ .b.NEXT_ID)) return -1;
    if (z.supportedAddressTypes?.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SocialAddressType */ .b.NEXT_ID)) return 1;
    return 0;
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

/***/ 98658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 18703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useSnapshotSpacesByTwitterHandler)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);


function useSnapshotSpacesByTwitterHandler(twitterHandler) {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!twitterHandler) return;
        const spaceList = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .SnapshotSearch */ .Wm.get();
        return spaceList.filter((x)=>x.twitterHandler?.toLowerCase() === twitterHandler.toLowerCase());
    }, [
        twitterHandler
    ]);
}


/***/ })

}]);
//# sourceMappingURL=chunk.3256.js.map