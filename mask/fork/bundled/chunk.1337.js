"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1337],{

/***/ 21337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils.ts
var utils = __webpack_require__(16900);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PageInspector.tsx + 6 modules
var PageInspector = __webpack_require__(87486);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(10791);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/base.ts
var base = __webpack_require__(36095);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(80029);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/hasPayloadLike.ts
var hasPayloadLike = __webpack_require__(86925);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(12113);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/collecting/utils.ts





function getMirrorProfileUrl(id) {
    return (0,dist/* default */.ZP)('https://mirror.xyz/:id', {
        id
    });
}
function formatWriter(writer, isOwner) {
    return {
        avatar: writer.avatarURL,
        nickname: writer.displayName,
        bio: writer.description,
        homepage: writer.domain || getMirrorProfileUrl(writer.address),
        identifier: profile/* ProfileIdentifier */.W.of(base/* mirrorBase */.j.networkIdentifier, (0,formatter/* formatEthereumAddress */.j8)(writer.address)).unwrapOr(undefined),
        isOwner
    };
}
var MirrorPageType;
(function(MirrorPageType) {
    MirrorPageType["Profile"] = 'profile';
    MirrorPageType["Collection"] = 'collection';
    MirrorPageType["Post"] = 'post';
    MirrorPageType["Dashboard"] = 'dashboard';
})(MirrorPageType || (MirrorPageType = {}));
const MIRROR_ENTRY_ID = /[\w|-]{43}/i;
function getMirrorPageType(url) {
    if (!url) return;
    if (url.includes(`/${MirrorPageType.Dashboard}`)) return MirrorPageType.Dashboard;
    if (url.includes(`/${MirrorPageType.Collection}`)) return MirrorPageType.Collection;
    const urlSplits = url.split('/').filter(Boolean);
    if (MIRROR_ENTRY_ID.test((urlSplits.at(-1) ?? '').trim())) return MirrorPageType.Post;
    return MirrorPageType.Profile;
}
function getMirrorUserId(href) {
    if (!href) return null;
    const urlObj = new URL(href);
    const url = urlObj.href.replace(urlObj.search, '').replace(/\/$/, '');
    const pageType = getMirrorPageType(url);
    // If dashboard, get from local storage
    if (pageType === MirrorPageType.Dashboard) return localStorage.getItem('mirror.userAddress');
    let tempURL = url;
    if (pageType === MirrorPageType.Collection) {
        tempURL = url.replace(/\/collection(.*)/, '');
    }
    if (pageType === MirrorPageType.Post) {
        tempURL = url.replace(/\/[\w|-]{43}/i, '');
    }
    const ens = (0,last/* default */.Z)(tempURL.match(/https:\/\/mirror.xyz\/(.*)/));
    if (ens) return ens;
    return (0,last/* default */.Z)(tempURL.match(/https:\/\/(.*)\.mirror\.xyz/));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/utils/user.ts




async function getUserIdentity(userAddress) {
    if (!userAddress) return;
    const writer = await entry/* Mirror */.WC.getWriter(userAddress);
    if (!writer) return;
    return {
        avatar: writer.avatarURL,
        nickname: writer.displayName,
        identifier: profile/* ProfileIdentifier */.W.of(base/* mirrorBase */.j.networkIdentifier, writer.address).unwrapOr(undefined),
        bio: writer.description,
        homepage: writer.domain || getMirrorProfileUrl(writer.address)
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/shared.ts




const mirrorShared = {
    ...base/* mirrorBase */.j,
    utils: {
        createPostContext: (0,create_post_context/* createSiteAdaptorSpecializedPostContext */.L)({
            hasPayloadLike: hasPayloadLike/* hasPayloadLike */.s
        }),
        getUserIdentity: getUserIdentity
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/getCookie.ts
var getCookie = __webpack_require__(85791);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/collecting/identity.ts





async function getCurrentUserInfo() {
    if (location.host !== types/* EnhanceableSite */.J.Mirror) return;
    const userAddress = (0,getCookie/* getCookie */.e)('user_wallet');
    if (!userAddress) return;
    return entry/* Mirror */.WC.getWriter(userAddress);
}
function resolveLastRecognizedIdentityInner(ref, cancel) {
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(2000);
        const writer = await getCurrentUserInfo();
        if (!writer) return;
        ref.value = formatWriter(writer, true);
    };
    assign();
    window.addEventListener('locationchange', assign, {
        signal: cancel
    });
}
function resolveCurrentVisitingIdentityInner(ref, ownerRef, cancel) {
    const assign = async ()=>{
        // get from mirror api
        const userId = getMirrorUserId(location.href);
        const ownerId = ownerRef.value.identifier?.userId;
        const isOwner = !!(userId && ownerId && userId.toLowerCase() === ownerId.toLowerCase());
        if (userId) {
            const writer = await entry/* Mirror */.WC.getWriter(userId);
            if (writer) {
                ref.value = formatWriter(writer, isOwner);
                return;
            }
        }
        // Could be `/dashboard` or `/dashboard/settings`
        if (location.pathname.startsWith('/dashboard')) {
            ref.value = {};
            return;
        }
        // get from local
        // why local as second option?
        // when location change, then __NEXT_DATA__ data could be stale,
        const script = document.getElementById('__NEXT_DATA__')?.innerHTML;
        if (!script) return;
        const INIT_DATA = JSON.parse(script);
        if (!INIT_DATA) return;
        const writer = INIT_DATA.props?.pageProps?.publicationLayoutProject ?? INIT_DATA.props?.pageProps?.project;
        ref.value = formatWriter(writer, isOwner);
    };
    assign();
    window.addEventListener('locationchange', assign, {
        signal: cancel
    });
}
const IdentityProviderMirror = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
    }
};
const CurrentVisitingIdentityProviderMirror = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, IdentityProviderMirror.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var src_types = __webpack_require__(62476);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/LiveSelector.js
var LiveSelector = __webpack_require__(23212);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/utils/selectors.ts

function querySelector(selector, singleMode = true) {
    const ls = new LiveSelector/* LiveSelector */.j().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
}
function querySelectorAll(selector) {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll(selector);
}
function postsContentSelector() {
    return querySelectorAll([
        // In Entries
        '[id="__next"] > div:nth-child(2) > div > div:not([class]) > div:not(footer)',
        // In collection
        '[id="__next"] > div:nth-child(2) a:has(footer)',
        '[id="__next"] > div:nth-child(2) a:has(img[alt="Card Header"][loading="lazy"])',
        // In Entry detail
        '[id="__next"] > div:nth-child(2) > div:has([class]):not(footer):has(p)'
    ].join(',')).filter((x)=>x.childNodes.length !== 0);
}
function themeSelector() {
    return querySelector('[data-theme]');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(30504);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/Tips/TipsButtonWrapper.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            marginLeft: theme.spacing(1),
            height: 40,
            width: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.maskColor.line,
            borderRadius: 20,
            marginRight: theme.spacing(1),
            color: theme.palette.text.primary
        }
    }));
const TipsButtonWrapper = /*#__PURE__*/ (0,react.memo)(function TipsButtonWrapper({ slot }) {
    const { classes } = useStyles();
    const visitingIdentity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const isMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Tips);
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const accounts = (0,react.useMemo)(()=>{
        if (!visitingIdentity?.identifier) return constants/* EMPTY_LIST */.rP;
        return [
            {
                pluginID,
                address: visitingIdentity.identifier.userId,
                label: visitingIdentity.nickname ? `(${visitingIdentity.nickname}) ${Others.formatAddress(visitingIdentity.identifier.userId, 4)}` : visitingIdentity.identifier.userId
            }
        ];
    }, [
        visitingIdentity,
        Others.formatAddress
    ]);
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.TipsRealm?.UI?.Content);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: visitingIdentity.identifier,
            slot: slot,
            accounts: accounts
        });
    }, [
        visitingIdentity.identifier,
        accounts,
        slot
    ]);
    if (!component || !visitingIdentity.identifier || isMinimalMode || location.pathname === '/') return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: slot === src_types.Plugin.SiteAdaptor.TipsSlot.MirrorMenu ? classes.root : undefined,
        children: component
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/Tips/MenuAuthorTipButton.tsx








function selector() {
    return querySelector([
        'div:has(> div > button[data-state="closed"]) a',
        // More reliable
        '.GlobalNavigation a[href="/"]',
        'div[style$="height: 56px;"] a'
    ].join(','));
}
function injectOnMenu(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsButtonWrapper, {
            slot: src_types.Plugin.SiteAdaptor.TipsSlot.MirrorMenu
        })
    }));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/Tips/PostVerification.tsx








function PostVerification_selector() {
    const authorWallet = location.pathname.split('/')[1].toLowerCase();
    return querySelector(`#__next a[href$="/address/${authorWallet}" i] div:nth-child(2)`);
}
function injectOnVerification(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(PostVerification_selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsButtonWrapper, {
            slot: src_types.Plugin.SiteAdaptor.TipsSlot.MirrorVerification
        })
    }));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/Tips/ProfilePage.tsx








function ProfilePage_selector() {
    const authorWallet = location.pathname.split('/')[1].toLowerCase();
    // Only the address link
    return querySelector([
        `#__next div:has(h2) ~ div a[href$="/address/${authorWallet}" i]`,
        // address
        `#__next div:has(h2) ~ div a[href$="search=${authorWallet}" i]`
    ].// ENS
    join(','));
}
function injectTipsButtonOnProfile(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ProfilePage_selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsButtonWrapper, {
            slot: src_types.Plugin.SiteAdaptor.TipsSlot.MirrorVerification
        })
    }));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/Tips/adjustArticleInfoBar.ts
function adjustArticleInfoBar_selector() {
    const authorWallet = location.pathname.split('/')[1].toLowerCase();
    return `#__next div:has(> div > a[href$="mirror.xyz/${authorWallet}" i] button[data-state] img[alt^="0x" i]) + div`;
}
function adjustArticleInfoBar(signal) {
    const node = document.querySelector(adjustArticleInfoBar_selector());
    if (!node) return;
    const timer = setInterval(()=>{
        if (node.offsetWidth !== node.parentElement?.offsetWidth) return;
        node.style.justifyContent = 'flex-start';
        clearInterval(timer);
    }, 250);
    signal.addEventListener('abort', ()=>clearInterval(timer));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/Tips/index.tsx




function injectTips(signal) {
    injectOnMenu(signal);
    injectTipsButtonOnProfile(signal);
    injectOnVerification(signal);
    adjustArticleInfoBar(signal);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/customization/ui-overwrite.ts
/* eslint-disable tss-unused-classes/unused-classes */ 
const useInjectedDialogClassesOverwriteMirror = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [smallQuery]: {
                display: 'block !important'
            }
        },
        container: {
            alignItems: 'center'
        },
        paper: {
            width: '600px !important',
            minHeight: 400,
            maxHeight: 620,
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [smallQuery]: {
                display: 'block !important',
                margin: 12
            },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        dialogTitle: {
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            padding: 16,
            position: 'relative',
            background: theme.palette.maskColor.modalTitleBg,
            borderBottom: 'none',
            '& > p': {
                fontSize: 18,
                lineHeight: '22px',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            [smallQuery]: {
                display: 'flex',
                justifyContent: 'start',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px 11px !important'
            }
        },
        dialogContent: {
            backgroundColor: theme.palette.maskColor.bottom,
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px'
            }
        },
        dialogActions: {
            backgroundColor: theme.palette.maskColor.bottom,
            padding: '6px 16px',
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogBackdropRoot: {
            backgroundColor: theme.palette.action.mask
        }
    };
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/injection/PostActions/index.tsx








const ActionsRenderer = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.TipsRealm?.UI?.Content);
function PostActions() {
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const identifier = PostContext/* usePostInfoDetails */.H9.author();
    const nickname = PostContext/* usePostInfoDetails */.H9.nickname();
    const coAuthors = PostContext/* usePostInfoDetails */.H9.coAuthors();
    if (!identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsRenderer, {
        // In Mirror, then profile identifier is wallet address
        accounts: [
            {
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                address: identifier.userId,
                label: nickname ? `(${nickname}) ${Others.formatAddress(identifier.userId, 4)}` : identifier.userId
            },
            ...coAuthors?.map((x)=>({
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    address: x.author.userId,
                    label: x.nickname ? `(${x.nickname}) ${Others.formatAddress(x.author.userId, 4)}` : x.author.userId
                })) ?? []
        ],
        identity: identifier,
        slot: src_types.Plugin.SiteAdaptor.TipsSlot.MirrorEntry
    });
}
function createPostActionsInjector() {
    return function injectPostActions(postInfo, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostContext/* PostInfoProvider */.eT, {
                post: postInfo,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostActions, {})
            })
        });
        if (postInfo.actionsElement) {
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(postInfo.actionsElement.afterShadow, {
                key: 'post-actions',
                signal
            });
            root.render(jsx);
            return root.destroy;
        }
        return noop/* default */.Z;
    };
}
function injectPostActionsAtMirror(signal, postInfo) {
    if (!src/* Flags */.v.post_actions_enabled) return;
    const injector = createPostActionsInjector();
    return injector(postInfo, signal);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Proxy.js
var Proxy = __webpack_require__(6806);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post.ts
var post = __webpack_require__(82654);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/collecting/posts.ts









const MIRROR_LINK_PREFIX = /https(.*)mirror.xyz(.*)\//i;
function queryInjectPoint(node) {
    // Could be ENS or address
    const authorWallet = location.pathname.split('/')[1].toLowerCase();
    const allANode = node.querySelectorAll([
        // post detail header
        `:scope [href$="/${authorWallet}" i]:has(img[alt^="0x" i][decoding="async"]) > div:last-of-type`,
        // img alt is always address
        // collection page card footer
        ':scope header div:has(> span img[alt="Publisher"])'
    ].join(','));
    return allANode.item(allANode.length - 1);
}
function getPostId(node) {
    // Handle entry detail page post id
    if (getMirrorPageType(location.href) === MirrorPageType.Post) {
        return location.pathname.match(MIRROR_ENTRY_ID)?.[0];
    }
    const ele = node.querySelector('div > a');
    const href = ele?.href || node?.href;
    if (href?.startsWith('https')) {
        return href.replace(MIRROR_LINK_PREFIX, '');
    }
    if (href) return href?.replace('/', '');
    return '';
}
async function collectPostInfo(node, cancel) {
    if (!node) return;
    if (cancel?.aborted) return;
    const postId = getPostId(node);
    if (!postId) return;
    const publisher = await entry/* Mirror */.WC.getPostPublisher(postId);
    if (!publisher) return;
    return {
        postId,
        writers: {
            author: formatWriter(publisher.author, false),
            coAuthors: publisher?.coAuthors.map((x)=>formatWriter(x, false))
        }
    };
}
async function registerPostCollectorInner(postStore, cancel) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(postsContentSelector()).useForeach((node, key, proxy)=>{
        if (!node) return;
        const actionsElementProxy = (0,Proxy/* DOMProxy */.E)({});
        actionsElementProxy.realCurrent = queryInjectPoint(node);
        const refs = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = mirrorShared.utils.createPostContext({
            actionsElement: actionsElementProxy,
            comments: undefined,
            rootElement: proxy,
            suggestedInjectionPoint: node.lastElementChild || node,
            ...refs.subscriptions
        });
        function run() {
            collectPostInfo(node, cancel).then((result)=>{
                if (!result) return;
                refs.postID.value = result.postId;
                refs.postBy.value = result.writers?.author.identifier || null;
                refs.nickname.value = result.writers?.author.nickname || null;
                refs.avatarURL.value = result.writers?.author.avatar || null;
                refs.postCoAuthors.value = result?.writers?.coAuthors.map((x)=>x.identifier ? {
                        author: x.identifier,
                        avatarURL: x.avatar ? new URL(x.avatar) : undefined,
                        post: new post/* PostIdentifier */._(x.identifier, result.postId),
                        nickname: x.nickname
                    } : undefined).filter(Boolean) || [];
            });
        }
        run();
        postStore.set(proxy, postInfo);
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: ()=>postStore.delete(proxy)
        };
    }), cancel);
}
const PostProviderMirror = {
    posts: utils/* creator */.D.EmptyPostProviderState(),
    start (cancel) {
        registerPostCollectorInner(this.posts, cancel);
    }
};

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/collecting/theme.ts




function resolveThemeSettingsInner(ref, cancel) {
    function updateThemeColor() {
        ref.value = {
            ...ref.value,
            mode: document.documentElement.dataset.theme ?? specs/* ThemeMode */.hY.Light
        };
    }
    updateThemeColor();
    new MutationObserverWatcher/* MutationObserverWatcher */.U(themeSelector()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    }, cancel);
}
const ThemeSettingsProviderMirror = {
    recognized: utils/* creator */.D.EmptyThemeSettingsProviderState(),
    async start (cancel) {
        resolveThemeSettingsInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/customization/custom.ts




function useThemeMirrorVariant(baseTheme) {
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    return (0,react.useMemo)(()=>{
        (0,immer/* setAutoFreeze */.Fl)(false);
        const MirrorTheme = (0,immer/* produce */.Uy)(baseTheme, (theme)=>{
            theme.components = theme.components || {};
            theme.components.MuiTypography = {
                styleOverrides: {
                    root: {
                        fontFamily: '"Inter var",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
                    }
                }
            };
        });
        (0,immer/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(MirrorTheme);
    }, [
        baseTheme,
        themeSettings
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/mirror.xyz/ui-provider.ts












// TODO: access chrome permission
const ui_provider_define = {
    ...base/* mirrorBase */.j,
    ...mirrorShared,
    automation: {},
    collecting: {
        identityProvider: IdentityProviderMirror,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderMirror,
        postsProvider: PostProviderMirror,
        themeSettingsProvider: ThemeSettingsProviderMirror
    },
    configuration: {
        tipsConfig: {
            enableUserGuide: true
        }
    },
    customization: {
        sharedComponentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteMirror
            }
        },
        useTheme: useThemeMirrorVariant
    },
    init (signal) {
        const profiles = utils/* stateCreator */.Z.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, mirrorShared.networkIdentifier);
        return {
            profiles
        };
    },
    injection: {
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postActions: injectPostActionsAtMirror,
        tips: injectTips
    }
};
/* harmony default export */ const ui_provider = (ui_provider_define);


/***/ })

}]);
//# sourceMappingURL=chunk.1337.js.map