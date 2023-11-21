"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9681],{

/***/ 9681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils.ts
var utils = __webpack_require__(16900);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(80029);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/hasPayloadLike.ts
var hasPayloadLike = __webpack_require__(86925);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/base.ts
var base = __webpack_require__(99821);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/shared.ts



const instagramShared = {
    ...base/* instagramBase */.j,
    utils: {
        createPostContext: (0,create_post_context/* createSiteAdaptorSpecializedPostContext */.L)({
            hasPayloadLike: hasPayloadLike/* hasPayloadLike */.s
        })
    }
};

// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/LiveSelector.js
var LiveSelector = __webpack_require__(23212);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/utils/selector.ts

function querySelector(selector, singleMode = true) {
    const ls = new LiveSelector/* LiveSelector */.j().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
}
function querySelectorAll(selector) {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll(selector);
}
function searchProfileTabListLastChildSelector() {
    return querySelector('section main  div[role="tablist"] > :last-child');
}
function searchProfileTabPageSelector() {
    return querySelector('section main[role="main"] > div > :last-child');
}
function searchProfileTabSelector() {
    return querySelector('section main div[role="tablist"]  a[aria-selected="false"]');
}
function searchProfileActiveTabSelector() {
    return querySelector('section main  div[role="tablist"] a[aria-selected="true"]');
}
function bioDescriptionSelector() {
    return querySelector('section main header section > div:last-child h1');
}
function searchNickNameSelector() {
    return querySelector('section main header section > div:last-child > div > span');
}
function searchProfileTabArticlePageSelector() {
    return querySelector('section main div[role="tablist"]');
}
function searchInstagramAvatarListSelector() {
    return querySelector('[role="dialog"] .piCib > div > form').closest(1).querySelector('button');
}
function searchInstagramAvatarSelector() {
    return querySelector('header img, img[data-testid="user-avatar"]');
}
function searchInstagramProfileAvatarButtonSelector() {
    return querySelector('section main header button > img').closest(3);
}
function searchInstagramAvatarSettingDialog() {
    return querySelector('#ssrb_root_start').closest(1);
}
function searchInstagramAvatarEditPageSettingDialog() {
    return querySelector('#react-root');
}
function searchInstagramProfileEditButton() {
    return querySelector('a[href="/accounts/edit/"]');
}
function searchInstagramPostAvatarSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll('[role="button"] > a > img[crossorigin="anonymous"]');
}
function inpageAvatarSelector() {
    return querySelectorAll('[role=main] article[role=presentation] header [role=button]');
}
function searchInstagramHandleSelector() {
    return querySelector('a[role=link]:has(img[alt$=" profile picture"])');
}
function searchInstagramSelfAvatarSelector() {
    return querySelector('div[style="transform: translateX(0px);"] > div > div > div:last-child > div > span[aria-describedby] > div > a img[crossorigin="anonymous"]');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(97250);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/utils/user.ts



function getBioDescription() {
    const bio = bioDescriptionSelector().evaluate();
    return bio ? (0,collectNodeText/* collectNodeText */.a)(bio) : '';
}
function getPersonalHomepage() {
    const node = searchInstagramHandleSelector().evaluate();
    if (!node) return;
    return node.href;
}
function getNickname() {
    const node = searchNickNameSelector().evaluate();
    return node ? (0,collectNodeText/* collectNodeText */.a)(node) : '';
}
function getUserId() {
    const node = searchInstagramHandleSelector().evaluate();
    if (!node) return;
    return (0,compact/* default */.Z)(node.getAttribute('href')?.split('/')).pop();
}
function getAvatar() {
    const node = searchInstagramSelfAvatarSelector().evaluate();
    if (!node) return '';
    const imageURL = node.getAttribute('src') ?? '';
    return imageURL.trim();
}
const INSTAGRAM_AVATAR_ID_MATCH = /(\w+).(?:png|jpg|gif|bmp)/;
function getAvatarId(avatarURL) {
    if (!avatarURL) return '';
    const _url = new URL(avatarURL);
    const match = _url.pathname.match(INSTAGRAM_AVATAR_ID_MATCH);
    if (!match) return '';
    return match[1];
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/collecting/identity-provider.ts







function resolveLastRecognizedIdentityInner(ref, cancel) {
    const handleSelector = searchInstagramHandleSelector();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(500);
        const homepage = getPersonalHomepage();
        const handle = getUserId();
        const avatar = getAvatar();
        ref.value = {
            identifier: profile/* ProfileIdentifier */.W.of(base/* instagramBase */.j.networkIdentifier, handle).unwrapOr(undefined),
            nickname: handle,
            avatar,
            homepage
        };
    };
    assign();
    const createWatcher = (selector)=>{
        new MutationObserverWatcher/* MutationObserverWatcher */.U(selector).addListener('onAdd', ()=>assign()).addListener('onChange', ()=>assign()).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'href'
            ]
        }, cancel);
        window.addEventListener('locationchange', assign, {
            signal: cancel
        });
    };
    createWatcher(handleSelector);
}
const IdentityProviderInstagram = {
    async start (signal) {
        resolveLastRecognizedIdentityInner(this.recognized, signal);
    },
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState()
};

// EXTERNAL MODULE: ./packages/typed-message/base/src/core/image.ts
var core_image = __webpack_require__(93349);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/tuple.ts
var tuple = __webpack_require__(17425);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/collecting/posts.ts








const posts = new LiveSelector/* LiveSelector */.j().querySelectorAll('main[role="main"] article[role="presentation"][tabindex="-1"]');
const PostProviderInstagram = {
    posts: utils/* creator */.D.EmptyPostProviderState(),
    start (signal) {
        collectPostsInstagramInner(this.posts, signal);
    }
};
function collectPostsInstagramInner(store, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(posts).useForeach((node, key, metadata)=>{
        const { subscriptions, ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = instagramShared.utils.createPostContext({
            comments: undefined,
            rootElement: metadata,
            suggestedInjectionPoint: metadata.realCurrent.querySelector('header+div+div') || metadata.realCurrent,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            const nextTypedMessage = [];
            info.postBy.value = getPostBy(metadata);
            info.postID.value = getPostID(metadata);
            const img = node.querySelectorAll('img')[1];
            if (img) {
                nextTypedMessage.push((0,core_image/* makeTypedMessageImage */.a)(img.src, img));
                info.postMetadataImages.add(img.src);
            } else nextTypedMessage.push((0,core_image/* makeTypedMessageImage */.a)(''));
            info.postMessage.value = (0,tuple/* makeTypedMessageTuple */.Zw)(nextTypedMessage);
        }
        collectPostInfo();
        return {
            onNodeMutation: collectPostInfo,
            onTargetChanged: collectPostInfo,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getPostBy(node) {
    if (node.destroyed) return null;
    // the first a
    const author = node.current.querySelector('a');
    if (!author) return null;
    const href = new URL(author.href).pathname;
    if (href.startsWith('/') && href.endsWith('/') && href.slice(1, -1).includes('/') === false) {
        return profile/* ProfileIdentifier */.W.of(base/* instagramBase */.j.networkIdentifier, href.slice(1, -1)).unwrapOr(null);
    }
    return null;
}
function getPostID(node) {
    if (node.destroyed) return null;
    return node.current?.querySelector('span a[href^="/"]')?.text || null;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/collecting/theme.ts


function resolveThemeSettingsInner(ref, cancel) {
    function updateThemeColor(isDarkMode) {
        ref.value = {
            ...ref.value,
            mode: isDarkMode ? specs/* ThemeMode */.hY.Dark : specs/* ThemeMode */.hY.Light
        };
    }
    updateThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--ig-primary-background') === '0, 0, 0');
    const observer = new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
            updateThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--ig-primary-background') === '0, 0, 0');
        });
    });
    observer.observe(document.querySelector('html'), {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: [
            'class'
        ]
    });
    cancel.addEventListener('abort', ()=>observer.disconnect());
}
const ThemeSettingsProviderInstagram = {
    recognized: utils/* creator */.D.EmptyThemeSettingsProviderState(),
    async start (cancel) {
        resolveThemeSettingsInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(10791);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/StartSetupGuide.tsx + 18 modules
var StartSetupGuide = __webpack_require__(14712);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PageInspector.tsx + 6 modules
var PageInspector = __webpack_require__(87486);
// EXTERNAL MODULE: ./packages/injected-script/sdk/index.ts
var sdk = __webpack_require__(46110);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostInspector.tsx + 15 modules
var PostInspector = __webpack_require__(10642);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/post-inspector.ts


const map = new WeakMap();
function getShadowRoot(node) {
    if (map.has(node)) return map.get(node);
    const dom = node.attachShadow(src/* Flags */.v.shadowRootInit);
    map.set(node, dom);
    return dom;
}
function injectPostInspectorInstagram(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        injectionPoint: (post)=>getShadowRoot(post.suggestedInjectionPoint)
    }, {
        slotPosition: 'after'
    })(current, signal);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/collecting/identity.ts







function resolveCurrentVisitingIdentityInner(ref, cancel) {
    const avatarSelector = searchInstagramAvatarSelector();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(500);
        const bio = getBioDescription();
        const homepage = getPersonalHomepage();
        const nickname = getNickname();
        const handle = getUserId();
        const avatar = getAvatar();
        ref.value = {
            identifier: profile/* ProfileIdentifier */.W.of(base/* instagramBase */.j.networkIdentifier, handle).unwrapOr(undefined),
            nickname,
            avatar,
            bio,
            homepage
        };
    };
    const createWatcher = (selector)=>{
        new MutationObserverWatcher/* MutationObserverWatcher */.U(selector).addListener('onAdd', ()=>assign()).addListener('onChange', ()=>assign()).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'src',
                'content'
            ]
        }, cancel);
        window.addEventListener('locationchange', assign, {
            signal: cancel
        });
    };
    assign();
    createWatcher(avatarSelector);
}
const CurrentVisitingIdentityProviderInstagram = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(72552);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(78678);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/storage/useSaveStringStorage.ts
var useSaveStringStorage = __webpack_require__(86673);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/utils/index.ts + 1 modules
var src_utils = __webpack_require__(58833);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatar.tsx + 1 modules
var NFTAvatar = __webpack_require__(5724);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/NFT/NFTAvatarSettingDialog.tsx














const useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {},
        wallet: {
            height: 120,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));
function NFTAvatarSettingDialog() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [open, setOpen] = (0,react.useState)(false);
    const { classes } = useStyles();
    const { account } = (0,useContext/* useChainContext */.ql)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const saveNFTAvatar = (0,useSaveStringStorage/* useSaveStringStorage */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const onChange = (0,react.useCallback)(async (info)=>{
        try {
            if (!info.token.metadata?.imageURL || !info.token.contract?.address) return;
            if (!identity.identifier) return;
            const image = await (0,src_utils/* toPNG */.mr)(info.token.metadata.imageURL);
            if (!image || !account) return;
            const { profile_pic_url_hd } = await entry/* Instagram */.mr.uploadUserAvatar(image, identity.identifier.userId);
            const avatarId = getAvatarId(profile_pic_url_hd);
            const avatarInfo = await saveNFTAvatar(identity.identifier.userId, account, {
                address: info.token.contract.address,
                userId: identity.identifier.userId,
                tokenId: info.token.tokenId,
                avatarId,
                chainId: info.token.chainId ?? types/* ChainId */.a_.Mainnet,
                schema: info.token.schema ?? types/* SchemaType */.XQ.ERC721,
                pluginId: info.pluginID
            });
            if (!avatarInfo) {
                // eslint-disable-next-line no-alert
                alert('Sorry, failed to save NFT Avatar. Please set again.');
                setOpen(false);
                return;
            }
            // If the avatar is set successfully, reload the page
            window.location.reload();
            setOpen(false);
        } catch (error) {
            if (error instanceof Error) {
                // eslint-disable-next-line no-alert
                alert(error.message);
                return;
            }
        }
    }, [
        identity,
        account,
        saveNFTAvatar
    ]);
    const onClose = (0,react.useCallback)(()=>setOpen(false), []);
    (0,useMount/* default */.Z)(()=>{
        return Messages/* MaskMessages */.q.events.nftAvatarSettingDialogUpdated.on((data)=>setOpen(data.open));
    });
    const onClick = (0,react.useCallback)(()=>{
        modals/* SelectProviderModal */.ge.open();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        keepMounted: true,
        open: open,
        onClose: onClose,
        title: t.set_nft_profile_photo(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            style: {
                padding: 16
            },
            children: account ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
                onChange: onChange,
                classes: {
                    root: classes.root
                }
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.wallet,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: onClick,
                    children: t.connect_your_wallet()
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/NFT/ProfileNFTAvatar.tsx











async function injectProfileNFTAvatarInInstagram(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchInstagramAvatarListSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButtonInDialog, {}));
    const dialogWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchInstagramAvatarEditPageSettingDialog());
    (0,startWatch/* startWatch */.f)(dialogWatcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(dialogWatcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarSettingDialog, {}));
}
const ProfileNFTAvatar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        root: {
            width: '100%',
            fontSize: props.fontSize,
            lineHeight: 1.5,
            minHeight: props.minHeight,
            borderTop: props.borderTop,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ED4956',
            fontWeight: 600,
            cursor: 'pointer'
        }
    }));
function NFTAvatarButtonInDialog() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [style, setStyle] = (0,react.useState)({
        fontSize: 12,
        minHeight: 48,
        // Instagram css var
        borderTop: '1px solid rgba(var(--b6a,219,219,219),1)'
    });
    const { classes } = ProfileNFTAvatar_useStyles(style);
    const setStyleWithSelector = (0,react.useCallback)(()=>{
        const dom = searchInstagramAvatarListSelector().evaluate();
        if (!dom) return;
        const css = window.getComputedStyle(dom);
        setStyle({
            minHeight: Number(css.minHeight.replace('px', '')),
            fontSize: Number(css.fontSize.replace('px', '')),
            color: css.color,
            borderTop: css.borderTop
        });
    }, []);
    const onClick = (0,react.useCallback)(()=>{
        Messages/* MaskMessages */.q.events.nftAvatarSettingDialogUpdated.sendToLocal({
            open: true
        });
    }, []);
    (0,react.useLayoutEffect)(setStyleWithSelector, []);
    (0,useLocationChange/* useLocationChange */.S)(setStyleWithSelector);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        onClick: onClick,
        children: [
            "🔥 ",
            t.use_nft()
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
var max = __webpack_require__(50162);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useNFTAvatar.ts
var useNFTAvatar = __webpack_require__(43784);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useWallet.ts
var useWallet = __webpack_require__(15189);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useNFT.ts
var useNFT = __webpack_require__(664);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(40897);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(69187);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/NFT/NFTAvatarInInstagram.tsx













function injectNFTAvatarInInstagram(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchInstagramAvatarSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInInstagram, {}));
}
const NFTAvatarInInstagram_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
        },
        text: {
            fontSize: '20px !important',
            fontWeight: 700
        },
        icon: {
            width: '19px !important',
            height: '19px !important'
        }
    }));
function NFTAvatarInInstagram() {
    const { classes } = NFTAvatarInInstagram_useStyles();
    const [avatar, setAvatar] = (0,react.useState)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const location = (0,useLocation/* default */.Z)();
    const { value: nftAvatar } = (0,useNFTAvatar/* useNFTAvatar */.i)(identity.identifier?.userId, constants/* RSS3_KEY_SITE */.q1.INSTAGRAM);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { loading: loadingWallet, value: storage } = (0,useWallet/* useWallet */.O)(nftAvatar?.userId);
    const { value: nftInfo, loading: loadingNFTInfo } = (0,useNFT/* useNFT */.e)(storage?.address ?? account, nftAvatar?.address, nftAvatar?.tokenId, nftAvatar?.pluginId, nftAvatar?.chainId);
    const windowSize = (0,useWindowSize/* default */.Z)();
    const showAvatar = (0,react.useMemo)(()=>{
        if (location.pathname?.includes('/edit')) return false;
        return getAvatarId(identity.avatar ?? '') === avatar?.avatarId;
    }, [
        avatar?.avatarId,
        identity.avatar,
        location.pathname
    ]);
    const size = (0,react.useMemo)(()=>{
        const ele = searchInstagramAvatarSelector().evaluate();
        if (!ele) return 0;
        const style = window.getComputedStyle(ele);
        return (0,max/* default */.Z)([
            146,
            Number.parseInt(style.width.replace('px', '') ?? 0, 10)
        ]);
    }, [
        windowSize
    ]);
    (0,react.useEffect)(()=>{
        if (!showAvatar) return;
        let containerDom;
        if (searchInstagramAvatarSelector().evaluate()?.parentElement?.tagName === 'SPAN') {
            containerDom = searchInstagramAvatarSelector().closest(1);
        } else {
            containerDom = searchInstagramAvatarSelector().closest(2);
        }
        const style = document.createElement('style');
        style.innerText = `
                ${RainbowBox/* rainbowBorderKeyFrames */.v.styles}

                .rainbowBorder {
                    animation: ${RainbowBox/* rainbowBorderKeyFrames */.v.name} 6s linear infinite;
                    box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
                    transition: .125s ease;
                    border: 2px solid #00f8ff;
                }
            `;
        const parentDom = searchInstagramAvatarSelector().closest(2).evaluate();
        parentDom?.appendChild(style);
        containerDom.evaluate()?.classList.add('rainbowBorder');
        return ()=>{
            if (parentDom?.lastElementChild?.tagName === 'STYLE') {
                parentDom.removeChild(parentDom.lastElementChild);
            }
            containerDom.evaluate()?.classList.remove('rainbowBorder');
        };
    }, [
        location.pathname,
        showAvatar
    ]);
    (0,react.useEffect)(()=>setAvatar(nftAvatar), [
        nftAvatar,
        location
    ]);
    if (!avatar || !size || !showAvatar || loadingWallet || loadingNFTInfo) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
        nftInfo: nftInfo,
        hasRainbow: false,
        size: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        }
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatarButton.tsx
var NFTAvatarButton = __webpack_require__(13590);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/NFT/NFTAvatarEditProfile.tsx











function injectOpenNFTAvatarEditProfileButton(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchInstagramProfileAvatarButtonSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInInstagram, {}));
    const dialogWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchInstagramAvatarSettingDialog());
    (0,startWatch/* startWatch */.f)(dialogWatcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(dialogWatcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarSettingDialog, {}));
}
const NFTAvatarEditProfile_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {
            marginTop: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '4px !important',
            height: 30,
            width: 134
        },
        text: {
            fontSize: 12,
            lineHeight: '12px'
        }
    }));
function openNFTAvatarSettingDialog() {
    Messages/* MaskMessages */.q.events.nftAvatarSettingDialogUpdated.sendToLocal({
        open: true
    });
}
function OpenNFTAvatarEditProfileButtonInInstagram() {
    const location = (0,useLocation/* default */.Z)();
    const { classes } = NFTAvatarEditProfile_useStyles();
    const editButton = (0,react.useMemo)(()=>searchInstagramProfileEditButton().evaluate(), [
        location.pathname
    ]);
    if (location.pathname?.includes('/edit') || !editButton) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
        onClick: openNFTAvatarSettingDialog,
        classes: {
            root: classes.root,
            text: classes.text
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Proxy.js
var Proxy = __webpack_require__(6806);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/utils/avatar.ts

function getInjectNodeInfo(element) {
    const avatarId = getAvatarId(element.src);
    if (!avatarId) return;
    // instagram bug, when page routing is switched, the avatar size on the timeline will initially be 150.
    return {
        element,
        width: element.width === 150 ? 32 : element.width,
        height: element.height === 150 ? 32 : element.height,
        avatarId
    };
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(43738);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/NFT/NFTAvatarInTimeline.tsx











const NFTAvatarInTimeline_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {
            transform: 'scale(1)!important'
        }
    }));
const TimeLineRainbow = /*#__PURE__*/ (0,react.memo)(({ userId, avatarId, width, height })=>{
    const { classes } = NFTAvatarInTimeline_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
            userId: userId,
            avatarId: avatarId,
            width: width,
            height: height,
            classes: {
                root: classes.root
            },
            siteKey: constants/* RSS3_KEY_SITE */.q1.INSTAGRAM
        })
    });
});
function _(selector, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(selector()).useForeach((element)=>{
        let remove = noop/* default */.Z;
        const run = async ()=>{
            const href = element.parentNode?.href;
            if (!href) return;
            const id = new URL(href).pathname.replaceAll('/', '');
            if (!id) return;
            const info = getInjectNodeInfo(element);
            if (!info) return;
            const proxy = (0,Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = info.element;
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(TimeLineRainbow, {
                userId: id,
                avatarId: info.avatarId,
                width: info.width - 4,
                height: info.height - 4
            }));
            remove = root.destroy;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: ()=>remove()
        };
    }), signal);
}
async function injectUserNFTAvatarAtInstagram(signal) {
    _(searchInstagramPostAvatarSelector, signal);
}

// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(5081);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(86584);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/ProfileTab.tsx












function injectProfileTabAtInstagram(signal) {
    let tabInjected = false;
    const contentWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabPageSelector()).useForeach(()=>{
        const elePage = searchProfileTabPageSelector().evaluate();
        if (elePage && !tabInjected) {
            const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabListLastChildSelector());
            (0,startWatch/* startWatch */.f)(watcher, signal);
            (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
                signal
            }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabAtInstagram, {}));
            tabInjected = true;
        }
    });
    (0,startWatch/* startWatch */.f)(contentWatcher, signal);
}
function getStyleProps(activeColor) {
    const EMPTY_STYLE = {};
    const eleTab = searchProfileTabSelector().evaluate();
    const style = eleTab ? window.getComputedStyle(eleTab) : EMPTY_STYLE;
    return {
        color: activeColor.color,
        fontSize: style.fontSize,
        padding: style.paddingBottom,
        height: style.height,
        hover: activeColor.activeColor,
        line: activeColor.activeColor
    };
}
const ProfileTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>{
    return {
        root: {
            '&:hover': {
                cursor: 'pointer'
            },
            display: '-webkit-box',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 60
        },
        button: {
            fontSize: props.fontSize,
            height: props.height,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderTop: '1px solid transparent',
            fontWeight: 'var(--font-weight-system-semibold)',
            color: 'rgb(var(--ig-secondary-text))'
        },
        selected: {
            borderTop: `1px solid ${props.hover}`,
            color: props.hover,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                borderTop: 'unset'
            }
        },
        icon: {
            [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
                height: props.fontSize,
                width: props.fontSize,
                paddingRight: 4
            }
        }
    };
});
function getActiveColor() {
    const activeTab = searchProfileActiveTabSelector().evaluate()?.firstElementChild;
    if (!activeTab) return '';
    const activeStyle = window.getComputedStyle(activeTab);
    return activeStyle.color;
}
function getColor() {
    const tab = searchProfileTabSelector().evaluate();
    if (!tab) return '';
    const style = window.getComputedStyle(tab);
    return style.color;
}
function handler() {
    Messages/* MaskMessages */.q.events.profileTabActive.sendToLocal({
        active: false
    });
    Messages/* MaskMessages */.q.events.profileTabHidden.sendToLocal({
        hidden: true
    });
    const activeTab = searchProfileActiveTabSelector().evaluate();
    if (activeTab?.style) {
        activeTab.style.borderTop = '';
        activeTab.style.color = '';
    }
    const ele = searchProfileTabPageSelector().evaluate();
    if (ele?.style) {
        ele.style.display = '';
    }
}
function ProfileTabAtInstagram() {
    const isMobile = (0,useMatchXS/* useMatchXS */.I)();
    const location = (0,useLocation/* default */.Z)();
    const [styles, setStyles] = (0,react.useState)({
        color: '',
        hover: '',
        fontSize: '',
        height: '',
        padding: ''
    });
    const { activeColor, color } = (0,react.useMemo)(()=>{
        const activeColor = getActiveColor();
        const color = getColor();
        return {
            activeColor,
            color
        };
    }, [
        location.pathname
    ]);
    (0,react.useLayoutEffect)(()=>{
        const tabStyles = getStyleProps({
            activeColor,
            color
        });
        setStyles(tabStyles);
    }, []);
    const { classes } = ProfileTab_useStyles(styles);
    function reset() {
        const activeTab = searchProfileActiveTabSelector().evaluate();
        if (activeTab?.style) {
            activeTab.style.borderTop = '';
            activeTab.style.color = '';
        }
        activeTab?.removeEventListener('click', handler);
        if (isMobile) {
            const activeTab = searchProfileActiveTabSelector().evaluate()?.firstElementChild;
            if (activeTab?.tagName.toUpperCase() === 'SVG') {
                const ele = activeTab;
                if (ele.style) {
                    ele.style.color = '';
                    ele.style.fill = '';
                }
            }
        }
        const ele = searchProfileTabPageSelector().evaluate();
        if (ele?.style) {
            ele.style.display = '';
        }
    }
    function clear() {
        const style = getStyleProps({
            activeColor,
            color
        });
        const activeTab = searchProfileActiveTabSelector().evaluate();
        if (activeTab?.style) {
            activeTab.style.setProperty('border-top', 'none', 'important');
            activeTab.style.color = style.color;
        }
        activeTab?.addEventListener('click', handler);
        if (isMobile) {
            const activeTab = searchProfileActiveTabSelector().evaluate()?.firstElementChild;
            if (activeTab?.tagName.toUpperCase() === 'SVG') {
                const ele = activeTab;
                if (ele.style) {
                    ele.style.color = style.color;
                    ele.style.fill = style.color;
                }
            }
        }
        const ele = searchProfileTabPageSelector().evaluate();
        if (ele?.style) {
            ele.style.display = 'none';
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "Web3",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Collectible, {
            className: classes.icon
        }),
        classes: {
            root: classes.root,
            button: classes.button,
            selected: classes.selected
        },
        reset: reset,
        clear: clear
    });
}

// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTabContent.tsx + 1 modules
var ProfileTabContent = __webpack_require__(87412);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/ProfileTabContent.tsx







function injectProfileTabContentAtInstagram(signal) {
    injectProfileTabContentHaveArticle(signal);
}
function injectProfileTabContentHaveArticle(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabArticlePageSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtInstagram, {}));
}
function ProfileTabContent_getStyleProps() {
    const activeTab = searchProfileActiveTabSelector().evaluate();
    return {
        backgroundColor: activeTab ? window.getComputedStyle(activeTab).backgroundColor : undefined,
        fontFamily: activeTab ? window.getComputedStyle(activeTab).fontFamily : undefined
    };
}
const ProfileTabContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const props = ProfileTabContent_getStyleProps();
    return {
        root: {
            position: 'relative'
        },
        text: {
            paddingTop: 29,
            paddingBottom: 29,
            '& > p': {
                fontSize: 28,
                fontFamily: props.fontFamily,
                fontWeight: 700,
                color: (0,vars/* getMaskColor */.n)(theme).textPrimary
            }
        },
        button: {
            backgroundColor: props.backgroundColor,
            color: 'white',
            marginTop: 18,
            '&:hover': {
                backgroundColor: props.backgroundColor
            }
        }
    };
});
function ProfileTabContentAtInstagram() {
    const { classes } = ProfileTabContent_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: {
            root: classes.root,
            button: classes.button,
            text: classes.text
        }
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var src_types = __webpack_require__(62476);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/Avatar.tsx
var Avatar = __webpack_require__(39570);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/injection/Avatar/index.tsx









async function injectAvatar(signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(inpageAvatarSelector()).useForeach((ele)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const run = async ()=>{
            const proxy = (0,Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = ele.firstChild;
            // create stacking context
            ele.style.position = 'relative';
            // TODO fetch userId
            const userId = '';
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2
                },
                children: userId ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* Avatar */.q, {
                    userId: userId,
                    sourceType: src_types.Plugin.SiteAdaptor.AvatarRealmSourceType.Post
                }) : null
            }));
            remover = root.destroy;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: remove
        };
    }), signal);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/customization/custom.ts




function useThemeInstagramVariant(baseTheme) {
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    return (0,react.useMemo)(()=>{
        (0,immer/* setAutoFreeze */.Fl)(false);
        const InstagramTheme = (0,immer/* produce */.Uy)(baseTheme, (theme)=>{
            theme.components = theme.components || {};
            theme.components.MuiTypography = {
                styleOverrides: {
                    root: {
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }
                }
            };
        });
        (0,immer/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(InstagramTheme);
    }, [
        baseTheme,
        themeSettings
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/instagram.com/ui-provider.ts


















const ui_provider_define = {
    ...instagramShared,
    ...base/* instagramBase */.j,
    automation: {
        nativeCompositionDialog: {
            async attachImage (url, options) {
                (0,sdk/* pasteInstagram */.X2)(new Uint8Array(await url.arrayBuffer()));
            }
        }
    },
    collecting: {
        identityProvider: IdentityProviderInstagram,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderInstagram,
        postsProvider: PostProviderInstagram,
        themeSettingsProvider: ThemeSettingsProviderInstagram
    },
    configuration: {},
    customization: {
        useTheme: useThemeInstagramVariant
    },
    init (signal) {
        const profiles = utils/* stateCreator */.Z.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, base/* instagramBase */.j.networkIdentifier);
        // No need to init cause this network is not going to support those features now.
        return {
            profiles
        };
    },
    injection: {
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        postInspector: injectPostInspectorInstagram,
        profileAvatar: injectNFTAvatarInInstagram,
        enhancedProfileNFTAvatar: injectProfileNFTAvatarInInstagram,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        userAvatar: injectUserNFTAvatarAtInstagram,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        profileTab: injectProfileTabAtInstagram,
        profileTabContent: injectProfileTabContentAtInstagram,
        openNFTAvatarSettingDialog: openNFTAvatarSettingDialog,
        /* newPostComposition: {
            start: newPostCompositionInstagram,
            supportedInputTypes: { text: true, image: true },
            supportedOutputTypes: { text: false, image: true },
        },*/ avatar: injectAvatar
    }
};
/* harmony default export */ const ui_provider = (ui_provider_define);


/***/ }),

/***/ 5724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ NFTAvatar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(47675);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./packages/shared/src/utils/isSameNFT.ts
var isSameNFT = __webpack_require__(61402);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAssets.ts
var useNonFungibleAssets = __webpack_require__(55149);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(68684);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(70429);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTImage.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            width: 100,
            height: 100,
            border: '1px solid transparent',
            boxSizing: 'border-box',
            borderRadius: 8
        },
        icon: {
            position: 'absolute',
            top: 5,
            right: 5,
            color: theme.palette.maskColor.primary
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            boxSizing: 'border-box',
            borderRadius: 8
        },
        selected: {
            borderColor: theme.palette.maskColor.primary
        },
        imageLoading: {
            color: theme.palette.maskColor.main,
            height: '20px !important',
            width: '20px !important'
        },
        imageContainer: {
            background: theme.palette.mode === 'dark' ? 'linear-gradient(180deg, #202020 0%, #181818 100%)' : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)',
            borderRadius: 8,
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        },
        tooltip: {
            whiteSpace: 'nowrap',
            maxWidth: '100%'
        }
    }));
const NFTImage = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { className, token, onSelect, selected } = props;
    const { classes, cx } = useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const name = token.collection?.name || token.contract?.name;
    const uiTokenId = token.tokenId ? Others.formatTokenId(token.tokenId, 4) ?? `#${token.tokenId}` : name;
    const title = name ? `${name} ${uiTokenId}` : token.metadata?.name ?? '';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
        title: title,
        arrow: true,
        classes: {
            tooltip: classes.tooltip
        },
        disableInteractive: true,
        placement: "top",
        PopperProps: {
            disablePortal: true,
            popperOptions: {
                strategy: 'absolute'
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: cx(classes.root, className, selected ? classes.selected : ''),
            onClick: ()=>onSelect(token),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskAvatar, {
                        size: 30
                    }),
                    classes: {
                        imageLoading: classes.imageLoading,
                        container: classes.imageContainer
                    },
                    src: token.metadata?.imageURL ?? '',
                    className: classes.image
                }),
                selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                    className: classes.icon,
                    size: 24
                }) : null
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatar.tsx










const NFTAvatar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {},
        title: {
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        galleryItem: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 4,
            height: 200,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflowY: 'auto'
        },
        skeleton: {
            width: 100,
            height: 100,
            objectFit: 'cover',
            boxSizing: 'border-box'
        },
        changeButton: {
            fontSize: 14
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: theme.spacing(1),
            gap: 16
        },
        list: {
            gridGap: 13,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            padding: 8,
            overflowY: 'auto'
        },
        nftItem: {
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            overflow: 'hidden',
            padding: 0,
            flexDirection: 'column',
            borderRadius: 12,
            userSelect: 'none',
            justifyContent: 'center',
            lineHeight: 0
        }
    }));
function NFTAvatar(props) {
    const { onChange, hideWallet } = props;
    const { classes } = NFTAvatar_useStyles(undefined, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const [selectedToken, setSelectedToken] = (0,react.useState)();
    const [customCollectibles, setCustomCollectibles] = (0,react.useState)([]);
    const t = (0,i18n_generated/* useAvatarTrans */.X)();
    const { value: collectibles = constants/* EMPTY_LIST */.rP, done: loadFinish, next: nextPage, error: loadError } = (0,useNonFungibleAssets/* useNonFungibleAssets */.H)(pluginID, undefined, {
        chainId,
        account
    });
    const onClick = (0,react.useCallback)(async ()=>{
        if (!selectedToken) return;
        onChange({
            account,
            token: selectedToken,
            image: selectedToken.metadata?.imageURL ?? '',
            pluginID
        });
        setSelectedToken(undefined);
    }, [
        onChange,
        selectedToken,
        pluginID
    ]);
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID);
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID);
    const handleAddCollectibles = (0,react.useCallback)(async ()=>{
        const results = await modals/* AddCollectiblesModal */.NB.openAndWaitForClose({
            pluginID,
            chainId
        });
        if (!results || !chainId) return;
        const [contract, tokenIds] = results;
        const address = contract.address;
        const allSettled = await Promise.allSettled(tokenIds.map(async (tokenId)=>{
            const [asset, token, isOwner] = await Promise.all([
                Hub.getNonFungibleAsset(address, tokenId, {
                    chainId,
                    account
                }),
                Web3.getNonFungibleToken(address, tokenId, undefined, {
                    chainId
                }),
                Web3.getNonFungibleTokenOwnership(address, tokenId, account, undefined, {
                    chainId
                })
            ]);
            if (!asset?.contract?.chainId || !token.chainId || token.contract?.chainId !== chainId) return;
            if (!isOwner) return;
            return {
                ...token,
                ...asset
            };
        }));
        const tokens = (0,compact/* default */.Z)(allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null));
        if (!tokens.length) return;
        setSelectedToken(tokens[0]);
        setCustomCollectibles((tokens)=>(0,uniqBy/* default */.Z)([
                ...tokens,
                ...tokens
            ], (x)=>x.contract?.address && x.tokenId));
    }, [
        pluginID,
        chainId,
        account
    ]);
    const loadingSkeletons = /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.list,
        children: (0,range/* default */.Z)(8).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                className: classes.nftItem,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "rectangular",
                    className: classes.skeleton
                })
            }, i))
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        children: t.nft_list_title()
                    }),
                    account ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        className: classes.account,
                        children: [
                            t.nft_wallet_label(),
                            ": ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReversedAddress/* ReversedAddress */.i, {
                                address: account,
                                size: 4
                            }),
                            !hideWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "text",
                                onClick: ()=>modals/* SelectProviderModal */.ge.open(),
                                size: "small",
                                className: classes.changeButton,
                                children: t.nft_wallet_change()
                            }) : null
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ChainBoundary/* ChainBoundary */.s, {
                expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                expectedChainId: chainId,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.galleryItem,
                        children: !loadFinish && !loadError && !collectibles.length ? loadingSkeletons : loadError || !collectibles.length && !customCollectibles.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
                            message: t.dashboard_no_collectible_found(),
                            actionLabel: t.retry(),
                            onRetry: nextPage
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                            className: classes.list,
                            children: [
                                (0,uniqBy/* default */.Z)([
                                    ...customCollectibles,
                                    ...collectibles
                                ], (x)=>x.contract?.address && x.tokenId).map((token, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                        className: classes.nftItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImage, {
                                            token: token,
                                            selected: (0,isSameNFT/* isSameNFT */.m)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token, selectedToken),
                                            onSelect: setSelectedToken
                                        }, i)
                                    }, i)),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                                    callback: ()=>{
                                        nextPage?.();
                                    },
                                    children: !loadFinish && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.buttons,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "outlined",
                                size: "small",
                                onClick: handleAddCollectibles,
                                children: t.add_collectible()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "contained",
                                size: "small",
                                onClick: onClick,
                                disabled: !selectedToken,
                                children: t.set_avatar_title()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 43784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useNFTAvatar)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17735);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68422);
/* harmony import */ var _useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61982);



function useNFTAvatar(userId, key) {
    const getNFTAvatar = (0,_useGetNFTAvatar_js__WEBPACK_IMPORTED_MODULE_0__/* .useGetNFTAvatar */ .U)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        const siteType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .getEnhanceableSiteType */ .pZ)();
        if (!siteType) return;
        return getNFTAvatar(userId, siteType, key);
    }, [
        userId,
        key,
        getNFTAvatar
    ]);
}


/***/ }),

/***/ 38655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ ChainBoundary)
});

// UNUSED EXPORTS: ChainBoundaryWithoutContext

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useAllowTestnet.ts



function useAllowTestnet(pluginID) {
    const { Settings } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,use_subscription.useSubscription)(Settings?.allowTestnet ?? ( false ? 0 : Subscriptions/* FALSE */.Dv));
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        tooltip: {
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            borderRadius: 4,
            padding: 10,
            maxWidth: 260
        },
        arrow: {
            color: theme.palette.common.black
        },
        connectWallet: {
            '& > .MuiButton-startIcon': {
                lineHeight: 1
            }
        }
    }));
/** The expected network plugin ID */ /** The expected sub-network under the network plugin */ /** Judge the network is available for children components */ function ChainBoundaryWithoutContext(props) {
    const { expectedPluginID, expectedChainId, expectedAccount, actualNetworkPluginID, switchText, forceShowingWrongNetworkButton = false, disableConnectWallet = false, predicate = (actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { pluginID: actualPluginID } = (0,useContext/* useNetworkContext */.gK)(actualNetworkPluginID);
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(actualPluginID);
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const { account, chainId: actualChainId, providerType: actualProviderType } = (0,useContext/* useChainContext */.ql)({
        account: expectedAccount
    });
    const expectedOthers = (0,useWeb3Others/* useWeb3Others */.v)(expectedPluginID);
    const expectedAllowTestnet = useAllowTestnet(expectedPluginID);
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)(actualPluginID);
    const expectedChainName = expectedOthers.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(expectedPluginID, expectedChainId);
    const expectedChainAllowed = expectedOthers.chainResolver.isValidChainId(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID === expectedPluginID;
    const isMatched = predicate(actualPluginID, actualChainId);
    const [{ loading }, onSwitchChain] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (actualProviderType !== types/* ProviderType */.lP.WalletConnect || isMatched || !expectedChainAllowed) return;
            await Web3.switchChain?.(expectedChainId);
            await (0,esm/* delay */.gw)(1500);
            return 'complete';
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === 'Chain currently not supported' || error.message === 'Invalid Request') {
                    showSnackbar(t.plugin_wallet_switch_network_title(), {
                        processing: false,
                        variant: 'error',
                        message: t.plugin_wallet_unsupported_chain({
                            network: expectedChainName ?? ''
                        }),
                        autoHideDuration: 5000
                    });
                } else {
                    showSnackbar(t.plugin_wallet_switch_network_title(), {
                        processing: false,
                        variant: 'error',
                        message: t.plugin_wallet_switch_chain_failed(),
                        autoHideDuration: 5000
                    });
                }
            }
            return 'failed';
        }
    }, [
        expectedChainAllowed,
        isMatched,
        expectedChainId,
        actualProviderType,
        Web3,
        expectedChainName
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip,
                arrow: classes.arrow
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: props.className,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                children: children
            })
        });
    };
    if (!chainIdValid && !expectedChainAllowed && forceShowingWrongNetworkButton) return renderBox(!props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        fullWidth: true,
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
            size: 18
        }),
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonPromiseProps,
        children: t.plugin_wallet_wrong_network()
    }) : null);
    // No wallet connected
    if (!account && !disableConnectWallet) return renderBox(!props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: classes.connectWallet,
        fullWidth: true,
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
            size: 18
        }),
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonPromiseProps,
        children: t.plugin_wallet_connect_a_wallet()
    }) : null);
    // Network mismatch
    if (!isPluginIDMatched) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            fullWidth: true,
            className: classes.switchButton,
            disabled: actualProviderType === types/* ProviderType */.lP.WalletConnect,
            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                mainIcon: expectedNetworkDescriptor?.icon,
                size: 18
            }),
            sx: props.ActionButtonPromiseProps?.sx,
            onClick: ()=>modals/* SelectProviderModal */.ge.open(),
            ...props.ActionButtonPromiseProps,
            children: t.plugin_wallet_change_wallet()
        }), actualProviderType === types/* ProviderType */.lP.WalletConnect ? t.plugin_wallet_connect_tips() : t.plugin_wallet_not_support_network());
    }
    // Provider is Wallet Connect
    if (actualProviderType === types/* ProviderType */.lP.WalletConnect && !isMatched) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                mainIcon: expectedNetworkDescriptor?.icon,
                size: 18
            }),
            onClick: onSwitchChain,
            loading: loading,
            className: classes.switchButton,
            sx: props.ActionButtonPromiseProps?.sx,
            ...props.ActionButtonPromiseProps,
            children: switchText ?? t.plugin_wallet_switch_network({
                network: expectedChainName ?? ''
            })
        }), t.plugin_wallet_connect_tips());
    }
    return props.children;
}
const ChainBoundary = /*#__PURE__*/ (0,react.memo)(function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* RevokeChainContextProvider */.fw, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundaryWithoutContext, {
            ...props
        })
    });
});
ChainBoundary.displayName = 'ChainBoundary';


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

/***/ 61402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isSameNFT)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74765);


function isSameNFT(pluginID, a, b) {
    if (pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) return a.tokenId === b?.tokenId && a.id === b.id;
    if (!a.contract) return false;
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .W)(a.contract.address, b?.contract?.address) && a.contract?.chainId === b?.contract?.chainId && a.tokenId === b?.tokenId;
}


/***/ }),

/***/ 47830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useBlockedNonFungibleTokens)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useBlockedNonFungibleTokens(pluginID, schemaType) {
    const { Token } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const nfts = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Token?.blockedNonFungibleTokens ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return nfts.length && schemaType ? nfts.filter((x)=>x.schema === schemaType) : nfts;
    }, [
        schemaType,
        nfts
    ]);
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


/***/ })

}]);
//# sourceMappingURL=chunk.9681.js.map