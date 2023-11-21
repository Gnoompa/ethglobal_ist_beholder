"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8813],{

/***/ 8386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ NormalHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99116);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7387);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8311);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81430);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            background: theme.palette.maskColor.modalTitleBg
        },
        header: {
            padding: theme.spacing(2),
            lineHeight: 0,
            display: 'grid',
            gridTemplateColumns: '24px auto 24px',
            alignItems: 'center',
            flexShrink: 0
        },
        icon: {
            fontSize: 24,
            cursor: 'pointer',
            color: theme.palette.maskColor.main
        },
        title: {
            fontSize: 18,
            lineHeight: '22px',
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            minHeight: 22,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            gridArea: '1 / 2'
        },
        logo: {
            width: 96,
            height: 30
        }
    }));
function canNavBack() {
    try {
        return history.length !== 1 || !!new URLSearchParams(location.search).get('goBack');
    } catch  {}
    return false;
}
const NormalHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NormalHeader(props) {
    const { onClose, tabList } = props;
    const { classes } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .s0)();
    const { title, extension, customBackHandler } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_index_js__WEBPACK_IMPORTED_MODULE_4__/* .PageTitleContext */ .I);
    const canBack = canNavBack();
    const showTitle = title !== undefined;
    const handleBack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>navigate(-1), []);
    const { hasNavigator } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useOutletContext */ .bx)();
    const leftAction = hasNavigator ? null : canBack ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.Comeback, {
        className: classes.icon,
        onClick: customBackHandler ?? handleBack
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.Close, {
        className: classes.icon,
        onClick: onClose
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.header,
                children: showTitle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        leftAction,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: classes.title,
                            children: title
                        }),
                        extension
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.Mask, {
                    className: classes.logo
                })
            }),
            tabList
        ]
    });
});


/***/ }),

/***/ 5164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ AccountRender)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var Site_types = __webpack_require__(77953);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Personas/components/AccountAvatar/index.tsx
var AccountAvatar = __webpack_require__(150);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/ContactCard/SocialAccount/index.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        iconBlack: {
            color: theme.palette.maskColor.main,
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            width: 30,
            height: 30,
            alignItems: 'center'
        },
        userId: {
            display: 'flex',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '18px'
        }
    }));
const formatUserId = (userId)=>{
    if (userId.length > 7) {
        return `${userId.slice(0, 7)}...`;
    }
    return userId;
};
const SocialAccount = /*#__PURE__*/ (0,react.memo)(function SocialAccount({ avatar, userId, site }) {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        width: "156px",
        padding: "4px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountAvatar/* AccountAvatar */.M, {
                avatar: avatar,
                network: site,
                isValid: true,
                classes: {
                    avatar: classes.avatar,
                    container: classes.avatar
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.userId,
                children: [
                    `@${formatUserId(userId)}`,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        underline: "none",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: `https://${site}/${userId}`,
                        className: classes.iconBlack,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            size: 16
                        })
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/pages/Friends/common.tsx
var common = __webpack_require__(70082);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/ContactCard/Account/index.tsx









const Account_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        iconBlack: {
            color: theme.palette.maskColor.main,
            display: 'flex',
            alignItems: 'center'
        },
        userId: {
            display: 'flex',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '18px'
        }
    }));
const Account = /*#__PURE__*/ (0,react.memo)(function Account({ userId, platform }) {
    const { classes } = Account_useStyles();
    const Icon = common/* PlatformIconMap */.Hm[platform];
    if (!userId) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        width: "156px",
        padding: "4px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                size: 30
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.userId,
                children: [
                    platform === types/* NextIDPlatform */.V.Ethereum ? (0,formatter/* formatEthereumAddress */.j8)(userId, 4) : formatUserId(userId),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        underline: "none",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: common/* PlatformUrlMap */.qy[platform] + userId,
                        className: classes.iconBlack,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            size: 16
                        })
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Detail/Account/index.tsx








const Detail_Account_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            width: '119px',
            height: '86px',
            borderRadius: '8px',
            ':hover': {
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)'
            }
        },
        iconBlack: {
            color: theme.palette.maskColor.main,
            display: 'flex',
            alignItems: 'center'
        },
        userId: {
            display: 'flex',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '16px'
        }
    }));
const Account_Account = /*#__PURE__*/ (0,react.memo)(function Account({ userId, platform }) {
    const { classes } = Detail_Account_useStyles();
    if (!userId) return null;
    const Icon = common/* PlatformIconMap */.Hm[platform];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                size: 40
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.userId,
                children: [
                    platform === types/* NextIDPlatform */.V.Ethereum ? (0,formatter/* formatEthereumAddress */.j8)(userId, 4) : (0,personas/* formatPersonaName */.rY)(userId),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        underline: "none",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: common/* PlatformUrlMap */.qy[platform] + userId,
                        className: classes.iconBlack,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            size: 16
                        })
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Detail/SocialAccount/index.tsx





const SocialAccount_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            width: '119px',
            height: '86px',
            borderRadius: '8px',
            ':hover': {
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)'
            }
        },
        iconBlack: {
            color: theme.palette.maskColor.main,
            display: 'flex',
            alignItems: 'center'
        },
        userId: {
            display: 'flex',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '16px'
        }
    }));
const SocialAccount_SocialAccount = /*#__PURE__*/ (0,react.memo)(function SocialAccount({ avatar, userId, site }) {
    const { classes } = SocialAccount_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        underline: "none",
        target: "_blank",
        rel: "noopener noreferrer",
        href: `https://${site}/${userId}`,
        className: classes.iconBlack,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountAvatar/* AccountAvatar */.M, {
                    avatar: avatar,
                    network: site,
                    isValid: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.userId,
                    children: `@${userId}`
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/AccountRender/index.tsx








const AccountRender = /*#__PURE__*/ (0,react.memo)(function AccountRender({ profile, detail, avatar }) {
    switch(profile.platform){
        case types/* NextIDPlatform */.V.Twitter:
        case Site_types/* EnhanceableSite */.J.Twitter:
            return detail ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccount_SocialAccount, {
                avatar: avatar,
                userId: profile.name ?? profile.identity,
                site: Site_types/* EnhanceableSite */.J.Twitter
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccount, {
                avatar: avatar,
                userId: profile.name ?? profile.identity,
                site: Site_types/* EnhanceableSite */.J.Twitter
            });
        case types/* NextIDPlatform */.V.ENS:
        case types/* NextIDPlatform */.V.Ethereum:
        case types/* NextIDPlatform */.V.GitHub:
        case types/* NextIDPlatform */.V.SpaceId:
        case types/* NextIDPlatform */.V.LENS:
        case types/* NextIDPlatform */.V.Unstoppable:
        case types/* NextIDPlatform */.V.Farcaster:
        case types/* NextIDPlatform */.V.Keybase:
            const _userID = profile.platform === types/* NextIDPlatform */.V.ENS || profile.platform === types/* NextIDPlatform */.V.Keybase ? profile.name : profile.identity;
            return detail ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Account_Account, {
                userId: _userID,
                platform: profile.platform
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                userId: _userID,
                platform: profile.platform
            });
        case types/* NextIDPlatform */.V.CyberConnect:
        case types/* NextIDPlatform */.V.Bit:
        case types/* NextIDPlatform */.V.SYBIL:
        case types/* NextIDPlatform */.V.EthLeaderboard:
        case types/* NextIDPlatform */.V.REDDIT:
        case types/* NextIDPlatform */.V.RSS3:
        case types/* NextIDPlatform */.V.NextID:
            return null;
        case Site_types/* EnhanceableSite */.J.Facebook:
            return detail ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccount_SocialAccount, {
                avatar: avatar,
                userId: profile.name ?? profile.identity,
                site: Site_types/* EnhanceableSite */.J.Facebook
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccount, {
                avatar: avatar,
                userId: profile.name ?? profile.identity,
                site: Site_types/* EnhanceableSite */.J.Facebook
            });
        case Site_types/* EnhanceableSite */.J.Instagram:
            return detail ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccount_SocialAccount, {
                avatar: avatar,
                userId: profile.name ?? profile.identity,
                site: Site_types/* EnhanceableSite */.J.Instagram
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialAccount, {
                avatar: avatar,
                userId: profile.name ?? profile.identity,
                site: Site_types/* EnhanceableSite */.J.Instagram
            });
        default:
            (0,esm/* safeUnreachable */.P)(profile.platform);
            return null;
    }
});


/***/ }),

/***/ 70082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hm: () => (/* binding */ PlatformIconMap),
/* harmony export */   Ob: () => (/* binding */ PlatformSort),
/* harmony export */   op: () => (/* binding */ UnsupportedPlatforms),
/* harmony export */   qy: () => (/* binding */ PlatformUrlMap)
/* harmony export */ });
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95766);


const PlatformUrlMap = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.ENS]: 'https://app.ens.domains/name/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Unstoppable]: 'https://ud.me/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.GitHub]: 'https://github.com/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.SpaceId]: 'https://bscscan.com/address/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Farcaster]: 'https://warpcast.com/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.LENS]: 'https://lenster.xyz/u/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Ethereum]: 'https://etherscan.io/address/',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Keybase]: 'https://keybase.io/'
};
const PlatformIconMap = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.LENS]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.Lens,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Ethereum]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.ETH,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.ENS]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.ENS,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.GitHub]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.GitHub,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Farcaster]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.Farcaster,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.SpaceId]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.SpaceId,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Unstoppable]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.Unstoppable,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Keybase]: _masknet_icons__WEBPACK_IMPORTED_MODULE_1__.Keybase
};
const UnsupportedPlatforms = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Bit,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.CyberConnect,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.REDDIT,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.SYBIL,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.EthLeaderboard,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.NextID
];
const PlatformSort = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Twitter]: 0,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.GitHub]: 1,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Ethereum]: 2,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.ENS]: 3,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.LENS]: 4,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Keybase]: 5,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Farcaster]: 6,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.SpaceId]: 7,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Unstoppable]: 8,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.RSS3]: 9,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.REDDIT]: 10,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.SYBIL]: 11,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.EthLeaderboard]: 12,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Bit]: 13,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.CyberConnect]: 14,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.NextID]: 15
};


/***/ }),

/***/ 35145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Friends)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.2_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(43270);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/relativeRouteOf.ts
var relativeRouteOf = __webpack_require__(84582);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/mask/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(35396);
// EXTERNAL MODULE: ./packages/mask/popups/components/ActionModal/ActionModalContext.tsx
var ActionModalContext = __webpack_require__(5130);
// EXTERNAL MODULE: ./packages/mask/popups/components/NormalHeader/index.tsx
var NormalHeader = __webpack_require__(8386);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useCurrentPersona.ts
var useCurrentPersona = __webpack_require__(18937);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(40262);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Friends/AccountRender/index.tsx + 4 modules
var AccountRender = __webpack_require__(5164);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/RestorableScroll/index.tsx
var RestorableScroll = __webpack_require__(64472);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Detail/ConnectAccounts/index.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        accounts: {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
            padding: '16px',
            gap: '12px',
            gridTemplateColumns: 'repeat(3, 119px)',
            overflowY: 'auto',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const ConnectedAccounts = /*#__PURE__*/ (0,react.memo)(function ConnectedAccounts({ profiles, localProfile, avatar }) {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScroll */.g, {
        scrollKey: "connected_accounts",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.accounts,
            children: profiles.map((profile)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountRender/* AccountRender */.w, {
                    profile: profile,
                    detail: true,
                    avatar: localProfile?.userId === (profile.name ?? profile.identity) ? avatar : ''
                }, profile.identity);
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Detail/UI.tsx











const UI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            maxHeight: '100vh',
            height: '100%',
            overflowY: 'hidden'
        },
        header: {
            padding: theme.spacing(2),
            lineHeight: 0,
            display: 'grid',
            gridTemplateColumns: '24px auto 24px',
            alignItems: 'center',
            flexShrink: 0
        },
        profileInfo: {
            width: '100%',
            background: theme.palette.maskColor.modalTitleBg
        },
        back: {
            fontSize: 24,
            cursor: 'pointer',
            color: theme.palette.maskColor.main,
            border: 'none',
            background: 'none',
            padding: 0,
            margin: 0,
            outline: 'none'
        },
        info: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        },
        icon: {
            width: 12,
            height: 12,
            fontSize: 12,
            color: theme.palette.maskColor.second
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
        emptyContainer: {
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        }
    }));
const FriendsDetailUI = /*#__PURE__*/ (0,react.memo)(function FriendsDetailUI({ avatar, nextId, publicKey, profiles, isLocal, onDelete, deleting, localProfile }) {
    const { classes } = UI_useStyles();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const handleBack = (0,react.useCallback)(()=>navigate(-1), []);
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const theme = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.profileInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: handleBack,
                                type: "submit",
                                className: classes.back,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Comeback, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {}),
                            isLocal ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: onDelete,
                                type: "submit",
                                className: classes.back,
                                disabled: deleting,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Delete, {})
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.info,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                children: avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    src: avatar,
                                    style: {
                                        width: 60,
                                        height: 60
                                    }
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.NextIdAvatar, {
                                    size: 60,
                                    style: {
                                        borderRadius: 99
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 18,
                                fontWeight: "700",
                                lineHeight: "22px",
                                marginTop: "8px",
                                children: publicKey ? (0,personas/* formatPersonaFingerprint */.Nb)(publicKey) : null
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                fontSize: 12,
                                color: theme.palette.maskColor.second,
                                lineHeight: "16px",
                                display: "flex",
                                alignItems: "center",
                                columnGap: "2px",
                                children: [
                                    (0,personas/* formatPersonaFingerprint */.Nb)(nextId, 4),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                        text: nextId,
                                        size: 12,
                                        className: classes.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        underline: "none",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: `https://web3.bio/${nextId}`,
                                        className: classes.icon,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 12
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            profiles.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedAccounts, {
                profiles: profiles,
                localProfile: localProfile,
                avatar: avatar
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.emptyContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                    className: classes.empty,
                    children: t.popups_encrypted_friends_no_associated_accounts()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useMutation.mjs
var useMutation = __webpack_require__(22144);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Detail/index.tsx









const FriendsDetail = /*#__PURE__*/ (0,react.memo)(function FriendsDetail() {
    const location = (0,react_router_dist/* useLocation */.TH)();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const { avatar, profiles, nextId, publicKey, isLocal, localProfile } = location.state;
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const [deleted, setDeleted] = (0,react.useState)(false);
    const currentPersona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    const rawPublicKey = currentPersona?.identifier.rawPublicKey;
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    const handleDelete = (0,react.useCallback)(async ()=>{
        const personaIdentifier = ec_key/* ECKeyIdentifier */.o.fromHexPublicKeyK256(nextId).expect(`${nextId} should be a valid hex public key in k256`);
        if (currentPersona) await service/* default */.ZP.Identity.deletePersonaRelation(personaIdentifier, currentPersona?.identifier);
        await service/* default */.ZP.Identity.deletePersona(personaIdentifier, 'safe delete');
    }, [
        nextId,
        queryClient,
        currentPersona
    ]);
    const { mutate: onDelete, isLoading } = (0,useMutation/* useMutation */.D)({
        mutationFn: handleDelete,
        onMutate: async ()=>{
            await queryClient.cancelQueries([
                'relation-records',
                rawPublicKey
            ]);
            await queryClient.cancelQueries([
                'friends',
                rawPublicKey
            ]);
            queryClient.setQueryData([
                'friends',
                rawPublicKey
            ], (oldData)=>{
                if (!oldData) return undefined;
                return {
                    ...oldData,
                    pages: oldData.pages.map((page)=>{
                        return {
                            friends: page.friends.filter((friend)=>friend.persona.publicKeyAsHex !== nextId),
                            nextPageOffset: page.nextPageOffset
                        };
                    })
                };
            });
            showSnackbar(t.popups_encrypted_friends_deleted_successfully(), {
                variant: 'success'
            });
            setDeleted(true);
            navigate('/friends');
        },
        onSettled: ()=>{
            queryClient.invalidateQueries([
                'relation-records',
                rawPublicKey
            ]);
            queryClient.invalidateQueries([
                'friends',
                rawPublicKey
            ]);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FriendsDetailUI, {
        avatar: avatar,
        profiles: profiles,
        nextId: nextId,
        publicKey: publicKey,
        isLocal: isLocal ? !deleted : false,
        onDelete: onDelete,
        deleting: isLoading,
        localProfile: localProfile
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/index.tsx








const Home = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6949), __webpack_require__.e(8929)]).then(__webpack_require__.bind(__webpack_require__, 28929)));
const r = (0,relativeRouteOf/* relativeRouteOf */.Y)(Routes/* PopupRoutes */.mZ.Friends);
const Contacts = /*#__PURE__*/ (0,react.memo)(function Contacts() {
    const modalNavigate = (0,ActionModalContext/* useModalNavigate */.ao)();
    const [params] = (0,dist/* useSearchParams */.lr)();
    const matchDetail = (0,react_router_dist/* useMatch */.bS)(`${Routes/* PopupRoutes */.mZ.FriendsDetail}/:id`);
    (0,react.useEffect)(()=>{
        const from = params.get('from');
        const providerType = params.get('providerType');
        if (from === Routes/* PopupModalRoutes */.cY.SelectProvider && !!providerType) {
            modalNavigate(Routes/* PopupModalRoutes */.cY.ConnectProvider, {
                providerType
            });
        }
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}),
        children: [
            matchDetail ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScrollContext */.c.Provider, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dist/* Routes */.Z5, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dist/* Route */.AW, {
                            path: "*",
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Home, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dist/* Route */.AW, {
                            path: `${r(Routes/* PopupRoutes */.mZ.FriendsDetail)}/:id?`,
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(FriendsDetail, {})
                        })
                    ]
                })
            })
        ]
    });
});
/* harmony default export */ const Friends = (Contacts);


/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AccountAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55106);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16044);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77953);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            position: 'relative',
            width: 40,
            height: 40
        },
        avatar: {
            width: 40,
            height: 40,
            fontSize: 60,
            borderRadius: 99
        },
        network: {
            height: 14,
            width: 14,
            borderRadius: 99,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            right: -7,
            bottom: 0
        },
        valid: {
            width: 6,
            height: 6,
            borderRadius: 99,
            border: `1px solid ${theme.palette.maskColor.bottom}`,
            position: 'absolute',
            top: 3,
            right: 2,
            backgroundColor: theme.palette.maskColor.warn
        }
    }));
const AccountAvatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ avatar, network, isValid, ...props })=>{
    const { classes } = useStyles(undefined, {
        props
    });
    const Icon = network ? _masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .SOCIAL_MEDIA_ROUND_ICON_MAPPING */ .hA[network] : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.container,
        children: [
            avatar ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.avatar,
                src: avatar
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__.GrayMasks, {
                className: classes.avatar
            }),
            Icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.network,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                    size: 14
                })
            }) : null,
            !isValid && network === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EnhanceableSite */ .J.Twitter ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.valid
            }) : null
        ]
    });
});


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

/***/ 84582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ relativeRouteOf)
/* harmony export */ });
function relativeRouteOf(parent) {
    return (child)=>{
        if (!child.startsWith(parent)) throw new Error();
        return child.slice(parent.length).replace(/^\//, '');
    };
}


/***/ }),

/***/ 85793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ EmptyStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 400,
            marginTop: theme.spacing(1.5)
        }
    }));
const EmptyStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function EmptyStatus({ className, children, iconSize = 32, ...rest }) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.EmptySimple, {
                size: iconSize
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.text,
                component: "div",
                children: children
            })
        ]
    });
});


/***/ }),

/***/ 64472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ RestorableScrollContext),
/* harmony export */   g: () => (/* binding */ RestorableScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54225);


function useScrollState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
}
const RestorableScrollContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .createContainer */ .f)(useScrollState);
RestorableScrollContext.Provider.displayName = 'RestorableScrollProvider';
// eslint-disable-next-line @typescript-eslint/ban-types
const RestorableScroll = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function RestorableScroll({ scrollKey, targetRef, children }) {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const mapRef = RestorableScrollContext.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        const target = targetRef?.current || containerRef.current;
        if (!target) return;
        target.scrollTop = mapRef.current.get(scrollKey) || 0;
        return ()=>{
            mapRef.current.set(scrollKey, target.scrollTop);
        };
    }, [
        scrollKey
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children, {
        ...children.props,
        ref: targetRef ? undefined : containerRef
    });
});


/***/ }),

/***/ 22144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useMutation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22549);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41026);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65295);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9599);
'use client';






function useMutation(arg1, arg2, arg3) {
  const options = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__/* .parseMutationArgs */ .lV)(arg1, arg2, arg3);
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useQueryClient */ .NL)({
    context: options.context
  });
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_3__/* .MutationObserver */ .X(queryClient, options));
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_5__/* .notifyManager */ .V.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  const mutate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((variables, mutateOptions) => {
    observer.mutate(variables, mutateOptions).catch(noop);
  }, [observer]);

  if (result.error && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .shouldThrowError */ .L)(observer.options.useErrorBoundary, [result.error])) {
    throw result.error;
  }

  return { ...result,
    mutate,
    mutateAsync: result.mutate
  };
} // eslint-disable-next-line @typescript-eslint/no-empty-function

function noop() {}


//# sourceMappingURL=useMutation.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.8813.js.map