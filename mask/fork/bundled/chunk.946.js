(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[946],{

/***/ 9898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ getPluginMessage),
/* harmony export */   kO: () => (/* binding */ DOMAIN_RPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceImplementationOfCreatePluginMessage__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61530);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40464);


/** @internal */ const DOMAIN_RPC = Symbol('create RPC instead of normal message');
/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = getPluginMessage(PLUGIN_ID)
 */ let getPluginMessage = (pluginID, type)=>{
    const domain = (type === DOMAIN_RPC ? '@plugin-rpc/' : '@plugin/') + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .WebExtensionMessage */ .$({
        domain
    });
    const events = messageCenter.events;
    messageCenter.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .G;
    cache.set(domain, events);
    return events;
};
function __workaround__replaceImplementationOfCreatePluginMessage__(newImpl) {
    getPluginMessage = newImpl;
}
const cache = new Map() // TODO: this type should be defined here, not shared-base
;


/***/ }),

/***/ 56142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uG: () => (/* binding */ startPluginRPC),
/* harmony export */   wX: () => (/* binding */ getPluginRPCGenerator),
/* harmony export */   wx: () => (/* binding */ startPluginGeneratorRPC),
/* harmony export */   x8: () => (/* binding */ getPluginRPC)
/* harmony export */ });
/* unused harmony export __workaround__replaceIsBackground__ */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88228);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56499);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40464);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14414);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9898);





const log = {
    type: 'pretty',
    requestReplay: "production" === 'development',
    sendLocalStack: "production" === 'development'
};
let isBackground = ()=>(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .isEnvironment */ .hE)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__/* .Environment */ .qA.ManifestBackground);
function __workaround__replaceIsBackground__(f) {
    isBackground = f;
}
function getPluginRPCInternal(cache, pluginID, starter, entry) {
    if (cache.has(pluginID)) return cache.get(pluginID);
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const rpc = starter(Object.create(null), {
        key: `@plugin/${pluginID}`,
        channel: {
            on: message[entry].on,
            send: message[entry].sendToBackgroundPage
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
    cache.set(pluginID, rpc);
    return rpc;
}
const cache = new Map();
const cacheGenerator = new Map();
function getPluginRPC(pluginID) {
    if (isBackground()) startPluginRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cache, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
function getPluginRPCGenerator(pluginID) {
    if (isBackground()) startPluginGeneratorRPC(pluginID, new AbortController().signal, Object.create(null));
    return getPluginRPCInternal(cacheGenerator, pluginID, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
}
function startPluginRPCInternal(cache, pluginID, signal, impl, starter, entry) {
    if (!isBackground()) throw new Error('Cannot start RPC in the UI.');
    const message = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginMessage */ .db)(pluginID, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .DOMAIN_RPC */ .kO);
    const delegate = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .getOrUpdateLocalImplementationHMR */ .K)(()=>impl, message[entry]);
    if (cache.has(pluginID)) return;
    cache.set(pluginID, delegate);
    starter(delegate, {
        key: pluginID,
        channel: {
            on: message[entry].on,
            send: message[entry].sendByBroadcast
        },
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .serializer */ .G,
        log,
        thenable: false
    });
}
/** @internal */ function startPluginRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cache, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE, '_');
}
/** @internal */ function startPluginGeneratorRPC(pluginID, signal, impl) {
    startPluginRPCInternal(cacheGenerator, pluginID, signal, impl, async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc, '$');
} // RPC
 // Generator


/***/ }),

/***/ 48483:
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
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugins/ProfileCard/src/base.ts
var base = __webpack_require__(51888);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/plugins/ProfileCard/src/constants.ts
var src_constants = __webpack_require__(67513);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-providers/src/types/Trending.ts
var Trending = __webpack_require__(91948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/messages.ts
var messages = __webpack_require__(68026);
;// CONCATENATED MODULE: ./packages/plugins/ProfileCard/src/SiteAdaptor/AvatarBadge/CollectionProjectAvatarBadge.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        badge: {
            padding: 0,
            boxShadow: `0 0 0 1px ${theme.palette.maskColor.bottom}`
        }
    }));
function CollectionProjectAvatarBadge({ address, userId, className, identity, ...rest }) {
    const buttonRef = (0,react.useRef)(null);
    const { classes, cx } = useStyles();
    (0,react.useEffect)(()=>{
        const button = buttonRef.current;
        if (!button) return;
        let openTimer;
        const enter = ()=>{
            clearTimeout(openTimer);
            openTimer = setTimeout(()=>{
                messages/* PluginTraderMessages */.A.trendingAnchorObserved.sendToLocal({
                    name: userId,
                    identity,
                    address,
                    anchorBounding: button.getBoundingClientRect(),
                    anchorEl: buttonRef.current,
                    type: Trending/* TrendingAPI */.l.TagType.HASH,
                    isCollectionProjectPopper: true
                });
            }, 200);
        };
        button.addEventListener('mouseenter', enter);
        return ()=>{
            clearTimeout(openTimer);
            button.removeEventListener('mouseenter', enter);
        };
    }, [
        address,
        userId,
        JSON.stringify(identity)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        disableRipple: true,
        className: cx(classes.badge, className),
        ...rest,
        ref: buttonRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
            size: 16
        })
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
;// CONCATENATED MODULE: ./packages/plugins/ProfileCard/src/SiteAdaptor/AvatarBadge/ProfileAvatarBadge.tsx






const ProfileAvatarBadge_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        badge: {
            padding: 0,
            boxShadow: `0 0 0 1px ${theme.palette.maskColor.bottom}`
        }
    }));
function ProfileAvatarBadge({ userId, address, className, ...rest }) {
    const buttonRef = (0,react.useRef)(null);
    const { classes, cx } = ProfileAvatarBadge_useStyles();
    (0,react.useEffect)(()=>{
        const button = buttonRef.current;
        if (!button) return;
        let closeTimer;
        let openTimer;
        const enter = ()=>{
            clearTimeout(openTimer);
            clearTimeout(closeTimer);
            openTimer = setTimeout(()=>{
                CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.sendToLocal({
                    open: true,
                    address,
                    userId,
                    anchorBounding: button.getBoundingClientRect(),
                    anchorEl: button
                });
            }, 200);
        };
        const leave = ()=>{
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.sendToLocal({
                open: false
            });
        };
        button.addEventListener('mouseenter', enter);
        button.addEventListener('mouseleave', leave);
        // Other badges might want to open the profile card
        const unsubscribe = CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.on((event)=>{
            if (!event.open) return;
            clearTimeout(closeTimer);
        });
        return ()=>{
            clearTimeout(closeTimer);
            clearTimeout(openTimer);
            button.removeEventListener('mouseenter', enter);
            button.removeEventListener('mouseleave', leave);
            unsubscribe();
        };
    }, [
        userId,
        address
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        disableRipple: true,
        className: cx(classes.badge, className),
        ...rest,
        ref: buttonRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
            size: 16
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/hooks/useCollectionByTwitterHandler.ts
var useCollectionByTwitterHandler = __webpack_require__(96312);
;// CONCATENATED MODULE: ./packages/plugins/ProfileCard/src/SiteAdaptor/AvatarBadge/AvatarBadge.tsx






function AvatarBadge({ userId, identity, socialAccounts }) {
    const { value: collectionList } = (0,useCollectionByTwitterHandler/* useCollectionByTwitterHandler */.m)(userId);
    if (collectionList?.[0]) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    display: 'flex',
                    alignItems: 'top',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionProjectAvatarBadge, {
                    userId: userId,
                    address: collectionList?.[0].address ?? '',
                    identity: identity
                })
            })
        });
    }
    return socialAccounts?.filter((x)=>x.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM).length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                display: 'flex',
                alignItems: 'top',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileAvatarBadge, {
                userId: userId,
                address: socialAccounts[0]?.address
            })
        })
    }) : null;
}

;// CONCATENATED MODULE: ./packages/plugins/ProfileCard/src/SiteAdaptor/index.tsx







const site = {
    ...base/* base */.u,
    ApplicationEntries: [
        {
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "description",
                ns: base/* base */.u.ID
            }),
            ApplicationEntryID: base/* base */.u.ID,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Web3ProfileCard, {}),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "name",
                ns: base/* base */.u.ID
            }),
            features: [
                {
                    name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "plugin_avatar_feature_general_user_name"
                    }),
                    description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "plugin_avatar_feature_general_user_description"
                    })
                },
                {
                    name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "plugin_avatar_feature_token_name"
                    }),
                    description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "plugin_avatar_feature_token_description"
                    })
                },
                {
                    name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "plugin_avatar_feature_nft_name"
                    }),
                    description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                        i18nKey: "plugin_avatar_feature_nft_description"
                    })
                }
            ]
        }
    ],
    AvatarRealm: {
        ID: `${src_constants/* PLUGIN_ID */.U}_profile_card`,
        label: 'Web3 Profile Card',
        priority: 99999,
        UI: {
            Decorator: function ProfileAvatarRealmDecorator({ identity, socialAccounts }) {
                if (!identity?.identifier?.userId) return null;
                const rss3Key = constants/* EnhanceableSite_RSS3_NFT_SITE_KEY_map */.mN[identity.identifier.network];
                if (!rss3Key) return null;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarBadge, {
                    userId: identity.identifier.userId,
                    identity: identity,
                    socialAccounts: socialAccounts
                });
            }
        },
        Utils: {
            shouldDisplay () {
                return true;
            }
        }
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 68026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PluginTraderMessages),
/* harmony export */   V: () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56142);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22325);


/**
     * View a cash tag
     */ /**
     * Swap settings dialog
     */  undefined;
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .getPluginMessage */ .db)(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .U);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .getPluginRPC */ .x8)(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .U);


/***/ }),

/***/ 14414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getOrUpdateLocalImplementationHMR)
/* harmony export */ });
const cache = new WeakMap();
/**
 * This function provides a localImplementation that has HMR support.
 * To update, call this function with the SAME key object.
 * @param impl The implementation. Can be an async function.
 * @param key The reference object that must be the same if you're updating.
 */ async function getOrUpdateLocalImplementationHMR(impl, key) {
    if (true) return impl();
    const result = await impl();
    if (!cache.has(key)) cache.set(key, Object.create(null));
    const localImpl = cache.get(key);
    Object.setPrototypeOf(localImpl, result);
    return localImpl;
}


/***/ }),

/***/ 16044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 96312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 91948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

}]);
//# sourceMappingURL=chunk.946.js.map