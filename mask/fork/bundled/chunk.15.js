"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[15],{

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

/***/ 60015:
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
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/Comments.tsx + 2 modules
var Comments = __webpack_require__(27143);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PageInspector.tsx + 6 modules
var PageInspector = __webpack_require__(87486);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/StartSetupGuide.tsx + 18 modules
var StartSetupGuide = __webpack_require__(14712);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(10791);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/downloadUrl.ts
var downloadUrl = __webpack_require__(36435);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/LiveSelector.js
var LiveSelector = __webpack_require__(23212);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/utils/selector.ts

function querySelector(selector, singleMode = true) {
    const ls = new LiveSelector/* LiveSelector */.j().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
}
function rootSelector() {
    return querySelector('m-app');
}
function composerModalSelector() {
    return querySelector('m-composer__modal');
}
function postEditorInDialogSelector() {
    return querySelector('m-composer__modal m-composer__titlebar m-composertitlebar__dropdown', true);
}
function postEditorInTimelineSelector() {
    return querySelector('m-composer m-composer__toolbar > div > :nth-child(6)', true);
}
function toolboxInSidebarSelector() {
    return querySelector('.m-sidebarNavigation__list li:nth-child(7)');
}
function postEditorDraftContentSelector() {
    return querySelector('m-composer__modal m-composer__textarea textarea.m-composerTextarea__message');
}
function handleSelector() {
    return querySelector('.m-sidebarNavigation__item--user [data-ref="sidenav-channel"]');
}
function selfInfoSelectors() {
    return {
        handle: handleSelector().evaluate()?.getAttribute('href')?.slice(1).replace(/^@/, ''),
        // Could include `@` by chance.
        avatar: querySelector('.m-sidebarNavigation__item--user > a > div > img').evaluate()?.src
    };
}
function inpageAvatarSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll('.m-activityOwnerBlock__avatar');
}
function composeButtonSelector() {
    return querySelector([
        '.m-sidebarNavigation__item m-sidebarNavigation__item--compose',
        '.m-sidebarNavigation__item--compose a'
    ].// legacy
    join(','), true);
}
function composeTextareaSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector('m-composer__textarea textarea').enableSingleMode();
}
function composeDialogIndicatorSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector('m-composer__modal');
}
function composerModalTextAreaSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector('m-composer__modal m-composer__textArea .m-composer__textArea textarea').enableSingleMode();
}
function composerPreviewSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelector('m-composer__modal m-composer__preview img').enableSingleMode();
}
function searchResultHeadingSelector() {
    return querySelector('m-discovery__search');
}
function postContentSelector() {
    return new LiveSelector/* LiveSelector */.j().querySelectorAll([
        'm-activity m-activity__content .m-activityTop__mainColumn',
        'm-activity m-activity__content .m-activityContentText__body > m-readmore > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__mediaDescriptionText'
    ].join(','));
}
function searchMindsProfileCover() {
    return querySelector('div[data-cy="data-minds-channel-banner"]');
}

// EXTERNAL MODULE: ./packages/mask/content-script/utils/untilElementAvailable.ts
var untilElementAvailable = __webpack_require__(82037);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/selectElementContents.ts
var selectElementContents = __webpack_require__(11485);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/injected-script/sdk/index.ts
var sdk = __webpack_require__(46110);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/utils/postBox.ts

function getEditorContent() {
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    return editorNode.value;
}
function isCompose() {
    return !!composerModalSelector().evaluate();
}
function hasFocus(x) {
    return x.evaluate() === document.activeElement;
}
function hasEditor() {
    return !!postEditorDraftContentSelector().evaluate();
}

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionMinds = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.aborted) throw new Error('Abort to paste text to the composition dialog at minds.');
        };
        if (!isCompose() && !hasEditor()) {
            // open the composer
            await (0,untilElementAvailable/* untilElementAvailable */.f)(composeButtonSelector());
            composeButtonSelector().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = postEditorDraftContentSelector();
        const textarea = i.evaluate();
        await (0,untilElementAvailable/* untilElementAvailable */.f)(i);
        checkSignal();
        while(!hasFocus(i)){
            textarea?.focus();
            checkSignal();
            await (0,esm/* delay */.gw)(interval);
        }
        (0,selectElementContents/* selectElementContents */.M)(textarea);
        // paste
        (0,sdk/* inputText */.iJ)(text);
        // Simulate textarea input
        SimulateTextareaInput(textarea.id);
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
function SimulateTextareaInput(id) {
    document.getElementById(id)?.dispatchEvent(new Event('input', {
        bubbles: true
    }));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/automation/AttachImageToComposition.ts




function hasSucceed() {
    return composerPreviewSelector().evaluate();
}
function pasteImageToCompositionMinds() {
    return async function(url, { recover, relatedTextPayload }) {
        const image = typeof url === 'string' ? await (0,downloadUrl/* downloadUrl */.G)(url) : url;
        const data = [
            new ClipboardItem({
                [image.type]: image
            })
        ];
        pasteTextToCompositionMinds(relatedTextPayload || '', {
            recover: false
        });
        await navigator.clipboard.write(data);
        composerModalTextAreaSelector().evaluate()?.focus();
        document.execCommand('paste');
        if (hasSucceed()) {
            // clear clipboard
            return navigator.clipboard.writeText('');
        } else if (recover) {
            Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageMinds() {
    const path = '/newsfeed/subscriptions';
    if (location.pathname.includes(path)) return;
    location.assign(path);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/automation/gotoProfilePage.ts
function gotoProfilePageMinds(profile) {
    const path = `/${profile.userId}`;
    document.querySelector(`[href="${path}"]`)?.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.assign(path);
    }, 400);
}

// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(14431);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/automation/openComposeBox.ts





async function openComposeBoxMinds(content, options) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,esm/* delay */.gw)(800);
    // active the compose dialog
    const composeTextarea = composeTextareaSelector().evaluate();
    const composeButton = composeButtonSelector().evaluate();
    if (composeButton) composeButton.click();
    if (composeTextarea) composeTextarea.focus();
    await (0,esm/* delay */.gw)(800);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = composeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        // eslint-disable-next-line no-alert
        alert(locales_legacy/* i18n */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,esm/* delay */.gw)(800);
    CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,core_text/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/minds.com/base.ts
var base = __webpack_require__(79312);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/collecting/getSearchedKeyword.ts
function getSearchedKeywordAtMinds() {
    const params = new URLSearchParams(location.search);
    if (location.pathname === '/discovery/search') {
        return params.get('q') ?? '';
    }
    return '';
}

// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Watchers/MutationObserverWatcher.js
var MutationObserverWatcher = __webpack_require__(60150);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/collecting/identity.ts






async function resolveLastRecognizedIdentityInner(ref, cancel) {
    async function assign() {
        const { handle, avatar } = selfInfoSelectors();
        ref.value = {
            identifier: profile/* ProfileIdentifier */.W.of(base/* mindsBase */.N.networkIdentifier, handle).unwrapOr(undefined),
            nickname: undefined,
            avatar
        };
        const user = await entry/* Minds */.nE.getUserByScreenName(handle);
        if (user) {
            ref.value = {
                identifier: profile/* ProfileIdentifier */.W.of(base/* mindsBase */.N.networkIdentifier, user.username).unwrapOr(undefined),
                nickname: user.name,
                avatar: user.avatar_url?.medium
            };
        }
    }
    function createWatcher(selector) {
        new MutationObserverWatcher/* MutationObserverWatcher */.U(selector).addListener('onAdd', ()=>assign()).addListener('onChange', ()=>assign()).startWatch({
            childList: true,
            subtree: true
        }, cancel);
    }
    assign();
    createWatcher(handleSelector());
}
const IdentityProviderMinds = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./packages/plugin-infra/src/utils/theme/color-tools.ts
var color_tools = __webpack_require__(13326);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/collecting/theme.ts



function resolveThemeSettingsInner(ref, cancel) {
    function updateThemeColor() {
        const backgroundColor = (0,color_tools/* getBackgroundColor */.dF)(document.body);
        ref.value = {
            ...ref.value,
            mode: (0,color_tools/* isDark */._T)((0,color_tools/* fromRGB */.f2)(backgroundColor)) ? specs/* ThemeMode */.hY.Dark : specs/* ThemeMode */.hY.Light
        };
    }
    updateThemeColor();
    const observer = new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
            updateThemeColor();
        });
    });
    observer.observe(document.body, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: [
            'class'
        ]
    });
    cancel.addEventListener('abort', ()=>observer.disconnect());
}
const ThemeSettingsProviderMinds = {
    recognized: utils/* creator */.D.EmptyThemeSettingsProviderState(),
    async start (cancel) {
        resolveThemeSettingsInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./packages/typed-message/base/src/core/tuple.ts
var tuple = __webpack_require__(17425);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/image.ts
var core_image = __webpack_require__(93349);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/empty.ts
var empty = __webpack_require__(40048);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/promise.ts
var promise = __webpack_require__(61111);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(80029);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/startWatch.ts
var startWatch = __webpack_require__(31210);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/hasPayloadLike.ts
var hasPayloadLike = __webpack_require__(86925);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(4677);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/utils/user.ts

function usernameValidator(name) {
    for (const v of [
        /(minds|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,isNull/* default */.Z)(v.exec(name))) {
            return false;
        }
    }
    return name.length >= 4;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/mask/shared/site-adaptors/implementations/minds.com.ts


const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const MindsAdaptor = {
    name: 'Minds',
    networkIdentifier: types/* EnhanceableSite */.J.Minds,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.minds.com',
    isSocialNetwork: true,
    sortIndex: 4,
    getProfilePage: ()=>new URL('https://www.minds.com'),
    getShareLinkURL (message) {
        const url = (0,dist/* default */.ZP)('https://www.minds.com/newsfeed/subscriptions', {
            intentUrl: message
        });
        return new URL(url);
    }
};

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/shared.ts






function getPostURL(post) {
    return new URL(`https://minds.com/newsfeed/${post.postId}`);
}
const mindsShared = {
    ...base/* mindsBase */.N,
    utils: {
        isValidUsername: usernameValidator,
        getPostURL,
        share (message) {
            (0,open_window/* openWindow */.x)(MindsAdaptor.getShareLinkURL?.(message));
        },
        createPostContext: (0,create_post_context/* createSiteAdaptorSpecializedPostContext */.L)({
            hasPayloadLike: hasPayloadLike/* hasPayloadLike */.s,
            getURLFromPostIdentifier: getPostURL
        })
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__(55437);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/anchor.ts
var extension_anchor = __webpack_require__(43458);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/utils/fetch.ts



function parseNameArea(nameArea) {
    const displayNameNode = nameArea.querySelector('span');
    return {
        name: displayNameNode && (0,esm/* assertNonNull */.Cq)(displayNameNode) ? displayNameNode.innerText : nameArea.innerText,
        handle: nameArea.href.slice(8).split('/')[1]
    };
}
function postIdParser(node) {
    const idNode = node.querySelector('m-activity__permalink .m-activityPermalink__wrapper--link');
    return idNode ? idNode.getAttribute('href')?.split('/')[2] ?? undefined : undefined;
}
function postNameParser(node) {
    return parseNameArea((0,esm/* assertNonNull */.Cq)(node.querySelector([
        'm-activity__ownerblock .m-activityOwnerBlock__primaryName',
        'm-activity__ownerblock .m-activityOwnerBlock__secondaryName'
    ].// It's `secondaryName` in detail page
    join(','))));
}
function postAvatarParser(node) {
    const avatarElement = node.querySelector('m-hovercard img');
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
            return (0,core_text/* makeTypedMessageText */.P)(node.nodeValue);
        } else if (node instanceof HTMLAnchorElement && !node.className.includes('m-activityContentMedia__link')) {
            const anchor = node;
            const href = anchor.getAttribute('title') ?? anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,empty/* makeTypedMessageEmpty */.W)();
            return (0,extension_anchor/* makeTypedMessageAnchor */.J)(resolveType(content), href ?? '', content);
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const matched = src?.match(/emoji\/v2\/svg\/([\w-]+)\.svg/);
            if (!matched) return (0,empty/* makeTypedMessageEmpty */.W)();
            const points = matched[1].split('-').map((point)=>Number.parseInt(point, 16));
            return (0,core_text/* makeTypedMessageText */.P)(String.fromCodePoint(...points));
        } else if (node.childNodes.length) {
            const flattened = (0,flattenDeep/* default */.Z)(Array.from(node.childNodes, make));
            // conjunct text messages under same node
            if (flattened.every(core_text/* isTypedMessageText */.Rz)) return (0,core_text/* makeTypedMessageText */.P)(flattened.map((x)=>x.content).join(''));
            return flattened;
        } else return (0,empty/* makeTypedMessageEmpty */.W)();
    }
    const content = node.querySelector('m-activity__content');
    return content ? Array.from(content.childNodes).flatMap(make) : [];
}
function postParser(node) {
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,empty/* isTypedMessageEmpty */.Y)(x))
    };
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptors/utils.ts
var site_adaptors_utils = __webpack_require__(21827);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/collecting/post.ts













const PostProviderMinds = {
    posts: utils/* creator */.D.EmptyPostProviderState(),
    start (signal) {
        collectPostsMindsInner(this.posts, signal);
    }
};
function collectPostsMindsInner(store, signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(postContentSelector()).useForeach((node, key, metadata)=>{
        const activitySelector = new LiveSelector/* LiveSelector */.j().replace(()=>[
                metadata.realCurrent
            ]).closest('m-activity, m-activity__modal');
        const activityNode = activitySelector.evaluate()[0];
        // ? inject after comments
        const commentsSelector = activitySelector.clone().querySelectorAll('m-activity__content .m-comment__message');
        // ? inject comment text field
        const commentBoxSelector = activitySelector.clone().querySelectorAll('.m-commentPoster__form').map((x)=>x.parentElement);
        const { subscriptions, ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = mindsShared.utils.createPostContext({
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            rootElement: metadata,
            suggestedInjectionPoint: node,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectLinks() {
            if (!activityNode) return;
            const links = [
                ...activityNode.querySelectorAll('a')
            ].filter((x)=>x.rel);
            const seen = new Set();
            for (const x of links){
                if (seen.has(x.href)) continue;
                seen.add(x.href);
                info.postMetadataMentionedLinks.set(x, x.href);
            }
        }
        function collectPostInfo() {
            const { pid, messages, handle, name, avatar } = postParser(activityNode);
            if (!pid) return;
            const postBy = profile/* ProfileIdentifier */.W.of(base/* mindsBase */.N.networkIdentifier, handle).unwrapOr(null);
            info.postID.value = pid;
            info.postBy.value = postBy;
            info.nickname.value = name;
            info.avatarURL.value = avatar || null;
            if (name && postBy) {
                const currentProfile = (0,site_adaptors_utils/* getCurrentIdentifier */.T)();
                service/* default */.ZP.Identity.updateProfileInfo(postBy, {
                    nickname: name,
                    avatarURL: avatar
                });
                if (currentProfile?.linkedPersona) service/* default */.ZP.Identity.createNewRelation(postBy, currentProfile.linkedPersona);
            }
            // decode steganographic image
            // don't add await on this
            const images = (0,untilElementAvailable/* untilElementAvailable */.f)(new LiveSelector/* LiveSelector */.j([
                activityNode
            ]).querySelectorAll('.m-activityContent__media--image img'), 10000).then(()=>getMetadataImages(activityNode)).then((urls)=>{
                for (const url of urls)info.postMetadataImages.add(url);
                if (urls.length) return (0,tuple/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,core_image/* makeTypedMessageImage */.a)(x)));
                return (0,empty/* makeTypedMessageEmpty */.W)();
            }).catch(()=>(0,empty/* makeTypedMessageEmpty */.W)());
            info.postMessage.value = (0,tuple/* makeTypedMessageTuple */.Zw)([
                ...messages,
                (0,promise/* makeTypedMessagePromise */.N)(images)
            ]);
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
function getMetadataImages(activityNode) {
    const imgNodes = activityNode.querySelectorAll('.m-activityContent__media--image img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = Array.from(imgNodes).map((node)=>node.src).// FIXME! there's a CORS issue on the CDN
    map((src)=>src.replace('cdn.minds.com', 'minds.com')).// Use the master version of the image so the dimensions don't change
    map((src)=>src.replace('xlarge', 'master')).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/customization/custom.ts





function useThemeMindsVariant(baseTheme) {
    const themeSettings = (0,useActivatedUI/* useThemeSettings */.XG)();
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,color_tools/* fromRGB */.f2)(themeSettings.color);
        const primaryContrastColorRGB = (0,color_tools/* fromRGB */.f2)('rgb(255, 255, 255)');
        (0,immer/* setAutoFreeze */.Fl)(false);
        const MindsTheme = (0,immer/* produce */.Uy)(baseTheme, (theme)=>{
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
                lg: 1220,
                xl: 1920
            };
            theme.components = theme.components || {};
            theme.components.MuiTypography = {
                styleOverrides: {
                    root: {
                        fontFamily: 'Roboto,Helvetica,sans-serif'
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
        return (0,createMuiStrictModeTheme/* default */.Z)(MindsTheme);
    }, [
        baseTheme,
        themeSettings
    ]);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/CommentBox.tsx + 1 modules
var CommentBox = __webpack_require__(96320);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/automation/pasteToCommentBoxMinds.ts




async function pasteToCommentBoxMinds(encryptedComment, current, dom) {
    const fail = ()=>{
        Messages/* MaskMessages */.q.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    const root = dom || current.rootNode;
    if (!root) return fail();
    const input = root.querySelector('[contenteditable]');
    if (!input) return fail();
    (0,selectElementContents/* selectElementContents */.M)(input);
    (0,sdk/* pasteText */.M1)(encryptedComment);
    await (0,esm/* delay */.gw)(200);
    if (!root.innerText.includes(encryptedComment)) return fail();
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/CommentBox.tsx
/* eslint-disable tss-unused-classes/unused-classes */ 


function injectCommentBoxAtMinds() {
    return (0,CommentBox/* injectCommentBoxDefaultFactory */.S)(pasteToCommentBoxMinds, (classes)=>({
            inputProps: {
                classes
            }
        }), (0,makeStyles/* makeStyles */.Z)()((theme)=>({
            root: {
                fontSize: 16,
                background: 'transparent',
                // FIXME: A weird issue with margins
                width: '96.2%',
                height: 44,
                borderRadius: 2,
                padding: '2px 1em',
                border: `1px solid ${theme.palette.mode === 'dark' ? '#414c57' : '#d3dbe3'}`,
                margin: '0 10px 10px',
                color: theme.palette.mode === 'dark' ? '#fff' : '#43434d',
                fontWeight: 400
            },
            input: {
                '&::placeholder': {
                    color: theme.palette.mode === 'dark' ? '#b8c1c' : '#72727c',
                    opacity: 1,
                    fontWeight: 400
                },
                '&:focus::placeholder': {
                    color: 'transparent'
                }
            }
        })));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/mask/content-script/components/CompositionDialog/Composition.tsx + 18 modules
var Composition = __webpack_require__(56463);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/PostDialog.tsx






function injectPostDialogAtMinds(signal) {
    renderPostDialogTo('popup', composerModalSelector(), signal);
    renderPostDialogTo('timeline', rootSelector(), signal);
}
function renderPostDialogTo(reason, ls, signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ls);
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        requireClipboardPermission: true,
        type: reason
    }));
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(26251);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/PostDialogHint.tsx











function injectPostDialogHintAtMinds(signal) {
    renderPostDialogHintTo(postEditorInDialogSelector(), signal, 'popup');
    renderPostDialogHintTo(postEditorInTimelineSelector(), signal, 'timeline');
}
function renderPostDialogHintTo(ls, signal, reason) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ls);
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtMinds, {
        reason: reason
    }));
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { reason })=>({
        buttonTransform: {
            ...reason === 'timeline' ? {
                width: '40px',
                transform: !(0,base/* isMinds */.S)(ui.activatedSiteAdaptorUI) ? 'translateX(200px) translateY(-78px)' : ''
            } : {}
        },
        iconButton: {
            '&:hover': {
                background: 'none'
            }
        }
    }));
function PostDialogHintAtMinds({ reason }) {
    const { classes } = useStyles({
        reason
    });
    const onHintButtonClicked = (0,react.useCallback)(()=>CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.sendToLocal({
            reason,
            open: true
        }), [
        reason
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        disableGuideTip: true,
        size: 17,
        iconType: "minds",
        onHintButtonClicked: onHintButtonClicked,
        tooltip: {
            disabled: true
        },
        classes: {
            buttonTransform: classes.buttonTransform,
            iconButton: classes.iconButton
        }
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtMinds(signal);
    injectPostDialogHintAtMinds(signal);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostInspector.tsx + 15 modules
var PostInspector = __webpack_require__(10642);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/PostInspector.tsx

function injectPostInspectorAtMinds(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)()(current, signal);
}

// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(18747);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/PostReplacer.tsx

function resolveContentNode(node) {
    return node.closest([
        'm-activity__content .m-activityContentText__body > m-readmore span:first-child',
        'm-activity__content .m-activityContent__mediaDescriptionText'
    ].join(','));
}
function injectPostReplacerAtMinds(signal, current) {
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

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/SearchResultInspector.tsx + 2 modules
var SearchResultInspector = __webpack_require__(65235);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/SearchResultInspector.tsx






function injectSearchResultInspectorAtMinds(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchResultHeadingSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultInspector/* SearchResultInspector */.i, {}));
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/Welcomes/Banner.tsx
var Banner = __webpack_require__(31559);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/Banner.tsx







function injectBannerAtMinds(signal) {
    injectBanner(postEditorInTimelineSelector(), signal, /*#__PURE__*/ (0,jsx_runtime.jsx)(MindsBannerTimeline, {}));
    injectBanner(postEditorInDialogSelector(), signal, /*#__PURE__*/ (0,jsx_runtime.jsx)(MindsBannerPopup, {}));
}
function injectBanner(ls, signal, element) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(ls);
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(element);
}
const Banner_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    buttonText: {
        margin: '-2px 0 !important',
        transform: 'translateX(200px) translateY(-78px)'
    },
    content: {
        marginRight: 5
    },
    buttonNoMargin: {
        margin: '0 !important'
    }
});
function MindsBannerTimeline() {
    const { classes } = Banner_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Banner/* Banner */.j, {
        iconType: "minds",
        classes: {
            buttonText: classes.buttonText,
            content: classes.content
        }
    });
}
function MindsBannerPopup() {
    const { classes } = Banner_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Banner/* Banner */.j, {
        iconType: "minds",
        classes: {
            buttonText: classes.buttonNoMargin
        }
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ToolboxUnstyled.tsx + 5 modules
var ToolboxUnstyled = __webpack_require__(8388);
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
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/ToolboxHint_UI.tsx



const mindsBreakPoint = 1221;
/** px */ const Container = (0,styled/* default */.ZP)('div')`
    height: 45px;
    margin-bottom: 10px;
`;
const Item = (0,styled/* default */.ZP)((0,ListItemButton/* default */.Z))`
    border-radius: 8px;
    height: 45px;
    padding: 4px 12px 4px 0;
    color: ${({ theme })=>theme.palette.primary.main};
    &:hover {
        background: unset;
        color: rgb(48, 153, 242);
    }
    @media screen and (max-width: ${mindsBreakPoint}px) {
        padding: 12px 0;
        justify-content: center;
    }
`;
const Text = (0,styled/* default */.ZP)((0,Typography/* default */.Z))`
    font-size: 0.9375rem;
    font-weight: 500;
    color: inherit !important;
    /* Minds font */
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 44px;
`;
const Icon = (0,styled/* default */.ZP)((0,ListItemIcon/* default */.Z))`
    color: inherit;
    min-width: 48px;
    margin-left: 6px;
    @media screen and (max-width: ${mindsBreakPoint}px) {
        min-width: 0;
    }
`;
function ToolboxHintAtMinds(props) {
    const mini = (0,useMediaQuery/* default */.Z)(`(max-width: ${mindsBreakPoint}px)`);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        mini: mini,
        Container: Container,
        ListItemButton: Item,
        Typography: Text,
        ListItemIcon: Icon,
        category: props.category
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/ToolboxHint.tsx






function injectToolboxHintAtMinds(signal, category) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(toolboxInSidebarSelector());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtMinds, {
        category: category
    }));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(95555);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/customization/render-fragments.tsx




const MindsRenderFragments = {
    AtLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = '/' + props.children.slice(1);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            fontSize: "inherit",
            href: target,
            children: props.children
        });
    }),
    HashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/discovery/search?q=%23${encodeURIComponent(text)}`;
        const { hasMatch, ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            fontSize: "inherit",
            href: target,
            children: props.children,
            onClick: (e)=>{
                e.stopPropagation();
            }
        });
    }),
    CashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/discovery/search?q=$${encodeURIComponent(text)}`;
        const { hasMatch, ...events } = (0,Components_Text/* useTagEnhancer */.fR)('cash', text);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            fontSize: "inherit",
            href: target,
            children: props.children,
            onClick: (e)=>{
                e.stopPropagation();
            }
        });
    }),
    Image: ()=>null
};

// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(51848);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/ProfileCover.tsx
var ProfileCover = __webpack_require__(4347);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/ProfileCover.tsx






function injectMindsProfileCover(signal) {
    const watcher = new MutationObserverWatcher/* MutationObserverWatcher */.U(searchMindsProfileCover());
    (0,startWatch/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCoverAtMinds, {}));
}
function ProfileCoverAtMinds() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCover/* ProfileCover */.D, {});
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20230307045856-46252fb/node_modules/@dimensiondev/holoflows-kit/es/DOM/Proxy.js
var Proxy = __webpack_require__(6806);
// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var src_types = __webpack_require__(62476);
// EXTERNAL MODULE: ./packages/mask/content-script/components/InjectedComponents/Avatar.tsx
var Avatar = __webpack_require__(39570);
;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/injection/Avatar/index.tsx









async function injectAvatar(signal) {
    (0,startWatch/* startWatch */.f)(new MutationObserverWatcher/* MutationObserverWatcher */.U(inpageAvatarSelector()).useForeach((ele)=>{
        let remover = noop/* default */.Z;
        const remove = ()=>remover();
        const run = async ()=>{
            const proxy = (0,Proxy/* DOMProxy */.E)({
                afterShadowRootInit: src/* Flags */.v.shadowRootInit
            });
            proxy.realCurrent = ele.firstChild;
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

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptors/minds.com/ui-provider.ts
/* eslint-disable tss-unused-classes/unused-classes */ 





























const CurrentVisitingIdentityProviderDefault = {
    hasDeprecatedPlaceholderName: false,
    recognized: utils/* creator */.D.EmptyIdentityResolveProviderState(),
    start (signal) {}
};
const useInjectedDialogClassesOverwriteMinds = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
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
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(110, 118, 125, 0.4)' : 'rgba(0, 0, 0, 0.4)'
        }
    };
});
const mindsUI = {
    ...base/* mindsBase */.N,
    ...mindsShared,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxMinds
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            attachText: pasteTextToCompositionMinds,
            // TODO: make a better way to detect
            attachImage: pasteImageToCompositionMinds()
        },
        redirect: {
            newsFeed: gotoNewsFeedPageMinds,
            profilePage: gotoProfilePageMinds
        }
    },
    collecting: {
        identityProvider: IdentityProviderMinds,
        postsProvider: PostProviderMinds,
        themeSettingsProvider: ThemeSettingsProviderMinds,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderDefault,
        getSearchedKeyword: getSearchedKeywordAtMinds
    },
    customization: {
        sharedComponentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteMinds
            }
        },
        componentOverwrite: {
            RenderFragments: MindsRenderFragments
        },
        useTheme: useThemeMindsVariant
    },
    init (signal) {
        const profiles = utils/* stateCreator */.Z.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, mindsShared.networkIdentifier);
        (0,transformer/* enableFbStyleTextPayloadReplace */.Hk)();
        return {
            profiles
        };
    },
    injection: {
        toolbox: injectToolboxHintAtMinds,
        profileCover: injectMindsProfileCover,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtMinds,
        postReplacer: injectPostReplacerAtMinds,
        banner: injectBannerAtMinds,
        searchResult: injectSearchResultInspectorAtMinds,
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
        commentComposition: {
            compositionBox: (0,Comments/* injectPostCommentsDefault */.M)(),
            commentInspector: injectCommentBoxAtMinds()
        },
        // NOT SUPPORTED YET
        userBadge: undefined,
        avatar: injectAvatar
    },
    configuration: {
        steganography: {
            // ! Change this might be a breaking change !
            password () {
                const id = IdentityProviderMinds.recognized.value.identifier?.userId || ui/* activatedSiteAdaptor_state */.g.profiles.value?.[0].identifier.userId;
                if (!id) throw new Error('Cannot figure out password');
                return profile/* ProfileIdentifier */.W.of(types/* EnhanceableSite */.J.Minds, id).expect(`${id} should be a valid user id`).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (mindsUI);


/***/ }),

/***/ 82037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 14431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50139);

/** @deprecated Prefer useMaskTrans() */ const i18n = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV;


/***/ })

}]);
//# sourceMappingURL=chunk.15.js.map