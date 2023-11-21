"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1299],{

/***/ 27341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useConnectedOrigins)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98170);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);




function useConnectedOrigins() {
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_EVM);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)([
        'wallet-granted-origins',
        wallet?.address
    ], async ()=>await _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Wallet.getAllConnectedOrigins(wallet.address), {
        enabled: !!wallet?.address,
        networkMode: 'always'
    });
}


/***/ }),

/***/ 81299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_ConnectedSites)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useMutation.mjs
var useMutation = __webpack_require__(22144);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/DisconnectModal/index.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), rgba(28, 104, 243, 0.20)',
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            top: 0,
            left: 0
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            background: theme.palette.maskColor.white,
            borderRadius: '14px',
            width: '320px',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
        title: {
            color: theme.palette.maskColor.main,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '20px',
            marginBottom: '24px'
        },
        desc: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            marginBottom: '36px',
            textAlign: 'center'
        },
        confirmButton: {
            background: theme.palette.maskColor.warn,
            borderRadius: '99px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.maskColor.white,
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            width: '100%',
            outline: 'none',
            border: 'none',
            padding: '11px',
            marginBottom: '16px',
            cursor: 'pointer'
        },
        cancelButton: {
            background: theme.palette.maskColor.thirdMain,
            borderRadius: '99px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.maskColor.main,
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            width: '100%',
            outline: 'none',
            border: 'none',
            padding: '11px',
            marginBottom: '24px',
            cursor: 'pointer'
        },
        disconnectAll: {
            color: theme.palette.maskColor.highlight,
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            outline: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
        }
    }));
const DisconnectModal = /*#__PURE__*/ (0,react.memo)(function DisconnectModal({ origin, setOpen }) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const wallet = (0,useWallet/* useWallet */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { mutate: onDisconnect } = (0,useMutation/* useMutation */.D)({
        mutationFn: (0,react.useCallback)(async ()=>{
            if (!wallet) return;
            await service/* default */.ZP.Wallet.disconnectWalletFromOrigin(wallet.address, origin);
        }, []),
        onMutate: async ()=>{
            await queryClient/* queryClient */.E.invalidateQueries([
                'wallet-granted-origins',
                wallet?.address
            ]);
            showSnackbar(t.popups_wallet_disconnect_site_success(), {
                variant: 'success'
            });
            setOpen(false);
        },
        onSettled: ()=>{
            queryClient/* queryClient */.E.invalidateQueries([
                'wallet-granted-origins',
                wallet?.address
            ]);
        }
    });
    const { mutate: onDisconnectAll } = (0,useMutation/* useMutation */.D)({
        mutationFn: (0,react.useCallback)(async ()=>{
            if (!wallet) return;
            await service/* default */.ZP.Wallet.disconnectAllOriginsConnectedFromWallet(wallet.address);
        }, [
            wallet?.address
        ]),
        onMutate: async ()=>{
            await queryClient/* queryClient */.E.invalidateQueries([
                'wallet-granted-origins',
                wallet?.address
            ]);
            showSnackbar(t.popups_wallet_disconnect_site_success(), {
                variant: 'success'
            });
            setOpen(false);
        },
        onSettled: ()=>{
            queryClient/* queryClient */.E.invalidateQueries([
                'wallet-granted-origins',
                wallet?.address
            ]);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.card,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.plugin_wallet_disconnect()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.desc,
                    children: t.popups_wallet_disconnect_confirm()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    type: "button",
                    className: classes.confirmButton,
                    disabled: !wallet,
                    onClick: ()=>onDisconnect(),
                    children: t.confirm()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    type: "button",
                    className: classes.cancelButton,
                    onClick: ()=>setOpen(false),
                    children: t.cancel()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    type: "button",
                    className: classes.disconnectAll,
                    disabled: !wallet,
                    onClick: ()=>onDisconnectAll(),
                    children: t.popups_wallet_disconnect_all()
                })
            ]
        })
    });
});
/* harmony default export */ const components_DisconnectModal = (DisconnectModal);

// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/components/OriginCard/index.tsx








const OriginCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            padding: '8px',
            alignItems: 'center',
            gap: '6px',
            borderRadius: '8px',
            border: '1px solid ' + theme.palette.maskColor.line
        },
        site: {
            display: 'flex',
            flexDirection: 'column',
            width: '296px'
        },
        siteName: {
            color: theme.palette.maskColor.main,
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '16px'
        },
        siteUrl: {
            color: theme.palette.maskColor.main,
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '16px'
        },
        button: {
            outline: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
        }
    }));
const OriginCard = /*#__PURE__*/ (0,react.memo)(function OriginCard({ origin }) {
    const { classes } = OriginCard_useStyles();
    const [open, setOpen] = (0,react.useState)(false);
    const Icon = (0,react.useMemo)(()=>constants/* SOCIAL_MEDIA_ROUND_ICON_MAPPING */.hA[origin], [
        origin
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            Icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                size: 24
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.site,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.siteName,
                        children: src_constants/* SOCIAL_MEDIA_NAME */.OZ[origin]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.siteUrl,
                        children: origin
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: classes.button,
                onClick: ()=>setOpen(true),
                type: "button",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Disconnect, {})
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_DisconnectModal, {
                origin: origin,
                setOpen: (open)=>{
                    setOpen(open);
                }
            }) : null
        ]
    });
});
/* harmony default export */ const components_OriginCard = (OriginCard);

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useConnectedOrigins.ts
var useConnectedOrigins = __webpack_require__(27341);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/ConnectedSites/index.tsx








const ConnectedSites_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px'
        },
        desc: {
            color: theme.palette.maskColor.second,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px'
        },
        cardList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 0'
        }
    }));
const ConnectedSites = /*#__PURE__*/ (0,react.memo)(function ConnectedSites() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = ConnectedSites_useStyles();
    (0,useTitle/* useTitle */.Z)(t.popups_wallet_connected_sites());
    const _ = (0,useConnectedOrigins/* useConnectedOrigins */.T)();
    const origins = _.data ? [
        ..._.data
    ].sort((a, b)=>a.localeCompare(b, 'en-US')) : undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.desc,
                children: t.popups_wallet_connected_sites_description()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.cardList,
                children: origins?.map((origin)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(components_OriginCard, {
                        origin: origin
                    }, origin))
            })
        ]
    });
});
/* harmony default export */ const Wallet_ConnectedSites = (ConnectedSites);


/***/ })

}]);
//# sourceMappingURL=chunk.1299.js.map