(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6833,7696],{

/***/ 65108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ pasteImageToCompositionDefault)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/downloadUrl.ts
var downloadUrl = __webpack_require__(36435);
// EXTERNAL MODULE: ./packages/injected-script/sdk/index.ts
var sdk = __webpack_require__(46110);
;// CONCATENATED MODULE: ./packages/mask/content-script/utils/pasteImageToActiveElements.ts

/**
 * paste image to activeElements
 * @param image
 */ async function pasteImageToActiveElements(image) {
    (0,sdk/* pasteImage */.Mx)(new Uint8Array(await image.arrayBuffer()));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/automation/AttachImageToComposition.ts




function pasteImageToCompositionDefault(hasSucceed) {
    return async function(url, { recover, relatedTextPayload }) {
        const image = typeof url === 'string' ? await (0,downloadUrl/* downloadUrl */.G)(url) : url;
        await (0,esm/* waitDocumentReadyState */.uL)('interactive');
        if (relatedTextPayload) {
            const p = ui.activatedSiteAdaptorUI.automation.nativeCompositionDialog?.attachText?.(relatedTextPayload, {
                recover: false
            });
            await p;
        }
        await pasteImageToActiveElements(image);
        if (await hasSucceed()) return;
        if (recover) {
            Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}


/***/ }),

/***/ 16833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var Site_types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils.ts
var utils = __webpack_require__(16900);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/base.ts
var base = __webpack_require__(61280);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/collecting/getSearchedKeyword.ts
/**
 * Listing all possible pathnames start from /search that the search box will keep existing on twitter.
 * That means the keyword will not be cleaned and related components keep injecting.
 * Otherwise, if a pathname not in this list the keyword will be cleaned and remove relative components from DOM.
 */ const SAFE_PATHNAMES_ON_TWITTER = [
    '/compose/tweet',
    '/search-advanced',
    '/settings/trends',
    '/settings/search',
    '/i/display',
    '/account/switch',
    '/i/keyboard_shortcuts'
];
function getSearchedKeywordAtTwitter() {
    const params = new URLSearchParams(location.search);
    const hashTagMatched = location.pathname.match(/\/hashtag\/([\dA-Za-z]+)/);
    const isTabAvailable = [
        'top'
    ].includes(params.get('f') ?? '');
    if (location.pathname === '/search' && (!params.get('f') || isTabAvailable)) return params.get('q') ?? '';
    else if (hashTagMatched) return '#' + hashTagMatched[1];
    else if (!SAFE_PATHNAMES_ON_TWITTER.includes(location.pathname)) return '';
    return '';
}

// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(80029);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/hasPayloadLike.ts
var hasPayloadLike = __webpack_require__(86925);
// EXTERNAL MODULE: ./packages/encryption/src/network-encoding/twitter.ts
var twitter = __webpack_require__(52668);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(4677);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/user.ts




/**
 * @link https://help.twitter.com/en/managing-your-account/twitter-username-rules
 */ function usernameValidator(name) {
    for (const v of [
        /(twitter|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,isNull/* default */.Z)(v.exec(name))) {
            return false;
        }
    }
    if (name.length < 4) return false;
    return true;
}
async function getUserIdentity(twitterId) {
    const user = await entry/* Twitter */.tL.getUserByScreenName(twitterId);
    if (!user) return;
    return {
        identifier: profile/* ProfileIdentifier */.W.of(base/* twitterBase */.o.networkIdentifier, user.screenName).unwrapOr(undefined),
        nickname: user.nickname,
        avatar: user.avatarURL,
        bio: user.bio,
        homepage: user.homepage
    };
}
function getUserId(ele) {
    return ele?.querySelector('a[href][role=link]')?.getAttribute('href')?.slice(1);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/twitter.com.ts


const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const TwitterAdaptor = {
    name: 'Twitter',
    networkIdentifier: Site_types/* EnhanceableSite */.J.Twitter,
    declarativePermissions: {
        origins
    },
    homepage: 'https://twitter.com',
    isSocialNetwork: true,
    sortIndex: 0,
    getProfilePage: (userId)=>new URL(`https://twitter.com/${userId.userId}`),
    getShareLinkURL (message) {
        const url = (0,dist/* default */.ZP)('https://twitter.com/intent/tweet', {
            text: message
        });
        return new URL(url);
    }
};

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/shared.ts








function getPostURL(post) {
    if (!(post.identifier instanceof profile/* ProfileIdentifier */.W)) return null;
    return new URL(`https://twitter.com/${post.identifier.userId}/status/${post.postId}`);
}
const twitterShared = {
    ...base/* twitterBase */.o,
    utils: {
        isValidUsername: usernameValidator,
        getPostURL,
        share (text) {
            const url = TwitterAdaptor.getShareLinkURL(text);
            const width = 700;
            const height = 520;
            const openedWindow = (0,open_window/* openWindow */.x)(url, 'share', {
                width,
                height,
                screenX: window.screenX + (window.innerWidth - width) / 2,
                screenY: window.screenY + (window.innerHeight - height) / 2,
                opener: true,
                referrer: true,
                behaviors: {
                    toolbar: true,
                    status: true,
                    resizable: true,
                    scrollbars: true
                }
            });
            if (openedWindow === null) {
                location.assign(url);
            }
        },
        createPostContext: (0,create_post_context/* createSiteAdaptorSpecializedPostContext */.L)({
            hasPayloadLike: (text)=>{
                return (0,twitter/* TwitterDecoder */.Y)(text).map(hasPayloadLike/* hasPayloadLike */.s).unwrapOr(false);
            },
            getURLFromPostIdentifier: getPostURL
        }),
        getUserIdentity: getUserIdentity
    }
};

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(10791);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/automation/openComposeBox.ts


function openComposeBoxTwitter(content, options) {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
        reason: 'timeline',
        open: true,
        content: typeof content === 'string' ? (0,core_text/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/injected-script/sdk/index.ts
var sdk = __webpack_require__(46110);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/LiveSelector.js
var LiveSelector = __webpack_require__(23212);
;// CONCATENATED MODULE: ./packages/mask/content-script/utils/regexMatch.ts

/**
 * index starts at one.
 */ function regexMatch(input, pattern, index = 1) {
    const r = input.match(pattern);
    if ((0,isNull/* default */.Z)(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/postBox.ts

function getEditorContent() {
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    if (editorNode.tagName.toLowerCase() === 'div') return editorNode.innerText;
    return editorNode.value;
}
function isCompose() {
    return globalThis.location.pathname.includes('compose');
}
function hasFocus(x) {
    return x.evaluate() === document.activeElement;
}
function hasEditor() {
    return !!postEditorDraftContentSelector().evaluate();
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/selector.ts



function querySelector(selector, singleMode = true) {
    const ls = new LiveSelector/* LiveSelector */.j().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
}
function querySelectorAll(selector) {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll(selector);
}
// #region "Enhanced Profile"
function searchProfileTabListLastChildSelector() {
    return querySelector('[data-testid="primaryColumn"] div + [role="navigation"][aria-label] [data-testid="ScrollSnap-List"] div[role="presentation"]:last-of-type a[role="tab"]').closest(1);
}
function nextTabListSelector() {
    return querySelector('[data-testid="ScrollSnap-nextButtonWrapper"]');
}
function searchProfileTabPageSelector() {
    return searchProfileTabListLastChildSelector().closest(5).querySelector('section > div[aria-label]:not([role="progressbar"])');
}
function searchProfileTabLoseConnectionPageSelector() {
    return querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[dir="auto"]:not([role="progressbar"])');
}
function searchProfileEmptySelector() {
    return querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]');
}
function searchProfileTabSelector() {
    return querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]');
}
function searchAppBarBackSelector() {
    return querySelector('[data-testid="app-bar-back"] > div');
}
function searchProfileTabListSelector() {
    return querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a');
}
function searchNewTweetButtonSelector() {
    const q = querySelector('[data-testid="FloatingActionButtons_Tweet_Button"]');
    if (q.evaluate()) return q;
    return querySelector('[data-testid="SideNav_NewTweet_Button"]');
}
function searchAvatarSelector() {
    return querySelector('[data-testid="primaryColumn"] a[href$="/photo"] img[src*="profile_images"]');
}
querySelector('[data-testid="primaryColumn"] a[href$="/nft"] img[src*="profile_images"]');
function searchAvatarMetaSelector() {
    return querySelector('head meta[property="og:image"]');
}
function profileFollowButtonSelector() {
    return querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"] ~ [data-testid="placementTracking"]');
}
function normalFollowButtonSelector() {
    return querySelectorAll('[data-testid="primaryColumn"] [role="button"][data-testid="UserCell"] [data-testid$="follow"]');
}
function searchProfileCoverSelector() {
    return querySelector('[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div > div > div[style], [data-testid="primaryColumn"] > div > div:last-child > div > div > div > a > div > div[style]').closest(1);
}
function searchEditProfileSelector() {
    return querySelector('[data-testid="primaryColumn"] [data-testid^="UserAvatar-Container-"]').closest(1).querySelector('a[href="/settings/profile"]');
}
// #endregion
function rootSelector() {
    return querySelector('#react-root');
}
// `aside *` selectors are for mobile mode
function composeAnchorSelector() {
    return querySelector([
        'header[role=banner] a[href="/compose/tweet"]',
        'aside a[href="/compose/tweet"]',
        // can't see the compose button on share popup, use the tweetButton instead
        '[role=main] [role=button][data-testid=tweetButton]'
    ].join(','));
}
function postEditorContentInPopupSelector() {
    return querySelector('[aria-labelledby="modal-header"] > div:first-child > div:first-child > div:first-child > div:nth-child(3)');
}
function postEditorInPopupSelector() {
    return querySelector('[aria-labelledby="modal-header"]  div[data-testid="toolBar"] [role="presentation"]:has(> div[data-testid="geoButton"])');
}
function sideBarProfileSelector() {
    return querySelector('[role="banner"] [role="navigation"] [data-testid="AppTabBar_Profile_Link"] > div');
}
function postEditorInTimelineSelector() {
    return querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)');
}
function isReplyPageSelector() {
    return !!location.pathname.match(/^\/\w+\/status\/\d+$/);
}
function postEditorDraftContentSelector() {
    if (location.pathname === '/compose/tweet') {
        return querySelector('[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]');
    }
    if (isReplyPageSelector()) {
        return querySelector('div[data-testid="tweetTextarea_0"]');
    }
    return (isCompose() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
}
function searchResultHeadingSelector() {
    return querySelector('[role="main"] [data-testid="primaryColumn"] > div > :nth-child(2)');
}
function newPostButtonSelector() {
    return querySelector('[data-testid="SideNav_NewTweet_Button"]');
}
function bioPageUserNickNameSelector() {
    return querySelector('[data-testid="UserDescription"]').map((x)=>x.parentElement?.parentElement?.previousElementSibling).querySelector('div[dir]');
}
function isProfilePageLike() {
    // starts with exclude
    if (location.pathname.match(/^\/(home|explore|notifications|messages|i\/|settings|compose|search)/)) return false;
    // ends with exclude
    if (location.pathname.match(/\/(topics|recommended|not_interested|lists)$/)) return false;
    return !!location.pathname.match(/^\/[\dA-Za-z]+\/?$/);
}
function bioPageUserIDSelector(selector) {
    return selector().map((x)=>(x.parentElement?.nextElementSibling)?.innerText?.replace('@', ''));
}
function floatingBioCardSelector() {
    return querySelector('[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]');
}
function postsImageSelector(node) {
    return new LiveSelector/* LiveSelector */.j([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
    ].// image in detail page for new twitter
    join(','));
}
function timelinePostContentSelector() {
    return querySelectorAll([
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]'
    ].// link box tweets
    join(','));
}
function toastLinkSelector() {
    return querySelector('[data-testid="toast"] a');
}
function postsContentSelector() {
    return querySelectorAll([
        // tweets on timeline page
        '[data-testid="tweet"] [data-testid="tweetText"]',
        '[data-testid="tweet"]:not(:has([data-testid="tweetText"])) [data-testid="tweetPhoto"]',
        // tweets with only image.
        // tweets on detailed page
        '[data-testid="tweet"] + div > div:first-child div[lang]',
        '[data-testid="tweet"] + div > div div[data-testid="card.wrapper"]',
        // quoted tweets in timeline
        '[data-testid="tweet"] [aria-labelledby] div[role="link"] div[lang]',
        // quoted tweets in detail page
        '[data-testid="tweet"] > div:last-child div[role="link"] div[lang]'
    ].join(','));
}
function postAvatarSelector() {
    return querySelectorAll('[data-testid=tweet] [data-testid^=UserAvatar-Container-]');
}
function followUserAvatarSelector() {
    return querySelectorAll('[data-testid=UserCell] [data-testid^=UserAvatar-Container-]');
}
const selector_base = querySelector('#react-root ~ script');
const handle = /"screen_name":"(.*?)"/;
const selector_name = /"name":"(.*?)"/;
const bio = /"description":"(.*?)"/;
const avatar = /"profile_image_url_https":"(.*?)"/;
/**
 * first matched element can be extracted by index zero, followings are all capture groups, if no 'g' specified.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */ function p(regex, index) {
    return selector_base.clone().map((x)=>regexMatch(x.innerText, regex, index));
}
function selfInfoSelectors() {
    return {
        handle: p(handle, 1),
        name: p(selector_name, 1),
        bio: p(bio, 1),
        userAvatar: p(avatar, 1)
    };
}
// #region self info
function searchSelfHandleSelector() {
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] > div > div[data-testid^="UserAvatar-Container-"]',
        // desktop
        '#layers [role="group"] [role="dialog"] [tabindex="-1"] [dir="ltr"] > span'
    ].// sidebar opened in mobile
    join(','));
}
function searchSelfNicknameSelector() {
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] span span:first-child',
        '#layers [role="group"] [role="dialog"] [role="link"] span > span'
    ].// sidebar opened in mobile
    join(','));
}
function searchWatcherAvatarSelector() {
    return querySelector('[data-testid="SideNav_AccountSwitcher_Button"] img');
}
function searchSelfAvatarSelector() {
    return querySelector([
        '#layers ~ div [role="banner"] [role="button"] img',
        '[data-testid="DashButton_ProfileIcon_Link"] [role="presentation"] img',
        '#layers [role="group"] [role="dialog"] [role="link"] img'
    ].// sidebar opened in mobile
    join(','));
}
// #endregion
// #region twitter nft avatar
function searchProfileAvatarSelector() {
    return querySelector('[data-testid="Profile_Save_Button"]').closest(8).querySelector('[data-testid="UserAvatar-Container-unknown"]').closest(3);
}
function searchProfileSaveSelector() {
    return querySelector('[data-testid="Profile_Save_Button"]');
}
// #region avatar selector
function searchTwitterAvatarLinkSelector() {
    return querySelector('[data-testid="UserProfileHeader_Items"]').closest(2).querySelector('div  a');
}
function searchTwitterAvatarSelector() {
    return querySelector('a[href$="/photo"]').querySelector('img').closest(1);
}
function searchTwitterAvatarNormalSelector() {
    return querySelector('a[href$="/photo"]');
}
// #endregion
function searchTwitterSquareAvatarSelector() {
    return querySelector('a[href$="/nft"] > div img');
}
function searchTweetAvatarSelector() {
    return querySelector('[data-testid="tweetButtonInline"]').closest(7);
}
function searchRetweetAvatarSelector() {
    return querySelector('[data-testid="tweetButton"]').closest(6);
}
function searchTwitterAvatarNFTSelector() {
    return querySelector('a[href$="/nft"]').closest(1).querySelector('a div:nth-child(3) > div');
}
function searchTwitterAvatarNFTStyleSelector() {
    return querySelector('a[href$="/nft"] > div');
}
function searchTwitterAvatarNFTLinkSelector() {
    return querySelector('a[href$="/nft"]');
}
function searchReplyToolbarSelector() {
    return querySelector('div[data-testid="primaryColumn"] div[data-testid="toolBar"]').querySelector('[role="presentation"]:has(> div[data-testid="geoButton"])');
}
// nameTag dom
function searchNameTag() {
    return querySelector('#nft-gallery');
}
function searchHomeLinkName() {
    return querySelector('[data-testid="AppTabBar_Home_Link"]');
}

// EXTERNAL MODULE: ./packages/mask/content-script/utils/untilElementAvailable.ts
var untilElementAvailable = __webpack_require__(82037);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/selectElementContents.ts
var selectElementContents = __webpack_require__(11485);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionTwitter = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.aborted) throw new Error('Abort to paste text to the composition dialog at twitter.');
        };
        if (!isCompose() && opt?.reason === 'verify' || !isCompose() && !hasEditor() && opt?.reason !== 'reply') {
            // open tweet window
            await (0,untilElementAvailable/* untilElementAvailable */.f)(newPostButtonSelector());
            await (0,esm/* delay */.gw)(interval);
            newPostButtonSelector().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = postEditorDraftContentSelector();
        await (0,untilElementAvailable/* untilElementAvailable */.f)(i);
        await (0,esm/* delay */.gw)(interval);
        checkSignal();
        if (opt?.reason === 'verify') {
            (0,selectElementContents/* selectElementContents */.M)(i.evaluate());
        }
        while(!hasFocus(i)){
            i.evaluate().click();
            checkSignal();
            await (0,esm/* delay */.gw)(interval);
        }
        // paste
        (0,sdk/* pasteText */.M1)(text);
        await (0,esm/* delay */.gw)(interval);
        if (!getEditorContent().replaceAll('\n', '').includes(text.replaceAll('\n', ''))) {
            fail(new Error('Unable to paste text automatically'));
        }
    };
    const fail = (e)=>{
        if (opt?.recover) Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
            text
        });
        throw e;
    };
    return worker(AbortSignal.timeout(timeout)).then(undefined, (error)=>fail(error));
};

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/automation/AttachImageToComposition.ts + 1 modules
var AttachImageToComposition = __webpack_require__(65108);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/automation/pasteImageToComposition.ts





async function pasteImageToCompositionTwitter(url, options) {
    const interval = 500;
    if (!isCompose() && !hasEditor() && options?.reason !== 'reply') {
        // open tweet window
        await (0,untilElementAvailable/* untilElementAvailable */.f)(newPostButtonSelector());
        await (0,esm/* delay */.gw)(interval);
        newPostButtonSelector().evaluate().click();
    }
    // get focus
    const i = postEditorDraftContentSelector();
    await (0,untilElementAvailable/* untilElementAvailable */.f)(i);
    while(!hasFocus(i)){
        i.evaluate().click();
        await (0,esm/* delay */.gw)(interval);
    }
    (0,AttachImageToComposition/* pasteImageToCompositionDefault */.f)(()=>false)(url, options);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageTwitter() {
    if (location.pathname.includes('/home')) location.reload();
    else location.assign('/home');
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/automation/gotoProfilePage.ts
function gotoProfilePageTwitter(profile) {
    const path = `/${profile.userId}`;
    document.querySelector(`[href="${path}"]`)?.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.assign(path);
    }, 400);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/automation/publishPost.ts

async function publishPostTwitter(mediaObjects, options) {
    const images = mediaObjects.filter((x)=>typeof x !== 'string');
    const allSettled = await Promise.allSettled(images.map((x)=>entry/* Twitter */.tL.uploadMedia(x)));
    const mediaIds = allSettled.map((x)=>x.status === 'fulfilled' && x.value?.media_id_string).filter(Boolean);
    const variables = {
        tweet_text: mediaObjects.filter((x)=>typeof x === 'string').join('\n')
    };
    if (mediaIds.length > 0) variables.media = {
        media_entities: mediaIds.map((x)=>({
                media_id: x,
                togged_users: []
            })),
        possibly_sensitive: false
    };
    if (options?.reason === 'reply') {
        const replyTweetId = location.href.match(/\/status\/(\d+)/)?.[1];
        if (replyTweetId) {
            variables.reply = {
                in_reply_to_tweet_id: replyTweetId,
                exclude_reply_user_ids: []
            };
        }
    }
    console.log('DEBUG: publish post twitter');
    console.log({
        mediaObjects,
        variables
    });
    const postId = await entry/* Twitter */.tL.createTweet(variables);
    console.log('DEBUG: response create tweet');
    console.log(postId);
    return postId;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
;// CONCATENATED MODULE: ./packages/injected-script/shared/twitter.ts
// Collect from main js of Twitter's web client.
const TWITTER_RESERVED_SLUGS = [
    '404',
    'account',
    'download',
    'explore',
    'follower_requests',
    'hashtag',
    'home',
    'i',
    'intent',
    'lists',
    'login',
    'logout',
    'mentions',
    'messages',
    'notifications',
    'personalization',
    'search',
    'search-advanced',
    'search-home',
    'session',
    'settings',
    'share',
    'signup',
    'twitterblue',
    'webview',
    'welcome',
    'your_twitter_data'
];
Object.freeze(TWITTER_RESERVED_SLUGS);

// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/isMobile.ts
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/collecting/identity.ts











function collectSelfInfo() {
    const handle = selfInfoSelectors().handle.evaluate();
    const nickname = selfInfoSelectors().name.evaluate();
    const avatar = selfInfoSelectors().userAvatar.evaluate();
    return {
        handle,
        nickname,
        avatar
    };
}
function getNickname(nickname) {
    const nicknameNode = searchSelfNicknameSelector().closest(1).evaluate();
    let _nickname = '';
    if (!nicknameNode?.childNodes.length) return nickname;
    for (const child of nicknameNode.childNodes){
        const ele = child;
        if (ele.tagName === 'IMG') {
            _nickname += ele.getAttribute('alt') ?? '';
        }
        if (ele.tagName === 'SPAN') {
            _nickname += ele.textContent?.trim();
        }
    }
    return _nickname ?? nickname;
}
function resolveLastRecognizedIdentityInner(ref, cancel) {
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(2000);
        const selfInfo = collectSelfInfo();
        const avatar = (searchSelfAvatarSelector().evaluate()?.getAttribute('src') || selfInfo.avatar) ?? '';
        const handle = searchSelfHandleSelector().evaluate()?.dataset.testid?.trim().slice('UserAvatar-Container-'.length) || selfInfo.handle;
        const nickname = getNickname(selfInfo.nickname) ?? '';
        if (handle) {
            ref.value = {
                avatar,
                nickname,
                identifier: profile/* ProfileIdentifier */.W.of(base/* twitterBase */.o.networkIdentifier, handle).unwrapOr(undefined),
                isOwner: true
            };
        }
    };
    const createWatcher = (selector)=>{
        new MutationObserverWatcher/* MutationObserverWatcher */.U(selector).addListener('onAdd', ()=>assign()).addListener('onChange', ()=>assign()).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'src'
            ]
        }, cancel);
    };
    assign();
    window.addEventListener('locationchange', assign, {
        signal: cancel
    });
    createWatcher(searchSelfHandleSelector());
    createWatcher(searchWatcherAvatarSelector());
}
function resolveLastRecognizedIdentityMobileInner(ref, cancel) {
    const onLocationChange = async ()=>{
        const settings = await entry/* Twitter */.tL.getSettings();
        const identifier = profile/* ProfileIdentifier */.W.of(base/* twitterBase */.o.networkIdentifier, settings?.screen_name).unwrapOr(undefined);
        if (identifier && !ref.value.identifier) {
            ref.value = {
                ...ref.value,
                identifier,
                isOwner: true
            };
        }
    };
    onLocationChange();
    window.addEventListener('locationchange', onLocationChange, {
        signal: cancel
    });
}
function getFirstSlug() {
    const slugs = location.pathname.split('/').filter(Boolean);
    return (0,head/* default */.Z)(slugs);
}
function resolveCurrentVisitingIdentityInner(ref, ownerRef, cancel) {
    const update = async (twitterId)=>{
        const user = await queryClient/* queryClient */.E.fetchQuery({
            queryKey: [
                'twitter',
                'profile',
                twitterId
            ],
            queryFn: ()=>entry/* Twitter */.tL.getUserByScreenName(twitterId)
        });
        if (false) {}
        if (!user) return;
        const handle = user.screenName;
        const ownerHandle = ownerRef.value.identifier?.userId;
        const isOwner = !!(ownerHandle && handle.toLowerCase() === ownerHandle.toLowerCase());
        const avatar = user.avatarURL;
        const bio = user.bio;
        const homepage = user.homepage;
        ref.value = {
            identifier: profile/* ProfileIdentifier */.W.of(base/* twitterBase */.o.networkIdentifier, handle).unwrapOr(undefined),
            nickname: user.nickname,
            avatar,
            bio,
            homepage,
            isOwner
        };
    };
    const slug = getFirstSlug();
    if (slug && !TWITTER_RESERVED_SLUGS.includes(slug)) {
        update(slug);
        if (!ownerRef.value.identifier) {
            const unsubscribe = ownerRef.addListener((val)=>{
                update(slug);
                if (val) unsubscribe();
            });
        }
    }
    window.addEventListener('scenechange', (event)=>{
        if (event.detail.scene !== 'profile') return;
        const twitterId = event.detail.value;
        update(twitterId);
    }, {
        signal: cancel
    });
}
const IdentityProviderTwitter = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
        if (isMobileTwitter) resolveLastRecognizedIdentityMobileInner(this.recognized, cancel);
    }
};
const CurrentVisitingIdentityProviderTwitter = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, IdentityProviderTwitter.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
// EXTERNAL MODULE: ./packages/web3-providers/src/types/Twitter.ts
var Twitter = __webpack_require__(68419);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/collecting/theme.ts








const resolveThemeColor = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [Twitter/* TwitterBaseAPI */.J.ThemeColor.Blue]: 'rgb(29, 155, 240)',
    [Twitter/* TwitterBaseAPI */.J.ThemeColor.Yellow]: 'rgb(255, 212, 0)',
    [Twitter/* TwitterBaseAPI */.J.ThemeColor.Purple]: 'rgb(120, 86, 255)',
    [Twitter/* TwitterBaseAPI */.J.ThemeColor.Magenta]: 'rgb(249, 24, 128)',
    [Twitter/* TwitterBaseAPI */.J.ThemeColor.Orange]: 'rgb(255, 122, 0)',
    [Twitter/* TwitterBaseAPI */.J.ThemeColor.Green]: 'rgb(0, 186, 124)'
}, 'rgb(29, 155, 240)');
const resolveThemeMode = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [Twitter/* TwitterBaseAPI */.J.ThemeMode.Dark]: specs/* ThemeMode */.hY.Dark,
    [Twitter/* TwitterBaseAPI */.J.ThemeMode.Dim]: specs/* ThemeMode */.hY.Dark,
    [Twitter/* TwitterBaseAPI */.J.ThemeMode.Light]: specs/* ThemeMode */.hY.Light
}, specs/* ThemeMode */.hY.Light);
const resolveFontSize = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [Twitter/* TwitterBaseAPI */.J.Scale.X_Large]: specs/* FontSize */.Bf.X_Large,
    [Twitter/* TwitterBaseAPI */.J.Scale.Large]: specs/* FontSize */.Bf.Large,
    [Twitter/* TwitterBaseAPI */.J.Scale.Normal]: specs/* FontSize */.Bf.Normal,
    [Twitter/* TwitterBaseAPI */.J.Scale.Small]: specs/* FontSize */.Bf.Small,
    [Twitter/* TwitterBaseAPI */.J.Scale.X_Small]: specs/* FontSize */.Bf.X_Small
}, specs/* FontSize */.Bf.Normal);
async function resolveThemeSettingsInner(ref, cancel) {
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(300);
        const userSettings = await entry/* Twitter */.tL.getUserSettings();
        if (!userSettings) return;
        ref.value = {
            color: userSettings.themeColor ? resolveThemeColor(userSettings.themeColor) : ref.value.color,
            size: userSettings.scale ? resolveFontSize(userSettings.scale) : ref.value.size,
            mode: userSettings.themeBackground ? resolveThemeMode(userSettings.themeBackground) : ref.value.mode,
            isDim: userSettings.themeBackground === Twitter/* TwitterBaseAPI */.J.ThemeMode.Dim
        };
    };
    await assign();
    new MutationObserverWatcher/* MutationObserverWatcher */.U(composeAnchorSelector()).addListener('onAdd', ()=>assign()).addListener('onChange', ()=>assign()).startWatch({
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
            'src'
        ]
    }, cancel);
}
const ThemeSettingsProviderTwitter = {
    recognized: utils/* creator */.D.EmptyThemeSettingsProviderState(),
    async start (cancel) {
        await resolveThemeSettingsInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(43434);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/IntervalWatcher.js
var IntervalWatcher = __webpack_require__(57791);
// EXTERNAL MODULE: ./packages/base/src/Identifier/post.ts
var post = __webpack_require__(82654);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/tuple.ts
var tuple = __webpack_require__(17425);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/image.ts
var core_image = __webpack_require__(93349);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/empty.ts
var empty = __webpack_require__(40048);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/Flatten.ts
var Flatten = __webpack_require__(76714);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/promise.ts
var promise = __webpack_require__(61111);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/url.ts

// more about twitter photo url formatting:
// https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/entities-object#photo_format
function canonifyImgUrl(url) {
    const parsed = new URL(url);
    if (parsed.hostname !== 'pbs.twimg.com') return url;
    const { searchParams } = parsed;
    searchParams.set('name', 'orig');
    // we can't understand original image format when given url labeled as webp
    if (searchParams.get('format') === 'webp') {
        searchParams.set('format', 'png');
        const pngURL = parsed.href;
        searchParams.set('format', 'jpg');
        const jpgURL = parsed.href;
        return [
            jpgURL,
            pngURL
        ];
    }
    return parsed.href;
}
function parseId(t) {
    return regexMatch(t, /status\/(\d+)/, 1);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/utils.ts
var site_adaptors_utils = __webpack_require__(21827);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Proxy.js
var DOM_Proxy = __webpack_require__(6806);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/MaskIcon.tsx











function Icon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
        size: props.size,
        style: {
            verticalAlign: 'text-bottom',
            marginLeft: 6
        }
    });
}
function _(main, size, options) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(main()).useForeach((ele, _, meta)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const check = ()=>{
            ifUsingMask(profile/* ProfileIdentifier */.W.of(Site_types/* EnhanceableSite */.J.Twitter, bioPageUserIDSelector(main).evaluate()).unwrapOr(null)).then(()=>{
                const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(meta.afterShadow, {
                    untilVisible: true,
                    signal: options.signal
                });
                root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                    size: size
                }));
                remover = root.destroy;
            }, remove);
        };
        check();
        return {
            onNodeMutation: check,
            onTargetChanged: check,
            onRemove: remove
        };
    });
    (0,startWatch/* startWatch */.f)(watcher, options);
}
function injectMaskUserBadgeAtTwitter(signal) {
    // profile
    _(bioPageUserNickNameSelector, 24, {
        signal,
        missingReportRule: {
            name: 'User badge',
            rule: isProfilePageLike
        }
    });
    // floating bio
    _(floatingBioCardSelector, 20, {
        signal
    });
}
function injectMaskIconToPostTwitter(post, signal) {
    const ls = new LiveSelector/* LiveSelector */.j([
        post.rootElement
    ]).map((x)=>x.current.querySelector('[data-testid=User-Name]')).enableSingleMode();
    ifUsingMask(post.author.getCurrentValue()).then(add, remove);
    post.author.subscribe(()=>ifUsingMask(post.author.getCurrentValue()).then(add, remove));
    let remover = noop/* default */.Z;
    function add() {
        if (signal?.aborted) return;
        const node = ls.evaluate();
        if (!node) return;
        const proxy = (0,DOM_Proxy/* DOMProxy */.E)({
            afterShadowRootInit: src/* Flags */.v.shadowRootInit
        });
        proxy.realCurrent = node;
        const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            untilVisible: true,
            signal
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
            size: 24
        }));
        remover = root.destroy;
    }
    function remove() {
        remover();
    }
}
const ifUsingMask = (0,esm/* memoizePromise */.J3)(memoize/* default */.Z, async (pid)=>{
    if (!pid) throw new Error();
    const p = await service/* default */.ZP.Identity.queryProfilesInformation([
        pid
    ]);
    if (!p[0].linkedPersona?.rawPublicKey) throw new Error();
}, (x)=>x);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__(55437);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/anchor.ts
var extension_anchor = __webpack_require__(43458);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/index.ts
var extension = __webpack_require__(93949);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(97250);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/collectTwitterEmoji.ts
var collectTwitterEmoji = __webpack_require__(69770);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/fetch.ts





/**
 * Get post id from dom, including normal tweet, quoted tweet and retweet one
 */ function getPostId(node) {
    let idNode = null;
    let timeNode = node.querySelector('a[href*="/status/"] time');
    if (timeNode) {
        idNode = timeNode.parentElement;
    } else {
        // Quoted tweet has no `a[href*="/status/"] time` but only `time`
        timeNode = node.querySelector('time');
        idNode = timeNode?.closest('[role=link]')?.querySelector('a[href*="/status/"]');
    }
    const isRetweet = !!node.querySelector('[data-testid=socialContext]');
    let pid = '';
    if (idNode) {
        pid = parseId(idNode.href);
    } else if (timeNode) {
        // Quoted tweet in timeline has no a status link to detail page,
        // so use the timestamp as post id instead
        pid = `timestamp-keccak256:${(0,lib.keccak256)(timeNode.getAttribute('datetime'))}`;
    } else {
        pid = `keccak256:${(0,lib.keccak256)(node.innerText)}`;
    }
    // You can't retweet a tweet or a retweet, but only cancel retweeting
    return isRetweet ? `retweet:${pid}` : pid;
}
function postNameParser(node) {
    const tweetElement = node.querySelector('[data-testid="tweet"]') ?? node;
    const name = (0,collectNodeText/* collectNodeText */.a)(tweetElement.querySelector('[data-testid^="User-Name"] a div div > span'));
    // Note: quoted tweet has no [data-testid^="User-Name"]
    const handle = Array.from(tweetElement.querySelectorAll('[tabindex]')).map((node)=>node.innerText || '').filter((text)=>text.startsWith('@')).at(0) || '';
    // post matched, return the result
    if (name || handle) {
        return {
            name: name || '',
            handle: handle ? handle.slice(1) : ''
        };
    }
    const quotedTweetName = (0,collectNodeText/* collectNodeText */.a)(tweetElement.querySelector('div[role="link"] div[data-testid="UserAvatar-Container-unknown"] + div > span'));
    const quotedTweetHandle = (0,collectNodeText/* collectNodeText */.a)(tweetElement.querySelector('[data-testid="UserAvatar-Container-unknown"]')?.parentNode?.parentNode?.parentNode?.parentNode?.firstElementChild?.nextElementSibling?.querySelector('span'));
    // quoted post matched
    return {
        name: quotedTweetName || '',
        handle: quotedTweetHandle ? quotedTweetHandle.slice(1) : ''
    };
}
function postAvatarParser(node) {
    const tweetElement = node.querySelector('[data-testid="tweet"]') ?? node;
    const avatarElement = tweetElement.children[0].querySelector('img[src*="twimg.com"]');
    return avatarElement ? avatarElement.src : undefined;
}
function resolveType(content) {
    if (content.startsWith('@')) return 'user';
    if (content.startsWith('#')) return 'hash';
    if (content.startsWith('$')) return 'cash';
    return 'normal';
}
function postContentMessageParser(node) {
    function make(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (!node.nodeValue) return (0,empty/* makeTypedMessageEmpty */.W)();
            return (0,core_text/* makeTypedMessageText */.P)(node.nodeValue, getElementStyle(node.parentElement));
        } else if (node instanceof HTMLAnchorElement) {
            const anchor = node;
            const href = anchor.getAttribute('title') ?? anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,empty/* makeTypedMessageEmpty */.W)();
            const altImage = node.querySelector('img');
            return (0,extension_anchor/* makeTypedMessageAnchor */.J)(resolveType(content), href ?? '', content, altImage ? (0,core_image/* makeTypedMessageImage */.a)(altImage.src, altImage) : undefined, getElementStyle(node));
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const alt = image.getAttribute('alt');
            const matched = src?.match(/emoji\/v2\/svg\/([\w-]+)\.svg/);
            if (matched) {
                const points = matched[1].split('-').map((point)=>Number.parseInt(point, 16));
                return (0,core_text/* makeTypedMessageText */.P)((0,collectTwitterEmoji/* collectTwitterEmoji */._)(points));
            }
            if (!alt) return (0,empty/* makeTypedMessageEmpty */.W)();
            return (0,core_text/* makeTypedMessageText */.P)(alt);
        } else if (node instanceof HTMLSpanElement) {
            return (0,core_text/* makeTypedMessageText */.P)(node.textContent ?? '');
        } else if (node.childNodes.length) {
            const messages = (0,tuple/* makeTypedMessageTuple */.Zw)((0,flattenDeep/* default */.Z)(Array.from(node.childNodes).map(make)));
            return Flatten/* FlattenTypedMessage */.p.NoContext(messages);
        } else return (0,empty/* makeTypedMessageEmpty */.W)();
    }
    const lang = node.parentElement.querySelector('[lang]');
    return lang ? Flatten/* FlattenTypedMessage */.p.NoContext((0,tuple/* makeTypedMessageTuple */.Zw)(Array.from(lang.childNodes).flatMap(make))) : (0,empty/* makeTypedMessageEmpty */.W)();
}
function getElementStyle(element) {
    if (!element) return undefined;
    const computed = getComputedStyle(element);
    const style = {};
    if (computed.fontWeight !== '400') style.fontWeight = computed.fontWeight;
    if (computed.fontStyle !== 'normal') style.fontStyle = computed.fontStyle;
    if (style.fontWeight || style.fontStyle) return new Map([
        [
            extension/* unstable_STYLE_META */.RZ,
            style
        ]
    ]);
    return undefined;
}
async function postImagesParser(node) {
    const isQuotedTweet = !!node.closest('div[role="link"]');
    const imgNodes = node.querySelectorAll('img[src*="twimg.com/media"]');
    if (!imgNodes.length) return [];
    const imgUrls = Array.from(imgNodes).filter((node)=>isQuotedTweet || !node.closest('div[role="link"]')).flatMap((node)=>canonifyImgUrl(node.getAttribute('src') ?? '')).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}
function postParser(node) {
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        pid: getPostId(node),
        messages: postContentMessageParser(node)
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/collecting/post.ts

















function getPostActionsNode(postNode) {
    if (!postNode) return null;
    return postNode.closest('[data-testid="tweet"]')?.querySelector(// query for the share button button which has a popup menu
    '[role="group"]:last-child > div:has([aria-haspopup="menu"]):last-child');
}
const getParentTweetNode = (node)=>{
    return node.closest('[data-testid="tweet"]');
};
function isQuotedTweet(tweetNode) {
    return tweetNode?.getAttribute('role') === 'link';
}
function isDetailTweet(tweetNode) {
    // We can see the retweets status in detail tweet.
    const isDetail = !!tweetNode.querySelector('a[role="link"][href$=retweets],a[role="link"][href$=likes]');
    return isDetail;
}
function getTweetNode(node) {
    // retweet(quoted tweet) in new twitter
    const root = node.closest('div[role="link"]');
    // then normal tweet
    return root || node.closest('article > div');
}
function shouldSkipDecrypt(node, tweetNode) {
    const isCardNode = node.matches('[data-testid="card.wrapper"]');
    const hasTextNode = !!tweetNode.querySelector([
        '[data-testid="tweet"] div[lang]',
        '[data-testid="tweet"] + div div[lang]'
    ].// detailed
    join(','));
    // if a text node already exists, it's not going to decrypt the card node
    return isCardNode && hasTextNode;
}
function registerPostCollectorInner(postStore, cancel) {
    const updateProfileInfo = (0,memoize/* default */.Z)((info)=>{
        const currentProfile = (0,site_adaptors_utils/* getCurrentIdentifier */.T)();
        const profileIdentifier = info.author.getCurrentValue();
        if (!profileIdentifier) return;
        service/* default */.ZP.Identity.updateProfileInfo(profileIdentifier, {
            nickname: info.nickname.getCurrentValue(),
            avatarURL: info.avatarURL.getCurrentValue()?.toString()
        });
        if (currentProfile?.linkedPersona) {
            service/* default */.ZP.Identity.createNewRelation(profileIdentifier, currentProfile.linkedPersona);
        }
    }, (info)=>info.author.getCurrentValue());
    new IntervalWatcher/* IntervalWatcher */.W(postsContentSelector()).useForeach((node, _, proxy)=>{
        const tweetNode = getTweetNode(node);
        if (!tweetNode || shouldSkipDecrypt(node, tweetNode)) return;
        const refs = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const info = twitterShared.utils.createPostContext({
            comments: undefined,
            rootElement: proxy,
            isFocusing: isDetailTweet(tweetNode),
            suggestedInjectionPoint: tweetNode,
            ...refs.subscriptions
        });
        function run() {
            collectPostInfo(tweetNode, refs, cancel);
            collectLinks(tweetNode, refs, cancel);
        }
        run();
        cancel.addEventListener('abort', info.hasMaskPayload.subscribe(()=>{
            const payload = info.hasMaskPayload.getCurrentValue();
            if (!payload && refs.postMetadataImages.size === 0) return;
            updateProfileInfo(info);
        }));
        injectMaskIconToPostTwitter(info, cancel);
        postStore.set(proxy, info);
        return {
            onTargetChanged: run,
            onRemove: ()=>{
                postStore.delete(proxy);
            },
            onNodeMutation: run
        };
    }).assignKeys((node)=>{
        const tweetNode = getTweetNode(node);
        const parentTweetNode = isQuotedTweet(tweetNode) ? getParentTweetNode(tweetNode) : null;
        if (!tweetNode || shouldSkipDecrypt(node, tweetNode)) {
            return `keccak256:${(0,lib.keccak256)(node.innerText)}`;
        }
        const parentTweetId = parentTweetNode ? getPostId(parentTweetNode) : '';
        const tweetId = getPostId(tweetNode);
        // To distinguish tweet nodes between timeline and detail page
        const isDetailPage = isDetailTweet(tweetNode);
        return `${isDetailPage ? 'detail' : 'normal'}/${parentTweetId}/${tweetId}`;
    }).startWatch(250, cancel);
}
const PostProviderTwitter = {
    posts: utils/* creator */.D.EmptyPostProviderState(),
    start (cancel) {
        registerPostCollectorInner(this.posts, cancel);
    }
};
function getPostIdFromNewPostToast() {
    const toastLinkNode = toastLinkSelector().evaluate();
    return toastLinkNode?.href ? parseId(toastLinkNode?.href) : '';
}
function collectVerificationPost(keyword) {
    const userId = IdentityProviderTwitter.recognized.value.identifier || ui/* activatedSiteAdaptor_state */.g.profiles.value[0].identifier;
    const postNodes = timelinePostContentSelector().evaluate();
    for (const postNode of postNodes){
        const tweetNode = postNode.closest('[data-testid=tweet]');
        if (!tweetNode) continue;
        const postId = getPostId(tweetNode);
        const postContent = postContentMessageParser(postNode);
        const content = (0,extract/* extractTextFromTypedMessage */.V)(postContent);
        const isVerified = postId && content.isSome() && content.value.toLowerCase().replaceAll(/\r\n|\n|\r/gm, '') === keyword.toLowerCase().replaceAll(/\r\n|\n|\r/gm, '');
        if (isVerified && userId) {
            return new post/* PostIdentifier */._(userId, postId);
        }
    }
    return null;
}
function collectPostInfo(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel?.aborted) return;
    const { pid, messages, handle, name, avatar } = postParser(tweetNode);
    if (!pid) return;
    const postBy = profile/* ProfileIdentifier */.W.of(base/* twitterBase */.o.networkIdentifier, handle).unwrapOr(null);
    info.postID.value = pid;
    info.postBy.value = postBy;
    info.nickname.value = name;
    info.avatarURL.value = avatar || null;
    // decode steganographic image
    // don't add await on this
    const images = (0,untilElementAvailable/* untilElementAvailable */.f)(postsImageSelector(tweetNode), 10000).then(()=>postImagesParser(tweetNode)).then((urls)=>{
        for (const url of urls)info.postMetadataImages.add(url);
        if (urls.length) return (0,tuple/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,core_image/* makeTypedMessageImage */.a)(x)));
        return (0,empty/* makeTypedMessageEmpty */.W)();
    }).catch(()=>(0,empty/* makeTypedMessageEmpty */.W)());
    info.postMessage.value = Flatten/* FlattenTypedMessage */.p.NoContext((0,tuple/* makeTypedMessageTuple */.Zw)([
        messages,
        (0,promise/* makeTypedMessagePromise */.N)(images)
    ]));
}
function collectLinks(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel?.aborted) return;
    const links = [
        ...tweetNode.querySelectorAll('a')
    ].filter((x)=>x.rel);
    const seen = new Set([
        'https://help.twitter.com/using-twitter/how-to-tweet#source-labels'
    ]);
    for (const x of links){
        if (seen.has(x.href)) continue;
        seen.add(x.href);
        info.postMetadataMentionedLinks.set(x, x.href);
        service/* default */.ZP.Helper.resolveTCOLink(x.href).then((val)=>{
            if (cancel?.aborted) return;
            if (!val) return;
            info.postMetadataMentionedLinks.set(x, val);
        }).catch(()=>{});
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/theme/color-tools.ts
var color_tools = __webpack_require__(13326);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/customization/custom.ts






function useThemeTwitterVariant(baseTheme) {
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,color_tools/* fromRGB */.f2)(themeSettings.color);
        const primaryContrastColorRGB = (0,color_tools/* fromRGB */.f2)('rgb(255, 255, 255)');
        (0,immer/* setAutoFreeze */.Fl)(false);
        const TwitterTheme = (0,immer/* produce */.Uy)(baseTheme, (theme)=>{
            if (themeSettings.isDim) {
                theme.palette.maskColor.bottom = '#15202B';
                theme.palette.maskColor.secondaryBottom = 'rgba(21, 32, 43, 0.8)';
            }
            theme.palette.primary = {
                light: (0,color_tools/* toRGB */.xr)((0,color_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,color_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,color_tools/* toRGB */.xr)((0,color_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,color_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = isMobileTwitter ? 0 : 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1280,
                xl: 1920
            };
            theme.components = theme.components || {};
            theme.components.MuiTypography = {
                styleOverrides: {
                    root: {
                        fontFamily: 'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                    }
                }
            };
            theme.components.MuiPaper = {
                defaultProps: {
                    elevation: 0
                },
                styleOverrides: {
                    root: {
                        background: theme.palette.maskColor.bottom
                    }
                }
            };
            theme.components.MuiTab = {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            };
            theme.components.MuiBackdrop = {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.action.mask
                    },
                    invisible: {
                        opacity: '0 !important'
                    }
                }
            };
        });
        (0,immer/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(TwitterTheme);
    }, [
        baseTheme,
        themeSettings
    ]);
}

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(37004);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ToolboxUnstyled.tsx + 5 modules
var ToolboxUnstyled = __webpack_require__(8388);
// EXTERNAL MODULE: ./packages/mask/content-script/components/GuideStep/index.tsx
var GuideStep = __webpack_require__(64798);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/constant.ts

const ButtonStyle = {
    [specs/* FontSize */.Bf.X_Small]: {
        buttonSize: 32,
        iconSize: 18,
        fontSize: 14,
        lineHeight: '18px',
        marginBottom: 11
    },
    [specs/* FontSize */.Bf.Small]: {
        buttonSize: 34,
        iconSize: 19,
        fontSize: 14,
        lineHeight: '19px',
        marginBottom: 11
    },
    [specs/* FontSize */.Bf.Normal]: {
        buttonSize: 36,
        iconSize: 20,
        fontSize: 15,
        lineHeight: '20px',
        marginBottom: 12
    },
    [specs/* FontSize */.Bf.Large]: {
        buttonSize: 40,
        iconSize: 22,
        fontSize: 17,
        lineHeight: '22px',
        marginBottom: 13
    },
    [specs/* FontSize */.Bf.X_Large]: {
        buttonSize: 43,
        iconSize: 24,
        fontSize: 18,
        lineHeight: '24px',
        marginBottom: 14
    }
};
const TipButtonStyle = {
    [specs/* FontSize */.Bf.X_Small]: {
        buttonSize: 29,
        iconSize: 18
    },
    [specs/* FontSize */.Bf.Small]: {
        buttonSize: 30,
        iconSize: 19
    },
    [specs/* FontSize */.Bf.Normal]: {
        buttonSize: 32,
        iconSize: 20
    },
    [specs/* FontSize */.Bf.Large]: {
        buttonSize: 35,
        iconSize: 22
    },
    [specs/* FontSize */.Bf.X_Large]: {
        buttonSize: 38,
        iconSize: 24
    }
};

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ToolboxHint_UI.tsx










const HORIZONTAL_BREAKPOINT = 1265;
const VERTICAL_BREAKPOINT = 855;
const Container = (0,styled/* default */.ZP)('div')`
    cursor: pointer;
    padding: 4px 0;
    @media screen and (max-height: ${VERTICAL_BREAKPOINT}px) {
        padding: 0;
    }
`;
const ListItem = (0,styled/* default */.ZP)((0,ListItemButton/* default */.Z))`
    border-radius: 9999px;
    display: inline-flex;
    &:hover {
        background: rgba(15, 20, 25, 0.1);
        ${({ theme })=>theme.palette.mode === 'dark' ? 'background: rgba(217, 217, 217, 0.1);' : ''}
    }
    /* twitter break point */
    @media screen and (max-width: ${HORIZONTAL_BREAKPOINT}px) {
        height: 50px;
    }
`;
const Text = (0,styled/* default */.ZP)((0,Typography/* default */.Z))`
    margin-right: 16px;
    font-family: inherit;
    font-weight: 400;
    white-space: nowrap;
    color: ${({ theme })=>theme.palette.mode === 'light' ? 'rgb(15, 20, 25)' : 'rgb(216, 216, 216)'};
`;
const ToolboxHint_UI_Icon = (0,styled/* default */.ZP)((0,ListItemIcon/* default */.Z))`
    color: ${({ theme })=>theme.palette.mode === 'light' ? 'rgb(15, 20, 25)' : 'rgb(216, 216, 216)'};
    min-width: 0;
`;
function ToolboxHintAtTwitter(props) {
    const { textMarginLeft, itemPadding, iconSize } = useSideBarNativeItemStyleVariants();
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    const buttonStyle = ButtonStyle[themeSettings.size];
    const Typography = (0,react.useMemo)(()=>{
        return ({ children })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Text, {
                fontSize: buttonStyle.iconSize,
                marginLeft: textMarginLeft ?? '20px',
                children: children
            });
    }, [
        buttonStyle.iconSize,
        textMarginLeft
    ]);
    const _mini = (0,useMediaQuery/* default */.Z)(`(max-width: ${HORIZONTAL_BREAKPOINT}px)`);
    const [mini, setMini] = (0,react.useState)(_mini);
    (0,react.useEffect)(()=>{
        const searchHomeLinkNameNode = searchHomeLinkName().evaluate();
        if (!searchHomeLinkNameNode) return;
        const observer = new MutationObserver((mutations)=>{
            setMini(!searchHomeLinkName().querySelector('span').evaluate());
        });
        observer.observe(searchHomeLinkNameNode, {
            subtree: true,
            childList: true
        });
        return ()=>observer.disconnect();
    }, []);
    const ListItemButton = (0,react.useMemo)(()=>{
        return (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem, {
                style: {
                    padding: `6px ${itemPadding ?? '11px'}`
                },
                onClick: props.onClick,
                children: props.children
            });
    }, [
        itemPadding
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        iconSize: Number(iconSize.replace('px', '')) - 1,
        mini: mini,
        ListItemIcon: ToolboxHint_UI_Icon,
        Typography: Typography,
        ListItemButton: ListItemButton,
        Container: Container,
        category: props.category
    });
}
function ProfileLinkAtTwitter() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GuideStep/* default */.Z, {
            step: 3,
            total: 4,
            tip: t.user_guide_tip_3(),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '100%'
                }
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ToolboxHint.tsx









const SideBarNativeItemTextMarginLeftRef = new ValueRef/* ValueRef */.Xf('20px');
const SideBarNativeItemIconSize = new ValueRef/* ValueRef */.Xf('24px');
const SideBarNativeItemPaddingRef = new ValueRef/* ValueRef */.Xf('11px');
function toolboxInSidebarSelector() {
    // Organization account don't have a [data-testid=AppTabBar_More_Menu] in page. see MF-3866
    return querySelector('[role="banner"] nav[role="navigation"] > div[data-testid=AppTabBar_More_Menu]');
}
function injectToolboxHintAtTwitter(signal, category) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(toolboxInSidebarSelector()).addListener('onAdd', updateStyle).addListener('onChange', updateStyle);
    (0,startWatch/* startWatch */.f)(watcher, {
        signal,
        missingReportRule: {
            name: 'Sidebar toolbox',
            rule () {
                // return false where the page should not match. maybe on mobile size?
                return true;
            }
        }
    });
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* RootWeb3ContextProvider */.t2, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtTwitter, {
            category: category
        })
    }));
    injectProfile(signal);
}
function updateStyle() {
    const SideBarNativeItem = document.querySelector('[role="banner"] [role="navigation"] > div > div');
    const SideBarNativeItemText = document.querySelector('[role="banner"] [role="navigation"] > div > div > div[dir="auto"]');
    const SideBarNativeItemIcon = document.querySelector('[role="banner"] [role="navigation"] > div > div > div:first-child');
    const SideBarNativeItemStyle = SideBarNativeItem ? window.getComputedStyle(SideBarNativeItem) : null;
    const SideBarNativeItemTextStyle = SideBarNativeItemText ? window.getComputedStyle(SideBarNativeItemText) : null;
    const SideBarNativeItemIconStyle = SideBarNativeItemIcon ? window.getComputedStyle(SideBarNativeItemIcon) : null;
    SideBarNativeItemPaddingRef.value = SideBarNativeItemStyle?.padding ?? '11px';
    SideBarNativeItemIconSize.value = SideBarNativeItemIconStyle?.width ?? '24px';
    SideBarNativeItemTextMarginLeftRef.value = SideBarNativeItemTextStyle?.marginLeft ?? '20px';
}
function useSideBarNativeItemStyleVariants() {
    return {
        textMarginLeft: (0,useValueRef/* useValueRef */.E)(SideBarNativeItemTextMarginLeftRef),
        itemPadding: (0,useValueRef/* useValueRef */.E)(SideBarNativeItemPaddingRef),
        iconSize: (0,useValueRef/* useValueRef */.E)(SideBarNativeItemIconSize)
    };
}
function injectProfile(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(sideBarProfileSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileLinkAtTwitter, {}));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"This tweet is encrypted with #mask_io (@realMaskNetwork). 📪🔑\\n\\n🎭 🎭🎭 Tired of plaintext? Try to send encrypted messages to your friends. Install {{encrypted}} to send your first encrypted tweet."}');
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/ja-JP.json
const ja_JP_namespaceObject = {};
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/ko-KR.json
const ko_KR_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"이 트윗은 이미 #mask_io (@realMaskNetwork)로 암호화되었습니다. 📪🔑\\n🎭 🎭🎭 {{encrypted}} 설치하여 친구에게 암호화 트윗을 보내 보세요!"}');
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"crwdns18524:0{{encrypted}}crwdne18524:0"}');
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/zh-CN.json
const zh_CN_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"此推特使用 #mask_io (@realMaskNetwork) 加密。 📪🔑\\n\\n🎭 🎭🎭 厌烦了纯文本？尝试向你的朋友发送加密消息。安装 {{encrypted}} 以发送你第一个加密推文。"}');
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/zh-TW.json
const zh_TW_namespaceObject = {};
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(59429);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages = {
    en: en_US_namespaceObject,
    ja: ja_JP_namespaceObject,
    ko: ko_KR_namespaceObject,
    qy: qya_AA_namespaceObject,
    'zh-CN': zh_CN_namespaceObject,
    zh: zh_TW_namespaceObject
};

const addDO_NOT_USEI18N = (0,register_ns/* createI18NBundle */.C)('DO_NOT_USE', languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/customization/i18n.ts

const i18NOverwriteTwitter = {
    mask: {}
};
const resource = languages;
for (const language of Object.keys(resource)){
    for (const key of Object.keys(resource[language])){
        i18NOverwriteTwitter.mask[key] ??= {};
        i18NOverwriteTwitter.mask[key][language] = resource[language][key];
    }
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/SearchResultInspector.tsx + 2 modules
var SearchResultInspector = __webpack_require__(65235);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/SearchResultInspector.tsx






function injectSearchResultInspectorAtTwitter(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchResultHeadingSelector());
    (0,startWatch/* startWatch */.f)(watcher, {
        signal,
        missingReportRule: {
            name: 'SearchResultInspector',
            rule: 'https://twitter.com/search?q='
        }
    });
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultInspector/* SearchResultInspector */.i, {}));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
var color = __webpack_require__(71623);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCollectionByTwitterHandler.ts
var useCollectionByTwitterHandler = __webpack_require__(96312);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useSnapshotSpacesByTwitterHandler.ts
var useSnapshotSpacesByTwitterHandler = __webpack_require__(18703);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/Events.ts
var Events = __webpack_require__(24272);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types.ts
var src_types = __webpack_require__(75093);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(86584);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ProfileTab.tsx
















function getStyleProps() {
    const EMPTY_STYLE = {};
    const eleTab = searchProfileTabSelector().evaluate()?.querySelector('div > div');
    const style = eleTab ? window.getComputedStyle(eleTab) : EMPTY_STYLE;
    const paddingEle = searchProfileTabSelector().evaluate();
    const paddingCss = paddingEle ? window.getComputedStyle(paddingEle) : EMPTY_STYLE;
    const eleNewTweetButton = searchNewTweetButtonSelector().evaluate();
    const newTweetButtonColorStyle = eleNewTweetButton ? window.getComputedStyle(eleNewTweetButton) : EMPTY_STYLE;
    const eleBackButton = searchAppBarBackSelector().evaluate();
    const backButtonColorStyle = eleBackButton ? window.getComputedStyle(eleBackButton) : EMPTY_STYLE;
    return {
        color: style.color,
        font: style.font,
        fontSize: style.fontSize,
        padding: style.paddingBottom,
        paddingX: paddingCss.paddingLeft || '16px',
        height: style.height || '53px',
        hover: backButtonColorStyle.color,
        line: newTweetButtonColorStyle.backgroundColor
    };
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { minWidth })=>{
    const props = getStyleProps();
    return {
        root: {
            '&:hover': {
                backgroundColor: new (color_default())(props.hover).alpha(0.1).toString(),
                cursor: 'pointer'
            },
            height: props.height,
            display: 'inline-block'
        },
        button: {
            zIndex: 1,
            position: 'relative',
            display: 'flex',
            minWidth: minWidth ?? 56,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingLeft: props.paddingX,
            paddingRight: props.paddingX,
            color: props.color,
            font: props.font,
            fontSize: props.fontSize,
            fontWeight: 500,
            '&:hover': {
                color: props.color
            },
            height: props.height
        },
        selected: {
            color: `${props.hover} !important`,
            fontWeight: 700
        },
        line: {
            borderRadius: 9999,
            position: 'absolute',
            bottom: 0,
            minWidth: 56,
            alignSelf: 'center',
            height: 4,
            backgroundColor: props.line
        },
        bar: {
            display: 'flex',
            zIndex: 0,
            position: 'relative',
            minWidth: 56
        }
    };
});
function nameTagClickHandler() {
    Messages/* MaskMessages */.q.events.profileTabUpdated.sendToLocal({
        show: false
    });
    Messages/* MaskMessages */.q.events.profileTabActive.sendToLocal({
        active: false
    });
    const nameTag = searchNameTag().evaluate();
    if (nameTag) nameTag.style.display = '';
    const eleEmpty = searchProfileEmptySelector().evaluate();
    if (eleEmpty) eleEmpty.style.display = 'none';
    const elePage = searchProfileTabPageSelector().evaluate();
    if (elePage) {
        elePage.style.visibility = 'hidden';
        elePage.style.height = 'auto';
    }
}
function tabClickHandler() {
    Messages/* MaskMessages */.q.events.profileTabUpdated.sendToLocal({
        show: false
    });
    Messages/* MaskMessages */.q.events.profileTabActive.sendToLocal({
        active: false
    });
    resetTwitterActivatedContent();
}
async function hideTwitterActivatedContent() {
    const eleTab = searchProfileTabSelector().evaluate()?.querySelector('div > div');
    const loseConnectionEle = searchProfileTabLoseConnectionPageSelector().evaluate();
    if (!eleTab) return;
    const style = window.getComputedStyle(eleTab);
    // hide the activated indicator
    const tabList = searchProfileTabListSelector().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div > div');
        if (_v) _v.style.color = style.color;
        const line = v.querySelector('div > div > div');
        if (line) line.style.display = 'none';
        v.addEventListener('click', v.closest('#open-nft-button') ? nameTagClickHandler : tabClickHandler);
    });
    if (loseConnectionEle) return;
    // hide the empty list indicator on the page
    const eleEmpty = searchProfileEmptySelector().evaluate();
    if (eleEmpty) eleEmpty.style.display = 'none';
    const nameTag = searchNameTag().evaluate();
    if (nameTag) nameTag.style.display = 'none';
    // hide the content page
    await (0,untilElementAvailable/* untilElementAvailable */.f)(searchProfileTabPageSelector());
    const elePage = searchProfileTabPageSelector().evaluate();
    if (elePage) {
        elePage.style.visibility = 'hidden';
        elePage.style.height = 'auto';
    }
}
function resetTwitterActivatedContent() {
    const eleTab = searchProfileTabSelector().evaluate()?.querySelector('div > div');
    const loseConnectionEle = searchProfileTabLoseConnectionPageSelector().evaluate();
    if (!eleTab) return;
    const tabList = searchProfileTabListSelector().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div > div');
        if (_v) _v.style.color = '';
        const line = v.querySelector('div > div > div');
        if (line) line.style.display = '';
        v.removeEventListener('click', v.closest('#open-nft-button') ? nameTagClickHandler : tabClickHandler);
    });
    if (loseConnectionEle) return;
    const eleEmpty = searchProfileEmptySelector().evaluate();
    if (eleEmpty) eleEmpty.style.display = '';
    const elePage = searchProfileTabPageSelector().evaluate();
    if (elePage) {
        elePage.style.visibility = 'visible';
        elePage.style.height = 'auto';
    }
}
function ProfileTabForTokenAndPersona() {
    const [hidden, setHidden] = (0,react.useState)(false);
    const currentVisitingSocialIdentity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const currentVisitingUserId = currentVisitingSocialIdentity?.identifier?.userId;
    const { value: collectionList, loading } = (0,useCollectionByTwitterHandler/* useCollectionByTwitterHandler */.m)(currentVisitingUserId);
    const collectionResult = collectionList?.[0];
    const twitterHandler = collectionResult?.collection?.socialLinks?.twitter || collectionResult?.socialLinks?.twitter;
    const { classes } = useStyles({
        minWidth: currentVisitingUserId && twitterHandler?.toLowerCase().endsWith(currentVisitingUserId.toLowerCase()) ? 0 : 56
    });
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.profileTabHidden.on((data)=>{
            setHidden(data.hidden);
        });
    }, []);
    return hidden || loading ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: currentVisitingUserId && twitterHandler?.toLowerCase().endsWith(currentVisitingUserId.toLowerCase()) ? 'More' : 'Web3',
        type: Events/* ProfileTabs */.u.WEB3,
        classes: {
            root: classes.root,
            button: classes.button,
            selected: classes.selected
        },
        reset: resetTwitterActivatedContent,
        clear: hideTwitterActivatedContent,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    });
}
function ProfileTabForDAO() {
    const currentVisitingSocialIdentity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const currentVisitingUserId = currentVisitingSocialIdentity?.identifier?.userId ?? '';
    const { value: spaceList, loading } = (0,useSnapshotSpacesByTwitterHandler/* useSnapshotSpacesByTwitterHandler */.n)(currentVisitingUserId);
    const { value: snapshotDisabled } = (0,useAsync/* default */.Z)(()=>{
        return service/* default */.ZP.Settings.getPluginMinimalModeEnabled(PluginID/* PluginID */.P.Snapshot);
    }, []);
    const [hidden, setHidden] = (0,react.useState)(snapshotDisabled === src_types/* BooleanPreference */.e.True);
    const { classes } = useStyles({
        minWidth: hidden ? 56 : 0
    });
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.profileTabHidden.on((data)=>{
            setHidden(data.hidden);
        });
    }, []);
    return hidden || loading || !spaceList?.length ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "DAO",
        type: Events/* ProfileTabs */.u.DAO,
        classes: {
            root: classes.root,
            button: classes.button,
            selected: classes.selected
        },
        reset: resetTwitterActivatedContent,
        clear: hideTwitterActivatedContent,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    });
}
function injectProfileTabAtTwitter(signal) {
    let tabInjected = false;
    const contentWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabPageSelector()).useForeach(()=>{
        const elePage = searchProfileTabPageSelector().evaluate();
        if (elePage && !tabInjected) {
            const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabListLastChildSelector());
            (0,startWatch/* startWatch */.f)(watcher, {
                signal,
                missingReportRule: {
                    name: 'Last tab in the profile page',
                    rule: isProfilePageLike
                },
                shadowRootDelegatesFocus: false
            });
            (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
                signal
            }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectProfileTab, {}));
            tabInjected = true;
        }
    });
    (0,startWatch/* startWatch */.f)(contentWatcher, {
        signal,
        missingReportRule: {
            name: 'ProfileTab',
            rule: isProfilePageLike
        },
        shadowRootDelegatesFocus: false
    });
}
function showNextArrow() {
    const next = nextTabListSelector().evaluate();
    if (!next) return;
    next.style.setProperty('pointer-events', 'auto', 'important');
    next.style.opacity = '1';
    const first = next.firstElementChild;
    if (!first) return;
    first.style.backgroundColor = 'rgba(39, 44, 48, 0.75)';
    first.style.opacity = '1';
    const svg = next.querySelector('svg');
    if (!svg) return;
    svg.style.color = 'rgb(255, 255, 255)';
}
function hiddenNextArrow() {
    const next = nextTabListSelector().evaluate();
    if (!next) return;
    next.style.removeProperty('opacity');
    next.style.removeProperty('pointer-events');
    const first = next.firstElementChild;
    if (!first) return;
    first.style.backgroundColor = 'rgba(15, 20, 25, 0.75)';
    first.style.removeProperty('opacity');
    const svg = next.querySelector('svg');
    if (!svg) return;
    svg.style.removeProperty('color');
}
function InjectProfileTab() {
    const web3TabRef = (0,react.useRef)(null);
    const { classes } = useStyles({
        minWidth: 56
    });
    const windowSize = (0,useWindowSize/* default */.Z)();
    const timeoutRef = (0,react.useRef)();
    const [isClick, setIsClick] = (0,react.useState)(false);
    function onMouseEnter() {
        if (isClick) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        const parent = searchProfileTabListLastChildSelector().closest(1).evaluate();
        if (!parent || !web3TabRef.current) return;
        if (Math.abs(parent.scrollWidth - (parent.scrollLeft + parent.clientWidth)) < 10) return;
        if (parent.clientWidth < parent.scrollWidth) {
            showNextArrow();
        }
    }
    function onNextClick() {
        const nextArrow = nextTabListSelector().evaluate();
        if (!nextArrow) return;
        nextArrow.style.removeProperty('cursor');
        setIsClick(true);
        hiddenNextArrow();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
    }
    function onMouseLeave() {
        if (!timeoutRef.current) timeoutRef.current = setTimeout(hiddenNextArrow, 500);
        setIsClick(false);
    }
    function onEnterNextArrow() {
        if (isClick) return;
        const nextArrow = nextTabListSelector().evaluate();
        if (!nextArrow) return;
        nextArrow.style.cursor = 'pointer';
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        showNextArrow();
    }
    function onLeaveNextArrow() {
        const nextArrow = nextTabListSelector().evaluate();
        if (!nextArrow) return;
        nextArrow.style.removeProperty('cursor');
        onMouseLeave();
    }
    const tabList = searchProfileTabListSelector().evaluate();
    const nextArrow = nextTabListSelector().evaluate();
    (0,react.useEffect)(()=>{
        web3TabRef.current?.addEventListener('mouseenter', onMouseEnter);
        web3TabRef.current?.addEventListener('mouseleave', onMouseLeave);
        nextArrow?.addEventListener('click', onNextClick);
        nextArrow?.addEventListener('mouseenter', onEnterNextArrow);
        nextArrow?.addEventListener('mouseleave', onLeaveNextArrow);
        tabList.map((v)=>{
            v.closest('div')?.addEventListener('mouseenter', onMouseEnter);
            v.closest('div')?.addEventListener('mouseleave', onMouseLeave);
        });
        return ()=>{
            web3TabRef.current?.removeEventListener('mouseenter', onMouseEnter);
            web3TabRef.current?.removeEventListener('mouseleave', onMouseLeave);
            nextArrow?.removeEventListener('click', onNextClick);
            nextArrow?.removeEventListener('mouseenter', onEnterNextArrow);
            nextArrow?.removeEventListener('mouseleave', onLeaveNextArrow);
            tabList.map((v)=>{
                v.closest('div')?.removeEventListener('mouseenter', onMouseEnter);
                v.closest('div')?.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, [
        windowSize,
        tabList,
        web3TabRef.current,
        nextArrow
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: web3TabRef,
        className: classes.bar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabForTokenAndPersona, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabForDAO, {})
        ]
    });
}

// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTabContent.tsx + 1 modules
var ProfileTabContent = __webpack_require__(87412);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ProfileTabContent.tsx









function injectProfileTabContentState(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabPageSelector());
    (0,startWatch/* startWatch */.f)(watcher, {
        signal,
        shadowRootDelegatesFocus: false
    });
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtTwitter, {}));
}
function injectProfileTabContentAtTwitter(signal) {
    const lostConnectionContentWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabLoseConnectionPageSelector()).useForeach(()=>Messages/* MaskMessages */.q.events.profileTabHidden.sendToLocal({
            hidden: true
        }));
    const contentWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabPageSelector()).useForeach(()=>Messages/* MaskMessages */.q.events.profileTabHidden.sendToLocal({
            hidden: false
        }));
    (0,startWatch/* startWatch */.f)(lostConnectionContentWatcher, {
        signal,
        shadowRootDelegatesFocus: false
    });
    (0,startWatch/* startWatch */.f)(contentWatcher, {
        signal,
        shadowRootDelegatesFocus: false
    });
    injectProfileTabContentState(signal);
}
function ProfileTabContent_getStyleProps() {
    const newTweetButton = searchNewTweetButtonSelector().evaluate();
    return {
        backgroundColor: newTweetButton ? window.getComputedStyle(newTweetButton).backgroundColor : undefined,
        fontFamily: newTweetButton?.firstChild ? window.getComputedStyle(newTweetButton.firstChild).fontFamily : undefined
    };
}
const ProfileTabContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const props = ProfileTabContent_getStyleProps();
    return {
        holder: {
            position: 'relative'
        },
        root: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1
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
const ProfileTabContentAtTwitter = /*#__PURE__*/ (0,react.memo)(function ProfileTabContentAtTwitter({ floating }) {
    const { classes } = ProfileTabContent_useStyles();
    const content = /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: {
            root: classes.root,
            button: classes.button,
            text: classes.text
        }
    });
    // If it's floating, for example being attached to emptyState timeline, we
    // can fix the position by putting it in a stacking context.
    return floating ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.holder,
        children: content
    }) : content;
});

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(18747);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/PostReplacer.tsx

function resolveLangNode(node) {
    return node.hasAttribute('lang') ? node : node.querySelector('[lang]') ?? node.parentElement?.querySelector('[lang]');
}
function injectPostReplacerAtTwitter(signal, current) {
    const isPromotionPost = !!current.rootNode?.querySelector('svg path[d$="996V8h7v7z"]');
    const isCollapsedPost = !!current.rootNode?.querySelector('[data-testid="tweet-text-show-more-link"]');
    if (isPromotionPost || isCollapsedPost) return;
    const hasVideo = !!current.rootNode?.closest('[data-testid="tweet"]')?.querySelector('video');
    if (hasVideo) return;
    const tags = Array.from(current.rootNode?.querySelectorAll([
        'a[role="link"][href*="cashtag_click"]',
        'a[role="link"][href*="hashtag_click"]'
    ].join(',')) ?? []);
    if (!tags.map((x)=>x.textContent).some((x)=>x && /^[#$]\w+$/i.test(x) && x.length <= 9)) return;
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            if (node.destroyed) return;
            const langNode = resolveLangNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (node.destroyed || !node.current) return;
            const langNode = resolveLangNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PageInspector.tsx + 6 modules
var PageInspector = __webpack_require__(87486);
// EXTERNAL MODULE: ./packages/mask/content-script/components/Welcomes/Banner.tsx
var Banner = __webpack_require__(31559);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Banner.tsx







function injectBannerAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    injectBanner(postEditorInTimelineSelector(), {
        signal,
        missingReportRule: {
            name: 'Setup prompt',
            rule: 'https://twitter.com/home'
        }
    });
    injectBanner(postEditorInPopupSelector().map((x)=>isCompose() && hasEditor() ? x : emptyNode), {
        signal,
        missingReportRule: {
            name: 'Setup prompt',
            rule: 'https://twitter.com/compose/tweet'
        }
    });
}
function injectBanner(ls, options) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ls);
    (0,startWatch/* startWatch */.f)(watcher, options);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal: options.signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Banner/* Banner */.j, {}));
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/CompositionDialog/Composition.tsx + 18 modules
var Composition = __webpack_require__(56463);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/PostDialog.tsx






function renderPostDialogTo(reason, ls, options) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ls);
    (0,startWatch/* startWatch */.f)(watcher, options);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal: options.signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        type: reason
    }));
}
function injectPostDialogAtTwitter(signal) {
    renderPostDialogTo('popup', postEditorContentInPopupSelector(), {
        signal,
        missingReportRule: {
            name: 'PostDialog popup',
            rule: 'https://twitter.com/compose/tweet'
        }
    });
    renderPostDialogTo('timeline', rootSelector(), {
        signal,
        missingReportRule: {
            name: 'PostDialog timeline',
            rule: 'https://twitter.com/home'
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(47494);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(26251);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/PostDialogHint.tsx















const PostDialogHint_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        iconButton: {
            '&:hover': {
                background: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.1)
            }
        },
        tooltip: {
            marginTop: '2px !important',
            borderRadius: 2,
            padding: 4,
            background: vars/* MaskColorVar */.Z.twitterTooltipBg,
            color: vars/* MaskColorVar */.Z.white
        }
    }));
function injectPostDialogHintAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    renderPostDialogHintTo('timeline', searchReplyToolbarSelector(), {
        signal,
        missingReportRule: {
            name: 'PostDialog hint timeline',
            rule: 'https://twitter.com/home'
        }
    });
    renderPostDialogHintTo('popup', postEditorInPopupSelector().map((x)=>isCompose() && hasEditor() ? x : emptyNode), {
        signal,
        missingReportRule: {
            name: 'PostDialog hint popup',
            rule: 'https://twitter.com/compose/tweet'
        }
    });
}
function renderPostDialogHintTo(reason, ls, options) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ls);
    (0,startWatch/* startWatch */.f)(watcher, options);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal: options.signal,
        tag: ()=>{
            // Vertical center the button when font size of Twitter is set to `large` or `very large`
            const tag = document.createElement('span');
            Object.assign(tag.style, {
                display: 'inline-flex',
                alignItems: 'center',
                height: '100%'
            });
            const svgIcon = document.querySelector('[data-testid="geoButton"] svg');
            const size = svgIcon ? (0,clamp/* default */.Z)(svgIcon.getBoundingClientRect().width, 18, 24) : undefined;
            const geoButton = document.querySelector('[data-testid="geoButton"]');
            const padding = geoButton && size ? (geoButton.getBoundingClientRect().width - size) / 2 : undefined;
            if (padding) tag.style.setProperty('--icon-padding', `${padding}px`);
            if (size) tag.style.setProperty('--icon-size', `${size}px`);
            return tag;
        }
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtTwitter, {
        reason: reason
    }));
}
function PostDialogHintAtTwitter({ reason }) {
    const { classes } = PostDialogHint_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const onHintButtonClicked = (0,react.useCallback)(()=>{
        const content = settings/* sayHelloShowed */.Pg[base/* twitterBase */.o.networkIdentifier].value ? undefined : (0,core_text/* makeTypedMessageText */.P)(t.setup_guide_say_hello_content() + t.setup_guide_say_hello_follow({
            account: '@realMaskNetwork'
        }));
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
            reason: isReplyPageSelector() ? 'reply' : reason,
            open: true,
            content
        });
        settings/* sayHelloShowed */.Pg[base/* twitterBase */.o.networkIdentifier].value = true;
    }, [
        reason,
        isReplyPageSelector
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        disableGuideTip: reason === 'popup',
        classes: {
            iconButton: classes.iconButton,
            tooltip: classes.tooltip
        },
        size: 20,
        onHintButtonClicked: onHintButtonClicked,
        tooltip: {
            disabled: false,
            placement: 'top'
        }
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtTwitter(signal);
    injectPostDialogHintAtTwitter(signal);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/StartSetupGuide.tsx + 18 modules
var StartSetupGuide = __webpack_require__(14712);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostInspector.tsx + 15 modules
var PostInspector = __webpack_require__(10642);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/PostInspector.tsx
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ 

function injectPostInspectorAtTwitter(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            if (node.destroyed) return;
            const contentContainer = node.current.parentElement;
            if (!contentContainer) return;
            const content = contentContainer.querySelector('[lang]');
            if (!content) return;
            for (const a of content.querySelectorAll('a')){
                if ((0,twitter/* TwitterDecoder */.Y)(a.title).isSome()) hideDOM(a);
                if (/^https?:\/\/mask(\.io|book\.com)$/i.test(a.title)) hideDOM(a);
            }
            for (const span of content.querySelectorAll('span')){
                // match (.) (\n) (—§—) (any space) (/*)
                // Note: In Chinese we can't hide dom because "解密这条推文。\n—§—" is in the same DOM
                // hide it will break the sentence.
                if (span.innerText.match(/^\.\n\u2014\u00A7\u2014 +\/\* $/)) hideDOM(span);
                // match (any space) (*/) (any space)
                if (span.innerText.match(/^ +\*\/ ?$/)) hideDOM(span);
            }
            const parent = content.parentElement?.nextElementSibling;
            if (parent && matches(parent.innerText)) {
                parent.style.height = '0';
                parent.style.overflow = 'hidden';
            }
            const cardWrapper = contentContainer.parentElement?.querySelector('[data-testid="card.wrapper"]');
            if (cardWrapper) {
                cardWrapper.style.display = 'none';
                cardWrapper.setAttribute('aria-hidden', 'true');
            }
        }
    })(current, signal);
}
function matches(input) {
    input = input.toLowerCase();
    return input.includes('maskbook.com') && input.includes('make privacy protected again');
}
function hideDOM(a) {
    a.style.width = '0';
    a.style.height = '0';
    a.style.overflow = 'hidden';
    a.style.display = 'inline-block';
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(30504);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var plugin_infra_src_types = __webpack_require__(62476);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/PostActions.tsx


const ActionsRenderer = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.TipsRealm?.UI?.Content);
function PostActions() {
    const identifier = PostContext/* usePostInfoDetails */.H9.author();
    if (!identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsRenderer, {
        identity: identifier,
        slot: plugin_infra_src_types.Plugin.SiteAdaptor.TipsSlot.Post
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostActions.tsx





function createRootElement() {
    const root = document.createElement('div');
    Object.assign(root.style, {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    });
    return root;
}
function createPostActionsInjector() {
    return function injectPostActions(postInfo, signal) {
        if (postInfo.actionsElement) {
            const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(PostContext/* PostInfoProvider */.eT, {
                post: postInfo,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostActions, {})
            });
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(postInfo.actionsElement.afterShadow, {
                tag: createRootElement,
                key: 'post-actions',
                untilVisible: true,
                signal
            });
            if (postInfo.actionsElement?.realCurrent?.parentNode) {
                const actionsContainer = postInfo.actionsElement.realCurrent.parentNode;
                actionsContainer.style.maxWidth = '100%';
            }
            root.render(jsx);
            return root.destroy;
        }
        return noop/* default */.Z;
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/PostActions/index.tsx


function injectPostActionsAtTwitter(signal, postInfo) {
    if (!src/* Flags */.v.post_actions_enabled) return;
    const injector = createPostActionsInjector();
    return injector(postInfo, signal);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Tips/ProfileTipsButton.tsx










function injectOpenTipsButtonOnProfile(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(profileFollowButtonSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTipsSlot, {}));
}
const ProfileTipsButton_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        hide: {
            display: 'none'
        },
        slot: {
            position: 'relative',
            height: props.size,
            width: props.size,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            marginRight: theme.spacing(1),
            marginBottom: props.marginBottom,
            verticalAlign: 'top'
        }
    }));
function ProfileTipsSlot() {
    const visitingPersona = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    const buttonStyle = ButtonStyle[themeSettings.size];
    const { classes, cx } = ProfileTipsButton_useStyles({
        size: buttonStyle.buttonSize,
        marginBottom: buttonStyle.marginBottom
    });
    const [disabled, setDisabled] = (0,react.useState)(true);
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.TipsRealm?.UI?.Content);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: visitingPersona.identifier,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.TipsSlot.Profile,
            iconSize: buttonStyle.iconSize,
            buttonSize: buttonStyle.buttonSize,
            onStatusUpdate: setDisabled
        });
    }, [
        visitingPersona.identifier,
        buttonStyle.buttonSize,
        buttonStyle.iconSize
    ]);
    if (!component || !visitingPersona.identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.hide : null),
        children: component
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/types.ts
var Avatar_src_types = __webpack_require__(38827);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/AvatarType.ts


function getAvatarType(ele) {
    const dom = ele ?? searchTwitterAvatarNFTStyleSelector().evaluate() ?? searchTwitterAvatarNormalSelector().querySelector('div').evaluate();
    if (!dom) return Avatar_src_types/* AvatarType */.f.Default;
    const styles = window.getComputedStyle(dom);
    return styles.clipPath.includes('#shape-square') ? Avatar_src_types/* AvatarType */.f.Square : styles.clipPath.includes('#shape-hex') ? Avatar_src_types/* AvatarType */.f.Clip : Avatar_src_types/* AvatarType */.f.Default;
}
function isVerifiedUser(ele) {
    return !!ele.closest('[data-testid="tweet"]')?.querySelector('[data-testid="icon-verified"]');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Tips/hooks.ts


function useUserIdentity(userId) {
    const { data: identity } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'get-user-identity',
            userId
        ],
        queryFn: ()=>getUserIdentity(userId)
    });
    return identity;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Tips/FollowTipsButton.tsx














function FollowTipsButton_getUserId(ele) {
    const profileLink = ele.closest('[data-testid="UserCell"]')?.querySelector('a[role="link"]');
    if (!profileLink) return;
    return profileLink.getAttribute('href')?.slice(1);
}
function injectTipsButtonOnFollowButton(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(normalFollowButtonSelector());
    (0,startWatch/* startWatch */.f)(watcher.useForeach((ele)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const run = async ()=>{
            const userId = FollowTipsButton_getUserId(ele);
            if (!userId) return;
            const proxy = (0,DOM_Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = ele;
            const isVerified = isVerifiedUser(ele);
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.beforeShadow, {
                signal
            });
            root.render(isVerified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FollowButtonTipsSlot, {
                userId: userId
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}));
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
const FollowTipsButton_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        disabled: {
            display: 'none'
        },
        slot: {
            height: 36,
            width: 36,
            position: 'absolute',
            left: -10,
            top: 1,
            transform: 'translate(-100%)'
        }
    }));
const FollowButtonTipsSlot = /*#__PURE__*/ (0,react.memo)(function FollowButtonTipsSlot({ userId }) {
    const themeSetting = (0,useActivatedUI/* useThemeSettings */.XG)();
    const tipStyle = TipButtonStyle[themeSetting.size];
    const { classes, cx } = FollowTipsButton_useStyles();
    const identity = useUserIdentity(userId);
    const [disabled, setDisabled] = (0,react.useState)(true);
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.TipsRealm?.UI?.Content);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identity?.identifier,
            buttonSize: tipStyle.buttonSize,
            iconSize: tipStyle.iconSize,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.TipsSlot.FollowButton,
            onStatusUpdate: setDisabled
        });
    }, [
        identity?.identifier,
        tipStyle.buttonSize,
        tipStyle.iconSize
    ]);
    if (!identity?.identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.disabled : null),
        children: component
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Tips/PostTipsButton.tsx













function postShareButtonSelector() {
    return querySelectorAll('article[data-testid="tweet"] [role="group"] > div:has([aria-haspopup="menu"]):last-child');
}
function PostTipsButton_getUserId(ele) {
    const avatar = ele.closest('[data-testid="tweet"]')?.querySelector('[data-testid^="UserAvatar-Container-"]');
    if (!avatar) return;
    return avatar.dataset.testid?.slice(21);
}
// "UserAvatar-Container-".length === 21
function PostTipsButton_createRootElement() {
    const root = document.createElement('div');
    Object.assign(root.style, {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    });
    return root;
}
function injectTipsButtonOnPost(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(postShareButtonSelector());
    (0,startWatch/* startWatch */.f)(watcher.useForeach((ele)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const run = async ()=>{
            const userId = PostTipsButton_getUserId(ele);
            if (!userId) return;
            const proxy = (0,DOM_Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = ele;
            ele.style.flex = '1';
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                signal,
                tag: PostTipsButton_createRootElement
            });
            // untilVisible: true,
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostTipsSlot, {
                userId: userId
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
const PostTipsButton_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        disabled: {
            display: 'none'
        }
    }));
const PostTipsSlot = /*#__PURE__*/ (0,react.memo)(function PostTipsSlot({ userId }) {
    const themeSetting = (0,useActivatedUI/* useThemeSettings */.XG)();
    const tipStyle = TipButtonStyle[themeSetting.size];
    const { classes } = PostTipsButton_useStyles();
    const identity = useUserIdentity(userId);
    const [disabled, setDisabled] = (0,react.useState)(true);
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.TipsRealm?.UI?.Content);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identity?.identifier,
            buttonSize: tipStyle.buttonSize,
            iconSize: tipStyle.iconSize,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.TipsSlot.Post,
            onStatusUpdate: setDisabled
        });
    }, [
        identity?.identifier,
        tipStyle.buttonSize,
        tipStyle.iconSize
    ]);
    if (!identity?.identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: disabled ? classes.disabled : undefined,
        children: component
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Tips/index.tsx



function injectTips(signal) {
    injectOpenTipsButtonOnProfile(signal);
    injectTipsButtonOnFollowButton(signal);
    injectTipsButtonOnPost(signal);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/utils/avatar.ts



function getInjectNodeInfo(ele) {
    const imgEle = ele.querySelector('img');
    if (!imgEle) return;
    const nftDom = imgEle.closest('a[href][role=link]');
    if (!nftDom) return;
    nftDom.style.overflow = 'unset';
    const avatarParent = nftDom.parentElement;
    let avatarType = Avatar_src_types/* AvatarType */.f.Default;
    if (avatarParent) {
        avatarType = getAvatarType(avatarParent);
        if (false) {}
    }
    const { offsetWidth: width, offsetHeight: height } = nftDom;
    const avatarId = entry/* Twitter */.tL.getAvatarId(imgEle.src);
    if (!avatarId) return;
    return {
        element: nftDom,
        width,
        height,
        avatarId,
        avatarType
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(60307);
// EXTERNAL MODULE: ./node_modules/.pnpm/tss-react@4.9.0_@emotion+react@11.11.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/tss-react/esm/index.js + 16 modules
var tss_react_esm = __webpack_require__(94245);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/hooks/useNFTContainerAtTwitter.ts


function useNFTContainerAtTwitter(screenName) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!screenName) return;
        return entry/* Twitter */.tL.getUserNftContainer(screenName);
    }, [
        screenName
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatarClip.tsx





// from twitter page
const ViewBoxWidth = 200;
const ViewBoxHeight = 188;
const rainbowBorderKeyFrames = (0,tss_react_esm/* keyframes */.F4)`
    0%, to {
        stroke: #00f8ff;
    }
    20% {
        stroke: #a4ff00;
    }
    40% {
        stroke: #f7275e;
    }
    60% {
        stroke: #ffd300;
    }
    80% {
        stroke: #ff8a00;
    }
`;
const NFTAvatarClip_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {},
        miniBorder: {
            transform: 'scale(0.94, 0.96) translate(7px, 4px)',
            strokeWidth: 6,
            stroke: '#00f8ff',
            fill: 'none'
        },
        borderPath: {
            transform: 'scale(0.98, 1.035) translate(2px, -3px)',
            strokeWidth: 3,
            fill: 'none'
        },
        background: {
            transform: 'scale(1, 1.05) translate(1px, -3px)',
            fill: 'none',
            strokeWidth: 30,
            stroke: 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
        },
        rainbowBorder: {
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            transition: 'none',
            fill: 'none',
            strokeLinejoin: 'round',
            strokeLinecap: 'round'
        },
        text: {
            transform: navigator.userAgent.includes('Firefox') ? 'translate(1px, -1px)' : 'translate(1px, -5px) '
        },
        price: {
            transform: 'translate(0, -5px) '
        },
        namePath: {
            transform: 'scale(0.9) translate(10px, 10px)'
        }
    }));
function NamePath(props) {
    const { classes } = NFTAvatarClip_useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        className: classes.root,
        d: "M6.74789,69.55C14.0458,54.2034 22.5561,39.4634 32.1979,25.47L35.3079,20.96C39.1367,15.4049 44.155,10.7724 49.9981,7.3994C55.8413,4.02636 62.3625,1.99743 69.0879,1.46004L74.5479,1.02004C91.4873,-0.340012 108.508,-0.340012 125.448,1.02004L130.908,1.46004C137.633,1.99743 144.155,4.02636 149.998,7.3994C155.841,10.7724 160.859,15.4049 164.688,20.96L167.798,25.43C177.44,39.4234 185.95,54.1634 193.248,69.51",
        id: props.id
    });
}
function PricePath({ id }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37",
        id: id
    });
}
function BorderPath({ id, transform, fill }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        id: id,
        transform: transform,
        stroke: fill,
        d: "M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z"
    });
}
function NFTAvatarClip_Text(props) {
    const { xlinkHref, fontSize = 12, text, fill, dominantBaseline = 'mathematical' } = props;
    const { classes } = NFTAvatarClip_useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
        x: "0%",
        textAnchor: "middle",
        fill: fill,
        fontFamily: "sans-serif",
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
            xlinkHref: xlinkHref,
            startOffset: "50%",
            rotate: "auto",
            dominantBaseline: dominantBaseline,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                fontWeight: "bold",
                fontSize: fontSize,
                children: text
            })
        })
    });
}
function NFTAvatarClip(props) {
    const { size, viewBoxHeight = ViewBoxHeight, viewBoxWidth = ViewBoxWidth, name, price } = props;
    const id = (0,react.useMemo)(()=>props.id ?? (0,v4/* default */.Z)(), [
        props.id
    ]);
    const { classes, cx } = NFTAvatarClip_useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: classes.root,
        width: size,
        height: size,
        id: id,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: `${id}-gradient`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0",
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
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: `${id}-border-gradient`,
                        x1: "100%",
                        y1: "0%",
                        x2: "0%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#24FF00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#00E4C9 "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NamePath, {
                        id: `${id}-name-path`,
                        classes: {
                            root: classes.namePath
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PricePath, {
                        id: `${id}-price-path`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderPath, {
                        id: `${id}-border-path`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                        id: `${id}-pattern`,
                        x: "0",
                        y: "0",
                        width: "300%",
                        height: "100%",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                            cx: viewBoxWidth / 2,
                            cy: viewBoxHeight / 2,
                            r: Math.max(viewBoxWidth, viewBoxHeight) + 1,
                            fill: `url(#${id}-gradient)`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                dur: "10s",
                                repeatCount: "indefinite",
                                from: `0 ${viewBoxWidth / 2} ${viewBoxHeight / 2}`,
                                to: `360 ${viewBoxWidth / 2} ${viewBoxHeight / 2}`
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: `#${id}-border-path`,
                        className: classes.background
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: `#${id}-border-path`,
                        className: cx(classes.rainbowBorder, classes.borderPath)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.text,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip_Text, {
                            xlinkHref: `#${id}-name-path`,
                            fill: `url(#${id}-pattern)`,
                            dominantBaseline: navigator.userAgent.includes('Firefox') ? 'text-before-edge' : 'mathematical',
                            text: name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.price,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip_Text, {
                            fill: `url(#${id}-pattern)`,
                            xlinkHref: `#${id}-price-path`,
                            dominantBaseline: navigator.userAgent.includes('Firefox') ? 'central' : 'mathematical',
                            text: price
                        })
                    })
                ]
            })
        ]
    });
}
function NFTAvatarMiniClip(props) {
    const { size, viewBoxHeight = ViewBoxHeight, viewBoxWidth = ViewBoxWidth, screenName, className } = props;
    const id = (0,react.useMemo)(()=>props.id ?? (0,v4/* default */.Z)(), [
        props.id
    ]);
    const { classes, cx } = NFTAvatarClip_useStyles(undefined, {
        props
    });
    const { loading, value: avatarMetadata } = useNFTContainerAtTwitter(screenName);
    if (loading || !avatarMetadata?.address || !avatarMetadata?.token_id) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: cx(classes.root, className),
        width: size,
        height: size,
        id: id,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderPath, {
                    id: `${id}-border-path`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: `${id}-clip-path`,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderPath, {
                    id: id,
                    transform: `scale(${size / viewBoxWidth})`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                    xlinkHref: `#${id}-border-path`,
                    className: cx(classes.rainbowBorder, classes.miniBorder)
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(43738);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/MiniAvatarBorder.tsx


function MiniAvatarBorder(props) {
    const { avatarType, size, screenName, avatarId } = props;
    if (avatarType === Avatar_src_types/* AvatarType */.f.Clip) return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarMiniClip, {
        screenName: screenName,
        size: size
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
        userId: screenName,
        avatarId: avatarId || '',
        width: size - 4,
        height: size - 4,
        siteKey: constants/* RSS3_KEY_SITE */.q1.TWITTER,
        avatarType: avatarType
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/Avatar.tsx









function Avatar_getUserId(ele) {
    const attribute = ele.dataset.testid || '';
    if (attribute.endsWith('unknown')) {
        return ele?.querySelector('a[href][role=link]')?.getAttribute('href')?.slice(1);
    }
    return attribute.split('-').pop();
}
function inject(selector, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(selector()).useForeach((ele)=>{
        let remover;
        const run = async ()=>{
            const userId = Avatar_getUserId(ele);
            if (!userId) return;
            const info = getInjectNodeInfo(ele);
            if (!info) return;
            const proxy = (0,DOM_Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = info.element.firstChild;
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                untilVisible: true,
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniAvatarBorder, {
                    avatarType: info.avatarType,
                    size: info.width,
                    screenName: userId || ui.activatedSiteAdaptorUI.collecting.identityProvider?.recognized.value.identifier?.userId || '',
                    avatarId: info.avatarId
                })
            }));
            remover = root.destroy;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: ()=>remover?.()
        };
    }), signal);
}
async function injectUserNFTAvatarAtTwitter(signal) {
    inject(postAvatarSelector, signal);
    inject(followUserAvatarSelector, signal);
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatarButton.tsx
var NFTAvatarButton = __webpack_require__(13590);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ConnectPersonaBoundary/index.tsx
var ConnectPersonaBoundary = __webpack_require__(4145);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/usePersonasFromDB.ts
var usePersonasFromDB = __webpack_require__(4172);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/NFTAvatarEditProfileDialog.tsx
















function injectOpenNFTAvatarEditProfileButtonAtEditProfileDialog(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileAvatarSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInTwitter, {}));
    // clear cache
    const saveButtonWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileSaveSelector()).useForeach((node, key, proxy)=>{
        const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            untilVisible: true,
            signal
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarSave, {}));
        return ()=>root.destroy();
    });
    (0,startWatch/* startWatch */.f)(saveButtonWatcher, signal);
}
function NFTAvatarSave() {
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    (0,react.useEffect)(()=>{
        if (!identity.identifier?.userId) return;
        const saveButton = searchProfileSaveSelector().evaluate();
        if (!saveButton) return;
        const clearCache = ()=>{
            entry/* Twitter */.tL.staleUserByScreenName(identity.identifier?.userId ?? '');
        };
        saveButton.addEventListener('click', clearCache);
        return ()=>saveButton.removeEventListener('click', clearCache);
    }, [
        identity.identifier?.userId
    ]);
    return null;
}
const NFTAvatarEditProfileDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { buttonSize, fontSize })=>({
        root: {
            display: 'flex',
            top: 211,
            right: 16,
            position: 'absolute'
        },
        button: {
            height: buttonSize
        },
        text: {
            fontWeight: 700,
            fontSize
        }
    }));
function clickHandler() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.avatarSettingDialogEvent.sendToLocal({
        open: true
    });
}
function OpenNFTAvatarEditProfileButtonInTwitter() {
    const personas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    const buttonStyle = ButtonStyle[themeSettings.size];
    const { classes } = NFTAvatarEditProfileDialog_useStyles({
        buttonSize: buttonStyle.buttonSize,
        fontSize: buttonStyle.fontSize
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectPersonaBoundary/* ConnectPersonaBoundary */.C, {
            personas: personas,
            identity: lastRecognized,
            currentPersonaIdentifier: currentIdentifier,
            openDashboard: service/* default */.ZP.Helper.openDashboard,
            handlerPosition: "top-right",
            customHint: true,
            directTo: PluginID/* PluginID */.P.Avatar,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
                classes: {
                    root: classes.button,
                    text: classes.text
                },
                onClick: clickHandler
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/NFTAvatarEditProfile.tsx
















function injectOpenNFTAvatarEditProfileButton(signal) {
    injectOpenNFTAvatarEditProfileButtonAtProfilePage(signal);
    injectOpenNFTAvatarEditProfileButtonAtEditProfileDialog(signal);
}
function injectOpenNFTAvatarEditProfileButtonAtProfilePage(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchEditProfileSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarEditProfile_OpenNFTAvatarEditProfileButtonInTwitter, {}));
}
const NFTAvatarEditProfile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        root: {
            minHeight: props.buttonSize,
            marginBottom: props.marginBottom,
            marginTop: 1,
            marginRight: theme.spacing(2),
            height: props.buttonSize
        },
        text: {
            fontWeight: 700,
            fontSize: props.fontSize
        }
    }));
function openNFTAvatarSettingDialog() {
    const editDom = searchEditProfileSelector().evaluate();
    editDom?.click();
}
function useNFTAvatarButtonStyles() {
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    const style = ButtonStyle[themeSettings.size];
    return NFTAvatarEditProfile_useStyles(style);
}
function NFTAvatarEditProfile_clickHandler() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.avatarSettingDialogEvent.sendToLocal({
        open: true,
        startPicking: true
    });
}
function NFTAvatarEditProfile_OpenNFTAvatarEditProfileButtonInTwitter() {
    const { classes } = useNFTAvatarButtonStyles();
    const allPersonas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    (0,react.useEffect)(()=>{
        const clearTasks = [
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.personaBindFinished.on((ev)=>{
                if (ev.pluginID === PluginID/* PluginID */.P.Avatar) NFTAvatarEditProfile_clickHandler();
            }),
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.applicationDialogEvent.on((ev)=>{
                if (ev.pluginID === PluginID/* PluginID */.P.Avatar) NFTAvatarEditProfile_clickHandler();
            })
        ];
        return ()=>{
            clearTasks.forEach((task)=>task());
        };
    }, [
        NFTAvatarEditProfile_clickHandler
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectPersonaBoundary/* ConnectPersonaBoundary */.C, {
        personas: allPersonas,
        identity: lastRecognized,
        currentPersonaIdentifier: currentIdentifier,
        openDashboard: service/* default */.ZP.Helper.openDashboard,
        handlerPosition: "top-right",
        customHint: true,
        directTo: PluginID/* PluginID */.P.Avatar,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
            classes: {
                root: classes.root,
                text: classes.text
            },
            onClick: NFTAvatarEditProfile_clickHandler
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/TweetNFTAvatar.tsx











function TweetNFTAvatar_(main, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(main()).useForeach((ele, _, meta)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const run = async ()=>{
            const userId = getUserId(ele);
            const info = getInjectNodeInfo(ele.firstChild);
            if (!info) return;
            const proxy = (0,DOM_Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = info.element.firstChild;
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                untilVisible: true,
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniAvatarBorder, {
                    avatarType: info.avatarType,
                    size: info.width,
                    screenName: userId || ui.activatedSiteAdaptorUI.collecting.identityProvider?.recognized.value.identifier?.userId || ''
                })
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
async function injectUserNFTAvatarAtTweet(signal) {
    TweetNFTAvatar_(searchTweetAvatarSelector, signal);
    TweetNFTAvatar_(searchRetweetAvatarSelector, signal);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(95555);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/customization/render-fragments.tsx




const TwitterRenderFragments = {
    AtLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = '/' + props.children.slice(1);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: target,
            children: props.children,
            fontSize: "inherit"
        });
    }),
    HashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/hashtag/${encodeURIComponent(text)}?src=hashtag_click`;
        const { hasMatch, ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
            ...events,
            href: target,
            fontSize: "inherit",
            children: [
                props.children,
                props.suggestedPostImage
            ]
        });
    }),
    CashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = `/search?q=${encodeURIComponent(props.children)}&src=cashtag_click`;
        const { hasMatch, ...events } = (0,Components_Text/* useTagEnhancer */.fR)('cash', props.children.slice(1));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children,
            fontSize: "inherit"
        });
    }),
    Image: ()=>null
};

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCover.tsx
var ProfileCover = __webpack_require__(4347);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ProfileCover.tsx






function injectProfileCover(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileCoverSelector());
    (0,startWatch/* startWatch */.f)(watcher, {
        signal,
        missingReportRule: {
            name: 'profile page cover',
            rule: isProfilePageLike
        }
    });
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCoverAtTwitter, {}));
}
function ProfileCoverAtTwitter() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCover/* ProfileCover */.D, {});
}

// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/AnchorContext/index.tsx
var AnchorContext = __webpack_require__(91688);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootPopper.ts
var ShadowRootPopper = __webpack_require__(50502);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Fade/Fade.js
var Fade = __webpack_require__(49803);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/getTabContent.tsx
var getTabContent = __webpack_require__(1375);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useSocialAccountsBySettings.ts
var useSocialAccountsBySettings = __webpack_require__(70790);
// EXTERNAL MODULE: ./packages/shared/src/utils/addressSorter.ts
var addressSorter = __webpack_require__(55432);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/getAvailablePlugins.ts
var getAvailablePlugins = __webpack_require__(79412);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(72552);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var evm_src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/ScopedDomains/index.tsx
var ScopedDomains = __webpack_require__(38050);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var web3_telemetry_src_types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/plugins/Tips/src/components/TipsButton/index.tsx + 3 modules
var TipsButton = __webpack_require__(23087);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentPersonaConnectStatus.ts
var useCurrentPersonaConnectStatus = __webpack_require__(54928);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SocialAccountList/index.tsx + 3 modules
var SocialAccountList = __webpack_require__(65447);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useCurrentPersona.ts
var useCurrentPersona = __webpack_require__(18937);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AddressItem/index.tsx
var AddressItem = __webpack_require__(72665);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenWithSocialGroupMenu/index.tsx + 1 modules
var TokenWithSocialGroupMenu = __webpack_require__(52266);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-providers/src/types/Trending.ts
var Trending = __webpack_require__(91948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/messages.ts
var messages = __webpack_require__(68026);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCard/AvatarDecoration.tsx




function AvatarDecoration({ clipPathId, userId, className, size }) {
    const { data: user } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'twitter',
            'profile',
            'check-nft-avatar',
            userId
        ],
        queryFn: ()=>{
            if (!userId) return null;
            return entry/* Twitter */.tL.getUserByScreenName(userId, true);
        }
    });
    if (!userId || !user) return null;
    return user.has_nft_avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarMiniClip, {
        className: className,
        id: clipPathId,
        size: size,
        screenName: userId
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
        classes: {
            root: className
        },
        userId: userId,
        avatarId: entry/* Twitter */.tL.getAvatarId(user.avatarURL),
        height: size,
        width: size,
        siteKey: constants/* RSS3_KEY_SITE */.q1.TWITTER
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCard/ProfileBar.tsx
















const ProfileBar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 4
        },
        avatar: {
            position: 'relative',
            height: 40,
            width: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            flexGrow: 0,
            filter: 'drop-shadow(0px 6px 12px rgba(28, 104, 243, 0.2))',
            backdropFilter: 'blur(16px)',
            '& img': {
                position: 'absolute',
                borderRadius: '100%',
                // Adjust to fit the rainbow border.
                transform: 'scale(0.94, 0.96) translate(0, 1px)'
            },
            [`& .${refs.avatarDecoration}`]: {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                transform: 'scale(1)'
            }
        },
        avatarImageContainer: {
            borderRadius: '50%'
        },
        avatarDecoration: {},
        description: {
            height: 40,
            marginLeft: 10,
            overflow: 'auto',
            flexGrow: 1,
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            '& :focus:not(:focus-visible)': {
                outline: 0
            }
        },
        nickname: {
            color: theme.palette.text.primary,
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '22px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        addressRow: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            columnGap: 2
        },
        address: {
            color: theme.palette.text.primary,
            fontSize: 14,
            height: 18,
            fontWeight: 400,
            lineHeight: '18px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        linkIcon: {
            lineHeight: '14px',
            height: 14,
            overflow: 'hidden',
            color: theme.palette.maskColor.second,
            cursor: 'pointer',
            flexShrink: 0
        }
    }));
/**
 * What a Profile includes:
 * - Website info
 * - Wallets
 */ const ProfileBar = /*#__PURE__*/ (0,react.memo)(function ProfileBar({ socialAccounts, address, identity, onAddressChange, className, children, ...rest }) {
    const { classes, theme, cx } = ProfileBar_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { current: avatarClipPathId } = (0,react.useRef)((0,v4/* default */.Z)());
    const { anchorEl, anchorBounding } = (0,AnchorContext/* useAnchor */.Wb)();
    const { value: collectionList = src_constants/* EMPTY_LIST */.rP } = (0,useCollectionByTwitterHandler/* useCollectionByTwitterHandler */.m)(identity.identifier?.userId);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const [walletMenuOpen, setWalletMenuOpen] = (0,react.useState)(false);
    const closeMenu = (0,react.useCallback)(()=>setWalletMenuOpen(false), []);
    (0,react.useEffect)(()=>{
        const closeMenu = ()=>setWalletMenuOpen(false);
        window.addEventListener('scroll', closeMenu, false);
        return ()=>{
            window.removeEventListener('scroll', closeMenu, false);
        };
    }, []);
    const selectedAccount = socialAccounts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: cx(classes.root, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.avatar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        src: identity.avatar,
                        height: 40,
                        width: 40,
                        alt: identity.nickname,
                        containerProps: {
                            className: classes.avatarImageContainer,
                            style: {
                                WebkitClipPath: `url(#${avatarClipPathId}-clip-path)`
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarDecoration, {
                        className: classes.avatarDecoration,
                        clipPathId: avatarClipPathId,
                        userId: identity.identifier?.userId,
                        size: 40
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.nickname,
                        title: identity.nickname,
                        children: identity.nickname
                    }),
                    address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.addressRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressItem/* AddressItem */.U, {
                                socialAccount: selectedAccount,
                                disableLinkIcon: true,
                                TypographyProps: {
                                    className: classes.address
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                size: 14,
                                className: classes.linkIcon,
                                text: address
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: Others.explorerResolver.addressLink(chainId ?? evm_src_types/* ChainId */.a_.Mainnet, address),
                                target: "_blank",
                                title: t.view_on_explorer(),
                                rel: "noopener noreferrer",
                                onClick: (event)=>{
                                    event.stopPropagation();
                                },
                                sx: {
                                    outline: 0
                                },
                                className: classes.linkIcon,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 14
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                size: 14,
                                color: theme.palette.text.primary,
                                onClick: ()=>{
                                    setWalletMenuOpen((v)=>!v);
                                }
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenWithSocialGroupMenu/* TokenWithSocialGroupMenu */.S, {
                open: walletMenuOpen,
                onClose: closeMenu,
                fromSocialCard: true,
                onAddressChange: onAddressChange,
                currentAddress: address,
                socialAccounts: socialAccounts,
                collectionList: collectionList,
                onTokenChange: (currentResult)=>{
                    setWalletMenuOpen(false);
                    if (!anchorBounding) return;
                    messages/* PluginTraderMessages */.A.trendingAnchorObserved.sendToLocal({
                        name: identity.identifier?.userId || '',
                        identity,
                        address,
                        anchorBounding,
                        anchorEl,
                        type: Trending/* TrendingAPI */.l.TagType.HASH,
                        isCollectionProjectPopper: true,
                        currentResult
                    });
                    CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.sendToLocal({
                        open: false
                    });
                },
                anchorPosition: {
                    top: 60,
                    left: 60
                },
                anchorReference: "anchorPosition"
            }),
            children
        ]
    });
});
// This Skeleton is not fully empty, but also has user address
const ProfileBarSkeleton = /*#__PURE__*/ (0,react.memo)(function ProfileBarSkeleton({ socialAccounts, address, className, children, ...rest }) {
    const { classes, cx } = ProfileBar_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const selectedAccount = socialAccounts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: cx(classes.root, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.avatar,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "circular",
                    height: 40,
                    width: 40
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        variant: "text",
                        className: classes.nickname,
                        width: 100
                    }),
                    address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.addressRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressItem/* AddressItem */.U, {
                                socialAccount: selectedAccount,
                                disableLinkIcon: true,
                                TypographyProps: {
                                    className: classes.address
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                size: 14,
                                className: classes.linkIcon,
                                text: address
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: Others.explorerResolver.addressLink(chainId ?? evm_src_types/* ChainId */.a_.Mainnet, address),
                                target: "_blank",
                                title: t.view_on_explorer(),
                                rel: "noopener noreferrer",
                                onClick: (event)=>{
                                    event.stopPropagation();
                                },
                                sx: {
                                    outline: 0
                                },
                                className: classes.linkIcon,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 14
                                })
                            })
                        ]
                    }) : null
                ]
            }),
            children
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCard/ProfileCardTitle.tsx












const ProfileCardTitle_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        title: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        profileBar: {
            width: '100%'
        },
        operations: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto'
        },
        gearIcon: {
            marginLeft: theme.spacing(1),
            color: theme.palette.text.primary,
            cursor: 'pointer'
        },
        tipButton: {
            marginLeft: theme.spacing(1),
            width: 40,
            height: 40,
            borderRadius: 40,
            border: `1px solid ${theme.palette.maskColor.line}`
        }
    };
});
function openWeb3ProfileSettingDialog() {
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.web3ProfileDialogEvent.sendToLocal({
        open: true
    });
}
function Web3ProfileSettingButton() {
    const { classes } = ProfileCardTitle_useStyles();
    const personas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const persona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    const identity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const { value: status, loading } = (0,useCurrentPersonaConnectStatus/* useCurrentPersonaConnectStatus */.H)(personas, persona?.identifier, undefined, identity);
    if (loading) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gear, {
        className: classes.gearIcon,
        onClick: ()=>{
            if (status.connected && status.verified) {
                openWeb3ProfileSettingDialog();
            } else {
                modals/* PersonaSelectPanelModal */.eX.open({
                    enableVerify: !status.verified,
                    finishTarget: PluginID/* PluginID */.P.Web3Profile
                });
            }
        }
    });
}
function ProfileCardTitle({ className, socialAccounts, address, identity, onAddressChange, ...rest }) {
    const me = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const { classes, cx } = ProfileCardTitle_useStyles();
    const userId = identity?.identifier?.userId;
    const itsMe = !!userId && userId === me?.identifier?.userId;
    const { data: nextIdBindings = src_constants/* EMPTY_LIST */.rP } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'next-id',
            'profiles-by-twitter-id',
            userId
        ],
        enabled: !!userId,
        queryFn: async ()=>{
            if (!userId) return src_constants/* EMPTY_LIST */.rP;
            return entry/* NextIDProof */.q7.queryProfilesByTwitterId(userId);
        }
    });
    const tipsDisabled = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Tips);
    if (!identity) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cx(classes.title, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileBarSkeleton, {
            className: classes.profileBar,
            socialAccounts: socialAccounts,
            address: address
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cx(classes.title, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileBar, {
            className: classes.profileBar,
            identity: identity,
            socialAccounts: socialAccounts,
            address: address,
            onAddressChange: onAddressChange,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.operations,
                children: [
                    nextIdBindings.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccountList/* SocialAccountList */.O, {
                        nextIdBindings: nextIdBindings,
                        userId: userId,
                        disablePortal: true,
                        anchorPosition: {
                            top: 50,
                            left: itsMe ? 390 : 370
                        },
                        anchorReference: "anchorPosition"
                    }) : null,
                    itsMe ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ProfileSettingButton, {}) : !tipsDisabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsButton/* TipButton */.X, {
                        className: classes.tipButton,
                        receiver: identity.identifier
                    }) : null
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCard/index.tsx






















const ProfileCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            height: '100%',
            overscrollBehavior: 'contain',
            borderRadius: theme.spacing(1.5),
            boxShadow: theme.palette.shadow.popup,
            backgroundColor: theme.palette.maskColor.bottom
        },
        header: {
            background: theme.palette.maskColor.modalTitleBg,
            padding: theme.spacing(2, 2, 0, 2),
            boxSizing: 'border-box',
            flexShrink: 0
        },
        content: {
            position: 'relative',
            flexGrow: 1,
            backgroundColor: theme.palette.maskColor.bottom,
            overflow: 'auto',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            display: 'flex',
            position: 'relative',
            paddingTop: 0,
            marginTop: theme.spacing(2)
        },
        tabRoot: {
            color: 'blue'
        },
        footer: {
            position: 'absolute',
            height: 48,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            background: theme.palette.maskColor.bg,
            backdropFilter: 'blur(5px)',
            padding: theme.spacing(1.5),
            boxSizing: 'border-box',
            fontWeight: 700,
            zIndex: 2
        },
        cardIcon: {
            filter: 'drop-shadow(0px 6px 12px rgba(0, 65, 185, 0.2))',
            marginLeft: theme.spacing(0.25)
        },
        cardName: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            marginRight: 'auto',
            marginLeft: theme.spacing(0.5)
        },
        powered: {
            color: theme.palette.text.secondary,
            fontWeight: 700
        }
    };
});
const ProfileCard = /*#__PURE__*/ (0,react.memo)(({ identity, currentAddress, ...rest })=>{
    const { classes } = ProfileCard_useStyles(undefined, {
        props: {
            classes: rest.classes
        }
    });
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const translate = (0,useTrans/* usePluginTransField */.T)();
    const fallbackAccounts = (0,react.useMemo)(()=>{
        return [
            {
                address: currentAddress,
                type: SocialIdentity/* SocialAddressType */.b.Address,
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                chainId: evm_src_types/* ChainId */.a_.Mainnet,
                label: ''
            }
        ];
    }, [
        currentAddress
    ]);
    const { data: allSocialAccounts, isLoading, refetch: retrySocialAddress } = (0,useSocialAccountsBySettings/* useSocialAccountsBySettings */.j)(identity, undefined, addressSorter/* addressSorter */.X, (a, b, c, d)=>service/* default */.ZP.Identity.signWithPersona(a, b, c, location.origin, d));
    const socialAccounts = (0,react.useMemo)(()=>{
        const accounts = isLoading && !allSocialAccounts.length ? fallbackAccounts : allSocialAccounts;
        return accounts.filter((x)=>x.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    }, [
        allSocialAccounts,
        fallbackAccounts,
        isLoading
    ]);
    const [selectedAddress, setSelectedAddress] = (0,react.useState)(currentAddress);
    const firstAddress = (0,head/* default */.Z)(socialAccounts)?.address;
    const activeAddress = selectedAddress || firstAddress;
    const selectedSocialAccount = (0,react.useMemo)(()=>socialAccounts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, activeAddress)), [
        activeAddress,
        socialAccounts
    ]);
    const userId = identity?.identifier?.userId;
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.ownProofChanged.on(()=>{
            retrySocialAddress();
        });
    }, [
        retrySocialAddress
    ]);
    const activatedPlugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    const displayPlugins = (0,getAvailablePlugins/* getAvailablePlugins */.q)(activatedPlugins, (plugins)=>{
        return plugins.flatMap((x)=>x.ProfileCardTabs?.map((y)=>({
                    ...y,
                    pluginID: x.ID
                })) ?? src_constants/* EMPTY_LIST */.rP).filter((x)=>{
            const isAllowed = x.pluginID === PluginID/* PluginID */.P.RSS3 || x.pluginID === PluginID/* PluginID */.P.Collectible;
            const shouldDisplay = x.Utils?.shouldDisplay?.(identity, selectedSocialAccount) ?? true;
            return isAllowed && shouldDisplay;
        }).sort((a, z)=>a.priority - z.priority);
    });
    const tabs = displayPlugins.map((x)=>({
            id: x.ID,
            label: typeof x.label === 'string' ? x.label : translate(x.pluginID, x.label)
        }));
    const [currentTab, onChange] = (0,useTabs/* useTabs */.Y)((0,head/* default */.Z)(tabs)?.id ?? PluginID/* PluginID */.P.Collectible, ...tabs.map((tab)=>tab.id));
    const component = (0,react.useMemo)(()=>{
        if (currentTab === `${PluginID/* PluginID */.P.RSS3}_Social`) providers/* Telemetry */.M.captureEvent(web3_telemetry_src_types/* EventType */.tw.Access, web3_telemetry_src_types/* EventID */.HS.EntryTimelineHoverUserSocialSwitchTo);
        if (currentTab === `${PluginID/* PluginID */.P.RSS3}_Activities`) providers/* Telemetry */.M.captureEvent(web3_telemetry_src_types/* EventType */.tw.Access, web3_telemetry_src_types/* EventID */.HS.EntryTimelineHoverUserActivitiesSwitchTo);
        if (currentTab === `${PluginID/* PluginID */.P.RSS3}_Donation`) providers/* Telemetry */.M.captureEvent(web3_telemetry_src_types/* EventType */.tw.Access, web3_telemetry_src_types/* EventID */.HS.EntryTimelineHoverUserDonationsSwitchTo);
        const Component = (0,getTabContent/* getProfileCardTabContent */.$$)(currentTab);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identity,
            socialAccount: selectedSocialAccount
        });
    }, [
        currentTab,
        identity?.publicKey,
        selectedSocialAccount
    ]);
    (0,useLocationChange/* useLocationChange */.S)(()=>{
        onChange(undefined, (0,head/* default */.Z)(tabs)?.id);
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        onChange(undefined, (0,head/* default */.Z)(tabs)?.id);
    }, [
        userId
    ]);
    const scopedDomainsMap = (0,react.useMemo)(()=>{
        return socialAccounts.reduce((map, account)=>{
            if (!account.label) return map;
            return {
                ...map,
                [account.address.toLowerCase()]: account.label
            };
        }, {});
    }, [
        socialAccounts
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
        value: {
            chainId: evm_src_types/* ChainId */.a_.Mainnet
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScopedDomains/* ScopedDomainsContainer */.h.Provider, {
            initialState: scopedDomainsMap,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCardTitle, {
                                socialAccounts: socialAccounts,
                                address: activeAddress,
                                onAddressChange: setSelectedAddress,
                                identity: identity
                            }),
                            tabs.length > 0 && currentTab ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.tabs,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
                                    value: currentTab,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* MaskTabList */.C, {
                                        variant: "base",
                                        onChange: onChange,
                                        "aria-label": "Web3Tabs",
                                        children: tabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                                label: tab.label,
                                                value: tab.id,
                                                classes: {
                                                    root: classes.tabRoot,
                                                    textColorPrimary: classes.tabRoot
                                                }
                                            }, tab.id))
                                    })
                                })
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.content,
                        children: component
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Web3ProfileCard, {
                                className: classes.cardIcon,
                                size: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.cardName,
                                children: t.web3_profile_card_name()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                className: classes.powered,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                    i18nKey: "powered_by_whom",
                                    values: {
                                        whom: 'RSS3'
                                    },
                                    components: {
                                        span: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            fontWeight: 700,
                                            fontSize: "inherit",
                                            variant: "body1",
                                            component: "strong",
                                            color: (theme)=>theme.palette.text.primary
                                        })
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RSS3, {
                                size: 24,
                                sx: {
                                    ml: '4px'
                                }
                            })
                        ]
                    })
                ]
            })
        })
    });
});
ProfileCard.displayName = 'ProfileCard';

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ProfileCard/constants.ts
const CARD_WIDTH = 450;
const CARD_HEIGHT = 500;

// EXTERNAL MODULE: ./packages/theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(80835);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ProfileCard/useControlProfileCard.ts




const LEAVE_DURATION = 500;
function useControlProfileCard(holderRef) {
    const hoverRef = (0,react.useRef)(false);
    const closeTimerRef = (0,react.useRef)();
    const skipClick = (0,react.useRef)(false);
    const [active, setActive] = (0,react.useState)(false);
    const [placement, setPlacement] = (0,react.useState)('bottom');
    const hasDialogRef = (0,react.useRef)(false);
    const { stack } = (0,DialogStack/* useDialogStacking */.mq)();
    hasDialogRef.current = stack.length > 0;
    const hideProfileCard = (0,react.useCallback)((byClick)=>{
        if (hoverRef.current || hasDialogRef.current) return;
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = setTimeout(()=>{
            // Discard the click that would open from external
            if (byClick && skipClick.current) {
                skipClick.current = false;
                return;
            }
            setActive(false);
        }, LEAVE_DURATION);
    }, []);
    const showProfileCard = (0,react.useCallback)((placement)=>{
        clearTimeout(closeTimerRef.current);
        setActive(true);
        setPlacement(placement);
    }, []);
    (0,react.useEffect)(()=>{
        const holder = holderRef.current;
        if (!holder) {
            hideProfileCard();
            return;
        }
        const enter = ()=>{
            hoverRef.current = true;
            clearTimeout(closeTimerRef.current);
        };
        const leave = ()=>{
            hoverRef.current = false;
            hideProfileCard();
        };
        holder.addEventListener('mouseenter', enter);
        holder.addEventListener('mouseleave', leave);
        return ()=>{
            holder.removeEventListener('mouseenter', enter);
            holder.removeEventListener('mouseleave', leave);
        };
    }, [
        holderRef.current
    ]);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.on((event)=>{
            if (!event.open) {
                hideProfileCard();
                return;
            }
            if (event.external) skipClick.current = true;
            const reachedBottom = event.anchorBounding.bottom + CARD_HEIGHT > window.innerHeight;
            showProfileCard(reachedBottom ? 'auto' : 'bottom');
        });
    }, []);
    (0,react.useEffect)(()=>{
        const onClick = (event)=>{
            // `NODE.contains(other)` doesn't work for cross multiple layer of Shadow DOM
            if (event.composedPath()?.includes(holderRef.current)) return;
            hoverRef.current = false;
            hideProfileCard(true);
        };
        document.body.addEventListener('click', onClick);
        return ()=>{
            document.body.removeEventListener('click', onClick);
        };
    }, []);
    return {
        placement,
        active
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/ProfileCard/index.tsx














function injectProfileCardHolder(signal) {
    (0,renderInShadowRoot/* attachReactTreeWithoutContainer */.Ei)('profile-card', /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCardHolder, {}), signal);
}
const injection_ProfileCard_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        borderRadius: 10,
        width: CARD_WIDTH,
        maxWidth: CARD_WIDTH,
        height: CARD_HEIGHT,
        maxHeight: CARD_HEIGHT
    }
});
function ProfileCardHolder() {
    const { classes } = injection_ProfileCard_useStyles();
    const holderRef = (0,react.useRef)(null);
    const [twitterId, setTwitterId] = (0,react.useState)('');
    const [badgeBounding, setBadgeBounding] = (0,react.useState)();
    const { active, placement } = useControlProfileCard(holderRef);
    const [address, setAddress] = (0,react.useState)('');
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.profileCardEvent.on((event)=>{
            if (!event.open) return;
            setAddress(event.address ?? '');
            setTwitterId(event.userId);
            setBadgeBounding(event.anchorBounding);
            setAnchorEl(event.anchorEl);
        });
    }, []);
    const { data: identity } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'twitter',
            'profile',
            twitterId
        ],
        queryFn: ()=>entry/* Twitter */.tL.getUserByScreenName(twitterId),
        select: (user)=>{
            if (!user) return null;
            return {
                identifier: profile/* ProfileIdentifier */.W.of(base/* twitterBase */.o.networkIdentifier, user.screenName).unwrapOr(undefined),
                nickname: user.nickname,
                avatar: user.avatarURL,
                bio: user.bio,
                homepage: user.homepage
            };
        }
    });
    const { data: resolvedIdentity } = (0,useActivatedUI/* useSocialIdentity */.mJ)(identity);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
        in: active,
        easing: "linear",
        timeout: 250,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootPopper/* ShadowRootPopper */.s, {
            open: !!anchorEl,
            anchorEl: anchorEl,
            keepMounted: true,
            placement: placement,
            className: classes.root,
            ref: holderRef,
            onClick: stopPropagation,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AnchorContext/* AnchorProvider */.Y7, {
                anchorEl: anchorEl,
                anchorBounding: badgeBounding,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCard, {
                    identity: resolvedIdentity || undefined,
                    currentAddress: address
                }, twitterId)
            })
        })
    });
}
function stopPropagation(event) {
    event.stopPropagation();
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/Avatar.tsx
var Avatar = __webpack_require__(39570);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Avatar/index.tsx









function getTwitterId(ele) {
    const profileLink = ele.querySelector('a[role="link"]');
    if (!profileLink) return;
    return profileLink.getAttribute('href')?.slice(1);
}
function inpageAvatarSelector() {
    return querySelectorAll([
        // Avatars in post
        'main[role="main"] [data-testid="cellInnerDiv"] [data-testid="Tweet-User-Avatar"]',
        // Avatars in side panel
        '[data-testid="UserCell"] [data-testid^="UserAvatar-Container-"]',
        // Avatars in space sheet dialog
        '[data-testid=sheetDialog] [data-testid^="UserAvatar-Container-"]',
        // Avatars in space dock
        '[data-testid=SpaceDockExpanded] [data-testid^=UserAvatar-Container-]'
    ].join(','));
}
async function injectAvatar(signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(inpageAvatarSelector()).useForeach((ele)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const run = async ()=>{
            const twitterId = getTwitterId(ele);
            if (!twitterId) return;
            const proxy = (0,DOM_Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = ele.firstChild;
            const isSuggestion = ele.closest('[data-testid=UserCell]');
            const sourceType = isSuggestion ? plugin_infra_src_types.Plugin.SiteAdaptor.AvatarRealmSourceType.Suggestion : plugin_infra_src_types.Plugin.SiteAdaptor.AvatarRealmSourceType.Post;
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                untilVisible: true,
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    right: -4,
                    bottom: -4,
                    width: 16,
                    height: 16,
                    zIndex: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* Avatar */.q, {
                    userId: twitterId,
                    sourceType: sourceType
                })
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

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Lens/injectLensOnConversation.tsx









function selector() {
    return querySelectorAll('[data-testid=conversation] div:not([tabindex]) div[dir] + div[dir]');
}
const injectLensOnConversation_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        hide: {
            display: 'none'
        },
        slot: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            marginLeft: theme.spacing(0.5),
            verticalAlign: 'top'
        }
    }));
function injectLensOnConversation_createRootElement() {
    const span = document.createElement('span');
    Object.assign(span.style, {
        verticalAlign: 'bottom',
        height: '21px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex'
    });
    return span;
}
const ConversationLensSlot = /*#__PURE__*/ (0,react.memo)(function ConversationLensSlot({ userId }) {
    const [disabled, setDisabled] = (0,react.useState)(true);
    const { classes, cx } = injectLensOnConversation_useStyles();
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.Lens?.UI?.Content, undefined, injectLensOnConversation_createRootElement);
        const identifier = profile/* ProfileIdentifier */.W.of(Site_types/* EnhanceableSite */.J.Twitter, userId).unwrapOr(null);
        if (!identifier) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identifier,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.LensSlot.Sidebar,
            onStatusUpdate: setDisabled
        });
    }, [
        userId
    ]);
    if (!component) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.hide : null),
        children: component
    });
});
/**
 * Inject on conversation, including both DM drawer and message page (/messages/xxx)
 */ function injectLensOnConversation(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, _, proxy)=>{
        const spans = node.closest('[data-testid=conversation]')?.querySelectorAll('[tabindex] [dir] span:not([data-testid=tweetText])');
        if (!spans) return;
        const userId = [
            ...spans
        ].reduce((id, node)=>{
            if (id) return id;
            if (node.textContent?.match(/@\w/)) {
                return node.textContent.trim().slice(1);
            }
            return '';
        }, '');
        if (!userId) return;
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            signal,
            untilVisible: true
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConversationLensSlot, {
            userId: userId
        }));
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Lens/injectLensOnPost.tsx









function injectLensOnPost_selector() {
    return querySelectorAll('[data-testid=User-Name] div').filter((node)=>{
        return node.firstElementChild?.matches('a[role=link]:not([tabindex])');
    });
}
// structure: <user-name> <user-id> <timestamp>
function injectLensOnPost(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(injectLensOnPost_selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, _, proxy)=>{
        const link = node.querySelector('a[href][role=link]');
        // To simplify the selector above, we do this checking manually
        // <user-id> has tabindex=-1, <timestamp> has a child time element
        if (link?.hasAttribute('tabindex') || link?.querySelector('time')) return;
        const href = link?.getAttribute('href');
        const userId = href?.split('/')[1];
        if (!userId) return;
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            signal,
            untilVisible: true
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostLensSlot, {
            userId: userId
        }));
    });
}
const injectLensOnPost_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        hide: {
            display: 'none'
        },
        slot: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            marginLeft: theme.spacing(0.5),
            verticalAlign: 'top'
        }
    }));
function injectLensOnPost_createRootElement() {
    const span = document.createElement('span');
    Object.assign(span.style, {
        alignItems: 'center',
        display: 'flex'
    });
    return span;
}
function PostLensSlot({ userId }) {
    const [disabled, setDisabled] = (0,react.useState)(true);
    const { classes, cx } = injectLensOnPost_useStyles();
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.Lens?.UI?.Content, undefined, injectLensOnPost_createRootElement);
        const identifier = profile/* ProfileIdentifier */.W.of(Site_types/* EnhanceableSite */.J.Twitter, userId).unwrap();
        if (!identifier) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identifier,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.LensSlot.Post,
            onStatusUpdate: setDisabled
        });
    }, [
        userId
    ]);
    if (!component) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.hide : null),
        children: component
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Lens/injectLensOnProfile.tsx









function injectLensOnProfile_selector() {
    return querySelector('[data-testid=UserName] div[dir]');
}
function injectLensOnProfile(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(injectLensOnProfile_selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileLensSlot, {}));
}
const injectLensOnProfile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        hide: {
            display: 'none'
        },
        slot: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            marginLeft: theme.spacing(0.5),
            verticalAlign: 'top'
        }
    }));
function ProfileLensSlot() {
    const visitingIdentity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const [disabled, setDisabled] = (0,react.useState)(true);
    const { classes, cx } = injectLensOnProfile_useStyles();
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.Lens?.UI?.Content);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: visitingIdentity.identifier,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.LensSlot.ProfileName,
            onStatusUpdate: setDisabled
        });
    }, [
        visitingIdentity.identifier
    ]);
    if (!component || !visitingIdentity.identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.hide : null),
        children: component
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Lens/injectLensOnSpaceDock.tsx









function avatarSelector() {
    return querySelectorAll('[data-testid=SpaceDockExpanded] [data-testid^=UserAvatar-Container-],[data-testid=sheetDialog] [data-testid^=UserAvatar-Container-]').map((node)=>{
        const span = node.parentElement?.parentElement?.nextElementSibling?.querySelector('div > span + span > span');
        return span;
    });
}
/**
 * Inject on space dock
 */ function injectLensOnSpaceDock(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(avatarSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, _, proxy)=>{
        const avatar = node.closest('div[dir]')?.previousElementSibling?.querySelector('[data-testid^=UserAvatar-Container-]');
        if (!avatar) return;
        const userId = avatar.dataset.testid?.slice('UserAvatar-Container-'.length);
        if (!userId) return;
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            signal,
            untilVisible: true
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SpaceDockLensSlot, {
            userId: userId
        }));
    });
}
const injectLensOnSpaceDock_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        hide: {
            display: 'none'
        },
        slot: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            marginLeft: theme.spacing(0.5),
            verticalAlign: 'top'
        }
    }));
function injectLensOnSpaceDock_createRootElement() {
    const span = document.createElement('span');
    Object.assign(span.style, {
        verticalAlign: 'bottom',
        height: '21px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex'
    });
    return span;
}
function SpaceDockLensSlot({ userId }) {
    const [disabled, setDisabled] = (0,react.useState)(true);
    const { classes, cx } = injectLensOnSpaceDock_useStyles();
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.Lens?.UI?.Content, undefined, injectLensOnSpaceDock_createRootElement);
        const identifier = profile/* ProfileIdentifier */.W.of(Site_types/* EnhanceableSite */.J.Twitter, userId).unwrap();
        if (!identifier) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identifier,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.LensSlot.Sidebar,
            onStatusUpdate: setDisabled
        });
    }, [
        userId
    ]);
    if (!component) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.hide : null),
        children: component
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Lens/injectLensOnUserCell.tsx









function injectLensOnUserCell_selector() {
    // [href^="/search"] is a hash tag
    return querySelectorAll('[data-testid=UserCell] div > a[role=link]:not([tabindex]):not([href^="/search"]) [dir]:last-of-type');
}
/**
 * Inject on sidebar user cell
 */ function injectLensOnUserCell(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(injectLensOnUserCell_selector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, _, proxy)=>{
        const userId = node.closest('[role=link]')?.getAttribute('href')?.slice(1);
        if (!userId) return;
        // Intended to set `untilVisible` to true, but mostly user cells are fixed and visible
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(UserCellLensSlot, {
            userId: userId
        }));
    });
}
const injectLensOnUserCell_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        hide: {
            display: 'none'
        },
        slot: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            marginLeft: theme.spacing(0.5),
            verticalAlign: 'top'
        }
    }));
function injectLensOnUserCell_createRootElement() {
    const span = document.createElement('span');
    Object.assign(span.style, {
        verticalAlign: 'bottom',
        height: '21px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    });
    return span;
}
function UserCellLensSlot({ userId }) {
    const [disabled, setDisabled] = (0,react.useState)(true);
    const { classes, cx } = injectLensOnUserCell_useStyles();
    const component = (0,react.useMemo)(()=>{
        const Component = (0,createInjectHooksRenderer/* createInjectHooksRenderer */.E)(site_adaptor/* useActivatedPluginsSiteAdaptor */.JR.visibility.useNotMinimalMode, (plugin)=>plugin.Lens?.UI?.Content, undefined, injectLensOnUserCell_createRootElement);
        if (userId.includes('/')) return null;
        const identifier = profile/* ProfileIdentifier */.W.of(Site_types/* EnhanceableSite */.J.Twitter, userId).unwrap();
        if (!identifier) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            identity: identifier,
            slot: plugin_infra_src_types.Plugin.SiteAdaptor.LensSlot.Sidebar,
            onStatusUpdate: setDisabled
        });
    }, [
        userId
    ]);
    if (!component) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: cx(classes.slot, disabled ? classes.hide : null),
        children: component
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Lens/index.tsx





function injectLens(signal) {
    injectLensOnProfile(signal);
    injectLensOnPost(signal);
    injectLensOnUserCell(signal);
    injectLensOnConversation(signal);
    injectLensOnSpaceDock(signal);
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(69187);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(40897);
;// CONCATENATED MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatarSquare.tsx





const NFTAvatarSquare_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            borderRadius: 5
        },
        name: {
            transform: 'translate(0px, 8px)',
            background: 'linear-gradient(270deg, #24FF00 0%, #00E4C9 102.63%)'
        },
        price: {
            transform: 'translate(0px, -5px)',
            background: 'linear-gradient(270deg, #24FF00 0%, #00E4C9 102.63%)'
        },
        border: {
            transform: 'translate(1px, 1px)'
        }
    }));
function NFTAvatarSquare(props) {
    const { classes } = NFTAvatarSquare_useStyles();
    const { stroke, strokeWidth, fontSize, name, size, price, borderSize = 2 } = props;
    const id = (0,react.useMemo)(()=>props.id ?? (0,v4/* default */.Z)(), [
        props.id
    ]);
    const avatarSize = size - borderSize;
    const R = avatarSize * Math.sqrt(2);
    if (size <= borderSize) return null;
    const svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: classes.root,
        width: "100%",
        height: "100%",
        viewBox: `0 0 ${size} ${size}`,
        id: id,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        id: `${id}-path-name`,
                        fill: "none",
                        stroke: "none",
                        strokeWidth: "0",
                        d: `M${0} ${avatarSize / 2} L0 0 L${avatarSize} 0 L${avatarSize} ${avatarSize / 2}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        id: `${id}-path-price`,
                        fill: "none",
                        stroke: "none",
                        strokeWidth: "0",
                        d: `M 0 ${avatarSize / 2} L0 ${avatarSize} L${avatarSize} ${avatarSize} L${avatarSize} ${avatarSize / 2} `
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                        x: 0,
                        y: 0,
                        rx: 5,
                        width: avatarSize,
                        height: avatarSize,
                        fill: "none",
                        stroke: stroke,
                        strokeWidth: strokeWidth
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.border,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: 0,
                            y: 0,
                            rx: 5,
                            width: avatarSize,
                            height: avatarSize,
                            fill: "none",
                            stroke: "none",
                            strokeWidth: 2
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.name,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                            x: "0%",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fill: `url(#${id}-pattern)`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                                xlinkHref: `#${id}-path-name`,
                                startOffset: "50%",
                                rotate: "auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                                    fontWeight: "bold",
                                    fontSize: fontSize,
                                    children: name
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.price,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                            x: "0%",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fill: `url(#${id}-pattern)`,
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
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox/* RainbowBox */._, {
        borderSize: borderSize,
        radius: "5px",
        children: svg
    });
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/usePersonaNFTAvatar.ts
var usePersonaNFTAvatar = __webpack_require__(25115);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useWallet.ts
var useWallet = __webpack_require__(15189);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useNFT.ts
var useNFT = __webpack_require__(664);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/storage/useSaveStringStorage.ts
var useSaveStringStorage = __webpack_require__(86673);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/useInjectedCSS.ts



function useInjectedCSS(showAvatar, updatedAvatar) {
    const rainbowElement = (0,react.useRef)();
    const borderElement = (0,react.useRef)();
    (0,react.useEffect)(()=>{
        if (!showAvatar || !updatedAvatar) return;
        const linkDom = searchTwitterAvatarLinkSelector().evaluate();
        if (linkDom?.firstElementChild && linkDom.childNodes.length === 4) {
            const linkParentDom = linkDom.closest('div');
            if (linkParentDom) linkParentDom.style.overflow = 'visible';
            // create rainbow shadow border
            if (linkDom.lastElementChild?.tagName !== 'STYLE') {
                borderElement.current = linkDom.firstElementChild;
                // remove useless border
                linkDom.removeChild(linkDom.firstElementChild);
                const style = document.createElement('style');
                style.innerText = `
                ${RainbowBox/* rainbowBorderKeyFrames */.v.styles}
                
                .rainbowBorder {
                    animation: ${RainbowBox/* rainbowBorderKeyFrames */.v.name} 6s linear infinite;
                    box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
                    transition: none;
                    border: 0 solid #00f8ff;
                }
            
            `;
                rainbowElement.current = linkDom.firstElementChild.nextElementSibling;
                linkDom.firstElementChild.nextElementSibling?.classList.add('rainbowBorder');
                linkDom.appendChild(style);
            }
        }
        return ()=>{
            if (linkDom?.lastElementChild?.tagName === 'STYLE') {
                linkDom.removeChild(linkDom.lastElementChild);
            }
            if (borderElement.current && linkDom?.firstElementChild !== borderElement.current) {
                linkDom?.insertBefore(borderElement.current, linkDom.firstChild);
            }
            if (rainbowElement.current) {
                rainbowElement.current.classList.remove('rainbowBorder');
            }
        };
    }, [
        location.pathname,
        showAvatar,
        updatedAvatar
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/useUpdatedAvatar.ts



function useUpdatedAvatar(showAvatar, nftAvatar) {
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!showAvatar) return;
        const linkParentDom = searchTwitterAvatarLinkSelector().evaluate()?.closest('div');
        if (!linkParentDom) return;
        const handler = (event)=>{
            if (!nftAvatar?.tokenId || !nftAvatar?.address || !nftAvatar.pluginId || !nftAvatar.chainId) return;
            event.stopPropagation();
            event.preventDefault();
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.nonFungibleTokenDialogEvent.sendToLocal({
                open: true,
                pluginID: nftAvatar.pluginId,
                chainId: nftAvatar.chainId,
                tokenId: nftAvatar.tokenId,
                tokenAddress: nftAvatar.address,
                ownerAddress: nftAvatar.ownerAddress,
                origin: 'pfp'
            });
        };
        const clean = ()=>{
            linkParentDom.removeEventListener('click', handler, true);
        };
        if (!nftAvatar) return;
        linkParentDom.addEventListener('click', handler, true);
        return clean;
    }, [
        nftAvatar,
        showAvatar
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/NFTAvatarInTwitter.tsx



















const NFTAvatarInTwitter_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {
            transform: 'scale(1.022)',
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
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
function NFTAvatarInTwitter() {
    const windowSize = (0,useWindowSize/* default */.Z)();
    const _location = (0,useLocation/* default */.Z)();
    const { classes } = NFTAvatarInTwitter_useStyles();
    const [updatedAvatar, setUpdatedAvatar] = (0,react.useState)(false);
    const size = (0,react.useMemo)(()=>{
        const ele = searchTwitterAvatarSelector().evaluate()?.querySelector('img');
        if (ele) {
            const style = window.getComputedStyle(ele);
            return Number.parseInt(style.width.replace('px', '') ?? 0, 10);
        }
        return 0;
    }, [
        windowSize,
        _location
    ]);
    const { showAvatar, nftInfo, nftAvatar } = useNFTCircleAvatar(size);
    useInjectedCSS(showAvatar, updatedAvatar);
    useUpdatedAvatar(showAvatar, nftAvatar);
    const handlerWatcher = ()=>{
        const avatar = searchAvatarSelector().evaluate()?.getAttribute('src');
        if (!avatar || !nftAvatar?.avatarId) return;
        setUpdatedAvatar(!!nftAvatar?.avatarId && entry/* Twitter */.tL.getAvatarId(avatar ?? '') === nftAvatar.avatarId);
    };
    (0,react.useEffect)(()=>{
        const abortController = new AbortController();
        new MutationObserverWatcher/* MutationObserverWatcher */.U(searchAvatarMetaSelector()).addListener('onAdd', handlerWatcher).addListener('onChange', handlerWatcher).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'src'
            ]
        }, abortController.signal);
        return ()=>abortController.abort();
    }, [
        handlerWatcher
    ]);
    if (!showAvatar) return null;
    const avatarType = getAvatarType();
    switch(avatarType){
        case Avatar_src_types/* AvatarType */.f.Default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
                nftInfo: nftInfo,
                borderSize: 5,
                hasRainbow: true,
                size: size,
                width: 12,
                classes: {
                    root: classes.root,
                    text: classes.text,
                    icon: classes.icon
                }
            });
        case Avatar_src_types/* AvatarType */.f.Square:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarSquare, {
                stroke: "black",
                strokeWidth: 20,
                fontSize: 9,
                name: nftInfo?.name ?? '',
                price: nftInfo?.amount ?? '',
                size: size
            });
        default:
            return null;
    }
}
function useNFTCircleAvatar(size) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const { value: nftAvatar } = (0,usePersonaNFTAvatar/* usePersonaNFTAvatar */.O)(identity.identifier?.userId ?? '', entry/* Twitter */.tL.getAvatarId(identity.avatar), '', constants/* RSS3_KEY_SITE */.q1.TWITTER);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { loading: loadingWallet, value: storage } = (0,useWallet/* useWallet */.O)(nftAvatar?.userId);
    const { value: nftInfo, loading: loadingNFTInfo } = (0,useNFT/* useNFT */.e)(storage?.address ?? account, nftAvatar?.address, nftAvatar?.tokenId, nftAvatar?.pluginId, nftAvatar?.chainId, nftAvatar?.ownerAddress);
    const showAvatar = (0,react.useMemo)(()=>{
        const avatar = searchAvatarSelector().evaluate()?.getAttribute('src');
        return !!nftAvatar?.avatarId && entry/* Twitter */.tL.getAvatarId(avatar ?? '') === nftAvatar.avatarId;
    }, [
        nftAvatar?.avatarId,
        identity.avatar
    ]);
    const [NFTEvent, setNFTEvent] = (0,react.useState)();
    const saveNFTAvatar = (0,useSaveStringStorage/* useSaveStringStorage */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    // After the avatar is set, it cannot be saved immediately,
    // and must wait until the avatar of twitter gets updated
    (0,useAsync/* default */.Z)(async ()=>{
        if (!account || !nftAvatar || !identity.identifier) return;
        if (!NFTEvent?.address || !NFTEvent?.tokenId) {
            Messages/* MaskMessages */.q.events.NFTAvatarTimelineUpdated.sendToAll({
                userId: identity.identifier.userId,
                avatarId: entry/* Twitter */.tL.getAvatarId(identity.avatar ?? ''),
                address: '',
                tokenId: '',
                schema: evm_src_types/* SchemaType */.XQ.ERC721,
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                chainId: evm_src_types/* ChainId */.a_.Mainnet
            });
            return;
        }
        const avatar = await saveNFTAvatar(identity.identifier.userId, account, {
            ...NFTEvent,
            avatarId: entry/* Twitter */.tL.getAvatarId(identity.avatar ?? '')
        }).catch((error)=>{
            setNFTEvent(undefined);
            // eslint-disable-next-line no-alert
            alert(error.message);
            return;
        });
        if (!avatar) {
            setNFTEvent(undefined);
            // eslint-disable-next-line no-alert
            alert('Sorry, failed to save NFT Avatar. Please set again.');
            return;
        }
        const NFTDetailed = await entry/* Hub */.Xb.getNonFungibleAsset(avatar.address ?? '', avatar.tokenId, {
            chainId: evm_src_types/* ChainId */.a_.Mainnet
        });
        const confirmed = await modals/* ConfirmModal */.sm.openAndWaitForClose({
            title: t.plugin_avatar_setup_share_title(),
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                        url: NFTDetailed?.metadata?.imageURL || NFTDetailed?.metadata?.mediaURL
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        mt: 3,
                        fontSize: "18px",
                        children: t.plugin_avatar_setup_success()
                    })
                ]
            }),
            confirmLabel: t.share()
        });
        if (confirmed) ui.activatedSiteAdaptorUI.utils.share?.(t.plugin_avatar_setup_pfp_share());
        Messages/* MaskMessages */.q.events.NFTAvatarTimelineUpdated.sendToAll(avatar ?? {
            userId: identity.identifier.userId,
            avatarId: entry/* Twitter */.tL.getAvatarId(identity.avatar ?? ''),
            address: '',
            tokenId: '',
            schema: evm_src_types/* SchemaType */.XQ.ERC721,
            pluginId: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            chainId: evm_src_types/* ChainId */.a_.Mainnet
        });
        setNFTEvent(undefined);
    }, [
        identity.avatar,
        t,
        saveNFTAvatar
    ]);
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.NFTAvatarUpdated.on((data)=>setNFTEvent(data));
    }, []);
    return {
        showAvatar: Boolean(size && nftAvatar && !loadingWallet && !loadingNFTInfo && showAvatar && nftInfo),
        nftAvatar,
        nftInfo,
        loading: loadingWallet || loadingNFTInfo
    };
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/utils/index.ts + 1 modules
var src_utils = __webpack_require__(58833);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/NFTAvatarClip.tsx












const NFT_NFTAvatarClip_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        text: {},
        icon: {}
    }));
function NFTAvatarClipInTwitter() {
    const windowSize = (0,useWindowSize/* default */.Z)();
    const location = (0,useLocation/* default */.Z)();
    const borderElement = (0,react.useRef)();
    const linkDom = (0,react.useRef)();
    const size = (0,react.useMemo)(()=>{
        const ele = searchTwitterAvatarNFTSelector().evaluate()?.closest('a')?.querySelector('img');
        if (!ele) return 0;
        return ele.clientWidth;
    }, [
        windowSize,
        location
    ]);
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    (0,react.useEffect)(()=>{
        const timer = setTimeout(()=>{
            linkDom.current = searchTwitterAvatarNFTLinkSelector().evaluate();
            if (linkDom.current?.firstElementChild && linkDom.current?.childNodes.length === 4) {
                borderElement.current = linkDom.current.firstElementChild;
                // remove useless border
                linkDom.current.removeChild(linkDom.current?.firstElementChild);
            }
            const link = linkDom.current;
            if (link?.style) {
                link.style.backgroundColor = 'transparent';
                link.style.boxShadow = 'none';
            }
        }, 5000);
        return ()=>{
            clearTimeout(timer);
            if (borderElement.current && borderElement.current !== linkDom.current?.firstElementChild && linkDom.current) linkDom.current.insertBefore(borderElement.current, linkDom.current.firstChild);
        };
    }, [
        location.pathname
    ]);
    if ((0,number/* isZero */.Fr)(size) || !identity.identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClipOrSquareInTwitter, {
        screenName: identity.identifier.userId,
        size: size,
        avatarType: Avatar_src_types/* AvatarType */.f.Clip
    });
}
function NFTAvatarClipOrSquareInTwitter({ screenName, size, avatarType }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = NFT_NFTAvatarClip_useStyles();
    const { loading, value: avatarMetadata } = useNFTContainerAtTwitter(screenName);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { value = {
        amount: '0',
        symbol: 'ETH',
        name: '',
        slug: ''
    }, loading: loadingNFT } = (0,useNFT/* useNFT */.e)(account, avatarMetadata?.address, avatarMetadata?.token_id, PluginID/* NetworkPluginID */.F.PLUGIN_EVM, evm_src_types/* ChainId */.a_.Mainnet);
    const name = (0,react.useMemo)(()=>{
        if (loading || loadingNFT) return t.loading();
        return `${(0,src_utils/* formatText */.RZ)(value.name, avatarMetadata?.token_id ?? '')} ${value.slug?.toLowerCase() === 'ens' ? 'ENS' : ''}`;
    }, [
        JSON.stringify(value),
        loading,
        loadingNFT,
        avatarMetadata?.token_id
    ]);
    const price = (0,react.useMemo)(()=>{
        if (loading || loadingNFT) return t.loading();
        return (0,src_utils/* formatPrice */.T4)(value.amount, value.symbol);
    }, [
        JSON.stringify(value),
        loading,
        loadingNFT
    ]);
    if (!avatarMetadata?.address || !avatarMetadata?.token_id) return null;
    return avatarType === Avatar_src_types/* AvatarType */.f.Square ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarSquare, {
        stroke: "black",
        strokeWidth: 20,
        fontSize: 9,
        name: name,
        price: price,
        size: size
    }) : avatarType === Avatar_src_types/* AvatarType */.f.Clip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip, {
        size: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        },
        name: name,
        price: price
    }) : null;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/NFT/index.tsx









function injectNFTAvatarInTwitter(signal) {
    const avatarType = getAvatarType();
    const squareWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchTwitterSquareAvatarSelector()).useForeach((ele, _, proxy)=>{
        const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            untilVisible: true,
            signal
        });
        if (avatarType === Avatar_src_types/* AvatarType */.f.Square) root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInTwitter, {}));
        return ()=>root.destroy();
    });
    (0,startWatch/* startWatch */.f)(squareWatcher, signal);
    const defaultWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchTwitterAvatarSelector()).useForeach((ele, _, proxy)=>{
        const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            untilVisible: true,
            signal
        });
        if (avatarType === Avatar_src_types/* AvatarType */.f.Default) root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInTwitter, {}));
        return ()=>root.destroy();
    });
    (0,startWatch/* startWatch */.f)(defaultWatcher, signal);
    const clipWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchTwitterAvatarNFTSelector()).useForeach((ele, _, proxy)=>{
        const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
            untilVisible: true,
            signal
        });
        if (searchTwitterAvatarNFTLinkSelector().evaluate()) root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClipInTwitter, {}));
        return ()=>root.destroy();
    });
    (0,startWatch/* startWatch */.f)(clipWatcher, signal);
}

// EXTERNAL MODULE: ./packages/shared-base/src/types/SwitchLogo.ts
var SwitchLogo = __webpack_require__(73835);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
;// CONCATENATED MODULE: ./packages/plugins/SwitchLogo/src/SiteAdaptor/SwitchLogoButton.tsx
/* cspell: disable */ 







const BlueBirdHTML = `
     <svg
     viewBox="0 0 24 24"
     aria-hidden="true"
     fill="#1D9BF0"
     >
     <g>
         <path
         d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
         />
     </g>
     </svg>
 `;
const LogoSelector = new LiveSelector/* LiveSelector */.j().querySelector('h1[role="heading"] a > div > svg').enableSingleMode();
const defaultXIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M13.882 10.46 21.313 2h-1.76l-6.456 7.344L7.944 2H2l7.793 11.107L2 21.977h1.76l6.814-7.757 5.443 7.757h5.944L13.88 10.46Zm-2.413 2.744-.79-1.107L4.395 3.3H7.1l5.071 7.103.788 1.106 6.592 9.232h-2.705l-5.378-7.537Z"/>
    </svg>
`;
const LetterHTML = LogoSelector.evaluate()?.innerHTML;
const SwitchLogoButton_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        switchIcon: {
            position: 'absolute',
            display: 'flex',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0
        },
        iconBox: {
            position: 'relative',
            flex: 1
        },
        icon: {
            position: 'absolute',
            right: 5,
            bottom: 5,
            width: 20,
            height: 20
        },
        hover: {
            opacity: 0,
            '&:hover': {
                opacity: 1
            }
        },
        hidden: {
            opacity: 0
        }
    }));
function SwitchLogoButton() {
    const { classes, cx } = SwitchLogoButton_useStyles();
    const current = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const logoType = (0,useValueRef/* useValueRef */.E)(settings/* switchLogoSettings */.v2[current?.identifier?.userId || '']);
    const isMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.SwitchLogo);
    (0,react.useLayoutEffect)(()=>{
        const node = LogoSelector.evaluate();
        if (!node) return;
        node?.parentElement?.style.setProperty('position', 'relative');
        if (logoType === SwitchLogo/* SwitchLogoType */.O.Classics && !isMinimalMode) {
            // eslint-disable-next-line @masknet/browser-no-set-html
            node.innerHTML = BlueBirdHTML;
        } else {
            // eslint-disable-next-line @masknet/browser-no-set-html
            node.innerHTML = LetterHTML || defaultXIcon;
        }
    }, [
        logoType,
        isMinimalMode
    ]);
    const onClick = (0,react.useCallback)(()=>{
        if (isMinimalMode) return;
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.switchLogoDialogUpdated.sendToLocal({
            open: true
        });
    }, [
        isMinimalMode
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.switchIcon,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: cx(classes.iconBox, isMinimalMode ? classes.hidden : classes.hover),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SwitchLogo, {
                className: classes.icon,
                onClickCapture: onClick
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/SwitchLogo.tsx






const logoSelector = ()=>{
    return querySelector('h1[role="heading"] a > div > svg').closest(1);
};
function injectSwitchLogoButton(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(logoSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchLogoButton, {}));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachDayOfInterval/index.js
var eachDayOfInterval = __webpack_require__(50952);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfWeek/index.js
var startOfWeek = __webpack_require__(62469);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfWeek/index.js
var endOfWeek = __webpack_require__(55016);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+base@5.0.0-alpha.100_patch_hash=ved4raqjjkr2jjhghdp5ouuxk4_@types+react@18.2.21_react-do_x7tnikinjhdbsji3vhas5jytle/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(67182);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfMonth/index.js
var startOfMonth = __webpack_require__(95324);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(55906);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfMonth/index.js
var endOfMonth = __webpack_require__(11416);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addMonths/index.js
var addMonths = __webpack_require__(16950);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(18351);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/hooks/useEventList.tsx



function useNewsList(date) {
    const startTime = (0,startOfMonth/* default */.Z)(date).getTime() / 1000;
    const endTime = Math.floor((0,endOfMonth/* default */.Z)(date).getTime() / 1000);
    const { data, isLoading } = (0,useQuery/* useQuery */.a)([
        'newsList',
        startTime,
        endTime
    ], async ()=>await entry/* Calendar */.f.getNewsList(startTime, endTime));
    const eventsWithDate = data?.reduce((acc, v)=>{
        const date = new Date(Number(v.event_date)).toLocaleDateString();
        acc[date] = acc[date] || [];
        acc[date].push(v);
        return acc;
    }, {}) ?? {};
    return {
        data: eventsWithDate,
        isLoading
    };
}
function useEventList(date) {
    const startTime = (0,startOfMonth/* default */.Z)(date).getTime() / 1000;
    const endTime = Math.floor((0,endOfMonth/* default */.Z)(date).getTime() / 1000);
    const { data, isLoading } = (0,useQuery/* useQuery */.a)([
        'eventList',
        startTime,
        endTime
    ], async ()=>await entry/* Calendar */.f.getEventList(startTime, endTime));
    const eventsWithDate = data?.reduce((acc, v)=>{
        const date = new Date(Number(v.event_date)).toLocaleDateString();
        acc[date] = acc[date] || [];
        acc[date].push(v);
        return acc;
    }, {}) ?? {};
    return {
        data: eventsWithDate,
        isLoading
    };
}
function useNFTList(date) {
    const startTime = (0,startOfMonth/* default */.Z)(date).getTime() / 1000;
    const endTime = Math.floor((0,endOfMonth/* default */.Z)(date).getTime() / 1000);
    const { data, isLoading } = (0,useQuery/* useQuery */.a)([
        'nftList',
        startTime,
        endTime
    ], async ()=>await entry/* Calendar */.f.getNFTList(startTime, endTime));
    const eventsWithDate = data?.reduce((acc, v)=>{
        const date = new Date(v.event_date).toLocaleDateString();
        acc[date] = acc[date] || [];
        acc[date].push(v);
        return acc;
    }, {}) ?? {};
    return {
        data: eventsWithDate,
        isLoading
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(8395);
;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/DatePicker.tsx









const DatePicker_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { open })=>({
        container: {
            background: theme.palette.mode === 'dark' ? '#18232E' : theme.palette.maskColor.white,
            boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.10)',
            borderRadius: '16px',
            display: open ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '24px',
            width: '320px',
            height: '355px',
            padding: '24px',
            position: 'absolute',
            left: '-16px',
            zIndex: 999
        },
        daysOfWeek: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.third,
            marginBottom: '24px'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        headerText: {
            color: theme.palette.maskColor.main,
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '120%'
        },
        headerIcon: {
            display: 'flex',
            alignItems: 'center'
        },
        dateItem: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '20px',
            color: theme.palette.maskColor.third,
            width: '38px',
            height: '38px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999
        },
        row: {
            marginBottom: '8px'
        },
        canClick: {
            color: theme.palette.maskColor.main,
            cursor: 'pointer'
        },
        active: {
            color: theme.palette.maskColor.white,
            background: theme.palette.maskColor.primary
        },
        button: {
            outline: 'none',
            background: 'none',
            border: 'none',
            padding: 0
        }
    }));
function DatePicker({ selectedDate, setSelectedDate, open, setOpen, currentTab }) {
    const { classes } = DatePicker_useStyles({
        open
    });
    const [currentDate, setCurrentDate] = (0,react.useState)(selectedDate);
    const monthStart = (0,react.useMemo)(()=>(0,startOfMonth/* default */.Z)(currentDate), [
        currentDate
    ]);
    const { data: eventList } = useEventList(monthStart);
    const { data: newsList } = useNewsList(monthStart);
    const { data: nftList } = useNFTList(monthStart);
    const list = (0,react.useMemo)(()=>{
        switch(currentTab){
            case 'news':
                return newsList;
            case 'event':
                return eventList;
            case 'nfts':
                return nftList;
            default:
                (0,esm/* safeUnreachable */.P)(currentTab);
                return null;
        }
    }, [
        currentTab,
        newsList,
        eventList,
        nftList
    ]);
    const isPrevMonthDisabled = (0,react.useMemo)(()=>{
        return !(0,isAfter/* default */.Z)(currentDate, (0,endOfMonth/* default */.Z)(new Date()));
    }, [
        currentDate
    ]);
    const isNextMonthDisabled = (0,react.useMemo)(()=>{
        return (0,isAfter/* default */.Z)((0,addMonths/* default */.Z)(currentDate, 1), (0,addMonths/* default */.Z)((0,endOfMonth/* default */.Z)(new Date()), 2));
    }, [
        currentDate
    ]);
    const handleDateClick = (date)=>{
        setSelectedDate(date);
        setOpen(false);
    };
    const changeMonth = (amount)=>{
        setCurrentDate((0,addMonths/* default */.Z)(currentDate, amount));
    };
    const renderDatePicker = ()=>{
        const daysOfWeek = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ];
        const table = /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                        className: classes.daysOfWeek,
                        children: daysOfWeek.map((day)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: day
                                })
                            }, day))
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: Array.from({
                        length: 6
                    }).map((_, weekIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                            className: classes.row,
                            children: Array.from({
                                length: 7
                            }).map((_, dayIndex)=>{
                                const currentDatePointer = (0,addDays/* default */.Z)(monthStart, weekIndex * 7 + dayIndex);
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        className: classes.button,
                                        type: "submit",
                                        disabled: !list?.[currentDatePointer.toLocaleDateString()],
                                        onClick: ()=>handleDateClick(currentDatePointer),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: `${classes.dateItem} ${selectedDate.toDateString() === currentDatePointer.toDateString() ? classes.active : list?.[currentDatePointer.toLocaleDateString()] ? classes.canClick : ''}`,
                                            children: (0,format/* default */.Z)(currentDatePointer, 'd')
                                        })
                                    })
                                }, dayIndex);
                            })
                        }, weekIndex))
                })
            ]
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.headerText,
                            children: (0,format/* default */.Z)(currentDate, 'MMMM yyyy')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                            className: classes.headerIcon,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>changeMonth(-1),
                                    disabled: isPrevMonthDisabled,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LeftArrow, {
                                        size: 24
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>changeMonth(1),
                                    disabled: isNextMonthDisabled,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                                        size: 24
                                    })
                                })
                            ]
                        })
                    ]
                }),
                table
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: renderDatePicker()
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/DatePickerTab.tsx







const DatePickerTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            padding: '12px',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
        },
        date: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.maskColor.main,
            fontSize: 16,
            fontFamily: 'Helvetica',
            fontWeight: '400',
            lineHeight: 20,
            borderRadius: 999,
            textAlign: 'center',
            width: '28px !important',
            height: '28px !important',
            border: `0.5px ${theme.palette.maskColor.line} solid`,
            cursor: 'pointer'
        },
        isActive: {
            border: `0.5px ${theme.palette.maskColor.main} solid`
        },
        disabled: {
            color: theme.palette.maskColor.second,
            cursor: 'default'
        }
    }));
function DatePickerTab({ selectedDate, setSelectedDate, list, open, setOpen, currentTab }) {
    const { classes } = DatePickerTab_useStyles();
    const week = (0,react.useMemo)(()=>{
        return (0,eachDayOfInterval/* default */.Z)({
            start: (0,startOfWeek/* default */.Z)(selectedDate),
            end: (0,endOfWeek/* default */.Z)(selectedDate)
        });
    }, [
        selectedDate
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            week.map((v)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: `${classes.date} ${selectedDate.getDate() === v.getDate() ? classes.isActive : ''} ${list && !list[v.toLocaleDateString()] ? classes.disabled : ''}`,
                    onClick: ()=>{
                        if (list && !list[v.toLocaleDateString()]) return;
                        setSelectedDate(v);
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: v.getDate()
                    })
                }, v.toString());
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* default */.Z, {
                onClickAway: ()=>setOpen(false),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            size: "small",
                            onClick: ()=>{
                                setOpen(!open);
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinearCalendar, {
                                size: 24
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DatePicker, {
                            open: open,
                            setOpen: (open)=>setOpen(open),
                            selectedDate: selectedDate,
                            setSelectedDate: setSelectedDate,
                            currentTab: currentTab
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/locales/i18n_generated.ts
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
function useCalendarTrans() /**
      * `Calendar`
      */ /**
      * `Highly integrated Web3 news and events on Twitter, providing information on tokens, NFTs, AMAs, and regulatory events.`
      */ /**
      * `No content for the last two weeks.`
      */ /**
      * `Total`
      */ /**
      * `Price`
      */ /**
      * `Date`
      */ /**
      * `Loading`
      */ /**
      * `Powered By`
      */ /**
      * `News`
      */ /**
      * `Events`
      */ /**
      * `NFTs`
      */ /**
      * `The content is fully loaded`
      */ /**
      * `Expired`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("io.mask.calendar");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/NewsList.tsx







const NewsList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '506px',
            width: '100%',
            overflowY: 'scroll',
            position: 'relative',
            gap: '10px',
            '&::-webkit-scrollbar': {
                width: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.maskColor.secondaryLine,
                borderRadius: '99px'
            },
            marginBottom: '50px'
        },
        paddingWrap: {
            paddingRight: '12px'
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
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        eventCard: {
            display: 'flex',
            padding: '8px 0',
            flexDirection: 'column',
            gap: '8px',
            borderBottom: `1px solid ${theme.palette.maskColor.line}`,
            fontWeight: 700,
            lineHeight: '16px',
            fontSize: '12px',
            cursor: 'pointer'
        },
        eventHeader: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        },
        projectWrap: {
            display: 'flex',
            gap: 8,
            alignItems: 'center'
        },
        projectName: {
            color: theme.palette.maskColor.main,
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: '16px'
        },
        logo: {
            width: '24px',
            height: '24px',
            borderRadius: '50%'
        },
        eventTitle: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.main
        },
        eventContent: {
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        eventType: {
            fontSize: '12px',
            fontWeight: 400,
            color: theme.palette.maskColor.main,
            borderRadius: '4px',
            background: theme.palette.maskColor.bg,
            padding: '2px 4px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        dateDiv: {
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            padding: '10px 0'
        }
    }));
function NewsList({ list, isLoading, empty, dateString }) {
    const { classes, cx } = NewsList_useStyles();
    const t = useCalendarTrans();
    const listRef = (0,react.useRef)(null);
    const listAfterDate = (0,react.useMemo)(()=>{
        const listAfterDate = [];
        for(const key in list){
            if (new Date(key) >= new Date(dateString)) {
                listAfterDate.push(key);
            }
        }
        return listAfterDate;
    }, [
        list,
        dateString
    ]);
    (0,react.useEffect)(()=>{
        if (listRef.current) listRef.current.scrollTo({
            top: 0
        });
    }, [
        listRef,
        list
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        ref: listRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.paddingWrap,
            children: isLoading && !list?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.empty, classes.eventTitle),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {})
            }) : !empty && listAfterDate.length ? listAfterDate.map((key)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.dateDiv,
                            children: (0,format/* default */.Z)(new Date(key), 'MMM dd,yyy')
                        }),
                        list[key].map((v)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.eventCard,
                                onClick: ()=>{
                                    window.open(v.event_url);
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.eventHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: classes.projectWrap,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                        src: v.project.logo,
                                                        className: classes.logo,
                                                        alt: "logo"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        className: classes.projectName,
                                                        children: v.project.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.eventType,
                                                children: v.event_type
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.eventTitle,
                                        children: v.event_title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.eventContent,
                                        children: v.event_description
                                    })
                                ]
                            }, v.event_url))
                    ]
                }, key);
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                className: classes.empty,
                children: t.empty_status()
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/EventList.tsx







const EventList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '506px',
            width: '100%',
            overflowY: 'scroll',
            position: 'relative',
            gap: '10px',
            '&::-webkit-scrollbar': {
                width: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.maskColor.secondaryLine,
                borderRadius: '99px'
            },
            marginBottom: '50px'
        },
        paddingWrap: {
            paddingRight: '12px'
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
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        eventCard: {
            display: 'flex',
            padding: '8px 0',
            flexDirection: 'column',
            gap: '8px',
            cursor: 'pointer'
        },
        eventHeader: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        },
        projectWrap: {
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            color: theme.palette.maskColor.main
        },
        projectName: {
            color: theme.palette.maskColor.main,
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: '16px'
        },
        logo: {
            width: '24px',
            height: '24px',
            borderRadius: '50%'
        },
        eventTitle: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.mode === 'dark' ? theme.palette.maskColor.second : theme.palette.maskColor.main
        },
        time: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        poster: {
            borderRadius: '8px',
            width: '100%',
            height: '156px',
            objectFit: 'cover'
        },
        dateDiv: {
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            padding: '10px 0'
        }
    }));
const formatDate = (date)=>{
    const dateFormat = 'MMM dd, yyyy HH:mm';
    return (0,format/* default */.Z)(new Date(date), dateFormat);
};
function EventList({ list, isLoading, empty, dateString }) {
    const { classes, cx } = EventList_useStyles();
    const t = useCalendarTrans();
    const listRef = (0,react.useRef)(null);
    const listAfterDate = (0,react.useMemo)(()=>{
        const listAfterDate = [];
        for(const key in list){
            if (new Date(key) >= new Date(dateString)) {
                listAfterDate.push(key);
            }
        }
        return listAfterDate;
    }, [
        list,
        dateString
    ]);
    (0,react.useEffect)(()=>{
        if (listRef.current) listRef.current.scrollTo({
            top: 0
        });
    }, [
        listRef,
        list
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        ref: listRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.paddingWrap,
            children: isLoading && !list?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.empty, classes.eventTitle),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {})
            }) : !empty && listAfterDate.length ? listAfterDate.map((key)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.dateDiv,
                            children: (0,format/* default */.Z)(new Date(key), 'MMM dd,yyy')
                        }),
                        list[key].map((v)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.eventCard,
                                onClick: ()=>{
                                    window.open(v.event_url);
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.eventHeader,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.projectWrap,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: v.project.logo,
                                                    className: classes.logo,
                                                    alt: "logo"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.projectName,
                                                    children: v.project.name
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.eventTitle,
                                        children: v.event_title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.time,
                                        children: formatDate(v.event_date)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.poster,
                                        src: v.poster_url,
                                        alt: "poster"
                                    })
                                ]
                            }, v.eventTitle))
                    ]
                }, key);
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                className: classes.empty,
                children: t.empty_status()
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInSeconds/index.js
var differenceInSeconds = __webpack_require__(83841);
;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/CountDownTimer.tsx






const CountDownTimer_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        timer: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '16px',
            background: theme.palette.maskColor.bg,
            color: theme.palette.maskColor.main,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2px'
        }
    }));
function CountdownTimer({ targetDate }) {
    const calculateRemainingTime = (0,react.useCallback)((targetDate)=>{
        const currentDate = new Date();
        const difference = (0,differenceInSeconds/* default */.Z)(targetDate, currentDate);
        return difference > 0 ? difference : 0;
    }, [
        targetDate
    ]);
    const [remainingTime, setRemainingTime] = (0,react.useState)(()=>calculateRemainingTime(targetDate));
    const { classes } = CountDownTimer_useStyles();
    const t = useCalendarTrans();
    (0,react.useEffect)(()=>{
        const interval = setInterval(()=>{
            const newRemainingTime = calculateRemainingTime(targetDate);
            setRemainingTime(newRemainingTime);
            if (newRemainingTime === 0) {
                clearInterval(interval);
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        targetDate
    ]);
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor(remainingTime % (60 * 60 * 24) / (60 * 60));
    const minutes = Math.floor(remainingTime % (60 * 60) / 60);
    const seconds = remainingTime % 60;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.timer,
        children: remainingTime === 0 ? t.expired() : `${days}d :${hours}h :${minutes}m :${seconds}s`
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/NFTList.tsx










const NFTList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '506px',
            width: '100%',
            overflowY: 'scroll',
            position: 'relative',
            gap: '10px',
            '&::-webkit-scrollbar': {
                width: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.maskColor.secondaryLine,
                borderRadius: '99px'
            },
            marginBottom: '50px'
        },
        paddingWrap: {
            paddingRight: '12px'
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
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        eventCard: {
            display: 'flex',
            padding: '8px 0',
            flexDirection: 'column',
            gap: '8px',
            fontWeight: 700,
            lineHeight: '16px',
            fontSize: '12px',
            cursor: 'pointer'
        },
        eventHeader: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        },
        projectWrap: {
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            color: theme.palette.maskColor.main
        },
        projectName: {
            color: theme.palette.maskColor.main,
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: '16px'
        },
        logo: {
            width: '24px',
            height: '24px',
            borderRadius: '50%'
        },
        eventTitle: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        second: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        poster: {
            borderRadius: '8px',
            width: '100%',
            height: '156px',
            objectFit: 'cover'
        },
        dateDiv: {
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            padding: '10px 0'
        },
        socialLinks: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
        }
    }));
const socialIcons = {
    twitter: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TwitterX, {
        size: 18
    }),
    discord: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.DiscordRoundBlack, {
        size: 20,
        color: "#000"
    }),
    website: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WebBlack, {
        size: 20
    })
};
const sortPlat = (_, b)=>{
    if (b.type === 'website') return -1;
    else return 0;
};
function NFTList({ list, isLoading, empty, dateString }) {
    const { classes, cx } = NFTList_useStyles();
    const t = useCalendarTrans();
    const listRef = (0,react.useRef)(null);
    const listAfterDate = (0,react.useMemo)(()=>{
        const listAfterDate = [];
        for(const key in list){
            if (new Date(key) >= new Date(dateString)) {
                listAfterDate.push(key);
            }
        }
        return listAfterDate;
    }, [
        list,
        dateString
    ]);
    (0,react.useEffect)(()=>{
        if (listRef.current) listRef.current.scrollTo({
            top: 0
        });
    }, [
        listRef,
        list
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        ref: listRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.paddingWrap,
            children: isLoading && !list?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.empty, classes.eventTitle),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {})
            }) : !empty && listAfterDate.length ? listAfterDate.map((key)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.dateDiv,
                            children: (0,format/* default */.Z)(new Date(key), 'MMM dd,yyy')
                        }),
                        list[key].map((v)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.eventCard,
                                onClick: ()=>{
                                    window.open(v.event_url);
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.eventHeader,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.projectWrap,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: v.project.logo,
                                                    className: classes.logo,
                                                    alt: "logo"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.projectName,
                                                    children: v.project.name
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.eventTitle,
                                        children: v.project.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.eventHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CountdownTimer, {
                                                targetDate: new Date(v.event_date)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: classes.socialLinks,
                                                children: v.project.links.sort(sortPlat).map((platform)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                        style: {
                                                            width: '20px',
                                                            height: '20px'
                                                        },
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            window.open(platform.url);
                                                        },
                                                        children: socialIcons[platform.type]
                                                    }, platform.type);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.eventHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.second,
                                                children: t.total()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.eventTitle,
                                                children: Number(v.ext_info.nft_info.total).toLocaleString('en-US')
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.eventHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.second,
                                                children: t.price()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.eventTitle,
                                                children: v.ext_info.nft_info.token
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.eventHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.second,
                                                children: t.date()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.eventTitle,
                                                children: formatDate(v.event_date)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.poster,
                                        src: v.poster_url,
                                        alt: "poster"
                                    })
                                ]
                            }, v.eventTitle))
                    ]
                }, key);
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                className: classes.empty,
                children: t.empty_status()
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/hooks/useOpenApplicationSettings.ts
var useOpenApplicationSettings = __webpack_require__(71437);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/ApplicationBoardModal/ApplicationBoardDialog.tsx + 2 modules
var ApplicationBoardDialog = __webpack_require__(34061);
;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/components/Footer.tsx
/* cspell: disable */ 







const Footer_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            backdropFilter: 'blur(10px)',
            borderRadius: '0 0 12px 12px',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%'
        },
        lineWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            width: '100%'
        },
        poweredByWrap: {
            display: 'flex',
            gap: '4px',
            alignItems: 'center'
        },
        poweredBy: {
            display: 'flex',
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            alignItems: 'center'
        },
        calender: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
        },
        calendarText: {
            color: theme.palette.maskColor.main,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '20px',
            alignItems: 'center'
        },
        providerName: {
            color: theme.palette.maskColor.main,
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            alignItems: 'center'
        }
    }));
function Footer({ provider }) {
    const { classes } = Footer_useStyles();
    const t = useCalendarTrans();
    const providerMap = {
        news: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.providerName,
                    children: "CoinCarp"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Coincarp, {
                    size: 24
                })
            ]
        }),
        event: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.providerName,
                    children: "LINK3"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Link3, {
                    size: 24
                })
            ]
        }),
        nfts: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.providerName,
                    children: "NFTGO"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Nftgo, {
                    size: 24
                })
            ]
        })
    };
    const openApplicationBoardDialog = (0,useOpenApplicationSettings/* useOpenApplicationSettings */.Y)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.lineWrap,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.calender,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Calendar, {
                            size: 24
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.calendarText,
                            children: t.title()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.poweredByWrap,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.poweredBy,
                            children: t.powered_by()
                        }),
                        providerMap[provider],
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            sx: {
                                width: '16px',
                                height: '16px'
                            },
                            onClick: ()=>openApplicationBoardDialog(ApplicationBoardDialog/* ApplicationSettingTabs */.U.pluginSwitch, PluginID/* PluginID */.P.Calendar),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gear, {
                                size: 16
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Calendar/src/SiteAdaptor/CalendarContent.tsx
/* cspell: disable */ 















const CalendarContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        calendar: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '12px',
            border: `1px solid ${theme.palette.maskColor.line}`,
            position: 'relative',
            marginBottom: '20px'
        },
        tab: {
            fontSize: 16,
            fontWeight: 700
        },
        tabList: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.20) 0%, rgba(69, 163, 251, 0.20) 100%), #FFF',
            padding: '8px 16px 0 16px',
            borderRadius: '12px 12px 0 0'
        },
        tabPanel: {
            padding: '0 4px 0 12px'
        }
    }));
function CalendarContent({ target }) {
    const t = useCalendarTrans();
    const { classes } = CalendarContent_useStyles();
    const [pathname, setPathname] = (0,react.useState)(location.pathname);
    const isMinimalMode = (0,site_adaptor/* useIsMinimalMode */.$i)(PluginID/* PluginID */.P.Calendar);
    const [currentTab, onChange, tabs] = (0,useTabs/* useTabs */.Y)('news', 'event', 'nfts');
    const [selectedDate, setSelectedDate] = (0,react.useState)(new Date());
    const [open, setOpen] = (0,react.useState)(false);
    const { data: eventList, isLoading: eventLoading } = useEventList(selectedDate);
    const { data: newsList, isLoading: newsLoading } = useNewsList(selectedDate);
    const { data: nftList, isLoading: nftLoading } = useNFTList(selectedDate);
    const list = (0,react.useMemo)(()=>{
        switch(currentTab){
            case 'news':
                return newsList;
            case 'event':
                return eventList;
            case 'nfts':
                return nftList;
            default:
                (0,esm/* safeUnreachable */.P)(currentTab);
                return null;
        }
    }, [
        currentTab,
        newsList,
        eventList,
        nftList
    ]);
    const dateString = (0,react.useMemo)(()=>selectedDate.toLocaleDateString(), [
        selectedDate
    ]);
    (0,useLocationChange/* useLocationChange */.S)(()=>{
        setPathname(location.pathname);
    });
    if (isMinimalMode || target && !pathname?.includes(target)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.calendar,
        style: {
            marginTop: pathname?.includes('explore') ? 24 : 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: currentTab,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.tabList,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                        variant: "base",
                        onChange: onChange,
                        "aria-label": "",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                className: classes.tab,
                                label: t.news(),
                                value: tabs.news
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                className: classes.tab,
                                label: t.event(),
                                value: tabs.event
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                className: classes.tab,
                                label: t.nfts(),
                                value: tabs.nfts
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DatePickerTab, {
                    open: open,
                    setOpen: (open)=>setOpen(open),
                    selectedDate: selectedDate,
                    setSelectedDate: (date)=>setSelectedDate(date),
                    list: list,
                    currentTab: currentTab
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: tabs.news,
                    className: classes.tabPanel,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NewsList, {
                        list: newsList,
                        isLoading: newsLoading,
                        empty: !Object.keys(newsList).length,
                        dateString: dateString
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: tabs.event,
                    className: classes.tabPanel,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EventList, {
                        list: eventList,
                        isLoading: eventLoading,
                        empty: !Object.keys(eventList).length,
                        dateString: dateString
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: tabs.nfts,
                    className: classes.tabPanel,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTList, {
                        list: nftList,
                        isLoading: nftLoading,
                        empty: !Object.keys(newsList).length,
                        dateString: dateString
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {
                    provider: currentTab
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/injection/Calendar.tsx






function sidebarSearchSelector() {
    return querySelector('[data-testid="sidebarColumn"] > div > div > div > div[tabindex="0"] > div > div:not(div[tabindex="0"]):empty');
}
function sidebarExplorePageSelector() {
    return querySelector('[data-testid="settingsAppBar"]').closest(12).querySelector('[data-testid="sidebarColumn"] [tabindex="0"] > div');
}
function sidebarSearchPageSelector() {
    return querySelector('[data-testid="searchBoxOverflowButton"]').closest(11).querySelector('[data-testid="sidebarColumn"] [tabindex="0"] > div > div');
}
function injectCalendar(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(sidebarSearchSelector());
    const exploreWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(sidebarExplorePageSelector());
    const searchWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(sidebarSearchPageSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,startWatch/* startWatch */.f)(exploreWatcher, signal);
    (0,startWatch/* startWatch */.f)(searchWatcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarContent, {}));
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(exploreWatcher.firstDOMProxy.beforeShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarContent, {
        target: "/explore"
    }));
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(searchWatcher.firstDOMProxy.afterShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarContent, {
        target: "/search"
    }));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/twitter.com/ui-provider.ts
/* eslint-disable tss-unused-classes/unused-classes */ 










































const useInjectedDialogClassesOverwriteTwitter = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
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
                minWidth: '100%',
                boxSizing: 'border-box',
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
                minWidth: '100%',
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
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(110, 118, 125, 0.4)' : 'rgba(0, 0, 0, 0.4)'
        }
    };
});
const twitterUI = {
    ...base/* twitterBase */.o,
    ...twitterShared,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxTwitter
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            attachText: pasteTextToCompositionTwitter,
            // TODO: make a better way to detect
            attachImage: pasteImageToCompositionTwitter
        },
        redirect: {
            newsFeed: gotoNewsFeedPageTwitter,
            profilePage: gotoProfilePageTwitter
        },
        endpoint: {
            publishPost: publishPostTwitter
        }
    },
    collecting: {
        identityProvider: IdentityProviderTwitter,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderTwitter,
        themeSettingsProvider: ThemeSettingsProviderTwitter,
        postsProvider: PostProviderTwitter,
        getSearchedKeyword: getSearchedKeywordAtTwitter
    },
    customization: {
        sharedComponentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteTwitter
            }
        },
        componentOverwrite: {
            RenderFragments: TwitterRenderFragments
        },
        useTheme: useThemeTwitterVariant,
        i18nOverwrite: i18NOverwriteTwitter
    },
    init (signal) {
        const profiles = utils/* stateCreator */.Z.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, twitterShared.networkIdentifier);
        return {
            profiles
        };
    },
    injection: {
        toolbox: injectToolboxHintAtTwitter,
        searchResult: injectSearchResultInspectorAtTwitter,
        profileTab: injectProfileTabAtTwitter,
        profileCover: injectProfileCover,
        profileTabContent: injectProfileTabContentAtTwitter,
        postReplacer: injectPostReplacerAtTwitter,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtTwitter,
        postActions: injectPostActionsAtTwitter,
        banner: injectBannerAtTwitter,
        newPostComposition: {
            start: injectPostBoxComposed,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: true,
                image: true
            }
        },
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        userBadge: injectMaskUserBadgeAtTwitter,
        commentComposition: undefined,
        userAvatar: injectUserNFTAvatarAtTwitter,
        profileAvatar: injectNFTAvatarInTwitter,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        postAndReplyNFTAvatar: injectUserNFTAvatarAtTweet,
        openNFTAvatarSettingDialog: openNFTAvatarSettingDialog,
        avatar: injectAvatar,
        tips: injectTips,
        lens: injectLens,
        profileCard: injectProfileCardHolder,
        switchLogo: injectSwitchLogoButton,
        calendar: injectCalendar
    },
    configuration: {
        themeSettings: {
            color: specs/* ThemeColor */.tP.Blue,
            size: specs/* FontSize */.Bf.Normal,
            mode: specs/* ThemeMode */.hY.Light,
            isDim: false
        },
        nextIDConfig: {
            enable: true,
            platform: types/* NextIDPlatform */.V.Twitter,
            collectVerificationPost: collectVerificationPost,
            getPostIdFromNewPostToast: getPostIdFromNewPostToast
        },
        steganography: {
            // ! Change this is a breaking change !
            password () {
                const id = IdentityProviderTwitter.recognized.value.identifier?.userId || ui/* activatedSiteAdaptor_state */.g.profiles.value?.[0].identifier.userId;
                if (!id) throw new Error('Cannot figure out password');
                return profile/* ProfileIdentifier */.W.of(Site_types/* EnhanceableSite */.J.Twitter, id).expect(`${id} should be a valid user id`).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (twitterUI);


/***/ }),

/***/ 82037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ untilElementAvailable)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57791);

function untilElementAvailable(ls, timeout = 5000) {
    return new Promise((resolve, reject)=>{
        const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .IntervalWatcher */ .W(ls);
        setTimeout(()=>reject(), timeout);
        w.useForeach(()=>{
            w.stopWatch();
            resolve();
        }).startWatch(500);
    });
}


/***/ }),

/***/ 78178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useCurrentVisitingIdentity)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8898);


function useCurrentVisitingIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .currentVisitingProfile */ .Yg);
}


/***/ }),

/***/ 37460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useSocialIdentity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8898);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49588);





/**
 * Get the social identity of the given identity
 */ function useSocialIdentity(identity) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            identity,
            _context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$
        ],
        enabled: Boolean(identity && _context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$),
        queryFn: async ()=>{
            if (!_context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$ || !identity) return null;
            return (0,_dom_context_js__WEBPACK_IMPORTED_MODULE_3__/* .querySocialIdentity */ .il)(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$, identity);
        },
        refetchOnWindowFocus: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.ownProofChanged.on(()=>result.refetch()), [
        result.refetch
    ]);
    return result;
}


/***/ }),

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
/* harmony export */   wX: () => (/* binding */ getPluginRPCGenerator),
/* harmony export */   x8: () => (/* binding */ getPluginRPC)
/* harmony export */ });
/* unused harmony exports __workaround__replaceIsBackground__, startPluginRPC, startPluginGeneratorRPC */
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

/***/ 23087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ TipButton)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingIdentity.ts
var useCurrentVisitingIdentity = __webpack_require__(78178);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useSocialIdentity.ts
var useSocialIdentity = __webpack_require__(37460);
;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/useSocialIdentityByUserId.ts



function useSocialIdentityByUserId(userId) {
    const { value: identity } = (0,useAsync/* default */.Z)(async ()=>{
        if (!userId) return;
        return (0,context/* getUserIdentity */.mO)?.(userId);
    }, [
        userId
    ]);
    return (0,useSocialIdentity/* useSocialIdentity */.m)(identity);
}

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/index.ts
var NextID = __webpack_require__(3765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/base/BaseSharedUIProvider.tsx
var BaseSharedUIProvider = __webpack_require__(14580);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/hooks/useProfilePublicKey.ts




function useProfilePublicKey(userId) {
    const { networkIdentifier } = (0,BaseSharedUIProvider/* useBaseUIRuntime */.uD)();
    const platform = (0,NextID/* resolveNetworkToNextIDPlatform */.Im)(networkIdentifier);
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'next-id',
            'lasted-active',
            platform,
            userId
        ],
        queryFn: async ()=>{
            if (!userId || !platform) return;
            const binding = await entry/* NextIDProof */.q7.queryLatestBindingByPlatform(platform, userId);
            return binding?.persona;
        }
    });
}

// EXTERNAL MODULE: ./packages/plugins/Tips/src/messages.ts
var messages = __webpack_require__(90660);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useSocialAccountsAll.ts + 2 modules
var useSocialAccountsAll = __webpack_require__(91375);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useHiddenAddressConfig.ts
var useHiddenAddressConfig = __webpack_require__(66117);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var dom_context = __webpack_require__(49588);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TipsButton/useTipsAccounts.ts





/**
 * Get Tips accounts, removing the hidden ones,
 * and put the default one at the front.
 */ function useTipsAccounts(identity, personaPubkey) {
    const { data: socialAccounts = constants/* EMPTY_LIST */.rP } = (0,useSocialAccountsAll/* useSocialAccountsAll */.C)(identity);
    const userId = identity?.identifier?.userId;
    const { data: hiddenAddresses } = (0,useHiddenAddressConfig/* useHiddenAddressConfigOf */.Nl)(personaPubkey, PluginID/* PluginID */.P.Web3Profile, userId, dom_context/* signWithPersona */.MN);
    return (0,react.useMemo)(()=>{
        if (!hiddenAddresses?.length) return socialAccounts;
        const list = socialAccounts;
        return list.filter((x)=>!hiddenAddresses.some((y)=>(0,isSameAddress/* isSameAddress */.W)(y, x.address)));
    }, [
        hiddenAddresses,
        socialAccounts,
        userId
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TipsButton/index.tsx










// This is workaround solution, link issue mf-2536 and pr #7576.
// Should refactor social account to support multi-account for one post.
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        tipButton: {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '-apple-system, system-ui, sans-serif'
        },
        icon: {
            width: props.iconSize,
            height: props.iconSize
        }
    }));
function TipButton(props) {
    const { className, accounts: receivingAccounts = constants/* EMPTY_LIST */.rP, receiver, recipient, children, iconSize = 24, onStatusUpdate, ...rest } = props;
    const { classes, cx } = useStyles({
        iconSize
    });
    const { data: personaPubkey, isLoading: loadingPersona } = useProfilePublicKey(receiver?.userId);
    const receiverUserId = receiver?.userId;
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const visitingIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const { data: identity } = useSocialIdentityByUserId(receiverUserId);
    const isVisitingUser = visitingIdentity?.identifier?.userId === receiverUserId;
    const isRuntimeAvailable = (0,react.useMemo)(()=>{
        switch(pluginID){
            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                return true;
            case PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA:
                return isVisitingUser;
        }
        return false;
    }, [
        pluginID,
        isVisitingUser
    ]);
    const accountsByIdentity = useTipsAccounts(identity, personaPubkey);
    const accounts = (0,react.useMemo)(()=>{
        return [
            ...receivingAccounts,
            ...accountsByIdentity
        ].sort((a, z)=>{
            const aHasNextId = a.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.NEXT_ID);
            const zHasNextId = z.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.NEXT_ID);
            if (aHasNextId === zHasNextId) return 0;
            return aHasNextId ? -1 : zHasNextId ? 1 : 0;
        }).sort((a, z)=>{
            if (a.pluginID === z.pluginID) return 0;
            return a.pluginID === pluginID ? -1 : 1;
        });
    }, [
        receivingAccounts,
        accountsByIdentity,
        pluginID
    ]);
    const disabled = loadingPersona || accounts.length === 0 || !isRuntimeAvailable;
    (0,react.useEffect)(()=>{
        onStatusUpdate?.(disabled);
    }, [
        disabled
    ]);
    const createTipTask = (0,react.useCallback)(async (evt)=>{
        evt.stopPropagation();
        evt.preventDefault();
        if (disabled) return;
        if (!accounts.length || !receiverUserId) return;
        messages/* PluginTipsMessages */.q.tipTask.sendToLocal({
            recipient,
            recipientUserId: receiverUserId,
            accounts
        });
    }, [
        disabled,
        recipient,
        accounts,
        receiverUserId
    ]);
    (0,react.useEffect)(()=>{
        if (!receiverUserId || !accounts.length) return;
        messages/* PluginTipsMessages */.q.tipTaskUpdate.sendToLocal({
            recipient,
            recipientUserId: receiverUserId,
            accounts
        });
    }, [
        recipient,
        receiverUserId,
        accounts
    ]);
    if (disabled) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(className, classes.tipButton),
        ...rest,
        role: "button",
        onClick: createTipTask,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TipCoin, {
                className: classes.icon
            }),
            children
        ]
    });
}


/***/ }),

/***/ 90660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ PluginTipsMessages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);


 undefined;
const PluginTipsMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .getPluginMessage */ .db)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PluginID */ .P.Tips);


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

/***/ 91688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 71437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useOpenApplicationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49588);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25127);



function useOpenApplicationSettings() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((tab, focusPluginID)=>{
        _index_js__WEBPACK_IMPORTED_MODULE_1__/* .ApplicationBoardSettingsModal */ .Ps.open({
            setPluginMinimalModeEnabled: _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__/* .setPluginMinimalModeEnabled */ .I1,
            tab,
            focusPluginID
        });
    }, []);
}


/***/ }),

/***/ 50502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92384);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootPopper = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootPopper.displayName = 'ShadowRootTooltip';


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

/***/ 67070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(24460);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ 58418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const conversions = __webpack_require__(67070);
const route = __webpack_require__(44591);

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ 44591:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const conversions = __webpack_require__(67070);

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ 24460:
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ 98338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
var colorNames = __webpack_require__(24460);
var swizzle = __webpack_require__(47389);
var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (hasOwnProperty.call(colorNames, name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorNames, match[1])) {
			return null;
		}

		rgb = colorNames[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ 71623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const colorString = __webpack_require__(98338);
const convert = __webpack_require__(58418);

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
	hashedModelKeys[[...convert[model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = colorString.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = convert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to[self.model](args);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to.rgb.percent(args);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = convert[this.model];
		const {labels} = convert[this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return convert[this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return colorString.to.hex(rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(convert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = convert[model];

	// Conversion methods
	Color.prototype[model] = function (...args) {
		if (this.model === model) {
			return new Color(this);
		}

		if (args.length > 0) {
			return new Color(args, model);
		}

		return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...args) {
		let color = args[0];
		if (typeof color === 'number') {
			color = zeroArray(args, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

module.exports = Color;


/***/ }),

/***/ 73241:
/***/ ((module) => {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ 47389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArrayish = __webpack_require__(73241);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ })

}]);
//# sourceMappingURL=chunk.6833.js.map