"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5148],{

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

/***/ 55148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4643);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51573);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8311);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64455);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(38096);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(10292);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3223);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(32863);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24002);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94036);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80849);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73388);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18382);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5130);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8386);
/* harmony import */ var _hooks_useSupportedSites_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67373);
/* harmony import */ var _hooks_useTitle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81430);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            padding: theme.spacing(2),
            flex: 1,
            paddingBottom: 80,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            rowGap: theme.spacing(2)
        },
        header: {
            display: 'flex',
            columnGap: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5)
        },
        headerContent: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        headerIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.maskColor.white,
            padding: theme.spacing(1.25),
            borderRadius: 10,
            background: theme.palette.maskColor.primary
        },
        title: {
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700
        },
        titleDescription: {
            fontSize: 14,
            lineHeight: '20px',
            color: theme.palette.maskColor.third
        },
        list: {
            borderRadius: 16,
            background: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.maskColor.bottomBg,
            backdropFilter: 'blur(8px)',
            padding: theme.spacing(2)
        },
        listItem: {
            cursor: 'pointer',
            padding: theme.spacing(1.5, 0),
            borderBottom: `1px solid ${theme.palette.maskColor.line}`,
            '&:first-of-type': {
                paddingTop: 0
            },
            '&:last-of-type': {
                paddingBottom: 0,
                borderBottom: 'none'
            },
            '&:hover > span': {
                color: theme.palette.maskColor.main
            }
        },
        listItemText: {
            margin: 0
        },
        listItemPrimaryText: {
            color: theme.palette.maskColor.third,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700
        },
        listItemSecondaryText: {
            color: theme.palette.maskColor.main,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 700
        },
        arrow: {
            color: theme.palette.maskColor.second
        }
    }));
const FEEDBACK_MAIL = 'Support@mask.io';
const FAQ_LINK = 'realmasknetwork.notion.site/realmasknetwork/Mask-Network-2-0-Setting-Up-Features-The-Broader-Ecosystem-e4b3e24182e045a58bdb5549c0daea82';
const HOME_LINK = 'Mask.io';
const Settings = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function Settings() {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useMaskSharedTrans */ .b)();
    const { classes } = useStyles();
    const modalNavigate = (0,_components_index_js__WEBPACK_IMPORTED_MODULE_7__/* .useModalNavigate */ .ao)();
    const lang = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_8__/* .useLanguage */ .Z)();
    const mode = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_9__/* .useAppearance */ .M)();
    const { user } = _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_10__/* .UserContext */ .S.useContainer();
    const LANGUAGE_OPTIONS_MAP = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .LanguageOptions */ .P7.__auto__]: t.popups_settings_language_auto(),
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .LanguageOptions */ .P7.enUS]: 'English',
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .LanguageOptions */ .P7.zhCN]: '简体中文',
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .LanguageOptions */ .P7.zhTW]: '繁体中文',
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .LanguageOptions */ .P7.jaJP]: '日本語',
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .LanguageOptions */ .P7.koKR]: '한국인'
        }), [
        t
    ]);
    const APPEARANCE_OPTIONS_MAP = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .Appearance */ .um.default]: t.popups_settings_appearance_default(),
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .Appearance */ .um.light]: t.popups_settings_appearance_light(),
            [_masknet_public_api__WEBPACK_IMPORTED_MODULE_11__/* .Appearance */ .um.dark]: t.popups_settings_appearance_dark()
        }), [
        t
    ]);
    const itemClasses = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            root: classes.listItemText,
            primary: classes.listItemPrimaryText,
            secondary: classes.listItemSecondaryText
        }), [
        classes
    ]);
    const localBackupTip = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!user.backupPassword) return t.popups_settings_set_backup_password_tips();
        const backupMethod = localStorage.getItem('backupMethod');
        // old data
        if (backupMethod === 'local' && !user.localBackupAt) return t.popups_settings_local_backup_exist();
        if (!user.localBackupAt) return t.popups_settings_no_backup();
        return t.popups_settings_backup_on({
            time: user.localBackupAt
        });
    }, [
        user
    ]);
    const cloudBackupTip = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!user.backupPassword) return t.popups_settings_set_backup_password_tips();
        const backupMethod = localStorage.getItem('backupMethod');
        // old data
        if (backupMethod === 'cloud' && !user.cloudBackupAt) return t.popups_settings_cloud_backup_exist();
        if (!user.cloudBackupAt) return t.popups_settings_no_backup();
        return t.popups_settings_backup_on({
            time: user.cloudBackupAt
        });
    }, [
        user
    ]);
    const { data } = (0,_hooks_useSupportedSites_js__WEBPACK_IMPORTED_MODULE_12__/* .useSupportedSites */ .G)();
    const handleOpenDashboard = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (route)=>{
        await browser.tabs.create({
            active: true,
            url: browser.runtime.getURL(`/dashboard.html#${route}`)
        });
        if (_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .Sniffings */ .Y.is_firefox) {
            window.close();
        }
        await _services__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP.Helper.removePopupWindow();
    }, []);
    (0,_hooks_useTitle_js__WEBPACK_IMPORTED_MODULE_15__/* .useTitle */ .Z)(t.settings());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_index_js__WEBPACK_IMPORTED_MODULE_16__/* .NormalHeader */ .n, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                className: classes.container,
                "data-hide-scrollbar": true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.header,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerIcon,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.Filter, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerContent,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: classes.title,
                                                children: t.popups_settings_general()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: classes.titleDescription,
                                                children: t.popups_settings_basic_setting()
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.SelectLanguage),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_language(),
                                                secondary: LANGUAGE_OPTIONS_MAP[lang]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.SelectAppearance),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_appearance(),
                                                secondary: APPEARANCE_OPTIONS_MAP[mode]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.SupportedSitesModal),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_supported_sites(),
                                                secondary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC, {
                                                    i18nKey: "popups_settings_supported_website",
                                                    components: {
                                                        strong: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            style: {
                                                                color: theme.palette.maskColor.main
                                                            }
                                                        })
                                                    },
                                                    values: {
                                                        count: data?.filter((x)=>x.allowInject && x.hasPermission).length
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.header,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerIcon,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.History, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerContent,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: classes.title,
                                                children: t.popups_settings_backup_and_recovery()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: classes.titleDescription,
                                                children: t.popups_settings_data_correlation()
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>{
                                            if (!user.backupPassword) {
                                                modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.SetBackupPassword);
                                            } else {
                                                handleOpenDashboard(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .DashboardRoutes */ .vq.CloudBackup);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_cloud_backup(),
                                                secondary: cloudBackupTip
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>{
                                            if (!user.backupPassword) {
                                                modalNavigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.SetBackupPassword);
                                            } else {
                                                handleOpenDashboard(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .DashboardRoutes */ .vq.LocalBackup);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_local_backup(),
                                                secondary: localBackupTip
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>handleOpenDashboard(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .DashboardRoutes */ .vq.RecoveryPersona),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_restore_database(),
                                                secondary: t.popups_settings_restore_database_description()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>modalNavigate(user.backupPassword ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.ChangeBackupPassword : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .PopupModalRoutes */ .cY.SetBackupPassword),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_backup_password(),
                                                secondary: user.backupPassword ? t.popups_settings_change_backup_password() : t.popups_settings_not_set()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.header,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerIcon,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.Questions, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerContent,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: classes.title,
                                                children: t.popups_settings_support()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: classes.titleDescription,
                                                children: t.popups_settings_basic_setting()
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__/* .openWindow */ .x)(`mailto:${FEEDBACK_MAIL}`),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_feedback(),
                                                secondary: FEEDBACK_MAIL
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__/* .openWindow */ .x)(`https://${FAQ_LINK}`, '_blank', {
                                                referrer: false
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_faq(),
                                                secondary: 'realmasknetwork.notion.site'
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__/* .openWindow */ .x)(`https://${HOME_LINK}`, '_blank', {
                                                referrer: false
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_website(),
                                                secondary: HOME_LINK
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.header,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerIcon,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.Appearance, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.headerContent,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                            className: classes.title,
                                            children: t.popups_settings_about()
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__/* .openWindow */ .x)('https://github.com/DimensionDev/Maskbook', '_blank', {
                                                referrer: false
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                primary: t.popups_settings_version(),
                                                secondary: _masknet_flags__WEBPACK_IMPORTED_MODULE_1__/* .env */ .O.VERSION
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__/* .openWindow */ .x)('https://legal.mask.io/maskbook/service-agreement-beta-browser.html', '_blank', {
                                                referrer: false
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                secondary: t.popups_settings_service_agreement()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                                        className: classes.listItem,
                                        onClick: ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_24__/* .openWindow */ .x)('https://legal.mask.io/maskbook/privacy-policy-browser.html', '_blank', {
                                                referrer: false
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                classes: itemClasses,
                                                secondary: t.popups_settings_primary_policy()
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_18__.ArrowRight, {
                                                size: 24,
                                                className: classes.arrow
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);


/***/ }),

/***/ 38096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ openWindow)
/* harmony export */ });
// Behavior
// Dimension
function openWindow(url, target = '_blank', features = {}) {
    if (!url) return null;
    const flags = [];
    for (const [name, value] of Object.entries(features.behaviors ?? {})){
        if (value) flags.push(`${name}=1`);
    }
    if (!features.opener) flags.push('noopener');
    if (!features.referrer) flags.push('noreferrer');
    if (Number.isFinite(features.width)) flags.push(`width=${features.width}`);
    if (Number.isFinite(features.height)) flags.push(`height=${features.height}`);
    if (Number.isFinite(features.screenX)) flags.push(`screenX=${features.screenX}`);
    if (Number.isFinite(features.screenY)) flags.push(`screenY=${features.screenY}`);
    return window.open(url, target, flags.join(' '));
}


/***/ })

}]);
//# sourceMappingURL=chunk.5148.js.map