"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4693],{

/***/ 24693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PermissionAwareRedirect)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/parseURL.ts
var parseURL = __webpack_require__(38506);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(77607);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
;// CONCATENATED MODULE: ./packages/mask/popups/components/MissingParameter/index.tsx



function MissingParameter(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h5",
                    children: props.message
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: t.popups_missing_parameter_caption()
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(35406);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/PermissionAwareRedirect/ui.tsx




function PermissionAwareRedirectUI(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    if (props.granted) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                t.redirect_to(),
                " ",
                props.url,
                ".",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "redirect_alert",
                    components: {
                        terms: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: props.url
                        })
                    }
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        children: t.popups_permission_request()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t.popups_permission_request_content()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: props.url
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t.popups_permission_request_content2()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                sx: {
                    flexDirection: 'row-reverse'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        onClick: props.onRequest,
                        children: t.popups_grant()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: props.onCancel,
                        children: t.cancel()
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/PermissionAwareRedirect/utils.ts
function getHostPermissionFieldFromURL(url) {
    const u = new URL(url);
    return `*://${u.hostname}/*`;
}
function isValidURL(url) {
    if (!URL.canParse(url)) return false;
    const u = new URL(url);
    return u.protocol.startsWith('http');
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/PermissionAwareRedirect/index.tsx








function PermissionAwareRedirect() {
    const url = new URLSearchParams((0,dist/* useLocation */.TH)().search).get('url');
    const context = new URLSearchParams((0,dist/* useLocation */.TH)().search).get('context');
    if (!url) return /*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter, {
        message: "Parameter URL not found."
    });
    if (!context) return /*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter, {
        message: "Parameter context not found."
    });
    if (!isValidURL(url)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter, {
        message: "Parameter URL is not valid."
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Inner, {
        url: url,
        context: context
    });
}
function Inner({ url, context }) {
    const { value: hasPermission, retry } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!url) return false;
        return browser.permissions.contains({
            origins: [
                getHostPermissionFieldFromURL(url)
            ]
        });
    }, [
        url
    ]);
    (0,react.useEffect)(()=>{
        if (!hasPermission) return;
        const parsed = (0,parseURL/* parseURL */.L)(url);
        if (!parsed) return;
        parsed.searchParams.append('mask_context', context);
        location.assign(parsed.toString());
    }, [
        hasPermission,
        url
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirectUI, {
        url: url,
        granted: !!hasPermission,
        onCancel: ()=>window.close(),
        onRequest: ()=>{
            browser.permissions.request({
                origins: [
                    getHostPermissionFieldFromURL(url)
                ]
            }).finally(retry);
        }
    });
}


/***/ })

}]);
//# sourceMappingURL=chunk.4693.js.map