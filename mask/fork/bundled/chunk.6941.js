(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6941],{

/***/ 41693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ parseURLs)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseURLs(text, requireProtocol = true) {
    // CJS-ESM compatibility
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z;
    return lib.list(text).map((x)=>x.string).filter((y)=>{
        if (!requireProtocol) return true;
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        return URL.canParse(y);
    });
}


/***/ }),

/***/ 18586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ usePluginWrapper),
/* harmony export */   y: () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);


const emptyPluginWrapperMethods = {
    setWrap: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
PluginWrapperMethodsContext.displayName = 'PluginWrapperMethodsContext';
function usePluginWrapper(open, options) {
    const { setWidth, setWrap, setWrapperName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width, name } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open);
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width), [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name), [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 90786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lG: () => (/* binding */ PostInfoContext),
  eT: () => (/* binding */ PostInfoProvider),
  H9: () => (/* binding */ usePostInfoDetails)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/ValueRef.ts
var ValueRef = __webpack_require__(88547);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Observable.ts
var Observable = __webpack_require__(8482);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/hooks/useObservableMapSet.ts


function useObservableValues(map) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>map.asValues,
            subscribe: (callback)=>{
                return map.event.on(map.ALL_EVENTS, callback);
            }
        }), [
        map
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}

;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts




/** post id on the network. */ /**
     * The result of this subscription will be merged with `PostContext.postMentionedLinks`.
     *
     * You don't need to provide this to resolve links in `PostContext.postContent`.
     */ /** @deprecated It should parse image into rawMessage */ /**
     * The raw TypedMessage that the site gives.
     */ // #region DOM knowledge
// #endregion
// #region Metadata of a post (author, mentioned items, ...)
/** Auto computed */ // Meta
/** @deprecated It should appears in rawMessage */ // #endregion
// #region Raw post content (not decrypted)
// #endregion
// #region Post payload discovered in the rawMessage
/**
     * undefined => payload not found
     */ // #endregion
const PostInfoContext = (0,react.createContext)(null);
PostInfoContext.displayName = 'PostInfoContext';
/** @deprecated use <PostInfoContext.Provider value={post}> */ function PostInfoProvider(props) {
    return (0,react.createElement)(PostInfoContext.Provider, {
        value: props.post,
        children: props.children
    });
}
const usePostInfoDetails = // Change to use* when https://github.com/microsoft/TypeScript/issues/44643 fixed
{
    __proto__: new Proxy({
        __proto__: null
    }, {
        get (_, key) {
            if (typeof key === 'symbol') return undefined;
            function usePostInfoDetails() {
                const postInfo = (0,react.useContext)(PostInfoContext);
                if (!postInfo) throw new TypeError('No post context');
                if (!(key in postInfo)) throw new TypeError('postInfo.' + key + ' is not found');
                const k = postInfo[key];
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof ValueRef/* ValueRef */.Xf) return (0,useValueRef/* useValueRef */.E)(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof Observable/* ObservableMap */.vP) return useObservableValues(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (k instanceof Observable/* ObservableSet */.n7) return useObservableValues(k);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (isSubscription(k)) return (0,use_subscription.useSubscription)(k);
                return k;
            }
            Object.defineProperty(usePostInfoDetails, key, {
                value: usePostInfoDetails,
                configurable: true
            });
            return usePostInfoDetails;
        }
    })
};
function isSubscription(x) {
    return typeof x === 'object' && x !== null && !!(x.getCurrentValue && x.subscribe);
}


/***/ }),

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 51874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ usePostLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _PostContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90786);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8898);



function usePostLink() {
    const id = _PostContext_js__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails */ .H9.postID();
    const identifier = _PostContext_js__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails */ .H9.identifier();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!id || !identifier) return '';
        return (0,_context_js__WEBPACK_IMPORTED_MODULE_2__/* .getPostURL */ .P4)?.(identifier) ?? '';
    }, [
        id,
        identifier,
        _context_js__WEBPACK_IMPORTED_MODULE_2__/* .getPostURL */ .P4
    ]);
}


/***/ }),

/***/ 77601:
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
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(18586);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/base/src/utils/parseURLs.ts
var parseURLs = __webpack_require__(41693);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/plugins/ArtBlocks/src/constants.ts
var constants = __webpack_require__(93);
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/utils.ts



function checkUrl(url) {
    const protocol = 'https://';
    const _url = new URL(/^https?:\/\//.test(url) ? url : protocol + url);
    return constants/* artBlocksHostnames */.K0.includes(_url.hostname) && constants/* artBlocksPathnameRegex */.tz.test(_url.pathname);
}
function getRelevantUrl(textContent) {
    const urls = (0,parseURLs/* parseURLs */.l)(textContent);
    return urls.find(checkUrl);
}
function getAssetInfoFromURL(url) {
    if (!url) return null;
    const _url = new URL(url);
    const matches = _url.pathname.match(constants/* artBlocksPathnameRegex */.tz);
    if (matches) {
        return {
            chain_id: _url.host.includes('artist-staging') ? types/* ChainId */.a_.Ropsten : types/* ChainId */.a_.Mainnet,
            project_id: matches[1] ?? matches[2]
        };
    }
    // nothing matched
    return;
}
function buildTokenId(projectId, invocation) {
    return projectId * 1000000 + invocation;
}

// EXTERNAL MODULE: ./packages/plugins/ArtBlocks/src/base.tsx + 7 modules
var base = __webpack_require__(46355);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/extract.ts
var extract = __webpack_require__(73561);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(7081);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(77607);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(65854);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MobileStepper/MobileStepper.js
var MobileStepper = __webpack_require__(24286);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/OpenInNew.js
var OpenInNew = __webpack_require__(69216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js


/* harmony default export */ const KeyboardArrowLeft = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'KeyboardArrowLeft'));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js


/* harmony default export */ const KeyboardArrowRight = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'KeyboardArrowRight'));
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/pipes/index.ts




const resolveTokenLinkOnArtBlocks = (chainId, tokenId)=>{
    if (chainId === types/* ChainId */.a_.Ropsten) {
        return (0,dist/* default */.ZP)(constants/* ArtBlocksRopstenUrl */.GG, '/token/:tokenId', {
            tokenId
        });
    }
    return (0,dist/* default */.ZP)(constants/* ArtBlocksMainnetUrl */.bD, '/token/:tokenId', {
        tokenId
    });
};
const resolveProjectLinkOnArtBlocks = (chainId, projectId)=>{
    if (chainId === types/* ChainId */.a_.Ropsten) {
        return (0,dist/* default */.ZP)(constants/* ArtBlocksRopstenUrl */.GG, '/project/:projectId', {
            projectId
        });
    }
    return (0,dist/* default */.ZP)(constants/* ArtBlocksMainnetUrl */.bD, '/project/:projectId', {
        projectId
    });
};
const resolveUserLinkOnArtBlocks = (chainId, address)=>{
    if (chainId === types/* ChainId */.a_.Ropsten) {
        return (0,dist/* default */.ZP)(constants/* ArtBlocksRopstenUrl */.GG, '/user/:address', {
            address
        });
    }
    return (0,dist/* default */.ZP)(constants/* ArtBlocksMainnetUrl */.bD, '/user/:address', {
        address
    });
};
const resolveImageLinkOnArtBlocks = (chainId, tokenImage)=>{
    if (chainId === types/* ChainId */.a_.Ropsten) {
        return (0,dist/* default */.ZP)(constants/* ArtBlocksRopstenHostImageUrl */.ZW, '/:tokenImage', {
            tokenImage
        });
    }
    return (0,dist/* default */.ZP)(constants/* ArtBlocksMainnetHostImageUrl */.xE, '/:tokenImage', {
        tokenImage
    });
};
const resolveSubgraphLinkOnArtBlocks = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [types/* ChainId */.a_.Mainnet]: constants/* ArtBlocksMainnetSubgraphLink */.ey,
    [types/* ChainId */.a_.Ropsten]: constants/* ArtBlocksRopstenSubgraphLink */.PO
}, constants/* ArtBlocksMainnetSubgraphLink */.ey);

;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/SiteAdaptor/CollectionView.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        title: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(0.5)
        },
        paper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'background.default',
            paddingRight: theme.spacing(1),
            paddingLeft: theme.spacing(1)
        },
        skeletonImage: {
            height: 304
        },
        skeletonTitle: {
            height: 20,
            width: '30%',
            marginLeft: theme.spacing(2)
        },
        hidden: {
            display: 'none'
        },
        buttonPrev: {
            marginRight: theme.spacing(0.5)
        },
        buttonNext: {
            marginLeft: theme.spacing(0.5)
        },
        tokenIdRedirectionIcon: {
            verticalAlign: 'text-bottom',
            marginLeft: theme.spacing(0.5)
        },
        stepper: {
            backgroundColor: 'inherit'
        },
        imageContainer: {
            textAlign: 'center'
        },
        image: {
            maxHeight: 300
        }
    };
});
function CollectionView(props) {
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = useStyles();
    const { project } = props;
    const [isImageLoaded, setImageLoaded] = (0,react.useState)(false);
    const [activeStep, setActiveStep] = (0,react.useState)(1);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const currentSelectedToken = {
        tokenId: buildTokenId(Number(project.projectId), activeStep - 1),
        contract: {
            id: project.contract.id
        }
    };
    const maxSteps = Number.parseInt(project.invocations, 10);
    const handleNext = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep + 1);
        setImageLoaded(false);
    };
    const handleBack = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep - 1);
        setImageLoaded(false);
    };
    const handleImageLoad = ()=>{
        setImageLoaded(true);
    };
    const tokenLink = resolveTokenLinkOnArtBlocks(chainId, currentSelectedToken.tokenId);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                square: true,
                elevation: 0,
                className: classes.paper,
                children: [
                    !isImageLoaded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        className: classes.skeletonTitle,
                        animation: "wave",
                        variant: "rectangular"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: tokenLink,
                        target: "_blank",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.title,
                            children: [
                                "#",
                                currentSelectedToken.tokenId,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.tokenIdRedirectionIcon,
                                    fontSize: "small"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileStepper/* default */.Z, {
                        className: classes.stepper,
                        variant: "text",
                        steps: maxSteps,
                        position: "static",
                        activeStep: activeStep - 1,
                        nextButton: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                            className: classes.buttonNext,
                            size: "small",
                            variant: "text",
                            onClick: handleNext,
                            disabled: activeStep === maxSteps,
                            children: [
                                "Next",
                                theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowRight, {})
                            ]
                        }),
                        backButton: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                            className: classes.buttonPrev,
                            size: "small",
                            variant: "text",
                            onClick: handleBack,
                            disabled: activeStep === 1,
                            children: [
                                theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowRight, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft, {}),
                                "Back"
                            ]
                        })
                    })
                ]
            }),
            !isImageLoaded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.skeletonImage,
                animation: "wave",
                variant: "rectangular"
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.imageContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: tokenLink,
                    target: "_blank",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: isImageLoaded ? classes.image : classes.hidden,
                        src: resolveImageLinkOnArtBlocks(chainId, `${currentSelectedToken?.tokenId}.png`),
                        alt: "collection collectible",
                        onLoad: handleImageLoad
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/locales/i18n_generated.ts
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
function useArtBlocksTrans() /**
      * `This project is no more active`
      */ /**
      * `Completed`
      */ /**
      * `Paused`
      */ /**
      * `Collection`
      */ /**
      * `Details`
      */ /**
      * `Created by`
      */ /**
      * `Purchase`
      */ /**
      * `Purchasing....`
      */ /**
      * `Please check ToS document`
      */ /**
      * `Price per mint`
      */ /**
      * `Price:`
      */ /**
      * `Minted:`
      */ /**
      * `License:`
      */ /**
      * `Library:`
      */ /**
      * `Website`
      */ /**
      * `Infos`
      */ /**
      * `Chain`
      */ /**
      * `Insufficient balance`
      */ /**
      * `Blockchain:`
      */ /**
      * `Contract:`
      */ /**
      * `Something went wrong!`
      */ /**
      * `Wallet disconnect successfully`
      */ /**
      * `I just purchased a beautiful piece of art from '{{name}}' collection for {{- price}} {{symbol}}. Install @realMaskNetwork to get yours.`
      */ /**
      * `I just purchased a beautiful piece of art from '{{name}}' collection for {{- price}} {{symbol}}. Welcome to join.`
      */ /**
      * `The tips feature currently supports only EVM chains. Support for other chains will be added in the future.`
      */ /**
      * `Artblocks allow you to pick a style that you like, pay for the work, and a randomly generated version of the content is created by an algorithm and sent to your Ethereum account.`
      */ /**
      * `Artblocks`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("io.artblocks");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "io.artblocks",
            ...props
        });
}
const ArtBlocksTrans = /**
      * `By checking this box, I agree to ArtBlocks's <terms>Terms of Service</terms>.`
      */ /**
      * `Are you going to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));

;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/SiteAdaptor/DetailsView.tsx











const DetailsView_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            padding: theme.spacing(2)
        },
        container: {
            padding: theme.spacing(1)
        },
        nameRedirectionIcon: {
            verticalAlign: 'text-bottom'
        },
        nameRedirectionLink: {
            marginLeft: theme.spacing(0.5)
        },
        description: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            whiteSpace: 'pre-line'
        },
        meta_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: theme.spacing(0)
            }
        }
    };
});
function DetailsView({ project }) {
    const { classes } = DetailsView_useStyles();
    const t = useArtBlocksTrans();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const invocations = `${project.invocations} of ${project.maxInvocations}`;
    const price = `${(0,formatter/* formatWeiToEther */.yp)(new bignumber/* BigNumber */.O(project.pricePerTokenInWei))} `;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "h6",
                        sx: {
                            marginBottom: 1
                        },
                        children: [
                            project.name,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.nameRedirectionLink,
                                href: resolveProjectLinkOnArtBlocks(chainId, project.projectId),
                                title: project.name,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.nameRedirectionIcon,
                                    fontSize: "small"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t.plugin_artblocks_created_by(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveUserLinkOnArtBlocks(chainId, project.artistAddress),
                                rel: "noopener noreferrer",
                                target: "_blank",
                                title: resolveUserLinkOnArtBlocks(chainId, project.artistAddress),
                                children: ` ${project.artistName}`
                            }),
                            "\xa0•\xa0",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: project.website,
                                rel: "noopener noreferrer",
                                target: "_blank",
                                title: project.website,
                                children: t.plugin_artblocks_website()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.description,
                        children: project.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t.plugin_artblocks_infos()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t.plugin_artblocks_price_row(),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    price,
                                    project.currencySymbol === null ? 'ETH' : project.currencySymbol
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t.plugin_artblocks_minted_row(),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: invocations
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t.plugin_artblocks_license_row(),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: project.license
                            })
                        ]
                    }),
                    project.scriptJSON ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t.plugin_artblocks_library_row()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: JSON.parse(project.scriptJSON).type
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t.plugin_artblocks_chain()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t.plugin_artblocks_blockchain_row()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: entry/* ChainResolver */.iv.chainName(chainId)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t.plugin_artblocks_contract_row()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: entry/* ExplorerResolver */.Xz.transactionLink(chainId, project.contract.id),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                        address: project.contract.id,
                                        size: 4,
                                        formatter: formatter/* formatEthereumAddress */.j8
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/apis/index.ts


async function fetchProject(chainId, projectId) {
    const body = {
        query: `query Project {
            projects(where: { projectId: "${projectId}"}) {
                id
                projectId
                active
                name
                description
                additionalPayee
                complete
                paused
                currencyAddress
                artistName
                artistAddress
                pricePerTokenInWei
                currencyAddress
                currencySymbol
                contract {
                    id
                }
                website
                license
                invocations
                maxInvocations
                scriptJSON
            }
        }`
    };
    const { data } = await (0,fetchJSON/* fetchJSON */.ZV)(resolveSubgraphLinkOnArtBlocks(chainId), {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data;
}

;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/hooks/useProject.ts


function useFetchProject(projectId, chainId) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!projectId) return null;
        return fetchProject(chainId, projectId);
    }, [
        chainId,
        projectId
    ]);
}

// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/hooks/useControlledDialog.ts

function useControlledDialog() {
    const [open, setOpen] = (0,react.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false),
        onOpen: ()=>setOpen(true)
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(99371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(35406);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useOpenShareTxDialog.tsx
var useOpenShareTxDialog = __webpack_require__(1496);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx + 1 modules
var FungibleTokenInput = __webpack_require__(93558);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants_constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useFungibleTokenWatched.ts



function useFungibleTokenWatched(pluginID, address_ = '') {
    const [amount, setAmount] = (0,react.useState)('');
    const [address, setAddress] = (0,react.useState)(address_);
    const token = (0,useFungibleToken/* useFungibleToken */.c)(pluginID, address);
    const balance = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(pluginID, address);
    return {
        amount,
        setAmount,
        address: token.data?.address ?? address,
        setAddress,
        token,
        balance
    };
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/usePostInfo.ts
var usePostInfo = __webpack_require__(51874);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ContractTransaction.ts
var ContractTransaction = __webpack_require__(21704);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useContract.ts
var useContract = __webpack_require__(95685);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/ArtBlocksMinterContract.json
const ArtBlocksMinterContract_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_genArt721Address","type":"address"},{"internalType":"address","name":"_minterFilter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"PricePerTokenInWeiUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_currencyAddress","type":"address"},{"indexed":false,"internalType":"string","name":"_currencySymbol","type":"string"}],"name":"ProjectCurrencyInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_purchaseToDisabled","type":"bool"}],"name":"PurchaseToDisabledUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genArt721CoreAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"getPriceInfo","outputs":[{"internalType":"bool","name":"isConfigured","type":"bool"},{"internalType":"uint256","name":"tokenPriceInWei","type":"uint256"},{"internalType":"string","name":"currencySymbol","type":"string"},{"internalType":"address","name":"currencyAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFilterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterType","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMaxHasBeenInvoked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMaxInvocations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMintCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMintLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchase","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchaseTo","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"purchaseToDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"setProjectMaxInvocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint8","name":"_limit","type":"uint8"}],"name":"setProjectMintLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleContractMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"togglePurchaseToDisabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"updatePricePerTokenInWei","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/hooks/useArtBlocksContract.ts



function useArtBlocksContract(chainId) {
    const { GEN_ART_721_MINTER } = (0,constants_constants/* useArtBlocksConstants */.Qq)(chainId);
    return (0,useContract/* useContract */.c)(chainId, GEN_ART_721_MINTER, ArtBlocksMinterContract_namespaceObject);
}

;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/hooks/usePurchaseCallback.ts






function usePurchaseCallback(chainId, projectId, amount, schema = types/* SchemaType */.XQ.Native) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const genArt721MinterContract = useArtBlocksContract(chainId);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!genArt721MinterContract) return;
        const tx = await new ContractTransaction/* ContractTransaction */.D(genArt721MinterContract).fillAll(genArt721MinterContract.methods.purchase(projectId), {
            from: account,
            value: new bignumber/* BigNumber */.O(schema === types/* SchemaType */.XQ.Native ? amount : 0).toFixed()
        });
        return entry/* Web3 */.Bv.sendTransaction(tx, {
            chainId
        });
    }, [
        account,
        chainId,
        amount,
        genArt721MinterContract
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/SiteAdaptor/PurchaseDialog.tsx














const PurchaseDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        content: {
            padding: theme.spacing(0)
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(0)} ${theme.spacing(0.5)}`
        }
    };
});
function PurchaseDialog(props) {
    const t = useArtBlocksTrans();
    const { classes } = PurchaseDialog_useStyles();
    const { project, open, onClose, chainId } = props;
    const { token: { data: token }, balance: { data: balance } } = useFungibleTokenWatched(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, project.currencyAddress ? project.currencyAddress : '');
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [{ loading: isPurchasing }, purchaseCallback] = usePurchaseCallback(chainId, project.projectId, project.pricePerTokenInWei, token?.schema);
    const price = (0,react.useMemo)(()=>(0,number/* leftShift */.w5)(project.pricePerTokenInWei, token?.decimals), [
        project.pricePerTokenInWei,
        token?.decimals
    ]);
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareText = [
        Sniffings/* Sniffings */.Y.is_twitter_page || Sniffings/* Sniffings */.Y.is_facebook_page ? t.plugin_artblocks_share({
            name: project.name,
            price: price.toFixed(),
            symbol: token?.symbol || ''
        }) : t.plugin_artblocks_share_no_official_account({
            name: project.name,
            price: price.toFixed(),
            symbol: token?.symbol || ''
        }),
        '#mask_io #artblocks_io #nft',
        postLink
    ].join('\n');
    const openShareTxDialog = (0,useOpenShareTxDialog/* useOpenShareTxDialog */.z)();
    const purchase = (0,react.useCallback)(async ()=>{
        try {
            const hash = await purchaseCallback();
            if (typeof hash !== 'string') return;
            await openShareTxDialog({
                hash,
                onShare () {
                    (0,context/* share */.BN)?.(shareText);
                }
            });
            onClose();
        } catch (err) {
            if (!(err instanceof Error)) return;
            await modals/* ConfirmModal */.sm.openAndWaitForClose({
                title: 'Error',
                content: err.message
            });
        }
    }, [
        openShareTxDialog,
        onClose
    ]);
    const { GEN_ART_721_MINTER: spender } = (0,constants_constants/* useArtBlocksConstants */.Qq)();
    const validationMessage = (0,react.useMemo)(()=>{
        const balance_ = (0,number/* leftShift */.w5)(balance ?? '0', token?.decimals);
        if (balance_.isZero() || price.isGreaterThan(balance_)) return t.plugin_collectible_insufficient_balance();
        if (!ToS_Checked) return t.plugin_artblocks_check_tos_document();
        return '';
    }, [
        price,
        balance,
        token?.decimals,
        ToS_Checked
    ]);
    const actionButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        loading: isPurchasing,
        className: classes.button,
        disabled: !!validationMessage || isPurchasing,
        color: "primary",
        onClick: purchase,
        fullWidth: true,
        children: validationMessage || (isPurchasing ? t.plugin_artblocks_purchasing() : t.plugin_artblocks_purchase())
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t.plugin_artblocks_purchase(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInput/* FungibleTokenInput */.C, {
                                label: t.plugin_artblocks_price_per_mint(),
                                amount: price.toString(),
                                balance: balance ?? '0',
                                token: token,
                                onAmountChange: ()=>{}
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: ToS_Checked,
                                    onChange: (event)=>setToS_Checked(event.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                                        i18nKey: "plugin_artblocks_legal_text",
                                        components: {
                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                color: "primary",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://www.artblocks.io/terms-of-service"
                                            })
                                        }
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            expectedChainId: chainId,
                            children: [
                                token?.schema === types/* SchemaType */.XQ.Native ? actionButton : null,
                                token?.schema === types/* SchemaType */.XQ.ERC20 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                                    amount: project.pricePerTokenInWei,
                                    spender: spender,
                                    token: token,
                                    children: actionButton
                                }) : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/SiteAdaptor/ActionBar.tsx






const ActionBar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            flex: 1
        }
    };
});
function ActionBar(props) {
    const t = useArtBlocksTrans();
    const { classes } = ActionBar_useStyles();
    const { project, chainId } = props;
    const { open: openMintDialog, onClose: onCloseMintDialog, onOpen: onOpenMintDialog } = useControlledDialog();
    const status = !project.active ? t.plugin_artblocks_not_active() : project.complete ? t.plugin_artblocks_completed() : project.paused ? t.plugin_artblocks_paused() : t.plugin_artblocks_purchase();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        display: "flex",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                fullWidth: true,
                variant: "roundedDark",
                onClick: onOpenMintDialog,
                disabled: project.complete || project.paused || !project.active,
                children: status
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PurchaseDialog, {
                project: project,
                chainId: chainId,
                open: openMintDialog,
                onClose: onCloseMintDialog
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/SiteAdaptor/Collectible.tsx















const Collectible_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 0,
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        content: {
            padding: '0 !important'
        },
        body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 300,
            justifyContent: 'center'
        }
    };
});
function Collectible({ projectId, chainId: projectChainId }) {
    const t = useArtBlocksTrans();
    const { classes } = Collectible_useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: projectChainId
    });
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const { value, loading, error } = useFetchProject(projectId, chainId);
    const project = value?.projects[0];
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.body,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {})
    });
    if (error || !project) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        color: "textPrimary",
        children: t.plugin_artblocks_smt_wrong()
    });
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t.plugin_artblocks_collection()
        }, "collection"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t.plugin_artblocks_details()
        }, "details")
    ];
    const pages = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionView, {
            project: project
        }, "project"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsView, {
            project: project
        }, "details")
    ];
    const invocations = ` ${project.invocations} of ${project.maxInvocations} minted `;
    const price = (0,formatter/* formatWeiToEther */.yp)(project.pricePerTokenInWei).isZero() ? '' : ` ${(0,formatter/* formatWeiToEther */.yp)(project.pricePerTokenInWei)} ${project?.currencySymbol}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: constants/* ArtBlocksLogoUrl */.iQ
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveProjectLinkOnArtBlocks(chainId, project.projectId),
                                title: project.name,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: project.name
                            })
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: resolveUserLinkOnArtBlocks(chainId, project.artistAddress),
                                    title: project.artistAddress,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: project.artistName
                                }),
                                ' ',
                                "•",
                                invocations,
                                "•",
                                price
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                indicatorColor: "primary",
                                textColor: "primary",
                                variant: "fullWidth",
                                value: tabIndex,
                                onChange: (ev, newValue)=>setTabIndex(newValue),
                                TabIndicatorProps: {
                                    style: {
                                        display: 'none'
                                    }
                                },
                                children: tabs
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                children: pages[tabIndex]
                            })
                        ]
                    })
                ]
            }),
            price ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    flex: 1,
                    display: 'flex',
                    padding: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    expectedChainId: chainId,
                    ActionButtonPromiseProps: {
                        variant: 'roundedDark'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {
                        chainId: chainId,
                        project: project
                    })
                })
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/plugins/ArtBlocks/src/SiteAdaptor/index.tsx










const site = {
    ...base/* base */.u,
    init (signal) {},
    PostInspector () {
        const links = PostContext/* usePostInfoDetails */.H9.mentionedLinks();
        const link = (0,uniq/* default */.Z)(links).find(checkUrl);
        const asset = getAssetInfoFromURL(link);
        return asset?.project_id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            chainId: asset.chain_id,
            projectId: asset.project_id
        }) : null;
    },
    DecryptedInspector (props) {
        const collectibleUrl = getRelevantUrl((0,extract/* extractTextFromTypedMessage */.V)(props.message).unwrapOr(''));
        const asset = getAssetInfoFromURL(collectibleUrl);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            chainId: asset.chain_id,
            projectId: asset.project_id
        }) : null;
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base */.u.ID,
            category: 'dapp',
            marketListSortingPriority: 15,
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_artblocks_description",
                ns: PluginID/* PluginID */.P.ArtBlocks
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_artblocks_name",
                ns: PluginID/* PluginID */.P.ArtBlocks
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArtBlocks, {
                size: 36
            })
        }
    ]
};
function Renderer(props) {
    (0,usePluginWrapper/* usePluginWrapper */.f)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {
        chainId: props.chainId,
        projectId: props.projectId
    });
}
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 45522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nW: () => (/* binding */ useBuildInfoMarkdown)
/* harmony export */ });
/* unused harmony exports BuildInfoProvider, useBuildInfo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2194);



/** Type of the Error */ /** The Error message */ /** The error stack */ /**
 * Provide the build info for CrashUI
 */ const BuildInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useBuildInfo_raw */ .A);
BuildInfo.displayName = 'BuildInfo';
function BuildInfoProvider(props) {
    return /*#__PURE__*/ _jsx(BuildInfo.Provider, {
        ...props
    });
}
function useBuildInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BuildInfo)).current();
}
function useBuildInfoMarkdown() {
    const env = useBuildInfo();
    const gitInfo = env.COMMIT_HASH ? `
## Git (${env.DIRTY ? '*' : ''}):
${env.COMMIT_HASH} (${env.BRANCH_NAME})` : '';
    const buildInfoMarkdown = `## Build info
- Version: ${env.VERSION || 'unknown'}
- NODE_ENV: ${"production" || 0}
- userAgent: ${navigator.userAgent}
- build: ${env.channel || 'unknown'}
- BUILD_DATE: ${env.BUILD_DATE || 'unknown'}
` + gitInfo;
    return buildInfoMarkdown;
}


/***/ }),

/***/ 62384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ SingletonModal)
/* harmony export */ });
/* unused harmony export SingletonModalQueued */
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93441);


class SingletonModal {
    constructor(){
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.abort = this.abort.bind(this);
        this.openAndWaitForClose = this.openAndWaitForClose.bind(this);
    }
    emitter = new _servie_events__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
    onOpen;
    onClose;
    onAbort;
    dispatchPeek;
    dispatchOpen;
    dispatchClose;
    dispatchAbort;
    /**
     * Register a React modal component that implemented a forwarded ref.
     * The ref item should be fed with open and close methods.
     */ register = (creator)=>{
        if (!creator) {
            this.dispatchOpen = undefined;
            this.dispatchClose = undefined;
            this.dispatchAbort = undefined;
            return;
        }
        const ref = creator((props)=>{
            this.onOpen?.(props);
            this.emitter.emit('open', props);
        }, (props)=>{
            this.onClose?.(props);
            this.emitter.emit('close', props);
        }, (error)=>{
            this.onAbort?.(error);
            this.emitter.emit('abort', error);
        });
        this.dispatchPeek = ref.peek;
        this.dispatchOpen = ref.open;
        this.dispatchClose = ref.close;
        this.dispatchAbort = ref.abort;
    };
    /**
     * Peek the open state of the React modal component.
     */ peek() {
        return this.dispatchPeek?.() ?? false;
    }
    /**
     * Open the registered modal component with props
     * @param props
     */ open(props) {
        if (typeof this.dispatchOpen === 'undefined') console.warn("[SingletonModal]: The modal hasn't registered yet.");
        this.dispatchOpen?.(props);
    }
    /**
     * Close the registered modal component with props
     * @param props
     */ close(props) {
        this.dispatchClose?.(props);
    }
    /**
     * Abort the registered modal component with Error
     */ abort(error) {
        this.dispatchAbort?.(error);
    }
    /**
     * Open the registered modal component and wait for it closes
     * @param props
     */ openAndWaitForClose(props) {
        return new Promise((resolve, reject)=>{
            this.open(props);
            this.onClose = (props)=>resolve(props);
            this.onAbort = (error)=>reject(error);
        });
    }
}
class SingletonModalQueued extends (/* unused pure expression or super */ null && (SingletonModal)) {
    opened = false;
    tasks = [];
    constructor(){
        super();
        this.emitter.on('open', ()=>{
            this.opened = true;
        });
        this.emitter.on('close', ()=>{
            this.opened = false;
            this.cleanup();
        });
        this.emitter.on('abort', ()=>{
            this.opened = false;
            this.cleanup();
        });
    }
    open(props) {
        if (!this.opened) {
            super.open(props);
            return;
        }
        this.tasks.push({
            props
        });
    }
    close(props) {
        if (!this.opened) return;
        super.close(props);
    }
    openAndWaitForClose(props) {
        if (!this.opened) return super.openAndWaitForClose(props);
        const d = defer();
        this.tasks.push({
            props,
            defer: d
        });
        return d[0];
    }
    async cleanup() {
        if (this.opened || !this.tasks.length) return;
        await delay(300);
        const { props, defer } = this.tasks.shift();
        this.open(props);
        if (!defer) return;
        this.onClose = (props)=>defer[1](props);
        this.onAbort = (error)=>defer[2](error);
    }
}


/***/ }),

/***/ 38655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 19628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenSpenders.ts
var useFungibleTokenSpenders = __webpack_require__(54165);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(13414);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/HelpOutline.js


/* harmony default export */ const HelpOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
}), 'HelpOutline'));
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        icon: {},
        button: {
            whiteSpace: 'nowrap',
            // increase selector priority over button's
            [`.${refs.icon}`]: {
                width: 18,
                height: 18,
                fontSize: 10
            }
        },
        helpIcon: {
            width: 18,
            height: 18
        }
    }));
function EthereumERC20TokenApprovedBoundary(props) {
    const { children = null, amount, balance, spender, token, infiniteUnlockContent, contractName, showHelperToken = true, failedContent, callback } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: token?.chainId
    });
    const { data: tokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address, {
        chainId
    });
    const { data: spenders, isLoading: spendersLoading, isError, refetch } = (0,useFungibleTokenSpenders/* useFungibleTokenSpenders */.D)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    const approveAmount = balance || tokenBalance || amount;
    const [{ type: approveStateType, allowance }, transactionState, approveCallback] = (0,useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S)(token?.address ?? '', approveAmount, spender ?? '', ()=>{
        callback?.();
        refetch();
    }, token?.chainId);
    const approved = (0,react.useMemo)(()=>{
        if ((0,number/* isGte */.sK)(allowance, amount)) return true;
        if (!token?.address || !spenders?.length) return false;
        return spenders.some((x)=>{
            return (0,isSameAddress/* isSameAddress */.W)(x.tokenInfo.address, token.address) && (0,isSameAddress/* isSameAddress */.W)(x.address, spender) && (0,number/* isGte */.sK)((0,number/* rightShift */.pu)(x.amount || 0, x.tokenInfo.decimals || token.decimals), amount);
        });
    }, [
        allowance,
        amount,
        spenders,
        token?.address,
        token?.decimals,
        spender
    ]);
    const loading = spendersLoading || approveStateType === useERC20TokenApproveCallback/* ApproveStateType */.i.UPDATING || transactionState.loadingApprove || transactionState.loading;
    const onApprove = (0,react.useCallback)(async ()=>{
        if (approved || loading) return;
        await approveCallback(true);
    }, [
        approved,
        loading,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    if (isError) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>refetch(),
        ...props.ActionButtonProps,
        children: failedContent ?? t.wallet_load_retry({
            symbol: token.symbol ?? token.name ?? 'Token'
        })
    });
    if (loading || !approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        loading: loading,
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            className: classes.icon,
            address: token.address,
            chainId: token.chainId,
            name: token.name,
            disableDefaultIcon: true
        }),
        endIcon: showHelperToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: t.plugin_wallet_token_infinite_unlock_tips({
                provider: contractName ?? '',
                symbol: token.symbol
            }),
            placement: "top",
            arrow: true,
            leaveDelay: 2000,
            disableInteractive: true,
            disableFocusListener: true,
            disableTouchListener: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HelpOutline, {
                className: classes.helpIcon
            })
        }) : null,
        onClick: onApprove,
        ...props.ActionButtonProps,
        children: infiniteUnlockContent ?? t.plugin_wallet_token_infinite_unlock({
            symbol: token.symbol
        })
    });
    if (approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    (0,esm/* unreachable */.t1)(approved);
}


/***/ }),

/***/ 93558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ FungibleTokenInput)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(30911);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/chipClasses.js
var chipClasses = __webpack_require__(57156);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/UI.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            height: 66,
            padding: theme.spacing(1.25, 1.5),
            [`& > .${inputBaseClasses/* default */.Z.input}`]: {
                paddingTop: `${theme.spacing(2.75)}!important`,
                paddingBottom: '0px !important',
                flex: 2,
                paddingLeft: '0px !important',
                fontSize: 14,
                fontWeight: 400
            }
        },
        title: {
            position: 'absolute',
            top: 10,
            left: 12
        },
        label: {
            fontSize: 13,
            lineHeight: '18px',
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        control: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            rowGap: 4,
            flex: 1
        },
        chip: {
            background: 'transparent',
            cursor: 'pointer',
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        tokenIcon: {
            width: 20,
            height: 20,
            marginRight: '0px !important'
        },
        selectToken: {
            backgroundColor: theme.palette.maskColor.primary,
            color: theme.palette.maskColor.white,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700,
            padding: theme.spacing(0.5, 1),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 99,
            cursor: 'pointer',
            ['&:hover']: {
                backgroundColor: (0,colorManipulator/* lighten */.$n)(theme.palette.maskColor.primary, 0.1)
            }
        },
        maxChip: {
            color: theme.palette.maskColor.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 18,
            padding: '0 3px',
            borderRadius: 4,
            fontSize: 10,
            marginLeft: 4,
            fontWeight: 700,
            lineHeight: '18px',
            cursor: 'pointer',
            background: theme.palette.maskColor.primary,
            '&:hover': {
                background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.8)
            },
            [`& > .${chipClasses/* default */.Z.label}`]: {
                padding: 0
            }
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700,
            marginLeft: 4
        },
        arrowIcon: {
            color: `${theme.palette.maskColor.second}!important`
        },
        chipLabel: {
            maxWidth: 150
        }
    }));
const FungibleTokenInputUI = /*#__PURE__*/ (0,react.memo)(({ label, isNative, token, onSelectToken, onMaxClick, balance, loadingBalance, disableMax = false, disableToken = false, disableBalance = false, ...props })=>{
    const { classes, cx } = useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        fullWidth: true,
        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: cx(classes.label, classes.title),
            children: label
        }),
        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.control,
            justifyContent: disableBalance ? 'flex-end' : undefined,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.label,
                    display: "flex",
                    alignItems: "center",
                    component: "div",
                    children: [
                        !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                isNative ? t.available_balance() : t.balance(),
                                ":",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    component: "span",
                                    children: token && !loadingBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                        value: balance,
                                        decimals: token?.decimals,
                                        significant: token?.decimals,
                                        formatter: formatBalance/* formatBalance */.a
                                    }) : '--'
                                })
                            ]
                        }) : null,
                        !disableMax ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            className: classes.maxChip,
                            label: "MAX",
                            size: "small",
                            onClick: onMaxClick
                        }) : null
                    ]
                }),
                !disableToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    columnGap: "12px",
                    children: token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            size: "small",
                            onClick: onSelectToken,
                            className: classes.chip,
                            classes: {
                                label: classes.chipLabel
                            },
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                className: classes.tokenIcon,
                                address: token.address,
                                name: token.name,
                                chainId: token.chainId,
                                logoURL: token.logoURL
                            }),
                            deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                className: classes.arrowIcon,
                                size: 24
                            }),
                            onDelete: onSelectToken,
                            label: token.symbol
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.selectToken,
                        onClick: onSelectToken,
                        children: [
                            t.select_a_token(),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                                size: 16
                            })
                        ]
                    })
                }) : null
            ]
        }),
        ...props,
        onChange: (ev)=>{
            if (ev.currentTarget.value && !new RegExp(props?.inputProps?.pattern).test(ev.currentTarget.value)) {
                return;
            }
            props.onChange?.(ev);
        },
        className: cx(classes.root, props.className)
    });
});
FungibleTokenInputUI.displayName = 'FungibleTokenInputUI';

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx







const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const FungibleTokenInput = /*#__PURE__*/ (0,react.memo)(({ label, token, disabled, disableMax, disableBalance, disableToken, loadingBalance, onSelectToken, onAmountChange, amount, maxAmount, balance, isAvailableBalance, placeholder = '0.0', maxAmountShares = 1, className })=>{
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const isNative = isAvailableBalance ?? Others.isNativeTokenAddress(token?.address);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT, RE_MATCH_FRACTION_AMOUNT } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token?.decimals}}$`)
        }), // d.ddd...d
    [
        token?.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replaceAll(',', '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInputUI, {
        label: label,
        isNative: isNative,
        token: token,
        onSelectToken: onSelectToken,
        value: amount,
        onChange: onChange,
        className: className,
        inputProps: {
            autoComplete: 'off',
            autoCorrect: 'off',
            title: 'Token Amount',
            inputMode: 'decimal',
            min: 0,
            minLength: MIN_AMOUNT_LENGTH,
            maxLength: MAX_AMOUNT_LENGTH,
            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek,
            spellCheck: false
        },
        placeholder: placeholder,
        onKeyDown: (ev)=>{
            if (ev.key === 'Enter') ev.preventDefault();
        },
        onMaxClick: ()=>{
            if (!token) return;
            const amount = new bignumber/* BigNumber */.O(maxAmount ?? balance).dividedBy(maxAmountShares).decimalPlaces(0, 1);
            const formattedBalance = (0,formatBalance/* formatBalance */.a)(amount, token.decimals, token.decimals, true, false, 4, false);
            onAmountChange(((0,number/* isZero */.Fr)(formattedBalance) ? new bignumber/* BigNumber */.O((0,number/* leftShift */.w5)(amount, token.decimals).toPrecision(2)).toFormat() : formattedBalance) ?? '0');
        },
        balance: balance,
        required: true,
        loadingBalance: loadingBalance,
        disabled: disabled,
        disableMax: disableMax,
        disableBalance: disableBalance,
        disableToken: disableToken
    });
});
FungibleTokenInput.displayName = 'FungibleTokenInput';


/***/ }),

/***/ 28236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Icon)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/name2Image.ts
const DEFAULT_IMAGES = [
    new URL(/* asset import */ __webpack_require__(32665), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(63417), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(74246), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(85663), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(38374), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(51139), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(82567), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(15213), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(52660), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(33605), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(32297), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(53066), __webpack_require__.b).toString()
];
const name2Image = (name)=>{
    if (!name) return DEFAULT_IMAGES[0];
    let sum = 0;
    for(let i = 0; i < name.length; i += 1){
        sum += name.charCodeAt(i);
    }
    return DEFAULT_IMAGES[sum % DEFAULT_IMAGES.length];
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/index.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { size })=>({
        icon: {
            margin: 0,
            borderRadius: '50%',
            color: `${theme.palette.maskColor.dark} !important`,
            backgroundSize: 'cover',
            height: size,
            width: size
        }
    }));
const Icon = /*#__PURE__*/ (0,react.memo)(function Icon(props) {
    const { logoURL, size, color, name, label, className, ...rest } = props;
    const [failed, setFailed] = (0,react.useState)(false);
    const defaultBackgroundImage = name2Image(name);
    const { classes, cx } = useStyles({
        size
    });
    const theme = (0,useTheme/* default */.Z)();
    const showImage = logoURL && !failed;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: cx(classes.icon, className),
        src: logoURL,
        ...rest,
        imgProps: {
            onError: (event)=>{
                setFailed(true);
                rest.imgProps?.onError?.(event);
            },
            ...rest.imgProps
        },
        sx: {
            ...rest.sx,
            backgroundImage: showImage ? undefined : `url("${defaultBackgroundImage}")`,
            backgroundColor: showImage ? color ?? theme.palette.common.white : undefined
        },
        children: label ?? name?.slice(0, 1).toUpperCase() ?? '?'
    });
});
Icon.displayName = 'Icon';


/***/ }),

/***/ 78909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ ImageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const ImageIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ImageIcon({ size = 48, icon, iconFilterColor, ...rest }) {
    const style = iconFilterColor ? {
        filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
        backdropFilter: 'blur(16px)',
        ...rest.style
    } : rest.style;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        ...rest,
        style: style
    });
});


/***/ }),

/***/ 95621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TokenIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61811);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81755);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28236);








const TokenIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TokenIcon(props) {
    const { pluginID = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId: propChainId, address, logoURL, symbol, tokenType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.Fungible, disableDefaultIcon, name, ...rest } = props;
    const { data: token } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleToken */ .c)(pluginID, address, undefined, {
        chainId: propChainId
    });
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)({
        chainId: props.chainId
    });
    const Hub = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Hub */ .h)(pluginID);
    const isNFT = tokenType === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.NonFungible;
    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            'token-icon',
            chainId,
            address,
            isNFT
        ],
        enabled: !logoURL,
        queryFn: async ()=>{
            const logoURLs = isNFT ? (()=>{
                throw new Error("Unreachable: it used to call Hub.getNonFungibleTokenIconURLs, but it's default implementation is throw an error, and not override by any subclass.");
            })() : await Hub.getFungibleTokenIconURLs(chainId, address).catch(()=>[]);
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(logoURLs);
        }
    });
    if (data && disableDefaultIcon) return null;
    const text = token?.name || token?.symbol || symbol || name || '?';
    // `?` prevent to fallback to avatar icon
    const url = logoURL || token?.logoURL || data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Icon */ .J, {
        ...rest,
        logoURL: url,
        name: text
    });
});


/***/ }),

/***/ 24981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ WalletConnectedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(5480);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useRiskWarningApproved.ts



function useRiskWarningApproved(pluginID) {
    const { RiskWarning } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,use_subscription.useSubscription)(RiskWarning?.approved ?? Subscriptions/* FALSE */.Dv);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    button: {
        margin: 0
    }
});
function WalletConnectedBoundary(props) {
    const { children = null, offChain = false, hideRiskWarningConfirmed = false, expectedChainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = useStyles(undefined, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId: chainIdValid } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)(undefined, {
        chainId: chainIdValid
    });
    const approved = useRiskWarningApproved();
    const buttonClass = cx(classes.button, classes.connectWallet);
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonProps,
        children: t.plugin_wallet_connect_a_wallet()
    });
    if (!approved && !hideRiskWarningConfirmed && pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            modals/* WalletRiskWarningModal */.L5.open({
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t.plugin_wallet_confirm_risk_warning()
    });
    if (!(wallet?.owner && chainIdValid === smartPayChainId) && (0,number/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: nativeTokenBalance.loading ? t.plugin_wallet_update_gas_fee() : t.plugin_wallet_no_gas_fee()
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t.plugin_wallet_invalid_network()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78909);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme, props)=>({
        root: {
            position: 'relative',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block'
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${props.badgeIconBorderColor ?? theme.palette.common.white}`,
            borderRadius: '50%'
        }
    }));
function WalletIcon(props) {
    const { size = 24, badgeSize = 14, mainIcon, badgeIcon, badgeIconBorderColor, iconFilterColor } = props;
    const { classes } = useStyles({
        size: badgeSize > size ? badgeSize : size,
        badgeIconBorderColor
    }, {
        props: {
            classes: props.classes
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            mainIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.mainIcon,
                size: size,
                icon: mainIcon,
                iconFilterColor: iconFilterColor
            }) : null,
            badgeIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.badgeIcon,
                size: badgeSize,
                icon: badgeIcon
            }) : null
        ]
    });
}


/***/ }),

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bp: () => (/* binding */ ConnectWalletModal),
/* harmony export */   FT: () => (/* binding */ ShareSelectNetworkModal),
/* harmony export */   G5: () => (/* binding */ ApplicationBoardModal),
/* harmony export */   L5: () => (/* binding */ WalletRiskWarningModal),
/* harmony export */   L9: () => (/* binding */ WalletStatusModal),
/* harmony export */   NB: () => (/* binding */ AddCollectiblesModal),
/* harmony export */   Ps: () => (/* binding */ ApplicationBoardSettingsModal),
/* harmony export */   QH: () => (/* binding */ ConfirmDialog),
/* harmony export */   SK: () => (/* binding */ WalletConnectQRCodeModal),
/* harmony export */   eX: () => (/* binding */ PersonaSelectPanelModal),
/* harmony export */   eg: () => (/* binding */ TransactionSnackbar),
/* harmony export */   eq: () => (/* binding */ SelectGasSettingsModal),
/* harmony export */   fU: () => (/* binding */ GasSettingModal),
/* harmony export */   ge: () => (/* binding */ SelectProviderModal),
/* harmony export */   gw: () => (/* binding */ SelectFungibleTokenModal),
/* harmony export */   l$: () => (/* binding */ TransactionConfirmModal),
/* harmony export */   rV: () => (/* binding */ SelectNonFungibleContractModal),
/* harmony export */   sm: () => (/* binding */ ConfirmModal),
/* harmony export */   tN: () => (/* binding */ LeavePageConfirmModal)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62384);

const WalletConnectQRCodeModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectProviderModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletStatusModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const WalletRiskWarningModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConnectWalletModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const LeavePageConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ApplicationBoardModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ApplicationBoardSettingsModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const GasSettingModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const TransactionConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const TransactionSnackbar = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConfirmModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ConfirmDialog = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectNonFungibleContractModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectGasSettingsModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const AddCollectiblesModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const SelectFungibleTokenModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const PersonaSelectPanelModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();
const ShareSelectNetworkModal = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SingletonModal */ .G();



/***/ }),

/***/ 86244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 22103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ FormattedBalance)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10149);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29763);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    }));
function FormattedBalance(props) {
    const { value, decimals, significant, symbol, minimumBalance, formatter = (value)=>value } = props;
    const valueInt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber */ .O(value ?? '0').toFixed(0);
    let formatted = formatter(valueInt, decimals, significant);
    if (minimumBalance && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isZero */ .Fr)(formatted) && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isLessThan */ .FI)(valueInt, minimumBalance)) {
        // it's a BigNumber so it's ok
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        formatted = '<' + formatter(minimumBalance, decimals, significant).toString();
    }
    const { classes } = useStyles(undefined, {
        props
    });
    if (symbol) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.balance,
                children: String(formatted)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes?.symbol,
                children: symbol
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: String(formatted)
    });
}


/***/ }),

/***/ 1496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ useOpenShareTxDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36447);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90138);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62322);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);
/* harmony import */ var _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25127);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme)=>({
        content: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        icon: {
            fontSize: 64,
            width: 64,
            height: 64
        },
        link: {
            marginTop: theme.spacing(0.5)
        },
        primary: {
            fontSize: 18,
            marginTop: theme.spacing(1)
        },
        secondary: {}
    }));
// TODO Expose onShare until we have share API added our runtime
const ShareTransaction = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ message, content, hash })=>{
    const { classes } = useStyles();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)();
    const link = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .ExplorerResolver */ .Xz.transactionLink(chainId, hash);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.content,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.icon
            }),
            message ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.primary,
                color: "textPrimary",
                variant: "subtitle1",
                children: message
            }) : null,
            content ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.secondary,
                color: "textSecondary",
                children: content
            }) : null,
            link ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    className: classes.link,
                    href: link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: t.share_dialog_view_on_explorer()
                })
            }) : null
        ]
    });
});
function useOpenShareTxDialog() {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({ title, message, content, hash, buttonLabel, onShare })=>{
        const confirmed = await _UI_modals_index_js__WEBPACK_IMPORTED_MODULE_9__/* .ConfirmModal */ .sm.openAndWaitForClose({
            title: title ?? t.share_dialog_transaction(),
            content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShareTransaction, {
                message: message ?? t.share_dialog_transaction_confirmed(),
                content: content,
                hash: hash
            }),
            confirmLabel: onShare ? buttonLabel ?? t.dialog_share() : t.dialog_dismiss()
        });
        if (confirmed) onShare?.();
    }, [
        t
    ]);
}


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

/***/ 80835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mq: () => (/* binding */ useDialogStacking),
/* harmony export */   tE: () => (/* binding */ useDialogStackActor),
/* harmony export */   yu: () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89601);



const DialogStackingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    stack: [],
    push: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    pop: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    setParent: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    hasGlobalBackdrop: false
});
DialogStackingContext.displayName = 'DialogStackingContext';
const DialogHierarchyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
DialogHierarchyContext.displayName = 'DialogHierarchyContext';
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps, TrackDialogHierarchy } = useDialogStackConsumer(open)
 *     return <TrackDialogHierarchy>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </TrackDialogHierarchy>
 * }
 */ function useDialogStackActor(open) {
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('' + Math.random()).current;
    const { pop, push, stack, setParent, hasGlobalBackdrop } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
    // children's useEffect will run before parent's useEffect.
    // when the hierarchy is A > B and they are both open,
    // the stack will be ["B", "A"] (B pushed into the stack first.)
    // we need to notify the context the react component tree hierarchy to order them correctly.
    const parentID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogHierarchyContext);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>setParent(selfID, parentID), [
        parentID
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        open ? push(selfID) : pop(selfID);
        return ()=>pop(selfID);
    }, [
        open
    ]);
    const TrackDialogHierarchy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null).current ??= function TrackDialogHierarchy({ children }) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogHierarchyContext.Provider, {
            value: selfID,
            children: children
        });
    };
    const returnVal = {
        shouldReplaceExitWithBack: stack.length > 1,
        extraProps: {
            open
        },
        TrackDialogHierarchy
    };
    if (hasGlobalBackdrop) returnVal.extraProps.hideBackdrop = true;
    if (stack.length > 1) returnVal.extraProps.transitionDuration = 0;
    if (!open) return returnVal;
    if (stack.at(-1) !== selfID) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            hidden: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 *    <Dialog3></Dialog3>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    const [stack, setStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hierarchy, setHierarchy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const sortedStack = sortStackByHierarchy(hierarchy, stack);
        return {
            hasGlobalBackdrop: props.hasGlobalBackdrop || false,
            stack: sortedStack,
            // Note: the following methods MUST NOT use stack or hierarchy out of the useState callback.
            setParent (child, parent) {
                if (!parent) return lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
                setHierarchy((hierarchy)=>{
                    if (hierarchy[parent]?.has(child)) return hierarchy;
                    const newSet = new Set(hierarchy[parent] || []);
                    newSet.add(child);
                    return {
                        ...hierarchy,
                        [parent]: newSet
                    };
                });
                return ()=>{
                    setHierarchy((hierarchy)=>{
                        const newSet = new Set(hierarchy[parent]);
                        newSet.delete(child);
                        return {
                            ...hierarchy,
                            [parent]: newSet
                        };
                    });
                };
            },
            pop (id) {
                setStack((stack)=>stack.includes(id) ? stack.filter((x)=>x !== id) : stack);
            },
            push (id) {
                setStack((stack)=>stack.includes(id) ? stack : stack.concat(id));
            }
        };
    }, [
        stack,
        hierarchy,
        props.hasGlobalBackdrop
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogStackingContext.Provider, {
        value: context,
        children: props.children
    });
}
function useDialogStacking() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
}
function sortStackByHierarchy(hierarchy, stack) {
    if (stack.length <= 1) return stack;
    const last = stack.at(-1);
    const children = hierarchy[last];
    if (!children?.size) return stack;
    for (const child of children){
        if (stack.includes(child)) return sortStackByHierarchy(hierarchy, [
            last
        ].concat(stack.slice(0, -1)));
    }
    return stack;
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

/***/ 93349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ makeTypedMessageImage),
/* harmony export */   c: () => (/* binding */ isTypedMessageImage)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/**
 * A single image
 * TODO: it should be serializable but still not decided how to do that yet.
 */ const isTypedMessageImage = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size?.width,
        height: size?.height,
        meta
    };
}


/***/ }),

/***/ 61111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ isTypedMessagePromise),
/* harmony export */   N: () => (/* binding */ makeTypedMessagePromise)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** What to display when the message is not ready. */ const isTypedMessagePromise = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('promise');
function makeTypedMessagePromise(promise, alt) {
    const x = {
        type: 'promise',
        serializable: false,
        promise: getPromiseWithStatus(promise),
        alt,
        meta: undefined
    };
    return x;
}
const seen = new WeakMap();
function getPromiseWithStatus(promise) {
    // let's assume it already handle the status update
    if ('status' in promise) return promise;
    if (seen.has(promise)) return seen.get(promise);
    const _ = Promise.resolve(promise);
    Object.defineProperty(_, 'status', {
        configurable: true,
        value: 'pending'
    });
    _.then((value)=>{
        Object.defineProperties(_, {
            status: {
                value: 'fulfilled'
            },
            value: {
                value
            }
        });
    }, (error)=>{
        Object.defineProperties(_, {
            status: {
                value: 'rejected'
            },
            reason: {
                value: error
            }
        });
    });
    seen.set(promise, _);
    return _;
}


/***/ }),

/***/ 86025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ makeTypedMessageText),
/* harmony export */   Po: () => (/* binding */ isTypedMessageTextV1),
/* harmony export */   Rz: () => (/* binding */ isTypedMessageText)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/** A text message */ const isTypedMessageTextV1 = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('text', 1);
const isTypedMessageText = isTypedMessageTextV1;
function makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}


/***/ }),

/***/ 17425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zw: () => (/* binding */ makeTypedMessageTuple),
/* harmony export */   bZ: () => (/* binding */ isTypedMessageTuple),
/* harmony export */   h6: () => (/* binding */ makeTypedMessageSerializableTupleFromList),
/* harmony export */   kT: () => (/* binding */ makeTypedMessageTupleSerializable),
/* harmony export */   n_: () => (/* binding */ makeTypedMessageTupleFromList),
/* harmony export */   qT: () => (/* binding */ isTypedMessageTupleSerializable)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41840);
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);


/** Multiple TypedMessages (ordered) */ function isTypedMessageTuple(x) {
    return x.type === 'tuple';
}
const isTypedMessageTupleSerializable = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .composeEvery */ .mo)(isTypedMessageTuple, _utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}


/***/ }),

/***/ 76350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ isTypedMessageMaskPayload),
/* harmony export */   J: () => (/* binding */ makeTypedMessageMaskPayload)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);

/**
 * This TypedMessage represents an encrypted TypedMessage.
 */ const isTypedMessageMaskPayload = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('x-mask-payload');
function makeTypedMessageMaskPayload(message, meta) {
    return {
        type: 'x-mask-payload',
        message,
        meta
    };
}


/***/ }),

/***/ 43458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ makeTypedMessageAnchor),
/* harmony export */   b: () => (/* binding */ isTypedMessageAnchor)
/* harmony export */ });
/* harmony import */ var _utils_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31072);
if (964 != __webpack_require__.j) {
	/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
}


/** It represents a single link. */ /** The message that should be displayed as a decorate after the link. */ const isTypedMessageAnchor = (0,_utils_internal_js__WEBPACK_IMPORTED_MODULE_0__/* .createIsType */ .uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content, postImage, meta) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: (0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeTypedMessageText */ .P)(`[${content}](${href})`, meta),
        postImage,
        meta
    };
}


/***/ }),

/***/ 73561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ extractTextFromTypedMessage),
/* harmony export */   j: () => (/* binding */ extractImageFromTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
if (964 != __webpack_require__.j) {
	/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93349);
}
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43458);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30688);




/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message, options) {
    if (!message) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
    const text = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageText */ .Rz)(message)) text.push(message.content);
        else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageAnchor */ .b)(message)) {
            text.push(message.content);
            if (options?.linkAsText) text.push(`(${message.href})`);
        } else (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    if (text.length) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Some)(text.join(' '));
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
}
function extractImageFromTypedMessage(message) {
    if (!message) return [];
    const image = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isTypedMessageImage */ .c)(message)) return void image.push(message.image);
        return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    return image;
}


/***/ }),

/***/ 41840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hz: () => (/* binding */ isTypedMessageEqual),
/* harmony export */   c3: () => (/* binding */ isNonSerializableTypedMessageWithAlt),
/* harmony export */   fV: () => (/* binding */ isSerializableTypedMessage)
/* harmony export */ });
if (964 != __webpack_require__.j) {
	/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85094);
}


function isNonSerializableTypedMessageWithAlt(x) {
    const y = x;
    if (y.serializable !== false) return false;
    if (!y.alt) return false;
    return isSerializableTypedMessage(y.alt);
}
function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    return isNonSerializableTypedMessageWithAlt(x);
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    // perform a deep equal
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(message1, message2);
}


/***/ }),

/***/ 31072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vm: () => (/* binding */ composeSome),
/* harmony export */   mo: () => (/* binding */ composeEvery),
/* harmony export */   uO: () => (/* binding */ createIsType)
/* harmony export */ });
/** @internal */ function createIsType(x, version) {
    return (y)=>{
        if (version !== undefined && y.version !== version) return false;
        return y.type === x;
    };
}
/** @internal */ function composeSome(...fns) {
    return (...args)=>fns.some((f)=>f(...args));
}
/** @internal */ function composeEvery(...fns) {
    return (...args)=>fns.every((f)=>f(...args));
}


/***/ }),

/***/ 30688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ forEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17425);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61111);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41840);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76350);



function forEachTypedMessageChild(node, visitor) {
    let stop;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        for (const each of node.items){
            stop = visitor(each);
            if (stop) return;
        }
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessagePromise */ .K)(node)) {
        // if Promise has a resolved value, we ignore it's alt.
        if ('value' in node.promise) visitor(node.promise.value);
        else if (node.alt) visitor(node.alt);
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$)(node)) {
        visitor(node.message);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        visitor(node.alt);
    }
}


/***/ }),

/***/ 44909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useChainIdValid(pluginID, expectedChainId) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return (!account || Others.chainResolver.isValidChainId?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 54246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useFungibleToken)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92358);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65327);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72889);







function useFungibleToken(pluginID, address, fallbackToken, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworks */ .e)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: true,
        queryKey: [
            'fungible-token',
            pluginID,
            address,
            chainId,
            options
        ],
        queryFn: async ()=>{
            if (!address) return;
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .attemptUntil */ .C)([
                async ()=>{
                    if (pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM || !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .isNativeTokenAddress */ .qw)(address) || !chainId) return;
                    const network = networks.find((x)=>x.chainId === chainId);
                    return network?.nativeCurrency;
                },
                async ()=>{
                    const token = await Hub.getFungibleToken(address, {
                        chainId
                    });
                    if (!token) return;
                    const logoURL = token.logoURL ?? fallbackToken?.logoURL;
                    const symbol = token.symbol === 'UNKNOWN' || !token.symbol ? fallbackToken?.symbol : token.symbol;
                    return {
                        ...token,
                        symbol,
                        logoURL
                    };
                }
            ], fallbackToken);
        }
    });
}


/***/ }),

/***/ 88572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96732);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83977);







function useFungibleTokenBalance(pluginID, address, options, /** Allow to control the request */ enabled = true) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        ...options
    });
    const { BalanceNotifier } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(pluginID);
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled,
        queryKey: [
            'fungible-token',
            'balance',
            pluginID,
            account,
            address,
            options
        ],
        queryFn: async ()=>{
            if (!address) return '0';
            return Web3.getFungibleTokenBalance(address, undefined, options);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return BalanceNotifier?.emitter.on('update', (ev)=>{
            if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .W)(account, ev.account)) {
                result.refetch();
            }
        }) ?? lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    }, [
        account,
        result.refetch,
        BalanceNotifier
    ]);
    return result;
}


/***/ }),

/***/ 54165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useFungibleTokenSpenders)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);



function useFungibleTokenSpenders(pluginID, options) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'fungible-tokens',
            'spenders',
            chainId,
            account
        ],
        enabled: true,
        queryFn: async ()=>Hub.getFungibleTokenSpenders(chainId, account)
    });
}


/***/ }),

/***/ 5480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96732);



function useNativeTokenBalance(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        ...options
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return Web3.getNativeTokenBalance();
    }, [
        account,
        Web3
    ]);
}


/***/ }),

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared network descriptor
 * @param expectedPluginID
 * @param expectedChainIdOrNetworkTypeOrID
 * @returns
 */ function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { networkType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Networks */ .Rm)(pluginID).find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes(expectedChainIdOrNetworkTypeOrID ?? networkType ?? ''));
}


/***/ }),

/***/ 72889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNetworks)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);





/**
 * Bulletin networks and custom networks.
 * There could be duplicate chian id among them, because that's allow to custom networks.
 */ function useNetworks(pluginID, uniqChainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networks ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const list = networks.filter((x)=>x.network === 'mainnet' || x.isCustomized);
        return uniqChainId ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(list, (x)=>x.chainId) : list;
    }, [
        networks,
        uniqChainId
    ]);
}


/***/ }),

/***/ 98170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWallets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41238);




/**
 * Use the currently selected wallet.
 * @param pluginID
 * @returns
 */ function useWallet(pluginID, providerType) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    const wallets = (0,_useWallets_js__WEBPACK_IMPORTED_MODULE_2__/* .useWallets */ .r)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return account ? wallets.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W)?.(x.address, account)) ?? null : null;
    }, [
        account,
        wallets
    ]);
}


/***/ }),

/***/ 41238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44475);





function useWallets() {
    // We got stored Mask wallets only.
    const wallets = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__/* .usePersistSubscription */ .i)('@@mask-wallets', _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Providers */ .Cl[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType */ .lP.MaskWallet].subscription.wallets ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            ...wallets
        ].map((w)=>{
            // Could be serialized by react query persist client
            if (w.createdAt instanceof Date && w.updatedAt instanceof Date) return w;
            return {
                ...w,
                createdAt: new Date(w.createdAt),
                updatedAt: new Date(w.updatedAt)
            };
        }).sort((a, b)=>{
            if (a.owner && !b.owner) return 1;
            const timestampA = a.createdAt.getTime();
            const timestampB = b.createdAt.getTime();
            if (timestampA - timestampB > 10000) {
                return 1;
            } else if (timestampB - timestampA > 10000) {
                return -1;
            }
            const numA = a.name.split('Wallet ')[1];
            const numB = b.name.split('Wallet ')[1];
            try {
                if (!numA && numB && !Number.isNaN(numB)) return 1;
                if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
                    return Number(numA) > Number(numB) ? 1 : -1;
                } else {
                    return numB.length - numA.length;
                }
            } catch  {
                return 0;
            }
        });
    }, [
        wallets
    ]);
}


/***/ }),

/***/ 96732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useWeb3Connection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Connection(expectedPluginID, options) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3All */ .Ph.use(pluginID, options), [
        pluginID,
        JSON.stringify(options)
    ]);
}


/***/ }),

/***/ 61811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useWeb3Hub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Hub(expectedPluginID, options) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .HubAll */ .AB.use(pluginID, options), [
        pluginID,
        JSON.stringify(options)
    ]);
}


/***/ }),

/***/ 95685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useContract)
/* harmony export */ });
/* unused harmony export useContracts */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95739);




/**
 * Create a contract which will forward its all transactions to the
 * EthereumService in the background page and decode the result of calls automatically
 * @param address
 * @param ABI
 * @param chainId
 */ function useContract(chainId, address = '', ABI = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .createContract */ .O)(_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.getWeb3({
            chainId
        }), address, ABI), [
        address,
        ABI
    ]);
}
/**
 * Create many contracts with same ABI
 * @param listOfAddress
 * @param ABI
 * @param chainId
 */ function useContracts(chainId, listOfAddress = EMPTY_LIST, ABI = EMPTY_LIST) {
    return useMemo(()=>listOfAddress.map((address)=>createContract(Web3.getWeb3({
                chainId
            }), address, ABI)).filter(Boolean), [
        JSON.stringify(listOfAddress),
        ABI
    ]);
}


/***/ }),

/***/ 61918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useERC20TokenAllowance(address, spender, options) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'erc20-allowance',
            address,
            account,
            spender
        ],
        queryFn: async ()=>{
            if (!account || !address || !spender) return '0';
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Contract */ .CH.getERC20Contract(address, {
                chainId
            })?.methods.allowance(account, spender).call({
                from: account
            });
        },
        refetchInterval: 30 * 1000
    });
}


/***/ }),

/***/ 13414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useERC20TokenApproveCallback),
/* harmony export */   i: () => (/* binding */ ApproveStateType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82897);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88572);
/* harmony import */ var _useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61918);







const MaxUint256 = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender, callback, tokenChainId) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    // read the approved information from the chain
    const { data: balance = '0', isLoading: loadingBalance, error: errorBalance, refetch: revalidateBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenBalance */ .V)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, address, {
        chainId: tokenChainId
    });
    const { data: allowance = '0', isLoading: loadingAllowance, error: errorAllowance, refetch: revalidateAllowance } = (0,_useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__/* .useERC20TokenAllowance */ .n)(address, spender, {
        chainId: tokenChainId
    });
    // the computed approve state
    const approveStateType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isLessThan */ .FI)(allowance, amount) || allowance === amount && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance
    ]);
    const [state, approveCallback] = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async (useExact = false, isRevoke = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED && !isRevoke) {
            return;
        }
        if (tokenChainId !== chainId) {
            await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.switchChain?.(tokenChainId ?? chainId);
        }
        const hash = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.approveFungibleToken(address, spender, useExact ? amount : MaxUint256, {
            chainId: tokenChainId
        });
        const receipt = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.confirmTransaction(hash, {
            chainId: tokenChainId,
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (receipt) {
            callback?.();
            revalidateBalance();
            revalidateAllowance();
        }
    }, [
        account,
        amount,
        spender,
        address,
        approveStateType,
        tokenChainId,
        chainId
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
    }, [
        revalidateBalance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        {
            ...state,
            loading: loadingAllowance || loadingBalance || state.loading,
            loadingApprove: state.loading
        },
        approveCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 36447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done'));

/***/ }),

/***/ 69216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'OpenInNew'));

/***/ }),

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58750);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .xB, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

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

/***/ 32665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/32cc6126716b1c948521.svg";

/***/ }),

/***/ 33605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2ba762c78bff78c550fb.svg";

/***/ }),

/***/ 32297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/db4a425a3e40a8852fa3.svg";

/***/ }),

/***/ 53066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3e222d37b7dad4bdab7e.svg";

/***/ }),

/***/ 63417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0db610b2e2f8b0e3f140.svg";

/***/ }),

/***/ 74246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/44a2ee9660f3051e559b.svg";

/***/ }),

/***/ 85663:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/17413f9e89ac1d796f8b.svg";

/***/ }),

/***/ 38374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/99b296aa8c69cb9a9ac3.svg";

/***/ }),

/***/ 51139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d9090da8ea2f06ba6df9.svg";

/***/ }),

/***/ 82567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6f3a8ca61f969207c1e3.svg";

/***/ }),

/***/ 15213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ca770caade4e39fafbc5.svg";

/***/ }),

/***/ 52660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8a27a1699f5026bcded9.svg";

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


/***/ })

}]);
//# sourceMappingURL=chunk.6941.js.map