"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9043],{

/***/ 49043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Derive)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
var max = __webpack_require__(50162);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/generateNewWalletName.ts

function generateNewWalletName(wallets, index = 0, preIndex) {
    const indexList = wallets.filter((x)=>!x.owner).map((x)=>x.name.split('Wallet ')[1]);
    const maxIndex = (0,max/* default */.Z)(indexList.filter((x)=>x && !Number.isNaN(x)).map(Number)) ?? 0;
    const preIndexNotExists = !indexList.some((x)=>Number(x) === preIndex);
    const finalIndex = preIndex && (preIndex > maxIndex || preIndexNotExists) ? preIndex : maxIndex + index + 1;
    return `Wallet ${finalIndex}`;
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(70429);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/popups/components/WalletBalance/index.tsx
var WalletBalance = __webpack_require__(71418);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
// EXTERNAL MODULE: ./packages/mask/popups/hooks/useWalletGroup.ts
var useWalletGroup = __webpack_require__(83272);
// EXTERNAL MODULE: ./packages/mask/popups/modals/modal-controls.ts
var modal_controls = __webpack_require__(75904);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Wallet/CreateWallet/context.ts
var context = __webpack_require__(94285);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Wallet/CreateWallet/Derive.tsx





















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            padding: theme.spacing(0, 2, 2),
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        },
        list: {
            flexGrow: 1,
            overflow: 'auto'
        },
        wallet: {
            padding: theme.spacing(1),
            borderRadius: 8,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            },
            position: 'relative',
            paddingLeft: 44,
            marginBottom: theme.spacing(2)
        },
        indicator: {
            position: 'absolute',
            left: 8,
            top: 0,
            bottom: 0,
            margin: 'auto'
        },
        walletName: {
            fontWeight: 700,
            fontSize: 12
        },
        walletAddress: {
            fontWeight: 400,
            fontSize: 12
        },
        balance: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '16px',
            color: theme.palette.maskColor.second
        },
        editButton: {
            cursor: 'pointer',
            marginLeft: theme.spacing(2)
        }
    }));
async function pollResult(address) {
    const subscription = entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet].subscription.wallets;
    if (subscription.getCurrentValue().find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address))) return;
    const [promise, resolve] = (0,esm/* defer */.PQ)();
    const unsubscribe = subscription.subscribe(()=>{
        if (subscription.getCurrentValue().find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address))) resolve(true);
    });
    return (0,esm/* timeout */.Vs)(promise, 10_000, 'It takes too long to create a wallet. You might try again.').finally(unsubscribe);
}
const DeriveWallet = /*#__PURE__*/ (0,react.memo)(function DeriveWallet() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = useStyles();
    const mnemonicId = (0,dist/* useLocation */.TH)().state?.mnemonicId;
    const walletGroup = (0,useWalletGroup/* useWalletGroup */.j)();
    const wallets = walletGroup?.groups[mnemonicId] ?? constants/* EMPTY_LIST */.rP;
    const currentWallet = (0,useWallet/* useWallet */.O)();
    const { NameService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const [isDeriving, setIsDeriving] = context/* DeriveStateContext */.v.useContainer();
    const isDerivingRef = (0,react.useRef)(isDeriving);
    (0,react.useEffect)(()=>{
        isDerivingRef.current = isDeriving;
    });
    const [{ loading: creating }, create] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (isDerivingRef.current) return;
        setIsDeriving(true);
        try {
            const nextWallet = await service/* default */.ZP.Wallet.generateNextDerivationAddress();
            const ens = await NameService?.safeReverse?.(nextWallet, true);
            const allWallets = entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet].subscription.wallets.getCurrentValue();
            queryClient/* queryClient */.E.invalidateQueries([
                '@@mask-wallets'
            ]);
            const name = ens || generateNewWalletName(allWallets);
            const address = await service/* default */.ZP.Wallet.deriveWallet(name, mnemonicId);
            await pollResult(address);
            await entry/* Web3 */.Bv.connect({
                providerType: types/* ProviderType */.lP.MaskWallet,
                account: address
            });
        } catch  {}
        setIsDeriving(false);
    }, [
        mnemonicId
    ]);
    (0,useTitle/* useTitle */.Z)(t.popups_add_wallet());
    const loading = creating || isDeriving;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.content,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                "data-hide-scrollbar": true,
                children: wallets.map((wallet)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.wallet,
                        children: [
                            (0,isSameAddress/* isSameAddress */.W)(wallet.address, currentWallet?.address) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                                className: classes.indicator,
                                size: 20
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                                size: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                flexGrow: 1,
                                ml: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.walletName,
                                        children: wallet.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        flexDirection: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                                                title: wallet.address,
                                                className: classes.walletAddress,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    mr: "auto",
                                                    children: (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 4)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletBalance/* WalletBalance */.N, {
                                                className: classes.balance,
                                                skeletonWidth: 60,
                                                account: wallet.address
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Edit2, {
                                size: 20,
                                className: classes.editButton,
                                onClick: ()=>{
                                    modal_controls/* WalletRenameModal */.AY.open({
                                        wallet,
                                        title: t.rename()
                                    });
                                }
                            })
                        ]
                    }, wallet.address))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                loading: loading,
                fullWidth: true,
                disabled: loading,
                onClick: create,
                children: t.add()
            })
        ]
    });
});
/* harmony default export */ const Derive = (DeriveWallet);


/***/ })

}]);
//# sourceMappingURL=chunk.9043.js.map