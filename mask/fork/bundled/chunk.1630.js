"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1630],{

/***/ 65108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 96320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/CommentBox.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((_theme, { site })=>({
        root: {
            flex: 1,
            fontSize: 13,
            background: '#3a3b3c',
            width: site === types/* EnhanceableSite */.J.Minds ? '96%' : '100%',
            height: 34,
            borderRadius: 20,
            padding: '2px 1em',
            boxSizing: 'border-box',
            marginTop: 6,
            color: '#e4e6eb'
        },
        input: {
            '&::placeholder': {
                color: '#b0b3b8',
                opacity: 1
            },
            '&:focus::placeholder': {
                color: '#d0d2d6'
            }
        }
    }));
function CommentBox(props) {
    const { classes } = useStyles({
        site: ui.activatedSiteAdaptorUI.networkIdentifier
    });
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            display: 'flex',
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
            className: classes.root,
            inputProps: {
                className: classes.input,
                'data-testid': 'comment_input'
            },
            placeholder: t.comment_box__placeholder(),
            onKeyDown: (event)=>{
                const node = event.target;
                if (!node.value) return;
                if (event.key !== 'Enter') return;
                props.onSubmit(node.value);
                node.value = '';
            },
            // clear content
            ...props.inputProps
        })
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/CommentBox.tsx









async function defaultOnPasteToCommentBox(encryptedComment, _current, _realCurrent) {
    Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
        text: encryptedComment
    });
}
// TODO: should not rely on onPasteToCommentBoxFacebook.
// Use automation.nativeCommentBox.appendText
const injectCommentBoxDefaultFactory = function(onPasteToCommentBox = defaultOnPasteToCommentBox, additionPropsToCommentBox = ()=>({}), useCustomStyles = (0,makeStyles/* makeStyles */.Z)()({}), mountPointCallback) {
    const CommentBoxUI = /*#__PURE__*/ (0,react.memo)(function CommentBoxUI({ dom }) {
        const info = (0,react.useContext)(PostContext/* PostInfoContext */.lG);
        const encryptComment = PostContext/* usePostInfoDetails */.H9.encryptComment();
        const { classes } = useCustomStyles();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            if (!encryptComment) return;
            const encryptedComment = await encryptComment(content);
            onPasteToCommentBox(encryptedComment, info, dom);
        }, [
            encryptComment,
            info,
            dom
        ]);
        if (!encryptComment) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        });
    });
    return (signal, current)=>{
        if (!current.comment?.commentBoxSelector) return;
        const commentBoxWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(current.comment.commentBoxSelector.clone(), document.body).useForeach((node, key, meta)=>{
            try {
                mountPointCallback?.(meta);
            } catch  {}
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostContext/* PostInfoContext */.lG.Provider, {
                value: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBoxUI, {
                    ...current,
                    dom: meta.realCurrent
                })
            }));
            return root.destroy;
        });
        (0,startWatch/* startWatch */.f)(commentBoxWatcher, signal);
    };
};


/***/ }),

/***/ 27143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Lock.js


/* harmony default export */ const Lock = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
}), 'Lock'));
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/PostComments.tsx








const useStyle = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        height: 'auto',
        width: 'calc(98% - 10px)',
        padding: '6px'
    },
    label: {
        width: '90%',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        textOverflow: 'clip'
    }
});
function PostCommentDecrypted(props) {
    const { classes } = useStyle(undefined, {
        props: props.ChipProps || {}
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
            "data-testid": "comment_field",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock, {}),
            label: props.children,
            color: "secondary",
            ...props.ChipProps,
            classes: {
                root: classes.root,
                label: classes.label
            }
        })
    });
}
function PostComment(props) {
    const { needZip } = props;
    const comment = (0,useValueRef/* useValueRef */.E)(props.comment);
    const decrypt = PostContext/* usePostInfoDetails */.H9.decryptComment();
    const { value } = (0,useAsync/* default */.Z)(async ()=>decrypt?.(comment), [
        decrypt,
        comment
    ]);
    (0,react.useEffect)(()=>void (value && needZip()), [
        value,
        needZip
    ]);
    if (value) return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDecrypted, {
        children: value
    });
    return null;
}

// EXTERNAL MODULE: ./packages/mask/content-script/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(97250);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/Comments.tsx










/**
 * Create a default implementation of injectPostComments
 */ function injectPostCommentsDefault(config = {}, additionalPropsToPostComment = ()=>({}), useCustomStyles = (0,makeStyles/* makeStyles */.Z)()({})) {
    const { needZip } = config;
    const PostCommentDefault = /*#__PURE__*/ (0,react.memo)(function PostCommentDefault(props) {
        const { classes } = useCustomStyles();
        const additional = additionalPropsToPostComment(classes);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostComment, {
            ...props,
            ...additional
        });
    });
    return function injectPostComments(signal, current) {
        const selector = current.comment?.commentsSelector;
        if (!selector) return;
        const commentWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(selector, document.body).useForeach((commentNode, key, meta)=>{
            const commentRef = new ValueRef/* ValueRef */.Xf((0,collectNodeText/* collectNodeText */.a)(commentNode));
            const needZipF = needZip || (()=>undefined);
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostContext/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDefault, {
                    needZip: needZipF,
                    comment: commentRef
                })
            }));
            return {
                onNodeMutation () {
                    commentRef.value = (0,collectNodeText/* collectNodeText */.a)(commentNode);
                },
                onTargetChanged () {
                    commentRef.value = (0,collectNodeText/* collectNodeText */.a)(commentNode);
                },
                onRemove () {
                    root.destroy();
                }
            };
        });
        (0,startWatch/* startWatch */.f)(commentWatcher, signal);
    };
}


/***/ }),

/***/ 71630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils.ts
var utils = __webpack_require__(16900);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/base.ts
var base = __webpack_require__(72711);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/isMobile.ts
var isMobile = __webpack_require__(68102);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(14431);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/parse-username.ts


/**
 * @see https://www.facebook.com/help/105399436216001#What-are-the-guidelines-around-creating-a-custom-username?
 * ! Start to use this in a breaking change!
 */ function isValidFacebookUsername(name) {
    if (!name) return null;
    // Avoid common mistake
    if (name === 'photo.php') return null;
    const n = name.toLowerCase().replaceAll('.', '');
    if (n.match(/^[\da-z]+$/)) {
        return n;
    }
    return null;
}
/**
 * Normalize post url
 */ function getPostUrlAtFacebook(post) {
    const id = post.identifier;
    const { postId } = post;
    const { userId } = id;
    const host = getFacebookHostName();
    if (!isValidFacebookUsername(userId)) return host;
    if (Number.parseFloat(userId)) return `${host}/permalink.php?story_fbid=${postId}&id=${userId}`;
    return `${host}/${userId}/posts/${postId}`;
}
/**
 * Normalize profile url
 */ function getProfilePageUrlAtFacebook(user) {
    if (user.network !== 'facebook.com') throw new Error('Wrong origin');
    const host = getFacebookHostName();
    const username = user.userId;
    if (!isValidFacebookUsername(username)) throw new TypeError(locales_legacy/* i18n */.a.t('service_username_invalid'));
    if (Number.parseFloat(username)) return `${host}/profile.php?id=${username}`;
    return `${host}/${username}`;
}
function getFacebookHostName() {
    if (isMobile/* isMobileFacebook */.q) return 'https://m.facebook.com';
    return 'https://www.facebook.com';
}

// EXTERNAL MODULE: ./packages/mask/content-script/utils/hasPayloadLike.ts
var hasPayloadLike = __webpack_require__(86925);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(80029);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/facebook.com.ts


const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const FacebookAdaptor = {
    name: 'Facebook',
    networkIdentifier: types/* EnhanceableSite */.J.Facebook,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.facebook.com',
    isSocialNetwork: true,
    sortIndex: 1,
    getProfilePage: ()=>new URL('https://www.facebook.com'),
    getShareLinkURL (message) {
        const url = (0,dist/* default */.ZP)('https://www.facebook.com/sharer/sharer.php', {
            quote: message,
            u: 'mask.io'
        });
        return new URL(url);
    }
};

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/shared.ts






function getPostURL(post) {
    return new URL(getPostUrlAtFacebook(post));
}
const facebookShared = {
    ...base/* facebookBase */.q,
    utils: {
        isValidUsername: (v)=>!!isValidFacebookUsername(v),
        getPostURL,
        share (message) {
            (0,open_window/* openWindow */.x)(FacebookAdaptor.getShareLinkURL?.(message));
        },
        createPostContext: (0,create_post_context/* createSiteAdaptorSpecializedPostContext */.L)({
            hasPayloadLike: hasPayloadLike/* hasPayloadLike */.s,
            getURLFromPostIdentifier: getPostURL
        })
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/LiveSelector.js
var LiveSelector = __webpack_require__(23212);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/automation/openComposeBox.ts





function nativeComposeButtonSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector([
        '[role="region"] [role="link"]+[role="button"]',
        '#MComposer [role="button"]'
    ].// mobile
    join(',')).enableSingleMode();
}
function nativeComposeTextareaSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector([
        '#structured_composer_form .mentions textarea'
    ].// mobile
    join(',')).enableSingleMode();
}
function nativeComposeDialogIndicatorSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector([
        // PC -  the form of compose dialog
        '[role="dialog"] form[method="post"]',
        // mobile - the submit button
        '#composer-main-view-id button[type="submit"]'
    ].join(','));
}
function nativeComposeDialogCloseButtonSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector('[role="dialog"] form[method="post"] [role="button"]');
}
async function taskOpenComposeBoxFacebook(content, options) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,esm/* delay */.gw)(200);
    // active the compose dialog
    const composeTextarea = nativeComposeTextareaSelector().evaluate();
    const composeButton = nativeComposeButtonSelector().evaluate();
    if (composeTextarea) composeTextarea.focus();
    if (composeButton) composeButton.click();
    await (0,esm/* delay */.gw)(200);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = nativeComposeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        // eslint-disable-next-line no-alert
        alert(locales_legacy/* i18n */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,esm/* delay */.gw)(2000);
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,core_text/* makeTypedMessageText */.P)(content) : content,
        options
    });
}
async function taskCloseNativeComposeBoxFacebook() {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,esm/* delay */.gw)(200);
    const closeDialogButton = nativeComposeDialogCloseButtonSelector().evaluate()?.[0];
    closeDialogButton?.click();
}

// EXTERNAL MODULE: ./packages/injected-script/sdk/index.ts
var sdk = __webpack_require__(46110);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/automation/pasteTextToComposition.ts





/**
 * Access: https://(www|m).facebook.com/
 */ async function pasteTextToCompositionFacebook(text, options) {
    const { recover } = options;
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    // Save the scrolling position
    const scrolling = document.scrollingElement || document.documentElement;
    const scrollBack = ((top)=>()=>scrolling.scroll({
                top
            }))(scrolling.scrollTop);
    const activated = new LiveSelector/* LiveSelector */.j().querySelectorAll(// cspell:disable-next-line
    isMobile/* isMobileFacebook */.q ? 'form textarea' : 'div[role=presentation] .notranslate[role=textbox]');
    if (isMobile/* isMobileFacebook */.q) activated.filter((x)=>x.getClientRects().length > 0);
    // Select element with fb customize background image.
    const activatedCustom = new LiveSelector/* LiveSelector */.j().querySelectorAll('.notranslate[aria-label]');
    activatedCustom.filter((x)=>x.parentElement?.parentElement?.parentElement?.parentElement?.hasAttribute('style'));
    const element = activated.evaluate()[0] ?? activatedCustom.evaluate()[0];
    try {
        element.focus();
        await (0,esm/* delay */.gw)(100);
        const selection = window.getSelection();
        if (selection) {
            if (selection.rangeCount > 0) {
                selection.removeAllRanges();
            }
            if (element.firstChild) {
                const range = document.createRange();
                range.selectNode(element.firstChild);
                selection.addRange(range);
            }
        }
        if ('value' in document.activeElement) (0,sdk/* inputText */.iJ)(text);
        else (0,sdk/* pasteText */.M1)(text);
        await (0,esm/* delay */.gw)(200);
        if (isMobile/* isMobileFacebook */.q) {
            const e = document.querySelector('.mentions-placeholder');
            if (e) e.style.display = 'none';
        }
        // Prevent Custom Paste failed, this will cause service not available to user.
        if (!element.innerText.includes(text) || 'value' in element && !element.value.includes(text)) copyFailed('Not detected');
    } catch (error) {
        copyFailed(error);
    }
    scrollBack();
    function copyFailed(error) {
        console.warn('Text not pasted to the text area', error);
        if (recover) Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
            text
        });
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/utils.ts
var site_adaptors_utils = __webpack_require__(21827);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/selector.ts


function querySelector(selector, singleMode = true) {
    const ls = new LiveSelector/* LiveSelector */.j().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
}
function querySelectorAll(selector) {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll(selector);
}
function searchUserIdOnMobileSelector() {
    return querySelector('div[data-sigil$="profile"] a');
}
function searchAvatarSelector() {
    return querySelector('[role="navigation"] svg g image, [role="main"] [role="link"] [role="img"] image, [role="main"] [role="button"] [role="img"] image');
}
function searchNickNameSelector(userId) {
    return querySelector((0,compact/* default */.Z)([
        userId ? `a[href$="id=${userId}"]` : undefined,
        'span[dir="auto"] div h1'
    ]).join(','));
}
function searchNickNameSelectorOnMobile() {
    return querySelector('#cover-name-root h3');
}
function bioDescriptionSelectorOnMobile() {
    return querySelector('#bio div');
}
function searchUserIdSelector() {
    return querySelector('div[role="tablist"][data-visualcompletion="ignore-dynamic"] a[role="tab"]');
}
function searchUserIdSelectorOnMobile() {
    return querySelector('#tlFeed div[data-sigil="scroll-area"] a:last-child');
}
// #endregion facebook nft avatar
function searchFacebookAvatarListSelector() {
    return querySelector('[role="dialog"] > div:nth-child(3)  input[type=file] + [role="button"]').closest(3).querySelector('div');
}
function searchFacebookAvatarMobileListSelector() {
    return querySelector('#nuxChoosePhotoButton').closest(6);
}
function searchFacebookAvatarSelector() {
    return querySelector('[role="main"] [role="button"] svg[role="img"],[role="main"] [role="link"] svg[role="img"]');
}
function searchFacebookAvatarOnMobileSelector() {
    return querySelector('[data-sigil="timeline-cover"] i[aria-label$="picture"]');
}
function searchFaceBookPostAvatarSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll('[type="nested/pressable"] > a > div > svg, ul div[role="article"] a > div > svg[role="none"]');
}
function searchFaceBookPostAvatarOnMobileSelector() {
    return querySelectorAll('[data-gt=\'{"tn":"~"}\']');
}
function searchFacebookAvatarOpenFilesSelector() {
    return querySelector('[role="dialog"] input[type=file] ~ div');
}
function searchFacebookAvatarOpenFilesOnMobileSelector() {
    return querySelector('#nuxChoosePhotoButton ~ input');
}
function searchFacebookProfileSettingButtonSelector() {
    return querySelector('[role="main"] > div > div > div > div > div input[accept*="image"] + div[role="button"]').closest(2);
}
function searchFacebookProfileCoverSelector() {
    return querySelector('[role="button"] [role="img"]').closest(10).querySelector('input[type="file"] ~ div').closest(6).querySelector('div');
}
function searchFacebookEditProfileSelector() {
    return querySelector('[role="main"] [role="button"] [role="img"]').closest(1).querySelector('i[data-visualcompletion="css-img"]');
}
function searchFacebookSaveAvatarButtonSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector('[role="dialog"] [role="slider"]').closest(7).querySelectorAll('div').map((x)=>x.parentElement?.parentElement).at(-1);
}
function searchFacebookConfirmAvatarImageSelector() {
    return querySelector('[role="dialog"] [role="slider"]').closest(7).querySelector('img');
}
function inpageAvatarSelector() {
    return querySelectorAll('[type="nested/pressable"]').closest(2);
}
// #region
function toolboxInSidebarSelector() {
    return querySelector('[data-pagelet="LeftRail"] > div > div > :nth-child(2) > ul > li:nth-child(2)');
}
function toolboxInSpecialSidebarSelector() {
    return querySelector('[role="navigation"] > div > div > div > :nth-child(2) > div > div > :nth-child(2) ul > li:nth-child(2)');
}
function toolboxInSidebarSelectorWithNoLeftRailStart() {
    return querySelector('[role="banner"]').closest(1).querySelector('div + div > div > div > div > div > div > div > div > ul').closest(1).querySelector('div:nth-child(2) > ul > li:nth-child(2)');
}
// for getting normal tab style
function profileTabUnselectedSelector() {
    return querySelector('[role="tablist"] a[aria-selected="false"]');
}
// for getting activated tab style
function profileTabSelectedSelector() {
    return querySelector('[role="tablist"] a[aria-selected="true"]');
}
// for inserting web3 tab
function searchProfileTabSelector() {
    return querySelector('[role="tablist"] > div > div > :last-child');
}
// for getting the inserted web3 tab
function web3TabSelector() {
    return querySelector('[role="tablist"] a:nth-child(7)+span');
}
// for inserting web3 tab content
function searchProfileTabPageSelector() {
    return querySelector('[role="main"] > div:last-child > div');
}
// for getting profile section style
function profileSectionSelector() {
    return querySelector('[role="main"]').querySelector('[style]');
}
function searchIntroSectionSelector() {
    return querySelector('[role="main"] > div:last-child > div:last-child');
}
function searchBioSelector() {
    return querySelector('[role="main"] > div:last-child > div:last-child > div > div > div:last-child > div > div > div > div > div > div > div:nth-child(2) > div span');
}
function searchResultHeadingSelector() {
    return querySelector('[role="article"]');
}
function searchHomepageSelector() {
    return querySelector('[data-pagelet="ProfileTilesFeed_0"] ul a span[dir="auto"]');
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/getProfileIdentifier.ts




/**
 *
 * @param allowCollectInfo
 * @param links
 *  Could be a group of anchor element. Seems like this:
 *  [
 *      <a class="_2nlw _2nlv" href="https://www.facebook.com/xxx">
 *          [USERNAME HERE]
 *          <span class="alternate_name">
 *              ([USER SCREEN NAME HERE])
 *          </span>
 *      </a>
 *  ]
 */ function getProfileIdentifierAtFacebook(links, allowCollectInfo) {
    const unknown = {};
    try {
        if (!Array.isArray(links)) links = [
            links
        ];
        const result = links.filter(Boolean).map((x)=>({
                nickname: x.ariaLabel || x.textContent?.trim(),
                id: getUserID(x.href),
                dom: x
            })).filter((x)=>x.id);
        const { dom, id, nickname } = result[0] || {};
        const identifier = profile/* ProfileIdentifier */.W.of(types/* EnhanceableSite */.J.Facebook, id).unwrapOr(null);
        if (identifier) {
            const currentProfile = (0,site_adaptors_utils/* getCurrentIdentifier */.T)();
            let avatar = null;
            try {
                const image = dom.closest('.clearfix').parentElement.querySelector('img');
                avatar = image.src;
                if (allowCollectInfo && image.getAttribute('aria-label') === nickname && nickname) {
                    service/* default */.ZP.Identity.updateProfileInfo(identifier, {
                        nickname,
                        avatarURL: image.src
                    });
                    if (currentProfile?.linkedPersona) {
                        service/* default */.ZP.Identity.createNewRelation(identifier, currentProfile.linkedPersona);
                    }
                }
            } catch  {}
            try {
                const image = dom.querySelector('img');
                avatar = image.src;
                if (allowCollectInfo && avatar) {
                    service/* default */.ZP.Identity.updateProfileInfo(identifier, {
                        nickname,
                        avatarURL: image.src
                    });
                    if (currentProfile?.linkedPersona) {
                        service/* default */.ZP.Identity.createNewRelation(identifier, currentProfile.linkedPersona);
                    }
                }
            } catch  {}
            try {
                const image = dom.querySelector('image');
                avatar = image.getAttribute('xlink:href');
                if (allowCollectInfo && avatar) {
                    service/* default */.ZP.Identity.updateProfileInfo(identifier, {
                        nickname,
                        avatarURL: avatar
                    });
                    if (currentProfile?.linkedPersona) {
                        service/* default */.ZP.Identity.createNewRelation(identifier, currentProfile.linkedPersona);
                    }
                }
            } catch  {}
            return {
                identifier,
                avatar: avatar ?? undefined,
                nickname: nickname ?? undefined
            };
        }
        return unknown;
    } catch (error) {
        console.error(error);
    }
    return unknown;
}
function getUserID(x) {
    if (!x) return null;
    const relative = !x.startsWith('https://') && !x.startsWith('http://');
    const url = relative ? new URL(x, location.host) : new URL(x);
    if (url.hostname !== 'www.facebook.com' && url.hostname !== 'm.facebook.com') return null;
    // Get the userId from the meta element
    if (url.hostname === 'm.facebook.com') {
        const node = searchUserIdOnMobileSelector().evaluate();
        if (!node) return null;
        const href = node.getAttribute('href');
        if (!href) return null;
        const match = href.match(/lst=(\w+)/);
        if (!match) return null;
        return match[1];
    }
    if (url.pathname.endsWith('.php')) {
        if (!url.search) return null;
        const search = new URLSearchParams(url.search);
        return search.get('id');
    }
    const val = url.pathname.replace(/^\//, '').replace(/\/$/, '').split('/')[0];
    if (val === 'me') return null;
    return val;
}

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(97250);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/user.ts




function getNickName(userId) {
    const node = isMobile/* isMobileFacebook */.q ? searchNickNameSelectorOnMobile().evaluate() : searchNickNameSelector(userId).evaluate();
    if (!node) return '';
    return (0,collectNodeText/* collectNodeText */.a)(node);
}
function getAvatar() {
    const node = isMobile/* isMobileFacebook */.q ? searchFacebookAvatarOnMobileSelector().evaluate() : searchAvatarSelector().evaluate();
    if (!node) return;
    const imageURL = (isMobile/* isMobileFacebook */.q ? node.style.background.match(/\(["']?(.*?)["']?\)/)?.[1] : node.getAttribute('xlink:href')) ?? '';
    return imageURL.trim();
}
const bioDescription = new ValueRef/* ValueRef */.Xf('');
function getBioDescription() {
    const intro = searchIntroSectionSelector().evaluate();
    const node = isMobile/* isMobileFacebook */.q ? bioDescriptionSelectorOnMobile().evaluate() : searchBioSelector().evaluate();
    if (intro && node) {
        const text = (0,collectNodeText/* collectNodeText */.a)(node);
        bioDescription.value = text;
    } else if (intro) {
        bioDescription.value = '';
    }
    return bioDescription.value;
}
function getFacebookId() {
    const node = isMobile/* isMobileFacebook */.q ? searchUserIdSelectorOnMobile().evaluate() : searchUserIdSelector().evaluate();
    if (!node?.href) return '';
    if (!URL.canParse(node.href, location.href)) return '';
    const url = new URL(node.href, location.href);
    if (url.pathname === '/profile.php') return url.searchParams.get(isMobile/* isMobileFacebook */.q ? 'lst' : 'id');
    return url.pathname.replaceAll('/', '');
}
const FACEBOOK_AVATAR_ID_MATCH = /(\w+).(?:png|jpg|gif|bmp)/;
function getAvatarId(avatarURL) {
    if (!avatarURL) return '';
    const _url = new URL(avatarURL);
    const match = _url.pathname.match(FACEBOOK_AVATAR_ID_MATCH);
    if (!match) return '';
    return match[1];
}
const homepageCache = new ValueRef/* ValueRef */.Xf('');
function getPersonalHomepage() {
    const intro = searchIntroSectionSelector().evaluate();
    const node = searchHomepageSelector().evaluate();
    if (intro && node) {
        let text = (0,collectNodeText/* collectNodeText */.a)(node);
        if (text && !text.startsWith('http')) {
            text = 'http://' + text;
        }
        homepageCache.value = text;
    } else if (intro) {
        homepageCache.value = '';
    }
    return homepageCache.value;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/collecting/identity.ts








const IdentityProviderFacebook = {
    hasDeprecatedPlaceholderName: true,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (signal) {
        resolveLastRecognizedIdentityFacebookInner(this.recognized, signal);
    }
};
function resolveLastRecognizedIdentityFacebookInner(ref, signal) {
    const self = (isMobile/* isMobileFacebook */.q ? myUsernameLiveSelectorMobile : myUsernameLiveSelectorPC).clone().map((x)=>getProfileIdentifierAtFacebook(x, false));
    new MutationObserverWatcher/* MutationObserverWatcher */.U(self).addListener('onAdd', (e)=>assign(e.value)).addListener('onChange', (e)=>assign(e.newValue)).startWatch({
        childList: true,
        subtree: true,
        characterData: true
    }, signal);
    function assign(i) {
        if (i.identifier) ref.value = i;
    }
    fetch(new URL('/me', location.href), {
        method: 'HEAD',
        signal
    }).then((x)=>x.url).then(getUserID).then((id)=>{
        const nickname = getNickName(id);
        const avatar = getAvatar();
        assign({
            ...ref.value,
            nickname,
            avatar,
            isOwner: true,
            identifier: profile/* ProfileIdentifier */.W.of(types/* EnhanceableSite */.J.Facebook, id).unwrapOr(undefined)
        });
    });
}
function resolveCurrentVisitingIdentityInner(ref, ownerRef, cancel) {
    const selector = isMobile/* isMobileFacebook */.q ? searchUserIdOnMobileSelector() : searchFacebookAvatarSelector();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(3000);
        const nickname = getNickName();
        const bio = getBioDescription();
        const handle = getFacebookId();
        const ownerHandle = ownerRef.value.identifier?.userId;
        const isOwner = !!(handle && ownerHandle && handle.toLowerCase() === ownerHandle.toLowerCase());
        const homepage = getPersonalHomepage();
        const avatar = getAvatar();
        ref.value = {
            identifier: profile/* ProfileIdentifier */.W.of(types/* EnhanceableSite */.J.Facebook, handle).unwrapOr(undefined),
            nickname,
            avatar,
            bio,
            homepage,
            isOwner
        };
    };
    const createWatcher = (selector)=>{
        new MutationObserverWatcher/* MutationObserverWatcher */.U(selector).addListener('onAdd', ()=>assign()).addListener('onChange', ()=>assign()).startWatch({
            childList: true,
            subtree: true,
            attributes: true
        }, cancel);
        window.addEventListener('locationchange', assign, {
            signal: cancel
        });
    };
    assign();
    createWatcher(selector);
}
const CurrentVisitingIdentityProviderFacebook = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, IdentityProviderFacebook.recognized, cancel);
    }
};
// Try to resolve my identities
const myUsernameLiveSelectorPC = new LiveSelector/* LiveSelector */.j().querySelectorAll('[data-pagelet="LeftRail"] > [data-visualcompletion="ignore-dynamic"]:first-child > div:first-child > ul [role="link"]').filter((x)=>x.innerText);
const myUsernameLiveSelectorMobile = new LiveSelector/* LiveSelector */.j().querySelector('#bookmarks_flyout .mSideMenu > div > ul > li:first-child a, #MComposer a');

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(10791);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./packages/mask/content-script/components/CompositionDialog/Composition.tsx + 18 modules
var Composition = __webpack_require__(56463);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(26251);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/Composition.tsx











let composeBox;
const useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        tooltip: {
            borderRadius: 8,
            padding: 8,
            marginBottom: '0 !important',
            fontSize: 12,
            background: 'rgba(0,0,0,.75)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.5)',
            color: '#ddd'
        }
    }));
function isGroup() {
    const matched = location.href.match(/\/groups/);
    if (!matched) return false;
    return matched[0];
}
if (isMobile/* isMobileFacebook */.q) {
    composeBox = new LiveSelector/* LiveSelector */.j().querySelector('#structured_composer_form');
} else {
    if (isGroup()) {
        composeBox = new LiveSelector/* LiveSelector */.j().querySelector('[id="toolbarLabel"]').closest(1).querySelector('div:nth-child(2) > div:nth-child(4)');
    } else {
        composeBox = new LiveSelector/* LiveSelector */.j().querySelectorAll('[role="dialog"] form > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div:last-child > div:first-child  > div:last-child > div > div').at(-2);
    }
}
function injectCompositionFacebook(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(composeBox.clone());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {}));
    signal.addEventListener('abort', CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.on((data)=>{
        if (data.reason === 'popup') return;
        if (data.open === false) {
            if (data.options?.isOpenFromApplicationBoard) taskCloseNativeComposeBoxFacebook();
            return;
        }
        taskOpenComposeBoxFacebook(data.content || '', data.options);
    }));
}
function UI() {
    const { classes } = useStyles();
    const onHintButtonClicked = (0,react.useCallback)(()=>CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
            reason: 'popup',
            open: true
        }), []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        style: {
            display: 'block',
            padding: 0,
            marginTop: 0
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
                size: 24,
                classes: {
                    tooltip: classes.tooltip
                },
                onHintButtonClicked: onHintButtonClicked,
                tooltip: {
                    disabled: false,
                    placement: 'top'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
                type: "popup"
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/Welcomes/Banner.tsx
var Banner = __webpack_require__(31559);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/Banner.tsx






let Banner_composeBox;
if (isMobile/* isMobileFacebook */.q) {
    Banner_composeBox = new LiveSelector/* LiveSelector */.j().querySelector('#structured_composer_form');
} else {
    Banner_composeBox = new LiveSelector/* LiveSelector */.j().querySelector('[role="dialog"] form').querySelectorAll('[role="button"][tabindex="0"], [role="button"][tabindex="-1"]').map((x)=>x.parentElement).at(-1);
}
function injectBannerAtFacebook(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(Banner_composeBox.clone());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        style: {
            display: 'block',
            padding: '0 16px',
            marginTop: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Banner/* Banner */.j, {})
    }));
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/Comments.tsx + 2 modules
var Comments = __webpack_require__(27143);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/selectElementContents.ts
var selectElementContents = __webpack_require__(11485);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/automation/pasteToCommentBoxFacebook.ts





async function pasteToCommentBoxFacebook(encryptedComment, current, dom) {
    const fail = ()=>{
        Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    if (isMobile/* isMobileFacebook */.q) {
        const root = dom || current.comment?.commentBoxSelector?.evaluate()[0];
        if (!root) return fail();
        const textarea = root.querySelector('textarea');
        if (!textarea) return fail();
        textarea.focus();
        (0,sdk/* inputText */.iJ)(encryptedComment);
        textarea.dispatchEvent(new CustomEvent('input', {
            bubbles: true,
            cancelable: false,
            composed: true
        }));
        await (0,esm/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    } else {
        const root = dom || current.rootNode;
        if (!root) return fail();
        const input = root.querySelector('[contenteditable] > *');
        if (!input) return fail();
        (0,selectElementContents/* selectElementContents */.M)(input);
        input.focus();
        (0,sdk/* pasteText */.M1)(encryptedComment);
        await (0,esm/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    }
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/CommentBox.tsx + 1 modules
var CommentBox = __webpack_require__(96320);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostInspector.tsx + 15 modules
var PostInspector = __webpack_require__(10642);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/PostInspector.tsx



const map = new WeakMap();
function getShadowRoot(node) {
    if (map.has(node)) return map.get(node);
    const dom = node.attachShadow(src/* Flags */.v.shadowRootInit);
    map.set(node, dom);
    return dom;
}
function injectPostInspectorFacebook(signal, current) {
    clickSeeMore(current.rootElement.current?.parentElement);
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            zipEncryptedPostContent(node);
            zipPostLinkPreview(node);
        },
        injectionPoint: (post)=>getShadowRoot(post.suggestedInjectionPoint)
    })(current, signal);
}
function zipPostLinkPreview(node) {
    if (node.destroyed) return;
    const parentEle = node.current.parentElement;
    if (!parentEle) return;
    if (isMobile/* isMobileFacebook */.q) {
        const img = parentEle.querySelector('a[href*="maskbook.io"]') ?? parentEle.querySelector('a[href*="mask.io"]') ?? parentEle.querySelector('a[href*="maskbook.com"]');
        const parent = img?.closest('section');
        if (img && parent) {
            parent.style.display = 'none';
        }
    } else {
        const img = parentEle.querySelector('a[href*="maskbook.io"] img') ?? parentEle.querySelector('a[href*="mask.io"] img') ?? parentEle.querySelector('a[href*="maskbook.com"] img');
        const parent = img?.closest('span');
        if (img && parent) {
            parent.style.display = 'none';
        }
    }
}
function zipEncryptedPostContent(node) {
    if (node.destroyed) return;
    const parent = node.current.parentElement;
    // It's image based encryption, skip zip post.
    if (!node.current.innerText.includes('\uD83C\uDFBC')) return;
    // Style modification for repost
    if (!node.current.className.includes('userContent') && node.current.innerText.length > 0) {
        node.after.setAttribute('style', `border: 1px solid #ebedf0;
display: block;
border-top: none;
border-bottom: none;
margin-bottom: 0;
padding: 0 10px;`);
    }
    if (parent) {
        // post content
        const p = parent.querySelector('p');
        if (p) {
            p.style.display = 'block';
            p.style.maxHeight = '20px';
            p.style.overflow = 'hidden';
            p.style.marginBottom = '0';
        }
    }
}
function clickSeeMore(node) {
    if (!node) return;
    const more = node.querySelector(isMobile/* isMobileFacebook */.q ? '[data-sigil="more"] a' : '[role=article] span[dir="auto"] div[dir="auto"] [role="button"]');
    if (more && node.querySelector('img[alt="\uD83C\uDFBC"]')) {
        const trap = (e)=>{
            e.preventDefault();
        };
        more.parentNode.addEventListener('click', trap);
        more.click();
        setTimeout(()=>{
            if (more.parentNode) more.parentNode.removeEventListener('click', trap);
        }, 0);
    }
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/collecting/getSearchedKeyword.ts
function getSearchedKeywordAtFacebook() {
    const hashKeyword = location.pathname.match(/^\/hashtag\/([A-za-z0\u20139_]+)$/u)?.[1];
    if (hashKeyword) return '#' + hashKeyword;
    if (/\/search\/top\/?$/.test(location.pathname)) {
        const params = new URLSearchParams(location.search);
        return params.get('q') ?? '';
    }
    return '';
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/SearchResultInspector.tsx + 2 modules
var SearchResultInspector = __webpack_require__(65235);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/SearchResultInspector.tsx






function injectSearchResultInspectorAtFacebook(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchResultHeadingSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultInspector/* SearchResultInspector */.i, {}));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var dist_esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Proxy.js
var Proxy = __webpack_require__(6806);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/tuple.ts
var tuple = __webpack_require__(17425);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/collecting/posts.tsx












const posts = new LiveSelector/* LiveSelector */.j().querySelectorAll(isMobile/* isMobileFacebook */.q ? '.story_body_container > div' : '[role=article]  [id]  span[dir="auto"]');
const PostProviderFacebook = {
    posts: utils/* creator */.D.EmptyPostProviderState(),
    start (signal) {
        collectPostsFacebookInner(this.posts, signal);
    }
};
function collectPostsFacebookInner(store, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(posts).useForeach((node, key, metadata)=>{
        clickSeeMore(node);
    }), signal);
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(posts).useForeach((node, key, metadata)=>{
        const root = new LiveSelector/* LiveSelector */.j().replace(()=>[
                metadata.realCurrent
            ]).closest('[role=article] [id] span[dir="auto"]');
        const rootProxy = (0,Proxy/* DOMProxy */.E)({
            afterShadowRootInit: src/* Flags */.v.shadowRootInit,
            beforeShadowRootInit: src/* Flags */.v.shadowRootInit
        });
        rootProxy.realCurrent = root.evaluate()[0];
        // ? inject after comments
        const commentSelectorPC = root.clone().querySelectorAll('[role=article] [id] span[dir="auto"]').closest(3);
        const commentSelectorMobile = root.clone().map((x)=>x.parentElement).querySelectorAll('[data-commentid]');
        const commentsSelector = isMobile/* isMobileFacebook */.q ? commentSelectorMobile : commentSelectorPC;
        // ? inject comment text field
        const commentBoxSelectorPC = root.clone().querySelectorAll('[role="article"] [role="presentation"]:not(img)').map((x)=>x.parentElement);
        const commentBoxSelectorMobile = root.clone().map((x)=>x.parentElement).querySelectorAll('textarea').map((x)=>x.parentElement).filter((x)=>x.innerHTML.includes('comment'));
        const commentBoxSelector = isMobile/* isMobileFacebook */.q ? commentBoxSelectorMobile : commentBoxSelectorPC;
        const { subscriptions, ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = facebookShared.utils.createPostContext({
            rootElement: rootProxy,
            suggestedInjectionPoint: metadata.realCurrent,
            signal,
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            rootProxy.realCurrent = root.evaluate()[0];
            const nextTypedMessage = [];
            info.postBy.value = getPostBy(metadata, postInfo.hasMaskPayload.getCurrentValue())?.identifier || null;
            info.postID.value = getPostID(metadata, rootProxy.realCurrent);
            // parse text
            const text = (0,collectNodeText/* collectNodeText */.a)(node, {
                onHTMLAnchorElement (node) {
                    const href = node.getAttribute('href');
                    if (!href) {
                        return dist_esm.None;
                    }
                    return (0,dist_esm.Some)('\n' + (href.includes('l.facebook.com') ? new URL(href).searchParams.get('u') : node.innerText));
                }
            });
            nextTypedMessage.push((0,core_text/* makeTypedMessageText */.P)(text));
            // parse image
            const images = getMetadataImages(metadata);
            for (const url of images){
                info.postMetadataImages.add(url);
            }
            info.postMessage.value = (0,tuple/* makeTypedMessageTuple */.Zw)(nextTypedMessage);
        }
        function collectLinks() {
            if (metadata.destroyed) return;
            const linkElements = metadata.current.querySelectorAll('[role=article] [id] a');
            const links = [
                ...Array.from(linkElements).filter((x)=>x.href)
            ];
            const seen = new Set();
            for (const x of links){
                if (seen.has(x.href)) continue;
                seen.add(x.href);
                info.postMetadataMentionedLinks.set(x, x.href);
            }
        }
        function run() {
            collectPostInfo();
            collectLinks();
        }
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getPostBy(node, allowCollectInfo) {
    if (node.destroyed) return;
    const dom = isMobile/* isMobileFacebook */.q ? node.current.querySelectorAll('a') : [
        (node.current.closest('[role="article"]') ?? node.current.parentElement).querySelectorAll('a')[1]
    ];
    // side effect: save to service
    return getProfileIdentifierAtFacebook(Array.from(dom), allowCollectInfo);
}
function getPostID(node, root) {
    if (node.destroyed) return null;
    if (isMobile/* isMobileFacebook */.q) {
        const abbr = node.current.querySelector('abbr');
        if (!abbr) return null;
        const idElement = abbr.closest('a');
        if (!idElement) return null;
        const id = new URL(idElement.href);
        return id.searchParams.get('id') || '';
    } else {
        // In single url
        if (location.href.match(/plugins.+(perma.+story_fbid%3D|posts%2F)?/)) {
            const url = new URL(location.href);
            return url.searchParams.get('id');
        } else {
            try {
                // In timeline
                const postTimeNode1 = root.closest('[role=article]')?.querySelector('[href*="permalink"]');
                const postIdMode1 = postTimeNode1 ? postTimeNode1.getAttribute('href')?.match(/story_fbid=(\d+)/g)?.[0].split('=')[1] ?? null : null;
                if (postIdMode1) return postIdMode1;
                const postTimeNode2 = root.closest('[role=article]')?.querySelector('[href*="posts"]');
                const postIdMode2 = postTimeNode2 ? postTimeNode2.getAttribute('href')?.match(/posts\/(\w+)/g)?.[0].split('/')[1] ?? null : null;
                if (postIdMode2 && /^-?\w+$/.test(postIdMode2)) return postIdMode2;
            } catch  {
                return null;
            }
            const parent = node.current.parentElement;
            if (!parent) return null;
            const idNode = Array.from(parent.querySelectorAll('[id]')).map((x)=>x.id.split(';')).filter((x)=>x.length > 1);
            if (!idNode.length) return null;
            return idNode[0][2];
        }
    }
}
function getMetadataImages(node) {
    if (node.destroyed) return [];
    const parent = node.current.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    if (!parent) return [];
    const imgNodes = isMobile/* isMobileFacebook */.q ? parent.querySelectorAll('div>div>div>a>div>div>i.img') : parent.querySelectorAll('img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = isMobile/* isMobileFacebook */.q ? (getComputedStyle(imgNodes[0]).backgroundImage || '').slice(4, -1).replaceAll(/["']/g, '').split(',').filter(Boolean) : Array.from(imgNodes, (node)=>node.src).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/collecting/theme.ts


function resolveThemeSettingsInner(ref, cancel) {
    function updateThemeColor(isDarkMode) {
        ref.value = {
            ...ref.value,
            mode: isDarkMode ? specs/* ThemeMode */.hY.Dark : specs/* ThemeMode */.hY.Light
        };
    }
    updateThemeColor(document.documentElement.className.includes('dark-mode'));
    const observer = new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
            updateThemeColor(!mutation.oldValue?.includes('dark-mode'));
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
const ThemeSettingsProviderFacebook = {
    recognized: utils/* creator */.D.EmptyThemeSettingsProviderState(),
    async start (cancel) {
        resolveThemeSettingsInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/automation/AttachImageToComposition.ts + 1 modules
var AttachImageToComposition = __webpack_require__(65108);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PageInspector.tsx + 6 modules
var PageInspector = __webpack_require__(87486);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/StartSetupGuide.tsx + 18 modules
var StartSetupGuide = __webpack_require__(14712);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/theme/color-tools.ts
var color_tools = __webpack_require__(13326);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/customization/custom.ts





function useThemeFacebookVariant(baseTheme) {
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,color_tools/* fromRGB */.f2)(themeSettings.color);
        const primaryContrastColorRGB = (0,color_tools/* fromRGB */.f2)('rgb(255, 255, 255)');
        (0,immer/* setAutoFreeze */.Fl)(false);
        const FacebookTheme = (0,immer/* produce */.Uy)(baseTheme, (theme)=>{
            theme.palette.primary = {
                light: (0,color_tools/* toRGB */.xr)((0,color_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,color_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,color_tools/* toRGB */.xr)((0,color_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,color_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = 15;
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
                        // cspell:ignore SFNS
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif"
                    }
                }
            };
            theme.components.MuiPaper = {
                defaultProps: {
                    elevation: 0
                }
            };
            theme.components.MuiTab = {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            };
        });
        (0,immer/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(FacebookTheme);
    }, [
        baseTheme,
        themeSettings
    ]);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ToolboxUnstyled.tsx + 5 modules
var ToolboxUnstyled = __webpack_require__(8388);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/ToolbarUI.tsx




const Container = (0,styled/* default */.ZP)('div')`
    padding: 0 4px;
`;
const ContainerHasNavBar = (0,styled/* default */.ZP)('div')`
    padding: 0 8px;
`;
const Item = (0,styled/* default */.ZP)((0,ListItemButton/* default */.Z))`
    border-radius: 8px;
    padding-left: 10px;
`;
const Text = (0,styled/* default */.ZP)((0,Typography/* default */.Z))`
    font-size: 0.9375rem;
    /* This CSS variable is inherit from Facebook. */
    color: var(--primary-text);
    font-weight: 500;
    padding-left: 0.1rem;
`;
const Icon = (0,styled/* default */.ZP)((0,ListItemIcon/* default */.Z), {
    shouldForwardProp (name) {
        return name !== 'hasTopNavBar' && name !== 'hasSpecificLeftRailStartBar';
    }
})`
    min-width: ${(props)=>!props.hasSpecificLeftRailStartBar ? '24px' : props.hasTopNavBar ? '46px' : 'auto'};
    margin-right: ${(props)=>props.hasTopNavBar && props.hasSpecificLeftRailStartBar ? '0px' : '12px'};
    padding-left: 4px;
`;
function ToolboxAtFacebook(props) {
    const ListItemIcon = (0,react.useMemo)(()=>{
        return ({ children })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                "data-testid": "abc",
                hasTopNavBar: props.hasTopNavBar,
                hasSpecificLeftRailStartBar: props.hasSpecificLeftRailStartBar,
                children: children
            });
    }, [
        props.hasTopNavBar,
        props.hasSpecificLeftRailStartBar
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        iconSize: 32,
        Container: props.hasTopNavBar ? ContainerHasNavBar : Container,
        ListItemButton: Item,
        Typography: Text,
        ListItemIcon: ListItemIcon,
        category: props.category
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/Toolbar.tsx






function hasSpecificLeftRailStartBar() {
    const ele = document.querySelector('[role="banner"] [role="navigation"] > ul > li:last-child a[href="/bookmarks/"]')?.closest('li');
    if (!ele) return true;
    const style = window.getComputedStyle(ele);
    return style.display === 'none';
}
function isNormalLeftRailStartBar() {
    return !!document.querySelector('[data-pagelet="LeftRail"]');
}
function injectToolboxHintAtFacebook(signal, category) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(isNormalLeftRailStartBar() ? toolboxInSidebarSelector() : toolboxInSpecialSidebarSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    const hasTopNavBar = !!document.querySelector('#ssrb_top_nav_start ~ [role="banner"]');
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxAtFacebook, {
        category: category,
        hasTopNavBar: hasTopNavBar,
        hasSpecificLeftRailStartBar: hasSpecificLeftRailStartBar()
    }));
    const watcherNoLeftRailStart = new MutationObserverWatcher/* MutationObserverWatcher */.U(toolboxInSidebarSelectorWithNoLeftRailStart());
    (0,startWatch/* startWatch */.f)(watcherNoLeftRailStart, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcherNoLeftRailStart.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxAtFacebook, {
        category: category,
        hasTopNavBar: hasTopNavBar,
        hasSpecificLeftRailStartBar: hasSpecificLeftRailStartBar()
    }));
}

// EXTERNAL MODULE: ./packages/plugins/Avatar/src/utils/index.ts + 1 modules
var src_utils = __webpack_require__(58833);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatar.tsx + 1 modules
var NFTAvatar = __webpack_require__(5724);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/NFT/ProfileNFTAvatar.tsx














async function injectProfileNFTAvatarInFaceBook(signal) {
    if (!isMobile/* isMobileFacebook */.q) {
        // The first step in setting an avatar
        const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookAvatarListSelector());
        (0,startWatch/* startWatch */.f)(watcher, signal);
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
            untilVisible: true,
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebookFirstStep, {}));
        // The second step in setting an avatar
        const saveButtonWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookSaveAvatarButtonSelector()).useForeach((node, key, proxy)=>{
            const root = (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(proxy.afterShadow, {
                untilVisible: true,
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebookSecondStep, {}));
            return ()=>root.destroy();
        });
        (0,startWatch/* startWatch */.f)(saveButtonWatcher, signal);
    }
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookAvatarMobileListSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarListInFaceBookMobile, {}));
}
const ProfileNFTAvatar_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        padding: '8px 0',
        margin: '0 16px'
    }
});
async function changeImageToActiveElements(image) {
    const imageBuffer = await image.arrayBuffer();
    (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer));
    searchFacebookAvatarOpenFilesSelector().evaluate()?.click();
}
function NFTAvatarInFacebookFirstStep() {
    const { classes } = ProfileNFTAvatar_useStyles();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const onChange = (0,react.useCallback)(async (info)=>{
        if (!info.token.metadata?.imageURL || !info.token.contract?.address) return;
        const image = await (0,src_utils/* toPNG */.mr)(info.token.metadata.imageURL);
        if (!image) return;
        if (!identity.identifier) return;
        await changeImageToActiveElements(image);
        Messages/* MaskMessages */.q.events.NFTAvatarUpdated.sendToLocal({
            userId: identity.identifier.userId,
            avatarId: '',
            address: info.token.contract.address,
            tokenId: info.token.tokenId,
            pluginID: info.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            chainId: info.token.chainId ?? src_types/* ChainId */.a_.Mainnet,
            schema: info.token.schema ?? src_types/* SchemaType */.XQ.ERC721
        });
    }, [
        identity
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
        onChange: onChange,
        classes: classes
    });
}
function NFTAvatarInFacebookSecondStep() {
    (0,react.useEffect)(()=>{
        const save = searchFacebookSaveAvatarButtonSelector().evaluate().at(0);
        if (!save) return;
        const handler = ()=>{
            const image = searchFacebookConfirmAvatarImageSelector().evaluate();
            if (!image) return;
            const imageURL = image.getAttribute('src');
            if (!imageURL) return;
            const avatarId = getAvatarId(imageURL);
            if (avatarId) {
                Messages/* MaskMessages */.q.events.NFTAvatarUpdated.sendToLocal({
                    userId: '',
                    address: '',
                    tokenId: '',
                    avatarId
                });
            }
        };
        save.addEventListener('click', handler);
        return ()=>save.removeEventListener('click', handler);
    }, []);
    return null;
}
async function changeImageToActiveElementsOnMobile(image) {
    const imageBuffer = await image.arrayBuffer();
    const input = searchFacebookAvatarOpenFilesOnMobileSelector().evaluate();
    if (input) {
        input.style.visibility = 'unset';
        input.focus();
        (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer), true);
        input.style.visibility = 'hidden';
        const file = new File([
            image
        ], 'avatar.png', {
            type: 'image/png',
            lastModified: Date.now()
        });
        const container = new DataTransfer();
        container.items.add(file);
        input.files = container.files;
    }
}
const useMobileStyles = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        backgroundColor: '#ffffff'
    }
});
function NFTAvatarListInFaceBookMobile() {
    const { classes } = useMobileStyles();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const onChange = (0,react.useCallback)(async (info)=>{
        if (!info.token.metadata?.imageURL || !info.token.contract?.address) return;
        const image = await (0,src_utils/* toPNG */.mr)(info.token.metadata.imageURL);
        if (!image) return;
        await changeImageToActiveElementsOnMobile(image);
        identity.identifier && KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.userId.setValue(identity.identifier.userId);
        KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.address.setValue(info.token.contract?.address);
        KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.tokenId.setValue(info.token.tokenId);
        KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.pluginID.setValue(info.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
        KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.chainId.setValue(info.token.chainId ?? src_types/* ChainId */.a_.Mainnet);
        KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.schema.setValue(info.token.schema ?? src_types/* SchemaType */.XQ.ERC721);
    }, [
        identity
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
        onChange: onChange,
        classes: {
            root: classes.root
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
var max = __webpack_require__(50162);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pickBy.js
var pickBy = __webpack_require__(73307);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/storage/useSaveStringStorage.ts
var useSaveStringStorage = __webpack_require__(86673);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useNFTAvatar.ts
var useNFTAvatar = __webpack_require__(43784);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/constants.ts
var constants = __webpack_require__(18636);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useWallet.ts
var useWallet = __webpack_require__(15189);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/hooks/useNFT.ts
var useNFT = __webpack_require__(664);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(69187);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/NFT/NFTAvatarInFacebook.tsx
















function injectNFTAvatarInFacebook(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookAvatarSelector());
    if (!isMobile/* isMobileFacebook */.q) {
        (0,startWatch/* startWatch */.f)(watcher, signal);
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
            untilVisible: true,
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebook, {}));
        return;
    }
    // mobile
    const mobileWatcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookAvatarOnMobileSelector());
    (0,startWatch/* startWatch */.f)(mobileWatcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(mobileWatcher.firstDOMProxy.afterShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebook, {}));
}
const NFTAvatarInFacebook_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
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
const clearStorages = ()=>{
    KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.userId.setValue('');
    KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.address.setValue('');
    KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage.tokenId.setValue('');
};
function NFTAvatarInFacebook() {
    const { classes } = NFTAvatarInFacebook_useStyles();
    const [avatar, setAvatar] = (0,react.useState)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const location = (0,useLocation/* default */.Z)();
    const { value: nftAvatar } = (0,useNFTAvatar/* useNFTAvatar */.i)(identity.identifier?.userId, constants/* RSS3_KEY_SITE */.q1.FACEBOOK);
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { loading: loadingWallet, value: storage } = (0,useWallet/* useWallet */.O)(nftAvatar?.userId);
    const { value: nftInfo, loading: loadingNFTInfo } = (0,useNFT/* useNFT */.e)(storage?.address ?? account, nftAvatar?.address, nftAvatar?.tokenId, nftAvatar?.pluginId ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM, nftAvatar?.chainId);
    const [NFTEvent, setNFTEvent] = (0,react.useState)();
    const saveNFTAvatar = (0,useSaveStringStorage/* useSaveStringStorage */.Z)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const windowSize = (0,useWindowSize/* default */.Z)();
    const showAvatar = (0,react.useMemo)(()=>{
        if (isMobile/* isMobileFacebook */.q) {
            const node = searchFacebookAvatarOnMobileSelector().closest(1).evaluate();
            if (node) {
                node.style.position = 'relative';
            }
        }
        return getAvatarId(identity.avatar ?? '') === avatar?.avatarId;
    }, [
        avatar?.avatarId,
        identity.avatar,
        isMobile/* isMobileFacebook */.q
    ]);
    const size = (0,react.useMemo)(()=>{
        const ele = isMobile/* isMobileFacebook */.q ? searchFacebookAvatarOnMobileSelector().evaluate() : searchFacebookAvatarSelector().evaluate();
        if (ele) {
            const style = window.getComputedStyle(ele);
            return (0,max/* default */.Z)([
                148,
                Number.parseInt(style.width.replace('px', '') ?? 0, 10)
            ]);
        }
        return 0;
    }, [
        windowSize,
        isMobile/* isMobileFacebook */.q,
        avatar
    ]);
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.NFTAvatarUpdated.on((data)=>setNFTEvent((prev)=>{
                if (!prev) return data;
                return {
                    ...prev,
                    ...(0,pickBy/* default */.Z)(data, (item)=>!!item)
                };
            }));
    }, []);
    // Because of the mobile upload step, need to use memory storage to store NFTEven
    (0,useAsync/* default */.Z)(async ()=>{
        const storages = KVStorage/* InMemoryStorages */.uU.FacebookNFTEventOnMobile.storage;
        if (!account) return;
        if (!identity.identifier) return;
        if (NFTEvent?.address && NFTEvent?.tokenId && NFTEvent?.avatarId) {
            try {
                const avatarInfo = await saveNFTAvatar(identity.identifier.userId, account, {
                    ...NFTEvent,
                    avatarId: getAvatarId(identity.avatar ?? '')
                });
                if (!avatarInfo) {
                    setNFTEvent(undefined);
                    setAvatar(undefined);
                    // eslint-disable-next-line no-alert
                    window.alert('Sorry, failed to save NFT Avatar. Please set again.');
                    return;
                }
                setAvatar(avatarInfo);
                setNFTEvent(undefined);
            } catch (error) {
                setNFTEvent(undefined);
                setAvatar(undefined);
                // eslint-disable-next-line no-alert
                alert(error.message);
                return;
            }
        } else if (storages.address.value && storages.userId.value && storages.tokenId.value) {
            try {
                const avatarInfo = await saveNFTAvatar(storages.userId.value, account, {
                    userId: storages.userId.value,
                    tokenId: storages.tokenId.value,
                    address: storages.address.value,
                    avatarId: getAvatarId(identity.avatar ?? ''),
                    chainId: storages.chainId.value,
                    pluginID: storages.pluginID.value,
                    schema: storages.schema.value
                });
                if (!avatarInfo) {
                    clearStorages();
                    setAvatar(undefined);
                    // eslint-disable-next-line no-alert
                    alert('Sorry, failed to save NFT Avatar. Please set again.');
                    return;
                }
                setAvatar(avatarInfo);
                clearStorages();
            } catch (error) {
                clearStorages();
                setAvatar(undefined);
                // eslint-disable-next-line no-alert
                alert(error.message);
                return;
            }
        }
    }, [
        identity.avatar
    ]);
    (0,react.useEffect)(()=>setAvatar(nftAvatar), [
        nftAvatar,
        location
    ]);
    // #region clear white border
    (0,react.useLayoutEffect)(()=>{
        const node = searchFacebookAvatarSelector().closest(3).evaluate();
        if (!node) return;
        if (showAvatar) {
            node.setAttribute('style', 'padding: 0');
        } else {
            node.removeAttribute('style');
        }
    });
    // #endregion
    if (!avatar || !size || !showAvatar || loadingWallet || loadingNFTInfo) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
        nftInfo: nftInfo,
        size: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(43738);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/utils/avatar.ts


function getInjectNodeInfo(element) {
    if (!isMobile/* isMobileFacebook */.q) {
        const imgEle = element.querySelector('image');
        if (!imgEle) return;
        const nftDom = imgEle.parentNode?.parentNode;
        const width = Number(window.getComputedStyle(nftDom).width.replace('px', '') ?? 0);
        const height = Number(window.getComputedStyle(nftDom).height.replace('px', '') ?? 0);
        const avatarId = getAvatarId(imgEle.href.baseVal);
        if (!avatarId) return;
        return {
            element: nftDom,
            width,
            height,
            avatarId
        };
    }
    const imgEle = element.querySelector('i');
    if (!imgEle) return;
    const nftDom = imgEle.parentNode?.parentNode;
    const containerDom = imgEle.parentNode;
    const width = Number(window.getComputedStyle(nftDom).width.replace('px', '') ?? 0);
    const height = Number(window.getComputedStyle(nftDom).height.replace('px', '') ?? 0);
    const avatarId = getAvatarId(imgEle.style.background.match(/\(["']?(.*?)["']?\)/)?.[1] ?? '');
    if (!avatarId) return;
    return {
        element: containerDom,
        width,
        height,
        avatarId
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/NFT/NFTAvatarInTimeline.tsx












const NFTAvatarInTimeline_useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        root: {
            transform: 'scale(1)!important'
        }
    }));
const TimelineRainbow = /*#__PURE__*/ (0,react.memo)(({ userId, avatarId, width, height })=>{
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
            siteKey: constants/* RSS3_KEY_SITE */.q1.FACEBOOK
        })
    });
});
function NFTAvatarInTimeline_getFacebookId(element) {
    const node = isMobile/* isMobileFacebook */.q ? element.firstChild : element.parentNode?.parentNode;
    if (!node) return '';
    const url = new URL(node.href, location.href);
    if (url.pathname === '/profile.php' && url.searchParams.get('id')) {
        return url.searchParams.get(isMobile/* isMobileFacebook */.q ? 'lst' : 'id');
    }
    if (url.pathname.includes('/groups')) {
        const match = url.pathname.match(/\/user\/(\w+)\//);
        if (!match) return '';
        return match[1];
    }
    return url.pathname.replace('/', '');
}
function _(selector, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(selector()).useForeach((element, key)=>{
        let remove = noop/* default */.Z;
        const run = async ()=>{
            const facebookId = NFTAvatarInTimeline_getFacebookId(element);
            if (!facebookId) return;
            const info = getInjectNodeInfo(element);
            if (!info) return;
            const proxy = (0,Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = info.element;
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TimelineRainbow, {
                    userId: facebookId,
                    avatarId: info.avatarId,
                    width: info.width - 4,
                    height: info.height - 4
                })
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
async function injectUserNFTAvatarAtFacebook(signal) {
    _(isMobile/* isMobileFacebook */.q ? searchFaceBookPostAvatarOnMobileSelector : searchFaceBookPostAvatarSelector, signal);
}

// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(72552);
// EXTERNAL MODULE: ./packages/plugins/Avatar/src/SiteAdaptor/NFTAvatarButton.tsx
var NFTAvatarButton = __webpack_require__(13590);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/NFT/NFTAvatarEditProfile.tsx









function injectOpenNFTAvatarEditProfileButton(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookProfileSettingButtonSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        untilVisible: true,
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInFaceBook, {}));
}
const NFTAvatarEditProfile_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        root: {
            minHeight: props.minHeight,
            fontSize: props.fontSize,
            marginTop: props.marginTop,
            backgroundColor: theme.palette.maskColor.main,
            marginRight: theme.spacing(0.5),
            marginLeft: theme.spacing(1.25),
            borderRadius: '6px !important',
            border: 'none !important',
            color: props.color
        }
    }));
function openNFTAvatarSettingDialog() {
    const editDom = searchFacebookEditProfileSelector().evaluate();
    editDom?.click();
}
function OpenNFTAvatarEditProfileButtonInFaceBook() {
    const [style, setStyle] = (0,react.useState)({
        minHeight: 36,
        fontSize: 15,
        marginTop: 6
    });
    const setStyleWithSelector = ()=>{
        const editDom = searchFacebookProfileSettingButtonSelector().evaluate();
        if (!editDom) return;
        const buttonDom = editDom.querySelector('div > div[role="button"]');
        if (!buttonDom) return;
        const editCss = window.getComputedStyle(editDom);
        const buttonCss = window.getComputedStyle(buttonDom);
        setStyle({
            fontSize: Number(editCss.fontSize.replace('px', '')),
            marginTop: Number(editCss.paddingTop.replace('px', '')),
            minHeight: 36,
            backgroundColor: buttonCss.backgroundColor,
            color: buttonCss.color
        });
    };
    (0,react.useLayoutEffect)(()=>{
        setStyleWithSelector();
    }, []);
    (0,useLocationChange/* useLocationChange */.S)(()=>{
        setStyleWithSelector();
    });
    const { classes } = NFTAvatarEditProfile_useStyles(style);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
        classes: {
            root: classes.root
        },
        onClick: openNFTAvatarSettingDialog,
        showSetting: false
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/debounce.js
var debounce = __webpack_require__(50257);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(86584);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/ProfileTab.tsx









function getStyleProps() {
    const EMPTY_STYLE = {};
    const divEle = profileTabUnselectedSelector().evaluate()?.querySelector('div');
    const spanEle = profileTabUnselectedSelector().evaluate()?.querySelector('div span');
    const selectedSpanEle = profileTabSelectedSelector().evaluate()?.querySelector('div span');
    const divStyle = divEle ? window.getComputedStyle(divEle) : EMPTY_STYLE;
    const spanStyle = spanEle ? window.getComputedStyle(spanEle) : EMPTY_STYLE;
    const selectedSpanStyle = selectedSpanEle ? window.getComputedStyle(selectedSpanEle) : EMPTY_STYLE;
    return {
        color: 'var(--secondary-text)',
        font: spanStyle.font,
        fontSize: spanStyle.fontSize,
        padding: divStyle.paddingLeft,
        height: divStyle.height ?? '60px',
        hover: 'var(--hover-overlay)',
        line: selectedSpanStyle.color
    };
}
const ProfileTab_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const props = getStyleProps();
    return {
        root: {
            '&:hover': {
                cursor: 'pointer'
            },
            height: props.height,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '4px 0',
            boxSizing: 'border-box'
        },
        button: {
            flex: 1,
            zIndex: 1,
            position: 'relative',
            display: 'flex',
            minWidth: 56,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: theme.spacing(0, props.padding || 0),
            color: props.color,
            font: props.font,
            fontSize: props.fontSize,
            fontWeight: 600,
            '&:hover': {
                backgroundColor: props.hover,
                color: props.color
            },
            borderRadius: 6
        },
        selected: {
            color: 'var(--accent)'
        },
        line: {
            borderRadius: 9999,
            position: 'absolute',
            bottom: -4,
            width: '100%',
            alignSelf: 'center',
            height: 3,
            backgroundColor: 'var(--accent)'
        }
    };
});
function styleTab(textColor, borderColor) {
    const ele = profileTabSelectedSelector().evaluate();
    if (!ele) return;
    const textEle = ele.querySelector('span');
    const borderEle = ele.querySelector('span ~ div:last-child');
    if (!textEle || !borderEle) return;
    textEle.style.color = textColor;
    borderEle.style.backgroundColor = borderColor;
    const iconEle = ele.querySelector('svg');
    if (!iconEle) return;
    iconEle.style.fill = textColor;
}
function ProfileTabAtFacebook() {
    const { classes } = ProfileTab_useStyles();
    const [action, setAction] = (0,react.useState)('reset');
    function clear() {
        setAction('clear');
        styleTab(getStyleProps().color, 'transparent');
    }
    function reset() {
        setAction('reset');
        styleTab('', getStyleProps().line);
    }
    // handle cleared tab will be reactivated after scroll
    (0,react.useEffect)(()=>{
        const handler = (0,debounce/* default */.Z)(()=>{
            if (action === 'clear') {
                clear();
            }
        }, 1000);
        window.addEventListener('scroll', handler);
        return ()=>{
            window.removeEventListener('scroll', handler);
        };
    }, [
        action
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "Web3",
        classes: {
            root: classes.root,
            button: classes.button,
            selected: classes.selected
        },
        reset: reset,
        clear: clear,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    });
}
function injectProfileTabAtFacebook(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabAtFacebook, {}));
    const assign = ()=>{
        const web3Tab = web3TabSelector().evaluate();
        if (web3Tab) web3Tab.style.float = 'left';
    };
    new MutationObserverWatcher/* MutationObserverWatcher */.U(web3TabSelector()).addListener('onChange', assign).addListener('onAdd', assign).startWatch({
        childList: true,
        subtree: true,
        attributes: true
    }, signal);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(18747);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/PostReplacer.tsx

function resolveContentNode(node) {
    return node.querySelector('[role=article] div[dir="auto"] > [id] > div > div > span');
}
function injectPostReplacerAtFacebook(signal, current) {
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            if (node.destroyed) return;
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (node.destroyed || !node.current) return;
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileTabContent.tsx + 1 modules
var ProfileTabContent = __webpack_require__(87412);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/ProfileContent.tsx







function injectProfileTabContentState(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchProfileTabPageSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtFacebook, {}));
}
function injectProfileTabContentAtFacebook(signal) {
    injectProfileTabContentState(signal);
}
function ProfileContent_getStyleProps() {
    const EMPTY_STYLE = {};
    const profileSection = profileSectionSelector().evaluate();
    const style = profileSection ? window.getComputedStyle(profileSection) : EMPTY_STYLE;
    return {
        borderRadius: style.borderRadius,
        backgroundColor: style.backgroundColor,
        fontFamily: style.fontFamily,
        boxShadow: style.boxShadow
    };
}
const ProfileContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const props = ProfileContent_getStyleProps();
    return {
        root: {
            position: 'relative',
            marginBottom: 16,
            paddingBottom: 16,
            background: props.backgroundColor,
            borderRadius: props.borderRadius,
            boxShadow: props.boxShadow
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
function ProfileTabContentAtFacebook() {
    const { classes } = ProfileContent_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: {
            root: classes.root,
            text: classes.text,
            button: classes.button
        }
    });
}

// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/RenderFragments.tsx
var RenderFragments = __webpack_require__(55526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(95555);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/customization/render-fragments.tsx





function Hash(props) {
    const text = props.children.slice(1);
    const target = `/hashtag/${encodeURIComponent(text)}`;
    const { hasMatch, ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        ...events,
        href: target,
        children: props.children,
        fontSize: "inherit"
    });
}
const FacebookRenderFragments = {
    // AtLink: not supported
    HashLink: /*#__PURE__*/ (0,react.memo)(Hash),
    // Facebook has no native cashtag support. Treat it has a hash.
    CashLink: /*#__PURE__*/ (0,react.memo)(Hash),
    Image: /*#__PURE__*/ (0,react.memo)((props)=>{
        if (props.src.includes('emoji.php')) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderFragments/* DefaultRenderFragments */.o.Image, {
            ...props
        });
    })
};

// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(51848);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCover.tsx
var ProfileCover = __webpack_require__(4347);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/ProfileCover.tsx






function injectFacebookProfileCover(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchFacebookProfileCoverSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCoverAtFacebook, {}));
}
function ProfileCoverAtFacebook() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCover/* ProfileCover */.D, {});
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var plugin_infra_src_types = __webpack_require__(62476);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/Avatar.tsx
var Avatar = __webpack_require__(39570);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/injection/Avatar/index.tsx









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
                untilVisible: true,
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
                    sourceType: plugin_infra_src_types.Plugin.SiteAdaptor.AvatarRealmSourceType.Post
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

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/facebook.com/ui-provider.ts
/* eslint-disable tss-unused-classes/unused-classes */ 




































const useInjectedDialogClassesOverwriteFacebook = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
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
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [smallQuery]: {
                display: 'block !important',
                borderRadius: '0 !important'
            }
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            padding: '3px 16px',
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#2f3336' : '#eff3f4'}`,
            '& > h2': {
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            [smallQuery]: {
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px 11px !important'
            }
        },
        dialogContent: {
            padding: 16,
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogActions: {
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
const facebookUI = {
    ...base/* facebookBase */.q,
    ...facebookShared,
    automation: {
        redirect: {
            profilePage (profile) {
                // there is no PWA way on Facebook desktop.
                // mobile not tested
                location.assign(getProfilePageUrlAtFacebook(profile));
            },
            newsFeed () {
                const homeLink = document.querySelector([
                    '[data-click="bluebar_logo"] a[href]',
                    '#feed_jewel a[href]'
                ].// mobile
                join(','));
                if (homeLink) homeLink.click();
                else if (location.pathname !== '/') location.assign('/');
            }
        },
        maskCompositionDialog: {
            open: taskOpenComposeBoxFacebook
        },
        nativeCompositionDialog: {
            attachText: pasteTextToCompositionFacebook,
            // TODO: make a better way to detect
            attachImage: (0,AttachImageToComposition/* pasteImageToCompositionDefault */.f)(()=>false)
        },
        nativeCommentBox: {
            attachText: pasteToCommentBoxFacebook
        }
    },
    collecting: {
        identityProvider: IdentityProviderFacebook,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderFacebook,
        postsProvider: PostProviderFacebook,
        themeSettingsProvider: ThemeSettingsProviderFacebook,
        getSearchedKeyword: getSearchedKeywordAtFacebook
    },
    customization: {
        sharedComponentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteFacebook
            }
        },
        componentOverwrite: {
            RenderFragments: FacebookRenderFragments
        },
        useTheme: useThemeFacebookVariant
    },
    init (signal) {
        const profiles = utils/* stateCreator */.Z.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, facebookShared.networkIdentifier);
        (0,transformer/* enableFbStyleTextPayloadReplace */.Hk)();
        return {
            profiles
        };
    },
    injection: {
        newPostComposition: {
            start: injectCompositionFacebook,
            supportedOutputTypes: {
                text: true,
                image: true
            },
            supportedInputTypes: {
                text: true,
                image: true
            }
        },
        userBadge: undefined,
        searchResult: injectSearchResultInspectorAtFacebook,
        banner: injectBannerAtFacebook,
        commentComposition: {
            compositionBox: (0,Comments/* injectPostCommentsDefault */.M)(),
            commentInspector: (0,CommentBox/* injectCommentBoxDefaultFactory */.S)(pasteToCommentBoxFacebook, undefined, undefined, (node)=>{
                setTimeout(()=>{
                    node.after.style.flexBasis = '100%';
                    node.current.parentElement.style.flexWrap = 'wrap';
                });
            })
        },
        userAvatar: injectUserNFTAvatarAtFacebook,
        enhancedProfileNFTAvatar: injectProfileNFTAvatarInFaceBook,
        profileAvatar: injectNFTAvatarInFacebook,
        profileCover: injectFacebookProfileCover,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        openNFTAvatarSettingDialog: openNFTAvatarSettingDialog,
        postReplacer: injectPostReplacerAtFacebook,
        postInspector: injectPostInspectorFacebook,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        toolbox: injectToolboxHintAtFacebook,
        profileTab: injectProfileTabAtFacebook,
        profileTabContent: injectProfileTabContentAtFacebook,
        avatar: injectAvatar
    },
    configuration: {
        steganography: {
            // ! Change this might be a breaking change !
            password () {
                const id = IdentityProviderFacebook.recognized.value.identifier?.userId || ui/* activatedSiteAdaptor_state */.g.profiles.value?.[0].identifier.userId;
                if (!id) throw new Error('Cannot figure out password');
                return profile/* ProfileIdentifier */.W.of(types/* EnhanceableSite */.J.Facebook, id).expect(`${id} should be a valid user id`).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (facebookUI);


/***/ }),

/***/ 14431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50139);

/** @deprecated Prefer useMaskTrans() */ const i18n = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV;


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
//# sourceMappingURL=chunk.1630.js.map